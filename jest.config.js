export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	testEnvironmentOptions: {
		url: 'http://localhost:3000',
		resources: 'usable'
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^js-cookie$': '<rootDir>/src/testMocks/js-cookie.ts',
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
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.(test|spec).(ts|tsx)',
		'<rootDir>/src/**/*.(test|spec).(ts|tsx)'
	],
	testPathIgnorePatterns: ['/src/.*/__tests__/testUtils\\.tsx$'],
	collectCoverageFrom: [
		'src/**/*.(ts|tsx)',
		'!src/**/*.d.ts',
		'!src/main.tsx',
		'!src/setupTests.ts'
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov', 'html']
};
