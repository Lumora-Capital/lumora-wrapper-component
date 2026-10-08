import { ThemeProvider, createTheme } from '@mui/material/styles';
import PanelSidebar, { type PanelSidebarProps } from '../PanelSidebar';
import type { LumoraPlatform, SidebarLink } from '../LumoraWrapper';
import * as sidebarUtils from '../sidebarUtils';
import { fireEvent, render, screen, waitFor, within } from './testUtils';

const links: SidebarLink[] = [
	{ text: 'Dashboard', path: '/dashboard', icon: <span>D</span> },
	{ text: 'Deals', path: '/deals', icon: <span>$</span> }
];

const platforms: LumoraPlatform[] = [
	{ key: 'centra', name: 'Centra', url: 'https://centra.test' },
	{ key: 'polymer', name: 'Polymer', url: 'https://polymer.test' },
	{ key: 'xpdite', name: 'XPdite', url: 'https://xpdite.test' },
	{ key: 'core', name: 'Core', url: 'https://core.test' }
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
	platforms,
	currentPlatformKey: 'centra',
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

const openPlatforms = () => {
	fireEvent.click(screen.getByTestId('menu-item-platforms'));
	return screen.getByRole('dialog', { name: 'Lumora Platforms' });
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
			expect(ids).toEqual([
				'menu-item-settings',
				'menu-item-platforms',
				'menu-item-logout'
			]);
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
		it('has only Theme, Lumora Platforms and Log out built in', () => {
			renderPanel({ menuItems: [] });
			const menu = openMenu();
			expect(screen.getByTestId('menu-item-theme')).toBeInTheDocument();
			expect(
				within(menu)
					.getAllByRole('menuitem')
					.map(el => el.getAttribute('data-testid'))
			).toEqual(['menu-item-platforms', 'menu-item-logout']);
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
				'menu-item-platforms',
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

		it('hides the platforms row and its dividers when no platforms are given', () => {
			const { unmount } = renderPanel();
			const withPlatforms =
				within(openMenu()).getAllByRole('separator').length;
			unmount();

			renderPanel({ platforms: undefined });
			const menu = openMenu();
			expect(screen.queryByTestId('menu-item-platforms')).toBeNull();
			expect(within(menu).getAllByRole('separator').length).toBe(
				withPlatforms - 1
			);
		});
	});

	describe('Lumora Platforms panel', () => {
		it('opens beside the menu with title, subtitle, rows and footer', () => {
			renderPanel();
			openMenu();
			// Plain row until its card is open.
			expect(screen.getByTestId('menu-item-platforms')).toHaveAttribute(
				'data-active',
				'false'
			);
			const panel = openPlatforms();
			expect(screen.getByTestId('menu-item-platforms')).toHaveAttribute(
				'data-active',
				'true'
			);
			expect(
				within(panel).getByText('Choose where you want to work.')
			).toBeInTheDocument();
			expect(within(panel).getAllByRole('menuitem')).toHaveLength(4);
			const current = screen.getByTestId('platform-item-centra');
			expect(current).toHaveAttribute('aria-current', 'true');
			expect(within(current).getByText('Current')).toBeInTheDocument();
			expect(
				within(panel).getAllByTestId('platform-external-icon')
			).toHaveLength(3);
			expect(
				within(panel).getByText('Platforms available to your account')
			).toBeInTheDocument();
			// The menu card stays open next to it.
			expect(screen.getByTestId('account-menu')).toBeInTheDocument();
			expect(screen.getByTestId('menu-item-platforms')).toHaveAttribute(
				'aria-expanded',
				'true'
			);
		});

		it('focuses the first row on open and returns focus to the trigger on close', () => {
			renderPanel();
			openMenu();
			openPlatforms();
			expect(screen.getByTestId('platform-item-centra')).toHaveFocus();

			// No close button: Escape (or the row) closes the card.
			expect(screen.queryByTestId('platforms-panel-close')).toBeNull();
			expect(
				within(screen.getByTestId('platforms-panel')).queryByRole(
					'button'
				)
			).toBeNull();
			fireEvent.keyDown(screen.getByTestId('platform-item-centra'), {
				key: 'Escape'
			});
			expect(screen.queryByTestId('platforms-panel')).toBeNull();
			expect(screen.getByTestId('account-menu')).toBeInTheDocument();
			expect(screen.getByTestId('menu-item-platforms')).toHaveFocus();
		});

		it('clicking the Lumora Platforms row again closes its card', () => {
			renderPanel();
			openMenu();
			openPlatforms();
			const row = screen.getByTestId('menu-item-platforms');
			fireEvent.click(row);
			expect(screen.queryByTestId('platforms-panel')).toBeNull();
			expect(row).toHaveAttribute('data-active', 'false');
			expect(row).toHaveAttribute('aria-expanded', 'false');
			// The menu itself stays open.
			expect(screen.getByTestId('account-menu')).toBeInTheDocument();
			// And a third click reopens it.
			fireEvent.click(row);
			expect(screen.getByTestId('platforms-panel')).toBeInTheDocument();
			expect(row).toHaveAttribute('data-active', 'true');
		});

		it('Escape closes the panel first, then the menu', async () => {
			renderPanel();
			openMenu();
			openPlatforms();
			fireEvent.keyDown(screen.getByTestId('platform-item-centra'), {
				key: 'Escape'
			});
			expect(screen.queryByTestId('platforms-panel')).toBeNull();
			expect(screen.getByTestId('account-menu')).toBeInTheDocument();

			fireEvent.keyDown(screen.getByTestId('menu-item-platforms'), {
				key: 'Escape'
			});
			await expectMenuClosed();
		});

		it('does nothing when the current platform is chosen', () => {
			const navigate = jest
				.spyOn(sidebarUtils, 'openInNewTab')
				.mockImplementation(() => {});
			const onPlatformSelect = jest.fn();
			renderPanel({ onPlatformSelect });
			openMenu();
			openPlatforms();
			fireEvent.click(screen.getByTestId('platform-item-centra'));
			expect(onPlatformSelect).not.toHaveBeenCalled();
			expect(navigate).not.toHaveBeenCalled();
			expect(screen.getByTestId('platforms-panel')).toBeInTheDocument();
			navigate.mockRestore();
		});

		it('hands another platform to onPlatformSelect instead of navigating', async () => {
			const navigate = jest
				.spyOn(sidebarUtils, 'openInNewTab')
				.mockImplementation(() => {});
			const onPlatformSelect = jest.fn();
			renderPanel({ onPlatformSelect });
			openMenu();
			openPlatforms();
			fireEvent.click(screen.getByTestId('platform-item-polymer'));
			expect(onPlatformSelect).toHaveBeenCalledWith(platforms[1]);
			expect(navigate).not.toHaveBeenCalled();
			await expectMenuClosed();
			navigate.mockRestore();
		});

		it('opens the platform URL in a new tab by default', () => {
			const navigate = jest
				.spyOn(sidebarUtils, 'openInNewTab')
				.mockImplementation(() => {});
			renderPanel();
			openMenu();
			openPlatforms();
			fireEvent.click(screen.getByTestId('platform-item-core'));
			expect(navigate).toHaveBeenCalledWith('https://core.test');
			navigate.mockRestore();
		});

		it('openInNewTab opens a noopener tab rather than replacing the page', () => {
			const open = jest
				.spyOn(window, 'open')
				.mockImplementation(() => null);
			sidebarUtils.openInNewTab('https://core.test');
			expect(open).toHaveBeenCalledWith(
				'https://core.test',
				'_blank',
				'noopener,noreferrer'
			);
			open.mockRestore();
		});
	});

	describe('dark theme', () => {
		it('renders the menu and platforms panel', () => {
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
			openPlatforms();
			expect(screen.getByTestId('platform-item-centra')).toHaveAttribute(
				'aria-current',
				'true'
			);
		});
	});
	describe('second card', () => {
		it('lets clicks on the empty paper area around the card fall through to the backdrop', async () => {
			renderPanel();
			const menu = openMenu();
			openPlatforms();
			// The transparent paper spans both cards, and the shorter card is
			// bottom-aligned, so the paper area above it can be empty. jsdom
			// does no hit-testing, so assert the pointer-events contract that
			// makes those clicks reach the backdrop: paper none, cards auto.
			const paper = menu.parentElement as HTMLElement;
			expect(paper).toHaveClass('MuiPopover-paper');
			expect(paper).toHaveStyle({ pointerEvents: 'none' });
			expect(menu).toHaveStyle({ pointerEvents: 'auto' });
			expect(screen.getByTestId('platforms-panel')).toHaveStyle({
				pointerEvents: 'auto'
			});
			// A backdrop click closes the card and the menu together.
			fireEvent.click(
				document.querySelector('.MuiBackdrop-root') as HTMLElement
			);
			await expectMenuClosed();
			expect(screen.queryByTestId('platforms-panel')).toBeNull();
		});

		describe('alignment with the trigger row', () => {
			// jsdom has no layout, so hand the component the geometry it would
			// measure. The wrapper around the card gets lifted by a bottom
			// margin so the card's top meets the row that opened it.
			type Rect = Partial<Pick<DOMRect, 'top' | 'bottom' | 'height'>>;
			const mockRects = (rects: Record<string, Rect>) =>
				jest
					.spyOn(Element.prototype, 'getBoundingClientRect')
					.mockImplementation(function (this: Element) {
						const own =
							rects[this.getAttribute('data-testid') ?? ''];
						return {
							x: 0,
							y: 0,
							width: 0,
							height: 0,
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							toJSON: () => ({}),
							...own
						} as DOMRect;
					});

			afterEach(() => jest.restoreAllMocks());

			it('lifts the card so its top edge meets the Lumora Platforms row', () => {
				mockRects({
					'account-menu': { top: 100, bottom: 700, height: 600 },
					'menu-item-platforms': { top: 400 },
					'account-menu-subcard': { height: 200 }
				});
				renderPanel();
				openMenu();
				openPlatforms();
				// 700 - (400 + 200): card spans 400–600, level with the row.
				expect(screen.getByTestId('account-menu-subcard')).toHaveStyle(
					'margin-bottom: 100px'
				);
			});

			it('clamps a card that would hang below the menu to its bottom edge', () => {
				mockRects({
					'account-menu': { top: 100, bottom: 700, height: 600 },
					'menu-item-platforms': { top: 620 },
					'account-menu-subcard': { height: 350 }
				});
				renderPanel();
				openMenu();
				openPlatforms();
				expect(screen.getByTestId('account-menu-subcard')).toHaveStyle(
					'margin-bottom: 0px'
				);
			});

			it('never lifts a card above the menu top', () => {
				mockRects({
					'account-menu': { top: 100, bottom: 700, height: 600 },
					'menu-item-platforms': { top: 110 },
					'account-menu-subcard': { height: 200 }
				});
				renderPanel();
				openMenu();
				openPlatforms();
				// Wanted 390, but 600 - 200 = 400 is the ceiling; 390 fits.
				expect(screen.getByTestId('account-menu-subcard')).toHaveStyle(
					'margin-bottom: 390px'
				);
			});
		});
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

	it('collapsed, keeps the bell on the rail, stacked above the avatar', () => {
		renderPanel({
			collapsed: true,
			notificationCount: 0,
			whatsNewCount: 3
		});
		const bell = screen.getByTestId('panel-notifications');
		expect(bell).toHaveAttribute('aria-label', 'Notifications, 3 unread');
		expect(
			bell.compareDocumentPosition(
				screen.getByTestId('panel-user-button')
			) & Node.DOCUMENT_POSITION_PRECEDING
		).toBeTruthy();
	});
});
