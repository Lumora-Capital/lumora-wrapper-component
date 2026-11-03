import * as React from 'react';
import { Tooltip, type TooltipProps } from './ui/tooltip';

type Handler = (event: React.SyntheticEvent) => void;

const compose =
	(theirs: Handler | undefined, ours: Handler): Handler =>
	event => {
		theirs?.(event);
		ours(event);
	};

/**
 * A label tooltip that only shows on hover: a click closes it, and it stays
 * closed until the pointer leaves the item. Focus never opens it, so the
 * label doesn't linger on a link that keeps focus after navigating.
 */
const HoverTooltip: React.FC<TooltipProps> = ({
	children,
	onOpenChange,
	...props
}) => {
	const [open, setOpen] = React.useState(false);
	const hovering = React.useRef(false);
	const clicked = React.useRef(false);
	const child = React.Children.only(children) as React.ReactElement<
		Record<string, Handler | undefined>
	>;
	const trigger = React.cloneElement(child, {
		onPointerEnter: compose(child.props.onPointerEnter, () => {
			hovering.current = true;
		}),
		onPointerLeave: compose(child.props.onPointerLeave, () => {
			hovering.current = false;
			clicked.current = false;
		}),
		onClickCapture: compose(child.props.onClickCapture, () => {
			clicked.current = true;
			setOpen(false);
		})
	});
	return (
		<Tooltip
			{...props}
			open={open}
			onOpenChange={next => {
				// Radix also opens on focus; only a pointer that hasn't clicked may open it.
				if (next && (!hovering.current || clicked.current)) return;
				setOpen(next);
				onOpenChange?.(next);
			}}
		>
			{trigger}
		</Tooltip>
	);
};

export default HoverTooltip;
