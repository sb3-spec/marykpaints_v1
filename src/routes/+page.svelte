<script lang="ts">
	import heroCard from '$lib/assets/Mary Kelleher Alt.png';
	import mobileHeroCard from '$lib/assets/Mary KelleherMobile.png';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let isMobile: boolean = $state(false);

	onMount(() => {
		isMobile = window?.innerWidth <= 650;
	});
	let images = data.images.flatMap((image) => {
		return {
			id: image.id,
			name: image.name,
			file_name: image.file_name
		};
	});
</script>

<div class="h-screen">
	<img
		src={(!isMobile && heroCard) || mobileHeroCard}
		alt="Mary Kelleher"
		class="mx-auto h-screen w-full"
	/>
</div>
<div class="flex w-full flex-col pt-[84px] lg:min-h-screen">
	<div class="mx-auto w-9/12 text-center text-5xl text-black lg:w-7/12 lg:text-7xl">
		<h1 class="mb-10 border-b-2 pb-8">Paintings</h1>
	</div>

	<div
		class="relative flex min-h-[30rem] w-full overflow-hidden text-center whitespace-nowrap"
		id="container"
	>
		<ul class="absolute top-0 flex w-max gap-5 pl-[20px]" id="scroll-1">
			{#each images as image}
				<li class="relative">
					<a href={`/paintings/${image.id}`}>
						<div
							class="bg-gold-opaque absolute flex h-[34rem] w-full pt-20 text-center opacity-0 transition duration-500 hover:opacity-100"
						>
							<h1 class="mx-auto px-10 text-6xl text-wrap text-white">{image.name}</h1>
						</div>
					</a>
					<img
						src={`https://pocketbase-production-7a10.up.railway.app/api/files/pbc_3607937828/${image.id}/${image.file_name}?token=`}
						alt={image.name}
						class="h-[30rem] w-[26rem] object-cover lg:h-[34rem] lg:w-[34rem]"
					/>
				</li>
			{/each}
		</ul>

		<ul class="absolute top-0 flex w-max gap-5 pl-[20px]" id="scroll-2">
			{#each images as image}
				<li class="relative shrink-0 grow-0">
					<a href={`/paintings/${image.id}`}>
						<div
							class="bg-gold-opaque absolute h-[34rem] w-full pt-20 opacity-0 transition duration-500 hover:opacity-100"
						>
							<h1 class="mx-auto px-10 text-6xl text-wrap text-white">{image.name}</h1>
						</div>
					</a>
					<img
						src={`https://pocketbase-production-7a10.up.railway.app/api/files/pbc_3607937828/${image.id}/${image.file_name}?token=`}
						alt={image.name}
						class="h-[30rem] w-[26rem] object-cover lg:h-[34rem] lg:w-[34rem]"
					/>
				</li>
			{/each}
		</ul>
	</div>
	<a
		href="/paintings"
		class="hover:bg-gold mx-auto mt-4 w-64 border text-center text-4xl text-black transition duration-400 hover:text-white"
		>More Work</a
	>
</div>

<!-- About Me -->
<div class="pt-[84px]">
	<div class="mx-auto w-9/12 text-center text-5xl text-black lg:w-7/12 lg:text-7xl">
		<h1 class="mb-10 border-b-2 pb-8">About Me</h1>
	</div>

	<div class="flex w-full justify-center">
		<p class="text-text-primary w-10/12 px-8 text-left text-2xl lg:w-7/12 lg:text-3xl">
			Hi, I’m Mary! I’m an acrylic and gouache painter based in Seattle, Washington. My art is
			inspired by the tiny details in everyday life that often go unnoticed, like the shadows of
			leaves on the sidewalk or the reflection of light on the surface of a lake. I use rich colors
			and intricate detail to create a hybrid between realism and surrealism. I take time out of
			every day to paint, and I’m so excited to share my world with you!
		</p>
	</div>
</div>

<div class="flex w-full flex-col pt-[84px]">
	<div class="mx-auto w-9/12 text-center text-black lg:w-7/12">
		<h1 class="text-5xl lg:text-7xl">Contact</h1>
	</div>

	<div></div>
</div>

<style>
	@keyframes loop {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes loop-2 {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0%);
		}
	}

	#scroll-1 {
		animation: loop 50s infinite linear;
	}

	#scroll-2 {
		animation: loop-2 50s infinite linear;
	}
</style>
