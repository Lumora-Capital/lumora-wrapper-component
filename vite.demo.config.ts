import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';

// Playground app (index.html -> src/main.tsx): `npm run dev` / `npm run build:demo`
export default defineConfig({
	plugins: [react()],
	// Tailwind through PostCSS: the shell's stylesheet and the playground's
	// are two separate compiles (vite 4 has no @tailwindcss/vite)
	css: { postcss: { plugins: [tailwindcss()] } },
	build: {
		outDir: 'dist-demo',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html')
			}
		}
	}
});
