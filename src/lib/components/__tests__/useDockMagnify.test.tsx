import * as React from 'react';
import {
	DOCK_MAX_SCALE,
	DOCK_REACH_PX,
	dockFalloff,
	useDockMagnify
} from '../useDockMagnify';
import { act, render, screen } from './testUtils';

const ITEM_PX = 40;
const GLYPH_PX = 20;
const RAIL = {
	left: 0,
	right: 52,
	top: 0,
	bottom: 400,
	width: 52,
	height: 400
};

const rect = (top: number, left: number, size: number) =>
	({
		top,
		left,
		width: size,
		height: size,
		right: left + size,
		bottom: top + size,
		x: left,
		y: top,
		toJSON: () => ({})
	}) as DOMRect;

/** Three 40px items down a 52px rail, 44px apart, plus one off to the
 * right as the flyout's tiles are. */
const Rail = ({ enabled = true }: { enabled?: boolean }) => {
	const ref = React.useRef<HTMLElement>(null);
	const { containerProps } = useDockMagnify(ref, {
		enabled,
		axis: 'y',
		itemSelector: 'button',
		glyphSelector: '.MuiSvgIcon-root'
	});
	return (
		<nav ref={ref} data-testid='rail' {...containerProps}>
			{[0, 1, 2].map(i => (
				<button key={i} data-testid={`item-${i}`} data-top={i * 44}>
					<svg
						className='MuiSvgIcon-root'
						data-testid={`glyph-${i}`}
					/>
				</button>
			))}
			<button data-testid='tile' data-top={0} data-left={200}>
				<svg className='MuiSvgIcon-root' data-testid='tile-glyph' />
			</button>
		</nav>
	);
};

/** The rail's three items, each carried by a wrapper that slides. */
const CarriedRail = ({ hoveredOnly = false }: { hoveredOnly?: boolean }) => {
	const ref = React.useRef<HTMLElement>(null);
	const { containerProps } = useDockMagnify(ref, {
		enabled: true,
		axis: 'y',
		itemSelector: 'button',
		carrierSelector: '[data-carrier]',
		hoveredOnly
	});
	return (
		<nav ref={ref} data-testid='rail' {...containerProps}>
			{[0, 1, 2].map(i => (
				<div key={i} data-carrier data-testid={`carrier-${i}`}>
					<button data-testid={`item-${i}`} data-top={i * 44} />
				</div>
			))}
		</nav>
	);
};

/** The rail's three items in a scroller that ends 4px below the last,
 * plus a footer item outside it. */
const SCROLLER = { top: 0, left: -20, width: 92, height: 132 };
const BoundedRail = () => {
	const ref = React.useRef<HTMLElement>(null);
	const scrollRef = React.useRef<HTMLDivElement>(null);
	const { containerProps } = useDockMagnify(ref, {
		enabled: true,
		axis: 'y',
		itemSelector: 'button',
		boundsRef: scrollRef
	});
	return (
		<nav ref={ref} data-testid='rail' {...containerProps}>
			<div ref={scrollRef} data-testid='scroller'>
				{[0, 1, 2].map(i => (
					<button
						key={i}
						data-testid={`item-${i}`}
						data-top={i * 44}
					/>
				))}
			</div>
			<button data-testid='footer' data-top={200} />
		</nav>
	);
};

// jsdom has no PointerEvent: a MouseEvent of that type carries the point
const movePointer = (clientX: number, clientY: number, pointerType = 'mouse') =>
	act(() => {
		const event = new MouseEvent('pointermove', {
			bubbles: true,
			clientX,
			clientY
		});
		Object.defineProperty(event, 'pointerType', { value: pointerType });
		screen.getByTestId('rail').dispatchEvent(event);
	});

const scaleOf = (testId: string) => screen.getByTestId(testId).style.scale;

beforeEach(() => {
	jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => {
		cb(0);
		return 0;
	});
	jest.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(
		function (this: Element) {
			if (this.getAttribute('data-testid') === 'rail') {
				return { ...rect(0, 0, 0), ...RAIL } as DOMRect;
			}
			if (this.getAttribute('data-testid') === 'scroller') {
				return {
					...rect(SCROLLER.top, SCROLLER.left, 0),
					...SCROLLER
				} as DOMRect;
			}
			const button = this.closest('button') as HTMLElement | null;
			const top = Number(button?.dataset.top ?? 0);
			const left = Number(button?.dataset.left ?? 6);
			if (this.tagName === 'BUTTON') {
				return rect(top, left, ITEM_PX);
			}
			const scale = Number((this as HTMLElement).style.scale) || 1;
			return rect(top + 10, left + 10, GLYPH_PX * scale);
		}
	);
});

afterEach(() => jest.restoreAllMocks());

describe('dockFalloff', () => {
	it('is full at the pointer and gone at the edge of its reach', () => {
		expect(dockFalloff(0)).toBe(1);
		expect(dockFalloff(DOCK_REACH_PX / 2)).toBeCloseTo(0.5);
		expect(dockFalloff(DOCK_REACH_PX)).toBe(0);
	});
});

