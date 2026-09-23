import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import Brand from './Brand';

interface MobileTopBarProps {
	/** Bar height; the content area is offset by the same amount. */
	height: number;
	onMenuClick?: () => void;
	appName: string;
	logo: React.ReactNode;
	onBrandClick?: () => void;
	background: string;
	color: string;
}

/** Mobile only: the one place for the menu button once the sidebar is a drawer. */
const MobileTopBar: React.FC<MobileTopBarProps> = ({
	height,
	onMenuClick,
	appName,
	logo,
	onBrandClick,
	background,
	color
}) => (
	<AppBar
		position='fixed'
		elevation={0}
		sx={{
			height,
			background,
			color,
			borderBottom: '1px solid',
			borderColor: 'divider'
		}}
	>
		<Toolbar sx={{ minHeight: `${height}px !important`, gap: 1, px: 1 }}>
			{onMenuClick && (
				<IconButton
					aria-label='Open navigation menu'
					onClick={onMenuClick}
					sx={{ color }}
				>
					<MenuRoundedIcon />
				</IconButton>
			)}
			<Brand
				title={appName}
				appName={appName}
				logo={logo}
				onClick={onBrandClick}
				color={color}
				testId='mobile-brand'
			/>
		</Toolbar>
	</AppBar>
);

export default MobileTopBar;
