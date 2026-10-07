import { useMediaQuery } from '@mui/material';
import LumoraWrapper from '../LumoraWrapper';
import {
	act,
	fireEvent,
	hoverSidebarOpen,
	lumoraTestRequiredProps,
	mockSidebarLinks,
	render,
	screen,
	waitFor,
	within
} from './testUtils';

// Mock useMediaQuery hook
jest.mock('@mui/material', () => ({
	...jest.requireActual('@mui/material'),
	useMediaQuery: jest.fn()
}));

const mockUseMediaQuery = useMediaQuery as jest.MockedFunction<
	typeof useMediaQuery
>;

describe('LumoraWrapper - Responsive Behavior', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders permanent drawer on desktop', () => {
		mockUseMediaQuery.mockReturnValue(false); // Not mobile

		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				showSidebar={true}
				sidebarLinks={mockSidebarLinks}
			>
				<div data-testid='test-content'>Test Content</div>
			</LumoraWrapper>
		);

		const drawer = document.querySelector('.MuiDrawer-root');
		expect(drawer).toBeInTheDocument();
		expect(drawer).toHaveClass('MuiDrawer-root');
	});

	// it('renders temporary drawer on mobile', () => {
	// 	mockUseMediaQuery.mockReturnValue(true); // Mobile

	// 	render(
	// 		<LumoraWrapper
	// 			showSidebar={true}
	// 			sidebarLinks={mockSidebarLinks}
	// 		>
	// 			<div data-testid="test-content">Test Content</div>
	// 		</LumoraWrapper>
	// 	);

	// 	// For mobile, check that the sidebar is rendered
	// 	// The drawer should be present even if closed
	// 	expect(screen.getByTestId('test-content')).toBeInTheDocument();
	// 	// Check for any drawer-related element in the DOM
	// 	const drawerElements = document.querySelectorAll('[class*="MuiDrawer"], [role="presentation"]');
	// 	expect(drawerElements.length).toBeGreaterThan(0);
	// });

	it('adjusts content width for desktop with sidebar', () => {
		mockUseMediaQuery.mockReturnValue(false); // Not mobile

		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				showSidebar={true}
				sidebarLinks={mockSidebarLinks}
			>
				<div data-testid='test-content'>Test Content</div>
			</LumoraWrapper>
		);

		const contentArea = screen
			.getByTestId('test-content')
			.closest('[class*="MuiBox-root"]');
		expect(contentArea).toHaveStyle('width: calc(100% - 100px)');
	});

	it('uses same main width when showSidebarRailTitles is true as when false', () => {
		mockUseMediaQuery.mockReturnValue(false);

		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				showSidebar={true}
				showSidebarRailTitles={true}
				sidebarLinks={mockSidebarLinks}
			>
				<div data-testid='test-content'>Test Content</div>
			</LumoraWrapper>
		);

		const contentArea = screen
			.getByTestId('test-content')
			.closest('[class*="MuiBox-root"]');
		expect(contentArea).toHaveStyle('width: calc(100% - 100px)');
	});

	it('shows visible rail captions when showSidebarRailTitles is true', () => {
		mockUseMediaQuery.mockReturnValue(false);

		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				showSidebar={true}
				showSidebarRailTitles={true}
				sidebarLinks={mockSidebarLinks}
			>
				<div data-testid='test-content'>Test Content</div>
			</LumoraWrapper>
		);

		expect(
			screen.getByTestId('rail-item-caption-Home')
		).toBeInTheDocument();
		expect(
			screen.getByTestId('rail-item-caption-Settings')
		).toBeInTheDocument();
		expect(
			screen.getByTestId('rail-item-caption-Profile')
		).toBeInTheDocument();
	});

	it('does not render rail captions when showSidebarRailTitles is false', () => {
		mockUseMediaQuery.mockReturnValue(false);

		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				showSidebar={true}
				sidebarLinks={mockSidebarLinks}
			>
				<div data-testid='test-content'>Test Content</div>
			</LumoraWrapper>
		);

		expect(
			screen.queryByTestId('rail-item-caption-Home')
		).not.toBeInTheDocument();
	});

	describe("sidebarVariant='rail-labeled'", () => {
		it('renders a fixed 80px labeled rail (no collapse toggle) with visible labels', () => {
			mockUseMediaQuery.mockReturnValue(false); // Not mobile

			render(
				<LumoraWrapper
					{...lumoraTestRequiredProps}
					showSidebar={true}
					sidebarVariant='rail-labeled'
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Rendered by CollapsibleSidebar, pinned shrunk with labels on.
			const sidebar = screen.getByTestId('collapsible-sidebar');
			expect(sidebar).toHaveAttribute('data-collapsed', 'true');
			expect(sidebar).toHaveAttribute('data-labeled', 'true');
			// The sidebar surface itself is exactly 80px wide (not just the
			// content offset) — the whole rail is 80px.
			expect(sidebar).toHaveStyle({ width: '80px', minWidth: '80px' });
			// The outer <aside> container is 80px too, so nothing sits beside it.
			const aside = sidebar.closest('aside');
			expect(aside).toHaveStyle({ width: '80px', minWidth: '80px' });
			// The rail spans the full viewport height from the top, with the
			// logo on top and no header anywhere.
			expect(aside).toHaveStyle({ height: '100vh', top: '0px' });
			expect(
				within(sidebar).getByTestId('sidebar-header-brand')
			).toBeInTheDocument();
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
			// Labels are visible captions under the icons.
			expect(within(sidebar).getByText('Settings')).toBeInTheDocument();
			expect(within(sidebar).getByText('Profile')).toBeInTheDocument();

			// Fixed 80px width feeds the content offset.
			const contentArea = screen
				.getByTestId('test-content')
				.closest('[class*="MuiBox-root"]');
			expect(contentArea).toHaveStyle('width: calc(100% - 80px)');

			// Non-collapsible: no expand/collapse toggle.
			expect(
				screen.queryByRole('button', {
					name: /collapse sidebar|expand sidebar|open navigation menu/i
				})
			).not.toBeInTheDocument();
		});

		it('uses sidebarAccentColor for the sidebar, independent of accentColor', () => {
			mockUseMediaQuery.mockReturnValue(false); // Not mobile

			render(
				<LumoraWrapper
					{...lumoraTestRequiredProps}
					showSidebar={true}
					sidebarVariant='rail-labeled'
					sidebarLinks={mockSidebarLinks}
					activePath='/home'
					accentColor='#111111'
					sidebarAccentColor='#22cc44'
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// The active item's fill comes from sidebarAccentColor (#22cc44),
			// not the brand accentColor (#111111).
			expect(screen.getByTestId('sidebar-item-Home')).toHaveStyle({
				backgroundColor: 'rgb(34, 204, 68)'
			});
		});

		it('falls back to accentColor for the sidebar when sidebarAccentColor is omitted', () => {
			mockUseMediaQuery.mockReturnValue(false); // Not mobile

			render(
				<LumoraWrapper
					{...lumoraTestRequiredProps}
					showSidebar={true}
					sidebarVariant='rail-labeled'
					sidebarLinks={mockSidebarLinks}
					activePath='/home'
					accentColor='#22cc44'
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			expect(screen.getByTestId('sidebar-item-Home')).toHaveStyle({
				backgroundColor: 'rgb(34, 204, 68)'
			});
		});
	});

	describe("sidebarVariant='collapsible'", () => {
		const renderCollapsible = (
			extraProps: Record<string, unknown> = {},
			mobile = false
		) => {
			mockUseMediaQuery.mockReturnValue(mobile);
			return render(
				<LumoraWrapper
					{...lumoraTestRequiredProps}
					showSidebar={true}
					sidebarVariant='collapsible'
					sidebarLinks={mockSidebarLinks}
					appName='Test App'
					{...extraProps}
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);
		};

		it('stays a 72px rail and opens over the page on hover', async () => {
			renderCollapsible();

			const sidebar = screen.getByTestId('collapsible-sidebar');
			const contentArea = screen
				.getByTestId('test-content')
				.closest('[class*="MuiBox-root"]');
			expect(sidebar).toHaveAttribute('data-collapsed', 'true');
			expect(sidebar).toHaveStyle({ width: '72px', minWidth: '72px' });
			// The rail spans the full viewport height from the top, with its
			// own header block for the brand.
			const aside = sidebar.closest('aside');
			expect(aside).toHaveStyle({
				width: '72px',
				height: '100vh',
				top: '0px'
			});
			expect(screen.getByTestId('sidebar-header')).toBeInTheDocument();
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
			expect(contentArea).toHaveStyle('width: calc(100% - 72px)');

			// Hover: the full panel lays over the page; the page stays put
			const panel = await hoverSidebarOpen();
			expect(sidebar).toHaveAttribute('data-collapsed', 'false');
			expect(sidebar).toHaveStyle({ width: '288px' });
			expect(panel).toHaveStyle({ position: 'absolute', width: '288px' });
			expect(aside).toHaveStyle({ width: '72px' });
			expect(contentArea).toHaveStyle('width: calc(100% - 72px)');

			fireEvent.mouseOver(screen.getByTestId('test-content'));
			expect(sidebar).toHaveAttribute('data-collapsed', 'true');
		});

		it('has no collapse toggle and keeps no saved state', async () => {
			window.localStorage.setItem('lumora:sidebar-collapsed', 'false');
			renderCollapsible();

			// A previously saved expanded state no longer pins it open
			expect(screen.getByTestId('collapsible-sidebar')).toHaveAttribute(
				'data-collapsed',
				'true'
			);
			expect(
				screen.queryByRole('button', {
					name: /collapse sidebar|expand sidebar/i
				})
			).not.toBeInTheDocument();
			window.localStorage.clear();
		});

		it('ignores a pointer that only passes over the rail', () => {
			jest.useFakeTimers();
			try {
				renderCollapsible();
				const panel = screen.getByTestId('sidebar-hover-panel');
				fireEvent.mouseOver(panel);
				fireEvent.mouseOver(screen.getByTestId('test-content'));
				act(() => {
					jest.runOnlyPendingTimers();
				});
				expect(panel).toHaveAttribute('data-expanded', 'false');
			} finally {
				jest.useRealTimers();
			}
		});

		it("badges the sidebar bell with notifications and What's New together", async () => {
			const Panel = () => <div>notification list</div>;
			renderCollapsible({
				notificationCount: 2,
				whatsNewCount: 1,
				NotificationSidebarContent: Panel
			});
			await hoverSidebarOpen();
			// The bell opens the drawer that holds both tabs
			expect(screen.getByTestId('sidebar-notifications')).toHaveAttribute(
				'aria-label',
				'Notifications, 3 unread'
			);
		});

		it('stacks brand, search, links and footer top to bottom', async () => {
			renderCollapsible({
				searchComponent: <input placeholder='Global search' />,
				userName: 'Riley Carter'
			});
			await hoverSidebarOpen();

			const sidebar = screen.getByTestId('collapsible-sidebar');
			const order = [
				screen.getByTestId('sidebar-header-brand'),
				screen.getByPlaceholderText('Global search'),
				screen.getByTestId('sidebar-item-Home'),
				screen.getByTestId('sidebar-user'),
				screen.getByTestId('sidebar-notifications')
			];
			order.forEach(el => expect(sidebar).toContainElement(el));
			order
				.slice(1)
				.forEach((el, i) =>
					expect(
						order[i].compareDocumentPosition(el) &
							Node.DOCUMENT_POSITION_FOLLOWING
					).toBeTruthy()
				);
			expect(
				within(sidebar).getByText('Riley Carter')
			).toBeInTheDocument();
		});

		it('stays open while the user menu is open, even with the pointer on the page', async () => {
			renderCollapsible({ userName: 'Riley Carter' });
			const panel = await hoverSidebarOpen();
			fireEvent.click(screen.getByTestId('sidebar-user'));
			expect(screen.getByText('Log out')).toBeInTheDocument();

			// The menu's backdrop covers the page; over it the panel stays open
			const backdrop = document.querySelector('.MuiBackdrop-root')!;
			fireEvent.mouseOver(backdrop);
			fireEvent.mouseMove(backdrop, { clientX: 600, clientY: 400 });
			expect(panel).toHaveAttribute('data-expanded', 'true');
			expect(screen.getByText('Log out')).toBeInTheDocument();

			// Once the menu is closed, leaving the panel collapses it
			fireEvent.keyDown(screen.getByRole('menu'), { key: 'Escape' });
			await waitFor(() =>
				expect(screen.queryByText('Log out')).not.toBeInTheDocument()
			);
			fireEvent.mouseOver(screen.getByTestId('test-content'));
			expect(panel).toHaveAttribute('data-expanded', 'false');
		});

		it('collapsed: the search icon opens the sidebar and focuses the field', () => {
			renderCollapsible({
				searchComponent: <input placeholder='Global search' />
			});

			expect(
				screen.queryByPlaceholderText('Global search')
			).not.toBeInTheDocument();
			fireEvent.click(screen.getByRole('button', { name: 'Search' }));

			const sidebar = screen.getByTestId('collapsible-sidebar');
			expect(sidebar).toHaveAttribute('data-collapsed', 'false');
			expect(screen.getByPlaceholderText('Global search')).toHaveFocus();

			// Pinned while searching: the pointer leaving doesn't close it,
			// a click on the page does
			fireEvent.mouseOver(screen.getByTestId('test-content'));
			expect(sidebar).toHaveAttribute('data-collapsed', 'false');
			fireEvent.pointerDown(screen.getByTestId('test-content'));
			expect(sidebar).toHaveAttribute('data-collapsed', 'true');
		});

		it('tints the clickable sidebar-header brand with the accent, not auto-contrast', async () => {
			const onBrandClick = jest.fn();
			renderCollapsible({ accentColor: '#09c1ae', onBrandClick });
			await hoverSidebarOpen();

			// Regression: on the default white surface the brand went black.
			const brand = screen.getByTestId('sidebar-header-brand');
			expect(brand.tagName).toBe('BUTTON');
			expect(within(brand).getByText('Test App')).toHaveStyle({
				color: 'rgb(9, 193, 174)'
			});
			expect(
				within(brand).getByRole('img', { name: 'Test App logo' })
			).toHaveStyle({ backgroundColor: 'rgb(9, 193, 174)' });
			fireEvent.click(brand);
			expect(onBrandClick).toHaveBeenCalledTimes(1);
		});

		it('auto-contrasts the sidebar-header brand on a custom header background', async () => {
			renderCollapsible({
				accentColor: '#09c1ae',
				sidebarHeaderBackgroundColor: '#01584f'
			});
			await hoverSidebarOpen();
			const brand = screen.getByTestId('sidebar-header-brand');
			expect(within(brand).getByText('Test App')).toHaveStyle({
				color: 'rgb(255, 255, 255)'
			});
		});

		it('rail: logo only and a compact footer; hover brings back the rest', async () => {
			renderCollapsible();

			const brand = screen.getByTestId('sidebar-header-brand');
			expect(
				within(brand).getByRole('img', { name: 'Test App logo' })
			).toBeInTheDocument();
			expect(
				within(brand).queryByText('Test App')
			).not.toBeInTheDocument();
			// The user row keeps only its avatar
			expect(
				within(screen.getByTestId('sidebar-user')).queryByText('User')
			).not.toBeInTheDocument();

			await hoverSidebarOpen();
			expect(
				within(screen.getByTestId('sidebar-header-brand')).getByText(
					'Test App'
				)
			).toBeInTheDocument();
			expect(
				within(screen.getByTestId('sidebar-user')).getByText('User')
			).toBeInTheDocument();
		});

		it('shows the alert card only while open', async () => {
			renderCollapsible({
				alertProps: {
					show: true,
					title: 'Storage almost full',
					message: 'Upgrade now',
					buttonText: 'Upgrade'
				}
			});

			expect(
				screen.queryByText('Storage almost full')
			).not.toBeInTheDocument();
			await hoverSidebarOpen();
			expect(screen.getByText('Storage almost full')).toBeInTheDocument();
		});

		it('uses the top bar for the brand and a bottom bar for navigation on mobile', () => {
			renderCollapsible(
				{
					userName: 'Riley Carter',
					showAssistant: true,
					onAssistantClick: jest.fn(),
					notificationCount: 3,
					searchComponent: <input placeholder='Global search' />
				},
				true
			);

			// No desktop panel on mobile; the top bar only carries the brand
			const topBar = screen.getByRole('banner');
			expect(within(topBar).getByText('Test App')).toBeInTheDocument();
			expect(
				within(topBar).queryByRole('button', {
					name: /navigation menu/i
				})
			).not.toBeInTheDocument();

			const bar = screen.getByRole('navigation', {
				name: 'Mobile navigation'
			});
			expect(
				within(bar)
					.getAllByRole('button')
					.map(b => b.getAttribute('aria-label'))
			).toEqual([
				'Menu',
				'Ask Nexa',
				'Search',
				'Account menu for Riley Carter'
			]);
			// Notifications sit at the top right instead
			expect(
				within(topBar).getByRole('button', {
					name: 'Notifications, 3 unread'
				})
			).toBeInTheDocument();
		});

		it('pins mobileBottomBarLinks between Menu and Nexa, highlighting the current page', () => {
			const onLinkClick = jest.fn();
			renderCollapsible(
				{
					showAssistant: true,
					onAssistantClick: jest.fn(),
					activePath: '/home',
					onLinkClick,
					mobileBottomBarLinks: [
						mockSidebarLinks[0], // Home, the current page
						mockSidebarLinks[1], // Settings
						mockSidebarLinks[2], // Profile: over the limit of two
						{ text: 'Group only', icon: null } // no path: skipped
					]
				},
				true
			);
			const bar = screen.getByRole('navigation', {
				name: 'Mobile navigation'
			});
			expect(
				within(bar)
					.getAllByRole('button')
					.map(b => b.getAttribute('aria-label'))
			).toEqual([
				'Menu',
				'Home',
				'Settings',
				'Ask Nexa',
				'Account menu for User'
			]);

			const home = within(bar).getByRole('button', { name: 'Home' });
			const settings = within(bar).getByRole('button', {
				name: 'Settings'
			});
			expect(home).toHaveAttribute('aria-current', 'page');
			expect(settings).not.toHaveAttribute('aria-current');
			fireEvent.click(settings);
			expect(onLinkClick).toHaveBeenCalledWith('/settings');
		});

		it('opens the notifications drawer from the top-bar bell', async () => {
			const Panel = () => <div>notification list</div>;
			renderCollapsible(
				{ notificationCount: 2, NotificationSidebarContent: Panel },
				true
			);
			fireEvent.click(
				within(screen.getByRole('banner')).getByRole('button', {
					name: 'Notifications, 2 unread'
				})
			);
			expect(
				await screen.findByText('notification list')
			).toBeInTheDocument();
		});

		it("adds the What's New count to the top-bar bell, since the bell opens both tabs", () => {
			const Panel = () => <div>notification list</div>;
			renderCollapsible(
				{
					notificationCount: 2,
					whatsNewCount: 1,
					NotificationSidebarContent: Panel
				},
				true
			);
			expect(
				within(screen.getByRole('banner')).getByRole('button', {
					name: 'Notifications, 3 unread'
				})
			).toBeInTheDocument();
		});

		it('opens the links drawer, the search sheet and the user menu from the bottom bar', async () => {
			const onLinkClick = jest.fn();
			renderCollapsible(
				{
					userName: 'Riley Carter',
					onLinkClick,
					searchComponent: <input placeholder='Global search' />
				},
				true
			);
			const bar = screen.getByRole('navigation', {
				name: 'Mobile navigation'
			});

			// Menu: a bottom sheet (one-handed reach) holding the same sidebar
			// as desktop, expanded and full width; a link closes it
			fireEvent.click(within(bar).getByRole('button', { name: 'Menu' }));
			const drawerSidebar = await screen.findByTestId(
				'collapsible-sidebar'
			);
			expect(drawerSidebar).toHaveAttribute('data-collapsed', 'false');
			expect(drawerSidebar).toHaveStyle({ width: '100%' });
			expect(screen.getByLabelText('Navigation')).toHaveClass(
				'MuiDrawer-paperAnchorBottom'
			);
			fireEvent.click(within(drawerSidebar).getByText('Settings'));
			expect(onLinkClick).toHaveBeenCalledWith('/settings');

			fireEvent.click(
				within(bar).getByRole('button', { name: 'Search' })
			);
			expect(
				await screen.findByPlaceholderText('Global search')
			).toBeInTheDocument();
			fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

			fireEvent.click(
				within(bar).getByRole('button', {
					name: 'Account menu for Riley Carter'
				})
			);
			expect(
				await screen.findByRole('menuitem', { name: /log out/i })
			).toBeInTheDocument();
		});

		it("keeps the hamburger drawer with mobileNavigation='drawer'", async () => {
			renderCollapsible(
				{
					mobileNavigation: 'drawer',
					userName: 'Riley Carter',
					searchComponent: <input placeholder='Global search' />
				},
				true
			);
			expect(
				screen.queryByRole('navigation', { name: 'Mobile navigation' })
			).not.toBeInTheDocument();
			fireEvent.click(
				within(screen.getByRole('banner')).getByRole('button', {
					name: /open navigation menu/i
				})
			);
			// A left drawer that holds search and the user row too
			expect(screen.getByLabelText('Navigation')).toHaveClass(
				'MuiDrawer-paperAnchorLeft'
			);
			expect(
				await screen.findByPlaceholderText('Global search')
			).toBeInTheDocument();
			expect(screen.getByTestId('sidebar-user')).toBeInTheDocument();
		});
	});

	it('uses full width on mobile', () => {
		mockUseMediaQuery.mockReturnValue(true); // Mobile

		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				showSidebar={true}
				sidebarLinks={mockSidebarLinks}
			>
				<div data-testid='test-content'>Test Content</div>
			</LumoraWrapper>
		);

		const contentArea = screen
			.getByTestId('test-content')
			.closest('[class*="MuiBox-root"]');
		expect(contentArea).toHaveStyle('width: 100%');
	});

	it('uses full width when sidebar is hidden', () => {
		mockUseMediaQuery.mockReturnValue(false); // Not mobile

		render(
			<LumoraWrapper {...lumoraTestRequiredProps} showSidebar={false}>
				<div data-testid='test-content'>Test Content</div>
			</LumoraWrapper>
		);

		const contentArea = screen
			.getByTestId('test-content')
			.closest('[class*="MuiBox-root"]');
		expect(contentArea).toHaveStyle('width: 100%');
	});

	it('renders the docked rail with brand and footer on desktop', () => {
		mockUseMediaQuery.mockReturnValue(false); // Not mobile

		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				showSidebar={true}
				sidebarLinks={mockSidebarLinks}
			>
				<div data-testid='test-content'>Test Content</div>
			</LumoraWrapper>
		);

		const drawer = document.querySelector(
			'.MuiDrawer-paper'
		) as HTMLElement;
		expect(drawer).toBeInTheDocument();
		expect(drawer).toHaveStyle({ top: '0px' });
		expect(
			within(drawer).getByTestId('sidebar-header-brand')
		).toBeInTheDocument();
		expect(
			within(drawer).getByTestId('sidebar-footer')
		).toBeInTheDocument();
		expect(screen.queryByRole('banner')).not.toBeInTheDocument();
	});
});
