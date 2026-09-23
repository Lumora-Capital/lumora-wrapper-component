import LumoraWrapper, { type LumoraWrapperProps } from '../LumoraWrapper';
import {
	fireEvent,
	lumoraTestRequiredProps,
	mockSidebarLinks,
	render,
	screen,
	within
} from './testUtils';

const renderWrapper = (props: Partial<LumoraWrapperProps> = {}) =>
	render(
		<LumoraWrapper {...lumoraTestRequiredProps} {...props}>
			<div data-testid='test-content'>Test Content</div>
		</LumoraWrapper>
	);

describe('LumoraWrapper', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('Basic Rendering', () => {
		it('renders children', () => {
			renderWrapper();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('applies custom styles to the root container', () => {
			const { container } = renderWrapper({
				style: { backgroundColor: 'red' }
			});
			expect(container.firstElementChild).toHaveStyle({
				backgroundColor: 'rgb(255, 0, 0)'
			});
		});
	});

	describe('Brand and layout', () => {
		it('has no header on desktop; the brand lives in the sidebar', () => {
			renderWrapper({ appName: 'Test App' });
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
			expect(
				screen.getByTestId('sidebar-header-brand')
			).toBeInTheDocument();
		});

		it('makes the sidebar brand a button when onBrandClick is given', () => {
			const onBrandClick = jest.fn();
			renderWrapper({
				appName: 'Centra',
				logo: <div data-testid='app-logo'>Test Logo</div>,
				onBrandClick
			});
			const brand = screen.getByTestId('sidebar-header-brand');
			expect(brand.tagName).toBe('BUTTON');
			expect(brand).toHaveAccessibleName('Centra home');
			expect(within(brand).getByTestId('app-logo')).toBeInTheDocument();
			fireEvent.click(brand);
			expect(onBrandClick).toHaveBeenCalledTimes(1);
		});

		it('keeps the sidebar brand static without onBrandClick', () => {
			renderWrapper({ appName: 'Centra' });
			expect(screen.getByTestId('sidebar-header-brand').tagName).not.toBe(
				'BUTTON'
			);
		});

		it('floats the Nexa button when showAssistant is on', () => {
			const onAssistantClick = jest.fn();
			renderWrapper({ showAssistant: true, onAssistantClick });
			const nexa = screen.getByRole('button', {
				name: 'Toggle Nexa assistant'
			});
			expect(nexa).toHaveStyle({ position: 'fixed' });
			fireEvent.click(nexa);
			expect(onAssistantClick).toHaveBeenCalledTimes(1);
		});

		it('hides the Nexa button by default', () => {
			renderWrapper();
			expect(
				screen.queryByRole('button', { name: 'Toggle Nexa assistant' })
			).not.toBeInTheDocument();
		});
	});

	describe('User menu', () => {
		const openUserMenu = () =>
			fireEvent.click(
				screen.getByRole('button', { name: /account menu for riley/i })
			);

		it('opens settings, dark mode and logout from the user row', async () => {
			const onSettingsClick = jest.fn();
			renderWrapper({
				userName: 'Riley Carter',
				showThemeToggler: true,
				onThemeToggle: jest.fn(),
				onSettingsClick
			});
			openUserMenu();

			expect(
				await screen.findByRole('menuitem', { name: /settings/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('menuitemcheckbox', { name: /dark mode/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('menuitem', { name: /logout/i })
			).toBeInTheDocument();

			fireEvent.click(
				screen.getByRole('menuitem', { name: /settings/i })
			);
			expect(onSettingsClick).toHaveBeenCalledTimes(1);
		});

		it('toggles the theme from the dark mode switch', async () => {
			const onThemeToggle = jest.fn();
			renderWrapper({
				userName: 'Riley Carter',
				showThemeToggler: true,
				onThemeToggle,
				theme: 'dark'
			});
			openUserMenu();

			const darkMode = await screen.findByRole('menuitemcheckbox', {
				name: /dark mode/i
			});
			expect(darkMode).toHaveAttribute('aria-checked', 'true');
			fireEvent.click(darkMode);
			expect(onThemeToggle).toHaveBeenCalledTimes(1);
		});

		it('leaves out dark mode unless showThemeToggler is set', async () => {
			renderWrapper({ userName: 'Riley Carter' });
			openUserMenu();
			await screen.findByRole('menuitem', { name: /logout/i });
			expect(
				screen.queryByRole('menuitemcheckbox', { name: /dark mode/i })
			).not.toBeInTheDocument();
		});

		it('hides the user row when showProfile is false', () => {
			renderWrapper({ userName: 'Riley Carter', showProfile: false });
			expect(
				screen.queryByTestId('sidebar-user')
			).not.toBeInTheDocument();
		});
	});

	describe('Search', () => {
		it('renders nothing without a search component', () => {
			renderWrapper();
			expect(
				screen.queryByTestId('sidebar-search')
			).not.toBeInTheDocument();
		});

		it('opens the search component beside the rail', async () => {
			renderWrapper({
				searchComponent: <input placeholder='Global search' />
			});
			fireEvent.click(screen.getByRole('button', { name: 'Search' }));
			expect(
				await screen.findByPlaceholderText('Global search')
			).toBeInTheDocument();
		});

		it('still renders the deprecated customNavbar in the search slot', async () => {
			const Legacy = ({ label }: { label: string }) => (
				<input placeholder={label} />
			);
			renderWrapper({
				sidebarVariant: 'collapsible',
				customNavbar: Legacy,
				customNavbarProps: { label: 'Legacy search' }
			});
			expect(
				screen.getByPlaceholderText('Legacy search')
			).toBeInTheDocument();
		});
	});

	describe('Sidebar', () => {
		it('renders sidebar links with their paths and icons', () => {
			renderWrapper({ sidebarLinks: mockSidebarLinks });

			expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
				'href',
				'/home'
			);
			expect(
				screen.getByRole('link', { name: /settings/i })
			).toHaveAttribute('href', '/settings');
			expect(
				screen.getByRole('link', { name: /profile/i })
			).toHaveAttribute('href', '/profile');

			expect(screen.getByTestId('home-icon')).toBeInTheDocument();
			expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
			expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
		});

		it('does not render the sidebar when showSidebar is false', () => {
			renderWrapper({
				showSidebar: false,
				sidebarLinks: mockSidebarLinks
			});
			expect(screen.queryByRole('link')).not.toBeInTheDocument();
		});

		it('handles an empty sidebar links array', () => {
			renderWrapper({ sidebarLinks: [] });
			expect(
				document.querySelector('.MuiDrawer-root')
			).toBeInTheDocument();
			expect(screen.queryByRole('link')).not.toBeInTheDocument();
		});

		it('applies custom sidebar styles', () => {
			renderWrapper({ sidebarStyles: { backgroundColor: 'green' } });
			expect(document.querySelector('.MuiDrawer-root')).toHaveStyle({
				backgroundColor: 'rgb(0, 128, 0)'
			});
		});
	});

	describe('Content Area', () => {
		it('starts the content at the top on desktop', () => {
			renderWrapper();
			expect(screen.getByRole('main')).toHaveStyle({ marginTop: '0px' });
		});

		it('applies custom content styles', () => {
			renderWrapper({ contentStyles: { padding: '20px' } });
			expect(screen.getByRole('main')).toHaveStyle('padding: 20px');
		});
	});

	describe('Chat sidebar', () => {
		it('renders GlobalChatSidebar only while useChatSidebar reports open', () => {
			const GlobalChatSidebar = () => <div data-testid='chat' />;
			const { rerender } = renderWrapper({
				GlobalChatSidebar,
				useChatSidebar: () => ({ isOpen: false })
			});
			expect(screen.queryByTestId('chat')).not.toBeInTheDocument();

			rerender(
				<LumoraWrapper
					{...lumoraTestRequiredProps}
					GlobalChatSidebar={GlobalChatSidebar}
					useChatSidebar={() => ({ isOpen: true })}
				>
					<div />
				</LumoraWrapper>
			);
			expect(screen.getByTestId('chat')).toBeInTheDocument();
		});
	});

	describe('Notifications drawer', () => {
		it('opens the host-provided content from the notifications row', () => {
			const NotificationSidebarContent = ({
				onClose
			}: {
				onClose: () => void;
			}) => (
				<button type='button' onClick={onClose}>
					close notifications
				</button>
			);
			renderWrapper({
				showNotifications: true,
				notificationCount: 2,
				NotificationSidebarContent
			});

			expect(
				screen.queryByText('close notifications')
			).not.toBeInTheDocument();
			fireEvent.click(screen.getByRole('button', { name: /notif/i }));
			expect(screen.getByText('close notifications')).toBeInTheDocument();
		});
	});
});
