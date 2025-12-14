export function createPopoverState() {
	let popoverElement = $state(null);
	let hoverTimeout = $state(null);

	function showPopover() {
		if (!popoverElement) return;
		if (hoverTimeout) clearTimeout(hoverTimeout);
		popoverElement.showPopover();
	}

	function hidePopover() {
		if (!popoverElement) return;

		hoverTimeout = setTimeout(() => {
			popoverElement.hidePopover();
		}, 150);
	}

	function cancelHide() {
		if (hoverTimeout) {
			clearTimeout(hoverTimeout);
			hoverTimeout = null;
		}
	}

	function closePopover() {
		cancelHide();
		popoverElement.hidePopover();
	}

	return {
		get popoverElement() {
			return popoverElement;
		},
		set popoverElement(el) {
			popoverElement = el;
		},
		showPopover,
		hidePopover,
		cancelHide,
		closePopover
	};
}
