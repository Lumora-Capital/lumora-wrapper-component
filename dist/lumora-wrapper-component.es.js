import { jsx as t, jsxs as v, Fragment as Te } from "react/jsx-runtime";
import xs from "@mui/icons-material/KeyboardArrowDownRounded";
import bs from "@mui/icons-material/KeyboardArrowUpRounded";
import ys from "@mui/icons-material/ChevronRightRounded";
import O from "@mui/material/Box";
import Lr from "@mui/material/Collapse";
import et from "@mui/material/Divider";
import Se from "@mui/material/IconButton";
import Kt from "@mui/material/ListItemButton";
import ve from "@mui/material/ListItemIcon";
import Fe from "@mui/material/ListItemText";
import Ae from "@mui/material/Stack";
import we from "@mui/material/Tooltip";
import ce from "@mui/material/Typography";
import { useTheme as We, createTheme as ao, alpha as ct, ThemeProvider as to } from "@mui/material/styles";
import * as d from "react";
import { useMemo as Nr, useState as it, useCallback as kr, useRef as Co, useEffect as jt } from "react";
import ot from "@mui/material/ButtonBase";
import { keyframes as Uo } from "@emotion/react";
import Xo from "@mui/material/Fade";
import Ko from "@mui/material/Popper";
import { useTheme as vn, CssBaseline as Mo, GlobalStyles as Ss, Box as Q, useMediaQuery as wn, Stack as Do, Skeleton as ze, Drawer as Fr, SwipeableDrawer as vs } from "@mui/material";
import Wr from "axios";
import ws from "@mui/material/Card";
import Es from "@mui/material/CardContent";
import En from "@mui/material/Button";
import Rs from "@mui/icons-material/AutoAwesomeRounded";
import Is from "@mui/material/Grow";
import jo from "@mui/material/Paper";
import _s from "@mui/material/Slide";
import Cs from "@mui/material/ListSubheader";
import Je from "@mui/material/MenuItem";
import Vo from "@mui/material/MenuList";
import Rn from "@mui/icons-material/MenuRounded";
import Yo from "@mui/icons-material/SearchRounded";
import In from "@mui/icons-material/LogoutRounded";
import _n from "@mui/icons-material/NotificationsNoneOutlined";
import Os from "@mui/icons-material/SettingsOutlined";
import Ts from "@mui/material/Avatar";
import As from "@mui/material/Menu";
import Br from "@mui/material/ToggleButton";
import $s from "@mui/material/ToggleButtonGroup";
import Ms from "@mui/material/Drawer";
import Ds from "@mui/material/AppBar";
import Ls from "@mui/material/Toolbar";
import Cn from "@mui/material/Badge";
import Ns from "@mui/icons-material/DarkModeOutlined";
import ks from "@mui/icons-material/LightModeOutlined";
import Fs from "@mui/icons-material/SettingsBrightnessOutlined";
import qo from "@mui/material/Popover";
import Ws from "@mui/icons-material/CheckRounded";
const oo = ({
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
  }, l = /* @__PURE__ */ v(Te, { children: [
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
      children: l
    }
  ) : /* @__PURE__ */ t(Ae, { direction: "row", "data-testid": s, sx: c, children: l });
}, Pr = !1, co = { stiffness: 320, damping: 24 }, Zo = { stiffness: 520, damping: 20 }, On = { stiffness: 380, damping: 36 }, lo = { stiffness: 260, damping: 28 }, Bs = "cubic-bezier(0.32, 1.28, 0.52, 1)", Ps = 420, Gr = 60, Gs = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), zr = /* @__PURE__ */ new Map(), Ee = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = zr.get(n);
  if (i)
    return i;
  if (!Gs)
    return { easing: Bs, duration: Ps };
  const s = 1 / 600;
  let a = 0, c = 0, l = 0, h = 1 / Gr;
  const m = [0];
  for (; l < 3; ) {
    const p = (-e * (a - 1) - o * c) / r;
    if (c += p * s, a += c * s, l += s, l >= h && (m.push(a), h += 1 / Gr, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const x = {
    easing: `linear(${m.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(l * 1e3)
  };
  return zr.set(n, x), x;
}, tt = (e) => !!(e && typeof e.animate == "function"), Xe = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Vt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, zs = (e, o = 1.14) => {
  if (!tt(e) || Xe())
    return;
  const r = Ee(Zo);
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
}, ke = (e, o) => !!(o && e.path === o), Qo = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return mt(r) ? Qo(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Lo = (e) => {
  const o = uo(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, ro = (e) => {
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
}, Tn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Jo = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Hs = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Us = Uo`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, _e = "@media (prefers-reduced-motion: reduce)", J = 6, er = "9, 193, 174", An = d.createContext(
  void 0
), Nt = d.createContext(
  void 0
), tr = (e) => d.useContext(Nt) ?? e, gt = () => {
  const e = d.useContext(An), o = e ? uo(e) : null;
  return o ? o.join(", ") : er;
}, Hr = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, Xs = (e, o) => e ? "255, 255, 255" : o, Ks = (e, o, r = er) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${Hs(e)}, 0 0 0 1px ${Jo(e)}`
}), js = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", or = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: Jo(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${J}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), rr = Uo`
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
`, nr = Uo`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, sr = (e, o = er, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Mt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: No(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${No(e, 0.45)}`
}, Vs = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${Jo(e)}`;
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
}, no = "data-rail-item", Ys = `[${no}], button, [role="button"]`, fo = d.createContext(!1), ir = () => {
  const e = d.useContext(fo), o = We(), r = d.useContext(Nt);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: or(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ze = Ee(On), ar = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  lean: s = 3
}) => {
  const a = d.useRef(null), c = gt(), [l, h] = d.useState(null), m = d.useRef(null), x = d.useRef(null), p = (E, I) => {
    x.current = I;
    const S = I.getBoundingClientRect(), C = E.getBoundingClientRect(), V = n ?? S.width, K = n ?? S.height, $ = {
      top: Math.round(S.top - C.top + (S.height - K) / 2),
      left: Math.round(S.left - C.left + (S.width - V) / 2),
      width: Math.round(V),
      height: Math.round(K)
    };
    h(
      (M) => M && M.visible && M.top === $.top && M.left === $.left && M.width === $.width && M.height === $.height ? M : { ...$, visible: !0, instant: !(M != null && M.visible) }
    );
  }, u = (E, I) => {
    var C;
    const S = (C = I == null ? void 0 : I.closest) == null ? void 0 : C.call(I, r);
    return S && E.contains(S) ? S : null;
  }, g = (E) => {
    if (!e)
      return;
    const I = u(E.currentTarget, E.target);
    I && p(E.currentTarget, I);
  }, _ = (E) => {
    if (!e)
      return;
    const I = u(E.currentTarget, E.target);
    I && E.target.matches(":focus-visible") && p(E.currentTarget, I);
  }, b = (E) => {
    const I = a.current, S = x.current;
    if (!e || !I || !S || !s || Xe())
      return;
    const C = S.getBoundingClientRect(), V = (K, $) => Math.max(-1, Math.min(1, K / ($ / 2))) * s;
    I.style.transform = `translate(${V(E.clientX - (C.left + C.width / 2), C.width)}px, ${V(E.clientY - (C.top + C.height / 2), C.height)}px)`;
  }, y = () => {
    x.current = null, a.current && (a.current.style.transform = ""), h((E) => E != null && E.visible ? { ...E, visible: !1 } : E);
  }, R = (E) => {
    const I = E.relatedTarget;
    (!I || !E.currentTarget.contains(I)) && (E.currentTarget.matches(":hover") || y());
  };
  return d.useEffect(() => {
    const E = a.current;
    if (!(l != null && l.visible)) {
      m.current = null;
      return;
    }
    const I = m.current;
    if (m.current = l.top, !tt(E) || Xe())
      return;
    if (I === null || l.instant) {
      E.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ze.duration,
        easing: Ze.easing
      });
      return;
    }
    const S = Math.min(Math.abs(l.top - I) / 600, 0.08);
    S && E.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - S / 2} ${1 + S}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ze.duration, easing: "ease-out" }
    );
  }, [l == null ? void 0 : l.top, l == null ? void 0 : l.visible, l == null ? void 0 : l.instant]), {
    lens: e && l ? /* @__PURE__ */ t(
      O,
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...sr(o, c),
          borderRadius: `${i}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: l.width,
          height: l.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset. `transform` carries
          // only the lean.
          translate: `${l.left}px ${l.top}px`,
          // Shrinks away as it fades; wells back up on return
          scale: l.visible ? "1" : "0.7",
          opacity: l.visible ? 1 : 0,
          pointerEvents: "none",
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${Ze.duration}ms ${Ze.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [_e]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: g,
      onMouseMove: b,
      onMouseLeave: y,
      onFocus: _,
      onBlur: R,
      onScrollCapture: y
    } : {}
  };
}, qs = (e, o) => {
  const r = ar({
    enabled: e,
    isDark: o,
    selector: Ys,
    size: 46,
    radius: J
  });
  return {
    ...r,
    lens: r.lens ? d.cloneElement(r.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Zs = (e, o) => {
  let r = 0, n = 0, i = e;
  for (; i && i !== o; ) {
    r += i.offsetTop, n += i.offsetLeft;
    const c = i.offsetParent;
    for (let l = i.parentElement; l && l !== o && (r -= l.scrollTop, n -= l.scrollLeft, l !== c); l = l.parentElement)
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
}, Qs = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const i = d.useRef(null), [s, a] = d.useState(null), c = d.useRef(null), l = d.useCallback(
    (m) => {
      const x = n.current;
      if (!e || !x)
        return;
      const p = x.querySelector(
        `[${no}][data-active="true"]`
      );
      if (!p) {
        a(
          (g) => g != null && g.visible ? { ...g, visible: !1 } : g
        );
        return;
      }
      const u = Zs(p, x);
      a(
        (g) => g && g.visible && g.top === u.top && g.left === u.left && g.width === u.width && g.height === u.height ? g : {
          ...u,
          visible: !0,
          instant: m || !(g != null && g.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    l(!1);
  }), d.useEffect(() => {
    const m = n.current;
    if (!e || !m)
      return;
    let x = 0;
    const p = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => l(!1));
    }, u = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => l(!0));
    u == null || u.observe(m);
    const g = typeof MutationObserver > "u" ? null : new MutationObserver(p);
    return g == null || g.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(x), u == null || u.disconnect(), g == null || g.disconnect();
    };
  }, [e, n, l]), d.useEffect(() => {
    const m = i.current;
    if (!(s != null && s.visible)) {
      c.current = null;
      return;
    }
    const x = c.current;
    if (c.current = s.top, x === null || s.instant || !tt(m) || Xe())
      return;
    const p = Math.min(Math.abs(s.top - x) / 600, 0.08);
    p && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - p / 2} ${1 + p}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ze.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    O,
    {
      ref: i,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...Mt(r, o),
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
        transition: s.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ze.duration}ms ${Ze.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [_e]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Ur = 14, Js = 18, ei = "blur(12px) saturate(180%) brightness(1.04)", ti = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), oi = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, ri = 140, Xr = 0.22, ni = 0.14, si = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var u;
      const p = e.current;
      p && (p.style.setProperty("--lx", `${s.x.toFixed(1)}px`), p.style.setProperty("--ly", `${s.y.toFixed(1)}px`), p.style.setProperty("--li", s.i.toFixed(3)), (u = n.current) == null || u.call(n, s.x, s.y, s.i));
    }, l = () => {
      s.x += (i.x - s.x) * Xr, s.y += (i.y - s.y) * Xr, s.i += (i.i - s.i) * ni;
      const p = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      p && (s.x = i.x, s.y = i.y, s.i = i.i), c(), a = p ? 0 : requestAnimationFrame(l);
    }, h = () => {
      a || (a = requestAnimationFrame(l));
    }, m = (p) => {
      const u = e.current;
      if (p.pointerType === "touch" || !u)
        return;
      const g = u.getBoundingClientRect();
      if (!g.width || !g.height)
        return;
      i.x = (p.clientX - g.left) * u.offsetWidth / g.width, i.y = (p.clientY - g.top) * u.offsetHeight / g.height;
      const _ = Math.max(
        g.left - p.clientX,
        0,
        p.clientX - g.right
      ), b = Math.max(
        g.top - p.clientY,
        0,
        p.clientY - g.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(_, b) / ri), s.i < 0.01 && (s.x = i.x, s.y = i.y), h();
    }, x = () => {
      i.i = 0, h();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", x), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", x);
    };
  }, [e, o]);
}, xt = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: s = !0,
    onLight: a
  }, c) => {
    const l = d.useRef(null), h = i && Pr;
    si(l, s && Pr, a);
    const m = gt(), x = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [p, u] = d.useState(null), g = d.useRef(null), _ = d.useCallback(
      (R) => {
        var E;
        if (l.current = R, typeof c == "function" ? c(R) : c && (c.current = R), (E = g.current) == null || E.disconnect(), g.current = null, !R || !h || !ti || typeof ResizeObserver > "u")
          return;
        const w = () => {
          const I = R.offsetWidth, S = R.offsetHeight;
          u(
            (C) => (C == null ? void 0 : C.width) === I && C.height === S ? C : I && S ? { width: I, height: S } : null
          );
        };
        g.current = new ResizeObserver(w), g.current.observe(R), w();
      },
      [c, h]
    ), b = d.useMemo(
      () => p ? oi(p.width, p.height, Ur) : null,
      [p]
    ), y = h && !!(b && p);
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
                    stdDeviation: Ur / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Js,
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
          ref: _,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": y ? "true" : void 0,
          sx: [
            Ks(e, o, m),
            y ? {
              backdropFilter: `url(#${x}) ${ei}`,
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
const Qe = 44, Kr = 4, ii = J, jr = 1.4, ai = 6, $n = 6, Ct = J, so = 10, Vr = 0.12, Yr = 0.75, ci = so + 32, li = 90, di = 22, ui = 1190, fi = 1195, io = Ee(co), me = Ee(On), qr = Ee(lo), hi = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const s = Math.min(i, r / 2, n / 2), a = e + r, c = o + n, l = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + s} ${o} H ${a - s} ${l} ${a} ${o + s} V ${c - s} ${l} ${a - s} ${c} H ${e + s} ${l} ${e} ${c - s} V ${o + s} ${l} ${e + s} ${o} Z')`;
}, pi = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: i,
  activePath: s,
  focusFirst: a = !1,
  onNavigate: c,
  onClose: l,
  panelProps: h,
  accentColor: m,
  activeForegroundColor: x,
  solidSurface: p
}) => {
  const u = We(), g = u.palette.mode === "dark", _ = !!(e && r), b = d.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const y = b.current, R = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const T = r.getBoundingClientRect();
      return {
        x: n,
        y: T.top,
        left: n,
        right: n,
        top: T.top,
        bottom: T.bottom,
        width: 0,
        height: T.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), w = d.useRef(R);
  R && (w.current = R), d.useEffect(() => {
    r && zs(r);
  }, [r]);
  const [E, I] = d.useState(!1);
  d.useEffect(() => {
    if (!_) {
      I(!1);
      return;
    }
    let T = 0;
    const P = requestAnimationFrame(() => {
      T = requestAnimationFrame(() => I(!0));
    });
    return () => {
      cancelAnimationFrame(P), cancelAnimationFrame(T);
    };
  }, [_]);
  const S = d.useMemo(
    () => y ? Qo(y.group.subitems, y.group.icon) : [],
    [y]
  ), C = d.useRef(null), V = d.useRef(null), K = d.useRef(0), $ = d.useRef(null), M = d.useRef([]), G = S.findIndex(
    ({ sub: T }) => ke(T, s)
  ), [D, z] = d.useState(0);
  d.useEffect(() => {
    z(Math.max(G, 0));
  }, [o]), d.useEffect(() => {
    if (!_ || !a)
      return;
    const T = setTimeout(() => {
      var P;
      return (P = M.current[0]) == null ? void 0 : P.focus();
    });
    return () => clearTimeout(T);
  }, [_, a, o]);
  const ee = (T) => {
    var q;
    const P = Math.max(0, Math.min(T, S.length - 1));
    z(P), (q = M.current[P]) == null || q.focus();
  }, ge = (T, P) => {
    switch (T.key) {
      case "ArrowRight":
        ee(P + 1);
        break;
      case "ArrowLeft":
        P === 0 ? l(!0) : ee(P - 1);
        break;
      case "Home":
        ee(0);
        break;
      case "End":
        ee(S.length - 1);
        break;
      case "Tab":
        l(!0);
        break;
      default:
        return;
    }
    T.preventDefault();
  }, W = (T) => {
    var fe;
    const P = M.current.slice(0, S.length).filter((j) => !!j);
    if (!P.length)
      return;
    const q = T !== null && T < P.length && !Xe(), X = `translate ${me.duration}ms ${me.easing}, scale ${me.duration}ms ${me.easing}`, L = P.map((j) => j.offsetLeft + Qe / 2), Z = P.map(
      (j, pe) => q && pe === T ? jr : 1
    ), ue = q ? (jr - 1) * Qe : 0, Ce = L[0] - Qe / 2, Ke = L[L.length - 1] + Qe / 2, xe = q ? Math.min(
      Math.min(
        1,
        Math.max(
          0,
          (L[T] - Ce) / (Ke - Ce)
        )
      ),
      ai / ue
    ) : 0;
    let he = Ce - ue * xe;
    P.forEach((j, pe) => {
      const be = Qe * Z[pe], $e = he + be / 2;
      he += be + Kr, j.style.transition = `${X}, background 160ms ease, box-shadow 160ms ease`, j.style.translate = q ? `${$e - L[pe]}px 0` : "", j.style.scale = q ? String(Z[pe]) : "", q ? j.style.setProperty("--dock-scale", String(Z[pe])) : j.style.removeProperty("--dock-scale");
    }), (fe = $.current) == null || fe.call($);
  }, B = d.useRef(null);
  d.useEffect(() => {
    B.current = null;
  }, [o]);
  const H = (T) => {
    B.current !== T && (B.current = T, cancelAnimationFrame(K.current), K.current = requestAnimationFrame(() => W(T)));
  };
  d.useEffect(() => () => cancelAnimationFrame(K.current), []);
  const te = u.palette.text.primary, ae = g ? u.palette.text.primary : m;
  return /* @__PURE__ */ v(Te, { children: [
    /* @__PURE__ */ t(Xo, { in: _, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      O,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => l(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: i ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...i ? { clipPath: hi(i) } : {},
          zIndex: ui,
          bgcolor: js(g)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      Ko,
      {
        open: _,
        anchorEl: R ?? w.current,
        placement: "right",
        transition: !0,
        modifiers: [
          { name: "offset", options: { offset: [0, so] } },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: fi,
          transition: E ? `transform ${me.duration}ms ${me.easing}` : "none",
          [_e]: { transition: "none" }
        },
        children: ({ TransitionProps: T }) => /* @__PURE__ */ t(
          vi,
          {
            in: (T == null ? void 0 : T.in) ?? _,
            onEnter: T == null ? void 0 : T.onEnter,
            onExited: T == null ? void 0 : T.onExited,
            groupKey: (y == null ? void 0 : y.key) ?? null,
            panelProps: h,
            isDark: g,
            solidSurface: p,
            groupText: y == null ? void 0 : y.group.text,
            glassRef: V,
            shapeRef: $,
            children: y ? /* @__PURE__ */ t(Te, { children: /* @__PURE__ */ t(
              O,
              {
                ref: C,
                role: "menu",
                "aria-label": y.group.text,
                onPointerLeave: () => H(null),
                sx: {
                  position: "relative",
                  display: "flex",
                  gap: `${Kr}px`,
                  // No room kept for magnification: a grown tile rises out of
                  // the glass, as icons rise out of the Dock
                  px: 0
                },
                children: S.map(({ sub: P, icon: q }, X) => /* @__PURE__ */ t(
                  Mn,
                  {
                    ref: (L) => {
                      M.current[X] = L;
                    },
                    sub: P,
                    icon: q,
                    index: X,
                    active: ke(
                      P,
                      s
                    ),
                    tabIndex: X === D ? 0 : -1,
                    onClick: () => {
                      c(P.path), l();
                    },
                    onKeyDown: (L) => ge(L, X),
                    onFocus: (L) => {
                      z(X), L.currentTarget.matches(
                        ":focus-visible"
                      ) && H(X);
                    },
                    onHoverStart: (L) => {
                      L !== "touch" && H(X);
                    },
                    accentColor: m,
                    activeForegroundColor: x,
                    labelColor: te,
                    iconColor: ae,
                    isDark: g
                  },
                  P.path
                ))
              },
              y.key
            ) }) : null
          }
        )
      }
    )
  ] });
}, At = 18, mi = 160, ko = 14, gi = 22, xi = 2.5, bi = 1, Zr = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, yi = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, Si = (e, o, r) => {
  const n = $n, i = At, s = At + o / 2, a = Math.max(e, ...r.map((b) => b.right + n)), c = {
    cx: a / 2,
    cy: s,
    hx: a / 2,
    hy: o / 2,
    r: Ct
  }, l = r.filter((b) => b.bottom - b.top > Qe * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + At,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: Ct
  })), h = (b, y) => l.reduce(
    (R, w) => yi(R, Zr(b, y, w), gi),
    Zr(b, y, c)
  ), m = (b, y) => {
    let R = s, w = s + y * (o / 2 + i);
    if (h(b, R) > 0)
      return null;
    for (let E = 0; E < 12; E += 1) {
      const I = (R + w) / 2;
      h(b, I) <= 0 ? R = I : w = I;
    }
    return R;
  }, x = Math.min(0, ...l.map((b) => b.cx - b.hx)) - 2, p = Math.max(a, ...l.map((b) => b.cx + b.hx)) + 2, u = [], g = [];
  for (let b = x; b <= p; ) {
    const y = m(b, -1), R = m(b, 1);
    if (y !== null && R !== null) {
      const E = +(b + ko).toFixed(1);
      u.push([E, +y.toFixed(1)]), g.push([E, +R.toFixed(1)]);
    }
    const w = b - x < Ct + 4 || p - b < Ct + 4;
    b += w ? bi : xi;
  }
  return u.length ? `M ${[...u, ...g.reverse()].map(([b, y]) => `${b} ${y}`).join(" L ")} Z` : "";
}, Qr = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((s) => {
    tt(s) && s.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    });
  });
}, vi = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: i,
  isDark: s,
  solidSurface: a,
  groupText: c,
  glassRef: l,
  shapeRef: h,
  children: m
}) => {
  const x = d.useRef(null), p = d.useRef(null), u = d.useRef(null), g = d.useRef(null), _ = d.useRef(null), b = Xs(s, gt()), y = d.useCallback(
    (W, B, H) => {
      var te, ae;
      (te = _.current) == null || te.setAttribute("cx", String(W)), (ae = _.current) == null || ae.setAttribute("cy", String(B)), g.current && (g.current.style.opacity = String(
        H * (s ? Hr.dark.rim : Hr.light.rim)
      ));
    },
    [s]
  ), R = d.useRef(null), w = d.useRef(null), E = `lumora-flyout-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, I = d.useRef(0), S = d.useRef(0), C = d.useRef(""), V = () => {
    var T, P, q, X;
    const W = x.current, B = p.current;
    if (!W || !B)
      return !1;
    const H = W.getBoundingClientRect(), te = Array.from(
      W.querySelectorAll('[role="menuitem"]'),
      (L) => {
        const Z = L.getBoundingClientRect();
        return {
          left: Z.left - H.left,
          right: Z.right - H.left,
          top: Z.top - H.top,
          bottom: Z.bottom - H.top
        };
      }
    ), ae = Si(
      W.offsetWidth,
      W.offsetHeight,
      te
    );
    return ae === C.current ? !1 : (C.current = ae, B.style.clipPath = `path('${ae}')`, (T = u.current) == null || T.setAttribute("d", ae), (P = g.current) == null || P.setAttribute("d", ae), (q = R.current) == null || q.setAttribute("d", ae), (X = w.current) == null || X.setAttribute("d", ae), !0);
  }, K = () => {
    if (S.current = 0, I.current)
      return;
    const W = () => {
      if (S.current = V() ? 0 : S.current + 1, S.current > 8) {
        I.current = 0;
        return;
      }
      I.current = requestAnimationFrame(W);
    };
    I.current = requestAnimationFrame(W);
  };
  h.current = K, d.useLayoutEffect(() => (V(), K(), () => {
    cancelAnimationFrame(I.current), I.current = 0;
  }), [n]);
  const $ = d.useRef(null), M = d.useRef(null), G = d.useRef(!1), D = (W) => {
    x.current = W;
    const { ref: B } = i;
    typeof B == "function" ? B(W) : B && (B.current = W);
  }, z = () => {
    Vt(l.current), Vt($.current), Vt(x.current);
  }, ee = () => {
    var te;
    const W = x.current, B = l.current, H = $.current;
    if (!(!tt(W) || !B || !H)) {
      if (z(), Xe()) {
        W.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      M.current = null, B.animate(
        [
          { transform: `scale(${Vr}, ${Yr})` },
          { transform: "none" }
        ],
        { duration: io.duration, easing: io.easing }
      ), Qr(B, [0, 1], 160, "ease-out");
      try {
        (te = p.current) == null || te.animate(
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
          duration: qr.duration,
          delay: 60,
          easing: qr.easing,
          fill: "backwards"
        }
      );
    }
  }, ge = () => {
    const W = x.current, B = l.current, H = $.current;
    if (!tt(W) || !B || !H) {
      r == null || r();
      return;
    }
    if (z(), Xe()) {
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
    }), Qr(B, [1, 0], 200, "ease-in"), B.animate(
      [
        { transform: "none" },
        { transform: `scale(${Vr}, ${Yr})` }
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
      ge();
      return;
    }
    o == null || o(), ee();
  }, [e]), d.useLayoutEffect(() => {
    const W = x.current;
    if (!W)
      return;
    const B = W.getBoundingClientRect(), H = M.current;
    if (M.current = { width: B.width, height: B.height }, !G.current) {
      G.current = !0;
      return;
    }
    const te = l.current;
    !e || !H || !tt(te) || !B.width || !B.height || Xe() || (Vt(te), te.animate(
      [
        {
          transform: `scale(${H.width / B.width}, ${H.height / B.height})`
        },
        { transform: "none" }
      ],
      { duration: me.duration, easing: me.easing }
    ));
  }, [n]), /* @__PURE__ */ v(
    O,
    {
      ref: D,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": c,
      sx: {
        position: "relative",
        borderRadius: `${Ct}px`,
        p: `${$n}px`,
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
          O,
          {
            ref: l,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -At,
              bottom: -At,
              left: -ko,
              right: -mi,
              pointerEvents: "none",
              // The rail icon's centre: the panel is centred on it,
              // one gap plus half the rail's padding to the left
              transformOrigin: `${ko - ci}px 50%`,
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
                          id: `${E}-shadow`,
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
                          id: `${E}-outside`,
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
                    /* @__PURE__ */ t("g", { mask: `url(#${E}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: R,
                        transform: "translate(0 12)",
                        fill: s ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${E}-shadow)`
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
                        id: `${E}-rim`,
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
                    /* @__PURE__ */ v(
                      "radialGradient",
                      {
                        ref: _,
                        id: `${E}-glint`,
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
                        stroke: `url(#${E}-glint)`,
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
        /* @__PURE__ */ t(O, { ref: $, sx: { position: "relative" }, children: m })
      ]
    }
  );
}, Mn = d.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: i,
    onClick: s,
    onKeyDown: a,
    onFocus: c,
    onHoverStart: l,
    accentColor: h,
    activeForegroundColor: m,
    labelColor: x,
    iconColor: p,
    isDark: u
  }, g) => {
    const _ = gt(), b = d.useContext(Nt), y = (I) => {
      const S = I.currentTarget.getBoundingClientRect();
      I.currentTarget.style.setProperty(
        "--mx",
        `${(I.clientX - S.left) / S.width * 100}%`
      ), I.currentTarget.style.setProperty(
        "--my",
        `${(I.clientY - S.top) / S.height * 100}%`
      );
    }, R = (I) => {
      const S = I.currentTarget;
      !tt(S) || Xe() || S.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.1, 0.9)", offset: 0.22 },
          { transform: "scale(0.95, 1.06)", offset: 0.5 },
          { transform: "scale(1.02, 0.99)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, w = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, E = {
      ...sr(u, _),
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
        onMouseEnter: R,
        onPointerEnter: (I) => l(I.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Qe,
          height: Qe,
          borderRadius: `${ii}px`,
          color: n ? m : x,
          bgcolor: n ? h : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Mt(h, u) : {},
          transition: `translate ${me.duration}ms ${me.easing}, scale ${me.duration}ms ${me.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${Us} ${io.duration}ms ${io.easing} both`,
          animationDelay: `${li + r * di}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: 22,
            color: n ? m : p
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
          } : E,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : E,
            "& [data-tile-name]": w,
            outline: "2px solid",
            outlineColor: h,
            outlineOffset: 2
          },
          [_e]: {
            animation: "none",
            transition: "none",
            "&:active": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(O, { sx: { position: "relative", display: "flex" }, children: o }),
          /* @__PURE__ */ t(
            O,
            {
              component: "span",
              "data-tile-name": !0,
              sx: {
                ...or(u, b),
                position: "absolute",
                top: "100%",
                left: "50%",
                translate: "-50% 8px",
                transformOrigin: "top center",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: 0,
                scale: "calc(0.6 / var(--dock-scale, 1))",
                transition: `opacity 140ms ease, scale ${me.duration}ms ${me.easing}`,
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
Mn.displayName = "FlyoutTile";
const wi = 100, Ei = 250, Ri = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const i = d.useRef(/* @__PURE__ */ new Map()), s = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, h = () => {
    clearTimeout(c.current), c.current = void 0;
  }, m = (y, R, w = !1) => {
    l(), h(), r({ key: y, pinned: R, focusFirst: w });
  }, x = d.useCallback((y = !1) => {
    var w, E;
    l(), h();
    const R = (w = n.current) == null ? void 0 : w.key;
    r(null), y && R && ((E = i.current.get(R)) == null || E.focus());
  }, []), p = () => {
    l(), !(!n.current || n.current.pinned) && (h(), c.current = setTimeout(() => x(), Ei));
  };
  d.useEffect(() => {
    e || x();
  }, [e, x]), d.useEffect(
    () => () => {
      l(), h();
    },
    []
  );
  const u = o !== null;
  return d.useEffect(() => {
    if (!u)
      return;
    const y = (E) => {
      var S;
      const I = E;
      return I ? (S = s.current) != null && S.contains(I) ? !0 : [...i.current.values()].some((C) => C.contains(I)) : !1;
    }, R = (E) => {
      y(E.target) || x();
    }, w = (E) => {
      var I;
      E.key === "Escape" && x(
        !!((I = s.current) != null && I.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", R), document.addEventListener("keydown", w), () => {
      document.removeEventListener("pointerdown", R), document.removeEventListener("keydown", w);
    };
  }, [u, x]), {
    state: o,
    close: x,
    triggerProps: (y) => ({
      ref: (R) => {
        R ? i.current.set(y, R) : i.current.delete(y);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        h();
        const R = n.current;
        if (R) {
          R.key !== y && m(y, R.pinned);
          return;
        }
        l(), a.current = setTimeout(
          () => m(y, !1),
          wi
        );
      },
      onMouseLeave: p,
      onClick: (R) => {
        if (R.detail === 0) {
          m(y, !0, !0);
          return;
        }
        const w = n.current;
        (w == null ? void 0 : w.key) === y && w.pinned ? x() : m(y, !0);
      },
      onKeyDown: (R) => {
        R.key === "ArrowRight" && (R.preventDefault(), m(y, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: h,
      onMouseLeave: p
    },
    onRailLeafEnter: () => {
      l(), n.current && !n.current.pinned && x();
    },
    getTrigger: (y) => i.current.get(y) ?? null
  };
}, Ii = 264, _i = 72, Jr = 64, Yt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ci = 16, Oi = 14, Ti = 4, Ai = 2.5, en = "0.7rem", tn = 22, on = Ee(Zo), at = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
  const s = d.useRef(null), [a, c] = d.useState(!1), l = d.useCallback(() => {
    const h = s.current;
    h && c(h.scrollWidth > h.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    l();
  }, [l, e]), d.useEffect(() => {
    const h = s.current;
    if (!h)
      return;
    const m = new ResizeObserver(() => l());
    return m.observe(h), () => m.disconnect();
  }, [l]), /* @__PURE__ */ t(
    we,
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
}, $i = ({
  open: e,
  size: o = Ci
}) => e ? /* @__PURE__ */ t(bs, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(xs, { sx: { fontSize: o, opacity: 0.75 } }), rn = ({ open: e }) => /* @__PURE__ */ t(
  ys,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), qt = 600, Fo = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: i,
  logo: s,
  title: a,
  onBrandClick: c,
  brandMenuOpen: l,
  showHeaderBar: h = !1,
  headerBackgroundColor: m,
  headerForegroundColor: x,
  brandColor: p,
  activeAccentColor: u = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: _,
  foregroundColor: b,
  surfaceBackgroundColor: y,
  flyoutSurfaceColor: R,
  collapsed: w = !1,
  expandedWidth: E = Ii,
  collapsedWidth: I = _i,
  showLabels: S = !1,
  topInsetPx: C = 0,
  topContent: V,
  footer: K,
  submenuMode: $ = "inline"
}) => {
  const M = We(), G = M.palette.mode === "dark", D = d.useContext(Nt), z = $ === "flyout" && w && !S, ee = Ri(z), ge = d.useRef(null), W = qs(z, G), B = Qs({
    enabled: z,
    isDark: G,
    color: u,
    containerRef: ge
  }), { close: H } = ee;
  d.useEffect(() => {
    H();
  }, [r, H]);
  const [te, ae] = d.useState(
    {}
  ), T = _ ?? Lo(u), P = {
    bgcolor: u,
    color: T,
    "& .MuiListItemIcon-root": { color: T }
  }, q = {
    bgcolor: u,
    color: T,
    borderRadius: "8px"
  }, X = g ?? ro(u), L = y ?? (G ? M.palette.background.paper : "#ffffff"), Z = b ?? (G ? "text.primary" : u), ue = m ?? L, Ce = x ?? (m ? Lo(ue) : b ?? (G ? M.palette.text.primary : u)), Ke = ro(Ce), xe = (f) => {
    n == null || n(f);
  }, he = (f, N) => {
    ae((k) => ({ ...k, [f]: !N }));
  }, fe = (f, N) => te[N] ?? qe(f, r), j = (f, N, k) => ({
    color: f ? T : Z,
    bgcolor: f ? u : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? T : Z,
      minWidth: k
    },
    "&:hover": f || S ? P : { bgcolor: N }
  }), pe = {
    "&.Mui-selected": {
      bgcolor: u
    },
    "&.Mui-selected:hover": P
  }, be = (f) => {
    const N = ke(f, r), k = /* @__PURE__ */ v(
      Kt,
      {
        disabled: !f.path,
        selected: N,
        onClick: () => f.path && xe(f.path),
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
          ...j(
            N,
            X,
            f.subtitle ? 48 : 36
          ),
          ...pe
        },
        children: [
          /* @__PURE__ */ t(ve, { children: f.icon }),
          /* @__PURE__ */ t(
            Fe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: f.text,
                  fontWeight: qt
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ t(
                O,
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
      return k;
    const { action: F } = f;
    return /* @__PURE__ */ v(O, { sx: { position: "relative" }, children: [
      k,
      /* @__PURE__ */ t(we, { title: F.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        Se,
        {
          "aria-label": F.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            F.onClick(), i == null || i();
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
            borderColor: N ? "rgba(255, 255, 255, 0.35)" : X,
            color: N ? T : Z,
            "&:hover": {
              bgcolor: N ? "rgba(255, 255, 255, 0.15)" : X
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: N ? T : Z,
              outlineOffset: 1
            }
          },
          children: F.icon
        }
      ) })
    ] }, f.text);
  }, $e = (f) => {
    const N = qe(f, r), k = ke(f, r), F = pt("", f), U = fe(f, F);
    return /* @__PURE__ */ v(
      O,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: N ? X : "transparent"
        },
        children: [
          /* @__PURE__ */ v(
            Kt,
            {
              onClick: () => he(F, U),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": k ? "true" : "false",
              "aria-expanded": U,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...j(k, X, 36)
              },
              children: [
                /* @__PURE__ */ t(ve, { children: f.icon }),
                /* @__PURE__ */ t(
                  Fe,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      at,
                      {
                        text: f.text,
                        fontWeight: qt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(rn, { open: U })
              ]
            }
          ),
          /* @__PURE__ */ t(Lr, { in: U, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            O,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (re) => Me(re, F, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, Me = (f, N, k) => {
    const F = pt(N, f), U = Ti + (k - 1) * Ai;
    if (mt(f)) {
      const ne = qe(f, r), se = ke(f, r), le = fe(f, F);
      return /* @__PURE__ */ v(O, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ v(
          Kt,
          {
            onClick: () => he(F, le),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": ne ? "true" : "false",
            "aria-expanded": le,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: U,
              ...j(se, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(ve, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                Fe,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    at,
                    {
                      text: f.text,
                      fontWeight: qt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(rn, { open: le })
            ]
          }
        ),
        /* @__PURE__ */ t(Lr, { in: le, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(O, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (yt) => Me(yt, F, k + 1)
        ) }) })
      ] }, F);
    }
    const re = ke(f, r);
    return /* @__PURE__ */ v(
      Kt,
      {
        selected: re,
        disabled: !f.path,
        onClick: () => f.path && xe(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": re ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: U,
          ...j(re, "action.hover", 32),
          ...pe
        },
        children: [
          f.icon ? /* @__PURE__ */ t(ve, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            Fe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: f.text,
                  fontWeight: qt
                }
              )
            }
          )
        ]
      },
      F
    );
  }, De = (f, N, k, F, U, re) => {
    const ne = !U, se = /* @__PURE__ */ v(
      Se,
      {
        "aria-label": N,
        disabled: ne,
        onClick: U,
        onMouseEnter: z ? ee.onRailLeafEnter : void 0,
        ...z ? { [no]: "" } : {},
        "data-testid": (re == null ? void 0 : re.testId) ?? `sidebar-item-${N}`,
        "data-active": F ? "true" : "false",
        sx: S ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: F ? T : Z,
          bgcolor: F ? u : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: tn
          },
          "&:hover": q,
          ...Yt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: F ? T : Z,
          bgcolor: F ? u : "transparent",
          borderRadius: F ? "8px" : "50%",
          "&:hover": {
            bgcolor: F ? u : re != null && re.insideGroup ? "action.hover" : X,
            borderRadius: "8px"
          },
          ...Yt,
          ...z ? lt(F) : {}
        },
        children: [
          k,
          S ? /* @__PURE__ */ t(
            at,
            {
              text: N,
              variant: "caption",
              center: !0,
              fontSize: en
            }
          ) : null
        ]
      }
    );
    return S ? ne ? /* @__PURE__ */ t("span", { children: se }, f) : /* @__PURE__ */ t(d.Fragment, { children: se }, f) : /* @__PURE__ */ t(
      we,
      {
        title: N,
        placement: "right",
        arrow: !z,
        ...z ? Ft : {},
        children: ne ? /* @__PURE__ */ t("span", { children: se }) : se
      },
      f
    );
  }, kt = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, lt = (f) => ({
    borderRadius: `${J}px`,
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${on.duration}ms ${on.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), Ft = {
    slotProps: {
      tooltip: { sx: or(G, D) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, ho = (f) => {
    var U;
    const N = qe(f, r), k = pt("", f), F = ((U = ee.state) == null ? void 0 : U.key) === k;
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
          Se,
          {
            ...ee.triggerProps(k),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": F,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": N ? "true" : "false",
            "data-open": F ? "true" : "false",
            [no]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: N ? T : Z,
              bgcolor: N ? u : F ? X : "transparent",
              ...lt(N),
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
            children: f.icon
          }
        )
      },
      f.text
    );
  }, rt = (f) => {
    const N = qe(f, r), k = ke(f, r), F = pt("", f), U = fe(f, F), re = /* @__PURE__ */ v(
      Se,
      {
        "aria-label": f.text,
        "aria-expanded": U,
        onClick: () => he(F, U),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": k ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: S ? 0.25 : 0,
          width: S ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...S ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: k ? T : Z,
          bgcolor: k ? u : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": S ? { bgcolor: u, color: T } : {
            bgcolor: k ? u : "transparent"
          },
          ...Yt
        },
        children: [
          S ? /* @__PURE__ */ t(
            O,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: tn
                }
              },
              children: f.icon
            }
          ) : f.icon,
          S ? /* @__PURE__ */ t(
            at,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: en
            }
          ) : null,
          /* @__PURE__ */ t($i, { open: U, size: Oi })
        ]
      }
    ), ne = S ? re : /* @__PURE__ */ t(we, { title: f.text, placement: "right", arrow: !0, children: re });
    return /* @__PURE__ */ v(
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
          bgcolor: N ? X : "transparent",
          ...S ? {} : { "&:hover": { bgcolor: X } }
        },
        children: [
          ne,
          U ? Qo(f.subitems, f.icon).map(
            ({ sub: se, icon: le }) => De(
              se.path,
              se.text,
              le,
              ke(se, r),
              () => xe(se.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${se.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, bt = (f) => /* @__PURE__ */ t(
    O,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: De(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        ke(f, r),
        f.path ? () => xe(f.path) : void 0,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), Wt = (f) => mt(f) ? z ? ho(f) : w ? rt(f) : $e(f) : w ? bt(f) : be(f), je = (f) => /* @__PURE__ */ t(
    Ae,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: w ? "center" : "stretch"
      },
      children: f.map(Wt)
    }
  ), dt = w ? I : E, Bt = () => {
    var ne, se;
    const { state: f } = ee, N = f ? [...e, ...o].find(
      (le) => mt(le) && pt("", le) === f.key
    ) ?? null : null, k = N ? ((ne = ge.current) == null ? void 0 : ne.getBoundingClientRect().right) ?? I : I, F = N ? ((se = ge.current) == null ? void 0 : se.closest("[data-rail-surface]")) ?? ge.current : null, U = F == null ? void 0 : F.getBoundingClientRect(), re = F && U ? {
      left: U.left,
      top: U.top,
      width: U.width,
      height: U.height,
      radius: parseFloat(
        getComputedStyle(F).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      pi,
      {
        group: N,
        groupKey: N ? f.key : null,
        anchor: N ? ee.getTrigger(f.key) : null,
        railEdge: k,
        railShape: re,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: xe,
        onClose: ee.close,
        panelProps: ee.flyoutProps,
        accentColor: u,
        activeForegroundColor: T,
        solidSurface: R ?? L
      }
    );
  }, Pt = h ? /* @__PURE__ */ t(
    O,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Jr,
        minHeight: Jr,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: ue
      },
      children: s || a ? /* @__PURE__ */ t(
        oo,
        {
          logo: s,
          title: w ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: p ?? Ce,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, po = !h && s ? /* @__PURE__ */ t(
    O,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: 1
      },
      children: /* @__PURE__ */ t(
        oo,
        {
          logo: s,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: p ?? Ce,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, Ve = S ? 0.5 : w ? 1 : 1.5;
  return /* @__PURE__ */ t(fo.Provider, { value: z, children: /* @__PURE__ */ v(
    O,
    {
      ref: ge,
      ...W.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": w ? "true" : "false",
      "data-labeled": S ? "true" : "false",
      sx: {
        width: dt,
        minWidth: dt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: L,
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
        ...z ? kt : {}
      },
      children: [
        W.lens,
        B.glass,
        Pt ?? po,
        V ? /* @__PURE__ */ t(
          O,
          {
            sx: {
              flexShrink: 0,
              px: Ve,
              pt: 1,
              pb: 1
            },
            children: V
          }
        ) : null,
        /* @__PURE__ */ v(
          O,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: Ve,
              pt: C && !h ? `${C}px` : 1,
              pb: 2
            },
            children: [
              je(e),
              o.length > 0 ? /* @__PURE__ */ v(O, { sx: { mt: "auto", pt: 2 }, children: [
                K ? null : /* @__PURE__ */ t(
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
        K ? /* @__PURE__ */ t(O, { sx: { flexShrink: 0, px: Ve, pb: 1.5 }, children: /* @__PURE__ */ t(
          O,
          {
            sx: {
              borderTop: `1px solid ${Ke}`,
              pt: 1.5
            },
            children: K
          }
        ) }) : null,
        z ? Bt() : null
      ]
    }
  ) });
}, Wo = "var(--lumora-content-padding, 0px)", nn = `calc(${Wo} * -1)`, Rc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: s = !0,
  sx: a
}) => /* @__PURE__ */ t(
  O,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: nn,
        mt: o ? nn : 0,
        // Space below it, like any other block on the page
        mb: Wo,
        px: s ? Wo : 0,
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
), Mi = ({ keys: e }) => /* @__PURE__ */ t(
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
), Re = {
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
}, Dn = ao(), Oe = Dn.typography.pxToRem, cr = (e) => {
  const o = e === "dark", r = [...Dn.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? Re[300] : Re[200],
        main: Re[400],
        dark: Re[700],
        contrastText: Re[50]
      },
      info: o ? {
        light: Re[500],
        main: Re[700],
        dark: Re[900],
        contrastText: Re[300]
      } : {
        light: Re[100],
        main: Re[300],
        dark: Re[600],
        contrastText: Ie[50]
      },
      warning: o ? { light: ft[400], main: ft[500], dark: ft[700] } : { light: ft[300], main: ft[400], dark: ft[800] },
      error: o ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      success: o ? { light: ut[400], main: ut[500], dark: ut[700] } : { light: ut[300], main: ut[400], dark: ut[800] },
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
        fontSize: Oe(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Oe(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Oe(30), lineHeight: 1.2 },
      h4: { fontSize: Oe(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Oe(20), fontWeight: 600 },
      h6: { fontSize: Oe(18), fontWeight: 600 },
      subtitle1: { fontSize: Oe(18) },
      subtitle2: { fontSize: Oe(14), fontWeight: 500 },
      body1: { fontSize: Oe(14) },
      body2: { fontSize: Oe(14), fontWeight: 400 },
      caption: { fontSize: Oe(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Di = 100, Ln = 80, Qt = 56, Ot = 72, Bo = 68, $t = 8, Nn = J, kn = { xs: 2, md: "18px" }, Fn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, lr = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), Wn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n
}) => !e || o ? 0 : r === "rail-labeled" ? Ln : lr(n, r) ? Bo + 2 * $t : r === "collapsible" || r === "panel" ? Ot : Di, Bn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Pn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Li = 6, sn = (e, o) => typeof e == "object" ? e[o] : e, Oo = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: i = "expand",
  showSidebar: s = !0,
  contentPadding: a = kn,
  sidebarBackgroundColor: c,
  contentBackgroundColor: l
}) => {
  const h = wn(r.breakpoints.down("md")), m = e === "dark", x = Wn({
    showSidebar: s,
    isMobile: h,
    sidebarVariant: n,
    sidebarSubmenu: i
  }), p = lr(i, n) ? {
    gutterPx: $t,
    radiusPx: Nn
  } : void 0, u = Qt, g = Bn(
    sn(c, e),
    m
  ), _ = Pn(
    sn(l, e),
    m
  ), b = Fn(
    a,
    r
  ), y = /* @__PURE__ */ v(Do, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(ze, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(Q, { sx: { height: 8 } }),
    Array.from({ length: Li }, (R, w) => /* @__PURE__ */ t(ze, { variant: "rounded", width: 28, height: 28 }, w))
  ] });
  return /* @__PURE__ */ t(to, { theme: o, children: /* @__PURE__ */ v(
    Q,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: _
      },
      children: [
        h && /* @__PURE__ */ v(
          Q,
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
              bgcolor: g,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(ze, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(ze, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(Q, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(ze, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !h && x > 0 && /* @__PURE__ */ t(
          Q,
          {
            sx: {
              position: "relative",
              width: x,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              Q,
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
          Q,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              p: b,
              mt: h ? `${u}px` : 0
            },
            children: [
              /* @__PURE__ */ t(ze, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(ze, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(Do, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: h ? 2 : 4 }, (R, w) => /* @__PURE__ */ t(
                ze,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                w
              )) }),
              /* @__PURE__ */ t(ze, { variant: "rounded", height: 360 })
            ]
          }
        )
      ]
    }
  ) });
}, Po = ao(cr("light")), Jt = ao(cr("dark")), Ni = (e) => e === "dark" ? Jt : Po, ki = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = vn();
  if (!o) {
    const s = Ni(e);
    return /* @__PURE__ */ v(to, { theme: s, children: [
      /* @__PURE__ */ t(Mo, {}),
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
  return /* @__PURE__ */ v(to, { theme: Po, children: [
    /* @__PURE__ */ t(Mo, {}),
    /* @__PURE__ */ t(
      Ss,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: Jt.palette.background.default,
            color: Jt.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(Q, { sx: { display: "contents", [i]: { display: "none" } }, children: /* @__PURE__ */ t(
      Oo,
      {
        themeMode: "light",
        muiTheme: Po,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(Q, { sx: { display: "none", [i]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Oo,
      {
        themeMode: "dark",
        muiTheme: Jt,
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
const oe = {
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
}, Ue = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Fi = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ue.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Ue.REFRESH_TOKEN
      ), r = localStorage.getItem(Ue.USER);
      e && !localStorage.getItem(de.ACCESS_TOKEN) && localStorage.setItem(de.ACCESS_TOKEN, e), o && !localStorage.getItem(de.REFRESH_TOKEN) && localStorage.setItem(
        de.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(de.USER) && localStorage.setItem(de.USER, r), (e || o || r) && (localStorage.removeItem(Ue.ACCESS_TOKEN), localStorage.removeItem(Ue.REFRESH_TOKEN), localStorage.removeItem(Ue.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, To = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        oe.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      oe.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      oe.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Y(
      "Failed to access storage",
      oe.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Ao = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        oe.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      oe.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      oe.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Y(
      "Failed to write to storage",
      oe.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Gn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Dt = () => {
  try {
    Fi();
    const e = To(de.ACCESS_TOKEN), o = To(de.REFRESH_TOKEN), r = To(de.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), Gn(de.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Y ? e : new Y(
      "Failed to retrieve authentication tokens",
      oe.UNKNOWN_ERROR,
      e
    );
  }
}, Wi = () => {
  try {
    const { accessToken: e, refreshToken: o } = Dt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Y(
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
      error: e instanceof Y ? e : new Y(
        "Authentication check failed",
        oe.UNKNOWN_ERROR,
        e
      )
    };
  }
}, zn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Y(
        "At least one token must be provided",
        oe.TOKEN_INVALID
      );
    return e && Ao(de.ACCESS_TOKEN, e), o && Ao(de.REFRESH_TOKEN, o), r && Ao(de.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Y ? n : new Y(
        "Failed to store tokens",
        oe.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Lt = () => {
  try {
    return [
      de.ACCESS_TOKEN,
      de.REFRESH_TOKEN,
      de.USER,
      // Also clear legacy keys for complete cleanup
      Ue.ACCESS_TOKEN,
      Ue.REFRESH_TOKEN,
      Ue.USER
    ].map((n) => Gn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Y ? e : new Y(
        "Failed to clear tokens",
        oe.LOGOUT_FAILED,
        e
      )
    };
  }
}, Bi = () => {
  try {
    const { user: e } = Dt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Y ? e : new Y(
        "Failed to retrieve user data",
        oe.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Ic = (e) => {
  if (!(e instanceof Y))
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
}, Go = (e, o = "Unknown") => {
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
}, Pi = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Wr.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, i = [];
  const s = (a, c) => {
    i.forEach(({ resolve: l, reject: h }) => {
      a ? h(a) : c && l(c);
    }), i = [];
  };
  return o.interceptors.request.use(
    (a) => {
      const { accessToken: c } = Dt();
      return c && a.headers && (a.headers.Authorization = `Bearer ${c}`), a;
    },
    (a) => Promise.reject(a)
  ), o.interceptors.response.use(
    (a) => a,
    async (a) => {
      var p;
      const c = a.config, l = (p = a.response) == null ? void 0 : p.status, h = (c == null ? void 0 : c.url) || "", m = h.includes("/auth/refresh");
      if (l !== 401 || c._retry || m)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: x } = Dt();
      if (!x) {
        const u = new Error(
          "No refresh token available for token refresh"
        );
        return Go(u, "AxiosClient - Token Refresh"), Lt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((u, g) => {
          i.push({ resolve: u, reject: g });
        }).then((u) => {
          const {
            accessToken: g,
            refreshToken: _
          } = u;
          if (c.headers && (c.headers.Authorization = `Bearer ${g}`), h.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const b = JSON.parse(
                  c.data || "{}"
                );
                b.refresh_token = _, c.data = JSON.stringify(b);
              } else
                c.data && typeof c.data == "object" ? c.data.refresh_token = _ : c.data = JSON.stringify({
                  refresh_token: _
                });
            } catch {
              c.data = JSON.stringify({
                refresh_token: _
              });
            }
          return o(c);
        }).catch((u) => Promise.reject(u));
      r = !0, n = Wr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: x
        }
      );
      try {
        const u = await n, { accessToken: g, refreshToken: _ } = u.data;
        if (zn(g, _, null), s(null, {
          accessToken: g,
          refreshToken: _
        }), c.headers && (c.headers.Authorization = `Bearer ${g}`), h.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const b = JSON.parse(
                c.data || "{}"
              );
              b.refresh_token = _, c.data = JSON.stringify(b);
            } else
              c.data && typeof c.data == "object" ? c.data.refresh_token = _ : c.data = JSON.stringify({
                refresh_token: _
              });
          } catch {
            c.data = JSON.stringify({
              refresh_token: _
            });
          }
        return o(c);
      } catch (u) {
        return Go(
          u,
          "AxiosClient - Token Refresh Failed"
        ), s(u), Lt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(u);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Gi = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Dt();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return zn(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      Go(i, "TokenValidator - Refresh Failed");
    }
  return Lt(), o ? o() : window.location.href = "/login", !1;
}, Tt = ({ size: e = 20 }) => /* @__PURE__ */ v(
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
), an = Ee(Zo), He = "#09C1AE", eo = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${He} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), zi = (e) => ({
  ...eo(J, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${J - 2}px`,
    zIndex: 1,
    background: `${Mt(He, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), cn = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: s = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = ir(), l = d.useContext(fo), h = We().palette.mode === "dark", m = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", x = {
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
        borderColor: r ? He : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${He}`,
          outlineOffset: 2
        },
        ...n && eo(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Tt, { size: 20 }),
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
        i && /* @__PURE__ */ t(Mi, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && l ? /* @__PURE__ */ t(we, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    Se,
    {
      ...x,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: `${J}px`,
        ...Mt(He, h, "clear"),
        ...r && {
          boxShadow: `${Mt(He, h, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${an.duration}ms ${an.easing}, box-shadow 200ms ease`,
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
        ...n && zi(h)
      },
      children: /* @__PURE__ */ t(Tt, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(we, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    Se,
    {
      ...x,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? He : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && eo(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Tt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(we, { title: m, placement: "left", children: /* @__PURE__ */ t(
    Se,
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
        outline: r ? `2px solid ${He}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${He}` },
        ...n && eo(16, "background.paper")
      },
      children: /* @__PURE__ */ t(O, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Tt, { size: 26 }) })
    }
  ) });
}, Zt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(ws, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ v(Es, { children: [
  /* @__PURE__ */ t(Rs, { fontSize: "small" }),
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
    En,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, It = 24, Hi = 720, Ui = 1140, Xi = 1250, Ki = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: i,
  sidebarWidthPx: s,
  bottomOffsetPx: a,
  fullScreen: c,
  fullScreenBottom: l = "0px",
  onClose: h
}) => {
  d.useEffect(() => {
    if (!e || !h)
      return;
    const g = (_) => {
      _.key === "Escape" && h();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [e, h]);
  const m = r === "docked", x = It + a;
  let p;
  c ? p = {
    top: 0,
    left: 0,
    right: 0,
    bottom: l,
    borderRadius: 0
  } : m ? p = {
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
    height: `min(${Hi}px, calc(100vh - ${x + It}px))`,
    borderRadius: "12px"
  };
  const u = /* @__PURE__ */ t(
    jo,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? Ui : Xi,
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
  return m ? /* @__PURE__ */ t(_s, { direction: "left", in: e, mountOnEnter: !0, children: u }) : /* @__PURE__ */ t(
    Is,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: u
    }
  );
}, ji = 180, ln = 250, Vi = "#01584F", Yi = ({
  text: e,
  testId: o
}) => {
  const r = d.useRef(null), [n, i] = d.useState(!1), s = d.useCallback(() => {
    const a = r.current;
    a && i(a.scrollWidth > a.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    s();
  }, [s, e]), d.useEffect(() => {
    const a = r.current;
    if (!a)
      return;
    const c = new ResizeObserver(() => s());
    return c.observe(a), () => c.disconnect();
  }, [s]), /* @__PURE__ */ t(
    we,
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
}, Hn = (e, o, r, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : o, a = e ? Vi : o;
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
}, Un = ({ link: e }) => /* @__PURE__ */ v(Ae, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Yi,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Xn = (e, o, r) => r ? e : /* @__PURE__ */ t(we, { title: o, placement: "right", arrow: !0, children: e }), qi = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: a
}) => {
  const c = We(), [l, h] = d.useState(null), [m, x] = d.useState(!1), p = d.useRef(
    null
  ), u = d.useRef(null), g = d.useRef(null), _ = d.useRef(!1), b = d.useRef(!1), y = d.useId(), R = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, w = () => {
    R(), p.current = setTimeout(() => {
      x(!1), p.current = null;
    }, ji);
  }, E = () => {
    R(), x(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const $ = (M) => {
      var G;
      M.key === "Escape" && (x(!1), (G = g.current) == null || G.focus());
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [m]), d.useEffect(() => {
    if (!m || !b.current)
      return;
    const $ = globalThis.requestAnimationFrame(() => {
      var G;
      const M = (G = u.current) == null ? void 0 : G.querySelector(
        '[role="menuitem"]'
      );
      M == null || M.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame($);
  }, [m]);
  const I = qe(e, o), { activeBg: S, sx: C } = Hn(
    i,
    n,
    I,
    a
  ), V = /* @__PURE__ */ t(
    Se,
    {
      ref: g,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        _.current || E();
      },
      onBlur: ($) => {
        var G;
        const M = $.relatedTarget;
        M && ((G = u.current) != null && G.contains(M)) || w();
      },
      onKeyDown: ($) => {
        $.key === "ArrowDown" && ($.preventDefault(), b.current = !0, E());
      },
      onClick: ($) => {
        $.preventDefault(), $.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? y : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: C,
      children: a ? /* @__PURE__ */ t(Un, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ v(
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
            ref: h,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              _.current = !0, E();
            },
            onMouseLeave: () => {
              _.current = !1, w();
            },
            children: Xn(V, e.text, a)
          }
        ),
        /* @__PURE__ */ t(
          Ko,
          {
            open: m && !!l,
            anchorEl: l,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: ($) => $.zIndex.modal },
            children: /* @__PURE__ */ t(
              jo,
              {
                ref: u,
                elevation: 0,
                onMouseEnter: R,
                onMouseLeave: w,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: s,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: c.shadows[8],
                  maxWidth: ln,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Vo,
                  {
                    id: y,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: ln
                    },
                    children: K(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function K($, M, G) {
    return $.flatMap((D) => {
      const z = pt(M, D);
      return mt(D) ? [
        /* @__PURE__ */ t(
          Cs,
          {
            disableSticky: !0,
            title: D.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + G * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: D.text
          },
          z
        ),
        ...K(D.subitems, z, G + 1)
      ] : [
        /* @__PURE__ */ v(
          Je,
          {
            role: "menuitem",
            title: D.text,
            disabled: !D.path,
            selected: ke(D, o),
            onClick: (ee) => {
              ee.preventDefault(), D.path && (r == null || r(D.path)), x(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + G * 1.5,
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
                bgcolor: S,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: S
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              D.icon ? /* @__PURE__ */ t(ve, { children: D.icon }) : null,
              /* @__PURE__ */ t(
                Fe,
                {
                  primary: D.text,
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
}, Zi = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const a = !!(e.path && o === e.path), { sx: c } = Hn(
    i,
    n,
    a,
    s
  );
  return Xn(
    /* @__PURE__ */ t(
      Se,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: c,
        children: s ? /* @__PURE__ */ t(Un, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, Qi = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(et, { sx: { width: "60%", borderColor: "divider" } })
  }
), Ji = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(et, { sx: { width: "60%", borderColor: "divider" } })
  }
), dn = (e, o) => e.map((r, n) => /* @__PURE__ */ v(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(Qi, {}) : null
] }, n)), ea = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: a = !1
}) => {
  const c = (h, m) => mt(h) ? /* @__PURE__ */ t(
    qi,
    {
      link: h,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      surfaceBackgroundColor: s,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ t(
    Zi,
    {
      link: h,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      railShowTitles: a
    }
  ), l = a ? 1.25 : 1;
  return /* @__PURE__ */ v(
    Ae,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: l
      },
      children: [
        dn(e, (h) => c(h, !1)),
        o.length > 0 ? /* @__PURE__ */ v(Te, { children: [
          /* @__PURE__ */ t(Ji, {}),
          /* @__PURE__ */ t(O, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Ae, { gap: l, alignItems: "center", children: dn(
            o,
            (h) => c(h, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, ta = (e) => e ? Tn(e) : "USER", oa = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), un = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, zo = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, dr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Ts,
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
    children: oa(e)
  }
), Kn = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ v(Te, { children: [
  /* @__PURE__ */ t(dr, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ v(
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
          ce,
          {
            variant: "body2",
            sx: { ...un, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ce,
          {
            variant: "caption",
            sx: { ...un, opacity: 0.8, color: "inherit" },
            children: ta(o)
          }
        )
      ]
    }
  )
] }), fn = {
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
}, jn = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: i,
  showNotifications: s,
  notificationCount: a,
  onNotificationsClick: c,
  userName: l = "User",
  userRole: h,
  userAvatar: m,
  menuItems: x = [],
  showSettings: p,
  onSettingsClick: u,
  showThemeToggler: g,
  theme: _,
  onThemeToggle: b,
  onLogout: y
}) => {
  const R = (w) => () => {
    o(), w == null || w();
  };
  return /* @__PURE__ */ v(
    As,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: fn[r].anchor,
      transformOrigin: fn[r].transform,
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
          Ae,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              Kn,
              {
                name: l,
                role: h,
                avatar: m,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(et, {}),
        s && /* @__PURE__ */ v(Je, { onClick: R(c), children: [
          /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(_n, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Fe, { children: "Notifications" }),
          /* @__PURE__ */ t(zo, { count: a })
        ] }),
        x.map((w) => /* @__PURE__ */ v(Je, { onClick: R(w.onClick), children: [
          w.icon && /* @__PURE__ */ t(ve, { children: w.icon }),
          /* @__PURE__ */ t(Fe, { inset: !w.icon, children: w.label }),
          /* @__PURE__ */ t(zo, { count: w.badge })
        ] }, w.key)),
        p && /* @__PURE__ */ v(Je, { onClick: R(u), children: [
          /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(Os, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Fe, { children: "Settings" })
        ] }),
        g && [
          /* @__PURE__ */ t(et, {}, "theme-divider"),
          /* @__PURE__ */ v(O, { sx: { px: 1.5, py: 1 }, children: [
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
              $s,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: _,
                onChange: (w, E) => E && E !== _ && (b == null ? void 0 : b()),
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
                  /* @__PURE__ */ t(Br, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Br, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(et, {}),
        /* @__PURE__ */ v(
          Je,
          {
            onClick: R(y),
            sx: {
              color: _ === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ve, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(In, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Fe, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Vn = 64, ra = 2, _t = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: i,
  activeColor: s,
  activeBackground: a,
  ariaLabel: c,
  haspopup: l,
  isPage: h = !1,
  testId: m
}) => /* @__PURE__ */ v(
  ot,
  {
    onClick: r,
    "aria-label": c ?? e,
    "aria-haspopup": l,
    "aria-expanded": l ? n : void 0,
    "aria-current": h && n ? "page" : void 0,
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
), na = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: s,
  assistantActive: a,
  showProfile: c,
  background: l,
  color: h,
  activeColor: m,
  activeBackground: x,
  pinnedLinks: p = [],
  activePath: u,
  onLinkClick: g,
  ..._
}) => {
  const b = p.filter((C) => C.path).slice(0, ra), [y, R] = d.useState(
    null
  ), { userName: w = "User", userAvatar: E, avatarColor: I } = _, S = { color: h, activeColor: m, activeBackground: x };
  return /* @__PURE__ */ v(
    jo,
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
        height: `calc(${Vn}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: l,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          _t,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Rn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...S
          }
        ),
        b.map((C) => /* @__PURE__ */ t(
          _t,
          {
            label: C.text,
            icon: C.icon,
            onClick: () => g == null ? void 0 : g(C.path),
            active: qe(C, u),
            isPage: !0,
            testId: `mobile-nav-link-${C.text}`,
            ...S
          },
          C.path
        )),
        i && /* @__PURE__ */ t(
          _t,
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
                children: /* @__PURE__ */ t(Tt, { size: 18 })
              }
            ),
            onClick: s,
            active: a,
            testId: "mobile-nav-nexa",
            ...S
          }
        ),
        r && /* @__PURE__ */ t(
          _t,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Yo, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...S
          }
        ),
        c && /* @__PURE__ */ v(Te, { children: [
          /* @__PURE__ */ t(
            _t,
            {
              label: "Account",
              ariaLabel: `Account menu for ${w}`,
              icon: /* @__PURE__ */ t(
                dr,
                {
                  name: w,
                  avatar: E,
                  color: I,
                  size: 26
                }
              ),
              onClick: (C) => R(C.currentTarget),
              active: !!y,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...S
            }
          ),
          /* @__PURE__ */ t(
            jn,
            {
              anchorEl: y,
              onClose: () => R(null),
              placement: "above-end",
              width: 280,
              ..._
            }
          )
        ] })
      ]
    }
  );
}, sa = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Ms,
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
      Ae,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(O, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            En,
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
), ia = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: i,
  brandMenuOpen: s,
  background: a,
  color: c,
  brandColor: l = c,
  endContent: h
}) => /* @__PURE__ */ t(
  Ds,
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
    children: /* @__PURE__ */ v(Ls, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        Se,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: c },
          children: /* @__PURE__ */ t(Rn, {})
        }
      ),
      /* @__PURE__ */ t(
        oo,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: i,
          menuOpen: s,
          color: l,
          testId: "mobile-brand"
        }
      ),
      h ? /* @__PURE__ */ t(O, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: h }) : null
    ] })
  }
), ur = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const a = ir(), c = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    we,
    {
      title: c,
      placement: i,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ t(
        Se,
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
            Cn,
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
              children: /* @__PURE__ */ t(_n, {})
            }
          )
        }
      )
    }
  );
}, Yn = {
  "&:focus, &:focus-visible": { outline: "none" }
}, aa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, hn = Ee(co), pn = Ee(lo), mn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', ca = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = We().palette.mode === "dark", a = gt(), c = d.useRef(null), l = d.useRef(null), h = (p) => {
    var u;
    p !== e && (o == null || o()), (u = (p === "light" ? c : l).current) == null || u.focus();
  }, m = (p) => {
    if (!(p.key === "Tab" || p.key === "Escape"))
      switch (p.stopPropagation(), p.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          p.preventDefault(), h(e === "light" ? "dark" : "light");
          break;
        case "Home":
          p.preventDefault(), h("light");
          break;
        case "End":
          p.preventDefault(), h("dark");
          break;
      }
  }, x = (p, u, g, _) => {
    const b = e === p;
    return /* @__PURE__ */ t(
      ot,
      {
        ref: _,
        role: "radio",
        "aria-checked": b,
        "aria-label": u,
        tabIndex: b ? 0 : -1,
        onClick: () => h(p),
        "data-testid": `theme-segment-${p}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: i ? `${J}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? s ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...i && b ? sr(s, a) : {},
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
          ...Yn
        },
        children: /* @__PURE__ */ t(g, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ v(
    Ae,
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
        x("light", "Light", ks, c),
        x("dark", "Dark", Ns, l)
      ]
    }
  );
}, la = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: i,
  userName: s,
  userEmail: a,
  roleLabel: c,
  accentColor: l,
  tint: h,
  showThemeToggler: m,
  theme: x,
  onThemeToggle: p,
  onProfileClick: u,
  onLinkClick: g,
  menuItems: _ = [],
  onLogout: b,
  glass: y = !1
}) => {
  const R = We(), w = R.palette.mode === "dark", E = d.useRef(null), I = tr(R.palette.background.paper), S = ar({
    enabled: y,
    isDark: w,
    selector: mn,
    radius: J
  }), [C, V] = d.useState(null);
  d.useEffect(() => {
    if (!C || typeof ResizeObserver > "u")
      return;
    const D = new ResizeObserver(() => {
      var z;
      (z = E.current) == null || z.updatePosition();
    });
    return D.observe(C), () => D.disconnect();
  }, [C]);
  const K = (D) => {
    r(), D == null || D();
  }, $ = (D) => {
    r(), D.onClick ? D.onClick() : D.path && (g == null || g(D.path));
  }, M = {
    borderRadius: y ? `${J}px` : "8px",
    py: 1,
    gap: 0.5
  }, G = /* @__PURE__ */ v(Ae, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ v(O, { sx: { minWidth: 0, flex: 1 }, children: [
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
      u ? /* @__PURE__ */ t(
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
            color: w ? "#ffffff" : l,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    qo,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: E,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...y ? {
        slots: { transition: Xo },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: V,
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
        O,
        {
          "data-testid": "account-menu",
          "data-glass": y ? "true" : void 0,
          sx: y ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${J}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${mn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...aa, width: n, minWidth: n },
          children: [
            y ? /* @__PURE__ */ t(
              xt,
              {
                isDark: w,
                solid: I,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${rr} ${hn.duration}ms ${hn.easing} both`,
                  [_e]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ v(
              O,
              {
                ...S.containerProps,
                sx: y ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${nr} ${pn.duration}ms ${pn.easing} 70ms both`,
                  [_e]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  S.lens,
                  u ? /* @__PURE__ */ t(
                    ot,
                    {
                      onClick: () => K(u),
                      "data-testid": "account-menu-header",
                      sx: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        transition: "background-color 150ms ease",
                        "& [data-hint]": { display: "none" },
                        "&:hover, &.Mui-focusVisible": {
                          bgcolor: h,
                          "& [data-hint]": { display: "block" },
                          "& [data-role]": { display: "none" }
                        },
                        ...Yn
                      },
                      children: G
                    }
                  ) : /* @__PURE__ */ t(O, { "data-testid": "account-menu-header", children: G }),
                  /* @__PURE__ */ t(et, {}),
                  m ? /* @__PURE__ */ v(
                    O,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...M,
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
                        /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(Fs, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ce, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          ca,
                          {
                            glass: y,
                            mode: x,
                            onToggle: p,
                            accentColor: l,
                            tint: h
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ v(
                    Vo,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        _.map((D) => /* @__PURE__ */ v(
                          Je,
                          {
                            onClick: () => $(D),
                            "data-testid": `menu-item-${D.key}`,
                            sx: M,
                            children: [
                              /* @__PURE__ */ t(ve, { children: D.icon }),
                              /* @__PURE__ */ t(ce, { sx: { flex: 1 }, children: D.label }),
                              /* @__PURE__ */ t(zo, { count: D.badge })
                            ]
                          },
                          D.key
                        )),
                        b ? /* @__PURE__ */ t(et, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ v(
                          Je,
                          {
                            onClick: () => K(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...M,
                              color: w ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(ve, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(In, { fontSize: "small" }) }),
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
}, da = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ua = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: i,
  title: s,
  onBrandClick: a,
  brandMenuOpen: c,
  brandColor: l,
  headerBackgroundColor: h,
  headerForegroundColor: m,
  activeAccentColor: x = "#01584f",
  groupAccentColor: p,
  activeForegroundColor: u,
  foregroundColor: g,
  surfaceBackgroundColor: _,
  flyoutSurfaceColor: b,
  collapsed: y,
  expandedWidth: R,
  collapsedWidth: w,
  topContent: E,
  submenuMode: I,
  color: S,
  hoverColor: C,
  avatarColor: V,
  showProfile: K = !0,
  userName: $ = "User",
  userEmail: M,
  userRole: G,
  userAvatar: D,
  showNotifications: z = !0,
  notificationCount: ee = 0,
  onNotificationsClick: ge,
  whatsNewCount: W = 0,
  onProfileClick: B,
  menuItems: H,
  onLogout: te,
  theme: ae = "light",
  showThemeToggler: T = !0,
  onThemeToggle: P
}) => {
  const q = We(), X = q.palette.mode === "dark", L = _ ?? (X ? q.palette.background.paper : "#ffffff"), Z = S ?? g ?? (X ? q.palette.text.primary : x), ue = C ?? p ?? ro(x), Ce = V ?? x, Ke = d.useRef(null), [xe, he] = d.useState(!1), fe = G ? Tn(G) : void 0, j = (lt) => /* @__PURE__ */ t(
    dr,
    {
      name: $,
      avatar: D,
      color: Ce,
      size: lt
    }
  ), pe = ee + W, be = y && I === "flyout", $e = z ? /* @__PURE__ */ t(
    ur,
    {
      count: pe,
      onClick: ge,
      color: Z,
      hoverColor: ue,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Me = K ? /* @__PURE__ */ v(
    ot,
    {
      ref: Ke,
      onClick: () => he(!0),
      "aria-haspopup": "menu",
      "aria-expanded": xe,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: y ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: xe ? ue : "transparent",
        "&:hover": { bgcolor: ue },
        ...da
      },
      children: [
        y && !be && z ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Cn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !pe,
              children: j(36)
            }
          )
        ) : j(y ? 36 : 40),
        y ? null : /* @__PURE__ */ v(O, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ce,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Z, lineHeight: 1.3 },
              children: $
            }
          ),
          fe ? /* @__PURE__ */ t(
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
              children: fe
            }
          ) : null
        ] })
      ]
    }
  ) : null, De = !!$e && (!y || be || !Me);
  return /* @__PURE__ */ v(
    O,
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
          Fo,
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
            brandColor: l,
            headerBackgroundColor: h,
            headerForegroundColor: m,
            activeAccentColor: x,
            groupAccentColor: p,
            activeForegroundColor: u,
            foregroundColor: g,
            surfaceBackgroundColor: L,
            flyoutSurfaceColor: b,
            collapsed: y,
            expandedWidth: R,
            collapsedWidth: w,
            topContent: E,
            footer: Me || De ? /* @__PURE__ */ v(
              Ae,
              {
                direction: be ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  be && De ? $e : null,
                  Me,
                  !be && De ? $e : null
                ]
              }
            ) : void 0,
            submenuMode: I
          }
        ),
        K ? /* @__PURE__ */ t(
          la,
          {
            open: xe,
            anchorEl: Ke.current,
            onClose: () => he(!1),
            width: Math.max(R - 16, 240),
            renderAvatar: j,
            userName: $,
            userEmail: M,
            roleLabel: fe,
            accentColor: x,
            tint: ue,
            showThemeToggler: T,
            theme: ae,
            onThemeToggle: P,
            onProfileClick: B,
            onLinkClick: n,
            menuItems: H,
            onLogout: te,
            glass: I === "flyout"
          }
        ) : null
      ]
    }
  );
}, gn = Ee(co), xn = Ee(lo), bn = 260, fa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, ha = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: a = !1
}) => {
  const c = We(), l = c.palette.mode === "dark", h = !!e, m = tr(c.palette.background.paper), x = ar({
    enabled: a,
    isDark: l,
    selector: ".MuiMenuItem-root",
    radius: J
  }), p = /* @__PURE__ */ t(
    Vo,
    {
      autoFocusItem: h,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((u) => {
        const g = u.key === n, _ = u.accentColor ?? s;
        return /* @__PURE__ */ v(
          Je,
          {
            selected: g,
            onClick: () => i(u),
            "data-testid": `platform-item-${u.key}`,
            sx: {
              borderRadius: a ? `${J}px` : "8px",
              py: 1,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...a && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(ve, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                O,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: _,
                    boxShadow: a ? `0 0 0 3px ${l ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Fe,
                {
                  primary: u.name,
                  secondary: u.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              g ? /* @__PURE__ */ t(
                Ws,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: _ }
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
    qo,
    {
      open: h,
      anchorEl: e,
      onClose: o,
      onClick: (u) => u.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: Xo },
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
            minWidth: bn,
            borderRadius: `${J}px`
          } : { ...fa, minWidth: bn },
          children: a ? /* @__PURE__ */ v(Te, { children: [
            /* @__PURE__ */ t(
              xt,
              {
                isDark: l,
                solid: m,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${rr} ${gn.duration}ms ${gn.easing} both`,
                  [_e]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ v(
              O,
              {
                ...x.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${nr} ${xn.duration}ms ${xn.easing} 70ms both`,
                  [_e]: { animation: "none" }
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
}, pa = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), i = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ v(
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
          ha,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, ma = ({
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
    notificationCount: l,
    onNotificationsClick: h,
    userName: m = "User",
    userRole: x,
    userAvatar: p
  } = s, u = d.useRef(null), [g, _] = d.useState(
    null
  ), b = !!g, y = d.useRef(e);
  if (d.useEffect(() => {
    e && !y.current && _(null), y.current = e;
  }, [e]), !c && !n)
    return null;
  const R = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ v(Te, { children: [
    /* @__PURE__ */ v(
      Ae,
      {
        ref: u,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            we,
            {
              title: e ? m : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                ot,
                {
                  onClick: () => _(u.current),
                  "aria-label": `Account menu for ${m}`,
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
                    ...R
                  },
                  children: /* @__PURE__ */ t(
                    Kn,
                    {
                      name: m,
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
            ur,
            {
              count: l + i,
              onClick: h,
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
      jn,
      {
        anchorEl: g,
        onClose: () => _(null),
        placement: e ? "beside" : "above",
        width: e || (w = u.current) == null ? void 0 : w.clientWidth,
        ...s
      }
    )
  ] });
}, ga = 120, xa = 300, yn = Ee(co), Sn = Ee(lo), ba = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, ya = 'input, textarea, [contenteditable="true"]', Ho = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(ya)) == null || o.focus();
}, Sa = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: s,
  hoverColor: a
}) => {
  const c = ir(), l = d.useContext(fo), h = d.useRef(null), [m, x] = d.useState(null);
  return d.useEffect(() => {
    o === "full" && n && (Ho(h.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    O,
    {
      ref: h,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && l ? /* @__PURE__ */ t(
    va,
    {
      search: e,
      color: s,
      railTooltip: c
    }
  ) : /* @__PURE__ */ v(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(we, { title: "Search", placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
          Se,
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
            children: /* @__PURE__ */ t(Yo, {})
          }
        ) }),
        /* @__PURE__ */ t(
          qo,
          {
            open: !!m,
            anchorEl: m,
            onClose: () => x(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => Ho(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, va = ({ search: e, color: o, railTooltip: r }) => {
  const n = We().palette.mode === "dark";
  Vs(n, No(o, n ? 0.3 : 0.35));
  const i = `rgb(${gt()})`, s = tr(n ? "#1e2430" : "#ffffff"), a = {
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
  }, c = d.useRef(null), l = d.useRef(null), [h, m] = d.useState(!1), x = d.useRef(!1), p = d.useRef(void 0), u = d.useRef(void 0), g = () => {
    clearTimeout(p.current), clearTimeout(u.current);
  }, _ = d.useCallback(() => {
    g(), x.current = !1, m(!1);
  }, []), b = () => {
    clearTimeout(u.current), h || (clearTimeout(p.current), p.current = setTimeout(
      () => m(!0),
      ga
    ));
  }, y = () => {
    clearTimeout(p.current), clearTimeout(u.current), u.current = setTimeout(() => {
      !x.current && !ba(l.current) && m(!1);
    }, xa);
  };
  return d.useEffect(() => g, []), d.useEffect(() => {
    if (!h)
      return;
    const R = setTimeout(() => Ho(l.current)), w = (I) => {
      var C, V;
      const S = I.target;
      !((C = l.current) != null && C.contains(S)) && !((V = c.current) != null && V.contains(S)) && _();
    }, E = (I) => {
      var S;
      I.key === "Escape" && (_(), (S = c.current) == null || S.focus());
    };
    return document.addEventListener("pointerdown", w), document.addEventListener("keydown", E), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", w), document.removeEventListener("keydown", E);
    };
  }, [h, _]), /* @__PURE__ */ v(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          we,
          {
            title: h ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              Se,
              {
                ref: c,
                "aria-label": "Search",
                "aria-expanded": h,
                onMouseEnter: b,
                onMouseLeave: y,
                onClick: () => {
                  g(), x.current = !0, m(!0);
                },
                sx: {
                  width: 44,
                  height: 44,
                  color: o,
                  borderRadius: `${J}px`
                },
                children: /* @__PURE__ */ t(Yo, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Ko,
          {
            open: h,
            anchorEl: c.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ v(
              O,
              {
                ref: l,
                "data-testid": "sidebar-search-card",
                onMouseEnter: b,
                onMouseLeave: y,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: `${J}px`
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
                        animation: `${rr} ${yn.duration}ms ${yn.easing} both`,
                        [_e]: { animation: "none" }
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
                        ...a,
                        animation: `${nr} ${Sn.duration}ms ${Sn.easing} 60ms both`,
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
}, wa = 100, Ea = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = d.useState(!1), [s, a] = d.useState(!1), c = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const h = (x) => {
      r.current.has(x) || (c(), i(!1));
    }, m = () => {
      c(), i(!1);
    };
    return document.addEventListener("mouseover", h), document.documentElement.addEventListener("mouseleave", m), () => {
      c(), document.removeEventListener("mouseover", h), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), d.useEffect(() => {
    if (!s)
      return;
    const h = (m) => {
      var x;
      (x = e.current) != null && x.contains(m.target) || a(!1);
    };
    return document.addEventListener("pointerdown", h), () => document.removeEventListener("pointerdown", h);
  }, [s]), {
    expanded: n || s,
    pin: () => a(!0),
    rootProps: {
      ref: e,
      onMouseOver: (h) => {
        r.current.add(h.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, i(!0);
        }, wa));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (h) => {
        const m = h.relatedTarget;
        m && !h.currentTarget.contains(m) && a(!1);
      },
      onKeyDown: (h) => {
        h.key === "Escape" && a(!1);
      }
    }
  };
}, Ra = 300, $o = 288, Ia = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", _a = 68, Ca = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), _c = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: a = "rail",
  sidebarSubmenu: c = "expand",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: h,
  logo: m,
  onBrandClick: x,
  searchComponent: p,
  brandColor: u,
  contentPadding: g = kn,
  userMenuItems: _,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: R,
  activeSidebarForegroundColor: w,
  enableRefreshToken: E = !1,
  holdSessionSkeleton: I = !1,
  activePath: S,
  onLinkClick: C,
  showProfile: V = !0,
  userName: K,
  userRole: $,
  userAvatar: M,
  userEmail: G,
  onLogout: D,
  showSettings: z = !0,
  onSettingsClick: ee,
  onProfileClick: ge,
  showNotifications: W = !0,
  notificationCount: B = 0,
  NotificationSidebarContent: H,
  whatsNewCount: te = 0,
  onNotificationsClick: ae,
  platforms: T,
  currentPlatformKey: P,
  onPlatformSelect: q,
  onVerify: X,
  alertProps: L,
  style: Z,
  sidebarStyles: ue,
  contentStyles: Ce,
  accentColor: Ke,
  sidebarAccentColor: xe,
  sidebarForegroundColor: he,
  contentBackgroundColor: fe,
  theme: j = "light",
  darkModeSelector: pe,
  showThemeToggler: be = !1,
  onThemeToggle: $e,
  GlobalChatSidebar: Me,
  useChatSidebar: De,
  chatPanelMode: kt = "docked",
  chatPanelPosition: lt = "right",
  chatPanelWidth: Ft = 420,
  onChatClose: ho,
  showAssistant: rt = !1,
  assistantPlacement: bt = "sidebar",
  assistantShortcut: Wt = "j",
  onAssistantClick: je,
  assistantActive: dt = !1,
  assistantBusy: Bt = !1,
  customNavbar: Pt,
  customNavbarProps: po,
  redirectToLogin: Ve,
  apiBaseUrl: f
}) => {
  const N = vn(), k = wn(N.breakpoints.down("md")), F = Nr(
    () => ao(cr(j)),
    [j]
  ), U = j === "dark", re = Ke ?? "#01584f", ne = xe ?? re, se = Pn(
    typeof fe == "object" ? fe[j] : fe,
    U
  ), le = a === "collapsible", yt = a === "panel", qn = yt && i && !k, nt = a === "rail-labeled", Zn = le || nt, Le = Bn(
    b,
    U
  ), mo = y ?? Le, Be = he ?? (U ? "#ffffff" : ne), St = R ?? ro(Be), vt = y ? Lo(mo) : Be, fr = (A) => /* @__PURE__ */ t(
    Q,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: A,
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
  ), Gt = u ?? vt, [hr, go] = it(
    null
  ), xo = ((T == null ? void 0 : T.length) ?? 0) > 1, Qn = kr(() => go(null), []), Jn = (A) => {
    go(null), q ? q(A) : A.key !== P && A.url && window.location.assign(A.url);
  }, pr = (A) => xo ? /* @__PURE__ */ t(
    pa,
    {
      anchorEl: hr,
      onClose: Qn,
      platforms: T,
      currentKey: P,
      onSelect: Jn,
      accentColor: re,
      glass: c === "flyout" && (le || yt) && !k,
      children: A
    }
  ) : A, zt = xo ? (A) => go(A.currentTarget) : x, Ht = xo ? !!hr : void 0, bo = pr(
    m ?? fr(Gt)
  ), es = pr(
    m ?? fr(u ?? Be)
  ), yo = Ea(), Pe = lr(c, a), Ne = Pe || !yo.expanded, mr = Pe ? "popover" : "expand", gr = Pe ? Bo : Ot, xr = Pe ? "transparent" : Le, br = Pe && !y ? "transparent" : mo, [ts, yr] = it(!1), os = kr(() => yr(!1), []), Ge = Wn({
    showSidebar: i,
    isMobile: k,
    sidebarVariant: a,
    sidebarSubmenu: c
  }), [Sr, st] = it(!1), [vr, So] = it(!1), ye = k && l === "bottom-bar", wr = `calc(${Vn}px + env(safe-area-inset-bottom, 0px))`, [vo, Er] = it({ open: !1, tab: "notifications" }), Rr = () => Er((A) => ({ ...A, open: !1 })), rs = W && !!H, [ns, ss] = it(!0), [is, as] = it(!1), wo = De == null ? void 0 : De(), Ir = (wo == null ? void 0 : wo.isOpen) ?? !1, _r = kt === "floating" ? "floating" : "docked", cs = _r === "docked" && Ir && Me && !k ? Ft : 0, Ut = Co(X), Cr = Co(!1), Or = Nr(
    () => Pi(f),
    [f]
  );
  jt(() => {
    Ut.current = X;
  }, [X]);
  const Eo = Co(je);
  Eo.current = je;
  const wt = rt && Wt ? Wt.toLowerCase() : null;
  jt(() => {
    if (!wt)
      return;
    const A = (ie) => {
      (ie.metaKey || ie.ctrlKey) && !ie.altKey && !ie.shiftKey && ie.key.toLowerCase() === wt && Eo.current && (ie.preventDefault(), Eo.current());
    };
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [wt]);
  const Tr = (A) => {
    const ie = D(A);
    ie instanceof Promise && ie.catch((Ye) => {
      console.error("Error in logout handler:", Ye);
    });
  };
  if (jt(() => {
    (() => {
      var ie;
      try {
        const { isAuthenticated: Ye } = Wi();
        if (!Ye) {
          console.log("No session found, redirecting to login"), Lt(), Ve();
          return;
        }
        if (!Cr.current) {
          const { user: Rt, error: _o } = Bi();
          if (Rt && !_o) {
            const gs = {
              name: Rt.name || "",
              email: Rt.email || "",
              profilePicture: Rt.profilePicture || "",
              role: Rt.role || ""
            };
            Cr.current = !0, (ie = Ut.current) == null || ie.call(Ut, gs);
          } else
            _o && console.error("Error getting user data:", _o);
        }
        as(!0);
      } catch (Ye) {
        console.error("Error checking session:", Ye), Lt(), Ve();
      } finally {
        ss(!1);
      }
    })();
  }, [Ve]), jt(() => {
    E && Gi(Or, Ve);
  }, [E, Or]), ns || I)
    return /* @__PURE__ */ t(
      ki,
      {
        theme: j,
        darkModeSelector: pe,
        sidebarVariant: a,
        sidebarSubmenu: c,
        showSidebar: i,
        contentPadding: g,
        sidebarBackgroundColor: b,
        contentBackgroundColor: fe
      }
    );
  if (!is)
    return null;
  const Et = p ?? (Pt ? /* @__PURE__ */ t(Pt, { ...po }) : null), ls = (A) => {
    st(!1), So(!1), Er({ open: !0, tab: A });
  }, Ro = H && (() => ls("notifications")), ds = B + te, Ar = {
    avatarColor: ne,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: _ == null ? void 0 : _.map(
      (A) => A.onClick || !A.path ? A : { ...A, onClick: () => C == null ? void 0 : C(A.path) }
    ),
    showNotifications: W,
    notificationCount: B,
    whatsNewCount: te,
    onNotificationsClick: Ro,
    showProfile: V,
    userName: K,
    userRole: $,
    userAvatar: M,
    showSettings: z,
    onSettingsClick: ee,
    showThemeToggler: be,
    theme: j,
    onThemeToggle: $e,
    onLogout: Tr
  }, Io = (A) => /* @__PURE__ */ t(
    ma,
    {
      ...Ar,
      compact: A,
      color: Be,
      hoverColor: St
    }
  ), $r = wt ? [Ca() ? "⌘" : "Ctrl", wt.toUpperCase()] : void 0, us = (A) => rt && bt === "sidebar" ? /* @__PURE__ */ t(
    cn,
    {
      variant: A ? "sidebar-icon" : "sidebar",
      onClick: je,
      active: dt,
      busy: Bt,
      shortcutKeys: $r,
      accentColor: Be
    }
  ) : null, fs = (A) => Et ? /* @__PURE__ */ t(
    Sa,
    {
      search: Et,
      mode: A,
      onExpand: () => {
        yo.pin(), yr(!0);
      },
      autoFocus: ts,
      onAutoFocused: os,
      color: Be,
      hoverColor: St
    }
  ) : null, Xt = (A) => {
    const ie = us(A !== "full"), Ye = fs(A);
    return ie || Ye ? /* @__PURE__ */ v(
      Do,
      {
        spacing: 1.5,
        sx: { alignItems: A === "full" ? "stretch" : "center" },
        children: [
          ie,
          Ye
        ]
      }
    ) : void 0;
  }, Mr = () => /* @__PURE__ */ t(
    Fo,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: S,
      onLinkClick: C,
      showHeaderBar: le,
      logo: bo,
      title: n,
      onBrandClick: zt,
      brandMenuOpen: Ht,
      brandColor: Gt,
      headerBackgroundColor: le ? br : void 0,
      headerForegroundColor: le ? vt : void 0,
      activeAccentColor: ne,
      groupAccentColor: R,
      activeForegroundColor: w,
      foregroundColor: he,
      surfaceBackgroundColor: xr,
      flyoutSurfaceColor: Le,
      collapsed: nt || Ne,
      showLabels: nt,
      expandedWidth: $o,
      collapsedWidth: nt ? Ln : gr,
      topContent: Xt(
        nt ? "popover" : Ne ? mr : "full"
      ),
      footer: Io(nt || Ne),
      submenuMode: Pe ? "flyout" : "inline"
    }
  ), Dr = (A) => Pe ? hs(A) : ps(A), hs = (A) => /* @__PURE__ */ t(
    Q,
    {
      component: "aside",
      sx: {
        width: Ge,
        minWidth: Ge,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: se
      },
      children: /* @__PURE__ */ v(
        Q,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: $t,
            bottom: $t,
            left: $t,
            width: Bo,
            borderRadius: `${Nn}px`,
            display: "flex",
            flexDirection: "column",
            ...ue
          },
          children: [
            /* @__PURE__ */ t(
              xt,
              {
                isDark: U,
                solid: Le,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              Q,
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
                children: A
              }
            )
          ]
        }
      )
    }
  ), ps = (A) => /* @__PURE__ */ t(
    Q,
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
        Q,
        {
          ...Pe ? {} : yo.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ne ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Ne ? Ot : $o,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Le,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Ne ? "none" : `4px 0 24px rgba(0, 0, 0, ${U ? 0.5 : 0.12})`,
            transition: Ia,
            ...ue
          },
          children: A
        }
      )
    }
  ), ms = Fn(
    g,
    N
  );
  return /* @__PURE__ */ t(to, { theme: F, children: /* @__PURE__ */ t(An.Provider, { value: ne, children: /* @__PURE__ */ t(Nt.Provider, { value: Le, children: /* @__PURE__ */ v(
    Q,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Z
      },
      children: [
        /* @__PURE__ */ t(Mo, {}),
        k && /* @__PURE__ */ t(
          ia,
          {
            height: Qt,
            onMenuClick: i && !ye ? () => st(!0) : void 0,
            appName: n,
            logo: bo,
            onBrandClick: zt,
            brandMenuOpen: Ht,
            background: mo,
            color: vt,
            brandColor: Gt,
            endContent: W ? /* @__PURE__ */ t(
              ur,
              {
                count: ds,
                onClick: Ro,
                color: vt,
                hoverColor: St,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !k && nt && /* @__PURE__ */ t(
          Q,
          {
            component: "aside",
            sx: {
              width: Ge,
              minWidth: Ge,
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
              ...ue
            },
            children: Mr()
          }
        ),
        i && !k && le && Dr(
          /* @__PURE__ */ v(Te, { children: [
            Mr(),
            (L == null ? void 0 : L.show) && !Ne && /* @__PURE__ */ t(Zt, { ...L })
          ] })
        ),
        qn && Dr(
          /* @__PURE__ */ v(Te, { children: [
            /* @__PURE__ */ t(
              ua,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: S,
                onLinkClick: C,
                logo: bo,
                title: n,
                onBrandClick: zt,
                brandMenuOpen: Ht,
                brandColor: Gt,
                headerBackgroundColor: br,
                headerForegroundColor: vt,
                activeAccentColor: ne,
                groupAccentColor: R,
                activeForegroundColor: w,
                foregroundColor: he,
                surfaceBackgroundColor: xr,
                flyoutSurfaceColor: Le,
                collapsed: Ne,
                expandedWidth: $o,
                collapsedWidth: gr,
                topContent: Xt(
                  Ne ? mr : "full"
                ),
                submenuMode: Pe ? "flyout" : "inline",
                color: Be,
                hoverColor: St,
                avatarColor: ne,
                showProfile: V,
                userName: K,
                userEmail: G,
                userRole: $,
                userAvatar: M,
                showNotifications: W,
                notificationCount: B,
                onNotificationsClick: rs ? Ro : ae,
                whatsNewCount: te,
                onProfileClick: ge,
                menuItems: _,
                onLogout: Tr,
                theme: j,
                showThemeToggler: be,
                onThemeToggle: $e
              }
            ),
            (L == null ? void 0 : L.show) && !Ne && /* @__PURE__ */ t(Zt, { ...L })
          ] })
        ),
        i && !k && !Zn && !yt && /* @__PURE__ */ t(
          Fr,
          {
            variant: "permanent",
            sx: {
              width: Ge,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Ge,
                boxSizing: "border-box",
                bgcolor: se,
                borderRight: "none"
              },
              ...ue
            },
            children: /* @__PURE__ */ v(
              Q,
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
                    Q,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        oo,
                        {
                          logo: es,
                          appName: n,
                          onClick: zt,
                          menuOpen: Ht,
                          color: u ?? Be,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Xt("popover"),
                  /* @__PURE__ */ v(
                    Q,
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
                          ea,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: S,
                            onLinkClick: C,
                            accentColor: ne,
                            surfaceBackgroundColor: se,
                            railShowTitles: s
                          }
                        ),
                        (L == null ? void 0 : L.show) && /* @__PURE__ */ t(Zt, { ...L })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(Q, { sx: { py: 1.5 }, children: Io(!0) })
                ]
              }
            )
          }
        ),
        i && k && /* @__PURE__ */ v(
          vs,
          {
            anchor: ye ? "bottom" : "left",
            open: Sr,
            onOpen: () => st(!0),
            onClose: () => st(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (A) => A.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Le,
                  backgroundImage: "none",
                  ...ye ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              ye && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                Q,
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
                Fo,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: S,
                  onLinkClick: (A) => {
                    C == null || C(A), st(!1);
                  },
                  onLinkAction: () => st(!1),
                  collapsed: !1,
                  expandedWidth: ye ? "100%" : Ra,
                  activeAccentColor: ne,
                  groupAccentColor: R,
                  activeForegroundColor: w,
                  foregroundColor: he,
                  surfaceBackgroundColor: Le,
                  topInsetPx: ye ? 8 : 0,
                  topContent: ye ? void 0 : Xt("full"),
                  footer: ye ? void 0 : Io(!1)
                }
              ),
              (L == null ? void 0 : L.show) && /* @__PURE__ */ t(Zt, { ...L })
            ]
          }
        ),
        ye && Et && /* @__PURE__ */ t(
          sa,
          {
            open: vr,
            onClose: () => So(!1),
            search: Et
          }
        ),
        ye && /* @__PURE__ */ t(
          na,
          {
            ...Ar,
            pinnedLinks: h,
            activePath: S,
            onLinkClick: C,
            onMenuClick: i ? () => st(!0) : void 0,
            menuOpen: Sr,
            onSearchClick: Et ? () => So(!0) : void 0,
            searchOpen: vr,
            showAssistant: rt,
            onAssistantClick: je,
            assistantActive: dt,
            showProfile: V,
            background: Le,
            color: Be,
            activeColor: ne,
            activeBackground: St
          }
        ),
        /* @__PURE__ */ t(
          Q,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": ms,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": k ? `${Qt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ge ? `calc(100% - ${Ge}px)` : "100%",
              mt: k ? `${Qt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ye && {
                pb: `calc(var(--lumora-content-padding) + ${wr})`
              },
              backgroundColor: se,
              ...Ce
            },
            children: e
          }
        ),
        Me && /* @__PURE__ */ t(
          Ki,
          {
            open: Ir,
            variant: _r,
            position: lt,
            width: Ft,
            sidebarWidthPx: Ge,
            bottomOffsetPx: rt && bt === "floating" ? _a : 0,
            fullScreen: k,
            fullScreenBottom: ye ? wr : "0px",
            onClose: ho,
            children: /* @__PURE__ */ t(Me, {})
          }
        ),
        rt && bt === "floating" && !ye && /* @__PURE__ */ t(
          cn,
          {
            variant: "floating",
            rightOffsetPx: cs,
            shortcutKeys: $r,
            onClick: je,
            active: dt,
            busy: Bt
          }
        ),
        W && H && /* @__PURE__ */ t(
          Fr,
          {
            anchor: "right",
            open: vo.open,
            onClose: Rr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              H,
              {
                onClose: Rr,
                initialTab: vo.tab
              },
              vo.tab
            )
          }
        )
      ]
    }
  ) }) }) });
};
export {
  oe as AUTH_ERROR_CODES,
  Y as AuthError,
  Fo as CollapsibleSidebar,
  Rc as FullBleedSection,
  Mi as Kbd,
  ki as LumoraShellSkeleton,
  _c as LumoraWrapper,
  Lt as clearAuthTokens,
  _c as default,
  Ic as getAuthErrorMessage,
  Dt as getAuthTokens,
  Bi as getCurrentUser,
  cr as getDesignTokens,
  Wi as isAuthenticated,
  Go as logAuthError,
  zn as storeAuthTokens
};
