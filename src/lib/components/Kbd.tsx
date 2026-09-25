import Box from '@mui/material/Box';
import * as React from 'react';

/** Keyboard shortcut hint, e.g. ⌘ J. */
const Kbd: React.FC<{ keys: string[] }> = ({ keys }) => (
	<Box
		component='kbd'
		aria-hidden='true'
		sx={{
			display: 'inline-flex',
			alignItems: 'center',
			gap: 0.5,
			px: 0.75,
			height: 20,
			flexShrink: 0,
			border: '1px solid',
			borderColor: 'divider',
			borderRadius: '4px',
			bgcolor: 'background.paper',
			color: 'text.secondary',
			fontFamily: 'inherit',
			fontSize: 11,
			lineHeight: 1
		}}
	>
		{keys.map(key => (
			<span key={key}>{key}</span>
		))}
	</Box>
);

export default Kbd;
