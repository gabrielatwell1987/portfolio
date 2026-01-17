export async function load() {
	try {
		const response = await fetch('/api/github-contributions');
		if (!response.ok) throw new Error(`API error: ${response.status}`);
		const data = await response.json();
		return { contributions: data };
	} catch (error) {
		console.error('Error in load:', error);
		// Fallback to generated data
		return { contributions: generateFallbackData() };
	}
}

export const config = {
	isr: {
		expiration: 86400
	}
};

// Fallback functions (copy from +server.ts)
interface ContributionDay {
	date: string;
	contributionCount: number;
	color: string;
}

interface Week {
	contributionDays: ContributionDay[];
}

function generateFallbackData(): { totalContributions: number; weeks: Week[] } {
	const weeks: Week[] = [];
	const today = new Date();
	const oneYearAgo = new Date(today);
	oneYearAgo.setFullYear(today.getFullYear() - 1);

	const startDate = new Date(oneYearAgo);
	startDate.setDate(startDate.getDate() - startDate.getDay());

	let currentDate = new Date(startDate);

	while (currentDate <= today) {
		const week: Week = { contributionDays: [] };

		for (let i = 0; i < 7; i++) {
			if (currentDate <= today) {
				let contributionCount = 0;
				const dayOfWeek = currentDate.getDay();
				const random = Math.random();

				if (dayOfWeek >= 1 && dayOfWeek <= 5) {
					if (random < 0.7) contributionCount = Math.floor(Math.random() * 8) + 1;
				} else {
					if (random < 0.4) contributionCount = Math.floor(Math.random() * 4) + 1;
				}

				if (random > 0.95) contributionCount = Math.floor(Math.random() * 15) + 10;

				week.contributionDays.push({
					date: currentDate.toISOString().split('T')[0],
					contributionCount,
					color: getContributionColor(contributionCount)
				});
			}

			currentDate.setDate(currentDate.getDate() + 1);
		}

		if (week.contributionDays.length > 0) {
			weeks.push(week);
		}
	}

	return {
		totalContributions: weeks.reduce(
			(total, week) =>
				total +
				week.contributionDays.reduce((weekTotal, day) => weekTotal + day.contributionCount, 0),
			0
		),
		weeks
	};
}

function getContributionColor(count: number): string {
	if (count === 0) return '#ebedf0';
	if (count <= 3) return '#9be9a8';
	if (count <= 6) return '#40c463';
	if (count <= 9) return '#30a14e';
	return '#216e39';
}
