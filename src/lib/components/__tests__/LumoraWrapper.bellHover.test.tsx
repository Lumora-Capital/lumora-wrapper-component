import { HouseIcon as Home } from 'lucide-react';
import LumoraWrapper, {
	type NotificationSidebarContentProps
} from '../LumoraWrapper';
import { FLYOUT_CLOSE_DELAY_MS } from '../useFlyoutIntent';
import { HOVER_OPEN_DELAY_MS } from '../useHoverPopup';
import { useIsMobile } from '../useMediaQuery';
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
const mockUseIsMobile = useIsMobile as jest.MockedFunction<typeof useIsMobile>;

const Updates = ({ initialTab }: NotificationSidebarContentProps) => (
	<div data-testid='updates-content'>{initialTab}</div>
);
const mouse = { pointerType: 'mouse' };
const advance = (ms: number) => act(() => jest.advanceTimersByTime(ms));

const renderWrapper = () =>
	render(
		<LumoraWrapper
			{...lumoraTestRequiredProps}
			sidebarVariant='panel'
			sidebarSubmenu='flyout'
			sidebarLinks={[{ text: 'Deals', path: '/deals', icon: <Home /> }]}
			showNotifications
			NotificationSidebarContent={Updates}
		>
			<div>Page</div>
		</LumoraWrapper>
	);

const bell = () => screen.getByTestId('panel-notifications');
const updates = () => screen.queryByTestId('updates-content');
const drawer = () => updates()!.closest('[data-slot="sheet-content"]')!;

describe('bell on hover', () => {
	beforeEach(() => {
		mockUseIsMobile.mockReturnValue(false);
		jest.useFakeTimers();
	});
	afterEach(() => jest.useRealTimers());

	it('opens the drawer on Notifications, without taking focus or dimming the page', () => {
		renderWrapper();
		fireEvent.pointerEnter(bell(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		expect(updates()).toHaveTextContent('notifications');
		expect(updates()!.contains(document.activeElement)).toBe(false);
		expect(
			document.querySelector('[data-slot="sheet-overlay"]')
		).toBeNull();
		expect(document.body.style.pointerEvents).toBe('');
	});

	it('stays open while the mouse moves into the drawer, closes after leaving it', () => {
		renderWrapper();
		fireEvent.pointerEnter(bell(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerLeave(bell(), mouse);
		advance(FLYOUT_CLOSE_DELAY_MS / 2);
		fireEvent.pointerEnter(drawer(), mouse);
		advance(1000);
		expect(updates()).toBeInTheDocument();
		fireEvent.pointerLeave(drawer(), mouse);
		advance(FLYOUT_CLOSE_DELAY_MS + 50);
		expect(updates()).toBeNull();
	});

	it('stays open after a press on the bell when the mouse leaves', () => {
		renderWrapper();
		fireEvent.pointerEnter(bell(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		advance(0); // let Radix attach its outside-press listener
		fireEvent.pointerDown(bell(), mouse);
		fireEvent.click(bell());
		fireEvent.pointerLeave(bell(), mouse);
		advance(1000);
		expect(updates()).toBeInTheDocument();
	});

	it('closes a hover-opened drawer on Escape', () => {
		renderWrapper();
		fireEvent.pointerEnter(bell(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.keyDown(document, { key: 'Escape' });
		advance(500);
		expect(updates()).toBeNull();
	});

	it('does not open when the mouse passes by, or on touch', () => {
		renderWrapper();
		fireEvent.pointerEnter(bell(), mouse);
		advance(HOVER_OPEN_DELAY_MS / 2);
		fireEvent.pointerLeave(bell(), mouse);
		fireEvent.pointerEnter(bell(), { pointerType: 'touch' });
		advance(1000);
		expect(updates()).toBeNull();
	});

	it('still opens on click, modal, and stays open when the mouse leaves', () => {
		renderWrapper();
		fireEvent.click(bell());
		expect(updates()).toBeInTheDocument();
		fireEvent.pointerLeave(bell(), mouse);
		advance(1000);
		expect(updates()).toBeInTheDocument();
	});
});
