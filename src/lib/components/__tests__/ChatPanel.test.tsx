import * as React from 'react';
import ChatPanel from '../ChatPanel';
import { act, render, screen } from './testUtils';

const props = {
	variant: 'docked' as const,
	position: 'right' as const,
	width: 400,
	sidebarWidthPx: 0,
	bottomOffsetPx: 0,
	fullScreen: false,
	children: <div>chat</div>
};

/** The slide's duration, from the transition MUI writes on the panel */
const slideDuration = () => screen.getByTestId('chat-panel').style.transition;

describe('ChatPanel', () => {
	it('stands in place, with no slide, when it opens before the first paint', () => {
		render(<ChatPanel {...props} open />);
		expect(slideDuration()).toMatch(/transform 0ms/);
	});

	it('slides in when it opens later', async () => {
		const { rerender } = render(<ChatPanel {...props} open={false} />);
		// After the first paint
		await act(
			() =>
				new Promise(resolve =>
					requestAnimationFrame(() => resolve(undefined))
				)
		);
		rerender(<ChatPanel {...props} open />);
		expect(slideDuration()).not.toMatch(/transform 0ms/);
	});
});
