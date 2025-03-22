import type { PageServerLoad } from './$types';
import { POCKETBASE_PASSWORD } from '$env/static/private';

import PocketBase from 'pocketbase';

export const load: PageServerLoad = async () => {
	const pb = new PocketBase('https://pocketbase-production-7a10.up.railway.app');

	await pb.collection('_superusers').authWithPassword('sheffira2@gmail.com', POCKETBASE_PASSWORD);
	return {
		images: await pb.collection('images').getFullList()
	};
};
