import * as React from 'react';
import { cn } from '../utils';

interface BrandProps {
	logo?: React.ReactNode;
	/** Wordmark (uppercased). Omitted in the narrow rails, where only the logo fits. */
	title?: string;
	/** Name for the accessible label when the wordmark is not shown. */
	appName: string;
	/** Makes the whole block a button, e.g. to go to the landing page. */
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	/**
	 * Set when the button opens a menu (the platform switcher): whether it
	 * is open. Left out, the button leads home.
	 */
	menuOpen?: boolean;
	color: string;
	testId?: string;
}

// Consumer SVG logos pick up the brand color
const BASE =
	'lw:flex lw:flex-row lw:items-center lw:gap-2 lw:min-w-0 lw:shrink-0 lw:[&_svg]:text-inherit lw:[&_svg]:fill-current';

/** App wordmark + logo, static or clickable. */
const Brand: React.FC<BrandProps> = ({
	logo,
	title,
	appName,
	onClick,
	color,
	testId,
	menuOpen
}) => {
	const content = (
		<>
			{title ? (
				<h6
					className='lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap lw:text-[18px] lw:leading-none lw:font-semibold lw:uppercase'
					style={{ color }}
				>
					{title}
				</h6>
			) : null}
			{logo}
		</>
	);

	if (!onClick) {
		return (
			<div data-testid={testId} className={BASE} style={{ color }}>
				{content}
			</div>
		);
	}
	return (
		<button
			type='button'
			onClick={onClick}
			aria-label={
				menuOpen === undefined
					? `${appName} home`
					: `${appName}: switch platform`
			}
			{...(menuOpen !== undefined && {
				'aria-haspopup': 'menu' as const,
				'aria-expanded': menuOpen
			})}
			data-testid={testId}
			className={cn(
				BASE,
				'lw:cursor-pointer lw:rounded-lg lw:px-1 lw:-mx-1 lw:outline-none lw:hover:bg-accent lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-offset-2 lw:focus-visible:outline-(--lw-brand-color)'
			)}
			style={{ color, '--lw-brand-color': color } as React.CSSProperties}
		>
			{content}
		</button>
	);
};

export default Brand;
