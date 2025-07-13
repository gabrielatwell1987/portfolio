import { VITE_GITHUB_TOKEN, VITE_GITHUB_USERNAME } from '$env/static/private';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	try {
		// GitHub GraphQL query to get contribution data
		const query = `
			query($username: String!, $from: DateTime!, $to: DateTime!) {
				user(login: $username) {
					contributionsCollection(from: $from, to: $to) {
						contributionCalendar {
							totalContributions
							weeks {
								contributionDays {
									date
									contributionCount
									color
								}
							}
						}
					}
				}
			}
		`;

		// Calculate date range (last year)
		const to = new Date();
		const from = new Date();
		from.setFullYear(to.getFullYear() - 1);

		const variables = {
			username: VITE_GITHUB_USERNAME,
			from: from.toISOString(),
			to: to.toISOString()
		};

		const response = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${VITE_GITHUB_TOKEN}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query,
				variables
			})
		});

		if (!response.ok) {
			console.error('GitHub API Error:', response.status, response.statusText);
			throw new Error(`GitHub API responded with ${response.status}`);
		}

		const data = await response.json();

		if (data.errors) {
			console.error('GraphQL Errors:', data.errors);
			throw new Error('GraphQL query failed');
		}

		const contributionCalendar = data.data.user.contributionsCollection.contributionCalendar;

		return json({
			success: true,
			totalContributions: contributionCalendar.totalContributions,
			weeks: contributionCalendar.weeks
		});
	} catch (error) {
		console.error('Error fetching GitHub contributions:', error);

		// Return mock data as fallback
		return json({
			success: false,
			error: error.message,
			fallback: true,
			...generateFallbackData()
		});
	}
}

// Fallback data generator (simplified version of your current mock data)
function generateFallbackData() {
	const weeks = [];
	const today = new Date();
	const oneYearAgo = new Date(today);
	oneYearAgo.setFullYear(today.getFullYear() - 1);

	const startDate = new Date(oneYearAgo);
	startDate.setDate(startDate.getDate() - startDate.getDay());

	let currentDate = new Date(startDate);

	while (currentDate <= today) {
		const week = { contributionDays: [] };

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

function getContributionColor(count) {
	if (count === 0) return '#ebedf0';
	if (count <= 3) return '#9be9a8';
	if (count <= 6) return '#40c463';
	if (count <= 9) return '#30a14e';
	return '#216e39';
}
