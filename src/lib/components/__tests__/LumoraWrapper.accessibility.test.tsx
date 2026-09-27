import LumoraWrapper, { type LumoraWrapperProps } from '../LumoraWrapper';
import {
	fireEvent,
	lumoraTestRequiredProps,
	mockSidebarLinks,
	render,
	screen
} from './testUtils';

const renderWrapper = (props: Partial<LumoraWrapperProps> = {}) =>
	render(
		<LumoraWrapper
			{...lumoraTestRequiredProps}
			sidebarLinks={mockSidebarLinks}
			{...props}
		>
			<h1>Page Title</h1>
			<h2>Section Title</h2>
		</LumoraWrapper>
	);

describe('LumoraWrapper - Accessibility', () => {
	beforeEach(() => {
		window.localStorage.clear();
	});

	describe('Landmarks', () => {
		it('renders the content in a main landmark and no banner on desktop', () => {
			renderWrapper();
			expect(screen.getByRole('main')).toBeInTheDocument();
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
		});

		it('labels the collapsible sidebar as navigation', () => {
			renderWrapper({ sidebarVariant: 'collapsible' });
			expect(
				screen.getByRole('navigation', { name: 'Main sidebar' })
			).toBeInTheDocument();
		});

		it('keeps the page heading hierarchy to the host (brand is not a heading level 1)', () => {
			renderWrapper({ sidebarVariant: 'collapsible', appName: 'Centra' });
			expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
				'Page Title'
			);
			expect(screen.getByText('Centra').tagName).toBe('H6');
		});
	});

	describe('Accessible names', () => {
		it('names every rail link after its text', () => {
			renderWrapper();
			for (const name of [/home/i, /settings/i, /profile/i]) {
				expect(screen.getByRole('link', { name })).toBeInTheDocument();
			}
		});

		it('announces the unread count on the notifications control', () => {
			renderWrapper({ notificationCount: 4 });
			expect(
				screen.getByRole('button', { name: 'Notifications, 4 unread' })
			).toBeInTheDocument();
		});

		it('names the search icon on the narrow rail', () => {
			renderWrapper({ searchComponent: <input aria-label='Find' /> });
			expect(
				screen.getByRole('button', { name: 'Search' })
			).toBeInTheDocument();
		});
	});

	describe('Keyboard', () => {
		it('opens the user menu from a real, focusable button', async () => {
			renderWrapper({ userName: 'Riley Carter' });
			const user = screen.getByRole('button', {
				name: 'Account menu for Riley Carter'
			});
			expect(user.tagName).toBe('BUTTON');
			expect(user).toHaveAttribute('aria-haspopup', 'menu');
			expect(user).toHaveAttribute('aria-expanded', 'false');

			user.focus();
			expect(user).toHaveFocus();
			fireEvent.click(user);
			expect(await screen.findByRole('menu')).toBeInTheDocument();
			expect(user).toHaveAttribute('aria-expanded', 'true');
		});
	});
});
