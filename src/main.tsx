import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// The shell's stylesheet (what hosts import as
// '@lumora/lumora-wrapper-component/styles.css'), then the playground's own
import './lib/styles.css';
import './demo/demo.css';
import DemoApp from './demo/DemoApp';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<DemoApp />
	</StrictMode>
);
