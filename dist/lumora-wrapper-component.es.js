import { jsx as t, jsxs as S, Fragment as Me } from "react/jsx-runtime";
import Gs from "@mui/icons-material/KeyboardArrowDownRounded";
import Hs from "@mui/icons-material/KeyboardArrowUpRounded";
import Us from "@mui/icons-material/ChevronRightRounded";
import O from "@mui/material/Box";
import nn from "@mui/material/Collapse";
import Ze from "@mui/material/Divider";
import Ie from "@mui/material/IconButton";
import uo from "@mui/material/ListItemButton";
import _e from "@mui/material/ListItemIcon";
import He from "@mui/material/ListItemText";
import Le from "@mui/material/Stack";
import Ae from "@mui/material/Tooltip";
import ne from "@mui/material/Typography";
import { useTheme as Xe, createTheme as Io, alpha as We, ThemeProvider as wo } from "@mui/material/styles";
import * as d from "react";
import { useMemo as sn, useState as ut, useCallback as an, useRef as jo, useEffect as xo, useLayoutEffect as Xs } from "react";
import Ue from "@mui/material/ButtonBase";
import { keyframes as hr } from "@emotion/react";
import mr from "@mui/material/Fade";
import gr from "@mui/material/Popper";
import { useTheme as zn, CssBaseline as tr, GlobalStyles as Ks, Box as V, useMediaQuery as Gn, Stack as Gt, Skeleton as Ne, Drawer as cn, SwipeableDrawer as js } from "@mui/material";
import ln from "axios";
import Vs from "@mui/material/Card";
import Ys from "@mui/material/CardContent";
import Hn from "@mui/material/Button";
import qs from "@mui/icons-material/AutoAwesomeRounded";
import Zs from "@mui/material/Grow";
import xr from "@mui/material/Paper";
import Js from "@mui/material/Slide";
import Qs from "@mui/material/ListSubheader";
import nt from "@mui/material/MenuItem";
import br from "@mui/material/MenuList";
import Un from "@mui/icons-material/MenuRounded";
import vr from "@mui/icons-material/SearchRounded";
import Xn from "@mui/icons-material/LogoutRounded";
import Kn from "@mui/icons-material/NotificationsNoneOutlined";
import ei from "@mui/icons-material/SettingsOutlined";
import ti from "@mui/material/Avatar";
import oi from "@mui/material/Menu";
import dn from "@mui/material/ToggleButton";
import ri from "@mui/material/ToggleButtonGroup";
import ni from "@mui/material/Drawer";
import si from "@mui/material/AppBar";
import ii from "@mui/material/Toolbar";
import jn from "@mui/material/Badge";
import ai from "@mui/icons-material/DarkModeOutlined";
import ci from "@mui/icons-material/LightModeOutlined";
import li from "@mui/icons-material/SettingsBrightnessOutlined";
import yr from "@mui/material/Popover";
import di from "@mui/icons-material/CheckRounded";
const Eo = ({
  logo: e,
  title: o,
  appName: r,
  onClick: n,
  color: s,
  testId: i,
  menuOpen: a
}) => {
  const c = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: s,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, u = /* @__PURE__ */ S(Me, { children: [
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
    Ue,
    {
      onClick: n,
      "aria-label": a === void 0 ? `${r} home` : `${r}: switch platform`,
      ...a !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": a
      },
      "data-testid": i,
      focusRipple: !0,
      sx: {
        ...c,
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
  ) : /* @__PURE__ */ t(Le, { direction: "row", "data-testid": i, sx: c, children: u });
}, or = !1, _t = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, Rt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, wt = (e, o) => e ? `${e}/${o.text}` : o.text, rt = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => rt(n, o))) ?? !1 : !1;
}, Ge = (e, o) => !!(o && e.path === o), Sr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return Rt(r) ? Sr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), rr = (e) => {
  const o = _o(e);
  if (!o)
    return "#ffffff";
  const [r, n, s] = o.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
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
}, Vn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), wr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", ui = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", fi = hr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, be = "@media (prefers-reduced-motion: reduce)", oe = 6, Er = "9, 193, 174", Yn = d.createContext(
  void 0
), To = d.createContext(
  void 0
), Rr = (e) => d.useContext(To) ?? e, Ao = () => {
  const e = d.useContext(Yn), o = e ? _o(e) : null;
  return o ? o.join(", ") : Er;
}, pi = (e, o, r = Er) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${ui(e)}, 0 0 0 1px ${wr(e)}`
}), Co = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: wr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${oe}px`,
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
`, qn = (e, o = Er, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Ro = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: nr(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${nr(e, 0.45)}`
}, hi = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${wr(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${oe}px`,
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
}, mi = 100, Zn = 80, bo = 56, Ht = 72, Xt = 64, de = 44, jt = 24, Oo = 4, ht = 8, Jn = oe, Qn = { xs: 2, md: "18px" }, es = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, $o = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), gi = (e, o, r) => e && $o(o, r), ts = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || o ? 0 : r === "rail-labeled" ? Zn : $o(n, r) ? s ? 0 : Xt + 2 * ht : r === "collapsible" || r === "panel" ? Ht : mi, os = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), rs = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), ns = { stiffness: 320, damping: 24 }, ss = { stiffness: 320, damping: 28 }, Tr = { stiffness: 520, damping: 20 }, Ar = { stiffness: 380, damping: 36 }, Mo = { stiffness: 260, damping: 28 }, xi = "cubic-bezier(0.32, 1.28, 0.52, 1)", bi = 420, un = 60, vi = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), fn = /* @__PURE__ */ new Map(), ve = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, s = fn.get(n);
  if (s)
    return s;
  if (!vi)
    return { easing: xi, duration: bi };
  const i = 1 / 600;
  let a = 0, c = 0, u = 0, l = 1 / un;
  const h = [0];
  for (; u < 3; ) {
    const m = (-e * (a - 1) - o * c) / r;
    if (c += m * i, a += c * i, u += i, u >= l && (h.push(a), l += 1 / un, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  h[h.length - 1] = 1;
  const p = {
    easing: `linear(${h.map((m) => Number(m.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return fn.set(n, p), p;
}, Vt = (e) => !!(e && typeof e.animate == "function"), Tt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, yi = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, Si = (e, o = 1.14) => {
  if (!Vt(e) || Tt())
    return;
  const r = ve(Tr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, wi = 1.6, is = 110, st = 110, bt = ve(Ar), Ei = (e, o = is) => e >= o ? 0 : (1 + Math.cos(Math.PI * e / o)) / 2, as = (e, {
  enabled: o,
  axis: r,
  itemSelector: n,
  glyphSelector: s,
  transition: i,
  maxScale: a = wi,
  reach: c = is,
  carrierSelector: u
}) => {
  const l = d.useRef(0), h = d.useRef(
    /* @__PURE__ */ new WeakMap()
  ), p = d.useRef(/* @__PURE__ */ new Set()), m = d.useRef(/* @__PURE__ */ new Set()), g = i ? `, ${i}` : "", x = (b) => u ? b.closest(u) : null, w = (b) => {
    var $;
    const [I = "0", L = "0"] = ((($ = x(b)) == null ? void 0 : $.style.translate) ?? "").split(" ").filter(Boolean);
    return r === "x" ? parseFloat(I) || 0 : parseFloat(L) || 0;
  }, R = (b) => {
    const I = b.getBoundingClientRect();
    return (r === "x" ? I.left + I.width / 2 : I.top + I.height / 2) - w(b);
  }, A = (b) => {
    const I = b.getBoundingClientRect();
    return Array.from(b.querySelectorAll(n)).filter((L) => {
      var G;
      const $ = (G = L.parentElement) == null ? void 0 : G.closest(n);
      if ($ && b.contains($))
        return !1;
      const C = L.getBoundingClientRect(), k = R(L), B = r === "x" ? k : C.left + C.width / 2, z = r === "x" ? C.top + C.height / 2 : k;
      return C.width > 0 && B >= I.left && B <= I.right && z >= I.top && z <= I.bottom;
    }).map((L) => ({
      item: L,
      glyph: s ? L.querySelector(s) : L
    })).filter(
      (L) => L.glyph !== null
    );
  }, v = (b, I) => {
    if (I === b)
      return a;
    let L = h.current.get(I);
    if (L === void 0) {
      const k = Number(I.style.scale) || 1, B = I.getBoundingClientRect();
      L = { width: B.width / k, height: B.height / k }, h.current.set(I, L);
    }
    if (!(L.width > 0 && L.height > 0))
      return 1;
    const $ = b.getBoundingClientRect(), C = Math.min(
      $.width / L.width,
      $.height / L.height
    );
    return Math.max(1, Math.min(C, a));
  }, E = () => {
    var b, I, L, $;
    cancelAnimationFrame(l.current), p.current.forEach((C) => {
      C.style.transition = `scale ${bt.duration}ms ${bt.easing}${g}`, C.style.scale = "";
    }), p.current.clear(), m.current.forEach((C) => {
      C.style.transition = `translate ${bt.duration}ms ${bt.easing}`, C.style.translate = "";
    }), m.current.clear(), (b = e.current) == null || b.style.setProperty(
      "--dock-scale-timing",
      `${bt.duration}ms ${bt.easing}`
    ), (I = e.current) == null || I.style.removeProperty("--dock-spread"), (L = e.current) == null || L.style.removeProperty("--dock-max-scale"), ($ = e.current) == null || $.style.removeProperty("--dock-active-scale");
  }, M = (b, I, L) => {
    const $ = r === "x" ? I : L, C = A(b).map(({ item: z, glyph: G }) => {
      const T = R(z), H = 1 + (v(z, G) - 1) * Ei(Math.abs($ - T), c);
      G.style.transition = `scale ${st}ms ease-out${g}`, H > 1.001 ? (G.style.scale = H.toFixed(3), p.current.add(G)) : p.current.has(G) && (G.style.scale = "", p.current.delete(G));
      const se = r === "x" ? z.offsetWidth : z.offsetHeight;
      return { item: z, centre: T, scale: H, growth: (H - 1) * se };
    });
    b.style.setProperty(
      "--dock-scale-timing",
      `${st}ms ease-out`
    ), b.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...C.map(({ scale: z }) => z)).toFixed(3)
    );
    const k = C.find(({ item: z }) => z.dataset.active === "true");
    if (b.style.setProperty(
      "--dock-active-scale",
      ((k == null ? void 0 : k.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const B = C.reduce((z, { growth: G }) => z + G, 0);
    b.style.setProperty("--dock-spread", `${B.toFixed(1)}px`), C.forEach(({ item: z, centre: G, growth: T }) => {
      const H = x(z);
      if (!H)
        return;
      const se = C.reduce(
        (ye, fe) => fe.centre < G ? ye + fe.growth : ye,
        T / 2
      );
      H.style.transition = `translate ${st}ms ease-out`, Math.abs(se) > 0.1 ? (H.style.translate = r === "x" ? `${se.toFixed(1)}px 0` : `0 ${se.toFixed(1)}px`, m.current.add(H)) : m.current.has(H) && (H.style.translate = "", m.current.delete(H));
    });
  }, y = (b) => {
    if (b.pointerType && b.pointerType !== "mouse" || Tt())
      return;
    const I = b.currentTarget, { clientX: L, clientY: $ } = b;
    cancelAnimationFrame(l.current), l.current = requestAnimationFrame(() => {
      const C = I.getBoundingClientRect(), k = r === "x" ? $ : L, [B, z] = r === "x" ? [C.top, C.bottom] : [C.left, C.right];
      if (k < B || k > z) {
        E();
        return;
      }
      M(I, L, $);
    });
  }, _ = (b) => {
    const I = e.current;
    if (!o || !I || Tt())
      return;
    const L = b.getBoundingClientRect();
    M(I, L.left + L.width / 2, L.top + L.height / 2);
  };
  return d.useEffect(() => {
    o || E();
  }, [o]), d.useEffect(() => () => cancelAnimationFrame(l.current), []), {
    containerProps: o ? { onPointerMove: y, onPointerLeave: E, onScrollCapture: E } : {},
    swellOn: _,
    settle: E
  };
}, Yt = "data-rail-item", cs = `[${Yt}], button, [role="button"]`, At = d.createContext(!1), Cr = () => {
  const e = d.useContext(At), o = Xe(), r = d.useContext(To);
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
}, It = ve(Ar), Or = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: a = null
}) => {
  const c = d.useRef(null), u = Ao(), [l, h] = d.useState(null), p = d.useRef(null), m = d.useRef(null), g = (y, _) => {
    m.current = _;
    const b = _.getBoundingClientRect(), I = y.getBoundingClientRect(), L = n ?? b.width, $ = n ?? b.height, C = {
      top: Math.round(b.top - I.top + (b.height - $) / 2),
      left: Math.round(b.left - I.left + (b.width - L) / 2),
      width: Math.round(L),
      height: Math.round($)
    };
    h(
      (k) => k && k.visible && k.top === C.top && k.left === C.left && k.width === C.width && k.height === C.height ? k : { ...C, visible: !0, instant: !(k != null && k.visible) }
    );
  }, x = (y, _) => {
    var I;
    const b = (I = _ == null ? void 0 : _.closest) == null ? void 0 : I.call(_, r);
    return b && y.contains(b) ? b : null;
  }, w = (y) => {
    if (!e)
      return;
    const _ = x(y.currentTarget, y.target);
    _ && g(y.currentTarget, _);
  }, R = (y) => {
    if (!e)
      return;
    const _ = x(y.currentTarget, y.target);
    _ && y.target.matches(":focus-visible") && g(y.currentTarget, _);
  }, A = () => {
    var b;
    const y = (b = c.current) == null ? void 0 : b.parentElement, _ = i && (y == null ? void 0 : y.querySelector(i));
    return y && _ ? { container: y, item: _ } : null;
  }, v = () => {
    const y = A();
    if (y) {
      g(y.container, y.item);
      return;
    }
    m.current = null, h((_) => _ != null && _.visible ? { ..._, visible: !1 } : _);
  };
  d.useEffect(() => {
    var _, b;
    if (!e)
      return;
    const y = A();
    y ? g(y.container, y.item) : (b = (_ = c.current) == null ? void 0 : _.parentElement) != null && b.matches(":hover") || v();
  }, [e, a]);
  const E = (y) => {
    const _ = y.relatedTarget;
    (!_ || !y.currentTarget.contains(_)) && (y.currentTarget.matches(":hover") || v());
  };
  return d.useEffect(() => {
    const y = c.current;
    if (!(l != null && l.visible)) {
      p.current = null;
      return;
    }
    const _ = p.current;
    if (p.current = l.top, !Vt(y) || Tt() || _ === null || l.instant)
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
      { duration: It.duration, easing: "ease-out" }
    );
  }, [l == null ? void 0 : l.top, l == null ? void 0 : l.visible, l == null ? void 0 : l.instant]), {
    lens: e && l ? /* @__PURE__ */ t(
      O,
      {
        ref: c,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...qn(o, u),
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
          transition: l.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${st}ms ease-out)` : `translate ${It.duration}ms ${It.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${st}ms ease-out)`,
          [be]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: w,
      onMouseLeave: v,
      onFocus: R,
      onBlur: E,
      onScrollCapture: v
    } : {}
  };
}, Ri = (e, o, r = null) => {
  const n = Or({
    enabled: e,
    isDark: o,
    selector: cs,
    // The rail's buttons exactly, so the hover sits on the item
    size: de,
    radius: oe,
    pinSelector: `[${Yt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Ii = (e, o) => {
  let r = 0, n = 0, s = e;
  for (; s && s !== o; ) {
    r += s.offsetTop, n += s.offsetLeft;
    const c = s.offsetParent;
    for (let u = s.parentElement; u && u !== o && (r -= u.scrollTop, n -= u.scrollLeft, u !== c); u = u.parentElement)
      ;
    s = c;
  }
  if (s === o && e.offsetWidth)
    return {
      top: Math.round(r),
      left: Math.round(n),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const i = e.getBoundingClientRect(), a = o.getBoundingClientRect();
  return {
    top: Math.round(i.top - a.top),
    left: Math.round(i.left - a.left),
    width: Math.round(i.width),
    height: Math.round(i.height)
  };
}, _i = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const s = d.useRef(null), [i, a] = d.useState(null), c = d.useRef(null), u = d.useCallback(
    (h) => {
      const p = n.current;
      if (!e || !p)
        return;
      const m = p.querySelector(
        `[${Yt}][data-active="true"]`
      );
      if (!m) {
        a(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const g = Ii(m, p);
      a(
        (x) => x && x.visible && x.top === g.top && x.left === g.left && x.width === g.width && x.height === g.height ? x : {
          ...g,
          visible: !0,
          instant: h || !(x != null && x.visible)
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
    let p = 0;
    const m = () => {
      cancelAnimationFrame(p), p = requestAnimationFrame(() => u(!1));
    }, g = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    g == null || g.observe(h);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(m);
    return x == null || x.observe(h, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(p), g == null || g.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, u]), d.useEffect(() => {
    const h = s.current;
    if (!(i != null && i.visible)) {
      c.current = null;
      return;
    }
    const p = c.current;
    if (c.current = i.top, p === null || i.instant || !Vt(h) || Tt())
      return;
    const m = Math.min(Math.abs(i.top - p) / 600, 0.08);
    m && h.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - m / 2}, ${1 + m})`,
          offset: 0.35
        },
        { transform: "scale(1, 1)" }
      ],
      { duration: It.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ t(
    O,
    {
      ref: s,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": i.visible ? "true" : "false",
      sx: {
        ...Ro(r, o),
        borderRadius: `${oe}px`,
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
        transition: i.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${st}ms ease-out)` : `translate ${It.duration}ms ${It.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${st}ms ease-out)`,
        [be]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Te = 52, Vo = 36, Ti = 1.8, Ai = Te / 2, Yo = "[data-flyout-tile]", $r = 4, Mr = 32, sr = Mr + $r, Ci = 104, Pt = 24, ls = "background 160ms ease, color 160ms ease, transform 120ms ease", ir = 10, ds = 10, pn = ds + 2, Oi = 18, $i = 1.08, Mi = 1190, Li = 1195, hn = 120, mn = ve(ns), Et = ve(Ar), gn = ve(Mo), xn = 8192, Di = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), a = e + r, c = o + n, u = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${xn} V ${xn} H 0 Z M ${e + i} ${o} H ${a - i} ${u} ${a} ${o + i} V ${c - i} ${u} ${a - i} ${c} H ${e + i} ${u} ${e} ${c - i} V ${o + i} ${u} ${e + i} ${o} Z')`;
}, ki = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: s,
  activePath: i,
  focusFirst: a = !1,
  onNavigate: c,
  onClose: u,
  panelProps: l,
  accentColor: h,
  activeBackgroundColor: p,
  activeForegroundColor: m,
  solidSurface: g
}) => {
  const x = Xe(), w = x.palette.mode === "dark", R = !!(e && r), A = d.useRef(null);
  e && o && (A.current = { group: e, key: o });
  const v = A.current, E = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const N = r.getBoundingClientRect();
      return {
        x: n,
        y: N.top,
        left: n,
        right: n,
        top: N.top,
        bottom: N.bottom,
        width: 0,
        height: N.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), M = d.useRef(E);
  E && (M.current = E), d.useEffect(() => {
    r && Si(r, $i);
  }, [r]);
  const [y, _] = d.useState(!1);
  d.useEffect(() => {
    if (!R) {
      _(!1);
      return;
    }
    let N = 0;
    const W = requestAnimationFrame(() => {
      N = requestAnimationFrame(() => _(!0));
    });
    return () => {
      cancelAnimationFrame(W), cancelAnimationFrame(N);
    };
  }, [R]);
  const b = d.useMemo(
    () => v ? Sr(v.group.subitems, v.group.icon) : [],
    [v]
  ), I = d.useRef(null), L = as(I, {
    enabled: R,
    axis: "x",
    itemSelector: Yo,
    transition: ls,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: Ti,
    // The neighbours make room as it grows
    carrierSelector: '[role="menuitem"]'
  }), $ = d.useRef(void 0), C = d.useCallback((N) => {
    var Y;
    (Y = $.current) == null || Y.call($), $.current = void 0;
    const W = N == null ? void 0 : N.parentElement;
    if (!N || !W || typeof MutationObserver > "u")
      return;
    const Q = () => {
      const ie = N.offsetLeft - N.offsetWidth / 2, J = ie + N.offsetWidth;
      let U = 0;
      W.querySelectorAll(Yo).forEach((ee) => {
        var me;
        if (ee.dataset.flyoutGrows !== "up")
          return;
        const we = parseFloat(ee.style.scale) || 1, pe = parseFloat(
          ((me = ee.closest('[role="menuitem"]')) == null ? void 0 : me.style.translate) ?? ""
        ) || 0, De = ee.offsetLeft + pe - (we - 1) * Te / 2;
        De < J && De + we * Te > ie && (U = Math.max(
          U,
          (we - 1) * Te - ee.offsetTop - pn
        ));
      });
      const Je = U > 0 ? `0 ${(-U).toFixed(1)}px` : "";
      N.style.translate !== Je && (N.style.translate = Je);
    }, j = new MutationObserver(Q);
    j.observe(W, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), $.current = () => j.disconnect();
  }, []), k = d.useRef([]), [B, z] = d.useState([]);
  d.useLayoutEffect(() => {
    const N = () => {
      const Q = b.map(
        (j, Y) => {
          var ie;
          return ((ie = k.current[Y]) == null ? void 0 : ie.offsetWidth) ?? 0;
        }
      );
      z(
        (j) => j.length === Q.length && j.every((Y, ie) => Y === Q[ie]) ? j : Q
      );
    };
    if (N(), typeof ResizeObserver > "u")
      return;
    const W = new ResizeObserver(N);
    return k.current.slice(0, b.length).forEach((Q) => Q && W.observe(Q)), () => W.disconnect();
  }, [b]);
  const G = Fi(B, b.length), T = d.useRef([]), H = b.findIndex(
    ({ sub: N }) => Ge(N, i)
  ), [se, ye] = d.useState(0);
  d.useEffect(() => {
    ye(Math.max(H, 0));
  }, [o]), d.useEffect(() => {
    if (!R || !a)
      return;
    const N = setTimeout(() => {
      var W;
      return (W = T.current[0]) == null ? void 0 : W.focus();
    });
    return () => clearTimeout(N);
  }, [R, a, o]);
  const fe = (N) => {
    var Q;
    const W = Math.max(0, Math.min(N, b.length - 1));
    ye(W), (Q = T.current[W]) == null || Q.focus();
  }, it = (N, W) => {
    var Q;
    switch (N.key) {
      case "ArrowRight":
        fe(W + 1);
        break;
      case "ArrowLeft":
        W === 0 ? u(!0) : fe(W - 1);
        break;
      case " ":
        (Q = T.current[W]) == null || Q.click();
        break;
      case "Home":
        fe(0);
        break;
      case "End":
        fe(b.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    N.preventDefault();
  }, Se = x.palette.text.primary, Pe = w ? x.palette.text.primary : h;
  return /* @__PURE__ */ S(Me, { children: [
    /* @__PURE__ */ t(mr, { in: R, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      O,
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
          ...s ? { clipPath: Di(s) } : {},
          zIndex: Mi,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: w ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)"
        }
      }
    ) }),
    /* @__PURE__ */ t(
      gr,
      {
        open: R,
        anchorEl: E ?? M.current,
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
          zIndex: Li,
          transition: y ? `transform ${Et.duration}ms ${Et.easing}` : "none",
          [be]: { transition: "none" }
        },
        children: ({ TransitionProps: N }) => /* @__PURE__ */ t(
          Ni,
          {
            in: (N == null ? void 0 : N.in) ?? R,
            onEnter: N == null ? void 0 : N.onEnter,
            onExited: N == null ? void 0 : N.onExited,
            panelProps: l,
            groupText: v == null ? void 0 : v.group.text,
            children: v ? /* @__PURE__ */ S(
              O,
              {
                ref: I,
                role: "menu",
                "aria-label": v.group.text,
                ...L.containerProps,
                onBlur: (W) => {
                  W.currentTarget.contains(
                    W.relatedTarget
                  ) || L.settle();
                },
                sx: {
                  position: "relative",
                  width: G.width,
                  height: sr + Te + $r + Mr,
                  // The panel stretches as the dock pushes
                  // the pages along, as the Dock's shelf does
                  mr: "var(--dock-spread, 0px)",
                  transition: `margin-right ${Et.duration}ms ${Et.easing}`,
                  [be]: { transition: "none" }
                },
                children: [
                  /* @__PURE__ */ t(
                    O,
                    {
                      component: "span",
                      ref: C,
                      "aria-hidden": !0,
                      "data-testid": "sidebar-flyout-heading",
                      sx: {
                        // Above the tiles and centred over them, so
                        // they stay centred on the rail icon; the
                        // row's name already labels it. It rises only
                        // when a swelling tile would reach it (see the
                        // effect on `headingRef`)
                        position: "absolute",
                        bottom: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        mb: `${pn}px`,
                        transition: `translate ${st}ms ease-out`,
                        [be]: {
                          transition: "none"
                        },
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        // The pages' own name colour
                        color: Co(w).color
                      },
                      children: v.group.text
                    }
                  ),
                  b.map(({ sub: W, icon: Q }, j) => /* @__PURE__ */ t(
                    fs,
                    {
                      ref: (Y) => {
                        T.current[j] = Y;
                      },
                      nameRef: (Y) => {
                        k.current[j] = Y;
                      },
                      tileLeft: G.tiles[j],
                      nameLeft: G.names[j],
                      sub: W,
                      icon: Q,
                      index: j,
                      active: Ge(
                        W,
                        i
                      ),
                      tabIndex: j === se ? 0 : -1,
                      onClick: (Y) => {
                        _t(Y) && (Y.preventDefault(), c(W.path), u());
                      },
                      onKeyDown: (Y) => it(Y, j),
                      onFocus: (Y) => {
                        ye(j);
                        const ie = Y.currentTarget.querySelector(
                          Yo
                        );
                        ie && Y.currentTarget.matches(
                          ":focus-visible"
                        ) && L.swellOn(ie);
                      },
                      accentColor: h,
                      activeBackgroundColor: p,
                      activeForegroundColor: m,
                      labelColor: Se,
                      iconColor: Pe,
                      surface: g,
                      isDark: w
                    },
                    W.path
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
}, Ni = ({
  in: e,
  onEnter: o,
  onExited: r,
  panelProps: n,
  groupText: s,
  children: i
}) => {
  const a = d.useRef(null), c = (l) => {
    a.current = l;
    const { ref: h } = n;
    typeof h == "function" ? h(l) : h && (h.current = l);
  }, u = d.useRef(e);
  return u.current = e, d.useLayoutEffect(() => {
    const l = a.current;
    if (yi(l), e) {
      o == null || o(), Vt(l) && !Tt() && l.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: gn.duration, easing: gn.easing }
      );
      return;
    }
    if (!Vt(l)) {
      r == null || r();
      return;
    }
    let h = !1;
    const p = () => {
      !h && !u.current && (h = !0, r == null || r());
    }, m = setTimeout(p, hn + 100);
    return l.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: hn,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(p, p), () => clearTimeout(m);
  }, [e]), /* @__PURE__ */ t(
    O,
    {
      ref: c,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": s,
      sx: {
        position: "relative",
        // No surface of its own: the scrim's gradient sits behind it.
        // A tile the dock grows pops out past it.
        p: `${ds}px`,
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
}, us = (e) => e % 2 === 1, Fi = (e, o) => {
  const r = [], n = [];
  let s = -Pt, i = -Pt, a = -Pt;
  for (let c = 0; c < o; c += 1) {
    const u = e[c] || Te, l = us(c), h = l ? i : a, p = Math.max(
      s + Pt + Te / 2,
      h + Pt + u / 2
    );
    s = p + Te / 2, l ? i = p + u / 2 : a = p + u / 2, r.push(Math.round(p - Te / 2)), n.push(Math.round(p - u / 2));
  }
  return {
    tiles: r,
    names: n,
    width: Math.round(Math.max(s, i, a, 0))
  };
}, fs = d.forwardRef(
  ({
    nameRef: e,
    tileLeft: o,
    nameLeft: r,
    sub: n,
    icon: s,
    index: i,
    active: a,
    tabIndex: c,
    onClick: u,
    onKeyDown: l,
    onFocus: h,
    accentColor: p,
    activeBackgroundColor: m,
    activeForegroundColor: g,
    labelColor: x,
    iconColor: w,
    surface: R,
    isDark: A
  }, v) => {
    const E = us(i), M = Co(A, R), y = {
      animation: `${fi} ${mn.duration}ms ${mn.easing} both`,
      animationDelay: `${i * Oi}ms`,
      [be]: { animation: "none" }
    }, _ = {
      background: m ?? p,
      color: g,
      "& .MuiSvgIcon-root": { color: g }
    }, b = {
      background: `color-mix(in srgb, ${p} ${A ? 20 : 12}%, ${R})`
    }, I = A ? M.color : p, L = {
      "& [data-flyout-tile]": a ? {} : b,
      "& [data-flyout-name]": { color: I, fontWeight: 600 }
    }, $ = {
      ...M,
      border: "none",
      // Lifted a little more than a resting label: they float over
      // the page
      boxShadow: A ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)"
    };
    return /* @__PURE__ */ S(
      Ue,
      {
        ref: v,
        component: "a",
        href: n.path,
        role: "menuitem",
        tabIndex: c,
        "aria-current": a ? "page" : void 0,
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": a ? "true" : "false",
        onClick: u,
        onKeyDown: l,
        onFocus: h,
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
          color: x,
          textDecoration: "none",
          "&:hover": L,
          "&.Mui-focusVisible": {
            ...L,
            "& [data-flyout-tile]": {
              ...a ? {} : b,
              outline: "2px solid",
              outlineColor: p,
              outlineOffset: 2
            }
          },
          "&:active [data-flyout-tile]": { transform: "scale(0.94)" },
          [be]: {
            "&:active [data-flyout-tile]": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(
            O,
            {
              "data-flyout-bridge": "",
              "aria-hidden": !0,
              sx: {
                left: o,
                top: 0,
                width: Te,
                height: "100%"
              }
            }
          ),
          /* @__PURE__ */ t(
            O,
            {
              "data-flyout-tile": "",
              "data-flyout-grows": E ? "down" : "up",
              sx: {
                ...$,
                left: o,
                top: sr,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: Te,
                height: Te,
                p: 0,
                borderRadius: `${Ai}px`,
                // Grows out of the row, away from its name
                transformOrigin: E ? "center top" : "center bottom",
                transition: `scale ${Et.duration}ms ${Et.easing}, ${ls}`,
                "& .MuiSvgIcon-root": {
                  fontSize: Vo,
                  color: w,
                  transition: "color 160ms ease"
                },
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                '& [role="img"], & [role="img"] > img': {
                  width: Vo,
                  height: Vo
                },
                ...a ? _ : {},
                ...y
              },
              children: s
            }
          ),
          /* @__PURE__ */ t(
            O,
            {
              "data-flyout-slot": "",
              sx: {
                left: r,
                top: E ? 0 : sr + Te + $r,
                height: Mr,
                display: "flex",
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: E ? "flex-end" : "flex-start"
              },
              children: /* @__PURE__ */ t(
                O,
                {
                  component: "span",
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": n.text,
                  sx: {
                    // No card of its own: text on the panel
                    color: M.color,
                    px: 1,
                    py: 0,
                    fontSize: "0.75rem",
                    lineHeight: "16px",
                    // A long name wraps, split evenly, so it stays as
                    // compact as its tile; never cut short
                    maxWidth: Ci,
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
                    ...a ? { color: I } : {},
                    transition: "color 160ms ease",
                    ...y
                  },
                  children: n.text
                }
              )
            }
          )
        ]
      }
    );
  }
);
fs.displayName = "FlyoutTile";
const Wi = 50, Pi = 250, Bi = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const s = d.useRef(/* @__PURE__ */ new Map()), i = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), u = () => {
    clearTimeout(a.current), a.current = void 0;
  }, l = () => {
    clearTimeout(c.current), c.current = void 0;
  }, h = (A, v, E = !1) => {
    u(), l(), r({ key: A, pinned: v, focusFirst: E });
  }, p = d.useCallback((A = !1) => {
    var E, M;
    u(), l();
    const v = (E = n.current) == null ? void 0 : E.key;
    r(null), A && v && ((M = s.current.get(v)) == null || M.focus());
  }, []), m = () => {
    u(), !(!n.current || n.current.pinned) && (l(), c.current = setTimeout(() => p(), Pi));
  };
  d.useEffect(() => {
    e || p();
  }, [e, p]), d.useEffect(
    () => () => {
      u(), l();
    },
    []
  );
  const g = o !== null;
  return d.useEffect(() => {
    if (!g)
      return;
    const A = (M) => {
      var _;
      const y = M;
      return y ? (_ = i.current) != null && _.contains(y) ? !0 : [...s.current.values()].some((b) => b.contains(y)) : !1;
    }, v = (M) => {
      A(M.target) || p();
    }, E = (M) => {
      var y;
      M.key === "Escape" && p(
        !!((y = i.current) != null && y.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", E), () => {
      document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", E);
    };
  }, [g, p]), {
    state: o,
    close: p,
    triggerProps: (A) => ({
      ref: (v) => {
        v ? s.current.set(A, v) : s.current.delete(A);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        l();
        const v = n.current;
        if (v) {
          v.key !== A && h(A, v.pinned);
          return;
        }
        u(), a.current = setTimeout(
          () => h(A, !1),
          Wi
        );
      },
      onMouseLeave: m,
      onClick: (v) => {
        var E;
        if (v.detail === 0) {
          h(A, !0, !0);
          return;
        }
        ((E = n.current) == null ? void 0 : E.key) !== A && h(A, !1);
      },
      onKeyDown: (v) => {
        v.key === "ArrowRight" && (v.preventDefault(), h(A, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: l,
      onMouseLeave: m
    },
    onRailLeafEnter: () => {
      u(), n.current && !n.current.pinned && p();
    },
    getTrigger: (A) => s.current.get(A) ?? null
  };
}, zi = 264, Gi = 72, bn = 64, fo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Hi = 16, Ui = 14, Xi = 4, Ki = 2.5, vn = "0.7rem", yn = 22, po = ve(Tr), ft = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
  const i = d.useRef(null), [a, c] = d.useState(!1), u = d.useCallback(() => {
    const l = i.current;
    l && c(l.scrollWidth > l.clientWidth + 0.5);
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
    Ae,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
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
}, ji = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, Vi = 4, Yi = ({
  open: e,
  size: o = Hi
}) => e ? /* @__PURE__ */ t(Hs, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Gs, { sx: { fontSize: o, opacity: 0.75 } }), Sn = ({ open: e }) => /* @__PURE__ */ t(
  Us,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), ho = 600, pt = `${Oo}px`, qi = 1.4, vo = (Xt - de) / 2, Zi = (e) => {
  const o = Math.max(0, e - vo);
  return {
    pl: `${Math.max(0, vo - o)}px`,
    pr: `${Math.max(0, vo - e)}px`
  };
};
function Ji(e, o) {
  const [r, n] = d.useState(0);
  return d.useLayoutEffect(() => {
    const s = e.current;
    if (!o || !s) {
      n(0);
      return;
    }
    const i = () => {
      const c = getComputedStyle(s), u = parseFloat(c.borderLeftWidth) + parseFloat(c.borderRightWidth);
      n(Math.max(0, s.offsetWidth - s.clientWidth - u));
    };
    if (i(), typeof ResizeObserver > "u")
      return;
    const a = new ResizeObserver(i);
    return a.observe(s), s.firstElementChild && a.observe(s.firstElementChild), () => a.disconnect();
  }, [e, o]), r;
}
const mo = 8;
function Qi(e, o, r) {
  d.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const s = (u) => {
      const l = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((g) => g.offsetHeight > 0).pop();
      if (!l)
        return;
      const h = n.getBoundingClientRect(), p = l.getBoundingClientRect();
      let m = 0;
      p.top < h.top + mo ? m = p.top - h.top - mo : p.bottom > h.bottom - mo && (m = p.bottom - h.bottom + mo), m !== 0 && n.scrollBy({ top: m, behavior: u });
    }, i = requestAnimationFrame(() => s("smooth")), a = window.setTimeout(() => s("smooth"), 350), c = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return c == null || c.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(a), c == null || c.disconnect();
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
  title: a,
  onBrandClick: c,
  brandMenuOpen: u,
  showHeaderBar: l = !1,
  headerBackgroundColor: h,
  headerForegroundColor: p,
  brandColor: m,
  activeAccentColor: g = "#01584f",
  activeBackgroundColor: x,
  groupArrowColor: w,
  groupAccentColor: R,
  activeForegroundColor: A,
  foregroundColor: v,
  surfaceBackgroundColor: E,
  flyoutSurfaceColor: M,
  collapsed: y = !1,
  expandedWidth: _ = zi,
  collapsedWidth: b = Gi,
  showLabels: I = !1,
  topInsetPx: L = 0,
  topContent: $,
  footer: C,
  submenuMode: k = "inline"
}) => {
  var ae;
  const B = Xe(), z = B.palette.mode === "dark", G = d.useContext(To), T = k === "flyout" && y && !I, H = Bi(T), se = d.useRef(null), ye = d.useRef(null), fe = d.useRef(null);
  Qi(fe, r, y);
  const it = Ji(fe, T), Se = Ri(T, z, ((ae = H.state) == null ? void 0 : ae.key) ?? null), Pe = as(se, {
    enabled: T,
    axis: "y",
    itemSelector: cs,
    maxScale: qi,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: de + Oo,
    transition: `transform ${po.duration}ms ${po.easing}, background-color 160ms ease`
  }), N = {
    ...Se.containerProps,
    ...Pe.containerProps,
    ...T ? {
      onScrollCapture: () => {
        var f, D;
        (D = (f = Se.containerProps).onScrollCapture) == null || D.call(f), Pe.settle();
      }
    } : {}
  }, W = x ?? g, Q = _i({
    enabled: T,
    isDark: z,
    color: W,
    containerRef: ye
  }), { close: j } = H;
  d.useEffect(() => {
    j();
  }, [r, j]);
  const [Y, ie] = d.useState(
    {}
  ), J = A ?? rr(W), U = {
    bgcolor: W,
    color: J,
    "& .MuiListItemIcon-root": { color: J }
  }, Je = {
    bgcolor: W,
    color: J,
    borderRadius: "8px"
  }, ee = R ?? Kt(g), we = E ?? (z ? B.palette.background.paper : "#ffffff"), pe = v ?? (z ? "text.primary" : g), De = h ?? we, me = p ?? (h ? rr(De) : v ?? (z ? B.palette.text.primary : g)), Qe = Kt(me), ge = (f) => {
    n == null || n(f);
  }, Ce = (f) => f ? {
    component: "a",
    href: f,
    onClick: (D) => {
      _t(D) && (D.preventDefault(), ge(f));
    }
  } : {}, he = (f, D) => {
    ie((X) => ({ ...X, [f]: !D }));
  }, Ke = (f, D) => Y[D] ?? rt(f, r), et = (f, D, X) => ({
    color: f ? J : pe,
    bgcolor: f ? W : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? J : pe,
      minWidth: X
    },
    "&:hover": f || I ? U : { bgcolor: D }
  }), at = {
    "&.Mui-selected": {
      bgcolor: W
    },
    "&.Mui-selected:hover": U
  }, Ct = (f) => {
    const D = Ge(f, r), X = /* @__PURE__ */ S(
      uo,
      {
        disabled: !f.path,
        selected: D,
        ...Ce(f.path),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": D ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...f.action && { pr: 6 },
          ...f.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...et(
            D,
            ee,
            f.subtitle ? 48 : 36
          ),
          ...at
        },
        children: [
          /* @__PURE__ */ t(_e, { children: f.icon }),
          /* @__PURE__ */ t(
            He,
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
                O,
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
      return X;
    const { action: P } = f;
    return /* @__PURE__ */ S(O, { sx: { position: "relative" }, children: [
      X,
      /* @__PURE__ */ t(Ae, { title: P.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        Ie,
        {
          "aria-label": P.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            P.onClick(), s == null || s();
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
            borderColor: D ? "rgba(255, 255, 255, 0.35)" : ee,
            color: D ? J : pe,
            "&:hover": {
              bgcolor: D ? "rgba(255, 255, 255, 0.15)" : ee
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: D ? J : pe,
              outlineOffset: 1
            }
          },
          children: P.icon
        }
      ) })
    ] }, f.text);
  }, Ot = (f) => {
    const D = rt(f, r), X = Ge(f, r), P = wt("", f), K = Ke(f, P);
    return /* @__PURE__ */ S(
      O,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: D ? ee : "transparent"
        },
        children: [
          /* @__PURE__ */ S(
            uo,
            {
              onClick: () => he(P, K),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": X ? "true" : "false",
              "aria-expanded": K,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...et(X, ee, 36)
              },
              children: [
                /* @__PURE__ */ t(_e, { children: f.icon }),
                /* @__PURE__ */ t(
                  He,
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
                /* @__PURE__ */ t(Sn, { open: K })
              ]
            }
          ),
          /* @__PURE__ */ t(nn, { in: K, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            O,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (q) => Qt(q, P, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, Qt = (f, D, X) => {
    const P = wt(D, f), K = Xi + (X - 1) * Ki;
    if (Rt(f)) {
      const xe = rt(f, r), ce = Ge(f, r), le = Ke(f, P);
      return /* @__PURE__ */ S(O, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ S(
          uo,
          {
            onClick: () => he(P, le),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": xe ? "true" : "false",
            "aria-expanded": le,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: K,
              ...et(ce, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(_e, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                He,
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
              /* @__PURE__ */ t(Sn, { open: le })
            ]
          }
        ),
        /* @__PURE__ */ t(nn, { in: le, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(O, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (Do) => Qt(Do, P, X + 1)
        ) }) })
      ] }, P);
    }
    const q = Ge(f, r);
    return /* @__PURE__ */ S(
      uo,
      {
        selected: q,
        disabled: !f.path,
        ...Ce(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": q ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: K,
          ...et(q, "action.hover", 32),
          ...at
        },
        children: [
          f.icon ? /* @__PURE__ */ t(_e, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            He,
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
      P
    );
  }, eo = (f, D, X, P, K, q) => {
    const xe = !K, ce = /* @__PURE__ */ S(
      Ie,
      {
        "aria-label": D,
        disabled: xe,
        ...Ce(K),
        onMouseEnter: T ? H.onRailLeafEnter : void 0,
        ...T ? { [Yt]: "" } : {},
        "data-testid": (q == null ? void 0 : q.testId) ?? `sidebar-item-${D}`,
        "data-active": P ? "true" : "false",
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
          color: P ? J : pe,
          bgcolor: P ? W : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: yn
          },
          "&:hover": Je,
          ...fo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: T ? de : 44,
          height: T ? de : 44,
          color: P ? J : pe,
          bgcolor: P ? W : "transparent",
          borderRadius: P ? "8px" : "50%",
          "&:hover": {
            bgcolor: P ? W : q != null && q.insideGroup ? "action.hover" : ee,
            borderRadius: "8px"
          },
          ...fo,
          ...T ? oo(P) : {}
        },
        children: [
          X,
          I ? /* @__PURE__ */ t(
            ft,
            {
              text: D,
              variant: "caption",
              center: !0,
              fontSize: vn
            }
          ) : null
        ]
      }
    );
    return I ? xe ? /* @__PURE__ */ t("span", { children: ce }, f) : /* @__PURE__ */ t(d.Fragment, { children: ce }, f) : /* @__PURE__ */ t(
      Ae,
      {
        title: D,
        placement: "right",
        arrow: !T,
        ...T ? ct : {},
        children: xe ? /* @__PURE__ */ t("span", { children: ce }) : ce
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
    borderRadius: `${oe}px`,
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
      tooltip: { sx: Co(z, G) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, $t = (f) => {
    var K;
    const D = rt(f, r), X = wt("", f), P = ((K = H.state) == null ? void 0 : K.key) === X;
    return /* @__PURE__ */ t(
      O,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          Ie,
          {
            ...H.triggerProps(X),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": P,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": D ? "true" : "false",
            "data-open": P ? "true" : "false",
            [Yt]: "",
            sx: {
              position: "relative",
              width: de,
              height: de,
              color: D ? J : pe,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: D ? W : "transparent",
              ...oo(D),
              // The icon stays centred, in line with every other
              // icon down the rail; the arrow sits in the room
              // beside it
              "&::after": {
                content: '""',
                position: "absolute",
                // Just past the button, in the rail's side gutter,
                // clear of the icon
                right: -Vi,
                top: "50%",
                transform: "translateY(-50%)",
                width: 5,
                height: 8,
                bgcolor: w ?? "currentColor",
                mask: `${ji} center / contain no-repeat`,
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
    const D = rt(f, r), X = Ge(f, r), P = wt("", f), K = Ke(f, P), q = /* @__PURE__ */ S(
      Ie,
      {
        "aria-label": f.text,
        "aria-expanded": K,
        onClick: () => he(P, K),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": X ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: I ? 0.25 : 0,
          width: I ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...I ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: X ? J : pe,
          bgcolor: X ? W : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": I ? { bgcolor: W, color: J } : {
            bgcolor: X ? W : "transparent"
          },
          ...fo
        },
        children: [
          I ? /* @__PURE__ */ t(
            O,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: yn
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
              fontSize: vn
            }
          ) : null,
          /* @__PURE__ */ t(Yi, { open: K, size: Ui })
        ]
      }
    ), xe = I ? q : /* @__PURE__ */ t(Ae, { title: f.text, placement: "right", arrow: !0, children: q });
    return /* @__PURE__ */ S(
      O,
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
          bgcolor: D ? ee : "transparent",
          ...I ? {} : { "&:hover": { bgcolor: ee } }
        },
        children: [
          xe,
          K ? Sr(f.subitems, f.icon).map(
            ({ sub: ce, icon: le }) => eo(
              ce.path,
              ce.text,
              le,
              Ge(ce, r),
              ce.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${ce.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, lt = (f) => /* @__PURE__ */ t(
    O,
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
        Ge(f, r),
        f.path,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), mt = (f) => Rt(f) ? T ? $t(f) : y ? ro(f) : Ot(f) : y ? lt(f) : Ct(f), Mt = (f) => /* @__PURE__ */ t(
    Le,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: y ? "center" : "stretch"
      },
      children: f.map(
        (D, X) => D.dividerAfter && X < f.length - 1 ? /* @__PURE__ */ S(d.Fragment, { children: [
          mt(D),
          /* @__PURE__ */ t(
            Ze,
            {
              "data-testid": `sidebar-divider-${D.text}`,
              sx: {
                alignSelf: "stretch",
                my: T ? pt : 1,
                borderColor: "divider"
              }
            }
          )
        ] }, D.text) : mt(D)
      )
    }
  ), Lt = y ? b : _, Lo = () => {
    var xe, ce;
    const { state: f } = H, D = f ? [...e, ...o].find(
      (le) => Rt(le) && wt("", le) === f.key
    ) ?? null : null, X = D ? ((xe = se.current) == null ? void 0 : xe.getBoundingClientRect().right) ?? b : b, P = D ? ((ce = se.current) == null ? void 0 : ce.closest("[data-rail-surface]")) ?? se.current : null, K = P == null ? void 0 : P.getBoundingClientRect(), q = P && K ? {
      left: K.left,
      top: K.top,
      width: K.width,
      height: K.height,
      radius: parseFloat(
        getComputedStyle(P).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      ki,
      {
        group: D,
        groupKey: D ? f.key : null,
        anchor: D ? H.getTrigger(f.key) : null,
        railEdge: X,
        railShape: q,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: ge,
        onClose: H.close,
        panelProps: H.flyoutProps,
        accentColor: g,
        activeBackgroundColor: x,
        activeForegroundColor: J,
        solidSurface: M ?? we
      }
    );
  }, gt = l ? /* @__PURE__ */ t(
    O,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...T ? { pt: "12px", pb: "12px" } : {
          height: bn,
          minHeight: bn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: De
      },
      children: i || a ? /* @__PURE__ */ t(
        Eo,
        {
          logo: i,
          title: y ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: u,
          color: m ?? me,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, no = !l && i ? /* @__PURE__ */ t(
    O,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: T ? pt : 1
      },
      children: /* @__PURE__ */ t(
        Eo,
        {
          logo: i,
          appName: a || "App",
          onClick: c,
          menuOpen: u,
          color: m ?? me,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, xt = I ? 0.5 : T ? 0.75 : y ? 1 : 1.5;
  return /* @__PURE__ */ t(At.Provider, { value: T, children: /* @__PURE__ */ S(
    O,
    {
      ref: se,
      ...N,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": y ? "true" : "false",
      "data-labeled": I ? "true" : "false",
      sx: {
        width: Lt,
        minWidth: Lt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: we,
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
        ...T ? to : {}
      },
      children: [
        Se.lens,
        gt ?? no,
        $ ? /* @__PURE__ */ t(
          O,
          {
            sx: {
              flexShrink: 0,
              px: xt,
              pt: T ? 0 : 1,
              pb: T ? 0 : 1
            },
            children: $
          }
        ) : null,
        /* @__PURE__ */ t(
          O,
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
              ...T ? {
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
                width: T ? vo : 8
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
              ...T ? Zi(it) : { px: xt },
              pt: L && !l ? `${L}px` : T ? pt : 1,
              pb: T ? pt : 2
            },
            children: /* @__PURE__ */ S(
              O,
              {
                ref: ye,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  Q.glass,
                  Mt(e),
                  o.length > 0 ? /* @__PURE__ */ S(
                    O,
                    {
                      sx: { mt: "auto", pt: T ? pt : 2 },
                      children: [
                        C ? null : /* @__PURE__ */ t(
                          Ze,
                          {
                            sx: {
                              mb: T ? pt : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        Mt(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        C ? /* @__PURE__ */ t(
          O,
          {
            sx: {
              flexShrink: 0,
              px: xt,
              pb: 1.5,
              ...T ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: jt
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              O,
              {
                sx: {
                  borderTop: `1px solid ${Qe}`,
                  pt: T ? pt : 1.5
                },
                children: C
              }
            )
          }
        ) : null,
        T ? Lo() : null
      ]
    }
  ) });
}, cr = "var(--lumora-content-padding, 0px)", wn = `calc(${cr} * -1)`, al = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: a
}) => /* @__PURE__ */ t(
  O,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: wn,
        mt: o ? wn : 0,
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
      ...Array.isArray(a) ? a : [a]
    ],
    children: e
  }
), ea = ({ keys: e }) => /* @__PURE__ */ t(
  O,
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
), Oe = {
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
}, vt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, yt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, St = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, ps = Io(), Fe = ps.typography.pxToRem, Lr = (e) => {
  const o = e === "dark", r = [...ps.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? Oe[300] : Oe[200],
        main: Oe[400],
        dark: Oe[700],
        contrastText: Oe[50]
      },
      info: o ? {
        light: Oe[500],
        main: Oe[700],
        dark: Oe[900],
        contrastText: Oe[300]
      } : {
        light: Oe[100],
        main: Oe[300],
        dark: Oe[600],
        contrastText: $e[50]
      },
      warning: o ? { light: yt[400], main: yt[500], dark: yt[700] } : { light: yt[300], main: yt[400], dark: yt[800] },
      error: o ? { light: St[400], main: St[500], dark: St[700] } : { light: St[300], main: St[400], dark: St[800] },
      success: o ? { light: vt[400], main: vt[500], dark: vt[700] } : { light: vt[300], main: vt[400], dark: vt[800] },
      grey: $e,
      divider: o ? We($e[700], 0.6) : We($e[300], 0.4),
      background: o ? { default: $e[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: $e[400] } : { primary: $e[800], secondary: $e[600] },
      action: o ? {
        hover: We($e[600], 0.2),
        selected: We($e[600], 0.3)
      } : {
        hover: We($e[200], 0.2),
        selected: We($e[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Fe(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Fe(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Fe(30), lineHeight: 1.2 },
      h4: { fontSize: Fe(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Fe(20), fontWeight: 600 },
      h6: { fontSize: Fe(18), fontWeight: 600 },
      subtitle1: { fontSize: Fe(18) },
      subtitle2: { fontSize: Fe(14), fontWeight: 500 },
      body1: { fontSize: Fe(14) },
      body2: { fontSize: Fe(14), fontWeight: 400 },
      caption: { fontSize: Fe(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, ta = 6, oa = 8, En = (e, o) => typeof e == "object" ? e[o] : e, qo = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: a = !0,
  contentPadding: c = Qn,
  sidebarBackgroundColor: u,
  contentBackgroundColor: l,
  content: h
}) => {
  const p = Gn(r.breakpoints.down("md")), m = e === "dark", g = ts({
    showSidebar: a,
    isMobile: p,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), x = $o(s, n) ? {
    gutterPx: ht,
    radiusPx: Jn
  } : void 0, w = bo, R = os(
    En(u, e),
    m
  ), A = rs(
    En(l, e),
    m
  ), v = es(c, r), E = x ? /* @__PURE__ */ S(Gt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t(Ne, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Gt,
      {
        alignItems: "center",
        spacing: `${Oo}px`,
        sx: { mt: 2 },
        children: Array.from({ length: oa }, (M, y) => /* @__PURE__ */ t(
          V,
          {
            sx: {
              width: de,
              height: de,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ t(
              Ne,
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
    /* @__PURE__ */ t(Ne, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(V, { sx: { height: 8 } }),
    Array.from({ length: ta }, (M, y) => /* @__PURE__ */ t(Ne, { variant: "rounded", width: 28, height: 28 }, y))
  ] });
  return /* @__PURE__ */ t(wo, { theme: o, children: /* @__PURE__ */ S(
    V,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: A
      },
      children: [
        p && /* @__PURE__ */ S(
          V,
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
              bgcolor: R,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(Ne, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(Ne, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(V, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(Ne, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !p && g > 0 && /* @__PURE__ */ t(
          V,
          {
            sx: {
              position: "relative",
              width: g,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              V,
              {
                sx: x ? {
                  position: "fixed",
                  top: x.gutterPx,
                  bottom: x.gutterPx,
                  left: x.gutterPx,
                  width: g - 2 * x.gutterPx,
                  borderRadius: `${x.radiusPx}px`,
                  bgcolor: R
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: g,
                  bgcolor: R
                },
                children: E
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          V,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              // The variables the wrapper's <main> sets, so a host's `content`
              // that sizes itself from them measures as it will in the app
              "--lumora-content-padding": v,
              "--lumora-sticky-top": p ? `${w}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: p ? `${w}px` : 0
            },
            children: h ?? /* @__PURE__ */ S(Me, { children: [
              /* @__PURE__ */ t(Ne, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(
                Ne,
                {
                  variant: "text",
                  width: 320,
                  sx: { mb: 3 }
                }
              ),
              /* @__PURE__ */ t(Gt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from(
                { length: p ? 2 : 4 },
                (M, y) => /* @__PURE__ */ t(
                  Ne,
                  {
                    variant: "rounded",
                    height: 96,
                    sx: { flex: 1 }
                  },
                  y
                )
              ) }),
              /* @__PURE__ */ t(Ne, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, lr = Io(Lr("light")), yo = Io(Lr("dark")), ra = (e) => e === "dark" ? yo : lr, na = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = zn();
  if (!o) {
    const i = ra(e);
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
      Ks,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: yo.palette.background.default,
            color: yo.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(V, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ t(
      qo,
      {
        themeMode: "light",
        muiTheme: lr,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(V, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ t(
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
class Z extends Error {
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const te = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, ue = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, qe = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, sa = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        qe.ACCESS_TOKEN
      ), o = localStorage.getItem(
        qe.REFRESH_TOKEN
      ), r = localStorage.getItem(qe.USER);
      e && !localStorage.getItem(ue.ACCESS_TOKEN) && localStorage.setItem(ue.ACCESS_TOKEN, e), o && !localStorage.getItem(ue.REFRESH_TOKEN) && localStorage.setItem(
        ue.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(ue.USER) && localStorage.setItem(ue.USER, r), (e || o || r) && (localStorage.removeItem(qe.ACCESS_TOKEN), localStorage.removeItem(qe.REFRESH_TOKEN), localStorage.removeItem(qe.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Zo = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Z(
        "localStorage is not available",
        te.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Z(
      "Storage quota exceeded. Please clear browser data.",
      te.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Z(
      "Access to localStorage is denied. Please check browser settings.",
      te.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Z(
      "Failed to access storage",
      te.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Jo = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Z(
        "localStorage is not available",
        te.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Z(
      "Storage quota exceeded. Please clear browser data.",
      te.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Z(
      "Access to localStorage is denied. Please check browser settings.",
      te.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Z(
      "Failed to write to storage",
      te.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, hs = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, qt = () => {
  try {
    sa();
    const e = Zo(ue.ACCESS_TOKEN), o = Zo(ue.REFRESH_TOKEN), r = Zo(ue.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), hs(ue.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Z ? e : new Z(
      "Failed to retrieve authentication tokens",
      te.UNKNOWN_ERROR,
      e
    );
  }
}, ia = () => {
  try {
    const { accessToken: e, refreshToken: o } = qt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Z(
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
      error: e instanceof Z ? e : new Z(
        "Authentication check failed",
        te.UNKNOWN_ERROR,
        e
      )
    };
  }
}, ms = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Z(
        "At least one token must be provided",
        te.TOKEN_INVALID
      );
    return e && Jo(ue.ACCESS_TOKEN, e), o && Jo(ue.REFRESH_TOKEN, o), r && Jo(ue.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Z ? n : new Z(
        "Failed to store tokens",
        te.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Zt = () => {
  try {
    return [
      ue.ACCESS_TOKEN,
      ue.REFRESH_TOKEN,
      ue.USER,
      // Also clear legacy keys for complete cleanup
      qe.ACCESS_TOKEN,
      qe.REFRESH_TOKEN,
      qe.USER
    ].map((n) => hs(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Z ? e : new Z(
        "Failed to clear tokens",
        te.LOGOUT_FAILED,
        e
      )
    };
  }
}, aa = () => {
  try {
    const { user: e } = qt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Z ? e : new Z(
        "Failed to retrieve user data",
        te.UNKNOWN_ERROR,
        e
      )
    };
  }
}, cl = (e) => {
  if (!(e instanceof Z))
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
}, dr = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof Z ? e.code : "UNKNOWN",
    timestamp: e instanceof Z ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof Z && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, ca = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = ln.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, s = [];
  const i = (a, c) => {
    s.forEach(({ resolve: u, reject: l }) => {
      a ? l(a) : c && u(c);
    }), s = [];
  };
  return o.interceptors.request.use(
    (a) => {
      const { accessToken: c } = qt();
      return c && a.headers && (a.headers.Authorization = `Bearer ${c}`), a;
    },
    (a) => Promise.reject(a)
  ), o.interceptors.response.use(
    (a) => a,
    async (a) => {
      var m;
      const c = a.config, u = (m = a.response) == null ? void 0 : m.status, l = (c == null ? void 0 : c.url) || "", h = l.includes("/auth/refresh");
      if (u !== 401 || c._retry || h)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: p } = qt();
      if (!p) {
        const g = new Error(
          "No refresh token available for token refresh"
        );
        return dr(g, "AxiosClient - Token Refresh"), Zt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((g, x) => {
          s.push({ resolve: g, reject: x });
        }).then((g) => {
          const {
            accessToken: x,
            refreshToken: w
          } = g;
          if (c.headers && (c.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const R = JSON.parse(
                  c.data || "{}"
                );
                R.refresh_token = w, c.data = JSON.stringify(R);
              } else
                c.data && typeof c.data == "object" ? c.data.refresh_token = w : c.data = JSON.stringify({
                  refresh_token: w
                });
            } catch {
              c.data = JSON.stringify({
                refresh_token: w
              });
            }
          return o(c);
        }).catch((g) => Promise.reject(g));
      r = !0, n = ln.post(
        `${e}/auth/refresh`,
        {
          refresh_token: p
        }
      );
      try {
        const g = await n, { accessToken: x, refreshToken: w } = g.data;
        if (ms(x, w, null), i(null, {
          accessToken: x,
          refreshToken: w
        }), c.headers && (c.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const R = JSON.parse(
                c.data || "{}"
              );
              R.refresh_token = w, c.data = JSON.stringify(R);
            } else
              c.data && typeof c.data == "object" ? c.data.refresh_token = w : c.data = JSON.stringify({
                refresh_token: w
              });
          } catch {
            c.data = JSON.stringify({
              refresh_token: w
            });
          }
        return o(c);
      } catch (g) {
        return dr(
          g,
          "AxiosClient - Token Refresh Failed"
        ), i(g), Zt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(g);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, la = async (e, o) => {
  const { accessToken: r, refreshToken: n } = qt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return ms(
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
), Rn = ve(Tr), Ye = "#09C1AE", So = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ye} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), da = (e) => ({
  ...So(oe, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${oe - 2}px`,
    zIndex: 1,
    background: `${Ro(Ye, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), In = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = Cr(), u = d.useContext(At), l = Xe().palette.mode === "dark", h = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", p = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ S(
    Ue,
    {
      ...p,
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
        borderColor: r ? Ye : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: i,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Ye}`,
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
        s && /* @__PURE__ */ t(ea, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && u && or ? /* @__PURE__ */ t(Ae, { title: h, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    Ie,
    {
      ...p,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: de,
        height: de,
        borderRadius: `${oe}px`,
        ...Ro(Ye, l, "clear"),
        ...r && {
          boxShadow: `${Ro(Ye, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${Rn.duration}ms ${Rn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [be]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && da(l)
      },
      children: /* @__PURE__ */ t(Ut, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Ae, { title: h, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    Ie,
    {
      ...p,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": u || void 0,
      sx: {
        width: u ? de : 44,
        height: u ? de : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Ye : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && So(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Ut, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ t(Ae, { title: h, placement: "left", children: /* @__PURE__ */ t(
    Ie,
    {
      ...p,
      disableFocusRipple: !0,
      "data-variant": "floating",
      sx: {
        position: "fixed",
        right: 24 + a,
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
        outline: r ? `2px solid ${Ye}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Ye}` },
        ...n && So(16, "background.paper")
      },
      children: /* @__PURE__ */ t(O, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Ut, { size: 26 }) })
    }
  ) });
}, go = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(Vs, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ S(Ys, { children: [
  /* @__PURE__ */ t(qs, { fontSize: "small" }),
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
    Hn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Bt = 24, ua = 720, fa = 1140, pa = 1250, ha = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: s,
  sidebarWidthPx: i,
  bottomOffsetPx: a,
  fullScreen: c,
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
    const w = (R) => {
      R.key === "Escape" && l();
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [e, l]);
  const p = r === "docked", m = Bt + a;
  let g;
  c ? g = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : p ? g = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : g = {
    bottom: m,
    ...n === "left" ? { left: i + Bt } : { right: Bt },
    width: s,
    maxWidth: `calc(100vw - ${Bt * 2}px)`,
    height: `min(${ua}px, calc(100vh - ${m + Bt}px))`,
    borderRadius: "12px"
  };
  const x = /* @__PURE__ */ t(
    xr,
    {
      role: p ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: p ? fa : pa,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...g
      },
      children: o
    }
  );
  return p ? /* @__PURE__ */ t(
    Js,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...h.current ? {} : { timeout: { enter: 0 } },
      children: x
    }
  ) : /* @__PURE__ */ t(
    Zs,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: x
    }
  );
}, ma = 180, _n = 250, ga = "#01584F", xa = ({
  text: e,
  testId: o
}) => {
  const r = d.useRef(null), [n, s] = d.useState(!1), i = d.useCallback(() => {
    const a = r.current;
    a && s(a.scrollWidth > a.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    i();
  }, [i, e]), d.useEffect(() => {
    const a = r.current;
    if (!a)
      return;
    const c = new ResizeObserver(() => i());
    return c.observe(a), () => c.disconnect();
  }, [i]), /* @__PURE__ */ t(
    Ae,
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
}, gs = (e, o, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : o, a = e ? ga : o;
  return { activeBg: a, sx: n ? {
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
    backgroundColor: r ? a : "transparent",
    "&:hover": {
      backgroundColor: r ? a : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : i
    }
  } : {
    width: s,
    height: s,
    color: r ? "#ffffff" : i,
    backgroundColor: r ? a : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? a : "action.hover",
      borderRadius: "4px"
    }
  } };
}, xs = ({ link: e }) => /* @__PURE__ */ S(Le, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ t(
    O,
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
    xa,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), bs = (e, o, r) => r ? e : /* @__PURE__ */ t(Ae, { title: o, placement: "right", arrow: !0, children: e }), ba = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: a
}) => {
  const c = Xe(), [u, l] = d.useState(null), [h, p] = d.useState(!1), m = d.useRef(
    null
  ), g = d.useRef(null), x = d.useRef(null), w = d.useRef(!1), R = d.useRef(!1), A = d.useId(), v = () => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, E = () => {
    v(), m.current = setTimeout(() => {
      p(!1), m.current = null;
    }, ma);
  }, M = () => {
    v(), p(!0);
  };
  d.useEffect(() => {
    if (!h)
      return;
    const $ = (C) => {
      var k;
      C.key === "Escape" && (p(!1), (k = x.current) == null || k.focus());
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [h]), d.useEffect(() => {
    if (!h || !R.current)
      return;
    const $ = globalThis.requestAnimationFrame(() => {
      var k;
      const C = (k = g.current) == null ? void 0 : k.querySelector(
        '[role="menuitem"]'
      );
      C == null || C.focus(), R.current = !1;
    });
    return () => cancelAnimationFrame($);
  }, [h]);
  const y = rt(e, o), { activeBg: _, sx: b } = gs(
    s,
    n,
    y,
    a
  ), I = /* @__PURE__ */ t(
    Ie,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || M();
      },
      onBlur: ($) => {
        var k;
        const C = $.relatedTarget;
        C && ((k = g.current) != null && k.contains(C)) || E();
      },
      onKeyDown: ($) => {
        $.key === "ArrowDown" && ($.preventDefault(), R.current = !0, M());
      },
      onClick: ($) => {
        $.stopPropagation(), !(e.path && !_t($)) && ($.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": h,
      "aria-controls": h ? A : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: b,
      children: a ? /* @__PURE__ */ t(xs, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ S(
    O,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          O,
          {
            ref: l,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              w.current = !0, M();
            },
            onMouseLeave: () => {
              w.current = !1, E();
            },
            children: bs(I, e.text, a)
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
                ref: g,
                elevation: 0,
                onMouseEnter: v,
                onMouseLeave: E,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: i,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: c.shadows[8],
                  maxWidth: _n,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  br,
                  {
                    id: A,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: _n
                    },
                    children: L(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function L($, C, k) {
    return $.flatMap((B) => {
      const z = wt(C, B);
      return Rt(B) ? [
        /* @__PURE__ */ t(
          Qs,
          {
            disableSticky: !0,
            title: B.text,
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
            children: B.text
          },
          z
        ),
        ...L(B.subitems, z, k + 1)
      ] : [
        /* @__PURE__ */ S(
          nt,
          {
            role: "menuitem",
            title: B.text,
            disabled: !B.path,
            selected: Ge(B, o),
            ...B.path && { component: "a", href: B.path },
            onClick: (G) => {
              B.path && !_t(G) || (G.preventDefault(), B.path && (r == null || r(B.path)), p(!1));
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
              B.icon ? /* @__PURE__ */ t(_e, { children: B.icon }) : null,
              /* @__PURE__ */ t(
                He,
                {
                  primary: B.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          z
        )
      ];
    });
  }
}, va = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const a = !!(e.path && o === e.path), { sx: c } = gs(
    s,
    n,
    a,
    i
  );
  return bs(
    /* @__PURE__ */ t(
      Ie,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !_t(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: c,
        children: i ? /* @__PURE__ */ t(xs, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, ya = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), Sa = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), Tn = (e, o) => e.map((r, n) => /* @__PURE__ */ S(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(ya, {}) : null
] }, n)), wa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: a = !1
}) => {
  const c = (l, h) => Rt(l) ? /* @__PURE__ */ t(
    ba,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: h,
      surfaceBackgroundColor: i,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ t(
    va,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: h,
      railShowTitles: a
    }
  ), u = a ? 1.25 : 1;
  return /* @__PURE__ */ S(
    Le,
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
        Tn(e, (l) => c(l, !1)),
        o.length > 0 ? /* @__PURE__ */ S(Me, { children: [
          /* @__PURE__ */ t(Sa, {}),
          /* @__PURE__ */ t(O, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Le, { gap: u, alignItems: "center", children: Tn(
            o,
            (l) => c(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Ea = (e) => e ? Vn(e) : "USER", Ra = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), An = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, ur = ({ count: e }) => e ? /* @__PURE__ */ t(
  O,
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
) : null, Dr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  ti,
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
    children: Ra(e)
  }
), vs = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ S(Me, { children: [
  /* @__PURE__ */ t(Dr, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ S(
    O,
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
            sx: { ...An, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ne,
          {
            variant: "caption",
            sx: { ...An, opacity: 0.8, color: "inherit" },
            children: Ea(o)
          }
        )
      ]
    }
  )
] }), Cn = {
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
}, ys = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: s,
  showNotifications: i,
  notificationCount: a,
  onNotificationsClick: c,
  userName: u = "User",
  userRole: l,
  userAvatar: h,
  menuItems: p = [],
  showSettings: m,
  onSettingsClick: g,
  showThemeToggler: x,
  theme: w,
  onThemeToggle: R,
  onLogout: A
}) => {
  const v = (E) => () => {
    o(), E == null || E();
  };
  return /* @__PURE__ */ S(
    oi,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: Cn[r].anchor,
      transformOrigin: Cn[r].transform,
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
          Le,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              vs,
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
        /* @__PURE__ */ t(Ze, {}),
        i && /* @__PURE__ */ S(nt, { onClick: v(c), children: [
          /* @__PURE__ */ t(_e, { children: /* @__PURE__ */ t(Kn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(He, { children: "Notifications" }),
          /* @__PURE__ */ t(ur, { count: a })
        ] }),
        p.map((E) => /* @__PURE__ */ S(nt, { onClick: v(E.onClick), children: [
          E.icon && /* @__PURE__ */ t(_e, { children: E.icon }),
          /* @__PURE__ */ t(He, { inset: !E.icon, children: E.label }),
          /* @__PURE__ */ t(ur, { count: E.badge })
        ] }, E.key)),
        m && /* @__PURE__ */ S(nt, { onClick: v(g), children: [
          /* @__PURE__ */ t(_e, { children: /* @__PURE__ */ t(ei, { fontSize: "small" }) }),
          /* @__PURE__ */ t(He, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(Ze, {}, "theme-divider"),
          /* @__PURE__ */ S(O, { sx: { px: 1.5, py: 1 }, children: [
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
              ri,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: w,
                onChange: (E, M) => M && M !== w && (R == null ? void 0 : R()),
                disabled: !R,
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
                  /* @__PURE__ */ t(dn, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(dn, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Ze, {}),
        /* @__PURE__ */ S(
          nt,
          {
            onClick: v(A),
            sx: {
              color: w === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(_e, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Xn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(He, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Ss = 64, Ia = 2, zt = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: s,
  activeColor: i,
  activeBackground: a,
  ariaLabel: c,
  haspopup: u,
  isPage: l = !1,
  href: h,
  testId: p
}) => /* @__PURE__ */ S(
  Ue,
  {
    ...h && { component: "a", href: h },
    onClick: r,
    "aria-label": c ?? e,
    "aria-haspopup": u,
    "aria-expanded": u ? n : void 0,
    "aria-current": l && n ? "page" : void 0,
    "data-testid": p,
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
        O,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 28,
            minWidth: 48,
            borderRadius: "14px",
            bgcolor: n ? a : "transparent",
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
), _a = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: i,
  assistantActive: a,
  showProfile: c,
  background: u,
  color: l,
  activeColor: h,
  activeBackground: p,
  pinnedLinks: m = [],
  activePath: g,
  onLinkClick: x,
  ...w
}) => {
  const R = m.filter((b) => b.path).slice(0, Ia), [A, v] = d.useState(
    null
  ), { userName: E = "User", userAvatar: M, avatarColor: y } = w, _ = { color: l, activeColor: h, activeBackground: p };
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
        height: `calc(${Ss}px + env(safe-area-inset-bottom, 0px))`,
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
            icon: /* @__PURE__ */ t(Un, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ..._
          }
        ),
        R.map((b) => /* @__PURE__ */ t(
          zt,
          {
            label: b.text,
            icon: b.icon,
            href: b.path,
            onClick: (I) => {
              _t(I) && (I.preventDefault(), x == null || x(b.path));
            },
            active: rt(b, g),
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
              O,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 28,
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: a ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(Ut, { size: 18 })
              }
            ),
            onClick: i,
            active: a,
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
        c && /* @__PURE__ */ S(Me, { children: [
          /* @__PURE__ */ t(
            zt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${E}`,
              icon: /* @__PURE__ */ t(
                Dr,
                {
                  name: E,
                  avatar: M,
                  color: y,
                  size: 26
                }
              ),
              onClick: (b) => v(b.currentTarget),
              active: !!A,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ..._
            }
          ),
          /* @__PURE__ */ t(
            ys,
            {
              anchorEl: A,
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
}, Ta = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  ni,
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
      Le,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(O, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Hn,
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
), Aa = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: s,
  brandMenuOpen: i,
  background: a,
  color: c,
  brandColor: u = c,
  endContent: l
}) => /* @__PURE__ */ t(
  si,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: e,
      background: a,
      color: c,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ S(ii, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        Ie,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: c },
          children: /* @__PURE__ */ t(Un, {})
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
      l ? /* @__PURE__ */ t(O, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: l }) : null
    ] })
  }
), ws = d.createContext(void 0), kr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const a = Cr(), c = d.useContext(ws), u = d.useContext(At), l = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Ae,
    {
      title: l,
      placement: s,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ t(
        Ie,
        {
          onClick: o,
          "aria-label": l,
          "data-testid": i,
          sx: {
            ...u ? {
              width: de,
              height: de
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
            jn,
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
              children: c ?? /* @__PURE__ */ t(Kn, {})
            }
          )
        }
      )
    }
  );
}, On = 14, Ca = 18, Oa = "blur(12px) saturate(180%) brightness(1.04)", $a = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Ma = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, La = 140, $n = 0.22, Da = 0.14, ka = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var g;
      const m = e.current;
      m && (m.style.setProperty("--lx", `${i.x.toFixed(1)}px`), m.style.setProperty("--ly", `${i.y.toFixed(1)}px`), m.style.setProperty("--li", i.i.toFixed(3)), (g = n.current) == null || g.call(n, i.x, i.y, i.i));
    }, u = () => {
      i.x += (s.x - i.x) * $n, i.y += (s.y - i.y) * $n, i.i += (s.i - i.i) * Da;
      const m = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      m && (i.x = s.x, i.y = s.y, i.i = s.i), c(), a = m ? 0 : requestAnimationFrame(u);
    }, l = () => {
      a || (a = requestAnimationFrame(u));
    }, h = (m) => {
      const g = e.current;
      if (m.pointerType === "touch" || !g)
        return;
      const x = g.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      s.x = (m.clientX - x.left) * g.offsetWidth / x.width, s.y = (m.clientY - x.top) * g.offsetHeight / x.height;
      const w = Math.max(
        x.left - m.clientX,
        0,
        m.clientX - x.right
      ), R = Math.max(
        x.top - m.clientY,
        0,
        m.clientY - x.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(w, R) / La), i.i < 0.01 && (i.x = s.x, i.y = s.y), l();
    }, p = () => {
      s.i = 0, l();
    };
    return document.addEventListener("pointermove", h, { passive: !0 }), document.documentElement.addEventListener("mouseleave", p), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", h), document.documentElement.removeEventListener("mouseleave", p);
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
    onLight: a
  }, c) => {
    const u = d.useRef(null), l = s && or;
    ka(u, i && or, a);
    const h = Ao(), p = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [m, g] = d.useState(null), x = d.useRef(null), w = d.useCallback(
      (v) => {
        var M;
        if (u.current = v, typeof c == "function" ? c(v) : c && (c.current = v), (M = x.current) == null || M.disconnect(), x.current = null, !v || !l || !$a || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const y = v.offsetWidth, _ = v.offsetHeight;
          g(
            (b) => (b == null ? void 0 : b.width) === y && b.height === _ ? b : y && _ ? { width: y, height: _ } : null
          );
        };
        x.current = new ResizeObserver(E), x.current.observe(v), E();
      },
      [c, l]
    ), R = d.useMemo(
      () => m ? Ma(m.width, m.height, On) : null,
      [m]
    ), A = l && !!(R && m);
    return /* @__PURE__ */ S(Me, { children: [
      A ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ S(
            "filter",
            {
              id: p,
              x: "0",
              y: "0",
              width: m.width,
              height: m.height,
              filterUnits: "userSpaceOnUse",
              primitiveUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ t(
                  "feImage",
                  {
                    href: R,
                    x: "0",
                    y: "0",
                    width: m.width,
                    height: m.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ t(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: On / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Ca,
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
        O,
        {
          ref: w,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": A ? "true" : void 0,
          sx: [
            pi(e, o, h),
            A ? {
              backdropFilter: `url(#${p}) ${Oa}`,
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
}, Na = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Mn = ve(ss), Ln = ve(Mo), Dn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Fa = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = Xe().palette.mode === "dark", a = Ao(), c = d.useRef(null), u = d.useRef(null), l = (m) => {
    var g;
    m !== e && (o == null || o()), (g = (m === "light" ? c : u).current) == null || g.focus();
  }, h = (m) => {
    if (!(m.key === "Tab" || m.key === "Escape"))
      switch (m.stopPropagation(), m.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          m.preventDefault(), l(e === "light" ? "dark" : "light");
          break;
        case "Home":
          m.preventDefault(), l("light");
          break;
        case "End":
          m.preventDefault(), l("dark");
          break;
      }
  }, p = (m, g, x, w) => {
    const R = e === m;
    return /* @__PURE__ */ t(
      Ue,
      {
        ref: w,
        role: "radio",
        "aria-checked": R,
        "aria-label": g,
        tabIndex: R ? 0 : -1,
        onClick: () => l(m),
        "data-testid": `theme-segment-${m}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${oe}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: R ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: R ? n : "transparent",
          ...s && R ? qn(i, a) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": R ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: i ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${We(r, 0.6)}`
          },
          ...fr
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ S(
    Le,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: h,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${oe}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        p("light", "Light", ci, c),
        p("dark", "Dark", ai, u)
      ]
    }
  );
}, Wa = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: s,
  userName: i,
  userEmail: a,
  roleLabel: c,
  accentColor: u,
  tint: l,
  showThemeToggler: h,
  theme: p,
  onThemeToggle: m,
  onProfileClick: g,
  onAiUsageClick: x,
  onLinkClick: w,
  menuItems: R = [],
  onLogout: A,
  glass: v = !1
}) => {
  const E = Xe(), M = E.palette.mode === "dark", y = d.useRef(null), _ = Rr(E.palette.background.paper), b = Or({
    enabled: v,
    isDark: M,
    selector: Dn,
    radius: oe
  }), [I, L] = d.useState(null);
  d.useEffect(() => {
    if (!I || typeof ResizeObserver > "u")
      return;
    const T = new ResizeObserver(() => {
      var H;
      (H = y.current) == null || H.updatePosition();
    });
    return T.observe(I), () => T.disconnect();
  }, [I]);
  const $ = (T) => {
    r(), T == null || T();
  }, C = (T) => {
    r(), T.onClick ? T.onClick() : T.path && (w == null || w(T.path));
  }, k = {
    borderRadius: v ? `${oe}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, B = {
    fontSize: 12,
    lineHeight: "18px",
    letterSpacing: "0.02em",
    fontWeight: 600,
    // White on dark: the accent is too dim against a dark surface
    color: M ? "#ffffff" : u,
    borderRadius: "4px",
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "2px"
    },
    "&.Mui-focusVisible": {
      boxShadow: `0 0 0 2px ${We(u, 0.6)}`
    },
    ...fr
  }, z = x ? /* @__PURE__ */ S(
    Le,
    {
      direction: "row",
      "data-testid": "account-menu-links",
      sx: { alignItems: "center", gap: 0.75, mt: 0.25 },
      children: [
        g ? /* @__PURE__ */ S(Me, { children: [
          /* @__PURE__ */ t(
            Ue,
            {
              onClick: () => $(g),
              "data-testid": "account-menu-view-profile",
              sx: B,
              children: "View profile"
            }
          ),
          /* @__PURE__ */ t(
            O,
            {
              component: "span",
              "aria-hidden": !0,
              sx: { color: "text.disabled", fontSize: 12 },
              children: "·"
            }
          )
        ] }) : null,
        /* @__PURE__ */ t(
          Ue,
          {
            onClick: () => $(x),
            "data-testid": "account-menu-ai-usage",
            sx: B,
            children: "My AI usage"
          }
        )
      ]
    }
  ) : null, G = /* @__PURE__ */ S(Le, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ S(O, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ne, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: i }),
      a ? /* @__PURE__ */ t(
        ne,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary", fontSize: 12, lineHeight: "18px" },
          children: a
        }
      ) : null,
      c ? /* @__PURE__ */ t(
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
          children: c
        }
      ) : null,
      z,
      g && !x ? /* @__PURE__ */ t(
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
            color: M ? "#ffffff" : u,
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
          ref: L,
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
        O,
        {
          "data-testid": "account-menu",
          "data-glass": v ? "true" : void 0,
          sx: v ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${oe}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${Dn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Na, width: n, minWidth: n },
          children: [
            v ? /* @__PURE__ */ t(
              Jt,
              {
                isDark: M,
                solid: _,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Ir} ${Mn.duration}ms ${Mn.easing} both`,
                  [be]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ S(
              O,
              {
                ...b.containerProps,
                sx: v ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${_r} ${Ln.duration}ms ${Ln.easing} 70ms both`,
                  [be]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  b.lens,
                  g && !x ? /* @__PURE__ */ t(
                    Ue,
                    {
                      onClick: () => $(g),
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
                      children: G
                    }
                  ) : /* @__PURE__ */ t(O, { "data-testid": "account-menu-header", children: G }),
                  /* @__PURE__ */ t(Ze, {}),
                  h ? /* @__PURE__ */ S(
                    O,
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
                        /* @__PURE__ */ t(_e, { children: /* @__PURE__ */ t(li, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ne, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Fa,
                          {
                            glass: v,
                            mode: p,
                            onToggle: m,
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
                        R.map((T) => /* @__PURE__ */ S(
                          nt,
                          {
                            onClick: () => C(T),
                            "data-testid": `menu-item-${T.key}`,
                            sx: k,
                            children: [
                              /* @__PURE__ */ t(_e, { children: T.icon }),
                              /* @__PURE__ */ t(ne, { sx: { flex: 1 }, children: T.label }),
                              /* @__PURE__ */ t(ur, { count: T.badge })
                            ]
                          },
                          T.key
                        )),
                        A ? /* @__PURE__ */ t(Ze, { component: "li", sx: { my: 0.5 } }) : null,
                        A ? /* @__PURE__ */ S(
                          nt,
                          {
                            onClick: () => $(A),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...k,
                              color: M ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(_e, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Xn, { fontSize: "small" }) }),
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
}, Pa = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ba = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: s,
  title: i,
  onBrandClick: a,
  brandMenuOpen: c,
  brandColor: u,
  headerBackgroundColor: l,
  headerForegroundColor: h,
  activeAccentColor: p = "#01584f",
  activeBackgroundColor: m,
  groupArrowColor: g,
  groupAccentColor: x,
  activeForegroundColor: w,
  foregroundColor: R,
  surfaceBackgroundColor: A,
  flyoutSurfaceColor: v,
  collapsed: E,
  expandedWidth: M,
  collapsedWidth: y,
  topContent: _,
  submenuMode: b,
  color: I,
  hoverColor: L,
  avatarColor: $,
  showProfile: C = !0,
  userName: k = "User",
  userEmail: B,
  userRole: z,
  userAvatar: G,
  showNotifications: T = !0,
  notificationCount: H = 0,
  onNotificationsClick: se,
  whatsNewCount: ye = 0,
  onProfileClick: fe,
  onAiUsageClick: it,
  menuItems: Se,
  onLogout: Pe,
  theme: N = "light",
  showThemeToggler: W = !0,
  onThemeToggle: Q
}) => {
  const j = Xe(), Y = j.palette.mode === "dark", ie = A ?? (Y ? j.palette.background.paper : "#ffffff"), J = I ?? R ?? (Y ? j.palette.text.primary : p), U = L ?? x ?? Kt(p), Je = $ ?? p, ee = d.useRef(null), [we, pe] = d.useState(!1), De = z ? Vn(z) : void 0, me = (at) => /* @__PURE__ */ t(
    Dr,
    {
      name: k,
      avatar: G,
      color: Je,
      size: at
    }
  ), Qe = H + ye, ge = E && b === "flyout", Ce = T ? /* @__PURE__ */ t(
    kr,
    {
      count: Qe,
      onClick: se,
      color: J,
      hoverColor: U,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, he = C ? /* @__PURE__ */ S(
    Ue,
    {
      ref: ee,
      onClick: () => pe(!0),
      "aria-haspopup": "menu",
      "aria-expanded": we,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: E ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        p: ge ? "4px" : 0.75,
        borderRadius: "10px",
        bgcolor: we ? U : "transparent",
        "&:hover": { bgcolor: U },
        ...Pa
      },
      children: [
        E && !ge && T ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            jn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Qe,
              children: me(36)
            }
          )
        ) : me(E ? 36 : 40),
        E ? null : /* @__PURE__ */ S(O, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ne,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: J, lineHeight: 1.3 },
              children: k
            }
          ),
          De ? /* @__PURE__ */ t(
            ne,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: J,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: De
            }
          ) : null
        ] })
      ]
    }
  ) : null, Ke = !!Ce && (!E || ge || !he);
  return /* @__PURE__ */ S(
    O,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": E ? "true" : "false",
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
            onBrandClick: a,
            brandMenuOpen: c,
            brandColor: u,
            headerBackgroundColor: l,
            headerForegroundColor: h,
            activeAccentColor: p,
            activeBackgroundColor: m,
            groupArrowColor: g,
            groupAccentColor: x,
            activeForegroundColor: w,
            foregroundColor: R,
            surfaceBackgroundColor: ie,
            flyoutSurfaceColor: v,
            collapsed: E,
            expandedWidth: M,
            collapsedWidth: y,
            topContent: _,
            footer: he || Ke ? /* @__PURE__ */ S(
              Le,
              {
                direction: ge ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  ge && Ke ? Ce : null,
                  he,
                  !ge && Ke ? Ce : null
                ]
              }
            ) : void 0,
            submenuMode: b
          }
        ),
        C ? /* @__PURE__ */ t(
          Wa,
          {
            open: we,
            anchorEl: ee.current,
            onClose: () => pe(!1),
            width: Math.max(M - 16, 240),
            renderAvatar: me,
            userName: k,
            userEmail: B,
            roleLabel: De,
            accentColor: p,
            tint: U,
            showThemeToggler: W,
            theme: N,
            onThemeToggle: Q,
            onProfileClick: fe,
            onAiUsageClick: it,
            onLinkClick: n,
            menuItems: Se,
            onLogout: Pe,
            glass: b === "flyout"
          }
        ) : null
      ]
    }
  );
}, kn = ve(ss), Nn = ve(Mo), Fn = 240, za = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Ga = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: a = !1
}) => {
  const c = Xe(), u = c.palette.mode === "dark", l = !!e, h = Rr(c.palette.background.paper), p = Or({
    enabled: a,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: oe
  }), m = /* @__PURE__ */ t(
    br,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((g) => {
        const x = g.key === n, w = g.accentColor ?? i;
        return /* @__PURE__ */ S(
          nt,
          {
            selected: x,
            onClick: () => s(g),
            "data-testid": `platform-item-${g.key}`,
            sx: {
              borderRadius: a ? `${oe}px` : "8px",
              // Compact: 14px name over a 12px description.
              py: 0.75,
              px: 1.5,
              minHeight: 0,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...a && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(_e, { sx: { minWidth: 24 }, children: /* @__PURE__ */ t(
                O,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: w,
                    boxShadow: a ? `0 0 0 3px ${u ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                He,
                {
                  primary: g.name,
                  secondary: g.description,
                  sx: { my: 0 },
                  slotProps: {
                    primary: {
                      sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }
                    },
                    secondary: { sx: { fontSize: 12, lineHeight: "18px" } }
                  }
                }
              ),
              x ? /* @__PURE__ */ t(
                di,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: w }
                }
              ) : null
            ]
          },
          g.key
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
      onClick: (g) => g.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
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
        O,
        {
          "data-testid": "platform-menu",
          "data-glass": a ? "true" : void 0,
          sx: a ? {
            position: "relative",
            minWidth: Fn,
            borderRadius: `${oe}px`
          } : { ...za, minWidth: Fn },
          children: a ? /* @__PURE__ */ S(Me, { children: [
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
                  animation: `${Ir} ${kn.duration}ms ${kn.easing} both`,
                  [be]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ S(
              O,
              {
                ...p.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${_r} ${Nn.duration}ms ${Nn.easing} 70ms both`,
                  [be]: { animation: "none" }
                },
                children: [
                  p.lens,
                  m
                ]
              }
            )
          ] }) : m
        }
      )
    }
  );
}, Ha = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), s = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ S(
    O,
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
          Ga,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, Ua = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var M;
  const {
    avatarColor: a,
    showNotifications: c,
    notificationCount: u,
    onNotificationsClick: l,
    userName: h = "User",
    userRole: p,
    userAvatar: m
  } = i, g = d.useRef(null), [x, w] = d.useState(
    null
  ), R = !!x, A = d.useRef(e);
  d.useEffect(() => {
    e && !A.current && w(null), A.current = e;
  }, [e]);
  const v = d.useContext(At);
  if (!c && !n)
    return null;
  const E = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ S(Me, { children: [
    /* @__PURE__ */ S(
      Le,
      {
        ref: g,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Ae,
            {
              title: e ? h : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                Ue,
                {
                  onClick: () => w(g.current),
                  "aria-label": `Account menu for ${h}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": R,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? v ? "4px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: R ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...E
                  },
                  children: /* @__PURE__ */ t(
                    vs,
                    {
                      name: h,
                      role: p,
                      avatar: m,
                      avatarColor: a,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          c && /* @__PURE__ */ t(
            kr,
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
      ys,
      {
        anchorEl: x,
        onClose: () => w(null),
        placement: e ? "beside" : "above",
        width: e || (M = g.current) == null ? void 0 : M.clientWidth,
        ...i
      }
    )
  ] });
}, Xa = 120, Ka = 300, Wn = ve(ns), Pn = ve(Mo), ja = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Va = 'input, textarea, [contenteditable="true"]', pr = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Va)) == null || o.focus();
}, Ya = ({
  search: e,
  icon: o,
  mode: r,
  onExpand: n,
  autoFocus: s = !1,
  onAutoFocused: i,
  color: a,
  hoverColor: c
}) => {
  const u = Cr(), l = d.useContext(At), h = d.useRef(null), [p, m] = d.useState(null);
  return d.useEffect(() => {
    r === "full" && s && (pr(h.current), i == null || i());
  }, [r, s, i]), r === "full" ? /* @__PURE__ */ t(
    O,
    {
      ref: h,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : r === "popover" && l ? /* @__PURE__ */ t(
    qa,
    {
      search: e,
      icon: o,
      color: a,
      railTooltip: u
    }
  ) : /* @__PURE__ */ S(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Ae, { title: "Search", placement: "right", arrow: !0, ...u, children: /* @__PURE__ */ t(
          Ie,
          {
            "aria-label": "Search",
            onClick: (g) => r === "expand" ? n == null ? void 0 : n() : m(g.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: a,
              borderRadius: "8px",
              "&:hover": { bgcolor: c }
            },
            children: o ?? /* @__PURE__ */ t(vr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          yr,
          {
            open: !!p,
            anchorEl: p,
            onClose: () => m(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (g) => pr(g)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, qa = ({ search: e, icon: o, color: r, railTooltip: n }) => {
  const s = Xe().palette.mode === "dark";
  hi(s, nr(r, s ? 0.3 : 0.35));
  const i = `rgb(${Ao()})`, a = Rr(s ? "#1e2430" : "#ffffff"), c = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${oe}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: i
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${oe}px`,
      "&.Mui-focusVisible": { borderColor: i }
    }
  }, u = d.useRef(null), l = d.useRef(null), [h, p] = d.useState(!1), m = d.useRef(!1), g = d.useRef(void 0), x = d.useRef(void 0), w = () => {
    clearTimeout(g.current), clearTimeout(x.current);
  }, R = d.useCallback(() => {
    w(), m.current = !1, p(!1);
  }, []), A = () => {
    clearTimeout(x.current), h || (clearTimeout(g.current), g.current = setTimeout(
      () => p(!0),
      Xa
    ));
  }, v = () => {
    clearTimeout(g.current), clearTimeout(x.current), x.current = setTimeout(() => {
      !m.current && !ja(l.current) && p(!1);
    }, Ka);
  };
  return d.useEffect(() => w, []), d.useEffect(() => {
    if (!h)
      return;
    const E = setTimeout(() => pr(l.current)), M = (_) => {
      var I, L;
      const b = _.target;
      !((I = l.current) != null && I.contains(b)) && !((L = u.current) != null && L.contains(b)) && R();
    }, y = (_) => {
      var b;
      _.key === "Escape" && (R(), (b = u.current) == null || b.focus());
    };
    return document.addEventListener("pointerdown", M), document.addEventListener("keydown", y), () => {
      clearTimeout(E), document.removeEventListener("pointerdown", M), document.removeEventListener("keydown", y);
    };
  }, [h, R]), /* @__PURE__ */ S(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Ae,
          {
            title: h ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...n,
            children: /* @__PURE__ */ t(
              Ie,
              {
                ref: u,
                "aria-label": "Search",
                "aria-expanded": h,
                onMouseEnter: A,
                onMouseLeave: v,
                onClick: () => {
                  w(), m.current = !0, p(!0);
                },
                sx: {
                  width: de,
                  height: de,
                  color: r,
                  borderRadius: `${oe}px`
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
              O,
              {
                ref: l,
                "data-testid": "sidebar-search-card",
                onMouseEnter: A,
                onMouseLeave: v,
                sx: {
                  position: "relative",
                  width: 320,
                  p: 1,
                  borderRadius: `${oe}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    Jt,
                    {
                      isDark: s,
                      solid: a,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${Ir} ${Wn.duration}ms ${Wn.easing} both`,
                        [be]: { animation: "none" }
                      }
                    }
                  ),
                  /* @__PURE__ */ t(
                    O,
                    {
                      sx: {
                        position: "relative",
                        // The host's field, set into the glass: an outlined
                        // input or button becomes a recessed glass well.
                        // Classes repeat to outrank the host's own styles.
                        ...c,
                        animation: `${_r} ${Pn.duration}ms ${Pn.easing} 60ms both`,
                        [be]: { animation: "none" }
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
}, Za = 80, Ja = 300, Qa = 32, ec = (e) => {
  const o = d.useRef(/* @__PURE__ */ new WeakSet()), r = d.useRef(void 0), n = d.useRef(void 0), [s, i] = d.useState(!1), [a, c] = d.useState(!1), [u, l] = d.useState(!1), h = d.useRef(null), p = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  d.useEffect(() => {
    if (!e) {
      p(), i(!1), c(!1), l(!1);
      return;
    }
    const x = (v) => {
      var M;
      if (v.pointerType !== "mouse")
        return;
      const E = v.clientX <= Qa;
      E && ((M = h.current) == null || M.style.setProperty(
        "--edge-glow-y",
        `${v.clientY}px`
      )), l(E);
    }, w = () => l(!1), R = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), c(!1);
      }, Ja));
    }, A = (v) => {
      o.current.has(v) || R();
    };
    return document.addEventListener("mouseover", A), document.addEventListener("pointermove", x, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", R), document.documentElement.addEventListener("mouseleave", w), () => {
      p(), document.removeEventListener("mouseover", A), document.removeEventListener("pointermove", x), document.documentElement.removeEventListener(
        "mouseleave",
        R
      ), document.documentElement.removeEventListener(
        "mouseleave",
        w
      );
    };
  }, [e]);
  const m = {
    onMouseOver: (x) => {
      o.current.add(x.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, Za));
    },
    onFocus: (x) => {
      tc(x.target) && c(!0);
    },
    onBlur: (x) => {
      const w = x.relatedTarget;
      (!w || !x.currentTarget.contains(w)) && c(!1);
    },
    onKeyDown: (x) => {
      x.key === "Escape" && (c(!1), i(!1));
    }
  }, g = e && (s || a);
  return {
    shown: g,
    nearEdge: e && u && !g,
    glowRef: h,
    rootProps: m
  };
}, tc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, oc = 100, rc = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = d.useState(!1), [i, a] = d.useState(!1), c = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const l = (p) => {
      r.current.has(p) || (c(), s(!1));
    }, h = () => {
      c(), s(!1);
    };
    return document.addEventListener("mouseover", l), document.documentElement.addEventListener("mouseleave", h), () => {
      c(), document.removeEventListener("mouseover", l), document.documentElement.removeEventListener(
        "mouseleave",
        h
      );
    };
  }, []), d.useEffect(() => {
    if (!i)
      return;
    const l = (h) => {
      var p;
      (p = e.current) != null && p.contains(h.target) || a(!1);
    };
    return document.addEventListener("pointerdown", l), () => document.removeEventListener("pointerdown", l);
  }, [i]), {
    expanded: n || i,
    pin: () => a(!0),
    rootProps: {
      ref: e,
      onMouseOver: (l) => {
        r.current.add(l.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, s(!0);
        }, oc));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (l) => {
        const h = l.relatedTarget;
        h && !l.currentTarget.contains(h) && a(!1);
      },
      onKeyDown: (l) => {
        l.key === "Escape" && a(!1);
      }
    }
  };
}, nc = 300, Qo = 288, sc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", ic = 18, Bn = 72, er = 90, ac = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", cc = 68, lc = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), dc = typeof window > "u" ? xo : Xs, ll = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: a = "rail",
  sidebarSubmenu: c = "expand",
  sidebarAutoHide: u = !1,
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: h,
  logo: p,
  onBrandClick: m,
  searchComponent: g,
  searchIcon: x,
  notificationsIcon: w,
  brandColor: R,
  contentPadding: A = Qn,
  userMenuItems: v,
  sidebarBackgroundColor: E,
  sidebarHeaderBackgroundColor: M,
  groupAccentColor: y,
  activeSidebarForegroundColor: _,
  enableRefreshToken: b = !1,
  holdSessionSkeleton: I = !1,
  sessionSkeletonContent: L,
  activePath: $,
  onLinkClick: C,
  showProfile: k = !0,
  userName: B,
  userRole: z,
  userAvatar: G,
  userEmail: T,
  onLogout: H,
  showSettings: se = !0,
  onSettingsClick: ye,
  onProfileClick: fe,
  onAiUsageClick: it,
  showNotifications: Se = !0,
  notificationCount: Pe = 0,
  NotificationSidebarContent: N,
  whatsNewCount: W = 0,
  onNotificationsClick: Q,
  platforms: j,
  currentPlatformKey: Y,
  onPlatformSelect: ie,
  onVerify: J,
  alertProps: U,
  style: Je,
  sidebarStyles: ee,
  contentStyles: we,
  accentColor: pe,
  sidebarAccentColor: De,
  sidebarActiveBackgroundColor: me,
  sidebarGroupArrowColor: Qe,
  sidebarForegroundColor: ge,
  contentBackgroundColor: Ce,
  theme: he = "light",
  darkModeSelector: Ke,
  showThemeToggler: et = !1,
  onThemeToggle: at,
  GlobalChatSidebar: Ct,
  useChatSidebar: Ot,
  chatPanelMode: Qt = "docked",
  chatPanelPosition: eo = "right",
  chatPanelWidth: to = 420,
  onChatClose: oo,
  showAssistant: ct = !1,
  assistantPlacement: $t = "sidebar",
  assistantShortcut: ro = "j",
  onAssistantClick: lt,
  assistantActive: mt = !1,
  assistantBusy: Mt = !1,
  customNavbar: Lt,
  customNavbarProps: Lo,
  redirectToLogin: gt,
  apiBaseUrl: no
}) => {
  const xt = zn(), ae = Gn(xt.breakpoints.down("md")), f = sn(
    () => Io(Lr(he)),
    [he]
  ), D = he === "dark", X = pe ?? "#01584f", P = De ?? X, K = rs(
    typeof Ce == "object" ? Ce[he] : Ce,
    D
  ), q = a === "collapsible", xe = a === "panel", ce = xe && s && !ae, le = a === "rail-labeled", Do = q || le, Be = os(
    E,
    D
  ), ko = M ?? Be, Ee = ge ?? (D ? "#ffffff" : P), Dt = y ?? Kt(Ee), kt = M ? rr(ko) : Ee, Nr = (F) => /* @__PURE__ */ t(
    V,
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
  ), so = R ?? kt, [Fr, No] = ut(
    null
  ), Fo = ((j == null ? void 0 : j.length) ?? 0) > 1, Es = an(() => No(null), []), Rs = (F) => {
    No(null), ie ? ie(F) : F.key !== Y && F.url && window.location.assign(F.url);
  }, Wr = (F) => Fo ? /* @__PURE__ */ t(
    Ha,
    {
      anchorEl: Fr,
      onClose: Es,
      platforms: j,
      currentKey: Y,
      onSelect: Rs,
      accentColor: X,
      glass: c === "flyout" && (q || xe) && !ae,
      children: F
    }
  ) : F, io = Fo ? (F) => No(F.currentTarget) : m, ao = Fo ? !!Fr : void 0, Wo = Wr(
    p ?? Nr(so)
  ), Is = Wr(
    p ?? Nr(R ?? Ee)
  ), Po = rc(), ke = $o(c, a), ze = ke || !Po.expanded, tt = s && !ae && gi(u, c, a), ot = ec(tt), Pr = ke ? "popover" : "expand", Br = ke ? Xt : Ht, zr = ke ? "transparent" : Be, Gr = ke && !M ? "transparent" : ko, [_s, Hr] = ut(!1), Ts = an(() => Hr(!1), []), je = ts({
    showSidebar: s,
    isMobile: ae,
    sidebarVariant: a,
    sidebarSubmenu: c,
    sidebarAutoHide: u
  }), [Ur, dt] = ut(!1), [Xr, Bo] = ut(!1), Re = ae && l === "bottom-bar", Kr = `calc(${Ss}px + env(safe-area-inset-bottom, 0px))`, [zo, jr] = ut({ open: !1, tab: "notifications" }), Vr = () => jr((F) => ({ ...F, open: !1 })), As = Se && !!N, [Cs, Os] = ut(!0), [$s, Ms] = ut(!1), Go = Ot == null ? void 0 : Ot(), Yr = (Go == null ? void 0 : Go.isOpen) ?? !1, qr = Qt === "floating" ? "floating" : "docked", Ls = qr === "docked" && Yr && Ct && !ae ? to : 0, co = jo(J), Zr = jo(!1), Jr = sn(
    () => ca(no),
    [no]
  );
  xo(() => {
    co.current = J;
  }, [J]);
  const Ho = jo(lt);
  Ho.current = lt;
  const Nt = ct && ro ? ro.toLowerCase() : null;
  xo(() => {
    if (!Nt)
      return;
    const F = (re) => {
      (re.metaKey || re.ctrlKey) && !re.altKey && !re.shiftKey && re.key.toLowerCase() === Nt && Ho.current && (re.preventDefault(), Ho.current());
    };
    return window.addEventListener("keydown", F), () => window.removeEventListener("keydown", F);
  }, [Nt]);
  const Qr = (F) => {
    const re = H(F);
    re instanceof Promise && re.catch((Ve) => {
      console.error("Error in logout handler:", Ve);
    });
  };
  if (dc(() => {
    (() => {
      var re;
      try {
        const { isAuthenticated: Ve } = ia();
        if (!Ve) {
          console.log("No session found, redirecting to login"), Zt(), gt();
          return;
        }
        if (!Zr.current) {
          const { user: Wt, error: Ko } = aa();
          if (Wt && !Ko) {
            const zs = {
              name: Wt.name || "",
              email: Wt.email || "",
              profilePicture: Wt.profilePicture || "",
              role: Wt.role || ""
            };
            Zr.current = !0, (re = co.current) == null || re.call(co, zs);
          } else
            Ko && console.error("Error getting user data:", Ko);
        }
        Ms(!0);
      } catch (Ve) {
        console.error("Error checking session:", Ve), Zt(), gt();
      } finally {
        Os(!1);
      }
    })();
  }, [gt]), xo(() => {
    b && la(Jr, gt);
  }, [b, Jr]), Cs || I)
    return /* @__PURE__ */ t(
      na,
      {
        theme: he,
        darkModeSelector: Ke,
        sidebarVariant: a,
        sidebarSubmenu: c,
        sidebarAutoHide: u,
        showSidebar: s,
        contentPadding: A,
        sidebarBackgroundColor: E,
        contentBackgroundColor: Ce,
        content: L
      }
    );
  if (!$s)
    return null;
  const Ft = g ?? (Lt ? /* @__PURE__ */ t(Lt, { ...Lo }) : null), Ds = (F) => {
    dt(!1), Bo(!1), jr({ open: !0, tab: F });
  }, Uo = N && (() => Ds("notifications")), ks = Pe + W, en = {
    avatarColor: P,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: v == null ? void 0 : v.map(
      (F) => F.onClick || !F.path ? F : { ...F, onClick: () => C == null ? void 0 : C(F.path) }
    ),
    showNotifications: Se,
    notificationCount: Pe,
    whatsNewCount: W,
    onNotificationsClick: Uo,
    showProfile: k,
    userName: B,
    userRole: z,
    userAvatar: G,
    showSettings: se,
    onSettingsClick: ye,
    showThemeToggler: et,
    theme: he,
    onThemeToggle: at,
    onLogout: Qr
  }, Xo = (F) => /* @__PURE__ */ t(
    Ua,
    {
      ...en,
      compact: F,
      color: Ee,
      hoverColor: Dt
    }
  ), tn = Nt ? [lc() ? "⌘" : "Ctrl", Nt.toUpperCase()] : void 0, Ns = (F) => ct && $t === "sidebar" ? /* @__PURE__ */ t(
    In,
    {
      variant: F ? "sidebar-icon" : "sidebar",
      onClick: lt,
      active: mt,
      busy: Mt,
      shortcutKeys: tn,
      accentColor: Ee
    }
  ) : null, Fs = (F) => Ft ? /* @__PURE__ */ t(
    Ya,
    {
      search: Ft,
      icon: x,
      mode: F,
      onExpand: () => {
        Po.pin(), Hr(!0);
      },
      autoFocus: _s,
      onAutoFocused: Ts,
      color: Ee,
      hoverColor: Dt
    }
  ) : null, lo = (F) => {
    const re = Ns(F !== "full"), Ve = Fs(F);
    return re || Ve ? /* @__PURE__ */ S(
      Gt,
      {
        spacing: ke ? `${Oo}px` : 1.5,
        sx: { alignItems: F === "full" ? "stretch" : "center" },
        children: [
          re,
          ke && re && Ve ? /* @__PURE__ */ t(
            V,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Kt(Ee)}`
              }
            }
          ) : null,
          Ve
        ]
      }
    ) : void 0;
  }, on = () => /* @__PURE__ */ t(
    ar,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: $,
      onLinkClick: C,
      showHeaderBar: q,
      logo: Wo,
      title: n,
      onBrandClick: io,
      brandMenuOpen: ao,
      brandColor: so,
      headerBackgroundColor: q ? Gr : void 0,
      headerForegroundColor: q ? kt : void 0,
      activeAccentColor: P,
      activeBackgroundColor: me,
      groupArrowColor: Qe,
      groupAccentColor: y,
      activeForegroundColor: _,
      foregroundColor: ge,
      surfaceBackgroundColor: zr,
      flyoutSurfaceColor: Be,
      collapsed: le || ze,
      showLabels: le,
      expandedWidth: Qo,
      collapsedWidth: le ? Zn : Br,
      topContent: lo(
        le ? "popover" : ze ? Pr : "full"
      ),
      footer: Xo(le || ze),
      submenuMode: ke ? "flyout" : "inline"
    }
  ), rn = (F) => ke ? Ws(F) : Ps(F), Ws = (F) => /* @__PURE__ */ S(
    V,
    {
      component: "aside",
      ...tt ? ot.rootProps : {},
      "data-auto-hide": tt ? "true" : void 0,
      "data-shown": tt ? String(ot.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (re) => re.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...tt ? {
          position: "fixed",
          left: 0,
          width: Xt + 2 * ht,
          pointerEvents: "none"
        } : {
          width: je,
          minWidth: je,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: K
        }
      },
      children: [
        tt && /* @__PURE__ */ t(
          V,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: ic,
              pointerEvents: "auto"
            }
          }
        ),
        tt && /* @__PURE__ */ t(
          V,
          {
            ref: ot.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(ot.nearEdge),
            "aria-hidden": "true",
            sx: {
              "--edge-glow-y": "50%",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Bn,
              pointerEvents: "none",
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${Bn}px ${er}px at 0 var(--edge-glow-y), ${We(Ee, D ? 0.5 : 0.4)}, ${We(Ee, 0)})`,
              opacity: ot.nearEdge ? 1 : 0,
              transition: "opacity 200ms ease",
              // And a bright line along the edge beside it
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 3,
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${er}px), ${We(Ee, D ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${er}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ S(
          V,
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
              borderRadius: `${Jn}px`,
              display: "flex",
              flexDirection: "column",
              ...tt && {
                pointerEvents: ot.shown ? "auto" : "none",
                opacity: ot.shown ? 1 : 0,
                transform: ot.shown ? "none" : `translateX(calc(-100% - ${2 * ht}px))`,
                transition: ac,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...ee
            },
            children: [
              /* @__PURE__ */ t(
                Jt,
                {
                  isDark: D,
                  solid: Be,
                  sx: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit"
                  }
                }
              ),
              /* @__PURE__ */ t(
                V,
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
  ), Ps = (F) => /* @__PURE__ */ t(
    V,
    {
      component: "aside",
      sx: {
        width: Ht,
        minWidth: Ht,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (re) => re.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        V,
        {
          ...ke ? {} : Po.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": ze ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: ze ? Ht : Qo,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Be,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: ze ? "none" : `4px 0 24px rgba(0, 0, 0, ${D ? 0.5 : 0.12})`,
            transition: sc,
            ...ee
          },
          children: F
        }
      )
    }
  ), Bs = es(
    A,
    xt
  );
  return /* @__PURE__ */ t(wo, { theme: f, children: /* @__PURE__ */ t(Yn.Provider, { value: P, children: /* @__PURE__ */ t(To.Provider, { value: Be, children: /* @__PURE__ */ t(ws.Provider, { value: w, children: /* @__PURE__ */ S(
    V,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Je
      },
      children: [
        /* @__PURE__ */ t(tr, {}),
        ae && /* @__PURE__ */ t(
          Aa,
          {
            height: bo,
            onMenuClick: s && !Re ? () => dt(!0) : void 0,
            appName: n,
            logo: Wo,
            onBrandClick: io,
            brandMenuOpen: ao,
            background: ko,
            color: kt,
            brandColor: so,
            endContent: Se ? /* @__PURE__ */ t(
              kr,
              {
                count: ks,
                onClick: Uo,
                color: kt,
                hoverColor: Dt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !ae && le && /* @__PURE__ */ t(
          V,
          {
            component: "aside",
            sx: {
              width: je,
              minWidth: je,
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
              ...ee
            },
            children: on()
          }
        ),
        s && !ae && q && rn(
          /* @__PURE__ */ S(Me, { children: [
            on(),
            (U == null ? void 0 : U.show) && !ze && /* @__PURE__ */ t(go, { ...U })
          ] })
        ),
        ce && rn(
          /* @__PURE__ */ S(Me, { children: [
            /* @__PURE__ */ t(
              Ba,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: $,
                onLinkClick: C,
                logo: Wo,
                title: n,
                onBrandClick: io,
                brandMenuOpen: ao,
                brandColor: so,
                headerBackgroundColor: Gr,
                headerForegroundColor: kt,
                activeAccentColor: P,
                activeBackgroundColor: me,
                groupArrowColor: Qe,
                groupAccentColor: y,
                activeForegroundColor: _,
                foregroundColor: ge,
                surfaceBackgroundColor: zr,
                flyoutSurfaceColor: Be,
                collapsed: ze,
                expandedWidth: Qo,
                collapsedWidth: Br,
                topContent: lo(
                  ze ? Pr : "full"
                ),
                submenuMode: ke ? "flyout" : "inline",
                color: Ee,
                hoverColor: Dt,
                avatarColor: P,
                showProfile: k,
                userName: B,
                userEmail: T,
                userRole: z,
                userAvatar: G,
                showNotifications: Se,
                notificationCount: Pe,
                onNotificationsClick: As ? Uo : Q,
                whatsNewCount: W,
                onProfileClick: fe,
                onAiUsageClick: it,
                menuItems: v,
                onLogout: Qr,
                theme: he,
                showThemeToggler: et,
                onThemeToggle: at
              }
            ),
            (U == null ? void 0 : U.show) && !ze && /* @__PURE__ */ t(go, { ...U })
          ] })
        ),
        s && !ae && !Do && !xe && /* @__PURE__ */ t(
          cn,
          {
            variant: "permanent",
            sx: {
              width: je,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: je,
                boxSizing: "border-box",
                bgcolor: K,
                borderRight: "none"
              },
              ...ee
            },
            children: /* @__PURE__ */ S(
              V,
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
                    V,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        Eo,
                        {
                          logo: Is,
                          appName: n,
                          onClick: io,
                          menuOpen: ao,
                          color: R ?? Ee,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  lo("popover"),
                  /* @__PURE__ */ S(
                    V,
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
                          wa,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: $,
                            onLinkClick: C,
                            accentColor: P,
                            surfaceBackgroundColor: K,
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
                  /* @__PURE__ */ t(V, { sx: { py: 1.5 }, children: Xo(!0) })
                ]
              }
            )
          }
        ),
        s && ae && /* @__PURE__ */ S(
          js,
          {
            anchor: Re ? "bottom" : "left",
            open: Ur,
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
                  bgcolor: Be,
                  backgroundImage: "none",
                  ...Re ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              Re && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                V,
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
                    C == null || C(F), dt(!1);
                  },
                  onLinkAction: () => dt(!1),
                  collapsed: !1,
                  expandedWidth: Re ? "100%" : nc,
                  activeAccentColor: P,
                  activeBackgroundColor: me,
                  groupArrowColor: Qe,
                  groupAccentColor: y,
                  activeForegroundColor: _,
                  foregroundColor: ge,
                  surfaceBackgroundColor: Be,
                  topInsetPx: Re ? 8 : 0,
                  topContent: Re ? void 0 : lo("full"),
                  footer: Re ? void 0 : Xo(!1)
                }
              ),
              (U == null ? void 0 : U.show) && /* @__PURE__ */ t(go, { ...U })
            ]
          }
        ),
        Re && Ft && /* @__PURE__ */ t(
          Ta,
          {
            open: Xr,
            onClose: () => Bo(!1),
            search: Ft
          }
        ),
        Re && /* @__PURE__ */ t(
          _a,
          {
            ...en,
            pinnedLinks: h,
            activePath: $,
            onLinkClick: C,
            onMenuClick: s ? () => dt(!0) : void 0,
            menuOpen: Ur,
            onSearchClick: Ft ? () => Bo(!0) : void 0,
            searchOpen: Xr,
            showAssistant: ct,
            onAssistantClick: lt,
            assistantActive: mt,
            showProfile: k,
            background: Be,
            color: Ee,
            activeColor: P,
            activeBackground: Dt
          }
        ),
        /* @__PURE__ */ t(
          V,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Bs,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": ae ? `${bo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: je ? `calc(100% - ${je}px)` : "100%",
              mt: ae ? `${bo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Re && {
                pb: `calc(var(--lumora-content-padding) + ${Kr})`
              },
              backgroundColor: K,
              ...we
            },
            children: e
          }
        ),
        Ct && /* @__PURE__ */ t(
          ha,
          {
            open: Yr,
            variant: qr,
            position: eo,
            width: to,
            sidebarWidthPx: je,
            bottomOffsetPx: ct && $t === "floating" ? cc : 0,
            fullScreen: ae,
            fullScreenBottom: Re ? Kr : "0px",
            onClose: oo,
            children: /* @__PURE__ */ t(Ct, {})
          }
        ),
        ct && $t === "floating" && !Re && /* @__PURE__ */ t(
          In,
          {
            variant: "floating",
            rightOffsetPx: Ls,
            shortcutKeys: tn,
            onClick: lt,
            active: mt,
            busy: Mt
          }
        ),
        Se && N && /* @__PURE__ */ t(
          cn,
          {
            anchor: "right",
            open: zo.open,
            onClose: Vr,
            slotProps: {
              paper: {
                sx: {
                  width: 380,
                  maxWidth: "100vw"
                }
              }
            },
            children: /* @__PURE__ */ t(
              N,
              {
                onClose: Vr,
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
  te as AUTH_ERROR_CODES,
  Z as AuthError,
  ar as CollapsibleSidebar,
  al as FullBleedSection,
  ea as Kbd,
  na as LumoraShellSkeleton,
  ll as LumoraWrapper,
  Zt as clearAuthTokens,
  ll as default,
  cl as getAuthErrorMessage,
  qt as getAuthTokens,
  aa as getCurrentUser,
  Lr as getDesignTokens,
  ia as isAuthenticated,
  dr as logAuthError,
  ms as storeAuthTokens
};
