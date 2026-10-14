import { jsx as t, jsxs as R, Fragment as Te } from "react/jsx-runtime";
import Jn from "@mui/icons-material/KeyboardArrowDownRounded";
import Qn from "@mui/icons-material/KeyboardArrowUpRounded";
import es from "@mui/icons-material/ChevronRightRounded";
import C from "@mui/material/Box";
import Eo from "@mui/material/Collapse";
import qe from "@mui/material/Divider";
import ve from "@mui/material/IconButton";
import Ut from "@mui/material/ListItemButton";
import Se from "@mui/material/ListItemIcon";
import Le from "@mui/material/ListItemText";
import Ae from "@mui/material/Stack";
import Re from "@mui/material/Tooltip";
import ie from "@mui/material/Typography";
import { useTheme as Ne, createTheme as un, alpha as st, ThemeProvider as wo } from "@mui/material/styles";
import * as l from "react";
import { useMemo as Io, useState as ot, useCallback as _o, useRef as vr, useEffect as Ht } from "react";
import Je from "@mui/material/ButtonBase";
import { keyframes as kr } from "@emotion/react";
import Lr from "@mui/material/Fade";
import Nr from "@mui/material/Popper";
import { useTheme as ts, useMediaQuery as rs, Box as ae, CircularProgress as os, CssBaseline as ns, Drawer as Co, SwipeableDrawer as ss, Stack as is } from "@mui/material";
import Oo from "axios";
import as from "@mui/material/Card";
import cs from "@mui/material/CardContent";
import fn from "@mui/material/Button";
import ls from "@mui/icons-material/AutoAwesomeRounded";
import ds from "@mui/material/Grow";
import Fr from "@mui/material/Paper";
import us from "@mui/material/Slide";
import fs from "@mui/material/ListSubheader";
import Ve from "@mui/material/MenuItem";
import Br from "@mui/material/MenuList";
import pn from "@mui/icons-material/MenuRounded";
import Wr from "@mui/icons-material/SearchRounded";
import hn from "@mui/icons-material/LogoutRounded";
import mn from "@mui/icons-material/NotificationsNoneOutlined";
import ps from "@mui/icons-material/SettingsOutlined";
import hs from "@mui/material/Avatar";
import ms from "@mui/material/Menu";
import To from "@mui/material/ToggleButton";
import gs from "@mui/material/ToggleButtonGroup";
import xs from "@mui/material/Drawer";
import bs from "@mui/material/AppBar";
import ys from "@mui/material/Toolbar";
import gn from "@mui/material/Badge";
import vs from "@mui/icons-material/DarkModeOutlined";
import Ss from "@mui/icons-material/LightModeOutlined";
import Rs from "@mui/icons-material/SettingsBrightnessOutlined";
import Pr from "@mui/material/Popover";
import Es from "@mui/icons-material/CheckRounded";
const Jt = ({
  logo: e,
  title: o,
  appName: r,
  onClick: n,
  color: i,
  testId: a,
  menuOpen: s
}) => {
  const c = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: i,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, d = /* @__PURE__ */ R(Te, { children: [
    o ? /* @__PURE__ */ t(
      ie,
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
    Je,
    {
      onClick: n,
      "aria-label": s === void 0 ? `${r} home` : `${r}: switch platform`,
      ...s !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": s
      },
      "data-testid": a,
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
      children: d
    }
  ) : /* @__PURE__ */ t(Ae, { direction: "row", "data-testid": a, sx: c, children: d });
}, At = { stiffness: 320, damping: 24 }, $t = { stiffness: 520, damping: 20 }, or = { stiffness: 260, damping: 28 }, ws = "cubic-bezier(0.32, 1.28, 0.52, 1)", Is = 420, Ao = 60, _s = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), $o = /* @__PURE__ */ new Map(), pe = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = $o.get(n);
  if (i)
    return i;
  if (!_s)
    return { easing: ws, duration: Is };
  const a = 1 / 600;
  let s = 0, c = 0, d = 0, f = 1 / Ao;
  const b = [0];
  for (; d < 3; ) {
    const p = (-e * (s - 1) - o * c) / r;
    if (c += p * a, s += c * a, d += a, d >= f && (b.push(s), f += 1 / Ao, Math.abs(s - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  b[b.length - 1] = 1;
  const x = {
    easing: `linear(${b.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(d * 1e3)
  };
  return $o.set(n, x), x;
}, Ze = (e) => !!(e && typeof e.animate == "function"), ze = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Xt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, Cs = (e, o = 1.14) => {
  if (!Ze(e) || ze())
    return;
  const r = pe($t);
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
}, ut = (e, o) => e ? `${e}/${o.text}` : o.text, je = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => je(n, o))) ?? !1 : !1;
}, De = (e, o) => !!(o && e.path === o), zr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return pt(r) ? zr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), _r = (e) => {
  const o = nr(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((s) => {
    const c = s / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, Qt = (e) => {
  const o = nr(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, ft = (e, o) => {
  const r = nr(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, nr = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, xn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Os = 28, Ts = 180, Mo = (e) => ({
  backdropFilter: `blur(${e * Os}px) saturate(${100 + e * (Ts - 100)}%)`
}), As = kr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ie = "@media (prefers-reduced-motion: reduce)", bn = (e, o, r) => `radial-gradient(${e}px circle at var(--lx, -9999px) var(--ly, -9999px), rgba(${r}, calc(${o} * var(--li, 0))) 0%, rgba(${r}, 0) 70%)`, Gr = "9, 193, 174", Cr = l.createContext(
  void 0
), Mt = () => {
  const e = l.useContext(Cr), o = e ? nr(e) : null;
  return o ? o.join(", ") : Gr;
}, er = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, yn = (e) => e ? er.dark : er.light, Ur = (e, o) => e ? "255, 255, 255" : o, $s = (e, o) => ({
  content: '""',
  position: "absolute",
  inset: 0,
  borderRadius: "inherit",
  padding: "1.25px",
  pointerEvents: "none",
  // The rim glints where the pointer is nearest (see GlassLayer's light)
  background: `${bn(140, yn(e).rim, Ur(e, o))}, ${e ? "linear-gradient(140deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 22%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 78%, rgba(255, 255, 255, 0.28) 100%)" : "linear-gradient(140deg, #ffffff 0%, rgba(255, 255, 255, 0.55) 22%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.4) 78%, rgba(255, 255, 255, 0.95) 100%)"}`,
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  maskComposite: "exclude"
}), Ms = (e, o, r = Gr) => ({
  position: "relative",
  bgcolor: e ? "rgba(30, 36, 48, 0.5)" : "rgba(255, 255, 255, 0.55)",
  backgroundImage: e ? "linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 38%, rgba(0, 0, 0, 0.1) 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 40%, rgba(15, 23, 42, 0.03) 100%)",
  ...Mo(1),
  WebkitBackdropFilter: Mo(1).backdropFilter,
  boxShadow: e ? "0 24px 60px -12px rgba(0, 0, 0, 0.65), 0 0 0 0.5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 0 24px rgba(255, 255, 255, 0.035)" : "0 24px 60px -12px rgba(15, 23, 42, 0.3), 0 2px 8px rgba(15, 23, 42, 0.08), 0 0 0 0.5px rgba(15, 23, 42, 0.1), inset 0 1px 0 #ffffff, inset 0 0 24px rgba(255, 255, 255, 0.45)",
  "&::before": $s(e, r),
  // Specular glare across the top-left, as light catching a curved edge
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
    // The pointer's light on the surface, over the fixed glare
    background: `${bn(200, yn(e).sheen, Ur(e, r))}, ${e ? "linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 42%)" : "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 42%)"}`
  },
  "@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))": {
    bgcolor: o
  },
  "@media (prefers-reduced-transparency: reduce)": {
    bgcolor: o,
    backdropFilter: "none",
    WebkitBackdropFilter: "none"
  }
}), Ds = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", Hr = (e) => ({
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
}), Xr = kr`
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
`, Kr = kr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, jr = (e, o = Gr, r = `rgba(${o}, 0.2)`) => ({
  background: e ? "radial-gradient(circle at 30% 24%, rgba(255, 255, 255, 0.34) 0, rgba(255, 255, 255, 0.12) 22%, rgba(255, 255, 255, 0.06) 55%, rgba(255, 255, 255, 0.03) 100%)" : "radial-gradient(circle at 30% 24%, #ffffff 0, rgba(255, 255, 255, 0.92) 20%, rgba(255, 255, 255, 0.7) 55%, rgba(255, 255, 255, 0.5) 100%)",
  boxShadow: e ? `inset 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 1.5px 1px rgba(255, 255, 255, 0.28), inset 0 -10px 16px -8px ${r}, 0 12px 26px -12px rgba(0, 0, 0, 0.85)` : `inset 0 0 0 1px rgba(255, 255, 255, 0.95), inset 0 2px 2px #ffffff, inset 0 -10px 16px -8px ${r}, 0 12px 26px -12px rgba(15, 23, 42, 0.4), 0 1px 3px rgba(15, 23, 42, 0.06)`
}), Ct = (e, o, r = "solid") => {
  const [n, i, a] = r === "solid" ? [0.95, 0.74, 0.9] : [0.34, 0.12, 0.24];
  return {
    background: `radial-gradient(120% 90% at 28% 10%, rgba(255, 255, 255, ${o ? r === "solid" ? 0.3 : 0.22 : r === "solid" ? 0.26 : 0.7}) 0%, rgba(255, 255, 255, 0) 52%), linear-gradient(165deg, ${ft(e, n)} 0%, ${ft(e, i)} 55%, ${ft(e, a)} 100%)`,
    boxShadow: [
      `inset 0 1px 1px rgba(255, 255, 255, ${r === "solid" ? 0.5 : 0.75})`,
      `inset 0 0 0 1px ${ft(e, r === "solid" ? 0.55 : 0.4)}`,
      `inset 0 -8px 14px -8px rgba(255, 255, 255, ${o ? 0.18 : 0.35})`,
      `0 8px 18px -8px ${ft(e, o ? 0.7 : 0.55)}`
    ].join(", ")
  };
}, ks = (e, o) => {
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
}, tr = "data-rail-item", Ls = `[${tr}], button, [role="button"]`, sr = l.createContext(!1), Vr = () => {
  const e = l.useContext(sr), o = Ne();
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: { sx: Hr(o.palette.mode === "dark") },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, ht = pe(At), Do = pe($t), Yr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  lean: a = 3
}) => {
  const s = l.useRef(null), c = Mt(), [d, f] = l.useState(null), b = l.useRef(null), x = l.useRef(null), p = (y, v) => {
    x.current = v;
    const I = v.getBoundingClientRect(), D = y.getBoundingClientRect(), X = n ?? I.width, K = n ?? I.height, A = {
      top: Math.round(I.top - D.top + (I.height - K) / 2),
      left: Math.round(I.left - D.left + (I.width - X) / 2),
      width: Math.round(X),
      height: Math.round(K)
    };
    f(
      ($) => $ && $.visible && $.top === A.top && $.left === A.left && $.width === A.width && $.height === A.height ? $ : { ...A, visible: !0, instant: !($ != null && $.visible) }
    );
  }, h = (y, v) => {
    var D;
    const I = (D = v == null ? void 0 : v.closest) == null ? void 0 : D.call(v, r);
    return I && y.contains(I) ? I : null;
  }, E = (y) => {
    if (!e)
      return;
    const v = h(y.currentTarget, y.target);
    v && p(y.currentTarget, v);
  }, _ = (y) => {
    if (!e)
      return;
    const v = h(y.currentTarget, y.target);
    v && y.target.matches(":focus-visible") && p(y.currentTarget, v);
  }, m = (y) => {
    const v = s.current, I = x.current;
    if (!e || !v || !I || !a || ze())
      return;
    const D = I.getBoundingClientRect(), X = (K, A) => Math.max(-1, Math.min(1, K / (A / 2))) * a;
    v.style.transform = `translate(${X(y.clientX - (D.left + D.width / 2), D.width)}px, ${X(y.clientY - (D.top + D.height / 2), D.height)}px)`;
  }, g = () => {
    x.current = null, s.current && (s.current.style.transform = ""), f((y) => y != null && y.visible ? { ...y, visible: !1 } : y);
  }, S = (y) => {
    const v = y.relatedTarget;
    (!v || !y.currentTarget.contains(v)) && (y.currentTarget.matches(":hover") || g());
  };
  return l.useEffect(() => {
    const y = s.current;
    if (!(d != null && d.visible)) {
      b.current = null;
      return;
    }
    const v = b.current;
    if (b.current = d.top, !Ze(y) || ze())
      return;
    if (v === null || d.instant) {
      y.animate([{ scale: "0.55" }, { scale: "1" }], {
        duration: Do.duration,
        easing: Do.easing
      });
      return;
    }
    const I = Math.min(Math.abs(d.top - v) / 220, 0.3);
    I && y.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - I / 2} ${1 + I}`, offset: 0.28 },
        {
          scale: `${1 + I / 4} ${1 - I / 3}`,
          offset: 0.62
        },
        { scale: "1 1" }
      ],
      { duration: ht.duration, easing: "ease-out" }
    );
  }, [d == null ? void 0 : d.top, d == null ? void 0 : d.visible, d == null ? void 0 : d.instant]), {
    lens: e && d ? /* @__PURE__ */ t(
      C,
      {
        ref: s,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": d.visible ? "true" : "false",
        sx: {
          ...jr(o, c),
          backdropFilter: "blur(8px) saturate(170%)",
          WebkitBackdropFilter: "blur(8px) saturate(170%)",
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
          transition: d.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${ht.duration}ms ${ht.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [Ie]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: E,
      onMouseMove: m,
      onMouseLeave: g,
      onFocus: _,
      onBlur: S,
      onScrollCapture: g
    } : {}
  };
}, Ns = (e, o) => {
  const r = Yr({
    enabled: e,
    isDark: o,
    selector: Ls,
    size: 46,
    radius: 18
  });
  return {
    ...r,
    lens: r.lens ? l.cloneElement(r.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Fs = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n,
  activeKey: i
}) => {
  const a = l.useRef(null), [s, c] = l.useState(null), d = l.useRef(null), f = l.useCallback(
    (x) => {
      const p = n.current;
      if (!e || !p)
        return;
      const h = p.querySelector(
        `[${tr}][data-active="true"]`
      );
      if (!h) {
        c(
          (g) => g != null && g.visible ? { ...g, visible: !1 } : g
        );
        return;
      }
      const E = h.getBoundingClientRect(), _ = p.getBoundingClientRect(), m = {
        top: Math.round(E.top - _.top),
        left: Math.round(E.left - _.left),
        width: Math.round(E.width),
        height: Math.round(E.height)
      };
      c(
        (g) => g && g.visible && g.top === m.top && g.left === m.left && g.width === m.width && g.height === m.height ? g : {
          ...m,
          visible: !0,
          instant: x || !(g != null && g.visible)
        }
      );
    },
    [e, n]
  );
  return l.useLayoutEffect(() => {
    f(!1);
  }, [f, i]), l.useEffect(() => {
    const x = n.current;
    if (!e || !x || typeof ResizeObserver > "u")
      return;
    const p = new ResizeObserver(() => f(!0));
    return p.observe(x), () => p.disconnect();
  }, [e, n, f]), l.useEffect(() => {
    const x = a.current;
    if (!(s != null && s.visible)) {
      d.current = null;
      return;
    }
    const p = d.current;
    if (d.current = s.top, p === null || s.instant || !Ze(x) || ze())
      return;
    const h = Math.min(Math.abs(s.top - p) / 200, 0.32);
    h && x.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - h / 2} ${1 + h}`, offset: 0.28 },
        {
          scale: `${1 + h / 4} ${1 - h / 3}`,
          offset: 0.62
        },
        { scale: "1 1" }
      ],
      { duration: ht.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    C,
    {
      ref: a,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...Ct(r, o),
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
        [Ie]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, ko = 14, Bs = 18, Ws = "blur(12px) saturate(180%) brightness(1.04)", Ps = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), zs = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), a = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(a)}`;
}, Gs = 140, Lo = 0.22, Us = 0.14, Hs = (e, o, r) => {
  const n = l.useRef(r);
  n.current = r, l.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, a = { x: 0, y: 0, i: 0 };
    let s = 0;
    const c = () => {
      var h;
      const p = e.current;
      p && (p.style.setProperty("--lx", `${a.x.toFixed(1)}px`), p.style.setProperty("--ly", `${a.y.toFixed(1)}px`), p.style.setProperty("--li", a.i.toFixed(3)), (h = n.current) == null || h.call(n, a.x, a.y, a.i));
    }, d = () => {
      a.x += (i.x - a.x) * Lo, a.y += (i.y - a.y) * Lo, a.i += (i.i - a.i) * Us;
      const p = Math.abs(i.x - a.x) < 0.3 && Math.abs(i.y - a.y) < 0.3 && Math.abs(i.i - a.i) < 3e-3;
      p && (a.x = i.x, a.y = i.y, a.i = i.i), c(), s = p ? 0 : requestAnimationFrame(d);
    }, f = () => {
      s || (s = requestAnimationFrame(d));
    }, b = (p) => {
      const h = e.current;
      if (p.pointerType === "touch" || !h)
        return;
      const E = h.getBoundingClientRect();
      if (!E.width || !E.height)
        return;
      i.x = (p.clientX - E.left) * h.offsetWidth / E.width, i.y = (p.clientY - E.top) * h.offsetHeight / E.height;
      const _ = Math.max(
        E.left - p.clientX,
        0,
        p.clientX - E.right
      ), m = Math.max(
        E.top - p.clientY,
        0,
        p.clientY - E.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(_, m) / Gs), a.i < 0.01 && (a.x = i.x, a.y = i.y), f();
    }, x = () => {
      i.i = 0, f();
    };
    return document.addEventListener("pointermove", b, { passive: !0 }), document.documentElement.addEventListener("mouseleave", x), () => {
      cancelAnimationFrame(s), document.removeEventListener("pointermove", b), document.documentElement.removeEventListener("mouseleave", x);
    };
  }, [e, o]);
}, mt = l.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: a = !0,
    onLight: s
  }, c) => {
    const d = l.useRef(null);
    Hs(d, a, s);
    const f = Mt(), b = `lumora-glass-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [x, p] = l.useState(null), h = l.useRef(null), E = l.useCallback(
      (g) => {
        var w;
        if (d.current = g, typeof c == "function" ? c(g) : c && (c.current = g), (w = h.current) == null || w.disconnect(), h.current = null, !g || !i || !Ps || typeof ResizeObserver > "u")
          return;
        const S = () => {
          const y = g.offsetWidth, v = g.offsetHeight;
          p(
            (I) => (I == null ? void 0 : I.width) === y && I.height === v ? I : y && v ? { width: y, height: v } : null
          );
        };
        h.current = new ResizeObserver(S), h.current.observe(g), S();
      },
      [c, i]
    ), _ = l.useMemo(
      () => x ? zs(x.width, x.height, ko) : null,
      [x]
    ), m = i && !!(_ && x);
    return /* @__PURE__ */ R(Te, { children: [
      m ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ R(
            "filter",
            {
              id: b,
              x: "0",
              y: "0",
              width: x.width,
              height: x.height,
              filterUnits: "userSpaceOnUse",
              primitiveUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ t(
                  "feImage",
                  {
                    href: _,
                    x: "0",
                    y: "0",
                    width: x.width,
                    height: x.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ t(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: ko / 3,
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
        C,
        {
          ref: E,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": m ? "true" : void 0,
          sx: [
            Ms(e, o, f),
            m ? {
              backdropFilter: `url(#${b}) ${Ws}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
mt.displayName = "GlassLayer";
const Pe = 44, No = 4, qr = 12, Fo = 1.4, Xs = 6, Zr = 6, qt = qr + Zr, rr = 10, Bo = 0.12, Wo = 0.75, Ks = rr + 32, js = 90, Vs = 22, Ys = 1190, qs = 1195, Ye = pe(At), ke = pe($t), Po = pe(or), Zs = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const a = Math.min(i, r / 2, n / 2), s = e + r, c = o + n, d = `A ${a} ${a} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + a} ${o} H ${s - a} ${d} ${s} ${o + a} V ${c - a} ${d} ${s - a} ${c} H ${e + a} ${d} ${e} ${c - a} V ${o + a} ${d} ${e + a} ${o} Z')`;
}, Js = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: i,
  activePath: a,
  focusFirst: s = !1,
  onNavigate: c,
  onClose: d,
  panelProps: f,
  accentColor: b,
  activeForegroundColor: x,
  solidSurface: p
}) => {
  const h = Ne(), E = h.palette.mode === "dark", _ = !!(e && r), m = l.useRef(null);
  e && o && (m.current = { group: e, key: o });
  const g = m.current, S = l.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const M = r.getBoundingClientRect();
      return {
        x: n,
        y: M.top,
        left: n,
        right: n,
        top: M.top,
        bottom: M.bottom,
        width: 0,
        height: M.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), w = l.useRef(S);
  S && (w.current = S), l.useEffect(() => {
    r && Cs(r);
  }, [r]);
  const [y, v] = l.useState(!1);
  l.useEffect(() => {
    if (!_) {
      v(!1);
      return;
    }
    let M = 0;
    const k = requestAnimationFrame(() => {
      M = requestAnimationFrame(() => v(!0));
    });
    return () => {
      cancelAnimationFrame(k), cancelAnimationFrame(M);
    };
  }, [_]);
  const I = l.useMemo(
    () => g ? zr(g.group.subitems, g.group.icon) : [],
    [g]
  ), D = l.useRef(null), X = l.useRef(null), K = l.useRef(0), A = l.useRef(null), $ = l.useRef([]), O = I.findIndex(
    ({ sub: M }) => De(M, a)
  ), [P, te] = l.useState(0);
  l.useEffect(() => {
    te(Math.max(O, 0));
  }, [o]), l.useEffect(() => {
    if (!_ || !s)
      return;
    const M = setTimeout(() => {
      var k;
      return (k = $.current[0]) == null ? void 0 : k.focus();
    });
    return () => clearTimeout(M);
  }, [_, s, o]);
  const le = (M) => {
    var j;
    const k = Math.max(0, Math.min(M, I.length - 1));
    te(k), (j = $.current[k]) == null || j.focus();
  }, he = (M, k) => {
    switch (M.key) {
      case "ArrowRight":
        le(k + 1);
        break;
      case "ArrowLeft":
        k === 0 ? d(!0) : le(k - 1);
        break;
      case "Home":
        le(0);
        break;
      case "End":
        le(I.length - 1);
        break;
      case "Tab":
        d(!0);
        break;
      default:
        return;
    }
    M.preventDefault();
  }, z = (M) => {
    var de;
    const k = $.current.slice(0, I.length).filter((ne) => !!ne);
    if (!k.length)
      return;
    const j = M !== null && M < k.length && !ze(), L = `translate ${ke.duration}ms ${ke.easing}, scale ${ke.duration}ms ${ke.easing}`, V = k.map((ne) => ne.offsetLeft + Pe / 2), Z = k.map(
      (ne, fe) => j && fe === M ? Fo : 1
    ), Ge = j ? (Fo - 1) * Pe : 0, ue = V[0] - Pe / 2, _e = V[V.length - 1] + Pe / 2, me = j ? Math.min(
      Math.min(
        1,
        Math.max(
          0,
          (V[M] - ue) / (_e - ue)
        )
      ),
      Xs / Ge
    ) : 0;
    let ge = ue - Ge * me;
    k.forEach((ne, fe) => {
      const xe = Pe * Z[fe], Ce = ge + xe / 2;
      ge += xe + No, ne.style.transition = `${L}, background 160ms ease, box-shadow 160ms ease`, ne.style.translate = j ? `${Ce - V[fe]}px 0` : "", ne.style.scale = j ? String(Z[fe]) : "", j ? ne.style.setProperty("--dock-scale", String(Z[fe])) : ne.style.removeProperty("--dock-scale");
    }), (de = A.current) == null || de.call(A);
  }, W = l.useRef(null);
  l.useEffect(() => {
    W.current = null;
  }, [o]);
  const H = (M) => {
    W.current !== M && (W.current = M, cancelAnimationFrame(K.current), K.current = requestAnimationFrame(() => z(M)));
  };
  l.useEffect(() => () => cancelAnimationFrame(K.current), []);
  const G = h.palette.text.primary, q = E ? h.palette.text.primary : b;
  return /* @__PURE__ */ R(Te, { children: [
    /* @__PURE__ */ t(Lr, { in: _, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      C,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => d(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: i ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...i ? { clipPath: Zs(i) } : {},
          zIndex: Ys,
          bgcolor: Ds(E)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      Nr,
      {
        open: _,
        anchorEl: S ?? w.current,
        placement: "right",
        transition: !0,
        modifiers: [
          { name: "offset", options: { offset: [0, rr] } },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: qs,
          transition: y ? `transform ${Ye.duration}ms ${Ye.easing}` : "none",
          [Ie]: { transition: "none" }
        },
        children: ({ TransitionProps: M }) => /* @__PURE__ */ t(
          si,
          {
            in: (M == null ? void 0 : M.in) ?? _,
            onEnter: M == null ? void 0 : M.onEnter,
            onExited: M == null ? void 0 : M.onExited,
            groupKey: (g == null ? void 0 : g.key) ?? null,
            panelProps: f,
            isDark: E,
            solidSurface: p,
            groupText: g == null ? void 0 : g.group.text,
            glassRef: X,
            shapeRef: A,
            children: g ? /* @__PURE__ */ t(Te, { children: /* @__PURE__ */ t(
              C,
              {
                ref: D,
                role: "menu",
                "aria-label": g.group.text,
                onPointerLeave: () => H(null),
                sx: {
                  position: "relative",
                  display: "flex",
                  gap: `${No}px`,
                  // No room kept for magnification: a grown tile rises out of
                  // the glass, as icons rise out of the Dock
                  px: 0
                },
                children: I.map(({ sub: k, icon: j }, L) => /* @__PURE__ */ t(
                  vn,
                  {
                    ref: (V) => {
                      $.current[L] = V;
                    },
                    sub: k,
                    icon: j,
                    index: L,
                    active: De(
                      k,
                      a
                    ),
                    tabIndex: L === P ? 0 : -1,
                    onClick: () => {
                      c(k.path), d();
                    },
                    onKeyDown: (V) => he(V, L),
                    onFocus: (V) => {
                      te(L), V.currentTarget.matches(
                        ":focus-visible"
                      ) && H(L);
                    },
                    onHoverStart: (V) => {
                      V !== "touch" && H(L);
                    },
                    accentColor: b,
                    activeForegroundColor: x,
                    labelColor: G,
                    iconColor: q,
                    isDark: E
                  },
                  k.path
                ))
              },
              g.key
            ) }) : null
          }
        )
      }
    )
  ] });
}, _t = 18, Qs = 160, Or = 14, ei = 22, ti = 2.5, ri = 1, zo = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, oi = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, ni = (e, o, r) => {
  const n = Zr, i = _t, a = _t + o / 2, s = Math.max(e, ...r.map((m) => m.right + n)), c = {
    cx: s / 2,
    cy: a,
    hx: s / 2,
    hy: o / 2,
    r: qt
  }, d = r.filter((m) => m.bottom - m.top > Pe * 1.02).map((m) => {
    const g = (m.right - m.left) / Pe;
    return {
      cx: (m.left + m.right) / 2,
      cy: (m.top + m.bottom) / 2 + _t,
      hx: (m.right - m.left) / 2 + n,
      hy: (m.bottom - m.top) / 2 + n,
      r: qr * g + n
    };
  }), f = (m, g) => d.reduce(
    (S, w) => oi(S, zo(m, g, w), ei),
    zo(m, g, c)
  ), b = (m, g) => {
    let S = a, w = a + g * (o / 2 + i);
    if (f(m, S) > 0)
      return null;
    for (let y = 0; y < 12; y += 1) {
      const v = (S + w) / 2;
      f(m, v) <= 0 ? S = v : w = v;
    }
    return S;
  }, x = Math.min(0, ...d.map((m) => m.cx - m.hx)) - 2, p = Math.max(s, ...d.map((m) => m.cx + m.hx)) + 2, h = [], E = [];
  for (let m = x; m <= p; ) {
    const g = b(m, -1), S = b(m, 1);
    if (g !== null && S !== null) {
      const y = +(m + Or).toFixed(1);
      h.push([y, +g.toFixed(1)]), E.push([y, +S.toFixed(1)]);
    }
    const w = m - x < qt + 4 || p - m < qt + 4;
    m += w ? ri : ti;
  }
  return h.length ? `M ${[...h, ...E.reverse()].map(([m, g]) => `${m} ${g}`).join(" L ")} Z` : "";
}, Go = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((a) => {
    Ze(a) && a.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    });
  });
}, si = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: i,
  isDark: a,
  solidSurface: s,
  groupText: c,
  glassRef: d,
  shapeRef: f,
  children: b
}) => {
  const x = l.useRef(null), p = l.useRef(null), h = l.useRef(null), E = l.useRef(null), _ = l.useRef(null), m = Ur(a, Mt()), g = l.useCallback(
    (z, W, H) => {
      var G, q;
      (G = _.current) == null || G.setAttribute("cx", String(z)), (q = _.current) == null || q.setAttribute("cy", String(W)), E.current && (E.current.style.opacity = String(
        H * (a ? er.dark.rim : er.light.rim)
      ));
    },
    [a]
  ), S = l.useRef(null), w = l.useRef(null), y = `lumora-flyout-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, v = l.useRef(0), I = l.useRef(0), D = l.useRef(""), X = () => {
    var M, k, j, L;
    const z = x.current, W = p.current;
    if (!z || !W)
      return !1;
    const H = z.getBoundingClientRect(), G = Array.from(
      z.querySelectorAll('[role="menuitem"]'),
      (V) => {
        const Z = V.getBoundingClientRect();
        return {
          left: Z.left - H.left,
          right: Z.right - H.left,
          top: Z.top - H.top,
          bottom: Z.bottom - H.top
        };
      }
    ), q = ni(
      z.offsetWidth,
      z.offsetHeight,
      G
    );
    return q === D.current ? !1 : (D.current = q, W.style.clipPath = `path('${q}')`, (M = h.current) == null || M.setAttribute("d", q), (k = E.current) == null || k.setAttribute("d", q), (j = S.current) == null || j.setAttribute("d", q), (L = w.current) == null || L.setAttribute("d", q), !0);
  }, K = () => {
    if (I.current = 0, v.current)
      return;
    const z = () => {
      if (I.current = X() ? 0 : I.current + 1, I.current > 8) {
        v.current = 0;
        return;
      }
      v.current = requestAnimationFrame(z);
    };
    v.current = requestAnimationFrame(z);
  };
  f.current = K, l.useLayoutEffect(() => (X(), K(), () => {
    cancelAnimationFrame(v.current), v.current = 0;
  }), [n]);
  const A = l.useRef(null), $ = l.useRef(null), O = l.useRef(!1), P = (z) => {
    x.current = z;
    const { ref: W } = i;
    typeof W == "function" ? W(z) : W && (W.current = z);
  }, te = () => {
    Xt(d.current), Xt(A.current), Xt(x.current);
  }, le = () => {
    var G;
    const z = x.current, W = d.current, H = A.current;
    if (!(!Ze(z) || !W || !H)) {
      if (te(), ze()) {
        z.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      $.current = null, W.animate(
        [
          { transform: `scale(${Bo}, ${Wo})` },
          { transform: "none" }
        ],
        { duration: Ye.duration, easing: Ye.easing }
      ), Go(W, [0, 1], 160, "ease-out");
      try {
        (G = p.current) == null || G.animate(
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
          duration: Po.duration,
          delay: 60,
          easing: Po.easing,
          fill: "backwards"
        }
      );
    }
  }, he = () => {
    const z = x.current, W = d.current, H = A.current;
    if (!Ze(z) || !W || !H) {
      r == null || r();
      return;
    }
    if (te(), ze()) {
      z.animate([{ opacity: 1 }, { opacity: 0 }], {
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
    }), Go(W, [1, 0], 200, "ease-in"), W.animate(
      [
        { transform: "none" },
        { transform: `scale(${Bo}, ${Wo})` }
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
      he();
      return;
    }
    o == null || o(), le();
  }, [e]), l.useLayoutEffect(() => {
    const z = x.current;
    if (!z)
      return;
    const W = z.getBoundingClientRect(), H = $.current;
    if ($.current = { width: W.width, height: W.height }, !O.current) {
      O.current = !0;
      return;
    }
    const G = d.current;
    !e || !H || !Ze(G) || !W.width || !W.height || ze() || (Xt(G), G.animate(
      [
        {
          transform: `scale(${H.width / W.width}, ${H.height / W.height})`
        },
        { transform: "scale(0.98, 1.04)", offset: 0.35 },
        { transform: "none" }
      ],
      { duration: Ye.duration, easing: Ye.easing }
    ));
  }, [n]), /* @__PURE__ */ R(
    C,
    {
      ref: P,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": c,
      sx: {
        position: "relative",
        borderRadius: `${qt}px`,
        p: `${Zr}px`,
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
        /* @__PURE__ */ R(
          C,
          {
            ref: d,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -_t,
              bottom: -_t,
              left: -Or,
              right: -Qs,
              pointerEvents: "none",
              // The rail icon's centre: the panel is centred on it,
              // one gap plus half the rail's padding to the left
              transformOrigin: `${Or - Ks}px 50%`,
              willChange: "transform"
            },
            children: [
              /* @__PURE__ */ R(
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
                    /* @__PURE__ */ R("defs", { children: [
                      /* @__PURE__ */ t(
                        "filter",
                        {
                          id: `${y}-shadow`,
                          x: "-20%",
                          y: "-50%",
                          width: "140%",
                          height: "200%",
                          children: /* @__PURE__ */ t("feGaussianBlur", { stdDeviation: "14" })
                        }
                      ),
                      /* @__PURE__ */ R(
                        "mask",
                        {
                          id: `${y}-outside`,
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
                    /* @__PURE__ */ t("g", { mask: `url(#${y}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: S,
                        transform: "translate(0 12)",
                        fill: a ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${y}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                mt,
                {
                  ref: p,
                  isDark: a,
                  solid: s,
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
              /* @__PURE__ */ R(
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
                    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ R(
                      "linearGradient",
                      {
                        id: `${y}-rim`,
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
                              stopOpacity: a ? 0.5 : 1
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0.25",
                              stopColor: "#ffffff",
                              stopOpacity: a ? 0.1 : 0.5
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0.55",
                              stopColor: "#ffffff",
                              stopOpacity: a ? 0.04 : 0.2
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: "#ffffff",
                              stopOpacity: a ? 0.3 : 0.9
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
                        stroke: `url(#${y}-rim)`,
                        strokeWidth: "1.25"
                      }
                    ),
                    /* @__PURE__ */ R(
                      "radialGradient",
                      {
                        ref: _,
                        id: `${y}-glint`,
                        gradientUnits: "userSpaceOnUse",
                        cx: "-9999",
                        cy: "-9999",
                        r: "140",
                        children: [
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0",
                              stopColor: `rgb(${m})`,
                              stopOpacity: "1"
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: `rgb(${m})`,
                              stopOpacity: "0"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ t(
                      "path",
                      {
                        ref: E,
                        fill: "none",
                        stroke: `url(#${y}-glint)`,
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
        /* @__PURE__ */ t(C, { ref: A, sx: { position: "relative" }, children: b })
      ]
    }
  );
}, vn = l.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: i,
    onClick: a,
    onKeyDown: s,
    onFocus: c,
    onHoverStart: d,
    accentColor: f,
    activeForegroundColor: b,
    labelColor: x,
    iconColor: p,
    isDark: h
  }, E) => {
    const _ = Mt(), m = (y) => {
      const v = y.currentTarget.getBoundingClientRect();
      y.currentTarget.style.setProperty(
        "--mx",
        `${(y.clientX - v.left) / v.width * 100}%`
      ), y.currentTarget.style.setProperty(
        "--my",
        `${(y.clientY - v.top) / v.height * 100}%`
      );
    }, g = (y) => {
      const v = y.currentTarget;
      !Ze(v) || ze() || v.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.1, 0.9)", offset: 0.22 },
          { transform: "scale(0.95, 1.06)", offset: 0.5 },
          { transform: "scale(1.02, 0.99)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, S = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, w = {
      ...jr(h, _),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": S
    };
    return /* @__PURE__ */ R(
      Je,
      {
        ref: E,
        role: "menuitem",
        tabIndex: i,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: a,
        onKeyDown: s,
        onFocus: c,
        onPointerMove: m,
        onMouseEnter: g,
        onPointerEnter: (y) => d(y.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Pe,
          height: Pe,
          borderRadius: `${qr}px`,
          color: n ? b : x,
          bgcolor: n ? f : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Ct(f, h) : {},
          transition: `translate ${ke.duration}ms ${ke.easing}, scale ${ke.duration}ms ${ke.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${As} ${Ye.duration}ms ${Ye.easing} both`,
          animationDelay: `${js + r * Vs}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: 22,
            color: n ? b : p
          },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 160ms ease",
            background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, ${h ? 0.18 : 0.7}), transparent 65%)`
          },
          // The current page keeps its accent fill; it still glows
          "&:hover": n ? {
            "&::before": { opacity: 1 },
            "& [data-tile-name]": S
          } : w,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : w,
            "& [data-tile-name]": S,
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
          /* @__PURE__ */ t(C, { sx: { position: "relative", display: "flex" }, children: o }),
          /* @__PURE__ */ t(
            C,
            {
              component: "span",
              "data-tile-name": !0,
              sx: {
                ...Hr(h),
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
vn.displayName = "FlyoutTile";
const ii = 100, ai = 250, ci = (e) => {
  const [o, r] = l.useState(null), n = l.useRef(o);
  n.current = o;
  const i = l.useRef(/* @__PURE__ */ new Map()), a = l.useRef(null), s = l.useRef(void 0), c = l.useRef(void 0), d = () => {
    clearTimeout(s.current), s.current = void 0;
  }, f = () => {
    clearTimeout(c.current), c.current = void 0;
  }, b = (g, S, w = !1) => {
    d(), f(), r({ key: g, pinned: S, focusFirst: w });
  }, x = l.useCallback((g = !1) => {
    var w, y;
    d(), f();
    const S = (w = n.current) == null ? void 0 : w.key;
    r(null), g && S && ((y = i.current.get(S)) == null || y.focus());
  }, []), p = () => {
    d(), !(!n.current || n.current.pinned) && (f(), c.current = setTimeout(() => x(), ai));
  };
  l.useEffect(() => {
    e || x();
  }, [e, x]), l.useEffect(
    () => () => {
      d(), f();
    },
    []
  );
  const h = o !== null;
  return l.useEffect(() => {
    if (!h)
      return;
    const g = (y) => {
      var I;
      const v = y;
      return v ? (I = a.current) != null && I.contains(v) ? !0 : [...i.current.values()].some((D) => D.contains(v)) : !1;
    }, S = (y) => {
      g(y.target) || x();
    }, w = (y) => {
      var v;
      y.key === "Escape" && x(
        !!((v = a.current) != null && v.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", S), document.addEventListener("keydown", w), () => {
      document.removeEventListener("pointerdown", S), document.removeEventListener("keydown", w);
    };
  }, [h, x]), {
    state: o,
    close: x,
    triggerProps: (g) => ({
      ref: (S) => {
        S ? i.current.set(g, S) : i.current.delete(g);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        f();
        const S = n.current;
        if (S) {
          S.key !== g && b(g, S.pinned);
          return;
        }
        d(), s.current = setTimeout(
          () => b(g, !1),
          ii
        );
      },
      onMouseLeave: p,
      onClick: (S) => {
        if (S.detail === 0) {
          b(g, !0, !0);
          return;
        }
        const w = n.current;
        (w == null ? void 0 : w.key) === g && w.pinned ? x() : b(g, !0);
      },
      onKeyDown: (S) => {
        S.key === "ArrowRight" && (S.preventDefault(), b(g, !0, !0));
      }
    }),
    flyoutProps: {
      ref: a,
      onMouseEnter: f,
      onMouseLeave: p
    },
    onRailLeafEnter: () => {
      d(), n.current && !n.current.pinned && x();
    },
    getTrigger: (g) => i.current.get(g) ?? null
  };
}, li = 264, di = 72, Uo = 64, Kt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ui = 16, fi = 14, pi = 4, hi = 2.5, Ho = "0.7rem", Xo = 22, Ko = pe($t), nt = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
  const a = l.useRef(null), [s, c] = l.useState(!1), d = l.useCallback(() => {
    const f = a.current;
    f && c(f.scrollWidth > f.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    d();
  }, [d, e]), l.useEffect(() => {
    const f = a.current;
    if (!f)
      return;
    const b = new ResizeObserver(() => d());
    return b.observe(f), () => b.disconnect();
  }, [d]), /* @__PURE__ */ t(
    Re,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !s,
      disableFocusListener: !s,
      disableTouchListener: !s,
      children: /* @__PURE__ */ t(
        ie,
        {
          ref: a,
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
}, mi = ({
  open: e,
  size: o = ui
}) => e ? /* @__PURE__ */ t(Qn, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Jn, { sx: { fontSize: o, opacity: 0.75 } }), jo = ({ open: e }) => /* @__PURE__ */ t(
  es,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), jt = 600, Tr = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: i,
  logo: a,
  title: s,
  onBrandClick: c,
  brandMenuOpen: d,
  showHeaderBar: f = !1,
  headerBackgroundColor: b,
  headerForegroundColor: x,
  brandColor: p,
  activeAccentColor: h = "#01584f",
  groupAccentColor: E,
  activeForegroundColor: _,
  foregroundColor: m,
  surfaceBackgroundColor: g,
  collapsed: S = !1,
  expandedWidth: w = li,
  collapsedWidth: y = di,
  showLabels: v = !1,
  topInsetPx: I = 0,
  topContent: D,
  footer: X,
  submenuMode: K = "inline"
}) => {
  const A = Ne(), $ = A.palette.mode === "dark", O = K === "flyout" && S && !v, P = ci(O), te = l.useRef(null), le = Ns(O, $), he = Fs({
    enabled: O,
    isDark: $,
    color: h,
    containerRef: te,
    activeKey: r
  }), { close: z } = P;
  l.useEffect(() => {
    z();
  }, [r, z]);
  const [W, H] = l.useState(
    {}
  ), G = _ ?? _r(h), q = {
    bgcolor: h,
    color: G,
    "& .MuiListItemIcon-root": { color: G }
  }, M = {
    bgcolor: h,
    color: G,
    borderRadius: "8px"
  }, k = E ?? Qt(h), j = g ?? ($ ? A.palette.background.paper : "#ffffff"), L = m ?? ($ ? "text.primary" : h), V = b ?? j, Z = x ?? (b ? _r(V) : m ?? ($ ? A.palette.text.primary : h)), Ge = Qt(Z), ue = (u) => {
    n == null || n(u);
  }, _e = (u, F) => {
    H((B) => ({ ...B, [u]: !F }));
  }, me = (u, F) => W[F] ?? je(u, r), ge = (u, F, B) => ({
    color: u ? G : L,
    bgcolor: u ? h : "transparent",
    "& .MuiListItemIcon-root": {
      color: u ? G : L,
      minWidth: B
    },
    "&:hover": u || v ? q : { bgcolor: F }
  }), de = {
    "&.Mui-selected": {
      bgcolor: h
    },
    "&.Mui-selected:hover": q
  }, ne = (u) => {
    const F = De(u, r), B = /* @__PURE__ */ R(
      Ut,
      {
        disabled: !u.path,
        selected: F,
        onClick: () => u.path && ue(u.path),
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
          ...ge(
            F,
            k,
            u.subtitle ? 48 : 36
          ),
          ...de
        },
        children: [
          /* @__PURE__ */ t(Se, { children: u.icon }),
          /* @__PURE__ */ t(
            Le,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                nt,
                {
                  text: u.text,
                  fontWeight: jt
                }
              ),
              secondary: u.subtitle ? /* @__PURE__ */ t(
                C,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    nt,
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
      return B;
    const { action: N } = u;
    return /* @__PURE__ */ R(C, { sx: { position: "relative" }, children: [
      B,
      /* @__PURE__ */ t(Re, { title: N.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        ve,
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
            borderColor: F ? "rgba(255, 255, 255, 0.35)" : k,
            color: F ? G : L,
            "&:hover": {
              bgcolor: F ? "rgba(255, 255, 255, 0.15)" : k
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: F ? G : L,
              outlineOffset: 1
            }
          },
          children: N.icon
        }
      ) })
    ] }, u.text);
  }, fe = (u) => {
    const F = je(u, r), B = De(u, r), N = ut("", u), U = me(u, N);
    return /* @__PURE__ */ R(
      C,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: F ? k : "transparent"
        },
        children: [
          /* @__PURE__ */ R(
            Ut,
            {
              onClick: () => _e(N, U),
              "data-testid": `sidebar-item-${u.text}`,
              "data-active": B ? "true" : "false",
              "aria-expanded": U,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...ge(B, k, 36)
              },
              children: [
                /* @__PURE__ */ t(Se, { children: u.icon }),
                /* @__PURE__ */ t(
                  Le,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      nt,
                      {
                        text: u.text,
                        fontWeight: jt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(jo, { open: U })
              ]
            }
          ),
          /* @__PURE__ */ t(Eo, { in: U, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            C,
            {
              "data-testid": `sidebar-children-${u.text}`,
              sx: { pb: 0.5 },
              children: u.subitems.map(
                (J) => xe(J, N, 1)
              )
            }
          ) })
        ]
      },
      u.text
    );
  }, xe = (u, F, B) => {
    const N = ut(F, u), U = pi + (B - 1) * hi;
    if (pt(u)) {
      const Q = je(u, r), re = De(u, r), se = me(u, N);
      return /* @__PURE__ */ R(C, { "data-testid": `sidebar-group-${u.text}`, children: [
        /* @__PURE__ */ R(
          Ut,
          {
            onClick: () => _e(N, se),
            "data-testid": `sidebar-subitem-${u.text}`,
            "data-active": Q ? "true" : "false",
            "aria-expanded": se,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: U,
              ...ge(re, "action.hover", 32)
            },
            children: [
              u.icon ? /* @__PURE__ */ t(Se, { children: u.icon }) : null,
              /* @__PURE__ */ t(
                Le,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    nt,
                    {
                      text: u.text,
                      fontWeight: jt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(jo, { open: se })
            ]
          }
        ),
        /* @__PURE__ */ t(Eo, { in: se, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(C, { "data-testid": `sidebar-children-${u.text}`, children: u.subitems.map(
          (et) => xe(et, N, B + 1)
        ) }) })
      ] }, N);
    }
    const J = De(u, r);
    return /* @__PURE__ */ R(
      Ut,
      {
        selected: J,
        disabled: !u.path,
        onClick: () => u.path && ue(u.path),
        "data-testid": `sidebar-subitem-${u.text}`,
        "data-active": J ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: U,
          ...ge(J, "action.hover", 32),
          ...de
        },
        children: [
          u.icon ? /* @__PURE__ */ t(Se, { children: u.icon }) : null,
          /* @__PURE__ */ t(
            Le,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                nt,
                {
                  text: u.text,
                  fontWeight: jt
                }
              )
            }
          )
        ]
      },
      N
    );
  }, Ce = (u, F, B, N, U, J) => {
    const Q = !U, re = /* @__PURE__ */ R(
      ve,
      {
        "aria-label": F,
        disabled: Q,
        onClick: U,
        onMouseEnter: O ? P.onRailLeafEnter : void 0,
        ...O ? { [tr]: "" } : {},
        "data-testid": (J == null ? void 0 : J.testId) ?? `sidebar-item-${F}`,
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
          color: N ? G : L,
          bgcolor: N ? h : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Xo
          },
          "&:hover": M,
          ...Kt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: N ? G : L,
          bgcolor: N ? h : "transparent",
          borderRadius: N ? "8px" : "50%",
          "&:hover": {
            bgcolor: N ? h : J != null && J.insideGroup ? "action.hover" : k,
            borderRadius: "8px"
          },
          ...Kt,
          ...O ? it(N) : {}
        },
        children: [
          B,
          v ? /* @__PURE__ */ t(
            nt,
            {
              text: F,
              variant: "caption",
              center: !0,
              fontSize: Ho
            }
          ) : null
        ]
      }
    );
    return v ? Q ? /* @__PURE__ */ t("span", { children: re }, u) : /* @__PURE__ */ t(l.Fragment, { children: re }, u) : /* @__PURE__ */ t(
      Re,
      {
        title: F,
        placement: "right",
        arrow: !O,
        ...O ? kt : {},
        children: Q ? /* @__PURE__ */ t("span", { children: re }) : re
      },
      u
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
  }, it = (u) => ({
    borderRadius: "12px",
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...u ? { bgcolor: "transparent" } : {},
    transition: `transform ${Ko.duration}ms ${Ko.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), kt = {
    slotProps: {
      tooltip: { sx: Hr($) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, ir = (u) => {
    var U;
    const F = je(u, r), B = ut("", u), N = ((U = P.state) == null ? void 0 : U.key) === B;
    return /* @__PURE__ */ t(
      C,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          ve,
          {
            ...P.triggerProps(B),
            "aria-label": u.text,
            "aria-haspopup": "menu",
            "aria-expanded": N,
            "data-testid": `sidebar-item-${u.text}`,
            "data-active": F ? "true" : "false",
            "data-open": N ? "true" : "false",
            [tr]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: F ? G : L,
              bgcolor: F ? h : N ? k : "transparent",
              ...it(F),
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
            children: u.icon
          }
        )
      },
      u.text
    );
  }, Qe = (u) => {
    const F = je(u, r), B = De(u, r), N = ut("", u), U = me(u, N), J = /* @__PURE__ */ R(
      ve,
      {
        "aria-label": u.text,
        "aria-expanded": U,
        onClick: () => _e(N, U),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": B ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: v ? 0.25 : 0,
          width: v ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...v ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: B ? G : L,
          bgcolor: B ? h : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": v ? { bgcolor: h, color: G } : {
            bgcolor: B ? h : "transparent"
          },
          ...Kt
        },
        children: [
          v ? /* @__PURE__ */ t(
            C,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Xo
                }
              },
              children: u.icon
            }
          ) : u.icon,
          v ? /* @__PURE__ */ t(
            nt,
            {
              text: u.text,
              variant: "caption",
              center: !0,
              fontSize: Ho
            }
          ) : null,
          /* @__PURE__ */ t(mi, { open: U, size: fi })
        ]
      }
    ), Q = v ? J : /* @__PURE__ */ t(Re, { title: u.text, placement: "right", arrow: !0, children: J });
    return /* @__PURE__ */ R(
      C,
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
          bgcolor: F ? k : "transparent",
          ...v ? {} : { "&:hover": { bgcolor: k } }
        },
        children: [
          Q,
          U ? zr(u.subitems, u.icon).map(
            ({ sub: re, icon: se }) => Ce(
              re.path,
              re.text,
              se,
              De(re, r),
              () => ue(re.path),
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
  }, gt = (u) => /* @__PURE__ */ t(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Ce(
        u.text,
        u.subtitle ? `${u.text} · ${u.subtitle}` : u.text,
        u.icon,
        De(u, r),
        u.path ? () => ue(u.path) : void 0,
        { testId: `sidebar-item-${u.text}` }
      )
    },
    u.text
  ), Lt = (u) => pt(u) ? O ? ir(u) : S ? Qe(u) : fe(u) : S ? gt(u) : ne(u), Ue = (u) => /* @__PURE__ */ t(
    Ae,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: S ? "center" : "stretch"
      },
      children: u.map(Lt)
    }
  ), at = S ? y : w, Nt = () => {
    var Q, re;
    const { state: u } = P, F = u ? [...e, ...o].find(
      (se) => pt(se) && ut("", se) === u.key
    ) ?? null : null, B = F ? ((Q = te.current) == null ? void 0 : Q.getBoundingClientRect().right) ?? y : y, N = F ? ((re = te.current) == null ? void 0 : re.closest("[data-rail-surface]")) ?? te.current : null, U = N == null ? void 0 : N.getBoundingClientRect(), J = N && U ? {
      left: U.left,
      top: U.top,
      width: U.width,
      height: U.height,
      radius: parseFloat(
        getComputedStyle(N).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Js,
      {
        group: F,
        groupKey: F ? u.key : null,
        anchor: F ? P.getTrigger(u.key) : null,
        railEdge: B,
        railShape: J,
        activePath: r,
        focusFirst: u == null ? void 0 : u.focusFirst,
        onNavigate: ue,
        onClose: P.close,
        panelProps: P.flyoutProps,
        accentColor: h,
        activeForegroundColor: G,
        solidSurface: j
      }
    );
  }, Ft = f ? /* @__PURE__ */ t(
    C,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Uo,
        minHeight: Uo,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: V
      },
      children: a || s ? /* @__PURE__ */ t(
        Jt,
        {
          logo: a,
          title: S ? void 0 : s,
          appName: s || "App",
          onClick: c,
          menuOpen: d,
          color: p ?? Z,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, ar = !f && a ? /* @__PURE__ */ t(
    C,
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
          logo: a,
          appName: s || "App",
          onClick: c,
          menuOpen: d,
          color: p ?? Z,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, He = v ? 0.5 : S ? 1 : 1.5;
  return /* @__PURE__ */ t(sr.Provider, { value: O, children: /* @__PURE__ */ R(
    C,
    {
      ref: te,
      ...le.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": S ? "true" : "false",
      "data-labeled": v ? "true" : "false",
      sx: {
        width: at,
        minWidth: at,
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
        he.glass,
        Ft ?? ar,
        D ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: He,
              pt: 1,
              pb: 1
            },
            children: D
          }
        ) : null,
        /* @__PURE__ */ R(
          C,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: He,
              pt: I && !f ? `${I}px` : 1,
              pb: 2
            },
            children: [
              Ue(e),
              o.length > 0 ? /* @__PURE__ */ R(C, { sx: { mt: "auto", pt: 2 }, children: [
                X ? null : /* @__PURE__ */ t(
                  qe,
                  {
                    sx: { mb: 1, borderColor: "divider" }
                  }
                ),
                Ue(o)
              ] }) : null
            ]
          }
        ),
        X ? /* @__PURE__ */ t(C, { sx: { flexShrink: 0, px: He, pb: 1.5 }, children: /* @__PURE__ */ t(
          C,
          {
            sx: {
              borderTop: `1px solid ${Ge}`,
              pt: 1.5
            },
            children: X
          }
        ) }) : null,
        O ? Nt() : null
      ]
    }
  ) });
}, Ar = "var(--lumora-content-padding, 0px)", Vo = `calc(${Ar} * -1)`, uc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: a = !0,
  sx: s
}) => /* @__PURE__ */ t(
  C,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Vo,
        mt: o ? Vo : 0,
        // Space below it, like any other block on the page
        mb: Ar,
        px: a ? Ar : 0,
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
), gi = ({ keys: e }) => /* @__PURE__ */ t(
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
);
class Y extends Error {
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const ee = {
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
}, xi = () => {
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
        ee.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      ee.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      ee.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Y(
      "Failed to access storage",
      ee.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Rr = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        ee.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      ee.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      ee.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Y(
      "Failed to write to storage",
      ee.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Sn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Ot = () => {
  try {
    xi();
    const e = Sr(ce.ACCESS_TOKEN), o = Sr(ce.REFRESH_TOKEN), r = Sr(ce.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), Sn(ce.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Y ? e : new Y(
      "Failed to retrieve authentication tokens",
      ee.UNKNOWN_ERROR,
      e
    );
  }
}, bi = () => {
  try {
    const { accessToken: e, refreshToken: o } = Ot();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Y(
        "No authentication tokens found",
        ee.TOKEN_NOT_FOUND
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
        ee.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Rn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Y(
        "At least one token must be provided",
        ee.TOKEN_INVALID
      );
    return e && Rr(ce.ACCESS_TOKEN, e), o && Rr(ce.REFRESH_TOKEN, o), r && Rr(ce.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Y ? n : new Y(
        "Failed to store tokens",
        ee.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Tt = () => {
  try {
    return [
      ce.ACCESS_TOKEN,
      ce.REFRESH_TOKEN,
      ce.USER,
      // Also clear legacy keys for complete cleanup
      We.ACCESS_TOKEN,
      We.REFRESH_TOKEN,
      We.USER
    ].map((n) => Sn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Y ? e : new Y(
        "Failed to clear tokens",
        ee.LOGOUT_FAILED,
        e
      )
    };
  }
}, yi = () => {
  try {
    const { user: e } = Ot();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Y ? e : new Y(
        "Failed to retrieve user data",
        ee.UNKNOWN_ERROR,
        e
      )
    };
  }
}, fc = (e) => {
  if (!(e instanceof Y))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case ee.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case ee.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case ee.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case ee.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case ee.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case ee.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, $r = (e, o = "Unknown") => {
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
  const o = Oo.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, i = [];
  const a = (s, c) => {
    i.forEach(({ resolve: d, reject: f }) => {
      s ? f(s) : c && d(c);
    }), i = [];
  };
  return o.interceptors.request.use(
    (s) => {
      const { accessToken: c } = Ot();
      return c && s.headers && (s.headers.Authorization = `Bearer ${c}`), s;
    },
    (s) => Promise.reject(s)
  ), o.interceptors.response.use(
    (s) => s,
    async (s) => {
      var p;
      const c = s.config, d = (p = s.response) == null ? void 0 : p.status, f = (c == null ? void 0 : c.url) || "", b = f.includes("/auth/refresh");
      if (d !== 401 || c._retry || b)
        return Promise.reject(s);
      c._retry = !0;
      const { refreshToken: x } = Ot();
      if (!x) {
        const h = new Error(
          "No refresh token available for token refresh"
        );
        return $r(h, "AxiosClient - Token Refresh"), Tt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (r && n)
        return new Promise((h, E) => {
          i.push({ resolve: h, reject: E });
        }).then((h) => {
          const {
            accessToken: E,
            refreshToken: _
          } = h;
          if (c.headers && (c.headers.Authorization = `Bearer ${E}`), f.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const m = JSON.parse(
                  c.data || "{}"
                );
                m.refresh_token = _, c.data = JSON.stringify(m);
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
        }).catch((h) => Promise.reject(h));
      r = !0, n = Oo.post(
        `${e}/auth/refresh`,
        {
          refresh_token: x
        }
      );
      try {
        const h = await n, { accessToken: E, refreshToken: _ } = h.data;
        if (Rn(E, _, null), a(null, {
          accessToken: E,
          refreshToken: _
        }), c.headers && (c.headers.Authorization = `Bearer ${E}`), f.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const m = JSON.parse(
                c.data || "{}"
              );
              m.refresh_token = _, c.data = JSON.stringify(m);
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
      } catch (h) {
        return $r(
          h,
          "AxiosClient - Token Refresh Failed"
        ), a(h), Tt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(h);
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
}, we = {
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
}, En = un(), Oe = En.typography.pxToRem, Si = (e) => {
  const o = e === "dark", r = [...En.shadows];
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
        contrastText: we[50]
      },
      warning: o ? { light: lt[400], main: lt[500], dark: lt[700] } : { light: lt[300], main: lt[400], dark: lt[800] },
      error: o ? { light: dt[400], main: dt[500], dark: dt[700] } : { light: dt[300], main: dt[400], dark: dt[800] },
      success: o ? { light: ct[400], main: ct[500], dark: ct[700] } : { light: ct[300], main: ct[400], dark: ct[800] },
      grey: we,
      divider: o ? st(we[700], 0.6) : st(we[300], 0.4),
      background: o ? { default: we[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: we[400] } : { primary: we[800], secondary: we[600] },
      action: o ? {
        hover: st(we[600], 0.2),
        selected: st(we[600], 0.3)
      } : {
        hover: st(we[200], 0.2),
        selected: st(we[200], 0.3)
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
}, Ri = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Ot();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return Rn(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      $r(i, "TokenValidator - Refresh Failed");
    }
  return Tt(), o ? o() : window.location.href = "/login", !1;
}, It = ({ size: e = 20 }) => /* @__PURE__ */ R(
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
), Yo = pe($t), Be = "#09C1AE", Zt = (e, o) => ({
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
}), Ei = (e) => ({
  ...Zt(14, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: "12px",
    zIndex: 1,
    background: `${Ct(Be, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), qo = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: a = "#01584f",
  rightOffsetPx: s = 0
}) => {
  const c = Vr(), d = l.useContext(sr), f = Ne().palette.mode === "dark", b = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", x = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ R(
    Je,
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
        borderColor: r ? Be : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: a,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Be}`,
          outlineOffset: 2
        },
        ...n && Zt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(It, { size: 20 }),
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
        i && /* @__PURE__ */ t(gi, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && d ? /* @__PURE__ */ t(Re, { title: b, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    ve,
    {
      ...x,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: "14px",
        ...Ct(Be, f, "clear"),
        backdropFilter: "blur(8px) saturate(180%)",
        WebkitBackdropFilter: "blur(8px) saturate(180%)",
        ...r && {
          boxShadow: `${Ct(Be, f, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${Yo.duration}ms ${Yo.easing}, box-shadow 200ms ease`,
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
        ...n && Ei(f)
      },
      children: /* @__PURE__ */ t(It, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Re, { title: b, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    ve,
    {
      ...x,
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
      children: /* @__PURE__ */ t(It, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(Re, { title: b, placement: "left", children: /* @__PURE__ */ t(
    ve,
    {
      ...x,
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
        outline: r ? `2px solid ${Be}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Be}` },
        ...n && Zt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(C, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(It, { size: 26 }) })
    }
  ) });
}, Vt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(as, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ R(cs, { children: [
  /* @__PURE__ */ t(ls, { fontSize: "small" }),
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
    fn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Rt = 24, wi = 720, Ii = 1140, _i = 1250, Ci = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: i,
  sidebarWidthPx: a,
  bottomOffsetPx: s,
  fullScreen: c,
  fullScreenBottom: d = "0px",
  onClose: f
}) => {
  l.useEffect(() => {
    if (!e || !f)
      return;
    const E = (_) => {
      _.key === "Escape" && f();
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [e, f]);
  const b = r === "docked", x = Rt + s;
  let p;
  c ? p = {
    top: 0,
    left: 0,
    right: 0,
    bottom: d,
    borderRadius: 0
  } : b ? p = {
    top: 0,
    right: 0,
    bottom: 0,
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : p = {
    bottom: x,
    ...n === "left" ? { left: a + Rt } : { right: Rt },
    width: i,
    maxWidth: `calc(100vw - ${Rt * 2}px)`,
    height: `min(${wi}px, calc(100vh - ${x + Rt}px))`,
    borderRadius: "12px"
  };
  const h = /* @__PURE__ */ t(
    Fr,
    {
      role: b ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: b ? Ii : _i,
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
  return b ? /* @__PURE__ */ t(us, { direction: "left", in: e, mountOnEnter: !0, children: h }) : /* @__PURE__ */ t(
    ds,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: h
    }
  );
}, Oi = 180, Zo = 250, Ti = "#01584F", Ai = ({
  text: e,
  testId: o
}) => {
  const r = l.useRef(null), [n, i] = l.useState(!1), a = l.useCallback(() => {
    const s = r.current;
    s && i(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    a();
  }, [a, e]), l.useEffect(() => {
    const s = r.current;
    if (!s)
      return;
    const c = new ResizeObserver(() => a());
    return c.observe(s), () => c.disconnect();
  }, [a]), /* @__PURE__ */ t(
    Re,
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
}, wn = (e, o, r, n) => {
  const i = e ? 48 : 44, a = e ? "text.secondary" : o, s = e ? Ti : o;
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
    color: r ? "#ffffff" : a,
    backgroundColor: r ? s : "transparent",
    "&:hover": {
      backgroundColor: r ? s : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : a
    }
  } : {
    width: i,
    height: i,
    color: r ? "#ffffff" : a,
    backgroundColor: r ? s : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? s : "action.hover",
      borderRadius: "4px"
    }
  } };
}, In = ({ link: e }) => /* @__PURE__ */ R(Ae, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Ai,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), _n = (e, o, r) => r ? e : /* @__PURE__ */ t(Re, { title: o, placement: "right", arrow: !0, children: e }), $i = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: a,
  railShowTitles: s
}) => {
  const c = Ne(), [d, f] = l.useState(null), [b, x] = l.useState(!1), p = l.useRef(
    null
  ), h = l.useRef(null), E = l.useRef(null), _ = l.useRef(!1), m = l.useRef(!1), g = l.useId(), S = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, w = () => {
    S(), p.current = setTimeout(() => {
      x(!1), p.current = null;
    }, Oi);
  }, y = () => {
    S(), x(!0);
  };
  l.useEffect(() => {
    if (!b)
      return;
    const A = ($) => {
      var O;
      $.key === "Escape" && (x(!1), (O = E.current) == null || O.focus());
    };
    return document.addEventListener("keydown", A), () => document.removeEventListener("keydown", A);
  }, [b]), l.useEffect(() => {
    if (!b || !m.current)
      return;
    const A = globalThis.requestAnimationFrame(() => {
      var O;
      const $ = (O = h.current) == null ? void 0 : O.querySelector(
        '[role="menuitem"]'
      );
      $ == null || $.focus(), m.current = !1;
    });
    return () => cancelAnimationFrame(A);
  }, [b]);
  const v = je(e, o), { activeBg: I, sx: D } = wn(
    i,
    n,
    v,
    s
  ), X = /* @__PURE__ */ t(
    ve,
    {
      ref: E,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        _.current || y();
      },
      onBlur: (A) => {
        var O;
        const $ = A.relatedTarget;
        $ && ((O = h.current) != null && O.contains($)) || w();
      },
      onKeyDown: (A) => {
        A.key === "ArrowDown" && (A.preventDefault(), m.current = !0, y());
      },
      onClick: (A) => {
        A.preventDefault(), A.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": b,
      "aria-controls": b ? g : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: D,
      children: s ? /* @__PURE__ */ t(In, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ R(
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
            ref: f,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              _.current = !0, y();
            },
            onMouseLeave: () => {
              _.current = !1, w();
            },
            children: _n(X, e.text, s)
          }
        ),
        /* @__PURE__ */ t(
          Nr,
          {
            open: b && !!d,
            anchorEl: d,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (A) => A.zIndex.modal },
            children: /* @__PURE__ */ t(
              Fr,
              {
                ref: h,
                elevation: 0,
                onMouseEnter: S,
                onMouseLeave: w,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: a,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: c.shadows[8],
                  maxWidth: Zo,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Br,
                  {
                    id: g,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Zo
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
  function K(A, $, O) {
    return A.flatMap((P) => {
      const te = ut($, P);
      return pt(P) ? [
        /* @__PURE__ */ t(
          fs,
          {
            disableSticky: !0,
            title: P.text,
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
            children: P.text
          },
          te
        ),
        ...K(P.subitems, te, O + 1)
      ] : [
        /* @__PURE__ */ R(
          Ve,
          {
            role: "menuitem",
            title: P.text,
            disabled: !P.path,
            selected: De(P, o),
            onClick: (le) => {
              le.preventDefault(), P.path && (r == null || r(P.path)), x(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + O * 1.5,
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
              P.icon ? /* @__PURE__ */ t(Se, { children: P.icon }) : null,
              /* @__PURE__ */ t(
                Le,
                {
                  primary: P.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          te
        )
      ];
    });
  }
}, Mi = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: a
}) => {
  const s = !!(e.path && o === e.path), { sx: c } = wn(
    i,
    n,
    s,
    a
  );
  return _n(
    /* @__PURE__ */ t(
      ve,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (d) => {
          d.preventDefault(), d.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: c,
        children: a ? /* @__PURE__ */ t(In, { link: e }) : e.icon
      }
    ),
    e.text,
    a
  );
}, Di = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(qe, { sx: { width: "60%", borderColor: "divider" } })
  }
), ki = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(qe, { sx: { width: "60%", borderColor: "divider" } })
  }
), Jo = (e, o) => e.map((r, n) => /* @__PURE__ */ R(l.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(Di, {}) : null
] }, n)), Li = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: a,
  railShowTitles: s = !1
}) => {
  const c = (f, b) => pt(f) ? /* @__PURE__ */ t(
    $i,
    {
      link: f,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: b,
      surfaceBackgroundColor: a,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ t(
    Mi,
    {
      link: f,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: b,
      railShowTitles: s
    }
  ), d = s ? 1.25 : 1;
  return /* @__PURE__ */ R(
    Ae,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: d
      },
      children: [
        Jo(e, (f) => c(f, !1)),
        o.length > 0 ? /* @__PURE__ */ R(Te, { children: [
          /* @__PURE__ */ t(ki, {}),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Ae, { gap: d, alignItems: "center", children: Jo(
            o,
            (f) => c(f, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Ni = (e) => e ? xn(e) : "USER", Fi = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), Qo = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Mr = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, Jr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  hs,
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
    children: Fi(e)
  }
), Cn = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ R(Te, { children: [
  /* @__PURE__ */ t(Jr, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ R(
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
          ie,
          {
            variant: "body2",
            sx: { ...Qo, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ie,
          {
            variant: "caption",
            sx: { ...Qo, opacity: 0.8, color: "inherit" },
            children: Ni(o)
          }
        )
      ]
    }
  )
] }), en = {
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
}, On = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: i,
  showNotifications: a,
  notificationCount: s,
  onNotificationsClick: c,
  userName: d = "User",
  userRole: f,
  userAvatar: b,
  menuItems: x = [],
  showSettings: p,
  onSettingsClick: h,
  showThemeToggler: E,
  theme: _,
  onThemeToggle: m,
  onLogout: g
}) => {
  const S = (w) => () => {
    o(), w == null || w();
  };
  return /* @__PURE__ */ R(
    ms,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: en[r].anchor,
      transformOrigin: en[r].transform,
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
              Cn,
              {
                name: d,
                role: f,
                avatar: b,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(qe, {}),
        a && /* @__PURE__ */ R(Ve, { onClick: S(c), children: [
          /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(mn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Le, { children: "Notifications" }),
          /* @__PURE__ */ t(Mr, { count: s })
        ] }),
        x.map((w) => /* @__PURE__ */ R(Ve, { onClick: S(w.onClick), children: [
          w.icon && /* @__PURE__ */ t(Se, { children: w.icon }),
          /* @__PURE__ */ t(Le, { inset: !w.icon, children: w.label }),
          /* @__PURE__ */ t(Mr, { count: w.badge })
        ] }, w.key)),
        p && /* @__PURE__ */ R(Ve, { onClick: S(h), children: [
          /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(ps, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Le, { children: "Settings" })
        ] }),
        E && [
          /* @__PURE__ */ t(qe, {}, "theme-divider"),
          /* @__PURE__ */ R(C, { sx: { px: 1.5, py: 1 }, children: [
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
            /* @__PURE__ */ R(
              gs,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: _,
                onChange: (w, y) => y && y !== _ && (m == null ? void 0 : m()),
                disabled: !m,
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
                  /* @__PURE__ */ t(To, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(To, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(qe, {}),
        /* @__PURE__ */ R(
          Ve,
          {
            onClick: S(g),
            sx: {
              color: _ === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(Se, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(hn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Le, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Tn = 64, Bi = 2, Et = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: i,
  activeColor: a,
  activeBackground: s,
  ariaLabel: c,
  haspopup: d,
  isPage: f = !1,
  testId: b
}) => /* @__PURE__ */ R(
  Je,
  {
    onClick: r,
    "aria-label": c ?? e,
    "aria-haspopup": d,
    "aria-expanded": d ? n : void 0,
    "aria-current": f && n ? "page" : void 0,
    "data-testid": b,
    sx: {
      flex: "1 1 0",
      minWidth: 0,
      height: "100%",
      flexDirection: "column",
      gap: 0.25,
      color: n ? a : i,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: a,
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
            bgcolor: n ? s : "transparent",
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
), Wi = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: a,
  assistantActive: s,
  showProfile: c,
  background: d,
  color: f,
  activeColor: b,
  activeBackground: x,
  pinnedLinks: p = [],
  activePath: h,
  onLinkClick: E,
  ..._
}) => {
  const m = p.filter((D) => D.path).slice(0, Bi), [g, S] = l.useState(
    null
  ), { userName: w = "User", userAvatar: y, avatarColor: v } = _, I = { color: f, activeColor: b, activeBackground: x };
  return /* @__PURE__ */ R(
    Fr,
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
        height: `calc(${Tn}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: d,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Et,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(pn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...I
          }
        ),
        m.map((D) => /* @__PURE__ */ t(
          Et,
          {
            label: D.text,
            icon: D.icon,
            onClick: () => E == null ? void 0 : E(D.path),
            active: je(D, h),
            isPage: !0,
            testId: `mobile-nav-link-${D.text}`,
            ...I
          },
          D.path
        )),
        i && /* @__PURE__ */ t(
          Et,
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
                  borderColor: s ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(It, { size: 18 })
              }
            ),
            onClick: a,
            active: s,
            testId: "mobile-nav-nexa",
            ...I
          }
        ),
        r && /* @__PURE__ */ t(
          Et,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Wr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...I
          }
        ),
        c && /* @__PURE__ */ R(Te, { children: [
          /* @__PURE__ */ t(
            Et,
            {
              label: "Account",
              ariaLabel: `Account menu for ${w}`,
              icon: /* @__PURE__ */ t(
                Jr,
                {
                  name: w,
                  avatar: y,
                  color: v,
                  size: 26
                }
              ),
              onClick: (D) => S(D.currentTarget),
              active: !!g,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...I
            }
          ),
          /* @__PURE__ */ t(
            On,
            {
              anchorEl: g,
              onClose: () => S(null),
              placement: "above-end",
              width: 280,
              ..._
            }
          )
        ] })
      ]
    }
  );
}, Pi = ({
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
    children: /* @__PURE__ */ R(
      Ae,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(C, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            fn,
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
), zi = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: i,
  brandMenuOpen: a,
  background: s,
  color: c,
  brandColor: d = c,
  endContent: f
}) => /* @__PURE__ */ t(
  bs,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: e,
      background: s,
      color: c,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ R(ys, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        ve,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: c },
          children: /* @__PURE__ */ t(pn, {})
        }
      ),
      /* @__PURE__ */ t(
        Jt,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: i,
          menuOpen: a,
          color: d,
          testId: "mobile-brand"
        }
      ),
      f ? /* @__PURE__ */ t(C, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: f }) : null
    ] })
  }
), Qr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: a
}) => {
  const s = Vr(), c = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Re,
    {
      title: c,
      placement: i,
      arrow: !0,
      ...s,
      children: /* @__PURE__ */ t(
        ve,
        {
          onClick: o,
          "aria-label": c,
          "data-testid": a,
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
            gn,
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
              children: /* @__PURE__ */ t(mn, {})
            }
          )
        }
      )
    }
  );
}, An = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Gi = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, tn = pe(At), rn = pe(or), Ui = 20, on = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Hi = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const a = Ne().palette.mode === "dark", s = Mt(), c = l.useRef(null), d = l.useRef(null), f = (p) => {
    var h;
    p !== e && (o == null || o()), (h = (p === "light" ? c : d).current) == null || h.focus();
  }, b = (p) => {
    if (!(p.key === "Tab" || p.key === "Escape"))
      switch (p.stopPropagation(), p.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          p.preventDefault(), f(e === "light" ? "dark" : "light");
          break;
        case "Home":
          p.preventDefault(), f("light");
          break;
        case "End":
          p.preventDefault(), f("dark");
          break;
      }
  }, x = (p, h, E, _) => {
    const m = e === p;
    return /* @__PURE__ */ t(
      Je,
      {
        ref: _,
        role: "radio",
        "aria-checked": m,
        "aria-label": h,
        tabIndex: m ? 0 : -1,
        onClick: () => f(p),
        "data-testid": `theme-segment-${p}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: "999px",
          // White on dark: the accent is too dim against a dark surface
          color: m ? a ? "#ffffff" : r : "text.secondary",
          bgcolor: m ? n : "transparent",
          ...i && m ? jr(a, s) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...i && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": m ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: a ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${st(r, 0.6)}`
          },
          ...An
        },
        children: /* @__PURE__ */ t(E, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ R(
    Ae,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: b,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        x("light", "Light", Ss, c),
        x("dark", "Dark", vs, d)
      ]
    }
  );
}, Xi = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: i,
  userName: a,
  userEmail: s,
  roleLabel: c,
  accentColor: d,
  tint: f,
  showThemeToggler: b,
  theme: x,
  onThemeToggle: p,
  onProfileClick: h,
  onLinkClick: E,
  menuItems: _ = [],
  onLogout: m,
  glass: g = !1
}) => {
  const S = Ne(), w = S.palette.mode === "dark", y = l.useRef(null), v = Yr({
    enabled: g,
    isDark: w,
    selector: on,
    radius: 10
  }), [I, D] = l.useState(null);
  l.useEffect(() => {
    if (!I || typeof ResizeObserver > "u")
      return;
    const O = new ResizeObserver(() => {
      var P;
      (P = y.current) == null || P.updatePosition();
    });
    return O.observe(I), () => O.disconnect();
  }, [I]);
  const X = (O) => {
    r(), O == null || O();
  }, K = (O) => {
    r(), O.onClick ? O.onClick() : O.path && (E == null || E(O.path));
  }, A = { borderRadius: "8px", py: 1, gap: 0.5 }, $ = /* @__PURE__ */ R(Ae, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ R(C, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ie, { noWrap: !0, sx: { fontWeight: 600 }, children: a }),
      s ? /* @__PURE__ */ t(
        ie,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: s
        }
      ) : null,
      c ? /* @__PURE__ */ t(
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
          children: c
        }
      ) : null,
      h ? /* @__PURE__ */ t(
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
            color: w ? "#ffffff" : d,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    Pr,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: y,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...g ? {
        slots: { transition: Lr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: D,
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
      children: /* @__PURE__ */ R(
        C,
        {
          "data-testid": "account-menu",
          "data-glass": g ? "true" : void 0,
          sx: g ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${Ui}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${on}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Gi, width: n, minWidth: n },
          children: [
            g ? /* @__PURE__ */ t(
              mt,
              {
                isDark: w,
                solid: S.palette.background.paper,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Xr} ${tn.duration}ms ${tn.easing} both`,
                  [Ie]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ R(
              C,
              {
                ...v.containerProps,
                sx: g ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Kr} ${rn.duration}ms ${rn.easing} 70ms both`,
                  [Ie]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  v.lens,
                  h ? /* @__PURE__ */ t(
                    Je,
                    {
                      onClick: () => X(h),
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
                        ...An
                      },
                      children: $
                    }
                  ) : /* @__PURE__ */ t(C, { "data-testid": "account-menu-header", children: $ }),
                  /* @__PURE__ */ t(qe, {}),
                  b ? /* @__PURE__ */ R(
                    C,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...A,
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
                        /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(Rs, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ie, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Hi,
                          {
                            glass: g,
                            mode: x,
                            onToggle: p,
                            accentColor: d,
                            tint: f
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ R(
                    Br,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: b ? 0 : 0.5, pb: 0.5 },
                      children: [
                        _.map((O) => /* @__PURE__ */ R(
                          Ve,
                          {
                            onClick: () => K(O),
                            "data-testid": `menu-item-${O.key}`,
                            sx: A,
                            children: [
                              /* @__PURE__ */ t(Se, { children: O.icon }),
                              /* @__PURE__ */ t(ie, { sx: { flex: 1 }, children: O.label }),
                              /* @__PURE__ */ t(Mr, { count: O.badge })
                            ]
                          },
                          O.key
                        )),
                        m ? /* @__PURE__ */ t(qe, { component: "li", sx: { my: 0.5 } }) : null,
                        m ? /* @__PURE__ */ R(
                          Ve,
                          {
                            onClick: () => X(m),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...A,
                              color: w ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(Se, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(hn, { fontSize: "small" }) }),
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
  title: a,
  onBrandClick: s,
  brandMenuOpen: c,
  brandColor: d,
  headerBackgroundColor: f,
  headerForegroundColor: b,
  activeAccentColor: x = "#01584f",
  groupAccentColor: p,
  activeForegroundColor: h,
  foregroundColor: E,
  surfaceBackgroundColor: _,
  collapsed: m,
  expandedWidth: g,
  collapsedWidth: S,
  topContent: w,
  submenuMode: y,
  color: v,
  hoverColor: I,
  avatarColor: D,
  showProfile: X = !0,
  userName: K = "User",
  userEmail: A,
  userRole: $,
  userAvatar: O,
  showNotifications: P = !0,
  notificationCount: te = 0,
  onNotificationsClick: le,
  whatsNewCount: he = 0,
  onProfileClick: z,
  menuItems: W,
  onLogout: H,
  theme: G = "light",
  showThemeToggler: q = !0,
  onThemeToggle: M
}) => {
  const k = Ne(), j = k.palette.mode === "dark", L = _ ?? (j ? k.palette.background.paper : "#ffffff"), V = v ?? E ?? (j ? k.palette.text.primary : x), Z = I ?? p ?? Qt(x), Ge = D ?? x, ue = l.useRef(null), [_e, me] = l.useState(!1), ge = $ ? xn($) : void 0, de = (it) => /* @__PURE__ */ t(
    Jr,
    {
      name: K,
      avatar: O,
      color: Ge,
      size: it
    }
  ), ne = te + he, fe = P ? /* @__PURE__ */ t(
    Qr,
    {
      count: ne,
      onClick: le,
      color: V,
      hoverColor: Z,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, xe = X ? /* @__PURE__ */ R(
    Je,
    {
      ref: ue,
      onClick: () => me(!0),
      "aria-haspopup": "menu",
      "aria-expanded": _e,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: m ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: _e ? Z : "transparent",
        "&:hover": { bgcolor: Z },
        ...Ki
      },
      children: [
        m && P ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            gn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !ne,
              children: de(36)
            }
          )
        ) : de(m ? 36 : 40),
        m ? null : /* @__PURE__ */ R(C, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ie,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: V, lineHeight: 1.3 },
              children: K
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
                color: V,
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
  ) : null, Ce = !!fe && (!m || !xe);
  return /* @__PURE__ */ R(
    C,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": m ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          Tr,
          {
            mainLinks: e,
            secondaryLinks: o,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: i,
            title: a,
            onBrandClick: s,
            brandMenuOpen: c,
            brandColor: d,
            headerBackgroundColor: f,
            headerForegroundColor: b,
            activeAccentColor: x,
            groupAccentColor: p,
            activeForegroundColor: h,
            foregroundColor: E,
            surfaceBackgroundColor: L,
            collapsed: m,
            expandedWidth: g,
            collapsedWidth: S,
            topContent: w,
            footer: xe || Ce ? /* @__PURE__ */ R(
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
                  Ce ? fe : null
                ]
              }
            ) : void 0,
            submenuMode: y
          }
        ),
        X ? /* @__PURE__ */ t(
          Xi,
          {
            open: _e,
            anchorEl: ue.current,
            onClose: () => me(!1),
            width: Math.max(g - 16, 240),
            renderAvatar: de,
            userName: K,
            userEmail: A,
            roleLabel: ge,
            accentColor: x,
            tint: Z,
            showThemeToggler: q,
            theme: G,
            onThemeToggle: M,
            onProfileClick: z,
            onLinkClick: n,
            menuItems: W,
            onLogout: H,
            glass: y === "flyout"
          }
        ) : null
      ]
    }
  );
}, nn = pe(At), sn = pe(or), Vi = 20, an = 260, Yi = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, qi = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: a,
  glass: s = !1
}) => {
  const c = Ne(), d = c.palette.mode === "dark", f = !!e, b = Yr({
    enabled: s,
    isDark: d,
    selector: ".MuiMenuItem-root",
    radius: 12
  }), x = /* @__PURE__ */ t(
    Br,
    {
      autoFocusItem: f,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((p) => {
        const h = p.key === n, E = p.accentColor ?? a;
        return /* @__PURE__ */ R(
          Ve,
          {
            selected: h,
            onClick: () => i(p),
            "data-testid": `platform-item-${p.key}`,
            sx: {
              borderRadius: s ? "12px" : "8px",
              py: 1,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...s && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(Se, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                C,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: E,
                    boxShadow: s ? `0 0 0 3px ${d ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Le,
                {
                  primary: p.name,
                  secondary: p.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              h ? /* @__PURE__ */ t(
                Es,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: E }
                }
              ) : null
            ]
          },
          p.key
        );
      })
    }
  );
  return /* @__PURE__ */ t(
    Pr,
    {
      open: f,
      anchorEl: e,
      onClose: o,
      onClick: (p) => p.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...s ? {
        slots: { transition: Lr },
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
          "data-glass": s ? "true" : void 0,
          sx: s ? {
            position: "relative",
            minWidth: an,
            borderRadius: `${Vi}px`
          } : { ...Yi, minWidth: an },
          children: s ? /* @__PURE__ */ R(Te, { children: [
            /* @__PURE__ */ t(
              mt,
              {
                isDark: d,
                solid: c.palette.background.paper,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Xr} ${nn.duration}ms ${nn.easing} both`,
                  [Ie]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ R(
              C,
              {
                ...b.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Kr} ${sn.duration}ms ${sn.easing} 70ms both`,
                  [Ie]: { animation: "none" }
                },
                children: [
                  b.lens,
                  x
                ]
              }
            )
          ] }) : x
        }
      )
    }
  );
}, Zi = ({ children: e, anchorEl: o, ...r }) => {
  const n = l.useRef(null), i = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ R(
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
          qi,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, Ji = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: i = 0,
  ...a
}) => {
  var w;
  const {
    avatarColor: s,
    showNotifications: c,
    notificationCount: d,
    onNotificationsClick: f,
    userName: b = "User",
    userRole: x,
    userAvatar: p
  } = a, h = l.useRef(null), [E, _] = l.useState(
    null
  ), m = !!E, g = l.useRef(e);
  if (l.useEffect(() => {
    e && !g.current && _(null), g.current = e;
  }, [e]), !c && !n)
    return null;
  const S = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ R(Te, { children: [
    /* @__PURE__ */ R(
      Ae,
      {
        ref: h,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Re,
            {
              title: e ? b : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                Je,
                {
                  onClick: () => _(h.current),
                  "aria-label": `Account menu for ${b}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": m,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: m ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...S
                  },
                  children: /* @__PURE__ */ t(
                    Cn,
                    {
                      name: b,
                      role: x,
                      avatar: p,
                      avatarColor: s,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          c && /* @__PURE__ */ t(
            Qr,
            {
              count: d + i,
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
      On,
      {
        anchorEl: E,
        onClose: () => _(null),
        placement: e ? "beside" : "above",
        width: e || (w = h.current) == null ? void 0 : w.clientWidth,
        ...a
      }
    )
  ] });
}, Qi = 120, ea = 300, cn = pe(At), ln = pe(or), ta = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, ra = 'input, textarea, [contenteditable="true"]', Dr = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(ra)) == null || o.focus();
}, oa = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: a,
  hoverColor: s
}) => {
  const c = Vr(), d = l.useContext(sr), f = l.useRef(null), [b, x] = l.useState(null);
  return l.useEffect(() => {
    o === "full" && n && (Dr(f.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    C,
    {
      ref: f,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && d ? /* @__PURE__ */ t(
    na,
    {
      search: e,
      color: a,
      railTooltip: c
    }
  ) : /* @__PURE__ */ R(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Re, { title: "Search", placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
          ve,
          {
            "aria-label": "Search",
            onClick: (p) => o === "expand" ? r == null ? void 0 : r() : x(p.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: a,
              borderRadius: "8px",
              "&:hover": { bgcolor: s }
            },
            children: /* @__PURE__ */ t(Wr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Pr,
          {
            open: !!b,
            anchorEl: b,
            onClose: () => x(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => Dr(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, na = ({ search: e, color: o, railTooltip: r }) => {
  const n = Ne().palette.mode === "dark", i = ks(n, ft(o, n ? 0.3 : 0.35)), a = l.useRef(null), s = l.useRef(null), [c, d] = l.useState(!1), f = l.useRef(!1), b = l.useRef(void 0), x = l.useRef(void 0), p = () => {
    clearTimeout(b.current), clearTimeout(x.current);
  }, h = l.useCallback(() => {
    p(), f.current = !1, d(!1);
  }, []), E = () => {
    clearTimeout(x.current), c || (clearTimeout(b.current), b.current = setTimeout(
      () => d(!0),
      Qi
    ));
  }, _ = () => {
    clearTimeout(b.current), clearTimeout(x.current), x.current = setTimeout(() => {
      !f.current && !ta(s.current) && d(!1);
    }, ea);
  };
  return l.useEffect(() => p, []), l.useEffect(() => {
    if (!c)
      return;
    const m = setTimeout(() => Dr(s.current)), g = (w) => {
      var v, I;
      const y = w.target;
      !((v = s.current) != null && v.contains(y)) && !((I = a.current) != null && I.contains(y)) && h();
    }, S = (w) => {
      var y;
      w.key === "Escape" && (h(), (y = a.current) == null || y.focus());
    };
    return document.addEventListener("pointerdown", g), document.addEventListener("keydown", S), () => {
      clearTimeout(m), document.removeEventListener("pointerdown", g), document.removeEventListener("keydown", S);
    };
  }, [c, h]), /* @__PURE__ */ R(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Re,
          {
            title: c ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              ve,
              {
                ref: a,
                "aria-label": "Search",
                "aria-expanded": c,
                onMouseEnter: E,
                onMouseLeave: _,
                onClick: () => {
                  p(), f.current = !0, d(!0);
                },
                sx: { width: 44, height: 44, color: o, borderRadius: "12px" },
                children: /* @__PURE__ */ t(Wr, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Nr,
          {
            open: c,
            anchorEl: a.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ R(
              C,
              {
                ref: s,
                "data-testid": "sidebar-search-card",
                onMouseEnter: E,
                onMouseLeave: _,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: "18px"
                },
                children: [
                  /* @__PURE__ */ t(
                    mt,
                    {
                      isDark: n,
                      solid: n ? "#1e2430" : "#ffffff",
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${Xr} ${cn.duration}ms ${cn.easing} both`,
                        [Ie]: { animation: "none" }
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
                        animation: `${Kr} ${ln.duration}ms ${ln.easing} 60ms both`,
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
}, sa = 100, ia = () => {
  const e = l.useRef(null), o = l.useRef(void 0), r = l.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = l.useState(!1), [a, s] = l.useState(!1), c = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return l.useEffect(() => {
    const f = (x) => {
      r.current.has(x) || (c(), i(!1));
    }, b = () => {
      c(), i(!1);
    };
    return document.addEventListener("mouseover", f), document.documentElement.addEventListener("mouseleave", b), () => {
      c(), document.removeEventListener("mouseover", f), document.documentElement.removeEventListener(
        "mouseleave",
        b
      );
    };
  }, []), l.useEffect(() => {
    if (!a)
      return;
    const f = (b) => {
      var x;
      (x = e.current) != null && x.contains(b.target) || s(!1);
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [a]), {
    expanded: n || a,
    pin: () => s(!0),
    rootProps: {
      ref: e,
      onMouseOver: (f) => {
        r.current.add(f.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, i(!0);
        }, sa));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (f) => {
        const b = f.relatedTarget;
        b && !f.currentTarget.contains(b) && s(!1);
      },
      onKeyDown: (f) => {
        f.key === "Escape" && s(!1);
      }
    }
  };
}, aa = 100, dn = 80, Er = 56, ca = 300, wr = 288, wt = 72, Ir = 68, Yt = 8, la = 24, da = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", ua = 68, fa = { xs: 2, md: 5 }, pa = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), ha = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, pc = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: a = !1,
  sidebarVariant: s = "rail",
  sidebarSubmenu: c = "expand",
  mobileNavigation: d = "bottom-bar",
  mobileBottomBarLinks: f,
  logo: b,
  onBrandClick: x,
  searchComponent: p,
  brandColor: h,
  contentPadding: E = fa,
  userMenuItems: _,
  sidebarBackgroundColor: m,
  sidebarHeaderBackgroundColor: g,
  groupAccentColor: S,
  activeSidebarForegroundColor: w,
  enableRefreshToken: y = !1,
  activePath: v,
  onLinkClick: I,
  showProfile: D = !0,
  userName: X,
  userRole: K,
  userAvatar: A,
  userEmail: $,
  onLogout: O,
  showSettings: P = !0,
  onSettingsClick: te,
  onProfileClick: le,
  showNotifications: he = !0,
  notificationCount: z = 0,
  NotificationSidebarContent: W,
  whatsNewCount: H = 0,
  onNotificationsClick: G,
  platforms: q,
  currentPlatformKey: M,
  onPlatformSelect: k,
  onVerify: j,
  alertProps: L,
  style: V,
  sidebarStyles: Z,
  contentStyles: Ge,
  accentColor: ue,
  sidebarAccentColor: _e,
  sidebarForegroundColor: me,
  contentBackgroundColor: ge,
  theme: de = "light",
  showThemeToggler: ne = !1,
  onThemeToggle: fe,
  GlobalChatSidebar: xe,
  useChatSidebar: Ce,
  chatPanelMode: Dt = "docked",
  chatPanelPosition: it = "right",
  chatPanelWidth: kt = 420,
  onChatClose: ir,
  showAssistant: Qe = !1,
  assistantPlacement: gt = "sidebar",
  assistantShortcut: Lt = "j",
  onAssistantClick: Ue,
  assistantActive: at = !1,
  assistantBusy: Nt = !1,
  customNavbar: Ft,
  customNavbarProps: ar,
  redirectToLogin: He,
  apiBaseUrl: u
}) => {
  const F = ts(), B = rs(F.breakpoints.down("md")), N = Io(
    () => un(Si(de)),
    [de]
  ), U = de === "dark", J = ue ?? "#01584f", Q = _e ?? J, re = ge ?? (U ? "hsl(220, 35%, 9%)" : "#f2f9fc"), se = s === "collapsible", et = s === "panel", $n = et && i && !B, Xe = s === "rail-labeled", Mn = se || Xe, tt = m ?? (U ? "hsl(220, 30%, 7%)" : "#ffffff"), cr = g ?? tt, Fe = me ?? (U ? "#ffffff" : Q), xt = S ?? Qt(Fe), bt = g ? _r(cr) : Fe, eo = (T) => /* @__PURE__ */ t(
    ae,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: T,
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
  ), Bt = h ?? bt, [to, lr] = ot(
    null
  ), dr = ((q == null ? void 0 : q.length) ?? 0) > 1, Dn = _o(() => lr(null), []), kn = (T) => {
    lr(null), k ? k(T) : T.key !== M && T.url && window.location.assign(T.url);
  }, ro = (T) => dr ? /* @__PURE__ */ t(
    Zi,
    {
      anchorEl: to,
      onClose: Dn,
      platforms: q,
      currentKey: M,
      onSelect: kn,
      accentColor: J,
      glass: c === "flyout" && (se || et) && !B,
      children: T
    }
  ) : T, Wt = dr ? (T) => lr(T.currentTarget) : x, Pt = dr ? !!to : void 0, ur = ro(
    b ?? eo(Bt)
  ), Ln = ro(
    b ?? eo(h ?? Fe)
  ), fr = ia(), $e = c === "flyout" && (se || et), Me = $e || !fr.expanded, oo = $e ? "popover" : "expand", no = $e ? Ir : wt, so = $e ? "transparent" : tt, io = $e && !g ? "transparent" : cr, [Nn, ao] = ot(!1), Fn = _o(() => ao(!1), []);
  let be = 0;
  i && !B && (Xe ? be = dn : $e ? be = Ir + 2 * Yt : se || et ? be = wt : be = aa);
  const [co, rt] = ot(!1), [lo, pr] = ot(!1), ye = B && d === "bottom-bar", uo = `calc(${Tn}px + env(safe-area-inset-bottom, 0px))`, [hr, fo] = ot({ open: !1, tab: "notifications" }), po = () => fo((T) => ({ ...T, open: !1 })), Bn = he && !!W, [Wn, Pn] = ot(!0), [zn, Gn] = ot(!1), mr = Ce == null ? void 0 : Ce(), ho = (mr == null ? void 0 : mr.isOpen) ?? !1, mo = Dt === "floating" ? "floating" : "docked", Un = mo === "docked" && ho && xe && !B ? kt : 0, zt = vr(j), go = vr(!1), xo = Io(
    () => vi(u),
    [u]
  );
  Ht(() => {
    zt.current = j;
  }, [j]);
  const gr = vr(Ue);
  gr.current = Ue;
  const yt = Qe && Lt ? Lt.toLowerCase() : null;
  Ht(() => {
    if (!yt)
      return;
    const T = (oe) => {
      (oe.metaKey || oe.ctrlKey) && !oe.altKey && !oe.shiftKey && oe.key.toLowerCase() === yt && gr.current && (oe.preventDefault(), gr.current());
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [yt]);
  const bo = (T) => {
    const oe = O(T);
    oe instanceof Promise && oe.catch((Ke) => {
      console.error("Error in logout handler:", Ke);
    });
  };
  if (Ht(() => {
    (() => {
      var oe;
      try {
        const { isAuthenticated: Ke } = bi();
        if (!Ke) {
          console.log("No session found, redirecting to login"), Tt(), He();
          return;
        }
        if (!go.current) {
          const { user: St, error: yr } = yi();
          if (St && !yr) {
            const Zn = {
              name: St.name || "",
              email: St.email || "",
              profilePicture: St.profilePicture || "",
              role: St.role || ""
            };
            go.current = !0, (oe = zt.current) == null || oe.call(zt, Zn);
          } else
            yr && console.error("Error getting user data:", yr);
        }
        Gn(!0);
      } catch (Ke) {
        console.error("Error checking session:", Ke), Tt(), He();
      } finally {
        Pn(!1);
      }
    })();
  }, [He]), Ht(() => {
    y && Ri(xo, He);
  }, [y, xo]), Wn)
    return /* @__PURE__ */ t(wo, { theme: N, children: /* @__PURE__ */ t(Cr.Provider, { value: Q, children: /* @__PURE__ */ R(
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
            os,
            {
              size: 60,
              thickness: 4,
              sx: { color: J }
            }
          ),
          /* @__PURE__ */ t(ae, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) }) });
  if (!zn)
    return null;
  const vt = p ?? (Ft ? /* @__PURE__ */ t(Ft, { ...ar }) : null), Hn = (T) => {
    rt(!1), pr(!1), fo({ open: !0, tab: T });
  }, xr = W && (() => Hn("notifications")), Xn = z + H, yo = {
    avatarColor: Q,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: _ == null ? void 0 : _.map(
      (T) => T.onClick || !T.path ? T : { ...T, onClick: () => I == null ? void 0 : I(T.path) }
    ),
    showNotifications: he,
    notificationCount: z,
    whatsNewCount: H,
    onNotificationsClick: xr,
    showProfile: D,
    userName: X,
    userRole: K,
    userAvatar: A,
    showSettings: P,
    onSettingsClick: te,
    showThemeToggler: ne,
    theme: de,
    onThemeToggle: fe,
    onLogout: bo
  }, br = (T) => /* @__PURE__ */ t(
    Ji,
    {
      ...yo,
      compact: T,
      color: Fe,
      hoverColor: xt
    }
  ), vo = yt ? [pa() ? "⌘" : "Ctrl", yt.toUpperCase()] : void 0, Kn = (T) => Qe && gt === "sidebar" ? /* @__PURE__ */ t(
    qo,
    {
      variant: T ? "sidebar-icon" : "sidebar",
      onClick: Ue,
      active: at,
      busy: Nt,
      shortcutKeys: vo,
      accentColor: Fe
    }
  ) : null, jn = (T) => vt ? /* @__PURE__ */ t(
    oa,
    {
      search: vt,
      mode: T,
      onExpand: () => {
        fr.pin(), ao(!0);
      },
      autoFocus: Nn,
      onAutoFocused: Fn,
      color: Fe,
      hoverColor: xt
    }
  ) : null, Gt = (T) => {
    const oe = Kn(T !== "full"), Ke = jn(T);
    return oe || Ke ? /* @__PURE__ */ R(
      is,
      {
        spacing: 1.5,
        sx: { alignItems: T === "full" ? "stretch" : "center" },
        children: [
          oe,
          Ke
        ]
      }
    ) : void 0;
  }, So = () => /* @__PURE__ */ t(
    Tr,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: v,
      onLinkClick: I,
      showHeaderBar: se,
      logo: ur,
      title: n,
      onBrandClick: Wt,
      brandMenuOpen: Pt,
      brandColor: Bt,
      headerBackgroundColor: se ? io : void 0,
      headerForegroundColor: se ? bt : void 0,
      activeAccentColor: Q,
      groupAccentColor: S,
      activeForegroundColor: w,
      foregroundColor: me,
      surfaceBackgroundColor: so,
      collapsed: Xe || Me,
      showLabels: Xe,
      expandedWidth: wr,
      collapsedWidth: Xe ? dn : no,
      topContent: Gt(
        Xe ? "popover" : Me ? oo : "full"
      ),
      footer: br(Xe || Me),
      submenuMode: $e ? "flyout" : "inline"
    }
  ), Ro = (T) => $e ? Vn(T) : Yn(T), Vn = (T) => /* @__PURE__ */ t(
    ae,
    {
      component: "aside",
      sx: {
        width: be,
        minWidth: be,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (oe) => oe.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: re
      },
      children: /* @__PURE__ */ R(
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
            width: Ir,
            borderRadius: `${la}px`,
            display: "flex",
            flexDirection: "column",
            ...Z
          },
          children: [
            /* @__PURE__ */ t(
              mt,
              {
                isDark: U,
                solid: tt,
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
                children: T
              }
            )
          ]
        }
      )
    }
  ), Yn = (T) => /* @__PURE__ */ t(
    ae,
    {
      component: "aside",
      sx: {
        width: wt,
        minWidth: wt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (oe) => oe.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        ae,
        {
          ...$e ? {} : fr.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Me ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Me ? wt : wr,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: tt,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Me ? "none" : `4px 0 24px rgba(0, 0, 0, ${U ? 0.5 : 0.12})`,
            transition: da,
            ...Z
          },
          children: T
        }
      )
    }
  ), qn = ha(
    E,
    F
  );
  return /* @__PURE__ */ t(wo, { theme: N, children: /* @__PURE__ */ t(Cr.Provider, { value: Q, children: /* @__PURE__ */ R(
    ae,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...V
      },
      children: [
        /* @__PURE__ */ t(ns, {}),
        B && /* @__PURE__ */ t(
          zi,
          {
            height: Er,
            onMenuClick: i && !ye ? () => rt(!0) : void 0,
            appName: n,
            logo: ur,
            onBrandClick: Wt,
            brandMenuOpen: Pt,
            background: cr,
            color: bt,
            brandColor: Bt,
            endContent: he ? /* @__PURE__ */ t(
              Qr,
              {
                count: Xn,
                onClick: xr,
                color: bt,
                hoverColor: xt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !B && Xe && /* @__PURE__ */ t(
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
              ...Z
            },
            children: So()
          }
        ),
        i && !B && se && Ro(
          /* @__PURE__ */ R(Te, { children: [
            So(),
            (L == null ? void 0 : L.show) && !Me && /* @__PURE__ */ t(Vt, { ...L })
          ] })
        ),
        $n && Ro(
          /* @__PURE__ */ R(Te, { children: [
            /* @__PURE__ */ t(
              ji,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: v,
                onLinkClick: I,
                logo: ur,
                title: n,
                onBrandClick: Wt,
                brandMenuOpen: Pt,
                brandColor: Bt,
                headerBackgroundColor: io,
                headerForegroundColor: bt,
                activeAccentColor: Q,
                groupAccentColor: S,
                activeForegroundColor: w,
                foregroundColor: me,
                surfaceBackgroundColor: so,
                collapsed: Me,
                expandedWidth: wr,
                collapsedWidth: no,
                topContent: Gt(
                  Me ? oo : "full"
                ),
                submenuMode: $e ? "flyout" : "inline",
                color: Fe,
                hoverColor: xt,
                avatarColor: Q,
                showProfile: D,
                userName: X,
                userEmail: $,
                userRole: K,
                userAvatar: A,
                showNotifications: he,
                notificationCount: z,
                onNotificationsClick: Bn ? xr : G,
                whatsNewCount: H,
                onProfileClick: le,
                menuItems: _,
                onLogout: bo,
                theme: de,
                showThemeToggler: ne,
                onThemeToggle: fe
              }
            ),
            (L == null ? void 0 : L.show) && !Me && /* @__PURE__ */ t(Vt, { ...L })
          ] })
        ),
        i && !B && !Mn && !et && /* @__PURE__ */ t(
          Co,
          {
            variant: "permanent",
            sx: {
              width: be,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: be,
                boxSizing: "border-box",
                bgcolor: re,
                borderRight: "none"
              },
              ...Z
            },
            children: /* @__PURE__ */ R(
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
                          logo: Ln,
                          appName: n,
                          onClick: Wt,
                          menuOpen: Pt,
                          color: h ?? Fe,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Gt("popover"),
                  /* @__PURE__ */ R(
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
                          Li,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: v,
                            onLinkClick: I,
                            accentColor: Q,
                            surfaceBackgroundColor: re,
                            railShowTitles: a
                          }
                        ),
                        (L == null ? void 0 : L.show) && /* @__PURE__ */ t(Vt, { ...L })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(ae, { sx: { py: 1.5 }, children: br(!0) })
                ]
              }
            )
          }
        ),
        i && B && /* @__PURE__ */ R(
          ss,
          {
            anchor: ye ? "bottom" : "left",
            open: co,
            onOpen: () => rt(!0),
            onClose: () => rt(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (T) => T.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: tt,
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
                Tr,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: v,
                  onLinkClick: (T) => {
                    I == null || I(T), rt(!1);
                  },
                  onLinkAction: () => rt(!1),
                  collapsed: !1,
                  expandedWidth: ye ? "100%" : ca,
                  activeAccentColor: Q,
                  groupAccentColor: S,
                  activeForegroundColor: w,
                  foregroundColor: me,
                  surfaceBackgroundColor: tt,
                  topInsetPx: ye ? 8 : 0,
                  topContent: ye ? void 0 : Gt("full"),
                  footer: ye ? void 0 : br(!1)
                }
              ),
              (L == null ? void 0 : L.show) && /* @__PURE__ */ t(Vt, { ...L })
            ]
          }
        ),
        ye && vt && /* @__PURE__ */ t(
          Pi,
          {
            open: lo,
            onClose: () => pr(!1),
            search: vt
          }
        ),
        ye && /* @__PURE__ */ t(
          Wi,
          {
            ...yo,
            pinnedLinks: f,
            activePath: v,
            onLinkClick: I,
            onMenuClick: i ? () => rt(!0) : void 0,
            menuOpen: co,
            onSearchClick: vt ? () => pr(!0) : void 0,
            searchOpen: lo,
            showAssistant: Qe,
            onAssistantClick: Ue,
            assistantActive: at,
            showProfile: D,
            background: tt,
            color: Fe,
            activeColor: Q,
            activeBackground: xt
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": qn,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": B ? `${Er}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: be ? `calc(100% - ${be}px)` : "100%",
              mt: B ? `${Er}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ye && {
                pb: `calc(var(--lumora-content-padding) + ${uo})`
              },
              backgroundColor: re,
              ...Ge
            },
            children: e
          }
        ),
        xe && /* @__PURE__ */ t(
          Ci,
          {
            open: ho,
            variant: mo,
            position: it,
            width: kt,
            sidebarWidthPx: be,
            bottomOffsetPx: Qe && gt === "floating" ? ua : 0,
            fullScreen: B,
            fullScreenBottom: ye ? uo : "0px",
            onClose: ir,
            children: /* @__PURE__ */ t(xe, {})
          }
        ),
        Qe && gt === "floating" && !ye && /* @__PURE__ */ t(
          qo,
          {
            variant: "floating",
            rightOffsetPx: Un,
            shortcutKeys: vo,
            onClick: Ue,
            active: at,
            busy: Nt
          }
        ),
        he && W && /* @__PURE__ */ t(
          Co,
          {
            anchor: "right",
            open: hr.open,
            onClose: po,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              W,
              {
                onClose: po,
                initialTab: hr.tab
              },
              hr.tab
            )
          }
        )
      ]
    }
  ) }) });
};
export {
  ee as AUTH_ERROR_CODES,
  Y as AuthError,
  Tr as CollapsibleSidebar,
  uc as FullBleedSection,
  gi as Kbd,
  pc as LumoraWrapper,
  Tt as clearAuthTokens,
  pc as default,
  fc as getAuthErrorMessage,
  Ot as getAuthTokens,
  yi as getCurrentUser,
  Si as getDesignTokens,
  bi as isAuthenticated,
  $r as logAuthError,
  Rn as storeAuthTokens
};
