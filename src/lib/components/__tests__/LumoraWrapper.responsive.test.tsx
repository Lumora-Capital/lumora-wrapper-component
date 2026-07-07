import React from 'react';
import { screen, within } from '@testing-library/react';
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
