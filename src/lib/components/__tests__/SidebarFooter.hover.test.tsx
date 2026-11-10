import SidebarFooter from '../SidebarFooter';
import { FLYOUT_CLOSE_DELAY_MS } from '../useFlyoutIntent';
import { HOVER_OPEN_DELAY_MS } from '../useHoverPopup';
import { act, fireEvent, render, screen } from './testUtils';

const mouse = { pointerType: 'mouse' };
const advance = (ms: number) => act(() => jest.advanceTimersByTime(ms));
const renderFooter = () =>
	render(
		<SidebarFooter
			compact={false}
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

	it('stays open after a press on the trigger when the mouse leaves', () => {
		renderFooter();
		fireEvent.pointerEnter(user(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerDown(user(), mouse);
		fireEvent.pointerLeave(user(), mouse);
		advance(1000);
		expect(menu()).toBeInTheDocument();
	});

	it('keeps the backdrop and stays open when clicked open', () => {
		renderFooter();
		fireEvent.click(user());
		expect(backdrop()).not.toBeNull();
		fireEvent.pointerLeave(user(), mouse);
		advance(1000);
		expect(menu()).toBeInTheDocument();
	});
});
