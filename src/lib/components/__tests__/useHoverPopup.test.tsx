import * as React from 'react';
import { FLYOUT_CLOSE_DELAY_MS } from '../useFlyoutIntent';
import useHoverPopup, { HOVER_OPEN_DELAY_MS } from '../useHoverPopup';
import { act, fireEvent, render, screen } from './testUtils';

const mouse = { pointerType: 'mouse' };

const Harness = () => {
	const [open, setOpen] = React.useState(false);
	const { hoverProps, openedByHover } = useHoverPopup({
		open,
		onOpen: () => setOpen(true),
		onClose: () => setOpen(false)
	});
	return (
		<>
			<button
				type='button'
				data-testid='trigger'
				onClick={() => setOpen(true)}
				{...hoverProps}
			>
				Trigger
			</button>
			{open ? (
				<div
					data-testid='popup'
					data-by-hover={String(openedByHover)}
					{...hoverProps}
				>
					Popup
				</div>
			) : null}
		</>
	);
};

const advance = (ms: number) => act(() => jest.advanceTimersByTime(ms));
const popup = () => screen.queryByTestId('popup');

describe('useHoverPopup', () => {
	beforeEach(() => jest.useFakeTimers());
	afterEach(() => jest.useRealTimers());

	it('opens once the mouse rests on the trigger', () => {
		render(<Harness />);
		fireEvent.pointerEnter(screen.getByTestId('trigger'), mouse);
		advance(HOVER_OPEN_DELAY_MS - 1);
		expect(popup()).toBeNull();
		advance(1);
		expect(popup()).toHaveAttribute('data-by-hover', 'true');
	});

	it('does not open when the mouse passes by', () => {
		render(<Harness />);
		const trigger = screen.getByTestId('trigger');
		fireEvent.pointerEnter(trigger, mouse);
		advance(HOVER_OPEN_DELAY_MS / 2);
		fireEvent.pointerLeave(trigger, mouse);
		advance(1000);
		expect(popup()).toBeNull();
	});

	it('closes after the grace once the mouse leaves trigger and popup', () => {
		render(<Harness />);
		const trigger = screen.getByTestId('trigger');
		fireEvent.pointerEnter(trigger, mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerLeave(trigger, mouse);
		advance(FLYOUT_CLOSE_DELAY_MS / 2);
		// Reaching the popup within the grace keeps it open
		fireEvent.pointerEnter(popup()!, mouse);
		advance(1000);
		expect(popup()).not.toBeNull();
		fireEvent.pointerLeave(popup()!, mouse);
		advance(FLYOUT_CLOSE_DELAY_MS - 1);
		expect(popup()).not.toBeNull();
		advance(1);
		expect(popup()).toBeNull();
	});

	it('leaves a clicked-open popup alone', () => {
		render(<Harness />);
		const trigger = screen.getByTestId('trigger');
		fireEvent.pointerEnter(trigger, mouse);
		fireEvent.click(trigger);
		expect(popup()).toHaveAttribute('data-by-hover', 'false');
		fireEvent.pointerLeave(trigger, mouse);
		advance(1000);
		expect(popup()).toHaveAttribute('data-by-hover', 'false');
	});

	it('ignores touch', () => {
		render(<Harness />);
		fireEvent.pointerEnter(screen.getByTestId('trigger'), {
			pointerType: 'touch'
		});
		advance(1000);
		expect(popup()).toBeNull();
	});
});
