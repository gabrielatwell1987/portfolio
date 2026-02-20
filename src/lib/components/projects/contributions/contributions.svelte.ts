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
	getContributionText
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

export interface ContributionWeek {
	contributionDays: ContributionDay[];
}

export function handleDayTouch(
	event: Event,
	day: ContributionDay,
	isSmallContainer: boolean,
	containerElement: HTMLElement | null,
	mobileTooltip: MobileTooltip,
	setMobileTooltip: (tooltip: MobileTooltip) => void,
	setAnnouncement: (announcement: string) => void
): void {
	// screen readers
	setAnnouncement(
		`${day.contributionCount} ${getContributionText(day.contributionCount)} on ${formatDate(day.date)}`
	);

	// on smaller containers - custom tooltip; on larger containers - title
	if (isSmallContainer) {
		event.preventDefault();
		event.stopPropagation();

		const rect = (event.target as HTMLElement).getBoundingClientRect();
		const containerRect = containerElement!.getBoundingClientRect();

		// calculate position relative to the container
		const x = rect.left + rect.width / 2 - containerRect.left;
		const y = rect.top - containerRect.top - 40; // Move tooltip higher

		const updatedTooltip = {
			visible: true,
			x: Math.max(50, Math.min(x, containerRect.width - 50)), // Keep within bounds
			y: Math.max(10, y), // Keep above minimum
			content: `${day.contributionCount} ${getContributionText(day.contributionCount)}`,
			date: formatDate(day.date)
		};

		setMobileTooltip(updatedTooltip);

		// Hide tooltip after 3 seconds
		setTimeout(() => {
			if (updatedTooltip.visible) {
				setMobileTooltip({ ...updatedTooltip, visible: false });
			}
		}, 3000);
	}
	// On larger containers, don't prevent default to allow native title tooltips
}

export function handleDayKeydown(
	event: KeyboardEvent,
	day: ContributionDay,
	weekIndex: number,
	dayIndex: number,
	contributionsData: { weeks: ContributionWeek[] }
): void {
	const { key } = event;

	// Handle activation keys
	if (key === 'Enter' || key === ' ') {
		event.preventDefault();
		return;
	}

	// Handle arrow key navigation
	if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(key)) {
		event.preventDefault();

		let newWeekIndex = weekIndex;
		let newDayIndex = dayIndex;

		switch (key) {
			case 'ArrowLeft':
				newWeekIndex = Math.max(0, weekIndex - 1);
				break;
			case 'ArrowRight':
				newWeekIndex = Math.min(contributionsData.weeks.length - 1, weekIndex + 1);
				break;
			case 'ArrowUp':
				newDayIndex = Math.max(0, dayIndex - 1);
				break;
			case 'ArrowDown':
				newDayIndex = Math.min(6, dayIndex + 1);
				break;
		}

		// Find and focus the target element
		const targetSelector = `[data-week="${newWeekIndex}"][data-day="${newDayIndex}"]`;
		const targetElement = document.querySelector(targetSelector) as HTMLElement;
		if (targetElement) {
			targetElement.focus();
		}
	}
}

export function getCurrentDimensions(isSmallContainer: boolean): {
	cellSize: number;
	cellGap: number;
	gridHeight: number;
	monthLabelHeight: number;
	dayLabelWidth: number;
} {
	return {
		cellSize: isSmallContainer ? MOBILE_CELL_SIZE : CELL_SIZE,
		cellGap: isSmallContainer ? MOBILE_CELL_GAP : CELL_GAP,
		gridHeight: isSmallContainer ? MOBILE_GRID_HEIGHT : GRID_HEIGHT,
		monthLabelHeight: isSmallContainer ? MOBILE_MONTH_LABEL_HEIGHT : MONTH_LABEL_HEIGHT,
		dayLabelWidth: isSmallContainer ? MOBILE_DAY_LABEL_WIDTH : DAY_LABEL_WIDTH
	};
}

export function getMonthPositions(
	contributionsData: { weeks: ContributionWeek[] },
	isSmallContainer: boolean
): { name: string; x: number }[] {
	const months: { name: string; x: number }[] = [];
	const { cellSize, cellGap, dayLabelWidth } = getCurrentDimensions(isSmallContainer);
	let currentMonth = -1;
	let weekIndex = 0;
	let lastLabelX = -100;

	contributionsData.weeks.forEach((week: ContributionWeek, index: number) => {
		if (week.contributionDays.length > 0) {
			// Parse the date string (YYYY-MM-DD) to avoid timezone issues
			const dateString = week.contributionDays[0].date;
			const [year, month, day] = dateString.split('-').map(Number);
			const firstDay = new Date(year, month - 1, day); // month is 0-indexed
			const monthIndex = firstDay.getMonth();

			if (monthIndex !== currentMonth) {
				const proposedX = weekIndex * (cellSize + cellGap) + dayLabelWidth;
				const minSpacing = 60;
				const actualX = Math.max(proposedX, lastLabelX + minSpacing);

				months.push({
					name: MONTHS[monthIndex],
					x: actualX
				});

				currentMonth = monthIndex;
				lastLabelX = actualX;
			}
			weekIndex++;
		}
	});

	return months;
}

export function getTotalWidth(
	contributionsData: { weeks: ContributionWeek[] },
	isSmallContainer: boolean
): number {
	const { cellSize, cellGap, dayLabelWidth } = getCurrentDimensions(isSmallContainer);
	return dayLabelWidth + contributionsData.weeks.length * (cellSize + cellGap);
}
