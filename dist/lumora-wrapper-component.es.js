import { jsx as t, jsxs as w, Fragment as Me } from "react/jsx-runtime";
import Is from "@mui/icons-material/KeyboardArrowDownRounded";
import _s from "@mui/icons-material/KeyboardArrowUpRounded";
import Cs from "@mui/icons-material/ChevronRightRounded";
import C from "@mui/material/Box";
import zr from "@mui/material/Collapse";
import Je from "@mui/material/Divider";
import be from "@mui/material/IconButton";
import eo from "@mui/material/ListItemButton";
import ye from "@mui/material/ListItemIcon";
import Pe from "@mui/material/ListItemText";
import De from "@mui/material/Stack";
import Se from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as Be, createTheme as go, alpha as ct, ThemeProvider as lo } from "@mui/material/styles";
import * as d from "react";
import { useMemo as Hr, useState as it, useCallback as Ur, useRef as Lo, useEffect as so, useLayoutEffect as Ts } from "react";
import ot from "@mui/material/ButtonBase";
import { keyframes as Zo } from "@emotion/react";
import Qo from "@mui/material/Fade";
import Jo from "@mui/material/Popper";
import { useTheme as An, CssBaseline as Bo, GlobalStyles as Os, Box as Y, useMediaQuery as $n, Stack as Wo, Skeleton as Ke, Drawer as Xr, SwipeableDrawer as As } from "@mui/material";
import Kr from "axios";
import $s from "@mui/material/Card";
import Ms from "@mui/material/CardContent";
import Mn from "@mui/material/Button";
import Ds from "@mui/icons-material/AutoAwesomeRounded";
import Ls from "@mui/material/Grow";
import er from "@mui/material/Paper";
import Ns from "@mui/material/Slide";
import ks from "@mui/material/ListSubheader";
import Qe from "@mui/material/MenuItem";
import tr from "@mui/material/MenuList";
import Dn from "@mui/icons-material/MenuRounded";
import or from "@mui/icons-material/SearchRounded";
import Ln from "@mui/icons-material/LogoutRounded";
import Nn from "@mui/icons-material/NotificationsNoneOutlined";
import Fs from "@mui/icons-material/SettingsOutlined";
import Ps from "@mui/material/Avatar";
import Bs from "@mui/material/Menu";
import jr from "@mui/material/ToggleButton";
import Ws from "@mui/material/ToggleButtonGroup";
import Gs from "@mui/material/Drawer";
import zs from "@mui/material/AppBar";
import Hs from "@mui/material/Toolbar";
import kn from "@mui/material/Badge";
import Us from "@mui/icons-material/DarkModeOutlined";
import Xs from "@mui/icons-material/LightModeOutlined";
import Ks from "@mui/icons-material/SettingsBrightnessOutlined";
import rr from "@mui/material/Popover";
import js from "@mui/icons-material/CheckRounded";
const uo = ({
  logo: e,
  title: o,
  appName: r,
  onClick: n,
  color: i,
  testId: s,
  menuOpen: c
}) => {
  const a = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: i,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, p = /* @__PURE__ */ w(Me, { children: [
    o ? /* @__PURE__ */ t(
      ae,
      {
        variant: "h6",
        noWrap: !0,
        sx: {
          color: i,
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
    ot,
    {
      onClick: n,
      "aria-label": c === void 0 ? `${r} home` : `${r}: switch platform`,
      ...c !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": c
      },
      "data-testid": s,
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
          outlineColor: i,
          outlineOffset: 2
        }
      },
      children: p
    }
  ) : /* @__PURE__ */ t(De, { direction: "row", "data-testid": s, sx: a, children: p });
}, Vr = !1, xt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, gt = (e, o) => e ? `${e}/${o.text}` : o.text, qe = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => qe(n, o))) ?? !1 : !1;
}, Fe = (e, o) => !!(o && e.path === o), nr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return xt(r) ? nr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Go = (e) => {
  const o = xo(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((c) => {
    const a = c / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, Bt = (e) => {
  const o = xo(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, zo = (e, o) => {
  const r = xo(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, xo = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Fn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), sr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Vs = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", qs = Zo`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ce = "@media (prefers-reduced-motion: reduce)", J = 6, ir = "9, 193, 174", Pn = d.createContext(
  void 0
), Ut = d.createContext(
  void 0
), ar = (e) => d.useContext(Ut) ?? e, bt = () => {
  const e = d.useContext(Pn), o = e ? xo(e) : null;
  return o ? o.join(", ") : ir;
}, qr = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, Ys = (e, o) => e ? "255, 255, 255" : o, Zs = (e, o, r = ir) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${Vs(e)}, 0 0 0 1px ${sr(e)}`
}), Qs = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", cr = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: sr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${J}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), lr = Zo`
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
`, dr = Zo`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, ur = (e, o = ir, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Wt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: zo(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${zo(e, 0.45)}`
}, Js = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${sr(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${J}px`,
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
}, ei = 100, Bn = 80, io = 56, Dt = 72, fo = 52, _e = 40, ho = 20, fr = 4, Ft = 8, Wn = J, Gn = { xs: 2, md: "18px" }, zn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, hr = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), Hn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n
}) => !e || o ? 0 : r === "rail-labeled" ? Bn : hr(n, r) ? fo + 2 * Ft : r === "collapsible" || r === "panel" ? Dt : ei, Un = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Xn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Kn = { stiffness: 320, damping: 24 }, jn = { stiffness: 320, damping: 28 }, pr = { stiffness: 520, damping: 20 }, Vn = { stiffness: 380, damping: 36 }, bo = { stiffness: 260, damping: 28 }, ti = "cubic-bezier(0.32, 1.28, 0.52, 1)", oi = 420, Yr = 60, ri = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Zr = /* @__PURE__ */ new Map(), ve = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = Zr.get(n);
  if (i)
    return i;
  if (!ri)
    return { easing: ti, duration: oi };
  const s = 1 / 600;
  let c = 0, a = 0, p = 0, l = 1 / Yr;
  const m = [0];
  for (; p < 3; ) {
    const h = (-e * (c - 1) - o * a) / r;
    if (a += h * s, c += a * s, p += s, p >= l && (m.push(c), l += 1 / Yr, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const g = {
    easing: `linear(${m.map((h) => Number(h.toFixed(4))).join(", ")})`,
    duration: Math.round(p * 1e3)
  };
  return Zr.set(n, g), g;
}, et = (e) => !!(e && typeof e.animate == "function"), tt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Lt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, ni = (e, o = 1.14) => {
  if (!et(e) || tt())
    return;
  const r = ve(pr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, Gt = "data-rail-item", si = `[${Gt}], button, [role="button"]`, yt = d.createContext(!1), mr = () => {
  const e = d.useContext(yt), o = Be(), r = d.useContext(Ut);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: cr(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ye = ve(Vn), gr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  pinSelector: s,
  pinKey: c = null
}) => {
  const a = d.useRef(null), p = bt(), [l, m] = d.useState(null), g = d.useRef(null), h = d.useRef(null), u = (v, b) => {
    h.current = b;
    const _ = b.getBoundingClientRect(), K = v.getBoundingClientRect(), j = n ?? _.width, P = n ?? _.height, F = {
      top: Math.round(_.top - K.top + (_.height - P) / 2),
      left: Math.round(_.left - K.left + (_.width - j) / 2),
      width: Math.round(j),
      height: Math.round(P)
    };
    m(
      (D) => D && D.visible && D.top === F.top && D.left === F.left && D.width === F.width && D.height === F.height ? D : { ...F, visible: !0, instant: !(D != null && D.visible) }
    );
  }, x = (v, b) => {
    var K;
    const _ = (K = b == null ? void 0 : b.closest) == null ? void 0 : K.call(b, r);
    return _ && v.contains(_) ? _ : null;
  }, I = (v) => {
    if (!e)
      return;
    const b = x(v.currentTarget, v.target);
    b && u(v.currentTarget, b);
  }, y = (v) => {
    if (!e)
      return;
    const b = x(v.currentTarget, v.target);
    b && v.target.matches(":focus-visible") && u(v.currentTarget, b);
  }, S = () => {
    var _;
    const v = (_ = a.current) == null ? void 0 : _.parentElement, b = s && (v == null ? void 0 : v.querySelector(s));
    return v && b ? { container: v, item: b } : null;
  }, E = () => {
    const v = S();
    if (v) {
      u(v.container, v.item);
      return;
    }
    h.current = null, m((b) => b != null && b.visible ? { ...b, visible: !1 } : b);
  };
  d.useEffect(() => {
    var b, _;
    if (!e)
      return;
    const v = S();
    v ? u(v.container, v.item) : (_ = (b = a.current) == null ? void 0 : b.parentElement) != null && _.matches(":hover") || E();
  }, [e, c]);
  const R = (v) => {
    const b = v.relatedTarget;
    (!b || !v.currentTarget.contains(b)) && (v.currentTarget.matches(":hover") || E());
  };
  return d.useEffect(() => {
    const v = a.current;
    if (!(l != null && l.visible)) {
      g.current = null;
      return;
    }
    const b = g.current;
    if (g.current = l.top, !et(v) || tt())
      return;
    if (b === null || l.instant) {
      v.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ye.duration,
        easing: Ye.easing
      });
      return;
    }
    const _ = Math.min(Math.abs(l.top - b) / 600, 0.08);
    _ && v.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - _ / 2} ${1 + _}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ye.duration, easing: "ease-out" }
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
          ...ur(o, p),
          borderRadius: `${i}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: l.width,
          height: l.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset.
          translate: `${l.left}px ${l.top}px`,
          // Shrinks away as it fades; wells back up on return
          scale: l.visible ? "1" : "0.7",
          opacity: l.visible ? 1 : 0,
          pointerEvents: "none",
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ye.duration}ms ${Ye.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
          [Ce]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: I,
      onMouseLeave: E,
      onFocus: y,
      onBlur: R,
      onScrollCapture: E
    } : {}
  };
}, ii = (e, o, r = null) => {
  const n = gr({
    enabled: e,
    isDark: o,
    selector: si,
    // The rail's buttons exactly, so the hover sits on the item
    size: _e,
    radius: J,
    pinSelector: `[${Gt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, ai = (e, o) => {
  let r = 0, n = 0, i = e;
  for (; i && i !== o; ) {
    r += i.offsetTop, n += i.offsetLeft;
    const a = i.offsetParent;
    for (let p = i.parentElement; p && p !== o && (r -= p.scrollTop, n -= p.scrollLeft, p !== a); p = p.parentElement)
      ;
    i = a;
  }
  if (i === o && e.offsetWidth)
    return {
      top: Math.round(r),
      left: Math.round(n),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const s = e.getBoundingClientRect(), c = o.getBoundingClientRect();
  return {
    top: Math.round(s.top - c.top),
    left: Math.round(s.left - c.left),
    width: Math.round(s.width),
    height: Math.round(s.height)
  };
}, ci = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const i = d.useRef(null), [s, c] = d.useState(null), a = d.useRef(null), p = d.useCallback(
    (m) => {
      const g = n.current;
      if (!e || !g)
        return;
      const h = g.querySelector(
        `[${Gt}][data-active="true"]`
      );
      if (!h) {
        c(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const u = ai(h, g);
      c(
        (x) => x && x.visible && x.top === u.top && x.left === u.left && x.width === u.width && x.height === u.height ? x : {
          ...u,
          visible: !0,
          instant: m || !(x != null && x.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    p(!1);
  }), d.useEffect(() => {
    const m = n.current;
    if (!e || !m)
      return;
    let g = 0;
    const h = () => {
      cancelAnimationFrame(g), g = requestAnimationFrame(() => p(!1));
    }, u = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => p(!0));
    u == null || u.observe(m);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(h);
    return x == null || x.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(g), u == null || u.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, p]), d.useEffect(() => {
    const m = i.current;
    if (!(s != null && s.visible)) {
      a.current = null;
      return;
    }
    const g = a.current;
    if (a.current = s.top, g === null || s.instant || !et(m) || tt())
      return;
    const h = Math.min(Math.abs(s.top - g) / 600, 0.08);
    h && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - h / 2} ${1 + h}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ye.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    C,
    {
      ref: i,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...Wt(r, o),
        borderRadius: `${J}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: s.width,
        height: s.height,
        translate: `${s.left}px ${s.top}px`,
        scale: s.visible ? "1" : "0.7",
        opacity: s.visible ? 1 : 0,
        pointerEvents: "none",
        transition: s.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ye.duration}ms ${Ye.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Ce]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Qr = 14, li = 18, di = "blur(12px) saturate(180%) brightness(1.04)", ui = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), fi = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, hi = 140, Jr = 0.22, pi = 0.14, mi = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var u;
      const h = e.current;
      h && (h.style.setProperty("--lx", `${s.x.toFixed(1)}px`), h.style.setProperty("--ly", `${s.y.toFixed(1)}px`), h.style.setProperty("--li", s.i.toFixed(3)), (u = n.current) == null || u.call(n, s.x, s.y, s.i));
    }, p = () => {
      s.x += (i.x - s.x) * Jr, s.y += (i.y - s.y) * Jr, s.i += (i.i - s.i) * pi;
      const h = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      h && (s.x = i.x, s.y = i.y, s.i = i.i), a(), c = h ? 0 : requestAnimationFrame(p);
    }, l = () => {
      c || (c = requestAnimationFrame(p));
    }, m = (h) => {
      const u = e.current;
      if (h.pointerType === "touch" || !u)
        return;
      const x = u.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      i.x = (h.clientX - x.left) * u.offsetWidth / x.width, i.y = (h.clientY - x.top) * u.offsetHeight / x.height;
      const I = Math.max(
        x.left - h.clientX,
        0,
        h.clientX - x.right
      ), y = Math.max(
        x.top - h.clientY,
        0,
        h.clientY - x.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(I, y) / hi), s.i < 0.01 && (s.x = i.x, s.y = i.y), l();
    }, g = () => {
      i.i = 0, l();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", g), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", g);
    };
  }, [e, o]);
}, St = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: s = !0,
    onLight: c
  }, a) => {
    const p = d.useRef(null), l = i && Vr;
    mi(p, s && Vr, c);
    const m = bt(), g = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [h, u] = d.useState(null), x = d.useRef(null), I = d.useCallback(
      (E) => {
        var T;
        if (p.current = E, typeof a == "function" ? a(E) : a && (a.current = E), (T = x.current) == null || T.disconnect(), x.current = null, !E || !l || !ui || typeof ResizeObserver > "u")
          return;
        const R = () => {
          const v = E.offsetWidth, b = E.offsetHeight;
          u(
            (_) => (_ == null ? void 0 : _.width) === v && _.height === b ? _ : v && b ? { width: v, height: b } : null
          );
        };
        x.current = new ResizeObserver(R), x.current.observe(E), R();
      },
      [a, l]
    ), y = d.useMemo(
      () => h ? fi(h.width, h.height, Qr) : null,
      [h]
    ), S = l && !!(y && h);
    return /* @__PURE__ */ w(Me, { children: [
      S ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ w(
            "filter",
            {
              id: g,
              x: "0",
              y: "0",
              width: h.width,
              height: h.height,
              filterUnits: "userSpaceOnUse",
              primitiveUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ t(
                  "feImage",
                  {
                    href: y,
                    x: "0",
                    y: "0",
                    width: h.width,
                    height: h.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ t(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: Qr / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: li,
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
          ref: I,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": S ? "true" : void 0,
          sx: [
            Zs(e, o, m),
            S ? {
              backdropFilter: `url(#${g}) ${di}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
St.displayName = "GlassLayer";
const Ze = _e, en = fr, gi = J, tn = 1.12, yo = 6, on = yo - 2, Nt = J, Ho = 24, po = 10, rn = 0.12, nn = 0.75, xi = po + fo / 2 - 2, bi = 90, yi = 22, Si = 1190, vi = 1195, mo = ve(Kn), ge = ve(Vn), sn = ve(bo), wi = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const s = Math.min(i, r / 2, n / 2), c = e + r, a = o + n, p = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + s} ${o} H ${c - s} ${p} ${c} ${o + s} V ${a - s} ${p} ${c - s} ${a} H ${e + s} ${p} ${e} ${a - s} V ${o + s} ${p} ${e + s} ${o} Z')`;
}, Ri = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: i,
  activePath: s,
  focusFirst: c = !1,
  onNavigate: a,
  onClose: p,
  panelProps: l,
  accentColor: m,
  activeForegroundColor: g,
  solidSurface: h
}) => {
  const u = Be(), x = u.palette.mode === "dark", I = !!(e && r), y = d.useRef(null);
  e && o && (y.current = { group: e, key: o });
  const S = y.current, E = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const $ = r.getBoundingClientRect();
      return {
        x: n,
        y: $.top,
        left: n,
        right: n,
        top: $.top,
        bottom: $.bottom,
        width: 0,
        height: $.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), R = d.useRef(E);
  E && (R.current = E), d.useEffect(() => {
    r && ni(r);
  }, [r]);
  const [T, v] = d.useState(!1);
  d.useEffect(() => {
    if (!I) {
      v(!1);
      return;
    }
    let $ = 0;
    const z = requestAnimationFrame(() => {
      $ = requestAnimationFrame(() => v(!0));
    });
    return () => {
      cancelAnimationFrame(z), cancelAnimationFrame($);
    };
  }, [I]);
  const b = d.useMemo(
    () => S ? nr(S.group.subitems, S.group.icon) : [],
    [S]
  ), _ = d.useRef(null), K = d.useRef(null), j = d.useRef(0), P = d.useRef(null), F = d.useRef([]), D = b.findIndex(
    ({ sub: $ }) => Fe($, s)
  ), [L, A] = d.useState(0);
  d.useEffect(() => {
    A(Math.max(D, 0));
  }, [o]), d.useEffect(() => {
    if (!I || !c)
      return;
    const $ = setTimeout(() => {
      var z;
      return (z = F.current[0]) == null ? void 0 : z.focus();
    });
    return () => clearTimeout($);
  }, [I, c, o]);
  const ee = ($) => {
    var G;
    const z = Math.max(0, Math.min($, b.length - 1));
    A(z), (G = F.current[z]) == null || G.focus();
  }, we = ($, z) => {
    switch ($.key) {
      case "ArrowRight":
        ee(z + 1);
        break;
      case "ArrowLeft":
        z === 0 ? p(!0) : ee(z - 1);
        break;
      case "Home":
        ee(0);
        break;
      case "End":
        ee(b.length - 1);
        break;
      case "Tab":
        p(!0);
        break;
      default:
        return;
    }
    $.preventDefault();
  }, W = ($) => {
    const z = F.current.slice(0, b.length).filter((V) => !!V);
    if (!z.length)
      return;
    const G = $ !== null && $ < z.length && !tt(), te = `translate ${ge.duration}ms ${ge.easing}, scale ${ge.duration}ms ${ge.easing}`, k = z.map((V) => V.offsetLeft + Ze / 2), Q = z.map(
      (V, oe) => G && oe === $ ? tn : 1
    ), ce = G ? (tn - 1) * Ze : 0, ue = k[0] - Ze / 2, We = k[k.length - 1] + Ze / 2, Te = G ? Math.min(
      Math.max(
        (k[$] - ue) / (We - ue || 1),
        Math.max(0, 1 - on / ce)
      ),
      Math.min(1, on / ce)
    ) : 0;
    let Re = ue - ce * Te;
    z.forEach((V, oe) => {
      const Oe = Ze * Q[oe], fe = Re + Oe / 2;
      Re += Oe + en, V.style.transition = `${te}, background 160ms ease, box-shadow 160ms ease`, V.style.translate = G ? `${fe - k[oe]}px 0` : "", V.style.scale = G ? String(Q[oe]) : "", G ? V.style.setProperty("--dock-scale", String(Q[oe])) : V.style.removeProperty("--dock-scale");
    });
  }, B = d.useRef(null);
  d.useEffect(() => {
    B.current = null;
  }, [o]);
  const H = ($) => {
    B.current !== $ && (B.current = $, cancelAnimationFrame(j.current), j.current = requestAnimationFrame(() => W($)));
  };
  d.useEffect(() => () => cancelAnimationFrame(j.current), []);
  const re = u.palette.text.primary, ie = x ? u.palette.text.primary : m;
  return /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t(Qo, { in: I, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      C,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => p(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: i ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...i ? { clipPath: wi(i) } : {},
          zIndex: Si,
          bgcolor: Qs(x)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      Jo,
      {
        open: I,
        anchorEl: E ?? R.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Up by half the title, so the tile row (not the whole
          // panel) is centred on the rail icon
          {
            name: "offset",
            options: {
              offset: [-Ho / 2, po]
            }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: vi,
          transition: T ? `transform ${ge.duration}ms ${ge.easing}` : "none",
          [Ce]: { transition: "none" }
        },
        children: ({ TransitionProps: $ }) => /* @__PURE__ */ t(
          Ai,
          {
            in: ($ == null ? void 0 : $.in) ?? I,
            onEnter: $ == null ? void 0 : $.onEnter,
            onExited: $ == null ? void 0 : $.onExited,
            groupKey: (S == null ? void 0 : S.key) ?? null,
            panelProps: l,
            isDark: x,
            solidSurface: h,
            groupText: S == null ? void 0 : S.group.text,
            glassRef: K,
            shapeRef: P,
            children: S ? /* @__PURE__ */ w(Me, { children: [
              /* @__PURE__ */ t(
                C,
                {
                  "aria-hidden": !0,
                  "data-testid": "sidebar-flyout-title",
                  sx: {
                    px: `${yo}px`,
                    height: Ho,
                    boxSizing: "border-box",
                    pt: "2px",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "16px",
                    letterSpacing: "0.02em",
                    color: "text.secondary",
                    whiteSpace: "nowrap"
                  },
                  children: S.group.text
                }
              ),
              /* @__PURE__ */ t(
                C,
                {
                  ref: _,
                  role: "menu",
                  "aria-label": S.group.text,
                  onPointerLeave: () => H(null),
                  sx: {
                    position: "relative",
                    display: "flex",
                    gap: `${en}px`,
                    // A grown tile fits in the panel's padding
                    // (see DOCK_ROOM_PX)
                    px: 0
                  },
                  children: b.map(({ sub: z, icon: G }, te) => /* @__PURE__ */ t(
                    qn,
                    {
                      ref: (k) => {
                        F.current[te] = k;
                      },
                      sub: z,
                      icon: G,
                      index: te,
                      active: Fe(
                        z,
                        s
                      ),
                      tabIndex: te === L ? 0 : -1,
                      onClick: () => {
                        a(z.path), p();
                      },
                      onKeyDown: (k) => we(k, te),
                      onFocus: (k) => {
                        A(te), k.currentTarget.matches(
                          ":focus-visible"
                        ) && H(te);
                      },
                      onHoverStart: (k) => {
                        k !== "touch" && H(te);
                      },
                      accentColor: m,
                      activeForegroundColor: g,
                      labelColor: re,
                      iconColor: ie,
                      isDark: x
                    },
                    z.path
                  ))
                },
                S.key
              )
            ] }) : null
          }
        )
      }
    )
  ] });
}, Pt = 18, Ei = 160, Uo = 14, Ii = 22, _i = 2.5, Ci = 1, an = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, Ti = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, Oi = (e, o, r) => {
  const n = yo, i = Pt, s = Pt + o / 2, c = Math.max(e, ...r.map((y) => y.right + n)), a = {
    cx: c / 2,
    cy: s,
    hx: c / 2,
    hy: o / 2,
    r: Nt
  }, p = r.filter((y) => y.bottom - y.top > Ze * 1.02).map((y) => ({
    cx: (y.left + y.right) / 2,
    cy: (y.top + y.bottom) / 2 + Pt,
    hx: (y.right - y.left) / 2 + n,
    hy: (y.bottom - y.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: Nt
  })), l = (y, S) => p.reduce(
    (E, R) => Ti(E, an(y, S, R), Ii),
    an(y, S, a)
  ), m = (y, S) => {
    let E = s, R = s + S * (o / 2 + i);
    if (l(y, E) > 0)
      return null;
    for (let T = 0; T < 12; T += 1) {
      const v = (E + R) / 2;
      l(y, v) <= 0 ? E = v : R = v;
    }
    return E;
  }, g = Math.min(0, ...p.map((y) => y.cx - y.hx)) - 2, h = Math.max(c, ...p.map((y) => y.cx + y.hx)) + 2, u = [], x = [];
  for (let y = g; y <= h; ) {
    const S = m(y, -1), E = m(y, 1);
    if (S !== null && E !== null) {
      const T = +(y + Uo).toFixed(1);
      u.push([T, +S.toFixed(1)]), x.push([T, +E.toFixed(1)]);
    }
    const R = y - g < Nt + 4 || h - y < Nt + 4;
    y += R ? Ci : _i;
  }
  return u.length ? `M ${[...u, ...x.reverse()].map(([y, S]) => `${y} ${S}`).join(" L ")} Z` : "";
}, cn = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((s) => {
    et(s) && (Lt(s), s.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    }));
  });
}, Ai = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: i,
  isDark: s,
  solidSurface: c,
  groupText: a,
  glassRef: p,
  shapeRef: l,
  children: m
}) => {
  const g = d.useRef(null), h = d.useRef(null), u = d.useRef(null), x = d.useRef(null), I = d.useRef(null), y = Ys(s, bt()), S = d.useCallback(
    (W, B, H) => {
      var re, ie;
      (re = I.current) == null || re.setAttribute("cx", String(W)), (ie = I.current) == null || ie.setAttribute("cy", String(B)), x.current && (x.current.style.opacity = String(
        H * (s ? qr.dark.rim : qr.light.rim)
      ));
    },
    [s]
  ), E = d.useRef(null), R = d.useRef(null), T = `lumora-flyout-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, v = d.useRef(0), b = d.useRef(0), _ = d.useRef(""), K = () => {
    var $, z, G, te;
    const W = g.current, B = h.current;
    if (!W || !B)
      return !1;
    const H = W.getBoundingClientRect(), re = Array.from(
      W.querySelectorAll('[role="menuitem"]'),
      (k) => {
        if (k.style.scale)
          return null;
        const Q = k.getBoundingClientRect();
        return {
          left: Q.left - H.left,
          right: Q.right - H.left,
          top: Q.top - H.top,
          bottom: Q.bottom - H.top
        };
      }
    ).filter((k) => k !== null), ie = Oi(
      W.offsetWidth,
      W.offsetHeight,
      re
    );
    return ie === _.current ? !1 : (_.current = ie, B.style.clipPath = `path('${ie}')`, ($ = u.current) == null || $.setAttribute("d", ie), (z = x.current) == null || z.setAttribute("d", ie), (G = E.current) == null || G.setAttribute("d", ie), (te = R.current) == null || te.setAttribute("d", ie), !0);
  }, j = () => {
    if (b.current = 0, v.current)
      return;
    const W = () => {
      if (b.current = K() ? 0 : b.current + 1, b.current > 8) {
        v.current = 0;
        return;
      }
      v.current = requestAnimationFrame(W);
    };
    v.current = requestAnimationFrame(W);
  };
  l.current = j, d.useLayoutEffect(() => (K(), j(), () => {
    cancelAnimationFrame(v.current), v.current = 0;
  }), [n]);
  const P = d.useRef(null), F = d.useRef(null), D = d.useRef(!1), L = (W) => {
    g.current = W;
    const { ref: B } = i;
    typeof B == "function" ? B(W) : B && (B.current = W);
  }, A = () => {
    Lt(p.current), Lt(P.current), Lt(g.current);
  }, ee = () => {
    var re;
    const W = g.current, B = p.current, H = P.current;
    if (!(!et(W) || !B || !H)) {
      if (A(), tt()) {
        W.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      F.current = null, B.animate(
        [
          { transform: `scale(${rn}, ${nn})` },
          { transform: "none" }
        ],
        { duration: mo.duration, easing: mo.easing }
      ), cn(B, [0, 1], 160, "ease-out");
      try {
        (re = h.current) == null || re.animate(
          [
            { opacity: 0, transform: "translate(-35%, -35%)" },
            { opacity: 1, transform: "none" }
          ],
          {
            pseudoElement: "::after",
            duration: 760,
            delay: 60,
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
            fill: "backwards"
          }
        );
      } catch {
      }
      H.animate(
        [
          { opacity: 0, transform: "translateX(-10px) scale(0.98)" },
          { opacity: 1, transform: "none" }
        ],
        {
          duration: sn.duration,
          delay: 60,
          easing: sn.easing,
          fill: "backwards"
        }
      );
    }
  }, we = () => {
    const W = g.current, B = p.current, H = P.current;
    if (!et(W) || !B || !H) {
      r == null || r();
      return;
    }
    if (A(), tt()) {
      W.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 120,
        fill: "forwards"
      }).finished.then(() => r == null ? void 0 : r()).catch(() => {
      });
      return;
    }
    H.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 90,
      easing: "ease-in",
      fill: "forwards"
    }), cn(B, [1, 0], 200, "ease-in"), B.animate(
      [
        { transform: "none" },
        { transform: `scale(${rn}, ${nn})` }
      ],
      {
        duration: 220,
        easing: "cubic-bezier(0.5, 0, 0.75, 0)",
        fill: "forwards"
      }
    ).finished.then(() => r == null ? void 0 : r()).catch(() => {
    });
  };
  return d.useLayoutEffect(() => {
    if (!e) {
      we();
      return;
    }
    o == null || o(), ee();
  }, [e]), d.useLayoutEffect(() => {
    const W = g.current;
    if (!W)
      return;
    const B = W.getBoundingClientRect(), H = F.current;
    if (F.current = { width: B.width, height: B.height }, !D.current) {
      D.current = !0;
      return;
    }
    const re = p.current;
    !e || !H || !et(re) || !B.width || !B.height || tt() || (Lt(re), re.animate(
      [
        {
          transform: `scale(${H.width / B.width}, ${H.height / B.height})`
        },
        { transform: "none" }
      ],
      { duration: ge.duration, easing: ge.easing }
    ));
  }, [n]), /* @__PURE__ */ w(
    C,
    {
      ref: L,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": a,
      sx: {
        position: "relative",
        borderRadius: `${Nt}px`,
        p: `${yo}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -po - 2,
          width: po + 2
        }
      },
      children: [
        /* @__PURE__ */ w(
          C,
          {
            ref: p,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Pt,
              bottom: -Pt,
              left: -Uo,
              right: -Ei,
              pointerEvents: "none",
              // The rail icon's centre: the tile row is level with it
              // (half the title below the panel's middle), one gap
              // plus half the rail's padding to the left
              transformOrigin: `${Uo - xi}px calc(50% + ${Ho / 2}px)`,
              willChange: "transform"
            },
            children: [
              /* @__PURE__ */ w(
                "svg",
                {
                  width: "100%",
                  height: "100%",
                  style: {
                    position: "absolute",
                    inset: 0,
                    overflow: "visible"
                  },
                  children: [
                    /* @__PURE__ */ w("defs", { children: [
                      /* @__PURE__ */ t(
                        "filter",
                        {
                          id: `${T}-shadow`,
                          x: "-20%",
                          y: "-50%",
                          width: "140%",
                          height: "200%",
                          children: /* @__PURE__ */ t("feGaussianBlur", { stdDeviation: "14" })
                        }
                      ),
                      /* @__PURE__ */ w(
                        "mask",
                        {
                          id: `${T}-outside`,
                          maskUnits: "userSpaceOnUse",
                          x: "-200",
                          y: "-200",
                          width: "4000",
                          height: "1000",
                          children: [
                            /* @__PURE__ */ t(
                              "rect",
                              {
                                x: "-200",
                                y: "-200",
                                width: "4000",
                                height: "1000",
                                fill: "white"
                              }
                            ),
                            /* @__PURE__ */ t("path", { ref: R, fill: "black" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ t("g", { mask: `url(#${T}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: E,
                        transform: "translate(0 12)",
                        fill: s ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${T}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                St,
                {
                  ref: h,
                  isDark: s,
                  solid: c,
                  refract: !1,
                  onLight: S,
                  "data-testid": "sidebar-flyout-glass",
                  sx: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: 0,
                    boxShadow: "none",
                    "&::before": { display: "none" }
                  }
                }
              ),
              /* @__PURE__ */ w(
                "svg",
                {
                  width: "100%",
                  height: "100%",
                  style: {
                    position: "absolute",
                    inset: 0,
                    overflow: "visible"
                  },
                  children: [
                    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ w(
                      "linearGradient",
                      {
                        id: `${T}-rim`,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0",
                              stopColor: "#ffffff",
                              stopOpacity: s ? 0.5 : 1
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0.25",
                              stopColor: "#ffffff",
                              stopOpacity: s ? 0.1 : 0.5
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0.55",
                              stopColor: "#ffffff",
                              stopOpacity: s ? 0.04 : 0.2
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: "#ffffff",
                              stopOpacity: s ? 0.3 : 0.9
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ t(
                      "path",
                      {
                        ref: u,
                        fill: "none",
                        stroke: s ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)",
                        strokeWidth: "1"
                      }
                    ),
                    /* @__PURE__ */ w(
                      "radialGradient",
                      {
                        ref: I,
                        id: `${T}-glint`,
                        gradientUnits: "userSpaceOnUse",
                        cx: "-9999",
                        cy: "-9999",
                        r: "140",
                        children: [
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0",
                              stopColor: `rgb(${y})`,
                              stopOpacity: "1"
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: `rgb(${y})`,
                              stopOpacity: "0"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ t(
                      "path",
                      {
                        ref: x,
                        fill: "none",
                        stroke: `url(#${T}-glint)`,
                        strokeWidth: "1.5",
                        style: {
                          opacity: 0,
                          display: "none"
                        }
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(C, { ref: P, sx: { position: "relative" }, children: m })
      ]
    }
  );
}, qn = d.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: i,
    onClick: s,
    onKeyDown: c,
    onFocus: a,
    onHoverStart: p,
    accentColor: l,
    activeForegroundColor: m,
    labelColor: g,
    iconColor: h,
    isDark: u
  }, x) => {
    const I = bt(), y = d.useContext(Ut), S = (v) => {
      const b = v.currentTarget.getBoundingClientRect();
      v.currentTarget.style.setProperty(
        "--mx",
        `${(v.clientX - b.left) / b.width * 100}%`
      ), v.currentTarget.style.setProperty(
        "--my",
        `${(v.clientY - b.top) / b.height * 100}%`
      );
    }, E = (v) => {
      const b = v.currentTarget;
      !et(b) || tt() || b.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.04, 0.96)", offset: 0.22 },
          { transform: "scale(0.98, 1.025)", offset: 0.5 },
          { transform: "scale(1.01, 0.995)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, R = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, T = {
      ...ur(u, I),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": R
    };
    return /* @__PURE__ */ w(
      ot,
      {
        ref: x,
        role: "menuitem",
        tabIndex: i,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: s,
        onKeyDown: c,
        onFocus: a,
        onPointerMove: S,
        onMouseEnter: E,
        onPointerEnter: (v) => p(v.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Ze,
          height: Ze,
          borderRadius: `${gi}px`,
          color: n ? m : g,
          bgcolor: n ? l : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Wt(l, u) : {},
          transition: `translate ${ge.duration}ms ${ge.easing}, scale ${ge.duration}ms ${ge.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${qs} ${mo.duration}ms ${mo.easing} both`,
          animationDelay: `${bi + r * yi}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: ho,
            color: n ? m : h
          },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 160ms ease",
            // The pointer's glow on the tile (glass look only)
            background: "none"
          },
          // The current page keeps its accent fill; it still glows
          "&:hover": n ? {
            "&::before": { opacity: 1 },
            "& [data-tile-name]": R
          } : T,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : T,
            "& [data-tile-name]": R,
            outline: "2px solid",
            outlineColor: l,
            outlineOffset: 2
          },
          [Ce]: {
            animation: "none",
            transition: "none",
            "&:active": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(C, { sx: { position: "relative", display: "flex" }, children: o }),
          /* @__PURE__ */ t(
            C,
            {
              component: "span",
              "data-tile-name": !0,
              sx: {
                ...cr(u, y),
                position: "absolute",
                top: "100%",
                left: "50%",
                translate: "-50% 8px",
                transformOrigin: "top center",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: 0,
                scale: "calc(0.6 / var(--dock-scale, 1))",
                transition: `opacity 140ms ease, scale ${ge.duration}ms ${ge.easing}`,
                zIndex: 1,
                [Ce]: { transition: "opacity 140ms ease" }
              },
              children: e.text
            }
          )
        ]
      }
    );
  }
);
qn.displayName = "FlyoutTile";
const $i = 100, Mi = 250, Di = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const i = d.useRef(/* @__PURE__ */ new Map()), s = d.useRef(null), c = d.useRef(void 0), a = d.useRef(void 0), p = () => {
    clearTimeout(c.current), c.current = void 0;
  }, l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = (S, E, R = !1) => {
    p(), l(), r({ key: S, pinned: E, focusFirst: R });
  }, g = d.useCallback((S = !1) => {
    var R, T;
    p(), l();
    const E = (R = n.current) == null ? void 0 : R.key;
    r(null), S && E && ((T = i.current.get(E)) == null || T.focus());
  }, []), h = () => {
    p(), !(!n.current || n.current.pinned) && (l(), a.current = setTimeout(() => g(), Mi));
  };
  d.useEffect(() => {
    e || g();
  }, [e, g]), d.useEffect(
    () => () => {
      p(), l();
    },
    []
  );
  const u = o !== null;
  return d.useEffect(() => {
    if (!u)
      return;
    const S = (T) => {
      var b;
      const v = T;
      return v ? (b = s.current) != null && b.contains(v) ? !0 : [...i.current.values()].some((_) => _.contains(v)) : !1;
    }, E = (T) => {
      S(T.target) || g();
    }, R = (T) => {
      var v;
      T.key === "Escape" && g(
        !!((v = s.current) != null && v.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", E), document.addEventListener("keydown", R), () => {
      document.removeEventListener("pointerdown", E), document.removeEventListener("keydown", R);
    };
  }, [u, g]), {
    state: o,
    close: g,
    triggerProps: (S) => ({
      ref: (E) => {
        E ? i.current.set(S, E) : i.current.delete(S);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        l();
        const E = n.current;
        if (E) {
          E.key !== S && m(S, E.pinned);
          return;
        }
        p(), c.current = setTimeout(
          () => m(S, !1),
          $i
        );
      },
      onMouseLeave: h,
      onClick: (E) => {
        if (E.detail === 0) {
          m(S, !0, !0);
          return;
        }
        const R = n.current;
        (R == null ? void 0 : R.key) === S && R.pinned ? g() : m(S, !0);
      },
      onKeyDown: (E) => {
        E.key === "ArrowRight" && (E.preventDefault(), m(S, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: l,
      onMouseLeave: h
    },
    onRailLeafEnter: () => {
      p(), n.current && !n.current.pinned && g();
    },
    getTrigger: (S) => i.current.get(S) ?? null
  };
}, Li = 264, Ni = 72, ln = 64, to = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ki = 16, Fi = 14, Pi = 4, Bi = 2.5, dn = "0.7rem", un = 22, fn = ve(pr), at = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
  const s = d.useRef(null), [c, a] = d.useState(!1), p = d.useCallback(() => {
    const l = s.current;
    l && a(l.scrollWidth > l.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    p();
  }, [p, e]), d.useEffect(() => {
    const l = s.current;
    if (!l)
      return;
    const m = new ResizeObserver(() => p());
    return m.observe(l), () => m.disconnect();
  }, [p]), /* @__PURE__ */ t(
    Se,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !c,
      disableFocusListener: !c,
      disableTouchListener: !c,
      children: /* @__PURE__ */ t(
        ae,
        {
          ref: s,
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
            ...i ? { fontWeight: i } : {},
            ...r ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: e
        }
      )
    }
  );
}, Wi = ({
  open: e,
  size: o = ki
}) => e ? /* @__PURE__ */ t(_s, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Is, { sx: { fontSize: o, opacity: 0.75 } }), hn = ({ open: e }) => /* @__PURE__ */ t(
  Cs,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), oo = 600, ft = `${fr}px`, ro = 8;
function Gi(e, o, r) {
  d.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const i = (p) => {
      const l = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((u) => u.offsetHeight > 0).pop();
      if (!l)
        return;
      const m = n.getBoundingClientRect(), g = l.getBoundingClientRect();
      let h = 0;
      g.top < m.top + ro ? h = g.top - m.top - ro : g.bottom > m.bottom - ro && (h = g.bottom - m.bottom + ro), h !== 0 && n.scrollBy({ top: h, behavior: p });
    }, s = requestAnimationFrame(() => i("smooth")), c = window.setTimeout(() => i("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => i("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(s), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const Xo = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: i,
  logo: s,
  title: c,
  onBrandClick: a,
  brandMenuOpen: p,
  showHeaderBar: l = !1,
  headerBackgroundColor: m,
  headerForegroundColor: g,
  brandColor: h,
  activeAccentColor: u = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: I,
  foregroundColor: y,
  surfaceBackgroundColor: S,
  flyoutSurfaceColor: E,
  collapsed: R = !1,
  expandedWidth: T = Li,
  collapsedWidth: v = Ni,
  showLabels: b = !1,
  topInsetPx: _ = 0,
  topContent: K,
  footer: j,
  submenuMode: P = "inline"
}) => {
  var he;
  const F = Be(), D = F.palette.mode === "dark", L = d.useContext(Ut), A = P === "flyout" && R && !b, ee = Di(A), we = d.useRef(null), W = d.useRef(null), B = d.useRef(null);
  Gi(B, r, R);
  const H = ii(A, D, ((he = ee.state) == null ? void 0 : he.key) ?? null), re = ci({
    enabled: A,
    isDark: D,
    color: u,
    containerRef: W
  }), { close: ie } = ee;
  d.useEffect(() => {
    ie();
  }, [r, ie]);
  const [$, z] = d.useState(
    {}
  ), G = I ?? Go(u), te = {
    bgcolor: u,
    color: G,
    "& .MuiListItemIcon-root": { color: G }
  }, k = {
    bgcolor: u,
    color: G,
    borderRadius: "8px"
  }, Q = x ?? Bt(u), ce = S ?? (D ? F.palette.background.paper : "#ffffff"), ue = y ?? (D ? "text.primary" : u), We = m ?? ce, Te = g ?? (m ? Go(We) : y ?? (D ? F.palette.text.primary : u)), Re = Bt(Te), V = (f) => {
    n == null || n(f);
  }, oe = (f, N) => {
    z((X) => ({ ...X, [f]: !N }));
  }, Oe = (f, N) => $[N] ?? qe(f, r), fe = (f, N, X) => ({
    color: f ? G : ue,
    bgcolor: f ? u : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? G : ue,
      minWidth: X
    },
    "&:hover": f || b ? te : { bgcolor: N }
  }), Ge = {
    "&.Mui-selected": {
      bgcolor: u
    },
    "&.Mui-selected:hover": te
  }, ze = (f) => {
    const N = Fe(f, r), X = /* @__PURE__ */ w(
      eo,
      {
        disabled: !f.path,
        selected: N,
        onClick: () => f.path && V(f.path),
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
          ...fe(
            N,
            Q,
            f.subtitle ? 48 : 36
          ),
          ...Ge
        },
        children: [
          /* @__PURE__ */ t(ye, { children: f.icon }),
          /* @__PURE__ */ t(
            Pe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: f.text,
                  fontWeight: oo
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ t(
                C,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    at,
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
    const { action: M } = f;
    return /* @__PURE__ */ w(C, { sx: { position: "relative" }, children: [
      X,
      /* @__PURE__ */ t(Se, { title: M.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        be,
        {
          "aria-label": M.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            M.onClick(), i == null || i();
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
            borderColor: N ? "rgba(255, 255, 255, 0.35)" : Q,
            color: N ? G : ue,
            "&:hover": {
              bgcolor: N ? "rgba(255, 255, 255, 0.15)" : Q
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: N ? G : ue,
              outlineOffset: 1
            }
          },
          children: M.icon
        }
      ) })
    ] }, f.text);
  }, He = (f) => {
    const N = qe(f, r), X = Fe(f, r), M = gt("", f), U = Oe(f, M);
    return /* @__PURE__ */ w(
      C,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: N ? Q : "transparent"
        },
        children: [
          /* @__PURE__ */ w(
            eo,
            {
              onClick: () => oe(M, U),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": X ? "true" : "false",
              "aria-expanded": U,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...fe(X, Q, 36)
              },
              children: [
                /* @__PURE__ */ t(ye, { children: f.icon }),
                /* @__PURE__ */ t(
                  Pe,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      at,
                      {
                        text: f.text,
                        fontWeight: oo
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(hn, { open: U })
              ]
            }
          ),
          /* @__PURE__ */ t(zr, { in: U, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            C,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (q) => vt(q, M, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, vt = (f, N, X) => {
    const M = gt(N, f), U = Pi + (X - 1) * Bi;
    if (xt(f)) {
      const me = qe(f, r), le = Fe(f, r), de = Oe(f, M);
      return /* @__PURE__ */ w(C, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ w(
          eo,
          {
            onClick: () => oe(M, de),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": me ? "true" : "false",
            "aria-expanded": de,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: U,
              ...fe(le, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(ye, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                Pe,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    at,
                    {
                      text: f.text,
                      fontWeight: oo
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(hn, { open: de })
            ]
          }
        ),
        /* @__PURE__ */ t(zr, { in: de, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(C, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (vo) => vt(vo, M, X + 1)
        ) }) })
      ] }, M);
    }
    const q = Fe(f, r);
    return /* @__PURE__ */ w(
      eo,
      {
        selected: q,
        disabled: !f.path,
        onClick: () => f.path && V(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": q ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: U,
          ...fe(q, "action.hover", 32),
          ...Ge
        },
        children: [
          f.icon ? /* @__PURE__ */ t(ye, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            Pe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: f.text,
                  fontWeight: oo
                }
              )
            }
          )
        ]
      },
      M
    );
  }, lt = (f, N, X, M, U, q) => {
    const me = !U, le = /* @__PURE__ */ w(
      be,
      {
        "aria-label": N,
        disabled: me,
        onClick: U,
        onMouseEnter: A ? ee.onRailLeafEnter : void 0,
        ...A ? { [Gt]: "" } : {},
        "data-testid": (q == null ? void 0 : q.testId) ?? `sidebar-item-${N}`,
        "data-active": M ? "true" : "false",
        sx: b ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: M ? G : ue,
          bgcolor: M ? u : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: un
          },
          "&:hover": k,
          ...to
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: A ? _e : 44,
          height: A ? _e : 44,
          color: M ? G : ue,
          bgcolor: M ? u : "transparent",
          borderRadius: M ? "8px" : "50%",
          "&:hover": {
            bgcolor: M ? u : q != null && q.insideGroup ? "action.hover" : Q,
            borderRadius: "8px"
          },
          ...to,
          ...A ? Kt(M) : {}
        },
        children: [
          X,
          b ? /* @__PURE__ */ t(
            at,
            {
              text: N,
              variant: "caption",
              center: !0,
              fontSize: dn
            }
          ) : null
        ]
      }
    );
    return b ? me ? /* @__PURE__ */ t("span", { children: le }, f) : /* @__PURE__ */ t(d.Fragment, { children: le }, f) : /* @__PURE__ */ t(
      Se,
      {
        title: N,
        placement: "right",
        arrow: !A,
        ...A ? rt : {},
        children: me ? /* @__PURE__ */ t("span", { children: le }) : le
      },
      f
    );
  }, Xt = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, Kt = (f) => ({
    borderRadius: `${J}px`,
    "& .MuiSvgIcon-root": { fontSize: ho },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${fn.duration}ms ${fn.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), rt = {
    slotProps: {
      tooltip: { sx: cr(D, L) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, wt = (f) => {
    var U;
    const N = qe(f, r), X = gt("", f), M = ((U = ee.state) == null ? void 0 : U.key) === X;
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
          be,
          {
            ...ee.triggerProps(X),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": M,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": N ? "true" : "false",
            "data-open": M ? "true" : "false",
            [Gt]: "",
            sx: {
              position: "relative",
              width: _e,
              height: _e,
              color: N ? G : ue,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: N ? u : "transparent",
              ...Kt(N),
              "&::after": {
                content: '""',
                position: "absolute",
                right: 5,
                bottom: 5,
                borderStyle: "solid",
                borderWidth: "0 0 5px 5px",
                borderColor: "transparent transparent currentColor transparent",
                opacity: 0.55
              },
              ...to
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, jt = (f) => {
    const N = qe(f, r), X = Fe(f, r), M = gt("", f), U = Oe(f, M), q = /* @__PURE__ */ w(
      be,
      {
        "aria-label": f.text,
        "aria-expanded": U,
        onClick: () => oe(M, U),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": X ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: b ? 0.25 : 0,
          width: b ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...b ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: X ? G : ue,
          bgcolor: X ? u : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": b ? { bgcolor: u, color: G } : {
            bgcolor: X ? u : "transparent"
          },
          ...to
        },
        children: [
          b ? /* @__PURE__ */ t(
            C,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: un
                }
              },
              children: f.icon
            }
          ) : f.icon,
          b ? /* @__PURE__ */ t(
            at,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: dn
            }
          ) : null,
          /* @__PURE__ */ t(Wi, { open: U, size: Fi })
        ]
      }
    ), me = b ? q : /* @__PURE__ */ t(Se, { title: f.text, placement: "right", arrow: !0, children: q });
    return /* @__PURE__ */ w(
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
          bgcolor: N ? Q : "transparent",
          ...b ? {} : { "&:hover": { bgcolor: Q } }
        },
        children: [
          me,
          U ? nr(f.subitems, f.icon).map(
            ({ sub: le, icon: de }) => lt(
              le.path,
              le.text,
              de,
              Fe(le, r),
              () => V(le.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${le.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, nt = (f) => /* @__PURE__ */ t(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: lt(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        Fe(f, r),
        f.path ? () => V(f.path) : void 0,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), Rt = (f) => xt(f) ? A ? wt(f) : R ? jt(f) : He(f) : R ? nt(f) : ze(f), Et = (f) => /* @__PURE__ */ t(
    De,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: R ? "center" : "stretch"
      },
      children: f.map(Rt)
    }
  ), It = R ? v : T, So = () => {
    var me, le;
    const { state: f } = ee, N = f ? [...e, ...o].find(
      (de) => xt(de) && gt("", de) === f.key
    ) ?? null : null, X = N ? ((me = we.current) == null ? void 0 : me.getBoundingClientRect().right) ?? v : v, M = N ? ((le = we.current) == null ? void 0 : le.closest("[data-rail-surface]")) ?? we.current : null, U = M == null ? void 0 : M.getBoundingClientRect(), q = M && U ? {
      left: U.left,
      top: U.top,
      width: U.width,
      height: U.height,
      radius: parseFloat(
        getComputedStyle(M).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Ri,
      {
        group: N,
        groupKey: N ? f.key : null,
        anchor: N ? ee.getTrigger(f.key) : null,
        railEdge: X,
        railShape: q,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: V,
        onClose: ee.close,
        panelProps: ee.flyoutProps,
        accentColor: u,
        activeForegroundColor: G,
        solidSurface: E ?? ce
      }
    );
  }, dt = l ? /* @__PURE__ */ t(
    C,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...A ? { pt: "12px", pb: "12px" } : {
          height: ln,
          minHeight: ln
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: We
      },
      children: s || c ? /* @__PURE__ */ t(
        uo,
        {
          logo: s,
          title: R ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: p,
          color: h ?? Te,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, Vt = !l && s ? /* @__PURE__ */ t(
    C,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: A ? ft : 1
      },
      children: /* @__PURE__ */ t(
        uo,
        {
          logo: s,
          appName: c || "App",
          onClick: a,
          menuOpen: p,
          color: h ?? Te,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, ut = b ? 0.5 : A ? 0.75 : R ? 1 : 1.5;
  return /* @__PURE__ */ t(yt.Provider, { value: A, children: /* @__PURE__ */ w(
    C,
    {
      ref: we,
      ...H.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": R ? "true" : "false",
      "data-labeled": b ? "true" : "false",
      sx: {
        width: It,
        minWidth: It,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: ce,
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
        ...A ? Xt : {}
      },
      children: [
        H.lens,
        dt ?? Vt,
        K ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: ut,
              pt: A ? 0 : 1,
              pb: A ? 0 : 1
            },
            children: K
          }
        ) : null,
        /* @__PURE__ */ t(
          C,
          {
            ref: B,
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              // Scrollbar shows only while the pointer is inside (or a
              // keyboard user tabs in). Not :focus-within, since a
              // clicked link keeps focus and would pin it on. On the
              // icon rail the gutter is reserved on both edges so the
              // icons never shift and stay centred with the brand and
              // footer.
              ...A ? { scrollbarGutter: "stable both-edges" } : {},
              scrollbarWidth: "thin",
              scrollbarColor: "transparent transparent",
              // Safari only honours the thumb rule once the bar
              // itself is styled.
              "&::-webkit-scrollbar": { width: A ? 6 : 8 },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: 4
              },
              "&:hover, &:has(:focus-visible)": {
                scrollbarColor: (f) => `${f.palette.divider} transparent`,
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: (f) => f.palette.divider
                }
              },
              // On the icon rail the two gutters stand in for the
              // padding, leaving room for the 44px items. (The inline
              // collapsed rail keeps it: its open groups tint the
              // full row width.)
              px: A ? 0 : ut,
              pt: _ && !l ? `${_}px` : A ? ft : 1,
              pb: A ? ft : 2
            },
            children: /* @__PURE__ */ w(
              C,
              {
                ref: W,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  re.glass,
                  Et(e),
                  o.length > 0 ? /* @__PURE__ */ w(
                    C,
                    {
                      sx: { mt: "auto", pt: A ? ft : 2 },
                      children: [
                        j ? null : /* @__PURE__ */ t(
                          Je,
                          {
                            sx: {
                              mb: A ? ft : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        Et(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        j ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: ut,
              pb: 1.5,
              ...A ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: ho
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              C,
              {
                sx: {
                  borderTop: `1px solid ${Re}`,
                  pt: A ? ft : 1.5
                },
                children: j
              }
            )
          }
        ) : null,
        A ? So() : null
      ]
    }
  ) });
}, Ko = "var(--lumora-content-padding, 0px)", pn = `calc(${Ko} * -1)`, Lc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: s = !0,
  sx: c
}) => /* @__PURE__ */ t(
  C,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: pn,
        mt: o ? pn : 0,
        // Space below it, like any other block on the page
        mb: Ko,
        px: s ? Ko : 0,
        bgcolor: n,
        ...i && {
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
), zi = ({ keys: e }) => /* @__PURE__ */ t(
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
), Ee = {
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
}, Ie = {
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
}, ht = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, pt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, mt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Yn = go(), $e = Yn.typography.pxToRem, xr = (e) => {
  const o = e === "dark", r = [...Yn.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? Ee[300] : Ee[200],
        main: Ee[400],
        dark: Ee[700],
        contrastText: Ee[50]
      },
      info: o ? {
        light: Ee[500],
        main: Ee[700],
        dark: Ee[900],
        contrastText: Ee[300]
      } : {
        light: Ee[100],
        main: Ee[300],
        dark: Ee[600],
        contrastText: Ie[50]
      },
      warning: o ? { light: pt[400], main: pt[500], dark: pt[700] } : { light: pt[300], main: pt[400], dark: pt[800] },
      error: o ? { light: mt[400], main: mt[500], dark: mt[700] } : { light: mt[300], main: mt[400], dark: mt[800] },
      success: o ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      grey: Ie,
      divider: o ? ct(Ie[700], 0.6) : ct(Ie[300], 0.4),
      background: o ? { default: Ie[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Ie[400] } : { primary: Ie[800], secondary: Ie[600] },
      action: o ? {
        hover: ct(Ie[600], 0.2),
        selected: ct(Ie[600], 0.3)
      } : {
        hover: ct(Ie[200], 0.2),
        selected: ct(Ie[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: $e(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: $e(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: $e(30), lineHeight: 1.2 },
      h4: { fontSize: $e(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: $e(20), fontWeight: 600 },
      h6: { fontSize: $e(18), fontWeight: 600 },
      subtitle1: { fontSize: $e(18) },
      subtitle2: { fontSize: $e(14), fontWeight: 500 },
      body1: { fontSize: $e(14) },
      body2: { fontSize: $e(14), fontWeight: 400 },
      caption: { fontSize: $e(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Hi = 6, mn = (e, o) => typeof e == "object" ? e[o] : e, No = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: i = "expand",
  showSidebar: s = !0,
  contentPadding: c = Gn,
  sidebarBackgroundColor: a,
  contentBackgroundColor: p
}) => {
  const l = $n(r.breakpoints.down("md")), m = e === "dark", g = Hn({
    showSidebar: s,
    isMobile: l,
    sidebarVariant: n,
    sidebarSubmenu: i
  }), h = hr(i, n) ? {
    gutterPx: Ft,
    radiusPx: Wn
  } : void 0, u = io, x = Un(
    mn(a, e),
    m
  ), I = Xn(
    mn(p, e),
    m
  ), y = zn(
    c,
    r
  ), S = /* @__PURE__ */ w(Wo, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(Ke, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(Y, { sx: { height: 8 } }),
    Array.from({ length: Hi }, (E, R) => /* @__PURE__ */ t(Ke, { variant: "rounded", width: 28, height: 28 }, R))
  ] });
  return /* @__PURE__ */ t(lo, { theme: o, children: /* @__PURE__ */ w(
    Y,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: I
      },
      children: [
        l && /* @__PURE__ */ w(
          Y,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: u,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: x,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(Ke, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(Ke, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(Y, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(Ke, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !l && g > 0 && /* @__PURE__ */ t(
          Y,
          {
            sx: {
              position: "relative",
              width: g,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              Y,
              {
                sx: h ? {
                  position: "fixed",
                  top: h.gutterPx,
                  bottom: h.gutterPx,
                  left: h.gutterPx,
                  width: g - 2 * h.gutterPx,
                  borderRadius: `${h.radiusPx}px`,
                  bgcolor: x
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: g,
                  bgcolor: x
                },
                children: S
              }
            )
          }
        ),
        /* @__PURE__ */ w(
          Y,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              p: y,
              mt: l ? `${u}px` : 0
            },
            children: [
              /* @__PURE__ */ t(Ke, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(Ke, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(Wo, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: l ? 2 : 4 }, (E, R) => /* @__PURE__ */ t(
                Ke,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                R
              )) }),
              /* @__PURE__ */ t(Ke, { variant: "rounded", height: 360 })
            ]
          }
        )
      ]
    }
  ) });
}, jo = go(xr("light")), ao = go(xr("dark")), Ui = (e) => e === "dark" ? ao : jo, Xi = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = An();
  if (!o) {
    const s = Ui(e);
    return /* @__PURE__ */ w(lo, { theme: s, children: [
      /* @__PURE__ */ t(Bo, {}),
      /* @__PURE__ */ t(
        No,
        {
          themeMode: e,
          muiTheme: s,
          hostTheme: n,
          ...r
        }
      )
    ] });
  }
  const i = `${o} &`;
  return /* @__PURE__ */ w(lo, { theme: jo, children: [
    /* @__PURE__ */ t(Bo, {}),
    /* @__PURE__ */ t(
      Os,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: ao.palette.background.default,
            color: ao.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(Y, { sx: { display: "contents", [i]: { display: "none" } }, children: /* @__PURE__ */ t(
      No,
      {
        themeMode: "light",
        muiTheme: jo,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(Y, { sx: { display: "none", [i]: { display: "contents" } }, children: /* @__PURE__ */ t(
      No,
      {
        themeMode: "dark",
        muiTheme: ao,
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
const ne = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, pe = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Ve = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Ki = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ve.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Ve.REFRESH_TOKEN
      ), r = localStorage.getItem(Ve.USER);
      e && !localStorage.getItem(pe.ACCESS_TOKEN) && localStorage.setItem(pe.ACCESS_TOKEN, e), o && !localStorage.getItem(pe.REFRESH_TOKEN) && localStorage.setItem(
        pe.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(pe.USER) && localStorage.setItem(pe.USER, r), (e || o || r) && (localStorage.removeItem(Ve.ACCESS_TOKEN), localStorage.removeItem(Ve.REFRESH_TOKEN), localStorage.removeItem(Ve.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, ko = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Z(
        "localStorage is not available",
        ne.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Z(
      "Storage quota exceeded. Please clear browser data.",
      ne.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Z(
      "Access to localStorage is denied. Please check browser settings.",
      ne.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Z(
      "Failed to access storage",
      ne.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Fo = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Z(
        "localStorage is not available",
        ne.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Z(
      "Storage quota exceeded. Please clear browser data.",
      ne.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Z(
      "Access to localStorage is denied. Please check browser settings.",
      ne.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Z(
      "Failed to write to storage",
      ne.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Zn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, zt = () => {
  try {
    Ki();
    const e = ko(pe.ACCESS_TOKEN), o = ko(pe.REFRESH_TOKEN), r = ko(pe.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), Zn(pe.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Z ? e : new Z(
      "Failed to retrieve authentication tokens",
      ne.UNKNOWN_ERROR,
      e
    );
  }
}, ji = () => {
  try {
    const { accessToken: e, refreshToken: o } = zt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Z(
        "No authentication tokens found",
        ne.TOKEN_NOT_FOUND
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
        ne.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Qn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Z(
        "At least one token must be provided",
        ne.TOKEN_INVALID
      );
    return e && Fo(pe.ACCESS_TOKEN, e), o && Fo(pe.REFRESH_TOKEN, o), r && Fo(pe.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Z ? n : new Z(
        "Failed to store tokens",
        ne.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Ht = () => {
  try {
    return [
      pe.ACCESS_TOKEN,
      pe.REFRESH_TOKEN,
      pe.USER,
      // Also clear legacy keys for complete cleanup
      Ve.ACCESS_TOKEN,
      Ve.REFRESH_TOKEN,
      Ve.USER
    ].map((n) => Zn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Z ? e : new Z(
        "Failed to clear tokens",
        ne.LOGOUT_FAILED,
        e
      )
    };
  }
}, Vi = () => {
  try {
    const { user: e } = zt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Z ? e : new Z(
        "Failed to retrieve user data",
        ne.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Nc = (e) => {
  if (!(e instanceof Z))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case ne.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case ne.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case ne.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case ne.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case ne.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case ne.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Vo = (e, o = "Unknown") => {
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
}, qi = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Kr.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, i = [];
  const s = (c, a) => {
    i.forEach(({ resolve: p, reject: l }) => {
      c ? l(c) : a && p(a);
    }), i = [];
  };
  return o.interceptors.request.use(
    (c) => {
      const { accessToken: a } = zt();
      return a && c.headers && (c.headers.Authorization = `Bearer ${a}`), c;
    },
    (c) => Promise.reject(c)
  ), o.interceptors.response.use(
    (c) => c,
    async (c) => {
      var h;
      const a = c.config, p = (h = c.response) == null ? void 0 : h.status, l = (a == null ? void 0 : a.url) || "", m = l.includes("/auth/refresh");
      if (p !== 401 || a._retry || m)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: g } = zt();
      if (!g) {
        const u = new Error(
          "No refresh token available for token refresh"
        );
        return Vo(u, "AxiosClient - Token Refresh"), Ht(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((u, x) => {
          i.push({ resolve: u, reject: x });
        }).then((u) => {
          const {
            accessToken: x,
            refreshToken: I
          } = u;
          if (a.headers && (a.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const y = JSON.parse(
                  a.data || "{}"
                );
                y.refresh_token = I, a.data = JSON.stringify(y);
              } else
                a.data && typeof a.data == "object" ? a.data.refresh_token = I : a.data = JSON.stringify({
                  refresh_token: I
                });
            } catch {
              a.data = JSON.stringify({
                refresh_token: I
              });
            }
          return o(a);
        }).catch((u) => Promise.reject(u));
      r = !0, n = Kr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: g
        }
      );
      try {
        const u = await n, { accessToken: x, refreshToken: I } = u.data;
        if (Qn(x, I, null), s(null, {
          accessToken: x,
          refreshToken: I
        }), a.headers && (a.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const y = JSON.parse(
                a.data || "{}"
              );
              y.refresh_token = I, a.data = JSON.stringify(y);
            } else
              a.data && typeof a.data == "object" ? a.data.refresh_token = I : a.data = JSON.stringify({
                refresh_token: I
              });
          } catch {
            a.data = JSON.stringify({
              refresh_token: I
            });
          }
        return o(a);
      } catch (u) {
        return Vo(
          u,
          "AxiosClient - Token Refresh Failed"
        ), s(u), Ht(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(u);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Yi = async (e, o) => {
  const { accessToken: r, refreshToken: n } = zt();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return Qn(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      Vo(i, "TokenValidator - Refresh Failed");
    }
  return Ht(), o ? o() : window.location.href = "/login", !1;
}, kt = ({ size: e = 20 }) => /* @__PURE__ */ w(
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
), gn = ve(pr), je = "#09C1AE", co = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${je} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), Zi = (e) => ({
  ...co(J, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${J - 2}px`,
    zIndex: 1,
    background: `${Wt(je, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), xn = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: s = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = mr(), p = d.useContext(yt), l = Be().palette.mode === "dark", m = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", g = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ w(
    ot,
    {
      ...g,
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
        borderColor: r ? je : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${je}`,
          outlineOffset: 2
        },
        ...n && co(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(kt, { size: 20 }),
        /* @__PURE__ */ t(
          ae,
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
        i && /* @__PURE__ */ t(zi, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && p ? /* @__PURE__ */ t(Se, { title: m, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    be,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: _e,
        height: _e,
        borderRadius: `${J}px`,
        ...Wt(je, l, "clear"),
        ...r && {
          boxShadow: `${Wt(je, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${gn.duration}ms ${gn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [Ce]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && Zi(l)
      },
      children: /* @__PURE__ */ t(kt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Se, { title: m, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    be,
    {
      ...g,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? je : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && co(8, "background.paper")
      },
      children: /* @__PURE__ */ t(kt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(Se, { title: m, placement: "left", children: /* @__PURE__ */ t(
    be,
    {
      ...g,
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
        outline: r ? `2px solid ${je}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${je}` },
        ...n && co(16, "background.paper")
      },
      children: /* @__PURE__ */ t(C, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(kt, { size: 26 }) })
    }
  ) });
}, no = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t($s, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ w(Ms, { children: [
  /* @__PURE__ */ t(Ds, { fontSize: "small" }),
  /* @__PURE__ */ t(ae, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ae,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    Mn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, $t = 24, Qi = 720, Ji = 1140, ea = 1250, ta = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: i,
  sidebarWidthPx: s,
  bottomOffsetPx: c,
  fullScreen: a,
  fullScreenBottom: p = "0px",
  onClose: l
}) => {
  d.useEffect(() => {
    if (!e || !l)
      return;
    const x = (I) => {
      I.key === "Escape" && l();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [e, l]);
  const m = r === "docked", g = $t + c;
  let h;
  a ? h = {
    top: 0,
    left: 0,
    right: 0,
    bottom: p,
    borderRadius: 0
  } : m ? h = {
    top: 0,
    right: 0,
    bottom: 0,
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : h = {
    bottom: g,
    ...n === "left" ? { left: s + $t } : { right: $t },
    width: i,
    maxWidth: `calc(100vw - ${$t * 2}px)`,
    height: `min(${Qi}px, calc(100vh - ${g + $t}px))`,
    borderRadius: "12px"
  };
  const u = /* @__PURE__ */ t(
    er,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? Ji : ea,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...h
      },
      children: o
    }
  );
  return m ? /* @__PURE__ */ t(Ns, { direction: "left", in: e, mountOnEnter: !0, children: u }) : /* @__PURE__ */ t(
    Ls,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: u
    }
  );
}, oa = 180, bn = 250, ra = "#01584F", na = ({
  text: e,
  testId: o
}) => {
  const r = d.useRef(null), [n, i] = d.useState(!1), s = d.useCallback(() => {
    const c = r.current;
    c && i(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    s();
  }, [s, e]), d.useEffect(() => {
    const c = r.current;
    if (!c)
      return;
    const a = new ResizeObserver(() => s());
    return a.observe(c), () => a.disconnect();
  }, [s]), /* @__PURE__ */ t(
    Se,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        ae,
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
}, Jn = (e, o, r, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : o, c = e ? ra : o;
  return { activeBg: c, sx: n ? {
    width: "100%",
    maxWidth: "100%",
    minWidth: i,
    height: "auto",
    minHeight: i,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: r ? "#ffffff" : s,
    backgroundColor: r ? c : "transparent",
    "&:hover": {
      backgroundColor: r ? c : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : s
    }
  } : {
    width: i,
    height: i,
    color: r ? "#ffffff" : s,
    backgroundColor: r ? c : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? c : "action.hover",
      borderRadius: "4px"
    }
  } };
}, es = ({ link: e }) => /* @__PURE__ */ w(De, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    na,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), ts = (e, o, r) => r ? e : /* @__PURE__ */ t(Se, { title: o, placement: "right", arrow: !0, children: e }), sa = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: c
}) => {
  const a = Be(), [p, l] = d.useState(null), [m, g] = d.useState(!1), h = d.useRef(
    null
  ), u = d.useRef(null), x = d.useRef(null), I = d.useRef(!1), y = d.useRef(!1), S = d.useId(), E = () => {
    h.current && (clearTimeout(h.current), h.current = null);
  }, R = () => {
    E(), h.current = setTimeout(() => {
      g(!1), h.current = null;
    }, oa);
  }, T = () => {
    E(), g(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const P = (F) => {
      var D;
      F.key === "Escape" && (g(!1), (D = x.current) == null || D.focus());
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [m]), d.useEffect(() => {
    if (!m || !y.current)
      return;
    const P = globalThis.requestAnimationFrame(() => {
      var D;
      const F = (D = u.current) == null ? void 0 : D.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), y.current = !1;
    });
    return () => cancelAnimationFrame(P);
  }, [m]);
  const v = qe(e, o), { activeBg: b, sx: _ } = Jn(
    i,
    n,
    v,
    c
  ), K = /* @__PURE__ */ t(
    be,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        I.current || T();
      },
      onBlur: (P) => {
        var D;
        const F = P.relatedTarget;
        F && ((D = u.current) != null && D.contains(F)) || R();
      },
      onKeyDown: (P) => {
        P.key === "ArrowDown" && (P.preventDefault(), y.current = !0, T());
      },
      onClick: (P) => {
        P.preventDefault(), P.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? S : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: _,
      children: c ? /* @__PURE__ */ t(es, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ w(
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
              I.current = !0, T();
            },
            onMouseLeave: () => {
              I.current = !1, R();
            },
            children: ts(K, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          Jo,
          {
            open: m && !!p,
            anchorEl: p,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (P) => P.zIndex.modal },
            children: /* @__PURE__ */ t(
              er,
              {
                ref: u,
                elevation: 0,
                onMouseEnter: E,
                onMouseLeave: R,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: s,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: bn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  tr,
                  {
                    id: S,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: bn
                    },
                    children: j(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function j(P, F, D) {
    return P.flatMap((L) => {
      const A = gt(F, L);
      return xt(L) ? [
        /* @__PURE__ */ t(
          ks,
          {
            disableSticky: !0,
            title: L.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + D * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: L.text
          },
          A
        ),
        ...j(L.subitems, A, D + 1)
      ] : [
        /* @__PURE__ */ w(
          Qe,
          {
            role: "menuitem",
            title: L.text,
            disabled: !L.path,
            selected: Fe(L, o),
            onClick: (ee) => {
              ee.preventDefault(), L.path && (r == null || r(L.path)), g(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + D * 1.5,
              maxWidth: "100%",
              overflow: "hidden",
              color: i ? "text.secondary" : n,
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
                bgcolor: b,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: b
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              L.icon ? /* @__PURE__ */ t(ye, { children: L.icon }) : null,
              /* @__PURE__ */ t(
                Pe,
                {
                  primary: L.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          A
        )
      ];
    });
  }
}, ia = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = Jn(
    i,
    n,
    c,
    s
  );
  return ts(
    /* @__PURE__ */ t(
      be,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (p) => {
          p.preventDefault(), p.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: a,
        children: s ? /* @__PURE__ */ t(es, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, aa = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), ca = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), yn = (e, o) => e.map((r, n) => /* @__PURE__ */ w(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(aa, {}) : null
] }, n)), la = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: c = !1
}) => {
  const a = (l, m) => xt(l) ? /* @__PURE__ */ t(
    sa,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      surfaceBackgroundColor: s,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    ia,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      railShowTitles: c
    }
  ), p = c ? 1.25 : 1;
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
        gap: p
      },
      children: [
        yn(e, (l) => a(l, !1)),
        o.length > 0 ? /* @__PURE__ */ w(Me, { children: [
          /* @__PURE__ */ t(ca, {}),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(De, { gap: p, alignItems: "center", children: yn(
            o,
            (l) => a(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, da = (e) => e ? Fn(e) : "USER", ua = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), Sn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, qo = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, br = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Ps,
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
    children: ua(e)
  }
), os = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ w(Me, { children: [
  /* @__PURE__ */ t(br, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ w(
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
          ae,
          {
            variant: "body2",
            sx: { ...Sn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            variant: "caption",
            sx: { ...Sn, opacity: 0.8, color: "inherit" },
            children: da(o)
          }
        )
      ]
    }
  )
] }), vn = {
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
}, rs = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: i,
  showNotifications: s,
  notificationCount: c,
  onNotificationsClick: a,
  userName: p = "User",
  userRole: l,
  userAvatar: m,
  menuItems: g = [],
  showSettings: h,
  onSettingsClick: u,
  showThemeToggler: x,
  theme: I,
  onThemeToggle: y,
  onLogout: S
}) => {
  const E = (R) => () => {
    o(), R == null || R();
  };
  return /* @__PURE__ */ w(
    Bs,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: vn[r].anchor,
      transformOrigin: vn[r].transform,
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
              os,
              {
                name: p,
                role: l,
                avatar: m,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Je, {}),
        s && /* @__PURE__ */ w(Qe, { onClick: E(a), children: [
          /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(Nn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Pe, { children: "Notifications" }),
          /* @__PURE__ */ t(qo, { count: c })
        ] }),
        g.map((R) => /* @__PURE__ */ w(Qe, { onClick: E(R.onClick), children: [
          R.icon && /* @__PURE__ */ t(ye, { children: R.icon }),
          /* @__PURE__ */ t(Pe, { inset: !R.icon, children: R.label }),
          /* @__PURE__ */ t(qo, { count: R.badge })
        ] }, R.key)),
        h && /* @__PURE__ */ w(Qe, { onClick: E(u), children: [
          /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(Fs, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Pe, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(Je, {}, "theme-divider"),
          /* @__PURE__ */ w(C, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              ae,
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
              Ws,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: I,
                onChange: (R, T) => T && T !== I && (y == null ? void 0 : y()),
                disabled: !y,
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
                  /* @__PURE__ */ t(jr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(jr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Je, {}),
        /* @__PURE__ */ w(
          Qe,
          {
            onClick: E(S),
            sx: {
              color: I === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ye, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Ln, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Pe, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, ns = 64, fa = 2, Mt = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: i,
  activeColor: s,
  activeBackground: c,
  ariaLabel: a,
  haspopup: p,
  isPage: l = !1,
  testId: m
}) => /* @__PURE__ */ w(
  ot,
  {
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": p,
    "aria-expanded": p ? n : void 0,
    "aria-current": l && n ? "page" : void 0,
    "data-testid": m,
    sx: {
      flex: "1 1 0",
      minWidth: 0,
      height: "100%",
      flexDirection: "column",
      gap: 0.25,
      color: n ? s : i,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: s,
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
        ae,
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
), ha = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: s,
  assistantActive: c,
  showProfile: a,
  background: p,
  color: l,
  activeColor: m,
  activeBackground: g,
  pinnedLinks: h = [],
  activePath: u,
  onLinkClick: x,
  ...I
}) => {
  const y = h.filter((_) => _.path).slice(0, fa), [S, E] = d.useState(
    null
  ), { userName: R = "User", userAvatar: T, avatarColor: v } = I, b = { color: l, activeColor: m, activeBackground: g };
  return /* @__PURE__ */ w(
    er,
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
        height: `calc(${ns}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: p,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Mt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Dn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...b
          }
        ),
        y.map((_) => /* @__PURE__ */ t(
          Mt,
          {
            label: _.text,
            icon: _.icon,
            onClick: () => x == null ? void 0 : x(_.path),
            active: qe(_, u),
            isPage: !0,
            testId: `mobile-nav-link-${_.text}`,
            ...b
          },
          _.path
        )),
        i && /* @__PURE__ */ t(
          Mt,
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
                children: /* @__PURE__ */ t(kt, { size: 18 })
              }
            ),
            onClick: s,
            active: c,
            testId: "mobile-nav-nexa",
            ...b
          }
        ),
        r && /* @__PURE__ */ t(
          Mt,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(or, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...b
          }
        ),
        a && /* @__PURE__ */ w(Me, { children: [
          /* @__PURE__ */ t(
            Mt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${R}`,
              icon: /* @__PURE__ */ t(
                br,
                {
                  name: R,
                  avatar: T,
                  color: v,
                  size: 26
                }
              ),
              onClick: (_) => E(_.currentTarget),
              active: !!S,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...b
            }
          ),
          /* @__PURE__ */ t(
            rs,
            {
              anchorEl: S,
              onClose: () => E(null),
              placement: "above-end",
              width: 280,
              ...I
            }
          )
        ] })
      ]
    }
  );
}, pa = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Gs,
  {
    anchor: "top",
    open: e,
    onClose: o,
    SlideProps: {
      onEntered: (n) => {
        var i;
        return (i = n.querySelector(
          'input, textarea, [contenteditable="true"]'
        )) == null ? void 0 : i.focus();
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
          /* @__PURE__ */ t(C, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Mn,
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
), ma = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: i,
  brandMenuOpen: s,
  background: c,
  color: a,
  brandColor: p = a,
  endContent: l
}) => /* @__PURE__ */ t(
  zs,
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
    children: /* @__PURE__ */ w(Hs, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        be,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(Dn, {})
        }
      ),
      /* @__PURE__ */ t(
        uo,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: i,
          menuOpen: s,
          color: p,
          testId: "mobile-brand"
        }
      ),
      l ? /* @__PURE__ */ t(C, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: l }) : null
    ] })
  }
), yr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const c = mr(), a = d.useContext(yt), p = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Se,
    {
      title: p,
      placement: i,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        be,
        {
          onClick: o,
          "aria-label": p,
          "data-testid": s,
          sx: {
            ...a ? {
              width: _e,
              height: _e
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
            kn,
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
              children: /* @__PURE__ */ t(Nn, {})
            }
          )
        }
      )
    }
  );
}, ss = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ga = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, wn = ve(jn), Rn = ve(bo), En = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', xa = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = Be().palette.mode === "dark", c = bt(), a = d.useRef(null), p = d.useRef(null), l = (h) => {
    var u;
    h !== e && (o == null || o()), (u = (h === "light" ? a : p).current) == null || u.focus();
  }, m = (h) => {
    if (!(h.key === "Tab" || h.key === "Escape"))
      switch (h.stopPropagation(), h.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          h.preventDefault(), l(e === "light" ? "dark" : "light");
          break;
        case "Home":
          h.preventDefault(), l("light");
          break;
        case "End":
          h.preventDefault(), l("dark");
          break;
      }
  }, g = (h, u, x, I) => {
    const y = e === h;
    return /* @__PURE__ */ t(
      ot,
      {
        ref: I,
        role: "radio",
        "aria-checked": y,
        "aria-label": u,
        tabIndex: y ? 0 : -1,
        onClick: () => l(h),
        "data-testid": `theme-segment-${h}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: i ? `${J}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: y ? s ? "#ffffff" : r : "text.secondary",
          bgcolor: y ? n : "transparent",
          ...i && y ? ur(s, c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...i && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": y ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: s ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${ct(r, 0.6)}`
          },
          ...ss
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 18 } })
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
      onKeyDown: m,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: i ? `${J}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        g("light", "Light", Xs, a),
        g("dark", "Dark", Us, p)
      ]
    }
  );
}, ba = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: i,
  userName: s,
  userEmail: c,
  roleLabel: a,
  accentColor: p,
  tint: l,
  showThemeToggler: m,
  theme: g,
  onThemeToggle: h,
  onProfileClick: u,
  onLinkClick: x,
  menuItems: I = [],
  onLogout: y,
  glass: S = !1
}) => {
  const E = Be(), R = E.palette.mode === "dark", T = d.useRef(null), v = ar(E.palette.background.paper), b = gr({
    enabled: S,
    isDark: R,
    selector: En,
    radius: J
  }), [_, K] = d.useState(null);
  d.useEffect(() => {
    if (!_ || typeof ResizeObserver > "u")
      return;
    const L = new ResizeObserver(() => {
      var A;
      (A = T.current) == null || A.updatePosition();
    });
    return L.observe(_), () => L.disconnect();
  }, [_]);
  const j = (L) => {
    r(), L == null || L();
  }, P = (L) => {
    r(), L.onClick ? L.onClick() : L.path && (x == null || x(L.path));
  }, F = {
    borderRadius: S ? `${J}px` : "8px",
    py: 1,
    gap: 0.5
  }, D = /* @__PURE__ */ w(De, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ w(C, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ae, { noWrap: !0, sx: { fontWeight: 600 }, children: s }),
      c ? /* @__PURE__ */ t(
        ae,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: c
        }
      ) : null,
      a ? /* @__PURE__ */ t(
        ae,
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
      u ? /* @__PURE__ */ t(
        ae,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: R ? "#ffffff" : p,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    rr,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: T,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...S ? {
        slots: { transition: Qo },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: K,
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
        C,
        {
          "data-testid": "account-menu",
          "data-glass": S ? "true" : void 0,
          sx: S ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${J}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${En}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...ga, width: n, minWidth: n },
          children: [
            S ? /* @__PURE__ */ t(
              St,
              {
                isDark: R,
                solid: v,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${lr} ${wn.duration}ms ${wn.easing} both`,
                  [Ce]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ w(
              C,
              {
                ...b.containerProps,
                sx: S ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${dr} ${Rn.duration}ms ${Rn.easing} 70ms both`,
                  [Ce]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  b.lens,
                  u ? /* @__PURE__ */ t(
                    ot,
                    {
                      onClick: () => j(u),
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
                        ...ss
                      },
                      children: D
                    }
                  ) : /* @__PURE__ */ t(C, { "data-testid": "account-menu-header", children: D }),
                  /* @__PURE__ */ t(Je, {}),
                  m ? /* @__PURE__ */ w(
                    C,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...F,
                        // Paints above the glass lens resting behind it
                        position: "relative",
                        mx: 1,
                        mt: 0.5,
                        px: 2,
                        // The 32px pill is taller than a text line; trim the
                        // vertical padding so the row is 40px like the rows
                        // with a count pill, not 48px.
                        py: 0.5,
                        display: "flex",
                        alignItems: "center",
                        // Icon column as wide as a MenuItem's.
                        "& .MuiListItemIcon-root": { minWidth: 36 }
                      },
                      children: [
                        /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(Ks, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          xa,
                          {
                            glass: S,
                            mode: g,
                            onToggle: h,
                            accentColor: p,
                            tint: l
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ w(
                    tr,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        I.map((L) => /* @__PURE__ */ w(
                          Qe,
                          {
                            onClick: () => P(L),
                            "data-testid": `menu-item-${L.key}`,
                            sx: F,
                            children: [
                              /* @__PURE__ */ t(ye, { children: L.icon }),
                              /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: L.label }),
                              /* @__PURE__ */ t(qo, { count: L.badge })
                            ]
                          },
                          L.key
                        )),
                        y ? /* @__PURE__ */ t(Je, { component: "li", sx: { my: 0.5 } }) : null,
                        y ? /* @__PURE__ */ w(
                          Qe,
                          {
                            onClick: () => j(y),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...F,
                              color: R ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(ye, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Ln, { fontSize: "small" }) }),
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
}, ya = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Sa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: i,
  title: s,
  onBrandClick: c,
  brandMenuOpen: a,
  brandColor: p,
  headerBackgroundColor: l,
  headerForegroundColor: m,
  activeAccentColor: g = "#01584f",
  groupAccentColor: h,
  activeForegroundColor: u,
  foregroundColor: x,
  surfaceBackgroundColor: I,
  flyoutSurfaceColor: y,
  collapsed: S,
  expandedWidth: E,
  collapsedWidth: R,
  topContent: T,
  submenuMode: v,
  color: b,
  hoverColor: _,
  avatarColor: K,
  showProfile: j = !0,
  userName: P = "User",
  userEmail: F,
  userRole: D,
  userAvatar: L,
  showNotifications: A = !0,
  notificationCount: ee = 0,
  onNotificationsClick: we,
  whatsNewCount: W = 0,
  onProfileClick: B,
  menuItems: H,
  onLogout: re,
  theme: ie = "light",
  showThemeToggler: $ = !0,
  onThemeToggle: z
}) => {
  const G = Be(), te = G.palette.mode === "dark", k = I ?? (te ? G.palette.background.paper : "#ffffff"), Q = b ?? x ?? (te ? G.palette.text.primary : g), ce = _ ?? h ?? Bt(g), ue = K ?? g, We = d.useRef(null), [Te, Re] = d.useState(!1), V = D ? Fn(D) : void 0, oe = (lt) => /* @__PURE__ */ t(
    br,
    {
      name: P,
      avatar: L,
      color: ue,
      size: lt
    }
  ), Oe = ee + W, fe = S && v === "flyout", Ge = A ? /* @__PURE__ */ t(
    yr,
    {
      count: Oe,
      onClick: we,
      color: Q,
      hoverColor: ce,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, ze = j ? /* @__PURE__ */ w(
    ot,
    {
      ref: We,
      onClick: () => Re(!0),
      "aria-haspopup": "menu",
      "aria-expanded": Te,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: S ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 40px button,
        // matching the rail's icon buttons
        p: fe ? "2px" : 0.75,
        borderRadius: "10px",
        bgcolor: Te ? ce : "transparent",
        "&:hover": { bgcolor: ce },
        ...ya
      },
      children: [
        S && !fe && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            kn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Oe,
              children: oe(36)
            }
          )
        ) : oe(S ? 36 : 40),
        S ? null : /* @__PURE__ */ w(C, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Q, lineHeight: 1.3 },
              children: P
            }
          ),
          V ? /* @__PURE__ */ t(
            ae,
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
              children: V
            }
          ) : null
        ] })
      ]
    }
  ) : null, He = !!Ge && (!S || fe || !ze);
  return /* @__PURE__ */ w(
    C,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": S ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          Xo,
          {
            mainLinks: e,
            secondaryLinks: o,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: i,
            title: s,
            onBrandClick: c,
            brandMenuOpen: a,
            brandColor: p,
            headerBackgroundColor: l,
            headerForegroundColor: m,
            activeAccentColor: g,
            groupAccentColor: h,
            activeForegroundColor: u,
            foregroundColor: x,
            surfaceBackgroundColor: k,
            flyoutSurfaceColor: y,
            collapsed: S,
            expandedWidth: E,
            collapsedWidth: R,
            topContent: T,
            footer: ze || He ? /* @__PURE__ */ w(
              De,
              {
                direction: fe ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  fe && He ? Ge : null,
                  ze,
                  !fe && He ? Ge : null
                ]
              }
            ) : void 0,
            submenuMode: v
          }
        ),
        j ? /* @__PURE__ */ t(
          ba,
          {
            open: Te,
            anchorEl: We.current,
            onClose: () => Re(!1),
            width: Math.max(E - 16, 240),
            renderAvatar: oe,
            userName: P,
            userEmail: F,
            roleLabel: V,
            accentColor: g,
            tint: ce,
            showThemeToggler: $,
            theme: ie,
            onThemeToggle: z,
            onProfileClick: B,
            onLinkClick: n,
            menuItems: H,
            onLogout: re,
            glass: v === "flyout"
          }
        ) : null
      ]
    }
  );
}, In = ve(jn), _n = ve(bo), Cn = 260, va = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, wa = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: c = !1
}) => {
  const a = Be(), p = a.palette.mode === "dark", l = !!e, m = ar(a.palette.background.paper), g = gr({
    enabled: c,
    isDark: p,
    selector: ".MuiMenuItem-root",
    radius: J
  }), h = /* @__PURE__ */ t(
    tr,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((u) => {
        const x = u.key === n, I = u.accentColor ?? s;
        return /* @__PURE__ */ w(
          Qe,
          {
            selected: x,
            onClick: () => i(u),
            "data-testid": `platform-item-${u.key}`,
            sx: {
              borderRadius: c ? `${J}px` : "8px",
              py: 1,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...c && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(ye, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                C,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: I,
                    boxShadow: c ? `0 0 0 3px ${p ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Pe,
                {
                  primary: u.name,
                  secondary: u.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              x ? /* @__PURE__ */ t(
                js,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: I }
                }
              ) : null
            ]
          },
          u.key
        );
      })
    }
  );
  return /* @__PURE__ */ t(
    rr,
    {
      open: l,
      anchorEl: e,
      onClose: o,
      onClick: (u) => u.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: Qo },
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
            minWidth: Cn,
            borderRadius: `${J}px`
          } : { ...va, minWidth: Cn },
          children: c ? /* @__PURE__ */ w(Me, { children: [
            /* @__PURE__ */ t(
              St,
              {
                isDark: p,
                solid: m,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${lr} ${In.duration}ms ${In.easing} both`,
                  [Ce]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ w(
              C,
              {
                ...g.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${dr} ${_n.duration}ms ${_n.easing} 70ms both`,
                  [Ce]: { animation: "none" }
                },
                children: [
                  g.lens,
                  h
                ]
              }
            )
          ] }) : h
        }
      )
    }
  );
}, Ra = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), i = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ w(
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
          wa,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, Ea = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: i = 0,
  ...s
}) => {
  var T;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: p,
    onNotificationsClick: l,
    userName: m = "User",
    userRole: g,
    userAvatar: h
  } = s, u = d.useRef(null), [x, I] = d.useState(
    null
  ), y = !!x, S = d.useRef(e);
  d.useEffect(() => {
    e && !S.current && I(null), S.current = e;
  }, [e]);
  const E = d.useContext(yt);
  if (!a && !n)
    return null;
  const R = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ w(
      De,
      {
        ref: u,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Se,
            {
              title: e ? m : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                ot,
                {
                  onClick: () => I(u.current),
                  "aria-label": `Account menu for ${m}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": y,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? E ? "2px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: y ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...R
                  },
                  children: /* @__PURE__ */ t(
                    os,
                    {
                      name: m,
                      role: g,
                      avatar: h,
                      avatarColor: c,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          a && /* @__PURE__ */ t(
            yr,
            {
              count: p + i,
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
      rs,
      {
        anchorEl: x,
        onClose: () => I(null),
        placement: e ? "beside" : "above",
        width: e || (T = u.current) == null ? void 0 : T.clientWidth,
        ...s
      }
    )
  ] });
}, Ia = 120, _a = 300, Tn = ve(Kn), On = ve(bo), Ca = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Ta = 'input, textarea, [contenteditable="true"]', Yo = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Ta)) == null || o.focus();
}, Oa = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: s,
  hoverColor: c
}) => {
  const a = mr(), p = d.useContext(yt), l = d.useRef(null), [m, g] = d.useState(null);
  return d.useEffect(() => {
    o === "full" && n && (Yo(l.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    C,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && p ? /* @__PURE__ */ t(
    Aa,
    {
      search: e,
      color: s,
      railTooltip: a
    }
  ) : /* @__PURE__ */ w(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Se, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          be,
          {
            "aria-label": "Search",
            onClick: (h) => o === "expand" ? r == null ? void 0 : r() : g(h.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: s,
              borderRadius: "8px",
              "&:hover": { bgcolor: c }
            },
            children: /* @__PURE__ */ t(or, {})
          }
        ) }),
        /* @__PURE__ */ t(
          rr,
          {
            open: !!m,
            anchorEl: m,
            onClose: () => g(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (h) => Yo(h)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, Aa = ({ search: e, color: o, railTooltip: r }) => {
  const n = Be().palette.mode === "dark";
  Js(n, zo(o, n ? 0.3 : 0.35));
  const i = `rgb(${bt()})`, s = ar(n ? "#1e2430" : "#ffffff"), c = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${J}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: i
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${J}px`,
      "&.Mui-focusVisible": { borderColor: i }
    }
  }, a = d.useRef(null), p = d.useRef(null), [l, m] = d.useState(!1), g = d.useRef(!1), h = d.useRef(void 0), u = d.useRef(void 0), x = () => {
    clearTimeout(h.current), clearTimeout(u.current);
  }, I = d.useCallback(() => {
    x(), g.current = !1, m(!1);
  }, []), y = () => {
    clearTimeout(u.current), l || (clearTimeout(h.current), h.current = setTimeout(
      () => m(!0),
      Ia
    ));
  }, S = () => {
    clearTimeout(h.current), clearTimeout(u.current), u.current = setTimeout(() => {
      !g.current && !Ca(p.current) && m(!1);
    }, _a);
  };
  return d.useEffect(() => x, []), d.useEffect(() => {
    if (!l)
      return;
    const E = setTimeout(() => Yo(p.current)), R = (v) => {
      var _, K;
      const b = v.target;
      !((_ = p.current) != null && _.contains(b)) && !((K = a.current) != null && K.contains(b)) && I();
    }, T = (v) => {
      var b;
      v.key === "Escape" && (I(), (b = a.current) == null || b.focus());
    };
    return document.addEventListener("pointerdown", R), document.addEventListener("keydown", T), () => {
      clearTimeout(E), document.removeEventListener("pointerdown", R), document.removeEventListener("keydown", T);
    };
  }, [l, I]), /* @__PURE__ */ w(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Se,
          {
            title: l ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              be,
              {
                ref: a,
                "aria-label": "Search",
                "aria-expanded": l,
                onMouseEnter: y,
                onMouseLeave: S,
                onClick: () => {
                  x(), g.current = !0, m(!0);
                },
                sx: {
                  width: _e,
                  height: _e,
                  color: o,
                  borderRadius: `${J}px`
                },
                children: /* @__PURE__ */ t(
                  or,
                  {
                    sx: { fontSize: ho }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Jo,
          {
            open: l,
            anchorEl: a.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ w(
              C,
              {
                ref: p,
                "data-testid": "sidebar-search-card",
                onMouseEnter: y,
                onMouseLeave: S,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: `${J}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    St,
                    {
                      isDark: n,
                      solid: s,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${lr} ${Tn.duration}ms ${Tn.easing} both`,
                        [Ce]: { animation: "none" }
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
                        ...c,
                        animation: `${dr} ${On.duration}ms ${On.easing} 60ms both`,
                        [Ce]: { animation: "none" }
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
}, $a = 100, Ma = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = d.useState(!1), [s, c] = d.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const l = (g) => {
      r.current.has(g) || (a(), i(!1));
    }, m = () => {
      a(), i(!1);
    };
    return document.addEventListener("mouseover", l), document.documentElement.addEventListener("mouseleave", m), () => {
      a(), document.removeEventListener("mouseover", l), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), d.useEffect(() => {
    if (!s)
      return;
    const l = (m) => {
      var g;
      (g = e.current) != null && g.contains(m.target) || c(!1);
    };
    return document.addEventListener("pointerdown", l), () => document.removeEventListener("pointerdown", l);
  }, [s]), {
    expanded: n || s,
    pin: () => c(!0),
    rootProps: {
      ref: e,
      onMouseOver: (l) => {
        r.current.add(l.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, i(!0);
        }, $a));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (l) => {
        const m = l.relatedTarget;
        m && !l.currentTarget.contains(m) && c(!1);
      },
      onKeyDown: (l) => {
        l.key === "Escape" && c(!1);
      }
    }
  };
}, Da = 300, Po = 288, La = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Na = 68, ka = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Fa = typeof window > "u" ? so : Ts, kc = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: c = "rail",
  sidebarSubmenu: a = "expand",
  mobileNavigation: p = "bottom-bar",
  mobileBottomBarLinks: l,
  logo: m,
  onBrandClick: g,
  searchComponent: h,
  brandColor: u,
  contentPadding: x = Gn,
  userMenuItems: I,
  sidebarBackgroundColor: y,
  sidebarHeaderBackgroundColor: S,
  groupAccentColor: E,
  activeSidebarForegroundColor: R,
  enableRefreshToken: T = !1,
  holdSessionSkeleton: v = !1,
  activePath: b,
  onLinkClick: _,
  showProfile: K = !0,
  userName: j,
  userRole: P,
  userAvatar: F,
  userEmail: D,
  onLogout: L,
  showSettings: A = !0,
  onSettingsClick: ee,
  onProfileClick: we,
  showNotifications: W = !0,
  notificationCount: B = 0,
  NotificationSidebarContent: H,
  whatsNewCount: re = 0,
  onNotificationsClick: ie,
  platforms: $,
  currentPlatformKey: z,
  onPlatformSelect: G,
  onVerify: te,
  alertProps: k,
  style: Q,
  sidebarStyles: ce,
  contentStyles: ue,
  accentColor: We,
  sidebarAccentColor: Te,
  sidebarForegroundColor: Re,
  contentBackgroundColor: V,
  theme: oe = "light",
  darkModeSelector: Oe,
  showThemeToggler: fe = !1,
  onThemeToggle: Ge,
  GlobalChatSidebar: ze,
  useChatSidebar: He,
  chatPanelMode: vt = "docked",
  chatPanelPosition: lt = "right",
  chatPanelWidth: Xt = 420,
  onChatClose: Kt,
  showAssistant: rt = !1,
  assistantPlacement: wt = "sidebar",
  assistantShortcut: jt = "j",
  onAssistantClick: nt,
  assistantActive: Rt = !1,
  assistantBusy: Et = !1,
  customNavbar: It,
  customNavbarProps: So,
  redirectToLogin: dt,
  apiBaseUrl: Vt
}) => {
  const ut = An(), he = $n(ut.breakpoints.down("md")), f = Hr(
    () => go(xr(oe)),
    [oe]
  ), N = oe === "dark", X = We ?? "#01584f", M = Te ?? X, U = Xn(
    typeof V == "object" ? V[oe] : V,
    N
  ), q = c === "collapsible", me = c === "panel", le = me && i && !he, de = c === "rail-labeled", vo = q || de, Le = Un(
    y,
    N
  ), wo = S ?? Le, Ne = Re ?? (N ? "#ffffff" : M), _t = E ?? Bt(Ne), Ct = S ? Go(wo) : Ne, Sr = (O) => /* @__PURE__ */ t(
    Y,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: O,
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
  ), qt = u ?? Ct, [vr, Ro] = it(
    null
  ), Eo = (($ == null ? void 0 : $.length) ?? 0) > 1, is = Ur(() => Ro(null), []), as = (O) => {
    Ro(null), G ? G(O) : O.key !== z && O.url && window.location.assign(O.url);
  }, wr = (O) => Eo ? /* @__PURE__ */ t(
    Ra,
    {
      anchorEl: vr,
      onClose: is,
      platforms: $,
      currentKey: z,
      onSelect: as,
      accentColor: X,
      glass: a === "flyout" && (q || me) && !he,
      children: O
    }
  ) : O, Yt = Eo ? (O) => Ro(O.currentTarget) : g, Zt = Eo ? !!vr : void 0, Io = wr(
    m ?? Sr(qt)
  ), cs = wr(
    m ?? Sr(u ?? Ne)
  ), _o = Ma(), Ae = hr(a, c), ke = Ae || !_o.expanded, Rr = Ae ? "popover" : "expand", Er = Ae ? fo : Dt, Ir = Ae ? "transparent" : Le, _r = Ae && !S ? "transparent" : wo, [ls, Cr] = it(!1), ds = Ur(() => Cr(!1), []), Ue = Hn({
    showSidebar: i,
    isMobile: he,
    sidebarVariant: c,
    sidebarSubmenu: a
  }), [Tr, st] = it(!1), [Or, Co] = it(!1), xe = he && p === "bottom-bar", Ar = `calc(${ns}px + env(safe-area-inset-bottom, 0px))`, [To, $r] = it({ open: !1, tab: "notifications" }), Mr = () => $r((O) => ({ ...O, open: !1 })), us = W && !!H, [fs, hs] = it(!0), [ps, ms] = it(!1), Oo = He == null ? void 0 : He(), Dr = (Oo == null ? void 0 : Oo.isOpen) ?? !1, Lr = vt === "floating" ? "floating" : "docked", gs = Lr === "docked" && Dr && ze && !he ? Xt : 0, Qt = Lo(te), Nr = Lo(!1), kr = Hr(
    () => qi(Vt),
    [Vt]
  );
  so(() => {
    Qt.current = te;
  }, [te]);
  const Ao = Lo(nt);
  Ao.current = nt;
  const Tt = rt && jt ? jt.toLowerCase() : null;
  so(() => {
    if (!Tt)
      return;
    const O = (se) => {
      (se.metaKey || se.ctrlKey) && !se.altKey && !se.shiftKey && se.key.toLowerCase() === Tt && Ao.current && (se.preventDefault(), Ao.current());
    };
    return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
  }, [Tt]);
  const Fr = (O) => {
    const se = L(O);
    se instanceof Promise && se.catch((Xe) => {
      console.error("Error in logout handler:", Xe);
    });
  };
  if (Fa(() => {
    (() => {
      var se;
      try {
        const { isAuthenticated: Xe } = ji();
        if (!Xe) {
          console.log("No session found, redirecting to login"), Ht(), dt();
          return;
        }
        if (!Nr.current) {
          const { user: At, error: Do } = Vi();
          if (At && !Do) {
            const Es = {
              name: At.name || "",
              email: At.email || "",
              profilePicture: At.profilePicture || "",
              role: At.role || ""
            };
            Nr.current = !0, (se = Qt.current) == null || se.call(Qt, Es);
          } else
            Do && console.error("Error getting user data:", Do);
        }
        ms(!0);
      } catch (Xe) {
        console.error("Error checking session:", Xe), Ht(), dt();
      } finally {
        hs(!1);
      }
    })();
  }, [dt]), so(() => {
    T && Yi(kr, dt);
  }, [T, kr]), fs || v)
    return /* @__PURE__ */ t(
      Xi,
      {
        theme: oe,
        darkModeSelector: Oe,
        sidebarVariant: c,
        sidebarSubmenu: a,
        showSidebar: i,
        contentPadding: x,
        sidebarBackgroundColor: y,
        contentBackgroundColor: V
      }
    );
  if (!ps)
    return null;
  const Ot = h ?? (It ? /* @__PURE__ */ t(It, { ...So }) : null), xs = (O) => {
    st(!1), Co(!1), $r({ open: !0, tab: O });
  }, $o = H && (() => xs("notifications")), bs = B + re, Pr = {
    avatarColor: M,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: I == null ? void 0 : I.map(
      (O) => O.onClick || !O.path ? O : { ...O, onClick: () => _ == null ? void 0 : _(O.path) }
    ),
    showNotifications: W,
    notificationCount: B,
    whatsNewCount: re,
    onNotificationsClick: $o,
    showProfile: K,
    userName: j,
    userRole: P,
    userAvatar: F,
    showSettings: A,
    onSettingsClick: ee,
    showThemeToggler: fe,
    theme: oe,
    onThemeToggle: Ge,
    onLogout: Fr
  }, Mo = (O) => /* @__PURE__ */ t(
    Ea,
    {
      ...Pr,
      compact: O,
      color: Ne,
      hoverColor: _t
    }
  ), Br = Tt ? [ka() ? "⌘" : "Ctrl", Tt.toUpperCase()] : void 0, ys = (O) => rt && wt === "sidebar" ? /* @__PURE__ */ t(
    xn,
    {
      variant: O ? "sidebar-icon" : "sidebar",
      onClick: nt,
      active: Rt,
      busy: Et,
      shortcutKeys: Br,
      accentColor: Ne
    }
  ) : null, Ss = (O) => Ot ? /* @__PURE__ */ t(
    Oa,
    {
      search: Ot,
      mode: O,
      onExpand: () => {
        _o.pin(), Cr(!0);
      },
      autoFocus: ls,
      onAutoFocused: ds,
      color: Ne,
      hoverColor: _t
    }
  ) : null, Jt = (O) => {
    const se = ys(O !== "full"), Xe = Ss(O);
    return se || Xe ? /* @__PURE__ */ w(
      Wo,
      {
        spacing: Ae ? `${fr}px` : 1.5,
        sx: { alignItems: O === "full" ? "stretch" : "center" },
        children: [
          se,
          Ae && se && Xe ? /* @__PURE__ */ t(
            Y,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Bt(Ne)}`
              }
            }
          ) : null,
          Xe
        ]
      }
    ) : void 0;
  }, Wr = () => /* @__PURE__ */ t(
    Xo,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: b,
      onLinkClick: _,
      showHeaderBar: q,
      logo: Io,
      title: n,
      onBrandClick: Yt,
      brandMenuOpen: Zt,
      brandColor: qt,
      headerBackgroundColor: q ? _r : void 0,
      headerForegroundColor: q ? Ct : void 0,
      activeAccentColor: M,
      groupAccentColor: E,
      activeForegroundColor: R,
      foregroundColor: Re,
      surfaceBackgroundColor: Ir,
      flyoutSurfaceColor: Le,
      collapsed: de || ke,
      showLabels: de,
      expandedWidth: Po,
      collapsedWidth: de ? Bn : Er,
      topContent: Jt(
        de ? "popover" : ke ? Rr : "full"
      ),
      footer: Mo(de || ke),
      submenuMode: Ae ? "flyout" : "inline"
    }
  ), Gr = (O) => Ae ? vs(O) : ws(O), vs = (O) => /* @__PURE__ */ t(
    Y,
    {
      component: "aside",
      sx: {
        width: Ue,
        minWidth: Ue,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (se) => se.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: U
      },
      children: /* @__PURE__ */ w(
        Y,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: Ft,
            bottom: Ft,
            left: Ft,
            width: fo,
            borderRadius: `${Wn}px`,
            display: "flex",
            flexDirection: "column",
            ...ce
          },
          children: [
            /* @__PURE__ */ t(
              St,
              {
                isDark: N,
                solid: Le,
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
                children: O
              }
            )
          ]
        }
      )
    }
  ), ws = (O) => /* @__PURE__ */ t(
    Y,
    {
      component: "aside",
      sx: {
        width: Dt,
        minWidth: Dt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (se) => se.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        Y,
        {
          ...Ae ? {} : _o.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": ke ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: ke ? Dt : Po,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Le,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: ke ? "none" : `4px 0 24px rgba(0, 0, 0, ${N ? 0.5 : 0.12})`,
            transition: La,
            ...ce
          },
          children: O
        }
      )
    }
  ), Rs = zn(
    x,
    ut
  );
  return /* @__PURE__ */ t(lo, { theme: f, children: /* @__PURE__ */ t(Pn.Provider, { value: M, children: /* @__PURE__ */ t(Ut.Provider, { value: Le, children: /* @__PURE__ */ w(
    Y,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Q
      },
      children: [
        /* @__PURE__ */ t(Bo, {}),
        he && /* @__PURE__ */ t(
          ma,
          {
            height: io,
            onMenuClick: i && !xe ? () => st(!0) : void 0,
            appName: n,
            logo: Io,
            onBrandClick: Yt,
            brandMenuOpen: Zt,
            background: wo,
            color: Ct,
            brandColor: qt,
            endContent: W ? /* @__PURE__ */ t(
              yr,
              {
                count: bs,
                onClick: $o,
                color: Ct,
                hoverColor: _t,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !he && de && /* @__PURE__ */ t(
          Y,
          {
            component: "aside",
            sx: {
              width: Ue,
              minWidth: Ue,
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
              ...ce
            },
            children: Wr()
          }
        ),
        i && !he && q && Gr(
          /* @__PURE__ */ w(Me, { children: [
            Wr(),
            (k == null ? void 0 : k.show) && !ke && /* @__PURE__ */ t(no, { ...k })
          ] })
        ),
        le && Gr(
          /* @__PURE__ */ w(Me, { children: [
            /* @__PURE__ */ t(
              Sa,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: b,
                onLinkClick: _,
                logo: Io,
                title: n,
                onBrandClick: Yt,
                brandMenuOpen: Zt,
                brandColor: qt,
                headerBackgroundColor: _r,
                headerForegroundColor: Ct,
                activeAccentColor: M,
                groupAccentColor: E,
                activeForegroundColor: R,
                foregroundColor: Re,
                surfaceBackgroundColor: Ir,
                flyoutSurfaceColor: Le,
                collapsed: ke,
                expandedWidth: Po,
                collapsedWidth: Er,
                topContent: Jt(
                  ke ? Rr : "full"
                ),
                submenuMode: Ae ? "flyout" : "inline",
                color: Ne,
                hoverColor: _t,
                avatarColor: M,
                showProfile: K,
                userName: j,
                userEmail: D,
                userRole: P,
                userAvatar: F,
                showNotifications: W,
                notificationCount: B,
                onNotificationsClick: us ? $o : ie,
                whatsNewCount: re,
                onProfileClick: we,
                menuItems: I,
                onLogout: Fr,
                theme: oe,
                showThemeToggler: fe,
                onThemeToggle: Ge
              }
            ),
            (k == null ? void 0 : k.show) && !ke && /* @__PURE__ */ t(no, { ...k })
          ] })
        ),
        i && !he && !vo && !me && /* @__PURE__ */ t(
          Xr,
          {
            variant: "permanent",
            sx: {
              width: Ue,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Ue,
                boxSizing: "border-box",
                bgcolor: U,
                borderRight: "none"
              },
              ...ce
            },
            children: /* @__PURE__ */ w(
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
                        uo,
                        {
                          logo: cs,
                          appName: n,
                          onClick: Yt,
                          menuOpen: Zt,
                          color: u ?? Ne,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Jt("popover"),
                  /* @__PURE__ */ w(
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
                          la,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: b,
                            onLinkClick: _,
                            accentColor: M,
                            surfaceBackgroundColor: U,
                            railShowTitles: s
                          }
                        ),
                        (k == null ? void 0 : k.show) && /* @__PURE__ */ t(no, { ...k })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(Y, { sx: { py: 1.5 }, children: Mo(!0) })
                ]
              }
            )
          }
        ),
        i && he && /* @__PURE__ */ w(
          As,
          {
            anchor: xe ? "bottom" : "left",
            open: Tr,
            onOpen: () => st(!0),
            onClose: () => st(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (O) => O.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Le,
                  backgroundImage: "none",
                  ...xe ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              xe && // Grab handle: the sheet can be swiped down to close
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
                Xo,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: b,
                  onLinkClick: (O) => {
                    _ == null || _(O), st(!1);
                  },
                  onLinkAction: () => st(!1),
                  collapsed: !1,
                  expandedWidth: xe ? "100%" : Da,
                  activeAccentColor: M,
                  groupAccentColor: E,
                  activeForegroundColor: R,
                  foregroundColor: Re,
                  surfaceBackgroundColor: Le,
                  topInsetPx: xe ? 8 : 0,
                  topContent: xe ? void 0 : Jt("full"),
                  footer: xe ? void 0 : Mo(!1)
                }
              ),
              (k == null ? void 0 : k.show) && /* @__PURE__ */ t(no, { ...k })
            ]
          }
        ),
        xe && Ot && /* @__PURE__ */ t(
          pa,
          {
            open: Or,
            onClose: () => Co(!1),
            search: Ot
          }
        ),
        xe && /* @__PURE__ */ t(
          ha,
          {
            ...Pr,
            pinnedLinks: l,
            activePath: b,
            onLinkClick: _,
            onMenuClick: i ? () => st(!0) : void 0,
            menuOpen: Tr,
            onSearchClick: Ot ? () => Co(!0) : void 0,
            searchOpen: Or,
            showAssistant: rt,
            onAssistantClick: nt,
            assistantActive: Rt,
            showProfile: K,
            background: Le,
            color: Ne,
            activeColor: M,
            activeBackground: _t
          }
        ),
        /* @__PURE__ */ t(
          Y,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Rs,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": he ? `${io}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ue ? `calc(100% - ${Ue}px)` : "100%",
              mt: he ? `${io}px` : 0,
              // Keep the last content clear of the bottom bar
              ...xe && {
                pb: `calc(var(--lumora-content-padding) + ${Ar})`
              },
              backgroundColor: U,
              ...ue
            },
            children: e
          }
        ),
        ze && /* @__PURE__ */ t(
          ta,
          {
            open: Dr,
            variant: Lr,
            position: lt,
            width: Xt,
            sidebarWidthPx: Ue,
            bottomOffsetPx: rt && wt === "floating" ? Na : 0,
            fullScreen: he,
            fullScreenBottom: xe ? Ar : "0px",
            onClose: Kt,
            children: /* @__PURE__ */ t(ze, {})
          }
        ),
        rt && wt === "floating" && !xe && /* @__PURE__ */ t(
          xn,
          {
            variant: "floating",
            rightOffsetPx: gs,
            shortcutKeys: Br,
            onClick: nt,
            active: Rt,
            busy: Et
          }
        ),
        W && H && /* @__PURE__ */ t(
          Xr,
          {
            anchor: "right",
            open: To.open,
            onClose: Mr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              H,
              {
                onClose: Mr,
                initialTab: To.tab
              },
              To.tab
            )
          }
        )
      ]
    }
  ) }) }) });
};
export {
  ne as AUTH_ERROR_CODES,
  Z as AuthError,
  Xo as CollapsibleSidebar,
  Lc as FullBleedSection,
  zi as Kbd,
  Xi as LumoraShellSkeleton,
  kc as LumoraWrapper,
  Ht as clearAuthTokens,
  kc as default,
  Nc as getAuthErrorMessage,
  zt as getAuthTokens,
  Vi as getCurrentUser,
  xr as getDesignTokens,
  ji as isAuthenticated,
  Vo as logAuthError,
  Qn as storeAuthTokens
};
