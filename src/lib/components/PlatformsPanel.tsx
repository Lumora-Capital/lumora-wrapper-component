import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import CheckRounded from '@mui/icons-material/CheckRounded';
import ShieldOutlined from '@mui/icons-material/ShieldOutlined';
import type { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import type { LumoraPlatform } from './LumoraWrapper';
import SubPanel from './SubPanel';

/** Rows visible before the list scrolls. */
const VISIBLE_ROWS = 5;
const ROW_HEIGHT_PX = 56;

export interface PlatformsPanelProps {
	platforms: LumoraPlatform[];
	currentPlatformKey?: string;
	/** Called for a non-current platform only. */
	onSelect: (platform: LumoraPlatform) => void;
	accentColor: string;
	/** Low-alpha accent wash for the current row. */
	tint: string;
	width: number;
	/** Card chrome shared with the account menu card. */
	sx?: SxProps<Theme>;
}

/**
 * Second card of the account menu: the Lumora Platforms switcher. Presentational
 * — the host decides which platforms to list and what choosing one does.
 * Mounted only while open, so `autoFocusItem` lands on the first row.
 */
const PlatformsPanel: React.FC<PlatformsPanelProps> = ({
	platforms,
	currentPlatformKey,
	onSelect,
	accentColor,
	tint,
	width,
	sx
}) => (
	<SubPanel
		title='Lumora Platforms'
		subtitle='Choose where you want to work.'
		testId='platforms-panel'
		width={width}
		sx={sx}
		footer={
			<Stack
				direction='row'
				sx={{
					alignItems: 'center',
					gap: 1,
					px: 2,
					py: 1.5,
					color: 'text.secondary'
				}}
			>
				<ShieldOutlined fontSize='small' />
				<Typography variant='body2'>
					Platforms available to your account
				</Typography>
			</Stack>
		}
	>
		<MenuList
			autoFocusItem
			aria-label='Platforms'
			sx={{
				px: 1,
				py: 0.5,
				maxHeight: VISIBLE_ROWS * ROW_HEIGHT_PX,
				overflowY: 'auto'
			}}
		>
			{platforms.map(platform => {
				const current = platform.key === currentPlatformKey;
				return (
					<MenuItem
						key={platform.key}
						data-testid={`platform-item-${platform.key}`}
						aria-current={current ? 'true' : undefined}
						onClick={() => {
							if (!current) {
								onSelect(platform);
							}
						}}
						sx={{
							borderRadius: '10px',
							px: 1.5,
							py: 1.25,
							mb: 0.5,
							gap: 1,
							// The current row is inert: keeps its wash on hover
							// and shows no pointer.
							bgcolor: current ? tint : 'transparent',
							cursor: current ? 'default' : 'pointer',
							'&:hover': {
								bgcolor: current ? tint : 'action.hover'
							}
						}}
					>
						<Box sx={{ flex: 1, minWidth: 0 }}>
							<Typography noWrap sx={{ fontWeight: 500 }}>
								{platform.name}
							</Typography>
							{platform.description ? (
								<Typography
									noWrap
									variant='caption'
									sx={{
										display: 'block',
										color: 'text.secondary'
									}}
								>
									{platform.description}
								</Typography>
							) : null}
						</Box>
						{current ? (
							<Stack
								direction='row'
								sx={{
									alignItems: 'center',
									gap: 0.5,
									flexShrink: 0,
									color: accentColor,
									fontSize: '0.8125rem',
									fontWeight: 500
								}}
							>
								Current
								<CheckRounded sx={{ fontSize: 16 }} />
							</Stack>
						) : (
							<ArrowOutwardRounded
								fontSize='small'
								data-testid='platform-external-icon'
								sx={{ flexShrink: 0, color: 'text.secondary' }}
							/>
						)}
					</MenuItem>
				);
			})}
		</MenuList>
	</SubPanel>
);

export default PlatformsPanel;
