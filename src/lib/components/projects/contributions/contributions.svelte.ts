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
