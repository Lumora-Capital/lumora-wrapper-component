import { jsx as t, jsxs as v, Fragment as Ce } from "react/jsx-runtime";
import Ss from "@mui/icons-material/KeyboardArrowDownRounded";
import vs from "@mui/icons-material/KeyboardArrowUpRounded";
import ws from "@mui/icons-material/ChevronRightRounded";
import _ from "@mui/material/Box";
import Nr from "@mui/material/Collapse";
import Je from "@mui/material/Divider";
import ge from "@mui/material/IconButton";
import Yt from "@mui/material/ListItemButton";
import xe from "@mui/material/ListItemIcon";
import ke from "@mui/material/ListItemText";
import Te from "@mui/material/Stack";
import be from "@mui/material/Tooltip";
import le from "@mui/material/Typography";
import { useTheme as Ne, createTheme as co, alpha as at, ThemeProvider as ro } from "@mui/material/styles";
import * as l from "react";
import { useMemo as Fr, useState as st, useCallback as Wr, useRef as To, useEffect as Jt, useLayoutEffect as Es } from "react";
import tt from "@mui/material/ButtonBase";
import { keyframes as Ko } from "@emotion/react";
import jo from "@mui/material/Fade";
import Vo from "@mui/material/Popper";
import { useTheme as Rn, CssBaseline as Do, GlobalStyles as Rs, Box as q, useMediaQuery as In, Stack as Lo, Skeleton as He, Drawer as Pr, SwipeableDrawer as Is } from "@mui/material";
import Br from "axios";
import _s from "@mui/material/Card";
import Cs from "@mui/material/CardContent";
import _n from "@mui/material/Button";
import Ts from "@mui/icons-material/AutoAwesomeRounded";
import Os from "@mui/material/Grow";
import Yo from "@mui/material/Paper";
import As from "@mui/material/Slide";
import $s from "@mui/material/ListSubheader";
import Qe from "@mui/material/MenuItem";
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
const no = ({
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
  }, h = /* @__PURE__ */ v(Ce, { children: [
    o ? /* @__PURE__ */ t(
      le,
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
    tt,
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
  ) : /* @__PURE__ */ t(Te, { direction: "row", "data-testid": s, sx: c, children: h });
}, zr = !1, $n = { stiffness: 320, damping: 24 }, Mn = { stiffness: 320, damping: 28 }, Jo = { stiffness: 520, damping: 20 }, Dn = { stiffness: 380, damping: 36 }, lo = { stiffness: 260, damping: 28 }, Hs = "cubic-bezier(0.32, 1.28, 0.52, 1)", Us = 420, Hr = 60, Xs = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Ur = /* @__PURE__ */ new Map(), ye = ({
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
  const u = [0];
  for (; h < 3; ) {
    const p = (-e * (a - 1) - o * c) / r;
    if (c += p * s, a += c * s, h += s, h >= m && (u.push(a), m += 1 / Hr, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  u[u.length - 1] = 1;
  const x = {
    easing: `linear(${u.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(h * 1e3)
  };
  return Ur.set(n, x), x;
}, et = (e) => !!(e && typeof e.animate == "function"), Ke = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, $t = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, Ks = (e, o = 1.14) => {
  if (!et(e) || Ke())
    return;
  const r = ye(Jo);
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
}, pt = (e, o) => e ? `${e}/${o.text}` : o.text, Ye = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Ye(n, o))) ?? !1 : !1;
}, Le = (e, o) => !!(o && e.path === o), er = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return mt(r) ? er(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), ko = (e) => {
  const o = uo(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, so = (e) => {
  const o = uo(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, No = (e, o) => {
  const r = uo(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, uo = (e) => {
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
`, Re = "@media (prefers-reduced-motion: reduce)", Z = 6, or = "9, 193, 174", kn = l.createContext(
  void 0
), Gt = l.createContext(
  void 0
), rr = (e) => l.useContext(Gt) ?? e, gt = () => {
  const e = l.useContext(kn), o = e ? uo(e) : null;
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
  borderRadius: `${Z}px`,
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
}), Ft = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: No(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${No(e, 0.45)}`
}, Qs = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${tr(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${Z}px`,
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
}, Wt = "data-rail-item", Js = `[${Wt}], button, [role="button"]`, fo = l.createContext(!1), cr = () => {
  const e = l.useContext(fo), o = Ne(), r = l.useContext(Gt);
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
}, qe = ye(Dn), lr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  lean: s = 3,
  pinSelector: a,
  pinKey: c = null
}) => {
  const h = l.useRef(null), m = gt(), [u, x] = l.useState(null), p = l.useRef(null), f = l.useRef(null), g = (S, O) => {
    f.current = O;
    const L = O.getBoundingClientRect(), M = S.getBoundingClientRect(), W = n ?? L.width, B = n ?? L.height, A = {
      top: Math.round(L.top - M.top + (L.height - B) / 2),
      left: Math.round(L.left - M.left + (L.width - W) / 2),
      width: Math.round(W),
      height: Math.round(B)
    };
    x(
      (N) => N && N.visible && N.top === A.top && N.left === A.left && N.width === A.width && N.height === A.height ? N : { ...A, visible: !0, instant: !(N != null && N.visible) }
    );
  }, R = (S, O) => {
    var M;
    const L = (M = O == null ? void 0 : O.closest) == null ? void 0 : M.call(O, r);
    return L && S.contains(L) ? L : null;
  }, b = (S) => {
    if (!e)
      return;
    const O = R(S.currentTarget, S.target);
    O && g(S.currentTarget, O);
  }, y = (S) => {
    if (!e)
      return;
    const O = R(S.currentTarget, S.target);
    O && S.target.matches(":focus-visible") && g(S.currentTarget, O);
  }, E = (S) => {
    const O = h.current, L = f.current;
    if (!e || !O || !L || !s || Ke())
      return;
    const M = L.getBoundingClientRect(), W = (B, A) => Math.max(-1, Math.min(1, B / (A / 2))) * s;
    O.style.transform = `translate(${W(S.clientX - (M.left + M.width / 2), M.width)}px, ${W(S.clientY - (M.top + M.height / 2), M.height)}px)`;
  }, w = () => {
    var L;
    const S = (L = h.current) == null ? void 0 : L.parentElement, O = a && (S == null ? void 0 : S.querySelector(a));
    return S && O ? { container: S, item: O } : null;
  }, C = () => {
    h.current && (h.current.style.transform = "");
    const S = w();
    if (S) {
      g(S.container, S.item);
      return;
    }
    f.current = null, x((O) => O != null && O.visible ? { ...O, visible: !1 } : O);
  };
  l.useEffect(() => {
    var O, L;
    if (!e)
      return;
    const S = w();
    S ? g(S.container, S.item) : (L = (O = h.current) == null ? void 0 : O.parentElement) != null && L.matches(":hover") || C();
  }, [e, c]);
  const T = (S) => {
    const O = S.relatedTarget;
    (!O || !S.currentTarget.contains(O)) && (S.currentTarget.matches(":hover") || C());
  };
  return l.useEffect(() => {
    const S = h.current;
    if (!(u != null && u.visible)) {
      p.current = null;
      return;
    }
    const O = p.current;
    if (p.current = u.top, !et(S) || Ke())
      return;
    if (O === null || u.instant) {
      S.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: qe.duration,
        easing: qe.easing
      });
      return;
    }
    const L = Math.min(Math.abs(u.top - O) / 600, 0.08);
    L && S.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - L / 2} ${1 + L}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: qe.duration, easing: "ease-out" }
    );
  }, [u == null ? void 0 : u.top, u == null ? void 0 : u.visible, u == null ? void 0 : u.instant]), {
    lens: e && u ? /* @__PURE__ */ t(
      _,
      {
        ref: h,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": u.visible ? "true" : "false",
        sx: {
          ...ar(o, m),
          borderRadius: `${i}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: u.width,
          height: u.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset. `transform` carries
          // only the lean.
          translate: `${u.left}px ${u.top}px`,
          // Shrinks away as it fades; wells back up on return
          scale: u.visible ? "1" : "0.7",
          opacity: u.visible ? 1 : 0,
          pointerEvents: "none",
          transition: u.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${qe.duration}ms ${qe.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [Re]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: b,
      onMouseMove: E,
      onMouseLeave: C,
      onFocus: y,
      onBlur: T,
      onScrollCapture: C
    } : {}
  };
}, ei = (e, o, r = null) => {
  const n = lr({
    enabled: e,
    isDark: o,
    selector: Js,
    size: 46,
    radius: Z,
    pinSelector: `[${Wt}][data-open="true"]`,
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
    (u) => {
      const x = n.current;
      if (!e || !x)
        return;
      const p = x.querySelector(
        `[${Wt}][data-active="true"]`
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
          instant: u || !(g != null && g.visible)
        }
      );
    },
    [e, n]
  );
  return l.useLayoutEffect(() => {
    h(!1);
  }), l.useEffect(() => {
    const u = n.current;
    if (!e || !u)
      return;
    let x = 0;
    const p = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => h(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => h(!0));
    f == null || f.observe(u);
    const g = typeof MutationObserver > "u" ? null : new MutationObserver(p);
    return g == null || g.observe(u, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(x), f == null || f.disconnect(), g == null || g.disconnect();
    };
  }, [e, n, h]), l.useEffect(() => {
    const u = i.current;
    if (!(s != null && s.visible)) {
      c.current = null;
      return;
    }
    const x = c.current;
    if (c.current = s.top, x === null || s.instant || !et(u) || Ke())
      return;
    const p = Math.min(Math.abs(s.top - x) / 600, 0.08);
    p && u.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - p / 2} ${1 + p}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: qe.duration, easing: "ease-out" }
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
        ...Ft(r, o),
        borderRadius: `${Z}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: s.width,
        height: s.height,
        translate: `${s.left}px ${s.top}px`,
        scale: s.visible ? "1" : "0.7",
        opacity: s.visible ? 1 : 0,
        pointerEvents: "none",
        transition: s.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${qe.duration}ms ${qe.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Re]: { transition: "opacity 160ms ease" }
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
    }, u = (p) => {
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
    return document.addEventListener("pointermove", u, { passive: !0 }), document.documentElement.addEventListener("mouseleave", x), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", u), document.documentElement.removeEventListener("mouseleave", x);
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
    const u = gt(), x = `lumora-glass-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [p, f] = l.useState(null), g = l.useRef(null), R = l.useCallback(
      (E) => {
        var C;
        if (h.current = E, typeof c == "function" ? c(E) : c && (c.current = E), (C = g.current) == null || C.disconnect(), g.current = null, !E || !m || !si || typeof ResizeObserver > "u")
          return;
        const w = () => {
          const T = E.offsetWidth, I = E.offsetHeight;
          f(
            (S) => (S == null ? void 0 : S.width) === T && S.height === I ? S : T && I ? { width: T, height: I } : null
          );
        };
        g.current = new ResizeObserver(w), g.current.observe(E), w();
      },
      [c, m]
    ), b = l.useMemo(
      () => p ? ii(p.width, p.height, Kr) : null,
      [p]
    ), y = m && !!(b && p);
    return /* @__PURE__ */ v(Ce, { children: [
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
            qs(e, o, u),
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
const Ze = 44, Vr = 4, di = Z, Yr = 1.12, ho = 6, qr = ho - 2, Mt = Z, Fo = 24, io = 10, Zr = 0.12, Qr = 0.75, ui = io + 32, fi = 90, hi = 22, pi = 1190, mi = 1195, ao = ye($n), he = ye(Dn), Jr = ye(lo), gi = ({ left: e, top: o, width: r, height: n, radius: i }) => {
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
  accentColor: u,
  activeForegroundColor: x,
  solidSurface: p
}) => {
  const f = Ne(), g = f.palette.mode === "dark", R = !!(e && r), b = l.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const y = b.current, E = l.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const D = r.getBoundingClientRect();
      return {
        x: n,
        y: D.top,
        left: n,
        right: n,
        top: D.top,
        bottom: D.bottom,
        width: 0,
        height: D.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), w = l.useRef(E);
  E && (w.current = E), l.useEffect(() => {
    r && Ks(r);
  }, [r]);
  const [C, T] = l.useState(!1);
  l.useEffect(() => {
    if (!R) {
      T(!1);
      return;
    }
    let D = 0;
    const F = requestAnimationFrame(() => {
      D = requestAnimationFrame(() => T(!0));
    });
    return () => {
      cancelAnimationFrame(F), cancelAnimationFrame(D);
    };
  }, [R]);
  const I = l.useMemo(
    () => y ? er(y.group.subitems, y.group.icon) : [],
    [y]
  ), S = l.useRef(null), O = l.useRef(null), L = l.useRef(0), M = l.useRef(null), W = l.useRef([]), B = I.findIndex(
    ({ sub: D }) => Le(D, s)
  ), [A, N] = l.useState(0);
  l.useEffect(() => {
    N(Math.max(B, 0));
  }, [o]), l.useEffect(() => {
    if (!R || !a)
      return;
    const D = setTimeout(() => {
      var F;
      return (F = W.current[0]) == null ? void 0 : F.focus();
    });
    return () => clearTimeout(D);
  }, [R, a, o]);
  const Q = (D) => {
    var j;
    const F = Math.max(0, Math.min(D, I.length - 1));
    N(F), (j = W.current[F]) == null || j.focus();
  }, Se = (D, F) => {
    switch (D.key) {
      case "ArrowRight":
        Q(F + 1);
        break;
      case "ArrowLeft":
        F === 0 ? h(!0) : Q(F - 1);
        break;
      case "Home":
        Q(0);
        break;
      case "End":
        Q(I.length - 1);
        break;
      case "Tab":
        h(!0);
        break;
      default:
        return;
    }
    D.preventDefault();
  }, H = (D) => {
    const F = W.current.slice(0, I.length).filter((Y) => !!Y);
    if (!F.length)
      return;
    const j = D !== null && D < F.length && !Ke(), re = `translate ${he.duration}ms ${he.easing}, scale ${he.duration}ms ${he.easing}`, k = F.map((Y) => Y.offsetLeft + Ze / 2), ce = F.map(
      (Y, te) => j && te === D ? Yr : 1
    ), ee = j ? (Yr - 1) * Ze : 0, Oe = k[0] - Ze / 2, Ae = k[k.length - 1] + Ze / 2, Fe = j ? Math.min(
      Math.max(
        (k[D] - Oe) / (Ae - Oe || 1),
        Math.max(0, 1 - qr / ee)
      ),
      Math.min(1, qr / ee)
    ) : 0;
    let ue = Oe - ee * Fe;
    F.forEach((Y, te) => {
      const ve = Ze * ce[te], pe = ue + ve / 2;
      ue += ve + Vr, Y.style.transition = `${re}, background 160ms ease, box-shadow 160ms ease`, Y.style.translate = j ? `${pe - k[te]}px 0` : "", Y.style.scale = j ? String(ce[te]) : "", j ? Y.style.setProperty("--dock-scale", String(ce[te])) : Y.style.removeProperty("--dock-scale");
    });
  }, G = l.useRef(null);
  l.useEffect(() => {
    G.current = null;
  }, [o]);
  const K = (D) => {
    G.current !== D && (G.current = D, cancelAnimationFrame(L.current), L.current = requestAnimationFrame(() => H(D)));
  };
  l.useEffect(() => () => cancelAnimationFrame(L.current), []);
  const J = f.palette.text.primary, ae = g ? f.palette.text.primary : u;
  return /* @__PURE__ */ v(Ce, { children: [
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
            options: { offset: [-Fo / 2, io] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: mi,
          transition: C ? `transform ${he.duration}ms ${he.easing}` : "none",
          [Re]: { transition: "none" }
        },
        children: ({ TransitionProps: D }) => /* @__PURE__ */ t(
          Ri,
          {
            in: (D == null ? void 0 : D.in) ?? R,
            onEnter: D == null ? void 0 : D.onEnter,
            onExited: D == null ? void 0 : D.onExited,
            groupKey: (y == null ? void 0 : y.key) ?? null,
            panelProps: m,
            isDark: g,
            solidSurface: p,
            groupText: y == null ? void 0 : y.group.text,
            glassRef: O,
            shapeRef: M,
            children: y ? /* @__PURE__ */ v(Ce, { children: [
              /* @__PURE__ */ t(
                _,
                {
                  "aria-hidden": !0,
                  "data-testid": "sidebar-flyout-title",
                  sx: {
                    px: `${ho}px`,
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
                  onPointerLeave: () => K(null),
                  sx: {
                    position: "relative",
                    display: "flex",
                    gap: `${Vr}px`,
                    // A grown tile fits in the panel's padding
                    // (see DOCK_ROOM_PX)
                    px: 0
                  },
                  children: I.map(({ sub: F, icon: j }, re) => /* @__PURE__ */ t(
                    Nn,
                    {
                      ref: (k) => {
                        W.current[re] = k;
                      },
                      sub: F,
                      icon: j,
                      index: re,
                      active: Le(
                        F,
                        s
                      ),
                      tabIndex: re === A ? 0 : -1,
                      onClick: () => {
                        c(F.path), h();
                      },
                      onKeyDown: (k) => Se(k, re),
                      onFocus: (k) => {
                        N(re), k.currentTarget.matches(
                          ":focus-visible"
                        ) && K(re);
                      },
                      onHoverStart: (k) => {
                        k !== "touch" && K(re);
                      },
                      accentColor: u,
                      activeForegroundColor: x,
                      labelColor: J,
                      iconColor: ae,
                      isDark: g
                    },
                    F.path
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
}, kt = 18, bi = 160, Wo = 14, yi = 22, Si = 2.5, vi = 1, en = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, wi = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, Ei = (e, o, r) => {
  const n = ho, i = kt, s = kt + o / 2, a = Math.max(e, ...r.map((b) => b.right + n)), c = {
    cx: a / 2,
    cy: s,
    hx: a / 2,
    hy: o / 2,
    r: Mt
  }, h = r.filter((b) => b.bottom - b.top > Ze * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + kt,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: Mt
  })), m = (b, y) => h.reduce(
    (E, w) => wi(E, en(b, y, w), yi),
    en(b, y, c)
  ), u = (b, y) => {
    let E = s, w = s + y * (o / 2 + i);
    if (m(b, E) > 0)
      return null;
    for (let C = 0; C < 12; C += 1) {
      const T = (E + w) / 2;
      m(b, T) <= 0 ? E = T : w = T;
    }
    return E;
  }, x = Math.min(0, ...h.map((b) => b.cx - b.hx)) - 2, p = Math.max(a, ...h.map((b) => b.cx + b.hx)) + 2, f = [], g = [];
  for (let b = x; b <= p; ) {
    const y = u(b, -1), E = u(b, 1);
    if (y !== null && E !== null) {
      const C = +(b + Wo).toFixed(1);
      f.push([C, +y.toFixed(1)]), g.push([C, +E.toFixed(1)]);
    }
    const w = b - x < Mt + 4 || p - b < Mt + 4;
    b += w ? vi : Si;
  }
  return f.length ? `M ${[...f, ...g.reverse()].map(([b, y]) => `${b} ${y}`).join(" L ")} Z` : "";
}, tn = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((s) => {
    et(s) && ($t(s), s.animate([{ opacity: o }, { opacity: r }], {
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
  children: u
}) => {
  const x = l.useRef(null), p = l.useRef(null), f = l.useRef(null), g = l.useRef(null), R = l.useRef(null), b = Ys(s, gt()), y = l.useCallback(
    (H, G, K) => {
      var J, ae;
      (J = R.current) == null || J.setAttribute("cx", String(H)), (ae = R.current) == null || ae.setAttribute("cy", String(G)), g.current && (g.current.style.opacity = String(
        K * (s ? Xr.dark.rim : Xr.light.rim)
      ));
    },
    [s]
  ), E = l.useRef(null), w = l.useRef(null), C = `lumora-flyout-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, T = l.useRef(0), I = l.useRef(0), S = l.useRef(""), O = () => {
    var D, F, j, re;
    const H = x.current, G = p.current;
    if (!H || !G)
      return !1;
    const K = H.getBoundingClientRect(), J = Array.from(
      H.querySelectorAll('[role="menuitem"]'),
      (k) => {
        if (k.style.scale)
          return null;
        const ce = k.getBoundingClientRect();
        return {
          left: ce.left - K.left,
          right: ce.right - K.left,
          top: ce.top - K.top,
          bottom: ce.bottom - K.top
        };
      }
    ).filter((k) => k !== null), ae = Ei(
      H.offsetWidth,
      H.offsetHeight,
      J
    );
    return ae === S.current ? !1 : (S.current = ae, G.style.clipPath = `path('${ae}')`, (D = f.current) == null || D.setAttribute("d", ae), (F = g.current) == null || F.setAttribute("d", ae), (j = E.current) == null || j.setAttribute("d", ae), (re = w.current) == null || re.setAttribute("d", ae), !0);
  }, L = () => {
    if (I.current = 0, T.current)
      return;
    const H = () => {
      if (I.current = O() ? 0 : I.current + 1, I.current > 8) {
        T.current = 0;
        return;
      }
      T.current = requestAnimationFrame(H);
    };
    T.current = requestAnimationFrame(H);
  };
  m.current = L, l.useLayoutEffect(() => (O(), L(), () => {
    cancelAnimationFrame(T.current), T.current = 0;
  }), [n]);
  const M = l.useRef(null), W = l.useRef(null), B = l.useRef(!1), A = (H) => {
    x.current = H;
    const { ref: G } = i;
    typeof G == "function" ? G(H) : G && (G.current = H);
  }, N = () => {
    $t(h.current), $t(M.current), $t(x.current);
  }, Q = () => {
    var J;
    const H = x.current, G = h.current, K = M.current;
    if (!(!et(H) || !G || !K)) {
      if (N(), Ke()) {
        H.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      W.current = null, G.animate(
        [
          { transform: `scale(${Zr}, ${Qr})` },
          { transform: "none" }
        ],
        { duration: ao.duration, easing: ao.easing }
      ), tn(G, [0, 1], 160, "ease-out");
      try {
        (J = p.current) == null || J.animate(
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
      K.animate(
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
  }, Se = () => {
    const H = x.current, G = h.current, K = M.current;
    if (!et(H) || !G || !K) {
      r == null || r();
      return;
    }
    if (N(), Ke()) {
      H.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 120,
        fill: "forwards"
      }).finished.then(() => r == null ? void 0 : r()).catch(() => {
      });
      return;
    }
    K.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 90,
      easing: "ease-in",
      fill: "forwards"
    }), tn(G, [1, 0], 200, "ease-in"), G.animate(
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
      Se();
      return;
    }
    o == null || o(), Q();
  }, [e]), l.useLayoutEffect(() => {
    const H = x.current;
    if (!H)
      return;
    const G = H.getBoundingClientRect(), K = W.current;
    if (W.current = { width: G.width, height: G.height }, !B.current) {
      B.current = !0;
      return;
    }
    const J = h.current;
    !e || !K || !et(J) || !G.width || !G.height || Ke() || ($t(J), J.animate(
      [
        {
          transform: `scale(${K.width / G.width}, ${K.height / G.height})`
        },
        { transform: "none" }
      ],
      { duration: he.duration, easing: he.easing }
    ));
  }, [n]), /* @__PURE__ */ v(
    _,
    {
      ref: A,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": c,
      sx: {
        position: "relative",
        borderRadius: `${Mt}px`,
        p: `${ho}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -io - 2,
          width: io + 2
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
              top: -kt,
              bottom: -kt,
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
                          id: `${C}-shadow`,
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
                            /* @__PURE__ */ t("path", { ref: w, fill: "black" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ t("g", { mask: `url(#${C}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: E,
                        transform: "translate(0 12)",
                        fill: s ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${C}-shadow)`
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
                        ref: g,
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
        /* @__PURE__ */ t(_, { ref: M, sx: { position: "relative" }, children: u })
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
    activeForegroundColor: u,
    labelColor: x,
    iconColor: p,
    isDark: f
  }, g) => {
    const R = gt(), b = l.useContext(Gt), y = (T) => {
      const I = T.currentTarget.getBoundingClientRect();
      T.currentTarget.style.setProperty(
        "--mx",
        `${(T.clientX - I.left) / I.width * 100}%`
      ), T.currentTarget.style.setProperty(
        "--my",
        `${(T.clientY - I.top) / I.height * 100}%`
      );
    }, E = (T) => {
      const I = T.currentTarget;
      !et(I) || Ke() || I.animate(
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
    }, C = {
      ...ar(f, R),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": w
    };
    return /* @__PURE__ */ v(
      tt,
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
        onPointerEnter: (T) => h(T.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Ze,
          height: Ze,
          borderRadius: `${di}px`,
          color: n ? u : x,
          bgcolor: n ? m : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Ft(m, f) : {},
          transition: `translate ${he.duration}ms ${he.easing}, scale ${he.duration}ms ${he.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${Vs} ${ao.duration}ms ${ao.easing} both`,
          animationDelay: `${fi + r * hi}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: 22,
            color: n ? u : p
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
          } : C,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : C,
            "& [data-tile-name]": w,
            outline: "2px solid",
            outlineColor: m,
            outlineOffset: 2
          },
          [Re]: {
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
                [Re]: { transition: "opacity 140ms ease" }
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
  }, u = (y, E, w = !1) => {
    h(), m(), r({ key: y, pinned: E, focusFirst: w });
  }, x = l.useCallback((y = !1) => {
    var w, C;
    h(), m();
    const E = (w = n.current) == null ? void 0 : w.key;
    r(null), y && E && ((C = i.current.get(E)) == null || C.focus());
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
    const y = (C) => {
      var I;
      const T = C;
      return T ? (I = s.current) != null && I.contains(T) ? !0 : [...i.current.values()].some((S) => S.contains(T)) : !1;
    }, E = (C) => {
      y(C.target) || x();
    }, w = (C) => {
      var T;
      C.key === "Escape" && x(
        !!((T = s.current) != null && T.contains(document.activeElement))
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
          E.key !== y && u(y, E.pinned);
          return;
        }
        h(), a.current = setTimeout(
          () => u(y, !1),
          Ii
        );
      },
      onMouseLeave: p,
      onClick: (E) => {
        if (E.detail === 0) {
          u(y, !0, !0);
          return;
        }
        const w = n.current;
        (w == null ? void 0 : w.key) === y && w.pinned ? x() : u(y, !0);
      },
      onKeyDown: (E) => {
        E.key === "ArrowRight" && (E.preventDefault(), u(y, !0, !0));
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
}, Ti = 264, Oi = 72, on = 64, qt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ai = 16, $i = 14, Mi = 4, Di = 2.5, rn = "0.7rem", nn = 22, sn = ye(Jo), it = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
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
    const u = new ResizeObserver(() => h());
    return u.observe(m), () => u.disconnect();
  }, [h]), /* @__PURE__ */ t(
    be,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ t(
        le,
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
), Zt = 600, Po = ({
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
  headerBackgroundColor: u,
  headerForegroundColor: x,
  brandColor: p,
  activeAccentColor: f = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: R,
  foregroundColor: b,
  surfaceBackgroundColor: y,
  flyoutSurfaceColor: E,
  collapsed: w = !1,
  expandedWidth: C = Ti,
  collapsedWidth: T = Oi,
  showLabels: I = !1,
  topInsetPx: S = 0,
  topContent: O,
  footer: L,
  submenuMode: M = "inline"
}) => {
  var Et;
  const W = Ne(), B = W.palette.mode === "dark", A = l.useContext(Gt), N = M === "flyout" && w && !I, Q = Ci(N), Se = l.useRef(null), H = l.useRef(null), G = ei(N, B, ((Et = Q.state) == null ? void 0 : Et.key) ?? null), K = oi({
    enabled: N,
    isDark: B,
    color: f,
    containerRef: H
  }), { close: J } = Q;
  l.useEffect(() => {
    J();
  }, [r, J]);
  const [ae, D] = l.useState(
    {}
  ), F = R ?? ko(f), j = {
    bgcolor: f,
    color: F,
    "& .MuiListItemIcon-root": { color: F }
  }, re = {
    bgcolor: f,
    color: F,
    borderRadius: "8px"
  }, k = g ?? so(f), ce = y ?? (B ? W.palette.background.paper : "#ffffff"), ee = b ?? (B ? "text.primary" : f), Oe = u ?? ce, Ae = x ?? (u ? ko(Oe) : b ?? (B ? W.palette.text.primary : f)), Fe = so(Ae), ue = (d) => {
    n == null || n(d);
  }, Y = (d, z) => {
    D((X) => ({ ...X, [d]: !z }));
  }, te = (d, z) => ae[z] ?? Ye(d, r), ve = (d, z, X) => ({
    color: d ? F : ee,
    bgcolor: d ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: d ? F : ee,
      minWidth: X
    },
    "&:hover": d || I ? j : { bgcolor: z }
  }), pe = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": j
  }, je = (d) => {
    const z = Le(d, r), X = /* @__PURE__ */ v(
      Yt,
      {
        disabled: !d.path,
        selected: z,
        onClick: () => d.path && ue(d.path),
        "data-testid": `sidebar-item-${d.text}`,
        "data-active": z ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...d.action && { pr: 6 },
          ...d.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...ve(
            z,
            k,
            d.subtitle ? 48 : 36
          ),
          ...pe
        },
        children: [
          /* @__PURE__ */ t(xe, { children: d.icon }),
          /* @__PURE__ */ t(
            ke,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                it,
                {
                  text: d.text,
                  fontWeight: Zt
                }
              ),
              secondary: d.subtitle ? /* @__PURE__ */ t(
                _,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    it,
                    {
                      text: d.subtitle,
                      fontSize: "0.8125rem"
                    }
                  )
                }
              ) : void 0,
              sx: d.subtitle ? { my: 0 } : void 0
            }
          )
        ]
      },
      d.text
    );
    if (!d.action)
      return X;
    const { action: P } = d;
    return /* @__PURE__ */ v(_, { sx: { position: "relative" }, children: [
      X,
      /* @__PURE__ */ t(be, { title: P.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        ge,
        {
          "aria-label": P.label,
          "data-testid": `sidebar-action-${d.text}`,
          onClick: () => {
            P.onClick(), i == null || i();
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
            borderColor: z ? "rgba(255, 255, 255, 0.35)" : k,
            color: z ? F : ee,
            "&:hover": {
              bgcolor: z ? "rgba(255, 255, 255, 0.15)" : k
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: z ? F : ee,
              outlineOffset: 1
            }
          },
          children: P.icon
        }
      ) })
    ] }, d.text);
  }, We = (d) => {
    const z = Ye(d, r), X = Le(d, r), P = pt("", d), U = te(d, P);
    return /* @__PURE__ */ v(
      _,
      {
        "data-testid": `sidebar-group-${d.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: z ? k : "transparent"
        },
        children: [
          /* @__PURE__ */ v(
            Yt,
            {
              onClick: () => Y(P, U),
              "data-testid": `sidebar-item-${d.text}`,
              "data-active": X ? "true" : "false",
              "aria-expanded": U,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...ve(X, k, 36)
              },
              children: [
                /* @__PURE__ */ t(xe, { children: d.icon }),
                /* @__PURE__ */ t(
                  ke,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      it,
                      {
                        text: d.text,
                        fontWeight: Zt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(an, { open: U })
              ]
            }
          ),
          /* @__PURE__ */ t(Nr, { in: U, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            _,
            {
              "data-testid": `sidebar-children-${d.text}`,
              sx: { pb: 0.5 },
              children: d.subitems.map(
                (oe) => $e(oe, P, 1)
              )
            }
          ) })
        ]
      },
      d.text
    );
  }, $e = (d, z, X) => {
    const P = pt(z, d), U = Mi + (X - 1) * Di;
    if (mt(d)) {
      const de = Ye(d, r), se = Le(d, r), Ie = te(d, P);
      return /* @__PURE__ */ v(_, { "data-testid": `sidebar-group-${d.text}`, children: [
        /* @__PURE__ */ v(
          Yt,
          {
            onClick: () => Y(P, Ie),
            "data-testid": `sidebar-subitem-${d.text}`,
            "data-active": de ? "true" : "false",
            "aria-expanded": Ie,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: U,
              ...ve(se, "action.hover", 32)
            },
            children: [
              d.icon ? /* @__PURE__ */ t(xe, { children: d.icon }) : null,
              /* @__PURE__ */ t(
                ke,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    it,
                    {
                      text: d.text,
                      fontWeight: Zt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(an, { open: Ie })
            ]
          }
        ),
        /* @__PURE__ */ t(Nr, { in: Ie, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(_, { "data-testid": `sidebar-children-${d.text}`, children: d.subitems.map(
          (Pe) => $e(Pe, P, X + 1)
        ) }) })
      ] }, P);
    }
    const oe = Le(d, r);
    return /* @__PURE__ */ v(
      Yt,
      {
        selected: oe,
        disabled: !d.path,
        onClick: () => d.path && ue(d.path),
        "data-testid": `sidebar-subitem-${d.text}`,
        "data-active": oe ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: U,
          ...ve(oe, "action.hover", 32),
          ...pe
        },
        children: [
          d.icon ? /* @__PURE__ */ t(xe, { children: d.icon }) : null,
          /* @__PURE__ */ t(
            ke,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                it,
                {
                  text: d.text,
                  fontWeight: Zt
                }
              )
            }
          )
        ]
      },
      P
    );
  }, bt = (d, z, X, P, U, oe) => {
    const de = !U, se = /* @__PURE__ */ v(
      ge,
      {
        "aria-label": z,
        disabled: de,
        onClick: U,
        onMouseEnter: N ? Q.onRailLeafEnter : void 0,
        ...N ? { [Wt]: "" } : {},
        "data-testid": (oe == null ? void 0 : oe.testId) ?? `sidebar-item-${z}`,
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
          color: P ? F : ee,
          bgcolor: P ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: nn
          },
          "&:hover": re,
          ...qt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: P ? F : ee,
          bgcolor: P ? f : "transparent",
          borderRadius: P ? "8px" : "50%",
          "&:hover": {
            bgcolor: P ? f : oe != null && oe.insideGroup ? "action.hover" : k,
            borderRadius: "8px"
          },
          ...qt,
          ...N ? St(P) : {}
        },
        children: [
          X,
          I ? /* @__PURE__ */ t(
            it,
            {
              text: z,
              variant: "caption",
              center: !0,
              fontSize: rn
            }
          ) : null
        ]
      }
    );
    return I ? de ? /* @__PURE__ */ t("span", { children: se }, d) : /* @__PURE__ */ t(l.Fragment, { children: se }, d) : /* @__PURE__ */ t(
      be,
      {
        title: z,
        placement: "right",
        arrow: !N,
        ...N ? po : {},
        children: de ? /* @__PURE__ */ t("span", { children: se }) : se
      },
      d
    );
  }, yt = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, St = (d) => ({
    borderRadius: `${Z}px`,
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...d ? { bgcolor: "transparent" } : {},
    transition: `transform ${sn.duration}ms ${sn.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), po = {
    slotProps: {
      tooltip: { sx: nr(B, A) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, ot = (d) => {
    var U;
    const z = Ye(d, r), X = pt("", d), P = ((U = Q.state) == null ? void 0 : U.key) === X;
    return /* @__PURE__ */ t(
      _,
      {
        "data-testid": `sidebar-group-${d.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          ge,
          {
            ...Q.triggerProps(X),
            "aria-label": d.text,
            "aria-haspopup": "menu",
            "aria-expanded": P,
            "data-testid": `sidebar-item-${d.text}`,
            "data-active": z ? "true" : "false",
            "data-open": P ? "true" : "false",
            [Wt]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: z ? F : ee,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: z ? f : "transparent",
              ...St(z),
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
              ...qt
            },
            children: d.icon
          }
        )
      },
      d.text
    );
  }, vt = (d) => {
    const z = Ye(d, r), X = Le(d, r), P = pt("", d), U = te(d, P), oe = /* @__PURE__ */ v(
      ge,
      {
        "aria-label": d.text,
        "aria-expanded": U,
        onClick: () => Y(P, U),
        "data-testid": `sidebar-item-${d.text}`,
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
          color: X ? F : ee,
          bgcolor: X ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": I ? { bgcolor: f, color: F } : {
            bgcolor: X ? f : "transparent"
          },
          ...qt
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
              children: d.icon
            }
          ) : d.icon,
          I ? /* @__PURE__ */ t(
            it,
            {
              text: d.text,
              variant: "caption",
              center: !0,
              fontSize: rn
            }
          ) : null,
          /* @__PURE__ */ t(Li, { open: U, size: $i })
        ]
      }
    ), de = I ? oe : /* @__PURE__ */ t(be, { title: d.text, placement: "right", arrow: !0, children: oe });
    return /* @__PURE__ */ v(
      _,
      {
        "data-testid": `sidebar-group-${d.text}`,
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
          bgcolor: z ? k : "transparent",
          ...I ? {} : { "&:hover": { bgcolor: k } }
        },
        children: [
          de,
          U ? er(d.subitems, d.icon).map(
            ({ sub: se, icon: Ie }) => bt(
              se.path,
              se.text,
              Ie,
              Le(se, r),
              () => ue(se.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${se.text}`
              }
            )
          ) : null
        ]
      },
      d.text
    );
  }, zt = (d) => /* @__PURE__ */ t(
    _,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: bt(
        d.text,
        d.subtitle ? `${d.text} · ${d.subtitle}` : d.text,
        d.icon,
        Le(d, r),
        d.path ? () => ue(d.path) : void 0,
        { testId: `sidebar-item-${d.text}` }
      )
    },
    d.text
  ), rt = (d) => mt(d) ? N ? ot(d) : w ? vt(d) : We(d) : w ? zt(d) : je(d), ct = (d) => /* @__PURE__ */ t(
    Te,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: w ? "center" : "stretch"
      },
      children: d.map(rt)
    }
  ), wt = w ? T : C, Ht = () => {
    var de, se;
    const { state: d } = Q, z = d ? [...e, ...o].find(
      (Ie) => mt(Ie) && pt("", Ie) === d.key
    ) ?? null : null, X = z ? ((de = Se.current) == null ? void 0 : de.getBoundingClientRect().right) ?? T : T, P = z ? ((se = Se.current) == null ? void 0 : se.closest("[data-rail-surface]")) ?? Se.current : null, U = P == null ? void 0 : P.getBoundingClientRect(), oe = P && U ? {
      left: U.left,
      top: U.top,
      width: U.width,
      height: U.height,
      radius: parseFloat(
        getComputedStyle(P).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      xi,
      {
        group: z,
        groupKey: z ? d.key : null,
        anchor: z ? Q.getTrigger(d.key) : null,
        railEdge: X,
        railShape: oe,
        activePath: r,
        focusFirst: d == null ? void 0 : d.focusFirst,
        onNavigate: ue,
        onClose: Q.close,
        panelProps: Q.flyoutProps,
        accentColor: f,
        activeForegroundColor: F,
        solidSurface: E ?? ce
      }
    );
  }, mo = m ? /* @__PURE__ */ t(
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
        bgcolor: Oe
      },
      children: s || a ? /* @__PURE__ */ t(
        no,
        {
          logo: s,
          title: w ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: h,
          color: p ?? Ae,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, lt = !m && s ? /* @__PURE__ */ t(
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
        no,
        {
          logo: s,
          appName: a || "App",
          onClick: c,
          menuOpen: h,
          color: p ?? Ae,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, dt = I ? 0.5 : w ? 1 : 1.5;
  return /* @__PURE__ */ t(fo.Provider, { value: N, children: /* @__PURE__ */ v(
    _,
    {
      ref: Se,
      ...G.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": w ? "true" : "false",
      "data-labeled": I ? "true" : "false",
      sx: {
        width: wt,
        minWidth: wt,
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
        ...N ? yt : {}
      },
      children: [
        G.lens,
        mo ?? lt,
        O ? /* @__PURE__ */ t(
          _,
          {
            sx: {
              flexShrink: 0,
              px: dt,
              pt: 1,
              pb: 1
            },
            children: O
          }
        ) : null,
        /* @__PURE__ */ t(
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
                scrollbarColor: (d) => `${d.palette.divider} transparent`,
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: (d) => d.palette.divider
                }
              },
              // On the icon rail the two gutters stand in for the
              // padding, leaving room for the 44px items. (The inline
              // collapsed rail keeps it: its open groups tint the
              // full row width.)
              px: N ? 0 : dt,
              pt: S && !m ? `${S}px` : 1,
              pb: 2
            },
            children: /* @__PURE__ */ v(
              _,
              {
                ref: H,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  K.glass,
                  ct(e),
                  o.length > 0 ? /* @__PURE__ */ v(_, { sx: { mt: "auto", pt: 2 }, children: [
                    L ? null : /* @__PURE__ */ t(
                      Je,
                      {
                        sx: { mb: 1, borderColor: "divider" }
                      }
                    ),
                    ct(o)
                  ] }) : null
                ]
              }
            )
          }
        ),
        L ? /* @__PURE__ */ t(_, { sx: { flexShrink: 0, px: dt, pb: 1.5 }, children: /* @__PURE__ */ t(
          _,
          {
            sx: {
              borderTop: `1px solid ${Fe}`,
              pt: 1.5
            },
            children: L
          }
        ) }) : null,
        N ? Ht() : null
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
), we = {
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
}, Ee = {
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
}, Fn = co(), _e = Fn.typography.pxToRem, dr = (e) => {
  const o = e === "dark", r = [...Fn.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? we[300] : we[200],
        main: we[400],
        dark: we[700],
        contrastText: we[50]
      },
      info: o ? {
        light: we[500],
        main: we[700],
        dark: we[900],
        contrastText: we[300]
      } : {
        light: we[100],
        main: we[300],
        dark: we[600],
        contrastText: Ee[50]
      },
      warning: o ? { light: ft[400], main: ft[500], dark: ft[700] } : { light: ft[300], main: ft[400], dark: ft[800] },
      error: o ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      success: o ? { light: ut[400], main: ut[500], dark: ut[700] } : { light: ut[300], main: ut[400], dark: ut[800] },
      grey: Ee,
      divider: o ? at(Ee[700], 0.6) : at(Ee[300], 0.4),
      background: o ? { default: Ee[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Ee[400] } : { primary: Ee[800], secondary: Ee[600] },
      action: o ? {
        hover: at(Ee[600], 0.2),
        selected: at(Ee[600], 0.3)
      } : {
        hover: at(Ee[200], 0.2),
        selected: at(Ee[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: _e(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: _e(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: _e(30), lineHeight: 1.2 },
      h4: { fontSize: _e(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: _e(20), fontWeight: 600 },
      h6: { fontSize: _e(18), fontWeight: 600 },
      subtitle1: { fontSize: _e(18) },
      subtitle2: { fontSize: _e(14), fontWeight: 500 },
      body1: { fontSize: _e(14) },
      body2: { fontSize: _e(14), fontWeight: 400 },
      caption: { fontSize: _e(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Ni = 100, Wn = 80, eo = 56, Dt = 72, Go = 68, Nt = 8, Pn = Z, Bn = { xs: 2, md: "18px" }, Gn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, ur = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), zn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n
}) => !e || o ? 0 : r === "rail-labeled" ? Wn : ur(n, r) ? Go + 2 * Nt : r === "collapsible" || r === "panel" ? Dt : Ni, Hn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Un = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Fi = 6, ln = (e, o) => typeof e == "object" ? e[o] : e, Oo = ({
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
  const m = In(r.breakpoints.down("md")), u = e === "dark", x = zn({
    showSidebar: s,
    isMobile: m,
    sidebarVariant: n,
    sidebarSubmenu: i
  }), p = ur(i, n) ? {
    gutterPx: Nt,
    radiusPx: Pn
  } : void 0, f = eo, g = Hn(
    ln(c, e),
    u
  ), R = Un(
    ln(h, e),
    u
  ), b = Gn(
    a,
    r
  ), y = /* @__PURE__ */ v(Lo, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(He, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(q, { sx: { height: 8 } }),
    Array.from({ length: Fi }, (E, w) => /* @__PURE__ */ t(He, { variant: "rounded", width: 28, height: 28 }, w))
  ] });
  return /* @__PURE__ */ t(ro, { theme: o, children: /* @__PURE__ */ v(
    q,
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
          q,
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
              /* @__PURE__ */ t(He, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(He, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(q, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(He, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !m && x > 0 && /* @__PURE__ */ t(
          q,
          {
            sx: {
              position: "relative",
              width: x,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              q,
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
          q,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              p: b,
              mt: m ? `${f}px` : 0
            },
            children: [
              /* @__PURE__ */ t(He, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(He, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(Lo, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: m ? 2 : 4 }, (E, w) => /* @__PURE__ */ t(
                He,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                w
              )) }),
              /* @__PURE__ */ t(He, { variant: "rounded", height: 360 })
            ]
          }
        )
      ]
    }
  ) });
}, zo = co(dr("light")), to = co(dr("dark")), Wi = (e) => e === "dark" ? to : zo, Pi = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = Rn();
  if (!o) {
    const s = Wi(e);
    return /* @__PURE__ */ v(ro, { theme: s, children: [
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
  return /* @__PURE__ */ v(ro, { theme: zo, children: [
    /* @__PURE__ */ t(Do, {}),
    /* @__PURE__ */ t(
      Rs,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: to.palette.background.default,
            color: to.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(q, { sx: { display: "contents", [i]: { display: "none" } }, children: /* @__PURE__ */ t(
      Oo,
      {
        themeMode: "light",
        muiTheme: zo,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(q, { sx: { display: "none", [i]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Oo,
      {
        themeMode: "dark",
        muiTheme: to,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class V extends Error {
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
}, fe = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Xe = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Bi = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Xe.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Xe.REFRESH_TOKEN
      ), r = localStorage.getItem(Xe.USER);
      e && !localStorage.getItem(fe.ACCESS_TOKEN) && localStorage.setItem(fe.ACCESS_TOKEN, e), o && !localStorage.getItem(fe.REFRESH_TOKEN) && localStorage.setItem(
        fe.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(fe.USER) && localStorage.setItem(fe.USER, r), (e || o || r) && (localStorage.removeItem(Xe.ACCESS_TOKEN), localStorage.removeItem(Xe.REFRESH_TOKEN), localStorage.removeItem(Xe.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Ao = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new V(
        "localStorage is not available",
        ne.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new V(
      "Storage quota exceeded. Please clear browser data.",
      ne.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new V(
      "Access to localStorage is denied. Please check browser settings.",
      ne.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new V(
      "Failed to access storage",
      ne.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, $o = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new V(
        "localStorage is not available",
        ne.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new V(
      "Storage quota exceeded. Please clear browser data.",
      ne.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new V(
      "Access to localStorage is denied. Please check browser settings.",
      ne.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new V(
      "Failed to write to storage",
      ne.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Xn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Pt = () => {
  try {
    Bi();
    const e = Ao(fe.ACCESS_TOKEN), o = Ao(fe.REFRESH_TOKEN), r = Ao(fe.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), Xn(fe.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof V ? e : new V(
      "Failed to retrieve authentication tokens",
      ne.UNKNOWN_ERROR,
      e
    );
  }
}, Gi = () => {
  try {
    const { accessToken: e, refreshToken: o } = Pt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new V(
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
      error: e instanceof V ? e : new V(
        "Authentication check failed",
        ne.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Kn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new V(
        "At least one token must be provided",
        ne.TOKEN_INVALID
      );
    return e && $o(fe.ACCESS_TOKEN, e), o && $o(fe.REFRESH_TOKEN, o), r && $o(fe.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof V ? n : new V(
        "Failed to store tokens",
        ne.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Bt = () => {
  try {
    return [
      fe.ACCESS_TOKEN,
      fe.REFRESH_TOKEN,
      fe.USER,
      // Also clear legacy keys for complete cleanup
      Xe.ACCESS_TOKEN,
      Xe.REFRESH_TOKEN,
      Xe.USER
    ].map((n) => Xn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof V ? e : new V(
        "Failed to clear tokens",
        ne.LOGOUT_FAILED,
        e
      )
    };
  }
}, zi = () => {
  try {
    const { user: e } = Pt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof V ? e : new V(
        "Failed to retrieve user data",
        ne.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Oc = (e) => {
  if (!(e instanceof V))
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
}, Ho = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof V ? e.code : "UNKNOWN",
    timestamp: e instanceof V ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof V && e.originalError && (r.originalError = {
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
      const { accessToken: c } = Pt();
      return c && a.headers && (a.headers.Authorization = `Bearer ${c}`), a;
    },
    (a) => Promise.reject(a)
  ), o.interceptors.response.use(
    (a) => a,
    async (a) => {
      var p;
      const c = a.config, h = (p = a.response) == null ? void 0 : p.status, m = (c == null ? void 0 : c.url) || "", u = m.includes("/auth/refresh");
      if (h !== 401 || c._retry || u)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: x } = Pt();
      if (!x) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return Ho(f, "AxiosClient - Token Refresh"), Bt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
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
        ), s(f), Bt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Ui = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Pt();
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
  return Bt(), o ? o() : window.location.href = "/login", !1;
}, Lt = ({ size: e = 20 }) => /* @__PURE__ */ v(
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
), dn = ye(Jo), Ue = "#09C1AE", oo = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ue} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
  ...oo(Z, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${Z - 2}px`,
    zIndex: 1,
    background: `${Ft(Ue, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
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
  const c = cr(), h = l.useContext(fo), m = Ne().palette.mode === "dark", u = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", x = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ v(
    tt,
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
        borderColor: r ? Ue : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Ue}`,
          outlineOffset: 2
        },
        ...n && oo(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Lt, { size: 20 }),
        /* @__PURE__ */ t(
          le,
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
  ) : e === "sidebar-icon" && h ? /* @__PURE__ */ t(be, { title: u, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    ge,
    {
      ...x,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: `${Z}px`,
        ...Ft(Ue, m, "clear"),
        ...r && {
          boxShadow: `${Ft(Ue, m, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
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
        [Re]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && Xi(m)
      },
      children: /* @__PURE__ */ t(Lt, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(be, { title: u, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    ge,
    {
      ...x,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Ue : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && oo(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Lt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(be, { title: u, placement: "left", children: /* @__PURE__ */ t(
    ge,
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
        outline: r ? `2px solid ${Ue}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Ue}` },
        ...n && oo(16, "background.paper")
      },
      children: /* @__PURE__ */ t(_, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Lt, { size: 26 }) })
    }
  ) });
}, Qt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(_s, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ v(Cs, { children: [
  /* @__PURE__ */ t(Ts, { fontSize: "small" }),
  /* @__PURE__ */ t(le, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    le,
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
] }) }) : null, Ot = 24, Ki = 720, ji = 1140, Vi = 1250, Yi = ({
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
  const u = r === "docked", x = Ot + a;
  let p;
  c ? p = {
    top: 0,
    left: 0,
    right: 0,
    bottom: h,
    borderRadius: 0
  } : u ? p = {
    top: 0,
    right: 0,
    bottom: 0,
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : p = {
    bottom: x,
    ...n === "left" ? { left: s + Ot } : { right: Ot },
    width: i,
    maxWidth: `calc(100vw - ${Ot * 2}px)`,
    height: `min(${Ki}px, calc(100vh - ${x + Ot}px))`,
    borderRadius: "12px"
  };
  const f = /* @__PURE__ */ t(
    Yo,
    {
      role: u ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: u ? ji : Vi,
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
  return u ? /* @__PURE__ */ t(As, { direction: "left", in: e, mountOnEnter: !0, children: f }) : /* @__PURE__ */ t(
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
    be,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        le,
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
}, Vn = ({ link: e }) => /* @__PURE__ */ v(Te, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
] }), Yn = (e, o, r) => r ? e : /* @__PURE__ */ t(be, { title: o, placement: "right", arrow: !0, children: e }), Ji = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: a
}) => {
  const c = Ne(), [h, m] = l.useState(null), [u, x] = l.useState(!1), p = l.useRef(
    null
  ), f = l.useRef(null), g = l.useRef(null), R = l.useRef(!1), b = l.useRef(!1), y = l.useId(), E = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, w = () => {
    E(), p.current = setTimeout(() => {
      x(!1), p.current = null;
    }, qi);
  }, C = () => {
    E(), x(!0);
  };
  l.useEffect(() => {
    if (!u)
      return;
    const M = (W) => {
      var B;
      W.key === "Escape" && (x(!1), (B = g.current) == null || B.focus());
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [u]), l.useEffect(() => {
    if (!u || !b.current)
      return;
    const M = globalThis.requestAnimationFrame(() => {
      var B;
      const W = (B = f.current) == null ? void 0 : B.querySelector(
        '[role="menuitem"]'
      );
      W == null || W.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame(M);
  }, [u]);
  const T = Ye(e, o), { activeBg: I, sx: S } = jn(
    i,
    n,
    T,
    a
  ), O = /* @__PURE__ */ t(
    ge,
    {
      ref: g,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        R.current || C();
      },
      onBlur: (M) => {
        var B;
        const W = M.relatedTarget;
        W && ((B = f.current) != null && B.contains(W)) || w();
      },
      onKeyDown: (M) => {
        M.key === "ArrowDown" && (M.preventDefault(), b.current = !0, C());
      },
      onClick: (M) => {
        M.preventDefault(), M.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": u,
      "aria-controls": u ? y : void 0,
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
              R.current = !0, C();
            },
            onMouseLeave: () => {
              R.current = !1, w();
            },
            children: Yn(O, e.text, a)
          }
        ),
        /* @__PURE__ */ t(
          Vo,
          {
            open: u && !!h,
            anchorEl: h,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (M) => M.zIndex.modal },
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
  function L(M, W, B) {
    return M.flatMap((A) => {
      const N = pt(W, A);
      return mt(A) ? [
        /* @__PURE__ */ t(
          $s,
          {
            disableSticky: !0,
            title: A.text,
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
            children: A.text
          },
          N
        ),
        ...L(A.subitems, N, B + 1)
      ] : [
        /* @__PURE__ */ v(
          Qe,
          {
            role: "menuitem",
            title: A.text,
            disabled: !A.path,
            selected: Le(A, o),
            onClick: (Q) => {
              Q.preventDefault(), A.path && (r == null || r(A.path)), x(!1);
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
              A.icon ? /* @__PURE__ */ t(xe, { children: A.icon }) : null,
              /* @__PURE__ */ t(
                ke,
                {
                  primary: A.text,
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
      ge,
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
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
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
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
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
  const c = (m, u) => mt(m) ? /* @__PURE__ */ t(
    Ji,
    {
      link: m,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: u,
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
      isSecondary: u,
      railShowTitles: a
    }
  ), h = a ? 1.25 : 1;
  return /* @__PURE__ */ v(
    Te,
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
        o.length > 0 ? /* @__PURE__ */ v(Ce, { children: [
          /* @__PURE__ */ t(oa, {}),
          /* @__PURE__ */ t(_, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Te, { gap: h, alignItems: "center", children: hn(
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
), qn = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ v(Ce, { children: [
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
          le,
          {
            variant: "body2",
            sx: { ...pn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          le,
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
  userAvatar: u,
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
          Te,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              qn,
              {
                name: h,
                role: m,
                avatar: u,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Je, {}),
        s && /* @__PURE__ */ v(Qe, { onClick: E(c), children: [
          /* @__PURE__ */ t(xe, { children: /* @__PURE__ */ t(On, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ke, { children: "Notifications" }),
          /* @__PURE__ */ t(Uo, { count: a })
        ] }),
        x.map((w) => /* @__PURE__ */ v(Qe, { onClick: E(w.onClick), children: [
          w.icon && /* @__PURE__ */ t(xe, { children: w.icon }),
          /* @__PURE__ */ t(ke, { inset: !w.icon, children: w.label }),
          /* @__PURE__ */ t(Uo, { count: w.badge })
        ] }, w.key)),
        p && /* @__PURE__ */ v(Qe, { onClick: E(f), children: [
          /* @__PURE__ */ t(xe, { children: /* @__PURE__ */ t(Ms, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ke, { children: "Settings" })
        ] }),
        g && [
          /* @__PURE__ */ t(Je, {}, "theme-divider"),
          /* @__PURE__ */ v(_, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              le,
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
                onChange: (w, C) => C && C !== R && (b == null ? void 0 : b()),
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
        /* @__PURE__ */ t(Je, {}),
        /* @__PURE__ */ v(
          Qe,
          {
            onClick: E(y),
            sx: {
              color: R === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(xe, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Tn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ke, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Qn = 64, ia = 2, At = ({
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
  testId: u
}) => /* @__PURE__ */ v(
  tt,
  {
    onClick: r,
    "aria-label": c ?? e,
    "aria-haspopup": h,
    "aria-expanded": h ? n : void 0,
    "aria-current": m && n ? "page" : void 0,
    "data-testid": u,
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
        le,
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
  activeColor: u,
  activeBackground: x,
  pinnedLinks: p = [],
  activePath: f,
  onLinkClick: g,
  ...R
}) => {
  const b = p.filter((S) => S.path).slice(0, ia), [y, E] = l.useState(
    null
  ), { userName: w = "User", userAvatar: C, avatarColor: T } = R, I = { color: m, activeColor: u, activeBackground: x };
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
          At,
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
          At,
          {
            label: S.text,
            icon: S.icon,
            onClick: () => g == null ? void 0 : g(S.path),
            active: Ye(S, f),
            isPage: !0,
            testId: `mobile-nav-link-${S.text}`,
            ...I
          },
          S.path
        )),
        i && /* @__PURE__ */ t(
          At,
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
                children: /* @__PURE__ */ t(Lt, { size: 18 })
              }
            ),
            onClick: s,
            active: a,
            testId: "mobile-nav-nexa",
            ...I
          }
        ),
        r && /* @__PURE__ */ t(
          At,
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
        c && /* @__PURE__ */ v(Ce, { children: [
          /* @__PURE__ */ t(
            At,
            {
              label: "Account",
              ariaLabel: `Account menu for ${w}`,
              icon: /* @__PURE__ */ t(
                fr,
                {
                  name: w,
                  avatar: C,
                  color: T,
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
      Te,
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
        ge,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: c },
          children: /* @__PURE__ */ t(Cn, {})
        }
      ),
      /* @__PURE__ */ t(
        no,
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
    be,
    {
      title: c,
      placement: i,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ t(
        ge,
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
}, gn = ye(Mn), xn = ye(lo), bn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', ua = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = Ne().palette.mode === "dark", a = gt(), c = l.useRef(null), h = l.useRef(null), m = (p) => {
    var f;
    p !== e && (o == null || o()), (f = (p === "light" ? c : h).current) == null || f.focus();
  }, u = (p) => {
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
      tt,
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
          borderRadius: i ? `${Z}px` : "999px",
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
            boxShadow: `0 0 0 2px ${at(r, 0.6)}`
          },
          ...Jn
        },
        children: /* @__PURE__ */ t(g, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ v(
    Te,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: u,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: i ? `${Z}px` : "999px",
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
  showThemeToggler: u,
  theme: x,
  onThemeToggle: p,
  onProfileClick: f,
  onLinkClick: g,
  menuItems: R = [],
  onLogout: b,
  glass: y = !1
}) => {
  const E = Ne(), w = E.palette.mode === "dark", C = l.useRef(null), T = rr(E.palette.background.paper), I = lr({
    enabled: y,
    isDark: w,
    selector: bn,
    radius: Z
  }), [S, O] = l.useState(null);
  l.useEffect(() => {
    if (!S || typeof ResizeObserver > "u")
      return;
    const A = new ResizeObserver(() => {
      var N;
      (N = C.current) == null || N.updatePosition();
    });
    return A.observe(S), () => A.disconnect();
  }, [S]);
  const L = (A) => {
    r(), A == null || A();
  }, M = (A) => {
    r(), A.onClick ? A.onClick() : A.path && (g == null || g(A.path));
  }, W = {
    borderRadius: y ? `${Z}px` : "8px",
    py: 1,
    gap: 0.5
  }, B = /* @__PURE__ */ v(Te, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ v(_, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(le, { noWrap: !0, sx: { fontWeight: 600 }, children: s }),
      a ? /* @__PURE__ */ t(
        le,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: a
        }
      ) : null,
      c ? /* @__PURE__ */ t(
        le,
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
        le,
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
      action: C,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...y ? {
        slots: { transition: jo },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: O,
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
            borderRadius: `${Z}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${bn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...da, width: n, minWidth: n },
          children: [
            y ? /* @__PURE__ */ t(
              xt,
              {
                isDark: w,
                solid: T,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${sr} ${gn.duration}ms ${gn.easing} both`,
                  [Re]: { animation: "none" }
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
                  [Re]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  I.lens,
                  f ? /* @__PURE__ */ t(
                    tt,
                    {
                      onClick: () => L(f),
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
                  /* @__PURE__ */ t(Je, {}),
                  u ? /* @__PURE__ */ v(
                    _,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...W,
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
                        /* @__PURE__ */ t(xe, { children: /* @__PURE__ */ t(Gs, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(le, { sx: { flex: 1 }, children: "Theme" }),
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
                      sx: { px: 1, pt: u ? 0 : 0.5, pb: 0.5 },
                      children: [
                        R.map((A) => /* @__PURE__ */ v(
                          Qe,
                          {
                            onClick: () => M(A),
                            "data-testid": `menu-item-${A.key}`,
                            sx: W,
                            children: [
                              /* @__PURE__ */ t(xe, { children: A.icon }),
                              /* @__PURE__ */ t(le, { sx: { flex: 1 }, children: A.label }),
                              /* @__PURE__ */ t(Uo, { count: A.badge })
                            ]
                          },
                          A.key
                        )),
                        b ? /* @__PURE__ */ t(Je, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ v(
                          Qe,
                          {
                            onClick: () => L(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...W,
                              color: w ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(xe, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Tn, { fontSize: "small" }) }),
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
  headerForegroundColor: u,
  activeAccentColor: x = "#01584f",
  groupAccentColor: p,
  activeForegroundColor: f,
  foregroundColor: g,
  surfaceBackgroundColor: R,
  flyoutSurfaceColor: b,
  collapsed: y,
  expandedWidth: E,
  collapsedWidth: w,
  topContent: C,
  submenuMode: T,
  color: I,
  hoverColor: S,
  avatarColor: O,
  showProfile: L = !0,
  userName: M = "User",
  userEmail: W,
  userRole: B,
  userAvatar: A,
  showNotifications: N = !0,
  notificationCount: Q = 0,
  onNotificationsClick: Se,
  whatsNewCount: H = 0,
  onProfileClick: G,
  menuItems: K,
  onLogout: J,
  theme: ae = "light",
  showThemeToggler: D = !0,
  onThemeToggle: F
}) => {
  const j = Ne(), re = j.palette.mode === "dark", k = R ?? (re ? j.palette.background.paper : "#ffffff"), ce = I ?? g ?? (re ? j.palette.text.primary : x), ee = S ?? p ?? so(x), Oe = O ?? x, Ae = l.useRef(null), [Fe, ue] = l.useState(!1), Y = B ? Ln(B) : void 0, te = (yt) => /* @__PURE__ */ t(
    fr,
    {
      name: M,
      avatar: A,
      color: Oe,
      size: yt
    }
  ), ve = Q + H, pe = y && T === "flyout", je = N ? /* @__PURE__ */ t(
    hr,
    {
      count: ve,
      onClick: Se,
      color: ce,
      hoverColor: ee,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, We = L ? /* @__PURE__ */ v(
    tt,
    {
      ref: Ae,
      onClick: () => ue(!0),
      "aria-haspopup": "menu",
      "aria-expanded": Fe,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: y ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: Fe ? ee : "transparent",
        "&:hover": { bgcolor: ee },
        ...ha
      },
      children: [
        y && !pe && N ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            An,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !ve,
              children: te(36)
            }
          )
        ) : te(y ? 36 : 40),
        y ? null : /* @__PURE__ */ v(_, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            le,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: ce, lineHeight: 1.3 },
              children: M
            }
          ),
          Y ? /* @__PURE__ */ t(
            le,
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
              children: Y
            }
          ) : null
        ] })
      ]
    }
  ) : null, $e = !!je && (!y || pe || !We);
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
            headerForegroundColor: u,
            activeAccentColor: x,
            groupAccentColor: p,
            activeForegroundColor: f,
            foregroundColor: g,
            surfaceBackgroundColor: k,
            flyoutSurfaceColor: b,
            collapsed: y,
            expandedWidth: E,
            collapsedWidth: w,
            topContent: C,
            footer: We || $e ? /* @__PURE__ */ v(
              Te,
              {
                direction: pe ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  pe && $e ? je : null,
                  We,
                  !pe && $e ? je : null
                ]
              }
            ) : void 0,
            submenuMode: T
          }
        ),
        L ? /* @__PURE__ */ t(
          fa,
          {
            open: Fe,
            anchorEl: Ae.current,
            onClose: () => ue(!1),
            width: Math.max(E - 16, 240),
            renderAvatar: te,
            userName: M,
            userEmail: W,
            roleLabel: Y,
            accentColor: x,
            tint: ee,
            showThemeToggler: D,
            theme: ae,
            onThemeToggle: F,
            onProfileClick: G,
            onLinkClick: n,
            menuItems: K,
            onLogout: J,
            glass: T === "flyout"
          }
        ) : null
      ]
    }
  );
}, yn = ye(Mn), Sn = ye(lo), vn = 260, ma = {
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
  const c = Ne(), h = c.palette.mode === "dark", m = !!e, u = rr(c.palette.background.paper), x = lr({
    enabled: a,
    isDark: h,
    selector: ".MuiMenuItem-root",
    radius: Z
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
          Qe,
          {
            selected: g,
            onClick: () => i(f),
            "data-testid": `platform-item-${f.key}`,
            sx: {
              borderRadius: a ? `${Z}px` : "8px",
              py: 1,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...a && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(xe, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
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
                ke,
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
            borderRadius: `${Z}px`
          } : { ...ma, minWidth: vn },
          children: a ? /* @__PURE__ */ v(Ce, { children: [
            /* @__PURE__ */ t(
              xt,
              {
                isDark: h,
                solid: u,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${sr} ${yn.duration}ms ${yn.easing} both`,
                  [Re]: { animation: "none" }
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
                  [Re]: { animation: "none" }
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
    userName: u = "User",
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
  return /* @__PURE__ */ v(Ce, { children: [
    /* @__PURE__ */ v(
      Te,
      {
        ref: f,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            be,
            {
              title: e ? u : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                tt,
                {
                  onClick: () => R(f.current),
                  "aria-label": `Account menu for ${u}`,
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
                      name: u,
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
}, ya = 120, Sa = 300, wn = ye($n), En = ye(lo), va = (e) => {
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
  const c = cr(), h = l.useContext(fo), m = l.useRef(null), [u, x] = l.useState(null);
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
        /* @__PURE__ */ t(be, { title: "Search", placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
          ge,
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
            open: !!u,
            anchorEl: u,
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
  const n = Ne().palette.mode === "dark";
  Qs(n, No(o, n ? 0.3 : 0.35));
  const i = `rgb(${gt()})`, s = rr(n ? "#1e2430" : "#ffffff"), a = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${Z}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: i
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${Z}px`,
      "&.Mui-focusVisible": { borderColor: i }
    }
  }, c = l.useRef(null), h = l.useRef(null), [m, u] = l.useState(!1), x = l.useRef(!1), p = l.useRef(void 0), f = l.useRef(void 0), g = () => {
    clearTimeout(p.current), clearTimeout(f.current);
  }, R = l.useCallback(() => {
    g(), x.current = !1, u(!1);
  }, []), b = () => {
    clearTimeout(f.current), m || (clearTimeout(p.current), p.current = setTimeout(
      () => u(!0),
      ya
    ));
  }, y = () => {
    clearTimeout(p.current), clearTimeout(f.current), f.current = setTimeout(() => {
      !x.current && !va(h.current) && u(!1);
    }, Sa);
  };
  return l.useEffect(() => g, []), l.useEffect(() => {
    if (!m)
      return;
    const E = setTimeout(() => Xo(h.current)), w = (T) => {
      var S, O;
      const I = T.target;
      !((S = h.current) != null && S.contains(I)) && !((O = c.current) != null && O.contains(I)) && R();
    }, C = (T) => {
      var I;
      T.key === "Escape" && (R(), (I = c.current) == null || I.focus());
    };
    return document.addEventListener("pointerdown", w), document.addEventListener("keydown", C), () => {
      clearTimeout(E), document.removeEventListener("pointerdown", w), document.removeEventListener("keydown", C);
    };
  }, [m, R]), /* @__PURE__ */ v(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          be,
          {
            title: m ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              ge,
              {
                ref: c,
                "aria-label": "Search",
                "aria-expanded": m,
                onMouseEnter: b,
                onMouseLeave: y,
                onClick: () => {
                  g(), x.current = !0, u(!0);
                },
                sx: {
                  width: 44,
                  height: 44,
                  color: o,
                  borderRadius: `${Z}px`
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
                  borderRadius: `${Z}px`
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
                        [Re]: { animation: "none" }
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
                        [Re]: { animation: "none" }
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
    }, u = () => {
      c(), i(!1);
    };
    return document.addEventListener("mouseover", m), document.documentElement.addEventListener("mouseleave", u), () => {
      c(), document.removeEventListener("mouseover", m), document.documentElement.removeEventListener(
        "mouseleave",
        u
      );
    };
  }, []), l.useEffect(() => {
    if (!s)
      return;
    const m = (u) => {
      var x;
      (x = e.current) != null && x.contains(u.target) || a(!1);
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
        const u = m.relatedTarget;
        u && !m.currentTarget.contains(u) && a(!1);
      },
      onKeyDown: (m) => {
        m.key === "Escape" && a(!1);
      }
    }
  };
}, Ca = 300, Mo = 288, Ta = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Oa = 68, Aa = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), $a = typeof window > "u" ? Jt : Es, Ac = ({
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
  logo: u,
  onBrandClick: x,
  searchComponent: p,
  brandColor: f,
  contentPadding: g = Bn,
  userMenuItems: R,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: E,
  activeSidebarForegroundColor: w,
  enableRefreshToken: C = !1,
  holdSessionSkeleton: T = !1,
  activePath: I,
  onLinkClick: S,
  showProfile: O = !0,
  userName: L,
  userRole: M,
  userAvatar: W,
  userEmail: B,
  onLogout: A,
  showSettings: N = !0,
  onSettingsClick: Q,
  onProfileClick: Se,
  showNotifications: H = !0,
  notificationCount: G = 0,
  NotificationSidebarContent: K,
  whatsNewCount: J = 0,
  onNotificationsClick: ae,
  platforms: D,
  currentPlatformKey: F,
  onPlatformSelect: j,
  onVerify: re,
  alertProps: k,
  style: ce,
  sidebarStyles: ee,
  contentStyles: Oe,
  accentColor: Ae,
  sidebarAccentColor: Fe,
  sidebarForegroundColor: ue,
  contentBackgroundColor: Y,
  theme: te = "light",
  darkModeSelector: ve,
  showThemeToggler: pe = !1,
  onThemeToggle: je,
  GlobalChatSidebar: We,
  useChatSidebar: $e,
  chatPanelMode: bt = "docked",
  chatPanelPosition: yt = "right",
  chatPanelWidth: St = 420,
  onChatClose: po,
  showAssistant: ot = !1,
  assistantPlacement: vt = "sidebar",
  assistantShortcut: zt = "j",
  onAssistantClick: rt,
  assistantActive: ct = !1,
  assistantBusy: wt = !1,
  customNavbar: Ht,
  customNavbarProps: mo,
  redirectToLogin: lt,
  apiBaseUrl: dt
}) => {
  const Et = Rn(), d = In(Et.breakpoints.down("md")), z = Fr(
    () => co(dr(te)),
    [te]
  ), X = te === "dark", P = Ae ?? "#01584f", U = Fe ?? P, oe = Un(
    typeof Y == "object" ? Y[te] : Y,
    X
  ), de = a === "collapsible", se = a === "panel", Ie = se && i && !d, Pe = a === "rail-labeled", es = de || Pe, Me = Hn(
    b,
    X
  ), go = y ?? Me, Be = ue ?? (X ? "#ffffff" : U), Rt = E ?? so(Be), It = y ? ko(go) : Be, pr = ($) => /* @__PURE__ */ t(
    q,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: $,
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
  ), Ut = f ?? It, [mr, xo] = st(
    null
  ), bo = ((D == null ? void 0 : D.length) ?? 0) > 1, ts = Wr(() => xo(null), []), os = ($) => {
    xo(null), j ? j($) : $.key !== F && $.url && window.location.assign($.url);
  }, gr = ($) => bo ? /* @__PURE__ */ t(
    xa,
    {
      anchorEl: mr,
      onClose: ts,
      platforms: D,
      currentKey: F,
      onSelect: os,
      accentColor: P,
      glass: c === "flyout" && (de || se) && !d,
      children: $
    }
  ) : $, Xt = bo ? ($) => xo($.currentTarget) : x, Kt = bo ? !!mr : void 0, yo = gr(
    u ?? pr(Ut)
  ), rs = gr(
    u ?? pr(f ?? Be)
  ), So = _a(), Ge = ur(c, a), De = Ge || !So.expanded, xr = Ge ? "popover" : "expand", br = Ge ? Go : Dt, yr = Ge ? "transparent" : Me, Sr = Ge && !y ? "transparent" : go, [ns, vr] = st(!1), ss = Wr(() => vr(!1), []), ze = zn({
    showSidebar: i,
    isMobile: d,
    sidebarVariant: a,
    sidebarSubmenu: c
  }), [wr, nt] = st(!1), [Er, vo] = st(!1), me = d && h === "bottom-bar", Rr = `calc(${Qn}px + env(safe-area-inset-bottom, 0px))`, [wo, Ir] = st({ open: !1, tab: "notifications" }), _r = () => Ir(($) => ({ ...$, open: !1 })), is = H && !!K, [as, cs] = st(!0), [ls, ds] = st(!1), Eo = $e == null ? void 0 : $e(), Cr = (Eo == null ? void 0 : Eo.isOpen) ?? !1, Tr = bt === "floating" ? "floating" : "docked", us = Tr === "docked" && Cr && We && !d ? St : 0, jt = To(re), Or = To(!1), Ar = Fr(
    () => Hi(dt),
    [dt]
  );
  Jt(() => {
    jt.current = re;
  }, [re]);
  const Ro = To(rt);
  Ro.current = rt;
  const _t = ot && zt ? zt.toLowerCase() : null;
  Jt(() => {
    if (!_t)
      return;
    const $ = (ie) => {
      (ie.metaKey || ie.ctrlKey) && !ie.altKey && !ie.shiftKey && ie.key.toLowerCase() === _t && Ro.current && (ie.preventDefault(), Ro.current());
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [_t]);
  const $r = ($) => {
    const ie = A($);
    ie instanceof Promise && ie.catch((Ve) => {
      console.error("Error in logout handler:", Ve);
    });
  };
  if ($a(() => {
    (() => {
      var ie;
      try {
        const { isAuthenticated: Ve } = Gi();
        if (!Ve) {
          console.log("No session found, redirecting to login"), Bt(), lt();
          return;
        }
        if (!Or.current) {
          const { user: Tt, error: Co } = zi();
          if (Tt && !Co) {
            const ys = {
              name: Tt.name || "",
              email: Tt.email || "",
              profilePicture: Tt.profilePicture || "",
              role: Tt.role || ""
            };
            Or.current = !0, (ie = jt.current) == null || ie.call(jt, ys);
          } else
            Co && console.error("Error getting user data:", Co);
        }
        ds(!0);
      } catch (Ve) {
        console.error("Error checking session:", Ve), Bt(), lt();
      } finally {
        cs(!1);
      }
    })();
  }, [lt]), Jt(() => {
    C && Ui(Ar, lt);
  }, [C, Ar]), as || T)
    return /* @__PURE__ */ t(
      Pi,
      {
        theme: te,
        darkModeSelector: ve,
        sidebarVariant: a,
        sidebarSubmenu: c,
        showSidebar: i,
        contentPadding: g,
        sidebarBackgroundColor: b,
        contentBackgroundColor: Y
      }
    );
  if (!ls)
    return null;
  const Ct = p ?? (Ht ? /* @__PURE__ */ t(Ht, { ...mo }) : null), fs = ($) => {
    nt(!1), vo(!1), Ir({ open: !0, tab: $ });
  }, Io = K && (() => fs("notifications")), hs = G + J, Mr = {
    avatarColor: U,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: R == null ? void 0 : R.map(
      ($) => $.onClick || !$.path ? $ : { ...$, onClick: () => S == null ? void 0 : S($.path) }
    ),
    showNotifications: H,
    notificationCount: G,
    whatsNewCount: J,
    onNotificationsClick: Io,
    showProfile: O,
    userName: L,
    userRole: M,
    userAvatar: W,
    showSettings: N,
    onSettingsClick: Q,
    showThemeToggler: pe,
    theme: te,
    onThemeToggle: je,
    onLogout: $r
  }, _o = ($) => /* @__PURE__ */ t(
    ba,
    {
      ...Mr,
      compact: $,
      color: Be,
      hoverColor: Rt
    }
  ), Dr = _t ? [Aa() ? "⌘" : "Ctrl", _t.toUpperCase()] : void 0, ps = ($) => ot && vt === "sidebar" ? /* @__PURE__ */ t(
    un,
    {
      variant: $ ? "sidebar-icon" : "sidebar",
      onClick: rt,
      active: ct,
      busy: wt,
      shortcutKeys: Dr,
      accentColor: Be
    }
  ) : null, ms = ($) => Ct ? /* @__PURE__ */ t(
    Ea,
    {
      search: Ct,
      mode: $,
      onExpand: () => {
        So.pin(), vr(!0);
      },
      autoFocus: ns,
      onAutoFocused: ss,
      color: Be,
      hoverColor: Rt
    }
  ) : null, Vt = ($) => {
    const ie = ps($ !== "full"), Ve = ms($);
    return ie || Ve ? /* @__PURE__ */ v(
      Lo,
      {
        spacing: 1.5,
        sx: { alignItems: $ === "full" ? "stretch" : "center" },
        children: [
          ie,
          Ve
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
      showHeaderBar: de,
      logo: yo,
      title: n,
      onBrandClick: Xt,
      brandMenuOpen: Kt,
      brandColor: Ut,
      headerBackgroundColor: de ? Sr : void 0,
      headerForegroundColor: de ? It : void 0,
      activeAccentColor: U,
      groupAccentColor: E,
      activeForegroundColor: w,
      foregroundColor: ue,
      surfaceBackgroundColor: yr,
      flyoutSurfaceColor: Me,
      collapsed: Pe || De,
      showLabels: Pe,
      expandedWidth: Mo,
      collapsedWidth: Pe ? Wn : br,
      topContent: Vt(
        Pe ? "popover" : De ? xr : "full"
      ),
      footer: _o(Pe || De),
      submenuMode: Ge ? "flyout" : "inline"
    }
  ), kr = ($) => Ge ? gs($) : xs($), gs = ($) => /* @__PURE__ */ t(
    q,
    {
      component: "aside",
      sx: {
        width: ze,
        minWidth: ze,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: oe
      },
      children: /* @__PURE__ */ v(
        q,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: Nt,
            bottom: Nt,
            left: Nt,
            width: Go,
            borderRadius: `${Pn}px`,
            display: "flex",
            flexDirection: "column",
            ...ee
          },
          children: [
            /* @__PURE__ */ t(
              xt,
              {
                isDark: X,
                solid: Me,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              q,
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
                children: $
              }
            )
          ]
        }
      )
    }
  ), xs = ($) => /* @__PURE__ */ t(
    q,
    {
      component: "aside",
      sx: {
        width: Dt,
        minWidth: Dt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        q,
        {
          ...Ge ? {} : So.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": De ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: De ? Dt : Mo,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Me,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: De ? "none" : `4px 0 24px rgba(0, 0, 0, ${X ? 0.5 : 0.12})`,
            transition: Ta,
            ...ee
          },
          children: $
        }
      )
    }
  ), bs = Gn(
    g,
    Et
  );
  return /* @__PURE__ */ t(ro, { theme: z, children: /* @__PURE__ */ t(kn.Provider, { value: U, children: /* @__PURE__ */ t(Gt.Provider, { value: Me, children: /* @__PURE__ */ v(
    q,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...ce
      },
      children: [
        /* @__PURE__ */ t(Do, {}),
        d && /* @__PURE__ */ t(
          la,
          {
            height: eo,
            onMenuClick: i && !me ? () => nt(!0) : void 0,
            appName: n,
            logo: yo,
            onBrandClick: Xt,
            brandMenuOpen: Kt,
            background: go,
            color: It,
            brandColor: Ut,
            endContent: H ? /* @__PURE__ */ t(
              hr,
              {
                count: hs,
                onClick: Io,
                color: It,
                hoverColor: Rt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !d && Pe && /* @__PURE__ */ t(
          q,
          {
            component: "aside",
            sx: {
              width: ze,
              minWidth: ze,
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
            children: Lr()
          }
        ),
        i && !d && de && kr(
          /* @__PURE__ */ v(Ce, { children: [
            Lr(),
            (k == null ? void 0 : k.show) && !De && /* @__PURE__ */ t(Qt, { ...k })
          ] })
        ),
        Ie && kr(
          /* @__PURE__ */ v(Ce, { children: [
            /* @__PURE__ */ t(
              pa,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: I,
                onLinkClick: S,
                logo: yo,
                title: n,
                onBrandClick: Xt,
                brandMenuOpen: Kt,
                brandColor: Ut,
                headerBackgroundColor: Sr,
                headerForegroundColor: It,
                activeAccentColor: U,
                groupAccentColor: E,
                activeForegroundColor: w,
                foregroundColor: ue,
                surfaceBackgroundColor: yr,
                flyoutSurfaceColor: Me,
                collapsed: De,
                expandedWidth: Mo,
                collapsedWidth: br,
                topContent: Vt(
                  De ? xr : "full"
                ),
                submenuMode: Ge ? "flyout" : "inline",
                color: Be,
                hoverColor: Rt,
                avatarColor: U,
                showProfile: O,
                userName: L,
                userEmail: B,
                userRole: M,
                userAvatar: W,
                showNotifications: H,
                notificationCount: G,
                onNotificationsClick: is ? Io : ae,
                whatsNewCount: J,
                onProfileClick: Se,
                menuItems: R,
                onLogout: $r,
                theme: te,
                showThemeToggler: pe,
                onThemeToggle: je
              }
            ),
            (k == null ? void 0 : k.show) && !De && /* @__PURE__ */ t(Qt, { ...k })
          ] })
        ),
        i && !d && !es && !se && /* @__PURE__ */ t(
          Pr,
          {
            variant: "permanent",
            sx: {
              width: ze,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: ze,
                boxSizing: "border-box",
                bgcolor: oe,
                borderRight: "none"
              },
              ...ee
            },
            children: /* @__PURE__ */ v(
              q,
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
                    q,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        no,
                        {
                          logo: rs,
                          appName: n,
                          onClick: Xt,
                          menuOpen: Kt,
                          color: f ?? Be,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Vt("popover"),
                  /* @__PURE__ */ v(
                    q,
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
                            accentColor: U,
                            surfaceBackgroundColor: oe,
                            railShowTitles: s
                          }
                        ),
                        (k == null ? void 0 : k.show) && /* @__PURE__ */ t(Qt, { ...k })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(q, { sx: { py: 1.5 }, children: _o(!0) })
                ]
              }
            )
          }
        ),
        i && d && /* @__PURE__ */ v(
          Is,
          {
            anchor: me ? "bottom" : "left",
            open: wr,
            onOpen: () => nt(!0),
            onClose: () => nt(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: ($) => $.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Me,
                  backgroundImage: "none",
                  ...me ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              me && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                q,
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
                  onLinkClick: ($) => {
                    S == null || S($), nt(!1);
                  },
                  onLinkAction: () => nt(!1),
                  collapsed: !1,
                  expandedWidth: me ? "100%" : Ca,
                  activeAccentColor: U,
                  groupAccentColor: E,
                  activeForegroundColor: w,
                  foregroundColor: ue,
                  surfaceBackgroundColor: Me,
                  topInsetPx: me ? 8 : 0,
                  topContent: me ? void 0 : Vt("full"),
                  footer: me ? void 0 : _o(!1)
                }
              ),
              (k == null ? void 0 : k.show) && /* @__PURE__ */ t(Qt, { ...k })
            ]
          }
        ),
        me && Ct && /* @__PURE__ */ t(
          ca,
          {
            open: Er,
            onClose: () => vo(!1),
            search: Ct
          }
        ),
        me && /* @__PURE__ */ t(
          aa,
          {
            ...Mr,
            pinnedLinks: m,
            activePath: I,
            onLinkClick: S,
            onMenuClick: i ? () => nt(!0) : void 0,
            menuOpen: wr,
            onSearchClick: Ct ? () => vo(!0) : void 0,
            searchOpen: Er,
            showAssistant: ot,
            onAssistantClick: rt,
            assistantActive: ct,
            showProfile: O,
            background: Me,
            color: Be,
            activeColor: U,
            activeBackground: Rt
          }
        ),
        /* @__PURE__ */ t(
          q,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": bs,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": d ? `${eo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: ze ? `calc(100% - ${ze}px)` : "100%",
              mt: d ? `${eo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...me && {
                pb: `calc(var(--lumora-content-padding) + ${Rr})`
              },
              backgroundColor: oe,
              ...Oe
            },
            children: e
          }
        ),
        We && /* @__PURE__ */ t(
          Yi,
          {
            open: Cr,
            variant: Tr,
            position: yt,
            width: St,
            sidebarWidthPx: ze,
            bottomOffsetPx: ot && vt === "floating" ? Oa : 0,
            fullScreen: d,
            fullScreenBottom: me ? Rr : "0px",
            onClose: po,
            children: /* @__PURE__ */ t(We, {})
          }
        ),
        ot && vt === "floating" && !me && /* @__PURE__ */ t(
          un,
          {
            variant: "floating",
            rightOffsetPx: us,
            shortcutKeys: Dr,
            onClick: rt,
            active: ct,
            busy: wt
          }
        ),
        H && K && /* @__PURE__ */ t(
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
              K,
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
  ne as AUTH_ERROR_CODES,
  V as AuthError,
  Po as CollapsibleSidebar,
  Tc as FullBleedSection,
  ki as Kbd,
  Pi as LumoraShellSkeleton,
  Ac as LumoraWrapper,
  Bt as clearAuthTokens,
  Ac as default,
  Oc as getAuthErrorMessage,
  Pt as getAuthTokens,
  zi as getCurrentUser,
  dr as getDesignTokens,
  Gi as isAuthenticated,
  Ho as logAuthError,
  Kn as storeAuthTokens
};
