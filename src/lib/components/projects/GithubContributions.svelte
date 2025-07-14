<script>
	import { onMount } from 'svelte';

	// Svelte 5 state
	let contributionsData = $state({ weeks: [] });
	let totalContributions = $state(0);
	let isLoading = $state(true);
	let isError = $state(false);
	let errorMessage = $state('');
	let isUsingFallback = $state(false);

	// Fetch real GitHub contributions data
	async function fetchContributionsData() {
		try {
			isLoading = true;
			isError = false;

			const response = await fetch('/api/github-contributions');
			const data = await response.json();

			if (data.success) {
				contributionsData = { weeks: data.weeks };
				totalContributions = data.totalContributions;
				isUsingFallback = false;
			} else {
				// Use fallback data if API fails
				contributionsData = { weeks: data.weeks };
				totalContributions = data.totalContributions;
				isUsingFallback = true;
				errorMessage = data.error || 'Failed to fetch GitHub data';
				console.warn('Using fallback data:', errorMessage);
			}
		} catch (error) {
			console.error('Error fetching contributions:', error);
			isError = true;
			errorMessage = 'Failed to load contributions data';

			// Generate fallback data
			contributionsData = generateFallbackData();
			totalContributions = contributionsData.weeks.reduce((total, week) => {
				return (
					total +
					week.contributionDays.reduce((weekTotal, day) => {
						return weekTotal + day.contributionCount;
					}, 0)
				);
			}, 0);
			isUsingFallback = true;
		} finally {
			isLoading = false;
		}
	}

	// Fallback data generator (kept as backup)
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

	// Load data when component mounts
	onMount(() => {
		fetchContributionsData();
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

	// Constants for SVG layout
	const CELL_SIZE = 12;
	const CELL_GAP = 2;
	const DAYS_IN_WEEK = 7;
	const GRID_HEIGHT = DAYS_IN_WEEK * (CELL_SIZE + CELL_GAP) - CELL_GAP;
	const MONTH_LABEL_HEIGHT = 20;
	const DAY_LABEL_WIDTH = 30;

	// Month names
	const MONTHS = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	// Day labels
	const DAYS = ['Mon', 'Wed', 'Fri'];
	const DAY_INDICES = [1, 3, 5]; // Monday, Wednesday, Friday

	// Mobile constants
	const MOBILE_CELL_SIZE = 12;
	const MOBILE_CELL_GAP = 5;
	const MOBILE_GRID_HEIGHT = DAYS_IN_WEEK * (MOBILE_CELL_SIZE + MOBILE_CELL_GAP) - MOBILE_CELL_GAP;
	const MOBILE_MONTH_LABEL_HEIGHT = 16;
	const MOBILE_DAY_LABEL_WIDTH = 30;

	// Reactive dimensions based on screen size
	let isMobile = $state(false);

	// Mobile tooltip state
	let mobileTooltip = $state({
		visible: false,
		x: 0,
		y: 0,
		content: '',
		date: ''
	});

	// Handle mobile touch events for tooltips
	function handleDayTouch(event, day) {
		// On mobile, show custom tooltip; on desktop, let native title work
		if (isMobile) {
			event.preventDefault();
			event.stopPropagation();

			const rect = event.target.getBoundingClientRect();
			const containerRect = event.target.closest('.calendar-container').getBoundingClientRect();

			// Calculate position relative to the container
			const x = rect.left + rect.width / 2 - containerRect.left;
			const y = rect.top - containerRect.top - 40; // Move tooltip higher

			mobileTooltip = {
				visible: true,
				x: Math.max(50, Math.min(x, containerRect.width - 50)), // Keep within bounds
				y: Math.max(10, y), // Keep above minimum
				content: `${day.contributionCount} ${getContributionText(day.contributionCount)}`,
				date: formatDate(day.date)
			};

			// Hide tooltip after 3 seconds
			setTimeout(() => {
				if (mobileTooltip.visible) {
					mobileTooltip.visible = false;
				}
			}, 3000);
		}
		// On desktop, don't prevent default to allow native title tooltips
	}

	// Hide mobile tooltip when touching elsewhere
	function hideMobileTooltip(event) {
		if (isMobile && mobileTooltip.visible) {
			// Don't hide if touching the tooltip itself or a contribution day
			if (
				!event.target.closest('.mobile-tooltip') &&
				!event.target.classList.contains('contribution-day')
			) {
				mobileTooltip.visible = false;
			}
		}
	}

	// Get current dimensions based on mobile state
	function getCurrentDimensions() {
		return {
			cellSize: isMobile ? MOBILE_CELL_SIZE : CELL_SIZE,
			cellGap: isMobile ? MOBILE_CELL_GAP : CELL_GAP,
			gridHeight: isMobile ? MOBILE_GRID_HEIGHT : GRID_HEIGHT,
			monthLabelHeight: isMobile ? MOBILE_MONTH_LABEL_HEIGHT : MONTH_LABEL_HEIGHT,
			dayLabelWidth: isMobile ? MOBILE_DAY_LABEL_WIDTH : DAY_LABEL_WIDTH
		};
	}

	// Calculate month positions
	function getMonthPositions() {
		const months = [];
		const { cellSize, cellGap, dayLabelWidth } = getCurrentDimensions();
		let currentMonth = -1;
		let weekIndex = 0;

		contributionsData.weeks.forEach((week, index) => {
			if (week.contributionDays.length > 0) {
				const firstDay = new Date(week.contributionDays[0].date);
				const month = firstDay.getMonth();

				if (month !== currentMonth) {
					months.push({
						name: MONTHS[month],
						x: weekIndex * (cellSize + cellGap) + dayLabelWidth
					});
					currentMonth = month;
				}
				weekIndex++;
			}
		});

		return months;
	}

	// Calculate total width
	function getTotalWidth() {
		const { cellSize, cellGap, dayLabelWidth } = getCurrentDimensions();
		return dayLabelWidth + contributionsData.weeks.length * (cellSize + cellGap);
	}

	$effect(() => {
		// Update mobile state based on window width
		if (typeof window !== 'undefined') {
			const updateMobile = () => {
				isMobile = window.innerWidth <= 767;
			};
			updateMobile();
			window.addEventListener('resize', updateMobile);
			return () => window.removeEventListener('resize', updateMobile);
		}

		// Add click listener to document for mobile tooltip hiding
		if (typeof window !== 'undefined' && isMobile) {
			const handleDocumentClick = (event) => {
				if (mobileTooltip.visible) {
					// Hide if clicking outside tooltip and contribution days
					if (
						!event.target.closest('.mobile-tooltip') &&
						!event.target.classList.contains('contribution-day')
					) {
						mobileTooltip.visible = false;
					}
				}
			};

			document.addEventListener('click', handleDocumentClick);
			return () => document.removeEventListener('click', handleDocumentClick);
		}

		// Scroll to beginning on mount for mobile
		if (typeof window !== 'undefined') {
			const wrapper = document.querySelector('.calendar-svg-wrapper');
			if (wrapper && isMobile) {
				// Small delay to ensure DOM is ready
				setTimeout(() => {
					wrapper.scrollLeft = 0;
				}, 100);
			}
		}

		// Scroll to beginning on mount for mobile
		if (typeof window !== 'undefined') {
			const wrapper = document.querySelector('.calendar-svg-wrapper');
			if (wrapper && isMobile) {
				// Small delay to ensure DOM is ready
				setTimeout(() => {
					wrapper.scrollLeft = 0;
				}, 100);
			}
		}
	});
</script>

<section class="github-contributions" aria-label="GitHub Contributions Calendar">
	<header class="contributions-header">
		<h2>GitHub Contributions</h2>
		{#if isLoading}
			<p class="total-contributions loading">Loading contributions...</p>
		{:else if isError}
			<p class="total-contributions error">
				Failed to load GitHub data
				{#if isUsingFallback}
					- showing sample data
				{/if}
			</p>
		{:else}
			<p class="total-contributions">
				{totalContributions}
				{getContributionText(totalContributions)} this year
				{#if isUsingFallback}
					<span class="fallback-notice">(using fallback data)</span>
				{/if}
			</p>
		{/if}
	</header>

	{#if isLoading}
		<div class="loading-container">
			<div class="loading-spinner"></div>
		</div>
	{:else}
		<div class="calendar-container">
			<!-- Mobile tooltip -->
			{#if mobileTooltip.visible && isMobile}
				<div
					class="mobile-tooltip"
					style="left: {mobileTooltip.x}px; top: {mobileTooltip.y}px;"
					role="tooltip"
				>
					<div class="tooltip-content">
						{mobileTooltip.content}
					</div>
					<div class="tooltip-date">
						{mobileTooltip.date}
					</div>
				</div>
			{/if}

			<div class="calendar-svg-wrapper">
				<svg
					width={getTotalWidth()}
					height={getCurrentDimensions().monthLabelHeight + getCurrentDimensions().gridHeight}
					class="contributions-svg"
				>
					<!-- Month labels -->
					{#each getMonthPositions() as month}
						<text x={month.x} y={isMobile ? 12 : 15} class="month-label" text-anchor="start">
							{month.name}
						</text>
					{/each}

					<!-- Day labels -->
					{#each DAYS as day, i}
						<text
							x={getCurrentDimensions().dayLabelWidth - 5}
							y={getCurrentDimensions().monthLabelHeight +
								DAY_INDICES[i] *
									(getCurrentDimensions().cellSize + getCurrentDimensions().cellGap) +
								getCurrentDimensions().cellSize / 2 +
								4}
							class="day-label"
							text-anchor="end"
						>
							{day}
						</text>
					{/each}

					<!-- Contribution grid -->
					{#each contributionsData.weeks as week, weekIndex}
						{#each week.contributionDays as day, dayIndex}
							<rect
								x={getCurrentDimensions().dayLabelWidth +
									weekIndex * (getCurrentDimensions().cellSize + getCurrentDimensions().cellGap)}
								y={getCurrentDimensions().monthLabelHeight +
									dayIndex * (getCurrentDimensions().cellSize + getCurrentDimensions().cellGap)}
								width={getCurrentDimensions().cellSize}
								height={getCurrentDimensions().cellSize}
								rx={isMobile ? '1' : '2'}
								class="contribution-day {getContributionLevel(day.contributionCount)}"
								data-count={day.contributionCount}
								data-date={day.date}
								onclick={(e) => handleDayTouch(e, day)}
								onkeydown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										handleDayTouch(e, day);
									}
								}}
								role="button"
								tabindex="0"
								aria-label="{day.contributionCount} {getContributionText(
									day.contributionCount
								)} on {formatDate(day.date)}"
							>
								<!-- prettier-ignore -->
								<title>{day.contributionCount} {getContributionText(day.contributionCount)} on {formatDate(day.date)}</title>
							</rect>
						{/each}
					{/each}
				</svg>
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
	{/if}
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

			&.loading {
				opacity: 0.5;
			}

			&.error {
				color: #ff6b6b;
				opacity: 0.8;
			}

			& .fallback-notice {
				font-size: 0.8em;
				opacity: 0.6;
				font-style: italic;
			}
		}

		& .loading-container {
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 200px;
			width: 100%;

			& .loading-spinner {
				width: 40px;
				height: 40px;
				border: 3px solid var(--clr-main);
				border-top: 3px solid transparent;
				border-radius: 50%;
				animation: spin 1s linear infinite;
				opacity: 0.7;
			}
		}

		& .calendar-container {
			min-width: 50vw;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			padding: 1.5rem;
			border-radius: 8px;
			position: relative;

			/* Mobile tooltip */
			& .mobile-tooltip {
				position: absolute;
				background: var(--clr-main);
				color: var(--clr-bg);
				padding: 0.5rem 0.75rem;
				border-radius: 6px;
				font-size: 0.75rem;
				font-family: var(--bronova);
				pointer-events: none;
				z-index: 1000;
				transform: translateX(-50%);
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
				animation: tooltipFadeIn 0.2s ease-out;

				&::after {
					content: '';
					position: absolute;
					top: 100%;
					left: 50%;
					transform: translateX(-50%);
					border: 5px solid transparent;
					border-top-color: var(--clr-main);
				}

				& .tooltip-content {
					font-weight: 600;
					margin-bottom: 0.125rem;
				}

				& .tooltip-date {
					font-size: 0.65rem;
					opacity: 0.9;
					font-weight: 400;
				}
			}

			/* Responsive padding */
			@media (width <= 767px) {
				padding: 1rem;
				gap: 0.75rem;
			}

			@media (width <= 500px) {
				min-width: 99vw;
				padding: 0.5rem;
			}

			& .calendar-svg-wrapper {
				overflow-x: auto;
				overflow-y: visible;
				width: 100%;
				display: flex;
				justify-content: flex-start;
				scroll-behavior: smooth;

				&::-webkit-scrollbar {
					height: 6px;
				}

				&::-webkit-scrollbar-track {
					background: transparent;
				}

				&::-webkit-scrollbar-thumb {
					background: var(--clr-main);
					opacity: 0.3;
					border-radius: 3px;
				}

				& .contributions-svg {
					min-width: max-content;
					font-family: var(--bronova);
					max-width: 100%;
					height: auto;

					/* Make SVG responsive to viewport width */
					@media (width <= 1200px) {
						transform: scale(0.9);
						transform-origin: center;
					}

					@media (width <= 900px) {
						transform: scale(0.8);
						transform-origin: center;
					}

					@media (width <= 767px) {
						transform: scale(0.7);
						transform-origin: center;
					}

					@media (width <= 600px) {
						transform: scale(0.6);
						transform-origin: center;
					}

					@media (width <= 480px) {
						transform: scale(0.5);
						transform-origin: center;
					}

					@media (width <= 360px) {
						transform: scale(0.45);
						transform-origin: center;
					}

					& .month-label {
						font-size: 16px;
						fill: var(--clr-main);
						opacity: 0.7;
						font-weight: 400;
					}

					& .day-label {
						font-size: 12px;
						fill: var(--clr-main);
						opacity: 0.7;
						font-weight: 400;
					}

					& .contribution-day {
						transition: all 0.2s ease;
						cursor: pointer;

						/* Ensure title tooltips work on desktop */
						&:hover {
							stroke: var(--clr-main);
							stroke-width: 1px;
							opacity: 0.8;
						}

						/* Hide native tooltips on mobile to avoid conflicts */
						@media (max-width: 767px) {
							& title {
								display: none;
							}
						}

						/* Contribution levels */
						&.none {
							fill: var(--clr-gray);
						}

						&.low {
							fill: #0e4429;
						}

						&.medium {
							fill: #006d32;
						}

						&.high {
							fill: #26a641;
						}

						&.very-high {
							fill: #39d353;
						}

						/* Focus styles for accessibility */
						&:focus {
							outline: 2px solid var(--clr-main);
							outline-offset: 2px;
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
							background-color: var(--clr-gray);
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
	:global(body.dark) .contribution-day.none {
		fill: var(--clr-inverted);
	}

	:global(body.dark) .legend-square.none {
		background-color: var(--clr-inverted);
	}

	/* Hover effects - scale more on larger screens */
	@media (min-width: 768px) {
		.contribution-day:hover {
			stroke-width: 2px;
		}
	}

	/* Loading spinner animation */
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* Mobile tooltip animation */
	@keyframes tooltipFadeIn {
		0% {
			opacity: 0;
			transform: translateX(-50%) translateY(-5px);
		}
		100% {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
	}

	@media (width <= 767px) {
		.github-contributions {
			padding: 1rem 0.5rem;
			width: 99vw;
			margin: 0 auto;
			margin-left: calc(50% - 49.5vw);
			max-width: none;
			max-height: none;
			overflow-y: visible;

			& .calendar-container {
				& .calendar-svg-wrapper {
					& .contributions-svg {
						/* Override scaling for mobile to use smaller cells instead */
						transform: none !important;

						& .month-label {
							font-size: 1rem;
						}

						& .day-label {
							font-size: 0.5rem;
						}

						& .contribution-day {
							&:hover {
								stroke-width: 1px;
							}
						}
					}
				}

				& .legend {
					font-size: 0.65rem;
					gap: 0.375rem;
					margin-top: 0.75rem;

					& .legend-squares {
						gap: 2px;

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
