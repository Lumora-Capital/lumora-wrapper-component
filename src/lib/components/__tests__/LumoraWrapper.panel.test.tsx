import { useMediaQuery } from '@mui/material';
import LumoraWrapper, {
	type NotificationSidebarContentProps
} from '../LumoraWrapper';
import {
	fireEvent,
	hoverSidebarOpen,
	lumoraTestRequiredProps,
	mockSidebarLinks,
	render,
	screen,
	within
} from './testUtils';

// Desktop viewport (the panel variant only replaces the navbar on desktop).
jest.mock('@mui/material', () => ({
	...jest.requireActual('@mui/material'),
	useMediaQuery: jest.fn()
}));
const mockUseMediaQuery = useMediaQuery as jest.MockedFunction<
	typeof useMediaQuery
>;

const renderPanel = (extraProps: Record<string, unknown> = {}) => {
	mockUseMediaQuery.mockReturnValue(false);
	return render(
		<LumoraWrapper
			{...lumoraTestRequiredProps}
			sidebarVariant='panel'
			sidebarLinks={mockSidebarLinks}
			appName='Test App'
			userName='Riley Carter'
			userRole='ADMIN'
			notificationCount={2}
			{...extraProps}
		>
			<div data-testid='test-content'>Test Content</div>
		</LumoraWrapper>
	);
};

const openMenu = () => {
	fireEvent.click(screen.getByTestId('panel-user-button'));
	return screen.getByTestId('account-menu');
};

describe("LumoraWrapper sidebarVariant='panel'", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		window.localStorage.clear();
	});

	it('renders the panel sidebar without a navbar on desktop', () => {
		renderPanel();
		expect(screen.getByTestId('panel-sidebar')).toBeInTheDocument();
		expect(screen.queryByRole('banner')).toBeNull();
		expect(screen.getByTestId('test-content')).toBeInTheDocument();
	});

	it('passes userEmail through to the account menu header only', () => {
		renderPanel({ userEmail: 'riley.carter@example.com' });
		expect(screen.getByTestId('panel-user-button')).not.toHaveTextContent(
			'riley.carter@example.com'
		);
		const menu = openMenu();
		expect(
			within(menu).getByTestId('account-menu-email')
		).toHaveTextContent('riley.carter@example.com');
	});

	describe('updates drawer', () => {
		const Content = jest.fn(
			({ initialTab, onClose }: NotificationSidebarContentProps) => (
				<div data-testid='updates-content'>
					<span data-testid='updates-tab'>{initialTab}</span>
					<button type='button' onClick={onClose}>
						close
					</button>
				</div>
			)
		);

		it('opens on the notifications tab from the footer bell', async () => {
			renderPanel({ NotificationSidebarContent: Content });
			await hoverSidebarOpen();
			fireEvent.click(screen.getByLabelText('Notifications, 2 unread'));
			expect(await screen.findByTestId('updates-tab')).toHaveTextContent(
				'notifications'
			);
		});

		it("has no Notifications, What's New or Submit a request entries in the account menu", () => {
			renderPanel({
				NotificationSidebarContent: Content,
				whatsNewCount: 1,
				onSubmitRequestClick: jest.fn()
			});
			openMenu();
			expect(screen.queryByTestId('menu-item-notifications')).toBeNull();
			expect(screen.queryByTestId('menu-item-whats-new')).toBeNull();
			expect(screen.queryByTestId('menu-item-submit-request')).toBeNull();
		});

		it('falls back to the plain callback on the bell when no drawer content is provided', async () => {
			const onNotificationsClick = jest.fn();
			renderPanel({ onNotificationsClick });
			await hoverSidebarOpen();
			fireEvent.click(screen.getByLabelText('Notifications, 2 unread'));
			expect(onNotificationsClick).toHaveBeenCalledTimes(1);
			expect(screen.queryByTestId('updates-content')).toBeNull();
		});
	});

	describe('pass-through props', () => {
		it('has no built-in Settings; userMenuItems rows navigate via onLinkClick', () => {
			const onSettingsClick = jest.fn();
			const onLinkClick = jest.fn();
			const { unmount } = renderPanel({ onSettingsClick });
			openMenu();
			expect(screen.queryByTestId('menu-item-settings')).toBeNull();
			unmount();

			renderPanel({
				onLinkClick,
				userMenuItems: [
					{ key: 'settings', label: 'Settings', path: '/settings' }
				]
			});
			openMenu();
			fireEvent.click(screen.getByTestId('menu-item-settings'));
			expect(onLinkClick).toHaveBeenCalledWith('/settings');
			expect(onSettingsClick).not.toHaveBeenCalled();
		});

		it('has no platform switcher', () => {
			renderPanel();
			openMenu();
			expect(screen.queryByTestId('menu-item-platforms')).toBeNull();
		});
	});
});
