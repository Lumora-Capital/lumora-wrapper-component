import { jsx as t, jsxs as v, Fragment as Te } from "react/jsx-runtime";
import Ss from "@mui/icons-material/KeyboardArrowDownRounded";
import vs from "@mui/icons-material/KeyboardArrowUpRounded";
import ws from "@mui/icons-material/ChevronRightRounded";
import _ from "@mui/material/Box";
import Nr from "@mui/material/Collapse";
import et from "@mui/material/Divider";
import be from "@mui/material/IconButton";
import Vt from "@mui/material/ListItemButton";
import ye from "@mui/material/ListItemIcon";
import Ne from "@mui/material/ListItemText";
import Oe from "@mui/material/Stack";
import Se from "@mui/material/Tooltip";
import ce from "@mui/material/Typography";
import { useTheme as Fe, createTheme as ao, alpha as ct, ThemeProvider as oo } from "@mui/material/styles";
import * as l from "react";
import { useMemo as Fr, useState as it, useCallback as Wr, useRef as To, useEffect as Qt, useLayoutEffect as Es } from "react";
import ot from "@mui/material/ButtonBase";
import { keyframes as Ko } from "@emotion/react";
import jo from "@mui/material/Fade";
import Vo from "@mui/material/Popper";
import { useTheme as Rn, CssBaseline as Do, GlobalStyles as Rs, Box as ee, useMediaQuery as In, Stack as Lo, Skeleton as Ge, Drawer as Pr, SwipeableDrawer as Is } from "@mui/material";
import Br from "axios";
import _s from "@mui/material/Card";
import Cs from "@mui/material/CardContent";
import _n from "@mui/material/Button";
import Ts from "@mui/icons-material/AutoAwesomeRounded";
import Os from "@mui/material/Grow";
import Yo from "@mui/material/Paper";
import As from "@mui/material/Slide";
import $s from "@mui/material/ListSubheader";
import Je from "@mui/material/MenuItem";
import qo from "@mui/material/MenuList";
import Cn from "@mui/icons-material/MenuRounded";
import Zo from "@mui/icons-material/SearchRounded";
import Tn from "@mui/icons-material/LogoutRounded";
import On from "@mui/icons-material/NotificationsNoneOutlined";
import Ms from "@mui/icons-material/SettingsOutlined";
import Ds from "@mui/material/Avatar";
import Ls from "@mui/material/Menu";
import Gr from "@mui/material/ToggleButton";
import ks from "@mui/material/ToggleButtonGroup";
import Ns from "@mui/material/Drawer";
import Fs from "@mui/material/AppBar";
import Ws from "@mui/material/Toolbar";
import An from "@mui/material/Badge";
import Ps from "@mui/icons-material/DarkModeOutlined";
import Bs from "@mui/icons-material/LightModeOutlined";
import Gs from "@mui/icons-material/SettingsBrightnessOutlined";
import Qo from "@mui/material/Popover";
import zs from "@mui/icons-material/CheckRounded";
const ro = ({
  logo: e,
  title: o,
  appName: r,
  onClick: n,
  color: i,
  testId: s,
  menuOpen: a
}) => {
  const c = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: i,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, h = /* @__PURE__ */ v(Te, { children: [
    o ? /* @__PURE__ */ t(
      ce,
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
      "aria-label": a === void 0 ? `${r} home` : `${r}: switch platform`,
      ...a !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": a
      },
      "data-testid": s,
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
          outlineColor: i,
          outlineOffset: 2
        }
      },
      children: h
    }
  ) : /* @__PURE__ */ t(Oe, { direction: "row", "data-testid": s, sx: c, children: h });
}, zr = !1, $n = { stiffness: 320, damping: 24 }, Mn = { stiffness: 320, damping: 28 }, Jo = { stiffness: 520, damping: 20 }, Dn = { stiffness: 380, damping: 36 }, co = { stiffness: 260, damping: 28 }, Hs = "cubic-bezier(0.32, 1.28, 0.52, 1)", Us = 420, Hr = 60, Xs = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Ur = /* @__PURE__ */ new Map(), ve = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = Ur.get(n);
  if (i)
    return i;
  if (!Xs)
    return { easing: Hs, duration: Us };
  const s = 1 / 600;
  let a = 0, c = 0, h = 0, m = 1 / Hr;
  const d = [0];
  for (; h < 3; ) {
    const p = (-e * (a - 1) - o * c) / r;
    if (c += p * s, a += c * s, h += s, h >= m && (d.push(a), m += 1 / Hr, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  d[d.length - 1] = 1;
  const x = {
    easing: `linear(${d.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(h * 1e3)
  };
  return Ur.set(n, x), x;
}, tt = (e) => !!(e && typeof e.animate == "function"), Ue = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ct = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, Ks = (e, o = 1.14) => {
  if (!tt(e) || Ue())
    return;
  const r = ve(Jo);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, mt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, pt = (e, o) => e ? `${e}/${o.text}` : o.text, qe = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => qe(n, o))) ?? !1 : !1;
}, ke = (e, o) => !!(o && e.path === o), er = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return mt(r) ? er(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), ko = (e) => {
  const o = lo(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, no = (e) => {
  const o = lo(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, No = (e, o) => {
  const r = lo(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, lo = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Ln = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), tr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", js = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Vs = Ko`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ie = "@media (prefers-reduced-motion: reduce)", te = 6, or = "9, 193, 174", kn = l.createContext(
  void 0
), Ft = l.createContext(
  void 0
), rr = (e) => l.useContext(Ft) ?? e, gt = () => {
  const e = l.useContext(kn), o = e ? lo(e) : null;
  return o ? o.join(", ") : or;
}, Xr = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, Ys = (e, o) => e ? "255, 255, 255" : o, qs = (e, o, r = or) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${js(e)}, 0 0 0 1px ${tr(e)}`
}), Zs = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", nr = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: tr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${te}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), sr = Ko`
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
`, ir = Ko`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, ar = (e, o = or, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Dt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: No(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${No(e, 0.45)}`
}, Qs = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${tr(e)}`;
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
}, Lt = "data-rail-item", Js = `[${Lt}], button, [role="button"]`, uo = l.createContext(!1), cr = () => {
  const e = l.useContext(uo), o = Fe(), r = l.useContext(Ft);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: nr(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ze = ve(Dn), lr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  lean: s = 3,
  pinSelector: a,
  pinKey: c = null
}) => {
  const h = l.useRef(null), m = gt(), [d, x] = l.useState(null), p = l.useRef(null), f = l.useRef(null), g = (S, A) => {
    f.current = A;
    const k = A.getBoundingClientRect(), L = S.getBoundingClientRect(), P = n ?? k.width, B = n ?? k.height, $ = {
      top: Math.round(k.top - L.top + (k.height - B) / 2),
      left: Math.round(k.left - L.left + (k.width - P) / 2),
      width: Math.round(P),
      height: Math.round(B)
    };
    x(
      (N) => N && N.visible && N.top === $.top && N.left === $.left && N.width === $.width && N.height === $.height ? N : { ...$, visible: !0, instant: !(N != null && N.visible) }
    );
  }, R = (S, A) => {
    var L;
    const k = (L = A == null ? void 0 : A.closest) == null ? void 0 : L.call(A, r);
    return k && S.contains(k) ? k : null;
  }, b = (S) => {
    if (!e)
      return;
    const A = R(S.currentTarget, S.target);
    A && g(S.currentTarget, A);
  }, y = (S) => {
    if (!e)
      return;
    const A = R(S.currentTarget, S.target);
    A && S.target.matches(":focus-visible") && g(S.currentTarget, A);
  }, E = (S) => {
    const A = h.current, k = f.current;
    if (!e || !A || !k || !s || Ue())
      return;
    const L = k.getBoundingClientRect(), P = (B, $) => Math.max(-1, Math.min(1, B / ($ / 2))) * s;
    A.style.transform = `translate(${P(S.clientX - (L.left + L.width / 2), L.width)}px, ${P(S.clientY - (L.top + L.height / 2), L.height)}px)`;
  }, w = () => {
    var k;
    const S = (k = h.current) == null ? void 0 : k.parentElement, A = a && (S == null ? void 0 : S.querySelector(a));
    return S && A ? { container: S, item: A } : null;
  }, T = () => {
    h.current && (h.current.style.transform = "");
    const S = w();
    if (S) {
      g(S.container, S.item);
      return;
    }
    f.current = null, x((A) => A != null && A.visible ? { ...A, visible: !1 } : A);
  };
  l.useEffect(() => {
    var A, k;
    if (!e)
      return;
    const S = w();
    S ? g(S.container, S.item) : (k = (A = h.current) == null ? void 0 : A.parentElement) != null && k.matches(":hover") || T();
  }, [e, c]);
  const O = (S) => {
    const A = S.relatedTarget;
    (!A || !S.currentTarget.contains(A)) && (S.currentTarget.matches(":hover") || T());
  };
  return l.useEffect(() => {
    const S = h.current;
    if (!(d != null && d.visible)) {
      p.current = null;
      return;
    }
    const A = p.current;
    if (p.current = d.top, !tt(S) || Ue())
      return;
    if (A === null || d.instant) {
      S.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ze.duration,
        easing: Ze.easing
      });
      return;
    }
    const k = Math.min(Math.abs(d.top - A) / 600, 0.08);
    k && S.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - k / 2} ${1 + k}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ze.duration, easing: "ease-out" }
    );
  }, [d == null ? void 0 : d.top, d == null ? void 0 : d.visible, d == null ? void 0 : d.instant]), {
    lens: e && d ? /* @__PURE__ */ t(
      _,
      {
        ref: h,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": d.visible ? "true" : "false",
        sx: {
          ...ar(o, m),
          borderRadius: `${i}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: d.width,
          height: d.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset. `transform` carries
          // only the lean.
          translate: `${d.left}px ${d.top}px`,
          // Shrinks away as it fades; wells back up on return
          scale: d.visible ? "1" : "0.7",
          opacity: d.visible ? 1 : 0,
          pointerEvents: "none",
          transition: d.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${Ze.duration}ms ${Ze.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [Ie]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: b,
      onMouseMove: E,
      onMouseLeave: T,
      onFocus: y,
      onBlur: O,
      onScrollCapture: T
    } : {}
  };
}, ei = (e, o, r = null) => {
  const n = lr({
    enabled: e,
    isDark: o,
    selector: Js,
    size: 46,
    radius: te,
    pinSelector: `[${Lt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? l.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, ti = (e, o) => {
  let r = 0, n = 0, i = e;
  for (; i && i !== o; ) {
    r += i.offsetTop, n += i.offsetLeft;
    const c = i.offsetParent;
    for (let h = i.parentElement; h && h !== o && (r -= h.scrollTop, n -= h.scrollLeft, h !== c); h = h.parentElement)
      ;
    i = c;
  }
  if (i === o && e.offsetWidth)
    return {
      top: Math.round(r),
      left: Math.round(n),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const s = e.getBoundingClientRect(), a = o.getBoundingClientRect();
  return {
    top: Math.round(s.top - a.top),
    left: Math.round(s.left - a.left),
    width: Math.round(s.width),
    height: Math.round(s.height)
  };
}, oi = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const i = l.useRef(null), [s, a] = l.useState(null), c = l.useRef(null), h = l.useCallback(
    (d) => {
      const x = n.current;
      if (!e || !x)
        return;
      const p = x.querySelector(
        `[${Lt}][data-active="true"]`
      );
      if (!p) {
        a(
          (g) => g != null && g.visible ? { ...g, visible: !1 } : g
        );
        return;
      }
      const f = ti(p, x);
      a(
        (g) => g && g.visible && g.top === f.top && g.left === f.left && g.width === f.width && g.height === f.height ? g : {
          ...f,
          visible: !0,
          instant: d || !(g != null && g.visible)
        }
      );
    },
    [e, n]
  );
  return l.useLayoutEffect(() => {
    h(!1);
  }), l.useEffect(() => {
    const d = n.current;
    if (!e || !d)
      return;
    let x = 0;
    const p = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => h(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => h(!0));
    f == null || f.observe(d);
    const g = typeof MutationObserver > "u" ? null : new MutationObserver(p);
    return g == null || g.observe(d, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(x), f == null || f.disconnect(), g == null || g.disconnect();
    };
  }, [e, n, h]), l.useEffect(() => {
    const d = i.current;
    if (!(s != null && s.visible)) {
      c.current = null;
      return;
    }
    const x = c.current;
    if (c.current = s.top, x === null || s.instant || !tt(d) || Ue())
      return;
    const p = Math.min(Math.abs(s.top - x) / 600, 0.08);
    p && d.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - p / 2} ${1 + p}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ze.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    _,
    {
      ref: i,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...Dt(r, o),
        borderRadius: `${te}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: s.width,
        height: s.height,
        translate: `${s.left}px ${s.top}px`,
        scale: s.visible ? "1" : "0.7",
        opacity: s.visible ? 1 : 0,
        pointerEvents: "none",
        transition: s.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ze.duration}ms ${Ze.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Ie]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Kr = 14, ri = 18, ni = "blur(12px) saturate(180%) brightness(1.04)", si = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), ii = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, ai = 140, jr = 0.22, ci = 0.14, li = (e, o, r) => {
  const n = l.useRef(r);
  n.current = r, l.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var f;
      const p = e.current;
      p && (p.style.setProperty("--lx", `${s.x.toFixed(1)}px`), p.style.setProperty("--ly", `${s.y.toFixed(1)}px`), p.style.setProperty("--li", s.i.toFixed(3)), (f = n.current) == null || f.call(n, s.x, s.y, s.i));
    }, h = () => {
      s.x += (i.x - s.x) * jr, s.y += (i.y - s.y) * jr, s.i += (i.i - s.i) * ci;
      const p = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      p && (s.x = i.x, s.y = i.y, s.i = i.i), c(), a = p ? 0 : requestAnimationFrame(h);
    }, m = () => {
      a || (a = requestAnimationFrame(h));
    }, d = (p) => {
      const f = e.current;
      if (p.pointerType === "touch" || !f)
        return;
      const g = f.getBoundingClientRect();
      if (!g.width || !g.height)
        return;
      i.x = (p.clientX - g.left) * f.offsetWidth / g.width, i.y = (p.clientY - g.top) * f.offsetHeight / g.height;
      const R = Math.max(
        g.left - p.clientX,
        0,
        p.clientX - g.right
      ), b = Math.max(
        g.top - p.clientY,
        0,
        p.clientY - g.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(R, b) / ai), s.i < 0.01 && (s.x = i.x, s.y = i.y), m();
    }, x = () => {
      i.i = 0, m();
    };
    return document.addEventListener("pointermove", d, { passive: !0 }), document.documentElement.addEventListener("mouseleave", x), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", d), document.documentElement.removeEventListener("mouseleave", x);
    };
  }, [e, o]);
}, xt = l.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: s = !0,
    onLight: a
  }, c) => {
    const h = l.useRef(null), m = i && zr;
    li(h, s && zr, a);
    const d = gt(), x = `lumora-glass-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [p, f] = l.useState(null), g = l.useRef(null), R = l.useCallback(
      (E) => {
        var T;
        if (h.current = E, typeof c == "function" ? c(E) : c && (c.current = E), (T = g.current) == null || T.disconnect(), g.current = null, !E || !m || !si || typeof ResizeObserver > "u")
          return;
        const w = () => {
          const O = E.offsetWidth, I = E.offsetHeight;
          f(
            (S) => (S == null ? void 0 : S.width) === O && S.height === I ? S : O && I ? { width: O, height: I } : null
          );
        };
        g.current = new ResizeObserver(w), g.current.observe(E), w();
      },
      [c, m]
    ), b = l.useMemo(
      () => p ? ii(p.width, p.height, Kr) : null,
      [p]
    ), y = m && !!(b && p);
    return /* @__PURE__ */ v(Te, { children: [
      y ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ v(
            "filter",
            {
              id: x,
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
                    href: b,
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
                    stdDeviation: Kr / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: ri,
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
          ref: R,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": y ? "true" : void 0,
          sx: [
            qs(e, o, d),
            y ? {
              backdropFilter: `url(#${x}) ${ni}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
xt.displayName = "GlassLayer";
const Qe = 44, Vr = 4, di = te, Yr = 1.12, fo = 6, qr = fo - 2, Tt = te, Fo = 24, so = 10, Zr = 0.12, Qr = 0.75, ui = so + 32, fi = 90, hi = 22, pi = 1190, mi = 1195, io = ve($n), he = ve(Dn), Jr = ve(co), gi = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const s = Math.min(i, r / 2, n / 2), a = e + r, c = o + n, h = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + s} ${o} H ${a - s} ${h} ${a} ${o + s} V ${c - s} ${h} ${a - s} ${c} H ${e + s} ${h} ${e} ${c - s} V ${o + s} ${h} ${e + s} ${o} Z')`;
}, xi = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: i,
  activePath: s,
  focusFirst: a = !1,
  onNavigate: c,
  onClose: h,
  panelProps: m,
  accentColor: d,
  activeForegroundColor: x,
  solidSurface: p
}) => {
  const f = Fe(), g = f.palette.mode === "dark", R = !!(e && r), b = l.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const y = b.current, E = l.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const C = r.getBoundingClientRect();
      return {
        x: n,
        y: C.top,
        left: n,
        right: n,
        top: C.top,
        bottom: C.bottom,
        width: 0,
        height: C.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), w = l.useRef(E);
  E && (w.current = E), l.useEffect(() => {
    r && Ks(r);
  }, [r]);
  const [T, O] = l.useState(!1);
  l.useEffect(() => {
    if (!R) {
      O(!1);
      return;
    }
    let C = 0;
    const H = requestAnimationFrame(() => {
      C = requestAnimationFrame(() => O(!0));
    });
    return () => {
      cancelAnimationFrame(H), cancelAnimationFrame(C);
    };
  }, [R]);
  const I = l.useMemo(
    () => y ? er(y.group.subitems, y.group.icon) : [],
    [y]
  ), S = l.useRef(null), A = l.useRef(null), k = l.useRef(0), L = l.useRef(null), P = l.useRef([]), B = I.findIndex(
    ({ sub: C }) => ke(C, s)
  ), [$, N] = l.useState(0);
  l.useEffect(() => {
    N(Math.max(B, 0));
  }, [o]), l.useEffect(() => {
    if (!R || !a)
      return;
    const C = setTimeout(() => {
      var H;
      return (H = P.current[0]) == null ? void 0 : H.focus();
    });
    return () => clearTimeout(C);
  }, [R, a, o]);
  const oe = (C) => {
    var q;
    const H = Math.max(0, Math.min(C, I.length - 1));
    N(H), (q = P.current[H]) == null || q.focus();
  }, pe = (C, H) => {
    switch (C.key) {
      case "ArrowRight":
        oe(H + 1);
        break;
      case "ArrowLeft":
        H === 0 ? h(!0) : oe(H - 1);
        break;
      case "Home":
        oe(0);
        break;
      case "End":
        oe(I.length - 1);
        break;
      case "Tab":
        h(!0);
        break;
      default:
        return;
    }
    C.preventDefault();
  }, G = (C) => {
    const H = P.current.slice(0, I.length).filter((Q) => !!Q);
    if (!H.length)
      return;
    const q = C !== null && C < H.length && !Ue(), X = `translate ${he.duration}ms ${he.easing}, scale ${he.duration}ms ${he.easing}`, F = H.map((Q) => Q.offsetLeft + Qe / 2), Z = H.map(
      (Q, J) => q && J === C ? Yr : 1
    ), le = q ? (Yr - 1) * Qe : 0, _e = F[0] - Qe / 2, Xe = F[F.length - 1] + Qe / 2, me = q ? Math.min(
      Math.max(
        (F[C] - _e) / (Xe - _e || 1),
        Math.max(0, 1 - qr / le)
      ),
      Math.min(1, qr / le)
    ) : 0;
    let fe = _e - le * me;
    H.forEach((Q, J) => {
      const Ae = Qe * Z[J], we = fe + Ae / 2;
      fe += Ae + Vr, Q.style.transition = `${X}, background 160ms ease, box-shadow 160ms ease`, Q.style.translate = q ? `${we - F[J]}px 0` : "", Q.style.scale = q ? String(Z[J]) : "", q ? Q.style.setProperty("--dock-scale", String(Z[J])) : Q.style.removeProperty("--dock-scale");
    });
  }, z = l.useRef(null);
  l.useEffect(() => {
    z.current = null;
  }, [o]);
  const U = (C) => {
    z.current !== C && (z.current = C, cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => G(C)));
  };
  l.useEffect(() => () => cancelAnimationFrame(k.current), []);
  const ne = f.palette.text.primary, ae = g ? f.palette.text.primary : d;
  return /* @__PURE__ */ v(Te, { children: [
    /* @__PURE__ */ t(jo, { in: R, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      _,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => h(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: i ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...i ? { clipPath: gi(i) } : {},
          zIndex: pi,
          bgcolor: Zs(g)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      Vo,
      {
        open: R,
        anchorEl: E ?? w.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Up by half the title, so the tile row (not the whole
          // panel) is centred on the rail icon
          {
            name: "offset",
            options: { offset: [-Fo / 2, so] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: mi,
          transition: T ? `transform ${he.duration}ms ${he.easing}` : "none",
          [Ie]: { transition: "none" }
        },
        children: ({ TransitionProps: C }) => /* @__PURE__ */ t(
          Ri,
          {
            in: (C == null ? void 0 : C.in) ?? R,
            onEnter: C == null ? void 0 : C.onEnter,
            onExited: C == null ? void 0 : C.onExited,
            groupKey: (y == null ? void 0 : y.key) ?? null,
            panelProps: m,
            isDark: g,
            solidSurface: p,
            groupText: y == null ? void 0 : y.group.text,
            glassRef: A,
            shapeRef: L,
            children: y ? /* @__PURE__ */ v(Te, { children: [
              /* @__PURE__ */ t(
                _,
                {
                  "aria-hidden": !0,
                  "data-testid": "sidebar-flyout-title",
                  sx: {
                    px: `${fo}px`,
                    height: Fo,
                    boxSizing: "border-box",
                    pt: "2px",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "16px",
                    letterSpacing: "0.02em",
                    color: "text.secondary",
                    whiteSpace: "nowrap"
                  },
                  children: y.group.text
                }
              ),
              /* @__PURE__ */ t(
                _,
                {
                  ref: S,
                  role: "menu",
                  "aria-label": y.group.text,
                  onPointerLeave: () => U(null),
                  sx: {
                    position: "relative",
                    display: "flex",
                    gap: `${Vr}px`,
                    // A grown tile fits in the panel's padding
                    // (see DOCK_ROOM_PX)
                    px: 0
                  },
                  children: I.map(({ sub: H, icon: q }, X) => /* @__PURE__ */ t(
                    Nn,
                    {
                      ref: (F) => {
                        P.current[X] = F;
                      },
                      sub: H,
                      icon: q,
                      index: X,
                      active: ke(
                        H,
                        s
                      ),
                      tabIndex: X === $ ? 0 : -1,
                      onClick: () => {
                        c(H.path), h();
                      },
                      onKeyDown: (F) => pe(F, X),
                      onFocus: (F) => {
                        N(X), F.currentTarget.matches(
                          ":focus-visible"
                        ) && U(X);
                      },
                      onHoverStart: (F) => {
                        F !== "touch" && U(X);
                      },
                      accentColor: d,
                      activeForegroundColor: x,
                      labelColor: ne,
                      iconColor: ae,
                      isDark: g
                    },
                    H.path
                  ))
                },
                y.key
              )
            ] }) : null
          }
        )
      }
    )
  ] });
}, $t = 18, bi = 160, Wo = 14, yi = 22, Si = 2.5, vi = 1, en = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, wi = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, Ei = (e, o, r) => {
  const n = fo, i = $t, s = $t + o / 2, a = Math.max(e, ...r.map((b) => b.right + n)), c = {
    cx: a / 2,
    cy: s,
    hx: a / 2,
    hy: o / 2,
    r: Tt
  }, h = r.filter((b) => b.bottom - b.top > Qe * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + $t,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: Tt
  })), m = (b, y) => h.reduce(
    (E, w) => wi(E, en(b, y, w), yi),
    en(b, y, c)
  ), d = (b, y) => {
    let E = s, w = s + y * (o / 2 + i);
    if (m(b, E) > 0)
      return null;
    for (let T = 0; T < 12; T += 1) {
      const O = (E + w) / 2;
      m(b, O) <= 0 ? E = O : w = O;
    }
    return E;
  }, x = Math.min(0, ...h.map((b) => b.cx - b.hx)) - 2, p = Math.max(a, ...h.map((b) => b.cx + b.hx)) + 2, f = [], g = [];
  for (let b = x; b <= p; ) {
    const y = d(b, -1), E = d(b, 1);
    if (y !== null && E !== null) {
      const T = +(b + Wo).toFixed(1);
      f.push([T, +y.toFixed(1)]), g.push([T, +E.toFixed(1)]);
    }
    const w = b - x < Tt + 4 || p - b < Tt + 4;
    b += w ? vi : Si;
  }
  return f.length ? `M ${[...f, ...g.reverse()].map(([b, y]) => `${b} ${y}`).join(" L ")} Z` : "";
}, tn = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((s) => {
    tt(s) && (Ct(s), s.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    }));
  });
}, Ri = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: i,
  isDark: s,
  solidSurface: a,
  groupText: c,
  glassRef: h,
  shapeRef: m,
  children: d
}) => {
  const x = l.useRef(null), p = l.useRef(null), f = l.useRef(null), g = l.useRef(null), R = l.useRef(null), b = Ys(s, gt()), y = l.useCallback(
    (G, z, U) => {
      var ne, ae;
      (ne = R.current) == null || ne.setAttribute("cx", String(G)), (ae = R.current) == null || ae.setAttribute("cy", String(z)), g.current && (g.current.style.opacity = String(
        U * (s ? Xr.dark.rim : Xr.light.rim)
      ));
    },
    [s]
  ), E = l.useRef(null), w = l.useRef(null), T = `lumora-flyout-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, O = l.useRef(0), I = l.useRef(0), S = l.useRef(""), A = () => {
    var C, H, q, X;
    const G = x.current, z = p.current;
    if (!G || !z)
      return !1;
    const U = G.getBoundingClientRect(), ne = Array.from(
      G.querySelectorAll('[role="menuitem"]'),
      (F) => {
        if (F.style.scale)
          return null;
        const Z = F.getBoundingClientRect();
        return {
          left: Z.left - U.left,
          right: Z.right - U.left,
          top: Z.top - U.top,
          bottom: Z.bottom - U.top
        };
      }
    ).filter((F) => F !== null), ae = Ei(
      G.offsetWidth,
      G.offsetHeight,
      ne
    );
    return ae === S.current ? !1 : (S.current = ae, z.style.clipPath = `path('${ae}')`, (C = f.current) == null || C.setAttribute("d", ae), (H = g.current) == null || H.setAttribute("d", ae), (q = E.current) == null || q.setAttribute("d", ae), (X = w.current) == null || X.setAttribute("d", ae), !0);
  }, k = () => {
    if (I.current = 0, O.current)
      return;
    const G = () => {
      if (I.current = A() ? 0 : I.current + 1, I.current > 8) {
        O.current = 0;
        return;
      }
      O.current = requestAnimationFrame(G);
    };
    O.current = requestAnimationFrame(G);
  };
  m.current = k, l.useLayoutEffect(() => (A(), k(), () => {
    cancelAnimationFrame(O.current), O.current = 0;
  }), [n]);
  const L = l.useRef(null), P = l.useRef(null), B = l.useRef(!1), $ = (G) => {
    x.current = G;
    const { ref: z } = i;
    typeof z == "function" ? z(G) : z && (z.current = G);
  }, N = () => {
    Ct(h.current), Ct(L.current), Ct(x.current);
  }, oe = () => {
    var ne;
    const G = x.current, z = h.current, U = L.current;
    if (!(!tt(G) || !z || !U)) {
      if (N(), Ue()) {
        G.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      P.current = null, z.animate(
        [
          { transform: `scale(${Zr}, ${Qr})` },
          { transform: "none" }
        ],
        { duration: io.duration, easing: io.easing }
      ), tn(z, [0, 1], 160, "ease-out");
      try {
        (ne = p.current) == null || ne.animate(
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
      U.animate(
        [
          { opacity: 0, transform: "translateX(-10px) scale(0.98)" },
          { opacity: 1, transform: "none" }
        ],
        {
          duration: Jr.duration,
          delay: 60,
          easing: Jr.easing,
          fill: "backwards"
        }
      );
    }
  }, pe = () => {
    const G = x.current, z = h.current, U = L.current;
    if (!tt(G) || !z || !U) {
      r == null || r();
      return;
    }
    if (N(), Ue()) {
      G.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 120,
        fill: "forwards"
      }).finished.then(() => r == null ? void 0 : r()).catch(() => {
      });
      return;
    }
    U.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 90,
      easing: "ease-in",
      fill: "forwards"
    }), tn(z, [1, 0], 200, "ease-in"), z.animate(
      [
        { transform: "none" },
        { transform: `scale(${Zr}, ${Qr})` }
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
      pe();
      return;
    }
    o == null || o(), oe();
  }, [e]), l.useLayoutEffect(() => {
    const G = x.current;
    if (!G)
      return;
    const z = G.getBoundingClientRect(), U = P.current;
    if (P.current = { width: z.width, height: z.height }, !B.current) {
      B.current = !0;
      return;
    }
    const ne = h.current;
    !e || !U || !tt(ne) || !z.width || !z.height || Ue() || (Ct(ne), ne.animate(
      [
        {
          transform: `scale(${U.width / z.width}, ${U.height / z.height})`
        },
        { transform: "none" }
      ],
      { duration: he.duration, easing: he.easing }
    ));
  }, [n]), /* @__PURE__ */ v(
    _,
    {
      ref: $,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": c,
      sx: {
        position: "relative",
        borderRadius: `${Tt}px`,
        p: `${fo}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -so - 2,
          width: so + 2
        }
      },
      children: [
        /* @__PURE__ */ v(
          _,
          {
            ref: h,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -$t,
              bottom: -$t,
              left: -Wo,
              right: -bi,
              pointerEvents: "none",
              // The rail icon's centre: the tile row is level with it
              // (half the title below the panel's middle), one gap
              // plus half the rail's padding to the left
              transformOrigin: `${Wo - ui}px calc(50% + ${Fo / 2}px)`,
              willChange: "transform"
            },
            children: [
              /* @__PURE__ */ v(
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
                    /* @__PURE__ */ v("defs", { children: [
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
                      /* @__PURE__ */ v(
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
                            /* @__PURE__ */ t("path", { ref: w, fill: "black" })
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
                xt,
                {
                  ref: p,
                  isDark: s,
                  solid: a,
                  refract: !1,
                  onLight: y,
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
              /* @__PURE__ */ v(
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
                    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ v(
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
                        ref: f,
                        fill: "none",
                        stroke: s ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)",
                        strokeWidth: "1"
                      }
                    ),
                    /* @__PURE__ */ v(
                      "radialGradient",
                      {
                        ref: R,
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
                        ref: g,
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
        /* @__PURE__ */ t(_, { ref: L, sx: { position: "relative" }, children: d })
      ]
    }
  );
}, Nn = l.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: i,
    onClick: s,
    onKeyDown: a,
    onFocus: c,
    onHoverStart: h,
    accentColor: m,
    activeForegroundColor: d,
    labelColor: x,
    iconColor: p,
    isDark: f
  }, g) => {
    const R = gt(), b = l.useContext(Ft), y = (O) => {
      const I = O.currentTarget.getBoundingClientRect();
      O.currentTarget.style.setProperty(
        "--mx",
        `${(O.clientX - I.left) / I.width * 100}%`
      ), O.currentTarget.style.setProperty(
        "--my",
        `${(O.clientY - I.top) / I.height * 100}%`
      );
    }, E = (O) => {
      const I = O.currentTarget;
      !tt(I) || Ue() || I.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.04, 0.96)", offset: 0.22 },
          { transform: "scale(0.98, 1.025)", offset: 0.5 },
          { transform: "scale(1.01, 0.995)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, w = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, T = {
      ...ar(f, R),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": w
    };
    return /* @__PURE__ */ v(
      ot,
      {
        ref: g,
        role: "menuitem",
        tabIndex: i,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: s,
        onKeyDown: a,
        onFocus: c,
        onPointerMove: y,
        onMouseEnter: E,
        onPointerEnter: (O) => h(O.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Qe,
          height: Qe,
          borderRadius: `${di}px`,
          color: n ? d : x,
          bgcolor: n ? m : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Dt(m, f) : {},
          transition: `translate ${he.duration}ms ${he.easing}, scale ${he.duration}ms ${he.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${Vs} ${io.duration}ms ${io.easing} both`,
          animationDelay: `${fi + r * hi}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: 22,
            color: n ? d : p
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
            "& [data-tile-name]": w
          } : T,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : T,
            "& [data-tile-name]": w,
            outline: "2px solid",
            outlineColor: m,
            outlineOffset: 2
          },
          [Ie]: {
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
                ...nr(f, b),
                position: "absolute",
                top: "100%",
                left: "50%",
                translate: "-50% 8px",
                transformOrigin: "top center",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: 0,
                scale: "calc(0.6 / var(--dock-scale, 1))",
                transition: `opacity 140ms ease, scale ${he.duration}ms ${he.easing}`,
                zIndex: 1,
                [Ie]: { transition: "opacity 140ms ease" }
              },
              children: e.text
            }
          )
        ]
      }
    );
  }
);
Nn.displayName = "FlyoutTile";
const Ii = 100, _i = 250, Ci = (e) => {
  const [o, r] = l.useState(null), n = l.useRef(o);
  n.current = o;
  const i = l.useRef(/* @__PURE__ */ new Map()), s = l.useRef(null), a = l.useRef(void 0), c = l.useRef(void 0), h = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = () => {
    clearTimeout(c.current), c.current = void 0;
  }, d = (y, E, w = !1) => {
    h(), m(), r({ key: y, pinned: E, focusFirst: w });
  }, x = l.useCallback((y = !1) => {
    var w, T;
    h(), m();
    const E = (w = n.current) == null ? void 0 : w.key;
    r(null), y && E && ((T = i.current.get(E)) == null || T.focus());
  }, []), p = () => {
    h(), !(!n.current || n.current.pinned) && (m(), c.current = setTimeout(() => x(), _i));
  };
  l.useEffect(() => {
    e || x();
  }, [e, x]), l.useEffect(
    () => () => {
      h(), m();
    },
    []
  );
  const f = o !== null;
  return l.useEffect(() => {
    if (!f)
      return;
    const y = (T) => {
      var I;
      const O = T;
      return O ? (I = s.current) != null && I.contains(O) ? !0 : [...i.current.values()].some((S) => S.contains(O)) : !1;
    }, E = (T) => {
      y(T.target) || x();
    }, w = (T) => {
      var O;
      T.key === "Escape" && x(
        !!((O = s.current) != null && O.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", E), document.addEventListener("keydown", w), () => {
      document.removeEventListener("pointerdown", E), document.removeEventListener("keydown", w);
    };
  }, [f, x]), {
    state: o,
    close: x,
    triggerProps: (y) => ({
      ref: (E) => {
        E ? i.current.set(y, E) : i.current.delete(y);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        m();
        const E = n.current;
        if (E) {
          E.key !== y && d(y, E.pinned);
          return;
        }
        h(), a.current = setTimeout(
          () => d(y, !1),
          Ii
        );
      },
      onMouseLeave: p,
      onClick: (E) => {
        if (E.detail === 0) {
          d(y, !0, !0);
          return;
        }
        const w = n.current;
        (w == null ? void 0 : w.key) === y && w.pinned ? x() : d(y, !0);
      },
      onKeyDown: (E) => {
        E.key === "ArrowRight" && (E.preventDefault(), d(y, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: m,
      onMouseLeave: p
    },
    onRailLeafEnter: () => {
      h(), n.current && !n.current.pinned && x();
    },
    getTrigger: (y) => i.current.get(y) ?? null
  };
}, Ti = 264, Oi = 72, on = 64, Yt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ai = 16, $i = 14, Mi = 4, Di = 2.5, rn = "0.7rem", nn = 22, sn = ve(Jo), at = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
  const s = l.useRef(null), [a, c] = l.useState(!1), h = l.useCallback(() => {
    const m = s.current;
    m && c(m.scrollWidth > m.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    h();
  }, [h, e]), l.useEffect(() => {
    const m = s.current;
    if (!m)
      return;
    const d = new ResizeObserver(() => h());
    return d.observe(m), () => d.disconnect();
  }, [h]), /* @__PURE__ */ t(
    Se,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ t(
        ce,
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
}, Li = ({
  open: e,
  size: o = Ai
}) => e ? /* @__PURE__ */ t(vs, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Ss, { sx: { fontSize: o, opacity: 0.75 } }), an = ({ open: e }) => /* @__PURE__ */ t(
  ws,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), qt = 600, Po = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: i,
  logo: s,
  title: a,
  onBrandClick: c,
  brandMenuOpen: h,
  showHeaderBar: m = !1,
  headerBackgroundColor: d,
  headerForegroundColor: x,
  brandColor: p,
  activeAccentColor: f = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: R,
  foregroundColor: b,
  surfaceBackgroundColor: y,
  flyoutSurfaceColor: E,
  collapsed: w = !1,
  expandedWidth: T = Ti,
  collapsedWidth: O = Oi,
  showLabels: I = !1,
  topInsetPx: S = 0,
  topContent: A,
  footer: k,
  submenuMode: L = "inline"
}) => {
  var yt;
  const P = Fe(), B = P.palette.mode === "dark", $ = l.useContext(Ft), N = L === "flyout" && w && !I, oe = Ci(N), pe = l.useRef(null), G = ei(N, B, ((yt = oe.state) == null ? void 0 : yt.key) ?? null), z = oi({
    enabled: N,
    isDark: B,
    color: f,
    containerRef: pe
  }), { close: U } = oe;
  l.useEffect(() => {
    U();
  }, [r, U]);
  const [ne, ae] = l.useState(
    {}
  ), C = R ?? ko(f), H = {
    bgcolor: f,
    color: C,
    "& .MuiListItemIcon-root": { color: C }
  }, q = {
    bgcolor: f,
    color: C,
    borderRadius: "8px"
  }, X = g ?? no(f), F = y ?? (B ? P.palette.background.paper : "#ffffff"), Z = b ?? (B ? "text.primary" : f), le = d ?? F, _e = x ?? (d ? ko(le) : b ?? (B ? P.palette.text.primary : f)), Xe = no(_e), me = (u) => {
    n == null || n(u);
  }, fe = (u, M) => {
    ae((V) => ({ ...V, [u]: !M }));
  }, Q = (u, M) => ne[M] ?? qe(u, r), J = (u, M, V) => ({
    color: u ? C : Z,
    bgcolor: u ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: u ? C : Z,
      minWidth: V
    },
    "&:hover": u || I ? H : { bgcolor: M }
  }), Ae = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": H
  }, we = (u) => {
    const M = ke(u, r), V = /* @__PURE__ */ v(
      Vt,
      {
        disabled: !u.path,
        selected: M,
        onClick: () => u.path && me(u.path),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": M ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...u.action && { pr: 6 },
          ...u.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...J(
            M,
            X,
            u.subtitle ? 48 : 36
          ),
          ...Ae
        },
        children: [
          /* @__PURE__ */ t(ye, { children: u.icon }),
          /* @__PURE__ */ t(
            Ne,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: u.text,
                  fontWeight: qt
                }
              ),
              secondary: u.subtitle ? /* @__PURE__ */ t(
                _,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    at,
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
      return V;
    const { action: W } = u;
    return /* @__PURE__ */ v(_, { sx: { position: "relative" }, children: [
      V,
      /* @__PURE__ */ t(Se, { title: W.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        be,
        {
          "aria-label": W.label,
          "data-testid": `sidebar-action-${u.text}`,
          onClick: () => {
            W.onClick(), i == null || i();
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
            borderColor: M ? "rgba(255, 255, 255, 0.35)" : X,
            color: M ? C : Z,
            "&:hover": {
              bgcolor: M ? "rgba(255, 255, 255, 0.15)" : X
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: M ? C : Z,
              outlineOffset: 1
            }
          },
          children: W.icon
        }
      ) })
    ] }, u.text);
  }, Ke = (u) => {
    const M = qe(u, r), V = ke(u, r), W = pt("", u), K = Q(u, W);
    return /* @__PURE__ */ v(
      _,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: M ? X : "transparent"
        },
        children: [
          /* @__PURE__ */ v(
            Vt,
            {
              onClick: () => fe(W, K),
              "data-testid": `sidebar-item-${u.text}`,
              "data-active": V ? "true" : "false",
              "aria-expanded": K,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...J(V, X, 36)
              },
              children: [
                /* @__PURE__ */ t(ye, { children: u.icon }),
                /* @__PURE__ */ t(
                  Ne,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      at,
                      {
                        text: u.text,
                        fontWeight: qt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(an, { open: K })
              ]
            }
          ),
          /* @__PURE__ */ t(Nr, { in: K, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            _,
            {
              "data-testid": `sidebar-children-${u.text}`,
              sx: { pb: 0.5 },
              children: u.subitems.map(
                (j) => $e(j, W, 1)
              )
            }
          ) })
        ]
      },
      u.text
    );
  }, $e = (u, M, V) => {
    const W = pt(M, u), K = Mi + (V - 1) * Di;
    if (mt(u)) {
      const ue = qe(u, r), re = ke(u, r), ge = Q(u, W);
      return /* @__PURE__ */ v(_, { "data-testid": `sidebar-group-${u.text}`, children: [
        /* @__PURE__ */ v(
          Vt,
          {
            onClick: () => fe(W, ge),
            "data-testid": `sidebar-subitem-${u.text}`,
            "data-active": ue ? "true" : "false",
            "aria-expanded": ge,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: K,
              ...J(re, "action.hover", 32)
            },
            children: [
              u.icon ? /* @__PURE__ */ t(ye, { children: u.icon }) : null,
              /* @__PURE__ */ t(
                Ne,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    at,
                    {
                      text: u.text,
                      fontWeight: qt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(an, { open: ge })
            ]
          }
        ),
        /* @__PURE__ */ t(Nr, { in: ge, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(_, { "data-testid": `sidebar-children-${u.text}`, children: u.subitems.map(
          (mo) => $e(mo, W, V + 1)
        ) }) })
      ] }, W);
    }
    const j = ke(u, r);
    return /* @__PURE__ */ v(
      Vt,
      {
        selected: j,
        disabled: !u.path,
        onClick: () => u.path && me(u.path),
        "data-testid": `sidebar-subitem-${u.text}`,
        "data-active": j ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: K,
          ...J(j, "action.hover", 32),
          ...Ae
        },
        children: [
          u.icon ? /* @__PURE__ */ t(ye, { children: u.icon }) : null,
          /* @__PURE__ */ t(
            Ne,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: u.text,
                  fontWeight: qt
                }
              )
            }
          )
        ]
      },
      W
    );
  }, Me = (u, M, V, W, K, j) => {
    const ue = !K, re = /* @__PURE__ */ v(
      be,
      {
        "aria-label": M,
        disabled: ue,
        onClick: K,
        onMouseEnter: N ? oe.onRailLeafEnter : void 0,
        ...N ? { [Lt]: "" } : {},
        "data-testid": (j == null ? void 0 : j.testId) ?? `sidebar-item-${M}`,
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
          color: W ? C : Z,
          bgcolor: W ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: nn
          },
          "&:hover": q,
          ...Yt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: W ? C : Z,
          bgcolor: W ? f : "transparent",
          borderRadius: W ? "8px" : "50%",
          "&:hover": {
            bgcolor: W ? f : j != null && j.insideGroup ? "action.hover" : X,
            borderRadius: "8px"
          },
          ...Yt,
          ...N ? lt(W) : {}
        },
        children: [
          V,
          I ? /* @__PURE__ */ t(
            at,
            {
              text: M,
              variant: "caption",
              center: !0,
              fontSize: rn
            }
          ) : null
        ]
      }
    );
    return I ? ue ? /* @__PURE__ */ t("span", { children: re }, u) : /* @__PURE__ */ t(l.Fragment, { children: re }, u) : /* @__PURE__ */ t(
      Se,
      {
        title: M,
        placement: "right",
        arrow: !N,
        ...N ? Pt : {},
        children: ue ? /* @__PURE__ */ t("span", { children: re }) : re
      },
      u
    );
  }, Wt = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, lt = (u) => ({
    borderRadius: `${te}px`,
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...u ? { bgcolor: "transparent" } : {},
    transition: `transform ${sn.duration}ms ${sn.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), Pt = {
    slotProps: {
      tooltip: { sx: nr(B, $) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, ho = (u) => {
    var K;
    const M = qe(u, r), V = pt("", u), W = ((K = oe.state) == null ? void 0 : K.key) === V;
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
            ...oe.triggerProps(V),
            "aria-label": u.text,
            "aria-haspopup": "menu",
            "aria-expanded": W,
            "data-testid": `sidebar-item-${u.text}`,
            "data-active": M ? "true" : "false",
            "data-open": W ? "true" : "false",
            [Lt]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: M ? C : Z,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: M ? f : "transparent",
              ...lt(M),
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
              ...Yt
            },
            children: u.icon
          }
        )
      },
      u.text
    );
  }, rt = (u) => {
    const M = qe(u, r), V = ke(u, r), W = pt("", u), K = Q(u, W), j = /* @__PURE__ */ v(
      be,
      {
        "aria-label": u.text,
        "aria-expanded": K,
        onClick: () => fe(W, K),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": V ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: I ? 0.25 : 0,
          width: I ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...I ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: V ? C : Z,
          bgcolor: V ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": I ? { bgcolor: f, color: C } : {
            bgcolor: V ? f : "transparent"
          },
          ...Yt
        },
        children: [
          I ? /* @__PURE__ */ t(
            _,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: nn
                }
              },
              children: u.icon
            }
          ) : u.icon,
          I ? /* @__PURE__ */ t(
            at,
            {
              text: u.text,
              variant: "caption",
              center: !0,
              fontSize: rn
            }
          ) : null,
          /* @__PURE__ */ t(Li, { open: K, size: $i })
        ]
      }
    ), ue = I ? j : /* @__PURE__ */ t(Se, { title: u.text, placement: "right", arrow: !0, children: j });
    return /* @__PURE__ */ v(
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
          bgcolor: M ? X : "transparent",
          ...I ? {} : { "&:hover": { bgcolor: X } }
        },
        children: [
          ue,
          K ? er(u.subitems, u.icon).map(
            ({ sub: re, icon: ge }) => Me(
              re.path,
              re.text,
              ge,
              ke(re, r),
              () => me(re.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${re.text}`
              }
            )
          ) : null
        ]
      },
      u.text
    );
  }, bt = (u) => /* @__PURE__ */ t(
    _,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Me(
        u.text,
        u.subtitle ? `${u.text} · ${u.subtitle}` : u.text,
        u.icon,
        ke(u, r),
        u.path ? () => me(u.path) : void 0,
        { testId: `sidebar-item-${u.text}` }
      )
    },
    u.text
  ), Bt = (u) => mt(u) ? N ? ho(u) : w ? rt(u) : Ke(u) : w ? bt(u) : we(u), je = (u) => /* @__PURE__ */ t(
    Oe,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: w ? "center" : "stretch"
      },
      children: u.map(Bt)
    }
  ), dt = w ? O : T, Gt = () => {
    var ue, re;
    const { state: u } = oe, M = u ? [...e, ...o].find(
      (ge) => mt(ge) && pt("", ge) === u.key
    ) ?? null : null, V = M ? ((ue = pe.current) == null ? void 0 : ue.getBoundingClientRect().right) ?? O : O, W = M ? ((re = pe.current) == null ? void 0 : re.closest("[data-rail-surface]")) ?? pe.current : null, K = W == null ? void 0 : W.getBoundingClientRect(), j = W && K ? {
      left: K.left,
      top: K.top,
      width: K.width,
      height: K.height,
      radius: parseFloat(
        getComputedStyle(W).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      xi,
      {
        group: M,
        groupKey: M ? u.key : null,
        anchor: M ? oe.getTrigger(u.key) : null,
        railEdge: V,
        railShape: j,
        activePath: r,
        focusFirst: u == null ? void 0 : u.focusFirst,
        onNavigate: me,
        onClose: oe.close,
        panelProps: oe.flyoutProps,
        accentColor: f,
        activeForegroundColor: C,
        solidSurface: E ?? F
      }
    );
  }, zt = m ? /* @__PURE__ */ t(
    _,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: on,
        minHeight: on,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: le
      },
      children: s || a ? /* @__PURE__ */ t(
        ro,
        {
          logo: s,
          title: w ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: h,
          color: p ?? _e,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, po = !m && s ? /* @__PURE__ */ t(
    _,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: 1
      },
      children: /* @__PURE__ */ t(
        ro,
        {
          logo: s,
          appName: a || "App",
          onClick: c,
          menuOpen: h,
          color: p ?? _e,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, Ve = I ? 0.5 : w ? 1 : 1.5;
  return /* @__PURE__ */ t(uo.Provider, { value: N, children: /* @__PURE__ */ v(
    _,
    {
      ref: pe,
      ...G.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": w ? "true" : "false",
      "data-labeled": I ? "true" : "false",
      sx: {
        width: dt,
        minWidth: dt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: F,
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
        ...N ? Wt : {}
      },
      children: [
        G.lens,
        z.glass,
        zt ?? po,
        A ? /* @__PURE__ */ t(
          _,
          {
            sx: {
              flexShrink: 0,
              px: Ve,
              pt: 1,
              pb: 1
            },
            children: A
          }
        ) : null,
        /* @__PURE__ */ v(
          _,
          {
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
              ...N ? { scrollbarGutter: "stable both-edges" } : {},
              scrollbarWidth: "thin",
              scrollbarColor: "transparent transparent",
              // Safari only honours the thumb rule once the bar
              // itself is styled.
              "&::-webkit-scrollbar": { width: 8 },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: 4
              },
              "&:hover, &:has(:focus-visible)": {
                scrollbarColor: (u) => `${u.palette.divider} transparent`,
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: (u) => u.palette.divider
                }
              },
              // On the icon rail the two gutters stand in for the
              // padding, leaving room for the 44px items. (The inline
              // collapsed rail keeps it: its open groups tint the
              // full row width.)
              px: N ? 0 : Ve,
              pt: S && !m ? `${S}px` : 1,
              pb: 2
            },
            children: [
              je(e),
              o.length > 0 ? /* @__PURE__ */ v(_, { sx: { mt: "auto", pt: 2 }, children: [
                k ? null : /* @__PURE__ */ t(
                  et,
                  {
                    sx: { mb: 1, borderColor: "divider" }
                  }
                ),
                je(o)
              ] }) : null
            ]
          }
        ),
        k ? /* @__PURE__ */ t(_, { sx: { flexShrink: 0, px: Ve, pb: 1.5 }, children: /* @__PURE__ */ t(
          _,
          {
            sx: {
              borderTop: `1px solid ${Xe}`,
              pt: 1.5
            },
            children: k
          }
        ) }) : null,
        N ? Gt() : null
      ]
    }
  ) });
}, Bo = "var(--lumora-content-padding, 0px)", cn = `calc(${Bo} * -1)`, Tc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: s = !0,
  sx: a
}) => /* @__PURE__ */ t(
  _,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: cn,
        mt: o ? cn : 0,
        // Space below it, like any other block on the page
        mb: Bo,
        px: s ? Bo : 0,
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
      ...Array.isArray(a) ? a : [a]
    ],
    children: e
  }
), ki = ({ keys: e }) => /* @__PURE__ */ t(
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
}, ut = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, ft = {
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
}, Fn = ao(), Ce = Fn.typography.pxToRem, dr = (e) => {
  const o = e === "dark", r = [...Fn.shadows];
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
      warning: o ? { light: ft[400], main: ft[500], dark: ft[700] } : { light: ft[300], main: ft[400], dark: ft[800] },
      error: o ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      success: o ? { light: ut[400], main: ut[500], dark: ut[700] } : { light: ut[300], main: ut[400], dark: ut[800] },
      grey: Re,
      divider: o ? ct(Re[700], 0.6) : ct(Re[300], 0.4),
      background: o ? { default: Re[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Re[400] } : { primary: Re[800], secondary: Re[600] },
      action: o ? {
        hover: ct(Re[600], 0.2),
        selected: ct(Re[600], 0.3)
      } : {
        hover: ct(Re[200], 0.2),
        selected: ct(Re[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Ce(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Ce(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Ce(30), lineHeight: 1.2 },
      h4: { fontSize: Ce(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Ce(20), fontWeight: 600 },
      h6: { fontSize: Ce(18), fontWeight: 600 },
      subtitle1: { fontSize: Ce(18) },
      subtitle2: { fontSize: Ce(14), fontWeight: 500 },
      body1: { fontSize: Ce(14) },
      body2: { fontSize: Ce(14), fontWeight: 400 },
      caption: { fontSize: Ce(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Ni = 100, Wn = 80, Jt = 56, Ot = 72, Go = 68, Mt = 8, Pn = te, Bn = { xs: 2, md: "18px" }, Gn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, ur = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), zn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n
}) => !e || o ? 0 : r === "rail-labeled" ? Wn : ur(n, r) ? Go + 2 * Mt : r === "collapsible" || r === "panel" ? Ot : Ni, Hn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Un = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Fi = 6, ln = (e, o) => typeof e == "object" ? e[o] : e, Oo = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: i = "expand",
  showSidebar: s = !0,
  contentPadding: a = Bn,
  sidebarBackgroundColor: c,
  contentBackgroundColor: h
}) => {
  const m = In(r.breakpoints.down("md")), d = e === "dark", x = zn({
    showSidebar: s,
    isMobile: m,
    sidebarVariant: n,
    sidebarSubmenu: i
  }), p = ur(i, n) ? {
    gutterPx: Mt,
    radiusPx: Pn
  } : void 0, f = Jt, g = Hn(
    ln(c, e),
    d
  ), R = Un(
    ln(h, e),
    d
  ), b = Gn(
    a,
    r
  ), y = /* @__PURE__ */ v(Lo, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(Ge, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(ee, { sx: { height: 8 } }),
    Array.from({ length: Fi }, (E, w) => /* @__PURE__ */ t(Ge, { variant: "rounded", width: 28, height: 28 }, w))
  ] });
  return /* @__PURE__ */ t(oo, { theme: o, children: /* @__PURE__ */ v(
    ee,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: R
      },
      children: [
        m && /* @__PURE__ */ v(
          ee,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: f,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: g,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(Ge, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(Ge, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(ee, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(Ge, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !m && x > 0 && /* @__PURE__ */ t(
          ee,
          {
            sx: {
              position: "relative",
              width: x,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              ee,
              {
                sx: p ? {
                  position: "fixed",
                  top: p.gutterPx,
                  bottom: p.gutterPx,
                  left: p.gutterPx,
                  width: x - 2 * p.gutterPx,
                  borderRadius: `${p.radiusPx}px`,
                  bgcolor: g
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: x,
                  bgcolor: g
                },
                children: y
              }
            )
          }
        ),
        /* @__PURE__ */ v(
          ee,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              p: b,
              mt: m ? `${f}px` : 0
            },
            children: [
              /* @__PURE__ */ t(Ge, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(Ge, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(Lo, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: m ? 2 : 4 }, (E, w) => /* @__PURE__ */ t(
                Ge,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                w
              )) }),
              /* @__PURE__ */ t(Ge, { variant: "rounded", height: 360 })
            ]
          }
        )
      ]
    }
  ) });
}, zo = ao(dr("light")), eo = ao(dr("dark")), Wi = (e) => e === "dark" ? eo : zo, Pi = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = Rn();
  if (!o) {
    const s = Wi(e);
    return /* @__PURE__ */ v(oo, { theme: s, children: [
      /* @__PURE__ */ t(Do, {}),
      /* @__PURE__ */ t(
        Oo,
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
  return /* @__PURE__ */ v(oo, { theme: zo, children: [
    /* @__PURE__ */ t(Do, {}),
    /* @__PURE__ */ t(
      Rs,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: eo.palette.background.default,
            color: eo.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(ee, { sx: { display: "contents", [i]: { display: "none" } }, children: /* @__PURE__ */ t(
      Oo,
      {
        themeMode: "light",
        muiTheme: zo,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(ee, { sx: { display: "none", [i]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Oo,
      {
        themeMode: "dark",
        muiTheme: eo,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class Y extends Error {
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const se = {
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
}, He = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Bi = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        He.ACCESS_TOKEN
      ), o = localStorage.getItem(
        He.REFRESH_TOKEN
      ), r = localStorage.getItem(He.USER);
      e && !localStorage.getItem(de.ACCESS_TOKEN) && localStorage.setItem(de.ACCESS_TOKEN, e), o && !localStorage.getItem(de.REFRESH_TOKEN) && localStorage.setItem(
        de.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(de.USER) && localStorage.setItem(de.USER, r), (e || o || r) && (localStorage.removeItem(He.ACCESS_TOKEN), localStorage.removeItem(He.REFRESH_TOKEN), localStorage.removeItem(He.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Ao = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        se.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      se.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      se.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Y(
      "Failed to access storage",
      se.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, $o = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        se.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      se.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      se.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Y(
      "Failed to write to storage",
      se.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Xn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, kt = () => {
  try {
    Bi();
    const e = Ao(de.ACCESS_TOKEN), o = Ao(de.REFRESH_TOKEN), r = Ao(de.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), Xn(de.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Y ? e : new Y(
      "Failed to retrieve authentication tokens",
      se.UNKNOWN_ERROR,
      e
    );
  }
}, Gi = () => {
  try {
    const { accessToken: e, refreshToken: o } = kt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Y(
        "No authentication tokens found",
        se.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof Y ? e : new Y(
        "Authentication check failed",
        se.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Kn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Y(
        "At least one token must be provided",
        se.TOKEN_INVALID
      );
    return e && $o(de.ACCESS_TOKEN, e), o && $o(de.REFRESH_TOKEN, o), r && $o(de.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Y ? n : new Y(
        "Failed to store tokens",
        se.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Nt = () => {
  try {
    return [
      de.ACCESS_TOKEN,
      de.REFRESH_TOKEN,
      de.USER,
      // Also clear legacy keys for complete cleanup
      He.ACCESS_TOKEN,
      He.REFRESH_TOKEN,
      He.USER
    ].map((n) => Xn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Y ? e : new Y(
        "Failed to clear tokens",
        se.LOGOUT_FAILED,
        e
      )
    };
  }
}, zi = () => {
  try {
    const { user: e } = kt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Y ? e : new Y(
        "Failed to retrieve user data",
        se.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Oc = (e) => {
  if (!(e instanceof Y))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case se.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case se.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case se.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case se.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case se.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case se.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Ho = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof Y ? e.code : "UNKNOWN",
    timestamp: e instanceof Y ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof Y && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, Hi = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Br.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, i = [];
  const s = (a, c) => {
    i.forEach(({ resolve: h, reject: m }) => {
      a ? m(a) : c && h(c);
    }), i = [];
  };
  return o.interceptors.request.use(
    (a) => {
      const { accessToken: c } = kt();
      return c && a.headers && (a.headers.Authorization = `Bearer ${c}`), a;
    },
    (a) => Promise.reject(a)
  ), o.interceptors.response.use(
    (a) => a,
    async (a) => {
      var p;
      const c = a.config, h = (p = a.response) == null ? void 0 : p.status, m = (c == null ? void 0 : c.url) || "", d = m.includes("/auth/refresh");
      if (h !== 401 || c._retry || d)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: x } = kt();
      if (!x) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return Ho(f, "AxiosClient - Token Refresh"), Nt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((f, g) => {
          i.push({ resolve: f, reject: g });
        }).then((f) => {
          const {
            accessToken: g,
            refreshToken: R
          } = f;
          if (c.headers && (c.headers.Authorization = `Bearer ${g}`), m.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const b = JSON.parse(
                  c.data || "{}"
                );
                b.refresh_token = R, c.data = JSON.stringify(b);
              } else
                c.data && typeof c.data == "object" ? c.data.refresh_token = R : c.data = JSON.stringify({
                  refresh_token: R
                });
            } catch {
              c.data = JSON.stringify({
                refresh_token: R
              });
            }
          return o(c);
        }).catch((f) => Promise.reject(f));
      r = !0, n = Br.post(
        `${e}/auth/refresh`,
        {
          refresh_token: x
        }
      );
      try {
        const f = await n, { accessToken: g, refreshToken: R } = f.data;
        if (Kn(g, R, null), s(null, {
          accessToken: g,
          refreshToken: R
        }), c.headers && (c.headers.Authorization = `Bearer ${g}`), m.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const b = JSON.parse(
                c.data || "{}"
              );
              b.refresh_token = R, c.data = JSON.stringify(b);
            } else
              c.data && typeof c.data == "object" ? c.data.refresh_token = R : c.data = JSON.stringify({
                refresh_token: R
              });
          } catch {
            c.data = JSON.stringify({
              refresh_token: R
            });
          }
        return o(c);
      } catch (f) {
        return Ho(
          f,
          "AxiosClient - Token Refresh Failed"
        ), s(f), Nt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Ui = async (e, o) => {
  const { accessToken: r, refreshToken: n } = kt();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return Kn(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      Ho(i, "TokenValidator - Refresh Failed");
    }
  return Nt(), o ? o() : window.location.href = "/login", !1;
}, At = ({ size: e = 20 }) => /* @__PURE__ */ v(
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
), dn = ve(Jo), ze = "#09C1AE", to = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${ze} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), Xi = (e) => ({
  ...to(te, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${te - 2}px`,
    zIndex: 1,
    background: `${Dt(ze, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), un = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: s = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = cr(), h = l.useContext(uo), m = Fe().palette.mode === "dark", d = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", x = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ v(
    ot,
    {
      ...x,
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
        borderColor: r ? ze : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${ze}`,
          outlineOffset: 2
        },
        ...n && to(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(At, { size: 20 }),
        /* @__PURE__ */ t(
          ce,
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
        i && /* @__PURE__ */ t(ki, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && h ? /* @__PURE__ */ t(Se, { title: d, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    be,
    {
      ...x,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: `${te}px`,
        ...Dt(ze, m, "clear"),
        ...r && {
          boxShadow: `${Dt(ze, m, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${dn.duration}ms ${dn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [Ie]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && Xi(m)
      },
      children: /* @__PURE__ */ t(At, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Se, { title: d, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    be,
    {
      ...x,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? ze : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && to(8, "background.paper")
      },
      children: /* @__PURE__ */ t(At, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(Se, { title: d, placement: "left", children: /* @__PURE__ */ t(
    be,
    {
      ...x,
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
        outline: r ? `2px solid ${ze}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${ze}` },
        ...n && to(16, "background.paper")
      },
      children: /* @__PURE__ */ t(_, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(At, { size: 26 }) })
    }
  ) });
}, Zt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(_s, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ v(Cs, { children: [
  /* @__PURE__ */ t(Ts, { fontSize: "small" }),
  /* @__PURE__ */ t(ce, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ce,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    _n,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, It = 24, Ki = 720, ji = 1140, Vi = 1250, Yi = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: i,
  sidebarWidthPx: s,
  bottomOffsetPx: a,
  fullScreen: c,
  fullScreenBottom: h = "0px",
  onClose: m
}) => {
  l.useEffect(() => {
    if (!e || !m)
      return;
    const g = (R) => {
      R.key === "Escape" && m();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [e, m]);
  const d = r === "docked", x = It + a;
  let p;
  c ? p = {
    top: 0,
    left: 0,
    right: 0,
    bottom: h,
    borderRadius: 0
  } : d ? p = {
    top: 0,
    right: 0,
    bottom: 0,
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : p = {
    bottom: x,
    ...n === "left" ? { left: s + It } : { right: It },
    width: i,
    maxWidth: `calc(100vw - ${It * 2}px)`,
    height: `min(${Ki}px, calc(100vh - ${x + It}px))`,
    borderRadius: "12px"
  };
  const f = /* @__PURE__ */ t(
    Yo,
    {
      role: d ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: d ? ji : Vi,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...p
      },
      children: o
    }
  );
  return d ? /* @__PURE__ */ t(As, { direction: "left", in: e, mountOnEnter: !0, children: f }) : /* @__PURE__ */ t(
    Os,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: f
    }
  );
}, qi = 180, fn = 250, Zi = "#01584F", Qi = ({
  text: e,
  testId: o
}) => {
  const r = l.useRef(null), [n, i] = l.useState(!1), s = l.useCallback(() => {
    const a = r.current;
    a && i(a.scrollWidth > a.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    s();
  }, [s, e]), l.useEffect(() => {
    const a = r.current;
    if (!a)
      return;
    const c = new ResizeObserver(() => s());
    return c.observe(a), () => c.disconnect();
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
        ce,
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
}, jn = (e, o, r, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : o, a = e ? Zi : o;
  return { activeBg: a, sx: n ? {
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
    backgroundColor: r ? a : "transparent",
    "&:hover": {
      backgroundColor: r ? a : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : s
    }
  } : {
    width: i,
    height: i,
    color: r ? "#ffffff" : s,
    backgroundColor: r ? a : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? a : "action.hover",
      borderRadius: "4px"
    }
  } };
}, Vn = ({ link: e }) => /* @__PURE__ */ v(Oe, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Qi,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Yn = (e, o, r) => r ? e : /* @__PURE__ */ t(Se, { title: o, placement: "right", arrow: !0, children: e }), Ji = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: a
}) => {
  const c = Fe(), [h, m] = l.useState(null), [d, x] = l.useState(!1), p = l.useRef(
    null
  ), f = l.useRef(null), g = l.useRef(null), R = l.useRef(!1), b = l.useRef(!1), y = l.useId(), E = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, w = () => {
    E(), p.current = setTimeout(() => {
      x(!1), p.current = null;
    }, qi);
  }, T = () => {
    E(), x(!0);
  };
  l.useEffect(() => {
    if (!d)
      return;
    const L = (P) => {
      var B;
      P.key === "Escape" && (x(!1), (B = g.current) == null || B.focus());
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [d]), l.useEffect(() => {
    if (!d || !b.current)
      return;
    const L = globalThis.requestAnimationFrame(() => {
      var B;
      const P = (B = f.current) == null ? void 0 : B.querySelector(
        '[role="menuitem"]'
      );
      P == null || P.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame(L);
  }, [d]);
  const O = qe(e, o), { activeBg: I, sx: S } = jn(
    i,
    n,
    O,
    a
  ), A = /* @__PURE__ */ t(
    be,
    {
      ref: g,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        R.current || T();
      },
      onBlur: (L) => {
        var B;
        const P = L.relatedTarget;
        P && ((B = f.current) != null && B.contains(P)) || w();
      },
      onKeyDown: (L) => {
        L.key === "ArrowDown" && (L.preventDefault(), b.current = !0, T());
      },
      onClick: (L) => {
        L.preventDefault(), L.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": d,
      "aria-controls": d ? y : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: S,
      children: a ? /* @__PURE__ */ t(Vn, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ v(
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
            ref: m,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              R.current = !0, T();
            },
            onMouseLeave: () => {
              R.current = !1, w();
            },
            children: Yn(A, e.text, a)
          }
        ),
        /* @__PURE__ */ t(
          Vo,
          {
            open: d && !!h,
            anchorEl: h,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (L) => L.zIndex.modal },
            children: /* @__PURE__ */ t(
              Yo,
              {
                ref: f,
                elevation: 0,
                onMouseEnter: E,
                onMouseLeave: w,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: s,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: c.shadows[8],
                  maxWidth: fn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  qo,
                  {
                    id: y,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: fn
                    },
                    children: k(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function k(L, P, B) {
    return L.flatMap(($) => {
      const N = pt(P, $);
      return mt($) ? [
        /* @__PURE__ */ t(
          $s,
          {
            disableSticky: !0,
            title: $.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + B * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: $.text
          },
          N
        ),
        ...k($.subitems, N, B + 1)
      ] : [
        /* @__PURE__ */ v(
          Je,
          {
            role: "menuitem",
            title: $.text,
            disabled: !$.path,
            selected: ke($, o),
            onClick: (oe) => {
              oe.preventDefault(), $.path && (r == null || r($.path)), x(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + B * 1.5,
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
                bgcolor: I,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: I
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              $.icon ? /* @__PURE__ */ t(ye, { children: $.icon }) : null,
              /* @__PURE__ */ t(
                Ne,
                {
                  primary: $.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          N
        )
      ];
    });
  }
}, ea = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const a = !!(e.path && o === e.path), { sx: c } = jn(
    i,
    n,
    a,
    s
  );
  return Yn(
    /* @__PURE__ */ t(
      be,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (h) => {
          h.preventDefault(), h.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: c,
        children: s ? /* @__PURE__ */ t(Vn, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, ta = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(et, { sx: { width: "60%", borderColor: "divider" } })
  }
), oa = () => /* @__PURE__ */ t(
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
), hn = (e, o) => e.map((r, n) => /* @__PURE__ */ v(l.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(ta, {}) : null
] }, n)), ra = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: a = !1
}) => {
  const c = (m, d) => mt(m) ? /* @__PURE__ */ t(
    Ji,
    {
      link: m,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: d,
      surfaceBackgroundColor: s,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ t(
    ea,
    {
      link: m,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: d,
      railShowTitles: a
    }
  ), h = a ? 1.25 : 1;
  return /* @__PURE__ */ v(
    Oe,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: h
      },
      children: [
        hn(e, (m) => c(m, !1)),
        o.length > 0 ? /* @__PURE__ */ v(Te, { children: [
          /* @__PURE__ */ t(oa, {}),
          /* @__PURE__ */ t(_, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Oe, { gap: h, alignItems: "center", children: hn(
            o,
            (m) => c(m, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, na = (e) => e ? Ln(e) : "USER", sa = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), pn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Uo = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, fr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Ds,
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
    children: sa(e)
  }
), qn = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ v(Te, { children: [
  /* @__PURE__ */ t(fr, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ v(
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
          ce,
          {
            variant: "body2",
            sx: { ...pn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ce,
          {
            variant: "caption",
            sx: { ...pn, opacity: 0.8, color: "inherit" },
            children: na(o)
          }
        )
      ]
    }
  )
] }), mn = {
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
}, Zn = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: i,
  showNotifications: s,
  notificationCount: a,
  onNotificationsClick: c,
  userName: h = "User",
  userRole: m,
  userAvatar: d,
  menuItems: x = [],
  showSettings: p,
  onSettingsClick: f,
  showThemeToggler: g,
  theme: R,
  onThemeToggle: b,
  onLogout: y
}) => {
  const E = (w) => () => {
    o(), w == null || w();
  };
  return /* @__PURE__ */ v(
    Ls,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: mn[r].anchor,
      transformOrigin: mn[r].transform,
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
          Oe,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              qn,
              {
                name: h,
                role: m,
                avatar: d,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(et, {}),
        s && /* @__PURE__ */ v(Je, { onClick: E(c), children: [
          /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(On, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Ne, { children: "Notifications" }),
          /* @__PURE__ */ t(Uo, { count: a })
        ] }),
        x.map((w) => /* @__PURE__ */ v(Je, { onClick: E(w.onClick), children: [
          w.icon && /* @__PURE__ */ t(ye, { children: w.icon }),
          /* @__PURE__ */ t(Ne, { inset: !w.icon, children: w.label }),
          /* @__PURE__ */ t(Uo, { count: w.badge })
        ] }, w.key)),
        p && /* @__PURE__ */ v(Je, { onClick: E(f), children: [
          /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(Ms, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Ne, { children: "Settings" })
        ] }),
        g && [
          /* @__PURE__ */ t(et, {}, "theme-divider"),
          /* @__PURE__ */ v(_, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              ce,
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
            /* @__PURE__ */ v(
              ks,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: R,
                onChange: (w, T) => T && T !== R && (b == null ? void 0 : b()),
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
                  /* @__PURE__ */ t(Gr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Gr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(et, {}),
        /* @__PURE__ */ v(
          Je,
          {
            onClick: E(y),
            sx: {
              color: R === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ye, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Tn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Ne, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Qn = 64, ia = 2, _t = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: i,
  activeColor: s,
  activeBackground: a,
  ariaLabel: c,
  haspopup: h,
  isPage: m = !1,
  testId: d
}) => /* @__PURE__ */ v(
  ot,
  {
    onClick: r,
    "aria-label": c ?? e,
    "aria-haspopup": h,
    "aria-expanded": h ? n : void 0,
    "aria-current": m && n ? "page" : void 0,
    "data-testid": d,
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
        _,
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
        ce,
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
), aa = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: s,
  assistantActive: a,
  showProfile: c,
  background: h,
  color: m,
  activeColor: d,
  activeBackground: x,
  pinnedLinks: p = [],
  activePath: f,
  onLinkClick: g,
  ...R
}) => {
  const b = p.filter((S) => S.path).slice(0, ia), [y, E] = l.useState(
    null
  ), { userName: w = "User", userAvatar: T, avatarColor: O } = R, I = { color: m, activeColor: d, activeBackground: x };
  return /* @__PURE__ */ v(
    Yo,
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
        height: `calc(${Qn}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: h,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          _t,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Cn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...I
          }
        ),
        b.map((S) => /* @__PURE__ */ t(
          _t,
          {
            label: S.text,
            icon: S.icon,
            onClick: () => g == null ? void 0 : g(S.path),
            active: qe(S, f),
            isPage: !0,
            testId: `mobile-nav-link-${S.text}`,
            ...I
          },
          S.path
        )),
        i && /* @__PURE__ */ t(
          _t,
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
                  borderColor: a ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(At, { size: 18 })
              }
            ),
            onClick: s,
            active: a,
            testId: "mobile-nav-nexa",
            ...I
          }
        ),
        r && /* @__PURE__ */ t(
          _t,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Zo, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...I
          }
        ),
        c && /* @__PURE__ */ v(Te, { children: [
          /* @__PURE__ */ t(
            _t,
            {
              label: "Account",
              ariaLabel: `Account menu for ${w}`,
              icon: /* @__PURE__ */ t(
                fr,
                {
                  name: w,
                  avatar: T,
                  color: O,
                  size: 26
                }
              ),
              onClick: (S) => E(S.currentTarget),
              active: !!y,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...I
            }
          ),
          /* @__PURE__ */ t(
            Zn,
            {
              anchorEl: y,
              onClose: () => E(null),
              placement: "above-end",
              width: 280,
              ...R
            }
          )
        ] })
      ]
    }
  );
}, ca = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Ns,
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
    children: /* @__PURE__ */ v(
      Oe,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(_, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            _n,
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
), la = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: i,
  brandMenuOpen: s,
  background: a,
  color: c,
  brandColor: h = c,
  endContent: m
}) => /* @__PURE__ */ t(
  Fs,
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
    children: /* @__PURE__ */ v(Ws, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        be,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: c },
          children: /* @__PURE__ */ t(Cn, {})
        }
      ),
      /* @__PURE__ */ t(
        ro,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: i,
          menuOpen: s,
          color: h,
          testId: "mobile-brand"
        }
      ),
      m ? /* @__PURE__ */ t(_, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: m }) : null
    ] })
  }
), hr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const a = cr(), c = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Se,
    {
      title: c,
      placement: i,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ t(
        be,
        {
          onClick: o,
          "aria-label": c,
          "data-testid": s,
          sx: {
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
            An,
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
              children: /* @__PURE__ */ t(On, {})
            }
          )
        }
      )
    }
  );
}, Jn = {
  "&:focus, &:focus-visible": { outline: "none" }
}, da = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, gn = ve(Mn), xn = ve(co), bn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', ua = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = Fe().palette.mode === "dark", a = gt(), c = l.useRef(null), h = l.useRef(null), m = (p) => {
    var f;
    p !== e && (o == null || o()), (f = (p === "light" ? c : h).current) == null || f.focus();
  }, d = (p) => {
    if (!(p.key === "Tab" || p.key === "Escape"))
      switch (p.stopPropagation(), p.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          p.preventDefault(), m(e === "light" ? "dark" : "light");
          break;
        case "Home":
          p.preventDefault(), m("light");
          break;
        case "End":
          p.preventDefault(), m("dark");
          break;
      }
  }, x = (p, f, g, R) => {
    const b = e === p;
    return /* @__PURE__ */ t(
      ot,
      {
        ref: R,
        role: "radio",
        "aria-checked": b,
        "aria-label": f,
        tabIndex: b ? 0 : -1,
        onClick: () => m(p),
        "data-testid": `theme-segment-${p}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: i ? `${te}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? s ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...i && b ? ar(s, a) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...i && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": b ? { transform: "scale(1.06)" } : {
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
          ...Jn
        },
        children: /* @__PURE__ */ t(g, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ v(
    Oe,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: d,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: i ? `${te}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        x("light", "Light", Bs, c),
        x("dark", "Dark", Ps, h)
      ]
    }
  );
}, fa = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: i,
  userName: s,
  userEmail: a,
  roleLabel: c,
  accentColor: h,
  tint: m,
  showThemeToggler: d,
  theme: x,
  onThemeToggle: p,
  onProfileClick: f,
  onLinkClick: g,
  menuItems: R = [],
  onLogout: b,
  glass: y = !1
}) => {
  const E = Fe(), w = E.palette.mode === "dark", T = l.useRef(null), O = rr(E.palette.background.paper), I = lr({
    enabled: y,
    isDark: w,
    selector: bn,
    radius: te
  }), [S, A] = l.useState(null);
  l.useEffect(() => {
    if (!S || typeof ResizeObserver > "u")
      return;
    const $ = new ResizeObserver(() => {
      var N;
      (N = T.current) == null || N.updatePosition();
    });
    return $.observe(S), () => $.disconnect();
  }, [S]);
  const k = ($) => {
    r(), $ == null || $();
  }, L = ($) => {
    r(), $.onClick ? $.onClick() : $.path && (g == null || g($.path));
  }, P = {
    borderRadius: y ? `${te}px` : "8px",
    py: 1,
    gap: 0.5
  }, B = /* @__PURE__ */ v(Oe, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ v(_, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ce, { noWrap: !0, sx: { fontWeight: 600 }, children: s }),
      a ? /* @__PURE__ */ t(
        ce,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: a
        }
      ) : null,
      c ? /* @__PURE__ */ t(
        ce,
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
      f ? /* @__PURE__ */ t(
        ce,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: w ? "#ffffff" : h,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    Qo,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: T,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...y ? {
        slots: { transition: jo },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: A,
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
      children: /* @__PURE__ */ v(
        _,
        {
          "data-testid": "account-menu",
          "data-glass": y ? "true" : void 0,
          sx: y ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${te}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${bn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...da, width: n, minWidth: n },
          children: [
            y ? /* @__PURE__ */ t(
              xt,
              {
                isDark: w,
                solid: O,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${sr} ${gn.duration}ms ${gn.easing} both`,
                  [Ie]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ v(
              _,
              {
                ...I.containerProps,
                sx: y ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${ir} ${xn.duration}ms ${xn.easing} 70ms both`,
                  [Ie]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  I.lens,
                  f ? /* @__PURE__ */ t(
                    ot,
                    {
                      onClick: () => k(f),
                      "data-testid": "account-menu-header",
                      sx: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        transition: "background-color 150ms ease",
                        "& [data-hint]": { display: "none" },
                        "&:hover, &.Mui-focusVisible": {
                          bgcolor: m,
                          "& [data-hint]": { display: "block" },
                          "& [data-role]": { display: "none" }
                        },
                        ...Jn
                      },
                      children: B
                    }
                  ) : /* @__PURE__ */ t(_, { "data-testid": "account-menu-header", children: B }),
                  /* @__PURE__ */ t(et, {}),
                  d ? /* @__PURE__ */ v(
                    _,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...P,
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
                        /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(Gs, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ce, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          ua,
                          {
                            glass: y,
                            mode: x,
                            onToggle: p,
                            accentColor: h,
                            tint: m
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ v(
                    qo,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: d ? 0 : 0.5, pb: 0.5 },
                      children: [
                        R.map(($) => /* @__PURE__ */ v(
                          Je,
                          {
                            onClick: () => L($),
                            "data-testid": `menu-item-${$.key}`,
                            sx: P,
                            children: [
                              /* @__PURE__ */ t(ye, { children: $.icon }),
                              /* @__PURE__ */ t(ce, { sx: { flex: 1 }, children: $.label }),
                              /* @__PURE__ */ t(Uo, { count: $.badge })
                            ]
                          },
                          $.key
                        )),
                        b ? /* @__PURE__ */ t(et, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ v(
                          Je,
                          {
                            onClick: () => k(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...P,
                              color: w ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(ye, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Tn, { fontSize: "small" }) }),
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
}, ha = {
  "&:focus, &:focus-visible": { outline: "none" }
}, pa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: i,
  title: s,
  onBrandClick: a,
  brandMenuOpen: c,
  brandColor: h,
  headerBackgroundColor: m,
  headerForegroundColor: d,
  activeAccentColor: x = "#01584f",
  groupAccentColor: p,
  activeForegroundColor: f,
  foregroundColor: g,
  surfaceBackgroundColor: R,
  flyoutSurfaceColor: b,
  collapsed: y,
  expandedWidth: E,
  collapsedWidth: w,
  topContent: T,
  submenuMode: O,
  color: I,
  hoverColor: S,
  avatarColor: A,
  showProfile: k = !0,
  userName: L = "User",
  userEmail: P,
  userRole: B,
  userAvatar: $,
  showNotifications: N = !0,
  notificationCount: oe = 0,
  onNotificationsClick: pe,
  whatsNewCount: G = 0,
  onProfileClick: z,
  menuItems: U,
  onLogout: ne,
  theme: ae = "light",
  showThemeToggler: C = !0,
  onThemeToggle: H
}) => {
  const q = Fe(), X = q.palette.mode === "dark", F = R ?? (X ? q.palette.background.paper : "#ffffff"), Z = I ?? g ?? (X ? q.palette.text.primary : x), le = S ?? p ?? no(x), _e = A ?? x, Xe = l.useRef(null), [me, fe] = l.useState(!1), Q = B ? Ln(B) : void 0, J = (lt) => /* @__PURE__ */ t(
    fr,
    {
      name: L,
      avatar: $,
      color: _e,
      size: lt
    }
  ), Ae = oe + G, we = y && O === "flyout", Ke = N ? /* @__PURE__ */ t(
    hr,
    {
      count: Ae,
      onClick: pe,
      color: Z,
      hoverColor: le,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, $e = k ? /* @__PURE__ */ v(
    ot,
    {
      ref: Xe,
      onClick: () => fe(!0),
      "aria-haspopup": "menu",
      "aria-expanded": me,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: y ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: me ? le : "transparent",
        "&:hover": { bgcolor: le },
        ...ha
      },
      children: [
        y && !we && N ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            An,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Ae,
              children: J(36)
            }
          )
        ) : J(y ? 36 : 40),
        y ? null : /* @__PURE__ */ v(_, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ce,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Z, lineHeight: 1.3 },
              children: L
            }
          ),
          Q ? /* @__PURE__ */ t(
            ce,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: Z,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: Q
            }
          ) : null
        ] })
      ]
    }
  ) : null, Me = !!Ke && (!y || we || !$e);
  return /* @__PURE__ */ v(
    _,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": y ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          Po,
          {
            mainLinks: e,
            secondaryLinks: o,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: i,
            title: s,
            onBrandClick: a,
            brandMenuOpen: c,
            brandColor: h,
            headerBackgroundColor: m,
            headerForegroundColor: d,
            activeAccentColor: x,
            groupAccentColor: p,
            activeForegroundColor: f,
            foregroundColor: g,
            surfaceBackgroundColor: F,
            flyoutSurfaceColor: b,
            collapsed: y,
            expandedWidth: E,
            collapsedWidth: w,
            topContent: T,
            footer: $e || Me ? /* @__PURE__ */ v(
              Oe,
              {
                direction: we ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  we && Me ? Ke : null,
                  $e,
                  !we && Me ? Ke : null
                ]
              }
            ) : void 0,
            submenuMode: O
          }
        ),
        k ? /* @__PURE__ */ t(
          fa,
          {
            open: me,
            anchorEl: Xe.current,
            onClose: () => fe(!1),
            width: Math.max(E - 16, 240),
            renderAvatar: J,
            userName: L,
            userEmail: P,
            roleLabel: Q,
            accentColor: x,
            tint: le,
            showThemeToggler: C,
            theme: ae,
            onThemeToggle: H,
            onProfileClick: z,
            onLinkClick: n,
            menuItems: U,
            onLogout: ne,
            glass: O === "flyout"
          }
        ) : null
      ]
    }
  );
}, yn = ve(Mn), Sn = ve(co), vn = 260, ma = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, ga = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: a = !1
}) => {
  const c = Fe(), h = c.palette.mode === "dark", m = !!e, d = rr(c.palette.background.paper), x = lr({
    enabled: a,
    isDark: h,
    selector: ".MuiMenuItem-root",
    radius: te
  }), p = /* @__PURE__ */ t(
    qo,
    {
      autoFocusItem: m,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((f) => {
        const g = f.key === n, R = f.accentColor ?? s;
        return /* @__PURE__ */ v(
          Je,
          {
            selected: g,
            onClick: () => i(f),
            "data-testid": `platform-item-${f.key}`,
            sx: {
              borderRadius: a ? `${te}px` : "8px",
              py: 1,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...a && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(ye, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                _,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: R,
                    boxShadow: a ? `0 0 0 3px ${h ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Ne,
                {
                  primary: f.name,
                  secondary: f.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              g ? /* @__PURE__ */ t(
                zs,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: R }
                }
              ) : null
            ]
          },
          f.key
        );
      })
    }
  );
  return /* @__PURE__ */ t(
    Qo,
    {
      open: m,
      anchorEl: e,
      onClose: o,
      onClick: (f) => f.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: jo },
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
          "data-glass": a ? "true" : void 0,
          sx: a ? {
            position: "relative",
            minWidth: vn,
            borderRadius: `${te}px`
          } : { ...ma, minWidth: vn },
          children: a ? /* @__PURE__ */ v(Te, { children: [
            /* @__PURE__ */ t(
              xt,
              {
                isDark: h,
                solid: d,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${sr} ${yn.duration}ms ${yn.easing} both`,
                  [Ie]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ v(
              _,
              {
                ...x.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${ir} ${Sn.duration}ms ${Sn.easing} 70ms both`,
                  [Ie]: { animation: "none" }
                },
                children: [
                  x.lens,
                  p
                ]
              }
            )
          ] }) : p
        }
      )
    }
  );
}, xa = ({ children: e, anchorEl: o, ...r }) => {
  const n = l.useRef(null), i = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ v(
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
          ga,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, ba = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: i = 0,
  ...s
}) => {
  var w;
  const {
    avatarColor: a,
    showNotifications: c,
    notificationCount: h,
    onNotificationsClick: m,
    userName: d = "User",
    userRole: x,
    userAvatar: p
  } = s, f = l.useRef(null), [g, R] = l.useState(
    null
  ), b = !!g, y = l.useRef(e);
  if (l.useEffect(() => {
    e && !y.current && R(null), y.current = e;
  }, [e]), !c && !n)
    return null;
  const E = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ v(Te, { children: [
    /* @__PURE__ */ v(
      Oe,
      {
        ref: f,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Se,
            {
              title: e ? d : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                ot,
                {
                  onClick: () => R(f.current),
                  "aria-label": `Account menu for ${d}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": b,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: b ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...E
                  },
                  children: /* @__PURE__ */ t(
                    qn,
                    {
                      name: d,
                      role: x,
                      avatar: p,
                      avatarColor: a,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          c && /* @__PURE__ */ t(
            hr,
            {
              count: h + i,
              onClick: m,
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
      Zn,
      {
        anchorEl: g,
        onClose: () => R(null),
        placement: e ? "beside" : "above",
        width: e || (w = f.current) == null ? void 0 : w.clientWidth,
        ...s
      }
    )
  ] });
}, ya = 120, Sa = 300, wn = ve($n), En = ve(co), va = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, wa = 'input, textarea, [contenteditable="true"]', Xo = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(wa)) == null || o.focus();
}, Ea = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: s,
  hoverColor: a
}) => {
  const c = cr(), h = l.useContext(uo), m = l.useRef(null), [d, x] = l.useState(null);
  return l.useEffect(() => {
    o === "full" && n && (Xo(m.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    _,
    {
      ref: m,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && h ? /* @__PURE__ */ t(
    Ra,
    {
      search: e,
      color: s,
      railTooltip: c
    }
  ) : /* @__PURE__ */ v(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Se, { title: "Search", placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
          be,
          {
            "aria-label": "Search",
            onClick: (p) => o === "expand" ? r == null ? void 0 : r() : x(p.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: s,
              borderRadius: "8px",
              "&:hover": { bgcolor: a }
            },
            children: /* @__PURE__ */ t(Zo, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Qo,
          {
            open: !!d,
            anchorEl: d,
            onClose: () => x(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => Xo(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, Ra = ({ search: e, color: o, railTooltip: r }) => {
  const n = Fe().palette.mode === "dark";
  Qs(n, No(o, n ? 0.3 : 0.35));
  const i = `rgb(${gt()})`, s = rr(n ? "#1e2430" : "#ffffff"), a = {
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
  }, c = l.useRef(null), h = l.useRef(null), [m, d] = l.useState(!1), x = l.useRef(!1), p = l.useRef(void 0), f = l.useRef(void 0), g = () => {
    clearTimeout(p.current), clearTimeout(f.current);
  }, R = l.useCallback(() => {
    g(), x.current = !1, d(!1);
  }, []), b = () => {
    clearTimeout(f.current), m || (clearTimeout(p.current), p.current = setTimeout(
      () => d(!0),
      ya
    ));
  }, y = () => {
    clearTimeout(p.current), clearTimeout(f.current), f.current = setTimeout(() => {
      !x.current && !va(h.current) && d(!1);
    }, Sa);
  };
  return l.useEffect(() => g, []), l.useEffect(() => {
    if (!m)
      return;
    const E = setTimeout(() => Xo(h.current)), w = (O) => {
      var S, A;
      const I = O.target;
      !((S = h.current) != null && S.contains(I)) && !((A = c.current) != null && A.contains(I)) && R();
    }, T = (O) => {
      var I;
      O.key === "Escape" && (R(), (I = c.current) == null || I.focus());
    };
    return document.addEventListener("pointerdown", w), document.addEventListener("keydown", T), () => {
      clearTimeout(E), document.removeEventListener("pointerdown", w), document.removeEventListener("keydown", T);
    };
  }, [m, R]), /* @__PURE__ */ v(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Se,
          {
            title: m ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              be,
              {
                ref: c,
                "aria-label": "Search",
                "aria-expanded": m,
                onMouseEnter: b,
                onMouseLeave: y,
                onClick: () => {
                  g(), x.current = !0, d(!0);
                },
                sx: {
                  width: 44,
                  height: 44,
                  color: o,
                  borderRadius: `${te}px`
                },
                children: /* @__PURE__ */ t(Zo, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Vo,
          {
            open: m,
            anchorEl: c.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ v(
              _,
              {
                ref: h,
                "data-testid": "sidebar-search-card",
                onMouseEnter: b,
                onMouseLeave: y,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: `${te}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    xt,
                    {
                      isDark: n,
                      solid: s,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${sr} ${wn.duration}ms ${wn.easing} both`,
                        [Ie]: { animation: "none" }
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
                        ...a,
                        animation: `${ir} ${En.duration}ms ${En.easing} 60ms both`,
                        [Ie]: { animation: "none" }
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
}, Ia = 100, _a = () => {
  const e = l.useRef(null), o = l.useRef(void 0), r = l.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = l.useState(!1), [s, a] = l.useState(!1), c = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return l.useEffect(() => {
    const m = (x) => {
      r.current.has(x) || (c(), i(!1));
    }, d = () => {
      c(), i(!1);
    };
    return document.addEventListener("mouseover", m), document.documentElement.addEventListener("mouseleave", d), () => {
      c(), document.removeEventListener("mouseover", m), document.documentElement.removeEventListener(
        "mouseleave",
        d
      );
    };
  }, []), l.useEffect(() => {
    if (!s)
      return;
    const m = (d) => {
      var x;
      (x = e.current) != null && x.contains(d.target) || a(!1);
    };
    return document.addEventListener("pointerdown", m), () => document.removeEventListener("pointerdown", m);
  }, [s]), {
    expanded: n || s,
    pin: () => a(!0),
    rootProps: {
      ref: e,
      onMouseOver: (m) => {
        r.current.add(m.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, i(!0);
        }, Ia));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (m) => {
        const d = m.relatedTarget;
        d && !m.currentTarget.contains(d) && a(!1);
      },
      onKeyDown: (m) => {
        m.key === "Escape" && a(!1);
      }
    }
  };
}, Ca = 300, Mo = 288, Ta = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Oa = 68, Aa = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), $a = typeof window > "u" ? Qt : Es, Ac = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: a = "rail",
  sidebarSubmenu: c = "expand",
  mobileNavigation: h = "bottom-bar",
  mobileBottomBarLinks: m,
  logo: d,
  onBrandClick: x,
  searchComponent: p,
  brandColor: f,
  contentPadding: g = Bn,
  userMenuItems: R,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: E,
  activeSidebarForegroundColor: w,
  enableRefreshToken: T = !1,
  holdSessionSkeleton: O = !1,
  activePath: I,
  onLinkClick: S,
  showProfile: A = !0,
  userName: k,
  userRole: L,
  userAvatar: P,
  userEmail: B,
  onLogout: $,
  showSettings: N = !0,
  onSettingsClick: oe,
  onProfileClick: pe,
  showNotifications: G = !0,
  notificationCount: z = 0,
  NotificationSidebarContent: U,
  whatsNewCount: ne = 0,
  onNotificationsClick: ae,
  platforms: C,
  currentPlatformKey: H,
  onPlatformSelect: q,
  onVerify: X,
  alertProps: F,
  style: Z,
  sidebarStyles: le,
  contentStyles: _e,
  accentColor: Xe,
  sidebarAccentColor: me,
  sidebarForegroundColor: fe,
  contentBackgroundColor: Q,
  theme: J = "light",
  darkModeSelector: Ae,
  showThemeToggler: we = !1,
  onThemeToggle: Ke,
  GlobalChatSidebar: $e,
  useChatSidebar: Me,
  chatPanelMode: Wt = "docked",
  chatPanelPosition: lt = "right",
  chatPanelWidth: Pt = 420,
  onChatClose: ho,
  showAssistant: rt = !1,
  assistantPlacement: bt = "sidebar",
  assistantShortcut: Bt = "j",
  onAssistantClick: je,
  assistantActive: dt = !1,
  assistantBusy: Gt = !1,
  customNavbar: zt,
  customNavbarProps: po,
  redirectToLogin: Ve,
  apiBaseUrl: yt
}) => {
  const u = Rn(), M = In(u.breakpoints.down("md")), V = Fr(
    () => ao(dr(J)),
    [J]
  ), W = J === "dark", K = Xe ?? "#01584f", j = me ?? K, ue = Un(
    typeof Q == "object" ? Q[J] : Q,
    W
  ), re = a === "collapsible", ge = a === "panel", mo = ge && i && !M, nt = a === "rail-labeled", es = re || nt, De = Hn(
    b,
    W
  ), go = y ?? De, We = fe ?? (W ? "#ffffff" : j), St = E ?? no(We), vt = y ? ko(go) : We, pr = (D) => /* @__PURE__ */ t(
    ee,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: D,
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
  ), Ht = f ?? vt, [mr, xo] = it(
    null
  ), bo = ((C == null ? void 0 : C.length) ?? 0) > 1, ts = Wr(() => xo(null), []), os = (D) => {
    xo(null), q ? q(D) : D.key !== H && D.url && window.location.assign(D.url);
  }, gr = (D) => bo ? /* @__PURE__ */ t(
    xa,
    {
      anchorEl: mr,
      onClose: ts,
      platforms: C,
      currentKey: H,
      onSelect: os,
      accentColor: K,
      glass: c === "flyout" && (re || ge) && !M,
      children: D
    }
  ) : D, Ut = bo ? (D) => xo(D.currentTarget) : x, Xt = bo ? !!mr : void 0, yo = gr(
    d ?? pr(Ht)
  ), rs = gr(
    d ?? pr(f ?? We)
  ), So = _a(), Pe = ur(c, a), Le = Pe || !So.expanded, xr = Pe ? "popover" : "expand", br = Pe ? Go : Ot, yr = Pe ? "transparent" : De, Sr = Pe && !y ? "transparent" : go, [ns, vr] = it(!1), ss = Wr(() => vr(!1), []), Be = zn({
    showSidebar: i,
    isMobile: M,
    sidebarVariant: a,
    sidebarSubmenu: c
  }), [wr, st] = it(!1), [Er, vo] = it(!1), xe = M && h === "bottom-bar", Rr = `calc(${Qn}px + env(safe-area-inset-bottom, 0px))`, [wo, Ir] = it({ open: !1, tab: "notifications" }), _r = () => Ir((D) => ({ ...D, open: !1 })), is = G && !!U, [as, cs] = it(!0), [ls, ds] = it(!1), Eo = Me == null ? void 0 : Me(), Cr = (Eo == null ? void 0 : Eo.isOpen) ?? !1, Tr = Wt === "floating" ? "floating" : "docked", us = Tr === "docked" && Cr && $e && !M ? Pt : 0, Kt = To(X), Or = To(!1), Ar = Fr(
    () => Hi(yt),
    [yt]
  );
  Qt(() => {
    Kt.current = X;
  }, [X]);
  const Ro = To(je);
  Ro.current = je;
  const wt = rt && Bt ? Bt.toLowerCase() : null;
  Qt(() => {
    if (!wt)
      return;
    const D = (ie) => {
      (ie.metaKey || ie.ctrlKey) && !ie.altKey && !ie.shiftKey && ie.key.toLowerCase() === wt && Ro.current && (ie.preventDefault(), Ro.current());
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [wt]);
  const $r = (D) => {
    const ie = $(D);
    ie instanceof Promise && ie.catch((Ye) => {
      console.error("Error in logout handler:", Ye);
    });
  };
  if ($a(() => {
    (() => {
      var ie;
      try {
        const { isAuthenticated: Ye } = Gi();
        if (!Ye) {
          console.log("No session found, redirecting to login"), Nt(), Ve();
          return;
        }
        if (!Or.current) {
          const { user: Rt, error: Co } = zi();
          if (Rt && !Co) {
            const ys = {
              name: Rt.name || "",
              email: Rt.email || "",
              profilePicture: Rt.profilePicture || "",
              role: Rt.role || ""
            };
            Or.current = !0, (ie = Kt.current) == null || ie.call(Kt, ys);
          } else
            Co && console.error("Error getting user data:", Co);
        }
        ds(!0);
      } catch (Ye) {
        console.error("Error checking session:", Ye), Nt(), Ve();
      } finally {
        cs(!1);
      }
    })();
  }, [Ve]), Qt(() => {
    T && Ui(Ar, Ve);
  }, [T, Ar]), as || O)
    return /* @__PURE__ */ t(
      Pi,
      {
        theme: J,
        darkModeSelector: Ae,
        sidebarVariant: a,
        sidebarSubmenu: c,
        showSidebar: i,
        contentPadding: g,
        sidebarBackgroundColor: b,
        contentBackgroundColor: Q
      }
    );
  if (!ls)
    return null;
  const Et = p ?? (zt ? /* @__PURE__ */ t(zt, { ...po }) : null), fs = (D) => {
    st(!1), vo(!1), Ir({ open: !0, tab: D });
  }, Io = U && (() => fs("notifications")), hs = z + ne, Mr = {
    avatarColor: j,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: R == null ? void 0 : R.map(
      (D) => D.onClick || !D.path ? D : { ...D, onClick: () => S == null ? void 0 : S(D.path) }
    ),
    showNotifications: G,
    notificationCount: z,
    whatsNewCount: ne,
    onNotificationsClick: Io,
    showProfile: A,
    userName: k,
    userRole: L,
    userAvatar: P,
    showSettings: N,
    onSettingsClick: oe,
    showThemeToggler: we,
    theme: J,
    onThemeToggle: Ke,
    onLogout: $r
  }, _o = (D) => /* @__PURE__ */ t(
    ba,
    {
      ...Mr,
      compact: D,
      color: We,
      hoverColor: St
    }
  ), Dr = wt ? [Aa() ? "⌘" : "Ctrl", wt.toUpperCase()] : void 0, ps = (D) => rt && bt === "sidebar" ? /* @__PURE__ */ t(
    un,
    {
      variant: D ? "sidebar-icon" : "sidebar",
      onClick: je,
      active: dt,
      busy: Gt,
      shortcutKeys: Dr,
      accentColor: We
    }
  ) : null, ms = (D) => Et ? /* @__PURE__ */ t(
    Ea,
    {
      search: Et,
      mode: D,
      onExpand: () => {
        So.pin(), vr(!0);
      },
      autoFocus: ns,
      onAutoFocused: ss,
      color: We,
      hoverColor: St
    }
  ) : null, jt = (D) => {
    const ie = ps(D !== "full"), Ye = ms(D);
    return ie || Ye ? /* @__PURE__ */ v(
      Lo,
      {
        spacing: 1.5,
        sx: { alignItems: D === "full" ? "stretch" : "center" },
        children: [
          ie,
          Ye
        ]
      }
    ) : void 0;
  }, Lr = () => /* @__PURE__ */ t(
    Po,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: I,
      onLinkClick: S,
      showHeaderBar: re,
      logo: yo,
      title: n,
      onBrandClick: Ut,
      brandMenuOpen: Xt,
      brandColor: Ht,
      headerBackgroundColor: re ? Sr : void 0,
      headerForegroundColor: re ? vt : void 0,
      activeAccentColor: j,
      groupAccentColor: E,
      activeForegroundColor: w,
      foregroundColor: fe,
      surfaceBackgroundColor: yr,
      flyoutSurfaceColor: De,
      collapsed: nt || Le,
      showLabels: nt,
      expandedWidth: Mo,
      collapsedWidth: nt ? Wn : br,
      topContent: jt(
        nt ? "popover" : Le ? xr : "full"
      ),
      footer: _o(nt || Le),
      submenuMode: Pe ? "flyout" : "inline"
    }
  ), kr = (D) => Pe ? gs(D) : xs(D), gs = (D) => /* @__PURE__ */ t(
    ee,
    {
      component: "aside",
      sx: {
        width: Be,
        minWidth: Be,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: ue
      },
      children: /* @__PURE__ */ v(
        ee,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: Mt,
            bottom: Mt,
            left: Mt,
            width: Go,
            borderRadius: `${Pn}px`,
            display: "flex",
            flexDirection: "column",
            ...le
          },
          children: [
            /* @__PURE__ */ t(
              xt,
              {
                isDark: W,
                solid: De,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              ee,
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
                children: D
              }
            )
          ]
        }
      )
    }
  ), xs = (D) => /* @__PURE__ */ t(
    ee,
    {
      component: "aside",
      sx: {
        width: Ot,
        minWidth: Ot,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        ee,
        {
          ...Pe ? {} : So.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Le ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Le ? Ot : Mo,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: De,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Le ? "none" : `4px 0 24px rgba(0, 0, 0, ${W ? 0.5 : 0.12})`,
            transition: Ta,
            ...le
          },
          children: D
        }
      )
    }
  ), bs = Gn(
    g,
    u
  );
  return /* @__PURE__ */ t(oo, { theme: V, children: /* @__PURE__ */ t(kn.Provider, { value: j, children: /* @__PURE__ */ t(Ft.Provider, { value: De, children: /* @__PURE__ */ v(
    ee,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Z
      },
      children: [
        /* @__PURE__ */ t(Do, {}),
        M && /* @__PURE__ */ t(
          la,
          {
            height: Jt,
            onMenuClick: i && !xe ? () => st(!0) : void 0,
            appName: n,
            logo: yo,
            onBrandClick: Ut,
            brandMenuOpen: Xt,
            background: go,
            color: vt,
            brandColor: Ht,
            endContent: G ? /* @__PURE__ */ t(
              hr,
              {
                count: hs,
                onClick: Io,
                color: vt,
                hoverColor: St,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !M && nt && /* @__PURE__ */ t(
          ee,
          {
            component: "aside",
            sx: {
              width: Be,
              minWidth: Be,
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
            children: Lr()
          }
        ),
        i && !M && re && kr(
          /* @__PURE__ */ v(Te, { children: [
            Lr(),
            (F == null ? void 0 : F.show) && !Le && /* @__PURE__ */ t(Zt, { ...F })
          ] })
        ),
        mo && kr(
          /* @__PURE__ */ v(Te, { children: [
            /* @__PURE__ */ t(
              pa,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: I,
                onLinkClick: S,
                logo: yo,
                title: n,
                onBrandClick: Ut,
                brandMenuOpen: Xt,
                brandColor: Ht,
                headerBackgroundColor: Sr,
                headerForegroundColor: vt,
                activeAccentColor: j,
                groupAccentColor: E,
                activeForegroundColor: w,
                foregroundColor: fe,
                surfaceBackgroundColor: yr,
                flyoutSurfaceColor: De,
                collapsed: Le,
                expandedWidth: Mo,
                collapsedWidth: br,
                topContent: jt(
                  Le ? xr : "full"
                ),
                submenuMode: Pe ? "flyout" : "inline",
                color: We,
                hoverColor: St,
                avatarColor: j,
                showProfile: A,
                userName: k,
                userEmail: B,
                userRole: L,
                userAvatar: P,
                showNotifications: G,
                notificationCount: z,
                onNotificationsClick: is ? Io : ae,
                whatsNewCount: ne,
                onProfileClick: pe,
                menuItems: R,
                onLogout: $r,
                theme: J,
                showThemeToggler: we,
                onThemeToggle: Ke
              }
            ),
            (F == null ? void 0 : F.show) && !Le && /* @__PURE__ */ t(Zt, { ...F })
          ] })
        ),
        i && !M && !es && !ge && /* @__PURE__ */ t(
          Pr,
          {
            variant: "permanent",
            sx: {
              width: Be,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Be,
                boxSizing: "border-box",
                bgcolor: ue,
                borderRight: "none"
              },
              ...le
            },
            children: /* @__PURE__ */ v(
              ee,
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
                    ee,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        ro,
                        {
                          logo: rs,
                          appName: n,
                          onClick: Ut,
                          menuOpen: Xt,
                          color: f ?? We,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  jt("popover"),
                  /* @__PURE__ */ v(
                    ee,
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
                          ra,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: I,
                            onLinkClick: S,
                            accentColor: j,
                            surfaceBackgroundColor: ue,
                            railShowTitles: s
                          }
                        ),
                        (F == null ? void 0 : F.show) && /* @__PURE__ */ t(Zt, { ...F })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(ee, { sx: { py: 1.5 }, children: _o(!0) })
                ]
              }
            )
          }
        ),
        i && M && /* @__PURE__ */ v(
          Is,
          {
            anchor: xe ? "bottom" : "left",
            open: wr,
            onOpen: () => st(!0),
            onClose: () => st(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (D) => D.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: De,
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
                ee,
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
                Po,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: I,
                  onLinkClick: (D) => {
                    S == null || S(D), st(!1);
                  },
                  onLinkAction: () => st(!1),
                  collapsed: !1,
                  expandedWidth: xe ? "100%" : Ca,
                  activeAccentColor: j,
                  groupAccentColor: E,
                  activeForegroundColor: w,
                  foregroundColor: fe,
                  surfaceBackgroundColor: De,
                  topInsetPx: xe ? 8 : 0,
                  topContent: xe ? void 0 : jt("full"),
                  footer: xe ? void 0 : _o(!1)
                }
              ),
              (F == null ? void 0 : F.show) && /* @__PURE__ */ t(Zt, { ...F })
            ]
          }
        ),
        xe && Et && /* @__PURE__ */ t(
          ca,
          {
            open: Er,
            onClose: () => vo(!1),
            search: Et
          }
        ),
        xe && /* @__PURE__ */ t(
          aa,
          {
            ...Mr,
            pinnedLinks: m,
            activePath: I,
            onLinkClick: S,
            onMenuClick: i ? () => st(!0) : void 0,
            menuOpen: wr,
            onSearchClick: Et ? () => vo(!0) : void 0,
            searchOpen: Er,
            showAssistant: rt,
            onAssistantClick: je,
            assistantActive: dt,
            showProfile: A,
            background: De,
            color: We,
            activeColor: j,
            activeBackground: St
          }
        ),
        /* @__PURE__ */ t(
          ee,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": bs,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": M ? `${Jt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Be ? `calc(100% - ${Be}px)` : "100%",
              mt: M ? `${Jt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...xe && {
                pb: `calc(var(--lumora-content-padding) + ${Rr})`
              },
              backgroundColor: ue,
              ..._e
            },
            children: e
          }
        ),
        $e && /* @__PURE__ */ t(
          Yi,
          {
            open: Cr,
            variant: Tr,
            position: lt,
            width: Pt,
            sidebarWidthPx: Be,
            bottomOffsetPx: rt && bt === "floating" ? Oa : 0,
            fullScreen: M,
            fullScreenBottom: xe ? Rr : "0px",
            onClose: ho,
            children: /* @__PURE__ */ t($e, {})
          }
        ),
        rt && bt === "floating" && !xe && /* @__PURE__ */ t(
          un,
          {
            variant: "floating",
            rightOffsetPx: us,
            shortcutKeys: Dr,
            onClick: je,
            active: dt,
            busy: Gt
          }
        ),
        G && U && /* @__PURE__ */ t(
          Pr,
          {
            anchor: "right",
            open: wo.open,
            onClose: _r,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              U,
              {
                onClose: _r,
                initialTab: wo.tab
              },
              wo.tab
            )
          }
        )
      ]
    }
  ) }) }) });
};
export {
  se as AUTH_ERROR_CODES,
  Y as AuthError,
  Po as CollapsibleSidebar,
  Tc as FullBleedSection,
  ki as Kbd,
  Pi as LumoraShellSkeleton,
  Ac as LumoraWrapper,
  Nt as clearAuthTokens,
  Ac as default,
  Oc as getAuthErrorMessage,
  kt as getAuthTokens,
  zi as getCurrentUser,
  dr as getDesignTokens,
  Gi as isAuthenticated,
  Ho as logAuthError,
  Kn as storeAuthTokens
};
