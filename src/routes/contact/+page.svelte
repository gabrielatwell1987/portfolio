<script>
	import ContactForm from '$lib/ContactForm.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		let tl = gsap.timeline({ defaults: { duration: 2 } });
		tl.fromTo(
			'.bag',
			{ scale: 0 },
			{
				scale: 1,
				repeat: 2,
				yoyo: true,
				ease: 'sine.in'
			}
		).to('.bag', { scale: 1 }, '-=1');
	});
</script>

<main>
	<!-- <img class="pic" src="logo2.png" alt="Gabe" width="400" height="1000"> -->

	<svg
		class="bag"
		width="105"
		height="81"
		viewBox="0 0 105 81"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M5.52616 81H99.4738C102.526 81 105 78.8237 105 76.14V50.2198V42.1369C98.0824 45.5806 84.6067 50.3188 61.7101 51.2628V53.8067C61.7101 57.6415 58.1758 60.7496 53.8155 60.7496H52.8283C48.4678 60.7496 44.9335 57.6415 44.9335 53.8067V51.2548C21.396 50.273 7.17893 45.3385 0 41.9189V50.2198V76.1398C0 78.8243 2.47448 81 5.52616 81ZM98.5529 63.9903V75.3299H85.6586C85.6576 69.0619 91.4253 63.9903 98.5529 63.9903ZM6.44713 63.9903C13.5747 63.9903 19.3414 69.0625 19.3414 75.3299H6.44713V63.9903ZM44.9342 36.4497H61.7101V45.5826C77.6172 44.8916 88.3778 42.3021 94.8745 40.0743C100.072 38.2913 103.317 36.5006 105 35.428V21.87C105 19.1857 102.525 17.0101 99.4738 17.0101H84.2761V8.0997C84.2761 3.63328 80.144 0 75.0657 0H29.9341C24.8561 0 20.7239 3.63328 20.7239 8.0997V17.0094H5.52616C2.47448 17.0103 0 19.1857 0 21.8702V35.3031C4.35619 37.8276 18.113 44.394 44.9342 45.5745V36.4497ZM28.0922 8.0997C28.0922 7.20615 28.9189 6.4799 29.9341 6.4799H75.0659C76.0813 6.4799 76.908 7.20631 76.908 8.0997V17.0094H28.0922V8.0997Z"
			fill="white"
		/>
	</svg>

	<h2 class="contact-text">
		Email me: <a class="here" href="mailto:gabriel.atwell@proton.me">here</a>
	</h2>
</main>

<p class="contactinfo">You can contact me through email and I'll get back to you.</p>
<img class="mobilelogo" src="logo.png" alt="logo" width="200px" />

<div class="contactForm">
	<ContactForm />
</div>

<style>
	main {
		text-align: center;
	}
	.contact-text {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}
	.contactinfo {
		display: none;
	}
	/* .pic {
        border-radius: 50%;
        margin-bottom: 2rem;
    } */
	.mobilelogo {
		display: none;
	}
	svg {
		width: 15%;
		height: 40%;
		margin-bottom: 4rem;
		margin-top: 2rem;
	}
	.here {
		font-size: 1.5rem;
		font-weight: 700;
	}
	.contactForm {
		margin-top: 4rem;
	}
	a {
		text-decoration: none;
		color: rgb(76, 76, 248);
	}
	a:hover {
		color: white;
	}
	@media (max-width: 1250px) {
		/* .pic {
            display: none;
        } */
		/* h2 {
			font-size: 1.5rem;
		} */
		.contactinfo {
			display: block;
			text-align: center;
			padding: 0.8rem;
			margin-left: 1.5rem;
		}
		.mobilelogo {
			display: block;
			margin-left: 26%;
			border-radius: 50%;
		}
		/* .contact-text {
			font-size: 1.5rem;
		} */
		.contactForm {
			display: none;
		}
	}
</style>
