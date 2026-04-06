import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Home, Settings, Person } from '@mui/icons-material';
import LumoraWrapper, {
	type LumoraWrapperProps,
	type SidebarLink
} from '../LumoraWrapper';
import { lumoraTestRequiredProps } from './testUtils';
import '@testing-library/jest-dom';

jest.mock('../../tokenValidator', () => ({
	validateAndRefreshTokens: jest.fn().mockResolvedValue(true)
}));

import { validateAndRefreshTokens } from '../../tokenValidator';

// Mock window.location is handled in setupTests.ts

// Test theme
const theme = createTheme();

// Test data
const mockSidebarLinks: SidebarLink[] = [
	{
		text: 'Home',
		path: '/home',
		icon: <Home data-testid='home-icon' />
	},
	{
		text: 'Settings',
		path: '/settings',
		icon: <Settings data-testid='settings-icon' />
	},
	{
		text: 'Profile',
		path: '/profile',
		icon: <Person data-testid='profile-icon' />
	}
];

const mockAppLogo = <div data-testid='app-logo'>Test Logo</div>;

// Helper function to render component with theme
const renderWithTheme = (props: Partial<LumoraWrapperProps> = {}) => {
	const defaultProps: LumoraWrapperProps = {
		...lumoraTestRequiredProps,
		children: <div data-testid='test-content'>Test Content</div>,
		...props
	};

	return render(
		<ThemeProvider theme={theme}>
			<LumoraWrapper {...defaultProps} />
		</ThemeProvider>
	);
};

