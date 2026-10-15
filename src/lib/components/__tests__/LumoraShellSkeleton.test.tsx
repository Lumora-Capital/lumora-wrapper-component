import LumoraShellSkeleton from '../LumoraShellSkeleton';
import { render, screen } from './testUtils';

describe('LumoraShellSkeleton', () => {
	it('announces the loading shell as busy, with no spinner', () => {
		render(<LumoraShellSkeleton />);
		const status = screen.getByRole('status', { name: 'Checking session' });
		expect(status).toHaveAttribute('aria-busy', 'true');
		expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
	});

	it('draws fewer placeholders without a sidebar', () => {
		const { container, rerender } = render(<LumoraShellSkeleton />);
		const withSidebar =
			container.querySelectorAll('.MuiSkeleton-root').length;

		rerender(<LumoraShellSkeleton showSidebar={false} />);
		const withoutSidebar =
			container.querySelectorAll('.MuiSkeleton-root').length;

		expect(withSidebar).toBeGreaterThan(withoutSidebar);
	});
});
