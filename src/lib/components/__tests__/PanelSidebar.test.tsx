import { ThemeProvider, createTheme } from '@mui/material/styles';
import PanelSidebar, { type PanelSidebarProps } from '../PanelSidebar';
import type { SidebarLink } from '../LumoraWrapper';
import { fireEvent, render, screen, waitFor, within } from './testUtils';

const links: SidebarLink[] = [
	{ text: 'Dashboard', path: '/dashboard', icon: <span>D</span> },
	{ text: 'Deals', path: '/deals', icon: <span>$</span> }
];

const baseProps: PanelSidebarProps = {
	mainLinks: links,
	collapsed: false,
	expandedWidth: 264,
	collapsedWidth: 72,
	userName: 'Riley Carter',
	userEmail: 'riley.carter@example.com',
	userRole: 'SUPER_ADMIN',
	activeAccentColor: '#5bbfad',
	notificationCount: 29,
	onNotificationsClick: jest.fn(),
	whatsNewCount: 3,
	onProfileClick: jest.fn(),
	// The panel menu has no built-in Settings: hosts pass it as a menu item.
	menuItems: [
		{
			key: 'settings',
			label: 'Settings',
			icon: <span>S</span>,
			onClick: jest.fn()
		}
	],
	onLogout: jest.fn(),
	theme: 'light',
	onThemeToggle: jest.fn()
};

const renderPanel = (props: Partial<PanelSidebarProps> = {}) =>
	render(<PanelSidebar {...baseProps} {...props} />);

const openMenu = () => {
	const button = screen.getByTestId('panel-user-button');
	// A real click focuses the button; jsdom's fireEvent does not, and the
	// Popover restores focus to whatever was focused when it opened.
	button.focus();
	fireEvent.click(button);
	return screen.getByTestId('account-menu');
};

const expectMenuClosed = () =>
	waitFor(() => expect(screen.queryByTestId('account-menu')).toBeNull());

