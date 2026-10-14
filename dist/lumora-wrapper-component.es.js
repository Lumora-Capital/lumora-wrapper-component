import { jsx as t, jsxs as E, Fragment as De } from "react/jsx-runtime";
import Dn from "@mui/icons-material/KeyboardArrowDownRounded";
import Ln from "@mui/icons-material/KeyboardArrowUpRounded";
import Nn from "@mui/icons-material/ChevronRightRounded";
import O from "@mui/material/Box";
import so from "@mui/material/Collapse";
import je from "@mui/material/Divider";
import me from "@mui/material/IconButton";
import Wt from "@mui/material/ListItemButton";
import ve from "@mui/material/ListItemIcon";
import ze from "@mui/material/ListItemText";
import _e from "@mui/material/Stack";
import ge from "@mui/material/Tooltip";
import oe from "@mui/material/Typography";
import { useTheme as Ge, createTheme as Uo, alpha as rt, ThemeProvider as io } from "@mui/material/styles";
import * as d from "react";
import { useMemo as ao, useState as at, useCallback as kn, useRef as fr, useEffect as zt } from "react";
import Ye from "@mui/material/ButtonBase";
import { keyframes as Ir } from "@emotion/react";
import Ho from "@mui/material/Fade";
import _r from "@mui/material/Popper";
import { useTheme as Fn, useMediaQuery as Bn, Box as ie, CircularProgress as Wn, CssBaseline as zn, Drawer as co, SwipeableDrawer as Pn, Stack as Gn } from "@mui/material";
import lo from "axios";
import Un from "@mui/material/Card";
import Hn from "@mui/material/CardContent";
import Xo from "@mui/material/Button";
import Xn from "@mui/icons-material/AutoAwesomeRounded";
import Kn from "@mui/material/Grow";
import Cr from "@mui/material/Paper";
import jn from "@mui/material/Slide";
import Vn from "@mui/material/ListSubheader";
import ot from "@mui/material/MenuItem";
import Ko from "@mui/material/MenuList";
import jo from "@mui/icons-material/MenuRounded";
import Or from "@mui/icons-material/SearchRounded";
import Vo from "@mui/icons-material/LogoutRounded";
import Yo from "@mui/icons-material/NotificationsNoneOutlined";
import Yn from "@mui/icons-material/SettingsOutlined";
import qn from "@mui/material/Avatar";
import Zn from "@mui/material/Menu";
import uo from "@mui/material/ToggleButton";
import Jn from "@mui/material/ToggleButtonGroup";
import Qn from "@mui/material/Drawer";
import es from "@mui/material/AppBar";
import ts from "@mui/material/Toolbar";
import qo from "@mui/material/Badge";
import rs from "@mui/icons-material/DarkModeOutlined";
import os from "@mui/icons-material/LightModeOutlined";
import ns from "@mui/icons-material/SettingsBrightnessOutlined";
import Zo from "@mui/material/Popover";
const Vt = ({
  logo: e,
  title: o,
  appName: r,
  onClick: n,
  color: i,
  testId: c
}) => {
  const s = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: i,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, a = /* @__PURE__ */ E(De, { children: [
    o ? /* @__PURE__ */ t(
      oe,
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
    Ye,
    {
      onClick: n,
      "aria-label": `${r} home`,
      "data-testid": c,
      focusRipple: !0,
      sx: {
        ...s,
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
      children: a
    }
  ) : /* @__PURE__ */ t(_e, { direction: "row", "data-testid": c, sx: s, children: a });
}, Qt = { stiffness: 320, damping: 24 }, Mt = { stiffness: 520, damping: 20 }, Tr = { stiffness: 260, damping: 28 }, ss = "cubic-bezier(0.32, 1.28, 0.52, 1)", is = 420, fo = 60, as = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), po = /* @__PURE__ */ new Map(), Ee = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = po.get(n);
  if (i)
    return i;
  if (!as)
    return { easing: ss, duration: is };
  const c = 1 / 600;
  let s = 0, a = 0, x = 0, m = 1 / fo;
  const h = [0];
  for (; x < 3; ) {
    const f = (-e * (s - 1) - o * a) / r;
    if (a += f * c, s += a * c, x += c, x >= m && (h.push(s), m += 1 / fo, Math.abs(s - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  h[h.length - 1] = 1;
  const g = {
    easing: `linear(${h.map((f) => Number(f.toFixed(4))).join(", ")})`,
    duration: Math.round(x * 1e3)
  };
  return po.set(n, g), g;
}, Ve = (e) => !!(e && typeof e.animate == "function"), Pe = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Pt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, cs = (e, o = 1.14) => {
  if (!Ve(e) || Pe())
    return;
  const r = Ee(Mt);
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
}, ut = (e, o) => e ? `${e}/${o.text}` : o.text, Xe = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Xe(n, o))) ?? !1 : !1;
}, $e = (e, o) => !!(o && e.path === o), Ar = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return pt(r) ? Ar(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), br = (e) => {
  const o = $r(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((s) => {
    const a = s / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, Yt = (e) => {
  const o = $r(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, ft = (e, o) => {
  const r = $r(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, $r = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Jo = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), ls = 28, ds = 180, ho = (e) => ({
  backdropFilter: `blur(${e * ls}px) saturate(${100 + e * (ds - 100)}%)`
}), us = Ir`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Le = "@media (prefers-reduced-motion: reduce)", Qo = (e, o, r) => `radial-gradient(${e}px circle at var(--lx, -9999px) var(--ly, -9999px), rgba(${r}, calc(${o} * var(--li, 0))) 0%, rgba(${r}, 0) 70%)`, He = {
  dark: { rgb: "255, 255, 255", rim: 0.45, sheen: 0.055 },
  light: { rgb: "9, 193, 174", rim: 0.55, sheen: 0.09 }
}, qt = (e) => e ? He.dark : He.light, fs = (e) => ({
  content: '""',
  position: "absolute",
  inset: 0,
  borderRadius: "inherit",
  padding: "1.25px",
  pointerEvents: "none",
  // The rim glints where the pointer is nearest (see GlassLayer's light)
  background: `${Qo(140, qt(e).rim, qt(e).rgb)}, ${e ? "linear-gradient(140deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 22%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 78%, rgba(255, 255, 255, 0.28) 100%)" : "linear-gradient(140deg, #ffffff 0%, rgba(255, 255, 255, 0.55) 22%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.4) 78%, rgba(255, 255, 255, 0.95) 100%)"}`,
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  maskComposite: "exclude"
}), ps = (e, o) => ({
  position: "relative",
  bgcolor: e ? "rgba(30, 36, 48, 0.5)" : "rgba(255, 255, 255, 0.55)",
  backgroundImage: e ? "linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 38%, rgba(0, 0, 0, 0.1) 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 40%, rgba(15, 23, 42, 0.03) 100%)",
  ...ho(1),
  WebkitBackdropFilter: ho(1).backdropFilter,
  boxShadow: e ? "0 24px 60px -12px rgba(0, 0, 0, 0.65), 0 0 0 0.5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 0 24px rgba(255, 255, 255, 0.035)" : "0 24px 60px -12px rgba(15, 23, 42, 0.3), 0 2px 8px rgba(15, 23, 42, 0.08), 0 0 0 0.5px rgba(15, 23, 42, 0.1), inset 0 1px 0 #ffffff, inset 0 0 24px rgba(255, 255, 255, 0.45)",
  "&::before": fs(e),
  // Specular glare across the top-left, as light catching a curved edge
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
    // The pointer's light on the surface, over the fixed glare
    background: `${Qo(200, qt(e).sheen, qt(e).rgb)}, ${e ? "linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 42%)" : "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 42%)"}`
  },
  "@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))": {
    bgcolor: o
  },
  "@media (prefers-reduced-transparency: reduce)": {
    bgcolor: o,
    backdropFilter: "none",
    WebkitBackdropFilter: "none"
  }
}), hs = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", Mr = (e) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: e ? "rgba(30, 36, 48, 0.72)" : "rgba(255, 255, 255, 0.78)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid",
  borderColor: e ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.8)",
  boxShadow: e ? "0 8px 24px -6px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.16)" : "0 8px 24px -6px rgba(15, 23, 42, 0.25), 0 0 0 0.5px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
  borderRadius: "10px",
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600,
  "@media (prefers-reduced-transparency: reduce)": {
    bgcolor: e ? "rgb(30, 36, 48)" : "#ffffff",
    backdropFilter: "none",
    WebkitBackdropFilter: "none"
  }
}), en = Ir`
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
`, tn = Ir`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Dr = (e, o = "rgba(9, 193, 174, 0.2)") => ({
  background: e ? "radial-gradient(circle at 30% 24%, rgba(255, 255, 255, 0.34) 0, rgba(255, 255, 255, 0.12) 22%, rgba(255, 255, 255, 0.06) 55%, rgba(255, 255, 255, 0.03) 100%)" : "radial-gradient(circle at 30% 24%, #ffffff 0, rgba(255, 255, 255, 0.92) 20%, rgba(255, 255, 255, 0.7) 55%, rgba(255, 255, 255, 0.5) 100%)",
  boxShadow: e ? `inset 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 1.5px 1px rgba(255, 255, 255, 0.28), inset 0 -10px 16px -8px ${o}, 0 12px 26px -12px rgba(0, 0, 0, 0.85)` : `inset 0 0 0 1px rgba(255, 255, 255, 0.95), inset 0 2px 2px #ffffff, inset 0 -10px 16px -8px ${o}, 0 12px 26px -12px rgba(15, 23, 42, 0.4), 0 1px 3px rgba(15, 23, 42, 0.06)`
}), Tt = (e, o, r = "solid") => {
  const [n, i, c] = r === "solid" ? [0.95, 0.74, 0.9] : [0.34, 0.12, 0.24];
  return {
    background: `radial-gradient(120% 90% at 28% 10%, rgba(255, 255, 255, ${o ? r === "solid" ? 0.3 : 0.22 : r === "solid" ? 0.26 : 0.7}) 0%, rgba(255, 255, 255, 0) 52%), linear-gradient(165deg, ${ft(e, n)} 0%, ${ft(e, i)} 55%, ${ft(e, c)} 100%)`,
    boxShadow: [
      `inset 0 1px 1px rgba(255, 255, 255, ${r === "solid" ? 0.5 : 0.75})`,
      `inset 0 0 0 1px ${ft(e, r === "solid" ? 0.55 : 0.4)}`,
      `inset 0 -8px 14px -8px rgba(255, 255, 255, ${o ? 0.18 : 0.35})`,
      `0 8px 18px -8px ${ft(e, o ? 0.7 : 0.55)}`
    ].join(", ")
  };
}, ms = (e, o) => {
  const r = e ? "inset 0 1px 2px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 0 rgba(255, 255, 255, 0.08)" : "inset 0 1px 2px rgba(15, 23, 42, 0.12), inset 0 0 0 1px rgba(15, 23, 42, 0.05), 0 1px 0 #ffffff";
  return {
    rest: {
      background: e ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.5)",
      boxShadow: r,
      borderRadius: "12px",
      transition: "box-shadow 180ms ease, background 180ms ease"
    },
    hover: {
      background: e ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.7)"
    },
    focus: {
      background: e ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.8)",
      boxShadow: `${r}, 0 0 0 3px ${o}, 0 0 18px ${o}`
    }
  };
}, Zt = "data-rail-item", gs = `[${Zt}], button, [role="button"]`, er = d.createContext(!1), Lr = () => {
  const e = d.useContext(er), o = Ge();
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: { sx: Mr(o.palette.mode === "dark") },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, ht = Ee(Qt), mo = Ee(Mt), rn = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  lean: c = 3
}) => {
  const s = d.useRef(null), [a, x] = d.useState(null), m = d.useRef(null), h = d.useRef(null), g = (u, y) => {
    h.current = y;
    const _ = y.getBoundingClientRect(), C = u.getBoundingClientRect(), M = n ?? _.width, V = n ?? _.height, G = {
      top: Math.round(_.top - C.top + (_.height - V) / 2),
      left: Math.round(_.left - C.left + (_.width - M) / 2),
      width: Math.round(M),
      height: Math.round(V)
    };
    x(
      (T) => T && T.visible && T.top === G.top && T.left === G.left && T.width === G.width && T.height === G.height ? T : { ...G, visible: !0, instant: !(T != null && T.visible) }
    );
  }, f = (u, y) => {
    var C;
    const _ = (C = y == null ? void 0 : y.closest) == null ? void 0 : C.call(y, r);
    return _ && u.contains(_) ? _ : null;
  }, S = (u) => {
    if (!e)
      return;
    const y = f(u.currentTarget, u.target);
    y && g(u.currentTarget, y);
  }, R = (u) => {
    if (!e)
      return;
    const y = f(u.currentTarget, u.target);
    y && u.target.matches(":focus-visible") && g(u.currentTarget, y);
  }, v = (u) => {
    const y = s.current, _ = h.current;
    if (!e || !y || !_ || !c || Pe())
      return;
    const C = _.getBoundingClientRect(), M = (V, G) => Math.max(-1, Math.min(1, V / (G / 2))) * c;
    y.style.transform = `translate(${M(u.clientX - (C.left + C.width / 2), C.width)}px, ${M(u.clientY - (C.top + C.height / 2), C.height)}px)`;
  }, b = () => {
    h.current = null, s.current && (s.current.style.transform = ""), x((u) => u != null && u.visible ? { ...u, visible: !1 } : u);
  }, p = (u) => {
    const y = u.relatedTarget;
    (!y || !u.currentTarget.contains(y)) && (u.currentTarget.matches(":hover") || b());
  };
  return d.useEffect(() => {
    const u = s.current;
    if (!(a != null && a.visible)) {
      m.current = null;
      return;
    }
    const y = m.current;
    if (m.current = a.top, !Ve(u) || Pe())
      return;
    if (y === null || a.instant) {
      u.animate([{ scale: "0.55" }, { scale: "1" }], {
        duration: mo.duration,
        easing: mo.easing
      });
      return;
    }
    const _ = Math.min(Math.abs(a.top - y) / 220, 0.3);
    _ && u.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - _ / 2} ${1 + _}`, offset: 0.28 },
        {
          scale: `${1 + _ / 4} ${1 - _ / 3}`,
          offset: 0.62
        },
        { scale: "1 1" }
      ],
      { duration: ht.duration, easing: "ease-out" }
    );
  }, [a == null ? void 0 : a.top, a == null ? void 0 : a.visible, a == null ? void 0 : a.instant]), {
    lens: e && a ? /* @__PURE__ */ t(
      O,
      {
        ref: s,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": a.visible ? "true" : "false",
        sx: {
          ...Dr(o),
          backdropFilter: "blur(8px) saturate(170%)",
          WebkitBackdropFilter: "blur(8px) saturate(170%)",
          borderRadius: `${i}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: a.width,
          height: a.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset. `transform` carries
          // only the lean.
          translate: `${a.left}px ${a.top}px`,
          // Shrinks away as it fades; wells back up on return
          scale: a.visible ? "1" : "0.7",
          opacity: a.visible ? 1 : 0,
          pointerEvents: "none",
          transition: a.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${ht.duration}ms ${ht.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [Le]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: S,
      onMouseMove: v,
      onMouseLeave: b,
      onFocus: R,
      onBlur: p,
      onScrollCapture: b
    } : {}
  };
}, xs = (e, o) => {
  const r = rn({
    enabled: e,
    isDark: o,
    selector: gs,
    size: 46,
    radius: 18
  });
  return {
    ...r,
    lens: r.lens ? d.cloneElement(r.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, bs = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n,
  activeKey: i
}) => {
  const c = d.useRef(null), [s, a] = d.useState(null), x = d.useRef(null), m = d.useCallback(
    (g) => {
      const f = n.current;
      if (!e || !f)
        return;
      const S = f.querySelector(
        `[${Zt}][data-active="true"]`
      );
      if (!S) {
        a(
          (p) => p != null && p.visible ? { ...p, visible: !1 } : p
        );
        return;
      }
      const R = S.getBoundingClientRect(), v = f.getBoundingClientRect(), b = {
        top: Math.round(R.top - v.top),
        left: Math.round(R.left - v.left),
        width: Math.round(R.width),
        height: Math.round(R.height)
      };
      a(
        (p) => p && p.visible && p.top === b.top && p.left === b.left && p.width === b.width && p.height === b.height ? p : {
          ...b,
          visible: !0,
          instant: g || !(p != null && p.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    m(!1);
  }, [m, i]), d.useEffect(() => {
    const g = n.current;
    if (!e || !g || typeof ResizeObserver > "u")
      return;
    const f = new ResizeObserver(() => m(!0));
    return f.observe(g), () => f.disconnect();
  }, [e, n, m]), d.useEffect(() => {
    const g = c.current;
    if (!(s != null && s.visible)) {
      x.current = null;
      return;
    }
    const f = x.current;
    if (x.current = s.top, f === null || s.instant || !Ve(g) || Pe())
      return;
    const S = Math.min(Math.abs(s.top - f) / 200, 0.32);
    S && g.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - S / 2} ${1 + S}`, offset: 0.28 },
        {
          scale: `${1 + S / 4} ${1 - S / 3}`,
          offset: 0.62
        },
        { scale: "1 1" }
      ],
      { duration: ht.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    O,
    {
      ref: c,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...Tt(r, o),
        borderRadius: "12px",
        position: "absolute",
        top: 0,
        left: 0,
        width: s.width,
        height: s.height,
        translate: `${s.left}px ${s.top}px`,
        scale: s.visible ? "1" : "0.7",
        opacity: s.visible ? 1 : 0,
        pointerEvents: "none",
        transition: s.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${ht.duration}ms ${ht.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Le]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, go = 14, ys = 18, Ss = "blur(12px) saturate(180%) brightness(1.04)", vs = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Es = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), c = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(c)}`;
}, Rs = 140, xo = 0.22, ws = 0.14, Is = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, c = { x: 0, y: 0, i: 0 };
    let s = 0;
    const a = () => {
      var S;
      const f = e.current;
      f && (f.style.setProperty("--lx", `${c.x.toFixed(1)}px`), f.style.setProperty("--ly", `${c.y.toFixed(1)}px`), f.style.setProperty("--li", c.i.toFixed(3)), (S = n.current) == null || S.call(n, c.x, c.y, c.i));
    }, x = () => {
      c.x += (i.x - c.x) * xo, c.y += (i.y - c.y) * xo, c.i += (i.i - c.i) * ws;
      const f = Math.abs(i.x - c.x) < 0.3 && Math.abs(i.y - c.y) < 0.3 && Math.abs(i.i - c.i) < 3e-3;
      f && (c.x = i.x, c.y = i.y, c.i = i.i), a(), s = f ? 0 : requestAnimationFrame(x);
    }, m = () => {
      s || (s = requestAnimationFrame(x));
    }, h = (f) => {
      const S = e.current;
      if (f.pointerType === "touch" || !S)
        return;
      const R = S.getBoundingClientRect();
      if (!R.width || !R.height)
        return;
      i.x = (f.clientX - R.left) * S.offsetWidth / R.width, i.y = (f.clientY - R.top) * S.offsetHeight / R.height;
      const v = Math.max(
        R.left - f.clientX,
        0,
        f.clientX - R.right
      ), b = Math.max(
        R.top - f.clientY,
        0,
        f.clientY - R.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(v, b) / Rs), c.i < 0.01 && (c.x = i.x, c.y = i.y), m();
    }, g = () => {
      i.i = 0, m();
    };
    return document.addEventListener("pointermove", h, { passive: !0 }), document.documentElement.addEventListener("mouseleave", g), () => {
      cancelAnimationFrame(s), document.removeEventListener("pointermove", h), document.documentElement.removeEventListener("mouseleave", g);
    };
  }, [e, o]);
}, Dt = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: c = !0,
    onLight: s
  }, a) => {
    const x = d.useRef(null);
    Is(x, c, s);
    const m = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [h, g] = d.useState(null), f = d.useRef(null), S = d.useCallback(
      (b) => {
        var w;
        if (x.current = b, typeof a == "function" ? a(b) : a && (a.current = b), (w = f.current) == null || w.disconnect(), f.current = null, !b || !i || !vs || typeof ResizeObserver > "u")
          return;
        const p = () => {
          const u = b.offsetWidth, y = b.offsetHeight;
          g(
            (_) => (_ == null ? void 0 : _.width) === u && _.height === y ? _ : u && y ? { width: u, height: y } : null
          );
        };
        f.current = new ResizeObserver(p), f.current.observe(b), p();
      },
      [a, i]
    ), R = d.useMemo(
      () => h ? Es(h.width, h.height, go) : null,
      [h]
    ), v = i && !!(R && h);
    return /* @__PURE__ */ E(De, { children: [
      v ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ E(
            "filter",
            {
              id: m,
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
                    href: R,
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
                    stdDeviation: go / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: ys,
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
          "data-refract": v ? "true" : void 0,
          sx: [
            ps(e, o),
            v ? {
              backdropFilter: `url(#${m}) ${Ss}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
Dt.displayName = "GlassLayer";
const We = 44, bo = 4, Nr = 12, yo = 1.4, _s = 6, kr = 6, Kt = Nr + kr, Jt = 10, So = 0.12, vo = 0.75, Cs = Jt + 32, Os = 90, Ts = 22, As = 1190, $s = 1195, Ke = Ee(Qt), Me = Ee(Mt), Eo = Ee(Tr), Ms = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const c = Math.min(i, r / 2, n / 2), s = e + r, a = o + n, x = `A ${c} ${c} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + c} ${o} H ${s - c} ${x} ${s} ${o + c} V ${a - c} ${x} ${s - c} ${a} H ${e + c} ${x} ${e} ${a - c} V ${o + c} ${x} ${e + c} ${o} Z')`;
}, Ds = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: i,
  activePath: c,
  focusFirst: s = !1,
  onNavigate: a,
  onClose: x,
  panelProps: m,
  accentColor: h,
  activeForegroundColor: g,
  solidSurface: f
}) => {
  const S = Ge(), R = S.palette.mode === "dark", v = !!(e && r), b = d.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const p = b.current, w = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const I = r.getBoundingClientRect();
      return {
        x: n,
        y: I.top,
        left: n,
        right: n,
        top: I.top,
        bottom: I.bottom,
        width: 0,
        height: I.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), u = d.useRef(w);
  w && (u.current = w), d.useEffect(() => {
    r && cs(r);
  }, [r]);
  const [y, _] = d.useState(!1);
  d.useEffect(() => {
    if (!v) {
      _(!1);
      return;
    }
    let I = 0;
    const W = requestAnimationFrame(() => {
      I = requestAnimationFrame(() => _(!0));
    });
    return () => {
      cancelAnimationFrame(W), cancelAnimationFrame(I);
    };
  }, [v]);
  const C = d.useMemo(
    () => p ? Ar(p.group.subitems, p.group.icon) : [],
    [p]
  ), M = d.useRef(null), V = d.useRef(null), G = d.useRef(0), T = d.useRef(null), D = d.useRef([]), A = C.findIndex(
    ({ sub: I }) => $e(I, c)
  ), [P, ne] = d.useState(0);
  d.useEffect(() => {
    ne(Math.max(A, 0));
  }, [o]), d.useEffect(() => {
    if (!v || !s)
      return;
    const I = setTimeout(() => {
      var W;
      return (W = D.current[0]) == null ? void 0 : W.focus();
    });
    return () => clearTimeout(I);
  }, [v, s, o]);
  const le = (I) => {
    var U;
    const W = Math.max(0, Math.min(I, C.length - 1));
    ne(W), (U = D.current[W]) == null || U.focus();
  }, k = (I, W) => {
    switch (I.key) {
      case "ArrowRight":
        le(W + 1);
        break;
      case "ArrowLeft":
        W === 0 ? x(!0) : le(W - 1);
        break;
      case "Home":
        le(0);
        break;
      case "End":
        le(C.length - 1);
        break;
      case "Tab":
        x(!0);
        break;
      default:
        return;
    }
    I.preventDefault();
  }, B = (I) => {
    var Re;
    const W = D.current.slice(0, C.length).filter((ee) => !!ee);
    if (!W.length)
      return;
    const U = I !== null && I < W.length && !Pe(), Z = `translate ${Me.duration}ms ${Me.easing}, scale ${Me.duration}ms ${Me.easing}`, K = W.map((ee) => ee.offsetLeft + We / 2), Ne = W.map(
      (ee, ce) => U && ce === I ? yo : 1
    ), se = U ? (yo - 1) * We : 0, ue = K[0] - We / 2, de = K[K.length - 1] + We / 2, fe = U ? Math.min(
      Math.min(
        1,
        Math.max(
          0,
          (K[I] - ue) / (de - ue)
        )
      ),
      _s / se
    ) : 0;
    let be = ue - se * fe;
    W.forEach((ee, ce) => {
      const Ce = We * Ne[ce], qe = be + Ce / 2;
      be += Ce + bo, ee.style.transition = `${Z}, background 160ms ease, box-shadow 160ms ease`, ee.style.translate = U ? `${qe - K[ce]}px 0` : "", ee.style.scale = U ? String(Ne[ce]) : "", U ? ee.style.setProperty("--dock-scale", String(Ne[ce])) : ee.style.removeProperty("--dock-scale");
    }), (Re = T.current) == null || Re.call(T);
  }, X = d.useRef(null);
  d.useEffect(() => {
    X.current = null;
  }, [o]);
  const F = (I) => {
    X.current !== I && (X.current = I, cancelAnimationFrame(G.current), G.current = requestAnimationFrame(() => B(I)));
  };
  d.useEffect(() => () => cancelAnimationFrame(G.current), []);
  const Q = S.palette.text.primary, xe = R ? S.palette.text.primary : h;
  return /* @__PURE__ */ E(De, { children: [
    /* @__PURE__ */ t(Ho, { in: v, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      O,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => x(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: i ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...i ? { clipPath: Ms(i) } : {},
          zIndex: As,
          bgcolor: hs(R)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      _r,
      {
        open: v,
        anchorEl: w ?? u.current,
        placement: "right",
        transition: !0,
        modifiers: [
          { name: "offset", options: { offset: [0, Jt] } },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: $s,
          transition: y ? `transform ${Ke.duration}ms ${Ke.easing}` : "none",
          [Le]: { transition: "none" }
        },
        children: ({ TransitionProps: I }) => /* @__PURE__ */ t(
          zs,
          {
            in: (I == null ? void 0 : I.in) ?? v,
            onEnter: I == null ? void 0 : I.onEnter,
            onExited: I == null ? void 0 : I.onExited,
            groupKey: (p == null ? void 0 : p.key) ?? null,
            panelProps: m,
            isDark: R,
            solidSurface: f,
            groupText: p == null ? void 0 : p.group.text,
            glassRef: V,
            shapeRef: T,
            children: p ? /* @__PURE__ */ t(De, { children: /* @__PURE__ */ t(
              O,
              {
                ref: M,
                role: "menu",
                "aria-label": p.group.text,
                onPointerLeave: () => F(null),
                sx: {
                  position: "relative",
                  display: "flex",
                  gap: `${bo}px`,
                  // No room kept for magnification: a grown tile rises out of
                  // the glass, as icons rise out of the Dock
                  px: 0
                },
                children: C.map(({ sub: W, icon: U }, Z) => /* @__PURE__ */ t(
                  on,
                  {
                    ref: (K) => {
                      D.current[Z] = K;
                    },
                    sub: W,
                    icon: U,
                    index: Z,
                    active: $e(
                      W,
                      c
                    ),
                    tabIndex: Z === P ? 0 : -1,
                    onClick: () => {
                      a(W.path), x();
                    },
                    onKeyDown: (K) => k(K, Z),
                    onFocus: (K) => {
                      ne(Z), K.currentTarget.matches(
                        ":focus-visible"
                      ) && F(Z);
                    },
                    onHoverStart: (K) => {
                      K !== "touch" && F(Z);
                    },
                    accentColor: h,
                    activeForegroundColor: g,
                    labelColor: Q,
                    iconColor: xe,
                    isDark: R
                  },
                  W.path
                ))
              },
              p.key
            ) }) : null
          }
        )
      }
    )
  ] });
}, Ot = 18, Ls = 160, yr = 14, Ns = 22, ks = 2.5, Fs = 1, Ro = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, Bs = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, Ws = (e, o, r) => {
  const n = kr, i = Ot, c = Ot + o / 2, s = Math.max(e, ...r.map((b) => b.right + n)), a = {
    cx: s / 2,
    cy: c,
    hx: s / 2,
    hy: o / 2,
    r: Kt
  }, x = r.filter((b) => b.bottom - b.top > We * 1.02).map((b) => {
    const p = (b.right - b.left) / We;
    return {
      cx: (b.left + b.right) / 2,
      cy: (b.top + b.bottom) / 2 + Ot,
      hx: (b.right - b.left) / 2 + n,
      hy: (b.bottom - b.top) / 2 + n,
      r: Nr * p + n
    };
  }), m = (b, p) => x.reduce(
    (w, u) => Bs(w, Ro(b, p, u), Ns),
    Ro(b, p, a)
  ), h = (b, p) => {
    let w = c, u = c + p * (o / 2 + i);
    if (m(b, w) > 0)
      return null;
    for (let y = 0; y < 12; y += 1) {
      const _ = (w + u) / 2;
      m(b, _) <= 0 ? w = _ : u = _;
    }
    return w;
  }, g = Math.min(0, ...x.map((b) => b.cx - b.hx)) - 2, f = Math.max(s, ...x.map((b) => b.cx + b.hx)) + 2, S = [], R = [];
  for (let b = g; b <= f; ) {
    const p = h(b, -1), w = h(b, 1);
    if (p !== null && w !== null) {
      const y = +(b + yr).toFixed(1);
      S.push([y, +p.toFixed(1)]), R.push([y, +w.toFixed(1)]);
    }
    const u = b - g < Kt + 4 || f - b < Kt + 4;
    b += u ? Fs : ks;
  }
  return S.length ? `M ${[...S, ...R.reverse()].map(([b, p]) => `${b} ${p}`).join(" L ")} Z` : "";
}, wo = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((c) => {
    Ve(c) && c.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    });
  });
}, zs = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: i,
  isDark: c,
  solidSurface: s,
  groupText: a,
  glassRef: x,
  shapeRef: m,
  children: h
}) => {
  const g = d.useRef(null), f = d.useRef(null), S = d.useRef(null), R = d.useRef(null), v = d.useRef(null), b = d.useCallback(
    (k, B, X) => {
      var F, Q;
      (F = v.current) == null || F.setAttribute("cx", String(k)), (Q = v.current) == null || Q.setAttribute("cy", String(B)), R.current && (R.current.style.opacity = String(
        X * (c ? He.dark.rim : He.light.rim)
      ));
    },
    [c]
  ), p = d.useRef(null), w = d.useRef(null), u = `lumora-flyout-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, y = d.useRef(0), _ = d.useRef(0), C = d.useRef(""), M = () => {
    var xe, I, W, U;
    const k = g.current, B = f.current;
    if (!k || !B)
      return !1;
    const X = k.getBoundingClientRect(), F = Array.from(
      k.querySelectorAll('[role="menuitem"]'),
      (Z) => {
        const K = Z.getBoundingClientRect();
        return {
          left: K.left - X.left,
          right: K.right - X.left,
          top: K.top - X.top,
          bottom: K.bottom - X.top
        };
      }
    ), Q = Ws(
      k.offsetWidth,
      k.offsetHeight,
      F
    );
    return Q === C.current ? !1 : (C.current = Q, B.style.clipPath = `path('${Q}')`, (xe = S.current) == null || xe.setAttribute("d", Q), (I = R.current) == null || I.setAttribute("d", Q), (W = p.current) == null || W.setAttribute("d", Q), (U = w.current) == null || U.setAttribute("d", Q), !0);
  }, V = () => {
    if (_.current = 0, y.current)
      return;
    const k = () => {
      if (_.current = M() ? 0 : _.current + 1, _.current > 8) {
        y.current = 0;
        return;
      }
      y.current = requestAnimationFrame(k);
    };
    y.current = requestAnimationFrame(k);
  };
  m.current = V, d.useLayoutEffect(() => (M(), V(), () => {
    cancelAnimationFrame(y.current), y.current = 0;
  }), [n]);
  const G = d.useRef(null), T = d.useRef(null), D = d.useRef(!1), A = (k) => {
    g.current = k;
    const { ref: B } = i;
    typeof B == "function" ? B(k) : B && (B.current = k);
  }, P = () => {
    Pt(x.current), Pt(G.current), Pt(g.current);
  }, ne = () => {
    var F;
    const k = g.current, B = x.current, X = G.current;
    if (!(!Ve(k) || !B || !X)) {
      if (P(), Pe()) {
        k.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      T.current = null, B.animate(
        [
          { transform: `scale(${So}, ${vo})` },
          { transform: "none" }
        ],
        { duration: Ke.duration, easing: Ke.easing }
      ), wo(B, [0, 1], 160, "ease-out");
      try {
        (F = f.current) == null || F.animate(
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
          duration: Eo.duration,
          delay: 60,
          easing: Eo.easing,
          fill: "backwards"
        }
      );
    }
  }, le = () => {
    const k = g.current, B = x.current, X = G.current;
    if (!Ve(k) || !B || !X) {
      r == null || r();
      return;
    }
    if (P(), Pe()) {
      k.animate([{ opacity: 1 }, { opacity: 0 }], {
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
    }), wo(B, [1, 0], 200, "ease-in"), B.animate(
      [
        { transform: "none" },
        { transform: `scale(${So}, ${vo})` }
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
      le();
      return;
    }
    o == null || o(), ne();
  }, [e]), d.useLayoutEffect(() => {
    const k = g.current;
    if (!k)
      return;
    const B = k.getBoundingClientRect(), X = T.current;
    if (T.current = { width: B.width, height: B.height }, !D.current) {
      D.current = !0;
      return;
    }
    const F = x.current;
    !e || !X || !Ve(F) || !B.width || !B.height || Pe() || (Pt(F), F.animate(
      [
        {
          transform: `scale(${X.width / B.width}, ${X.height / B.height})`
        },
        { transform: "scale(0.98, 1.04)", offset: 0.35 },
        { transform: "none" }
      ],
      { duration: Ke.duration, easing: Ke.easing }
    ));
  }, [n]), /* @__PURE__ */ E(
    O,
    {
      ref: A,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": a,
      sx: {
        position: "relative",
        borderRadius: `${Kt}px`,
        p: `${kr}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -Jt - 2,
          width: Jt + 2
        }
      },
      children: [
        /* @__PURE__ */ E(
          O,
          {
            ref: x,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Ot,
              bottom: -Ot,
              left: -yr,
              right: -Ls,
              pointerEvents: "none",
              // The rail icon's centre: the panel is centred on it,
              // one gap plus half the rail's padding to the left
              transformOrigin: `${yr - Cs}px 50%`,
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
                          id: `${u}-shadow`,
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
                          id: `${u}-outside`,
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
                    /* @__PURE__ */ t("g", { mask: `url(#${u}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: p,
                        transform: "translate(0 12)",
                        fill: c ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${u}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                Dt,
                {
                  ref: f,
                  isDark: c,
                  solid: s,
                  refract: !1,
                  onLight: b,
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
                        id: `${u}-rim`,
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
                              stopOpacity: c ? 0.5 : 1
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0.25",
                              stopColor: "#ffffff",
                              stopOpacity: c ? 0.1 : 0.5
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0.55",
                              stopColor: "#ffffff",
                              stopOpacity: c ? 0.04 : 0.2
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: "#ffffff",
                              stopOpacity: c ? 0.3 : 0.9
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ t(
                      "path",
                      {
                        ref: S,
                        fill: "none",
                        stroke: `url(#${u}-rim)`,
                        strokeWidth: "1.25"
                      }
                    ),
                    /* @__PURE__ */ E(
                      "radialGradient",
                      {
                        ref: v,
                        id: `${u}-glint`,
                        gradientUnits: "userSpaceOnUse",
                        cx: "-9999",
                        cy: "-9999",
                        r: "140",
                        children: [
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0",
                              stopColor: `rgb(${c ? He.dark.rgb : He.light.rgb})`,
                              stopOpacity: "1"
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: `rgb(${c ? He.dark.rgb : He.light.rgb})`,
                              stopOpacity: "0"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ t(
                      "path",
                      {
                        ref: R,
                        fill: "none",
                        stroke: `url(#${u}-glint)`,
                        strokeWidth: "1.5",
                        style: { opacity: 0 }
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(O, { ref: G, sx: { position: "relative" }, children: h })
      ]
    }
  );
}, on = d.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: i,
    onClick: c,
    onKeyDown: s,
    onFocus: a,
    onHoverStart: x,
    accentColor: m,
    activeForegroundColor: h,
    labelColor: g,
    iconColor: f,
    isDark: S
  }, R) => {
    const v = (u) => {
      const y = u.currentTarget.getBoundingClientRect();
      u.currentTarget.style.setProperty(
        "--mx",
        `${(u.clientX - y.left) / y.width * 100}%`
      ), u.currentTarget.style.setProperty(
        "--my",
        `${(u.clientY - y.top) / y.height * 100}%`
      );
    }, b = (u) => {
      const y = u.currentTarget;
      !Ve(y) || Pe() || y.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.1, 0.9)", offset: 0.22 },
          { transform: "scale(0.95, 1.06)", offset: 0.5 },
          { transform: "scale(1.02, 0.99)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, p = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, w = {
      ...Dr(S),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": p
    };
    return /* @__PURE__ */ E(
      Ye,
      {
        ref: R,
        role: "menuitem",
        tabIndex: i,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: c,
        onKeyDown: s,
        onFocus: a,
        onPointerMove: v,
        onMouseEnter: b,
        onPointerEnter: (u) => x(u.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: We,
          height: We,
          borderRadius: `${Nr}px`,
          color: n ? h : g,
          bgcolor: n ? m : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Tt(m, S) : {},
          transition: `translate ${Me.duration}ms ${Me.easing}, scale ${Me.duration}ms ${Me.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${us} ${Ke.duration}ms ${Ke.easing} both`,
          animationDelay: `${Os + r * Ts}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: 22,
            color: n ? h : f
          },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 160ms ease",
            background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, ${S ? 0.18 : 0.7}), transparent 65%)`
          },
          // The current page keeps its accent fill; it still glows
          "&:hover": n ? {
            "&::before": { opacity: 1 },
            "& [data-tile-name]": p
          } : w,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : w,
            "& [data-tile-name]": p,
            outline: "2px solid",
            outlineColor: m,
            outlineOffset: 2
          },
          [Le]: {
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
                ...Mr(S),
                position: "absolute",
                top: "100%",
                left: "50%",
                translate: "-50% 8px",
                transformOrigin: "top center",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: 0,
                scale: "calc(0.6 / var(--dock-scale, 1))",
                transition: `opacity 140ms ease, scale ${Me.duration}ms ${Me.easing}`,
                zIndex: 1,
                [Le]: { transition: "opacity 140ms ease" }
              },
              children: e.text
            }
          )
        ]
      }
    );
  }
);
on.displayName = "FlyoutTile";
const Ps = 100, Gs = 250, Us = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const i = d.useRef(/* @__PURE__ */ new Map()), c = d.useRef(null), s = d.useRef(void 0), a = d.useRef(void 0), x = () => {
    clearTimeout(s.current), s.current = void 0;
  }, m = () => {
    clearTimeout(a.current), a.current = void 0;
  }, h = (p, w, u = !1) => {
    x(), m(), r({ key: p, pinned: w, focusFirst: u });
  }, g = d.useCallback((p = !1) => {
    var u, y;
    x(), m();
    const w = (u = n.current) == null ? void 0 : u.key;
    r(null), p && w && ((y = i.current.get(w)) == null || y.focus());
  }, []), f = () => {
    x(), !(!n.current || n.current.pinned) && (m(), a.current = setTimeout(() => g(), Gs));
  };
  d.useEffect(() => {
    e || g();
  }, [e, g]), d.useEffect(
    () => () => {
      x(), m();
    },
    []
  );
  const S = o !== null;
  return d.useEffect(() => {
    if (!S)
      return;
    const p = (y) => {
      var C;
      const _ = y;
      return _ ? (C = c.current) != null && C.contains(_) ? !0 : [...i.current.values()].some((M) => M.contains(_)) : !1;
    }, w = (y) => {
      p(y.target) || g();
    }, u = (y) => {
      var _;
      y.key === "Escape" && g(
        !!((_ = c.current) != null && _.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", w), document.addEventListener("keydown", u), () => {
      document.removeEventListener("pointerdown", w), document.removeEventListener("keydown", u);
    };
  }, [S, g]), {
    state: o,
    close: g,
    triggerProps: (p) => ({
      ref: (w) => {
        w ? i.current.set(p, w) : i.current.delete(p);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        m();
        const w = n.current;
        if (w) {
          w.key !== p && h(p, w.pinned);
          return;
        }
        x(), s.current = setTimeout(
          () => h(p, !1),
          Ps
        );
      },
      onMouseLeave: f,
      onClick: (w) => {
        if (w.detail === 0) {
          h(p, !0, !0);
          return;
        }
        const u = n.current;
        (u == null ? void 0 : u.key) === p && u.pinned ? g() : h(p, !0);
      },
      onKeyDown: (w) => {
        w.key === "ArrowRight" && (w.preventDefault(), h(p, !0, !0));
      }
    }),
    flyoutProps: {
      ref: c,
      onMouseEnter: m,
      onMouseLeave: f
    },
    onRailLeafEnter: () => {
      x(), n.current && !n.current.pinned && g();
    },
    getTrigger: (p) => i.current.get(p) ?? null
  };
}, Hs = 264, Xs = 72, Io = 64, Gt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ks = 16, js = 14, Vs = 4, Ys = 2.5, _o = "0.7rem", Co = 22, Oo = Ee(Mt), tt = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
  const c = d.useRef(null), [s, a] = d.useState(!1), x = d.useCallback(() => {
    const m = c.current;
    m && a(m.scrollWidth > m.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    x();
  }, [x, e]), d.useEffect(() => {
    const m = c.current;
    if (!m)
      return;
    const h = new ResizeObserver(() => x());
    return h.observe(m), () => h.disconnect();
  }, [x]), /* @__PURE__ */ t(
    ge,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !s,
      disableFocusListener: !s,
      disableTouchListener: !s,
      children: /* @__PURE__ */ t(
        oe,
        {
          ref: c,
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
}, qs = ({
  open: e,
  size: o = Ks
}) => e ? /* @__PURE__ */ t(Ln, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Dn, { sx: { fontSize: o, opacity: 0.75 } }), To = ({ open: e }) => /* @__PURE__ */ t(
  Nn,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), Ut = 600, Sr = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: i,
  logo: c,
  title: s,
  onBrandClick: a,
  showHeaderBar: x = !1,
  headerBackgroundColor: m,
  headerForegroundColor: h,
  brandColor: g,
  activeAccentColor: f = "#01584f",
  groupAccentColor: S,
  activeForegroundColor: R,
  foregroundColor: v,
  surfaceBackgroundColor: b,
  collapsed: p = !1,
  expandedWidth: w = Hs,
  collapsedWidth: u = Xs,
  showLabels: y = !1,
  topInsetPx: _ = 0,
  topContent: C,
  footer: M,
  submenuMode: V = "inline"
}) => {
  const G = Ge(), T = G.palette.mode === "dark", D = V === "flyout" && p && !y, A = Us(D), P = d.useRef(null), ne = xs(D, T), le = bs({
    enabled: D,
    isDark: T,
    color: f,
    containerRef: P,
    activeKey: r
  }), { close: k } = A;
  d.useEffect(() => {
    k();
  }, [r, k]);
  const [B, X] = d.useState(
    {}
  ), F = R ?? br(f), Q = {
    bgcolor: f,
    color: F,
    "& .MuiListItemIcon-root": { color: F }
  }, xe = {
    bgcolor: f,
    color: F,
    borderRadius: "8px"
  }, I = S ?? Yt(f), W = b ?? (T ? G.palette.background.paper : "#ffffff"), U = v ?? (T ? "text.primary" : f), Z = m ?? W, K = h ?? (m ? br(Z) : v ?? (T ? G.palette.text.primary : f)), Ne = Yt(K), se = (l) => {
    n == null || n(l);
  }, ue = (l, L) => {
    X((H) => ({ ...H, [l]: !L }));
  }, de = (l, L) => B[L] ?? Xe(l, r), fe = (l, L, H) => ({
    color: l ? F : U,
    bgcolor: l ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: l ? F : U,
      minWidth: H
    },
    "&:hover": l || y ? Q : { bgcolor: L }
  }), be = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": Q
  }, Re = (l) => {
    const L = $e(l, r), H = /* @__PURE__ */ E(
      Wt,
      {
        disabled: !l.path,
        selected: L,
        onClick: () => l.path && se(l.path),
        "data-testid": `sidebar-item-${l.text}`,
        "data-active": L ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...l.action && { pr: 6 },
          ...l.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...fe(
            L,
            I,
            l.subtitle ? 48 : 36
          ),
          ...be
        },
        children: [
          /* @__PURE__ */ t(ve, { children: l.icon }),
          /* @__PURE__ */ t(
            ze,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                tt,
                {
                  text: l.text,
                  fontWeight: Ut
                }
              ),
              secondary: l.subtitle ? /* @__PURE__ */ t(
                O,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    tt,
                    {
                      text: l.subtitle,
                      fontSize: "0.8125rem"
                    }
                  )
                }
              ) : void 0,
              sx: l.subtitle ? { my: 0 } : void 0
            }
          )
        ]
      },
      l.text
    );
    if (!l.action)
      return H;
    const { action: $ } = l;
    return /* @__PURE__ */ E(O, { sx: { position: "relative" }, children: [
      H,
      /* @__PURE__ */ t(ge, { title: $.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        me,
        {
          "aria-label": $.label,
          "data-testid": `sidebar-action-${l.text}`,
          onClick: () => {
            $.onClick(), i == null || i();
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
            borderColor: L ? "rgba(255, 255, 255, 0.35)" : I,
            color: L ? F : U,
            "&:hover": {
              bgcolor: L ? "rgba(255, 255, 255, 0.15)" : I
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: L ? F : U,
              outlineOffset: 1
            }
          },
          children: $.icon
        }
      ) })
    ] }, l.text);
  }, ee = (l) => {
    const L = Xe(l, r), H = $e(l, r), $ = ut("", l), z = de(l, $);
    return /* @__PURE__ */ E(
      O,
      {
        "data-testid": `sidebar-group-${l.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: L ? I : "transparent"
        },
        children: [
          /* @__PURE__ */ E(
            Wt,
            {
              onClick: () => ue($, z),
              "data-testid": `sidebar-item-${l.text}`,
              "data-active": H ? "true" : "false",
              "aria-expanded": z,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...fe(H, I, 36)
              },
              children: [
                /* @__PURE__ */ t(ve, { children: l.icon }),
                /* @__PURE__ */ t(
                  ze,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      tt,
                      {
                        text: l.text,
                        fontWeight: Ut
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(To, { open: z })
              ]
            }
          ),
          /* @__PURE__ */ t(so, { in: z, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            O,
            {
              "data-testid": `sidebar-children-${l.text}`,
              sx: { pb: 0.5 },
              children: l.subitems.map(
                (Y) => ce(Y, $, 1)
              )
            }
          ) })
        ]
      },
      l.text
    );
  }, ce = (l, L, H) => {
    const $ = ut(L, l), z = Vs + (H - 1) * Ys;
    if (pt(l)) {
      const re = Xe(l, r), J = $e(l, r), we = de(l, $);
      return /* @__PURE__ */ E(O, { "data-testid": `sidebar-group-${l.text}`, children: [
        /* @__PURE__ */ E(
          Wt,
          {
            onClick: () => ue($, we),
            "data-testid": `sidebar-subitem-${l.text}`,
            "data-active": re ? "true" : "false",
            "aria-expanded": we,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: z,
              ...fe(J, "action.hover", 32)
            },
            children: [
              l.icon ? /* @__PURE__ */ t(ve, { children: l.icon }) : null,
              /* @__PURE__ */ t(
                ze,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    tt,
                    {
                      text: l.text,
                      fontWeight: Ut
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(To, { open: we })
            ]
          }
        ),
        /* @__PURE__ */ t(so, { in: we, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(O, { "data-testid": `sidebar-children-${l.text}`, children: l.subitems.map(
          (Oe) => ce(Oe, $, H + 1)
        ) }) })
      ] }, $);
    }
    const Y = $e(l, r);
    return /* @__PURE__ */ E(
      Wt,
      {
        selected: Y,
        disabled: !l.path,
        onClick: () => l.path && se(l.path),
        "data-testid": `sidebar-subitem-${l.text}`,
        "data-active": Y ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: z,
          ...fe(Y, "action.hover", 32),
          ...be
        },
        children: [
          l.icon ? /* @__PURE__ */ t(ve, { children: l.icon }) : null,
          /* @__PURE__ */ t(
            ze,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                tt,
                {
                  text: l.text,
                  fontWeight: Ut
                }
              )
            }
          )
        ]
      },
      $
    );
  }, Ce = (l, L, H, $, z, Y) => {
    const re = !z, J = /* @__PURE__ */ E(
      me,
      {
        "aria-label": L,
        disabled: re,
        onClick: z,
        onMouseEnter: D ? A.onRailLeafEnter : void 0,
        ...D ? { [Zt]: "" } : {},
        "data-testid": (Y == null ? void 0 : Y.testId) ?? `sidebar-item-${L}`,
        "data-active": $ ? "true" : "false",
        sx: y ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: $ ? F : U,
          bgcolor: $ ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Co
          },
          "&:hover": xe,
          ...Gt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: $ ? F : U,
          bgcolor: $ ? f : "transparent",
          borderRadius: $ ? "8px" : "50%",
          "&:hover": {
            bgcolor: $ ? f : Y != null && Y.insideGroup ? "action.hover" : I,
            borderRadius: "8px"
          },
          ...Gt,
          ...D ? nt($) : {}
        },
        children: [
          H,
          y ? /* @__PURE__ */ t(
            tt,
            {
              text: L,
              variant: "caption",
              center: !0,
              fontSize: _o
            }
          ) : null
        ]
      }
    );
    return y ? re ? /* @__PURE__ */ t("span", { children: J }, l) : /* @__PURE__ */ t(d.Fragment, { children: J }, l) : /* @__PURE__ */ t(
      ge,
      {
        title: L,
        placement: "right",
        arrow: !D,
        ...D ? Ze : {},
        children: re ? /* @__PURE__ */ t("span", { children: J }) : J
      },
      l
    );
  }, qe = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, nt = (l) => ({
    borderRadius: "12px",
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...l ? { bgcolor: "transparent" } : {},
    transition: `transform ${Oo.duration}ms ${Oo.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), Ze = {
    slotProps: {
      tooltip: { sx: Mr(T) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, mt = (l) => {
    var z;
    const L = Xe(l, r), H = ut("", l), $ = ((z = A.state) == null ? void 0 : z.key) === H;
    return /* @__PURE__ */ t(
      O,
      {
        "data-testid": `sidebar-group-${l.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          me,
          {
            ...A.triggerProps(H),
            "aria-label": l.text,
            "aria-haspopup": "menu",
            "aria-expanded": $,
            "data-testid": `sidebar-item-${l.text}`,
            "data-active": L ? "true" : "false",
            "data-open": $ ? "true" : "false",
            [Zt]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: L ? F : U,
              bgcolor: L ? f : $ ? I : "transparent",
              ...nt(L),
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
              ...Gt
            },
            children: l.icon
          }
        )
      },
      l.text
    );
  }, Lt = (l) => {
    const L = Xe(l, r), H = $e(l, r), $ = ut("", l), z = de(l, $), Y = /* @__PURE__ */ E(
      me,
      {
        "aria-label": l.text,
        "aria-expanded": z,
        onClick: () => ue($, z),
        "data-testid": `sidebar-item-${l.text}`,
        "data-active": H ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: y ? 0.25 : 0,
          width: y ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...y ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: H ? F : U,
          bgcolor: H ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": y ? { bgcolor: f, color: F } : {
            bgcolor: H ? f : "transparent"
          },
          ...Gt
        },
        children: [
          y ? /* @__PURE__ */ t(
            O,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Co
                }
              },
              children: l.icon
            }
          ) : l.icon,
          y ? /* @__PURE__ */ t(
            tt,
            {
              text: l.text,
              variant: "caption",
              center: !0,
              fontSize: _o
            }
          ) : null,
          /* @__PURE__ */ t(qs, { open: z, size: js })
        ]
      }
    ), re = y ? Y : /* @__PURE__ */ t(ge, { title: l.text, placement: "right", arrow: !0, children: Y });
    return /* @__PURE__ */ E(
      O,
      {
        "data-testid": `sidebar-group-${l.text}`,
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
          bgcolor: L ? I : "transparent",
          ...y ? {} : { "&:hover": { bgcolor: I } }
        },
        children: [
          re,
          z ? Ar(l.subitems, l.icon).map(
            ({ sub: J, icon: we }) => Ce(
              J.path,
              J.text,
              we,
              $e(J, r),
              () => se(J.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${J.text}`
              }
            )
          ) : null
        ]
      },
      l.text
    );
  }, Je = (l) => /* @__PURE__ */ t(
    O,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Ce(
        l.text,
        l.subtitle ? `${l.text} · ${l.subtitle}` : l.text,
        l.icon,
        $e(l, r),
        l.path ? () => se(l.path) : void 0,
        { testId: `sidebar-item-${l.text}` }
      )
    },
    l.text
  ), gt = (l) => pt(l) ? D ? mt(l) : p ? Lt(l) : ee(l) : p ? Je(l) : Re(l), xt = (l) => /* @__PURE__ */ t(
    _e,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: p ? "center" : "stretch"
      },
      children: l.map(gt)
    }
  ), bt = p ? u : w, tr = () => {
    var re, J;
    const { state: l } = A, L = l ? [...e, ...o].find(
      (we) => pt(we) && ut("", we) === l.key
    ) ?? null : null, H = L ? ((re = P.current) == null ? void 0 : re.getBoundingClientRect().right) ?? u : u, $ = L ? ((J = P.current) == null ? void 0 : J.closest("[data-rail-surface]")) ?? P.current : null, z = $ == null ? void 0 : $.getBoundingClientRect(), Y = $ && z ? {
      left: z.left,
      top: z.top,
      width: z.width,
      height: z.height,
      radius: parseFloat(
        getComputedStyle($).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Ds,
      {
        group: L,
        groupKey: L ? l.key : null,
        anchor: L ? A.getTrigger(l.key) : null,
        railEdge: H,
        railShape: Y,
        activePath: r,
        focusFirst: l == null ? void 0 : l.focusFirst,
        onNavigate: se,
        onClose: A.close,
        panelProps: A.flyoutProps,
        accentColor: f,
        activeForegroundColor: F,
        solidSurface: W
      }
    );
  }, st = x ? /* @__PURE__ */ t(
    O,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Io,
        minHeight: Io,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: Z
      },
      children: c || s ? /* @__PURE__ */ t(
        Vt,
        {
          logo: c,
          title: p ? void 0 : s,
          appName: s || "App",
          onClick: a,
          color: g ?? K,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, Nt = !x && c ? /* @__PURE__ */ t(
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
        Vt,
        {
          logo: c,
          appName: s || "App",
          onClick: a,
          color: g ?? K,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, it = y ? 0.5 : p ? 1 : 1.5;
  return /* @__PURE__ */ t(er.Provider, { value: D, children: /* @__PURE__ */ E(
    O,
    {
      ref: P,
      ...ne.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": p ? "true" : "false",
      "data-labeled": y ? "true" : "false",
      sx: {
        width: bt,
        minWidth: bt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: W,
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
        ...D ? qe : {}
      },
      children: [
        ne.lens,
        le.glass,
        st ?? Nt,
        C ? /* @__PURE__ */ t(
          O,
          {
            sx: {
              flexShrink: 0,
              px: it,
              pt: 1,
              pb: 1
            },
            children: C
          }
        ) : null,
        /* @__PURE__ */ E(
          O,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: it,
              pt: _ && !x ? `${_}px` : 1,
              pb: 2
            },
            children: [
              xt(e),
              o.length > 0 ? /* @__PURE__ */ E(O, { sx: { mt: "auto", pt: 2 }, children: [
                M ? null : /* @__PURE__ */ t(
                  je,
                  {
                    sx: { mb: 1, borderColor: "divider" }
                  }
                ),
                xt(o)
              ] }) : null
            ]
          }
        ),
        M ? /* @__PURE__ */ t(O, { sx: { flexShrink: 0, px: it, pb: 1.5 }, children: /* @__PURE__ */ t(
          O,
          {
            sx: {
              borderTop: `1px solid ${Ne}`,
              pt: 1.5
            },
            children: M
          }
        ) }) : null,
        D ? tr() : null
      ]
    }
  ) });
}, vr = "var(--lumora-content-padding, 0px)", Ao = `calc(${vr} * -1)`, Pa = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: c = !0,
  sx: s
}) => /* @__PURE__ */ t(
  O,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Ao,
        mt: o ? Ao : 0,
        // Space below it, like any other block on the page
        mb: vr,
        px: c ? vr : 0,
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
      ...Array.isArray(s) ? s : [s]
    ],
    children: e
  }
), Zs = ({ keys: e }) => /* @__PURE__ */ t(
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
);
class j extends Error {
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const q = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, ae = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Be = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Js = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Be.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Be.REFRESH_TOKEN
      ), r = localStorage.getItem(Be.USER);
      e && !localStorage.getItem(ae.ACCESS_TOKEN) && localStorage.setItem(ae.ACCESS_TOKEN, e), o && !localStorage.getItem(ae.REFRESH_TOKEN) && localStorage.setItem(
        ae.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(ae.USER) && localStorage.setItem(ae.USER, r), (e || o || r) && (localStorage.removeItem(Be.ACCESS_TOKEN), localStorage.removeItem(Be.REFRESH_TOKEN), localStorage.removeItem(Be.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, pr = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new j(
        "localStorage is not available",
        q.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new j(
      "Storage quota exceeded. Please clear browser data.",
      q.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new j(
      "Access to localStorage is denied. Please check browser settings.",
      q.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new j(
      "Failed to access storage",
      q.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, hr = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new j(
        "localStorage is not available",
        q.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new j(
      "Storage quota exceeded. Please clear browser data.",
      q.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new j(
      "Access to localStorage is denied. Please check browser settings.",
      q.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new j(
      "Failed to write to storage",
      q.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, nn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, At = () => {
  try {
    Js();
    const e = pr(ae.ACCESS_TOKEN), o = pr(ae.REFRESH_TOKEN), r = pr(ae.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), nn(ae.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof j ? e : new j(
      "Failed to retrieve authentication tokens",
      q.UNKNOWN_ERROR,
      e
    );
  }
}, Qs = () => {
  try {
    const { accessToken: e, refreshToken: o } = At();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new j(
        "No authentication tokens found",
        q.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof j ? e : new j(
        "Authentication check failed",
        q.UNKNOWN_ERROR,
        e
      )
    };
  }
}, sn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new j(
        "At least one token must be provided",
        q.TOKEN_INVALID
      );
    return e && hr(ae.ACCESS_TOKEN, e), o && hr(ae.REFRESH_TOKEN, o), r && hr(ae.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof j ? n : new j(
        "Failed to store tokens",
        q.UNKNOWN_ERROR,
        n
      )
    };
  }
}, $t = () => {
  try {
    return [
      ae.ACCESS_TOKEN,
      ae.REFRESH_TOKEN,
      ae.USER,
      // Also clear legacy keys for complete cleanup
      Be.ACCESS_TOKEN,
      Be.REFRESH_TOKEN,
      Be.USER
    ].map((n) => nn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof j ? e : new j(
        "Failed to clear tokens",
        q.LOGOUT_FAILED,
        e
      )
    };
  }
}, ei = () => {
  try {
    const { user: e } = At();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof j ? e : new j(
        "Failed to retrieve user data",
        q.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Ga = (e) => {
  if (!(e instanceof j))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case q.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case q.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case q.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case q.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case q.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case q.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Er = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof j ? e.code : "UNKNOWN",
    timestamp: e instanceof j ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof j && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, ti = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = lo.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, i = [];
  const c = (s, a) => {
    i.forEach(({ resolve: x, reject: m }) => {
      s ? m(s) : a && x(a);
    }), i = [];
  };
  return o.interceptors.request.use(
    (s) => {
      const { accessToken: a } = At();
      return a && s.headers && (s.headers.Authorization = `Bearer ${a}`), s;
    },
    (s) => Promise.reject(s)
  ), o.interceptors.response.use(
    (s) => s,
    async (s) => {
      var f;
      const a = s.config, x = (f = s.response) == null ? void 0 : f.status, m = (a == null ? void 0 : a.url) || "", h = m.includes("/auth/refresh");
      if (x !== 401 || a._retry || h)
        return Promise.reject(s);
      a._retry = !0;
      const { refreshToken: g } = At();
      if (!g) {
        const S = new Error(
          "No refresh token available for token refresh"
        );
        return Er(S, "AxiosClient - Token Refresh"), $t(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (r && n)
        return new Promise((S, R) => {
          i.push({ resolve: S, reject: R });
        }).then((S) => {
          const {
            accessToken: R,
            refreshToken: v
          } = S;
          if (a.headers && (a.headers.Authorization = `Bearer ${R}`), m.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const b = JSON.parse(
                  a.data || "{}"
                );
                b.refresh_token = v, a.data = JSON.stringify(b);
              } else
                a.data && typeof a.data == "object" ? a.data.refresh_token = v : a.data = JSON.stringify({
                  refresh_token: v
                });
            } catch {
              a.data = JSON.stringify({
                refresh_token: v
              });
            }
          return o(a);
        }).catch((S) => Promise.reject(S));
      r = !0, n = lo.post(
        `${e}/auth/refresh`,
        {
          refresh_token: g
        }
      );
      try {
        const S = await n, { accessToken: R, refreshToken: v } = S.data;
        if (sn(R, v, null), c(null, {
          accessToken: R,
          refreshToken: v
        }), a.headers && (a.headers.Authorization = `Bearer ${R}`), m.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const b = JSON.parse(
                a.data || "{}"
              );
              b.refresh_token = v, a.data = JSON.stringify(b);
            } else
              a.data && typeof a.data == "object" ? a.data.refresh_token = v : a.data = JSON.stringify({
                refresh_token: v
              });
          } catch {
            a.data = JSON.stringify({
              refresh_token: v
            });
          }
        return o(a);
      } catch (S) {
        return Er(
          S,
          "AxiosClient - Token Refresh Failed"
        ), c(S), $t(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(S);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, ye = {
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
}, Se = {
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
}, ct = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, lt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, dt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, an = Uo(), Ie = an.typography.pxToRem, ri = (e) => {
  const o = e === "dark", r = [...an.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? ye[300] : ye[200],
        main: ye[400],
        dark: ye[700],
        contrastText: ye[50]
      },
      info: o ? {
        light: ye[500],
        main: ye[700],
        dark: ye[900],
        contrastText: ye[300]
      } : {
        light: ye[100],
        main: ye[300],
        dark: ye[600],
        contrastText: Se[50]
      },
      warning: o ? { light: lt[400], main: lt[500], dark: lt[700] } : { light: lt[300], main: lt[400], dark: lt[800] },
      error: o ? { light: dt[400], main: dt[500], dark: dt[700] } : { light: dt[300], main: dt[400], dark: dt[800] },
      success: o ? { light: ct[400], main: ct[500], dark: ct[700] } : { light: ct[300], main: ct[400], dark: ct[800] },
      grey: Se,
      divider: o ? rt(Se[700], 0.6) : rt(Se[300], 0.4),
      background: o ? { default: Se[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Se[400] } : { primary: Se[800], secondary: Se[600] },
      action: o ? {
        hover: rt(Se[600], 0.2),
        selected: rt(Se[600], 0.3)
      } : {
        hover: rt(Se[200], 0.2),
        selected: rt(Se[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Ie(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Ie(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Ie(30), lineHeight: 1.2 },
      h4: { fontSize: Ie(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Ie(20), fontWeight: 600 },
      h6: { fontSize: Ie(18), fontWeight: 600 },
      subtitle1: { fontSize: Ie(18) },
      subtitle2: { fontSize: Ie(14), fontWeight: 500 },
      body1: { fontSize: Ie(14) },
      body2: { fontSize: Ie(14), fontWeight: 400 },
      caption: { fontSize: Ie(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, oi = async (e, o) => {
  const { accessToken: r, refreshToken: n } = At();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return sn(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      Er(i, "TokenValidator - Refresh Failed");
    }
  return $t(), o ? o() : window.location.href = "/login", !1;
}, Ct = ({ size: e = 20 }) => /* @__PURE__ */ E(
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
), $o = Ee(Mt), Fe = "#09C1AE", jt = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Fe} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), ni = (e) => ({
  ...jt(14, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: "12px",
    zIndex: 1,
    background: `${Tt(Fe, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), Mo = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: c = "#01584f",
  rightOffsetPx: s = 0
}) => {
  const a = Lr(), x = d.useContext(er), m = Ge().palette.mode === "dark", h = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", g = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ E(
    Ye,
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
        borderColor: r ? Fe : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: c,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Fe}`,
          outlineOffset: 2
        },
        ...n && jt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Ct, { size: 20 }),
        /* @__PURE__ */ t(
          oe,
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
        i && /* @__PURE__ */ t(Zs, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && x ? /* @__PURE__ */ t(ge, { title: h, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    me,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: "14px",
        ...Tt(Fe, m, "clear"),
        backdropFilter: "blur(8px) saturate(180%)",
        WebkitBackdropFilter: "blur(8px) saturate(180%)",
        ...r && {
          boxShadow: `${Tt(Fe, m, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${$o.duration}ms ${$o.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [Le]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && ni(m)
      },
      children: /* @__PURE__ */ t(Ct, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(ge, { title: h, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    me,
    {
      ...g,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Fe : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && jt(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Ct, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(ge, { title: h, placement: "left", children: /* @__PURE__ */ t(
    me,
    {
      ...g,
      disableFocusRipple: !0,
      "data-variant": "floating",
      sx: {
        position: "fixed",
        right: 24 + s,
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
        outline: r ? `2px solid ${Fe}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Fe}` },
        ...n && jt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(O, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Ct, { size: 26 }) })
    }
  ) });
}, Ht = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(Un, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ E(Hn, { children: [
  /* @__PURE__ */ t(Xn, { fontSize: "small" }),
  /* @__PURE__ */ t(oe, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    oe,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    Xo,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, wt = 24, si = 720, ii = 1140, ai = 1250, ci = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: i,
  sidebarWidthPx: c,
  bottomOffsetPx: s,
  fullScreen: a,
  fullScreenBottom: x = "0px",
  onClose: m
}) => {
  d.useEffect(() => {
    if (!e || !m)
      return;
    const R = (v) => {
      v.key === "Escape" && m();
    };
    return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [e, m]);
  const h = r === "docked", g = wt + s;
  let f;
  a ? f = {
    top: 0,
    left: 0,
    right: 0,
    bottom: x,
    borderRadius: 0
  } : h ? f = {
    top: 0,
    right: 0,
    bottom: 0,
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : f = {
    bottom: g,
    ...n === "left" ? { left: c + wt } : { right: wt },
    width: i,
    maxWidth: `calc(100vw - ${wt * 2}px)`,
    height: `min(${si}px, calc(100vh - ${g + wt}px))`,
    borderRadius: "12px"
  };
  const S = /* @__PURE__ */ t(
    Cr,
    {
      role: h ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: h ? ii : ai,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...f
      },
      children: o
    }
  );
  return h ? /* @__PURE__ */ t(jn, { direction: "left", in: e, mountOnEnter: !0, children: S }) : /* @__PURE__ */ t(
    Kn,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: S
    }
  );
}, li = 180, Do = 250, di = "#01584F", ui = ({
  text: e,
  testId: o
}) => {
  const r = d.useRef(null), [n, i] = d.useState(!1), c = d.useCallback(() => {
    const s = r.current;
    s && i(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    c();
  }, [c, e]), d.useEffect(() => {
    const s = r.current;
    if (!s)
      return;
    const a = new ResizeObserver(() => c());
    return a.observe(s), () => a.disconnect();
  }, [c]), /* @__PURE__ */ t(
    ge,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        oe,
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
}, cn = (e, o, r, n) => {
  const i = e ? 48 : 44, c = e ? "text.secondary" : o, s = e ? di : o;
  return { activeBg: s, sx: n ? {
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
    color: r ? "#ffffff" : c,
    backgroundColor: r ? s : "transparent",
    "&:hover": {
      backgroundColor: r ? s : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : c
    }
  } : {
    width: i,
    height: i,
    color: r ? "#ffffff" : c,
    backgroundColor: r ? s : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? s : "action.hover",
      borderRadius: "4px"
    }
  } };
}, ln = ({ link: e }) => /* @__PURE__ */ E(_e, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    ui,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), dn = (e, o, r) => r ? e : /* @__PURE__ */ t(ge, { title: o, placement: "right", arrow: !0, children: e }), fi = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: c,
  railShowTitles: s
}) => {
  const a = Ge(), [x, m] = d.useState(null), [h, g] = d.useState(!1), f = d.useRef(
    null
  ), S = d.useRef(null), R = d.useRef(null), v = d.useRef(!1), b = d.useRef(!1), p = d.useId(), w = () => {
    f.current && (clearTimeout(f.current), f.current = null);
  }, u = () => {
    w(), f.current = setTimeout(() => {
      g(!1), f.current = null;
    }, li);
  }, y = () => {
    w(), g(!0);
  };
  d.useEffect(() => {
    if (!h)
      return;
    const T = (D) => {
      var A;
      D.key === "Escape" && (g(!1), (A = R.current) == null || A.focus());
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [h]), d.useEffect(() => {
    if (!h || !b.current)
      return;
    const T = globalThis.requestAnimationFrame(() => {
      var A;
      const D = (A = S.current) == null ? void 0 : A.querySelector(
        '[role="menuitem"]'
      );
      D == null || D.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame(T);
  }, [h]);
  const _ = Xe(e, o), { activeBg: C, sx: M } = cn(
    i,
    n,
    _,
    s
  ), V = /* @__PURE__ */ t(
    me,
    {
      ref: R,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        v.current || y();
      },
      onBlur: (T) => {
        var A;
        const D = T.relatedTarget;
        D && ((A = S.current) != null && A.contains(D)) || u();
      },
      onKeyDown: (T) => {
        T.key === "ArrowDown" && (T.preventDefault(), b.current = !0, y());
      },
      onClick: (T) => {
        T.preventDefault(), T.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": h,
      "aria-controls": h ? p : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: M,
      children: s ? /* @__PURE__ */ t(ln, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ E(
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
            ref: m,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              v.current = !0, y();
            },
            onMouseLeave: () => {
              v.current = !1, u();
            },
            children: dn(V, e.text, s)
          }
        ),
        /* @__PURE__ */ t(
          _r,
          {
            open: h && !!x,
            anchorEl: x,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (T) => T.zIndex.modal },
            children: /* @__PURE__ */ t(
              Cr,
              {
                ref: S,
                elevation: 0,
                onMouseEnter: w,
                onMouseLeave: u,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: c,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: Do,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Ko,
                  {
                    id: p,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Do
                    },
                    children: G(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function G(T, D, A) {
    return T.flatMap((P) => {
      const ne = ut(D, P);
      return pt(P) ? [
        /* @__PURE__ */ t(
          Vn,
          {
            disableSticky: !0,
            title: P.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + A * 1.5,
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
          ne
        ),
        ...G(P.subitems, ne, A + 1)
      ] : [
        /* @__PURE__ */ E(
          ot,
          {
            role: "menuitem",
            title: P.text,
            disabled: !P.path,
            selected: $e(P, o),
            onClick: (le) => {
              le.preventDefault(), P.path && (r == null || r(P.path)), g(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + A * 1.5,
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
                bgcolor: C,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: C
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              P.icon ? /* @__PURE__ */ t(ve, { children: P.icon }) : null,
              /* @__PURE__ */ t(
                ze,
                {
                  primary: P.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          ne
        )
      ];
    });
  }
}, pi = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: c
}) => {
  const s = !!(e.path && o === e.path), { sx: a } = cn(
    i,
    n,
    s,
    c
  );
  return dn(
    /* @__PURE__ */ t(
      me,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (x) => {
          x.preventDefault(), x.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: a,
        children: c ? /* @__PURE__ */ t(ln, { link: e }) : e.icon
      }
    ),
    e.text,
    c
  );
}, hi = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(je, { sx: { width: "60%", borderColor: "divider" } })
  }
), mi = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(je, { sx: { width: "60%", borderColor: "divider" } })
  }
), Lo = (e, o) => e.map((r, n) => /* @__PURE__ */ E(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(hi, {}) : null
] }, n)), gi = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: c,
  railShowTitles: s = !1
}) => {
  const a = (m, h) => pt(m) ? /* @__PURE__ */ t(
    fi,
    {
      link: m,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: h,
      surfaceBackgroundColor: c,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ t(
    pi,
    {
      link: m,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: h,
      railShowTitles: s
    }
  ), x = s ? 1.25 : 1;
  return /* @__PURE__ */ E(
    _e,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: x
      },
      children: [
        Lo(e, (m) => a(m, !1)),
        o.length > 0 ? /* @__PURE__ */ E(De, { children: [
          /* @__PURE__ */ t(mi, {}),
          /* @__PURE__ */ t(O, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(_e, { gap: x, alignItems: "center", children: Lo(
            o,
            (m) => a(m, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, xi = (e) => e ? Jo(e) : "USER", bi = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), No = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Rr = ({ count: e }) => e ? /* @__PURE__ */ t(
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
  qn,
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
    children: bi(e)
  }
), un = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ E(De, { children: [
  /* @__PURE__ */ t(Fr, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ E(
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
          oe,
          {
            variant: "body2",
            sx: { ...No, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          oe,
          {
            variant: "caption",
            sx: { ...No, opacity: 0.8, color: "inherit" },
            children: xi(o)
          }
        )
      ]
    }
  )
] }), ko = {
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
}, fn = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: i,
  showNotifications: c,
  notificationCount: s,
  onNotificationsClick: a,
  userName: x = "User",
  userRole: m,
  userAvatar: h,
  menuItems: g = [],
  showSettings: f,
  onSettingsClick: S,
  showThemeToggler: R,
  theme: v,
  onThemeToggle: b,
  onLogout: p
}) => {
  const w = (u) => () => {
    o(), u == null || u();
  };
  return /* @__PURE__ */ E(
    Zn,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: ko[r].anchor,
      transformOrigin: ko[r].transform,
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
          _e,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              un,
              {
                name: x,
                role: m,
                avatar: h,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(je, {}),
        c && /* @__PURE__ */ E(ot, { onClick: w(a), children: [
          /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(Yo, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ze, { children: "Notifications" }),
          /* @__PURE__ */ t(Rr, { count: s })
        ] }),
        g.map((u) => /* @__PURE__ */ E(ot, { onClick: w(u.onClick), children: [
          u.icon && /* @__PURE__ */ t(ve, { children: u.icon }),
          /* @__PURE__ */ t(ze, { inset: !u.icon, children: u.label }),
          /* @__PURE__ */ t(Rr, { count: u.badge })
        ] }, u.key)),
        f && /* @__PURE__ */ E(ot, { onClick: w(S), children: [
          /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(Yn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ze, { children: "Settings" })
        ] }),
        R && [
          /* @__PURE__ */ t(je, {}, "theme-divider"),
          /* @__PURE__ */ E(O, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              oe,
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
              Jn,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: v,
                onChange: (u, y) => y && y !== v && (b == null ? void 0 : b()),
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
                  /* @__PURE__ */ t(uo, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(uo, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(je, {}),
        /* @__PURE__ */ E(
          ot,
          {
            onClick: w(p),
            sx: {
              color: v === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ve, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Vo, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ze, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, pn = 64, yi = 2, It = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: i,
  activeColor: c,
  activeBackground: s,
  ariaLabel: a,
  haspopup: x,
  isPage: m = !1,
  testId: h
}) => /* @__PURE__ */ E(
  Ye,
  {
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": x,
    "aria-expanded": x ? n : void 0,
    "aria-current": m && n ? "page" : void 0,
    "data-testid": h,
    sx: {
      flex: "1 1 0",
      minWidth: 0,
      height: "100%",
      flexDirection: "column",
      gap: 0.25,
      color: n ? c : i,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: c,
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
            bgcolor: n ? s : "transparent",
            transition: "background-color 150ms"
          },
          children: o
        }
      ),
      /* @__PURE__ */ t(
        oe,
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
), Si = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: c,
  assistantActive: s,
  showProfile: a,
  background: x,
  color: m,
  activeColor: h,
  activeBackground: g,
  pinnedLinks: f = [],
  activePath: S,
  onLinkClick: R,
  ...v
}) => {
  const b = f.filter((M) => M.path).slice(0, yi), [p, w] = d.useState(
    null
  ), { userName: u = "User", userAvatar: y, avatarColor: _ } = v, C = { color: m, activeColor: h, activeBackground: g };
  return /* @__PURE__ */ E(
    Cr,
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
        height: `calc(${pn}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: x,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          It,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(jo, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...C
          }
        ),
        b.map((M) => /* @__PURE__ */ t(
          It,
          {
            label: M.text,
            icon: M.icon,
            onClick: () => R == null ? void 0 : R(M.path),
            active: Xe(M, S),
            isPage: !0,
            testId: `mobile-nav-link-${M.text}`,
            ...C
          },
          M.path
        )),
        i && /* @__PURE__ */ t(
          It,
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
                  borderColor: s ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(Ct, { size: 18 })
              }
            ),
            onClick: c,
            active: s,
            testId: "mobile-nav-nexa",
            ...C
          }
        ),
        r && /* @__PURE__ */ t(
          It,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Or, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...C
          }
        ),
        a && /* @__PURE__ */ E(De, { children: [
          /* @__PURE__ */ t(
            It,
            {
              label: "Account",
              ariaLabel: `Account menu for ${u}`,
              icon: /* @__PURE__ */ t(
                Fr,
                {
                  name: u,
                  avatar: y,
                  color: _,
                  size: 26
                }
              ),
              onClick: (M) => w(M.currentTarget),
              active: !!p,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...C
            }
          ),
          /* @__PURE__ */ t(
            fn,
            {
              anchorEl: p,
              onClose: () => w(null),
              placement: "above-end",
              width: 280,
              ...v
            }
          )
        ] })
      ]
    }
  );
}, vi = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Qn,
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
      _e,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(O, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Xo,
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
), Ei = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: i,
  background: c,
  color: s,
  brandColor: a = s,
  endContent: x
}) => /* @__PURE__ */ t(
  es,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: e,
      background: c,
      color: s,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ E(ts, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        me,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: s },
          children: /* @__PURE__ */ t(jo, {})
        }
      ),
      /* @__PURE__ */ t(
        Vt,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: i,
          color: a,
          testId: "mobile-brand"
        }
      ),
      x ? /* @__PURE__ */ t(O, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: x }) : null
    ] })
  }
), Br = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: c
}) => {
  const s = Lr(), a = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    ge,
    {
      title: a,
      placement: i,
      arrow: !0,
      ...s,
      children: /* @__PURE__ */ t(
        me,
        {
          onClick: o,
          "aria-label": a,
          "data-testid": c,
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
            qo,
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
              children: /* @__PURE__ */ t(Yo, {})
            }
          )
        }
      )
    }
  );
}, hn = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ri = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Fo = Ee(Qt), Bo = Ee(Tr), wi = 20, Wo = '.MuiMenuItem-root, [data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Ii = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const c = Ge().palette.mode === "dark", s = d.useRef(null), a = d.useRef(null), x = (g) => {
    var f;
    g !== e && (o == null || o()), (f = (g === "light" ? s : a).current) == null || f.focus();
  }, m = (g) => {
    if (!(g.key === "Tab" || g.key === "Escape"))
      switch (g.stopPropagation(), g.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          g.preventDefault(), x(e === "light" ? "dark" : "light");
          break;
        case "Home":
          g.preventDefault(), x("light");
          break;
        case "End":
          g.preventDefault(), x("dark");
          break;
      }
  }, h = (g, f, S, R) => {
    const v = e === g;
    return /* @__PURE__ */ t(
      Ye,
      {
        ref: R,
        role: "radio",
        "aria-checked": v,
        "aria-label": f,
        tabIndex: v ? 0 : -1,
        onClick: () => x(g),
        "data-testid": `theme-segment-${g}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: "999px",
          // White on dark: the accent is too dim against a dark surface
          color: v ? c ? "#ffffff" : r : "text.secondary",
          bgcolor: v ? n : "transparent",
          ...i && v ? Dr(c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...i && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": v ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: c ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${rt(r, 0.6)}`
          },
          ...hn
        },
        children: /* @__PURE__ */ t(S, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ E(
    _e,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: m,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        h("light", "Light", os, s),
        h("dark", "Dark", rs, a)
      ]
    }
  );
}, _i = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: i,
  userName: c,
  userEmail: s,
  roleLabel: a,
  accentColor: x,
  tint: m,
  showThemeToggler: h,
  theme: g,
  onThemeToggle: f,
  onProfileClick: S,
  onLinkClick: R,
  menuItems: v = [],
  onLogout: b,
  glass: p = !1
}) => {
  const w = Ge(), u = w.palette.mode === "dark", y = d.useRef(null), _ = rn({
    enabled: p,
    isDark: u,
    selector: Wo,
    radius: 10
  }), [C, M] = d.useState(null);
  d.useEffect(() => {
    if (!C || typeof ResizeObserver > "u")
      return;
    const A = new ResizeObserver(() => {
      var P;
      (P = y.current) == null || P.updatePosition();
    });
    return A.observe(C), () => A.disconnect();
  }, [C]);
  const V = (A) => {
    r(), A == null || A();
  }, G = (A) => {
    r(), A.onClick ? A.onClick() : A.path && (R == null || R(A.path));
  }, T = { borderRadius: "8px", py: 1, gap: 0.5 }, D = /* @__PURE__ */ E(_e, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ E(O, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(oe, { noWrap: !0, sx: { fontWeight: 600 }, children: c }),
      s ? /* @__PURE__ */ t(
        oe,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: s
        }
      ) : null,
      a ? /* @__PURE__ */ t(
        oe,
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
      S ? /* @__PURE__ */ t(
        oe,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: u ? "#ffffff" : x,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    Zo,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: y,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...p ? {
        slots: { transition: Ho },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: M,
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
        O,
        {
          "data-testid": "account-menu",
          "data-glass": p ? "true" : void 0,
          sx: p ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${wi}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${Wo}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Ri, width: n, minWidth: n },
          children: [
            p ? /* @__PURE__ */ t(
              Dt,
              {
                isDark: u,
                solid: w.palette.background.paper,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${en} ${Fo.duration}ms ${Fo.easing} both`,
                  [Le]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ E(
              O,
              {
                ..._.containerProps,
                sx: p ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${tn} ${Bo.duration}ms ${Bo.easing} 70ms both`,
                  [Le]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  _.lens,
                  S ? /* @__PURE__ */ t(
                    Ye,
                    {
                      onClick: () => V(S),
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
                        ...hn
                      },
                      children: D
                    }
                  ) : /* @__PURE__ */ t(O, { "data-testid": "account-menu-header", children: D }),
                  /* @__PURE__ */ t(je, {}),
                  h ? /* @__PURE__ */ E(
                    O,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...T,
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
                        /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(ns, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(oe, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Ii,
                          {
                            glass: p,
                            mode: g,
                            onToggle: f,
                            accentColor: x,
                            tint: m
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ E(
                    Ko,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: h ? 0 : 0.5, pb: 0.5 },
                      children: [
                        v.map((A) => /* @__PURE__ */ E(
                          ot,
                          {
                            onClick: () => G(A),
                            "data-testid": `menu-item-${A.key}`,
                            sx: T,
                            children: [
                              /* @__PURE__ */ t(ve, { children: A.icon }),
                              /* @__PURE__ */ t(oe, { sx: { flex: 1 }, children: A.label }),
                              /* @__PURE__ */ t(Rr, { count: A.badge })
                            ]
                          },
                          A.key
                        )),
                        b ? /* @__PURE__ */ t(je, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ E(
                          ot,
                          {
                            onClick: () => V(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...T,
                              color: u ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(ve, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Vo, { fontSize: "small" }) }),
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
}, Ci = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Oi = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: i,
  title: c,
  onBrandClick: s,
  brandColor: a,
  headerBackgroundColor: x,
  headerForegroundColor: m,
  activeAccentColor: h = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: f,
  foregroundColor: S,
  surfaceBackgroundColor: R,
  collapsed: v,
  expandedWidth: b,
  collapsedWidth: p,
  topContent: w,
  submenuMode: u,
  color: y,
  hoverColor: _,
  avatarColor: C,
  showProfile: M = !0,
  userName: V = "User",
  userEmail: G,
  userRole: T,
  userAvatar: D,
  showNotifications: A = !0,
  notificationCount: P = 0,
  onNotificationsClick: ne,
  whatsNewCount: le = 0,
  onProfileClick: k,
  menuItems: B,
  onLogout: X,
  theme: F = "light",
  showThemeToggler: Q = !0,
  onThemeToggle: xe
}) => {
  const I = Ge(), W = I.palette.mode === "dark", U = R ?? (W ? I.palette.background.paper : "#ffffff"), Z = y ?? S ?? (W ? I.palette.text.primary : h), K = _ ?? g ?? Yt(h), Ne = C ?? h, se = d.useRef(null), [ue, de] = d.useState(!1), fe = T ? Jo(T) : void 0, be = (nt) => /* @__PURE__ */ t(
    Fr,
    {
      name: V,
      avatar: D,
      color: Ne,
      size: nt
    }
  ), Re = P + le, ee = A ? /* @__PURE__ */ t(
    Br,
    {
      count: Re,
      onClick: ne,
      color: Z,
      hoverColor: K,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, ce = M ? /* @__PURE__ */ E(
    Ye,
    {
      ref: se,
      onClick: () => de(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ue,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: v ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: ue ? K : "transparent",
        "&:hover": { bgcolor: K },
        ...Ci
      },
      children: [
        v && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            qo,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Re,
              children: be(36)
            }
          )
        ) : be(v ? 36 : 40),
        v ? null : /* @__PURE__ */ E(O, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            oe,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Z, lineHeight: 1.3 },
              children: V
            }
          ),
          fe ? /* @__PURE__ */ t(
            oe,
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
  ) : null, Ce = !!ee && (!v || !ce);
  return /* @__PURE__ */ E(
    O,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": v ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          Sr,
          {
            mainLinks: e,
            secondaryLinks: o,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: i,
            title: c,
            onBrandClick: s,
            brandColor: a,
            headerBackgroundColor: x,
            headerForegroundColor: m,
            activeAccentColor: h,
            groupAccentColor: g,
            activeForegroundColor: f,
            foregroundColor: S,
            surfaceBackgroundColor: U,
            collapsed: v,
            expandedWidth: b,
            collapsedWidth: p,
            topContent: w,
            footer: ce || Ce ? /* @__PURE__ */ E(
              _e,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  ce,
                  Ce ? ee : null
                ]
              }
            ) : void 0,
            submenuMode: u
          }
        ),
        M ? /* @__PURE__ */ t(
          _i,
          {
            open: ue,
            anchorEl: se.current,
            onClose: () => de(!1),
            width: Math.max(b - 16, 240),
            renderAvatar: be,
            userName: V,
            userEmail: G,
            roleLabel: fe,
            accentColor: h,
            tint: K,
            showThemeToggler: Q,
            theme: F,
            onThemeToggle: xe,
            onProfileClick: k,
            onLinkClick: n,
            menuItems: B,
            onLogout: X,
            glass: u === "flyout"
          }
        ) : null
      ]
    }
  );
}, Ti = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: i = 0,
  ...c
}) => {
  var u;
  const {
    avatarColor: s,
    showNotifications: a,
    notificationCount: x,
    onNotificationsClick: m,
    userName: h = "User",
    userRole: g,
    userAvatar: f
  } = c, S = d.useRef(null), [R, v] = d.useState(
    null
  ), b = !!R, p = d.useRef(e);
  if (d.useEffect(() => {
    e && !p.current && v(null), p.current = e;
  }, [e]), !a && !n)
    return null;
  const w = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ E(De, { children: [
    /* @__PURE__ */ E(
      _e,
      {
        ref: S,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            ge,
            {
              title: e ? h : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                Ye,
                {
                  onClick: () => v(S.current),
                  "aria-label": `Account menu for ${h}`,
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
                    ...w
                  },
                  children: /* @__PURE__ */ t(
                    un,
                    {
                      name: h,
                      role: g,
                      avatar: f,
                      avatarColor: s,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          a && /* @__PURE__ */ t(
            Br,
            {
              count: x + i,
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
      fn,
      {
        anchorEl: R,
        onClose: () => v(null),
        placement: e ? "beside" : "above",
        width: e || (u = S.current) == null ? void 0 : u.clientWidth,
        ...c
      }
    )
  ] });
}, Ai = 120, $i = 300, zo = Ee(Qt), Po = Ee(Tr), Mi = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Di = 'input, textarea, [contenteditable="true"]', wr = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Di)) == null || o.focus();
}, Li = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: c,
  hoverColor: s
}) => {
  const a = Lr(), x = d.useContext(er), m = d.useRef(null), [h, g] = d.useState(null);
  return d.useEffect(() => {
    o === "full" && n && (wr(m.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    O,
    {
      ref: m,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && x ? /* @__PURE__ */ t(
    Ni,
    {
      search: e,
      color: c,
      railTooltip: a
    }
  ) : /* @__PURE__ */ E(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(ge, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          me,
          {
            "aria-label": "Search",
            onClick: (f) => o === "expand" ? r == null ? void 0 : r() : g(f.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: c,
              borderRadius: "8px",
              "&:hover": { bgcolor: s }
            },
            children: /* @__PURE__ */ t(Or, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Zo,
          {
            open: !!h,
            anchorEl: h,
            onClose: () => g(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (f) => wr(f)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, Ni = ({ search: e, color: o, railTooltip: r }) => {
  const n = Ge().palette.mode === "dark", i = ms(n, ft(o, n ? 0.3 : 0.35)), c = d.useRef(null), s = d.useRef(null), [a, x] = d.useState(!1), m = d.useRef(!1), h = d.useRef(void 0), g = d.useRef(void 0), f = () => {
    clearTimeout(h.current), clearTimeout(g.current);
  }, S = d.useCallback(() => {
    f(), m.current = !1, x(!1);
  }, []), R = () => {
    clearTimeout(g.current), a || (clearTimeout(h.current), h.current = setTimeout(
      () => x(!0),
      Ai
    ));
  }, v = () => {
    clearTimeout(h.current), clearTimeout(g.current), g.current = setTimeout(() => {
      !m.current && !Mi(s.current) && x(!1);
    }, $i);
  };
  return d.useEffect(() => f, []), d.useEffect(() => {
    if (!a)
      return;
    const b = setTimeout(() => wr(s.current)), p = (u) => {
      var _, C;
      const y = u.target;
      !((_ = s.current) != null && _.contains(y)) && !((C = c.current) != null && C.contains(y)) && S();
    }, w = (u) => {
      var y;
      u.key === "Escape" && (S(), (y = c.current) == null || y.focus());
    };
    return document.addEventListener("pointerdown", p), document.addEventListener("keydown", w), () => {
      clearTimeout(b), document.removeEventListener("pointerdown", p), document.removeEventListener("keydown", w);
    };
  }, [a, S]), /* @__PURE__ */ E(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          ge,
          {
            title: a ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              me,
              {
                ref: c,
                "aria-label": "Search",
                "aria-expanded": a,
                onMouseEnter: R,
                onMouseLeave: v,
                onClick: () => {
                  f(), m.current = !0, x(!0);
                },
                sx: { width: 44, height: 44, color: o, borderRadius: "12px" },
                children: /* @__PURE__ */ t(Or, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          _r,
          {
            open: a,
            anchorEl: c.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ E(
              O,
              {
                ref: s,
                "data-testid": "sidebar-search-card",
                onMouseEnter: R,
                onMouseLeave: v,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: "18px"
                },
                children: [
                  /* @__PURE__ */ t(
                    Dt,
                    {
                      isDark: n,
                      solid: n ? "#1e2430" : "#ffffff",
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${en} ${zo.duration}ms ${zo.easing} both`,
                        [Le]: { animation: "none" }
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
                        "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
                          ...i.rest,
                          "&:hover": i.hover,
                          "&.Mui-focused": i.focus
                        },
                        "& .MuiOutlinedInput-notchedOutline.MuiOutlinedInput-notchedOutline.MuiOutlinedInput-notchedOutline": { border: "none" },
                        "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
                          ...i.rest,
                          border: "none",
                          "&:hover": {
                            ...i.hover,
                            border: "none"
                          },
                          "&.Mui-focusVisible": i.focus
                        },
                        animation: `${tn} ${Po.duration}ms ${Po.easing} 60ms both`,
                        [Le]: { animation: "none" }
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
}, ki = 100, Fi = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = d.useState(!1), [c, s] = d.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const m = (g) => {
      r.current.has(g) || (a(), i(!1));
    }, h = () => {
      a(), i(!1);
    };
    return document.addEventListener("mouseover", m), document.documentElement.addEventListener("mouseleave", h), () => {
      a(), document.removeEventListener("mouseover", m), document.documentElement.removeEventListener(
        "mouseleave",
        h
      );
    };
  }, []), d.useEffect(() => {
    if (!c)
      return;
    const m = (h) => {
      var g;
      (g = e.current) != null && g.contains(h.target) || s(!1);
    };
    return document.addEventListener("pointerdown", m), () => document.removeEventListener("pointerdown", m);
  }, [c]), {
    expanded: n || c,
    pin: () => s(!0),
    rootProps: {
      ref: e,
      onMouseOver: (m) => {
        r.current.add(m.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, i(!0);
        }, ki));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (m) => {
        const h = m.relatedTarget;
        h && !m.currentTarget.contains(h) && s(!1);
      },
      onKeyDown: (m) => {
        m.key === "Escape" && s(!1);
      }
    }
  };
}, Bi = 100, Go = 80, mr = 56, Wi = 300, gr = 288, _t = 72, xr = 68, Xt = 8, zi = 24, Pi = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Gi = 68, Ui = { xs: 2, md: 5 }, Hi = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Xi = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, Ua = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: c = !1,
  sidebarVariant: s = "rail",
  sidebarSubmenu: a = "expand",
  mobileNavigation: x = "bottom-bar",
  mobileBottomBarLinks: m,
  logo: h,
  onBrandClick: g,
  searchComponent: f,
  brandColor: S,
  contentPadding: R = Ui,
  userMenuItems: v,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: p,
  groupAccentColor: w,
  activeSidebarForegroundColor: u,
  enableRefreshToken: y = !1,
  activePath: _,
  onLinkClick: C,
  showProfile: M = !0,
  userName: V,
  userRole: G,
  userAvatar: T,
  userEmail: D,
  onLogout: A,
  showSettings: P = !0,
  onSettingsClick: ne,
  onProfileClick: le,
  showNotifications: k = !0,
  notificationCount: B = 0,
  NotificationSidebarContent: X,
  whatsNewCount: F = 0,
  onNotificationsClick: Q,
  onVerify: xe,
  alertProps: I,
  style: W,
  sidebarStyles: U,
  contentStyles: Z,
  accentColor: K,
  sidebarAccentColor: Ne,
  sidebarForegroundColor: se,
  contentBackgroundColor: ue,
  theme: de = "light",
  showThemeToggler: fe = !1,
  onThemeToggle: be,
  GlobalChatSidebar: Re,
  useChatSidebar: ee,
  chatPanelMode: ce = "docked",
  chatPanelPosition: Ce = "right",
  chatPanelWidth: qe = 420,
  onChatClose: nt,
  showAssistant: Ze = !1,
  assistantPlacement: mt = "sidebar",
  assistantShortcut: Lt = "j",
  onAssistantClick: Je,
  assistantActive: gt = !1,
  assistantBusy: xt = !1,
  customNavbar: bt,
  customNavbarProps: tr,
  redirectToLogin: st,
  apiBaseUrl: Nt
}) => {
  const it = Fn(), l = Bn(it.breakpoints.down("md")), L = ao(
    () => Uo(ri(de)),
    [de]
  ), H = de === "dark", $ = K ?? "#01584f", z = Ne ?? $, Y = ue ?? (H ? "hsl(220, 35%, 9%)" : "#f2f9fc"), re = s === "collapsible", J = s === "panel", we = J && i && !l, Oe = s === "rail-labeled", mn = re || Oe, Qe = b ?? (H ? "hsl(220, 30%, 7%)" : "#ffffff"), rr = p ?? Qe, ke = se ?? (H ? "#ffffff" : z), yt = w ?? Yt(ke), St = p ? br(rr) : ke, Wr = (N) => /* @__PURE__ */ t(
    ie,
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
  ), kt = S ?? St, or = h ?? Wr(kt), gn = h ?? Wr(S ?? ke), nr = Fi(), Te = a === "flyout" && (re || J), Ae = Te || !nr.expanded, zr = Te ? "popover" : "expand", Pr = Te ? xr : _t, Gr = Te ? "transparent" : Qe, Ur = Te && !p ? "transparent" : rr, [xn, Hr] = at(!1), bn = kn(() => Hr(!1), []);
  let pe = 0;
  i && !l && (Oe ? pe = Go : Te ? pe = xr + 2 * Xt : re || J ? pe = _t : pe = Bi);
  const [Xr, et] = at(!1), [Kr, sr] = at(!1), he = l && x === "bottom-bar", jr = `calc(${pn}px + env(safe-area-inset-bottom, 0px))`, [ir, Vr] = at({ open: !1, tab: "notifications" }), Yr = () => Vr((N) => ({ ...N, open: !1 })), yn = k && !!X, [Sn, vn] = at(!0), [En, Rn] = at(!1), ar = ee == null ? void 0 : ee(), qr = (ar == null ? void 0 : ar.isOpen) ?? !1, Zr = ce === "floating" ? "floating" : "docked", wn = Zr === "docked" && qr && Re && !l ? qe : 0, Ft = fr(xe), Jr = fr(!1), Qr = ao(
    () => ti(Nt),
    [Nt]
  );
  zt(() => {
    Ft.current = xe;
  }, [xe]);
  const cr = fr(Je);
  cr.current = Je;
  const vt = Ze && Lt ? Lt.toLowerCase() : null;
  zt(() => {
    if (!vt)
      return;
    const N = (te) => {
      (te.metaKey || te.ctrlKey) && !te.altKey && !te.shiftKey && te.key.toLowerCase() === vt && cr.current && (te.preventDefault(), cr.current());
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [vt]);
  const eo = (N) => {
    const te = A(N);
    te instanceof Promise && te.catch((Ue) => {
      console.error("Error in logout handler:", Ue);
    });
  };
  if (zt(() => {
    (() => {
      var te;
      try {
        const { isAuthenticated: Ue } = Qs();
        if (!Ue) {
          console.log("No session found, redirecting to login"), $t(), st();
          return;
        }
        if (!Jr.current) {
          const { user: Rt, error: ur } = ei();
          if (Rt && !ur) {
            const Mn = {
              name: Rt.name || "",
              email: Rt.email || "",
              profilePicture: Rt.profilePicture || "",
              role: Rt.role || ""
            };
            Jr.current = !0, (te = Ft.current) == null || te.call(Ft, Mn);
          } else
            ur && console.error("Error getting user data:", ur);
        }
        Rn(!0);
      } catch (Ue) {
        console.error("Error checking session:", Ue), $t(), st();
      } finally {
        vn(!1);
      }
    })();
  }, [st]), zt(() => {
    y && oi(Qr, st);
  }, [y, Qr]), Sn)
    return /* @__PURE__ */ t(io, { theme: L, children: /* @__PURE__ */ E(
      ie,
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
            Wn,
            {
              size: 60,
              thickness: 4,
              sx: { color: $ }
            }
          ),
          /* @__PURE__ */ t(ie, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!En)
    return null;
  const Et = f ?? (bt ? /* @__PURE__ */ t(bt, { ...tr }) : null), In = (N) => {
    et(!1), sr(!1), Vr({ open: !0, tab: N });
  }, lr = X && (() => In("notifications")), _n = B + F, to = {
    avatarColor: z,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: v == null ? void 0 : v.map(
      (N) => N.onClick || !N.path ? N : { ...N, onClick: () => C == null ? void 0 : C(N.path) }
    ),
    showNotifications: k,
    notificationCount: B,
    whatsNewCount: F,
    onNotificationsClick: lr,
    showProfile: M,
    userName: V,
    userRole: G,
    userAvatar: T,
    showSettings: P,
    onSettingsClick: ne,
    showThemeToggler: fe,
    theme: de,
    onThemeToggle: be,
    onLogout: eo
  }, dr = (N) => /* @__PURE__ */ t(
    Ti,
    {
      ...to,
      compact: N,
      color: ke,
      hoverColor: yt
    }
  ), ro = vt ? [Hi() ? "⌘" : "Ctrl", vt.toUpperCase()] : void 0, Cn = (N) => Ze && mt === "sidebar" ? /* @__PURE__ */ t(
    Mo,
    {
      variant: N ? "sidebar-icon" : "sidebar",
      onClick: Je,
      active: gt,
      busy: xt,
      shortcutKeys: ro,
      accentColor: ke
    }
  ) : null, On = (N) => Et ? /* @__PURE__ */ t(
    Li,
    {
      search: Et,
      mode: N,
      onExpand: () => {
        nr.pin(), Hr(!0);
      },
      autoFocus: xn,
      onAutoFocused: bn,
      color: ke,
      hoverColor: yt
    }
  ) : null, Bt = (N) => {
    const te = Cn(N !== "full"), Ue = On(N);
    return te || Ue ? /* @__PURE__ */ E(
      Gn,
      {
        spacing: 1.5,
        sx: { alignItems: N === "full" ? "stretch" : "center" },
        children: [
          te,
          Ue
        ]
      }
    ) : void 0;
  }, oo = () => /* @__PURE__ */ t(
    Sr,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: _,
      onLinkClick: C,
      showHeaderBar: re,
      logo: or,
      title: n,
      onBrandClick: g,
      brandColor: kt,
      headerBackgroundColor: re ? Ur : void 0,
      headerForegroundColor: re ? St : void 0,
      activeAccentColor: z,
      groupAccentColor: w,
      activeForegroundColor: u,
      foregroundColor: se,
      surfaceBackgroundColor: Gr,
      collapsed: Oe || Ae,
      showLabels: Oe,
      expandedWidth: gr,
      collapsedWidth: Oe ? Go : Pr,
      topContent: Bt(
        Oe ? "popover" : Ae ? zr : "full"
      ),
      footer: dr(Oe || Ae),
      submenuMode: Te ? "flyout" : "inline"
    }
  ), no = (N) => Te ? Tn(N) : An(N), Tn = (N) => /* @__PURE__ */ t(
    ie,
    {
      component: "aside",
      sx: {
        width: pe,
        minWidth: pe,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (te) => te.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: Y
      },
      children: /* @__PURE__ */ E(
        ie,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: Xt,
            bottom: Xt,
            left: Xt,
            width: xr,
            borderRadius: `${zi}px`,
            display: "flex",
            flexDirection: "column",
            ...U
          },
          children: [
            /* @__PURE__ */ t(
              Dt,
              {
                isDark: H,
                solid: Qe,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              ie,
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
    }
  ), An = (N) => /* @__PURE__ */ t(
    ie,
    {
      component: "aside",
      sx: {
        width: _t,
        minWidth: _t,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (te) => te.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        ie,
        {
          ...Te ? {} : nr.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ae ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Ae ? _t : gr,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Qe,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Ae ? "none" : `4px 0 24px rgba(0, 0, 0, ${H ? 0.5 : 0.12})`,
            transition: Pi,
            ...U
          },
          children: N
        }
      )
    }
  ), $n = Xi(
    R,
    it
  );
  return /* @__PURE__ */ t(io, { theme: L, children: /* @__PURE__ */ E(
    ie,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...W
      },
      children: [
        /* @__PURE__ */ t(zn, {}),
        l && /* @__PURE__ */ t(
          Ei,
          {
            height: mr,
            onMenuClick: i && !he ? () => et(!0) : void 0,
            appName: n,
            logo: or,
            onBrandClick: g,
            background: rr,
            color: St,
            brandColor: kt,
            endContent: k ? /* @__PURE__ */ t(
              Br,
              {
                count: _n,
                onClick: lr,
                color: St,
                hoverColor: yt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !l && Oe && /* @__PURE__ */ t(
          ie,
          {
            component: "aside",
            sx: {
              width: pe,
              minWidth: pe,
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
              ...U
            },
            children: oo()
          }
        ),
        i && !l && re && no(
          /* @__PURE__ */ E(De, { children: [
            oo(),
            (I == null ? void 0 : I.show) && !Ae && /* @__PURE__ */ t(Ht, { ...I })
          ] })
        ),
        we && no(
          /* @__PURE__ */ E(De, { children: [
            /* @__PURE__ */ t(
              Oi,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: _,
                onLinkClick: C,
                logo: or,
                title: n,
                onBrandClick: g,
                brandColor: kt,
                headerBackgroundColor: Ur,
                headerForegroundColor: St,
                activeAccentColor: z,
                groupAccentColor: w,
                activeForegroundColor: u,
                foregroundColor: se,
                surfaceBackgroundColor: Gr,
                collapsed: Ae,
                expandedWidth: gr,
                collapsedWidth: Pr,
                topContent: Bt(
                  Ae ? zr : "full"
                ),
                submenuMode: Te ? "flyout" : "inline",
                color: ke,
                hoverColor: yt,
                avatarColor: z,
                showProfile: M,
                userName: V,
                userEmail: D,
                userRole: G,
                userAvatar: T,
                showNotifications: k,
                notificationCount: B,
                onNotificationsClick: yn ? lr : Q,
                whatsNewCount: F,
                onProfileClick: le,
                menuItems: v,
                onLogout: eo,
                theme: de,
                showThemeToggler: fe,
                onThemeToggle: be
              }
            ),
            (I == null ? void 0 : I.show) && !Ae && /* @__PURE__ */ t(Ht, { ...I })
          ] })
        ),
        i && !l && !mn && !J && /* @__PURE__ */ t(
          co,
          {
            variant: "permanent",
            sx: {
              width: pe,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: pe,
                boxSizing: "border-box",
                bgcolor: Y,
                borderRight: "none"
              },
              ...U
            },
            children: /* @__PURE__ */ E(
              ie,
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
                    ie,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        Vt,
                        {
                          logo: gn,
                          appName: n,
                          onClick: g,
                          color: S ?? ke,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Bt("popover"),
                  /* @__PURE__ */ E(
                    ie,
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
                          gi,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: _,
                            onLinkClick: C,
                            accentColor: z,
                            surfaceBackgroundColor: Y,
                            railShowTitles: c
                          }
                        ),
                        (I == null ? void 0 : I.show) && /* @__PURE__ */ t(Ht, { ...I })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(ie, { sx: { py: 1.5 }, children: dr(!0) })
                ]
              }
            )
          }
        ),
        i && l && /* @__PURE__ */ E(
          Pn,
          {
            anchor: he ? "bottom" : "left",
            open: Xr,
            onOpen: () => et(!0),
            onClose: () => et(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (N) => N.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Qe,
                  backgroundImage: "none",
                  ...he ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              he && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                ie,
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
                Sr,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: _,
                  onLinkClick: (N) => {
                    C == null || C(N), et(!1);
                  },
                  onLinkAction: () => et(!1),
                  collapsed: !1,
                  expandedWidth: he ? "100%" : Wi,
                  activeAccentColor: z,
                  groupAccentColor: w,
                  activeForegroundColor: u,
                  foregroundColor: se,
                  surfaceBackgroundColor: Qe,
                  topInsetPx: he ? 8 : 0,
                  topContent: he ? void 0 : Bt("full"),
                  footer: he ? void 0 : dr(!1)
                }
              ),
              (I == null ? void 0 : I.show) && /* @__PURE__ */ t(Ht, { ...I })
            ]
          }
        ),
        he && Et && /* @__PURE__ */ t(
          vi,
          {
            open: Kr,
            onClose: () => sr(!1),
            search: Et
          }
        ),
        he && /* @__PURE__ */ t(
          Si,
          {
            ...to,
            pinnedLinks: m,
            activePath: _,
            onLinkClick: C,
            onMenuClick: i ? () => et(!0) : void 0,
            menuOpen: Xr,
            onSearchClick: Et ? () => sr(!0) : void 0,
            searchOpen: Kr,
            showAssistant: Ze,
            onAssistantClick: Je,
            assistantActive: gt,
            showProfile: M,
            background: Qe,
            color: ke,
            activeColor: z,
            activeBackground: yt
          }
        ),
        /* @__PURE__ */ t(
          ie,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": $n,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": l ? `${mr}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: pe ? `calc(100% - ${pe}px)` : "100%",
              mt: l ? `${mr}px` : 0,
              // Keep the last content clear of the bottom bar
              ...he && {
                pb: `calc(var(--lumora-content-padding) + ${jr})`
              },
              backgroundColor: Y,
              ...Z
            },
            children: e
          }
        ),
        Re && /* @__PURE__ */ t(
          ci,
          {
            open: qr,
            variant: Zr,
            position: Ce,
            width: qe,
            sidebarWidthPx: pe,
            bottomOffsetPx: Ze && mt === "floating" ? Gi : 0,
            fullScreen: l,
            fullScreenBottom: he ? jr : "0px",
            onClose: nt,
            children: /* @__PURE__ */ t(Re, {})
          }
        ),
        Ze && mt === "floating" && !he && /* @__PURE__ */ t(
          Mo,
          {
            variant: "floating",
            rightOffsetPx: wn,
            shortcutKeys: ro,
            onClick: Je,
            active: gt,
            busy: xt
          }
        ),
        k && X && /* @__PURE__ */ t(
          co,
          {
            anchor: "right",
            open: ir.open,
            onClose: Yr,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              X,
              {
                onClose: Yr,
                initialTab: ir.tab
              },
              ir.tab
            )
          }
        )
      ]
    }
  ) });
};
export {
  q as AUTH_ERROR_CODES,
  j as AuthError,
  Sr as CollapsibleSidebar,
  Pa as FullBleedSection,
  Zs as Kbd,
  Ua as LumoraWrapper,
  $t as clearAuthTokens,
  Ua as default,
  Ga as getAuthErrorMessage,
  At as getAuthTokens,
  ei as getCurrentUser,
  ri as getDesignTokens,
  Qs as isAuthenticated,
  Er as logAuthError,
  sn as storeAuthTokens
};
