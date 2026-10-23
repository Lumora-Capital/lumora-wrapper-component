import { Business, Home, People, Settings } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import * as React from 'react';
import CollapsibleSidebar from '../CollapsibleSidebar';
import LumoraWrapper, { type SidebarLink } from '../LumoraWrapper';
import {
	FLYOUT_CLOSE_DELAY_MS,
	FLYOUT_OPEN_DELAY_MS
} from '../useFlyoutIntent';
import {
	act,
	fireEvent,
	lumoraTestRequiredProps,
	render,
	screen
} from './testUtils';

jest.mock('@mui/material', () => ({
	...jest.requireActual('@mui/material'),
	useMediaQuery: jest.fn()
}));
const mockUseMediaQuery = useMediaQuery as jest.MockedFunction<
	typeof useMediaQuery
>;

const mainLinks: SidebarLink[] = [
	{ text: 'Deals', path: '/deals', icon: <Home /> },
	{
		text: 'CRM',
		path: '/crm',
		icon: <Business />,
		subitems: [
			{ text: 'People', path: '/crm/people', icon: <People /> },
			{ text: 'Companies', path: '/crm/companies', icon: <Business /> },
			{
				text: 'Marketing',
				subitems: [{ text: 'Campaigns', path: '/crm/campaigns' }]
			}
		]
	},
	{
		text: 'Configurations',
		icon: <Settings />,
		subitems: [{ text: 'Tags', path: '/config/tags' }]
	}
];

const renderRail = (
	props: Partial<React.ComponentProps<typeof CollapsibleSidebar>> = {}
) =>
	render(
		<CollapsibleSidebar
			mainLinks={mainLinks}
			activePath='/deals'
			collapsed
			submenuMode='flyout'
			{...props}
		/>
	);

const advance = (ms: number) =>
	act(() => {
		jest.advanceTimersByTime(ms);
	});

const trigger = (text: string) => screen.getByTestId(`sidebar-item-${text}`);
const isOpen = (text: string) =>
	trigger(text).getAttribute('aria-expanded') === 'true';
const hoverOpen = (text: string) => {
	fireEvent.mouseEnter(trigger(text));
	advance(FLYOUT_OPEN_DELAY_MS);
};
/** A pointer click: keyboard clicks carry `detail` 0. */
const pointerClick = (el: HTMLElement) => fireEvent.click(el, { detail: 1 });

