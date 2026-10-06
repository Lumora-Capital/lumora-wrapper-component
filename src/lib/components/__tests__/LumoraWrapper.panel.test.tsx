import { useMediaQuery } from '@mui/material';
import LumoraWrapper, {
	type LumoraPlatform,
	type NotificationSidebarContentProps
} from '../LumoraWrapper';
import {
	fireEvent,
	hoverSidebarOpen,
	lumoraTestRequiredProps,
	mockSidebarLinks,
	render,
	screen,
	waitFor,
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

const platforms: LumoraPlatform[] = [
	{ key: 'centra', name: 'Centra', url: 'https://centra.test' },
	{ key: 'polymer', name: 'Polymer', url: 'https://polymer.test' }
];

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

	it('closes the panel and its account menu when the pointer moves off the panel', async () => {
		renderPanel();
		await hoverSidebarOpen();
		openMenu();

		// Over the panel, the menu's full-screen backdrop keeps it open
		const backdrop = document.querySelector('.MuiBackdrop-root')!;
		const panel = screen.getByTestId('sidebar-hover-panel');
		jest.spyOn(panel, 'getBoundingClientRect').mockReturnValue(
			new DOMRect(0, 0, 288, 800)
		);
		fireEvent.mouseMove(backdrop, { clientX: 100, clientY: 400 });
		expect(panel).toHaveAttribute('data-expanded', 'true');

		// Off the panel, over the page: both go
		fireEvent.mouseMove(backdrop, { clientX: 600, clientY: 400 });
		expect(panel).toHaveAttribute('data-expanded', 'false');
		await waitFor(() =>
			expect(screen.queryByTestId('account-menu')).not.toBeInTheDocument()
		);
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
		it('wires onSettingsClick / showSettings into the account menu', () => {
			const onSettingsClick = jest.fn();
			const { unmount } = renderPanel({ onSettingsClick });
			openMenu();
			fireEvent.click(screen.getByTestId('menu-item-settings'));
			expect(onSettingsClick).toHaveBeenCalledTimes(1);
			unmount();

			renderPanel({ onSettingsClick, showSettings: false });
			openMenu();
			expect(screen.queryByTestId('menu-item-settings')).toBeNull();
		});

		it('wires platforms, currentPlatformKey and onPlatformSelect', async () => {
			const onPlatformSelect = jest.fn();
			renderPanel({
				platforms,
				currentPlatformKey: 'centra',
				onPlatformSelect
			});
			openMenu();
			fireEvent.click(screen.getByTestId('menu-item-platforms'));
			expect(screen.getByTestId('platform-item-centra')).toHaveAttribute(
				'aria-current',
				'true'
			);
			fireEvent.click(screen.getByTestId('platform-item-polymer'));
			expect(onPlatformSelect).toHaveBeenCalledWith(platforms[1]);
			await waitFor(() =>
				expect(screen.queryByTestId('account-menu')).toBeNull()
			);
		});

		it('wires settingsSections and onLinkClick routing', () => {
			const onLinkClick = jest.fn();
			renderPanel({
				settingsSections: [
					{
						title: 'Admin',
						items: [{ text: 'Users', path: '/admin/users' }]
					}
				],
				onLinkClick
			});
			openMenu();
			fireEvent.click(screen.getByTestId('menu-item-settings'));
			expect(
				screen.getByRole('dialog', { name: 'Settings' })
			).toBeInTheDocument();
			// Sections start open.
			fireEvent.click(screen.getByTestId('settings-item-users'));
			expect(onLinkClick).toHaveBeenCalledWith('/admin/users');
		});

		it('hides the platform switcher when no platforms are given', () => {
			renderPanel();
			openMenu();
			expect(screen.queryByTestId('menu-item-platforms')).toBeNull();
		});
	});
});
