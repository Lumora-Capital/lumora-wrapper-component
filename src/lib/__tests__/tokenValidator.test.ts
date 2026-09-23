import type { AxiosInstance } from 'axios';
import { validateAndRefreshTokens } from '../tokenValidator';

const ACCESS_KEY = 'lumoraAccessToken';
const REFRESH_KEY = 'lumoraRefreshToken';

const clientWithPost = (post: jest.Mock) =>
	({ post }) as unknown as AxiosInstance;

describe('validateAndRefreshTokens', () => {
	beforeEach(() => {
		window.localStorage.clear();
	});

	it('keeps the session when an access token exists', async () => {
		window.localStorage.setItem(ACCESS_KEY, 'access');
		const post = jest.fn();
		const redirect = jest.fn();

		await expect(
			validateAndRefreshTokens(clientWithPost(post), redirect)
		).resolves.toBe(true);
		expect(post).not.toHaveBeenCalled();
		expect(redirect).not.toHaveBeenCalled();
	});

	it('refreshes and stores the new tokens when only a refresh token exists', async () => {
		window.localStorage.setItem(REFRESH_KEY, 'refresh');
		const post = jest.fn().mockResolvedValue({
			data: {
				success: true,
				accessToken: 'new-access',
				refreshToken: 'new-refresh'
			}
		});
		const redirect = jest.fn();

		await expect(
			validateAndRefreshTokens(clientWithPost(post), redirect)
		).resolves.toBe(true);
		expect(post).toHaveBeenCalledWith('/auth/refresh', {
			refresh_token: 'refresh'
		});
		expect(window.localStorage.getItem(ACCESS_KEY)).toBe('new-access');
		expect(window.localStorage.getItem(REFRESH_KEY)).toBe('new-refresh');
		expect(redirect).not.toHaveBeenCalled();
	});

	it('clears tokens and redirects when the refresh fails', async () => {
		window.localStorage.setItem(REFRESH_KEY, 'refresh');
		const post = jest.fn().mockRejectedValue(new Error('401'));
		const redirect = jest.fn();

		await expect(
			validateAndRefreshTokens(clientWithPost(post), redirect)
		).resolves.toBe(false);
		expect(window.localStorage.getItem(REFRESH_KEY)).toBeNull();
		expect(redirect).toHaveBeenCalled();
	});

	it('redirects when there are no tokens at all', async () => {
		const redirect = jest.fn();

		await expect(
			validateAndRefreshTokens(clientWithPost(jest.fn()), redirect)
		).resolves.toBe(false);
		expect(redirect).toHaveBeenCalled();
	});
});
