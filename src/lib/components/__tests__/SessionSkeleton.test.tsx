import SessionSkeleton, { type SessionSkeletonProps } from '../SessionSkeleton';
import { render, screen } from './testUtils';

const baseProps: SessionSkeletonProps = {
	isMobile: false,
	sidebarWidthPx: 84,
	mobileBarHeightPx: 56,
	sidebarSurface: '#ffffff',
	contentBackground: '#f2f9fc',
	contentPadding: '24px'
};

describe('SessionSkeleton', () => {
	it('announces the session check as busy', () => {
		render(<SessionSkeleton {...baseProps} />);
		const status = screen.getByRole('status', { name: 'Checking session' });
		expect(status).toHaveAttribute('aria-busy', 'true');
		expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
	});

	it('draws a rail on desktop and none on mobile', () => {
		const { container, rerender } = render(
			<SessionSkeleton {...baseProps} />
		);
		const desktopCount =
			container.querySelectorAll('.MuiSkeleton-root').length;

		rerender(<SessionSkeleton {...baseProps} isMobile />);
		const mobileCount =
			container.querySelectorAll('.MuiSkeleton-root').length;

		expect(desktopCount).toBeGreaterThan(mobileCount);
	});
});
