import { fireEvent, screen, within } from '@testing-library/react';
import { useMediaQuery } from '@mui/material';
import LumoraWrapper from '../LumoraWrapper';
import { render, lumoraTestRequiredProps, mockSidebarLinks } from './testUtils';

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
		beforeEach(() => {
			window.localStorage.clear();
		});

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

		it('renders a full-height 288px panel with its own header', () => {
			renderCollapsible();

			const sidebar = screen.getByTestId('collapsible-sidebar');
			expect(sidebar).toHaveAttribute('data-collapsed', 'false');
			expect(sidebar).toHaveStyle({ width: '288px', minWidth: '288px' });
			// The panel spans the full viewport height from the top — its own
			// 60px header block holds the toggle and brand.
			const aside = sidebar.closest('aside');
			expect(aside).toHaveStyle({ height: '100vh', top: '0px' });
			expect(screen.getByTestId('sidebar-header')).toBeInTheDocument();
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
			const contentArea = screen
				.getByTestId('test-content')
				.closest('[class*="MuiBox-root"]');
			expect(contentArea).toHaveStyle('width: calc(100% - 288px)');
		});

		it('stacks brand, search, links and footer top to bottom', () => {
			renderCollapsible({
				searchComponent: <input placeholder='Global search' />,
				userName: 'Riley Carter'
			});

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

		it('collapsed: the search icon expands the sidebar and focuses the field', () => {
			window.localStorage.setItem('lumora:sidebar-collapsed', 'true');
			renderCollapsible({
				searchComponent: <input placeholder='Global search' />
			});

			expect(
				screen.queryByPlaceholderText('Global search')
			).not.toBeInTheDocument();
			fireEvent.click(screen.getByRole('button', { name: 'Search' }));

			expect(screen.getByTestId('collapsible-sidebar')).toHaveAttribute(
				'data-collapsed',
				'false'
			);
			expect(screen.getByPlaceholderText('Global search')).toHaveFocus();
		});

		it('tints the clickable sidebar-header brand with the accent, not auto-contrast', () => {
			const onBrandClick = jest.fn();
			renderCollapsible({ accentColor: '#09c1ae', onBrandClick });

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

		it('auto-contrasts the sidebar-header brand on a custom header background', () => {
			renderCollapsible({
				accentColor: '#09c1ae',
				sidebarHeaderBackgroundColor: '#01584f'
			});
			const brand = screen.getByTestId('sidebar-header-brand');
			expect(within(brand).getByText('Test App')).toHaveStyle({
				color: 'rgb(255, 255, 255)'
			});
		});

		it('toggles via the header hamburger: widths, brand and footer follow', () => {
			renderCollapsible();

			fireEvent.click(screen.getByTestId('sidebar-collapse-toggle'));

			const sidebar = screen.getByTestId('collapsible-sidebar');
			expect(sidebar).toHaveAttribute('data-collapsed', 'true');
			expect(sidebar).toHaveStyle({ width: '72px', minWidth: '72px' });
			expect(
				screen
					.getByTestId('test-content')
					.closest('[class*="MuiBox-root"]')
			).toHaveStyle('width: calc(100% - 72px)');
			// Collapsed: the wordmark and row labels give way to icons; the
			// logo stays as the expand button.
			expect(
				screen.queryByTestId('sidebar-header-brand')
			).not.toBeInTheDocument();
			expect(
				within(screen.getByTestId('sidebar-collapse-toggle')).getByRole(
					'img',
					{ name: 'Test App logo' }
				)
			).toBeInTheDocument();
			// Collapsed: the user row keeps only its avatar
			expect(
				within(screen.getByTestId('sidebar-user')).queryByText('User')
			).not.toBeInTheDocument();

			// Round-trip: expanding restores the original layout.
			fireEvent.click(screen.getByTestId('sidebar-collapse-toggle'));
			expect(sidebar).toHaveAttribute('data-collapsed', 'false');
			expect(sidebar).toHaveStyle({ width: '288px' });
			expect(
				screen.getByTestId('sidebar-header-brand')
			).toBeInTheDocument();
		});

		it('restores the persisted collapsed state on mount', () => {
			window.localStorage.setItem('lumora:sidebar-collapsed', 'true');
			renderCollapsible();

			expect(screen.getByTestId('collapsible-sidebar')).toHaveAttribute(
				'data-collapsed',
				'true'
			);
			expect(
				screen
					.getByTestId('test-content')
					.closest('[class*="MuiBox-root"]')
			).toHaveStyle('width: calc(100% - 72px)');
		});

		it('shows the alert card only while expanded', () => {
			renderCollapsible({
				alertProps: {
					show: true,
					title: 'Storage almost full',
					message: 'Upgrade now',
					buttonText: 'Upgrade'
				}
			});

			expect(screen.getByText('Storage almost full')).toBeInTheDocument();
			fireEvent.click(screen.getByTestId('sidebar-collapse-toggle'));
			expect(
				screen.queryByText('Storage almost full')
			).not.toBeInTheDocument();
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
