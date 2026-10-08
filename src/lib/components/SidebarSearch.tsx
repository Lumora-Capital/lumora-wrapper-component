import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

const FOCUSABLE = 'input, textarea, [contenteditable="true"]';

/** Focus the host search field inside `container`, if it has one. */
const focusFirstField = (container: HTMLElement | null) => {
	container?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
};

interface SidebarSearchProps {
	/** The host app's search component. */
	search: React.ReactNode;
	/**
	 * `full`: the component inline (the mobile menu). `popover`: an icon that
	 * opens the component beside the rail (every desktop sidebar).
	 */
	mode: 'full' | 'popover';
	color: string;
	hoverColor: string;
}

/** Slot for the host's global search, under the brand and above the links. */
const SidebarSearch: React.FC<SidebarSearchProps> = ({
	search,
	mode,
	color,
	hoverColor
}) => {
	const [popoverAnchor, setPopoverAnchor] =
		React.useState<HTMLElement | null>(null);

	if (mode === 'full') {
		return (
			<Box data-testid='sidebar-search' sx={{ width: '100%' }}>
				{search}
			</Box>
		);
	}

	return (
		<Box
			data-testid='sidebar-search'
			sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
		>
			<Tooltip title='Search' placement='right' arrow>
				<IconButton
					aria-label='Search'
					onClick={event => setPopoverAnchor(event.currentTarget)}
					sx={{
						width: 44,
						height: 44,
						color,
						borderRadius: '8px',
						'&:hover': { bgcolor: hoverColor }
					}}
				>
					<SearchRoundedIcon />
				</IconButton>
			</Tooltip>
			<Popover
				open={Boolean(popoverAnchor)}
				anchorEl={popoverAnchor}
				onClose={() => setPopoverAnchor(null)}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'left' }}
				TransitionProps={{
					onEntered: node => focusFirstField(node as HTMLElement)
				}}
				slotProps={{ paper: { sx: { ml: 1, p: 1.5, width: 360 } } }}
			>
				{search}
			</Popover>
		</Box>
	);
};

export default SidebarSearch;