describe('useDockMagnify', () => {
	it('swells the icon under the pointer most and its neighbours less', () => {
		render(<Rail />);
		movePointer(26, 20);

		expect(Number(scaleOf('glyph-0'))).toBeCloseTo(DOCK_MAX_SCALE);
		const next = Number(scaleOf('glyph-1'));
		const after = Number(scaleOf('glyph-2'));
		expect(next).toBeGreaterThan(after);
		expect(after).toBeGreaterThan(1);
	});

	it('leaves the flyout tiles alone', () => {
		render(<Rail />);
		movePointer(26, 20);
		expect(scaleOf('tile-glyph')).toBe('');
	});

	it('settles every icon back when the pointer leaves', () => {
		render(<Rail />);
		movePointer(26, 20);
		act(() => {
			screen
				.getByTestId('rail')
				.dispatchEvent(new MouseEvent('pointerout', { bubbles: true }));
		});
		// React's pointerleave comes from pointerout to outside the rail
		expect(scaleOf('glyph-0')).toBe('');
		expect(scaleOf('glyph-1')).toBe('');
	});

	it('settles when the pointer moves out over the flyout', () => {
		render(<Rail />);
		movePointer(26, 20);
		movePointer(120, 20);
		expect(scaleOf('glyph-0')).toBe('');
	});

	it('ignores touch', () => {
		render(<Rail />);
		movePointer(26, 20, 'touch');
		expect(scaleOf('glyph-0')).toBe('');
	});

	it('does nothing when off', () => {
		render(<Rail enabled={false} />);
		movePointer(26, 20);
		expect(scaleOf('glyph-0')).toBe('');
	});

	it('slides the items after a grown one on, keeping the row start put', () => {
		render(<CarriedRail />);
		jest.spyOn(
			HTMLElement.prototype,
			'offsetHeight',
			'get'
		).mockReturnValue(ITEM_PX);
		movePointer(26, 20);
		const slide = (i: number) =>
			parseFloat(
				screen
					.getByTestId(`carrier-${i}`)
					.style.translate.split(' ')[1] ?? '0'
			);
		const growth = (Number(scaleOf('item-0')) - 1) * ITEM_PX;
		// The first grows about its centre and moves on by half of that, so
		// its top edge stays where it was
		expect(slide(0)).toBeCloseTo(growth / 2, 0);
		expect(slide(1)).toBeGreaterThan(slide(0));
		expect(slide(2)).toBeGreaterThan(slide(1));
	});

	describe('hovered only', () => {
		// Items rest with centres at 20, 64 and 108: halfway is 42 and 86
		it('swells the item nearest the pointer at rest, whole, and no other', () => {
			render(<CarriedRail hoveredOnly />);
			movePointer(26, 60);
			expect(Number(scaleOf('item-1'))).toBeCloseTo(DOCK_MAX_SCALE);
			expect(scaleOf('item-0')).toBe('');
			expect(scaleOf('item-2')).toBe('');
		});

		it('hands over only a little past halfway to the next', () => {
			render(<CarriedRail hoveredOnly />);
			movePointer(26, 64);
			movePointer(26, 88);
			expect(Number(scaleOf('item-1'))).toBeCloseTo(DOCK_MAX_SCALE);
			movePointer(26, 94);
			expect(Number(scaleOf('item-2'))).toBeCloseTo(DOCK_MAX_SCALE);
			expect(scaleOf('item-1')).toBe('');
		});
	});

	describe('within bounds', () => {
		beforeEach(() => {
			jest.spyOn(
				HTMLElement.prototype,
				'offsetWidth',
				'get'
			).mockReturnValue(ITEM_PX);
			jest.spyOn(
				HTMLElement.prototype,
				'offsetHeight',
				'get'
			).mockReturnValue(ITEM_PX);
			jest.spyOn(
				HTMLElement.prototype,
				'clientWidth',
				'get'
			).mockReturnValue(SCROLLER.width);
			jest.spyOn(
				HTMLElement.prototype,
				'clientHeight',
				'get'
			).mockReturnValue(SCROLLER.height);
		});

		it('grows the last item only into the room before the end', () => {
			render(<BoundedRail />);
			movePointer(26, 108);
			// 4px below a 40px item: 8px of growth, 1.2
			expect(Number(scaleOf('item-2'))).toBeCloseTo(1.2);
		});

		it('keeps the full swell away from the edges', () => {
			render(<BoundedRail />);
			movePointer(26, 64);
			expect(Number(scaleOf('item-1'))).toBeCloseTo(DOCK_MAX_SCALE);
		});

		it('leaves items outside the bounds unlimited', () => {
			render(<BoundedRail />);
			movePointer(26, 220);
			expect(Number(scaleOf('footer'))).toBeCloseTo(DOCK_MAX_SCALE);
		});
	});
});
