import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// Library build: `npm run build` bundles src/lib into dist/
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
				// Externalize peer dependencies
				if (
					id.startsWith('@mui/') ||
					id.startsWith('@emotion/') ||
					id === 'axios'
				) {
					return true;
				}
				return false;
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
						'@mui/material': 'MaterialUI',
						'@mui/icons-material': 'MaterialUIIcons',
						'@emotion/react': 'EmotionReact',
						'@emotion/styled': 'EmotionStyled',
						axios: 'axios'
					},
					entryFileNames: 'lumora-wrapper-component.umd.js'
				}
			]
		}
	}
});
