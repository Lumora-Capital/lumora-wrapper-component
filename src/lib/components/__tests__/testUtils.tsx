import { HouseIcon, SettingsIcon, UserIcon } from 'lucide-react';
import {
	fireEvent,
	render,
	screen,
	waitFor,
	type RenderOptions
} from '@testing-library/react';
import type * as React from 'react';
import type { LumoraWrapperProps, SidebarLink } from '../LumoraWrapper';

export const mockSidebarLinks: SidebarLink[] = [
	{
		text: 'Home',
		path: '/home',
		icon: <HouseIcon data-testid='home-icon' />
	},
	{
		text: 'Settings',
		path: '/settings',
		icon: <SettingsIcon data-testid='settings-icon' />
	},
	{
		text: 'Profile',
		path: '/profile',
		icon: <UserIcon data-testid='profile-icon' />
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

/** Render as a host app would (the shell needs no provider of the host's). */
const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, options);

/** Hover the collapsible / panel sidebar open, as a pointer would. */
export const hoverSidebarOpen = async () => {
	const panel = screen.getByTestId('sidebar-hover-panel');
	fireEvent.mouseOver(panel);
	await waitFor(() => expect(panel).toHaveAttribute('data-expanded', 'true'));
	return panel;
};

export * from '@testing-library/react';
export { customRender as render };
