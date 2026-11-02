import React from 'react';
import {
	type ContentPadding,
	DEFAULT_CONTENT_PADDING,
	FLOATING_RAIL_GAP_PX,
	FLOATING_RAIL_GUTTER_PX,
	FLOATING_RAIL_ICON_PX,
	FLOATING_RAIL_ITEM_PX,
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
import { Skeleton } from './ui/skeleton';
import { useIsMobile } from './useMediaQuery';

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
	/** As LumoraWrapper's: an auto-hidden rail draws no placeholder. */
	sidebarAutoHide?: boolean;
	showSidebar?: boolean;
	contentPadding?: ContentPadding;
	sidebarBackgroundColor?: ShellColor;
	contentBackgroundColor?: ShellColor;
	/**
	 * The page's own loading outline, drawn in the content area instead of
	 * the generic one, so the page that loads next keeps the same picture
	 * rather than swapping one skeleton for another. It is drawn once per
	 * mode when `darkModeSelector` is set, so it should style itself with CSS
	 * that follows that selector (or not depend on the mode at all).
	 */
	content?: React.ReactNode;
}

const RAIL_ITEMS = 6;
const FLOATING_RAIL_ITEMS = 8;

const colorFor = (color: ShellColor | undefined, mode: ThemeMode) =>
	typeof color === 'object' ? color[mode] : color;

type ShellOutlineProps = Omit<
	LumoraShellSkeletonProps,
	'theme' | 'darkModeSelector'
> & {
	themeMode: ThemeMode;
};

/**
 * A line of text in outline, as MUI's text skeleton drew it: the bar is 60%
 * of the line's height, centred in it.
 */
const TextLine: React.FC<{
	width: number;
	height?: number;
	className?: string;
}> = ({ width, height = 20, className }) => (
	<Skeleton
		variant='text'
		className={className}
		style={{
			width,
			height: height * 0.6,
			marginTop: height * 0.2,
			marginBottom: height * 0.2
		}}
	/>
);

/** A square / round placeholder of a fixed size. */
const Block: React.FC<{
	size: number;
	variant?: 'rounded' | 'circular';
}> = ({ size, variant = 'rounded' }) => (
	<Skeleton
		variant={variant}
		className='lw:shrink-0'
		style={{ width: size, height: size }}
	/>
);

