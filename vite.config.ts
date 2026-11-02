import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const EXTERNAL_PACKAGES = [
	'axios',
	'radix-ui',
	'lucide-react',
	'class-variance-authority',
	'clsx',
	'tailwind-merge'
];

// Library build: `npm run build` bundles src/lib into dist/ (the stylesheet,
// dist/lumora-wrapper.css, is compiled by Tailwind afterwards: `build:css`)
export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'automatic',
			jsxImportSource: 'react'
		}),
		dts({
			insertTypesEntry: true,
			include: ['src/lib/**/*'],
			exclude: ['src/lib/**/*.test.*', 'src/lib/**/*.spec.*'],
			outDir: 'dist',
			rollupTypes: true,
			tsconfigPath: './tsconfig.build.json'
		})
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/lib/index.ts'),
			name: 'LumoraWrapperComponent',
			formats: ['es', 'umd'],
			fileName: format => `lumora-wrapper-component.${format}.js`
		},
		rollupOptions: {
			external: id => {
				// Externalize React and its JSX runtime modules
				if (
					id === 'react' ||
					id === 'react-dom' ||
					id === 'react/jsx-runtime' ||
					id === 'react/jsx-dev-runtime'
				) {
					return true;
				}
				// Externalize peer dependencies and dependencies (the host's
				// bundler resolves them, so one copy of Radix serves both)
				return EXTERNAL_PACKAGES.some(
					pkg => id === pkg || id.startsWith(`${pkg}/`)
				);
			},
			output: [
				{
					format: 'es',
					exports: 'named',
					preserveModules: false,
					entryFileNames: 'lumora-wrapper-component.es.js'
				},
				{
					format: 'umd',
					name: 'LumoraWrapperComponent',
					exports: 'named',
					globals: {
						react: 'React',
						'react-dom': 'ReactDOM',
						axios: 'axios',
						'radix-ui': 'RadixUI',
						'lucide-react': 'LucideReact',
						'class-variance-authority': 'ClassVarianceAuthority',
						clsx: 'clsx',
						'tailwind-merge': 'TailwindMerge'
					},
					entryFileNames: 'lumora-wrapper-component.umd.js'
				}
			]
		}
	}
});
