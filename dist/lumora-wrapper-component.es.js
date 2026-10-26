import { jsx as t, jsxs as w, Fragment as Le } from "react/jsx-runtime";
import js from "@mui/icons-material/KeyboardArrowDownRounded";
import Vs from "@mui/icons-material/KeyboardArrowUpRounded";
import qs from "@mui/icons-material/ChevronRightRounded";
import O from "@mui/material/Box";
import ln from "@mui/material/Collapse";
import Je from "@mui/material/Divider";
import _e from "@mui/material/IconButton";
import mo from "@mui/material/ListItemButton";
import Te from "@mui/material/ListItemIcon";
import Xe from "@mui/material/ListItemText";
import De from "@mui/material/Stack";
import Ce from "@mui/material/Tooltip";
import se from "@mui/material/Typography";
import { useTheme as je, createTheme as Co, alpha as Pe, ThemeProvider as _o } from "@mui/material/styles";
import * as d from "react";
import { useMemo as dn, useState as rt, useCallback as Yo, useRef as go, useEffect as Xt, useLayoutEffect as Ys } from "react";
import Ke from "@mui/material/ButtonBase";
import { keyframes as xr } from "@emotion/react";
import br from "@mui/material/Fade";
import vr from "@mui/material/Popper";
import { useTheme as Un, CssBaseline as nr, GlobalStyles as Zs, Box as V, useMediaQuery as Xn, Stack as Kt, Skeleton as Fe, Drawer as un, SwipeableDrawer as Js } from "@mui/material";
import fn from "axios";
import Qs from "@mui/material/Card";
import ei from "@mui/material/CardContent";
import Kn from "@mui/material/Button";
import ti from "@mui/icons-material/AutoAwesomeRounded";
import oi from "@mui/material/Grow";
import yr from "@mui/material/Paper";
import ri from "@mui/material/Slide";
import ni from "@mui/material/ListSubheader";
import it from "@mui/material/MenuItem";
import wr from "@mui/material/MenuList";
import jn from "@mui/icons-material/MenuRounded";
import Sr from "@mui/icons-material/SearchRounded";
import Vn from "@mui/icons-material/LogoutRounded";
import qn from "@mui/icons-material/NotificationsNoneOutlined";
import si from "@mui/icons-material/SettingsOutlined";
import ii from "@mui/material/Avatar";
import ai from "@mui/material/Menu";
import pn from "@mui/material/ToggleButton";
import ci from "@mui/material/ToggleButtonGroup";
import li from "@mui/material/Drawer";
import di from "@mui/material/AppBar";
import ui from "@mui/material/Toolbar";
import Yn from "@mui/material/Badge";
import fi from "@mui/icons-material/DarkModeOutlined";
import pi from "@mui/icons-material/LightModeOutlined";
import hi from "@mui/icons-material/SettingsBrightnessOutlined";
import Er from "@mui/material/Popover";
import mi from "@mui/icons-material/CheckRounded";
const To = ({
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
  }, u = /* @__PURE__ */ w(Le, { children: [
    o ? /* @__PURE__ */ t(
      se,
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
  ) : /* @__PURE__ */ t(De, { direction: "row", "data-testid": i, sx: c, children: u });
}, sr = !1, Tt = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, It = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, Et = (e, o) => e ? `${e}/${o.text}` : o.text, st = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => st(n, o))) ?? !1 : !1;
}, Ue = (e, o) => !!(o && e.path === o), Rr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return It(r) ? Rr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), ir = (e) => {
  const o = Oo(e);
  if (!o)
    return "#ffffff";
  const [r, n, s] = o.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Yt = (e) => {
  const o = Oo(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = o;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, ar = (e, o) => {
  const r = Oo(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, Oo = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Zn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Ir = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", gi = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", xi = xr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, ve = "@media (prefers-reduced-motion: reduce)", re = 6, _r = "9, 193, 174", Jn = d.createContext(
  void 0
), $o = d.createContext(
  void 0
), Tr = (e) => d.useContext($o) ?? e, Mo = () => {
  const e = d.useContext(Jn), o = e ? Oo(e) : null;
  return o ? o.join(", ") : _r;
}, bi = (e, o, r = _r) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${gi(e)}, 0 0 0 1px ${Ir(e)}`
}), Lo = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: Ir(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${re}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), Ar = xr`
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
`, Cr = xr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Qn = (e, o = _r, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Ao = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: ar(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${ar(e, 0.45)}`
}, vi = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${Ir(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${re}px`,
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
}, yi = 100, es = 80, So = 56, jt = 72, qt = 64, de = 44, Zt = 24, Do = 4, nt = 8, ts = re, os = { xs: 2, md: "18px" }, rs = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, ko = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), wi = (e, o, r) => e && ko(o, r), ns = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || o ? 0 : r === "rail-labeled" ? es : ko(n, r) ? s ? 0 : qt + 2 * nt : r === "collapsible" || r === "panel" ? jt : yi, ss = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), is = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), as = { stiffness: 320, damping: 24 }, cs = { stiffness: 320, damping: 28 }, Or = { stiffness: 520, damping: 20 }, $r = { stiffness: 380, damping: 36 }, No = { stiffness: 260, damping: 28 }, Si = "cubic-bezier(0.32, 1.28, 0.52, 1)", Ei = 420, hn = 60, Ri = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), mn = /* @__PURE__ */ new Map(), ye = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, s = mn.get(n);
  if (s)
    return s;
  if (!Ri)
    return { easing: Si, duration: Ei };
  const i = 1 / 600;
  let a = 0, c = 0, u = 0, l = 1 / hn;
  const h = [0];
  for (; u < 3; ) {
    const m = (-e * (a - 1) - o * c) / r;
    if (c += m * i, a += c * i, u += i, u >= l && (h.push(a), l += 1 / hn, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  h[h.length - 1] = 1;
  const p = {
    easing: `linear(${h.map((m) => Number(m.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return mn.set(n, p), p;
}, Jt = (e) => !!(e && typeof e.animate == "function"), At = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ii = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, _i = (e, o = 1.14) => {
  if (!Jt(e) || At())
    return;
  const r = ye(Or);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, Ti = 1.6, ls = 110, at = 110, vt = ye($r), Ai = (e, o = ls) => e >= o ? 0 : (1 + Math.cos(Math.PI * e / o)) / 2, ds = (e, {
  enabled: o,
  axis: r,
  itemSelector: n,
  glyphSelector: s,
  transition: i,
  maxScale: a = Ti,
  reach: c = ls,
  carrierSelector: u
}) => {
  const l = d.useRef(0), h = d.useRef(
    /* @__PURE__ */ new WeakMap()
  ), p = d.useRef(/* @__PURE__ */ new Set()), m = d.useRef(/* @__PURE__ */ new Set()), g = i ? `, ${i}` : "", x = (b) => u ? b.closest(u) : null, S = (b) => {
    var $;
    const [I = "0", L = "0"] = ((($ = x(b)) == null ? void 0 : $.style.translate) ?? "").split(" ").filter(Boolean);
    return r === "x" ? parseFloat(I) || 0 : parseFloat(L) || 0;
  }, R = (b) => {
    const I = b.getBoundingClientRect();
    return (r === "x" ? I.left + I.width / 2 : I.top + I.height / 2) - S(b);
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
      C.style.transition = `scale ${vt.duration}ms ${vt.easing}${g}`, C.style.scale = "";
    }), p.current.clear(), m.current.forEach((C) => {
      C.style.transition = `translate ${vt.duration}ms ${vt.easing}`, C.style.translate = "";
    }), m.current.clear(), (b = e.current) == null || b.style.setProperty(
      "--dock-scale-timing",
      `${vt.duration}ms ${vt.easing}`
    ), (I = e.current) == null || I.style.removeProperty("--dock-spread"), (L = e.current) == null || L.style.removeProperty("--dock-max-scale"), ($ = e.current) == null || $.style.removeProperty("--dock-active-scale");
  }, M = (b, I, L) => {
    const $ = r === "x" ? I : L, C = A(b).map(({ item: z, glyph: G }) => {
      const T = R(z), H = 1 + (v(z, G) - 1) * Ai(Math.abs($ - T), c);
      G.style.transition = `scale ${at}ms ease-out${g}`, H > 1.001 ? (G.style.scale = H.toFixed(3), p.current.add(G)) : p.current.has(G) && (G.style.scale = "", p.current.delete(G));
      const ie = r === "x" ? z.offsetWidth : z.offsetHeight;
      return { item: z, centre: T, scale: H, growth: (H - 1) * ie };
    });
    b.style.setProperty(
      "--dock-scale-timing",
      `${at}ms ease-out`
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
      const ie = C.reduce(
        (we, fe) => fe.centre < G ? we + fe.growth : we,
        T / 2
      );
      H.style.transition = `translate ${at}ms ease-out`, Math.abs(ie) > 0.1 ? (H.style.translate = r === "x" ? `${ie.toFixed(1)}px 0` : `0 ${ie.toFixed(1)}px`, m.current.add(H)) : m.current.has(H) && (H.style.translate = "", m.current.delete(H));
    });
  }, y = (b) => {
    if (b.pointerType && b.pointerType !== "mouse" || At())
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
    if (!o || !I || At())
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
}, Qt = "data-rail-item", us = `[${Qt}], button, [role="button"]`, Ct = d.createContext(!1), Mr = () => {
  const e = d.useContext(Ct), o = je(), r = d.useContext($o);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: Lo(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, _t = ye($r), Lr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: a = null
}) => {
  const c = d.useRef(null), u = Mo(), [l, h] = d.useState(null), p = d.useRef(null), m = d.useRef(null), g = (y, _) => {
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
  }, S = (y) => {
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
    if (p.current = l.top, !Jt(y) || At() || _ === null || l.instant)
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
      O,
      {
        ref: c,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...Qn(o, u),
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
          transition: l.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${at}ms ease-out)` : `translate ${_t.duration}ms ${_t.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${at}ms ease-out)`,
          [ve]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: S,
      onMouseLeave: v,
      onFocus: R,
      onBlur: E,
      onScrollCapture: v
    } : {}
  };
}, Ci = (e, o, r = null) => {
  const n = Lr({
    enabled: e,
    isDark: o,
    selector: us,
    // The rail's buttons exactly, so the hover sits on the item
    size: de,
    radius: re,
    pinSelector: `[${Qt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Oi = (e, o) => {
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
}, $i = ({
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
        `[${Qt}][data-active="true"]`
      );
      if (!m) {
        a(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const g = Oi(m, p);
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
    if (c.current = i.top, p === null || i.instant || !Jt(h) || At())
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
      { duration: _t.duration, easing: "ease-out" }
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
        ...Ao(r, o),
        borderRadius: `${re}px`,
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
        transition: i.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${at}ms ease-out)` : `translate ${_t.duration}ms ${_t.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${at}ms ease-out)`,
        [ve]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Ae = 52, Zo = 36, Mi = 1.8, Li = Ae / 2, Jo = "[data-flyout-tile]", Dr = 4, kr = 32, cr = kr + Dr, Di = 104, Gt = 24, fs = "background 160ms ease, color 160ms ease, transform 120ms ease", lr = 10, ps = 10, gn = ps + 2, ki = 18, Ni = 1.08, Fi = 1190, Wi = 1195, xn = 120, bn = ye(as), Rt = ye($r), vn = ye(No), yn = 8192, Pi = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), a = e + r, c = o + n, u = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${yn} V ${yn} H 0 Z M ${e + i} ${o} H ${a - i} ${u} ${a} ${o + i} V ${c - i} ${u} ${a - i} ${c} H ${e + i} ${u} ${e} ${c - i} V ${o + i} ${u} ${e + i} ${o} Z')`;
}, Bi = ({
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
  const x = je(), S = x.palette.mode === "dark", R = !!(e && r), A = d.useRef(null);
  e && o && (A.current = { group: e, key: o });
  const v = A.current, E = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const F = r.getBoundingClientRect();
      return {
        x: n,
        y: F.top,
        left: n,
        right: n,
        top: F.top,
        bottom: F.bottom,
        width: 0,
        height: F.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), M = d.useRef(E);
  E && (M.current = E), d.useEffect(() => {
    r && _i(r, Ni);
  }, [r]);
  const [y, _] = d.useState(!1);
  d.useEffect(() => {
    if (!R) {
      _(!1);
      return;
    }
    let F = 0;
    const W = requestAnimationFrame(() => {
      F = requestAnimationFrame(() => _(!0));
    });
    return () => {
      cancelAnimationFrame(W), cancelAnimationFrame(F);
    };
  }, [R]);
  const b = d.useMemo(
    () => v ? Rr(v.group.subitems, v.group.icon) : [],
    [v]
  ), I = d.useRef(null), L = ds(I, {
    enabled: R,
    axis: "x",
    itemSelector: Jo,
    transition: fs,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: Mi,
    // The neighbours make room as it grows
    carrierSelector: '[role="menuitem"]'
  }), $ = d.useRef(void 0), C = d.useCallback((F) => {
    var q;
    (q = $.current) == null || q.call($), $.current = void 0;
    const W = F == null ? void 0 : F.parentElement;
    if (!F || !W || typeof MutationObserver > "u")
      return;
    const ee = () => {
      const ae = F.offsetLeft - F.offsetWidth / 2, Q = ae + F.offsetWidth;
      let U = 0;
      W.querySelectorAll(Jo).forEach((te) => {
        var ge;
        if (te.dataset.flyoutGrows !== "up")
          return;
        const Ee = parseFloat(te.style.scale) || 1, pe = parseFloat(
          ((ge = te.closest('[role="menuitem"]')) == null ? void 0 : ge.style.translate) ?? ""
        ) || 0, ke = te.offsetLeft + pe - (Ee - 1) * Ae / 2;
        ke < Q && ke + Ee * Ae > ae && (U = Math.max(
          U,
          (Ee - 1) * Ae - te.offsetTop - gn
        ));
      });
      const Qe = U > 0 ? `0 ${(-U).toFixed(1)}px` : "";
      F.style.translate !== Qe && (F.style.translate = Qe);
    }, j = new MutationObserver(ee);
    j.observe(W, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), $.current = () => j.disconnect();
  }, []), k = d.useRef([]), [B, z] = d.useState([]);
  d.useLayoutEffect(() => {
    const F = () => {
      const ee = b.map(
        (j, q) => {
          var ae;
          return ((ae = k.current[q]) == null ? void 0 : ae.offsetWidth) ?? 0;
        }
      );
      z(
        (j) => j.length === ee.length && j.every((q, ae) => q === ee[ae]) ? j : ee
      );
    };
    if (F(), typeof ResizeObserver > "u")
      return;
    const W = new ResizeObserver(F);
    return k.current.slice(0, b.length).forEach((ee) => ee && W.observe(ee)), () => W.disconnect();
  }, [b]);
  const G = Gi(B, b.length), T = d.useRef([]), H = b.findIndex(
    ({ sub: F }) => Ue(F, i)
  ), [ie, we] = d.useState(0);
  d.useEffect(() => {
    we(Math.max(H, 0));
  }, [o]), d.useEffect(() => {
    if (!R || !a)
      return;
    const F = setTimeout(() => {
      var W;
      return (W = T.current[0]) == null ? void 0 : W.focus();
    });
    return () => clearTimeout(F);
  }, [R, a, o]);
  const fe = (F) => {
    var ee;
    const W = Math.max(0, Math.min(F, b.length - 1));
    we(W), (ee = T.current[W]) == null || ee.focus();
  }, ct = (F, W) => {
    var ee;
    switch (F.key) {
      case "ArrowRight":
        fe(W + 1);
        break;
      case "ArrowLeft":
        W === 0 ? u(!0) : fe(W - 1);
        break;
      case " ":
        (ee = T.current[W]) == null || ee.click();
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
    F.preventDefault();
  }, Se = x.palette.text.primary, Be = S ? x.palette.text.primary : h;
  return /* @__PURE__ */ w(Le, { children: [
    /* @__PURE__ */ t(br, { in: R, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
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
          ...s ? { clipPath: Pi(s) } : {},
          zIndex: Fi,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: S ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)"
        }
      }
    ) }),
    /* @__PURE__ */ t(
      vr,
      {
        open: R,
        anchorEl: E ?? M.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Both rows centred on the rail icon, a gap from the rail
          {
            name: "offset",
            options: { offset: [0, lr] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Wi,
          transition: y ? `transform ${Rt.duration}ms ${Rt.easing}` : "none",
          [ve]: { transition: "none" }
        },
        children: ({ TransitionProps: F }) => /* @__PURE__ */ t(
          zi,
          {
            in: (F == null ? void 0 : F.in) ?? R,
            onEnter: F == null ? void 0 : F.onEnter,
            onExited: F == null ? void 0 : F.onExited,
            panelProps: l,
            groupText: v == null ? void 0 : v.group.text,
            children: v ? /* @__PURE__ */ w(
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
                  height: cr + Ae + Dr + kr,
                  // The panel stretches as the dock pushes
                  // the pages along, as the Dock's shelf does
                  mr: "var(--dock-spread, 0px)",
                  transition: `margin-right ${Rt.duration}ms ${Rt.easing}`,
                  [ve]: { transition: "none" }
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
                        mb: `${gn}px`,
                        transition: `translate ${at}ms ease-out`,
                        [ve]: {
                          transition: "none"
                        },
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        // The pages' own name colour
                        color: Lo(S).color
                      },
                      children: v.group.text
                    }
                  ),
                  b.map(({ sub: W, icon: ee }, j) => /* @__PURE__ */ t(
                    ms,
                    {
                      ref: (q) => {
                        T.current[j] = q;
                      },
                      nameRef: (q) => {
                        k.current[j] = q;
                      },
                      tileLeft: G.tiles[j],
                      nameLeft: G.names[j],
                      sub: W,
                      icon: ee,
                      index: j,
                      active: Ue(
                        W,
                        i
                      ),
                      tabIndex: j === ie ? 0 : -1,
                      onClick: (q) => {
                        Tt(q) && (q.preventDefault(), c(W.path), u());
                      },
                      onKeyDown: (q) => ct(q, j),
                      onFocus: (q) => {
                        we(j);
                        const ae = q.currentTarget.querySelector(
                          Jo
                        );
                        ae && q.currentTarget.matches(
                          ":focus-visible"
                        ) && L.swellOn(ae);
                      },
                      accentColor: h,
                      activeBackgroundColor: p,
                      activeForegroundColor: m,
                      labelColor: Se,
                      iconColor: Be,
                      surface: g,
                      isDark: S
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
}, zi = ({
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
    if (Ii(l), e) {
      o == null || o(), Jt(l) && !At() && l.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: vn.duration, easing: vn.easing }
      );
      return;
    }
    if (!Jt(l)) {
      r == null || r();
      return;
    }
    let h = !1;
    const p = () => {
      !h && !u.current && (h = !0, r == null || r());
    }, m = setTimeout(p, xn + 100);
    return l.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: xn,
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
        p: `${ps}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -lr - 2,
          width: lr + 2
        }
      },
      children: i
    }
  );
}, hs = (e) => e % 2 === 1, Gi = (e, o) => {
  const r = [], n = [];
  let s = -Gt, i = -Gt, a = -Gt;
  for (let c = 0; c < o; c += 1) {
    const u = e[c] || Ae, l = hs(c), h = l ? i : a, p = Math.max(
      s + Gt + Ae / 2,
      h + Gt + u / 2
    );
    s = p + Ae / 2, l ? i = p + u / 2 : a = p + u / 2, r.push(Math.round(p - Ae / 2)), n.push(Math.round(p - u / 2));
  }
  return {
    tiles: r,
    names: n,
    width: Math.round(Math.max(s, i, a, 0))
  };
}, ms = d.forwardRef(
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
    iconColor: S,
    surface: R,
    isDark: A
  }, v) => {
    const E = hs(i), M = Lo(A, R), y = {
      animation: `${xi} ${bn.duration}ms ${bn.easing} both`,
      animationDelay: `${i * ki}ms`,
      [ve]: { animation: "none" }
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
    return /* @__PURE__ */ w(
      Ke,
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
          [ve]: {
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
                width: Ae,
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
                top: cr,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: Ae,
                height: Ae,
                p: 0,
                borderRadius: `${Li}px`,
                // Grows out of the row, away from its name
                transformOrigin: E ? "center top" : "center bottom",
                transition: `scale ${Rt.duration}ms ${Rt.easing}, ${fs}`,
                "& .MuiSvgIcon-root": {
                  fontSize: Zo,
                  color: S,
                  transition: "color 160ms ease"
                },
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                '& [role="img"], & [role="img"] > img': {
                  width: Zo,
                  height: Zo
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
                top: E ? 0 : cr + Ae + Dr,
                height: kr,
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
                    maxWidth: Di,
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
ms.displayName = "FlyoutTile";
const Hi = 50, Ui = 250, Xi = (e) => {
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
    u(), !(!n.current || n.current.pinned) && (l(), c.current = setTimeout(() => p(), Ui));
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
          Hi
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
}, Ki = 264, ji = 72, wn = 64, xo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Vi = 16, qi = 14, Yi = 4, Zi = 2.5, Sn = "0.7rem", En = 22, bo = ye(Or), pt = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
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
    Ce,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ t(
        se,
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
}, Ji = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, Qi = 4, ea = ({
  open: e,
  size: o = Vi
}) => e ? /* @__PURE__ */ t(Vs, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(js, { sx: { fontSize: o, opacity: 0.75 } }), Rn = ({ open: e }) => /* @__PURE__ */ t(
  qs,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), vo = 600, ht = `${Do}px`, ta = 1.4, Eo = (qt - de) / 2, oa = (e) => {
  const o = Math.max(0, e - Eo);
  return {
    pl: `${Math.max(0, Eo - o)}px`,
    pr: `${Math.max(0, Eo - e)}px`
  };
};
function ra(e, o) {
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
const yo = 8;
function na(e, o, r) {
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
      p.top < h.top + yo ? m = p.top - h.top - yo : p.bottom > h.bottom - yo && (m = p.bottom - h.bottom + yo), m !== 0 && n.scrollBy({ top: m, behavior: u });
    }, i = requestAnimationFrame(() => s("smooth")), a = window.setTimeout(() => s("smooth"), 350), c = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return c == null || c.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(a), c == null || c.disconnect();
    };
  }, [e, o, r]);
}
const dr = ({
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
  groupArrowColor: S,
  groupAccentColor: R,
  activeForegroundColor: A,
  foregroundColor: v,
  surfaceBackgroundColor: E,
  flyoutSurfaceColor: M,
  collapsed: y = !1,
  expandedWidth: _ = Ki,
  collapsedWidth: b = ji,
  showLabels: I = !1,
  topInsetPx: L = 0,
  topContent: $,
  footer: C,
  submenuMode: k = "inline"
}) => {
  var ne;
  const B = je(), z = B.palette.mode === "dark", G = d.useContext($o), T = k === "flyout" && y && !I, H = Xi(T), ie = d.useRef(null), we = d.useRef(null), fe = d.useRef(null);
  na(fe, r, y);
  const ct = ra(fe, T), Se = Ci(T, z, ((ne = H.state) == null ? void 0 : ne.key) ?? null), Be = ds(ie, {
    enabled: T,
    axis: "y",
    itemSelector: us,
    maxScale: ta,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: de + Do,
    transition: `transform ${bo.duration}ms ${bo.easing}, background-color 160ms ease`
  }), F = {
    ...Se.containerProps,
    ...Be.containerProps,
    ...T ? {
      onScrollCapture: () => {
        var f, D;
        (D = (f = Se.containerProps).onScrollCapture) == null || D.call(f), Be.settle();
      }
    } : {}
  }, W = x ?? g, ee = $i({
    enabled: T,
    isDark: z,
    color: W,
    containerRef: we
  }), { close: j } = H;
  d.useEffect(() => {
    j();
  }, [r, j]);
  const [q, ae] = d.useState(
    {}
  ), Q = A ?? ir(W), U = {
    bgcolor: W,
    color: Q,
    "& .MuiListItemIcon-root": { color: Q }
  }, Qe = {
    bgcolor: W,
    color: Q,
    borderRadius: "8px"
  }, te = R ?? Yt(g), Ee = E ?? (z ? B.palette.background.paper : "#ffffff"), pe = v ?? (z ? "text.primary" : g), ke = h ?? Ee, ge = p ?? (h ? ir(ke) : v ?? (z ? B.palette.text.primary : g)), et = Yt(ge), xe = (f) => {
    n == null || n(f);
  }, Oe = (f) => f ? {
    component: "a",
    href: f,
    onClick: (D) => {
      Tt(D) && (D.preventDefault(), xe(f));
    }
  } : {}, he = (f, D) => {
    ae((X) => ({ ...X, [f]: !D }));
  }, Ve = (f, D) => q[D] ?? st(f, r), tt = (f, D, X) => ({
    color: f ? Q : pe,
    bgcolor: f ? W : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? Q : pe,
      minWidth: X
    },
    "&:hover": f || I ? U : { bgcolor: D }
  }), lt = {
    "&.Mui-selected": {
      bgcolor: W
    },
    "&.Mui-selected:hover": U
  }, Ot = (f) => {
    const D = Ue(f, r), X = /* @__PURE__ */ w(
      mo,
      {
        disabled: !f.path,
        selected: D,
        ...Oe(f.path),
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
          ...tt(
            D,
            te,
            f.subtitle ? 48 : 36
          ),
          ...lt
        },
        children: [
          /* @__PURE__ */ t(Te, { children: f.icon }),
          /* @__PURE__ */ t(
            Xe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                pt,
                {
                  text: f.text,
                  fontWeight: vo
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ t(
                O,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    pt,
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
    return /* @__PURE__ */ w(O, { sx: { position: "relative" }, children: [
      X,
      /* @__PURE__ */ t(Ce, { title: P.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        _e,
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
            borderColor: D ? "rgba(255, 255, 255, 0.35)" : te,
            color: D ? Q : pe,
            "&:hover": {
              bgcolor: D ? "rgba(255, 255, 255, 0.15)" : te
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: D ? Q : pe,
              outlineOffset: 1
            }
          },
          children: P.icon
        }
      ) })
    ] }, f.text);
  }, $t = (f) => {
    const D = st(f, r), X = Ue(f, r), P = Et("", f), K = Ve(f, P);
    return /* @__PURE__ */ w(
      O,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: D ? te : "transparent"
        },
        children: [
          /* @__PURE__ */ w(
            mo,
            {
              onClick: () => he(P, K),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": X ? "true" : "false",
              "aria-expanded": K,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...tt(X, te, 36)
              },
              children: [
                /* @__PURE__ */ t(Te, { children: f.icon }),
                /* @__PURE__ */ t(
                  Xe,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      pt,
                      {
                        text: f.text,
                        fontWeight: vo
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(Rn, { open: K })
              ]
            }
          ),
          /* @__PURE__ */ t(ln, { in: K, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            O,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (Z) => ro(Z, P, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, ro = (f, D, X) => {
    const P = Et(D, f), K = Yi + (X - 1) * Zi;
    if (It(f)) {
      const be = st(f, r), ce = Ue(f, r), le = Ve(f, P);
      return /* @__PURE__ */ w(O, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ w(
          mo,
          {
            onClick: () => he(P, le),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": be ? "true" : "false",
            "aria-expanded": le,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: K,
              ...tt(ce, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(Te, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                Xe,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    pt,
                    {
                      text: f.text,
                      fontWeight: vo
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(Rn, { open: le })
            ]
          }
        ),
        /* @__PURE__ */ t(ln, { in: le, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(O, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (Wo) => ro(Wo, P, X + 1)
        ) }) })
      ] }, P);
    }
    const Z = Ue(f, r);
    return /* @__PURE__ */ w(
      mo,
      {
        selected: Z,
        disabled: !f.path,
        ...Oe(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": Z ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: K,
          ...tt(Z, "action.hover", 32),
          ...lt
        },
        children: [
          f.icon ? /* @__PURE__ */ t(Te, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            Xe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                pt,
                {
                  text: f.text,
                  fontWeight: vo
                }
              )
            }
          )
        ]
      },
      P
    );
  }, no = (f, D, X, P, K, Z) => {
    const be = !K, ce = /* @__PURE__ */ w(
      _e,
      {
        "aria-label": D,
        disabled: be,
        ...Oe(K),
        onMouseEnter: T ? H.onRailLeafEnter : void 0,
        ...T ? { [Qt]: "" } : {},
        "data-testid": (Z == null ? void 0 : Z.testId) ?? `sidebar-item-${D}`,
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
          color: P ? Q : pe,
          bgcolor: P ? W : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: En
          },
          "&:hover": Qe,
          ...xo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: T ? de : 44,
          height: T ? de : 44,
          color: P ? Q : pe,
          bgcolor: P ? W : "transparent",
          borderRadius: P ? "8px" : "50%",
          "&:hover": {
            bgcolor: P ? W : Z != null && Z.insideGroup ? "action.hover" : te,
            borderRadius: "8px"
          },
          ...xo,
          ...T ? io(P) : {}
        },
        children: [
          X,
          I ? /* @__PURE__ */ t(
            pt,
            {
              text: D,
              variant: "caption",
              center: !0,
              fontSize: Sn
            }
          ) : null
        ]
      }
    );
    return I ? be ? /* @__PURE__ */ t("span", { children: ce }, f) : /* @__PURE__ */ t(d.Fragment, { children: ce }, f) : /* @__PURE__ */ t(
      Ce,
      {
        title: D,
        placement: "right",
        arrow: !T,
        ...T ? dt : {},
        children: be ? /* @__PURE__ */ t("span", { children: ce }) : ce
      },
      f
    );
  }, so = {
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
  }, io = (f) => ({
    borderRadius: `${re}px`,
    "& .MuiSvgIcon-root": { fontSize: Zt },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${bo.duration}ms ${bo.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), dt = {
    slotProps: {
      tooltip: { sx: Lo(z, G) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, Mt = (f) => {
    var K;
    const D = st(f, r), X = Et("", f), P = ((K = H.state) == null ? void 0 : K.key) === X;
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
          _e,
          {
            ...H.triggerProps(X),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": P,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": D ? "true" : "false",
            "data-open": P ? "true" : "false",
            [Qt]: "",
            sx: {
              position: "relative",
              width: de,
              height: de,
              color: D ? Q : pe,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: D ? W : "transparent",
              ...io(D),
              // The icon stays centred, in line with every other
              // icon down the rail; the arrow sits in the room
              // beside it
              "&::after": {
                content: '""',
                position: "absolute",
                // Just past the button, in the rail's side gutter,
                // clear of the icon
                right: -Qi,
                top: "50%",
                transform: "translateY(-50%)",
                width: 5,
                height: 8,
                bgcolor: S ?? "currentColor",
                mask: `${Ji} center / contain no-repeat`,
                opacity: S ? 1 : 0.55,
                transition: "opacity 160ms ease"
              },
              // Pointed at, or its pages already out: the arrow has
              // said its piece
              '&:hover::after, &[data-open="true"]::after': {
                opacity: 0
              },
              ...xo
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, ao = (f) => {
    const D = st(f, r), X = Ue(f, r), P = Et("", f), K = Ve(f, P), Z = /* @__PURE__ */ w(
      _e,
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
          color: X ? Q : pe,
          bgcolor: X ? W : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": I ? { bgcolor: W, color: Q } : {
            bgcolor: X ? W : "transparent"
          },
          ...xo
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
                  fontSize: En
                }
              },
              children: f.icon
            }
          ) : f.icon,
          I ? /* @__PURE__ */ t(
            pt,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: Sn
            }
          ) : null,
          /* @__PURE__ */ t(ea, { open: K, size: qi })
        ]
      }
    ), be = I ? Z : /* @__PURE__ */ t(Ce, { title: f.text, placement: "right", arrow: !0, children: Z });
    return /* @__PURE__ */ w(
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
          bgcolor: D ? te : "transparent",
          ...I ? {} : { "&:hover": { bgcolor: te } }
        },
        children: [
          be,
          K ? Rr(f.subitems, f.icon).map(
            ({ sub: ce, icon: le }) => no(
              ce.path,
              ce.text,
              le,
              Ue(ce, r),
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
  }, ut = (f) => /* @__PURE__ */ t(
    O,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: no(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        Ue(f, r),
        f.path,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), mt = (f) => It(f) ? T ? Mt(f) : y ? ao(f) : $t(f) : y ? ut(f) : Ot(f), Lt = (f) => /* @__PURE__ */ t(
    De,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: y ? "center" : "stretch"
      },
      children: f.map(
        (D, X) => D.dividerAfter && X < f.length - 1 ? /* @__PURE__ */ w(d.Fragment, { children: [
          mt(D),
          /* @__PURE__ */ t(
            Je,
            {
              "data-testid": `sidebar-divider-${D.text}`,
              sx: {
                alignSelf: "stretch",
                my: T ? ht : 1,
                borderColor: "divider"
              }
            }
          )
        ] }, D.text) : mt(D)
      )
    }
  ), Dt = y ? b : _, Fo = () => {
    var be, ce;
    const { state: f } = H, D = f ? [...e, ...o].find(
      (le) => It(le) && Et("", le) === f.key
    ) ?? null : null, X = D ? ((be = ie.current) == null ? void 0 : be.getBoundingClientRect().right) ?? b : b, P = D ? ((ce = ie.current) == null ? void 0 : ce.closest("[data-rail-surface]")) ?? ie.current : null, K = P == null ? void 0 : P.getBoundingClientRect(), Z = P && K ? {
      left: K.left,
      top: K.top,
      width: K.width,
      height: K.height,
      radius: parseFloat(
        getComputedStyle(P).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Bi,
      {
        group: D,
        groupKey: D ? f.key : null,
        anchor: D ? H.getTrigger(f.key) : null,
        railEdge: X,
        railShape: Z,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: xe,
        onClose: H.close,
        panelProps: H.flyoutProps,
        accentColor: g,
        activeBackgroundColor: x,
        activeForegroundColor: Q,
        solidSurface: M ?? Ee
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
          height: wn,
          minHeight: wn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: ke
      },
      children: i || a ? /* @__PURE__ */ t(
        To,
        {
          logo: i,
          title: y ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: u,
          color: m ?? ge,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, co = !l && i ? /* @__PURE__ */ t(
    O,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: T ? ht : 1
      },
      children: /* @__PURE__ */ t(
        To,
        {
          logo: i,
          appName: a || "App",
          onClick: c,
          menuOpen: u,
          color: m ?? ge,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, xt = I ? 0.5 : T ? 0.75 : y ? 1 : 1.5;
  return /* @__PURE__ */ t(Ct.Provider, { value: T, children: /* @__PURE__ */ w(
    O,
    {
      ref: ie,
      ...F,
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
        bgcolor: Ee,
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
        ...T ? so : {}
      },
      children: [
        Se.lens,
        gt ?? co,
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
                width: T ? Eo : 8
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
              ...T ? oa(ct) : { px: xt },
              pt: L && !l ? `${L}px` : T ? ht : 1,
              pb: T ? ht : 2
            },
            children: /* @__PURE__ */ w(
              O,
              {
                ref: we,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  ee.glass,
                  Lt(e),
                  o.length > 0 ? /* @__PURE__ */ w(
                    O,
                    {
                      sx: { mt: "auto", pt: T ? ht : 2 },
                      children: [
                        C ? null : /* @__PURE__ */ t(
                          Je,
                          {
                            sx: {
                              mb: T ? ht : 1,
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
        C ? /* @__PURE__ */ t(
          O,
          {
            sx: {
              flexShrink: 0,
              px: xt,
              pb: 1.5,
              ...T ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: Zt
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              O,
              {
                sx: {
                  borderTop: `1px solid ${et}`,
                  pt: T ? ht : 1.5
                },
                children: C
              }
            )
          }
        ) : null,
        T ? Fo() : null
      ]
    }
  ) });
}, ur = "var(--lumora-content-padding, 0px)", In = `calc(${ur} * -1)`, pl = ({
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
        mx: In,
        mt: o ? In : 0,
        // Space below it, like any other block on the page
        mb: ur,
        px: i ? ur : 0,
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
), sa = ({ keys: e }) => /* @__PURE__ */ t(
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
), $e = {
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
}, Me = {
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
}, wt = {
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
}, gs = Co(), We = gs.typography.pxToRem, Nr = (e) => {
  const o = e === "dark", r = [...gs.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? $e[300] : $e[200],
        main: $e[400],
        dark: $e[700],
        contrastText: $e[50]
      },
      info: o ? {
        light: $e[500],
        main: $e[700],
        dark: $e[900],
        contrastText: $e[300]
      } : {
        light: $e[100],
        main: $e[300],
        dark: $e[600],
        contrastText: Me[50]
      },
      warning: o ? { light: wt[400], main: wt[500], dark: wt[700] } : { light: wt[300], main: wt[400], dark: wt[800] },
      error: o ? { light: St[400], main: St[500], dark: St[700] } : { light: St[300], main: St[400], dark: St[800] },
      success: o ? { light: yt[400], main: yt[500], dark: yt[700] } : { light: yt[300], main: yt[400], dark: yt[800] },
      grey: Me,
      divider: o ? Pe(Me[700], 0.6) : Pe(Me[300], 0.4),
      background: o ? { default: Me[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Me[400] } : { primary: Me[800], secondary: Me[600] },
      action: o ? {
        hover: Pe(Me[600], 0.2),
        selected: Pe(Me[600], 0.3)
      } : {
        hover: Pe(Me[200], 0.2),
        selected: Pe(Me[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: We(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: We(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: We(30), lineHeight: 1.2 },
      h4: { fontSize: We(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: We(20), fontWeight: 600 },
      h6: { fontSize: We(18), fontWeight: 600 },
      subtitle1: { fontSize: We(18) },
      subtitle2: { fontSize: We(14), fontWeight: 500 },
      body1: { fontSize: We(14) },
      body2: { fontSize: We(14), fontWeight: 400 },
      caption: { fontSize: We(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, ia = 6, aa = 8, _n = (e, o) => typeof e == "object" ? e[o] : e, Qo = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: a = !0,
  contentPadding: c = os,
  sidebarBackgroundColor: u,
  contentBackgroundColor: l,
  content: h
}) => {
  const p = Xn(r.breakpoints.down("md")), m = e === "dark", g = ns({
    showSidebar: a,
    isMobile: p,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), x = ko(s, n) ? {
    gutterPx: nt,
    radiusPx: ts
  } : void 0, S = So, R = ss(
    _n(u, e),
    m
  ), A = is(
    _n(l, e),
    m
  ), v = rs(c, r), E = x ? /* @__PURE__ */ w(Kt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t(Fe, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Kt,
      {
        alignItems: "center",
        spacing: `${Do}px`,
        sx: { mt: 2 },
        children: Array.from({ length: aa }, (M, y) => /* @__PURE__ */ t(
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
              Fe,
              {
                variant: "rounded",
                width: Zt,
                height: Zt
              }
            )
          },
          y
        ))
      }
    )
  ] }) : /* @__PURE__ */ w(Kt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(Fe, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(V, { sx: { height: 8 } }),
    Array.from({ length: ia }, (M, y) => /* @__PURE__ */ t(Fe, { variant: "rounded", width: 28, height: 28 }, y))
  ] });
  return /* @__PURE__ */ t(_o, { theme: o, children: /* @__PURE__ */ w(
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
        p && /* @__PURE__ */ w(
          V,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: S,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: R,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(Fe, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(Fe, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(V, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(Fe, { variant: "circular", width: 32, height: 32 })
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
              "--lumora-sticky-top": p ? `${S}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: p ? `${S}px` : 0
            },
            children: h ?? /* @__PURE__ */ w(Le, { children: [
              /* @__PURE__ */ t(Fe, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(
                Fe,
                {
                  variant: "text",
                  width: 320,
                  sx: { mb: 3 }
                }
              ),
              /* @__PURE__ */ t(Kt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from(
                { length: p ? 2 : 4 },
                (M, y) => /* @__PURE__ */ t(
                  Fe,
                  {
                    variant: "rounded",
                    height: 96,
                    sx: { flex: 1 }
                  },
                  y
                )
              ) }),
              /* @__PURE__ */ t(Fe, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, fr = Co(Nr("light")), Ro = Co(Nr("dark")), ca = (e) => e === "dark" ? Ro : fr, la = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = Un();
  if (!o) {
    const i = ca(e);
    return /* @__PURE__ */ w(_o, { theme: i, children: [
      /* @__PURE__ */ t(nr, {}),
      /* @__PURE__ */ t(
        Qo,
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
  return /* @__PURE__ */ w(_o, { theme: fr, children: [
    /* @__PURE__ */ t(nr, {}),
    /* @__PURE__ */ t(
      Zs,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: Ro.palette.background.default,
            color: Ro.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(V, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ t(
      Qo,
      {
        themeMode: "light",
        muiTheme: fr,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(V, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Qo,
      {
        themeMode: "dark",
        muiTheme: Ro,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class J extends Error {
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const oe = {
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
}, Ze = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, da = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ze.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Ze.REFRESH_TOKEN
      ), r = localStorage.getItem(Ze.USER);
      e && !localStorage.getItem(ue.ACCESS_TOKEN) && localStorage.setItem(ue.ACCESS_TOKEN, e), o && !localStorage.getItem(ue.REFRESH_TOKEN) && localStorage.setItem(
        ue.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(ue.USER) && localStorage.setItem(ue.USER, r), (e || o || r) && (localStorage.removeItem(Ze.ACCESS_TOKEN), localStorage.removeItem(Ze.REFRESH_TOKEN), localStorage.removeItem(Ze.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, er = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new J(
        "localStorage is not available",
        oe.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new J(
      "Storage quota exceeded. Please clear browser data.",
      oe.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new J(
      "Access to localStorage is denied. Please check browser settings.",
      oe.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new J(
      "Failed to access storage",
      oe.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, tr = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new J(
        "localStorage is not available",
        oe.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new J(
      "Storage quota exceeded. Please clear browser data.",
      oe.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new J(
      "Access to localStorage is denied. Please check browser settings.",
      oe.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new J(
      "Failed to write to storage",
      oe.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, xs = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, eo = () => {
  try {
    da();
    const e = er(ue.ACCESS_TOKEN), o = er(ue.REFRESH_TOKEN), r = er(ue.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), xs(ue.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof J ? e : new J(
      "Failed to retrieve authentication tokens",
      oe.UNKNOWN_ERROR,
      e
    );
  }
}, ua = () => {
  try {
    const { accessToken: e, refreshToken: o } = eo();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new J(
        "No authentication tokens found",
        oe.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof J ? e : new J(
        "Authentication check failed",
        oe.UNKNOWN_ERROR,
        e
      )
    };
  }
}, bs = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new J(
        "At least one token must be provided",
        oe.TOKEN_INVALID
      );
    return e && tr(ue.ACCESS_TOKEN, e), o && tr(ue.REFRESH_TOKEN, o), r && tr(ue.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof J ? n : new J(
        "Failed to store tokens",
        oe.UNKNOWN_ERROR,
        n
      )
    };
  }
}, to = () => {
  try {
    return [
      ue.ACCESS_TOKEN,
      ue.REFRESH_TOKEN,
      ue.USER,
      // Also clear legacy keys for complete cleanup
      Ze.ACCESS_TOKEN,
      Ze.REFRESH_TOKEN,
      Ze.USER
    ].map((n) => xs(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof J ? e : new J(
        "Failed to clear tokens",
        oe.LOGOUT_FAILED,
        e
      )
    };
  }
}, fa = () => {
  try {
    const { user: e } = eo();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof J ? e : new J(
        "Failed to retrieve user data",
        oe.UNKNOWN_ERROR,
        e
      )
    };
  }
}, hl = (e) => {
  if (!(e instanceof J))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case oe.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case oe.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case oe.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case oe.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case oe.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case oe.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, pr = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof J ? e.code : "UNKNOWN",
    timestamp: e instanceof J ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof J && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, pa = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = fn.create({
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
      const { accessToken: c } = eo();
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
      const { refreshToken: p } = eo();
      if (!p) {
        const g = new Error(
          "No refresh token available for token refresh"
        );
        return pr(g, "AxiosClient - Token Refresh"), to(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((g, x) => {
          s.push({ resolve: g, reject: x });
        }).then((g) => {
          const {
            accessToken: x,
            refreshToken: S
          } = g;
          if (c.headers && (c.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const R = JSON.parse(
                  c.data || "{}"
                );
                R.refresh_token = S, c.data = JSON.stringify(R);
              } else
                c.data && typeof c.data == "object" ? c.data.refresh_token = S : c.data = JSON.stringify({
                  refresh_token: S
                });
            } catch {
              c.data = JSON.stringify({
                refresh_token: S
              });
            }
          return o(c);
        }).catch((g) => Promise.reject(g));
      r = !0, n = fn.post(
        `${e}/auth/refresh`,
        {
          refresh_token: p
        }
      );
      try {
        const g = await n, { accessToken: x, refreshToken: S } = g.data;
        if (bs(x, S, null), i(null, {
          accessToken: x,
          refreshToken: S
        }), c.headers && (c.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const R = JSON.parse(
                c.data || "{}"
              );
              R.refresh_token = S, c.data = JSON.stringify(R);
            } else
              c.data && typeof c.data == "object" ? c.data.refresh_token = S : c.data = JSON.stringify({
                refresh_token: S
              });
          } catch {
            c.data = JSON.stringify({
              refresh_token: S
            });
          }
        return o(c);
      } catch (g) {
        return pr(
          g,
          "AxiosClient - Token Refresh Failed"
        ), i(g), to(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(g);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, ha = async (e, o) => {
  const { accessToken: r, refreshToken: n } = eo();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return bs(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      pr(s, "TokenValidator - Refresh Failed");
    }
  return to(), o ? o() : window.location.href = "/login", !1;
}, Vt = ({ size: e = 20 }) => /* @__PURE__ */ w(
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
), Tn = ye(Or), Ye = "#09C1AE", Io = (e, o) => ({
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
}), ma = (e) => ({
  ...Io(re, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${re - 2}px`,
    zIndex: 1,
    background: `${Ao(Ye, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), An = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = Mr(), u = d.useContext(Ct), l = je().palette.mode === "dark", h = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", p = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ w(
    Ke,
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
        ...n && Io(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Vt, { size: 20 }),
        /* @__PURE__ */ t(
          se,
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
        s && /* @__PURE__ */ t(sa, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && u && sr ? /* @__PURE__ */ t(Ce, { title: h, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    _e,
    {
      ...p,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: de,
        height: de,
        borderRadius: `${re}px`,
        ...Ao(Ye, l, "clear"),
        ...r && {
          boxShadow: `${Ao(Ye, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${Tn.duration}ms ${Tn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [ve]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && ma(l)
      },
      children: /* @__PURE__ */ t(Vt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Ce, { title: h, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    _e,
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
        ...n && Io(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Vt, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ t(Ce, { title: h, placement: "left", children: /* @__PURE__ */ t(
    _e,
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
        ...n && Io(16, "background.paper")
      },
      children: /* @__PURE__ */ t(O, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Vt, { size: 26 }) })
    }
  ) });
}, wo = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(Qs, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ w(ei, { children: [
  /* @__PURE__ */ t(ti, { fontSize: "small" }),
  /* @__PURE__ */ t(se, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    se,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    Kn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Ht = 24, ga = 720, xa = 1140, ba = 1250, va = ({
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
    const S = requestAnimationFrame(() => {
      h.current = !0;
    });
    return () => cancelAnimationFrame(S);
  }, []), d.useEffect(() => {
    if (!e || !l)
      return;
    const S = (R) => {
      R.key === "Escape" && l();
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [e, l]);
  const p = r === "docked", m = Ht + a;
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
    ...n === "left" ? { left: i + Ht } : { right: Ht },
    width: s,
    maxWidth: `calc(100vw - ${Ht * 2}px)`,
    height: `min(${ga}px, calc(100vh - ${m + Ht}px))`,
    borderRadius: "12px"
  };
  const x = /* @__PURE__ */ t(
    yr,
    {
      role: p ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: p ? xa : ba,
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
    ri,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...h.current ? {} : { timeout: { enter: 0 } },
      children: x
    }
  ) : /* @__PURE__ */ t(
    oi,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: x
    }
  );
}, ya = 180, Cn = 250, wa = "#01584F", Sa = ({
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
    Ce,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        se,
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
}, vs = (e, o, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : o, a = e ? wa : o;
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
}, ys = ({ link: e }) => /* @__PURE__ */ w(De, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Sa,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), ws = (e, o, r) => r ? e : /* @__PURE__ */ t(Ce, { title: o, placement: "right", arrow: !0, children: e }), Ea = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: a
}) => {
  const c = je(), [u, l] = d.useState(null), [h, p] = d.useState(!1), m = d.useRef(
    null
  ), g = d.useRef(null), x = d.useRef(null), S = d.useRef(!1), R = d.useRef(!1), A = d.useId(), v = () => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, E = () => {
    v(), m.current = setTimeout(() => {
      p(!1), m.current = null;
    }, ya);
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
  const y = st(e, o), { activeBg: _, sx: b } = vs(
    s,
    n,
    y,
    a
  ), I = /* @__PURE__ */ t(
    _e,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        S.current || M();
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
        $.stopPropagation(), !(e.path && !Tt($)) && ($.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": h,
      "aria-controls": h ? A : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: b,
      children: a ? /* @__PURE__ */ t(ys, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ w(
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
              S.current = !0, M();
            },
            onMouseLeave: () => {
              S.current = !1, E();
            },
            children: ws(I, e.text, a)
          }
        ),
        /* @__PURE__ */ t(
          vr,
          {
            open: h && !!u,
            anchorEl: u,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: ($) => $.zIndex.modal },
            children: /* @__PURE__ */ t(
              yr,
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
                  maxWidth: Cn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  wr,
                  {
                    id: A,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Cn
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
      const z = Et(C, B);
      return It(B) ? [
        /* @__PURE__ */ t(
          ni,
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
        /* @__PURE__ */ w(
          it,
          {
            role: "menuitem",
            title: B.text,
            disabled: !B.path,
            selected: Ue(B, o),
            ...B.path && { component: "a", href: B.path },
            onClick: (G) => {
              B.path && !Tt(G) || (G.preventDefault(), B.path && (r == null || r(B.path)), p(!1));
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
              B.icon ? /* @__PURE__ */ t(Te, { children: B.icon }) : null,
              /* @__PURE__ */ t(
                Xe,
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
}, Ra = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const a = !!(e.path && o === e.path), { sx: c } = vs(
    s,
    n,
    a,
    i
  );
  return ws(
    /* @__PURE__ */ t(
      _e,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !Tt(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: c,
        children: i ? /* @__PURE__ */ t(ys, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, Ia = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), _a = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), On = (e, o) => e.map((r, n) => /* @__PURE__ */ w(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(Ia, {}) : null
] }, n)), Ta = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: a = !1
}) => {
  const c = (l, h) => It(l) ? /* @__PURE__ */ t(
    Ea,
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
    Ra,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: h,
      railShowTitles: a
    }
  ), u = a ? 1.25 : 1;
  return /* @__PURE__ */ w(
    De,
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
        On(e, (l) => c(l, !1)),
        o.length > 0 ? /* @__PURE__ */ w(Le, { children: [
          /* @__PURE__ */ t(_a, {}),
          /* @__PURE__ */ t(O, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(De, { gap: u, alignItems: "center", children: On(
            o,
            (l) => c(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Aa = (e) => e ? Zn(e) : "USER", Ca = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), $n = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, hr = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, Fr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  ii,
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
    children: Ca(e)
  }
), Ss = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ w(Le, { children: [
  /* @__PURE__ */ t(Fr, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ w(
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
          se,
          {
            variant: "body2",
            sx: { ...$n, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          se,
          {
            variant: "caption",
            sx: { ...$n, opacity: 0.8, color: "inherit" },
            children: Aa(o)
          }
        )
      ]
    }
  )
] }), Mn = {
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
}, Es = ({
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
  theme: S,
  onThemeToggle: R,
  onLogout: A
}) => {
  const v = (E) => () => {
    o(), E == null || E();
  };
  return /* @__PURE__ */ w(
    ai,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: Mn[r].anchor,
      transformOrigin: Mn[r].transform,
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
          De,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              Ss,
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
        /* @__PURE__ */ t(Je, {}),
        i && /* @__PURE__ */ w(it, { onClick: v(c), children: [
          /* @__PURE__ */ t(Te, { children: /* @__PURE__ */ t(qn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Xe, { children: "Notifications" }),
          /* @__PURE__ */ t(hr, { count: a })
        ] }),
        p.map((E) => /* @__PURE__ */ w(it, { onClick: v(E.onClick), children: [
          E.icon && /* @__PURE__ */ t(Te, { children: E.icon }),
          /* @__PURE__ */ t(Xe, { inset: !E.icon, children: E.label }),
          /* @__PURE__ */ t(hr, { count: E.badge })
        ] }, E.key)),
        m && /* @__PURE__ */ w(it, { onClick: v(g), children: [
          /* @__PURE__ */ t(Te, { children: /* @__PURE__ */ t(si, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Xe, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(Je, {}, "theme-divider"),
          /* @__PURE__ */ w(O, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              se,
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
            /* @__PURE__ */ w(
              ci,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: S,
                onChange: (E, M) => M && M !== S && (R == null ? void 0 : R()),
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
                  /* @__PURE__ */ t(pn, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(pn, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Je, {}),
        /* @__PURE__ */ w(
          it,
          {
            onClick: v(A),
            sx: {
              color: S === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(Te, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Vn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Xe, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Rs = 64, Oa = 2, Ut = ({
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
}) => /* @__PURE__ */ w(
  Ke,
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
        se,
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
), $a = ({
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
  ...S
}) => {
  const R = m.filter((b) => b.path).slice(0, Oa), [A, v] = d.useState(
    null
  ), { userName: E = "User", userAvatar: M, avatarColor: y } = S, _ = { color: l, activeColor: h, activeBackground: p };
  return /* @__PURE__ */ w(
    yr,
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
        height: `calc(${Rs}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: u,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Ut,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(jn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ..._
          }
        ),
        R.map((b) => /* @__PURE__ */ t(
          Ut,
          {
            label: b.text,
            icon: b.icon,
            href: b.path,
            onClick: (I) => {
              Tt(I) && (I.preventDefault(), x == null || x(b.path));
            },
            active: st(b, g),
            isPage: !0,
            testId: `mobile-nav-link-${b.text}`,
            ..._
          },
          b.path
        )),
        s && /* @__PURE__ */ t(
          Ut,
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
                children: /* @__PURE__ */ t(Vt, { size: 18 })
              }
            ),
            onClick: i,
            active: a,
            testId: "mobile-nav-nexa",
            ..._
          }
        ),
        r && /* @__PURE__ */ t(
          Ut,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Sr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ..._
          }
        ),
        c && /* @__PURE__ */ w(Le, { children: [
          /* @__PURE__ */ t(
            Ut,
            {
              label: "Account",
              ariaLabel: `Account menu for ${E}`,
              icon: /* @__PURE__ */ t(
                Fr,
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
            Es,
            {
              anchorEl: A,
              onClose: () => v(null),
              placement: "above-end",
              width: 280,
              ...S
            }
          )
        ] })
      ]
    }
  );
}, Ma = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  li,
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
    children: /* @__PURE__ */ w(
      De,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(O, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Kn,
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
), La = ({
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
  di,
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
    children: /* @__PURE__ */ w(ui, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        _e,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: c },
          children: /* @__PURE__ */ t(jn, {})
        }
      ),
      /* @__PURE__ */ t(
        To,
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
), Is = d.createContext(void 0), Wr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const a = Mr(), c = d.useContext(Is), u = d.useContext(Ct), l = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Ce,
    {
      title: l,
      placement: s,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ t(
        _e,
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
            Yn,
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
              children: c ?? /* @__PURE__ */ t(qn, {})
            }
          )
        }
      )
    }
  );
}, Ln = 14, Da = 18, ka = "blur(12px) saturate(180%) brightness(1.04)", Na = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Fa = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, Wa = 140, Dn = 0.22, Pa = 0.14, Ba = (e, o, r) => {
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
      i.x += (s.x - i.x) * Dn, i.y += (s.y - i.y) * Dn, i.i += (s.i - i.i) * Pa;
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
      const S = Math.max(
        x.left - m.clientX,
        0,
        m.clientX - x.right
      ), R = Math.max(
        x.top - m.clientY,
        0,
        m.clientY - x.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(S, R) / Wa), i.i < 0.01 && (i.x = s.x, i.y = s.y), l();
    }, p = () => {
      s.i = 0, l();
    };
    return document.addEventListener("pointermove", h, { passive: !0 }), document.documentElement.addEventListener("mouseleave", p), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", h), document.documentElement.removeEventListener("mouseleave", p);
    };
  }, [e, o]);
}, oo = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: a
  }, c) => {
    const u = d.useRef(null), l = s && sr;
    Ba(u, i && sr, a);
    const h = Mo(), p = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [m, g] = d.useState(null), x = d.useRef(null), S = d.useCallback(
      (v) => {
        var M;
        if (u.current = v, typeof c == "function" ? c(v) : c && (c.current = v), (M = x.current) == null || M.disconnect(), x.current = null, !v || !l || !Na || typeof ResizeObserver > "u")
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
      () => m ? Fa(m.width, m.height, Ln) : null,
      [m]
    ), A = l && !!(R && m);
    return /* @__PURE__ */ w(Le, { children: [
      A ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ w(
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
                    stdDeviation: Ln / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Da,
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
          ref: S,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": A ? "true" : void 0,
          sx: [
            bi(e, o, h),
            A ? {
              backdropFilter: `url(#${p}) ${ka}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
oo.displayName = "GlassLayer";
const mr = {
  "&:focus, &:focus-visible": { outline: "none" }
}, za = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, kn = ye(cs), Nn = ye(No), Fn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Ga = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = je().palette.mode === "dark", a = Mo(), c = d.useRef(null), u = d.useRef(null), l = (m) => {
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
  }, p = (m, g, x, S) => {
    const R = e === m;
    return /* @__PURE__ */ t(
      Ke,
      {
        ref: S,
        role: "radio",
        "aria-checked": R,
        "aria-label": g,
        tabIndex: R ? 0 : -1,
        onClick: () => l(m),
        "data-testid": `theme-segment-${m}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${re}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: R ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: R ? n : "transparent",
          ...s && R ? Qn(i, a) : {},
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
            boxShadow: `0 0 0 2px ${Pe(r, 0.6)}`
          },
          ...mr
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ w(
    De,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: h,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${re}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        p("light", "Light", pi, c),
        p("dark", "Dark", fi, u)
      ]
    }
  );
}, Ha = ({
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
  onLinkClick: S,
  menuItems: R = [],
  onLogout: A,
  glass: v = !1
}) => {
  const E = je(), M = E.palette.mode === "dark", y = d.useRef(null), _ = Tr(E.palette.background.paper), b = Lr({
    enabled: v,
    isDark: M,
    selector: Fn,
    radius: re
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
    r(), T.onClick ? T.onClick() : T.path && (S == null || S(T.path));
  }, k = {
    borderRadius: v ? `${re}px` : "8px",
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
      boxShadow: `0 0 0 2px ${Pe(u, 0.6)}`
    },
    ...mr
  }, z = x ? /* @__PURE__ */ w(
    De,
    {
      direction: "row",
      "data-testid": "account-menu-links",
      sx: { alignItems: "center", gap: 0.75, mt: 0.25 },
      children: [
        g ? /* @__PURE__ */ w(Le, { children: [
          /* @__PURE__ */ t(
            Ke,
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
          Ke,
          {
            onClick: () => $(x),
            "data-testid": "account-menu-ai-usage",
            sx: B,
            children: "My AI usage"
          }
        )
      ]
    }
  ) : null, G = /* @__PURE__ */ w(De, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ w(O, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(se, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: i }),
      a ? /* @__PURE__ */ t(
        se,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary", fontSize: 12, lineHeight: "18px" },
          children: a
        }
      ) : null,
      c ? /* @__PURE__ */ t(
        se,
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
        se,
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
    Er,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: y,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...v ? {
        slots: { transition: br },
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
      children: /* @__PURE__ */ w(
        O,
        {
          "data-testid": "account-menu",
          "data-glass": v ? "true" : void 0,
          sx: v ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${re}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${Fn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...za, width: n, minWidth: n },
          children: [
            v ? /* @__PURE__ */ t(
              oo,
              {
                isDark: M,
                solid: _,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Ar} ${kn.duration}ms ${kn.easing} both`,
                  [ve]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ w(
              O,
              {
                ...b.containerProps,
                sx: v ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Cr} ${Nn.duration}ms ${Nn.easing} 70ms both`,
                  [ve]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  b.lens,
                  g && !x ? /* @__PURE__ */ t(
                    Ke,
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
                        ...mr
                      },
                      children: G
                    }
                  ) : /* @__PURE__ */ t(O, { "data-testid": "account-menu-header", children: G }),
                  /* @__PURE__ */ t(Je, {}),
                  h ? /* @__PURE__ */ w(
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
                        /* @__PURE__ */ t(Te, { children: /* @__PURE__ */ t(hi, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(se, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Ga,
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
                  /* @__PURE__ */ w(
                    wr,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: h ? 0 : 0.5, pb: 0.5 },
                      children: [
                        R.map((T) => /* @__PURE__ */ w(
                          it,
                          {
                            onClick: () => C(T),
                            "data-testid": `menu-item-${T.key}`,
                            sx: k,
                            children: [
                              /* @__PURE__ */ t(Te, { children: T.icon }),
                              /* @__PURE__ */ t(se, { sx: { flex: 1 }, children: T.label }),
                              /* @__PURE__ */ t(hr, { count: T.badge })
                            ]
                          },
                          T.key
                        )),
                        A ? /* @__PURE__ */ t(Je, { component: "li", sx: { my: 0.5 } }) : null,
                        A ? /* @__PURE__ */ w(
                          it,
                          {
                            onClick: () => $(A),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...k,
                              color: M ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(Te, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Vn, { fontSize: "small" }) }),
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
}, Ua = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Xa = ({
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
  activeForegroundColor: S,
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
  onNotificationsClick: ie,
  whatsNewCount: we = 0,
  onProfileClick: fe,
  onAiUsageClick: ct,
  menuItems: Se,
  onLogout: Be,
  theme: F = "light",
  showThemeToggler: W = !0,
  onThemeToggle: ee
}) => {
  const j = je(), q = j.palette.mode === "dark", ae = A ?? (q ? j.palette.background.paper : "#ffffff"), Q = I ?? R ?? (q ? j.palette.text.primary : p), U = L ?? x ?? Yt(p), Qe = $ ?? p, te = d.useRef(null), [Ee, pe] = d.useState(!1), ke = z ? Zn(z) : void 0, ge = (lt) => /* @__PURE__ */ t(
    Fr,
    {
      name: k,
      avatar: G,
      color: Qe,
      size: lt
    }
  ), et = H + we, xe = E && b === "flyout", Oe = T ? /* @__PURE__ */ t(
    Wr,
    {
      count: et,
      onClick: ie,
      color: Q,
      hoverColor: U,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, he = C ? /* @__PURE__ */ w(
    Ke,
    {
      ref: te,
      onClick: () => pe(!0),
      "aria-haspopup": "menu",
      "aria-expanded": Ee,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: E ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        p: xe ? "4px" : 0.75,
        borderRadius: "10px",
        bgcolor: Ee ? U : "transparent",
        "&:hover": { bgcolor: U },
        ...Ua
      },
      children: [
        E && !xe && T ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Yn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !et,
              children: ge(36)
            }
          )
        ) : ge(E ? 36 : 40),
        E ? null : /* @__PURE__ */ w(O, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            se,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Q, lineHeight: 1.3 },
              children: k
            }
          ),
          ke ? /* @__PURE__ */ t(
            se,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: Q,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: ke
            }
          ) : null
        ] })
      ]
    }
  ) : null, Ve = !!Oe && (!E || xe || !he);
  return /* @__PURE__ */ w(
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
          dr,
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
            activeForegroundColor: S,
            foregroundColor: R,
            surfaceBackgroundColor: ae,
            flyoutSurfaceColor: v,
            collapsed: E,
            expandedWidth: M,
            collapsedWidth: y,
            topContent: _,
            footer: he || Ve ? /* @__PURE__ */ w(
              De,
              {
                direction: xe ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  xe && Ve ? Oe : null,
                  he,
                  !xe && Ve ? Oe : null
                ]
              }
            ) : void 0,
            submenuMode: b
          }
        ),
        C ? /* @__PURE__ */ t(
          Ha,
          {
            open: Ee,
            anchorEl: te.current,
            onClose: () => pe(!1),
            width: Math.max(M - 16, 240),
            renderAvatar: ge,
            userName: k,
            userEmail: B,
            roleLabel: ke,
            accentColor: p,
            tint: U,
            showThemeToggler: W,
            theme: F,
            onThemeToggle: ee,
            onProfileClick: fe,
            onAiUsageClick: ct,
            onLinkClick: n,
            menuItems: Se,
            onLogout: Be,
            glass: b === "flyout"
          }
        ) : null
      ]
    }
  );
}, Wn = ye(cs), Pn = ye(No), Bn = 240, Ka = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, ja = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: a = !1
}) => {
  const c = je(), u = c.palette.mode === "dark", l = !!e, h = Tr(c.palette.background.paper), p = Lr({
    enabled: a,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: re
  }), m = /* @__PURE__ */ t(
    wr,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((g) => {
        const x = g.key === n, S = g.accentColor ?? i;
        return /* @__PURE__ */ w(
          it,
          {
            selected: x,
            onClick: () => s(g),
            "data-testid": `platform-item-${g.key}`,
            sx: {
              borderRadius: a ? `${re}px` : "8px",
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
              /* @__PURE__ */ t(Te, { sx: { minWidth: 24 }, children: /* @__PURE__ */ t(
                O,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: S,
                    boxShadow: a ? `0 0 0 3px ${u ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Xe,
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
                mi,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: S }
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
    Er,
    {
      open: l,
      anchorEl: e,
      onClose: o,
      onClick: (g) => g.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: br },
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
            minWidth: Bn,
            borderRadius: `${re}px`
          } : { ...Ka, minWidth: Bn },
          children: a ? /* @__PURE__ */ w(Le, { children: [
            /* @__PURE__ */ t(
              oo,
              {
                isDark: u,
                solid: h,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Ar} ${Wn.duration}ms ${Wn.easing} both`,
                  [ve]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ w(
              O,
              {
                ...p.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Cr} ${Pn.duration}ms ${Pn.easing} 70ms both`,
                  [ve]: { animation: "none" }
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
}, Va = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), s = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ w(
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
          ja,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, qa = ({
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
  } = i, g = d.useRef(null), [x, S] = d.useState(
    null
  ), R = !!x, A = d.useRef(e);
  d.useEffect(() => {
    e && !A.current && S(null), A.current = e;
  }, [e]);
  const v = d.useContext(Ct);
  if (!c && !n)
    return null;
  const E = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ w(Le, { children: [
    /* @__PURE__ */ w(
      De,
      {
        ref: g,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Ce,
            {
              title: e ? h : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                Ke,
                {
                  onClick: () => S(g.current),
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
                    Ss,
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
            Wr,
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
      Es,
      {
        anchorEl: x,
        onClose: () => S(null),
        placement: e ? "beside" : "above",
        width: e || (M = g.current) == null ? void 0 : M.clientWidth,
        ...i
      }
    )
  ] });
}, Ya = 120, Za = 300, zn = ye(as), Gn = ye(No), Ja = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Qa = 'input, textarea, [contenteditable="true"]', gr = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Qa)) == null || o.focus();
}, ec = ({
  search: e,
  icon: o,
  mode: r,
  onExpand: n,
  autoFocus: s = !1,
  onAutoFocused: i,
  color: a,
  hoverColor: c
}) => {
  const u = Mr(), l = d.useContext(Ct), h = d.useRef(null), [p, m] = d.useState(null);
  return d.useEffect(() => {
    r === "full" && s && (gr(h.current), i == null || i());
  }, [r, s, i]), r === "full" ? /* @__PURE__ */ t(
    O,
    {
      ref: h,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : r === "popover" && l ? /* @__PURE__ */ t(
    tc,
    {
      search: e,
      icon: o,
      color: a,
      railTooltip: u
    }
  ) : /* @__PURE__ */ w(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Ce, { title: "Search", placement: "right", arrow: !0, ...u, children: /* @__PURE__ */ t(
          _e,
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
            children: o ?? /* @__PURE__ */ t(Sr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Er,
          {
            open: !!p,
            anchorEl: p,
            onClose: () => m(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (g) => gr(g)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, tc = ({ search: e, icon: o, color: r, railTooltip: n }) => {
  const s = je().palette.mode === "dark";
  vi(s, ar(r, s ? 0.3 : 0.35));
  const i = `rgb(${Mo()})`, a = Tr(s ? "#1e2430" : "#ffffff"), c = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${re}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: i
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${re}px`,
      "&.Mui-focusVisible": { borderColor: i }
    }
  }, u = d.useRef(null), l = d.useRef(null), [h, p] = d.useState(!1), m = d.useRef(!1), g = d.useRef(void 0), x = d.useRef(void 0), S = () => {
    clearTimeout(g.current), clearTimeout(x.current);
  }, R = d.useCallback(() => {
    S(), m.current = !1, p(!1);
  }, []), A = () => {
    clearTimeout(x.current), h || (clearTimeout(g.current), g.current = setTimeout(
      () => p(!0),
      Ya
    ));
  }, v = () => {
    clearTimeout(g.current), clearTimeout(x.current), x.current = setTimeout(() => {
      !m.current && !Ja(l.current) && p(!1);
    }, Za);
  };
  return d.useEffect(() => S, []), d.useEffect(() => {
    if (!h)
      return;
    const E = setTimeout(() => gr(l.current)), M = (_) => {
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
  }, [h, R]), /* @__PURE__ */ w(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Ce,
          {
            title: h ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...n,
            children: /* @__PURE__ */ t(
              _e,
              {
                ref: u,
                "aria-label": "Search",
                "aria-expanded": h,
                onMouseEnter: A,
                onMouseLeave: v,
                onClick: () => {
                  S(), m.current = !0, p(!0);
                },
                sx: {
                  width: de,
                  height: de,
                  color: r,
                  borderRadius: `${re}px`
                },
                children: o ?? /* @__PURE__ */ t(
                  Sr,
                  {
                    sx: { fontSize: Zt }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          vr,
          {
            open: h,
            anchorEl: u.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ w(
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
                  borderRadius: `${re}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    oo,
                    {
                      isDark: s,
                      solid: a,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${Ar} ${zn.duration}ms ${zn.easing} both`,
                        [ve]: { animation: "none" }
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
                        animation: `${Cr} ${Gn.duration}ms ${Gn.easing} 60ms both`,
                        [ve]: { animation: "none" }
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
}, oc = 80, rc = 300, nc = 32, sc = (e) => {
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
      const E = v.clientX <= nc;
      E && ((M = h.current) == null || M.style.setProperty(
        "--edge-glow-y",
        `${v.clientY}px`
      )), l(E);
    }, S = () => l(!1), R = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), c(!1);
      }, rc));
    }, A = (v) => {
      o.current.has(v) || R();
    };
    return document.addEventListener("mouseover", A), document.addEventListener("pointermove", x, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", R), document.documentElement.addEventListener("mouseleave", S), () => {
      p(), document.removeEventListener("mouseover", A), document.removeEventListener("pointermove", x), document.documentElement.removeEventListener(
        "mouseleave",
        R
      ), document.documentElement.removeEventListener(
        "mouseleave",
        S
      );
    };
  }, [e]);
  const m = {
    onMouseOver: (x) => {
      o.current.add(x.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, oc));
    },
    onFocus: (x) => {
      ic(x.target) && c(!0);
    },
    onBlur: (x) => {
      const S = x.relatedTarget;
      (!S || !x.currentTarget.contains(S)) && c(!1);
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
}, ic = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, ac = 100, cc = () => {
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
        }, ac));
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
}, lc = (e) => {
  const o = e == null ? void 0 : e.querySelector(":scope > aside");
  if (!o)
    return null;
  const r = o.querySelector("[data-rail-surface]") ?? o, { right: n, width: s } = o.getBoundingClientRect(), { top: i, height: a } = r.getBoundingClientRect();
  return s <= 0 || a <= 0 ? null : { left: n, top: i, height: a };
}, dc = 300, or = 288, uc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", fc = 18, Hn = 72, rr = 90, pc = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", hc = 68, mc = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), gc = typeof window > "u" ? Xt : Ys, ml = ({
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
  notificationsIcon: S,
  brandColor: R,
  contentPadding: A = os,
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
  showSettings: ie = !0,
  onSettingsClick: we,
  onProfileClick: fe,
  onAiUsageClick: ct,
  showNotifications: Se = !0,
  notificationCount: Be = 0,
  NotificationSidebarContent: F,
  whatsNewCount: W = 0,
  onNotificationsClick: ee,
  platforms: j,
  currentPlatformKey: q,
  onPlatformSelect: ae,
  onVerify: Q,
  alertProps: U,
  style: Qe,
  sidebarStyles: te,
  contentStyles: Ee,
  accentColor: pe,
  sidebarAccentColor: ke,
  sidebarActiveBackgroundColor: ge,
  sidebarGroupArrowColor: et,
  sidebarForegroundColor: xe,
  contentBackgroundColor: Oe,
  theme: he = "light",
  darkModeSelector: Ve,
  showThemeToggler: tt = !1,
  onThemeToggle: lt,
  GlobalChatSidebar: Ot,
  useChatSidebar: $t,
  chatPanelMode: ro = "docked",
  chatPanelPosition: no = "right",
  chatPanelWidth: so = 420,
  onChatClose: io,
  showAssistant: dt = !1,
  assistantPlacement: Mt = "sidebar",
  assistantShortcut: ao = "j",
  onAssistantClick: ut,
  assistantActive: mt = !1,
  assistantBusy: Lt = !1,
  customNavbar: Dt,
  customNavbarProps: Fo,
  redirectToLogin: gt,
  apiBaseUrl: co
}) => {
  const xt = Un(), ne = Xn(xt.breakpoints.down("md")), f = dn(
    () => Co(Nr(he)),
    [he]
  ), D = he === "dark", X = pe ?? "#01584f", P = ke ?? X, K = is(
    typeof Oe == "object" ? Oe[he] : Oe,
    D
  ), Z = a === "collapsible", be = a === "panel", ce = be && s && !ne, le = a === "rail-labeled", Wo = Z || le, ze = ss(
    E,
    D
  ), Po = M ?? ze, Re = xe ?? (D ? "#ffffff" : P), kt = y ?? Yt(Re), Nt = M ? ir(Po) : Re, Pr = (N) => /* @__PURE__ */ t(
    V,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: N,
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
  ), lo = R ?? Nt, [Br, Bo] = rt(
    null
  ), zo = ((j == null ? void 0 : j.length) ?? 0) > 1, _s = Yo(() => Bo(null), []), Ts = (N) => {
    Bo(null), ae ? ae(N) : N.key !== q && N.url && window.location.assign(N.url);
  }, zr = (N) => zo ? /* @__PURE__ */ t(
    Va,
    {
      anchorEl: Br,
      onClose: _s,
      platforms: j,
      currentKey: q,
      onSelect: Ts,
      accentColor: X,
      glass: c === "flyout" && (Z || be) && !ne,
      children: N
    }
  ) : N, uo = zo ? (N) => Bo(N.currentTarget) : m, fo = zo ? !!Br : void 0, Go = zr(
    p ?? Pr(lo)
  ), As = zr(
    p ?? Pr(R ?? Re)
  ), Ho = cc(), Ne = ko(c, a), Ge = Ne || !Ho.expanded, He = s && !ne && wi(u, c, a), ot = sc(He), Gr = Ne ? "popover" : "expand", Hr = Ne ? qt : jt, Ur = Ne ? "transparent" : ze, Xr = Ne && !M ? "transparent" : Po, [Cs, Kr] = rt(!1), Os = Yo(() => Kr(!1), []), qe = ns({
    showSidebar: s,
    isMobile: ne,
    sidebarVariant: a,
    sidebarSubmenu: c,
    sidebarAutoHide: u
  }), [jr, ft] = rt(!1), [Vr, Uo] = rt(!1), Ie = ne && l === "bottom-bar", qr = `calc(${Rs}px + env(safe-area-inset-bottom, 0px))`, [Ft, Yr] = rt({ open: !1, tab: "notifications" }), Zr = () => Yr((N) => ({ ...N, open: !1 })), $s = Se && !!F, Jr = go(null), [Ms, Ls] = rt(null), Wt = Yo(() => {
    const N = ne ? null : lc(Jr.current), Y = N && He ? { ...N, left: nt } : N;
    Ls(
      (me) => me && Y && me.left === Y.left && me.top === Y.top && me.height === Y.height ? me : Y
    );
  }, [ne, He]);
  Xt(() => {
    if (Ft.open)
      return Wt(), window.addEventListener("resize", Wt), () => window.removeEventListener("resize", Wt);
  }, [Ft.open, Wt]);
  const [Ds, ks] = rt(!0), [Ns, Fs] = rt(!1), Xo = $t == null ? void 0 : $t(), Qr = (Xo == null ? void 0 : Xo.isOpen) ?? !1, en = ro === "floating" ? "floating" : "docked", Ws = en === "docked" && Qr && Ot && !ne ? so : 0, po = go(Q), tn = go(!1), on = dn(
    () => pa(co),
    [co]
  );
  Xt(() => {
    po.current = Q;
  }, [Q]);
  const Ko = go(ut);
  Ko.current = ut;
  const Pt = dt && ao ? ao.toLowerCase() : null;
  Xt(() => {
    if (!Pt)
      return;
    const N = (Y) => {
      (Y.metaKey || Y.ctrlKey) && !Y.altKey && !Y.shiftKey && Y.key.toLowerCase() === Pt && Ko.current && (Y.preventDefault(), Ko.current());
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [Pt]);
  const rn = (N) => {
    const Y = H(N);
    Y instanceof Promise && Y.catch((me) => {
      console.error("Error in logout handler:", me);
    });
  };
  if (gc(() => {
    (() => {
      var Y;
      try {
        const { isAuthenticated: me } = ua();
        if (!me) {
          console.log("No session found, redirecting to login"), to(), gt();
          return;
        }
        if (!tn.current) {
          const { user: zt, error: qo } = fa();
          if (zt && !qo) {
            const Ks = {
              name: zt.name || "",
              email: zt.email || "",
              profilePicture: zt.profilePicture || "",
              role: zt.role || ""
            };
            tn.current = !0, (Y = po.current) == null || Y.call(po, Ks);
          } else
            qo && console.error("Error getting user data:", qo);
        }
        Fs(!0);
      } catch (me) {
        console.error("Error checking session:", me), to(), gt();
      } finally {
        ks(!1);
      }
    })();
  }, [gt]), Xt(() => {
    b && ha(on, gt);
  }, [b, on]), Ds || I)
    return /* @__PURE__ */ t(
      la,
      {
        theme: he,
        darkModeSelector: Ve,
        sidebarVariant: a,
        sidebarSubmenu: c,
        sidebarAutoHide: u,
        showSidebar: s,
        contentPadding: A,
        sidebarBackgroundColor: E,
        contentBackgroundColor: Oe,
        content: L
      }
    );
  if (!Ns)
    return null;
  const Bt = g ?? (Dt ? /* @__PURE__ */ t(Dt, { ...Fo }) : null), Ps = (N) => {
    ft(!1), Uo(!1), Wt(), Yr({ open: !0, tab: N });
  }, jo = F && (() => Ps("notifications")), Bs = Be + W, nn = {
    avatarColor: P,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: v == null ? void 0 : v.map(
      (N) => N.onClick || !N.path ? N : { ...N, onClick: () => C == null ? void 0 : C(N.path) }
    ),
    showNotifications: Se,
    notificationCount: Be,
    whatsNewCount: W,
    onNotificationsClick: jo,
    showProfile: k,
    userName: B,
    userRole: z,
    userAvatar: G,
    showSettings: ie,
    onSettingsClick: we,
    showThemeToggler: tt,
    theme: he,
    onThemeToggle: lt,
    onLogout: rn
  }, Vo = (N) => /* @__PURE__ */ t(
    qa,
    {
      ...nn,
      compact: N,
      color: Re,
      hoverColor: kt
    }
  ), sn = Pt ? [mc() ? "⌘" : "Ctrl", Pt.toUpperCase()] : void 0, zs = (N) => dt && Mt === "sidebar" ? /* @__PURE__ */ t(
    An,
    {
      variant: N ? "sidebar-icon" : "sidebar",
      onClick: ut,
      active: mt,
      busy: Lt,
      shortcutKeys: sn,
      accentColor: Re
    }
  ) : null, Gs = (N) => Bt ? /* @__PURE__ */ t(
    ec,
    {
      search: Bt,
      icon: x,
      mode: N,
      onExpand: () => {
        Ho.pin(), Kr(!0);
      },
      autoFocus: Cs,
      onAutoFocused: Os,
      color: Re,
      hoverColor: kt
    }
  ) : null, ho = (N) => {
    const Y = zs(N !== "full"), me = Gs(N);
    return Y || me ? /* @__PURE__ */ w(
      Kt,
      {
        spacing: Ne ? `${Do}px` : 1.5,
        sx: { alignItems: N === "full" ? "stretch" : "center" },
        children: [
          Y,
          Ne && Y && me ? /* @__PURE__ */ t(
            V,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Yt(Re)}`
              }
            }
          ) : null,
          me
        ]
      }
    ) : void 0;
  }, an = () => /* @__PURE__ */ t(
    dr,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: $,
      onLinkClick: C,
      showHeaderBar: Z,
      logo: Go,
      title: n,
      onBrandClick: uo,
      brandMenuOpen: fo,
      brandColor: lo,
      headerBackgroundColor: Z ? Xr : void 0,
      headerForegroundColor: Z ? Nt : void 0,
      activeAccentColor: P,
      activeBackgroundColor: ge,
      groupArrowColor: et,
      groupAccentColor: y,
      activeForegroundColor: _,
      foregroundColor: xe,
      surfaceBackgroundColor: Ur,
      flyoutSurfaceColor: ze,
      collapsed: le || Ge,
      showLabels: le,
      expandedWidth: or,
      collapsedWidth: le ? es : Hr,
      topContent: ho(
        le ? "popover" : Ge ? Gr : "full"
      ),
      footer: Vo(le || Ge),
      submenuMode: Ne ? "flyout" : "inline"
    }
  ), cn = (N) => Ne ? Hs(N) : Us(N), Hs = (N) => /* @__PURE__ */ w(
    V,
    {
      component: "aside",
      ...He ? ot.rootProps : {},
      "data-auto-hide": He ? "true" : void 0,
      "data-shown": He ? String(ot.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (Y) => Y.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...He ? {
          position: "fixed",
          left: 0,
          width: qt + 2 * nt,
          pointerEvents: "none"
        } : {
          width: qe,
          minWidth: qe,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: K
        }
      },
      children: [
        He && /* @__PURE__ */ t(
          V,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: fc,
              pointerEvents: "auto"
            }
          }
        ),
        He && /* @__PURE__ */ t(
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
              width: Hn,
              pointerEvents: "none",
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${Hn}px ${rr}px at 0 var(--edge-glow-y), ${Pe(Re, D ? 0.5 : 0.4)}, ${Pe(Re, 0)})`,
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
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${rr}px), ${Pe(Re, D ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${rr}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ w(
          V,
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            sx: {
              position: "absolute",
              top: nt,
              bottom: nt,
              left: nt,
              width: qt,
              borderRadius: `${ts}px`,
              display: "flex",
              flexDirection: "column",
              ...He && {
                pointerEvents: ot.shown ? "auto" : "none",
                opacity: ot.shown ? 1 : 0,
                transform: ot.shown ? "none" : `translateX(calc(-100% - ${2 * nt}px))`,
                transition: pc,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...te
            },
            children: [
              /* @__PURE__ */ t(
                oo,
                {
                  isDark: D,
                  solid: ze,
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
                  children: N
                }
              )
            ]
          }
        )
      ]
    }
  ), Us = (N) => /* @__PURE__ */ t(
    V,
    {
      component: "aside",
      sx: {
        width: jt,
        minWidth: jt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (Y) => Y.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        V,
        {
          ...Ne ? {} : Ho.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ge ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Ge ? jt : or,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: ze,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Ge ? "none" : `4px 0 24px rgba(0, 0, 0, ${D ? 0.5 : 0.12})`,
            transition: uc,
            ...te
          },
          children: N
        }
      )
    }
  ), Xs = rs(
    A,
    xt
  ), bt = ne ? null : Ms;
  return /* @__PURE__ */ t(_o, { theme: f, children: /* @__PURE__ */ t(Jn.Provider, { value: P, children: /* @__PURE__ */ t($o.Provider, { value: ze, children: /* @__PURE__ */ t(Is.Provider, { value: S, children: /* @__PURE__ */ w(
    V,
    {
      ref: Jr,
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Qe
      },
      children: [
        /* @__PURE__ */ t(nr, {}),
        ne && /* @__PURE__ */ t(
          La,
          {
            height: So,
            onMenuClick: s && !Ie ? () => ft(!0) : void 0,
            appName: n,
            logo: Go,
            onBrandClick: uo,
            brandMenuOpen: fo,
            background: Po,
            color: Nt,
            brandColor: lo,
            endContent: Se ? /* @__PURE__ */ t(
              Wr,
              {
                count: Bs,
                onClick: jo,
                color: Nt,
                hoverColor: kt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !ne && le && /* @__PURE__ */ t(
          V,
          {
            component: "aside",
            sx: {
              width: qe,
              minWidth: qe,
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
              ...te
            },
            children: an()
          }
        ),
        s && !ne && Z && cn(
          /* @__PURE__ */ w(Le, { children: [
            an(),
            (U == null ? void 0 : U.show) && !Ge && /* @__PURE__ */ t(wo, { ...U })
          ] })
        ),
        ce && cn(
          /* @__PURE__ */ w(Le, { children: [
            /* @__PURE__ */ t(
              Xa,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: $,
                onLinkClick: C,
                logo: Go,
                title: n,
                onBrandClick: uo,
                brandMenuOpen: fo,
                brandColor: lo,
                headerBackgroundColor: Xr,
                headerForegroundColor: Nt,
                activeAccentColor: P,
                activeBackgroundColor: ge,
                groupArrowColor: et,
                groupAccentColor: y,
                activeForegroundColor: _,
                foregroundColor: xe,
                surfaceBackgroundColor: Ur,
                flyoutSurfaceColor: ze,
                collapsed: Ge,
                expandedWidth: or,
                collapsedWidth: Hr,
                topContent: ho(
                  Ge ? Gr : "full"
                ),
                submenuMode: Ne ? "flyout" : "inline",
                color: Re,
                hoverColor: kt,
                avatarColor: P,
                showProfile: k,
                userName: B,
                userEmail: T,
                userRole: z,
                userAvatar: G,
                showNotifications: Se,
                notificationCount: Be,
                onNotificationsClick: $s ? jo : ee,
                whatsNewCount: W,
                onProfileClick: fe,
                onAiUsageClick: ct,
                menuItems: v,
                onLogout: rn,
                theme: he,
                showThemeToggler: tt,
                onThemeToggle: lt
              }
            ),
            (U == null ? void 0 : U.show) && !Ge && /* @__PURE__ */ t(wo, { ...U })
          ] })
        ),
        s && !ne && !Wo && !be && /* @__PURE__ */ t(
          un,
          {
            variant: "permanent",
            sx: {
              width: qe,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: qe,
                boxSizing: "border-box",
                bgcolor: K,
                borderRight: "none"
              },
              ...te
            },
            children: /* @__PURE__ */ w(
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
                        To,
                        {
                          logo: As,
                          appName: n,
                          onClick: uo,
                          menuOpen: fo,
                          color: R ?? Re,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  ho("popover"),
                  /* @__PURE__ */ w(
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
                          Ta,
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
                          wo,
                          {
                            ...U
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(V, { sx: { py: 1.5 }, children: Vo(!0) })
                ]
              }
            )
          }
        ),
        s && ne && /* @__PURE__ */ w(
          Js,
          {
            anchor: Ie ? "bottom" : "left",
            open: jr,
            onOpen: () => ft(!0),
            onClose: () => ft(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (N) => N.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: ze,
                  backgroundImage: "none",
                  ...Ie ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              Ie && // Grab handle: the sheet can be swiped down to close
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
                dr,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: $,
                  onLinkClick: (N) => {
                    C == null || C(N), ft(!1);
                  },
                  onLinkAction: () => ft(!1),
                  collapsed: !1,
                  expandedWidth: Ie ? "100%" : dc,
                  activeAccentColor: P,
                  activeBackgroundColor: ge,
                  groupArrowColor: et,
                  groupAccentColor: y,
                  activeForegroundColor: _,
                  foregroundColor: xe,
                  surfaceBackgroundColor: ze,
                  topInsetPx: Ie ? 8 : 0,
                  topContent: Ie ? void 0 : ho("full"),
                  footer: Ie ? void 0 : Vo(!1)
                }
              ),
              (U == null ? void 0 : U.show) && /* @__PURE__ */ t(wo, { ...U })
            ]
          }
        ),
        Ie && Bt && /* @__PURE__ */ t(
          Ma,
          {
            open: Vr,
            onClose: () => Uo(!1),
            search: Bt
          }
        ),
        Ie && /* @__PURE__ */ t(
          $a,
          {
            ...nn,
            pinnedLinks: h,
            activePath: $,
            onLinkClick: C,
            onMenuClick: s ? () => ft(!0) : void 0,
            menuOpen: jr,
            onSearchClick: Bt ? () => Uo(!0) : void 0,
            searchOpen: Vr,
            showAssistant: dt,
            onAssistantClick: ut,
            assistantActive: mt,
            showProfile: k,
            background: ze,
            color: Re,
            activeColor: P,
            activeBackground: kt
          }
        ),
        /* @__PURE__ */ t(
          V,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Xs,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": ne ? `${So}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: qe ? `calc(100% - ${qe}px)` : "100%",
              mt: ne ? `${So}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Ie && {
                pb: `calc(var(--lumora-content-padding) + ${qr})`
              },
              backgroundColor: K,
              ...Ee
            },
            children: e
          }
        ),
        Ot && /* @__PURE__ */ t(
          va,
          {
            open: Qr,
            variant: en,
            position: no,
            width: so,
            sidebarWidthPx: qe,
            bottomOffsetPx: dt && Mt === "floating" ? hc : 0,
            fullScreen: ne,
            fullScreenBottom: Ie ? qr : "0px",
            onClose: io,
            children: /* @__PURE__ */ t(Ot, {})
          }
        ),
        dt && Mt === "floating" && !Ie && /* @__PURE__ */ t(
          An,
          {
            variant: "floating",
            rightOffsetPx: Ws,
            shortcutKeys: sn,
            onClick: ut,
            active: mt,
            busy: Lt
          }
        ),
        Se && F && /* @__PURE__ */ t(
          un,
          {
            anchor: bt ? "left" : "right",
            open: Ft.open,
            onClose: Zr,
            slotProps: {
              paper: {
                sx: bt ? {
                  width: 380,
                  maxWidth: `calc(100vw - ${bt.left}px)`,
                  left: bt.left,
                  top: bt.top,
                  height: bt.height
                } : {
                  width: 380,
                  maxWidth: "100vw"
                }
              }
            },
            children: /* @__PURE__ */ t(
              F,
              {
                onClose: Zr,
                initialTab: Ft.tab
              },
              Ft.tab
            )
          }
        )
      ]
    }
  ) }) }) }) });
};
export {
  oe as AUTH_ERROR_CODES,
  J as AuthError,
  dr as CollapsibleSidebar,
  pl as FullBleedSection,
  sa as Kbd,
  la as LumoraShellSkeleton,
  ml as LumoraWrapper,
  to as clearAuthTokens,
  ml as default,
  hl as getAuthErrorMessage,
  eo as getAuthTokens,
  fa as getCurrentUser,
  Nr as getDesignTokens,
  ua as isAuthenticated,
  pr as logAuthError,
  bs as storeAuthTokens
};
