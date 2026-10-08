import { Business, Home, People, Settings } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import CollapsibleSidebar from '../CollapsibleSidebar';
import type { SidebarLink } from '../LumoraWrapper';
import { act, fireEvent, render, screen, within } from './testUtils';

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

describe('CollapsibleSidebar', () => {
	describe('collapse state', () => {
		// No toggle of its own: the owner opens it (the wrapper does on hover)
		it('is expanded by default and follows the collapsed prop', () => {
			const { rerender } = renderSidebar({ showHeaderBar: true });
			const sidebar = screen.getByTestId('collapsible-sidebar');
			expect(sidebar).toHaveAttribute('data-collapsed', 'false');
			rerender(
				<CollapsibleSidebar
					mainLinks={mainLinks}
					showHeaderBar
					collapsed
				/>
			);
			expect(sidebar).toHaveAttribute('data-collapsed', 'true');
			expect(
				screen.queryByRole('button', {
					name: /collapse sidebar|expand sidebar/i
				})
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

	describe('subtitle', () => {
		const agentLinks: SidebarLink[] = [
			{
				text: 'Liam',
				subtitle: 'Legal & Compliance',
				path: '#switch-agent',
				icon: <People />
			}
		];

		it('shows the subtitle as a second line under the label when expanded', () => {
			render(
				<CollapsibleSidebar
					mainLinks={[]}
					secondaryLinks={agentLinks}
				/>
			);
			const row = screen.getByTestId('sidebar-item-Liam');
			expect(within(row).getByText('Liam')).toBeInTheDocument();
			expect(
				within(row).getByText('Legal & Compliance')
			).toBeInTheDocument();
		});

		it('names both in the rail tooltip when collapsed', async () => {
			render(
				<CollapsibleSidebar
					mainLinks={[]}
					secondaryLinks={agentLinks}
					collapsed
				/>
			);
			const icon = screen.getByTestId('sidebar-item-Liam');
			expect(icon).toHaveAttribute(
				'aria-label',
				'Liam · Legal & Compliance'
			);
			fireEvent.mouseOver(icon);
			const tooltip = await screen.findByRole('tooltip');
			expect(tooltip).toHaveTextContent('Liam · Legal & Compliance');
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

		it('highlights the parent on the rail when it or a sub-page is active, children stay off the rail', () => {
			renderSidebar({ collapsed: true, activePath: '/crm/people' });
			expect(screen.getByTestId('sidebar-item-CRM')).toHaveAttribute(
				'data-active',
				'true'
			);
			expect(
				screen.queryByTestId('sidebar-subitem-People')
			).not.toBeInTheDocument();
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

	describe('collapsed group bubble', () => {
		it('opens the sub-items in a bubble beside the rail on click, and closes on a second click', () => {
			renderSidebar({ collapsed: true, activePath: '/dashboard' });
			const parent = screen.getByTestId('sidebar-item-CRM');

			expect(
				screen.queryByTestId('sidebar-bubble-CRM')
			).not.toBeInTheDocument();
			expect(parent).toHaveAttribute('aria-expanded', 'false');

			fireEvent.click(parent);
			const bubble = screen.getByTestId('sidebar-bubble-CRM');
			expect(parent).toHaveAttribute('aria-expanded', 'true');
			expect(bubble).toHaveAttribute('role', 'menu');
			// Rendered outside the rail, so the rail never grows
			expect(
				screen.getByTestId('collapsible-sidebar')
			).not.toContainElement(bubble);
			expect(
				within(bubble).getByTestId('sidebar-subitem-People')
			).toHaveTextContent('People');
			expect(
				within(bubble).getByTestId('sidebar-subitem-Company')
			).toBeInTheDocument();

			fireEvent.click(parent);
			expect(
				screen.queryByTestId('sidebar-bubble-CRM')
			).not.toBeInTheDocument();
		});

		it('navigates and closes when a sub-item is picked', () => {
			const onLinkClick = jest.fn();
			renderSidebar({
				collapsed: true,
				activePath: '/dashboard',
				onLinkClick
			});

			fireEvent.click(screen.getByTestId('sidebar-item-CRM'));
			fireEvent.click(screen.getByTestId('sidebar-subitem-People'));

			expect(onLinkClick).toHaveBeenCalledWith('/crm/people');
			expect(
				screen.queryByTestId('sidebar-bubble-CRM')
			).not.toBeInTheDocument();
		});

		it('closes on Escape, returning focus to the parent', () => {
			renderSidebar({ collapsed: true, activePath: '/dashboard' });
			const parent = screen.getByTestId('sidebar-item-CRM');
			fireEvent.click(parent);
			fireEvent.keyDown(screen.getByTestId('sidebar-subitem-People'), {
				key: 'Escape'
			});
			expect(
				screen.queryByTestId('sidebar-bubble-CRM')
			).not.toBeInTheDocument();
			expect(parent).toHaveFocus();
		});

		it('closes on a click away', async () => {
			renderSidebar({ collapsed: true, activePath: '/dashboard' });
			fireEvent.click(screen.getByTestId('sidebar-item-CRM'));
			// ClickAwayListener arms a tick after mounting
			await act(() => new Promise(resolve => setTimeout(resolve, 0)));
			fireEvent.click(document.body);
			expect(
				screen.queryByTestId('sidebar-bubble-CRM')
			).not.toBeInTheDocument();
		});

		it('marks the current page in the bubble', () => {
			renderSidebar({ collapsed: true, activePath: '/crm/people' });
			fireEvent.click(screen.getByTestId('sidebar-item-CRM'));
			expect(
				screen.getByTestId('sidebar-subitem-People')
			).toHaveAttribute('data-active', 'true');
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

	describe('nested sections (a third level)', () => {
		// CRM › Marketing › Campaigns / Audiences: a child with children of its
		// own is a SECTION — a label with a chevron, no page behind it.
		const nestedLinks: SidebarLink[] = [
			{ text: 'Dashboard', path: '/dashboard', icon: <Home /> },
			{
				text: 'CRM',
				path: '/crm',
				icon: <Business />,
				subitems: [
					{ text: 'People', path: '/crm/people', icon: <People /> },
					{
						text: 'Marketing',
						icon: <Business />,
						subitems: [
							{ text: 'Campaigns', path: '/crm/campaigns' },
							{
								text: 'Audiences',
								path: '/crm/audiences',
								icon: <People />
							}
						]
					}
				]
			}
		];

		it('renders the section as a row with a chevron, closed until it is opened', () => {
			renderSidebar({
				mainLinks: nestedLinks,
				collapsed: false,
				activePath: '/crm/people'
			});
			const section = screen.getByTestId('sidebar-subitem-Marketing');
			expect(section).toHaveAttribute('aria-expanded', 'false');
			expect(
				screen.queryByTestId('sidebar-subitem-Campaigns')
			).not.toBeInTheDocument();

			fireEvent.click(section);

			expect(section).toHaveAttribute('aria-expanded', 'true');
			const pages = screen.getByTestId('sidebar-children-Marketing');
			expect(
				within(pages).getByTestId('sidebar-subitem-Campaigns')
			).toBeInTheDocument();
			expect(
				within(pages).getByTestId('sidebar-subitem-Audiences')
			).toBeInTheDocument();
		});

		it('opens every level above the current page, and marks only the page itself as active', () => {
			renderSidebar({
				mainLinks: nestedLinks,
				collapsed: false,
				activePath: '/crm/campaigns'
			});
			// CRM (the group) and Marketing (the section) both auto-open.
			expect(screen.getByTestId('sidebar-item-CRM')).toHaveAttribute(
				'aria-expanded',
				'true'
			);
			expect(
				screen.getByTestId('sidebar-subitem-Marketing')
			).toHaveAttribute('aria-expanded', 'true');
			// The section is on the active path but is not itself the page.
			expect(
				screen.getByTestId('sidebar-subitem-Marketing')
			).toHaveAttribute('data-active', 'true');
			expect(
				screen.getByTestId('sidebar-subitem-Campaigns')
			).toHaveAttribute('data-active', 'true');
			expect(
				screen.getByTestId('sidebar-subitem-Audiences')
			).toHaveAttribute('data-active', 'false');
			expect(screen.getByTestId('sidebar-item-CRM')).toHaveAttribute(
				'data-active',
				'false'
			);
		});

		it('navigates from a third-level page and never from the section itself', () => {
			const onLinkClick = jest.fn();
			renderSidebar({
				mainLinks: nestedLinks,
				collapsed: false,
				activePath: '/crm/campaigns',
				onLinkClick
			});
			fireEvent.click(screen.getByTestId('sidebar-subitem-Marketing'));
			expect(onLinkClick).not.toHaveBeenCalled();

			// Re-open and click a page.
			fireEvent.click(screen.getByTestId('sidebar-subitem-Marketing'));
			fireEvent.click(screen.getByTestId('sidebar-subitem-Audiences'));
			expect(onLinkClick).toHaveBeenCalledWith('/crm/audiences');
		});

		it('in the collapsed bubble the section’s pages are laid flat, with the section icon when they have none', () => {
			renderSidebar({
				mainLinks: nestedLinks,
				collapsed: true,
				activePath: '/crm/campaigns'
			});
			fireEvent.click(screen.getByTestId('sidebar-item-CRM'));
			const bubble = screen.getByTestId('sidebar-bubble-CRM');
			// Three pages: People, Campaigns, Audiences — no Marketing tile of its own.
			expect(
				within(bubble).getByTestId('sidebar-subitem-People')
			).toBeInTheDocument();
			expect(
				within(bubble).getByTestId('sidebar-subitem-Campaigns')
			).toHaveAttribute('data-active', 'true');
			expect(
				within(bubble).getByTestId('sidebar-subitem-Audiences')
			).toBeInTheDocument();
			expect(
				within(bubble).queryByTestId('sidebar-subitem-Marketing')
			).not.toBeInTheDocument();
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

		it('gives each labeled item 8px above and below, 4px at the sides', () => {
			renderSidebar({ collapsed: true, showLabels: true });
			expect(screen.getByTestId('sidebar-item-Deals')).toHaveStyle({
				padding: '8px 4px'
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

		it('captions the parent too, and opens its children in the bubble on click', () => {
			const onLinkClick = jest.fn();
			renderSidebar({
				collapsed: true,
				showLabels: true,
				activePath: '/dashboard',
				onLinkClick
			});

			const parent = screen.getByTestId('sidebar-item-CRM');
			expect(within(parent).getByText('CRM')).toBeInTheDocument();
			expect(
				screen.queryByTestId('sidebar-subitem-People')
			).not.toBeInTheDocument();

			fireEvent.click(parent);
			const bubble = screen.getByTestId('sidebar-bubble-CRM');
			expect(within(bubble).getByText('People')).toBeInTheDocument();

			fireEvent.click(
				within(bubble).getByTestId('sidebar-subitem-People')
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

	describe('sidebar header (showHeaderBar)', () => {
		it('renders no header bar by default (guards the labeled rail)', () => {
			renderSidebar({ collapsed: true, showLabels: true });
			expect(
				screen.queryByTestId('sidebar-header')
			).not.toBeInTheDocument();
		});

		it('makes the header brand a button when onBrandClick is given', () => {
			const onBrandClick = jest.fn();
			renderSidebar({
				showHeaderBar: true,
				collapsed: false,
				logo: <svg data-testid='brand-logo' />,
				title: 'Centra',
				onBrandClick
			});
			const brand = screen.getByTestId('sidebar-header-brand');
			expect(brand.tagName).toBe('BUTTON');
			expect(brand).toHaveAccessibleName('Centra home');
			expect(within(brand).getByText('Centra')).toBeInTheDocument();
			expect(within(brand).getByTestId('brand-logo')).toBeInTheDocument();
			fireEvent.click(within(brand).getByText('Centra'));
			expect(onBrandClick).toHaveBeenCalledTimes(1);
		});

		it('keeps the header brand static without onBrandClick', () => {
			renderSidebar({
				showHeaderBar: true,
				collapsed: false,
				title: 'Centra'
			});
			expect(screen.getByTestId('sidebar-header-brand').tagName).not.toBe(
				'BUTTON'
			);
		});

		it('tints the header brand with the accent when the header shares the surface', () => {
			renderSidebar({
				showHeaderBar: true,
				collapsed: false,
				title: 'Centra',
				logo: <svg data-testid='brand-logo' />,
				activeAccentColor: '#09c1ae',
				onBrandClick: jest.fn()
			});
			// Regression: auto-contrast against the white surface painted the
			// wordmark and logo black. Both must follow the accent instead.
			const brand = screen.getByTestId('sidebar-header-brand');
			expect(within(brand).getByText('Centra')).toHaveStyle({
				color: 'rgb(9, 193, 174)'
			});
			expect(brand).toHaveStyle({ color: 'rgb(9, 193, 174)' });
		});

		it('prefers foregroundColor for the header brand on a plain surface', () => {
			renderSidebar({
				showHeaderBar: true,
				collapsed: false,
				title: 'Centra',
				activeAccentColor: '#01584f',
				foregroundColor: '#7ec8bf'
			});
			expect(
				within(screen.getByTestId('sidebar-header-brand')).getByText(
					'Centra'
				)
			).toHaveStyle({ color: 'rgb(126, 200, 191)' });
		});

		it('auto-contrasts the header brand against a custom header background', () => {
			renderSidebar({
				showHeaderBar: true,
				collapsed: false,
				title: 'Centra',
				activeAccentColor: '#09c1ae',
				headerBackgroundColor: '#01584f'
			});
			expect(screen.getByTestId('sidebar-header')).toHaveStyle({
				backgroundColor: 'rgb(1, 88, 79)'
			});
			expect(
				within(screen.getByTestId('sidebar-header-brand')).getByText(
					'Centra'
				)
			).toHaveStyle({ color: 'rgb(255, 255, 255)' });
		});

		it('shows the wordmark only while expanded; collapsed, just the logo', () => {
			const { rerender } = render(
				<CollapsibleSidebar
					mainLinks={mainLinks}
					showHeaderBar
					collapsed={false}
					logo={<svg data-testid='brand-logo' />}
					title='Polymer'
				/>
			);
			const brand = screen.getByTestId('sidebar-header-brand');
			expect(within(brand).getByTestId('brand-logo')).toBeInTheDocument();
			expect(within(brand).getByText('Polymer')).toHaveStyle({
				textTransform: 'uppercase'
			});

			rerender(
				<CollapsibleSidebar
					mainLinks={mainLinks}
					showHeaderBar
					collapsed={true}
					logo={<svg data-testid='brand-logo' />}
					title='Polymer'
				/>
			);
			const collapsedBrand = screen.getByTestId('sidebar-header-brand');
			expect(
				within(collapsedBrand).getByTestId('brand-logo')
			).toBeInTheDocument();
			expect(
				within(collapsedBrand).queryByText('Polymer')
			).not.toBeInTheDocument();
		});

		it('applies headerBackgroundColor and falls back to the surface color', () => {
			renderSidebar({
				showHeaderBar: true,
				collapsed: false,
				headerBackgroundColor: '#0a3b35'
			});
			expect(screen.getByTestId('sidebar-header')).toHaveStyle({
				backgroundColor: 'rgb(10, 59, 53)'
			});
		});

		it('defaults the header background to the sidebar surface', () => {
			renderSidebar({
				showHeaderBar: true,
				collapsed: false,
				surfaceBackgroundColor: '#123456'
			});
			expect(screen.getByTestId('sidebar-header')).toHaveStyle({
				backgroundColor: 'rgb(18, 52, 86)'
			});
		});
	});

	describe('search and footer slots', () => {
		it('renders the search above the links and the footer below them', () => {
			renderSidebar({
				showHeaderBar: true,
				collapsed: false,
				topContent: <input placeholder='Find' />,
				footer: <div data-testid='footer'>Footer</div>
			});
			const search = screen.getByPlaceholderText('Find');
			const firstLink = screen.getByTestId('sidebar-item-Dashboard');
			const footer = screen.getByTestId('footer');
			expect(
				search.compareDocumentPosition(firstLink) &
					Node.DOCUMENT_POSITION_FOLLOWING
			).toBeTruthy();
			expect(
				screen
					.getByTestId('sidebar-item-Configuration')
					.compareDocumentPosition(footer) &
					Node.DOCUMENT_POSITION_FOLLOWING
			).toBeTruthy();
		});

		it('shows the logo on top of the labeled rail (no header bar)', () => {
			renderSidebar({
				collapsed: true,
				showLabels: true,
				logo: <svg data-testid='brand-logo' />
			});
			expect(
				within(screen.getByTestId('sidebar-header-brand')).getByTestId(
					'brand-logo'
				)
			).toBeInTheDocument();
		});
	});

	describe('row action', () => {
		const withAction = (onClick: () => void): SidebarLink[] => [
			{
				text: 'Help & support',
				path: '/help',
				icon: <Settings />,
				action: { label: 'New request', icon: <Home />, onClick }
			}
		];

		it('is its own button: it runs the action without navigating', () => {
			const onAction = jest.fn();
			const onLinkClick = jest.fn();
			const onLinkAction = jest.fn();
			renderSidebar({
				collapsed: false,
				secondaryLinks: withAction(onAction),
				onLinkClick,
				onLinkAction
			});

			const button = screen.getByRole('button', { name: 'New request' });
			// A sibling of the row, not nested inside it
			expect(
				screen.getByTestId('sidebar-item-Help & support')
			).not.toContainElement(button);
			fireEvent.click(button);
			expect(onAction).toHaveBeenCalledTimes(1);
			expect(onLinkAction).toHaveBeenCalledTimes(1);
			expect(onLinkClick).not.toHaveBeenCalled();

			fireEvent.click(screen.getByTestId('sidebar-item-Help & support'));
			expect(onLinkClick).toHaveBeenCalledWith('/help');
			expect(onAction).toHaveBeenCalledTimes(1);
		});

		it('is left out of the collapsed rail', () => {
			renderSidebar({
				collapsed: true,
				secondaryLinks: withAction(jest.fn())
			});
			expect(
				screen.queryByRole('button', { name: 'New request' })
			).not.toBeInTheDocument();
		});
	});

	describe('collapsed header', () => {
		it('keeps the logo as the brand link', () => {
			const onBrandClick = jest.fn();
			renderSidebar({
				showHeaderBar: true,
				collapsed: true,
				logo: <svg data-testid='brand-logo' />,
				title: 'Centra',
				onBrandClick
			});

			fireEvent.click(
				screen.getByRole('button', { name: 'Centra home' })
			);
			expect(onBrandClick).toHaveBeenCalledTimes(1);
		});
	});
});
