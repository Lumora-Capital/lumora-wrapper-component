import { jsx as t, jsxs as S, Fragment as Ae } from "react/jsx-runtime";
import Bs from "@mui/icons-material/KeyboardArrowDownRounded";
import zs from "@mui/icons-material/KeyboardArrowUpRounded";
import Gs from "@mui/icons-material/ChevronRightRounded";
import C from "@mui/material/Box";
import on from "@mui/material/Collapse";
import Qe from "@mui/material/Divider";
import we from "@mui/material/IconButton";
import uo from "@mui/material/ListItemButton";
import Ee from "@mui/material/ListItemIcon";
import Xe from "@mui/material/ListItemText";
import Ce from "@mui/material/Stack";
import Re from "@mui/material/Tooltip";
import ne from "@mui/material/Typography";
import { useTheme as je, createTheme as Io, alpha as Fe, ThemeProvider as wo } from "@mui/material/styles";
import * as d from "react";
import { useMemo as rn, useState as ut, useCallback as nn, useRef as jo, useEffect as xo, useLayoutEffect as Hs } from "react";
import Ke from "@mui/material/ButtonBase";
import { keyframes as hr } from "@emotion/react";
import mr from "@mui/material/Fade";
import gr from "@mui/material/Popper";
import { useTheme as Pn, CssBaseline as tr, GlobalStyles as Us, Box as Y, useMediaQuery as Bn, Stack as Gt, Skeleton as ke, Drawer as sn, SwipeableDrawer as Xs } from "@mui/material";
import an from "axios";
import Ks from "@mui/material/Card";
import js from "@mui/material/CardContent";
import zn from "@mui/material/Button";
import Vs from "@mui/icons-material/AutoAwesomeRounded";
import Ys from "@mui/material/Grow";
import xr from "@mui/material/Paper";
import qs from "@mui/material/Slide";
import Zs from "@mui/material/ListSubheader";
import st from "@mui/material/MenuItem";
import br from "@mui/material/MenuList";
import Gn from "@mui/icons-material/MenuRounded";
import vr from "@mui/icons-material/SearchRounded";
import Hn from "@mui/icons-material/LogoutRounded";
import Un from "@mui/icons-material/NotificationsNoneOutlined";
import Js from "@mui/icons-material/SettingsOutlined";
import Qs from "@mui/material/Avatar";
import ei from "@mui/material/Menu";
import cn from "@mui/material/ToggleButton";
import ti from "@mui/material/ToggleButtonGroup";
import oi from "@mui/material/Drawer";
import ri from "@mui/material/AppBar";
import ni from "@mui/material/Toolbar";
import Xn from "@mui/material/Badge";
import si from "@mui/icons-material/DarkModeOutlined";
import ii from "@mui/icons-material/LightModeOutlined";
import ai from "@mui/icons-material/SettingsBrightnessOutlined";
import yr from "@mui/material/Popover";
import ci from "@mui/icons-material/CheckRounded";
const Eo = ({
  logo: e,
  title: o,
  appName: r,
  onClick: n,
  color: s,
  testId: i,
  menuOpen: c
}) => {
  const a = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: s,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, u = /* @__PURE__ */ S(Ae, { children: [
    o ? /* @__PURE__ */ t(
      ne,
      {
        variant: "h6",
        noWrap: !0,
        sx: {
          color: s,
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: 1,
          textTransform: "uppercase"
        },
        children: o
      }
    ) : null,
    e
  ] });
  return n ? /* @__PURE__ */ t(
    Ke,
    {
      onClick: n,
      "aria-label": c === void 0 ? `${r} home` : `${r}: switch platform`,
      ...c !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": c
      },
      "data-testid": i,
      focusRipple: !0,
      sx: {
        ...a,
        display: "flex",
        borderRadius: 1,
        px: 0.5,
        mx: -0.5,
        "&:hover": { backgroundColor: "action.hover" },
        "&.Mui-focusVisible": {
          outline: "2px solid",
          outlineColor: s,
          outlineOffset: 2
        }
      },
      children: u
    }
  ) : /* @__PURE__ */ t(Ce, { direction: "row", "data-testid": i, sx: a, children: u });
}, or = !1, Tt = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, It = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, Et = (e, o) => e ? `${e}/${o.text}` : o.text, nt = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => nt(n, o))) ?? !1 : !1;
}, Ue = (e, o) => !!(o && e.path === o), Sr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return It(r) ? Sr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), rr = (e) => {
  const o = _o(e);
  if (!o)
    return "#ffffff";
  const [r, n, s] = o.map((c) => {
    const a = c / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Kt = (e) => {
  const o = _o(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = o;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, nr = (e, o) => {
  const r = _o(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, _o = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Kn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), wr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", li = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", di = hr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, xe = "@media (prefers-reduced-motion: reduce)", te = 6, Er = "9, 193, 174", jn = d.createContext(
  void 0
), To = d.createContext(
  void 0
), Rr = (e) => d.useContext(To) ?? e, Ao = () => {
  const e = d.useContext(jn), o = e ? _o(e) : null;
  return o ? o.join(", ") : Er;
}, ui = (e, o, r = Er) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${li(e)}, 0 0 0 1px ${wr(e)}`
}), Co = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: wr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${te}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), Ir = hr`
	from {
		transform: scale(0.16, 0.12);
		opacity: 0;
	}
	30% {
		opacity: 1;
	}
	to {
		transform: none;
		opacity: 1;
	}
`, _r = hr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Vn = (e, o = Er, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Ro = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: nr(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${nr(e, 0.45)}`
}, fi = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${wr(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${te}px`,
        transition: "box-shadow 180ms ease, background 180ms ease"
      },
      hover: {
        background: e ? "rgba(255, 255, 255, 0.06)" : "#ffffff"
      },
      focus: {
        background: e ? "rgba(255, 255, 255, 0.06)" : "#ffffff",
        boxShadow: `${r}, 0 0 0 3px ${o}`
      }
    };
  }
}, pi = 100, Yn = 80, bo = 56, Ht = 72, Xt = 64, le = 44, jt = 24, Oo = 4, ht = 8, qn = te, Zn = { xs: 2, md: "18px" }, Jn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, $o = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), hi = (e, o, r) => e && $o(o, r), Qn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || o ? 0 : r === "rail-labeled" ? Yn : $o(n, r) ? s ? 0 : Xt + 2 * ht : r === "collapsible" || r === "panel" ? Ht : pi, es = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), ts = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), os = { stiffness: 320, damping: 24 }, rs = { stiffness: 320, damping: 28 }, Tr = { stiffness: 520, damping: 20 }, Ar = { stiffness: 380, damping: 36 }, Mo = { stiffness: 260, damping: 28 }, mi = "cubic-bezier(0.32, 1.28, 0.52, 1)", gi = 420, ln = 60, xi = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), dn = /* @__PURE__ */ new Map(), be = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, s = dn.get(n);
  if (s)
    return s;
  if (!xi)
    return { easing: mi, duration: gi };
  const i = 1 / 600;
  let c = 0, a = 0, u = 0, l = 1 / ln;
  const h = [0];
  for (; u < 3; ) {
    const p = (-e * (c - 1) - o * a) / r;
    if (a += p * i, c += a * i, u += i, u >= l && (h.push(c), l += 1 / ln, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  h[h.length - 1] = 1;
  const m = {
    easing: `linear(${h.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return dn.set(n, m), m;
}, Vt = (e) => !!(e && typeof e.animate == "function"), At = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, bi = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, vi = (e, o = 1.14) => {
  if (!Vt(e) || At())
    return;
  const r = be(Tr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, yi = 1.6, ns = 110, it = 110, bt = be(Ar), Si = (e, o = ns) => e >= o ? 0 : (1 + Math.cos(Math.PI * e / o)) / 2, ss = (e, {
  enabled: o,
  axis: r,
  itemSelector: n,
  glyphSelector: s,
  transition: i,
  maxScale: c = yi,
  reach: a = ns,
  carrierSelector: u
}) => {
  const l = d.useRef(0), h = d.useRef(
    /* @__PURE__ */ new WeakMap()
  ), m = d.useRef(/* @__PURE__ */ new Set()), p = d.useRef(/* @__PURE__ */ new Set()), x = i ? `, ${i}` : "", g = (b) => u ? b.closest(u) : null, w = (b) => {
    var $;
    const [I = "0", D = "0"] = ((($ = g(b)) == null ? void 0 : $.style.translate) ?? "").split(" ").filter(Boolean);
    return r === "x" ? parseFloat(I) || 0 : parseFloat(D) || 0;
  }, E = (b) => {
    const I = b.getBoundingClientRect();
    return (r === "x" ? I.left + I.width / 2 : I.top + I.height / 2) - w(b);
  }, O = (b) => {
    const I = b.getBoundingClientRect();
    return Array.from(b.querySelectorAll(n)).filter((D) => {
      var X;
      const $ = (X = D.parentElement) == null ? void 0 : X.closest(n);
      if ($ && b.contains($))
        return !1;
      const T = D.getBoundingClientRect(), k = E(D), P = r === "x" ? k : T.left + T.width / 2, B = r === "x" ? T.top + T.height / 2 : k;
      return T.width > 0 && P >= I.left && P <= I.right && B >= I.top && B <= I.bottom;
    }).map((D) => ({
      item: D,
      glyph: s ? D.querySelector(s) : D
    })).filter(
      (D) => D.glyph !== null
    );
  }, v = (b, I) => {
    if (I === b)
      return c;
    let D = h.current.get(I);
    if (D === void 0) {
      const k = Number(I.style.scale) || 1, P = I.getBoundingClientRect();
      D = { width: P.width / k, height: P.height / k }, h.current.set(I, D);
    }
    if (!(D.width > 0 && D.height > 0))
      return 1;
    const $ = b.getBoundingClientRect(), T = Math.min(
      $.width / D.width,
      $.height / D.height
    );
    return Math.max(1, Math.min(T, c));
  }, R = () => {
    var b, I, D, $;
    cancelAnimationFrame(l.current), m.current.forEach((T) => {
      T.style.transition = `scale ${bt.duration}ms ${bt.easing}${x}`, T.style.scale = "";
    }), m.current.clear(), p.current.forEach((T) => {
      T.style.transition = `translate ${bt.duration}ms ${bt.easing}`, T.style.translate = "";
    }), p.current.clear(), (b = e.current) == null || b.style.setProperty(
      "--dock-scale-timing",
      `${bt.duration}ms ${bt.easing}`
    ), (I = e.current) == null || I.style.removeProperty("--dock-spread"), (D = e.current) == null || D.style.removeProperty("--dock-max-scale"), ($ = e.current) == null || $.style.removeProperty("--dock-active-scale");
  }, L = (b, I, D) => {
    const $ = r === "x" ? I : D, T = O(b).map(({ item: B, glyph: X }) => {
      const A = E(B), z = 1 + (v(B, X) - 1) * Si(Math.abs($ - A), a);
      X.style.transition = `scale ${it}ms ease-out${x}`, z > 1.001 ? (X.style.scale = z.toFixed(3), m.current.add(X)) : m.current.has(X) && (X.style.scale = "", m.current.delete(X));
      const se = r === "x" ? B.offsetWidth : B.offsetHeight;
      return { item: B, centre: A, scale: z, growth: (z - 1) * se };
    });
    b.style.setProperty(
      "--dock-scale-timing",
      `${it}ms ease-out`
    ), b.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...T.map(({ scale: B }) => B)).toFixed(3)
    );
    const k = T.find(({ item: B }) => B.dataset.active === "true");
    if (b.style.setProperty(
      "--dock-active-scale",
      ((k == null ? void 0 : k.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const P = T.reduce((B, { growth: X }) => B + X, 0);
    b.style.setProperty("--dock-spread", `${P.toFixed(1)}px`), T.forEach(({ item: B, centre: X, growth: A }) => {
      const z = g(B);
      if (!z)
        return;
      const se = T.reduce(
        (Oe, fe) => fe.centre < X ? Oe + fe.growth : Oe,
        A / 2
      );
      z.style.transition = `translate ${it}ms ease-out`, Math.abs(se) > 0.1 ? (z.style.translate = r === "x" ? `${se.toFixed(1)}px 0` : `0 ${se.toFixed(1)}px`, p.current.add(z)) : p.current.has(z) && (z.style.translate = "", p.current.delete(z));
    });
  }, y = (b) => {
    if (b.pointerType && b.pointerType !== "mouse" || At())
      return;
    const I = b.currentTarget, { clientX: D, clientY: $ } = b;
    cancelAnimationFrame(l.current), l.current = requestAnimationFrame(() => {
      const T = I.getBoundingClientRect(), k = r === "x" ? $ : D, [P, B] = r === "x" ? [T.top, T.bottom] : [T.left, T.right];
      if (k < P || k > B) {
        R();
        return;
      }
      L(I, D, $);
    });
  }, _ = (b) => {
    const I = e.current;
    if (!o || !I || At())
      return;
    const D = b.getBoundingClientRect();
    L(I, D.left + D.width / 2, D.top + D.height / 2);
  };
  return d.useEffect(() => {
    o || R();
  }, [o]), d.useEffect(() => () => cancelAnimationFrame(l.current), []), {
    containerProps: o ? { onPointerMove: y, onPointerLeave: R, onScrollCapture: R } : {},
    swellOn: _,
    settle: R
  };
}, Yt = "data-rail-item", is = `[${Yt}], button, [role="button"]`, Ct = d.createContext(!1), Cr = () => {
  const e = d.useContext(Ct), o = je(), r = d.useContext(To);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: Co(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, _t = be(Ar), Or = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: c = null
}) => {
  const a = d.useRef(null), u = Ao(), [l, h] = d.useState(null), m = d.useRef(null), p = d.useRef(null), x = (y, _) => {
    p.current = _;
    const b = _.getBoundingClientRect(), I = y.getBoundingClientRect(), D = n ?? b.width, $ = n ?? b.height, T = {
      top: Math.round(b.top - I.top + (b.height - $) / 2),
      left: Math.round(b.left - I.left + (b.width - D) / 2),
      width: Math.round(D),
      height: Math.round($)
    };
    h(
      (k) => k && k.visible && k.top === T.top && k.left === T.left && k.width === T.width && k.height === T.height ? k : { ...T, visible: !0, instant: !(k != null && k.visible) }
    );
  }, g = (y, _) => {
    var I;
    const b = (I = _ == null ? void 0 : _.closest) == null ? void 0 : I.call(_, r);
    return b && y.contains(b) ? b : null;
  }, w = (y) => {
    if (!e)
      return;
    const _ = g(y.currentTarget, y.target);
    _ && x(y.currentTarget, _);
  }, E = (y) => {
    if (!e)
      return;
    const _ = g(y.currentTarget, y.target);
    _ && y.target.matches(":focus-visible") && x(y.currentTarget, _);
  }, O = () => {
    var b;
    const y = (b = a.current) == null ? void 0 : b.parentElement, _ = i && (y == null ? void 0 : y.querySelector(i));
    return y && _ ? { container: y, item: _ } : null;
  }, v = () => {
    const y = O();
    if (y) {
      x(y.container, y.item);
      return;
    }
    p.current = null, h((_) => _ != null && _.visible ? { ..._, visible: !1 } : _);
  };
  d.useEffect(() => {
    var _, b;
    if (!e)
      return;
    const y = O();
    y ? x(y.container, y.item) : (b = (_ = a.current) == null ? void 0 : _.parentElement) != null && b.matches(":hover") || v();
  }, [e, c]);
  const R = (y) => {
    const _ = y.relatedTarget;
    (!_ || !y.currentTarget.contains(_)) && (y.currentTarget.matches(":hover") || v());
  };
  return d.useEffect(() => {
    const y = a.current;
    if (!(l != null && l.visible)) {
      m.current = null;
      return;
    }
    const _ = m.current;
    if (m.current = l.top, !Vt(y) || At() || _ === null || l.instant)
      return;
    const b = Math.min(Math.abs(l.top - _) / 600, 0.08);
    b && y.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - b / 2}, ${1 + b})`,
          offset: 0.35
        },
        { transform: "scale(1, 1)" }
      ],
      { duration: _t.duration, easing: "ease-out" }
    );
  }, [l == null ? void 0 : l.top, l == null ? void 0 : l.visible, l == null ? void 0 : l.instant]), {
    lens: e && l ? /* @__PURE__ */ t(
      C,
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...Vn(o, u),
          borderRadius: `${s}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: l.width,
          height: l.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset.
          translate: `${l.left}px ${l.top}px`,
          // Shrinks away as it fades; wells back up on return. Swells
          // with the item under it (useDockMagnify)
          // Fades in and out at its item's size, never popping from smaller
          scale: "var(--dock-max-scale, 1)",
          opacity: l.visible ? 1 : 0,
          pointerEvents: "none",
          // Its scale on the item's own timing, swelling and settling
          // (useDockMagnify), so the two move as one
          transition: l.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${it}ms ease-out)` : `translate ${_t.duration}ms ${_t.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${it}ms ease-out)`,
          [xe]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: w,
      onMouseLeave: v,
      onFocus: E,
      onBlur: R,
      onScrollCapture: v
    } : {}
  };
}, wi = (e, o, r = null) => {
  const n = Or({
    enabled: e,
    isDark: o,
    selector: is,
    // The rail's buttons exactly, so the hover sits on the item
    size: le,
    radius: te,
    pinSelector: `[${Yt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Ei = (e, o) => {
  let r = 0, n = 0, s = e;
  for (; s && s !== o; ) {
    r += s.offsetTop, n += s.offsetLeft;
    const a = s.offsetParent;
    for (let u = s.parentElement; u && u !== o && (r -= u.scrollTop, n -= u.scrollLeft, u !== a); u = u.parentElement)
      ;
    s = a;
  }
  if (s === o && e.offsetWidth)
    return {
      top: Math.round(r),
      left: Math.round(n),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const i = e.getBoundingClientRect(), c = o.getBoundingClientRect();
  return {
    top: Math.round(i.top - c.top),
    left: Math.round(i.left - c.left),
    width: Math.round(i.width),
    height: Math.round(i.height)
  };
}, Ri = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const s = d.useRef(null), [i, c] = d.useState(null), a = d.useRef(null), u = d.useCallback(
    (h) => {
      const m = n.current;
      if (!e || !m)
        return;
      const p = m.querySelector(
        `[${Yt}][data-active="true"]`
      );
      if (!p) {
        c(
          (g) => g != null && g.visible ? { ...g, visible: !1 } : g
        );
        return;
      }
      const x = Ei(p, m);
      c(
        (g) => g && g.visible && g.top === x.top && g.left === x.left && g.width === x.width && g.height === x.height ? g : {
          ...x,
          visible: !0,
          instant: h || !(g != null && g.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    u(!1);
  }), d.useEffect(() => {
    const h = n.current;
    if (!e || !h)
      return;
    let m = 0;
    const p = () => {
      cancelAnimationFrame(m), m = requestAnimationFrame(() => u(!1));
    }, x = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    x == null || x.observe(h);
    const g = typeof MutationObserver > "u" ? null : new MutationObserver(p);
    return g == null || g.observe(h, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(m), x == null || x.disconnect(), g == null || g.disconnect();
    };
  }, [e, n, u]), d.useEffect(() => {
    const h = s.current;
    if (!(i != null && i.visible)) {
      a.current = null;
      return;
    }
    const m = a.current;
    if (a.current = i.top, m === null || i.instant || !Vt(h) || At())
      return;
    const p = Math.min(Math.abs(i.top - m) / 600, 0.08);
    p && h.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - p / 2}, ${1 + p})`,
          offset: 0.35
        },
        { transform: "scale(1, 1)" }
      ],
      { duration: _t.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ t(
    C,
    {
      ref: s,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": i.visible ? "true" : "false",
      sx: {
        ...Ro(r, o),
        borderRadius: `${te}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: i.width,
        height: i.height,
        translate: `${i.left}px ${i.top}px`,
        // Swells with its item (useDockMagnify)
        // Fades in and out at its item's size, never popping from smaller
        scale: "var(--dock-active-scale, 1)",
        opacity: i.visible ? 1 : 0,
        pointerEvents: "none",
        // Its scale on the item's own timing, swelling and settling
        // (useDockMagnify), so the two move as one
        transition: i.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${it}ms ease-out)` : `translate ${_t.duration}ms ${_t.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${it}ms ease-out)`,
        [xe]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, ge = 52, Vo = 36, Ii = 1.8, _i = ge / 2, Yo = "[data-flyout-tile]", sr = 4, Ti = 16, Ai = 104, vt = 24, as = "background 160ms ease, color 160ms ease, transform 120ms ease", ir = 10, cs = 10, un = cs + 2, Ci = 18, Oi = 1.08, $i = 1190, Mi = 1195, fn = 120, pn = be(os), Rt = be(Ar), hn = be(Mo), mn = 8192, Li = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), c = e + r, a = o + n, u = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${mn} V ${mn} H 0 Z M ${e + i} ${o} H ${c - i} ${u} ${c} ${o + i} V ${a - i} ${u} ${c - i} ${a} H ${e + i} ${u} ${e} ${a - i} V ${o + i} ${u} ${e + i} ${o} Z')`;
}, Di = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: s,
  activePath: i,
  focusFirst: c = !1,
  onNavigate: a,
  onClose: u,
  panelProps: l,
  accentColor: h,
  activeBackgroundColor: m,
  activeForegroundColor: p,
  solidSurface: x
}) => {
  const g = je(), w = g.palette.mode === "dark", E = !!(e && r), O = d.useRef(null);
  e && o && (O.current = { group: e, key: o });
  const v = O.current, R = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const M = r.getBoundingClientRect();
      return {
        x: n,
        y: M.top,
        left: n,
        right: n,
        top: M.top,
        bottom: M.bottom,
        width: 0,
        height: M.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), L = d.useRef(R);
  R && (L.current = R), d.useEffect(() => {
    r && vi(r, Oi);
  }, [r]);
  const [y, _] = d.useState(!1);
  d.useEffect(() => {
    if (!E) {
      _(!1);
      return;
    }
    let M = 0;
    const H = requestAnimationFrame(() => {
      M = requestAnimationFrame(() => _(!0));
    });
    return () => {
      cancelAnimationFrame(H), cancelAnimationFrame(M);
    };
  }, [E]);
  const b = d.useMemo(
    () => v ? Sr(v.group.subitems, v.group.icon) : [],
    [v]
  ), I = d.useRef(null), D = ss(I, {
    enabled: E,
    axis: "x",
    itemSelector: Yo,
    transition: as,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: Ii,
    // The neighbours make room as it grows
    carrierSelector: '[role="menuitem"]'
  }), $ = d.useRef(void 0), T = d.useCallback((M) => {
    var q;
    (q = $.current) == null || q.call($), $.current = void 0;
    const H = M == null ? void 0 : M.parentElement;
    if (!M || !H || typeof MutationObserver > "u")
      return;
    const K = () => {
      let G = 0;
      H.querySelectorAll(Yo).forEach((ze) => {
        var Me;
        if (ze.offsetTop > 0)
          return;
        const re = parseFloat(ze.style.scale) || 1, $e = parseFloat(
          ((Me = ze.closest('[role="menuitem"]')) == null ? void 0 : Me.style.translate) ?? ""
        ) || 0;
        ze.offsetLeft + $e - (re - 1) * ge / 2 < M.offsetWidth && (G = Math.max(
          G,
          (re - 1) * ge - un
        ));
      });
      const U = G > 0 ? `0 ${(-G).toFixed(1)}px` : "";
      M.style.translate !== U && (M.style.translate = U);
    }, Z = new MutationObserver(K);
    Z.observe(H, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), $.current = () => Z.disconnect();
  }, []), k = d.useRef([]), [P, B] = d.useState([]);
  d.useLayoutEffect(() => {
    const M = () => {
      const K = b.map((Z, q) => {
        var G, U;
        return [
          ((G = k.current[q]) == null ? void 0 : G.offsetWidth) ?? 0,
          ((U = k.current[q]) == null ? void 0 : U.offsetHeight) ?? 0
        ];
      });
      B(
        (Z) => Z.length === K.length && Z.every(([q, G], U) => q === K[U][0] && G === K[U][1]) ? Z : K
      );
    };
    if (M(), typeof ResizeObserver > "u")
      return;
    const H = new ResizeObserver(M);
    return k.current.slice(0, b.length).forEach((K) => K && H.observe(K)), () => H.disconnect();
  }, [b]);
  const X = Ni(
    P.map(([M]) => M),
    b.length
  ), A = Math.max(Ti, ...P.map(([, M]) => M)), z = d.useRef([]), se = b.findIndex(
    ({ sub: M }) => Ue(M, i)
  ), [Oe, fe] = d.useState(0);
  d.useEffect(() => {
    fe(Math.max(se, 0));
  }, [o]), d.useEffect(() => {
    if (!E || !c)
      return;
    const M = setTimeout(() => {
      var H;
      return (H = z.current[0]) == null ? void 0 : H.focus();
    });
    return () => clearTimeout(M);
  }, [E, c, o]);
  const We = (M) => {
    var K;
    const H = Math.max(0, Math.min(M, b.length - 1));
    fe(H), (K = z.current[H]) == null || K.focus();
  }, ve = (M, H) => {
    var K;
    switch (M.key) {
      case "ArrowRight":
        We(H + 1);
        break;
      case "ArrowLeft":
        H === 0 ? u(!0) : We(H - 1);
        break;
      case " ":
        (K = z.current[H]) == null || K.click();
        break;
      case "Home":
        We(0);
        break;
      case "End":
        We(b.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    M.preventDefault();
  }, Pe = g.palette.text.primary, Be = w ? g.palette.text.primary : h;
  return /* @__PURE__ */ S(Ae, { children: [
    /* @__PURE__ */ t(mr, { in: E, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      C,
      {
        "data-testid": "sidebar-flyout-scrim",
        "data-flyout-scrim": "",
        "aria-hidden": !0,
        onClick: () => u(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: s ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...s ? { clipPath: Li(s) } : {},
          zIndex: $i,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: w ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)"
        }
      }
    ) }),
    /* @__PURE__ */ t(
      gr,
      {
        open: E,
        anchorEl: R ?? L.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Both rows centred on the rail icon, a gap from the rail
          {
            name: "offset",
            options: { offset: [0, ir] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Mi,
          transition: y ? `transform ${Rt.duration}ms ${Rt.easing}` : "none",
          [xe]: { transition: "none" }
        },
        children: ({ TransitionProps: M }) => /* @__PURE__ */ t(
          ki,
          {
            in: (M == null ? void 0 : M.in) ?? E,
            onEnter: M == null ? void 0 : M.onEnter,
            onExited: M == null ? void 0 : M.onExited,
            panelProps: l,
            groupText: v == null ? void 0 : v.group.text,
            children: v ? /* @__PURE__ */ S(
              C,
              {
                ref: I,
                role: "menu",
                "aria-label": v.group.text,
                ...D.containerProps,
                onBlur: (H) => {
                  H.currentTarget.contains(
                    H.relatedTarget
                  ) || D.settle();
                },
                sx: {
                  position: "relative",
                  width: X.width,
                  height: ge + sr + A,
                  // The panel stretches as the dock pushes
                  // the pages along, as the Dock's shelf does
                  mr: "var(--dock-spread, 0px)",
                  transition: `margin-right ${Rt.duration}ms ${Rt.easing}`,
                  [xe]: { transition: "none" }
                },
                children: [
                  /* @__PURE__ */ t(
                    C,
                    {
                      component: "span",
                      ref: T,
                      "aria-hidden": !0,
                      "data-testid": "sidebar-flyout-heading",
                      sx: {
                        // Above the tiles, so they stay centred on the
                        // rail icon; the row's name already labels it.
                        // It rises only when a swelling tile would
                        // reach it (see the effect on `headingRef`)
                        position: "absolute",
                        bottom: "100%",
                        left: 0,
                        mb: `${un}px`,
                        transition: `translate ${it}ms ease-out`,
                        [xe]: {
                          transition: "none"
                        },
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        // The pages' own name colour
                        color: Co(w).color
                      },
                      children: v.group.text
                    }
                  ),
                  b.map(({ sub: H, icon: K }, Z) => /* @__PURE__ */ t(
                    ds,
                    {
                      ref: (q) => {
                        z.current[Z] = q;
                      },
                      nameRef: (q) => {
                        k.current[Z] = q;
                      },
                      tileLeft: X.tiles[Z],
                      nameLeft: X.names[Z],
                      nameRowPx: A,
                      sub: H,
                      icon: K,
                      index: Z,
                      active: Ue(
                        H,
                        i
                      ),
                      tabIndex: Z === Oe ? 0 : -1,
                      onClick: (q) => {
                        Tt(q) && (q.preventDefault(), a(H.path), u());
                      },
                      onKeyDown: (q) => ve(q, Z),
                      onFocus: (q) => {
                        fe(Z);
                        const G = q.currentTarget.querySelector(
                          Yo
                        );
                        G && q.currentTarget.matches(
                          ":focus-visible"
                        ) && D.swellOn(G);
                      },
                      accentColor: h,
                      activeBackgroundColor: m,
                      activeForegroundColor: p,
                      labelColor: Pe,
                      iconColor: Be,
                      surface: x,
                      isDark: w
                    },
                    H.path
                  ))
                ]
              },
              v.key
            ) : null
          }
        )
      }
    )
  ] });
}, ki = ({
  in: e,
  onEnter: o,
  onExited: r,
  panelProps: n,
  groupText: s,
  children: i
}) => {
  const c = d.useRef(null), a = (l) => {
    c.current = l;
    const { ref: h } = n;
    typeof h == "function" ? h(l) : h && (h.current = l);
  }, u = d.useRef(e);
  return u.current = e, d.useLayoutEffect(() => {
    const l = c.current;
    if (bi(l), e) {
      o == null || o(), Vt(l) && !At() && l.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: hn.duration, easing: hn.easing }
      );
      return;
    }
    if (!Vt(l)) {
      r == null || r();
      return;
    }
    let h = !1;
    const m = () => {
      !h && !u.current && (h = !0, r == null || r());
    }, p = setTimeout(m, fn + 100);
    return l.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: fn,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(m, m), () => clearTimeout(p);
  }, [e]), /* @__PURE__ */ t(
    C,
    {
      ref: a,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": s,
      sx: {
        position: "relative",
        // No surface of its own: the scrim's gradient sits behind it.
        // A tile the dock grows pops out past it.
        p: `${cs}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -ir - 2,
          width: ir + 2
        }
      },
      children: i
    }
  );
}, ls = (e) => e % 2 === 1, Ni = (e, o) => {
  const r = [], n = [];
  let s = -vt, i = -vt, c = -vt;
  for (let a = 0; a < o; a += 1) {
    const u = e[a] || ge, l = !ls(a), h = l ? ge : u, m = l ? u : ge, p = Math.max(
      s + vt + h / 2,
      i + vt + m / 2,
      c + vt + ge / 2
    );
    s = p + h / 2, i = p + m / 2, c = p + ge / 2, r.push(Math.round(p - ge / 2)), n.push(Math.round(p - u / 2));
  }
  return { tiles: r, names: n, width: Math.round(Math.max(s, i, 0)) };
}, ds = d.forwardRef(
  ({
    nameRef: e,
    tileLeft: o,
    nameLeft: r,
    nameRowPx: n,
    sub: s,
    icon: i,
    index: c,
    active: a,
    tabIndex: u,
    onClick: l,
    onKeyDown: h,
    onFocus: m,
    accentColor: p,
    activeBackgroundColor: x,
    activeForegroundColor: g,
    labelColor: w,
    iconColor: E,
    surface: O,
    isDark: v
  }, R) => {
    const L = ls(c), y = Co(v, O), _ = {
      animation: `${di} ${pn.duration}ms ${pn.easing} both`,
      animationDelay: `${c * Ci}ms`,
      [xe]: { animation: "none" }
    }, b = {
      background: x ?? p,
      color: g,
      "& .MuiSvgIcon-root": { color: g }
    }, I = {
      background: `color-mix(in srgb, ${p} ${v ? 20 : 12}%, ${O})`
    }, D = v ? y.color : p, $ = {
      "& [data-flyout-tile]": a ? {} : I,
      "& [data-flyout-name]": { color: D, fontWeight: 600 }
    }, T = {
      ...y,
      border: "none",
      // Lifted a little more than a resting label: they float over
      // the page
      boxShadow: v ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)"
    };
    return /* @__PURE__ */ S(
      Ke,
      {
        ref: R,
        component: "a",
        href: s.path,
        role: "menuitem",
        tabIndex: u,
        "aria-current": a ? "page" : void 0,
        "data-testid": `sidebar-subitem-${s.text}`,
        "data-active": a ? "true" : "false",
        onClick: l,
        onKeyDown: h,
        onFocus: m,
        disableRipple: !0,
        sx: {
          position: "absolute",
          inset: 0,
          display: "block",
          pointerEvents: "none",
          "& [data-flyout-tile], & [data-flyout-slot], & [data-flyout-bridge]": {
            position: "absolute",
            pointerEvents: "auto"
          },
          color: w,
          textDecoration: "none",
          "&:hover": $,
          "&.Mui-focusVisible": {
            ...$,
            "& [data-flyout-tile]": {
              ...a ? {} : I,
              outline: "2px solid",
              outlineColor: p,
              outlineOffset: 2
            }
          },
          "&:active [data-flyout-tile]": { transform: "scale(0.94)" },
          [xe]: {
            "&:active [data-flyout-tile]": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(
            C,
            {
              "data-flyout-bridge": "",
              "aria-hidden": !0,
              sx: {
                left: o,
                top: 0,
                width: ge,
                height: "100%"
              }
            }
          ),
          /* @__PURE__ */ t(
            C,
            {
              "data-flyout-tile": "",
              sx: {
                ...T,
                left: o,
                top: L ? n + sr : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: ge,
                height: ge,
                p: 0,
                borderRadius: `${_i}px`,
                // Grows out of the row, away from its name
                transformOrigin: L ? "center top" : "center bottom",
                transition: `scale ${Rt.duration}ms ${Rt.easing}, ${as}`,
                "& .MuiSvgIcon-root": {
                  fontSize: Vo,
                  color: E,
                  transition: "color 160ms ease"
                },
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                '& [role="img"], & [role="img"] > img': {
                  width: Vo,
                  height: Vo
                },
                ...a ? b : {},
                ..._
              },
              children: i
            }
          ),
          /* @__PURE__ */ t(
            C,
            {
              "data-flyout-slot": "",
              sx: {
                left: r,
                top: L ? 0 : ge + sr,
                height: n,
                display: "flex",
                // Held against its own tile, not floating mid-row
                alignItems: L ? "flex-end" : "flex-start"
              },
              children: /* @__PURE__ */ t(
                C,
                {
                  component: "span",
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": s.text,
                  sx: {
                    // No card of its own: text on the panel
                    color: y.color,
                    px: 1,
                    py: 0,
                    fontSize: "0.75rem",
                    lineHeight: "16px",
                    // A long name wraps, split evenly, so it stays as
                    // compact as its tile; never cut short
                    maxWidth: Ai,
                    textAlign: "center",
                    textWrap: "balance",
                    display: "block",
                    fontWeight: a ? 600 : 500,
                    // Room for the bold it turns on hover, held from
                    // the start, so the measured width (and with it
                    // every column after) never moves
                    "&::after": {
                      content: "attr(data-text)",
                      display: "block",
                      fontWeight: 600,
                      height: 0,
                      overflow: "hidden",
                      visibility: "hidden"
                    },
                    ...a ? { color: D } : {},
                    transition: "color 160ms ease",
                    ..._
                  },
                  children: s.text
                }
              )
            }
          )
        ]
      }
    );
  }
);
ds.displayName = "FlyoutTile";
const Fi = 50, Wi = 250, Pi = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const s = d.useRef(/* @__PURE__ */ new Map()), i = d.useRef(null), c = d.useRef(void 0), a = d.useRef(void 0), u = () => {
    clearTimeout(c.current), c.current = void 0;
  }, l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, h = (O, v, R = !1) => {
    u(), l(), r({ key: O, pinned: v, focusFirst: R });
  }, m = d.useCallback((O = !1) => {
    var R, L;
    u(), l();
    const v = (R = n.current) == null ? void 0 : R.key;
    r(null), O && v && ((L = s.current.get(v)) == null || L.focus());
  }, []), p = () => {
    u(), !(!n.current || n.current.pinned) && (l(), a.current = setTimeout(() => m(), Wi));
  };
  d.useEffect(() => {
    e || m();
  }, [e, m]), d.useEffect(
    () => () => {
      u(), l();
    },
    []
  );
  const x = o !== null;
  return d.useEffect(() => {
    if (!x)
      return;
    const O = (L) => {
      var _;
      const y = L;
      return y ? (_ = i.current) != null && _.contains(y) ? !0 : [...s.current.values()].some((b) => b.contains(y)) : !1;
    }, v = (L) => {
      O(L.target) || m();
    }, R = (L) => {
      var y;
      L.key === "Escape" && m(
        !!((y = i.current) != null && y.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", R), () => {
      document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", R);
    };
  }, [x, m]), {
    state: o,
    close: m,
    triggerProps: (O) => ({
      ref: (v) => {
        v ? s.current.set(O, v) : s.current.delete(O);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        l();
        const v = n.current;
        if (v) {
          v.key !== O && h(O, v.pinned);
          return;
        }
        u(), c.current = setTimeout(
          () => h(O, !1),
          Fi
        );
      },
      onMouseLeave: p,
      onClick: (v) => {
        var R;
        if (v.detail === 0) {
          h(O, !0, !0);
          return;
        }
        ((R = n.current) == null ? void 0 : R.key) !== O && h(O, !1);
      },
      onKeyDown: (v) => {
        v.key === "ArrowRight" && (v.preventDefault(), h(O, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: l,
      onMouseLeave: p
    },
    onRailLeafEnter: () => {
      u(), n.current && !n.current.pinned && m();
    },
    getTrigger: (O) => s.current.get(O) ?? null
  };
}, Bi = 264, zi = 72, gn = 64, fo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Gi = 16, Hi = 14, Ui = 4, Xi = 2.5, xn = "0.7rem", bn = 22, po = be(Tr), ft = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
  const i = d.useRef(null), [c, a] = d.useState(!1), u = d.useCallback(() => {
    const l = i.current;
    l && a(l.scrollWidth > l.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    u();
  }, [u, e]), d.useEffect(() => {
    const l = i.current;
    if (!l)
      return;
    const h = new ResizeObserver(() => u());
    return h.observe(l), () => h.disconnect();
  }, [u]), /* @__PURE__ */ t(
    Re,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !c,
      disableFocusListener: !c,
      disableTouchListener: !c,
      children: /* @__PURE__ */ t(
        ne,
        {
          ref: i,
          component: "span",
          variant: o,
          sx: {
            display: "block",
            width: r ? "100%" : void 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "inherit",
            ...n ? { fontSize: n } : {},
            ...s ? { fontWeight: s } : {},
            ...r ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: e
        }
      )
    }
  );
}, Ki = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, ji = 4, Vi = ({
  open: e,
  size: o = Gi
}) => e ? /* @__PURE__ */ t(zs, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Bs, { sx: { fontSize: o, opacity: 0.75 } }), vn = ({ open: e }) => /* @__PURE__ */ t(
  Gs,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), ho = 600, pt = `${Oo}px`, Yi = 1.4, vo = (Xt - le) / 2, qi = (e) => {
  const o = Math.max(0, e - vo);
  return {
    pl: `${Math.max(0, vo - o)}px`,
    pr: `${Math.max(0, vo - e)}px`
  };
};
function Zi(e, o) {
  const [r, n] = d.useState(0);
  return d.useLayoutEffect(() => {
    const s = e.current;
    if (!o || !s) {
      n(0);
      return;
    }
    const i = () => {
      const a = getComputedStyle(s), u = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth);
      n(Math.max(0, s.offsetWidth - s.clientWidth - u));
    };
    if (i(), typeof ResizeObserver > "u")
      return;
    const c = new ResizeObserver(i);
    return c.observe(s), s.firstElementChild && c.observe(s.firstElementChild), () => c.disconnect();
  }, [e, o]), r;
}
const mo = 8;
function Ji(e, o, r) {
  d.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const s = (u) => {
      const l = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((x) => x.offsetHeight > 0).pop();
      if (!l)
        return;
      const h = n.getBoundingClientRect(), m = l.getBoundingClientRect();
      let p = 0;
      m.top < h.top + mo ? p = m.top - h.top - mo : m.bottom > h.bottom - mo && (p = m.bottom - h.bottom + mo), p !== 0 && n.scrollBy({ top: p, behavior: u });
    }, i = requestAnimationFrame(() => s("smooth")), c = window.setTimeout(() => s("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const ar = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: s,
  logo: i,
  title: c,
  onBrandClick: a,
  brandMenuOpen: u,
  showHeaderBar: l = !1,
  headerBackgroundColor: h,
  headerForegroundColor: m,
  brandColor: p,
  activeAccentColor: x = "#01584f",
  activeBackgroundColor: g,
  groupArrowColor: w,
  groupAccentColor: E,
  activeForegroundColor: O,
  foregroundColor: v,
  surfaceBackgroundColor: R,
  flyoutSurfaceColor: L,
  collapsed: y = !1,
  expandedWidth: _ = Bi,
  collapsedWidth: b = zi,
  showLabels: I = !1,
  topInsetPx: D = 0,
  topContent: $,
  footer: T,
  submenuMode: k = "inline"
}) => {
  var ie;
  const P = je(), B = P.palette.mode === "dark", X = d.useContext(To), A = k === "flyout" && y && !I, z = Pi(A), se = d.useRef(null), Oe = d.useRef(null), fe = d.useRef(null);
  Ji(fe, r, y);
  const We = Zi(fe, A), ve = wi(A, B, ((ie = z.state) == null ? void 0 : ie.key) ?? null), Pe = ss(se, {
    enabled: A,
    axis: "y",
    itemSelector: is,
    maxScale: Yi,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: le + Oo,
    transition: `transform ${po.duration}ms ${po.easing}, background-color 160ms ease`
  }), Be = {
    ...ve.containerProps,
    ...Pe.containerProps,
    ...A ? {
      onScrollCapture: () => {
        var f, N;
        (N = (f = ve.containerProps).onScrollCapture) == null || N.call(f), Pe.settle();
      }
    } : {}
  }, M = g ?? x, H = Ri({
    enabled: A,
    isDark: B,
    color: M,
    containerRef: Oe
  }), { close: K } = z;
  d.useEffect(() => {
    K();
  }, [r, K]);
  const [Z, q] = d.useState(
    {}
  ), G = O ?? rr(M), U = {
    bgcolor: M,
    color: G,
    "& .MuiListItemIcon-root": { color: G }
  }, ze = {
    bgcolor: M,
    color: G,
    borderRadius: "8px"
  }, re = E ?? Kt(x), $e = R ?? (B ? P.palette.background.paper : "#ffffff"), pe = v ?? (B ? "text.primary" : x), Me = h ?? $e, Le = m ?? (h ? rr(Me) : v ?? (B ? P.palette.text.primary : x)), et = Kt(Le), he = (f) => {
    n == null || n(f);
  }, Ie = (f) => f ? {
    component: "a",
    href: f,
    onClick: (N) => {
      Tt(N) && (N.preventDefault(), he(f));
    }
  } : {}, ue = (f, N) => {
    q((j) => ({ ...j, [f]: !N }));
  }, Ve = (f, N) => Z[N] ?? nt(f, r), tt = (f, N, j) => ({
    color: f ? G : pe,
    bgcolor: f ? M : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? G : pe,
      minWidth: j
    },
    "&:hover": f || I ? U : { bgcolor: N }
  }), at = {
    "&.Mui-selected": {
      bgcolor: M
    },
    "&.Mui-selected:hover": U
  }, Ot = (f) => {
    const N = Ue(f, r), j = /* @__PURE__ */ S(
      uo,
      {
        disabled: !f.path,
        selected: N,
        ...Ie(f.path),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": N ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...f.action && { pr: 6 },
          ...f.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...tt(
            N,
            re,
            f.subtitle ? 48 : 36
          ),
          ...at
        },
        children: [
          /* @__PURE__ */ t(Ee, { children: f.icon }),
          /* @__PURE__ */ t(
            Xe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                ft,
                {
                  text: f.text,
                  fontWeight: ho
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ t(
                C,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    ft,
                    {
                      text: f.subtitle,
                      fontSize: "0.8125rem"
                    }
                  )
                }
              ) : void 0,
              sx: f.subtitle ? { my: 0 } : void 0
            }
          )
        ]
      },
      f.text
    );
    if (!f.action)
      return j;
    const { action: W } = f;
    return /* @__PURE__ */ S(C, { sx: { position: "relative" }, children: [
      j,
      /* @__PURE__ */ t(Re, { title: W.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        we,
        {
          "aria-label": W.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            W.onClick(), s == null || s();
          },
          size: "small",
          sx: {
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            width: 30,
            height: 30,
            borderRadius: "6px",
            border: "1px solid",
            borderColor: N ? "rgba(255, 255, 255, 0.35)" : re,
            color: N ? G : pe,
            "&:hover": {
              bgcolor: N ? "rgba(255, 255, 255, 0.15)" : re
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: N ? G : pe,
              outlineOffset: 1
            }
          },
          children: W.icon
        }
      ) })
    ] }, f.text);
  }, $t = (f) => {
    const N = nt(f, r), j = Ue(f, r), W = Et("", f), V = Ve(f, W);
    return /* @__PURE__ */ S(
      C,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: N ? re : "transparent"
        },
        children: [
          /* @__PURE__ */ S(
            uo,
            {
              onClick: () => ue(W, V),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": j ? "true" : "false",
              "aria-expanded": V,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...tt(j, re, 36)
              },
              children: [
                /* @__PURE__ */ t(Ee, { children: f.icon }),
                /* @__PURE__ */ t(
                  Xe,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      ft,
                      {
                        text: f.text,
                        fontWeight: ho
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(vn, { open: V })
              ]
            }
          ),
          /* @__PURE__ */ t(on, { in: V, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            C,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (J) => Qt(J, W, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, Qt = (f, N, j) => {
    const W = Et(N, f), V = Ui + (j - 1) * Xi;
    if (It(f)) {
      const me = nt(f, r), ae = Ue(f, r), ce = Ve(f, W);
      return /* @__PURE__ */ S(C, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ S(
          uo,
          {
            onClick: () => ue(W, ce),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": me ? "true" : "false",
            "aria-expanded": ce,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: V,
              ...tt(ae, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(Ee, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                Xe,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    ft,
                    {
                      text: f.text,
                      fontWeight: ho
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(vn, { open: ce })
            ]
          }
        ),
        /* @__PURE__ */ t(on, { in: ce, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(C, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (Do) => Qt(Do, W, j + 1)
        ) }) })
      ] }, W);
    }
    const J = Ue(f, r);
    return /* @__PURE__ */ S(
      uo,
      {
        selected: J,
        disabled: !f.path,
        ...Ie(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": J ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: V,
          ...tt(J, "action.hover", 32),
          ...at
        },
        children: [
          f.icon ? /* @__PURE__ */ t(Ee, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            Xe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                ft,
                {
                  text: f.text,
                  fontWeight: ho
                }
              )
            }
          )
        ]
      },
      W
    );
  }, eo = (f, N, j, W, V, J) => {
    const me = !V, ae = /* @__PURE__ */ S(
      we,
      {
        "aria-label": N,
        disabled: me,
        ...Ie(V),
        onMouseEnter: A ? z.onRailLeafEnter : void 0,
        ...A ? { [Yt]: "" } : {},
        "data-testid": (J == null ? void 0 : J.testId) ?? `sidebar-item-${N}`,
        "data-active": W ? "true" : "false",
        sx: I ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: W ? G : pe,
          bgcolor: W ? M : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: bn
          },
          "&:hover": ze,
          ...fo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: A ? le : 44,
          height: A ? le : 44,
          color: W ? G : pe,
          bgcolor: W ? M : "transparent",
          borderRadius: W ? "8px" : "50%",
          "&:hover": {
            bgcolor: W ? M : J != null && J.insideGroup ? "action.hover" : re,
            borderRadius: "8px"
          },
          ...fo,
          ...A ? oo(W) : {}
        },
        children: [
          j,
          I ? /* @__PURE__ */ t(
            ft,
            {
              text: N,
              variant: "caption",
              center: !0,
              fontSize: xn
            }
          ) : null
        ]
      }
    );
    return I ? me ? /* @__PURE__ */ t("span", { children: ae }, f) : /* @__PURE__ */ t(d.Fragment, { children: ae }, f) : /* @__PURE__ */ t(
      Re,
      {
        title: N,
        placement: "right",
        arrow: !A,
        ...A ? ct : {},
        children: me ? /* @__PURE__ */ t("span", { children: ae }) : ae
      },
      f
    );
  }, to = {
    position: "relative",
    '& :is(button, a, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer.
    // Not the flyout's backdrop: it is fixed over the whole window, and
    // made relative it collapses to nothing at the rail's foot.
    "& > :not([data-glass-lens], [data-active-glass], [data-flyout-scrim])": {
      position: "relative"
    }
  }, oo = (f) => ({
    borderRadius: `${te}px`,
    "& .MuiSvgIcon-root": { fontSize: jt },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${po.duration}ms ${po.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), ct = {
    slotProps: {
      tooltip: { sx: Co(B, X) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, Mt = (f) => {
    var V;
    const N = nt(f, r), j = Et("", f), W = ((V = z.state) == null ? void 0 : V.key) === j;
    return /* @__PURE__ */ t(
      C,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          we,
          {
            ...z.triggerProps(j),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": W,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": N ? "true" : "false",
            "data-open": W ? "true" : "false",
            [Yt]: "",
            sx: {
              position: "relative",
              width: le,
              height: le,
              color: N ? G : pe,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: N ? M : "transparent",
              ...oo(N),
              // The icon stays centred, in line with every other
              // icon down the rail; the arrow sits in the room
              // beside it
              "&::after": {
                content: '""',
                position: "absolute",
                // Just past the button, in the rail's side gutter,
                // clear of the icon
                right: -ji,
                top: "50%",
                transform: "translateY(-50%)",
                width: 5,
                height: 8,
                bgcolor: w ?? "currentColor",
                mask: `${Ki} center / contain no-repeat`,
                opacity: w ? 1 : 0.55,
                transition: "opacity 160ms ease"
              },
              // Pointed at, or its pages already out: the arrow has
              // said its piece
              '&:hover::after, &[data-open="true"]::after': {
                opacity: 0
              },
              ...fo
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, ro = (f) => {
    const N = nt(f, r), j = Ue(f, r), W = Et("", f), V = Ve(f, W), J = /* @__PURE__ */ S(
      we,
      {
        "aria-label": f.text,
        "aria-expanded": V,
        onClick: () => ue(W, V),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": j ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: I ? 0.25 : 0,
          width: I ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...I ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: j ? G : pe,
          bgcolor: j ? M : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": I ? { bgcolor: M, color: G } : {
            bgcolor: j ? M : "transparent"
          },
          ...fo
        },
        children: [
          I ? /* @__PURE__ */ t(
            C,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: bn
                }
              },
              children: f.icon
            }
          ) : f.icon,
          I ? /* @__PURE__ */ t(
            ft,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: xn
            }
          ) : null,
          /* @__PURE__ */ t(Vi, { open: V, size: Hi })
        ]
      }
    ), me = I ? J : /* @__PURE__ */ t(Re, { title: f.text, placement: "right", arrow: !0, children: J });
    return /* @__PURE__ */ S(
      C,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          width: "100%",
          borderRadius: "10px",
          py: 0.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          // The active group's container stays tinted. collapsible tints
          // the whole group on hover (original); rail-labeled leaves hover
          // highlighting to the individual items.
          bgcolor: N ? re : "transparent",
          ...I ? {} : { "&:hover": { bgcolor: re } }
        },
        children: [
          me,
          V ? Sr(f.subitems, f.icon).map(
            ({ sub: ae, icon: ce }) => eo(
              ae.path,
              ae.text,
              ce,
              Ue(ae, r),
              ae.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${ae.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, lt = (f) => /* @__PURE__ */ t(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: eo(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        Ue(f, r),
        f.path,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), mt = (f) => It(f) ? A ? Mt(f) : y ? ro(f) : $t(f) : y ? lt(f) : Ot(f), Lt = (f) => /* @__PURE__ */ t(
    Ce,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: y ? "center" : "stretch"
      },
      children: f.map(
        (N, j) => N.dividerAfter && j < f.length - 1 ? /* @__PURE__ */ S(d.Fragment, { children: [
          mt(N),
          /* @__PURE__ */ t(
            Qe,
            {
              "data-testid": `sidebar-divider-${N.text}`,
              sx: {
                alignSelf: "stretch",
                my: A ? pt : 1,
                borderColor: "divider"
              }
            }
          )
        ] }, N.text) : mt(N)
      )
    }
  ), Dt = y ? b : _, Lo = () => {
    var me, ae;
    const { state: f } = z, N = f ? [...e, ...o].find(
      (ce) => It(ce) && Et("", ce) === f.key
    ) ?? null : null, j = N ? ((me = se.current) == null ? void 0 : me.getBoundingClientRect().right) ?? b : b, W = N ? ((ae = se.current) == null ? void 0 : ae.closest("[data-rail-surface]")) ?? se.current : null, V = W == null ? void 0 : W.getBoundingClientRect(), J = W && V ? {
      left: V.left,
      top: V.top,
      width: V.width,
      height: V.height,
      radius: parseFloat(
        getComputedStyle(W).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Di,
      {
        group: N,
        groupKey: N ? f.key : null,
        anchor: N ? z.getTrigger(f.key) : null,
        railEdge: j,
        railShape: J,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: he,
        onClose: z.close,
        panelProps: z.flyoutProps,
        accentColor: x,
        activeBackgroundColor: g,
        activeForegroundColor: G,
        solidSurface: L ?? $e
      }
    );
  }, gt = l ? /* @__PURE__ */ t(
    C,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...A ? { pt: "12px", pb: "12px" } : {
          height: gn,
          minHeight: gn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: Me
      },
      children: i || c ? /* @__PURE__ */ t(
        Eo,
        {
          logo: i,
          title: y ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: p ?? Le,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, no = !l && i ? /* @__PURE__ */ t(
    C,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: A ? pt : 1
      },
      children: /* @__PURE__ */ t(
        Eo,
        {
          logo: i,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: p ?? Le,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, xt = I ? 0.5 : A ? 0.75 : y ? 1 : 1.5;
  return /* @__PURE__ */ t(Ct.Provider, { value: A, children: /* @__PURE__ */ S(
    C,
    {
      ref: se,
      ...Be,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": y ? "true" : "false",
      "data-labeled": I ? "true" : "false",
      sx: {
        width: Dt,
        minWidth: Dt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: $e,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        // Snaps to its width; an owner that animates the switch (the
        // wrapper's hover panel) clips it from a container, so the
        // rows never reflow mid-animation.
        overflow: "hidden",
        ...A ? to : {}
      },
      children: [
        ve.lens,
        gt ?? no,
        $ ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: xt,
              pt: A ? 0 : 1,
              pb: A ? 0 : 1
            },
            children: $
          }
        ) : null,
        /* @__PURE__ */ t(
          C,
          {
            ref: fe,
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              // Scrollbar shows only while the pointer is inside (or a
              // keyboard user tabs in). Not :focus-within, since a
              // clicked link keeps focus and would pin it on.
              ...A ? {
                // Chrome lets `scrollbar-width`/`-color` override
                // the ::-webkit-scrollbar rules, and its `thin` is
                // 11px — too wide for the 52px rail. So only
                // browsers without those rules (Firefox) get them;
                // Chrome and Safari draw the 6px bar below.
                "@supports not selector(::-webkit-scrollbar)": {
                  scrollbarWidth: "thin",
                  scrollbarColor: "transparent transparent",
                  "&:hover, &:has(:focus-visible)": {
                    scrollbarColor: (f) => `${f.palette.divider} transparent`
                  }
                }
              } : {
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
                "&:hover, &:has(:focus-visible)": {
                  scrollbarColor: (f) => `${f.palette.divider} transparent`
                }
              },
              // Safari only honours the thumb rule once the bar
              // itself is styled.
              "&::-webkit-scrollbar": {
                width: A ? vo : 8
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: 4
              },
              "&:hover::-webkit-scrollbar-thumb, &:has(:focus-visible)::-webkit-scrollbar-thumb": {
                backgroundColor: (f) => f.palette.divider
              },
              // On the floating rail the bar (when it takes space at
              // all) stands in for the right padding, and the left
              // padding follows it, so the 44px column keeps equal
              // gaps in the capsule whether the bar is classic,
              // overlay or absent. (The inline collapsed rail keeps
              // its padding: its open groups tint the full row width.)
              ...A ? qi(We) : { px: xt },
              pt: D && !l ? `${D}px` : A ? pt : 1,
              pb: A ? pt : 2
            },
            children: /* @__PURE__ */ S(
              C,
              {
                ref: Oe,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  H.glass,
                  Lt(e),
                  o.length > 0 ? /* @__PURE__ */ S(
                    C,
                    {
                      sx: { mt: "auto", pt: A ? pt : 2 },
                      children: [
                        T ? null : /* @__PURE__ */ t(
                          Qe,
                          {
                            sx: {
                              mb: A ? pt : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        Lt(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        T ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: xt,
              pb: 1.5,
              ...A ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: jt
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              C,
              {
                sx: {
                  borderTop: `1px solid ${et}`,
                  pt: A ? pt : 1.5
                },
                children: T
              }
            )
          }
        ) : null,
        A ? Lo() : null
      ]
    }
  ) });
}, cr = "var(--lumora-content-padding, 0px)", yn = `calc(${cr} * -1)`, il = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: c
}) => /* @__PURE__ */ t(
  C,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: yn,
        mt: o ? yn : 0,
        // Space below it, like any other block on the page
        mb: cr,
        px: i ? cr : 0,
        bgcolor: n,
        ...s && {
          borderBottom: "1px solid",
          borderColor: "divider"
        },
        ...r && {
          position: "sticky",
          // Under the mobile top bar on phones, the viewport top on desktop
          top: "var(--lumora-sticky-top, 0px)",
          // Above page content, below the sidebar drawer and menus
          zIndex: 3
        }
      },
      ...Array.isArray(c) ? c : [c]
    ],
    children: e
  }
), Qi = ({ keys: e }) => /* @__PURE__ */ t(
  C,
  {
    component: "kbd",
    "aria-hidden": "true",
    sx: {
      display: "inline-flex",
      alignItems: "center",
      gap: 0.5,
      px: 0.75,
      height: 20,
      flexShrink: 0,
      border: "1px solid",
      borderColor: "divider",
      borderRadius: "4px",
      bgcolor: "background.paper",
      color: "text.secondary",
      fontFamily: "inherit",
      fontSize: 11,
      lineHeight: 1
    },
    children: e.map((o) => /* @__PURE__ */ t("span", { children: o }, o))
  }
), _e = {
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
}, Te = {
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
}, yt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, St = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, wt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, us = Io(), Ne = us.typography.pxToRem, $r = (e) => {
  const o = e === "dark", r = [...us.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? _e[300] : _e[200],
        main: _e[400],
        dark: _e[700],
        contrastText: _e[50]
      },
      info: o ? {
        light: _e[500],
        main: _e[700],
        dark: _e[900],
        contrastText: _e[300]
      } : {
        light: _e[100],
        main: _e[300],
        dark: _e[600],
        contrastText: Te[50]
      },
      warning: o ? { light: St[400], main: St[500], dark: St[700] } : { light: St[300], main: St[400], dark: St[800] },
      error: o ? { light: wt[400], main: wt[500], dark: wt[700] } : { light: wt[300], main: wt[400], dark: wt[800] },
      success: o ? { light: yt[400], main: yt[500], dark: yt[700] } : { light: yt[300], main: yt[400], dark: yt[800] },
      grey: Te,
      divider: o ? Fe(Te[700], 0.6) : Fe(Te[300], 0.4),
      background: o ? { default: Te[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Te[400] } : { primary: Te[800], secondary: Te[600] },
      action: o ? {
        hover: Fe(Te[600], 0.2),
        selected: Fe(Te[600], 0.3)
      } : {
        hover: Fe(Te[200], 0.2),
        selected: Fe(Te[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Ne(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Ne(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Ne(30), lineHeight: 1.2 },
      h4: { fontSize: Ne(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Ne(20), fontWeight: 600 },
      h6: { fontSize: Ne(18), fontWeight: 600 },
      subtitle1: { fontSize: Ne(18) },
      subtitle2: { fontSize: Ne(14), fontWeight: 500 },
      body1: { fontSize: Ne(14) },
      body2: { fontSize: Ne(14), fontWeight: 400 },
      caption: { fontSize: Ne(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, ea = 6, ta = 8, Sn = (e, o) => typeof e == "object" ? e[o] : e, qo = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: c = !0,
  contentPadding: a = Zn,
  sidebarBackgroundColor: u,
  contentBackgroundColor: l,
  content: h
}) => {
  const m = Bn(r.breakpoints.down("md")), p = e === "dark", x = Qn({
    showSidebar: c,
    isMobile: m,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), g = $o(s, n) ? {
    gutterPx: ht,
    radiusPx: qn
  } : void 0, w = bo, E = es(
    Sn(u, e),
    p
  ), O = ts(
    Sn(l, e),
    p
  ), v = Jn(a, r), R = g ? /* @__PURE__ */ S(Gt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t(ke, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Gt,
      {
        alignItems: "center",
        spacing: `${Oo}px`,
        sx: { mt: 2 },
        children: Array.from({ length: ta }, (L, y) => /* @__PURE__ */ t(
          Y,
          {
            sx: {
              width: le,
              height: le,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ t(
              ke,
              {
                variant: "rounded",
                width: jt,
                height: jt
              }
            )
          },
          y
        ))
      }
    )
  ] }) : /* @__PURE__ */ S(Gt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(ke, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(Y, { sx: { height: 8 } }),
    Array.from({ length: ea }, (L, y) => /* @__PURE__ */ t(ke, { variant: "rounded", width: 28, height: 28 }, y))
  ] });
  return /* @__PURE__ */ t(wo, { theme: o, children: /* @__PURE__ */ S(
    Y,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: O
      },
      children: [
        m && /* @__PURE__ */ S(
          Y,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: w,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: E,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(ke, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(ke, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(Y, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(ke, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !m && x > 0 && /* @__PURE__ */ t(
          Y,
          {
            sx: {
              position: "relative",
              width: x,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              Y,
              {
                sx: g ? {
                  position: "fixed",
                  top: g.gutterPx,
                  bottom: g.gutterPx,
                  left: g.gutterPx,
                  width: x - 2 * g.gutterPx,
                  borderRadius: `${g.radiusPx}px`,
                  bgcolor: E
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: x,
                  bgcolor: E
                },
                children: R
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Y,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              // The variables the wrapper's <main> sets, so a host's `content`
              // that sizes itself from them measures as it will in the app
              "--lumora-content-padding": v,
              "--lumora-sticky-top": m ? `${w}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: m ? `${w}px` : 0
            },
            children: h ?? /* @__PURE__ */ S(Ae, { children: [
              /* @__PURE__ */ t(ke, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(
                ke,
                {
                  variant: "text",
                  width: 320,
                  sx: { mb: 3 }
                }
              ),
              /* @__PURE__ */ t(Gt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from(
                { length: m ? 2 : 4 },
                (L, y) => /* @__PURE__ */ t(
                  ke,
                  {
                    variant: "rounded",
                    height: 96,
                    sx: { flex: 1 }
                  },
                  y
                )
              ) }),
              /* @__PURE__ */ t(ke, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, lr = Io($r("light")), yo = Io($r("dark")), oa = (e) => e === "dark" ? yo : lr, ra = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = Pn();
  if (!o) {
    const i = oa(e);
    return /* @__PURE__ */ S(wo, { theme: i, children: [
      /* @__PURE__ */ t(tr, {}),
      /* @__PURE__ */ t(
        qo,
        {
          themeMode: e,
          muiTheme: i,
          hostTheme: n,
          ...r
        }
      )
    ] });
  }
  const s = `${o} &`;
  return /* @__PURE__ */ S(wo, { theme: lr, children: [
    /* @__PURE__ */ t(tr, {}),
    /* @__PURE__ */ t(
      Us,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: yo.palette.background.default,
            color: yo.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(Y, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ t(
      qo,
      {
        themeMode: "light",
        muiTheme: lr,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(Y, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ t(
      qo,
      {
        themeMode: "dark",
        muiTheme: yo,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class Q extends Error {
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const ee = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, de = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Je = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, na = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Je.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Je.REFRESH_TOKEN
      ), r = localStorage.getItem(Je.USER);
      e && !localStorage.getItem(de.ACCESS_TOKEN) && localStorage.setItem(de.ACCESS_TOKEN, e), o && !localStorage.getItem(de.REFRESH_TOKEN) && localStorage.setItem(
        de.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(de.USER) && localStorage.setItem(de.USER, r), (e || o || r) && (localStorage.removeItem(Je.ACCESS_TOKEN), localStorage.removeItem(Je.REFRESH_TOKEN), localStorage.removeItem(Je.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Zo = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Q(
        "localStorage is not available",
        ee.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Q(
      "Storage quota exceeded. Please clear browser data.",
      ee.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Q(
      "Access to localStorage is denied. Please check browser settings.",
      ee.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Q(
      "Failed to access storage",
      ee.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Jo = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Q(
        "localStorage is not available",
        ee.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Q(
      "Storage quota exceeded. Please clear browser data.",
      ee.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Q(
      "Access to localStorage is denied. Please check browser settings.",
      ee.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Q(
      "Failed to write to storage",
      ee.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, fs = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, qt = () => {
  try {
    na();
    const e = Zo(de.ACCESS_TOKEN), o = Zo(de.REFRESH_TOKEN), r = Zo(de.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), fs(de.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Q ? e : new Q(
      "Failed to retrieve authentication tokens",
      ee.UNKNOWN_ERROR,
      e
    );
  }
}, sa = () => {
  try {
    const { accessToken: e, refreshToken: o } = qt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Q(
        "No authentication tokens found",
        ee.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof Q ? e : new Q(
        "Authentication check failed",
        ee.UNKNOWN_ERROR,
        e
      )
    };
  }
}, ps = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Q(
        "At least one token must be provided",
        ee.TOKEN_INVALID
      );
    return e && Jo(de.ACCESS_TOKEN, e), o && Jo(de.REFRESH_TOKEN, o), r && Jo(de.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Q ? n : new Q(
        "Failed to store tokens",
        ee.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Zt = () => {
  try {
    return [
      de.ACCESS_TOKEN,
      de.REFRESH_TOKEN,
      de.USER,
      // Also clear legacy keys for complete cleanup
      Je.ACCESS_TOKEN,
      Je.REFRESH_TOKEN,
      Je.USER
    ].map((n) => fs(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Q ? e : new Q(
        "Failed to clear tokens",
        ee.LOGOUT_FAILED,
        e
      )
    };
  }
}, ia = () => {
  try {
    const { user: e } = qt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Q ? e : new Q(
        "Failed to retrieve user data",
        ee.UNKNOWN_ERROR,
        e
      )
    };
  }
}, al = (e) => {
  if (!(e instanceof Q))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case ee.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case ee.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case ee.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case ee.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case ee.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case ee.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, dr = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof Q ? e.code : "UNKNOWN",
    timestamp: e instanceof Q ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof Q && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, aa = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = an.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, s = [];
  const i = (c, a) => {
    s.forEach(({ resolve: u, reject: l }) => {
      c ? l(c) : a && u(a);
    }), s = [];
  };
  return o.interceptors.request.use(
    (c) => {
      const { accessToken: a } = qt();
      return a && c.headers && (c.headers.Authorization = `Bearer ${a}`), c;
    },
    (c) => Promise.reject(c)
  ), o.interceptors.response.use(
    (c) => c,
    async (c) => {
      var p;
      const a = c.config, u = (p = c.response) == null ? void 0 : p.status, l = (a == null ? void 0 : a.url) || "", h = l.includes("/auth/refresh");
      if (u !== 401 || a._retry || h)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: m } = qt();
      if (!m) {
        const x = new Error(
          "No refresh token available for token refresh"
        );
        return dr(x, "AxiosClient - Token Refresh"), Zt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((x, g) => {
          s.push({ resolve: x, reject: g });
        }).then((x) => {
          const {
            accessToken: g,
            refreshToken: w
          } = x;
          if (a.headers && (a.headers.Authorization = `Bearer ${g}`), l.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const E = JSON.parse(
                  a.data || "{}"
                );
                E.refresh_token = w, a.data = JSON.stringify(E);
              } else
                a.data && typeof a.data == "object" ? a.data.refresh_token = w : a.data = JSON.stringify({
                  refresh_token: w
                });
            } catch {
              a.data = JSON.stringify({
                refresh_token: w
              });
            }
          return o(a);
        }).catch((x) => Promise.reject(x));
      r = !0, n = an.post(
        `${e}/auth/refresh`,
        {
          refresh_token: m
        }
      );
      try {
        const x = await n, { accessToken: g, refreshToken: w } = x.data;
        if (ps(g, w, null), i(null, {
          accessToken: g,
          refreshToken: w
        }), a.headers && (a.headers.Authorization = `Bearer ${g}`), l.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const E = JSON.parse(
                a.data || "{}"
              );
              E.refresh_token = w, a.data = JSON.stringify(E);
            } else
              a.data && typeof a.data == "object" ? a.data.refresh_token = w : a.data = JSON.stringify({
                refresh_token: w
              });
          } catch {
            a.data = JSON.stringify({
              refresh_token: w
            });
          }
        return o(a);
      } catch (x) {
        return dr(
          x,
          "AxiosClient - Token Refresh Failed"
        ), i(x), Zt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(x);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, ca = async (e, o) => {
  const { accessToken: r, refreshToken: n } = qt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return ps(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      dr(s, "TokenValidator - Refresh Failed");
    }
  return Zt(), o ? o() : window.location.href = "/login", !1;
}, Ut = ({ size: e = 20 }) => /* @__PURE__ */ S(
  "svg",
  {
    width: e,
    height: e * 30 / 33,
    viewBox: "0 0 33 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: "M21.7931 29.9243V20.5466L11.0774 10.4528V20.5466L21.7931 29.9243Z",
          fill: "#05A393"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          d: "M21.7931 20.1102L21.7931 10.0939L11.0774 0V10.0939L21.7931 20.1102Z",
          fill: "#049586"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          d: "M2.19027e-05 29.9243V20.5466L10.7157 10.4528V20.5466L2.19027e-05 29.9243Z",
          fill: "#09C1AE"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          d: "M22.1555 19.4716V10.0939L32.8712 0V10.0939L22.1555 19.4716Z",
          fill: "#016F63"
        }
      )
    ]
  }
), wn = be(Tr), Ze = "#09C1AE", So = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ze} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
    animation: "nexa-beam 3s linear infinite",
    zIndex: 0
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${e - 2}px`,
    bgcolor: o,
    zIndex: 1
  },
  "& > *": { position: "relative", zIndex: 2 },
  "@keyframes nexa-beam": { to: { transform: "rotate(360deg)" } },
  "@media (prefers-reduced-motion: reduce)": {
    "&::before": { animation: "none" }
  }
}), la = (e) => ({
  ...So(te, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${te - 2}px`,
    zIndex: 1,
    background: `${Ro(Ze, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), En = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = Cr(), u = d.useContext(Ct), l = je().palette.mode === "dark", h = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", m = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ S(
    Ke,
    {
      ...m,
      focusRipple: !0,
      "data-variant": "sidebar",
      sx: {
        width: "100%",
        height: 44,
        px: 1.5,
        gap: 1.25,
        justifyContent: "flex-start",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Ze : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: i,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Ze}`,
          outlineOffset: 2
        },
        ...n && So(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Ut, { size: 20 }),
        /* @__PURE__ */ t(
          ne,
          {
            sx: {
              flexGrow: 1,
              textAlign: "left",
              fontWeight: 600,
              color: "inherit"
            },
            children: "Ask Nexa"
          }
        ),
        s && /* @__PURE__ */ t(Qi, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && u && or ? /* @__PURE__ */ t(Re, { title: h, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    we,
    {
      ...m,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: le,
        height: le,
        borderRadius: `${te}px`,
        ...Ro(Ze, l, "clear"),
        ...r && {
          boxShadow: `${Ro(Ze, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${wn.duration}ms ${wn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [xe]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && la(l)
      },
      children: /* @__PURE__ */ t(Ut, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Re, { title: h, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    we,
    {
      ...m,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": u || void 0,
      sx: {
        width: u ? le : 44,
        height: u ? le : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Ze : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && So(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Ut, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ t(Re, { title: h, placement: "left", children: /* @__PURE__ */ t(
    we,
    {
      ...m,
      disableFocusRipple: !0,
      "data-variant": "floating",
      sx: {
        position: "fixed",
        right: 24 + c,
        transition: "right 225ms ease",
        bottom: 24,
        // Above page content, below drawers and menus (1200+)
        zIndex: 1150,
        width: 52,
        height: 52,
        p: 0,
        borderRadius: "16px",
        bgcolor: "background.paper",
        boxShadow: 4,
        outline: r ? `2px solid ${Ze}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Ze}` },
        ...n && So(16, "background.paper")
      },
      children: /* @__PURE__ */ t(C, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Ut, { size: 26 }) })
    }
  ) });
}, go = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(Ks, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ S(js, { children: [
  /* @__PURE__ */ t(Vs, { fontSize: "small" }),
  /* @__PURE__ */ t(ne, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ne,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    zn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Bt = 24, da = 720, ua = 1140, fa = 1250, pa = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: s,
  sidebarWidthPx: i,
  bottomOffsetPx: c,
  fullScreen: a,
  fullScreenBottom: u = "0px",
  onClose: l
}) => {
  const h = d.useRef(!1);
  d.useEffect(() => {
    const w = requestAnimationFrame(() => {
      h.current = !0;
    });
    return () => cancelAnimationFrame(w);
  }, []), d.useEffect(() => {
    if (!e || !l)
      return;
    const w = (E) => {
      E.key === "Escape" && l();
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [e, l]);
  const m = r === "docked", p = Bt + c;
  let x;
  a ? x = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : m ? x = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : x = {
    bottom: p,
    ...n === "left" ? { left: i + Bt } : { right: Bt },
    width: s,
    maxWidth: `calc(100vw - ${Bt * 2}px)`,
    height: `min(${da}px, calc(100vh - ${p + Bt}px))`,
    borderRadius: "12px"
  };
  const g = /* @__PURE__ */ t(
    xr,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? ua : fa,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...x
      },
      children: o
    }
  );
  return m ? /* @__PURE__ */ t(
    qs,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...h.current ? {} : { timeout: { enter: 0 } },
      children: g
    }
  ) : /* @__PURE__ */ t(
    Ys,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: g
    }
  );
}, ha = 180, Rn = 250, ma = "#01584F", ga = ({
  text: e,
  testId: o
}) => {
  const r = d.useRef(null), [n, s] = d.useState(!1), i = d.useCallback(() => {
    const c = r.current;
    c && s(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    i();
  }, [i, e]), d.useEffect(() => {
    const c = r.current;
    if (!c)
      return;
    const a = new ResizeObserver(() => i());
    return a.observe(c), () => a.disconnect();
  }, [i]), /* @__PURE__ */ t(
    Re,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        ne,
        {
          ref: r,
          variant: "caption",
          component: "span",
          "aria-hidden": !0,
          "data-testid": o,
          sx: {
            display: "block",
            width: "100%",
            textAlign: "center",
            lineHeight: 1.1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "inherit"
          },
          children: e
        }
      )
    }
  );
}, hs = (e, o, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : o, c = e ? ma : o;
  return { activeBg: c, sx: n ? {
    width: "100%",
    maxWidth: "100%",
    minWidth: s,
    height: "auto",
    minHeight: s,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: r ? "#ffffff" : i,
    backgroundColor: r ? c : "transparent",
    "&:hover": {
      backgroundColor: r ? c : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : i
    }
  } : {
    width: s,
    height: s,
    color: r ? "#ffffff" : i,
    backgroundColor: r ? c : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? c : "action.hover",
      borderRadius: "4px"
    }
  } };
}, ms = ({ link: e }) => /* @__PURE__ */ S(Ce, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ t(
    C,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "inherit",
        "& .MuiSvgIcon-root": { color: "inherit" }
      },
      children: e.icon
    }
  ),
  /* @__PURE__ */ t(
    ga,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), gs = (e, o, r) => r ? e : /* @__PURE__ */ t(Re, { title: o, placement: "right", arrow: !0, children: e }), xa = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: c
}) => {
  const a = je(), [u, l] = d.useState(null), [h, m] = d.useState(!1), p = d.useRef(
    null
  ), x = d.useRef(null), g = d.useRef(null), w = d.useRef(!1), E = d.useRef(!1), O = d.useId(), v = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, R = () => {
    v(), p.current = setTimeout(() => {
      m(!1), p.current = null;
    }, ha);
  }, L = () => {
    v(), m(!0);
  };
  d.useEffect(() => {
    if (!h)
      return;
    const $ = (T) => {
      var k;
      T.key === "Escape" && (m(!1), (k = g.current) == null || k.focus());
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [h]), d.useEffect(() => {
    if (!h || !E.current)
      return;
    const $ = globalThis.requestAnimationFrame(() => {
      var k;
      const T = (k = x.current) == null ? void 0 : k.querySelector(
        '[role="menuitem"]'
      );
      T == null || T.focus(), E.current = !1;
    });
    return () => cancelAnimationFrame($);
  }, [h]);
  const y = nt(e, o), { activeBg: _, sx: b } = hs(
    s,
    n,
    y,
    c
  ), I = /* @__PURE__ */ t(
    we,
    {
      ref: g,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || L();
      },
      onBlur: ($) => {
        var k;
        const T = $.relatedTarget;
        T && ((k = x.current) != null && k.contains(T)) || R();
      },
      onKeyDown: ($) => {
        $.key === "ArrowDown" && ($.preventDefault(), E.current = !0, L());
      },
      onClick: ($) => {
        $.stopPropagation(), !(e.path && !Tt($)) && ($.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": h,
      "aria-controls": h ? O : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: b,
      children: c ? /* @__PURE__ */ t(ms, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ S(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          C,
          {
            ref: l,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              w.current = !0, L();
            },
            onMouseLeave: () => {
              w.current = !1, R();
            },
            children: gs(I, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          gr,
          {
            open: h && !!u,
            anchorEl: u,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: ($) => $.zIndex.modal },
            children: /* @__PURE__ */ t(
              xr,
              {
                ref: x,
                elevation: 0,
                onMouseEnter: v,
                onMouseLeave: R,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: i,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: Rn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  br,
                  {
                    id: O,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Rn
                    },
                    children: D(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function D($, T, k) {
    return $.flatMap((P) => {
      const B = Et(T, P);
      return It(P) ? [
        /* @__PURE__ */ t(
          Zs,
          {
            disableSticky: !0,
            title: P.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + k * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: P.text
          },
          B
        ),
        ...D(P.subitems, B, k + 1)
      ] : [
        /* @__PURE__ */ S(
          st,
          {
            role: "menuitem",
            title: P.text,
            disabled: !P.path,
            selected: Ue(P, o),
            ...P.path && { component: "a", href: P.path },
            onClick: (X) => {
              P.path && !Tt(X) || (X.preventDefault(), P.path && (r == null || r(P.path)), m(!1));
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + k * 1.5,
              maxWidth: "100%",
              overflow: "hidden",
              color: s ? "text.secondary" : n,
              "& .MuiListItemIcon-root": {
                color: "inherit",
                minWidth: 36,
                flexShrink: 0,
                "& .MuiSvgIcon-root": {
                  color: "inherit"
                }
              },
              "& .MuiListItemText-root": {
                flex: "1 1 auto",
                minWidth: 0,
                overflow: "hidden"
              },
              "& .MuiTypography-root": {
                color: "inherit",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              "&:hover": {
                bgcolor: "action.hover",
                borderRadius: "4px"
              },
              "&.Mui-selected": {
                bgcolor: _,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: _
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              P.icon ? /* @__PURE__ */ t(Ee, { children: P.icon }) : null,
              /* @__PURE__ */ t(
                Xe,
                {
                  primary: P.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          B
        )
      ];
    });
  }
}, ba = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = hs(
    s,
    n,
    c,
    i
  );
  return gs(
    /* @__PURE__ */ t(
      we,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !Tt(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: a,
        children: i ? /* @__PURE__ */ t(ms, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, va = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Qe, { sx: { width: "60%", borderColor: "divider" } })
  }
), ya = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Qe, { sx: { width: "60%", borderColor: "divider" } })
  }
), In = (e, o) => e.map((r, n) => /* @__PURE__ */ S(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(va, {}) : null
] }, n)), Sa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: c = !1
}) => {
  const a = (l, h) => It(l) ? /* @__PURE__ */ t(
    xa,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: h,
      surfaceBackgroundColor: i,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    ba,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: h,
      railShowTitles: c
    }
  ), u = c ? 1.25 : 1;
  return /* @__PURE__ */ S(
    Ce,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: u
      },
      children: [
        In(e, (l) => a(l, !1)),
        o.length > 0 ? /* @__PURE__ */ S(Ae, { children: [
          /* @__PURE__ */ t(ya, {}),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Ce, { gap: u, alignItems: "center", children: In(
            o,
            (l) => a(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, wa = (e) => e ? Kn(e) : "USER", Ea = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), _n = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, ur = ({ count: e }) => e ? /* @__PURE__ */ t(
  C,
  {
    component: "span",
    sx: {
      minWidth: 22,
      height: 20,
      px: 0.75,
      borderRadius: "10px",
      bgcolor: "error.main",
      color: "error.contrastText",
      fontSize: 12,
      fontWeight: 600,
      lineHeight: "20px",
      textAlign: "center"
    },
    children: e > 99 ? "99+" : e
  }
) : null, Mr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Qs,
  {
    src: o,
    alt: e,
    sx: {
      width: n,
      height: n,
      flexShrink: 0,
      fontSize: n * 0.36,
      fontWeight: 600,
      bgcolor: r,
      color: "#ffffff"
    },
    children: Ea(e)
  }
), xs = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ S(Ae, { children: [
  /* @__PURE__ */ t(Mr, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ S(
    C,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: 0,
        flexGrow: 1
      },
      children: [
        /* @__PURE__ */ t(
          ne,
          {
            variant: "body2",
            sx: { ..._n, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ne,
          {
            variant: "caption",
            sx: { ..._n, opacity: 0.8, color: "inherit" },
            children: wa(o)
          }
        )
      ]
    }
  )
] }), Tn = {
  above: {
    anchor: { vertical: "top", horizontal: "left" },
    transform: { vertical: "bottom", horizontal: "left" }
  },
  "above-end": {
    anchor: { vertical: "top", horizontal: "right" },
    transform: { vertical: "bottom", horizontal: "right" }
  },
  beside: {
    anchor: { vertical: "bottom", horizontal: "right" },
    transform: { vertical: "bottom", horizontal: "left" }
  }
}, bs = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: s,
  showNotifications: i,
  notificationCount: c,
  onNotificationsClick: a,
  userName: u = "User",
  userRole: l,
  userAvatar: h,
  menuItems: m = [],
  showSettings: p,
  onSettingsClick: x,
  showThemeToggler: g,
  theme: w,
  onThemeToggle: E,
  onLogout: O
}) => {
  const v = (R) => () => {
    o(), R == null || R();
  };
  return /* @__PURE__ */ S(
    ei,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: Tn[r].anchor,
      transformOrigin: Tn[r].transform,
      slotProps: {
        paper: {
          sx: {
            width: n ?? 240,
            maxWidth: "calc(100vw - 16px)",
            mt: r === "beside" ? 0 : -1,
            ml: r === "beside" ? 1.5 : 0,
            borderRadius: "10px",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)"
          }
        },
        list: { sx: { py: 0.5 } }
      },
      sx: {
        "& .MuiMenuItem-root": {
          mx: 0.5,
          borderRadius: "6px",
          fontSize: 14
        }
      },
      children: [
        /* @__PURE__ */ t(
          Ce,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              xs,
              {
                name: u,
                role: l,
                avatar: h,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Qe, {}),
        i && /* @__PURE__ */ S(st, { onClick: v(a), children: [
          /* @__PURE__ */ t(Ee, { children: /* @__PURE__ */ t(Un, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Xe, { children: "Notifications" }),
          /* @__PURE__ */ t(ur, { count: c })
        ] }),
        m.map((R) => /* @__PURE__ */ S(st, { onClick: v(R.onClick), children: [
          R.icon && /* @__PURE__ */ t(Ee, { children: R.icon }),
          /* @__PURE__ */ t(Xe, { inset: !R.icon, children: R.label }),
          /* @__PURE__ */ t(ur, { count: R.badge })
        ] }, R.key)),
        p && /* @__PURE__ */ S(st, { onClick: v(x), children: [
          /* @__PURE__ */ t(Ee, { children: /* @__PURE__ */ t(Js, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Xe, { children: "Settings" })
        ] }),
        g && [
          /* @__PURE__ */ t(Qe, {}, "theme-divider"),
          /* @__PURE__ */ S(C, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              ne,
              {
                variant: "overline",
                sx: {
                  display: "block",
                  lineHeight: 1.5,
                  mb: 0.75,
                  color: "text.secondary",
                  letterSpacing: "0.08em"
                },
                children: "— Theme"
              }
            ),
            /* @__PURE__ */ S(
              ti,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: w,
                onChange: (R, L) => L && L !== w && (E == null ? void 0 : E()),
                disabled: !E,
                sx: {
                  p: 0.5,
                  gap: 0.5,
                  bgcolor: "action.hover",
                  borderRadius: "8px",
                  "& .MuiToggleButton-root": {
                    border: 0,
                    borderRadius: "6px !important",
                    textTransform: "none",
                    fontWeight: 500,
                    color: "text.secondary",
                    "&.Mui-selected": {
                      bgcolor: "background.paper",
                      color: "text.primary",
                      boxShadow: 1,
                      "&:hover": { bgcolor: "background.paper" }
                    }
                  }
                },
                children: [
                  /* @__PURE__ */ t(cn, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(cn, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Qe, {}),
        /* @__PURE__ */ S(
          st,
          {
            onClick: v(O),
            sx: {
              color: w === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(Ee, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Hn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Xe, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, vs = 64, Ra = 2, zt = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: s,
  activeColor: i,
  activeBackground: c,
  ariaLabel: a,
  haspopup: u,
  isPage: l = !1,
  href: h,
  testId: m
}) => /* @__PURE__ */ S(
  Ke,
  {
    ...h && { component: "a", href: h },
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": u,
    "aria-expanded": u ? n : void 0,
    "aria-current": l && n ? "page" : void 0,
    "data-testid": m,
    sx: {
      flex: "1 1 0",
      minWidth: 0,
      height: "100%",
      flexDirection: "column",
      gap: 0.25,
      color: n ? i : s,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: i,
        outlineOffset: -4
      }
    },
    children: [
      /* @__PURE__ */ t(
        C,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 28,
            minWidth: 48,
            borderRadius: "14px",
            bgcolor: n ? c : "transparent",
            transition: "background-color 150ms"
          },
          children: o
        }
      ),
      /* @__PURE__ */ t(
        ne,
        {
          component: "span",
          sx: {
            fontSize: 11,
            fontWeight: n ? 600 : 500,
            lineHeight: 1.2,
            color: "inherit"
          },
          children: e
        }
      )
    ]
  }
), Ia = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: i,
  assistantActive: c,
  showProfile: a,
  background: u,
  color: l,
  activeColor: h,
  activeBackground: m,
  pinnedLinks: p = [],
  activePath: x,
  onLinkClick: g,
  ...w
}) => {
  const E = p.filter((b) => b.path).slice(0, Ra), [O, v] = d.useState(
    null
  ), { userName: R = "User", userAvatar: L, avatarColor: y } = w, _ = { color: l, activeColor: h, activeBackground: m };
  return /* @__PURE__ */ S(
    xr,
    {
      component: "nav",
      "aria-label": "Mobile navigation",
      square: !0,
      elevation: 0,
      "data-testid": "mobile-bottom-nav",
      sx: {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        // Above the page and the top bar; drawers and menus cover it. The
        // chat popup stops above it on phones, so it stays reachable.
        zIndex: 1199,
        display: "flex",
        alignItems: "stretch",
        height: `calc(${vs}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: u,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          zt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Gn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ..._
          }
        ),
        E.map((b) => /* @__PURE__ */ t(
          zt,
          {
            label: b.text,
            icon: b.icon,
            href: b.path,
            onClick: (I) => {
              Tt(I) && (I.preventDefault(), g == null || g(b.path));
            },
            active: nt(b, x),
            isPage: !0,
            testId: `mobile-nav-link-${b.text}`,
            ..._
          },
          b.path
        )),
        s && /* @__PURE__ */ t(
          zt,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ t(
              C,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 28,
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: c ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(Ut, { size: 18 })
              }
            ),
            onClick: i,
            active: c,
            testId: "mobile-nav-nexa",
            ..._
          }
        ),
        r && /* @__PURE__ */ t(
          zt,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(vr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ..._
          }
        ),
        a && /* @__PURE__ */ S(Ae, { children: [
          /* @__PURE__ */ t(
            zt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${R}`,
              icon: /* @__PURE__ */ t(
                Mr,
                {
                  name: R,
                  avatar: L,
                  color: y,
                  size: 26
                }
              ),
              onClick: (b) => v(b.currentTarget),
              active: !!O,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ..._
            }
          ),
          /* @__PURE__ */ t(
            bs,
            {
              anchorEl: O,
              onClose: () => v(null),
              placement: "above-end",
              width: 280,
              ...w
            }
          )
        ] })
      ]
    }
  );
}, _a = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  oi,
  {
    anchor: "top",
    open: e,
    onClose: o,
    SlideProps: {
      onEntered: (n) => {
        var s;
        return (s = n.querySelector(
          'input, textarea, [contenteditable="true"]'
        )) == null ? void 0 : s.focus();
      }
    },
    slotProps: {
      paper: {
        "aria-label": "Search",
        sx: {
          p: 2,
          pt: "calc(16px + env(safe-area-inset-top, 0px))",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px"
        }
      }
    },
    children: /* @__PURE__ */ S(
      Ce,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(C, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            zn,
            {
              onClick: o,
              sx: { flexShrink: 0, textTransform: "none" },
              children: "Cancel"
            }
          )
        ]
      }
    )
  }
), Ta = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: s,
  brandMenuOpen: i,
  background: c,
  color: a,
  brandColor: u = a,
  endContent: l
}) => /* @__PURE__ */ t(
  ri,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: e,
      background: c,
      color: a,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ S(ni, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        we,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(Gn, {})
        }
      ),
      /* @__PURE__ */ t(
        Eo,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: s,
          menuOpen: i,
          color: u,
          testId: "mobile-brand"
        }
      ),
      l ? /* @__PURE__ */ t(C, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: l }) : null
    ] })
  }
), ys = d.createContext(void 0), Lr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const c = Cr(), a = d.useContext(ys), u = d.useContext(Ct), l = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Re,
    {
      title: l,
      placement: s,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        we,
        {
          onClick: o,
          "aria-label": l,
          "data-testid": i,
          sx: {
            ...u ? {
              width: le,
              height: le
            } : {},
            color: r,
            flexShrink: 0,
            borderRadius: "8px",
            "&:hover": { bgcolor: n },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: r
            }
          },
          children: /* @__PURE__ */ t(
            Xn,
            {
              color: "error",
              badgeContent: e,
              invisible: e === 0,
              max: 99,
              sx: {
                "& .MuiBadge-badge": {
                  fontSize: 10,
                  height: 16,
                  minWidth: 16,
                  px: 0.5
                }
              },
              children: a ?? /* @__PURE__ */ t(Un, {})
            }
          )
        }
      )
    }
  );
}, An = 14, Aa = 18, Ca = "blur(12px) saturate(180%) brightness(1.04)", Oa = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), $a = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, Ma = 140, Cn = 0.22, La = 0.14, Da = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var x;
      const p = e.current;
      p && (p.style.setProperty("--lx", `${i.x.toFixed(1)}px`), p.style.setProperty("--ly", `${i.y.toFixed(1)}px`), p.style.setProperty("--li", i.i.toFixed(3)), (x = n.current) == null || x.call(n, i.x, i.y, i.i));
    }, u = () => {
      i.x += (s.x - i.x) * Cn, i.y += (s.y - i.y) * Cn, i.i += (s.i - i.i) * La;
      const p = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      p && (i.x = s.x, i.y = s.y, i.i = s.i), a(), c = p ? 0 : requestAnimationFrame(u);
    }, l = () => {
      c || (c = requestAnimationFrame(u));
    }, h = (p) => {
      const x = e.current;
      if (p.pointerType === "touch" || !x)
        return;
      const g = x.getBoundingClientRect();
      if (!g.width || !g.height)
        return;
      s.x = (p.clientX - g.left) * x.offsetWidth / g.width, s.y = (p.clientY - g.top) * x.offsetHeight / g.height;
      const w = Math.max(
        g.left - p.clientX,
        0,
        p.clientX - g.right
      ), E = Math.max(
        g.top - p.clientY,
        0,
        p.clientY - g.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(w, E) / Ma), i.i < 0.01 && (i.x = s.x, i.y = s.y), l();
    }, m = () => {
      s.i = 0, l();
    };
    return document.addEventListener("pointermove", h, { passive: !0 }), document.documentElement.addEventListener("mouseleave", m), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", h), document.documentElement.removeEventListener("mouseleave", m);
    };
  }, [e, o]);
}, Jt = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: c
  }, a) => {
    const u = d.useRef(null), l = s && or;
    Da(u, i && or, c);
    const h = Ao(), m = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [p, x] = d.useState(null), g = d.useRef(null), w = d.useCallback(
      (v) => {
        var L;
        if (u.current = v, typeof a == "function" ? a(v) : a && (a.current = v), (L = g.current) == null || L.disconnect(), g.current = null, !v || !l || !Oa || typeof ResizeObserver > "u")
          return;
        const R = () => {
          const y = v.offsetWidth, _ = v.offsetHeight;
          x(
            (b) => (b == null ? void 0 : b.width) === y && b.height === _ ? b : y && _ ? { width: y, height: _ } : null
          );
        };
        g.current = new ResizeObserver(R), g.current.observe(v), R();
      },
      [a, l]
    ), E = d.useMemo(
      () => p ? $a(p.width, p.height, An) : null,
      [p]
    ), O = l && !!(E && p);
    return /* @__PURE__ */ S(Ae, { children: [
      O ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ S(
            "filter",
            {
              id: m,
              x: "0",
              y: "0",
              width: p.width,
              height: p.height,
              filterUnits: "userSpaceOnUse",
              primitiveUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ t(
                  "feImage",
                  {
                    href: E,
                    x: "0",
                    y: "0",
                    width: p.width,
                    height: p.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ t(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: An / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Aa,
                    xChannelSelector: "R",
                    yChannelSelector: "G"
                  }
                )
              ]
            }
          )
        }
      ) : null,
      /* @__PURE__ */ t(
        C,
        {
          ref: w,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": O ? "true" : void 0,
          sx: [
            ui(e, o, h),
            O ? {
              backdropFilter: `url(#${m}) ${Ca}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
Jt.displayName = "GlassLayer";
const fr = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ka = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, On = be(rs), $n = be(Mo), Mn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Na = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = je().palette.mode === "dark", c = Ao(), a = d.useRef(null), u = d.useRef(null), l = (p) => {
    var x;
    p !== e && (o == null || o()), (x = (p === "light" ? a : u).current) == null || x.focus();
  }, h = (p) => {
    if (!(p.key === "Tab" || p.key === "Escape"))
      switch (p.stopPropagation(), p.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          p.preventDefault(), l(e === "light" ? "dark" : "light");
          break;
        case "Home":
          p.preventDefault(), l("light");
          break;
        case "End":
          p.preventDefault(), l("dark");
          break;
      }
  }, m = (p, x, g, w) => {
    const E = e === p;
    return /* @__PURE__ */ t(
      Ke,
      {
        ref: w,
        role: "radio",
        "aria-checked": E,
        "aria-label": x,
        tabIndex: E ? 0 : -1,
        onClick: () => l(p),
        "data-testid": `theme-segment-${p}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${te}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: E ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: E ? n : "transparent",
          ...s && E ? Vn(i, c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": E ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: i ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${Fe(r, 0.6)}`
          },
          ...fr
        },
        children: /* @__PURE__ */ t(g, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ S(
    Ce,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: h,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${te}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        m("light", "Light", ii, a),
        m("dark", "Dark", si, u)
      ]
    }
  );
}, Fa = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: s,
  userName: i,
  userEmail: c,
  roleLabel: a,
  accentColor: u,
  tint: l,
  showThemeToggler: h,
  theme: m,
  onThemeToggle: p,
  onProfileClick: x,
  onAiUsageClick: g,
  onLinkClick: w,
  menuItems: E = [],
  onLogout: O,
  glass: v = !1
}) => {
  const R = je(), L = R.palette.mode === "dark", y = d.useRef(null), _ = Rr(R.palette.background.paper), b = Or({
    enabled: v,
    isDark: L,
    selector: Mn,
    radius: te
  }), [I, D] = d.useState(null);
  d.useEffect(() => {
    if (!I || typeof ResizeObserver > "u")
      return;
    const A = new ResizeObserver(() => {
      var z;
      (z = y.current) == null || z.updatePosition();
    });
    return A.observe(I), () => A.disconnect();
  }, [I]);
  const $ = (A) => {
    r(), A == null || A();
  }, T = (A) => {
    r(), A.onClick ? A.onClick() : A.path && (w == null || w(A.path));
  }, k = {
    borderRadius: v ? `${te}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, P = {
    fontSize: 12,
    lineHeight: "18px",
    letterSpacing: "0.02em",
    fontWeight: 600,
    // White on dark: the accent is too dim against a dark surface
    color: L ? "#ffffff" : u,
    borderRadius: "4px",
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "2px"
    },
    "&.Mui-focusVisible": {
      boxShadow: `0 0 0 2px ${Fe(u, 0.6)}`
    },
    ...fr
  }, B = g ? /* @__PURE__ */ S(
    Ce,
    {
      direction: "row",
      "data-testid": "account-menu-links",
      sx: { alignItems: "center", gap: 0.75, mt: 0.25 },
      children: [
        x ? /* @__PURE__ */ S(Ae, { children: [
          /* @__PURE__ */ t(
            Ke,
            {
              onClick: () => $(x),
              "data-testid": "account-menu-view-profile",
              sx: P,
              children: "View profile"
            }
          ),
          /* @__PURE__ */ t(
            C,
            {
              component: "span",
              "aria-hidden": !0,
              sx: { color: "text.disabled", fontSize: 12 },
              children: "·"
            }
          )
        ] }) : null,
        /* @__PURE__ */ t(
          Ke,
          {
            onClick: () => $(g),
            "data-testid": "account-menu-ai-usage",
            sx: P,
            children: "My AI usage"
          }
        )
      ]
    }
  ) : null, X = /* @__PURE__ */ S(Ce, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ S(C, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ne, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: i }),
      c ? /* @__PURE__ */ t(
        ne,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary", fontSize: 12, lineHeight: "18px" },
          children: c
        }
      ) : null,
      a ? /* @__PURE__ */ t(
        ne,
        {
          noWrap: !0,
          variant: "caption",
          "data-role": !0,
          "data-testid": "account-menu-role",
          sx: {
            display: "block",
            letterSpacing: "0.02em",
            color: "text.secondary"
          },
          children: a
        }
      ) : null,
      B,
      x && !g ? /* @__PURE__ */ t(
        ne,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: L ? "#ffffff" : u,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    yr,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: y,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...v ? {
        slots: { transition: mr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: D,
          sx: {
            // Transparent paper: the card draws its own chrome.
            bgcolor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            border: "none",
            borderRadius: 0,
            overflow: "visible",
            mt: -1,
            maxWidth: "calc(100vw - 32px)"
          }
        }
      },
      children: /* @__PURE__ */ S(
        C,
        {
          "data-testid": "account-menu",
          "data-glass": v ? "true" : void 0,
          sx: v ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${te}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${Mn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...ka, width: n, minWidth: n },
          children: [
            v ? /* @__PURE__ */ t(
              Jt,
              {
                isDark: L,
                solid: _,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Ir} ${On.duration}ms ${On.easing} both`,
                  [xe]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ S(
              C,
              {
                ...b.containerProps,
                sx: v ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${_r} ${$n.duration}ms ${$n.easing} 70ms both`,
                  [xe]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  b.lens,
                  x && !g ? /* @__PURE__ */ t(
                    Ke,
                    {
                      onClick: () => $(x),
                      "data-testid": "account-menu-header",
                      sx: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        transition: "background-color 150ms ease",
                        "& [data-hint]": { display: "none" },
                        "&:hover, &.Mui-focusVisible": {
                          bgcolor: l,
                          "& [data-hint]": { display: "block" },
                          "& [data-role]": { display: "none" }
                        },
                        ...fr
                      },
                      children: X
                    }
                  ) : /* @__PURE__ */ t(C, { "data-testid": "account-menu-header", children: X }),
                  /* @__PURE__ */ t(Qe, {}),
                  h ? /* @__PURE__ */ S(
                    C,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...k,
                        // Paints above the glass lens resting behind it
                        position: "relative",
                        mx: 0.5,
                        mt: 0.5,
                        px: 1.5,
                        // The 32px pill is taller than a text line; trim the
                        // vertical padding so the row is 40px like the rows
                        // with a count pill, not 48px.
                        py: 0.5,
                        display: "flex",
                        alignItems: "center",
                        // Icon column as wide as a MenuItem's.
                        "& .MuiListItemIcon-root": { minWidth: 32 }
                      },
                      children: [
                        /* @__PURE__ */ t(Ee, { children: /* @__PURE__ */ t(ai, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ne, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Na,
                          {
                            glass: v,
                            mode: m,
                            onToggle: p,
                            accentColor: u,
                            tint: l
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ S(
                    br,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: h ? 0 : 0.5, pb: 0.5 },
                      children: [
                        E.map((A) => /* @__PURE__ */ S(
                          st,
                          {
                            onClick: () => T(A),
                            "data-testid": `menu-item-${A.key}`,
                            sx: k,
                            children: [
                              /* @__PURE__ */ t(Ee, { children: A.icon }),
                              /* @__PURE__ */ t(ne, { sx: { flex: 1 }, children: A.label }),
                              /* @__PURE__ */ t(ur, { count: A.badge })
                            ]
                          },
                          A.key
                        )),
                        O ? /* @__PURE__ */ t(Qe, { component: "li", sx: { my: 0.5 } }) : null,
                        O ? /* @__PURE__ */ S(
                          st,
                          {
                            onClick: () => $(O),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...k,
                              color: L ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(Ee, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Hn, { fontSize: "small" }) }),
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
  );
}, Wa = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Pa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: s,
  title: i,
  onBrandClick: c,
  brandMenuOpen: a,
  brandColor: u,
  headerBackgroundColor: l,
  headerForegroundColor: h,
  activeAccentColor: m = "#01584f",
  activeBackgroundColor: p,
  groupArrowColor: x,
  groupAccentColor: g,
  activeForegroundColor: w,
  foregroundColor: E,
  surfaceBackgroundColor: O,
  flyoutSurfaceColor: v,
  collapsed: R,
  expandedWidth: L,
  collapsedWidth: y,
  topContent: _,
  submenuMode: b,
  color: I,
  hoverColor: D,
  avatarColor: $,
  showProfile: T = !0,
  userName: k = "User",
  userEmail: P,
  userRole: B,
  userAvatar: X,
  showNotifications: A = !0,
  notificationCount: z = 0,
  onNotificationsClick: se,
  whatsNewCount: Oe = 0,
  onProfileClick: fe,
  onAiUsageClick: We,
  menuItems: ve,
  onLogout: Pe,
  theme: Be = "light",
  showThemeToggler: M = !0,
  onThemeToggle: H
}) => {
  const K = je(), Z = K.palette.mode === "dark", q = O ?? (Z ? K.palette.background.paper : "#ffffff"), G = I ?? E ?? (Z ? K.palette.text.primary : m), U = D ?? g ?? Kt(m), ze = $ ?? m, re = d.useRef(null), [$e, pe] = d.useState(!1), Me = B ? Kn(B) : void 0, Le = (at) => /* @__PURE__ */ t(
    Mr,
    {
      name: k,
      avatar: X,
      color: ze,
      size: at
    }
  ), et = z + Oe, he = R && b === "flyout", Ie = A ? /* @__PURE__ */ t(
    Lr,
    {
      count: et,
      onClick: se,
      color: G,
      hoverColor: U,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, ue = T ? /* @__PURE__ */ S(
    Ke,
    {
      ref: re,
      onClick: () => pe(!0),
      "aria-haspopup": "menu",
      "aria-expanded": $e,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: R ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        p: he ? "4px" : 0.75,
        borderRadius: "10px",
        bgcolor: $e ? U : "transparent",
        "&:hover": { bgcolor: U },
        ...Wa
      },
      children: [
        R && !he && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Xn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !et,
              children: Le(36)
            }
          )
        ) : Le(R ? 36 : 40),
        R ? null : /* @__PURE__ */ S(C, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ne,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: G, lineHeight: 1.3 },
              children: k
            }
          ),
          Me ? /* @__PURE__ */ t(
            ne,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: G,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: Me
            }
          ) : null
        ] })
      ]
    }
  ) : null, Ve = !!Ie && (!R || he || !ue);
  return /* @__PURE__ */ S(
    C,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": R ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          ar,
          {
            mainLinks: e,
            secondaryLinks: o,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: s,
            title: i,
            onBrandClick: c,
            brandMenuOpen: a,
            brandColor: u,
            headerBackgroundColor: l,
            headerForegroundColor: h,
            activeAccentColor: m,
            activeBackgroundColor: p,
            groupArrowColor: x,
            groupAccentColor: g,
            activeForegroundColor: w,
            foregroundColor: E,
            surfaceBackgroundColor: q,
            flyoutSurfaceColor: v,
            collapsed: R,
            expandedWidth: L,
            collapsedWidth: y,
            topContent: _,
            footer: ue || Ve ? /* @__PURE__ */ S(
              Ce,
              {
                direction: he ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  he && Ve ? Ie : null,
                  ue,
                  !he && Ve ? Ie : null
                ]
              }
            ) : void 0,
            submenuMode: b
          }
        ),
        T ? /* @__PURE__ */ t(
          Fa,
          {
            open: $e,
            anchorEl: re.current,
            onClose: () => pe(!1),
            width: Math.max(L - 16, 240),
            renderAvatar: Le,
            userName: k,
            userEmail: P,
            roleLabel: Me,
            accentColor: m,
            tint: U,
            showThemeToggler: M,
            theme: Be,
            onThemeToggle: H,
            onProfileClick: fe,
            onAiUsageClick: We,
            onLinkClick: n,
            menuItems: ve,
            onLogout: Pe,
            glass: b === "flyout"
          }
        ) : null
      ]
    }
  );
}, Ln = be(rs), Dn = be(Mo), kn = 240, Ba = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, za = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: c = !1
}) => {
  const a = je(), u = a.palette.mode === "dark", l = !!e, h = Rr(a.palette.background.paper), m = Or({
    enabled: c,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: te
  }), p = /* @__PURE__ */ t(
    br,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((x) => {
        const g = x.key === n, w = x.accentColor ?? i;
        return /* @__PURE__ */ S(
          st,
          {
            selected: g,
            onClick: () => s(x),
            "data-testid": `platform-item-${x.key}`,
            sx: {
              borderRadius: c ? `${te}px` : "8px",
              // Compact: 14px name over a 12px description.
              py: 0.75,
              px: 1.5,
              minHeight: 0,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...c && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(Ee, { sx: { minWidth: 24 }, children: /* @__PURE__ */ t(
                C,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: w,
                    boxShadow: c ? `0 0 0 3px ${u ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Xe,
                {
                  primary: x.name,
                  secondary: x.description,
                  sx: { my: 0 },
                  slotProps: {
                    primary: {
                      sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }
                    },
                    secondary: { sx: { fontSize: 12, lineHeight: "18px" } }
                  }
                }
              ),
              g ? /* @__PURE__ */ t(
                ci,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: w }
                }
              ) : null
            ]
          },
          x.key
        );
      })
    }
  );
  return /* @__PURE__ */ t(
    yr,
    {
      open: l,
      anchorEl: e,
      onClose: o,
      onClick: (x) => x.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: mr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          sx: {
            bgcolor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            border: "none",
            borderRadius: 0,
            overflow: "visible",
            mt: 1,
            maxWidth: "calc(100vw - 32px)"
          }
        }
      },
      children: /* @__PURE__ */ t(
        C,
        {
          "data-testid": "platform-menu",
          "data-glass": c ? "true" : void 0,
          sx: c ? {
            position: "relative",
            minWidth: kn,
            borderRadius: `${te}px`
          } : { ...Ba, minWidth: kn },
          children: c ? /* @__PURE__ */ S(Ae, { children: [
            /* @__PURE__ */ t(
              Jt,
              {
                isDark: u,
                solid: h,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Ir} ${Ln.duration}ms ${Ln.easing} both`,
                  [xe]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ S(
              C,
              {
                ...m.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${_r} ${Dn.duration}ms ${Dn.easing} 70ms both`,
                  [xe]: { animation: "none" }
                },
                children: [
                  m.lens,
                  p
                ]
              }
            )
          ] }) : p
        }
      )
    }
  );
}, Ga = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), s = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ S(
    C,
    {
      ref: n,
      component: "span",
      "data-testid": "platform-switcher-logo",
      sx: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        p: "6px",
        "&::after": {
          content: '""',
          position: "absolute",
          right: 1,
          bottom: 1,
          borderStyle: "solid",
          borderWidth: "0 0 5px 5px",
          borderColor: "transparent transparent currentColor transparent",
          opacity: 0.55
        }
      },
      children: [
        e,
        /* @__PURE__ */ t(
          za,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, Ha = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var L;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: u,
    onNotificationsClick: l,
    userName: h = "User",
    userRole: m,
    userAvatar: p
  } = i, x = d.useRef(null), [g, w] = d.useState(
    null
  ), E = !!g, O = d.useRef(e);
  d.useEffect(() => {
    e && !O.current && w(null), O.current = e;
  }, [e]);
  const v = d.useContext(Ct);
  if (!a && !n)
    return null;
  const R = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ S(Ae, { children: [
    /* @__PURE__ */ S(
      Ce,
      {
        ref: x,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Re,
            {
              title: e ? h : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                Ke,
                {
                  onClick: () => w(x.current),
                  "aria-label": `Account menu for ${h}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": E,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? v ? "4px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: E ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...R
                  },
                  children: /* @__PURE__ */ t(
                    xs,
                    {
                      name: h,
                      role: m,
                      avatar: p,
                      avatarColor: c,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          a && /* @__PURE__ */ t(
            Lr,
            {
              count: u + s,
              onClick: l,
              color: o,
              hoverColor: r,
              tooltipPlacement: "right",
              testId: "sidebar-notifications"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t(
      bs,
      {
        anchorEl: g,
        onClose: () => w(null),
        placement: e ? "beside" : "above",
        width: e || (L = x.current) == null ? void 0 : L.clientWidth,
        ...i
      }
    )
  ] });
}, Ua = 120, Xa = 300, Nn = be(os), Fn = be(Mo), Ka = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, ja = 'input, textarea, [contenteditable="true"]', pr = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(ja)) == null || o.focus();
}, Va = ({
  search: e,
  icon: o,
  mode: r,
  onExpand: n,
  autoFocus: s = !1,
  onAutoFocused: i,
  color: c,
  hoverColor: a
}) => {
  const u = Cr(), l = d.useContext(Ct), h = d.useRef(null), [m, p] = d.useState(null);
  return d.useEffect(() => {
    r === "full" && s && (pr(h.current), i == null || i());
  }, [r, s, i]), r === "full" ? /* @__PURE__ */ t(
    C,
    {
      ref: h,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : r === "popover" && l ? /* @__PURE__ */ t(
    Ya,
    {
      search: e,
      icon: o,
      color: c,
      railTooltip: u
    }
  ) : /* @__PURE__ */ S(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Re, { title: "Search", placement: "right", arrow: !0, ...u, children: /* @__PURE__ */ t(
          we,
          {
            "aria-label": "Search",
            onClick: (x) => r === "expand" ? n == null ? void 0 : n() : p(x.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: c,
              borderRadius: "8px",
              "&:hover": { bgcolor: a }
            },
            children: o ?? /* @__PURE__ */ t(vr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          yr,
          {
            open: !!m,
            anchorEl: m,
            onClose: () => p(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (x) => pr(x)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, Ya = ({ search: e, icon: o, color: r, railTooltip: n }) => {
  const s = je().palette.mode === "dark";
  fi(s, nr(r, s ? 0.3 : 0.35));
  const i = `rgb(${Ao()})`, c = Rr(s ? "#1e2430" : "#ffffff"), a = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${te}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: i
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${te}px`,
      "&.Mui-focusVisible": { borderColor: i }
    }
  }, u = d.useRef(null), l = d.useRef(null), [h, m] = d.useState(!1), p = d.useRef(!1), x = d.useRef(void 0), g = d.useRef(void 0), w = () => {
    clearTimeout(x.current), clearTimeout(g.current);
  }, E = d.useCallback(() => {
    w(), p.current = !1, m(!1);
  }, []), O = () => {
    clearTimeout(g.current), h || (clearTimeout(x.current), x.current = setTimeout(
      () => m(!0),
      Ua
    ));
  }, v = () => {
    clearTimeout(x.current), clearTimeout(g.current), g.current = setTimeout(() => {
      !p.current && !Ka(l.current) && m(!1);
    }, Xa);
  };
  return d.useEffect(() => w, []), d.useEffect(() => {
    if (!h)
      return;
    const R = setTimeout(() => pr(l.current)), L = (_) => {
      var I, D;
      const b = _.target;
      !((I = l.current) != null && I.contains(b)) && !((D = u.current) != null && D.contains(b)) && E();
    }, y = (_) => {
      var b;
      _.key === "Escape" && (E(), (b = u.current) == null || b.focus());
    };
    return document.addEventListener("pointerdown", L), document.addEventListener("keydown", y), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", L), document.removeEventListener("keydown", y);
    };
  }, [h, E]), /* @__PURE__ */ S(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Re,
          {
            title: h ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...n,
            children: /* @__PURE__ */ t(
              we,
              {
                ref: u,
                "aria-label": "Search",
                "aria-expanded": h,
                onMouseEnter: O,
                onMouseLeave: v,
                onClick: () => {
                  w(), p.current = !0, m(!0);
                },
                sx: {
                  width: le,
                  height: le,
                  color: r,
                  borderRadius: `${te}px`
                },
                children: o ?? /* @__PURE__ */ t(
                  vr,
                  {
                    sx: { fontSize: jt }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          gr,
          {
            open: h,
            anchorEl: u.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ S(
              C,
              {
                ref: l,
                "data-testid": "sidebar-search-card",
                onMouseEnter: O,
                onMouseLeave: v,
                sx: {
                  position: "relative",
                  width: 320,
                  p: 1,
                  borderRadius: `${te}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    Jt,
                    {
                      isDark: s,
                      solid: c,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${Ir} ${Nn.duration}ms ${Nn.easing} both`,
                        [xe]: { animation: "none" }
                      }
                    }
                  ),
                  /* @__PURE__ */ t(
                    C,
                    {
                      sx: {
                        position: "relative",
                        // The host's field, set into the glass: an outlined
                        // input or button becomes a recessed glass well.
                        // Classes repeat to outrank the host's own styles.
                        ...a,
                        animation: `${_r} ${Fn.duration}ms ${Fn.easing} 60ms both`,
                        [xe]: { animation: "none" }
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
  );
}, qa = 80, Za = 300, Ja = 32, Qa = (e) => {
  const o = d.useRef(/* @__PURE__ */ new WeakSet()), r = d.useRef(void 0), n = d.useRef(void 0), [s, i] = d.useState(!1), [c, a] = d.useState(!1), [u, l] = d.useState(!1), h = d.useRef(null), m = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  d.useEffect(() => {
    if (!e) {
      m(), i(!1), a(!1), l(!1);
      return;
    }
    const g = (v) => {
      var L;
      if (v.pointerType !== "mouse")
        return;
      const R = v.clientX <= Ja;
      R && ((L = h.current) == null || L.style.setProperty(
        "--edge-glow-y",
        `${v.clientY}px`
      )), l(R);
    }, w = () => l(!1), E = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), a(!1);
      }, Za));
    }, O = (v) => {
      o.current.has(v) || E();
    };
    return document.addEventListener("mouseover", O), document.addEventListener("pointermove", g, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", E), document.documentElement.addEventListener("mouseleave", w), () => {
      m(), document.removeEventListener("mouseover", O), document.removeEventListener("pointermove", g), document.documentElement.removeEventListener(
        "mouseleave",
        E
      ), document.documentElement.removeEventListener(
        "mouseleave",
        w
      );
    };
  }, [e]);
  const p = {
    onMouseOver: (g) => {
      o.current.add(g.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, qa));
    },
    onFocus: (g) => {
      ec(g.target) && a(!0);
    },
    onBlur: (g) => {
      const w = g.relatedTarget;
      (!w || !g.currentTarget.contains(w)) && a(!1);
    },
    onKeyDown: (g) => {
      g.key === "Escape" && (a(!1), i(!1));
    }
  }, x = e && (s || c);
  return {
    shown: x,
    nearEdge: e && u && !x,
    glowRef: h,
    rootProps: p
  };
}, ec = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, tc = 100, oc = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = d.useState(!1), [i, c] = d.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const l = (m) => {
      r.current.has(m) || (a(), s(!1));
    }, h = () => {
      a(), s(!1);
    };
    return document.addEventListener("mouseover", l), document.documentElement.addEventListener("mouseleave", h), () => {
      a(), document.removeEventListener("mouseover", l), document.documentElement.removeEventListener(
        "mouseleave",
        h
      );
    };
  }, []), d.useEffect(() => {
    if (!i)
      return;
    const l = (h) => {
      var m;
      (m = e.current) != null && m.contains(h.target) || c(!1);
    };
    return document.addEventListener("pointerdown", l), () => document.removeEventListener("pointerdown", l);
  }, [i]), {
    expanded: n || i,
    pin: () => c(!0),
    rootProps: {
      ref: e,
      onMouseOver: (l) => {
        r.current.add(l.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, s(!0);
        }, tc));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (l) => {
        const h = l.relatedTarget;
        h && !l.currentTarget.contains(h) && c(!1);
      },
      onKeyDown: (l) => {
        l.key === "Escape" && c(!1);
      }
    }
  };
}, rc = 300, Qo = 288, nc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", sc = 18, Wn = 72, er = 90, ic = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", ac = 68, cc = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), lc = typeof window > "u" ? xo : Hs, cl = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: c = "rail",
  sidebarSubmenu: a = "expand",
  sidebarAutoHide: u = !1,
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: h,
  logo: m,
  onBrandClick: p,
  searchComponent: x,
  searchIcon: g,
  notificationsIcon: w,
  brandColor: E,
  contentPadding: O = Zn,
  userMenuItems: v,
  sidebarBackgroundColor: R,
  sidebarHeaderBackgroundColor: L,
  groupAccentColor: y,
  activeSidebarForegroundColor: _,
  enableRefreshToken: b = !1,
  holdSessionSkeleton: I = !1,
  sessionSkeletonContent: D,
  activePath: $,
  onLinkClick: T,
  showProfile: k = !0,
  userName: P,
  userRole: B,
  userAvatar: X,
  userEmail: A,
  onLogout: z,
  showSettings: se = !0,
  onSettingsClick: Oe,
  onProfileClick: fe,
  onAiUsageClick: We,
  showNotifications: ve = !0,
  notificationCount: Pe = 0,
  NotificationSidebarContent: Be,
  whatsNewCount: M = 0,
  onNotificationsClick: H,
  platforms: K,
  currentPlatformKey: Z,
  onPlatformSelect: q,
  onVerify: G,
  alertProps: U,
  style: ze,
  sidebarStyles: re,
  contentStyles: $e,
  accentColor: pe,
  sidebarAccentColor: Me,
  sidebarActiveBackgroundColor: Le,
  sidebarGroupArrowColor: et,
  sidebarForegroundColor: he,
  contentBackgroundColor: Ie,
  theme: ue = "light",
  darkModeSelector: Ve,
  showThemeToggler: tt = !1,
  onThemeToggle: at,
  GlobalChatSidebar: Ot,
  useChatSidebar: $t,
  chatPanelMode: Qt = "docked",
  chatPanelPosition: eo = "right",
  chatPanelWidth: to = 420,
  onChatClose: oo,
  showAssistant: ct = !1,
  assistantPlacement: Mt = "sidebar",
  assistantShortcut: ro = "j",
  onAssistantClick: lt,
  assistantActive: mt = !1,
  assistantBusy: Lt = !1,
  customNavbar: Dt,
  customNavbarProps: Lo,
  redirectToLogin: gt,
  apiBaseUrl: no
}) => {
  const xt = Pn(), ie = Bn(xt.breakpoints.down("md")), f = rn(
    () => Io($r(ue)),
    [ue]
  ), N = ue === "dark", j = pe ?? "#01584f", W = Me ?? j, V = ts(
    typeof Ie == "object" ? Ie[ue] : Ie,
    N
  ), J = c === "collapsible", me = c === "panel", ae = me && s && !ie, ce = c === "rail-labeled", Do = J || ce, Ge = es(
    R,
    N
  ), ko = L ?? Ge, ye = he ?? (N ? "#ffffff" : W), kt = y ?? Kt(ye), Nt = L ? rr(ko) : ye, Dr = (F) => /* @__PURE__ */ t(
    Y,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: F,
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
  ), so = E ?? Nt, [kr, No] = ut(
    null
  ), Fo = ((K == null ? void 0 : K.length) ?? 0) > 1, Ss = nn(() => No(null), []), ws = (F) => {
    No(null), q ? q(F) : F.key !== Z && F.url && window.location.assign(F.url);
  }, Nr = (F) => Fo ? /* @__PURE__ */ t(
    Ga,
    {
      anchorEl: kr,
      onClose: Ss,
      platforms: K,
      currentKey: Z,
      onSelect: ws,
      accentColor: j,
      glass: a === "flyout" && (J || me) && !ie,
      children: F
    }
  ) : F, io = Fo ? (F) => No(F.currentTarget) : p, ao = Fo ? !!kr : void 0, Wo = Nr(
    m ?? Dr(so)
  ), Es = Nr(
    m ?? Dr(E ?? ye)
  ), Po = oc(), De = $o(a, c), He = De || !Po.expanded, ot = s && !ie && hi(u, a, c), rt = Qa(ot), Fr = De ? "popover" : "expand", Wr = De ? Xt : Ht, Pr = De ? "transparent" : Ge, Br = De && !L ? "transparent" : ko, [Rs, zr] = ut(!1), Is = nn(() => zr(!1), []), Ye = Qn({
    showSidebar: s,
    isMobile: ie,
    sidebarVariant: c,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [Gr, dt] = ut(!1), [Hr, Bo] = ut(!1), Se = ie && l === "bottom-bar", Ur = `calc(${vs}px + env(safe-area-inset-bottom, 0px))`, [zo, Xr] = ut({ open: !1, tab: "notifications" }), Kr = () => Xr((F) => ({ ...F, open: !1 })), _s = ve && !!Be, [Ts, As] = ut(!0), [Cs, Os] = ut(!1), Go = $t == null ? void 0 : $t(), jr = (Go == null ? void 0 : Go.isOpen) ?? !1, Vr = Qt === "floating" ? "floating" : "docked", $s = Vr === "docked" && jr && Ot && !ie ? to : 0, co = jo(G), Yr = jo(!1), qr = rn(
    () => aa(no),
    [no]
  );
  xo(() => {
    co.current = G;
  }, [G]);
  const Ho = jo(lt);
  Ho.current = lt;
  const Ft = ct && ro ? ro.toLowerCase() : null;
  xo(() => {
    if (!Ft)
      return;
    const F = (oe) => {
      (oe.metaKey || oe.ctrlKey) && !oe.altKey && !oe.shiftKey && oe.key.toLowerCase() === Ft && Ho.current && (oe.preventDefault(), Ho.current());
    };
    return window.addEventListener("keydown", F), () => window.removeEventListener("keydown", F);
  }, [Ft]);
  const Zr = (F) => {
    const oe = z(F);
    oe instanceof Promise && oe.catch((qe) => {
      console.error("Error in logout handler:", qe);
    });
  };
  if (lc(() => {
    (() => {
      var oe;
      try {
        const { isAuthenticated: qe } = sa();
        if (!qe) {
          console.log("No session found, redirecting to login"), Zt(), gt();
          return;
        }
        if (!Yr.current) {
          const { user: Pt, error: Ko } = ia();
          if (Pt && !Ko) {
            const Ps = {
              name: Pt.name || "",
              email: Pt.email || "",
              profilePicture: Pt.profilePicture || "",
              role: Pt.role || ""
            };
            Yr.current = !0, (oe = co.current) == null || oe.call(co, Ps);
          } else
            Ko && console.error("Error getting user data:", Ko);
        }
        Os(!0);
      } catch (qe) {
        console.error("Error checking session:", qe), Zt(), gt();
      } finally {
        As(!1);
      }
    })();
  }, [gt]), xo(() => {
    b && ca(qr, gt);
  }, [b, qr]), Ts || I)
    return /* @__PURE__ */ t(
      ra,
      {
        theme: ue,
        darkModeSelector: Ve,
        sidebarVariant: c,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: s,
        contentPadding: O,
        sidebarBackgroundColor: R,
        contentBackgroundColor: Ie,
        content: D
      }
    );
  if (!Cs)
    return null;
  const Wt = x ?? (Dt ? /* @__PURE__ */ t(Dt, { ...Lo }) : null), Ms = (F) => {
    dt(!1), Bo(!1), Xr({ open: !0, tab: F });
  }, Uo = Be && (() => Ms("notifications")), Ls = Pe + M, Jr = {
    avatarColor: W,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: v == null ? void 0 : v.map(
      (F) => F.onClick || !F.path ? F : { ...F, onClick: () => T == null ? void 0 : T(F.path) }
    ),
    showNotifications: ve,
    notificationCount: Pe,
    whatsNewCount: M,
    onNotificationsClick: Uo,
    showProfile: k,
    userName: P,
    userRole: B,
    userAvatar: X,
    showSettings: se,
    onSettingsClick: Oe,
    showThemeToggler: tt,
    theme: ue,
    onThemeToggle: at,
    onLogout: Zr
  }, Xo = (F) => /* @__PURE__ */ t(
    Ha,
    {
      ...Jr,
      compact: F,
      color: ye,
      hoverColor: kt
    }
  ), Qr = Ft ? [cc() ? "⌘" : "Ctrl", Ft.toUpperCase()] : void 0, Ds = (F) => ct && Mt === "sidebar" ? /* @__PURE__ */ t(
    En,
    {
      variant: F ? "sidebar-icon" : "sidebar",
      onClick: lt,
      active: mt,
      busy: Lt,
      shortcutKeys: Qr,
      accentColor: ye
    }
  ) : null, ks = (F) => Wt ? /* @__PURE__ */ t(
    Va,
    {
      search: Wt,
      icon: g,
      mode: F,
      onExpand: () => {
        Po.pin(), zr(!0);
      },
      autoFocus: Rs,
      onAutoFocused: Is,
      color: ye,
      hoverColor: kt
    }
  ) : null, lo = (F) => {
    const oe = Ds(F !== "full"), qe = ks(F);
    return oe || qe ? /* @__PURE__ */ S(
      Gt,
      {
        spacing: De ? `${Oo}px` : 1.5,
        sx: { alignItems: F === "full" ? "stretch" : "center" },
        children: [
          oe,
          De && oe && qe ? /* @__PURE__ */ t(
            Y,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Kt(ye)}`
              }
            }
          ) : null,
          qe
        ]
      }
    ) : void 0;
  }, en = () => /* @__PURE__ */ t(
    ar,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: $,
      onLinkClick: T,
      showHeaderBar: J,
      logo: Wo,
      title: n,
      onBrandClick: io,
      brandMenuOpen: ao,
      brandColor: so,
      headerBackgroundColor: J ? Br : void 0,
      headerForegroundColor: J ? Nt : void 0,
      activeAccentColor: W,
      activeBackgroundColor: Le,
      groupArrowColor: et,
      groupAccentColor: y,
      activeForegroundColor: _,
      foregroundColor: he,
      surfaceBackgroundColor: Pr,
      flyoutSurfaceColor: Ge,
      collapsed: ce || He,
      showLabels: ce,
      expandedWidth: Qo,
      collapsedWidth: ce ? Yn : Wr,
      topContent: lo(
        ce ? "popover" : He ? Fr : "full"
      ),
      footer: Xo(ce || He),
      submenuMode: De ? "flyout" : "inline"
    }
  ), tn = (F) => De ? Ns(F) : Fs(F), Ns = (F) => /* @__PURE__ */ S(
    Y,
    {
      component: "aside",
      ...ot ? rt.rootProps : {},
      "data-auto-hide": ot ? "true" : void 0,
      "data-shown": ot ? String(rt.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (oe) => oe.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...ot ? {
          position: "fixed",
          left: 0,
          width: Xt + 2 * ht,
          pointerEvents: "none"
        } : {
          width: Ye,
          minWidth: Ye,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: V
        }
      },
      children: [
        ot && /* @__PURE__ */ t(
          Y,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: sc,
              pointerEvents: "auto"
            }
          }
        ),
        ot && /* @__PURE__ */ t(
          Y,
          {
            ref: rt.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(rt.nearEdge),
            "aria-hidden": "true",
            sx: {
              "--edge-glow-y": "50%",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Wn,
              pointerEvents: "none",
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${Wn}px ${er}px at 0 var(--edge-glow-y), ${Fe(ye, N ? 0.5 : 0.4)}, ${Fe(ye, 0)})`,
              opacity: rt.nearEdge ? 1 : 0,
              transition: "opacity 200ms ease",
              // And a bright line along the edge beside it
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 3,
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${er}px), ${Fe(ye, N ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${er}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ S(
          Y,
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            sx: {
              position: "absolute",
              top: ht,
              bottom: ht,
              left: ht,
              width: Xt,
              borderRadius: `${qn}px`,
              display: "flex",
              flexDirection: "column",
              ...ot && {
                pointerEvents: rt.shown ? "auto" : "none",
                opacity: rt.shown ? 1 : 0,
                transform: rt.shown ? "none" : `translateX(calc(-100% - ${2 * ht}px))`,
                transition: ic,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...re
            },
            children: [
              /* @__PURE__ */ t(
                Jt,
                {
                  isDark: N,
                  solid: Ge,
                  sx: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit"
                  }
                }
              ),
              /* @__PURE__ */ t(
                Y,
                {
                  sx: {
                    position: "relative",
                    flex: "1 1 auto",
                    minHeight: 0,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "inherit",
                    overflow: "hidden"
                  },
                  children: F
                }
              )
            ]
          }
        )
      ]
    }
  ), Fs = (F) => /* @__PURE__ */ t(
    Y,
    {
      component: "aside",
      sx: {
        width: Ht,
        minWidth: Ht,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (oe) => oe.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        Y,
        {
          ...De ? {} : Po.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": He ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: He ? Ht : Qo,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Ge,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: He ? "none" : `4px 0 24px rgba(0, 0, 0, ${N ? 0.5 : 0.12})`,
            transition: nc,
            ...re
          },
          children: F
        }
      )
    }
  ), Ws = Jn(
    O,
    xt
  );
  return /* @__PURE__ */ t(wo, { theme: f, children: /* @__PURE__ */ t(jn.Provider, { value: W, children: /* @__PURE__ */ t(To.Provider, { value: Ge, children: /* @__PURE__ */ t(ys.Provider, { value: w, children: /* @__PURE__ */ S(
    Y,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...ze
      },
      children: [
        /* @__PURE__ */ t(tr, {}),
        ie && /* @__PURE__ */ t(
          Ta,
          {
            height: bo,
            onMenuClick: s && !Se ? () => dt(!0) : void 0,
            appName: n,
            logo: Wo,
            onBrandClick: io,
            brandMenuOpen: ao,
            background: ko,
            color: Nt,
            brandColor: so,
            endContent: ve ? /* @__PURE__ */ t(
              Lr,
              {
                count: Ls,
                onClick: Uo,
                color: Nt,
                hoverColor: kt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !ie && ce && /* @__PURE__ */ t(
          Y,
          {
            component: "aside",
            sx: {
              width: Ye,
              minWidth: Ye,
              flexShrink: 0,
              zIndex: 2,
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
              height: "100vh",
              // Flex column so the rail shrinks inside the viewport.
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid",
              borderColor: "divider",
              ...re
            },
            children: en()
          }
        ),
        s && !ie && J && tn(
          /* @__PURE__ */ S(Ae, { children: [
            en(),
            (U == null ? void 0 : U.show) && !He && /* @__PURE__ */ t(go, { ...U })
          ] })
        ),
        ae && tn(
          /* @__PURE__ */ S(Ae, { children: [
            /* @__PURE__ */ t(
              Pa,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: $,
                onLinkClick: T,
                logo: Wo,
                title: n,
                onBrandClick: io,
                brandMenuOpen: ao,
                brandColor: so,
                headerBackgroundColor: Br,
                headerForegroundColor: Nt,
                activeAccentColor: W,
                activeBackgroundColor: Le,
                groupArrowColor: et,
                groupAccentColor: y,
                activeForegroundColor: _,
                foregroundColor: he,
                surfaceBackgroundColor: Pr,
                flyoutSurfaceColor: Ge,
                collapsed: He,
                expandedWidth: Qo,
                collapsedWidth: Wr,
                topContent: lo(
                  He ? Fr : "full"
                ),
                submenuMode: De ? "flyout" : "inline",
                color: ye,
                hoverColor: kt,
                avatarColor: W,
                showProfile: k,
                userName: P,
                userEmail: A,
                userRole: B,
                userAvatar: X,
                showNotifications: ve,
                notificationCount: Pe,
                onNotificationsClick: _s ? Uo : H,
                whatsNewCount: M,
                onProfileClick: fe,
                onAiUsageClick: We,
                menuItems: v,
                onLogout: Zr,
                theme: ue,
                showThemeToggler: tt,
                onThemeToggle: at
              }
            ),
            (U == null ? void 0 : U.show) && !He && /* @__PURE__ */ t(go, { ...U })
          ] })
        ),
        s && !ie && !Do && !me && /* @__PURE__ */ t(
          sn,
          {
            variant: "permanent",
            sx: {
              width: Ye,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Ye,
                boxSizing: "border-box",
                bgcolor: V,
                borderRight: "none"
              },
              ...re
            },
            children: /* @__PURE__ */ S(
              Y,
              {
                sx: {
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  pt: 2,
                  // Inset rail content from drawer edges (esp. left) so items do not sit flush
                  px: 1.5,
                  boxSizing: "border-box"
                },
                children: [
                  /* @__PURE__ */ t(
                    Y,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        Eo,
                        {
                          logo: Es,
                          appName: n,
                          onClick: io,
                          menuOpen: ao,
                          color: E ?? ye,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  lo("popover"),
                  /* @__PURE__ */ S(
                    Y,
                    {
                      sx: {
                        flex: "1 1 auto",
                        minHeight: 0,
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                        mt: 1
                      },
                      children: [
                        /* @__PURE__ */ t(
                          Sa,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: $,
                            onLinkClick: T,
                            accentColor: W,
                            surfaceBackgroundColor: V,
                            railShowTitles: i
                          }
                        ),
                        (U == null ? void 0 : U.show) && /* @__PURE__ */ t(
                          go,
                          {
                            ...U
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(Y, { sx: { py: 1.5 }, children: Xo(!0) })
                ]
              }
            )
          }
        ),
        s && ie && /* @__PURE__ */ S(
          Xs,
          {
            anchor: Se ? "bottom" : "left",
            open: Gr,
            onOpen: () => dt(!0),
            onClose: () => dt(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (F) => F.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Ge,
                  backgroundImage: "none",
                  ...Se ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              Se && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                Y,
                {
                  "aria-hidden": "true",
                  sx: {
                    width: 36,
                    height: 4,
                    borderRadius: "2px",
                    bgcolor: "divider",
                    mx: "auto",
                    mt: 1,
                    mb: 0.5,
                    flexShrink: 0
                  }
                }
              ),
              /* @__PURE__ */ t(
                ar,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: $,
                  onLinkClick: (F) => {
                    T == null || T(F), dt(!1);
                  },
                  onLinkAction: () => dt(!1),
                  collapsed: !1,
                  expandedWidth: Se ? "100%" : rc,
                  activeAccentColor: W,
                  activeBackgroundColor: Le,
                  groupArrowColor: et,
                  groupAccentColor: y,
                  activeForegroundColor: _,
                  foregroundColor: he,
                  surfaceBackgroundColor: Ge,
                  topInsetPx: Se ? 8 : 0,
                  topContent: Se ? void 0 : lo("full"),
                  footer: Se ? void 0 : Xo(!1)
                }
              ),
              (U == null ? void 0 : U.show) && /* @__PURE__ */ t(go, { ...U })
            ]
          }
        ),
        Se && Wt && /* @__PURE__ */ t(
          _a,
          {
            open: Hr,
            onClose: () => Bo(!1),
            search: Wt
          }
        ),
        Se && /* @__PURE__ */ t(
          Ia,
          {
            ...Jr,
            pinnedLinks: h,
            activePath: $,
            onLinkClick: T,
            onMenuClick: s ? () => dt(!0) : void 0,
            menuOpen: Gr,
            onSearchClick: Wt ? () => Bo(!0) : void 0,
            searchOpen: Hr,
            showAssistant: ct,
            onAssistantClick: lt,
            assistantActive: mt,
            showProfile: k,
            background: Ge,
            color: ye,
            activeColor: W,
            activeBackground: kt
          }
        ),
        /* @__PURE__ */ t(
          Y,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Ws,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": ie ? `${bo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ye ? `calc(100% - ${Ye}px)` : "100%",
              mt: ie ? `${bo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Se && {
                pb: `calc(var(--lumora-content-padding) + ${Ur})`
              },
              backgroundColor: V,
              ...$e
            },
            children: e
          }
        ),
        Ot && /* @__PURE__ */ t(
          pa,
          {
            open: jr,
            variant: Vr,
            position: eo,
            width: to,
            sidebarWidthPx: Ye,
            bottomOffsetPx: ct && Mt === "floating" ? ac : 0,
            fullScreen: ie,
            fullScreenBottom: Se ? Ur : "0px",
            onClose: oo,
            children: /* @__PURE__ */ t(Ot, {})
          }
        ),
        ct && Mt === "floating" && !Se && /* @__PURE__ */ t(
          En,
          {
            variant: "floating",
            rightOffsetPx: $s,
            shortcutKeys: Qr,
            onClick: lt,
            active: mt,
            busy: Lt
          }
        ),
        ve && Be && /* @__PURE__ */ t(
          sn,
          {
            anchor: "right",
            open: zo.open,
            onClose: Kr,
            slotProps: {
              paper: {
                sx: {
                  width: 380,
                  maxWidth: "100vw"
                }
              }
            },
            children: /* @__PURE__ */ t(
              Be,
              {
                onClose: Kr,
                initialTab: zo.tab
              },
              zo.tab
            )
          }
        )
      ]
    }
  ) }) }) }) });
};
export {
  ee as AUTH_ERROR_CODES,
  Q as AuthError,
  ar as CollapsibleSidebar,
  il as FullBleedSection,
  Qi as Kbd,
  ra as LumoraShellSkeleton,
  cl as LumoraWrapper,
  Zt as clearAuthTokens,
  cl as default,
  al as getAuthErrorMessage,
  qt as getAuthTokens,
  ia as getCurrentUser,
  $r as getDesignTokens,
  sa as isAuthenticated,
  dr as logAuthError,
  ps as storeAuthTokens
};
