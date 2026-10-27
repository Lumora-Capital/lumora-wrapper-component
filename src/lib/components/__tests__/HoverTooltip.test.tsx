import * as React from 'react';
import HoverTooltip from '../HoverTooltip';
import { act, fireEvent, render, screen, waitFor } from './testUtils';

const renderTooltip = () =>
	render(
		<HoverTooltip title='Pins' enterDelay={0} leaveDelay={0}>
			<button type='button'>icon</button>
		</HoverTooltip>
	);

describe('HoverTooltip', () => {
	it('shows on hover', async () => {
		renderTooltip();
		fireEvent.mouseOver(screen.getByRole('button'));
		expect(await screen.findByRole('tooltip')).toHaveTextContent('Pins');
	});

	it('closes on click and stays closed until the pointer leaves', async () => {
		renderTooltip();
		const button = screen.getByRole('button');
		fireEvent.mouseOver(button);
		await screen.findByRole('tooltip');

		fireEvent.click(button);
		fireEvent.mouseOver(button);
		await waitFor(() =>
			expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
		);

		fireEvent.pointerLeave(button);
		fireEvent.mouseOver(button);
		expect(await screen.findByRole('tooltip')).toBeInTheDocument();
	});

	it('does not open on focus', async () => {
		renderTooltip();
		fireEvent.focus(screen.getByRole('button'));
		await act(async () => {});
		expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
	});
});
