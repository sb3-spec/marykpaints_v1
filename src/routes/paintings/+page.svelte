<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class=" min-w-screen pt-[84px] text-center">
	<h1
		class="text-text-primary mx-auto mb-10 w-10/12 border-b-2 pb-8 text-5xl lg:max-w-[58rem] lg:min-w-7/12 lg:text-7xl"
	>
		Paintings
	</h1>
	<ul class="mx-auto flex flex-wrap gap-2 lg:w-7/12">
		{#each data.images as image}
			<li class="relative sm:mx-auto">
				<a href={`/paintings/${image.id}`}>
					<div
						class="bg-gold-opaque absolute h-[34rem] w-full pt-20 opacity-0 transition duration-500 hover:opacity-100"
					>
						<h1 class="px-10 text-center text-7xl text-white">{image.name}</h1>
					</div>
				</a>
				<img
					src={`https://pocketbase-production-7a10.up.railway.app/api/files/pbc_3607937828/${image.id}/${image.file_name}?token=`}
					alt={image.name}
					class="object-cover"
				/>
			</li>
		{/each}
	</ul>
</div>
