import * as React from 'react';
import {
	GLIDE_SPRING,
	prefersReducedMotion,
	springTiming
} from './glassMotion';

/** The item nearest the pointer grows to this (a 20px rail glyph to 32px). */
export const DOCK_MAX_SCALE = 1.6;
/** How far the swell reaches either side of the pointer: about two and a
 * half rail items. */
export const DOCK_REACH_PX = 110;
/** Short enough to track the pointer, long enough to smooth each frame. */
const FOLLOW_MS = 110;

const glide = springTiming(GLIDE_SPRING);

/** 1 at the pointer, easing to 0 at `DOCK_REACH_PX`: a cosine bell, so the
 * swell has no corner at its peak or its edges. */
export const dockFalloff = (distance: number) =>
	distance >= DOCK_REACH_PX
		? 0
		: (1 + Math.cos((Math.PI * distance) / DOCK_REACH_PX)) / 2;

export type DockMagnifyOptions = {
	enabled: boolean;
	/** The direction the items run in: the rail's column, the flyout's row. */
	axis: 'x' | 'y';
	/** The items, within the container. */
	itemSelector: string;
	/**
	 * The part of each item that grows (the rail: its glyph, inside a button
	 * that keeps its size, never past that button). Omitted: the item.
	 */
	glyphSelector?: string;
	/** Other transitions the grown element keeps, beside its `scale`. */
	transition?: string;
	/** The most the nearest item grows; `DOCK_MAX_SCALE` by default. */
	maxScale?: number;
	/**
	 * Make room as the Dock does: the items after a grown one slide on by
	 * its growth, so the gaps along the row hold and its start stays put.
	 * Each item moves
	 * with the nearest ancestor matching this (the flyout: a page's link,
	 * carrying its name with its tile). Omitted: nothing moves.
	 */
	carrierSelector?: string;
};

/**
 * macOS Dock magnification: the item under the pointer swells and its
 * neighbours swell less the further they are, following the pointer along
 * the row, and all of them settle back when it leaves. Written straight to
 * each element's `scale` (layout never moves, nothing re-renders). Pointer
 * only (a finger has no hover); nothing under reduced motion.
 *
 * Spread `containerProps` on the container `containerRef` points at. Items
 * outside the container's own box (the flyout's tiles inside the rail) are
 * left alone, and moving out across the row settles it as leaving does.
 * `swellOn` grows the row as if the pointer rested on an item, for the
 * keyboard.
 */
