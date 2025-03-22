import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import PocketBase from 'pocketbase';
import { VITE_POCKETBASE_PASSWORD } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	const pb = new PocketBase('http://127.0.0.1:8090');
	await pb
		.collection('_superusers')
		.authWithPassword('sheffira2@gmail.com', VITE_POCKETBASE_PASSWORD);
	if (!params.slug) {
		error(404, 'Image not found');
	}
	return {
		image: await pb.collection('images').getOne(params.slug)
	};
};
