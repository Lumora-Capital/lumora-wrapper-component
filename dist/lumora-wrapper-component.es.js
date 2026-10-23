import { jsx as t, jsxs as E, Fragment as Ce } from "react/jsx-runtime";
import Ls from "@mui/icons-material/KeyboardArrowDownRounded";
import Ds from "@mui/icons-material/KeyboardArrowUpRounded";
import ks from "@mui/icons-material/ChevronRightRounded";
import T from "@mui/material/Box";
import qr from "@mui/material/Collapse";
import ot from "@mui/material/Divider";
import Se from "@mui/material/IconButton";
import co from "@mui/material/ListItemButton";
import we from "@mui/material/ListItemIcon";
import ze from "@mui/material/ListItemText";
import Ne from "@mui/material/Stack";
import Ee from "@mui/material/Tooltip";
import de from "@mui/material/Typography";
import { useTheme as He, createTheme as Eo, alpha as Ge, ThemeProvider as yo } from "@mui/material/styles";
import * as l from "react";
import { useMemo as Zr, useState as dt, useCallback as Qr, useRef as Ho, useEffect as ho, useLayoutEffect as Ns } from "react";
import st from "@mui/material/ButtonBase";
import { keyframes as ar } from "@emotion/react";
import cr from "@mui/material/Fade";
import lr from "@mui/material/Popper";
import { useTheme as Pn, CssBaseline as Yo, GlobalStyles as Fs, Box as q, useMediaQuery as Wn, Stack as Pt, Skeleton as De, Drawer as Jr, SwipeableDrawer as Ps } from "@mui/material";
import en from "axios";
import Ws from "@mui/material/Card";
import Bs from "@mui/material/CardContent";
import Bn from "@mui/material/Button";
import Gs from "@mui/icons-material/AutoAwesomeRounded";
import zs from "@mui/material/Grow";
import dr from "@mui/material/Paper";
import Hs from "@mui/material/Slide";
import Us from "@mui/material/ListSubheader";
import tt from "@mui/material/MenuItem";
import ur from "@mui/material/MenuList";
import Gn from "@mui/icons-material/MenuRounded";
import fr from "@mui/icons-material/SearchRounded";
import zn from "@mui/icons-material/LogoutRounded";
import Hn from "@mui/icons-material/NotificationsNoneOutlined";
import Xs from "@mui/icons-material/SettingsOutlined";
import Ks from "@mui/material/Avatar";
import js from "@mui/material/Menu";
import tn from "@mui/material/ToggleButton";
import Vs from "@mui/material/ToggleButtonGroup";
import Ys from "@mui/material/Drawer";
import qs from "@mui/material/AppBar";
import Zs from "@mui/material/Toolbar";
import Un from "@mui/material/Badge";
import Qs from "@mui/icons-material/DarkModeOutlined";
import Js from "@mui/icons-material/LightModeOutlined";
import ei from "@mui/icons-material/SettingsBrightnessOutlined";
import pr from "@mui/material/Popover";
import ti from "@mui/icons-material/CheckRounded";
const vo = ({
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
  }, u = /* @__PURE__ */ E(Ce, { children: [
    o ? /* @__PURE__ */ t(
      de,
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
    st,
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
  ) : /* @__PURE__ */ t(Ne, { direction: "row", "data-testid": i, sx: a, children: u });
}, qo = !1, wt = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, St = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, vt = (e, o) => e ? `${e}/${o.text}` : o.text, Qe = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Qe(n, o))) ?? !1 : !1;
}, Be = (e, o) => !!(o && e.path === o), hr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return St(r) ? hr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Zo = (e) => {
  const o = Ro(e);
  if (!o)
    return "#ffffff";
  const [r, n, s] = o.map((c) => {
    const a = c / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Xt = (e) => {
  const o = Ro(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = o;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, Qo = (e, o) => {
  const r = Ro(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, Ro = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Xn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), mr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", oi = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", ri = ar`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ae = "@media (prefers-reduced-motion: reduce)", ee = 6, gr = "9, 193, 174", Kn = l.createContext(
  void 0
), qt = l.createContext(
  void 0
), xr = (e) => l.useContext(qt) ?? e, Rt = () => {
  const e = l.useContext(Kn), o = e ? Ro(e) : null;
  return o ? o.join(", ") : gr;
}, on = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, ni = (e, o) => e ? "255, 255, 255" : o, si = (e, o, r = gr) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${oi(e)}, 0 0 0 1px ${mr(e)}`
}), ii = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", br = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: mr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${ee}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), yr = ar`
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
`, vr = ar`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Sr = (e, o = gr, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Kt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: Qo(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${Qo(e, 0.45)}`
}, ai = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${mr(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${ee}px`,
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
}, ci = 100, jn = 80, mo = 56, Wt = 72, Ht = 52, me = 40, Et = 20, Io = 4, ft = 8, Vn = ee, Yn = { xs: 2, md: "18px" }, qn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, _o = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), li = (e, o, r) => e && _o(o, r), Zn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || o ? 0 : r === "rail-labeled" ? jn : _o(n, r) ? s ? 0 : Ht + 2 * ft : r === "collapsible" || r === "panel" ? Wt : ci, Qn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Jn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), es = { stiffness: 320, damping: 24 }, ts = { stiffness: 320, damping: 28 }, wr = { stiffness: 520, damping: 20 }, os = { stiffness: 380, damping: 36 }, To = { stiffness: 260, damping: 28 }, di = "cubic-bezier(0.32, 1.28, 0.52, 1)", ui = 420, rn = 60, fi = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), nn = /* @__PURE__ */ new Map(), Re = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, s = nn.get(n);
  if (s)
    return s;
  if (!fi)
    return { easing: di, duration: ui };
  const i = 1 / 600;
  let c = 0, a = 0, u = 0, d = 1 / rn;
  const x = [0];
  for (; u < 3; ) {
    const m = (-e * (c - 1) - o * a) / r;
    if (a += m * i, c += a * i, u += i, u >= d && (x.push(c), d += 1 / rn, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  x[x.length - 1] = 1;
  const g = {
    easing: `linear(${x.map((m) => Number(m.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return nn.set(n, g), g;
}, rt = (e) => !!(e && typeof e.animate == "function"), nt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Bt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, pi = (e, o = 1.14) => {
  if (!rt(e) || nt())
    return;
  const r = Re(wr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, jt = "data-rail-item", hi = `[${jt}], button, [role="button"]`, It = l.createContext(!1), Er = () => {
  const e = l.useContext(It), o = He(), r = l.useContext(qt);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: br(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Je = Re(os), Rr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: c = null
}) => {
  const a = l.useRef(null), u = Rt(), [d, x] = l.useState(null), g = l.useRef(null), m = l.useRef(null), f = (y, v) => {
    m.current = v;
    const C = v.getBoundingClientRect(), U = y.getBoundingClientRect(), B = n ?? C.width, N = n ?? C.height, F = {
      top: Math.round(C.top - U.top + (C.height - N) / 2),
      left: Math.round(C.left - U.left + (C.width - B) / 2),
      width: Math.round(B),
      height: Math.round(N)
    };
    x(
      (k) => k && k.visible && k.top === F.top && k.left === F.left && k.width === F.width && k.height === F.height ? k : { ...F, visible: !0, instant: !(k != null && k.visible) }
    );
  }, h = (y, v) => {
    var U;
    const C = (U = v == null ? void 0 : v.closest) == null ? void 0 : U.call(v, r);
    return C && y.contains(C) ? C : null;
  }, I = (y) => {
    if (!e)
      return;
    const v = h(y.currentTarget, y.target);
    v && f(y.currentTarget, v);
  }, b = (y) => {
    if (!e)
      return;
    const v = h(y.currentTarget, y.target);
    v && y.target.matches(":focus-visible") && f(y.currentTarget, v);
  }, S = () => {
    var C;
    const y = (C = a.current) == null ? void 0 : C.parentElement, v = i && (y == null ? void 0 : y.querySelector(i));
    return y && v ? { container: y, item: v } : null;
  }, w = () => {
    const y = S();
    if (y) {
      f(y.container, y.item);
      return;
    }
    m.current = null, x((v) => v != null && v.visible ? { ...v, visible: !1 } : v);
  };
  l.useEffect(() => {
    var v, C;
    if (!e)
      return;
    const y = S();
    y ? f(y.container, y.item) : (C = (v = a.current) == null ? void 0 : v.parentElement) != null && C.matches(":hover") || w();
  }, [e, c]);
  const R = (y) => {
    const v = y.relatedTarget;
    (!v || !y.currentTarget.contains(v)) && (y.currentTarget.matches(":hover") || w());
  };
  return l.useEffect(() => {
    const y = a.current;
    if (!(d != null && d.visible)) {
      g.current = null;
      return;
    }
    const v = g.current;
    if (g.current = d.top, !rt(y) || nt())
      return;
    if (v === null || d.instant) {
      y.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Je.duration,
        easing: Je.easing
      });
      return;
    }
    const C = Math.min(Math.abs(d.top - v) / 600, 0.08);
    C && y.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - C / 2} ${1 + C}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Je.duration, easing: "ease-out" }
    );
  }, [d == null ? void 0 : d.top, d == null ? void 0 : d.visible, d == null ? void 0 : d.instant]), {
    lens: e && d ? /* @__PURE__ */ t(
      T,
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": d.visible ? "true" : "false",
        sx: {
          ...Sr(o, u),
          borderRadius: `${s}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: d.width,
          height: d.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset.
          translate: `${d.left}px ${d.top}px`,
          // Shrinks away as it fades; wells back up on return
          scale: d.visible ? "1" : "0.7",
          opacity: d.visible ? 1 : 0,
          pointerEvents: "none",
          transition: d.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Je.duration}ms ${Je.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
          [Ae]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: I,
      onMouseLeave: w,
      onFocus: b,
      onBlur: R,
      onScrollCapture: w
    } : {}
  };
}, mi = (e, o, r = null) => {
  const n = Rr({
    enabled: e,
    isDark: o,
    selector: hi,
    // The rail's buttons exactly, so the hover sits on the item
    size: me,
    radius: ee,
    pinSelector: `[${jt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? l.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, gi = (e, o) => {
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
}, xi = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const s = l.useRef(null), [i, c] = l.useState(null), a = l.useRef(null), u = l.useCallback(
    (x) => {
      const g = n.current;
      if (!e || !g)
        return;
      const m = g.querySelector(
        `[${jt}][data-active="true"]`
      );
      if (!m) {
        c(
          (h) => h != null && h.visible ? { ...h, visible: !1 } : h
        );
        return;
      }
      const f = gi(m, g);
      c(
        (h) => h && h.visible && h.top === f.top && h.left === f.left && h.width === f.width && h.height === f.height ? h : {
          ...f,
          visible: !0,
          instant: x || !(h != null && h.visible)
        }
      );
    },
    [e, n]
  );
  return l.useLayoutEffect(() => {
    u(!1);
  }), l.useEffect(() => {
    const x = n.current;
    if (!e || !x)
      return;
    let g = 0;
    const m = () => {
      cancelAnimationFrame(g), g = requestAnimationFrame(() => u(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    f == null || f.observe(x);
    const h = typeof MutationObserver > "u" ? null : new MutationObserver(m);
    return h == null || h.observe(x, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(g), f == null || f.disconnect(), h == null || h.disconnect();
    };
  }, [e, n, u]), l.useEffect(() => {
    const x = s.current;
    if (!(i != null && i.visible)) {
      a.current = null;
      return;
    }
    const g = a.current;
    if (a.current = i.top, g === null || i.instant || !rt(x) || nt())
      return;
    const m = Math.min(Math.abs(i.top - g) / 600, 0.08);
    m && x.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - m / 2} ${1 + m}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Je.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ t(
    T,
    {
      ref: s,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": i.visible ? "true" : "false",
      sx: {
        ...Kt(r, o),
        borderRadius: `${ee}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: i.width,
        height: i.height,
        translate: `${i.left}px ${i.top}px`,
        scale: i.visible ? "1" : "0.7",
        opacity: i.visible ? 1 : 0,
        pointerEvents: "none",
        transition: i.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Je.duration}ms ${Je.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Ae]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, sn = 14, bi = 18, yi = "blur(12px) saturate(180%) brightness(1.04)", vi = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Si = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, wi = 140, an = 0.22, Ei = 0.14, Ri = (e, o, r) => {
  const n = l.useRef(r);
  n.current = r, l.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var f;
      const m = e.current;
      m && (m.style.setProperty("--lx", `${i.x.toFixed(1)}px`), m.style.setProperty("--ly", `${i.y.toFixed(1)}px`), m.style.setProperty("--li", i.i.toFixed(3)), (f = n.current) == null || f.call(n, i.x, i.y, i.i));
    }, u = () => {
      i.x += (s.x - i.x) * an, i.y += (s.y - i.y) * an, i.i += (s.i - i.i) * Ei;
      const m = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      m && (i.x = s.x, i.y = s.y, i.i = s.i), a(), c = m ? 0 : requestAnimationFrame(u);
    }, d = () => {
      c || (c = requestAnimationFrame(u));
    }, x = (m) => {
      const f = e.current;
      if (m.pointerType === "touch" || !f)
        return;
      const h = f.getBoundingClientRect();
      if (!h.width || !h.height)
        return;
      s.x = (m.clientX - h.left) * f.offsetWidth / h.width, s.y = (m.clientY - h.top) * f.offsetHeight / h.height;
      const I = Math.max(
        h.left - m.clientX,
        0,
        m.clientX - h.right
      ), b = Math.max(
        h.top - m.clientY,
        0,
        m.clientY - h.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(I, b) / wi), i.i < 0.01 && (i.x = s.x, i.y = s.y), d();
    }, g = () => {
      s.i = 0, d();
    };
    return document.addEventListener("pointermove", x, { passive: !0 }), document.documentElement.addEventListener("mouseleave", g), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", x), document.documentElement.removeEventListener("mouseleave", g);
    };
  }, [e, o]);
}, _t = l.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: c
  }, a) => {
    const u = l.useRef(null), d = s && qo;
    Ri(u, i && qo, c);
    const x = Rt(), g = `lumora-glass-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [m, f] = l.useState(null), h = l.useRef(null), I = l.useCallback(
      (w) => {
        var _;
        if (u.current = w, typeof a == "function" ? a(w) : a && (a.current = w), (_ = h.current) == null || _.disconnect(), h.current = null, !w || !d || !vi || typeof ResizeObserver > "u")
          return;
        const R = () => {
          const y = w.offsetWidth, v = w.offsetHeight;
          f(
            (C) => (C == null ? void 0 : C.width) === y && C.height === v ? C : y && v ? { width: y, height: v } : null
          );
        };
        h.current = new ResizeObserver(R), h.current.observe(w), R();
      },
      [a, d]
    ), b = l.useMemo(
      () => m ? Si(m.width, m.height, sn) : null,
      [m]
    ), S = d && !!(b && m);
    return /* @__PURE__ */ E(Ce, { children: [
      S ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ E(
            "filter",
            {
              id: g,
              x: "0",
              y: "0",
              width: m.width,
              height: m.height,
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
                    width: m.width,
                    height: m.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ t(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: sn / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: bi,
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
        T,
        {
          ref: I,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": S ? "true" : void 0,
          sx: [
            si(e, o, x),
            S ? {
              backdropFilter: `url(#${g}) ${yi}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
_t.displayName = "GlassLayer";
const et = me, cn = Io, Ii = ee, ln = 1.12, Co = 6, dn = Co - 2, Gt = ee, Jo = 24, So = 10, un = 0.12, fn = 0.75, _i = So + Ht / 2 - 2, Ti = 90, Ci = 22, Ai = 1190, Oi = 1195, wo = Re(es), be = Re(os), pn = Re(To), $i = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), c = e + r, a = o + n, u = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + i} ${o} H ${c - i} ${u} ${c} ${o + i} V ${a - i} ${u} ${c - i} ${a} H ${e + i} ${u} ${e} ${a - i} V ${o + i} ${u} ${e + i} ${o} Z')`;
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
  panelProps: d,
  accentColor: x,
  activeForegroundColor: g,
  solidSurface: m
}) => {
  const f = He(), h = f.palette.mode === "dark", I = !!(e && r), b = l.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const S = b.current, w = l.useMemo(() => r ? {
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
  } : null, [r, n]), R = l.useRef(w);
  w && (R.current = w), l.useEffect(() => {
    r && pi(r);
  }, [r]);
  const [_, y] = l.useState(!1);
  l.useEffect(() => {
    if (!I) {
      y(!1);
      return;
    }
    let $ = 0;
    const z = requestAnimationFrame(() => {
      $ = requestAnimationFrame(() => y(!0));
    });
    return () => {
      cancelAnimationFrame(z), cancelAnimationFrame($);
    };
  }, [I]);
  const v = l.useMemo(
    () => S ? hr(S.group.subitems, S.group.icon) : [],
    [S]
  ), C = l.useRef(null), U = l.useRef(null), B = l.useRef(0), N = l.useRef(null), F = l.useRef([]), k = v.findIndex(
    ({ sub: $ }) => Be($, i)
  ), [M, A] = l.useState(0);
  l.useEffect(() => {
    A(Math.max(k, 0));
  }, [o]), l.useEffect(() => {
    if (!I || !c)
      return;
    const $ = setTimeout(() => {
      var z;
      return (z = F.current[0]) == null ? void 0 : z.focus();
    });
    return () => clearTimeout($);
  }, [I, c, o]);
  const J = ($) => {
    var V;
    const z = Math.max(0, Math.min($, v.length - 1));
    A(z), (V = F.current[z]) == null || V.focus();
  }, Ie = ($, z) => {
    var V;
    switch ($.key) {
      case "ArrowRight":
        J(z + 1);
        break;
      case "ArrowLeft":
        z === 0 ? u(!0) : J(z - 1);
        break;
      case " ":
        (V = F.current[z]) == null || V.click();
        break;
      case "Home":
        J(0);
        break;
      case "End":
        J(v.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    $.preventDefault();
  }, G = ($) => {
    const z = F.current.slice(0, v.length).filter((ce) => !!ce);
    if (!z.length)
      return;
    const V = $ !== null && $ < z.length && !nt(), H = `translate ${be.duration}ms ${be.easing}, scale ${be.duration}ms ${be.easing}`, K = z.map((ce) => ce.offsetLeft + et / 2), ie = z.map(
      (ce, le) => V && le === $ ? ln : 1
    ), W = V ? (ln - 1) * et : 0, Oe = K[0] - et / 2, ae = K[K.length - 1] + et / 2, Fe = V ? Math.min(
      Math.max(
        (K[$] - Oe) / (ae - Oe || 1),
        Math.max(0, 1 - dn / W)
      ),
      Math.min(1, dn / W)
    ) : 0;
    let $e = Oe - W * Fe;
    z.forEach((ce, le) => {
      const ge = et * ie[le], ne = $e + ge / 2;
      $e += ge + cn, ce.style.transition = `${H}, background 160ms ease, box-shadow 160ms ease`, ce.style.translate = V ? `${ne - K[le]}px 0` : "", ce.style.scale = V ? String(ie[le]) : "", V ? ce.style.setProperty("--dock-scale", String(ie[le])) : ce.style.removeProperty("--dock-scale");
    });
  }, P = l.useRef(null);
  l.useEffect(() => {
    P.current = null;
  }, [o]);
  const X = ($) => {
    P.current !== $ && (P.current = $, cancelAnimationFrame(B.current), B.current = requestAnimationFrame(() => G($)));
  };
  l.useEffect(() => () => cancelAnimationFrame(B.current), []);
  const te = f.palette.text.primary, oe = h ? f.palette.text.primary : x;
  return /* @__PURE__ */ E(Ce, { children: [
    /* @__PURE__ */ t(cr, { in: I, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      T,
      {
        "data-testid": "sidebar-flyout-scrim",
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
          bgcolor: ii(h)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      lr,
      {
        open: I,
        anchorEl: w ?? R.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Up by half the title, so the tile row (not the whole
          // panel) is centred on the rail icon
          {
            name: "offset",
            options: {
              offset: [-Jo / 2, So]
            }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Oi,
          transition: _ ? `transform ${be.duration}ms ${be.easing}` : "none",
          [Ae]: { transition: "none" }
        },
        children: ({ TransitionProps: $ }) => /* @__PURE__ */ t(
          Wi,
          {
            in: ($ == null ? void 0 : $.in) ?? I,
            onEnter: $ == null ? void 0 : $.onEnter,
            onExited: $ == null ? void 0 : $.onExited,
            groupKey: (S == null ? void 0 : S.key) ?? null,
            panelProps: d,
            isDark: h,
            solidSurface: m,
            groupText: S == null ? void 0 : S.group.text,
            glassRef: U,
            shapeRef: N,
            children: S ? /* @__PURE__ */ E(Ce, { children: [
              /* @__PURE__ */ t(
                T,
                {
                  "aria-hidden": !0,
                  "data-testid": "sidebar-flyout-title",
                  sx: {
                    px: `${Co}px`,
                    height: Jo,
                    boxSizing: "border-box",
                    pt: "2px",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "16px",
                    letterSpacing: "0.02em",
                    color: "text.secondary",
                    whiteSpace: "nowrap"
                  },
                  children: S.group.text
                }
              ),
              /* @__PURE__ */ t(
                T,
                {
                  ref: C,
                  role: "menu",
                  "aria-label": S.group.text,
                  onPointerLeave: () => X(null),
                  sx: {
                    position: "relative",
                    display: "flex",
                    gap: `${cn}px`,
                    // A grown tile fits in the panel's padding
                    // (see DOCK_ROOM_PX)
                    px: 0
                  },
                  children: v.map(({ sub: z, icon: V }, H) => /* @__PURE__ */ t(
                    rs,
                    {
                      ref: (K) => {
                        F.current[H] = K;
                      },
                      sub: z,
                      icon: V,
                      index: H,
                      active: Be(
                        z,
                        i
                      ),
                      tabIndex: H === M ? 0 : -1,
                      onClick: (K) => {
                        wt(K) && (K.preventDefault(), a(z.path), u());
                      },
                      onKeyDown: (K) => Ie(K, H),
                      onFocus: (K) => {
                        A(H), K.currentTarget.matches(
                          ":focus-visible"
                        ) && X(H);
                      },
                      onHoverStart: (K) => {
                        K !== "touch" && X(H);
                      },
                      accentColor: x,
                      activeForegroundColor: g,
                      labelColor: te,
                      iconColor: oe,
                      isDark: h
                    },
                    z.path
                  ))
                },
                S.key
              )
            ] }) : null
          }
        )
      }
    )
  ] });
}, Ut = 18, Li = 160, er = 14, Di = 22, ki = 2.5, Ni = 1, hn = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, s = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(s, 0)) + Math.min(Math.max(n, s), 0) - r.r;
}, Fi = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, Pi = (e, o, r) => {
  const n = Co, s = Ut, i = Ut + o / 2, c = Math.max(e, ...r.map((b) => b.right + n)), a = {
    cx: c / 2,
    cy: i,
    hx: c / 2,
    hy: o / 2,
    r: Gt
  }, u = r.filter((b) => b.bottom - b.top > et * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + Ut,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: Gt
  })), d = (b, S) => u.reduce(
    (w, R) => Fi(w, hn(b, S, R), Di),
    hn(b, S, a)
  ), x = (b, S) => {
    let w = i, R = i + S * (o / 2 + s);
    if (d(b, w) > 0)
      return null;
    for (let _ = 0; _ < 12; _ += 1) {
      const y = (w + R) / 2;
      d(b, y) <= 0 ? w = y : R = y;
    }
    return w;
  }, g = Math.min(0, ...u.map((b) => b.cx - b.hx)) - 2, m = Math.max(c, ...u.map((b) => b.cx + b.hx)) + 2, f = [], h = [];
  for (let b = g; b <= m; ) {
    const S = x(b, -1), w = x(b, 1);
    if (S !== null && w !== null) {
      const _ = +(b + er).toFixed(1);
      f.push([_, +S.toFixed(1)]), h.push([_, +w.toFixed(1)]);
    }
    const R = b - g < Gt + 4 || m - b < Gt + 4;
    b += R ? Ni : ki;
  }
  return f.length ? `M ${[...f, ...h.reverse()].map(([b, S]) => `${b} ${S}`).join(" L ")} Z` : "";
}, mn = (e, [o, r], n, s) => {
  Array.from(e.children).forEach((i) => {
    rt(i) && (Bt(i), i.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: s,
      fill: r === 0 ? "forwards" : "none"
    }));
  });
}, Wi = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: s,
  isDark: i,
  solidSurface: c,
  groupText: a,
  glassRef: u,
  shapeRef: d,
  children: x
}) => {
  const g = l.useRef(null), m = l.useRef(null), f = l.useRef(null), h = l.useRef(null), I = l.useRef(null), b = ni(i, Rt()), S = l.useCallback(
    (G, P, X) => {
      var te, oe;
      (te = I.current) == null || te.setAttribute("cx", String(G)), (oe = I.current) == null || oe.setAttribute("cy", String(P)), h.current && (h.current.style.opacity = String(
        X * (i ? on.dark.rim : on.light.rim)
      ));
    },
    [i]
  ), w = l.useRef(null), R = l.useRef(null), _ = `lumora-flyout-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, y = l.useRef(0), v = l.useRef(0), C = l.useRef(""), U = () => {
    var $, z, V, H;
    const G = g.current, P = m.current;
    if (!G || !P)
      return !1;
    const X = G.getBoundingClientRect(), te = Array.from(
      G.querySelectorAll('[role="menuitem"]'),
      (K) => {
        if (K.style.scale)
          return null;
        const ie = K.getBoundingClientRect();
        return {
          left: ie.left - X.left,
          right: ie.right - X.left,
          top: ie.top - X.top,
          bottom: ie.bottom - X.top
        };
      }
    ).filter((K) => K !== null), oe = Pi(
      G.offsetWidth,
      G.offsetHeight,
      te
    );
    return oe === C.current ? !1 : (C.current = oe, P.style.clipPath = `path('${oe}')`, ($ = f.current) == null || $.setAttribute("d", oe), (z = h.current) == null || z.setAttribute("d", oe), (V = w.current) == null || V.setAttribute("d", oe), (H = R.current) == null || H.setAttribute("d", oe), !0);
  }, B = () => {
    if (v.current = 0, y.current)
      return;
    const G = () => {
      if (v.current = U() ? 0 : v.current + 1, v.current > 8) {
        y.current = 0;
        return;
      }
      y.current = requestAnimationFrame(G);
    };
    y.current = requestAnimationFrame(G);
  };
  d.current = B, l.useLayoutEffect(() => (U(), B(), () => {
    cancelAnimationFrame(y.current), y.current = 0;
  }), [n]);
  const N = l.useRef(null), F = l.useRef(null), k = l.useRef(!1), M = (G) => {
    g.current = G;
    const { ref: P } = s;
    typeof P == "function" ? P(G) : P && (P.current = G);
  }, A = () => {
    Bt(u.current), Bt(N.current), Bt(g.current);
  }, J = () => {
    var te;
    const G = g.current, P = u.current, X = N.current;
    if (!(!rt(G) || !P || !X)) {
      if (A(), nt()) {
        G.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      F.current = null, P.animate(
        [
          { transform: `scale(${un}, ${fn})` },
          { transform: "none" }
        ],
        { duration: wo.duration, easing: wo.easing }
      ), mn(P, [0, 1], 160, "ease-out");
      try {
        (te = m.current) == null || te.animate(
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
          duration: pn.duration,
          delay: 60,
          easing: pn.easing,
          fill: "backwards"
        }
      );
    }
  }, Ie = () => {
    const G = g.current, P = u.current, X = N.current;
    if (!rt(G) || !P || !X) {
      r == null || r();
      return;
    }
    if (A(), nt()) {
      G.animate([{ opacity: 1 }, { opacity: 0 }], {
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
    }), mn(P, [1, 0], 200, "ease-in"), P.animate(
      [
        { transform: "none" },
        { transform: `scale(${un}, ${fn})` }
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
      Ie();
      return;
    }
    o == null || o(), J();
  }, [e]), l.useLayoutEffect(() => {
    const G = g.current;
    if (!G)
      return;
    const P = G.getBoundingClientRect(), X = F.current;
    if (F.current = { width: P.width, height: P.height }, !k.current) {
      k.current = !0;
      return;
    }
    const te = u.current;
    !e || !X || !rt(te) || !P.width || !P.height || nt() || (Bt(te), te.animate(
      [
        {
          transform: `scale(${X.width / P.width}, ${X.height / P.height})`
        },
        { transform: "none" }
      ],
      { duration: be.duration, easing: be.easing }
    ));
  }, [n]), /* @__PURE__ */ E(
    T,
    {
      ref: M,
      onMouseEnter: s.onMouseEnter,
      onMouseLeave: s.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": a,
      sx: {
        position: "relative",
        borderRadius: `${Gt}px`,
        p: `${Co}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -So - 2,
          width: So + 2
        }
      },
      children: [
        /* @__PURE__ */ E(
          T,
          {
            ref: u,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Ut,
              bottom: -Ut,
              left: -er,
              right: -Li,
              pointerEvents: "none",
              // The rail icon's centre: the tile row is level with it
              // (half the title below the panel's middle), one gap
              // plus half the rail's padding to the left
              transformOrigin: `${er - _i}px calc(50% + ${Jo / 2}px)`,
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
                          id: `${_}-shadow`,
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
                          id: `${_}-outside`,
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
                    /* @__PURE__ */ t("g", { mask: `url(#${_}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: w,
                        transform: "translate(0 12)",
                        fill: i ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${_}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                _t,
                {
                  ref: m,
                  isDark: i,
                  solid: c,
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
                        id: `${_}-rim`,
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
                        stroke: i ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)",
                        strokeWidth: "1"
                      }
                    ),
                    /* @__PURE__ */ E(
                      "radialGradient",
                      {
                        ref: I,
                        id: `${_}-glint`,
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
                        ref: h,
                        fill: "none",
                        stroke: `url(#${_}-glint)`,
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
        /* @__PURE__ */ t(T, { ref: N, sx: { position: "relative" }, children: x })
      ]
    }
  );
}, rs = l.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: s,
    onClick: i,
    onKeyDown: c,
    onFocus: a,
    onHoverStart: u,
    accentColor: d,
    activeForegroundColor: x,
    labelColor: g,
    iconColor: m,
    isDark: f
  }, h) => {
    const I = Rt(), b = l.useContext(qt), S = (y) => {
      const v = y.currentTarget.getBoundingClientRect();
      y.currentTarget.style.setProperty(
        "--mx",
        `${(y.clientX - v.left) / v.width * 100}%`
      ), y.currentTarget.style.setProperty(
        "--my",
        `${(y.clientY - v.top) / v.height * 100}%`
      );
    }, w = (y) => {
      const v = y.currentTarget;
      !rt(v) || nt() || v.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.04, 0.96)", offset: 0.22 },
          { transform: "scale(0.98, 1.025)", offset: 0.5 },
          { transform: "scale(1.01, 0.995)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, R = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, _ = {
      ...Sr(f, I),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": R
    };
    return /* @__PURE__ */ E(
      st,
      {
        ref: h,
        component: "a",
        href: e.path,
        role: "menuitem",
        tabIndex: s,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: i,
        onKeyDown: c,
        onFocus: a,
        onPointerMove: S,
        onMouseEnter: w,
        onPointerEnter: (y) => u(y.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: et,
          height: et,
          borderRadius: `${Ii}px`,
          color: n ? x : g,
          bgcolor: n ? d : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Kt(d, f) : {},
          transition: `translate ${be.duration}ms ${be.easing}, scale ${be.duration}ms ${be.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${ri} ${wo.duration}ms ${wo.easing} both`,
          animationDelay: `${Ti + r * Ci}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: Et,
            color: n ? x : m
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
          } : _,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : _,
            "& [data-tile-name]": R,
            outline: "2px solid",
            outlineColor: d,
            outlineOffset: 2
          },
          [Ae]: {
            animation: "none",
            transition: "none",
            "&:active": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(T, { sx: { position: "relative", display: "flex" }, children: o }),
          /* @__PURE__ */ t(
            T,
            {
              component: "span",
              "data-tile-name": !0,
              sx: {
                ...br(f, b),
                position: "absolute",
                top: "100%",
                left: "50%",
                translate: "-50% 8px",
                transformOrigin: "top center",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: 0,
                scale: "calc(0.6 / var(--dock-scale, 1))",
                transition: `opacity 140ms ease, scale ${be.duration}ms ${be.easing}`,
                zIndex: 1,
                [Ae]: { transition: "opacity 140ms ease" }
              },
              children: e.text
            }
          )
        ]
      }
    );
  }
);
rs.displayName = "FlyoutTile";
const Bi = 100, Gi = 250, zi = (e) => {
  const [o, r] = l.useState(null), n = l.useRef(o);
  n.current = o;
  const s = l.useRef(/* @__PURE__ */ new Map()), i = l.useRef(null), c = l.useRef(void 0), a = l.useRef(void 0), u = () => {
    clearTimeout(c.current), c.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, x = (S, w, R = !1) => {
    u(), d(), r({ key: S, pinned: w, focusFirst: R });
  }, g = l.useCallback((S = !1) => {
    var R, _;
    u(), d();
    const w = (R = n.current) == null ? void 0 : R.key;
    r(null), S && w && ((_ = s.current.get(w)) == null || _.focus());
  }, []), m = () => {
    u(), !(!n.current || n.current.pinned) && (d(), a.current = setTimeout(() => g(), Gi));
  };
  l.useEffect(() => {
    e || g();
  }, [e, g]), l.useEffect(
    () => () => {
      u(), d();
    },
    []
  );
  const f = o !== null;
  return l.useEffect(() => {
    if (!f)
      return;
    const S = (_) => {
      var v;
      const y = _;
      return y ? (v = i.current) != null && v.contains(y) ? !0 : [...s.current.values()].some((C) => C.contains(y)) : !1;
    }, w = (_) => {
      S(_.target) || g();
    }, R = (_) => {
      var y;
      _.key === "Escape" && g(
        !!((y = i.current) != null && y.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", w), document.addEventListener("keydown", R), () => {
      document.removeEventListener("pointerdown", w), document.removeEventListener("keydown", R);
    };
  }, [f, g]), {
    state: o,
    close: g,
    triggerProps: (S) => ({
      ref: (w) => {
        w ? s.current.set(S, w) : s.current.delete(S);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        d();
        const w = n.current;
        if (w) {
          w.key !== S && x(S, w.pinned);
          return;
        }
        u(), c.current = setTimeout(
          () => x(S, !1),
          Bi
        );
      },
      onMouseLeave: m,
      onClick: (w) => {
        if (w.detail === 0) {
          x(S, !0, !0);
          return;
        }
        const R = n.current;
        (R == null ? void 0 : R.key) === S && R.pinned ? g() : x(S, !0);
      },
      onKeyDown: (w) => {
        w.key === "ArrowRight" && (w.preventDefault(), x(S, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: d,
      onMouseLeave: m
    },
    onRailLeafEnter: () => {
      u(), n.current && !n.current.pinned && g();
    },
    getTrigger: (S) => s.current.get(S) ?? null
  };
}, Hi = 264, Ui = 72, gn = 64, lo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Xi = 16, Ki = 14, ji = 4, Vi = 2.5, xn = "0.7rem", bn = 22, yn = Re(wr), ut = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
  const i = l.useRef(null), [c, a] = l.useState(!1), u = l.useCallback(() => {
    const d = i.current;
    d && a(d.scrollWidth > d.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    u();
  }, [u, e]), l.useEffect(() => {
    const d = i.current;
    if (!d)
      return;
    const x = new ResizeObserver(() => u());
    return x.observe(d), () => x.disconnect();
  }, [u]), /* @__PURE__ */ t(
    Ee,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !c,
      disableFocusListener: !c,
      disableTouchListener: !c,
      children: /* @__PURE__ */ t(
        de,
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
}, Yi = ({
  open: e,
  size: o = Xi
}) => e ? /* @__PURE__ */ t(Ds, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Ls, { sx: { fontSize: o, opacity: 0.75 } }), vn = ({ open: e }) => /* @__PURE__ */ t(
  ks,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), uo = 600, gt = `${Io}px`, go = 6, qi = (e) => {
  const o = Math.max(0, e - go);
  return {
    pl: `${Math.max(0, go - o)}px`,
    pr: `${Math.max(0, go - e)}px`
  };
};
function Zi(e, o) {
  const [r, n] = l.useState(0);
  return l.useLayoutEffect(() => {
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
const fo = 8;
function Qi(e, o, r) {
  l.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const s = (u) => {
      const d = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((f) => f.offsetHeight > 0).pop();
      if (!d)
        return;
      const x = n.getBoundingClientRect(), g = d.getBoundingClientRect();
      let m = 0;
      g.top < x.top + fo ? m = g.top - x.top - fo : g.bottom > x.bottom - fo && (m = g.bottom - x.bottom + fo), m !== 0 && n.scrollBy({ top: m, behavior: u });
    }, i = requestAnimationFrame(() => s("smooth")), c = window.setTimeout(() => s("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const tr = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: s,
  logo: i,
  title: c,
  onBrandClick: a,
  brandMenuOpen: u,
  showHeaderBar: d = !1,
  headerBackgroundColor: x,
  headerForegroundColor: g,
  brandColor: m,
  activeAccentColor: f = "#01584f",
  groupAccentColor: h,
  activeForegroundColor: I,
  foregroundColor: b,
  surfaceBackgroundColor: S,
  flyoutSurfaceColor: w,
  collapsed: R = !1,
  expandedWidth: _ = Hi,
  collapsedWidth: y = Ui,
  showLabels: v = !1,
  topInsetPx: C = 0,
  topContent: U,
  footer: B,
  submenuMode: N = "inline"
}) => {
  var ue;
  const F = He(), k = F.palette.mode === "dark", M = l.useContext(qt), A = N === "flyout" && R && !v, J = zi(A), Ie = l.useRef(null), G = l.useRef(null), P = l.useRef(null);
  Qi(P, r, R);
  const X = Zi(P, A), te = mi(A, k, ((ue = J.state) == null ? void 0 : ue.key) ?? null), oe = xi({
    enabled: A,
    isDark: k,
    color: f,
    containerRef: G
  }), { close: $ } = J;
  l.useEffect(() => {
    $();
  }, [r, $]);
  const [z, V] = l.useState(
    {}
  ), H = I ?? Zo(f), K = {
    bgcolor: f,
    color: H,
    "& .MuiListItemIcon-root": { color: H }
  }, ie = {
    bgcolor: f,
    color: H,
    borderRadius: "8px"
  }, W = h ?? Xt(f), Oe = S ?? (k ? F.palette.background.paper : "#ffffff"), ae = b ?? (k ? "text.primary" : f), Fe = x ?? Oe, $e = g ?? (x ? Zo(Fe) : b ?? (k ? F.palette.text.primary : f)), ce = Xt($e), le = (p) => {
    n == null || n(p);
  }, ge = (p) => p ? {
    component: "a",
    href: p,
    onClick: (L) => {
      wt(L) && (L.preventDefault(), le(p));
    }
  } : {}, ne = (p, L) => {
    V((Y) => ({ ...Y, [p]: !L }));
  }, Ue = (p, L) => z[L] ?? Qe(p, r), Me = (p, L, Y) => ({
    color: p ? H : ae,
    bgcolor: p ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: p ? H : ae,
      minWidth: Y
    },
    "&:hover": p || v ? K : { bgcolor: L }
  }), Xe = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": K
  }, pt = (p) => {
    const L = Be(p, r), Y = /* @__PURE__ */ E(
      co,
      {
        disabled: !p.path,
        selected: L,
        ...ge(p.path),
        "data-testid": `sidebar-item-${p.text}`,
        "data-active": L ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...p.action && { pr: 6 },
          ...p.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...Me(
            L,
            W,
            p.subtitle ? 48 : 36
          ),
          ...Xe
        },
        children: [
          /* @__PURE__ */ t(we, { children: p.icon }),
          /* @__PURE__ */ t(
            ze,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                ut,
                {
                  text: p.text,
                  fontWeight: uo
                }
              ),
              secondary: p.subtitle ? /* @__PURE__ */ t(
                T,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    ut,
                    {
                      text: p.subtitle,
                      fontSize: "0.8125rem"
                    }
                  )
                }
              ) : void 0,
              sx: p.subtitle ? { my: 0 } : void 0
            }
          )
        ]
      },
      p.text
    );
    if (!p.action)
      return Y;
    const { action: D } = p;
    return /* @__PURE__ */ E(T, { sx: { position: "relative" }, children: [
      Y,
      /* @__PURE__ */ t(Ee, { title: D.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        Se,
        {
          "aria-label": D.label,
          "data-testid": `sidebar-action-${p.text}`,
          onClick: () => {
            D.onClick(), s == null || s();
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
            borderColor: L ? "rgba(255, 255, 255, 0.35)" : W,
            color: L ? H : ae,
            "&:hover": {
              bgcolor: L ? "rgba(255, 255, 255, 0.15)" : W
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: L ? H : ae,
              outlineOffset: 1
            }
          },
          children: D.icon
        }
      ) })
    ] }, p.text);
  }, it = (p) => {
    const L = Qe(p, r), Y = Be(p, r), D = vt("", p), j = Ue(p, D);
    return /* @__PURE__ */ E(
      T,
      {
        "data-testid": `sidebar-group-${p.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: L ? W : "transparent"
        },
        children: [
          /* @__PURE__ */ E(
            co,
            {
              onClick: () => ne(D, j),
              "data-testid": `sidebar-item-${p.text}`,
              "data-active": Y ? "true" : "false",
              "aria-expanded": j,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Me(Y, W, 36)
              },
              children: [
                /* @__PURE__ */ t(we, { children: p.icon }),
                /* @__PURE__ */ t(
                  ze,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      ut,
                      {
                        text: p.text,
                        fontWeight: uo
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(vn, { open: j })
              ]
            }
          ),
          /* @__PURE__ */ t(qr, { in: j, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            T,
            {
              "data-testid": `sidebar-children-${p.text}`,
              sx: { pb: 0.5 },
              children: p.subitems.map(
                (Z) => Zt(Z, D, 1)
              )
            }
          ) })
        ]
      },
      p.text
    );
  }, Zt = (p, L, Y) => {
    const D = vt(L, p), j = ji + (Y - 1) * Vi;
    if (St(p)) {
      const xe = Qe(p, r), fe = Be(p, r), pe = Ue(p, D);
      return /* @__PURE__ */ E(T, { "data-testid": `sidebar-group-${p.text}`, children: [
        /* @__PURE__ */ E(
          co,
          {
            onClick: () => ne(D, pe),
            "data-testid": `sidebar-subitem-${p.text}`,
            "data-active": xe ? "true" : "false",
            "aria-expanded": pe,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: j,
              ...Me(fe, "action.hover", 32)
            },
            children: [
              p.icon ? /* @__PURE__ */ t(we, { children: p.icon }) : null,
              /* @__PURE__ */ t(
                ze,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    ut,
                    {
                      text: p.text,
                      fontWeight: uo
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(vn, { open: pe })
            ]
          }
        ),
        /* @__PURE__ */ t(qr, { in: pe, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(T, { "data-testid": `sidebar-children-${p.text}`, children: p.subitems.map(
          (Oo) => Zt(Oo, D, Y + 1)
        ) }) })
      ] }, D);
    }
    const Z = Be(p, r);
    return /* @__PURE__ */ E(
      co,
      {
        selected: Z,
        disabled: !p.path,
        ...ge(p.path),
        "data-testid": `sidebar-subitem-${p.text}`,
        "data-active": Z ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: j,
          ...Me(Z, "action.hover", 32),
          ...Xe
        },
        children: [
          p.icon ? /* @__PURE__ */ t(we, { children: p.icon }) : null,
          /* @__PURE__ */ t(
            ze,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                ut,
                {
                  text: p.text,
                  fontWeight: uo
                }
              )
            }
          )
        ]
      },
      D
    );
  }, Qt = (p, L, Y, D, j, Z) => {
    const xe = !j, fe = /* @__PURE__ */ E(
      Se,
      {
        "aria-label": L,
        disabled: xe,
        ...ge(j),
        onMouseEnter: A ? J.onRailLeafEnter : void 0,
        ...A ? { [jt]: "" } : {},
        "data-testid": (Z == null ? void 0 : Z.testId) ?? `sidebar-item-${L}`,
        "data-active": D ? "true" : "false",
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
          color: D ? H : ae,
          bgcolor: D ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: bn
          },
          "&:hover": ie,
          ...lo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: A ? me : 44,
          height: A ? me : 44,
          color: D ? H : ae,
          bgcolor: D ? f : "transparent",
          borderRadius: D ? "8px" : "50%",
          "&:hover": {
            bgcolor: D ? f : Z != null && Z.insideGroup ? "action.hover" : W,
            borderRadius: "8px"
          },
          ...lo,
          ...A ? eo(D) : {}
        },
        children: [
          Y,
          v ? /* @__PURE__ */ t(
            ut,
            {
              text: L,
              variant: "caption",
              center: !0,
              fontSize: xn
            }
          ) : null
        ]
      }
    );
    return v ? xe ? /* @__PURE__ */ t("span", { children: fe }, p) : /* @__PURE__ */ t(l.Fragment, { children: fe }, p) : /* @__PURE__ */ t(
      Ee,
      {
        title: L,
        placement: "right",
        arrow: !A,
        ...A ? at : {},
        children: xe ? /* @__PURE__ */ t("span", { children: fe }) : fe
      },
      p
    );
  }, Jt = {
    position: "relative",
    '& :is(button, a, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, eo = (p) => ({
    borderRadius: `${ee}px`,
    "& .MuiSvgIcon-root": { fontSize: Et },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...p ? { bgcolor: "transparent" } : {},
    transition: `transform ${yn.duration}ms ${yn.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), at = {
    slotProps: {
      tooltip: { sx: br(k, M) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, Tt = (p) => {
    var j;
    const L = Qe(p, r), Y = vt("", p), D = ((j = J.state) == null ? void 0 : j.key) === Y;
    return /* @__PURE__ */ t(
      T,
      {
        "data-testid": `sidebar-group-${p.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          Se,
          {
            ...J.triggerProps(Y),
            "aria-label": p.text,
            "aria-haspopup": "menu",
            "aria-expanded": D,
            "data-testid": `sidebar-item-${p.text}`,
            "data-active": L ? "true" : "false",
            "data-open": D ? "true" : "false",
            [jt]: "",
            sx: {
              position: "relative",
              width: me,
              height: me,
              color: L ? H : ae,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: L ? f : "transparent",
              ...eo(L),
              // The icon sits 4px left of centre so the arrow keeps
              // a gap to it and to the hover edge
              pl: "4px",
              pr: "12px",
              "&::after": {
                content: '""',
                position: "absolute",
                right: 4,
                top: "50%",
                transform: "translateY(-50%)",
                borderStyle: "solid",
                borderWidth: "4px 0 4px 5px",
                borderColor: "transparent transparent transparent currentColor",
                opacity: 0.55
              },
              ...lo
            },
            children: p.icon
          }
        )
      },
      p.text
    );
  }, to = (p) => {
    const L = Qe(p, r), Y = Be(p, r), D = vt("", p), j = Ue(p, D), Z = /* @__PURE__ */ E(
      Se,
      {
        "aria-label": p.text,
        "aria-expanded": j,
        onClick: () => ne(D, j),
        "data-testid": `sidebar-item-${p.text}`,
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
          color: Y ? H : ae,
          bgcolor: Y ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": v ? { bgcolor: f, color: H } : {
            bgcolor: Y ? f : "transparent"
          },
          ...lo
        },
        children: [
          v ? /* @__PURE__ */ t(
            T,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: bn
                }
              },
              children: p.icon
            }
          ) : p.icon,
          v ? /* @__PURE__ */ t(
            ut,
            {
              text: p.text,
              variant: "caption",
              center: !0,
              fontSize: xn
            }
          ) : null,
          /* @__PURE__ */ t(Yi, { open: j, size: Ki })
        ]
      }
    ), xe = v ? Z : /* @__PURE__ */ t(Ee, { title: p.text, placement: "right", arrow: !0, children: Z });
    return /* @__PURE__ */ E(
      T,
      {
        "data-testid": `sidebar-group-${p.text}`,
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
          bgcolor: L ? W : "transparent",
          ...v ? {} : { "&:hover": { bgcolor: W } }
        },
        children: [
          xe,
          j ? hr(p.subitems, p.icon).map(
            ({ sub: fe, icon: pe }) => Qt(
              fe.path,
              fe.text,
              pe,
              Be(fe, r),
              fe.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${fe.text}`
              }
            )
          ) : null
        ]
      },
      p.text
    );
  }, ct = (p) => /* @__PURE__ */ t(
    T,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Qt(
        p.text,
        p.subtitle ? `${p.text} · ${p.subtitle}` : p.text,
        p.icon,
        Be(p, r),
        p.path,
        { testId: `sidebar-item-${p.text}` }
      )
    },
    p.text
  ), Ct = (p) => St(p) ? A ? Tt(p) : R ? to(p) : it(p) : R ? ct(p) : pt(p), At = (p) => /* @__PURE__ */ t(
    Ne,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: R ? "center" : "stretch"
      },
      children: p.map(Ct)
    }
  ), Ot = R ? y : _, Ao = () => {
    var xe, fe;
    const { state: p } = J, L = p ? [...e, ...o].find(
      (pe) => St(pe) && vt("", pe) === p.key
    ) ?? null : null, Y = L ? ((xe = Ie.current) == null ? void 0 : xe.getBoundingClientRect().right) ?? y : y, D = L ? ((fe = Ie.current) == null ? void 0 : fe.closest("[data-rail-surface]")) ?? Ie.current : null, j = D == null ? void 0 : D.getBoundingClientRect(), Z = D && j ? {
      left: j.left,
      top: j.top,
      width: j.width,
      height: j.height,
      radius: parseFloat(
        getComputedStyle(D).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Mi,
      {
        group: L,
        groupKey: L ? p.key : null,
        anchor: L ? J.getTrigger(p.key) : null,
        railEdge: Y,
        railShape: Z,
        activePath: r,
        focusFirst: p == null ? void 0 : p.focusFirst,
        onNavigate: le,
        onClose: J.close,
        panelProps: J.flyoutProps,
        accentColor: f,
        activeForegroundColor: H,
        solidSurface: w ?? Oe
      }
    );
  }, ht = d ? /* @__PURE__ */ t(
    T,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...A ? { pt: "12px", pb: "12px" } : {
          height: gn,
          minHeight: gn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: Fe
      },
      children: i || c ? /* @__PURE__ */ t(
        vo,
        {
          logo: i,
          title: R ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: m ?? $e,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, oo = !d && i ? /* @__PURE__ */ t(
    T,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: A ? gt : 1
      },
      children: /* @__PURE__ */ t(
        vo,
        {
          logo: i,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: m ?? $e,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, mt = v ? 0.5 : A ? 0.75 : R ? 1 : 1.5;
  return /* @__PURE__ */ t(It.Provider, { value: A, children: /* @__PURE__ */ E(
    T,
    {
      ref: Ie,
      ...te.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": R ? "true" : "false",
      "data-labeled": v ? "true" : "false",
      sx: {
        width: Ot,
        minWidth: Ot,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Oe,
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
        ...A ? Jt : {}
      },
      children: [
        te.lens,
        ht ?? oo,
        U ? /* @__PURE__ */ t(
          T,
          {
            sx: {
              flexShrink: 0,
              px: mt,
              pt: A ? 0 : 1,
              pb: A ? 0 : 1
            },
            children: U
          }
        ) : null,
        /* @__PURE__ */ t(
          T,
          {
            ref: P,
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
              ...A ? {
                // Chrome lets `scrollbar-width`/`-color` override
                // the ::-webkit-scrollbar rules, and its `thin` is
                // 11px — too wide for the 52px rail. So only
                // browsers without those rules (Firefox) get them;
                // Chrome and Safari draw the 6px bar below.
                "@supports not selector(::-webkit-scrollbar)": {
                  scrollbarWidth: "thin",
                  scrollbarColor: "transparent transparent",
                  "&:hover, &:has(:focus-visible)": {
                    scrollbarColor: (p) => `${p.palette.divider} transparent`
                  }
                }
              } : {
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
                "&:hover, &:has(:focus-visible)": {
                  scrollbarColor: (p) => `${p.palette.divider} transparent`
                }
              },
              // Safari only honours the thumb rule once the bar
              // itself is styled.
              "&::-webkit-scrollbar": {
                width: A ? go : 8
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: 4
              },
              "&:hover::-webkit-scrollbar-thumb, &:has(:focus-visible)::-webkit-scrollbar-thumb": {
                backgroundColor: (p) => p.palette.divider
              },
              // On the floating rail the bar (when it takes space at
              // all) stands in for the right padding, and the left
              // padding follows it, so the 40px column keeps equal
              // gaps in the capsule whether the bar is classic,
              // overlay or absent. (The inline collapsed rail keeps
              // its padding: its open groups tint the full row width.)
              ...A ? qi(X) : { px: mt },
              pt: C && !d ? `${C}px` : A ? gt : 1,
              pb: A ? gt : 2
            },
            children: /* @__PURE__ */ E(
              T,
              {
                ref: G,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  oe.glass,
                  At(e),
                  o.length > 0 ? /* @__PURE__ */ E(
                    T,
                    {
                      sx: { mt: "auto", pt: A ? gt : 2 },
                      children: [
                        B ? null : /* @__PURE__ */ t(
                          ot,
                          {
                            sx: {
                              mb: A ? gt : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        At(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        B ? /* @__PURE__ */ t(
          T,
          {
            sx: {
              flexShrink: 0,
              px: mt,
              pb: 1.5,
              ...A ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: Et
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              T,
              {
                sx: {
                  borderTop: `1px solid ${ce}`,
                  pt: A ? gt : 1.5
                },
                children: B
              }
            )
          }
        ) : null,
        A ? Ao() : null
      ]
    }
  ) });
}, or = "var(--lumora-content-padding, 0px)", Sn = `calc(${or} * -1)`, Jc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: c
}) => /* @__PURE__ */ t(
  T,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Sn,
        mt: o ? Sn : 0,
        // Space below it, like any other block on the page
        mb: or,
        px: i ? or : 0,
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
), Ji = ({ keys: e }) => /* @__PURE__ */ t(
  T,
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
), _e = {
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
}, Te = {
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
}, yt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, ns = Eo(), ke = ns.typography.pxToRem, Ir = (e) => {
  const o = e === "dark", r = [...ns.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? _e[300] : _e[200],
        main: _e[400],
        dark: _e[700],
        contrastText: _e[50]
      },
      info: o ? {
        light: _e[500],
        main: _e[700],
        dark: _e[900],
        contrastText: _e[300]
      } : {
        light: _e[100],
        main: _e[300],
        dark: _e[600],
        contrastText: Te[50]
      },
      warning: o ? { light: bt[400], main: bt[500], dark: bt[700] } : { light: bt[300], main: bt[400], dark: bt[800] },
      error: o ? { light: yt[400], main: yt[500], dark: yt[700] } : { light: yt[300], main: yt[400], dark: yt[800] },
      success: o ? { light: xt[400], main: xt[500], dark: xt[700] } : { light: xt[300], main: xt[400], dark: xt[800] },
      grey: Te,
      divider: o ? Ge(Te[700], 0.6) : Ge(Te[300], 0.4),
      background: o ? { default: Te[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Te[400] } : { primary: Te[800], secondary: Te[600] },
      action: o ? {
        hover: Ge(Te[600], 0.2),
        selected: Ge(Te[600], 0.3)
      } : {
        hover: Ge(Te[200], 0.2),
        selected: Ge(Te[200], 0.3)
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
}, ea = 6, ta = 8, wn = (e, o) => typeof e == "object" ? e[o] : e, Uo = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: c = !0,
  contentPadding: a = Yn,
  sidebarBackgroundColor: u,
  contentBackgroundColor: d,
  content: x
}) => {
  const g = Wn(r.breakpoints.down("md")), m = e === "dark", f = Zn({
    showSidebar: c,
    isMobile: g,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), h = _o(s, n) ? {
    gutterPx: ft,
    radiusPx: Vn
  } : void 0, I = mo, b = Qn(
    wn(u, e),
    m
  ), S = Jn(
    wn(d, e),
    m
  ), w = qn(
    a,
    r
  ), R = h ? /* @__PURE__ */ E(Pt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t(De, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Pt,
      {
        alignItems: "center",
        spacing: `${Io}px`,
        sx: { mt: 2 },
        children: Array.from({ length: ta }, (_, y) => /* @__PURE__ */ t(
          q,
          {
            sx: {
              width: me,
              height: me,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ t(
              De,
              {
                variant: "rounded",
                width: Et,
                height: Et
              }
            )
          },
          y
        ))
      }
    )
  ] }) : /* @__PURE__ */ E(Pt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(De, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(q, { sx: { height: 8 } }),
    Array.from({ length: ea }, (_, y) => /* @__PURE__ */ t(De, { variant: "rounded", width: 28, height: 28 }, y))
  ] });
  return /* @__PURE__ */ t(yo, { theme: o, children: /* @__PURE__ */ E(
    q,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: S
      },
      children: [
        g && /* @__PURE__ */ E(
          q,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: I,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: b,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(De, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(De, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(q, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(De, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !g && f > 0 && /* @__PURE__ */ t(
          q,
          {
            sx: {
              position: "relative",
              width: f,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              q,
              {
                sx: h ? {
                  position: "fixed",
                  top: h.gutterPx,
                  bottom: h.gutterPx,
                  left: h.gutterPx,
                  width: f - 2 * h.gutterPx,
                  borderRadius: `${h.radiusPx}px`,
                  bgcolor: b
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: f,
                  bgcolor: b
                },
                children: R
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          q,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              // The variables the wrapper's <main> sets, so a host's `content`
              // that sizes itself from them measures as it will in the app
              "--lumora-content-padding": w,
              "--lumora-sticky-top": g ? `${I}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: g ? `${I}px` : 0
            },
            children: x ?? /* @__PURE__ */ E(Ce, { children: [
              /* @__PURE__ */ t(De, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(De, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(Pt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: g ? 2 : 4 }, (_, y) => /* @__PURE__ */ t(
                De,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                y
              )) }),
              /* @__PURE__ */ t(De, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, rr = Eo(Ir("light")), xo = Eo(Ir("dark")), oa = (e) => e === "dark" ? xo : rr, ra = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = Pn();
  if (!o) {
    const i = oa(e);
    return /* @__PURE__ */ E(yo, { theme: i, children: [
      /* @__PURE__ */ t(Yo, {}),
      /* @__PURE__ */ t(
        Uo,
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
  return /* @__PURE__ */ E(yo, { theme: rr, children: [
    /* @__PURE__ */ t(Yo, {}),
    /* @__PURE__ */ t(
      Fs,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: xo.palette.background.default,
            color: xo.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(q, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ t(
      Uo,
      {
        themeMode: "light",
        muiTheme: rr,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(q, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Uo,
      {
        themeMode: "dark",
        muiTheme: xo,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class Q extends Error {
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
}, he = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Ye = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, na = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ye.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Ye.REFRESH_TOKEN
      ), r = localStorage.getItem(Ye.USER);
      e && !localStorage.getItem(he.ACCESS_TOKEN) && localStorage.setItem(he.ACCESS_TOKEN, e), o && !localStorage.getItem(he.REFRESH_TOKEN) && localStorage.setItem(
        he.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(he.USER) && localStorage.setItem(he.USER, r), (e || o || r) && (localStorage.removeItem(Ye.ACCESS_TOKEN), localStorage.removeItem(Ye.REFRESH_TOKEN), localStorage.removeItem(Ye.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Xo = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Q(
        "localStorage is not available",
        re.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Q(
      "Storage quota exceeded. Please clear browser data.",
      re.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Q(
      "Access to localStorage is denied. Please check browser settings.",
      re.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Q(
      "Failed to access storage",
      re.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Ko = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Q(
        "localStorage is not available",
        re.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Q(
      "Storage quota exceeded. Please clear browser data.",
      re.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Q(
      "Access to localStorage is denied. Please check browser settings.",
      re.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Q(
      "Failed to write to storage",
      re.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, ss = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Vt = () => {
  try {
    na();
    const e = Xo(he.ACCESS_TOKEN), o = Xo(he.REFRESH_TOKEN), r = Xo(he.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), ss(he.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Q ? e : new Q(
      "Failed to retrieve authentication tokens",
      re.UNKNOWN_ERROR,
      e
    );
  }
}, sa = () => {
  try {
    const { accessToken: e, refreshToken: o } = Vt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Q(
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
      error: e instanceof Q ? e : new Q(
        "Authentication check failed",
        re.UNKNOWN_ERROR,
        e
      )
    };
  }
}, is = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Q(
        "At least one token must be provided",
        re.TOKEN_INVALID
      );
    return e && Ko(he.ACCESS_TOKEN, e), o && Ko(he.REFRESH_TOKEN, o), r && Ko(he.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Q ? n : new Q(
        "Failed to store tokens",
        re.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Yt = () => {
  try {
    return [
      he.ACCESS_TOKEN,
      he.REFRESH_TOKEN,
      he.USER,
      // Also clear legacy keys for complete cleanup
      Ye.ACCESS_TOKEN,
      Ye.REFRESH_TOKEN,
      Ye.USER
    ].map((n) => ss(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Q ? e : new Q(
        "Failed to clear tokens",
        re.LOGOUT_FAILED,
        e
      )
    };
  }
}, ia = () => {
  try {
    const { user: e } = Vt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Q ? e : new Q(
        "Failed to retrieve user data",
        re.UNKNOWN_ERROR,
        e
      )
    };
  }
}, el = (e) => {
  if (!(e instanceof Q))
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
}, nr = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof Q ? e.code : "UNKNOWN",
    timestamp: e instanceof Q ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof Q && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, aa = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = en.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, s = [];
  const i = (c, a) => {
    s.forEach(({ resolve: u, reject: d }) => {
      c ? d(c) : a && u(a);
    }), s = [];
  };
  return o.interceptors.request.use(
    (c) => {
      const { accessToken: a } = Vt();
      return a && c.headers && (c.headers.Authorization = `Bearer ${a}`), c;
    },
    (c) => Promise.reject(c)
  ), o.interceptors.response.use(
    (c) => c,
    async (c) => {
      var m;
      const a = c.config, u = (m = c.response) == null ? void 0 : m.status, d = (a == null ? void 0 : a.url) || "", x = d.includes("/auth/refresh");
      if (u !== 401 || a._retry || x)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: g } = Vt();
      if (!g) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return nr(f, "AxiosClient - Token Refresh"), Yt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((f, h) => {
          s.push({ resolve: f, reject: h });
        }).then((f) => {
          const {
            accessToken: h,
            refreshToken: I
          } = f;
          if (a.headers && (a.headers.Authorization = `Bearer ${h}`), d.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const b = JSON.parse(
                  a.data || "{}"
                );
                b.refresh_token = I, a.data = JSON.stringify(b);
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
        }).catch((f) => Promise.reject(f));
      r = !0, n = en.post(
        `${e}/auth/refresh`,
        {
          refresh_token: g
        }
      );
      try {
        const f = await n, { accessToken: h, refreshToken: I } = f.data;
        if (is(h, I, null), i(null, {
          accessToken: h,
          refreshToken: I
        }), a.headers && (a.headers.Authorization = `Bearer ${h}`), d.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const b = JSON.parse(
                a.data || "{}"
              );
              b.refresh_token = I, a.data = JSON.stringify(b);
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
      } catch (f) {
        return nr(
          f,
          "AxiosClient - Token Refresh Failed"
        ), i(f), Yt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, ca = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Vt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return is(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      nr(s, "TokenValidator - Refresh Failed");
    }
  return Yt(), o ? o() : window.location.href = "/login", !1;
}, zt = ({ size: e = 20 }) => /* @__PURE__ */ E(
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
), En = Re(wr), Ve = "#09C1AE", bo = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ve} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), la = (e) => ({
  ...bo(ee, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${ee - 2}px`,
    zIndex: 1,
    background: `${Kt(Ve, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), Rn = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = Er(), u = l.useContext(It), d = He().palette.mode === "dark", x = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", g = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ E(
    st,
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
        borderColor: r ? Ve : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: i,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Ve}`,
          outlineOffset: 2
        },
        ...n && bo(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(zt, { size: 20 }),
        /* @__PURE__ */ t(
          de,
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
        s && /* @__PURE__ */ t(Ji, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && u && qo ? /* @__PURE__ */ t(Ee, { title: x, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    Se,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: me,
        height: me,
        borderRadius: `${ee}px`,
        ...Kt(Ve, d, "clear"),
        ...r && {
          boxShadow: `${Kt(Ve, d, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${En.duration}ms ${En.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [Ae]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && la(d)
      },
      children: /* @__PURE__ */ t(zt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Ee, { title: x, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    Se,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": u || void 0,
      sx: {
        width: u ? me : 44,
        height: u ? me : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Ve : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && bo(8, "background.paper")
      },
      children: /* @__PURE__ */ t(zt, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ t(Ee, { title: x, placement: "left", children: /* @__PURE__ */ t(
    Se,
    {
      ...g,
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
        outline: r ? `2px solid ${Ve}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Ve}` },
        ...n && bo(16, "background.paper")
      },
      children: /* @__PURE__ */ t(T, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(zt, { size: 26 }) })
    }
  ) });
}, po = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(Ws, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ E(Bs, { children: [
  /* @__PURE__ */ t(Gs, { fontSize: "small" }),
  /* @__PURE__ */ t(de, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    de,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    Bn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Nt = 24, da = 720, ua = 1140, fa = 1250, pa = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: s,
  sidebarWidthPx: i,
  bottomOffsetPx: c,
  fullScreen: a,
  fullScreenBottom: u = "0px",
  onClose: d
}) => {
  const x = l.useRef(!1);
  l.useEffect(() => {
    const I = requestAnimationFrame(() => {
      x.current = !0;
    });
    return () => cancelAnimationFrame(I);
  }, []), l.useEffect(() => {
    if (!e || !d)
      return;
    const I = (b) => {
      b.key === "Escape" && d();
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [e, d]);
  const g = r === "docked", m = Nt + c;
  let f;
  a ? f = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : g ? f = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : f = {
    bottom: m,
    ...n === "left" ? { left: i + Nt } : { right: Nt },
    width: s,
    maxWidth: `calc(100vw - ${Nt * 2}px)`,
    height: `min(${da}px, calc(100vh - ${m + Nt}px))`,
    borderRadius: "12px"
  };
  const h = /* @__PURE__ */ t(
    dr,
    {
      role: g ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: g ? ua : fa,
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
  return g ? /* @__PURE__ */ t(
    Hs,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...x.current ? {} : { timeout: { enter: 0 } },
      children: h
    }
  ) : /* @__PURE__ */ t(
    zs,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: h
    }
  );
}, ha = 180, In = 250, ma = "#01584F", ga = ({
  text: e,
  testId: o
}) => {
  const r = l.useRef(null), [n, s] = l.useState(!1), i = l.useCallback(() => {
    const c = r.current;
    c && s(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    i();
  }, [i, e]), l.useEffect(() => {
    const c = r.current;
    if (!c)
      return;
    const a = new ResizeObserver(() => i());
    return a.observe(c), () => a.disconnect();
  }, [i]), /* @__PURE__ */ t(
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
        de,
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
}, as = (e, o, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : o, c = e ? ma : o;
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
}, cs = ({ link: e }) => /* @__PURE__ */ E(Ne, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ t(
    T,
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
    ga,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), ls = (e, o, r) => r ? e : /* @__PURE__ */ t(Ee, { title: o, placement: "right", arrow: !0, children: e }), xa = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: c
}) => {
  const a = He(), [u, d] = l.useState(null), [x, g] = l.useState(!1), m = l.useRef(
    null
  ), f = l.useRef(null), h = l.useRef(null), I = l.useRef(!1), b = l.useRef(!1), S = l.useId(), w = () => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, R = () => {
    w(), m.current = setTimeout(() => {
      g(!1), m.current = null;
    }, ha);
  }, _ = () => {
    w(), g(!0);
  };
  l.useEffect(() => {
    if (!x)
      return;
    const N = (F) => {
      var k;
      F.key === "Escape" && (g(!1), (k = h.current) == null || k.focus());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [x]), l.useEffect(() => {
    if (!x || !b.current)
      return;
    const N = globalThis.requestAnimationFrame(() => {
      var k;
      const F = (k = f.current) == null ? void 0 : k.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame(N);
  }, [x]);
  const y = Qe(e, o), { activeBg: v, sx: C } = as(
    s,
    n,
    y,
    c
  ), U = /* @__PURE__ */ t(
    Se,
    {
      ref: h,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        I.current || _();
      },
      onBlur: (N) => {
        var k;
        const F = N.relatedTarget;
        F && ((k = f.current) != null && k.contains(F)) || R();
      },
      onKeyDown: (N) => {
        N.key === "ArrowDown" && (N.preventDefault(), b.current = !0, _());
      },
      onClick: (N) => {
        N.stopPropagation(), !(e.path && !wt(N)) && (N.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": x,
      "aria-controls": x ? S : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: C,
      children: c ? /* @__PURE__ */ t(cs, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ E(
    T,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          T,
          {
            ref: d,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              I.current = !0, _();
            },
            onMouseLeave: () => {
              I.current = !1, R();
            },
            children: ls(U, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          lr,
          {
            open: x && !!u,
            anchorEl: u,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (N) => N.zIndex.modal },
            children: /* @__PURE__ */ t(
              dr,
              {
                ref: f,
                elevation: 0,
                onMouseEnter: w,
                onMouseLeave: R,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: i,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: In,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  ur,
                  {
                    id: S,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: In
                    },
                    children: B(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function B(N, F, k) {
    return N.flatMap((M) => {
      const A = vt(F, M);
      return St(M) ? [
        /* @__PURE__ */ t(
          Us,
          {
            disableSticky: !0,
            title: M.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + k * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: M.text
          },
          A
        ),
        ...B(M.subitems, A, k + 1)
      ] : [
        /* @__PURE__ */ E(
          tt,
          {
            role: "menuitem",
            title: M.text,
            disabled: !M.path,
            selected: Be(M, o),
            ...M.path && { component: "a", href: M.path },
            onClick: (J) => {
              M.path && !wt(J) || (J.preventDefault(), M.path && (r == null || r(M.path)), g(!1));
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + k * 1.5,
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
              M.icon ? /* @__PURE__ */ t(we, { children: M.icon }) : null,
              /* @__PURE__ */ t(
                ze,
                {
                  primary: M.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          A
        )
      ];
    });
  }
}, ba = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = as(
    s,
    n,
    c,
    i
  );
  return ls(
    /* @__PURE__ */ t(
      Se,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !wt(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: a,
        children: i ? /* @__PURE__ */ t(cs, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, ya = () => /* @__PURE__ */ t(
  T,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), va = () => /* @__PURE__ */ t(
  T,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), _n = (e, o) => e.map((r, n) => /* @__PURE__ */ E(l.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(ya, {}) : null
] }, n)), Sa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: c = !1
}) => {
  const a = (d, x) => St(d) ? /* @__PURE__ */ t(
    xa,
    {
      link: d,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: x,
      surfaceBackgroundColor: i,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    ba,
    {
      link: d,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: x,
      railShowTitles: c
    }
  ), u = c ? 1.25 : 1;
  return /* @__PURE__ */ E(
    Ne,
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
        _n(e, (d) => a(d, !1)),
        o.length > 0 ? /* @__PURE__ */ E(Ce, { children: [
          /* @__PURE__ */ t(va, {}),
          /* @__PURE__ */ t(T, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Ne, { gap: u, alignItems: "center", children: _n(
            o,
            (d) => a(d, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, wa = (e) => e ? Xn(e) : "USER", Ea = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), Tn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, sr = ({ count: e }) => e ? /* @__PURE__ */ t(
  T,
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
) : null, _r = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Ks,
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
    children: Ea(e)
  }
), ds = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ E(Ce, { children: [
  /* @__PURE__ */ t(_r, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ E(
    T,
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
          de,
          {
            variant: "body2",
            sx: { ...Tn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          de,
          {
            variant: "caption",
            sx: { ...Tn, opacity: 0.8, color: "inherit" },
            children: wa(o)
          }
        )
      ]
    }
  )
] }), Cn = {
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
}, us = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: s,
  showNotifications: i,
  notificationCount: c,
  onNotificationsClick: a,
  userName: u = "User",
  userRole: d,
  userAvatar: x,
  menuItems: g = [],
  showSettings: m,
  onSettingsClick: f,
  showThemeToggler: h,
  theme: I,
  onThemeToggle: b,
  onLogout: S
}) => {
  const w = (R) => () => {
    o(), R == null || R();
  };
  return /* @__PURE__ */ E(
    js,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: Cn[r].anchor,
      transformOrigin: Cn[r].transform,
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
          Ne,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              ds,
              {
                name: u,
                role: d,
                avatar: x,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(ot, {}),
        i && /* @__PURE__ */ E(tt, { onClick: w(a), children: [
          /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(Hn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ze, { children: "Notifications" }),
          /* @__PURE__ */ t(sr, { count: c })
        ] }),
        g.map((R) => /* @__PURE__ */ E(tt, { onClick: w(R.onClick), children: [
          R.icon && /* @__PURE__ */ t(we, { children: R.icon }),
          /* @__PURE__ */ t(ze, { inset: !R.icon, children: R.label }),
          /* @__PURE__ */ t(sr, { count: R.badge })
        ] }, R.key)),
        m && /* @__PURE__ */ E(tt, { onClick: w(f), children: [
          /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(Xs, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ze, { children: "Settings" })
        ] }),
        h && [
          /* @__PURE__ */ t(ot, {}, "theme-divider"),
          /* @__PURE__ */ E(T, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              de,
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
              Vs,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: I,
                onChange: (R, _) => _ && _ !== I && (b == null ? void 0 : b()),
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
                  /* @__PURE__ */ t(tn, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(tn, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(ot, {}),
        /* @__PURE__ */ E(
          tt,
          {
            onClick: w(S),
            sx: {
              color: I === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(we, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(zn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ze, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, fs = 64, Ra = 2, Ft = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: s,
  activeColor: i,
  activeBackground: c,
  ariaLabel: a,
  haspopup: u,
  isPage: d = !1,
  href: x,
  testId: g
}) => /* @__PURE__ */ E(
  st,
  {
    ...x && { component: "a", href: x },
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": u,
    "aria-expanded": u ? n : void 0,
    "aria-current": d && n ? "page" : void 0,
    "data-testid": g,
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
        T,
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
        de,
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
), Ia = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: i,
  assistantActive: c,
  showProfile: a,
  background: u,
  color: d,
  activeColor: x,
  activeBackground: g,
  pinnedLinks: m = [],
  activePath: f,
  onLinkClick: h,
  ...I
}) => {
  const b = m.filter((C) => C.path).slice(0, Ra), [S, w] = l.useState(
    null
  ), { userName: R = "User", userAvatar: _, avatarColor: y } = I, v = { color: d, activeColor: x, activeBackground: g };
  return /* @__PURE__ */ E(
    dr,
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
        height: `calc(${fs}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: u,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Ft,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Gn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...v
          }
        ),
        b.map((C) => /* @__PURE__ */ t(
          Ft,
          {
            label: C.text,
            icon: C.icon,
            href: C.path,
            onClick: (U) => {
              wt(U) && (U.preventDefault(), h == null || h(C.path));
            },
            active: Qe(C, f),
            isPage: !0,
            testId: `mobile-nav-link-${C.text}`,
            ...v
          },
          C.path
        )),
        s && /* @__PURE__ */ t(
          Ft,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ t(
              T,
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
            ...v
          }
        ),
        r && /* @__PURE__ */ t(
          Ft,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(fr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...v
          }
        ),
        a && /* @__PURE__ */ E(Ce, { children: [
          /* @__PURE__ */ t(
            Ft,
            {
              label: "Account",
              ariaLabel: `Account menu for ${R}`,
              icon: /* @__PURE__ */ t(
                _r,
                {
                  name: R,
                  avatar: _,
                  color: y,
                  size: 26
                }
              ),
              onClick: (C) => w(C.currentTarget),
              active: !!S,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...v
            }
          ),
          /* @__PURE__ */ t(
            us,
            {
              anchorEl: S,
              onClose: () => w(null),
              placement: "above-end",
              width: 280,
              ...I
            }
          )
        ] })
      ]
    }
  );
}, _a = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Ys,
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
      Ne,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(T, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Bn,
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
), Ta = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: s,
  brandMenuOpen: i,
  background: c,
  color: a,
  brandColor: u = a,
  endContent: d
}) => /* @__PURE__ */ t(
  qs,
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
    children: /* @__PURE__ */ E(Zs, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        Se,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(Gn, {})
        }
      ),
      /* @__PURE__ */ t(
        vo,
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
      d ? /* @__PURE__ */ t(T, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: d }) : null
    ] })
  }
), Tr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const c = Er(), a = l.useContext(It), u = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Ee,
    {
      title: u,
      placement: s,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        Se,
        {
          onClick: o,
          "aria-label": u,
          "data-testid": i,
          sx: {
            ...a ? {
              width: me,
              height: me
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
            Un,
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
              children: /* @__PURE__ */ t(Hn, {})
            }
          )
        }
      )
    }
  );
}, ps = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ca = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, An = Re(ts), On = Re(To), $n = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Aa = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = He().palette.mode === "dark", c = Rt(), a = l.useRef(null), u = l.useRef(null), d = (m) => {
    var f;
    m !== e && (o == null || o()), (f = (m === "light" ? a : u).current) == null || f.focus();
  }, x = (m) => {
    if (!(m.key === "Tab" || m.key === "Escape"))
      switch (m.stopPropagation(), m.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          m.preventDefault(), d(e === "light" ? "dark" : "light");
          break;
        case "Home":
          m.preventDefault(), d("light");
          break;
        case "End":
          m.preventDefault(), d("dark");
          break;
      }
  }, g = (m, f, h, I) => {
    const b = e === m;
    return /* @__PURE__ */ t(
      st,
      {
        ref: I,
        role: "radio",
        "aria-checked": b,
        "aria-label": f,
        tabIndex: b ? 0 : -1,
        onClick: () => d(m),
        "data-testid": `theme-segment-${m}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${ee}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...s && b ? Sr(i, c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": b ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: i ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${Ge(r, 0.6)}`
          },
          ...ps
        },
        children: /* @__PURE__ */ t(h, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ E(
    Ne,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: x,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${ee}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        g("light", "Light", Js, a),
        g("dark", "Dark", Qs, u)
      ]
    }
  );
}, Oa = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: s,
  userName: i,
  userEmail: c,
  roleLabel: a,
  accentColor: u,
  tint: d,
  showThemeToggler: x,
  theme: g,
  onThemeToggle: m,
  onProfileClick: f,
  onLinkClick: h,
  menuItems: I = [],
  onLogout: b,
  glass: S = !1
}) => {
  const w = He(), R = w.palette.mode === "dark", _ = l.useRef(null), y = xr(w.palette.background.paper), v = Rr({
    enabled: S,
    isDark: R,
    selector: $n,
    radius: ee
  }), [C, U] = l.useState(null);
  l.useEffect(() => {
    if (!C || typeof ResizeObserver > "u")
      return;
    const M = new ResizeObserver(() => {
      var A;
      (A = _.current) == null || A.updatePosition();
    });
    return M.observe(C), () => M.disconnect();
  }, [C]);
  const B = (M) => {
    r(), M == null || M();
  }, N = (M) => {
    r(), M.onClick ? M.onClick() : M.path && (h == null || h(M.path));
  }, F = {
    borderRadius: S ? `${ee}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, k = /* @__PURE__ */ E(Ne, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ E(T, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(de, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: i }),
      c ? /* @__PURE__ */ t(
        de,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary", fontSize: 12, lineHeight: "18px" },
          children: c
        }
      ) : null,
      a ? /* @__PURE__ */ t(
        de,
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
      f ? /* @__PURE__ */ t(
        de,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: R ? "#ffffff" : u,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    pr,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: _,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...S ? {
        slots: { transition: cr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: U,
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
        T,
        {
          "data-testid": "account-menu",
          "data-glass": S ? "true" : void 0,
          sx: S ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${ee}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${$n}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Ca, width: n, minWidth: n },
          children: [
            S ? /* @__PURE__ */ t(
              _t,
              {
                isDark: R,
                solid: y,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${yr} ${An.duration}ms ${An.easing} both`,
                  [Ae]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ E(
              T,
              {
                ...v.containerProps,
                sx: S ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${vr} ${On.duration}ms ${On.easing} 70ms both`,
                  [Ae]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  v.lens,
                  f ? /* @__PURE__ */ t(
                    st,
                    {
                      onClick: () => B(f),
                      "data-testid": "account-menu-header",
                      sx: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        transition: "background-color 150ms ease",
                        "& [data-hint]": { display: "none" },
                        "&:hover, &.Mui-focusVisible": {
                          bgcolor: d,
                          "& [data-hint]": { display: "block" },
                          "& [data-role]": { display: "none" }
                        },
                        ...ps
                      },
                      children: k
                    }
                  ) : /* @__PURE__ */ t(T, { "data-testid": "account-menu-header", children: k }),
                  /* @__PURE__ */ t(ot, {}),
                  x ? /* @__PURE__ */ E(
                    T,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...F,
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
                        /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(ei, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(de, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Aa,
                          {
                            glass: S,
                            mode: g,
                            onToggle: m,
                            accentColor: u,
                            tint: d
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ E(
                    ur,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: x ? 0 : 0.5, pb: 0.5 },
                      children: [
                        I.map((M) => /* @__PURE__ */ E(
                          tt,
                          {
                            onClick: () => N(M),
                            "data-testid": `menu-item-${M.key}`,
                            sx: F,
                            children: [
                              /* @__PURE__ */ t(we, { children: M.icon }),
                              /* @__PURE__ */ t(de, { sx: { flex: 1 }, children: M.label }),
                              /* @__PURE__ */ t(sr, { count: M.badge })
                            ]
                          },
                          M.key
                        )),
                        b ? /* @__PURE__ */ t(ot, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ E(
                          tt,
                          {
                            onClick: () => B(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...F,
                              color: R ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(we, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(zn, { fontSize: "small" }) }),
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
}, $a = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ma = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: s,
  title: i,
  onBrandClick: c,
  brandMenuOpen: a,
  brandColor: u,
  headerBackgroundColor: d,
  headerForegroundColor: x,
  activeAccentColor: g = "#01584f",
  groupAccentColor: m,
  activeForegroundColor: f,
  foregroundColor: h,
  surfaceBackgroundColor: I,
  flyoutSurfaceColor: b,
  collapsed: S,
  expandedWidth: w,
  collapsedWidth: R,
  topContent: _,
  submenuMode: y,
  color: v,
  hoverColor: C,
  avatarColor: U,
  showProfile: B = !0,
  userName: N = "User",
  userEmail: F,
  userRole: k,
  userAvatar: M,
  showNotifications: A = !0,
  notificationCount: J = 0,
  onNotificationsClick: Ie,
  whatsNewCount: G = 0,
  onProfileClick: P,
  menuItems: X,
  onLogout: te,
  theme: oe = "light",
  showThemeToggler: $ = !0,
  onThemeToggle: z
}) => {
  const V = He(), H = V.palette.mode === "dark", K = I ?? (H ? V.palette.background.paper : "#ffffff"), ie = v ?? h ?? (H ? V.palette.text.primary : g), W = C ?? m ?? Xt(g), Oe = U ?? g, ae = l.useRef(null), [Fe, $e] = l.useState(!1), ce = k ? Xn(k) : void 0, le = (it) => /* @__PURE__ */ t(
    _r,
    {
      name: N,
      avatar: M,
      color: Oe,
      size: it
    }
  ), ge = J + G, ne = S && y === "flyout", Ue = A ? /* @__PURE__ */ t(
    Tr,
    {
      count: ge,
      onClick: Ie,
      color: ie,
      hoverColor: W,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Me = B ? /* @__PURE__ */ E(
    st,
    {
      ref: ae,
      onClick: () => $e(!0),
      "aria-haspopup": "menu",
      "aria-expanded": Fe,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: S ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 40px button,
        // matching the rail's icon buttons
        p: ne ? "2px" : 0.75,
        borderRadius: "10px",
        bgcolor: Fe ? W : "transparent",
        "&:hover": { bgcolor: W },
        ...$a
      },
      children: [
        S && !ne && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Un,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !ge,
              children: le(36)
            }
          )
        ) : le(S ? 36 : 40),
        S ? null : /* @__PURE__ */ E(T, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            de,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: ie, lineHeight: 1.3 },
              children: N
            }
          ),
          ce ? /* @__PURE__ */ t(
            de,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: ie,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: ce
            }
          ) : null
        ] })
      ]
    }
  ) : null, Xe = !!Ue && (!S || ne || !Me);
  return /* @__PURE__ */ E(
    T,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": S ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          tr,
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
            headerBackgroundColor: d,
            headerForegroundColor: x,
            activeAccentColor: g,
            groupAccentColor: m,
            activeForegroundColor: f,
            foregroundColor: h,
            surfaceBackgroundColor: K,
            flyoutSurfaceColor: b,
            collapsed: S,
            expandedWidth: w,
            collapsedWidth: R,
            topContent: _,
            footer: Me || Xe ? /* @__PURE__ */ E(
              Ne,
              {
                direction: ne ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  ne && Xe ? Ue : null,
                  Me,
                  !ne && Xe ? Ue : null
                ]
              }
            ) : void 0,
            submenuMode: y
          }
        ),
        B ? /* @__PURE__ */ t(
          Oa,
          {
            open: Fe,
            anchorEl: ae.current,
            onClose: () => $e(!1),
            width: Math.max(w - 16, 240),
            renderAvatar: le,
            userName: N,
            userEmail: F,
            roleLabel: ce,
            accentColor: g,
            tint: W,
            showThemeToggler: $,
            theme: oe,
            onThemeToggle: z,
            onProfileClick: P,
            onLinkClick: n,
            menuItems: X,
            onLogout: te,
            glass: y === "flyout"
          }
        ) : null
      ]
    }
  );
}, Mn = Re(ts), Ln = Re(To), Dn = 240, La = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Da = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: c = !1
}) => {
  const a = He(), u = a.palette.mode === "dark", d = !!e, x = xr(a.palette.background.paper), g = Rr({
    enabled: c,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: ee
  }), m = /* @__PURE__ */ t(
    ur,
    {
      autoFocusItem: d,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((f) => {
        const h = f.key === n, I = f.accentColor ?? i;
        return /* @__PURE__ */ E(
          tt,
          {
            selected: h,
            onClick: () => s(f),
            "data-testid": `platform-item-${f.key}`,
            sx: {
              borderRadius: c ? `${ee}px` : "8px",
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
                T,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: I,
                    boxShadow: c ? `0 0 0 3px ${u ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                ze,
                {
                  primary: f.name,
                  secondary: f.description,
                  sx: { my: 0 },
                  slotProps: {
                    primary: {
                      sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }
                    },
                    secondary: { sx: { fontSize: 12, lineHeight: "18px" } }
                  }
                }
              ),
              h ? /* @__PURE__ */ t(
                ti,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: I }
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
    pr,
    {
      open: d,
      anchorEl: e,
      onClose: o,
      onClick: (f) => f.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: cr },
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
        T,
        {
          "data-testid": "platform-menu",
          "data-glass": c ? "true" : void 0,
          sx: c ? {
            position: "relative",
            minWidth: Dn,
            borderRadius: `${ee}px`
          } : { ...La, minWidth: Dn },
          children: c ? /* @__PURE__ */ E(Ce, { children: [
            /* @__PURE__ */ t(
              _t,
              {
                isDark: u,
                solid: x,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${yr} ${Mn.duration}ms ${Mn.easing} both`,
                  [Ae]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ E(
              T,
              {
                ...g.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${vr} ${Ln.duration}ms ${Ln.easing} 70ms both`,
                  [Ae]: { animation: "none" }
                },
                children: [
                  g.lens,
                  m
                ]
              }
            )
          ] }) : m
        }
      )
    }
  );
}, ka = ({ children: e, anchorEl: o, ...r }) => {
  const n = l.useRef(null), s = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ E(
    T,
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
          Da,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, Na = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var _;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: u,
    onNotificationsClick: d,
    userName: x = "User",
    userRole: g,
    userAvatar: m
  } = i, f = l.useRef(null), [h, I] = l.useState(
    null
  ), b = !!h, S = l.useRef(e);
  l.useEffect(() => {
    e && !S.current && I(null), S.current = e;
  }, [e]);
  const w = l.useContext(It);
  if (!a && !n)
    return null;
  const R = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ E(Ce, { children: [
    /* @__PURE__ */ E(
      Ne,
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
              title: e ? x : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                st,
                {
                  onClick: () => I(f.current),
                  "aria-label": `Account menu for ${x}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": b,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? w ? "2px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: b ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...R
                  },
                  children: /* @__PURE__ */ t(
                    ds,
                    {
                      name: x,
                      role: g,
                      avatar: m,
                      avatarColor: c,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          a && /* @__PURE__ */ t(
            Tr,
            {
              count: u + s,
              onClick: d,
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
      us,
      {
        anchorEl: h,
        onClose: () => I(null),
        placement: e ? "beside" : "above",
        width: e || (_ = f.current) == null ? void 0 : _.clientWidth,
        ...i
      }
    )
  ] });
}, Fa = 120, Pa = 300, kn = Re(es), Nn = Re(To), Wa = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Ba = 'input, textarea, [contenteditable="true"]', ir = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Ba)) == null || o.focus();
}, Ga = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: s,
  color: i,
  hoverColor: c
}) => {
  const a = Er(), u = l.useContext(It), d = l.useRef(null), [x, g] = l.useState(null);
  return l.useEffect(() => {
    o === "full" && n && (ir(d.current), s == null || s());
  }, [o, n, s]), o === "full" ? /* @__PURE__ */ t(
    T,
    {
      ref: d,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && u ? /* @__PURE__ */ t(
    za,
    {
      search: e,
      color: i,
      railTooltip: a
    }
  ) : /* @__PURE__ */ E(
    T,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Ee, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          Se,
          {
            "aria-label": "Search",
            onClick: (m) => o === "expand" ? r == null ? void 0 : r() : g(m.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: i,
              borderRadius: "8px",
              "&:hover": { bgcolor: c }
            },
            children: /* @__PURE__ */ t(fr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          pr,
          {
            open: !!x,
            anchorEl: x,
            onClose: () => g(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (m) => ir(m)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, za = ({ search: e, color: o, railTooltip: r }) => {
  const n = He().palette.mode === "dark";
  ai(n, Qo(o, n ? 0.3 : 0.35));
  const s = `rgb(${Rt()})`, i = xr(n ? "#1e2430" : "#ffffff"), c = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${ee}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: s
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${ee}px`,
      "&.Mui-focusVisible": { borderColor: s }
    }
  }, a = l.useRef(null), u = l.useRef(null), [d, x] = l.useState(!1), g = l.useRef(!1), m = l.useRef(void 0), f = l.useRef(void 0), h = () => {
    clearTimeout(m.current), clearTimeout(f.current);
  }, I = l.useCallback(() => {
    h(), g.current = !1, x(!1);
  }, []), b = () => {
    clearTimeout(f.current), d || (clearTimeout(m.current), m.current = setTimeout(
      () => x(!0),
      Fa
    ));
  }, S = () => {
    clearTimeout(m.current), clearTimeout(f.current), f.current = setTimeout(() => {
      !g.current && !Wa(u.current) && x(!1);
    }, Pa);
  };
  return l.useEffect(() => h, []), l.useEffect(() => {
    if (!d)
      return;
    const w = setTimeout(() => ir(u.current)), R = (y) => {
      var C, U;
      const v = y.target;
      !((C = u.current) != null && C.contains(v)) && !((U = a.current) != null && U.contains(v)) && I();
    }, _ = (y) => {
      var v;
      y.key === "Escape" && (I(), (v = a.current) == null || v.focus());
    };
    return document.addEventListener("pointerdown", R), document.addEventListener("keydown", _), () => {
      clearTimeout(w), document.removeEventListener("pointerdown", R), document.removeEventListener("keydown", _);
    };
  }, [d, I]), /* @__PURE__ */ E(
    T,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Ee,
          {
            title: d ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              Se,
              {
                ref: a,
                "aria-label": "Search",
                "aria-expanded": d,
                onMouseEnter: b,
                onMouseLeave: S,
                onClick: () => {
                  h(), g.current = !0, x(!0);
                },
                sx: {
                  width: me,
                  height: me,
                  color: o,
                  borderRadius: `${ee}px`
                },
                children: /* @__PURE__ */ t(
                  fr,
                  {
                    sx: { fontSize: Et }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          lr,
          {
            open: d,
            anchorEl: a.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ E(
              T,
              {
                ref: u,
                "data-testid": "sidebar-search-card",
                onMouseEnter: b,
                onMouseLeave: S,
                sx: {
                  position: "relative",
                  width: 320,
                  p: 1,
                  borderRadius: `${ee}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    _t,
                    {
                      isDark: n,
                      solid: i,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${yr} ${kn.duration}ms ${kn.easing} both`,
                        [Ae]: { animation: "none" }
                      }
                    }
                  ),
                  /* @__PURE__ */ t(
                    T,
                    {
                      sx: {
                        position: "relative",
                        // The host's field, set into the glass: an outlined
                        // input or button becomes a recessed glass well.
                        // Classes repeat to outrank the host's own styles.
                        ...c,
                        animation: `${vr} ${Nn.duration}ms ${Nn.easing} 60ms both`,
                        [Ae]: { animation: "none" }
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
}, Ha = 80, Ua = 300, Xa = 32, Ka = (e) => {
  const o = l.useRef(/* @__PURE__ */ new WeakSet()), r = l.useRef(void 0), n = l.useRef(void 0), [s, i] = l.useState(!1), [c, a] = l.useState(!1), [u, d] = l.useState(!1), x = l.useRef(null), g = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  l.useEffect(() => {
    if (!e) {
      g(), i(!1), a(!1), d(!1);
      return;
    }
    const h = (w) => {
      var _;
      if (w.pointerType !== "mouse")
        return;
      const R = w.clientX <= Xa;
      R && ((_ = x.current) == null || _.style.setProperty(
        "--edge-glow-y",
        `${w.clientY}px`
      )), d(R);
    }, I = () => d(!1), b = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), a(!1);
      }, Ua));
    }, S = (w) => {
      o.current.has(w) || b();
    };
    return document.addEventListener("mouseover", S), document.addEventListener("pointermove", h, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", b), document.documentElement.addEventListener("mouseleave", I), () => {
      g(), document.removeEventListener("mouseover", S), document.removeEventListener("pointermove", h), document.documentElement.removeEventListener(
        "mouseleave",
        b
      ), document.documentElement.removeEventListener(
        "mouseleave",
        I
      );
    };
  }, [e]);
  const m = {
    onMouseOver: (h) => {
      o.current.add(h.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, Ha));
    },
    onFocus: (h) => {
      ja(h.target) && a(!0);
    },
    onBlur: (h) => {
      const I = h.relatedTarget;
      (!I || !h.currentTarget.contains(I)) && a(!1);
    },
    onKeyDown: (h) => {
      h.key === "Escape" && (a(!1), i(!1));
    }
  }, f = e && (s || c);
  return {
    shown: f,
    nearEdge: e && u && !f,
    glowRef: x,
    rootProps: m
  };
}, ja = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Va = 100, Ya = () => {
  const e = l.useRef(null), o = l.useRef(void 0), r = l.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = l.useState(!1), [i, c] = l.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return l.useEffect(() => {
    const d = (g) => {
      r.current.has(g) || (a(), s(!1));
    }, x = () => {
      a(), s(!1);
    };
    return document.addEventListener("mouseover", d), document.documentElement.addEventListener("mouseleave", x), () => {
      a(), document.removeEventListener("mouseover", d), document.documentElement.removeEventListener(
        "mouseleave",
        x
      );
    };
  }, []), l.useEffect(() => {
    if (!i)
      return;
    const d = (x) => {
      var g;
      (g = e.current) != null && g.contains(x.target) || c(!1);
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i]), {
    expanded: n || i,
    pin: () => c(!0),
    rootProps: {
      ref: e,
      onMouseOver: (d) => {
        r.current.add(d.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, s(!0);
        }, Va));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (d) => {
        const x = d.relatedTarget;
        x && !d.currentTarget.contains(x) && c(!1);
      },
      onKeyDown: (d) => {
        d.key === "Escape" && c(!1);
      }
    }
  };
}, qa = 300, jo = 288, Za = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Qa = 6, Fn = 72, Vo = 90, Ja = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", ec = 68, tc = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), oc = typeof window > "u" ? ho : Ns, tl = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: c = "rail",
  sidebarSubmenu: a = "expand",
  sidebarAutoHide: u = !1,
  mobileNavigation: d = "bottom-bar",
  mobileBottomBarLinks: x,
  logo: g,
  onBrandClick: m,
  searchComponent: f,
  brandColor: h,
  contentPadding: I = Yn,
  userMenuItems: b,
  sidebarBackgroundColor: S,
  sidebarHeaderBackgroundColor: w,
  groupAccentColor: R,
  activeSidebarForegroundColor: _,
  enableRefreshToken: y = !1,
  holdSessionSkeleton: v = !1,
  sessionSkeletonContent: C,
  activePath: U,
  onLinkClick: B,
  showProfile: N = !0,
  userName: F,
  userRole: k,
  userAvatar: M,
  userEmail: A,
  onLogout: J,
  showSettings: Ie = !0,
  onSettingsClick: G,
  onProfileClick: P,
  showNotifications: X = !0,
  notificationCount: te = 0,
  NotificationSidebarContent: oe,
  whatsNewCount: $ = 0,
  onNotificationsClick: z,
  platforms: V,
  currentPlatformKey: H,
  onPlatformSelect: K,
  onVerify: ie,
  alertProps: W,
  style: Oe,
  sidebarStyles: ae,
  contentStyles: Fe,
  accentColor: $e,
  sidebarAccentColor: ce,
  sidebarForegroundColor: le,
  contentBackgroundColor: ge,
  theme: ne = "light",
  darkModeSelector: Ue,
  showThemeToggler: Me = !1,
  onThemeToggle: Xe,
  GlobalChatSidebar: pt,
  useChatSidebar: it,
  chatPanelMode: Zt = "docked",
  chatPanelPosition: Qt = "right",
  chatPanelWidth: Jt = 420,
  onChatClose: eo,
  showAssistant: at = !1,
  assistantPlacement: Tt = "sidebar",
  assistantShortcut: to = "j",
  onAssistantClick: ct,
  assistantActive: Ct = !1,
  assistantBusy: At = !1,
  customNavbar: Ot,
  customNavbarProps: Ao,
  redirectToLogin: ht,
  apiBaseUrl: oo
}) => {
  const mt = Pn(), ue = Wn(mt.breakpoints.down("md")), p = Zr(
    () => Eo(Ir(ne)),
    [ne]
  ), L = ne === "dark", Y = $e ?? "#01584f", D = ce ?? Y, j = Jn(
    typeof ge == "object" ? ge[ne] : ge,
    L
  ), Z = c === "collapsible", xe = c === "panel", fe = xe && s && !ue, pe = c === "rail-labeled", Oo = Z || pe, Pe = Qn(
    S,
    L
  ), $o = w ?? Pe, ye = le ?? (L ? "#ffffff" : D), $t = R ?? Xt(ye), Mt = w ? Zo($o) : ye, Cr = (O) => /* @__PURE__ */ t(
    q,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: O,
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
  ), ro = h ?? Mt, [Ar, Mo] = dt(
    null
  ), Lo = ((V == null ? void 0 : V.length) ?? 0) > 1, hs = Qr(() => Mo(null), []), ms = (O) => {
    Mo(null), K ? K(O) : O.key !== H && O.url && window.location.assign(O.url);
  }, Or = (O) => Lo ? /* @__PURE__ */ t(
    ka,
    {
      anchorEl: Ar,
      onClose: hs,
      platforms: V,
      currentKey: H,
      onSelect: ms,
      accentColor: Y,
      glass: a === "flyout" && (Z || xe) && !ue,
      children: O
    }
  ) : O, no = Lo ? (O) => Mo(O.currentTarget) : m, so = Lo ? !!Ar : void 0, Do = Or(
    g ?? Cr(ro)
  ), gs = Or(
    g ?? Cr(h ?? ye)
  ), ko = Ya(), Le = _o(a, c), We = Le || !ko.expanded, qe = s && !ue && li(u, a, c), Ze = Ka(qe), $r = Le ? "popover" : "expand", Mr = Le ? Ht : Wt, Lr = Le ? "transparent" : Pe, Dr = Le && !w ? "transparent" : $o, [xs, kr] = dt(!1), bs = Qr(() => kr(!1), []), Ke = Zn({
    showSidebar: s,
    isMobile: ue,
    sidebarVariant: c,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [Nr, lt] = dt(!1), [Fr, No] = dt(!1), ve = ue && d === "bottom-bar", Pr = `calc(${fs}px + env(safe-area-inset-bottom, 0px))`, [Fo, Wr] = dt({ open: !1, tab: "notifications" }), Br = () => Wr((O) => ({ ...O, open: !1 })), ys = X && !!oe, [vs, Ss] = dt(!0), [ws, Es] = dt(!1), Po = it == null ? void 0 : it(), Gr = (Po == null ? void 0 : Po.isOpen) ?? !1, zr = Zt === "floating" ? "floating" : "docked", Rs = zr === "docked" && Gr && pt && !ue ? Jt : 0, io = Ho(ie), Hr = Ho(!1), Ur = Zr(
    () => aa(oo),
    [oo]
  );
  ho(() => {
    io.current = ie;
  }, [ie]);
  const Wo = Ho(ct);
  Wo.current = ct;
  const Lt = at && to ? to.toLowerCase() : null;
  ho(() => {
    if (!Lt)
      return;
    const O = (se) => {
      (se.metaKey || se.ctrlKey) && !se.altKey && !se.shiftKey && se.key.toLowerCase() === Lt && Wo.current && (se.preventDefault(), Wo.current());
    };
    return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
  }, [Lt]);
  const Xr = (O) => {
    const se = J(O);
    se instanceof Promise && se.catch((je) => {
      console.error("Error in logout handler:", je);
    });
  };
  if (oc(() => {
    (() => {
      var se;
      try {
        const { isAuthenticated: je } = sa();
        if (!je) {
          console.log("No session found, redirecting to login"), Yt(), ht();
          return;
        }
        if (!Hr.current) {
          const { user: kt, error: zo } = ia();
          if (kt && !zo) {
            const Ms = {
              name: kt.name || "",
              email: kt.email || "",
              profilePicture: kt.profilePicture || "",
              role: kt.role || ""
            };
            Hr.current = !0, (se = io.current) == null || se.call(io, Ms);
          } else
            zo && console.error("Error getting user data:", zo);
        }
        Es(!0);
      } catch (je) {
        console.error("Error checking session:", je), Yt(), ht();
      } finally {
        Ss(!1);
      }
    })();
  }, [ht]), ho(() => {
    y && ca(Ur, ht);
  }, [y, Ur]), vs || v)
    return /* @__PURE__ */ t(
      ra,
      {
        theme: ne,
        darkModeSelector: Ue,
        sidebarVariant: c,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: s,
        contentPadding: I,
        sidebarBackgroundColor: S,
        contentBackgroundColor: ge,
        content: C
      }
    );
  if (!ws)
    return null;
  const Dt = f ?? (Ot ? /* @__PURE__ */ t(Ot, { ...Ao }) : null), Is = (O) => {
    lt(!1), No(!1), Wr({ open: !0, tab: O });
  }, Bo = oe && (() => Is("notifications")), _s = te + $, Kr = {
    avatarColor: D,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: b == null ? void 0 : b.map(
      (O) => O.onClick || !O.path ? O : { ...O, onClick: () => B == null ? void 0 : B(O.path) }
    ),
    showNotifications: X,
    notificationCount: te,
    whatsNewCount: $,
    onNotificationsClick: Bo,
    showProfile: N,
    userName: F,
    userRole: k,
    userAvatar: M,
    showSettings: Ie,
    onSettingsClick: G,
    showThemeToggler: Me,
    theme: ne,
    onThemeToggle: Xe,
    onLogout: Xr
  }, Go = (O) => /* @__PURE__ */ t(
    Na,
    {
      ...Kr,
      compact: O,
      color: ye,
      hoverColor: $t
    }
  ), jr = Lt ? [tc() ? "⌘" : "Ctrl", Lt.toUpperCase()] : void 0, Ts = (O) => at && Tt === "sidebar" ? /* @__PURE__ */ t(
    Rn,
    {
      variant: O ? "sidebar-icon" : "sidebar",
      onClick: ct,
      active: Ct,
      busy: At,
      shortcutKeys: jr,
      accentColor: ye
    }
  ) : null, Cs = (O) => Dt ? /* @__PURE__ */ t(
    Ga,
    {
      search: Dt,
      mode: O,
      onExpand: () => {
        ko.pin(), kr(!0);
      },
      autoFocus: xs,
      onAutoFocused: bs,
      color: ye,
      hoverColor: $t
    }
  ) : null, ao = (O) => {
    const se = Ts(O !== "full"), je = Cs(O);
    return se || je ? /* @__PURE__ */ E(
      Pt,
      {
        spacing: Le ? `${Io}px` : 1.5,
        sx: { alignItems: O === "full" ? "stretch" : "center" },
        children: [
          se,
          Le && se && je ? /* @__PURE__ */ t(
            q,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Xt(ye)}`
              }
            }
          ) : null,
          je
        ]
      }
    ) : void 0;
  }, Vr = () => /* @__PURE__ */ t(
    tr,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: U,
      onLinkClick: B,
      showHeaderBar: Z,
      logo: Do,
      title: n,
      onBrandClick: no,
      brandMenuOpen: so,
      brandColor: ro,
      headerBackgroundColor: Z ? Dr : void 0,
      headerForegroundColor: Z ? Mt : void 0,
      activeAccentColor: D,
      groupAccentColor: R,
      activeForegroundColor: _,
      foregroundColor: le,
      surfaceBackgroundColor: Lr,
      flyoutSurfaceColor: Pe,
      collapsed: pe || We,
      showLabels: pe,
      expandedWidth: jo,
      collapsedWidth: pe ? jn : Mr,
      topContent: ao(
        pe ? "popover" : We ? $r : "full"
      ),
      footer: Go(pe || We),
      submenuMode: Le ? "flyout" : "inline"
    }
  ), Yr = (O) => Le ? As(O) : Os(O), As = (O) => /* @__PURE__ */ E(
    q,
    {
      component: "aside",
      ...qe ? Ze.rootProps : {},
      "data-auto-hide": qe ? "true" : void 0,
      "data-shown": qe ? String(Ze.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (se) => se.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...qe ? {
          position: "fixed",
          left: 0,
          width: Ht + 2 * ft,
          pointerEvents: "none"
        } : {
          width: Ke,
          minWidth: Ke,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: j
        }
      },
      children: [
        qe && /* @__PURE__ */ t(
          q,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Qa,
              pointerEvents: "auto"
            }
          }
        ),
        qe && /* @__PURE__ */ t(
          q,
          {
            ref: Ze.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(Ze.nearEdge),
            "aria-hidden": "true",
            sx: {
              "--edge-glow-y": "50%",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Fn,
              pointerEvents: "none",
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${Fn}px ${Vo}px at 0 var(--edge-glow-y), ${Ge(ye, L ? 0.5 : 0.4)}, ${Ge(ye, 0)})`,
              opacity: Ze.nearEdge ? 1 : 0,
              transition: "opacity 200ms ease",
              // And a bright line along the edge beside it
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 3,
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${Vo}px), ${Ge(ye, L ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${Vo}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ E(
          q,
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            sx: {
              position: "absolute",
              top: ft,
              bottom: ft,
              left: ft,
              width: Ht,
              borderRadius: `${Vn}px`,
              display: "flex",
              flexDirection: "column",
              ...qe && {
                pointerEvents: Ze.shown ? "auto" : "none",
                opacity: Ze.shown ? 1 : 0,
                transform: Ze.shown ? "none" : `translateX(calc(-100% - ${2 * ft}px))`,
                transition: Ja,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...ae
            },
            children: [
              /* @__PURE__ */ t(
                _t,
                {
                  isDark: L,
                  solid: Pe,
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
                  children: O
                }
              )
            ]
          }
        )
      ]
    }
  ), Os = (O) => /* @__PURE__ */ t(
    q,
    {
      component: "aside",
      sx: {
        width: Wt,
        minWidth: Wt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (se) => se.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        q,
        {
          ...Le ? {} : ko.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": We ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: We ? Wt : jo,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Pe,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: We ? "none" : `4px 0 24px rgba(0, 0, 0, ${L ? 0.5 : 0.12})`,
            transition: Za,
            ...ae
          },
          children: O
        }
      )
    }
  ), $s = qn(
    I,
    mt
  );
  return /* @__PURE__ */ t(yo, { theme: p, children: /* @__PURE__ */ t(Kn.Provider, { value: D, children: /* @__PURE__ */ t(qt.Provider, { value: Pe, children: /* @__PURE__ */ E(
    q,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Oe
      },
      children: [
        /* @__PURE__ */ t(Yo, {}),
        ue && /* @__PURE__ */ t(
          Ta,
          {
            height: mo,
            onMenuClick: s && !ve ? () => lt(!0) : void 0,
            appName: n,
            logo: Do,
            onBrandClick: no,
            brandMenuOpen: so,
            background: $o,
            color: Mt,
            brandColor: ro,
            endContent: X ? /* @__PURE__ */ t(
              Tr,
              {
                count: _s,
                onClick: Bo,
                color: Mt,
                hoverColor: $t,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !ue && pe && /* @__PURE__ */ t(
          q,
          {
            component: "aside",
            sx: {
              width: Ke,
              minWidth: Ke,
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
              ...ae
            },
            children: Vr()
          }
        ),
        s && !ue && Z && Yr(
          /* @__PURE__ */ E(Ce, { children: [
            Vr(),
            (W == null ? void 0 : W.show) && !We && /* @__PURE__ */ t(po, { ...W })
          ] })
        ),
        fe && Yr(
          /* @__PURE__ */ E(Ce, { children: [
            /* @__PURE__ */ t(
              Ma,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: U,
                onLinkClick: B,
                logo: Do,
                title: n,
                onBrandClick: no,
                brandMenuOpen: so,
                brandColor: ro,
                headerBackgroundColor: Dr,
                headerForegroundColor: Mt,
                activeAccentColor: D,
                groupAccentColor: R,
                activeForegroundColor: _,
                foregroundColor: le,
                surfaceBackgroundColor: Lr,
                flyoutSurfaceColor: Pe,
                collapsed: We,
                expandedWidth: jo,
                collapsedWidth: Mr,
                topContent: ao(
                  We ? $r : "full"
                ),
                submenuMode: Le ? "flyout" : "inline",
                color: ye,
                hoverColor: $t,
                avatarColor: D,
                showProfile: N,
                userName: F,
                userEmail: A,
                userRole: k,
                userAvatar: M,
                showNotifications: X,
                notificationCount: te,
                onNotificationsClick: ys ? Bo : z,
                whatsNewCount: $,
                onProfileClick: P,
                menuItems: b,
                onLogout: Xr,
                theme: ne,
                showThemeToggler: Me,
                onThemeToggle: Xe
              }
            ),
            (W == null ? void 0 : W.show) && !We && /* @__PURE__ */ t(po, { ...W })
          ] })
        ),
        s && !ue && !Oo && !xe && /* @__PURE__ */ t(
          Jr,
          {
            variant: "permanent",
            sx: {
              width: Ke,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Ke,
                boxSizing: "border-box",
                bgcolor: j,
                borderRight: "none"
              },
              ...ae
            },
            children: /* @__PURE__ */ E(
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
                        vo,
                        {
                          logo: gs,
                          appName: n,
                          onClick: no,
                          menuOpen: so,
                          color: h ?? ye,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  ao("popover"),
                  /* @__PURE__ */ E(
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
                          Sa,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: U,
                            onLinkClick: B,
                            accentColor: D,
                            surfaceBackgroundColor: j,
                            railShowTitles: i
                          }
                        ),
                        (W == null ? void 0 : W.show) && /* @__PURE__ */ t(po, { ...W })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(q, { sx: { py: 1.5 }, children: Go(!0) })
                ]
              }
            )
          }
        ),
        s && ue && /* @__PURE__ */ E(
          Ps,
          {
            anchor: ve ? "bottom" : "left",
            open: Nr,
            onOpen: () => lt(!0),
            onClose: () => lt(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (O) => O.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Pe,
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
                tr,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: U,
                  onLinkClick: (O) => {
                    B == null || B(O), lt(!1);
                  },
                  onLinkAction: () => lt(!1),
                  collapsed: !1,
                  expandedWidth: ve ? "100%" : qa,
                  activeAccentColor: D,
                  groupAccentColor: R,
                  activeForegroundColor: _,
                  foregroundColor: le,
                  surfaceBackgroundColor: Pe,
                  topInsetPx: ve ? 8 : 0,
                  topContent: ve ? void 0 : ao("full"),
                  footer: ve ? void 0 : Go(!1)
                }
              ),
              (W == null ? void 0 : W.show) && /* @__PURE__ */ t(po, { ...W })
            ]
          }
        ),
        ve && Dt && /* @__PURE__ */ t(
          _a,
          {
            open: Fr,
            onClose: () => No(!1),
            search: Dt
          }
        ),
        ve && /* @__PURE__ */ t(
          Ia,
          {
            ...Kr,
            pinnedLinks: x,
            activePath: U,
            onLinkClick: B,
            onMenuClick: s ? () => lt(!0) : void 0,
            menuOpen: Nr,
            onSearchClick: Dt ? () => No(!0) : void 0,
            searchOpen: Fr,
            showAssistant: at,
            onAssistantClick: ct,
            assistantActive: Ct,
            showProfile: N,
            background: Pe,
            color: ye,
            activeColor: D,
            activeBackground: $t
          }
        ),
        /* @__PURE__ */ t(
          q,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": $s,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": ue ? `${mo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ke ? `calc(100% - ${Ke}px)` : "100%",
              mt: ue ? `${mo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ve && {
                pb: `calc(var(--lumora-content-padding) + ${Pr})`
              },
              backgroundColor: j,
              ...Fe
            },
            children: e
          }
        ),
        pt && /* @__PURE__ */ t(
          pa,
          {
            open: Gr,
            variant: zr,
            position: Qt,
            width: Jt,
            sidebarWidthPx: Ke,
            bottomOffsetPx: at && Tt === "floating" ? ec : 0,
            fullScreen: ue,
            fullScreenBottom: ve ? Pr : "0px",
            onClose: eo,
            children: /* @__PURE__ */ t(pt, {})
          }
        ),
        at && Tt === "floating" && !ve && /* @__PURE__ */ t(
          Rn,
          {
            variant: "floating",
            rightOffsetPx: Rs,
            shortcutKeys: jr,
            onClick: ct,
            active: Ct,
            busy: At
          }
        ),
        X && oe && /* @__PURE__ */ t(
          Jr,
          {
            anchor: "right",
            open: Fo.open,
            onClose: Br,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              oe,
              {
                onClose: Br,
                initialTab: Fo.tab
              },
              Fo.tab
            )
          }
        )
      ]
    }
  ) }) }) });
};
export {
  re as AUTH_ERROR_CODES,
  Q as AuthError,
  tr as CollapsibleSidebar,
  Jc as FullBleedSection,
  Ji as Kbd,
  ra as LumoraShellSkeleton,
  tl as LumoraWrapper,
  Yt as clearAuthTokens,
  tl as default,
  el as getAuthErrorMessage,
  Vt as getAuthTokens,
  ia as getCurrentUser,
  Ir as getDesignTokens,
  sa as isAuthenticated,
  nr as logAuthError,
  is as storeAuthTokens
};
