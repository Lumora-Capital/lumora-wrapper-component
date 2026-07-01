import { Business, Home, People, Settings } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import CollapsibleSidebar from '../CollapsibleSidebar';
import type { SidebarLink } from '../LumoraWrapper';
import { fireEvent, render, screen, within } from './testUtils';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const mainLinks: SidebarLink[] = [
	{ text: 'Dashboard', path: '/dashboard', icon: <Home /> },
	{ text: 'Deals', path: '/deals', icon: <Home /> },
	{
		text: 'CRM',
		path: '/crm',
		icon: <Business />,
		subitems: [
			{ text: 'People', path: '/crm/people', icon: <People /> },
			{ text: 'Company', path: '/crm/company', icon: <Business /> }
		]
	}
];

const secondaryLinks: SidebarLink[] = [
	{ text: 'Configuration', path: '/configuration', icon: <Settings /> }
];

const renderSidebar = (
	props: Partial<React.ComponentProps<typeof CollapsibleSidebar>> = {}
) =>
	render(
		<CollapsibleSidebar
			mainLinks={mainLinks}
			secondaryLinks={secondaryLinks}
			logo={<span data-testid='logo-mark'>logo</span>}
			title='CENTRA'
			sectionTitle='Environment'
			activePath='/crm'
			{...props}
		/>
	);

beforeEach(() => {
	window.localStorage.clear();
});

