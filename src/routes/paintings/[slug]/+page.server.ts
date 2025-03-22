import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import PocketBase from 'pocketbase';
import { POCKETBASE_PASSWORD } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	const pb = new PocketBase('https://pocketbase-production-7a10.up.railway.app');
	await pb.collection('_superusers').authWithPassword('sheffira2@gmail.com', POCKETBASE_PASSWORD);
	if (!params.slug) {
		error(404, 'Image not found');
	}
	return {
		image: await pb.collection('images').getOne(params.slug)
	};
};
