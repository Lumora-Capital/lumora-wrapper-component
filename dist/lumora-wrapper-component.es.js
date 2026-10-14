import { jsx as t, jsxs as E, Fragment as Te } from "react/jsx-runtime";
import Vn from "@mui/icons-material/KeyboardArrowDownRounded";
import Yn from "@mui/icons-material/KeyboardArrowUpRounded";
import qn from "@mui/icons-material/ChevronRightRounded";
import _ from "@mui/material/Box";
import So from "@mui/material/Collapse";
import Ze from "@mui/material/Divider";
import Se from "@mui/material/IconButton";
import Ut from "@mui/material/ListItemButton";
import ve from "@mui/material/ListItemIcon";
import Le from "@mui/material/ListItemText";
import Ae from "@mui/material/Stack";
import Ee from "@mui/material/Tooltip";
import ie from "@mui/material/Typography";
import { useTheme as Ne, createTheme as cn, alpha as st, ThemeProvider as vo } from "@mui/material/styles";
import * as l from "react";
import { useMemo as Eo, useState as nt, useCallback as wo, useRef as yr, useEffect as Ht } from "react";
import Qe from "@mui/material/ButtonBase";
import { keyframes as Mr } from "@emotion/react";
import Dr from "@mui/material/Fade";
import kr from "@mui/material/Popper";
import { useTheme as Zn, useMediaQuery as Jn, Box as ae, CircularProgress as Qn, CssBaseline as ei, Drawer as Ro, SwipeableDrawer as ti, Stack as ri } from "@mui/material";
import Io from "axios";
import oi from "@mui/material/Card";
import ni from "@mui/material/CardContent";
import ln from "@mui/material/Button";
import ii from "@mui/icons-material/AutoAwesomeRounded";
import si from "@mui/material/Grow";
import Lr from "@mui/material/Paper";
import ai from "@mui/material/Slide";
import ci from "@mui/material/ListSubheader";
import Ye from "@mui/material/MenuItem";
import Nr from "@mui/material/MenuList";
import dn from "@mui/icons-material/MenuRounded";
import Fr from "@mui/icons-material/SearchRounded";
import un from "@mui/icons-material/LogoutRounded";
import fn from "@mui/icons-material/NotificationsNoneOutlined";
import li from "@mui/icons-material/SettingsOutlined";
import di from "@mui/material/Avatar";
import ui from "@mui/material/Menu";
import _o from "@mui/material/ToggleButton";
import fi from "@mui/material/ToggleButtonGroup";
import pi from "@mui/material/Drawer";
import hi from "@mui/material/AppBar";
import mi from "@mui/material/Toolbar";
import pn from "@mui/material/Badge";
import gi from "@mui/icons-material/DarkModeOutlined";
import xi from "@mui/icons-material/LightModeOutlined";
import bi from "@mui/icons-material/SettingsBrightnessOutlined";
import Br from "@mui/material/Popover";
import yi from "@mui/icons-material/CheckRounded";
const Jt = ({
  logo: e,
  title: o,
  appName: r,
  onClick: n,
  color: s,
  testId: c,
  menuOpen: i
}) => {
  const a = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: s,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, p = /* @__PURE__ */ E(Te, { children: [
    o ? /* @__PURE__ */ t(
      ie,
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
    Qe,
    {
      onClick: n,
      "aria-label": i === void 0 ? `${r} home` : `${r}: switch platform`,
      ...i !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": i
      },
      "data-testid": c,
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
      children: p
    }
  ) : /* @__PURE__ */ t(Ae, { direction: "row", "data-testid": c, sx: a, children: p });
}, $t = { stiffness: 320, damping: 24 }, Mt = { stiffness: 520, damping: 20 }, or = { stiffness: 260, damping: 28 }, Si = "cubic-bezier(0.32, 1.28, 0.52, 1)", vi = 420, Co = 60, Ei = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Oo = /* @__PURE__ */ new Map(), he = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, s = Oo.get(n);
  if (s)
    return s;
  if (!Ei)
    return { easing: Si, duration: vi };
  const c = 1 / 600;
  let i = 0, a = 0, p = 0, f = 1 / Co;
  const h = [0];
  for (; p < 3; ) {
    const x = (-e * (i - 1) - o * a) / r;
    if (a += x * c, i += a * c, p += c, p >= f && (h.push(i), f += 1 / Co, Math.abs(i - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  h[h.length - 1] = 1;
  const m = {
    easing: `linear(${h.map((x) => Number(x.toFixed(4))).join(", ")})`,
    duration: Math.round(p * 1e3)
  };
  return Oo.set(n, m), m;
}, Je = (e) => !!(e && typeof e.animate == "function"), ze = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Xt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, wi = (e, o = 1.14) => {
  if (!Je(e) || ze())
    return;
  const r = he(Mt);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, ht = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, ft = (e, o) => e ? `${e}/${o.text}` : o.text, Ve = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Ve(n, o))) ?? !1 : !1;
}, De = (e, o) => !!(o && e.path === o), Wr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return ht(r) ? Wr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Ir = (e) => {
  const o = Pr(e);
  if (!o)
    return "#ffffff";
  const [r, n, s] = o.map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Qt = (e) => {
  const o = Pr(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = o;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, pt = (e, o) => {
  const r = Pr(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, Pr = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, hn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Ri = 28, Ii = 180, To = (e) => ({
  backdropFilter: `blur(${e * Ri}px) saturate(${100 + e * (Ii - 100)}%)`
}), _i = Mr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ie = "@media (prefers-reduced-motion: reduce)", mn = (e, o, r) => `radial-gradient(${e}px circle at var(--lx, -9999px) var(--ly, -9999px), rgba(${r}, calc(${o} * var(--li, 0))) 0%, rgba(${r}, 0) 70%)`, je = {
  dark: { rgb: "255, 255, 255", rim: 0.45, sheen: 0.055 },
  light: { rgb: "9, 193, 174", rim: 0.55, sheen: 0.09 }
}, er = (e) => e ? je.dark : je.light, Ci = (e) => ({
  content: '""',
  position: "absolute",
  inset: 0,
  borderRadius: "inherit",
  padding: "1.25px",
  pointerEvents: "none",
  // The rim glints where the pointer is nearest (see GlassLayer's light)
  background: `${mn(140, er(e).rim, er(e).rgb)}, ${e ? "linear-gradient(140deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 22%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 78%, rgba(255, 255, 255, 0.28) 100%)" : "linear-gradient(140deg, #ffffff 0%, rgba(255, 255, 255, 0.55) 22%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.4) 78%, rgba(255, 255, 255, 0.95) 100%)"}`,
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  maskComposite: "exclude"
}), Oi = (e, o) => ({
  position: "relative",
  bgcolor: e ? "rgba(30, 36, 48, 0.5)" : "rgba(255, 255, 255, 0.55)",
  backgroundImage: e ? "linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 38%, rgba(0, 0, 0, 0.1) 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 40%, rgba(15, 23, 42, 0.03) 100%)",
  ...To(1),
  WebkitBackdropFilter: To(1).backdropFilter,
  boxShadow: e ? "0 24px 60px -12px rgba(0, 0, 0, 0.65), 0 0 0 0.5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 0 24px rgba(255, 255, 255, 0.035)" : "0 24px 60px -12px rgba(15, 23, 42, 0.3), 0 2px 8px rgba(15, 23, 42, 0.08), 0 0 0 0.5px rgba(15, 23, 42, 0.1), inset 0 1px 0 #ffffff, inset 0 0 24px rgba(255, 255, 255, 0.45)",
  "&::before": Ci(e),
  // Specular glare across the top-left, as light catching a curved edge
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
    // The pointer's light on the surface, over the fixed glare
    background: `${mn(200, er(e).sheen, er(e).rgb)}, ${e ? "linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 42%)" : "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 42%)"}`
  },
  "@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))": {
    bgcolor: o
  },
  "@media (prefers-reduced-transparency: reduce)": {
    bgcolor: o,
    backdropFilter: "none",
    WebkitBackdropFilter: "none"
  }
}), Ti = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", zr = (e) => ({
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
}), Gr = Mr`
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
`, Ur = Mr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Hr = (e, o = "rgba(9, 193, 174, 0.2)") => ({
  background: e ? "radial-gradient(circle at 30% 24%, rgba(255, 255, 255, 0.34) 0, rgba(255, 255, 255, 0.12) 22%, rgba(255, 255, 255, 0.06) 55%, rgba(255, 255, 255, 0.03) 100%)" : "radial-gradient(circle at 30% 24%, #ffffff 0, rgba(255, 255, 255, 0.92) 20%, rgba(255, 255, 255, 0.7) 55%, rgba(255, 255, 255, 0.5) 100%)",
  boxShadow: e ? `inset 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 1.5px 1px rgba(255, 255, 255, 0.28), inset 0 -10px 16px -8px ${o}, 0 12px 26px -12px rgba(0, 0, 0, 0.85)` : `inset 0 0 0 1px rgba(255, 255, 255, 0.95), inset 0 2px 2px #ffffff, inset 0 -10px 16px -8px ${o}, 0 12px 26px -12px rgba(15, 23, 42, 0.4), 0 1px 3px rgba(15, 23, 42, 0.06)`
}), Ot = (e, o, r = "solid") => {
  const [n, s, c] = r === "solid" ? [0.95, 0.74, 0.9] : [0.34, 0.12, 0.24];
  return {
    background: `radial-gradient(120% 90% at 28% 10%, rgba(255, 255, 255, ${o ? r === "solid" ? 0.3 : 0.22 : r === "solid" ? 0.26 : 0.7}) 0%, rgba(255, 255, 255, 0) 52%), linear-gradient(165deg, ${pt(e, n)} 0%, ${pt(e, s)} 55%, ${pt(e, c)} 100%)`,
    boxShadow: [
      `inset 0 1px 1px rgba(255, 255, 255, ${r === "solid" ? 0.5 : 0.75})`,
      `inset 0 0 0 1px ${pt(e, r === "solid" ? 0.55 : 0.4)}`,
      `inset 0 -8px 14px -8px rgba(255, 255, 255, ${o ? 0.18 : 0.35})`,
      `0 8px 18px -8px ${pt(e, o ? 0.7 : 0.55)}`
    ].join(", ")
  };
}, Ai = (e, o) => {
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
}, tr = "data-rail-item", $i = `[${tr}], button, [role="button"]`, nr = l.createContext(!1), Xr = () => {
  const e = l.useContext(nr), o = Ne();
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: { sx: zr(o.palette.mode === "dark") },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, mt = he($t), Ao = he(Mt), Kr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: s,
  lean: c = 3
}) => {
  const i = l.useRef(null), [a, p] = l.useState(null), f = l.useRef(null), h = l.useRef(null), m = (u, S) => {
    h.current = S;
    const R = S.getBoundingClientRect(), C = u.getBoundingClientRect(), F = n ?? R.width, V = n ?? R.height, G = {
      top: Math.round(R.top - C.top + (R.height - V) / 2),
      left: Math.round(R.left - C.left + (R.width - F) / 2),
      width: Math.round(F),
      height: Math.round(V)
    };
    p(
      (T) => T && T.visible && T.top === G.top && T.left === G.left && T.width === G.width && T.height === G.height ? T : { ...G, visible: !0, instant: !(T != null && T.visible) }
    );
  }, x = (u, S) => {
    var C;
    const R = (C = S == null ? void 0 : S.closest) == null ? void 0 : C.call(S, r);
    return R && u.contains(R) ? R : null;
  }, b = (u) => {
    if (!e)
      return;
    const S = x(u.currentTarget, u.target);
    S && m(u.currentTarget, S);
  }, w = (u) => {
    if (!e)
      return;
    const S = x(u.currentTarget, u.target);
    S && u.target.matches(":focus-visible") && m(u.currentTarget, S);
  }, I = (u) => {
    const S = i.current, R = h.current;
    if (!e || !S || !R || !c || ze())
      return;
    const C = R.getBoundingClientRect(), F = (V, G) => Math.max(-1, Math.min(1, V / (G / 2))) * c;
    S.style.transform = `translate(${F(u.clientX - (C.left + C.width / 2), C.width)}px, ${F(u.clientY - (C.top + C.height / 2), C.height)}px)`;
  }, g = () => {
    h.current = null, i.current && (i.current.style.transform = ""), p((u) => u != null && u.visible ? { ...u, visible: !1 } : u);
  }, y = (u) => {
    const S = u.relatedTarget;
    (!S || !u.currentTarget.contains(S)) && (u.currentTarget.matches(":hover") || g());
  };
  return l.useEffect(() => {
    const u = i.current;
    if (!(a != null && a.visible)) {
      f.current = null;
      return;
    }
    const S = f.current;
    if (f.current = a.top, !Je(u) || ze())
      return;
    if (S === null || a.instant) {
      u.animate([{ scale: "0.55" }, { scale: "1" }], {
        duration: Ao.duration,
        easing: Ao.easing
      });
      return;
    }
    const R = Math.min(Math.abs(a.top - S) / 220, 0.3);
    R && u.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - R / 2} ${1 + R}`, offset: 0.28 },
        {
          scale: `${1 + R / 4} ${1 - R / 3}`,
          offset: 0.62
        },
        { scale: "1 1" }
      ],
      { duration: mt.duration, easing: "ease-out" }
    );
  }, [a == null ? void 0 : a.top, a == null ? void 0 : a.visible, a == null ? void 0 : a.instant]), {
    lens: e && a ? /* @__PURE__ */ t(
      _,
      {
        ref: i,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": a.visible ? "true" : "false",
        sx: {
          ...Hr(o),
          backdropFilter: "blur(8px) saturate(170%)",
          WebkitBackdropFilter: "blur(8px) saturate(170%)",
          borderRadius: `${s}px`,
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
          transition: a.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${mt.duration}ms ${mt.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [Ie]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: b,
      onMouseMove: I,
      onMouseLeave: g,
      onFocus: w,
      onBlur: y,
      onScrollCapture: g
    } : {}
  };
}, Mi = (e, o) => {
  const r = Kr({
    enabled: e,
    isDark: o,
    selector: $i,
    size: 46,
    radius: 18
  });
  return {
    ...r,
    lens: r.lens ? l.cloneElement(r.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Di = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n,
  activeKey: s
}) => {
  const c = l.useRef(null), [i, a] = l.useState(null), p = l.useRef(null), f = l.useCallback(
    (m) => {
      const x = n.current;
      if (!e || !x)
        return;
      const b = x.querySelector(
        `[${tr}][data-active="true"]`
      );
      if (!b) {
        a(
          (y) => y != null && y.visible ? { ...y, visible: !1 } : y
        );
        return;
      }
      const w = b.getBoundingClientRect(), I = x.getBoundingClientRect(), g = {
        top: Math.round(w.top - I.top),
        left: Math.round(w.left - I.left),
        width: Math.round(w.width),
        height: Math.round(w.height)
      };
      a(
        (y) => y && y.visible && y.top === g.top && y.left === g.left && y.width === g.width && y.height === g.height ? y : {
          ...g,
          visible: !0,
          instant: m || !(y != null && y.visible)
        }
      );
    },
    [e, n]
  );
  return l.useLayoutEffect(() => {
    f(!1);
  }, [f, s]), l.useEffect(() => {
    const m = n.current;
    if (!e || !m || typeof ResizeObserver > "u")
      return;
    const x = new ResizeObserver(() => f(!0));
    return x.observe(m), () => x.disconnect();
  }, [e, n, f]), l.useEffect(() => {
    const m = c.current;
    if (!(i != null && i.visible)) {
      p.current = null;
      return;
    }
    const x = p.current;
    if (p.current = i.top, x === null || i.instant || !Je(m) || ze())
      return;
    const b = Math.min(Math.abs(i.top - x) / 200, 0.32);
    b && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - b / 2} ${1 + b}`, offset: 0.28 },
        {
          scale: `${1 + b / 4} ${1 - b / 3}`,
          offset: 0.62
        },
        { scale: "1 1" }
      ],
      { duration: mt.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ t(
    _,
    {
      ref: c,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": i.visible ? "true" : "false",
      sx: {
        ...Ot(r, o),
        borderRadius: "12px",
        position: "absolute",
        top: 0,
        left: 0,
        width: i.width,
        height: i.height,
        translate: `${i.left}px ${i.top}px`,
        scale: i.visible ? "1" : "0.7",
        opacity: i.visible ? 1 : 0,
        pointerEvents: "none",
        transition: i.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${mt.duration}ms ${mt.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Ie]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, $o = 14, ki = 18, Li = "blur(12px) saturate(180%) brightness(1.04)", Ni = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Fi = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), c = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(c)}`;
}, Bi = 140, Mo = 0.22, Wi = 0.14, Pi = (e, o, r) => {
  const n = l.useRef(r);
  n.current = r, l.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, c = { x: 0, y: 0, i: 0 };
    let i = 0;
    const a = () => {
      var b;
      const x = e.current;
      x && (x.style.setProperty("--lx", `${c.x.toFixed(1)}px`), x.style.setProperty("--ly", `${c.y.toFixed(1)}px`), x.style.setProperty("--li", c.i.toFixed(3)), (b = n.current) == null || b.call(n, c.x, c.y, c.i));
    }, p = () => {
      c.x += (s.x - c.x) * Mo, c.y += (s.y - c.y) * Mo, c.i += (s.i - c.i) * Wi;
      const x = Math.abs(s.x - c.x) < 0.3 && Math.abs(s.y - c.y) < 0.3 && Math.abs(s.i - c.i) < 3e-3;
      x && (c.x = s.x, c.y = s.y, c.i = s.i), a(), i = x ? 0 : requestAnimationFrame(p);
    }, f = () => {
      i || (i = requestAnimationFrame(p));
    }, h = (x) => {
      const b = e.current;
      if (x.pointerType === "touch" || !b)
        return;
      const w = b.getBoundingClientRect();
      if (!w.width || !w.height)
        return;
      s.x = (x.clientX - w.left) * b.offsetWidth / w.width, s.y = (x.clientY - w.top) * b.offsetHeight / w.height;
      const I = Math.max(
        w.left - x.clientX,
        0,
        x.clientX - w.right
      ), g = Math.max(
        w.top - x.clientY,
        0,
        x.clientY - w.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(I, g) / Bi), c.i < 0.01 && (c.x = s.x, c.y = s.y), f();
    }, m = () => {
      s.i = 0, f();
    };
    return document.addEventListener("pointermove", h, { passive: !0 }), document.documentElement.addEventListener("mouseleave", m), () => {
      cancelAnimationFrame(i), document.removeEventListener("pointermove", h), document.documentElement.removeEventListener("mouseleave", m);
    };
  }, [e, o]);
}, gt = l.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: c = !0,
    onLight: i
  }, a) => {
    const p = l.useRef(null);
    Pi(p, c, i);
    const f = `lumora-glass-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [h, m] = l.useState(null), x = l.useRef(null), b = l.useCallback(
      (g) => {
        var v;
        if (p.current = g, typeof a == "function" ? a(g) : a && (a.current = g), (v = x.current) == null || v.disconnect(), x.current = null, !g || !s || !Ni || typeof ResizeObserver > "u")
          return;
        const y = () => {
          const u = g.offsetWidth, S = g.offsetHeight;
          m(
            (R) => (R == null ? void 0 : R.width) === u && R.height === S ? R : u && S ? { width: u, height: S } : null
          );
        };
        x.current = new ResizeObserver(y), x.current.observe(g), y();
      },
      [a, s]
    ), w = l.useMemo(
      () => h ? Fi(h.width, h.height, $o) : null,
      [h]
    ), I = s && !!(w && h);
    return /* @__PURE__ */ E(Te, { children: [
      I ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ E(
            "filter",
            {
              id: f,
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
                    href: w,
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
                    stdDeviation: $o / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: ki,
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
          ref: b,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": I ? "true" : void 0,
          sx: [
            Oi(e, o),
            I ? {
              backdropFilter: `url(#${f}) ${Li}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
gt.displayName = "GlassLayer";
const Pe = 44, Do = 4, jr = 12, ko = 1.4, zi = 6, Vr = 6, qt = jr + Vr, rr = 10, Lo = 0.12, No = 0.75, Gi = rr + 32, Ui = 90, Hi = 22, Xi = 1190, Ki = 1195, qe = he($t), ke = he(Mt), Fo = he(or), ji = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const c = Math.min(s, r / 2, n / 2), i = e + r, a = o + n, p = `A ${c} ${c} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + c} ${o} H ${i - c} ${p} ${i} ${o + c} V ${a - c} ${p} ${i - c} ${a} H ${e + c} ${p} ${e} ${a - c} V ${o + c} ${p} ${e + c} ${o} Z')`;
}, Vi = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: s,
  activePath: c,
  focusFirst: i = !1,
  onNavigate: a,
  onClose: p,
  panelProps: f,
  accentColor: h,
  activeForegroundColor: m,
  solidSurface: x
}) => {
  const b = Ne(), w = b.palette.mode === "dark", I = !!(e && r), g = l.useRef(null);
  e && o && (g.current = { group: e, key: o });
  const y = g.current, v = l.useMemo(() => r ? {
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
  } : null, [r, n]), u = l.useRef(v);
  v && (u.current = v), l.useEffect(() => {
    r && wi(r);
  }, [r]);
  const [S, R] = l.useState(!1);
  l.useEffect(() => {
    if (!I) {
      R(!1);
      return;
    }
    let $ = 0;
    const M = requestAnimationFrame(() => {
      $ = requestAnimationFrame(() => R(!0));
    });
    return () => {
      cancelAnimationFrame(M), cancelAnimationFrame($);
    };
  }, [I]);
  const C = l.useMemo(
    () => y ? Wr(y.group.subitems, y.group.icon) : [],
    [y]
  ), F = l.useRef(null), V = l.useRef(null), G = l.useRef(0), T = l.useRef(null), z = l.useRef([]), O = C.findIndex(
    ({ sub: $ }) => De($, c)
  ), [B, ee] = l.useState(0);
  l.useEffect(() => {
    ee(Math.max(O, 0));
  }, [o]), l.useEffect(() => {
    if (!I || !i)
      return;
    const $ = setTimeout(() => {
      var M;
      return (M = z.current[0]) == null ? void 0 : M.focus();
    });
    return () => clearTimeout($);
  }, [I, i, o]);
  const le = ($) => {
    var j;
    const M = Math.max(0, Math.min($, C.length - 1));
    ee(M), (j = z.current[M]) == null || j.focus();
  }, W = ($, M) => {
    switch ($.key) {
      case "ArrowRight":
        le(M + 1);
        break;
      case "ArrowLeft":
        M === 0 ? p(!0) : le(M - 1);
        break;
      case "Home":
        le(0);
        break;
      case "End":
        le(C.length - 1);
        break;
      case "Tab":
        p(!0);
        break;
      default:
        return;
    }
    $.preventDefault();
  }, P = ($) => {
    var de;
    const M = z.current.slice(0, C.length).filter((oe) => !!oe);
    if (!M.length)
      return;
    const j = $ !== null && $ < M.length && !ze(), D = `translate ${ke.duration}ms ${ke.easing}, scale ${ke.duration}ms ${ke.easing}`, K = M.map((oe) => oe.offsetLeft + Pe / 2), se = M.map(
      (oe, pe) => j && pe === $ ? ko : 1
    ), Ge = j ? (ko - 1) * Pe : 0, fe = K[0] - Pe / 2, _e = K[K.length - 1] + Pe / 2, me = j ? Math.min(
      Math.min(
        1,
        Math.max(
          0,
          (K[$] - fe) / (_e - fe)
        )
      ),
      zi / Ge
    ) : 0;
    let ge = fe - Ge * me;
    M.forEach((oe, pe) => {
      const xe = Pe * se[pe], Ce = ge + xe / 2;
      ge += xe + Do, oe.style.transition = `${D}, background 160ms ease, box-shadow 160ms ease`, oe.style.translate = j ? `${Ce - K[pe]}px 0` : "", oe.style.scale = j ? String(se[pe]) : "", j ? oe.style.setProperty("--dock-scale", String(se[pe])) : oe.style.removeProperty("--dock-scale");
    }), (de = T.current) == null || de.call(T);
  }, X = l.useRef(null);
  l.useEffect(() => {
    X.current = null;
  }, [o]);
  const q = ($) => {
    X.current !== $ && (X.current = $, cancelAnimationFrame(G.current), G.current = requestAnimationFrame(() => P($)));
  };
  l.useEffect(() => () => cancelAnimationFrame(G.current), []);
  const U = b.palette.text.primary, ue = w ? b.palette.text.primary : h;
  return /* @__PURE__ */ E(Te, { children: [
    /* @__PURE__ */ t(Dr, { in: I, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      _,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => p(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: s ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...s ? { clipPath: ji(s) } : {},
          zIndex: Xi,
          bgcolor: Ti(w)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      kr,
      {
        open: I,
        anchorEl: v ?? u.current,
        placement: "right",
        transition: !0,
        modifiers: [
          { name: "offset", options: { offset: [0, rr] } },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Ki,
          transition: S ? `transform ${qe.duration}ms ${qe.easing}` : "none",
          [Ie]: { transition: "none" }
        },
        children: ({ TransitionProps: $ }) => /* @__PURE__ */ t(
          ts,
          {
            in: ($ == null ? void 0 : $.in) ?? I,
            onEnter: $ == null ? void 0 : $.onEnter,
            onExited: $ == null ? void 0 : $.onExited,
            groupKey: (y == null ? void 0 : y.key) ?? null,
            panelProps: f,
            isDark: w,
            solidSurface: x,
            groupText: y == null ? void 0 : y.group.text,
            glassRef: V,
            shapeRef: T,
            children: y ? /* @__PURE__ */ t(Te, { children: /* @__PURE__ */ t(
              _,
              {
                ref: F,
                role: "menu",
                "aria-label": y.group.text,
                onPointerLeave: () => q(null),
                sx: {
                  position: "relative",
                  display: "flex",
                  gap: `${Do}px`,
                  // No room kept for magnification: a grown tile rises out of
                  // the glass, as icons rise out of the Dock
                  px: 0
                },
                children: C.map(({ sub: M, icon: j }, D) => /* @__PURE__ */ t(
                  gn,
                  {
                    ref: (K) => {
                      z.current[D] = K;
                    },
                    sub: M,
                    icon: j,
                    index: D,
                    active: De(
                      M,
                      c
                    ),
                    tabIndex: D === B ? 0 : -1,
                    onClick: () => {
                      a(M.path), p();
                    },
                    onKeyDown: (K) => W(K, D),
                    onFocus: (K) => {
                      ee(D), K.currentTarget.matches(
                        ":focus-visible"
                      ) && q(D);
                    },
                    onHoverStart: (K) => {
                      K !== "touch" && q(D);
                    },
                    accentColor: h,
                    activeForegroundColor: m,
                    labelColor: U,
                    iconColor: ue,
                    isDark: w
                  },
                  M.path
                ))
              },
              y.key
            ) }) : null
          }
        )
      }
    )
  ] });
}, Ct = 18, Yi = 160, _r = 14, qi = 22, Zi = 2.5, Ji = 1, Bo = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, s = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(s, 0)) + Math.min(Math.max(n, s), 0) - r.r;
}, Qi = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, es = (e, o, r) => {
  const n = Vr, s = Ct, c = Ct + o / 2, i = Math.max(e, ...r.map((g) => g.right + n)), a = {
    cx: i / 2,
    cy: c,
    hx: i / 2,
    hy: o / 2,
    r: qt
  }, p = r.filter((g) => g.bottom - g.top > Pe * 1.02).map((g) => {
    const y = (g.right - g.left) / Pe;
    return {
      cx: (g.left + g.right) / 2,
      cy: (g.top + g.bottom) / 2 + Ct,
      hx: (g.right - g.left) / 2 + n,
      hy: (g.bottom - g.top) / 2 + n,
      r: jr * y + n
    };
  }), f = (g, y) => p.reduce(
    (v, u) => Qi(v, Bo(g, y, u), qi),
    Bo(g, y, a)
  ), h = (g, y) => {
    let v = c, u = c + y * (o / 2 + s);
    if (f(g, v) > 0)
      return null;
    for (let S = 0; S < 12; S += 1) {
      const R = (v + u) / 2;
      f(g, R) <= 0 ? v = R : u = R;
    }
    return v;
  }, m = Math.min(0, ...p.map((g) => g.cx - g.hx)) - 2, x = Math.max(i, ...p.map((g) => g.cx + g.hx)) + 2, b = [], w = [];
  for (let g = m; g <= x; ) {
    const y = h(g, -1), v = h(g, 1);
    if (y !== null && v !== null) {
      const S = +(g + _r).toFixed(1);
      b.push([S, +y.toFixed(1)]), w.push([S, +v.toFixed(1)]);
    }
    const u = g - m < qt + 4 || x - g < qt + 4;
    g += u ? Ji : Zi;
  }
  return b.length ? `M ${[...b, ...w.reverse()].map(([g, y]) => `${g} ${y}`).join(" L ")} Z` : "";
}, Wo = (e, [o, r], n, s) => {
  Array.from(e.children).forEach((c) => {
    Je(c) && c.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: s,
      fill: r === 0 ? "forwards" : "none"
    });
  });
}, ts = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: s,
  isDark: c,
  solidSurface: i,
  groupText: a,
  glassRef: p,
  shapeRef: f,
  children: h
}) => {
  const m = l.useRef(null), x = l.useRef(null), b = l.useRef(null), w = l.useRef(null), I = l.useRef(null), g = l.useCallback(
    (W, P, X) => {
      var q, U;
      (q = I.current) == null || q.setAttribute("cx", String(W)), (U = I.current) == null || U.setAttribute("cy", String(P)), w.current && (w.current.style.opacity = String(
        X * (c ? je.dark.rim : je.light.rim)
      ));
    },
    [c]
  ), y = l.useRef(null), v = l.useRef(null), u = `lumora-flyout-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, S = l.useRef(0), R = l.useRef(0), C = l.useRef(""), F = () => {
    var ue, $, M, j;
    const W = m.current, P = x.current;
    if (!W || !P)
      return !1;
    const X = W.getBoundingClientRect(), q = Array.from(
      W.querySelectorAll('[role="menuitem"]'),
      (D) => {
        const K = D.getBoundingClientRect();
        return {
          left: K.left - X.left,
          right: K.right - X.left,
          top: K.top - X.top,
          bottom: K.bottom - X.top
        };
      }
    ), U = es(
      W.offsetWidth,
      W.offsetHeight,
      q
    );
    return U === C.current ? !1 : (C.current = U, P.style.clipPath = `path('${U}')`, (ue = b.current) == null || ue.setAttribute("d", U), ($ = w.current) == null || $.setAttribute("d", U), (M = y.current) == null || M.setAttribute("d", U), (j = v.current) == null || j.setAttribute("d", U), !0);
  }, V = () => {
    if (R.current = 0, S.current)
      return;
    const W = () => {
      if (R.current = F() ? 0 : R.current + 1, R.current > 8) {
        S.current = 0;
        return;
      }
      S.current = requestAnimationFrame(W);
    };
    S.current = requestAnimationFrame(W);
  };
  f.current = V, l.useLayoutEffect(() => (F(), V(), () => {
    cancelAnimationFrame(S.current), S.current = 0;
  }), [n]);
  const G = l.useRef(null), T = l.useRef(null), z = l.useRef(!1), O = (W) => {
    m.current = W;
    const { ref: P } = s;
    typeof P == "function" ? P(W) : P && (P.current = W);
  }, B = () => {
    Xt(p.current), Xt(G.current), Xt(m.current);
  }, ee = () => {
    var q;
    const W = m.current, P = p.current, X = G.current;
    if (!(!Je(W) || !P || !X)) {
      if (B(), ze()) {
        W.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      T.current = null, P.animate(
        [
          { transform: `scale(${Lo}, ${No})` },
          { transform: "none" }
        ],
        { duration: qe.duration, easing: qe.easing }
      ), Wo(P, [0, 1], 160, "ease-out");
      try {
        (q = x.current) == null || q.animate(
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
          duration: Fo.duration,
          delay: 60,
          easing: Fo.easing,
          fill: "backwards"
        }
      );
    }
  }, le = () => {
    const W = m.current, P = p.current, X = G.current;
    if (!Je(W) || !P || !X) {
      r == null || r();
      return;
    }
    if (B(), ze()) {
      W.animate([{ opacity: 1 }, { opacity: 0 }], {
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
    }), Wo(P, [1, 0], 200, "ease-in"), P.animate(
      [
        { transform: "none" },
        { transform: `scale(${Lo}, ${No})` }
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
      le();
      return;
    }
    o == null || o(), ee();
  }, [e]), l.useLayoutEffect(() => {
    const W = m.current;
    if (!W)
      return;
    const P = W.getBoundingClientRect(), X = T.current;
    if (T.current = { width: P.width, height: P.height }, !z.current) {
      z.current = !0;
      return;
    }
    const q = p.current;
    !e || !X || !Je(q) || !P.width || !P.height || ze() || (Xt(q), q.animate(
      [
        {
          transform: `scale(${X.width / P.width}, ${X.height / P.height})`
        },
        { transform: "scale(0.98, 1.04)", offset: 0.35 },
        { transform: "none" }
      ],
      { duration: qe.duration, easing: qe.easing }
    ));
  }, [n]), /* @__PURE__ */ E(
    _,
    {
      ref: O,
      onMouseEnter: s.onMouseEnter,
      onMouseLeave: s.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": a,
      sx: {
        position: "relative",
        borderRadius: `${qt}px`,
        p: `${Vr}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -rr - 2,
          width: rr + 2
        }
      },
      children: [
        /* @__PURE__ */ E(
          _,
          {
            ref: p,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Ct,
              bottom: -Ct,
              left: -_r,
              right: -Yi,
              pointerEvents: "none",
              // The rail icon's centre: the panel is centred on it,
              // one gap plus half the rail's padding to the left
              transformOrigin: `${_r - Gi}px 50%`,
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
                            /* @__PURE__ */ t("path", { ref: v, fill: "black" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ t("g", { mask: `url(#${u}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: y,
                        transform: "translate(0 12)",
                        fill: c ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${u}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                gt,
                {
                  ref: x,
                  isDark: c,
                  solid: i,
                  refract: !1,
                  onLight: g,
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
                        ref: b,
                        fill: "none",
                        stroke: `url(#${u}-rim)`,
                        strokeWidth: "1.25"
                      }
                    ),
                    /* @__PURE__ */ E(
                      "radialGradient",
                      {
                        ref: I,
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
                              stopColor: `rgb(${c ? je.dark.rgb : je.light.rgb})`,
                              stopOpacity: "1"
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: `rgb(${c ? je.dark.rgb : je.light.rgb})`,
                              stopOpacity: "0"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ t(
                      "path",
                      {
                        ref: w,
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
        /* @__PURE__ */ t(_, { ref: G, sx: { position: "relative" }, children: h })
      ]
    }
  );
}, gn = l.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: s,
    onClick: c,
    onKeyDown: i,
    onFocus: a,
    onHoverStart: p,
    accentColor: f,
    activeForegroundColor: h,
    labelColor: m,
    iconColor: x,
    isDark: b
  }, w) => {
    const I = (u) => {
      const S = u.currentTarget.getBoundingClientRect();
      u.currentTarget.style.setProperty(
        "--mx",
        `${(u.clientX - S.left) / S.width * 100}%`
      ), u.currentTarget.style.setProperty(
        "--my",
        `${(u.clientY - S.top) / S.height * 100}%`
      );
    }, g = (u) => {
      const S = u.currentTarget;
      !Je(S) || ze() || S.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.1, 0.9)", offset: 0.22 },
          { transform: "scale(0.95, 1.06)", offset: 0.5 },
          { transform: "scale(1.02, 0.99)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, y = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, v = {
      ...Hr(b),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": y
    };
    return /* @__PURE__ */ E(
      Qe,
      {
        ref: w,
        role: "menuitem",
        tabIndex: s,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: c,
        onKeyDown: i,
        onFocus: a,
        onPointerMove: I,
        onMouseEnter: g,
        onPointerEnter: (u) => p(u.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Pe,
          height: Pe,
          borderRadius: `${jr}px`,
          color: n ? h : m,
          bgcolor: n ? f : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Ot(f, b) : {},
          transition: `translate ${ke.duration}ms ${ke.easing}, scale ${ke.duration}ms ${ke.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${_i} ${qe.duration}ms ${qe.easing} both`,
          animationDelay: `${Ui + r * Hi}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: 22,
            color: n ? h : x
          },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 160ms ease",
            background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, ${b ? 0.18 : 0.7}), transparent 65%)`
          },
          // The current page keeps its accent fill; it still glows
          "&:hover": n ? {
            "&::before": { opacity: 1 },
            "& [data-tile-name]": y
          } : v,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : v,
            "& [data-tile-name]": y,
            outline: "2px solid",
            outlineColor: f,
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
                ...zr(b),
                position: "absolute",
                top: "100%",
                left: "50%",
                translate: "-50% 8px",
                transformOrigin: "top center",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: 0,
                scale: "calc(0.6 / var(--dock-scale, 1))",
                transition: `opacity 140ms ease, scale ${ke.duration}ms ${ke.easing}`,
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
gn.displayName = "FlyoutTile";
const rs = 100, os = 250, ns = (e) => {
  const [o, r] = l.useState(null), n = l.useRef(o);
  n.current = o;
  const s = l.useRef(/* @__PURE__ */ new Map()), c = l.useRef(null), i = l.useRef(void 0), a = l.useRef(void 0), p = () => {
    clearTimeout(i.current), i.current = void 0;
  }, f = () => {
    clearTimeout(a.current), a.current = void 0;
  }, h = (y, v, u = !1) => {
    p(), f(), r({ key: y, pinned: v, focusFirst: u });
  }, m = l.useCallback((y = !1) => {
    var u, S;
    p(), f();
    const v = (u = n.current) == null ? void 0 : u.key;
    r(null), y && v && ((S = s.current.get(v)) == null || S.focus());
  }, []), x = () => {
    p(), !(!n.current || n.current.pinned) && (f(), a.current = setTimeout(() => m(), os));
  };
  l.useEffect(() => {
    e || m();
  }, [e, m]), l.useEffect(
    () => () => {
      p(), f();
    },
    []
  );
  const b = o !== null;
  return l.useEffect(() => {
    if (!b)
      return;
    const y = (S) => {
      var C;
      const R = S;
      return R ? (C = c.current) != null && C.contains(R) ? !0 : [...s.current.values()].some((F) => F.contains(R)) : !1;
    }, v = (S) => {
      y(S.target) || m();
    }, u = (S) => {
      var R;
      S.key === "Escape" && m(
        !!((R = c.current) != null && R.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", u), () => {
      document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", u);
    };
  }, [b, m]), {
    state: o,
    close: m,
    triggerProps: (y) => ({
      ref: (v) => {
        v ? s.current.set(y, v) : s.current.delete(y);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        f();
        const v = n.current;
        if (v) {
          v.key !== y && h(y, v.pinned);
          return;
        }
        p(), i.current = setTimeout(
          () => h(y, !1),
          rs
        );
      },
      onMouseLeave: x,
      onClick: (v) => {
        if (v.detail === 0) {
          h(y, !0, !0);
          return;
        }
        const u = n.current;
        (u == null ? void 0 : u.key) === y && u.pinned ? m() : h(y, !0);
      },
      onKeyDown: (v) => {
        v.key === "ArrowRight" && (v.preventDefault(), h(y, !0, !0));
      }
    }),
    flyoutProps: {
      ref: c,
      onMouseEnter: f,
      onMouseLeave: x
    },
    onRailLeafEnter: () => {
      p(), n.current && !n.current.pinned && m();
    },
    getTrigger: (y) => s.current.get(y) ?? null
  };
}, is = 264, ss = 72, Po = 64, Kt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, as = 16, cs = 14, ls = 4, ds = 2.5, zo = "0.7rem", Go = 22, Uo = he(Mt), it = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
  const c = l.useRef(null), [i, a] = l.useState(!1), p = l.useCallback(() => {
    const f = c.current;
    f && a(f.scrollWidth > f.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    p();
  }, [p, e]), l.useEffect(() => {
    const f = c.current;
    if (!f)
      return;
    const h = new ResizeObserver(() => p());
    return h.observe(f), () => h.disconnect();
  }, [p]), /* @__PURE__ */ t(
    Ee,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !i,
      disableFocusListener: !i,
      disableTouchListener: !i,
      children: /* @__PURE__ */ t(
        ie,
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
            ...s ? { fontWeight: s } : {},
            ...r ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: e
        }
      )
    }
  );
}, us = ({
  open: e,
  size: o = as
}) => e ? /* @__PURE__ */ t(Yn, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Vn, { sx: { fontSize: o, opacity: 0.75 } }), Ho = ({ open: e }) => /* @__PURE__ */ t(
  qn,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), jt = 600, Cr = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: s,
  logo: c,
  title: i,
  onBrandClick: a,
  brandMenuOpen: p,
  showHeaderBar: f = !1,
  headerBackgroundColor: h,
  headerForegroundColor: m,
  brandColor: x,
  activeAccentColor: b = "#01584f",
  groupAccentColor: w,
  activeForegroundColor: I,
  foregroundColor: g,
  surfaceBackgroundColor: y,
  collapsed: v = !1,
  expandedWidth: u = is,
  collapsedWidth: S = ss,
  showLabels: R = !1,
  topInsetPx: C = 0,
  topContent: F,
  footer: V,
  submenuMode: G = "inline"
}) => {
  const T = Ne(), z = T.palette.mode === "dark", O = G === "flyout" && v && !R, B = ns(O), ee = l.useRef(null), le = Mi(O, z), W = Di({
    enabled: O,
    isDark: z,
    color: b,
    containerRef: ee,
    activeKey: r
  }), { close: P } = B;
  l.useEffect(() => {
    P();
  }, [r, P]);
  const [X, q] = l.useState(
    {}
  ), U = I ?? Ir(b), ue = {
    bgcolor: b,
    color: U,
    "& .MuiListItemIcon-root": { color: U }
  }, $ = {
    bgcolor: b,
    color: U,
    borderRadius: "8px"
  }, M = w ?? Qt(b), j = y ?? (z ? T.palette.background.paper : "#ffffff"), D = g ?? (z ? "text.primary" : b), K = h ?? j, se = m ?? (h ? Ir(K) : g ?? (z ? T.palette.text.primary : b)), Ge = Qt(se), fe = (d) => {
    n == null || n(d);
  }, _e = (d, L) => {
    q((N) => ({ ...N, [d]: !L }));
  }, me = (d, L) => X[L] ?? Ve(d, r), ge = (d, L, N) => ({
    color: d ? U : D,
    bgcolor: d ? b : "transparent",
    "& .MuiListItemIcon-root": {
      color: d ? U : D,
      minWidth: N
    },
    "&:hover": d || R ? ue : { bgcolor: L }
  }), de = {
    "&.Mui-selected": {
      bgcolor: b
    },
    "&.Mui-selected:hover": ue
  }, oe = (d) => {
    const L = De(d, r), N = /* @__PURE__ */ E(
      Ut,
      {
        disabled: !d.path,
        selected: L,
        onClick: () => d.path && fe(d.path),
        "data-testid": `sidebar-item-${d.text}`,
        "data-active": L ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...d.action && { pr: 6 },
          ...d.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...ge(
            L,
            M,
            d.subtitle ? 48 : 36
          ),
          ...de
        },
        children: [
          /* @__PURE__ */ t(ve, { children: d.icon }),
          /* @__PURE__ */ t(
            Le,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                it,
                {
                  text: d.text,
                  fontWeight: jt
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
      return N;
    const { action: k } = d;
    return /* @__PURE__ */ E(_, { sx: { position: "relative" }, children: [
      N,
      /* @__PURE__ */ t(Ee, { title: k.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        Se,
        {
          "aria-label": k.label,
          "data-testid": `sidebar-action-${d.text}`,
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
            borderColor: L ? "rgba(255, 255, 255, 0.35)" : M,
            color: L ? U : D,
            "&:hover": {
              bgcolor: L ? "rgba(255, 255, 255, 0.15)" : M
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: L ? U : D,
              outlineOffset: 1
            }
          },
          children: k.icon
        }
      ) })
    ] }, d.text);
  }, pe = (d) => {
    const L = Ve(d, r), N = De(d, r), k = ft("", d), H = me(d, k);
    return /* @__PURE__ */ E(
      _,
      {
        "data-testid": `sidebar-group-${d.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: L ? M : "transparent"
        },
        children: [
          /* @__PURE__ */ E(
            Ut,
            {
              onClick: () => _e(k, H),
              "data-testid": `sidebar-item-${d.text}`,
              "data-active": N ? "true" : "false",
              "aria-expanded": H,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...ge(N, M, 36)
              },
              children: [
                /* @__PURE__ */ t(ve, { children: d.icon }),
                /* @__PURE__ */ t(
                  Le,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      it,
                      {
                        text: d.text,
                        fontWeight: jt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(Ho, { open: H })
              ]
            }
          ),
          /* @__PURE__ */ t(So, { in: H, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            _,
            {
              "data-testid": `sidebar-children-${d.text}`,
              sx: { pb: 0.5 },
              children: d.subitems.map(
                (Z) => xe(Z, k, 1)
              )
            }
          ) })
        ]
      },
      d.text
    );
  }, xe = (d, L, N) => {
    const k = ft(L, d), H = ls + (N - 1) * ds;
    if (ht(d)) {
      const te = Ve(d, r), Q = De(d, r), ne = me(d, k);
      return /* @__PURE__ */ E(_, { "data-testid": `sidebar-group-${d.text}`, children: [
        /* @__PURE__ */ E(
          Ut,
          {
            onClick: () => _e(k, ne),
            "data-testid": `sidebar-subitem-${d.text}`,
            "data-active": te ? "true" : "false",
            "aria-expanded": ne,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: H,
              ...ge(Q, "action.hover", 32)
            },
            children: [
              d.icon ? /* @__PURE__ */ t(ve, { children: d.icon }) : null,
              /* @__PURE__ */ t(
                Le,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    it,
                    {
                      text: d.text,
                      fontWeight: jt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(Ho, { open: ne })
            ]
          }
        ),
        /* @__PURE__ */ t(So, { in: ne, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(_, { "data-testid": `sidebar-children-${d.text}`, children: d.subitems.map(
          (tt) => xe(tt, k, N + 1)
        ) }) })
      ] }, k);
    }
    const Z = De(d, r);
    return /* @__PURE__ */ E(
      Ut,
      {
        selected: Z,
        disabled: !d.path,
        onClick: () => d.path && fe(d.path),
        "data-testid": `sidebar-subitem-${d.text}`,
        "data-active": Z ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: H,
          ...ge(Z, "action.hover", 32),
          ...de
        },
        children: [
          d.icon ? /* @__PURE__ */ t(ve, { children: d.icon }) : null,
          /* @__PURE__ */ t(
            Le,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                it,
                {
                  text: d.text,
                  fontWeight: jt
                }
              )
            }
          )
        ]
      },
      k
    );
  }, Ce = (d, L, N, k, H, Z) => {
    const te = !H, Q = /* @__PURE__ */ E(
      Se,
      {
        "aria-label": L,
        disabled: te,
        onClick: H,
        onMouseEnter: O ? B.onRailLeafEnter : void 0,
        ...O ? { [tr]: "" } : {},
        "data-testid": (Z == null ? void 0 : Z.testId) ?? `sidebar-item-${L}`,
        "data-active": k ? "true" : "false",
        sx: R ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: k ? U : D,
          bgcolor: k ? b : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Go
          },
          "&:hover": $,
          ...Kt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: k ? U : D,
          bgcolor: k ? b : "transparent",
          borderRadius: k ? "8px" : "50%",
          "&:hover": {
            bgcolor: k ? b : Z != null && Z.insideGroup ? "action.hover" : M,
            borderRadius: "8px"
          },
          ...Kt,
          ...O ? at(k) : {}
        },
        children: [
          N,
          R ? /* @__PURE__ */ t(
            it,
            {
              text: L,
              variant: "caption",
              center: !0,
              fontSize: zo
            }
          ) : null
        ]
      }
    );
    return R ? te ? /* @__PURE__ */ t("span", { children: Q }, d) : /* @__PURE__ */ t(l.Fragment, { children: Q }, d) : /* @__PURE__ */ t(
      Ee,
      {
        title: L,
        placement: "right",
        arrow: !O,
        ...O ? kt : {},
        children: te ? /* @__PURE__ */ t("span", { children: Q }) : Q
      },
      d
    );
  }, Dt = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, at = (d) => ({
    borderRadius: "12px",
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...d ? { bgcolor: "transparent" } : {},
    transition: `transform ${Uo.duration}ms ${Uo.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), kt = {
    slotProps: {
      tooltip: { sx: zr(z) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, ir = (d) => {
    var H;
    const L = Ve(d, r), N = ft("", d), k = ((H = B.state) == null ? void 0 : H.key) === N;
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
          Se,
          {
            ...B.triggerProps(N),
            "aria-label": d.text,
            "aria-haspopup": "menu",
            "aria-expanded": k,
            "data-testid": `sidebar-item-${d.text}`,
            "data-active": L ? "true" : "false",
            "data-open": k ? "true" : "false",
            [tr]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: L ? U : D,
              bgcolor: L ? b : k ? M : "transparent",
              ...at(L),
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
              ...Kt
            },
            children: d.icon
          }
        )
      },
      d.text
    );
  }, et = (d) => {
    const L = Ve(d, r), N = De(d, r), k = ft("", d), H = me(d, k), Z = /* @__PURE__ */ E(
      Se,
      {
        "aria-label": d.text,
        "aria-expanded": H,
        onClick: () => _e(k, H),
        "data-testid": `sidebar-item-${d.text}`,
        "data-active": N ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: R ? 0.25 : 0,
          width: R ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...R ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: N ? U : D,
          bgcolor: N ? b : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": R ? { bgcolor: b, color: U } : {
            bgcolor: N ? b : "transparent"
          },
          ...Kt
        },
        children: [
          R ? /* @__PURE__ */ t(
            _,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Go
                }
              },
              children: d.icon
            }
          ) : d.icon,
          R ? /* @__PURE__ */ t(
            it,
            {
              text: d.text,
              variant: "caption",
              center: !0,
              fontSize: zo
            }
          ) : null,
          /* @__PURE__ */ t(us, { open: H, size: cs })
        ]
      }
    ), te = R ? Z : /* @__PURE__ */ t(Ee, { title: d.text, placement: "right", arrow: !0, children: Z });
    return /* @__PURE__ */ E(
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
          bgcolor: L ? M : "transparent",
          ...R ? {} : { "&:hover": { bgcolor: M } }
        },
        children: [
          te,
          H ? Wr(d.subitems, d.icon).map(
            ({ sub: Q, icon: ne }) => Ce(
              Q.path,
              Q.text,
              ne,
              De(Q, r),
              () => fe(Q.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${Q.text}`
              }
            )
          ) : null
        ]
      },
      d.text
    );
  }, xt = (d) => /* @__PURE__ */ t(
    _,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Ce(
        d.text,
        d.subtitle ? `${d.text} · ${d.subtitle}` : d.text,
        d.icon,
        De(d, r),
        d.path ? () => fe(d.path) : void 0,
        { testId: `sidebar-item-${d.text}` }
      )
    },
    d.text
  ), Lt = (d) => ht(d) ? O ? ir(d) : v ? et(d) : pe(d) : v ? xt(d) : oe(d), Ue = (d) => /* @__PURE__ */ t(
    Ae,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: v ? "center" : "stretch"
      },
      children: d.map(Lt)
    }
  ), ct = v ? S : u, Nt = () => {
    var te, Q;
    const { state: d } = B, L = d ? [...e, ...o].find(
      (ne) => ht(ne) && ft("", ne) === d.key
    ) ?? null : null, N = L ? ((te = ee.current) == null ? void 0 : te.getBoundingClientRect().right) ?? S : S, k = L ? ((Q = ee.current) == null ? void 0 : Q.closest("[data-rail-surface]")) ?? ee.current : null, H = k == null ? void 0 : k.getBoundingClientRect(), Z = k && H ? {
      left: H.left,
      top: H.top,
      width: H.width,
      height: H.height,
      radius: parseFloat(
        getComputedStyle(k).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Vi,
      {
        group: L,
        groupKey: L ? d.key : null,
        anchor: L ? B.getTrigger(d.key) : null,
        railEdge: N,
        railShape: Z,
        activePath: r,
        focusFirst: d == null ? void 0 : d.focusFirst,
        onNavigate: fe,
        onClose: B.close,
        panelProps: B.flyoutProps,
        accentColor: b,
        activeForegroundColor: U,
        solidSurface: j
      }
    );
  }, Ft = f ? /* @__PURE__ */ t(
    _,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Po,
        minHeight: Po,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: K
      },
      children: c || i ? /* @__PURE__ */ t(
        Jt,
        {
          logo: c,
          title: v ? void 0 : i,
          appName: i || "App",
          onClick: a,
          menuOpen: p,
          color: x ?? se,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, sr = !f && c ? /* @__PURE__ */ t(
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
        Jt,
        {
          logo: c,
          appName: i || "App",
          onClick: a,
          menuOpen: p,
          color: x ?? se,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, He = R ? 0.5 : v ? 1 : 1.5;
  return /* @__PURE__ */ t(nr.Provider, { value: O, children: /* @__PURE__ */ E(
    _,
    {
      ref: ee,
      ...le.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": v ? "true" : "false",
      "data-labeled": R ? "true" : "false",
      sx: {
        width: ct,
        minWidth: ct,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: j,
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
        ...O ? Dt : {}
      },
      children: [
        le.lens,
        W.glass,
        Ft ?? sr,
        F ? /* @__PURE__ */ t(
          _,
          {
            sx: {
              flexShrink: 0,
              px: He,
              pt: 1,
              pb: 1
            },
            children: F
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
              px: He,
              pt: C && !f ? `${C}px` : 1,
              pb: 2
            },
            children: [
              Ue(e),
              o.length > 0 ? /* @__PURE__ */ E(_, { sx: { mt: "auto", pt: 2 }, children: [
                V ? null : /* @__PURE__ */ t(
                  Ze,
                  {
                    sx: { mb: 1, borderColor: "divider" }
                  }
                ),
                Ue(o)
              ] }) : null
            ]
          }
        ),
        V ? /* @__PURE__ */ t(_, { sx: { flexShrink: 0, px: He, pb: 1.5 }, children: /* @__PURE__ */ t(
          _,
          {
            sx: {
              borderTop: `1px solid ${Ge}`,
              pt: 1.5
            },
            children: V
          }
        ) }) : null,
        O ? Nt() : null
      ]
    }
  ) });
}, Or = "var(--lumora-content-padding, 0px)", Xo = `calc(${Or} * -1)`, ac = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: c = !0,
  sx: i
}) => /* @__PURE__ */ t(
  _,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Xo,
        mt: o ? Xo : 0,
        // Space below it, like any other block on the page
        mb: Or,
        px: c ? Or : 0,
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
      ...Array.isArray(i) ? i : [i]
    ],
    children: e
  }
), fs = ({ keys: e }) => /* @__PURE__ */ t(
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
const J = {
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
}, We = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, ps = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        We.ACCESS_TOKEN
      ), o = localStorage.getItem(
        We.REFRESH_TOKEN
      ), r = localStorage.getItem(We.USER);
      e && !localStorage.getItem(ce.ACCESS_TOKEN) && localStorage.setItem(ce.ACCESS_TOKEN, e), o && !localStorage.getItem(ce.REFRESH_TOKEN) && localStorage.setItem(
        ce.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(ce.USER) && localStorage.setItem(ce.USER, r), (e || o || r) && (localStorage.removeItem(We.ACCESS_TOKEN), localStorage.removeItem(We.REFRESH_TOKEN), localStorage.removeItem(We.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Sr = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        J.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      J.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      J.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Y(
      "Failed to access storage",
      J.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, vr = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        J.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      J.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      J.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Y(
      "Failed to write to storage",
      J.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, xn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Tt = () => {
  try {
    ps();
    const e = Sr(ce.ACCESS_TOKEN), o = Sr(ce.REFRESH_TOKEN), r = Sr(ce.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), xn(ce.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Y ? e : new Y(
      "Failed to retrieve authentication tokens",
      J.UNKNOWN_ERROR,
      e
    );
  }
}, hs = () => {
  try {
    const { accessToken: e, refreshToken: o } = Tt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Y(
        "No authentication tokens found",
        J.TOKEN_NOT_FOUND
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
        J.UNKNOWN_ERROR,
        e
      )
    };
  }
}, bn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Y(
        "At least one token must be provided",
        J.TOKEN_INVALID
      );
    return e && vr(ce.ACCESS_TOKEN, e), o && vr(ce.REFRESH_TOKEN, o), r && vr(ce.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Y ? n : new Y(
        "Failed to store tokens",
        J.UNKNOWN_ERROR,
        n
      )
    };
  }
}, At = () => {
  try {
    return [
      ce.ACCESS_TOKEN,
      ce.REFRESH_TOKEN,
      ce.USER,
      // Also clear legacy keys for complete cleanup
      We.ACCESS_TOKEN,
      We.REFRESH_TOKEN,
      We.USER
    ].map((n) => xn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Y ? e : new Y(
        "Failed to clear tokens",
        J.LOGOUT_FAILED,
        e
      )
    };
  }
}, ms = () => {
  try {
    const { user: e } = Tt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Y ? e : new Y(
        "Failed to retrieve user data",
        J.UNKNOWN_ERROR,
        e
      )
    };
  }
}, cc = (e) => {
  if (!(e instanceof Y))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case J.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case J.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case J.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case J.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case J.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case J.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Tr = (e, o = "Unknown") => {
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
}, gs = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Io.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, s = [];
  const c = (i, a) => {
    s.forEach(({ resolve: p, reject: f }) => {
      i ? f(i) : a && p(a);
    }), s = [];
  };
  return o.interceptors.request.use(
    (i) => {
      const { accessToken: a } = Tt();
      return a && i.headers && (i.headers.Authorization = `Bearer ${a}`), i;
    },
    (i) => Promise.reject(i)
  ), o.interceptors.response.use(
    (i) => i,
    async (i) => {
      var x;
      const a = i.config, p = (x = i.response) == null ? void 0 : x.status, f = (a == null ? void 0 : a.url) || "", h = f.includes("/auth/refresh");
      if (p !== 401 || a._retry || h)
        return Promise.reject(i);
      a._retry = !0;
      const { refreshToken: m } = Tt();
      if (!m) {
        const b = new Error(
          "No refresh token available for token refresh"
        );
        return Tr(b, "AxiosClient - Token Refresh"), At(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (r && n)
        return new Promise((b, w) => {
          s.push({ resolve: b, reject: w });
        }).then((b) => {
          const {
            accessToken: w,
            refreshToken: I
          } = b;
          if (a.headers && (a.headers.Authorization = `Bearer ${w}`), f.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const g = JSON.parse(
                  a.data || "{}"
                );
                g.refresh_token = I, a.data = JSON.stringify(g);
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
        }).catch((b) => Promise.reject(b));
      r = !0, n = Io.post(
        `${e}/auth/refresh`,
        {
          refresh_token: m
        }
      );
      try {
        const b = await n, { accessToken: w, refreshToken: I } = b.data;
        if (bn(w, I, null), c(null, {
          accessToken: w,
          refreshToken: I
        }), a.headers && (a.headers.Authorization = `Bearer ${w}`), f.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const g = JSON.parse(
                a.data || "{}"
              );
              g.refresh_token = I, a.data = JSON.stringify(g);
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
      } catch (b) {
        return Tr(
          b,
          "AxiosClient - Token Refresh Failed"
        ), c(b), At(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(b);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, we = {
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
}, lt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, dt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, ut = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, yn = cn(), Oe = yn.typography.pxToRem, xs = (e) => {
  const o = e === "dark", r = [...yn.shadows];
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
        contrastText: Re[50]
      },
      warning: o ? { light: dt[400], main: dt[500], dark: dt[700] } : { light: dt[300], main: dt[400], dark: dt[800] },
      error: o ? { light: ut[400], main: ut[500], dark: ut[700] } : { light: ut[300], main: ut[400], dark: ut[800] },
      success: o ? { light: lt[400], main: lt[500], dark: lt[700] } : { light: lt[300], main: lt[400], dark: lt[800] },
      grey: Re,
      divider: o ? st(Re[700], 0.6) : st(Re[300], 0.4),
      background: o ? { default: Re[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Re[400] } : { primary: Re[800], secondary: Re[600] },
      action: o ? {
        hover: st(Re[600], 0.2),
        selected: st(Re[600], 0.3)
      } : {
        hover: st(Re[200], 0.2),
        selected: st(Re[200], 0.3)
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
}, bs = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Tt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return bn(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      Tr(s, "TokenValidator - Refresh Failed");
    }
  return At(), o ? o() : window.location.href = "/login", !1;
}, _t = ({ size: e = 20 }) => /* @__PURE__ */ E(
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
), Ko = he(Mt), Be = "#09C1AE", Zt = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Be} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), ys = (e) => ({
  ...Zt(14, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: "12px",
    zIndex: 1,
    background: `${Ot(Be, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), jo = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: c = "#01584f",
  rightOffsetPx: i = 0
}) => {
  const a = Xr(), p = l.useContext(nr), f = Ne().palette.mode === "dark", h = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", m = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ E(
    Qe,
    {
      ...m,
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
        borderColor: r ? Be : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: c,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Be}`,
          outlineOffset: 2
        },
        ...n && Zt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(_t, { size: 20 }),
        /* @__PURE__ */ t(
          ie,
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
        s && /* @__PURE__ */ t(fs, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && p ? /* @__PURE__ */ t(Ee, { title: h, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    Se,
    {
      ...m,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: "14px",
        ...Ot(Be, f, "clear"),
        backdropFilter: "blur(8px) saturate(180%)",
        WebkitBackdropFilter: "blur(8px) saturate(180%)",
        ...r && {
          boxShadow: `${Ot(Be, f, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${Ko.duration}ms ${Ko.easing}, box-shadow 200ms ease`,
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
        ...n && ys(f)
      },
      children: /* @__PURE__ */ t(_t, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Ee, { title: h, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    Se,
    {
      ...m,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Be : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Zt(8, "background.paper")
      },
      children: /* @__PURE__ */ t(_t, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(Ee, { title: h, placement: "left", children: /* @__PURE__ */ t(
    Se,
    {
      ...m,
      disableFocusRipple: !0,
      "data-variant": "floating",
      sx: {
        position: "fixed",
        right: 24 + i,
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
        outline: r ? `2px solid ${Be}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Be}` },
        ...n && Zt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(_, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(_t, { size: 26 }) })
    }
  ) });
}, Vt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(oi, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ E(ni, { children: [
  /* @__PURE__ */ t(ii, { fontSize: "small" }),
  /* @__PURE__ */ t(ie, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ie,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    ln,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, wt = 24, Ss = 720, vs = 1140, Es = 1250, ws = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: s,
  sidebarWidthPx: c,
  bottomOffsetPx: i,
  fullScreen: a,
  fullScreenBottom: p = "0px",
  onClose: f
}) => {
  l.useEffect(() => {
    if (!e || !f)
      return;
    const w = (I) => {
      I.key === "Escape" && f();
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [e, f]);
  const h = r === "docked", m = wt + i;
  let x;
  a ? x = {
    top: 0,
    left: 0,
    right: 0,
    bottom: p,
    borderRadius: 0
  } : h ? x = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : x = {
    bottom: m,
    ...n === "left" ? { left: c + wt } : { right: wt },
    width: s,
    maxWidth: `calc(100vw - ${wt * 2}px)`,
    height: `min(${Ss}px, calc(100vh - ${m + wt}px))`,
    borderRadius: "12px"
  };
  const b = /* @__PURE__ */ t(
    Lr,
    {
      role: h ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: h ? vs : Es,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...x
      },
      children: o
    }
  );
  return h ? /* @__PURE__ */ t(ai, { direction: "left", in: e, mountOnEnter: !0, children: b }) : /* @__PURE__ */ t(
    si,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: b
    }
  );
}, Rs = 180, Vo = 250, Is = "#01584F", _s = ({
  text: e,
  testId: o
}) => {
  const r = l.useRef(null), [n, s] = l.useState(!1), c = l.useCallback(() => {
    const i = r.current;
    i && s(i.scrollWidth > i.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    c();
  }, [c, e]), l.useEffect(() => {
    const i = r.current;
    if (!i)
      return;
    const a = new ResizeObserver(() => c());
    return a.observe(i), () => a.disconnect();
  }, [c]), /* @__PURE__ */ t(
    Ee,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        ie,
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
}, Sn = (e, o, r, n) => {
  const s = e ? 48 : 44, c = e ? "text.secondary" : o, i = e ? Is : o;
  return { activeBg: i, sx: n ? {
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
    color: r ? "#ffffff" : c,
    backgroundColor: r ? i : "transparent",
    "&:hover": {
      backgroundColor: r ? i : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : c
    }
  } : {
    width: s,
    height: s,
    color: r ? "#ffffff" : c,
    backgroundColor: r ? i : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? i : "action.hover",
      borderRadius: "4px"
    }
  } };
}, vn = ({ link: e }) => /* @__PURE__ */ E(Ae, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    _s,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), En = (e, o, r) => r ? e : /* @__PURE__ */ t(Ee, { title: o, placement: "right", arrow: !0, children: e }), Cs = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: c,
  railShowTitles: i
}) => {
  const a = Ne(), [p, f] = l.useState(null), [h, m] = l.useState(!1), x = l.useRef(
    null
  ), b = l.useRef(null), w = l.useRef(null), I = l.useRef(!1), g = l.useRef(!1), y = l.useId(), v = () => {
    x.current && (clearTimeout(x.current), x.current = null);
  }, u = () => {
    v(), x.current = setTimeout(() => {
      m(!1), x.current = null;
    }, Rs);
  }, S = () => {
    v(), m(!0);
  };
  l.useEffect(() => {
    if (!h)
      return;
    const T = (z) => {
      var O;
      z.key === "Escape" && (m(!1), (O = w.current) == null || O.focus());
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [h]), l.useEffect(() => {
    if (!h || !g.current)
      return;
    const T = globalThis.requestAnimationFrame(() => {
      var O;
      const z = (O = b.current) == null ? void 0 : O.querySelector(
        '[role="menuitem"]'
      );
      z == null || z.focus(), g.current = !1;
    });
    return () => cancelAnimationFrame(T);
  }, [h]);
  const R = Ve(e, o), { activeBg: C, sx: F } = Sn(
    s,
    n,
    R,
    i
  ), V = /* @__PURE__ */ t(
    Se,
    {
      ref: w,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        I.current || S();
      },
      onBlur: (T) => {
        var O;
        const z = T.relatedTarget;
        z && ((O = b.current) != null && O.contains(z)) || u();
      },
      onKeyDown: (T) => {
        T.key === "ArrowDown" && (T.preventDefault(), g.current = !0, S());
      },
      onClick: (T) => {
        T.preventDefault(), T.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": h,
      "aria-controls": h ? y : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: F,
      children: i ? /* @__PURE__ */ t(vn, { link: e }) : e.icon
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
            ref: f,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              I.current = !0, S();
            },
            onMouseLeave: () => {
              I.current = !1, u();
            },
            children: En(V, e.text, i)
          }
        ),
        /* @__PURE__ */ t(
          kr,
          {
            open: h && !!p,
            anchorEl: p,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (T) => T.zIndex.modal },
            children: /* @__PURE__ */ t(
              Lr,
              {
                ref: b,
                elevation: 0,
                onMouseEnter: v,
                onMouseLeave: u,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: c,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: Vo,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Nr,
                  {
                    id: y,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Vo
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
  function G(T, z, O) {
    return T.flatMap((B) => {
      const ee = ft(z, B);
      return ht(B) ? [
        /* @__PURE__ */ t(
          ci,
          {
            disableSticky: !0,
            title: B.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + O * 1.5,
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
          ee
        ),
        ...G(B.subitems, ee, O + 1)
      ] : [
        /* @__PURE__ */ E(
          Ye,
          {
            role: "menuitem",
            title: B.text,
            disabled: !B.path,
            selected: De(B, o),
            onClick: (le) => {
              le.preventDefault(), B.path && (r == null || r(B.path)), m(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + O * 1.5,
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
              B.icon ? /* @__PURE__ */ t(ve, { children: B.icon }) : null,
              /* @__PURE__ */ t(
                Le,
                {
                  primary: B.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          ee
        )
      ];
    });
  }
}, Os = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: c
}) => {
  const i = !!(e.path && o === e.path), { sx: a } = Sn(
    s,
    n,
    i,
    c
  );
  return En(
    /* @__PURE__ */ t(
      Se,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (p) => {
          p.preventDefault(), p.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: a,
        children: c ? /* @__PURE__ */ t(vn, { link: e }) : e.icon
      }
    ),
    e.text,
    c
  );
}, Ts = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), As = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), Yo = (e, o) => e.map((r, n) => /* @__PURE__ */ E(l.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(Ts, {}) : null
] }, n)), $s = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: c,
  railShowTitles: i = !1
}) => {
  const a = (f, h) => ht(f) ? /* @__PURE__ */ t(
    Cs,
    {
      link: f,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: h,
      surfaceBackgroundColor: c,
      railShowTitles: i
    }
  ) : /* @__PURE__ */ t(
    Os,
    {
      link: f,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: h,
      railShowTitles: i
    }
  ), p = i ? 1.25 : 1;
  return /* @__PURE__ */ E(
    Ae,
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
        Yo(e, (f) => a(f, !1)),
        o.length > 0 ? /* @__PURE__ */ E(Te, { children: [
          /* @__PURE__ */ t(As, {}),
          /* @__PURE__ */ t(_, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Ae, { gap: p, alignItems: "center", children: Yo(
            o,
            (f) => a(f, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Ms = (e) => e ? hn(e) : "USER", Ds = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), qo = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Ar = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, Yr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  di,
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
    children: Ds(e)
  }
), wn = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ E(Te, { children: [
  /* @__PURE__ */ t(Yr, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ E(
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
          ie,
          {
            variant: "body2",
            sx: { ...qo, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ie,
          {
            variant: "caption",
            sx: { ...qo, opacity: 0.8, color: "inherit" },
            children: Ms(o)
          }
        )
      ]
    }
  )
] }), Zo = {
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
}, Rn = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: s,
  showNotifications: c,
  notificationCount: i,
  onNotificationsClick: a,
  userName: p = "User",
  userRole: f,
  userAvatar: h,
  menuItems: m = [],
  showSettings: x,
  onSettingsClick: b,
  showThemeToggler: w,
  theme: I,
  onThemeToggle: g,
  onLogout: y
}) => {
  const v = (u) => () => {
    o(), u == null || u();
  };
  return /* @__PURE__ */ E(
    ui,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: Zo[r].anchor,
      transformOrigin: Zo[r].transform,
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
              wn,
              {
                name: p,
                role: f,
                avatar: h,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Ze, {}),
        c && /* @__PURE__ */ E(Ye, { onClick: v(a), children: [
          /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(fn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Le, { children: "Notifications" }),
          /* @__PURE__ */ t(Ar, { count: i })
        ] }),
        m.map((u) => /* @__PURE__ */ E(Ye, { onClick: v(u.onClick), children: [
          u.icon && /* @__PURE__ */ t(ve, { children: u.icon }),
          /* @__PURE__ */ t(Le, { inset: !u.icon, children: u.label }),
          /* @__PURE__ */ t(Ar, { count: u.badge })
        ] }, u.key)),
        x && /* @__PURE__ */ E(Ye, { onClick: v(b), children: [
          /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(li, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Le, { children: "Settings" })
        ] }),
        w && [
          /* @__PURE__ */ t(Ze, {}, "theme-divider"),
          /* @__PURE__ */ E(_, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              ie,
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
              fi,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: I,
                onChange: (u, S) => S && S !== I && (g == null ? void 0 : g()),
                disabled: !g,
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
                  /* @__PURE__ */ t(_o, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(_o, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Ze, {}),
        /* @__PURE__ */ E(
          Ye,
          {
            onClick: v(y),
            sx: {
              color: I === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ve, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(un, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Le, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, In = 64, ks = 2, Rt = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: s,
  activeColor: c,
  activeBackground: i,
  ariaLabel: a,
  haspopup: p,
  isPage: f = !1,
  testId: h
}) => /* @__PURE__ */ E(
  Qe,
  {
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": p,
    "aria-expanded": p ? n : void 0,
    "aria-current": f && n ? "page" : void 0,
    "data-testid": h,
    sx: {
      flex: "1 1 0",
      minWidth: 0,
      height: "100%",
      flexDirection: "column",
      gap: 0.25,
      color: n ? c : s,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: c,
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
            bgcolor: n ? i : "transparent",
            transition: "background-color 150ms"
          },
          children: o
        }
      ),
      /* @__PURE__ */ t(
        ie,
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
), Ls = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: c,
  assistantActive: i,
  showProfile: a,
  background: p,
  color: f,
  activeColor: h,
  activeBackground: m,
  pinnedLinks: x = [],
  activePath: b,
  onLinkClick: w,
  ...I
}) => {
  const g = x.filter((F) => F.path).slice(0, ks), [y, v] = l.useState(
    null
  ), { userName: u = "User", userAvatar: S, avatarColor: R } = I, C = { color: f, activeColor: h, activeBackground: m };
  return /* @__PURE__ */ E(
    Lr,
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
        height: `calc(${In}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: p,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Rt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(dn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...C
          }
        ),
        g.map((F) => /* @__PURE__ */ t(
          Rt,
          {
            label: F.text,
            icon: F.icon,
            onClick: () => w == null ? void 0 : w(F.path),
            active: Ve(F, b),
            isPage: !0,
            testId: `mobile-nav-link-${F.text}`,
            ...C
          },
          F.path
        )),
        s && /* @__PURE__ */ t(
          Rt,
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
                  borderColor: i ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(_t, { size: 18 })
              }
            ),
            onClick: c,
            active: i,
            testId: "mobile-nav-nexa",
            ...C
          }
        ),
        r && /* @__PURE__ */ t(
          Rt,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Fr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...C
          }
        ),
        a && /* @__PURE__ */ E(Te, { children: [
          /* @__PURE__ */ t(
            Rt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${u}`,
              icon: /* @__PURE__ */ t(
                Yr,
                {
                  name: u,
                  avatar: S,
                  color: R,
                  size: 26
                }
              ),
              onClick: (F) => v(F.currentTarget),
              active: !!y,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...C
            }
          ),
          /* @__PURE__ */ t(
            Rn,
            {
              anchorEl: y,
              onClose: () => v(null),
              placement: "above-end",
              width: 280,
              ...I
            }
          )
        ] })
      ]
    }
  );
}, Ns = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  pi,
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
    children: /* @__PURE__ */ E(
      Ae,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(_, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            ln,
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
), Fs = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: s,
  brandMenuOpen: c,
  background: i,
  color: a,
  brandColor: p = a,
  endContent: f
}) => /* @__PURE__ */ t(
  hi,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: e,
      background: i,
      color: a,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ E(mi, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        Se,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(dn, {})
        }
      ),
      /* @__PURE__ */ t(
        Jt,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: s,
          menuOpen: c,
          color: p,
          testId: "mobile-brand"
        }
      ),
      f ? /* @__PURE__ */ t(_, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: f }) : null
    ] })
  }
), qr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: c
}) => {
  const i = Xr(), a = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Ee,
    {
      title: a,
      placement: s,
      arrow: !0,
      ...i,
      children: /* @__PURE__ */ t(
        Se,
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
            pn,
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
              children: /* @__PURE__ */ t(fn, {})
            }
          )
        }
      )
    }
  );
}, _n = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Bs = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Jo = he($t), Qo = he(or), Ws = 20, en = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Ps = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const c = Ne().palette.mode === "dark", i = l.useRef(null), a = l.useRef(null), p = (m) => {
    var x;
    m !== e && (o == null || o()), (x = (m === "light" ? i : a).current) == null || x.focus();
  }, f = (m) => {
    if (!(m.key === "Tab" || m.key === "Escape"))
      switch (m.stopPropagation(), m.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          m.preventDefault(), p(e === "light" ? "dark" : "light");
          break;
        case "Home":
          m.preventDefault(), p("light");
          break;
        case "End":
          m.preventDefault(), p("dark");
          break;
      }
  }, h = (m, x, b, w) => {
    const I = e === m;
    return /* @__PURE__ */ t(
      Qe,
      {
        ref: w,
        role: "radio",
        "aria-checked": I,
        "aria-label": x,
        tabIndex: I ? 0 : -1,
        onClick: () => p(m),
        "data-testid": `theme-segment-${m}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: "999px",
          // White on dark: the accent is too dim against a dark surface
          color: I ? c ? "#ffffff" : r : "text.secondary",
          bgcolor: I ? n : "transparent",
          ...s && I ? Hr(c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": I ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: c ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${st(r, 0.6)}`
          },
          ..._n
        },
        children: /* @__PURE__ */ t(b, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ E(
    Ae,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: f,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        h("light", "Light", xi, i),
        h("dark", "Dark", gi, a)
      ]
    }
  );
}, zs = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: s,
  userName: c,
  userEmail: i,
  roleLabel: a,
  accentColor: p,
  tint: f,
  showThemeToggler: h,
  theme: m,
  onThemeToggle: x,
  onProfileClick: b,
  onLinkClick: w,
  menuItems: I = [],
  onLogout: g,
  glass: y = !1
}) => {
  const v = Ne(), u = v.palette.mode === "dark", S = l.useRef(null), R = Kr({
    enabled: y,
    isDark: u,
    selector: en,
    radius: 10
  }), [C, F] = l.useState(null);
  l.useEffect(() => {
    if (!C || typeof ResizeObserver > "u")
      return;
    const O = new ResizeObserver(() => {
      var B;
      (B = S.current) == null || B.updatePosition();
    });
    return O.observe(C), () => O.disconnect();
  }, [C]);
  const V = (O) => {
    r(), O == null || O();
  }, G = (O) => {
    r(), O.onClick ? O.onClick() : O.path && (w == null || w(O.path));
  }, T = { borderRadius: "8px", py: 1, gap: 0.5 }, z = /* @__PURE__ */ E(Ae, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    s(44),
    /* @__PURE__ */ E(_, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ie, { noWrap: !0, sx: { fontWeight: 600 }, children: c }),
      i ? /* @__PURE__ */ t(
        ie,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: i
        }
      ) : null,
      a ? /* @__PURE__ */ t(
        ie,
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
      b ? /* @__PURE__ */ t(
        ie,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: u ? "#ffffff" : p,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    Br,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: S,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...y ? {
        slots: { transition: Dr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: F,
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
            borderRadius: `${Ws}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${en}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Bs, width: n, minWidth: n },
          children: [
            y ? /* @__PURE__ */ t(
              gt,
              {
                isDark: u,
                solid: v.palette.background.paper,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Gr} ${Jo.duration}ms ${Jo.easing} both`,
                  [Ie]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ E(
              _,
              {
                ...R.containerProps,
                sx: y ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Ur} ${Qo.duration}ms ${Qo.easing} 70ms both`,
                  [Ie]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  R.lens,
                  b ? /* @__PURE__ */ t(
                    Qe,
                    {
                      onClick: () => V(b),
                      "data-testid": "account-menu-header",
                      sx: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        transition: "background-color 150ms ease",
                        "& [data-hint]": { display: "none" },
                        "&:hover, &.Mui-focusVisible": {
                          bgcolor: f,
                          "& [data-hint]": { display: "block" },
                          "& [data-role]": { display: "none" }
                        },
                        ..._n
                      },
                      children: z
                    }
                  ) : /* @__PURE__ */ t(_, { "data-testid": "account-menu-header", children: z }),
                  /* @__PURE__ */ t(Ze, {}),
                  h ? /* @__PURE__ */ E(
                    _,
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
                        /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(bi, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ie, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Ps,
                          {
                            glass: y,
                            mode: m,
                            onToggle: x,
                            accentColor: p,
                            tint: f
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ E(
                    Nr,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: h ? 0 : 0.5, pb: 0.5 },
                      children: [
                        I.map((O) => /* @__PURE__ */ E(
                          Ye,
                          {
                            onClick: () => G(O),
                            "data-testid": `menu-item-${O.key}`,
                            sx: T,
                            children: [
                              /* @__PURE__ */ t(ve, { children: O.icon }),
                              /* @__PURE__ */ t(ie, { sx: { flex: 1 }, children: O.label }),
                              /* @__PURE__ */ t(Ar, { count: O.badge })
                            ]
                          },
                          O.key
                        )),
                        g ? /* @__PURE__ */ t(Ze, { component: "li", sx: { my: 0.5 } }) : null,
                        g ? /* @__PURE__ */ E(
                          Ye,
                          {
                            onClick: () => V(g),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...T,
                              color: u ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(ve, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(un, { fontSize: "small" }) }),
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
}, Gs = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Us = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: s,
  title: c,
  onBrandClick: i,
  brandMenuOpen: a,
  brandColor: p,
  headerBackgroundColor: f,
  headerForegroundColor: h,
  activeAccentColor: m = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: b,
  foregroundColor: w,
  surfaceBackgroundColor: I,
  collapsed: g,
  expandedWidth: y,
  collapsedWidth: v,
  topContent: u,
  submenuMode: S,
  color: R,
  hoverColor: C,
  avatarColor: F,
  showProfile: V = !0,
  userName: G = "User",
  userEmail: T,
  userRole: z,
  userAvatar: O,
  showNotifications: B = !0,
  notificationCount: ee = 0,
  onNotificationsClick: le,
  whatsNewCount: W = 0,
  onProfileClick: P,
  menuItems: X,
  onLogout: q,
  theme: U = "light",
  showThemeToggler: ue = !0,
  onThemeToggle: $
}) => {
  const M = Ne(), j = M.palette.mode === "dark", D = I ?? (j ? M.palette.background.paper : "#ffffff"), K = R ?? w ?? (j ? M.palette.text.primary : m), se = C ?? x ?? Qt(m), Ge = F ?? m, fe = l.useRef(null), [_e, me] = l.useState(!1), ge = z ? hn(z) : void 0, de = (at) => /* @__PURE__ */ t(
    Yr,
    {
      name: G,
      avatar: O,
      color: Ge,
      size: at
    }
  ), oe = ee + W, pe = B ? /* @__PURE__ */ t(
    qr,
    {
      count: oe,
      onClick: le,
      color: K,
      hoverColor: se,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, xe = V ? /* @__PURE__ */ E(
    Qe,
    {
      ref: fe,
      onClick: () => me(!0),
      "aria-haspopup": "menu",
      "aria-expanded": _e,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: g ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: _e ? se : "transparent",
        "&:hover": { bgcolor: se },
        ...Gs
      },
      children: [
        g && B ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            pn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !oe,
              children: de(36)
            }
          )
        ) : de(g ? 36 : 40),
        g ? null : /* @__PURE__ */ E(_, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ie,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: K, lineHeight: 1.3 },
              children: G
            }
          ),
          ge ? /* @__PURE__ */ t(
            ie,
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
              children: ge
            }
          ) : null
        ] })
      ]
    }
  ) : null, Ce = !!pe && (!g || !xe);
  return /* @__PURE__ */ E(
    _,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": g ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          Cr,
          {
            mainLinks: e,
            secondaryLinks: o,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: s,
            title: c,
            onBrandClick: i,
            brandMenuOpen: a,
            brandColor: p,
            headerBackgroundColor: f,
            headerForegroundColor: h,
            activeAccentColor: m,
            groupAccentColor: x,
            activeForegroundColor: b,
            foregroundColor: w,
            surfaceBackgroundColor: D,
            collapsed: g,
            expandedWidth: y,
            collapsedWidth: v,
            topContent: u,
            footer: xe || Ce ? /* @__PURE__ */ E(
              Ae,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  xe,
                  Ce ? pe : null
                ]
              }
            ) : void 0,
            submenuMode: S
          }
        ),
        V ? /* @__PURE__ */ t(
          zs,
          {
            open: _e,
            anchorEl: fe.current,
            onClose: () => me(!1),
            width: Math.max(y - 16, 240),
            renderAvatar: de,
            userName: G,
            userEmail: T,
            roleLabel: ge,
            accentColor: m,
            tint: se,
            showThemeToggler: ue,
            theme: U,
            onThemeToggle: $,
            onProfileClick: P,
            onLinkClick: n,
            menuItems: X,
            onLogout: q,
            glass: S === "flyout"
          }
        ) : null
      ]
    }
  );
}, tn = he($t), rn = he(or), Hs = 20, on = 260, Xs = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Ks = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: c,
  glass: i = !1
}) => {
  const a = Ne(), p = a.palette.mode === "dark", f = !!e, h = Kr({
    enabled: i,
    isDark: p,
    selector: ".MuiMenuItem-root",
    radius: 12
  }), m = /* @__PURE__ */ t(
    Nr,
    {
      autoFocusItem: f,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((x) => {
        const b = x.key === n, w = x.accentColor ?? c;
        return /* @__PURE__ */ E(
          Ye,
          {
            selected: b,
            onClick: () => s(x),
            "data-testid": `platform-item-${x.key}`,
            sx: {
              borderRadius: i ? "12px" : "8px",
              py: 1,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...i && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(ve, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                _,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: w,
                    boxShadow: i ? `0 0 0 3px ${p ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Le,
                {
                  primary: x.name,
                  secondary: x.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              b ? /* @__PURE__ */ t(
                yi,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: w }
                }
              ) : null
            ]
          },
          x.key
        );
      })
    }
  );
  return /* @__PURE__ */ t(
    Br,
    {
      open: f,
      anchorEl: e,
      onClose: o,
      onClick: (x) => x.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...i ? {
        slots: { transition: Dr },
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
          "data-glass": i ? "true" : void 0,
          sx: i ? {
            position: "relative",
            minWidth: on,
            borderRadius: `${Hs}px`
          } : { ...Xs, minWidth: on },
          children: i ? /* @__PURE__ */ E(Te, { children: [
            /* @__PURE__ */ t(
              gt,
              {
                isDark: p,
                solid: a.palette.background.paper,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Gr} ${tn.duration}ms ${tn.easing} both`,
                  [Ie]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ E(
              _,
              {
                ...h.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Ur} ${rn.duration}ms ${rn.easing} 70ms both`,
                  [Ie]: { animation: "none" }
                },
                children: [
                  h.lens,
                  m
                ]
              }
            )
          ] }) : m
        }
      )
    }
  );
}, js = ({ children: e, anchorEl: o, ...r }) => {
  const n = l.useRef(null), s = !!(o && n.current && o.contains(n.current));
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
          Ks,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, Vs = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...c
}) => {
  var u;
  const {
    avatarColor: i,
    showNotifications: a,
    notificationCount: p,
    onNotificationsClick: f,
    userName: h = "User",
    userRole: m,
    userAvatar: x
  } = c, b = l.useRef(null), [w, I] = l.useState(
    null
  ), g = !!w, y = l.useRef(e);
  if (l.useEffect(() => {
    e && !y.current && I(null), y.current = e;
  }, [e]), !a && !n)
    return null;
  const v = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ E(Te, { children: [
    /* @__PURE__ */ E(
      Ae,
      {
        ref: b,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Ee,
            {
              title: e ? h : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                Qe,
                {
                  onClick: () => I(b.current),
                  "aria-label": `Account menu for ${h}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": g,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: g ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...v
                  },
                  children: /* @__PURE__ */ t(
                    wn,
                    {
                      name: h,
                      role: m,
                      avatar: x,
                      avatarColor: i,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          a && /* @__PURE__ */ t(
            qr,
            {
              count: p + s,
              onClick: f,
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
      Rn,
      {
        anchorEl: w,
        onClose: () => I(null),
        placement: e ? "beside" : "above",
        width: e || (u = b.current) == null ? void 0 : u.clientWidth,
        ...c
      }
    )
  ] });
}, Ys = 120, qs = 300, nn = he($t), sn = he(or), Zs = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Js = 'input, textarea, [contenteditable="true"]', $r = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Js)) == null || o.focus();
}, Qs = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: s,
  color: c,
  hoverColor: i
}) => {
  const a = Xr(), p = l.useContext(nr), f = l.useRef(null), [h, m] = l.useState(null);
  return l.useEffect(() => {
    o === "full" && n && ($r(f.current), s == null || s());
  }, [o, n, s]), o === "full" ? /* @__PURE__ */ t(
    _,
    {
      ref: f,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && p ? /* @__PURE__ */ t(
    ea,
    {
      search: e,
      color: c,
      railTooltip: a
    }
  ) : /* @__PURE__ */ E(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Ee, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          Se,
          {
            "aria-label": "Search",
            onClick: (x) => o === "expand" ? r == null ? void 0 : r() : m(x.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: c,
              borderRadius: "8px",
              "&:hover": { bgcolor: i }
            },
            children: /* @__PURE__ */ t(Fr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Br,
          {
            open: !!h,
            anchorEl: h,
            onClose: () => m(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (x) => $r(x)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, ea = ({ search: e, color: o, railTooltip: r }) => {
  const n = Ne().palette.mode === "dark", s = Ai(n, pt(o, n ? 0.3 : 0.35)), c = l.useRef(null), i = l.useRef(null), [a, p] = l.useState(!1), f = l.useRef(!1), h = l.useRef(void 0), m = l.useRef(void 0), x = () => {
    clearTimeout(h.current), clearTimeout(m.current);
  }, b = l.useCallback(() => {
    x(), f.current = !1, p(!1);
  }, []), w = () => {
    clearTimeout(m.current), a || (clearTimeout(h.current), h.current = setTimeout(
      () => p(!0),
      Ys
    ));
  }, I = () => {
    clearTimeout(h.current), clearTimeout(m.current), m.current = setTimeout(() => {
      !f.current && !Zs(i.current) && p(!1);
    }, qs);
  };
  return l.useEffect(() => x, []), l.useEffect(() => {
    if (!a)
      return;
    const g = setTimeout(() => $r(i.current)), y = (u) => {
      var R, C;
      const S = u.target;
      !((R = i.current) != null && R.contains(S)) && !((C = c.current) != null && C.contains(S)) && b();
    }, v = (u) => {
      var S;
      u.key === "Escape" && (b(), (S = c.current) == null || S.focus());
    };
    return document.addEventListener("pointerdown", y), document.addEventListener("keydown", v), () => {
      clearTimeout(g), document.removeEventListener("pointerdown", y), document.removeEventListener("keydown", v);
    };
  }, [a, b]), /* @__PURE__ */ E(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Ee,
          {
            title: a ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              Se,
              {
                ref: c,
                "aria-label": "Search",
                "aria-expanded": a,
                onMouseEnter: w,
                onMouseLeave: I,
                onClick: () => {
                  x(), f.current = !0, p(!0);
                },
                sx: { width: 44, height: 44, color: o, borderRadius: "12px" },
                children: /* @__PURE__ */ t(Fr, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          kr,
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
              _,
              {
                ref: i,
                "data-testid": "sidebar-search-card",
                onMouseEnter: w,
                onMouseLeave: I,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: "18px"
                },
                children: [
                  /* @__PURE__ */ t(
                    gt,
                    {
                      isDark: n,
                      solid: n ? "#1e2430" : "#ffffff",
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${Gr} ${nn.duration}ms ${nn.easing} both`,
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
                        "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
                          ...s.rest,
                          "&:hover": s.hover,
                          "&.Mui-focused": s.focus
                        },
                        "& .MuiOutlinedInput-notchedOutline.MuiOutlinedInput-notchedOutline.MuiOutlinedInput-notchedOutline": { border: "none" },
                        "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
                          ...s.rest,
                          border: "none",
                          "&:hover": {
                            ...s.hover,
                            border: "none"
                          },
                          "&.Mui-focusVisible": s.focus
                        },
                        animation: `${Ur} ${sn.duration}ms ${sn.easing} 60ms both`,
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
}, ta = 100, ra = () => {
  const e = l.useRef(null), o = l.useRef(void 0), r = l.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = l.useState(!1), [c, i] = l.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return l.useEffect(() => {
    const f = (m) => {
      r.current.has(m) || (a(), s(!1));
    }, h = () => {
      a(), s(!1);
    };
    return document.addEventListener("mouseover", f), document.documentElement.addEventListener("mouseleave", h), () => {
      a(), document.removeEventListener("mouseover", f), document.documentElement.removeEventListener(
        "mouseleave",
        h
      );
    };
  }, []), l.useEffect(() => {
    if (!c)
      return;
    const f = (h) => {
      var m;
      (m = e.current) != null && m.contains(h.target) || i(!1);
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [c]), {
    expanded: n || c,
    pin: () => i(!0),
    rootProps: {
      ref: e,
      onMouseOver: (f) => {
        r.current.add(f.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, s(!0);
        }, ta));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (f) => {
        const h = f.relatedTarget;
        h && !f.currentTarget.contains(h) && i(!1);
      },
      onKeyDown: (f) => {
        f.key === "Escape" && i(!1);
      }
    }
  };
}, oa = 100, an = 80, Er = 56, na = 300, wr = 288, It = 72, Rr = 68, Yt = 8, ia = 24, sa = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", aa = 68, ca = { xs: 2, md: 5 }, la = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), da = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, lc = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: c = !1,
  sidebarVariant: i = "rail",
  sidebarSubmenu: a = "expand",
  mobileNavigation: p = "bottom-bar",
  mobileBottomBarLinks: f,
  logo: h,
  onBrandClick: m,
  searchComponent: x,
  brandColor: b,
  contentPadding: w = ca,
  userMenuItems: I,
  sidebarBackgroundColor: g,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: v,
  activeSidebarForegroundColor: u,
  enableRefreshToken: S = !1,
  activePath: R,
  onLinkClick: C,
  showProfile: F = !0,
  userName: V,
  userRole: G,
  userAvatar: T,
  userEmail: z,
  onLogout: O,
  showSettings: B = !0,
  onSettingsClick: ee,
  onProfileClick: le,
  showNotifications: W = !0,
  notificationCount: P = 0,
  NotificationSidebarContent: X,
  whatsNewCount: q = 0,
  onNotificationsClick: U,
  platforms: ue,
  currentPlatformKey: $,
  onPlatformSelect: M,
  onVerify: j,
  alertProps: D,
  style: K,
  sidebarStyles: se,
  contentStyles: Ge,
  accentColor: fe,
  sidebarAccentColor: _e,
  sidebarForegroundColor: me,
  contentBackgroundColor: ge,
  theme: de = "light",
  showThemeToggler: oe = !1,
  onThemeToggle: pe,
  GlobalChatSidebar: xe,
  useChatSidebar: Ce,
  chatPanelMode: Dt = "docked",
  chatPanelPosition: at = "right",
  chatPanelWidth: kt = 420,
  onChatClose: ir,
  showAssistant: et = !1,
  assistantPlacement: xt = "sidebar",
  assistantShortcut: Lt = "j",
  onAssistantClick: Ue,
  assistantActive: ct = !1,
  assistantBusy: Nt = !1,
  customNavbar: Ft,
  customNavbarProps: sr,
  redirectToLogin: He,
  apiBaseUrl: d
}) => {
  const L = Zn(), N = Jn(L.breakpoints.down("md")), k = Eo(
    () => cn(xs(de)),
    [de]
  ), H = de === "dark", Z = fe ?? "#01584f", te = _e ?? Z, Q = ge ?? (H ? "hsl(220, 35%, 9%)" : "#f2f9fc"), ne = i === "collapsible", tt = i === "panel", Cn = tt && s && !N, Xe = i === "rail-labeled", On = ne || Xe, rt = g ?? (H ? "hsl(220, 30%, 7%)" : "#ffffff"), ar = y ?? rt, Fe = me ?? (H ? "#ffffff" : te), bt = v ?? Qt(Fe), yt = y ? Ir(ar) : Fe, Zr = (A) => /* @__PURE__ */ t(
    ae,
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
  ), Bt = b ?? yt, [Jr, cr] = nt(
    null
  ), lr = ((ue == null ? void 0 : ue.length) ?? 0) > 1, Tn = wo(() => cr(null), []), An = (A) => {
    cr(null), M ? M(A) : A.key !== $ && A.url && window.location.assign(A.url);
  }, Qr = (A) => lr ? /* @__PURE__ */ t(
    js,
    {
      anchorEl: Jr,
      onClose: Tn,
      platforms: ue,
      currentKey: $,
      onSelect: An,
      accentColor: Z,
      glass: a === "flyout" && (ne || tt) && !N,
      children: A
    }
  ) : A, Wt = lr ? (A) => cr(A.currentTarget) : m, Pt = lr ? !!Jr : void 0, dr = Qr(
    h ?? Zr(Bt)
  ), $n = Qr(
    h ?? Zr(b ?? Fe)
  ), ur = ra(), $e = a === "flyout" && (ne || tt), Me = $e || !ur.expanded, eo = $e ? "popover" : "expand", to = $e ? Rr : It, ro = $e ? "transparent" : rt, oo = $e && !y ? "transparent" : ar, [Mn, no] = nt(!1), Dn = wo(() => no(!1), []);
  let be = 0;
  s && !N && (Xe ? be = an : $e ? be = Rr + 2 * Yt : ne || tt ? be = It : be = oa);
  const [io, ot] = nt(!1), [so, fr] = nt(!1), ye = N && p === "bottom-bar", ao = `calc(${In}px + env(safe-area-inset-bottom, 0px))`, [pr, co] = nt({ open: !1, tab: "notifications" }), lo = () => co((A) => ({ ...A, open: !1 })), kn = W && !!X, [Ln, Nn] = nt(!0), [Fn, Bn] = nt(!1), hr = Ce == null ? void 0 : Ce(), uo = (hr == null ? void 0 : hr.isOpen) ?? !1, fo = Dt === "floating" ? "floating" : "docked", Wn = fo === "docked" && uo && xe && !N ? kt : 0, zt = yr(j), po = yr(!1), ho = Eo(
    () => gs(d),
    [d]
  );
  Ht(() => {
    zt.current = j;
  }, [j]);
  const mr = yr(Ue);
  mr.current = Ue;
  const St = et && Lt ? Lt.toLowerCase() : null;
  Ht(() => {
    if (!St)
      return;
    const A = (re) => {
      (re.metaKey || re.ctrlKey) && !re.altKey && !re.shiftKey && re.key.toLowerCase() === St && mr.current && (re.preventDefault(), mr.current());
    };
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [St]);
  const mo = (A) => {
    const re = O(A);
    re instanceof Promise && re.catch((Ke) => {
      console.error("Error in logout handler:", Ke);
    });
  };
  if (Ht(() => {
    (() => {
      var re;
      try {
        const { isAuthenticated: Ke } = hs();
        if (!Ke) {
          console.log("No session found, redirecting to login"), At(), He();
          return;
        }
        if (!po.current) {
          const { user: Et, error: br } = ms();
          if (Et && !br) {
            const jn = {
              name: Et.name || "",
              email: Et.email || "",
              profilePicture: Et.profilePicture || "",
              role: Et.role || ""
            };
            po.current = !0, (re = zt.current) == null || re.call(zt, jn);
          } else
            br && console.error("Error getting user data:", br);
        }
        Bn(!0);
      } catch (Ke) {
        console.error("Error checking session:", Ke), At(), He();
      } finally {
        Nn(!1);
      }
    })();
  }, [He]), Ht(() => {
    S && bs(ho, He);
  }, [S, ho]), Ln)
    return /* @__PURE__ */ t(vo, { theme: k, children: /* @__PURE__ */ E(
      ae,
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
            Qn,
            {
              size: 60,
              thickness: 4,
              sx: { color: Z }
            }
          ),
          /* @__PURE__ */ t(ae, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!Fn)
    return null;
  const vt = x ?? (Ft ? /* @__PURE__ */ t(Ft, { ...sr }) : null), Pn = (A) => {
    ot(!1), fr(!1), co({ open: !0, tab: A });
  }, gr = X && (() => Pn("notifications")), zn = P + q, go = {
    avatarColor: te,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: I == null ? void 0 : I.map(
      (A) => A.onClick || !A.path ? A : { ...A, onClick: () => C == null ? void 0 : C(A.path) }
    ),
    showNotifications: W,
    notificationCount: P,
    whatsNewCount: q,
    onNotificationsClick: gr,
    showProfile: F,
    userName: V,
    userRole: G,
    userAvatar: T,
    showSettings: B,
    onSettingsClick: ee,
    showThemeToggler: oe,
    theme: de,
    onThemeToggle: pe,
    onLogout: mo
  }, xr = (A) => /* @__PURE__ */ t(
    Vs,
    {
      ...go,
      compact: A,
      color: Fe,
      hoverColor: bt
    }
  ), xo = St ? [la() ? "⌘" : "Ctrl", St.toUpperCase()] : void 0, Gn = (A) => et && xt === "sidebar" ? /* @__PURE__ */ t(
    jo,
    {
      variant: A ? "sidebar-icon" : "sidebar",
      onClick: Ue,
      active: ct,
      busy: Nt,
      shortcutKeys: xo,
      accentColor: Fe
    }
  ) : null, Un = (A) => vt ? /* @__PURE__ */ t(
    Qs,
    {
      search: vt,
      mode: A,
      onExpand: () => {
        ur.pin(), no(!0);
      },
      autoFocus: Mn,
      onAutoFocused: Dn,
      color: Fe,
      hoverColor: bt
    }
  ) : null, Gt = (A) => {
    const re = Gn(A !== "full"), Ke = Un(A);
    return re || Ke ? /* @__PURE__ */ E(
      ri,
      {
        spacing: 1.5,
        sx: { alignItems: A === "full" ? "stretch" : "center" },
        children: [
          re,
          Ke
        ]
      }
    ) : void 0;
  }, bo = () => /* @__PURE__ */ t(
    Cr,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: R,
      onLinkClick: C,
      showHeaderBar: ne,
      logo: dr,
      title: n,
      onBrandClick: Wt,
      brandMenuOpen: Pt,
      brandColor: Bt,
      headerBackgroundColor: ne ? oo : void 0,
      headerForegroundColor: ne ? yt : void 0,
      activeAccentColor: te,
      groupAccentColor: v,
      activeForegroundColor: u,
      foregroundColor: me,
      surfaceBackgroundColor: ro,
      collapsed: Xe || Me,
      showLabels: Xe,
      expandedWidth: wr,
      collapsedWidth: Xe ? an : to,
      topContent: Gt(
        Xe ? "popover" : Me ? eo : "full"
      ),
      footer: xr(Xe || Me),
      submenuMode: $e ? "flyout" : "inline"
    }
  ), yo = (A) => $e ? Hn(A) : Xn(A), Hn = (A) => /* @__PURE__ */ t(
    ae,
    {
      component: "aside",
      sx: {
        width: be,
        minWidth: be,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (re) => re.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: Q
      },
      children: /* @__PURE__ */ E(
        ae,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: Yt,
            bottom: Yt,
            left: Yt,
            width: Rr,
            borderRadius: `${ia}px`,
            display: "flex",
            flexDirection: "column",
            ...se
          },
          children: [
            /* @__PURE__ */ t(
              gt,
              {
                isDark: H,
                solid: rt,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              ae,
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
  ), Xn = (A) => /* @__PURE__ */ t(
    ae,
    {
      component: "aside",
      sx: {
        width: It,
        minWidth: It,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (re) => re.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        ae,
        {
          ...$e ? {} : ur.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Me ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Me ? It : wr,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: rt,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Me ? "none" : `4px 0 24px rgba(0, 0, 0, ${H ? 0.5 : 0.12})`,
            transition: sa,
            ...se
          },
          children: A
        }
      )
    }
  ), Kn = da(
    w,
    L
  );
  return /* @__PURE__ */ t(vo, { theme: k, children: /* @__PURE__ */ E(
    ae,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...K
      },
      children: [
        /* @__PURE__ */ t(ei, {}),
        N && /* @__PURE__ */ t(
          Fs,
          {
            height: Er,
            onMenuClick: s && !ye ? () => ot(!0) : void 0,
            appName: n,
            logo: dr,
            onBrandClick: Wt,
            brandMenuOpen: Pt,
            background: ar,
            color: yt,
            brandColor: Bt,
            endContent: W ? /* @__PURE__ */ t(
              qr,
              {
                count: zn,
                onClick: gr,
                color: yt,
                hoverColor: bt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !N && Xe && /* @__PURE__ */ t(
          ae,
          {
            component: "aside",
            sx: {
              width: be,
              minWidth: be,
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
              ...se
            },
            children: bo()
          }
        ),
        s && !N && ne && yo(
          /* @__PURE__ */ E(Te, { children: [
            bo(),
            (D == null ? void 0 : D.show) && !Me && /* @__PURE__ */ t(Vt, { ...D })
          ] })
        ),
        Cn && yo(
          /* @__PURE__ */ E(Te, { children: [
            /* @__PURE__ */ t(
              Us,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: R,
                onLinkClick: C,
                logo: dr,
                title: n,
                onBrandClick: Wt,
                brandMenuOpen: Pt,
                brandColor: Bt,
                headerBackgroundColor: oo,
                headerForegroundColor: yt,
                activeAccentColor: te,
                groupAccentColor: v,
                activeForegroundColor: u,
                foregroundColor: me,
                surfaceBackgroundColor: ro,
                collapsed: Me,
                expandedWidth: wr,
                collapsedWidth: to,
                topContent: Gt(
                  Me ? eo : "full"
                ),
                submenuMode: $e ? "flyout" : "inline",
                color: Fe,
                hoverColor: bt,
                avatarColor: te,
                showProfile: F,
                userName: V,
                userEmail: z,
                userRole: G,
                userAvatar: T,
                showNotifications: W,
                notificationCount: P,
                onNotificationsClick: kn ? gr : U,
                whatsNewCount: q,
                onProfileClick: le,
                menuItems: I,
                onLogout: mo,
                theme: de,
                showThemeToggler: oe,
                onThemeToggle: pe
              }
            ),
            (D == null ? void 0 : D.show) && !Me && /* @__PURE__ */ t(Vt, { ...D })
          ] })
        ),
        s && !N && !On && !tt && /* @__PURE__ */ t(
          Ro,
          {
            variant: "permanent",
            sx: {
              width: be,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: be,
                boxSizing: "border-box",
                bgcolor: Q,
                borderRight: "none"
              },
              ...se
            },
            children: /* @__PURE__ */ E(
              ae,
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
                    ae,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        Jt,
                        {
                          logo: $n,
                          appName: n,
                          onClick: Wt,
                          menuOpen: Pt,
                          color: b ?? Fe,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Gt("popover"),
                  /* @__PURE__ */ E(
                    ae,
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
                          $s,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: R,
                            onLinkClick: C,
                            accentColor: te,
                            surfaceBackgroundColor: Q,
                            railShowTitles: c
                          }
                        ),
                        (D == null ? void 0 : D.show) && /* @__PURE__ */ t(Vt, { ...D })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(ae, { sx: { py: 1.5 }, children: xr(!0) })
                ]
              }
            )
          }
        ),
        s && N && /* @__PURE__ */ E(
          ti,
          {
            anchor: ye ? "bottom" : "left",
            open: io,
            onOpen: () => ot(!0),
            onClose: () => ot(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (A) => A.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: rt,
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
                ae,
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
                Cr,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: R,
                  onLinkClick: (A) => {
                    C == null || C(A), ot(!1);
                  },
                  onLinkAction: () => ot(!1),
                  collapsed: !1,
                  expandedWidth: ye ? "100%" : na,
                  activeAccentColor: te,
                  groupAccentColor: v,
                  activeForegroundColor: u,
                  foregroundColor: me,
                  surfaceBackgroundColor: rt,
                  topInsetPx: ye ? 8 : 0,
                  topContent: ye ? void 0 : Gt("full"),
                  footer: ye ? void 0 : xr(!1)
                }
              ),
              (D == null ? void 0 : D.show) && /* @__PURE__ */ t(Vt, { ...D })
            ]
          }
        ),
        ye && vt && /* @__PURE__ */ t(
          Ns,
          {
            open: so,
            onClose: () => fr(!1),
            search: vt
          }
        ),
        ye && /* @__PURE__ */ t(
          Ls,
          {
            ...go,
            pinnedLinks: f,
            activePath: R,
            onLinkClick: C,
            onMenuClick: s ? () => ot(!0) : void 0,
            menuOpen: io,
            onSearchClick: vt ? () => fr(!0) : void 0,
            searchOpen: so,
            showAssistant: et,
            onAssistantClick: Ue,
            assistantActive: ct,
            showProfile: F,
            background: rt,
            color: Fe,
            activeColor: te,
            activeBackground: bt
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Kn,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": N ? `${Er}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: be ? `calc(100% - ${be}px)` : "100%",
              mt: N ? `${Er}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ye && {
                pb: `calc(var(--lumora-content-padding) + ${ao})`
              },
              backgroundColor: Q,
              ...Ge
            },
            children: e
          }
        ),
        xe && /* @__PURE__ */ t(
          ws,
          {
            open: uo,
            variant: fo,
            position: at,
            width: kt,
            sidebarWidthPx: be,
            bottomOffsetPx: et && xt === "floating" ? aa : 0,
            fullScreen: N,
            fullScreenBottom: ye ? ao : "0px",
            onClose: ir,
            children: /* @__PURE__ */ t(xe, {})
          }
        ),
        et && xt === "floating" && !ye && /* @__PURE__ */ t(
          jo,
          {
            variant: "floating",
            rightOffsetPx: Wn,
            shortcutKeys: xo,
            onClick: Ue,
            active: ct,
            busy: Nt
          }
        ),
        W && X && /* @__PURE__ */ t(
          Ro,
          {
            anchor: "right",
            open: pr.open,
            onClose: lo,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              X,
              {
                onClose: lo,
                initialTab: pr.tab
              },
              pr.tab
            )
          }
        )
      ]
    }
  ) });
};
export {
  J as AUTH_ERROR_CODES,
  Y as AuthError,
  Cr as CollapsibleSidebar,
  ac as FullBleedSection,
  fs as Kbd,
  lc as LumoraWrapper,
  At as clearAuthTokens,
  lc as default,
  cc as getAuthErrorMessage,
  Tt as getAuthTokens,
  ms as getCurrentUser,
  xs as getDesignTokens,
  hs as isAuthenticated,
  Tr as logAuthError,
  bn as storeAuthTokens
};
