<script lang="ts">
	import '../app.css';
	import HamburgerMenu from '$lib/assets/icons/hamburger-menu-svgrepo-com.svg';
	import EmailIcon from '$lib/assets/icons/mail.png';
	import EtsyIcon from '$lib/assets/icons/etsy.png';
	import InstagramIcon from '$lib/assets/icons/instagram.png';
	import TikTokIcon from '$lib/assets/icons/tik-tok.png';
	import ArrowIcon from '$lib/assets/icons/arrow.png';
	let { children } = $props();

	function closeSidebar() {
		document.getElementById('sidebar')?.click();
	}
</script>

<div class="min-h-screen overflow-x-visible">
	<!-- Desktop Nav -->
	<nav
		class="bg-beige-400 fixed top-0 right-0 left-0 z-10 hidden w-full px-(--mobile-padding) text-4xl text-black md:px-(--medium-padding) lg:flex xl:px-(--desktop-padding)"
	>
		<div class="flex w-full justify-around border-b-2 py-5 sm:gap-10">
			<div class="flex gap-10">
				<a href="/" class="group transition duration-300">
					Home
					<span
						class="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"
					></span>
				</a>
				<a href="/paintings" class="group transition duration-300">
					Portfolio
					<span
						class="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"
					></span>
				</a>
				<a
					target="_blank"
					href="https://www.etsy.com/shop/MaryKPaints"
					class="group transition duration-300"
				>
					Shop
					<span
						class="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"
					></span>
				</a>
			</div>
			<div class="flex gap-10">
				<a href="/about" class="group transition duration-300">
					About
					<span
						class="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"
					></span>
				</a>
				<a href="#" class="group transition duration-300">
					Commissions
					<span
						class="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"
					></span>
				</a>
				<a href="#" class="group transition duration-300">
					Contact
					<span
						class="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"
					></span>
				</a>
			</div>
		</div>
	</nav>

	<!-- Mobile Nav -->
	<div class="drawer z-10 lg:hidden">
		<input type="checkbox" id="sidebar" class="drawer-toggle" />
		<div class="drawer-content bg-beige-400 fixed right-0 left-0 flex justify-end">
			<!-- <a href="/"><img class="w-10 p-1" src={ArrowIcon} alt="Arrow pointing left" /></a> -->
			<label for="sidebar"><img src={HamburgerMenu} alt="Hamburger Icon" class="w-13 p-1" /></label>
		</div>
		<div class="drawer-side">
			<label for="sidebar" aria-label="close-sidebar" class="drawer-overlay"></label>
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<ul
				class="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-3xl"
				onclick={closeSidebar}
			>
				<li><a href="/">Home</a></li>
				<li><a href="/paintings">Portfolio</a></li>
				<li><a target="_blank" href="https://www.etsy.com/shop/MaryKPaints">Shop</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/commissions">Commissions</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>
	</div>

	{@render children()}

	<!-- Footer -->
	<div
		class="text-text-primary mx-auto w-[90%] border-t-2 px-(--mobile-padding) text-center lg:w-[60%] lg:px-(--desktop-padding)"
	>
		<h2 class="py-7 text-xl">marykelleher98@gmail.com</h2>
		<div class="mx-auto flex w-fit justify-between gap-10">
			<span>
				<img src={EmailIcon} alt="Envelope" class="h-10 w-10" />
			</span>
			<a target="_blank" href="https://www.tiktok.com/@marysmelleher"
				><img src={TikTokIcon} alt="TikTok Icon" class="h-10 w-10" /></a
			>
			<a target="_blank" href="https://www.instagram.com/marykpaints"
				><img src={InstagramIcon} alt="Instagram Icon" class="h-10 w-10" /></a
			>
			<a target="_blank" href="https://www.etsy.com/shop/MaryKPaints"
				><img src={EtsyIcon} alt="Etsy Icon" class="h-10 w-10" /></a
			>
		</div>
		<div class="py-10">@2025marykpaints. All Rights Reserved</div>
	</div>
</div>

<style>
	:global(body) {
		background-color: antiquewhite;
		font-family: 'CMU Serif Roman';
	}
</style>