describe('CollapsibleSidebar', () => {
	describe('collapse state persistence', () => {
		it('persists the collapsed state to localStorage and restores it on remount', () => {
			const persistKey = 'test:sidebar-collapsed';
			const { unmount } = renderSidebar({ persistKey });

			// Starts expanded, then collapse via the toggle
			expect(screen.getByTestId('collapsible-sidebar')).toHaveAttribute(
				'data-collapsed',
				'false'
			);
			fireEvent.click(screen.getByTestId('sidebar-toggle'));

			expect(screen.getByTestId('collapsible-sidebar')).toHaveAttribute(
				'data-collapsed',
				'true'
			);
			expect(window.localStorage.getItem(persistKey)).toBe('true');

			// A fresh mount (simulating a page refresh) restores collapsed
			unmount();
			renderSidebar({ persistKey });
			expect(screen.getByTestId('collapsible-sidebar')).toHaveAttribute(
				'data-collapsed',
				'true'
			);
		});
	});

	describe('logo and title', () => {
		it('shows both logo and title when expanded', () => {
			renderSidebar({ collapsed: false });
			expect(screen.getByTestId('sidebar-logo')).toBeInTheDocument();
			expect(screen.getByTestId('sidebar-title')).toHaveTextContent(
				'CENTRA'
			);
		});

		it('hides the title but keeps the logo when collapsed', () => {
			renderSidebar({ collapsed: true });
			expect(screen.getByTestId('sidebar-logo')).toBeInTheDocument();
			expect(
				screen.queryByTestId('sidebar-title')
			).not.toBeInTheDocument();
		});
	});

	describe('tooltips only in collapsed mode', () => {
		it('renders labels inline (no tooltip) when expanded', () => {
			renderSidebar({ collapsed: false });
			// Label is rendered as visible text, not an aria-label-only icon
			expect(screen.getByText('Deals')).toBeInTheDocument();
			expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
		});

		it('reveals the label as a tooltip on hover when collapsed', async () => {
			renderSidebar({ collapsed: true });
			// Collapsed: label is not visible text up front
			expect(screen.queryByText('Deals')).not.toBeInTheDocument();

			fireEvent.mouseOver(screen.getByTestId('sidebar-item-Deals'));
			const tooltip = await screen.findByRole('tooltip');
			expect(tooltip).toHaveTextContent('Deals');
		});
	});

	describe('active and sub-menu accents', () => {
		it('marks the active parent and renders its child group inline when expanded', () => {
			renderSidebar({ collapsed: false, activePath: '/crm' });
			expect(screen.getByTestId('sidebar-item-CRM')).toHaveAttribute(
				'data-active',
				'true'
			);
			// Children rendered as an indented group block
			expect(
				screen.getByTestId('sidebar-children-CRM')
			).toBeInTheDocument();
			expect(
				screen.getByTestId('sidebar-subitem-People')
			).toBeInTheDocument();
			expect(
				screen.getByTestId('sidebar-subitem-Company')
			).toBeInTheDocument();
		});

		it('reflects the active parent and its child group on the rail when collapsed', () => {
			renderSidebar({ collapsed: true, activePath: '/crm' });
			// The active parent group is rendered as an inline rail group
			expect(screen.getByTestId('sidebar-group-CRM')).toBeInTheDocument();
			expect(screen.getByTestId('sidebar-item-CRM')).toHaveAttribute(
				'data-active',
				'true'
			);
			expect(
				screen.getByTestId('sidebar-subitem-People')
			).toBeInTheDocument();
			expect(
				screen.getByTestId('sidebar-subitem-Company')
			).toBeInTheDocument();
		});

		it('marks the active child (not the parent) as active when a sub-path is active', () => {
			renderSidebar({ collapsed: false, activePath: '/crm/people' });
			expect(
				screen.getByTestId('sidebar-subitem-People')
			).toHaveAttribute('data-active', 'true');
			expect(screen.getByTestId('sidebar-item-CRM')).toHaveAttribute(
				'data-active',
				'false'
			);
		});
	});

	describe('collapsed group toggle', () => {
		it('reveals an inactive parent’s sub-items inline on the rail on click when collapsed', () => {
			renderSidebar({ collapsed: true, activePath: '/dashboard' });

			// CRM is not the active group, so its children are not on the rail yet
			expect(
				screen.queryByTestId('sidebar-subitem-People')
			).not.toBeInTheDocument();

			fireEvent.click(screen.getByTestId('sidebar-item-CRM'));

			// The tinted inline group now shows the child icons — no popup panel
			const group = screen.getByTestId('sidebar-group-CRM');
			expect(
				within(group).getByTestId('sidebar-subitem-People')
			).toBeInTheDocument();
			expect(
				within(group).getByTestId('sidebar-subitem-Company')
			).toBeInTheDocument();

			// Clicking the parent again collapses the stack
			fireEvent.click(screen.getByTestId('sidebar-item-CRM'));
			expect(
				screen.queryByTestId('sidebar-subitem-People')
			).not.toBeInTheDocument();
		});

		it('navigates when an inline sub-item is clicked after opening', () => {
			const onLinkClick = jest.fn();
			renderSidebar({
				collapsed: true,
				activePath: '/dashboard',
				onLinkClick
			});

			fireEvent.click(screen.getByTestId('sidebar-item-CRM'));
			fireEvent.click(screen.getByTestId('sidebar-subitem-People'));

			expect(onLinkClick).toHaveBeenCalledWith('/crm/people');
		});
	});

	describe('expanded group toggle', () => {
		it('reveals an inactive parent’s children inline on click in the expanded panel', () => {
			renderSidebar({ collapsed: false, activePath: '/dashboard' });

			// CRM is not active, so its child group starts collapsed (unmounted)
			expect(
				screen.queryByTestId('sidebar-children-CRM')
			).not.toBeInTheDocument();

			fireEvent.click(screen.getByTestId('sidebar-item-CRM'));

			const children = screen.getByTestId('sidebar-children-CRM');
			expect(
				within(children).getByTestId('sidebar-subitem-People')
			).toBeInTheDocument();
			expect(
				within(children).getByTestId('sidebar-subitem-Company')
			).toBeInTheDocument();

			// The parent row advertises its expanded state for assistive tech
			expect(screen.getByTestId('sidebar-item-CRM')).toHaveAttribute(
				'aria-expanded',
				'true'
			);
		});

		it('collapses an auto-opened active group when its parent is clicked', () => {
			renderSidebar({ collapsed: false, activePath: '/crm' });

			// Active group starts open
			expect(screen.getByTestId('sidebar-item-CRM')).toHaveAttribute(
				'aria-expanded',
				'true'
			);
			expect(
				screen.getByTestId('sidebar-children-CRM')
			).toBeInTheDocument();

			fireEvent.click(screen.getByTestId('sidebar-item-CRM'));

			// The group is now marked collapsed (the child block animates out)
			expect(screen.getByTestId('sidebar-item-CRM')).toHaveAttribute(
				'aria-expanded',
				'false'
			);
		});
	});

	describe('truncated label tooltips', () => {
		// jsdom has no layout, so simulate an overflowing label.
		beforeEach(() => {
			Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
				configurable: true,
				get: () => 500
			});
			Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
				configurable: true,
				get: () => 100
			});
		});
		afterEach(() => {
			delete (HTMLElement.prototype as { scrollWidth?: number })
				.scrollWidth;
			delete (HTMLElement.prototype as { clientWidth?: number })
				.clientWidth;
		});

		it('reveals the full label as a tooltip when an expanded label is truncated', async () => {
			renderSidebar({ collapsed: false });
			fireEvent.mouseOver(screen.getByText('Dashboard'));
			expect(await screen.findByRole('tooltip')).toHaveTextContent(
				'Dashboard'
			);
		});
	});

	describe('light / dark mode', () => {
		it('defaults the surface to white in light mode', () => {
			renderSidebar({ collapsed: false });
			expect(screen.getByTestId('collapsible-sidebar')).toHaveStyle({
				backgroundColor: 'rgb(255, 255, 255)'
			});
		});

		it('defaults the surface to the theme paper color in dark mode', () => {
			render(
				<ThemeProvider theme={darkTheme}>
					<CollapsibleSidebar mainLinks={mainLinks} />
				</ThemeProvider>
			);
			// MUI dark palette background.paper is #121212
			expect(screen.getByTestId('collapsible-sidebar')).toHaveStyle({
				backgroundColor: 'rgb(18, 18, 18)'
			});
		});

		it('lets surfaceBackgroundColor override the theme default', () => {
			render(
				<ThemeProvider theme={darkTheme}>
					<CollapsibleSidebar
						mainLinks={mainLinks}
						surfaceBackgroundColor='#123456'
					/>
				</ThemeProvider>
			);
			expect(screen.getByTestId('collapsible-sidebar')).toHaveStyle({
				backgroundColor: 'rgb(18, 52, 86)'
			});
		});
	});

	describe('interaction', () => {
		it('calls onLinkClick with the item path', () => {
			const onLinkClick = jest.fn();
			renderSidebar({ collapsed: false, onLinkClick });
			fireEvent.click(screen.getByTestId('sidebar-item-Deals'));
			expect(onLinkClick).toHaveBeenCalledWith('/deals');
		});
	});
});
