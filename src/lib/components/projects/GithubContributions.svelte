<script>
	// Generate mock GitHub contributions data
	function generateContributionsData() {
		const weeks = [];
		const today = new Date();
		const oneYearAgo = new Date(today);
		oneYearAgo.setFullYear(today.getFullYear() - 1);

		// Start from the beginning of the week one year ago
		const startDate = new Date(oneYearAgo);
		startDate.setDate(startDate.getDate() - startDate.getDay());

		let currentDate = new Date(startDate);

		while (currentDate <= today) {
			const week = { contributionDays: [] };

			// Generate 7 days for this week
			for (let i = 0; i < 7; i++) {
				if (currentDate <= today) {
					// Generate realistic contribution patterns
					let contributionCount = 0;
					const dayOfWeek = currentDate.getDay();
					const random = Math.random();

					// More contributions on weekdays, less on weekends
					if (dayOfWeek >= 1 && dayOfWeek <= 5) {
						if (random < 0.7) contributionCount = Math.floor(Math.random() * 8) + 1;
					} else {
						if (random < 0.4) contributionCount = Math.floor(Math.random() * 4) + 1;
					}

					// Some days with heavy activity
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

		return { weeks };
	}

	// Get color based on contribution count (GitHub style)
	function getContributionColor(count) {
		if (count === 0) return '#ebedf0';
		if (count <= 3) return '#9be9a8';
		if (count <= 6) return '#40c463';
		if (count <= 9) return '#30a14e';
		return '#216e39';
	}

	// Svelte 5 state
	let contributionsData = $state(generateContributionsData());

	// Calculate total contributions
	let totalContributions = $state(0);

	// Update total when data changes
	$effect(() => {
		totalContributions = contributionsData.weeks.reduce((total, week) => {
			return (
				total +
				week.contributionDays.reduce((weekTotal, day) => {
					return weekTotal + day.contributionCount;
				}, 0)
			);
		}, 0);
	});

	// Function to get contribution level for styling
	function getContributionLevel(count) {
		if (count === 0) return 'none';
		if (count <= 3) return 'low';
		if (count <= 6) return 'medium';
		if (count <= 9) return 'high';
		return 'very-high';
	}

	// Function to format date for tooltip
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	// Function to get plural form for contributions
	function getContributionText(count) {
		return count === 1 ? 'contribution' : 'contributions';
	}

	// Sync scrolling between months and grid
	let monthsElement = $state();
	let gridElement = $state();

	function syncScrollFromGrid(event) {
		if (monthsElement && event.target === gridElement) {
			monthsElement.scrollLeft = event.target.scrollLeft;
		}
	}

	function syncScrollFromMonths(event) {
		if (gridElement && event.target === monthsElement) {
			gridElement.scrollLeft = event.target.scrollLeft;
		}
	}
</script>

<section class="github-contributions" aria-label="GitHub Contributions Calendar">
	<header class="contributions-header">
		<h2>GitHub Contributions</h2>
		<p class="total-contributions">
			{totalContributions}
			{getContributionText(totalContributions)} this year
		</p>
	</header>

	<div class="calendar-container">
		<div class="calendar" role="img" aria-label="GitHub contributions calendar grid">
			<!-- Contribution grid -->
			<div class="grid" bind:this={gridElement} onscroll={syncScrollFromGrid}>
				{#each contributionsData.weeks as week}
					<div class="week">
						{#each week.contributionDays as day}
							<div
								class="day {getContributionLevel(day.contributionCount)}"
								title="{day.contributionCount} {getContributionText(
									day.contributionCount
								)} on {formatDate(day.date)}"
								aria-label="{day.contributionCount} {getContributionText(
									day.contributionCount
								)} on {formatDate(day.date)}"
								role="gridcell"
							></div>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<!-- Legend -->
		<div class="legend">
			<span class="legend-text">Less</span>
			<div class="legend-squares">
				<div class="legend-square none" title="No contributions"></div>
				<div class="legend-square low" title="1-3 contributions"></div>
				<div class="legend-square medium" title="4-6 contributions"></div>
				<div class="legend-square high" title="7-9 contributions"></div>
				<div class="legend-square very-high" title="10+ contributions"></div>
			</div>
			<span class="legend-text">More</span>
		</div>
	</div>
</section>

<style>
	.github-contributions {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: var(--bronova);
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: visible;

		& .contributions-header {
			margin-bottom: 2rem;

			& h2 {
				font-family: var(--bronova-bold);
				font-size: clamp(var(--sm), 2vw, var(--h4));
				font-weight: 700;
				color: var(--clr-main);
				margin-bottom: 0.5rem;
				text-transform: lowercase;
				letter-spacing: 0.5px;
			}
		}

		& .total-contributions {
			font-size: clamp(var(--xs), 2vw, var(--sm));
			color: var(--clr-main);
			opacity: 0.7;
			margin: 0;
			font-weight: 400;
		}

		& .calendar-container {
			min-width: 50vw;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			padding: 1.5rem;
			background: rgba(255, 255, 255, 0.02);
			border-radius: 8px;
			overflow-x: auto;

			@media (width <= 500px) {
				min-width: 90vw;
			}

			& .calendar {
				display: grid;
				grid-template-areas:
					'weekdays months'
					'weekdays grid';
				grid-template-columns: auto 1fr;
				gap: 0.75rem;
				font-size: 0.75rem;
				color: var(--clr-main);
				align-items: start;

				& .grid {
					grid-area: grid;
					display: flex;
					gap: 2px;
					overflow-x: auto;
					min-width: max-content;
					padding-bottom: 0;
					scrollbar-width: none;
					-ms-overflow-style: none;

					&::-webkit-scrollbar {
						display: none;
					}

					& .week {
						display: flex;
						flex-direction: column;
						gap: 2px;
						min-width: 0.75rem;

						& .day {
							width: 0.75rem;
							height: 0.75rem;
							border-radius: 2px;
							border: none;
							transition: all 0.2s ease;
							cursor: pointer;

							&:hover {
								transform: scale(1.2);
								z-index: 1;
							}

							/* Contribution levels */
							&.none {
								background-color: var(--clr-inverted);
							}

							&.low {
								background-color: #0e4429;
							}

							&.medium {
								background-color: #006d32;
							}

							&.high {
								background-color: #26a641;
							}

							&.very-high {
								background-color: #39d353;
							}
						}
					}
				}
			}

			& .legend {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				gap: 0.5rem;
				font-size: clamp(var(--xs), 2vw, var(--sm));
				color: var(--clr-main);
				opacity: 0.6;
				margin-top: 1rem;
				font-weight: 400;

				& .legend-squares {
					display: flex;
					gap: 2px;
					margin: 0 0.5rem;

					& .legend-square {
						width: 0.75rem;
						height: 0.75rem;
						border-radius: 2px;
						border: none;

						&.none {
							background-color: var(--clr-inverted);
						}

						&.low {
							background-color: #0e4429;
						}

						&.medium {
							background-color: #006d32;
						}

						&.high {
							background-color: #26a641;
						}

						&.very-high {
							background-color: #39d353;
						}
					}
				}
			}
		}
	}

	/* Dark theme adjustments */
	:global(body.dark) .day.none {
		background-color: var(--clr-inverted);
	}

	:global(body.dark) .legend-square.none {
		background-color: var(--clr-inverted);
	}

	/* Hover effects - scale more on larger screens */
	@media (min-width: 768px) {
		.day:hover {
			transform: scale(1.3);
		}
	}

	@media (width <= 767px) {
		.github-contributions {
			padding: 1rem 0.5rem;
			width: 90%;
			margin: 0 auto;
			max-width: none;
			max-height: none;
			overflow-y: visible;

			& .calendar-container {
				padding: 1rem;
				gap: 0.75rem;

				& .calendar {
					gap: 0.5rem;
					overflow-x: auto;

					& .months {
						padding-left: 0;
						margin-bottom: 0.375rem;
						gap: 1px;
					}

					& .weekdays {
						padding-right: 0.65rem;
					}

					& .grid {
						gap: 1px;

						& .week {
							gap: 1px;
							min-width: 0.65rem;

							& .day {
								width: 0.65rem;
								height: 0.65rem;
								border-radius: 1px;
							}
						}
					}
				}

				& .legend {
					font-size: 0.65rem;
					gap: 0.375rem;
					margin-top: 0.75rem;

					& .legend-squares {
						gap: 1px;

						& .legend-square {
							width: 0.65rem;
							height: 0.65rem;
							border-radius: 1px;
						}
					}
				}
			}
		}
	}
</style>
