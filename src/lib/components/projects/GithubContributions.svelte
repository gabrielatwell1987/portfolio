<script>
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
						date: `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`,
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
		// Parse the date string (YYYY-MM-DD) to avoid timezone issues
		const [year, month, day] = dateString.split('-').map(Number);
		const date = new Date(year, month - 1, day); // month is 0-indexed
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
	const CELL_SIZE = 17;
	const CELL_GAP = 5;
	const DAYS_IN_WEEK = 7;
	const GRID_HEIGHT = DAYS_IN_WEEK * (CELL_SIZE + CELL_GAP) - CELL_GAP;
	const MONTH_LABEL_HEIGHT = 20;
	const DAY_LABEL_WIDTH = 50;

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

	// Reactive dimensions based on container size
	let isSmallContainer = $state(false);
	let containerElement = $state(null);

	// Mobile tooltip state
	let mobileTooltip = $state({
		visible: false,
		x: 0,
		y: 0,
		content: '',
		date: ''
	});

	// Screen reader announcement
	let announcement = $state('');

	// Handle mobile touch events for tooltips
	function handleDayTouch(event, day) {
		// Announce to screen readers
		announcement = `${day.contributionCount} ${getContributionText(day.contributionCount)} on ${formatDate(day.date)}`;

		// On smaller containers, show custom tooltip; on larger containers, let native title work
		if (isSmallContainer) {
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
		// On larger containers, don't prevent default to allow native title tooltips
	}

	// Enhanced keyboard navigation
	function handleDayKeydown(event, day, weekIndex, dayIndex) {
		const { key } = event;

		// Handle activation keys
		if (key === 'Enter' || key === ' ') {
			event.preventDefault();
			handleDayTouch(event, day);
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
			const targetElement = document.querySelector(targetSelector);
			if (targetElement) {
				targetElement.focus();
			}
		}
	}

	// Hide mobile tooltip when touching elsewhere
	function hideMobileTooltip(event) {
		if (isSmallContainer && mobileTooltip.visible) {
			// Don't hide if touching the tooltip itself or a contribution day
			if (
				!event.target.closest('.mobile-tooltip') &&
				!event.target.classList.contains('contribution-day')
			) {
				mobileTooltip.visible = false;
			}
		}
	}

	// Get current dimensions based on container size
	function getCurrentDimensions() {
		return {
			cellSize: isSmallContainer ? MOBILE_CELL_SIZE : CELL_SIZE,
			cellGap: isSmallContainer ? MOBILE_CELL_GAP : CELL_GAP,
			gridHeight: isSmallContainer ? MOBILE_GRID_HEIGHT : GRID_HEIGHT,
			monthLabelHeight: isSmallContainer ? MOBILE_MONTH_LABEL_HEIGHT : MONTH_LABEL_HEIGHT,
			dayLabelWidth: isSmallContainer ? MOBILE_DAY_LABEL_WIDTH : DAY_LABEL_WIDTH
		};
	}

	// Calculate month positions
	function getMonthPositions() {
		const months = [];
		const { cellSize, cellGap, dayLabelWidth } = getCurrentDimensions();
		let currentMonth = -1;
		let weekIndex = 0;
		let lastLabelX = -100;

		contributionsData.weeks.forEach((week, index) => {
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

	// Calculate total width
	function getTotalWidth() {
		const { cellSize, cellGap, dayLabelWidth } = getCurrentDimensions();
		return dayLabelWidth + contributionsData.weeks.length * (cellSize + cellGap);
	}

	$effect(() => {
		// Fetch contributions data on mount
		fetchContributionsData();

		// Update container-based responsive state using ResizeObserver
		if (typeof window !== 'undefined' && containerElement) {
			const resizeObserver = new ResizeObserver((entries) => {
				for (const entry of entries) {
					const containerWidth = entry.contentRect.width;
					isSmallContainer = containerWidth <= 600;
				}
			});

			resizeObserver.observe(containerElement);
			return () => resizeObserver.disconnect();
		}

		// Add click listener to document for tooltip hiding on small containers
		if (typeof window !== 'undefined' && isSmallContainer) {
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

		// Scroll to beginning on mount for small containers
		if (typeof window !== 'undefined') {
			const wrapper = document.querySelector('.calendar-svg-wrapper');
			if (wrapper && isSmallContainer) {
				// Small delay to ensure DOM is ready
				setTimeout(() => {
					wrapper.scrollLeft = 0;
				}, 100);
			}
		}
	});
</script>

<section
	class="github-contributions"
	aria-label="GitHub Contributions Calendar"
	bind:this={containerElement}
>
	<!-- Screen reader announcements -->
	<div class="visually-hidden" aria-live="polite" aria-atomic="true">
		{announcement}
	</div>

	<header class="contributions-header">
		<h2>GitHub Contributions</h2>

		<!-- Instructions for screen reader users -->
		<div class="visually-hidden">
			Navigate through the contribution calendar using tab to move through days. Use arrow keys for
			more precise navigation. Press Enter or Space to get detailed information about a specific
			day.
		</div>

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
			<!-- Custom tooltip for smaller containers -->
			{#if mobileTooltip.visible && isSmallContainer}
				<div
					class="mobile-tooltip"
					style="left: {mobileTooltip.x}px; top: {mobileTooltip.y}px;"
					role="tooltip"
					aria-live="polite"
					id="mobile-tooltip"
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
					role="img"
					aria-labelledby="contributions-title"
					aria-describedby="contributions-desc"
				>
					<title id="contributions-title">GitHub Contributions Calendar</title>
					<desc id="contributions-desc">
						A calendar showing daily GitHub contributions over the past year. Each square represents
						a day, with darker colors indicating more contributions. Navigate with tab and enter
						keys to explore individual days.
					</desc>
					<!-- Month labels -->
					<g role="group" aria-label="Month labels">
						{#each getMonthPositions() as month}
							<text
								x={month.x}
								y={isSmallContainer ? 12 : 15}
								class="month-label"
								text-anchor="start"
							>
								{month.name}
							</text>
						{/each}
					</g>

					<!-- Day labels -->
					<g role="group" aria-label="Day labels">
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
					</g>

					<!-- Contribution grid -->
					<g role="group" aria-label="Daily contributions grid">
						{#each contributionsData.weeks as week, weekIndex}
							{#each week.contributionDays as day, dayIndex}
								<rect
									x={getCurrentDimensions().dayLabelWidth +
										weekIndex * (getCurrentDimensions().cellSize + getCurrentDimensions().cellGap)}
									y={getCurrentDimensions().monthLabelHeight +
										dayIndex * (getCurrentDimensions().cellSize + getCurrentDimensions().cellGap)}
									width={getCurrentDimensions().cellSize}
									height={getCurrentDimensions().cellSize}
									rx={isSmallContainer ? '1' : '2'}
									class="contribution-day {getContributionLevel(day.contributionCount)}"
									data-count={day.contributionCount}
									data-date={day.date}
									data-week={weekIndex}
									data-day={dayIndex}
									onclick={(e) => handleDayTouch(e, day)}
									onkeydown={(e) => handleDayKeydown(e, day, weekIndex, dayIndex)}
									role="button"
									tabindex="0"
									aria-label="{day.contributionCount} {getContributionText(
										day.contributionCount
									)} on {formatDate(day.date)}"
									aria-describedby="legend-desc"
								>
									<!-- prettier-ignore -->
									<title>{day.contributionCount + ' ' + getContributionText(day.contributionCount) + ' on ' + formatDate(day.date)}</title>
								</rect>
							{/each}
						{/each}
					</g>
				</svg>
			</div>

			<!-- Legend -->
			<div class="legend" role="img" aria-labelledby="legend-title" aria-describedby="legend-desc">
				<div id="legend-title" class="visually-hidden">Contribution levels legend</div>
				<div id="legend-desc" class="visually-hidden">
					Legend showing contribution intensity levels from none to very high, represented by color
					intensity from light to dark green.
				</div>
				<span class="legend-text" aria-hidden="true">Less</span>
				<div class="legend-squares" role="group" aria-label="Contribution level indicators">
					<div
						class="legend-square none"
						role="img"
						aria-label="No contributions level"
						title="No contributions"
					></div>
					<div
						class="legend-square low"
						role="img"
						aria-label="Low contributions level: 1-3 contributions"
						title="1-3 contributions"
					></div>
					<div
						class="legend-square medium"
						role="img"
						aria-label="Medium contributions level: 4-6 contributions"
						title="4-6 contributions"
					></div>
					<div
						class="legend-square high"
						role="img"
						aria-label="High contributions level: 7-9 contributions"
						title="7-9 contributions"
					></div>
					<div
						class="legend-square very-high"
						role="img"
						aria-label="Very high contributions level: 10+ contributions"
						title="10+ contributions"
					></div>
				</div>
				<span class="legend-text" aria-hidden="true">More</span>
			</div>
		</div>
	{/if}
</section>

<style>
	.github-contributions {
		max-inline-size: 900px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: var(--bronova);
		display: flex;
		flex-direction: column;
		align-items: center;

		/* Enable container queries */
		container-type: inline-size;
		container-name: github-contributions;

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

			/* Responsive padding using container queries */
			@container github-contributions (wth <= 767px) {
				padding: 1rem;
				gap: 0.75rem;
			}

			@container github-contributions (wth <= 500px) {
				min-width: 99%;
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
					max-inline-size: 100%;
					height: auto;

					/* Make SVG responsive using container queries */
					@container github-contributions (width <= 800px) {
						transform: scale(0.9);
						transform-origin: center;
					}

					@container github-contributions (width <= 700px) {
						transform: scale(0.8);
						transform-origin: center;
					}

					@container github-contributions (width <= 600px) {
						transform: scale(0.7);
						transform-origin: center;
					}

					@container github-contributions (width <= 500px) {
						transform: scale(0.6);
						transform-origin: center;
					}

					@container github-contributions (width <= 400px) {
						transform: scale(0.5);
						transform-origin: center;
					}

					@container github-contributions (width <= 320px) {
						transform: scale(0.45);
						transform-origin: center;
					}

					& .month-label {
						font-size: 1.1rem;
						fill: var(--clr-main);
						opacity: 0.7;
						font-weight: 400;
					}

					& .day-label {
						font-size: 0.9rem;
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

						/* Hide native tooltips on smaller containers to avoid conflicts */
						@container github-contributions (width <= 600px) {
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
							outline: 3px solid var(--clr-main);
							outline-offset: 2px;
							stroke: var(--clr-main);
							stroke-width: 2px;
						}

						/* Keyboard navigation enhancement */
						&:focus-visible {
							outline: 3px solid var(--clr-main);
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
		fill: var(--clr-invert);
	}

	:global(body.dark) .legend-square.none {
		background-color: var(--clr-invert);
	}

	/* Hover effects - enhanced focus on larger containers */
	@container github-contributions (width >= 600px) {
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

	/* Container query for smaller layouts */
	@container github-contributions (width <= 600px) {
		.github-contributions {
			padding: 1rem 0.5rem;

			& .calendar-container {
				& .calendar-svg-wrapper {
					& .contributions-svg {
						/* Override scaling for smaller containers to use smaller cells instead */
						transform: none !important;

						& .month-label {
							font-size: 1rem;
						}

						& .day-label {
							font-size: 0.8rem;
						}

						& .contribution-day {
							&:hover {
								stroke-width: 1px;
							}
						}
					}
				}

				& .legend {
					font-size: 0.75rem;
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

	/* Very small container adjustments */
	@container github-contributions (width <= 400px) {
		.github-contributions {
			& .calendar-container {
				min-width: 100vw;

				& .legend {
					font-size: 0.65rem;

					& .legend-squares {
						& .legend-square {
							width: 0.6rem;
							height: 0.6rem;
						}
					}
				}

				& .calendar-svg-wrapper {
					& .contributions-svg {
						& .month-label {
							font-size: 0.9rem;
						}

						& .day-label {
							font-size: 0.7rem;
						}
					}
				}
			}
		}
	}
</style>