describe('flyout submenus', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});
	afterEach(() => {
		jest.useRealTimers();
	});

	it('opens a group on hover after a pause, as a row of tiles', () => {
		renderRail();
		fireEvent.mouseEnter(trigger('CRM'));
		expect(isOpen('CRM')).toBe(false);
		advance(FLYOUT_OPEN_DELAY_MS);
		expect(isOpen('CRM')).toBe(true);
		const flyout = screen.getByTestId('sidebar-flyout');
		expect(flyout).toHaveAttribute('data-group', 'CRM');
		// Nested sections lie flat beside their cousins
		expect(
			screen.getAllByRole('menuitem').map(el => el.textContent)
		).toEqual(['People', 'Companies', 'Campaigns']);
		expect(screen.getByTestId('sidebar-flyout-scrim')).toBeInTheDocument();
	});

	it('does not stack the group’s pages under its icon', () => {
		renderRail({ activePath: '/crm/people' });
		// Open by the active path in inline mode; never in flyout mode
		expect(screen.queryByTestId('sidebar-flyout')).toBeNull();
		expect(screen.queryByTestId('sidebar-subitem-People')).toBeNull();
	});

	it('ignores a pointer sweeping across the rail', () => {
		renderRail();
		fireEvent.mouseEnter(trigger('CRM'));
		advance(FLYOUT_OPEN_DELAY_MS / 2);
		fireEvent.mouseLeave(trigger('CRM'));
		advance(FLYOUT_OPEN_DELAY_MS);
		expect(isOpen('CRM')).toBe(false);
	});

	it('stays open while the pointer crosses to the flyout, closes once it leaves', () => {
		renderRail();
		hoverOpen('CRM');
		fireEvent.mouseLeave(trigger('CRM'));
		advance(FLYOUT_CLOSE_DELAY_MS / 2);
		fireEvent.mouseEnter(screen.getByTestId('sidebar-flyout'));
		advance(FLYOUT_CLOSE_DELAY_MS * 2);
		expect(isOpen('CRM')).toBe(true);

		fireEvent.mouseLeave(screen.getByTestId('sidebar-flyout'));
		advance(FLYOUT_CLOSE_DELAY_MS);
		expect(isOpen('CRM')).toBe(false);
	});

	it('switches to another group at once while one is open', () => {
		renderRail();
		hoverOpen('CRM');
		fireEvent.mouseLeave(trigger('CRM'));
		fireEvent.mouseEnter(trigger('Configurations'));
		expect(isOpen('Configurations')).toBe(true);
		expect(isOpen('CRM')).toBe(false);
		expect(screen.getByTestId('sidebar-flyout')).toHaveAttribute(
			'data-group',
			'Configurations'
		);
	});

	it('closes an unpinned flyout when a page icon on the rail is hovered', () => {
		renderRail();
		hoverOpen('CRM');
		fireEvent.mouseEnter(trigger('Deals'));
		expect(isOpen('CRM')).toBe(false);
	});

	it('pins on click until clicked again', () => {
		renderRail();
		pointerClick(trigger('CRM'));
		expect(isOpen('CRM')).toBe(true);
		fireEvent.mouseLeave(trigger('CRM'));
		advance(FLYOUT_CLOSE_DELAY_MS * 2);
		expect(isOpen('CRM')).toBe(true);
		pointerClick(trigger('CRM'));
		expect(isOpen('CRM')).toBe(false);
	});

	it('navigates from a tile and closes', () => {
		const onLinkClick = jest.fn();
		renderRail({ onLinkClick });
		hoverOpen('CRM');
		fireEvent.click(screen.getByTestId('sidebar-subitem-Companies'));
		expect(onLinkClick).toHaveBeenCalledWith('/crm/companies');
		expect(isOpen('CRM')).toBe(false);
	});

	it('makes its leaves and tiles links, which ⌘-click leaves to the browser', () => {
		const onLinkClick = jest.fn();
		renderRail({ onLinkClick });
		// A page on the rail; the groups only open their flyout
		expect(trigger('Deals')).toHaveAttribute('href', '/deals');
		expect(trigger('CRM')).not.toHaveAttribute('href');
		hoverOpen('CRM');
		const tile = screen.getByTestId('sidebar-subitem-Companies');
		expect(tile).toHaveAttribute('href', '/crm/companies');
		fireEvent.click(tile, { metaKey: true });
		fireEvent.click(trigger('Deals'), { ctrlKey: true });
		expect(onLinkClick).not.toHaveBeenCalled();
		expect(isOpen('CRM')).toBe(true);
	});

	it('navigates from a tile on Space, as a menu item', () => {
		const onLinkClick = jest.fn();
		renderRail({ onLinkClick });
		hoverOpen('CRM');
		fireEvent.keyDown(screen.getByTestId('sidebar-subitem-People'), {
			key: ' '
		});
		expect(onLinkClick).toHaveBeenCalledWith('/crm/people');
	});

	it('closes on a click on the dimmed page', () => {
		renderRail();
		pointerClick(trigger('CRM'));
		fireEvent.click(screen.getByTestId('sidebar-flyout-scrim'));
		expect(isOpen('CRM')).toBe(false);
	});

	it('closes when the current page changes', () => {
		const { rerender } = renderRail();
		pointerClick(trigger('CRM'));
		rerender(
			<CollapsibleSidebar
				mainLinks={mainLinks}
				activePath='/crm/people'
				collapsed
				submenuMode='flyout'
			/>
		);
		expect(isOpen('CRM')).toBe(false);
	});

	it('lays a small group out in one row, names under their tiles', () => {
		renderRail();
		hoverOpen('CRM');
		const tops = screen
			.getAllByRole('menuitem')
			.map(item => [
				getComputedStyle(item.querySelector('[data-flyout-tile]')!).top,
				getComputedStyle(item.querySelector('[data-flyout-slot]')!).top
			]);
		expect(new Set(tops.map(([tile]) => tile))).toEqual(new Set(['0px']));
		expect(tops.every(([tile, name]) => tile !== name)).toBe(true);
	});

	it('zigzags a larger group over two rows', () => {
		renderRail({
			mainLinks: [
				{
					text: 'Many',
					icon: <Business />,
					subitems: ['A', 'B', 'C', 'D', 'E'].map(text => ({
						text,
						path: `/many/${text}`,
						icon: <People />
					}))
				}
			]
		});
		hoverOpen('Many');
		const tileTops = screen
			.getAllByRole('menuitem')
			.map(
				item =>
					getComputedStyle(item.querySelector('[data-flyout-tile]')!)
						.top
			);
		expect(tileTops[0]).toBe('0px');
		expect(tileTops[1]).not.toBe('0px');
		expect(tileTops[2]).toBe('0px');
	});

	it('marks the group and the current page', () => {
		renderRail({ activePath: '/crm/companies' });
		expect(trigger('CRM')).toHaveAttribute('data-active', 'true');
		expect(trigger('Configurations')).toHaveAttribute(
			'data-active',
			'false'
		);
		hoverOpen('CRM');
		expect(screen.getByTestId('sidebar-subitem-Companies')).toHaveAttribute(
			'aria-current',
			'page'
		);
		expect(
			screen.getByTestId('sidebar-subitem-People')
		).not.toHaveAttribute('aria-current');
	});

	describe('keyboard', () => {
		it('opens from the icon into the first tile and moves with the arrows', () => {
			renderRail();
			trigger('CRM').focus();
			// Enter / Space on a button arrive as a click without a pointer
			fireEvent.click(trigger('CRM'), { detail: 0 });
			advance(0);
			expect(isOpen('CRM')).toBe(true);
			expect(screen.getByTestId('sidebar-subitem-People')).toHaveFocus();

			fireEvent.keyDown(document.activeElement!, { key: 'ArrowRight' });
			expect(
				screen.getByTestId('sidebar-subitem-Companies')
			).toHaveFocus();
			fireEvent.keyDown(document.activeElement!, { key: 'End' });
			expect(
				screen.getByTestId('sidebar-subitem-Campaigns')
			).toHaveFocus();
		});

		it('opens with → and closes with Escape, back on the icon', () => {
			renderRail();
			trigger('CRM').focus();
			fireEvent.keyDown(trigger('CRM'), { key: 'ArrowRight' });
			advance(0);
			expect(screen.getByTestId('sidebar-subitem-People')).toHaveFocus();
			fireEvent.keyDown(document.activeElement!, { key: 'Escape' });
			expect(isOpen('CRM')).toBe(false);
			expect(trigger('CRM')).toHaveFocus();
		});

		it('← on the first tile returns to the icon', () => {
			renderRail();
			fireEvent.keyDown(trigger('CRM'), { key: 'ArrowRight' });
			advance(0);
			fireEvent.keyDown(document.activeElement!, { key: 'ArrowLeft' });
			expect(isOpen('CRM')).toBe(false);
			expect(trigger('CRM')).toHaveFocus();
		});
	});

	it('leaves the inline mode as it was', () => {
		renderRail({ submenuMode: 'inline' });
		fireEvent.mouseEnter(trigger('CRM'));
		advance(FLYOUT_OPEN_DELAY_MS * 2);
		expect(screen.queryByTestId('sidebar-flyout')).toBeNull();
		fireEvent.click(trigger('CRM'));
		expect(
			screen.getByTestId('sidebar-subitem-People')
		).toBeInTheDocument();
	});

	it('does not apply to the expanded sidebar', () => {
		renderRail({ collapsed: false });
		fireEvent.mouseEnter(trigger('CRM'));
		advance(FLYOUT_OPEN_DELAY_MS * 2);
		expect(screen.queryByTestId('sidebar-flyout')).toBeNull();
	});
});

