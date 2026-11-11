import PanelSidebar, { type PanelSidebarProps } from '../PanelSidebar';
import { FLYOUT_CLOSE_DELAY_MS } from '../useFlyoutIntent';
import { HOVER_OPEN_DELAY_MS } from '../useHoverPopup';
import { act, fireEvent, render, screen } from './testUtils';

const props: PanelSidebarProps = {
	mainLinks: [{ text: 'Deals', path: '/deals', icon: <span>$</span> }],
	collapsed: false,
	expandedWidth: 264,
	collapsedWidth: 72,
	userName: 'Riley Carter',
	userEmail: 'riley.carter@example.com',
	activeAccentColor: '#5bbfad',
	onLogout: jest.fn(),
	theme: 'light',
	onThemeToggle: jest.fn()
};
const mouse = { pointerType: 'mouse' };
const advance = (ms: number) => act(() => jest.advanceTimersByTime(ms));
const button = () => screen.getByTestId('panel-user-button');
const menu = () => screen.queryByTestId('account-menu');

describe('account menu on hover', () => {
	beforeEach(() => jest.useFakeTimers());
	afterEach(() => jest.useRealTimers());

	it('opens when the mouse rests on the avatar, without taking focus', () => {
		render(<PanelSidebar {...props} />);
		fireEvent.pointerEnter(button(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		expect(menu()).toBeInTheDocument();
		expect(button()).toHaveAttribute('aria-expanded', 'true');
		expect(menu()!.contains(document.activeElement)).toBe(false);
		expect(document.body.style.pointerEvents).toBe('');
	});

	it('does not open when the mouse leaves before the delay', () => {
		render(<PanelSidebar {...props} />);
		fireEvent.pointerEnter(button(), mouse);
		advance(HOVER_OPEN_DELAY_MS - 50);
		fireEvent.pointerLeave(button(), mouse);
		advance(1000);
		expect(menu()).toBeNull();
	});

	it('does not open for touch', () => {
		render(<PanelSidebar {...props} />);
		fireEvent.pointerEnter(button(), { pointerType: 'touch' });
		advance(1000);
		expect(menu()).toBeNull();
	});

	it('closes on a press outside a hover-opened menu', () => {
		render(<PanelSidebar {...props} />);
		fireEvent.pointerEnter(button(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		advance(0);
		fireEvent.pointerDown(document.body, mouse);
		expect(menu()).toBeNull();
	});

	it('opens beside the avatar, to its right, bottoms level', () => {
		render(<PanelSidebar {...props} />);
		fireEvent.pointerEnter(button(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		const content = menu()!.closest('[data-side]');
		expect(content).toHaveAttribute('data-side', 'right');
		expect(content).toHaveAttribute('data-align', 'end');
	});

	it('closes on Escape for a hover-opened menu', () => {
		render(<PanelSidebar {...props} />);
		fireEvent.pointerEnter(button(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		advance(0);
		fireEvent.keyDown(document, { key: 'Escape' });
		expect(menu()).toBeNull();
	});

	it('stays open while the mouse moves into the menu, closes after leaving it', () => {
		render(<PanelSidebar {...props} />);
		fireEvent.pointerEnter(button(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerLeave(button(), mouse);
		advance(FLYOUT_CLOSE_DELAY_MS / 2);
		fireEvent.pointerEnter(menu()!, mouse);
		advance(1000);
		expect(menu()).toBeInTheDocument();
		fireEvent.pointerLeave(menu()!, mouse);
		advance(FLYOUT_CLOSE_DELAY_MS + 50);
		expect(menu()).toBeNull();
	});

	it('still closes after a click on the avatar when the mouse leaves', () => {
		render(<PanelSidebar {...props} />);
		fireEvent.pointerEnter(button(), mouse);
		advance(HOVER_OPEN_DELAY_MS);
		advance(0);
		fireEvent.pointerDown(button(), mouse);
		fireEvent.click(button());
		fireEvent.pointerLeave(button(), mouse);
		advance(1000);
		expect(menu()).not.toBeInTheDocument();
	});

	it('stays open when opened without a mouse press (keyboard)', () => {
		render(<PanelSidebar {...props} />);
		button().focus();
		fireEvent.click(button());
		fireEvent.pointerLeave(button(), mouse);
		advance(1000);
		expect(menu()).toBeInTheDocument();
	});
});
