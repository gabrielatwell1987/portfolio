<script>
</script>

<nav>
	<div class="desktop-view">
		<a href="/"><i class="fa-solid fa-house-crack" /> Home</a>
		<a href="/about"><i class="fa-regular fa-address-card" /> About</a>
		<a href="/photos"><i class="fa-solid fa-image" /> Photos</a>
		<a href="/projects"><i class="fa-solid fa-list-check" /> Projects</a>
		<a href="/blog"><i class="fa-solid fa-blog" /> Blog</a>
		<a href="/contact"><i class="fa-regular fa-address-book" /> Contact</a>
	</div>

	<div class="mobile-view">
		<div class="mobile-links">
			<a class="mobile-link" href="/">Home</a>
			<a class="mobile-link" href="/about">About</a>
			<a class="mobile-link" href="/projects">Projects</a>
			<a class="mobile-link" href="/contact">Contact</a>
		</div>
	</div>
</nav>

<style>
	a {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 0.9rem;
		text-decoration: none;
		font-weight: 900;
		color: lightskyblue;
		margin-left: 8rem;
		margin-right: -7rem;
	}
	a:hover {
		color: blue;
	}
	.desktop-view {
		/* margin-right: .5rem; */
		display: block;
	}
	.mobile-view {
		display: none;
	}
	nav {
		background-color: #303030;
		padding: 10px 0;
		border: 2px solid gray;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 5em;
		width: 100%;
	}
	i {
		margin: 0 0.5rem 0 0;
	}
	@media (min-width: 200px) {
		.desktop-view {
			display: none;
		}
		.mobile-view {
			display: block;
			justify-content: space-evenly;
			width: 100%;
			margin-left: -175%;
		}
		.mobile-links {
			display: flex;
			justify-content: space-evenly;
		}
		.mobile-link {
			font-size: 0.5rem;
		}
		nav {
			border-radius: 8px;
			background-color: #303030;
			padding: 5px 0;
			border: 2px solid gray;
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 4em;
			width: 100%;
		}
	}
	@media (min-width: 740px) {
		.desktop-view {
			display: block;
			/* width: 100%; */
			margin-left: -96%;
			font-size: 1rem;
		}
		.mobile-view {
			display: none;
		}
		nav {
			background-color: #303030;
			padding: 10px 0;
			border: 2px solid gray;
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 5em;
			width: 100%;
		}
	}
	@media (min-width: 990px) {
		a {
			/* margin: 0 10px; */
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			font-size: 1rem;
			text-decoration: none;
			font-weight: 900;
			color: lightskyblue;
			margin-left: 8rem;
			margin-right: -7rem;
		}
		a:hover {
			color: blue;
		}
		.desktop-view {
			/* margin-right: .5rem; */
			display: block;
		}
		.mobile-view {
			display: none;
		}
		nav {
			background-color: #303030;
			padding: 10px 0;
			border: 2px solid gray;
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 5em;
			width: 100%;
		}
	}
</style>
