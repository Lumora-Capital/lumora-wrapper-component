import * as React from 'react';
import { FLYOUT_CLOSE_DELAY_MS } from '../useFlyoutIntent';
import useHoverPopup, { HOVER_OPEN_DELAY_MS } from '../useHoverPopup';
import { renderHook } from '@testing-library/react';
import { act, fireEvent, render, screen } from './testUtils';

const mouse = { pointerType: 'mouse' };

const Harness = () => {
	const [open, setOpen] = React.useState(false);
	const { triggerProps, contentProps, openedByHover } = useHoverPopup({
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
				{...triggerProps}
			>
				Trigger
			</button>
			<button
				type='button'
				data-testid='close'
				onClick={() => setOpen(false)}
			>
				Close
			</button>
			{open ? (
				<div
					data-testid='popup'
					data-by-hover={String(openedByHover)}
					onPointerEnter={contentProps.onPointerEnter}
					onPointerLeave={contentProps.onPointerLeave}
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

	it('drops a stale close timer when closed by other means', () => {
		render(<Harness />);
		const trigger = screen.getByTestId('trigger');
		fireEvent.pointerEnter(trigger, mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerLeave(trigger, mouse);
		fireEvent.click(screen.getByTestId('close'));
		fireEvent.click(trigger);
		advance(1000);
		expect(popup()).toHaveAttribute('data-by-hover', 'false');
	});

	it('drops a stale open timer when opened and closed by other means', () => {
		render(<Harness />);
		const trigger = screen.getByTestId('trigger');
		fireEvent.pointerEnter(trigger, mouse);
		fireEvent.click(trigger);
		fireEvent.click(screen.getByTestId('close'));
		advance(1000);
		expect(popup()).toBeNull();
	});

	it('stays open after a press on the trigger', () => {
		render(<Harness />);
		const trigger = screen.getByTestId('trigger');
		fireEvent.pointerEnter(trigger, mouse);
		advance(HOVER_OPEN_DELAY_MS);
		fireEvent.pointerDown(trigger, mouse);
		fireEvent.pointerLeave(trigger, mouse);
		advance(1000);
		expect(popup()).not.toBeNull();
	});

	it('treats the trigger as inside the popup for outside interactions', () => {
		const { result } = renderHook(() =>
			useHoverPopup({
				open: false,
				onOpen: jest.fn(),
				onClose: jest.fn()
			})
		);
		const trigger = document.createElement('button');
		const elsewhere = document.createElement('div');
		const enter = {
			pointerType: 'mouse',
			currentTarget: trigger
		} as unknown as React.PointerEvent<HTMLElement>;
		act(() => result.current.triggerProps.onPointerEnter(enter));
		const onTrigger = jest.fn();
		result.current.contentProps.onInteractOutside({
			target: trigger,
			preventDefault: onTrigger
		});
		expect(onTrigger).toHaveBeenCalled();
		const onElsewhere = jest.fn();
		result.current.contentProps.onInteractOutside({
			target: elsewhere,
			preventDefault: onElsewhere
		});
		expect(onElsewhere).not.toHaveBeenCalled();
	});
});
