import '@testing-library/jest-dom';

// Authenticated session for LumoraWrapper tests (avoids redirect/null render during session gate)
jest.mock('./lib/authUtils', () => {
	const actual = jest.requireActual('./lib/authUtils');
	return {
		...actual,
		isAuthenticated: jest.fn(() => ({ isAuthenticated: true, error: null })),
		getCurrentUser: jest.fn(() => ({
			user: {
				name: 'Test User',
				email: 'test@example.com',
				profilePicture: '',
				role: 'user'
			},
			error: null
		}))
	};
});

// Mock fetch globally
globalThis.fetch = jest.fn();

// Mock Response constructor
globalThis.Response = class Response {
	ok: boolean;
	status: number;
	statusText: string;
	json: () => Promise<any>;

	constructor(body?: any, init?: ResponseInit) {
		this.ok = init?.status ? init.status >= 200 && init.status < 300 : true;
		this.status = init?.status || 200;
		this.statusText = init?.statusText || 'OK';
		this.json = () => Promise.resolve(body);
	}
} as any;

// Mock console methods to avoid noise in tests
globalThis.console = {
	...console,
	log: jest.fn(),
	warn: jest.fn(),
	error: jest.fn()
};
