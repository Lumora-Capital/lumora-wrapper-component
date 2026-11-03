import userEvent from '@testing-library/user-event';
import HoverTooltip from '../HoverTooltip';
import { act, fireEvent, render, screen, waitFor } from './testUtils';

const renderTooltip = () =>
	render(
		<HoverTooltip title='Pins' delayDuration={0}>
			<button type='button'>icon</button>
		</HoverTooltip>
	);

describe('HoverTooltip', () => {
	it('shows on hover', async () => {
		renderTooltip();
		await userEvent.hover(screen.getByRole('button'));
		expect(await screen.findByRole('tooltip')).toHaveTextContent('Pins');
	});

	it('closes on click and stays closed until the pointer leaves', async () => {
		renderTooltip();
		const button = screen.getByRole('button');
		await userEvent.hover(button);
		await screen.findByRole('tooltip');

		await userEvent.click(button);
		await userEvent.hover(button);
		await waitFor(() =>
			expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
		);

		await userEvent.unhover(button);
		await userEvent.hover(button);
		expect(await screen.findByRole('tooltip')).toBeInTheDocument();
	});

	it('does not open on focus', async () => {
		renderTooltip();
		fireEvent.focus(screen.getByRole('button'));
		await act(async () => {});
		expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
	});
});
