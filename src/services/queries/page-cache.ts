import { pageCacheKey } from '../keys';
import { client } from '../redis';

const cacheRoutes = ['/about', '/privacy', '/auth/signin', '/auth/signup'];

export const getCachedPage = (route: string) => {
	if (cacheRoutes.includes(route)) {
		return client.get(pageCacheKey(route));
	}

	return null;
};

export const setCachedPage = (route: string, page: string) => {
	if (cacheRoutes.includes(route)) {
		return client.setEx(pageCacheKey(route), 2, page);
	}
};