export const useDockMagnify = (
	containerRef: React.RefObject<HTMLElement | null>,
	{
		enabled,
		axis,
		itemSelector,
		glyphSelector,
		transition,
		maxScale = DOCK_MAX_SCALE,
		carrierSelector
	}: DockMagnifyOptions
) => {
	const frame = React.useRef(0);
	/** Each glyph's unscaled width, measured the first time it is reached. */
	const baseWidths = React.useRef(new WeakMap<Element, number>());
	const grown = React.useRef(new Set<HTMLElement>());
	const moved = React.useRef(new Set<HTMLElement>());
	const extra = transition ? `, ${transition}` : '';

	const carrierOf = (item: HTMLElement) =>
		carrierSelector ? item.closest<HTMLElement>(carrierSelector) : null;
	/** How far an item's carrier has been slid along the row. */
	const slidOf = (item: HTMLElement) => {
		const [x = '0', y = '0'] = (carrierOf(item)?.style.translate ?? '')
			.split(' ')
			.filter(Boolean);
		return axis === 'x' ? parseFloat(x) || 0 : parseFloat(y) || 0;
	};
	/** An item's centre along the row where it stands at rest: its scale
	 * grows it about that centre, and any slide is taken back out. */
	const centreOf = (item: HTMLElement) => {
		const r = item.getBoundingClientRect();
		return (
			(axis === 'x' ? r.left + r.width / 2 : r.top + r.height / 2) -
			slidOf(item)
		);
	};

	const entries = (container: HTMLElement) => {
		const c = container.getBoundingClientRect();
		return Array.from(container.querySelectorAll<HTMLElement>(itemSelector))
			.filter(item => {
				const r = item.getBoundingClientRect();
				const along = centreOf(item);
				const centreX = axis === 'x' ? along : r.left + r.width / 2;
				const centreY = axis === 'x' ? r.top + r.height / 2 : along;
				return (
					r.width > 0 &&
					centreX >= c.left &&
					centreX <= c.right &&
					centreY >= c.top &&
					centreY <= c.bottom
				);
			})
			.map(item => ({
				item,
				glyph: glyphSelector
					? item.querySelector<HTMLElement>(glyphSelector)
					: item
			}))
			.filter(
				(entry): entry is { item: HTMLElement; glyph: HTMLElement } =>
					entry.glyph !== null
			);
	};

	/** A glyph never outgrows its item; an item grows the whole way. */
	const capOf = (item: HTMLElement, glyph: HTMLElement) => {
		if (glyph === item) {
			return maxScale;
		}
		let base = baseWidths.current.get(glyph);
		if (base === undefined) {
			const current = Number(glyph.style.scale) || 1;
			base = glyph.getBoundingClientRect().width / current;
			baseWidths.current.set(glyph, base);
		}
		const room = item.getBoundingClientRect().width;
		return base > 0 ? Math.max(1, Math.min(room / base, maxScale)) : 1;
	};

	const settle = () => {
		cancelAnimationFrame(frame.current);
		grown.current.forEach(glyph => {
			glyph.style.transition = `scale ${glide.duration}ms ${glide.easing}${extra}`;
			glyph.style.scale = '';
		});
		grown.current.clear();
		moved.current.forEach(carrier => {
			carrier.style.transition = `translate ${glide.duration}ms ${glide.easing}`;
			carrier.style.translate = '';
		});
		moved.current.clear();
	};

	const swell = (container: HTMLElement, x: number, y: number) => {
		const at = axis === 'x' ? x : y;
		const row = entries(container).map(({ item, glyph }) => {
			const centre = centreOf(item);
			const scale =
				1 +
				(capOf(item, glyph) - 1) * dockFalloff(Math.abs(at - centre));
			glyph.style.transition = `scale ${FOLLOW_MS}ms ease-out${extra}`;
			if (scale > 1.001) {
				glyph.style.scale = scale.toFixed(3);
				grown.current.add(glyph);
			} else if (grown.current.has(glyph)) {
				glyph.style.scale = '';
				grown.current.delete(glyph);
			}
			const size = axis === 'x' ? item.offsetWidth : item.offsetHeight;
			return { item, centre, growth: (scale - 1) * size };
		});
		if (!carrierSelector) {
			return;
		}
		// Anchored at the row's start (the flyout hangs off the rail): each
		// item moves on by the growth of everything before it, plus half its
		// own, which it grows by either side — so every gap holds
		row.forEach(({ item, centre, growth }) => {
			const carrier = carrierOf(item);
			if (!carrier) {
				return;
			}
			const slide = row.reduce(
				(sum, other) =>
					other.centre < centre ? sum + other.growth : sum,
				growth / 2
			);
			carrier.style.transition = `translate ${FOLLOW_MS}ms ease-out`;
			if (Math.abs(slide) > 0.1) {
				carrier.style.translate =
					axis === 'x'
						? `${slide.toFixed(1)}px 0`
						: `0 ${slide.toFixed(1)}px`;
				moved.current.add(carrier);
			} else if (moved.current.has(carrier)) {
				carrier.style.translate = '';
				moved.current.delete(carrier);
			}
		});
	};

	const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
		if (
			(event.pointerType && event.pointerType !== 'mouse') ||
			prefersReducedMotion()
		) {
			return;
		}
		const container = event.currentTarget;
		const { clientX, clientY } = event;
		cancelAnimationFrame(frame.current);
		frame.current = requestAnimationFrame(() => {
			const c = container.getBoundingClientRect();
			// Out across the row (the rail: over the flyout) settles it
			const across = axis === 'x' ? clientY : clientX;
			const [from, to] =
				axis === 'x' ? [c.top, c.bottom] : [c.left, c.right];
			if (across < from || across > to) {
				settle();
				return;
			}
			swell(container, clientX, clientY);
		});
	};

	const swellOn = (item: Element) => {
		const container = containerRef.current;
		if (!enabled || !container || prefersReducedMotion()) {
			return;
		}
		const r = item.getBoundingClientRect();
		swell(container, r.left + r.width / 2, r.top + r.height / 2);
	};

	React.useEffect(() => {
		if (!enabled) {
			settle();
		}
	}, [enabled]);
	React.useEffect(() => () => cancelAnimationFrame(frame.current), []);

	return {
		containerProps: enabled
			? { onPointerMove, onPointerLeave: settle, onScrollCapture: settle }
			: {},
		swellOn,
		settle
	};
};