/** The shell outline in one mode */
const ShellOutline: React.FC<ShellOutlineProps> = ({
	themeMode,
	sidebarVariant = 'rail',
	sidebarSubmenu = 'expand',
	sidebarAutoHide = false,
	showSidebar = true,
	contentPadding = DEFAULT_CONTENT_PADDING,
	sidebarBackgroundColor,
	contentBackgroundColor,
	content
}) => {
	const isMobile = useIsMobile();
	const isDark = themeMode === 'dark';
	const sidebarWidthPx = getDesktopSidebarWidthPx({
		showSidebar,
		isMobile,
		sidebarVariant,
		sidebarSubmenu,
		sidebarAutoHide
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
	const paddingVars = resolveContentPadding(contentPadding);

	// The floating rail's own geometry: a 36px brand 12px down, then 44px
	// items 4px apart, each glyph 20px, so the icons land where the
	// placeholders stood
	const railIcons = floatingRail ? (
		<div className='lw:flex lw:flex-col lw:items-center lw:pt-3'>
			<Block size={36} />
			<div
				className='lw:mt-4 lw:flex lw:flex-col lw:items-center'
				style={{ gap: FLOATING_RAIL_GAP_PX }}
			>
				{Array.from({ length: FLOATING_RAIL_ITEMS }, (_, i) => (
					<div
						key={i}
						className='lw:flex lw:items-center lw:justify-center'
						style={{
							width: FLOATING_RAIL_ITEM_PX,
							height: FLOATING_RAIL_ITEM_PX
						}}
					>
						<Block size={FLOATING_RAIL_ICON_PX} />
					</div>
				))}
			</div>
		</div>
	) : (
		<div className='lw:flex lw:flex-col lw:items-center lw:gap-4 lw:pt-4'>
			<Block size={32} />
			<div className='lw:h-2' />
			{Array.from({ length: RAIL_ITEMS }, (_, i) => (
				<Block key={i} size={28} />
			))}
		</div>
	);

	return (
		<div
			role='status'
			aria-busy='true'
			aria-label='Checking session'
			// Re-reads the colour tokens in this outline's mode (styles.css)
			data-lw-scope=''
			data-lw-theme={themeMode}
			className='lw:flex lw:min-h-screen'
			style={{ backgroundColor: contentBackground }}
		>
			{isMobile && (
				<div
					className='lw:fixed lw:top-0 lw:right-0 lw:left-0 lw:z-[1] lw:flex lw:items-center lw:gap-4 lw:px-4'
					style={{
						height: mobileBarHeightPx,
						backgroundColor: sidebarSurface
					}}
				>
					<Block size={24} />
					<TextLine width={96} />
					<div className='lw:grow' />
					<Block size={32} variant='circular' />
				</div>
			)}

			{!isMobile && sidebarWidthPx > 0 && (
				<div
					className='lw:relative lw:shrink-0'
					style={{ width: sidebarWidthPx }}
				>
					<div
						className='lw:fixed'
						style={
							floatingRail
								? {
										top: floatingRail.gutterPx,
										bottom: floatingRail.gutterPx,
										left: floatingRail.gutterPx,
										width:
											sidebarWidthPx -
											2 * floatingRail.gutterPx,
										borderRadius: floatingRail.radiusPx,
										backgroundColor: sidebarSurface
									}
								: {
										top: 0,
										bottom: 0,
										left: 0,
										width: sidebarWidthPx,
										backgroundColor: sidebarSurface
									}
						}
					>
						{railIcons}
					</div>
				</div>
			)}

			<div
				// The variables the wrapper's <main> sets, so a host's `content`
				// that sizes itself from them measures as it will in the app
				className='lw-content-padding lw:min-w-0 lw:grow'
				data-lw-host=''
				style={
					{
						...paddingVars,
						'--lumora-sticky-top': isMobile
							? `${mobileBarHeightPx}px`
							: '0px',
						padding: 'var(--lumora-content-padding)',
						marginTop: isMobile ? mobileBarHeightPx : 0
					} as React.CSSProperties
				}
			>
				{content ?? (
					<>
						<TextLine width={220} height={40} />
						<TextLine width={320} className='lw:mb-6' />
						<div className='lw:mb-6 lw:flex lw:flex-row lw:gap-4'>
							{Array.from(
								{ length: isMobile ? 2 : 4 },
								(_, i) => (
									<Skeleton
										key={i}
										className='lw:h-24 lw:flex-1'
									/>
								)
							)}
						</div>
						<Skeleton className='lw:h-[360px]' />
					</>
				)}
			</div>
		</div>
	);
};

/** The former dark MUI theme's page colours, for the body under the dark selector. */
const DARK_BODY = { background: 'hsl(220, 35%, 3%)', color: '#ffffff' };

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
	if (!darkModeSelector) {
		return <ShellOutline themeMode={themeMode} {...layout} />;
	}

	// Both modes, the same on the server and in the browser: the selector picks one before
	// the first paint, so a dark page never flashes the light shell. The rules are the host's
	// selector, so they ship with the markup rather than in the stylesheet.
	const rules = [
		'[data-lw-skeleton-mode="dark"]{display:none}',
		'[data-lw-skeleton-mode="light"]{display:contents}',
		`${darkModeSelector} [data-lw-skeleton-mode="light"]{display:none}`,
		`${darkModeSelector} [data-lw-skeleton-mode="dark"]{display:contents}`,
		`${darkModeSelector} body{background-color:${DARK_BODY.background};color:${DARK_BODY.color}}`
	].join('\n');
	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: rules }} />
			<div data-lw-skeleton-mode='light'>
				<ShellOutline themeMode='light' {...layout} />
			</div>
			<div data-lw-skeleton-mode='dark'>
				<ShellOutline themeMode='dark' {...layout} />
			</div>
		</>
	);
};

export default LumoraShellSkeleton;
