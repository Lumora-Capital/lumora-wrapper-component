import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import CardAlert from './CardAlert';
import type { SidebarLink } from './LumoraWrapper';
import MenuContent from './MenuContent';

interface MobileSidebarProps {
	open: boolean;
	onClose: () => void;
	mainLinks: SidebarLink[];
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	/** The host's search component, shown above the links. */
	search?: React.ReactNode;
	/** Notifications + user, pinned to the bottom. */
	footer?: React.ReactNode;
	alertProps?: {
		title?: string;
		message?: string;
		buttonText?: string;
		onButtonClick?: () => void;
		show?: boolean;
	};
	accentColor?: string;
	/** Light accent tint for the active parent group and hover in the menu. */
	groupAccentColor?: string;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
	open,
	onClose,
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	search,
	footer,
	alertProps,
	accentColor = '#01584f',
	groupAccentColor
}) => {
	const handleLinkClick = (path: string) => {
		onLinkClick?.(path);
		onClose();
	};

	return (
		<Drawer
			anchor='left'
			open={open}
			onClose={onClose}
			sx={{
				zIndex: themeArg => themeArg.zIndex.drawer + 1,
				'& .MuiDrawer-paper': {
					backgroundImage: 'none',
					backgroundColor: 'background.paper'
				}
			}}
		>
			<Stack sx={{ width: 300, maxWidth: '85dvw', height: '100%' }}>
				{search ? <Box sx={{ p: 2, pb: 1 }}>{search}</Box> : null}
				<Stack sx={{ flexGrow: 1, minHeight: 0, overflowY: 'auto' }}>
					<MenuContent
						variant='drawer'
						mainLinks={mainLinks}
						secondaryLinks={secondaryLinks}
						activePath={activePath}
						onLinkClick={handleLinkClick}
						accentColor={accentColor}
						groupAccentColor={groupAccentColor}
					/>
				</Stack>
				{alertProps?.show && <CardAlert {...alertProps} />}
				{footer ? (
					<>
						<Divider />
						<Box sx={{ p: 1.5 }}>{footer}</Box>
					</>
				) : null}
			</Stack>
		</Drawer>
	);
};

export default MobileSidebar;
