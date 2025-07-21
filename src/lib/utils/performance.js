// Performance monitoring utility
// Add this to your app to track Core Web Vitals including CLS

export function initPerformanceMonitoring() {
	if (typeof window === 'undefined') return;

	// Track Cumulative Layout Shift (CLS)
	let clsValue = 0;
	let clsEntries = [];

	const observer = new PerformanceObserver((list) => {
		for (const entry of list.getEntries()) {
			// Only count layout shifts without recent user input
			if (!entry.hadRecentInput) {
				clsValue += entry.value;
				clsEntries.push(entry);

				console.log('🔄 Layout shift detected:', {
					value: entry.value,
					totalCLS: clsValue,
					sources: entry.sources?.map((source) => ({
						element: source.node?.tagName || 'unknown',
						className: source.node?.className || '',
						id: source.node?.id || ''
					}))
				});
			}
		}
	});

	try {
		observer.observe({ type: 'layout-shift', buffered: true });
	} catch (e) {
		console.warn('Layout shift observer not supported');
	}

	// Track Largest Contentful Paint (LCP)
	const lcpObserver = new PerformanceObserver((list) => {
		const entries = list.getEntries();
		const lastEntry = entries[entries.length - 1];
		console.log('🖼️ LCP:', lastEntry.startTime, 'ms', lastEntry.element);
	});

	try {
		lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
	} catch (e) {
		console.warn('LCP observer not supported');
	}

	// Track First Input Delay (FID)
	const fidObserver = new PerformanceObserver((list) => {
		for (const entry of list.getEntries()) {
			console.log('⚡ FID:', entry.processingStart - entry.startTime, 'ms');
		}
	});

	try {
		fidObserver.observe({ type: 'first-input', buffered: true });
	} catch (e) {
		console.warn('FID observer not supported');
	}

	// Report final scores when page is hidden
	document.addEventListener('visibilitychange', () => {
		if (document.visibilityState === 'hidden') {
			console.log('📊 Final Performance Scores:', {
				CLS: clsValue,
				layoutShifts: clsEntries.length
			});
		}
	});
}

// Helper function to check if element is causing layout shift
export function identifyShiftCauses() {
	const problematicElements = [
		'img:not([width]):not([height])',
		'iframe:not([width]):not([height])',
		'[loading="lazy"]:not([width]):not([height])',
		'.loading:empty',
		'[style*="height: auto"]:not([width])'
	];

	problematicElements.forEach((selector) => {
		const elements = document.querySelectorAll(selector);
		if (elements.length > 0) {
			console.warn(`⚠️ Potential CLS elements found: ${selector}`, elements);
		}
	});
}