describe("LumoraWrapper sidebarSubmenu='flyout'", () => {
	beforeEach(() => {
		jest.useFakeTimers();
		mockUseMediaQuery.mockReturnValue(false);
	});
	afterEach(() => {
		jest.useRealTimers();
	});

	const renderWrapper = (variant: 'panel' | 'collapsible') =>
		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				sidebarVariant={variant}
				sidebarSubmenu='flyout'
				sidebarLinks={mainLinks}
				activePath='/deals'
				searchComponent={<input aria-label='Search' />}
			>
				<div>Page</div>
			</LumoraWrapper>
		);

	it.each(['panel', 'collapsible'] as const)(
		'keeps the %s sidebar a rail and opens groups beside it',
		variant => {
			renderWrapper(variant);
			const panel = screen.getByTestId('sidebar-hover-panel');
			fireEvent.mouseOver(panel);
			advance(500);
			expect(panel).toHaveAttribute('data-expanded', 'false');

			hoverOpen('CRM');
			expect(screen.getByTestId('sidebar-flyout')).toBeInTheDocument();
			expect(panel).toHaveAttribute('data-expanded', 'false');
		}
	);

	it('floats the rail as a glass capsule the flyout dims around', () => {
		renderWrapper('panel');
		const rail = screen.getByTestId('sidebar-hover-panel');
		expect(rail).toHaveAttribute('data-glass', 'true');
		expect(rail).toHaveAttribute('data-rail-surface');
		hoverOpen('CRM');
		// The dim covers the window (the rail is cut out of it, not beside it)
		expect(screen.getByTestId('sidebar-flyout-scrim')).toBeInTheDocument();
	});

	it('glides one glass lens behind the hovered rail icon', () => {
		renderWrapper('panel');
		expect(screen.queryByTestId('sidebar-rail-lens')).toBeNull();
		fireEvent.mouseOver(trigger('Deals'));
		const lens = screen.getByTestId('sidebar-rail-lens');
		expect(lens).toHaveAttribute('data-visible', 'true');
		fireEvent.mouseOver(trigger('CRM'));
		expect(lens).toHaveAttribute('data-visible', 'true');
		// Leaving the rail's links (the lens's own container)
		fireEvent.mouseLeave(lens.parentElement!);
		expect(lens).toHaveAttribute('data-visible', 'false');
	});

	it('opens the account menu as a glass card from the rail', () => {
		renderWrapper('panel');
		fireEvent.click(screen.getByTestId('panel-user-button'));
		expect(screen.getByTestId('account-menu')).toHaveAttribute(
			'data-glass',
			'true'
		);
	});

	it('glides a glass lens behind the hovered account menu row', () => {
		renderWrapper('panel');
		fireEvent.click(screen.getByTestId('panel-user-button'));
		const menu = screen.getByTestId('account-menu');
		fireEvent.mouseOver(screen.getByTestId('menu-item-logout'));
		const lens = menu.querySelector('[data-glass-lens]');
		expect(lens).toHaveAttribute('data-visible', 'true');
	});

	it('keeps the lens off a static (non-clickable) user header', () => {
		renderWrapper('panel');
		fireEvent.click(screen.getByTestId('panel-user-button'));
		const menu = screen.getByTestId('account-menu');
		const lens = menu.querySelector('[data-glass-lens]')!;
		// Opening focuses the first row; clear the lens off it first
		fireEvent.mouseLeave(lens.parentElement!);
		expect(lens).toHaveAttribute('data-visible', 'false');
		fireEvent.mouseOver(screen.getByTestId('account-menu-header'));
		expect(lens).toHaveAttribute('data-visible', 'false');
	});

	it('keeps Ask Nexa its own fill on the rail', () => {
		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				sidebarVariant='panel'
				sidebarSubmenu='flyout'
				sidebarLinks={mainLinks}
				showAssistant
				onAssistantClick={jest.fn()}
			>
				<div>Page</div>
			</LumoraWrapper>
		);
		const nexa = document.querySelector('[data-variant="sidebar-icon"]');
		expect(nexa).toHaveAttribute('data-rail-keep-fill');
	});

	it('keeps the notifications bell on the rail, which never expands', () => {
		const onNotificationsClick = jest.fn();
		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				sidebarVariant='panel'
				sidebarSubmenu='flyout'
				sidebarLinks={mainLinks}
				notificationCount={3}
				onNotificationsClick={onNotificationsClick}
			>
				<div>Page</div>
			</LumoraWrapper>
		);
		const bell = screen.getByTestId('panel-notifications');
		expect(bell).toHaveTextContent('3');
		fireEvent.click(bell);
		expect(onNotificationsClick).toHaveBeenCalled();
	});

	it('marks the current page with one drop of glass, not a fill', () => {
		renderWrapper('panel');
		const active = screen.getByTestId('sidebar-rail-active');
		expect(active).toHaveAttribute('data-visible', 'true');
		expect(trigger('Deals')).toHaveAttribute('data-active', 'true');
	});

	it('finds the current page when its link arrives after the path', () => {
		// The host's links load late (e.g. after permissions); the path is
		// already set, so nothing but the links changes
		const { rerender } = render(
			<CollapsibleSidebar
				mainLinks={mainLinks.filter(link => link.text !== 'Deals')}
				activePath='/deals'
				collapsed
				submenuMode='flyout'
			/>
		);
		expect(screen.queryByTestId('sidebar-rail-active')).toBeNull();
		rerender(
			<CollapsibleSidebar
				mainLinks={mainLinks}
				activePath='/deals'
				collapsed
				submenuMode='flyout'
			/>
		);
		expect(screen.getByTestId('sidebar-rail-active')).toHaveAttribute(
			'data-visible',
			'true'
		);
	});

	it('opens search on hover and closes it again when left empty', () => {
		renderWrapper('panel');
		const icon = screen.getByRole('button', { name: /search/i });
		fireEvent.mouseEnter(icon);
		advance(200);
		expect(screen.getByTestId('sidebar-search-card')).toBeInTheDocument();
		fireEvent.mouseLeave(icon);
		advance(400);
		expect(screen.queryByTestId('sidebar-search-card')).toBeNull();
	});

	it('keeps search open after leaving once something is typed', () => {
		renderWrapper('panel');
		const icon = screen.getByRole('button', { name: /search/i });
		fireEvent.mouseEnter(icon);
		advance(200);
		fireEvent.change(screen.getByRole('textbox', { name: 'Search' }), {
			target: { value: 'acme' }
		});
		fireEvent.mouseLeave(icon);
		advance(400);
		expect(screen.getByTestId('sidebar-search-card')).toBeInTheDocument();
	});

	it('leaves the expand mode without glass', () => {
		mockUseMediaQuery.mockReturnValue(false);
		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				sidebarVariant='panel'
				sidebarLinks={mainLinks}
			>
				<div>Page</div>
			</LumoraWrapper>
		);
		expect(screen.getByTestId('sidebar-hover-panel')).not.toHaveAttribute(
			'data-glass'
		);
		fireEvent.mouseOver(trigger('Deals'));
		expect(screen.queryByTestId('sidebar-rail-lens')).toBeNull();
		fireEvent.click(screen.getByTestId('panel-user-button'));
		expect(screen.getByTestId('account-menu')).not.toHaveAttribute(
			'data-glass'
		);
	});

	it('keeps search reachable from the rail, in a popover', () => {
		renderWrapper('panel');
		// The rail's search icon opens a popover rather than the panel
		expect(screen.queryByRole('textbox', { name: 'Search' })).toBeNull();
		fireEvent.click(screen.getByRole('button', { name: /search/i }));
		expect(
			screen.getByRole('textbox', { name: 'Search' })
		).toBeInTheDocument();
		expect(screen.getByTestId('sidebar-hover-panel')).toHaveAttribute(
			'data-expanded',
			'false'
		);
	});
});
