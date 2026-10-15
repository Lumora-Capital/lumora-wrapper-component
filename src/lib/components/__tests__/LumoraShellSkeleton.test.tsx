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

	describe('with darkModeSelector', () => {
		const SELECTOR = 'html[data-color-scheme="dark"]';
		const statuses = () =>
			screen.getAllByRole('status', { hidden: true, name: 'Checking session' });

		afterEach(() => {
			document.documentElement.removeAttribute('data-color-scheme');
		});

		it('shows the light shell while the page is light', () => {
			render(<LumoraShellSkeleton darkModeSelector={SELECTOR} />);
			const [light, dark] = statuses();
			expect(light).toBeVisible();
			expect(dark).not.toBeVisible();
			expect(screen.getAllByRole('status')).toHaveLength(1);
		});

		it('shows the dark shell once the selector matches, whatever theme says', () => {
			document.documentElement.setAttribute('data-color-scheme', 'dark');
			render(<LumoraShellSkeleton theme='light' darkModeSelector={SELECTOR} />);
			const [light, dark] = statuses();
			expect(light).not.toBeVisible();
			expect(dark).toBeVisible();
		});

		it('draws the same markup for either theme, so server HTML hydrates as is', () => {
			const { container, rerender } = render(
				<LumoraShellSkeleton theme='light' darkModeSelector={SELECTOR} />
			);
			const asLight = container.innerHTML;
			rerender(<LumoraShellSkeleton theme='dark' darkModeSelector={SELECTOR} />);
			expect(container.innerHTML).toBe(asLight);
		});

		it('gives each mode its own content background', () => {
			render(
				<LumoraShellSkeleton
					darkModeSelector={SELECTOR}
					contentBackgroundColor={{ light: 'rgb(1, 2, 3)', dark: 'rgb(4, 5, 6)' }}
				/>
			);
			const [light, dark] = statuses();
			expect(light).toHaveStyle({ backgroundColor: 'rgb(1, 2, 3)' });
			expect(dark).toHaveStyle({ backgroundColor: 'rgb(4, 5, 6)' });
		});
	});
});

