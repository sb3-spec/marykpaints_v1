<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div
	class="overflow-x-hidden px-(--mobile-padding) py-[100px] text-center lg:px-(--desktop-padding)"
>
	<h1
		class="text-text-primary mx-auto mb-10 overflow-x-hidden border-b-2 pb-8 text-5xl lg:text-7xl"
	>
		Paintings
	</h1>
	<ul class="mx-auto flex flex-wrap justify-between gap-y-4 overflow-hidden lg:gap-y-6">
		{#each data.images as image}
			<li class="mdlg:basis-[32%] relative lg:basis-[49%]">
				<a href={`/paintings/${image.id}`}>
					<div
						class="bg-gold-opaque absolute h-full w-full pt-30 opacity-0 transition duration-500 hover:opacity-100"
					>
						<h1 class="px-10 text-center text-7xl text-white">{image.name}</h1>
					</div>
				</a>
				<img
					src={`https://pocketbase-production-7a10.up.railway.app/api/files/pbc_3607937828/${image.id}/${image.file_name}?token=`}
					alt={image.name}
					class="md:min-h-[36rem] md:object-cover lg:min-h-[36rem]"
				/>
			</li>
		{/each}
	</ul>
</div>
