import {
    CELL_SIZE,
    CELL_GAP,
    GRID_HEIGHT,
    MONTH_LABEL_HEIGHT,
    DAY_LABEL_WIDTH,
    MONTHS,
    DAYS,
    DAY_INDICES,
    MOBILE_CELL_SIZE,
    MOBILE_CELL_GAP,
    MOBILE_GRID_HEIGHT,
    MOBILE_MONTH_LABEL_HEIGHT,
    MOBILE_DAY_LABEL_WIDTH,
    getContributionLevel,
    formatDate,
    getContributionText,
} from './githubContributions';

export interface ContributionDay {
    contributionCount: number;
    date: string;
}

export interface Week {
    contributionDays: ContributionDay[];
}

export interface ContributionsData {
    weeks: Week[];
    totalContributions: number;
}

export interface MobileTooltip {
    visible: boolean;
    x: number;
    y: number;
    content: string;
    date: string;
}

export function getCurrentDimensions(isSmallContainer: boolean) {
    return {
        cellSize: isSmallContainer ? MOBILE_CELL_SIZE : CELL_SIZE,
        cellGap: isSmallContainer ? MOBILE_CELL_GAP : CELL_GAP,
        gridHeight: isSmallContainer ? MOBILE_GRID_HEIGHT : GRID_HEIGHT,
        monthLabelHeight: isSmallContainer
            ? MOBILE_MONTH_LABEL_HEIGHT
            : MONTH_LABEL_HEIGHT,
        dayLabelWidth: isSmallContainer
            ? MOBILE_DAY_LABEL_WIDTH
            : DAY_LABEL_WIDTH,
    };
}

export function getMonthPositions(
    weeks: Week[],
    isSmallContainer: boolean,
): { name: string; x: number }[] {
    const months: { name: string; x: number }[] = [];
    const { cellSize, cellGap, dayLabelWidth } =
        getCurrentDimensions(isSmallContainer);
    let currentMonth = -1;
    let weekIndex = 0;
    let lastLabelX = -100;

    for (const week of weeks) {
        if (week.contributionDays.length > 0) {
            const [year, month, day] = week.contributionDays[0].date
                .split('-')
                .map(Number);
            const monthIndex = new Date(year, month - 1, day).getMonth();

            if (monthIndex !== currentMonth) {
                const proposedX =
                    weekIndex * (cellSize + cellGap) + dayLabelWidth;
                const actualX = Math.max(proposedX, lastLabelX + 60);
                months.push({ name: MONTHS[monthIndex], x: actualX });
                currentMonth = monthIndex;
                lastLabelX = actualX;
            }
            weekIndex++;
        }
    }
    return months;
}

export function getTotalWidth(
    weeks: Week[],
    isSmallContainer: boolean,
): number {
    const { cellSize, cellGap, dayLabelWidth } =
        getCurrentDimensions(isSmallContainer);
    return dayLabelWidth + weeks.length * (cellSize + cellGap);
}

export function useContributionsGrid(getWeeks: () => Week[]) {
    let isSmallContainer = $state(false);
    let containerEl = $state<HTMLElement | null>(null);
    let mobileTooltip = $state<MobileTooltip>({
        visible: false,
        x: 0,
        y: 0,
        content: '',
        date: '',
    });
    let announcement = $state('');
    let wrapperEl = $state<HTMLElement | null>(null);

    let dimensions = $derived(getCurrentDimensions(isSmallContainer));
    let weeks = $derived(getWeeks());
    let monthPositions = $derived(getMonthPositions(weeks, isSmallContainer));
    let totalWidth = $derived(getTotalWidth(weeks, isSmallContainer));

    function handleDayTouch(event: Event, day: ContributionDay) {
        announcement = `${day.contributionCount} ${getContributionText(day.contributionCount)} on ${formatDate(day.date)}`;

        if (!isSmallContainer) return; // larger containers → native title> tooltip

        event.preventDefault();
        event.stopPropagation();

        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const containerRect = containerEl!.getBoundingClientRect();

        const x = rect.left + rect.width / 2 - containerRect.left;
        const y = rect.top - containerRect.top - 40;

        mobileTooltip = {
            visible: true,
            x: Math.max(50, Math.min(x, containerRect.width - 50)),
            y: Math.max(10, y),
            content: `${day.contributionCount} ${getContributionText(day.contributionCount)}`,
            date: formatDate(day.date),
        };

        setTimeout(() => {
            if (mobileTooltip.visible) {
                mobileTooltip = { ...mobileTooltip, visible: false };
            }
        }, 3000);
    }

    function handleDayKeydown(
        event: KeyboardEvent,
        day: ContributionDay,
        weekIndex: number,
        dayIndex: number,
    ) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleDayTouch(event, day);
            return;
        }

        if (
            !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(
                event.key,
            )
        )
            return;
        event.preventDefault();

        const moves: Record<string, [number, number]> = {
            ArrowLeft: [-1, 0],
            ArrowRight: [1, 0],
            ArrowUp: [0, -1],
            ArrowDown: [0, 1],
        };
        const [dw, dd] = moves[event.key];
        const maxWeek = weeks.length - 1;
        const newWeek = Math.max(0, Math.min(maxWeek, weekIndex + dw));
        const newDay = Math.max(0, Math.min(6, dayIndex + dd));

        const el = document.querySelector(
            `[data-week="${newWeek}"][data-day="${newDay}"]`,
        ) as HTMLElement;
        el?.focus();
    }

    // ResizeObserver → isSmallContainer
    $effect(() => {
        if (typeof window === 'undefined' || !containerEl) return;

        const ro = new ResizeObserver(([entry]) => {
            isSmallContainer = entry.contentRect.width <= 600;
        });
        ro.observe(containerEl);
        return () => ro.disconnect();
    });

    // Click-outside → dismiss mobile tooltip
    $effect(() => {
        if (typeof window === 'undefined' || !isSmallContainer) return;

        const handler = (e: Event) => {
            if (!mobileTooltip.visible) return;
            const target = e.target as HTMLElement;
            if (
                target.closest('.mobile-tooltip') ||
                target.classList.contains('contribution-day')
            )
                return;
            mobileTooltip = { ...mobileTooltip, visible: false };
        };

        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    });

    // On mobile: scroll wrapper to the start (latest contributions first)
    $effect(() => {
        if (typeof window === 'undefined' || !isSmallContainer || !wrapperEl)
            return;
        const timer = setTimeout(() => {
            wrapperEl.scrollLeft = 0;
        }, 100);
        return () => clearTimeout(timer);
    });

    return {
        // State (writable proxies — component can reassign if needed)
        isSmallContainer,
        containerEl,
        mobileTooltip,
        announcement,
        wrapperEl,
        // Derived (read-only proxies)
        dimensions,
        monthPositions,
        totalWidth,
        // Methods
        handleDayTouch,
        handleDayKeydown,
        // Constants the template needs
        DAYS,
        DAY_INDICES,
        getContributionLevel,
        formatDate,
        getContributionText,
    };
}
