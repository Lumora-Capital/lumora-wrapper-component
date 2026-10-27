import Tooltip, { type TooltipProps } from '@mui/material/Tooltip';
import * as React from 'react';

/**
 * A label tooltip that only shows on hover: a click closes it, and it stays
 * closed until the pointer leaves the item. Focus never opens it, so the
 * label doesn't linger on a link that keeps focus after navigating.
 */
const HoverTooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
	const [open, setOpen] = React.useState(false);
	const clicked = React.useRef(false);
	return (
		<Tooltip
			{...props}
			open={open}
			disableFocusListener
			onOpen={() => {
				if (!clicked.current) setOpen(true);
			}}
			onClose={() => setOpen(false)}
			onClickCapture={() => {
				clicked.current = true;
				setOpen(false);
			}}
			onPointerLeave={() => {
				clicked.current = false;
			}}
		>
			{children}
		</Tooltip>
	);
};

export default HoverTooltip;
