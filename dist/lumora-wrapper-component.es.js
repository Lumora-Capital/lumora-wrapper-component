import { jsx as t, jsxs as S, Fragment as Ae } from "react/jsx-runtime";
import fs from "@mui/icons-material/KeyboardArrowDownRounded";
import hs from "@mui/icons-material/KeyboardArrowUpRounded";
import ps from "@mui/icons-material/ChevronRightRounded";
import O from "@mui/material/Box";
import Tr from "@mui/material/Collapse";
import Qe from "@mui/material/Divider";
import ve from "@mui/material/IconButton";
import Xt from "@mui/material/ListItemButton";
import Se from "@mui/material/ListItemIcon";
import ke from "@mui/material/ListItemText";
import $e from "@mui/material/Stack";
import we from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as Fe, createTheme as Wo, alpha as ct, ThemeProvider as pn } from "@mui/material/styles";
import * as d from "react";
import { useMemo as Oo, useState as it, useCallback as Ar, useRef as Ro, useEffect as Kt } from "react";
import et from "@mui/material/ButtonBase";
import { keyframes as Po } from "@emotion/react";
import zo from "@mui/material/Fade";
import Go from "@mui/material/Popper";
import { useTheme as mn, useMediaQuery as gn, Stack as To, Skeleton as ze, Box as re, CssBaseline as xn, Drawer as $r, SwipeableDrawer as ms } from "@mui/material";
import Mr from "axios";
import gs from "@mui/material/Card";
import xs from "@mui/material/CardContent";
import bn from "@mui/material/Button";
import bs from "@mui/icons-material/AutoAwesomeRounded";
import ys from "@mui/material/Grow";
import Ho from "@mui/material/Paper";
import vs from "@mui/material/Slide";
import Ss from "@mui/material/ListSubheader";
import Ze from "@mui/material/MenuItem";
import Uo from "@mui/material/MenuList";
import yn from "@mui/icons-material/MenuRounded";
import Xo from "@mui/icons-material/SearchRounded";
import vn from "@mui/icons-material/LogoutRounded";
import Sn from "@mui/icons-material/NotificationsNoneOutlined";
import ws from "@mui/icons-material/SettingsOutlined";
import Es from "@mui/material/Avatar";
import Rs from "@mui/material/Menu";
import Dr from "@mui/material/ToggleButton";
import Is from "@mui/material/ToggleButtonGroup";
import _s from "@mui/material/Drawer";
import Cs from "@mui/material/AppBar";
import Os from "@mui/material/Toolbar";
import wn from "@mui/material/Badge";
import Ts from "@mui/icons-material/DarkModeOutlined";
import As from "@mui/icons-material/LightModeOutlined";
import $s from "@mui/icons-material/SettingsBrightnessOutlined";
import Ko from "@mui/material/Popover";
import Ms from "@mui/icons-material/CheckRounded";
const Jt = ({
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
  }, l = /* @__PURE__ */ S(Ae, { children: [
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
    et,
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
  ) : /* @__PURE__ */ t($e, { direction: "row", "data-testid": s, sx: c, children: l });
}, Lr = !1, no = { stiffness: 320, damping: 24 }, jo = { stiffness: 520, damping: 20 }, En = { stiffness: 380, damping: 36 }, so = { stiffness: 260, damping: 28 }, Ds = "cubic-bezier(0.32, 1.28, 0.52, 1)", Ls = 420, Nr = 60, Ns = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), kr = /* @__PURE__ */ new Map(), Ee = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = kr.get(n);
  if (i)
    return i;
  if (!Ns)
    return { easing: Ds, duration: Ls };
  const s = 1 / 600;
  let a = 0, c = 0, l = 0, p = 1 / Nr;
  const m = [0];
  for (; l < 3; ) {
    const h = (-e * (a - 1) - o * c) / r;
    if (c += h * s, a += c * s, l += s, l >= p && (m.push(a), p += 1 / Nr, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const x = {
    easing: `linear(${m.map((h) => Number(h.toFixed(4))).join(", ")})`,
    duration: Math.round(l * 1e3)
  };
  return kr.set(n, x), x;
}, Je = (e) => !!(e && typeof e.animate == "function"), Ue = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, jt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, ks = (e, o = 1.14) => {
  if (!Je(e) || Ue())
    return;
  const r = Ee(jo);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, gt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, mt = (e, o) => e ? `${e}/${o.text}` : o.text, Ve = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Ve(n, o))) ?? !1 : !1;
}, Ne = (e, o) => !!(o && e.path === o), Vo = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return gt(r) ? Vo(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Ao = (e) => {
  const o = io(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, eo = (e) => {
  const o = io(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, $o = (e, o) => {
  const r = io(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, io = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Rn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Yo = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Fs = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Bs = Po`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, _e = "@media (prefers-reduced-motion: reduce)", J = 6, qo = "9, 193, 174", In = d.createContext(
  void 0
), kt = d.createContext(
  void 0
), Zo = (e) => d.useContext(kt) ?? e, xt = () => {
  const e = d.useContext(In), o = e ? io(e) : null;
  return o ? o.join(", ") : qo;
}, Fr = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, Ws = (e, o) => e ? "255, 255, 255" : o, Ps = (e, o, r = qo) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${Fs(e)}, 0 0 0 1px ${Yo(e)}`
}), zs = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", Qo = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: Yo(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${J}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), Jo = Po`
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
`, er = Po`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, tr = (e, o = qo, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Dt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: $o(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${$o(e, 0.45)}`
}, Gs = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${Yo(e)}`;
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
}, to = "data-rail-item", Hs = `[${to}], button, [role="button"]`, ao = d.createContext(!1), or = () => {
  const e = d.useContext(ao), o = Fe(), r = d.useContext(kt);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: Qo(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ye = Ee(En), rr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  lean: s = 3
}) => {
  const a = d.useRef(null), c = xt(), [l, p] = d.useState(null), m = d.useRef(null), x = d.useRef(null), h = (E, I) => {
    x.current = I;
    const v = I.getBoundingClientRect(), C = E.getBoundingClientRect(), j = n ?? v.width, U = n ?? v.height, M = {
      top: Math.round(v.top - C.top + (v.height - U) / 2),
      left: Math.round(v.left - C.left + (v.width - j) / 2),
      width: Math.round(j),
      height: Math.round(U)
    };
    p(
      (D) => D && D.visible && D.top === M.top && D.left === M.left && D.width === M.width && D.height === M.height ? D : { ...M, visible: !0, instant: !(D != null && D.visible) }
    );
  }, u = (E, I) => {
    var C;
    const v = (C = I == null ? void 0 : I.closest) == null ? void 0 : C.call(I, r);
    return v && E.contains(v) ? v : null;
  }, g = (E) => {
    if (!e)
      return;
    const I = u(E.currentTarget, E.target);
    I && h(E.currentTarget, I);
  }, _ = (E) => {
    if (!e)
      return;
    const I = u(E.currentTarget, E.target);
    I && E.target.matches(":focus-visible") && h(E.currentTarget, I);
  }, b = (E) => {
    const I = a.current, v = x.current;
    if (!e || !I || !v || !s || Ue())
      return;
    const C = v.getBoundingClientRect(), j = (U, M) => Math.max(-1, Math.min(1, U / (M / 2))) * s;
    I.style.transform = `translate(${j(E.clientX - (C.left + C.width / 2), C.width)}px, ${j(E.clientY - (C.top + C.height / 2), C.height)}px)`;
  }, y = () => {
    x.current = null, a.current && (a.current.style.transform = ""), p((E) => E != null && E.visible ? { ...E, visible: !1 } : E);
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
    if (m.current = l.top, !Je(E) || Ue())
      return;
    if (I === null || l.instant) {
      E.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ye.duration,
        easing: Ye.easing
      });
      return;
    }
    const v = Math.min(Math.abs(l.top - I) / 600, 0.08);
    v && E.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - v / 2} ${1 + v}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ye.duration, easing: "ease-out" }
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
          ...tr(o, c),
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
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${Ye.duration}ms ${Ye.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
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
}, Us = (e, o) => {
  const r = rr({
    enabled: e,
    isDark: o,
    selector: Hs,
    size: 46,
    radius: J
  });
  return {
    ...r,
    lens: r.lens ? d.cloneElement(r.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Xs = (e, o) => {
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
}, Ks = ({
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
      const h = x.querySelector(
        `[${to}][data-active="true"]`
      );
      if (!h) {
        a(
          (g) => g != null && g.visible ? { ...g, visible: !1 } : g
        );
        return;
      }
      const u = Xs(h, x);
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
    const h = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => l(!1));
    }, u = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => l(!0));
    u == null || u.observe(m);
    const g = typeof MutationObserver > "u" ? null : new MutationObserver(h);
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
    if (c.current = s.top, x === null || s.instant || !Je(m) || Ue())
      return;
    const h = Math.min(Math.abs(s.top - x) / 600, 0.08);
    h && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - h / 2} ${1 + h}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ye.duration, easing: "ease-out" }
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
        ...Dt(r, o),
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
        [_e]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Br = 14, js = 18, Vs = "blur(12px) saturate(180%) brightness(1.04)", Ys = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), qs = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, Zs = 140, Wr = 0.22, Qs = 0.14, Js = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var u;
      const h = e.current;
      h && (h.style.setProperty("--lx", `${s.x.toFixed(1)}px`), h.style.setProperty("--ly", `${s.y.toFixed(1)}px`), h.style.setProperty("--li", s.i.toFixed(3)), (u = n.current) == null || u.call(n, s.x, s.y, s.i));
    }, l = () => {
      s.x += (i.x - s.x) * Wr, s.y += (i.y - s.y) * Wr, s.i += (i.i - s.i) * Qs;
      const h = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      h && (s.x = i.x, s.y = i.y, s.i = i.i), c(), a = h ? 0 : requestAnimationFrame(l);
    }, p = () => {
      a || (a = requestAnimationFrame(l));
    }, m = (h) => {
      const u = e.current;
      if (h.pointerType === "touch" || !u)
        return;
      const g = u.getBoundingClientRect();
      if (!g.width || !g.height)
        return;
      i.x = (h.clientX - g.left) * u.offsetWidth / g.width, i.y = (h.clientY - g.top) * u.offsetHeight / g.height;
      const _ = Math.max(
        g.left - h.clientX,
        0,
        h.clientX - g.right
      ), b = Math.max(
        g.top - h.clientY,
        0,
        h.clientY - g.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(_, b) / Zs), s.i < 0.01 && (s.x = i.x, s.y = i.y), p();
    }, x = () => {
      i.i = 0, p();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", x), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", x);
    };
  }, [e, o]);
}, bt = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: s = !0,
    onLight: a
  }, c) => {
    const l = d.useRef(null), p = i && Lr;
    Js(l, s && Lr, a);
    const m = xt(), x = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [h, u] = d.useState(null), g = d.useRef(null), _ = d.useCallback(
      (R) => {
        var E;
        if (l.current = R, typeof c == "function" ? c(R) : c && (c.current = R), (E = g.current) == null || E.disconnect(), g.current = null, !R || !p || !Ys || typeof ResizeObserver > "u")
          return;
        const w = () => {
          const I = R.offsetWidth, v = R.offsetHeight;
          u(
            (C) => (C == null ? void 0 : C.width) === I && C.height === v ? C : I && v ? { width: I, height: v } : null
          );
        };
        g.current = new ResizeObserver(w), g.current.observe(R), w();
      },
      [c, p]
    ), b = d.useMemo(
      () => h ? qs(h.width, h.height, Br) : null,
      [h]
    ), y = p && !!(b && h);
    return /* @__PURE__ */ S(Ae, { children: [
      y ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ S(
            "filter",
            {
              id: x,
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
                    href: b,
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
                    stdDeviation: Br / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: js,
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
            Ps(e, o, m),
            y ? {
              backdropFilter: `url(#${x}) ${Vs}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
bt.displayName = "GlassLayer";
const qe = 44, Pr = 4, ei = J, zr = 1.4, ti = 6, _n = 6, Ot = J, oo = 10, Gr = 0.12, Hr = 0.75, oi = oo + 32, ri = 90, ni = 22, si = 1190, ii = 1195, ro = Ee(no), he = Ee(En), Ur = Ee(so), ai = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const s = Math.min(i, r / 2, n / 2), a = e + r, c = o + n, l = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + s} ${o} H ${a - s} ${l} ${a} ${o + s} V ${c - s} ${l} ${a - s} ${c} H ${e + s} ${l} ${e} ${c - s} V ${o + s} ${l} ${e + s} ${o} Z')`;
}, ci = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: i,
  activePath: s,
  focusFirst: a = !1,
  onNavigate: c,
  onClose: l,
  panelProps: p,
  accentColor: m,
  activeForegroundColor: x,
  solidSurface: h
}) => {
  const u = Fe(), g = u.palette.mode === "dark", _ = !!(e && r), b = d.useRef(null);
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
    r && ks(r);
  }, [r]);
  const [E, I] = d.useState(!1);
  d.useEffect(() => {
    if (!_) {
      I(!1);
      return;
    }
    let T = 0;
    const W = requestAnimationFrame(() => {
      T = requestAnimationFrame(() => I(!0));
    });
    return () => {
      cancelAnimationFrame(W), cancelAnimationFrame(T);
    };
  }, [_]);
  const v = d.useMemo(
    () => y ? Vo(y.group.subitems, y.group.icon) : [],
    [y]
  ), C = d.useRef(null), j = d.useRef(null), U = d.useRef(0), M = d.useRef(null), D = d.useRef([]), P = v.findIndex(
    ({ sub: T }) => Ne(T, s)
  ), [L, z] = d.useState(0);
  d.useEffect(() => {
    z(Math.max(P, 0));
  }, [o]), d.useEffect(() => {
    if (!_ || !a)
      return;
    const T = setTimeout(() => {
      var W;
      return (W = D.current[0]) == null ? void 0 : W.focus();
    });
    return () => clearTimeout(T);
  }, [_, a, o]);
  const te = (T) => {
    var Z;
    const W = Math.max(0, Math.min(T, v.length - 1));
    z(W), (Z = D.current[W]) == null || Z.focus();
  }, pe = (T, W) => {
    switch (T.key) {
      case "ArrowRight":
        te(W + 1);
        break;
      case "ArrowLeft":
        W === 0 ? l(!0) : te(W - 1);
        break;
      case "Home":
        te(0);
        break;
      case "End":
        te(v.length - 1);
        break;
      case "Tab":
        l(!0);
        break;
      default:
        return;
    }
    T.preventDefault();
  }, F = (T) => {
    var ge;
    const W = D.current.slice(0, v.length).filter((V) => !!V);
    if (!W.length)
      return;
    const Z = T !== null && T < W.length && !Ue(), H = `translate ${he.duration}ms ${he.easing}, scale ${he.duration}ms ${he.easing}`, k = W.map((V) => V.offsetLeft + qe / 2), Q = W.map(
      (V, de) => Z && de === T ? zr : 1
    ), le = Z ? (zr - 1) * qe : 0, Ce = k[0] - qe / 2, Xe = k[k.length - 1] + qe / 2, me = Z ? Math.min(
      Math.min(
        1,
        Math.max(
          0,
          (k[T] - Ce) / (Xe - Ce)
        )
      ),
      ti / le
    ) : 0;
    let fe = Ce - le * me;
    W.forEach((V, de) => {
      const xe = qe * Q[de], Oe = fe + xe / 2;
      fe += xe + Pr, V.style.transition = `${H}, background 160ms ease, box-shadow 160ms ease`, V.style.translate = Z ? `${Oe - k[de]}px 0` : "", V.style.scale = Z ? String(Q[de]) : "", Z ? V.style.setProperty("--dock-scale", String(Q[de])) : V.style.removeProperty("--dock-scale");
    }), (ge = M.current) == null || ge.call(M);
  }, B = d.useRef(null);
  d.useEffect(() => {
    B.current = null;
  }, [o]);
  const G = (T) => {
    B.current !== T && (B.current = T, cancelAnimationFrame(U.current), U.current = requestAnimationFrame(() => F(T)));
  };
  d.useEffect(() => () => cancelAnimationFrame(U.current), []);
  const oe = u.palette.text.primary, ie = g ? u.palette.text.primary : m;
  return /* @__PURE__ */ S(Ae, { children: [
    /* @__PURE__ */ t(zo, { in: _, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
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
          ...i ? { clipPath: ai(i) } : {},
          zIndex: si,
          bgcolor: zs(g)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      Go,
      {
        open: _,
        anchorEl: R ?? w.current,
        placement: "right",
        transition: !0,
        modifiers: [
          { name: "offset", options: { offset: [0, oo] } },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: ii,
          transition: E ? `transform ${he.duration}ms ${he.easing}` : "none",
          [_e]: { transition: "none" }
        },
        children: ({ TransitionProps: T }) => /* @__PURE__ */ t(
          mi,
          {
            in: (T == null ? void 0 : T.in) ?? _,
            onEnter: T == null ? void 0 : T.onEnter,
            onExited: T == null ? void 0 : T.onExited,
            groupKey: (y == null ? void 0 : y.key) ?? null,
            panelProps: p,
            isDark: g,
            solidSurface: h,
            groupText: y == null ? void 0 : y.group.text,
            glassRef: j,
            shapeRef: M,
            children: y ? /* @__PURE__ */ t(Ae, { children: /* @__PURE__ */ t(
              O,
              {
                ref: C,
                role: "menu",
                "aria-label": y.group.text,
                onPointerLeave: () => G(null),
                sx: {
                  position: "relative",
                  display: "flex",
                  gap: `${Pr}px`,
                  // No room kept for magnification: a grown tile rises out of
                  // the glass, as icons rise out of the Dock
                  px: 0
                },
                children: v.map(({ sub: W, icon: Z }, H) => /* @__PURE__ */ t(
                  Cn,
                  {
                    ref: (k) => {
                      D.current[H] = k;
                    },
                    sub: W,
                    icon: Z,
                    index: H,
                    active: Ne(
                      W,
                      s
                    ),
                    tabIndex: H === L ? 0 : -1,
                    onClick: () => {
                      c(W.path), l();
                    },
                    onKeyDown: (k) => pe(k, H),
                    onFocus: (k) => {
                      z(H), k.currentTarget.matches(
                        ":focus-visible"
                      ) && G(H);
                    },
                    onHoverStart: (k) => {
                      k !== "touch" && G(H);
                    },
                    accentColor: m,
                    activeForegroundColor: x,
                    labelColor: oe,
                    iconColor: ie,
                    isDark: g
                  },
                  W.path
                ))
              },
              y.key
            ) }) : null
          }
        )
      }
    )
  ] });
}, $t = 18, li = 160, Mo = 14, di = 22, ui = 2.5, fi = 1, Xr = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, hi = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, pi = (e, o, r) => {
  const n = _n, i = $t, s = $t + o / 2, a = Math.max(e, ...r.map((b) => b.right + n)), c = {
    cx: a / 2,
    cy: s,
    hx: a / 2,
    hy: o / 2,
    r: Ot
  }, l = r.filter((b) => b.bottom - b.top > qe * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + $t,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: Ot
  })), p = (b, y) => l.reduce(
    (R, w) => hi(R, Xr(b, y, w), di),
    Xr(b, y, c)
  ), m = (b, y) => {
    let R = s, w = s + y * (o / 2 + i);
    if (p(b, R) > 0)
      return null;
    for (let E = 0; E < 12; E += 1) {
      const I = (R + w) / 2;
      p(b, I) <= 0 ? R = I : w = I;
    }
    return R;
  }, x = Math.min(0, ...l.map((b) => b.cx - b.hx)) - 2, h = Math.max(a, ...l.map((b) => b.cx + b.hx)) + 2, u = [], g = [];
  for (let b = x; b <= h; ) {
    const y = m(b, -1), R = m(b, 1);
    if (y !== null && R !== null) {
      const E = +(b + Mo).toFixed(1);
      u.push([E, +y.toFixed(1)]), g.push([E, +R.toFixed(1)]);
    }
    const w = b - x < Ot + 4 || h - b < Ot + 4;
    b += w ? fi : ui;
  }
  return u.length ? `M ${[...u, ...g.reverse()].map(([b, y]) => `${b} ${y}`).join(" L ")} Z` : "";
}, Kr = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((s) => {
    Je(s) && s.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    });
  });
}, mi = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: i,
  isDark: s,
  solidSurface: a,
  groupText: c,
  glassRef: l,
  shapeRef: p,
  children: m
}) => {
  const x = d.useRef(null), h = d.useRef(null), u = d.useRef(null), g = d.useRef(null), _ = d.useRef(null), b = Ws(s, xt()), y = d.useCallback(
    (F, B, G) => {
      var oe, ie;
      (oe = _.current) == null || oe.setAttribute("cx", String(F)), (ie = _.current) == null || ie.setAttribute("cy", String(B)), g.current && (g.current.style.opacity = String(
        G * (s ? Fr.dark.rim : Fr.light.rim)
      ));
    },
    [s]
  ), R = d.useRef(null), w = d.useRef(null), E = `lumora-flyout-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, I = d.useRef(0), v = d.useRef(0), C = d.useRef(""), j = () => {
    var T, W, Z, H;
    const F = x.current, B = h.current;
    if (!F || !B)
      return !1;
    const G = F.getBoundingClientRect(), oe = Array.from(
      F.querySelectorAll('[role="menuitem"]'),
      (k) => {
        const Q = k.getBoundingClientRect();
        return {
          left: Q.left - G.left,
          right: Q.right - G.left,
          top: Q.top - G.top,
          bottom: Q.bottom - G.top
        };
      }
    ), ie = pi(
      F.offsetWidth,
      F.offsetHeight,
      oe
    );
    return ie === C.current ? !1 : (C.current = ie, B.style.clipPath = `path('${ie}')`, (T = u.current) == null || T.setAttribute("d", ie), (W = g.current) == null || W.setAttribute("d", ie), (Z = R.current) == null || Z.setAttribute("d", ie), (H = w.current) == null || H.setAttribute("d", ie), !0);
  }, U = () => {
    if (v.current = 0, I.current)
      return;
    const F = () => {
      if (v.current = j() ? 0 : v.current + 1, v.current > 8) {
        I.current = 0;
        return;
      }
      I.current = requestAnimationFrame(F);
    };
    I.current = requestAnimationFrame(F);
  };
  p.current = U, d.useLayoutEffect(() => (j(), U(), () => {
    cancelAnimationFrame(I.current), I.current = 0;
  }), [n]);
  const M = d.useRef(null), D = d.useRef(null), P = d.useRef(!1), L = (F) => {
    x.current = F;
    const { ref: B } = i;
    typeof B == "function" ? B(F) : B && (B.current = F);
  }, z = () => {
    jt(l.current), jt(M.current), jt(x.current);
  }, te = () => {
    var oe;
    const F = x.current, B = l.current, G = M.current;
    if (!(!Je(F) || !B || !G)) {
      if (z(), Ue()) {
        F.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      D.current = null, B.animate(
        [
          { transform: `scale(${Gr}, ${Hr})` },
          { transform: "none" }
        ],
        { duration: ro.duration, easing: ro.easing }
      ), Kr(B, [0, 1], 160, "ease-out");
      try {
        (oe = h.current) == null || oe.animate(
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
      G.animate(
        [
          { opacity: 0, transform: "translateX(-10px) scale(0.98)" },
          { opacity: 1, transform: "none" }
        ],
        {
          duration: Ur.duration,
          delay: 60,
          easing: Ur.easing,
          fill: "backwards"
        }
      );
    }
  }, pe = () => {
    const F = x.current, B = l.current, G = M.current;
    if (!Je(F) || !B || !G) {
      r == null || r();
      return;
    }
    if (z(), Ue()) {
      F.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 120,
        fill: "forwards"
      }).finished.then(() => r == null ? void 0 : r()).catch(() => {
      });
      return;
    }
    G.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 90,
      easing: "ease-in",
      fill: "forwards"
    }), Kr(B, [1, 0], 200, "ease-in"), B.animate(
      [
        { transform: "none" },
        { transform: `scale(${Gr}, ${Hr})` }
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
      pe();
      return;
    }
    o == null || o(), te();
  }, [e]), d.useLayoutEffect(() => {
    const F = x.current;
    if (!F)
      return;
    const B = F.getBoundingClientRect(), G = D.current;
    if (D.current = { width: B.width, height: B.height }, !P.current) {
      P.current = !0;
      return;
    }
    const oe = l.current;
    !e || !G || !Je(oe) || !B.width || !B.height || Ue() || (jt(oe), oe.animate(
      [
        {
          transform: `scale(${G.width / B.width}, ${G.height / B.height})`
        },
        { transform: "none" }
      ],
      { duration: he.duration, easing: he.easing }
    ));
  }, [n]), /* @__PURE__ */ S(
    O,
    {
      ref: L,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": c,
      sx: {
        position: "relative",
        borderRadius: `${Ot}px`,
        p: `${_n}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -oo - 2,
          width: oo + 2
        }
      },
      children: [
        /* @__PURE__ */ S(
          O,
          {
            ref: l,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -$t,
              bottom: -$t,
              left: -Mo,
              right: -li,
              pointerEvents: "none",
              // The rail icon's centre: the panel is centred on it,
              // one gap plus half the rail's padding to the left
              transformOrigin: `${Mo - oi}px 50%`,
              willChange: "transform"
            },
            children: [
              /* @__PURE__ */ S(
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
                    /* @__PURE__ */ S("defs", { children: [
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
                      /* @__PURE__ */ S(
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
                bt,
                {
                  ref: h,
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
              /* @__PURE__ */ S(
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
                    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ S(
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
                    /* @__PURE__ */ S(
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
        /* @__PURE__ */ t(O, { ref: M, sx: { position: "relative" }, children: m })
      ]
    }
  );
}, Cn = d.forwardRef(
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
    accentColor: p,
    activeForegroundColor: m,
    labelColor: x,
    iconColor: h,
    isDark: u
  }, g) => {
    const _ = xt(), b = d.useContext(kt), y = (I) => {
      const v = I.currentTarget.getBoundingClientRect();
      I.currentTarget.style.setProperty(
        "--mx",
        `${(I.clientX - v.left) / v.width * 100}%`
      ), I.currentTarget.style.setProperty(
        "--my",
        `${(I.clientY - v.top) / v.height * 100}%`
      );
    }, R = (I) => {
      const v = I.currentTarget;
      !Je(v) || Ue() || v.animate(
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
      ...tr(u, _),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": w
    };
    return /* @__PURE__ */ S(
      et,
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
          width: qe,
          height: qe,
          borderRadius: `${ei}px`,
          color: n ? m : x,
          bgcolor: n ? p : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Dt(p, u) : {},
          transition: `translate ${he.duration}ms ${he.easing}, scale ${he.duration}ms ${he.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${Bs} ${ro.duration}ms ${ro.easing} both`,
          animationDelay: `${ri + r * ni}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: 22,
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
            "& [data-tile-name]": w
          } : E,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : E,
            "& [data-tile-name]": w,
            outline: "2px solid",
            outlineColor: p,
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
                ...Qo(u, b),
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
Cn.displayName = "FlyoutTile";
const gi = 100, xi = 250, bi = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const i = d.useRef(/* @__PURE__ */ new Map()), s = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, p = () => {
    clearTimeout(c.current), c.current = void 0;
  }, m = (y, R, w = !1) => {
    l(), p(), r({ key: y, pinned: R, focusFirst: w });
  }, x = d.useCallback((y = !1) => {
    var w, E;
    l(), p();
    const R = (w = n.current) == null ? void 0 : w.key;
    r(null), y && R && ((E = i.current.get(R)) == null || E.focus());
  }, []), h = () => {
    l(), !(!n.current || n.current.pinned) && (p(), c.current = setTimeout(() => x(), xi));
  };
  d.useEffect(() => {
    e || x();
  }, [e, x]), d.useEffect(
    () => () => {
      l(), p();
    },
    []
  );
  const u = o !== null;
  return d.useEffect(() => {
    if (!u)
      return;
    const y = (E) => {
      var v;
      const I = E;
      return I ? (v = s.current) != null && v.contains(I) ? !0 : [...i.current.values()].some((C) => C.contains(I)) : !1;
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
        p();
        const R = n.current;
        if (R) {
          R.key !== y && m(y, R.pinned);
          return;
        }
        l(), a.current = setTimeout(
          () => m(y, !1),
          gi
        );
      },
      onMouseLeave: h,
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
      onMouseEnter: p,
      onMouseLeave: h
    },
    onRailLeafEnter: () => {
      l(), n.current && !n.current.pinned && x();
    },
    getTrigger: (y) => i.current.get(y) ?? null
  };
}, yi = 264, vi = 72, jr = 64, Vt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Si = 16, wi = 14, Ei = 4, Ri = 2.5, Vr = "0.7rem", Yr = 22, qr = Ee(jo), at = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
  const s = d.useRef(null), [a, c] = d.useState(!1), l = d.useCallback(() => {
    const p = s.current;
    p && c(p.scrollWidth > p.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    l();
  }, [l, e]), d.useEffect(() => {
    const p = s.current;
    if (!p)
      return;
    const m = new ResizeObserver(() => l());
    return m.observe(p), () => m.disconnect();
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
}, Ii = ({
  open: e,
  size: o = Si
}) => e ? /* @__PURE__ */ t(hs, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(fs, { sx: { fontSize: o, opacity: 0.75 } }), Zr = ({ open: e }) => /* @__PURE__ */ t(
  ps,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), Yt = 600, Do = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: i,
  logo: s,
  title: a,
  onBrandClick: c,
  brandMenuOpen: l,
  showHeaderBar: p = !1,
  headerBackgroundColor: m,
  headerForegroundColor: x,
  brandColor: h,
  activeAccentColor: u = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: _,
  foregroundColor: b,
  surfaceBackgroundColor: y,
  flyoutSurfaceColor: R,
  collapsed: w = !1,
  expandedWidth: E = yi,
  collapsedWidth: I = vi,
  showLabels: v = !1,
  topInsetPx: C = 0,
  topContent: j,
  footer: U,
  submenuMode: M = "inline"
}) => {
  const D = Fe(), P = D.palette.mode === "dark", L = d.useContext(kt), z = M === "flyout" && w && !v, te = bi(z), pe = d.useRef(null), F = Us(z, P), B = Ks({
    enabled: z,
    isDark: P,
    color: u,
    containerRef: pe
  }), { close: G } = te;
  d.useEffect(() => {
    G();
  }, [r, G]);
  const [oe, ie] = d.useState(
    {}
  ), T = _ ?? Ao(u), W = {
    bgcolor: u,
    color: T,
    "& .MuiListItemIcon-root": { color: T }
  }, Z = {
    bgcolor: u,
    color: T,
    borderRadius: "8px"
  }, H = g ?? eo(u), k = y ?? (P ? D.palette.background.paper : "#ffffff"), Q = b ?? (P ? "text.primary" : u), le = m ?? k, Ce = x ?? (m ? Ao(le) : b ?? (P ? D.palette.text.primary : u)), Xe = eo(Ce), me = (f) => {
    n == null || n(f);
  }, fe = (f, A) => {
    ie((Y) => ({ ...Y, [f]: !A }));
  }, ge = (f, A) => oe[A] ?? Ve(f, r), V = (f, A, Y) => ({
    color: f ? T : Q,
    bgcolor: f ? u : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? T : Q,
      minWidth: Y
    },
    "&:hover": f || v ? W : { bgcolor: A }
  }), de = {
    "&.Mui-selected": {
      bgcolor: u
    },
    "&.Mui-selected:hover": W
  }, xe = (f) => {
    const A = Ne(f, r), Y = /* @__PURE__ */ S(
      Xt,
      {
        disabled: !f.path,
        selected: A,
        onClick: () => f.path && me(f.path),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": A ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...f.action && { pr: 6 },
          ...f.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...V(
            A,
            H,
            f.subtitle ? 48 : 36
          ),
          ...de
        },
        children: [
          /* @__PURE__ */ t(Se, { children: f.icon }),
          /* @__PURE__ */ t(
            ke,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: f.text,
                  fontWeight: Yt
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
      return Y;
    const { action: N } = f;
    return /* @__PURE__ */ S(O, { sx: { position: "relative" }, children: [
      Y,
      /* @__PURE__ */ t(we, { title: N.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        ve,
        {
          "aria-label": N.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            N.onClick(), i == null || i();
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
            borderColor: A ? "rgba(255, 255, 255, 0.35)" : H,
            color: A ? T : Q,
            "&:hover": {
              bgcolor: A ? "rgba(255, 255, 255, 0.15)" : H
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: A ? T : Q,
              outlineOffset: 1
            }
          },
          children: N.icon
        }
      ) })
    ] }, f.text);
  }, Oe = (f) => {
    const A = Ve(f, r), Y = Ne(f, r), N = mt("", f), X = ge(f, N);
    return /* @__PURE__ */ S(
      O,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: A ? H : "transparent"
        },
        children: [
          /* @__PURE__ */ S(
            Xt,
            {
              onClick: () => fe(N, X),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": Y ? "true" : "false",
              "aria-expanded": X,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...V(Y, H, 36)
              },
              children: [
                /* @__PURE__ */ t(Se, { children: f.icon }),
                /* @__PURE__ */ t(
                  ke,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      at,
                      {
                        text: f.text,
                        fontWeight: Yt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(Zr, { open: X })
              ]
            }
          ),
          /* @__PURE__ */ t(Tr, { in: X, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            O,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (K) => Me(K, N, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, Me = (f, A, Y) => {
    const N = mt(A, f), X = Ei + (Y - 1) * Ri;
    if (gt(f)) {
      const ue = Ve(f, r), ee = Ne(f, r), be = ge(f, N);
      return /* @__PURE__ */ S(O, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ S(
          Xt,
          {
            onClick: () => fe(N, be),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": ue ? "true" : "false",
            "aria-expanded": be,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: X,
              ...V(ee, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(Se, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                ke,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    at,
                    {
                      text: f.text,
                      fontWeight: Yt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(Zr, { open: be })
            ]
          }
        ),
        /* @__PURE__ */ t(Tr, { in: be, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(O, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (uo) => Me(uo, N, Y + 1)
        ) }) })
      ] }, N);
    }
    const K = Ne(f, r);
    return /* @__PURE__ */ S(
      Xt,
      {
        selected: K,
        disabled: !f.path,
        onClick: () => f.path && me(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": K ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: X,
          ...V(K, "action.hover", 32),
          ...de
        },
        children: [
          f.icon ? /* @__PURE__ */ t(Se, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            ke,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: f.text,
                  fontWeight: Yt
                }
              )
            }
          )
        ]
      },
      N
    );
  }, Ke = (f, A, Y, N, X, K) => {
    const ue = !X, ee = /* @__PURE__ */ S(
      ve,
      {
        "aria-label": A,
        disabled: ue,
        onClick: X,
        onMouseEnter: z ? te.onRailLeafEnter : void 0,
        ...z ? { [to]: "" } : {},
        "data-testid": (K == null ? void 0 : K.testId) ?? `sidebar-item-${A}`,
        "data-active": N ? "true" : "false",
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
          color: N ? T : Q,
          bgcolor: N ? u : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Yr
          },
          "&:hover": Z,
          ...Vt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: N ? T : Q,
          bgcolor: N ? u : "transparent",
          borderRadius: N ? "8px" : "50%",
          "&:hover": {
            bgcolor: N ? u : K != null && K.insideGroup ? "action.hover" : H,
            borderRadius: "8px"
          },
          ...Vt,
          ...z ? tt(N) : {}
        },
        children: [
          Y,
          v ? /* @__PURE__ */ t(
            at,
            {
              text: A,
              variant: "caption",
              center: !0,
              fontSize: Vr
            }
          ) : null
        ]
      }
    );
    return v ? ue ? /* @__PURE__ */ t("span", { children: ee }, f) : /* @__PURE__ */ t(d.Fragment, { children: ee }, f) : /* @__PURE__ */ t(
      we,
      {
        title: A,
        placement: "right",
        arrow: !z,
        ...z ? co : {},
        children: ue ? /* @__PURE__ */ t("span", { children: ee }) : ee
      },
      f
    );
  }, Ft = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, tt = (f) => ({
    borderRadius: `${J}px`,
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${qr.duration}ms ${qr.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), co = {
    slotProps: {
      tooltip: { sx: Qo(P, L) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, ot = (f) => {
    var X;
    const A = Ve(f, r), Y = mt("", f), N = ((X = te.state) == null ? void 0 : X.key) === Y;
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
          ve,
          {
            ...te.triggerProps(Y),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": N,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": A ? "true" : "false",
            "data-open": N ? "true" : "false",
            [to]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: A ? T : Q,
              bgcolor: A ? u : N ? H : "transparent",
              ...tt(A),
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
              ...Vt
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, yt = (f) => {
    const A = Ve(f, r), Y = Ne(f, r), N = mt("", f), X = ge(f, N), K = /* @__PURE__ */ S(
      ve,
      {
        "aria-label": f.text,
        "aria-expanded": X,
        onClick: () => fe(N, X),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": Y ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: v ? 0.25 : 0,
          width: v ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...v ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: Y ? T : Q,
          bgcolor: Y ? u : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": v ? { bgcolor: u, color: T } : {
            bgcolor: Y ? u : "transparent"
          },
          ...Vt
        },
        children: [
          v ? /* @__PURE__ */ t(
            O,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Yr
                }
              },
              children: f.icon
            }
          ) : f.icon,
          v ? /* @__PURE__ */ t(
            at,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: Vr
            }
          ) : null,
          /* @__PURE__ */ t(Ii, { open: X, size: wi })
        ]
      }
    ), ue = v ? K : /* @__PURE__ */ t(we, { title: f.text, placement: "right", arrow: !0, children: K });
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
          bgcolor: A ? H : "transparent",
          ...v ? {} : { "&:hover": { bgcolor: H } }
        },
        children: [
          ue,
          X ? Vo(f.subitems, f.icon).map(
            ({ sub: ee, icon: be }) => Ke(
              ee.path,
              ee.text,
              be,
              Ne(ee, r),
              () => me(ee.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${ee.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, Bt = (f) => /* @__PURE__ */ t(
    O,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Ke(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        Ne(f, r),
        f.path ? () => me(f.path) : void 0,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), rt = (f) => gt(f) ? z ? ot(f) : w ? yt(f) : Oe(f) : w ? Bt(f) : xe(f), lt = (f) => /* @__PURE__ */ t(
    $e,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: w ? "center" : "stretch"
      },
      children: f.map(rt)
    }
  ), vt = w ? I : E, Wt = () => {
    var ue, ee;
    const { state: f } = te, A = f ? [...e, ...o].find(
      (be) => gt(be) && mt("", be) === f.key
    ) ?? null : null, Y = A ? ((ue = pe.current) == null ? void 0 : ue.getBoundingClientRect().right) ?? I : I, N = A ? ((ee = pe.current) == null ? void 0 : ee.closest("[data-rail-surface]")) ?? pe.current : null, X = N == null ? void 0 : N.getBoundingClientRect(), K = N && X ? {
      left: X.left,
      top: X.top,
      width: X.width,
      height: X.height,
      radius: parseFloat(
        getComputedStyle(N).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      ci,
      {
        group: A,
        groupKey: A ? f.key : null,
        anchor: A ? te.getTrigger(f.key) : null,
        railEdge: Y,
        railShape: K,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: me,
        onClose: te.close,
        panelProps: te.flyoutProps,
        accentColor: u,
        activeForegroundColor: T,
        solidSurface: R ?? k
      }
    );
  }, lo = p ? /* @__PURE__ */ t(
    O,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: jr,
        minHeight: jr,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: le
      },
      children: s || a ? /* @__PURE__ */ t(
        Jt,
        {
          logo: s,
          title: w ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: h ?? Ce,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, dt = !p && s ? /* @__PURE__ */ t(
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
        Jt,
        {
          logo: s,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: h ?? Ce,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, ut = v ? 0.5 : w ? 1 : 1.5;
  return /* @__PURE__ */ t(ao.Provider, { value: z, children: /* @__PURE__ */ S(
    O,
    {
      ref: pe,
      ...F.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": w ? "true" : "false",
      "data-labeled": v ? "true" : "false",
      sx: {
        width: vt,
        minWidth: vt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: k,
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
        ...z ? Ft : {}
      },
      children: [
        F.lens,
        B.glass,
        lo ?? dt,
        j ? /* @__PURE__ */ t(
          O,
          {
            sx: {
              flexShrink: 0,
              px: ut,
              pt: 1,
              pb: 1
            },
            children: j
          }
        ) : null,
        /* @__PURE__ */ S(
          O,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: ut,
              pt: C && !p ? `${C}px` : 1,
              pb: 2
            },
            children: [
              lt(e),
              o.length > 0 ? /* @__PURE__ */ S(O, { sx: { mt: "auto", pt: 2 }, children: [
                U ? null : /* @__PURE__ */ t(
                  Qe,
                  {
                    sx: { mb: 1, borderColor: "divider" }
                  }
                ),
                lt(o)
              ] }) : null
            ]
          }
        ),
        U ? /* @__PURE__ */ t(O, { sx: { flexShrink: 0, px: ut, pb: 1.5 }, children: /* @__PURE__ */ t(
          O,
          {
            sx: {
              borderTop: `1px solid ${Xe}`,
              pt: 1.5
            },
            children: U
          }
        ) }) : null,
        z ? Wt() : null
      ]
    }
  ) });
}, Lo = "var(--lumora-content-padding, 0px)", Qr = `calc(${Lo} * -1)`, xc = ({
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
        mx: Qr,
        mt: o ? Qr : 0,
        // Space below it, like any other block on the page
        mb: Lo,
        px: s ? Lo : 0,
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
), _i = ({ keys: e }) => /* @__PURE__ */ t(
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
}, ft = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, ht = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, pt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, On = Wo(), Te = On.typography.pxToRem, Tn = (e) => {
  const o = e === "dark", r = [...On.shadows];
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
      warning: o ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      error: o ? { light: pt[400], main: pt[500], dark: pt[700] } : { light: pt[300], main: pt[400], dark: pt[800] },
      success: o ? { light: ft[400], main: ft[500], dark: ft[700] } : { light: ft[300], main: ft[400], dark: ft[800] },
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
        fontSize: Te(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Te(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Te(30), lineHeight: 1.2 },
      h4: { fontSize: Te(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Te(20), fontWeight: 600 },
      h6: { fontSize: Te(18), fontWeight: 600 },
      subtitle1: { fontSize: Te(18) },
      subtitle2: { fontSize: Te(14), fontWeight: 500 },
      body1: { fontSize: Te(14) },
      body2: { fontSize: Te(14), fontWeight: 400 },
      caption: { fontSize: Te(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Ci = 100, An = 80, Zt = 56, Tt = 72, No = 68, Mt = 8, $n = J, Mn = { xs: 2, md: "18px" }, Dn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, nr = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), Ln = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n
}) => !e || o ? 0 : r === "rail-labeled" ? An : nr(n, r) ? No + 2 * Mt : r === "collapsible" || r === "panel" ? Tt : Ci, Nn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), kn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Oi = 6, Ti = ({
  theme: e = "light",
  sidebarVariant: o = "rail",
  sidebarSubmenu: r = "expand",
  showSidebar: n = !0,
  contentPadding: i = Mn,
  sidebarBackgroundColor: s,
  contentBackgroundColor: a
}) => {
  const c = mn(), l = gn(c.breakpoints.down("md")), p = Oo(
    () => Wo(Tn(e)),
    [e]
  ), m = e === "dark", x = Ln({
    showSidebar: n,
    isMobile: l,
    sidebarVariant: o,
    sidebarSubmenu: r
  }), h = nr(r, o) ? {
    gutterPx: Mt,
    radiusPx: $n
  } : void 0, u = Zt, g = Nn(
    s,
    m
  ), _ = kn(
    a,
    m
  ), b = Dn(
    i,
    c
  ), y = /* @__PURE__ */ S(To, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(ze, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(re, { sx: { height: 8 } }),
    Array.from({ length: Oi }, (R, w) => /* @__PURE__ */ t(ze, { variant: "rounded", width: 28, height: 28 }, w))
  ] });
  return /* @__PURE__ */ S(pn, { theme: p, children: [
    /* @__PURE__ */ t(xn, {}),
    /* @__PURE__ */ S(
      re,
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
          l && /* @__PURE__ */ S(
            re,
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
                /* @__PURE__ */ t(re, { sx: { flexGrow: 1 } }),
                /* @__PURE__ */ t(ze, { variant: "circular", width: 32, height: 32 })
              ]
            }
          ),
          !l && x > 0 && /* @__PURE__ */ t(
            re,
            {
              sx: {
                position: "relative",
                width: x,
                flexShrink: 0
              },
              children: /* @__PURE__ */ t(
                re,
                {
                  sx: h ? {
                    position: "fixed",
                    top: h.gutterPx,
                    bottom: h.gutterPx,
                    left: h.gutterPx,
                    width: x - 2 * h.gutterPx,
                    borderRadius: `${h.radiusPx}px`,
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
          /* @__PURE__ */ S(
            re,
            {
              sx: {
                flexGrow: 1,
                minWidth: 0,
                p: b,
                mt: l ? `${u}px` : 0
              },
              children: [
                /* @__PURE__ */ t(ze, { variant: "text", width: 220, height: 40 }),
                /* @__PURE__ */ t(ze, { variant: "text", width: 320, sx: { mb: 3 } }),
                /* @__PURE__ */ t(To, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: l ? 2 : 4 }, (R, w) => /* @__PURE__ */ t(
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
    )
  ] });
};
class q extends Error {
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
}, ce = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, He = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Ai = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        He.ACCESS_TOKEN
      ), o = localStorage.getItem(
        He.REFRESH_TOKEN
      ), r = localStorage.getItem(He.USER);
      e && !localStorage.getItem(ce.ACCESS_TOKEN) && localStorage.setItem(ce.ACCESS_TOKEN, e), o && !localStorage.getItem(ce.REFRESH_TOKEN) && localStorage.setItem(
        ce.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(ce.USER) && localStorage.setItem(ce.USER, r), (e || o || r) && (localStorage.removeItem(He.ACCESS_TOKEN), localStorage.removeItem(He.REFRESH_TOKEN), localStorage.removeItem(He.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Io = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new q(
        "localStorage is not available",
        ne.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new q(
      "Storage quota exceeded. Please clear browser data.",
      ne.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new q(
      "Access to localStorage is denied. Please check browser settings.",
      ne.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new q(
      "Failed to access storage",
      ne.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, _o = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new q(
        "localStorage is not available",
        ne.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new q(
      "Storage quota exceeded. Please clear browser data.",
      ne.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new q(
      "Access to localStorage is denied. Please check browser settings.",
      ne.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new q(
      "Failed to write to storage",
      ne.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Fn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Lt = () => {
  try {
    Ai();
    const e = Io(ce.ACCESS_TOKEN), o = Io(ce.REFRESH_TOKEN), r = Io(ce.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), Fn(ce.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof q ? e : new q(
      "Failed to retrieve authentication tokens",
      ne.UNKNOWN_ERROR,
      e
    );
  }
}, $i = () => {
  try {
    const { accessToken: e, refreshToken: o } = Lt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new q(
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
      error: e instanceof q ? e : new q(
        "Authentication check failed",
        ne.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Bn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new q(
        "At least one token must be provided",
        ne.TOKEN_INVALID
      );
    return e && _o(ce.ACCESS_TOKEN, e), o && _o(ce.REFRESH_TOKEN, o), r && _o(ce.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof q ? n : new q(
        "Failed to store tokens",
        ne.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Nt = () => {
  try {
    return [
      ce.ACCESS_TOKEN,
      ce.REFRESH_TOKEN,
      ce.USER,
      // Also clear legacy keys for complete cleanup
      He.ACCESS_TOKEN,
      He.REFRESH_TOKEN,
      He.USER
    ].map((n) => Fn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof q ? e : new q(
        "Failed to clear tokens",
        ne.LOGOUT_FAILED,
        e
      )
    };
  }
}, Mi = () => {
  try {
    const { user: e } = Lt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof q ? e : new q(
        "Failed to retrieve user data",
        ne.UNKNOWN_ERROR,
        e
      )
    };
  }
}, bc = (e) => {
  if (!(e instanceof q))
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
}, ko = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof q ? e.code : "UNKNOWN",
    timestamp: e instanceof q ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof q && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, Di = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Mr.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, i = [];
  const s = (a, c) => {
    i.forEach(({ resolve: l, reject: p }) => {
      a ? p(a) : c && l(c);
    }), i = [];
  };
  return o.interceptors.request.use(
    (a) => {
      const { accessToken: c } = Lt();
      return c && a.headers && (a.headers.Authorization = `Bearer ${c}`), a;
    },
    (a) => Promise.reject(a)
  ), o.interceptors.response.use(
    (a) => a,
    async (a) => {
      var h;
      const c = a.config, l = (h = a.response) == null ? void 0 : h.status, p = (c == null ? void 0 : c.url) || "", m = p.includes("/auth/refresh");
      if (l !== 401 || c._retry || m)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: x } = Lt();
      if (!x) {
        const u = new Error(
          "No refresh token available for token refresh"
        );
        return ko(u, "AxiosClient - Token Refresh"), Nt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((u, g) => {
          i.push({ resolve: u, reject: g });
        }).then((u) => {
          const {
            accessToken: g,
            refreshToken: _
          } = u;
          if (c.headers && (c.headers.Authorization = `Bearer ${g}`), p.includes("/auth/logout"))
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
      r = !0, n = Mr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: x
        }
      );
      try {
        const u = await n, { accessToken: g, refreshToken: _ } = u.data;
        if (Bn(g, _, null), s(null, {
          accessToken: g,
          refreshToken: _
        }), c.headers && (c.headers.Authorization = `Bearer ${g}`), p.includes("/auth/logout"))
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
        return ko(
          u,
          "AxiosClient - Token Refresh Failed"
        ), s(u), Nt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(u);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Li = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Lt();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return Bn(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      ko(i, "TokenValidator - Refresh Failed");
    }
  return Nt(), o ? o() : window.location.href = "/login", !1;
}, At = ({ size: e = 20 }) => /* @__PURE__ */ S(
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
), Jr = Ee(jo), Ge = "#09C1AE", Qt = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ge} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), Ni = (e) => ({
  ...Qt(J, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${J - 2}px`,
    zIndex: 1,
    background: `${Dt(Ge, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), en = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: s = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = or(), l = d.useContext(ao), p = Fe().palette.mode === "dark", m = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", x = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ S(
    et,
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
        borderColor: r ? Ge : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Ge}`,
          outlineOffset: 2
        },
        ...n && Qt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(At, { size: 20 }),
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
        i && /* @__PURE__ */ t(_i, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && l ? /* @__PURE__ */ t(we, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    ve,
    {
      ...x,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: `${J}px`,
        ...Dt(Ge, p, "clear"),
        ...r && {
          boxShadow: `${Dt(Ge, p, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${Jr.duration}ms ${Jr.easing}, box-shadow 200ms ease`,
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
        ...n && Ni(p)
      },
      children: /* @__PURE__ */ t(At, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(we, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    ve,
    {
      ...x,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Ge : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Qt(8, "background.paper")
      },
      children: /* @__PURE__ */ t(At, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(we, { title: m, placement: "left", children: /* @__PURE__ */ t(
    ve,
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
        outline: r ? `2px solid ${Ge}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Ge}` },
        ...n && Qt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(O, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(At, { size: 26 }) })
    }
  ) });
}, qt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(gs, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ S(xs, { children: [
  /* @__PURE__ */ t(bs, { fontSize: "small" }),
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
    bn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, _t = 24, ki = 720, Fi = 1140, Bi = 1250, Wi = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: i,
  sidebarWidthPx: s,
  bottomOffsetPx: a,
  fullScreen: c,
  fullScreenBottom: l = "0px",
  onClose: p
}) => {
  d.useEffect(() => {
    if (!e || !p)
      return;
    const g = (_) => {
      _.key === "Escape" && p();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [e, p]);
  const m = r === "docked", x = _t + a;
  let h;
  c ? h = {
    top: 0,
    left: 0,
    right: 0,
    bottom: l,
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
    bottom: x,
    ...n === "left" ? { left: s + _t } : { right: _t },
    width: i,
    maxWidth: `calc(100vw - ${_t * 2}px)`,
    height: `min(${ki}px, calc(100vh - ${x + _t}px))`,
    borderRadius: "12px"
  };
  const u = /* @__PURE__ */ t(
    Ho,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? Fi : Bi,
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
  return m ? /* @__PURE__ */ t(vs, { direction: "left", in: e, mountOnEnter: !0, children: u }) : /* @__PURE__ */ t(
    ys,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: u
    }
  );
}, Pi = 180, tn = 250, zi = "#01584F", Gi = ({
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
}, Wn = (e, o, r, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : o, a = e ? zi : o;
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
}, Pn = ({ link: e }) => /* @__PURE__ */ S($e, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Gi,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), zn = (e, o, r) => r ? e : /* @__PURE__ */ t(we, { title: o, placement: "right", arrow: !0, children: e }), Hi = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: a
}) => {
  const c = Fe(), [l, p] = d.useState(null), [m, x] = d.useState(!1), h = d.useRef(
    null
  ), u = d.useRef(null), g = d.useRef(null), _ = d.useRef(!1), b = d.useRef(!1), y = d.useId(), R = () => {
    h.current && (clearTimeout(h.current), h.current = null);
  }, w = () => {
    R(), h.current = setTimeout(() => {
      x(!1), h.current = null;
    }, Pi);
  }, E = () => {
    R(), x(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const M = (D) => {
      var P;
      D.key === "Escape" && (x(!1), (P = g.current) == null || P.focus());
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [m]), d.useEffect(() => {
    if (!m || !b.current)
      return;
    const M = globalThis.requestAnimationFrame(() => {
      var P;
      const D = (P = u.current) == null ? void 0 : P.querySelector(
        '[role="menuitem"]'
      );
      D == null || D.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame(M);
  }, [m]);
  const I = Ve(e, o), { activeBg: v, sx: C } = Wn(
    i,
    n,
    I,
    a
  ), j = /* @__PURE__ */ t(
    ve,
    {
      ref: g,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        _.current || E();
      },
      onBlur: (M) => {
        var P;
        const D = M.relatedTarget;
        D && ((P = u.current) != null && P.contains(D)) || w();
      },
      onKeyDown: (M) => {
        M.key === "ArrowDown" && (M.preventDefault(), b.current = !0, E());
      },
      onClick: (M) => {
        M.preventDefault(), M.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? y : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: C,
      children: a ? /* @__PURE__ */ t(Pn, { link: e }) : e.icon
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
            ref: p,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              _.current = !0, E();
            },
            onMouseLeave: () => {
              _.current = !1, w();
            },
            children: zn(j, e.text, a)
          }
        ),
        /* @__PURE__ */ t(
          Go,
          {
            open: m && !!l,
            anchorEl: l,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (M) => M.zIndex.modal },
            children: /* @__PURE__ */ t(
              Ho,
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
                  maxWidth: tn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Uo,
                  {
                    id: y,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: tn
                    },
                    children: U(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function U(M, D, P) {
    return M.flatMap((L) => {
      const z = mt(D, L);
      return gt(L) ? [
        /* @__PURE__ */ t(
          Ss,
          {
            disableSticky: !0,
            title: L.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + P * 1.5,
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
          z
        ),
        ...U(L.subitems, z, P + 1)
      ] : [
        /* @__PURE__ */ S(
          Ze,
          {
            role: "menuitem",
            title: L.text,
            disabled: !L.path,
            selected: Ne(L, o),
            onClick: (te) => {
              te.preventDefault(), L.path && (r == null || r(L.path)), x(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + P * 1.5,
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
              L.icon ? /* @__PURE__ */ t(Se, { children: L.icon }) : null,
              /* @__PURE__ */ t(
                ke,
                {
                  primary: L.text,
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
}, Ui = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const a = !!(e.path && o === e.path), { sx: c } = Wn(
    i,
    n,
    a,
    s
  );
  return zn(
    /* @__PURE__ */ t(
      ve,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: c,
        children: s ? /* @__PURE__ */ t(Pn, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, Xi = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Qe, { sx: { width: "60%", borderColor: "divider" } })
  }
), Ki = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Qe, { sx: { width: "60%", borderColor: "divider" } })
  }
), on = (e, o) => e.map((r, n) => /* @__PURE__ */ S(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(Xi, {}) : null
] }, n)), ji = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: a = !1
}) => {
  const c = (p, m) => gt(p) ? /* @__PURE__ */ t(
    Hi,
    {
      link: p,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      surfaceBackgroundColor: s,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ t(
    Ui,
    {
      link: p,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      railShowTitles: a
    }
  ), l = a ? 1.25 : 1;
  return /* @__PURE__ */ S(
    $e,
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
        on(e, (p) => c(p, !1)),
        o.length > 0 ? /* @__PURE__ */ S(Ae, { children: [
          /* @__PURE__ */ t(Ki, {}),
          /* @__PURE__ */ t(O, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t($e, { gap: l, alignItems: "center", children: on(
            o,
            (p) => c(p, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Vi = (e) => e ? Rn(e) : "USER", Yi = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), rn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Fo = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, sr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Es,
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
    children: Yi(e)
  }
), Gn = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ S(Ae, { children: [
  /* @__PURE__ */ t(sr, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ S(
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
          ae,
          {
            variant: "body2",
            sx: { ...rn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            variant: "caption",
            sx: { ...rn, opacity: 0.8, color: "inherit" },
            children: Vi(o)
          }
        )
      ]
    }
  )
] }), nn = {
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
}, Hn = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: i,
  showNotifications: s,
  notificationCount: a,
  onNotificationsClick: c,
  userName: l = "User",
  userRole: p,
  userAvatar: m,
  menuItems: x = [],
  showSettings: h,
  onSettingsClick: u,
  showThemeToggler: g,
  theme: _,
  onThemeToggle: b,
  onLogout: y
}) => {
  const R = (w) => () => {
    o(), w == null || w();
  };
  return /* @__PURE__ */ S(
    Rs,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: nn[r].anchor,
      transformOrigin: nn[r].transform,
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
          $e,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              Gn,
              {
                name: l,
                role: p,
                avatar: m,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Qe, {}),
        s && /* @__PURE__ */ S(Ze, { onClick: R(c), children: [
          /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(Sn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ke, { children: "Notifications" }),
          /* @__PURE__ */ t(Fo, { count: a })
        ] }),
        x.map((w) => /* @__PURE__ */ S(Ze, { onClick: R(w.onClick), children: [
          w.icon && /* @__PURE__ */ t(Se, { children: w.icon }),
          /* @__PURE__ */ t(ke, { inset: !w.icon, children: w.label }),
          /* @__PURE__ */ t(Fo, { count: w.badge })
        ] }, w.key)),
        h && /* @__PURE__ */ S(Ze, { onClick: R(u), children: [
          /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(ws, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ke, { children: "Settings" })
        ] }),
        g && [
          /* @__PURE__ */ t(Qe, {}, "theme-divider"),
          /* @__PURE__ */ S(O, { sx: { px: 1.5, py: 1 }, children: [
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
            /* @__PURE__ */ S(
              Is,
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
                  /* @__PURE__ */ t(Dr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Dr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Qe, {}),
        /* @__PURE__ */ S(
          Ze,
          {
            onClick: R(y),
            sx: {
              color: _ === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(Se, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(vn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ke, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Un = 64, qi = 2, Ct = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: i,
  activeColor: s,
  activeBackground: a,
  ariaLabel: c,
  haspopup: l,
  isPage: p = !1,
  testId: m
}) => /* @__PURE__ */ S(
  et,
  {
    onClick: r,
    "aria-label": c ?? e,
    "aria-haspopup": l,
    "aria-expanded": l ? n : void 0,
    "aria-current": p && n ? "page" : void 0,
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
), Zi = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: s,
  assistantActive: a,
  showProfile: c,
  background: l,
  color: p,
  activeColor: m,
  activeBackground: x,
  pinnedLinks: h = [],
  activePath: u,
  onLinkClick: g,
  ..._
}) => {
  const b = h.filter((C) => C.path).slice(0, qi), [y, R] = d.useState(
    null
  ), { userName: w = "User", userAvatar: E, avatarColor: I } = _, v = { color: p, activeColor: m, activeBackground: x };
  return /* @__PURE__ */ S(
    Ho,
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
        height: `calc(${Un}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: l,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Ct,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(yn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...v
          }
        ),
        b.map((C) => /* @__PURE__ */ t(
          Ct,
          {
            label: C.text,
            icon: C.icon,
            onClick: () => g == null ? void 0 : g(C.path),
            active: Ve(C, u),
            isPage: !0,
            testId: `mobile-nav-link-${C.text}`,
            ...v
          },
          C.path
        )),
        i && /* @__PURE__ */ t(
          Ct,
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
                children: /* @__PURE__ */ t(At, { size: 18 })
              }
            ),
            onClick: s,
            active: a,
            testId: "mobile-nav-nexa",
            ...v
          }
        ),
        r && /* @__PURE__ */ t(
          Ct,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Xo, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...v
          }
        ),
        c && /* @__PURE__ */ S(Ae, { children: [
          /* @__PURE__ */ t(
            Ct,
            {
              label: "Account",
              ariaLabel: `Account menu for ${w}`,
              icon: /* @__PURE__ */ t(
                sr,
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
              ...v
            }
          ),
          /* @__PURE__ */ t(
            Hn,
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
}, Qi = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  _s,
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
    children: /* @__PURE__ */ S(
      $e,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(O, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            bn,
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
), Ji = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: i,
  brandMenuOpen: s,
  background: a,
  color: c,
  brandColor: l = c,
  endContent: p
}) => /* @__PURE__ */ t(
  Cs,
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
    children: /* @__PURE__ */ S(Os, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        ve,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: c },
          children: /* @__PURE__ */ t(yn, {})
        }
      ),
      /* @__PURE__ */ t(
        Jt,
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
      p ? /* @__PURE__ */ t(O, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: p }) : null
    ] })
  }
), ir = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const a = or(), c = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    we,
    {
      title: c,
      placement: i,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ t(
        ve,
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
            wn,
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
              children: /* @__PURE__ */ t(Sn, {})
            }
          )
        }
      )
    }
  );
}, Xn = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ea = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, sn = Ee(no), an = Ee(so), cn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', ta = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = Fe().palette.mode === "dark", a = xt(), c = d.useRef(null), l = d.useRef(null), p = (h) => {
    var u;
    h !== e && (o == null || o()), (u = (h === "light" ? c : l).current) == null || u.focus();
  }, m = (h) => {
    if (!(h.key === "Tab" || h.key === "Escape"))
      switch (h.stopPropagation(), h.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          h.preventDefault(), p(e === "light" ? "dark" : "light");
          break;
        case "Home":
          h.preventDefault(), p("light");
          break;
        case "End":
          h.preventDefault(), p("dark");
          break;
      }
  }, x = (h, u, g, _) => {
    const b = e === h;
    return /* @__PURE__ */ t(
      et,
      {
        ref: _,
        role: "radio",
        "aria-checked": b,
        "aria-label": u,
        tabIndex: b ? 0 : -1,
        onClick: () => p(h),
        "data-testid": `theme-segment-${h}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: i ? `${J}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? s ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...i && b ? tr(s, a) : {},
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
          ...Xn
        },
        children: /* @__PURE__ */ t(g, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ S(
    $e,
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
        x("light", "Light", As, c),
        x("dark", "Dark", Ts, l)
      ]
    }
  );
}, oa = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: i,
  userName: s,
  userEmail: a,
  roleLabel: c,
  accentColor: l,
  tint: p,
  showThemeToggler: m,
  theme: x,
  onThemeToggle: h,
  onProfileClick: u,
  onLinkClick: g,
  menuItems: _ = [],
  onLogout: b,
  glass: y = !1
}) => {
  const R = Fe(), w = R.palette.mode === "dark", E = d.useRef(null), I = Zo(R.palette.background.paper), v = rr({
    enabled: y,
    isDark: w,
    selector: cn,
    radius: J
  }), [C, j] = d.useState(null);
  d.useEffect(() => {
    if (!C || typeof ResizeObserver > "u")
      return;
    const L = new ResizeObserver(() => {
      var z;
      (z = E.current) == null || z.updatePosition();
    });
    return L.observe(C), () => L.disconnect();
  }, [C]);
  const U = (L) => {
    r(), L == null || L();
  }, M = (L) => {
    r(), L.onClick ? L.onClick() : L.path && (g == null || g(L.path));
  }, D = {
    borderRadius: y ? `${J}px` : "8px",
    py: 1,
    gap: 0.5
  }, P = /* @__PURE__ */ S($e, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ S(O, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ae, { noWrap: !0, sx: { fontWeight: 600 }, children: s }),
      a ? /* @__PURE__ */ t(
        ae,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: a
        }
      ) : null,
      c ? /* @__PURE__ */ t(
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
          children: c
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
    Ko,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: E,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...y ? {
        slots: { transition: zo },
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
      children: /* @__PURE__ */ S(
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
            [`& :is(${cn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...ea, width: n, minWidth: n },
          children: [
            y ? /* @__PURE__ */ t(
              bt,
              {
                isDark: w,
                solid: I,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Jo} ${sn.duration}ms ${sn.easing} both`,
                  [_e]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ S(
              O,
              {
                ...v.containerProps,
                sx: y ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${er} ${an.duration}ms ${an.easing} 70ms both`,
                  [_e]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  v.lens,
                  u ? /* @__PURE__ */ t(
                    et,
                    {
                      onClick: () => U(u),
                      "data-testid": "account-menu-header",
                      sx: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        transition: "background-color 150ms ease",
                        "& [data-hint]": { display: "none" },
                        "&:hover, &.Mui-focusVisible": {
                          bgcolor: p,
                          "& [data-hint]": { display: "block" },
                          "& [data-role]": { display: "none" }
                        },
                        ...Xn
                      },
                      children: P
                    }
                  ) : /* @__PURE__ */ t(O, { "data-testid": "account-menu-header", children: P }),
                  /* @__PURE__ */ t(Qe, {}),
                  m ? /* @__PURE__ */ S(
                    O,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...D,
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
                        /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t($s, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          ta,
                          {
                            glass: y,
                            mode: x,
                            onToggle: h,
                            accentColor: l,
                            tint: p
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ S(
                    Uo,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        _.map((L) => /* @__PURE__ */ S(
                          Ze,
                          {
                            onClick: () => M(L),
                            "data-testid": `menu-item-${L.key}`,
                            sx: D,
                            children: [
                              /* @__PURE__ */ t(Se, { children: L.icon }),
                              /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: L.label }),
                              /* @__PURE__ */ t(Fo, { count: L.badge })
                            ]
                          },
                          L.key
                        )),
                        b ? /* @__PURE__ */ t(Qe, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ S(
                          Ze,
                          {
                            onClick: () => U(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...D,
                              color: w ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(Se, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(vn, { fontSize: "small" }) }),
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
}, ra = {
  "&:focus, &:focus-visible": { outline: "none" }
}, na = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: i,
  title: s,
  onBrandClick: a,
  brandMenuOpen: c,
  brandColor: l,
  headerBackgroundColor: p,
  headerForegroundColor: m,
  activeAccentColor: x = "#01584f",
  groupAccentColor: h,
  activeForegroundColor: u,
  foregroundColor: g,
  surfaceBackgroundColor: _,
  flyoutSurfaceColor: b,
  collapsed: y,
  expandedWidth: R,
  collapsedWidth: w,
  topContent: E,
  submenuMode: I,
  color: v,
  hoverColor: C,
  avatarColor: j,
  showProfile: U = !0,
  userName: M = "User",
  userEmail: D,
  userRole: P,
  userAvatar: L,
  showNotifications: z = !0,
  notificationCount: te = 0,
  onNotificationsClick: pe,
  whatsNewCount: F = 0,
  onProfileClick: B,
  menuItems: G,
  onLogout: oe,
  theme: ie = "light",
  showThemeToggler: T = !0,
  onThemeToggle: W
}) => {
  const Z = Fe(), H = Z.palette.mode === "dark", k = _ ?? (H ? Z.palette.background.paper : "#ffffff"), Q = v ?? g ?? (H ? Z.palette.text.primary : x), le = C ?? h ?? eo(x), Ce = j ?? x, Xe = d.useRef(null), [me, fe] = d.useState(!1), ge = P ? Rn(P) : void 0, V = (tt) => /* @__PURE__ */ t(
    sr,
    {
      name: M,
      avatar: L,
      color: Ce,
      size: tt
    }
  ), de = te + F, xe = y && I === "flyout", Oe = z ? /* @__PURE__ */ t(
    ir,
    {
      count: de,
      onClick: pe,
      color: Q,
      hoverColor: le,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Me = U ? /* @__PURE__ */ S(
    et,
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
        ...ra
      },
      children: [
        y && !xe && z ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            wn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !de,
              children: V(36)
            }
          )
        ) : V(y ? 36 : 40),
        y ? null : /* @__PURE__ */ S(O, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Q, lineHeight: 1.3 },
              children: M
            }
          ),
          ge ? /* @__PURE__ */ t(
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
              children: ge
            }
          ) : null
        ] })
      ]
    }
  ) : null, Ke = !!Oe && (!y || xe || !Me);
  return /* @__PURE__ */ S(
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
          Do,
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
            headerBackgroundColor: p,
            headerForegroundColor: m,
            activeAccentColor: x,
            groupAccentColor: h,
            activeForegroundColor: u,
            foregroundColor: g,
            surfaceBackgroundColor: k,
            flyoutSurfaceColor: b,
            collapsed: y,
            expandedWidth: R,
            collapsedWidth: w,
            topContent: E,
            footer: Me || Ke ? /* @__PURE__ */ S(
              $e,
              {
                direction: xe ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  xe && Ke ? Oe : null,
                  Me,
                  !xe && Ke ? Oe : null
                ]
              }
            ) : void 0,
            submenuMode: I
          }
        ),
        U ? /* @__PURE__ */ t(
          oa,
          {
            open: me,
            anchorEl: Xe.current,
            onClose: () => fe(!1),
            width: Math.max(R - 16, 240),
            renderAvatar: V,
            userName: M,
            userEmail: D,
            roleLabel: ge,
            accentColor: x,
            tint: le,
            showThemeToggler: T,
            theme: ie,
            onThemeToggle: W,
            onProfileClick: B,
            onLinkClick: n,
            menuItems: G,
            onLogout: oe,
            glass: I === "flyout"
          }
        ) : null
      ]
    }
  );
}, ln = Ee(no), dn = Ee(so), un = 260, sa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, ia = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: a = !1
}) => {
  const c = Fe(), l = c.palette.mode === "dark", p = !!e, m = Zo(c.palette.background.paper), x = rr({
    enabled: a,
    isDark: l,
    selector: ".MuiMenuItem-root",
    radius: J
  }), h = /* @__PURE__ */ t(
    Uo,
    {
      autoFocusItem: p,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((u) => {
        const g = u.key === n, _ = u.accentColor ?? s;
        return /* @__PURE__ */ S(
          Ze,
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
              /* @__PURE__ */ t(Se, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
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
                ke,
                {
                  primary: u.name,
                  secondary: u.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              g ? /* @__PURE__ */ t(
                Ms,
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
    Ko,
    {
      open: p,
      anchorEl: e,
      onClose: o,
      onClick: (u) => u.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: zo },
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
            minWidth: un,
            borderRadius: `${J}px`
          } : { ...sa, minWidth: un },
          children: a ? /* @__PURE__ */ S(Ae, { children: [
            /* @__PURE__ */ t(
              bt,
              {
                isDark: l,
                solid: m,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Jo} ${ln.duration}ms ${ln.easing} both`,
                  [_e]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ S(
              O,
              {
                ...x.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${er} ${dn.duration}ms ${dn.easing} 70ms both`,
                  [_e]: { animation: "none" }
                },
                children: [
                  x.lens,
                  h
                ]
              }
            )
          ] }) : h
        }
      )
    }
  );
}, aa = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), i = !!(o && n.current && o.contains(n.current));
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
          ia,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, ca = ({
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
    onNotificationsClick: p,
    userName: m = "User",
    userRole: x,
    userAvatar: h
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
  return /* @__PURE__ */ S(Ae, { children: [
    /* @__PURE__ */ S(
      $e,
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
                et,
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
                    Gn,
                    {
                      name: m,
                      role: x,
                      avatar: h,
                      avatarColor: a,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          c && /* @__PURE__ */ t(
            ir,
            {
              count: l + i,
              onClick: p,
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
      Hn,
      {
        anchorEl: g,
        onClose: () => _(null),
        placement: e ? "beside" : "above",
        width: e || (w = u.current) == null ? void 0 : w.clientWidth,
        ...s
      }
    )
  ] });
}, la = 120, da = 300, fn = Ee(no), hn = Ee(so), ua = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, fa = 'input, textarea, [contenteditable="true"]', Bo = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(fa)) == null || o.focus();
}, ha = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: s,
  hoverColor: a
}) => {
  const c = or(), l = d.useContext(ao), p = d.useRef(null), [m, x] = d.useState(null);
  return d.useEffect(() => {
    o === "full" && n && (Bo(p.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    O,
    {
      ref: p,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && l ? /* @__PURE__ */ t(
    pa,
    {
      search: e,
      color: s,
      railTooltip: c
    }
  ) : /* @__PURE__ */ S(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(we, { title: "Search", placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
          ve,
          {
            "aria-label": "Search",
            onClick: (h) => o === "expand" ? r == null ? void 0 : r() : x(h.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: s,
              borderRadius: "8px",
              "&:hover": { bgcolor: a }
            },
            children: /* @__PURE__ */ t(Xo, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Ko,
          {
            open: !!m,
            anchorEl: m,
            onClose: () => x(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (h) => Bo(h)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, pa = ({ search: e, color: o, railTooltip: r }) => {
  const n = Fe().palette.mode === "dark";
  Gs(n, $o(o, n ? 0.3 : 0.35));
  const i = `rgb(${xt()})`, s = Zo(n ? "#1e2430" : "#ffffff"), a = {
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
  }, c = d.useRef(null), l = d.useRef(null), [p, m] = d.useState(!1), x = d.useRef(!1), h = d.useRef(void 0), u = d.useRef(void 0), g = () => {
    clearTimeout(h.current), clearTimeout(u.current);
  }, _ = d.useCallback(() => {
    g(), x.current = !1, m(!1);
  }, []), b = () => {
    clearTimeout(u.current), p || (clearTimeout(h.current), h.current = setTimeout(
      () => m(!0),
      la
    ));
  }, y = () => {
    clearTimeout(h.current), clearTimeout(u.current), u.current = setTimeout(() => {
      !x.current && !ua(l.current) && m(!1);
    }, da);
  };
  return d.useEffect(() => g, []), d.useEffect(() => {
    if (!p)
      return;
    const R = setTimeout(() => Bo(l.current)), w = (I) => {
      var C, j;
      const v = I.target;
      !((C = l.current) != null && C.contains(v)) && !((j = c.current) != null && j.contains(v)) && _();
    }, E = (I) => {
      var v;
      I.key === "Escape" && (_(), (v = c.current) == null || v.focus());
    };
    return document.addEventListener("pointerdown", w), document.addEventListener("keydown", E), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", w), document.removeEventListener("keydown", E);
    };
  }, [p, _]), /* @__PURE__ */ S(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          we,
          {
            title: p ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              ve,
              {
                ref: c,
                "aria-label": "Search",
                "aria-expanded": p,
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
                children: /* @__PURE__ */ t(Xo, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Go,
          {
            open: p,
            anchorEl: c.current,
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
                    bt,
                    {
                      isDark: n,
                      solid: s,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${Jo} ${fn.duration}ms ${fn.easing} both`,
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
                        animation: `${er} ${hn.duration}ms ${hn.easing} 60ms both`,
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
}, ma = 100, ga = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = d.useState(!1), [s, a] = d.useState(!1), c = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const p = (x) => {
      r.current.has(x) || (c(), i(!1));
    }, m = () => {
      c(), i(!1);
    };
    return document.addEventListener("mouseover", p), document.documentElement.addEventListener("mouseleave", m), () => {
      c(), document.removeEventListener("mouseover", p), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), d.useEffect(() => {
    if (!s)
      return;
    const p = (m) => {
      var x;
      (x = e.current) != null && x.contains(m.target) || a(!1);
    };
    return document.addEventListener("pointerdown", p), () => document.removeEventListener("pointerdown", p);
  }, [s]), {
    expanded: n || s,
    pin: () => a(!0),
    rootProps: {
      ref: e,
      onMouseOver: (p) => {
        r.current.add(p.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, i(!0);
        }, ma));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (p) => {
        const m = p.relatedTarget;
        m && !p.currentTarget.contains(m) && a(!1);
      },
      onKeyDown: (p) => {
        p.key === "Escape" && a(!1);
      }
    }
  };
}, xa = 300, Co = 288, ba = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", ya = 68, va = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), yc = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: a = "rail",
  sidebarSubmenu: c = "expand",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: p,
  logo: m,
  onBrandClick: x,
  searchComponent: h,
  brandColor: u,
  contentPadding: g = Mn,
  userMenuItems: _,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: R,
  activeSidebarForegroundColor: w,
  enableRefreshToken: E = !1,
  holdSessionSkeleton: I = !1,
  activePath: v,
  onLinkClick: C,
  showProfile: j = !0,
  userName: U,
  userRole: M,
  userAvatar: D,
  userEmail: P,
  onLogout: L,
  showSettings: z = !0,
  onSettingsClick: te,
  onProfileClick: pe,
  showNotifications: F = !0,
  notificationCount: B = 0,
  NotificationSidebarContent: G,
  whatsNewCount: oe = 0,
  onNotificationsClick: ie,
  platforms: T,
  currentPlatformKey: W,
  onPlatformSelect: Z,
  onVerify: H,
  alertProps: k,
  style: Q,
  sidebarStyles: le,
  contentStyles: Ce,
  accentColor: Xe,
  sidebarAccentColor: me,
  sidebarForegroundColor: fe,
  contentBackgroundColor: ge,
  theme: V = "light",
  showThemeToggler: de = !1,
  onThemeToggle: xe,
  GlobalChatSidebar: Oe,
  useChatSidebar: Me,
  chatPanelMode: Ke = "docked",
  chatPanelPosition: Ft = "right",
  chatPanelWidth: tt = 420,
  onChatClose: co,
  showAssistant: ot = !1,
  assistantPlacement: yt = "sidebar",
  assistantShortcut: Bt = "j",
  onAssistantClick: rt,
  assistantActive: lt = !1,
  assistantBusy: vt = !1,
  customNavbar: Wt,
  customNavbarProps: lo,
  redirectToLogin: dt,
  apiBaseUrl: ut
}) => {
  const f = mn(), A = gn(f.breakpoints.down("md")), Y = Oo(
    () => Wo(Tn(V)),
    [V]
  ), N = V === "dark", X = Xe ?? "#01584f", K = me ?? X, ue = kn(
    ge,
    N
  ), ee = a === "collapsible", be = a === "panel", uo = be && i && !A, nt = a === "rail-labeled", Kn = ee || nt, De = Nn(
    b,
    N
  ), fo = y ?? De, Be = fe ?? (N ? "#ffffff" : K), St = R ?? eo(Be), wt = y ? Ao(fo) : Be, ar = ($) => /* @__PURE__ */ t(
    re,
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
  ), Pt = u ?? wt, [cr, ho] = it(
    null
  ), po = ((T == null ? void 0 : T.length) ?? 0) > 1, jn = Ar(() => ho(null), []), Vn = ($) => {
    ho(null), Z ? Z($) : $.key !== W && $.url && window.location.assign($.url);
  }, lr = ($) => po ? /* @__PURE__ */ t(
    aa,
    {
      anchorEl: cr,
      onClose: jn,
      platforms: T,
      currentKey: W,
      onSelect: Vn,
      accentColor: X,
      glass: c === "flyout" && (ee || be) && !A,
      children: $
    }
  ) : $, zt = po ? ($) => ho($.currentTarget) : x, Gt = po ? !!cr : void 0, mo = lr(
    m ?? ar(Pt)
  ), Yn = lr(
    m ?? ar(u ?? Be)
  ), go = ga(), We = nr(c, a), Le = We || !go.expanded, dr = We ? "popover" : "expand", ur = We ? No : Tt, fr = We ? "transparent" : De, hr = We && !y ? "transparent" : fo, [qn, pr] = it(!1), Zn = Ar(() => pr(!1), []), Pe = Ln({
    showSidebar: i,
    isMobile: A,
    sidebarVariant: a,
    sidebarSubmenu: c
  }), [mr, st] = it(!1), [gr, xo] = it(!1), ye = A && l === "bottom-bar", xr = `calc(${Un}px + env(safe-area-inset-bottom, 0px))`, [bo, br] = it({ open: !1, tab: "notifications" }), yr = () => br(($) => ({ ...$, open: !1 })), Qn = F && !!G, [Jn, es] = it(!0), [ts, os] = it(!1), yo = Me == null ? void 0 : Me(), vr = (yo == null ? void 0 : yo.isOpen) ?? !1, Sr = Ke === "floating" ? "floating" : "docked", rs = Sr === "docked" && vr && Oe && !A ? tt : 0, Ht = Ro(H), wr = Ro(!1), Er = Oo(
    () => Di(ut),
    [ut]
  );
  Kt(() => {
    Ht.current = H;
  }, [H]);
  const vo = Ro(rt);
  vo.current = rt;
  const Et = ot && Bt ? Bt.toLowerCase() : null;
  Kt(() => {
    if (!Et)
      return;
    const $ = (se) => {
      (se.metaKey || se.ctrlKey) && !se.altKey && !se.shiftKey && se.key.toLowerCase() === Et && vo.current && (se.preventDefault(), vo.current());
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [Et]);
  const Rr = ($) => {
    const se = L($);
    se instanceof Promise && se.catch((je) => {
      console.error("Error in logout handler:", je);
    });
  };
  if (Kt(() => {
    (() => {
      var se;
      try {
        const { isAuthenticated: je } = $i();
        if (!je) {
          console.log("No session found, redirecting to login"), Nt(), dt();
          return;
        }
        if (!wr.current) {
          const { user: It, error: Eo } = Mi();
          if (It && !Eo) {
            const us = {
              name: It.name || "",
              email: It.email || "",
              profilePicture: It.profilePicture || "",
              role: It.role || ""
            };
            wr.current = !0, (se = Ht.current) == null || se.call(Ht, us);
          } else
            Eo && console.error("Error getting user data:", Eo);
        }
        os(!0);
      } catch (je) {
        console.error("Error checking session:", je), Nt(), dt();
      } finally {
        es(!1);
      }
    })();
  }, [dt]), Kt(() => {
    E && Li(Er, dt);
  }, [E, Er]), Jn || I)
    return /* @__PURE__ */ t(
      Ti,
      {
        theme: V,
        sidebarVariant: a,
        sidebarSubmenu: c,
        showSidebar: i,
        contentPadding: g,
        sidebarBackgroundColor: b,
        contentBackgroundColor: ge
      }
    );
  if (!ts)
    return null;
  const Rt = h ?? (Wt ? /* @__PURE__ */ t(Wt, { ...lo }) : null), ns = ($) => {
    st(!1), xo(!1), br({ open: !0, tab: $ });
  }, So = G && (() => ns("notifications")), ss = B + oe, Ir = {
    avatarColor: K,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: _ == null ? void 0 : _.map(
      ($) => $.onClick || !$.path ? $ : { ...$, onClick: () => C == null ? void 0 : C($.path) }
    ),
    showNotifications: F,
    notificationCount: B,
    whatsNewCount: oe,
    onNotificationsClick: So,
    showProfile: j,
    userName: U,
    userRole: M,
    userAvatar: D,
    showSettings: z,
    onSettingsClick: te,
    showThemeToggler: de,
    theme: V,
    onThemeToggle: xe,
    onLogout: Rr
  }, wo = ($) => /* @__PURE__ */ t(
    ca,
    {
      ...Ir,
      compact: $,
      color: Be,
      hoverColor: St
    }
  ), _r = Et ? [va() ? "⌘" : "Ctrl", Et.toUpperCase()] : void 0, is = ($) => ot && yt === "sidebar" ? /* @__PURE__ */ t(
    en,
    {
      variant: $ ? "sidebar-icon" : "sidebar",
      onClick: rt,
      active: lt,
      busy: vt,
      shortcutKeys: _r,
      accentColor: Be
    }
  ) : null, as = ($) => Rt ? /* @__PURE__ */ t(
    ha,
    {
      search: Rt,
      mode: $,
      onExpand: () => {
        go.pin(), pr(!0);
      },
      autoFocus: qn,
      onAutoFocused: Zn,
      color: Be,
      hoverColor: St
    }
  ) : null, Ut = ($) => {
    const se = is($ !== "full"), je = as($);
    return se || je ? /* @__PURE__ */ S(
      To,
      {
        spacing: 1.5,
        sx: { alignItems: $ === "full" ? "stretch" : "center" },
        children: [
          se,
          je
        ]
      }
    ) : void 0;
  }, Cr = () => /* @__PURE__ */ t(
    Do,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: v,
      onLinkClick: C,
      showHeaderBar: ee,
      logo: mo,
      title: n,
      onBrandClick: zt,
      brandMenuOpen: Gt,
      brandColor: Pt,
      headerBackgroundColor: ee ? hr : void 0,
      headerForegroundColor: ee ? wt : void 0,
      activeAccentColor: K,
      groupAccentColor: R,
      activeForegroundColor: w,
      foregroundColor: fe,
      surfaceBackgroundColor: fr,
      flyoutSurfaceColor: De,
      collapsed: nt || Le,
      showLabels: nt,
      expandedWidth: Co,
      collapsedWidth: nt ? An : ur,
      topContent: Ut(
        nt ? "popover" : Le ? dr : "full"
      ),
      footer: wo(nt || Le),
      submenuMode: We ? "flyout" : "inline"
    }
  ), Or = ($) => We ? cs($) : ls($), cs = ($) => /* @__PURE__ */ t(
    re,
    {
      component: "aside",
      sx: {
        width: Pe,
        minWidth: Pe,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (se) => se.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: ue
      },
      children: /* @__PURE__ */ S(
        re,
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
            width: No,
            borderRadius: `${$n}px`,
            display: "flex",
            flexDirection: "column",
            ...le
          },
          children: [
            /* @__PURE__ */ t(
              bt,
              {
                isDark: N,
                solid: De,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              re,
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
  ), ls = ($) => /* @__PURE__ */ t(
    re,
    {
      component: "aside",
      sx: {
        width: Tt,
        minWidth: Tt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (se) => se.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        re,
        {
          ...We ? {} : go.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Le ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Le ? Tt : Co,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: De,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Le ? "none" : `4px 0 24px rgba(0, 0, 0, ${N ? 0.5 : 0.12})`,
            transition: ba,
            ...le
          },
          children: $
        }
      )
    }
  ), ds = Dn(
    g,
    f
  );
  return /* @__PURE__ */ t(pn, { theme: Y, children: /* @__PURE__ */ t(In.Provider, { value: K, children: /* @__PURE__ */ t(kt.Provider, { value: De, children: /* @__PURE__ */ S(
    re,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Q
      },
      children: [
        /* @__PURE__ */ t(xn, {}),
        A && /* @__PURE__ */ t(
          Ji,
          {
            height: Zt,
            onMenuClick: i && !ye ? () => st(!0) : void 0,
            appName: n,
            logo: mo,
            onBrandClick: zt,
            brandMenuOpen: Gt,
            background: fo,
            color: wt,
            brandColor: Pt,
            endContent: F ? /* @__PURE__ */ t(
              ir,
              {
                count: ss,
                onClick: So,
                color: wt,
                hoverColor: St,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !A && nt && /* @__PURE__ */ t(
          re,
          {
            component: "aside",
            sx: {
              width: Pe,
              minWidth: Pe,
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
            children: Cr()
          }
        ),
        i && !A && ee && Or(
          /* @__PURE__ */ S(Ae, { children: [
            Cr(),
            (k == null ? void 0 : k.show) && !Le && /* @__PURE__ */ t(qt, { ...k })
          ] })
        ),
        uo && Or(
          /* @__PURE__ */ S(Ae, { children: [
            /* @__PURE__ */ t(
              na,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: v,
                onLinkClick: C,
                logo: mo,
                title: n,
                onBrandClick: zt,
                brandMenuOpen: Gt,
                brandColor: Pt,
                headerBackgroundColor: hr,
                headerForegroundColor: wt,
                activeAccentColor: K,
                groupAccentColor: R,
                activeForegroundColor: w,
                foregroundColor: fe,
                surfaceBackgroundColor: fr,
                flyoutSurfaceColor: De,
                collapsed: Le,
                expandedWidth: Co,
                collapsedWidth: ur,
                topContent: Ut(
                  Le ? dr : "full"
                ),
                submenuMode: We ? "flyout" : "inline",
                color: Be,
                hoverColor: St,
                avatarColor: K,
                showProfile: j,
                userName: U,
                userEmail: P,
                userRole: M,
                userAvatar: D,
                showNotifications: F,
                notificationCount: B,
                onNotificationsClick: Qn ? So : ie,
                whatsNewCount: oe,
                onProfileClick: pe,
                menuItems: _,
                onLogout: Rr,
                theme: V,
                showThemeToggler: de,
                onThemeToggle: xe
              }
            ),
            (k == null ? void 0 : k.show) && !Le && /* @__PURE__ */ t(qt, { ...k })
          ] })
        ),
        i && !A && !Kn && !be && /* @__PURE__ */ t(
          $r,
          {
            variant: "permanent",
            sx: {
              width: Pe,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Pe,
                boxSizing: "border-box",
                bgcolor: ue,
                borderRight: "none"
              },
              ...le
            },
            children: /* @__PURE__ */ S(
              re,
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
                    re,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        Jt,
                        {
                          logo: Yn,
                          appName: n,
                          onClick: zt,
                          menuOpen: Gt,
                          color: u ?? Be,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Ut("popover"),
                  /* @__PURE__ */ S(
                    re,
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
                          ji,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: v,
                            onLinkClick: C,
                            accentColor: K,
                            surfaceBackgroundColor: ue,
                            railShowTitles: s
                          }
                        ),
                        (k == null ? void 0 : k.show) && /* @__PURE__ */ t(qt, { ...k })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(re, { sx: { py: 1.5 }, children: wo(!0) })
                ]
              }
            )
          }
        ),
        i && A && /* @__PURE__ */ S(
          ms,
          {
            anchor: ye ? "bottom" : "left",
            open: mr,
            onOpen: () => st(!0),
            onClose: () => st(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: ($) => $.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: De,
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
                re,
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
                Do,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: v,
                  onLinkClick: ($) => {
                    C == null || C($), st(!1);
                  },
                  onLinkAction: () => st(!1),
                  collapsed: !1,
                  expandedWidth: ye ? "100%" : xa,
                  activeAccentColor: K,
                  groupAccentColor: R,
                  activeForegroundColor: w,
                  foregroundColor: fe,
                  surfaceBackgroundColor: De,
                  topInsetPx: ye ? 8 : 0,
                  topContent: ye ? void 0 : Ut("full"),
                  footer: ye ? void 0 : wo(!1)
                }
              ),
              (k == null ? void 0 : k.show) && /* @__PURE__ */ t(qt, { ...k })
            ]
          }
        ),
        ye && Rt && /* @__PURE__ */ t(
          Qi,
          {
            open: gr,
            onClose: () => xo(!1),
            search: Rt
          }
        ),
        ye && /* @__PURE__ */ t(
          Zi,
          {
            ...Ir,
            pinnedLinks: p,
            activePath: v,
            onLinkClick: C,
            onMenuClick: i ? () => st(!0) : void 0,
            menuOpen: mr,
            onSearchClick: Rt ? () => xo(!0) : void 0,
            searchOpen: gr,
            showAssistant: ot,
            onAssistantClick: rt,
            assistantActive: lt,
            showProfile: j,
            background: De,
            color: Be,
            activeColor: K,
            activeBackground: St
          }
        ),
        /* @__PURE__ */ t(
          re,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": ds,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": A ? `${Zt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Pe ? `calc(100% - ${Pe}px)` : "100%",
              mt: A ? `${Zt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ye && {
                pb: `calc(var(--lumora-content-padding) + ${xr})`
              },
              backgroundColor: ue,
              ...Ce
            },
            children: e
          }
        ),
        Oe && /* @__PURE__ */ t(
          Wi,
          {
            open: vr,
            variant: Sr,
            position: Ft,
            width: tt,
            sidebarWidthPx: Pe,
            bottomOffsetPx: ot && yt === "floating" ? ya : 0,
            fullScreen: A,
            fullScreenBottom: ye ? xr : "0px",
            onClose: co,
            children: /* @__PURE__ */ t(Oe, {})
          }
        ),
        ot && yt === "floating" && !ye && /* @__PURE__ */ t(
          en,
          {
            variant: "floating",
            rightOffsetPx: rs,
            shortcutKeys: _r,
            onClick: rt,
            active: lt,
            busy: vt
          }
        ),
        F && G && /* @__PURE__ */ t(
          $r,
          {
            anchor: "right",
            open: bo.open,
            onClose: yr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              G,
              {
                onClose: yr,
                initialTab: bo.tab
              },
              bo.tab
            )
          }
        )
      ]
    }
  ) }) }) });
};
export {
  ne as AUTH_ERROR_CODES,
  q as AuthError,
  Do as CollapsibleSidebar,
  xc as FullBleedSection,
  _i as Kbd,
  Ti as LumoraShellSkeleton,
  yc as LumoraWrapper,
  Nt as clearAuthTokens,
  yc as default,
  bc as getAuthErrorMessage,
  Lt as getAuthTokens,
  Mi as getCurrentUser,
  Tn as getDesignTokens,
  $i as isAuthenticated,
  ko as logAuthError,
  Bn as storeAuthTokens
};
