import React from 'react';
import { fireEvent, screen, within } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import LumoraWrapper from '../LumoraWrapper';
import { render, lumoraTestRequiredProps, mockSidebarLinks } from './testUtils';
import '@testing-library/jest-dom';

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
			// The rail spans the full viewport height from the top.
			expect(aside).toHaveStyle({ height: '100vh', top: '0px' });
			// ...but its content is inset 60px from the top so the first item
			// clears the navbar (mimicking the reference layout).
			expect(sidebar).toHaveStyle({ paddingTop: '60px' });

			// The navbar is inset to start at the sidebar's right edge, so its
			// width adjusts to the remaining space.
			const navbar = screen.getByRole('banner');
			expect(navbar).toHaveStyle({
				left: '80px',
				width: 'calc(100% - 80px)'
			});
			// Labels are visible captions (scoped to the sidebar to avoid the
			// navbar's default 'Home' page name).
			expect(within(sidebar).getByText('Settings')).toBeInTheDocument();
			expect(within(sidebar).getByText('Profile')).toBeInTheDocument();

			// Fixed 80px width feeds the content offset.
			const contentArea = screen
				.getByTestId('test-content')
				.closest('[class*="MuiBox-root"]');
			expect(contentArea).toHaveStyle('width: calc(100% - 80px)');

			// Non-collapsible: no expand/collapse toggle in the navbar.
			expect(
				screen.queryByRole('button', {
					name: /collapse sidebar|expand sidebar|open navigation menu/i
				})
			).not.toBeInTheDocument();
		});

		it('uses sidebarAccentColor for the sidebar, independent of the navbar accentColor', () => {
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
			// not the navbar accentColor (#111111).
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

		it('renders a full-height 264px panel with its own header; navbar starts at its edge', () => {
			renderCollapsible();

			const sidebar = screen.getByTestId('collapsible-sidebar');
			expect(sidebar).toHaveAttribute('data-collapsed', 'false');
			expect(sidebar).toHaveStyle({ width: '264px', minWidth: '264px' });
			// The panel spans the full viewport height from the top — its own
			// 60px header block replaces the old below-the-navbar inset.
			const aside = sidebar.closest('aside');
			expect(aside).toHaveStyle({ height: '100vh', top: '0px' });
			expect(screen.getByTestId('sidebar-header')).toBeInTheDocument();

			// The navbar is inset to the sidebar's right edge.
			const navbar = screen.getByRole('banner');
			expect(navbar).toHaveStyle({
				left: '264px',
				width: 'calc(100% - 264px)'
			});
			const contentArea = screen
				.getByTestId('test-content')
				.closest('[class*="MuiBox-root"]');
			expect(contentArea).toHaveStyle('width: calc(100% - 264px)');
		});

		it('shows the brand in the sidebar header while expanded, not in the navbar', () => {
			renderCollapsible();

			const brand = screen.getByTestId('sidebar-header-brand');
			expect(within(brand).getByText('Test App')).toBeInTheDocument();
			// The navbar hides the brand and hosts no hamburger on desktop —
			// the toggle lives in the sidebar header now.
			const navbar = screen.getByRole('banner');
			expect(
				within(navbar).queryByText('Test App')
			).not.toBeInTheDocument();
			expect(
				within(navbar).queryByRole('button', {
					name: /collapse sidebar|expand sidebar|open navigation menu/i
				})
			).not.toBeInTheDocument();
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

		it('toggles via the header hamburger: widths, navbar offset and brand all follow', () => {
			renderCollapsible();

			fireEvent.click(screen.getByTestId('sidebar-collapse-toggle'));

			const sidebar = screen.getByTestId('collapsible-sidebar');
			expect(sidebar).toHaveAttribute('data-collapsed', 'true');
			expect(sidebar).toHaveStyle({ width: '72px', minWidth: '72px' });
			const navbar = screen.getByRole('banner');
			expect(navbar).toHaveStyle({
				left: '72px',
				width: 'calc(100% - 72px)'
			});
			expect(
				screen
					.getByTestId('test-content')
					.closest('[class*="MuiBox-root"]')
			).toHaveStyle('width: calc(100% - 72px)');
			// Collapsed: the brand returns to the navbar.
			expect(within(navbar).getByText('Test App')).toBeInTheDocument();
			expect(
				screen.queryByTestId('sidebar-header-brand')
			).not.toBeInTheDocument();

			// Round-trip: expanding restores the original layout.
			fireEvent.click(screen.getByTestId('sidebar-collapse-toggle'));
			expect(sidebar).toHaveAttribute('data-collapsed', 'false');
			expect(sidebar).toHaveStyle({ width: '264px' });
			expect(navbar).toHaveStyle({ left: '264px' });
			expect(
				within(navbar).queryByText('Test App')
			).not.toBeInTheDocument();
		});

		it('restores the persisted collapsed state on mount', () => {
			window.localStorage.setItem('lumora:sidebar-collapsed', 'true');
			renderCollapsible();

			expect(screen.getByTestId('collapsible-sidebar')).toHaveAttribute(
				'data-collapsed',
				'true'
			);
			expect(screen.getByRole('banner')).toHaveStyle({ left: '72px' });
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

		it('falls back to the navbar hamburger + drawer on mobile', () => {
			renderCollapsible({}, true);

			// No desktop panel at all on mobile.
			expect(
				screen.queryByTestId('collapsible-sidebar')
			).not.toBeInTheDocument();
			// The navbar hamburger returns and opens the mobile drawer.
			const navbar = screen.getByRole('banner');
			expect(within(navbar).getByText('Test App')).toBeInTheDocument();
			const menuButton = within(navbar).getByRole('button', {
				name: /open navigation menu/i
			});
			fireEvent.click(menuButton);
			expect(
				document.querySelectorAll('[class*="MuiDrawer"]').length
			).toBeGreaterThan(0);
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

	// it('adjusts drawer margin for mobile without header', () => {
	// 	mockUseMediaQuery.mockReturnValue(true); // Mobile

	// 	render(
	// 		<LumoraWrapper
	// 			showSidebar={true}
	// 			showHeader={false}
	// 			sidebarLinks={mockSidebarLinks}
	// 		>
	// 			<div data-testid="test-content">Test Content</div>
	// 		</LumoraWrapper>
	// 	);

	// 	// Check that the drawer elements exist
	// 	const drawerElements = document.querySelectorAll('[class*="MuiDrawer"], [role="presentation"]');
	// 	expect(drawerElements.length).toBeGreaterThan(0);
	// });

	it('renders docked drawer with header on desktop', () => {
		mockUseMediaQuery.mockReturnValue(false); // Not mobile

		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				showSidebar={true}
				showHeader={true}
				sidebarLinks={mockSidebarLinks}
			>
				<div data-testid='test-content'>Test Content</div>
			</LumoraWrapper>
		);

		const drawer = document.querySelector('.MuiDrawer-paper');
		expect(drawer).toBeInTheDocument();
		expect(screen.getByRole('banner')).toBeInTheDocument();
	});
});
