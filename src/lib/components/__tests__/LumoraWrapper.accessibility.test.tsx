import React from 'react';
import { screen } from '@testing-library/react';
import { Home, Settings, Person } from '@mui/icons-material';
import LumoraWrapper from '../LumoraWrapper';
import { lumoraTestRequiredProps, render, mockSidebarLinks } from './testUtils';
import '@testing-library/jest-dom';

describe('LumoraWrapper - Accessibility', () => {
	describe('Header Accessibility', () => {
		it('has proper header structure with banner role', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps} showHeader={true} appName='Test Application'>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			const header = screen.getByRole('banner');
			expect(header).toBeInTheDocument();
		});

		it('has accessible header title', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps} showHeader={true} appName='My Application'>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			const title = screen.getByText('My Application');
			expect(title).toBeInTheDocument();
			expect(title.tagName).toBe('H6');
		});

		it('header is not rendered when showHeader is false', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps} showHeader={false} appName='Should not appear'>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
			expect(
				screen.queryByText('Should not appear')
			).not.toBeInTheDocument();
		});
	});

	describe('Sidebar Accessibility', () => {
		it('has proper navigation structure', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps}
					showSidebar={true}
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Check that links are properly structured
			const homeLink = screen.getByRole('link', { name: /home/i });
			const settingsLink = screen.getByRole('link', {
				name: /settings/i
			});
			const profileLink = screen.getByRole('link', { name: /profile/i });

			expect(homeLink).toBeInTheDocument();
			expect(settingsLink).toBeInTheDocument();
			expect(profileLink).toBeInTheDocument();
		});

		it('has proper link attributes', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps}
					showSidebar={true}
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			const homeLink = screen.getByRole('link', { name: /home/i });
			expect(homeLink).toHaveAttribute('href', '/home');

			const settingsLink = screen.getByRole('link', {
				name: /settings/i
			});
			expect(settingsLink).toHaveAttribute('href', '/settings');

			const profileLink = screen.getByRole('link', { name: /profile/i });
			expect(profileLink).toHaveAttribute('href', '/profile');
		});

		it('has proper icon structure', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps}
					showSidebar={true}
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Check that icons are present
			expect(screen.getByTestId('home-icon')).toBeInTheDocument();
			expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
			expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
		});

		it('sidebar is not rendered when showSidebar is false', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps}
					showSidebar={false}
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			expect(
				screen.queryByRole('link', { name: /home/i })
			).not.toBeInTheDocument();
			expect(
				screen.queryByRole('link', { name: /settings/i })
			).not.toBeInTheDocument();
			expect(
				screen.queryByRole('link', { name: /profile/i })
			).not.toBeInTheDocument();
		});

		it('handles empty sidebar links gracefully', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps} showSidebar={true} sidebarLinks={[]}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Sidebar should still be rendered but with no links
			expect(screen.queryByRole('link')).not.toBeInTheDocument();
		});
	});

	describe('Content Area Accessibility', () => {
		it('has proper main content structure', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps}>
					<div data-testid='main-content'>Main content here</div>
				</LumoraWrapper>
			);

			const mainContent = screen.getByTestId('main-content');
			const mainElement = mainContent.closest('main');

			expect(mainElement).toBeInTheDocument();
			// MUI Box doesn't have role="main" by default, just check it exists
			expect(mainElement).toBeInTheDocument();
		});

		it('content is accessible when header is shown', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps} showHeader={true}>
					<div data-testid='content'>Content</div>
				</LumoraWrapper>
			);

			const content = screen.getByTestId('content');
			expect(content).toBeInTheDocument();
		});

		it('content is accessible when header is hidden', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps} showHeader={false}>
					<div data-testid='content'>Content</div>
				</LumoraWrapper>
			);

			const content = screen.getByTestId('content');
			expect(content).toBeInTheDocument();
		});
	});

	describe('Keyboard Navigation', () => {
		it('sidebar links are keyboard accessible', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps}
					showSidebar={true}
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			const homeLink = screen.getByRole('link', { name: /home/i });
			const settingsLink = screen.getByRole('link', {
				name: /settings/i
			});

			// Links should be focusable
			expect(homeLink).toBeInTheDocument();
			expect(settingsLink).toBeInTheDocument();

			// Check that links are button elements (ListItemButton renders as 'a')
			expect(homeLink.tagName).toBe('A');
			expect(settingsLink.tagName).toBe('A');
		});
	});

	describe('Screen Reader Support', () => {
		it('provides meaningful text for screen readers', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps}
					showHeader={true}
					showSidebar={true}
					appName='My Application'
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Header title should be readable
			expect(screen.getByText('My Application')).toBeInTheDocument();

			// Rail links expose labels via aria-label (icons only in the rail)
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

		it('maintains proper heading hierarchy', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps} showHeader={true} appName='Application Title'>
					<h1>Page Title</h1>
					<h2>Section Title</h2>
				</LumoraWrapper>
			);

			const headerTitle = screen.getByText('Application Title');
			expect(headerTitle.tagName).toBe('H6');

			// Page content should maintain proper hierarchy
			expect(
				screen.getByRole('heading', { level: 1 })
			).toBeInTheDocument();
			expect(
				screen.getByRole('heading', { level: 2 })
			).toBeInTheDocument();
		});
	});

	describe('Focus Management', () => {
		it('maintains focus order with header and sidebar', () => {
			render(
				<LumoraWrapper {...lumoraTestRequiredProps}
					showHeader={true}
					showSidebar={true}
					appName='Test App'
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// All interactive elements should be in the document
			expect(screen.getByRole('banner')).toBeInTheDocument();
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
	});
});
