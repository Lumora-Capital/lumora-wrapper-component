import * as React from 'react';
import {
	GLIDE_SPRING,
	prefersReducedMotion,
	springTiming
} from './glassMotion';

/** The item nearest the pointer grows to this, within its button on the rail. */
export const DOCK_MAX_SCALE = 1.6;
/** How far the swell reaches either side of the pointer: about two and a
 * half rail items. */
export const DOCK_REACH_PX = 110;
/** Short enough to track the pointer, long enough to smooth each frame. */
export const DOCK_FOLLOW_MS = 110;
/** With `hoveredOnly`, how far off the swollen item the pointer goes before
 * another can take over, so it never flickers between the two. */
export const DOCK_HANDOFF_PX = 6;

const glide = springTiming(GLIDE_SPRING);

/** 1 at the pointer, easing to 0 at `reach`: a cosine bell, so the swell
 * has no corner at its peak or its edges. */
export const dockFalloff = (distance: number, reach = DOCK_REACH_PX) =>
	distance >= reach ? 0 : (1 + Math.cos((Math.PI * distance) / reach)) / 2;

/**
 * The most `el` can scale about its centre and stay inside `bounds`'s
 * visible box (its client area, so a classic scrollbar's gutter is left
 * out): past a scroller's end it would scroll it, past its sides it clips.
 * Measured from `el`'s layout box, so a scale already on it doesn't count.
 */
