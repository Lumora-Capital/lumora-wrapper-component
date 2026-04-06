import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Home, Settings, Person } from '@mui/icons-material';
import LumoraWrapper, {
	type LumoraWrapperProps,
	type SidebarLink
} from '../LumoraWrapper';
import { lumoraTestRequiredProps } from './testUtils';
import '@testing-library/jest-dom';

// Mock fetch
(globalThis as any).fetch = jest.fn();

// window.location is mocked in setupTests.ts

// Test theme
const theme = createTheme();

// Test data
const mockSidebarLinks: SidebarLink[] = [
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

const mockAppLogo = <div data-testid='app-logo'>Test Logo</div>;

// Helper function to render component with theme
const renderWithTheme = (props: Partial<LumoraWrapperProps> = {}) => {
	const defaultProps: LumoraWrapperProps = {
		...lumoraTestRequiredProps,
		children: <div data-testid='test-content'>Test Content</div>,
		...props
	};

	return render(
		<ThemeProvider theme={theme}>
			<LumoraWrapper {...defaultProps} />
		</ThemeProvider>
	);
};

describe('LumoraWrapper - Basic Functionality', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('Basic Rendering', () => {
		it('renders children correctly', () => {
			renderWithTheme();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('renders with default props', () => {
			renderWithTheme();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});
	});

	describe('Header Functionality', () => {
		it('renders header when showHeader is true', () => {
			renderWithTheme({ showHeader: true, appName: 'Test App' });
			expect(screen.getByRole('banner')).toBeInTheDocument();
			expect(screen.getByText('Test App')).toBeInTheDocument();
		});

		it('does not render header when showHeader is false', () => {
			renderWithTheme({ showHeader: false });
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
		});

		it('renders app name when provided', () => {
			renderWithTheme({
				showHeader: true,
				appName: 'My App'
			});
			expect(screen.getByText('My App')).toBeInTheDocument();
		});

		it('accepts pageName prop (navbar shows app name only)', () => {
			renderWithTheme({
				showHeader: true,
				appName: 'Nav App',
				pageName: 'My Application'
			});
			expect(screen.getByText('Nav App')).toBeInTheDocument();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});
	});

	describe('Sidebar Functionality', () => {
		it('renders sidebar when showSidebar is true', () => {
			renderWithTheme({
				showSidebar: true,
				sidebarLinks: mockSidebarLinks
			});

			expect(
				screen.getByRole('link', { name: /home/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('link', { name: /settings/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('link', { name: /profile/i })
			).toBeInTheDocument();
		});

		it('does not render sidebar when showSidebar is false', () => {
			renderWithTheme({ showSidebar: false });

			expect(
				screen.queryByRole('link', { name: /home/i })
			).not.toBeInTheDocument();
			expect(
				screen.queryByRole('link', { name: /settings/i })
			).not.toBeInTheDocument();
		});

		it('renders sidebar links with correct paths and icons', () => {
			renderWithTheme({
				showSidebar: true,
				sidebarLinks: mockSidebarLinks
			});

			const homeLink = screen.getByRole('link', { name: /home/i });
			const settingsLink = screen.getByRole('link', {
				name: /settings/i
			});
			const profileLink = screen.getByRole('link', { name: /profile/i });

			expect(homeLink).toHaveAttribute('href', '/home');
			expect(settingsLink).toHaveAttribute('href', '/settings');
			expect(profileLink).toHaveAttribute('href', '/profile');

			expect(screen.getByTestId('home-icon')).toBeInTheDocument();
			expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
			expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
		});

		it('handles empty sidebar links array', () => {
			renderWithTheme({
				showSidebar: true,
				sidebarLinks: []
			});

			expect(document.querySelector('.MuiDrawer-root')).toBeInTheDocument();
			expect(screen.queryByRole('link')).not.toBeInTheDocument();
		});
	});

	describe('Content Area', () => {
		it('applies correct margin when header is shown', () => {
			renderWithTheme({ showHeader: true });

			const contentArea = screen.getByRole('main');
			expect(contentArea).toHaveStyle({ marginTop: '60px' });
		});

		it('applies no margin when header is not shown', () => {
			renderWithTheme({ showHeader: false });

			const contentArea = screen.getByRole('main');
			expect(contentArea).toHaveStyle({ marginTop: '0px' });
		});
	});

	describe('Integration Tests', () => {
		it('renders complete layout with all features enabled', () => {
			renderWithTheme({
				showHeader: true,
				showSidebar: true,
				appName: 'My App',
				pageName: 'Dashboard',
				sidebarLinks: mockSidebarLinks
			});

			// Check all components are rendered
			expect(screen.getByRole('banner')).toBeInTheDocument();
			expect(screen.getByText('My App')).toBeInTheDocument();
			expect(document.querySelector('.MuiDrawer-root')).toBeInTheDocument();
			expect(
				screen.getByRole('link', { name: /home/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('link', { name: /settings/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('link', { name: /profile/i })
			).toBeInTheDocument();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('renders minimal layout with all features disabled', () => {
			renderWithTheme({
				showHeader: false,
				showSidebar: false
			});

			// Check only content is rendered
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
			expect(screen.queryByRole('list')).not.toBeInTheDocument();
		});
	});
});
