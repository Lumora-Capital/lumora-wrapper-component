import { Tooltip } from '../ui/tooltip';
import { act, fireEvent, render, screen } from './testUtils';

// Radix warns about a controlled/uncontrolled switch only in development
// builds, so this guards the behaviour the always-controlled root must keep.
describe('Tooltip', () => {
	it('opens on focus again after being disabled', () => {
		const tooltip = (disabled: boolean) => (
			<Tooltip
				title='Notifications'
				disabled={disabled}
				delayDuration={0}
			>
				<button type='button'>Bell</button>
			</Tooltip>
		);
		const { rerender } = render(tooltip(false));
		rerender(tooltip(true));
		rerender(tooltip(false));
		act(() => {
			fireEvent.focus(screen.getByRole('button', { name: 'Bell' }));
		});
		expect(screen.getByRole('tooltip')).toHaveTextContent('Notifications');
	});

	it('stays closed while disabled', () => {
		render(
			<Tooltip title='Notifications' disabled delayDuration={0}>
				<button type='button'>Bell</button>
			</Tooltip>
		);
		act(() => {
			fireEvent.focus(screen.getByRole('button', { name: 'Bell' }));
		});
		expect(screen.queryByRole('tooltip')).toBeNull();
	});

	it('does not reopen by itself when switched back on', () => {
		const tooltip = (disabled: boolean) => (
			<Tooltip
				title='Notifications'
				disabled={disabled}
				delayDuration={0}
			>
				<button type='button'>Bell</button>
			</Tooltip>
		);
		const { rerender } = render(tooltip(false));
		act(() => {
			fireEvent.focus(screen.getByRole('button', { name: 'Bell' }));
		});
		expect(screen.getByRole('tooltip')).toBeInTheDocument();
		rerender(tooltip(true));
		rerender(tooltip(false));
		expect(screen.queryByRole('tooltip')).toBeNull();
	});
});
