import { jsx as t, jsxs as S, Fragment as Fe } from "react/jsx-runtime";
import Ws from "@mui/icons-material/KeyboardArrowDownRounded";
import Ps from "@mui/icons-material/KeyboardArrowUpRounded";
import Bs from "@mui/icons-material/ChevronRightRounded";
import A from "@mui/material/Box";
import en from "@mui/material/Collapse";
import Qe from "@mui/material/Divider";
import Ee from "@mui/material/IconButton";
import ao from "@mui/material/ListItemButton";
import we from "@mui/material/ListItemIcon";
import Ue from "@mui/material/ListItemText";
import We from "@mui/material/Stack";
import Re from "@mui/material/Tooltip";
import ne from "@mui/material/Typography";
import { useTheme as Xe, createTheme as wo, alpha as He, ThemeProvider as yo } from "@mui/material/styles";
import * as d from "react";
import { useMemo as tn, useState as dt, useCallback as on, useRef as Xo, useEffect as mo, useLayoutEffect as zs } from "react";
import it from "@mui/material/ButtonBase";
import { keyframes as fr } from "@emotion/react";
import pr from "@mui/material/Fade";
import hr from "@mui/material/Popper";
import { useTheme as kn, CssBaseline as Qo, GlobalStyles as Gs, Box as V, useMediaQuery as Fn, Stack as Pt, Skeleton as Ne, Drawer as rn, SwipeableDrawer as Hs } from "@mui/material";
import nn from "axios";
import Us from "@mui/material/Card";
import Xs from "@mui/material/CardContent";
import Wn from "@mui/material/Button";
import Ks from "@mui/icons-material/AutoAwesomeRounded";
import js from "@mui/material/Grow";
import mr from "@mui/material/Paper";
import Vs from "@mui/material/Slide";
import Ys from "@mui/material/ListSubheader";
import st from "@mui/material/MenuItem";
import gr from "@mui/material/MenuList";
import Pn from "@mui/icons-material/MenuRounded";
import xr from "@mui/icons-material/SearchRounded";
import Bn from "@mui/icons-material/LogoutRounded";
import zn from "@mui/icons-material/NotificationsNoneOutlined";
import qs from "@mui/icons-material/SettingsOutlined";
import Zs from "@mui/material/Avatar";
import Js from "@mui/material/Menu";
import sn from "@mui/material/ToggleButton";
import Qs from "@mui/material/ToggleButtonGroup";
import ei from "@mui/material/Drawer";
import ti from "@mui/material/AppBar";
import oi from "@mui/material/Toolbar";
import Gn from "@mui/material/Badge";
import ri from "@mui/icons-material/DarkModeOutlined";
import ni from "@mui/icons-material/LightModeOutlined";
import si from "@mui/icons-material/SettingsBrightnessOutlined";
import br from "@mui/material/Popover";
import ii from "@mui/icons-material/CheckRounded";
const So = ({
  logo: e,
  title: o,
  appName: r,
  onClick: n,
  color: s,
  testId: i,
  menuOpen: c
}) => {
  const a = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: s,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, u = /* @__PURE__ */ S(Fe, { children: [
    o ? /* @__PURE__ */ t(
      ne,
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
    it,
    {
      onClick: n,
      "aria-label": c === void 0 ? `${r} home` : `${r}: switch platform`,
      ...c !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": c
      },
      "data-testid": i,
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
      children: u
    }
  ) : /* @__PURE__ */ t(We, { direction: "row", "data-testid": i, sx: a, children: u });
}, er = !1, wt = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, Et = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, yt = (e, o) => e ? `${e}/${o.text}` : o.text, rt = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => rt(n, o))) ?? !1 : !1;
}, Ge = (e, o) => !!(o && e.path === o), vr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return Et(r) ? vr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), tr = (e) => {
  const o = Ro(e);
  if (!o)
    return "#ffffff";
  const [r, n, s] = o.map((c) => {
    const a = c / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Ht = (e) => {
  const o = Ro(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = o;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, or = (e, o) => {
  const r = Ro(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, Ro = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Hn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), yr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", ai = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", ci = fr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, ge = "@media (prefers-reduced-motion: reduce)", te = 6, Sr = "9, 193, 174", Un = d.createContext(
  void 0
), Io = d.createContext(
  void 0
), Er = (e) => d.useContext(Io) ?? e, _o = () => {
  const e = d.useContext(Un), o = e ? Ro(e) : null;
  return o ? o.join(", ") : Sr;
}, li = (e, o, r = Sr) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${ai(e)}, 0 0 0 1px ${yr(e)}`
}), To = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: yr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${te}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), wr = fr`
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
`, Rr = fr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Xn = (e, o = Sr, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Eo = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: or(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${or(e, 0.45)}`
}, di = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${yr(e)}`;
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
}, ui = 100, Kn = 80, go = 56, Bt = 72, Gt = 64, ae = 44, Ut = 24, Co = 4, pt = 8, jn = te, Vn = { xs: 2, md: "18px" }, Yn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, Ao = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), fi = (e, o, r) => e && Ao(o, r), qn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || o ? 0 : r === "rail-labeled" ? Kn : Ao(n, r) ? s ? 0 : Gt + 2 * pt : r === "collapsible" || r === "panel" ? Bt : ui, Zn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Jn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Qn = { stiffness: 320, damping: 24 }, es = { stiffness: 320, damping: 28 }, Ir = { stiffness: 520, damping: 20 }, _r = { stiffness: 380, damping: 36 }, Oo = { stiffness: 260, damping: 28 }, pi = "cubic-bezier(0.32, 1.28, 0.52, 1)", hi = 420, an = 60, mi = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), cn = /* @__PURE__ */ new Map(), xe = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, s = cn.get(n);
  if (s)
    return s;
  if (!mi)
    return { easing: pi, duration: hi };
  const i = 1 / 600;
  let c = 0, a = 0, u = 0, l = 1 / an;
  const x = [0];
  for (; u < 3; ) {
    const p = (-e * (c - 1) - o * a) / r;
    if (a += p * i, c += a * i, u += i, u >= l && (x.push(c), l += 1 / an, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  x[x.length - 1] = 1;
  const h = {
    easing: `linear(${x.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return cn.set(n, h), h;
}, Xt = (e) => !!(e && typeof e.animate == "function"), Rt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, gi = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, xi = (e, o = 1.14) => {
  if (!Xt(e) || Rt())
    return;
  const r = xe(Ir);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, Kt = "data-rail-item", ts = `[${Kt}], button, [role="button"]`, It = d.createContext(!1), Tr = () => {
  const e = d.useContext(It), o = Xe(), r = d.useContext(Io);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: To(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, nt = xe(_r), Cr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: c = null
}) => {
  const a = d.useRef(null), u = _o(), [l, x] = d.useState(null), h = d.useRef(null), p = d.useRef(null), g = (y, I) => {
    p.current = I;
    const b = I.getBoundingClientRect(), _ = y.getBoundingClientRect(), M = n ?? b.width, C = n ?? b.height, O = {
      top: Math.round(b.top - _.top + (b.height - C) / 2),
      left: Math.round(b.left - _.left + (b.width - M) / 2),
      width: Math.round(M),
      height: Math.round(C)
    };
    x(
      (N) => N && N.visible && N.top === O.top && N.left === O.left && N.width === O.width && N.height === O.height ? N : { ...O, visible: !0, instant: !(N != null && N.visible) }
    );
  }, m = (y, I) => {
    var _;
    const b = (_ = I == null ? void 0 : I.closest) == null ? void 0 : _.call(I, r);
    return b && y.contains(b) ? b : null;
  }, R = (y) => {
    if (!e)
      return;
    const I = m(y.currentTarget, y.target);
    I && g(y.currentTarget, I);
  }, w = (y) => {
    if (!e)
      return;
    const I = m(y.currentTarget, y.target);
    I && y.target.matches(":focus-visible") && g(y.currentTarget, I);
  }, T = () => {
    var b;
    const y = (b = a.current) == null ? void 0 : b.parentElement, I = i && (y == null ? void 0 : y.querySelector(i));
    return y && I ? { container: y, item: I } : null;
  }, v = () => {
    const y = T();
    if (y) {
      g(y.container, y.item);
      return;
    }
    p.current = null, x((I) => I != null && I.visible ? { ...I, visible: !1 } : I);
  };
  d.useEffect(() => {
    var I, b;
    if (!e)
      return;
    const y = T();
    y ? g(y.container, y.item) : (b = (I = a.current) == null ? void 0 : I.parentElement) != null && b.matches(":hover") || v();
  }, [e, c]);
  const E = (y) => {
    const I = y.relatedTarget;
    (!I || !y.currentTarget.contains(I)) && (y.currentTarget.matches(":hover") || v());
  };
  return d.useEffect(() => {
    const y = a.current;
    if (!(l != null && l.visible)) {
      h.current = null;
      return;
    }
    const I = h.current;
    if (h.current = l.top, !Xt(y) || Rt())
      return;
    if (I === null || l.instant) {
      y.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: nt.duration,
        easing: nt.easing
      });
      return;
    }
    const b = Math.min(Math.abs(l.top - I) / 600, 0.08);
    b && y.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - b / 2} ${1 + b}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: nt.duration, easing: "ease-out" }
    );
  }, [l == null ? void 0 : l.top, l == null ? void 0 : l.visible, l == null ? void 0 : l.instant]), {
    lens: e && l ? /* @__PURE__ */ t(
      A,
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...Xn(o, u),
          borderRadius: `${s}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: l.width,
          height: l.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset.
          translate: `${l.left}px ${l.top}px`,
          // Shrinks away as it fades; wells back up on return. Swells
          // with the item under it (useDockMagnify)
          scale: l.visible ? "var(--dock-max-scale, 1)" : "0.7",
          opacity: l.visible ? 1 : 0,
          pointerEvents: "none",
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${nt.duration}ms ${nt.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
          [ge]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: R,
      onMouseLeave: v,
      onFocus: w,
      onBlur: E,
      onScrollCapture: v
    } : {}
  };
}, bi = (e, o, r = null) => {
  const n = Cr({
    enabled: e,
    isDark: o,
    selector: ts,
    // The rail's buttons exactly, so the hover sits on the item
    size: ae,
    radius: te,
    pinSelector: `[${Kt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, vi = (e, o) => {
  let r = 0, n = 0, s = e;
  for (; s && s !== o; ) {
    r += s.offsetTop, n += s.offsetLeft;
    const a = s.offsetParent;
    for (let u = s.parentElement; u && u !== o && (r -= u.scrollTop, n -= u.scrollLeft, u !== a); u = u.parentElement)
      ;
    s = a;
  }
  if (s === o && e.offsetWidth)
    return {
      top: Math.round(r),
      left: Math.round(n),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const i = e.getBoundingClientRect(), c = o.getBoundingClientRect();
  return {
    top: Math.round(i.top - c.top),
    left: Math.round(i.left - c.left),
    width: Math.round(i.width),
    height: Math.round(i.height)
  };
}, yi = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const s = d.useRef(null), [i, c] = d.useState(null), a = d.useRef(null), u = d.useCallback(
    (x) => {
      const h = n.current;
      if (!e || !h)
        return;
      const p = h.querySelector(
        `[${Kt}][data-active="true"]`
      );
      if (!p) {
        c(
          (m) => m != null && m.visible ? { ...m, visible: !1 } : m
        );
        return;
      }
      const g = vi(p, h);
      c(
        (m) => m && m.visible && m.top === g.top && m.left === g.left && m.width === g.width && m.height === g.height ? m : {
          ...g,
          visible: !0,
          instant: x || !(m != null && m.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    u(!1);
  }), d.useEffect(() => {
    const x = n.current;
    if (!e || !x)
      return;
    let h = 0;
    const p = () => {
      cancelAnimationFrame(h), h = requestAnimationFrame(() => u(!1));
    }, g = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    g == null || g.observe(x);
    const m = typeof MutationObserver > "u" ? null : new MutationObserver(p);
    return m == null || m.observe(x, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(h), g == null || g.disconnect(), m == null || m.disconnect();
    };
  }, [e, n, u]), d.useEffect(() => {
    const x = s.current;
    if (!(i != null && i.visible)) {
      a.current = null;
      return;
    }
    const h = a.current;
    if (a.current = i.top, h === null || i.instant || !Xt(x) || Rt())
      return;
    const p = Math.min(Math.abs(i.top - h) / 600, 0.08);
    p && x.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - p / 2} ${1 + p}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: nt.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ t(
    A,
    {
      ref: s,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": i.visible ? "true" : "false",
      sx: {
        ...Eo(r, o),
        borderRadius: `${te}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: i.width,
        height: i.height,
        translate: `${i.left}px ${i.top}px`,
        // Swells with its item (useDockMagnify)
        scale: i.visible ? "var(--dock-active-scale, 1)" : "0.7",
        opacity: i.visible ? 1 : 0,
        pointerEvents: "none",
        transition: i.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${nt.duration}ms ${nt.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [ge]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Si = 1.6, os = 110, rr = 110, co = xe(_r), Ei = (e, o = os) => e >= o ? 0 : (1 + Math.cos(Math.PI * e / o)) / 2, rs = (e, {
  enabled: o,
  axis: r,
  itemSelector: n,
  glyphSelector: s,
  transition: i,
  maxScale: c = Si,
  reach: a = os,
  carrierSelector: u
}) => {
  const l = d.useRef(0), x = d.useRef(
    /* @__PURE__ */ new WeakMap()
  ), h = d.useRef(/* @__PURE__ */ new Set()), p = d.useRef(/* @__PURE__ */ new Set()), g = i ? `, ${i}` : "", m = (b) => u ? b.closest(u) : null, R = (b) => {
    var C;
    const [_ = "0", M = "0"] = (((C = m(b)) == null ? void 0 : C.style.translate) ?? "").split(" ").filter(Boolean);
    return r === "x" ? parseFloat(_) || 0 : parseFloat(M) || 0;
  }, w = (b) => {
    const _ = b.getBoundingClientRect();
    return (r === "x" ? _.left + _.width / 2 : _.top + _.height / 2) - R(b);
  }, T = (b) => {
    const _ = b.getBoundingClientRect();
    return Array.from(b.querySelectorAll(n)).filter((M) => {
      var j;
      const C = (j = M.parentElement) == null ? void 0 : j.closest(n);
      if (C && b.contains(C))
        return !1;
      const O = M.getBoundingClientRect(), N = w(M), L = r === "x" ? N : O.left + O.width / 2, B = r === "x" ? O.top + O.height / 2 : N;
      return O.width > 0 && L >= _.left && L <= _.right && B >= _.top && B <= _.bottom;
    }).map((M) => ({
      item: M,
      glyph: s ? M.querySelector(s) : M
    })).filter(
      (M) => M.glyph !== null
    );
  }, v = (b, _) => {
    if (_ === b)
      return c;
    let M = x.current.get(_);
    if (M === void 0) {
      const N = Number(_.style.scale) || 1, L = _.getBoundingClientRect();
      M = { width: L.width / N, height: L.height / N }, x.current.set(_, M);
    }
    if (!(M.width > 0 && M.height > 0))
      return 1;
    const C = b.getBoundingClientRect(), O = Math.min(
      C.width / M.width,
      C.height / M.height
    );
    return Math.max(1, Math.min(O, c));
  }, E = () => {
    var b, _, M;
    cancelAnimationFrame(l.current), h.current.forEach((C) => {
      C.style.transition = `scale ${co.duration}ms ${co.easing}${g}`, C.style.scale = "";
    }), h.current.clear(), p.current.forEach((C) => {
      C.style.transition = `translate ${co.duration}ms ${co.easing}`, C.style.translate = "";
    }), p.current.clear(), (b = e.current) == null || b.style.removeProperty("--dock-spread"), (_ = e.current) == null || _.style.removeProperty("--dock-max-scale"), (M = e.current) == null || M.style.removeProperty("--dock-active-scale");
  }, D = (b, _, M) => {
    const C = r === "x" ? _ : M, O = T(b).map(({ item: B, glyph: j }) => {
      const P = w(B), U = 1 + (v(B, j) - 1) * Ei(Math.abs(C - P), a);
      j.style.transition = `scale ${rr}ms ease-out${g}`, U > 1.001 ? (j.style.scale = U.toFixed(3), h.current.add(j)) : h.current.has(j) && (j.style.scale = "", h.current.delete(j));
      const se = r === "x" ? B.offsetWidth : B.offsetHeight;
      return { item: B, centre: P, scale: U, growth: (U - 1) * se };
    });
    b.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...O.map(({ scale: B }) => B)).toFixed(3)
    );
    const N = O.find(({ item: B }) => B.dataset.active === "true");
    if (b.style.setProperty(
      "--dock-active-scale",
      ((N == null ? void 0 : N.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const L = O.reduce((B, { growth: j }) => B + j, 0);
    b.style.setProperty("--dock-spread", `${L.toFixed(1)}px`), O.forEach(({ item: B, centre: j, growth: P }) => {
      const U = m(B);
      if (!U)
        return;
      const se = O.reduce(
        (Ae, fe) => fe.centre < j ? Ae + fe.growth : Ae,
        P / 2
      );
      U.style.transition = `translate ${rr}ms ease-out`, Math.abs(se) > 0.1 ? (U.style.translate = r === "x" ? `${se.toFixed(1)}px 0` : `0 ${se.toFixed(1)}px`, p.current.add(U)) : p.current.has(U) && (U.style.translate = "", p.current.delete(U));
    });
  }, y = (b) => {
    if (b.pointerType && b.pointerType !== "mouse" || Rt())
      return;
    const _ = b.currentTarget, { clientX: M, clientY: C } = b;
    cancelAnimationFrame(l.current), l.current = requestAnimationFrame(() => {
      const O = _.getBoundingClientRect(), N = r === "x" ? C : M, [L, B] = r === "x" ? [O.top, O.bottom] : [O.left, O.right];
      if (N < L || N > B) {
        E();
        return;
      }
      D(_, M, C);
    });
  }, I = (b) => {
    const _ = e.current;
    if (!o || !_ || Rt())
      return;
    const M = b.getBoundingClientRect();
    D(_, M.left + M.width / 2, M.top + M.height / 2);
  };
  return d.useEffect(() => {
    o || E();
  }, [o]), d.useEffect(() => () => cancelAnimationFrame(l.current), []), {
    containerProps: o ? { onPointerMove: y, onPointerLeave: E, onScrollCapture: E } : {},
    swellOn: I,
    settle: E
  };
}, me = 52, Ko = 36, wi = 1.8, Ri = me / 2, jo = "[data-flyout-tile]", nr = 4, Ii = 16, _i = 104, gt = 24, ns = "background 160ms ease, color 160ms ease, transform 120ms ease", sr = 10, ss = 10, ln = ss + 2, Ti = 18, Ci = 1.08, Ai = 1190, Oi = 1195, dn = xe(Qn), St = xe(_r), un = xe(Oo), fn = 8192, $i = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), c = e + r, a = o + n, u = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${fn} V ${fn} H 0 Z M ${e + i} ${o} H ${c - i} ${u} ${c} ${o + i} V ${a - i} ${u} ${c - i} ${a} H ${e + i} ${u} ${e} ${a - i} V ${o + i} ${u} ${e + i} ${o} Z')`;
}, Mi = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: s,
  activePath: i,
  focusFirst: c = !1,
  onNavigate: a,
  onClose: u,
  panelProps: l,
  accentColor: x,
  activeBackgroundColor: h,
  activeForegroundColor: p,
  solidSurface: g
}) => {
  const m = Xe(), R = m.palette.mode === "dark", w = !!(e && r), T = d.useRef(null);
  e && o && (T.current = { group: e, key: o });
  const v = T.current, E = d.useMemo(() => r ? {
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
  } : null, [r, n]), D = d.useRef(E);
  E && (D.current = E), d.useEffect(() => {
    r && xi(r, Ci);
  }, [r]);
  const [y, I] = d.useState(!1);
  d.useEffect(() => {
    if (!w) {
      I(!1);
      return;
    }
    let $ = 0;
    const G = requestAnimationFrame(() => {
      $ = requestAnimationFrame(() => I(!0));
    });
    return () => {
      cancelAnimationFrame(G), cancelAnimationFrame($);
    };
  }, [w]);
  const b = d.useMemo(
    () => v ? vr(v.group.subitems, v.group.icon) : [],
    [v]
  ), _ = d.useRef(null), M = rs(_, {
    enabled: w,
    axis: "x",
    itemSelector: jo,
    transition: ns,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: wi,
    // The neighbours make room as it grows
    carrierSelector: '[role="menuitem"]'
  }), C = d.useRef(void 0), O = d.useCallback(($) => {
    var K;
    (K = C.current) == null || K.call(C), C.current = void 0;
    const G = $ == null ? void 0 : $.parentElement;
    if (!$ || !G || typeof MutationObserver > "u")
      return;
    const Y = () => {
      let F = 0;
      G.querySelectorAll(jo).forEach((he) => {
        var be;
        if (he.offsetTop > 0)
          return;
        const ie = parseFloat(he.style.scale) || 1, Pe = parseFloat(
          ((be = he.closest('[role="menuitem"]')) == null ? void 0 : be.style.translate) ?? ""
        ) || 0;
        he.offsetLeft + Pe - (ie - 1) * me / 2 < $.offsetWidth && (F = Math.max(
          F,
          (ie - 1) * me - ln
        ));
      });
      const le = F > 0 ? `0 ${(-F).toFixed(1)}px` : "";
      $.style.translate !== le && ($.style.translate = le);
    }, Z = new MutationObserver(Y);
    Z.observe(G, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), C.current = () => Z.disconnect();
  }, []), N = d.useRef([]), [L, B] = d.useState([]);
  d.useLayoutEffect(() => {
    const $ = () => {
      const Y = b.map((Z, K) => {
        var F, le;
        return [
          ((F = N.current[K]) == null ? void 0 : F.offsetWidth) ?? 0,
          ((le = N.current[K]) == null ? void 0 : le.offsetHeight) ?? 0
        ];
      });
      B(
        (Z) => Z.length === Y.length && Z.every(([K, F], le) => K === Y[le][0] && F === Y[le][1]) ? Z : Y
      );
    };
    if ($(), typeof ResizeObserver > "u")
      return;
    const G = new ResizeObserver($);
    return N.current.slice(0, b.length).forEach((Y) => Y && G.observe(Y)), () => G.disconnect();
  }, [b]);
  const j = Di(
    L.map(([$]) => $),
    b.length
  ), P = Math.max(Ii, ...L.map(([, $]) => $)), U = d.useRef([]), se = b.findIndex(
    ({ sub: $ }) => Ge($, i)
  ), [Ae, fe] = d.useState(0);
  d.useEffect(() => {
    fe(Math.max(se, 0));
  }, [o]), d.useEffect(() => {
    if (!w || !c)
      return;
    const $ = setTimeout(() => {
      var G;
      return (G = U.current[0]) == null ? void 0 : G.focus();
    });
    return () => clearTimeout($);
  }, [w, c, o]);
  const pe = ($) => {
    var Y;
    const G = Math.max(0, Math.min($, b.length - 1));
    fe(G), (Y = U.current[G]) == null || Y.focus();
  }, Oe = ($, G) => {
    var Y;
    switch ($.key) {
      case "ArrowRight":
        pe(G + 1);
        break;
      case "ArrowLeft":
        G === 0 ? u(!0) : pe(G - 1);
        break;
      case " ":
        (Y = U.current[G]) == null || Y.click();
        break;
      case "Home":
        pe(0);
        break;
      case "End":
        pe(b.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    $.preventDefault();
  }, $e = m.palette.text.primary, Ke = R ? m.palette.text.primary : x;
  return /* @__PURE__ */ S(Fe, { children: [
    /* @__PURE__ */ t(pr, { in: w, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      A,
      {
        "data-testid": "sidebar-flyout-scrim",
        "data-flyout-scrim": "",
        "aria-hidden": !0,
        onClick: () => u(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: s ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...s ? { clipPath: $i(s) } : {},
          zIndex: Ai,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: R ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)"
        }
      }
    ) }),
    /* @__PURE__ */ t(
      hr,
      {
        open: w,
        anchorEl: E ?? D.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Both rows centred on the rail icon, a gap from the rail
          {
            name: "offset",
            options: { offset: [0, sr] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Oi,
          transition: y ? `transform ${St.duration}ms ${St.easing}` : "none",
          [ge]: { transition: "none" }
        },
        children: ({ TransitionProps: $ }) => /* @__PURE__ */ t(
          Li,
          {
            in: ($ == null ? void 0 : $.in) ?? w,
            onEnter: $ == null ? void 0 : $.onEnter,
            onExited: $ == null ? void 0 : $.onExited,
            panelProps: l,
            groupText: v == null ? void 0 : v.group.text,
            children: v ? /* @__PURE__ */ S(
              A,
              {
                ref: _,
                role: "menu",
                "aria-label": v.group.text,
                ...M.containerProps,
                onBlur: (G) => {
                  G.currentTarget.contains(
                    G.relatedTarget
                  ) || M.settle();
                },
                sx: {
                  position: "relative",
                  width: j.width,
                  height: me + nr + P,
                  // The panel stretches as the dock pushes
                  // the pages along, as the Dock's shelf does
                  mr: "var(--dock-spread, 0px)",
                  transition: `margin-right ${St.duration}ms ${St.easing}`,
                  [ge]: { transition: "none" }
                },
                children: [
                  /* @__PURE__ */ t(
                    A,
                    {
                      component: "span",
                      ref: O,
                      "aria-hidden": !0,
                      "data-testid": "sidebar-flyout-heading",
                      sx: {
                        // Above the tiles, so they stay centred on the
                        // rail icon; the row's name already labels it.
                        // It rises only when a swelling tile would
                        // reach it (see the effect on `headingRef`)
                        position: "absolute",
                        bottom: "100%",
                        left: 0,
                        mb: `${ln}px`,
                        transition: `translate ${rr}ms ease-out`,
                        [ge]: {
                          transition: "none"
                        },
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        // The pages' own name colour
                        color: To(R).color
                      },
                      children: v.group.text
                    }
                  ),
                  b.map(({ sub: G, icon: Y }, Z) => /* @__PURE__ */ t(
                    as,
                    {
                      ref: (K) => {
                        U.current[Z] = K;
                      },
                      nameRef: (K) => {
                        N.current[Z] = K;
                      },
                      tileLeft: j.tiles[Z],
                      nameLeft: j.names[Z],
                      nameRowPx: P,
                      sub: G,
                      icon: Y,
                      index: Z,
                      active: Ge(
                        G,
                        i
                      ),
                      tabIndex: Z === Ae ? 0 : -1,
                      onClick: (K) => {
                        wt(K) && (K.preventDefault(), a(G.path), u());
                      },
                      onKeyDown: (K) => Oe(K, Z),
                      onFocus: (K) => {
                        fe(Z);
                        const F = K.currentTarget.querySelector(
                          jo
                        );
                        F && K.currentTarget.matches(
                          ":focus-visible"
                        ) && M.swellOn(F);
                      },
                      accentColor: x,
                      activeBackgroundColor: h,
                      activeForegroundColor: p,
                      labelColor: $e,
                      iconColor: Ke,
                      surface: g,
                      isDark: R
                    },
                    G.path
                  ))
                ]
              },
              v.key
            ) : null
          }
        )
      }
    )
  ] });
}, Li = ({
  in: e,
  onEnter: o,
  onExited: r,
  panelProps: n,
  groupText: s,
  children: i
}) => {
  const c = d.useRef(null), a = (u) => {
    c.current = u;
    const { ref: l } = n;
    typeof l == "function" ? l(u) : l && (l.current = u);
  };
  return d.useLayoutEffect(() => {
    const u = c.current;
    if (gi(u), e) {
      o == null || o(), Xt(u) && !Rt() && u.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: un.duration, easing: un.easing }
      );
      return;
    }
    if (!Xt(u)) {
      r == null || r();
      return;
    }
    u.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 120,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(() => r == null ? void 0 : r()).catch(() => {
    });
  }, [e]), /* @__PURE__ */ t(
    A,
    {
      ref: a,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": s,
      sx: {
        position: "relative",
        // No surface of its own: the scrim's gradient sits behind it.
        // A tile the dock grows pops out past it.
        p: `${ss}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -sr - 2,
          width: sr + 2
        }
      },
      children: i
    }
  );
}, is = (e) => e % 2 === 1, Di = (e, o) => {
  const r = [], n = [];
  let s = -gt, i = -gt, c = -gt;
  for (let a = 0; a < o; a += 1) {
    const u = e[a] || me, l = !is(a), x = l ? me : u, h = l ? u : me, p = Math.max(
      s + gt + x / 2,
      i + gt + h / 2,
      c + gt + me / 2
    );
    s = p + x / 2, i = p + h / 2, c = p + me / 2, r.push(Math.round(p - me / 2)), n.push(Math.round(p - u / 2));
  }
  return { tiles: r, names: n, width: Math.round(Math.max(s, i, 0)) };
}, as = d.forwardRef(
  ({
    nameRef: e,
    tileLeft: o,
    nameLeft: r,
    nameRowPx: n,
    sub: s,
    icon: i,
    index: c,
    active: a,
    tabIndex: u,
    onClick: l,
    onKeyDown: x,
    onFocus: h,
    accentColor: p,
    activeBackgroundColor: g,
    activeForegroundColor: m,
    labelColor: R,
    iconColor: w,
    surface: T,
    isDark: v
  }, E) => {
    const D = is(c), y = To(v, T), I = {
      animation: `${ci} ${dn.duration}ms ${dn.easing} both`,
      animationDelay: `${c * Ti}ms`,
      [ge]: { animation: "none" }
    }, b = {
      background: g ?? p,
      color: m,
      "& .MuiSvgIcon-root": { color: m }
    }, _ = {
      background: `color-mix(in srgb, ${p} ${v ? 20 : 12}%, ${T})`
    }, M = v ? y.color : p, C = {
      "& [data-flyout-tile]": a ? {} : _,
      "& [data-flyout-name]": { color: M, fontWeight: 600 }
    }, O = {
      ...y,
      border: "none",
      // Lifted a little more than a resting label: they float over
      // the page
      boxShadow: v ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)"
    };
    return /* @__PURE__ */ S(
      it,
      {
        ref: E,
        component: "a",
        href: s.path,
        role: "menuitem",
        tabIndex: u,
        "aria-current": a ? "page" : void 0,
        "data-testid": `sidebar-subitem-${s.text}`,
        "data-active": a ? "true" : "false",
        onClick: l,
        onKeyDown: x,
        onFocus: h,
        disableRipple: !0,
        sx: {
          position: "absolute",
          inset: 0,
          display: "block",
          pointerEvents: "none",
          "& [data-flyout-tile], & [data-flyout-slot], & [data-flyout-bridge]": {
            position: "absolute",
            pointerEvents: "auto"
          },
          color: R,
          textDecoration: "none",
          "&:hover": C,
          "&.Mui-focusVisible": {
            ...C,
            "& [data-flyout-tile]": {
              ...a ? {} : _,
              outline: "2px solid",
              outlineColor: p,
              outlineOffset: 2
            }
          },
          "&:active [data-flyout-tile]": { transform: "scale(0.94)" },
          [ge]: {
            "&:active [data-flyout-tile]": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(
            A,
            {
              "data-flyout-bridge": "",
              "aria-hidden": !0,
              sx: {
                left: o,
                top: 0,
                width: me,
                height: "100%"
              }
            }
          ),
          /* @__PURE__ */ t(
            A,
            {
              "data-flyout-tile": "",
              sx: {
                ...O,
                left: o,
                top: D ? n + nr : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: me,
                height: me,
                p: 0,
                borderRadius: `${Ri}px`,
                // Grows out of the row, away from its name
                transformOrigin: D ? "center top" : "center bottom",
                transition: `scale ${St.duration}ms ${St.easing}, ${ns}`,
                "& .MuiSvgIcon-root": {
                  fontSize: Ko,
                  color: w,
                  transition: "color 160ms ease"
                },
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                '& [role="img"], & [role="img"] > img': {
                  width: Ko,
                  height: Ko
                },
                ...a ? b : {},
                ...I
              },
              children: i
            }
          ),
          /* @__PURE__ */ t(
            A,
            {
              "data-flyout-slot": "",
              sx: {
                left: r,
                top: D ? 0 : me + nr,
                height: n,
                display: "flex",
                // Held against its own tile, not floating mid-row
                alignItems: D ? "flex-end" : "flex-start"
              },
              children: /* @__PURE__ */ t(
                A,
                {
                  component: "span",
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": s.text,
                  sx: {
                    // No card of its own: text on the panel
                    color: y.color,
                    px: 1,
                    py: 0,
                    fontSize: "0.75rem",
                    lineHeight: "16px",
                    // A long name wraps, split evenly, so it stays as
                    // compact as its tile; never cut short
                    maxWidth: _i,
                    textAlign: "center",
                    textWrap: "balance",
                    display: "block",
                    fontWeight: a ? 600 : 500,
                    // Room for the bold it turns on hover, held from
                    // the start, so the measured width (and with it
                    // every column after) never moves
                    "&::after": {
                      content: "attr(data-text)",
                      display: "block",
                      fontWeight: 600,
                      height: 0,
                      overflow: "hidden",
                      visibility: "hidden"
                    },
                    ...a ? { color: M } : {},
                    transition: "color 160ms ease",
                    ...I
                  },
                  children: s.text
                }
              )
            }
          )
        ]
      }
    );
  }
);
as.displayName = "FlyoutTile";
const Ni = 50, ki = 250, Fi = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const s = d.useRef(/* @__PURE__ */ new Map()), i = d.useRef(null), c = d.useRef(void 0), a = d.useRef(void 0), u = () => {
    clearTimeout(c.current), c.current = void 0;
  }, l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, x = (T, v, E = !1) => {
    u(), l(), r({ key: T, pinned: v, focusFirst: E });
  }, h = d.useCallback((T = !1) => {
    var E, D;
    u(), l();
    const v = (E = n.current) == null ? void 0 : E.key;
    r(null), T && v && ((D = s.current.get(v)) == null || D.focus());
  }, []), p = () => {
    u(), !(!n.current || n.current.pinned) && (l(), a.current = setTimeout(() => h(), ki));
  };
  d.useEffect(() => {
    e || h();
  }, [e, h]), d.useEffect(
    () => () => {
      u(), l();
    },
    []
  );
  const g = o !== null;
  return d.useEffect(() => {
    if (!g)
      return;
    const T = (D) => {
      var I;
      const y = D;
      return y ? (I = i.current) != null && I.contains(y) ? !0 : [...s.current.values()].some((b) => b.contains(y)) : !1;
    }, v = (D) => {
      T(D.target) || h();
    }, E = (D) => {
      var y;
      D.key === "Escape" && h(
        !!((y = i.current) != null && y.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", E), () => {
      document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", E);
    };
  }, [g, h]), {
    state: o,
    close: h,
    triggerProps: (T) => ({
      ref: (v) => {
        v ? s.current.set(T, v) : s.current.delete(T);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        l();
        const v = n.current;
        if (v) {
          v.key !== T && x(T, v.pinned);
          return;
        }
        u(), c.current = setTimeout(
          () => x(T, !1),
          Ni
        );
      },
      onMouseLeave: p,
      onClick: (v) => {
        if (v.detail === 0) {
          x(T, !0, !0);
          return;
        }
        const E = n.current;
        (E == null ? void 0 : E.key) === T && E.pinned ? h() : x(T, !0);
      },
      onKeyDown: (v) => {
        v.key === "ArrowRight" && (v.preventDefault(), x(T, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: l,
      onMouseLeave: p
    },
    onRailLeafEnter: () => {
      u(), n.current && !n.current.pinned && h();
    },
    getTrigger: (T) => s.current.get(T) ?? null
  };
}, Wi = 264, Pi = 72, pn = 64, lo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Bi = 16, zi = 14, Gi = 4, Hi = 2.5, hn = "0.7rem", mn = 22, uo = xe(Ir), ut = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
  const i = d.useRef(null), [c, a] = d.useState(!1), u = d.useCallback(() => {
    const l = i.current;
    l && a(l.scrollWidth > l.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    u();
  }, [u, e]), d.useEffect(() => {
    const l = i.current;
    if (!l)
      return;
    const x = new ResizeObserver(() => u());
    return x.observe(l), () => x.disconnect();
  }, [u]), /* @__PURE__ */ t(
    Re,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !c,
      disableFocusListener: !c,
      disableTouchListener: !c,
      children: /* @__PURE__ */ t(
        ne,
        {
          ref: i,
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
}, Ui = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, Xi = 4, Ki = ({
  open: e,
  size: o = Bi
}) => e ? /* @__PURE__ */ t(Ps, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Ws, { sx: { fontSize: o, opacity: 0.75 } }), gn = ({ open: e }) => /* @__PURE__ */ t(
  Bs,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), fo = 600, ft = `${Co}px`, ji = 1.4, xo = (Gt - ae) / 2, Vi = (e) => {
  const o = Math.max(0, e - xo);
  return {
    pl: `${Math.max(0, xo - o)}px`,
    pr: `${Math.max(0, xo - e)}px`
  };
};
function Yi(e, o) {
  const [r, n] = d.useState(0);
  return d.useLayoutEffect(() => {
    const s = e.current;
    if (!o || !s) {
      n(0);
      return;
    }
    const i = () => {
      const a = getComputedStyle(s), u = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth);
      n(Math.max(0, s.offsetWidth - s.clientWidth - u));
    };
    if (i(), typeof ResizeObserver > "u")
      return;
    const c = new ResizeObserver(i);
    return c.observe(s), s.firstElementChild && c.observe(s.firstElementChild), () => c.disconnect();
  }, [e, o]), r;
}
const po = 8;
function qi(e, o, r) {
  d.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const s = (u) => {
      const l = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((g) => g.offsetHeight > 0).pop();
      if (!l)
        return;
      const x = n.getBoundingClientRect(), h = l.getBoundingClientRect();
      let p = 0;
      h.top < x.top + po ? p = h.top - x.top - po : h.bottom > x.bottom - po && (p = h.bottom - x.bottom + po), p !== 0 && n.scrollBy({ top: p, behavior: u });
    }, i = requestAnimationFrame(() => s("smooth")), c = window.setTimeout(() => s("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const ir = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: s,
  logo: i,
  title: c,
  onBrandClick: a,
  brandMenuOpen: u,
  showHeaderBar: l = !1,
  headerBackgroundColor: x,
  headerForegroundColor: h,
  brandColor: p,
  activeAccentColor: g = "#01584f",
  activeBackgroundColor: m,
  groupArrowColor: R,
  groupAccentColor: w,
  activeForegroundColor: T,
  foregroundColor: v,
  surfaceBackgroundColor: E,
  flyoutSurfaceColor: D,
  collapsed: y = !1,
  expandedWidth: I = Wi,
  collapsedWidth: b = Pi,
  showLabels: _ = !1,
  topInsetPx: M = 0,
  topContent: C,
  footer: O,
  submenuMode: N = "inline"
}) => {
  var to;
  const L = Xe(), B = L.palette.mode === "dark", j = d.useContext(Io), P = N === "flyout" && y && !_, U = Fi(P), se = d.useRef(null), Ae = d.useRef(null), fe = d.useRef(null);
  qi(fe, r, y);
  const pe = Yi(fe, P), Oe = bi(P, B, ((to = U.state) == null ? void 0 : to.key) ?? null), $e = rs(se, {
    enabled: P,
    axis: "y",
    itemSelector: ts,
    maxScale: ji,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: ae + Co,
    transition: `transform ${uo.duration}ms ${uo.easing}, background-color 160ms ease`
  }), Ke = {
    ...Oe.containerProps,
    ...$e.containerProps,
    ...P ? {
      onScrollCapture: () => {
        var f, k;
        (k = (f = Oe.containerProps).onScrollCapture) == null || k.call(f), $e.settle();
      }
    } : {}
  }, $ = m ?? g, G = yi({
    enabled: P,
    isDark: B,
    color: $,
    containerRef: Ae
  }), { close: Y } = U;
  d.useEffect(() => {
    Y();
  }, [r, Y]);
  const [Z, K] = d.useState(
    {}
  ), F = T ?? tr($), le = {
    bgcolor: $,
    color: F,
    "& .MuiListItemIcon-root": { color: F }
  }, he = {
    bgcolor: $,
    color: F,
    borderRadius: "8px"
  }, ie = w ?? Ht(g), Pe = E ?? (B ? L.palette.background.paper : "#ffffff"), de = v ?? (B ? "text.primary" : g), be = x ?? Pe, Be = h ?? (x ? tr(be) : v ?? (B ? L.palette.text.primary : g)), ve = Ht(Be), Me = (f) => {
    n == null || n(f);
  }, ue = (f) => f ? {
    component: "a",
    href: f,
    onClick: (k) => {
      wt(k) && (k.preventDefault(), Me(f));
    }
  } : {}, je = (f, k) => {
    K((H) => ({ ...H, [f]: !k }));
  }, at = (f, k) => Z[k] ?? rt(f, r), Ve = (f, k, H) => ({
    color: f ? F : de,
    bgcolor: f ? $ : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? F : de,
      minWidth: H
    },
    "&:hover": f || _ ? le : { bgcolor: k }
  }), ht = {
    "&.Mui-selected": {
      bgcolor: $
    },
    "&.Mui-selected:hover": le
  }, _t = (f) => {
    const k = Ge(f, r), H = /* @__PURE__ */ S(
      ao,
      {
        disabled: !f.path,
        selected: k,
        ...ue(f.path),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": k ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...f.action && { pr: 6 },
          ...f.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...Ve(
            k,
            ie,
            f.subtitle ? 48 : 36
          ),
          ...ht
        },
        children: [
          /* @__PURE__ */ t(we, { children: f.icon }),
          /* @__PURE__ */ t(
            Ue,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                ut,
                {
                  text: f.text,
                  fontWeight: fo
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ t(
                A,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    ut,
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
      return H;
    const { action: z } = f;
    return /* @__PURE__ */ S(A, { sx: { position: "relative" }, children: [
      H,
      /* @__PURE__ */ t(Re, { title: z.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        Ee,
        {
          "aria-label": z.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            z.onClick(), s == null || s();
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
            borderColor: k ? "rgba(255, 255, 255, 0.35)" : ie,
            color: k ? F : de,
            "&:hover": {
              bgcolor: k ? "rgba(255, 255, 255, 0.15)" : ie
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: k ? F : de,
              outlineOffset: 1
            }
          },
          children: z.icon
        }
      ) })
    ] }, f.text);
  }, $o = (f) => {
    const k = rt(f, r), H = Ge(f, r), z = yt("", f), X = at(f, z);
    return /* @__PURE__ */ S(
      A,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: k ? ie : "transparent"
        },
        children: [
          /* @__PURE__ */ S(
            ao,
            {
              onClick: () => je(z, X),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": H ? "true" : "false",
              "aria-expanded": X,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Ve(H, ie, 36)
              },
              children: [
                /* @__PURE__ */ t(we, { children: f.icon }),
                /* @__PURE__ */ t(
                  Ue,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      ut,
                      {
                        text: f.text,
                        fontWeight: fo
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(gn, { open: X })
              ]
            }
          ),
          /* @__PURE__ */ t(en, { in: X, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            A,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (Q) => qt(Q, z, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, qt = (f, k, H) => {
    const z = yt(k, f), X = Gi + (H - 1) * Hi;
    if (Et(f)) {
      const Ie = rt(f, r), J = Ge(f, r), Le = at(f, z);
      return /* @__PURE__ */ S(A, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ S(
          ao,
          {
            onClick: () => je(z, Le),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": Ie ? "true" : "false",
            "aria-expanded": Le,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: X,
              ...Ve(J, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(we, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                Ue,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    ut,
                    {
                      text: f.text,
                      fontWeight: fo
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(gn, { open: Le })
            ]
          }
        ),
        /* @__PURE__ */ t(en, { in: Le, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(A, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (_e) => qt(_e, z, H + 1)
        ) }) })
      ] }, z);
    }
    const Q = Ge(f, r);
    return /* @__PURE__ */ S(
      ao,
      {
        selected: Q,
        disabled: !f.path,
        ...ue(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": Q ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: X,
          ...Ve(Q, "action.hover", 32),
          ...ht
        },
        children: [
          f.icon ? /* @__PURE__ */ t(we, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            Ue,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                ut,
                {
                  text: f.text,
                  fontWeight: fo
                }
              )
            }
          )
        ]
      },
      z
    );
  }, Tt = (f, k, H, z, X, Q) => {
    const Ie = !X, J = /* @__PURE__ */ S(
      Ee,
      {
        "aria-label": k,
        disabled: Ie,
        ...ue(X),
        onMouseEnter: P ? U.onRailLeafEnter : void 0,
        ...P ? { [Kt]: "" } : {},
        "data-testid": (Q == null ? void 0 : Q.testId) ?? `sidebar-item-${k}`,
        "data-active": z ? "true" : "false",
        sx: _ ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: z ? F : de,
          bgcolor: z ? $ : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: mn
          },
          "&:hover": he,
          ...lo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: P ? ae : 44,
          height: P ? ae : 44,
          color: z ? F : de,
          bgcolor: z ? $ : "transparent",
          borderRadius: z ? "8px" : "50%",
          "&:hover": {
            bgcolor: z ? $ : Q != null && Q.insideGroup ? "action.hover" : ie,
            borderRadius: "8px"
          },
          ...lo,
          ...P ? et(z) : {}
        },
        children: [
          H,
          _ ? /* @__PURE__ */ t(
            ut,
            {
              text: k,
              variant: "caption",
              center: !0,
              fontSize: hn
            }
          ) : null
        ]
      }
    );
    return _ ? Ie ? /* @__PURE__ */ t("span", { children: J }, f) : /* @__PURE__ */ t(d.Fragment, { children: J }, f) : /* @__PURE__ */ t(
      Re,
      {
        title: k,
        placement: "right",
        arrow: !P,
        ...P ? Ct : {},
        children: Ie ? /* @__PURE__ */ t("span", { children: J }) : J
      },
      f
    );
  }, Mo = {
    position: "relative",
    '& :is(button, a, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer.
    // Not the flyout's backdrop: it is fixed over the whole window, and
    // made relative it collapses to nothing at the rail's foot.
    "& > :not([data-glass-lens], [data-active-glass], [data-flyout-scrim])": {
      position: "relative"
    }
  }, et = (f) => ({
    borderRadius: `${te}px`,
    "& .MuiSvgIcon-root": { fontSize: Ut },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${uo.duration}ms ${uo.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), Ct = {
    slotProps: {
      tooltip: { sx: To(B, j) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, Zt = (f) => {
    var X;
    const k = rt(f, r), H = yt("", f), z = ((X = U.state) == null ? void 0 : X.key) === H;
    return /* @__PURE__ */ t(
      A,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          Ee,
          {
            ...U.triggerProps(H),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": z,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": k ? "true" : "false",
            "data-open": z ? "true" : "false",
            [Kt]: "",
            sx: {
              position: "relative",
              width: ae,
              height: ae,
              color: k ? F : de,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: k ? $ : "transparent",
              ...et(k),
              // The icon stays centred, in line with every other
              // icon down the rail; the arrow sits in the room
              // beside it
              "&::after": {
                content: '""',
                position: "absolute",
                // Just past the button, in the rail's side gutter,
                // clear of the icon
                right: -Xi,
                top: "50%",
                transform: "translateY(-50%)",
                width: 5,
                height: 8,
                bgcolor: R ?? "currentColor",
                mask: `${Ui} center / contain no-repeat`,
                opacity: R ? 1 : 0.55,
                transition: "opacity 160ms ease"
              },
              // Pointed at, or its pages already out: the arrow has
              // said its piece
              '&:hover::after, &[data-open="true"]::after': {
                opacity: 0
              },
              ...lo
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, ct = (f) => {
    const k = rt(f, r), H = Ge(f, r), z = yt("", f), X = at(f, z), Q = /* @__PURE__ */ S(
      Ee,
      {
        "aria-label": f.text,
        "aria-expanded": X,
        onClick: () => je(z, X),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": H ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: _ ? 0.25 : 0,
          width: _ ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ..._ ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: H ? F : de,
          bgcolor: H ? $ : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": _ ? { bgcolor: $, color: F } : {
            bgcolor: H ? $ : "transparent"
          },
          ...lo
        },
        children: [
          _ ? /* @__PURE__ */ t(
            A,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: mn
                }
              },
              children: f.icon
            }
          ) : f.icon,
          _ ? /* @__PURE__ */ t(
            ut,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: hn
            }
          ) : null,
          /* @__PURE__ */ t(Ki, { open: X, size: zi })
        ]
      }
    ), Ie = _ ? Q : /* @__PURE__ */ t(Re, { title: f.text, placement: "right", arrow: !0, children: Q });
    return /* @__PURE__ */ S(
      A,
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
          bgcolor: k ? ie : "transparent",
          ..._ ? {} : { "&:hover": { bgcolor: ie } }
        },
        children: [
          Ie,
          X ? vr(f.subitems, f.icon).map(
            ({ sub: J, icon: Le }) => Tt(
              J.path,
              J.text,
              Le,
              Ge(J, r),
              J.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${J.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, At = (f) => /* @__PURE__ */ t(
    A,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Tt(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        Ge(f, r),
        f.path,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), Ot = (f) => Et(f) ? P ? Zt(f) : y ? ct(f) : $o(f) : y ? At(f) : _t(f), $t = (f) => /* @__PURE__ */ t(
    We,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: y ? "center" : "stretch"
      },
      children: f.map(
        (k, H) => k.dividerAfter && H < f.length - 1 ? /* @__PURE__ */ S(d.Fragment, { children: [
          Ot(k),
          /* @__PURE__ */ t(
            Qe,
            {
              "data-testid": `sidebar-divider-${k.text}`,
              sx: {
                alignSelf: "stretch",
                my: P ? ft : 1,
                borderColor: "divider"
              }
            }
          )
        ] }, k.text) : Ot(k)
      )
    }
  ), Jt = y ? b : I, mt = () => {
    var Ie, J;
    const { state: f } = U, k = f ? [...e, ...o].find(
      (Le) => Et(Le) && yt("", Le) === f.key
    ) ?? null : null, H = k ? ((Ie = se.current) == null ? void 0 : Ie.getBoundingClientRect().right) ?? b : b, z = k ? ((J = se.current) == null ? void 0 : J.closest("[data-rail-surface]")) ?? se.current : null, X = z == null ? void 0 : z.getBoundingClientRect(), Q = z && X ? {
      left: X.left,
      top: X.top,
      width: X.width,
      height: X.height,
      radius: parseFloat(
        getComputedStyle(z).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Mi,
      {
        group: k,
        groupKey: k ? f.key : null,
        anchor: k ? U.getTrigger(f.key) : null,
        railEdge: H,
        railShape: Q,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: Me,
        onClose: U.close,
        panelProps: U.flyoutProps,
        accentColor: g,
        activeBackgroundColor: m,
        activeForegroundColor: F,
        solidSurface: D ?? Pe
      }
    );
  }, Qt = l ? /* @__PURE__ */ t(
    A,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...P ? { pt: "12px", pb: "12px" } : {
          height: pn,
          minHeight: pn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: be
      },
      children: i || c ? /* @__PURE__ */ t(
        So,
        {
          logo: i,
          title: y ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: p ?? Be,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, eo = !l && i ? /* @__PURE__ */ t(
    A,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: P ? ft : 1
      },
      children: /* @__PURE__ */ t(
        So,
        {
          logo: i,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: p ?? Be,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, re = _ ? 0.5 : P ? 0.75 : y ? 1 : 1.5;
  return /* @__PURE__ */ t(It.Provider, { value: P, children: /* @__PURE__ */ S(
    A,
    {
      ref: se,
      ...Ke,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": y ? "true" : "false",
      "data-labeled": _ ? "true" : "false",
      sx: {
        width: Jt,
        minWidth: Jt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Pe,
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
        ...P ? Mo : {}
      },
      children: [
        Oe.lens,
        Qt ?? eo,
        C ? /* @__PURE__ */ t(
          A,
          {
            sx: {
              flexShrink: 0,
              px: re,
              pt: P ? 0 : 1,
              pb: P ? 0 : 1
            },
            children: C
          }
        ) : null,
        /* @__PURE__ */ t(
          A,
          {
            ref: fe,
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              // Scrollbar shows only while the pointer is inside (or a
              // keyboard user tabs in). Not :focus-within, since a
              // clicked link keeps focus and would pin it on.
              ...P ? {
                // Chrome lets `scrollbar-width`/`-color` override
                // the ::-webkit-scrollbar rules, and its `thin` is
                // 11px — too wide for the 52px rail. So only
                // browsers without those rules (Firefox) get them;
                // Chrome and Safari draw the 6px bar below.
                "@supports not selector(::-webkit-scrollbar)": {
                  scrollbarWidth: "thin",
                  scrollbarColor: "transparent transparent",
                  "&:hover, &:has(:focus-visible)": {
                    scrollbarColor: (f) => `${f.palette.divider} transparent`
                  }
                }
              } : {
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
                "&:hover, &:has(:focus-visible)": {
                  scrollbarColor: (f) => `${f.palette.divider} transparent`
                }
              },
              // Safari only honours the thumb rule once the bar
              // itself is styled.
              "&::-webkit-scrollbar": {
                width: P ? xo : 8
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: 4
              },
              "&:hover::-webkit-scrollbar-thumb, &:has(:focus-visible)::-webkit-scrollbar-thumb": {
                backgroundColor: (f) => f.palette.divider
              },
              // On the floating rail the bar (when it takes space at
              // all) stands in for the right padding, and the left
              // padding follows it, so the 44px column keeps equal
              // gaps in the capsule whether the bar is classic,
              // overlay or absent. (The inline collapsed rail keeps
              // its padding: its open groups tint the full row width.)
              ...P ? Vi(pe) : { px: re },
              pt: M && !l ? `${M}px` : P ? ft : 1,
              pb: P ? ft : 2
            },
            children: /* @__PURE__ */ S(
              A,
              {
                ref: Ae,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  G.glass,
                  $t(e),
                  o.length > 0 ? /* @__PURE__ */ S(
                    A,
                    {
                      sx: { mt: "auto", pt: P ? ft : 2 },
                      children: [
                        O ? null : /* @__PURE__ */ t(
                          Qe,
                          {
                            sx: {
                              mb: P ? ft : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        $t(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        O ? /* @__PURE__ */ t(
          A,
          {
            sx: {
              flexShrink: 0,
              px: re,
              pb: 1.5,
              ...P ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: Ut
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              A,
              {
                sx: {
                  borderTop: `1px solid ${ve}`,
                  pt: P ? ft : 1.5
                },
                children: O
              }
            )
          }
        ) : null,
        P ? mt() : null
      ]
    }
  ) });
}, ar = "var(--lumora-content-padding, 0px)", xn = `calc(${ar} * -1)`, nl = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: c
}) => /* @__PURE__ */ t(
  A,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: xn,
        mt: o ? xn : 0,
        // Space below it, like any other block on the page
        mb: ar,
        px: i ? ar : 0,
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
      ...Array.isArray(c) ? c : [c]
    ],
    children: e
  }
), Zi = ({ keys: e }) => /* @__PURE__ */ t(
  A,
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
), Te = {
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
}, Ce = {
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
}, xt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, bt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, vt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, cs = wo(), ke = cs.typography.pxToRem, Ar = (e) => {
  const o = e === "dark", r = [...cs.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? Te[300] : Te[200],
        main: Te[400],
        dark: Te[700],
        contrastText: Te[50]
      },
      info: o ? {
        light: Te[500],
        main: Te[700],
        dark: Te[900],
        contrastText: Te[300]
      } : {
        light: Te[100],
        main: Te[300],
        dark: Te[600],
        contrastText: Ce[50]
      },
      warning: o ? { light: bt[400], main: bt[500], dark: bt[700] } : { light: bt[300], main: bt[400], dark: bt[800] },
      error: o ? { light: vt[400], main: vt[500], dark: vt[700] } : { light: vt[300], main: vt[400], dark: vt[800] },
      success: o ? { light: xt[400], main: xt[500], dark: xt[700] } : { light: xt[300], main: xt[400], dark: xt[800] },
      grey: Ce,
      divider: o ? He(Ce[700], 0.6) : He(Ce[300], 0.4),
      background: o ? { default: Ce[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Ce[400] } : { primary: Ce[800], secondary: Ce[600] },
      action: o ? {
        hover: He(Ce[600], 0.2),
        selected: He(Ce[600], 0.3)
      } : {
        hover: He(Ce[200], 0.2),
        selected: He(Ce[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: ke(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: ke(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: ke(30), lineHeight: 1.2 },
      h4: { fontSize: ke(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: ke(20), fontWeight: 600 },
      h6: { fontSize: ke(18), fontWeight: 600 },
      subtitle1: { fontSize: ke(18) },
      subtitle2: { fontSize: ke(14), fontWeight: 500 },
      body1: { fontSize: ke(14) },
      body2: { fontSize: ke(14), fontWeight: 400 },
      caption: { fontSize: ke(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Ji = 6, Qi = 8, bn = (e, o) => typeof e == "object" ? e[o] : e, Vo = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: c = !0,
  contentPadding: a = Vn,
  sidebarBackgroundColor: u,
  contentBackgroundColor: l,
  content: x
}) => {
  const h = Fn(r.breakpoints.down("md")), p = e === "dark", g = qn({
    showSidebar: c,
    isMobile: h,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), m = Ao(s, n) ? {
    gutterPx: pt,
    radiusPx: jn
  } : void 0, R = go, w = Zn(
    bn(u, e),
    p
  ), T = Jn(
    bn(l, e),
    p
  ), v = Yn(a, r), E = m ? /* @__PURE__ */ S(Pt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t(Ne, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Pt,
      {
        alignItems: "center",
        spacing: `${Co}px`,
        sx: { mt: 2 },
        children: Array.from({ length: Qi }, (D, y) => /* @__PURE__ */ t(
          V,
          {
            sx: {
              width: ae,
              height: ae,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ t(
              Ne,
              {
                variant: "rounded",
                width: Ut,
                height: Ut
              }
            )
          },
          y
        ))
      }
    )
  ] }) : /* @__PURE__ */ S(Pt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(Ne, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(V, { sx: { height: 8 } }),
    Array.from({ length: Ji }, (D, y) => /* @__PURE__ */ t(Ne, { variant: "rounded", width: 28, height: 28 }, y))
  ] });
  return /* @__PURE__ */ t(yo, { theme: o, children: /* @__PURE__ */ S(
    V,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: T
      },
      children: [
        h && /* @__PURE__ */ S(
          V,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: R,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: w,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(Ne, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(Ne, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(V, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(Ne, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !h && g > 0 && /* @__PURE__ */ t(
          V,
          {
            sx: {
              position: "relative",
              width: g,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              V,
              {
                sx: m ? {
                  position: "fixed",
                  top: m.gutterPx,
                  bottom: m.gutterPx,
                  left: m.gutterPx,
                  width: g - 2 * m.gutterPx,
                  borderRadius: `${m.radiusPx}px`,
                  bgcolor: w
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: g,
                  bgcolor: w
                },
                children: E
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          V,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              // The variables the wrapper's <main> sets, so a host's `content`
              // that sizes itself from them measures as it will in the app
              "--lumora-content-padding": v,
              "--lumora-sticky-top": h ? `${R}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: h ? `${R}px` : 0
            },
            children: x ?? /* @__PURE__ */ S(Fe, { children: [
              /* @__PURE__ */ t(Ne, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(
                Ne,
                {
                  variant: "text",
                  width: 320,
                  sx: { mb: 3 }
                }
              ),
              /* @__PURE__ */ t(Pt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from(
                { length: h ? 2 : 4 },
                (D, y) => /* @__PURE__ */ t(
                  Ne,
                  {
                    variant: "rounded",
                    height: 96,
                    sx: { flex: 1 }
                  },
                  y
                )
              ) }),
              /* @__PURE__ */ t(Ne, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, cr = wo(Ar("light")), bo = wo(Ar("dark")), ea = (e) => e === "dark" ? bo : cr, ta = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = kn();
  if (!o) {
    const i = ea(e);
    return /* @__PURE__ */ S(yo, { theme: i, children: [
      /* @__PURE__ */ t(Qo, {}),
      /* @__PURE__ */ t(
        Vo,
        {
          themeMode: e,
          muiTheme: i,
          hostTheme: n,
          ...r
        }
      )
    ] });
  }
  const s = `${o} &`;
  return /* @__PURE__ */ S(yo, { theme: cr, children: [
    /* @__PURE__ */ t(Qo, {}),
    /* @__PURE__ */ t(
      Gs,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: bo.palette.background.default,
            color: bo.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(V, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ t(
      Vo,
      {
        themeMode: "light",
        muiTheme: cr,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(V, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Vo,
      {
        themeMode: "dark",
        muiTheme: bo,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class q extends Error {
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
}, Je = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, oa = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Je.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Je.REFRESH_TOKEN
      ), r = localStorage.getItem(Je.USER);
      e && !localStorage.getItem(ce.ACCESS_TOKEN) && localStorage.setItem(ce.ACCESS_TOKEN, e), o && !localStorage.getItem(ce.REFRESH_TOKEN) && localStorage.setItem(
        ce.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(ce.USER) && localStorage.setItem(ce.USER, r), (e || o || r) && (localStorage.removeItem(Je.ACCESS_TOKEN), localStorage.removeItem(Je.REFRESH_TOKEN), localStorage.removeItem(Je.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Yo = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new q(
        "localStorage is not available",
        ee.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new q(
      "Storage quota exceeded. Please clear browser data.",
      ee.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new q(
      "Access to localStorage is denied. Please check browser settings.",
      ee.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new q(
      "Failed to access storage",
      ee.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, qo = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new q(
        "localStorage is not available",
        ee.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new q(
      "Storage quota exceeded. Please clear browser data.",
      ee.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new q(
      "Access to localStorage is denied. Please check browser settings.",
      ee.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new q(
      "Failed to write to storage",
      ee.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, ls = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, jt = () => {
  try {
    oa();
    const e = Yo(ce.ACCESS_TOKEN), o = Yo(ce.REFRESH_TOKEN), r = Yo(ce.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), ls(ce.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof q ? e : new q(
      "Failed to retrieve authentication tokens",
      ee.UNKNOWN_ERROR,
      e
    );
  }
}, ra = () => {
  try {
    const { accessToken: e, refreshToken: o } = jt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new q(
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
      error: e instanceof q ? e : new q(
        "Authentication check failed",
        ee.UNKNOWN_ERROR,
        e
      )
    };
  }
}, ds = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new q(
        "At least one token must be provided",
        ee.TOKEN_INVALID
      );
    return e && qo(ce.ACCESS_TOKEN, e), o && qo(ce.REFRESH_TOKEN, o), r && qo(ce.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof q ? n : new q(
        "Failed to store tokens",
        ee.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Vt = () => {
  try {
    return [
      ce.ACCESS_TOKEN,
      ce.REFRESH_TOKEN,
      ce.USER,
      // Also clear legacy keys for complete cleanup
      Je.ACCESS_TOKEN,
      Je.REFRESH_TOKEN,
      Je.USER
    ].map((n) => ls(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof q ? e : new q(
        "Failed to clear tokens",
        ee.LOGOUT_FAILED,
        e
      )
    };
  }
}, na = () => {
  try {
    const { user: e } = jt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof q ? e : new q(
        "Failed to retrieve user data",
        ee.UNKNOWN_ERROR,
        e
      )
    };
  }
}, sl = (e) => {
  if (!(e instanceof q))
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
}, lr = (e, o = "Unknown") => {
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
}, sa = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = nn.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, s = [];
  const i = (c, a) => {
    s.forEach(({ resolve: u, reject: l }) => {
      c ? l(c) : a && u(a);
    }), s = [];
  };
  return o.interceptors.request.use(
    (c) => {
      const { accessToken: a } = jt();
      return a && c.headers && (c.headers.Authorization = `Bearer ${a}`), c;
    },
    (c) => Promise.reject(c)
  ), o.interceptors.response.use(
    (c) => c,
    async (c) => {
      var p;
      const a = c.config, u = (p = c.response) == null ? void 0 : p.status, l = (a == null ? void 0 : a.url) || "", x = l.includes("/auth/refresh");
      if (u !== 401 || a._retry || x)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: h } = jt();
      if (!h) {
        const g = new Error(
          "No refresh token available for token refresh"
        );
        return lr(g, "AxiosClient - Token Refresh"), Vt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((g, m) => {
          s.push({ resolve: g, reject: m });
        }).then((g) => {
          const {
            accessToken: m,
            refreshToken: R
          } = g;
          if (a.headers && (a.headers.Authorization = `Bearer ${m}`), l.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const w = JSON.parse(
                  a.data || "{}"
                );
                w.refresh_token = R, a.data = JSON.stringify(w);
              } else
                a.data && typeof a.data == "object" ? a.data.refresh_token = R : a.data = JSON.stringify({
                  refresh_token: R
                });
            } catch {
              a.data = JSON.stringify({
                refresh_token: R
              });
            }
          return o(a);
        }).catch((g) => Promise.reject(g));
      r = !0, n = nn.post(
        `${e}/auth/refresh`,
        {
          refresh_token: h
        }
      );
      try {
        const g = await n, { accessToken: m, refreshToken: R } = g.data;
        if (ds(m, R, null), i(null, {
          accessToken: m,
          refreshToken: R
        }), a.headers && (a.headers.Authorization = `Bearer ${m}`), l.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const w = JSON.parse(
                a.data || "{}"
              );
              w.refresh_token = R, a.data = JSON.stringify(w);
            } else
              a.data && typeof a.data == "object" ? a.data.refresh_token = R : a.data = JSON.stringify({
                refresh_token: R
              });
          } catch {
            a.data = JSON.stringify({
              refresh_token: R
            });
          }
        return o(a);
      } catch (g) {
        return lr(
          g,
          "AxiosClient - Token Refresh Failed"
        ), i(g), Vt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(g);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, ia = async (e, o) => {
  const { accessToken: r, refreshToken: n } = jt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return ds(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      lr(s, "TokenValidator - Refresh Failed");
    }
  return Vt(), o ? o() : window.location.href = "/login", !1;
}, zt = ({ size: e = 20 }) => /* @__PURE__ */ S(
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
), vn = xe(Ir), Ze = "#09C1AE", vo = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ze} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), aa = (e) => ({
  ...vo(te, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${te - 2}px`,
    zIndex: 1,
    background: `${Eo(Ze, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), yn = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = Tr(), u = d.useContext(It), l = Xe().palette.mode === "dark", x = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", h = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ S(
    it,
    {
      ...h,
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
        borderColor: r ? Ze : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: i,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Ze}`,
          outlineOffset: 2
        },
        ...n && vo(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(zt, { size: 20 }),
        /* @__PURE__ */ t(
          ne,
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
        s && /* @__PURE__ */ t(Zi, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && u && er ? /* @__PURE__ */ t(Re, { title: x, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    Ee,
    {
      ...h,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: ae,
        height: ae,
        borderRadius: `${te}px`,
        ...Eo(Ze, l, "clear"),
        ...r && {
          boxShadow: `${Eo(Ze, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${vn.duration}ms ${vn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [ge]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && aa(l)
      },
      children: /* @__PURE__ */ t(zt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Re, { title: x, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    Ee,
    {
      ...h,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": u || void 0,
      sx: {
        width: u ? ae : 44,
        height: u ? ae : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Ze : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && vo(8, "background.paper")
      },
      children: /* @__PURE__ */ t(zt, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ t(Re, { title: x, placement: "left", children: /* @__PURE__ */ t(
    Ee,
    {
      ...h,
      disableFocusRipple: !0,
      "data-variant": "floating",
      sx: {
        position: "fixed",
        right: 24 + c,
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
        outline: r ? `2px solid ${Ze}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Ze}` },
        ...n && vo(16, "background.paper")
      },
      children: /* @__PURE__ */ t(A, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(zt, { size: 26 }) })
    }
  ) });
}, ho = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(Us, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ S(Xs, { children: [
  /* @__PURE__ */ t(Ks, { fontSize: "small" }),
  /* @__PURE__ */ t(ne, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ne,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    Wn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Ft = 24, ca = 720, la = 1140, da = 1250, ua = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: s,
  sidebarWidthPx: i,
  bottomOffsetPx: c,
  fullScreen: a,
  fullScreenBottom: u = "0px",
  onClose: l
}) => {
  const x = d.useRef(!1);
  d.useEffect(() => {
    const R = requestAnimationFrame(() => {
      x.current = !0;
    });
    return () => cancelAnimationFrame(R);
  }, []), d.useEffect(() => {
    if (!e || !l)
      return;
    const R = (w) => {
      w.key === "Escape" && l();
    };
    return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [e, l]);
  const h = r === "docked", p = Ft + c;
  let g;
  a ? g = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : h ? g = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : g = {
    bottom: p,
    ...n === "left" ? { left: i + Ft } : { right: Ft },
    width: s,
    maxWidth: `calc(100vw - ${Ft * 2}px)`,
    height: `min(${ca}px, calc(100vh - ${p + Ft}px))`,
    borderRadius: "12px"
  };
  const m = /* @__PURE__ */ t(
    mr,
    {
      role: h ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: h ? la : da,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...g
      },
      children: o
    }
  );
  return h ? /* @__PURE__ */ t(
    Vs,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...x.current ? {} : { timeout: { enter: 0 } },
      children: m
    }
  ) : /* @__PURE__ */ t(
    js,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: m
    }
  );
}, fa = 180, Sn = 250, pa = "#01584F", ha = ({
  text: e,
  testId: o
}) => {
  const r = d.useRef(null), [n, s] = d.useState(!1), i = d.useCallback(() => {
    const c = r.current;
    c && s(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    i();
  }, [i, e]), d.useEffect(() => {
    const c = r.current;
    if (!c)
      return;
    const a = new ResizeObserver(() => i());
    return a.observe(c), () => a.disconnect();
  }, [i]), /* @__PURE__ */ t(
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
        ne,
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
}, us = (e, o, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : o, c = e ? pa : o;
  return { activeBg: c, sx: n ? {
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
    color: r ? "#ffffff" : i,
    backgroundColor: r ? c : "transparent",
    "&:hover": {
      backgroundColor: r ? c : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : i
    }
  } : {
    width: s,
    height: s,
    color: r ? "#ffffff" : i,
    backgroundColor: r ? c : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? c : "action.hover",
      borderRadius: "4px"
    }
  } };
}, fs = ({ link: e }) => /* @__PURE__ */ S(We, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ t(
    A,
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
    ha,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), ps = (e, o, r) => r ? e : /* @__PURE__ */ t(Re, { title: o, placement: "right", arrow: !0, children: e }), ma = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: c
}) => {
  const a = Xe(), [u, l] = d.useState(null), [x, h] = d.useState(!1), p = d.useRef(
    null
  ), g = d.useRef(null), m = d.useRef(null), R = d.useRef(!1), w = d.useRef(!1), T = d.useId(), v = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, E = () => {
    v(), p.current = setTimeout(() => {
      h(!1), p.current = null;
    }, fa);
  }, D = () => {
    v(), h(!0);
  };
  d.useEffect(() => {
    if (!x)
      return;
    const C = (O) => {
      var N;
      O.key === "Escape" && (h(!1), (N = m.current) == null || N.focus());
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [x]), d.useEffect(() => {
    if (!x || !w.current)
      return;
    const C = globalThis.requestAnimationFrame(() => {
      var N;
      const O = (N = g.current) == null ? void 0 : N.querySelector(
        '[role="menuitem"]'
      );
      O == null || O.focus(), w.current = !1;
    });
    return () => cancelAnimationFrame(C);
  }, [x]);
  const y = rt(e, o), { activeBg: I, sx: b } = us(
    s,
    n,
    y,
    c
  ), _ = /* @__PURE__ */ t(
    Ee,
    {
      ref: m,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        R.current || D();
      },
      onBlur: (C) => {
        var N;
        const O = C.relatedTarget;
        O && ((N = g.current) != null && N.contains(O)) || E();
      },
      onKeyDown: (C) => {
        C.key === "ArrowDown" && (C.preventDefault(), w.current = !0, D());
      },
      onClick: (C) => {
        C.stopPropagation(), !(e.path && !wt(C)) && (C.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": x,
      "aria-controls": x ? T : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: b,
      children: c ? /* @__PURE__ */ t(fs, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ S(
    A,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          A,
          {
            ref: l,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              R.current = !0, D();
            },
            onMouseLeave: () => {
              R.current = !1, E();
            },
            children: ps(_, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          hr,
          {
            open: x && !!u,
            anchorEl: u,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (C) => C.zIndex.modal },
            children: /* @__PURE__ */ t(
              mr,
              {
                ref: g,
                elevation: 0,
                onMouseEnter: v,
                onMouseLeave: E,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: i,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: Sn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  gr,
                  {
                    id: T,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Sn
                    },
                    children: M(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function M(C, O, N) {
    return C.flatMap((L) => {
      const B = yt(O, L);
      return Et(L) ? [
        /* @__PURE__ */ t(
          Ys,
          {
            disableSticky: !0,
            title: L.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + N * 1.5,
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
          B
        ),
        ...M(L.subitems, B, N + 1)
      ] : [
        /* @__PURE__ */ S(
          st,
          {
            role: "menuitem",
            title: L.text,
            disabled: !L.path,
            selected: Ge(L, o),
            ...L.path && { component: "a", href: L.path },
            onClick: (j) => {
              L.path && !wt(j) || (j.preventDefault(), L.path && (r == null || r(L.path)), h(!1));
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + N * 1.5,
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
              L.icon ? /* @__PURE__ */ t(we, { children: L.icon }) : null,
              /* @__PURE__ */ t(
                Ue,
                {
                  primary: L.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          B
        )
      ];
    });
  }
}, ga = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = us(
    s,
    n,
    c,
    i
  );
  return ps(
    /* @__PURE__ */ t(
      Ee,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !wt(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: a,
        children: i ? /* @__PURE__ */ t(fs, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, xa = () => /* @__PURE__ */ t(
  A,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Qe, { sx: { width: "60%", borderColor: "divider" } })
  }
), ba = () => /* @__PURE__ */ t(
  A,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Qe, { sx: { width: "60%", borderColor: "divider" } })
  }
), En = (e, o) => e.map((r, n) => /* @__PURE__ */ S(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(xa, {}) : null
] }, n)), va = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: c = !1
}) => {
  const a = (l, x) => Et(l) ? /* @__PURE__ */ t(
    ma,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: x,
      surfaceBackgroundColor: i,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    ga,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: x,
      railShowTitles: c
    }
  ), u = c ? 1.25 : 1;
  return /* @__PURE__ */ S(
    We,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: u
      },
      children: [
        En(e, (l) => a(l, !1)),
        o.length > 0 ? /* @__PURE__ */ S(Fe, { children: [
          /* @__PURE__ */ t(ba, {}),
          /* @__PURE__ */ t(A, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(We, { gap: u, alignItems: "center", children: En(
            o,
            (l) => a(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, ya = (e) => e ? Hn(e) : "USER", Sa = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), wn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, dr = ({ count: e }) => e ? /* @__PURE__ */ t(
  A,
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
) : null, Or = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Zs,
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
    children: Sa(e)
  }
), hs = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ S(Fe, { children: [
  /* @__PURE__ */ t(Or, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ S(
    A,
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
          ne,
          {
            variant: "body2",
            sx: { ...wn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ne,
          {
            variant: "caption",
            sx: { ...wn, opacity: 0.8, color: "inherit" },
            children: ya(o)
          }
        )
      ]
    }
  )
] }), Rn = {
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
}, ms = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: s,
  showNotifications: i,
  notificationCount: c,
  onNotificationsClick: a,
  userName: u = "User",
  userRole: l,
  userAvatar: x,
  menuItems: h = [],
  showSettings: p,
  onSettingsClick: g,
  showThemeToggler: m,
  theme: R,
  onThemeToggle: w,
  onLogout: T
}) => {
  const v = (E) => () => {
    o(), E == null || E();
  };
  return /* @__PURE__ */ S(
    Js,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: Rn[r].anchor,
      transformOrigin: Rn[r].transform,
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
          We,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              hs,
              {
                name: u,
                role: l,
                avatar: x,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Qe, {}),
        i && /* @__PURE__ */ S(st, { onClick: v(a), children: [
          /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(zn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Ue, { children: "Notifications" }),
          /* @__PURE__ */ t(dr, { count: c })
        ] }),
        h.map((E) => /* @__PURE__ */ S(st, { onClick: v(E.onClick), children: [
          E.icon && /* @__PURE__ */ t(we, { children: E.icon }),
          /* @__PURE__ */ t(Ue, { inset: !E.icon, children: E.label }),
          /* @__PURE__ */ t(dr, { count: E.badge })
        ] }, E.key)),
        p && /* @__PURE__ */ S(st, { onClick: v(g), children: [
          /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(qs, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Ue, { children: "Settings" })
        ] }),
        m && [
          /* @__PURE__ */ t(Qe, {}, "theme-divider"),
          /* @__PURE__ */ S(A, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              ne,
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
              Qs,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: R,
                onChange: (E, D) => D && D !== R && (w == null ? void 0 : w()),
                disabled: !w,
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
                  /* @__PURE__ */ t(sn, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(sn, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Qe, {}),
        /* @__PURE__ */ S(
          st,
          {
            onClick: v(T),
            sx: {
              color: R === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(we, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Bn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Ue, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, gs = 64, Ea = 2, Wt = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: s,
  activeColor: i,
  activeBackground: c,
  ariaLabel: a,
  haspopup: u,
  isPage: l = !1,
  href: x,
  testId: h
}) => /* @__PURE__ */ S(
  it,
  {
    ...x && { component: "a", href: x },
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": u,
    "aria-expanded": u ? n : void 0,
    "aria-current": l && n ? "page" : void 0,
    "data-testid": h,
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
        A,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 28,
            minWidth: 48,
            borderRadius: "14px",
            bgcolor: n ? c : "transparent",
            transition: "background-color 150ms"
          },
          children: o
        }
      ),
      /* @__PURE__ */ t(
        ne,
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
), wa = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: i,
  assistantActive: c,
  showProfile: a,
  background: u,
  color: l,
  activeColor: x,
  activeBackground: h,
  pinnedLinks: p = [],
  activePath: g,
  onLinkClick: m,
  ...R
}) => {
  const w = p.filter((b) => b.path).slice(0, Ea), [T, v] = d.useState(
    null
  ), { userName: E = "User", userAvatar: D, avatarColor: y } = R, I = { color: l, activeColor: x, activeBackground: h };
  return /* @__PURE__ */ S(
    mr,
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
        height: `calc(${gs}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: u,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Wt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Pn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...I
          }
        ),
        w.map((b) => /* @__PURE__ */ t(
          Wt,
          {
            label: b.text,
            icon: b.icon,
            href: b.path,
            onClick: (_) => {
              wt(_) && (_.preventDefault(), m == null || m(b.path));
            },
            active: rt(b, g),
            isPage: !0,
            testId: `mobile-nav-link-${b.text}`,
            ...I
          },
          b.path
        )),
        s && /* @__PURE__ */ t(
          Wt,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ t(
              A,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 28,
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: c ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(zt, { size: 18 })
              }
            ),
            onClick: i,
            active: c,
            testId: "mobile-nav-nexa",
            ...I
          }
        ),
        r && /* @__PURE__ */ t(
          Wt,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(xr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...I
          }
        ),
        a && /* @__PURE__ */ S(Fe, { children: [
          /* @__PURE__ */ t(
            Wt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${E}`,
              icon: /* @__PURE__ */ t(
                Or,
                {
                  name: E,
                  avatar: D,
                  color: y,
                  size: 26
                }
              ),
              onClick: (b) => v(b.currentTarget),
              active: !!T,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...I
            }
          ),
          /* @__PURE__ */ t(
            ms,
            {
              anchorEl: T,
              onClose: () => v(null),
              placement: "above-end",
              width: 280,
              ...R
            }
          )
        ] })
      ]
    }
  );
}, Ra = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  ei,
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
    children: /* @__PURE__ */ S(
      We,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(A, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Wn,
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
), Ia = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: s,
  brandMenuOpen: i,
  background: c,
  color: a,
  brandColor: u = a,
  endContent: l
}) => /* @__PURE__ */ t(
  ti,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: e,
      background: c,
      color: a,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ S(oi, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        Ee,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(Pn, {})
        }
      ),
      /* @__PURE__ */ t(
        So,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: s,
          menuOpen: i,
          color: u,
          testId: "mobile-brand"
        }
      ),
      l ? /* @__PURE__ */ t(A, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: l }) : null
    ] })
  }
), xs = d.createContext(void 0), $r = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const c = Tr(), a = d.useContext(xs), u = d.useContext(It), l = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Re,
    {
      title: l,
      placement: s,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        Ee,
        {
          onClick: o,
          "aria-label": l,
          "data-testid": i,
          sx: {
            ...u ? {
              width: ae,
              height: ae
            } : {},
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
            Gn,
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
              children: a ?? /* @__PURE__ */ t(zn, {})
            }
          )
        }
      )
    }
  );
}, In = 14, _a = 18, Ta = "blur(12px) saturate(180%) brightness(1.04)", Ca = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Aa = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, Oa = 140, _n = 0.22, $a = 0.14, Ma = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var g;
      const p = e.current;
      p && (p.style.setProperty("--lx", `${i.x.toFixed(1)}px`), p.style.setProperty("--ly", `${i.y.toFixed(1)}px`), p.style.setProperty("--li", i.i.toFixed(3)), (g = n.current) == null || g.call(n, i.x, i.y, i.i));
    }, u = () => {
      i.x += (s.x - i.x) * _n, i.y += (s.y - i.y) * _n, i.i += (s.i - i.i) * $a;
      const p = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      p && (i.x = s.x, i.y = s.y, i.i = s.i), a(), c = p ? 0 : requestAnimationFrame(u);
    }, l = () => {
      c || (c = requestAnimationFrame(u));
    }, x = (p) => {
      const g = e.current;
      if (p.pointerType === "touch" || !g)
        return;
      const m = g.getBoundingClientRect();
      if (!m.width || !m.height)
        return;
      s.x = (p.clientX - m.left) * g.offsetWidth / m.width, s.y = (p.clientY - m.top) * g.offsetHeight / m.height;
      const R = Math.max(
        m.left - p.clientX,
        0,
        p.clientX - m.right
      ), w = Math.max(
        m.top - p.clientY,
        0,
        p.clientY - m.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(R, w) / Oa), i.i < 0.01 && (i.x = s.x, i.y = s.y), l();
    }, h = () => {
      s.i = 0, l();
    };
    return document.addEventListener("pointermove", x, { passive: !0 }), document.documentElement.addEventListener("mouseleave", h), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", x), document.documentElement.removeEventListener("mouseleave", h);
    };
  }, [e, o]);
}, Yt = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: c
  }, a) => {
    const u = d.useRef(null), l = s && er;
    Ma(u, i && er, c);
    const x = _o(), h = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [p, g] = d.useState(null), m = d.useRef(null), R = d.useCallback(
      (v) => {
        var D;
        if (u.current = v, typeof a == "function" ? a(v) : a && (a.current = v), (D = m.current) == null || D.disconnect(), m.current = null, !v || !l || !Ca || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const y = v.offsetWidth, I = v.offsetHeight;
          g(
            (b) => (b == null ? void 0 : b.width) === y && b.height === I ? b : y && I ? { width: y, height: I } : null
          );
        };
        m.current = new ResizeObserver(E), m.current.observe(v), E();
      },
      [a, l]
    ), w = d.useMemo(
      () => p ? Aa(p.width, p.height, In) : null,
      [p]
    ), T = l && !!(w && p);
    return /* @__PURE__ */ S(Fe, { children: [
      T ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ S(
            "filter",
            {
              id: h,
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
                    href: w,
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
                    stdDeviation: In / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: _a,
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
        A,
        {
          ref: R,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": T ? "true" : void 0,
          sx: [
            li(e, o, x),
            T ? {
              backdropFilter: `url(#${h}) ${Ta}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
Yt.displayName = "GlassLayer";
const bs = {
  "&:focus, &:focus-visible": { outline: "none" }
}, La = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Tn = xe(es), Cn = xe(Oo), An = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Da = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = Xe().palette.mode === "dark", c = _o(), a = d.useRef(null), u = d.useRef(null), l = (p) => {
    var g;
    p !== e && (o == null || o()), (g = (p === "light" ? a : u).current) == null || g.focus();
  }, x = (p) => {
    if (!(p.key === "Tab" || p.key === "Escape"))
      switch (p.stopPropagation(), p.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          p.preventDefault(), l(e === "light" ? "dark" : "light");
          break;
        case "Home":
          p.preventDefault(), l("light");
          break;
        case "End":
          p.preventDefault(), l("dark");
          break;
      }
  }, h = (p, g, m, R) => {
    const w = e === p;
    return /* @__PURE__ */ t(
      it,
      {
        ref: R,
        role: "radio",
        "aria-checked": w,
        "aria-label": g,
        tabIndex: w ? 0 : -1,
        onClick: () => l(p),
        "data-testid": `theme-segment-${p}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${te}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: w ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: w ? n : "transparent",
          ...s && w ? Xn(i, c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": w ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: i ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${He(r, 0.6)}`
          },
          ...bs
        },
        children: /* @__PURE__ */ t(m, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ S(
    We,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: x,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${te}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        h("light", "Light", ni, a),
        h("dark", "Dark", ri, u)
      ]
    }
  );
}, Na = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: s,
  userName: i,
  userEmail: c,
  roleLabel: a,
  accentColor: u,
  tint: l,
  showThemeToggler: x,
  theme: h,
  onThemeToggle: p,
  onProfileClick: g,
  onLinkClick: m,
  menuItems: R = [],
  onLogout: w,
  glass: T = !1
}) => {
  const v = Xe(), E = v.palette.mode === "dark", D = d.useRef(null), y = Er(v.palette.background.paper), I = Cr({
    enabled: T,
    isDark: E,
    selector: An,
    radius: te
  }), [b, _] = d.useState(null);
  d.useEffect(() => {
    if (!b || typeof ResizeObserver > "u")
      return;
    const L = new ResizeObserver(() => {
      var B;
      (B = D.current) == null || B.updatePosition();
    });
    return L.observe(b), () => L.disconnect();
  }, [b]);
  const M = (L) => {
    r(), L == null || L();
  }, C = (L) => {
    r(), L.onClick ? L.onClick() : L.path && (m == null || m(L.path));
  }, O = {
    borderRadius: T ? `${te}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, N = /* @__PURE__ */ S(We, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ S(A, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ne, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: i }),
      c ? /* @__PURE__ */ t(
        ne,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary", fontSize: 12, lineHeight: "18px" },
          children: c
        }
      ) : null,
      a ? /* @__PURE__ */ t(
        ne,
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
      g ? /* @__PURE__ */ t(
        ne,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: E ? "#ffffff" : u,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    br,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: D,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...T ? {
        slots: { transition: pr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: _,
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
        A,
        {
          "data-testid": "account-menu",
          "data-glass": T ? "true" : void 0,
          sx: T ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${te}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${An}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...La, width: n, minWidth: n },
          children: [
            T ? /* @__PURE__ */ t(
              Yt,
              {
                isDark: E,
                solid: y,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${wr} ${Tn.duration}ms ${Tn.easing} both`,
                  [ge]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ S(
              A,
              {
                ...I.containerProps,
                sx: T ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Rr} ${Cn.duration}ms ${Cn.easing} 70ms both`,
                  [ge]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  I.lens,
                  g ? /* @__PURE__ */ t(
                    it,
                    {
                      onClick: () => M(g),
                      "data-testid": "account-menu-header",
                      sx: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        transition: "background-color 150ms ease",
                        "& [data-hint]": { display: "none" },
                        "&:hover, &.Mui-focusVisible": {
                          bgcolor: l,
                          "& [data-hint]": { display: "block" },
                          "& [data-role]": { display: "none" }
                        },
                        ...bs
                      },
                      children: N
                    }
                  ) : /* @__PURE__ */ t(A, { "data-testid": "account-menu-header", children: N }),
                  /* @__PURE__ */ t(Qe, {}),
                  x ? /* @__PURE__ */ S(
                    A,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...O,
                        // Paints above the glass lens resting behind it
                        position: "relative",
                        mx: 0.5,
                        mt: 0.5,
                        px: 1.5,
                        // The 32px pill is taller than a text line; trim the
                        // vertical padding so the row is 40px like the rows
                        // with a count pill, not 48px.
                        py: 0.5,
                        display: "flex",
                        alignItems: "center",
                        // Icon column as wide as a MenuItem's.
                        "& .MuiListItemIcon-root": { minWidth: 32 }
                      },
                      children: [
                        /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(si, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ne, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Da,
                          {
                            glass: T,
                            mode: h,
                            onToggle: p,
                            accentColor: u,
                            tint: l
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ S(
                    gr,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: x ? 0 : 0.5, pb: 0.5 },
                      children: [
                        R.map((L) => /* @__PURE__ */ S(
                          st,
                          {
                            onClick: () => C(L),
                            "data-testid": `menu-item-${L.key}`,
                            sx: O,
                            children: [
                              /* @__PURE__ */ t(we, { children: L.icon }),
                              /* @__PURE__ */ t(ne, { sx: { flex: 1 }, children: L.label }),
                              /* @__PURE__ */ t(dr, { count: L.badge })
                            ]
                          },
                          L.key
                        )),
                        w ? /* @__PURE__ */ t(Qe, { component: "li", sx: { my: 0.5 } }) : null,
                        w ? /* @__PURE__ */ S(
                          st,
                          {
                            onClick: () => M(w),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...O,
                              color: E ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(we, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Bn, { fontSize: "small" }) }),
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
}, ka = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Fa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: s,
  title: i,
  onBrandClick: c,
  brandMenuOpen: a,
  brandColor: u,
  headerBackgroundColor: l,
  headerForegroundColor: x,
  activeAccentColor: h = "#01584f",
  activeBackgroundColor: p,
  groupArrowColor: g,
  groupAccentColor: m,
  activeForegroundColor: R,
  foregroundColor: w,
  surfaceBackgroundColor: T,
  flyoutSurfaceColor: v,
  collapsed: E,
  expandedWidth: D,
  collapsedWidth: y,
  topContent: I,
  submenuMode: b,
  color: _,
  hoverColor: M,
  avatarColor: C,
  showProfile: O = !0,
  userName: N = "User",
  userEmail: L,
  userRole: B,
  userAvatar: j,
  showNotifications: P = !0,
  notificationCount: U = 0,
  onNotificationsClick: se,
  whatsNewCount: Ae = 0,
  onProfileClick: fe,
  menuItems: pe,
  onLogout: Oe,
  theme: $e = "light",
  showThemeToggler: Ke = !0,
  onThemeToggle: $
}) => {
  const G = Xe(), Y = G.palette.mode === "dark", Z = T ?? (Y ? G.palette.background.paper : "#ffffff"), K = _ ?? w ?? (Y ? G.palette.text.primary : h), F = M ?? m ?? Ht(h), le = C ?? h, he = d.useRef(null), [ie, Pe] = d.useState(!1), de = B ? Hn(B) : void 0, be = (Ve) => /* @__PURE__ */ t(
    Or,
    {
      name: N,
      avatar: j,
      color: le,
      size: Ve
    }
  ), Be = U + Ae, ve = E && b === "flyout", Me = P ? /* @__PURE__ */ t(
    $r,
    {
      count: Be,
      onClick: se,
      color: K,
      hoverColor: F,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, ue = O ? /* @__PURE__ */ S(
    it,
    {
      ref: he,
      onClick: () => Pe(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ie,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: E ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        p: ve ? "4px" : 0.75,
        borderRadius: "10px",
        bgcolor: ie ? F : "transparent",
        "&:hover": { bgcolor: F },
        ...ka
      },
      children: [
        E && !ve && P ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Gn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Be,
              children: be(36)
            }
          )
        ) : be(E ? 36 : 40),
        E ? null : /* @__PURE__ */ S(A, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ne,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: K, lineHeight: 1.3 },
              children: N
            }
          ),
          de ? /* @__PURE__ */ t(
            ne,
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
  ) : null, je = !!Me && (!E || ve || !ue);
  return /* @__PURE__ */ S(
    A,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": E ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          ir,
          {
            mainLinks: e,
            secondaryLinks: o,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: s,
            title: i,
            onBrandClick: c,
            brandMenuOpen: a,
            brandColor: u,
            headerBackgroundColor: l,
            headerForegroundColor: x,
            activeAccentColor: h,
            activeBackgroundColor: p,
            groupArrowColor: g,
            groupAccentColor: m,
            activeForegroundColor: R,
            foregroundColor: w,
            surfaceBackgroundColor: Z,
            flyoutSurfaceColor: v,
            collapsed: E,
            expandedWidth: D,
            collapsedWidth: y,
            topContent: I,
            footer: ue || je ? /* @__PURE__ */ S(
              We,
              {
                direction: ve ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  ve && je ? Me : null,
                  ue,
                  !ve && je ? Me : null
                ]
              }
            ) : void 0,
            submenuMode: b
          }
        ),
        O ? /* @__PURE__ */ t(
          Na,
          {
            open: ie,
            anchorEl: he.current,
            onClose: () => Pe(!1),
            width: Math.max(D - 16, 240),
            renderAvatar: be,
            userName: N,
            userEmail: L,
            roleLabel: de,
            accentColor: h,
            tint: F,
            showThemeToggler: Ke,
            theme: $e,
            onThemeToggle: $,
            onProfileClick: fe,
            onLinkClick: n,
            menuItems: pe,
            onLogout: Oe,
            glass: b === "flyout"
          }
        ) : null
      ]
    }
  );
}, On = xe(es), $n = xe(Oo), Mn = 240, Wa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Pa = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: c = !1
}) => {
  const a = Xe(), u = a.palette.mode === "dark", l = !!e, x = Er(a.palette.background.paper), h = Cr({
    enabled: c,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: te
  }), p = /* @__PURE__ */ t(
    gr,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((g) => {
        const m = g.key === n, R = g.accentColor ?? i;
        return /* @__PURE__ */ S(
          st,
          {
            selected: m,
            onClick: () => s(g),
            "data-testid": `platform-item-${g.key}`,
            sx: {
              borderRadius: c ? `${te}px` : "8px",
              // Compact: 14px name over a 12px description.
              py: 0.75,
              px: 1.5,
              minHeight: 0,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...c && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(we, { sx: { minWidth: 24 }, children: /* @__PURE__ */ t(
                A,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: R,
                    boxShadow: c ? `0 0 0 3px ${u ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Ue,
                {
                  primary: g.name,
                  secondary: g.description,
                  sx: { my: 0 },
                  slotProps: {
                    primary: {
                      sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }
                    },
                    secondary: { sx: { fontSize: 12, lineHeight: "18px" } }
                  }
                }
              ),
              m ? /* @__PURE__ */ t(
                ii,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: R }
                }
              ) : null
            ]
          },
          g.key
        );
      })
    }
  );
  return /* @__PURE__ */ t(
    br,
    {
      open: l,
      anchorEl: e,
      onClose: o,
      onClick: (g) => g.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: pr },
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
        A,
        {
          "data-testid": "platform-menu",
          "data-glass": c ? "true" : void 0,
          sx: c ? {
            position: "relative",
            minWidth: Mn,
            borderRadius: `${te}px`
          } : { ...Wa, minWidth: Mn },
          children: c ? /* @__PURE__ */ S(Fe, { children: [
            /* @__PURE__ */ t(
              Yt,
              {
                isDark: u,
                solid: x,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${wr} ${On.duration}ms ${On.easing} both`,
                  [ge]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ S(
              A,
              {
                ...h.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Rr} ${$n.duration}ms ${$n.easing} 70ms both`,
                  [ge]: { animation: "none" }
                },
                children: [
                  h.lens,
                  p
                ]
              }
            )
          ] }) : p
        }
      )
    }
  );
}, Ba = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), s = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ S(
    A,
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
          Pa,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, za = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var D;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: u,
    onNotificationsClick: l,
    userName: x = "User",
    userRole: h,
    userAvatar: p
  } = i, g = d.useRef(null), [m, R] = d.useState(
    null
  ), w = !!m, T = d.useRef(e);
  d.useEffect(() => {
    e && !T.current && R(null), T.current = e;
  }, [e]);
  const v = d.useContext(It);
  if (!a && !n)
    return null;
  const E = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ S(Fe, { children: [
    /* @__PURE__ */ S(
      We,
      {
        ref: g,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Re,
            {
              title: e ? x : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                it,
                {
                  onClick: () => R(g.current),
                  "aria-label": `Account menu for ${x}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": w,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? v ? "4px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: w ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...E
                  },
                  children: /* @__PURE__ */ t(
                    hs,
                    {
                      name: x,
                      role: h,
                      avatar: p,
                      avatarColor: c,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          a && /* @__PURE__ */ t(
            $r,
            {
              count: u + s,
              onClick: l,
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
      ms,
      {
        anchorEl: m,
        onClose: () => R(null),
        placement: e ? "beside" : "above",
        width: e || (D = g.current) == null ? void 0 : D.clientWidth,
        ...i
      }
    )
  ] });
}, Ga = 120, Ha = 300, Ln = xe(Qn), Dn = xe(Oo), Ua = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Xa = 'input, textarea, [contenteditable="true"]', ur = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Xa)) == null || o.focus();
}, Ka = ({
  search: e,
  icon: o,
  mode: r,
  onExpand: n,
  autoFocus: s = !1,
  onAutoFocused: i,
  color: c,
  hoverColor: a
}) => {
  const u = Tr(), l = d.useContext(It), x = d.useRef(null), [h, p] = d.useState(null);
  return d.useEffect(() => {
    r === "full" && s && (ur(x.current), i == null || i());
  }, [r, s, i]), r === "full" ? /* @__PURE__ */ t(
    A,
    {
      ref: x,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : r === "popover" && l ? /* @__PURE__ */ t(
    ja,
    {
      search: e,
      icon: o,
      color: c,
      railTooltip: u
    }
  ) : /* @__PURE__ */ S(
    A,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Re, { title: "Search", placement: "right", arrow: !0, ...u, children: /* @__PURE__ */ t(
          Ee,
          {
            "aria-label": "Search",
            onClick: (g) => r === "expand" ? n == null ? void 0 : n() : p(g.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: c,
              borderRadius: "8px",
              "&:hover": { bgcolor: a }
            },
            children: o ?? /* @__PURE__ */ t(xr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          br,
          {
            open: !!h,
            anchorEl: h,
            onClose: () => p(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (g) => ur(g)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, ja = ({ search: e, icon: o, color: r, railTooltip: n }) => {
  const s = Xe().palette.mode === "dark";
  di(s, or(r, s ? 0.3 : 0.35));
  const i = `rgb(${_o()})`, c = Er(s ? "#1e2430" : "#ffffff"), a = {
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
  }, u = d.useRef(null), l = d.useRef(null), [x, h] = d.useState(!1), p = d.useRef(!1), g = d.useRef(void 0), m = d.useRef(void 0), R = () => {
    clearTimeout(g.current), clearTimeout(m.current);
  }, w = d.useCallback(() => {
    R(), p.current = !1, h(!1);
  }, []), T = () => {
    clearTimeout(m.current), x || (clearTimeout(g.current), g.current = setTimeout(
      () => h(!0),
      Ga
    ));
  }, v = () => {
    clearTimeout(g.current), clearTimeout(m.current), m.current = setTimeout(() => {
      !p.current && !Ua(l.current) && h(!1);
    }, Ha);
  };
  return d.useEffect(() => R, []), d.useEffect(() => {
    if (!x)
      return;
    const E = setTimeout(() => ur(l.current)), D = (I) => {
      var _, M;
      const b = I.target;
      !((_ = l.current) != null && _.contains(b)) && !((M = u.current) != null && M.contains(b)) && w();
    }, y = (I) => {
      var b;
      I.key === "Escape" && (w(), (b = u.current) == null || b.focus());
    };
    return document.addEventListener("pointerdown", D), document.addEventListener("keydown", y), () => {
      clearTimeout(E), document.removeEventListener("pointerdown", D), document.removeEventListener("keydown", y);
    };
  }, [x, w]), /* @__PURE__ */ S(
    A,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Re,
          {
            title: x ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...n,
            children: /* @__PURE__ */ t(
              Ee,
              {
                ref: u,
                "aria-label": "Search",
                "aria-expanded": x,
                onMouseEnter: T,
                onMouseLeave: v,
                onClick: () => {
                  R(), p.current = !0, h(!0);
                },
                sx: {
                  width: ae,
                  height: ae,
                  color: r,
                  borderRadius: `${te}px`
                },
                children: o ?? /* @__PURE__ */ t(
                  xr,
                  {
                    sx: { fontSize: Ut }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          hr,
          {
            open: x,
            anchorEl: u.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ S(
              A,
              {
                ref: l,
                "data-testid": "sidebar-search-card",
                onMouseEnter: T,
                onMouseLeave: v,
                sx: {
                  position: "relative",
                  width: 320,
                  p: 1,
                  borderRadius: `${te}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    Yt,
                    {
                      isDark: s,
                      solid: c,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${wr} ${Ln.duration}ms ${Ln.easing} both`,
                        [ge]: { animation: "none" }
                      }
                    }
                  ),
                  /* @__PURE__ */ t(
                    A,
                    {
                      sx: {
                        position: "relative",
                        // The host's field, set into the glass: an outlined
                        // input or button becomes a recessed glass well.
                        // Classes repeat to outrank the host's own styles.
                        ...a,
                        animation: `${Rr} ${Dn.duration}ms ${Dn.easing} 60ms both`,
                        [ge]: { animation: "none" }
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
}, Va = 80, Ya = 300, qa = 32, Za = (e) => {
  const o = d.useRef(/* @__PURE__ */ new WeakSet()), r = d.useRef(void 0), n = d.useRef(void 0), [s, i] = d.useState(!1), [c, a] = d.useState(!1), [u, l] = d.useState(!1), x = d.useRef(null), h = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  d.useEffect(() => {
    if (!e) {
      h(), i(!1), a(!1), l(!1);
      return;
    }
    const m = (v) => {
      var D;
      if (v.pointerType !== "mouse")
        return;
      const E = v.clientX <= qa;
      E && ((D = x.current) == null || D.style.setProperty(
        "--edge-glow-y",
        `${v.clientY}px`
      )), l(E);
    }, R = () => l(!1), w = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), a(!1);
      }, Ya));
    }, T = (v) => {
      o.current.has(v) || w();
    };
    return document.addEventListener("mouseover", T), document.addEventListener("pointermove", m, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", w), document.documentElement.addEventListener("mouseleave", R), () => {
      h(), document.removeEventListener("mouseover", T), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener(
        "mouseleave",
        w
      ), document.documentElement.removeEventListener(
        "mouseleave",
        R
      );
    };
  }, [e]);
  const p = {
    onMouseOver: (m) => {
      o.current.add(m.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, Va));
    },
    onFocus: (m) => {
      Ja(m.target) && a(!0);
    },
    onBlur: (m) => {
      const R = m.relatedTarget;
      (!R || !m.currentTarget.contains(R)) && a(!1);
    },
    onKeyDown: (m) => {
      m.key === "Escape" && (a(!1), i(!1));
    }
  }, g = e && (s || c);
  return {
    shown: g,
    nearEdge: e && u && !g,
    glowRef: x,
    rootProps: p
  };
}, Ja = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Qa = 100, ec = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = d.useState(!1), [i, c] = d.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const l = (h) => {
      r.current.has(h) || (a(), s(!1));
    }, x = () => {
      a(), s(!1);
    };
    return document.addEventListener("mouseover", l), document.documentElement.addEventListener("mouseleave", x), () => {
      a(), document.removeEventListener("mouseover", l), document.documentElement.removeEventListener(
        "mouseleave",
        x
      );
    };
  }, []), d.useEffect(() => {
    if (!i)
      return;
    const l = (x) => {
      var h;
      (h = e.current) != null && h.contains(x.target) || c(!1);
    };
    return document.addEventListener("pointerdown", l), () => document.removeEventListener("pointerdown", l);
  }, [i]), {
    expanded: n || i,
    pin: () => c(!0),
    rootProps: {
      ref: e,
      onMouseOver: (l) => {
        r.current.add(l.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, s(!0);
        }, Qa));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (l) => {
        const x = l.relatedTarget;
        x && !l.currentTarget.contains(x) && c(!1);
      },
      onKeyDown: (l) => {
        l.key === "Escape" && c(!1);
      }
    }
  };
}, tc = 300, Zo = 288, oc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", rc = 18, Nn = 72, Jo = 90, nc = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", sc = 68, ic = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), ac = typeof window > "u" ? mo : zs, il = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: c = "rail",
  sidebarSubmenu: a = "expand",
  sidebarAutoHide: u = !1,
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: x,
  logo: h,
  onBrandClick: p,
  searchComponent: g,
  searchIcon: m,
  notificationsIcon: R,
  brandColor: w,
  contentPadding: T = Vn,
  userMenuItems: v,
  sidebarBackgroundColor: E,
  sidebarHeaderBackgroundColor: D,
  groupAccentColor: y,
  activeSidebarForegroundColor: I,
  enableRefreshToken: b = !1,
  holdSessionSkeleton: _ = !1,
  sessionSkeletonContent: M,
  activePath: C,
  onLinkClick: O,
  showProfile: N = !0,
  userName: L,
  userRole: B,
  userAvatar: j,
  userEmail: P,
  onLogout: U,
  showSettings: se = !0,
  onSettingsClick: Ae,
  onProfileClick: fe,
  showNotifications: pe = !0,
  notificationCount: Oe = 0,
  NotificationSidebarContent: $e,
  whatsNewCount: Ke = 0,
  onNotificationsClick: $,
  platforms: G,
  currentPlatformKey: Y,
  onPlatformSelect: Z,
  onVerify: K,
  alertProps: F,
  style: le,
  sidebarStyles: he,
  contentStyles: ie,
  accentColor: Pe,
  sidebarAccentColor: de,
  sidebarActiveBackgroundColor: be,
  sidebarGroupArrowColor: Be,
  sidebarForegroundColor: ve,
  contentBackgroundColor: Me,
  theme: ue = "light",
  darkModeSelector: je,
  showThemeToggler: at = !1,
  onThemeToggle: Ve,
  GlobalChatSidebar: ht,
  useChatSidebar: _t,
  chatPanelMode: $o = "docked",
  chatPanelPosition: qt = "right",
  chatPanelWidth: Tt = 420,
  onChatClose: Mo,
  showAssistant: et = !1,
  assistantPlacement: Ct = "sidebar",
  assistantShortcut: Zt = "j",
  onAssistantClick: ct,
  assistantActive: At = !1,
  assistantBusy: Ot = !1,
  customNavbar: $t,
  customNavbarProps: Jt,
  redirectToLogin: mt,
  apiBaseUrl: Qt
}) => {
  const eo = kn(), re = Fn(eo.breakpoints.down("md")), to = tn(
    () => wo(Ar(ue)),
    [ue]
  ), f = ue === "dark", k = Pe ?? "#01584f", H = de ?? k, z = Jn(
    typeof Me == "object" ? Me[ue] : Me,
    f
  ), X = c === "collapsible", Q = c === "panel", Ie = Q && s && !re, J = c === "rail-labeled", Le = X || J, _e = Zn(
    E,
    f
  ), Lo = D ?? _e, ye = ve ?? (f ? "#ffffff" : H), Mt = y ?? Ht(ye), Lt = D ? tr(Lo) : ye, Mr = (W) => /* @__PURE__ */ t(
    V,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: W,
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
  ), oo = w ?? Lt, [Lr, Do] = dt(
    null
  ), No = ((G == null ? void 0 : G.length) ?? 0) > 1, vs = on(() => Do(null), []), ys = (W) => {
    Do(null), Z ? Z(W) : W.key !== Y && W.url && window.location.assign(W.url);
  }, Dr = (W) => No ? /* @__PURE__ */ t(
    Ba,
    {
      anchorEl: Lr,
      onClose: vs,
      platforms: G,
      currentKey: Y,
      onSelect: ys,
      accentColor: k,
      glass: a === "flyout" && (X || Q) && !re,
      children: W
    }
  ) : W, ro = No ? (W) => Do(W.currentTarget) : p, no = No ? !!Lr : void 0, ko = Dr(
    h ?? Mr(oo)
  ), Ss = Dr(
    h ?? Mr(w ?? ye)
  ), Fo = ec(), De = Ao(a, c), ze = De || !Fo.expanded, tt = s && !re && fi(u, a, c), ot = Za(tt), Nr = De ? "popover" : "expand", kr = De ? Gt : Bt, Fr = De ? "transparent" : _e, Wr = De && !D ? "transparent" : Lo, [Es, Pr] = dt(!1), ws = on(() => Pr(!1), []), Ye = qn({
    showSidebar: s,
    isMobile: re,
    sidebarVariant: c,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [Br, lt] = dt(!1), [zr, Wo] = dt(!1), Se = re && l === "bottom-bar", Gr = `calc(${gs}px + env(safe-area-inset-bottom, 0px))`, [Po, Hr] = dt({ open: !1, tab: "notifications" }), Ur = () => Hr((W) => ({ ...W, open: !1 })), Rs = pe && !!$e, [Is, _s] = dt(!0), [Ts, Cs] = dt(!1), Bo = _t == null ? void 0 : _t(), Xr = (Bo == null ? void 0 : Bo.isOpen) ?? !1, Kr = $o === "floating" ? "floating" : "docked", As = Kr === "docked" && Xr && ht && !re ? Tt : 0, so = Xo(K), jr = Xo(!1), Vr = tn(
    () => sa(Qt),
    [Qt]
  );
  mo(() => {
    so.current = K;
  }, [K]);
  const zo = Xo(ct);
  zo.current = ct;
  const Dt = et && Zt ? Zt.toLowerCase() : null;
  mo(() => {
    if (!Dt)
      return;
    const W = (oe) => {
      (oe.metaKey || oe.ctrlKey) && !oe.altKey && !oe.shiftKey && oe.key.toLowerCase() === Dt && zo.current && (oe.preventDefault(), zo.current());
    };
    return window.addEventListener("keydown", W), () => window.removeEventListener("keydown", W);
  }, [Dt]);
  const Yr = (W) => {
    const oe = U(W);
    oe instanceof Promise && oe.catch((qe) => {
      console.error("Error in logout handler:", qe);
    });
  };
  if (ac(() => {
    (() => {
      var oe;
      try {
        const { isAuthenticated: qe } = ra();
        if (!qe) {
          console.log("No session found, redirecting to login"), Vt(), mt();
          return;
        }
        if (!jr.current) {
          const { user: kt, error: Uo } = na();
          if (kt && !Uo) {
            const Fs = {
              name: kt.name || "",
              email: kt.email || "",
              profilePicture: kt.profilePicture || "",
              role: kt.role || ""
            };
            jr.current = !0, (oe = so.current) == null || oe.call(so, Fs);
          } else
            Uo && console.error("Error getting user data:", Uo);
        }
        Cs(!0);
      } catch (qe) {
        console.error("Error checking session:", qe), Vt(), mt();
      } finally {
        _s(!1);
      }
    })();
  }, [mt]), mo(() => {
    b && ia(Vr, mt);
  }, [b, Vr]), Is || _)
    return /* @__PURE__ */ t(
      ta,
      {
        theme: ue,
        darkModeSelector: je,
        sidebarVariant: c,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: s,
        contentPadding: T,
        sidebarBackgroundColor: E,
        contentBackgroundColor: Me,
        content: M
      }
    );
  if (!Ts)
    return null;
  const Nt = g ?? ($t ? /* @__PURE__ */ t($t, { ...Jt }) : null), Os = (W) => {
    lt(!1), Wo(!1), Hr({ open: !0, tab: W });
  }, Go = $e && (() => Os("notifications")), $s = Oe + Ke, qr = {
    avatarColor: H,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: v == null ? void 0 : v.map(
      (W) => W.onClick || !W.path ? W : { ...W, onClick: () => O == null ? void 0 : O(W.path) }
    ),
    showNotifications: pe,
    notificationCount: Oe,
    whatsNewCount: Ke,
    onNotificationsClick: Go,
    showProfile: N,
    userName: L,
    userRole: B,
    userAvatar: j,
    showSettings: se,
    onSettingsClick: Ae,
    showThemeToggler: at,
    theme: ue,
    onThemeToggle: Ve,
    onLogout: Yr
  }, Ho = (W) => /* @__PURE__ */ t(
    za,
    {
      ...qr,
      compact: W,
      color: ye,
      hoverColor: Mt
    }
  ), Zr = Dt ? [ic() ? "⌘" : "Ctrl", Dt.toUpperCase()] : void 0, Ms = (W) => et && Ct === "sidebar" ? /* @__PURE__ */ t(
    yn,
    {
      variant: W ? "sidebar-icon" : "sidebar",
      onClick: ct,
      active: At,
      busy: Ot,
      shortcutKeys: Zr,
      accentColor: ye
    }
  ) : null, Ls = (W) => Nt ? /* @__PURE__ */ t(
    Ka,
    {
      search: Nt,
      icon: m,
      mode: W,
      onExpand: () => {
        Fo.pin(), Pr(!0);
      },
      autoFocus: Es,
      onAutoFocused: ws,
      color: ye,
      hoverColor: Mt
    }
  ) : null, io = (W) => {
    const oe = Ms(W !== "full"), qe = Ls(W);
    return oe || qe ? /* @__PURE__ */ S(
      Pt,
      {
        spacing: De ? `${Co}px` : 1.5,
        sx: { alignItems: W === "full" ? "stretch" : "center" },
        children: [
          oe,
          De && oe && qe ? /* @__PURE__ */ t(
            V,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Ht(ye)}`
              }
            }
          ) : null,
          qe
        ]
      }
    ) : void 0;
  }, Jr = () => /* @__PURE__ */ t(
    ir,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: C,
      onLinkClick: O,
      showHeaderBar: X,
      logo: ko,
      title: n,
      onBrandClick: ro,
      brandMenuOpen: no,
      brandColor: oo,
      headerBackgroundColor: X ? Wr : void 0,
      headerForegroundColor: X ? Lt : void 0,
      activeAccentColor: H,
      activeBackgroundColor: be,
      groupArrowColor: Be,
      groupAccentColor: y,
      activeForegroundColor: I,
      foregroundColor: ve,
      surfaceBackgroundColor: Fr,
      flyoutSurfaceColor: _e,
      collapsed: J || ze,
      showLabels: J,
      expandedWidth: Zo,
      collapsedWidth: J ? Kn : kr,
      topContent: io(
        J ? "popover" : ze ? Nr : "full"
      ),
      footer: Ho(J || ze),
      submenuMode: De ? "flyout" : "inline"
    }
  ), Qr = (W) => De ? Ds(W) : Ns(W), Ds = (W) => /* @__PURE__ */ S(
    V,
    {
      component: "aside",
      ...tt ? ot.rootProps : {},
      "data-auto-hide": tt ? "true" : void 0,
      "data-shown": tt ? String(ot.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (oe) => oe.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...tt ? {
          position: "fixed",
          left: 0,
          width: Gt + 2 * pt,
          pointerEvents: "none"
        } : {
          width: Ye,
          minWidth: Ye,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: z
        }
      },
      children: [
        tt && /* @__PURE__ */ t(
          V,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: rc,
              pointerEvents: "auto"
            }
          }
        ),
        tt && /* @__PURE__ */ t(
          V,
          {
            ref: ot.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(ot.nearEdge),
            "aria-hidden": "true",
            sx: {
              "--edge-glow-y": "50%",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Nn,
              pointerEvents: "none",
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${Nn}px ${Jo}px at 0 var(--edge-glow-y), ${He(ye, f ? 0.5 : 0.4)}, ${He(ye, 0)})`,
              opacity: ot.nearEdge ? 1 : 0,
              transition: "opacity 200ms ease",
              // And a bright line along the edge beside it
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 3,
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${Jo}px), ${He(ye, f ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${Jo}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ S(
          V,
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            sx: {
              position: "absolute",
              top: pt,
              bottom: pt,
              left: pt,
              width: Gt,
              borderRadius: `${jn}px`,
              display: "flex",
              flexDirection: "column",
              ...tt && {
                pointerEvents: ot.shown ? "auto" : "none",
                opacity: ot.shown ? 1 : 0,
                transform: ot.shown ? "none" : `translateX(calc(-100% - ${2 * pt}px))`,
                transition: nc,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...he
            },
            children: [
              /* @__PURE__ */ t(
                Yt,
                {
                  isDark: f,
                  solid: _e,
                  sx: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit"
                  }
                }
              ),
              /* @__PURE__ */ t(
                V,
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
                  children: W
                }
              )
            ]
          }
        )
      ]
    }
  ), Ns = (W) => /* @__PURE__ */ t(
    V,
    {
      component: "aside",
      sx: {
        width: Bt,
        minWidth: Bt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (oe) => oe.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        V,
        {
          ...De ? {} : Fo.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": ze ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: ze ? Bt : Zo,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: _e,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: ze ? "none" : `4px 0 24px rgba(0, 0, 0, ${f ? 0.5 : 0.12})`,
            transition: oc,
            ...he
          },
          children: W
        }
      )
    }
  ), ks = Yn(
    T,
    eo
  );
  return /* @__PURE__ */ t(yo, { theme: to, children: /* @__PURE__ */ t(Un.Provider, { value: H, children: /* @__PURE__ */ t(Io.Provider, { value: _e, children: /* @__PURE__ */ t(xs.Provider, { value: R, children: /* @__PURE__ */ S(
    V,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...le
      },
      children: [
        /* @__PURE__ */ t(Qo, {}),
        re && /* @__PURE__ */ t(
          Ia,
          {
            height: go,
            onMenuClick: s && !Se ? () => lt(!0) : void 0,
            appName: n,
            logo: ko,
            onBrandClick: ro,
            brandMenuOpen: no,
            background: Lo,
            color: Lt,
            brandColor: oo,
            endContent: pe ? /* @__PURE__ */ t(
              $r,
              {
                count: $s,
                onClick: Go,
                color: Lt,
                hoverColor: Mt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !re && J && /* @__PURE__ */ t(
          V,
          {
            component: "aside",
            sx: {
              width: Ye,
              minWidth: Ye,
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
              ...he
            },
            children: Jr()
          }
        ),
        s && !re && X && Qr(
          /* @__PURE__ */ S(Fe, { children: [
            Jr(),
            (F == null ? void 0 : F.show) && !ze && /* @__PURE__ */ t(ho, { ...F })
          ] })
        ),
        Ie && Qr(
          /* @__PURE__ */ S(Fe, { children: [
            /* @__PURE__ */ t(
              Fa,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: C,
                onLinkClick: O,
                logo: ko,
                title: n,
                onBrandClick: ro,
                brandMenuOpen: no,
                brandColor: oo,
                headerBackgroundColor: Wr,
                headerForegroundColor: Lt,
                activeAccentColor: H,
                activeBackgroundColor: be,
                groupArrowColor: Be,
                groupAccentColor: y,
                activeForegroundColor: I,
                foregroundColor: ve,
                surfaceBackgroundColor: Fr,
                flyoutSurfaceColor: _e,
                collapsed: ze,
                expandedWidth: Zo,
                collapsedWidth: kr,
                topContent: io(
                  ze ? Nr : "full"
                ),
                submenuMode: De ? "flyout" : "inline",
                color: ye,
                hoverColor: Mt,
                avatarColor: H,
                showProfile: N,
                userName: L,
                userEmail: P,
                userRole: B,
                userAvatar: j,
                showNotifications: pe,
                notificationCount: Oe,
                onNotificationsClick: Rs ? Go : $,
                whatsNewCount: Ke,
                onProfileClick: fe,
                menuItems: v,
                onLogout: Yr,
                theme: ue,
                showThemeToggler: at,
                onThemeToggle: Ve
              }
            ),
            (F == null ? void 0 : F.show) && !ze && /* @__PURE__ */ t(ho, { ...F })
          ] })
        ),
        s && !re && !Le && !Q && /* @__PURE__ */ t(
          rn,
          {
            variant: "permanent",
            sx: {
              width: Ye,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Ye,
                boxSizing: "border-box",
                bgcolor: z,
                borderRight: "none"
              },
              ...he
            },
            children: /* @__PURE__ */ S(
              V,
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
                    V,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        So,
                        {
                          logo: Ss,
                          appName: n,
                          onClick: ro,
                          menuOpen: no,
                          color: w ?? ye,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  io("popover"),
                  /* @__PURE__ */ S(
                    V,
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
                          va,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: C,
                            onLinkClick: O,
                            accentColor: H,
                            surfaceBackgroundColor: z,
                            railShowTitles: i
                          }
                        ),
                        (F == null ? void 0 : F.show) && /* @__PURE__ */ t(
                          ho,
                          {
                            ...F
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(V, { sx: { py: 1.5 }, children: Ho(!0) })
                ]
              }
            )
          }
        ),
        s && re && /* @__PURE__ */ S(
          Hs,
          {
            anchor: Se ? "bottom" : "left",
            open: Br,
            onOpen: () => lt(!0),
            onClose: () => lt(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (W) => W.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: _e,
                  backgroundImage: "none",
                  ...Se ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              Se && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                V,
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
                ir,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: C,
                  onLinkClick: (W) => {
                    O == null || O(W), lt(!1);
                  },
                  onLinkAction: () => lt(!1),
                  collapsed: !1,
                  expandedWidth: Se ? "100%" : tc,
                  activeAccentColor: H,
                  activeBackgroundColor: be,
                  groupArrowColor: Be,
                  groupAccentColor: y,
                  activeForegroundColor: I,
                  foregroundColor: ve,
                  surfaceBackgroundColor: _e,
                  topInsetPx: Se ? 8 : 0,
                  topContent: Se ? void 0 : io("full"),
                  footer: Se ? void 0 : Ho(!1)
                }
              ),
              (F == null ? void 0 : F.show) && /* @__PURE__ */ t(ho, { ...F })
            ]
          }
        ),
        Se && Nt && /* @__PURE__ */ t(
          Ra,
          {
            open: zr,
            onClose: () => Wo(!1),
            search: Nt
          }
        ),
        Se && /* @__PURE__ */ t(
          wa,
          {
            ...qr,
            pinnedLinks: x,
            activePath: C,
            onLinkClick: O,
            onMenuClick: s ? () => lt(!0) : void 0,
            menuOpen: Br,
            onSearchClick: Nt ? () => Wo(!0) : void 0,
            searchOpen: zr,
            showAssistant: et,
            onAssistantClick: ct,
            assistantActive: At,
            showProfile: N,
            background: _e,
            color: ye,
            activeColor: H,
            activeBackground: Mt
          }
        ),
        /* @__PURE__ */ t(
          V,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": ks,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": re ? `${go}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ye ? `calc(100% - ${Ye}px)` : "100%",
              mt: re ? `${go}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Se && {
                pb: `calc(var(--lumora-content-padding) + ${Gr})`
              },
              backgroundColor: z,
              ...ie
            },
            children: e
          }
        ),
        ht && /* @__PURE__ */ t(
          ua,
          {
            open: Xr,
            variant: Kr,
            position: qt,
            width: Tt,
            sidebarWidthPx: Ye,
            bottomOffsetPx: et && Ct === "floating" ? sc : 0,
            fullScreen: re,
            fullScreenBottom: Se ? Gr : "0px",
            onClose: Mo,
            children: /* @__PURE__ */ t(ht, {})
          }
        ),
        et && Ct === "floating" && !Se && /* @__PURE__ */ t(
          yn,
          {
            variant: "floating",
            rightOffsetPx: As,
            shortcutKeys: Zr,
            onClick: ct,
            active: At,
            busy: Ot
          }
        ),
        pe && $e && /* @__PURE__ */ t(
          rn,
          {
            anchor: "right",
            open: Po.open,
            onClose: Ur,
            slotProps: {
              paper: {
                sx: {
                  width: 380,
                  maxWidth: "100vw"
                }
              }
            },
            children: /* @__PURE__ */ t(
              $e,
              {
                onClose: Ur,
                initialTab: Po.tab
              },
              Po.tab
            )
          }
        )
      ]
    }
  ) }) }) }) });
};
export {
  ee as AUTH_ERROR_CODES,
  q as AuthError,
  ir as CollapsibleSidebar,
  nl as FullBleedSection,
  Zi as Kbd,
  ta as LumoraShellSkeleton,
  il as LumoraWrapper,
  Vt as clearAuthTokens,
  il as default,
  sl as getAuthErrorMessage,
  jt as getAuthTokens,
  na as getCurrentUser,
  Ar as getDesignTokens,
  ra as isAuthenticated,
  lr as logAuthError,
  ds as storeAuthTokens
};
