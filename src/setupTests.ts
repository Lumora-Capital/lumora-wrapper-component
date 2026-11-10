import '@testing-library/jest-dom';

// Authenticated session for LumoraWrapper tests (avoids redirect/null render during session gate)
jest.mock('./lib/authUtils', () => {
	const actual = jest.requireActual('./lib/authUtils');
	return {
		...actual,
		isAuthenticated: jest.fn(() => ({
			isAuthenticated: true,
			error: null
		})),
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

// Silence expected auth/session logging
globalThis.console = {
	...console,
	log: jest.fn(),
	warn: jest.fn(),
	error: jest.fn()
};

// jsdom does not implement ResizeObserver (used for rail caption truncation checks)
globalThis.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};

// jsdom lacks PointerEvent; Testing Library falls back to Event and drops pointerType
if (typeof globalThis.PointerEvent === 'undefined') {
	class PointerEventPolyfill extends MouseEvent {
		pointerType: string;
		constructor(type: string, init: PointerEventInit = {}) {
			super(type, init);
			this.pointerType = init.pointerType ?? '';
		}
	}
	globalThis.PointerEvent =
		PointerEventPolyfill as unknown as typeof PointerEvent;
}
