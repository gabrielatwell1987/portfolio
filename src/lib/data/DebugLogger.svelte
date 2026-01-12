<script lang="ts">
	interface Props {
		namespace?: string;
		categories?: string[];
		children: (args: { debug: (category: string, message: string, data?: any) => void; isEnabled: boolean }) => any;
	}
	let { namespace = 'Component', categories = [], children }: Props = $props();

	// Debug configuration state
	let debugConfig = $state<{ enabled: boolean; [key: string]: boolean }>({
		enabled: false,
		...categories.reduce((acc, cat) => ({ ...acc, [cat]: false }), {})
	});

	// Category emojis for visual distinction
	const categoryEmojis = {
		events: '📡',
		installation: '⬇️',
		userChoice: '👤',
		lifecycle: '🔄',
		state: '📊',
		network: '🌐',
		performance: '⚡',
		error: '❌',
		warning: '⚠️',
		info: 'ℹ️'
	};

	// Global debug control
	$effect(() => {
		if (typeof window !== 'undefined') {
			const debugKey = `${namespace.toLowerCase()}Debug`;

			(window as any)[debugKey] = {
				enable: (targetCategories = []) => {
					debugConfig.enabled = true;
					if (targetCategories.length === 0) {
						// Enable all categories
						Object.keys(debugConfig).forEach((key) => {
							if (key !== 'enabled') debugConfig[key] = true;
						});
					} else {
						targetCategories.forEach((cat) => {
							if (cat in debugConfig) debugConfig[cat] = true;
						});
					}
					console.log(`🐛 ${namespace} debug enabled:`, debugConfig);
				},
				disable: () => {
					Object.keys(debugConfig).forEach((key) => (debugConfig[key] = false));
					console.log(`🐛 ${namespace} debug disabled`);
				},
				status: () => console.log(`🐛 ${namespace} debug config:`, debugConfig),
				toggle: (category: string) => {
					if (category in debugConfig) {
						debugConfig[category] = !debugConfig[category];
						console.log(`🐛 ${namespace} [${category}] toggled:`, debugConfig[category]);
					}
				}
			};
		}
	});

	// Debug logger function
	const debug = (category: string, message: string, data: any = null) => {
		if (!debugConfig.enabled || !debugConfig[category]) return;

		const emoji = categoryEmojis[category as keyof typeof categoryEmojis] || '🐛';
		const timestamp = new Date().toISOString().split('T')[1].split('.')[0];

		console.group(`${emoji} ${namespace} [${category}] ${timestamp}`);
		console.log(message);
		if (data !== null) {
			console.log('Data:', data);
		}
		console.groupEnd();
	};
</script>

{@render children({ debug, isEnabled: debugConfig.enabled })}
