import * as React from 'react';
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

		it('puts Ask Nexa in the sidebar by default, with its shortcut hint', () => {
			const onAssistantClick = jest.fn();
			renderWrapper({ showAssistant: true, onAssistantClick });
			const nexa = screen.getByRole('button', { name: 'Ask Nexa' });
			expect(nexa).toHaveAttribute('data-variant', 'sidebar-icon');
			fireEvent.click(nexa);
			expect(onAssistantClick).toHaveBeenCalledTimes(1);
		});

		it('floats Nexa with assistantPlacement="floating"', () => {
			renderWrapper({
				showAssistant: true,
				assistantPlacement: 'floating'
			});
			expect(
				screen.getByRole('button', { name: 'Ask Nexa' })
			).toHaveStyle({
				position: 'fixed'
			});
		});

		it('opens Nexa with Ctrl/⌘ + J, unless the shortcut is off', () => {
			const onAssistantClick = jest.fn();
			const { unmount } = renderWrapper({
				showAssistant: true,
				onAssistantClick
			});
			fireEvent.keyDown(window, { key: 'j', ctrlKey: true });
			expect(onAssistantClick).toHaveBeenCalledTimes(1);
			fireEvent.keyDown(window, { key: 'j' });
			expect(onAssistantClick).toHaveBeenCalledTimes(1);
			unmount();

			renderWrapper({
				showAssistant: true,
				onAssistantClick,
				assistantShortcut: false
			});
			fireEvent.keyDown(window, { key: 'j', metaKey: true });
			expect(onAssistantClick).toHaveBeenCalledTimes(1);
		});

		it('hides Nexa by default', () => {
			renderWrapper();
			expect(
				screen.queryByRole('button', { name: 'Ask Nexa' })
			).not.toBeInTheDocument();
		});
	});

	describe('Content padding', () => {
		it('defaults to the 40px layout spacing from md up', () => {
			renderWrapper();
			expect(screen.getByRole('main')).toHaveStyle({
				padding: 'var(--lumora-content-padding)'
			});
		});

		it('lets full-bleed pages drop the padding', () => {
			renderWrapper({ contentPadding: 0 });
			expect(
				screen
					.getByRole('main')
					.style.getPropertyValue('--lumora-content-padding') ||
					getComputedStyle(screen.getByRole('main')).getPropertyValue(
						'--lumora-content-padding'
					)
			).toBe('0px');
		});
	});

	describe('User menu', () => {
		const openUserMenu = () =>
			fireEvent.click(
				screen.getByRole('button', { name: /account menu for riley/i })
			);

		it('lists notifications, host items, settings, theme and log out', async () => {
			const onSettingsClick = jest.fn();
			const onWhatsNew = jest.fn();
			renderWrapper({
				userName: 'Riley Carter',
				notificationCount: 25,
				showThemeToggler: true,
				onThemeToggle: jest.fn(),
				onSettingsClick,
				userMenuItems: [
					{
						key: 'whats-new',
						label: "What's New",
						badge: 1,
						onClick: onWhatsNew
					}
				]
			});
			openUserMenu();

			const labels = (await screen.findAllByRole('menuitem')).map(
				item => item.textContent
			);
			expect(labels).toEqual([
				'Notifications25',
				"What's New1",
				'Settings',
				'Log out'
			]);
			expect(
				screen.getByRole('group', { name: 'Theme' })
			).toBeInTheDocument();

			fireEvent.click(
				screen.getByRole('menuitem', { name: /what's new/i })
			);
			expect(onWhatsNew).toHaveBeenCalledTimes(1);
			openUserMenu();
			fireEvent.click(
				await screen.findByRole('menuitem', { name: /settings/i })
			);
			expect(onSettingsClick).toHaveBeenCalledTimes(1);
		});

		it('switches the theme from the Light / Dark control', async () => {
			const onThemeToggle = jest.fn();
			renderWrapper({
				userName: 'Riley Carter',
				showThemeToggler: true,
				onThemeToggle,
				theme: 'dark'
			});
			openUserMenu();

			const dark = await screen.findByRole('button', { name: 'Dark' });
			expect(dark).toHaveAttribute('aria-pressed', 'true');
			fireEvent.click(dark);
			expect(onThemeToggle).not.toHaveBeenCalled();
			fireEvent.click(screen.getByRole('button', { name: 'Light' }));
			expect(onThemeToggle).toHaveBeenCalledTimes(1);
		});

		it('leaves out the theme control unless showThemeToggler is set', async () => {
			renderWrapper({ userName: 'Riley Carter' });
			openUserMenu();
			await screen.findByRole('menuitem', { name: /log out/i });
			expect(
				screen.queryByRole('group', { name: 'Theme' })
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

	describe('Chat panel', () => {
		const Chat = () => {
			// State that must survive closing and reopening the popup
			const [draft, setDraft] = React.useState('');
			return (
				<input
					data-testid='chat'
					value={draft}
					onChange={e => setDraft(e.target.value)}
				/>
			);
		};
		const renderChat = (
			isOpen: boolean,
			props: Partial<LumoraWrapperProps> = {}
		) => (
			<LumoraWrapper
				{...lumoraTestRequiredProps}
				GlobalChatSidebar={Chat}
				useChatSidebar={() => ({ isOpen })}
				{...props}
			>
				<div data-testid='test-content'>Test Content</div>
			</LumoraWrapper>
		);

		it('opens as a floating popup that leaves the content width alone', () => {
			const { rerender } = render(renderChat(false));
			expect(screen.queryByTestId('chat')).not.toBeInTheDocument();
			const width = screen.getByRole('main').style.width;

			rerender(renderChat(true));
			const popup = screen.getByRole('dialog', { name: 'Nexa chat' });
			expect(popup).toHaveStyle({ position: 'fixed' });
			expect(popup).toContainElement(screen.getByTestId('chat'));
			expect(screen.getByRole('main').style.width).toBe(width);
			expect(screen.getByRole('main')).not.toContainElement(popup);
		});

		it('keeps the chat mounted (and its state) after closing', () => {
			const { rerender } = render(renderChat(true));
			fireEvent.change(screen.getByTestId('chat'), {
				target: { value: 'half-typed question' }
			});
			rerender(renderChat(false));
			rerender(renderChat(true));
			expect(screen.getByTestId('chat')).toHaveValue(
				'half-typed question'
			);
		});

		it('calls onChatClose on Esc while open', () => {
			const onChatClose = jest.fn();
			render(renderChat(true, { onChatClose }));
			fireEvent.keyDown(window, { key: 'Escape' });
			expect(onChatClose).toHaveBeenCalledTimes(1);
		});

		it('still supports the inline column with chatPanelMode="inline"', () => {
			render(renderChat(true, { chatPanelMode: 'inline' }));
			expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
			expect(screen.getByRole('main')).toContainElement(
				screen.getByTestId('chat')
			);
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
