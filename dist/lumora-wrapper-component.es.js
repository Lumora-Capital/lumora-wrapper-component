import { jsx as t, jsxs as w, Fragment as $e } from "react/jsx-runtime";
import Jn from "@mui/icons-material/KeyboardArrowDownRounded";
import Qn from "@mui/icons-material/KeyboardArrowUpRounded";
import ei from "@mui/icons-material/ChevronRightRounded";
import C from "@mui/material/Box";
import Eo from "@mui/material/Collapse";
import Ze from "@mui/material/Divider";
import Se from "@mui/material/IconButton";
import Gt from "@mui/material/ListItemButton";
import Ee from "@mui/material/ListItemIcon";
import Ne from "@mui/material/ListItemText";
import Me from "@mui/material/Stack";
import we from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as Fe, createTheme as ln, alpha as st, ThemeProvider as wo } from "@mui/material/styles";
import * as d from "react";
import { useMemo as Ro, useState as nt, useCallback as Io, useRef as vr, useEffect as Ut } from "react";
import Qe from "@mui/material/ButtonBase";
import { keyframes as Dr } from "@emotion/react";
import kr from "@mui/material/Fade";
import Nr from "@mui/material/Popper";
import { useTheme as ti, useMediaQuery as ri, Box as ce, CircularProgress as oi, CssBaseline as ni, Drawer as _o, SwipeableDrawer as ii, Stack as si } from "@mui/material";
import Co from "axios";
import ai from "@mui/material/Card";
import ci from "@mui/material/CardContent";
import dn from "@mui/material/Button";
import li from "@mui/icons-material/AutoAwesomeRounded";
import di from "@mui/material/Grow";
import Fr from "@mui/material/Paper";
import ui from "@mui/material/Slide";
import fi from "@mui/material/ListSubheader";
import qe from "@mui/material/MenuItem";
import Br from "@mui/material/MenuList";
import un from "@mui/icons-material/MenuRounded";
import Wr from "@mui/icons-material/SearchRounded";
import fn from "@mui/icons-material/LogoutRounded";
import pn from "@mui/icons-material/NotificationsNoneOutlined";
import pi from "@mui/icons-material/SettingsOutlined";
import hi from "@mui/material/Avatar";
import mi from "@mui/material/Menu";
import Oo from "@mui/material/ToggleButton";
import gi from "@mui/material/ToggleButtonGroup";
import xi from "@mui/material/Drawer";
import bi from "@mui/material/AppBar";
import yi from "@mui/material/Toolbar";
import hn from "@mui/material/Badge";
import vi from "@mui/icons-material/DarkModeOutlined";
import Si from "@mui/icons-material/LightModeOutlined";
import Ei from "@mui/icons-material/SettingsBrightnessOutlined";
import Pr from "@mui/material/Popover";
import wi from "@mui/icons-material/CheckRounded";
const qt = ({
  logo: e,
  title: r,
  appName: o,
  onClick: n,
  color: s,
  testId: i,
  menuOpen: a
}) => {
  const c = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: s,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, l = /* @__PURE__ */ w($e, { children: [
    r ? /* @__PURE__ */ t(
      ae,
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
        children: r
      }
    ) : null,
    e
  ] });
  return n ? /* @__PURE__ */ t(
    Qe,
    {
      onClick: n,
      "aria-label": a === void 0 ? `${o} home` : `${o}: switch platform`,
      ...a !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": a
      },
      "data-testid": i,
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
          outlineColor: s,
          outlineOffset: 2
        }
      },
      children: l
    }
  ) : /* @__PURE__ */ t(Me, { direction: "row", "data-testid": i, sx: c, children: l });
}, rr = { stiffness: 320, damping: 24 }, zr = { stiffness: 520, damping: 20 }, mn = { stiffness: 380, damping: 36 }, or = { stiffness: 260, damping: 28 }, Ri = "cubic-bezier(0.32, 1.28, 0.52, 1)", Ii = 420, To = 60, _i = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Ao = /* @__PURE__ */ new Map(), Re = ({
  stiffness: e,
  damping: r,
  mass: o = 1
}) => {
  const n = `${e}/${r}/${o}`, s = Ao.get(n);
  if (s)
    return s;
  if (!_i)
    return { easing: Ri, duration: Ii };
  const i = 1 / 600;
  let a = 0, c = 0, l = 0, h = 1 / To;
  const m = [0];
  for (; l < 3; ) {
    const p = (-e * (a - 1) - r * c) / o;
    if (c += p * i, a += c * i, l += i, l >= h && (m.push(a), h += 1 / To, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const g = {
    easing: `linear(${m.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(l * 1e3)
  };
  return Ao.set(n, g), g;
}, Je = (e) => !!(e && typeof e.animate == "function"), ze = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ht = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((r) => r.cancel());
}, Ci = (e, r = 1.14) => {
  if (!Je(e) || ze())
    return;
  const o = Re(zr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${r})`, offset: 0.18, easing: o.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(o.duration / 0.82) }
  );
}, ht = (e) => {
  var r;
  return !!((r = e.subitems) != null && r.length);
}, ft = (e, r) => e ? `${e}/${r.text}` : r.text, je = (e, r) => {
  var o;
  return r ? e.path && r === e.path ? !0 : ((o = e.subitems) == null ? void 0 : o.some((n) => je(n, r))) ?? !1 : !1;
}, ke = (e, r) => !!(r && e.path === r), Gr = (e, r) => (e ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return ht(o) ? Gr(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), _r = (e) => {
  const r = nr(e);
  if (!r)
    return "#ffffff";
  const [o, n, s] = r.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Zt = (e) => {
  const r = nr(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, s] = r;
  return `rgba(${o}, ${n}, ${s}, 0.14)`;
}, pt = (e, r) => {
  const o = nr(e);
  return o ? `rgba(${o[0]}, ${o[1]}, ${o[2]}, ${r})` : e;
}, nr = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, gn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Oi = 28, Ti = 180, $o = (e) => ({
  backdropFilter: `blur(${e * Oi}px) saturate(${100 + e * (Ti - 100)}%)`
}), Ai = Dr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ce = "@media (prefers-reduced-motion: reduce)", xn = (e, r, o) => `radial-gradient(${e}px circle at var(--lx, -9999px) var(--ly, -9999px), rgba(${o}, calc(${r} * var(--li, 0))) 0%, rgba(${o}, 0) 70%)`, te = 6, Ur = "9, 193, 174", Cr = d.createContext(
  void 0
), $t = () => {
  const e = d.useContext(Cr), r = e ? nr(e) : null;
  return r ? r.join(", ") : Ur;
}, Jt = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, bn = (e) => e ? Jt.dark : Jt.light, Hr = (e, r) => e ? "255, 255, 255" : r, $i = (e, r) => ({
  content: '""',
  position: "absolute",
  inset: 0,
  borderRadius: "inherit",
  padding: "1.25px",
  pointerEvents: "none",
  // The rim glints where the pointer is nearest (see GlassLayer's light)
  background: `${xn(140, bn(e).rim, Hr(e, r))}, ${e ? "linear-gradient(140deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 22%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 78%, rgba(255, 255, 255, 0.28) 100%)" : "linear-gradient(140deg, #ffffff 0%, rgba(255, 255, 255, 0.55) 22%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.4) 78%, rgba(255, 255, 255, 0.95) 100%)"}`,
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  maskComposite: "exclude"
}), Mi = (e, r, o = Ur) => ({
  position: "relative",
  bgcolor: e ? "rgba(30, 36, 48, 0.5)" : "rgba(255, 255, 255, 0.55)",
  backgroundImage: e ? "linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 38%, rgba(0, 0, 0, 0.1) 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 40%, rgba(15, 23, 42, 0.03) 100%)",
  ...$o(1),
  WebkitBackdropFilter: $o(1).backdropFilter,
  boxShadow: e ? "0 24px 60px -12px rgba(0, 0, 0, 0.65), 0 0 0 0.5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 0 24px rgba(255, 255, 255, 0.035)" : "0 24px 60px -12px rgba(15, 23, 42, 0.3), 0 2px 8px rgba(15, 23, 42, 0.08), 0 0 0 0.5px rgba(15, 23, 42, 0.1), inset 0 1px 0 #ffffff, inset 0 0 24px rgba(255, 255, 255, 0.45)",
  "&::before": $i(e, o),
  // Specular glare across the top-left, as light catching a curved edge
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
    // The pointer's light on the surface, over the fixed glare
    background: `${xn(200, bn(e).sheen, Hr(e, o))}, ${e ? "linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 42%)" : "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 42%)"}`
  },
  "@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))": {
    bgcolor: r
  },
  "@media (prefers-reduced-transparency: reduce)": {
    bgcolor: r,
    backdropFilter: "none",
    WebkitBackdropFilter: "none"
  }
}), Li = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", Xr = (e) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: e ? "rgba(30, 36, 48, 0.72)" : "rgba(255, 255, 255, 0.78)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid",
  borderColor: e ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.8)",
  boxShadow: e ? "0 8px 24px -6px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.16)" : "0 8px 24px -6px rgba(15, 23, 42, 0.25), 0 0 0 0.5px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
  borderRadius: `${te}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600,
  "@media (prefers-reduced-transparency: reduce)": {
    bgcolor: e ? "rgb(30, 36, 48)" : "#ffffff",
    backdropFilter: "none",
    WebkitBackdropFilter: "none"
  }
}), Kr = Dr`
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
`, jr = Dr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Vr = (e, r = Ur, o = `rgba(${r}, 0.2)`) => ({
  background: e ? "radial-gradient(circle at 30% 24%, rgba(255, 255, 255, 0.34) 0, rgba(255, 255, 255, 0.12) 22%, rgba(255, 255, 255, 0.06) 55%, rgba(255, 255, 255, 0.03) 100%)" : "radial-gradient(circle at 30% 24%, #ffffff 0, rgba(255, 255, 255, 0.92) 20%, rgba(255, 255, 255, 0.7) 55%, rgba(255, 255, 255, 0.5) 100%)",
  boxShadow: e ? `inset 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 1.5px 1px rgba(255, 255, 255, 0.28), inset 0 -10px 16px -8px ${o}, 0 12px 26px -12px rgba(0, 0, 0, 0.85)` : `inset 0 0 0 1px rgba(255, 255, 255, 0.95), inset 0 2px 2px #ffffff, inset 0 -10px 16px -8px ${o}, 0 12px 26px -12px rgba(15, 23, 42, 0.4), 0 1px 3px rgba(15, 23, 42, 0.06)`
}), Ot = (e, r, o = "solid") => {
  const [n, s, i] = o === "solid" ? [0.95, 0.74, 0.9] : [0.34, 0.12, 0.24];
  return {
    background: `radial-gradient(120% 90% at 28% 10%, rgba(255, 255, 255, ${r ? o === "solid" ? 0.3 : 0.22 : o === "solid" ? 0.26 : 0.7}) 0%, rgba(255, 255, 255, 0) 52%), linear-gradient(165deg, ${pt(e, n)} 0%, ${pt(e, s)} 55%, ${pt(e, i)} 100%)`,
    boxShadow: [
      `inset 0 1px 1px rgba(255, 255, 255, ${o === "solid" ? 0.5 : 0.75})`,
      `inset 0 0 0 1px ${pt(e, o === "solid" ? 0.55 : 0.4)}`,
      `inset 0 -8px 14px -8px rgba(255, 255, 255, ${r ? 0.18 : 0.35})`,
      `0 8px 18px -8px ${pt(e, r ? 0.7 : 0.55)}`
    ].join(", ")
  };
}, Di = (e, r) => {
  const o = e ? "inset 0 1px 2px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 0 rgba(255, 255, 255, 0.08)" : "inset 0 1px 2px rgba(15, 23, 42, 0.12), inset 0 0 0 1px rgba(15, 23, 42, 0.05), 0 1px 0 #ffffff";
  return {
    rest: {
      background: e ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.5)",
      boxShadow: o,
      borderRadius: `${te}px`,
      transition: "box-shadow 180ms ease, background 180ms ease"
    },
    hover: {
      background: e ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.7)"
    },
    focus: {
      background: e ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.8)",
      boxShadow: `${o}, 0 0 0 3px ${r}, 0 0 18px ${r}`
    }
  };
}, Qt = "data-rail-item", ki = `[${Qt}], button, [role="button"]`, ir = d.createContext(!1), Yr = () => {
  const e = d.useContext(ir), r = Fe();
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: { sx: Xr(r.palette.mode === "dark") },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ve = Re(mn), qr = ({
  enabled: e,
  isDark: r,
  selector: o,
  size: n,
  radius: s,
  lean: i = 3
}) => {
  const a = d.useRef(null), c = $t(), [l, h] = d.useState(null), m = d.useRef(null), g = d.useRef(null), p = (b, v) => {
    g.current = v;
    const I = v.getBoundingClientRect(), L = b.getBoundingClientRect(), X = n ?? I.width, K = n ?? I.height, A = {
      top: Math.round(I.top - L.top + (I.height - K) / 2),
      left: Math.round(I.left - L.left + (I.width - X) / 2),
      width: Math.round(X),
      height: Math.round(K)
    };
    h(
      ($) => $ && $.visible && $.top === A.top && $.left === A.left && $.width === A.width && $.height === A.height ? $ : { ...A, visible: !0, instant: !($ != null && $.visible) }
    );
  }, f = (b, v) => {
    var L;
    const I = (L = v == null ? void 0 : v.closest) == null ? void 0 : L.call(v, o);
    return I && b.contains(I) ? I : null;
  }, y = (b) => {
    if (!e)
      return;
    const v = f(b.currentTarget, b.target);
    v && p(b.currentTarget, v);
  }, _ = (b) => {
    if (!e)
      return;
    const v = f(b.currentTarget, b.target);
    v && b.target.matches(":focus-visible") && p(b.currentTarget, v);
  }, x = (b) => {
    const v = a.current, I = g.current;
    if (!e || !v || !I || !i || ze())
      return;
    const L = I.getBoundingClientRect(), X = (K, A) => Math.max(-1, Math.min(1, K / (A / 2))) * i;
    v.style.transform = `translate(${X(b.clientX - (L.left + L.width / 2), L.width)}px, ${X(b.clientY - (L.top + L.height / 2), L.height)}px)`;
  }, S = () => {
    g.current = null, a.current && (a.current.style.transform = ""), h((b) => b != null && b.visible ? { ...b, visible: !1 } : b);
  }, E = (b) => {
    const v = b.relatedTarget;
    (!v || !b.currentTarget.contains(v)) && (b.currentTarget.matches(":hover") || S());
  };
  return d.useEffect(() => {
    const b = a.current;
    if (!(l != null && l.visible)) {
      m.current = null;
      return;
    }
    const v = m.current;
    if (m.current = l.top, !Je(b) || ze())
      return;
    if (v === null || l.instant) {
      b.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ve.duration,
        easing: Ve.easing
      });
      return;
    }
    const I = Math.min(Math.abs(l.top - v) / 600, 0.08);
    I && b.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - I / 2} ${1 + I}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ve.duration, easing: "ease-out" }
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
          ...Vr(r, c),
          backdropFilter: "blur(8px) saturate(170%)",
          WebkitBackdropFilter: "blur(8px) saturate(170%)",
          borderRadius: `${s}px`,
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
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${Ve.duration}ms ${Ve.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [Ce]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: y,
      onMouseMove: x,
      onMouseLeave: S,
      onFocus: _,
      onBlur: E,
      onScrollCapture: S
    } : {}
  };
}, Ni = (e, r) => {
  const o = qr({
    enabled: e,
    isDark: r,
    selector: ki,
    size: 46,
    radius: te
  });
  return {
    ...o,
    lens: o.lens ? d.cloneElement(o.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Fi = (e, r) => {
  let o = 0, n = 0, s = e;
  for (; s && s !== r; ) {
    o += s.offsetTop, n += s.offsetLeft;
    const c = s.offsetParent;
    for (let l = s.parentElement; l && l !== r && (o -= l.scrollTop, n -= l.scrollLeft, l !== c); l = l.parentElement)
      ;
    s = c;
  }
  if (s === r && e.offsetWidth)
    return {
      top: Math.round(o),
      left: Math.round(n),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const i = e.getBoundingClientRect(), a = r.getBoundingClientRect();
  return {
    top: Math.round(i.top - a.top),
    left: Math.round(i.left - a.left),
    width: Math.round(i.width),
    height: Math.round(i.height)
  };
}, Bi = ({
  enabled: e,
  isDark: r,
  color: o,
  containerRef: n
}) => {
  const s = d.useRef(null), [i, a] = d.useState(null), c = d.useRef(null), l = d.useCallback(
    (m) => {
      const g = n.current;
      if (!e || !g)
        return;
      const p = g.querySelector(
        `[${Qt}][data-active="true"]`
      );
      if (!p) {
        a(
          (y) => y != null && y.visible ? { ...y, visible: !1 } : y
        );
        return;
      }
      const f = Fi(p, g);
      a(
        (y) => y && y.visible && y.top === f.top && y.left === f.left && y.width === f.width && y.height === f.height ? y : {
          ...f,
          visible: !0,
          instant: m || !(y != null && y.visible)
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
    let g = 0;
    const p = () => {
      cancelAnimationFrame(g), g = requestAnimationFrame(() => l(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => l(!0));
    f == null || f.observe(m);
    const y = typeof MutationObserver > "u" ? null : new MutationObserver(p);
    return y == null || y.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(g), f == null || f.disconnect(), y == null || y.disconnect();
    };
  }, [e, n, l]), d.useEffect(() => {
    const m = s.current;
    if (!(i != null && i.visible)) {
      c.current = null;
      return;
    }
    const g = c.current;
    if (c.current = i.top, g === null || i.instant || !Je(m) || ze())
      return;
    const p = Math.min(Math.abs(i.top - g) / 600, 0.08);
    p && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - p / 2} ${1 + p}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ve.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ t(
    C,
    {
      ref: s,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": i.visible ? "true" : "false",
      sx: {
        ...Ot(o, r),
        borderRadius: `${te}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: i.width,
        height: i.height,
        translate: `${i.left}px ${i.top}px`,
        scale: i.visible ? "1" : "0.7",
        opacity: i.visible ? 1 : 0,
        pointerEvents: "none",
        transition: i.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ve.duration}ms ${Ve.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Ce]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Mo = 14, Wi = 18, Pi = "blur(12px) saturate(180%) brightness(1.04)", zi = (() => {
  var r;
  if (typeof navigator > "u")
    return !1;
  const e = (r = navigator.userAgentData) == null ? void 0 : r.brands;
  return !!(e != null && e.some(({ brand: o }) => /Chromium/.test(o)));
})(), Gi = (e, r, o) => {
  const n = Math.min(0.45, o / e), s = Math.min(0.45, o / r), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${r}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, Ui = 140, Lo = 0.22, Hi = 0.14, Xi = (e, r, o) => {
  const n = d.useRef(o);
  n.current = o, d.useEffect(() => {
    if (!r || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var f;
      const p = e.current;
      p && (p.style.setProperty("--lx", `${i.x.toFixed(1)}px`), p.style.setProperty("--ly", `${i.y.toFixed(1)}px`), p.style.setProperty("--li", i.i.toFixed(3)), (f = n.current) == null || f.call(n, i.x, i.y, i.i));
    }, l = () => {
      i.x += (s.x - i.x) * Lo, i.y += (s.y - i.y) * Lo, i.i += (s.i - i.i) * Hi;
      const p = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      p && (i.x = s.x, i.y = s.y, i.i = s.i), c(), a = p ? 0 : requestAnimationFrame(l);
    }, h = () => {
      a || (a = requestAnimationFrame(l));
    }, m = (p) => {
      const f = e.current;
      if (p.pointerType === "touch" || !f)
        return;
      const y = f.getBoundingClientRect();
      if (!y.width || !y.height)
        return;
      s.x = (p.clientX - y.left) * f.offsetWidth / y.width, s.y = (p.clientY - y.top) * f.offsetHeight / y.height;
      const _ = Math.max(
        y.left - p.clientX,
        0,
        p.clientX - y.right
      ), x = Math.max(
        y.top - p.clientY,
        0,
        p.clientY - y.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(_, x) / Ui), i.i < 0.01 && (i.x = s.x, i.y = s.y), h();
    }, g = () => {
      s.i = 0, h();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", g), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", g);
    };
  }, [e, r]);
}, mt = d.forwardRef(
  ({
    isDark: e,
    solid: r,
    sx: o,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: a
  }, c) => {
    const l = d.useRef(null);
    Xi(l, i, a);
    const h = $t(), m = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [g, p] = d.useState(null), f = d.useRef(null), y = d.useCallback(
      (S) => {
        var R;
        if (l.current = S, typeof c == "function" ? c(S) : c && (c.current = S), (R = f.current) == null || R.disconnect(), f.current = null, !S || !s || !zi || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const b = S.offsetWidth, v = S.offsetHeight;
          p(
            (I) => (I == null ? void 0 : I.width) === b && I.height === v ? I : b && v ? { width: b, height: v } : null
          );
        };
        f.current = new ResizeObserver(E), f.current.observe(S), E();
      },
      [c, s]
    ), _ = d.useMemo(
      () => g ? Gi(g.width, g.height, Mo) : null,
      [g]
    ), x = s && !!(_ && g);
    return /* @__PURE__ */ w($e, { children: [
      x ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ w(
            "filter",
            {
              id: m,
              x: "0",
              y: "0",
              width: g.width,
              height: g.height,
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
                    width: g.width,
                    height: g.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ t(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: Mo / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Wi,
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
          ref: y,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": x ? "true" : void 0,
          sx: [
            Mi(e, r, h),
            x ? {
              backdropFilter: `url(#${m}) ${Pi}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(o) ? o : [o]
          ]
        }
      )
    ] });
  }
);
mt.displayName = "GlassLayer";
const Ye = 44, Do = 4, Ki = te, ko = 1.4, ji = 6, yn = 6, It = te, er = 10, No = 0.12, Fo = 0.75, Vi = er + 32, Yi = 90, qi = 22, Zi = 1190, Ji = 1195, tr = Re(rr), he = Re(mn), Bo = Re(or), Qi = ({ left: e, top: r, width: o, height: n, radius: s }) => {
  const i = Math.min(s, o / 2, n / 2), a = e + o, c = r + n, l = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + i} ${r} H ${a - i} ${l} ${a} ${r + i} V ${c - i} ${l} ${a - i} ${c} H ${e + i} ${l} ${e} ${c - i} V ${r + i} ${l} ${e + i} ${r} Z')`;
}, es = ({
  group: e,
  groupKey: r,
  anchor: o,
  railEdge: n,
  railShape: s,
  activePath: i,
  focusFirst: a = !1,
  onNavigate: c,
  onClose: l,
  panelProps: h,
  accentColor: m,
  activeForegroundColor: g,
  solidSurface: p
}) => {
  const f = Fe(), y = f.palette.mode === "dark", _ = !!(e && o), x = d.useRef(null);
  e && r && (x.current = { group: e, key: r });
  const S = x.current, E = d.useMemo(() => o ? {
    contextElement: o,
    getBoundingClientRect: () => {
      const M = o.getBoundingClientRect();
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
  } : null, [o, n]), R = d.useRef(E);
  E && (R.current = E), d.useEffect(() => {
    o && Ci(o);
  }, [o]);
  const [b, v] = d.useState(!1);
  d.useEffect(() => {
    if (!_) {
      v(!1);
      return;
    }
    let M = 0;
    const D = requestAnimationFrame(() => {
      M = requestAnimationFrame(() => v(!0));
    });
    return () => {
      cancelAnimationFrame(D), cancelAnimationFrame(M);
    };
  }, [_]);
  const I = d.useMemo(
    () => S ? Gr(S.group.subitems, S.group.icon) : [],
    [S]
  ), L = d.useRef(null), X = d.useRef(null), K = d.useRef(0), A = d.useRef(null), $ = d.useRef([]), O = I.findIndex(
    ({ sub: M }) => ke(M, i)
  ), [P, re] = d.useState(0);
  d.useEffect(() => {
    re(Math.max(O, 0));
  }, [r]), d.useEffect(() => {
    if (!_ || !a)
      return;
    const M = setTimeout(() => {
      var D;
      return (D = $.current[0]) == null ? void 0 : D.focus();
    });
    return () => clearTimeout(M);
  }, [_, a, r]);
  const de = (M) => {
    var j;
    const D = Math.max(0, Math.min(M, I.length - 1));
    re(D), (j = $.current[D]) == null || j.focus();
  }, me = (M, D) => {
    switch (M.key) {
      case "ArrowRight":
        de(D + 1);
        break;
      case "ArrowLeft":
        D === 0 ? l(!0) : de(D - 1);
        break;
      case "Home":
        de(0);
        break;
      case "End":
        de(I.length - 1);
        break;
      case "Tab":
        l(!0);
        break;
      default:
        return;
    }
    M.preventDefault();
  }, z = (M) => {
    var ue;
    const D = $.current.slice(0, I.length).filter((ie) => !!ie);
    if (!D.length)
      return;
    const j = M !== null && M < D.length && !ze(), k = `translate ${he.duration}ms ${he.easing}, scale ${he.duration}ms ${he.easing}`, V = D.map((ie) => ie.offsetLeft + Ye / 2), Z = D.map(
      (ie, pe) => j && pe === M ? ko : 1
    ), Ge = j ? (ko - 1) * Ye : 0, fe = V[0] - Ye / 2, Oe = V[V.length - 1] + Ye / 2, ge = j ? Math.min(
      Math.min(
        1,
        Math.max(
          0,
          (V[M] - fe) / (Oe - fe)
        )
      ),
      ji / Ge
    ) : 0;
    let xe = fe - Ge * ge;
    D.forEach((ie, pe) => {
      const be = Ye * Z[pe], Te = xe + be / 2;
      xe += be + Do, ie.style.transition = `${k}, background 160ms ease, box-shadow 160ms ease`, ie.style.translate = j ? `${Te - V[pe]}px 0` : "", ie.style.scale = j ? String(Z[pe]) : "", j ? ie.style.setProperty("--dock-scale", String(Z[pe])) : ie.style.removeProperty("--dock-scale");
    }), (ue = A.current) == null || ue.call(A);
  }, W = d.useRef(null);
  d.useEffect(() => {
    W.current = null;
  }, [r]);
  const H = (M) => {
    W.current !== M && (W.current = M, cancelAnimationFrame(K.current), K.current = requestAnimationFrame(() => z(M)));
  };
  d.useEffect(() => () => cancelAnimationFrame(K.current), []);
  const G = f.palette.text.primary, q = y ? f.palette.text.primary : m;
  return /* @__PURE__ */ w($e, { children: [
    /* @__PURE__ */ t(kr, { in: _, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      C,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => l(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: s ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...s ? { clipPath: Qi(s) } : {},
          zIndex: Zi,
          bgcolor: Li(y)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      Nr,
      {
        open: _,
        anchorEl: E ?? R.current,
        placement: "right",
        transition: !0,
        modifiers: [
          { name: "offset", options: { offset: [0, er] } },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Ji,
          transition: b ? `transform ${he.duration}ms ${he.easing}` : "none",
          [Ce]: { transition: "none" }
        },
        children: ({ TransitionProps: M }) => /* @__PURE__ */ t(
          as,
          {
            in: (M == null ? void 0 : M.in) ?? _,
            onEnter: M == null ? void 0 : M.onEnter,
            onExited: M == null ? void 0 : M.onExited,
            groupKey: (S == null ? void 0 : S.key) ?? null,
            panelProps: h,
            isDark: y,
            solidSurface: p,
            groupText: S == null ? void 0 : S.group.text,
            glassRef: X,
            shapeRef: A,
            children: S ? /* @__PURE__ */ t($e, { children: /* @__PURE__ */ t(
              C,
              {
                ref: L,
                role: "menu",
                "aria-label": S.group.text,
                onPointerLeave: () => H(null),
                sx: {
                  position: "relative",
                  display: "flex",
                  gap: `${Do}px`,
                  // No room kept for magnification: a grown tile rises out of
                  // the glass, as icons rise out of the Dock
                  px: 0
                },
                children: I.map(({ sub: D, icon: j }, k) => /* @__PURE__ */ t(
                  vn,
                  {
                    ref: (V) => {
                      $.current[k] = V;
                    },
                    sub: D,
                    icon: j,
                    index: k,
                    active: ke(
                      D,
                      i
                    ),
                    tabIndex: k === P ? 0 : -1,
                    onClick: () => {
                      c(D.path), l();
                    },
                    onKeyDown: (V) => me(V, k),
                    onFocus: (V) => {
                      re(k), V.currentTarget.matches(
                        ":focus-visible"
                      ) && H(k);
                    },
                    onHoverStart: (V) => {
                      V !== "touch" && H(k);
                    },
                    accentColor: m,
                    activeForegroundColor: g,
                    labelColor: G,
                    iconColor: q,
                    isDark: y
                  },
                  D.path
                ))
              },
              S.key
            ) }) : null
          }
        )
      }
    )
  ] });
}, Ct = 18, ts = 160, Or = 14, rs = 22, os = 2.5, ns = 1, Wo = (e, r, o) => {
  const n = Math.abs(e - o.cx) - o.hx + o.r, s = Math.abs(r - o.cy) - o.hy + o.r;
  return Math.hypot(Math.max(n, 0), Math.max(s, 0)) + Math.min(Math.max(n, s), 0) - o.r;
}, is = (e, r, o) => {
  const n = Math.max(o - Math.abs(e - r), 0) / o;
  return Math.min(e, r) - n * n * n * o / 6;
}, ss = (e, r, o) => {
  const n = yn, s = Ct, i = Ct + r / 2, a = Math.max(e, ...o.map((x) => x.right + n)), c = {
    cx: a / 2,
    cy: i,
    hx: a / 2,
    hy: r / 2,
    r: It
  }, l = o.filter((x) => x.bottom - x.top > Ye * 1.02).map((x) => ({
    cx: (x.left + x.right) / 2,
    cy: (x.top + x.bottom) / 2 + Ct,
    hx: (x.right - x.left) / 2 + n,
    hy: (x.bottom - x.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: It
  })), h = (x, S) => l.reduce(
    (E, R) => is(E, Wo(x, S, R), rs),
    Wo(x, S, c)
  ), m = (x, S) => {
    let E = i, R = i + S * (r / 2 + s);
    if (h(x, E) > 0)
      return null;
    for (let b = 0; b < 12; b += 1) {
      const v = (E + R) / 2;
      h(x, v) <= 0 ? E = v : R = v;
    }
    return E;
  }, g = Math.min(0, ...l.map((x) => x.cx - x.hx)) - 2, p = Math.max(a, ...l.map((x) => x.cx + x.hx)) + 2, f = [], y = [];
  for (let x = g; x <= p; ) {
    const S = m(x, -1), E = m(x, 1);
    if (S !== null && E !== null) {
      const b = +(x + Or).toFixed(1);
      f.push([b, +S.toFixed(1)]), y.push([b, +E.toFixed(1)]);
    }
    const R = x - g < It + 4 || p - x < It + 4;
    x += R ? ns : os;
  }
  return f.length ? `M ${[...f, ...y.reverse()].map(([x, S]) => `${x} ${S}`).join(" L ")} Z` : "";
}, Po = (e, [r, o], n, s) => {
  Array.from(e.children).forEach((i) => {
    Je(i) && i.animate([{ opacity: r }, { opacity: o }], {
      duration: n,
      easing: s,
      fill: o === 0 ? "forwards" : "none"
    });
  });
}, as = ({
  in: e,
  onEnter: r,
  onExited: o,
  groupKey: n,
  panelProps: s,
  isDark: i,
  solidSurface: a,
  groupText: c,
  glassRef: l,
  shapeRef: h,
  children: m
}) => {
  const g = d.useRef(null), p = d.useRef(null), f = d.useRef(null), y = d.useRef(null), _ = d.useRef(null), x = Hr(i, $t()), S = d.useCallback(
    (z, W, H) => {
      var G, q;
      (G = _.current) == null || G.setAttribute("cx", String(z)), (q = _.current) == null || q.setAttribute("cy", String(W)), y.current && (y.current.style.opacity = String(
        H * (i ? Jt.dark.rim : Jt.light.rim)
      ));
    },
    [i]
  ), E = d.useRef(null), R = d.useRef(null), b = `lumora-flyout-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, v = d.useRef(0), I = d.useRef(0), L = d.useRef(""), X = () => {
    var M, D, j, k;
    const z = g.current, W = p.current;
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
    ), q = ss(
      z.offsetWidth,
      z.offsetHeight,
      G
    );
    return q === L.current ? !1 : (L.current = q, W.style.clipPath = `path('${q}')`, (M = f.current) == null || M.setAttribute("d", q), (D = y.current) == null || D.setAttribute("d", q), (j = E.current) == null || j.setAttribute("d", q), (k = R.current) == null || k.setAttribute("d", q), !0);
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
  h.current = K, d.useLayoutEffect(() => (X(), K(), () => {
    cancelAnimationFrame(v.current), v.current = 0;
  }), [n]);
  const A = d.useRef(null), $ = d.useRef(null), O = d.useRef(!1), P = (z) => {
    g.current = z;
    const { ref: W } = s;
    typeof W == "function" ? W(z) : W && (W.current = z);
  }, re = () => {
    Ht(l.current), Ht(A.current), Ht(g.current);
  }, de = () => {
    var G;
    const z = g.current, W = l.current, H = A.current;
    if (!(!Je(z) || !W || !H)) {
      if (re(), ze()) {
        z.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      $.current = null, W.animate(
        [
          { transform: `scale(${No}, ${Fo})` },
          { transform: "none" }
        ],
        { duration: tr.duration, easing: tr.easing }
      ), Po(W, [0, 1], 160, "ease-out");
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
          duration: Bo.duration,
          delay: 60,
          easing: Bo.easing,
          fill: "backwards"
        }
      );
    }
  }, me = () => {
    const z = g.current, W = l.current, H = A.current;
    if (!Je(z) || !W || !H) {
      o == null || o();
      return;
    }
    if (re(), ze()) {
      z.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 120,
        fill: "forwards"
      }).finished.then(() => o == null ? void 0 : o()).catch(() => {
      });
      return;
    }
    H.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 90,
      easing: "ease-in",
      fill: "forwards"
    }), Po(W, [1, 0], 200, "ease-in"), W.animate(
      [
        { transform: "none" },
        { transform: `scale(${No}, ${Fo})` }
      ],
      {
        duration: 220,
        easing: "cubic-bezier(0.5, 0, 0.75, 0)",
        fill: "forwards"
      }
    ).finished.then(() => o == null ? void 0 : o()).catch(() => {
    });
  };
  return d.useLayoutEffect(() => {
    if (!e) {
      me();
      return;
    }
    r == null || r(), de();
  }, [e]), d.useLayoutEffect(() => {
    const z = g.current;
    if (!z)
      return;
    const W = z.getBoundingClientRect(), H = $.current;
    if ($.current = { width: W.width, height: W.height }, !O.current) {
      O.current = !0;
      return;
    }
    const G = l.current;
    !e || !H || !Je(G) || !W.width || !W.height || ze() || (Ht(G), G.animate(
      [
        {
          transform: `scale(${H.width / W.width}, ${H.height / W.height})`
        },
        { transform: "none" }
      ],
      { duration: he.duration, easing: he.easing }
    ));
  }, [n]), /* @__PURE__ */ w(
    C,
    {
      ref: P,
      onMouseEnter: s.onMouseEnter,
      onMouseLeave: s.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": c,
      sx: {
        position: "relative",
        borderRadius: `${It}px`,
        p: `${yn}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -er - 2,
          width: er + 2
        }
      },
      children: [
        /* @__PURE__ */ w(
          C,
          {
            ref: l,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Ct,
              bottom: -Ct,
              left: -Or,
              right: -ts,
              pointerEvents: "none",
              // The rail icon's centre: the panel is centred on it,
              // one gap plus half the rail's padding to the left
              transformOrigin: `${Or - Vi}px 50%`,
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
                          id: `${b}-shadow`,
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
                          id: `${b}-outside`,
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
                    /* @__PURE__ */ t("g", { mask: `url(#${b}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: E,
                        transform: "translate(0 12)",
                        fill: i ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${b}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                mt,
                {
                  ref: p,
                  isDark: i,
                  solid: a,
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
                        id: `${b}-rim`,
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
                        ref: f,
                        fill: "none",
                        stroke: `url(#${b}-rim)`,
                        strokeWidth: "1.25"
                      }
                    ),
                    /* @__PURE__ */ w(
                      "radialGradient",
                      {
                        ref: _,
                        id: `${b}-glint`,
                        gradientUnits: "userSpaceOnUse",
                        cx: "-9999",
                        cy: "-9999",
                        r: "140",
                        children: [
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "0",
                              stopColor: `rgb(${x})`,
                              stopOpacity: "1"
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: `rgb(${x})`,
                              stopOpacity: "0"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ t(
                      "path",
                      {
                        ref: y,
                        fill: "none",
                        stroke: `url(#${b}-glint)`,
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
        /* @__PURE__ */ t(C, { ref: A, sx: { position: "relative" }, children: m })
      ]
    }
  );
}, vn = d.forwardRef(
  ({
    sub: e,
    icon: r,
    index: o,
    active: n,
    tabIndex: s,
    onClick: i,
    onKeyDown: a,
    onFocus: c,
    onHoverStart: l,
    accentColor: h,
    activeForegroundColor: m,
    labelColor: g,
    iconColor: p,
    isDark: f
  }, y) => {
    const _ = $t(), x = (b) => {
      const v = b.currentTarget.getBoundingClientRect();
      b.currentTarget.style.setProperty(
        "--mx",
        `${(b.clientX - v.left) / v.width * 100}%`
      ), b.currentTarget.style.setProperty(
        "--my",
        `${(b.clientY - v.top) / v.height * 100}%`
      );
    }, S = (b) => {
      const v = b.currentTarget;
      !Je(v) || ze() || v.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.1, 0.9)", offset: 0.22 },
          { transform: "scale(0.95, 1.06)", offset: 0.5 },
          { transform: "scale(1.02, 0.99)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, E = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, R = {
      ...Vr(f, _),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": E
    };
    return /* @__PURE__ */ w(
      Qe,
      {
        ref: y,
        role: "menuitem",
        tabIndex: s,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: i,
        onKeyDown: a,
        onFocus: c,
        onPointerMove: x,
        onMouseEnter: S,
        onPointerEnter: (b) => l(b.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Ye,
          height: Ye,
          borderRadius: `${Ki}px`,
          color: n ? m : g,
          bgcolor: n ? h : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Ot(h, f) : {},
          transition: `translate ${he.duration}ms ${he.easing}, scale ${he.duration}ms ${he.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${Ai} ${tr.duration}ms ${tr.easing} both`,
          animationDelay: `${Yi + o * qi}ms`,
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
            background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, ${f ? 0.18 : 0.7}), transparent 65%)`
          },
          // The current page keeps its accent fill; it still glows
          "&:hover": n ? {
            "&::before": { opacity: 1 },
            "& [data-tile-name]": E
          } : R,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : R,
            "& [data-tile-name]": E,
            outline: "2px solid",
            outlineColor: h,
            outlineOffset: 2
          },
          [Ce]: {
            animation: "none",
            transition: "none",
            "&:active": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(C, { sx: { position: "relative", display: "flex" }, children: r }),
          /* @__PURE__ */ t(
            C,
            {
              component: "span",
              "data-tile-name": !0,
              sx: {
                ...Xr(f),
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
vn.displayName = "FlyoutTile";
const cs = 100, ls = 250, ds = (e) => {
  const [r, o] = d.useState(null), n = d.useRef(r);
  n.current = r;
  const s = d.useRef(/* @__PURE__ */ new Map()), i = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, h = () => {
    clearTimeout(c.current), c.current = void 0;
  }, m = (S, E, R = !1) => {
    l(), h(), o({ key: S, pinned: E, focusFirst: R });
  }, g = d.useCallback((S = !1) => {
    var R, b;
    l(), h();
    const E = (R = n.current) == null ? void 0 : R.key;
    o(null), S && E && ((b = s.current.get(E)) == null || b.focus());
  }, []), p = () => {
    l(), !(!n.current || n.current.pinned) && (h(), c.current = setTimeout(() => g(), ls));
  };
  d.useEffect(() => {
    e || g();
  }, [e, g]), d.useEffect(
    () => () => {
      l(), h();
    },
    []
  );
  const f = r !== null;
  return d.useEffect(() => {
    if (!f)
      return;
    const S = (b) => {
      var I;
      const v = b;
      return v ? (I = i.current) != null && I.contains(v) ? !0 : [...s.current.values()].some((L) => L.contains(v)) : !1;
    }, E = (b) => {
      S(b.target) || g();
    }, R = (b) => {
      var v;
      b.key === "Escape" && g(
        !!((v = i.current) != null && v.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", E), document.addEventListener("keydown", R), () => {
      document.removeEventListener("pointerdown", E), document.removeEventListener("keydown", R);
    };
  }, [f, g]), {
    state: r,
    close: g,
    triggerProps: (S) => ({
      ref: (E) => {
        E ? s.current.set(S, E) : s.current.delete(S);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        h();
        const E = n.current;
        if (E) {
          E.key !== S && m(S, E.pinned);
          return;
        }
        l(), a.current = setTimeout(
          () => m(S, !1),
          cs
        );
      },
      onMouseLeave: p,
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
      ref: i,
      onMouseEnter: h,
      onMouseLeave: p
    },
    onRailLeafEnter: () => {
      l(), n.current && !n.current.pinned && g();
    },
    getTrigger: (S) => s.current.get(S) ?? null
  };
}, us = 264, fs = 72, zo = 64, Xt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ps = 16, hs = 14, ms = 4, gs = 2.5, Go = "0.7rem", Uo = 22, Ho = Re(zr), it = ({ text: e, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: s }) => {
  const i = d.useRef(null), [a, c] = d.useState(!1), l = d.useCallback(() => {
    const h = i.current;
    h && c(h.scrollWidth > h.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    l();
  }, [l, e]), d.useEffect(() => {
    const h = i.current;
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
        ae,
        {
          ref: i,
          component: "span",
          variant: r,
          sx: {
            display: "block",
            width: o ? "100%" : void 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "inherit",
            ...n ? { fontSize: n } : {},
            ...s ? { fontWeight: s } : {},
            ...o ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: e
        }
      )
    }
  );
}, xs = ({
  open: e,
  size: r = ps
}) => e ? /* @__PURE__ */ t(Qn, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(Jn, { sx: { fontSize: r, opacity: 0.75 } }), Xo = ({ open: e }) => /* @__PURE__ */ t(
  ei,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), Kt = 600, Tr = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  onLinkAction: s,
  logo: i,
  title: a,
  onBrandClick: c,
  brandMenuOpen: l,
  showHeaderBar: h = !1,
  headerBackgroundColor: m,
  headerForegroundColor: g,
  brandColor: p,
  activeAccentColor: f = "#01584f",
  groupAccentColor: y,
  activeForegroundColor: _,
  foregroundColor: x,
  surfaceBackgroundColor: S,
  collapsed: E = !1,
  expandedWidth: R = us,
  collapsedWidth: b = fs,
  showLabels: v = !1,
  topInsetPx: I = 0,
  topContent: L,
  footer: X,
  submenuMode: K = "inline"
}) => {
  const A = Fe(), $ = A.palette.mode === "dark", O = K === "flyout" && E && !v, P = ds(O), re = d.useRef(null), de = Ni(O, $), me = Bi({
    enabled: O,
    isDark: $,
    color: f,
    containerRef: re
  }), { close: z } = P;
  d.useEffect(() => {
    z();
  }, [o, z]);
  const [W, H] = d.useState(
    {}
  ), G = _ ?? _r(f), q = {
    bgcolor: f,
    color: G,
    "& .MuiListItemIcon-root": { color: G }
  }, M = {
    bgcolor: f,
    color: G,
    borderRadius: "8px"
  }, D = y ?? Zt(f), j = S ?? ($ ? A.palette.background.paper : "#ffffff"), k = x ?? ($ ? "text.primary" : f), V = m ?? j, Z = g ?? (m ? _r(V) : x ?? ($ ? A.palette.text.primary : f)), Ge = Zt(Z), fe = (u) => {
    n == null || n(u);
  }, Oe = (u, F) => {
    H((B) => ({ ...B, [u]: !F }));
  }, ge = (u, F) => W[F] ?? je(u, o), xe = (u, F, B) => ({
    color: u ? G : k,
    bgcolor: u ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: u ? G : k,
      minWidth: B
    },
    "&:hover": u || v ? q : { bgcolor: F }
  }), ue = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": q
  }, ie = (u) => {
    const F = ke(u, o), B = /* @__PURE__ */ w(
      Gt,
      {
        disabled: !u.path,
        selected: F,
        onClick: () => u.path && fe(u.path),
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
          ...xe(
            F,
            D,
            u.subtitle ? 48 : 36
          ),
          ...ue
        },
        children: [
          /* @__PURE__ */ t(Ee, { children: u.icon }),
          /* @__PURE__ */ t(
            Ne,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                it,
                {
                  text: u.text,
                  fontWeight: Kt
                }
              ),
              secondary: u.subtitle ? /* @__PURE__ */ t(
                C,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    it,
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
    return /* @__PURE__ */ w(C, { sx: { position: "relative" }, children: [
      B,
      /* @__PURE__ */ t(we, { title: N.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        Se,
        {
          "aria-label": N.label,
          "data-testid": `sidebar-action-${u.text}`,
          onClick: () => {
            N.onClick(), s == null || s();
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
            borderColor: F ? "rgba(255, 255, 255, 0.35)" : D,
            color: F ? G : k,
            "&:hover": {
              bgcolor: F ? "rgba(255, 255, 255, 0.15)" : D
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: F ? G : k,
              outlineOffset: 1
            }
          },
          children: N.icon
        }
      ) })
    ] }, u.text);
  }, pe = (u) => {
    const F = je(u, o), B = ke(u, o), N = ft("", u), U = ge(u, N);
    return /* @__PURE__ */ w(
      C,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: F ? D : "transparent"
        },
        children: [
          /* @__PURE__ */ w(
            Gt,
            {
              onClick: () => Oe(N, U),
              "data-testid": `sidebar-item-${u.text}`,
              "data-active": B ? "true" : "false",
              "aria-expanded": U,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...xe(B, D, 36)
              },
              children: [
                /* @__PURE__ */ t(Ee, { children: u.icon }),
                /* @__PURE__ */ t(
                  Ne,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      it,
                      {
                        text: u.text,
                        fontWeight: Kt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(Xo, { open: U })
              ]
            }
          ),
          /* @__PURE__ */ t(Eo, { in: U, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            C,
            {
              "data-testid": `sidebar-children-${u.text}`,
              sx: { pb: 0.5 },
              children: u.subitems.map(
                (J) => be(J, N, 1)
              )
            }
          ) })
        ]
      },
      u.text
    );
  }, be = (u, F, B) => {
    const N = ft(F, u), U = ms + (B - 1) * gs;
    if (ht(u)) {
      const Q = je(u, o), oe = ke(u, o), se = ge(u, N);
      return /* @__PURE__ */ w(C, { "data-testid": `sidebar-group-${u.text}`, children: [
        /* @__PURE__ */ w(
          Gt,
          {
            onClick: () => Oe(N, se),
            "data-testid": `sidebar-subitem-${u.text}`,
            "data-active": Q ? "true" : "false",
            "aria-expanded": se,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: U,
              ...xe(oe, "action.hover", 32)
            },
            children: [
              u.icon ? /* @__PURE__ */ t(Ee, { children: u.icon }) : null,
              /* @__PURE__ */ t(
                Ne,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    it,
                    {
                      text: u.text,
                      fontWeight: Kt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(Xo, { open: se })
            ]
          }
        ),
        /* @__PURE__ */ t(Eo, { in: se, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(C, { "data-testid": `sidebar-children-${u.text}`, children: u.subitems.map(
          (tt) => be(tt, N, B + 1)
        ) }) })
      ] }, N);
    }
    const J = ke(u, o);
    return /* @__PURE__ */ w(
      Gt,
      {
        selected: J,
        disabled: !u.path,
        onClick: () => u.path && fe(u.path),
        "data-testid": `sidebar-subitem-${u.text}`,
        "data-active": J ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: U,
          ...xe(J, "action.hover", 32),
          ...ue
        },
        children: [
          u.icon ? /* @__PURE__ */ t(Ee, { children: u.icon }) : null,
          /* @__PURE__ */ t(
            Ne,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                it,
                {
                  text: u.text,
                  fontWeight: Kt
                }
              )
            }
          )
        ]
      },
      N
    );
  }, Te = (u, F, B, N, U, J) => {
    const Q = !U, oe = /* @__PURE__ */ w(
      Se,
      {
        "aria-label": F,
        disabled: Q,
        onClick: U,
        onMouseEnter: O ? P.onRailLeafEnter : void 0,
        ...O ? { [Qt]: "" } : {},
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
          color: N ? G : k,
          bgcolor: N ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Uo
          },
          "&:hover": M,
          ...Xt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: N ? G : k,
          bgcolor: N ? f : "transparent",
          borderRadius: N ? "8px" : "50%",
          "&:hover": {
            bgcolor: N ? f : J != null && J.insideGroup ? "action.hover" : D,
            borderRadius: "8px"
          },
          ...Xt,
          ...O ? at(N) : {}
        },
        children: [
          B,
          v ? /* @__PURE__ */ t(
            it,
            {
              text: F,
              variant: "caption",
              center: !0,
              fontSize: Go
            }
          ) : null
        ]
      }
    );
    return v ? Q ? /* @__PURE__ */ t("span", { children: oe }, u) : /* @__PURE__ */ t(d.Fragment, { children: oe }, u) : /* @__PURE__ */ t(
      we,
      {
        title: F,
        placement: "right",
        arrow: !O,
        ...O ? Lt : {},
        children: Q ? /* @__PURE__ */ t("span", { children: oe }) : oe
      },
      u
    );
  }, Mt = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, at = (u) => ({
    borderRadius: `${te}px`,
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...u ? { bgcolor: "transparent" } : {},
    transition: `transform ${Ho.duration}ms ${Ho.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), Lt = {
    slotProps: {
      tooltip: { sx: Xr($) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, sr = (u) => {
    var U;
    const F = je(u, o), B = ft("", u), N = ((U = P.state) == null ? void 0 : U.key) === B;
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
          Se,
          {
            ...P.triggerProps(B),
            "aria-label": u.text,
            "aria-haspopup": "menu",
            "aria-expanded": N,
            "data-testid": `sidebar-item-${u.text}`,
            "data-active": F ? "true" : "false",
            "data-open": N ? "true" : "false",
            [Qt]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: F ? G : k,
              bgcolor: F ? f : N ? D : "transparent",
              ...at(F),
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
              ...Xt
            },
            children: u.icon
          }
        )
      },
      u.text
    );
  }, et = (u) => {
    const F = je(u, o), B = ke(u, o), N = ft("", u), U = ge(u, N), J = /* @__PURE__ */ w(
      Se,
      {
        "aria-label": u.text,
        "aria-expanded": U,
        onClick: () => Oe(N, U),
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
          color: B ? G : k,
          bgcolor: B ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": v ? { bgcolor: f, color: G } : {
            bgcolor: B ? f : "transparent"
          },
          ...Xt
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
                  fontSize: Uo
                }
              },
              children: u.icon
            }
          ) : u.icon,
          v ? /* @__PURE__ */ t(
            it,
            {
              text: u.text,
              variant: "caption",
              center: !0,
              fontSize: Go
            }
          ) : null,
          /* @__PURE__ */ t(xs, { open: U, size: hs })
        ]
      }
    ), Q = v ? J : /* @__PURE__ */ t(we, { title: u.text, placement: "right", arrow: !0, children: J });
    return /* @__PURE__ */ w(
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
          bgcolor: F ? D : "transparent",
          ...v ? {} : { "&:hover": { bgcolor: D } }
        },
        children: [
          Q,
          U ? Gr(u.subitems, u.icon).map(
            ({ sub: oe, icon: se }) => Te(
              oe.path,
              oe.text,
              se,
              ke(oe, o),
              () => fe(oe.path),
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
  }, gt = (u) => /* @__PURE__ */ t(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Te(
        u.text,
        u.subtitle ? `${u.text} · ${u.subtitle}` : u.text,
        u.icon,
        ke(u, o),
        u.path ? () => fe(u.path) : void 0,
        { testId: `sidebar-item-${u.text}` }
      )
    },
    u.text
  ), Dt = (u) => ht(u) ? O ? sr(u) : E ? et(u) : pe(u) : E ? gt(u) : ie(u), Ue = (u) => /* @__PURE__ */ t(
    Me,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: E ? "center" : "stretch"
      },
      children: u.map(Dt)
    }
  ), ct = E ? b : R, kt = () => {
    var Q, oe;
    const { state: u } = P, F = u ? [...e, ...r].find(
      (se) => ht(se) && ft("", se) === u.key
    ) ?? null : null, B = F ? ((Q = re.current) == null ? void 0 : Q.getBoundingClientRect().right) ?? b : b, N = F ? ((oe = re.current) == null ? void 0 : oe.closest("[data-rail-surface]")) ?? re.current : null, U = N == null ? void 0 : N.getBoundingClientRect(), J = N && U ? {
      left: U.left,
      top: U.top,
      width: U.width,
      height: U.height,
      radius: parseFloat(
        getComputedStyle(N).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      es,
      {
        group: F,
        groupKey: F ? u.key : null,
        anchor: F ? P.getTrigger(u.key) : null,
        railEdge: B,
        railShape: J,
        activePath: o,
        focusFirst: u == null ? void 0 : u.focusFirst,
        onNavigate: fe,
        onClose: P.close,
        panelProps: P.flyoutProps,
        accentColor: f,
        activeForegroundColor: G,
        solidSurface: j
      }
    );
  }, Nt = h ? /* @__PURE__ */ t(
    C,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: zo,
        minHeight: zo,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: V
      },
      children: i || a ? /* @__PURE__ */ t(
        qt,
        {
          logo: i,
          title: E ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: p ?? Z,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, ar = !h && i ? /* @__PURE__ */ t(
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
        qt,
        {
          logo: i,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: p ?? Z,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, He = v ? 0.5 : E ? 1 : 1.5;
  return /* @__PURE__ */ t(ir.Provider, { value: O, children: /* @__PURE__ */ w(
    C,
    {
      ref: re,
      ...de.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": E ? "true" : "false",
      "data-labeled": v ? "true" : "false",
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
        ...O ? Mt : {}
      },
      children: [
        de.lens,
        me.glass,
        Nt ?? ar,
        L ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: He,
              pt: 1,
              pb: 1
            },
            children: L
          }
        ) : null,
        /* @__PURE__ */ w(
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
              pt: I && !h ? `${I}px` : 1,
              pb: 2
            },
            children: [
              Ue(e),
              r.length > 0 ? /* @__PURE__ */ w(C, { sx: { mt: "auto", pt: 2 }, children: [
                X ? null : /* @__PURE__ */ t(
                  Ze,
                  {
                    sx: { mb: 1, borderColor: "divider" }
                  }
                ),
                Ue(r)
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
        O ? kt() : null
      ]
    }
  ) });
}, Ar = "var(--lumora-content-padding, 0px)", Ko = `calc(${Ar} * -1)`, uc = ({
  children: e,
  flushTop: r = !0,
  sticky: o = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: a
}) => /* @__PURE__ */ t(
  C,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Ko,
        mt: r ? Ko : 0,
        // Space below it, like any other block on the page
        mb: Ar,
        px: i ? Ar : 0,
        bgcolor: n,
        ...s && {
          borderBottom: "1px solid",
          borderColor: "divider"
        },
        ...o && {
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
), bs = ({ keys: e }) => /* @__PURE__ */ t(
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
    children: e.map((r) => /* @__PURE__ */ t("span", { children: r }, r))
  }
);
class Y extends Error {
  constructor(r, o, n = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const ee = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, le = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Pe = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, ys = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Pe.ACCESS_TOKEN
      ), r = localStorage.getItem(
        Pe.REFRESH_TOKEN
      ), o = localStorage.getItem(Pe.USER);
      e && !localStorage.getItem(le.ACCESS_TOKEN) && localStorage.setItem(le.ACCESS_TOKEN, e), r && !localStorage.getItem(le.REFRESH_TOKEN) && localStorage.setItem(
        le.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(le.USER) && localStorage.setItem(le.USER, o), (e || r || o) && (localStorage.removeItem(Pe.ACCESS_TOKEN), localStorage.removeItem(Pe.REFRESH_TOKEN), localStorage.removeItem(Pe.USER));
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
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      ee.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      ee.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new Y(
      "Failed to access storage",
      ee.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Er = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        ee.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      ee.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      ee.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new Y(
      "Failed to write to storage",
      ee.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Sn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Tt = () => {
  try {
    ys();
    const e = Sr(le.ACCESS_TOKEN), r = Sr(le.REFRESH_TOKEN), o = Sr(le.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), Sn(le.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: n
    };
  } catch (e) {
    throw e instanceof Y ? e : new Y(
      "Failed to retrieve authentication tokens",
      ee.UNKNOWN_ERROR,
      e
    );
  }
}, vs = () => {
  try {
    const { accessToken: e, refreshToken: r } = Tt();
    return !(e || r) ? {
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
}, En = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new Y(
        "At least one token must be provided",
        ee.TOKEN_INVALID
      );
    return e && Er(le.ACCESS_TOKEN, e), r && Er(le.REFRESH_TOKEN, r), o && Er(le.USER, JSON.stringify(o)), {
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
}, At = () => {
  try {
    return [
      le.ACCESS_TOKEN,
      le.REFRESH_TOKEN,
      le.USER,
      // Also clear legacy keys for complete cleanup
      Pe.ACCESS_TOKEN,
      Pe.REFRESH_TOKEN,
      Pe.USER
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
}, Ss = () => {
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
}, $r = (e, r = "Unknown") => {
  const o = {
    context: r,
    message: e.message,
    code: e instanceof Y ? e.code : "UNKNOWN",
    timestamp: e instanceof Y ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof Y && e.originalError && (o.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", o);
}, Es = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = Co.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, n = null, s = [];
  const i = (a, c) => {
    s.forEach(({ resolve: l, reject: h }) => {
      a ? h(a) : c && l(c);
    }), s = [];
  };
  return r.interceptors.request.use(
    (a) => {
      const { accessToken: c } = Tt();
      return c && a.headers && (a.headers.Authorization = `Bearer ${c}`), a;
    },
    (a) => Promise.reject(a)
  ), r.interceptors.response.use(
    (a) => a,
    async (a) => {
      var p;
      const c = a.config, l = (p = a.response) == null ? void 0 : p.status, h = (c == null ? void 0 : c.url) || "", m = h.includes("/auth/refresh");
      if (l !== 401 || c._retry || m)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: g } = Tt();
      if (!g) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return $r(f, "AxiosClient - Token Refresh"), At(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (o && n)
        return new Promise((f, y) => {
          s.push({ resolve: f, reject: y });
        }).then((f) => {
          const {
            accessToken: y,
            refreshToken: _
          } = f;
          if (c.headers && (c.headers.Authorization = `Bearer ${y}`), h.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const x = JSON.parse(
                  c.data || "{}"
                );
                x.refresh_token = _, c.data = JSON.stringify(x);
              } else
                c.data && typeof c.data == "object" ? c.data.refresh_token = _ : c.data = JSON.stringify({
                  refresh_token: _
                });
            } catch {
              c.data = JSON.stringify({
                refresh_token: _
              });
            }
          return r(c);
        }).catch((f) => Promise.reject(f));
      o = !0, n = Co.post(
        `${e}/auth/refresh`,
        {
          refresh_token: g
        }
      );
      try {
        const f = await n, { accessToken: y, refreshToken: _ } = f.data;
        if (En(y, _, null), i(null, {
          accessToken: y,
          refreshToken: _
        }), c.headers && (c.headers.Authorization = `Bearer ${y}`), h.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const x = JSON.parse(
                c.data || "{}"
              );
              x.refresh_token = _, c.data = JSON.stringify(x);
            } else
              c.data && typeof c.data == "object" ? c.data.refresh_token = _ : c.data = JSON.stringify({
                refresh_token: _
              });
          } catch {
            c.data = JSON.stringify({
              refresh_token: _
            });
          }
        return r(c);
      } catch (f) {
        return $r(
          f,
          "AxiosClient - Token Refresh Failed"
        ), i(f), At(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        o = !1, n = null;
      }
    }
  ), r;
}, Ie = {
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
}, _e = {
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
}, wn = ln(), Ae = wn.typography.pxToRem, ws = (e) => {
  const r = e === "dark", o = [...wn.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: r ? Ie[300] : Ie[200],
        main: Ie[400],
        dark: Ie[700],
        contrastText: Ie[50]
      },
      info: r ? {
        light: Ie[500],
        main: Ie[700],
        dark: Ie[900],
        contrastText: Ie[300]
      } : {
        light: Ie[100],
        main: Ie[300],
        dark: Ie[600],
        contrastText: _e[50]
      },
      warning: r ? { light: dt[400], main: dt[500], dark: dt[700] } : { light: dt[300], main: dt[400], dark: dt[800] },
      error: r ? { light: ut[400], main: ut[500], dark: ut[700] } : { light: ut[300], main: ut[400], dark: ut[800] },
      success: r ? { light: lt[400], main: lt[500], dark: lt[700] } : { light: lt[300], main: lt[400], dark: lt[800] },
      grey: _e,
      divider: r ? st(_e[700], 0.6) : st(_e[300], 0.4),
      background: r ? { default: _e[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: _e[400] } : { primary: _e[800], secondary: _e[600] },
      action: r ? {
        hover: st(_e[600], 0.2),
        selected: st(_e[600], 0.3)
      } : {
        hover: st(_e[200], 0.2),
        selected: st(_e[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Ae(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Ae(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Ae(30), lineHeight: 1.2 },
      h4: { fontSize: Ae(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Ae(20), fontWeight: 600 },
      h6: { fontSize: Ae(18), fontWeight: 600 },
      subtitle1: { fontSize: Ae(18) },
      subtitle2: { fontSize: Ae(14), fontWeight: 500 },
      body1: { fontSize: Ae(14) },
      body2: { fontSize: Ae(14), fontWeight: 400 },
      caption: { fontSize: Ae(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: o
  };
}, Rs = async (e, r) => {
  const { accessToken: o, refreshToken: n } = Tt();
  if (o)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return En(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      $r(s, "TokenValidator - Refresh Failed");
    }
  return At(), r ? r() : window.location.href = "/login", !1;
}, _t = ({ size: e = 20 }) => /* @__PURE__ */ w(
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
), jo = Re(zr), We = "#09C1AE", Yt = (e, r) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${We} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
    animation: "nexa-beam 3s linear infinite",
    zIndex: 0
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${e - 2}px`,
    bgcolor: r,
    zIndex: 1
  },
  "& > *": { position: "relative", zIndex: 2 },
  "@keyframes nexa-beam": { to: { transform: "rotate(360deg)" } },
  "@media (prefers-reduced-motion: reduce)": {
    "&::before": { animation: "none" }
  }
}), Is = (e) => ({
  ...Yt(te, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${te - 2}px`,
    zIndex: 1,
    background: `${Ot(We, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), Vo = ({
  variant: e,
  onClick: r,
  active: o = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = Yr(), l = d.useContext(ir), h = Fe().palette.mode === "dark", m = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", g = {
    onClick: r,
    "aria-label": "Ask Nexa",
    "aria-pressed": o,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ w(
    Qe,
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
        borderColor: o ? We : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: i,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${We}`,
          outlineOffset: 2
        },
        ...n && Yt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(_t, { size: 20 }),
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
        s && /* @__PURE__ */ t(bs, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && l ? /* @__PURE__ */ t(we, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    Se,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: `${te}px`,
        ...Ot(We, h, "clear"),
        backdropFilter: "blur(8px) saturate(180%)",
        WebkitBackdropFilter: "blur(8px) saturate(180%)",
        ...o && {
          boxShadow: `${Ot(We, h, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${jo.duration}ms ${jo.easing}, box-shadow 200ms ease`,
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
        ...n && Is(h)
      },
      children: /* @__PURE__ */ t(_t, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(we, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    Se,
    {
      ...g,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: o ? We : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Yt(8, "background.paper")
      },
      children: /* @__PURE__ */ t(_t, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(we, { title: m, placement: "left", children: /* @__PURE__ */ t(
    Se,
    {
      ...g,
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
        outline: o ? `2px solid ${We}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${We}` },
        ...n && Yt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(C, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(_t, { size: 26 }) })
    }
  ) });
}, jt = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(ai, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ w(ci, { children: [
  /* @__PURE__ */ t(li, { fontSize: "small" }),
  /* @__PURE__ */ t(ae, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ae,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ t(
    dn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, Et = 24, _s = 720, Cs = 1140, Os = 1250, Ts = ({
  open: e,
  children: r,
  variant: o,
  position: n,
  width: s,
  sidebarWidthPx: i,
  bottomOffsetPx: a,
  fullScreen: c,
  fullScreenBottom: l = "0px",
  onClose: h
}) => {
  d.useEffect(() => {
    if (!e || !h)
      return;
    const y = (_) => {
      _.key === "Escape" && h();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [e, h]);
  const m = o === "docked", g = Et + a;
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
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : p = {
    bottom: g,
    ...n === "left" ? { left: i + Et } : { right: Et },
    width: s,
    maxWidth: `calc(100vw - ${Et * 2}px)`,
    height: `min(${_s}px, calc(100vh - ${g + Et}px))`,
    borderRadius: "12px"
  };
  const f = /* @__PURE__ */ t(
    Fr,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": o,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? Cs : Os,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...p
      },
      children: r
    }
  );
  return m ? /* @__PURE__ */ t(ui, { direction: "left", in: e, mountOnEnter: !0, children: f }) : /* @__PURE__ */ t(
    di,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: f
    }
  );
}, As = 180, Yo = 250, $s = "#01584F", Ms = ({
  text: e,
  testId: r
}) => {
  const o = d.useRef(null), [n, s] = d.useState(!1), i = d.useCallback(() => {
    const a = o.current;
    a && s(a.scrollWidth > a.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    i();
  }, [i, e]), d.useEffect(() => {
    const a = o.current;
    if (!a)
      return;
    const c = new ResizeObserver(() => i());
    return c.observe(a), () => c.disconnect();
  }, [i]), /* @__PURE__ */ t(
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
          ref: o,
          variant: "caption",
          component: "span",
          "aria-hidden": !0,
          "data-testid": r,
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
}, Rn = (e, r, o, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : r, a = e ? $s : r;
  return { activeBg: a, sx: n ? {
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
    color: o ? "#ffffff" : i,
    backgroundColor: o ? a : "transparent",
    "&:hover": {
      backgroundColor: o ? a : "action.hover",
      borderRadius: "4px",
      color: o ? "#ffffff" : i
    }
  } : {
    width: s,
    height: s,
    color: o ? "#ffffff" : i,
    backgroundColor: o ? a : "transparent",
    borderRadius: o ? "4px" : "50%",
    "&:hover": {
      backgroundColor: o ? a : "action.hover",
      borderRadius: "4px"
    }
  } };
}, In = ({ link: e }) => /* @__PURE__ */ w(Me, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Ms,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), _n = (e, r, o) => o ? e : /* @__PURE__ */ t(we, { title: r, placement: "right", arrow: !0, children: e }), Ls = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: a
}) => {
  const c = Fe(), [l, h] = d.useState(null), [m, g] = d.useState(!1), p = d.useRef(
    null
  ), f = d.useRef(null), y = d.useRef(null), _ = d.useRef(!1), x = d.useRef(!1), S = d.useId(), E = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, R = () => {
    E(), p.current = setTimeout(() => {
      g(!1), p.current = null;
    }, As);
  }, b = () => {
    E(), g(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const A = ($) => {
      var O;
      $.key === "Escape" && (g(!1), (O = y.current) == null || O.focus());
    };
    return document.addEventListener("keydown", A), () => document.removeEventListener("keydown", A);
  }, [m]), d.useEffect(() => {
    if (!m || !x.current)
      return;
    const A = globalThis.requestAnimationFrame(() => {
      var O;
      const $ = (O = f.current) == null ? void 0 : O.querySelector(
        '[role="menuitem"]'
      );
      $ == null || $.focus(), x.current = !1;
    });
    return () => cancelAnimationFrame(A);
  }, [m]);
  const v = je(e, r), { activeBg: I, sx: L } = Rn(
    s,
    n,
    v,
    a
  ), X = /* @__PURE__ */ t(
    Se,
    {
      ref: y,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        _.current || b();
      },
      onBlur: (A) => {
        var O;
        const $ = A.relatedTarget;
        $ && ((O = f.current) != null && O.contains($)) || R();
      },
      onKeyDown: (A) => {
        A.key === "ArrowDown" && (A.preventDefault(), x.current = !0, b());
      },
      onClick: (A) => {
        A.preventDefault(), A.stopPropagation(), e.path && (o == null || o(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? S : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: L,
      children: a ? /* @__PURE__ */ t(In, { link: e }) : e.icon
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
            ref: h,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              _.current = !0, b();
            },
            onMouseLeave: () => {
              _.current = !1, R();
            },
            children: _n(X, e.text, a)
          }
        ),
        /* @__PURE__ */ t(
          Nr,
          {
            open: m && !!l,
            anchorEl: l,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (A) => A.zIndex.modal },
            children: /* @__PURE__ */ t(
              Fr,
              {
                ref: f,
                elevation: 0,
                onMouseEnter: E,
                onMouseLeave: R,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: i,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: c.shadows[8],
                  maxWidth: Yo,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Br,
                  {
                    id: S,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Yo
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
      const re = ft($, P);
      return ht(P) ? [
        /* @__PURE__ */ t(
          fi,
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
          re
        ),
        ...K(P.subitems, re, O + 1)
      ] : [
        /* @__PURE__ */ w(
          qe,
          {
            role: "menuitem",
            title: P.text,
            disabled: !P.path,
            selected: ke(P, r),
            onClick: (de) => {
              de.preventDefault(), P.path && (o == null || o(P.path)), g(!1);
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
              P.icon ? /* @__PURE__ */ t(Ee, { children: P.icon }) : null,
              /* @__PURE__ */ t(
                Ne,
                {
                  primary: P.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          re
        )
      ];
    });
  }
}, Ds = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const a = !!(e.path && r === e.path), { sx: c } = Rn(
    s,
    n,
    a,
    i
  );
  return _n(
    /* @__PURE__ */ t(
      Se,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), e.path && (o == null || o(e.path));
        },
        disabled: !e.path,
        sx: c,
        children: i ? /* @__PURE__ */ t(In, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, ks = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), Ns = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), qo = (e, r) => e.map((o, n) => /* @__PURE__ */ w(d.Fragment, { children: [
  r(o, n),
  n < e.length - 1 ? /* @__PURE__ */ t(ks, {}) : null
] }, n)), Fs = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: a = !1
}) => {
  const c = (h, m) => ht(h) ? /* @__PURE__ */ t(
    Ls,
    {
      link: h,
      activePath: o,
      onLinkClick: n,
      accentColor: s,
      isSecondary: m,
      surfaceBackgroundColor: i,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ t(
    Ds,
    {
      link: h,
      activePath: o,
      onLinkClick: n,
      accentColor: s,
      isSecondary: m,
      railShowTitles: a
    }
  ), l = a ? 1.25 : 1;
  return /* @__PURE__ */ w(
    Me,
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
        qo(e, (h) => c(h, !1)),
        r.length > 0 ? /* @__PURE__ */ w($e, { children: [
          /* @__PURE__ */ t(Ns, {}),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Me, { gap: l, alignItems: "center", children: qo(
            r,
            (h) => c(h, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Bs = (e) => e ? gn(e) : "USER", Ws = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), Zo = {
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
) : null, Zr = ({ name: e, avatar: r, color: o, size: n = 36 }) => /* @__PURE__ */ t(
  hi,
  {
    src: r,
    alt: e,
    sx: {
      width: n,
      height: n,
      flexShrink: 0,
      fontSize: n * 0.36,
      fontWeight: 600,
      bgcolor: o,
      color: "#ffffff"
    },
    children: Ws(e)
  }
), Cn = ({ name: e, role: r, avatar: o, avatarColor: n, showText: s }) => /* @__PURE__ */ w($e, { children: [
  /* @__PURE__ */ t(Zr, { name: e, avatar: o, color: n }),
  s && /* @__PURE__ */ w(
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
            sx: { ...Zo, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            variant: "caption",
            sx: { ...Zo, opacity: 0.8, color: "inherit" },
            children: Bs(r)
          }
        )
      ]
    }
  )
] }), Jo = {
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
  onClose: r,
  placement: o,
  width: n,
  avatarColor: s,
  showNotifications: i,
  notificationCount: a,
  onNotificationsClick: c,
  userName: l = "User",
  userRole: h,
  userAvatar: m,
  menuItems: g = [],
  showSettings: p,
  onSettingsClick: f,
  showThemeToggler: y,
  theme: _,
  onThemeToggle: x,
  onLogout: S
}) => {
  const E = (R) => () => {
    r(), R == null || R();
  };
  return /* @__PURE__ */ w(
    mi,
    {
      anchorEl: e,
      open: !!e,
      onClose: r,
      anchorOrigin: Jo[o].anchor,
      transformOrigin: Jo[o].transform,
      slotProps: {
        paper: {
          sx: {
            width: n ?? 240,
            maxWidth: "calc(100vw - 16px)",
            mt: o === "beside" ? 0 : -1,
            ml: o === "beside" ? 1.5 : 0,
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
          Me,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              Cn,
              {
                name: l,
                role: h,
                avatar: m,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Ze, {}),
        i && /* @__PURE__ */ w(qe, { onClick: E(c), children: [
          /* @__PURE__ */ t(Ee, { children: /* @__PURE__ */ t(pn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Ne, { children: "Notifications" }),
          /* @__PURE__ */ t(Mr, { count: a })
        ] }),
        g.map((R) => /* @__PURE__ */ w(qe, { onClick: E(R.onClick), children: [
          R.icon && /* @__PURE__ */ t(Ee, { children: R.icon }),
          /* @__PURE__ */ t(Ne, { inset: !R.icon, children: R.label }),
          /* @__PURE__ */ t(Mr, { count: R.badge })
        ] }, R.key)),
        p && /* @__PURE__ */ w(qe, { onClick: E(f), children: [
          /* @__PURE__ */ t(Ee, { children: /* @__PURE__ */ t(pi, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Ne, { children: "Settings" })
        ] }),
        y && [
          /* @__PURE__ */ t(Ze, {}, "theme-divider"),
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
              gi,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: _,
                onChange: (R, b) => b && b !== _ && (x == null ? void 0 : x()),
                disabled: !x,
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
                  /* @__PURE__ */ t(Oo, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Oo, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Ze, {}),
        /* @__PURE__ */ w(
          qe,
          {
            onClick: E(S),
            sx: {
              color: _ === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(Ee, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(fn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Ne, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Tn = 64, Ps = 2, wt = ({
  label: e,
  icon: r,
  onClick: o,
  active: n,
  color: s,
  activeColor: i,
  activeBackground: a,
  ariaLabel: c,
  haspopup: l,
  isPage: h = !1,
  testId: m
}) => /* @__PURE__ */ w(
  Qe,
  {
    onClick: o,
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
      color: n ? i : s,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: i,
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
            bgcolor: n ? a : "transparent",
            transition: "background-color 150ms"
          },
          children: r
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
), zs = ({
  onMenuClick: e,
  menuOpen: r,
  onSearchClick: o,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: i,
  assistantActive: a,
  showProfile: c,
  background: l,
  color: h,
  activeColor: m,
  activeBackground: g,
  pinnedLinks: p = [],
  activePath: f,
  onLinkClick: y,
  ..._
}) => {
  const x = p.filter((L) => L.path).slice(0, Ps), [S, E] = d.useState(
    null
  ), { userName: R = "User", userAvatar: b, avatarColor: v } = _, I = { color: h, activeColor: m, activeBackground: g };
  return /* @__PURE__ */ w(
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
        bgcolor: l,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          wt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(un, {}),
            onClick: e,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...I
          }
        ),
        x.map((L) => /* @__PURE__ */ t(
          wt,
          {
            label: L.text,
            icon: L.icon,
            onClick: () => y == null ? void 0 : y(L.path),
            active: je(L, f),
            isPage: !0,
            testId: `mobile-nav-link-${L.text}`,
            ...I
          },
          L.path
        )),
        s && /* @__PURE__ */ t(
          wt,
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
                  borderColor: a ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(_t, { size: 18 })
              }
            ),
            onClick: i,
            active: a,
            testId: "mobile-nav-nexa",
            ...I
          }
        ),
        o && /* @__PURE__ */ t(
          wt,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Wr, {}),
            onClick: o,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...I
          }
        ),
        c && /* @__PURE__ */ w($e, { children: [
          /* @__PURE__ */ t(
            wt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${R}`,
              icon: /* @__PURE__ */ t(
                Zr,
                {
                  name: R,
                  avatar: b,
                  color: v,
                  size: 26
                }
              ),
              onClick: (L) => E(L.currentTarget),
              active: !!S,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...I
            }
          ),
          /* @__PURE__ */ t(
            On,
            {
              anchorEl: S,
              onClose: () => E(null),
              placement: "above-end",
              width: 280,
              ..._
            }
          )
        ] })
      ]
    }
  );
}, Gs = ({
  open: e,
  onClose: r,
  search: o
}) => /* @__PURE__ */ t(
  xi,
  {
    anchor: "top",
    open: e,
    onClose: r,
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
      Me,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(C, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ t(
            dn,
            {
              onClick: r,
              sx: { flexShrink: 0, textTransform: "none" },
              children: "Cancel"
            }
          )
        ]
      }
    )
  }
), Us = ({
  height: e,
  onMenuClick: r,
  appName: o,
  logo: n,
  onBrandClick: s,
  brandMenuOpen: i,
  background: a,
  color: c,
  brandColor: l = c,
  endContent: h
}) => /* @__PURE__ */ t(
  bi,
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
    children: /* @__PURE__ */ w(yi, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ t(
        Se,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: c },
          children: /* @__PURE__ */ t(un, {})
        }
      ),
      /* @__PURE__ */ t(
        qt,
        {
          title: o,
          appName: o,
          logo: n,
          onClick: s,
          menuOpen: i,
          color: l,
          testId: "mobile-brand"
        }
      ),
      h ? /* @__PURE__ */ t(C, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: h }) : null
    ] })
  }
), Jr = ({
  count: e,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const a = Yr(), c = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    we,
    {
      title: c,
      placement: s,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ t(
        Se,
        {
          onClick: r,
          "aria-label": c,
          "data-testid": i,
          sx: {
            color: o,
            flexShrink: 0,
            borderRadius: "8px",
            "&:hover": { bgcolor: n },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: o
            }
          },
          children: /* @__PURE__ */ t(
            hn,
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
              children: /* @__PURE__ */ t(pn, {})
            }
          )
        }
      )
    }
  );
}, An = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Hs = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Qo = Re(rr), en = Re(or), tn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Xs = ({ mode: e, onToggle: r, accentColor: o, tint: n, glass: s = !1 }) => {
  const i = Fe().palette.mode === "dark", a = $t(), c = d.useRef(null), l = d.useRef(null), h = (p) => {
    var f;
    p !== e && (r == null || r()), (f = (p === "light" ? c : l).current) == null || f.focus();
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
  }, g = (p, f, y, _) => {
    const x = e === p;
    return /* @__PURE__ */ t(
      Qe,
      {
        ref: _,
        role: "radio",
        "aria-checked": x,
        "aria-label": f,
        tabIndex: x ? 0 : -1,
        onClick: () => h(p),
        "data-testid": `theme-segment-${p}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: s ? `${te}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: x ? i ? "#ffffff" : o : "text.secondary",
          bgcolor: x ? n : "transparent",
          ...s && x ? Vr(i, a) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": x ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: i ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${st(o, 0.6)}`
          },
          ...An
        },
        children: /* @__PURE__ */ t(y, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ w(
    Me,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: m,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${te}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        g("light", "Light", Si, c),
        g("dark", "Dark", vi, l)
      ]
    }
  );
}, Ks = ({
  open: e,
  anchorEl: r,
  onClose: o,
  width: n,
  renderAvatar: s,
  userName: i,
  userEmail: a,
  roleLabel: c,
  accentColor: l,
  tint: h,
  showThemeToggler: m,
  theme: g,
  onThemeToggle: p,
  onProfileClick: f,
  onLinkClick: y,
  menuItems: _ = [],
  onLogout: x,
  glass: S = !1
}) => {
  const E = Fe(), R = E.palette.mode === "dark", b = d.useRef(null), v = qr({
    enabled: S,
    isDark: R,
    selector: tn,
    radius: te
  }), [I, L] = d.useState(null);
  d.useEffect(() => {
    if (!I || typeof ResizeObserver > "u")
      return;
    const O = new ResizeObserver(() => {
      var P;
      (P = b.current) == null || P.updatePosition();
    });
    return O.observe(I), () => O.disconnect();
  }, [I]);
  const X = (O) => {
    o(), O == null || O();
  }, K = (O) => {
    o(), O.onClick ? O.onClick() : O.path && (y == null || y(O.path));
  }, A = {
    borderRadius: S ? `${te}px` : "8px",
    py: 1,
    gap: 0.5
  }, $ = /* @__PURE__ */ w(Me, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    s(44),
    /* @__PURE__ */ w(C, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ae, { noWrap: !0, sx: { fontWeight: 600 }, children: i }),
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
    Pr,
    {
      open: e,
      anchorEl: r,
      onClose: o,
      action: b,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...S ? {
        slots: { transition: kr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: L,
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
            borderRadius: `${te}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${tn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Hs, width: n, minWidth: n },
          children: [
            S ? /* @__PURE__ */ t(
              mt,
              {
                isDark: R,
                solid: E.palette.background.paper,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Kr} ${Qo.duration}ms ${Qo.easing} both`,
                  [Ce]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ w(
              C,
              {
                ...v.containerProps,
                sx: S ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${jr} ${en.duration}ms ${en.easing} 70ms both`,
                  [Ce]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  v.lens,
                  f ? /* @__PURE__ */ t(
                    Qe,
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
                        ...An
                      },
                      children: $
                    }
                  ) : /* @__PURE__ */ t(C, { "data-testid": "account-menu-header", children: $ }),
                  /* @__PURE__ */ t(Ze, {}),
                  m ? /* @__PURE__ */ w(
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
                        /* @__PURE__ */ t(Ee, { children: /* @__PURE__ */ t(Ei, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Xs,
                          {
                            glass: S,
                            mode: g,
                            onToggle: p,
                            accentColor: l,
                            tint: h
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ w(
                    Br,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        _.map((O) => /* @__PURE__ */ w(
                          qe,
                          {
                            onClick: () => K(O),
                            "data-testid": `menu-item-${O.key}`,
                            sx: A,
                            children: [
                              /* @__PURE__ */ t(Ee, { children: O.icon }),
                              /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: O.label }),
                              /* @__PURE__ */ t(Mr, { count: O.badge })
                            ]
                          },
                          O.key
                        )),
                        x ? /* @__PURE__ */ t(Ze, { component: "li", sx: { my: 0.5 } }) : null,
                        x ? /* @__PURE__ */ w(
                          qe,
                          {
                            onClick: () => X(x),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...A,
                              color: R ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(Ee, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(fn, { fontSize: "small" }) }),
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
}, js = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Vs = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  logo: s,
  title: i,
  onBrandClick: a,
  brandMenuOpen: c,
  brandColor: l,
  headerBackgroundColor: h,
  headerForegroundColor: m,
  activeAccentColor: g = "#01584f",
  groupAccentColor: p,
  activeForegroundColor: f,
  foregroundColor: y,
  surfaceBackgroundColor: _,
  collapsed: x,
  expandedWidth: S,
  collapsedWidth: E,
  topContent: R,
  submenuMode: b,
  color: v,
  hoverColor: I,
  avatarColor: L,
  showProfile: X = !0,
  userName: K = "User",
  userEmail: A,
  userRole: $,
  userAvatar: O,
  showNotifications: P = !0,
  notificationCount: re = 0,
  onNotificationsClick: de,
  whatsNewCount: me = 0,
  onProfileClick: z,
  menuItems: W,
  onLogout: H,
  theme: G = "light",
  showThemeToggler: q = !0,
  onThemeToggle: M
}) => {
  const D = Fe(), j = D.palette.mode === "dark", k = _ ?? (j ? D.palette.background.paper : "#ffffff"), V = v ?? y ?? (j ? D.palette.text.primary : g), Z = I ?? p ?? Zt(g), Ge = L ?? g, fe = d.useRef(null), [Oe, ge] = d.useState(!1), xe = $ ? gn($) : void 0, ue = (at) => /* @__PURE__ */ t(
    Zr,
    {
      name: K,
      avatar: O,
      color: Ge,
      size: at
    }
  ), ie = re + me, pe = P ? /* @__PURE__ */ t(
    Jr,
    {
      count: ie,
      onClick: de,
      color: V,
      hoverColor: Z,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, be = X ? /* @__PURE__ */ w(
    Qe,
    {
      ref: fe,
      onClick: () => ge(!0),
      "aria-haspopup": "menu",
      "aria-expanded": Oe,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: x ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: Oe ? Z : "transparent",
        "&:hover": { bgcolor: Z },
        ...js
      },
      children: [
        x && P ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            hn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !ie,
              children: ue(36)
            }
          )
        ) : ue(x ? 36 : 40),
        x ? null : /* @__PURE__ */ w(C, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: V, lineHeight: 1.3 },
              children: K
            }
          ),
          xe ? /* @__PURE__ */ t(
            ae,
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
              children: xe
            }
          ) : null
        ] })
      ]
    }
  ) : null, Te = !!pe && (!x || !be);
  return /* @__PURE__ */ w(
    C,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": x ? "true" : "false",
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
            secondaryLinks: r,
            activePath: o,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: s,
            title: i,
            onBrandClick: a,
            brandMenuOpen: c,
            brandColor: l,
            headerBackgroundColor: h,
            headerForegroundColor: m,
            activeAccentColor: g,
            groupAccentColor: p,
            activeForegroundColor: f,
            foregroundColor: y,
            surfaceBackgroundColor: k,
            collapsed: x,
            expandedWidth: S,
            collapsedWidth: E,
            topContent: R,
            footer: be || Te ? /* @__PURE__ */ w(
              Me,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  be,
                  Te ? pe : null
                ]
              }
            ) : void 0,
            submenuMode: b
          }
        ),
        X ? /* @__PURE__ */ t(
          Ks,
          {
            open: Oe,
            anchorEl: fe.current,
            onClose: () => ge(!1),
            width: Math.max(S - 16, 240),
            renderAvatar: ue,
            userName: K,
            userEmail: A,
            roleLabel: xe,
            accentColor: g,
            tint: Z,
            showThemeToggler: q,
            theme: G,
            onThemeToggle: M,
            onProfileClick: z,
            onLinkClick: n,
            menuItems: W,
            onLogout: H,
            glass: b === "flyout"
          }
        ) : null
      ]
    }
  );
}, rn = Re(rr), on = Re(or), nn = 260, Ys = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, qs = ({
  anchorEl: e,
  onClose: r,
  platforms: o,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: a = !1
}) => {
  const c = Fe(), l = c.palette.mode === "dark", h = !!e, m = qr({
    enabled: a,
    isDark: l,
    selector: ".MuiMenuItem-root",
    radius: te
  }), g = /* @__PURE__ */ t(
    Br,
    {
      autoFocusItem: h,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: o.map((p) => {
        const f = p.key === n, y = p.accentColor ?? i;
        return /* @__PURE__ */ w(
          qe,
          {
            selected: f,
            onClick: () => s(p),
            "data-testid": `platform-item-${p.key}`,
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
              /* @__PURE__ */ t(Ee, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                C,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: y,
                    boxShadow: a ? `0 0 0 3px ${l ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Ne,
                {
                  primary: p.name,
                  secondary: p.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              f ? /* @__PURE__ */ t(
                wi,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: y }
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
      open: h,
      anchorEl: e,
      onClose: r,
      onClick: (p) => p.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: kr },
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
          "data-glass": a ? "true" : void 0,
          sx: a ? {
            position: "relative",
            minWidth: nn,
            borderRadius: `${te}px`
          } : { ...Ys, minWidth: nn },
          children: a ? /* @__PURE__ */ w($e, { children: [
            /* @__PURE__ */ t(
              mt,
              {
                isDark: l,
                solid: c.palette.background.paper,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Kr} ${rn.duration}ms ${rn.easing} both`,
                  [Ce]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ w(
              C,
              {
                ...m.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${jr} ${on.duration}ms ${on.easing} 70ms both`,
                  [Ce]: { animation: "none" }
                },
                children: [
                  m.lens,
                  g
                ]
              }
            )
          ] }) : g
        }
      )
    }
  );
}, Zs = ({ children: e, anchorEl: r, ...o }) => {
  const n = d.useRef(null), s = !!(r && n.current && r.contains(n.current));
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
          qs,
          {
            ...o,
            anchorEl: s ? r : null
          }
        )
      ]
    }
  );
}, Js = ({
  compact: e,
  color: r,
  hoverColor: o,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var R;
  const {
    avatarColor: a,
    showNotifications: c,
    notificationCount: l,
    onNotificationsClick: h,
    userName: m = "User",
    userRole: g,
    userAvatar: p
  } = i, f = d.useRef(null), [y, _] = d.useState(
    null
  ), x = !!y, S = d.useRef(e);
  if (d.useEffect(() => {
    e && !S.current && _(null), S.current = e;
  }, [e]), !c && !n)
    return null;
  const E = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ w($e, { children: [
    /* @__PURE__ */ w(
      Me,
      {
        ref: f,
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
                Qe,
                {
                  onClick: () => _(f.current),
                  "aria-label": `Account menu for ${m}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": x,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: r,
                    bgcolor: x ? o : "transparent",
                    "&:hover": { bgcolor: o },
                    ...E
                  },
                  children: /* @__PURE__ */ t(
                    Cn,
                    {
                      name: m,
                      role: g,
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
            Jr,
            {
              count: l + s,
              onClick: h,
              color: r,
              hoverColor: o,
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
        anchorEl: y,
        onClose: () => _(null),
        placement: e ? "beside" : "above",
        width: e || (R = f.current) == null ? void 0 : R.clientWidth,
        ...i
      }
    )
  ] });
}, Qs = 120, ea = 300, sn = Re(rr), an = Re(or), ta = (e) => {
  var r;
  return ((r = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : r.value) ?? "";
}, ra = 'input, textarea, [contenteditable="true"]', Lr = (e) => {
  var r;
  (r = e == null ? void 0 : e.querySelector(ra)) == null || r.focus();
}, oa = ({
  search: e,
  mode: r,
  onExpand: o,
  autoFocus: n = !1,
  onAutoFocused: s,
  color: i,
  hoverColor: a
}) => {
  const c = Yr(), l = d.useContext(ir), h = d.useRef(null), [m, g] = d.useState(null);
  return d.useEffect(() => {
    r === "full" && n && (Lr(h.current), s == null || s());
  }, [r, n, s]), r === "full" ? /* @__PURE__ */ t(
    C,
    {
      ref: h,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : r === "popover" && l ? /* @__PURE__ */ t(
    na,
    {
      search: e,
      color: i,
      railTooltip: c
    }
  ) : /* @__PURE__ */ w(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(we, { title: "Search", placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
          Se,
          {
            "aria-label": "Search",
            onClick: (p) => r === "expand" ? o == null ? void 0 : o() : g(p.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: i,
              borderRadius: "8px",
              "&:hover": { bgcolor: a }
            },
            children: /* @__PURE__ */ t(Wr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Pr,
          {
            open: !!m,
            anchorEl: m,
            onClose: () => g(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => Lr(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, na = ({ search: e, color: r, railTooltip: o }) => {
  const n = Fe().palette.mode === "dark", s = Di(n, pt(r, n ? 0.3 : 0.35)), i = d.useRef(null), a = d.useRef(null), [c, l] = d.useState(!1), h = d.useRef(!1), m = d.useRef(void 0), g = d.useRef(void 0), p = () => {
    clearTimeout(m.current), clearTimeout(g.current);
  }, f = d.useCallback(() => {
    p(), h.current = !1, l(!1);
  }, []), y = () => {
    clearTimeout(g.current), c || (clearTimeout(m.current), m.current = setTimeout(
      () => l(!0),
      Qs
    ));
  }, _ = () => {
    clearTimeout(m.current), clearTimeout(g.current), g.current = setTimeout(() => {
      !h.current && !ta(a.current) && l(!1);
    }, ea);
  };
  return d.useEffect(() => p, []), d.useEffect(() => {
    if (!c)
      return;
    const x = setTimeout(() => Lr(a.current)), S = (R) => {
      var v, I;
      const b = R.target;
      !((v = a.current) != null && v.contains(b)) && !((I = i.current) != null && I.contains(b)) && f();
    }, E = (R) => {
      var b;
      R.key === "Escape" && (f(), (b = i.current) == null || b.focus());
    };
    return document.addEventListener("pointerdown", S), document.addEventListener("keydown", E), () => {
      clearTimeout(x), document.removeEventListener("pointerdown", S), document.removeEventListener("keydown", E);
    };
  }, [c, f]), /* @__PURE__ */ w(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          we,
          {
            title: c ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...o,
            children: /* @__PURE__ */ t(
              Se,
              {
                ref: i,
                "aria-label": "Search",
                "aria-expanded": c,
                onMouseEnter: y,
                onMouseLeave: _,
                onClick: () => {
                  p(), h.current = !0, l(!0);
                },
                sx: {
                  width: 44,
                  height: 44,
                  color: r,
                  borderRadius: `${te}px`
                },
                children: /* @__PURE__ */ t(Wr, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Nr,
          {
            open: c,
            anchorEl: i.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ w(
              C,
              {
                ref: a,
                "data-testid": "sidebar-search-card",
                onMouseEnter: y,
                onMouseLeave: _,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: `${te}px`
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
                        animation: `${Kr} ${sn.duration}ms ${sn.easing} both`,
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
                        animation: `${jr} ${an.duration}ms ${an.easing} 60ms both`,
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
}, ia = 100, sa = () => {
  const e = d.useRef(null), r = d.useRef(void 0), o = d.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = d.useState(!1), [i, a] = d.useState(!1), c = () => {
    clearTimeout(r.current), r.current = void 0;
  };
  return d.useEffect(() => {
    const h = (g) => {
      o.current.has(g) || (c(), s(!1));
    }, m = () => {
      c(), s(!1);
    };
    return document.addEventListener("mouseover", h), document.documentElement.addEventListener("mouseleave", m), () => {
      c(), document.removeEventListener("mouseover", h), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), d.useEffect(() => {
    if (!i)
      return;
    const h = (m) => {
      var g;
      (g = e.current) != null && g.contains(m.target) || a(!1);
    };
    return document.addEventListener("pointerdown", h), () => document.removeEventListener("pointerdown", h);
  }, [i]), {
    expanded: n || i,
    pin: () => a(!0),
    rootProps: {
      ref: e,
      onMouseOver: (h) => {
        o.current.add(h.nativeEvent), !n && r.current === void 0 && (r.current = setTimeout(() => {
          r.current = void 0, s(!0);
        }, ia));
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
}, aa = 100, cn = 80, wr = 56, ca = 300, Rr = 288, Rt = 72, Ir = 68, Vt = 8, la = te, da = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", ua = 68, fa = { xs: 2, md: 5 }, pa = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), ha = (e, r) => {
  const o = (n) => typeof n == "number" ? r.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, o(s)])
  ) : o(e);
}, pc = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: a = "rail",
  sidebarSubmenu: c = "expand",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: h,
  logo: m,
  onBrandClick: g,
  searchComponent: p,
  brandColor: f,
  contentPadding: y = fa,
  userMenuItems: _,
  sidebarBackgroundColor: x,
  sidebarHeaderBackgroundColor: S,
  groupAccentColor: E,
  activeSidebarForegroundColor: R,
  enableRefreshToken: b = !1,
  activePath: v,
  onLinkClick: I,
  showProfile: L = !0,
  userName: X,
  userRole: K,
  userAvatar: A,
  userEmail: $,
  onLogout: O,
  showSettings: P = !0,
  onSettingsClick: re,
  onProfileClick: de,
  showNotifications: me = !0,
  notificationCount: z = 0,
  NotificationSidebarContent: W,
  whatsNewCount: H = 0,
  onNotificationsClick: G,
  platforms: q,
  currentPlatformKey: M,
  onPlatformSelect: D,
  onVerify: j,
  alertProps: k,
  style: V,
  sidebarStyles: Z,
  contentStyles: Ge,
  accentColor: fe,
  sidebarAccentColor: Oe,
  sidebarForegroundColor: ge,
  contentBackgroundColor: xe,
  theme: ue = "light",
  showThemeToggler: ie = !1,
  onThemeToggle: pe,
  GlobalChatSidebar: be,
  useChatSidebar: Te,
  chatPanelMode: Mt = "docked",
  chatPanelPosition: at = "right",
  chatPanelWidth: Lt = 420,
  onChatClose: sr,
  showAssistant: et = !1,
  assistantPlacement: gt = "sidebar",
  assistantShortcut: Dt = "j",
  onAssistantClick: Ue,
  assistantActive: ct = !1,
  assistantBusy: kt = !1,
  customNavbar: Nt,
  customNavbarProps: ar,
  redirectToLogin: He,
  apiBaseUrl: u
}) => {
  const F = ti(), B = ri(F.breakpoints.down("md")), N = Ro(
    () => ln(ws(ue)),
    [ue]
  ), U = ue === "dark", J = fe ?? "#01584f", Q = Oe ?? J, oe = xe ?? (U ? "hsl(220, 35%, 9%)" : "#f2f9fc"), se = a === "collapsible", tt = a === "panel", $n = tt && s && !B, Xe = a === "rail-labeled", Mn = se || Xe, rt = x ?? (U ? "hsl(220, 30%, 7%)" : "#ffffff"), cr = S ?? rt, Be = ge ?? (U ? "#ffffff" : Q), xt = E ?? Zt(Be), bt = S ? _r(cr) : Be, Qr = (T) => /* @__PURE__ */ t(
    ce,
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
  ), Ft = f ?? bt, [eo, lr] = nt(
    null
  ), dr = ((q == null ? void 0 : q.length) ?? 0) > 1, Ln = Io(() => lr(null), []), Dn = (T) => {
    lr(null), D ? D(T) : T.key !== M && T.url && window.location.assign(T.url);
  }, to = (T) => dr ? /* @__PURE__ */ t(
    Zs,
    {
      anchorEl: eo,
      onClose: Ln,
      platforms: q,
      currentKey: M,
      onSelect: Dn,
      accentColor: J,
      glass: c === "flyout" && (se || tt) && !B,
      children: T
    }
  ) : T, Bt = dr ? (T) => lr(T.currentTarget) : g, Wt = dr ? !!eo : void 0, ur = to(
    m ?? Qr(Ft)
  ), kn = to(
    m ?? Qr(f ?? Be)
  ), fr = sa(), Le = c === "flyout" && (se || tt), De = Le || !fr.expanded, ro = Le ? "popover" : "expand", oo = Le ? Ir : Rt, no = Le ? "transparent" : rt, io = Le && !S ? "transparent" : cr, [Nn, so] = nt(!1), Fn = Io(() => so(!1), []);
  let ye = 0;
  s && !B && (Xe ? ye = cn : Le ? ye = Ir + 2 * Vt : se || tt ? ye = Rt : ye = aa);
  const [ao, ot] = nt(!1), [co, pr] = nt(!1), ve = B && l === "bottom-bar", lo = `calc(${Tn}px + env(safe-area-inset-bottom, 0px))`, [hr, uo] = nt({ open: !1, tab: "notifications" }), fo = () => uo((T) => ({ ...T, open: !1 })), Bn = me && !!W, [Wn, Pn] = nt(!0), [zn, Gn] = nt(!1), mr = Te == null ? void 0 : Te(), po = (mr == null ? void 0 : mr.isOpen) ?? !1, ho = Mt === "floating" ? "floating" : "docked", Un = ho === "docked" && po && be && !B ? Lt : 0, Pt = vr(j), mo = vr(!1), go = Ro(
    () => Es(u),
    [u]
  );
  Ut(() => {
    Pt.current = j;
  }, [j]);
  const gr = vr(Ue);
  gr.current = Ue;
  const yt = et && Dt ? Dt.toLowerCase() : null;
  Ut(() => {
    if (!yt)
      return;
    const T = (ne) => {
      (ne.metaKey || ne.ctrlKey) && !ne.altKey && !ne.shiftKey && ne.key.toLowerCase() === yt && gr.current && (ne.preventDefault(), gr.current());
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [yt]);
  const xo = (T) => {
    const ne = O(T);
    ne instanceof Promise && ne.catch((Ke) => {
      console.error("Error in logout handler:", Ke);
    });
  };
  if (Ut(() => {
    (() => {
      var ne;
      try {
        const { isAuthenticated: Ke } = vs();
        if (!Ke) {
          console.log("No session found, redirecting to login"), At(), He();
          return;
        }
        if (!mo.current) {
          const { user: St, error: yr } = Ss();
          if (St && !yr) {
            const Zn = {
              name: St.name || "",
              email: St.email || "",
              profilePicture: St.profilePicture || "",
              role: St.role || ""
            };
            mo.current = !0, (ne = Pt.current) == null || ne.call(Pt, Zn);
          } else
            yr && console.error("Error getting user data:", yr);
        }
        Gn(!0);
      } catch (Ke) {
        console.error("Error checking session:", Ke), At(), He();
      } finally {
        Pn(!1);
      }
    })();
  }, [He]), Ut(() => {
    b && Rs(go, He);
  }, [b, go]), Wn)
    return /* @__PURE__ */ t(wo, { theme: N, children: /* @__PURE__ */ t(Cr.Provider, { value: Q, children: /* @__PURE__ */ w(
      ce,
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
            oi,
            {
              size: 60,
              thickness: 4,
              sx: { color: J }
            }
          ),
          /* @__PURE__ */ t(ce, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) }) });
  if (!zn)
    return null;
  const vt = p ?? (Nt ? /* @__PURE__ */ t(Nt, { ...ar }) : null), Hn = (T) => {
    ot(!1), pr(!1), uo({ open: !0, tab: T });
  }, xr = W && (() => Hn("notifications")), Xn = z + H, bo = {
    avatarColor: Q,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: _ == null ? void 0 : _.map(
      (T) => T.onClick || !T.path ? T : { ...T, onClick: () => I == null ? void 0 : I(T.path) }
    ),
    showNotifications: me,
    notificationCount: z,
    whatsNewCount: H,
    onNotificationsClick: xr,
    showProfile: L,
    userName: X,
    userRole: K,
    userAvatar: A,
    showSettings: P,
    onSettingsClick: re,
    showThemeToggler: ie,
    theme: ue,
    onThemeToggle: pe,
    onLogout: xo
  }, br = (T) => /* @__PURE__ */ t(
    Js,
    {
      ...bo,
      compact: T,
      color: Be,
      hoverColor: xt
    }
  ), yo = yt ? [pa() ? "⌘" : "Ctrl", yt.toUpperCase()] : void 0, Kn = (T) => et && gt === "sidebar" ? /* @__PURE__ */ t(
    Vo,
    {
      variant: T ? "sidebar-icon" : "sidebar",
      onClick: Ue,
      active: ct,
      busy: kt,
      shortcutKeys: yo,
      accentColor: Be
    }
  ) : null, jn = (T) => vt ? /* @__PURE__ */ t(
    oa,
    {
      search: vt,
      mode: T,
      onExpand: () => {
        fr.pin(), so(!0);
      },
      autoFocus: Nn,
      onAutoFocused: Fn,
      color: Be,
      hoverColor: xt
    }
  ) : null, zt = (T) => {
    const ne = Kn(T !== "full"), Ke = jn(T);
    return ne || Ke ? /* @__PURE__ */ w(
      si,
      {
        spacing: 1.5,
        sx: { alignItems: T === "full" ? "stretch" : "center" },
        children: [
          ne,
          Ke
        ]
      }
    ) : void 0;
  }, vo = () => /* @__PURE__ */ t(
    Tr,
    {
      mainLinks: r,
      secondaryLinks: o,
      activePath: v,
      onLinkClick: I,
      showHeaderBar: se,
      logo: ur,
      title: n,
      onBrandClick: Bt,
      brandMenuOpen: Wt,
      brandColor: Ft,
      headerBackgroundColor: se ? io : void 0,
      headerForegroundColor: se ? bt : void 0,
      activeAccentColor: Q,
      groupAccentColor: E,
      activeForegroundColor: R,
      foregroundColor: ge,
      surfaceBackgroundColor: no,
      collapsed: Xe || De,
      showLabels: Xe,
      expandedWidth: Rr,
      collapsedWidth: Xe ? cn : oo,
      topContent: zt(
        Xe ? "popover" : De ? ro : "full"
      ),
      footer: br(Xe || De),
      submenuMode: Le ? "flyout" : "inline"
    }
  ), So = (T) => Le ? Vn(T) : Yn(T), Vn = (T) => /* @__PURE__ */ t(
    ce,
    {
      component: "aside",
      sx: {
        width: ye,
        minWidth: ye,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ne) => ne.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: oe
      },
      children: /* @__PURE__ */ w(
        ce,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: Vt,
            bottom: Vt,
            left: Vt,
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
                solid: rt,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              ce,
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
    ce,
    {
      component: "aside",
      sx: {
        width: Rt,
        minWidth: Rt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ne) => ne.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        ce,
        {
          ...Le ? {} : fr.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": De ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: De ? Rt : Rr,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: rt,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: De ? "none" : `4px 0 24px rgba(0, 0, 0, ${U ? 0.5 : 0.12})`,
            transition: da,
            ...Z
          },
          children: T
        }
      )
    }
  ), qn = ha(
    y,
    F
  );
  return /* @__PURE__ */ t(wo, { theme: N, children: /* @__PURE__ */ t(Cr.Provider, { value: Q, children: /* @__PURE__ */ w(
    ce,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...V
      },
      children: [
        /* @__PURE__ */ t(ni, {}),
        B && /* @__PURE__ */ t(
          Us,
          {
            height: wr,
            onMenuClick: s && !ve ? () => ot(!0) : void 0,
            appName: n,
            logo: ur,
            onBrandClick: Bt,
            brandMenuOpen: Wt,
            background: cr,
            color: bt,
            brandColor: Ft,
            endContent: me ? /* @__PURE__ */ t(
              Jr,
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
        s && !B && Xe && /* @__PURE__ */ t(
          ce,
          {
            component: "aside",
            sx: {
              width: ye,
              minWidth: ye,
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
            children: vo()
          }
        ),
        s && !B && se && So(
          /* @__PURE__ */ w($e, { children: [
            vo(),
            (k == null ? void 0 : k.show) && !De && /* @__PURE__ */ t(jt, { ...k })
          ] })
        ),
        $n && So(
          /* @__PURE__ */ w($e, { children: [
            /* @__PURE__ */ t(
              Vs,
              {
                mainLinks: r,
                secondaryLinks: o,
                activePath: v,
                onLinkClick: I,
                logo: ur,
                title: n,
                onBrandClick: Bt,
                brandMenuOpen: Wt,
                brandColor: Ft,
                headerBackgroundColor: io,
                headerForegroundColor: bt,
                activeAccentColor: Q,
                groupAccentColor: E,
                activeForegroundColor: R,
                foregroundColor: ge,
                surfaceBackgroundColor: no,
                collapsed: De,
                expandedWidth: Rr,
                collapsedWidth: oo,
                topContent: zt(
                  De ? ro : "full"
                ),
                submenuMode: Le ? "flyout" : "inline",
                color: Be,
                hoverColor: xt,
                avatarColor: Q,
                showProfile: L,
                userName: X,
                userEmail: $,
                userRole: K,
                userAvatar: A,
                showNotifications: me,
                notificationCount: z,
                onNotificationsClick: Bn ? xr : G,
                whatsNewCount: H,
                onProfileClick: de,
                menuItems: _,
                onLogout: xo,
                theme: ue,
                showThemeToggler: ie,
                onThemeToggle: pe
              }
            ),
            (k == null ? void 0 : k.show) && !De && /* @__PURE__ */ t(jt, { ...k })
          ] })
        ),
        s && !B && !Mn && !tt && /* @__PURE__ */ t(
          _o,
          {
            variant: "permanent",
            sx: {
              width: ye,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: ye,
                boxSizing: "border-box",
                bgcolor: oe,
                borderRight: "none"
              },
              ...Z
            },
            children: /* @__PURE__ */ w(
              ce,
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
                    ce,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        qt,
                        {
                          logo: kn,
                          appName: n,
                          onClick: Bt,
                          menuOpen: Wt,
                          color: f ?? Be,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  zt("popover"),
                  /* @__PURE__ */ w(
                    ce,
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
                          Fs,
                          {
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: v,
                            onLinkClick: I,
                            accentColor: Q,
                            surfaceBackgroundColor: oe,
                            railShowTitles: i
                          }
                        ),
                        (k == null ? void 0 : k.show) && /* @__PURE__ */ t(jt, { ...k })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(ce, { sx: { py: 1.5 }, children: br(!0) })
                ]
              }
            )
          }
        ),
        s && B && /* @__PURE__ */ w(
          ii,
          {
            anchor: ve ? "bottom" : "left",
            open: ao,
            onOpen: () => ot(!0),
            onClose: () => ot(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (T) => T.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: rt,
                  backgroundImage: "none",
                  ...ve ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              ve && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                ce,
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
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: v,
                  onLinkClick: (T) => {
                    I == null || I(T), ot(!1);
                  },
                  onLinkAction: () => ot(!1),
                  collapsed: !1,
                  expandedWidth: ve ? "100%" : ca,
                  activeAccentColor: Q,
                  groupAccentColor: E,
                  activeForegroundColor: R,
                  foregroundColor: ge,
                  surfaceBackgroundColor: rt,
                  topInsetPx: ve ? 8 : 0,
                  topContent: ve ? void 0 : zt("full"),
                  footer: ve ? void 0 : br(!1)
                }
              ),
              (k == null ? void 0 : k.show) && /* @__PURE__ */ t(jt, { ...k })
            ]
          }
        ),
        ve && vt && /* @__PURE__ */ t(
          Gs,
          {
            open: co,
            onClose: () => pr(!1),
            search: vt
          }
        ),
        ve && /* @__PURE__ */ t(
          zs,
          {
            ...bo,
            pinnedLinks: h,
            activePath: v,
            onLinkClick: I,
            onMenuClick: s ? () => ot(!0) : void 0,
            menuOpen: ao,
            onSearchClick: vt ? () => pr(!0) : void 0,
            searchOpen: co,
            showAssistant: et,
            onAssistantClick: Ue,
            assistantActive: ct,
            showProfile: L,
            background: rt,
            color: Be,
            activeColor: Q,
            activeBackground: xt
          }
        ),
        /* @__PURE__ */ t(
          ce,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": qn,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": B ? `${wr}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: ye ? `calc(100% - ${ye}px)` : "100%",
              mt: B ? `${wr}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ve && {
                pb: `calc(var(--lumora-content-padding) + ${lo})`
              },
              backgroundColor: oe,
              ...Ge
            },
            children: e
          }
        ),
        be && /* @__PURE__ */ t(
          Ts,
          {
            open: po,
            variant: ho,
            position: at,
            width: Lt,
            sidebarWidthPx: ye,
            bottomOffsetPx: et && gt === "floating" ? ua : 0,
            fullScreen: B,
            fullScreenBottom: ve ? lo : "0px",
            onClose: sr,
            children: /* @__PURE__ */ t(be, {})
          }
        ),
        et && gt === "floating" && !ve && /* @__PURE__ */ t(
          Vo,
          {
            variant: "floating",
            rightOffsetPx: Un,
            shortcutKeys: yo,
            onClick: Ue,
            active: ct,
            busy: kt
          }
        ),
        me && W && /* @__PURE__ */ t(
          _o,
          {
            anchor: "right",
            open: hr.open,
            onClose: fo,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              W,
              {
                onClose: fo,
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
  bs as Kbd,
  pc as LumoraWrapper,
  At as clearAuthTokens,
  pc as default,
  fc as getAuthErrorMessage,
  Tt as getAuthTokens,
  Ss as getCurrentUser,
  ws as getDesignTokens,
  vs as isAuthenticated,
  $r as logAuthError,
  En as storeAuthTokens
};
