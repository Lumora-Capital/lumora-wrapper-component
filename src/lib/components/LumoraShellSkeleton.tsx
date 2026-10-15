import {
	Box,
	CssBaseline,
	Skeleton,
	Stack,
	useMediaQuery,
	useTheme
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useMemo } from 'react';
import { getDesignTokens } from '../theme';
import {
	type ContentPadding,
	DEFAULT_CONTENT_PADDING,
	FLOATING_RAIL_GUTTER_PX,
	FLOATING_RAIL_RADIUS_PX,
	getDesktopSidebarWidthPx,
	MOBILE_BAR_HEIGHT_PX,
	resolveContentBackground,
	resolveContentPadding,
	resolveSidebarSurface,
	type SidebarSubmenu,
	type SidebarVariant,
	usesFlyoutSubmenu
} from './shellLayout';

/** The LumoraWrapper layout props the skeleton needs; pass the same values. */
export interface LumoraShellSkeletonProps {
	theme?: 'dark' | 'light';
	sidebarVariant?: SidebarVariant;
	sidebarSubmenu?: SidebarSubmenu;
	showSidebar?: boolean;
	contentPadding?: ContentPadding;
	sidebarBackgroundColor?: string;
	contentBackgroundColor?: string;
}

const RAIL_ITEMS = 6;

/**
 * The app shell in outline, sized like LumoraWrapper's sidebar and top bar so
 * the layout does not jump when the app loads. The wrapper shows it while it
 * checks the session; hosts can show it on their own pre-app screens (an OAuth
 * callback, a redirect) by passing the props they give the wrapper.
 */
const LumoraShellSkeleton: React.FC<LumoraShellSkeletonProps> = ({
	theme: themeMode = 'light',
	sidebarVariant = 'rail',
	sidebarSubmenu = 'expand',
	showSidebar = true,
	contentPadding = DEFAULT_CONTENT_PADDING,
	sidebarBackgroundColor,
	contentBackgroundColor
}) => {
	const muiNativeTheme = useTheme();
	const isMobile = useMediaQuery(muiNativeTheme.breakpoints.down('md'));
	const muiTheme = useMemo(
		() => createTheme(getDesignTokens(themeMode)),
		[themeMode]
	);
	const isDark = themeMode === 'dark';
	const sidebarWidthPx = getDesktopSidebarWidthPx({
		showSidebar,
		isMobile,
		sidebarVariant,
		sidebarSubmenu
	});
	const floatingRail = usesFlyoutSubmenu(sidebarSubmenu, sidebarVariant)
		? {
				gutterPx: FLOATING_RAIL_GUTTER_PX,
				radiusPx: FLOATING_RAIL_RADIUS_PX
			}
		: undefined;
	const mobileBarHeightPx = MOBILE_BAR_HEIGHT_PX;
	const sidebarSurface = resolveSidebarSurface(
		sidebarBackgroundColor,
		isDark
	);
	const contentBackground = resolveContentBackground(
		contentBackgroundColor,
		isDark
	);
	const resolvedPadding = resolveContentPadding(
		contentPadding,
		muiNativeTheme
	);

	const railIcons = (
		<Stack alignItems='center' spacing={2} sx={{ pt: 2 }}>
			<Skeleton variant='rounded' width={32} height={32} />
			<Box sx={{ height: 8 }} />
			{Array.from({ length: RAIL_ITEMS }, (_, i) => (
				<Skeleton key={i} variant='rounded' width={28} height={28} />
			))}
		</Stack>
	);

	return (
		<ThemeProvider theme={muiTheme}>
			<CssBaseline />
			<Box
				role='status'
				aria-busy='true'
				aria-label='Checking session'
				sx={{
					display: 'flex',
					minHeight: '100vh',
					backgroundColor: contentBackground
				}}
			>
				{isMobile && (
					<Box
						sx={{
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							height: mobileBarHeightPx,
							px: 2,
							display: 'flex',
							alignItems: 'center',
							gap: 2,
							bgcolor: sidebarSurface,
							zIndex: 1
						}}
					>
						<Skeleton variant='rounded' width={24} height={24} />
						<Skeleton variant='text' width={96} />
						<Box sx={{ flexGrow: 1 }} />
						<Skeleton variant='circular' width={32} height={32} />
					</Box>
				)}

				{!isMobile && sidebarWidthPx > 0 && (
					<Box
						sx={{
							position: 'relative',
							width: sidebarWidthPx,
							flexShrink: 0
						}}
					>
						<Box
							sx={
								floatingRail
									? {
											position: 'fixed',
											top: floatingRail.gutterPx,
											bottom: floatingRail.gutterPx,
											left: floatingRail.gutterPx,
											width:
												sidebarWidthPx -
												2 * floatingRail.gutterPx,
											borderRadius: `${floatingRail.radiusPx}px`,
											bgcolor: sidebarSurface
										}
									: {
											position: 'fixed',
											top: 0,
											bottom: 0,
											left: 0,
											width: sidebarWidthPx,
											bgcolor: sidebarSurface
										}
							}
						>
							{railIcons}
						</Box>
					</Box>
				)}

				<Box
					sx={{
						flexGrow: 1,
						minWidth: 0,
						p: resolvedPadding,
						mt: isMobile ? `${mobileBarHeightPx}px` : 0
					}}
				>
					<Skeleton variant='text' width={220} height={40} />
					<Skeleton variant='text' width={320} sx={{ mb: 3 }} />
					<Stack direction='row' spacing={2} sx={{ mb: 3 }}>
						{Array.from({ length: isMobile ? 2 : 4 }, (_, i) => (
							<Skeleton
								key={i}
								variant='rounded'
								height={96}
								sx={{ flex: 1 }}
							/>
						))}
					</Stack>
					<Skeleton variant='rounded' height={360} />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default LumoraShellSkeleton;
