<script>
	import { page } from '$app/stores';

	$effect(() => {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-RSHZ0S02JN', {
				page_title: document.title,
				page_path: $page.url.href
			});
		}
	});
</script>
