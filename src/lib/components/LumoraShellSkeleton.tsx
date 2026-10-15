import {
	Box,
	CssBaseline,
	GlobalStyles,
	Skeleton,
	Stack,
	useMediaQuery,
	useTheme
} from '@mui/material';
import { type Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
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

type ThemeMode = 'dark' | 'light';

/** One colour for both modes, or one per mode (for a skeleton drawn in both, see darkModeSelector) */
export type ShellColor = string | { light: string; dark: string };

/** The LumoraWrapper layout props the skeleton needs; pass the same values. */
export interface LumoraShellSkeletonProps {
	theme?: ThemeMode;
	/**
	 * CSS selector that matches an ancestor while the page is dark, e.g.
	 * `html[data-color-scheme="dark"]` set by a script before the first paint.
	 * With it the skeleton draws both modes and CSS shows the right one, so
	 * server-rendered HTML opens in the user's mode; `theme` is then ignored.
	 */
	darkModeSelector?: string;
	sidebarVariant?: SidebarVariant;
	sidebarSubmenu?: SidebarSubmenu;
	showSidebar?: boolean;
	contentPadding?: ContentPadding;
	sidebarBackgroundColor?: ShellColor;
	contentBackgroundColor?: ShellColor;
}

const RAIL_ITEMS = 6;

const colorFor = (color: ShellColor | undefined, mode: ThemeMode) =>
	typeof color === 'object' ? color[mode] : color;

type ShellOutlineProps = Omit<
	LumoraShellSkeletonProps,
	'theme' | 'darkModeSelector'
> & {
	themeMode: ThemeMode;
	muiTheme: Theme;
	// The host app's theme: its breakpoints and spacing size the layout, as in LumoraWrapper
	hostTheme: Theme;
};

/** The shell outline in one mode */
const ShellOutline: React.FC<ShellOutlineProps> = ({
	themeMode,
	muiTheme,
	hostTheme,
	sidebarVariant = 'rail',
	sidebarSubmenu = 'expand',
	showSidebar = true,
	contentPadding = DEFAULT_CONTENT_PADDING,
	sidebarBackgroundColor,
	contentBackgroundColor
}) => {
	const isMobile = useMediaQuery(hostTheme.breakpoints.down('md'));
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
		colorFor(sidebarBackgroundColor, themeMode),
		isDark
	);
	const contentBackground = resolveContentBackground(
		colorFor(contentBackgroundColor, themeMode),
		isDark
	);
	const resolvedPadding = resolveContentPadding(
		contentPadding,
		hostTheme
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

const lightTheme = createTheme(getDesignTokens('light'));
const darkTheme = createTheme(getDesignTokens('dark'));
const themeFor = (mode: ThemeMode) =>
	mode === 'dark' ? darkTheme : lightTheme;

/**
 * The app shell in outline, sized like LumoraWrapper's sidebar and top bar so
 * the layout does not jump when the app loads. The wrapper shows it while it
 * checks the session; hosts can show it on their own pre-app screens (an OAuth
 * callback, a redirect) by passing the props they give the wrapper.
 */
const LumoraShellSkeleton: React.FC<LumoraShellSkeletonProps> = ({
	theme: themeMode = 'light',
	darkModeSelector,
	...layout
}) => {
	const hostTheme = useTheme();
	if (!darkModeSelector) {
		const muiTheme = themeFor(themeMode);
		return (
			<ThemeProvider theme={muiTheme}>
				<CssBaseline />
				<ShellOutline
					themeMode={themeMode}
					muiTheme={muiTheme}
					hostTheme={hostTheme}
					{...layout}
				/>
			</ThemeProvider>
		);
	}

	// Both modes, the same on the server and in the browser: the selector picks one before
	// the first paint, so a dark page never flashes the light shell
	const darkOnly = `${darkModeSelector} &`;
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<GlobalStyles
				styles={{
					[`${darkModeSelector} body`]: {
						backgroundColor: darkTheme.palette.background.default,
						color: darkTheme.palette.text.primary
					}
				}}
			/>
			<Box sx={{ display: 'contents', [darkOnly]: { display: 'none' } }}>
				<ShellOutline
					themeMode='light'
					muiTheme={lightTheme}
					hostTheme={hostTheme}
					{...layout}
				/>
			</Box>
			<Box sx={{ display: 'none', [darkOnly]: { display: 'contents' } }}>
				<ShellOutline
					themeMode='dark'
					muiTheme={darkTheme}
					hostTheme={hostTheme}
					{...layout}
				/>
			</Box>
		</ThemeProvider>
	);
};

export default LumoraShellSkeleton;
