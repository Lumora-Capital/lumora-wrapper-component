import { jsx as t, jsxs as R, Fragment as Te } from "react/jsx-runtime";
import Jn from "@mui/icons-material/KeyboardArrowDownRounded";
import Qn from "@mui/icons-material/KeyboardArrowUpRounded";
import es from "@mui/icons-material/ChevronRightRounded";
import C from "@mui/material/Box";
import Ro from "@mui/material/Collapse";
import qe from "@mui/material/Divider";
import ve from "@mui/material/IconButton";
import Ut from "@mui/material/ListItemButton";
import Se from "@mui/material/ListItemIcon";
import ke from "@mui/material/ListItemText";
import Ae from "@mui/material/Stack";
import Ee from "@mui/material/Tooltip";
import ie from "@mui/material/Typography";
import { useTheme as Ne, createTheme as un, alpha as st, ThemeProvider as wo } from "@mui/material/styles";
import * as d from "react";
import { useMemo as Io, useState as ot, useCallback as _o, useRef as vr, useEffect as Ht } from "react";
import Je from "@mui/material/ButtonBase";
import { keyframes as Lr } from "@emotion/react";
import kr from "@mui/material/Fade";
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
import Es from "@mui/icons-material/SettingsBrightnessOutlined";
import Pr from "@mui/material/Popover";
import Rs from "@mui/icons-material/CheckRounded";
const Jt = ({
  logo: e,
  title: r,
  appName: o,
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
  }, l = /* @__PURE__ */ R(Te, { children: [
    r ? /* @__PURE__ */ t(
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
        children: r
      }
    ) : null,
    e
  ] });
  return n ? /* @__PURE__ */ t(
    Je,
    {
      onClick: n,
      "aria-label": a === void 0 ? `${o} home` : `${o}: switch platform`,
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
}, At = { stiffness: 320, damping: 24 }, $t = { stiffness: 520, damping: 20 }, or = { stiffness: 260, damping: 28 }, ws = "cubic-bezier(0.32, 1.28, 0.52, 1)", Is = 420, Ao = 60, _s = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), $o = /* @__PURE__ */ new Map(), pe = ({
  stiffness: e,
  damping: r,
  mass: o = 1
}) => {
  const n = `${e}/${r}/${o}`, i = $o.get(n);
  if (i)
    return i;
  if (!_s)
    return { easing: ws, duration: Is };
  const s = 1 / 600;
  let a = 0, c = 0, l = 0, h = 1 / Ao;
  const m = [0];
  for (; l < 3; ) {
    const p = (-e * (a - 1) - r * c) / o;
    if (c += p * s, a += c * s, l += s, l >= h && (m.push(a), h += 1 / Ao, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const g = {
    easing: `linear(${m.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(l * 1e3)
  };
  return $o.set(n, g), g;
}, Ze = (e) => !!(e && typeof e.animate == "function"), ze = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Xt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((r) => r.cancel());
}, Cs = (e, r = 1.14) => {
  if (!Ze(e) || ze())
    return;
  const o = pe($t);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${r})`, offset: 0.18, easing: o.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(o.duration / 0.82) }
  );
}, pt = (e) => {
  var r;
  return !!((r = e.subitems) != null && r.length);
}, ut = (e, r) => e ? `${e}/${r.text}` : r.text, je = (e, r) => {
  var o;
  return r ? e.path && r === e.path ? !0 : ((o = e.subitems) == null ? void 0 : o.some((n) => je(n, r))) ?? !1 : !1;
}, De = (e, r) => !!(r && e.path === r), zr = (e, r) => (e ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return pt(o) ? zr(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), _r = (e) => {
  const r = nr(e);
  if (!r)
    return "#ffffff";
  const [o, n, i] = r.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, Qt = (e) => {
  const r = nr(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, i] = r;
  return `rgba(${o}, ${n}, ${i}, 0.14)`;
}, ft = (e, r) => {
  const o = nr(e);
  return o ? `rgba(${o[0]}, ${o[1]}, ${o[2]}, ${r})` : e;
}, nr = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, xn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Os = 28, Ts = 180, Mo = (e) => ({
  backdropFilter: `blur(${e * Os}px) saturate(${100 + e * (Ts - 100)}%)`
}), As = Lr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ie = "@media (prefers-reduced-motion: reduce)", bn = (e, r, o) => `radial-gradient(${e}px circle at var(--lx, -9999px) var(--ly, -9999px), rgba(${o}, calc(${r} * var(--li, 0))) 0%, rgba(${o}, 0) 70%)`, Gr = "9, 193, 174", Cr = d.createContext(
  void 0
), Mt = () => {
  const e = d.useContext(Cr), r = e ? nr(e) : null;
  return r ? r.join(", ") : Gr;
}, er = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, yn = (e) => e ? er.dark : er.light, Ur = (e, r) => e ? "255, 255, 255" : r, $s = (e, r) => ({
  content: '""',
  position: "absolute",
  inset: 0,
  borderRadius: "inherit",
  padding: "1.25px",
  pointerEvents: "none",
  // The rim glints where the pointer is nearest (see GlassLayer's light)
  background: `${bn(140, yn(e).rim, Ur(e, r))}, ${e ? "linear-gradient(140deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 22%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 78%, rgba(255, 255, 255, 0.28) 100%)" : "linear-gradient(140deg, #ffffff 0%, rgba(255, 255, 255, 0.55) 22%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.4) 78%, rgba(255, 255, 255, 0.95) 100%)"}`,
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  maskComposite: "exclude"
}), Ms = (e, r, o = Gr) => ({
  position: "relative",
  bgcolor: e ? "rgba(30, 36, 48, 0.5)" : "rgba(255, 255, 255, 0.55)",
  backgroundImage: e ? "linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 38%, rgba(0, 0, 0, 0.1) 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 40%, rgba(15, 23, 42, 0.03) 100%)",
  ...Mo(1),
  WebkitBackdropFilter: Mo(1).backdropFilter,
  boxShadow: e ? "0 24px 60px -12px rgba(0, 0, 0, 0.65), 0 0 0 0.5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 0 24px rgba(255, 255, 255, 0.035)" : "0 24px 60px -12px rgba(15, 23, 42, 0.3), 0 2px 8px rgba(15, 23, 42, 0.08), 0 0 0 0.5px rgba(15, 23, 42, 0.1), inset 0 1px 0 #ffffff, inset 0 0 24px rgba(255, 255, 255, 0.45)",
  "&::before": $s(e, o),
  // Specular glare across the top-left, as light catching a curved edge
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
    // The pointer's light on the surface, over the fixed glare
    background: `${bn(200, yn(e).sheen, Ur(e, o))}, ${e ? "linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 42%)" : "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 42%)"}`
  },
  "@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))": {
    bgcolor: r
  },
  "@media (prefers-reduced-transparency: reduce)": {
    bgcolor: r,
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
}), Xr = Lr`
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
`, Kr = Lr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, jr = (e, r = Gr, o = `rgba(${r}, 0.2)`) => ({
  background: e ? "radial-gradient(circle at 30% 24%, rgba(255, 255, 255, 0.34) 0, rgba(255, 255, 255, 0.12) 22%, rgba(255, 255, 255, 0.06) 55%, rgba(255, 255, 255, 0.03) 100%)" : "radial-gradient(circle at 30% 24%, #ffffff 0, rgba(255, 255, 255, 0.92) 20%, rgba(255, 255, 255, 0.7) 55%, rgba(255, 255, 255, 0.5) 100%)",
  boxShadow: e ? `inset 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 1.5px 1px rgba(255, 255, 255, 0.28), inset 0 -10px 16px -8px ${o}, 0 12px 26px -12px rgba(0, 0, 0, 0.85)` : `inset 0 0 0 1px rgba(255, 255, 255, 0.95), inset 0 2px 2px #ffffff, inset 0 -10px 16px -8px ${o}, 0 12px 26px -12px rgba(15, 23, 42, 0.4), 0 1px 3px rgba(15, 23, 42, 0.06)`
}), Ct = (e, r, o = "solid") => {
  const [n, i, s] = o === "solid" ? [0.95, 0.74, 0.9] : [0.34, 0.12, 0.24];
  return {
    background: `radial-gradient(120% 90% at 28% 10%, rgba(255, 255, 255, ${r ? o === "solid" ? 0.3 : 0.22 : o === "solid" ? 0.26 : 0.7}) 0%, rgba(255, 255, 255, 0) 52%), linear-gradient(165deg, ${ft(e, n)} 0%, ${ft(e, i)} 55%, ${ft(e, s)} 100%)`,
    boxShadow: [
      `inset 0 1px 1px rgba(255, 255, 255, ${o === "solid" ? 0.5 : 0.75})`,
      `inset 0 0 0 1px ${ft(e, o === "solid" ? 0.55 : 0.4)}`,
      `inset 0 -8px 14px -8px rgba(255, 255, 255, ${r ? 0.18 : 0.35})`,
      `0 8px 18px -8px ${ft(e, r ? 0.7 : 0.55)}`
    ].join(", ")
  };
}, Ls = (e, r) => {
  const o = e ? "inset 0 1px 2px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 0 rgba(255, 255, 255, 0.08)" : "inset 0 1px 2px rgba(15, 23, 42, 0.12), inset 0 0 0 1px rgba(15, 23, 42, 0.05), 0 1px 0 #ffffff";
  return {
    rest: {
      background: e ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.5)",
      boxShadow: o,
      borderRadius: "12px",
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
}, tr = "data-rail-item", ks = `[${tr}], button, [role="button"]`, sr = d.createContext(!1), Vr = () => {
  const e = d.useContext(sr), r = Ne();
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: { sx: Hr(r.palette.mode === "dark") },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, ht = pe(At), Do = pe($t), Yr = ({
  enabled: e,
  isDark: r,
  selector: o,
  size: n,
  radius: i,
  lean: s = 3
}) => {
  const a = d.useRef(null), c = Mt(), [l, h] = d.useState(null), m = d.useRef(null), g = d.useRef(null), p = (b, S) => {
    g.current = S;
    const I = S.getBoundingClientRect(), D = b.getBoundingClientRect(), X = n ?? I.width, K = n ?? I.height, A = {
      top: Math.round(I.top - D.top + (I.height - K) / 2),
      left: Math.round(I.left - D.left + (I.width - X) / 2),
      width: Math.round(X),
      height: Math.round(K)
    };
    h(
      ($) => $ && $.visible && $.top === A.top && $.left === A.left && $.width === A.width && $.height === A.height ? $ : { ...A, visible: !0, instant: !($ != null && $.visible) }
    );
  }, f = (b, S) => {
    var D;
    const I = (D = S == null ? void 0 : S.closest) == null ? void 0 : D.call(S, o);
    return I && b.contains(I) ? I : null;
  }, y = (b) => {
    if (!e)
      return;
    const S = f(b.currentTarget, b.target);
    S && p(b.currentTarget, S);
  }, _ = (b) => {
    if (!e)
      return;
    const S = f(b.currentTarget, b.target);
    S && b.target.matches(":focus-visible") && p(b.currentTarget, S);
  }, x = (b) => {
    const S = a.current, I = g.current;
    if (!e || !S || !I || !s || ze())
      return;
    const D = I.getBoundingClientRect(), X = (K, A) => Math.max(-1, Math.min(1, K / (A / 2))) * s;
    S.style.transform = `translate(${X(b.clientX - (D.left + D.width / 2), D.width)}px, ${X(b.clientY - (D.top + D.height / 2), D.height)}px)`;
  }, v = () => {
    g.current = null, a.current && (a.current.style.transform = ""), h((b) => b != null && b.visible ? { ...b, visible: !1 } : b);
  }, E = (b) => {
    const S = b.relatedTarget;
    (!S || !b.currentTarget.contains(S)) && (b.currentTarget.matches(":hover") || v());
  };
  return d.useEffect(() => {
    const b = a.current;
    if (!(l != null && l.visible)) {
      m.current = null;
      return;
    }
    const S = m.current;
    if (m.current = l.top, !Ze(b) || ze())
      return;
    if (S === null || l.instant) {
      b.animate([{ scale: "0.55" }, { scale: "1" }], {
        duration: Do.duration,
        easing: Do.easing
      });
      return;
    }
    const I = Math.min(Math.abs(l.top - S) / 220, 0.3);
    I && b.animate(
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
  }, [l == null ? void 0 : l.top, l == null ? void 0 : l.visible, l == null ? void 0 : l.instant]), {
    lens: e && l ? /* @__PURE__ */ t(
      C,
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...jr(r, c),
          backdropFilter: "blur(8px) saturate(170%)",
          WebkitBackdropFilter: "blur(8px) saturate(170%)",
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
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${ht.duration}ms ${ht.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [Ie]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: y,
      onMouseMove: x,
      onMouseLeave: v,
      onFocus: _,
      onBlur: E,
      onScrollCapture: v
    } : {}
  };
}, Ns = (e, r) => {
  const o = Yr({
    enabled: e,
    isDark: r,
    selector: ks,
    size: 46,
    radius: 18
  });
  return {
    ...o,
    lens: o.lens ? d.cloneElement(o.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Fs = (e, r) => {
  let o = 0, n = 0, i = e;
  for (; i && i !== r; ) {
    o += i.offsetTop, n += i.offsetLeft;
    const c = i.offsetParent;
    for (let l = i.parentElement; l && l !== r && (o -= l.scrollTop, n -= l.scrollLeft, l !== c); l = l.parentElement)
      ;
    i = c;
  }
  if (i === r && e.offsetWidth)
    return {
      top: Math.round(o),
      left: Math.round(n),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const s = e.getBoundingClientRect(), a = r.getBoundingClientRect();
  return {
    top: Math.round(s.top - a.top),
    left: Math.round(s.left - a.left),
    width: Math.round(s.width),
    height: Math.round(s.height)
  };
}, Bs = ({
  enabled: e,
  isDark: r,
  color: o,
  containerRef: n
}) => {
  const i = d.useRef(null), [s, a] = d.useState(null), c = d.useRef(null), l = d.useCallback(
    (m) => {
      const g = n.current;
      if (!e || !g)
        return;
      const p = g.querySelector(
        `[${tr}][data-active="true"]`
      );
      if (!p) {
        a(
          (y) => y != null && y.visible ? { ...y, visible: !1 } : y
        );
        return;
      }
      const f = Fs(p, g);
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
    const m = i.current;
    if (!(s != null && s.visible)) {
      c.current = null;
      return;
    }
    const g = c.current;
    if (c.current = s.top, g === null || s.instant || !Ze(m) || ze())
      return;
    const p = Math.min(Math.abs(s.top - g) / 200, 0.32);
    p && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - p / 2} ${1 + p}`, offset: 0.28 },
        {
          scale: `${1 + p / 4} ${1 - p / 3}`,
          offset: 0.62
        },
        { scale: "1 1" }
      ],
      { duration: ht.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    C,
    {
      ref: i,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...Ct(o, r),
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
}, Lo = 14, Ws = 18, Ps = "blur(12px) saturate(180%) brightness(1.04)", zs = (() => {
  var r;
  if (typeof navigator > "u")
    return !1;
  const e = (r = navigator.userAgentData) == null ? void 0 : r.brands;
  return !!(e != null && e.some(({ brand: o }) => /Chromium/.test(o)));
})(), Gs = (e, r, o) => {
  const n = Math.min(0.45, o / e), i = Math.min(0.45, o / r), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${r}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, Us = 140, ko = 0.22, Hs = 0.14, Xs = (e, r, o) => {
  const n = d.useRef(o);
  n.current = o, d.useEffect(() => {
    if (!r || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var f;
      const p = e.current;
      p && (p.style.setProperty("--lx", `${s.x.toFixed(1)}px`), p.style.setProperty("--ly", `${s.y.toFixed(1)}px`), p.style.setProperty("--li", s.i.toFixed(3)), (f = n.current) == null || f.call(n, s.x, s.y, s.i));
    }, l = () => {
      s.x += (i.x - s.x) * ko, s.y += (i.y - s.y) * ko, s.i += (i.i - s.i) * Hs;
      const p = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      p && (s.x = i.x, s.y = i.y, s.i = i.i), c(), a = p ? 0 : requestAnimationFrame(l);
    }, h = () => {
      a || (a = requestAnimationFrame(l));
    }, m = (p) => {
      const f = e.current;
      if (p.pointerType === "touch" || !f)
        return;
      const y = f.getBoundingClientRect();
      if (!y.width || !y.height)
        return;
      i.x = (p.clientX - y.left) * f.offsetWidth / y.width, i.y = (p.clientY - y.top) * f.offsetHeight / y.height;
      const _ = Math.max(
        y.left - p.clientX,
        0,
        p.clientX - y.right
      ), x = Math.max(
        y.top - p.clientY,
        0,
        p.clientY - y.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(_, x) / Us), s.i < 0.01 && (s.x = i.x, s.y = i.y), h();
    }, g = () => {
      i.i = 0, h();
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
    refract: i = !0,
    light: s = !0,
    onLight: a
  }, c) => {
    const l = d.useRef(null);
    Xs(l, s, a);
    const h = Mt(), m = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [g, p] = d.useState(null), f = d.useRef(null), y = d.useCallback(
      (v) => {
        var w;
        if (l.current = v, typeof c == "function" ? c(v) : c && (c.current = v), (w = f.current) == null || w.disconnect(), f.current = null, !v || !i || !zs || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const b = v.offsetWidth, S = v.offsetHeight;
          p(
            (I) => (I == null ? void 0 : I.width) === b && I.height === S ? I : b && S ? { width: b, height: S } : null
          );
        };
        f.current = new ResizeObserver(E), f.current.observe(v), E();
      },
      [c, i]
    ), _ = d.useMemo(
      () => g ? Gs(g.width, g.height, Lo) : null,
      [g]
    ), x = i && !!(_ && g);
    return /* @__PURE__ */ R(Te, { children: [
      x ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ R(
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
                    stdDeviation: Lo / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Ws,
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
            Ms(e, r, h),
            x ? {
              backdropFilter: `url(#${m}) ${Ps}`,
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
const Pe = 44, No = 4, qr = 12, Fo = 1.4, Ks = 6, Zr = 6, qt = qr + Zr, rr = 10, Bo = 0.12, Wo = 0.75, js = rr + 32, Vs = 90, Ys = 22, qs = 1190, Zs = 1195, Ye = pe(At), Le = pe($t), Po = pe(or), Js = ({ left: e, top: r, width: o, height: n, radius: i }) => {
  const s = Math.min(i, o / 2, n / 2), a = e + o, c = r + n, l = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + s} ${r} H ${a - s} ${l} ${a} ${r + s} V ${c - s} ${l} ${a - s} ${c} H ${e + s} ${l} ${e} ${c - s} V ${r + s} ${l} ${e + s} ${r} Z')`;
}, Qs = ({
  group: e,
  groupKey: r,
  anchor: o,
  railEdge: n,
  railShape: i,
  activePath: s,
  focusFirst: a = !1,
  onNavigate: c,
  onClose: l,
  panelProps: h,
  accentColor: m,
  activeForegroundColor: g,
  solidSurface: p
}) => {
  const f = Ne(), y = f.palette.mode === "dark", _ = !!(e && o), x = d.useRef(null);
  e && r && (x.current = { group: e, key: r });
  const v = x.current, E = d.useMemo(() => o ? {
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
  } : null, [o, n]), w = d.useRef(E);
  E && (w.current = E), d.useEffect(() => {
    o && Cs(o);
  }, [o]);
  const [b, S] = d.useState(!1);
  d.useEffect(() => {
    if (!_) {
      S(!1);
      return;
    }
    let M = 0;
    const L = requestAnimationFrame(() => {
      M = requestAnimationFrame(() => S(!0));
    });
    return () => {
      cancelAnimationFrame(L), cancelAnimationFrame(M);
    };
  }, [_]);
  const I = d.useMemo(
    () => v ? zr(v.group.subitems, v.group.icon) : [],
    [v]
  ), D = d.useRef(null), X = d.useRef(null), K = d.useRef(0), A = d.useRef(null), $ = d.useRef([]), O = I.findIndex(
    ({ sub: M }) => De(M, s)
  ), [P, te] = d.useState(0);
  d.useEffect(() => {
    te(Math.max(O, 0));
  }, [r]), d.useEffect(() => {
    if (!_ || !a)
      return;
    const M = setTimeout(() => {
      var L;
      return (L = $.current[0]) == null ? void 0 : L.focus();
    });
    return () => clearTimeout(M);
  }, [_, a, r]);
  const le = (M) => {
    var j;
    const L = Math.max(0, Math.min(M, I.length - 1));
    te(L), (j = $.current[L]) == null || j.focus();
  }, he = (M, L) => {
    switch (M.key) {
      case "ArrowRight":
        le(L + 1);
        break;
      case "ArrowLeft":
        L === 0 ? l(!0) : le(L - 1);
        break;
      case "Home":
        le(0);
        break;
      case "End":
        le(I.length - 1);
        break;
      case "Tab":
        l(!0);
        break;
      default:
        return;
    }
    M.preventDefault();
  }, z = (M) => {
    var de;
    const L = $.current.slice(0, I.length).filter((ne) => !!ne);
    if (!L.length)
      return;
    const j = M !== null && M < L.length && !ze(), k = `translate ${Le.duration}ms ${Le.easing}, scale ${Le.duration}ms ${Le.easing}`, V = L.map((ne) => ne.offsetLeft + Pe / 2), Z = L.map(
      (ne, fe) => j && fe === M ? Fo : 1
    ), Ge = j ? (Fo - 1) * Pe : 0, ue = V[0] - Pe / 2, _e = V[V.length - 1] + Pe / 2, me = j ? Math.min(
      Math.min(
        1,
        Math.max(
          0,
          (V[M] - ue) / (_e - ue)
        )
      ),
      Ks / Ge
    ) : 0;
    let ge = ue - Ge * me;
    L.forEach((ne, fe) => {
      const xe = Pe * Z[fe], Ce = ge + xe / 2;
      ge += xe + No, ne.style.transition = `${k}, background 160ms ease, box-shadow 160ms ease`, ne.style.translate = j ? `${Ce - V[fe]}px 0` : "", ne.style.scale = j ? String(Z[fe]) : "", j ? ne.style.setProperty("--dock-scale", String(Z[fe])) : ne.style.removeProperty("--dock-scale");
    }), (de = A.current) == null || de.call(A);
  }, W = d.useRef(null);
  d.useEffect(() => {
    W.current = null;
  }, [r]);
  const H = (M) => {
    W.current !== M && (W.current = M, cancelAnimationFrame(K.current), K.current = requestAnimationFrame(() => z(M)));
  };
  d.useEffect(() => () => cancelAnimationFrame(K.current), []);
  const G = f.palette.text.primary, q = y ? f.palette.text.primary : m;
  return /* @__PURE__ */ R(Te, { children: [
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
          left: i ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...i ? { clipPath: Js(i) } : {},
          zIndex: qs,
          bgcolor: Ds(y)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      Nr,
      {
        open: _,
        anchorEl: E ?? w.current,
        placement: "right",
        transition: !0,
        modifiers: [
          { name: "offset", options: { offset: [0, rr] } },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Zs,
          transition: b ? `transform ${Ye.duration}ms ${Ye.easing}` : "none",
          [Ie]: { transition: "none" }
        },
        children: ({ TransitionProps: M }) => /* @__PURE__ */ t(
          ii,
          {
            in: (M == null ? void 0 : M.in) ?? _,
            onEnter: M == null ? void 0 : M.onEnter,
            onExited: M == null ? void 0 : M.onExited,
            groupKey: (v == null ? void 0 : v.key) ?? null,
            panelProps: h,
            isDark: y,
            solidSurface: p,
            groupText: v == null ? void 0 : v.group.text,
            glassRef: X,
            shapeRef: A,
            children: v ? /* @__PURE__ */ t(Te, { children: /* @__PURE__ */ t(
              C,
              {
                ref: D,
                role: "menu",
                "aria-label": v.group.text,
                onPointerLeave: () => H(null),
                sx: {
                  position: "relative",
                  display: "flex",
                  gap: `${No}px`,
                  // No room kept for magnification: a grown tile rises out of
                  // the glass, as icons rise out of the Dock
                  px: 0
                },
                children: I.map(({ sub: L, icon: j }, k) => /* @__PURE__ */ t(
                  vn,
                  {
                    ref: (V) => {
                      $.current[k] = V;
                    },
                    sub: L,
                    icon: j,
                    index: k,
                    active: De(
                      L,
                      s
                    ),
                    tabIndex: k === P ? 0 : -1,
                    onClick: () => {
                      c(L.path), l();
                    },
                    onKeyDown: (V) => he(V, k),
                    onFocus: (V) => {
                      te(k), V.currentTarget.matches(
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
                  L.path
                ))
              },
              v.key
            ) }) : null
          }
        )
      }
    )
  ] });
}, _t = 18, ei = 160, Or = 14, ti = 22, ri = 2.5, oi = 1, zo = (e, r, o) => {
  const n = Math.abs(e - o.cx) - o.hx + o.r, i = Math.abs(r - o.cy) - o.hy + o.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - o.r;
}, ni = (e, r, o) => {
  const n = Math.max(o - Math.abs(e - r), 0) / o;
  return Math.min(e, r) - n * n * n * o / 6;
}, si = (e, r, o) => {
  const n = Zr, i = _t, s = _t + r / 2, a = Math.max(e, ...o.map((x) => x.right + n)), c = {
    cx: a / 2,
    cy: s,
    hx: a / 2,
    hy: r / 2,
    r: qt
  }, l = o.filter((x) => x.bottom - x.top > Pe * 1.02).map((x) => {
    const v = (x.right - x.left) / Pe;
    return {
      cx: (x.left + x.right) / 2,
      cy: (x.top + x.bottom) / 2 + _t,
      hx: (x.right - x.left) / 2 + n,
      hy: (x.bottom - x.top) / 2 + n,
      r: qr * v + n
    };
  }), h = (x, v) => l.reduce(
    (E, w) => ni(E, zo(x, v, w), ti),
    zo(x, v, c)
  ), m = (x, v) => {
    let E = s, w = s + v * (r / 2 + i);
    if (h(x, E) > 0)
      return null;
    for (let b = 0; b < 12; b += 1) {
      const S = (E + w) / 2;
      h(x, S) <= 0 ? E = S : w = S;
    }
    return E;
  }, g = Math.min(0, ...l.map((x) => x.cx - x.hx)) - 2, p = Math.max(a, ...l.map((x) => x.cx + x.hx)) + 2, f = [], y = [];
  for (let x = g; x <= p; ) {
    const v = m(x, -1), E = m(x, 1);
    if (v !== null && E !== null) {
      const b = +(x + Or).toFixed(1);
      f.push([b, +v.toFixed(1)]), y.push([b, +E.toFixed(1)]);
    }
    const w = x - g < qt + 4 || p - x < qt + 4;
    x += w ? oi : ri;
  }
  return f.length ? `M ${[...f, ...y.reverse()].map(([x, v]) => `${x} ${v}`).join(" L ")} Z` : "";
}, Go = (e, [r, o], n, i) => {
  Array.from(e.children).forEach((s) => {
    Ze(s) && s.animate([{ opacity: r }, { opacity: o }], {
      duration: n,
      easing: i,
      fill: o === 0 ? "forwards" : "none"
    });
  });
}, ii = ({
  in: e,
  onEnter: r,
  onExited: o,
  groupKey: n,
  panelProps: i,
  isDark: s,
  solidSurface: a,
  groupText: c,
  glassRef: l,
  shapeRef: h,
  children: m
}) => {
  const g = d.useRef(null), p = d.useRef(null), f = d.useRef(null), y = d.useRef(null), _ = d.useRef(null), x = Ur(s, Mt()), v = d.useCallback(
    (z, W, H) => {
      var G, q;
      (G = _.current) == null || G.setAttribute("cx", String(z)), (q = _.current) == null || q.setAttribute("cy", String(W)), y.current && (y.current.style.opacity = String(
        H * (s ? er.dark.rim : er.light.rim)
      ));
    },
    [s]
  ), E = d.useRef(null), w = d.useRef(null), b = `lumora-flyout-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, S = d.useRef(0), I = d.useRef(0), D = d.useRef(""), X = () => {
    var M, L, j, k;
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
    ), q = si(
      z.offsetWidth,
      z.offsetHeight,
      G
    );
    return q === D.current ? !1 : (D.current = q, W.style.clipPath = `path('${q}')`, (M = f.current) == null || M.setAttribute("d", q), (L = y.current) == null || L.setAttribute("d", q), (j = E.current) == null || j.setAttribute("d", q), (k = w.current) == null || k.setAttribute("d", q), !0);
  }, K = () => {
    if (I.current = 0, S.current)
      return;
    const z = () => {
      if (I.current = X() ? 0 : I.current + 1, I.current > 8) {
        S.current = 0;
        return;
      }
      S.current = requestAnimationFrame(z);
    };
    S.current = requestAnimationFrame(z);
  };
  h.current = K, d.useLayoutEffect(() => (X(), K(), () => {
    cancelAnimationFrame(S.current), S.current = 0;
  }), [n]);
  const A = d.useRef(null), $ = d.useRef(null), O = d.useRef(!1), P = (z) => {
    g.current = z;
    const { ref: W } = i;
    typeof W == "function" ? W(z) : W && (W.current = z);
  }, te = () => {
    Xt(l.current), Xt(A.current), Xt(g.current);
  }, le = () => {
    var G;
    const z = g.current, W = l.current, H = A.current;
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
    const z = g.current, W = l.current, H = A.current;
    if (!Ze(z) || !W || !H) {
      o == null || o();
      return;
    }
    if (te(), ze()) {
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
    ).finished.then(() => o == null ? void 0 : o()).catch(() => {
    });
  };
  return d.useLayoutEffect(() => {
    if (!e) {
      he();
      return;
    }
    r == null || r(), le();
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
            ref: l,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -_t,
              bottom: -_t,
              left: -Or,
              right: -ei,
              pointerEvents: "none",
              // The rail icon's centre: the panel is centred on it,
              // one gap plus half the rail's padding to the left
              transformOrigin: `${Or - js}px 50%`,
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
                          id: `${b}-shadow`,
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
                            /* @__PURE__ */ t("path", { ref: w, fill: "black" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ t("g", { mask: `url(#${b}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: E,
                        transform: "translate(0 12)",
                        fill: s ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
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
                  isDark: s,
                  solid: a,
                  refract: !1,
                  onLight: v,
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
                        stroke: `url(#${b}-rim)`,
                        strokeWidth: "1.25"
                      }
                    ),
                    /* @__PURE__ */ R(
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
    tabIndex: i,
    onClick: s,
    onKeyDown: a,
    onFocus: c,
    onHoverStart: l,
    accentColor: h,
    activeForegroundColor: m,
    labelColor: g,
    iconColor: p,
    isDark: f
  }, y) => {
    const _ = Mt(), x = (b) => {
      const S = b.currentTarget.getBoundingClientRect();
      b.currentTarget.style.setProperty(
        "--mx",
        `${(b.clientX - S.left) / S.width * 100}%`
      ), b.currentTarget.style.setProperty(
        "--my",
        `${(b.clientY - S.top) / S.height * 100}%`
      );
    }, v = (b) => {
      const S = b.currentTarget;
      !Ze(S) || ze() || S.animate(
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
    }, w = {
      ...jr(f, _),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": E
    };
    return /* @__PURE__ */ R(
      Je,
      {
        ref: y,
        role: "menuitem",
        tabIndex: i,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: s,
        onKeyDown: a,
        onFocus: c,
        onPointerMove: x,
        onMouseEnter: v,
        onPointerEnter: (b) => l(b.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Pe,
          height: Pe,
          borderRadius: `${qr}px`,
          color: n ? m : g,
          bgcolor: n ? h : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Ct(h, f) : {},
          transition: `translate ${Le.duration}ms ${Le.easing}, scale ${Le.duration}ms ${Le.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${As} ${Ye.duration}ms ${Ye.easing} both`,
          animationDelay: `${Vs + o * Ys}ms`,
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
          } : w,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : w,
            "& [data-tile-name]": E,
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
          /* @__PURE__ */ t(C, { sx: { position: "relative", display: "flex" }, children: r }),
          /* @__PURE__ */ t(
            C,
            {
              component: "span",
              "data-tile-name": !0,
              sx: {
                ...Hr(f),
                position: "absolute",
                top: "100%",
                left: "50%",
                translate: "-50% 8px",
                transformOrigin: "top center",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: 0,
                scale: "calc(0.6 / var(--dock-scale, 1))",
                transition: `opacity 140ms ease, scale ${Le.duration}ms ${Le.easing}`,
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
  const [r, o] = d.useState(null), n = d.useRef(r);
  n.current = r;
  const i = d.useRef(/* @__PURE__ */ new Map()), s = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, h = () => {
    clearTimeout(c.current), c.current = void 0;
  }, m = (v, E, w = !1) => {
    l(), h(), o({ key: v, pinned: E, focusFirst: w });
  }, g = d.useCallback((v = !1) => {
    var w, b;
    l(), h();
    const E = (w = n.current) == null ? void 0 : w.key;
    o(null), v && E && ((b = i.current.get(E)) == null || b.focus());
  }, []), p = () => {
    l(), !(!n.current || n.current.pinned) && (h(), c.current = setTimeout(() => g(), ci));
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
    const v = (b) => {
      var I;
      const S = b;
      return S ? (I = s.current) != null && I.contains(S) ? !0 : [...i.current.values()].some((D) => D.contains(S)) : !1;
    }, E = (b) => {
      v(b.target) || g();
    }, w = (b) => {
      var S;
      b.key === "Escape" && g(
        !!((S = s.current) != null && S.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", E), document.addEventListener("keydown", w), () => {
      document.removeEventListener("pointerdown", E), document.removeEventListener("keydown", w);
    };
  }, [f, g]), {
    state: r,
    close: g,
    triggerProps: (v) => ({
      ref: (E) => {
        E ? i.current.set(v, E) : i.current.delete(v);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        h();
        const E = n.current;
        if (E) {
          E.key !== v && m(v, E.pinned);
          return;
        }
        l(), a.current = setTimeout(
          () => m(v, !1),
          ai
        );
      },
      onMouseLeave: p,
      onClick: (E) => {
        if (E.detail === 0) {
          m(v, !0, !0);
          return;
        }
        const w = n.current;
        (w == null ? void 0 : w.key) === v && w.pinned ? g() : m(v, !0);
      },
      onKeyDown: (E) => {
        E.key === "ArrowRight" && (E.preventDefault(), m(v, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: h,
      onMouseLeave: p
    },
    onRailLeafEnter: () => {
      l(), n.current && !n.current.pinned && g();
    },
    getTrigger: (v) => i.current.get(v) ?? null
  };
}, di = 264, ui = 72, Uo = 64, Kt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, fi = 16, pi = 14, hi = 4, mi = 2.5, Ho = "0.7rem", Xo = 22, Ko = pe($t), nt = ({ text: e, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: i }) => {
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
    Ee,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ t(
        ie,
        {
          ref: s,
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
            ...i ? { fontWeight: i } : {},
            ...o ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: e
        }
      )
    }
  );
}, gi = ({
  open: e,
  size: r = fi
}) => e ? /* @__PURE__ */ t(Qn, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(Jn, { sx: { fontSize: r, opacity: 0.75 } }), jo = ({ open: e }) => /* @__PURE__ */ t(
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
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  onLinkAction: i,
  logo: s,
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
  surfaceBackgroundColor: v,
  collapsed: E = !1,
  expandedWidth: w = di,
  collapsedWidth: b = ui,
  showLabels: S = !1,
  topInsetPx: I = 0,
  topContent: D,
  footer: X,
  submenuMode: K = "inline"
}) => {
  const A = Ne(), $ = A.palette.mode === "dark", O = K === "flyout" && E && !S, P = li(O), te = d.useRef(null), le = Ns(O, $), he = Bs({
    enabled: O,
    isDark: $,
    color: f,
    containerRef: te
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
  }, L = y ?? Qt(f), j = v ?? ($ ? A.palette.background.paper : "#ffffff"), k = x ?? ($ ? "text.primary" : f), V = m ?? j, Z = g ?? (m ? _r(V) : x ?? ($ ? A.palette.text.primary : f)), Ge = Qt(Z), ue = (u) => {
    n == null || n(u);
  }, _e = (u, F) => {
    H((B) => ({ ...B, [u]: !F }));
  }, me = (u, F) => W[F] ?? je(u, o), ge = (u, F, B) => ({
    color: u ? G : k,
    bgcolor: u ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: u ? G : k,
      minWidth: B
    },
    "&:hover": u || S ? q : { bgcolor: F }
  }), de = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": q
  }, ne = (u) => {
    const F = De(u, o), B = /* @__PURE__ */ R(
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
            L,
            u.subtitle ? 48 : 36
          ),
          ...de
        },
        children: [
          /* @__PURE__ */ t(Se, { children: u.icon }),
          /* @__PURE__ */ t(
            ke,
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
      /* @__PURE__ */ t(Ee, { title: N.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
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
            borderColor: F ? "rgba(255, 255, 255, 0.35)" : L,
            color: F ? G : k,
            "&:hover": {
              bgcolor: F ? "rgba(255, 255, 255, 0.15)" : L
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
  }, fe = (u) => {
    const F = je(u, o), B = De(u, o), N = ut("", u), U = me(u, N);
    return /* @__PURE__ */ R(
      C,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: F ? L : "transparent"
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
                ...ge(B, L, 36)
              },
              children: [
                /* @__PURE__ */ t(Se, { children: u.icon }),
                /* @__PURE__ */ t(
                  ke,
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
          /* @__PURE__ */ t(Ro, { in: U, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
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
    const N = ut(F, u), U = hi + (B - 1) * mi;
    if (pt(u)) {
      const Q = je(u, o), re = De(u, o), se = me(u, N);
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
                ke,
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
        /* @__PURE__ */ t(Ro, { in: se, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(C, { "data-testid": `sidebar-children-${u.text}`, children: u.subitems.map(
          (et) => xe(et, N, B + 1)
        ) }) })
      ] }, N);
    }
    const J = De(u, o);
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
            ke,
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
          color: N ? G : k,
          bgcolor: N ? f : "transparent",
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
          color: N ? G : k,
          bgcolor: N ? f : "transparent",
          borderRadius: N ? "8px" : "50%",
          "&:hover": {
            bgcolor: N ? f : J != null && J.insideGroup ? "action.hover" : L,
            borderRadius: "8px"
          },
          ...Kt,
          ...O ? it(N) : {}
        },
        children: [
          B,
          S ? /* @__PURE__ */ t(
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
    return S ? Q ? /* @__PURE__ */ t("span", { children: re }, u) : /* @__PURE__ */ t(d.Fragment, { children: re }, u) : /* @__PURE__ */ t(
      Ee,
      {
        title: F,
        placement: "right",
        arrow: !O,
        ...O ? Lt : {},
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
  }), Lt = {
    slotProps: {
      tooltip: { sx: Hr($) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, ir = (u) => {
    var U;
    const F = je(u, o), B = ut("", u), N = ((U = P.state) == null ? void 0 : U.key) === B;
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
              color: F ? G : k,
              bgcolor: F ? f : N ? L : "transparent",
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
    const F = je(u, o), B = De(u, o), N = ut("", u), U = me(u, N), J = /* @__PURE__ */ R(
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
          gap: S ? 0.25 : 0,
          width: S ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...S ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: B ? G : k,
          bgcolor: B ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": S ? { bgcolor: f, color: G } : {
            bgcolor: B ? f : "transparent"
          },
          ...Kt
        },
        children: [
          S ? /* @__PURE__ */ t(
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
          S ? /* @__PURE__ */ t(
            nt,
            {
              text: u.text,
              variant: "caption",
              center: !0,
              fontSize: Ho
            }
          ) : null,
          /* @__PURE__ */ t(gi, { open: U, size: pi })
        ]
      }
    ), Q = S ? J : /* @__PURE__ */ t(Ee, { title: u.text, placement: "right", arrow: !0, children: J });
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
          bgcolor: F ? L : "transparent",
          ...S ? {} : { "&:hover": { bgcolor: L } }
        },
        children: [
          Q,
          U ? zr(u.subitems, u.icon).map(
            ({ sub: re, icon: se }) => Ce(
              re.path,
              re.text,
              se,
              De(re, o),
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
        De(u, o),
        u.path ? () => ue(u.path) : void 0,
        { testId: `sidebar-item-${u.text}` }
      )
    },
    u.text
  ), kt = (u) => pt(u) ? O ? ir(u) : E ? Qe(u) : fe(u) : E ? gt(u) : ne(u), Ue = (u) => /* @__PURE__ */ t(
    Ae,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: E ? "center" : "stretch"
      },
      children: u.map(kt)
    }
  ), at = E ? b : w, Nt = () => {
    var Q, re;
    const { state: u } = P, F = u ? [...e, ...r].find(
      (se) => pt(se) && ut("", se) === u.key
    ) ?? null : null, B = F ? ((Q = te.current) == null ? void 0 : Q.getBoundingClientRect().right) ?? b : b, N = F ? ((re = te.current) == null ? void 0 : re.closest("[data-rail-surface]")) ?? te.current : null, U = N == null ? void 0 : N.getBoundingClientRect(), J = N && U ? {
      left: U.left,
      top: U.top,
      width: U.width,
      height: U.height,
      radius: parseFloat(
        getComputedStyle(N).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Qs,
      {
        group: F,
        groupKey: F ? u.key : null,
        anchor: F ? P.getTrigger(u.key) : null,
        railEdge: B,
        railShape: J,
        activePath: o,
        focusFirst: u == null ? void 0 : u.focusFirst,
        onNavigate: ue,
        onClose: P.close,
        panelProps: P.flyoutProps,
        accentColor: f,
        activeForegroundColor: G,
        solidSurface: j
      }
    );
  }, Ft = h ? /* @__PURE__ */ t(
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
      children: s || a ? /* @__PURE__ */ t(
        Jt,
        {
          logo: s,
          title: E ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: p ?? Z,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, ar = !h && s ? /* @__PURE__ */ t(
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
          logo: s,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: p ?? Z,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, He = S ? 0.5 : E ? 1 : 1.5;
  return /* @__PURE__ */ t(sr.Provider, { value: O, children: /* @__PURE__ */ R(
    C,
    {
      ref: te,
      ...le.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": E ? "true" : "false",
      "data-labeled": S ? "true" : "false",
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
              pt: I && !h ? `${I}px` : 1,
              pb: 2
            },
            children: [
              Ue(e),
              r.length > 0 ? /* @__PURE__ */ R(C, { sx: { mt: "auto", pt: 2 }, children: [
                X ? null : /* @__PURE__ */ t(
                  qe,
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
        O ? Nt() : null
      ]
    }
  ) });
}, Ar = "var(--lumora-content-padding, 0px)", Vo = `calc(${Ar} * -1)`, fc = ({
  children: e,
  flushTop: r = !0,
  sticky: o = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: s = !0,
  sx: a
}) => /* @__PURE__ */ t(
  C,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Vo,
        mt: r ? Vo : 0,
        // Space below it, like any other block on the page
        mb: Ar,
        px: s ? Ar : 0,
        bgcolor: n,
        ...i && {
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
), xi = ({ keys: e }) => /* @__PURE__ */ t(
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
}, ce = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, We = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, bi = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        We.ACCESS_TOKEN
      ), r = localStorage.getItem(
        We.REFRESH_TOKEN
      ), o = localStorage.getItem(We.USER);
      e && !localStorage.getItem(ce.ACCESS_TOKEN) && localStorage.setItem(ce.ACCESS_TOKEN, e), r && !localStorage.getItem(ce.REFRESH_TOKEN) && localStorage.setItem(
        ce.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(ce.USER) && localStorage.setItem(ce.USER, o), (e || r || o) && (localStorage.removeItem(We.ACCESS_TOKEN), localStorage.removeItem(We.REFRESH_TOKEN), localStorage.removeItem(We.USER));
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
}, Ot = () => {
  try {
    bi();
    const e = Sr(ce.ACCESS_TOKEN), r = Sr(ce.REFRESH_TOKEN), o = Sr(ce.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), Sn(ce.USER);
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
}, yi = () => {
  try {
    const { accessToken: e, refreshToken: r } = Ot();
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
    return e && Er(ce.ACCESS_TOKEN, e), r && Er(ce.REFRESH_TOKEN, r), o && Er(ce.USER, JSON.stringify(o)), {
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
}, vi = () => {
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
}, pc = (e) => {
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
}, Si = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = Oo.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, n = null, i = [];
  const s = (a, c) => {
    i.forEach(({ resolve: l, reject: h }) => {
      a ? h(a) : c && l(c);
    }), i = [];
  };
  return r.interceptors.request.use(
    (a) => {
      const { accessToken: c } = Ot();
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
      const { refreshToken: g } = Ot();
      if (!g) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return $r(f, "AxiosClient - Token Refresh"), Tt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (o && n)
        return new Promise((f, y) => {
          i.push({ resolve: f, reject: y });
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
      o = !0, n = Oo.post(
        `${e}/auth/refresh`,
        {
          refresh_token: g
        }
      );
      try {
        const f = await n, { accessToken: y, refreshToken: _ } = f.data;
        if (En(y, _, null), s(null, {
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
        ), s(f), Tt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        o = !1, n = null;
      }
    }
  ), r;
}, Re = {
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
}, Rn = un(), Oe = Rn.typography.pxToRem, Ei = (e) => {
  const r = e === "dark", o = [...Rn.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: r ? Re[300] : Re[200],
        main: Re[400],
        dark: Re[700],
        contrastText: Re[50]
      },
      info: r ? {
        light: Re[500],
        main: Re[700],
        dark: Re[900],
        contrastText: Re[300]
      } : {
        light: Re[100],
        main: Re[300],
        dark: Re[600],
        contrastText: we[50]
      },
      warning: r ? { light: lt[400], main: lt[500], dark: lt[700] } : { light: lt[300], main: lt[400], dark: lt[800] },
      error: r ? { light: dt[400], main: dt[500], dark: dt[700] } : { light: dt[300], main: dt[400], dark: dt[800] },
      success: r ? { light: ct[400], main: ct[500], dark: ct[700] } : { light: ct[300], main: ct[400], dark: ct[800] },
      grey: we,
      divider: r ? st(we[700], 0.6) : st(we[300], 0.4),
      background: r ? { default: we[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: we[400] } : { primary: we[800], secondary: we[600] },
      action: r ? {
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
    shadows: o
  };
}, Ri = async (e, r) => {
  const { accessToken: o, refreshToken: n } = Ot();
  if (o)
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
      $r(i, "TokenValidator - Refresh Failed");
    }
  return Tt(), r ? r() : window.location.href = "/login", !1;
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
), Yo = pe($t), Be = "#09C1AE", Zt = (e, r) => ({
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
    bgcolor: r,
    zIndex: 1
  },
  "& > *": { position: "relative", zIndex: 2 },
  "@keyframes nexa-beam": { to: { transform: "rotate(360deg)" } },
  "@media (prefers-reduced-motion: reduce)": {
    "&::before": { animation: "none" }
  }
}), wi = (e) => ({
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
  onClick: r,
  active: o = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: s = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = Vr(), l = d.useContext(sr), h = Ne().palette.mode === "dark", m = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", g = {
    onClick: r,
    "aria-label": "Ask Nexa",
    "aria-pressed": o,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ R(
    Je,
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
        borderColor: o ? Be : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
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
        i && /* @__PURE__ */ t(xi, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && l ? /* @__PURE__ */ t(Ee, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    ve,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: "14px",
        ...Ct(Be, h, "clear"),
        backdropFilter: "blur(8px) saturate(180%)",
        WebkitBackdropFilter: "blur(8px) saturate(180%)",
        ...o && {
          boxShadow: `${Ct(Be, h, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
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
        ...n && wi(h)
      },
      children: /* @__PURE__ */ t(It, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Ee, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    ve,
    {
      ...g,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: o ? Be : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Zt(8, "background.paper")
      },
      children: /* @__PURE__ */ t(It, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(Ee, { title: m, placement: "left", children: /* @__PURE__ */ t(
    ve,
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
        outline: o ? `2px solid ${Be}` : "none",
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
  message: r = "",
  buttonText: o = "",
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
      children: r
    }
  ),
  /* @__PURE__ */ t(
    fn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, Et = 24, Ii = 720, _i = 1140, Ci = 1250, Oi = ({
  open: e,
  children: r,
  variant: o,
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
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : p = {
    bottom: g,
    ...n === "left" ? { left: s + Et } : { right: Et },
    width: i,
    maxWidth: `calc(100vw - ${Et * 2}px)`,
    height: `min(${Ii}px, calc(100vh - ${g + Et}px))`,
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
        zIndex: m ? _i : Ci,
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
}, Ti = 180, Zo = 250, Ai = "#01584F", $i = ({
  text: e,
  testId: r
}) => {
  const o = d.useRef(null), [n, i] = d.useState(!1), s = d.useCallback(() => {
    const a = o.current;
    a && i(a.scrollWidth > a.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    s();
  }, [s, e]), d.useEffect(() => {
    const a = o.current;
    if (!a)
      return;
    const c = new ResizeObserver(() => s());
    return c.observe(a), () => c.disconnect();
  }, [s]), /* @__PURE__ */ t(
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
}, wn = (e, r, o, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : r, a = e ? Ai : r;
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
    color: o ? "#ffffff" : s,
    backgroundColor: o ? a : "transparent",
    "&:hover": {
      backgroundColor: o ? a : "action.hover",
      borderRadius: "4px",
      color: o ? "#ffffff" : s
    }
  } : {
    width: i,
    height: i,
    color: o ? "#ffffff" : s,
    backgroundColor: o ? a : "transparent",
    borderRadius: o ? "4px" : "50%",
    "&:hover": {
      backgroundColor: o ? a : "action.hover",
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
    $i,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), _n = (e, r, o) => o ? e : /* @__PURE__ */ t(Ee, { title: r, placement: "right", arrow: !0, children: e }), Mi = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: a
}) => {
  const c = Ne(), [l, h] = d.useState(null), [m, g] = d.useState(!1), p = d.useRef(
    null
  ), f = d.useRef(null), y = d.useRef(null), _ = d.useRef(!1), x = d.useRef(!1), v = d.useId(), E = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, w = () => {
    E(), p.current = setTimeout(() => {
      g(!1), p.current = null;
    }, Ti);
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
  const S = je(e, r), { activeBg: I, sx: D } = wn(
    i,
    n,
    S,
    a
  ), X = /* @__PURE__ */ t(
    ve,
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
        $ && ((O = f.current) != null && O.contains($)) || w();
      },
      onKeyDown: (A) => {
        A.key === "ArrowDown" && (A.preventDefault(), x.current = !0, b());
      },
      onClick: (A) => {
        A.preventDefault(), A.stopPropagation(), e.path && (o == null || o(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? v : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: D,
      children: a ? /* @__PURE__ */ t(In, { link: e }) : e.icon
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
            ref: h,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              _.current = !0, b();
            },
            onMouseLeave: () => {
              _.current = !1, w();
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
                onMouseLeave: w,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: s,
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
                    id: v,
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
            selected: De(P, r),
            onClick: (le) => {
              le.preventDefault(), P.path && (o == null || o(P.path)), g(!1);
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
                ke,
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
}, Di = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const a = !!(e.path && r === e.path), { sx: c } = wn(
    i,
    n,
    a,
    s
  );
  return _n(
    /* @__PURE__ */ t(
      ve,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), e.path && (o == null || o(e.path));
        },
        disabled: !e.path,
        sx: c,
        children: s ? /* @__PURE__ */ t(In, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, Li = () => /* @__PURE__ */ t(
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
), Jo = (e, r) => e.map((o, n) => /* @__PURE__ */ R(d.Fragment, { children: [
  r(o, n),
  n < e.length - 1 ? /* @__PURE__ */ t(Li, {}) : null
] }, n)), Ni = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: a = !1
}) => {
  const c = (h, m) => pt(h) ? /* @__PURE__ */ t(
    Mi,
    {
      link: h,
      activePath: o,
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
      activePath: o,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      railShowTitles: a
    }
  ), l = a ? 1.25 : 1;
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
        gap: l
      },
      children: [
        Jo(e, (h) => c(h, !1)),
        r.length > 0 ? /* @__PURE__ */ R(Te, { children: [
          /* @__PURE__ */ t(ki, {}),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Ae, { gap: l, alignItems: "center", children: Jo(
            r,
            (h) => c(h, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Fi = (e) => e ? xn(e) : "USER", Bi = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), Qo = {
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
) : null, Jr = ({ name: e, avatar: r, color: o, size: n = 36 }) => /* @__PURE__ */ t(
  hs,
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
    children: Bi(e)
  }
), Cn = ({ name: e, role: r, avatar: o, avatarColor: n, showText: i }) => /* @__PURE__ */ R(Te, { children: [
  /* @__PURE__ */ t(Jr, { name: e, avatar: o, color: n }),
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
            children: Fi(r)
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
  onClose: r,
  placement: o,
  width: n,
  avatarColor: i,
  showNotifications: s,
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
  onLogout: v
}) => {
  const E = (w) => () => {
    r(), w == null || w();
  };
  return /* @__PURE__ */ R(
    ms,
    {
      anchorEl: e,
      open: !!e,
      onClose: r,
      anchorOrigin: en[o].anchor,
      transformOrigin: en[o].transform,
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
          Ae,
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
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(qe, {}),
        s && /* @__PURE__ */ R(Ve, { onClick: E(c), children: [
          /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(mn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ke, { children: "Notifications" }),
          /* @__PURE__ */ t(Mr, { count: a })
        ] }),
        g.map((w) => /* @__PURE__ */ R(Ve, { onClick: E(w.onClick), children: [
          w.icon && /* @__PURE__ */ t(Se, { children: w.icon }),
          /* @__PURE__ */ t(ke, { inset: !w.icon, children: w.label }),
          /* @__PURE__ */ t(Mr, { count: w.badge })
        ] }, w.key)),
        p && /* @__PURE__ */ R(Ve, { onClick: E(f), children: [
          /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(ps, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ke, { children: "Settings" })
        ] }),
        y && [
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
                onChange: (w, b) => b && b !== _ && (x == null ? void 0 : x()),
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
            onClick: E(v),
            sx: {
              color: _ === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(Se, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(hn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ke, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Tn = 64, Wi = 2, Rt = ({
  label: e,
  icon: r,
  onClick: o,
  active: n,
  color: i,
  activeColor: s,
  activeBackground: a,
  ariaLabel: c,
  haspopup: l,
  isPage: h = !1,
  testId: m
}) => /* @__PURE__ */ R(
  Je,
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
      color: n ? s : i,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: s,
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
), Pi = ({
  onMenuClick: e,
  menuOpen: r,
  onSearchClick: o,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: s,
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
  const x = p.filter((D) => D.path).slice(0, Wi), [v, E] = d.useState(
    null
  ), { userName: w = "User", userAvatar: b, avatarColor: S } = _, I = { color: h, activeColor: m, activeBackground: g };
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
        bgcolor: l,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Rt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(pn, {}),
            onClick: e,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...I
          }
        ),
        x.map((D) => /* @__PURE__ */ t(
          Rt,
          {
            label: D.text,
            icon: D.icon,
            onClick: () => y == null ? void 0 : y(D.path),
            active: je(D, f),
            isPage: !0,
            testId: `mobile-nav-link-${D.text}`,
            ...I
          },
          D.path
        )),
        i && /* @__PURE__ */ t(
          Rt,
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
                children: /* @__PURE__ */ t(It, { size: 18 })
              }
            ),
            onClick: s,
            active: a,
            testId: "mobile-nav-nexa",
            ...I
          }
        ),
        o && /* @__PURE__ */ t(
          Rt,
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
        c && /* @__PURE__ */ R(Te, { children: [
          /* @__PURE__ */ t(
            Rt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${w}`,
              icon: /* @__PURE__ */ t(
                Jr,
                {
                  name: w,
                  avatar: b,
                  color: S,
                  size: 26
                }
              ),
              onClick: (D) => E(D.currentTarget),
              active: !!v,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...I
            }
          ),
          /* @__PURE__ */ t(
            On,
            {
              anchorEl: v,
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
}, zi = ({
  open: e,
  onClose: r,
  search: o
}) => /* @__PURE__ */ t(
  xs,
  {
    anchor: "top",
    open: e,
    onClose: r,
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
          /* @__PURE__ */ t(C, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ t(
            fn,
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
), Gi = ({
  height: e,
  onMenuClick: r,
  appName: o,
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
    children: /* @__PURE__ */ R(ys, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ t(
        ve,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: c },
          children: /* @__PURE__ */ t(pn, {})
        }
      ),
      /* @__PURE__ */ t(
        Jt,
        {
          title: o,
          appName: o,
          logo: n,
          onClick: i,
          menuOpen: s,
          color: l,
          testId: "mobile-brand"
        }
      ),
      h ? /* @__PURE__ */ t(C, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: h }) : null
    ] })
  }
), Qr = ({
  count: e,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const a = Vr(), c = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Ee,
    {
      title: c,
      placement: i,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ t(
        ve,
        {
          onClick: r,
          "aria-label": c,
          "data-testid": s,
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
}, Ui = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, tn = pe(At), rn = pe(or), Hi = 20, on = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Xi = ({ mode: e, onToggle: r, accentColor: o, tint: n, glass: i = !1 }) => {
  const s = Ne().palette.mode === "dark", a = Mt(), c = d.useRef(null), l = d.useRef(null), h = (p) => {
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
      Je,
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
          borderRadius: "999px",
          // White on dark: the accent is too dim against a dark surface
          color: x ? s ? "#ffffff" : o : "text.secondary",
          bgcolor: x ? n : "transparent",
          ...i && x ? jr(s, a) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...i && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": x ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: s ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
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
  return /* @__PURE__ */ R(
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
        borderRadius: "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        g("light", "Light", Ss, c),
        g("dark", "Dark", vs, l)
      ]
    }
  );
}, Ki = ({
  open: e,
  anchorEl: r,
  onClose: o,
  width: n,
  renderAvatar: i,
  userName: s,
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
  glass: v = !1
}) => {
  const E = Ne(), w = E.palette.mode === "dark", b = d.useRef(null), S = Yr({
    enabled: v,
    isDark: w,
    selector: on,
    radius: 10
  }), [I, D] = d.useState(null);
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
  }, A = { borderRadius: "8px", py: 1, gap: 0.5 }, $ = /* @__PURE__ */ R(Ae, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ R(C, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ie, { noWrap: !0, sx: { fontWeight: 600 }, children: s }),
      a ? /* @__PURE__ */ t(
        ie,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: a
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
      f ? /* @__PURE__ */ t(
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
    Pr,
    {
      open: e,
      anchorEl: r,
      onClose: o,
      action: b,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...v ? {
        slots: { transition: kr },
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
          "data-glass": v ? "true" : void 0,
          sx: v ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${Hi}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${on}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Ui, width: n, minWidth: n },
          children: [
            v ? /* @__PURE__ */ t(
              mt,
              {
                isDark: w,
                solid: E.palette.background.paper,
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
                ...S.containerProps,
                sx: v ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Kr} ${rn.duration}ms ${rn.easing} 70ms both`,
                  [Ie]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  S.lens,
                  f ? /* @__PURE__ */ t(
                    Je,
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
                  /* @__PURE__ */ t(qe, {}),
                  m ? /* @__PURE__ */ R(
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
                        /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(Es, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ie, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Xi,
                          {
                            glass: v,
                            mode: g,
                            onToggle: p,
                            accentColor: l,
                            tint: h
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ R(
                    Br,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: m ? 0 : 0.5, pb: 0.5 },
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
                        x ? /* @__PURE__ */ t(qe, { component: "li", sx: { my: 0.5 } }) : null,
                        x ? /* @__PURE__ */ R(
                          Ve,
                          {
                            onClick: () => X(x),
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
}, ji = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Vi = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  logo: i,
  title: s,
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
  expandedWidth: v,
  collapsedWidth: E,
  topContent: w,
  submenuMode: b,
  color: S,
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
  const L = Ne(), j = L.palette.mode === "dark", k = _ ?? (j ? L.palette.background.paper : "#ffffff"), V = S ?? y ?? (j ? L.palette.text.primary : g), Z = I ?? p ?? Qt(g), Ge = D ?? g, ue = d.useRef(null), [_e, me] = d.useState(!1), ge = $ ? xn($) : void 0, de = (it) => /* @__PURE__ */ t(
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
        flex: x ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: _e ? Z : "transparent",
        "&:hover": { bgcolor: Z },
        ...ji
      },
      children: [
        x && P ? (
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
        ) : de(x ? 36 : 40),
        x ? null : /* @__PURE__ */ R(C, { sx: { minWidth: 0, textAlign: "left" }, children: [
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
  ) : null, Ce = !!fe && (!x || !xe);
  return /* @__PURE__ */ R(
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
            logo: i,
            title: s,
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
            expandedWidth: v,
            collapsedWidth: E,
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
            submenuMode: b
          }
        ),
        X ? /* @__PURE__ */ t(
          Ki,
          {
            open: _e,
            anchorEl: ue.current,
            onClose: () => me(!1),
            width: Math.max(v - 16, 240),
            renderAvatar: de,
            userName: K,
            userEmail: A,
            roleLabel: ge,
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
}, nn = pe(At), sn = pe(or), Yi = 20, an = 260, qi = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Zi = ({
  anchorEl: e,
  onClose: r,
  platforms: o,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: a = !1
}) => {
  const c = Ne(), l = c.palette.mode === "dark", h = !!e, m = Yr({
    enabled: a,
    isDark: l,
    selector: ".MuiMenuItem-root",
    radius: 12
  }), g = /* @__PURE__ */ t(
    Br,
    {
      autoFocusItem: h,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: o.map((p) => {
        const f = p.key === n, y = p.accentColor ?? s;
        return /* @__PURE__ */ R(
          Ve,
          {
            selected: f,
            onClick: () => i(p),
            "data-testid": `platform-item-${p.key}`,
            sx: {
              borderRadius: a ? "12px" : "8px",
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
                ke,
                {
                  primary: p.name,
                  secondary: p.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              f ? /* @__PURE__ */ t(
                Rs,
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
            minWidth: an,
            borderRadius: `${Yi}px`
          } : { ...qi, minWidth: an },
          children: a ? /* @__PURE__ */ R(Te, { children: [
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
                  animation: `${Xr} ${nn.duration}ms ${nn.easing} both`,
                  [Ie]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ R(
              C,
              {
                ...m.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Kr} ${sn.duration}ms ${sn.easing} 70ms both`,
                  [Ie]: { animation: "none" }
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
}, Ji = ({ children: e, anchorEl: r, ...o }) => {
  const n = d.useRef(null), i = !!(r && n.current && r.contains(n.current));
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
          Zi,
          {
            ...o,
            anchorEl: i ? r : null
          }
        )
      ]
    }
  );
}, Qi = ({
  compact: e,
  color: r,
  hoverColor: o,
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
    userRole: g,
    userAvatar: p
  } = s, f = d.useRef(null), [y, _] = d.useState(
    null
  ), x = !!y, v = d.useRef(e);
  if (d.useEffect(() => {
    e && !v.current && _(null), v.current = e;
  }, [e]), !c && !n)
    return null;
  const E = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ R(Te, { children: [
    /* @__PURE__ */ R(
      Ae,
      {
        ref: f,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Ee,
            {
              title: e ? m : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                Je,
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
            Qr,
            {
              count: l + i,
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
        width: e || (w = f.current) == null ? void 0 : w.clientWidth,
        ...s
      }
    )
  ] });
}, ea = 120, ta = 300, cn = pe(At), ln = pe(or), ra = (e) => {
  var r;
  return ((r = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : r.value) ?? "";
}, oa = 'input, textarea, [contenteditable="true"]', Dr = (e) => {
  var r;
  (r = e == null ? void 0 : e.querySelector(oa)) == null || r.focus();
}, na = ({
  search: e,
  mode: r,
  onExpand: o,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: s,
  hoverColor: a
}) => {
  const c = Vr(), l = d.useContext(sr), h = d.useRef(null), [m, g] = d.useState(null);
  return d.useEffect(() => {
    r === "full" && n && (Dr(h.current), i == null || i());
  }, [r, n, i]), r === "full" ? /* @__PURE__ */ t(
    C,
    {
      ref: h,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : r === "popover" && l ? /* @__PURE__ */ t(
    sa,
    {
      search: e,
      color: s,
      railTooltip: c
    }
  ) : /* @__PURE__ */ R(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Ee, { title: "Search", placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
          ve,
          {
            "aria-label": "Search",
            onClick: (p) => r === "expand" ? o == null ? void 0 : o() : g(p.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: s,
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
              onEntered: (p) => Dr(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, sa = ({ search: e, color: r, railTooltip: o }) => {
  const n = Ne().palette.mode === "dark", i = Ls(n, ft(r, n ? 0.3 : 0.35)), s = d.useRef(null), a = d.useRef(null), [c, l] = d.useState(!1), h = d.useRef(!1), m = d.useRef(void 0), g = d.useRef(void 0), p = () => {
    clearTimeout(m.current), clearTimeout(g.current);
  }, f = d.useCallback(() => {
    p(), h.current = !1, l(!1);
  }, []), y = () => {
    clearTimeout(g.current), c || (clearTimeout(m.current), m.current = setTimeout(
      () => l(!0),
      ea
    ));
  }, _ = () => {
    clearTimeout(m.current), clearTimeout(g.current), g.current = setTimeout(() => {
      !h.current && !ra(a.current) && l(!1);
    }, ta);
  };
  return d.useEffect(() => p, []), d.useEffect(() => {
    if (!c)
      return;
    const x = setTimeout(() => Dr(a.current)), v = (w) => {
      var S, I;
      const b = w.target;
      !((S = a.current) != null && S.contains(b)) && !((I = s.current) != null && I.contains(b)) && f();
    }, E = (w) => {
      var b;
      w.key === "Escape" && (f(), (b = s.current) == null || b.focus());
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", E), () => {
      clearTimeout(x), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", E);
    };
  }, [c, f]), /* @__PURE__ */ R(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Ee,
          {
            title: c ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...o,
            children: /* @__PURE__ */ t(
              ve,
              {
                ref: s,
                "aria-label": "Search",
                "aria-expanded": c,
                onMouseEnter: y,
                onMouseLeave: _,
                onClick: () => {
                  p(), h.current = !0, l(!0);
                },
                sx: { width: 44, height: 44, color: r, borderRadius: "12px" },
                children: /* @__PURE__ */ t(Wr, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Nr,
          {
            open: c,
            anchorEl: s.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ R(
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
}, ia = 100, aa = () => {
  const e = d.useRef(null), r = d.useRef(void 0), o = d.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = d.useState(!1), [s, a] = d.useState(!1), c = () => {
    clearTimeout(r.current), r.current = void 0;
  };
  return d.useEffect(() => {
    const h = (g) => {
      o.current.has(g) || (c(), i(!1));
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
      var g;
      (g = e.current) != null && g.contains(m.target) || a(!1);
    };
    return document.addEventListener("pointerdown", h), () => document.removeEventListener("pointerdown", h);
  }, [s]), {
    expanded: n || s,
    pin: () => a(!0),
    rootProps: {
      ref: e,
      onMouseOver: (h) => {
        o.current.add(h.nativeEvent), !n && r.current === void 0 && (r.current = setTimeout(() => {
          r.current = void 0, i(!0);
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
}, ca = 100, dn = 80, Rr = 56, la = 300, wr = 288, wt = 72, Ir = 68, Yt = 8, da = 24, ua = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", fa = 68, pa = { xs: 2, md: 5 }, ha = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), ma = (e, r) => {
  const o = (n) => typeof n == "number" ? r.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, o(i)])
  ) : o(e);
}, hc = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: a = "rail",
  sidebarSubmenu: c = "expand",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: h,
  logo: m,
  onBrandClick: g,
  searchComponent: p,
  brandColor: f,
  contentPadding: y = pa,
  userMenuItems: _,
  sidebarBackgroundColor: x,
  sidebarHeaderBackgroundColor: v,
  groupAccentColor: E,
  activeSidebarForegroundColor: w,
  enableRefreshToken: b = !1,
  activePath: S,
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
  onPlatformSelect: L,
  onVerify: j,
  alertProps: k,
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
  chatPanelWidth: Lt = 420,
  onChatClose: ir,
  showAssistant: Qe = !1,
  assistantPlacement: gt = "sidebar",
  assistantShortcut: kt = "j",
  onAssistantClick: Ue,
  assistantActive: at = !1,
  assistantBusy: Nt = !1,
  customNavbar: Ft,
  customNavbarProps: ar,
  redirectToLogin: He,
  apiBaseUrl: u
}) => {
  const F = ts(), B = rs(F.breakpoints.down("md")), N = Io(
    () => un(Ei(de)),
    [de]
  ), U = de === "dark", J = ue ?? "#01584f", Q = _e ?? J, re = ge ?? (U ? "hsl(220, 35%, 9%)" : "#f2f9fc"), se = a === "collapsible", et = a === "panel", $n = et && i && !B, Xe = a === "rail-labeled", Mn = se || Xe, tt = x ?? (U ? "hsl(220, 30%, 7%)" : "#ffffff"), cr = v ?? tt, Fe = me ?? (U ? "#ffffff" : Q), xt = E ?? Qt(Fe), bt = v ? _r(cr) : Fe, eo = (T) => /* @__PURE__ */ t(
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
  ), Bt = f ?? bt, [to, lr] = ot(
    null
  ), dr = ((q == null ? void 0 : q.length) ?? 0) > 1, Dn = _o(() => lr(null), []), Ln = (T) => {
    lr(null), L ? L(T) : T.key !== M && T.url && window.location.assign(T.url);
  }, ro = (T) => dr ? /* @__PURE__ */ t(
    Ji,
    {
      anchorEl: to,
      onClose: Dn,
      platforms: q,
      currentKey: M,
      onSelect: Ln,
      accentColor: J,
      glass: c === "flyout" && (se || et) && !B,
      children: T
    }
  ) : T, Wt = dr ? (T) => lr(T.currentTarget) : g, Pt = dr ? !!to : void 0, ur = ro(
    m ?? eo(Bt)
  ), kn = ro(
    m ?? eo(f ?? Fe)
  ), fr = aa(), $e = c === "flyout" && (se || et), Me = $e || !fr.expanded, oo = $e ? "popover" : "expand", no = $e ? Ir : wt, so = $e ? "transparent" : tt, io = $e && !v ? "transparent" : cr, [Nn, ao] = ot(!1), Fn = _o(() => ao(!1), []);
  let be = 0;
  i && !B && (Xe ? be = dn : $e ? be = Ir + 2 * Yt : se || et ? be = wt : be = ca);
  const [co, rt] = ot(!1), [lo, pr] = ot(!1), ye = B && l === "bottom-bar", uo = `calc(${Tn}px + env(safe-area-inset-bottom, 0px))`, [hr, fo] = ot({ open: !1, tab: "notifications" }), po = () => fo((T) => ({ ...T, open: !1 })), Bn = he && !!W, [Wn, Pn] = ot(!0), [zn, Gn] = ot(!1), mr = Ce == null ? void 0 : Ce(), ho = (mr == null ? void 0 : mr.isOpen) ?? !1, mo = Dt === "floating" ? "floating" : "docked", Un = mo === "docked" && ho && xe && !B ? Lt : 0, zt = vr(j), go = vr(!1), xo = Io(
    () => Si(u),
    [u]
  );
  Ht(() => {
    zt.current = j;
  }, [j]);
  const gr = vr(Ue);
  gr.current = Ue;
  const yt = Qe && kt ? kt.toLowerCase() : null;
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
        const { isAuthenticated: Ke } = yi();
        if (!Ke) {
          console.log("No session found, redirecting to login"), Tt(), He();
          return;
        }
        if (!go.current) {
          const { user: St, error: yr } = vi();
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
    b && Ri(xo, He);
  }, [b, xo]), Wn)
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
    Qi,
    {
      ...yo,
      compact: T,
      color: Fe,
      hoverColor: xt
    }
  ), vo = yt ? [ha() ? "⌘" : "Ctrl", yt.toUpperCase()] : void 0, Kn = (T) => Qe && gt === "sidebar" ? /* @__PURE__ */ t(
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
    na,
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
      mainLinks: r,
      secondaryLinks: o,
      activePath: S,
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
      groupAccentColor: E,
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
  ), Eo = (T) => $e ? Vn(T) : Yn(T), Vn = (T) => /* @__PURE__ */ t(
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
            borderRadius: `${da}px`,
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
            transition: ua,
            ...Z
          },
          children: T
        }
      )
    }
  ), qn = ma(
    y,
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
          Gi,
          {
            height: Rr,
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
        i && !B && se && Eo(
          /* @__PURE__ */ R(Te, { children: [
            So(),
            (k == null ? void 0 : k.show) && !Me && /* @__PURE__ */ t(Vt, { ...k })
          ] })
        ),
        $n && Eo(
          /* @__PURE__ */ R(Te, { children: [
            /* @__PURE__ */ t(
              Vi,
              {
                mainLinks: r,
                secondaryLinks: o,
                activePath: S,
                onLinkClick: I,
                logo: ur,
                title: n,
                onBrandClick: Wt,
                brandMenuOpen: Pt,
                brandColor: Bt,
                headerBackgroundColor: io,
                headerForegroundColor: bt,
                activeAccentColor: Q,
                groupAccentColor: E,
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
            (k == null ? void 0 : k.show) && !Me && /* @__PURE__ */ t(Vt, { ...k })
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
                          logo: kn,
                          appName: n,
                          onClick: Wt,
                          menuOpen: Pt,
                          color: f ?? Fe,
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
                          Ni,
                          {
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: S,
                            onLinkClick: I,
                            accentColor: Q,
                            surfaceBackgroundColor: re,
                            railShowTitles: s
                          }
                        ),
                        (k == null ? void 0 : k.show) && /* @__PURE__ */ t(Vt, { ...k })
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
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: S,
                  onLinkClick: (T) => {
                    I == null || I(T), rt(!1);
                  },
                  onLinkAction: () => rt(!1),
                  collapsed: !1,
                  expandedWidth: ye ? "100%" : la,
                  activeAccentColor: Q,
                  groupAccentColor: E,
                  activeForegroundColor: w,
                  foregroundColor: me,
                  surfaceBackgroundColor: tt,
                  topInsetPx: ye ? 8 : 0,
                  topContent: ye ? void 0 : Gt("full"),
                  footer: ye ? void 0 : br(!1)
                }
              ),
              (k == null ? void 0 : k.show) && /* @__PURE__ */ t(Vt, { ...k })
            ]
          }
        ),
        ye && vt && /* @__PURE__ */ t(
          zi,
          {
            open: lo,
            onClose: () => pr(!1),
            search: vt
          }
        ),
        ye && /* @__PURE__ */ t(
          Pi,
          {
            ...yo,
            pinnedLinks: h,
            activePath: S,
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
              "--lumora-sticky-top": B ? `${Rr}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: be ? `calc(100% - ${be}px)` : "100%",
              mt: B ? `${Rr}px` : 0,
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
          Oi,
          {
            open: ho,
            variant: mo,
            position: it,
            width: Lt,
            sidebarWidthPx: be,
            bottomOffsetPx: Qe && gt === "floating" ? fa : 0,
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
  fc as FullBleedSection,
  xi as Kbd,
  hc as LumoraWrapper,
  Tt as clearAuthTokens,
  hc as default,
  pc as getAuthErrorMessage,
  Ot as getAuthTokens,
  vi as getCurrentUser,
  Ei as getDesignTokens,
  yi as isAuthenticated,
  $r as logAuthError,
  En as storeAuthTokens
};
