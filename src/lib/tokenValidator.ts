import type { AxiosInstance } from 'axios';
import { clearAuthTokens, getAuthTokens, logAuthError, storeAuthTokens } from './authUtils';

/**
 * Validates tokens on mount and refreshes if needed
 * Returns true if tokens are valid/refreshed, false if redirect to login is needed
 * Note: This is a proactive check on mount. Token refresh on API calls is handled
 * automatically by axiosClient interceptors.
 * @param axiosClient - The axios client instance to use for API calls
 */
export const validateAndRefreshTokens = async (
	axiosClient: AxiosInstance,
	redirectToLogin?: () => void
): Promise<boolean> => {
	const { accessToken, refreshToken } = getAuthTokens();

	// If we have an access token, we're good
	if (accessToken) {
		return true;
	}

	// No access token, but we have a refresh token - try to refresh
	if (refreshToken) {
		try {
			const refreshResponse = await axiosClient.post('/auth/refresh', {
				refresh_token: refreshToken
			});

			if (refreshResponse.data.success && refreshResponse.data.accessToken) {
				// Store the new tokens using centralized utility
				storeAuthTokens(refreshResponse.data.accessToken, refreshResponse.data.refreshToken || null, null);
				return true;
			}
		} catch (error) {
			logAuthError(error as Error, 'TokenValidator - Refresh Failed');
		}
	}

	// No tokens or refresh failed - clear everything and redirect
	clearAuthTokens();
	if (redirectToLogin) {
		redirectToLogin();
	} else {
		window.location.href = '/login';
	}
	return false;
};
