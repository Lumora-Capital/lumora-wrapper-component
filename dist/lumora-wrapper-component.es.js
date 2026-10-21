import { jsx as t, jsxs as w, Fragment as Te } from "react/jsx-runtime";
import Ci from "@mui/icons-material/KeyboardArrowDownRounded";
import Ti from "@mui/icons-material/KeyboardArrowUpRounded";
import Ai from "@mui/icons-material/ChevronRightRounded";
import T from "@mui/material/Box";
import Ur from "@mui/material/Collapse";
import Je from "@mui/material/Divider";
import ve from "@mui/material/IconButton";
import ro from "@mui/material/ListItemButton";
import we from "@mui/material/ListItemIcon";
import ze from "@mui/material/ListItemText";
import Ne from "@mui/material/Stack";
import Re from "@mui/material/Tooltip";
import ce from "@mui/material/Typography";
import { useTheme as Ge, createTheme as yo, alpha as ct, ThemeProvider as po } from "@mui/material/styles";
import * as l from "react";
import { useMemo as Xr, useState as st, useCallback as Kr, useRef as Wo, useEffect as co, useLayoutEffect as Oi } from "react";
import ot from "@mui/material/ButtonBase";
import { keyframes as er } from "@emotion/react";
import tr from "@mui/material/Fade";
import or from "@mui/material/Popper";
import { useTheme as Mn, CssBaseline as Ho, GlobalStyles as $i, Box as q, useMediaQuery as Ln, Stack as Dt, Skeleton as Le, Drawer as jr, SwipeableDrawer as Mi } from "@mui/material";
import Vr from "axios";
import Li from "@mui/material/Card";
import Di from "@mui/material/CardContent";
import Dn from "@mui/material/Button";
import Ni from "@mui/icons-material/AutoAwesomeRounded";
import ki from "@mui/material/Grow";
import rr from "@mui/material/Paper";
import Fi from "@mui/material/Slide";
import Wi from "@mui/material/ListSubheader";
import Qe from "@mui/material/MenuItem";
import nr from "@mui/material/MenuList";
import Nn from "@mui/icons-material/MenuRounded";
import ir from "@mui/icons-material/SearchRounded";
import kn from "@mui/icons-material/LogoutRounded";
import Fn from "@mui/icons-material/NotificationsNoneOutlined";
import Pi from "@mui/icons-material/SettingsOutlined";
import Bi from "@mui/material/Avatar";
import zi from "@mui/material/Menu";
import qr from "@mui/material/ToggleButton";
import Gi from "@mui/material/ToggleButtonGroup";
import Hi from "@mui/material/Drawer";
import Ui from "@mui/material/AppBar";
import Xi from "@mui/material/Toolbar";
import Wn from "@mui/material/Badge";
import Ki from "@mui/icons-material/DarkModeOutlined";
import ji from "@mui/icons-material/LightModeOutlined";
import Vi from "@mui/icons-material/SettingsBrightnessOutlined";
import sr from "@mui/material/Popover";
import qi from "@mui/icons-material/CheckRounded";
const mo = ({
  logo: e,
  title: o,
  appName: r,
  onClick: n,
  color: i,
  testId: s,
  menuOpen: c
}) => {
  const a = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: i,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, h = /* @__PURE__ */ w(Te, { children: [
    o ? /* @__PURE__ */ t(
      ce,
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
    ot,
    {
      onClick: n,
      "aria-label": c === void 0 ? `${r} home` : `${r}: switch platform`,
      ...c !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": c
      },
      "data-testid": s,
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
          outlineColor: i,
          outlineOffset: 2
        }
      },
      children: h
    }
  ) : /* @__PURE__ */ t(Ne, { direction: "row", "data-testid": s, sx: a, children: h });
}, Yr = !1, bt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, xt = (e, o) => e ? `${e}/${o.text}` : o.text, qe = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => qe(n, o))) ?? !1 : !1;
}, Be = (e, o) => !!(o && e.path === o), ar = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return bt(r) ? ar(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Uo = (e) => {
  const o = So(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((c) => {
    const a = c / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, zt = (e) => {
  const o = So(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, Xo = (e, o) => {
  const r = So(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, So = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Pn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), cr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Yi = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Zi = er`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ae = "@media (prefers-reduced-motion: reduce)", ee = 6, lr = "9, 193, 174", Bn = l.createContext(
  void 0
), Kt = l.createContext(
  void 0
), dr = (e) => l.useContext(Kt) ?? e, St = () => {
  const e = l.useContext(Bn), o = e ? So(e) : null;
  return o ? o.join(", ") : lr;
}, Zr = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, Qi = (e, o) => e ? "255, 255, 255" : o, Ji = (e, o, r = lr) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${Yi(e)}, 0 0 0 1px ${cr(e)}`
}), es = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", ur = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: cr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${ee}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), fr = er`
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
`, hr = er`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, pr = (e, o = lr, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Gt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: Xo(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${Xo(e, 0.45)}`
}, ts = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${cr(e)}`;
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
}, os = 100, zn = 80, lo = 56, Nt = 72, go = 52, ye = 40, yt = 20, vo = 4, Pt = 8, Gn = ee, Hn = { xs: 2, md: "18px" }, Un = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, mr = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), Xn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n
}) => !e || o ? 0 : r === "rail-labeled" ? zn : mr(n, r) ? go + 2 * Pt : r === "collapsible" || r === "panel" ? Nt : os, Kn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), jn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Vn = { stiffness: 320, damping: 24 }, qn = { stiffness: 320, damping: 28 }, gr = { stiffness: 520, damping: 20 }, Yn = { stiffness: 380, damping: 36 }, wo = { stiffness: 260, damping: 28 }, rs = "cubic-bezier(0.32, 1.28, 0.52, 1)", ns = 420, Qr = 60, is = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Jr = /* @__PURE__ */ new Map(), Ee = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = Jr.get(n);
  if (i)
    return i;
  if (!is)
    return { easing: rs, duration: ns };
  const s = 1 / 600;
  let c = 0, a = 0, h = 0, d = 1 / Qr;
  const m = [0];
  for (; h < 3; ) {
    const p = (-e * (c - 1) - o * a) / r;
    if (a += p * s, c += a * s, h += s, h >= d && (m.push(c), d += 1 / Qr, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const g = {
    easing: `linear(${m.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(h * 1e3)
  };
  return Jr.set(n, g), g;
}, et = (e) => !!(e && typeof e.animate == "function"), tt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, kt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, ss = (e, o = 1.14) => {
  if (!et(e) || tt())
    return;
  const r = Ee(gr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, Ht = "data-rail-item", as = `[${Ht}], button, [role="button"]`, vt = l.createContext(!1), xr = () => {
  const e = l.useContext(vt), o = Ge(), r = l.useContext(Kt);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: ur(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ye = Ee(Yn), br = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  pinSelector: s,
  pinKey: c = null
}) => {
  const a = l.useRef(null), h = St(), [d, m] = l.useState(null), g = l.useRef(null), p = l.useRef(null), u = (v, y) => {
    p.current = y;
    const _ = y.getBoundingClientRect(), B = v.getBoundingClientRect(), V = n ?? _.width, W = n ?? _.height, F = {
      top: Math.round(_.top - B.top + (_.height - W) / 2),
      left: Math.round(_.left - B.left + (_.width - V) / 2),
      width: Math.round(V),
      height: Math.round(W)
    };
    m(
      (L) => L && L.visible && L.top === F.top && L.left === F.left && L.width === F.width && L.height === F.height ? L : { ...F, visible: !0, instant: !(L != null && L.visible) }
    );
  }, x = (v, y) => {
    var B;
    const _ = (B = y == null ? void 0 : y.closest) == null ? void 0 : B.call(y, r);
    return _ && v.contains(_) ? _ : null;
  }, I = (v) => {
    if (!e)
      return;
    const y = x(v.currentTarget, v.target);
    y && u(v.currentTarget, y);
  }, b = (v) => {
    if (!e)
      return;
    const y = x(v.currentTarget, v.target);
    y && v.target.matches(":focus-visible") && u(v.currentTarget, y);
  }, S = () => {
    var _;
    const v = (_ = a.current) == null ? void 0 : _.parentElement, y = s && (v == null ? void 0 : v.querySelector(s));
    return v && y ? { container: v, item: y } : null;
  }, R = () => {
    const v = S();
    if (v) {
      u(v.container, v.item);
      return;
    }
    p.current = null, m((y) => y != null && y.visible ? { ...y, visible: !1 } : y);
  };
  l.useEffect(() => {
    var y, _;
    if (!e)
      return;
    const v = S();
    v ? u(v.container, v.item) : (_ = (y = a.current) == null ? void 0 : y.parentElement) != null && _.matches(":hover") || R();
  }, [e, c]);
  const E = (v) => {
    const y = v.relatedTarget;
    (!y || !v.currentTarget.contains(y)) && (v.currentTarget.matches(":hover") || R());
  };
  return l.useEffect(() => {
    const v = a.current;
    if (!(d != null && d.visible)) {
      g.current = null;
      return;
    }
    const y = g.current;
    if (g.current = d.top, !et(v) || tt())
      return;
    if (y === null || d.instant) {
      v.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ye.duration,
        easing: Ye.easing
      });
      return;
    }
    const _ = Math.min(Math.abs(d.top - y) / 600, 0.08);
    _ && v.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - _ / 2} ${1 + _}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ye.duration, easing: "ease-out" }
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
          ...pr(o, h),
          borderRadius: `${i}px`,
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
          transition: d.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ye.duration}ms ${Ye.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
          [Ae]: { transition: "opacity 160ms ease" }
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
}, cs = (e, o, r = null) => {
  const n = br({
    enabled: e,
    isDark: o,
    selector: as,
    // The rail's buttons exactly, so the hover sits on the item
    size: ye,
    radius: ee,
    pinSelector: `[${Ht}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? l.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, ls = (e, o) => {
  let r = 0, n = 0, i = e;
  for (; i && i !== o; ) {
    r += i.offsetTop, n += i.offsetLeft;
    const a = i.offsetParent;
    for (let h = i.parentElement; h && h !== o && (r -= h.scrollTop, n -= h.scrollLeft, h !== a); h = h.parentElement)
      ;
    i = a;
  }
  if (i === o && e.offsetWidth)
    return {
      top: Math.round(r),
      left: Math.round(n),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const s = e.getBoundingClientRect(), c = o.getBoundingClientRect();
  return {
    top: Math.round(s.top - c.top),
    left: Math.round(s.left - c.left),
    width: Math.round(s.width),
    height: Math.round(s.height)
  };
}, ds = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const i = l.useRef(null), [s, c] = l.useState(null), a = l.useRef(null), h = l.useCallback(
    (m) => {
      const g = n.current;
      if (!e || !g)
        return;
      const p = g.querySelector(
        `[${Ht}][data-active="true"]`
      );
      if (!p) {
        c(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const u = ls(p, g);
      c(
        (x) => x && x.visible && x.top === u.top && x.left === u.left && x.width === u.width && x.height === u.height ? x : {
          ...u,
          visible: !0,
          instant: m || !(x != null && x.visible)
        }
      );
    },
    [e, n]
  );
  return l.useLayoutEffect(() => {
    h(!1);
  }), l.useEffect(() => {
    const m = n.current;
    if (!e || !m)
      return;
    let g = 0;
    const p = () => {
      cancelAnimationFrame(g), g = requestAnimationFrame(() => h(!1));
    }, u = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => h(!0));
    u == null || u.observe(m);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(p);
    return x == null || x.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(g), u == null || u.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, h]), l.useEffect(() => {
    const m = i.current;
    if (!(s != null && s.visible)) {
      a.current = null;
      return;
    }
    const g = a.current;
    if (a.current = s.top, g === null || s.instant || !et(m) || tt())
      return;
    const p = Math.min(Math.abs(s.top - g) / 600, 0.08);
    p && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - p / 2} ${1 + p}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ye.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    T,
    {
      ref: i,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...Gt(r, o),
        borderRadius: `${ee}px`,
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
        [Ae]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, en = 14, us = 18, fs = "blur(12px) saturate(180%) brightness(1.04)", hs = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), ps = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, ms = 140, tn = 0.22, gs = 0.14, xs = (e, o, r) => {
  const n = l.useRef(r);
  n.current = r, l.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var u;
      const p = e.current;
      p && (p.style.setProperty("--lx", `${s.x.toFixed(1)}px`), p.style.setProperty("--ly", `${s.y.toFixed(1)}px`), p.style.setProperty("--li", s.i.toFixed(3)), (u = n.current) == null || u.call(n, s.x, s.y, s.i));
    }, h = () => {
      s.x += (i.x - s.x) * tn, s.y += (i.y - s.y) * tn, s.i += (i.i - s.i) * gs;
      const p = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      p && (s.x = i.x, s.y = i.y, s.i = i.i), a(), c = p ? 0 : requestAnimationFrame(h);
    }, d = () => {
      c || (c = requestAnimationFrame(h));
    }, m = (p) => {
      const u = e.current;
      if (p.pointerType === "touch" || !u)
        return;
      const x = u.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      i.x = (p.clientX - x.left) * u.offsetWidth / x.width, i.y = (p.clientY - x.top) * u.offsetHeight / x.height;
      const I = Math.max(
        x.left - p.clientX,
        0,
        p.clientX - x.right
      ), b = Math.max(
        x.top - p.clientY,
        0,
        p.clientY - x.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(I, b) / ms), s.i < 0.01 && (s.x = i.x, s.y = i.y), d();
    }, g = () => {
      i.i = 0, d();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", g), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", g);
    };
  }, [e, o]);
}, wt = l.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: s = !0,
    onLight: c
  }, a) => {
    const h = l.useRef(null), d = i && Yr;
    xs(h, s && Yr, c);
    const m = St(), g = `lumora-glass-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [p, u] = l.useState(null), x = l.useRef(null), I = l.useCallback(
      (R) => {
        var C;
        if (h.current = R, typeof a == "function" ? a(R) : a && (a.current = R), (C = x.current) == null || C.disconnect(), x.current = null, !R || !d || !hs || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const v = R.offsetWidth, y = R.offsetHeight;
          u(
            (_) => (_ == null ? void 0 : _.width) === v && _.height === y ? _ : v && y ? { width: v, height: y } : null
          );
        };
        x.current = new ResizeObserver(E), x.current.observe(R), E();
      },
      [a, d]
    ), b = l.useMemo(
      () => p ? ps(p.width, p.height, en) : null,
      [p]
    ), S = d && !!(b && p);
    return /* @__PURE__ */ w(Te, { children: [
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
              id: g,
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
                    stdDeviation: en / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: us,
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
            Ji(e, o, m),
            S ? {
              backdropFilter: `url(#${g}) ${fs}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
wt.displayName = "GlassLayer";
const Ze = ye, on = vo, bs = ee, rn = 1.12, Ro = 6, nn = Ro - 2, Ft = ee, Ko = 24, xo = 10, sn = 0.12, an = 0.75, ys = xo + go / 2 - 2, Ss = 90, vs = 22, ws = 1190, Rs = 1195, bo = Ee(Vn), be = Ee(Yn), cn = Ee(wo), Es = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const s = Math.min(i, r / 2, n / 2), c = e + r, a = o + n, h = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + s} ${o} H ${c - s} ${h} ${c} ${o + s} V ${a - s} ${h} ${c - s} ${a} H ${e + s} ${h} ${e} ${a - s} V ${o + s} ${h} ${e + s} ${o} Z')`;
}, Is = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: i,
  activePath: s,
  focusFirst: c = !1,
  onNavigate: a,
  onClose: h,
  panelProps: d,
  accentColor: m,
  activeForegroundColor: g,
  solidSurface: p
}) => {
  const u = Ge(), x = u.palette.mode === "dark", I = !!(e && r), b = l.useRef(null);
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
    r && ss(r);
  }, [r]);
  const [C, v] = l.useState(!1);
  l.useEffect(() => {
    if (!I) {
      v(!1);
      return;
    }
    let $ = 0;
    const P = requestAnimationFrame(() => {
      $ = requestAnimationFrame(() => v(!0));
    });
    return () => {
      cancelAnimationFrame(P), cancelAnimationFrame($);
    };
  }, [I]);
  const y = l.useMemo(
    () => S ? ar(S.group.subitems, S.group.icon) : [],
    [S]
  ), _ = l.useRef(null), B = l.useRef(null), V = l.useRef(0), W = l.useRef(null), F = l.useRef([]), L = y.findIndex(
    ({ sub: $ }) => Be($, s)
  ), [D, A] = l.useState(0);
  l.useEffect(() => {
    A(Math.max(L, 0));
  }, [o]), l.useEffect(() => {
    if (!I || !c)
      return;
    const $ = setTimeout(() => {
      var P;
      return (P = F.current[0]) == null ? void 0 : P.focus();
    });
    return () => clearTimeout($);
  }, [I, c, o]);
  const te = ($) => {
    var J;
    const P = Math.max(0, Math.min($, y.length - 1));
    A(P), (J = F.current[P]) == null || J.focus();
  }, Ie = ($, P) => {
    switch ($.key) {
      case "ArrowRight":
        te(P + 1);
        break;
      case "ArrowLeft":
        P === 0 ? h(!0) : te(P - 1);
        break;
      case "Home":
        te(0);
        break;
      case "End":
        te(y.length - 1);
        break;
      case "Tab":
        h(!0);
        break;
      default:
        return;
    }
    $.preventDefault();
  }, z = ($) => {
    const P = F.current.slice(0, y.length).filter((oe) => !!oe);
    if (!P.length)
      return;
    const J = $ !== null && $ < P.length && !tt(), G = `translate ${be.duration}ms ${be.easing}, scale ${be.duration}ms ${be.easing}`, K = P.map((oe) => oe.offsetLeft + Ze / 2), H = P.map(
      (oe, re) => J && re === $ ? rn : 1
    ), ae = J ? (rn - 1) * Ze : 0, me = K[0] - Ze / 2, pe = K[K.length - 1] + Ze / 2, ke = J ? Math.min(
      Math.max(
        (K[$] - me) / (pe - me || 1),
        Math.max(0, 1 - nn / ae)
      ),
      Math.min(1, nn / ae)
    ) : 0;
    let Oe = me - ae * ke;
    P.forEach((oe, re) => {
      const le = Ze * H[re], ge = Oe + le / 2;
      Oe += le + on, oe.style.transition = `${G}, background 160ms ease, box-shadow 160ms ease`, oe.style.translate = J ? `${ge - K[re]}px 0` : "", oe.style.scale = J ? String(H[re]) : "", J ? oe.style.setProperty("--dock-scale", String(H[re])) : oe.style.removeProperty("--dock-scale");
    });
  }, k = l.useRef(null);
  l.useEffect(() => {
    k.current = null;
  }, [o]);
  const X = ($) => {
    k.current !== $ && (k.current = $, cancelAnimationFrame(V.current), V.current = requestAnimationFrame(() => z($)));
  };
  l.useEffect(() => () => cancelAnimationFrame(V.current), []);
  const Q = u.palette.text.primary, ie = x ? u.palette.text.primary : m;
  return /* @__PURE__ */ w(Te, { children: [
    /* @__PURE__ */ t(tr, { in: I, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      T,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => h(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: i ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...i ? { clipPath: Es(i) } : {},
          zIndex: ws,
          bgcolor: es(x)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      or,
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
              offset: [-Ko / 2, xo]
            }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Rs,
          transition: C ? `transform ${be.duration}ms ${be.easing}` : "none",
          [Ae]: { transition: "none" }
        },
        children: ({ TransitionProps: $ }) => /* @__PURE__ */ t(
          Ms,
          {
            in: ($ == null ? void 0 : $.in) ?? I,
            onEnter: $ == null ? void 0 : $.onEnter,
            onExited: $ == null ? void 0 : $.onExited,
            groupKey: (S == null ? void 0 : S.key) ?? null,
            panelProps: d,
            isDark: x,
            solidSurface: p,
            groupText: S == null ? void 0 : S.group.text,
            glassRef: B,
            shapeRef: W,
            children: S ? /* @__PURE__ */ w(Te, { children: [
              /* @__PURE__ */ t(
                T,
                {
                  "aria-hidden": !0,
                  "data-testid": "sidebar-flyout-title",
                  sx: {
                    px: `${Ro}px`,
                    height: Ko,
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
                  ref: _,
                  role: "menu",
                  "aria-label": S.group.text,
                  onPointerLeave: () => X(null),
                  sx: {
                    position: "relative",
                    display: "flex",
                    gap: `${on}px`,
                    // A grown tile fits in the panel's padding
                    // (see DOCK_ROOM_PX)
                    px: 0
                  },
                  children: y.map(({ sub: P, icon: J }, G) => /* @__PURE__ */ t(
                    Zn,
                    {
                      ref: (K) => {
                        F.current[G] = K;
                      },
                      sub: P,
                      icon: J,
                      index: G,
                      active: Be(
                        P,
                        s
                      ),
                      tabIndex: G === D ? 0 : -1,
                      onClick: () => {
                        a(P.path), h();
                      },
                      onKeyDown: (K) => Ie(K, G),
                      onFocus: (K) => {
                        A(G), K.currentTarget.matches(
                          ":focus-visible"
                        ) && X(G);
                      },
                      onHoverStart: (K) => {
                        K !== "touch" && X(G);
                      },
                      accentColor: m,
                      activeForegroundColor: g,
                      labelColor: Q,
                      iconColor: ie,
                      isDark: x
                    },
                    P.path
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
}, Bt = 18, _s = 160, jo = 14, Cs = 22, Ts = 2.5, As = 1, ln = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, Os = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, $s = (e, o, r) => {
  const n = Ro, i = Bt, s = Bt + o / 2, c = Math.max(e, ...r.map((b) => b.right + n)), a = {
    cx: c / 2,
    cy: s,
    hx: c / 2,
    hy: o / 2,
    r: Ft
  }, h = r.filter((b) => b.bottom - b.top > Ze * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + Bt,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: Ft
  })), d = (b, S) => h.reduce(
    (R, E) => Os(R, ln(b, S, E), Cs),
    ln(b, S, a)
  ), m = (b, S) => {
    let R = s, E = s + S * (o / 2 + i);
    if (d(b, R) > 0)
      return null;
    for (let C = 0; C < 12; C += 1) {
      const v = (R + E) / 2;
      d(b, v) <= 0 ? R = v : E = v;
    }
    return R;
  }, g = Math.min(0, ...h.map((b) => b.cx - b.hx)) - 2, p = Math.max(c, ...h.map((b) => b.cx + b.hx)) + 2, u = [], x = [];
  for (let b = g; b <= p; ) {
    const S = m(b, -1), R = m(b, 1);
    if (S !== null && R !== null) {
      const C = +(b + jo).toFixed(1);
      u.push([C, +S.toFixed(1)]), x.push([C, +R.toFixed(1)]);
    }
    const E = b - g < Ft + 4 || p - b < Ft + 4;
    b += E ? As : Ts;
  }
  return u.length ? `M ${[...u, ...x.reverse()].map(([b, S]) => `${b} ${S}`).join(" L ")} Z` : "";
}, dn = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((s) => {
    et(s) && (kt(s), s.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    }));
  });
}, Ms = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: i,
  isDark: s,
  solidSurface: c,
  groupText: a,
  glassRef: h,
  shapeRef: d,
  children: m
}) => {
  const g = l.useRef(null), p = l.useRef(null), u = l.useRef(null), x = l.useRef(null), I = l.useRef(null), b = Qi(s, St()), S = l.useCallback(
    (z, k, X) => {
      var Q, ie;
      (Q = I.current) == null || Q.setAttribute("cx", String(z)), (ie = I.current) == null || ie.setAttribute("cy", String(k)), x.current && (x.current.style.opacity = String(
        X * (s ? Zr.dark.rim : Zr.light.rim)
      ));
    },
    [s]
  ), R = l.useRef(null), E = l.useRef(null), C = `lumora-flyout-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, v = l.useRef(0), y = l.useRef(0), _ = l.useRef(""), B = () => {
    var $, P, J, G;
    const z = g.current, k = p.current;
    if (!z || !k)
      return !1;
    const X = z.getBoundingClientRect(), Q = Array.from(
      z.querySelectorAll('[role="menuitem"]'),
      (K) => {
        if (K.style.scale)
          return null;
        const H = K.getBoundingClientRect();
        return {
          left: H.left - X.left,
          right: H.right - X.left,
          top: H.top - X.top,
          bottom: H.bottom - X.top
        };
      }
    ).filter((K) => K !== null), ie = $s(
      z.offsetWidth,
      z.offsetHeight,
      Q
    );
    return ie === _.current ? !1 : (_.current = ie, k.style.clipPath = `path('${ie}')`, ($ = u.current) == null || $.setAttribute("d", ie), (P = x.current) == null || P.setAttribute("d", ie), (J = R.current) == null || J.setAttribute("d", ie), (G = E.current) == null || G.setAttribute("d", ie), !0);
  }, V = () => {
    if (y.current = 0, v.current)
      return;
    const z = () => {
      if (y.current = B() ? 0 : y.current + 1, y.current > 8) {
        v.current = 0;
        return;
      }
      v.current = requestAnimationFrame(z);
    };
    v.current = requestAnimationFrame(z);
  };
  d.current = V, l.useLayoutEffect(() => (B(), V(), () => {
    cancelAnimationFrame(v.current), v.current = 0;
  }), [n]);
  const W = l.useRef(null), F = l.useRef(null), L = l.useRef(!1), D = (z) => {
    g.current = z;
    const { ref: k } = i;
    typeof k == "function" ? k(z) : k && (k.current = z);
  }, A = () => {
    kt(h.current), kt(W.current), kt(g.current);
  }, te = () => {
    var Q;
    const z = g.current, k = h.current, X = W.current;
    if (!(!et(z) || !k || !X)) {
      if (A(), tt()) {
        z.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      F.current = null, k.animate(
        [
          { transform: `scale(${sn}, ${an})` },
          { transform: "none" }
        ],
        { duration: bo.duration, easing: bo.easing }
      ), dn(k, [0, 1], 160, "ease-out");
      try {
        (Q = p.current) == null || Q.animate(
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
          duration: cn.duration,
          delay: 60,
          easing: cn.easing,
          fill: "backwards"
        }
      );
    }
  }, Ie = () => {
    const z = g.current, k = h.current, X = W.current;
    if (!et(z) || !k || !X) {
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
    }), dn(k, [1, 0], 200, "ease-in"), k.animate(
      [
        { transform: "none" },
        { transform: `scale(${sn}, ${an})` }
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
    o == null || o(), te();
  }, [e]), l.useLayoutEffect(() => {
    const z = g.current;
    if (!z)
      return;
    const k = z.getBoundingClientRect(), X = F.current;
    if (F.current = { width: k.width, height: k.height }, !L.current) {
      L.current = !0;
      return;
    }
    const Q = h.current;
    !e || !X || !et(Q) || !k.width || !k.height || tt() || (kt(Q), Q.animate(
      [
        {
          transform: `scale(${X.width / k.width}, ${X.height / k.height})`
        },
        { transform: "none" }
      ],
      { duration: be.duration, easing: be.easing }
    ));
  }, [n]), /* @__PURE__ */ w(
    T,
    {
      ref: D,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": a,
      sx: {
        position: "relative",
        borderRadius: `${Ft}px`,
        p: `${Ro}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -xo - 2,
          width: xo + 2
        }
      },
      children: [
        /* @__PURE__ */ w(
          T,
          {
            ref: h,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Bt,
              bottom: -Bt,
              left: -jo,
              right: -_s,
              pointerEvents: "none",
              // The rail icon's centre: the tile row is level with it
              // (half the title below the panel's middle), one gap
              // plus half the rail's padding to the left
              transformOrigin: `${jo - ys}px calc(50% + ${Ko / 2}px)`,
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
                          id: `${C}-shadow`,
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
                          id: `${C}-outside`,
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
                    /* @__PURE__ */ t("g", { mask: `url(#${C}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: R,
                        transform: "translate(0 12)",
                        fill: s ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${C}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                wt,
                {
                  ref: p,
                  isDark: s,
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
                        id: `${C}-rim`,
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
                    /* @__PURE__ */ w(
                      "radialGradient",
                      {
                        ref: I,
                        id: `${C}-glint`,
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
                        stroke: `url(#${C}-glint)`,
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
        /* @__PURE__ */ t(T, { ref: W, sx: { position: "relative" }, children: m })
      ]
    }
  );
}, Zn = l.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: i,
    onClick: s,
    onKeyDown: c,
    onFocus: a,
    onHoverStart: h,
    accentColor: d,
    activeForegroundColor: m,
    labelColor: g,
    iconColor: p,
    isDark: u
  }, x) => {
    const I = St(), b = l.useContext(Kt), S = (v) => {
      const y = v.currentTarget.getBoundingClientRect();
      v.currentTarget.style.setProperty(
        "--mx",
        `${(v.clientX - y.left) / y.width * 100}%`
      ), v.currentTarget.style.setProperty(
        "--my",
        `${(v.clientY - y.top) / y.height * 100}%`
      );
    }, R = (v) => {
      const y = v.currentTarget;
      !et(y) || tt() || y.animate(
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
    }, C = {
      ...pr(u, I),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": E
    };
    return /* @__PURE__ */ w(
      ot,
      {
        ref: x,
        role: "menuitem",
        tabIndex: i,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: s,
        onKeyDown: c,
        onFocus: a,
        onPointerMove: S,
        onMouseEnter: R,
        onPointerEnter: (v) => h(v.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Ze,
          height: Ze,
          borderRadius: `${bs}px`,
          color: n ? m : g,
          bgcolor: n ? d : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Gt(d, u) : {},
          transition: `translate ${be.duration}ms ${be.easing}, scale ${be.duration}ms ${be.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${Zi} ${bo.duration}ms ${bo.easing} both`,
          animationDelay: `${Ss + r * vs}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: yt,
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
            "& [data-tile-name]": E
          } : C,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : C,
            "& [data-tile-name]": E,
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
                ...ur(u, b),
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
Zn.displayName = "FlyoutTile";
const Ls = 100, Ds = 250, Ns = (e) => {
  const [o, r] = l.useState(null), n = l.useRef(o);
  n.current = o;
  const i = l.useRef(/* @__PURE__ */ new Map()), s = l.useRef(null), c = l.useRef(void 0), a = l.useRef(void 0), h = () => {
    clearTimeout(c.current), c.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = (S, R, E = !1) => {
    h(), d(), r({ key: S, pinned: R, focusFirst: E });
  }, g = l.useCallback((S = !1) => {
    var E, C;
    h(), d();
    const R = (E = n.current) == null ? void 0 : E.key;
    r(null), S && R && ((C = i.current.get(R)) == null || C.focus());
  }, []), p = () => {
    h(), !(!n.current || n.current.pinned) && (d(), a.current = setTimeout(() => g(), Ds));
  };
  l.useEffect(() => {
    e || g();
  }, [e, g]), l.useEffect(
    () => () => {
      h(), d();
    },
    []
  );
  const u = o !== null;
  return l.useEffect(() => {
    if (!u)
      return;
    const S = (C) => {
      var y;
      const v = C;
      return v ? (y = s.current) != null && y.contains(v) ? !0 : [...i.current.values()].some((_) => _.contains(v)) : !1;
    }, R = (C) => {
      S(C.target) || g();
    }, E = (C) => {
      var v;
      C.key === "Escape" && g(
        !!((v = s.current) != null && v.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", R), document.addEventListener("keydown", E), () => {
      document.removeEventListener("pointerdown", R), document.removeEventListener("keydown", E);
    };
  }, [u, g]), {
    state: o,
    close: g,
    triggerProps: (S) => ({
      ref: (R) => {
        R ? i.current.set(S, R) : i.current.delete(S);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        d();
        const R = n.current;
        if (R) {
          R.key !== S && m(S, R.pinned);
          return;
        }
        h(), c.current = setTimeout(
          () => m(S, !1),
          Ls
        );
      },
      onMouseLeave: p,
      onClick: (R) => {
        if (R.detail === 0) {
          m(S, !0, !0);
          return;
        }
        const E = n.current;
        (E == null ? void 0 : E.key) === S && E.pinned ? g() : m(S, !0);
      },
      onKeyDown: (R) => {
        R.key === "ArrowRight" && (R.preventDefault(), m(S, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: d,
      onMouseLeave: p
    },
    onRailLeafEnter: () => {
      h(), n.current && !n.current.pinned && g();
    },
    getTrigger: (S) => i.current.get(S) ?? null
  };
}, ks = 264, Fs = 72, un = 64, no = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ws = 16, Ps = 14, Bs = 4, zs = 2.5, fn = "0.7rem", hn = 22, pn = Ee(gr), at = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
  const s = l.useRef(null), [c, a] = l.useState(!1), h = l.useCallback(() => {
    const d = s.current;
    d && a(d.scrollWidth > d.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    h();
  }, [h, e]), l.useEffect(() => {
    const d = s.current;
    if (!d)
      return;
    const m = new ResizeObserver(() => h());
    return m.observe(d), () => m.disconnect();
  }, [h]), /* @__PURE__ */ t(
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
        ce,
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
}, Gs = ({
  open: e,
  size: o = Ws
}) => e ? /* @__PURE__ */ t(Ti, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Ci, { sx: { fontSize: o, opacity: 0.75 } }), mn = ({ open: e }) => /* @__PURE__ */ t(
  Ai,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), io = 600, ht = `${vo}px`, uo = 6, Hs = (e) => {
  const o = Math.max(0, e - uo);
  return {
    pl: `${Math.max(0, uo - o)}px`,
    pr: `${Math.max(0, uo - e)}px`
  };
};
function Us(e, o) {
  const [r, n] = l.useState(0);
  return l.useLayoutEffect(() => {
    const i = e.current;
    if (!o || !i) {
      n(0);
      return;
    }
    const s = () => {
      const a = getComputedStyle(i), h = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth);
      n(Math.max(0, i.offsetWidth - i.clientWidth - h));
    };
    if (s(), typeof ResizeObserver > "u")
      return;
    const c = new ResizeObserver(s);
    return c.observe(i), i.firstElementChild && c.observe(i.firstElementChild), () => c.disconnect();
  }, [e, o]), r;
}
const so = 8;
function Xs(e, o, r) {
  l.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const i = (h) => {
      const d = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((u) => u.offsetHeight > 0).pop();
      if (!d)
        return;
      const m = n.getBoundingClientRect(), g = d.getBoundingClientRect();
      let p = 0;
      g.top < m.top + so ? p = g.top - m.top - so : g.bottom > m.bottom - so && (p = g.bottom - m.bottom + so), p !== 0 && n.scrollBy({ top: p, behavior: h });
    }, s = requestAnimationFrame(() => i("smooth")), c = window.setTimeout(() => i("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => i("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(s), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const Vo = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: i,
  logo: s,
  title: c,
  onBrandClick: a,
  brandMenuOpen: h,
  showHeaderBar: d = !1,
  headerBackgroundColor: m,
  headerForegroundColor: g,
  brandColor: p,
  activeAccentColor: u = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: I,
  foregroundColor: b,
  surfaceBackgroundColor: S,
  flyoutSurfaceColor: R,
  collapsed: E = !1,
  expandedWidth: C = ks,
  collapsedWidth: v = Fs,
  showLabels: y = !1,
  topInsetPx: _ = 0,
  topContent: B,
  footer: V,
  submenuMode: W = "inline"
}) => {
  var fe;
  const F = Ge(), L = F.palette.mode === "dark", D = l.useContext(Kt), A = W === "flyout" && E && !y, te = Ns(A), Ie = l.useRef(null), z = l.useRef(null), k = l.useRef(null);
  Xs(k, r, E);
  const X = Us(k, A), Q = cs(A, L, ((fe = te.state) == null ? void 0 : fe.key) ?? null), ie = ds({
    enabled: A,
    isDark: L,
    color: u,
    containerRef: z
  }), { close: $ } = te;
  l.useEffect(() => {
    $();
  }, [r, $]);
  const [P, J] = l.useState(
    {}
  ), G = I ?? Uo(u), K = {
    bgcolor: u,
    color: G,
    "& .MuiListItemIcon-root": { color: G }
  }, H = {
    bgcolor: u,
    color: G,
    borderRadius: "8px"
  }, ae = x ?? zt(u), me = S ?? (L ? F.palette.background.paper : "#ffffff"), pe = b ?? (L ? "text.primary" : u), ke = m ?? me, Oe = g ?? (m ? Uo(ke) : b ?? (L ? F.palette.text.primary : u)), oe = zt(Oe), re = (f) => {
    n == null || n(f);
  }, le = (f, N) => {
    J((j) => ({ ...j, [f]: !N }));
  }, ge = (f, N) => P[N] ?? qe(f, r), $e = (f, N, j) => ({
    color: f ? G : pe,
    bgcolor: f ? u : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? G : pe,
      minWidth: j
    },
    "&:hover": f || y ? K : { bgcolor: N }
  }), He = {
    "&.Mui-selected": {
      bgcolor: u
    },
    "&.Mui-selected:hover": K
  }, Ue = (f) => {
    const N = Be(f, r), j = /* @__PURE__ */ w(
      ro,
      {
        disabled: !f.path,
        selected: N,
        onClick: () => f.path && re(f.path),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": N ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...f.action && { pr: 6 },
          ...f.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...$e(
            N,
            ae,
            f.subtitle ? 48 : 36
          ),
          ...He
        },
        children: [
          /* @__PURE__ */ t(we, { children: f.icon }),
          /* @__PURE__ */ t(
            ze,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: f.text,
                  fontWeight: io
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ t(
                T,
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
      return j;
    const { action: M } = f;
    return /* @__PURE__ */ w(T, { sx: { position: "relative" }, children: [
      j,
      /* @__PURE__ */ t(Re, { title: M.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        ve,
        {
          "aria-label": M.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            M.onClick(), i == null || i();
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
            borderColor: N ? "rgba(255, 255, 255, 0.35)" : ae,
            color: N ? G : pe,
            "&:hover": {
              bgcolor: N ? "rgba(255, 255, 255, 0.15)" : ae
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: N ? G : pe,
              outlineOffset: 1
            }
          },
          children: M.icon
        }
      ) })
    ] }, f.text);
  }, lt = (f) => {
    const N = qe(f, r), j = Be(f, r), M = xt("", f), U = ge(f, M);
    return /* @__PURE__ */ w(
      T,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: N ? ae : "transparent"
        },
        children: [
          /* @__PURE__ */ w(
            ro,
            {
              onClick: () => le(M, U),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": j ? "true" : "false",
              "aria-expanded": U,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...$e(j, ae, 36)
              },
              children: [
                /* @__PURE__ */ t(we, { children: f.icon }),
                /* @__PURE__ */ t(
                  ze,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      at,
                      {
                        text: f.text,
                        fontWeight: io
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(mn, { open: U })
              ]
            }
          ),
          /* @__PURE__ */ t(Ur, { in: U, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            T,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (Y) => dt(Y, M, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, dt = (f, N, j) => {
    const M = xt(N, f), U = Bs + (j - 1) * zs;
    if (bt(f)) {
      const xe = qe(f, r), de = Be(f, r), ue = ge(f, M);
      return /* @__PURE__ */ w(T, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ w(
          ro,
          {
            onClick: () => le(M, ue),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": xe ? "true" : "false",
            "aria-expanded": ue,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: U,
              ...$e(de, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(we, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                ze,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    at,
                    {
                      text: f.text,
                      fontWeight: io
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(mn, { open: ue })
            ]
          }
        ),
        /* @__PURE__ */ t(Ur, { in: ue, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(T, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (Io) => dt(Io, M, j + 1)
        ) }) })
      ] }, M);
    }
    const Y = Be(f, r);
    return /* @__PURE__ */ w(
      ro,
      {
        selected: Y,
        disabled: !f.path,
        onClick: () => f.path && re(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": Y ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: U,
          ...$e(Y, "action.hover", 32),
          ...He
        },
        children: [
          f.icon ? /* @__PURE__ */ t(we, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            ze,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: f.text,
                  fontWeight: io
                }
              )
            }
          )
        ]
      },
      M
    );
  }, jt = (f, N, j, M, U, Y) => {
    const xe = !U, de = /* @__PURE__ */ w(
      ve,
      {
        "aria-label": N,
        disabled: xe,
        onClick: U,
        onMouseEnter: A ? te.onRailLeafEnter : void 0,
        ...A ? { [Ht]: "" } : {},
        "data-testid": (Y == null ? void 0 : Y.testId) ?? `sidebar-item-${N}`,
        "data-active": M ? "true" : "false",
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
          color: M ? G : pe,
          bgcolor: M ? u : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: hn
          },
          "&:hover": H,
          ...no
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: A ? ye : 44,
          height: A ? ye : 44,
          color: M ? G : pe,
          bgcolor: M ? u : "transparent",
          borderRadius: M ? "8px" : "50%",
          "&:hover": {
            bgcolor: M ? u : Y != null && Y.insideGroup ? "action.hover" : ae,
            borderRadius: "8px"
          },
          ...no,
          ...A ? qt(M) : {}
        },
        children: [
          j,
          y ? /* @__PURE__ */ t(
            at,
            {
              text: N,
              variant: "caption",
              center: !0,
              fontSize: fn
            }
          ) : null
        ]
      }
    );
    return y ? xe ? /* @__PURE__ */ t("span", { children: de }, f) : /* @__PURE__ */ t(l.Fragment, { children: de }, f) : /* @__PURE__ */ t(
      Re,
      {
        title: N,
        placement: "right",
        arrow: !A,
        ...A ? rt : {},
        children: xe ? /* @__PURE__ */ t("span", { children: de }) : de
      },
      f
    );
  }, Vt = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, qt = (f) => ({
    borderRadius: `${ee}px`,
    "& .MuiSvgIcon-root": { fontSize: yt },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${pn.duration}ms ${pn.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), rt = {
    slotProps: {
      tooltip: { sx: ur(L, D) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, Rt = (f) => {
    var U;
    const N = qe(f, r), j = xt("", f), M = ((U = te.state) == null ? void 0 : U.key) === j;
    return /* @__PURE__ */ t(
      T,
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
            ...te.triggerProps(j),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": M,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": N ? "true" : "false",
            "data-open": M ? "true" : "false",
            [Ht]: "",
            sx: {
              position: "relative",
              width: ye,
              height: ye,
              color: N ? G : pe,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: N ? u : "transparent",
              ...qt(N),
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
              ...no
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, Yt = (f) => {
    const N = qe(f, r), j = Be(f, r), M = xt("", f), U = ge(f, M), Y = /* @__PURE__ */ w(
      ve,
      {
        "aria-label": f.text,
        "aria-expanded": U,
        onClick: () => le(M, U),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": j ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: y ? 0.25 : 0,
          width: y ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...y ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: j ? G : pe,
          bgcolor: j ? u : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": y ? { bgcolor: u, color: G } : {
            bgcolor: j ? u : "transparent"
          },
          ...no
        },
        children: [
          y ? /* @__PURE__ */ t(
            T,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: hn
                }
              },
              children: f.icon
            }
          ) : f.icon,
          y ? /* @__PURE__ */ t(
            at,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: fn
            }
          ) : null,
          /* @__PURE__ */ t(Gs, { open: U, size: Ps })
        ]
      }
    ), xe = y ? Y : /* @__PURE__ */ t(Re, { title: f.text, placement: "right", arrow: !0, children: Y });
    return /* @__PURE__ */ w(
      T,
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
          bgcolor: N ? ae : "transparent",
          ...y ? {} : { "&:hover": { bgcolor: ae } }
        },
        children: [
          xe,
          U ? ar(f.subitems, f.icon).map(
            ({ sub: de, icon: ue }) => jt(
              de.path,
              de.text,
              ue,
              Be(de, r),
              () => re(de.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${de.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, nt = (f) => /* @__PURE__ */ t(
    T,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: jt(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        Be(f, r),
        f.path ? () => re(f.path) : void 0,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), Et = (f) => bt(f) ? A ? Rt(f) : E ? Yt(f) : lt(f) : E ? nt(f) : Ue(f), It = (f) => /* @__PURE__ */ t(
    Ne,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: E ? "center" : "stretch"
      },
      children: f.map(Et)
    }
  ), _t = E ? v : C, Eo = () => {
    var xe, de;
    const { state: f } = te, N = f ? [...e, ...o].find(
      (ue) => bt(ue) && xt("", ue) === f.key
    ) ?? null : null, j = N ? ((xe = Ie.current) == null ? void 0 : xe.getBoundingClientRect().right) ?? v : v, M = N ? ((de = Ie.current) == null ? void 0 : de.closest("[data-rail-surface]")) ?? Ie.current : null, U = M == null ? void 0 : M.getBoundingClientRect(), Y = M && U ? {
      left: U.left,
      top: U.top,
      width: U.width,
      height: U.height,
      radius: parseFloat(
        getComputedStyle(M).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Is,
      {
        group: N,
        groupKey: N ? f.key : null,
        anchor: N ? te.getTrigger(f.key) : null,
        railEdge: j,
        railShape: Y,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: re,
        onClose: te.close,
        panelProps: te.flyoutProps,
        accentColor: u,
        activeForegroundColor: G,
        solidSurface: R ?? me
      }
    );
  }, ut = d ? /* @__PURE__ */ t(
    T,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...A ? { pt: "12px", pb: "12px" } : {
          height: un,
          minHeight: un
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: ke
      },
      children: s || c ? /* @__PURE__ */ t(
        mo,
        {
          logo: s,
          title: E ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: h,
          color: p ?? Oe,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, Zt = !d && s ? /* @__PURE__ */ t(
    T,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: A ? ht : 1
      },
      children: /* @__PURE__ */ t(
        mo,
        {
          logo: s,
          appName: c || "App",
          onClick: a,
          menuOpen: h,
          color: p ?? Oe,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, ft = y ? 0.5 : A ? 0.75 : E ? 1 : 1.5;
  return /* @__PURE__ */ t(vt.Provider, { value: A, children: /* @__PURE__ */ w(
    T,
    {
      ref: Ie,
      ...Q.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": E ? "true" : "false",
      "data-labeled": y ? "true" : "false",
      sx: {
        width: _t,
        minWidth: _t,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: me,
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
        ...A ? Vt : {}
      },
      children: [
        Q.lens,
        ut ?? Zt,
        B ? /* @__PURE__ */ t(
          T,
          {
            sx: {
              flexShrink: 0,
              px: ft,
              pt: A ? 0 : 1,
              pb: A ? 0 : 1
            },
            children: B
          }
        ) : null,
        /* @__PURE__ */ t(
          T,
          {
            ref: k,
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
                width: A ? uo : 8
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
              // padding follows it, so the 40px column keeps equal
              // gaps in the capsule whether the bar is classic,
              // overlay or absent. (The inline collapsed rail keeps
              // its padding: its open groups tint the full row width.)
              ...A ? Hs(X) : { px: ft },
              pt: _ && !d ? `${_}px` : A ? ht : 1,
              pb: A ? ht : 2
            },
            children: /* @__PURE__ */ w(
              T,
              {
                ref: z,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  ie.glass,
                  It(e),
                  o.length > 0 ? /* @__PURE__ */ w(
                    T,
                    {
                      sx: { mt: "auto", pt: A ? ht : 2 },
                      children: [
                        V ? null : /* @__PURE__ */ t(
                          Je,
                          {
                            sx: {
                              mb: A ? ht : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        It(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        V ? /* @__PURE__ */ t(
          T,
          {
            sx: {
              flexShrink: 0,
              px: ft,
              pb: 1.5,
              ...A ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: yt
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              T,
              {
                sx: {
                  borderTop: `1px solid ${oe}`,
                  pt: A ? ht : 1.5
                },
                children: V
              }
            )
          }
        ) : null,
        A ? Eo() : null
      ]
    }
  ) });
}, qo = "var(--lumora-content-padding, 0px)", gn = `calc(${qo} * -1)`, Pc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: s = !0,
  sx: c
}) => /* @__PURE__ */ t(
  T,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: gn,
        mt: o ? gn : 0,
        // Space below it, like any other block on the page
        mb: qo,
        px: s ? qo : 0,
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
      ...Array.isArray(c) ? c : [c]
    ],
    children: e
  }
), Ks = ({ keys: e }) => /* @__PURE__ */ t(
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
}, pt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, mt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, gt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Qn = yo(), De = Qn.typography.pxToRem, yr = (e) => {
  const o = e === "dark", r = [...Qn.shadows];
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
        contrastText: Ce[50]
      },
      warning: o ? { light: mt[400], main: mt[500], dark: mt[700] } : { light: mt[300], main: mt[400], dark: mt[800] },
      error: o ? { light: gt[400], main: gt[500], dark: gt[700] } : { light: gt[300], main: gt[400], dark: gt[800] },
      success: o ? { light: pt[400], main: pt[500], dark: pt[700] } : { light: pt[300], main: pt[400], dark: pt[800] },
      grey: Ce,
      divider: o ? ct(Ce[700], 0.6) : ct(Ce[300], 0.4),
      background: o ? { default: Ce[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Ce[400] } : { primary: Ce[800], secondary: Ce[600] },
      action: o ? {
        hover: ct(Ce[600], 0.2),
        selected: ct(Ce[600], 0.3)
      } : {
        hover: ct(Ce[200], 0.2),
        selected: ct(Ce[200], 0.3)
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
}, js = 6, Vs = 8, xn = (e, o) => typeof e == "object" ? e[o] : e, Po = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: i = "expand",
  showSidebar: s = !0,
  contentPadding: c = Hn,
  sidebarBackgroundColor: a,
  contentBackgroundColor: h,
  content: d
}) => {
  const m = Ln(r.breakpoints.down("md")), g = e === "dark", p = Xn({
    showSidebar: s,
    isMobile: m,
    sidebarVariant: n,
    sidebarSubmenu: i
  }), u = mr(i, n) ? {
    gutterPx: Pt,
    radiusPx: Gn
  } : void 0, x = lo, I = Kn(
    xn(a, e),
    g
  ), b = jn(
    xn(h, e),
    g
  ), S = Un(
    c,
    r
  ), R = u ? /* @__PURE__ */ w(Dt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t(Le, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Dt,
      {
        alignItems: "center",
        spacing: `${vo}px`,
        sx: { mt: 2 },
        children: Array.from({ length: Vs }, (E, C) => /* @__PURE__ */ t(
          q,
          {
            sx: {
              width: ye,
              height: ye,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ t(
              Le,
              {
                variant: "rounded",
                width: yt,
                height: yt
              }
            )
          },
          C
        ))
      }
    )
  ] }) : /* @__PURE__ */ w(Dt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(Le, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(q, { sx: { height: 8 } }),
    Array.from({ length: js }, (E, C) => /* @__PURE__ */ t(Le, { variant: "rounded", width: 28, height: 28 }, C))
  ] });
  return /* @__PURE__ */ t(po, { theme: o, children: /* @__PURE__ */ w(
    q,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: b
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
              height: x,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: I,
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
        !m && p > 0 && /* @__PURE__ */ t(
          q,
          {
            sx: {
              position: "relative",
              width: p,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              q,
              {
                sx: u ? {
                  position: "fixed",
                  top: u.gutterPx,
                  bottom: u.gutterPx,
                  left: u.gutterPx,
                  width: p - 2 * u.gutterPx,
                  borderRadius: `${u.radiusPx}px`,
                  bgcolor: I
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: p,
                  bgcolor: I
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
              "--lumora-content-padding": S,
              "--lumora-sticky-top": m ? `${x}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: m ? `${x}px` : 0
            },
            children: d ?? /* @__PURE__ */ w(Te, { children: [
              /* @__PURE__ */ t(Le, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(Le, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(Dt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: m ? 2 : 4 }, (E, C) => /* @__PURE__ */ t(
                Le,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                C
              )) }),
              /* @__PURE__ */ t(Le, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, Yo = yo(yr("light")), fo = yo(yr("dark")), qs = (e) => e === "dark" ? fo : Yo, Ys = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = Mn();
  if (!o) {
    const s = qs(e);
    return /* @__PURE__ */ w(po, { theme: s, children: [
      /* @__PURE__ */ t(Ho, {}),
      /* @__PURE__ */ t(
        Po,
        {
          themeMode: e,
          muiTheme: s,
          hostTheme: n,
          ...r
        }
      )
    ] });
  }
  const i = `${o} &`;
  return /* @__PURE__ */ w(po, { theme: Yo, children: [
    /* @__PURE__ */ t(Ho, {}),
    /* @__PURE__ */ t(
      $i,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: fo.palette.background.default,
            color: fo.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(q, { sx: { display: "contents", [i]: { display: "none" } }, children: /* @__PURE__ */ t(
      Po,
      {
        themeMode: "light",
        muiTheme: Yo,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(q, { sx: { display: "none", [i]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Po,
      {
        themeMode: "dark",
        muiTheme: fo,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class Z extends Error {
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
}, he = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Ve = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Zs = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ve.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Ve.REFRESH_TOKEN
      ), r = localStorage.getItem(Ve.USER);
      e && !localStorage.getItem(he.ACCESS_TOKEN) && localStorage.setItem(he.ACCESS_TOKEN, e), o && !localStorage.getItem(he.REFRESH_TOKEN) && localStorage.setItem(
        he.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(he.USER) && localStorage.setItem(he.USER, r), (e || o || r) && (localStorage.removeItem(Ve.ACCESS_TOKEN), localStorage.removeItem(Ve.REFRESH_TOKEN), localStorage.removeItem(Ve.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Bo = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Z(
        "localStorage is not available",
        ne.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Z(
      "Storage quota exceeded. Please clear browser data.",
      ne.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Z(
      "Access to localStorage is denied. Please check browser settings.",
      ne.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Z(
      "Failed to access storage",
      ne.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, zo = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Z(
        "localStorage is not available",
        ne.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Z(
      "Storage quota exceeded. Please clear browser data.",
      ne.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Z(
      "Access to localStorage is denied. Please check browser settings.",
      ne.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Z(
      "Failed to write to storage",
      ne.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Jn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Ut = () => {
  try {
    Zs();
    const e = Bo(he.ACCESS_TOKEN), o = Bo(he.REFRESH_TOKEN), r = Bo(he.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), Jn(he.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Z ? e : new Z(
      "Failed to retrieve authentication tokens",
      ne.UNKNOWN_ERROR,
      e
    );
  }
}, Qs = () => {
  try {
    const { accessToken: e, refreshToken: o } = Ut();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Z(
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
      error: e instanceof Z ? e : new Z(
        "Authentication check failed",
        ne.UNKNOWN_ERROR,
        e
      )
    };
  }
}, ei = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Z(
        "At least one token must be provided",
        ne.TOKEN_INVALID
      );
    return e && zo(he.ACCESS_TOKEN, e), o && zo(he.REFRESH_TOKEN, o), r && zo(he.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Z ? n : new Z(
        "Failed to store tokens",
        ne.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Xt = () => {
  try {
    return [
      he.ACCESS_TOKEN,
      he.REFRESH_TOKEN,
      he.USER,
      // Also clear legacy keys for complete cleanup
      Ve.ACCESS_TOKEN,
      Ve.REFRESH_TOKEN,
      Ve.USER
    ].map((n) => Jn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Z ? e : new Z(
        "Failed to clear tokens",
        ne.LOGOUT_FAILED,
        e
      )
    };
  }
}, Js = () => {
  try {
    const { user: e } = Ut();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Z ? e : new Z(
        "Failed to retrieve user data",
        ne.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Bc = (e) => {
  if (!(e instanceof Z))
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
}, Zo = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof Z ? e.code : "UNKNOWN",
    timestamp: e instanceof Z ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof Z && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, ea = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Vr.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, i = [];
  const s = (c, a) => {
    i.forEach(({ resolve: h, reject: d }) => {
      c ? d(c) : a && h(a);
    }), i = [];
  };
  return o.interceptors.request.use(
    (c) => {
      const { accessToken: a } = Ut();
      return a && c.headers && (c.headers.Authorization = `Bearer ${a}`), c;
    },
    (c) => Promise.reject(c)
  ), o.interceptors.response.use(
    (c) => c,
    async (c) => {
      var p;
      const a = c.config, h = (p = c.response) == null ? void 0 : p.status, d = (a == null ? void 0 : a.url) || "", m = d.includes("/auth/refresh");
      if (h !== 401 || a._retry || m)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: g } = Ut();
      if (!g) {
        const u = new Error(
          "No refresh token available for token refresh"
        );
        return Zo(u, "AxiosClient - Token Refresh"), Xt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((u, x) => {
          i.push({ resolve: u, reject: x });
        }).then((u) => {
          const {
            accessToken: x,
            refreshToken: I
          } = u;
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
        }).catch((u) => Promise.reject(u));
      r = !0, n = Vr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: g
        }
      );
      try {
        const u = await n, { accessToken: x, refreshToken: I } = u.data;
        if (ei(x, I, null), s(null, {
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
      } catch (u) {
        return Zo(
          u,
          "AxiosClient - Token Refresh Failed"
        ), s(u), Xt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(u);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, ta = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Ut();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return ei(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      Zo(i, "TokenValidator - Refresh Failed");
    }
  return Xt(), o ? o() : window.location.href = "/login", !1;
}, Wt = ({ size: e = 20 }) => /* @__PURE__ */ w(
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
), bn = Ee(gr), je = "#09C1AE", ho = (e, o) => ({
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
}), oa = (e) => ({
  ...ho(ee, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${ee - 2}px`,
    zIndex: 1,
    background: `${Gt(je, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), yn = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: s = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = xr(), h = l.useContext(vt), d = Ge().palette.mode === "dark", m = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", g = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ w(
    ot,
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
        borderColor: r ? je : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${je}`,
          outlineOffset: 2
        },
        ...n && ho(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Wt, { size: 20 }),
        /* @__PURE__ */ t(
          ce,
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
        i && /* @__PURE__ */ t(Ks, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && h ? /* @__PURE__ */ t(Re, { title: m, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    ve,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: ye,
        height: ye,
        borderRadius: `${ee}px`,
        ...Gt(je, d, "clear"),
        ...r && {
          boxShadow: `${Gt(je, d, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${bn.duration}ms ${bn.easing}, box-shadow 200ms ease`,
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
        ...n && oa(d)
      },
      children: /* @__PURE__ */ t(Wt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Re, { title: m, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    ve,
    {
      ...g,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? je : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && ho(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Wt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(Re, { title: m, placement: "left", children: /* @__PURE__ */ t(
    ve,
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
        outline: r ? `2px solid ${je}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${je}` },
        ...n && ho(16, "background.paper")
      },
      children: /* @__PURE__ */ t(T, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Wt, { size: 26 }) })
    }
  ) });
}, ao = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(Li, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ w(Di, { children: [
  /* @__PURE__ */ t(Ni, { fontSize: "small" }),
  /* @__PURE__ */ t(ce, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ce,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    Dn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Mt = 24, ra = 720, na = 1140, ia = 1250, sa = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: i,
  sidebarWidthPx: s,
  bottomOffsetPx: c,
  fullScreen: a,
  fullScreenBottom: h = "0px",
  onClose: d
}) => {
  l.useEffect(() => {
    if (!e || !d)
      return;
    const x = (I) => {
      I.key === "Escape" && d();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [e, d]);
  const m = r === "docked", g = Mt + c;
  let p;
  a ? p = {
    top: 0,
    left: 0,
    right: 0,
    bottom: h,
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
    ...n === "left" ? { left: s + Mt } : { right: Mt },
    width: i,
    maxWidth: `calc(100vw - ${Mt * 2}px)`,
    height: `min(${ra}px, calc(100vh - ${g + Mt}px))`,
    borderRadius: "12px"
  };
  const u = /* @__PURE__ */ t(
    rr,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? na : ia,
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
  return m ? /* @__PURE__ */ t(Fi, { direction: "left", in: e, mountOnEnter: !0, children: u }) : /* @__PURE__ */ t(
    ki,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: u
    }
  );
}, aa = 180, Sn = 250, ca = "#01584F", la = ({
  text: e,
  testId: o
}) => {
  const r = l.useRef(null), [n, i] = l.useState(!1), s = l.useCallback(() => {
    const c = r.current;
    c && i(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    s();
  }, [s, e]), l.useEffect(() => {
    const c = r.current;
    if (!c)
      return;
    const a = new ResizeObserver(() => s());
    return a.observe(c), () => a.disconnect();
  }, [s]), /* @__PURE__ */ t(
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
        ce,
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
}, ti = (e, o, r, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : o, c = e ? ca : o;
  return { activeBg: c, sx: n ? {
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
    backgroundColor: r ? c : "transparent",
    "&:hover": {
      backgroundColor: r ? c : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : s
    }
  } : {
    width: i,
    height: i,
    color: r ? "#ffffff" : s,
    backgroundColor: r ? c : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? c : "action.hover",
      borderRadius: "4px"
    }
  } };
}, oi = ({ link: e }) => /* @__PURE__ */ w(Ne, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    la,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), ri = (e, o, r) => r ? e : /* @__PURE__ */ t(Re, { title: o, placement: "right", arrow: !0, children: e }), da = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: c
}) => {
  const a = Ge(), [h, d] = l.useState(null), [m, g] = l.useState(!1), p = l.useRef(
    null
  ), u = l.useRef(null), x = l.useRef(null), I = l.useRef(!1), b = l.useRef(!1), S = l.useId(), R = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, E = () => {
    R(), p.current = setTimeout(() => {
      g(!1), p.current = null;
    }, aa);
  }, C = () => {
    R(), g(!0);
  };
  l.useEffect(() => {
    if (!m)
      return;
    const W = (F) => {
      var L;
      F.key === "Escape" && (g(!1), (L = x.current) == null || L.focus());
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [m]), l.useEffect(() => {
    if (!m || !b.current)
      return;
    const W = globalThis.requestAnimationFrame(() => {
      var L;
      const F = (L = u.current) == null ? void 0 : L.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame(W);
  }, [m]);
  const v = qe(e, o), { activeBg: y, sx: _ } = ti(
    i,
    n,
    v,
    c
  ), B = /* @__PURE__ */ t(
    ve,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        I.current || C();
      },
      onBlur: (W) => {
        var L;
        const F = W.relatedTarget;
        F && ((L = u.current) != null && L.contains(F)) || E();
      },
      onKeyDown: (W) => {
        W.key === "ArrowDown" && (W.preventDefault(), b.current = !0, C());
      },
      onClick: (W) => {
        W.preventDefault(), W.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? S : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: _,
      children: c ? /* @__PURE__ */ t(oi, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ w(
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
              I.current = !0, C();
            },
            onMouseLeave: () => {
              I.current = !1, E();
            },
            children: ri(B, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          or,
          {
            open: m && !!h,
            anchorEl: h,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (W) => W.zIndex.modal },
            children: /* @__PURE__ */ t(
              rr,
              {
                ref: u,
                elevation: 0,
                onMouseEnter: R,
                onMouseLeave: E,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: s,
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
                  nr,
                  {
                    id: S,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Sn
                    },
                    children: V(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function V(W, F, L) {
    return W.flatMap((D) => {
      const A = xt(F, D);
      return bt(D) ? [
        /* @__PURE__ */ t(
          Wi,
          {
            disableSticky: !0,
            title: D.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + L * 1.5,
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
          A
        ),
        ...V(D.subitems, A, L + 1)
      ] : [
        /* @__PURE__ */ w(
          Qe,
          {
            role: "menuitem",
            title: D.text,
            disabled: !D.path,
            selected: Be(D, o),
            onClick: (te) => {
              te.preventDefault(), D.path && (r == null || r(D.path)), g(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + L * 1.5,
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
                bgcolor: y,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: y
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              D.icon ? /* @__PURE__ */ t(we, { children: D.icon }) : null,
              /* @__PURE__ */ t(
                ze,
                {
                  primary: D.text,
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
}, ua = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = ti(
    i,
    n,
    c,
    s
  );
  return ri(
    /* @__PURE__ */ t(
      ve,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (h) => {
          h.preventDefault(), h.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: a,
        children: s ? /* @__PURE__ */ t(oi, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, fa = () => /* @__PURE__ */ t(
  T,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), ha = () => /* @__PURE__ */ t(
  T,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), vn = (e, o) => e.map((r, n) => /* @__PURE__ */ w(l.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(fa, {}) : null
] }, n)), pa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: c = !1
}) => {
  const a = (d, m) => bt(d) ? /* @__PURE__ */ t(
    da,
    {
      link: d,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      surfaceBackgroundColor: s,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    ua,
    {
      link: d,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      railShowTitles: c
    }
  ), h = c ? 1.25 : 1;
  return /* @__PURE__ */ w(
    Ne,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: h
      },
      children: [
        vn(e, (d) => a(d, !1)),
        o.length > 0 ? /* @__PURE__ */ w(Te, { children: [
          /* @__PURE__ */ t(ha, {}),
          /* @__PURE__ */ t(T, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Ne, { gap: h, alignItems: "center", children: vn(
            o,
            (d) => a(d, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, ma = (e) => e ? Pn(e) : "USER", ga = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), wn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Qo = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, Sr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Bi,
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
    children: ga(e)
  }
), ni = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ w(Te, { children: [
  /* @__PURE__ */ t(Sr, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ w(
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
          ce,
          {
            variant: "body2",
            sx: { ...wn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ce,
          {
            variant: "caption",
            sx: { ...wn, opacity: 0.8, color: "inherit" },
            children: ma(o)
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
}, ii = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: i,
  showNotifications: s,
  notificationCount: c,
  onNotificationsClick: a,
  userName: h = "User",
  userRole: d,
  userAvatar: m,
  menuItems: g = [],
  showSettings: p,
  onSettingsClick: u,
  showThemeToggler: x,
  theme: I,
  onThemeToggle: b,
  onLogout: S
}) => {
  const R = (E) => () => {
    o(), E == null || E();
  };
  return /* @__PURE__ */ w(
    zi,
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
          Ne,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              ni,
              {
                name: h,
                role: d,
                avatar: m,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Je, {}),
        s && /* @__PURE__ */ w(Qe, { onClick: R(a), children: [
          /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(Fn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ze, { children: "Notifications" }),
          /* @__PURE__ */ t(Qo, { count: c })
        ] }),
        g.map((E) => /* @__PURE__ */ w(Qe, { onClick: R(E.onClick), children: [
          E.icon && /* @__PURE__ */ t(we, { children: E.icon }),
          /* @__PURE__ */ t(ze, { inset: !E.icon, children: E.label }),
          /* @__PURE__ */ t(Qo, { count: E.badge })
        ] }, E.key)),
        p && /* @__PURE__ */ w(Qe, { onClick: R(u), children: [
          /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(Pi, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ze, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(Je, {}, "theme-divider"),
          /* @__PURE__ */ w(T, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              ce,
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
              Gi,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: I,
                onChange: (E, C) => C && C !== I && (b == null ? void 0 : b()),
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
                  /* @__PURE__ */ t(qr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(qr, { value: "dark", children: "Dark" })
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
              /* @__PURE__ */ t(we, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(kn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ze, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, si = 64, xa = 2, Lt = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: i,
  activeColor: s,
  activeBackground: c,
  ariaLabel: a,
  haspopup: h,
  isPage: d = !1,
  testId: m
}) => /* @__PURE__ */ w(
  ot,
  {
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": h,
    "aria-expanded": h ? n : void 0,
    "aria-current": d && n ? "page" : void 0,
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
        ce,
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
), ba = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: s,
  assistantActive: c,
  showProfile: a,
  background: h,
  color: d,
  activeColor: m,
  activeBackground: g,
  pinnedLinks: p = [],
  activePath: u,
  onLinkClick: x,
  ...I
}) => {
  const b = p.filter((_) => _.path).slice(0, xa), [S, R] = l.useState(
    null
  ), { userName: E = "User", userAvatar: C, avatarColor: v } = I, y = { color: d, activeColor: m, activeBackground: g };
  return /* @__PURE__ */ w(
    rr,
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
        height: `calc(${si}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: h,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Lt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Nn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...y
          }
        ),
        b.map((_) => /* @__PURE__ */ t(
          Lt,
          {
            label: _.text,
            icon: _.icon,
            onClick: () => x == null ? void 0 : x(_.path),
            active: qe(_, u),
            isPage: !0,
            testId: `mobile-nav-link-${_.text}`,
            ...y
          },
          _.path
        )),
        i && /* @__PURE__ */ t(
          Lt,
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
                children: /* @__PURE__ */ t(Wt, { size: 18 })
              }
            ),
            onClick: s,
            active: c,
            testId: "mobile-nav-nexa",
            ...y
          }
        ),
        r && /* @__PURE__ */ t(
          Lt,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(ir, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...y
          }
        ),
        a && /* @__PURE__ */ w(Te, { children: [
          /* @__PURE__ */ t(
            Lt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${E}`,
              icon: /* @__PURE__ */ t(
                Sr,
                {
                  name: E,
                  avatar: C,
                  color: v,
                  size: 26
                }
              ),
              onClick: (_) => R(_.currentTarget),
              active: !!S,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...y
            }
          ),
          /* @__PURE__ */ t(
            ii,
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
}, ya = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Hi,
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
    children: /* @__PURE__ */ w(
      Ne,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(T, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Dn,
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
), Sa = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: i,
  brandMenuOpen: s,
  background: c,
  color: a,
  brandColor: h = a,
  endContent: d
}) => /* @__PURE__ */ t(
  Ui,
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
    children: /* @__PURE__ */ w(Xi, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        ve,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(Nn, {})
        }
      ),
      /* @__PURE__ */ t(
        mo,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: i,
          menuOpen: s,
          color: h,
          testId: "mobile-brand"
        }
      ),
      d ? /* @__PURE__ */ t(T, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: d }) : null
    ] })
  }
), vr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const c = xr(), a = l.useContext(vt), h = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Re,
    {
      title: h,
      placement: i,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        ve,
        {
          onClick: o,
          "aria-label": h,
          "data-testid": s,
          sx: {
            ...a ? {
              width: ye,
              height: ye
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
            Wn,
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
              children: /* @__PURE__ */ t(Fn, {})
            }
          )
        }
      )
    }
  );
}, ai = {
  "&:focus, &:focus-visible": { outline: "none" }
}, va = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, En = Ee(qn), In = Ee(wo), _n = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', wa = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = Ge().palette.mode === "dark", c = St(), a = l.useRef(null), h = l.useRef(null), d = (p) => {
    var u;
    p !== e && (o == null || o()), (u = (p === "light" ? a : h).current) == null || u.focus();
  }, m = (p) => {
    if (!(p.key === "Tab" || p.key === "Escape"))
      switch (p.stopPropagation(), p.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          p.preventDefault(), d(e === "light" ? "dark" : "light");
          break;
        case "Home":
          p.preventDefault(), d("light");
          break;
        case "End":
          p.preventDefault(), d("dark");
          break;
      }
  }, g = (p, u, x, I) => {
    const b = e === p;
    return /* @__PURE__ */ t(
      ot,
      {
        ref: I,
        role: "radio",
        "aria-checked": b,
        "aria-label": u,
        tabIndex: b ? 0 : -1,
        onClick: () => d(p),
        "data-testid": `theme-segment-${p}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: i ? `${ee}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? s ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...i && b ? pr(s, c) : {},
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
          ...ai
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ w(
    Ne,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: m,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: i ? `${ee}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        g("light", "Light", ji, a),
        g("dark", "Dark", Ki, h)
      ]
    }
  );
}, Ra = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: i,
  userName: s,
  userEmail: c,
  roleLabel: a,
  accentColor: h,
  tint: d,
  showThemeToggler: m,
  theme: g,
  onThemeToggle: p,
  onProfileClick: u,
  onLinkClick: x,
  menuItems: I = [],
  onLogout: b,
  glass: S = !1
}) => {
  const R = Ge(), E = R.palette.mode === "dark", C = l.useRef(null), v = dr(R.palette.background.paper), y = br({
    enabled: S,
    isDark: E,
    selector: _n,
    radius: ee
  }), [_, B] = l.useState(null);
  l.useEffect(() => {
    if (!_ || typeof ResizeObserver > "u")
      return;
    const D = new ResizeObserver(() => {
      var A;
      (A = C.current) == null || A.updatePosition();
    });
    return D.observe(_), () => D.disconnect();
  }, [_]);
  const V = (D) => {
    r(), D == null || D();
  }, W = (D) => {
    r(), D.onClick ? D.onClick() : D.path && (x == null || x(D.path));
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
  }, L = /* @__PURE__ */ w(Ne, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    i(36),
    /* @__PURE__ */ w(T, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ce, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: s }),
      c ? /* @__PURE__ */ t(
        ce,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary", fontSize: 12, lineHeight: "18px" },
          children: c
        }
      ) : null,
      a ? /* @__PURE__ */ t(
        ce,
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
      u ? /* @__PURE__ */ t(
        ce,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: E ? "#ffffff" : h,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    sr,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: C,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...S ? {
        slots: { transition: tr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: B,
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
            [`& :is(${_n}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...va, width: n, minWidth: n },
          children: [
            S ? /* @__PURE__ */ t(
              wt,
              {
                isDark: E,
                solid: v,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${fr} ${En.duration}ms ${En.easing} both`,
                  [Ae]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ w(
              T,
              {
                ...y.containerProps,
                sx: S ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${hr} ${In.duration}ms ${In.easing} 70ms both`,
                  [Ae]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  y.lens,
                  u ? /* @__PURE__ */ t(
                    ot,
                    {
                      onClick: () => V(u),
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
                        ...ai
                      },
                      children: L
                    }
                  ) : /* @__PURE__ */ t(T, { "data-testid": "account-menu-header", children: L }),
                  /* @__PURE__ */ t(Je, {}),
                  m ? /* @__PURE__ */ w(
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
                        /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(Vi, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ce, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          wa,
                          {
                            glass: S,
                            mode: g,
                            onToggle: p,
                            accentColor: h,
                            tint: d
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ w(
                    nr,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        I.map((D) => /* @__PURE__ */ w(
                          Qe,
                          {
                            onClick: () => W(D),
                            "data-testid": `menu-item-${D.key}`,
                            sx: F,
                            children: [
                              /* @__PURE__ */ t(we, { children: D.icon }),
                              /* @__PURE__ */ t(ce, { sx: { flex: 1 }, children: D.label }),
                              /* @__PURE__ */ t(Qo, { count: D.badge })
                            ]
                          },
                          D.key
                        )),
                        b ? /* @__PURE__ */ t(Je, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ w(
                          Qe,
                          {
                            onClick: () => V(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...F,
                              color: E ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(we, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(kn, { fontSize: "small" }) }),
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
}, Ea = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ia = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: i,
  title: s,
  onBrandClick: c,
  brandMenuOpen: a,
  brandColor: h,
  headerBackgroundColor: d,
  headerForegroundColor: m,
  activeAccentColor: g = "#01584f",
  groupAccentColor: p,
  activeForegroundColor: u,
  foregroundColor: x,
  surfaceBackgroundColor: I,
  flyoutSurfaceColor: b,
  collapsed: S,
  expandedWidth: R,
  collapsedWidth: E,
  topContent: C,
  submenuMode: v,
  color: y,
  hoverColor: _,
  avatarColor: B,
  showProfile: V = !0,
  userName: W = "User",
  userEmail: F,
  userRole: L,
  userAvatar: D,
  showNotifications: A = !0,
  notificationCount: te = 0,
  onNotificationsClick: Ie,
  whatsNewCount: z = 0,
  onProfileClick: k,
  menuItems: X,
  onLogout: Q,
  theme: ie = "light",
  showThemeToggler: $ = !0,
  onThemeToggle: P
}) => {
  const J = Ge(), G = J.palette.mode === "dark", K = I ?? (G ? J.palette.background.paper : "#ffffff"), H = y ?? x ?? (G ? J.palette.text.primary : g), ae = _ ?? p ?? zt(g), me = B ?? g, pe = l.useRef(null), [ke, Oe] = l.useState(!1), oe = L ? Pn(L) : void 0, re = (dt) => /* @__PURE__ */ t(
    Sr,
    {
      name: W,
      avatar: D,
      color: me,
      size: dt
    }
  ), le = te + z, ge = S && v === "flyout", $e = A ? /* @__PURE__ */ t(
    vr,
    {
      count: le,
      onClick: Ie,
      color: H,
      hoverColor: ae,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, He = V ? /* @__PURE__ */ w(
    ot,
    {
      ref: pe,
      onClick: () => Oe(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ke,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: S ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 40px button,
        // matching the rail's icon buttons
        p: ge ? "2px" : 0.75,
        borderRadius: "10px",
        bgcolor: ke ? ae : "transparent",
        "&:hover": { bgcolor: ae },
        ...Ea
      },
      children: [
        S && !ge && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Wn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !le,
              children: re(36)
            }
          )
        ) : re(S ? 36 : 40),
        S ? null : /* @__PURE__ */ w(T, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ce,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: H, lineHeight: 1.3 },
              children: W
            }
          ),
          oe ? /* @__PURE__ */ t(
            ce,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: H,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: oe
            }
          ) : null
        ] })
      ]
    }
  ) : null, Ue = !!$e && (!S || ge || !He);
  return /* @__PURE__ */ w(
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
          Vo,
          {
            mainLinks: e,
            secondaryLinks: o,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: i,
            title: s,
            onBrandClick: c,
            brandMenuOpen: a,
            brandColor: h,
            headerBackgroundColor: d,
            headerForegroundColor: m,
            activeAccentColor: g,
            groupAccentColor: p,
            activeForegroundColor: u,
            foregroundColor: x,
            surfaceBackgroundColor: K,
            flyoutSurfaceColor: b,
            collapsed: S,
            expandedWidth: R,
            collapsedWidth: E,
            topContent: C,
            footer: He || Ue ? /* @__PURE__ */ w(
              Ne,
              {
                direction: ge ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  ge && Ue ? $e : null,
                  He,
                  !ge && Ue ? $e : null
                ]
              }
            ) : void 0,
            submenuMode: v
          }
        ),
        V ? /* @__PURE__ */ t(
          Ra,
          {
            open: ke,
            anchorEl: pe.current,
            onClose: () => Oe(!1),
            width: Math.max(R - 16, 240),
            renderAvatar: re,
            userName: W,
            userEmail: F,
            roleLabel: oe,
            accentColor: g,
            tint: ae,
            showThemeToggler: $,
            theme: ie,
            onThemeToggle: P,
            onProfileClick: k,
            onLinkClick: n,
            menuItems: X,
            onLogout: Q,
            glass: v === "flyout"
          }
        ) : null
      ]
    }
  );
}, Cn = Ee(qn), Tn = Ee(wo), An = 240, _a = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Ca = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: c = !1
}) => {
  const a = Ge(), h = a.palette.mode === "dark", d = !!e, m = dr(a.palette.background.paper), g = br({
    enabled: c,
    isDark: h,
    selector: ".MuiMenuItem-root",
    radius: ee
  }), p = /* @__PURE__ */ t(
    nr,
    {
      autoFocusItem: d,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((u) => {
        const x = u.key === n, I = u.accentColor ?? s;
        return /* @__PURE__ */ w(
          Qe,
          {
            selected: x,
            onClick: () => i(u),
            "data-testid": `platform-item-${u.key}`,
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
                    boxShadow: c ? `0 0 0 3px ${h ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                ze,
                {
                  primary: u.name,
                  secondary: u.description,
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
                qi,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: I }
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
    sr,
    {
      open: d,
      anchorEl: e,
      onClose: o,
      onClick: (u) => u.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: tr },
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
            minWidth: An,
            borderRadius: `${ee}px`
          } : { ..._a, minWidth: An },
          children: c ? /* @__PURE__ */ w(Te, { children: [
            /* @__PURE__ */ t(
              wt,
              {
                isDark: h,
                solid: m,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${fr} ${Cn.duration}ms ${Cn.easing} both`,
                  [Ae]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ w(
              T,
              {
                ...g.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${hr} ${Tn.duration}ms ${Tn.easing} 70ms both`,
                  [Ae]: { animation: "none" }
                },
                children: [
                  g.lens,
                  p
                ]
              }
            )
          ] }) : p
        }
      )
    }
  );
}, Ta = ({ children: e, anchorEl: o, ...r }) => {
  const n = l.useRef(null), i = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ w(
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
          Ca,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, Aa = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: i = 0,
  ...s
}) => {
  var C;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: h,
    onNotificationsClick: d,
    userName: m = "User",
    userRole: g,
    userAvatar: p
  } = s, u = l.useRef(null), [x, I] = l.useState(
    null
  ), b = !!x, S = l.useRef(e);
  l.useEffect(() => {
    e && !S.current && I(null), S.current = e;
  }, [e]);
  const R = l.useContext(vt);
  if (!a && !n)
    return null;
  const E = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ w(Te, { children: [
    /* @__PURE__ */ w(
      Ne,
      {
        ref: u,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Re,
            {
              title: e ? m : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                ot,
                {
                  onClick: () => I(u.current),
                  "aria-label": `Account menu for ${m}`,
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
                    ni,
                    {
                      name: m,
                      role: g,
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
            vr,
            {
              count: h + i,
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
      ii,
      {
        anchorEl: x,
        onClose: () => I(null),
        placement: e ? "beside" : "above",
        width: e || (C = u.current) == null ? void 0 : C.clientWidth,
        ...s
      }
    )
  ] });
}, Oa = 120, $a = 300, On = Ee(Vn), $n = Ee(wo), Ma = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, La = 'input, textarea, [contenteditable="true"]', Jo = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(La)) == null || o.focus();
}, Da = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: s,
  hoverColor: c
}) => {
  const a = xr(), h = l.useContext(vt), d = l.useRef(null), [m, g] = l.useState(null);
  return l.useEffect(() => {
    o === "full" && n && (Jo(d.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    T,
    {
      ref: d,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && h ? /* @__PURE__ */ t(
    Na,
    {
      search: e,
      color: s,
      railTooltip: a
    }
  ) : /* @__PURE__ */ w(
    T,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Re, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          ve,
          {
            "aria-label": "Search",
            onClick: (p) => o === "expand" ? r == null ? void 0 : r() : g(p.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: s,
              borderRadius: "8px",
              "&:hover": { bgcolor: c }
            },
            children: /* @__PURE__ */ t(ir, {})
          }
        ) }),
        /* @__PURE__ */ t(
          sr,
          {
            open: !!m,
            anchorEl: m,
            onClose: () => g(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => Jo(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, Na = ({ search: e, color: o, railTooltip: r }) => {
  const n = Ge().palette.mode === "dark";
  ts(n, Xo(o, n ? 0.3 : 0.35));
  const i = `rgb(${St()})`, s = dr(n ? "#1e2430" : "#ffffff"), c = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${ee}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: i
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${ee}px`,
      "&.Mui-focusVisible": { borderColor: i }
    }
  }, a = l.useRef(null), h = l.useRef(null), [d, m] = l.useState(!1), g = l.useRef(!1), p = l.useRef(void 0), u = l.useRef(void 0), x = () => {
    clearTimeout(p.current), clearTimeout(u.current);
  }, I = l.useCallback(() => {
    x(), g.current = !1, m(!1);
  }, []), b = () => {
    clearTimeout(u.current), d || (clearTimeout(p.current), p.current = setTimeout(
      () => m(!0),
      Oa
    ));
  }, S = () => {
    clearTimeout(p.current), clearTimeout(u.current), u.current = setTimeout(() => {
      !g.current && !Ma(h.current) && m(!1);
    }, $a);
  };
  return l.useEffect(() => x, []), l.useEffect(() => {
    if (!d)
      return;
    const R = setTimeout(() => Jo(h.current)), E = (v) => {
      var _, B;
      const y = v.target;
      !((_ = h.current) != null && _.contains(y)) && !((B = a.current) != null && B.contains(y)) && I();
    }, C = (v) => {
      var y;
      v.key === "Escape" && (I(), (y = a.current) == null || y.focus());
    };
    return document.addEventListener("pointerdown", E), document.addEventListener("keydown", C), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", E), document.removeEventListener("keydown", C);
    };
  }, [d, I]), /* @__PURE__ */ w(
    T,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Re,
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
                  x(), g.current = !0, m(!0);
                },
                sx: {
                  width: ye,
                  height: ye,
                  color: o,
                  borderRadius: `${ee}px`
                },
                children: /* @__PURE__ */ t(
                  ir,
                  {
                    sx: { fontSize: yt }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          or,
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
              T,
              {
                ref: h,
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
                    wt,
                    {
                      isDark: n,
                      solid: s,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${fr} ${On.duration}ms ${On.easing} both`,
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
                        animation: `${hr} ${$n.duration}ms ${$n.easing} 60ms both`,
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
}, ka = 100, Fa = () => {
  const e = l.useRef(null), o = l.useRef(void 0), r = l.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = l.useState(!1), [s, c] = l.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return l.useEffect(() => {
    const d = (g) => {
      r.current.has(g) || (a(), i(!1));
    }, m = () => {
      a(), i(!1);
    };
    return document.addEventListener("mouseover", d), document.documentElement.addEventListener("mouseleave", m), () => {
      a(), document.removeEventListener("mouseover", d), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), l.useEffect(() => {
    if (!s)
      return;
    const d = (m) => {
      var g;
      (g = e.current) != null && g.contains(m.target) || c(!1);
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [s]), {
    expanded: n || s,
    pin: () => c(!0),
    rootProps: {
      ref: e,
      onMouseOver: (d) => {
        r.current.add(d.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, i(!0);
        }, ka));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (d) => {
        const m = d.relatedTarget;
        m && !d.currentTarget.contains(m) && c(!1);
      },
      onKeyDown: (d) => {
        d.key === "Escape" && c(!1);
      }
    }
  };
}, Wa = 300, Go = 288, Pa = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Ba = 68, za = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Ga = typeof window > "u" ? co : Oi, zc = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: c = "rail",
  sidebarSubmenu: a = "expand",
  mobileNavigation: h = "bottom-bar",
  mobileBottomBarLinks: d,
  logo: m,
  onBrandClick: g,
  searchComponent: p,
  brandColor: u,
  contentPadding: x = Hn,
  userMenuItems: I,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: S,
  groupAccentColor: R,
  activeSidebarForegroundColor: E,
  enableRefreshToken: C = !1,
  holdSessionSkeleton: v = !1,
  sessionSkeletonContent: y,
  activePath: _,
  onLinkClick: B,
  showProfile: V = !0,
  userName: W,
  userRole: F,
  userAvatar: L,
  userEmail: D,
  onLogout: A,
  showSettings: te = !0,
  onSettingsClick: Ie,
  onProfileClick: z,
  showNotifications: k = !0,
  notificationCount: X = 0,
  NotificationSidebarContent: Q,
  whatsNewCount: ie = 0,
  onNotificationsClick: $,
  platforms: P,
  currentPlatformKey: J,
  onPlatformSelect: G,
  onVerify: K,
  alertProps: H,
  style: ae,
  sidebarStyles: me,
  contentStyles: pe,
  accentColor: ke,
  sidebarAccentColor: Oe,
  sidebarForegroundColor: oe,
  contentBackgroundColor: re,
  theme: le = "light",
  darkModeSelector: ge,
  showThemeToggler: $e = !1,
  onThemeToggle: He,
  GlobalChatSidebar: Ue,
  useChatSidebar: lt,
  chatPanelMode: dt = "docked",
  chatPanelPosition: jt = "right",
  chatPanelWidth: Vt = 420,
  onChatClose: qt,
  showAssistant: rt = !1,
  assistantPlacement: Rt = "sidebar",
  assistantShortcut: Yt = "j",
  onAssistantClick: nt,
  assistantActive: Et = !1,
  assistantBusy: It = !1,
  customNavbar: _t,
  customNavbarProps: Eo,
  redirectToLogin: ut,
  apiBaseUrl: Zt
}) => {
  const ft = Mn(), fe = Ln(ft.breakpoints.down("md")), f = Xr(
    () => yo(yr(le)),
    [le]
  ), N = le === "dark", j = ke ?? "#01584f", M = Oe ?? j, U = jn(
    typeof re == "object" ? re[le] : re,
    N
  ), Y = c === "collapsible", xe = c === "panel", de = xe && i && !fe, ue = c === "rail-labeled", Io = Y || ue, Fe = Kn(
    b,
    N
  ), _o = S ?? Fe, We = oe ?? (N ? "#ffffff" : M), Ct = R ?? zt(We), Tt = S ? Uo(_o) : We, wr = (O) => /* @__PURE__ */ t(
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
  ), Qt = u ?? Tt, [Rr, Co] = st(
    null
  ), To = ((P == null ? void 0 : P.length) ?? 0) > 1, ci = Kr(() => Co(null), []), li = (O) => {
    Co(null), G ? G(O) : O.key !== J && O.url && window.location.assign(O.url);
  }, Er = (O) => To ? /* @__PURE__ */ t(
    Ta,
    {
      anchorEl: Rr,
      onClose: ci,
      platforms: P,
      currentKey: J,
      onSelect: li,
      accentColor: j,
      glass: a === "flyout" && (Y || xe) && !fe,
      children: O
    }
  ) : O, Jt = To ? (O) => Co(O.currentTarget) : g, eo = To ? !!Rr : void 0, Ao = Er(
    m ?? wr(Qt)
  ), di = Er(
    m ?? wr(u ?? We)
  ), Oo = Fa(), Me = mr(a, c), Pe = Me || !Oo.expanded, Ir = Me ? "popover" : "expand", _r = Me ? go : Nt, Cr = Me ? "transparent" : Fe, Tr = Me && !S ? "transparent" : _o, [ui, Ar] = st(!1), fi = Kr(() => Ar(!1), []), Xe = Xn({
    showSidebar: i,
    isMobile: fe,
    sidebarVariant: c,
    sidebarSubmenu: a
  }), [Or, it] = st(!1), [$r, $o] = st(!1), Se = fe && h === "bottom-bar", Mr = `calc(${si}px + env(safe-area-inset-bottom, 0px))`, [Mo, Lr] = st({ open: !1, tab: "notifications" }), Dr = () => Lr((O) => ({ ...O, open: !1 })), hi = k && !!Q, [pi, mi] = st(!0), [gi, xi] = st(!1), Lo = lt == null ? void 0 : lt(), Nr = (Lo == null ? void 0 : Lo.isOpen) ?? !1, kr = dt === "floating" ? "floating" : "docked", bi = kr === "docked" && Nr && Ue && !fe ? Vt : 0, to = Wo(K), Fr = Wo(!1), Wr = Xr(
    () => ea(Zt),
    [Zt]
  );
  co(() => {
    to.current = K;
  }, [K]);
  const Do = Wo(nt);
  Do.current = nt;
  const At = rt && Yt ? Yt.toLowerCase() : null;
  co(() => {
    if (!At)
      return;
    const O = (se) => {
      (se.metaKey || se.ctrlKey) && !se.altKey && !se.shiftKey && se.key.toLowerCase() === At && Do.current && (se.preventDefault(), Do.current());
    };
    return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
  }, [At]);
  const Pr = (O) => {
    const se = A(O);
    se instanceof Promise && se.catch((Ke) => {
      console.error("Error in logout handler:", Ke);
    });
  };
  if (Ga(() => {
    (() => {
      var se;
      try {
        const { isAuthenticated: Ke } = Qs();
        if (!Ke) {
          console.log("No session found, redirecting to login"), Xt(), ut();
          return;
        }
        if (!Fr.current) {
          const { user: $t, error: Fo } = Js();
          if ($t && !Fo) {
            const _i = {
              name: $t.name || "",
              email: $t.email || "",
              profilePicture: $t.profilePicture || "",
              role: $t.role || ""
            };
            Fr.current = !0, (se = to.current) == null || se.call(to, _i);
          } else
            Fo && console.error("Error getting user data:", Fo);
        }
        xi(!0);
      } catch (Ke) {
        console.error("Error checking session:", Ke), Xt(), ut();
      } finally {
        mi(!1);
      }
    })();
  }, [ut]), co(() => {
    C && ta(Wr, ut);
  }, [C, Wr]), pi || v)
    return /* @__PURE__ */ t(
      Ys,
      {
        theme: le,
        darkModeSelector: ge,
        sidebarVariant: c,
        sidebarSubmenu: a,
        showSidebar: i,
        contentPadding: x,
        sidebarBackgroundColor: b,
        contentBackgroundColor: re,
        content: y
      }
    );
  if (!gi)
    return null;
  const Ot = p ?? (_t ? /* @__PURE__ */ t(_t, { ...Eo }) : null), yi = (O) => {
    it(!1), $o(!1), Lr({ open: !0, tab: O });
  }, No = Q && (() => yi("notifications")), Si = X + ie, Br = {
    avatarColor: M,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: I == null ? void 0 : I.map(
      (O) => O.onClick || !O.path ? O : { ...O, onClick: () => B == null ? void 0 : B(O.path) }
    ),
    showNotifications: k,
    notificationCount: X,
    whatsNewCount: ie,
    onNotificationsClick: No,
    showProfile: V,
    userName: W,
    userRole: F,
    userAvatar: L,
    showSettings: te,
    onSettingsClick: Ie,
    showThemeToggler: $e,
    theme: le,
    onThemeToggle: He,
    onLogout: Pr
  }, ko = (O) => /* @__PURE__ */ t(
    Aa,
    {
      ...Br,
      compact: O,
      color: We,
      hoverColor: Ct
    }
  ), zr = At ? [za() ? "⌘" : "Ctrl", At.toUpperCase()] : void 0, vi = (O) => rt && Rt === "sidebar" ? /* @__PURE__ */ t(
    yn,
    {
      variant: O ? "sidebar-icon" : "sidebar",
      onClick: nt,
      active: Et,
      busy: It,
      shortcutKeys: zr,
      accentColor: We
    }
  ) : null, wi = (O) => Ot ? /* @__PURE__ */ t(
    Da,
    {
      search: Ot,
      mode: O,
      onExpand: () => {
        Oo.pin(), Ar(!0);
      },
      autoFocus: ui,
      onAutoFocused: fi,
      color: We,
      hoverColor: Ct
    }
  ) : null, oo = (O) => {
    const se = vi(O !== "full"), Ke = wi(O);
    return se || Ke ? /* @__PURE__ */ w(
      Dt,
      {
        spacing: Me ? `${vo}px` : 1.5,
        sx: { alignItems: O === "full" ? "stretch" : "center" },
        children: [
          se,
          Me && se && Ke ? /* @__PURE__ */ t(
            q,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${zt(We)}`
              }
            }
          ) : null,
          Ke
        ]
      }
    ) : void 0;
  }, Gr = () => /* @__PURE__ */ t(
    Vo,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: _,
      onLinkClick: B,
      showHeaderBar: Y,
      logo: Ao,
      title: n,
      onBrandClick: Jt,
      brandMenuOpen: eo,
      brandColor: Qt,
      headerBackgroundColor: Y ? Tr : void 0,
      headerForegroundColor: Y ? Tt : void 0,
      activeAccentColor: M,
      groupAccentColor: R,
      activeForegroundColor: E,
      foregroundColor: oe,
      surfaceBackgroundColor: Cr,
      flyoutSurfaceColor: Fe,
      collapsed: ue || Pe,
      showLabels: ue,
      expandedWidth: Go,
      collapsedWidth: ue ? zn : _r,
      topContent: oo(
        ue ? "popover" : Pe ? Ir : "full"
      ),
      footer: ko(ue || Pe),
      submenuMode: Me ? "flyout" : "inline"
    }
  ), Hr = (O) => Me ? Ri(O) : Ei(O), Ri = (O) => /* @__PURE__ */ t(
    q,
    {
      component: "aside",
      sx: {
        width: Xe,
        minWidth: Xe,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (se) => se.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: U
      },
      children: /* @__PURE__ */ w(
        q,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: Pt,
            bottom: Pt,
            left: Pt,
            width: go,
            borderRadius: `${Gn}px`,
            display: "flex",
            flexDirection: "column",
            ...me
          },
          children: [
            /* @__PURE__ */ t(
              wt,
              {
                isDark: N,
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
    }
  ), Ei = (O) => /* @__PURE__ */ t(
    q,
    {
      component: "aside",
      sx: {
        width: Nt,
        minWidth: Nt,
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
          ...Me ? {} : Oo.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Pe ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Pe ? Nt : Go,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Fe,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Pe ? "none" : `4px 0 24px rgba(0, 0, 0, ${N ? 0.5 : 0.12})`,
            transition: Pa,
            ...me
          },
          children: O
        }
      )
    }
  ), Ii = Un(
    x,
    ft
  );
  return /* @__PURE__ */ t(po, { theme: f, children: /* @__PURE__ */ t(Bn.Provider, { value: M, children: /* @__PURE__ */ t(Kt.Provider, { value: Fe, children: /* @__PURE__ */ w(
    q,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...ae
      },
      children: [
        /* @__PURE__ */ t(Ho, {}),
        fe && /* @__PURE__ */ t(
          Sa,
          {
            height: lo,
            onMenuClick: i && !Se ? () => it(!0) : void 0,
            appName: n,
            logo: Ao,
            onBrandClick: Jt,
            brandMenuOpen: eo,
            background: _o,
            color: Tt,
            brandColor: Qt,
            endContent: k ? /* @__PURE__ */ t(
              vr,
              {
                count: Si,
                onClick: No,
                color: Tt,
                hoverColor: Ct,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !fe && ue && /* @__PURE__ */ t(
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
              ...me
            },
            children: Gr()
          }
        ),
        i && !fe && Y && Hr(
          /* @__PURE__ */ w(Te, { children: [
            Gr(),
            (H == null ? void 0 : H.show) && !Pe && /* @__PURE__ */ t(ao, { ...H })
          ] })
        ),
        de && Hr(
          /* @__PURE__ */ w(Te, { children: [
            /* @__PURE__ */ t(
              Ia,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: _,
                onLinkClick: B,
                logo: Ao,
                title: n,
                onBrandClick: Jt,
                brandMenuOpen: eo,
                brandColor: Qt,
                headerBackgroundColor: Tr,
                headerForegroundColor: Tt,
                activeAccentColor: M,
                groupAccentColor: R,
                activeForegroundColor: E,
                foregroundColor: oe,
                surfaceBackgroundColor: Cr,
                flyoutSurfaceColor: Fe,
                collapsed: Pe,
                expandedWidth: Go,
                collapsedWidth: _r,
                topContent: oo(
                  Pe ? Ir : "full"
                ),
                submenuMode: Me ? "flyout" : "inline",
                color: We,
                hoverColor: Ct,
                avatarColor: M,
                showProfile: V,
                userName: W,
                userEmail: D,
                userRole: F,
                userAvatar: L,
                showNotifications: k,
                notificationCount: X,
                onNotificationsClick: hi ? No : $,
                whatsNewCount: ie,
                onProfileClick: z,
                menuItems: I,
                onLogout: Pr,
                theme: le,
                showThemeToggler: $e,
                onThemeToggle: He
              }
            ),
            (H == null ? void 0 : H.show) && !Pe && /* @__PURE__ */ t(ao, { ...H })
          ] })
        ),
        i && !fe && !Io && !xe && /* @__PURE__ */ t(
          jr,
          {
            variant: "permanent",
            sx: {
              width: Xe,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Xe,
                boxSizing: "border-box",
                bgcolor: U,
                borderRight: "none"
              },
              ...me
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
                        mo,
                        {
                          logo: di,
                          appName: n,
                          onClick: Jt,
                          menuOpen: eo,
                          color: u ?? We,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  oo("popover"),
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
                          pa,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: _,
                            onLinkClick: B,
                            accentColor: M,
                            surfaceBackgroundColor: U,
                            railShowTitles: s
                          }
                        ),
                        (H == null ? void 0 : H.show) && /* @__PURE__ */ t(ao, { ...H })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(q, { sx: { py: 1.5 }, children: ko(!0) })
                ]
              }
            )
          }
        ),
        i && fe && /* @__PURE__ */ w(
          Mi,
          {
            anchor: Se ? "bottom" : "left",
            open: Or,
            onOpen: () => it(!0),
            onClose: () => it(!1),
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
                Vo,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: _,
                  onLinkClick: (O) => {
                    B == null || B(O), it(!1);
                  },
                  onLinkAction: () => it(!1),
                  collapsed: !1,
                  expandedWidth: Se ? "100%" : Wa,
                  activeAccentColor: M,
                  groupAccentColor: R,
                  activeForegroundColor: E,
                  foregroundColor: oe,
                  surfaceBackgroundColor: Fe,
                  topInsetPx: Se ? 8 : 0,
                  topContent: Se ? void 0 : oo("full"),
                  footer: Se ? void 0 : ko(!1)
                }
              ),
              (H == null ? void 0 : H.show) && /* @__PURE__ */ t(ao, { ...H })
            ]
          }
        ),
        Se && Ot && /* @__PURE__ */ t(
          ya,
          {
            open: $r,
            onClose: () => $o(!1),
            search: Ot
          }
        ),
        Se && /* @__PURE__ */ t(
          ba,
          {
            ...Br,
            pinnedLinks: d,
            activePath: _,
            onLinkClick: B,
            onMenuClick: i ? () => it(!0) : void 0,
            menuOpen: Or,
            onSearchClick: Ot ? () => $o(!0) : void 0,
            searchOpen: $r,
            showAssistant: rt,
            onAssistantClick: nt,
            assistantActive: Et,
            showProfile: V,
            background: Fe,
            color: We,
            activeColor: M,
            activeBackground: Ct
          }
        ),
        /* @__PURE__ */ t(
          q,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Ii,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": fe ? `${lo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Xe ? `calc(100% - ${Xe}px)` : "100%",
              mt: fe ? `${lo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Se && {
                pb: `calc(var(--lumora-content-padding) + ${Mr})`
              },
              backgroundColor: U,
              ...pe
            },
            children: e
          }
        ),
        Ue && /* @__PURE__ */ t(
          sa,
          {
            open: Nr,
            variant: kr,
            position: jt,
            width: Vt,
            sidebarWidthPx: Xe,
            bottomOffsetPx: rt && Rt === "floating" ? Ba : 0,
            fullScreen: fe,
            fullScreenBottom: Se ? Mr : "0px",
            onClose: qt,
            children: /* @__PURE__ */ t(Ue, {})
          }
        ),
        rt && Rt === "floating" && !Se && /* @__PURE__ */ t(
          yn,
          {
            variant: "floating",
            rightOffsetPx: bi,
            shortcutKeys: zr,
            onClick: nt,
            active: Et,
            busy: It
          }
        ),
        k && Q && /* @__PURE__ */ t(
          jr,
          {
            anchor: "right",
            open: Mo.open,
            onClose: Dr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              Q,
              {
                onClose: Dr,
                initialTab: Mo.tab
              },
              Mo.tab
            )
          }
        )
      ]
    }
  ) }) }) });
};
export {
  ne as AUTH_ERROR_CODES,
  Z as AuthError,
  Vo as CollapsibleSidebar,
  Pc as FullBleedSection,
  Ks as Kbd,
  Ys as LumoraShellSkeleton,
  zc as LumoraWrapper,
  Xt as clearAuthTokens,
  zc as default,
  Bc as getAuthErrorMessage,
  Ut as getAuthTokens,
  Js as getCurrentUser,
  yr as getDesignTokens,
  Qs as isAuthenticated,
  Zo as logAuthError,
  ei as storeAuthTokens
};
