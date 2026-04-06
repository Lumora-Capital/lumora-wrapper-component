import LumoraWrapper from '../LumoraWrapper';
import { lumoraTestRequiredProps, render, screen } from './testUtils';
import '@testing-library/jest-dom';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockAxiosInstance = {
	interceptors: {
		request: { use: jest.fn() },
		response: { use: jest.fn() }
	},
	post: jest.fn().mockResolvedValue({
		data: { success: true, accessToken: 'new-token' }
	})
};

// Mock localStorage (configurable so other suites are not blocked if order changes)
const mockLocalStorage = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	removeItem: jest.fn(),
	clear: jest.fn()
};

Object.defineProperty(window, 'localStorage', {
	value: mockLocalStorage,
	configurable: true,
	writable: true
});

describe('LumoraWrapper - Token Refresh Integration', () => {
	beforeEach(() => {
		jest.clearAllMocks();

		// Reset localStorage mocks
		mockLocalStorage.getItem.mockReturnValue(null);
		mockLocalStorage.setItem.mockClear();
		mockLocalStorage.removeItem.mockClear();

		mockedAxios.create.mockReturnValue(mockAxiosInstance as any);
		mockAxiosInstance.post.mockResolvedValue({
			data: { success: true, accessToken: 'new-token' }
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('Component Integration', () => {
		it('renders without errors when enableRefreshToken is true', () => {
			const { container } = render(
				<LumoraWrapper {...lumoraTestRequiredProps} enableRefreshToken={true}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			expect(container).toBeInTheDocument();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('renders without errors when enableRefreshToken is false', () => {
			const { container } = render(
				<LumoraWrapper {...lumoraTestRequiredProps} enableRefreshToken={false}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			expect(container).toBeInTheDocument();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('handles enableRefreshToken prop changes', () => {
			const { rerender } = render(
				<LumoraWrapper {...lumoraTestRequiredProps} enableRefreshToken={false}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Change prop to true
			rerender(
				<LumoraWrapper {...lumoraTestRequiredProps} enableRefreshToken={true}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Component should still render
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});
	});

	describe('API Client Integration', () => {
		it('axios client module can be loaded', () => {
			expect(() => {
				require('../../axiosClient');
			}).not.toThrow();
		});

		it('handles missing tokens gracefully', () => {
			// No tokens in localStorage
			mockLocalStorage.getItem.mockReturnValue(null);

			const { container } = render(
				<LumoraWrapper {...lumoraTestRequiredProps} enableRefreshToken={true}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Component should render without errors even without tokens
			expect(container).toBeInTheDocument();
		});

		it('handles tokens in localStorage', () => {
			// Mock tokens in localStorage
			mockLocalStorage.getItem.mockImplementation(key => {
				if (key === 'accessToken') return 'test-access-token';
				if (key === 'refreshToken') return 'test-refresh-token';
				return null;
			});

			const { container } = render(
				<LumoraWrapper {...lumoraTestRequiredProps} enableRefreshToken={true}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Component should render without errors with tokens
			expect(container).toBeInTheDocument();
		});
	});

});
