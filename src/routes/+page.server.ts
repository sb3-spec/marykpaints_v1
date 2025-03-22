import type { PageServerLoad } from './$types';
import { POCKETBASE_PASSWORD } from '$env/static/private';
import dotenv from 'dotenv';

import PocketBase from 'pocketbase';

export const load: PageServerLoad = async () => {
	if (import.meta.env.PROD) {
		dotenv.config();
	}
	const pb = new PocketBase('http://127.0.0.1:8090');

	await pb.collection('_superusers').authWithPassword('sheffira2@gmail.com', POCKETBASE_PASSWORD);
	return {
		images: await pb.collection('images').getFullList()
	};
};
