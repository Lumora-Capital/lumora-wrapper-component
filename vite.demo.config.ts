import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Playground app (index.html -> src/main.tsx): `npm run dev` / `npm run build:demo`
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist-demo',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html')
			}
		}
	}
});
