import React from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Home, Settings, Person } from '@mui/icons-material';
import type { LumoraWrapperProps, SidebarLink } from '../LumoraWrapper';

// Create a test theme
export const testTheme = createTheme();

// Mock sidebar links for testing
export const mockSidebarLinks: SidebarLink[] = [
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

// Mock app logo for testing
export const mockAppLogo = <div data-testid='app-logo'>Test Logo</div>;

/** Required LumoraWrapper props for unit tests (session gate is mocked in suites that need it). */
export const lumoraTestRequiredProps: Pick<
	LumoraWrapperProps,
	'onLogout' | 'apiBaseUrl' | 'redirectToLogin'
> = {
	onLogout: jest.fn(),
	apiBaseUrl: 'https://api.test',
	redirectToLogin: jest.fn()
};

// Default test props
export const defaultTestProps: Partial<LumoraWrapperProps> = {
	children: <div data-testid='test-content'>Test Content</div>,
	...lumoraTestRequiredProps
};

// Custom render function with theme provider
const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => {
	const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
		<ThemeProvider theme={testTheme}>{children}</ThemeProvider>
	);

	return render(ui, { wrapper: Wrapper, ...options });
};

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// Helper function to create test props
export const createTestProps = (
	overrides: Partial<LumoraWrapperProps> = {}
): LumoraWrapperProps =>
	({
		...lumoraTestRequiredProps,
		...defaultTestProps,
		...overrides
	}) as LumoraWrapperProps;

// Helper function to mock token expiry
export const mockTokenExpiry = (minutesFromNow: number) => {
	const futureTime = new Date();
	futureTime.setMinutes(futureTime.getMinutes() + minutesFromNow);
	return futureTime.toISOString();
};

// Helper function to mock expired token
export const mockExpiredToken = (minutesAgo: number) => {
	const pastTime = new Date();
	pastTime.setMinutes(pastTime.getMinutes() - minutesAgo);
	return pastTime.toISOString();
};
