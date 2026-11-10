import LumoraWrapper from '../LumoraWrapper';
import SidebarFooter from '../SidebarFooter';
import { useIsMobile } from '../useMediaQuery';
import { FLYOUT_CLOSE_DELAY_MS } from '../useFlyoutIntent';
import { HOVER_OPEN_DELAY_MS } from '../useHoverPopup';
import {
	act,
	fireEvent,
	lumoraTestRequiredProps,
	render,
	screen
} from './testUtils';

jest.mock('../useMediaQuery', () => ({
	...jest.requireActual('../useMediaQuery'),
	useIsMobile: jest.fn(() => false)
}));

const mouse = { pointerType: 'mouse' };
const advance = (ms: number) => act(() => jest.advanceTimersByTime(ms));
const renderFooter = (hoverOpen = true) =>
	render(
		<SidebarFooter
			compact
			hoverOpen={hoverOpen}
			color='#111111'
			hoverColor='#eeeeee'
			showProfile
			avatarColor='#336699'
			showNotifications={false}
			notificationCount={0}
			showSettings={false}
			showThemeToggler={false}
			theme='light'
			userName='Riley Carter'
			onLogout={jest.fn()}
		/>
	);
const user = () => screen.getByTestId('sidebar-user');
const menu = () => screen.queryByRole('menu');
const backdrop = () => document.querySelector('[data-slot="menu-backdrop"]');

describe('footer user menu on hover', () => {
	beforeEach(() => jest.useFakeTimers());
	afterEach(() => jest.useRealTimers());

	it('opens on hover with no backdrop over the trigger, without taking focus', () => {
		renderFooter();
		const before = document.activeElement;
		fireEvent.pointerEnter(user(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		expect(menu()).toBeInTheDocument();
		expect(backdrop()).toBeNull();
		expect(document.activeElement).toBe(before);
	});

	it('closes after the mouse leaves', () => {
		renderFooter();
		fireEvent.pointerEnter(user(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerLeave(user(), mouse);
		advance(FLYOUT_CLOSE_DELAY_MS + 50);
		expect(menu()).toBeNull();
	});

	it('still closes after a click on the trigger when the mouse leaves', () => {
		renderFooter();
		fireEvent.pointerEnter(user(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		// Radix registers its outside-pointerdown listener in a setTimeout(0)
		advance(0);
		fireEvent.pointerDown(user(), mouse);
		fireEvent.click(user());
		fireEvent.pointerLeave(user(), mouse);
		advance(1000);
		expect(menu()).not.toBeInTheDocument();
	});

	it('keeps the backdrop and stays open when opened without a mouse press', () => {
		renderFooter();
		fireEvent.click(user());
		expect(backdrop()).not.toBeNull();
		fireEvent.pointerLeave(user(), mouse);
		advance(1000);
		expect(menu()).toBeInTheDocument();
	});

	it('stays open when the mouse moves into the menu within the grace, and closes when it leaves', () => {
		renderFooter();
		fireEvent.pointerEnter(user(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerLeave(user(), mouse);
		advance(125);
		fireEvent.pointerEnter(menu()!, mouse);
		advance(1000);
		expect(menu()).toBeInTheDocument();
		fireEvent.pointerLeave(menu()!, mouse);
		advance(FLYOUT_CLOSE_DELAY_MS + 50);
		expect(menu()).toBeNull();
	});

	it('does not open on hover without hoverOpen, but a click does', () => {
		renderFooter(false);
		fireEvent.pointerEnter(user(), mouse);
		advance(1000);
		expect(menu()).toBeNull();
		fireEvent.click(user());
		expect(menu()).toBeInTheDocument();
	});

	it('does not open when the mouse leaves before the delay', () => {
		renderFooter();
		fireEvent.pointerEnter(user(), mouse);
		advance(HOVER_OPEN_DELAY_MS - 50);
		fireEvent.pointerLeave(user(), mouse);
		advance(1000);
		expect(menu()).toBeNull();
	});

	it('does not open on touch', () => {
		renderFooter();
		fireEvent.pointerEnter(user(), { pointerType: 'touch' });
		advance(1000);
		expect(menu()).toBeNull();
	});
});

describe('footer user menu in the wrapper', () => {
	beforeEach(() => {
		jest.useFakeTimers();
		(useIsMobile as jest.Mock).mockReturnValue(false);
	});
	afterEach(() => jest.useRealTimers());

	it('opens on hover on the glass flyout rail', () => {
		render(
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				sidebarVariant='collapsible'
				sidebarSubmenu='flyout'
				showProfile
				userName='Riley Carter'
			>
				<div>Page</div>
			</LumoraWrapper>
		);
		fireEvent.pointerEnter(user(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		expect(menu()).toBeInTheDocument();
	});
});
