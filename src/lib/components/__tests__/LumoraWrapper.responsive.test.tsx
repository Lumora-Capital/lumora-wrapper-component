import React from 'react';
import { screen } from '@testing-library/react';
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
		expect(contentArea).toHaveStyle('width: calc(100% - 80px)');
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
