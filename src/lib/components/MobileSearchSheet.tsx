import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import * as React from 'react';

interface MobileSearchSheetProps {
	open: boolean;
	onClose: () => void;
	/** The host's search component. */
	search: React.ReactNode;
}

/**
 * Mobile search: the host's search component in a sheet that slides down from
 * the top, with its first field focused so the keyboard opens right away.
 */
const MobileSearchSheet: React.FC<MobileSearchSheetProps> = ({
	open,
	onClose,
	search
}) => (
	<Drawer
		anchor='top'
		open={open}
		onClose={onClose}
		SlideProps={{
			onEntered: node =>
				(node as HTMLElement)
					.querySelector<HTMLElement>(
						'input, textarea, [contenteditable="true"]'
					)
					?.focus()
		}}
		slotProps={{
			paper: {
				'aria-label': 'Search',
				sx: {
					p: 2,
					pt: 'calc(16px + env(safe-area-inset-top, 0px))',
					borderBottomLeftRadius: '12px',
					borderBottomRightRadius: '12px'
				}
			} as object
		}}
	>
		<Stack
			direction='row'
			spacing={1}
			data-testid='mobile-search-sheet'
			sx={{ alignItems: 'center' }}
		>
			<Box sx={{ flex: '1 1 auto', minWidth: 0 }}>{search}</Box>
			<Button
				onClick={onClose}
				sx={{ flexShrink: 0, textTransform: 'none' }}
			>
				Cancel
			</Button>
		</Stack>
	</Drawer>
);

export default MobileSearchSheet;
