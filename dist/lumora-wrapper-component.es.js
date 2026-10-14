import { jsx as t, jsxs as E, Fragment as Me } from "react/jsx-runtime";
import Qn from "@mui/icons-material/KeyboardArrowDownRounded";
import Jn from "@mui/icons-material/KeyboardArrowUpRounded";
import es from "@mui/icons-material/ChevronRightRounded";
import _ from "@mui/material/Box";
import Rr from "@mui/material/Collapse";
import Qe from "@mui/material/Divider";
import be from "@mui/material/IconButton";
import Ut from "@mui/material/ListItemButton";
import ye from "@mui/material/ListItemIcon";
import Be from "@mui/material/ListItemText";
import De from "@mui/material/Stack";
import Se from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as We, createTheme as fn, alpha as it, ThemeProvider as Ir } from "@mui/material/styles";
import * as d from "react";
import { useMemo as Cr, useState as nt, useCallback as _r, useRef as vo, useEffect as Xt } from "react";
import et from "@mui/material/ButtonBase";
import { keyframes as ko } from "@emotion/react";
import Fo from "@mui/material/Fade";
import Bo from "@mui/material/Popper";
import { useTheme as ts, useMediaQuery as os, Box as ue, CircularProgress as rs, CssBaseline as ns, Drawer as Or, SwipeableDrawer as ss, Stack as is } from "@mui/material";
import Tr from "axios";
import as from "@mui/material/Card";
import cs from "@mui/material/CardContent";
import hn from "@mui/material/Button";
import ls from "@mui/icons-material/AutoAwesomeRounded";
import ds from "@mui/material/Grow";
import Wo from "@mui/material/Paper";
import us from "@mui/material/Slide";
import fs from "@mui/material/ListSubheader";
import Ze from "@mui/material/MenuItem";
import Po from "@mui/material/MenuList";
import pn from "@mui/icons-material/MenuRounded";
import zo from "@mui/icons-material/SearchRounded";
import mn from "@mui/icons-material/LogoutRounded";
import gn from "@mui/icons-material/NotificationsNoneOutlined";
import hs from "@mui/icons-material/SettingsOutlined";
import ps from "@mui/material/Avatar";
import ms from "@mui/material/Menu";
import Ar from "@mui/material/ToggleButton";
import gs from "@mui/material/ToggleButtonGroup";
import xs from "@mui/material/Drawer";
import bs from "@mui/material/AppBar";
import ys from "@mui/material/Toolbar";
import xn from "@mui/material/Badge";
import Ss from "@mui/icons-material/DarkModeOutlined";
import vs from "@mui/icons-material/LightModeOutlined";
import ws from "@mui/icons-material/SettingsBrightnessOutlined";
import Go from "@mui/material/Popover";
import Es from "@mui/icons-material/CheckRounded";
const Qt = ({
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
  }, l = /* @__PURE__ */ E(Me, { children: [
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
  ) : /* @__PURE__ */ t(De, { direction: "row", "data-testid": s, sx: c, children: l });
}, $r = !1, ro = { stiffness: 320, damping: 24 }, Ho = { stiffness: 520, damping: 20 }, bn = { stiffness: 380, damping: 36 }, no = { stiffness: 260, damping: 28 }, Rs = "cubic-bezier(0.32, 1.28, 0.52, 1)", Is = 420, Mr = 60, Cs = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Dr = /* @__PURE__ */ new Map(), ve = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = Dr.get(n);
  if (i)
    return i;
  if (!Cs)
    return { easing: Rs, duration: Is };
  const s = 1 / 600;
  let a = 0, c = 0, l = 0, h = 1 / Mr;
  const m = [0];
  for (; l < 3; ) {
    const p = (-e * (a - 1) - o * c) / r;
    if (c += p * s, a += c * s, l += s, l >= h && (m.push(a), h += 1 / Mr, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const x = {
    easing: `linear(${m.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(l * 1e3)
  };
  return Dr.set(n, x), x;
}, Je = (e) => !!(e && typeof e.animate == "function"), He = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Kt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, _s = (e, o = 1.14) => {
  if (!Je(e) || He())
    return;
  const r = ve(Ho);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, pt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, ht = (e, o) => e ? `${e}/${o.text}` : o.text, Ve = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Ve(n, o))) ?? !1 : !1;
}, Fe = (e, o) => !!(o && e.path === o), Uo = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return pt(r) ? Uo(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), _o = (e) => {
  const o = so(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, Jt = (e) => {
  const o = so(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, Oo = (e, o) => {
  const r = so(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, so = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, yn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Xo = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Os = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Ts = ko`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ie = "@media (prefers-reduced-motion: reduce)", Z = 6, Ko = "9, 193, 174", To = d.createContext(
  void 0
), mt = d.createContext(
  void 0
), jo = (e) => d.useContext(mt) ?? e, gt = () => {
  const e = d.useContext(To), o = e ? so(e) : null;
  return o ? o.join(", ") : Ko;
}, Lr = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, As = (e, o) => e ? "255, 255, 255" : o, $s = (e, o, r = Ko) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${Os(e)}, 0 0 0 1px ${Xo(e)}`
}), Ms = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", Vo = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: Xo(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${Z}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), Yo = ko`
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
`, qo = ko`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Zo = (e, o = Ko, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Lt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: Oo(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${Oo(e, 0.45)}`
}, Ds = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${Xo(e)}`;
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
}, eo = "data-rail-item", Ls = `[${eo}], button, [role="button"]`, io = d.createContext(!1), Qo = () => {
  const e = d.useContext(io), o = We(), r = d.useContext(mt);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: Vo(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ye = ve(bn), Jo = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  lean: s = 3
}) => {
  const a = d.useRef(null), c = gt(), [l, h] = d.useState(null), m = d.useRef(null), x = d.useRef(null), p = (v, w) => {
    x.current = w;
    const S = w.getBoundingClientRect(), T = v.getBoundingClientRect(), j = n ?? S.width, X = n ?? S.height, $ = {
      top: Math.round(S.top - T.top + (S.height - X) / 2),
      left: Math.round(S.left - T.left + (S.width - j) / 2),
      width: Math.round(j),
      height: Math.round(X)
    };
    h(
      (M) => M && M.visible && M.top === $.top && M.left === $.left && M.width === $.width && M.height === $.height ? M : { ...$, visible: !0, instant: !(M != null && M.visible) }
    );
  }, f = (v, w) => {
    var T;
    const S = (T = w == null ? void 0 : w.closest) == null ? void 0 : T.call(w, r);
    return S && v.contains(S) ? S : null;
  }, g = (v) => {
    if (!e)
      return;
    const w = f(v.currentTarget, v.target);
    w && p(v.currentTarget, w);
  }, C = (v) => {
    if (!e)
      return;
    const w = f(v.currentTarget, v.target);
    w && v.target.matches(":focus-visible") && p(v.currentTarget, w);
  }, b = (v) => {
    const w = a.current, S = x.current;
    if (!e || !w || !S || !s || He())
      return;
    const T = S.getBoundingClientRect(), j = (X, $) => Math.max(-1, Math.min(1, X / ($ / 2))) * s;
    w.style.transform = `translate(${j(v.clientX - (T.left + T.width / 2), T.width)}px, ${j(v.clientY - (T.top + T.height / 2), T.height)}px)`;
  }, y = () => {
    x.current = null, a.current && (a.current.style.transform = ""), h((v) => v != null && v.visible ? { ...v, visible: !1 } : v);
  }, I = (v) => {
    const w = v.relatedTarget;
    (!w || !v.currentTarget.contains(w)) && (v.currentTarget.matches(":hover") || y());
  };
  return d.useEffect(() => {
    const v = a.current;
    if (!(l != null && l.visible)) {
      m.current = null;
      return;
    }
    const w = m.current;
    if (m.current = l.top, !Je(v) || He())
      return;
    if (w === null || l.instant) {
      v.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ye.duration,
        easing: Ye.easing
      });
      return;
    }
    const S = Math.min(Math.abs(l.top - w) / 600, 0.08);
    S && v.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - S / 2} ${1 + S}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ye.duration, easing: "ease-out" }
    );
  }, [l == null ? void 0 : l.top, l == null ? void 0 : l.visible, l == null ? void 0 : l.instant]), {
    lens: e && l ? /* @__PURE__ */ t(
      _,
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...Zo(o, c),
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
          [Ie]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: g,
      onMouseMove: b,
      onMouseLeave: y,
      onFocus: C,
      onBlur: I,
      onScrollCapture: y
    } : {}
  };
}, Ns = (e, o) => {
  const r = Jo({
    enabled: e,
    isDark: o,
    selector: Ls,
    size: 46,
    radius: Z
  });
  return {
    ...r,
    lens: r.lens ? d.cloneElement(r.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, ks = (e, o) => {
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
}, Fs = ({
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
        `[${eo}][data-active="true"]`
      );
      if (!p) {
        a(
          (g) => g != null && g.visible ? { ...g, visible: !1 } : g
        );
        return;
      }
      const f = ks(p, x);
      a(
        (g) => g && g.visible && g.top === f.top && g.left === f.left && g.width === f.width && g.height === f.height ? g : {
          ...f,
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
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => l(!0));
    f == null || f.observe(m);
    const g = typeof MutationObserver > "u" ? null : new MutationObserver(p);
    return g == null || g.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(x), f == null || f.disconnect(), g == null || g.disconnect();
    };
  }, [e, n, l]), d.useEffect(() => {
    const m = i.current;
    if (!(s != null && s.visible)) {
      c.current = null;
      return;
    }
    const x = c.current;
    if (c.current = s.top, x === null || s.instant || !Je(m) || He())
      return;
    const p = Math.min(Math.abs(s.top - x) / 600, 0.08);
    p && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - p / 2} ${1 + p}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ye.duration, easing: "ease-out" }
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
        ...Lt(r, o),
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
        transition: s.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ye.duration}ms ${Ye.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Ie]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Nr = 14, Bs = 18, Ws = "blur(12px) saturate(180%) brightness(1.04)", Ps = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), zs = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, Gs = 140, kr = 0.22, Hs = 0.14, Us = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var f;
      const p = e.current;
      p && (p.style.setProperty("--lx", `${s.x.toFixed(1)}px`), p.style.setProperty("--ly", `${s.y.toFixed(1)}px`), p.style.setProperty("--li", s.i.toFixed(3)), (f = n.current) == null || f.call(n, s.x, s.y, s.i));
    }, l = () => {
      s.x += (i.x - s.x) * kr, s.y += (i.y - s.y) * kr, s.i += (i.i - s.i) * Hs;
      const p = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      p && (s.x = i.x, s.y = i.y, s.i = i.i), c(), a = p ? 0 : requestAnimationFrame(l);
    }, h = () => {
      a || (a = requestAnimationFrame(l));
    }, m = (p) => {
      const f = e.current;
      if (p.pointerType === "touch" || !f)
        return;
      const g = f.getBoundingClientRect();
      if (!g.width || !g.height)
        return;
      i.x = (p.clientX - g.left) * f.offsetWidth / g.width, i.y = (p.clientY - g.top) * f.offsetHeight / g.height;
      const C = Math.max(
        g.left - p.clientX,
        0,
        p.clientX - g.right
      ), b = Math.max(
        g.top - p.clientY,
        0,
        p.clientY - g.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(C, b) / Gs), s.i < 0.01 && (s.x = i.x, s.y = i.y), h();
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
    const l = d.useRef(null), h = i && $r;
    Us(l, s && $r, a);
    const m = gt(), x = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [p, f] = d.useState(null), g = d.useRef(null), C = d.useCallback(
      (I) => {
        var v;
        if (l.current = I, typeof c == "function" ? c(I) : c && (c.current = I), (v = g.current) == null || v.disconnect(), g.current = null, !I || !h || !Ps || typeof ResizeObserver > "u")
          return;
        const R = () => {
          const w = I.offsetWidth, S = I.offsetHeight;
          f(
            (T) => (T == null ? void 0 : T.width) === w && T.height === S ? T : w && S ? { width: w, height: S } : null
          );
        };
        g.current = new ResizeObserver(R), g.current.observe(I), R();
      },
      [c, h]
    ), b = d.useMemo(
      () => p ? zs(p.width, p.height, Nr) : null,
      [p]
    ), y = h && !!(b && p);
    return /* @__PURE__ */ E(Me, { children: [
      y ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ E(
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
                    stdDeviation: Nr / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Bs,
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
          ref: C,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": y ? "true" : void 0,
          sx: [
            $s(e, o, m),
            y ? {
              backdropFilter: `url(#${x}) ${Ws}`,
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
const qe = 44, Fr = 4, Xs = Z, Br = 1.4, Ks = 6, Sn = 6, $t = Z, to = 10, Wr = 0.12, Pr = 0.75, js = to + 32, Vs = 90, Ys = 22, qs = 1190, Zs = 1195, oo = ve(ro), me = ve(bn), zr = ve(no), Qs = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const s = Math.min(i, r / 2, n / 2), a = e + r, c = o + n, l = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + s} ${o} H ${a - s} ${l} ${a} ${o + s} V ${c - s} ${l} ${a - s} ${c} H ${e + s} ${l} ${e} ${c - s} V ${o + s} ${l} ${e + s} ${o} Z')`;
}, Js = ({
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
  const f = We(), g = f.palette.mode === "dark", C = !!(e && r), b = d.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const y = b.current, I = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const O = r.getBoundingClientRect();
      return {
        x: n,
        y: O.top,
        left: n,
        right: n,
        top: O.top,
        bottom: O.bottom,
        width: 0,
        height: O.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), R = d.useRef(I);
  I && (R.current = I), d.useEffect(() => {
    r && _s(r);
  }, [r]);
  const [v, w] = d.useState(!1);
  d.useEffect(() => {
    if (!C) {
      w(!1);
      return;
    }
    let O = 0;
    const P = requestAnimationFrame(() => {
      O = requestAnimationFrame(() => w(!0));
    });
    return () => {
      cancelAnimationFrame(P), cancelAnimationFrame(O);
    };
  }, [C]);
  const S = d.useMemo(
    () => y ? Uo(y.group.subitems, y.group.icon) : [],
    [y]
  ), T = d.useRef(null), j = d.useRef(null), X = d.useRef(0), $ = d.useRef(null), M = d.useRef([]), z = S.findIndex(
    ({ sub: O }) => Fe(O, s)
  ), [D, G] = d.useState(0);
  d.useEffect(() => {
    G(Math.max(z, 0));
  }, [o]), d.useEffect(() => {
    if (!C || !a)
      return;
    const O = setTimeout(() => {
      var P;
      return (P = M.current[0]) == null ? void 0 : P.focus();
    });
    return () => clearTimeout(O);
  }, [C, a, o]);
  const ee = (O) => {
    var V;
    const P = Math.max(0, Math.min(O, S.length - 1));
    G(P), (V = M.current[P]) == null || V.focus();
  }, ce = (O, P) => {
    switch (O.key) {
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
    O.preventDefault();
  }, W = (O) => {
    var de;
    const P = M.current.slice(0, S.length).filter((Q) => !!Q);
    if (!P.length)
      return;
    const V = O !== null && O < P.length && !He(), L = `translate ${me.duration}ms ${me.easing}, scale ${me.duration}ms ${me.easing}`, q = P.map((Q) => Q.offsetLeft + qe / 2), K = P.map(
      (Q, he) => V && he === O ? Br : 1
    ), we = V ? (Br - 1) * qe : 0, Ce = q[0] - qe / 2, Ue = q[q.length - 1] + qe / 2, le = V ? Math.min(
      Math.min(
        1,
        Math.max(
          0,
          (q[O] - Ce) / (Ue - Ce)
        )
      ),
      Ks / we
    ) : 0;
    let _e = Ce - we * le;
    P.forEach((Q, he) => {
      const pe = qe * K[he], Oe = _e + pe / 2;
      _e += pe + Fr, Q.style.transition = `${L}, background 160ms ease, box-shadow 160ms ease`, Q.style.translate = V ? `${Oe - q[he]}px 0` : "", Q.style.scale = V ? String(K[he]) : "", V ? Q.style.setProperty("--dock-scale", String(K[he])) : Q.style.removeProperty("--dock-scale");
    }), (de = $.current) == null || de.call($);
  }, F = d.useRef(null);
  d.useEffect(() => {
    F.current = null;
  }, [o]);
  const U = (O) => {
    F.current !== O && (F.current = O, cancelAnimationFrame(X.current), X.current = requestAnimationFrame(() => W(O)));
  };
  d.useEffect(() => () => cancelAnimationFrame(X.current), []);
  const ne = f.palette.text.primary, te = g ? f.palette.text.primary : m;
  return /* @__PURE__ */ E(Me, { children: [
    /* @__PURE__ */ t(Fo, { in: C, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      _,
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
          ...i ? { clipPath: Qs(i) } : {},
          zIndex: qs,
          bgcolor: Ms(g)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      Bo,
      {
        open: C,
        anchorEl: I ?? R.current,
        placement: "right",
        transition: !0,
        modifiers: [
          { name: "offset", options: { offset: [0, to] } },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Zs,
          transition: v ? `transform ${me.duration}ms ${me.easing}` : "none",
          [Ie]: { transition: "none" }
        },
        children: ({ TransitionProps: O }) => /* @__PURE__ */ t(
          ii,
          {
            in: (O == null ? void 0 : O.in) ?? C,
            onEnter: O == null ? void 0 : O.onEnter,
            onExited: O == null ? void 0 : O.onExited,
            groupKey: (y == null ? void 0 : y.key) ?? null,
            panelProps: h,
            isDark: g,
            solidSurface: p,
            groupText: y == null ? void 0 : y.group.text,
            glassRef: j,
            shapeRef: $,
            children: y ? /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t(
              _,
              {
                ref: T,
                role: "menu",
                "aria-label": y.group.text,
                onPointerLeave: () => U(null),
                sx: {
                  position: "relative",
                  display: "flex",
                  gap: `${Fr}px`,
                  // No room kept for magnification: a grown tile rises out of
                  // the glass, as icons rise out of the Dock
                  px: 0
                },
                children: S.map(({ sub: P, icon: V }, L) => /* @__PURE__ */ t(
                  vn,
                  {
                    ref: (q) => {
                      M.current[L] = q;
                    },
                    sub: P,
                    icon: V,
                    index: L,
                    active: Fe(
                      P,
                      s
                    ),
                    tabIndex: L === D ? 0 : -1,
                    onClick: () => {
                      c(P.path), l();
                    },
                    onKeyDown: (q) => ce(q, L),
                    onFocus: (q) => {
                      G(L), q.currentTarget.matches(
                        ":focus-visible"
                      ) && U(L);
                    },
                    onHoverStart: (q) => {
                      q !== "touch" && U(L);
                    },
                    accentColor: m,
                    activeForegroundColor: x,
                    labelColor: ne,
                    iconColor: te,
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
}, Dt = 18, ei = 160, Ao = 14, ti = 22, oi = 2.5, ri = 1, Gr = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, ni = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, si = (e, o, r) => {
  const n = Sn, i = Dt, s = Dt + o / 2, a = Math.max(e, ...r.map((b) => b.right + n)), c = {
    cx: a / 2,
    cy: s,
    hx: a / 2,
    hy: o / 2,
    r: $t
  }, l = r.filter((b) => b.bottom - b.top > qe * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + Dt,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: $t
  })), h = (b, y) => l.reduce(
    (I, R) => ni(I, Gr(b, y, R), ti),
    Gr(b, y, c)
  ), m = (b, y) => {
    let I = s, R = s + y * (o / 2 + i);
    if (h(b, I) > 0)
      return null;
    for (let v = 0; v < 12; v += 1) {
      const w = (I + R) / 2;
      h(b, w) <= 0 ? I = w : R = w;
    }
    return I;
  }, x = Math.min(0, ...l.map((b) => b.cx - b.hx)) - 2, p = Math.max(a, ...l.map((b) => b.cx + b.hx)) + 2, f = [], g = [];
  for (let b = x; b <= p; ) {
    const y = m(b, -1), I = m(b, 1);
    if (y !== null && I !== null) {
      const v = +(b + Ao).toFixed(1);
      f.push([v, +y.toFixed(1)]), g.push([v, +I.toFixed(1)]);
    }
    const R = b - x < $t + 4 || p - b < $t + 4;
    b += R ? ri : oi;
  }
  return f.length ? `M ${[...f, ...g.reverse()].map(([b, y]) => `${b} ${y}`).join(" L ")} Z` : "";
}, Hr = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((s) => {
    Je(s) && s.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    });
  });
}, ii = ({
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
  const x = d.useRef(null), p = d.useRef(null), f = d.useRef(null), g = d.useRef(null), C = d.useRef(null), b = As(s, gt()), y = d.useCallback(
    (W, F, U) => {
      var ne, te;
      (ne = C.current) == null || ne.setAttribute("cx", String(W)), (te = C.current) == null || te.setAttribute("cy", String(F)), g.current && (g.current.style.opacity = String(
        U * (s ? Lr.dark.rim : Lr.light.rim)
      ));
    },
    [s]
  ), I = d.useRef(null), R = d.useRef(null), v = `lumora-flyout-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, w = d.useRef(0), S = d.useRef(0), T = d.useRef(""), j = () => {
    var O, P, V, L;
    const W = x.current, F = p.current;
    if (!W || !F)
      return !1;
    const U = W.getBoundingClientRect(), ne = Array.from(
      W.querySelectorAll('[role="menuitem"]'),
      (q) => {
        const K = q.getBoundingClientRect();
        return {
          left: K.left - U.left,
          right: K.right - U.left,
          top: K.top - U.top,
          bottom: K.bottom - U.top
        };
      }
    ), te = si(
      W.offsetWidth,
      W.offsetHeight,
      ne
    );
    return te === T.current ? !1 : (T.current = te, F.style.clipPath = `path('${te}')`, (O = f.current) == null || O.setAttribute("d", te), (P = g.current) == null || P.setAttribute("d", te), (V = I.current) == null || V.setAttribute("d", te), (L = R.current) == null || L.setAttribute("d", te), !0);
  }, X = () => {
    if (S.current = 0, w.current)
      return;
    const W = () => {
      if (S.current = j() ? 0 : S.current + 1, S.current > 8) {
        w.current = 0;
        return;
      }
      w.current = requestAnimationFrame(W);
    };
    w.current = requestAnimationFrame(W);
  };
  h.current = X, d.useLayoutEffect(() => (j(), X(), () => {
    cancelAnimationFrame(w.current), w.current = 0;
  }), [n]);
  const $ = d.useRef(null), M = d.useRef(null), z = d.useRef(!1), D = (W) => {
    x.current = W;
    const { ref: F } = i;
    typeof F == "function" ? F(W) : F && (F.current = W);
  }, G = () => {
    Kt(l.current), Kt($.current), Kt(x.current);
  }, ee = () => {
    var ne;
    const W = x.current, F = l.current, U = $.current;
    if (!(!Je(W) || !F || !U)) {
      if (G(), He()) {
        W.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      M.current = null, F.animate(
        [
          { transform: `scale(${Wr}, ${Pr})` },
          { transform: "none" }
        ],
        { duration: oo.duration, easing: oo.easing }
      ), Hr(F, [0, 1], 160, "ease-out");
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
          duration: zr.duration,
          delay: 60,
          easing: zr.easing,
          fill: "backwards"
        }
      );
    }
  }, ce = () => {
    const W = x.current, F = l.current, U = $.current;
    if (!Je(W) || !F || !U) {
      r == null || r();
      return;
    }
    if (G(), He()) {
      W.animate([{ opacity: 1 }, { opacity: 0 }], {
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
    }), Hr(F, [1, 0], 200, "ease-in"), F.animate(
      [
        { transform: "none" },
        { transform: `scale(${Wr}, ${Pr})` }
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
      ce();
      return;
    }
    o == null || o(), ee();
  }, [e]), d.useLayoutEffect(() => {
    const W = x.current;
    if (!W)
      return;
    const F = W.getBoundingClientRect(), U = M.current;
    if (M.current = { width: F.width, height: F.height }, !z.current) {
      z.current = !0;
      return;
    }
    const ne = l.current;
    !e || !U || !Je(ne) || !F.width || !F.height || He() || (Kt(ne), ne.animate(
      [
        {
          transform: `scale(${U.width / F.width}, ${U.height / F.height})`
        },
        { transform: "none" }
      ],
      { duration: me.duration, easing: me.easing }
    ));
  }, [n]), /* @__PURE__ */ E(
    _,
    {
      ref: D,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": c,
      sx: {
        position: "relative",
        borderRadius: `${$t}px`,
        p: `${Sn}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -to - 2,
          width: to + 2
        }
      },
      children: [
        /* @__PURE__ */ E(
          _,
          {
            ref: l,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Dt,
              bottom: -Dt,
              left: -Ao,
              right: -ei,
              pointerEvents: "none",
              // The rail icon's centre: the panel is centred on it,
              // one gap plus half the rail's padding to the left
              transformOrigin: `${Ao - js}px 50%`,
              willChange: "transform"
            },
            children: [
              /* @__PURE__ */ E(
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
                    /* @__PURE__ */ E("defs", { children: [
                      /* @__PURE__ */ t(
                        "filter",
                        {
                          id: `${v}-shadow`,
                          x: "-20%",
                          y: "-50%",
                          width: "140%",
                          height: "200%",
                          children: /* @__PURE__ */ t("feGaussianBlur", { stdDeviation: "14" })
                        }
                      ),
                      /* @__PURE__ */ E(
                        "mask",
                        {
                          id: `${v}-outside`,
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
                    /* @__PURE__ */ t("g", { mask: `url(#${v}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: I,
                        transform: "translate(0 12)",
                        fill: s ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${v}-shadow)`
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
              /* @__PURE__ */ E(
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
                    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ E(
                      "linearGradient",
                      {
                        id: `${v}-rim`,
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
                    /* @__PURE__ */ E(
                      "radialGradient",
                      {
                        ref: C,
                        id: `${v}-glint`,
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
                        stroke: `url(#${v}-glint)`,
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
        /* @__PURE__ */ t(_, { ref: $, sx: { position: "relative" }, children: m })
      ]
    }
  );
}, vn = d.forwardRef(
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
    isDark: f
  }, g) => {
    const C = gt(), b = d.useContext(mt), y = (w) => {
      const S = w.currentTarget.getBoundingClientRect();
      w.currentTarget.style.setProperty(
        "--mx",
        `${(w.clientX - S.left) / S.width * 100}%`
      ), w.currentTarget.style.setProperty(
        "--my",
        `${(w.clientY - S.top) / S.height * 100}%`
      );
    }, I = (w) => {
      const S = w.currentTarget;
      !Je(S) || He() || S.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.1, 0.9)", offset: 0.22 },
          { transform: "scale(0.95, 1.06)", offset: 0.5 },
          { transform: "scale(1.02, 0.99)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, R = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, v = {
      ...Zo(f, C),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": R
    };
    return /* @__PURE__ */ E(
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
        onMouseEnter: I,
        onPointerEnter: (w) => l(w.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: qe,
          height: qe,
          borderRadius: `${Xs}px`,
          color: n ? m : x,
          bgcolor: n ? h : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Lt(h, f) : {},
          transition: `translate ${me.duration}ms ${me.easing}, scale ${me.duration}ms ${me.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${Ts} ${oo.duration}ms ${oo.easing} both`,
          animationDelay: `${Vs + r * Ys}ms`,
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
            "& [data-tile-name]": R
          } : v,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : v,
            "& [data-tile-name]": R,
            outline: "2px solid",
            outlineColor: h,
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
                ...Vo(f, b),
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
vn.displayName = "FlyoutTile";
const ai = 100, ci = 250, li = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const i = d.useRef(/* @__PURE__ */ new Map()), s = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, h = () => {
    clearTimeout(c.current), c.current = void 0;
  }, m = (y, I, R = !1) => {
    l(), h(), r({ key: y, pinned: I, focusFirst: R });
  }, x = d.useCallback((y = !1) => {
    var R, v;
    l(), h();
    const I = (R = n.current) == null ? void 0 : R.key;
    r(null), y && I && ((v = i.current.get(I)) == null || v.focus());
  }, []), p = () => {
    l(), !(!n.current || n.current.pinned) && (h(), c.current = setTimeout(() => x(), ci));
  };
  d.useEffect(() => {
    e || x();
  }, [e, x]), d.useEffect(
    () => () => {
      l(), h();
    },
    []
  );
  const f = o !== null;
  return d.useEffect(() => {
    if (!f)
      return;
    const y = (v) => {
      var S;
      const w = v;
      return w ? (S = s.current) != null && S.contains(w) ? !0 : [...i.current.values()].some((T) => T.contains(w)) : !1;
    }, I = (v) => {
      y(v.target) || x();
    }, R = (v) => {
      var w;
      v.key === "Escape" && x(
        !!((w = s.current) != null && w.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", I), document.addEventListener("keydown", R), () => {
      document.removeEventListener("pointerdown", I), document.removeEventListener("keydown", R);
    };
  }, [f, x]), {
    state: o,
    close: x,
    triggerProps: (y) => ({
      ref: (I) => {
        I ? i.current.set(y, I) : i.current.delete(y);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        h();
        const I = n.current;
        if (I) {
          I.key !== y && m(y, I.pinned);
          return;
        }
        l(), a.current = setTimeout(
          () => m(y, !1),
          ai
        );
      },
      onMouseLeave: p,
      onClick: (I) => {
        if (I.detail === 0) {
          m(y, !0, !0);
          return;
        }
        const R = n.current;
        (R == null ? void 0 : R.key) === y && R.pinned ? x() : m(y, !0);
      },
      onKeyDown: (I) => {
        I.key === "ArrowRight" && (I.preventDefault(), m(y, !0, !0));
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
}, di = 264, ui = 72, Ur = 64, jt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, fi = 16, hi = 14, pi = 4, mi = 2.5, Xr = "0.7rem", Kr = 22, jr = ve(Ho), st = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
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
}, gi = ({
  open: e,
  size: o = fi
}) => e ? /* @__PURE__ */ t(Jn, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Qn, { sx: { fontSize: o, opacity: 0.75 } }), Vr = ({ open: e }) => /* @__PURE__ */ t(
  es,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), Vt = 600, $o = ({
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
  activeAccentColor: f = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: C,
  foregroundColor: b,
  surfaceBackgroundColor: y,
  flyoutSurfaceColor: I,
  collapsed: R = !1,
  expandedWidth: v = di,
  collapsedWidth: w = ui,
  showLabels: S = !1,
  topInsetPx: T = 0,
  topContent: j,
  footer: X,
  submenuMode: $ = "inline"
}) => {
  const M = We(), z = M.palette.mode === "dark", D = d.useContext(mt), G = $ === "flyout" && R && !S, ee = li(G), ce = d.useRef(null), W = Ns(G, z), F = Fs({
    enabled: G,
    isDark: z,
    color: f,
    containerRef: ce
  }), { close: U } = ee;
  d.useEffect(() => {
    U();
  }, [r, U]);
  const [ne, te] = d.useState(
    {}
  ), O = C ?? _o(f), P = {
    bgcolor: f,
    color: O,
    "& .MuiListItemIcon-root": { color: O }
  }, V = {
    bgcolor: f,
    color: O,
    borderRadius: "8px"
  }, L = g ?? Jt(f), q = y ?? (z ? M.palette.background.paper : "#ffffff"), K = b ?? (z ? "text.primary" : f), we = m ?? q, Ce = x ?? (m ? _o(we) : b ?? (z ? M.palette.text.primary : f)), Ue = Jt(Ce), le = (u) => {
    n == null || n(u);
  }, _e = (u, k) => {
    te((H) => ({ ...H, [u]: !k }));
  }, de = (u, k) => ne[k] ?? Ve(u, r), Q = (u, k, H) => ({
    color: u ? O : K,
    bgcolor: u ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: u ? O : K,
      minWidth: H
    },
    "&:hover": u || S ? P : { bgcolor: k }
  }), he = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": P
  }, pe = (u) => {
    const k = Fe(u, r), H = /* @__PURE__ */ E(
      Ut,
      {
        disabled: !u.path,
        selected: k,
        onClick: () => u.path && le(u.path),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": k ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...u.action && { pr: 6 },
          ...u.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...Q(
            k,
            L,
            u.subtitle ? 48 : 36
          ),
          ...he
        },
        children: [
          /* @__PURE__ */ t(ye, { children: u.icon }),
          /* @__PURE__ */ t(
            Be,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                st,
                {
                  text: u.text,
                  fontWeight: Vt
                }
              ),
              secondary: u.subtitle ? /* @__PURE__ */ t(
                _,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    st,
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
      return H;
    const { action: N } = u;
    return /* @__PURE__ */ E(_, { sx: { position: "relative" }, children: [
      H,
      /* @__PURE__ */ t(Se, { title: N.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        be,
        {
          "aria-label": N.label,
          "data-testid": `sidebar-action-${u.text}`,
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
            borderColor: k ? "rgba(255, 255, 255, 0.35)" : L,
            color: k ? O : K,
            "&:hover": {
              bgcolor: k ? "rgba(255, 255, 255, 0.15)" : L
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: k ? O : K,
              outlineOffset: 1
            }
          },
          children: N.icon
        }
      ) })
    ] }, u.text);
  }, Oe = (u) => {
    const k = Ve(u, r), H = Fe(u, r), N = ht("", u), B = de(u, N);
    return /* @__PURE__ */ E(
      _,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: k ? L : "transparent"
        },
        children: [
          /* @__PURE__ */ E(
            Ut,
            {
              onClick: () => _e(N, B),
              "data-testid": `sidebar-item-${u.text}`,
              "data-active": H ? "true" : "false",
              "aria-expanded": B,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Q(H, L, 36)
              },
              children: [
                /* @__PURE__ */ t(ye, { children: u.icon }),
                /* @__PURE__ */ t(
                  Be,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      st,
                      {
                        text: u.text,
                        fontWeight: Vt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(Vr, { open: B })
              ]
            }
          ),
          /* @__PURE__ */ t(Rr, { in: B, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            _,
            {
              "data-testid": `sidebar-children-${u.text}`,
              sx: { pb: 0.5 },
              children: u.subitems.map(
                (J) => Xe(J, N, 1)
              )
            }
          ) })
        ]
      },
      u.text
    );
  }, Xe = (u, k, H) => {
    const N = ht(k, u), B = pi + (H - 1) * mi;
    if (pt(u)) {
      const se = Ve(u, r), oe = Fe(u, r), Te = de(u, N);
      return /* @__PURE__ */ E(_, { "data-testid": `sidebar-group-${u.text}`, children: [
        /* @__PURE__ */ E(
          Ut,
          {
            onClick: () => _e(N, Te),
            "data-testid": `sidebar-subitem-${u.text}`,
            "data-active": se ? "true" : "false",
            "aria-expanded": Te,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: B,
              ...Q(oe, "action.hover", 32)
            },
            children: [
              u.icon ? /* @__PURE__ */ t(ye, { children: u.icon }) : null,
              /* @__PURE__ */ t(
                Be,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    st,
                    {
                      text: u.text,
                      fontWeight: Vt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(Vr, { open: Te })
            ]
          }
        ),
        /* @__PURE__ */ t(Rr, { in: Te, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(_, { "data-testid": `sidebar-children-${u.text}`, children: u.subitems.map(
          (Le) => Xe(Le, N, H + 1)
        ) }) })
      ] }, N);
    }
    const J = Fe(u, r);
    return /* @__PURE__ */ E(
      Ut,
      {
        selected: J,
        disabled: !u.path,
        onClick: () => u.path && le(u.path),
        "data-testid": `sidebar-subitem-${u.text}`,
        "data-active": J ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: B,
          ...Q(J, "action.hover", 32),
          ...he
        },
        children: [
          u.icon ? /* @__PURE__ */ t(ye, { children: u.icon }) : null,
          /* @__PURE__ */ t(
            Be,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                st,
                {
                  text: u.text,
                  fontWeight: Vt
                }
              )
            }
          )
        ]
      },
      N
    );
  }, Ke = (u, k, H, N, B, J) => {
    const se = !B, oe = /* @__PURE__ */ E(
      be,
      {
        "aria-label": k,
        disabled: se,
        onClick: B,
        onMouseEnter: G ? ee.onRailLeafEnter : void 0,
        ...G ? { [eo]: "" } : {},
        "data-testid": (J == null ? void 0 : J.testId) ?? `sidebar-item-${k}`,
        "data-active": N ? "true" : "false",
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
          color: N ? O : K,
          bgcolor: N ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Kr
          },
          "&:hover": V,
          ...jt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: N ? O : K,
          bgcolor: N ? f : "transparent",
          borderRadius: N ? "8px" : "50%",
          "&:hover": {
            bgcolor: N ? f : J != null && J.insideGroup ? "action.hover" : L,
            borderRadius: "8px"
          },
          ...jt,
          ...G ? at(N) : {}
        },
        children: [
          H,
          S ? /* @__PURE__ */ t(
            st,
            {
              text: k,
              variant: "caption",
              center: !0,
              fontSize: Xr
            }
          ) : null
        ]
      }
    );
    return S ? se ? /* @__PURE__ */ t("span", { children: oe }, u) : /* @__PURE__ */ t(d.Fragment, { children: oe }, u) : /* @__PURE__ */ t(
      Se,
      {
        title: k,
        placement: "right",
        arrow: !G,
        ...G ? tt : {},
        children: se ? /* @__PURE__ */ t("span", { children: oe }) : oe
      },
      u
    );
  }, bt = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, at = (u) => ({
    borderRadius: `${Z}px`,
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...u ? { bgcolor: "transparent" } : {},
    transition: `transform ${jr.duration}ms ${jr.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), tt = {
    slotProps: {
      tooltip: { sx: Vo(z, D) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, yt = (u) => {
    var B;
    const k = Ve(u, r), H = ht("", u), N = ((B = ee.state) == null ? void 0 : B.key) === H;
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
            ...ee.triggerProps(H),
            "aria-label": u.text,
            "aria-haspopup": "menu",
            "aria-expanded": N,
            "data-testid": `sidebar-item-${u.text}`,
            "data-active": k ? "true" : "false",
            "data-open": N ? "true" : "false",
            [eo]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: k ? O : K,
              bgcolor: k ? f : N ? L : "transparent",
              ...at(k),
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
              ...jt
            },
            children: u.icon
          }
        )
      },
      u.text
    );
  }, Ft = (u) => {
    const k = Ve(u, r), H = Fe(u, r), N = ht("", u), B = de(u, N), J = /* @__PURE__ */ E(
      be,
      {
        "aria-label": u.text,
        "aria-expanded": B,
        onClick: () => _e(N, B),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": H ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: S ? 0.25 : 0,
          width: S ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...S ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: H ? O : K,
          bgcolor: H ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": S ? { bgcolor: f, color: O } : {
            bgcolor: H ? f : "transparent"
          },
          ...jt
        },
        children: [
          S ? /* @__PURE__ */ t(
            _,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Kr
                }
              },
              children: u.icon
            }
          ) : u.icon,
          S ? /* @__PURE__ */ t(
            st,
            {
              text: u.text,
              variant: "caption",
              center: !0,
              fontSize: Xr
            }
          ) : null,
          /* @__PURE__ */ t(gi, { open: B, size: hi })
        ]
      }
    ), se = S ? J : /* @__PURE__ */ t(Se, { title: u.text, placement: "right", arrow: !0, children: J });
    return /* @__PURE__ */ E(
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
          bgcolor: k ? L : "transparent",
          ...S ? {} : { "&:hover": { bgcolor: L } }
        },
        children: [
          se,
          B ? Uo(u.subitems, u.icon).map(
            ({ sub: oe, icon: Te }) => Ke(
              oe.path,
              oe.text,
              Te,
              Fe(oe, r),
              () => le(oe.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${oe.text}`
              }
            )
          ) : null
        ]
      },
      u.text
    );
  }, ot = (u) => /* @__PURE__ */ t(
    _,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Ke(
        u.text,
        u.subtitle ? `${u.text} · ${u.subtitle}` : u.text,
        u.icon,
        Fe(u, r),
        u.path ? () => le(u.path) : void 0,
        { testId: `sidebar-item-${u.text}` }
      )
    },
    u.text
  ), St = (u) => pt(u) ? G ? yt(u) : R ? Ft(u) : Oe(u) : R ? ot(u) : pe(u), vt = (u) => /* @__PURE__ */ t(
    De,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: R ? "center" : "stretch"
      },
      children: u.map(St)
    }
  ), wt = R ? w : v, ao = () => {
    var se, oe;
    const { state: u } = ee, k = u ? [...e, ...o].find(
      (Te) => pt(Te) && ht("", Te) === u.key
    ) ?? null : null, H = k ? ((se = ce.current) == null ? void 0 : se.getBoundingClientRect().right) ?? w : w, N = k ? ((oe = ce.current) == null ? void 0 : oe.closest("[data-rail-surface]")) ?? ce.current : null, B = N == null ? void 0 : N.getBoundingClientRect(), J = N && B ? {
      left: B.left,
      top: B.top,
      width: B.width,
      height: B.height,
      radius: parseFloat(
        getComputedStyle(N).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Js,
      {
        group: k,
        groupKey: k ? u.key : null,
        anchor: k ? ee.getTrigger(u.key) : null,
        railEdge: H,
        railShape: J,
        activePath: r,
        focusFirst: u == null ? void 0 : u.focusFirst,
        onNavigate: le,
        onClose: ee.close,
        panelProps: ee.flyoutProps,
        accentColor: f,
        activeForegroundColor: O,
        solidSurface: I ?? q
      }
    );
  }, ct = h ? /* @__PURE__ */ t(
    _,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Ur,
        minHeight: Ur,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: we
      },
      children: s || a ? /* @__PURE__ */ t(
        Qt,
        {
          logo: s,
          title: R ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: p ?? Ce,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, Bt = !h && s ? /* @__PURE__ */ t(
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
        Qt,
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
  ) : null, lt = S ? 0.5 : R ? 1 : 1.5;
  return /* @__PURE__ */ t(io.Provider, { value: G, children: /* @__PURE__ */ E(
    _,
    {
      ref: ce,
      ...W.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": R ? "true" : "false",
      "data-labeled": S ? "true" : "false",
      sx: {
        width: wt,
        minWidth: wt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: q,
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
        ...G ? bt : {}
      },
      children: [
        W.lens,
        F.glass,
        ct ?? Bt,
        j ? /* @__PURE__ */ t(
          _,
          {
            sx: {
              flexShrink: 0,
              px: lt,
              pt: 1,
              pb: 1
            },
            children: j
          }
        ) : null,
        /* @__PURE__ */ E(
          _,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: lt,
              pt: T && !h ? `${T}px` : 1,
              pb: 2
            },
            children: [
              vt(e),
              o.length > 0 ? /* @__PURE__ */ E(_, { sx: { mt: "auto", pt: 2 }, children: [
                X ? null : /* @__PURE__ */ t(
                  Qe,
                  {
                    sx: { mb: 1, borderColor: "divider" }
                  }
                ),
                vt(o)
              ] }) : null
            ]
          }
        ),
        X ? /* @__PURE__ */ t(_, { sx: { flexShrink: 0, px: lt, pb: 1.5 }, children: /* @__PURE__ */ t(
          _,
          {
            sx: {
              borderTop: `1px solid ${Ue}`,
              pt: 1.5
            },
            children: X
          }
        ) }) : null,
        G ? ao() : null
      ]
    }
  ) });
}, Mo = "var(--lumora-content-padding, 0px)", Yr = `calc(${Mo} * -1)`, dc = ({
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
        mx: Yr,
        mt: o ? Yr : 0,
        // Space below it, like any other block on the page
        mb: Mo,
        px: s ? Mo : 0,
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
), xi = ({ keys: e }) => /* @__PURE__ */ t(
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
);
class Y extends Error {
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const re = {
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
}, Ge = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, bi = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ge.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Ge.REFRESH_TOKEN
      ), r = localStorage.getItem(Ge.USER);
      e && !localStorage.getItem(fe.ACCESS_TOKEN) && localStorage.setItem(fe.ACCESS_TOKEN, e), o && !localStorage.getItem(fe.REFRESH_TOKEN) && localStorage.setItem(
        fe.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(fe.USER) && localStorage.setItem(fe.USER, r), (e || o || r) && (localStorage.removeItem(Ge.ACCESS_TOKEN), localStorage.removeItem(Ge.REFRESH_TOKEN), localStorage.removeItem(Ge.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, wo = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        re.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      re.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      re.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Y(
      "Failed to access storage",
      re.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Eo = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        re.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      re.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      re.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Y(
      "Failed to write to storage",
      re.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, wn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Nt = () => {
  try {
    bi();
    const e = wo(fe.ACCESS_TOKEN), o = wo(fe.REFRESH_TOKEN), r = wo(fe.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), wn(fe.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Y ? e : new Y(
      "Failed to retrieve authentication tokens",
      re.UNKNOWN_ERROR,
      e
    );
  }
}, yi = () => {
  try {
    const { accessToken: e, refreshToken: o } = Nt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Y(
        "No authentication tokens found",
        re.TOKEN_NOT_FOUND
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
        re.UNKNOWN_ERROR,
        e
      )
    };
  }
}, En = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Y(
        "At least one token must be provided",
        re.TOKEN_INVALID
      );
    return e && Eo(fe.ACCESS_TOKEN, e), o && Eo(fe.REFRESH_TOKEN, o), r && Eo(fe.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Y ? n : new Y(
        "Failed to store tokens",
        re.UNKNOWN_ERROR,
        n
      )
    };
  }
}, kt = () => {
  try {
    return [
      fe.ACCESS_TOKEN,
      fe.REFRESH_TOKEN,
      fe.USER,
      // Also clear legacy keys for complete cleanup
      Ge.ACCESS_TOKEN,
      Ge.REFRESH_TOKEN,
      Ge.USER
    ].map((n) => wn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Y ? e : new Y(
        "Failed to clear tokens",
        re.LOGOUT_FAILED,
        e
      )
    };
  }
}, Si = () => {
  try {
    const { user: e } = Nt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Y ? e : new Y(
        "Failed to retrieve user data",
        re.UNKNOWN_ERROR,
        e
      )
    };
  }
}, uc = (e) => {
  if (!(e instanceof Y))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case re.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case re.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case re.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case re.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case re.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case re.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Do = (e, o = "Unknown") => {
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
}, vi = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Tr.create({
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
      const { accessToken: c } = Nt();
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
      const { refreshToken: x } = Nt();
      if (!x) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return Do(f, "AxiosClient - Token Refresh"), kt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((f, g) => {
          i.push({ resolve: f, reject: g });
        }).then((f) => {
          const {
            accessToken: g,
            refreshToken: C
          } = f;
          if (c.headers && (c.headers.Authorization = `Bearer ${g}`), h.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const b = JSON.parse(
                  c.data || "{}"
                );
                b.refresh_token = C, c.data = JSON.stringify(b);
              } else
                c.data && typeof c.data == "object" ? c.data.refresh_token = C : c.data = JSON.stringify({
                  refresh_token: C
                });
            } catch {
              c.data = JSON.stringify({
                refresh_token: C
              });
            }
          return o(c);
        }).catch((f) => Promise.reject(f));
      r = !0, n = Tr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: x
        }
      );
      try {
        const f = await n, { accessToken: g, refreshToken: C } = f.data;
        if (En(g, C, null), s(null, {
          accessToken: g,
          refreshToken: C
        }), c.headers && (c.headers.Authorization = `Bearer ${g}`), h.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const b = JSON.parse(
                c.data || "{}"
              );
              b.refresh_token = C, c.data = JSON.stringify(b);
            } else
              c.data && typeof c.data == "object" ? c.data.refresh_token = C : c.data = JSON.stringify({
                refresh_token: C
              });
          } catch {
            c.data = JSON.stringify({
              refresh_token: C
            });
          }
        return o(c);
      } catch (f) {
        return Do(
          f,
          "AxiosClient - Token Refresh Failed"
        ), s(f), kt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Ee = {
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
}, dt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, ut = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, ft = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Rn = fn(), $e = Rn.typography.pxToRem, wi = (e) => {
  const o = e === "dark", r = [...Rn.shadows];
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
      warning: o ? { light: ut[400], main: ut[500], dark: ut[700] } : { light: ut[300], main: ut[400], dark: ut[800] },
      error: o ? { light: ft[400], main: ft[500], dark: ft[700] } : { light: ft[300], main: ft[400], dark: ft[800] },
      success: o ? { light: dt[400], main: dt[500], dark: dt[700] } : { light: dt[300], main: dt[400], dark: dt[800] },
      grey: Re,
      divider: o ? it(Re[700], 0.6) : it(Re[300], 0.4),
      background: o ? { default: Re[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Re[400] } : { primary: Re[800], secondary: Re[600] },
      action: o ? {
        hover: it(Re[600], 0.2),
        selected: it(Re[600], 0.3)
      } : {
        hover: it(Re[200], 0.2),
        selected: it(Re[200], 0.3)
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
}, Ei = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Nt();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return En(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      Do(i, "TokenValidator - Refresh Failed");
    }
  return kt(), o ? o() : window.location.href = "/login", !1;
}, Mt = ({ size: e = 20 }) => /* @__PURE__ */ E(
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
), qr = ve(Ho), ze = "#09C1AE", Zt = (e, o) => ({
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
}), Ri = (e) => ({
  ...Zt(Z, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${Z - 2}px`,
    zIndex: 1,
    background: `${Lt(ze, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), Zr = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: s = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = Qo(), l = d.useContext(io), h = We().palette.mode === "dark", m = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", x = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ E(
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
        borderColor: r ? ze : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${ze}`,
          outlineOffset: 2
        },
        ...n && Zt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Mt, { size: 20 }),
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
        i && /* @__PURE__ */ t(xi, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && l ? /* @__PURE__ */ t(Se, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    be,
    {
      ...x,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: `${Z}px`,
        ...Lt(ze, h, "clear"),
        ...r && {
          boxShadow: `${Lt(ze, h, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${qr.duration}ms ${qr.easing}, box-shadow 200ms ease`,
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
        ...n && Ri(h)
      },
      children: /* @__PURE__ */ t(Mt, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Se, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
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
        ...n && Zt(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Mt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(Se, { title: m, placement: "left", children: /* @__PURE__ */ t(
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
        ...n && Zt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(_, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Mt, { size: 26 }) })
    }
  ) });
}, Yt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(as, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ E(cs, { children: [
  /* @__PURE__ */ t(ls, { fontSize: "small" }),
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
    hn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Ot = 24, Ii = 720, Ci = 1140, _i = 1250, Oi = ({
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
    const g = (C) => {
      C.key === "Escape" && h();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [e, h]);
  const m = r === "docked", x = Ot + a;
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
    ...n === "left" ? { left: s + Ot } : { right: Ot },
    width: i,
    maxWidth: `calc(100vw - ${Ot * 2}px)`,
    height: `min(${Ii}px, calc(100vh - ${x + Ot}px))`,
    borderRadius: "12px"
  };
  const f = /* @__PURE__ */ t(
    Wo,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? Ci : _i,
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
  return m ? /* @__PURE__ */ t(us, { direction: "left", in: e, mountOnEnter: !0, children: f }) : /* @__PURE__ */ t(
    ds,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: f
    }
  );
}, Ti = 180, Qr = 250, Ai = "#01584F", $i = ({
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
}, In = (e, o, r, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : o, a = e ? Ai : o;
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
}, Cn = ({ link: e }) => /* @__PURE__ */ E(De, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    $i,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), _n = (e, o, r) => r ? e : /* @__PURE__ */ t(Se, { title: o, placement: "right", arrow: !0, children: e }), Mi = ({
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
  ), f = d.useRef(null), g = d.useRef(null), C = d.useRef(!1), b = d.useRef(!1), y = d.useId(), I = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, R = () => {
    I(), p.current = setTimeout(() => {
      x(!1), p.current = null;
    }, Ti);
  }, v = () => {
    I(), x(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const $ = (M) => {
      var z;
      M.key === "Escape" && (x(!1), (z = g.current) == null || z.focus());
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [m]), d.useEffect(() => {
    if (!m || !b.current)
      return;
    const $ = globalThis.requestAnimationFrame(() => {
      var z;
      const M = (z = f.current) == null ? void 0 : z.querySelector(
        '[role="menuitem"]'
      );
      M == null || M.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame($);
  }, [m]);
  const w = Ve(e, o), { activeBg: S, sx: T } = In(
    i,
    n,
    w,
    a
  ), j = /* @__PURE__ */ t(
    be,
    {
      ref: g,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        C.current || v();
      },
      onBlur: ($) => {
        var z;
        const M = $.relatedTarget;
        M && ((z = f.current) != null && z.contains(M)) || R();
      },
      onKeyDown: ($) => {
        $.key === "ArrowDown" && ($.preventDefault(), b.current = !0, v());
      },
      onClick: ($) => {
        $.preventDefault(), $.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? y : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: T,
      children: a ? /* @__PURE__ */ t(Cn, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ E(
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
            ref: h,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              C.current = !0, v();
            },
            onMouseLeave: () => {
              C.current = !1, R();
            },
            children: _n(j, e.text, a)
          }
        ),
        /* @__PURE__ */ t(
          Bo,
          {
            open: m && !!l,
            anchorEl: l,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: ($) => $.zIndex.modal },
            children: /* @__PURE__ */ t(
              Wo,
              {
                ref: f,
                elevation: 0,
                onMouseEnter: I,
                onMouseLeave: R,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: s,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: c.shadows[8],
                  maxWidth: Qr,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Po,
                  {
                    id: y,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Qr
                    },
                    children: X(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function X($, M, z) {
    return $.flatMap((D) => {
      const G = ht(M, D);
      return pt(D) ? [
        /* @__PURE__ */ t(
          fs,
          {
            disableSticky: !0,
            title: D.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + z * 1.5,
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
          G
        ),
        ...X(D.subitems, G, z + 1)
      ] : [
        /* @__PURE__ */ E(
          Ze,
          {
            role: "menuitem",
            title: D.text,
            disabled: !D.path,
            selected: Fe(D, o),
            onClick: (ee) => {
              ee.preventDefault(), D.path && (r == null || r(D.path)), x(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + z * 1.5,
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
              D.icon ? /* @__PURE__ */ t(ye, { children: D.icon }) : null,
              /* @__PURE__ */ t(
                Be,
                {
                  primary: D.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          G
        )
      ];
    });
  }
}, Di = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const a = !!(e.path && o === e.path), { sx: c } = In(
    i,
    n,
    a,
    s
  );
  return _n(
    /* @__PURE__ */ t(
      be,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: c,
        children: s ? /* @__PURE__ */ t(Cn, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, Li = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Qe, { sx: { width: "60%", borderColor: "divider" } })
  }
), Ni = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Qe, { sx: { width: "60%", borderColor: "divider" } })
  }
), Jr = (e, o) => e.map((r, n) => /* @__PURE__ */ E(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(Li, {}) : null
] }, n)), ki = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: a = !1
}) => {
  const c = (h, m) => pt(h) ? /* @__PURE__ */ t(
    Mi,
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
    Di,
    {
      link: h,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      railShowTitles: a
    }
  ), l = a ? 1.25 : 1;
  return /* @__PURE__ */ E(
    De,
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
        Jr(e, (h) => c(h, !1)),
        o.length > 0 ? /* @__PURE__ */ E(Me, { children: [
          /* @__PURE__ */ t(Ni, {}),
          /* @__PURE__ */ t(_, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(De, { gap: l, alignItems: "center", children: Jr(
            o,
            (h) => c(h, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Fi = (e) => e ? yn(e) : "USER", Bi = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), en = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Lo = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, er = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  ps,
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
    children: Bi(e)
  }
), On = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ E(Me, { children: [
  /* @__PURE__ */ t(er, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ E(
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
          ae,
          {
            variant: "body2",
            sx: { ...en, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            variant: "caption",
            sx: { ...en, opacity: 0.8, color: "inherit" },
            children: Fi(o)
          }
        )
      ]
    }
  )
] }), tn = {
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
}, Tn = ({
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
  onSettingsClick: f,
  showThemeToggler: g,
  theme: C,
  onThemeToggle: b,
  onLogout: y
}) => {
  const I = (R) => () => {
    o(), R == null || R();
  };
  return /* @__PURE__ */ E(
    ms,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: tn[r].anchor,
      transformOrigin: tn[r].transform,
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
              On,
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
        /* @__PURE__ */ t(Qe, {}),
        s && /* @__PURE__ */ E(Ze, { onClick: I(c), children: [
          /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(gn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Be, { children: "Notifications" }),
          /* @__PURE__ */ t(Lo, { count: a })
        ] }),
        x.map((R) => /* @__PURE__ */ E(Ze, { onClick: I(R.onClick), children: [
          R.icon && /* @__PURE__ */ t(ye, { children: R.icon }),
          /* @__PURE__ */ t(Be, { inset: !R.icon, children: R.label }),
          /* @__PURE__ */ t(Lo, { count: R.badge })
        ] }, R.key)),
        p && /* @__PURE__ */ E(Ze, { onClick: I(f), children: [
          /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(hs, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Be, { children: "Settings" })
        ] }),
        g && [
          /* @__PURE__ */ t(Qe, {}, "theme-divider"),
          /* @__PURE__ */ E(_, { sx: { px: 1.5, py: 1 }, children: [
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
            /* @__PURE__ */ E(
              gs,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: C,
                onChange: (R, v) => v && v !== C && (b == null ? void 0 : b()),
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
                  /* @__PURE__ */ t(Ar, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Ar, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Qe, {}),
        /* @__PURE__ */ E(
          Ze,
          {
            onClick: I(y),
            sx: {
              color: C === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ye, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(mn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Be, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, An = 64, Wi = 2, Tt = ({
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
}) => /* @__PURE__ */ E(
  et,
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
), Pi = ({
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
  activePath: f,
  onLinkClick: g,
  ...C
}) => {
  const b = p.filter((T) => T.path).slice(0, Wi), [y, I] = d.useState(
    null
  ), { userName: R = "User", userAvatar: v, avatarColor: w } = C, S = { color: h, activeColor: m, activeBackground: x };
  return /* @__PURE__ */ E(
    Wo,
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
        height: `calc(${An}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: l,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Tt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(pn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...S
          }
        ),
        b.map((T) => /* @__PURE__ */ t(
          Tt,
          {
            label: T.text,
            icon: T.icon,
            onClick: () => g == null ? void 0 : g(T.path),
            active: Ve(T, f),
            isPage: !0,
            testId: `mobile-nav-link-${T.text}`,
            ...S
          },
          T.path
        )),
        i && /* @__PURE__ */ t(
          Tt,
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
                children: /* @__PURE__ */ t(Mt, { size: 18 })
              }
            ),
            onClick: s,
            active: a,
            testId: "mobile-nav-nexa",
            ...S
          }
        ),
        r && /* @__PURE__ */ t(
          Tt,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(zo, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...S
          }
        ),
        c && /* @__PURE__ */ E(Me, { children: [
          /* @__PURE__ */ t(
            Tt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${R}`,
              icon: /* @__PURE__ */ t(
                er,
                {
                  name: R,
                  avatar: v,
                  color: w,
                  size: 26
                }
              ),
              onClick: (T) => I(T.currentTarget),
              active: !!y,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...S
            }
          ),
          /* @__PURE__ */ t(
            Tn,
            {
              anchorEl: y,
              onClose: () => I(null),
              placement: "above-end",
              width: 280,
              ...C
            }
          )
        ] })
      ]
    }
  );
}, zi = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  xs,
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
    children: /* @__PURE__ */ E(
      De,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(_, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            hn,
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
), Gi = ({
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
  bs,
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
    children: /* @__PURE__ */ E(ys, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        be,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: c },
          children: /* @__PURE__ */ t(pn, {})
        }
      ),
      /* @__PURE__ */ t(
        Qt,
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
      h ? /* @__PURE__ */ t(_, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: h }) : null
    ] })
  }
), tr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const a = Qo(), c = e ? `Notifications, ${e} unread` : "Notifications";
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
            xn,
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
              children: /* @__PURE__ */ t(gn, {})
            }
          )
        }
      )
    }
  );
}, $n = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Hi = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, on = ve(ro), rn = ve(no), nn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Ui = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = We().palette.mode === "dark", a = gt(), c = d.useRef(null), l = d.useRef(null), h = (p) => {
    var f;
    p !== e && (o == null || o()), (f = (p === "light" ? c : l).current) == null || f.focus();
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
  }, x = (p, f, g, C) => {
    const b = e === p;
    return /* @__PURE__ */ t(
      et,
      {
        ref: C,
        role: "radio",
        "aria-checked": b,
        "aria-label": f,
        tabIndex: b ? 0 : -1,
        onClick: () => h(p),
        "data-testid": `theme-segment-${p}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: i ? `${Z}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? s ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...i && b ? Zo(s, a) : {},
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
            boxShadow: `0 0 0 2px ${it(r, 0.6)}`
          },
          ...$n
        },
        children: /* @__PURE__ */ t(g, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ E(
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
        borderRadius: i ? `${Z}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        x("light", "Light", vs, c),
        x("dark", "Dark", Ss, l)
      ]
    }
  );
}, Xi = ({
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
  onProfileClick: f,
  onLinkClick: g,
  menuItems: C = [],
  onLogout: b,
  glass: y = !1
}) => {
  const I = We(), R = I.palette.mode === "dark", v = d.useRef(null), w = jo(I.palette.background.paper), S = Jo({
    enabled: y,
    isDark: R,
    selector: nn,
    radius: Z
  }), [T, j] = d.useState(null);
  d.useEffect(() => {
    if (!T || typeof ResizeObserver > "u")
      return;
    const D = new ResizeObserver(() => {
      var G;
      (G = v.current) == null || G.updatePosition();
    });
    return D.observe(T), () => D.disconnect();
  }, [T]);
  const X = (D) => {
    r(), D == null || D();
  }, $ = (D) => {
    r(), D.onClick ? D.onClick() : D.path && (g == null || g(D.path));
  }, M = {
    borderRadius: y ? `${Z}px` : "8px",
    py: 1,
    gap: 0.5
  }, z = /* @__PURE__ */ E(De, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ E(_, { sx: { minWidth: 0, flex: 1 }, children: [
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
      f ? /* @__PURE__ */ t(
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
            color: R ? "#ffffff" : l,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    Go,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: v,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...y ? {
        slots: { transition: Fo },
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
      children: /* @__PURE__ */ E(
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
            [`& :is(${nn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Hi, width: n, minWidth: n },
          children: [
            y ? /* @__PURE__ */ t(
              xt,
              {
                isDark: R,
                solid: w,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Yo} ${on.duration}ms ${on.easing} both`,
                  [Ie]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ E(
              _,
              {
                ...S.containerProps,
                sx: y ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${qo} ${rn.duration}ms ${rn.easing} 70ms both`,
                  [Ie]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  S.lens,
                  f ? /* @__PURE__ */ t(
                    et,
                    {
                      onClick: () => X(f),
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
                        ...$n
                      },
                      children: z
                    }
                  ) : /* @__PURE__ */ t(_, { "data-testid": "account-menu-header", children: z }),
                  /* @__PURE__ */ t(Qe, {}),
                  m ? /* @__PURE__ */ E(
                    _,
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
                        /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(ws, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Ui,
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
                  /* @__PURE__ */ E(
                    Po,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        C.map((D) => /* @__PURE__ */ E(
                          Ze,
                          {
                            onClick: () => $(D),
                            "data-testid": `menu-item-${D.key}`,
                            sx: M,
                            children: [
                              /* @__PURE__ */ t(ye, { children: D.icon }),
                              /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: D.label }),
                              /* @__PURE__ */ t(Lo, { count: D.badge })
                            ]
                          },
                          D.key
                        )),
                        b ? /* @__PURE__ */ t(Qe, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ E(
                          Ze,
                          {
                            onClick: () => X(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...M,
                              color: R ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(ye, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(mn, { fontSize: "small" }) }),
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
}, Ki = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ji = ({
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
  activeForegroundColor: f,
  foregroundColor: g,
  surfaceBackgroundColor: C,
  flyoutSurfaceColor: b,
  collapsed: y,
  expandedWidth: I,
  collapsedWidth: R,
  topContent: v,
  submenuMode: w,
  color: S,
  hoverColor: T,
  avatarColor: j,
  showProfile: X = !0,
  userName: $ = "User",
  userEmail: M,
  userRole: z,
  userAvatar: D,
  showNotifications: G = !0,
  notificationCount: ee = 0,
  onNotificationsClick: ce,
  whatsNewCount: W = 0,
  onProfileClick: F,
  menuItems: U,
  onLogout: ne,
  theme: te = "light",
  showThemeToggler: O = !0,
  onThemeToggle: P
}) => {
  const V = We(), L = V.palette.mode === "dark", q = C ?? (L ? V.palette.background.paper : "#ffffff"), K = S ?? g ?? (L ? V.palette.text.primary : x), we = T ?? p ?? Jt(x), Ce = j ?? x, Ue = d.useRef(null), [le, _e] = d.useState(!1), de = z ? yn(z) : void 0, Q = (at) => /* @__PURE__ */ t(
    er,
    {
      name: $,
      avatar: D,
      color: Ce,
      size: at
    }
  ), he = ee + W, pe = y && w === "flyout", Oe = G ? /* @__PURE__ */ t(
    tr,
    {
      count: he,
      onClick: ce,
      color: K,
      hoverColor: we,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Xe = X ? /* @__PURE__ */ E(
    et,
    {
      ref: Ue,
      onClick: () => _e(!0),
      "aria-haspopup": "menu",
      "aria-expanded": le,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: y ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: le ? we : "transparent",
        "&:hover": { bgcolor: we },
        ...Ki
      },
      children: [
        y && !pe && G ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            xn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !he,
              children: Q(36)
            }
          )
        ) : Q(y ? 36 : 40),
        y ? null : /* @__PURE__ */ E(_, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: K, lineHeight: 1.3 },
              children: $
            }
          ),
          de ? /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: K,
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
  ) : null, Ke = !!Oe && (!y || pe || !Xe);
  return /* @__PURE__ */ E(
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
          $o,
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
            activeForegroundColor: f,
            foregroundColor: g,
            surfaceBackgroundColor: q,
            flyoutSurfaceColor: b,
            collapsed: y,
            expandedWidth: I,
            collapsedWidth: R,
            topContent: v,
            footer: Xe || Ke ? /* @__PURE__ */ E(
              De,
              {
                direction: pe ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  pe && Ke ? Oe : null,
                  Xe,
                  !pe && Ke ? Oe : null
                ]
              }
            ) : void 0,
            submenuMode: w
          }
        ),
        X ? /* @__PURE__ */ t(
          Xi,
          {
            open: le,
            anchorEl: Ue.current,
            onClose: () => _e(!1),
            width: Math.max(I - 16, 240),
            renderAvatar: Q,
            userName: $,
            userEmail: M,
            roleLabel: de,
            accentColor: x,
            tint: we,
            showThemeToggler: O,
            theme: te,
            onThemeToggle: P,
            onProfileClick: F,
            onLinkClick: n,
            menuItems: U,
            onLogout: ne,
            glass: w === "flyout"
          }
        ) : null
      ]
    }
  );
}, sn = ve(ro), an = ve(no), cn = 260, Vi = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Yi = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: a = !1
}) => {
  const c = We(), l = c.palette.mode === "dark", h = !!e, m = jo(c.palette.background.paper), x = Jo({
    enabled: a,
    isDark: l,
    selector: ".MuiMenuItem-root",
    radius: Z
  }), p = /* @__PURE__ */ t(
    Po,
    {
      autoFocusItem: h,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((f) => {
        const g = f.key === n, C = f.accentColor ?? s;
        return /* @__PURE__ */ E(
          Ze,
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
              /* @__PURE__ */ t(ye, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                _,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: C,
                    boxShadow: a ? `0 0 0 3px ${l ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Be,
                {
                  primary: f.name,
                  secondary: f.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              g ? /* @__PURE__ */ t(
                Es,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: C }
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
    Go,
    {
      open: h,
      anchorEl: e,
      onClose: o,
      onClick: (f) => f.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: Fo },
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
            minWidth: cn,
            borderRadius: `${Z}px`
          } : { ...Vi, minWidth: cn },
          children: a ? /* @__PURE__ */ E(Me, { children: [
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
                  animation: `${Yo} ${sn.duration}ms ${sn.easing} both`,
                  [Ie]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ E(
              _,
              {
                ...x.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${qo} ${an.duration}ms ${an.easing} 70ms both`,
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
}, qi = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), i = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ E(
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
          Yi,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, Zi = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: i = 0,
  ...s
}) => {
  var R;
  const {
    avatarColor: a,
    showNotifications: c,
    notificationCount: l,
    onNotificationsClick: h,
    userName: m = "User",
    userRole: x,
    userAvatar: p
  } = s, f = d.useRef(null), [g, C] = d.useState(
    null
  ), b = !!g, y = d.useRef(e);
  if (d.useEffect(() => {
    e && !y.current && C(null), y.current = e;
  }, [e]), !c && !n)
    return null;
  const I = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ E(Me, { children: [
    /* @__PURE__ */ E(
      De,
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
              title: e ? m : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                et,
                {
                  onClick: () => C(f.current),
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
                    ...I
                  },
                  children: /* @__PURE__ */ t(
                    On,
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
            tr,
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
      Tn,
      {
        anchorEl: g,
        onClose: () => C(null),
        placement: e ? "beside" : "above",
        width: e || (R = f.current) == null ? void 0 : R.clientWidth,
        ...s
      }
    )
  ] });
}, Qi = 120, Ji = 300, ln = ve(ro), dn = ve(no), ea = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, ta = 'input, textarea, [contenteditable="true"]', No = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(ta)) == null || o.focus();
}, oa = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: s,
  hoverColor: a
}) => {
  const c = Qo(), l = d.useContext(io), h = d.useRef(null), [m, x] = d.useState(null);
  return d.useEffect(() => {
    o === "full" && n && (No(h.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    _,
    {
      ref: h,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && l ? /* @__PURE__ */ t(
    ra,
    {
      search: e,
      color: s,
      railTooltip: c
    }
  ) : /* @__PURE__ */ E(
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
            children: /* @__PURE__ */ t(zo, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Go,
          {
            open: !!m,
            anchorEl: m,
            onClose: () => x(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => No(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, ra = ({ search: e, color: o, railTooltip: r }) => {
  const n = We().palette.mode === "dark";
  Ds(n, Oo(o, n ? 0.3 : 0.35));
  const i = `rgb(${gt()})`, s = jo(n ? "#1e2430" : "#ffffff"), a = {
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
  }, c = d.useRef(null), l = d.useRef(null), [h, m] = d.useState(!1), x = d.useRef(!1), p = d.useRef(void 0), f = d.useRef(void 0), g = () => {
    clearTimeout(p.current), clearTimeout(f.current);
  }, C = d.useCallback(() => {
    g(), x.current = !1, m(!1);
  }, []), b = () => {
    clearTimeout(f.current), h || (clearTimeout(p.current), p.current = setTimeout(
      () => m(!0),
      Qi
    ));
  }, y = () => {
    clearTimeout(p.current), clearTimeout(f.current), f.current = setTimeout(() => {
      !x.current && !ea(l.current) && m(!1);
    }, Ji);
  };
  return d.useEffect(() => g, []), d.useEffect(() => {
    if (!h)
      return;
    const I = setTimeout(() => No(l.current)), R = (w) => {
      var T, j;
      const S = w.target;
      !((T = l.current) != null && T.contains(S)) && !((j = c.current) != null && j.contains(S)) && C();
    }, v = (w) => {
      var S;
      w.key === "Escape" && (C(), (S = c.current) == null || S.focus());
    };
    return document.addEventListener("pointerdown", R), document.addEventListener("keydown", v), () => {
      clearTimeout(I), document.removeEventListener("pointerdown", R), document.removeEventListener("keydown", v);
    };
  }, [h, C]), /* @__PURE__ */ E(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Se,
          {
            title: h ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              be,
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
                  borderRadius: `${Z}px`
                },
                children: /* @__PURE__ */ t(zo, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Bo,
          {
            open: h,
            anchorEl: c.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ E(
              _,
              {
                ref: l,
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
                        animation: `${Yo} ${ln.duration}ms ${ln.easing} both`,
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
                        animation: `${qo} ${dn.duration}ms ${dn.easing} 60ms both`,
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
}, na = 100, sa = () => {
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
        }, na));
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
}, ia = 100, un = 80, Ro = 56, aa = 300, Io = 288, At = 72, Co = 68, qt = 8, ca = Z, la = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", da = 68, ua = { xs: 2, md: 5 }, fa = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), ha = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, fc = ({
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
  brandColor: f,
  contentPadding: g = ua,
  userMenuItems: C,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: I,
  activeSidebarForegroundColor: R,
  enableRefreshToken: v = !1,
  activePath: w,
  onLinkClick: S,
  showProfile: T = !0,
  userName: j,
  userRole: X,
  userAvatar: $,
  userEmail: M,
  onLogout: z,
  showSettings: D = !0,
  onSettingsClick: G,
  onProfileClick: ee,
  showNotifications: ce = !0,
  notificationCount: W = 0,
  NotificationSidebarContent: F,
  whatsNewCount: U = 0,
  onNotificationsClick: ne,
  platforms: te,
  currentPlatformKey: O,
  onPlatformSelect: P,
  onVerify: V,
  alertProps: L,
  style: q,
  sidebarStyles: K,
  contentStyles: we,
  accentColor: Ce,
  sidebarAccentColor: Ue,
  sidebarForegroundColor: le,
  contentBackgroundColor: _e,
  theme: de = "light",
  showThemeToggler: Q = !1,
  onThemeToggle: he,
  GlobalChatSidebar: pe,
  useChatSidebar: Oe,
  chatPanelMode: Xe = "docked",
  chatPanelPosition: Ke = "right",
  chatPanelWidth: bt = 420,
  onChatClose: at,
  showAssistant: tt = !1,
  assistantPlacement: yt = "sidebar",
  assistantShortcut: Ft = "j",
  onAssistantClick: ot,
  assistantActive: St = !1,
  assistantBusy: vt = !1,
  customNavbar: wt,
  customNavbarProps: ao,
  redirectToLogin: ct,
  apiBaseUrl: Bt
}) => {
  const lt = ts(), u = os(lt.breakpoints.down("md")), k = Cr(
    () => fn(wi(de)),
    [de]
  ), H = de === "dark", N = Ce ?? "#01584f", B = Ue ?? N, J = _e ?? (H ? "hsl(220, 35%, 9%)" : "#f2f9fc"), se = a === "collapsible", oe = a === "panel", Te = oe && i && !u, Le = a === "rail-labeled", Mn = se || Le, Ae = b ?? (H ? "hsl(220, 30%, 7%)" : "#ffffff"), co = y ?? Ae, Pe = le ?? (H ? "#ffffff" : B), Et = I ?? Jt(Pe), Rt = y ? _o(co) : Pe, or = (A) => /* @__PURE__ */ t(
    ue,
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
  ), Wt = f ?? Rt, [rr, lo] = nt(
    null
  ), uo = ((te == null ? void 0 : te.length) ?? 0) > 1, Dn = _r(() => lo(null), []), Ln = (A) => {
    lo(null), P ? P(A) : A.key !== O && A.url && window.location.assign(A.url);
  }, nr = (A) => uo ? /* @__PURE__ */ t(
    qi,
    {
      anchorEl: rr,
      onClose: Dn,
      platforms: te,
      currentKey: O,
      onSelect: Ln,
      accentColor: N,
      glass: c === "flyout" && (se || oe) && !u,
      children: A
    }
  ) : A, Pt = uo ? (A) => lo(A.currentTarget) : x, zt = uo ? !!rr : void 0, fo = nr(
    m ?? or(Wt)
  ), Nn = nr(
    m ?? or(f ?? Pe)
  ), ho = sa(), Ne = c === "flyout" && (se || oe), ke = Ne || !ho.expanded, sr = Ne ? "popover" : "expand", ir = Ne ? Co : At, ar = Ne ? "transparent" : Ae, cr = Ne && !y ? "transparent" : co, [kn, lr] = nt(!1), Fn = _r(() => lr(!1), []);
  let ge = 0;
  i && !u && (Le ? ge = un : Ne ? ge = Co + 2 * qt : se || oe ? ge = At : ge = ia);
  const [dr, rt] = nt(!1), [ur, po] = nt(!1), xe = u && l === "bottom-bar", fr = `calc(${An}px + env(safe-area-inset-bottom, 0px))`, [mo, hr] = nt({ open: !1, tab: "notifications" }), pr = () => hr((A) => ({ ...A, open: !1 })), Bn = ce && !!F, [Wn, Pn] = nt(!0), [zn, Gn] = nt(!1), go = Oe == null ? void 0 : Oe(), mr = (go == null ? void 0 : go.isOpen) ?? !1, gr = Xe === "floating" ? "floating" : "docked", Hn = gr === "docked" && mr && pe && !u ? bt : 0, Gt = vo(V), xr = vo(!1), br = Cr(
    () => vi(Bt),
    [Bt]
  );
  Xt(() => {
    Gt.current = V;
  }, [V]);
  const xo = vo(ot);
  xo.current = ot;
  const It = tt && Ft ? Ft.toLowerCase() : null;
  Xt(() => {
    if (!It)
      return;
    const A = (ie) => {
      (ie.metaKey || ie.ctrlKey) && !ie.altKey && !ie.shiftKey && ie.key.toLowerCase() === It && xo.current && (ie.preventDefault(), xo.current());
    };
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [It]);
  const yr = (A) => {
    const ie = z(A);
    ie instanceof Promise && ie.catch((je) => {
      console.error("Error in logout handler:", je);
    });
  };
  if (Xt(() => {
    (() => {
      var ie;
      try {
        const { isAuthenticated: je } = yi();
        if (!je) {
          console.log("No session found, redirecting to login"), kt(), ct();
          return;
        }
        if (!xr.current) {
          const { user: _t, error: So } = Si();
          if (_t && !So) {
            const Zn = {
              name: _t.name || "",
              email: _t.email || "",
              profilePicture: _t.profilePicture || "",
              role: _t.role || ""
            };
            xr.current = !0, (ie = Gt.current) == null || ie.call(Gt, Zn);
          } else
            So && console.error("Error getting user data:", So);
        }
        Gn(!0);
      } catch (je) {
        console.error("Error checking session:", je), kt(), ct();
      } finally {
        Pn(!1);
      }
    })();
  }, [ct]), Xt(() => {
    v && Ei(br, ct);
  }, [v, br]), Wn)
    return /* @__PURE__ */ t(Ir, { theme: k, children: /* @__PURE__ */ t(To.Provider, { value: B, children: /* @__PURE__ */ t(
      mt.Provider,
      {
        value: Ae,
        children: /* @__PURE__ */ E(
          ue,
          {
            sx: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              backgroundColor: "background.default"
            },
            children: [
              /* @__PURE__ */ t(
                rs,
                {
                  size: 60,
                  thickness: 4,
                  sx: { color: N }
                }
              ),
              /* @__PURE__ */ t(ue, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
            ]
          }
        )
      }
    ) }) });
  if (!zn)
    return null;
  const Ct = p ?? (wt ? /* @__PURE__ */ t(wt, { ...ao }) : null), Un = (A) => {
    rt(!1), po(!1), hr({ open: !0, tab: A });
  }, bo = F && (() => Un("notifications")), Xn = W + U, Sr = {
    avatarColor: B,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: C == null ? void 0 : C.map(
      (A) => A.onClick || !A.path ? A : { ...A, onClick: () => S == null ? void 0 : S(A.path) }
    ),
    showNotifications: ce,
    notificationCount: W,
    whatsNewCount: U,
    onNotificationsClick: bo,
    showProfile: T,
    userName: j,
    userRole: X,
    userAvatar: $,
    showSettings: D,
    onSettingsClick: G,
    showThemeToggler: Q,
    theme: de,
    onThemeToggle: he,
    onLogout: yr
  }, yo = (A) => /* @__PURE__ */ t(
    Zi,
    {
      ...Sr,
      compact: A,
      color: Pe,
      hoverColor: Et
    }
  ), vr = It ? [fa() ? "⌘" : "Ctrl", It.toUpperCase()] : void 0, Kn = (A) => tt && yt === "sidebar" ? /* @__PURE__ */ t(
    Zr,
    {
      variant: A ? "sidebar-icon" : "sidebar",
      onClick: ot,
      active: St,
      busy: vt,
      shortcutKeys: vr,
      accentColor: Pe
    }
  ) : null, jn = (A) => Ct ? /* @__PURE__ */ t(
    oa,
    {
      search: Ct,
      mode: A,
      onExpand: () => {
        ho.pin(), lr(!0);
      },
      autoFocus: kn,
      onAutoFocused: Fn,
      color: Pe,
      hoverColor: Et
    }
  ) : null, Ht = (A) => {
    const ie = Kn(A !== "full"), je = jn(A);
    return ie || je ? /* @__PURE__ */ E(
      is,
      {
        spacing: 1.5,
        sx: { alignItems: A === "full" ? "stretch" : "center" },
        children: [
          ie,
          je
        ]
      }
    ) : void 0;
  }, wr = () => /* @__PURE__ */ t(
    $o,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: w,
      onLinkClick: S,
      showHeaderBar: se,
      logo: fo,
      title: n,
      onBrandClick: Pt,
      brandMenuOpen: zt,
      brandColor: Wt,
      headerBackgroundColor: se ? cr : void 0,
      headerForegroundColor: se ? Rt : void 0,
      activeAccentColor: B,
      groupAccentColor: I,
      activeForegroundColor: R,
      foregroundColor: le,
      surfaceBackgroundColor: ar,
      flyoutSurfaceColor: Ae,
      collapsed: Le || ke,
      showLabels: Le,
      expandedWidth: Io,
      collapsedWidth: Le ? un : ir,
      topContent: Ht(
        Le ? "popover" : ke ? sr : "full"
      ),
      footer: yo(Le || ke),
      submenuMode: Ne ? "flyout" : "inline"
    }
  ), Er = (A) => Ne ? Vn(A) : Yn(A), Vn = (A) => /* @__PURE__ */ t(
    ue,
    {
      component: "aside",
      sx: {
        width: ge,
        minWidth: ge,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: J
      },
      children: /* @__PURE__ */ E(
        ue,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: qt,
            bottom: qt,
            left: qt,
            width: Co,
            borderRadius: `${ca}px`,
            display: "flex",
            flexDirection: "column",
            ...K
          },
          children: [
            /* @__PURE__ */ t(
              xt,
              {
                isDark: H,
                solid: Ae,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              ue,
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
  ), Yn = (A) => /* @__PURE__ */ t(
    ue,
    {
      component: "aside",
      sx: {
        width: At,
        minWidth: At,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        ue,
        {
          ...Ne ? {} : ho.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": ke ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: ke ? At : Io,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Ae,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: ke ? "none" : `4px 0 24px rgba(0, 0, 0, ${H ? 0.5 : 0.12})`,
            transition: la,
            ...K
          },
          children: A
        }
      )
    }
  ), qn = ha(
    g,
    lt
  );
  return /* @__PURE__ */ t(Ir, { theme: k, children: /* @__PURE__ */ t(To.Provider, { value: B, children: /* @__PURE__ */ t(mt.Provider, { value: Ae, children: /* @__PURE__ */ E(
    ue,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...q
      },
      children: [
        /* @__PURE__ */ t(ns, {}),
        u && /* @__PURE__ */ t(
          Gi,
          {
            height: Ro,
            onMenuClick: i && !xe ? () => rt(!0) : void 0,
            appName: n,
            logo: fo,
            onBrandClick: Pt,
            brandMenuOpen: zt,
            background: co,
            color: Rt,
            brandColor: Wt,
            endContent: ce ? /* @__PURE__ */ t(
              tr,
              {
                count: Xn,
                onClick: bo,
                color: Rt,
                hoverColor: Et,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !u && Le && /* @__PURE__ */ t(
          ue,
          {
            component: "aside",
            sx: {
              width: ge,
              minWidth: ge,
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
              ...K
            },
            children: wr()
          }
        ),
        i && !u && se && Er(
          /* @__PURE__ */ E(Me, { children: [
            wr(),
            (L == null ? void 0 : L.show) && !ke && /* @__PURE__ */ t(Yt, { ...L })
          ] })
        ),
        Te && Er(
          /* @__PURE__ */ E(Me, { children: [
            /* @__PURE__ */ t(
              ji,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: w,
                onLinkClick: S,
                logo: fo,
                title: n,
                onBrandClick: Pt,
                brandMenuOpen: zt,
                brandColor: Wt,
                headerBackgroundColor: cr,
                headerForegroundColor: Rt,
                activeAccentColor: B,
                groupAccentColor: I,
                activeForegroundColor: R,
                foregroundColor: le,
                surfaceBackgroundColor: ar,
                flyoutSurfaceColor: Ae,
                collapsed: ke,
                expandedWidth: Io,
                collapsedWidth: ir,
                topContent: Ht(
                  ke ? sr : "full"
                ),
                submenuMode: Ne ? "flyout" : "inline",
                color: Pe,
                hoverColor: Et,
                avatarColor: B,
                showProfile: T,
                userName: j,
                userEmail: M,
                userRole: X,
                userAvatar: $,
                showNotifications: ce,
                notificationCount: W,
                onNotificationsClick: Bn ? bo : ne,
                whatsNewCount: U,
                onProfileClick: ee,
                menuItems: C,
                onLogout: yr,
                theme: de,
                showThemeToggler: Q,
                onThemeToggle: he
              }
            ),
            (L == null ? void 0 : L.show) && !ke && /* @__PURE__ */ t(Yt, { ...L })
          ] })
        ),
        i && !u && !Mn && !oe && /* @__PURE__ */ t(
          Or,
          {
            variant: "permanent",
            sx: {
              width: ge,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: ge,
                boxSizing: "border-box",
                bgcolor: J,
                borderRight: "none"
              },
              ...K
            },
            children: /* @__PURE__ */ E(
              ue,
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
                    ue,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        Qt,
                        {
                          logo: Nn,
                          appName: n,
                          onClick: Pt,
                          menuOpen: zt,
                          color: f ?? Pe,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Ht("popover"),
                  /* @__PURE__ */ E(
                    ue,
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
                          ki,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: w,
                            onLinkClick: S,
                            accentColor: B,
                            surfaceBackgroundColor: J,
                            railShowTitles: s
                          }
                        ),
                        (L == null ? void 0 : L.show) && /* @__PURE__ */ t(Yt, { ...L })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(ue, { sx: { py: 1.5 }, children: yo(!0) })
                ]
              }
            )
          }
        ),
        i && u && /* @__PURE__ */ E(
          ss,
          {
            anchor: xe ? "bottom" : "left",
            open: dr,
            onOpen: () => rt(!0),
            onClose: () => rt(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (A) => A.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Ae,
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
                ue,
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
                $o,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: w,
                  onLinkClick: (A) => {
                    S == null || S(A), rt(!1);
                  },
                  onLinkAction: () => rt(!1),
                  collapsed: !1,
                  expandedWidth: xe ? "100%" : aa,
                  activeAccentColor: B,
                  groupAccentColor: I,
                  activeForegroundColor: R,
                  foregroundColor: le,
                  surfaceBackgroundColor: Ae,
                  topInsetPx: xe ? 8 : 0,
                  topContent: xe ? void 0 : Ht("full"),
                  footer: xe ? void 0 : yo(!1)
                }
              ),
              (L == null ? void 0 : L.show) && /* @__PURE__ */ t(Yt, { ...L })
            ]
          }
        ),
        xe && Ct && /* @__PURE__ */ t(
          zi,
          {
            open: ur,
            onClose: () => po(!1),
            search: Ct
          }
        ),
        xe && /* @__PURE__ */ t(
          Pi,
          {
            ...Sr,
            pinnedLinks: h,
            activePath: w,
            onLinkClick: S,
            onMenuClick: i ? () => rt(!0) : void 0,
            menuOpen: dr,
            onSearchClick: Ct ? () => po(!0) : void 0,
            searchOpen: ur,
            showAssistant: tt,
            onAssistantClick: ot,
            assistantActive: St,
            showProfile: T,
            background: Ae,
            color: Pe,
            activeColor: B,
            activeBackground: Et
          }
        ),
        /* @__PURE__ */ t(
          ue,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": qn,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": u ? `${Ro}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: ge ? `calc(100% - ${ge}px)` : "100%",
              mt: u ? `${Ro}px` : 0,
              // Keep the last content clear of the bottom bar
              ...xe && {
                pb: `calc(var(--lumora-content-padding) + ${fr})`
              },
              backgroundColor: J,
              ...we
            },
            children: e
          }
        ),
        pe && /* @__PURE__ */ t(
          Oi,
          {
            open: mr,
            variant: gr,
            position: Ke,
            width: bt,
            sidebarWidthPx: ge,
            bottomOffsetPx: tt && yt === "floating" ? da : 0,
            fullScreen: u,
            fullScreenBottom: xe ? fr : "0px",
            onClose: at,
            children: /* @__PURE__ */ t(pe, {})
          }
        ),
        tt && yt === "floating" && !xe && /* @__PURE__ */ t(
          Zr,
          {
            variant: "floating",
            rightOffsetPx: Hn,
            shortcutKeys: vr,
            onClick: ot,
            active: St,
            busy: vt
          }
        ),
        ce && F && /* @__PURE__ */ t(
          Or,
          {
            anchor: "right",
            open: mo.open,
            onClose: pr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              F,
              {
                onClose: pr,
                initialTab: mo.tab
              },
              mo.tab
            )
          }
        )
      ]
    }
  ) }) }) });
};
export {
  re as AUTH_ERROR_CODES,
  Y as AuthError,
  $o as CollapsibleSidebar,
  dc as FullBleedSection,
  xi as Kbd,
  fc as LumoraWrapper,
  kt as clearAuthTokens,
  fc as default,
  uc as getAuthErrorMessage,
  Nt as getAuthTokens,
  Si as getCurrentUser,
  wi as getDesignTokens,
  yi as isAuthenticated,
  Do as logAuthError,
  En as storeAuthTokens
};
