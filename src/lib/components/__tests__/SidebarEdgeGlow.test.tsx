import { Home } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import LumoraWrapper, { type LumoraWrapperProps } from '../LumoraWrapper';
import { act, lumoraTestRequiredProps, render, screen } from './testUtils';

jest.mock('@mui/material', () => ({
	...jest.requireActual('@mui/material'),
	useMediaQuery: jest.fn()
}));
const mockUseMediaQuery = useMediaQuery as jest.MockedFunction<
	typeof useMediaQuery
>;

const renderWrapper = (props: Partial<LumoraWrapperProps> = {}) =>
	render(
		<LumoraWrapper
			{...lumoraTestRequiredProps}
			sidebarVariant='panel'
			sidebarSubmenu='flyout'
			sidebarAutoHide
			sidebarLinks={[{ text: 'Deals', path: '/deals', icon: <Home /> }]}
			{...props}
		>
			<div>Page</div>
		</LumoraWrapper>
	);

// jsdom has no PointerEvent: a MouseEvent of that type carries clientX
const movePointer = (clientX: number, pointerType = 'mouse', clientY = 0) =>
	act(() => {
		const event = new MouseEvent('pointermove', {
			bubbles: true,
			clientX,
			clientY
		});
		Object.defineProperty(event, 'pointerType', { value: pointerType });
		document.body.dispatchEvent(event);
	});

const glow = () => screen.getByTestId('sidebar-edge-glow');

describe('auto-hide rail edge glow', () => {
	beforeEach(() => {
		mockUseMediaQuery.mockReturnValue(false);
	});

	it('glows while the pointer nears the left edge', () => {
		renderWrapper();
		expect(glow()).toHaveAttribute('data-visible', 'false');

		movePointer(20);
		expect(glow()).toHaveAttribute('data-visible', 'true');

		movePointer(400);
		expect(glow()).toHaveAttribute('data-visible', 'false');
	});

	it('glows at the height the pointer is at', () => {
		renderWrapper();
		movePointer(10, 'mouse', 240);
		expect(glow().style.getPropertyValue('--edge-glow-y')).toBe('240px');

		movePointer(10, 'mouse', 610);
		expect(glow().style.getPropertyValue('--edge-glow-y')).toBe('610px');
	});

	it('ignores touch, which has no hover to hint at', () => {
		renderWrapper();
		movePointer(10, 'touch');
		expect(glow()).toHaveAttribute('data-visible', 'false');
	});

	it('is not drawn when the rail does not auto-hide', () => {
		renderWrapper({ sidebarAutoHide: false });
		expect(screen.queryByTestId('sidebar-edge-glow')).toBeNull();
	});
});
