export default {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	testEnvironmentOptions: {
		url: 'http://localhost:3000'
	},
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy'
	},
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.jest.json'
			}
		]
	},
	testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
	collectCoverageFrom: ['src/lib/**/*.(ts|tsx)', '!src/lib/**/__tests__/**'],
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov', 'html']
};
