import { getCurrentUser, isAuthenticated } from '../../authUtils';
import { createAxiosClient } from '../../axiosClient';
import { validateAndRefreshTokens } from '../../tokenValidator';
import LumoraWrapper, { type LumoraWrapperProps } from '../LumoraWrapper';
import {
	fireEvent,
	lumoraTestRequiredProps,
	render,
	screen,
	waitFor
} from './testUtils';

// authUtils' session checks are mocked in setupTests.ts (authenticated by default)
jest.mock('../../tokenValidator', () => ({
	validateAndRefreshTokens: jest.fn().mockResolvedValue(true)
}));
jest.mock('../../axiosClient', () => ({
	createAxiosClient: jest.fn(() => ({}))
}));

const renderWrapper = (props: Partial<LumoraWrapperProps> = {}) =>
	render(
		<LumoraWrapper {...lumoraTestRequiredProps} {...props}>
			<div data-testid='test-content'>Test Content</div>
		</LumoraWrapper>
	);

describe('LumoraWrapper - session', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('session gate', () => {
		it('renders children when a session exists', () => {
			renderWrapper();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
			expect(
				lumoraTestRequiredProps.redirectToLogin
			).not.toHaveBeenCalled();
		});

		it('redirects to login and renders nothing without a session', () => {
			(isAuthenticated as jest.Mock).mockReturnValueOnce({
				isAuthenticated: false,
				error: null
			});
			const { container } = renderWrapper();

			expect(lumoraTestRequiredProps.redirectToLogin).toHaveBeenCalled();
			expect(container).toBeEmptyDOMElement();
		});

		it('passes the stored user to onVerify once', () => {
			const onVerify = jest.fn();
			(getCurrentUser as jest.Mock).mockReturnValueOnce({
				user: { name: 'Riley', email: 'riley@example.com' },
				error: null
			});
			renderWrapper({ onVerify });

			expect(onVerify).toHaveBeenCalledTimes(1);
			expect(onVerify).toHaveBeenCalledWith({
				name: 'Riley',
				email: 'riley@example.com',
				profilePicture: '',
				role: ''
			});
		});
	});

	describe('token refresh', () => {
		it('creates the API client from apiBaseUrl', () => {
			renderWrapper({ apiBaseUrl: 'https://api.example.com' });
			expect(createAxiosClient).toHaveBeenCalledWith(
				'https://api.example.com'
			);
		});

		it('does not validate tokens when enableRefreshToken is false', () => {
			renderWrapper({ enableRefreshToken: false });
			expect(validateAndRefreshTokens).not.toHaveBeenCalled();
		});

		it('validates tokens on mount when enableRefreshToken is true', async () => {
			renderWrapper({ enableRefreshToken: true });
			await waitFor(() =>
				expect(validateAndRefreshTokens).toHaveBeenCalledWith(
					expect.anything(),
					lumoraTestRequiredProps.redirectToLogin
				)
			);
		});
	});

	describe('logout', () => {
		it('calls onLogout from the user menu', async () => {
			const onLogout = jest.fn();
			renderWrapper({ onLogout, userName: 'Riley Carter' });

			fireEvent.click(
				screen.getByRole('button', { name: /account menu for riley/i })
			);
			fireEvent.click(
				await screen.findByRole('menuitem', { name: /logout/i })
			);
			expect(onLogout).toHaveBeenCalled();
		});
	});
});