describe('LumoraWrapper', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('Basic Rendering', () => {
		it('renders children correctly', () => {
			renderWithTheme();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('renders with default props', () => {
			renderWithTheme();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('applies custom styles to main container', () => {
			const customStyle = { backgroundColor: 'red' };
			const { container } = renderWithTheme({ style: customStyle });

			const root = container.firstElementChild as HTMLElement;
			expect(root).toHaveStyle({ backgroundColor: 'rgb(255, 0, 0)' });
		});
	});

	describe('Header Functionality', () => {
		it('renders header when showHeader is true', () => {
			renderWithTheme({ showHeader: true, appName: 'Test App' });
			expect(screen.getByRole('banner')).toBeInTheDocument();
			expect(screen.getByText('Test App')).toBeInTheDocument();
		});

		it('does not render header when showHeader is false', () => {
			renderWithTheme({ showHeader: false });
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
		});

		it('renders app name when provided', () => {
			renderWithTheme({
				showHeader: true,
				appName: 'My App'
			});
			expect(screen.getByText('My App')).toBeInTheDocument();
		});

		it('accepts pageName prop (navbar shows app name only)', () => {
			renderWithTheme({
				showHeader: true,
				appName: 'Nav App',
				pageName: 'My Application'
			});
			expect(screen.getByText('Nav App')).toBeInTheDocument();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('applies custom styles to main container', () => {
			const customStyle = { backgroundColor: 'blue' };
			const { container } = renderWithTheme({
				showHeader: true,
				style: customStyle
			});

			const root = container.firstElementChild as HTMLElement;
			expect(root).toHaveStyle({ backgroundColor: 'rgb(0, 0, 255)' });
		});
	});

	describe('Sidebar Functionality', () => {
		it('renders sidebar when showSidebar is true', () => {
			renderWithTheme({
				showSidebar: true,
				sidebarLinks: mockSidebarLinks
			});

			// Rail sidebar uses icon links with aria-label (no visible link text)
			expect(
				screen.getByRole('link', { name: /home/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('link', { name: /settings/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('link', { name: /profile/i })
			).toBeInTheDocument();
		});

		it('does not render sidebar when showSidebar is false', () => {
			renderWithTheme({ showSidebar: false });

			expect(
				screen.queryByRole('link', { name: /home/i })
			).not.toBeInTheDocument();
			expect(
				screen.queryByRole('link', { name: /settings/i })
			).not.toBeInTheDocument();
		});

		it('renders sidebar links with correct paths and icons', () => {
			renderWithTheme({
				showSidebar: true,
				sidebarLinks: mockSidebarLinks
			});

			const homeLink = screen.getByRole('link', { name: /home/i });
			const settingsLink = screen.getByRole('link', {
				name: /settings/i
			});
			const profileLink = screen.getByRole('link', { name: /profile/i });

			expect(homeLink).toHaveAttribute('href', '/home');
			expect(settingsLink).toHaveAttribute('href', '/settings');
			expect(profileLink).toHaveAttribute('href', '/profile');

			expect(screen.getByTestId('home-icon')).toBeInTheDocument();
			expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
			expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
		});

		it('handles empty sidebar links array', () => {
			renderWithTheme({
				showSidebar: true,
				sidebarLinks: []
			});

			expect(document.querySelector('.MuiDrawer-root')).toBeInTheDocument();
			expect(screen.queryByRole('link')).not.toBeInTheDocument();
		});

		it('applies custom sidebar styles', () => {
			const sidebarStyles = { backgroundColor: 'green' };
			renderWithTheme({
				showSidebar: true,
				sidebarStyles
			});

			const drawer = document.querySelector(
				'.MuiDrawer-root'
			) as HTMLElement | null;
			expect(drawer).toBeInTheDocument();
			expect(drawer).toHaveStyle({ backgroundColor: 'rgb(0, 128, 0)' });
		});
	});

	describe('Content Area', () => {
		it('applies correct margin when header is shown', () => {
			renderWithTheme({ showHeader: true });

			const contentArea = screen.getByRole('main');
			expect(contentArea).toHaveStyle({ marginTop: '60px' });
		});

		it('applies no margin when header is not shown', () => {
			renderWithTheme({ showHeader: false });

			const contentArea = screen.getByRole('main');
			expect(contentArea).toHaveStyle({ marginTop: '0px' });
		});

		it('applies custom content styles', () => {
			const contentStyles = { padding: '20px' };
			renderWithTheme({ contentStyles });

			const contentArea = screen
				.getByTestId('test-content')
				.closest('[class*="MuiBox-root"]');
			expect(contentArea).toHaveStyle('padding: 20px');
		});
	});

	describe('Token Refresh Logic', () => {
		beforeEach(() => {
			jest.clearAllMocks();
			(validateAndRefreshTokens as jest.Mock).mockResolvedValue(true);
		});

		it('does not call validateAndRefreshTokens when enableRefreshToken is false', async () => {
			renderWithTheme({ enableRefreshToken: false });

			await waitFor(() => {
				expect(screen.getByTestId('test-content')).toBeInTheDocument();
			});

			expect(validateAndRefreshTokens).not.toHaveBeenCalled();
		});

		it('calls validateAndRefreshTokens when enableRefreshToken is true', async () => {
			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(validateAndRefreshTokens).toHaveBeenCalled();
			});
			const call = (validateAndRefreshTokens as jest.Mock).mock.calls[0];
			expect(call[1]).toBe(lumoraTestRequiredProps.redirectToLogin);
		});

		/** 
		it('refreshes token when it expires within threshold', async () => {
			// Set token expiry to 5 minutes from now (within threshold)
			const futureTime = new Date('2024-01-01T10:05:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			const mockResponse = {
				ok: true,
				json: () => Promise.resolve({
					token: 'new-token',
					tokenExpiry: new Date('2024-01-01T11:00:00Z').toISOString()
				})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalledWith('/api/auth/refresh', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					credentials: 'include',
				});
			});

			expect(mockCookies.set).toHaveBeenCalledWith('token', 'new-token', {
				expires: 7,
				secure: true,
				sameSite: 'strict'
			});

			expect(mockCookies.set).toHaveBeenCalledWith('tokenExpiry', expect.any(String), {
				expires: 7,
				secure: true,
				sameSite: 'strict'
			});

			expect(console.log).toHaveBeenCalledWith('Token refreshed successfully');
		});

		it('handles token refresh failure and redirects to login', async () => {
			// Set token expiry to 5 minutes from now
			const futureTime = new Date('2024-01-01T10:05:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			mockFetch.mockRejectedValueOnce(new Error('Network error'));

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(mockCookies.remove).toHaveBeenCalledWith('token');
			expect(mockCookies.remove).toHaveBeenCalledWith('tokenExpiry');
			expect((window as any).location.href).toBe('http://localhost:3000/');
			expect(console.error).toHaveBeenCalledWith('Token refresh failed:', expect.any(Error));
		});

		it('handles API error response and redirects to login', async () => {
			// Set token expiry to 5 minutes from now
			const futureTime = new Date('2024-01-01T10:05:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			const mockResponse = {
				ok: false,
				status: 401
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(mockCookies.remove).toHaveBeenCalledWith('token');
			expect(mockCookies.remove).toHaveBeenCalledWith('tokenExpiry');
			expect((window as any).location.href).toBe('http://localhost:3000/');
			expect(console.error).toHaveBeenCalledWith('Token refresh failed:', expect.any(Error));
		});

		it('redirects to login when token is already expired', async () => {
			// Set token expiry to 5 minutes ago (expired)
			const pastTime = new Date('2024-01-01T09:55:00Z');
			mockCookies.get.mockReturnValue(pastTime.toISOString() as any);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).not.toHaveBeenCalled();
			});

			expect(mockCookies.remove).toHaveBeenCalledWith('token');
			expect(mockCookies.remove).toHaveBeenCalledWith('tokenExpiry');
			expect((window as any).location.href).toBe('http://localhost:3000/');
			expect(console.warn).toHaveBeenCalledWith('Token has expired, redirecting to login');
		});

		it('handles token refresh with missing token in response', async () => {
			// Set token expiry to 5 minutes from now
			const futureTime = new Date('2024-01-01T10:05:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			const mockResponse = {
				ok: true,
				json: () => Promise.resolve({
					// No token in response
					tokenExpiry: new Date('2024-01-01T11:00:00Z').toISOString()
				})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			// Should not call Cookies.set for token
			expect(mockCookies.set).not.toHaveBeenCalledWith('token', expect.any(String), expect.any(Object));
			expect(mockCookies.set).toHaveBeenCalledWith('tokenExpiry', expect.any(String), expect.any(Object));
		});

		it('handles token refresh with missing tokenExpiry in response', async () => {
			// Set token expiry to 5 minutes from now
			const futureTime = new Date('2024-01-01T10:05:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			const mockResponse = {
				ok: true,
				json: () => Promise.resolve({
					token: 'new-token'
					// No tokenExpiry in response
				})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			// Should not call Cookies.set for tokenExpiry
			expect(mockCookies.set).toHaveBeenCalledWith('token', 'new-token', expect.any(Object));
			expect(mockCookies.set).not.toHaveBeenCalledWith('tokenExpiry', expect.any(String), expect.any(Object));
		});
		*/
	});

	describe('Integration Tests', () => {
		it('renders complete layout with all features enabled', () => {
			renderWithTheme({
				showHeader: true,
				showSidebar: true,
				appName: 'My App',
				pageName: 'Dashboard',
				sidebarLinks: mockSidebarLinks
			});

			// Check all components are rendered
			expect(screen.getByRole('banner')).toBeInTheDocument();
			expect(screen.getByText('My App')).toBeInTheDocument();
			expect(
				screen.getByRole('link', { name: /home/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('link', { name: /settings/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('link', { name: /profile/i })
			).toBeInTheDocument();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('renders minimal layout with all features disabled', () => {
			renderWithTheme({
				showHeader: false,
				showSidebar: false
			});

			// Check only content is rendered
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
			expect(screen.queryByRole('list')).not.toBeInTheDocument();
		});
	});
});
