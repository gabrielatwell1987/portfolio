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

export {
    DAYS,
    DAY_INDICES,
    getContributionLevel,
    formatDate,
    getContributionText,
};

export function calculateTooltipPosition(
    targetRect: DOMRect,
    containerRect: DOMRect,
    offsetY: number = 8,
): { x: number; y: number } {
    const x = targetRect.left + targetRect.width / 2 - containerRect.left;
    const y = targetRect.top - containerRect.top - offsetY;
    return {
        x: Math.max(50, Math.min(x, containerRect.width - 50)),
        y: Math.max(10, y),
    };
}

export function clampTooltipPosition(
    rawX: number,
    rawY: number,
    containerWidth: number,
): { x: number; y: number } {
    return {
        x: Math.max(50, Math.min(rawX, containerWidth - 50)),
        y: Math.max(10, rawY),
    };
}

export function calculateKeydownMove(
    key: string,
    weekIndex: number,
    dayIndex: number,
    maxWeek: number,
): [number, number] | null {
    const moves: Record<string, [number, number]> = {
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0],
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
    };
    const move = moves[key];
    if (!move) return null;
    const [dw, dd] = move;
    return [
        Math.max(0, Math.min(maxWeek, weekIndex + dw)),
        Math.max(0, Math.min(6, dayIndex + dd)),
    ];
}

export function useResizeObserver(
    getContainer: () => HTMLElement | null,
    onSizeChange: (isSmall: boolean) => void,
) {
    $effect(() => {
        const el = getContainer();
        if (typeof window === 'undefined' || !el) return;

        onSizeChange(el.clientWidth <= 600);
        const ro = new ResizeObserver(([entry]) => {
            onSizeChange(entry.contentRect.width <= 600);
        });
        ro.observe(el);
        return () => ro.disconnect();
    });
}

export function useClickOutsideTooltip(
    getIsSmall: () => boolean,
    getVisible: () => boolean,
    onDismiss: () => void,
) {
    $effect(() => {
        if (typeof window === 'undefined' || !getIsSmall()) return;
        const handler = (e: Event) => {
            if (!getVisible()) return;
            const target = e.target as HTMLElement;
            if (
                target.closest('.mobile-tooltip') ||
                target.classList.contains('contribution-day')
            )
                return;
            onDismiss();
        };
        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    });
}

export function useScrollReset(
    getIsSmall: () => boolean,
    getWrapper: () => HTMLElement | null,
) {
    $effect(() => {
        if (typeof window === 'undefined' || !getIsSmall() || !getWrapper())
            return;
        const timer = setTimeout(() => {
            getWrapper()!.scrollLeft = 0;
        }, 100);
        return () => clearTimeout(timer);
    });
}

export function useTooltipViewportClamp(
    getCalendarEl: () => HTMLElement | null,
    getTooltipState: () => MobileTooltip,
    updatePosition: (x: number, y: number) => void,
) {
    $effect(() => {
        // ❌ Don't check getVisible() — read the state directly so $effect tracks it
        const state = getTooltipState();
        if (typeof window === 'undefined' || !state.visible || !getCalendarEl())
            return;

        const frame = requestAnimationFrame(() => {
            const tooltipEl = document.querySelector(
                '.mobile-tooltip',
            ) as HTMLElement;
            const calEl = getCalendarEl();
            if (!tooltipEl || !calEl) return;

            const tooltipRect = tooltipEl.getBoundingClientRect();
            const calRect = calEl.getBoundingClientRect();
            const padding = 8;

            let newX = state.x;
            let newY = state.y;

            // ── Horizontal ──
            const centerX = calRect.left + state.x;
            const halfW = tooltipRect.width / 2;

            if (centerX - halfW < padding) {
                newX = padding + halfW - calRect.left;
            }
            if (centerX + halfW > window.innerWidth - padding) {
                newX = window.innerWidth - padding - halfW - calRect.left;
            }

            // ── Vertical ──
            const tooltipBottom = calRect.top + state.y + tooltipRect.height;
            const tooltipTop = calRect.top + state.y;

            if (tooltipBottom > window.innerHeight - padding) {
                newY =
                    window.innerHeight -
                    padding -
                    tooltipRect.height -
                    calRect.top;
            }
            if (tooltipTop < padding) {
                newY = padding - calRect.top;
            }

            if (newX !== state.x || newY !== state.y) {
                updatePosition(newX, newY);
            }
        });

        return () => cancelAnimationFrame(frame);
    });
}
