<script>
	const popoverButtons = document.querySelectorAll('button[popovertarget]');

	popoverButtons.forEach((button) => {
		let timeout = 0;

		button.addEventListener('mouseenter', () => {
			const target = button.getAttribute('popovertarget');

			const popover = document.querySelector('#' + target);

			// delay opening
			timeout = setTimeout(() => {
				popover.showPopover();
			}, 750);
		});

		button.addEventListener('mouseleave', () => {
			clearTimeout(timeout);
		});
	});
</script>

<h2>Hover over <button popovertarget="popover-gabe">me</button></h2>

<div id="popover-gabe" popover role="tooltip">
	<img
		src="https://www.gabrielatwell.com/photos/wtf2.png"
		alt="Gabriel Atwell"
		width="100"
		height="100"
	/>
	<h4>gabe</h4>
	<!-- <p><span>is not that smart</span></p> -->
</div>

<style>
	h2 {
		letter-spacing: 5px;
		color: #222;
		margin-top: 15%;
	}

	h4 {
		text-align: center;
		font-size: 2rem;
	}

	/* p {
		text-align: center;
		letter-spacing: 5px;
		line-height: 1.75;
		font-size: 1.2rem;
	}

	span {
		color: darkgray;
	} */

	img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}

	button[popovertarget] {
		border: 0;
		background: none;
		font-size: 2rem;
		font-weight: 900;
		display: inline-block;
		color: #1e88e5;
		text-decoration-color: #42a5f5;
		text-underline-offset: 2px;
		overflow: visible;
		letter-spacing: 5px;
		text-transform: uppercase;
		padding: 0;

		&:focus,
		&:hover {
			text-decoration-color: lightblue;
			text-decoration-style: solid;
		}
	}

	button:hover {
		color: darkblue;
	}

	#popover-gabe {
		padding: 2rem 25%;
		background: #222;
		color: antiquewhite;
		border-radius: 15px;
		margin-bottom: 0.5%;
	}
</style>
