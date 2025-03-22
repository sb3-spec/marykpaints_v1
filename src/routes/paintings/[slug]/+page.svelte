<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let isMobile: boolean = $state(false);

	onMount(() => {
		isMobile = window?.innerWidth <= 1200;
	});
</script>

<div class="mg:w-screen mx-auto overflow-hidden sm:w-screen lg:h-[75vh] lg:w-7/12">
	{#if isMobile}
		<div>
			<h1 class="text-text-primary mx-auto max-w-[15ch] text-left text-5xl">{data.image.name}</h1>
		</div>
	{/if}
	<div
		class="bg-beige-400 flex w-screen flex-wrap justify-center gap-2 overflow-hidden pt-[40px] lg:mt-[84px] lg:w-full lg:justify-between"
	>
		<img
			src={`https://pocketbase-production-7a10.up.railway.app/api/files/pbc_3607937828/${data.image.id}/${data.image.file_name}?token=`}
			alt={data.image.name}
			class="h-[500px] w-96 object-fill lg:h-[500px] lg:w-[550px]"
		/>
		<div class="flex flex-col gap-10">
			{#if !isMobile}
				<div>
					<h1 class="text-text-primary max-w-[16ch] text-6xl">{data.image.name}</h1>
				</div>
			{/if}
			<div class="flex flex-col gap-5 sm:w-96 md:w-96">
				<span class="text-text-primary min-w-fit">
					<h1 class="text-4xl">Material</h1>
					<h2 class="text-2xl">{data.image.materials}</h2>
				</span>
				<span class="text-text-primary">
					<h1 class="text-4xl">Size</h1>
					<h2 class="text-2xl">{data.image.size}</h2>
				</span>
				<span class="text-text-primary">
					<h1 class="text-4xl">Year Made</h1>
					<h2 class="text-2xl">{data.image.year_made}</h2>
				</span>
			</div>
		</div>
	</div>
</div>