export const fitWithin = (el: HTMLElement, bounds: HTMLElement) => {
	const { offsetWidth: width, offsetHeight: height } = el;
	if (!(width > 0 && height > 0)) {
		return Infinity;
	}
	const b = bounds.getBoundingClientRect();
	const left = b.left + bounds.clientLeft;
	const top = b.top + bounds.clientTop;
	// A scale leaves the centre in place
	const r = el.getBoundingClientRect();
	const cx = r.left + r.width / 2;
	const cy = r.top + r.height / 2;
	const roomX = Math.min(
		cx - width / 2 - left,
		left + bounds.clientWidth - (cx + width / 2)
	);
	const roomY = Math.min(
		cy - height / 2 - top,
		top + bounds.clientHeight - (cy + height / 2)
	);
	return Math.min(1 + (2 * roomX) / width, 1 + (2 * roomY) / height);
};

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
	/** How far the swell reaches from the pointer; `DOCK_REACH_PX` by
	 * default. One item's pitch keeps it to the item under the pointer. */
	reach?: number;
	/**
	 * Make room as the Dock does: the items after a grown one slide on by
	 * its growth, so the gaps along the row hold and its start stays put.
	 * Each item moves
	 * with the nearest ancestor matching this (the flyout: a page's link,
	 * carrying its name with its tile). Omitted: nothing moves. The
	 * container's `--dock-spread` holds how much longer the row has grown,
	 * and each carrier's `--dock-scale` its item's scale (for what sits
	 * beside the item and must clear it, such as its name).
	 */
	carrierSelector?: string;
	/**
	 * Extra room, in px, the item under the pointer opens either side of
	 * it beyond its growth, easing off with the swell: its neighbours are
	 * pushed a little further away. Needs `carrierSelector`. 0 by default.
	 */
	spacing?: number;
	/**
	 * Only the item nearest the pointer swells, whole, and the rest keep
	 * their size (they still make room, with `carrierSelector`). Nearest
	 * where each is headed, swollen and slid along, so the swollen one is
	 * the one under the pointer: anchored at the row's start, an item slides
	 * on as it grows, and judged at rest the swell would leave it while the
	 * pointer was still on it, for one that lands away from the pointer. As
	 * it changes only from item to item, not with every move, it glides
	 * there on the settle's spring. That item carries `data-dock-hovered`,
	 * for a hover state that agrees with the swell (the pointer may still be
	 * over the one it left as that one shrinks).
	 */
	hoveredOnly?: boolean;
	/**
	 * The box the items swell within (the rail's scroller: grown past its
	 * end it scrolls, past its sides it clips). An item near its edge grows
	 * only as far as the room there. Omitted: no limit.
	 */
	boundsRef?: React.RefObject<HTMLElement | null>;
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
		reach = DOCK_REACH_PX,
		carrierSelector,
		spacing = 0,
		hoveredOnly = false,
		boundsRef
	}: DockMagnifyOptions
) => {
	const frame = React.useRef(0);
	/** Each glyph's unscaled size, measured the first time it is reached. */
	const baseSizes = React.useRef(
		new WeakMap<Element, { width: number; height: number }>()
	);
	const grown = React.useRef(new Set<HTMLElement>());
	/** With `hoveredOnly`: the item swollen now. */
	const hovered = React.useRef<HTMLElement | null>(null);
	const setHovered = (item: HTMLElement | null) => {
		if (hovered.current === item) {
			return;
		}
		hovered.current?.removeAttribute('data-dock-hovered');
		item?.setAttribute('data-dock-hovered', '');
		hovered.current = item;
	};
	const moved = React.useRef(new Set<HTMLElement>());
	const extra = transition ? `, ${transition}` : '';
	const follow = hoveredOnly
		? `${glide.duration}ms ${glide.easing}`
		: `${DOCK_FOLLOW_MS}ms ease-out`;

	const carrierOf = (item: HTMLElement) =>
		carrierSelector ? item.closest<HTMLElement>(carrierSelector) : null;
	/** A `translate`'s distance along the row. */
	const alongOf = (translate: string) => {
		const [x = '0', y = '0'] = translate.split(' ').filter(Boolean);
		return axis === 'x' ? parseFloat(x) || 0 : parseFloat(y) || 0;
	};
	/** How far an item's carrier is slid along the row as drawn now (mid
	 * glide, not where it is headed), to take back out of where it is drawn. */
	const slidOf = (item: HTMLElement) => {
		const carrier = carrierOf(item);
		if (!carrier) {
			return 0;
		}
		const drawn = getComputedStyle(carrier).translate;
		return alongOf(
			drawn && drawn !== 'none' ? drawn : carrier.style.translate
		);
	};
	/** How far the pointer at `at` is from where an item is headed: its rest
	 * centre slid on by its carrier, at the scale it grows to; 0 over it.
	 * Where it is headed rather than where it is drawn, so a glide under way
	 * can't hand the swell back. */
	const distanceTo = (item: HTMLElement, at: number) => {
		const size = axis === 'x' ? item.offsetWidth : item.offsetHeight;
		const half = (size * (Number(item.style.scale) || 1)) / 2;
		const centre =
			centreOf(item) + alongOf(carrierOf(item)?.style.translate ?? '');
		return Math.max(0, Math.abs(at - centre) - half);
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
				// The outermost item only: one inside another grows with it
				const outer = item.parentElement?.closest(itemSelector);
				if (outer && container.contains(outer)) {
					return false;
				}
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
		let base = baseSizes.current.get(glyph);
		if (base === undefined) {
			const current = Number(glyph.style.scale) || 1;
			const r = glyph.getBoundingClientRect();
			base = { width: r.width / current, height: r.height / current };
			baseSizes.current.set(glyph, base);
		}
		if (!(base.width > 0 && base.height > 0)) {
			return 1;
		}
		// Within the item both ways (the brand's button is wider than tall)
		const room = item.getBoundingClientRect();
		const fit = Math.min(
			room.width / base.width,
			room.height / base.height
		);
		return Math.max(1, Math.min(fit, maxScale));
	};

	/** Items outside the bounds (the rail's footer) are not limited by them. */
	const fitOf = (glyph: HTMLElement) => {
		const bounds = boundsRef?.current;
		return bounds?.contains(glyph) ? fitWithin(glyph, bounds) : Infinity;
	};

	const settle = () => {
		cancelAnimationFrame(frame.current);
		grown.current.forEach(glyph => {
			glyph.style.transition = `scale ${glide.duration}ms ${glide.easing}${extra}`;
			glyph.style.scale = '';
		});
		grown.current.clear();
		setHovered(null);
		moved.current.forEach(carrier => {
			carrier.style.transition = `translate ${glide.duration}ms ${glide.easing}`;
			carrier.style.translate = '';
			carrier.style.removeProperty('--dock-scale');
		});
		moved.current.clear();
		// What is drawn behind the items settles on their timing too. Kept
		// after the settle: the next swell sets its own
		containerRef.current?.style.setProperty(
			'--dock-scale-timing',
			`${glide.duration}ms ${glide.easing}`
		);
		containerRef.current?.style.removeProperty('--dock-spread');
		containerRef.current?.style.removeProperty('--dock-max-scale');
		containerRef.current?.style.removeProperty('--dock-active-scale');
	};

	const swell = (container: HTMLElement, x: number, y: number) => {
		const at = axis === 'x' ? x : y;
		const row = entries(container).map(({ item, glyph }) => {
			const centre = centreOf(item);
			const falloff = hoveredOnly
				? item === hovered.current
					? 1
					: 0
				: dockFalloff(Math.abs(at - centre), reach);
			const cap = Math.max(1, Math.min(capOf(item, glyph), fitOf(glyph)));
			const scale = 1 + (cap - 1) * falloff;
			glyph.style.transition = `scale ${follow}${extra}`;
			if (scale > 1.001) {
				glyph.style.scale = scale.toFixed(3);
				grown.current.add(glyph);
			} else if (grown.current.has(glyph)) {
				glyph.style.scale = '';
				grown.current.delete(glyph);
			}
			const size = axis === 'x' ? item.offsetWidth : item.offsetHeight;
			// Its own growth, and the room it opens either side
			const growth = (scale - 1) * size + 2 * spacing * falloff;
			return { item, centre, scale, growth };
		});
		// For what is drawn behind the items rather than in them (the rail's
		// hover lens, on the item under the pointer, and its current page's
		// fill), so it swells with them
		container.style.setProperty('--dock-scale-timing', follow);
		container.style.setProperty(
			'--dock-max-scale',
			Math.max(1, ...row.map(({ scale }) => scale)).toFixed(3)
		);
		const current = row.find(({ item }) => item.dataset.active === 'true');
		container.style.setProperty(
			'--dock-active-scale',
			(current?.scale ?? 1).toFixed(3)
		);
		if (!carrierSelector) {
			return;
		}
		// How much longer the row is now, for a shelf that stretches with it
		const spread = row.reduce((sum, { growth }) => sum + growth, 0);
		container.style.setProperty('--dock-spread', `${spread.toFixed(1)}px`);
		// Anchored at the row's start (the flyout hangs off the rail): each
		// item moves on by the growth of everything before it, plus half its
		// own, which it grows by either side — so every gap holds
		row.forEach(({ item, centre, scale, growth }) => {
			const carrier = carrierOf(item);
			if (!carrier) {
				return;
			}
			const slide = row.reduce(
				(sum, other) =>
					other.centre < centre ? sum + other.growth : sum,
				growth / 2
			);
			carrier.style.transition = `translate ${follow}`;
			if (Math.abs(slide) > 0.1 || scale > 1.001) {
				carrier.style.translate =
					axis === 'x'
						? `${slide.toFixed(1)}px 0`
						: `0 ${slide.toFixed(1)}px`;
				carrier.style.setProperty('--dock-scale', scale.toFixed(3));
				moved.current.add(carrier);
			} else if (moved.current.has(carrier)) {
				carrier.style.translate = '';
				carrier.style.removeProperty('--dock-scale');
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
			if (hoveredOnly) {
				// The one nearest as drawn, swollen and slid along: the
				// current one holds while the pointer is on it or just off
				// it, and the next takes over only where it will sit under
				// the pointer once it has swollen
				const at = axis === 'x' ? clientX : clientY;
				const current = hovered.current;
				const holds =
					current &&
					container.contains(current) &&
					distanceTo(current, at) <= DOCK_HANDOFF_PX;
				if (!holds) {
					let nearest: HTMLElement | null = null;
					let best = Infinity;
					entries(container).forEach(({ item }) => {
						const distance = distanceTo(item, at);
						if (distance < best) {
							nearest = item;
							best = distance;
						}
					});
					if (nearest) {
						setHovered(nearest);
					}
				}
			}
			swell(container, clientX, clientY);
		});
	};

	const swellOn = (item: Element) => {
		const container = containerRef.current;
		if (!enabled || !container || prefersReducedMotion()) {
			return;
		}
		if (hoveredOnly) {
			setHovered(item as HTMLElement);
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
