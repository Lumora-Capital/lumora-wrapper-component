import { jsx as t, jsxs as w, Fragment as Ie } from "react/jsx-runtime";
import Os from "@mui/icons-material/KeyboardArrowDownRounded";
import $s from "@mui/icons-material/KeyboardArrowUpRounded";
import Ms from "@mui/icons-material/ChevronRightRounded";
import _ from "@mui/material/Box";
import jr from "@mui/material/Collapse";
import et from "@mui/material/Divider";
import be from "@mui/material/IconButton";
import so from "@mui/material/ListItemButton";
import ye from "@mui/material/ListItemIcon";
import Be from "@mui/material/ListItemText";
import Le from "@mui/material/Stack";
import ve from "@mui/material/Tooltip";
import ue from "@mui/material/Typography";
import { useTheme as ze, createTheme as vo, alpha as dt, ThemeProvider as go } from "@mui/material/styles";
import * as l from "react";
import { useMemo as Vr, useState as ct, useCallback as Yr, useRef as zo, useEffect as uo, useLayoutEffect as Ls } from "react";
import rt from "@mui/material/ButtonBase";
import { keyframes as nr } from "@emotion/react";
import sr from "@mui/material/Fade";
import ir from "@mui/material/Popper";
import { useTheme as Dn, CssBaseline as Ko, GlobalStyles as Ds, Box as Y, useMediaQuery as Nn, Stack as Pt, Skeleton as $e, Drawer as qr, SwipeableDrawer as Ns } from "@mui/material";
import Zr from "axios";
import ks from "@mui/material/Card";
import Fs from "@mui/material/CardContent";
import kn from "@mui/material/Button";
import Ps from "@mui/icons-material/AutoAwesomeRounded";
import Ws from "@mui/material/Grow";
import ar from "@mui/material/Paper";
import Bs from "@mui/material/Slide";
import zs from "@mui/material/ListSubheader";
import Je from "@mui/material/MenuItem";
import cr from "@mui/material/MenuList";
import Fn from "@mui/icons-material/MenuRounded";
import lr from "@mui/icons-material/SearchRounded";
import Pn from "@mui/icons-material/LogoutRounded";
import Wn from "@mui/icons-material/NotificationsNoneOutlined";
import Gs from "@mui/icons-material/SettingsOutlined";
import Hs from "@mui/material/Avatar";
import Us from "@mui/material/Menu";
import Qr from "@mui/material/ToggleButton";
import Xs from "@mui/material/ToggleButtonGroup";
import Ks from "@mui/material/Drawer";
import js from "@mui/material/AppBar";
import Vs from "@mui/material/Toolbar";
import Bn from "@mui/material/Badge";
import Ys from "@mui/icons-material/DarkModeOutlined";
import qs from "@mui/icons-material/LightModeOutlined";
import Zs from "@mui/icons-material/SettingsBrightnessOutlined";
import dr from "@mui/material/Popover";
import Qs from "@mui/icons-material/CheckRounded";
const xo = ({
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
  }, f = /* @__PURE__ */ w(Ie, { children: [
    o ? /* @__PURE__ */ t(
      ue,
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
    rt,
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
      children: f
    }
  ) : /* @__PURE__ */ t(Le, { direction: "row", "data-testid": i, sx: a, children: f });
}, jo = !1, St = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, vt = (e, o) => e ? `${e}/${o.text}` : o.text, qe = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => qe(n, o))) ?? !1 : !1;
}, We = (e, o) => !!(o && e.path === o), ur = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return St(r) ? ur(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Vo = (e) => {
  const o = So(e);
  if (!o)
    return "#ffffff";
  const [r, n, s] = o.map((c) => {
    const a = c / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Xt = (e) => {
  const o = So(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = o;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, Yo = (e, o) => {
  const r = So(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, So = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, zn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), fr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Js = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", ei = nr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, _e = "@media (prefers-reduced-motion: reduce)", Q = 6, hr = "9, 193, 174", Gn = l.createContext(
  void 0
), qt = l.createContext(
  void 0
), pr = (e) => l.useContext(qt) ?? e, Et = () => {
  const e = l.useContext(Gn), o = e ? So(e) : null;
  return o ? o.join(", ") : hr;
}, Jr = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, ti = (e, o) => e ? "255, 255, 255" : o, oi = (e, o, r = hr) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${Js(e)}, 0 0 0 1px ${fr(e)}`
}), ri = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", mr = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: fr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${Q}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), gr = nr`
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
`, xr = nr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, br = (e, o = hr, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Kt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: Yo(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${Yo(e, 0.45)}`
}, ni = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${fr(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${Q}px`,
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
}, si = 100, Hn = 80, fo = 56, Wt = 72, Ht = 52, pe = 40, wt = 20, wo = 4, ut = 8, Un = Q, Xn = { xs: 2, md: "18px" }, Kn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, Eo = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), ii = (e, o, r) => e && Eo(o, r), jn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || o ? 0 : r === "rail-labeled" ? Hn : Eo(n, r) ? s ? 0 : Ht + 2 * ut : r === "collapsible" || r === "panel" ? Wt : si, Vn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Yn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), qn = { stiffness: 320, damping: 24 }, Zn = { stiffness: 320, damping: 28 }, yr = { stiffness: 520, damping: 20 }, Qn = { stiffness: 380, damping: 36 }, Ro = { stiffness: 260, damping: 28 }, ai = "cubic-bezier(0.32, 1.28, 0.52, 1)", ci = 420, en = 60, li = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), tn = /* @__PURE__ */ new Map(), Se = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, s = tn.get(n);
  if (s)
    return s;
  if (!li)
    return { easing: ai, duration: ci };
  const i = 1 / 600;
  let c = 0, a = 0, f = 0, d = 1 / en;
  const p = [0];
  for (; f < 3; ) {
    const m = (-e * (c - 1) - o * a) / r;
    if (a += m * i, c += a * i, f += i, f >= d && (p.push(c), d += 1 / en, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  p[p.length - 1] = 1;
  const g = {
    easing: `linear(${p.map((m) => Number(m.toFixed(4))).join(", ")})`,
    duration: Math.round(f * 1e3)
  };
  return tn.set(n, g), g;
}, tt = (e) => !!(e && typeof e.animate == "function"), ot = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Bt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, di = (e, o = 1.14) => {
  if (!tt(e) || ot())
    return;
  const r = Se(yr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, jt = "data-rail-item", ui = `[${jt}], button, [role="button"]`, Rt = l.createContext(!1), vr = () => {
  const e = l.useContext(Rt), o = ze(), r = l.useContext(qt);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: mr(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ze = Se(Qn), Sr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: c = null
}) => {
  const a = l.useRef(null), f = Et(), [d, p] = l.useState(null), g = l.useRef(null), m = l.useRef(null), h = (y, v) => {
    m.current = v;
    const T = v.getBoundingClientRect(), j = y.getBoundingClientRect(), z = n ?? T.width, D = n ?? T.height, N = {
      top: Math.round(T.top - j.top + (T.height - D) / 2),
      left: Math.round(T.left - j.left + (T.width - z) / 2),
      width: Math.round(z),
      height: Math.round(D)
    };
    p(
      (M) => M && M.visible && M.top === N.top && M.left === N.left && M.width === N.width && M.height === N.height ? M : { ...N, visible: !0, instant: !(M != null && M.visible) }
    );
  }, x = (y, v) => {
    var j;
    const T = (j = v == null ? void 0 : v.closest) == null ? void 0 : j.call(v, r);
    return T && y.contains(T) ? T : null;
  }, I = (y) => {
    if (!e)
      return;
    const v = x(y.currentTarget, y.target);
    v && h(y.currentTarget, v);
  }, b = (y) => {
    if (!e)
      return;
    const v = x(y.currentTarget, y.target);
    v && y.target.matches(":focus-visible") && h(y.currentTarget, v);
  }, S = () => {
    var T;
    const y = (T = a.current) == null ? void 0 : T.parentElement, v = i && (y == null ? void 0 : y.querySelector(i));
    return y && v ? { container: y, item: v } : null;
  }, R = () => {
    const y = S();
    if (y) {
      h(y.container, y.item);
      return;
    }
    m.current = null, p((v) => v != null && v.visible ? { ...v, visible: !1 } : v);
  };
  l.useEffect(() => {
    var v, T;
    if (!e)
      return;
    const y = S();
    y ? h(y.container, y.item) : (T = (v = a.current) == null ? void 0 : v.parentElement) != null && T.matches(":hover") || R();
  }, [e, c]);
  const E = (y) => {
    const v = y.relatedTarget;
    (!v || !y.currentTarget.contains(v)) && (y.currentTarget.matches(":hover") || R());
  };
  return l.useEffect(() => {
    const y = a.current;
    if (!(d != null && d.visible)) {
      g.current = null;
      return;
    }
    const v = g.current;
    if (g.current = d.top, !tt(y) || ot())
      return;
    if (v === null || d.instant) {
      y.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ze.duration,
        easing: Ze.easing
      });
      return;
    }
    const T = Math.min(Math.abs(d.top - v) / 600, 0.08);
    T && y.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - T / 2} ${1 + T}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ze.duration, easing: "ease-out" }
    );
  }, [d == null ? void 0 : d.top, d == null ? void 0 : d.visible, d == null ? void 0 : d.instant]), {
    lens: e && d ? /* @__PURE__ */ t(
      _,
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": d.visible ? "true" : "false",
        sx: {
          ...br(o, f),
          borderRadius: `${s}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: d.width,
          height: d.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset.
          translate: `${d.left}px ${d.top}px`,
          // Shrinks away as it fades; wells back up on return
          scale: d.visible ? "1" : "0.7",
          opacity: d.visible ? 1 : 0,
          pointerEvents: "none",
          transition: d.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ze.duration}ms ${Ze.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
          [_e]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: I,
      onMouseLeave: R,
      onFocus: b,
      onBlur: E,
      onScrollCapture: R
    } : {}
  };
}, fi = (e, o, r = null) => {
  const n = Sr({
    enabled: e,
    isDark: o,
    selector: ui,
    // The rail's buttons exactly, so the hover sits on the item
    size: pe,
    radius: Q,
    pinSelector: `[${jt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? l.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, hi = (e, o) => {
  let r = 0, n = 0, s = e;
  for (; s && s !== o; ) {
    r += s.offsetTop, n += s.offsetLeft;
    const a = s.offsetParent;
    for (let f = s.parentElement; f && f !== o && (r -= f.scrollTop, n -= f.scrollLeft, f !== a); f = f.parentElement)
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
}, pi = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const s = l.useRef(null), [i, c] = l.useState(null), a = l.useRef(null), f = l.useCallback(
    (p) => {
      const g = n.current;
      if (!e || !g)
        return;
      const m = g.querySelector(
        `[${jt}][data-active="true"]`
      );
      if (!m) {
        c(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const h = hi(m, g);
      c(
        (x) => x && x.visible && x.top === h.top && x.left === h.left && x.width === h.width && x.height === h.height ? x : {
          ...h,
          visible: !0,
          instant: p || !(x != null && x.visible)
        }
      );
    },
    [e, n]
  );
  return l.useLayoutEffect(() => {
    f(!1);
  }), l.useEffect(() => {
    const p = n.current;
    if (!e || !p)
      return;
    let g = 0;
    const m = () => {
      cancelAnimationFrame(g), g = requestAnimationFrame(() => f(!1));
    }, h = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => f(!0));
    h == null || h.observe(p);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(m);
    return x == null || x.observe(p, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(g), h == null || h.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, f]), l.useEffect(() => {
    const p = s.current;
    if (!(i != null && i.visible)) {
      a.current = null;
      return;
    }
    const g = a.current;
    if (a.current = i.top, g === null || i.instant || !tt(p) || ot())
      return;
    const m = Math.min(Math.abs(i.top - g) / 600, 0.08);
    m && p.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - m / 2} ${1 + m}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ze.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ t(
    _,
    {
      ref: s,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": i.visible ? "true" : "false",
      sx: {
        ...Kt(r, o),
        borderRadius: `${Q}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: i.width,
        height: i.height,
        translate: `${i.left}px ${i.top}px`,
        scale: i.visible ? "1" : "0.7",
        opacity: i.visible ? 1 : 0,
        pointerEvents: "none",
        transition: i.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ze.duration}ms ${Ze.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [_e]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, on = 14, mi = 18, gi = "blur(12px) saturate(180%) brightness(1.04)", xi = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), bi = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, yi = 140, rn = 0.22, vi = 0.14, Si = (e, o, r) => {
  const n = l.useRef(r);
  n.current = r, l.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var h;
      const m = e.current;
      m && (m.style.setProperty("--lx", `${i.x.toFixed(1)}px`), m.style.setProperty("--ly", `${i.y.toFixed(1)}px`), m.style.setProperty("--li", i.i.toFixed(3)), (h = n.current) == null || h.call(n, i.x, i.y, i.i));
    }, f = () => {
      i.x += (s.x - i.x) * rn, i.y += (s.y - i.y) * rn, i.i += (s.i - i.i) * vi;
      const m = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      m && (i.x = s.x, i.y = s.y, i.i = s.i), a(), c = m ? 0 : requestAnimationFrame(f);
    }, d = () => {
      c || (c = requestAnimationFrame(f));
    }, p = (m) => {
      const h = e.current;
      if (m.pointerType === "touch" || !h)
        return;
      const x = h.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      s.x = (m.clientX - x.left) * h.offsetWidth / x.width, s.y = (m.clientY - x.top) * h.offsetHeight / x.height;
      const I = Math.max(
        x.left - m.clientX,
        0,
        m.clientX - x.right
      ), b = Math.max(
        x.top - m.clientY,
        0,
        m.clientY - x.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(I, b) / yi), i.i < 0.01 && (i.x = s.x, i.y = s.y), d();
    }, g = () => {
      s.i = 0, d();
    };
    return document.addEventListener("pointermove", p, { passive: !0 }), document.documentElement.addEventListener("mouseleave", g), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", p), document.documentElement.removeEventListener("mouseleave", g);
    };
  }, [e, o]);
}, It = l.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: c
  }, a) => {
    const f = l.useRef(null), d = s && jo;
    Si(f, i && jo, c);
    const p = Et(), g = `lumora-glass-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [m, h] = l.useState(null), x = l.useRef(null), I = l.useCallback(
      (R) => {
        var C;
        if (f.current = R, typeof a == "function" ? a(R) : a && (a.current = R), (C = x.current) == null || C.disconnect(), x.current = null, !R || !d || !xi || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const y = R.offsetWidth, v = R.offsetHeight;
          h(
            (T) => (T == null ? void 0 : T.width) === y && T.height === v ? T : y && v ? { width: y, height: v } : null
          );
        };
        x.current = new ResizeObserver(E), x.current.observe(R), E();
      },
      [a, d]
    ), b = l.useMemo(
      () => m ? bi(m.width, m.height, on) : null,
      [m]
    ), S = d && !!(b && m);
    return /* @__PURE__ */ w(Ie, { children: [
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
              width: m.width,
              height: m.height,
              filterUnits: "userSpaceOnUse",
              primitiveUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ t(
                  "feImage",
                  {
                    href: b,
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
                    stdDeviation: on / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: mi,
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
        _,
        {
          ref: I,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": S ? "true" : void 0,
          sx: [
            oi(e, o, p),
            S ? {
              backdropFilter: `url(#${g}) ${gi}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
It.displayName = "GlassLayer";
const Qe = pe, nn = wo, wi = Q, sn = 1.12, Io = 6, an = Io - 2, zt = Q, qo = 24, bo = 10, cn = 0.12, ln = 0.75, Ei = bo + Ht / 2 - 2, Ri = 90, Ii = 22, _i = 1190, Ci = 1195, yo = Se(qn), ge = Se(Qn), dn = Se(Ro), Ti = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), c = e + r, a = o + n, f = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + i} ${o} H ${c - i} ${f} ${c} ${o + i} V ${a - i} ${f} ${c - i} ${a} H ${e + i} ${f} ${e} ${a - i} V ${o + i} ${f} ${e + i} ${o} Z')`;
}, Ai = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: s,
  activePath: i,
  focusFirst: c = !1,
  onNavigate: a,
  onClose: f,
  panelProps: d,
  accentColor: p,
  activeForegroundColor: g,
  solidSurface: m
}) => {
  const h = ze(), x = h.palette.mode === "dark", I = !!(e && r), b = l.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const S = b.current, R = l.useMemo(() => r ? {
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
  } : null, [r, n]), E = l.useRef(R);
  R && (E.current = R), l.useEffect(() => {
    r && di(r);
  }, [r]);
  const [C, y] = l.useState(!1);
  l.useEffect(() => {
    if (!I) {
      y(!1);
      return;
    }
    let $ = 0;
    const U = requestAnimationFrame(() => {
      $ = requestAnimationFrame(() => y(!0));
    });
    return () => {
      cancelAnimationFrame(U), cancelAnimationFrame($);
    };
  }, [I]);
  const v = l.useMemo(
    () => S ? ur(S.group.subitems, S.group.icon) : [],
    [S]
  ), T = l.useRef(null), j = l.useRef(null), z = l.useRef(0), D = l.useRef(null), N = l.useRef([]), M = v.findIndex(
    ({ sub: $ }) => We($, i)
  ), [L, A] = l.useState(0);
  l.useEffect(() => {
    A(Math.max(M, 0));
  }, [o]), l.useEffect(() => {
    if (!I || !c)
      return;
    const $ = setTimeout(() => {
      var U;
      return (U = N.current[0]) == null ? void 0 : U.focus();
    });
    return () => clearTimeout($);
  }, [I, c, o]);
  const J = ($) => {
    var q;
    const U = Math.max(0, Math.min($, v.length - 1));
    A(U), (q = N.current[U]) == null || q.focus();
  }, we = ($, U) => {
    switch ($.key) {
      case "ArrowRight":
        J(U + 1);
        break;
      case "ArrowLeft":
        U === 0 ? f(!0) : J(U - 1);
        break;
      case "Home":
        J(0);
        break;
      case "End":
        J(v.length - 1);
        break;
      case "Tab":
        f(!0);
        break;
      default:
        return;
    }
    $.preventDefault();
  }, G = ($) => {
    const U = N.current.slice(0, v.length).filter((de) => !!de);
    if (!U.length)
      return;
    const q = $ !== null && $ < U.length && !ot(), H = `translate ${ge.duration}ms ${ge.easing}, scale ${ge.duration}ms ${ge.easing}`, V = U.map((de) => de.offsetLeft + Qe / 2), ce = U.map(
      (de, re) => q && re === $ ? sn : 1
    ), W = q ? (sn - 1) * Qe : 0, Ce = V[0] - Qe / 2, le = V[V.length - 1] + Qe / 2, De = q ? Math.min(
      Math.max(
        (V[$] - Ce) / (le - Ce || 1),
        Math.max(0, 1 - an / W)
      ),
      Math.min(1, an / W)
    ) : 0;
    let Te = Ce - W * De;
    U.forEach((de, re) => {
      const me = Qe * ce[re], se = Te + me / 2;
      Te += me + nn, de.style.transition = `${H}, background 160ms ease, box-shadow 160ms ease`, de.style.translate = q ? `${se - V[re]}px 0` : "", de.style.scale = q ? String(ce[re]) : "", q ? de.style.setProperty("--dock-scale", String(ce[re])) : de.style.removeProperty("--dock-scale");
    });
  }, P = l.useRef(null);
  l.useEffect(() => {
    P.current = null;
  }, [o]);
  const X = ($) => {
    P.current !== $ && (P.current = $, cancelAnimationFrame(z.current), z.current = requestAnimationFrame(() => G($)));
  };
  l.useEffect(() => () => cancelAnimationFrame(z.current), []);
  const ee = h.palette.text.primary, oe = x ? h.palette.text.primary : p;
  return /* @__PURE__ */ w(Ie, { children: [
    /* @__PURE__ */ t(sr, { in: I, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      _,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => f(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: s ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...s ? { clipPath: Ti(s) } : {},
          zIndex: _i,
          bgcolor: ri(x)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      ir,
      {
        open: I,
        anchorEl: R ?? E.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Up by half the title, so the tile row (not the whole
          // panel) is centred on the rail icon
          {
            name: "offset",
            options: {
              offset: [-qo / 2, bo]
            }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Ci,
          transition: C ? `transform ${ge.duration}ms ${ge.easing}` : "none",
          [_e]: { transition: "none" }
        },
        children: ({ TransitionProps: $ }) => /* @__PURE__ */ t(
          ki,
          {
            in: ($ == null ? void 0 : $.in) ?? I,
            onEnter: $ == null ? void 0 : $.onEnter,
            onExited: $ == null ? void 0 : $.onExited,
            groupKey: (S == null ? void 0 : S.key) ?? null,
            panelProps: d,
            isDark: x,
            solidSurface: m,
            groupText: S == null ? void 0 : S.group.text,
            glassRef: j,
            shapeRef: D,
            children: S ? /* @__PURE__ */ w(Ie, { children: [
              /* @__PURE__ */ t(
                _,
                {
                  "aria-hidden": !0,
                  "data-testid": "sidebar-flyout-title",
                  sx: {
                    px: `${Io}px`,
                    height: qo,
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
                _,
                {
                  ref: T,
                  role: "menu",
                  "aria-label": S.group.text,
                  onPointerLeave: () => X(null),
                  sx: {
                    position: "relative",
                    display: "flex",
                    gap: `${nn}px`,
                    // A grown tile fits in the panel's padding
                    // (see DOCK_ROOM_PX)
                    px: 0
                  },
                  children: v.map(({ sub: U, icon: q }, H) => /* @__PURE__ */ t(
                    Jn,
                    {
                      ref: (V) => {
                        N.current[H] = V;
                      },
                      sub: U,
                      icon: q,
                      index: H,
                      active: We(
                        U,
                        i
                      ),
                      tabIndex: H === L ? 0 : -1,
                      onClick: () => {
                        a(U.path), f();
                      },
                      onKeyDown: (V) => we(V, H),
                      onFocus: (V) => {
                        A(H), V.currentTarget.matches(
                          ":focus-visible"
                        ) && X(H);
                      },
                      onHoverStart: (V) => {
                        V !== "touch" && X(H);
                      },
                      accentColor: p,
                      activeForegroundColor: g,
                      labelColor: ee,
                      iconColor: oe,
                      isDark: x
                    },
                    U.path
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
}, Ut = 18, Oi = 160, Zo = 14, $i = 22, Mi = 2.5, Li = 1, un = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, s = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(s, 0)) + Math.min(Math.max(n, s), 0) - r.r;
}, Di = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, Ni = (e, o, r) => {
  const n = Io, s = Ut, i = Ut + o / 2, c = Math.max(e, ...r.map((b) => b.right + n)), a = {
    cx: c / 2,
    cy: i,
    hx: c / 2,
    hy: o / 2,
    r: zt
  }, f = r.filter((b) => b.bottom - b.top > Qe * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + Ut,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: zt
  })), d = (b, S) => f.reduce(
    (R, E) => Di(R, un(b, S, E), $i),
    un(b, S, a)
  ), p = (b, S) => {
    let R = i, E = i + S * (o / 2 + s);
    if (d(b, R) > 0)
      return null;
    for (let C = 0; C < 12; C += 1) {
      const y = (R + E) / 2;
      d(b, y) <= 0 ? R = y : E = y;
    }
    return R;
  }, g = Math.min(0, ...f.map((b) => b.cx - b.hx)) - 2, m = Math.max(c, ...f.map((b) => b.cx + b.hx)) + 2, h = [], x = [];
  for (let b = g; b <= m; ) {
    const S = p(b, -1), R = p(b, 1);
    if (S !== null && R !== null) {
      const C = +(b + Zo).toFixed(1);
      h.push([C, +S.toFixed(1)]), x.push([C, +R.toFixed(1)]);
    }
    const E = b - g < zt + 4 || m - b < zt + 4;
    b += E ? Li : Mi;
  }
  return h.length ? `M ${[...h, ...x.reverse()].map(([b, S]) => `${b} ${S}`).join(" L ")} Z` : "";
}, fn = (e, [o, r], n, s) => {
  Array.from(e.children).forEach((i) => {
    tt(i) && (Bt(i), i.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: s,
      fill: r === 0 ? "forwards" : "none"
    }));
  });
}, ki = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: s,
  isDark: i,
  solidSurface: c,
  groupText: a,
  glassRef: f,
  shapeRef: d,
  children: p
}) => {
  const g = l.useRef(null), m = l.useRef(null), h = l.useRef(null), x = l.useRef(null), I = l.useRef(null), b = ti(i, Et()), S = l.useCallback(
    (G, P, X) => {
      var ee, oe;
      (ee = I.current) == null || ee.setAttribute("cx", String(G)), (oe = I.current) == null || oe.setAttribute("cy", String(P)), x.current && (x.current.style.opacity = String(
        X * (i ? Jr.dark.rim : Jr.light.rim)
      ));
    },
    [i]
  ), R = l.useRef(null), E = l.useRef(null), C = `lumora-flyout-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, y = l.useRef(0), v = l.useRef(0), T = l.useRef(""), j = () => {
    var $, U, q, H;
    const G = g.current, P = m.current;
    if (!G || !P)
      return !1;
    const X = G.getBoundingClientRect(), ee = Array.from(
      G.querySelectorAll('[role="menuitem"]'),
      (V) => {
        if (V.style.scale)
          return null;
        const ce = V.getBoundingClientRect();
        return {
          left: ce.left - X.left,
          right: ce.right - X.left,
          top: ce.top - X.top,
          bottom: ce.bottom - X.top
        };
      }
    ).filter((V) => V !== null), oe = Ni(
      G.offsetWidth,
      G.offsetHeight,
      ee
    );
    return oe === T.current ? !1 : (T.current = oe, P.style.clipPath = `path('${oe}')`, ($ = h.current) == null || $.setAttribute("d", oe), (U = x.current) == null || U.setAttribute("d", oe), (q = R.current) == null || q.setAttribute("d", oe), (H = E.current) == null || H.setAttribute("d", oe), !0);
  }, z = () => {
    if (v.current = 0, y.current)
      return;
    const G = () => {
      if (v.current = j() ? 0 : v.current + 1, v.current > 8) {
        y.current = 0;
        return;
      }
      y.current = requestAnimationFrame(G);
    };
    y.current = requestAnimationFrame(G);
  };
  d.current = z, l.useLayoutEffect(() => (j(), z(), () => {
    cancelAnimationFrame(y.current), y.current = 0;
  }), [n]);
  const D = l.useRef(null), N = l.useRef(null), M = l.useRef(!1), L = (G) => {
    g.current = G;
    const { ref: P } = s;
    typeof P == "function" ? P(G) : P && (P.current = G);
  }, A = () => {
    Bt(f.current), Bt(D.current), Bt(g.current);
  }, J = () => {
    var ee;
    const G = g.current, P = f.current, X = D.current;
    if (!(!tt(G) || !P || !X)) {
      if (A(), ot()) {
        G.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      N.current = null, P.animate(
        [
          { transform: `scale(${cn}, ${ln})` },
          { transform: "none" }
        ],
        { duration: yo.duration, easing: yo.easing }
      ), fn(P, [0, 1], 160, "ease-out");
      try {
        (ee = m.current) == null || ee.animate(
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
      X.animate(
        [
          { opacity: 0, transform: "translateX(-10px) scale(0.98)" },
          { opacity: 1, transform: "none" }
        ],
        {
          duration: dn.duration,
          delay: 60,
          easing: dn.easing,
          fill: "backwards"
        }
      );
    }
  }, we = () => {
    const G = g.current, P = f.current, X = D.current;
    if (!tt(G) || !P || !X) {
      r == null || r();
      return;
    }
    if (A(), ot()) {
      G.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 120,
        fill: "forwards"
      }).finished.then(() => r == null ? void 0 : r()).catch(() => {
      });
      return;
    }
    X.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 90,
      easing: "ease-in",
      fill: "forwards"
    }), fn(P, [1, 0], 200, "ease-in"), P.animate(
      [
        { transform: "none" },
        { transform: `scale(${cn}, ${ln})` }
      ],
      {
        duration: 220,
        easing: "cubic-bezier(0.5, 0, 0.75, 0)",
        fill: "forwards"
      }
    ).finished.then(() => r == null ? void 0 : r()).catch(() => {
    });
  };
  return l.useLayoutEffect(() => {
    if (!e) {
      we();
      return;
    }
    o == null || o(), J();
  }, [e]), l.useLayoutEffect(() => {
    const G = g.current;
    if (!G)
      return;
    const P = G.getBoundingClientRect(), X = N.current;
    if (N.current = { width: P.width, height: P.height }, !M.current) {
      M.current = !0;
      return;
    }
    const ee = f.current;
    !e || !X || !tt(ee) || !P.width || !P.height || ot() || (Bt(ee), ee.animate(
      [
        {
          transform: `scale(${X.width / P.width}, ${X.height / P.height})`
        },
        { transform: "none" }
      ],
      { duration: ge.duration, easing: ge.easing }
    ));
  }, [n]), /* @__PURE__ */ w(
    _,
    {
      ref: L,
      onMouseEnter: s.onMouseEnter,
      onMouseLeave: s.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": a,
      sx: {
        position: "relative",
        borderRadius: `${zt}px`,
        p: `${Io}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -bo - 2,
          width: bo + 2
        }
      },
      children: [
        /* @__PURE__ */ w(
          _,
          {
            ref: f,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Ut,
              bottom: -Ut,
              left: -Zo,
              right: -Oi,
              pointerEvents: "none",
              // The rail icon's centre: the tile row is level with it
              // (half the title below the panel's middle), one gap
              // plus half the rail's padding to the left
              transformOrigin: `${Zo - Ei}px calc(50% + ${qo / 2}px)`,
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
                          id: `${C}-shadow`,
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
                          id: `${C}-outside`,
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
                            /* @__PURE__ */ t("path", { ref: E, fill: "black" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ t("g", { mask: `url(#${C}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: R,
                        transform: "translate(0 12)",
                        fill: i ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${C}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                It,
                {
                  ref: m,
                  isDark: i,
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
                        id: `${C}-rim`,
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
                              stopOpacity: i ? 0.5 : 1
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0.25",
                              stopColor: "#ffffff",
                              stopOpacity: i ? 0.1 : 0.5
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0.55",
                              stopColor: "#ffffff",
                              stopOpacity: i ? 0.04 : 0.2
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: "#ffffff",
                              stopOpacity: i ? 0.3 : 0.9
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ t(
                      "path",
                      {
                        ref: h,
                        fill: "none",
                        stroke: i ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)",
                        strokeWidth: "1"
                      }
                    ),
                    /* @__PURE__ */ w(
                      "radialGradient",
                      {
                        ref: I,
                        id: `${C}-glint`,
                        gradientUnits: "userSpaceOnUse",
                        cx: "-9999",
                        cy: "-9999",
                        r: "140",
                        children: [
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0",
                              stopColor: `rgb(${b})`,
                              stopOpacity: "1"
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: `rgb(${b})`,
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
                        stroke: `url(#${C}-glint)`,
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
        /* @__PURE__ */ t(_, { ref: D, sx: { position: "relative" }, children: p })
      ]
    }
  );
}, Jn = l.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: s,
    onClick: i,
    onKeyDown: c,
    onFocus: a,
    onHoverStart: f,
    accentColor: d,
    activeForegroundColor: p,
    labelColor: g,
    iconColor: m,
    isDark: h
  }, x) => {
    const I = Et(), b = l.useContext(qt), S = (y) => {
      const v = y.currentTarget.getBoundingClientRect();
      y.currentTarget.style.setProperty(
        "--mx",
        `${(y.clientX - v.left) / v.width * 100}%`
      ), y.currentTarget.style.setProperty(
        "--my",
        `${(y.clientY - v.top) / v.height * 100}%`
      );
    }, R = (y) => {
      const v = y.currentTarget;
      !tt(v) || ot() || v.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.04, 0.96)", offset: 0.22 },
          { transform: "scale(0.98, 1.025)", offset: 0.5 },
          { transform: "scale(1.01, 0.995)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, E = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, C = {
      ...br(h, I),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": E
    };
    return /* @__PURE__ */ w(
      rt,
      {
        ref: x,
        role: "menuitem",
        tabIndex: s,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: i,
        onKeyDown: c,
        onFocus: a,
        onPointerMove: S,
        onMouseEnter: R,
        onPointerEnter: (y) => f(y.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Qe,
          height: Qe,
          borderRadius: `${wi}px`,
          color: n ? p : g,
          bgcolor: n ? d : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Kt(d, h) : {},
          transition: `translate ${ge.duration}ms ${ge.easing}, scale ${ge.duration}ms ${ge.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${ei} ${yo.duration}ms ${yo.easing} both`,
          animationDelay: `${Ri + r * Ii}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: wt,
            color: n ? p : m
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
            "& [data-tile-name]": E
          } : C,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : C,
            "& [data-tile-name]": E,
            outline: "2px solid",
            outlineColor: d,
            outlineOffset: 2
          },
          [_e]: {
            animation: "none",
            transition: "none",
            "&:active": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(_, { sx: { position: "relative", display: "flex" }, children: o }),
          /* @__PURE__ */ t(
            _,
            {
              component: "span",
              "data-tile-name": !0,
              sx: {
                ...mr(h, b),
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
                [_e]: { transition: "opacity 140ms ease" }
              },
              children: e.text
            }
          )
        ]
      }
    );
  }
);
Jn.displayName = "FlyoutTile";
const Fi = 100, Pi = 250, Wi = (e) => {
  const [o, r] = l.useState(null), n = l.useRef(o);
  n.current = o;
  const s = l.useRef(/* @__PURE__ */ new Map()), i = l.useRef(null), c = l.useRef(void 0), a = l.useRef(void 0), f = () => {
    clearTimeout(c.current), c.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, p = (S, R, E = !1) => {
    f(), d(), r({ key: S, pinned: R, focusFirst: E });
  }, g = l.useCallback((S = !1) => {
    var E, C;
    f(), d();
    const R = (E = n.current) == null ? void 0 : E.key;
    r(null), S && R && ((C = s.current.get(R)) == null || C.focus());
  }, []), m = () => {
    f(), !(!n.current || n.current.pinned) && (d(), a.current = setTimeout(() => g(), Pi));
  };
  l.useEffect(() => {
    e || g();
  }, [e, g]), l.useEffect(
    () => () => {
      f(), d();
    },
    []
  );
  const h = o !== null;
  return l.useEffect(() => {
    if (!h)
      return;
    const S = (C) => {
      var v;
      const y = C;
      return y ? (v = i.current) != null && v.contains(y) ? !0 : [...s.current.values()].some((T) => T.contains(y)) : !1;
    }, R = (C) => {
      S(C.target) || g();
    }, E = (C) => {
      var y;
      C.key === "Escape" && g(
        !!((y = i.current) != null && y.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", R), document.addEventListener("keydown", E), () => {
      document.removeEventListener("pointerdown", R), document.removeEventListener("keydown", E);
    };
  }, [h, g]), {
    state: o,
    close: g,
    triggerProps: (S) => ({
      ref: (R) => {
        R ? s.current.set(S, R) : s.current.delete(S);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        d();
        const R = n.current;
        if (R) {
          R.key !== S && p(S, R.pinned);
          return;
        }
        f(), c.current = setTimeout(
          () => p(S, !1),
          Fi
        );
      },
      onMouseLeave: m,
      onClick: (R) => {
        if (R.detail === 0) {
          p(S, !0, !0);
          return;
        }
        const E = n.current;
        (E == null ? void 0 : E.key) === S && E.pinned ? g() : p(S, !0);
      },
      onKeyDown: (R) => {
        R.key === "ArrowRight" && (R.preventDefault(), p(S, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: d,
      onMouseLeave: m
    },
    onRailLeafEnter: () => {
      f(), n.current && !n.current.pinned && g();
    },
    getTrigger: (S) => s.current.get(S) ?? null
  };
}, Bi = 264, zi = 72, hn = 64, io = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Gi = 16, Hi = 14, Ui = 4, Xi = 2.5, pn = "0.7rem", mn = 22, gn = Se(yr), lt = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
  const i = l.useRef(null), [c, a] = l.useState(!1), f = l.useCallback(() => {
    const d = i.current;
    d && a(d.scrollWidth > d.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    f();
  }, [f, e]), l.useEffect(() => {
    const d = i.current;
    if (!d)
      return;
    const p = new ResizeObserver(() => f());
    return p.observe(d), () => p.disconnect();
  }, [f]), /* @__PURE__ */ t(
    ve,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !c,
      disableFocusListener: !c,
      disableTouchListener: !c,
      children: /* @__PURE__ */ t(
        ue,
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
}, Ki = ({
  open: e,
  size: o = Gi
}) => e ? /* @__PURE__ */ t($s, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Os, { sx: { fontSize: o, opacity: 0.75 } }), xn = ({ open: e }) => /* @__PURE__ */ t(
  Ms,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), ao = 600, gt = `${wo}px`, ho = 6, ji = (e) => {
  const o = Math.max(0, e - ho);
  return {
    pl: `${Math.max(0, ho - o)}px`,
    pr: `${Math.max(0, ho - e)}px`
  };
};
function Vi(e, o) {
  const [r, n] = l.useState(0);
  return l.useLayoutEffect(() => {
    const s = e.current;
    if (!o || !s) {
      n(0);
      return;
    }
    const i = () => {
      const a = getComputedStyle(s), f = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth);
      n(Math.max(0, s.offsetWidth - s.clientWidth - f));
    };
    if (i(), typeof ResizeObserver > "u")
      return;
    const c = new ResizeObserver(i);
    return c.observe(s), s.firstElementChild && c.observe(s.firstElementChild), () => c.disconnect();
  }, [e, o]), r;
}
const co = 8;
function Yi(e, o, r) {
  l.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const s = (f) => {
      const d = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((h) => h.offsetHeight > 0).pop();
      if (!d)
        return;
      const p = n.getBoundingClientRect(), g = d.getBoundingClientRect();
      let m = 0;
      g.top < p.top + co ? m = g.top - p.top - co : g.bottom > p.bottom - co && (m = g.bottom - p.bottom + co), m !== 0 && n.scrollBy({ top: m, behavior: f });
    }, i = requestAnimationFrame(() => s("smooth")), c = window.setTimeout(() => s("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const Qo = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: s,
  logo: i,
  title: c,
  onBrandClick: a,
  brandMenuOpen: f,
  showHeaderBar: d = !1,
  headerBackgroundColor: p,
  headerForegroundColor: g,
  brandColor: m,
  activeAccentColor: h = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: I,
  foregroundColor: b,
  surfaceBackgroundColor: S,
  flyoutSurfaceColor: R,
  collapsed: E = !1,
  expandedWidth: C = Bi,
  collapsedWidth: y = zi,
  showLabels: v = !1,
  topInsetPx: T = 0,
  topContent: j,
  footer: z,
  submenuMode: D = "inline"
}) => {
  var At;
  const N = ze(), M = N.palette.mode === "dark", L = l.useContext(qt), A = D === "flyout" && E && !v, J = Wi(A), we = l.useRef(null), G = l.useRef(null), P = l.useRef(null);
  Yi(P, r, E);
  const X = Vi(P, A), ee = fi(A, M, ((At = J.state) == null ? void 0 : At.key) ?? null), oe = pi({
    enabled: A,
    isDark: M,
    color: h,
    containerRef: G
  }), { close: $ } = J;
  l.useEffect(() => {
    $();
  }, [r, $]);
  const [U, q] = l.useState(
    {}
  ), H = I ?? Vo(h), V = {
    bgcolor: h,
    color: H,
    "& .MuiListItemIcon-root": { color: H }
  }, ce = {
    bgcolor: h,
    color: H,
    borderRadius: "8px"
  }, W = x ?? Xt(h), Ce = S ?? (M ? N.palette.background.paper : "#ffffff"), le = b ?? (M ? "text.primary" : h), De = p ?? Ce, Te = g ?? (p ? Vo(De) : b ?? (M ? N.palette.text.primary : h)), de = Xt(Te), re = (u) => {
    n == null || n(u);
  }, me = (u, F) => {
    q((K) => ({ ...K, [u]: !F }));
  }, se = (u, F) => U[F] ?? qe(u, r), Ne = (u, F, K) => ({
    color: u ? H : le,
    bgcolor: u ? h : "transparent",
    "& .MuiListItemIcon-root": {
      color: u ? H : le,
      minWidth: K
    },
    "&:hover": u || v ? V : { bgcolor: F }
  }), Ge = {
    "&.Mui-selected": {
      bgcolor: h
    },
    "&.Mui-selected:hover": V
  }, Ve = (u) => {
    const F = We(u, r), K = /* @__PURE__ */ w(
      so,
      {
        disabled: !u.path,
        selected: F,
        onClick: () => u.path && re(u.path),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": F ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...u.action && { pr: 6 },
          ...u.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...Ne(
            F,
            W,
            u.subtitle ? 48 : 36
          ),
          ...Ge
        },
        children: [
          /* @__PURE__ */ t(ye, { children: u.icon }),
          /* @__PURE__ */ t(
            Be,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                lt,
                {
                  text: u.text,
                  fontWeight: ao
                }
              ),
              secondary: u.subtitle ? /* @__PURE__ */ t(
                _,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    lt,
                    {
                      text: u.subtitle,
                      fontSize: "0.8125rem"
                    }
                  )
                }
              ) : void 0,
              sx: u.subtitle ? { my: 0 } : void 0
            }
          )
        ]
      },
      u.text
    );
    if (!u.action)
      return K;
    const { action: k } = u;
    return /* @__PURE__ */ w(_, { sx: { position: "relative" }, children: [
      K,
      /* @__PURE__ */ t(ve, { title: k.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        be,
        {
          "aria-label": k.label,
          "data-testid": `sidebar-action-${u.text}`,
          onClick: () => {
            k.onClick(), s == null || s();
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
            borderColor: F ? "rgba(255, 255, 255, 0.35)" : W,
            color: F ? H : le,
            "&:hover": {
              bgcolor: F ? "rgba(255, 255, 255, 0.15)" : W
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: F ? H : le,
              outlineOffset: 1
            }
          },
          children: k.icon
        }
      ) })
    ] }, u.text);
  }, ft = (u) => {
    const F = qe(u, r), K = We(u, r), k = vt("", u), B = se(u, k);
    return /* @__PURE__ */ w(
      _,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: F ? W : "transparent"
        },
        children: [
          /* @__PURE__ */ w(
            so,
            {
              onClick: () => me(k, B),
              "data-testid": `sidebar-item-${u.text}`,
              "data-active": K ? "true" : "false",
              "aria-expanded": B,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Ne(K, W, 36)
              },
              children: [
                /* @__PURE__ */ t(ye, { children: u.icon }),
                /* @__PURE__ */ t(
                  Be,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      lt,
                      {
                        text: u.text,
                        fontWeight: ao
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(xn, { open: B })
              ]
            }
          ),
          /* @__PURE__ */ t(jr, { in: B, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            _,
            {
              "data-testid": `sidebar-children-${u.text}`,
              sx: { pb: 0.5 },
              children: u.subitems.map(
                (te) => Ye(te, k, 1)
              )
            }
          ) })
        ]
      },
      u.text
    );
  }, Ye = (u, F, K) => {
    const k = vt(F, u), B = Ui + (K - 1) * Xi;
    if (St(u)) {
      const fe = qe(u, r), ae = We(u, r), Ae = se(u, k);
      return /* @__PURE__ */ w(_, { "data-testid": `sidebar-group-${u.text}`, children: [
        /* @__PURE__ */ w(
          so,
          {
            onClick: () => me(k, Ae),
            "data-testid": `sidebar-subitem-${u.text}`,
            "data-active": fe ? "true" : "false",
            "aria-expanded": Ae,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: B,
              ...Ne(ae, "action.hover", 32)
            },
            children: [
              u.icon ? /* @__PURE__ */ t(ye, { children: u.icon }) : null,
              /* @__PURE__ */ t(
                Be,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    lt,
                    {
                      text: u.text,
                      fontWeight: ao
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(xn, { open: Ae })
            ]
          }
        ),
        /* @__PURE__ */ t(jr, { in: Ae, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(_, { "data-testid": `sidebar-children-${u.text}`, children: u.subitems.map(
          (He) => Ye(He, k, K + 1)
        ) }) })
      ] }, k);
    }
    const te = We(u, r);
    return /* @__PURE__ */ w(
      so,
      {
        selected: te,
        disabled: !u.path,
        onClick: () => u.path && re(u.path),
        "data-testid": `sidebar-subitem-${u.text}`,
        "data-active": te ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: B,
          ...Ne(te, "action.hover", 32),
          ...Ge
        },
        children: [
          u.icon ? /* @__PURE__ */ t(ye, { children: u.icon }) : null,
          /* @__PURE__ */ t(
            Be,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                lt,
                {
                  text: u.text,
                  fontWeight: ao
                }
              )
            }
          )
        ]
      },
      k
    );
  }, Zt = (u, F, K, k, B, te) => {
    const fe = !B, ae = /* @__PURE__ */ w(
      be,
      {
        "aria-label": F,
        disabled: fe,
        onClick: B,
        onMouseEnter: A ? J.onRailLeafEnter : void 0,
        ...A ? { [jt]: "" } : {},
        "data-testid": (te == null ? void 0 : te.testId) ?? `sidebar-item-${F}`,
        "data-active": k ? "true" : "false",
        sx: v ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: k ? H : le,
          bgcolor: k ? h : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: mn
          },
          "&:hover": ce,
          ...io
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: A ? pe : 44,
          height: A ? pe : 44,
          color: k ? H : le,
          bgcolor: k ? h : "transparent",
          borderRadius: k ? "8px" : "50%",
          "&:hover": {
            bgcolor: k ? h : te != null && te.insideGroup ? "action.hover" : W,
            borderRadius: "8px"
          },
          ...io,
          ...A ? _t(k) : {}
        },
        children: [
          K,
          v ? /* @__PURE__ */ t(
            lt,
            {
              text: F,
              variant: "caption",
              center: !0,
              fontSize: pn
            }
          ) : null
        ]
      }
    );
    return v ? fe ? /* @__PURE__ */ t("span", { children: ae }, u) : /* @__PURE__ */ t(l.Fragment, { children: ae }, u) : /* @__PURE__ */ t(
      ve,
      {
        title: F,
        placement: "right",
        arrow: !A,
        ...A ? Co : {},
        children: fe ? /* @__PURE__ */ t("span", { children: ae }) : ae
      },
      u
    );
  }, _o = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, _t = (u) => ({
    borderRadius: `${Q}px`,
    "& .MuiSvgIcon-root": { fontSize: wt },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...u ? { bgcolor: "transparent" } : {},
    transition: `transform ${gn.duration}ms ${gn.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), Co = {
    slotProps: {
      tooltip: { sx: mr(M, L) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, nt = (u) => {
    var B;
    const F = qe(u, r), K = vt("", u), k = ((B = J.state) == null ? void 0 : B.key) === K;
    return /* @__PURE__ */ t(
      _,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          be,
          {
            ...J.triggerProps(K),
            "aria-label": u.text,
            "aria-haspopup": "menu",
            "aria-expanded": k,
            "data-testid": `sidebar-item-${u.text}`,
            "data-active": F ? "true" : "false",
            "data-open": k ? "true" : "false",
            [jt]: "",
            sx: {
              position: "relative",
              width: pe,
              height: pe,
              color: F ? H : le,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: F ? h : "transparent",
              ..._t(F),
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
              ...io
            },
            children: u.icon
          }
        )
      },
      u.text
    );
  }, Ct = (u) => {
    const F = qe(u, r), K = We(u, r), k = vt("", u), B = se(u, k), te = /* @__PURE__ */ w(
      be,
      {
        "aria-label": u.text,
        "aria-expanded": B,
        onClick: () => me(k, B),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": K ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: v ? 0.25 : 0,
          width: v ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...v ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: K ? H : le,
          bgcolor: K ? h : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": v ? { bgcolor: h, color: H } : {
            bgcolor: K ? h : "transparent"
          },
          ...io
        },
        children: [
          v ? /* @__PURE__ */ t(
            _,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: mn
                }
              },
              children: u.icon
            }
          ) : u.icon,
          v ? /* @__PURE__ */ t(
            lt,
            {
              text: u.text,
              variant: "caption",
              center: !0,
              fontSize: pn
            }
          ) : null,
          /* @__PURE__ */ t(Ki, { open: B, size: Hi })
        ]
      }
    ), fe = v ? te : /* @__PURE__ */ t(ve, { title: u.text, placement: "right", arrow: !0, children: te });
    return /* @__PURE__ */ w(
      _,
      {
        "data-testid": `sidebar-group-${u.text}`,
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
          bgcolor: F ? W : "transparent",
          ...v ? {} : { "&:hover": { bgcolor: W } }
        },
        children: [
          fe,
          B ? ur(u.subitems, u.icon).map(
            ({ sub: ae, icon: Ae }) => Zt(
              ae.path,
              ae.text,
              Ae,
              We(ae, r),
              () => re(ae.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${ae.text}`
              }
            )
          ) : null
        ]
      },
      u.text
    );
  }, Qt = (u) => /* @__PURE__ */ t(
    _,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Zt(
        u.text,
        u.subtitle ? `${u.text} · ${u.subtitle}` : u.text,
        u.icon,
        We(u, r),
        u.path ? () => re(u.path) : void 0,
        { testId: `sidebar-item-${u.text}` }
      )
    },
    u.text
  ), st = (u) => St(u) ? A ? nt(u) : E ? Ct(u) : ft(u) : E ? Qt(u) : Ve(u), ht = (u) => /* @__PURE__ */ t(
    Le,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: E ? "center" : "stretch"
      },
      children: u.map(st)
    }
  ), Tt = E ? y : C, Jt = () => {
    var fe, ae;
    const { state: u } = J, F = u ? [...e, ...o].find(
      (Ae) => St(Ae) && vt("", Ae) === u.key
    ) ?? null : null, K = F ? ((fe = we.current) == null ? void 0 : fe.getBoundingClientRect().right) ?? y : y, k = F ? ((ae = we.current) == null ? void 0 : ae.closest("[data-rail-surface]")) ?? we.current : null, B = k == null ? void 0 : k.getBoundingClientRect(), te = k && B ? {
      left: B.left,
      top: B.top,
      width: B.width,
      height: B.height,
      radius: parseFloat(
        getComputedStyle(k).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Ai,
      {
        group: F,
        groupKey: F ? u.key : null,
        anchor: F ? J.getTrigger(u.key) : null,
        railEdge: K,
        railShape: te,
        activePath: r,
        focusFirst: u == null ? void 0 : u.focusFirst,
        onNavigate: re,
        onClose: J.close,
        panelProps: J.flyoutProps,
        accentColor: h,
        activeForegroundColor: H,
        solidSurface: R ?? Ce
      }
    );
  }, To = d ? /* @__PURE__ */ t(
    _,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...A ? { pt: "12px", pb: "12px" } : {
          height: hn,
          minHeight: hn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: De
      },
      children: i || c ? /* @__PURE__ */ t(
        xo,
        {
          logo: i,
          title: E ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: f,
          color: m ?? Te,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, pt = !d && i ? /* @__PURE__ */ t(
    _,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: A ? gt : 1
      },
      children: /* @__PURE__ */ t(
        xo,
        {
          logo: i,
          appName: c || "App",
          onClick: a,
          menuOpen: f,
          color: m ?? Te,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, mt = v ? 0.5 : A ? 0.75 : E ? 1 : 1.5;
  return /* @__PURE__ */ t(Rt.Provider, { value: A, children: /* @__PURE__ */ w(
    _,
    {
      ref: we,
      ...ee.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": E ? "true" : "false",
      "data-labeled": v ? "true" : "false",
      sx: {
        width: Tt,
        minWidth: Tt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Ce,
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
        ...A ? _o : {}
      },
      children: [
        ee.lens,
        To ?? pt,
        j ? /* @__PURE__ */ t(
          _,
          {
            sx: {
              flexShrink: 0,
              px: mt,
              pt: A ? 0 : 1,
              pb: A ? 0 : 1
            },
            children: j
          }
        ) : null,
        /* @__PURE__ */ t(
          _,
          {
            ref: P,
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
                    scrollbarColor: (u) => `${u.palette.divider} transparent`
                  }
                }
              } : {
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
                "&:hover, &:has(:focus-visible)": {
                  scrollbarColor: (u) => `${u.palette.divider} transparent`
                }
              },
              // Safari only honours the thumb rule once the bar
              // itself is styled.
              "&::-webkit-scrollbar": {
                width: A ? ho : 8
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: 4
              },
              "&:hover::-webkit-scrollbar-thumb, &:has(:focus-visible)::-webkit-scrollbar-thumb": {
                backgroundColor: (u) => u.palette.divider
              },
              // On the floating rail the bar (when it takes space at
              // all) stands in for the right padding, and the left
              // padding follows it, so the 40px column keeps equal
              // gaps in the capsule whether the bar is classic,
              // overlay or absent. (The inline collapsed rail keeps
              // its padding: its open groups tint the full row width.)
              ...A ? ji(X) : { px: mt },
              pt: T && !d ? `${T}px` : A ? gt : 1,
              pb: A ? gt : 2
            },
            children: /* @__PURE__ */ w(
              _,
              {
                ref: G,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  oe.glass,
                  ht(e),
                  o.length > 0 ? /* @__PURE__ */ w(
                    _,
                    {
                      sx: { mt: "auto", pt: A ? gt : 2 },
                      children: [
                        z ? null : /* @__PURE__ */ t(
                          et,
                          {
                            sx: {
                              mb: A ? gt : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        ht(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        z ? /* @__PURE__ */ t(
          _,
          {
            sx: {
              flexShrink: 0,
              px: mt,
              pb: 1.5,
              ...A ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: wt
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              _,
              {
                sx: {
                  borderTop: `1px solid ${de}`,
                  pt: A ? gt : 1.5
                },
                children: z
              }
            )
          }
        ) : null,
        A ? Jt() : null
      ]
    }
  ) });
}, Jo = "var(--lumora-content-padding, 0px)", bn = `calc(${Jo} * -1)`, Yc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: c
}) => /* @__PURE__ */ t(
  _,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: bn,
        mt: o ? bn : 0,
        // Space below it, like any other block on the page
        mb: Jo,
        px: i ? Jo : 0,
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
), qi = ({ keys: e }) => /* @__PURE__ */ t(
  _,
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
}, Re = {
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
}, xt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, bt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, yt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, es = vo(), Me = es.typography.pxToRem, wr = (e) => {
  const o = e === "dark", r = [...es.shadows];
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
        contrastText: Re[50]
      },
      warning: o ? { light: bt[400], main: bt[500], dark: bt[700] } : { light: bt[300], main: bt[400], dark: bt[800] },
      error: o ? { light: yt[400], main: yt[500], dark: yt[700] } : { light: yt[300], main: yt[400], dark: yt[800] },
      success: o ? { light: xt[400], main: xt[500], dark: xt[700] } : { light: xt[300], main: xt[400], dark: xt[800] },
      grey: Re,
      divider: o ? dt(Re[700], 0.6) : dt(Re[300], 0.4),
      background: o ? { default: Re[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Re[400] } : { primary: Re[800], secondary: Re[600] },
      action: o ? {
        hover: dt(Re[600], 0.2),
        selected: dt(Re[600], 0.3)
      } : {
        hover: dt(Re[200], 0.2),
        selected: dt(Re[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Me(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Me(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Me(30), lineHeight: 1.2 },
      h4: { fontSize: Me(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Me(20), fontWeight: 600 },
      h6: { fontSize: Me(18), fontWeight: 600 },
      subtitle1: { fontSize: Me(18) },
      subtitle2: { fontSize: Me(14), fontWeight: 500 },
      body1: { fontSize: Me(14) },
      body2: { fontSize: Me(14), fontWeight: 400 },
      caption: { fontSize: Me(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Zi = 6, Qi = 8, yn = (e, o) => typeof e == "object" ? e[o] : e, Go = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: c = !0,
  contentPadding: a = Xn,
  sidebarBackgroundColor: f,
  contentBackgroundColor: d,
  content: p
}) => {
  const g = Nn(r.breakpoints.down("md")), m = e === "dark", h = jn({
    showSidebar: c,
    isMobile: g,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), x = Eo(s, n) ? {
    gutterPx: ut,
    radiusPx: Un
  } : void 0, I = fo, b = Vn(
    yn(f, e),
    m
  ), S = Yn(
    yn(d, e),
    m
  ), R = Kn(
    a,
    r
  ), E = x ? /* @__PURE__ */ w(Pt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t($e, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Pt,
      {
        alignItems: "center",
        spacing: `${wo}px`,
        sx: { mt: 2 },
        children: Array.from({ length: Qi }, (C, y) => /* @__PURE__ */ t(
          Y,
          {
            sx: {
              width: pe,
              height: pe,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ t(
              $e,
              {
                variant: "rounded",
                width: wt,
                height: wt
              }
            )
          },
          y
        ))
      }
    )
  ] }) : /* @__PURE__ */ w(Pt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t($e, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(Y, { sx: { height: 8 } }),
    Array.from({ length: Zi }, (C, y) => /* @__PURE__ */ t($e, { variant: "rounded", width: 28, height: 28 }, y))
  ] });
  return /* @__PURE__ */ t(go, { theme: o, children: /* @__PURE__ */ w(
    Y,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: S
      },
      children: [
        g && /* @__PURE__ */ w(
          Y,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: I,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: b,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t($e, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t($e, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(Y, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t($e, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !g && h > 0 && /* @__PURE__ */ t(
          Y,
          {
            sx: {
              position: "relative",
              width: h,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              Y,
              {
                sx: x ? {
                  position: "fixed",
                  top: x.gutterPx,
                  bottom: x.gutterPx,
                  left: x.gutterPx,
                  width: h - 2 * x.gutterPx,
                  borderRadius: `${x.radiusPx}px`,
                  bgcolor: b
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: h,
                  bgcolor: b
                },
                children: E
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
              "--lumora-content-padding": R,
              "--lumora-sticky-top": g ? `${I}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: g ? `${I}px` : 0
            },
            children: p ?? /* @__PURE__ */ w(Ie, { children: [
              /* @__PURE__ */ t($e, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t($e, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(Pt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: g ? 2 : 4 }, (C, y) => /* @__PURE__ */ t(
                $e,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                y
              )) }),
              /* @__PURE__ */ t($e, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, er = vo(wr("light")), po = vo(wr("dark")), Ji = (e) => e === "dark" ? po : er, ea = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = Dn();
  if (!o) {
    const i = Ji(e);
    return /* @__PURE__ */ w(go, { theme: i, children: [
      /* @__PURE__ */ t(Ko, {}),
      /* @__PURE__ */ t(
        Go,
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
  return /* @__PURE__ */ w(go, { theme: er, children: [
    /* @__PURE__ */ t(Ko, {}),
    /* @__PURE__ */ t(
      Ds,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: po.palette.background.default,
            color: po.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(Y, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ t(
      Go,
      {
        themeMode: "light",
        muiTheme: er,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(Y, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Go,
      {
        themeMode: "dark",
        muiTheme: po,
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
}, he = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, je = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, ta = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        je.ACCESS_TOKEN
      ), o = localStorage.getItem(
        je.REFRESH_TOKEN
      ), r = localStorage.getItem(je.USER);
      e && !localStorage.getItem(he.ACCESS_TOKEN) && localStorage.setItem(he.ACCESS_TOKEN, e), o && !localStorage.getItem(he.REFRESH_TOKEN) && localStorage.setItem(
        he.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(he.USER) && localStorage.setItem(he.USER, r), (e || o || r) && (localStorage.removeItem(je.ACCESS_TOKEN), localStorage.removeItem(je.REFRESH_TOKEN), localStorage.removeItem(je.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Ho = (e) => {
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
}, Uo = (e, o) => {
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
}, ts = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Vt = () => {
  try {
    ta();
    const e = Ho(he.ACCESS_TOKEN), o = Ho(he.REFRESH_TOKEN), r = Ho(he.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), ts(he.USER);
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
}, oa = () => {
  try {
    const { accessToken: e, refreshToken: o } = Vt();
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
}, os = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Z(
        "At least one token must be provided",
        ne.TOKEN_INVALID
      );
    return e && Uo(he.ACCESS_TOKEN, e), o && Uo(he.REFRESH_TOKEN, o), r && Uo(he.USER, JSON.stringify(r)), {
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
}, Yt = () => {
  try {
    return [
      he.ACCESS_TOKEN,
      he.REFRESH_TOKEN,
      he.USER,
      // Also clear legacy keys for complete cleanup
      je.ACCESS_TOKEN,
      je.REFRESH_TOKEN,
      je.USER
    ].map((n) => ts(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
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
}, ra = () => {
  try {
    const { user: e } = Vt();
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
}, qc = (e) => {
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
}, tr = (e, o = "Unknown") => {
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
}, na = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Zr.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, s = [];
  const i = (c, a) => {
    s.forEach(({ resolve: f, reject: d }) => {
      c ? d(c) : a && f(a);
    }), s = [];
  };
  return o.interceptors.request.use(
    (c) => {
      const { accessToken: a } = Vt();
      return a && c.headers && (c.headers.Authorization = `Bearer ${a}`), c;
    },
    (c) => Promise.reject(c)
  ), o.interceptors.response.use(
    (c) => c,
    async (c) => {
      var m;
      const a = c.config, f = (m = c.response) == null ? void 0 : m.status, d = (a == null ? void 0 : a.url) || "", p = d.includes("/auth/refresh");
      if (f !== 401 || a._retry || p)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: g } = Vt();
      if (!g) {
        const h = new Error(
          "No refresh token available for token refresh"
        );
        return tr(h, "AxiosClient - Token Refresh"), Yt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((h, x) => {
          s.push({ resolve: h, reject: x });
        }).then((h) => {
          const {
            accessToken: x,
            refreshToken: I
          } = h;
          if (a.headers && (a.headers.Authorization = `Bearer ${x}`), d.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const b = JSON.parse(
                  a.data || "{}"
                );
                b.refresh_token = I, a.data = JSON.stringify(b);
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
        }).catch((h) => Promise.reject(h));
      r = !0, n = Zr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: g
        }
      );
      try {
        const h = await n, { accessToken: x, refreshToken: I } = h.data;
        if (os(x, I, null), i(null, {
          accessToken: x,
          refreshToken: I
        }), a.headers && (a.headers.Authorization = `Bearer ${x}`), d.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const b = JSON.parse(
                a.data || "{}"
              );
              b.refresh_token = I, a.data = JSON.stringify(b);
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
      } catch (h) {
        return tr(
          h,
          "AxiosClient - Token Refresh Failed"
        ), i(h), Yt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(h);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, sa = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Vt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return os(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      tr(s, "TokenValidator - Refresh Failed");
    }
  return Yt(), o ? o() : window.location.href = "/login", !1;
}, Gt = ({ size: e = 20 }) => /* @__PURE__ */ w(
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
), vn = Se(yr), Ke = "#09C1AE", mo = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ke} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), ia = (e) => ({
  ...mo(Q, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${Q - 2}px`,
    zIndex: 1,
    background: `${Kt(Ke, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), Sn = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = vr(), f = l.useContext(Rt), d = ze().palette.mode === "dark", p = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", g = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ w(
    rt,
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
        borderColor: r ? Ke : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: i,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Ke}`,
          outlineOffset: 2
        },
        ...n && mo(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Gt, { size: 20 }),
        /* @__PURE__ */ t(
          ue,
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
        s && /* @__PURE__ */ t(qi, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && f && jo ? /* @__PURE__ */ t(ve, { title: p, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    be,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: pe,
        height: pe,
        borderRadius: `${Q}px`,
        ...Kt(Ke, d, "clear"),
        ...r && {
          boxShadow: `${Kt(Ke, d, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${vn.duration}ms ${vn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [_e]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && ia(d)
      },
      children: /* @__PURE__ */ t(Gt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(ve, { title: p, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    be,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": f || void 0,
      sx: {
        width: f ? pe : 44,
        height: f ? pe : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Ke : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && mo(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Gt, { size: f ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ t(ve, { title: p, placement: "left", children: /* @__PURE__ */ t(
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
        outline: r ? `2px solid ${Ke}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Ke}` },
        ...n && mo(16, "background.paper")
      },
      children: /* @__PURE__ */ t(_, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Gt, { size: 26 }) })
    }
  ) });
}, lo = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(ks, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ w(Fs, { children: [
  /* @__PURE__ */ t(Ps, { fontSize: "small" }),
  /* @__PURE__ */ t(ue, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ue,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    kn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, kt = 24, aa = 720, ca = 1140, la = 1250, da = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: s,
  sidebarWidthPx: i,
  bottomOffsetPx: c,
  fullScreen: a,
  fullScreenBottom: f = "0px",
  onClose: d
}) => {
  l.useEffect(() => {
    if (!e || !d)
      return;
    const x = (I) => {
      I.key === "Escape" && d();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [e, d]);
  const p = r === "docked", g = kt + c;
  let m;
  a ? m = {
    top: 0,
    left: 0,
    right: 0,
    bottom: f,
    borderRadius: 0
  } : p ? m = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : m = {
    bottom: g,
    ...n === "left" ? { left: i + kt } : { right: kt },
    width: s,
    maxWidth: `calc(100vw - ${kt * 2}px)`,
    height: `min(${aa}px, calc(100vh - ${g + kt}px))`,
    borderRadius: "12px"
  };
  const h = /* @__PURE__ */ t(
    ar,
    {
      role: p ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: p ? ca : la,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...m
      },
      children: o
    }
  );
  return p ? /* @__PURE__ */ t(Bs, { direction: "left", in: e, mountOnEnter: !0, children: h }) : /* @__PURE__ */ t(
    Ws,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: h
    }
  );
}, ua = 180, wn = 250, fa = "#01584F", ha = ({
  text: e,
  testId: o
}) => {
  const r = l.useRef(null), [n, s] = l.useState(!1), i = l.useCallback(() => {
    const c = r.current;
    c && s(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    i();
  }, [i, e]), l.useEffect(() => {
    const c = r.current;
    if (!c)
      return;
    const a = new ResizeObserver(() => i());
    return a.observe(c), () => a.disconnect();
  }, [i]), /* @__PURE__ */ t(
    ve,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        ue,
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
}, rs = (e, o, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : o, c = e ? fa : o;
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
}, ns = ({ link: e }) => /* @__PURE__ */ w(Le, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ t(
    _,
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
    ha,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), ss = (e, o, r) => r ? e : /* @__PURE__ */ t(ve, { title: o, placement: "right", arrow: !0, children: e }), pa = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: c
}) => {
  const a = ze(), [f, d] = l.useState(null), [p, g] = l.useState(!1), m = l.useRef(
    null
  ), h = l.useRef(null), x = l.useRef(null), I = l.useRef(!1), b = l.useRef(!1), S = l.useId(), R = () => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, E = () => {
    R(), m.current = setTimeout(() => {
      g(!1), m.current = null;
    }, ua);
  }, C = () => {
    R(), g(!0);
  };
  l.useEffect(() => {
    if (!p)
      return;
    const D = (N) => {
      var M;
      N.key === "Escape" && (g(!1), (M = x.current) == null || M.focus());
    };
    return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
  }, [p]), l.useEffect(() => {
    if (!p || !b.current)
      return;
    const D = globalThis.requestAnimationFrame(() => {
      var M;
      const N = (M = h.current) == null ? void 0 : M.querySelector(
        '[role="menuitem"]'
      );
      N == null || N.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame(D);
  }, [p]);
  const y = qe(e, o), { activeBg: v, sx: T } = rs(
    s,
    n,
    y,
    c
  ), j = /* @__PURE__ */ t(
    be,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        I.current || C();
      },
      onBlur: (D) => {
        var M;
        const N = D.relatedTarget;
        N && ((M = h.current) != null && M.contains(N)) || E();
      },
      onKeyDown: (D) => {
        D.key === "ArrowDown" && (D.preventDefault(), b.current = !0, C());
      },
      onClick: (D) => {
        D.preventDefault(), D.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": p,
      "aria-controls": p ? S : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: T,
      children: c ? /* @__PURE__ */ t(ns, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ w(
    _,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          _,
          {
            ref: d,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              I.current = !0, C();
            },
            onMouseLeave: () => {
              I.current = !1, E();
            },
            children: ss(j, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          ir,
          {
            open: p && !!f,
            anchorEl: f,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (D) => D.zIndex.modal },
            children: /* @__PURE__ */ t(
              ar,
              {
                ref: h,
                elevation: 0,
                onMouseEnter: R,
                onMouseLeave: E,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: i,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: wn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  cr,
                  {
                    id: S,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: wn
                    },
                    children: z(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function z(D, N, M) {
    return D.flatMap((L) => {
      const A = vt(N, L);
      return St(L) ? [
        /* @__PURE__ */ t(
          zs,
          {
            disableSticky: !0,
            title: L.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + M * 1.5,
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
        ...z(L.subitems, A, M + 1)
      ] : [
        /* @__PURE__ */ w(
          Je,
          {
            role: "menuitem",
            title: L.text,
            disabled: !L.path,
            selected: We(L, o),
            onClick: (J) => {
              J.preventDefault(), L.path && (r == null || r(L.path)), g(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + M * 1.5,
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
                bgcolor: v,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: v
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              L.icon ? /* @__PURE__ */ t(ye, { children: L.icon }) : null,
              /* @__PURE__ */ t(
                Be,
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
}, ma = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = rs(
    s,
    n,
    c,
    i
  );
  return ss(
    /* @__PURE__ */ t(
      be,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (f) => {
          f.preventDefault(), f.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: a,
        children: i ? /* @__PURE__ */ t(ns, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, ga = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(et, { sx: { width: "60%", borderColor: "divider" } })
  }
), xa = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(et, { sx: { width: "60%", borderColor: "divider" } })
  }
), En = (e, o) => e.map((r, n) => /* @__PURE__ */ w(l.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(ga, {}) : null
] }, n)), ba = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: c = !1
}) => {
  const a = (d, p) => St(d) ? /* @__PURE__ */ t(
    pa,
    {
      link: d,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: p,
      surfaceBackgroundColor: i,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    ma,
    {
      link: d,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: p,
      railShowTitles: c
    }
  ), f = c ? 1.25 : 1;
  return /* @__PURE__ */ w(
    Le,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: f
      },
      children: [
        En(e, (d) => a(d, !1)),
        o.length > 0 ? /* @__PURE__ */ w(Ie, { children: [
          /* @__PURE__ */ t(xa, {}),
          /* @__PURE__ */ t(_, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Le, { gap: f, alignItems: "center", children: En(
            o,
            (d) => a(d, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, ya = (e) => e ? zn(e) : "USER", va = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), Rn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, or = ({ count: e }) => e ? /* @__PURE__ */ t(
  _,
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
) : null, Er = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Hs,
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
    children: va(e)
  }
), is = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ w(Ie, { children: [
  /* @__PURE__ */ t(Er, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ w(
    _,
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
          ue,
          {
            variant: "body2",
            sx: { ...Rn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ue,
          {
            variant: "caption",
            sx: { ...Rn, opacity: 0.8, color: "inherit" },
            children: ya(o)
          }
        )
      ]
    }
  )
] }), In = {
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
}, as = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: s,
  showNotifications: i,
  notificationCount: c,
  onNotificationsClick: a,
  userName: f = "User",
  userRole: d,
  userAvatar: p,
  menuItems: g = [],
  showSettings: m,
  onSettingsClick: h,
  showThemeToggler: x,
  theme: I,
  onThemeToggle: b,
  onLogout: S
}) => {
  const R = (E) => () => {
    o(), E == null || E();
  };
  return /* @__PURE__ */ w(
    Us,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: In[r].anchor,
      transformOrigin: In[r].transform,
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
              is,
              {
                name: f,
                role: d,
                avatar: p,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(et, {}),
        i && /* @__PURE__ */ w(Je, { onClick: R(a), children: [
          /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(Wn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Be, { children: "Notifications" }),
          /* @__PURE__ */ t(or, { count: c })
        ] }),
        g.map((E) => /* @__PURE__ */ w(Je, { onClick: R(E.onClick), children: [
          E.icon && /* @__PURE__ */ t(ye, { children: E.icon }),
          /* @__PURE__ */ t(Be, { inset: !E.icon, children: E.label }),
          /* @__PURE__ */ t(or, { count: E.badge })
        ] }, E.key)),
        m && /* @__PURE__ */ w(Je, { onClick: R(h), children: [
          /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(Gs, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Be, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(et, {}, "theme-divider"),
          /* @__PURE__ */ w(_, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              ue,
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
              Xs,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: I,
                onChange: (E, C) => C && C !== I && (b == null ? void 0 : b()),
                disabled: !b,
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
                  /* @__PURE__ */ t(Qr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Qr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(et, {}),
        /* @__PURE__ */ w(
          Je,
          {
            onClick: R(S),
            sx: {
              color: I === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ye, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Pn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Be, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, cs = 64, Sa = 2, Ft = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: s,
  activeColor: i,
  activeBackground: c,
  ariaLabel: a,
  haspopup: f,
  isPage: d = !1,
  testId: p
}) => /* @__PURE__ */ w(
  rt,
  {
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": f,
    "aria-expanded": f ? n : void 0,
    "aria-current": d && n ? "page" : void 0,
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
        _,
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
        ue,
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
), wa = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: i,
  assistantActive: c,
  showProfile: a,
  background: f,
  color: d,
  activeColor: p,
  activeBackground: g,
  pinnedLinks: m = [],
  activePath: h,
  onLinkClick: x,
  ...I
}) => {
  const b = m.filter((T) => T.path).slice(0, Sa), [S, R] = l.useState(
    null
  ), { userName: E = "User", userAvatar: C, avatarColor: y } = I, v = { color: d, activeColor: p, activeBackground: g };
  return /* @__PURE__ */ w(
    ar,
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
        height: `calc(${cs}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: f,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Ft,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Fn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...v
          }
        ),
        b.map((T) => /* @__PURE__ */ t(
          Ft,
          {
            label: T.text,
            icon: T.icon,
            onClick: () => x == null ? void 0 : x(T.path),
            active: qe(T, h),
            isPage: !0,
            testId: `mobile-nav-link-${T.text}`,
            ...v
          },
          T.path
        )),
        s && /* @__PURE__ */ t(
          Ft,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ t(
              _,
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
                children: /* @__PURE__ */ t(Gt, { size: 18 })
              }
            ),
            onClick: i,
            active: c,
            testId: "mobile-nav-nexa",
            ...v
          }
        ),
        r && /* @__PURE__ */ t(
          Ft,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(lr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...v
          }
        ),
        a && /* @__PURE__ */ w(Ie, { children: [
          /* @__PURE__ */ t(
            Ft,
            {
              label: "Account",
              ariaLabel: `Account menu for ${E}`,
              icon: /* @__PURE__ */ t(
                Er,
                {
                  name: E,
                  avatar: C,
                  color: y,
                  size: 26
                }
              ),
              onClick: (T) => R(T.currentTarget),
              active: !!S,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...v
            }
          ),
          /* @__PURE__ */ t(
            as,
            {
              anchorEl: S,
              onClose: () => R(null),
              placement: "above-end",
              width: 280,
              ...I
            }
          )
        ] })
      ]
    }
  );
}, Ea = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Ks,
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
      Le,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(_, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            kn,
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
), Ra = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: s,
  brandMenuOpen: i,
  background: c,
  color: a,
  brandColor: f = a,
  endContent: d
}) => /* @__PURE__ */ t(
  js,
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
    children: /* @__PURE__ */ w(Vs, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        be,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(Fn, {})
        }
      ),
      /* @__PURE__ */ t(
        xo,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: s,
          menuOpen: i,
          color: f,
          testId: "mobile-brand"
        }
      ),
      d ? /* @__PURE__ */ t(_, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: d }) : null
    ] })
  }
), Rr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const c = vr(), a = l.useContext(Rt), f = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    ve,
    {
      title: f,
      placement: s,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        be,
        {
          onClick: o,
          "aria-label": f,
          "data-testid": i,
          sx: {
            ...a ? {
              width: pe,
              height: pe
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
            Bn,
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
              children: /* @__PURE__ */ t(Wn, {})
            }
          )
        }
      )
    }
  );
}, ls = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ia = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, _n = Se(Zn), Cn = Se(Ro), Tn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', _a = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = ze().palette.mode === "dark", c = Et(), a = l.useRef(null), f = l.useRef(null), d = (m) => {
    var h;
    m !== e && (o == null || o()), (h = (m === "light" ? a : f).current) == null || h.focus();
  }, p = (m) => {
    if (!(m.key === "Tab" || m.key === "Escape"))
      switch (m.stopPropagation(), m.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          m.preventDefault(), d(e === "light" ? "dark" : "light");
          break;
        case "Home":
          m.preventDefault(), d("light");
          break;
        case "End":
          m.preventDefault(), d("dark");
          break;
      }
  }, g = (m, h, x, I) => {
    const b = e === m;
    return /* @__PURE__ */ t(
      rt,
      {
        ref: I,
        role: "radio",
        "aria-checked": b,
        "aria-label": h,
        tabIndex: b ? 0 : -1,
        onClick: () => d(m),
        "data-testid": `theme-segment-${m}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${Q}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...s && b ? br(i, c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": b ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: i ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${dt(r, 0.6)}`
          },
          ...ls
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ w(
    Le,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: p,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${Q}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        g("light", "Light", qs, a),
        g("dark", "Dark", Ys, f)
      ]
    }
  );
}, Ca = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: s,
  userName: i,
  userEmail: c,
  roleLabel: a,
  accentColor: f,
  tint: d,
  showThemeToggler: p,
  theme: g,
  onThemeToggle: m,
  onProfileClick: h,
  onLinkClick: x,
  menuItems: I = [],
  onLogout: b,
  glass: S = !1
}) => {
  const R = ze(), E = R.palette.mode === "dark", C = l.useRef(null), y = pr(R.palette.background.paper), v = Sr({
    enabled: S,
    isDark: E,
    selector: Tn,
    radius: Q
  }), [T, j] = l.useState(null);
  l.useEffect(() => {
    if (!T || typeof ResizeObserver > "u")
      return;
    const L = new ResizeObserver(() => {
      var A;
      (A = C.current) == null || A.updatePosition();
    });
    return L.observe(T), () => L.disconnect();
  }, [T]);
  const z = (L) => {
    r(), L == null || L();
  }, D = (L) => {
    r(), L.onClick ? L.onClick() : L.path && (x == null || x(L.path));
  }, N = {
    borderRadius: S ? `${Q}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, M = /* @__PURE__ */ w(Le, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ w(_, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ue, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: i }),
      c ? /* @__PURE__ */ t(
        ue,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary", fontSize: 12, lineHeight: "18px" },
          children: c
        }
      ) : null,
      a ? /* @__PURE__ */ t(
        ue,
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
      h ? /* @__PURE__ */ t(
        ue,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: E ? "#ffffff" : f,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    dr,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: C,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...S ? {
        slots: { transition: sr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: j,
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
        _,
        {
          "data-testid": "account-menu",
          "data-glass": S ? "true" : void 0,
          sx: S ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${Q}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${Tn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Ia, width: n, minWidth: n },
          children: [
            S ? /* @__PURE__ */ t(
              It,
              {
                isDark: E,
                solid: y,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${gr} ${_n.duration}ms ${_n.easing} both`,
                  [_e]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ w(
              _,
              {
                ...v.containerProps,
                sx: S ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${xr} ${Cn.duration}ms ${Cn.easing} 70ms both`,
                  [_e]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  v.lens,
                  h ? /* @__PURE__ */ t(
                    rt,
                    {
                      onClick: () => z(h),
                      "data-testid": "account-menu-header",
                      sx: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        transition: "background-color 150ms ease",
                        "& [data-hint]": { display: "none" },
                        "&:hover, &.Mui-focusVisible": {
                          bgcolor: d,
                          "& [data-hint]": { display: "block" },
                          "& [data-role]": { display: "none" }
                        },
                        ...ls
                      },
                      children: M
                    }
                  ) : /* @__PURE__ */ t(_, { "data-testid": "account-menu-header", children: M }),
                  /* @__PURE__ */ t(et, {}),
                  p ? /* @__PURE__ */ w(
                    _,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...N,
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
                        /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(Zs, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ue, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          _a,
                          {
                            glass: S,
                            mode: g,
                            onToggle: m,
                            accentColor: f,
                            tint: d
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ w(
                    cr,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: p ? 0 : 0.5, pb: 0.5 },
                      children: [
                        I.map((L) => /* @__PURE__ */ w(
                          Je,
                          {
                            onClick: () => D(L),
                            "data-testid": `menu-item-${L.key}`,
                            sx: N,
                            children: [
                              /* @__PURE__ */ t(ye, { children: L.icon }),
                              /* @__PURE__ */ t(ue, { sx: { flex: 1 }, children: L.label }),
                              /* @__PURE__ */ t(or, { count: L.badge })
                            ]
                          },
                          L.key
                        )),
                        b ? /* @__PURE__ */ t(et, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ w(
                          Je,
                          {
                            onClick: () => z(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...N,
                              color: E ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(ye, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Pn, { fontSize: "small" }) }),
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
}, Ta = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Aa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: s,
  title: i,
  onBrandClick: c,
  brandMenuOpen: a,
  brandColor: f,
  headerBackgroundColor: d,
  headerForegroundColor: p,
  activeAccentColor: g = "#01584f",
  groupAccentColor: m,
  activeForegroundColor: h,
  foregroundColor: x,
  surfaceBackgroundColor: I,
  flyoutSurfaceColor: b,
  collapsed: S,
  expandedWidth: R,
  collapsedWidth: E,
  topContent: C,
  submenuMode: y,
  color: v,
  hoverColor: T,
  avatarColor: j,
  showProfile: z = !0,
  userName: D = "User",
  userEmail: N,
  userRole: M,
  userAvatar: L,
  showNotifications: A = !0,
  notificationCount: J = 0,
  onNotificationsClick: we,
  whatsNewCount: G = 0,
  onProfileClick: P,
  menuItems: X,
  onLogout: ee,
  theme: oe = "light",
  showThemeToggler: $ = !0,
  onThemeToggle: U
}) => {
  const q = ze(), H = q.palette.mode === "dark", V = I ?? (H ? q.palette.background.paper : "#ffffff"), ce = v ?? x ?? (H ? q.palette.text.primary : g), W = T ?? m ?? Xt(g), Ce = j ?? g, le = l.useRef(null), [De, Te] = l.useState(!1), de = M ? zn(M) : void 0, re = (Ye) => /* @__PURE__ */ t(
    Er,
    {
      name: D,
      avatar: L,
      color: Ce,
      size: Ye
    }
  ), me = J + G, se = S && y === "flyout", Ne = A ? /* @__PURE__ */ t(
    Rr,
    {
      count: me,
      onClick: we,
      color: ce,
      hoverColor: W,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Ge = z ? /* @__PURE__ */ w(
    rt,
    {
      ref: le,
      onClick: () => Te(!0),
      "aria-haspopup": "menu",
      "aria-expanded": De,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: S ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 40px button,
        // matching the rail's icon buttons
        p: se ? "2px" : 0.75,
        borderRadius: "10px",
        bgcolor: De ? W : "transparent",
        "&:hover": { bgcolor: W },
        ...Ta
      },
      children: [
        S && !se && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Bn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !me,
              children: re(36)
            }
          )
        ) : re(S ? 36 : 40),
        S ? null : /* @__PURE__ */ w(_, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ue,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: ce, lineHeight: 1.3 },
              children: D
            }
          ),
          de ? /* @__PURE__ */ t(
            ue,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: ce,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: de
            }
          ) : null
        ] })
      ]
    }
  ) : null, Ve = !!Ne && (!S || se || !Ge);
  return /* @__PURE__ */ w(
    _,
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
          Qo,
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
            brandColor: f,
            headerBackgroundColor: d,
            headerForegroundColor: p,
            activeAccentColor: g,
            groupAccentColor: m,
            activeForegroundColor: h,
            foregroundColor: x,
            surfaceBackgroundColor: V,
            flyoutSurfaceColor: b,
            collapsed: S,
            expandedWidth: R,
            collapsedWidth: E,
            topContent: C,
            footer: Ge || Ve ? /* @__PURE__ */ w(
              Le,
              {
                direction: se ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  se && Ve ? Ne : null,
                  Ge,
                  !se && Ve ? Ne : null
                ]
              }
            ) : void 0,
            submenuMode: y
          }
        ),
        z ? /* @__PURE__ */ t(
          Ca,
          {
            open: De,
            anchorEl: le.current,
            onClose: () => Te(!1),
            width: Math.max(R - 16, 240),
            renderAvatar: re,
            userName: D,
            userEmail: N,
            roleLabel: de,
            accentColor: g,
            tint: W,
            showThemeToggler: $,
            theme: oe,
            onThemeToggle: U,
            onProfileClick: P,
            onLinkClick: n,
            menuItems: X,
            onLogout: ee,
            glass: y === "flyout"
          }
        ) : null
      ]
    }
  );
}, An = Se(Zn), On = Se(Ro), $n = 240, Oa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, $a = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: c = !1
}) => {
  const a = ze(), f = a.palette.mode === "dark", d = !!e, p = pr(a.palette.background.paper), g = Sr({
    enabled: c,
    isDark: f,
    selector: ".MuiMenuItem-root",
    radius: Q
  }), m = /* @__PURE__ */ t(
    cr,
    {
      autoFocusItem: d,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((h) => {
        const x = h.key === n, I = h.accentColor ?? i;
        return /* @__PURE__ */ w(
          Je,
          {
            selected: x,
            onClick: () => s(h),
            "data-testid": `platform-item-${h.key}`,
            sx: {
              borderRadius: c ? `${Q}px` : "8px",
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
              /* @__PURE__ */ t(ye, { sx: { minWidth: 24 }, children: /* @__PURE__ */ t(
                _,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: I,
                    boxShadow: c ? `0 0 0 3px ${f ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Be,
                {
                  primary: h.name,
                  secondary: h.description,
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
                Qs,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: I }
                }
              ) : null
            ]
          },
          h.key
        );
      })
    }
  );
  return /* @__PURE__ */ t(
    dr,
    {
      open: d,
      anchorEl: e,
      onClose: o,
      onClick: (h) => h.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: sr },
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
        _,
        {
          "data-testid": "platform-menu",
          "data-glass": c ? "true" : void 0,
          sx: c ? {
            position: "relative",
            minWidth: $n,
            borderRadius: `${Q}px`
          } : { ...Oa, minWidth: $n },
          children: c ? /* @__PURE__ */ w(Ie, { children: [
            /* @__PURE__ */ t(
              It,
              {
                isDark: f,
                solid: p,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${gr} ${An.duration}ms ${An.easing} both`,
                  [_e]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ w(
              _,
              {
                ...g.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${xr} ${On.duration}ms ${On.easing} 70ms both`,
                  [_e]: { animation: "none" }
                },
                children: [
                  g.lens,
                  m
                ]
              }
            )
          ] }) : m
        }
      )
    }
  );
}, Ma = ({ children: e, anchorEl: o, ...r }) => {
  const n = l.useRef(null), s = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ w(
    _,
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
          $a,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, La = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var C;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: f,
    onNotificationsClick: d,
    userName: p = "User",
    userRole: g,
    userAvatar: m
  } = i, h = l.useRef(null), [x, I] = l.useState(
    null
  ), b = !!x, S = l.useRef(e);
  l.useEffect(() => {
    e && !S.current && I(null), S.current = e;
  }, [e]);
  const R = l.useContext(Rt);
  if (!a && !n)
    return null;
  const E = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ w(Ie, { children: [
    /* @__PURE__ */ w(
      Le,
      {
        ref: h,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            ve,
            {
              title: e ? p : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                rt,
                {
                  onClick: () => I(h.current),
                  "aria-label": `Account menu for ${p}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": b,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? R ? "2px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: b ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...E
                  },
                  children: /* @__PURE__ */ t(
                    is,
                    {
                      name: p,
                      role: g,
                      avatar: m,
                      avatarColor: c,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          a && /* @__PURE__ */ t(
            Rr,
            {
              count: f + s,
              onClick: d,
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
      as,
      {
        anchorEl: x,
        onClose: () => I(null),
        placement: e ? "beside" : "above",
        width: e || (C = h.current) == null ? void 0 : C.clientWidth,
        ...i
      }
    )
  ] });
}, Da = 120, Na = 300, Mn = Se(qn), Ln = Se(Ro), ka = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Fa = 'input, textarea, [contenteditable="true"]', rr = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Fa)) == null || o.focus();
}, Pa = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: s,
  color: i,
  hoverColor: c
}) => {
  const a = vr(), f = l.useContext(Rt), d = l.useRef(null), [p, g] = l.useState(null);
  return l.useEffect(() => {
    o === "full" && n && (rr(d.current), s == null || s());
  }, [o, n, s]), o === "full" ? /* @__PURE__ */ t(
    _,
    {
      ref: d,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && f ? /* @__PURE__ */ t(
    Wa,
    {
      search: e,
      color: i,
      railTooltip: a
    }
  ) : /* @__PURE__ */ w(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(ve, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          be,
          {
            "aria-label": "Search",
            onClick: (m) => o === "expand" ? r == null ? void 0 : r() : g(m.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: i,
              borderRadius: "8px",
              "&:hover": { bgcolor: c }
            },
            children: /* @__PURE__ */ t(lr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          dr,
          {
            open: !!p,
            anchorEl: p,
            onClose: () => g(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (m) => rr(m)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, Wa = ({ search: e, color: o, railTooltip: r }) => {
  const n = ze().palette.mode === "dark";
  ni(n, Yo(o, n ? 0.3 : 0.35));
  const s = `rgb(${Et()})`, i = pr(n ? "#1e2430" : "#ffffff"), c = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${Q}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: s
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${Q}px`,
      "&.Mui-focusVisible": { borderColor: s }
    }
  }, a = l.useRef(null), f = l.useRef(null), [d, p] = l.useState(!1), g = l.useRef(!1), m = l.useRef(void 0), h = l.useRef(void 0), x = () => {
    clearTimeout(m.current), clearTimeout(h.current);
  }, I = l.useCallback(() => {
    x(), g.current = !1, p(!1);
  }, []), b = () => {
    clearTimeout(h.current), d || (clearTimeout(m.current), m.current = setTimeout(
      () => p(!0),
      Da
    ));
  }, S = () => {
    clearTimeout(m.current), clearTimeout(h.current), h.current = setTimeout(() => {
      !g.current && !ka(f.current) && p(!1);
    }, Na);
  };
  return l.useEffect(() => x, []), l.useEffect(() => {
    if (!d)
      return;
    const R = setTimeout(() => rr(f.current)), E = (y) => {
      var T, j;
      const v = y.target;
      !((T = f.current) != null && T.contains(v)) && !((j = a.current) != null && j.contains(v)) && I();
    }, C = (y) => {
      var v;
      y.key === "Escape" && (I(), (v = a.current) == null || v.focus());
    };
    return document.addEventListener("pointerdown", E), document.addEventListener("keydown", C), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", E), document.removeEventListener("keydown", C);
    };
  }, [d, I]), /* @__PURE__ */ w(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          ve,
          {
            title: d ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              be,
              {
                ref: a,
                "aria-label": "Search",
                "aria-expanded": d,
                onMouseEnter: b,
                onMouseLeave: S,
                onClick: () => {
                  x(), g.current = !0, p(!0);
                },
                sx: {
                  width: pe,
                  height: pe,
                  color: o,
                  borderRadius: `${Q}px`
                },
                children: /* @__PURE__ */ t(
                  lr,
                  {
                    sx: { fontSize: wt }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          ir,
          {
            open: d,
            anchorEl: a.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ w(
              _,
              {
                ref: f,
                "data-testid": "sidebar-search-card",
                onMouseEnter: b,
                onMouseLeave: S,
                sx: {
                  position: "relative",
                  width: 320,
                  p: 1,
                  borderRadius: `${Q}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    It,
                    {
                      isDark: n,
                      solid: i,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${gr} ${Mn.duration}ms ${Mn.easing} both`,
                        [_e]: { animation: "none" }
                      }
                    }
                  ),
                  /* @__PURE__ */ t(
                    _,
                    {
                      sx: {
                        position: "relative",
                        // The host's field, set into the glass: an outlined
                        // input or button becomes a recessed glass well.
                        // Classes repeat to outrank the host's own styles.
                        ...c,
                        animation: `${xr} ${Ln.duration}ms ${Ln.easing} 60ms both`,
                        [_e]: { animation: "none" }
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
}, Ba = 80, za = 300, Ga = (e) => {
  const o = l.useRef(/* @__PURE__ */ new WeakSet()), r = l.useRef(void 0), n = l.useRef(void 0), [s, i] = l.useState(!1), [c, a] = l.useState(!1), f = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  return l.useEffect(() => {
    if (!e) {
      f(), i(!1), a(!1);
      return;
    }
    const p = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), a(!1);
      }, za));
    }, g = (m) => {
      o.current.has(m) || p();
    };
    return document.addEventListener("mouseover", g), document.documentElement.addEventListener("mouseleave", p), () => {
      f(), document.removeEventListener("mouseover", g), document.documentElement.removeEventListener(
        "mouseleave",
        p
      );
    };
  }, [e]), { shown: e && (s || c), rootProps: {
    onMouseOver: (p) => {
      o.current.add(p.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, Ba));
    },
    onFocus: (p) => {
      Ha(p.target) && a(!0);
    },
    onBlur: (p) => {
      const g = p.relatedTarget;
      (!g || !p.currentTarget.contains(g)) && a(!1);
    },
    onKeyDown: (p) => {
      p.key === "Escape" && (a(!1), i(!1));
    }
  } };
}, Ha = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Ua = 100, Xa = () => {
  const e = l.useRef(null), o = l.useRef(void 0), r = l.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = l.useState(!1), [i, c] = l.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return l.useEffect(() => {
    const d = (g) => {
      r.current.has(g) || (a(), s(!1));
    }, p = () => {
      a(), s(!1);
    };
    return document.addEventListener("mouseover", d), document.documentElement.addEventListener("mouseleave", p), () => {
      a(), document.removeEventListener("mouseover", d), document.documentElement.removeEventListener(
        "mouseleave",
        p
      );
    };
  }, []), l.useEffect(() => {
    if (!i)
      return;
    const d = (p) => {
      var g;
      (g = e.current) != null && g.contains(p.target) || c(!1);
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i]), {
    expanded: n || i,
    pin: () => c(!0),
    rootProps: {
      ref: e,
      onMouseOver: (d) => {
        r.current.add(d.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, s(!0);
        }, Ua));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (d) => {
        const p = d.relatedTarget;
        p && !d.currentTarget.contains(p) && c(!1);
      },
      onKeyDown: (d) => {
        d.key === "Escape" && c(!1);
      }
    }
  };
}, Ka = 300, Xo = 288, ja = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Va = 6, Ya = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", qa = 68, Za = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Qa = typeof window > "u" ? uo : Ls, Zc = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: c = "rail",
  sidebarSubmenu: a = "expand",
  sidebarAutoHide: f = !1,
  mobileNavigation: d = "bottom-bar",
  mobileBottomBarLinks: p,
  logo: g,
  onBrandClick: m,
  searchComponent: h,
  brandColor: x,
  contentPadding: I = Xn,
  userMenuItems: b,
  sidebarBackgroundColor: S,
  sidebarHeaderBackgroundColor: R,
  groupAccentColor: E,
  activeSidebarForegroundColor: C,
  enableRefreshToken: y = !1,
  holdSessionSkeleton: v = !1,
  sessionSkeletonContent: T,
  activePath: j,
  onLinkClick: z,
  showProfile: D = !0,
  userName: N,
  userRole: M,
  userAvatar: L,
  userEmail: A,
  onLogout: J,
  showSettings: we = !0,
  onSettingsClick: G,
  onProfileClick: P,
  showNotifications: X = !0,
  notificationCount: ee = 0,
  NotificationSidebarContent: oe,
  whatsNewCount: $ = 0,
  onNotificationsClick: U,
  platforms: q,
  currentPlatformKey: H,
  onPlatformSelect: V,
  onVerify: ce,
  alertProps: W,
  style: Ce,
  sidebarStyles: le,
  contentStyles: De,
  accentColor: Te,
  sidebarAccentColor: de,
  sidebarForegroundColor: re,
  contentBackgroundColor: me,
  theme: se = "light",
  darkModeSelector: Ne,
  showThemeToggler: Ge = !1,
  onThemeToggle: Ve,
  GlobalChatSidebar: ft,
  useChatSidebar: Ye,
  chatPanelMode: Zt = "docked",
  chatPanelPosition: _o = "right",
  chatPanelWidth: _t = 420,
  onChatClose: Co,
  showAssistant: nt = !1,
  assistantPlacement: Ct = "sidebar",
  assistantShortcut: Qt = "j",
  onAssistantClick: st,
  assistantActive: ht = !1,
  assistantBusy: Tt = !1,
  customNavbar: Jt,
  customNavbarProps: To,
  redirectToLogin: pt,
  apiBaseUrl: mt
}) => {
  const At = Dn(), u = Nn(At.breakpoints.down("md")), F = Vr(
    () => vo(wr(se)),
    [se]
  ), K = se === "dark", k = Te ?? "#01584f", B = de ?? k, te = Yn(
    typeof me == "object" ? me[se] : me,
    K
  ), fe = c === "collapsible", ae = c === "panel", Ae = ae && s && !u, He = c === "rail-labeled", ds = fe || He, ke = Vn(
    S,
    K
  ), Ao = R ?? ke, Fe = re ?? (K ? "#ffffff" : B), Ot = E ?? Xt(Fe), $t = R ? Vo(Ao) : Fe, Ir = (O) => /* @__PURE__ */ t(
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
  ), eo = x ?? $t, [_r, Oo] = ct(
    null
  ), $o = ((q == null ? void 0 : q.length) ?? 0) > 1, us = Yr(() => Oo(null), []), fs = (O) => {
    Oo(null), V ? V(O) : O.key !== H && O.url && window.location.assign(O.url);
  }, Cr = (O) => $o ? /* @__PURE__ */ t(
    Ma,
    {
      anchorEl: _r,
      onClose: us,
      platforms: q,
      currentKey: H,
      onSelect: fs,
      accentColor: k,
      glass: a === "flyout" && (fe || ae) && !u,
      children: O
    }
  ) : O, to = $o ? (O) => Oo(O.currentTarget) : m, oo = $o ? !!_r : void 0, Mo = Cr(
    g ?? Ir(eo)
  ), hs = Cr(
    g ?? Ir(x ?? Fe)
  ), Lo = Xa(), Oe = Eo(a, c), Pe = Oe || !Lo.expanded, it = s && !u && ii(f, a, c), Mt = Ga(it), Tr = Oe ? "popover" : "expand", Ar = Oe ? Ht : Wt, Or = Oe ? "transparent" : ke, $r = Oe && !R ? "transparent" : Ao, [ps, Mr] = ct(!1), ms = Yr(() => Mr(!1), []), Ue = jn({
    showSidebar: s,
    isMobile: u,
    sidebarVariant: c,
    sidebarSubmenu: a,
    sidebarAutoHide: f
  }), [Lr, at] = ct(!1), [Dr, Do] = ct(!1), xe = u && d === "bottom-bar", Nr = `calc(${cs}px + env(safe-area-inset-bottom, 0px))`, [No, kr] = ct({ open: !1, tab: "notifications" }), Fr = () => kr((O) => ({ ...O, open: !1 })), gs = X && !!oe, [xs, bs] = ct(!0), [ys, vs] = ct(!1), ko = Ye == null ? void 0 : Ye(), Pr = (ko == null ? void 0 : ko.isOpen) ?? !1, Wr = Zt === "floating" ? "floating" : "docked", Ss = Wr === "docked" && Pr && ft && !u ? _t : 0, ro = zo(ce), Br = zo(!1), zr = Vr(
    () => na(mt),
    [mt]
  );
  uo(() => {
    ro.current = ce;
  }, [ce]);
  const Fo = zo(st);
  Fo.current = st;
  const Lt = nt && Qt ? Qt.toLowerCase() : null;
  uo(() => {
    if (!Lt)
      return;
    const O = (ie) => {
      (ie.metaKey || ie.ctrlKey) && !ie.altKey && !ie.shiftKey && ie.key.toLowerCase() === Lt && Fo.current && (ie.preventDefault(), Fo.current());
    };
    return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
  }, [Lt]);
  const Gr = (O) => {
    const ie = J(O);
    ie instanceof Promise && ie.catch((Xe) => {
      console.error("Error in logout handler:", Xe);
    });
  };
  if (Qa(() => {
    (() => {
      var ie;
      try {
        const { isAuthenticated: Xe } = oa();
        if (!Xe) {
          console.log("No session found, redirecting to login"), Yt(), pt();
          return;
        }
        if (!Br.current) {
          const { user: Nt, error: Bo } = ra();
          if (Nt && !Bo) {
            const As = {
              name: Nt.name || "",
              email: Nt.email || "",
              profilePicture: Nt.profilePicture || "",
              role: Nt.role || ""
            };
            Br.current = !0, (ie = ro.current) == null || ie.call(ro, As);
          } else
            Bo && console.error("Error getting user data:", Bo);
        }
        vs(!0);
      } catch (Xe) {
        console.error("Error checking session:", Xe), Yt(), pt();
      } finally {
        bs(!1);
      }
    })();
  }, [pt]), uo(() => {
    y && sa(zr, pt);
  }, [y, zr]), xs || v)
    return /* @__PURE__ */ t(
      ea,
      {
        theme: se,
        darkModeSelector: Ne,
        sidebarVariant: c,
        sidebarSubmenu: a,
        sidebarAutoHide: f,
        showSidebar: s,
        contentPadding: I,
        sidebarBackgroundColor: S,
        contentBackgroundColor: me,
        content: T
      }
    );
  if (!ys)
    return null;
  const Dt = h ?? (Jt ? /* @__PURE__ */ t(Jt, { ...To }) : null), ws = (O) => {
    at(!1), Do(!1), kr({ open: !0, tab: O });
  }, Po = oe && (() => ws("notifications")), Es = ee + $, Hr = {
    avatarColor: B,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: b == null ? void 0 : b.map(
      (O) => O.onClick || !O.path ? O : { ...O, onClick: () => z == null ? void 0 : z(O.path) }
    ),
    showNotifications: X,
    notificationCount: ee,
    whatsNewCount: $,
    onNotificationsClick: Po,
    showProfile: D,
    userName: N,
    userRole: M,
    userAvatar: L,
    showSettings: we,
    onSettingsClick: G,
    showThemeToggler: Ge,
    theme: se,
    onThemeToggle: Ve,
    onLogout: Gr
  }, Wo = (O) => /* @__PURE__ */ t(
    La,
    {
      ...Hr,
      compact: O,
      color: Fe,
      hoverColor: Ot
    }
  ), Ur = Lt ? [Za() ? "⌘" : "Ctrl", Lt.toUpperCase()] : void 0, Rs = (O) => nt && Ct === "sidebar" ? /* @__PURE__ */ t(
    Sn,
    {
      variant: O ? "sidebar-icon" : "sidebar",
      onClick: st,
      active: ht,
      busy: Tt,
      shortcutKeys: Ur,
      accentColor: Fe
    }
  ) : null, Is = (O) => Dt ? /* @__PURE__ */ t(
    Pa,
    {
      search: Dt,
      mode: O,
      onExpand: () => {
        Lo.pin(), Mr(!0);
      },
      autoFocus: ps,
      onAutoFocused: ms,
      color: Fe,
      hoverColor: Ot
    }
  ) : null, no = (O) => {
    const ie = Rs(O !== "full"), Xe = Is(O);
    return ie || Xe ? /* @__PURE__ */ w(
      Pt,
      {
        spacing: Oe ? `${wo}px` : 1.5,
        sx: { alignItems: O === "full" ? "stretch" : "center" },
        children: [
          ie,
          Oe && ie && Xe ? /* @__PURE__ */ t(
            Y,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Xt(Fe)}`
              }
            }
          ) : null,
          Xe
        ]
      }
    ) : void 0;
  }, Xr = () => /* @__PURE__ */ t(
    Qo,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: j,
      onLinkClick: z,
      showHeaderBar: fe,
      logo: Mo,
      title: n,
      onBrandClick: to,
      brandMenuOpen: oo,
      brandColor: eo,
      headerBackgroundColor: fe ? $r : void 0,
      headerForegroundColor: fe ? $t : void 0,
      activeAccentColor: B,
      groupAccentColor: E,
      activeForegroundColor: C,
      foregroundColor: re,
      surfaceBackgroundColor: Or,
      flyoutSurfaceColor: ke,
      collapsed: He || Pe,
      showLabels: He,
      expandedWidth: Xo,
      collapsedWidth: He ? Hn : Ar,
      topContent: no(
        He ? "popover" : Pe ? Tr : "full"
      ),
      footer: Wo(He || Pe),
      submenuMode: Oe ? "flyout" : "inline"
    }
  ), Kr = (O) => Oe ? _s(O) : Cs(O), _s = (O) => /* @__PURE__ */ w(
    Y,
    {
      component: "aside",
      ...it ? Mt.rootProps : {},
      "data-auto-hide": it ? "true" : void 0,
      "data-shown": it ? String(Mt.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...it ? {
          position: "fixed",
          left: 0,
          width: Ht + 2 * ut,
          pointerEvents: "none"
        } : {
          width: Ue,
          minWidth: Ue,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: te
        }
      },
      children: [
        it && /* @__PURE__ */ t(
          Y,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Va,
              pointerEvents: "auto"
            }
          }
        ),
        /* @__PURE__ */ w(
          Y,
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            sx: {
              position: "absolute",
              top: ut,
              bottom: ut,
              left: ut,
              width: Ht,
              borderRadius: `${Un}px`,
              display: "flex",
              flexDirection: "column",
              ...it && {
                pointerEvents: Mt.shown ? "auto" : "none",
                opacity: Mt.shown ? 1 : 0,
                transform: Mt.shown ? "none" : `translateX(calc(-100% - ${2 * ut}px))`,
                transition: Ya,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...le
            },
            children: [
              /* @__PURE__ */ t(
                It,
                {
                  isDark: K,
                  solid: ke,
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
      ]
    }
  ), Cs = (O) => /* @__PURE__ */ t(
    Y,
    {
      component: "aside",
      sx: {
        width: Wt,
        minWidth: Wt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        Y,
        {
          ...Oe ? {} : Lo.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Pe ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Pe ? Wt : Xo,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: ke,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Pe ? "none" : `4px 0 24px rgba(0, 0, 0, ${K ? 0.5 : 0.12})`,
            transition: ja,
            ...le
          },
          children: O
        }
      )
    }
  ), Ts = Kn(
    I,
    At
  );
  return /* @__PURE__ */ t(go, { theme: F, children: /* @__PURE__ */ t(Gn.Provider, { value: B, children: /* @__PURE__ */ t(qt.Provider, { value: ke, children: /* @__PURE__ */ w(
    Y,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Ce
      },
      children: [
        /* @__PURE__ */ t(Ko, {}),
        u && /* @__PURE__ */ t(
          Ra,
          {
            height: fo,
            onMenuClick: s && !xe ? () => at(!0) : void 0,
            appName: n,
            logo: Mo,
            onBrandClick: to,
            brandMenuOpen: oo,
            background: Ao,
            color: $t,
            brandColor: eo,
            endContent: X ? /* @__PURE__ */ t(
              Rr,
              {
                count: Es,
                onClick: Po,
                color: $t,
                hoverColor: Ot,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !u && He && /* @__PURE__ */ t(
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
              ...le
            },
            children: Xr()
          }
        ),
        s && !u && fe && Kr(
          /* @__PURE__ */ w(Ie, { children: [
            Xr(),
            (W == null ? void 0 : W.show) && !Pe && /* @__PURE__ */ t(lo, { ...W })
          ] })
        ),
        Ae && Kr(
          /* @__PURE__ */ w(Ie, { children: [
            /* @__PURE__ */ t(
              Aa,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: j,
                onLinkClick: z,
                logo: Mo,
                title: n,
                onBrandClick: to,
                brandMenuOpen: oo,
                brandColor: eo,
                headerBackgroundColor: $r,
                headerForegroundColor: $t,
                activeAccentColor: B,
                groupAccentColor: E,
                activeForegroundColor: C,
                foregroundColor: re,
                surfaceBackgroundColor: Or,
                flyoutSurfaceColor: ke,
                collapsed: Pe,
                expandedWidth: Xo,
                collapsedWidth: Ar,
                topContent: no(
                  Pe ? Tr : "full"
                ),
                submenuMode: Oe ? "flyout" : "inline",
                color: Fe,
                hoverColor: Ot,
                avatarColor: B,
                showProfile: D,
                userName: N,
                userEmail: A,
                userRole: M,
                userAvatar: L,
                showNotifications: X,
                notificationCount: ee,
                onNotificationsClick: gs ? Po : U,
                whatsNewCount: $,
                onProfileClick: P,
                menuItems: b,
                onLogout: Gr,
                theme: se,
                showThemeToggler: Ge,
                onThemeToggle: Ve
              }
            ),
            (W == null ? void 0 : W.show) && !Pe && /* @__PURE__ */ t(lo, { ...W })
          ] })
        ),
        s && !u && !ds && !ae && /* @__PURE__ */ t(
          qr,
          {
            variant: "permanent",
            sx: {
              width: Ue,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Ue,
                boxSizing: "border-box",
                bgcolor: te,
                borderRight: "none"
              },
              ...le
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
                        xo,
                        {
                          logo: hs,
                          appName: n,
                          onClick: to,
                          menuOpen: oo,
                          color: x ?? Fe,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  no("popover"),
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
                          ba,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: j,
                            onLinkClick: z,
                            accentColor: B,
                            surfaceBackgroundColor: te,
                            railShowTitles: i
                          }
                        ),
                        (W == null ? void 0 : W.show) && /* @__PURE__ */ t(lo, { ...W })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(Y, { sx: { py: 1.5 }, children: Wo(!0) })
                ]
              }
            )
          }
        ),
        s && u && /* @__PURE__ */ w(
          Ns,
          {
            anchor: xe ? "bottom" : "left",
            open: Lr,
            onOpen: () => at(!0),
            onClose: () => at(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (O) => O.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: ke,
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
                Qo,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: j,
                  onLinkClick: (O) => {
                    z == null || z(O), at(!1);
                  },
                  onLinkAction: () => at(!1),
                  collapsed: !1,
                  expandedWidth: xe ? "100%" : Ka,
                  activeAccentColor: B,
                  groupAccentColor: E,
                  activeForegroundColor: C,
                  foregroundColor: re,
                  surfaceBackgroundColor: ke,
                  topInsetPx: xe ? 8 : 0,
                  topContent: xe ? void 0 : no("full"),
                  footer: xe ? void 0 : Wo(!1)
                }
              ),
              (W == null ? void 0 : W.show) && /* @__PURE__ */ t(lo, { ...W })
            ]
          }
        ),
        xe && Dt && /* @__PURE__ */ t(
          Ea,
          {
            open: Dr,
            onClose: () => Do(!1),
            search: Dt
          }
        ),
        xe && /* @__PURE__ */ t(
          wa,
          {
            ...Hr,
            pinnedLinks: p,
            activePath: j,
            onLinkClick: z,
            onMenuClick: s ? () => at(!0) : void 0,
            menuOpen: Lr,
            onSearchClick: Dt ? () => Do(!0) : void 0,
            searchOpen: Dr,
            showAssistant: nt,
            onAssistantClick: st,
            assistantActive: ht,
            showProfile: D,
            background: ke,
            color: Fe,
            activeColor: B,
            activeBackground: Ot
          }
        ),
        /* @__PURE__ */ t(
          Y,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Ts,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": u ? `${fo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ue ? `calc(100% - ${Ue}px)` : "100%",
              mt: u ? `${fo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...xe && {
                pb: `calc(var(--lumora-content-padding) + ${Nr})`
              },
              backgroundColor: te,
              ...De
            },
            children: e
          }
        ),
        ft && /* @__PURE__ */ t(
          da,
          {
            open: Pr,
            variant: Wr,
            position: _o,
            width: _t,
            sidebarWidthPx: Ue,
            bottomOffsetPx: nt && Ct === "floating" ? qa : 0,
            fullScreen: u,
            fullScreenBottom: xe ? Nr : "0px",
            onClose: Co,
            children: /* @__PURE__ */ t(ft, {})
          }
        ),
        nt && Ct === "floating" && !xe && /* @__PURE__ */ t(
          Sn,
          {
            variant: "floating",
            rightOffsetPx: Ss,
            shortcutKeys: Ur,
            onClick: st,
            active: ht,
            busy: Tt
          }
        ),
        X && oe && /* @__PURE__ */ t(
          qr,
          {
            anchor: "right",
            open: No.open,
            onClose: Fr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              oe,
              {
                onClose: Fr,
                initialTab: No.tab
              },
              No.tab
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
  Qo as CollapsibleSidebar,
  Yc as FullBleedSection,
  qi as Kbd,
  ea as LumoraShellSkeleton,
  Zc as LumoraWrapper,
  Yt as clearAuthTokens,
  Zc as default,
  qc as getAuthErrorMessage,
  Vt as getAuthTokens,
  ra as getCurrentUser,
  wr as getDesignTokens,
  oa as isAuthenticated,
  tr as logAuthError,
  os as storeAuthTokens
};
