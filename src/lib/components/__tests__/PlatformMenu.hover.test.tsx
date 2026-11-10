import { HouseIcon as Home } from 'lucide-react';
import LumoraWrapper, { type LumoraPlatform } from '../LumoraWrapper';
import { besideSidebar } from '../PlatformMenu';
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

const platforms: LumoraPlatform[] = [
	{ key: 'centra', name: 'Centra', accentColor: '#09C1AE' },
	{ key: 'xpdite', name: 'XPdite', accentColor: '#2F6FD6' }
];
const mouse = { pointerType: 'mouse' };
const advance = (ms: number) => act(() => jest.advanceTimersByTime(ms));

const renderWrapper = (flyout = true) =>
	render(
		<LumoraWrapper
			{...lumoraTestRequiredProps}
			sidebarVariant='panel'
			sidebarSubmenu={flyout ? 'flyout' : undefined}
			sidebarLinks={[{ text: 'Deals', path: '/deals', icon: <Home /> }]}
			platforms={platforms}
			currentPlatformKey='centra'
		>
			<div>Page</div>
		</LumoraWrapper>
	);

const rect = (left: number, top: number, width: number, height: number) =>
	({
		left,
		top,
		width,
		height,
		right: left + width,
		bottom: top + height,
		x: left,
		y: top,
		toJSON: () => ({})
	}) as DOMRect;

const logo = () => screen.getAllByTestId('platform-switcher-logo')[0];
const menu = () => screen.queryByTestId('platform-menu');

describe('platform menu on hover', () => {
	beforeEach(() => {
		mockUseIsMobile.mockReturnValue(false);
		jest.useFakeTimers();
	});
	afterEach(() => jest.useRealTimers());

	it('opens when the mouse rests on the logo, without taking focus', () => {
		renderWrapper();
		const before = document.activeElement;
		fireEvent.pointerEnter(logo(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		expect(menu()).toBeInTheDocument();
		expect(document.activeElement).toBe(before);
	});

	it('closes after the mouse leaves the logo', () => {
		renderWrapper();
		fireEvent.pointerEnter(logo(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerLeave(logo(), mouse);
		advance(FLYOUT_CLOSE_DELAY_MS + 50);
		expect(menu()).toBeNull();
	});

	it('stays open after a press on the logo when the mouse leaves', () => {
		renderWrapper();
		fireEvent.pointerEnter(logo(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerDown(logo(), mouse);
		fireEvent.click(screen.getAllByTestId('sidebar-header-brand')[0]);
		fireEvent.pointerLeave(logo(), mouse);
		advance(1000);
		expect(menu()).toBeInTheDocument();
	});

	it('stays open when the mouse moves into the menu within the grace', () => {
		renderWrapper();
		fireEvent.pointerEnter(logo(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerLeave(logo(), mouse);
		advance(FLYOUT_CLOSE_DELAY_MS / 2);
		fireEvent.pointerEnter(menu()!, mouse);
		advance(1000);
		expect(menu()).toBeInTheDocument();
		fireEvent.pointerLeave(menu()!, mouse);
		advance(FLYOUT_CLOSE_DELAY_MS + 50);
		expect(menu()).toBeNull();
	});

	it('does not open when the mouse leaves before the delay', () => {
		renderWrapper();
		fireEvent.pointerEnter(logo(), mouse);
		advance(HOVER_OPEN_DELAY_MS - 50);
		fireEvent.pointerLeave(logo(), mouse);
		advance(1000);
		expect(menu()).toBeNull();
	});

	it('ignores touch', () => {
		renderWrapper();
		fireEvent.pointerEnter(logo(), { pointerType: 'touch' });
		advance(1000);
		expect(menu()).toBeNull();
	});

	it('does not open on hover where the rail widens on hover, but opens on click', () => {
		renderWrapper(false);
		fireEvent.pointerEnter(logo(), mouse);
		advance(1000);
		expect(menu()).toBeNull();
		fireEvent.click(screen.getAllByTestId('sidebar-header-brand')[0]);
		expect(menu()).toBeInTheDocument();
	});

	it('hangs past the glass capsule, not the outer aside', () => {
		renderWrapper();
		const button = screen.getAllByTestId('sidebar-header-brand')[0];
		const capsule = button.closest('[data-rail-surface]') as HTMLElement;
		expect(capsule).not.toBeNull();
		capsule.getBoundingClientRect = () => rect(8, 8, 64, 784);
		button.getBoundingClientRect = () => rect(16, 12, 40, 40);
		expect(besideSidebar(button).left).toBe(80);
	});

	it('stays open after a click when the mouse leaves', () => {
		renderWrapper();
		fireEvent.click(screen.getAllByTestId('sidebar-header-brand')[0]);
		expect(menu()).toBeInTheDocument();
		fireEvent.pointerLeave(logo(), mouse);
		advance(1000);
		expect(menu()).toBeInTheDocument();
	});
});

describe('besideSidebar', () => {
	it('moves the logo box past the sidebar right edge, keeping its height', () => {
		const aside = document.createElement('aside');
		const button = document.createElement('button');
		aside.appendChild(button);
		aside.getBoundingClientRect = () => rect(0, 0, 72, 800);
		button.getBoundingClientRect = () => rect(14, 12, 44, 44);
		const box = besideSidebar(button);
		expect(box.left).toBe(80);
		expect(box.top).toBe(12);
		expect(box.height).toBe(44);
	});

	it('keeps the logo box outside a sidebar (phone top bar)', () => {
		const button = document.createElement('button');
		button.getBoundingClientRect = () => rect(14, 12, 44, 44);
		expect(besideSidebar(button).left).toBe(14);
	});
});
