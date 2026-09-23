import { Home, Person, Settings } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, type RenderOptions } from '@testing-library/react';
import type * as React from 'react';
import type { LumoraWrapperProps, SidebarLink } from '../LumoraWrapper';

const testTheme = createTheme();

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

/** Required LumoraWrapper props (the session gate itself is mocked in setupTests.ts). */
export const lumoraTestRequiredProps: Pick<
	LumoraWrapperProps,
	'onLogout' | 'apiBaseUrl' | 'redirectToLogin'
> = {
	onLogout: jest.fn(),
	apiBaseUrl: 'https://api.test',
	redirectToLogin: jest.fn()
};

/** Render inside a default MUI theme, as a host app would. */
const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) =>
	render(ui, {
		wrapper: ({ children }) => (
			<ThemeProvider theme={testTheme}>{children}</ThemeProvider>
		),
		...options
	});

export * from '@testing-library/react';
export { customRender as render };
