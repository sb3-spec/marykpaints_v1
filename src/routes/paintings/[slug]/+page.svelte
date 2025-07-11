<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let isMobile: boolean = $state(false);

	onMount(() => {
		isMobile = window?.innerWidth <= 700;
	});
</script>

<div
	class="overflow-x-hidden px-(--mobile-padding) pt-[60px] pb-10 lg:px-(--desktop-padding) lg:pt-[40px]"
>
	{#if isMobile}
		<div>
			<h1 class="text-text-primary mx-auto text-left text-5xl lg:max-w-[15ch]">
				{data.image.name}
			</h1>
		</div>
	{/if}
	<div
		class="bg-beige-400 lex-wrap flex basis-[100%] flex-col gap-2 overflow-hidden pt-[20px] md:basis-[49%] lg:mt-[84px] lg:flex-row lg:justify-between"
	>
		<img
			src={`https://pocketbase-production-7a10.up.railway.app/api/files/pbc_3607937828/${data.image.id}/${data.image.file_name}?token=`}
			alt={data.image.name}
			class="object-cover md:h-[500px] lg:h-[500px] lg:w-[550px]"
		/>
		<div class="flex w-fit flex-col gap-10">
			{#if !isMobile}
				<div>
					<h1 class="text-text-primary text-xl lg:max-w-[16ch] xl:text-6xl">{data.image.name}</h1>
				</div>
			{/if}
			<div class="flex flex-col gap-5">
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
