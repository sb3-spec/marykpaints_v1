<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="overflow-x-hidden py-[84px] text-center">
	<h1
		class="text-text-primary mx-auto mb-10 w-10/12 overflow-x-hidden border-b-2 pb-8 text-5xl lg:max-w-[58rem] lg:min-w-7/12 lg:text-7xl"
	>
		Paintings
	</h1>
	<ul
		class="lg:min-w-7/12l mx-auto flex w-5/6 flex-wrap justify-between gap-y-4 overflow-hidden lg:max-w-[58rem] lg:min-w-7/12 lg:gap-y-6"
	>
		{#each data.images as image}
			<li class="relative md:basis-[49%] lg:basis-[32%]">
				<a href={`/paintings/${image.id}`}>
					<div
						class="bg-gold-opaque absolute h-full w-full pt-20 opacity-0 transition duration-500 hover:opacity-100"
					>
						<h1 class="px-10 text-center text-5xl text-white">{image.name}</h1>
					</div>
				</a>
				<img
					src={`https://pocketbase-production-7a10.up.railway.app/api/files/pbc_3607937828/${image.id}/${image.file_name}?token=`}
					alt={image.name}
					class="object-cover lg:min-h-[25rem]"
				/>
			</li>
		{/each}
	</ul>
</div>
