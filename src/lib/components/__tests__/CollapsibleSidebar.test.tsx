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
			activePath='/crm'
			{...props}
		/>
	);

beforeEach(() => {
	window.localStorage.clear();
});

describe('CollapsibleSidebar', () => {
	describe('collapse state', () => {
		// The collapse toggle now lives in the navbar (see LumoraWrapper); this
		// component only reads the collapsed state.
		it('restores the persisted collapsed state from localStorage on mount', () => {
			const persistKey = 'test:sidebar-collapsed';
			window.localStorage.setItem(persistKey, 'true');
			renderSidebar({ persistKey });
			expect(screen.getByTestId('collapsible-sidebar')).toHaveAttribute(
				'data-collapsed',
				'true'
			);
		});

		it('reflects the controlled collapsed prop over stored state', () => {
			const persistKey = 'test:sidebar-collapsed';
			window.localStorage.setItem(persistKey, 'true');
			renderSidebar({ persistKey, collapsed: false });
			expect(screen.getByTestId('collapsible-sidebar')).toHaveAttribute(
				'data-collapsed',
				'false'
			);
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

	describe('labeled rail (showLabels)', () => {
		it('renders labels as visible captions under the icons when collapsed', () => {
			renderSidebar({ collapsed: true, showLabels: true });
			// Unlike the icon-only collapsed rail, labels are visible text here.
			expect(screen.getByText('Deals')).toBeInTheDocument();
			expect(screen.getByText('Dashboard')).toBeInTheDocument();
			expect(screen.getByTestId('collapsible-sidebar')).toHaveAttribute(
				'data-labeled',
				'true'
			);
		});

		it('gives each labeled item 8px padding on all sides', () => {
			renderSidebar({ collapsed: true, showLabels: true });
			// p: 1 => 8px on every side of the item container.
			expect(screen.getByTestId('sidebar-item-Deals')).toHaveStyle({
				padding: '8px'
			});
		});

		it('tints idle items with foregroundColor while the active item uses the accent fill', () => {
			renderSidebar({
				collapsed: true,
				showLabels: true,
				activePath: '/deals',
				activeAccentColor: '#01584f', // active pill fill
				activeForegroundColor: '#ffffff', // active text/icon
				foregroundColor: '#7ec8bf' // idle labels/icons
			});
			// Idle item: tinted with foregroundColor, no fill — proving the idle
			// tint is decoupled from the active accent.
			expect(screen.getByTestId('sidebar-item-Dashboard')).toHaveStyle({
				color: 'rgb(126, 200, 191)'
			});
			// Active item: solid accent fill with the active foreground.
			expect(screen.getByTestId('sidebar-item-Deals')).toHaveStyle({
				backgroundColor: 'rgb(1, 88, 79)',
				color: 'rgb(255, 255, 255)'
			});
		});

		it('hovering any item applies the same accent fill + foreground as the active item', () => {
			renderSidebar({
				collapsed: true,
				showLabels: true,
				activePath: '/deals',
				activeAccentColor: '#123abc', // accent fill (active AND hover)
				activeForegroundColor: '#abcdef', // foreground (active AND hover)
				foregroundColor: '#7ec8bf' // idle tint (distinct, so hover != idle)
			});
			// jsdom cannot resolve :hover state, so read the injected CSSOM rules
			// directly. Idle items are teal (#7ec8bf), so the accent (#123abc) /
			// active-fg (#abcdef) colors only appear in the active + hover rules;
			// their presence confirms hover reuses the active look. Accept hex or
			// the rgb() form some CSSOM implementations normalize to.
			const cssRules = Array.from(document.styleSheets)
				.flatMap(sheet => {
					try {
						return Array.from(sheet.cssRules).map(r => r.cssText);
					} catch {
						return [];
					}
				})
				.map(r => r.toLowerCase());
			// A :hover rule exists carrying both the accent fill and the fg.
			const hoverRule = cssRules.find(
				r =>
					r.includes(':hover') &&
					/#123abc|rgb\(18,\s*58,\s*188\)/.test(r)
			);
			expect(hoverRule).toBeDefined();
			expect(hoverRule).toMatch(/#abcdef|rgb\(171,\s*205,\s*239\)/);
			const cssText = cssRules.join(' ');
			expect(cssText).toMatch(/#123abc|rgb\(18,\s*58,\s*188\)/);
			expect(cssText).toMatch(/#abcdef|rgb\(171,\s*205,\s*239\)/);
		});

		it('keeps a parent group chevron and expands children inline on click', () => {
			const onLinkClick = jest.fn();
			renderSidebar({
				collapsed: true,
				showLabels: true,
				activePath: '/dashboard',
				onLinkClick
			});

			// Inactive group: children not on the rail until the parent is clicked.
			expect(
				screen.queryByTestId('sidebar-subitem-People')
			).not.toBeInTheDocument();

			fireEvent.click(screen.getByTestId('sidebar-item-CRM'));

			const group = screen.getByTestId('sidebar-group-CRM');
			expect(
				within(group).getByTestId('sidebar-subitem-People')
			).toBeInTheDocument();
			// Child labels are visible captions too.
			expect(within(group).getByText('People')).toBeInTheDocument();

			fireEvent.click(
				within(group).getByTestId('sidebar-subitem-People')
			);
			expect(onLinkClick).toHaveBeenCalledWith('/crm/people');
		});
	});

	// Guards that the rail-labeled "active == hover" look did NOT leak into the
	// collapsible variant, which must keep its original subtle idle-hover tint.
	describe('collapsible variant hover (regression: unaffected by rail-labeled)', () => {
		const readCssRules = () =>
			Array.from(document.styleSheets)
				.flatMap(sheet => {
					try {
						return Array.from(sheet.cssRules).map(r => r.cssText);
					} catch {
						return [];
					}
				})
				.map(r => r.toLowerCase());

		it('tints idle items subtly on hover (groupTint), never the solid accent + fg', () => {
			renderSidebar({
				collapsed: false, // expanded collapsible rows
				showLabels: false, // collapsible, NOT rail-labeled
				activePath: '/nothing', // nothing active → only idle-hover rules
				activeAccentColor: '#123abc', // solid accent (rgb 18,58,188)
				activeForegroundColor: '#abcdef' // active fg (rgb 171,205,239)
			});
			const rules = readCssRules();
			// The idle-hover rule uses the derived translucent tint
			// rgba(18, 58, 188, 0.14), i.e. the accent at 14% — NOT the solid fill.
			const idleHover = rules.find(
				r =>
					r.includes(':hover') &&
					/rgba\(18,\s*58,\s*188,\s*0?\.14\)/.test(r)
			);
			expect(idleHover).toBeDefined();
			// ...and it must not flip the foreground to the active fg on hover.
			expect(idleHover).not.toMatch(/#abcdef|rgb\(171,\s*205,\s*239\)/);
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