describe('PanelSidebar account menu', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('structure', () => {
		it('lists items in the specified order', () => {
			renderPanel();
			const menu = openMenu();
			const ids = within(menu)
				.getAllByRole('menuitem')
				.map(el => el.getAttribute('data-testid'));
			expect(ids).toEqual(['menu-item-settings', 'menu-item-logout']);
			// The Theme row sits right above the list and is not a menu item.
			const list = within(menu).getByRole('menu');
			const themeRow = screen.getByTestId('menu-item-theme');
			expect(themeRow.nextElementSibling).toBe(list);
			expect(
				within(menu).queryByRole('menuitem', { name: /theme/i })
			).toBeNull();
		});

		it('shows name, email and role in the header, in that order', () => {
			renderPanel();
			const menu = openMenu();
			const name = within(menu).getByText('Riley Carter');
			const email = within(menu).getByText('riley.carter@example.com');
			const role = within(menu).getByText('SUPER ADMIN');
			expect(email).toHaveAttribute('data-testid', 'account-menu-email');
			expect(name.nextElementSibling).toBe(email);
			expect(email.nextElementSibling).toBe(role);
		});

		it('shows only name and role on the footer button (email lives in the menu)', () => {
			renderPanel();
			const button = screen.getByTestId('panel-user-button');
			const name = within(button).getByText('Riley Carter');
			const role = within(button).getByTestId('panel-user-role');
			expect(role).toHaveTextContent('SUPER ADMIN');
			expect(name.nextElementSibling).toBe(role);
			expect(button).not.toHaveTextContent('riley.carter@example.com');
		});

		it('shows the role in capitals however it is stored, on the footer and in the menu', () => {
			renderPanel({ userRole: 'admin' });
			expect(screen.getByTestId('panel-user-role')).toHaveTextContent(
				'ADMIN'
			);
			const menu = openMenu();
			expect(
				within(menu).getByTestId('account-menu-role')
			).toHaveTextContent('ADMIN');
		});

		it('opens the profile from the whole header, with a "View profile" hint', async () => {
			renderPanel();
			openMenu();
			const header = screen.getByTestId('account-menu-header');
			expect(header.tagName).toBe('BUTTON');
			expect(
				within(header).getByTestId('account-menu-view-profile')
			).toHaveTextContent('View profile');
			fireEvent.click(header);
			expect(baseProps.onProfileClick).toHaveBeenCalledTimes(1);
			await expectMenuClosed();
		});

		it('leaves the header static without onProfileClick', () => {
			renderPanel({ onProfileClick: undefined });
			openMenu();
			const header = screen.getByTestId('account-menu-header');
			expect(header.tagName).not.toBe('BUTTON');
			expect(
				screen.queryByTestId('account-menu-view-profile')
			).toBeNull();
		});

		it('omits the header email line when no email is given', () => {
			renderPanel({ userEmail: undefined });
			openMenu();
			expect(screen.queryByTestId('account-menu-email')).toBeNull();
		});

		it('has no header close button; Escape closes and returns focus to the footer button', async () => {
			renderPanel();
			openMenu();
			expect(screen.queryByTestId('account-menu-close')).toBeNull();
			expect(screen.queryByLabelText('Close menu')).toBeNull();
			fireEvent.keyDown(document.activeElement!, { key: 'Escape' });
			await expectMenuClosed();
			expect(screen.getByTestId('panel-user-button')).toHaveFocus();
		});

		it('still opens from the avatar when the sidebar is collapsed', () => {
			renderPanel({ collapsed: true });
			expect(openMenu()).toBeInTheDocument();
		});

		it('focuses the first menu item (Settings) on open', () => {
			renderPanel();
			openMenu();
			expect(screen.getByTestId('menu-item-settings')).toHaveFocus();
		});
	});

	describe('theme row', () => {
		it('shows "Theme" with the light/dark toggle inline — no accordion', () => {
			renderPanel();
			openMenu();
			const row = screen.getByTestId('menu-item-theme');
			expect(row).not.toHaveAttribute('role');
			expect(row).not.toHaveAttribute('aria-expanded');
			expect(within(row).getByText('Theme')).toBeInTheDocument();
			expect(screen.queryByText('Theme Configuration')).toBeNull();
			const group = within(row).getByRole('radiogroup', {
				name: 'Theme'
			});
			expect(group).toBeVisible();
			// Icon-only segments, labelled for assistive tech.
			expect(
				within(group)
					.getAllByRole('radio')
					.map(r => r.getAttribute('aria-label'))
			).toEqual(['Light', 'Dark']);
			expect(within(group).queryByText('Light')).toBeNull();
		});

		it('mirrors the current theme and only toggles when the other option is chosen', () => {
			renderPanel();
			openMenu();
			const light = screen.getByRole('radio', { name: 'Light' });
			const dark = screen.getByRole('radio', { name: 'Dark' });
			expect(light).toHaveAttribute('aria-checked', 'true');
			expect(dark).toHaveAttribute('aria-checked', 'false');

			fireEvent.click(light);
			expect(baseProps.onThemeToggle).not.toHaveBeenCalled();
			fireEvent.click(dark);
			expect(baseProps.onThemeToggle).toHaveBeenCalledTimes(1);
			// Switching theme must not close the menu.
			expect(screen.getByTestId('account-menu')).toBeInTheDocument();
		});

		it('handles arrow keys inside the radio group without leaking into the menu list', () => {
			renderPanel();
			openMenu();
			const light = screen.getByRole('radio', { name: 'Light' });
			light.focus();

			fireEvent.keyDown(light, { key: 'ArrowRight' });
			expect(baseProps.onThemeToggle).toHaveBeenCalledTimes(1);
			expect(screen.getByRole('radio', { name: 'Dark' })).toHaveFocus();

			fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' });
			expect(document.activeElement).toHaveAttribute('role', 'radio');
		});

		it('is skipped by arrow traversal (the toggle is reached with Tab)', () => {
			renderPanel();
			openMenu();
			const first = screen.getByTestId('menu-item-settings');
			expect(first).toHaveFocus();
			// Up from the first menu item wraps to the last — not the Theme row.
			fireEvent.keyDown(first, { key: 'ArrowUp' });
			expect(screen.getByTestId('menu-item-logout')).toHaveFocus();
			fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' });
			expect(first).toHaveFocus();
		});

		it('is omitted when showThemeToggler is false', () => {
			renderPanel({ showThemeToggler: false });
			openMenu();
			expect(screen.queryByTestId('menu-item-theme')).toBeNull();
			expect(screen.getByTestId('menu-item-settings')).toHaveFocus();
		});
	});

	describe('items', () => {
		it('has only Theme and Log out built in', () => {
			renderPanel({ menuItems: [] });
			const menu = openMenu();
			expect(screen.getByTestId('menu-item-theme')).toBeInTheDocument();
			expect(
				within(menu)
					.getAllByRole('menuitem')
					.map(el => el.getAttribute('data-testid'))
			).toEqual(['menu-item-logout']);
		});

		it('lists host menu items after Theme, in order, with their badges', () => {
			renderPanel({
				menuItems: [
					{ key: 'settings', label: 'Settings', path: '/settings' },
					{ key: 'help', label: 'Help', badge: 4, onClick: jest.fn() }
				]
			});
			const menu = openMenu();
			const ids = within(menu)
				.getAllByRole('menuitem')
				.map(el => el.getAttribute('data-testid'));
			expect(ids).toEqual([
				'menu-item-settings',
				'menu-item-help',
				'menu-item-logout'
			]);
			expect(screen.getByTestId('menu-item-help')).toHaveTextContent(
				'Help4'
			);
		});

		it('runs a host item onClick, else navigates to its path, then closes', async () => {
			const onLinkClick = jest.fn();
			const onClick = jest.fn();
			renderPanel({
				onLinkClick,
				menuItems: [
					{ key: 'settings', label: 'Settings', path: '/settings' },
					{ key: 'help', label: 'Help', path: '/help', onClick }
				]
			});
			openMenu();
			fireEvent.click(screen.getByTestId('menu-item-settings'));
			expect(onLinkClick).toHaveBeenCalledWith('/settings');
			await expectMenuClosed();

			openMenu();
			fireEvent.click(screen.getByTestId('menu-item-help'));
			expect(onClick).toHaveBeenCalledTimes(1);
			expect(onLinkClick).toHaveBeenCalledTimes(1);
		});

		it('calls onLogout from Log out', () => {
			renderPanel();
			openMenu();
			fireEvent.click(screen.getByTestId('menu-item-logout'));
			expect(baseProps.onLogout).toHaveBeenCalledTimes(1);
		});

		it('has no Lumora Platforms row', () => {
			renderPanel();
			const menu = openMenu();
			expect(within(menu).queryByText('Lumora Platforms')).toBeNull();
			expect(screen.queryByTestId('menu-item-platforms')).toBeNull();
		});
	});

	describe('dark theme', () => {
		it('renders the menu', () => {
			render(
				<ThemeProvider
					theme={createTheme({ palette: { mode: 'dark' } })}
				>
					<PanelSidebar {...baseProps} theme='dark' />
				</ThemeProvider>
			);
			openMenu();
			expect(screen.getByRole('radio', { name: 'Dark' })).toHaveAttribute(
				'aria-checked',
				'true'
			);
		});
	});

	it('closes on a backdrop click', async () => {
		renderPanel();
		openMenu();
		fireEvent.click(
			document.querySelector('.MuiBackdrop-root') as HTMLElement
		);
		await expectMenuClosed();
	});
});

describe('PanelSidebar footer bell', () => {
	it('badges the bell with both counts together', () => {
		renderPanel();
		// 29 unread notifications + 3 unread What's New: the bell opens both tabs
		expect(
			screen.getByLabelText('Notifications, 32 unread')
		).toBeInTheDocument();
	});

	it("collapsed, shows the avatar dot when only What's New is unread", () => {
		renderPanel({
			collapsed: true,
			notificationCount: 0,
			whatsNewCount: 3
		});
		expect(screen.queryByTestId('panel-notifications')).toBeNull();
		const dot = screen
			.getByTestId('panel-user-button')
			.querySelector('.MuiBadge-dot');
		expect(dot).not.toBeNull();
		expect(dot).not.toHaveClass('MuiBadge-invisible');
	});

	it('collapsed, hides the avatar dot when nothing is unread on either tab', () => {
		renderPanel({
			collapsed: true,
			notificationCount: 0,
			whatsNewCount: 0
		});
		expect(
			screen
				.getByTestId('panel-user-button')
				.querySelector('.MuiBadge-dot')
		).toHaveClass('MuiBadge-invisible');
	});
});
