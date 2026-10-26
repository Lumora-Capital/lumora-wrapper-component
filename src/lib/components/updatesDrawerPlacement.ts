/** Where the updates drawer sits when it opens beside the desktop sidebar. */
export interface UpdatesDrawerPlacement {
	left: number;
	top: number;
	height: number;
}

/**
 * The updates drawer's box beside the desktop sidebar: flush with the
 * sidebar's right edge, and as tall as its visible surface — the glass
 * rail's capsule (`data-rail-surface`, inset from the aside), else the
 * aside itself. Measured rather than assumed, so a host that moves the
 * sidebar (e.g. below an environment band) moves the drawer with it.
 *
 * Null when there is no laid-out desktop sidebar (mobile, no sidebar):
 * the drawer then keeps its right-hand, full-height place.
 */
export const measureUpdatesDrawerPlacement = (
	shell: HTMLElement | null
): UpdatesDrawerPlacement | null => {
	const aside = shell?.querySelector<HTMLElement>(':scope > aside');
	if (!aside) return null;
	const surface =
		aside.querySelector<HTMLElement>('[data-rail-surface]') ?? aside;
	const { right, width } = aside.getBoundingClientRect();
	const { top, height } = surface.getBoundingClientRect();
	if (width <= 0 || height <= 0) return null;
	return { left: right, top, height };
};
