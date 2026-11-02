import { MenuIcon } from 'lucide-react';
import * as React from 'react';
import Brand from './Brand';
import { Button } from './ui/button';

interface MobileTopBarProps {
	/** Bar height; the content area is offset by the same amount. */
	height: number;
	onMenuClick?: () => void;
	appName: string;
	logo: React.ReactNode;
	onBrandClick?: (event: React.MouseEvent<HTMLElement>) => void;
	/** Whether the brand's platform menu is open; left out, it has none. */
	brandMenuOpen?: boolean;
	background: string;
	/** Menu button color. */
	color: string;
	/** Wordmark + logo tint; defaults to `color`. */
	brandColor?: string;
	/** Right-hand side, e.g. the notifications bell. */
	endContent?: React.ReactNode;
}

/** Mobile only: the one place for the menu button once the sidebar is a drawer. */
const MobileTopBar: React.FC<MobileTopBarProps> = ({
	height,
	onMenuClick,
	appName,
	logo,
	onBrandClick,
	brandMenuOpen,
	background,
	color,
	brandColor = color,
	endContent
}) => (
	<header
		// MUI's app bar layer: above the page, under drawers and menus
		className='lw:fixed lw:top-0 lw:right-0 lw:left-0 lw:z-[1100] lw:flex lw:flex-col lw:border-b lw:border-solid lw:border-border'
		style={{ height, background, color }}
	>
		<div
			className='lw:flex lw:items-center lw:gap-2 lw:px-2'
			style={{ minHeight: height }}
		>
			{onMenuClick && (
				<Button
					variant='bare'
					size='none'
					aria-label='Open navigation menu'
					onClick={onMenuClick}
					className='lw:size-10 lw:rounded-full lw:text-inherit lw:hover:bg-black/5 lw:dark:hover:bg-white/10 lw:[&_svg:not([class*=size-])]:size-6'
					style={{ color }}
				>
					<MenuIcon />
				</Button>
			)}
			<Brand
				title={appName}
				appName={appName}
				logo={logo}
				onClick={onBrandClick}
				menuOpen={brandMenuOpen}
				color={brandColor}
				testId='mobile-brand'
			/>
			{endContent ? (
				<div className='lw:ml-auto lw:flex lw:items-center'>
					{endContent}
				</div>
			) : null}
		</div>
	</header>
);

export default MobileTopBar;
