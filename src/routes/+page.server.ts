import type { PageServerLoad } from './$types';
import { POCKETBASE_PASSWORD } from '$env/static/private';
import dotenv from 'dotenv';

import PocketBase from 'pocketbase';

export const load: PageServerLoad = async () => {
	dotenv.config();

	const pb = new PocketBase('https://pocketbase-production-7a10.up.railway.app');

	await pb.collection('_superusers').authWithPassword('sheffira2@gmail.com', POCKETBASE_PASSWORD);
	return {
		images: (await pb.collection('images').getFullList()).sort(
			(a, b) => a.visibility - b.visibility
		)
	};
};
