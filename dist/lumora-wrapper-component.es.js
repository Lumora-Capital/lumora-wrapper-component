import { jsx as t, jsxs as w, Fragment as Ce } from "react/jsx-runtime";
import $s from "@mui/icons-material/KeyboardArrowDownRounded";
import Ms from "@mui/icons-material/KeyboardArrowUpRounded";
import Ls from "@mui/icons-material/ChevronRightRounded";
import _ from "@mui/material/Box";
import Yr from "@mui/material/Collapse";
import Je from "@mui/material/Divider";
import ve from "@mui/material/IconButton";
import co from "@mui/material/ListItemButton";
import Se from "@mui/material/ListItemIcon";
import ze from "@mui/material/ListItemText";
import ke from "@mui/material/Stack";
import we from "@mui/material/Tooltip";
import de from "@mui/material/Typography";
import { useTheme as Ge, createTheme as Eo, alpha as dt, ThemeProvider as yo } from "@mui/material/styles";
import * as l from "react";
import { useMemo as qr, useState as ct, useCallback as Zr, useRef as Ho, useEffect as po, useLayoutEffect as Ds } from "react";
import ot from "@mui/material/ButtonBase";
import { keyframes as ir } from "@emotion/react";
import ar from "@mui/material/Fade";
import cr from "@mui/material/Popper";
import { useTheme as Nn, CssBaseline as Vo, GlobalStyles as ks, Box as q, useMediaQuery as Fn, Stack as Pt, Skeleton as Le, Drawer as Qr, SwipeableDrawer as Ns } from "@mui/material";
import Jr from "axios";
import Fs from "@mui/material/Card";
import Ps from "@mui/material/CardContent";
import Pn from "@mui/material/Button";
import Ws from "@mui/icons-material/AutoAwesomeRounded";
import Bs from "@mui/material/Grow";
import lr from "@mui/material/Paper";
import zs from "@mui/material/Slide";
import Gs from "@mui/material/ListSubheader";
import Qe from "@mui/material/MenuItem";
import dr from "@mui/material/MenuList";
import Wn from "@mui/icons-material/MenuRounded";
import ur from "@mui/icons-material/SearchRounded";
import Bn from "@mui/icons-material/LogoutRounded";
import zn from "@mui/icons-material/NotificationsNoneOutlined";
import Hs from "@mui/icons-material/SettingsOutlined";
import Us from "@mui/material/Avatar";
import Xs from "@mui/material/Menu";
import en from "@mui/material/ToggleButton";
import Ks from "@mui/material/ToggleButtonGroup";
import js from "@mui/material/Drawer";
import Vs from "@mui/material/AppBar";
import Ys from "@mui/material/Toolbar";
import Gn from "@mui/material/Badge";
import qs from "@mui/icons-material/DarkModeOutlined";
import Zs from "@mui/icons-material/LightModeOutlined";
import Qs from "@mui/icons-material/SettingsBrightnessOutlined";
import fr from "@mui/material/Popover";
import Js from "@mui/icons-material/CheckRounded";
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
  }, u = /* @__PURE__ */ w(Ce, { children: [
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
    ot,
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
  ) : /* @__PURE__ */ t(ke, { direction: "row", "data-testid": i, sx: a, children: u });
}, Yo = !1, St = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, vt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, yt = (e, o) => e ? `${e}/${o.text}` : o.text, Ye = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Ye(n, o))) ?? !1 : !1;
}, Be = (e, o) => !!(o && e.path === o), hr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return vt(r) ? hr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), qo = (e) => {
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
}, Zo = (e, o) => {
  const r = Ro(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, Ro = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Hn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), pr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", ei = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", ti = ir`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Te = "@media (prefers-reduced-motion: reduce)", ee = 6, mr = "9, 193, 174", Un = l.createContext(
  void 0
), qt = l.createContext(
  void 0
), gr = (e) => l.useContext(qt) ?? e, Et = () => {
  const e = l.useContext(Un), o = e ? Ro(e) : null;
  return o ? o.join(", ") : mr;
}, tn = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, oi = (e, o) => e ? "255, 255, 255" : o, ri = (e, o, r = mr) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${ei(e)}, 0 0 0 1px ${pr(e)}`
}), ni = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", xr = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: pr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${ee}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), br = ir`
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
`, yr = ir`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, vr = (e, o = mr, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Kt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: Zo(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${Zo(e, 0.45)}`
}, si = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${pr(e)}`;
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
}, ii = 100, Xn = 80, mo = 56, Wt = 72, Ht = 52, me = 40, wt = 20, Io = 4, ut = 8, Kn = ee, jn = { xs: 2, md: "18px" }, Vn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, _o = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), ai = (e, o, r) => e && _o(o, r), Yn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || o ? 0 : r === "rail-labeled" ? Xn : _o(n, r) ? s ? 0 : Ht + 2 * ut : r === "collapsible" || r === "panel" ? Wt : ii, qn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Zn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Qn = { stiffness: 320, damping: 24 }, Jn = { stiffness: 320, damping: 28 }, Sr = { stiffness: 520, damping: 20 }, es = { stiffness: 380, damping: 36 }, Co = { stiffness: 260, damping: 28 }, ci = "cubic-bezier(0.32, 1.28, 0.52, 1)", li = 420, on = 60, di = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), rn = /* @__PURE__ */ new Map(), Ee = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, s = rn.get(n);
  if (s)
    return s;
  if (!di)
    return { easing: ci, duration: li };
  const i = 1 / 600;
  let c = 0, a = 0, u = 0, d = 1 / on;
  const p = [0];
  for (; u < 3; ) {
    const g = (-e * (c - 1) - o * a) / r;
    if (a += g * i, c += a * i, u += i, u >= d && (p.push(c), d += 1 / on, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  p[p.length - 1] = 1;
  const m = {
    easing: `linear(${p.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return rn.set(n, m), m;
}, et = (e) => !!(e && typeof e.animate == "function"), tt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Bt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, ui = (e, o = 1.14) => {
  if (!et(e) || tt())
    return;
  const r = Ee(Sr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, jt = "data-rail-item", fi = `[${jt}], button, [role="button"]`, Rt = l.createContext(!1), wr = () => {
  const e = l.useContext(Rt), o = Ge(), r = l.useContext(qt);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: xr(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, qe = Ee(es), Er = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: c = null
}) => {
  const a = l.useRef(null), u = Et(), [d, p] = l.useState(null), m = l.useRef(null), g = l.useRef(null), f = (y, v) => {
    g.current = v;
    const C = v.getBoundingClientRect(), U = y.getBoundingClientRect(), B = n ?? C.width, N = n ?? C.height, F = {
      top: Math.round(C.top - U.top + (C.height - N) / 2),
      left: Math.round(C.left - U.left + (C.width - B) / 2),
      width: Math.round(B),
      height: Math.round(N)
    };
    p(
      (D) => D && D.visible && D.top === F.top && D.left === F.left && D.width === F.width && D.height === F.height ? D : { ...F, visible: !0, instant: !(D != null && D.visible) }
    );
  }, x = (y, v) => {
    var U;
    const C = (U = v == null ? void 0 : v.closest) == null ? void 0 : U.call(v, r);
    return C && y.contains(C) ? C : null;
  }, I = (y) => {
    if (!e)
      return;
    const v = x(y.currentTarget, y.target);
    v && f(y.currentTarget, v);
  }, b = (y) => {
    if (!e)
      return;
    const v = x(y.currentTarget, y.target);
    v && y.target.matches(":focus-visible") && f(y.currentTarget, v);
  }, S = () => {
    var C;
    const y = (C = a.current) == null ? void 0 : C.parentElement, v = i && (y == null ? void 0 : y.querySelector(i));
    return y && v ? { container: y, item: v } : null;
  }, R = () => {
    const y = S();
    if (y) {
      f(y.container, y.item);
      return;
    }
    g.current = null, p((v) => v != null && v.visible ? { ...v, visible: !1 } : v);
  };
  l.useEffect(() => {
    var v, C;
    if (!e)
      return;
    const y = S();
    y ? f(y.container, y.item) : (C = (v = a.current) == null ? void 0 : v.parentElement) != null && C.matches(":hover") || R();
  }, [e, c]);
  const E = (y) => {
    const v = y.relatedTarget;
    (!v || !y.currentTarget.contains(v)) && (y.currentTarget.matches(":hover") || R());
  };
  return l.useEffect(() => {
    const y = a.current;
    if (!(d != null && d.visible)) {
      m.current = null;
      return;
    }
    const v = m.current;
    if (m.current = d.top, !et(y) || tt())
      return;
    if (v === null || d.instant) {
      y.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: qe.duration,
        easing: qe.easing
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
      { duration: qe.duration, easing: "ease-out" }
    );
  }, [d == null ? void 0 : d.top, d == null ? void 0 : d.visible, d == null ? void 0 : d.instant]), {
    lens: e && d ? /* @__PURE__ */ t(
      _,
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": d.visible ? "true" : "false",
        sx: {
          ...vr(o, u),
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
          transition: d.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${qe.duration}ms ${qe.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
          [Te]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: I,
      onMouseLeave: R,
      onFocus: b,
      onBlur: E,
      onScrollCapture: R
    } : {}
  };
}, hi = (e, o, r = null) => {
  const n = Er({
    enabled: e,
    isDark: o,
    selector: fi,
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
}, pi = (e, o) => {
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
}, mi = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const s = l.useRef(null), [i, c] = l.useState(null), a = l.useRef(null), u = l.useCallback(
    (p) => {
      const m = n.current;
      if (!e || !m)
        return;
      const g = m.querySelector(
        `[${jt}][data-active="true"]`
      );
      if (!g) {
        c(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const f = pi(g, m);
      c(
        (x) => x && x.visible && x.top === f.top && x.left === f.left && x.width === f.width && x.height === f.height ? x : {
          ...f,
          visible: !0,
          instant: p || !(x != null && x.visible)
        }
      );
    },
    [e, n]
  );
  return l.useLayoutEffect(() => {
    u(!1);
  }), l.useEffect(() => {
    const p = n.current;
    if (!e || !p)
      return;
    let m = 0;
    const g = () => {
      cancelAnimationFrame(m), m = requestAnimationFrame(() => u(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    f == null || f.observe(p);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return x == null || x.observe(p, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(m), f == null || f.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, u]), l.useEffect(() => {
    const p = s.current;
    if (!(i != null && i.visible)) {
      a.current = null;
      return;
    }
    const m = a.current;
    if (a.current = i.top, m === null || i.instant || !et(p) || tt())
      return;
    const g = Math.min(Math.abs(i.top - m) / 600, 0.08);
    g && p.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - g / 2} ${1 + g}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: qe.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ t(
    _,
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
        transition: i.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${qe.duration}ms ${qe.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Te]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, nn = 14, gi = 18, xi = "blur(12px) saturate(180%) brightness(1.04)", bi = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), yi = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, vi = 140, sn = 0.22, Si = 0.14, wi = (e, o, r) => {
  const n = l.useRef(r);
  n.current = r, l.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var f;
      const g = e.current;
      g && (g.style.setProperty("--lx", `${i.x.toFixed(1)}px`), g.style.setProperty("--ly", `${i.y.toFixed(1)}px`), g.style.setProperty("--li", i.i.toFixed(3)), (f = n.current) == null || f.call(n, i.x, i.y, i.i));
    }, u = () => {
      i.x += (s.x - i.x) * sn, i.y += (s.y - i.y) * sn, i.i += (s.i - i.i) * Si;
      const g = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      g && (i.x = s.x, i.y = s.y, i.i = s.i), a(), c = g ? 0 : requestAnimationFrame(u);
    }, d = () => {
      c || (c = requestAnimationFrame(u));
    }, p = (g) => {
      const f = e.current;
      if (g.pointerType === "touch" || !f)
        return;
      const x = f.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      s.x = (g.clientX - x.left) * f.offsetWidth / x.width, s.y = (g.clientY - x.top) * f.offsetHeight / x.height;
      const I = Math.max(
        x.left - g.clientX,
        0,
        g.clientX - x.right
      ), b = Math.max(
        x.top - g.clientY,
        0,
        g.clientY - x.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(I, b) / vi), i.i < 0.01 && (i.x = s.x, i.y = s.y), d();
    }, m = () => {
      s.i = 0, d();
    };
    return document.addEventListener("pointermove", p, { passive: !0 }), document.documentElement.addEventListener("mouseleave", m), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", p), document.documentElement.removeEventListener("mouseleave", m);
    };
  }, [e, o]);
}, It = l.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: c
  }, a) => {
    const u = l.useRef(null), d = s && Yo;
    wi(u, i && Yo, c);
    const p = Et(), m = `lumora-glass-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [g, f] = l.useState(null), x = l.useRef(null), I = l.useCallback(
      (R) => {
        var T;
        if (u.current = R, typeof a == "function" ? a(R) : a && (a.current = R), (T = x.current) == null || T.disconnect(), x.current = null, !R || !d || !bi || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const y = R.offsetWidth, v = R.offsetHeight;
          f(
            (C) => (C == null ? void 0 : C.width) === y && C.height === v ? C : y && v ? { width: y, height: v } : null
          );
        };
        x.current = new ResizeObserver(E), x.current.observe(R), E();
      },
      [a, d]
    ), b = l.useMemo(
      () => g ? yi(g.width, g.height, nn) : null,
      [g]
    ), S = d && !!(b && g);
    return /* @__PURE__ */ w(Ce, { children: [
      S ? /* @__PURE__ */ t(
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
                    href: b,
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
                    stdDeviation: nn / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: gi,
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
          ref: I,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": S ? "true" : void 0,
          sx: [
            ri(e, o, p),
            S ? {
              backdropFilter: `url(#${m}) ${xi}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
It.displayName = "GlassLayer";
const Ze = me, an = Io, Ei = ee, cn = 1.12, To = 6, ln = To - 2, zt = ee, Qo = 24, So = 10, dn = 0.12, un = 0.75, Ri = So + Ht / 2 - 2, Ii = 90, _i = 22, Ci = 1190, Ti = 1195, wo = Ee(Qn), be = Ee(es), fn = Ee(Co), Ai = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), c = e + r, a = o + n, u = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + i} ${o} H ${c - i} ${u} ${c} ${o + i} V ${a - i} ${u} ${c - i} ${a} H ${e + i} ${u} ${e} ${a - i} V ${o + i} ${u} ${e + i} ${o} Z')`;
}, Oi = ({
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
  accentColor: p,
  activeForegroundColor: m,
  solidSurface: g
}) => {
  const f = Ge(), x = f.palette.mode === "dark", I = !!(e && r), b = l.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const S = b.current, R = l.useMemo(() => r ? {
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
  } : null, [r, n]), E = l.useRef(R);
  R && (E.current = R), l.useEffect(() => {
    r && ui(r);
  }, [r]);
  const [T, y] = l.useState(!1);
  l.useEffect(() => {
    if (!I) {
      y(!1);
      return;
    }
    let $ = 0;
    const G = requestAnimationFrame(() => {
      $ = requestAnimationFrame(() => y(!0));
    });
    return () => {
      cancelAnimationFrame(G), cancelAnimationFrame($);
    };
  }, [I]);
  const v = l.useMemo(
    () => S ? hr(S.group.subitems, S.group.icon) : [],
    [S]
  ), C = l.useRef(null), U = l.useRef(null), B = l.useRef(0), N = l.useRef(null), F = l.useRef([]), D = v.findIndex(
    ({ sub: $ }) => Be($, i)
  ), [M, A] = l.useState(0);
  l.useEffect(() => {
    A(Math.max(D, 0));
  }, [o]), l.useEffect(() => {
    if (!I || !c)
      return;
    const $ = setTimeout(() => {
      var G;
      return (G = F.current[0]) == null ? void 0 : G.focus();
    });
    return () => clearTimeout($);
  }, [I, c, o]);
  const J = ($) => {
    var V;
    const G = Math.max(0, Math.min($, v.length - 1));
    A(G), (V = F.current[G]) == null || V.focus();
  }, Re = ($, G) => {
    var V;
    switch ($.key) {
      case "ArrowRight":
        J(G + 1);
        break;
      case "ArrowLeft":
        G === 0 ? u(!0) : J(G - 1);
        break;
      case " ":
        (V = F.current[G]) == null || V.click();
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
  }, z = ($) => {
    const G = F.current.slice(0, v.length).filter((ce) => !!ce);
    if (!G.length)
      return;
    const V = $ !== null && $ < G.length && !tt(), H = `translate ${be.duration}ms ${be.easing}, scale ${be.duration}ms ${be.easing}`, K = G.map((ce) => ce.offsetLeft + Ze / 2), ie = G.map(
      (ce, le) => V && le === $ ? cn : 1
    ), W = V ? (cn - 1) * Ze : 0, Ae = K[0] - Ze / 2, ae = K[K.length - 1] + Ze / 2, Ne = V ? Math.min(
      Math.max(
        (K[$] - Ae) / (ae - Ae || 1),
        Math.max(0, 1 - ln / W)
      ),
      Math.min(1, ln / W)
    ) : 0;
    let Oe = Ae - W * Ne;
    G.forEach((ce, le) => {
      const ge = Ze * ie[le], ne = Oe + ge / 2;
      Oe += ge + an, ce.style.transition = `${H}, background 160ms ease, box-shadow 160ms ease`, ce.style.translate = V ? `${ne - K[le]}px 0` : "", ce.style.scale = V ? String(ie[le]) : "", V ? ce.style.setProperty("--dock-scale", String(ie[le])) : ce.style.removeProperty("--dock-scale");
    });
  }, P = l.useRef(null);
  l.useEffect(() => {
    P.current = null;
  }, [o]);
  const X = ($) => {
    P.current !== $ && (P.current = $, cancelAnimationFrame(B.current), B.current = requestAnimationFrame(() => z($)));
  };
  l.useEffect(() => () => cancelAnimationFrame(B.current), []);
  const te = f.palette.text.primary, oe = x ? f.palette.text.primary : p;
  return /* @__PURE__ */ w(Ce, { children: [
    /* @__PURE__ */ t(ar, { in: I, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      _,
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
          ...s ? { clipPath: Ai(s) } : {},
          zIndex: Ci,
          bgcolor: ni(x)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      cr,
      {
        open: I,
        anchorEl: R ?? E.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Up by half the title, so the tile row (not the whole
          // panel) is centred on the rail icon
          {
            name: "offset",
            options: {
              offset: [-Qo / 2, So]
            }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Ti,
          transition: T ? `transform ${be.duration}ms ${be.easing}` : "none",
          [Te]: { transition: "none" }
        },
        children: ({ TransitionProps: $ }) => /* @__PURE__ */ t(
          Fi,
          {
            in: ($ == null ? void 0 : $.in) ?? I,
            onEnter: $ == null ? void 0 : $.onEnter,
            onExited: $ == null ? void 0 : $.onExited,
            groupKey: (S == null ? void 0 : S.key) ?? null,
            panelProps: d,
            isDark: x,
            solidSurface: g,
            groupText: S == null ? void 0 : S.group.text,
            glassRef: U,
            shapeRef: N,
            children: S ? /* @__PURE__ */ w(Ce, { children: [
              /* @__PURE__ */ t(
                _,
                {
                  "aria-hidden": !0,
                  "data-testid": "sidebar-flyout-title",
                  sx: {
                    px: `${To}px`,
                    height: Qo,
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
                _,
                {
                  ref: C,
                  role: "menu",
                  "aria-label": S.group.text,
                  onPointerLeave: () => X(null),
                  sx: {
                    position: "relative",
                    display: "flex",
                    gap: `${an}px`,
                    // A grown tile fits in the panel's padding
                    // (see DOCK_ROOM_PX)
                    px: 0
                  },
                  children: v.map(({ sub: G, icon: V }, H) => /* @__PURE__ */ t(
                    ts,
                    {
                      ref: (K) => {
                        F.current[H] = K;
                      },
                      sub: G,
                      icon: V,
                      index: H,
                      active: Be(
                        G,
                        i
                      ),
                      tabIndex: H === M ? 0 : -1,
                      onClick: (K) => {
                        St(K) && (K.preventDefault(), a(G.path), u());
                      },
                      onKeyDown: (K) => Re(K, H),
                      onFocus: (K) => {
                        A(H), K.currentTarget.matches(
                          ":focus-visible"
                        ) && X(H);
                      },
                      onHoverStart: (K) => {
                        K !== "touch" && X(H);
                      },
                      accentColor: p,
                      activeForegroundColor: m,
                      labelColor: te,
                      iconColor: oe,
                      isDark: x
                    },
                    G.path
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
}, Ut = 18, $i = 160, Jo = 14, Mi = 22, Li = 2.5, Di = 1, hn = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, s = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(s, 0)) + Math.min(Math.max(n, s), 0) - r.r;
}, ki = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, Ni = (e, o, r) => {
  const n = To, s = Ut, i = Ut + o / 2, c = Math.max(e, ...r.map((b) => b.right + n)), a = {
    cx: c / 2,
    cy: i,
    hx: c / 2,
    hy: o / 2,
    r: zt
  }, u = r.filter((b) => b.bottom - b.top > Ze * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + Ut,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: zt
  })), d = (b, S) => u.reduce(
    (R, E) => ki(R, hn(b, S, E), Mi),
    hn(b, S, a)
  ), p = (b, S) => {
    let R = i, E = i + S * (o / 2 + s);
    if (d(b, R) > 0)
      return null;
    for (let T = 0; T < 12; T += 1) {
      const y = (R + E) / 2;
      d(b, y) <= 0 ? R = y : E = y;
    }
    return R;
  }, m = Math.min(0, ...u.map((b) => b.cx - b.hx)) - 2, g = Math.max(c, ...u.map((b) => b.cx + b.hx)) + 2, f = [], x = [];
  for (let b = m; b <= g; ) {
    const S = p(b, -1), R = p(b, 1);
    if (S !== null && R !== null) {
      const T = +(b + Jo).toFixed(1);
      f.push([T, +S.toFixed(1)]), x.push([T, +R.toFixed(1)]);
    }
    const E = b - m < zt + 4 || g - b < zt + 4;
    b += E ? Di : Li;
  }
  return f.length ? `M ${[...f, ...x.reverse()].map(([b, S]) => `${b} ${S}`).join(" L ")} Z` : "";
}, pn = (e, [o, r], n, s) => {
  Array.from(e.children).forEach((i) => {
    et(i) && (Bt(i), i.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: s,
      fill: r === 0 ? "forwards" : "none"
    }));
  });
}, Fi = ({
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
  children: p
}) => {
  const m = l.useRef(null), g = l.useRef(null), f = l.useRef(null), x = l.useRef(null), I = l.useRef(null), b = oi(i, Et()), S = l.useCallback(
    (z, P, X) => {
      var te, oe;
      (te = I.current) == null || te.setAttribute("cx", String(z)), (oe = I.current) == null || oe.setAttribute("cy", String(P)), x.current && (x.current.style.opacity = String(
        X * (i ? tn.dark.rim : tn.light.rim)
      ));
    },
    [i]
  ), R = l.useRef(null), E = l.useRef(null), T = `lumora-flyout-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, y = l.useRef(0), v = l.useRef(0), C = l.useRef(""), U = () => {
    var $, G, V, H;
    const z = m.current, P = g.current;
    if (!z || !P)
      return !1;
    const X = z.getBoundingClientRect(), te = Array.from(
      z.querySelectorAll('[role="menuitem"]'),
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
    ).filter((K) => K !== null), oe = Ni(
      z.offsetWidth,
      z.offsetHeight,
      te
    );
    return oe === C.current ? !1 : (C.current = oe, P.style.clipPath = `path('${oe}')`, ($ = f.current) == null || $.setAttribute("d", oe), (G = x.current) == null || G.setAttribute("d", oe), (V = R.current) == null || V.setAttribute("d", oe), (H = E.current) == null || H.setAttribute("d", oe), !0);
  }, B = () => {
    if (v.current = 0, y.current)
      return;
    const z = () => {
      if (v.current = U() ? 0 : v.current + 1, v.current > 8) {
        y.current = 0;
        return;
      }
      y.current = requestAnimationFrame(z);
    };
    y.current = requestAnimationFrame(z);
  };
  d.current = B, l.useLayoutEffect(() => (U(), B(), () => {
    cancelAnimationFrame(y.current), y.current = 0;
  }), [n]);
  const N = l.useRef(null), F = l.useRef(null), D = l.useRef(!1), M = (z) => {
    m.current = z;
    const { ref: P } = s;
    typeof P == "function" ? P(z) : P && (P.current = z);
  }, A = () => {
    Bt(u.current), Bt(N.current), Bt(m.current);
  }, J = () => {
    var te;
    const z = m.current, P = u.current, X = N.current;
    if (!(!et(z) || !P || !X)) {
      if (A(), tt()) {
        z.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      F.current = null, P.animate(
        [
          { transform: `scale(${dn}, ${un})` },
          { transform: "none" }
        ],
        { duration: wo.duration, easing: wo.easing }
      ), pn(P, [0, 1], 160, "ease-out");
      try {
        (te = g.current) == null || te.animate(
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
          duration: fn.duration,
          delay: 60,
          easing: fn.easing,
          fill: "backwards"
        }
      );
    }
  }, Re = () => {
    const z = m.current, P = u.current, X = N.current;
    if (!et(z) || !P || !X) {
      r == null || r();
      return;
    }
    if (A(), tt()) {
      z.animate([{ opacity: 1 }, { opacity: 0 }], {
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
    }), pn(P, [1, 0], 200, "ease-in"), P.animate(
      [
        { transform: "none" },
        { transform: `scale(${dn}, ${un})` }
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
      Re();
      return;
    }
    o == null || o(), J();
  }, [e]), l.useLayoutEffect(() => {
    const z = m.current;
    if (!z)
      return;
    const P = z.getBoundingClientRect(), X = F.current;
    if (F.current = { width: P.width, height: P.height }, !D.current) {
      D.current = !0;
      return;
    }
    const te = u.current;
    !e || !X || !et(te) || !P.width || !P.height || tt() || (Bt(te), te.animate(
      [
        {
          transform: `scale(${X.width / P.width}, ${X.height / P.height})`
        },
        { transform: "none" }
      ],
      { duration: be.duration, easing: be.easing }
    ));
  }, [n]), /* @__PURE__ */ w(
    _,
    {
      ref: M,
      onMouseEnter: s.onMouseEnter,
      onMouseLeave: s.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": a,
      sx: {
        position: "relative",
        borderRadius: `${zt}px`,
        p: `${To}px`,
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
        /* @__PURE__ */ w(
          _,
          {
            ref: u,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Ut,
              bottom: -Ut,
              left: -Jo,
              right: -$i,
              pointerEvents: "none",
              // The rail icon's centre: the tile row is level with it
              // (half the title below the panel's middle), one gap
              // plus half the rail's padding to the left
              transformOrigin: `${Jo - Ri}px calc(50% + ${Qo / 2}px)`,
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
                          id: `${T}-shadow`,
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
                          id: `${T}-outside`,
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
                            /* @__PURE__ */ t("path", { ref: E, fill: "black" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ t("g", { mask: `url(#${T}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: R,
                        transform: "translate(0 12)",
                        fill: i ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${T}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                It,
                {
                  ref: g,
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
                        id: `${T}-rim`,
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
                    /* @__PURE__ */ w(
                      "radialGradient",
                      {
                        ref: I,
                        id: `${T}-glint`,
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
                        ref: x,
                        fill: "none",
                        stroke: `url(#${T}-glint)`,
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
        /* @__PURE__ */ t(_, { ref: N, sx: { position: "relative" }, children: p })
      ]
    }
  );
}, ts = l.forwardRef(
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
    activeForegroundColor: p,
    labelColor: m,
    iconColor: g,
    isDark: f
  }, x) => {
    const I = Et(), b = l.useContext(qt), S = (y) => {
      const v = y.currentTarget.getBoundingClientRect();
      y.currentTarget.style.setProperty(
        "--mx",
        `${(y.clientX - v.left) / v.width * 100}%`
      ), y.currentTarget.style.setProperty(
        "--my",
        `${(y.clientY - v.top) / v.height * 100}%`
      );
    }, R = (y) => {
      const v = y.currentTarget;
      !et(v) || tt() || v.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.04, 0.96)", offset: 0.22 },
          { transform: "scale(0.98, 1.025)", offset: 0.5 },
          { transform: "scale(1.01, 0.995)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, E = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, T = {
      ...vr(f, I),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": E
    };
    return /* @__PURE__ */ w(
      ot,
      {
        ref: x,
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
        onMouseEnter: R,
        onPointerEnter: (y) => u(y.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Ze,
          height: Ze,
          borderRadius: `${Ei}px`,
          color: n ? p : m,
          bgcolor: n ? d : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Kt(d, f) : {},
          transition: `translate ${be.duration}ms ${be.easing}, scale ${be.duration}ms ${be.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${ti} ${wo.duration}ms ${wo.easing} both`,
          animationDelay: `${Ii + r * _i}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: wt,
            color: n ? p : g
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
            "& [data-tile-name]": E
          } : T,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : T,
            "& [data-tile-name]": E,
            outline: "2px solid",
            outlineColor: d,
            outlineOffset: 2
          },
          [Te]: {
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
                ...xr(f, b),
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
                [Te]: { transition: "opacity 140ms ease" }
              },
              children: e.text
            }
          )
        ]
      }
    );
  }
);
ts.displayName = "FlyoutTile";
const Pi = 100, Wi = 250, Bi = (e) => {
  const [o, r] = l.useState(null), n = l.useRef(o);
  n.current = o;
  const s = l.useRef(/* @__PURE__ */ new Map()), i = l.useRef(null), c = l.useRef(void 0), a = l.useRef(void 0), u = () => {
    clearTimeout(c.current), c.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, p = (S, R, E = !1) => {
    u(), d(), r({ key: S, pinned: R, focusFirst: E });
  }, m = l.useCallback((S = !1) => {
    var E, T;
    u(), d();
    const R = (E = n.current) == null ? void 0 : E.key;
    r(null), S && R && ((T = s.current.get(R)) == null || T.focus());
  }, []), g = () => {
    u(), !(!n.current || n.current.pinned) && (d(), a.current = setTimeout(() => m(), Wi));
  };
  l.useEffect(() => {
    e || m();
  }, [e, m]), l.useEffect(
    () => () => {
      u(), d();
    },
    []
  );
  const f = o !== null;
  return l.useEffect(() => {
    if (!f)
      return;
    const S = (T) => {
      var v;
      const y = T;
      return y ? (v = i.current) != null && v.contains(y) ? !0 : [...s.current.values()].some((C) => C.contains(y)) : !1;
    }, R = (T) => {
      S(T.target) || m();
    }, E = (T) => {
      var y;
      T.key === "Escape" && m(
        !!((y = i.current) != null && y.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", R), document.addEventListener("keydown", E), () => {
      document.removeEventListener("pointerdown", R), document.removeEventListener("keydown", E);
    };
  }, [f, m]), {
    state: o,
    close: m,
    triggerProps: (S) => ({
      ref: (R) => {
        R ? s.current.set(S, R) : s.current.delete(S);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        d();
        const R = n.current;
        if (R) {
          R.key !== S && p(S, R.pinned);
          return;
        }
        u(), c.current = setTimeout(
          () => p(S, !1),
          Pi
        );
      },
      onMouseLeave: g,
      onClick: (R) => {
        if (R.detail === 0) {
          p(S, !0, !0);
          return;
        }
        const E = n.current;
        (E == null ? void 0 : E.key) === S && E.pinned ? m() : p(S, !0);
      },
      onKeyDown: (R) => {
        R.key === "ArrowRight" && (R.preventDefault(), p(S, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: d,
      onMouseLeave: g
    },
    onRailLeafEnter: () => {
      u(), n.current && !n.current.pinned && m();
    },
    getTrigger: (S) => s.current.get(S) ?? null
  };
}, zi = 264, Gi = 72, mn = 64, lo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Hi = 16, Ui = 14, Xi = 4, Ki = 2.5, gn = "0.7rem", xn = 22, bn = Ee(Sr), lt = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
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
    const p = new ResizeObserver(() => u());
    return p.observe(d), () => p.disconnect();
  }, [u]), /* @__PURE__ */ t(
    we,
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
}, ji = ({
  open: e,
  size: o = Hi
}) => e ? /* @__PURE__ */ t(Ms, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t($s, { sx: { fontSize: o, opacity: 0.75 } }), yn = ({ open: e }) => /* @__PURE__ */ t(
  Ls,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), uo = 600, mt = `${Io}px`, go = 6, Vi = (e) => {
  const o = Math.max(0, e - go);
  return {
    pl: `${Math.max(0, go - o)}px`,
    pr: `${Math.max(0, go - e)}px`
  };
};
function Yi(e, o) {
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
function qi(e, o, r) {
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
      const p = n.getBoundingClientRect(), m = d.getBoundingClientRect();
      let g = 0;
      m.top < p.top + fo ? g = m.top - p.top - fo : m.bottom > p.bottom - fo && (g = m.bottom - p.bottom + fo), g !== 0 && n.scrollBy({ top: g, behavior: u });
    }, i = requestAnimationFrame(() => s("smooth")), c = window.setTimeout(() => s("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const er = ({
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
  headerBackgroundColor: p,
  headerForegroundColor: m,
  brandColor: g,
  activeAccentColor: f = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: I,
  foregroundColor: b,
  surfaceBackgroundColor: S,
  flyoutSurfaceColor: R,
  collapsed: E = !1,
  expandedWidth: T = zi,
  collapsedWidth: y = Gi,
  showLabels: v = !1,
  topInsetPx: C = 0,
  topContent: U,
  footer: B,
  submenuMode: N = "inline"
}) => {
  var ue;
  const F = Ge(), D = F.palette.mode === "dark", M = l.useContext(qt), A = N === "flyout" && E && !v, J = Bi(A), Re = l.useRef(null), z = l.useRef(null), P = l.useRef(null);
  qi(P, r, E);
  const X = Yi(P, A), te = hi(A, D, ((ue = J.state) == null ? void 0 : ue.key) ?? null), oe = mi({
    enabled: A,
    isDark: D,
    color: f,
    containerRef: z
  }), { close: $ } = J;
  l.useEffect(() => {
    $();
  }, [r, $]);
  const [G, V] = l.useState(
    {}
  ), H = I ?? qo(f), K = {
    bgcolor: f,
    color: H,
    "& .MuiListItemIcon-root": { color: H }
  }, ie = {
    bgcolor: f,
    color: H,
    borderRadius: "8px"
  }, W = x ?? Xt(f), Ae = S ?? (D ? F.palette.background.paper : "#ffffff"), ae = b ?? (D ? "text.primary" : f), Ne = p ?? Ae, Oe = m ?? (p ? qo(Ne) : b ?? (D ? F.palette.text.primary : f)), ce = Xt(Oe), le = (h) => {
    n == null || n(h);
  }, ge = (h) => h ? {
    component: "a",
    href: h,
    onClick: (k) => {
      St(k) && (k.preventDefault(), le(h));
    }
  } : {}, ne = (h, k) => {
    V((Y) => ({ ...Y, [h]: !k }));
  }, He = (h, k) => G[k] ?? Ye(h, r), $e = (h, k, Y) => ({
    color: h ? H : ae,
    bgcolor: h ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: h ? H : ae,
      minWidth: Y
    },
    "&:hover": h || v ? K : { bgcolor: k }
  }), Ue = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": K
  }, ft = (h) => {
    const k = Be(h, r), Y = /* @__PURE__ */ w(
      co,
      {
        disabled: !h.path,
        selected: k,
        ...ge(h.path),
        "data-testid": `sidebar-item-${h.text}`,
        "data-active": k ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...h.action && { pr: 6 },
          ...h.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...$e(
            k,
            W,
            h.subtitle ? 48 : 36
          ),
          ...Ue
        },
        children: [
          /* @__PURE__ */ t(Se, { children: h.icon }),
          /* @__PURE__ */ t(
            ze,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                lt,
                {
                  text: h.text,
                  fontWeight: uo
                }
              ),
              secondary: h.subtitle ? /* @__PURE__ */ t(
                _,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    lt,
                    {
                      text: h.subtitle,
                      fontSize: "0.8125rem"
                    }
                  )
                }
              ) : void 0,
              sx: h.subtitle ? { my: 0 } : void 0
            }
          )
        ]
      },
      h.text
    );
    if (!h.action)
      return Y;
    const { action: L } = h;
    return /* @__PURE__ */ w(_, { sx: { position: "relative" }, children: [
      Y,
      /* @__PURE__ */ t(we, { title: L.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        ve,
        {
          "aria-label": L.label,
          "data-testid": `sidebar-action-${h.text}`,
          onClick: () => {
            L.onClick(), s == null || s();
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
            borderColor: k ? "rgba(255, 255, 255, 0.35)" : W,
            color: k ? H : ae,
            "&:hover": {
              bgcolor: k ? "rgba(255, 255, 255, 0.15)" : W
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: k ? H : ae,
              outlineOffset: 1
            }
          },
          children: L.icon
        }
      ) })
    ] }, h.text);
  }, rt = (h) => {
    const k = Ye(h, r), Y = Be(h, r), L = yt("", h), j = He(h, L);
    return /* @__PURE__ */ w(
      _,
      {
        "data-testid": `sidebar-group-${h.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: k ? W : "transparent"
        },
        children: [
          /* @__PURE__ */ w(
            co,
            {
              onClick: () => ne(L, j),
              "data-testid": `sidebar-item-${h.text}`,
              "data-active": Y ? "true" : "false",
              "aria-expanded": j,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...$e(Y, W, 36)
              },
              children: [
                /* @__PURE__ */ t(Se, { children: h.icon }),
                /* @__PURE__ */ t(
                  ze,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      lt,
                      {
                        text: h.text,
                        fontWeight: uo
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(yn, { open: j })
              ]
            }
          ),
          /* @__PURE__ */ t(Yr, { in: j, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            _,
            {
              "data-testid": `sidebar-children-${h.text}`,
              sx: { pb: 0.5 },
              children: h.subitems.map(
                (Z) => Zt(Z, L, 1)
              )
            }
          ) })
        ]
      },
      h.text
    );
  }, Zt = (h, k, Y) => {
    const L = yt(k, h), j = Xi + (Y - 1) * Ki;
    if (vt(h)) {
      const xe = Ye(h, r), fe = Be(h, r), he = He(h, L);
      return /* @__PURE__ */ w(_, { "data-testid": `sidebar-group-${h.text}`, children: [
        /* @__PURE__ */ w(
          co,
          {
            onClick: () => ne(L, he),
            "data-testid": `sidebar-subitem-${h.text}`,
            "data-active": xe ? "true" : "false",
            "aria-expanded": he,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: j,
              ...$e(fe, "action.hover", 32)
            },
            children: [
              h.icon ? /* @__PURE__ */ t(Se, { children: h.icon }) : null,
              /* @__PURE__ */ t(
                ze,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    lt,
                    {
                      text: h.text,
                      fontWeight: uo
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(yn, { open: he })
            ]
          }
        ),
        /* @__PURE__ */ t(Yr, { in: he, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(_, { "data-testid": `sidebar-children-${h.text}`, children: h.subitems.map(
          (Oo) => Zt(Oo, L, Y + 1)
        ) }) })
      ] }, L);
    }
    const Z = Be(h, r);
    return /* @__PURE__ */ w(
      co,
      {
        selected: Z,
        disabled: !h.path,
        ...ge(h.path),
        "data-testid": `sidebar-subitem-${h.text}`,
        "data-active": Z ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: j,
          ...$e(Z, "action.hover", 32),
          ...Ue
        },
        children: [
          h.icon ? /* @__PURE__ */ t(Se, { children: h.icon }) : null,
          /* @__PURE__ */ t(
            ze,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                lt,
                {
                  text: h.text,
                  fontWeight: uo
                }
              )
            }
          )
        ]
      },
      L
    );
  }, Qt = (h, k, Y, L, j, Z) => {
    const xe = !j, fe = /* @__PURE__ */ w(
      ve,
      {
        "aria-label": k,
        disabled: xe,
        ...ge(j),
        onMouseEnter: A ? J.onRailLeafEnter : void 0,
        ...A ? { [jt]: "" } : {},
        "data-testid": (Z == null ? void 0 : Z.testId) ?? `sidebar-item-${k}`,
        "data-active": L ? "true" : "false",
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
          color: L ? H : ae,
          bgcolor: L ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: xn
          },
          "&:hover": ie,
          ...lo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: A ? me : 44,
          height: A ? me : 44,
          color: L ? H : ae,
          bgcolor: L ? f : "transparent",
          borderRadius: L ? "8px" : "50%",
          "&:hover": {
            bgcolor: L ? f : Z != null && Z.insideGroup ? "action.hover" : W,
            borderRadius: "8px"
          },
          ...lo,
          ...A ? eo(L) : {}
        },
        children: [
          Y,
          v ? /* @__PURE__ */ t(
            lt,
            {
              text: k,
              variant: "caption",
              center: !0,
              fontSize: gn
            }
          ) : null
        ]
      }
    );
    return v ? xe ? /* @__PURE__ */ t("span", { children: fe }, h) : /* @__PURE__ */ t(l.Fragment, { children: fe }, h) : /* @__PURE__ */ t(
      we,
      {
        title: k,
        placement: "right",
        arrow: !A,
        ...A ? nt : {},
        children: xe ? /* @__PURE__ */ t("span", { children: fe }) : fe
      },
      h
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
  }, eo = (h) => ({
    borderRadius: `${ee}px`,
    "& .MuiSvgIcon-root": { fontSize: wt },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...h ? { bgcolor: "transparent" } : {},
    transition: `transform ${bn.duration}ms ${bn.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), nt = {
    slotProps: {
      tooltip: { sx: xr(D, M) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, _t = (h) => {
    var j;
    const k = Ye(h, r), Y = yt("", h), L = ((j = J.state) == null ? void 0 : j.key) === Y;
    return /* @__PURE__ */ t(
      _,
      {
        "data-testid": `sidebar-group-${h.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          ve,
          {
            ...J.triggerProps(Y),
            "aria-label": h.text,
            "aria-haspopup": "menu",
            "aria-expanded": L,
            "data-testid": `sidebar-item-${h.text}`,
            "data-active": k ? "true" : "false",
            "data-open": L ? "true" : "false",
            [jt]: "",
            sx: {
              position: "relative",
              width: me,
              height: me,
              color: k ? H : ae,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: k ? f : "transparent",
              ...eo(k),
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
            children: h.icon
          }
        )
      },
      h.text
    );
  }, to = (h) => {
    const k = Ye(h, r), Y = Be(h, r), L = yt("", h), j = He(h, L), Z = /* @__PURE__ */ w(
      ve,
      {
        "aria-label": h.text,
        "aria-expanded": j,
        onClick: () => ne(L, j),
        "data-testid": `sidebar-item-${h.text}`,
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
            _,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: xn
                }
              },
              children: h.icon
            }
          ) : h.icon,
          v ? /* @__PURE__ */ t(
            lt,
            {
              text: h.text,
              variant: "caption",
              center: !0,
              fontSize: gn
            }
          ) : null,
          /* @__PURE__ */ t(ji, { open: j, size: Ui })
        ]
      }
    ), xe = v ? Z : /* @__PURE__ */ t(we, { title: h.text, placement: "right", arrow: !0, children: Z });
    return /* @__PURE__ */ w(
      _,
      {
        "data-testid": `sidebar-group-${h.text}`,
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
          bgcolor: k ? W : "transparent",
          ...v ? {} : { "&:hover": { bgcolor: W } }
        },
        children: [
          xe,
          j ? hr(h.subitems, h.icon).map(
            ({ sub: fe, icon: he }) => Qt(
              fe.path,
              fe.text,
              he,
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
      h.text
    );
  }, st = (h) => /* @__PURE__ */ t(
    _,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Qt(
        h.text,
        h.subtitle ? `${h.text} · ${h.subtitle}` : h.text,
        h.icon,
        Be(h, r),
        h.path,
        { testId: `sidebar-item-${h.text}` }
      )
    },
    h.text
  ), Ct = (h) => vt(h) ? A ? _t(h) : E ? to(h) : rt(h) : E ? st(h) : ft(h), Tt = (h) => /* @__PURE__ */ t(
    ke,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: E ? "center" : "stretch"
      },
      children: h.map(Ct)
    }
  ), At = E ? y : T, Ao = () => {
    var xe, fe;
    const { state: h } = J, k = h ? [...e, ...o].find(
      (he) => vt(he) && yt("", he) === h.key
    ) ?? null : null, Y = k ? ((xe = Re.current) == null ? void 0 : xe.getBoundingClientRect().right) ?? y : y, L = k ? ((fe = Re.current) == null ? void 0 : fe.closest("[data-rail-surface]")) ?? Re.current : null, j = L == null ? void 0 : L.getBoundingClientRect(), Z = L && j ? {
      left: j.left,
      top: j.top,
      width: j.width,
      height: j.height,
      radius: parseFloat(
        getComputedStyle(L).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Oi,
      {
        group: k,
        groupKey: k ? h.key : null,
        anchor: k ? J.getTrigger(h.key) : null,
        railEdge: Y,
        railShape: Z,
        activePath: r,
        focusFirst: h == null ? void 0 : h.focusFirst,
        onNavigate: le,
        onClose: J.close,
        panelProps: J.flyoutProps,
        accentColor: f,
        activeForegroundColor: H,
        solidSurface: R ?? Ae
      }
    );
  }, ht = d ? /* @__PURE__ */ t(
    _,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...A ? { pt: "12px", pb: "12px" } : {
          height: mn,
          minHeight: mn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: Ne
      },
      children: i || c ? /* @__PURE__ */ t(
        vo,
        {
          logo: i,
          title: E ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? Oe,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, oo = !d && i ? /* @__PURE__ */ t(
    _,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: A ? mt : 1
      },
      children: /* @__PURE__ */ t(
        vo,
        {
          logo: i,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? Oe,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, pt = v ? 0.5 : A ? 0.75 : E ? 1 : 1.5;
  return /* @__PURE__ */ t(Rt.Provider, { value: A, children: /* @__PURE__ */ w(
    _,
    {
      ref: Re,
      ...te.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": E ? "true" : "false",
      "data-labeled": v ? "true" : "false",
      sx: {
        width: At,
        minWidth: At,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Ae,
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
          _,
          {
            sx: {
              flexShrink: 0,
              px: pt,
              pt: A ? 0 : 1,
              pb: A ? 0 : 1
            },
            children: U
          }
        ) : null,
        /* @__PURE__ */ t(
          _,
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
                    scrollbarColor: (h) => `${h.palette.divider} transparent`
                  }
                }
              } : {
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
                "&:hover, &:has(:focus-visible)": {
                  scrollbarColor: (h) => `${h.palette.divider} transparent`
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
                backgroundColor: (h) => h.palette.divider
              },
              // On the floating rail the bar (when it takes space at
              // all) stands in for the right padding, and the left
              // padding follows it, so the 40px column keeps equal
              // gaps in the capsule whether the bar is classic,
              // overlay or absent. (The inline collapsed rail keeps
              // its padding: its open groups tint the full row width.)
              ...A ? Vi(X) : { px: pt },
              pt: C && !d ? `${C}px` : A ? mt : 1,
              pb: A ? mt : 2
            },
            children: /* @__PURE__ */ w(
              _,
              {
                ref: z,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  oe.glass,
                  Tt(e),
                  o.length > 0 ? /* @__PURE__ */ w(
                    _,
                    {
                      sx: { mt: "auto", pt: A ? mt : 2 },
                      children: [
                        B ? null : /* @__PURE__ */ t(
                          Je,
                          {
                            sx: {
                              mb: A ? mt : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        Tt(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        B ? /* @__PURE__ */ t(
          _,
          {
            sx: {
              flexShrink: 0,
              px: pt,
              pb: 1.5,
              ...A ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: wt
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              _,
              {
                sx: {
                  borderTop: `1px solid ${ce}`,
                  pt: A ? mt : 1.5
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
}, tr = "var(--lumora-content-padding, 0px)", vn = `calc(${tr} * -1)`, qc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: c
}) => /* @__PURE__ */ t(
  _,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: vn,
        mt: o ? vn : 0,
        // Space below it, like any other block on the page
        mb: tr,
        px: i ? tr : 0,
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
), Ie = {
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
}, gt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, xt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, bt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, os = Eo(), De = os.typography.pxToRem, Rr = (e) => {
  const o = e === "dark", r = [...os.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? Ie[300] : Ie[200],
        main: Ie[400],
        dark: Ie[700],
        contrastText: Ie[50]
      },
      info: o ? {
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
      warning: o ? { light: xt[400], main: xt[500], dark: xt[700] } : { light: xt[300], main: xt[400], dark: xt[800] },
      error: o ? { light: bt[400], main: bt[500], dark: bt[700] } : { light: bt[300], main: bt[400], dark: bt[800] },
      success: o ? { light: gt[400], main: gt[500], dark: gt[700] } : { light: gt[300], main: gt[400], dark: gt[800] },
      grey: _e,
      divider: o ? dt(_e[700], 0.6) : dt(_e[300], 0.4),
      background: o ? { default: _e[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: _e[400] } : { primary: _e[800], secondary: _e[600] },
      action: o ? {
        hover: dt(_e[600], 0.2),
        selected: dt(_e[600], 0.3)
      } : {
        hover: dt(_e[200], 0.2),
        selected: dt(_e[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: De(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: De(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: De(30), lineHeight: 1.2 },
      h4: { fontSize: De(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: De(20), fontWeight: 600 },
      h6: { fontSize: De(18), fontWeight: 600 },
      subtitle1: { fontSize: De(18) },
      subtitle2: { fontSize: De(14), fontWeight: 500 },
      body1: { fontSize: De(14) },
      body2: { fontSize: De(14), fontWeight: 400 },
      caption: { fontSize: De(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Qi = 6, Ji = 8, Sn = (e, o) => typeof e == "object" ? e[o] : e, Uo = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: c = !0,
  contentPadding: a = jn,
  sidebarBackgroundColor: u,
  contentBackgroundColor: d,
  content: p
}) => {
  const m = Fn(r.breakpoints.down("md")), g = e === "dark", f = Yn({
    showSidebar: c,
    isMobile: m,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), x = _o(s, n) ? {
    gutterPx: ut,
    radiusPx: Kn
  } : void 0, I = mo, b = qn(
    Sn(u, e),
    g
  ), S = Zn(
    Sn(d, e),
    g
  ), R = Vn(
    a,
    r
  ), E = x ? /* @__PURE__ */ w(Pt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t(Le, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Pt,
      {
        alignItems: "center",
        spacing: `${Io}px`,
        sx: { mt: 2 },
        children: Array.from({ length: Ji }, (T, y) => /* @__PURE__ */ t(
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
              Le,
              {
                variant: "rounded",
                width: wt,
                height: wt
              }
            )
          },
          y
        ))
      }
    )
  ] }) : /* @__PURE__ */ w(Pt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(Le, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(q, { sx: { height: 8 } }),
    Array.from({ length: Qi }, (T, y) => /* @__PURE__ */ t(Le, { variant: "rounded", width: 28, height: 28 }, y))
  ] });
  return /* @__PURE__ */ t(yo, { theme: o, children: /* @__PURE__ */ w(
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
        m && /* @__PURE__ */ w(
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
              /* @__PURE__ */ t(Le, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(Le, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(q, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(Le, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !m && f > 0 && /* @__PURE__ */ t(
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
                sx: x ? {
                  position: "fixed",
                  top: x.gutterPx,
                  bottom: x.gutterPx,
                  left: x.gutterPx,
                  width: f - 2 * x.gutterPx,
                  borderRadius: `${x.radiusPx}px`,
                  bgcolor: b
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: f,
                  bgcolor: b
                },
                children: E
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
              "--lumora-content-padding": R,
              "--lumora-sticky-top": m ? `${I}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: m ? `${I}px` : 0
            },
            children: p ?? /* @__PURE__ */ w(Ce, { children: [
              /* @__PURE__ */ t(Le, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(Le, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(Pt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: m ? 2 : 4 }, (T, y) => /* @__PURE__ */ t(
                Le,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                y
              )) }),
              /* @__PURE__ */ t(Le, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, or = Eo(Rr("light")), xo = Eo(Rr("dark")), ea = (e) => e === "dark" ? xo : or, ta = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = Nn();
  if (!o) {
    const i = ea(e);
    return /* @__PURE__ */ w(yo, { theme: i, children: [
      /* @__PURE__ */ t(Vo, {}),
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
  return /* @__PURE__ */ w(yo, { theme: or, children: [
    /* @__PURE__ */ t(Vo, {}),
    /* @__PURE__ */ t(
      ks,
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
        muiTheme: or,
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
}, pe = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Ve = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, oa = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ve.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Ve.REFRESH_TOKEN
      ), r = localStorage.getItem(Ve.USER);
      e && !localStorage.getItem(pe.ACCESS_TOKEN) && localStorage.setItem(pe.ACCESS_TOKEN, e), o && !localStorage.getItem(pe.REFRESH_TOKEN) && localStorage.setItem(
        pe.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(pe.USER) && localStorage.setItem(pe.USER, r), (e || o || r) && (localStorage.removeItem(Ve.ACCESS_TOKEN), localStorage.removeItem(Ve.REFRESH_TOKEN), localStorage.removeItem(Ve.USER));
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
}, rs = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Vt = () => {
  try {
    oa();
    const e = Xo(pe.ACCESS_TOKEN), o = Xo(pe.REFRESH_TOKEN), r = Xo(pe.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), rs(pe.USER);
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
}, ra = () => {
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
}, ns = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Q(
        "At least one token must be provided",
        re.TOKEN_INVALID
      );
    return e && Ko(pe.ACCESS_TOKEN, e), o && Ko(pe.REFRESH_TOKEN, o), r && Ko(pe.USER, JSON.stringify(r)), {
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
      pe.ACCESS_TOKEN,
      pe.REFRESH_TOKEN,
      pe.USER,
      // Also clear legacy keys for complete cleanup
      Ve.ACCESS_TOKEN,
      Ve.REFRESH_TOKEN,
      Ve.USER
    ].map((n) => rs(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
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
}, na = () => {
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
}, Zc = (e) => {
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
}, rr = (e, o = "Unknown") => {
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
}, sa = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Jr.create({
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
      var g;
      const a = c.config, u = (g = c.response) == null ? void 0 : g.status, d = (a == null ? void 0 : a.url) || "", p = d.includes("/auth/refresh");
      if (u !== 401 || a._retry || p)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: m } = Vt();
      if (!m) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return rr(f, "AxiosClient - Token Refresh"), Yt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((f, x) => {
          s.push({ resolve: f, reject: x });
        }).then((f) => {
          const {
            accessToken: x,
            refreshToken: I
          } = f;
          if (a.headers && (a.headers.Authorization = `Bearer ${x}`), d.includes("/auth/logout"))
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
      r = !0, n = Jr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: m
        }
      );
      try {
        const f = await n, { accessToken: x, refreshToken: I } = f.data;
        if (ns(x, I, null), i(null, {
          accessToken: x,
          refreshToken: I
        }), a.headers && (a.headers.Authorization = `Bearer ${x}`), d.includes("/auth/logout"))
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
        return rr(
          f,
          "AxiosClient - Token Refresh Failed"
        ), i(f), Yt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, ia = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Vt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return ns(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      rr(s, "TokenValidator - Refresh Failed");
    }
  return Yt(), o ? o() : window.location.href = "/login", !1;
}, Gt = ({ size: e = 20 }) => /* @__PURE__ */ w(
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
), wn = Ee(Sr), je = "#09C1AE", bo = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${je} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
  ...bo(ee, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${ee - 2}px`,
    zIndex: 1,
    background: `${Kt(je, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), En = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = wr(), u = l.useContext(Rt), d = Ge().palette.mode === "dark", p = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", m = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ w(
    ot,
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
        borderColor: r ? je : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: i,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${je}`,
          outlineOffset: 2
        },
        ...n && bo(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Gt, { size: 20 }),
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
        s && /* @__PURE__ */ t(Zi, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && u && Yo ? /* @__PURE__ */ t(we, { title: p, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    ve,
    {
      ...m,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: me,
        height: me,
        borderRadius: `${ee}px`,
        ...Kt(je, d, "clear"),
        ...r && {
          boxShadow: `${Kt(je, d, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${wn.duration}ms ${wn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [Te]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && aa(d)
      },
      children: /* @__PURE__ */ t(Gt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(we, { title: p, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    ve,
    {
      ...m,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": u || void 0,
      sx: {
        width: u ? me : 44,
        height: u ? me : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? je : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && bo(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Gt, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ t(we, { title: p, placement: "left", children: /* @__PURE__ */ t(
    ve,
    {
      ...m,
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
        outline: r ? `2px solid ${je}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${je}` },
        ...n && bo(16, "background.paper")
      },
      children: /* @__PURE__ */ t(_, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Gt, { size: 26 }) })
    }
  ) });
}, ho = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(Fs, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ w(Ps, { children: [
  /* @__PURE__ */ t(Ws, { fontSize: "small" }),
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
    Pn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Nt = 24, ca = 720, la = 1140, da = 1250, ua = ({
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
  const p = l.useRef(!1);
  l.useEffect(() => {
    const I = requestAnimationFrame(() => {
      p.current = !0;
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
  const m = r === "docked", g = Nt + c;
  let f;
  a ? f = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : m ? f = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : f = {
    bottom: g,
    ...n === "left" ? { left: i + Nt } : { right: Nt },
    width: s,
    maxWidth: `calc(100vw - ${Nt * 2}px)`,
    height: `min(${ca}px, calc(100vh - ${g + Nt}px))`,
    borderRadius: "12px"
  };
  const x = /* @__PURE__ */ t(
    lr,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? la : da,
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
  return m ? /* @__PURE__ */ t(
    zs,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...p.current ? {} : { timeout: { enter: 0 } },
      children: x
    }
  ) : /* @__PURE__ */ t(
    Bs,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: x
    }
  );
}, fa = 180, Rn = 250, ha = "#01584F", pa = ({
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
}, ss = (e, o, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : o, c = e ? ha : o;
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
}, is = ({ link: e }) => /* @__PURE__ */ w(ke, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    pa,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), as = (e, o, r) => r ? e : /* @__PURE__ */ t(we, { title: o, placement: "right", arrow: !0, children: e }), ma = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: c
}) => {
  const a = Ge(), [u, d] = l.useState(null), [p, m] = l.useState(!1), g = l.useRef(
    null
  ), f = l.useRef(null), x = l.useRef(null), I = l.useRef(!1), b = l.useRef(!1), S = l.useId(), R = () => {
    g.current && (clearTimeout(g.current), g.current = null);
  }, E = () => {
    R(), g.current = setTimeout(() => {
      m(!1), g.current = null;
    }, fa);
  }, T = () => {
    R(), m(!0);
  };
  l.useEffect(() => {
    if (!p)
      return;
    const N = (F) => {
      var D;
      F.key === "Escape" && (m(!1), (D = x.current) == null || D.focus());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [p]), l.useEffect(() => {
    if (!p || !b.current)
      return;
    const N = globalThis.requestAnimationFrame(() => {
      var D;
      const F = (D = f.current) == null ? void 0 : D.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame(N);
  }, [p]);
  const y = Ye(e, o), { activeBg: v, sx: C } = ss(
    s,
    n,
    y,
    c
  ), U = /* @__PURE__ */ t(
    ve,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        I.current || T();
      },
      onBlur: (N) => {
        var D;
        const F = N.relatedTarget;
        F && ((D = f.current) != null && D.contains(F)) || E();
      },
      onKeyDown: (N) => {
        N.key === "ArrowDown" && (N.preventDefault(), b.current = !0, T());
      },
      onClick: (N) => {
        N.stopPropagation(), !(e.path && !St(N)) && (N.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": p,
      "aria-controls": p ? S : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: C,
      children: c ? /* @__PURE__ */ t(is, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ w(
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
            ref: d,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              I.current = !0, T();
            },
            onMouseLeave: () => {
              I.current = !1, E();
            },
            children: as(U, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          cr,
          {
            open: p && !!u,
            anchorEl: u,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (N) => N.zIndex.modal },
            children: /* @__PURE__ */ t(
              lr,
              {
                ref: f,
                elevation: 0,
                onMouseEnter: R,
                onMouseLeave: E,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: i,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: Rn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  dr,
                  {
                    id: S,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Rn
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
  function B(N, F, D) {
    return N.flatMap((M) => {
      const A = yt(F, M);
      return vt(M) ? [
        /* @__PURE__ */ t(
          Gs,
          {
            disableSticky: !0,
            title: M.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + D * 1.5,
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
        ...B(M.subitems, A, D + 1)
      ] : [
        /* @__PURE__ */ w(
          Qe,
          {
            role: "menuitem",
            title: M.text,
            disabled: !M.path,
            selected: Be(M, o),
            ...M.path && { component: "a", href: M.path },
            onClick: (J) => {
              M.path && !St(J) || (J.preventDefault(), M.path && (r == null || r(M.path)), m(!1));
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + D * 1.5,
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
              M.icon ? /* @__PURE__ */ t(Se, { children: M.icon }) : null,
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
}, ga = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = ss(
    s,
    n,
    c,
    i
  );
  return as(
    /* @__PURE__ */ t(
      ve,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !St(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: a,
        children: i ? /* @__PURE__ */ t(is, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, xa = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), ba = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), In = (e, o) => e.map((r, n) => /* @__PURE__ */ w(l.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(xa, {}) : null
] }, n)), ya = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: c = !1
}) => {
  const a = (d, p) => vt(d) ? /* @__PURE__ */ t(
    ma,
    {
      link: d,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: p,
      surfaceBackgroundColor: i,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    ga,
    {
      link: d,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: p,
      railShowTitles: c
    }
  ), u = c ? 1.25 : 1;
  return /* @__PURE__ */ w(
    ke,
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
        In(e, (d) => a(d, !1)),
        o.length > 0 ? /* @__PURE__ */ w(Ce, { children: [
          /* @__PURE__ */ t(ba, {}),
          /* @__PURE__ */ t(_, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(ke, { gap: u, alignItems: "center", children: In(
            o,
            (d) => a(d, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, va = (e) => e ? Hn(e) : "USER", Sa = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), _n = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, nr = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, Ir = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Us,
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
), cs = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ w(Ce, { children: [
  /* @__PURE__ */ t(Ir, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ w(
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
          de,
          {
            variant: "body2",
            sx: { ..._n, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          de,
          {
            variant: "caption",
            sx: { ..._n, opacity: 0.8, color: "inherit" },
            children: va(o)
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
}, ls = ({
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
  userAvatar: p,
  menuItems: m = [],
  showSettings: g,
  onSettingsClick: f,
  showThemeToggler: x,
  theme: I,
  onThemeToggle: b,
  onLogout: S
}) => {
  const R = (E) => () => {
    o(), E == null || E();
  };
  return /* @__PURE__ */ w(
    Xs,
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
          ke,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              cs,
              {
                name: u,
                role: d,
                avatar: p,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Je, {}),
        i && /* @__PURE__ */ w(Qe, { onClick: R(a), children: [
          /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(zn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ze, { children: "Notifications" }),
          /* @__PURE__ */ t(nr, { count: c })
        ] }),
        m.map((E) => /* @__PURE__ */ w(Qe, { onClick: R(E.onClick), children: [
          E.icon && /* @__PURE__ */ t(Se, { children: E.icon }),
          /* @__PURE__ */ t(ze, { inset: !E.icon, children: E.label }),
          /* @__PURE__ */ t(nr, { count: E.badge })
        ] }, E.key)),
        g && /* @__PURE__ */ w(Qe, { onClick: R(f), children: [
          /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(Hs, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ze, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(Je, {}, "theme-divider"),
          /* @__PURE__ */ w(_, { sx: { px: 1.5, py: 1 }, children: [
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
            /* @__PURE__ */ w(
              Ks,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: I,
                onChange: (E, T) => T && T !== I && (b == null ? void 0 : b()),
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
                  /* @__PURE__ */ t(en, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(en, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Je, {}),
        /* @__PURE__ */ w(
          Qe,
          {
            onClick: R(S),
            sx: {
              color: I === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(Se, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Bn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ze, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, ds = 64, wa = 2, Ft = ({
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
  href: p,
  testId: m
}) => /* @__PURE__ */ w(
  ot,
  {
    ...p && { component: "a", href: p },
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": u,
    "aria-expanded": u ? n : void 0,
    "aria-current": d && n ? "page" : void 0,
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
        _,
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
), Ea = ({
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
  activeColor: p,
  activeBackground: m,
  pinnedLinks: g = [],
  activePath: f,
  onLinkClick: x,
  ...I
}) => {
  const b = g.filter((C) => C.path).slice(0, wa), [S, R] = l.useState(
    null
  ), { userName: E = "User", userAvatar: T, avatarColor: y } = I, v = { color: d, activeColor: p, activeBackground: m };
  return /* @__PURE__ */ w(
    lr,
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
        height: `calc(${ds}px + env(safe-area-inset-bottom, 0px))`,
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
            icon: /* @__PURE__ */ t(Wn, {}),
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
              St(U) && (U.preventDefault(), x == null || x(C.path));
            },
            active: Ye(C, f),
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
                  borderColor: c ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(Gt, { size: 18 })
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
            icon: /* @__PURE__ */ t(ur, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...v
          }
        ),
        a && /* @__PURE__ */ w(Ce, { children: [
          /* @__PURE__ */ t(
            Ft,
            {
              label: "Account",
              ariaLabel: `Account menu for ${E}`,
              icon: /* @__PURE__ */ t(
                Ir,
                {
                  name: E,
                  avatar: T,
                  color: y,
                  size: 26
                }
              ),
              onClick: (C) => R(C.currentTarget),
              active: !!S,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...v
            }
          ),
          /* @__PURE__ */ t(
            ls,
            {
              anchorEl: S,
              onClose: () => R(null),
              placement: "above-end",
              width: 280,
              ...I
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
  js,
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
    children: /* @__PURE__ */ w(
      ke,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(_, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Pn,
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
  endContent: d
}) => /* @__PURE__ */ t(
  Vs,
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
    children: /* @__PURE__ */ w(Ys, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        ve,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(Wn, {})
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
      d ? /* @__PURE__ */ t(_, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: d }) : null
    ] })
  }
), _r = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const c = wr(), a = l.useContext(Rt), u = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    we,
    {
      title: u,
      placement: s,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        ve,
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
              children: /* @__PURE__ */ t(zn, {})
            }
          )
        }
      )
    }
  );
}, us = {
  "&:focus, &:focus-visible": { outline: "none" }
}, _a = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Tn = Ee(Jn), An = Ee(Co), On = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Ca = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = Ge().palette.mode === "dark", c = Et(), a = l.useRef(null), u = l.useRef(null), d = (g) => {
    var f;
    g !== e && (o == null || o()), (f = (g === "light" ? a : u).current) == null || f.focus();
  }, p = (g) => {
    if (!(g.key === "Tab" || g.key === "Escape"))
      switch (g.stopPropagation(), g.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          g.preventDefault(), d(e === "light" ? "dark" : "light");
          break;
        case "Home":
          g.preventDefault(), d("light");
          break;
        case "End":
          g.preventDefault(), d("dark");
          break;
      }
  }, m = (g, f, x, I) => {
    const b = e === g;
    return /* @__PURE__ */ t(
      ot,
      {
        ref: I,
        role: "radio",
        "aria-checked": b,
        "aria-label": f,
        tabIndex: b ? 0 : -1,
        onClick: () => d(g),
        "data-testid": `theme-segment-${g}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${ee}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...s && b ? vr(i, c) : {},
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
            boxShadow: `0 0 0 2px ${dt(r, 0.6)}`
          },
          ...us
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ w(
    ke,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: p,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${ee}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        m("light", "Light", Zs, a),
        m("dark", "Dark", qs, u)
      ]
    }
  );
}, Ta = ({
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
  showThemeToggler: p,
  theme: m,
  onThemeToggle: g,
  onProfileClick: f,
  onLinkClick: x,
  menuItems: I = [],
  onLogout: b,
  glass: S = !1
}) => {
  const R = Ge(), E = R.palette.mode === "dark", T = l.useRef(null), y = gr(R.palette.background.paper), v = Er({
    enabled: S,
    isDark: E,
    selector: On,
    radius: ee
  }), [C, U] = l.useState(null);
  l.useEffect(() => {
    if (!C || typeof ResizeObserver > "u")
      return;
    const M = new ResizeObserver(() => {
      var A;
      (A = T.current) == null || A.updatePosition();
    });
    return M.observe(C), () => M.disconnect();
  }, [C]);
  const B = (M) => {
    r(), M == null || M();
  }, N = (M) => {
    r(), M.onClick ? M.onClick() : M.path && (x == null || x(M.path));
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
  }, D = /* @__PURE__ */ w(ke, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ w(_, { sx: { minWidth: 0, flex: 1 }, children: [
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
    fr,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: T,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...S ? {
        slots: { transition: ar },
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
      children: /* @__PURE__ */ w(
        _,
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
            [`& :is(${On}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ..._a, width: n, minWidth: n },
          children: [
            S ? /* @__PURE__ */ t(
              It,
              {
                isDark: E,
                solid: y,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${br} ${Tn.duration}ms ${Tn.easing} both`,
                  [Te]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ w(
              _,
              {
                ...v.containerProps,
                sx: S ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${yr} ${An.duration}ms ${An.easing} 70ms both`,
                  [Te]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  v.lens,
                  f ? /* @__PURE__ */ t(
                    ot,
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
                        ...us
                      },
                      children: D
                    }
                  ) : /* @__PURE__ */ t(_, { "data-testid": "account-menu-header", children: D }),
                  /* @__PURE__ */ t(Je, {}),
                  p ? /* @__PURE__ */ w(
                    _,
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
                        /* @__PURE__ */ t(Se, { children: /* @__PURE__ */ t(Qs, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(de, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Ca,
                          {
                            glass: S,
                            mode: m,
                            onToggle: g,
                            accentColor: u,
                            tint: d
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ w(
                    dr,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: p ? 0 : 0.5, pb: 0.5 },
                      children: [
                        I.map((M) => /* @__PURE__ */ w(
                          Qe,
                          {
                            onClick: () => N(M),
                            "data-testid": `menu-item-${M.key}`,
                            sx: F,
                            children: [
                              /* @__PURE__ */ t(Se, { children: M.icon }),
                              /* @__PURE__ */ t(de, { sx: { flex: 1 }, children: M.label }),
                              /* @__PURE__ */ t(nr, { count: M.badge })
                            ]
                          },
                          M.key
                        )),
                        b ? /* @__PURE__ */ t(Je, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ w(
                          Qe,
                          {
                            onClick: () => B(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...F,
                              color: E ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(Se, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Bn, { fontSize: "small" }) }),
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
}, Aa = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Oa = ({
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
  headerForegroundColor: p,
  activeAccentColor: m = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: f,
  foregroundColor: x,
  surfaceBackgroundColor: I,
  flyoutSurfaceColor: b,
  collapsed: S,
  expandedWidth: R,
  collapsedWidth: E,
  topContent: T,
  submenuMode: y,
  color: v,
  hoverColor: C,
  avatarColor: U,
  showProfile: B = !0,
  userName: N = "User",
  userEmail: F,
  userRole: D,
  userAvatar: M,
  showNotifications: A = !0,
  notificationCount: J = 0,
  onNotificationsClick: Re,
  whatsNewCount: z = 0,
  onProfileClick: P,
  menuItems: X,
  onLogout: te,
  theme: oe = "light",
  showThemeToggler: $ = !0,
  onThemeToggle: G
}) => {
  const V = Ge(), H = V.palette.mode === "dark", K = I ?? (H ? V.palette.background.paper : "#ffffff"), ie = v ?? x ?? (H ? V.palette.text.primary : m), W = C ?? g ?? Xt(m), Ae = U ?? m, ae = l.useRef(null), [Ne, Oe] = l.useState(!1), ce = D ? Hn(D) : void 0, le = (rt) => /* @__PURE__ */ t(
    Ir,
    {
      name: N,
      avatar: M,
      color: Ae,
      size: rt
    }
  ), ge = J + z, ne = S && y === "flyout", He = A ? /* @__PURE__ */ t(
    _r,
    {
      count: ge,
      onClick: Re,
      color: ie,
      hoverColor: W,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, $e = B ? /* @__PURE__ */ w(
    ot,
    {
      ref: ae,
      onClick: () => Oe(!0),
      "aria-haspopup": "menu",
      "aria-expanded": Ne,
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
        bgcolor: Ne ? W : "transparent",
        "&:hover": { bgcolor: W },
        ...Aa
      },
      children: [
        S && !ne && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Gn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !ge,
              children: le(36)
            }
          )
        ) : le(S ? 36 : 40),
        S ? null : /* @__PURE__ */ w(_, { sx: { minWidth: 0, textAlign: "left" }, children: [
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
  ) : null, Ue = !!He && (!S || ne || !$e);
  return /* @__PURE__ */ w(
    _,
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
          er,
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
            headerForegroundColor: p,
            activeAccentColor: m,
            groupAccentColor: g,
            activeForegroundColor: f,
            foregroundColor: x,
            surfaceBackgroundColor: K,
            flyoutSurfaceColor: b,
            collapsed: S,
            expandedWidth: R,
            collapsedWidth: E,
            topContent: T,
            footer: $e || Ue ? /* @__PURE__ */ w(
              ke,
              {
                direction: ne ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  ne && Ue ? He : null,
                  $e,
                  !ne && Ue ? He : null
                ]
              }
            ) : void 0,
            submenuMode: y
          }
        ),
        B ? /* @__PURE__ */ t(
          Ta,
          {
            open: Ne,
            anchorEl: ae.current,
            onClose: () => Oe(!1),
            width: Math.max(R - 16, 240),
            renderAvatar: le,
            userName: N,
            userEmail: F,
            roleLabel: ce,
            accentColor: m,
            tint: W,
            showThemeToggler: $,
            theme: oe,
            onThemeToggle: G,
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
}, $n = Ee(Jn), Mn = Ee(Co), Ln = 240, $a = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Ma = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: c = !1
}) => {
  const a = Ge(), u = a.palette.mode === "dark", d = !!e, p = gr(a.palette.background.paper), m = Er({
    enabled: c,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: ee
  }), g = /* @__PURE__ */ t(
    dr,
    {
      autoFocusItem: d,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((f) => {
        const x = f.key === n, I = f.accentColor ?? i;
        return /* @__PURE__ */ w(
          Qe,
          {
            selected: x,
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
              /* @__PURE__ */ t(Se, { sx: { minWidth: 24 }, children: /* @__PURE__ */ t(
                _,
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
              x ? /* @__PURE__ */ t(
                Js,
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
    fr,
    {
      open: d,
      anchorEl: e,
      onClose: o,
      onClick: (f) => f.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: ar },
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
          "data-glass": c ? "true" : void 0,
          sx: c ? {
            position: "relative",
            minWidth: Ln,
            borderRadius: `${ee}px`
          } : { ...$a, minWidth: Ln },
          children: c ? /* @__PURE__ */ w(Ce, { children: [
            /* @__PURE__ */ t(
              It,
              {
                isDark: u,
                solid: p,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${br} ${$n.duration}ms ${$n.easing} both`,
                  [Te]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ w(
              _,
              {
                ...m.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${yr} ${Mn.duration}ms ${Mn.easing} 70ms both`,
                  [Te]: { animation: "none" }
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
}, La = ({ children: e, anchorEl: o, ...r }) => {
  const n = l.useRef(null), s = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ w(
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
          Ma,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, Da = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var T;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: u,
    onNotificationsClick: d,
    userName: p = "User",
    userRole: m,
    userAvatar: g
  } = i, f = l.useRef(null), [x, I] = l.useState(
    null
  ), b = !!x, S = l.useRef(e);
  l.useEffect(() => {
    e && !S.current && I(null), S.current = e;
  }, [e]);
  const R = l.useContext(Rt);
  if (!a && !n)
    return null;
  const E = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ w(Ce, { children: [
    /* @__PURE__ */ w(
      ke,
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
              title: e ? p : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                ot,
                {
                  onClick: () => I(f.current),
                  "aria-label": `Account menu for ${p}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": b,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? R ? "2px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: b ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...E
                  },
                  children: /* @__PURE__ */ t(
                    cs,
                    {
                      name: p,
                      role: m,
                      avatar: g,
                      avatarColor: c,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          a && /* @__PURE__ */ t(
            _r,
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
      ls,
      {
        anchorEl: x,
        onClose: () => I(null),
        placement: e ? "beside" : "above",
        width: e || (T = f.current) == null ? void 0 : T.clientWidth,
        ...i
      }
    )
  ] });
}, ka = 120, Na = 300, Dn = Ee(Qn), kn = Ee(Co), Fa = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Pa = 'input, textarea, [contenteditable="true"]', sr = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Pa)) == null || o.focus();
}, Wa = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: s,
  color: i,
  hoverColor: c
}) => {
  const a = wr(), u = l.useContext(Rt), d = l.useRef(null), [p, m] = l.useState(null);
  return l.useEffect(() => {
    o === "full" && n && (sr(d.current), s == null || s());
  }, [o, n, s]), o === "full" ? /* @__PURE__ */ t(
    _,
    {
      ref: d,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && u ? /* @__PURE__ */ t(
    Ba,
    {
      search: e,
      color: i,
      railTooltip: a
    }
  ) : /* @__PURE__ */ w(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(we, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          ve,
          {
            "aria-label": "Search",
            onClick: (g) => o === "expand" ? r == null ? void 0 : r() : m(g.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: i,
              borderRadius: "8px",
              "&:hover": { bgcolor: c }
            },
            children: /* @__PURE__ */ t(ur, {})
          }
        ) }),
        /* @__PURE__ */ t(
          fr,
          {
            open: !!p,
            anchorEl: p,
            onClose: () => m(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (g) => sr(g)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, Ba = ({ search: e, color: o, railTooltip: r }) => {
  const n = Ge().palette.mode === "dark";
  si(n, Zo(o, n ? 0.3 : 0.35));
  const s = `rgb(${Et()})`, i = gr(n ? "#1e2430" : "#ffffff"), c = {
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
  }, a = l.useRef(null), u = l.useRef(null), [d, p] = l.useState(!1), m = l.useRef(!1), g = l.useRef(void 0), f = l.useRef(void 0), x = () => {
    clearTimeout(g.current), clearTimeout(f.current);
  }, I = l.useCallback(() => {
    x(), m.current = !1, p(!1);
  }, []), b = () => {
    clearTimeout(f.current), d || (clearTimeout(g.current), g.current = setTimeout(
      () => p(!0),
      ka
    ));
  }, S = () => {
    clearTimeout(g.current), clearTimeout(f.current), f.current = setTimeout(() => {
      !m.current && !Fa(u.current) && p(!1);
    }, Na);
  };
  return l.useEffect(() => x, []), l.useEffect(() => {
    if (!d)
      return;
    const R = setTimeout(() => sr(u.current)), E = (y) => {
      var C, U;
      const v = y.target;
      !((C = u.current) != null && C.contains(v)) && !((U = a.current) != null && U.contains(v)) && I();
    }, T = (y) => {
      var v;
      y.key === "Escape" && (I(), (v = a.current) == null || v.focus());
    };
    return document.addEventListener("pointerdown", E), document.addEventListener("keydown", T), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", E), document.removeEventListener("keydown", T);
    };
  }, [d, I]), /* @__PURE__ */ w(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          we,
          {
            title: d ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              ve,
              {
                ref: a,
                "aria-label": "Search",
                "aria-expanded": d,
                onMouseEnter: b,
                onMouseLeave: S,
                onClick: () => {
                  x(), m.current = !0, p(!0);
                },
                sx: {
                  width: me,
                  height: me,
                  color: o,
                  borderRadius: `${ee}px`
                },
                children: /* @__PURE__ */ t(
                  ur,
                  {
                    sx: { fontSize: wt }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          cr,
          {
            open: d,
            anchorEl: a.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ w(
              _,
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
                    It,
                    {
                      isDark: n,
                      solid: i,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${br} ${Dn.duration}ms ${Dn.easing} both`,
                        [Te]: { animation: "none" }
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
                        ...c,
                        animation: `${yr} ${kn.duration}ms ${kn.easing} 60ms both`,
                        [Te]: { animation: "none" }
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
}, za = 80, Ga = 300, Ha = (e) => {
  const o = l.useRef(/* @__PURE__ */ new WeakSet()), r = l.useRef(void 0), n = l.useRef(void 0), [s, i] = l.useState(!1), [c, a] = l.useState(!1), u = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  return l.useEffect(() => {
    if (!e) {
      u(), i(!1), a(!1);
      return;
    }
    const p = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), a(!1);
      }, Ga));
    }, m = (g) => {
      o.current.has(g) || p();
    };
    return document.addEventListener("mouseover", m), document.documentElement.addEventListener("mouseleave", p), () => {
      u(), document.removeEventListener("mouseover", m), document.documentElement.removeEventListener(
        "mouseleave",
        p
      );
    };
  }, [e]), { shown: e && (s || c), rootProps: {
    onMouseOver: (p) => {
      o.current.add(p.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, za));
    },
    onFocus: (p) => {
      Ua(p.target) && a(!0);
    },
    onBlur: (p) => {
      const m = p.relatedTarget;
      (!m || !p.currentTarget.contains(m)) && a(!1);
    },
    onKeyDown: (p) => {
      p.key === "Escape" && (a(!1), i(!1));
    }
  } };
}, Ua = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Xa = 100, Ka = () => {
  const e = l.useRef(null), o = l.useRef(void 0), r = l.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = l.useState(!1), [i, c] = l.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return l.useEffect(() => {
    const d = (m) => {
      r.current.has(m) || (a(), s(!1));
    }, p = () => {
      a(), s(!1);
    };
    return document.addEventListener("mouseover", d), document.documentElement.addEventListener("mouseleave", p), () => {
      a(), document.removeEventListener("mouseover", d), document.documentElement.removeEventListener(
        "mouseleave",
        p
      );
    };
  }, []), l.useEffect(() => {
    if (!i)
      return;
    const d = (p) => {
      var m;
      (m = e.current) != null && m.contains(p.target) || c(!1);
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
        }, Xa));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (d) => {
        const p = d.relatedTarget;
        p && !d.currentTarget.contains(p) && c(!1);
      },
      onKeyDown: (d) => {
        d.key === "Escape" && c(!1);
      }
    }
  };
}, ja = 300, jo = 288, Va = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Ya = 6, qa = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", Za = 68, Qa = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Ja = typeof window > "u" ? po : Ds, Qc = ({
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
  mobileBottomBarLinks: p,
  logo: m,
  onBrandClick: g,
  searchComponent: f,
  brandColor: x,
  contentPadding: I = jn,
  userMenuItems: b,
  sidebarBackgroundColor: S,
  sidebarHeaderBackgroundColor: R,
  groupAccentColor: E,
  activeSidebarForegroundColor: T,
  enableRefreshToken: y = !1,
  holdSessionSkeleton: v = !1,
  sessionSkeletonContent: C,
  activePath: U,
  onLinkClick: B,
  showProfile: N = !0,
  userName: F,
  userRole: D,
  userAvatar: M,
  userEmail: A,
  onLogout: J,
  showSettings: Re = !0,
  onSettingsClick: z,
  onProfileClick: P,
  showNotifications: X = !0,
  notificationCount: te = 0,
  NotificationSidebarContent: oe,
  whatsNewCount: $ = 0,
  onNotificationsClick: G,
  platforms: V,
  currentPlatformKey: H,
  onPlatformSelect: K,
  onVerify: ie,
  alertProps: W,
  style: Ae,
  sidebarStyles: ae,
  contentStyles: Ne,
  accentColor: Oe,
  sidebarAccentColor: ce,
  sidebarForegroundColor: le,
  contentBackgroundColor: ge,
  theme: ne = "light",
  darkModeSelector: He,
  showThemeToggler: $e = !1,
  onThemeToggle: Ue,
  GlobalChatSidebar: ft,
  useChatSidebar: rt,
  chatPanelMode: Zt = "docked",
  chatPanelPosition: Qt = "right",
  chatPanelWidth: Jt = 420,
  onChatClose: eo,
  showAssistant: nt = !1,
  assistantPlacement: _t = "sidebar",
  assistantShortcut: to = "j",
  onAssistantClick: st,
  assistantActive: Ct = !1,
  assistantBusy: Tt = !1,
  customNavbar: At,
  customNavbarProps: Ao,
  redirectToLogin: ht,
  apiBaseUrl: oo
}) => {
  const pt = Nn(), ue = Fn(pt.breakpoints.down("md")), h = qr(
    () => Eo(Rr(ne)),
    [ne]
  ), k = ne === "dark", Y = Oe ?? "#01584f", L = ce ?? Y, j = Zn(
    typeof ge == "object" ? ge[ne] : ge,
    k
  ), Z = c === "collapsible", xe = c === "panel", fe = xe && s && !ue, he = c === "rail-labeled", Oo = Z || he, Fe = qn(
    S,
    k
  ), $o = R ?? Fe, Pe = le ?? (k ? "#ffffff" : L), Ot = E ?? Xt(Pe), $t = R ? qo($o) : Pe, Cr = (O) => /* @__PURE__ */ t(
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
  ), ro = x ?? $t, [Tr, Mo] = ct(
    null
  ), Lo = ((V == null ? void 0 : V.length) ?? 0) > 1, fs = Zr(() => Mo(null), []), hs = (O) => {
    Mo(null), K ? K(O) : O.key !== H && O.url && window.location.assign(O.url);
  }, Ar = (O) => Lo ? /* @__PURE__ */ t(
    La,
    {
      anchorEl: Tr,
      onClose: fs,
      platforms: V,
      currentKey: H,
      onSelect: hs,
      accentColor: Y,
      glass: a === "flyout" && (Z || xe) && !ue,
      children: O
    }
  ) : O, no = Lo ? (O) => Mo(O.currentTarget) : g, so = Lo ? !!Tr : void 0, Do = Ar(
    m ?? Cr(ro)
  ), ps = Ar(
    m ?? Cr(x ?? Pe)
  ), ko = Ka(), Me = _o(a, c), We = Me || !ko.expanded, it = s && !ue && ai(u, a, c), Mt = Ha(it), Or = Me ? "popover" : "expand", $r = Me ? Ht : Wt, Mr = Me ? "transparent" : Fe, Lr = Me && !R ? "transparent" : $o, [ms, Dr] = ct(!1), gs = Zr(() => Dr(!1), []), Xe = Yn({
    showSidebar: s,
    isMobile: ue,
    sidebarVariant: c,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [kr, at] = ct(!1), [Nr, No] = ct(!1), ye = ue && d === "bottom-bar", Fr = `calc(${ds}px + env(safe-area-inset-bottom, 0px))`, [Fo, Pr] = ct({ open: !1, tab: "notifications" }), Wr = () => Pr((O) => ({ ...O, open: !1 })), xs = X && !!oe, [bs, ys] = ct(!0), [vs, Ss] = ct(!1), Po = rt == null ? void 0 : rt(), Br = (Po == null ? void 0 : Po.isOpen) ?? !1, zr = Zt === "floating" ? "floating" : "docked", ws = zr === "docked" && Br && ft && !ue ? Jt : 0, io = Ho(ie), Gr = Ho(!1), Hr = qr(
    () => sa(oo),
    [oo]
  );
  po(() => {
    io.current = ie;
  }, [ie]);
  const Wo = Ho(st);
  Wo.current = st;
  const Lt = nt && to ? to.toLowerCase() : null;
  po(() => {
    if (!Lt)
      return;
    const O = (se) => {
      (se.metaKey || se.ctrlKey) && !se.altKey && !se.shiftKey && se.key.toLowerCase() === Lt && Wo.current && (se.preventDefault(), Wo.current());
    };
    return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
  }, [Lt]);
  const Ur = (O) => {
    const se = J(O);
    se instanceof Promise && se.catch((Ke) => {
      console.error("Error in logout handler:", Ke);
    });
  };
  if (Ja(() => {
    (() => {
      var se;
      try {
        const { isAuthenticated: Ke } = ra();
        if (!Ke) {
          console.log("No session found, redirecting to login"), Yt(), ht();
          return;
        }
        if (!Gr.current) {
          const { user: kt, error: Go } = na();
          if (kt && !Go) {
            const Os = {
              name: kt.name || "",
              email: kt.email || "",
              profilePicture: kt.profilePicture || "",
              role: kt.role || ""
            };
            Gr.current = !0, (se = io.current) == null || se.call(io, Os);
          } else
            Go && console.error("Error getting user data:", Go);
        }
        Ss(!0);
      } catch (Ke) {
        console.error("Error checking session:", Ke), Yt(), ht();
      } finally {
        ys(!1);
      }
    })();
  }, [ht]), po(() => {
    y && ia(Hr, ht);
  }, [y, Hr]), bs || v)
    return /* @__PURE__ */ t(
      ta,
      {
        theme: ne,
        darkModeSelector: He,
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
  if (!vs)
    return null;
  const Dt = f ?? (At ? /* @__PURE__ */ t(At, { ...Ao }) : null), Es = (O) => {
    at(!1), No(!1), Pr({ open: !0, tab: O });
  }, Bo = oe && (() => Es("notifications")), Rs = te + $, Xr = {
    avatarColor: L,
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
    userRole: D,
    userAvatar: M,
    showSettings: Re,
    onSettingsClick: z,
    showThemeToggler: $e,
    theme: ne,
    onThemeToggle: Ue,
    onLogout: Ur
  }, zo = (O) => /* @__PURE__ */ t(
    Da,
    {
      ...Xr,
      compact: O,
      color: Pe,
      hoverColor: Ot
    }
  ), Kr = Lt ? [Qa() ? "⌘" : "Ctrl", Lt.toUpperCase()] : void 0, Is = (O) => nt && _t === "sidebar" ? /* @__PURE__ */ t(
    En,
    {
      variant: O ? "sidebar-icon" : "sidebar",
      onClick: st,
      active: Ct,
      busy: Tt,
      shortcutKeys: Kr,
      accentColor: Pe
    }
  ) : null, _s = (O) => Dt ? /* @__PURE__ */ t(
    Wa,
    {
      search: Dt,
      mode: O,
      onExpand: () => {
        ko.pin(), Dr(!0);
      },
      autoFocus: ms,
      onAutoFocused: gs,
      color: Pe,
      hoverColor: Ot
    }
  ) : null, ao = (O) => {
    const se = Is(O !== "full"), Ke = _s(O);
    return se || Ke ? /* @__PURE__ */ w(
      Pt,
      {
        spacing: Me ? `${Io}px` : 1.5,
        sx: { alignItems: O === "full" ? "stretch" : "center" },
        children: [
          se,
          Me && se && Ke ? /* @__PURE__ */ t(
            q,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Xt(Pe)}`
              }
            }
          ) : null,
          Ke
        ]
      }
    ) : void 0;
  }, jr = () => /* @__PURE__ */ t(
    er,
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
      headerBackgroundColor: Z ? Lr : void 0,
      headerForegroundColor: Z ? $t : void 0,
      activeAccentColor: L,
      groupAccentColor: E,
      activeForegroundColor: T,
      foregroundColor: le,
      surfaceBackgroundColor: Mr,
      flyoutSurfaceColor: Fe,
      collapsed: he || We,
      showLabels: he,
      expandedWidth: jo,
      collapsedWidth: he ? Xn : $r,
      topContent: ao(
        he ? "popover" : We ? Or : "full"
      ),
      footer: zo(he || We),
      submenuMode: Me ? "flyout" : "inline"
    }
  ), Vr = (O) => Me ? Cs(O) : Ts(O), Cs = (O) => /* @__PURE__ */ w(
    q,
    {
      component: "aside",
      ...it ? Mt.rootProps : {},
      "data-auto-hide": it ? "true" : void 0,
      "data-shown": it ? String(Mt.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (se) => se.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...it ? {
          position: "fixed",
          left: 0,
          width: Ht + 2 * ut,
          pointerEvents: "none"
        } : {
          width: Xe,
          minWidth: Xe,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: j
        }
      },
      children: [
        it && /* @__PURE__ */ t(
          q,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Ya,
              pointerEvents: "auto"
            }
          }
        ),
        /* @__PURE__ */ w(
          q,
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            sx: {
              position: "absolute",
              top: ut,
              bottom: ut,
              left: ut,
              width: Ht,
              borderRadius: `${Kn}px`,
              display: "flex",
              flexDirection: "column",
              ...it && {
                pointerEvents: Mt.shown ? "auto" : "none",
                opacity: Mt.shown ? 1 : 0,
                transform: Mt.shown ? "none" : `translateX(calc(-100% - ${2 * ut}px))`,
                transition: qa,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...ae
            },
            children: [
              /* @__PURE__ */ t(
                It,
                {
                  isDark: k,
                  solid: Fe,
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
  ), Ts = (O) => /* @__PURE__ */ t(
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
          ...Me ? {} : ko.rootProps,
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
            bgcolor: Fe,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: We ? "none" : `4px 0 24px rgba(0, 0, 0, ${k ? 0.5 : 0.12})`,
            transition: Va,
            ...ae
          },
          children: O
        }
      )
    }
  ), As = Vn(
    I,
    pt
  );
  return /* @__PURE__ */ t(yo, { theme: h, children: /* @__PURE__ */ t(Un.Provider, { value: L, children: /* @__PURE__ */ t(qt.Provider, { value: Fe, children: /* @__PURE__ */ w(
    q,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Ae
      },
      children: [
        /* @__PURE__ */ t(Vo, {}),
        ue && /* @__PURE__ */ t(
          Ia,
          {
            height: mo,
            onMenuClick: s && !ye ? () => at(!0) : void 0,
            appName: n,
            logo: Do,
            onBrandClick: no,
            brandMenuOpen: so,
            background: $o,
            color: $t,
            brandColor: ro,
            endContent: X ? /* @__PURE__ */ t(
              _r,
              {
                count: Rs,
                onClick: Bo,
                color: $t,
                hoverColor: Ot,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !ue && he && /* @__PURE__ */ t(
          q,
          {
            component: "aside",
            sx: {
              width: Xe,
              minWidth: Xe,
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
            children: jr()
          }
        ),
        s && !ue && Z && Vr(
          /* @__PURE__ */ w(Ce, { children: [
            jr(),
            (W == null ? void 0 : W.show) && !We && /* @__PURE__ */ t(ho, { ...W })
          ] })
        ),
        fe && Vr(
          /* @__PURE__ */ w(Ce, { children: [
            /* @__PURE__ */ t(
              Oa,
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
                headerBackgroundColor: Lr,
                headerForegroundColor: $t,
                activeAccentColor: L,
                groupAccentColor: E,
                activeForegroundColor: T,
                foregroundColor: le,
                surfaceBackgroundColor: Mr,
                flyoutSurfaceColor: Fe,
                collapsed: We,
                expandedWidth: jo,
                collapsedWidth: $r,
                topContent: ao(
                  We ? Or : "full"
                ),
                submenuMode: Me ? "flyout" : "inline",
                color: Pe,
                hoverColor: Ot,
                avatarColor: L,
                showProfile: N,
                userName: F,
                userEmail: A,
                userRole: D,
                userAvatar: M,
                showNotifications: X,
                notificationCount: te,
                onNotificationsClick: xs ? Bo : G,
                whatsNewCount: $,
                onProfileClick: P,
                menuItems: b,
                onLogout: Ur,
                theme: ne,
                showThemeToggler: $e,
                onThemeToggle: Ue
              }
            ),
            (W == null ? void 0 : W.show) && !We && /* @__PURE__ */ t(ho, { ...W })
          ] })
        ),
        s && !ue && !Oo && !xe && /* @__PURE__ */ t(
          Qr,
          {
            variant: "permanent",
            sx: {
              width: Xe,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Xe,
                boxSizing: "border-box",
                bgcolor: j,
                borderRight: "none"
              },
              ...ae
            },
            children: /* @__PURE__ */ w(
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
                          logo: ps,
                          appName: n,
                          onClick: no,
                          menuOpen: so,
                          color: x ?? Pe,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  ao("popover"),
                  /* @__PURE__ */ w(
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
                          ya,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: U,
                            onLinkClick: B,
                            accentColor: L,
                            surfaceBackgroundColor: j,
                            railShowTitles: i
                          }
                        ),
                        (W == null ? void 0 : W.show) && /* @__PURE__ */ t(ho, { ...W })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(q, { sx: { py: 1.5 }, children: zo(!0) })
                ]
              }
            )
          }
        ),
        s && ue && /* @__PURE__ */ w(
          Ns,
          {
            anchor: ye ? "bottom" : "left",
            open: kr,
            onOpen: () => at(!0),
            onClose: () => at(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (O) => O.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Fe,
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
                er,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: U,
                  onLinkClick: (O) => {
                    B == null || B(O), at(!1);
                  },
                  onLinkAction: () => at(!1),
                  collapsed: !1,
                  expandedWidth: ye ? "100%" : ja,
                  activeAccentColor: L,
                  groupAccentColor: E,
                  activeForegroundColor: T,
                  foregroundColor: le,
                  surfaceBackgroundColor: Fe,
                  topInsetPx: ye ? 8 : 0,
                  topContent: ye ? void 0 : ao("full"),
                  footer: ye ? void 0 : zo(!1)
                }
              ),
              (W == null ? void 0 : W.show) && /* @__PURE__ */ t(ho, { ...W })
            ]
          }
        ),
        ye && Dt && /* @__PURE__ */ t(
          Ra,
          {
            open: Nr,
            onClose: () => No(!1),
            search: Dt
          }
        ),
        ye && /* @__PURE__ */ t(
          Ea,
          {
            ...Xr,
            pinnedLinks: p,
            activePath: U,
            onLinkClick: B,
            onMenuClick: s ? () => at(!0) : void 0,
            menuOpen: kr,
            onSearchClick: Dt ? () => No(!0) : void 0,
            searchOpen: Nr,
            showAssistant: nt,
            onAssistantClick: st,
            assistantActive: Ct,
            showProfile: N,
            background: Fe,
            color: Pe,
            activeColor: L,
            activeBackground: Ot
          }
        ),
        /* @__PURE__ */ t(
          q,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": As,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": ue ? `${mo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Xe ? `calc(100% - ${Xe}px)` : "100%",
              mt: ue ? `${mo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ye && {
                pb: `calc(var(--lumora-content-padding) + ${Fr})`
              },
              backgroundColor: j,
              ...Ne
            },
            children: e
          }
        ),
        ft && /* @__PURE__ */ t(
          ua,
          {
            open: Br,
            variant: zr,
            position: Qt,
            width: Jt,
            sidebarWidthPx: Xe,
            bottomOffsetPx: nt && _t === "floating" ? Za : 0,
            fullScreen: ue,
            fullScreenBottom: ye ? Fr : "0px",
            onClose: eo,
            children: /* @__PURE__ */ t(ft, {})
          }
        ),
        nt && _t === "floating" && !ye && /* @__PURE__ */ t(
          En,
          {
            variant: "floating",
            rightOffsetPx: ws,
            shortcutKeys: Kr,
            onClick: st,
            active: Ct,
            busy: Tt
          }
        ),
        X && oe && /* @__PURE__ */ t(
          Qr,
          {
            anchor: "right",
            open: Fo.open,
            onClose: Wr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              oe,
              {
                onClose: Wr,
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
  er as CollapsibleSidebar,
  qc as FullBleedSection,
  Zi as Kbd,
  ta as LumoraShellSkeleton,
  Qc as LumoraWrapper,
  Yt as clearAuthTokens,
  Qc as default,
  Zc as getAuthErrorMessage,
  Vt as getAuthTokens,
  na as getCurrentUser,
  Rr as getDesignTokens,
  ra as isAuthenticated,
  rr as logAuthError,
  ns as storeAuthTokens
};
