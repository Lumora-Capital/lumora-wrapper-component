import { jsx as n, jsxs as x, Fragment as ie } from "react/jsx-runtime";
import { ChevronRightIcon as fs, ChevronUpIcon as ms, ChevronDownIcon as hs, SparklesIcon as ps, BellIcon as Jo, SettingsIcon as gs, LogOutIcon as Qo, MenuIcon as er, SearchIcon as Il, SunMoonIcon as bs, SunIcon as xs, MoonIcon as vs, CheckIcon as ys } from "lucide-react";
import * as c from "react";
import { useState as Qe, useCallback as sl, useRef as gn, useEffect as Xt, useMemo as Es, useLayoutEffect as Ns } from "react";
import { clsx as Ss } from "clsx";
import { extendTailwindMerge as _s } from "tailwind-merge";
import { createPortal as tr } from "react-dom";
import { Tooltip as vt, Slot as Rs, Popover as $n, DropdownMenu as Nt, Dialog as Kt } from "radix-ui";
import bo from "axios";
import { cva as As } from "class-variance-authority";
const Ts = _s({ prefix: "lw" });
function b(...e) {
  return Ts(Ss(e));
}
const xo = "lw:flex lw:flex-row lw:items-center lw:gap-2 lw:min-w-0 lw:shrink-0 lw:[&_svg]:text-inherit lw:[&_svg]:fill-current", Cs = ({
  logo: e,
  title: t,
  appName: l,
  onClick: o,
  color: r,
  testId: s,
  menuOpen: i
}) => {
  const a = /* @__PURE__ */ x(ie, { children: [
    t ? /* @__PURE__ */ n(
      "h6",
      {
        className: "lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap lw:text-[18px] lw:leading-none lw:font-semibold lw:uppercase",
        style: { color: r },
        children: t
      }
    ) : null,
    e
  ] });
  return o ? /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      onClick: o,
      "aria-label": i === void 0 ? `${l} home` : `${l}: switch platform`,
      ...i !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": i
      },
      "data-testid": s,
      className: b(
        xo,
        "lw:cursor-pointer lw:rounded-lg lw:px-1 lw:-mx-1 lw:outline-none lw:hover:bg-accent lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-offset-2 lw:focus-visible:outline-(--lw-brand-color)"
      ),
      style: { color: r, "--lw-brand-color": r },
      children: a
    }
  ) : /* @__PURE__ */ n("div", { "data-testid": s, className: xo, style: { color: r }, children: a });
}, kn = Cs, yl = !1, St = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, yt = (e) => {
  var t;
  return !!((t = e.subitems) != null && t.length);
}, gt = (e, t) => e ? `${e}/${t.text}` : t.text, tt = (e, t) => {
  var l;
  return t ? e.path && t === e.path ? !0 : ((l = e.subitems) == null ? void 0 : l.some((o) => tt(o, t))) ?? !1 : !1;
}, He = (e, t) => !!(t && e.path === t), $l = (e, t) => (e ?? []).flatMap((l) => {
  const o = l.icon ?? t;
  return yt(l) ? $l(l.subitems, o) : l.path ? [{ sub: l, icon: o }] : [];
}), El = (e) => {
  const t = Pn(e);
  if (!t)
    return "#ffffff";
  const [l, o, r] = t.map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * l + 0.7152 * o + 0.0722 * r > 0.5 ? "#0b1f1c" : "#ffffff";
}, Zt = (e) => {
  const t = Pn(e);
  if (!t)
    return "rgba(1, 88, 79, 0.12)";
  const [l, o, r] = t;
  return `rgba(${l}, ${o}, ${r}, 0.14)`;
}, nt = (e, t) => {
  const l = Pn(e);
  return l ? `rgba(${l[0]}, ${l[1]}, ${l[2]}, ${t})` : e;
}, Pn = (e) => {
  let t = e.trim().replace(/^#/, "");
  if (t.length === 3 && (t = t.split("").map((o) => o + o).join("")), t.length !== 6 || /[^0-9a-fA-F]/.test(t))
    return null;
  const l = parseInt(t, 16);
  return [l >> 16 & 255, l >> 8 & 255, l & 255];
}, nr = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), kl = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Os = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Is = "lw-tile-in", _e = "lw-motion-none", lr = "lw-motion-fade", or = "lw-motion-fade-fast", qe = 6, Ll = "9, 193, 174", rr = c.createContext(
  void 0
), Fn = c.createContext(
  void 0
), Ml = (e) => c.useContext(Fn) ?? e, Bn = () => {
  const e = c.useContext(rr), t = e ? Pn(e) : null;
  return t ? t.join(", ") : Ll;
}, $s = (e, t, l = Ll) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  className: "lw:relative",
  style: {
    backgroundColor: t,
    boxShadow: `${Os(e)}, 0 0 0 1px ${kl(e)}`
  }
}), Dl = (e, t) => ({
  className: "lw:rounded-md lw:border lw:border-solid lw:px-2.5 lw:py-1.5 lw:text-[0.8125rem] lw:leading-[1.4] lw:font-semibold",
  style: {
    color: e ? "#ffffff" : "#0b1f1c",
    backgroundColor: t ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
    borderColor: kl(e),
    boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)"
  }
}), sr = (e) => e ? "#ffffff" : "#0b1f1c", Pl = "lw-glass-grow", Fl = "lw-content-in", ar = (e, t = Ll, l = `rgba(${t}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${t}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), ir = (e, t, l = "solid") => l === "solid" ? { background: e, boxShadow: "none" } : {
  background: nt(e, t ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${nt(e, 0.45)}`
}, ks = (e, t) => {
  const l = (o) => ({
    className: "lw-glass-well",
    style: {
      "--lw-well-bg": o.bg,
      "--lw-well-shadow": o.shadow,
      "--lw-well-hover-bg": o.hoverBg,
      "--lw-well-focus-bg": o.focusBg,
      "--lw-well-focus-shadow": o.focusShadow
    }
  });
  {
    const o = `inset 0 0 0 1px ${kl(e)}`, r = e ? "rgba(255, 255, 255, 0.06)" : "#ffffff";
    return l({
      bg: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
      shadow: o,
      hoverBg: r,
      focusBg: r,
      focusShadow: `${o}, 0 0 0 3px ${t}`
    });
  }
}, Ls = 100, cr = 80, Tn = 56, jt = 72, Vt = 64, be = 44, Nl = 24, zn = 4, et = 8, dr = 1.4, ur = qe, wr = { xs: 2, md: "18px" }, Ms = ["xs", "sm", "md", "lg", "xl"], Ds = 8, vo = (e) => typeof e == "number" ? `${e * Ds}px` : e, fr = (e) => typeof e == "object" ? Object.fromEntries(
  Ms.filter((t) => e[t] !== void 0).map((t) => [
    `--lw-cp-${t}`,
    vo(e[t])
  ])
) : { "--lw-cp-xs": vo(e) }, Gn = (e, t) => e === "flyout" && (t === "collapsible" || t === "panel"), Ps = (e, t, l) => e && Gn(t, l), mr = ({
  showSidebar: e,
  isMobile: t,
  sidebarVariant: l,
  sidebarSubmenu: o,
  sidebarAutoHide: r = !1
}) => !e || t ? 0 : l === "rail-labeled" ? cr : Gn(o, l) ? r ? 0 : Vt + 2 * et : l === "collapsible" || l === "panel" ? jt : Ls, Wn = (e, t) => e ?? (t ? "hsl(220, 30%, 7%)" : "#ffffff"), hr = (e, t) => e ?? (t ? "hsl(220, 35%, 9%)" : "#f2f9fc"), pr = { stiffness: 320, damping: 24 }, gr = { stiffness: 320, damping: 28 }, Bl = { stiffness: 520, damping: 20 }, zl = { stiffness: 380, damping: 36 }, Hn = { stiffness: 260, damping: 28 }, Fs = "cubic-bezier(0.32, 1.28, 0.52, 1)", Bs = 420, yo = 60, zs = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Eo = /* @__PURE__ */ new Map(), ve = ({
  stiffness: e,
  damping: t,
  mass: l = 1
}) => {
  const o = `${e}/${t}/${l}`, r = Eo.get(o);
  if (r)
    return r;
  if (!zs)
    return { easing: Fs, duration: Bs };
  const s = 1 / 600;
  let i = 0, a = 0, u = 0, d = 1 / yo;
  const m = [0];
  for (; u < 3; ) {
    const g = (-e * (i - 1) - t * a) / l;
    if (a += g * s, i += a * s, u += s, u >= d && (m.push(i), d += 1 / yo, Math.abs(i - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const p = {
    easing: `linear(${m.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return Eo.set(o, p), p;
}, Jt = (e) => !!(e && typeof e.animate == "function"), _t = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Gs = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((t) => t.cancel());
}, Ws = (e, t = 1.14) => {
  if (!Jt(e) || _t())
    return;
  const l = ve(Bl);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${t})`, offset: 0.18, easing: l.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(l.duration / 0.82) }
  );
}, Hs = 1.6, br = 110, lt = 110, ut = ve(zl), Us = (e, t = br) => e >= t ? 0 : (1 + Math.cos(Math.PI * e / t)) / 2, xr = (e, t) => {
  const { offsetWidth: l, offsetHeight: o } = e;
  if (!(l > 0 && o > 0))
    return 1 / 0;
  const r = t.getBoundingClientRect(), s = r.left + t.clientLeft, i = r.top + t.clientTop, a = e.getBoundingClientRect(), u = a.left + a.width / 2, d = a.top + a.height / 2, m = Math.min(
    u - l / 2 - s,
    s + t.clientWidth - (u + l / 2)
  ), p = Math.min(
    d - o / 2 - i,
    i + t.clientHeight - (d + o / 2)
  );
  return Math.min(1 + 2 * m / l, 1 + 2 * p / o);
}, vr = (e, {
  enabled: t,
  axis: l,
  itemSelector: o,
  glyphSelector: r,
  transition: s,
  maxScale: i = Hs,
  reach: a = br,
  carrierSelector: u,
  boundsRef: d
}) => {
  const m = c.useRef(0), p = c.useRef(
    /* @__PURE__ */ new WeakMap()
  ), g = c.useRef(/* @__PURE__ */ new Set()), f = c.useRef(/* @__PURE__ */ new Set()), w = s ? `, ${s}` : "", N = (I) => u ? I.closest(u) : null, E = (I) => {
    var M;
    const [_ = "0", A = "0"] = (((M = N(I)) == null ? void 0 : M.style.translate) ?? "").split(" ").filter(Boolean);
    return l === "x" ? parseFloat(_) || 0 : parseFloat(A) || 0;
  }, C = (I) => {
    const _ = I.getBoundingClientRect();
    return (l === "x" ? _.left + _.width / 2 : _.top + _.height / 2) - E(I);
  }, v = (I) => {
    const _ = I.getBoundingClientRect();
    return Array.from(I.querySelectorAll(o)).filter((A) => {
      var U;
      const M = (U = A.parentElement) == null ? void 0 : U.closest(o);
      if (M && I.contains(M))
        return !1;
      const L = A.getBoundingClientRect(), K = C(A), P = l === "x" ? K : L.left + L.width / 2, k = l === "x" ? L.top + L.height / 2 : K;
      return L.width > 0 && P >= _.left && P <= _.right && k >= _.top && k <= _.bottom;
    }).map((A) => ({
      item: A,
      glyph: r ? A.querySelector(r) : A
    })).filter(
      (A) => A.glyph !== null
    );
  }, S = (I, _) => {
    if (_ === I)
      return i;
    let A = p.current.get(_);
    if (A === void 0) {
      const K = Number(_.style.scale) || 1, P = _.getBoundingClientRect();
      A = { width: P.width / K, height: P.height / K }, p.current.set(_, A);
    }
    if (!(A.width > 0 && A.height > 0))
      return 1;
    const M = I.getBoundingClientRect(), L = Math.min(
      M.width / A.width,
      M.height / A.height
    );
    return Math.max(1, Math.min(L, i));
  }, $ = (I) => {
    const _ = d == null ? void 0 : d.current;
    return _ != null && _.contains(I) ? xr(I, _) : 1 / 0;
  }, y = () => {
    var I, _, A, M;
    cancelAnimationFrame(m.current), g.current.forEach((L) => {
      L.style.transition = `scale ${ut.duration}ms ${ut.easing}${w}`, L.style.scale = "";
    }), g.current.clear(), f.current.forEach((L) => {
      L.style.transition = `translate ${ut.duration}ms ${ut.easing}`, L.style.translate = "";
    }), f.current.clear(), (I = e.current) == null || I.style.setProperty(
      "--dock-scale-timing",
      `${ut.duration}ms ${ut.easing}`
    ), (_ = e.current) == null || _.style.removeProperty("--dock-spread"), (A = e.current) == null || A.style.removeProperty("--dock-max-scale"), (M = e.current) == null || M.style.removeProperty("--dock-active-scale");
  }, R = (I, _, A) => {
    const M = l === "x" ? _ : A, L = v(I).map(({ item: k, glyph: U }) => {
      const ce = C(k), re = 1 + (Math.max(1, Math.min(S(k, U), $(U))) - 1) * Us(Math.abs(M - ce), a);
      U.style.transition = `scale ${lt}ms ease-out${w}`, re > 1.001 ? (U.style.scale = re.toFixed(3), g.current.add(U)) : g.current.has(U) && (U.style.scale = "", g.current.delete(U));
      const Ae = l === "x" ? k.offsetWidth : k.offsetHeight;
      return { item: k, centre: ce, scale: re, growth: (re - 1) * Ae };
    });
    I.style.setProperty(
      "--dock-scale-timing",
      `${lt}ms ease-out`
    ), I.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...L.map(({ scale: k }) => k)).toFixed(3)
    );
    const K = L.find(({ item: k }) => k.dataset.active === "true");
    if (I.style.setProperty(
      "--dock-active-scale",
      ((K == null ? void 0 : K.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const P = L.reduce((k, { growth: U }) => k + U, 0);
    I.style.setProperty("--dock-spread", `${P.toFixed(1)}px`), L.forEach(({ item: k, centre: U, growth: ce }) => {
      const J = N(k);
      if (!J)
        return;
      const re = L.reduce(
        (Ae, xe) => xe.centre < U ? Ae + xe.growth : Ae,
        ce / 2
      );
      J.style.transition = `translate ${lt}ms ease-out`, Math.abs(re) > 0.1 ? (J.style.translate = l === "x" ? `${re.toFixed(1)}px 0` : `0 ${re.toFixed(1)}px`, f.current.add(J)) : f.current.has(J) && (J.style.translate = "", f.current.delete(J));
    });
  }, T = (I) => {
    if (I.pointerType && I.pointerType !== "mouse" || _t())
      return;
    const _ = I.currentTarget, { clientX: A, clientY: M } = I;
    cancelAnimationFrame(m.current), m.current = requestAnimationFrame(() => {
      const L = _.getBoundingClientRect(), K = l === "x" ? M : A, [P, k] = l === "x" ? [L.top, L.bottom] : [L.left, L.right];
      if (K < P || K > k) {
        y();
        return;
      }
      R(_, A, M);
    });
  }, O = (I) => {
    const _ = e.current;
    if (!t || !_ || _t())
      return;
    const A = I.getBoundingClientRect();
    R(_, A.left + A.width / 2, A.top + A.height / 2);
  };
  return c.useEffect(() => {
    t || y();
  }, [t]), c.useEffect(() => () => cancelAnimationFrame(m.current), []), {
    containerProps: t ? { onPointerMove: T, onPointerLeave: y, onScrollCapture: y } : {},
    swellOn: O,
    settle: y
  };
}, yr = c.createContext(void 0), Xs = () => typeof document < "u" && document.documentElement.getAttribute("data-color-scheme") === "dark", Ks = (e) => {
  if (typeof MutationObserver > "u" || typeof document > "u")
    return () => {
    };
  const t = new MutationObserver(e);
  return t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["data-color-scheme"]
  }), () => t.disconnect();
}, Ue = () => {
  const e = c.useContext(yr), t = c.useSyncExternalStore(
    Ks,
    Xs,
    () => !1
  );
  return e ? e === "dark" : t;
}, ln = () => ({
  "data-lw-scope": "",
  "data-lw-theme": Ue() ? "dark" : "light"
}), Qt = "data-rail-item", Er = `[${Qt}], button, [role="button"]`, on = c.createContext(!1), Gl = () => {
  const e = c.useContext(on), t = Ue(), l = c.useContext(Fn);
  if (!e)
    return {};
  const o = Dl(t, l);
  return {
    arrow: !1,
    contentClassName: o.className,
    contentStyle: o.style,
    sideOffset: 6
  };
}, Et = ve(zl), Wl = ({
  enabled: e,
  isDark: t,
  selector: l,
  size: o,
  radius: r,
  pinSelector: s,
  pinKey: i = null
}) => {
  const a = c.useRef(null), u = Bn(), [d, m] = c.useState(null), p = c.useRef(null), g = c.useRef(null), f = (y, R) => {
    g.current = R;
    const T = R.getBoundingClientRect(), O = y.getBoundingClientRect(), I = o ?? T.width, _ = o ?? T.height, A = {
      top: Math.round(T.top - O.top + (T.height - _) / 2),
      left: Math.round(T.left - O.left + (T.width - I) / 2),
      width: Math.round(I),
      height: Math.round(_)
    };
    m(
      (M) => M && M.visible && M.top === A.top && M.left === A.left && M.width === A.width && M.height === A.height ? M : { ...A, visible: !0, instant: !(M != null && M.visible) }
    );
  }, w = (y, R) => {
    var O;
    const T = (O = R == null ? void 0 : R.closest) == null ? void 0 : O.call(R, l);
    return T && y.contains(T) ? T : null;
  }, N = (y) => {
    if (!e)
      return;
    const R = w(y.currentTarget, y.target);
    R && f(y.currentTarget, R);
  }, E = (y) => {
    if (!e)
      return;
    const R = w(y.currentTarget, y.target);
    R && y.target.matches(":focus-visible") && f(y.currentTarget, R);
  }, C = () => {
    var T;
    const y = (T = a.current) == null ? void 0 : T.parentElement, R = s && (y == null ? void 0 : y.querySelector(s));
    return y && R ? { container: y, item: R } : null;
  }, v = () => {
    const y = C();
    if (y) {
      f(y.container, y.item);
      return;
    }
    g.current = null, m((R) => R != null && R.visible ? { ...R, visible: !1 } : R);
  };
  c.useEffect(() => {
    var R, T;
    if (!e)
      return;
    const y = C();
    y ? f(y.container, y.item) : (T = (R = a.current) == null ? void 0 : R.parentElement) != null && T.matches(":hover") || v();
  }, [e, i]);
  const S = (y) => {
    const R = y.relatedTarget;
    (!R || !y.currentTarget.contains(R)) && (y.currentTarget.matches(":hover") || v());
  };
  return c.useEffect(() => {
    const y = a.current;
    if (!(d != null && d.visible)) {
      p.current = null;
      return;
    }
    const R = p.current;
    if (p.current = d.top, !Jt(y) || _t() || R === null || d.instant)
      return;
    const T = Math.min(Math.abs(d.top - R) / 600, 0.08);
    T && y.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - T / 2}, ${1 + T})`,
          offset: 0.35
        },
        { transform: "scale(1, 1)" }
      ],
      { duration: Et.duration, easing: "ease-out" }
    );
  }, [d == null ? void 0 : d.top, d == null ? void 0 : d.visible, d == null ? void 0 : d.instant]), {
    lens: e && d ? /* @__PURE__ */ n(
      "div",
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": d.visible ? "true" : "false",
        className: b(
          "lw:pointer-events-none lw:absolute lw:top-0 lw:left-0",
          lr
        ),
        style: {
          ...ar(t, u),
          borderRadius: `${r}px`,
          width: d.width,
          height: d.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset.
          translate: `${d.left}px ${d.top}px`,
          // Swells with the item under it (useDockMagnify); fades in
          // and out at its item's size, never popping from smaller
          scale: "var(--dock-max-scale, 1)",
          opacity: d.visible ? 1 : 0,
          // Its scale on the item's own timing, swelling and settling
          // (useDockMagnify), so the two move as one
          transition: d.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${lt}ms ease-out)` : `translate ${Et.duration}ms ${Et.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${lt}ms ease-out)`
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: N,
      onMouseLeave: v,
      onFocus: E,
      onBlur: S,
      onScrollCapture: v
    } : {}
  };
}, js = (e, t, l = null) => {
  const o = Wl({
    enabled: e,
    isDark: t,
    selector: Er,
    // The rail's buttons exactly, so the hover sits on the item
    size: be,
    radius: qe,
    pinSelector: `[${Qt}][data-open="true"]`,
    pinKey: l
  });
  return {
    ...o,
    lens: o.lens ? c.cloneElement(o.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Ys = (e, t) => {
  let l = 0, o = 0, r = e;
  for (; r && r !== t; ) {
    l += r.offsetTop, o += r.offsetLeft;
    const a = r.offsetParent;
    for (let u = r.parentElement; u && u !== t && (l -= u.scrollTop, o -= u.scrollLeft, u !== a); u = u.parentElement)
      ;
    r = a;
  }
  if (r === t && e.offsetWidth)
    return {
      top: Math.round(l),
      left: Math.round(o),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const s = e.getBoundingClientRect(), i = t.getBoundingClientRect();
  return {
    top: Math.round(s.top - i.top),
    left: Math.round(s.left - i.left),
    width: Math.round(s.width),
    height: Math.round(s.height)
  };
}, qs = ({
  enabled: e,
  isDark: t,
  color: l,
  containerRef: o
}) => {
  const r = c.useRef(null), [s, i] = c.useState(null), a = c.useRef(null), u = c.useCallback(
    (m) => {
      const p = o.current;
      if (!e || !p)
        return;
      const g = p.querySelector(
        `[${Qt}][data-active="true"]`
      );
      if (!g) {
        i(
          (w) => w != null && w.visible ? { ...w, visible: !1 } : w
        );
        return;
      }
      const f = Ys(g, p);
      i(
        (w) => w && w.visible && w.top === f.top && w.left === f.left && w.width === f.width && w.height === f.height ? w : {
          ...f,
          visible: !0,
          instant: m || !(w != null && w.visible)
        }
      );
    },
    [e, o]
  );
  return c.useLayoutEffect(() => {
    u(!1);
  }), c.useEffect(() => {
    const m = o.current;
    if (!e || !m)
      return;
    let p = 0;
    const g = () => {
      cancelAnimationFrame(p), p = requestAnimationFrame(() => u(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    f == null || f.observe(m);
    const w = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return w == null || w.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(p), f == null || f.disconnect(), w == null || w.disconnect();
    };
  }, [e, o, u]), c.useEffect(() => {
    const m = r.current;
    if (!(s != null && s.visible)) {
      a.current = null;
      return;
    }
    const p = a.current;
    if (a.current = s.top, p === null || s.instant || !Jt(m) || _t())
      return;
    const g = Math.min(Math.abs(s.top - p) / 600, 0.08);
    g && m.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - g / 2}, ${1 + g})`,
          offset: 0.35
        },
        { transform: "scale(1, 1)" }
      ],
      { duration: Et.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      className: b(
        "lw:pointer-events-none lw:absolute lw:top-0 lw:left-0",
        lr
      ),
      style: {
        ...ir(l, t),
        borderRadius: `${qe}px`,
        width: s.width,
        height: s.height,
        translate: `${s.left}px ${s.top}px`,
        // Swells with its item (useDockMagnify); fades in and out at
        // its item's size, never popping from smaller
        scale: "var(--dock-active-scale, 1)",
        opacity: s.visible ? 1 : 0,
        // Its scale on the item's own timing, swelling and settling
        // (useDockMagnify), so the two move as one
        transition: s.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${lt}ms ease-out)` : `translate ${Et.duration}ms ${Et.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${lt}ms ease-out)`
      }
    }
  ) : null };
}, Se = 52, Vs = 1.8, Zs = Se / 2, al = "[data-flyout-tile]", Hl = 4, Ul = 32, Sl = Ul + Hl, Js = 104, zt = 24, Nr = "background 160ms ease, color 160ms ease, transform 120ms ease", Qs = 10, Sr = 10, No = Sr + 2, ea = 18, So = 1.08, ta = (e) => {
  for (let t = e.parentElement; t; t = t.parentElement) {
    const { overflowY: l } = getComputedStyle(t);
    if (l === "auto" || l === "scroll")
      return t;
  }
  return null;
}, na = (e) => {
  const t = ta(e);
  if (!t)
    return So;
  const l = xr(e, t);
  return Math.min(So, l / Math.min(l, dr));
}, la = 1190, oa = 1195, _o = 120, ra = 220, Ro = 200, Ao = 8, To = ve(pr), xt = ve(zl), Co = ve(Hn), Oo = 8192, sa = ({ left: e, top: t, width: l, height: o, radius: r }) => {
  const s = Math.min(r, l / 2, o / 2), i = e + l, a = t + o, u = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${Oo} V ${Oo} H 0 Z M ${e + s} ${t} H ${i - s} ${u} ${i} ${t + s} V ${a - s} ${u} ${i - s} ${a} H ${e + s} ${u} ${e} ${a - s} V ${t + s} ${u} ${e + s} ${t} Z')`;
}, aa = ({
  group: e,
  groupKey: t,
  anchor: l,
  railEdge: o,
  railShape: r,
  activePath: s,
  focusFirst: i = !1,
  onNavigate: a,
  onClose: u,
  panelProps: d,
  accentColor: m,
  activeBackgroundColor: p,
  activeForegroundColor: g,
  solidSurface: f
}) => {
  const w = Ue(), N = ln(), E = !!(e && l), C = c.useRef(null);
  e && t && (C.current = { group: e, key: t });
  const v = C.current, S = c.useRef(null);
  l && (S.current = { anchor: l, railEdge: o });
  const [$, y] = c.useState(E);
  E && !$ && y(!0);
  const [R, T] = c.useState(E);
  E && !R && T(!0), c.useEffect(() => {
    if (E)
      return;
    const D = setTimeout(() => T(!1), Ro);
    return () => clearTimeout(D);
  }, [E]);
  const O = c.useRef(null), [I, _] = c.useState({
    x: 0,
    y: 0
  }), A = c.useCallback(() => {
    const D = S.current, F = O.current;
    if (!D || !F)
      return;
    const X = D.anchor.getBoundingClientRect(), W = F.offsetHeight, ee = Math.round(D.railEdge + Qs), le = X.top + X.height / 2 - W / 2, ye = window.innerHeight - W - Ao, oe = Math.round(
      Math.max(Ao, Math.min(le, ye))
    );
    _((de) => de.x === ee && de.y === oe ? de : { x: ee, y: oe });
  }, []);
  c.useLayoutEffect(() => {
    if (!$)
      return;
    A(), window.addEventListener("resize", A), window.addEventListener("scroll", A, !0);
    const D = typeof ResizeObserver > "u" || !O.current ? null : new ResizeObserver(A);
    return D && O.current && D.observe(O.current), () => {
      window.removeEventListener("resize", A), window.removeEventListener("scroll", A, !0), D == null || D.disconnect();
    };
  }, [$, A, l, o, t]), c.useEffect(() => {
    if (!l)
      return;
    const D = na(l);
    D > 1.001 && Ws(l, D);
  }, [l]);
  const [M, L] = c.useState(!1);
  c.useEffect(() => {
    if (!E) {
      L(!1);
      return;
    }
    let D = 0;
    const F = requestAnimationFrame(() => {
      D = requestAnimationFrame(() => L(!0));
    });
    return () => {
      cancelAnimationFrame(F), cancelAnimationFrame(D);
    };
  }, [E]);
  const K = c.useMemo(
    () => v ? $l(v.group.subitems, v.group.icon) : [],
    [v]
  ), P = c.useRef(null), k = vr(P, {
    enabled: E,
    axis: "x",
    itemSelector: al,
    transition: Nr,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: Vs,
    // The neighbours make room as it grows
    carrierSelector: '[role="menuitem"]'
  }), U = c.useRef(void 0), ce = c.useCallback((D) => {
    var ee;
    (ee = U.current) == null || ee.call(U), U.current = void 0;
    const F = D == null ? void 0 : D.parentElement;
    if (!D || !F || typeof MutationObserver > "u")
      return;
    const X = () => {
      const le = D.offsetLeft - D.offsetWidth / 2, ye = le + D.offsetWidth;
      let oe = 0;
      F.querySelectorAll(al).forEach((me) => {
        var Ke;
        if (me.dataset.flyoutGrows !== "up")
          return;
        const he = parseFloat(me.style.scale) || 1, Ce = parseFloat(
          ((Ke = me.closest('[role="menuitem"]')) == null ? void 0 : Ke.style.translate) ?? ""
        ) || 0, Le = me.offsetLeft + Ce - (he - 1) * Se / 2;
        Le < ye && Le + he * Se > le && (oe = Math.max(
          oe,
          (he - 1) * Se - me.offsetTop - No
        ));
      });
      const de = oe > 0 ? `0 ${(-oe).toFixed(1)}px` : "";
      D.style.translate !== de && (D.style.translate = de);
    }, W = new MutationObserver(X);
    W.observe(F, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), U.current = () => W.disconnect();
  }, []), J = c.useRef([]), [re, Ae] = c.useState([]);
  c.useLayoutEffect(() => {
    const D = () => {
      const X = K.map(
        (W, ee) => {
          var le;
          return ((le = J.current[ee]) == null ? void 0 : le.offsetWidth) ?? 0;
        }
      );
      Ae(
        (W) => W.length === X.length && W.every((ee, le) => ee === X[le]) ? W : X
      );
    };
    if (D(), typeof ResizeObserver > "u")
      return;
    const F = new ResizeObserver(D);
    return J.current.slice(0, K.length).forEach((X) => X && F.observe(X)), () => F.disconnect();
  }, [K]);
  const xe = ca(re, K.length), fe = c.useRef([]), Xe = K.findIndex(
    ({ sub: D }) => He(D, s)
  ), [ne, ke] = c.useState(0);
  c.useEffect(() => {
    ke(Math.max(Xe, 0));
  }, [t]), c.useEffect(() => {
    if (!E || !i)
      return;
    const D = setTimeout(() => {
      var F;
      return (F = fe.current[0]) == null ? void 0 : F.focus();
    });
    return () => clearTimeout(D);
  }, [E, i, t]);
  const Te = (D) => {
    var X;
    const F = Math.max(0, Math.min(D, K.length - 1));
    ke(F), (X = fe.current[F]) == null || X.focus();
  }, Pe = (D, F) => {
    var X;
    switch (D.key) {
      case "ArrowRight":
        Te(F + 1);
        break;
      case "ArrowLeft":
        F === 0 ? u(!0) : Te(F - 1);
        break;
      case " ":
        (X = fe.current[F]) == null || X.click();
        break;
      case "Home":
        Te(0);
        break;
      case "End":
        Te(K.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    D.preventDefault();
  }, Fe = "var(--lw-text-primary)", se = w ? "#ffffff" : m;
  return /* @__PURE__ */ x(ie, { children: [
    R ? /* @__PURE__ */ n(
      "div",
      {
        "data-testid": "sidebar-flyout-scrim",
        "data-flyout-scrim": "",
        "data-state": E ? "open" : "closed",
        "aria-hidden": !0,
        onClick: () => u(),
        className: b(
          "lw:fixed lw:inset-y-0 lw:right-0",
          E ? "lw:animate-in lw:fade-in-0" : "lw:animate-out lw:fade-out-0 lw:[animation-fill-mode:forwards]"
        ),
        style: {
          left: r ? 0 : `${o}px`,
          // Clicks in the cut-out reach the rail beneath
          ...r ? { clipPath: sa(r) } : {},
          zIndex: la,
          animationDuration: `${E ? ra : Ro}ms`,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: w ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)"
        }
      }
    ) : null,
    $ && typeof document < "u" ? tr(
      /* @__PURE__ */ n(
        "div",
        {
          ref: O,
          ...N,
          className: b(
            "lw:fixed lw:top-0 lw:left-0",
            _e
          ),
          style: {
            zIndex: oa,
            transform: `translate(${I.x}px, ${I.y}px)`,
            transition: M ? `transform ${xt.duration}ms ${xt.easing}` : "none"
          },
          children: /* @__PURE__ */ n(
            ia,
            {
              in: E,
              onExited: () => y(!1),
              panelProps: d,
              groupText: v == null ? void 0 : v.group.text,
              children: v ? /* @__PURE__ */ x(
                "div",
                {
                  ref: P,
                  role: "menu",
                  "aria-label": v.group.text,
                  ...k.containerProps,
                  onBlur: (D) => {
                    D.currentTarget.contains(
                      D.relatedTarget
                    ) || k.settle();
                  },
                  className: b(
                    "lw:relative",
                    _e
                  ),
                  style: {
                    width: xe.width,
                    height: Sl + Se + Hl + Ul,
                    // The panel stretches as the dock pushes
                    // the pages along, as the Dock's shelf does
                    marginRight: "var(--dock-spread, 0px)",
                    transition: `margin-right ${xt.duration}ms ${xt.easing}`
                  },
                  children: [
                    /* @__PURE__ */ n(
                      "span",
                      {
                        ref: ce,
                        "aria-hidden": !0,
                        "data-testid": "sidebar-flyout-heading",
                        className: b(
                          "lw:pointer-events-none lw:absolute lw:bottom-full lw:left-1/2 lw:-translate-x-1/2 lw:text-[1.125rem] lw:leading-normal lw:font-bold lw:tracking-[0.08em] lw:whitespace-nowrap lw:uppercase",
                          _e
                        ),
                        style: {
                          marginBottom: No,
                          transition: `translate ${lt}ms ease-out`,
                          // The pages' own name colour
                          color: sr(w)
                        },
                        children: v.group.text
                      }
                    ),
                    K.map(({ sub: D, icon: F }, X) => /* @__PURE__ */ n(
                      Rr,
                      {
                        ref: (W) => {
                          fe.current[X] = W;
                        },
                        nameRef: (W) => {
                          J.current[X] = W;
                        },
                        tileLeft: xe.tiles[X],
                        nameLeft: xe.names[X],
                        sub: D,
                        icon: F,
                        index: X,
                        active: He(
                          D,
                          s
                        ),
                        tabIndex: X === ne ? 0 : -1,
                        onClick: (W) => {
                          St(W) && (W.preventDefault(), a(D.path), u());
                        },
                        onKeyDown: (W) => Pe(W, X),
                        onFocus: (W) => {
                          ke(X);
                          const ee = W.currentTarget.querySelector(
                            al
                          );
                          ee && W.currentTarget.matches(
                            ":focus-visible"
                          ) && k.swellOn(ee);
                        },
                        accentColor: m,
                        activeBackgroundColor: p,
                        activeForegroundColor: g,
                        labelColor: Fe,
                        iconColor: se,
                        surface: f,
                        isDark: w
                      },
                      D.path
                    ))
                  ]
                },
                v.key
              ) : null
            }
          )
        }
      ),
      document.body
    ) : null
  ] });
}, ia = ({
  in: e,
  onExited: t,
  panelProps: l,
  groupText: o,
  children: r
}) => {
  const s = c.useRef(null), i = (u) => {
    s.current = u;
    const { ref: d } = l;
    typeof d == "function" ? d(u) : d && (d.current = u);
  }, a = c.useRef(e);
  return a.current = e, c.useLayoutEffect(() => {
    const u = s.current;
    if (Gs(u), e) {
      Jt(u) && !_t() && u.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: Co.duration, easing: Co.easing }
      );
      return;
    }
    if (!Jt(u)) {
      t == null || t();
      return;
    }
    let d = !1;
    const m = () => {
      !d && !a.current && (d = !0, t == null || t());
    }, p = setTimeout(m, _o + 100);
    return u.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: _o,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(m, m), () => clearTimeout(p);
  }, [e]), /* @__PURE__ */ n(
    "div",
    {
      ref: i,
      onMouseEnter: l.onMouseEnter,
      onMouseLeave: l.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": o,
      className: "lw:relative lw:before:absolute lw:before:inset-y-0 lw:before:left-[-12px] lw:before:w-3 lw:before:content-['']",
      style: { padding: Sr },
      children: r
    }
  );
}, _r = (e) => e % 2 === 1, ca = (e, t) => {
  const l = [], o = [];
  let r = -zt, s = -zt, i = -zt;
  for (let a = 0; a < t; a += 1) {
    const u = e[a] || Se, d = _r(a), m = d ? s : i, p = Math.max(
      r + zt + Se / 2,
      m + zt + u / 2
    );
    r = p + Se / 2, d ? s = p + u / 2 : i = p + u / 2, l.push(Math.round(p - Se / 2)), o.push(Math.round(p - u / 2));
  }
  return {
    tiles: l,
    names: o,
    width: Math.round(Math.max(r, s, i, 0))
  };
}, Rr = c.forwardRef(
  ({
    nameRef: e,
    tileLeft: t,
    nameLeft: l,
    sub: o,
    icon: r,
    index: s,
    active: i,
    tabIndex: a,
    onClick: u,
    onKeyDown: d,
    onFocus: m,
    accentColor: p,
    activeBackgroundColor: g,
    activeForegroundColor: f,
    labelColor: w,
    iconColor: N,
    surface: E,
    isDark: C
  }, v) => {
    const S = _r(s), $ = Dl(C, E), y = sr(C), R = {
      animation: `${Is} ${To.duration}ms ${To.easing} both`,
      animationDelay: `${s * ea}ms`
    }, T = C ? y : p, O = {
      // Hovered or focused, the tile and its name take the rail's hover
      // colour — a tint of the accent, whatever the accent is — mixed
      // into the surface so it is solid rather than see-through
      "--lw-tile-hover": `color-mix(in srgb, ${p} ${C ? 20 : 12}%, ${E})`,
      "--lw-tile-outline": p,
      "--lw-name-lit": T,
      // The current page's icon takes the accent's foreground
      "--lw-tile-icon": i ? f : N
    };
    return /* @__PURE__ */ x(
      "a",
      {
        ref: v,
        href: o.path,
        role: "menuitem",
        tabIndex: a,
        "aria-current": i ? "page" : void 0,
        "data-testid": `sidebar-subitem-${o.text}`,
        "data-active": i ? "true" : "false",
        onClick: u,
        onKeyDown: d,
        onFocus: m,
        className: "lw:group/tile lw:pointer-events-none lw:absolute lw:inset-0 lw:block lw:no-underline lw:outline-none",
        style: { ...O, color: w },
        children: [
          /* @__PURE__ */ n(
            "span",
            {
              "data-flyout-bridge": "",
              "aria-hidden": !0,
              className: "lw:pointer-events-auto lw:absolute lw:top-0 lw:block lw:h-full",
              style: { left: t, width: Se }
            }
          ),
          /* @__PURE__ */ n(
            "span",
            {
              "data-flyout-tile": "",
              "data-flyout-grows": S ? "down" : "up",
              className: b(
                $.className,
                "lw:pointer-events-auto lw:absolute lw:box-border lw:flex lw:items-center lw:justify-center lw:rounded-full lw:p-0",
                "lw:[&_svg]:size-9 lw:[&_svg]:text-(--lw-tile-icon) lw:[&_svg]:transition-colors lw:[&_svg]:duration-150",
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                "lw:[&_[role=img]]:size-9 lw:[&_[role=img]>img]:size-9",
                !i && "lw:group-hover/tile:bg-(--lw-tile-hover)! lw:group-focus-visible/tile:bg-(--lw-tile-hover)!",
                "lw:group-focus-visible/tile:outline-2 lw:group-focus-visible/tile:outline-offset-2 lw:group-focus-visible/tile:outline-(--lw-tile-outline) lw:group-focus-visible/tile:outline-solid",
                "lw:group-active/tile:[transform:scale(0.94)] lw:motion-reduce:group-active/tile:[transform:none]",
                _e
              ),
              style: {
                ...$.style,
                // Cards of their own: a surface and a soft shadow, no
                // edge, lifted a little more than a resting label
                border: "none",
                boxShadow: C ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)",
                left: t,
                top: Sl,
                width: Se,
                height: Se,
                borderRadius: Zs,
                // Grows out of the row, away from its name
                transformOrigin: S ? "center top" : "center bottom",
                transition: `scale ${xt.duration}ms ${xt.easing}, ${Nr}`,
                // The current page: the accent, solid, its icon and text in
                // the accent's foreground — as the current page on the rail
                ...i ? {
                  background: g ?? p,
                  color: f
                } : {},
                ...R
              },
              children: r
            }
          ),
          /* @__PURE__ */ n(
            "span",
            {
              "data-flyout-slot": "",
              className: "lw:pointer-events-auto lw:absolute lw:flex",
              style: {
                left: l,
                top: S ? 0 : Sl + Se + Hl,
                height: Ul,
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: S ? "flex-end" : "flex-start"
              },
              children: /* @__PURE__ */ n(
                "span",
                {
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": o.text,
                  className: b(
                    "lw:block lw:px-2 lw:py-0 lw:text-center lw:text-[0.75rem] lw:leading-4 lw:text-balance lw:transition-colors lw:duration-150",
                    "lw:after:invisible lw:after:block lw:after:h-0 lw:after:overflow-hidden lw:after:font-semibold lw:after:content-[attr(data-text)]",
                    i ? "lw:font-semibold" : "lw:font-medium",
                    "lw:group-hover/tile:font-semibold lw:group-hover/tile:text-(--lw-name-lit)! lw:group-focus-visible/tile:font-semibold lw:group-focus-visible/tile:text-(--lw-name-lit)!",
                    _e
                  ),
                  style: {
                    maxWidth: Js,
                    color: i ? T : y,
                    ...R
                  },
                  children: o.text
                }
              )
            }
          )
        ]
      }
    );
  }
);
Rr.displayName = "FlyoutTile";
const da = aa;
function en({
  orientation: e = "horizontal",
  className: t,
  ...l
}) {
  return /* @__PURE__ */ n(
    "div",
    {
      role: "separator",
      "aria-orientation": e,
      "data-slot": "separator",
      className: b(
        "lw:shrink-0 lw:bg-border",
        e === "horizontal" ? "lw:h-px lw:w-full" : "lw:w-px lw:self-stretch",
        t
      ),
      ...l
    }
  );
}
const Ar = c.forwardRef(({ className: e, sideOffset: t = 4, arrow: l = !1, children: o, ...r }, s) => {
  const i = ln();
  return /* @__PURE__ */ n(vt.Portal, { children: /* @__PURE__ */ x(
    vt.Content,
    {
      ref: s,
      ...i,
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: b(
        "lw:z-[1500] lw:max-w-xs lw:rounded-md lw:bg-tooltip lw:px-2 lw:py-1 lw:text-xs lw:font-medium lw:text-tooltip-foreground lw:animate-in lw:fade-in-0 lw:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95",
        e
      ),
      ...r,
      children: [
        o,
        l ? /* @__PURE__ */ n(
          vt.Arrow,
          {
            className: "lw:fill-tooltip",
            width: 10,
            height: 5
          }
        ) : null
      ]
    }
  ) });
});
Ar.displayName = "TooltipContent";
function Re({
  title: e,
  children: t,
  side: l = "top",
  align: o,
  sideOffset: r,
  open: s,
  onOpenChange: i,
  delayDuration: a = 300,
  contentClassName: u,
  contentStyle: d,
  disabled: m = !1,
  arrow: p = !1,
  disableHoverableContent: g = !0
}) {
  const f = e == null || e === "" || e === !1;
  return /* @__PURE__ */ n(
    vt.Provider,
    {
      delayDuration: a,
      disableHoverableContent: g,
      children: /* @__PURE__ */ x(
        vt.Root,
        {
          open: m || f ? !1 : s,
          onOpenChange: i,
          children: [
            /* @__PURE__ */ n(vt.Trigger, { asChild: !0, children: t }),
            f ? null : /* @__PURE__ */ n(
              Ar,
              {
                side: l,
                align: o,
                sideOffset: r,
                className: u,
                style: d,
                arrow: p,
                children: e
              }
            )
          ]
        }
      )
    }
  );
}
const ua = 50, wa = 250, fa = (e) => {
  const [t, l] = c.useState(null), o = c.useRef(t);
  o.current = t;
  const r = c.useRef(/* @__PURE__ */ new Map()), s = c.useRef(null), i = c.useRef(void 0), a = c.useRef(void 0), u = () => {
    clearTimeout(i.current), i.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = (C, v, S = !1) => {
    u(), d(), l({ key: C, pinned: v, focusFirst: S });
  }, p = c.useCallback((C = !1) => {
    var S, $;
    u(), d();
    const v = (S = o.current) == null ? void 0 : S.key;
    l(null), C && v && (($ = r.current.get(v)) == null || $.focus());
  }, []), g = () => {
    u(), !(!o.current || o.current.pinned) && (d(), a.current = setTimeout(() => p(), wa));
  };
  c.useEffect(() => {
    e || p();
  }, [e, p]), c.useEffect(
    () => () => {
      u(), d();
    },
    []
  );
  const f = t !== null;
  return c.useEffect(() => {
    if (!f)
      return;
    const C = ($) => {
      var R;
      const y = $;
      return y ? (R = s.current) != null && R.contains(y) ? !0 : [...r.current.values()].some((T) => T.contains(y)) : !1;
    }, v = ($) => {
      C($.target) || p();
    }, S = ($) => {
      var y;
      $.key === "Escape" && p(
        !!((y = s.current) != null && y.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", S), () => {
      document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", S);
    };
  }, [f, p]), {
    state: t,
    close: p,
    triggerProps: (C) => ({
      ref: (v) => {
        v ? r.current.set(C, v) : r.current.delete(C);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        d();
        const v = o.current;
        if (v) {
          v.key !== C && m(C, v.pinned);
          return;
        }
        u(), i.current = setTimeout(
          () => m(C, !1),
          ua
        );
      },
      onMouseLeave: g,
      onClick: (v) => {
        var S;
        if (v.detail === 0) {
          m(C, !0, !0);
          return;
        }
        ((S = o.current) == null ? void 0 : S.key) !== C && m(C, !1);
      },
      onKeyDown: (v) => {
        v.key === "ArrowRight" && (v.preventDefault(), m(C, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: d,
      onMouseLeave: g
    },
    onRailLeafEnter: () => {
      u(), o.current && !o.current.pinned && p();
    },
    getTrigger: (C) => r.current.get(C) ?? null
  };
}, ma = fa, ha = 264, pa = 72, Io = 64, ga = "lw:outline-none lw:focus:outline-none lw:focus-visible:outline-none", ba = 16, xa = 14, va = 32, ya = 20, $o = "0.7rem", bn = ve(Bl), il = "var(--lw-hover-wash)", Ea = "#ffffff", Gt = (e, t) => ({
  className: b(
    (t == null ? void 0 : t.bg) && "lw:hover:bg-(--lw-row-hover-bg)!",
    (t == null ? void 0 : t.fg) && "lw:hover:text-(--lw-row-hover-fg)!",
    (t == null ? void 0 : t.radius) && "lw:hover:rounded-(--lw-row-hover-radius)!"
  ),
  style: {
    color: e.fg,
    backgroundColor: e.bg ?? "transparent",
    ...t != null && t.bg ? { "--lw-row-hover-bg": t.bg } : {},
    ...t != null && t.fg ? { "--lw-row-hover-fg": t.fg } : {},
    ...t != null && t.radius ? { "--lw-row-hover-radius": t.radius } : {}
  }
}), bt = c.forwardRef(
  ({ href: e, disabled: t, ...l }, o) => e ? /* @__PURE__ */ n(
    "a",
    {
      ref: o,
      href: e,
      ...l
    }
  ) : /* @__PURE__ */ n(
    "button",
    {
      ref: o,
      type: "button",
      disabled: t,
      ...l
    }
  )
);
bt.displayName = "RowControl";
const cl = "lw:relative lw:flex lw:w-full lw:min-w-0 lw:grow lw:items-center lw:justify-start lw:text-left lw:no-underline lw:transition-colors lw:duration-150 lw:outline-none lw:focus-visible:bg-selected lw:disabled:opacity-40", xn = "lw:inline-flex lw:shrink-0 lw:text-inherit lw:[&_svg]:size-6", vn = "lw:my-1 lw:min-w-0 lw:flex-auto", dl = b(
  "lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:p-2 lw:transition-[background-color,border-radius,color] lw:duration-150 lw:disabled:opacity-40 lw:[&_svg]:size-6",
  ga
), st = ({ text: e, variant: t = "body1", center: l = !1, fontSize: o, fontWeight: r }) => {
  const s = c.useRef(null), [i, a] = c.useState(!1), u = c.useCallback(() => {
    const d = s.current;
    d && a(d.scrollWidth > d.clientWidth + 0.5);
  }, []);
  return c.useLayoutEffect(() => {
    u();
  }, [u, e]), c.useEffect(() => {
    const d = s.current;
    if (!d)
      return;
    const m = new ResizeObserver(() => u());
    return m.observe(d), () => m.disconnect();
  }, [u]), /* @__PURE__ */ n(
    Re,
    {
      title: e,
      side: "right",
      arrow: !0,
      delayDuration: 400,
      disabled: !i,
      children: /* @__PURE__ */ n(
        "span",
        {
          ref: s,
          className: b(
            "lw:block lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap lw:text-inherit",
            t === "caption" ? "lw:text-xs lw:leading-[1.66]" : "lw:text-sm lw:leading-normal",
            l && "lw:w-full lw:text-center lw:leading-[1.1]"
          ),
          style: {
            ...o ? { fontSize: o } : {},
            ...r ? { fontWeight: r } : {}
          },
          children: e
        }
      )
    }
  );
}, Na = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, Sa = 4, _a = (e) => Math.max(0, Math.min(Sa, Cn - e)), Ra = ({
  open: e,
  size: t = ba
}) => /* @__PURE__ */ n(
  e ? ms : hs,
  {
    "aria-hidden": !0,
    className: "lw:shrink-0 lw:opacity-75",
    style: { width: t, height: t }
  }
), ko = ({ open: e }) => /* @__PURE__ */ n(
  fs,
  {
    "aria-hidden": !0,
    className: b(
      "lw:size-5! lw:shrink-0 lw:opacity-75 lw:transition-transform lw:duration-150",
      e && "lw:rotate-90"
    )
  }
), yn = 600, at = `${zn}px`, Cn = (Vt - be) / 2, Aa = (e) => {
  const t = Math.max(0, e - Cn);
  return {
    paddingLeft: `${Math.max(0, Cn - t)}px`,
    paddingRight: `${Math.max(0, Cn - e)}px`
  };
};
function Ta(e, t) {
  const [l, o] = c.useState(0);
  return c.useLayoutEffect(() => {
    const r = e.current;
    if (!t || !r) {
      o(0);
      return;
    }
    const s = () => {
      const a = getComputedStyle(r), u = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth);
      o(Math.max(0, r.offsetWidth - r.clientWidth - u));
    };
    if (s(), typeof ResizeObserver > "u")
      return;
    const i = new ResizeObserver(s);
    return i.observe(r), r.firstElementChild && i.observe(r.firstElementChild), () => i.disconnect();
  }, [e, t]), l;
}
function Ca(e) {
  const [t, l] = c.useState(!1);
  return c.useLayoutEffect(() => {
    const o = e.current, r = o == null ? void 0 : o.firstElementChild;
    if (!o || !r)
      return;
    const s = () => {
      const a = getComputedStyle(o), u = r.offsetHeight + parseFloat(a.paddingTop) + parseFloat(a.paddingBottom);
      l(u > o.clientHeight + 0.5);
    };
    if (s(), typeof ResizeObserver > "u")
      return;
    const i = new ResizeObserver(s);
    return i.observe(o), i.observe(r), () => i.disconnect();
  }, [e]), t;
}
const En = 8;
function Oa(e, t, l) {
  c.useEffect(() => {
    const o = e.current;
    if (!o)
      return;
    const r = (u) => {
      const d = Array.from(
        o.querySelectorAll('[data-active="true"]')
      ).filter((f) => f.offsetHeight > 0).pop();
      if (!d)
        return;
      const m = o.getBoundingClientRect(), p = d.getBoundingClientRect();
      let g = 0;
      p.top < m.top + En ? g = p.top - m.top - En : p.bottom > m.bottom - En && (g = p.bottom - m.bottom + En), g !== 0 && o.scrollBy({ top: g, behavior: u });
    }, s = requestAnimationFrame(() => r("smooth")), i = window.setTimeout(() => r("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => r("auto"));
    return a == null || a.observe(o), () => {
      cancelAnimationFrame(s), window.clearTimeout(i), a == null || a.disconnect();
    };
  }, [e, t, l]);
}
const Ia = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: l,
  onLinkClick: o,
  onLinkAction: r,
  logo: s,
  title: i,
  onBrandClick: a,
  brandMenuOpen: u,
  showHeaderBar: d = !1,
  headerBackgroundColor: m,
  headerForegroundColor: p,
  brandColor: g,
  activeAccentColor: f = "#01584f",
  activeBackgroundColor: w,
  groupArrowColor: N,
  groupAccentColor: E,
  activeForegroundColor: C,
  foregroundColor: v,
  surfaceBackgroundColor: S,
  flyoutSurfaceColor: $,
  collapsed: y = !1,
  expandedWidth: R = ha,
  collapsedWidth: T = pa,
  showLabels: O = !1,
  topInsetPx: I = 0,
  topContent: _,
  footer: A,
  submenuMode: M = "inline"
}) => {
  var $t;
  const L = Ue(), K = c.useContext(Fn), P = M === "flyout" && y && !O, k = ma(P), U = c.useRef(null), ce = c.useRef(null), J = c.useRef(null);
  Oa(J, l, y);
  const re = Ta(J, P), Ae = Ca(J), xe = js(P, L, (($t = k.state) == null ? void 0 : $t.key) ?? null), fe = vr(U, {
    enabled: P,
    axis: "y",
    itemSelector: Er,
    maxScale: dr,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: be + zn,
    // Only 4px of padding at the scroller's ends: the first and last
    // buttons swell less, or the last would scroll the rail
    boundsRef: J,
    transition: `transform ${bn.duration}ms ${bn.easing}, background-color 160ms ease`
  }), Xe = {
    ...xe.containerProps,
    ...fe.containerProps,
    ...P ? {
      onScrollCapture: () => {
        var h, z;
        (z = (h = xe.containerProps).onScrollCapture) == null || z.call(h), fe.settle();
      }
    } : {}
  }, ne = w ?? f, ke = qs({
    enabled: P,
    isDark: L,
    color: ne,
    containerRef: ce
  }), { close: Te } = k;
  c.useEffect(() => {
    Te();
  }, [l, Te]);
  const [Pe, Fe] = c.useState(
    {}
  ), se = C ?? El(ne), D = { bg: ne, fg: se }, F = E ?? Zt(f), X = Wn(S, L), W = v ?? (L ? "var(--lw-text-primary)" : f), ee = m ?? X, le = p ?? (m ? El(ee) : v ?? (L ? Ea : f)), ye = Zt(le), oe = (h) => {
    o == null || o(h);
  }, de = (h) => h ? {
    href: h,
    onClick: (z) => {
      St(z) && (z.preventDefault(), oe(h));
    }
  } : {}, me = (h, z) => {
    Fe((j) => ({ ...j, [h]: !z }));
  }, he = (h, z) => Pe[z] ?? tt(h, l), Ce = (h, z) => Gt(
    {
      fg: h ? se : W,
      bg: h ? ne : void 0
    },
    h || O ? D : { bg: z }
  ), Le = (h) => {
    const z = He(h, l), j = Ce(z, F), G = /* @__PURE__ */ x(
      bt,
      {
        disabled: !h.path,
        ...de(h.path),
        "data-testid": `sidebar-item-${h.text}`,
        "data-active": z ? "true" : "false",
        "data-selected": z ? "true" : void 0,
        className: b(
          cl,
          "lw:rounded-lg lw:px-3",
          h.subtitle ? "lw:py-2" : "lw:py-2.5",
          // Room for the action button laid over the row's end
          h.action && "lw:pr-12",
          j.className
        ),
        style: j.style,
        children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: xn,
              style: { minWidth: h.subtitle ? 48 : 36 },
              children: h.icon
            }
          ),
          /* @__PURE__ */ x(
            "span",
            {
              className: b(vn, h.subtitle && "lw:my-0"),
              children: [
                /* @__PURE__ */ n(
                  st,
                  {
                    text: h.text,
                    fontWeight: yn
                  }
                ),
                h.subtitle ? /* @__PURE__ */ n("span", { className: "lw:block lw:opacity-85", children: /* @__PURE__ */ n(
                  st,
                  {
                    text: h.subtitle,
                    fontSize: "0.8125rem"
                  }
                ) }) : null
              ]
            }
          )
        ]
      },
      h.text
    );
    if (!h.action)
      return G;
    const { action: H } = h, Z = z ? se : W;
    return /* @__PURE__ */ x("div", { className: "lw:relative", children: [
      G,
      /* @__PURE__ */ n(Re, { title: H.label, side: "right", arrow: !0, children: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          "aria-label": H.label,
          "data-testid": `sidebar-action-${h.text}`,
          onClick: () => {
            H.onClick(), r == null || r();
          },
          className: b(
            "lw:absolute lw:top-1/2 lw:right-2 lw:inline-flex lw:size-[30px] lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-md lw:border lw:border-solid lw:transition-colors lw:[&_svg]:size-[18px]",
            "lw:hover:bg-(--lw-action-hover-bg)",
            // No lingering outline after a click; a clear ring for keyboard focus
            "lw:focus:outline-none lw:focus-visible:outline-2 lw:focus-visible:outline-offset-1 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-action-ring)"
          ),
          style: {
            borderColor: z ? "rgba(255, 255, 255, 0.35)" : F,
            color: Z,
            "--lw-action-hover-bg": z ? "rgba(255, 255, 255, 0.15)" : F,
            "--lw-action-ring": Z
          },
          children: H.icon
        }
      ) })
    ] }, h.text);
  }, Ke = (h) => {
    const z = tt(h, l), j = He(h, l), G = gt("", h), H = he(h, G), Z = Ce(j, F);
    return /* @__PURE__ */ x(
      "div",
      {
        "data-testid": `sidebar-group-${h.text}`,
        className: "lw:rounded-lg",
        style: {
          backgroundColor: z ? F : "transparent"
        },
        children: [
          /* @__PURE__ */ x(
            bt,
            {
              onClick: () => me(G, H),
              "data-testid": `sidebar-item-${h.text}`,
              "data-active": j ? "true" : "false",
              "aria-expanded": H,
              className: b(
                cl,
                "lw:rounded-lg lw:px-3 lw:py-2.5",
                Z.className
              ),
              style: Z.style,
              children: [
                /* @__PURE__ */ n("span", { className: xn, style: { minWidth: 36 }, children: h.icon }),
                /* @__PURE__ */ n("span", { className: vn, children: /* @__PURE__ */ n(
                  st,
                  {
                    text: h.text,
                    fontWeight: yn
                  }
                ) }),
                /* @__PURE__ */ n(ko, { open: H })
              ]
            }
          ),
          H ? /* @__PURE__ */ n(
            "div",
            {
              "data-testid": `sidebar-children-${h.text}`,
              className: "lw:pb-1 lw:animate-in lw:fade-in-0",
              children: h.subitems.map(
                (Y) => Be(Y, G, 1)
              )
            }
          ) : null
        ]
      },
      h.text
    );
  }, Be = (h, z, j) => {
    const G = gt(z, h), H = va + (j - 1) * ya, Z = b(
      cl,
      "lw:mx-1 lw:w-[calc(100%-8px)] lw:rounded-lg lw:py-1.5 lw:pr-4"
    );
    if (yt(h)) {
      const ae = tt(h, l), ue = He(h, l), Ze = he(h, G), ze = Ce(ue, il);
      return /* @__PURE__ */ x("div", { "data-testid": `sidebar-group-${h.text}`, children: [
        /* @__PURE__ */ x(
          bt,
          {
            onClick: () => me(G, Ze),
            "data-testid": `sidebar-subitem-${h.text}`,
            "data-active": ae ? "true" : "false",
            "aria-expanded": Ze,
            className: b(Z, ze.className),
            style: { ...ze.style, paddingLeft: H },
            children: [
              h.icon ? /* @__PURE__ */ n(
                "span",
                {
                  className: xn,
                  style: { minWidth: 32 },
                  children: h.icon
                }
              ) : null,
              /* @__PURE__ */ n("span", { className: vn, children: /* @__PURE__ */ n(
                st,
                {
                  text: h.text,
                  fontWeight: yn
                }
              ) }),
              /* @__PURE__ */ n(ko, { open: Ze })
            ]
          }
        ),
        Ze ? /* @__PURE__ */ n(
          "div",
          {
            "data-testid": `sidebar-children-${h.text}`,
            className: "lw:animate-in lw:fade-in-0",
            children: h.subitems.map(
              (Yn) => Be(Yn, G, j + 1)
            )
          }
        ) : null
      ] }, G);
    }
    const Y = He(h, l), pe = Ce(Y, il);
    return /* @__PURE__ */ x(
      bt,
      {
        disabled: !h.path,
        ...de(h.path),
        "data-testid": `sidebar-subitem-${h.text}`,
        "data-active": Y ? "true" : "false",
        "data-selected": Y ? "true" : void 0,
        className: b(Z, pe.className),
        style: { ...pe.style, paddingLeft: H },
        children: [
          h.icon ? /* @__PURE__ */ n("span", { className: xn, style: { minWidth: 32 }, children: h.icon }) : null,
          /* @__PURE__ */ n("span", { className: vn, children: /* @__PURE__ */ n(
            st,
            {
              text: h.text,
              fontWeight: yn
            }
          ) })
        ]
      },
      G
    );
  }, an = b(
    "lw:rounded-md! lw:[&_svg]:size-6 lw:hover:bg-transparent! lw:active:[transform:scale(0.88)] lw:active:duration-[90ms] lw:motion-reduce:active:[transform:none]",
    _e
  ), At = (h) => ({
    ...h ? { backgroundColor: "transparent" } : {},
    transition: `transform ${bn.duration}ms ${bn.easing}, background-color 160ms ease`
  }), Tt = Dl(L, K), it = (h, z, j, G, H, Z) => {
    const Y = !H, pe = O ? Gt(
      {
        fg: G ? se : W,
        bg: G ? ne : void 0
      },
      D
    ) : (
      // Icon-only collapsed rail (collapsible variant): original
      // hover — accent when active, else a subtle tint; no
      // foreground change. The glass rail has no hover of its own.
      Gt(
        {
          fg: G ? se : W,
          bg: G ? ne : void 0
        },
        P ? void 0 : {
          bg: G ? ne : Z != null && Z.insideGroup ? il : F,
          radius: "8px"
        }
      )
    ), ae = P ? be : 44, ue = /* @__PURE__ */ x(
      bt,
      {
        "aria-label": z,
        disabled: Y,
        ...de(H),
        onMouseEnter: P ? k.onRailLeafEnter : void 0,
        ...P ? { [Qt]: "" } : {},
        "data-testid": (Z == null ? void 0 : Z.testId) ?? `sidebar-item-${z}`,
        "data-active": G ? "true" : "false",
        className: b(
          dl,
          pe.className,
          O ? (
            // 8px padding on all sides of the item container.
            "lw:flex lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:gap-0.5 lw:rounded-lg lw:p-2 lw:[&_svg]:size-[22px]"
          ) : G ? "lw:rounded-lg" : "lw:rounded-full",
          !O && P && an
        ),
        style: {
          ...pe.style,
          ...O ? {} : { width: ae, height: ae },
          ...!O && P ? At(G) : {}
        },
        children: [
          j,
          O ? /* @__PURE__ */ n(
            st,
            {
              text: z,
              variant: "caption",
              center: !0,
              fontSize: $o
            }
          ) : null
        ]
      }
    );
    return O ? Y ? /* @__PURE__ */ n("span", { children: ue }, h) : /* @__PURE__ */ n(c.Fragment, { children: ue }, h) : /* @__PURE__ */ n(
      Re,
      {
        title: z,
        side: "right",
        arrow: !P,
        ...P ? {
          contentClassName: Tt.className,
          contentStyle: Tt.style,
          sideOffset: 6
        } : {},
        children: Y ? /* @__PURE__ */ n("span", { children: ue }) : ue
      },
      h
    );
  }, Ct = (h) => {
    var H;
    const z = tt(h, l), j = gt("", h), G = ((H = k.state) == null ? void 0 : H.key) === j;
    return /* @__PURE__ */ n(
      "div",
      {
        "data-testid": `sidebar-group-${h.text}`,
        className: "lw:flex lw:w-full lw:justify-center",
        children: /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            ...k.triggerProps(j),
            "aria-label": h.text,
            "aria-haspopup": "menu",
            "aria-expanded": G,
            "data-testid": `sidebar-item-${h.text}`,
            "data-active": z ? "true" : "false",
            "data-open": G ? "true" : "false",
            [Qt]: "",
            className: b(
              dl,
              an,
              // The icon stays centred, in line with every other icon
              // down the rail; the arrow sits in the room beside it,
              // just past the button, in the rail's side gutter (drawn
              // back inside it when the scrollbar takes that gutter).
              // Pointed at, or its pages already out, it has said its piece
              "lw:after:pointer-events-none lw:after:absolute lw:after:top-1/2 lw:after:h-[8px] lw:after:w-[5px] lw:after:-translate-y-1/2 lw:after:content-[''] lw:after:transition-opacity lw:after:duration-150 lw:after:right-(--lw-arrow-right) lw:after:bg-(--lw-arrow-bg) lw:after:opacity-(--lw-arrow-opacity) lw:after:[mask:var(--lw-arrow-mask)] lw:hover:after:opacity-0 lw:data-[open=true]:after:opacity-0"
            ),
            style: {
              width: be,
              height: be,
              color: z ? se : W,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              backgroundColor: z ? ne : "transparent",
              ...At(z),
              "--lw-arrow-right": `${-_a(re)}px`,
              "--lw-arrow-bg": N ?? "currentColor",
              "--lw-arrow-opacity": N ? 1 : 0.55,
              "--lw-arrow-mask": `${Na} center / contain no-repeat`
            },
            children: h.icon
          }
        )
      },
      h.text
    );
  }, Kn = (h) => {
    const z = tt(h, l), j = He(h, l), G = gt("", h), H = he(h, G), Z = Gt(
      {
        fg: j ? se : W,
        bg: j ? ne : void 0
      },
      O ? D : { bg: j ? ne : "transparent" }
    ), Y = /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        "aria-label": h.text,
        "aria-expanded": H,
        onClick: () => me(G, H),
        "data-testid": `sidebar-item-${h.text}`,
        "data-active": j ? "true" : "false",
        className: b(
          dl,
          Z.className,
          "lw:flex lw:max-w-full lw:flex-col lw:rounded-[10px]",
          // 8px padding on all sides of the labeled item container.
          O ? "lw:w-full lw:gap-0.5 lw:p-2" : "lw:w-11 lw:px-2 lw:py-1.5"
        ),
        style: Z.style,
        children: [
          O ? /* @__PURE__ */ n("span", { className: "lw:flex lw:items-center lw:justify-center lw:[&_svg]:size-[22px]", children: h.icon }) : h.icon,
          O ? /* @__PURE__ */ n(
            st,
            {
              text: h.text,
              variant: "caption",
              center: !0,
              fontSize: $o
            }
          ) : null,
          /* @__PURE__ */ n(Ra, { open: H, size: xa })
        ]
      }
    ), pe = O ? Y : /* @__PURE__ */ n(Re, { title: h.text, side: "right", arrow: !0, children: Y }), ae = Gt(
      { bg: z ? F : void 0 },
      O ? void 0 : { bg: F }
    );
    return /* @__PURE__ */ x(
      "div",
      {
        "data-testid": `sidebar-group-${h.text}`,
        className: b(
          "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-1 lw:rounded-[10px] lw:py-1",
          ae.className
        ),
        style: ae.style,
        children: [
          pe,
          H ? $l(h.subitems, h.icon).map(
            ({ sub: ue, icon: Ze }) => it(
              ue.path,
              ue.text,
              Ze,
              He(ue, l),
              ue.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${ue.text}`
              }
            )
          ) : null
        ]
      },
      h.text
    );
  }, jn = (h) => /* @__PURE__ */ n("div", { className: "lw:flex lw:w-full lw:justify-center", children: it(
    h.text,
    h.subtitle ? `${h.text} · ${h.subtitle}` : h.text,
    h.icon,
    He(h, l),
    h.path,
    { testId: `sidebar-item-${h.text}` }
  ) }, h.text), Ot = (h) => yt(h) ? P ? Ct(h) : y ? Kn(h) : Ke(h) : y ? jn(h) : Le(h), cn = (h) => /* @__PURE__ */ n(
    "div",
    {
      className: b(
        "lw:flex lw:w-full lw:flex-col lw:gap-1",
        y ? "lw:items-center" : "lw:items-stretch"
      ),
      children: h.map(
        (z, j) => z.dividerAfter && j < h.length - 1 ? /* @__PURE__ */ x(c.Fragment, { children: [
          Ot(z),
          /* @__PURE__ */ n(
            en,
            {
              "data-testid": `sidebar-divider-${z.text}`,
              className: "lw:self-stretch",
              style: {
                marginBlock: P ? at : "8px",
                width: "auto"
              }
            }
          )
        ] }, z.text) : Ot(z)
      )
    }
  ), Ve = y ? T : R, It = () => {
    var Y, pe;
    const { state: h } = k, z = h ? [...e, ...t].find(
      (ae) => yt(ae) && gt("", ae) === h.key
    ) ?? null : null, j = z ? ((Y = U.current) == null ? void 0 : Y.getBoundingClientRect().right) ?? T : T, G = z ? ((pe = U.current) == null ? void 0 : pe.closest("[data-rail-surface]")) ?? U.current : null, H = G == null ? void 0 : G.getBoundingClientRect(), Z = G && H ? {
      left: H.left,
      top: H.top,
      width: H.width,
      height: H.height,
      radius: parseFloat(
        getComputedStyle(G).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ n(
      da,
      {
        group: z,
        groupKey: z ? h.key : null,
        anchor: z ? k.getTrigger(h.key) : null,
        railEdge: j,
        railShape: Z,
        activePath: l,
        focusFirst: h == null ? void 0 : h.focusFirst,
        onNavigate: oe,
        onClose: k.close,
        panelProps: k.flyoutProps,
        accentColor: f,
        activeBackgroundColor: w,
        activeForegroundColor: se,
        solidSurface: $ ?? X
      }
    );
  }, dn = d ? /* @__PURE__ */ n(
    "div",
    {
      "data-testid": "sidebar-header",
      className: b(
        "lw:flex lw:shrink-0 lw:items-center lw:justify-center",
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        P && "lw:py-3"
      ),
      style: {
        backgroundColor: ee,
        ...P ? {} : { height: Io, minHeight: Io }
      },
      children: s || i ? /* @__PURE__ */ n(
        kn,
        {
          logo: s,
          title: y ? void 0 : i,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? le,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, ot = !d && s ? /* @__PURE__ */ n(
    "div",
    {
      className: "lw:flex lw:shrink-0 lw:justify-center lw:pt-4",
      style: { paddingBottom: P ? at : "8px" },
      children: /* @__PURE__ */ n(
        kn,
        {
          logo: s,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? le,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, rt = O ? 4 : P ? 6 : y ? 8 : 12, un = b(
    P ? "lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-width:thin] lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-color:transparent_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-1.5" : "lw:[scrollbar-width:thin] lw:[scrollbar-color:transparent_transparent] lw:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-2",
    "lw:[&::-webkit-scrollbar-thumb]:rounded-[4px] lw:[&::-webkit-scrollbar-thumb]:bg-transparent lw:[&:hover::-webkit-scrollbar-thumb]:bg-border lw:[&:has(:focus-visible)::-webkit-scrollbar-thumb]:bg-border"
  );
  return /* @__PURE__ */ n(on.Provider, { value: P, children: /* @__PURE__ */ x(
    "nav",
    {
      ref: U,
      ...Xe,
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": y ? "true" : "false",
      "data-labeled": O ? "true" : "false",
      className: b(
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        // Snaps to its width; an owner that animates the switch (the
        // wrapper's hover panel) clips it from a container, so the
        // rows never reflow mid-animation.
        "lw:box-border lw:flex lw:h-full lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-hidden",
        // The glass rail holds the lens, so every control on it — links,
        // Ask Nexa, search, notifications, the account — hovers the same
        // way: no tint of its own, the lens gliding behind it. An active
        // or highlighted control keeps its fill. The rail's content
        // paints above the lens, which is its first layer; not the
        // flyout's backdrop, which is fixed over the whole window.
        P && "lw:relative lw:[&_:is(button,a,[role=button]):not([data-active=true]):not([data-rail-keep-fill]):hover]:bg-transparent! lw:[&>:not([data-glass-lens],[data-active-glass],[data-flyout-scrim])]:relative"
      ),
      style: { width: Ve, minWidth: Ve, backgroundColor: X },
      children: [
        xe.lens,
        dn ?? ot,
        _ ? /* @__PURE__ */ n(
          "div",
          {
            className: "lw:shrink-0",
            style: {
              paddingInline: rt,
              paddingBlock: P ? 0 : 8
            },
            children: _
          }
        ) : null,
        /* @__PURE__ */ n(
          "div",
          {
            ref: J,
            "data-testid": "sidebar-links-scroller",
            className: b(
              "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
              un
            ),
            style: {
              overflowY: Ae ? "auto" : "hidden",
              overflowX: "hidden",
              // On the floating rail the bar (when it takes space at all)
              // stands in for the right padding, and the left padding
              // follows it, so the 44px column keeps equal gaps in the
              // capsule whether the bar is classic, overlay or absent.
              // (The inline collapsed rail keeps its padding: its open
              // groups tint the full row width.)
              ...P ? Aa(re) : { paddingInline: rt },
              paddingTop: I && !d ? `${I}px` : P ? at : "8px",
              paddingBottom: P ? at : "16px"
            },
            children: /* @__PURE__ */ x(
              "div",
              {
                ref: ce,
                className: "lw:relative lw:flex lw:flex-[1_0_auto] lw:flex-col",
                children: [
                  ke.glass,
                  cn(e),
                  t.length > 0 ? /* @__PURE__ */ x(
                    "div",
                    {
                      className: "lw:mt-auto",
                      style: {
                        paddingTop: P ? at : "16px"
                      },
                      children: [
                        A ? null : /* @__PURE__ */ n(
                          en,
                          {
                            style: {
                              marginBottom: P ? at : "8px"
                            }
                          }
                        ),
                        cn(t)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        A ? /* @__PURE__ */ n(
          "div",
          {
            className: b(
              "lw:shrink-0 lw:pb-3",
              P && "lw:[&_button_svg]:size-6"
            ),
            style: { paddingInline: rt },
            children: /* @__PURE__ */ n(
              "div",
              {
                style: {
                  borderTop: `1px solid ${ye}`,
                  paddingTop: P ? at : "12px"
                },
                children: A
              }
            )
          }
        ) : null,
        P ? It() : null
      ]
    }
  ) });
}, _l = Ia, On = "var(--lumora-content-padding, 0px)", ul = `calc(${On} * -1)`, $a = {
  "background.paper": "var(--lw-bg-surface)",
  "background.default": "var(--lw-bg-page)"
}, ka = (e) => e && typeof e == "object" && !Array.isArray(e) ? Object.fromEntries(
  Object.entries(e).filter(
    ([t, l]) => !t.includes("&") && !t.startsWith("@") && (typeof l == "string" || typeof l == "number")
  )
) : {}, La = ({
  children: e,
  flushTop: t = !0,
  sticky: l = !1,
  background: o = "var(--lw-bg-surface)",
  divider: r = !0,
  inset: s = !0,
  className: i,
  style: a,
  sx: u
}) => /* @__PURE__ */ n(
  "div",
  {
    "data-testid": "full-bleed-section",
    className: b(
      r && "lw:border-b lw:border-solid lw:border-border",
      // Above page content, below the sidebar drawer and menus
      l && "lw:sticky lw:z-[3]",
      i
    ),
    style: {
      marginLeft: ul,
      marginRight: ul,
      marginTop: t ? ul : 0,
      // Space below it, like any other block on the page
      marginBottom: On,
      paddingLeft: s ? On : 0,
      paddingRight: s ? On : 0,
      backgroundColor: $a[o] ?? o,
      ...l && {
        position: "sticky",
        // Under the mobile top bar on phones, the viewport top on desktop
        top: "var(--lumora-sticky-top, 0px)"
      },
      ...ka(u),
      ...a
    },
    children: e
  }
), Bc = La, Ma = ({ keys: e }) => /* @__PURE__ */ n(
  "kbd",
  {
    "aria-hidden": "true",
    className: "lw:inline-flex lw:h-5 lw:shrink-0 lw:items-center lw:gap-1 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-surface lw:px-1.5 lw:font-[inherit] lw:text-[11px] lw:leading-none lw:text-muted-foreground",
    children: e.map((t) => /* @__PURE__ */ n("span", { children: t }, t))
  }
), Da = Ma;
function Ln({
  className: e,
  style: t,
  variant: l = "rounded",
  animate: o = !0,
  ...r
}) {
  return /* @__PURE__ */ n(
    "span",
    {
      "data-slot": "skeleton",
      "aria-hidden": !0,
      className: b(
        "lw:block lw:bg-skeleton",
        l === "circular" && "lw:rounded-full",
        l === "rounded" && "lw:rounded-md",
        l === "text" && "lw:h-[1em] lw:rounded-sm",
        o && "lw:animate-[lw-skeleton-pulse_2s_ease-in-out_0.5s_infinite]",
        e
      ),
      style: t,
      ...r
    }
  );
}
const Pa = "(max-width: 899.95px)", Fa = (e) => (t) => {
  var o;
  if (typeof window > "u" || !window.matchMedia)
    return () => {
    };
  const l = window.matchMedia(e);
  return (o = l.addEventListener) == null || o.call(l, "change", t), () => {
    var r;
    return (r = l.removeEventListener) == null ? void 0 : r.call(l, "change", t);
  };
};
function Ba(e) {
  const t = c.useMemo(() => Fa(e), [e]);
  return c.useSyncExternalStore(
    t,
    () => typeof window < "u" && window.matchMedia ? window.matchMedia(e).matches : !1,
    () => !1
  );
}
const Tr = () => Ba(Pa), za = 6, Ga = 8, Lo = (e, t) => typeof e == "object" ? e[t] : e, wl = ({ width: e, height: t = 20, className: l }) => /* @__PURE__ */ n(
  Ln,
  {
    variant: "text",
    className: l,
    style: {
      width: e,
      height: t * 0.6,
      marginTop: t * 0.2,
      marginBottom: t * 0.2
    }
  }
), wt = ({ size: e, variant: t = "rounded" }) => /* @__PURE__ */ n(
  Ln,
  {
    variant: t,
    className: "lw:shrink-0",
    style: { width: e, height: e }
  }
), fl = ({
  themeMode: e,
  sidebarVariant: t = "rail",
  sidebarSubmenu: l = "expand",
  sidebarAutoHide: o = !1,
  showSidebar: r = !0,
  contentPadding: s = wr,
  sidebarBackgroundColor: i,
  contentBackgroundColor: a,
  content: u
}) => {
  const d = Tr(), m = e === "dark", p = mr({
    showSidebar: r,
    isMobile: d,
    sidebarVariant: t,
    sidebarSubmenu: l,
    sidebarAutoHide: o
  }), g = Gn(l, t) ? {
    gutterPx: et,
    radiusPx: ur
  } : void 0, f = Tn, w = Wn(
    Lo(i, e),
    m
  ), N = hr(
    Lo(a, e),
    m
  ), E = fr(s), C = g ? /* @__PURE__ */ x("div", { className: "lw:flex lw:flex-col lw:items-center lw:pt-3", children: [
    /* @__PURE__ */ n(wt, { size: 36 }),
    /* @__PURE__ */ n(
      "div",
      {
        className: "lw:mt-4 lw:flex lw:flex-col lw:items-center",
        style: { gap: zn },
        children: Array.from({ length: Ga }, (v, S) => /* @__PURE__ */ n(
          "div",
          {
            className: "lw:flex lw:items-center lw:justify-center",
            style: {
              width: be,
              height: be
            },
            children: /* @__PURE__ */ n(wt, { size: Nl })
          },
          S
        ))
      }
    )
  ] }) : /* @__PURE__ */ x("div", { className: "lw:flex lw:flex-col lw:items-center lw:gap-4 lw:pt-4", children: [
    /* @__PURE__ */ n(wt, { size: 32 }),
    /* @__PURE__ */ n("div", { className: "lw:h-2" }),
    Array.from({ length: za }, (v, S) => /* @__PURE__ */ n(wt, { size: 28 }, S))
  ] });
  return /* @__PURE__ */ x(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      "data-lw-scope": "",
      "data-lw-theme": e,
      className: "lw:flex lw:min-h-screen",
      style: { backgroundColor: N },
      children: [
        d && /* @__PURE__ */ x(
          "div",
          {
            className: "lw:fixed lw:top-0 lw:right-0 lw:left-0 lw:z-[1] lw:flex lw:items-center lw:gap-4 lw:px-4",
            style: {
              height: f,
              backgroundColor: w
            },
            children: [
              /* @__PURE__ */ n(wt, { size: 24 }),
              /* @__PURE__ */ n(wl, { width: 96 }),
              /* @__PURE__ */ n("div", { className: "lw:grow" }),
              /* @__PURE__ */ n(wt, { size: 32, variant: "circular" })
            ]
          }
        ),
        !d && p > 0 && /* @__PURE__ */ n(
          "div",
          {
            className: "lw:relative lw:shrink-0",
            style: { width: p },
            children: /* @__PURE__ */ n(
              "div",
              {
                className: "lw:fixed",
                style: g ? {
                  top: g.gutterPx,
                  bottom: g.gutterPx,
                  left: g.gutterPx,
                  width: p - 2 * g.gutterPx,
                  borderRadius: g.radiusPx,
                  backgroundColor: w
                } : {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: p,
                  backgroundColor: w
                },
                children: C
              }
            )
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            className: "lw-content-padding lw:min-w-0 lw:grow",
            "data-lw-host": "",
            style: {
              ...E,
              "--lumora-sticky-top": d ? `${f}px` : "0px",
              padding: "var(--lumora-content-padding)",
              marginTop: d ? f : 0
            },
            children: u ?? /* @__PURE__ */ x(ie, { children: [
              /* @__PURE__ */ n(wl, { width: 220, height: 40 }),
              /* @__PURE__ */ n(wl, { width: 320, className: "lw:mb-6" }),
              /* @__PURE__ */ n("div", { className: "lw:mb-6 lw:flex lw:flex-row lw:gap-4", children: Array.from(
                { length: d ? 2 : 4 },
                (v, S) => /* @__PURE__ */ n(
                  Ln,
                  {
                    className: "lw:h-24 lw:flex-1"
                  },
                  S
                )
              ) }),
              /* @__PURE__ */ n(Ln, { className: "lw:h-[360px]" })
            ] })
          }
        )
      ]
    }
  );
}, Mo = { background: "hsl(220, 35%, 3%)", color: "#ffffff" }, Wa = ({
  theme: e = "light",
  darkModeSelector: t,
  ...l
}) => {
  if (!t)
    return /* @__PURE__ */ n(fl, { themeMode: e, ...l });
  const o = [
    '[data-lw-skeleton-mode="dark"]{display:none}',
    '[data-lw-skeleton-mode="light"]{display:contents}',
    `${t} [data-lw-skeleton-mode="light"]{display:none}`,
    `${t} [data-lw-skeleton-mode="dark"]{display:contents}`,
    `${t} body{background-color:${Mo.background};color:${Mo.color}}`
  ].join(`
`);
  return /* @__PURE__ */ x(ie, { children: [
    /* @__PURE__ */ n("style", { dangerouslySetInnerHTML: { __html: o } }),
    /* @__PURE__ */ n("div", { "data-lw-skeleton-mode": "light", children: /* @__PURE__ */ n(fl, { themeMode: "light", ...l }) }),
    /* @__PURE__ */ n("div", { "data-lw-skeleton-mode": "dark", children: /* @__PURE__ */ n(fl, { themeMode: "dark", ...l }) })
  ] });
}, Ha = Wa;
class V extends Error {
  constructor(t, l, o = null) {
    super(t), this.name = "AuthError", this.code = l, this.originalError = o, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const te = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, we = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Ye = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Ua = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ye.ACCESS_TOKEN
      ), t = localStorage.getItem(
        Ye.REFRESH_TOKEN
      ), l = localStorage.getItem(Ye.USER);
      e && !localStorage.getItem(we.ACCESS_TOKEN) && localStorage.setItem(we.ACCESS_TOKEN, e), t && !localStorage.getItem(we.REFRESH_TOKEN) && localStorage.setItem(
        we.REFRESH_TOKEN,
        t
      ), l && !localStorage.getItem(we.USER) && localStorage.setItem(we.USER, l), (e || t || l) && (localStorage.removeItem(Ye.ACCESS_TOKEN), localStorage.removeItem(Ye.REFRESH_TOKEN), localStorage.removeItem(Ye.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, ml = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new V(
        "localStorage is not available",
        te.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new V(
      "Storage quota exceeded. Please clear browser data.",
      te.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new V(
      "Access to localStorage is denied. Please check browser settings.",
      te.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      t.name
    ), new V(
      "Failed to access storage",
      te.STORAGE_ACCESS_DENIED,
      t
    ));
  }
}, hl = (e, t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new V(
        "localStorage is not available",
        te.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, t), !0;
  } catch (l) {
    throw l.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new V(
      "Storage quota exceeded. Please clear browser data.",
      te.STORAGE_ACCESS_DENIED,
      l
    )) : l.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new V(
      "Access to localStorage is denied. Please check browser settings.",
      te.STORAGE_ACCESS_DENIED,
      l
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      l.name
    ), new V(
      "Failed to write to storage",
      te.STORAGE_ACCESS_DENIED,
      l
    ));
  }
}, Cr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (t) {
    return t.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, tn = () => {
  try {
    Ua();
    const e = ml(we.ACCESS_TOKEN), t = ml(we.REFRESH_TOKEN), l = ml(we.USER);
    let o = null;
    if (l)
      try {
        o = JSON.parse(l);
      } catch {
        l && l !== "null" && l !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          l.substring(0, 50)
        ), Cr(we.USER);
      }
    return {
      accessToken: e,
      refreshToken: t,
      user: o
    };
  } catch (e) {
    throw e instanceof V ? e : new V(
      "Failed to retrieve authentication tokens",
      te.UNKNOWN_ERROR,
      e
    );
  }
}, Xa = () => {
  try {
    const { accessToken: e, refreshToken: t } = tn();
    return !(e || t) ? {
      isAuthenticated: !1,
      error: new V(
        "No authentication tokens found",
        te.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof V ? e : new V(
        "Authentication check failed",
        te.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Or = (e, t, l = null) => {
  try {
    if (!e && !t)
      throw new V(
        "At least one token must be provided",
        te.TOKEN_INVALID
      );
    return e && hl(we.ACCESS_TOKEN, e), t && hl(we.REFRESH_TOKEN, t), l && hl(we.USER, JSON.stringify(l)), {
      success: !0,
      error: null
    };
  } catch (o) {
    return console.error("Failed to store authentication tokens:", o), {
      success: !1,
      error: o instanceof V ? o : new V(
        "Failed to store tokens",
        te.UNKNOWN_ERROR,
        o
      )
    };
  }
}, nn = () => {
  try {
    return [
      we.ACCESS_TOKEN,
      we.REFRESH_TOKEN,
      we.USER,
      // Also clear legacy keys for complete cleanup
      Ye.ACCESS_TOKEN,
      Ye.REFRESH_TOKEN,
      Ye.USER
    ].map((o) => Cr(o)).every((o) => o) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof V ? e : new V(
        "Failed to clear tokens",
        te.LOGOUT_FAILED,
        e
      )
    };
  }
}, Ka = () => {
  try {
    const { user: e } = tn();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof V ? e : new V(
        "Failed to retrieve user data",
        te.UNKNOWN_ERROR,
        e
      )
    };
  }
}, zc = (e) => {
  if (!(e instanceof V))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case te.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case te.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case te.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case te.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case te.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case te.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Rl = (e, t = "Unknown") => {
  const l = {
    context: t,
    message: e.message,
    code: e instanceof V ? e.code : "UNKNOWN",
    timestamp: e instanceof V ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof V && e.originalError && (l.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", l);
}, ja = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const t = bo.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let l = !1, o = null, r = [];
  const s = (i, a) => {
    r.forEach(({ resolve: u, reject: d }) => {
      i ? d(i) : a && u(a);
    }), r = [];
  };
  return t.interceptors.request.use(
    (i) => {
      const { accessToken: a } = tn();
      return a && i.headers && (i.headers.Authorization = `Bearer ${a}`), i;
    },
    (i) => Promise.reject(i)
  ), t.interceptors.response.use(
    (i) => i,
    async (i) => {
      var g;
      const a = i.config, u = (g = i.response) == null ? void 0 : g.status, d = (a == null ? void 0 : a.url) || "", m = d.includes("/auth/refresh");
      if (u !== 401 || a._retry || m)
        return Promise.reject(i);
      a._retry = !0;
      const { refreshToken: p } = tn();
      if (!p) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return Rl(f, "AxiosClient - Token Refresh"), nn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (l && o)
        return new Promise((f, w) => {
          r.push({ resolve: f, reject: w });
        }).then((f) => {
          const {
            accessToken: w,
            refreshToken: N
          } = f;
          if (a.headers && (a.headers.Authorization = `Bearer ${w}`), d.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const E = JSON.parse(
                  a.data || "{}"
                );
                E.refresh_token = N, a.data = JSON.stringify(E);
              } else
                a.data && typeof a.data == "object" ? a.data.refresh_token = N : a.data = JSON.stringify({
                  refresh_token: N
                });
            } catch {
              a.data = JSON.stringify({
                refresh_token: N
              });
            }
          return t(a);
        }).catch((f) => Promise.reject(f));
      l = !0, o = bo.post(
        `${e}/auth/refresh`,
        {
          refresh_token: p
        }
      );
      try {
        const f = await o, { accessToken: w, refreshToken: N } = f.data;
        if (Or(w, N, null), s(null, {
          accessToken: w,
          refreshToken: N
        }), a.headers && (a.headers.Authorization = `Bearer ${w}`), d.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const E = JSON.parse(
                a.data || "{}"
              );
              E.refresh_token = N, a.data = JSON.stringify(E);
            } else
              a.data && typeof a.data == "object" ? a.data.refresh_token = N : a.data = JSON.stringify({
                refresh_token: N
              });
          } catch {
            a.data = JSON.stringify({
              refresh_token: N
            });
          }
        return t(a);
      } catch (f) {
        return Rl(
          f,
          "AxiosClient - Token Refresh Failed"
        ), s(f), nn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        l = !1, o = null;
      }
    }
  ), t;
}, Ya = async (e, t) => {
  const { accessToken: l, refreshToken: o } = tn();
  if (l)
    return !0;
  if (o)
    try {
      const r = await e.post("/auth/refresh", {
        refresh_token: o
      });
      if (r.data.success && r.data.accessToken)
        return Or(
          r.data.accessToken,
          r.data.refreshToken || null,
          null
        ), !0;
    } catch (r) {
      Rl(r, "TokenValidator - Refresh Failed");
    }
  return nn(), t ? t() : window.location.href = "/login", !1;
}, qa = ({ size: e = 20 }) => /* @__PURE__ */ x(
  "svg",
  {
    width: e,
    height: e * 30 / 33,
    style: { width: e, height: e * 30 / 33, flexShrink: 0 },
    viewBox: "0 0 33 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ n(
        "path",
        {
          d: "M21.7931 29.9243V20.5466L11.0774 10.4528V20.5466L21.7931 29.9243Z",
          fill: "#05A393"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M21.7931 20.1102L21.7931 10.0939L11.0774 0V10.0939L21.7931 20.1102Z",
          fill: "#049586"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M2.19027e-05 29.9243V20.5466L10.7157 10.4528V20.5466L2.19027e-05 29.9243Z",
          fill: "#09C1AE"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M22.1555 19.4716V10.0939L32.8712 0V10.0939L22.1555 19.4716Z",
          fill: "#016F63"
        }
      )
    ]
  }
), Yt = qa, Do = ve(Bl), Ir = "#09C1AE", Va = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", Za = "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)", Nn = "lw:relative lw:overflow-hidden lw:[&>*]:relative lw:[&>*]:z-[2]", Sn = ({
  radiusPx: e,
  cover: t
}) => /* @__PURE__ */ x(ie, { children: [
  /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": !0,
      className: "lw:pointer-events-none lw:absolute! lw:inset-[-50%] lw:z-0! lw:animate-spin lw:motion-reduce:animate-none",
      style: {
        background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ir} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
        animationDuration: "3s"
      }
    }
  ),
  /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": !0,
      className: "lw:pointer-events-none lw:absolute! lw:inset-[2px] lw:z-[1]!",
      style: { borderRadius: e - 2, background: t }
    }
  )
] }), Ja = ({
  variant: e,
  onClick: t,
  active: l = !1,
  busy: o = !1,
  shortcutKeys: r,
  accentColor: s = "#01584f",
  rightOffsetPx: i = 0
}) => {
  const a = Gl(), u = c.useContext(on), d = Ue(), m = r ? `Ask Nexa (${r.join("")})` : "Ask Nexa", p = {
    type: "button",
    onClick: t,
    "aria-label": "Ask Nexa",
    "aria-pressed": l,
    "data-testid": "assistant-button"
  }, g = b(
    "lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.08)] lw:hover:bg-[rgba(9,193,174,0.14)]",
    l ? "lw:border-[#09C1AE]" : "lw:border-[rgba(9,193,174,0.45)]"
  );
  if (e === "sidebar")
    return /* @__PURE__ */ x(
      "button",
      {
        ...p,
        "data-variant": "sidebar",
        className: b(
          "lw:flex lw:h-11 lw:w-full lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:px-3 lw:outline-none lw:transition-[border-color,background-color] lw:duration-150 lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE] lw:focus-visible:outline-offset-2",
          g,
          o && Nn
        ),
        style: { color: s },
        children: [
          o && /* @__PURE__ */ n(Sn, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ n(Yt, { size: 20 }),
          /* @__PURE__ */ n("span", { className: "lw:grow lw:text-left lw:text-sm lw:font-semibold lw:text-inherit", children: "Ask Nexa" }),
          r && /* @__PURE__ */ n(Da, { keys: r })
        ]
      }
    );
  if (e === "sidebar-icon" && u && yl) {
    const f = ir(Ir, d, "clear");
    return /* @__PURE__ */ n(Re, { title: m, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ x(
      "button",
      {
        ...p,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": !0,
        className: b(
          "lw:inline-flex lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:hover:[transform:scale(1.07)] lw:active:[transform:scale(0.92)] lw:active:[transition-duration:90ms]! lw:motion-reduce:hover:[transform:none] lw:motion-reduce:active:[transform:none] lw:[&_svg]:[filter:drop-shadow(0_1px_1.5px_rgba(0,0,0,0.25))]",
          _e,
          o && Nn
        ),
        style: {
          width: be,
          height: be,
          borderRadius: qe,
          background: f.background,
          boxShadow: l ? `${f.boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)` : f.boxShadow,
          backdropFilter: "blur(8px) saturate(180%)",
          WebkitBackdropFilter: "blur(8px) saturate(180%)",
          transition: `transform ${Do.duration}ms ${Do.easing}, box-shadow 200ms ease`
        },
        children: [
          o && // The same light over a glass interior (tint over an
          // opaque base, so the beam stays a 2px line)
          /* @__PURE__ */ n(
            Sn,
            {
              radiusPx: qe,
              cover: `${f.background}, ${d ? "#16202c" : "#f2fbfa"}`
            }
          ),
          /* @__PURE__ */ n(Yt, { size: 18 })
        ]
      }
    ) });
  }
  if (e === "sidebar-icon") {
    const f = u ? be : 44;
    return /* @__PURE__ */ n(Re, { title: m, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ x(
      "button",
      {
        ...p,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": u || void 0,
        className: b(
          "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring",
          g,
          o && Nn
        ),
        style: { width: f, height: f },
        children: [
          o && /* @__PURE__ */ n(Sn, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ n(Yt, { size: u ? 18 : 20 })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ n(Re, { title: m, side: "left", children: /* @__PURE__ */ x(
    "button",
    {
      ...p,
      "data-variant": "floating",
      className: b(
        "lw:fixed lw:bottom-6 lw:z-[1150] lw:inline-flex lw:size-[52px] lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-2xl lw:bg-surface lw:p-0 lw:outline-offset-2 lw:transition-[right,box-shadow] lw:duration-[225ms] lw:ease-in-out lw:[box-shadow:var(--lw-shadow-rest)] lw:hover:[box-shadow:var(--lw-shadow-hover)] lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE]",
        l ? "lw:outline-2 lw:outline-solid lw:outline-[#09C1AE]" : "lw:outline-none",
        o && Nn
      ),
      style: {
        right: 24 + i,
        "--lw-shadow-rest": Va,
        "--lw-shadow-hover": Za
      },
      children: [
        o && /* @__PURE__ */ n(Sn, { radiusPx: 16, cover: "var(--lw-bg-surface)" }),
        /* @__PURE__ */ n("span", { className: "lw:flex lw:items-center", children: /* @__PURE__ */ n(Yt, { size: 26 }) })
      ]
    }
  ) });
}, Po = Ja, Qa = As(
  "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:gap-1.5 lw:whitespace-nowrap lw:rounded-md lw:text-sm lw:font-semibold lw:transition-colors lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:focus-visible:ring-offset-1 lw:focus-visible:ring-offset-surface lw:disabled:pointer-events-none lw:disabled:opacity-50 lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "lw:bg-primary lw:text-primary-foreground lw:hover:bg-primary-hover",
        destructive: "lw:bg-destructive-fill lw:text-white lw:hover:bg-destructive-hover",
        outline: "lw:border lw:border-solid lw:border-input lw:bg-surface lw:text-foreground lw:hover:border-input-hover lw:hover:bg-accent",
        "outline-primary": "lw:border lw:border-solid lw:border-primary lw:bg-transparent lw:text-primary lw:hover:border-primary-hover lw:hover:bg-primary/6 lw:hover:text-primary-hover",
        "ghost-primary": "lw:bg-transparent lw:text-primary lw:hover:bg-primary/6 lw:hover:text-primary-hover",
        secondary: "lw:bg-secondary lw:text-secondary-foreground lw:hover:bg-selected",
        ghost: "lw:text-foreground lw:hover:bg-accent",
        link: "lw:h-auto lw:px-0 lw:text-brand-text lw:underline-offset-4 lw:hover:underline",
        /** No look of its own: the shell's coloured controls style it themselves. */
        bare: ""
      },
      size: {
        default: "lw:h-8 lw:px-3",
        sm: "lw:h-7 lw:px-2.5 lw:text-[13px]",
        lg: "lw:h-10 lw:px-4 lw:text-base",
        icon: "lw:size-8",
        "icon-sm": "lw:size-7",
        "icon-xs": "lw:size-6 lw:[&_svg:not([class*='size-'])]:size-3.5",
        none: ""
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
), Un = c.forwardRef(
  ({
    className: e,
    variant: t,
    size: l,
    asChild: o = !1,
    type: r = "button",
    ...s
  }, i) => {
    const a = o ? Rs.Root : "button";
    return /* @__PURE__ */ n(
      a,
      {
        ref: i,
        "data-slot": "button",
        type: o ? void 0 : r,
        className: b(Qa({ variant: t, size: l }), e),
        ...s
      }
    );
  }
);
Un.displayName = "Button";
const ei = ({
  title: e = "",
  message: t = "",
  buttonText: l = "",
  onButtonClick: o,
  show: r = !0
}) => r ? /* @__PURE__ */ x("div", { className: "lw:m-3 lw:shrink-0 lw:rounded-lg lw:border lw:border-solid lw:border-border lw:bg-card lw:p-4 lw:text-card-foreground", children: [
  /* @__PURE__ */ n(ps, { className: "lw:size-5", "aria-hidden": !0 }),
  /* @__PURE__ */ n("p", { className: "lw:mb-[0.35em] lw:text-sm lw:font-semibold", children: e }),
  /* @__PURE__ */ n("p", { className: "lw:mb-4 lw:text-sm lw:text-muted-foreground", children: t }),
  /* @__PURE__ */ n(Un, { size: "sm", className: "lw:w-full", onClick: o, children: l })
] }) : null, _n = ei, pl = 225, Wt = 195, gl = "cubic-bezier(0, 0, 0.2, 1)", bl = "cubic-bezier(0.4, 0, 0.6, 1)", Ht = 24, ti = 720, ni = 1140, li = 1250, oi = ({
  open: e,
  children: t,
  variant: l,
  position: o,
  width: r,
  sidebarWidthPx: s,
  bottomOffsetPx: i,
  fullScreen: a,
  fullScreenBottom: u = "0px",
  onClose: d
}) => {
  const m = c.useRef(!1);
  c.useEffect(() => {
    const y = requestAnimationFrame(() => {
      m.current = !0;
    });
    return () => cancelAnimationFrame(y);
  }, []);
  const [p, g] = c.useState(e), [f, w] = c.useState(e);
  c.useEffect(() => {
    if (!e) {
      w(!1);
      return;
    }
    g(!0);
    const y = requestAnimationFrame(() => w(!0));
    return () => cancelAnimationFrame(y);
  }, [e]), c.useEffect(() => {
    if (!e || !d)
      return;
    const y = (R) => {
      R.key === "Escape" && d();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [e, d]);
  const N = l === "docked", E = Ht + i;
  let C;
  if (a ? C = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : N ? C = {
    top: 0,
    right: 0,
    bottom: 0,
    width: r,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : C = {
    bottom: E,
    ...o === "left" ? { left: s + Ht } : { right: Ht },
    width: r,
    maxWidth: `calc(100vw - ${Ht * 2}px)`,
    height: `min(${ti}px, calc(100vh - ${E + Ht}px))`,
    borderRadius: "12px"
  }, !e && !p)
    return null;
  const v = e && f, S = !m.current, $ = N ? {
    transform: v ? "none" : "translateX(100%)",
    transition: e ? `transform ${S ? 0 : pl}ms ${gl}` : `transform ${Wt}ms ${bl}, visibility 0ms linear ${Wt}ms`
  } : {
    transform: v ? "none" : "scale(0.75, 0.5625)",
    opacity: v ? 1 : 0,
    transformOrigin: o === "left" ? "bottom left" : "bottom right",
    transition: e ? `opacity ${pl}ms ${gl}, transform ${Math.round(pl * 0.666)}ms ${gl}` : `opacity ${Wt}ms ${bl}, transform ${Wt}ms ${bl}, visibility 0ms linear ${Wt}ms`
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: N ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "aria-hidden": e ? void 0 : !0,
      "data-testid": "chat-panel",
      "data-variant": l,
      "data-lw-host": "",
      className: `lw:fixed lw:flex lw:flex-col lw:overflow-hidden lw:border lw:border-solid lw:border-border lw:bg-surface lw:text-foreground lw:shadow-popover ${or}`,
      style: {
        zIndex: N ? ni : li,
        visibility: e ? "visible" : "hidden",
        ...C,
        ...$
      },
      children: t
    }
  );
}, ri = oi, rn = $n.Root, sn = $n.Anchor, si = "lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none", Rt = c.forwardRef(
  ({
    className: e,
    align: t = "start",
    sideOffset: l = 4,
    unstyled: o = !1,
    ...r
  }, s) => {
    const i = ln();
    return /* @__PURE__ */ n($n.Portal, { children: /* @__PURE__ */ n(
      $n.Content,
      {
        ref: s,
        ...i,
        "data-slot": "popover-content",
        align: t,
        sideOffset: l,
        className: b(
          "lw:z-[1400] lw:outline-none",
          !o && b(
            si,
            "lw:p-3 lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95"
          ),
          e
        ),
        ...r
      }
    ) });
  }
);
Rt.displayName = "PopoverContent";
const ai = 180, Fo = 250, ii = "#01584F", $r = "var(--lw-text-muted)", ci = ({
  text: e,
  testId: t
}) => {
  const l = c.useRef(null), [o, r] = c.useState(!1), s = c.useCallback(() => {
    const i = l.current;
    i && r(i.scrollWidth > i.clientWidth + 0.5);
  }, []);
  return c.useLayoutEffect(() => {
    s();
  }, [s, e]), c.useEffect(() => {
    const i = l.current;
    if (!i)
      return;
    const a = new ResizeObserver(() => s());
    return a.observe(i), () => a.disconnect();
  }, [s]), /* @__PURE__ */ n(
    Re,
    {
      title: e,
      side: "right",
      arrow: !0,
      delayDuration: 400,
      disabled: !o,
      children: /* @__PURE__ */ n(
        "span",
        {
          ref: l,
          "aria-hidden": !0,
          "data-testid": t,
          className: "lw:block lw:w-full lw:overflow-hidden lw:text-center lw:text-xs lw:leading-[1.1] lw:text-ellipsis lw:whitespace-nowrap lw:text-inherit",
          children: e
        }
      )
    }
  );
}, di = "lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:transition-[background-color,border-radius] lw:duration-150 lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50 lw:[&_svg]:size-6", kr = (e, t, l, o) => {
  const r = e ? 48 : 44, s = e ? $r : t, i = e ? ii : t, a = b(
    di,
    o ? "lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:rounded-sm lw:px-2 lw:py-1" : l ? "lw:rounded-sm" : "lw:rounded-full lw:hover:rounded-sm",
    !l && "lw:hover:bg-accent"
  ), u = {
    color: l ? "#ffffff" : s,
    backgroundColor: l ? i : void 0,
    ...o ? { minWidth: r, minHeight: r } : { width: r, height: r }
  };
  return { activeBg: i, className: a, style: u };
}, Lr = ({ link: e }) => /* @__PURE__ */ x("span", { className: "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-2", children: [
  /* @__PURE__ */ n("span", { className: "lw:flex lw:items-center lw:justify-center lw:text-inherit", children: e.icon }),
  /* @__PURE__ */ n(
    ci,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Mr = (e, t, l) => l ? e : /* @__PURE__ */ n(Re, { title: t, side: "right", arrow: !0, children: e }), ui = (e) => {
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key))
    return;
  const l = Array.from(
    e.currentTarget.querySelectorAll(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )
  );
  if (!l.length)
    return;
  e.preventDefault();
  const o = l.indexOf(document.activeElement), r = e.key === "Home" ? 0 : e.key === "End" ? l.length - 1 : e.key === "ArrowDown" ? (o + 1) % l.length : (o - 1 + l.length) % l.length;
  l[r].focus();
}, wi = ({
  link: e,
  activePath: t,
  onLinkClick: l,
  accentColor: o,
  isSecondary: r,
  surfaceBackgroundColor: s,
  railShowTitles: i
}) => {
  const [a, u] = c.useState(!1), d = c.useRef(
    null
  ), m = c.useRef(null), p = c.useRef(null), g = c.useRef(!1), f = c.useRef(!1), w = c.useId(), N = () => {
    d.current && (clearTimeout(d.current), d.current = null);
  }, E = () => {
    N(), d.current = setTimeout(() => {
      u(!1), d.current = null;
    }, ai);
  }, C = () => {
    N(), u(!0);
  };
  c.useEffect(() => {
    if (!a)
      return;
    const _ = (A) => {
      var M;
      A.key === "Escape" && (u(!1), (M = p.current) == null || M.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [a]), c.useEffect(() => {
    if (!a || !f.current)
      return;
    const _ = globalThis.requestAnimationFrame(() => {
      var M;
      const A = (M = m.current) == null ? void 0 : M.querySelector(
        '[role="menuitem"]'
      );
      A == null || A.focus(), f.current = !1;
    });
    return () => cancelAnimationFrame(_);
  }, [a]);
  const v = tt(e, t), {
    activeBg: S,
    className: $,
    style: y
  } = kr(r, o, v, i), R = {
    "aria-label": e.text,
    onFocus: () => {
      g.current || C();
    },
    onBlur: (_) => {
      var M;
      const A = _.relatedTarget;
      A && ((M = m.current) != null && M.contains(A)) || E();
    },
    onKeyDown: (_) => {
      _.key === "ArrowDown" && (_.preventDefault(), f.current = !0, C());
    },
    onClick: (_) => {
      _.stopPropagation(), !(e.path && !St(_)) && (_.preventDefault(), e.path && (l == null || l(e.path)));
    },
    "aria-haspopup": "menu",
    "aria-expanded": a,
    "aria-controls": a ? w : void 0,
    "data-testid": `rail-submenu-trigger-${e.text}`,
    className: $,
    style: y
  }, T = i ? /* @__PURE__ */ n(Lr, { link: e }) : e.icon, O = e.path ? /* @__PURE__ */ n(
    "a",
    {
      ref: p,
      href: e.path,
      ...R,
      children: T
    }
  ) : /* @__PURE__ */ n(
    "button",
    {
      ref: p,
      type: "button",
      ...R,
      children: T
    }
  );
  return /* @__PURE__ */ x(rn, { open: a, children: [
    /* @__PURE__ */ n("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ n(sn, { asChild: !0, children: /* @__PURE__ */ n(
      "div",
      {
        "data-testid": `rail-submenu-anchor-${e.text}`,
        className: "lw:inline-flex lw:max-w-full",
        onMouseEnter: () => {
          g.current = !0, C();
        },
        onMouseLeave: () => {
          g.current = !1, E();
        },
        children: Mr(O, e.text, i)
      }
    ) }) }),
    /* @__PURE__ */ n(
      Rt,
      {
        ref: m,
        unstyled: !0,
        side: "right",
        align: "start",
        sideOffset: 8,
        onOpenAutoFocus: (_) => _.preventDefault(),
        onCloseAutoFocus: (_) => _.preventDefault(),
        onInteractOutside: (_) => {
          var A;
          if ((A = p.current) != null && A.contains(_.target)) {
            _.preventDefault();
            return;
          }
          u(!1);
        },
        onEscapeKeyDown: () => u(!1),
        onMouseEnter: N,
        onMouseLeave: E,
        "data-testid": `rail-submenu-panel-${e.text}`,
        className: "lw:z-[1300] lw:min-w-0 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-popover lw:py-1 lw:text-popover-foreground lw:shadow-popover",
        style: {
          backgroundColor: s,
          maxWidth: Fo
        },
        children: /* @__PURE__ */ n(
          "div",
          {
            id: w,
            role: "menu",
            onKeyDown: ui,
            style: { maxWidth: Fo },
            children: I(e.subitems, e.text, 0)
          }
        )
      }
    )
  ] });
  function I(_, A, M) {
    return _.flatMap((L) => {
      const K = gt(A, L), P = 16 + M * 12;
      if (yt(L))
        return [
          /* @__PURE__ */ n(
            "div",
            {
              role: "presentation",
              title: L.text,
              className: "lw:overflow-hidden lw:pr-4 lw:text-[0.7rem] lw:leading-[28px] lw:font-medium lw:tracking-[0.06em] lw:text-ellipsis lw:whitespace-nowrap lw:uppercase lw:text-muted-foreground",
              style: { paddingLeft: P },
              children: L.text
            },
            K
          ),
          ...I(L.subitems, K, M + 1)
        ];
      const k = He(L, t), U = L.path ? "a" : "div";
      return [
        /* @__PURE__ */ x(
          U,
          {
            role: "menuitem",
            tabIndex: -1,
            title: L.text,
            "aria-disabled": L.path ? void 0 : !0,
            "data-selected": k ? "true" : void 0,
            ...L.path ? { href: L.path } : {},
            onClick: (ce) => {
              L.path && St(ce) && (ce.preventDefault(), l == null || l(L.path), u(!1));
            },
            className: b(
              "lw:mx-1 lw:my-[1px] lw:flex lw:min-h-8 lw:max-w-full lw:cursor-pointer lw:items-center lw:overflow-hidden lw:rounded-sm lw:pr-4 lw:text-sm lw:outline-none lw:select-none lw:[&_svg]:size-5",
              !k && "lw:hover:bg-accent lw:focus-visible:bg-selected",
              !L.path && "lw:pointer-events-none lw:opacity-40"
            ),
            style: {
              paddingLeft: P,
              color: k ? "#ffffff" : r ? $r : o,
              backgroundColor: k ? S : void 0
            },
            children: [
              L.icon ? /* @__PURE__ */ n("span", { className: "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:text-inherit", children: L.icon }) : null,
              /* @__PURE__ */ n("span", { className: "lw:min-w-0 lw:flex-auto lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", children: L.text })
            ]
          },
          K
        )
      ];
    });
  }
}, fi = ({
  link: e,
  activePath: t,
  onLinkClick: l,
  accentColor: o,
  isSecondary: r,
  railShowTitles: s
}) => {
  const i = !!(e.path && t === e.path), { className: a, style: u } = kr(
    r,
    o,
    i,
    s
  ), d = (p) => {
    p.stopPropagation(), !(e.path && !St(p)) && (p.preventDefault(), e.path && (l == null || l(e.path)));
  }, m = s ? /* @__PURE__ */ n(Lr, { link: e }) : e.icon;
  return Mr(
    e.path ? /* @__PURE__ */ n(
      "a",
      {
        href: e.path,
        "aria-label": e.text,
        onClick: d,
        className: a,
        style: u,
        children: m
      }
    ) : /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        "aria-label": e.text,
        onClick: d,
        disabled: !0,
        className: a,
        style: u,
        children: m
      }
    ),
    e.text,
    s
  );
}, mi = () => /* @__PURE__ */ n("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ n(en, { className: "lw:w-[60%]" }) }), hi = () => /* @__PURE__ */ n("div", { className: "lw:my-4 lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ n(en, { className: "lw:w-[60%]" }) }), Bo = (e, t) => e.map((l, o) => /* @__PURE__ */ x(c.Fragment, { children: [
  t(l, o),
  o < e.length - 1 ? /* @__PURE__ */ n(mi, {}) : null
] }, o)), pi = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: l,
  onLinkClick: o,
  accentColor: r = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: i = !1
}) => {
  const a = (d, m) => yt(d) ? /* @__PURE__ */ n(
    wi,
    {
      link: d,
      activePath: l,
      onLinkClick: o,
      accentColor: r,
      isSecondary: m,
      surfaceBackgroundColor: s,
      railShowTitles: i
    }
  ) : /* @__PURE__ */ n(
    fi,
    {
      link: d,
      activePath: l,
      onLinkClick: o,
      accentColor: r,
      isSecondary: m,
      railShowTitles: i
    }
  ), u = i ? "lw:gap-2.5" : "lw:gap-2";
  return /* @__PURE__ */ x(
    "div",
    {
      className: b(
        "lw:box-border lw:flex lw:w-full lw:grow lw:flex-col lw:items-center lw:justify-start lw:pt-4",
        u
      ),
      children: [
        Bo(e, (d) => a(d, !1)),
        t.length > 0 ? /* @__PURE__ */ x(ie, { children: [
          /* @__PURE__ */ n(hi, {}),
          /* @__PURE__ */ n("div", { className: "lw:mt-auto lw:pb-4", children: /* @__PURE__ */ n(
            "div",
            {
              className: b(
                "lw:flex lw:flex-col lw:items-center",
                u
              ),
              children: Bo(
                t,
                (d) => a(d, !0)
              )
            }
          ) })
        ] }) : null
      ]
    }
  );
}, gi = pi, bi = Nt.Root, xi = Nt.Trigger, vi = "lw:relative lw:flex lw:min-h-8 lw:cursor-pointer lw:items-center lw:gap-2 lw:rounded-sm lw:px-2 lw:py-1 lw:text-sm lw:outline-none lw:select-none lw:focus:bg-accent lw:data-[highlighted]:bg-accent lw:data-[disabled]:pointer-events-none lw:data-[disabled]:opacity-50 lw:data-[variant=destructive]:text-destructive lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4", yi = "lw:z-[1400] lw:max-h-(--radix-dropdown-menu-content-available-height) lw:min-w-40 lw:overflow-x-hidden lw:overflow-y-auto lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:p-1 lw:text-popover-foreground lw:shadow-popover lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95", Dr = c.forwardRef(
  ({
    className: e,
    sideOffset: t = 4,
    align: l = "start",
    unstyled: o = !1,
    ...r
  }, s) => {
    const i = ln();
    return /* @__PURE__ */ n(Nt.Portal, { children: /* @__PURE__ */ n(
      Nt.Content,
      {
        ref: s,
        ...i,
        "data-slot": "dropdown-menu-content",
        sideOffset: t,
        align: l,
        className: b(
          o ? "lw:z-[1400] lw:outline-none" : yi,
          e
        ),
        ...r
      }
    ) });
  }
);
Dr.displayName = "DropdownMenuContent";
const qt = c.forwardRef(({ className: e, variant: t = "default", ...l }, o) => /* @__PURE__ */ n(
  Nt.Item,
  {
    ref: o,
    "data-slot": "dropdown-menu-item",
    "data-variant": t,
    className: b(vi, e),
    ...l
  }
));
qt.displayName = "DropdownMenuItem";
const In = c.forwardRef(({ className: e, ...t }, l) => /* @__PURE__ */ n(
  Nt.Separator,
  {
    ref: l,
    "data-slot": "dropdown-menu-separator",
    className: b("lw:-mx-1 lw:my-1 lw:h-px lw:bg-border", e),
    ...t
  }
));
In.displayName = "DropdownMenuSeparator";
const Ei = (e) => e ? nr(e) : "USER", Ni = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t.charAt(0).toUpperCase()).join(""), zo = "lw:max-w-full lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", Al = ({ count: e }) => e ? /* @__PURE__ */ n("span", { className: "lw:h-5 lw:min-w-[22px] lw:rounded-[10px] lw:bg-destructive-fill lw:px-1.5 lw:text-center lw:text-xs lw:leading-5 lw:font-semibold lw:text-white", children: e > 99 ? "99+" : e }) : null, Xl = ({ name: e, avatar: t, color: l, size: o = 36 }) => {
  const [r, s] = c.useState(!1);
  c.useEffect(() => s(!1), [t]);
  const i = !!t && !r;
  return /* @__PURE__ */ n(
    "span",
    {
      className: "lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:overflow-hidden lw:rounded-full lw:leading-none lw:font-semibold lw:text-white lw:select-none",
      style: {
        width: o,
        height: o,
        fontSize: o * 0.36,
        backgroundColor: i ? void 0 : l
      },
      children: i ? /* @__PURE__ */ n(
        "img",
        {
          src: t,
          alt: e,
          onError: () => s(!0),
          className: "lw:size-full lw:object-cover"
        }
      ) : Ni(e)
    }
  );
}, Pr = ({ name: e, role: t, avatar: l, avatarColor: o, showText: r }) => /* @__PURE__ */ x(ie, { children: [
  /* @__PURE__ */ n(Xl, { name: e, avatar: l, color: o }),
  r && /* @__PURE__ */ x("span", { className: "lw:flex lw:min-w-0 lw:grow lw:flex-col lw:items-start lw:text-left", children: [
    /* @__PURE__ */ n(
      "span",
      {
        className: b(
          zo,
          "lw:text-sm lw:leading-[1.43] lw:font-semibold"
        ),
        children: e
      }
    ),
    /* @__PURE__ */ n(
      "span",
      {
        className: b(
          zo,
          "lw:text-xs lw:leading-[1.66] lw:opacity-80"
        ),
        children: Ei(t)
      }
    )
  ] })
] }), Si = {
  above: { side: "top", align: "start", sideOffset: 8 },
  "above-end": { side: "top", align: "end", sideOffset: 8 },
  beside: { side: "right", align: "end", sideOffset: 12 }
}, Rn = "lw:mx-1 lw:min-h-9 lw:gap-0 lw:rounded-md lw:px-4 lw:text-sm lw:[&_svg:not([class*='size-'])]:size-5", An = "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:items-center lw:text-muted-foreground", _i = ({
  anchorEl: e,
  onClose: t,
  placement: l,
  width: o,
  avatarColor: r,
  showNotifications: s,
  notificationCount: i,
  onNotificationsClick: a,
  userName: u = "User",
  userRole: d,
  userAvatar: m,
  menuItems: p = [],
  showSettings: g,
  onSettingsClick: f,
  showThemeToggler: w,
  theme: N,
  onThemeToggle: E,
  onLogout: C
}) => {
  const v = (O) => () => {
    t(), O == null || O();
  }, S = !!e, $ = S ? e.getBoundingClientRect() : null, y = c.useRef(null);
  c.useEffect(() => {
    S && typeof document < "u" && (y.current = document.activeElement);
  }, [S]);
  const R = Si[l], T = (O, I) => {
    const _ = N === O;
    return /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        "aria-pressed": _,
        disabled: !E,
        onClick: () => !_ && (E == null ? void 0 : E()),
        className: b(
          "lw:h-8 lw:flex-1 lw:cursor-pointer lw:rounded-md lw:text-sm lw:font-medium lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50",
          _ ? "lw:bg-surface lw:text-foreground lw:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.08)]" : "lw:text-muted-foreground lw:hover:text-foreground"
        ),
        children: I
      }
    );
  };
  return /* @__PURE__ */ x(ie, { children: [
    S && typeof document < "u" ? tr(
      /* @__PURE__ */ n(
        "div",
        {
          "aria-hidden": "true",
          "data-slot": "menu-backdrop",
          className: "lw:fixed lw:inset-0 lw:z-[1399]"
        }
      ),
      document.body
    ) : null,
    /* @__PURE__ */ x(
      bi,
      {
        open: S,
        onOpenChange: (O) => !O && t(),
        modal: !1,
        children: [
          /* @__PURE__ */ n(xi, { asChild: !0, children: /* @__PURE__ */ n(
            "span",
            {
              "aria-hidden": "true",
              tabIndex: -1,
              className: "lw:pointer-events-none lw:fixed",
              style: {
                left: ($ == null ? void 0 : $.left) ?? 0,
                top: ($ == null ? void 0 : $.top) ?? 0,
                width: ($ == null ? void 0 : $.width) ?? 0,
                height: ($ == null ? void 0 : $.height) ?? 0
              }
            }
          ) }),
          /* @__PURE__ */ x(
            Dr,
            {
              side: R.side,
              align: R.align,
              sideOffset: R.sideOffset,
              collisionPadding: 8,
              onCloseAutoFocus: (O) => {
                var I, _;
                O.preventDefault(), (_ = (I = y.current) == null ? void 0 : I.focus) == null || _.call(I);
              },
              className: "lw:min-w-0 lw:rounded-[10px] lw:px-0 lw:py-1 lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
              style: {
                width: o ?? 240,
                maxWidth: "calc(100vw - 16px)"
              },
              children: [
                /* @__PURE__ */ n("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:px-3 lw:py-2", children: /* @__PURE__ */ n(
                  Pr,
                  {
                    name: u,
                    role: d,
                    avatar: m,
                    avatarColor: r,
                    showText: !0
                  }
                ) }),
                /* @__PURE__ */ n(In, { className: "lw:mx-0" }),
                s && /* @__PURE__ */ x(
                  qt,
                  {
                    className: Rn,
                    onSelect: v(a),
                    children: [
                      /* @__PURE__ */ n("span", { className: An, children: /* @__PURE__ */ n(Jo, {}) }),
                      /* @__PURE__ */ n("span", { className: "lw:flex-auto", children: "Notifications" }),
                      /* @__PURE__ */ n(Al, { count: i })
                    ]
                  }
                ),
                p.map((O) => /* @__PURE__ */ x(
                  qt,
                  {
                    className: Rn,
                    onSelect: v(O.onClick),
                    children: [
                      /* @__PURE__ */ n("span", { className: An, children: O.icon }),
                      /* @__PURE__ */ n("span", { className: "lw:flex-auto", children: O.label }),
                      /* @__PURE__ */ n(Al, { count: O.badge })
                    ]
                  },
                  O.key
                )),
                g && /* @__PURE__ */ x(
                  qt,
                  {
                    className: Rn,
                    onSelect: v(f),
                    children: [
                      /* @__PURE__ */ n("span", { className: An, children: /* @__PURE__ */ n(gs, {}) }),
                      /* @__PURE__ */ n("span", { className: "lw:flex-auto", children: "Settings" })
                    ]
                  }
                ),
                w && /* @__PURE__ */ x(ie, { children: [
                  /* @__PURE__ */ n(In, { className: "lw:mx-0" }),
                  /* @__PURE__ */ x("div", { className: "lw:px-3 lw:py-2", children: [
                    /* @__PURE__ */ n("span", { className: "lw:mb-1.5 lw:block lw:text-xs lw:leading-[1.5] lw:font-normal lw:tracking-[0.08em] lw:text-muted-foreground lw:uppercase", children: "— Theme" }),
                    /* @__PURE__ */ x(
                      "div",
                      {
                        role: "group",
                        "aria-label": "Theme",
                        className: "lw:flex lw:gap-1 lw:rounded-lg lw:bg-accent lw:p-1",
                        children: [
                          T("light", "Light"),
                          T("dark", "Dark")
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ n(In, { className: "lw:mx-0" }),
                /* @__PURE__ */ x(
                  qt,
                  {
                    className: b(
                      Rn,
                      // The dark palette's error colors are too dim on the dark menu
                      N === "dark" ? "lw:text-[hsl(0,90%,65%)]" : "lw:text-destructive"
                    ),
                    onSelect: v(C),
                    children: [
                      /* @__PURE__ */ n("span", { className: b(An, "lw:text-inherit"), children: /* @__PURE__ */ n(Qo, { className: "lw:size-5 lw:text-current" }) }),
                      /* @__PURE__ */ n("span", { className: "lw:flex-auto", children: "Log out" })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}, Fr = _i, Br = 64, Ri = 2, Ut = ({
  label: e,
  icon: t,
  onClick: l,
  active: o,
  color: r,
  activeColor: s,
  activeBackground: i,
  ariaLabel: a,
  haspopup: u,
  isPage: d = !1,
  href: m,
  testId: p
}) => {
  const g = b(
    "lw:flex lw:h-full lw:min-w-0 lw:flex-[1_1_0] lw:cursor-pointer lw:flex-col lw:items-center lw:justify-center lw:gap-0.5 lw:border-0 lw:bg-transparent lw:p-0 lw:no-underline lw:outline-none lw:select-none",
    "lw:focus-visible:outline-2 lw:focus-visible:outline-offset-[-4px] lw:focus-visible:outline-(--lw-item-active) lw:focus-visible:outline-solid"
  ), f = {
    color: o ? s : r,
    "--lw-item-active": s
  }, w = /* @__PURE__ */ x(ie, { children: [
    /* @__PURE__ */ n(
      "span",
      {
        className: "lw:flex lw:h-7 lw:min-w-12 lw:items-center lw:justify-center lw:rounded-[14px] lw:transition-colors lw:duration-150 lw:[&>svg]:size-6",
        style: {
          backgroundColor: o ? i : "transparent"
        },
        children: t
      }
    ),
    /* @__PURE__ */ n(
      "span",
      {
        className: b(
          "lw:text-[11px] lw:leading-[1.2] lw:text-inherit",
          o ? "lw:font-semibold" : "lw:font-medium"
        ),
        children: e
      }
    )
  ] }), N = {
    onClick: l,
    "aria-label": a ?? e,
    "aria-haspopup": u,
    "aria-expanded": u ? o : void 0,
    "aria-current": d && o ? "page" : void 0,
    "data-testid": p,
    className: g,
    style: f
  };
  return m ? /* @__PURE__ */ n("a", { href: m, ...N, children: w }) : /* @__PURE__ */ n("button", { type: "button", ...N, children: w });
}, Ai = ({
  onMenuClick: e,
  menuOpen: t,
  onSearchClick: l,
  searchOpen: o,
  showAssistant: r,
  onAssistantClick: s,
  assistantActive: i,
  showProfile: a,
  background: u,
  color: d,
  activeColor: m,
  activeBackground: p,
  pinnedLinks: g = [],
  activePath: f,
  onLinkClick: w,
  ...N
}) => {
  const E = g.filter((T) => T.path).slice(0, Ri), [C, v] = c.useState(
    null
  ), { userName: S = "User", userAvatar: $, avatarColor: y } = N, R = { color: d, activeColor: m, activeBackground: p };
  return /* @__PURE__ */ x(
    "nav",
    {
      "aria-label": "Mobile navigation",
      "data-testid": "mobile-bottom-nav",
      className: "lw:fixed lw:right-0 lw:bottom-0 lw:left-0 lw:z-[1199] lw:flex lw:items-stretch lw:border-t lw:border-solid lw:border-border lw:pb-[env(safe-area-inset-bottom,0px)]",
      style: {
        height: `calc(${Br}px + env(safe-area-inset-bottom, 0px))`,
        backgroundColor: u
      },
      children: [
        e && /* @__PURE__ */ n(
          Ut,
          {
            label: "Menu",
            icon: /* @__PURE__ */ n(er, {}),
            onClick: e,
            active: t,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...R
          }
        ),
        E.map((T) => /* @__PURE__ */ n(
          Ut,
          {
            label: T.text,
            icon: T.icon,
            href: T.path,
            onClick: (O) => {
              St(O) && (O.preventDefault(), w == null || w(T.path));
            },
            active: tt(T, f),
            isPage: !0,
            testId: `mobile-nav-link-${T.text}`,
            ...R
          },
          T.path
        )),
        r && /* @__PURE__ */ n(
          Ut,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ n(
              "span",
              {
                className: "lw:flex lw:h-7 lw:w-10 lw:items-center lw:justify-center lw:rounded-lg lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.1)]",
                style: {
                  borderColor: i ? "#09C1AE" : "rgba(9, 193, 174, 0.45)"
                },
                children: /* @__PURE__ */ n(Yt, { size: 18 })
              }
            ),
            onClick: s,
            active: i,
            testId: "mobile-nav-nexa",
            ...R
          }
        ),
        l && /* @__PURE__ */ n(
          Ut,
          {
            label: "Search",
            icon: /* @__PURE__ */ n(Il, {}),
            onClick: l,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...R
          }
        ),
        a && /* @__PURE__ */ x(ie, { children: [
          /* @__PURE__ */ n(
            Ut,
            {
              label: "Account",
              ariaLabel: `Account menu for ${S}`,
              icon: /* @__PURE__ */ n(
                Xl,
                {
                  name: S,
                  avatar: $,
                  color: y,
                  size: 26
                }
              ),
              onClick: (T) => v(T.currentTarget),
              active: !!C,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...R
            }
          ),
          /* @__PURE__ */ n(
            Fr,
            {
              anchorEl: C,
              onClose: () => v(null),
              placement: "above-end",
              width: 280,
              ...N
            }
          )
        ] })
      ]
    }
  );
}, Ti = Ai, Tl = Kt.Root, Ci = {
  right: "lw:inset-y-0 lw:right-0 lw:h-full lw:border-l lw:data-[state=open]:slide-in-from-right lw:data-[state=closed]:slide-out-to-right",
  left: "lw:inset-y-0 lw:left-0 lw:h-full lw:border-r lw:data-[state=open]:slide-in-from-left lw:data-[state=closed]:slide-out-to-left",
  top: "lw:inset-x-0 lw:top-0 lw:h-auto lw:border-b lw:data-[state=open]:slide-in-from-top lw:data-[state=closed]:slide-out-to-top",
  bottom: "lw:inset-x-0 lw:bottom-0 lw:h-auto lw:border-t lw:data-[state=open]:slide-in-from-bottom lw:data-[state=closed]:slide-out-to-bottom"
}, Mn = c.forwardRef(
  ({
    className: e,
    children: t,
    side: l = "right",
    overlay: o = !0,
    overlayClassName: r,
    srTitle: s,
    ...i
  }, a) => {
    const u = ln();
    return /* @__PURE__ */ x(Kt.Portal, { children: [
      o ? /* @__PURE__ */ n(
        Kt.Overlay,
        {
          ...u,
          "data-slot": "sheet-overlay",
          "data-invisible": o === "invisible" ? "true" : void 0,
          className: b(
            "lw:fixed lw:inset-0 lw:z-[1200] lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0",
            o === "invisible" ? "lw:bg-transparent" : "lw:bg-black/35",
            r
          )
        }
      ) : null,
      /* @__PURE__ */ x(
        Kt.Content,
        {
          ref: a,
          ...u,
          "data-slot": "sheet-content",
          "data-side": l,
          "aria-describedby": void 0,
          className: b(
            "lw:fixed lw:z-[1200] lw:flex lw:flex-col lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none lw:transition lw:ease-in-out lw:data-[state=open]:animate-in lw:data-[state=open]:duration-200 lw:data-[state=closed]:animate-out lw:data-[state=closed]:duration-150",
            Ci[l],
            e
          ),
          ...i,
          children: [
            s ? /* @__PURE__ */ n(Kt.Title, { className: "lw:sr-only", children: s }) : null,
            t
          ]
        }
      )
    ] });
  }
);
Mn.displayName = "SheetContent";
const Oi = ({
  open: e,
  onClose: t,
  search: l
}) => /* @__PURE__ */ n(Tl, { open: e, onOpenChange: (o) => !o && t(), children: /* @__PURE__ */ n(
  Mn,
  {
    side: "top",
    "aria-label": "Search",
    srTitle: "Search",
    onOpenAutoFocus: (o) => {
      var s;
      const r = (s = o.currentTarget) == null ? void 0 : s.querySelector(
        'input, textarea, [contenteditable="true"]'
      );
      r && (o.preventDefault(), r.focus());
    },
    className: "lw:rounded-b-xl lw:border-b-0 lw:p-4 lw:pt-[calc(16px+env(safe-area-inset-top,0px))]",
    children: /* @__PURE__ */ x(
      "div",
      {
        "data-testid": "mobile-search-sheet",
        className: "lw:flex lw:flex-row lw:items-center lw:gap-2",
        children: [
          /* @__PURE__ */ n("div", { "data-lw-host": "", className: "lw:min-w-0 lw:flex-auto", children: l }),
          /* @__PURE__ */ n(
            Un,
            {
              variant: "ghost-primary",
              onClick: t,
              className: "lw:shrink-0",
              children: "Cancel"
            }
          )
        ]
      }
    )
  }
) }), Ii = Oi, $i = ({
  height: e,
  onMenuClick: t,
  appName: l,
  logo: o,
  onBrandClick: r,
  brandMenuOpen: s,
  background: i,
  color: a,
  brandColor: u = a,
  endContent: d
}) => /* @__PURE__ */ n(
  "header",
  {
    className: "lw:fixed lw:top-0 lw:right-0 lw:left-0 lw:z-[1100] lw:flex lw:flex-col lw:border-b lw:border-solid lw:border-border",
    style: { height: e, background: i, color: a },
    children: /* @__PURE__ */ x(
      "div",
      {
        className: "lw:flex lw:items-center lw:gap-2 lw:px-2",
        style: { minHeight: e },
        children: [
          t && /* @__PURE__ */ n(
            Un,
            {
              variant: "bare",
              size: "none",
              "aria-label": "Open navigation menu",
              onClick: t,
              className: "lw:size-10 lw:rounded-full lw:text-inherit lw:hover:bg-black/5 lw:dark:hover:bg-white/10 lw:[&_svg:not([class*=size-])]:size-6",
              style: { color: a },
              children: /* @__PURE__ */ n(er, {})
            }
          ),
          /* @__PURE__ */ n(
            kn,
            {
              title: l,
              appName: l,
              logo: o,
              onClick: r,
              menuOpen: s,
              color: u,
              testId: "mobile-brand"
            }
          ),
          d ? /* @__PURE__ */ n("div", { className: "lw:ml-auto lw:flex lw:items-center", children: d }) : null
        ]
      }
    )
  }
), ki = $i;
function zr({
  count: e = 0,
  max: t = 99,
  dot: l = !1,
  showZero: o = !1,
  invisible: r,
  children: s,
  className: i,
  badgeClassName: a,
  badgeStyle: u,
  label: d
}) {
  const m = r ?? (!o && e <= 0);
  return /* @__PURE__ */ x(
    "span",
    {
      className: b(
        "lw:relative lw:inline-flex lw:shrink-0 lw:align-middle",
        i
      ),
      children: [
        s,
        /* @__PURE__ */ n(
          "span",
          {
            "data-slot": "badge",
            "data-dot": l ? "true" : void 0,
            "data-invisible": m ? "true" : "false",
            "aria-hidden": d ? void 0 : !0,
            "aria-label": d,
            className: b(
              "lw:pointer-events-none lw:absolute lw:top-0 lw:right-0 lw:z-[1] lw:flex lw:translate-x-1/2 lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-full lw:bg-destructive-fill lw:font-semibold lw:text-white lw:transition-transform lw:duration-200",
              l ? "lw:size-2" : "lw:h-5 lw:min-w-5 lw:px-1.5 lw:text-[0.75rem] lw:leading-none",
              m && "lw:scale-0",
              a
            ),
            style: u,
            children: l ? null : e > t ? `${t}+` : e
          }
        )
      ]
    }
  );
}
const Gr = c.createContext(void 0), Li = ({
  count: e,
  onClick: t,
  color: l,
  hoverColor: o,
  tooltipPlacement: r,
  testId: s
}) => {
  const i = Gl(), a = c.useContext(Gr), u = c.useContext(on), d = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ n(Re, { title: d, side: r, arrow: !0, ...i, children: /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      onClick: t,
      "aria-label": d,
      "data-testid": s,
      className: b(
        "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg) lw:[&_svg]:size-6",
        !u && "lw:p-2"
      ),
      style: {
        color: l,
        "--lw-fg": l,
        "--lw-hover": o,
        ...u ? {
          width: be,
          height: be
        } : {}
      },
      children: /* @__PURE__ */ n(
        zr,
        {
          count: e,
          max: 99,
          badgeClassName: "lw:h-4 lw:min-w-4 lw:px-1 lw:text-[10px]",
          children: a ?? /* @__PURE__ */ n(Jo, {})
        }
      )
    }
  ) });
}, Kl = Li, Go = 14, Mi = 18, Di = "blur(12px) saturate(180%) brightness(1.04)", Pi = (() => {
  var t;
  if (typeof navigator > "u")
    return !1;
  const e = (t = navigator.userAgentData) == null ? void 0 : t.brands;
  return !!(e != null && e.some(({ brand: l }) => /Chromium/.test(l)));
})(), Fi = (e, t, l) => {
  const o = Math.min(0.45, l / e), r = Math.min(0.45, l / t), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${o}" stop-color="#800000"/><stop offset="${1 - o}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${r}" stop-color="#008000"/><stop offset="${1 - r}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, Bi = 140, Wo = 0.22, zi = 0.14, Gi = (e, t, l) => {
  const o = c.useRef(l);
  o.current = l, c.useEffect(() => {
    if (!t || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const r = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let i = 0;
    const a = () => {
      var f;
      const g = e.current;
      g && (g.style.setProperty("--lx", `${s.x.toFixed(1)}px`), g.style.setProperty("--ly", `${s.y.toFixed(1)}px`), g.style.setProperty("--li", s.i.toFixed(3)), (f = o.current) == null || f.call(o, s.x, s.y, s.i));
    }, u = () => {
      s.x += (r.x - s.x) * Wo, s.y += (r.y - s.y) * Wo, s.i += (r.i - s.i) * zi;
      const g = Math.abs(r.x - s.x) < 0.3 && Math.abs(r.y - s.y) < 0.3 && Math.abs(r.i - s.i) < 3e-3;
      g && (s.x = r.x, s.y = r.y, s.i = r.i), a(), i = g ? 0 : requestAnimationFrame(u);
    }, d = () => {
      i || (i = requestAnimationFrame(u));
    }, m = (g) => {
      const f = e.current;
      if (g.pointerType === "touch" || !f)
        return;
      const w = f.getBoundingClientRect();
      if (!w.width || !w.height)
        return;
      r.x = (g.clientX - w.left) * f.offsetWidth / w.width, r.y = (g.clientY - w.top) * f.offsetHeight / w.height;
      const N = Math.max(
        w.left - g.clientX,
        0,
        g.clientX - w.right
      ), E = Math.max(
        w.top - g.clientY,
        0,
        g.clientY - w.bottom
      );
      r.i = Math.max(0, 1 - Math.hypot(N, E) / Bi), s.i < 0.01 && (s.x = r.x, s.y = r.y), d();
    }, p = () => {
      r.i = 0, d();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", p), () => {
      cancelAnimationFrame(i), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", p);
    };
  }, [e, t]);
}, Wr = c.forwardRef(
  ({
    isDark: e,
    solid: t,
    className: l,
    style: o,
    "data-testid": r,
    refract: s = !0,
    light: i = !0,
    onLight: a
  }, u) => {
    const d = c.useRef(null), m = s && yl;
    Gi(d, i && yl, a);
    const p = Bn(), g = `lumora-glass-${c.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [f, w] = c.useState(null), N = c.useRef(null), E = c.useCallback(
      ($) => {
        var R;
        if (d.current = $, typeof u == "function" ? u($) : u && (u.current = $), (R = N.current) == null || R.disconnect(), N.current = null, !$ || !m || !Pi || typeof ResizeObserver > "u")
          return;
        const y = () => {
          const T = $.offsetWidth, O = $.offsetHeight;
          w(
            (I) => (I == null ? void 0 : I.width) === T && I.height === O ? I : T && O ? { width: T, height: O } : null
          );
        };
        N.current = new ResizeObserver(y), N.current.observe($), y();
      },
      [u, m]
    ), C = c.useMemo(
      () => f ? Fi(f.width, f.height, Go) : null,
      [f]
    ), v = m && !!(C && f), S = $s(e, t, p);
    return /* @__PURE__ */ x(ie, { children: [
      v ? /* @__PURE__ */ n(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ x(
            "filter",
            {
              id: g,
              x: "0",
              y: "0",
              width: f.width,
              height: f.height,
              filterUnits: "userSpaceOnUse",
              primitiveUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ n(
                  "feImage",
                  {
                    href: C,
                    x: "0",
                    y: "0",
                    width: f.width,
                    height: f.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ n(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: Go / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ n(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Mi,
                    xChannelSelector: "R",
                    yChannelSelector: "G"
                  }
                )
              ]
            }
          )
        }
      ) : null,
      /* @__PURE__ */ n(
        "div",
        {
          ref: E,
          "aria-hidden": !0,
          "data-testid": r,
          "data-refract": v ? "true" : void 0,
          className: b(
            S.className,
            v && "lw:reduce-transparency:[backdrop-filter:none]! lw:reduce-transparency:[-webkit-backdrop-filter:none]!",
            l
          ),
          style: {
            ...S.style,
            ...v ? {
              backdropFilter: `url(#${g}) ${Di}`
            } : {},
            ...o
          }
        }
      )
    ] });
  }
);
Wr.displayName = "GlassLayer";
const Xn = Wr, Wi = '[role="menuitem"]:not([aria-disabled="true"])', Hr = (e) => Array.from(e.querySelectorAll(Wi)), Ur = (e) => {
  if (!e)
    return !1;
  const t = e.querySelector(
    '[role="menuitem"][data-selected="true"]'
  ) ?? Hr(e)[0];
  return t == null || t.focus(), !!t;
}, jl = c.forwardRef(({ className: e, onKeyDown: t, ...l }, o) => /* @__PURE__ */ n(
  "ul",
  {
    ref: o,
    role: "menu",
    className: b(
      "lw:relative lw:m-0 lw:list-none lw:outline-none",
      e
    ),
    onKeyDown: (r) => {
      if (t == null || t(r), r.defaultPrevented)
        return;
      const s = Hr(r.currentTarget);
      if (!s.length)
        return;
      const i = s.indexOf(document.activeElement);
      let a = null;
      switch (r.key) {
        case "ArrowDown":
          a = i < 0 ? 0 : (i + 1) % s.length;
          break;
        case "ArrowUp":
          a = i < 0 ? s.length - 1 : (i - 1 + s.length) % s.length;
          break;
        case "Home":
          a = 0;
          break;
        case "End":
          a = s.length - 1;
          break;
        default:
          return;
      }
      r.preventDefault(), s[a].focus();
    },
    ...l
  }
));
jl.displayName = "ShellMenuList";
const Dn = c.forwardRef(({ className: e, onKeyDown: t, selected: l, ...o }, r) => /* @__PURE__ */ n(
  "li",
  {
    ref: r,
    role: "menuitem",
    tabIndex: -1,
    "data-selected": l ? "true" : void 0,
    className: b(
      "lw:relative lw:flex lw:cursor-pointer lw:items-center lw:outline-none lw:select-none lw:transition-colors",
      e
    ),
    onKeyDown: (s) => {
      t == null || t(s), !s.defaultPrevented && (s.key === "Enter" || s.key === " ") && (s.preventDefault(), s.currentTarget.click());
    },
    ...o
  }
));
Dn.displayName = "ShellMenuItem";
const Hi = ({
  className: e
}) => /* @__PURE__ */ n(
  "li",
  {
    role: "separator",
    className: b("lw:my-1 lw:h-px lw:list-none lw:bg-border", e)
  }
), Cl = "lw:outline-none lw:focus:outline-none", Ui = "lw:flex lw:flex-col lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", Ho = ve(gr), Uo = ve(Hn), Xi = '[role="menuitem"], button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Ki = ({ mode: e, onToggle: t, accentColor: l, tint: o, glass: r = !1 }) => {
  const s = Ue(), i = Bn(), a = c.useRef(null), u = c.useRef(null), d = (g) => {
    var f;
    g !== e && (t == null || t()), (f = (g === "light" ? a : u).current) == null || f.focus();
  }, m = (g) => {
    if (!(g.key === "Tab" || g.key === "Escape"))
      switch (g.stopPropagation(), g.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          g.preventDefault(), d(e === "light" ? "dark" : "light");
          break;
        case "Home":
          g.preventDefault(), d("light");
          break;
        case "End":
          g.preventDefault(), d("dark");
          break;
      }
  }, p = (g, f, w, N) => {
    const E = e === g;
    return /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        ref: N,
        role: "radio",
        "aria-checked": E,
        "aria-label": f,
        tabIndex: E ? 0 : -1,
        onClick: () => d(g),
        "data-testid": `theme-segment-${g}`,
        className: b(
          "lw:inline-flex lw:h-6 lw:w-8 lw:cursor-pointer lw:items-center lw:justify-center lw:transition-[background-color,color,box-shadow,transform] lw:duration-150 lw:ease-out lw:focus-visible:shadow-[0_0_0_2px_var(--lw-seg-ring)]",
          r ? "lw:rounded-md" : "lw:rounded-full",
          !E && "lw:text-muted-foreground lw:hover:text-foreground",
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          r && "lw:hover:scale-[1.06] lw:active:scale-[0.94]",
          r && !E && (s ? "lw:hover:bg-white/12" : "lw:hover:bg-white/75"),
          Cl
        ),
        style: {
          "--lw-seg-ring": nt(l, 0.6),
          // White on dark: the accent is too dim against a dark surface
          ...E ? {
            color: s ? "#ffffff" : l,
            backgroundColor: o,
            ...r ? ar(s, i) : {}
          } : {}
        },
        children: /* @__PURE__ */ n(w, { className: "lw:size-4" })
      }
    );
  };
  return /* @__PURE__ */ x(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: m,
      className: b(
        "lw:flex lw:shrink-0 lw:flex-row lw:gap-0.5 lw:bg-selected lw:p-[3px]",
        r ? "lw:rounded-md" : "lw:rounded-full"
      ),
      children: [
        p("light", "Light", xs, a),
        p("dark", "Dark", vs, u)
      ]
    }
  );
}, ji = ({
  open: e,
  anchorEl: t,
  onClose: l,
  width: o,
  renderAvatar: r,
  userName: s,
  userEmail: i,
  roleLabel: a,
  accentColor: u,
  tint: d,
  showThemeToggler: m,
  theme: p,
  onThemeToggle: g,
  onProfileClick: f,
  onAiUsageClick: w,
  onLinkClick: N,
  menuItems: E = [],
  onLogout: C,
  glass: v = !1
}) => {
  const S = Ue(), $ = Ml(S ? "hsl(220, 30%, 7%)" : "#ffffff"), y = c.useRef(null), R = c.useMemo(() => ({ current: t }), [t]), T = Wl({
    enabled: v,
    isDark: S,
    selector: Xi,
    radius: qe
  }), O = (k) => {
    l(), k == null || k();
  }, I = (k) => {
    l(), k.onClick ? k.onClick() : k.path && (N == null || N(k.path));
  }, _ = b(
    "lw:min-h-8 lw:gap-1 lw:px-3 lw:py-1.5 lw:text-sm lw:leading-5",
    v ? "lw:rounded-md" : "lw:rounded-lg lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)"
  ), A = "lw:flex lw:min-w-8 lw:shrink-0 lw:items-center lw:[&_svg]:size-5", M = b(
    "lw:cursor-pointer lw:rounded-sm lw:text-xs lw:leading-[18px] lw:font-semibold lw:tracking-[0.02em] lw:hover:underline lw:hover:underline-offset-2 lw:focus-visible:shadow-[0_0_0_2px_var(--lw-link-ring)]",
    Cl
  ), L = S ? "#ffffff" : u, K = w ? /* @__PURE__ */ x(
    "div",
    {
      "data-testid": "account-menu-links",
      className: "lw:mt-0.5 lw:flex lw:flex-row lw:items-center lw:gap-1.5",
      children: [
        f ? /* @__PURE__ */ x(ie, { children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => O(f),
              "data-testid": "account-menu-view-profile",
              className: M,
              style: { color: L },
              children: "View profile"
            }
          ),
          /* @__PURE__ */ n("span", { "aria-hidden": !0, className: "lw:text-xs lw:text-faint", children: "·" })
        ] }) : null,
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: () => O(w),
            "data-testid": "account-menu-ai-usage",
            className: M,
            style: { color: L },
            children: "My AI usage"
          }
        )
      ]
    }
  ) : null, P = /* @__PURE__ */ x("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:p-3", children: [
    r(36),
    /* @__PURE__ */ x("div", { className: "lw:min-w-0 lw:flex-1", children: [
      /* @__PURE__ */ n("p", { className: "lw:truncate lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground", children: s }),
      i ? /* @__PURE__ */ n(
        "p",
        {
          "data-testid": "account-menu-email",
          className: "lw:truncate lw:text-xs lw:leading-[18px] lw:text-muted-foreground",
          children: i
        }
      ) : null,
      a ? /* @__PURE__ */ n(
        "span",
        {
          "data-role": !0,
          "data-testid": "account-menu-role",
          className: "lw:block lw:truncate lw:text-xs lw:leading-[1.66] lw:tracking-[0.02em] lw:text-muted-foreground",
          children: a
        }
      ) : null,
      K,
      f && !w ? /* @__PURE__ */ n(
        "span",
        {
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          className: "lw:truncate lw:text-xs lw:leading-[1.66] lw:font-semibold lw:tracking-[0.02em] lw:underline lw:underline-offset-2",
          style: { color: L },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ x(
    rn,
    {
      open: e && !!t,
      onOpenChange: (k) => {
        k || l();
      },
      modal: !0,
      children: [
        /* @__PURE__ */ n(
          sn,
          {
            virtualRef: R
          }
        ),
        /* @__PURE__ */ n(
          Rt,
          {
            unstyled: !0,
            side: "top",
            align: "start",
            sideOffset: 8,
            collisionPadding: 16,
            onOpenAutoFocus: (k) => {
              k.preventDefault(), Ur(y.current);
            },
            onCloseAutoFocus: (k) => {
              var U;
              k.preventDefault(), (U = t == null ? void 0 : t.focus) == null || U.call(t);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ x(
              "div",
              {
                "data-testid": "account-menu",
                "data-glass": v ? "true" : void 0,
                className: b(
                  v ? (
                    // The rows give up their own hover fill: one drop of
                    // glass (the lens) glides behind whichever is hovered
                    "lw:relative lw:rounded-md"
                  ) : Ui
                ),
                style: {
                  width: o,
                  minWidth: o,
                  "--lw-menu-tint": d,
                  "--lw-link-ring": nt(u, 0.6)
                },
                children: [
                  v ? /* @__PURE__ */ n(
                    Xn,
                    {
                      isDark: S,
                      solid: $,
                      className: b(
                        "lw:absolute lw:inset-0 lw:origin-bottom-left lw:rounded-[inherit]",
                        _e
                      ),
                      style: {
                        animation: `${Pl} ${Ho.duration}ms ${Ho.easing} both`
                      }
                    }
                  ) : null,
                  /* @__PURE__ */ x(
                    "div",
                    {
                      ...T.containerProps,
                      className: v ? b(
                        "lw:relative lw:flex lw:flex-col lw:overflow-hidden lw:rounded-[inherit]",
                        _e
                      ) : "lw:contents",
                      style: v ? {
                        animation: `${Fl} ${Uo.duration}ms ${Uo.easing} 70ms both`
                      } : void 0,
                      children: [
                        T.lens,
                        f && !w ? /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            onClick: () => O(f),
                            "data-testid": "account-menu-header",
                            className: b(
                              "lw:group lw:relative lw:block lw:w-full lw:cursor-pointer lw:text-left lw:transition-colors lw:duration-150 lw:[&_[data-hint]]:hidden lw:hover:[&_[data-hint]]:block lw:hover:[&_[data-role]]:hidden lw:focus-visible:[&_[data-hint]]:block lw:focus-visible:[&_[data-role]]:hidden",
                              !v && "lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)",
                              Cl
                            ),
                            children: P
                          }
                        ) : /* @__PURE__ */ n(
                          "div",
                          {
                            "data-testid": "account-menu-header",
                            className: "lw:relative",
                            children: P
                          }
                        ),
                        /* @__PURE__ */ n(en, { className: "lw:relative" }),
                        m ? /* @__PURE__ */ x(
                          "div",
                          {
                            "data-testid": "menu-item-theme",
                            className: b(
                              _,
                              "lw:relative lw:mx-1 lw:mt-1 lw:flex lw:items-center lw:py-1 lw:hover:bg-transparent"
                            ),
                            children: [
                              /* @__PURE__ */ n(
                                "span",
                                {
                                  className: b(
                                    A,
                                    "lw:text-muted-foreground"
                                  ),
                                  children: /* @__PURE__ */ n(bs, {})
                                }
                              ),
                              /* @__PURE__ */ n("span", { className: "lw:flex-1 lw:text-foreground", children: "Theme" }),
                              /* @__PURE__ */ n(
                                Ki,
                                {
                                  glass: v,
                                  mode: p,
                                  onToggle: g,
                                  accentColor: u,
                                  tint: d
                                }
                              )
                            ]
                          }
                        ) : null,
                        /* @__PURE__ */ x(
                          jl,
                          {
                            ref: y,
                            className: b(
                              "lw:px-1 lw:pb-1",
                              m ? "lw:pt-0" : "lw:pt-1"
                            ),
                            children: [
                              E.map((k) => /* @__PURE__ */ x(
                                Dn,
                                {
                                  onClick: () => I(k),
                                  "data-testid": `menu-item-${k.key}`,
                                  className: b(
                                    _,
                                    "lw:text-foreground"
                                  ),
                                  children: [
                                    /* @__PURE__ */ n(
                                      "span",
                                      {
                                        className: b(
                                          A,
                                          "lw:text-muted-foreground"
                                        ),
                                        children: k.icon
                                      }
                                    ),
                                    /* @__PURE__ */ n("span", { className: "lw:flex-1", children: k.label }),
                                    /* @__PURE__ */ n(Al, { count: k.badge })
                                  ]
                                },
                                k.key
                              )),
                              C ? /* @__PURE__ */ n(Hi, {}) : null,
                              C ? /* @__PURE__ */ x(
                                Dn,
                                {
                                  onClick: () => O(C),
                                  "data-testid": "menu-item-logout",
                                  className: b(
                                    _,
                                    "lw:text-destructive"
                                  ),
                                  children: [
                                    /* @__PURE__ */ n("span", { className: A, children: /* @__PURE__ */ n(Qo, {}) }),
                                    "Log out"
                                  ]
                                }
                              ) : null
                            ]
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}, Yi = ji, qi = "lw:outline-none lw:focus:outline-none", Vi = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: l,
  onLinkClick: o,
  logo: r,
  title: s,
  onBrandClick: i,
  brandMenuOpen: a,
  brandColor: u,
  headerBackgroundColor: d,
  headerForegroundColor: m,
  activeAccentColor: p = "#01584f",
  activeBackgroundColor: g,
  groupArrowColor: f,
  groupAccentColor: w,
  activeForegroundColor: N,
  foregroundColor: E,
  surfaceBackgroundColor: C,
  flyoutSurfaceColor: v,
  collapsed: S,
  expandedWidth: $,
  collapsedWidth: y,
  topContent: R,
  submenuMode: T,
  color: O,
  hoverColor: I,
  avatarColor: _,
  showProfile: A = !0,
  userName: M = "User",
  userEmail: L,
  userRole: K,
  userAvatar: P,
  showNotifications: k = !0,
  notificationCount: U = 0,
  onNotificationsClick: ce,
  whatsNewCount: J = 0,
  onProfileClick: re,
  onAiUsageClick: Ae,
  menuItems: xe,
  onLogout: fe,
  theme: Xe = "light",
  showThemeToggler: ne = !0,
  onThemeToggle: ke
}) => {
  const Te = Ue(), Pe = Wn(C, Te), Fe = O ?? E ?? (Te ? "#ffffff" : p), se = I ?? w ?? Zt(p), D = _ ?? p, F = c.useRef(null), [X, W] = c.useState(!1), ee = K ? nr(K) : void 0, le = (Le) => /* @__PURE__ */ n(
    Xl,
    {
      name: M,
      avatar: P,
      color: D,
      size: Le
    }
  ), ye = U + J, oe = S && T === "flyout", de = k ? /* @__PURE__ */ n(
    Kl,
    {
      count: ye,
      onClick: ce,
      color: Fe,
      hoverColor: se,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, me = A ? /* @__PURE__ */ x(
    "button",
    {
      type: "button",
      ref: F,
      onClick: () => W(!0),
      "aria-haspopup": "menu",
      "aria-expanded": X,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      className: b(
        "lw:flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-[10px] lw:hover:bg-(--lw-footer-tint)",
        S ? "lw:flex-[0_0_auto]" : "lw:flex-1",
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        oe ? "lw:p-1" : "lw:p-1.5",
        X ? "lw:bg-(--lw-footer-tint)" : "lw:bg-transparent",
        qi
      ),
      style: { "--lw-footer-tint": se },
      children: [
        S && !oe && k ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ n(
            zr,
            {
              dot: !0,
              count: ye,
              className: "lw:rounded-full",
              badgeClassName: "lw:top-[14%] lw:right-[14%]",
              children: le(36)
            }
          )
        ) : le(S ? 36 : 40),
        S ? null : /* @__PURE__ */ x("span", { className: "lw:block lw:min-w-0 lw:text-left", children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: "lw:block lw:truncate lw:text-sm lw:leading-[1.3] lw:font-semibold",
              style: { color: Fe },
              children: M
            }
          ),
          ee ? /* @__PURE__ */ n(
            "span",
            {
              "data-testid": "panel-user-role",
              className: "lw:block lw:truncate lw:text-xs lw:leading-[1.3] lw:tracking-[0.02em] lw:opacity-85",
              style: { color: Fe },
              children: ee
            }
          ) : null
        ] })
      ]
    }
  ) : null, he = !!de && (!S || oe || !me), Ce = me || he ? /* @__PURE__ */ x(
    "div",
    {
      className: b(
        "lw:flex lw:items-center lw:justify-center lw:gap-1",
        oe ? "lw:flex-col" : "lw:flex-row"
      ),
      children: [
        oe && he ? de : null,
        me,
        !oe && he ? de : null
      ]
    }
  ) : void 0;
  return /* @__PURE__ */ x(
    "div",
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": S ? "true" : "false",
      className: "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
      children: [
        /* @__PURE__ */ n(
          _l,
          {
            mainLinks: e,
            secondaryLinks: t,
            activePath: l,
            onLinkClick: o,
            showHeaderBar: !0,
            logo: r,
            title: s,
            onBrandClick: i,
            brandMenuOpen: a,
            brandColor: u,
            headerBackgroundColor: d,
            headerForegroundColor: m,
            activeAccentColor: p,
            activeBackgroundColor: g,
            groupArrowColor: f,
            groupAccentColor: w,
            activeForegroundColor: N,
            foregroundColor: E,
            surfaceBackgroundColor: Pe,
            flyoutSurfaceColor: v,
            collapsed: S,
            expandedWidth: $,
            collapsedWidth: y,
            topContent: R,
            footer: Ce,
            submenuMode: T
          }
        ),
        A ? /* @__PURE__ */ n(
          Yi,
          {
            open: X,
            anchorEl: F.current,
            onClose: () => W(!1),
            width: Math.max($ - 16, 240),
            renderAvatar: le,
            userName: M,
            userEmail: L,
            roleLabel: ee,
            accentColor: p,
            tint: se,
            showThemeToggler: ne,
            theme: Xe,
            onThemeToggle: ke,
            onProfileClick: re,
            onAiUsageClick: Ae,
            onLinkClick: o,
            menuItems: xe,
            onLogout: fe,
            glass: T === "flyout"
          }
        ) : null
      ]
    }
  );
}, Zi = Vi, Xo = ve(gr), Ko = ve(Hn), Ji = 240, Qi = "lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", ec = ({
  anchorEl: e,
  onClose: t,
  platforms: l,
  currentKey: o,
  onSelect: r,
  accentColor: s,
  glass: i = !1
}) => {
  const a = Ue(), u = !!e, d = Ml(a ? "hsl(220, 30%, 7%)" : "#ffffff"), m = c.useRef(null), p = c.useMemo(() => ({ current: e }), [e]), g = Wl({
    enabled: i,
    isDark: a,
    selector: '[role="menuitem"]',
    radius: qe
  }), f = /* @__PURE__ */ n(
    jl,
    {
      ref: m,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      className: "lw:p-1",
      children: l.map((w) => {
        const N = w.key === o, E = w.accentColor ?? s;
        return /* @__PURE__ */ x(
          Dn,
          {
            selected: N,
            onClick: () => r(w),
            "data-testid": `platform-item-${w.key}`,
            className: b(
              // Compact: 14px name over a 12px description.
              "lw:px-3 lw:py-1.5",
              i ? (
                // Glass: the tick marks the current platform and
                // the lens is the only hover fill
                "lw:rounded-md"
              ) : "lw:rounded-lg lw:hover:bg-accent lw:focus-visible:bg-accent lw:data-[selected=true]:bg-selected"
            ),
            children: [
              /* @__PURE__ */ n("span", { className: "lw:flex lw:min-w-6 lw:shrink-0 lw:items-center", children: /* @__PURE__ */ n(
                "span",
                {
                  "aria-hidden": !0,
                  className: "lw:block lw:size-2.5 lw:rounded-full",
                  style: {
                    backgroundColor: E,
                    boxShadow: i ? `0 0 0 3px ${a ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ x("span", { className: "lw:min-w-0 lw:flex-auto", children: [
                /* @__PURE__ */ n("span", { className: "lw:block lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground", children: w.name }),
                w.description ? /* @__PURE__ */ n("span", { className: "lw:block lw:text-xs lw:leading-[18px] lw:text-muted-foreground", children: w.description }) : null
              ] }),
              N ? /* @__PURE__ */ n(
                ys,
                {
                  "data-testid": "platform-current",
                  className: "lw:ml-3 lw:size-[18px] lw:shrink-0",
                  style: { color: E }
                }
              ) : null
            ]
          },
          w.key
        );
      })
    }
  );
  return /* @__PURE__ */ x(
    rn,
    {
      open: u,
      onOpenChange: (w) => {
        w || t();
      },
      modal: !0,
      children: [
        /* @__PURE__ */ n(
          sn,
          {
            virtualRef: p
          }
        ),
        /* @__PURE__ */ n(
          Rt,
          {
            unstyled: !0,
            side: "bottom",
            align: "start",
            sideOffset: 8,
            collisionPadding: 16,
            onClick: (w) => w.stopPropagation(),
            onOpenAutoFocus: (w) => {
              w.preventDefault(), Ur(m.current);
            },
            onCloseAutoFocus: (w) => {
              var N;
              w.preventDefault(), (N = e == null ? void 0 : e.focus) == null || N.call(e);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ n(
              "div",
              {
                "data-testid": "platform-menu",
                "data-glass": i ? "true" : void 0,
                className: i ? "lw:relative lw:rounded-md" : Qi,
                style: { minWidth: Ji },
                children: i ? /* @__PURE__ */ x(ie, { children: [
                  /* @__PURE__ */ n(
                    Xn,
                    {
                      isDark: a,
                      solid: d,
                      className: b(
                        "lw:absolute lw:inset-0 lw:origin-top-left lw:rounded-[inherit]",
                        _e
                      ),
                      style: {
                        animation: `${Pl} ${Xo.duration}ms ${Xo.easing} both`
                      }
                    }
                  ),
                  /* @__PURE__ */ x(
                    "div",
                    {
                      ...g.containerProps,
                      className: b(
                        "lw:relative lw:overflow-hidden lw:rounded-[inherit]",
                        _e
                      ),
                      style: {
                        animation: `${Fl} ${Ko.duration}ms ${Ko.easing} 70ms both`
                      },
                      children: [
                        g.lens,
                        f
                      ]
                    }
                  )
                ] }) : f
              }
            )
          }
        )
      ]
    }
  );
}, tc = ({ children: e, anchorEl: t, ...l }) => {
  const o = c.useRef(null), r = !!(t && o.current && t.contains(o.current));
  return /* @__PURE__ */ x(
    "span",
    {
      ref: o,
      "data-testid": "platform-switcher-logo",
      className: "lw:relative lw:inline-flex lw:items-center lw:justify-center lw:p-1.5 lw:after:absolute lw:after:right-px lw:after:bottom-px lw:after:border-solid lw:after:[border-width:0_0_5px_5px] lw:after:[border-color:transparent_transparent_currentColor_transparent] lw:after:opacity-55 lw:after:content-['']",
      children: [
        e,
        /* @__PURE__ */ n(
          ec,
          {
            ...l,
            anchorEl: r ? t : null
          }
        )
      ]
    }
  );
}, nc = ({
  compact: e,
  color: t,
  hoverColor: l,
  showProfile: o,
  whatsNewCount: r = 0,
  ...s
}) => {
  var v;
  const {
    avatarColor: i,
    showNotifications: a,
    notificationCount: u,
    onNotificationsClick: d,
    userName: m = "User",
    userRole: p,
    userAvatar: g
  } = s, f = c.useRef(null), [w, N] = c.useState(
    null
  ), E = !!w, C = c.useRef(e);
  return c.useEffect(() => {
    e && !C.current && N(null), C.current = e;
  }, [e]), !a && !o ? null : /* @__PURE__ */ x(ie, { children: [
    /* @__PURE__ */ x(
      "div",
      {
        ref: f,
        "data-testid": "sidebar-footer",
        className: b(
          "lw:flex lw:w-full lw:items-center lw:gap-1",
          e ? "lw:flex-col" : "lw:flex-row"
        ),
        children: [
          o && /* @__PURE__ */ n(Re, { title: e ? m : "", side: "right", arrow: !0, children: /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => N(f.current),
              "aria-label": `Account menu for ${m}`,
              "aria-haspopup": "menu",
              "aria-expanded": E,
              "data-testid": "sidebar-user",
              className: b(
                "lw:inline-flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:text-left lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg)",
                // 4px around the avatar, on the glass rail too
                e ? "lw:flex-none lw:p-1" : "lw:flex-auto lw:px-2 lw:py-1.5"
              ),
              style: {
                color: t,
                "--lw-fg": t,
                "--lw-hover": l,
                ...E ? { backgroundColor: l } : {}
              },
              children: /* @__PURE__ */ n(
                Pr,
                {
                  name: m,
                  role: p,
                  avatar: g,
                  avatarColor: i,
                  showText: !e
                }
              )
            }
          ) }),
          a && /* @__PURE__ */ n(
            Kl,
            {
              count: u + r,
              onClick: d,
              color: t,
              hoverColor: l,
              tooltipPlacement: "right",
              testId: "sidebar-notifications"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ n(
      Fr,
      {
        anchorEl: w,
        onClose: () => N(null),
        placement: e ? "beside" : "above",
        width: e || (v = f.current) == null ? void 0 : v.clientWidth,
        ...s
      }
    )
  ] });
}, lc = nc, oc = 120, rc = 300, jo = ve(pr), Yo = ve(Hn), sc = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : t.value) ?? "";
}, ac = 'input, textarea, [contenteditable="true"]', Ol = (e) => {
  var t;
  (t = e == null ? void 0 : e.querySelector(ac)) == null || t.focus();
}, ic = "lw:[&_:is([data-slot=input],[data-slot=button],input:not([data-slot]))]:rounded-[6px] lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:border-(--lw-accent) lw:[&_:is([data-slot=input]):focus-visible]:ring-(--lw-accent)", qo = (e) => e ? `Search (${e.join("")})` : "Search", cc = ({
  search: e,
  icon: t,
  mode: l,
  onExpand: o,
  autoFocus: r = !1,
  onAutoFocused: s,
  color: i,
  hoverColor: a,
  shortcutKeys: u
}) => {
  const d = Gl(), m = c.useContext(on), p = c.useRef(null), [g, f] = c.useState(null);
  return c.useEffect(() => {
    l === "full" && r && (Ol(p.current), s == null || s());
  }, [l, r, s]), l === "full" ? /* @__PURE__ */ n(
    "div",
    {
      ref: p,
      "data-testid": "sidebar-search",
      "data-lw-host": "",
      className: "lw:w-full",
      children: e
    }
  ) : l === "popover" && m ? /* @__PURE__ */ n(
    dc,
    {
      search: e,
      icon: t,
      color: i,
      railTooltip: d,
      tooltip: qo(u)
    }
  ) : /* @__PURE__ */ n(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ x(
        rn,
        {
          open: !!g,
          onOpenChange: (w) => !w && f(null),
          children: [
            /* @__PURE__ */ n(
              Re,
              {
                title: qo(u),
                side: "right",
                arrow: !0,
                ...d,
                children: /* @__PURE__ */ n(sn, { asChild: !0, children: /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Search",
                    onClick: (w) => l === "expand" ? o == null ? void 0 : o() : f(w.currentTarget),
                    className: "lw:inline-flex lw:size-11 lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:[&_svg]:size-6",
                    style: {
                      color: i,
                      "--lw-hover": a
                    },
                    children: t ?? /* @__PURE__ */ n(Il, {})
                  }
                ) })
              }
            ),
            /* @__PURE__ */ n(
              Rt,
              {
                side: "right",
                align: "start",
                sideOffset: 8,
                collisionPadding: 8,
                onOpenAutoFocus: (w) => {
                  w.preventDefault(), Ol(w.currentTarget);
                },
                className: "lw:w-80 lw:p-2",
                children: /* @__PURE__ */ n("div", { "data-lw-host": "", children: e })
              }
            )
          ]
        }
      )
    }
  );
}, dc = ({ search: e, icon: t, color: l, railTooltip: o, tooltip: r }) => {
  const s = Ue();
  ks(s, nt(l, s ? 0.3 : 0.35));
  const i = `rgb(${Bn()})`, a = Ml(s ? "#1e2430" : "#ffffff"), u = c.useRef(null), d = c.useRef(null), [m, p] = c.useState(!1), g = c.useRef(!1), f = c.useRef(void 0), w = c.useRef(void 0), N = () => {
    clearTimeout(f.current), clearTimeout(w.current);
  }, E = c.useCallback(() => {
    N(), g.current = !1, p(!1);
  }, []), C = () => {
    clearTimeout(w.current), m || (clearTimeout(f.current), f.current = setTimeout(
      () => p(!0),
      oc
    ));
  }, v = () => {
    clearTimeout(f.current), clearTimeout(w.current), w.current = setTimeout(() => {
      !g.current && !sc(d.current) && p(!1);
    }, rc);
  };
  return c.useEffect(() => N, []), c.useEffect(() => {
    if (!m)
      return;
    const S = setTimeout(() => Ol(d.current)), $ = (R) => {
      var O, I;
      const T = R.target;
      !((O = d.current) != null && O.contains(T)) && !((I = u.current) != null && I.contains(T)) && E();
    }, y = (R) => {
      var T;
      R.key === "Escape" && (E(), (T = u.current) == null || T.focus());
    };
    return document.addEventListener("pointerdown", $), document.addEventListener("keydown", y), () => {
      clearTimeout(S), document.removeEventListener("pointerdown", $), document.removeEventListener("keydown", y);
    };
  }, [m, E]), /* @__PURE__ */ n(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ x(
        rn,
        {
          open: m,
          onOpenChange: (S) => !S && E(),
          modal: !1,
          children: [
            /* @__PURE__ */ n(
              Re,
              {
                title: m ? "" : r,
                side: "right",
                arrow: !0,
                ...o,
                children: /* @__PURE__ */ n(sn, { asChild: !0, children: /* @__PURE__ */ n(
                  "button",
                  {
                    ref: u,
                    type: "button",
                    "aria-label": "Search",
                    "aria-expanded": m,
                    onMouseEnter: C,
                    onMouseLeave: v,
                    onClick: () => {
                      N(), g.current = !0, p(!0);
                    },
                    className: "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring",
                    style: {
                      width: be,
                      height: be,
                      color: l,
                      borderRadius: qe
                    },
                    children: t ?? /* @__PURE__ */ n(
                      Il,
                      {
                        style: {
                          width: Nl,
                          height: Nl
                        }
                      }
                    )
                  }
                ) })
              }
            ),
            /* @__PURE__ */ n(
              Rt,
              {
                unstyled: !0,
                side: "right",
                align: "center",
                sideOffset: 14,
                collisionPadding: 8,
                onOpenAutoFocus: (S) => S.preventDefault(),
                onCloseAutoFocus: (S) => S.preventDefault(),
                onInteractOutside: (S) => {
                  var $;
                  ($ = u.current) != null && $.contains(S.target) && S.preventDefault();
                },
                className: "lw:z-[1300]",
                children: /* @__PURE__ */ x(
                  "div",
                  {
                    ref: d,
                    "data-testid": "sidebar-search-card",
                    onMouseEnter: C,
                    onMouseLeave: v,
                    className: "lw:relative lw:w-80 lw:p-2",
                    style: { borderRadius: qe },
                    children: [
                      /* @__PURE__ */ n(
                        Xn,
                        {
                          isDark: s,
                          solid: a,
                          className: b(
                            "lw:absolute lw:inset-0 lw:origin-left lw:rounded-[inherit]",
                            _e
                          ),
                          style: {
                            animation: `${Pl} ${jo.duration}ms ${jo.easing} both`
                          }
                        }
                      ),
                      /* @__PURE__ */ n(
                        "div",
                        {
                          "data-lw-host": "",
                          className: b(
                            "lw:relative",
                            ic,
                            _e
                          ),
                          style: {
                            "--lw-accent": i,
                            animation: `${Fl} ${Yo.duration}ms ${Yo.easing} 60ms both`
                          },
                          children: e
                        }
                      )
                    ]
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
}, uc = cc, wc = 80, fc = 300, mc = 32, hc = (e) => {
  const t = c.useRef(/* @__PURE__ */ new WeakSet()), l = c.useRef(void 0), o = c.useRef(void 0), [r, s] = c.useState(!1), [i, a] = c.useState(!1), [u, d] = c.useState(!1), m = c.useRef(null), p = () => {
    clearTimeout(l.current), clearTimeout(o.current), l.current = void 0, o.current = void 0;
  };
  c.useEffect(() => {
    if (!e) {
      p(), s(!1), a(!1), d(!1);
      return;
    }
    const w = (v) => {
      var $;
      if (v.pointerType !== "mouse")
        return;
      const S = v.clientX <= mc;
      S && (($ = m.current) == null || $.style.setProperty(
        "--edge-glow-y",
        `${v.clientY}px`
      )), d(S);
    }, N = () => d(!1), E = () => {
      clearTimeout(l.current), l.current = void 0, o.current === void 0 && (o.current = setTimeout(() => {
        o.current = void 0, s(!1), a(!1);
      }, fc));
    }, C = (v) => {
      t.current.has(v) || E();
    };
    return document.addEventListener("mouseover", C), document.addEventListener("pointermove", w, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", E), document.documentElement.addEventListener("mouseleave", N), () => {
      p(), document.removeEventListener("mouseover", C), document.removeEventListener("pointermove", w), document.documentElement.removeEventListener(
        "mouseleave",
        E
      ), document.documentElement.removeEventListener(
        "mouseleave",
        N
      );
    };
  }, [e]);
  const g = {
    onMouseOver: (w) => {
      t.current.add(w.nativeEvent), clearTimeout(o.current), o.current = void 0, !r && l.current === void 0 && (l.current = setTimeout(() => {
        l.current = void 0, s(!0);
      }, wc));
    },
    onFocus: (w) => {
      pc(w.target) && a(!0);
    },
    onBlur: (w) => {
      const N = w.relatedTarget;
      (!N || !w.currentTarget.contains(N)) && a(!1);
    },
    onKeyDown: (w) => {
      w.key === "Escape" && (a(!1), s(!1));
    }
  }, f = e && (r || i);
  return {
    shown: f,
    nearEdge: e && u && !f,
    glowRef: m,
    rootProps: g
  };
}, pc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, gc = hc, bc = 100, xc = () => {
  const e = c.useRef(null), t = c.useRef(void 0), l = c.useRef(/* @__PURE__ */ new WeakSet()), [o, r] = c.useState(!1), [s, i] = c.useState(!1), a = () => {
    clearTimeout(t.current), t.current = void 0;
  };
  return c.useEffect(() => {
    const d = (p) => {
      l.current.has(p) || (a(), r(!1));
    }, m = () => {
      a(), r(!1);
    };
    return document.addEventListener("mouseover", d), document.documentElement.addEventListener("mouseleave", m), () => {
      a(), document.removeEventListener("mouseover", d), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), c.useEffect(() => {
    if (!s)
      return;
    const d = (m) => {
      var p;
      (p = e.current) != null && p.contains(m.target) || i(!1);
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [s]), {
    expanded: o || s,
    pin: () => i(!0),
    rootProps: {
      ref: e,
      onMouseOver: (d) => {
        l.current.add(d.nativeEvent), !o && t.current === void 0 && (t.current = setTimeout(() => {
          t.current = void 0, r(!0);
        }, bc));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (d) => {
        const m = d.relatedTarget;
        m && !d.currentTarget.contains(m) && i(!1);
      },
      onKeyDown: (d) => {
        d.key === "Escape" && i(!1);
      }
    }
  };
}, vc = xc, yc = (e) => {
  const t = Array.from((e == null ? void 0 : e.children) ?? []).find(
    (a) => a.tagName === "ASIDE"
  );
  if (!t)
    return null;
  const l = t.querySelector("[data-rail-surface]") ?? t, { right: o, width: r } = t.getBoundingClientRect(), { top: s, height: i } = l.getBoundingClientRect();
  return r <= 0 || i <= 0 ? null : { left: o, top: s, height: i };
}, Ec = 300, xl = 288, Nc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Sc = 18, Vo = 72, vl = 90, _c = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", Rc = 68, Zo = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Ac = typeof window > "u" ? Xt : Ns, Tc = ({
  children: e,
  sidebarLinks: t = [],
  secondarySidebarLinks: l = [],
  appName: o = "Dashboard",
  showSidebar: r = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: i = "rail",
  sidebarSubmenu: a = "expand",
  sidebarAutoHide: u = !1,
  mobileNavigation: d = "bottom-bar",
  mobileBottomBarLinks: m,
  logo: p,
  onBrandClick: g,
  searchComponent: f,
  searchIcon: w,
  notificationsIcon: N,
  searchShortcut: E = !1,
  brandColor: C,
  contentPadding: v = wr,
  userMenuItems: S,
  sidebarBackgroundColor: $,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: R,
  activeSidebarForegroundColor: T,
  enableRefreshToken: O = !1,
  holdSessionSkeleton: I = !1,
  sessionSkeletonContent: _,
  activePath: A,
  onLinkClick: M,
  showProfile: L = !0,
  userName: K,
  userRole: P,
  userAvatar: k,
  userEmail: U,
  onLogout: ce,
  showSettings: J = !0,
  onSettingsClick: re,
  onProfileClick: Ae,
  onAiUsageClick: xe,
  showNotifications: fe = !0,
  notificationCount: Xe = 0,
  NotificationSidebarContent: ne,
  whatsNewCount: ke = 0,
  onNotificationsClick: Te,
  platforms: Pe,
  currentPlatformKey: Fe,
  onPlatformSelect: se,
  onVerify: D,
  alertProps: F,
  style: X,
  sidebarStyles: W,
  contentStyles: ee,
  className: le,
  sidebarClassName: ye,
  contentClassName: oe,
  accentColor: de,
  sidebarAccentColor: me,
  sidebarActiveBackgroundColor: he,
  sidebarGroupArrowColor: Ce,
  sidebarForegroundColor: Le,
  contentBackgroundColor: Ke,
  theme: Be = "light",
  darkModeSelector: an,
  showThemeToggler: At = !1,
  onThemeToggle: Tt,
  GlobalChatSidebar: it,
  useChatSidebar: Ct,
  chatPanelMode: Kn = "docked",
  chatPanelPosition: jn = "right",
  chatPanelWidth: Ot = 420,
  onChatClose: cn,
  showAssistant: Ve = !1,
  assistantPlacement: It = "sidebar",
  assistantShortcut: dn = "j",
  onAssistantClick: ot,
  assistantActive: rt = !1,
  assistantBusy: un = !1,
  customNavbar: $t,
  customNavbarProps: h,
  redirectToLogin: z,
  apiBaseUrl: j
}) => {
  const G = Tr(), H = Be === "dark", Z = de ?? "#01584f", Y = me ?? Z, pe = hr(
    typeof Ke == "object" ? Ke[Be] : Ke,
    H
  ), ae = i === "collapsible", ue = i === "panel", Ze = ue && r && !G, ze = i === "rail-labeled", Yn = ae || ze, Ge = Wn(
    $,
    H
  ), qn = y ?? Ge, Ee = Le ?? (H ? "#ffffff" : Y), kt = R ?? Zt(Ee), Lt = y ? El(qn) : Ee, Yl = (B) => /* @__PURE__ */ n(
    "div",
    {
      role: "img",
      "aria-label": `${o} logo`,
      className: "lw:size-7 lw:shrink-0",
      style: {
        backgroundColor: B,
        maskImage: "url(/lumora-logo.svg)",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
        WebkitMaskImage: "url(/lumora-logo.svg)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain"
      }
    }
  ), wn = C ?? Lt, [ql, Vn] = Qe(
    null
  ), Zn = ((Pe == null ? void 0 : Pe.length) ?? 0) > 1, Xr = sl(() => Vn(null), []), Kr = (B) => {
    Vn(null), se ? se(B) : B.key !== Fe && B.url && window.location.assign(B.url);
  }, Vl = (B) => Zn ? /* @__PURE__ */ n(
    tc,
    {
      anchorEl: ql,
      onClose: Xr,
      platforms: Pe,
      currentKey: Fe,
      onSelect: Kr,
      accentColor: Z,
      glass: a === "flyout" && (ae || ue) && !G,
      children: B
    }
  ) : B, fn = Zn ? (B) => Vn(B.currentTarget) : g, mn = Zn ? !!ql : void 0, Jn = Vl(
    p ?? Yl(wn)
  ), jr = Vl(
    p ?? Yl(C ?? Ee)
  ), Qn = vc(), Me = Gn(a, i), We = Me || !Qn.expanded, Oe = r && !G && Ps(u, a, i), Je = gc(Oe), Zl = Me ? "popover" : "expand", Jl = Me ? Vt : jt, Ql = Me ? "transparent" : Ge, eo = Me && !y ? "transparent" : qn, [Yr, to] = Qe(!1), qr = sl(() => to(!1), []), je = mr({
    showSidebar: r,
    isMobile: G,
    sidebarVariant: i,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [no, ct] = Qe(!1), [lo, el] = Qe(!1), Ne = G && d === "bottom-bar", oo = `calc(${Br}px + env(safe-area-inset-bottom, 0px))`, [Mt, ro] = Qe({ open: !1, tab: "notifications" }), so = () => ro((B) => ({ ...B, open: !1 })), Vr = fe && !!ne, ao = gn(null), [Zr, Jr] = Qe(null), Dt = sl(() => {
    const B = G ? null : yc(ao.current), Q = B && Oe ? { ...B, left: et } : B;
    Jr(
      (ge) => ge && Q && ge.left === Q.left && ge.top === Q.top && ge.height === Q.height ? ge : Q
    );
  }, [G, Oe]);
  Xt(() => {
    if (Mt.open)
      return Dt(), window.addEventListener("resize", Dt), () => window.removeEventListener("resize", Dt);
  }, [Mt.open, Dt]);
  const [Qr, es] = Qe(!0), [ts, ns] = Qe(!1), tl = Ct == null ? void 0 : Ct(), io = (tl == null ? void 0 : tl.isOpen) ?? !1, co = Kn === "floating" ? "floating" : "docked", ls = co === "docked" && io && it && !G ? Ot : 0, hn = gn(D), uo = gn(!1), wo = Es(
    () => ja(j),
    [j]
  );
  Xt(() => {
    hn.current = D;
  }, [D]);
  const nl = gn(ot);
  nl.current = ot;
  const Pt = Ve && dn ? dn.toLowerCase() : null;
  Xt(() => {
    if (!Pt)
      return;
    const B = (Q) => {
      (Q.metaKey || Q.ctrlKey) && !Q.altKey && !Q.shiftKey && Q.key.toLowerCase() === Pt && nl.current && (Q.preventDefault(), nl.current());
    };
    return window.addEventListener("keydown", B), () => window.removeEventListener("keydown", B);
  }, [Pt]);
  const fo = (B) => {
    const Q = ce(B);
    Q instanceof Promise && Q.catch((ge) => {
      console.error("Error in logout handler:", ge);
    });
  };
  if (Ac(() => {
    (() => {
      var Q;
      try {
        const { isAuthenticated: ge } = Xa();
        if (!ge) {
          console.log("No session found, redirecting to login"), nn(), z();
          return;
        }
        if (!uo.current) {
          const { user: Bt, error: rl } = Ka();
          if (Bt && !rl) {
            const ws = {
              name: Bt.name || "",
              email: Bt.email || "",
              profilePicture: Bt.profilePicture || "",
              role: Bt.role || ""
            };
            uo.current = !0, (Q = hn.current) == null || Q.call(hn, ws);
          } else
            rl && console.error("Error getting user data:", rl);
        }
        ns(!0);
      } catch (ge) {
        console.error("Error checking session:", ge), nn(), z();
      } finally {
        es(!1);
      }
    })();
  }, [z]), Xt(() => {
    O && Ya(wo, z);
  }, [O, wo]), Qr || I)
    return /* @__PURE__ */ n(
      Ha,
      {
        theme: Be,
        darkModeSelector: an,
        sidebarVariant: i,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: r,
        contentPadding: v,
        sidebarBackgroundColor: $,
        contentBackgroundColor: Ke,
        content: _
      }
    );
  if (!ts)
    return null;
  const Ft = f ?? ($t ? /* @__PURE__ */ n($t, { ...h }) : null), os = (B) => {
    ct(!1), el(!1), Dt(), ro({ open: !0, tab: B });
  }, ll = ne && (() => os("notifications")), rs = Xe + ke, mo = {
    avatarColor: Y,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: S == null ? void 0 : S.map(
      (B) => B.onClick || !B.path ? B : { ...B, onClick: () => M == null ? void 0 : M(B.path) }
    ),
    showNotifications: fe,
    notificationCount: Xe,
    whatsNewCount: ke,
    onNotificationsClick: ll,
    showProfile: L,
    userName: K,
    userRole: P,
    userAvatar: k,
    showSettings: J,
    onSettingsClick: re,
    showThemeToggler: At,
    theme: Be,
    onThemeToggle: Tt,
    onLogout: fo
  }, ol = (B) => /* @__PURE__ */ n(
    lc,
    {
      ...mo,
      compact: B,
      color: Ee,
      hoverColor: kt
    }
  ), ho = Pt ? [Zo() ? "⌘" : "Ctrl", Pt.toUpperCase()] : void 0, ss = (B) => Ve && It === "sidebar" ? /* @__PURE__ */ n(
    Po,
    {
      variant: B ? "sidebar-icon" : "sidebar",
      onClick: ot,
      active: rt,
      busy: un,
      shortcutKeys: ho,
      accentColor: Ee
    }
  ) : null, as = E ? [Zo() ? "⌘" : "Ctrl", E.toUpperCase()] : void 0, is = (B) => Ft ? /* @__PURE__ */ n(
    uc,
    {
      search: Ft,
      icon: w,
      mode: B,
      onExpand: () => {
        Qn.pin(), to(!0);
      },
      autoFocus: Yr,
      onAutoFocused: qr,
      color: Ee,
      hoverColor: kt,
      shortcutKeys: as
    }
  ) : null, pn = (B) => {
    const Q = ss(B !== "full"), ge = is(B);
    return Q || ge ? /* @__PURE__ */ x(
      "div",
      {
        className: b(
          "lw:flex lw:flex-col",
          B === "full" ? "lw:items-stretch" : "lw:items-center"
        ),
        style: { gap: Me ? zn : 12 },
        children: [
          Q,
          Me && Q && ge ? /* @__PURE__ */ n(
            "div",
            {
              role: "separator",
              className: "lw:w-full lw:border-t lw:border-solid",
              style: {
                borderTopColor: Zt(Ee)
              }
            }
          ) : null,
          ge
        ]
      }
    ) : void 0;
  }, po = () => /* @__PURE__ */ n(
    _l,
    {
      mainLinks: t,
      secondaryLinks: l,
      activePath: A,
      onLinkClick: M,
      showHeaderBar: ae,
      logo: Jn,
      title: o,
      onBrandClick: fn,
      brandMenuOpen: mn,
      brandColor: wn,
      headerBackgroundColor: ae ? eo : void 0,
      headerForegroundColor: ae ? Lt : void 0,
      activeAccentColor: Y,
      activeBackgroundColor: he,
      groupArrowColor: Ce,
      groupAccentColor: R,
      activeForegroundColor: T,
      foregroundColor: Le,
      surfaceBackgroundColor: Ql,
      flyoutSurfaceColor: Ge,
      collapsed: ze || We,
      showLabels: ze,
      expandedWidth: xl,
      collapsedWidth: ze ? cr : Jl,
      topContent: pn(
        ze ? "popover" : We ? Zl : "full"
      ),
      footer: ol(ze || We),
      submenuMode: Me ? "flyout" : "inline"
    }
  ), go = (B) => Me ? cs(B) : ds(B), cs = (B) => /* @__PURE__ */ x(
    "aside",
    {
      ...Oe ? Je.rootProps : {},
      "data-auto-hide": Oe ? "true" : void 0,
      "data-shown": Oe ? String(Je.shown) : void 0,
      className: b(
        // Above the page, including its sticky app bars
        "lw:top-0 lw:z-[1101] lw:h-screen",
        Oe ? "lw:pointer-events-none lw:fixed lw:left-0" : "lw:sticky lw:shrink-0 lw:self-start"
      ),
      style: Oe ? {
        width: Vt + 2 * et
      } : {
        width: je,
        minWidth: je,
        backgroundColor: pe
      },
      children: [
        Oe && /* @__PURE__ */ n(
          "div",
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            className: "lw:pointer-events-auto lw:absolute lw:inset-y-0 lw:left-0",
            style: { width: Sc }
          }
        ),
        Oe && /* @__PURE__ */ n(
          "div",
          {
            ref: Je.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(Je.nearEdge),
            "aria-hidden": "true",
            className: "lw:pointer-events-none lw:absolute lw:inset-y-0 lw:left-0 lw:transition-opacity lw:duration-200 lw:ease-[ease]",
            style: {
              "--edge-glow-y": "50%",
              width: Vo,
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${Vo}px ${vl}px at 0 var(--edge-glow-y), ${nt(Ee, H ? 0.5 : 0.4)}, ${nt(Ee, 0)})`,
              opacity: Je.nearEdge ? 1 : 0
            },
            children: /* @__PURE__ */ n(
              "span",
              {
                className: "lw:absolute lw:inset-y-0 lw:left-0 lw:w-[3px]",
                style: {
                  background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${vl}px), ${nt(Ee, H ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${vl}px))`
                }
              }
            )
          }
        ),
        /* @__PURE__ */ x(
          "div",
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            className: b(
              "lw:absolute lw:flex lw:flex-col",
              Oe && or,
              ye
            ),
            style: {
              top: et,
              bottom: et,
              left: et,
              width: Vt,
              borderRadius: ur,
              ...Oe && {
                pointerEvents: Je.shown ? "auto" : "none",
                opacity: Je.shown ? 1 : 0,
                transform: Je.shown ? "none" : `translateX(calc(-100% - ${2 * et}px))`,
                transition: _c
              },
              ...W
            },
            children: [
              /* @__PURE__ */ n(
                Xn,
                {
                  isDark: H,
                  solid: Ge,
                  className: "lw:absolute lw:inset-0",
                  style: { borderRadius: "inherit" }
                }
              ),
              /* @__PURE__ */ n(
                "div",
                {
                  className: "lw:relative lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-hidden",
                  style: { borderRadius: "inherit" },
                  children: B
                }
              )
            ]
          }
        )
      ]
    }
  ), ds = (B) => /* @__PURE__ */ n(
    "aside",
    {
      className: "lw:sticky lw:top-0 lw:z-[1101] lw:h-screen lw:shrink-0 lw:self-start",
      style: {
        width: jt,
        minWidth: jt
      },
      children: /* @__PURE__ */ n(
        "div",
        {
          ...Me ? {} : Qn.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": We ? "false" : "true",
          className: b(
            "lw:absolute lw:top-0 lw:left-0 lw:flex lw:h-full lw:flex-col lw:overflow-hidden lw:border-r lw:border-solid lw:border-border",
            ye
          ),
          style: {
            width: We ? jt : xl,
            backgroundColor: Ge,
            boxShadow: We ? "none" : `4px 0 24px rgba(0, 0, 0, ${H ? 0.5 : 0.12})`,
            transition: Nc,
            ...W
          },
          children: B
        }
      )
    }
  ), us = fr(v), dt = G ? null : Zr;
  return /* @__PURE__ */ n(yr.Provider, { value: Be, children: /* @__PURE__ */ n(rr.Provider, { value: Y, children: /* @__PURE__ */ n(Fn.Provider, { value: Ge, children: /* @__PURE__ */ n(Gr.Provider, { value: N, children: /* @__PURE__ */ x(
    "div",
    {
      ref: ao,
      "data-lw-scope": "",
      "data-lw-theme": Be,
      className: b("lw:flex lw:min-h-screen", le),
      style: X,
      children: [
        G && /* @__PURE__ */ n(
          ki,
          {
            height: Tn,
            onMenuClick: r && !Ne ? () => ct(!0) : void 0,
            appName: o,
            logo: Jn,
            onBrandClick: fn,
            brandMenuOpen: mn,
            background: qn,
            color: Lt,
            brandColor: wn,
            endContent: fe ? /* @__PURE__ */ n(
              Kl,
              {
                count: rs,
                onClick: ll,
                color: Lt,
                hoverColor: kt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        r && !G && ze && /* @__PURE__ */ n(
          "aside",
          {
            className: b(
              "lw:sticky lw:top-0 lw:z-[2] lw:flex lw:h-screen lw:shrink-0 lw:flex-col lw:self-start lw:border-r lw:border-solid lw:border-border",
              ye
            ),
            style: {
              width: je,
              minWidth: je,
              ...W
            },
            children: po()
          }
        ),
        r && !G && ae && go(
          /* @__PURE__ */ x(ie, { children: [
            po(),
            (F == null ? void 0 : F.show) && !We && /* @__PURE__ */ n(_n, { ...F })
          ] })
        ),
        Ze && go(
          /* @__PURE__ */ x(ie, { children: [
            /* @__PURE__ */ n(
              Zi,
              {
                mainLinks: t,
                secondaryLinks: l,
                activePath: A,
                onLinkClick: M,
                logo: Jn,
                title: o,
                onBrandClick: fn,
                brandMenuOpen: mn,
                brandColor: wn,
                headerBackgroundColor: eo,
                headerForegroundColor: Lt,
                activeAccentColor: Y,
                activeBackgroundColor: he,
                groupArrowColor: Ce,
                groupAccentColor: R,
                activeForegroundColor: T,
                foregroundColor: Le,
                surfaceBackgroundColor: Ql,
                flyoutSurfaceColor: Ge,
                collapsed: We,
                expandedWidth: xl,
                collapsedWidth: Jl,
                topContent: pn(
                  We ? Zl : "full"
                ),
                submenuMode: Me ? "flyout" : "inline",
                color: Ee,
                hoverColor: kt,
                avatarColor: Y,
                showProfile: L,
                userName: K,
                userEmail: U,
                userRole: P,
                userAvatar: k,
                showNotifications: fe,
                notificationCount: Xe,
                onNotificationsClick: Vr ? ll : Te,
                whatsNewCount: ke,
                onProfileClick: Ae,
                onAiUsageClick: xe,
                menuItems: S,
                onLogout: fo,
                theme: Be,
                showThemeToggler: At,
                onThemeToggle: Tt
              }
            ),
            (F == null ? void 0 : F.show) && !We && /* @__PURE__ */ n(_n, { ...F })
          ] })
        ),
        r && !G && !Yn && !ue && // The fixed rail: a permanent drawer, its column fixed
        // to the window's left edge
        /* @__PURE__ */ n(
          "div",
          {
            "data-slot": "rail-drawer",
            className: b(
              "lw:z-[2] lw:shrink-0",
              ye
            ),
            style: {
              width: je,
              ...W
            },
            children: /* @__PURE__ */ x(
              "aside",
              {
                "data-slot": "rail-drawer-paper",
                className: "lw:fixed lw:top-0 lw:left-0 lw:z-[1200] lw:flex lw:h-full lw:flex-col lw:overflow-y-auto lw:px-3 lw:pt-4",
                style: {
                  width: je,
                  backgroundColor: pe
                },
                children: [
                  /* @__PURE__ */ n("div", { className: "lw:mb-3 lw:flex lw:justify-center", children: /* @__PURE__ */ n(
                    kn,
                    {
                      logo: jr,
                      appName: o,
                      onClick: fn,
                      menuOpen: mn,
                      color: C ?? Ee,
                      testId: "sidebar-header-brand"
                    }
                  ) }),
                  pn("popover"),
                  /* @__PURE__ */ x("div", { className: "lw:mt-2 lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-y-auto", children: [
                    /* @__PURE__ */ n(
                      gi,
                      {
                        mainLinks: t,
                        secondaryLinks: l,
                        activePath: A,
                        onLinkClick: M,
                        accentColor: Y,
                        surfaceBackgroundColor: pe,
                        railShowTitles: s
                      }
                    ),
                    (F == null ? void 0 : F.show) && /* @__PURE__ */ n(
                      _n,
                      {
                        ...F
                      }
                    )
                  ] }),
                  /* @__PURE__ */ n("div", { className: "lw:py-3", children: ol(!0) })
                ]
              }
            )
          }
        ),
        r && G && /* @__PURE__ */ n(
          Tl,
          {
            open: no,
            onOpenChange: ct,
            children: /* @__PURE__ */ x(
              Mn,
              {
                side: Ne ? "bottom" : "left",
                "aria-label": "Navigation",
                srTitle: "Navigation",
                overlayClassName: "lw:z-[1201]",
                className: b(
                  "lw:z-[1201] lw:overflow-y-auto lw:border-0",
                  Ne ? "lw:max-h-[min(80vh,640px)] lw:rounded-t-2xl lw:pb-[env(safe-area-inset-bottom,0px)]" : "lw:max-w-[85vw]"
                ),
                style: {
                  backgroundColor: Ge
                },
                children: [
                  Ne && // Grab handle, marking the sheet as one that closes downwards
                  /* @__PURE__ */ n(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "lw:mx-auto lw:mt-2 lw:mb-1 lw:h-1 lw:w-9 lw:shrink-0 lw:rounded-[2px] lw:bg-border"
                    }
                  ),
                  /* @__PURE__ */ n(
                    _l,
                    {
                      mainLinks: t,
                      secondaryLinks: l,
                      activePath: A,
                      onLinkClick: (B) => {
                        M == null || M(B), ct(!1);
                      },
                      onLinkAction: () => ct(!1),
                      collapsed: !1,
                      expandedWidth: Ne ? "100%" : Ec,
                      activeAccentColor: Y,
                      activeBackgroundColor: he,
                      groupArrowColor: Ce,
                      groupAccentColor: R,
                      activeForegroundColor: T,
                      foregroundColor: Le,
                      surfaceBackgroundColor: Ge,
                      topInsetPx: Ne ? 8 : 0,
                      topContent: Ne ? void 0 : pn("full"),
                      footer: Ne ? void 0 : ol(!1)
                    }
                  ),
                  (F == null ? void 0 : F.show) && /* @__PURE__ */ n(_n, { ...F })
                ]
              }
            )
          }
        ),
        Ne && Ft && /* @__PURE__ */ n(
          Ii,
          {
            open: lo,
            onClose: () => el(!1),
            search: Ft
          }
        ),
        Ne && /* @__PURE__ */ n(
          Ti,
          {
            ...mo,
            pinnedLinks: m,
            activePath: A,
            onLinkClick: M,
            onMenuClick: r ? () => ct(!0) : void 0,
            menuOpen: no,
            onSearchClick: Ft ? () => el(!0) : void 0,
            searchOpen: lo,
            showAssistant: Ve,
            onAssistantClick: ot,
            assistantActive: rt,
            showProfile: L,
            background: Ge,
            color: Ee,
            activeColor: Y,
            activeBackground: kt
          }
        ),
        /* @__PURE__ */ n(
          "main",
          {
            "data-lw-host": "",
            className: b(
              "lw-content-padding lw:grow",
              oe
            ),
            style: {
              ...us,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": G ? `${Tn}px` : "0px",
              padding: "var(--lumora-content-padding)",
              width: je ? `calc(100% - ${je}px)` : "100%",
              marginTop: G ? `${Tn}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Ne && {
                paddingBottom: `calc(var(--lumora-content-padding) + ${oo})`
              },
              backgroundColor: pe,
              ...ee
            },
            children: e
          }
        ),
        it && /* @__PURE__ */ n(
          ri,
          {
            open: io,
            variant: co,
            position: jn,
            width: Ot,
            sidebarWidthPx: je,
            bottomOffsetPx: Ve && It === "floating" ? Rc : 0,
            fullScreen: G,
            fullScreenBottom: Ne ? oo : "0px",
            onClose: cn,
            children: /* @__PURE__ */ n(it, {})
          }
        ),
        Ve && It === "floating" && !Ne && /* @__PURE__ */ n(
          Po,
          {
            variant: "floating",
            rightOffsetPx: ls,
            shortcutKeys: ho,
            onClick: ot,
            active: rt,
            busy: un
          }
        ),
        fe && ne && /* @__PURE__ */ n(
          Tl,
          {
            open: Mt.open,
            onOpenChange: (B) => {
              B || so();
            },
            children: /* @__PURE__ */ n(
              Mn,
              {
                side: dt ? "left" : "right",
                overlay: "invisible",
                srTitle: "Updates",
                "data-lw-host": "",
                className: "lw:border-0",
                style: dt ? {
                  width: 380,
                  maxWidth: `calc(100vw - ${dt.left}px)`,
                  left: dt.left,
                  top: dt.top,
                  height: dt.height
                } : {
                  width: 380,
                  maxWidth: "100vw"
                },
                children: /* @__PURE__ */ n(
                  ne,
                  {
                    onClose: so,
                    initialTab: Mt.tab
                  },
                  Mt.tab
                )
              }
            )
          }
        )
      ]
    }
  ) }) }) }) });
}, Gc = Tc, Ie = {
  50: "hsl(210, 100%, 95%)",
  100: "hsl(210, 100%, 92%)",
  200: "hsl(210, 100%, 80%)",
  300: "hsl(210, 100%, 65%)",
  400: "hsl(210, 98%, 48%)",
  500: "hsl(210, 98%, 42%)",
  600: "hsl(210, 98%, 55%)",
  700: "hsl(210, 100%, 35%)",
  800: "hsl(210, 100%, 16%)",
  900: "hsl(210, 100%, 21%)"
}, $e = {
  50: "hsl(220, 35%, 97%)",
  100: "hsl(220, 30%, 94%)",
  200: "hsl(220, 20%, 88%)",
  300: "hsl(220, 20%, 80%)",
  400: "hsl(220, 20%, 65%)",
  500: "hsl(220, 20%, 42%)",
  600: "hsl(220, 20%, 35%)",
  700: "hsl(220, 20%, 25%)",
  800: "hsl(220, 30%, 6%)",
  900: "hsl(220, 35%, 3%)"
}, ft = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, mt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, ht = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, pt = (e, t) => {
  const l = /^hsl\((.+)\)$/.exec(e);
  if (l)
    return `hsla(${l[1]}, ${t})`;
  const o = /^#([0-9a-f]{6})$/i.exec(e);
  if (o) {
    const r = parseInt(o[1], 16);
    return `rgba(${r >> 16 & 255}, ${r >> 8 & 255}, ${r & 255}, ${t})`;
  }
  return e;
}, De = (e) => `${e / 16}rem`, q = (...e) => [
  `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
  `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
  `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`
].join(","), Cc = [
  "none",
  q(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
  q(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
  q(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
  q(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  q(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  q(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  q(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  q(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  q(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  q(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  q(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  q(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  q(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  q(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  q(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  q(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  q(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  q(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  q(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  q(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  q(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  q(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  q(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  q(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
], Wc = (e) => {
  const t = e === "dark", l = [...Cc];
  return l[1] = t ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: t ? Ie[300] : Ie[200],
        main: Ie[400],
        dark: Ie[700],
        contrastText: Ie[50]
      },
      info: t ? {
        light: Ie[500],
        main: Ie[700],
        dark: Ie[900],
        contrastText: Ie[300]
      } : {
        light: Ie[100],
        main: Ie[300],
        dark: Ie[600],
        contrastText: $e[50]
      },
      warning: t ? { light: mt[400], main: mt[500], dark: mt[700] } : { light: mt[300], main: mt[400], dark: mt[800] },
      error: t ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      success: t ? { light: ft[400], main: ft[500], dark: ft[700] } : { light: ft[300], main: ft[400], dark: ft[800] },
      grey: $e,
      divider: t ? pt($e[700], 0.6) : pt($e[300], 0.4),
      background: t ? { default: $e[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: t ? { primary: "hsl(0, 0%, 100%)", secondary: $e[400] } : { primary: $e[800], secondary: $e[600] },
      action: t ? {
        hover: pt($e[600], 0.2),
        selected: pt($e[600], 0.3)
      } : {
        hover: pt($e[200], 0.2),
        selected: pt($e[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: De(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: De(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: De(30), lineHeight: 1.2 },
      h4: { fontSize: De(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: De(20), fontWeight: 600 },
      h6: { fontSize: De(18), fontWeight: 600 },
      subtitle1: { fontSize: De(18) },
      subtitle2: { fontSize: De(14), fontWeight: 500 },
      body1: { fontSize: De(14) },
      body2: { fontSize: De(14), fontWeight: 400 },
      caption: { fontSize: De(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: l
  };
};
export {
  te as AUTH_ERROR_CODES,
  V as AuthError,
  _l as CollapsibleSidebar,
  Bc as FullBleedSection,
  Da as Kbd,
  Ha as LumoraShellSkeleton,
  Gc as LumoraWrapper,
  nn as clearAuthTokens,
  Gc as default,
  zc as getAuthErrorMessage,
  tn as getAuthTokens,
  Ka as getCurrentUser,
  Wc as getDesignTokens,
  Xa as isAuthenticated,
  Rl as logAuthError,
  Or as storeAuthTokens
};
