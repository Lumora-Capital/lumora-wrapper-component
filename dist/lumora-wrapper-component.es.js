import { jsx as t, jsxs as w, Fragment as De } from "react/jsx-runtime";
import _s from "@mui/icons-material/KeyboardArrowDownRounded";
import Cs from "@mui/icons-material/KeyboardArrowUpRounded";
import Ts from "@mui/icons-material/ChevronRightRounded";
import C from "@mui/material/Box";
import Hr from "@mui/material/Collapse";
import et from "@mui/material/Divider";
import xe from "@mui/material/IconButton";
import to from "@mui/material/ListItemButton";
import be from "@mui/material/ListItemIcon";
import Ge from "@mui/material/ListItemText";
import Ne from "@mui/material/Stack";
import ye from "@mui/material/Tooltip";
import ce from "@mui/material/Typography";
import { useTheme as ze, createTheme as bo, alpha as ct, ThemeProvider as fo } from "@mui/material/styles";
import * as d from "react";
import { useMemo as Ur, useState as it, useCallback as Xr, useRef as No, useEffect as io, useLayoutEffect as Os } from "react";
import rt from "@mui/material/ButtonBase";
import { keyframes as Qo } from "@emotion/react";
import Jo from "@mui/material/Fade";
import er from "@mui/material/Popper";
import { useTheme as $n, CssBaseline as Bo, GlobalStyles as As, Box as q, useMediaQuery as Mn, Stack as Go, Skeleton as Ke, Drawer as Kr, SwipeableDrawer as $s } from "@mui/material";
import jr from "axios";
import Ms from "@mui/material/Card";
import Ls from "@mui/material/CardContent";
import Ln from "@mui/material/Button";
import Ds from "@mui/icons-material/AutoAwesomeRounded";
import Ns from "@mui/material/Grow";
import tr from "@mui/material/Paper";
import ks from "@mui/material/Slide";
import Fs from "@mui/material/ListSubheader";
import Je from "@mui/material/MenuItem";
import or from "@mui/material/MenuList";
import Dn from "@mui/icons-material/MenuRounded";
import rr from "@mui/icons-material/SearchRounded";
import Nn from "@mui/icons-material/LogoutRounded";
import kn from "@mui/icons-material/NotificationsNoneOutlined";
import Ws from "@mui/icons-material/SettingsOutlined";
import Ps from "@mui/material/Avatar";
import Bs from "@mui/material/Menu";
import Vr from "@mui/material/ToggleButton";
import Gs from "@mui/material/ToggleButtonGroup";
import zs from "@mui/material/Drawer";
import Hs from "@mui/material/AppBar";
import Us from "@mui/material/Toolbar";
import Fn from "@mui/material/Badge";
import Xs from "@mui/icons-material/DarkModeOutlined";
import Ks from "@mui/icons-material/LightModeOutlined";
import js from "@mui/icons-material/SettingsBrightnessOutlined";
import nr from "@mui/material/Popover";
import Vs from "@mui/icons-material/CheckRounded";
const ho = ({
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
  }, p = /* @__PURE__ */ w(De, { children: [
    o ? /* @__PURE__ */ t(
      ce,
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
    rt,
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
      children: p
    }
  ) : /* @__PURE__ */ t(Ne, { direction: "row", "data-testid": i, sx: a, children: p });
}, qr = !1, gt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, mt = (e, o) => e ? `${e}/${o.text}` : o.text, Ye = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Ye(n, o))) ?? !1 : !1;
}, Be = (e, o) => !!(o && e.path === o), sr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return gt(r) ? sr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), zo = (e) => {
  const o = yo(e);
  if (!o)
    return "#ffffff";
  const [r, n, s] = o.map((c) => {
    const a = c / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Ft = (e) => {
  const o = yo(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = o;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, Ho = (e, o) => {
  const r = yo(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, yo = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Wn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), ir = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", qs = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Ys = Qo`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ce = "@media (prefers-reduced-motion: reduce)", J = 6, ar = "9, 193, 174", Pn = d.createContext(
  void 0
), zt = d.createContext(
  void 0
), cr = (e) => d.useContext(zt) ?? e, xt = () => {
  const e = d.useContext(Pn), o = e ? yo(e) : null;
  return o ? o.join(", ") : ar;
}, Yr = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, Zs = (e, o) => e ? "255, 255, 255" : o, Qs = (e, o, r = ar) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${qs(e)}, 0 0 0 1px ${ir(e)}`
}), Js = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", lr = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: ir(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${J}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), dr = Qo`
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
`, ur = Qo`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, fr = (e, o = ar, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Wt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: Ho(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${Ho(e, 0.45)}`
}, ei = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${ir(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${J}px`,
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
}, ti = 100, Bn = 80, ao = 56, $t = 72, po = 52, _e = 40, mo = 20, hr = 4, Nt = 8, Gn = J, zn = { xs: 2, md: "18px" }, Hn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, pr = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), Un = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n
}) => !e || o ? 0 : r === "rail-labeled" ? Bn : pr(n, r) ? po + 2 * Nt : r === "collapsible" || r === "panel" ? $t : ti, Xn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Kn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), jn = { stiffness: 320, damping: 24 }, Vn = { stiffness: 320, damping: 28 }, mr = { stiffness: 520, damping: 20 }, qn = { stiffness: 380, damping: 36 }, vo = { stiffness: 260, damping: 28 }, oi = "cubic-bezier(0.32, 1.28, 0.52, 1)", ri = 420, Zr = 60, ni = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Qr = /* @__PURE__ */ new Map(), ve = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, s = Qr.get(n);
  if (s)
    return s;
  if (!ni)
    return { easing: oi, duration: ri };
  const i = 1 / 600;
  let c = 0, a = 0, p = 0, l = 1 / Zr;
  const m = [0];
  for (; p < 3; ) {
    const h = (-e * (c - 1) - o * a) / r;
    if (a += h * i, c += a * i, p += i, p >= l && (m.push(c), l += 1 / Zr, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const g = {
    easing: `linear(${m.map((h) => Number(h.toFixed(4))).join(", ")})`,
    duration: Math.round(p * 1e3)
  };
  return Qr.set(n, g), g;
}, tt = (e) => !!(e && typeof e.animate == "function"), ot = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Mt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, si = (e, o = 1.14) => {
  if (!tt(e) || ot())
    return;
  const r = ve(mr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, Pt = "data-rail-item", ii = `[${Pt}], button, [role="button"]`, bt = d.createContext(!1), gr = () => {
  const e = d.useContext(bt), o = ze(), r = d.useContext(zt);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: lr(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ze = ve(qn), xr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: c = null
}) => {
  const a = d.useRef(null), p = xt(), [l, m] = d.useState(null), g = d.useRef(null), h = d.useRef(null), f = (S, b) => {
    h.current = b;
    const _ = b.getBoundingClientRect(), K = S.getBoundingClientRect(), j = n ?? _.width, P = n ?? _.height, k = {
      top: Math.round(_.top - K.top + (_.height - P) / 2),
      left: Math.round(_.left - K.left + (_.width - j) / 2),
      width: Math.round(j),
      height: Math.round(P)
    };
    m(
      (M) => M && M.visible && M.top === k.top && M.left === k.left && M.width === k.width && M.height === k.height ? M : { ...k, visible: !0, instant: !(M != null && M.visible) }
    );
  }, x = (S, b) => {
    var K;
    const _ = (K = b == null ? void 0 : b.closest) == null ? void 0 : K.call(b, r);
    return _ && S.contains(_) ? _ : null;
  }, I = (S) => {
    if (!e)
      return;
    const b = x(S.currentTarget, S.target);
    b && f(S.currentTarget, b);
  }, y = (S) => {
    if (!e)
      return;
    const b = x(S.currentTarget, S.target);
    b && S.target.matches(":focus-visible") && f(S.currentTarget, b);
  }, v = () => {
    var _;
    const S = (_ = a.current) == null ? void 0 : _.parentElement, b = i && (S == null ? void 0 : S.querySelector(i));
    return S && b ? { container: S, item: b } : null;
  }, E = () => {
    const S = v();
    if (S) {
      f(S.container, S.item);
      return;
    }
    h.current = null, m((b) => b != null && b.visible ? { ...b, visible: !1 } : b);
  };
  d.useEffect(() => {
    var b, _;
    if (!e)
      return;
    const S = v();
    S ? f(S.container, S.item) : (_ = (b = a.current) == null ? void 0 : b.parentElement) != null && _.matches(":hover") || E();
  }, [e, c]);
  const R = (S) => {
    const b = S.relatedTarget;
    (!b || !S.currentTarget.contains(b)) && (S.currentTarget.matches(":hover") || E());
  };
  return d.useEffect(() => {
    const S = a.current;
    if (!(l != null && l.visible)) {
      g.current = null;
      return;
    }
    const b = g.current;
    if (g.current = l.top, !tt(S) || ot())
      return;
    if (b === null || l.instant) {
      S.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ze.duration,
        easing: Ze.easing
      });
      return;
    }
    const _ = Math.min(Math.abs(l.top - b) / 600, 0.08);
    _ && S.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - _ / 2} ${1 + _}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ze.duration, easing: "ease-out" }
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
          ...fr(o, p),
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
          // Shrinks away as it fades; wells back up on return
          scale: l.visible ? "1" : "0.7",
          opacity: l.visible ? 1 : 0,
          pointerEvents: "none",
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ze.duration}ms ${Ze.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
          [Ce]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: I,
      onMouseLeave: E,
      onFocus: y,
      onBlur: R,
      onScrollCapture: E
    } : {}
  };
}, ai = (e, o, r = null) => {
  const n = xr({
    enabled: e,
    isDark: o,
    selector: ii,
    // The rail's buttons exactly, so the hover sits on the item
    size: _e,
    radius: J,
    pinSelector: `[${Pt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, ci = (e, o) => {
  let r = 0, n = 0, s = e;
  for (; s && s !== o; ) {
    r += s.offsetTop, n += s.offsetLeft;
    const a = s.offsetParent;
    for (let p = s.parentElement; p && p !== o && (r -= p.scrollTop, n -= p.scrollLeft, p !== a); p = p.parentElement)
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
}, li = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const s = d.useRef(null), [i, c] = d.useState(null), a = d.useRef(null), p = d.useCallback(
    (m) => {
      const g = n.current;
      if (!e || !g)
        return;
      const h = g.querySelector(
        `[${Pt}][data-active="true"]`
      );
      if (!h) {
        c(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const f = ci(h, g);
      c(
        (x) => x && x.visible && x.top === f.top && x.left === f.left && x.width === f.width && x.height === f.height ? x : {
          ...f,
          visible: !0,
          instant: m || !(x != null && x.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    p(!1);
  }), d.useEffect(() => {
    const m = n.current;
    if (!e || !m)
      return;
    let g = 0;
    const h = () => {
      cancelAnimationFrame(g), g = requestAnimationFrame(() => p(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => p(!0));
    f == null || f.observe(m);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(h);
    return x == null || x.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(g), f == null || f.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, p]), d.useEffect(() => {
    const m = s.current;
    if (!(i != null && i.visible)) {
      a.current = null;
      return;
    }
    const g = a.current;
    if (a.current = i.top, g === null || i.instant || !tt(m) || ot())
      return;
    const h = Math.min(Math.abs(i.top - g) / 600, 0.08);
    h && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - h / 2} ${1 + h}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ze.duration, easing: "ease-out" }
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
        ...Wt(r, o),
        borderRadius: `${J}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: i.width,
        height: i.height,
        translate: `${i.left}px ${i.top}px`,
        scale: i.visible ? "1" : "0.7",
        opacity: i.visible ? 1 : 0,
        pointerEvents: "none",
        transition: i.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ze.duration}ms ${Ze.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Ce]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Jr = 14, di = 18, ui = "blur(12px) saturate(180%) brightness(1.04)", fi = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), hi = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, pi = 140, en = 0.22, mi = 0.14, gi = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var f;
      const h = e.current;
      h && (h.style.setProperty("--lx", `${i.x.toFixed(1)}px`), h.style.setProperty("--ly", `${i.y.toFixed(1)}px`), h.style.setProperty("--li", i.i.toFixed(3)), (f = n.current) == null || f.call(n, i.x, i.y, i.i));
    }, p = () => {
      i.x += (s.x - i.x) * en, i.y += (s.y - i.y) * en, i.i += (s.i - i.i) * mi;
      const h = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      h && (i.x = s.x, i.y = s.y, i.i = s.i), a(), c = h ? 0 : requestAnimationFrame(p);
    }, l = () => {
      c || (c = requestAnimationFrame(p));
    }, m = (h) => {
      const f = e.current;
      if (h.pointerType === "touch" || !f)
        return;
      const x = f.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      s.x = (h.clientX - x.left) * f.offsetWidth / x.width, s.y = (h.clientY - x.top) * f.offsetHeight / x.height;
      const I = Math.max(
        x.left - h.clientX,
        0,
        h.clientX - x.right
      ), y = Math.max(
        x.top - h.clientY,
        0,
        h.clientY - x.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(I, y) / pi), i.i < 0.01 && (i.x = s.x, i.y = s.y), l();
    }, g = () => {
      s.i = 0, l();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", g), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", g);
    };
  }, [e, o]);
}, yt = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: c
  }, a) => {
    const p = d.useRef(null), l = s && qr;
    gi(p, i && qr, c);
    const m = xt(), g = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [h, f] = d.useState(null), x = d.useRef(null), I = d.useCallback(
      (E) => {
        var T;
        if (p.current = E, typeof a == "function" ? a(E) : a && (a.current = E), (T = x.current) == null || T.disconnect(), x.current = null, !E || !l || !fi || typeof ResizeObserver > "u")
          return;
        const R = () => {
          const S = E.offsetWidth, b = E.offsetHeight;
          f(
            (_) => (_ == null ? void 0 : _.width) === S && _.height === b ? _ : S && b ? { width: S, height: b } : null
          );
        };
        x.current = new ResizeObserver(R), x.current.observe(E), R();
      },
      [a, l]
    ), y = d.useMemo(
      () => h ? hi(h.width, h.height, Jr) : null,
      [h]
    ), v = l && !!(y && h);
    return /* @__PURE__ */ w(De, { children: [
      v ? /* @__PURE__ */ t(
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
              width: h.width,
              height: h.height,
              filterUnits: "userSpaceOnUse",
              primitiveUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ t(
                  "feImage",
                  {
                    href: y,
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
                    stdDeviation: Jr / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: di,
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
          ref: I,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": v ? "true" : void 0,
          sx: [
            Qs(e, o, m),
            v ? {
              backdropFilter: `url(#${g}) ${ui}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
yt.displayName = "GlassLayer";
const Qe = _e, tn = hr, xi = J, on = 1.12, So = 6, rn = So - 2, Lt = J, Uo = 24, go = 10, nn = 0.12, sn = 0.75, bi = go + po / 2 - 2, yi = 90, vi = 22, Si = 1190, wi = 1195, xo = ve(jn), me = ve(qn), an = ve(vo), Ri = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), c = e + r, a = o + n, p = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + i} ${o} H ${c - i} ${p} ${c} ${o + i} V ${a - i} ${p} ${c - i} ${a} H ${e + i} ${p} ${e} ${a - i} V ${o + i} ${p} ${e + i} ${o} Z')`;
}, Ei = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: s,
  activePath: i,
  focusFirst: c = !1,
  onNavigate: a,
  onClose: p,
  panelProps: l,
  accentColor: m,
  activeForegroundColor: g,
  solidSurface: h
}) => {
  const f = ze(), x = f.palette.mode === "dark", I = !!(e && r), y = d.useRef(null);
  e && o && (y.current = { group: e, key: o });
  const v = y.current, E = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const A = r.getBoundingClientRect();
      return {
        x: n,
        y: A.top,
        left: n,
        right: n,
        top: A.top,
        bottom: A.bottom,
        width: 0,
        height: A.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), R = d.useRef(E);
  E && (R.current = E), d.useEffect(() => {
    r && si(r);
  }, [r]);
  const [T, S] = d.useState(!1);
  d.useEffect(() => {
    if (!I) {
      S(!1);
      return;
    }
    let A = 0;
    const H = requestAnimationFrame(() => {
      A = requestAnimationFrame(() => S(!0));
    });
    return () => {
      cancelAnimationFrame(H), cancelAnimationFrame(A);
    };
  }, [I]);
  const b = d.useMemo(
    () => v ? sr(v.group.subitems, v.group.icon) : [],
    [v]
  ), _ = d.useRef(null), K = d.useRef(null), j = d.useRef(0), P = d.useRef(null), k = d.useRef([]), M = b.findIndex(
    ({ sub: A }) => Be(A, i)
  ), [L, O] = d.useState(0);
  d.useEffect(() => {
    O(Math.max(M, 0));
  }, [o]), d.useEffect(() => {
    if (!I || !c)
      return;
    const A = setTimeout(() => {
      var H;
      return (H = k.current[0]) == null ? void 0 : H.focus();
    });
    return () => clearTimeout(A);
  }, [I, c, o]);
  const ee = (A) => {
    var Z;
    const H = Math.max(0, Math.min(A, b.length - 1));
    O(H), (Z = k.current[H]) == null || Z.focus();
  }, Se = (A, H) => {
    switch (A.key) {
      case "ArrowRight":
        ee(H + 1);
        break;
      case "ArrowLeft":
        H === 0 ? p(!0) : ee(H - 1);
        break;
      case "Home":
        ee(0);
        break;
      case "End":
        ee(b.length - 1);
        break;
      case "Tab":
        p(!0);
        break;
      default:
        return;
    }
    A.preventDefault();
  }, B = (A) => {
    const H = k.current.slice(0, b.length).filter((re) => !!re);
    if (!H.length)
      return;
    const Z = A !== null && A < H.length && !ot(), z = `translate ${me.duration}ms ${me.easing}, scale ${me.duration}ms ${me.easing}`, D = H.map((re) => re.offsetLeft + Qe / 2), de = H.map(
      (re, V) => Z && V === A ? on : 1
    ), oe = Z ? (on - 1) * Qe : 0, Te = D[0] - Qe / 2, fe = D[D.length - 1] + Qe / 2, ke = Z ? Math.min(
      Math.max(
        (D[A] - Te) / (fe - Te || 1),
        Math.max(0, 1 - rn / oe)
      ),
      Math.min(1, rn / oe)
    ) : 0;
    let pe = Te - oe * ke;
    H.forEach((re, V) => {
      const Oe = Qe * de[V], he = pe + Oe / 2;
      pe += Oe + tn, re.style.transition = `${z}, background 160ms ease, box-shadow 160ms ease`, re.style.translate = Z ? `${he - D[V]}px 0` : "", re.style.scale = Z ? String(de[V]) : "", Z ? re.style.setProperty("--dock-scale", String(de[V])) : re.style.removeProperty("--dock-scale");
    });
  }, F = d.useRef(null);
  d.useEffect(() => {
    F.current = null;
  }, [o]);
  const X = (A) => {
    F.current !== A && (F.current = A, cancelAnimationFrame(j.current), j.current = requestAnimationFrame(() => B(A)));
  };
  d.useEffect(() => () => cancelAnimationFrame(j.current), []);
  const te = f.palette.text.primary, ae = x ? f.palette.text.primary : m;
  return /* @__PURE__ */ w(De, { children: [
    /* @__PURE__ */ t(Jo, { in: I, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      C,
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
          ...s ? { clipPath: Ri(s) } : {},
          zIndex: Si,
          bgcolor: Js(x)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      er,
      {
        open: I,
        anchorEl: E ?? R.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Up by half the title, so the tile row (not the whole
          // panel) is centred on the rail icon
          {
            name: "offset",
            options: {
              offset: [-Uo / 2, go]
            }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: wi,
          transition: T ? `transform ${me.duration}ms ${me.easing}` : "none",
          [Ce]: { transition: "none" }
        },
        children: ({ TransitionProps: A }) => /* @__PURE__ */ t(
          $i,
          {
            in: (A == null ? void 0 : A.in) ?? I,
            onEnter: A == null ? void 0 : A.onEnter,
            onExited: A == null ? void 0 : A.onExited,
            groupKey: (v == null ? void 0 : v.key) ?? null,
            panelProps: l,
            isDark: x,
            solidSurface: h,
            groupText: v == null ? void 0 : v.group.text,
            glassRef: K,
            shapeRef: P,
            children: v ? /* @__PURE__ */ w(De, { children: [
              /* @__PURE__ */ t(
                C,
                {
                  "aria-hidden": !0,
                  "data-testid": "sidebar-flyout-title",
                  sx: {
                    px: `${So}px`,
                    height: Uo,
                    boxSizing: "border-box",
                    pt: "2px",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "16px",
                    letterSpacing: "0.02em",
                    color: "text.secondary",
                    whiteSpace: "nowrap"
                  },
                  children: v.group.text
                }
              ),
              /* @__PURE__ */ t(
                C,
                {
                  ref: _,
                  role: "menu",
                  "aria-label": v.group.text,
                  onPointerLeave: () => X(null),
                  sx: {
                    position: "relative",
                    display: "flex",
                    gap: `${tn}px`,
                    // A grown tile fits in the panel's padding
                    // (see DOCK_ROOM_PX)
                    px: 0
                  },
                  children: b.map(({ sub: H, icon: Z }, z) => /* @__PURE__ */ t(
                    Yn,
                    {
                      ref: (D) => {
                        k.current[z] = D;
                      },
                      sub: H,
                      icon: Z,
                      index: z,
                      active: Be(
                        H,
                        i
                      ),
                      tabIndex: z === L ? 0 : -1,
                      onClick: () => {
                        a(H.path), p();
                      },
                      onKeyDown: (D) => Se(D, z),
                      onFocus: (D) => {
                        O(z), D.currentTarget.matches(
                          ":focus-visible"
                        ) && X(z);
                      },
                      onHoverStart: (D) => {
                        D !== "touch" && X(z);
                      },
                      accentColor: m,
                      activeForegroundColor: g,
                      labelColor: te,
                      iconColor: ae,
                      isDark: x
                    },
                    H.path
                  ))
                },
                v.key
              )
            ] }) : null
          }
        )
      }
    )
  ] });
}, kt = 18, Ii = 160, Xo = 14, _i = 22, Ci = 2.5, Ti = 1, cn = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, s = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(s, 0)) + Math.min(Math.max(n, s), 0) - r.r;
}, Oi = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, Ai = (e, o, r) => {
  const n = So, s = kt, i = kt + o / 2, c = Math.max(e, ...r.map((y) => y.right + n)), a = {
    cx: c / 2,
    cy: i,
    hx: c / 2,
    hy: o / 2,
    r: Lt
  }, p = r.filter((y) => y.bottom - y.top > Qe * 1.02).map((y) => ({
    cx: (y.left + y.right) / 2,
    cy: (y.top + y.bottom) / 2 + kt,
    hx: (y.right - y.left) / 2 + n,
    hy: (y.bottom - y.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: Lt
  })), l = (y, v) => p.reduce(
    (E, R) => Oi(E, cn(y, v, R), _i),
    cn(y, v, a)
  ), m = (y, v) => {
    let E = i, R = i + v * (o / 2 + s);
    if (l(y, E) > 0)
      return null;
    for (let T = 0; T < 12; T += 1) {
      const S = (E + R) / 2;
      l(y, S) <= 0 ? E = S : R = S;
    }
    return E;
  }, g = Math.min(0, ...p.map((y) => y.cx - y.hx)) - 2, h = Math.max(c, ...p.map((y) => y.cx + y.hx)) + 2, f = [], x = [];
  for (let y = g; y <= h; ) {
    const v = m(y, -1), E = m(y, 1);
    if (v !== null && E !== null) {
      const T = +(y + Xo).toFixed(1);
      f.push([T, +v.toFixed(1)]), x.push([T, +E.toFixed(1)]);
    }
    const R = y - g < Lt + 4 || h - y < Lt + 4;
    y += R ? Ti : Ci;
  }
  return f.length ? `M ${[...f, ...x.reverse()].map(([y, v]) => `${y} ${v}`).join(" L ")} Z` : "";
}, ln = (e, [o, r], n, s) => {
  Array.from(e.children).forEach((i) => {
    tt(i) && (Mt(i), i.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: s,
      fill: r === 0 ? "forwards" : "none"
    }));
  });
}, $i = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: s,
  isDark: i,
  solidSurface: c,
  groupText: a,
  glassRef: p,
  shapeRef: l,
  children: m
}) => {
  const g = d.useRef(null), h = d.useRef(null), f = d.useRef(null), x = d.useRef(null), I = d.useRef(null), y = Zs(i, xt()), v = d.useCallback(
    (B, F, X) => {
      var te, ae;
      (te = I.current) == null || te.setAttribute("cx", String(B)), (ae = I.current) == null || ae.setAttribute("cy", String(F)), x.current && (x.current.style.opacity = String(
        X * (i ? Yr.dark.rim : Yr.light.rim)
      ));
    },
    [i]
  ), E = d.useRef(null), R = d.useRef(null), T = `lumora-flyout-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, S = d.useRef(0), b = d.useRef(0), _ = d.useRef(""), K = () => {
    var A, H, Z, z;
    const B = g.current, F = h.current;
    if (!B || !F)
      return !1;
    const X = B.getBoundingClientRect(), te = Array.from(
      B.querySelectorAll('[role="menuitem"]'),
      (D) => {
        if (D.style.scale)
          return null;
        const de = D.getBoundingClientRect();
        return {
          left: de.left - X.left,
          right: de.right - X.left,
          top: de.top - X.top,
          bottom: de.bottom - X.top
        };
      }
    ).filter((D) => D !== null), ae = Ai(
      B.offsetWidth,
      B.offsetHeight,
      te
    );
    return ae === _.current ? !1 : (_.current = ae, F.style.clipPath = `path('${ae}')`, (A = f.current) == null || A.setAttribute("d", ae), (H = x.current) == null || H.setAttribute("d", ae), (Z = E.current) == null || Z.setAttribute("d", ae), (z = R.current) == null || z.setAttribute("d", ae), !0);
  }, j = () => {
    if (b.current = 0, S.current)
      return;
    const B = () => {
      if (b.current = K() ? 0 : b.current + 1, b.current > 8) {
        S.current = 0;
        return;
      }
      S.current = requestAnimationFrame(B);
    };
    S.current = requestAnimationFrame(B);
  };
  l.current = j, d.useLayoutEffect(() => (K(), j(), () => {
    cancelAnimationFrame(S.current), S.current = 0;
  }), [n]);
  const P = d.useRef(null), k = d.useRef(null), M = d.useRef(!1), L = (B) => {
    g.current = B;
    const { ref: F } = s;
    typeof F == "function" ? F(B) : F && (F.current = B);
  }, O = () => {
    Mt(p.current), Mt(P.current), Mt(g.current);
  }, ee = () => {
    var te;
    const B = g.current, F = p.current, X = P.current;
    if (!(!tt(B) || !F || !X)) {
      if (O(), ot()) {
        B.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      k.current = null, F.animate(
        [
          { transform: `scale(${nn}, ${sn})` },
          { transform: "none" }
        ],
        { duration: xo.duration, easing: xo.easing }
      ), ln(F, [0, 1], 160, "ease-out");
      try {
        (te = h.current) == null || te.animate(
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
          duration: an.duration,
          delay: 60,
          easing: an.easing,
          fill: "backwards"
        }
      );
    }
  }, Se = () => {
    const B = g.current, F = p.current, X = P.current;
    if (!tt(B) || !F || !X) {
      r == null || r();
      return;
    }
    if (O(), ot()) {
      B.animate([{ opacity: 1 }, { opacity: 0 }], {
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
    }), ln(F, [1, 0], 200, "ease-in"), F.animate(
      [
        { transform: "none" },
        { transform: `scale(${nn}, ${sn})` }
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
      Se();
      return;
    }
    o == null || o(), ee();
  }, [e]), d.useLayoutEffect(() => {
    const B = g.current;
    if (!B)
      return;
    const F = B.getBoundingClientRect(), X = k.current;
    if (k.current = { width: F.width, height: F.height }, !M.current) {
      M.current = !0;
      return;
    }
    const te = p.current;
    !e || !X || !tt(te) || !F.width || !F.height || ot() || (Mt(te), te.animate(
      [
        {
          transform: `scale(${X.width / F.width}, ${X.height / F.height})`
        },
        { transform: "none" }
      ],
      { duration: me.duration, easing: me.easing }
    ));
  }, [n]), /* @__PURE__ */ w(
    C,
    {
      ref: L,
      onMouseEnter: s.onMouseEnter,
      onMouseLeave: s.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": a,
      sx: {
        position: "relative",
        borderRadius: `${Lt}px`,
        p: `${So}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -go - 2,
          width: go + 2
        }
      },
      children: [
        /* @__PURE__ */ w(
          C,
          {
            ref: p,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -kt,
              bottom: -kt,
              left: -Xo,
              right: -Ii,
              pointerEvents: "none",
              // The rail icon's centre: the tile row is level with it
              // (half the title below the panel's middle), one gap
              // plus half the rail's padding to the left
              transformOrigin: `${Xo - bi}px calc(50% + ${Uo / 2}px)`,
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
                            /* @__PURE__ */ t("path", { ref: R, fill: "black" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ t("g", { mask: `url(#${T}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: E,
                        transform: "translate(0 12)",
                        fill: i ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${T}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                yt,
                {
                  ref: h,
                  isDark: i,
                  solid: c,
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
                              stopColor: `rgb(${y})`,
                              stopOpacity: "1"
                            }
                          ),
                          /* @__PURE__ */ t(
                            "stop",
                            {
                              offset: "1",
                              stopColor: `rgb(${y})`,
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
        /* @__PURE__ */ t(C, { ref: P, sx: { position: "relative" }, children: m })
      ]
    }
  );
}, Yn = d.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: s,
    onClick: i,
    onKeyDown: c,
    onFocus: a,
    onHoverStart: p,
    accentColor: l,
    activeForegroundColor: m,
    labelColor: g,
    iconColor: h,
    isDark: f
  }, x) => {
    const I = xt(), y = d.useContext(zt), v = (S) => {
      const b = S.currentTarget.getBoundingClientRect();
      S.currentTarget.style.setProperty(
        "--mx",
        `${(S.clientX - b.left) / b.width * 100}%`
      ), S.currentTarget.style.setProperty(
        "--my",
        `${(S.clientY - b.top) / b.height * 100}%`
      );
    }, E = (S) => {
      const b = S.currentTarget;
      !tt(b) || ot() || b.animate(
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
    }, T = {
      ...fr(f, I),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": R
    };
    return /* @__PURE__ */ w(
      rt,
      {
        ref: x,
        role: "menuitem",
        tabIndex: s,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: i,
        onKeyDown: c,
        onFocus: a,
        onPointerMove: v,
        onMouseEnter: E,
        onPointerEnter: (S) => p(S.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Qe,
          height: Qe,
          borderRadius: `${xi}px`,
          color: n ? m : g,
          bgcolor: n ? l : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Wt(l, f) : {},
          transition: `translate ${me.duration}ms ${me.easing}, scale ${me.duration}ms ${me.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${Ys} ${xo.duration}ms ${xo.easing} both`,
          animationDelay: `${yi + r * vi}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: mo,
            color: n ? m : h
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
          } : T,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : T,
            "& [data-tile-name]": R,
            outline: "2px solid",
            outlineColor: l,
            outlineOffset: 2
          },
          [Ce]: {
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
                ...lr(f, y),
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
Yn.displayName = "FlyoutTile";
const Mi = 100, Li = 250, Di = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const s = d.useRef(/* @__PURE__ */ new Map()), i = d.useRef(null), c = d.useRef(void 0), a = d.useRef(void 0), p = () => {
    clearTimeout(c.current), c.current = void 0;
  }, l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = (v, E, R = !1) => {
    p(), l(), r({ key: v, pinned: E, focusFirst: R });
  }, g = d.useCallback((v = !1) => {
    var R, T;
    p(), l();
    const E = (R = n.current) == null ? void 0 : R.key;
    r(null), v && E && ((T = s.current.get(E)) == null || T.focus());
  }, []), h = () => {
    p(), !(!n.current || n.current.pinned) && (l(), a.current = setTimeout(() => g(), Li));
  };
  d.useEffect(() => {
    e || g();
  }, [e, g]), d.useEffect(
    () => () => {
      p(), l();
    },
    []
  );
  const f = o !== null;
  return d.useEffect(() => {
    if (!f)
      return;
    const v = (T) => {
      var b;
      const S = T;
      return S ? (b = i.current) != null && b.contains(S) ? !0 : [...s.current.values()].some((_) => _.contains(S)) : !1;
    }, E = (T) => {
      v(T.target) || g();
    }, R = (T) => {
      var S;
      T.key === "Escape" && g(
        !!((S = i.current) != null && S.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", E), document.addEventListener("keydown", R), () => {
      document.removeEventListener("pointerdown", E), document.removeEventListener("keydown", R);
    };
  }, [f, g]), {
    state: o,
    close: g,
    triggerProps: (v) => ({
      ref: (E) => {
        E ? s.current.set(v, E) : s.current.delete(v);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        l();
        const E = n.current;
        if (E) {
          E.key !== v && m(v, E.pinned);
          return;
        }
        p(), c.current = setTimeout(
          () => m(v, !1),
          Mi
        );
      },
      onMouseLeave: h,
      onClick: (E) => {
        if (E.detail === 0) {
          m(v, !0, !0);
          return;
        }
        const R = n.current;
        (R == null ? void 0 : R.key) === v && R.pinned ? g() : m(v, !0);
      },
      onKeyDown: (E) => {
        E.key === "ArrowRight" && (E.preventDefault(), m(v, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: l,
      onMouseLeave: h
    },
    onRailLeafEnter: () => {
      p(), n.current && !n.current.pinned && g();
    },
    getTrigger: (v) => s.current.get(v) ?? null
  };
}, Ni = 264, ki = 72, dn = 64, oo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Fi = 16, Wi = 14, Pi = 4, Bi = 2.5, un = "0.7rem", fn = 22, hn = ve(mr), at = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
  const i = d.useRef(null), [c, a] = d.useState(!1), p = d.useCallback(() => {
    const l = i.current;
    l && a(l.scrollWidth > l.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    p();
  }, [p, e]), d.useEffect(() => {
    const l = i.current;
    if (!l)
      return;
    const m = new ResizeObserver(() => p());
    return m.observe(l), () => m.disconnect();
  }, [p]), /* @__PURE__ */ t(
    ye,
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
}, Gi = ({
  open: e,
  size: o = Fi
}) => e ? /* @__PURE__ */ t(Cs, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(_s, { sx: { fontSize: o, opacity: 0.75 } }), pn = ({ open: e }) => /* @__PURE__ */ t(
  Ts,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), ro = 600, ut = `${hr}px`, co = 6, zi = (e) => {
  const o = Math.max(0, e - co);
  return {
    pl: `${Math.max(0, co - o)}px`,
    pr: `${Math.max(0, co - e)}px`
  };
};
function Hi(e, o) {
  const [r, n] = d.useState(0);
  return d.useLayoutEffect(() => {
    const s = e.current;
    if (!o || !s) {
      n(0);
      return;
    }
    const i = () => {
      const a = getComputedStyle(s), p = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth);
      n(Math.max(0, s.offsetWidth - s.clientWidth - p));
    };
    if (i(), typeof ResizeObserver > "u")
      return;
    const c = new ResizeObserver(i);
    return c.observe(s), s.firstElementChild && c.observe(s.firstElementChild), () => c.disconnect();
  }, [e, o]), r;
}
const no = 8;
function Ui(e, o, r) {
  d.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const s = (p) => {
      const l = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((f) => f.offsetHeight > 0).pop();
      if (!l)
        return;
      const m = n.getBoundingClientRect(), g = l.getBoundingClientRect();
      let h = 0;
      g.top < m.top + no ? h = g.top - m.top - no : g.bottom > m.bottom - no && (h = g.bottom - m.bottom + no), h !== 0 && n.scrollBy({ top: h, behavior: p });
    }, i = requestAnimationFrame(() => s("smooth")), c = window.setTimeout(() => s("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const Ko = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: s,
  logo: i,
  title: c,
  onBrandClick: a,
  brandMenuOpen: p,
  showHeaderBar: l = !1,
  headerBackgroundColor: m,
  headerForegroundColor: g,
  brandColor: h,
  activeAccentColor: f = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: I,
  foregroundColor: y,
  surfaceBackgroundColor: v,
  flyoutSurfaceColor: E,
  collapsed: R = !1,
  expandedWidth: T = Ni,
  collapsedWidth: S = ki,
  showLabels: b = !1,
  topInsetPx: _ = 0,
  topContent: K,
  footer: j,
  submenuMode: P = "inline"
}) => {
  var qt;
  const k = ze(), M = k.palette.mode === "dark", L = d.useContext(zt), O = P === "flyout" && R && !b, ee = Di(O), Se = d.useRef(null), B = d.useRef(null), F = d.useRef(null);
  Ui(F, r, R);
  const X = Hi(F, O), te = ai(O, M, ((qt = ee.state) == null ? void 0 : qt.key) ?? null), ae = li({
    enabled: O,
    isDark: M,
    color: f,
    containerRef: B
  }), { close: A } = ee;
  d.useEffect(() => {
    A();
  }, [r, A]);
  const [H, Z] = d.useState(
    {}
  ), z = I ?? zo(f), D = {
    bgcolor: f,
    color: z,
    "& .MuiListItemIcon-root": { color: z }
  }, de = {
    bgcolor: f,
    color: z,
    borderRadius: "8px"
  }, oe = x ?? Ft(f), Te = v ?? (M ? k.palette.background.paper : "#ffffff"), fe = y ?? (M ? "text.primary" : f), ke = m ?? Te, pe = g ?? (m ? zo(ke) : y ?? (M ? k.palette.text.primary : f)), re = Ft(pe), V = (u) => {
    n == null || n(u);
  }, Oe = (u, W) => {
    Z((G) => ({ ...G, [u]: !W }));
  }, he = (u, W) => H[W] ?? Ye(u, r), Ae = (u, W, G) => ({
    color: u ? z : fe,
    bgcolor: u ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: u ? z : fe,
      minWidth: G
    },
    "&:hover": u || b ? D : { bgcolor: W }
  }), Fe = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": D
  }, He = (u) => {
    const W = Be(u, r), G = /* @__PURE__ */ w(
      to,
      {
        disabled: !u.path,
        selected: W,
        onClick: () => u.path && V(u.path),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": W ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...u.action && { pr: 6 },
          ...u.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...Ae(
            W,
            oe,
            u.subtitle ? 48 : 36
          ),
          ...Fe
        },
        children: [
          /* @__PURE__ */ t(be, { children: u.icon }),
          /* @__PURE__ */ t(
            Ge,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: u.text,
                  fontWeight: ro
                }
              ),
              secondary: u.subtitle ? /* @__PURE__ */ t(
                C,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    at,
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
      return G;
    const { action: N } = u;
    return /* @__PURE__ */ w(C, { sx: { position: "relative" }, children: [
      G,
      /* @__PURE__ */ t(ye, { title: N.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        xe,
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
            borderColor: W ? "rgba(255, 255, 255, 0.35)" : oe,
            color: W ? z : fe,
            "&:hover": {
              bgcolor: W ? "rgba(255, 255, 255, 0.15)" : oe
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: W ? z : fe,
              outlineOffset: 1
            }
          },
          children: N.icon
        }
      ) })
    ] }, u.text);
  }, Ht = (u) => {
    const W = Ye(u, r), G = Be(u, r), N = mt("", u), U = he(u, N);
    return /* @__PURE__ */ w(
      C,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: W ? oe : "transparent"
        },
        children: [
          /* @__PURE__ */ w(
            to,
            {
              onClick: () => Oe(N, U),
              "data-testid": `sidebar-item-${u.text}`,
              "data-active": G ? "true" : "false",
              "aria-expanded": U,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Ae(G, oe, 36)
              },
              children: [
                /* @__PURE__ */ t(be, { children: u.icon }),
                /* @__PURE__ */ t(
                  Ge,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      at,
                      {
                        text: u.text,
                        fontWeight: ro
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(pn, { open: U })
              ]
            }
          ),
          /* @__PURE__ */ t(Hr, { in: U, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            C,
            {
              "data-testid": `sidebar-children-${u.text}`,
              sx: { pb: 0.5 },
              children: u.subitems.map(
                (ne) => lt(ne, N, 1)
              )
            }
          ) })
        ]
      },
      u.text
    );
  }, lt = (u, W, G) => {
    const N = mt(W, u), U = Pi + (G - 1) * Bi;
    if (gt(u)) {
      const we = Ye(u, r), Q = Be(u, r), $e = he(u, N);
      return /* @__PURE__ */ w(C, { "data-testid": `sidebar-group-${u.text}`, children: [
        /* @__PURE__ */ w(
          to,
          {
            onClick: () => Oe(N, $e),
            "data-testid": `sidebar-subitem-${u.text}`,
            "data-active": we ? "true" : "false",
            "aria-expanded": $e,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: U,
              ...Ae(Q, "action.hover", 32)
            },
            children: [
              u.icon ? /* @__PURE__ */ t(be, { children: u.icon }) : null,
              /* @__PURE__ */ t(
                Ge,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    at,
                    {
                      text: u.text,
                      fontWeight: ro
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(pn, { open: $e })
            ]
          }
        ),
        /* @__PURE__ */ t(Hr, { in: $e, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(C, { "data-testid": `sidebar-children-${u.text}`, children: u.subitems.map(
          (Re) => lt(Re, N, G + 1)
        ) }) })
      ] }, N);
    }
    const ne = Be(u, r);
    return /* @__PURE__ */ w(
      to,
      {
        selected: ne,
        disabled: !u.path,
        onClick: () => u.path && V(u.path),
        "data-testid": `sidebar-subitem-${u.text}`,
        "data-active": ne ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: U,
          ...Ae(ne, "action.hover", 32),
          ...Fe
        },
        children: [
          u.icon ? /* @__PURE__ */ t(be, { children: u.icon }) : null,
          /* @__PURE__ */ t(
            Ge,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: u.text,
                  fontWeight: ro
                }
              )
            }
          )
        ]
      },
      N
    );
  }, vt = (u, W, G, N, U, ne) => {
    const we = !U, Q = /* @__PURE__ */ w(
      xe,
      {
        "aria-label": W,
        disabled: we,
        onClick: U,
        onMouseEnter: O ? ee.onRailLeafEnter : void 0,
        ...O ? { [Pt]: "" } : {},
        "data-testid": (ne == null ? void 0 : ne.testId) ?? `sidebar-item-${W}`,
        "data-active": N ? "true" : "false",
        sx: b ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: N ? z : fe,
          bgcolor: N ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: fn
          },
          "&:hover": de,
          ...oo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: O ? _e : 44,
          height: O ? _e : 44,
          color: N ? z : fe,
          bgcolor: N ? f : "transparent",
          borderRadius: N ? "8px" : "50%",
          "&:hover": {
            bgcolor: N ? f : ne != null && ne.insideGroup ? "action.hover" : oe,
            borderRadius: "8px"
          },
          ...oo,
          ...O ? qe(N) : {}
        },
        children: [
          G,
          b ? /* @__PURE__ */ t(
            at,
            {
              text: W,
              variant: "caption",
              center: !0,
              fontSize: un
            }
          ) : null
        ]
      }
    );
    return b ? we ? /* @__PURE__ */ t("span", { children: Q }, u) : /* @__PURE__ */ t(d.Fragment, { children: Q }, u) : /* @__PURE__ */ t(
      ye,
      {
        title: W,
        placement: "right",
        arrow: !O,
        ...O ? St : {},
        children: we ? /* @__PURE__ */ t("span", { children: Q }) : Q
      },
      u
    );
  }, wo = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, qe = (u) => ({
    borderRadius: `${J}px`,
    "& .MuiSvgIcon-root": { fontSize: mo },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...u ? { bgcolor: "transparent" } : {},
    transition: `transform ${hn.duration}ms ${hn.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), St = {
    slotProps: {
      tooltip: { sx: lr(M, L) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, Ut = (u) => {
    var U;
    const W = Ye(u, r), G = mt("", u), N = ((U = ee.state) == null ? void 0 : U.key) === G;
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
          xe,
          {
            ...ee.triggerProps(G),
            "aria-label": u.text,
            "aria-haspopup": "menu",
            "aria-expanded": N,
            "data-testid": `sidebar-item-${u.text}`,
            "data-active": W ? "true" : "false",
            "data-open": N ? "true" : "false",
            [Pt]: "",
            sx: {
              position: "relative",
              width: _e,
              height: _e,
              color: W ? z : fe,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: W ? f : "transparent",
              ...qe(W),
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
              ...oo
            },
            children: u.icon
          }
        )
      },
      u.text
    );
  }, nt = (u) => {
    const W = Ye(u, r), G = Be(u, r), N = mt("", u), U = he(u, N), ne = /* @__PURE__ */ w(
      xe,
      {
        "aria-label": u.text,
        "aria-expanded": U,
        onClick: () => Oe(N, U),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": G ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: b ? 0.25 : 0,
          width: b ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...b ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: G ? z : fe,
          bgcolor: G ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": b ? { bgcolor: f, color: z } : {
            bgcolor: G ? f : "transparent"
          },
          ...oo
        },
        children: [
          b ? /* @__PURE__ */ t(
            C,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: fn
                }
              },
              children: u.icon
            }
          ) : u.icon,
          b ? /* @__PURE__ */ t(
            at,
            {
              text: u.text,
              variant: "caption",
              center: !0,
              fontSize: un
            }
          ) : null,
          /* @__PURE__ */ t(Gi, { open: U, size: Wi })
        ]
      }
    ), we = b ? ne : /* @__PURE__ */ t(ye, { title: u.text, placement: "right", arrow: !0, children: ne });
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
          bgcolor: W ? oe : "transparent",
          ...b ? {} : { "&:hover": { bgcolor: oe } }
        },
        children: [
          we,
          U ? sr(u.subitems, u.icon).map(
            ({ sub: Q, icon: $e }) => vt(
              Q.path,
              Q.text,
              $e,
              Be(Q, r),
              () => V(Q.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${Q.text}`
              }
            )
          ) : null
        ]
      },
      u.text
    );
  }, wt = (u) => /* @__PURE__ */ t(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: vt(
        u.text,
        u.subtitle ? `${u.text} · ${u.subtitle}` : u.text,
        u.icon,
        Be(u, r),
        u.path ? () => V(u.path) : void 0,
        { testId: `sidebar-item-${u.text}` }
      )
    },
    u.text
  ), Xt = (u) => gt(u) ? O ? Ut(u) : R ? nt(u) : Ht(u) : R ? wt(u) : He(u), Rt = (u) => /* @__PURE__ */ t(
    Ne,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: R ? "center" : "stretch"
      },
      children: u.map(Xt)
    }
  ), Kt = R ? S : T, dt = () => {
    var we, Q;
    const { state: u } = ee, W = u ? [...e, ...o].find(
      ($e) => gt($e) && mt("", $e) === u.key
    ) ?? null : null, G = W ? ((we = Se.current) == null ? void 0 : we.getBoundingClientRect().right) ?? S : S, N = W ? ((Q = Se.current) == null ? void 0 : Q.closest("[data-rail-surface]")) ?? Se.current : null, U = N == null ? void 0 : N.getBoundingClientRect(), ne = N && U ? {
      left: U.left,
      top: U.top,
      width: U.width,
      height: U.height,
      radius: parseFloat(
        getComputedStyle(N).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Ei,
      {
        group: W,
        groupKey: W ? u.key : null,
        anchor: W ? ee.getTrigger(u.key) : null,
        railEdge: G,
        railShape: ne,
        activePath: r,
        focusFirst: u == null ? void 0 : u.focusFirst,
        onNavigate: V,
        onClose: ee.close,
        panelProps: ee.flyoutProps,
        accentColor: f,
        activeForegroundColor: z,
        solidSurface: E ?? Te
      }
    );
  }, jt = l ? /* @__PURE__ */ t(
    C,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...O ? { pt: "12px", pb: "12px" } : {
          height: dn,
          minHeight: dn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: ke
      },
      children: i || c ? /* @__PURE__ */ t(
        ho,
        {
          logo: i,
          title: R ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: p,
          color: h ?? pe,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, Vt = !l && i ? /* @__PURE__ */ t(
    C,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: O ? ut : 1
      },
      children: /* @__PURE__ */ t(
        ho,
        {
          logo: i,
          appName: c || "App",
          onClick: a,
          menuOpen: p,
          color: h ?? pe,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, le = b ? 0.5 : O ? 0.75 : R ? 1 : 1.5;
  return /* @__PURE__ */ t(bt.Provider, { value: O, children: /* @__PURE__ */ w(
    C,
    {
      ref: Se,
      ...te.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": R ? "true" : "false",
      "data-labeled": b ? "true" : "false",
      sx: {
        width: Kt,
        minWidth: Kt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Te,
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
        ...O ? wo : {}
      },
      children: [
        te.lens,
        jt ?? Vt,
        K ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: le,
              pt: O ? 0 : 1,
              pb: O ? 0 : 1
            },
            children: K
          }
        ) : null,
        /* @__PURE__ */ t(
          C,
          {
            ref: F,
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
              ...O ? {
                // Chrome lets `scrollbar-width`/`-color` override
                // the ::-webkit-scrollbar rules, and its `thin` is
                // 11px — too wide for the 52px rail. So only
                // browsers without those rules (Firefox) get them;
                // Chrome and Safari draw the 6px bar below.
                "@supports not selector(::-webkit-scrollbar)": {
                  scrollbarWidth: "thin",
                  scrollbarColor: "transparent transparent",
                  "&:hover, &:has(:focus-visible)": {
                    scrollbarColor: (u) => `${u.palette.divider} transparent`
                  }
                }
              } : {
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
                "&:hover, &:has(:focus-visible)": {
                  scrollbarColor: (u) => `${u.palette.divider} transparent`
                }
              },
              // Safari only honours the thumb rule once the bar
              // itself is styled.
              "&::-webkit-scrollbar": {
                width: O ? co : 8
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: 4
              },
              "&:hover::-webkit-scrollbar-thumb, &:has(:focus-visible)::-webkit-scrollbar-thumb": {
                backgroundColor: (u) => u.palette.divider
              },
              // On the floating rail the bar (when it takes space at
              // all) stands in for the right padding, and the left
              // padding follows it, so the 40px column keeps equal
              // gaps in the capsule whether the bar is classic,
              // overlay or absent. (The inline collapsed rail keeps
              // its padding: its open groups tint the full row width.)
              ...O ? zi(X) : { px: le },
              pt: _ && !l ? `${_}px` : O ? ut : 1,
              pb: O ? ut : 2
            },
            children: /* @__PURE__ */ w(
              C,
              {
                ref: B,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  ae.glass,
                  Rt(e),
                  o.length > 0 ? /* @__PURE__ */ w(
                    C,
                    {
                      sx: { mt: "auto", pt: O ? ut : 2 },
                      children: [
                        j ? null : /* @__PURE__ */ t(
                          et,
                          {
                            sx: {
                              mb: O ? ut : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        Rt(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        j ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: le,
              pb: 1.5,
              ...O ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: mo
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              C,
              {
                sx: {
                  borderTop: `1px solid ${re}`,
                  pt: O ? ut : 1.5
                },
                children: j
              }
            )
          }
        ) : null,
        O ? dt() : null
      ]
    }
  ) });
}, jo = "var(--lumora-content-padding, 0px)", mn = `calc(${jo} * -1)`, Fc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: c
}) => /* @__PURE__ */ t(
  C,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: mn,
        mt: o ? mn : 0,
        // Space below it, like any other block on the page
        mb: jo,
        px: i ? jo : 0,
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
), Xi = ({ keys: e }) => /* @__PURE__ */ t(
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
), Ee = {
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
}, Ie = {
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
}, ft = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, ht = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, pt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Zn = bo(), Le = Zn.typography.pxToRem, br = (e) => {
  const o = e === "dark", r = [...Zn.shadows];
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
        contrastText: Ie[50]
      },
      warning: o ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      error: o ? { light: pt[400], main: pt[500], dark: pt[700] } : { light: pt[300], main: pt[400], dark: pt[800] },
      success: o ? { light: ft[400], main: ft[500], dark: ft[700] } : { light: ft[300], main: ft[400], dark: ft[800] },
      grey: Ie,
      divider: o ? ct(Ie[700], 0.6) : ct(Ie[300], 0.4),
      background: o ? { default: Ie[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Ie[400] } : { primary: Ie[800], secondary: Ie[600] },
      action: o ? {
        hover: ct(Ie[600], 0.2),
        selected: ct(Ie[600], 0.3)
      } : {
        hover: ct(Ie[200], 0.2),
        selected: ct(Ie[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Le(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Le(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Le(30), lineHeight: 1.2 },
      h4: { fontSize: Le(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Le(20), fontWeight: 600 },
      h6: { fontSize: Le(18), fontWeight: 600 },
      subtitle1: { fontSize: Le(18) },
      subtitle2: { fontSize: Le(14), fontWeight: 500 },
      body1: { fontSize: Le(14) },
      body2: { fontSize: Le(14), fontWeight: 400 },
      caption: { fontSize: Le(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Ki = 6, gn = (e, o) => typeof e == "object" ? e[o] : e, ko = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  showSidebar: i = !0,
  contentPadding: c = zn,
  sidebarBackgroundColor: a,
  contentBackgroundColor: p
}) => {
  const l = Mn(r.breakpoints.down("md")), m = e === "dark", g = Un({
    showSidebar: i,
    isMobile: l,
    sidebarVariant: n,
    sidebarSubmenu: s
  }), h = pr(s, n) ? {
    gutterPx: Nt,
    radiusPx: Gn
  } : void 0, f = ao, x = Xn(
    gn(a, e),
    m
  ), I = Kn(
    gn(p, e),
    m
  ), y = Hn(
    c,
    r
  ), v = /* @__PURE__ */ w(Go, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(Ke, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(q, { sx: { height: 8 } }),
    Array.from({ length: Ki }, (E, R) => /* @__PURE__ */ t(Ke, { variant: "rounded", width: 28, height: 28 }, R))
  ] });
  return /* @__PURE__ */ t(fo, { theme: o, children: /* @__PURE__ */ w(
    q,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: I
      },
      children: [
        l && /* @__PURE__ */ w(
          q,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: f,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: x,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(Ke, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(Ke, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(q, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(Ke, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !l && g > 0 && /* @__PURE__ */ t(
          q,
          {
            sx: {
              position: "relative",
              width: g,
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
                  width: g - 2 * h.gutterPx,
                  borderRadius: `${h.radiusPx}px`,
                  bgcolor: x
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: g,
                  bgcolor: x
                },
                children: v
              }
            )
          }
        ),
        /* @__PURE__ */ w(
          q,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              p: y,
              mt: l ? `${f}px` : 0
            },
            children: [
              /* @__PURE__ */ t(Ke, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(Ke, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(Go, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: l ? 2 : 4 }, (E, R) => /* @__PURE__ */ t(
                Ke,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                R
              )) }),
              /* @__PURE__ */ t(Ke, { variant: "rounded", height: 360 })
            ]
          }
        )
      ]
    }
  ) });
}, Vo = bo(br("light")), lo = bo(br("dark")), ji = (e) => e === "dark" ? lo : Vo, Vi = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = $n();
  if (!o) {
    const i = ji(e);
    return /* @__PURE__ */ w(fo, { theme: i, children: [
      /* @__PURE__ */ t(Bo, {}),
      /* @__PURE__ */ t(
        ko,
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
  return /* @__PURE__ */ w(fo, { theme: Vo, children: [
    /* @__PURE__ */ t(Bo, {}),
    /* @__PURE__ */ t(
      As,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: lo.palette.background.default,
            color: lo.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(q, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ t(
      ko,
      {
        themeMode: "light",
        muiTheme: Vo,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(q, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ t(
      ko,
      {
        themeMode: "dark",
        muiTheme: lo,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class Y extends Error {
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const se = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, ue = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Ve = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, qi = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ve.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Ve.REFRESH_TOKEN
      ), r = localStorage.getItem(Ve.USER);
      e && !localStorage.getItem(ue.ACCESS_TOKEN) && localStorage.setItem(ue.ACCESS_TOKEN, e), o && !localStorage.getItem(ue.REFRESH_TOKEN) && localStorage.setItem(
        ue.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(ue.USER) && localStorage.setItem(ue.USER, r), (e || o || r) && (localStorage.removeItem(Ve.ACCESS_TOKEN), localStorage.removeItem(Ve.REFRESH_TOKEN), localStorage.removeItem(Ve.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Fo = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        se.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      se.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      se.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Y(
      "Failed to access storage",
      se.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Wo = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        se.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      se.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      se.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Y(
      "Failed to write to storage",
      se.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Qn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Bt = () => {
  try {
    qi();
    const e = Fo(ue.ACCESS_TOKEN), o = Fo(ue.REFRESH_TOKEN), r = Fo(ue.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), Qn(ue.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Y ? e : new Y(
      "Failed to retrieve authentication tokens",
      se.UNKNOWN_ERROR,
      e
    );
  }
}, Yi = () => {
  try {
    const { accessToken: e, refreshToken: o } = Bt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Y(
        "No authentication tokens found",
        se.TOKEN_NOT_FOUND
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
        se.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Jn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Y(
        "At least one token must be provided",
        se.TOKEN_INVALID
      );
    return e && Wo(ue.ACCESS_TOKEN, e), o && Wo(ue.REFRESH_TOKEN, o), r && Wo(ue.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Y ? n : new Y(
        "Failed to store tokens",
        se.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Gt = () => {
  try {
    return [
      ue.ACCESS_TOKEN,
      ue.REFRESH_TOKEN,
      ue.USER,
      // Also clear legacy keys for complete cleanup
      Ve.ACCESS_TOKEN,
      Ve.REFRESH_TOKEN,
      Ve.USER
    ].map((n) => Qn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Y ? e : new Y(
        "Failed to clear tokens",
        se.LOGOUT_FAILED,
        e
      )
    };
  }
}, Zi = () => {
  try {
    const { user: e } = Bt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Y ? e : new Y(
        "Failed to retrieve user data",
        se.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Wc = (e) => {
  if (!(e instanceof Y))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case se.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case se.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case se.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case se.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case se.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case se.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, qo = (e, o = "Unknown") => {
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
}, Qi = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = jr.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, s = [];
  const i = (c, a) => {
    s.forEach(({ resolve: p, reject: l }) => {
      c ? l(c) : a && p(a);
    }), s = [];
  };
  return o.interceptors.request.use(
    (c) => {
      const { accessToken: a } = Bt();
      return a && c.headers && (c.headers.Authorization = `Bearer ${a}`), c;
    },
    (c) => Promise.reject(c)
  ), o.interceptors.response.use(
    (c) => c,
    async (c) => {
      var h;
      const a = c.config, p = (h = c.response) == null ? void 0 : h.status, l = (a == null ? void 0 : a.url) || "", m = l.includes("/auth/refresh");
      if (p !== 401 || a._retry || m)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: g } = Bt();
      if (!g) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return qo(f, "AxiosClient - Token Refresh"), Gt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((f, x) => {
          s.push({ resolve: f, reject: x });
        }).then((f) => {
          const {
            accessToken: x,
            refreshToken: I
          } = f;
          if (a.headers && (a.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const y = JSON.parse(
                  a.data || "{}"
                );
                y.refresh_token = I, a.data = JSON.stringify(y);
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
      r = !0, n = jr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: g
        }
      );
      try {
        const f = await n, { accessToken: x, refreshToken: I } = f.data;
        if (Jn(x, I, null), i(null, {
          accessToken: x,
          refreshToken: I
        }), a.headers && (a.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const y = JSON.parse(
                a.data || "{}"
              );
              y.refresh_token = I, a.data = JSON.stringify(y);
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
        return qo(
          f,
          "AxiosClient - Token Refresh Failed"
        ), i(f), Gt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Ji = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Bt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return Jn(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      qo(s, "TokenValidator - Refresh Failed");
    }
  return Gt(), o ? o() : window.location.href = "/login", !1;
}, Dt = ({ size: e = 20 }) => /* @__PURE__ */ w(
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
), xn = ve(mr), je = "#09C1AE", uo = (e, o) => ({
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
}), ea = (e) => ({
  ...uo(J, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${J - 2}px`,
    zIndex: 1,
    background: `${Wt(je, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), bn = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = gr(), p = d.useContext(bt), l = ze().palette.mode === "dark", m = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", g = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ w(
    rt,
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
        color: i,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${je}`,
          outlineOffset: 2
        },
        ...n && uo(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Dt, { size: 20 }),
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
        s && /* @__PURE__ */ t(Xi, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && p ? /* @__PURE__ */ t(ye, { title: m, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    xe,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: _e,
        height: _e,
        borderRadius: `${J}px`,
        ...Wt(je, l, "clear"),
        ...r && {
          boxShadow: `${Wt(je, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${xn.duration}ms ${xn.easing}, box-shadow 200ms ease`,
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
        ...n && ea(l)
      },
      children: /* @__PURE__ */ t(Dt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(ye, { title: m, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    xe,
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
        ...n && uo(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Dt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(ye, { title: m, placement: "left", children: /* @__PURE__ */ t(
    xe,
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
        ...n && uo(16, "background.paper")
      },
      children: /* @__PURE__ */ t(C, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Dt, { size: 26 }) })
    }
  ) });
}, so = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(Ms, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ w(Ls, { children: [
  /* @__PURE__ */ t(Ds, { fontSize: "small" }),
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
    Ln,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Ot = 24, ta = 720, oa = 1140, ra = 1250, na = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: s,
  sidebarWidthPx: i,
  bottomOffsetPx: c,
  fullScreen: a,
  fullScreenBottom: p = "0px",
  onClose: l
}) => {
  d.useEffect(() => {
    if (!e || !l)
      return;
    const x = (I) => {
      I.key === "Escape" && l();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [e, l]);
  const m = r === "docked", g = Ot + c;
  let h;
  a ? h = {
    top: 0,
    left: 0,
    right: 0,
    bottom: p,
    borderRadius: 0
  } : m ? h = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : h = {
    bottom: g,
    ...n === "left" ? { left: i + Ot } : { right: Ot },
    width: s,
    maxWidth: `calc(100vw - ${Ot * 2}px)`,
    height: `min(${ta}px, calc(100vh - ${g + Ot}px))`,
    borderRadius: "12px"
  };
  const f = /* @__PURE__ */ t(
    tr,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? oa : ra,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...h
      },
      children: o
    }
  );
  return m ? /* @__PURE__ */ t(ks, { direction: "left", in: e, mountOnEnter: !0, children: f }) : /* @__PURE__ */ t(
    Ns,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: f
    }
  );
}, sa = 180, yn = 250, ia = "#01584F", aa = ({
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
    ye,
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
}, es = (e, o, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : o, c = e ? ia : o;
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
}, ts = ({ link: e }) => /* @__PURE__ */ w(Ne, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    aa,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), os = (e, o, r) => r ? e : /* @__PURE__ */ t(ye, { title: o, placement: "right", arrow: !0, children: e }), ca = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: c
}) => {
  const a = ze(), [p, l] = d.useState(null), [m, g] = d.useState(!1), h = d.useRef(
    null
  ), f = d.useRef(null), x = d.useRef(null), I = d.useRef(!1), y = d.useRef(!1), v = d.useId(), E = () => {
    h.current && (clearTimeout(h.current), h.current = null);
  }, R = () => {
    E(), h.current = setTimeout(() => {
      g(!1), h.current = null;
    }, sa);
  }, T = () => {
    E(), g(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const P = (k) => {
      var M;
      k.key === "Escape" && (g(!1), (M = x.current) == null || M.focus());
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [m]), d.useEffect(() => {
    if (!m || !y.current)
      return;
    const P = globalThis.requestAnimationFrame(() => {
      var M;
      const k = (M = f.current) == null ? void 0 : M.querySelector(
        '[role="menuitem"]'
      );
      k == null || k.focus(), y.current = !1;
    });
    return () => cancelAnimationFrame(P);
  }, [m]);
  const S = Ye(e, o), { activeBg: b, sx: _ } = es(
    s,
    n,
    S,
    c
  ), K = /* @__PURE__ */ t(
    xe,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        I.current || T();
      },
      onBlur: (P) => {
        var M;
        const k = P.relatedTarget;
        k && ((M = f.current) != null && M.contains(k)) || R();
      },
      onKeyDown: (P) => {
        P.key === "ArrowDown" && (P.preventDefault(), y.current = !0, T());
      },
      onClick: (P) => {
        P.preventDefault(), P.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? v : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: _,
      children: c ? /* @__PURE__ */ t(ts, { link: e }) : e.icon
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
            ref: l,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              I.current = !0, T();
            },
            onMouseLeave: () => {
              I.current = !1, R();
            },
            children: os(K, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          er,
          {
            open: m && !!p,
            anchorEl: p,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (P) => P.zIndex.modal },
            children: /* @__PURE__ */ t(
              tr,
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
                  boxShadow: a.shadows[8],
                  maxWidth: yn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  or,
                  {
                    id: v,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: yn
                    },
                    children: j(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function j(P, k, M) {
    return P.flatMap((L) => {
      const O = mt(k, L);
      return gt(L) ? [
        /* @__PURE__ */ t(
          Fs,
          {
            disableSticky: !0,
            title: L.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + M * 1.5,
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
          O
        ),
        ...j(L.subitems, O, M + 1)
      ] : [
        /* @__PURE__ */ w(
          Je,
          {
            role: "menuitem",
            title: L.text,
            disabled: !L.path,
            selected: Be(L, o),
            onClick: (ee) => {
              ee.preventDefault(), L.path && (r == null || r(L.path)), g(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + M * 1.5,
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
                bgcolor: b,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: b
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              L.icon ? /* @__PURE__ */ t(be, { children: L.icon }) : null,
              /* @__PURE__ */ t(
                Ge,
                {
                  primary: L.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          O
        )
      ];
    });
  }
}, la = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = es(
    s,
    n,
    c,
    i
  );
  return os(
    /* @__PURE__ */ t(
      xe,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (p) => {
          p.preventDefault(), p.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: a,
        children: i ? /* @__PURE__ */ t(ts, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, da = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(et, { sx: { width: "60%", borderColor: "divider" } })
  }
), ua = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(et, { sx: { width: "60%", borderColor: "divider" } })
  }
), vn = (e, o) => e.map((r, n) => /* @__PURE__ */ w(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(da, {}) : null
] }, n)), fa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: c = !1
}) => {
  const a = (l, m) => gt(l) ? /* @__PURE__ */ t(
    ca,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: m,
      surfaceBackgroundColor: i,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    la,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: m,
      railShowTitles: c
    }
  ), p = c ? 1.25 : 1;
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
        gap: p
      },
      children: [
        vn(e, (l) => a(l, !1)),
        o.length > 0 ? /* @__PURE__ */ w(De, { children: [
          /* @__PURE__ */ t(ua, {}),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Ne, { gap: p, alignItems: "center", children: vn(
            o,
            (l) => a(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, ha = (e) => e ? Wn(e) : "USER", pa = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), Sn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Yo = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, yr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Ps,
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
    children: pa(e)
  }
), rs = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ w(De, { children: [
  /* @__PURE__ */ t(yr, { name: e, avatar: r, color: n }),
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
          ce,
          {
            variant: "body2",
            sx: { ...Sn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ce,
          {
            variant: "caption",
            sx: { ...Sn, opacity: 0.8, color: "inherit" },
            children: ha(o)
          }
        )
      ]
    }
  )
] }), wn = {
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
}, ns = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: s,
  showNotifications: i,
  notificationCount: c,
  onNotificationsClick: a,
  userName: p = "User",
  userRole: l,
  userAvatar: m,
  menuItems: g = [],
  showSettings: h,
  onSettingsClick: f,
  showThemeToggler: x,
  theme: I,
  onThemeToggle: y,
  onLogout: v
}) => {
  const E = (R) => () => {
    o(), R == null || R();
  };
  return /* @__PURE__ */ w(
    Bs,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: wn[r].anchor,
      transformOrigin: wn[r].transform,
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
              rs,
              {
                name: p,
                role: l,
                avatar: m,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(et, {}),
        i && /* @__PURE__ */ w(Je, { onClick: E(a), children: [
          /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(kn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Ge, { children: "Notifications" }),
          /* @__PURE__ */ t(Yo, { count: c })
        ] }),
        g.map((R) => /* @__PURE__ */ w(Je, { onClick: E(R.onClick), children: [
          R.icon && /* @__PURE__ */ t(be, { children: R.icon }),
          /* @__PURE__ */ t(Ge, { inset: !R.icon, children: R.label }),
          /* @__PURE__ */ t(Yo, { count: R.badge })
        ] }, R.key)),
        h && /* @__PURE__ */ w(Je, { onClick: E(f), children: [
          /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(Ws, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Ge, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(et, {}, "theme-divider"),
          /* @__PURE__ */ w(C, { sx: { px: 1.5, py: 1 }, children: [
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
              Gs,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: I,
                onChange: (R, T) => T && T !== I && (y == null ? void 0 : y()),
                disabled: !y,
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
                  /* @__PURE__ */ t(Vr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Vr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(et, {}),
        /* @__PURE__ */ w(
          Je,
          {
            onClick: E(v),
            sx: {
              color: I === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(be, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Nn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Ge, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, ss = 64, ma = 2, At = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: s,
  activeColor: i,
  activeBackground: c,
  ariaLabel: a,
  haspopup: p,
  isPage: l = !1,
  testId: m
}) => /* @__PURE__ */ w(
  rt,
  {
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": p,
    "aria-expanded": p ? n : void 0,
    "aria-current": l && n ? "page" : void 0,
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
), ga = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: i,
  assistantActive: c,
  showProfile: a,
  background: p,
  color: l,
  activeColor: m,
  activeBackground: g,
  pinnedLinks: h = [],
  activePath: f,
  onLinkClick: x,
  ...I
}) => {
  const y = h.filter((_) => _.path).slice(0, ma), [v, E] = d.useState(
    null
  ), { userName: R = "User", userAvatar: T, avatarColor: S } = I, b = { color: l, activeColor: m, activeBackground: g };
  return /* @__PURE__ */ w(
    tr,
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
        height: `calc(${ss}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: p,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          At,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Dn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...b
          }
        ),
        y.map((_) => /* @__PURE__ */ t(
          At,
          {
            label: _.text,
            icon: _.icon,
            onClick: () => x == null ? void 0 : x(_.path),
            active: Ye(_, f),
            isPage: !0,
            testId: `mobile-nav-link-${_.text}`,
            ...b
          },
          _.path
        )),
        s && /* @__PURE__ */ t(
          At,
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
                  borderColor: c ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(Dt, { size: 18 })
              }
            ),
            onClick: i,
            active: c,
            testId: "mobile-nav-nexa",
            ...b
          }
        ),
        r && /* @__PURE__ */ t(
          At,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(rr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...b
          }
        ),
        a && /* @__PURE__ */ w(De, { children: [
          /* @__PURE__ */ t(
            At,
            {
              label: "Account",
              ariaLabel: `Account menu for ${R}`,
              icon: /* @__PURE__ */ t(
                yr,
                {
                  name: R,
                  avatar: T,
                  color: S,
                  size: 26
                }
              ),
              onClick: (_) => E(_.currentTarget),
              active: !!v,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...b
            }
          ),
          /* @__PURE__ */ t(
            ns,
            {
              anchorEl: v,
              onClose: () => E(null),
              placement: "above-end",
              width: 280,
              ...I
            }
          )
        ] })
      ]
    }
  );
}, xa = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  zs,
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
      Ne,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(C, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Ln,
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
), ba = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: s,
  brandMenuOpen: i,
  background: c,
  color: a,
  brandColor: p = a,
  endContent: l
}) => /* @__PURE__ */ t(
  Hs,
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
    children: /* @__PURE__ */ w(Us, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        xe,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(Dn, {})
        }
      ),
      /* @__PURE__ */ t(
        ho,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: s,
          menuOpen: i,
          color: p,
          testId: "mobile-brand"
        }
      ),
      l ? /* @__PURE__ */ t(C, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: l }) : null
    ] })
  }
), vr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const c = gr(), a = d.useContext(bt), p = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    ye,
    {
      title: p,
      placement: s,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        xe,
        {
          onClick: o,
          "aria-label": p,
          "data-testid": i,
          sx: {
            ...a ? {
              width: _e,
              height: _e
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
            Fn,
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
              children: /* @__PURE__ */ t(kn, {})
            }
          )
        }
      )
    }
  );
}, is = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ya = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Rn = ve(Vn), En = ve(vo), In = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', va = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = ze().palette.mode === "dark", c = xt(), a = d.useRef(null), p = d.useRef(null), l = (h) => {
    var f;
    h !== e && (o == null || o()), (f = (h === "light" ? a : p).current) == null || f.focus();
  }, m = (h) => {
    if (!(h.key === "Tab" || h.key === "Escape"))
      switch (h.stopPropagation(), h.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          h.preventDefault(), l(e === "light" ? "dark" : "light");
          break;
        case "Home":
          h.preventDefault(), l("light");
          break;
        case "End":
          h.preventDefault(), l("dark");
          break;
      }
  }, g = (h, f, x, I) => {
    const y = e === h;
    return /* @__PURE__ */ t(
      rt,
      {
        ref: I,
        role: "radio",
        "aria-checked": y,
        "aria-label": f,
        tabIndex: y ? 0 : -1,
        onClick: () => l(h),
        "data-testid": `theme-segment-${h}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: s ? `${J}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: y ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: y ? n : "transparent",
          ...s && y ? fr(i, c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": y ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: i ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${ct(r, 0.6)}`
          },
          ...is
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 18 } })
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
        borderRadius: s ? `${J}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        g("light", "Light", Ks, a),
        g("dark", "Dark", Xs, p)
      ]
    }
  );
}, Sa = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: s,
  userName: i,
  userEmail: c,
  roleLabel: a,
  accentColor: p,
  tint: l,
  showThemeToggler: m,
  theme: g,
  onThemeToggle: h,
  onProfileClick: f,
  onLinkClick: x,
  menuItems: I = [],
  onLogout: y,
  glass: v = !1
}) => {
  const E = ze(), R = E.palette.mode === "dark", T = d.useRef(null), S = cr(E.palette.background.paper), b = xr({
    enabled: v,
    isDark: R,
    selector: In,
    radius: J
  }), [_, K] = d.useState(null);
  d.useEffect(() => {
    if (!_ || typeof ResizeObserver > "u")
      return;
    const L = new ResizeObserver(() => {
      var O;
      (O = T.current) == null || O.updatePosition();
    });
    return L.observe(_), () => L.disconnect();
  }, [_]);
  const j = (L) => {
    r(), L == null || L();
  }, P = (L) => {
    r(), L.onClick ? L.onClick() : L.path && (x == null || x(L.path));
  }, k = {
    borderRadius: v ? `${J}px` : "8px",
    py: 1,
    gap: 0.5
  }, M = /* @__PURE__ */ w(Ne, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    s(44),
    /* @__PURE__ */ w(C, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ce, { noWrap: !0, sx: { fontWeight: 600 }, children: i }),
      c ? /* @__PURE__ */ t(
        ce,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
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
      f ? /* @__PURE__ */ t(
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
            color: R ? "#ffffff" : p,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    nr,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: T,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...v ? {
        slots: { transition: Jo },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: K,
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
          "data-glass": v ? "true" : void 0,
          sx: v ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${J}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${In}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...ya, width: n, minWidth: n },
          children: [
            v ? /* @__PURE__ */ t(
              yt,
              {
                isDark: R,
                solid: S,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${dr} ${Rn.duration}ms ${Rn.easing} both`,
                  [Ce]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ w(
              C,
              {
                ...b.containerProps,
                sx: v ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${ur} ${En.duration}ms ${En.easing} 70ms both`,
                  [Ce]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  b.lens,
                  f ? /* @__PURE__ */ t(
                    rt,
                    {
                      onClick: () => j(f),
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
                        ...is
                      },
                      children: M
                    }
                  ) : /* @__PURE__ */ t(C, { "data-testid": "account-menu-header", children: M }),
                  /* @__PURE__ */ t(et, {}),
                  m ? /* @__PURE__ */ w(
                    C,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...k,
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
                        /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(js, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ce, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          va,
                          {
                            glass: v,
                            mode: g,
                            onToggle: h,
                            accentColor: p,
                            tint: l
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ w(
                    or,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        I.map((L) => /* @__PURE__ */ w(
                          Je,
                          {
                            onClick: () => P(L),
                            "data-testid": `menu-item-${L.key}`,
                            sx: k,
                            children: [
                              /* @__PURE__ */ t(be, { children: L.icon }),
                              /* @__PURE__ */ t(ce, { sx: { flex: 1 }, children: L.label }),
                              /* @__PURE__ */ t(Yo, { count: L.badge })
                            ]
                          },
                          L.key
                        )),
                        y ? /* @__PURE__ */ t(et, { component: "li", sx: { my: 0.5 } }) : null,
                        y ? /* @__PURE__ */ w(
                          Je,
                          {
                            onClick: () => j(y),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...k,
                              color: R ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(be, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Nn, { fontSize: "small" }) }),
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
}, wa = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ra = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: s,
  title: i,
  onBrandClick: c,
  brandMenuOpen: a,
  brandColor: p,
  headerBackgroundColor: l,
  headerForegroundColor: m,
  activeAccentColor: g = "#01584f",
  groupAccentColor: h,
  activeForegroundColor: f,
  foregroundColor: x,
  surfaceBackgroundColor: I,
  flyoutSurfaceColor: y,
  collapsed: v,
  expandedWidth: E,
  collapsedWidth: R,
  topContent: T,
  submenuMode: S,
  color: b,
  hoverColor: _,
  avatarColor: K,
  showProfile: j = !0,
  userName: P = "User",
  userEmail: k,
  userRole: M,
  userAvatar: L,
  showNotifications: O = !0,
  notificationCount: ee = 0,
  onNotificationsClick: Se,
  whatsNewCount: B = 0,
  onProfileClick: F,
  menuItems: X,
  onLogout: te,
  theme: ae = "light",
  showThemeToggler: A = !0,
  onThemeToggle: H
}) => {
  const Z = ze(), z = Z.palette.mode === "dark", D = I ?? (z ? Z.palette.background.paper : "#ffffff"), de = b ?? x ?? (z ? Z.palette.text.primary : g), oe = _ ?? h ?? Ft(g), Te = K ?? g, fe = d.useRef(null), [ke, pe] = d.useState(!1), re = M ? Wn(M) : void 0, V = (lt) => /* @__PURE__ */ t(
    yr,
    {
      name: P,
      avatar: L,
      color: Te,
      size: lt
    }
  ), Oe = ee + B, he = v && S === "flyout", Ae = O ? /* @__PURE__ */ t(
    vr,
    {
      count: Oe,
      onClick: Se,
      color: de,
      hoverColor: oe,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Fe = j ? /* @__PURE__ */ w(
    rt,
    {
      ref: fe,
      onClick: () => pe(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ke,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: v ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 40px button,
        // matching the rail's icon buttons
        p: he ? "2px" : 0.75,
        borderRadius: "10px",
        bgcolor: ke ? oe : "transparent",
        "&:hover": { bgcolor: oe },
        ...wa
      },
      children: [
        v && !he && O ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Fn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Oe,
              children: V(36)
            }
          )
        ) : V(v ? 36 : 40),
        v ? null : /* @__PURE__ */ w(C, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ce,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: de, lineHeight: 1.3 },
              children: P
            }
          ),
          re ? /* @__PURE__ */ t(
            ce,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: de,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: re
            }
          ) : null
        ] })
      ]
    }
  ) : null, He = !!Ae && (!v || he || !Fe);
  return /* @__PURE__ */ w(
    C,
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
          Ko,
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
            brandColor: p,
            headerBackgroundColor: l,
            headerForegroundColor: m,
            activeAccentColor: g,
            groupAccentColor: h,
            activeForegroundColor: f,
            foregroundColor: x,
            surfaceBackgroundColor: D,
            flyoutSurfaceColor: y,
            collapsed: v,
            expandedWidth: E,
            collapsedWidth: R,
            topContent: T,
            footer: Fe || He ? /* @__PURE__ */ w(
              Ne,
              {
                direction: he ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  he && He ? Ae : null,
                  Fe,
                  !he && He ? Ae : null
                ]
              }
            ) : void 0,
            submenuMode: S
          }
        ),
        j ? /* @__PURE__ */ t(
          Sa,
          {
            open: ke,
            anchorEl: fe.current,
            onClose: () => pe(!1),
            width: Math.max(E - 16, 240),
            renderAvatar: V,
            userName: P,
            userEmail: k,
            roleLabel: re,
            accentColor: g,
            tint: oe,
            showThemeToggler: A,
            theme: ae,
            onThemeToggle: H,
            onProfileClick: F,
            onLinkClick: n,
            menuItems: X,
            onLogout: te,
            glass: S === "flyout"
          }
        ) : null
      ]
    }
  );
}, _n = ve(Vn), Cn = ve(vo), Tn = 260, Ea = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Ia = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: c = !1
}) => {
  const a = ze(), p = a.palette.mode === "dark", l = !!e, m = cr(a.palette.background.paper), g = xr({
    enabled: c,
    isDark: p,
    selector: ".MuiMenuItem-root",
    radius: J
  }), h = /* @__PURE__ */ t(
    or,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((f) => {
        const x = f.key === n, I = f.accentColor ?? i;
        return /* @__PURE__ */ w(
          Je,
          {
            selected: x,
            onClick: () => s(f),
            "data-testid": `platform-item-${f.key}`,
            sx: {
              borderRadius: c ? `${J}px` : "8px",
              py: 1,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...c && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(be, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                C,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: I,
                    boxShadow: c ? `0 0 0 3px ${p ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Ge,
                {
                  primary: f.name,
                  secondary: f.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              x ? /* @__PURE__ */ t(
                Vs,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: I }
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
    nr,
    {
      open: l,
      anchorEl: e,
      onClose: o,
      onClick: (f) => f.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: Jo },
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
          "data-glass": c ? "true" : void 0,
          sx: c ? {
            position: "relative",
            minWidth: Tn,
            borderRadius: `${J}px`
          } : { ...Ea, minWidth: Tn },
          children: c ? /* @__PURE__ */ w(De, { children: [
            /* @__PURE__ */ t(
              yt,
              {
                isDark: p,
                solid: m,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${dr} ${_n.duration}ms ${_n.easing} both`,
                  [Ce]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ w(
              C,
              {
                ...g.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${ur} ${Cn.duration}ms ${Cn.easing} 70ms both`,
                  [Ce]: { animation: "none" }
                },
                children: [
                  g.lens,
                  h
                ]
              }
            )
          ] }) : h
        }
      )
    }
  );
}, _a = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), s = !!(o && n.current && o.contains(n.current));
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
          Ia,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, Ca = ({
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
    notificationCount: p,
    onNotificationsClick: l,
    userName: m = "User",
    userRole: g,
    userAvatar: h
  } = i, f = d.useRef(null), [x, I] = d.useState(
    null
  ), y = !!x, v = d.useRef(e);
  d.useEffect(() => {
    e && !v.current && I(null), v.current = e;
  }, [e]);
  const E = d.useContext(bt);
  if (!a && !n)
    return null;
  const R = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ w(De, { children: [
    /* @__PURE__ */ w(
      Ne,
      {
        ref: f,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            ye,
            {
              title: e ? m : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                rt,
                {
                  onClick: () => I(f.current),
                  "aria-label": `Account menu for ${m}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": y,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? E ? "2px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: y ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...R
                  },
                  children: /* @__PURE__ */ t(
                    rs,
                    {
                      name: m,
                      role: g,
                      avatar: h,
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
              count: p + s,
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
      ns,
      {
        anchorEl: x,
        onClose: () => I(null),
        placement: e ? "beside" : "above",
        width: e || (T = f.current) == null ? void 0 : T.clientWidth,
        ...i
      }
    )
  ] });
}, Ta = 120, Oa = 300, On = ve(jn), An = ve(vo), Aa = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, $a = 'input, textarea, [contenteditable="true"]', Zo = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector($a)) == null || o.focus();
}, Ma = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: s,
  color: i,
  hoverColor: c
}) => {
  const a = gr(), p = d.useContext(bt), l = d.useRef(null), [m, g] = d.useState(null);
  return d.useEffect(() => {
    o === "full" && n && (Zo(l.current), s == null || s());
  }, [o, n, s]), o === "full" ? /* @__PURE__ */ t(
    C,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && p ? /* @__PURE__ */ t(
    La,
    {
      search: e,
      color: i,
      railTooltip: a
    }
  ) : /* @__PURE__ */ w(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(ye, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          xe,
          {
            "aria-label": "Search",
            onClick: (h) => o === "expand" ? r == null ? void 0 : r() : g(h.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: i,
              borderRadius: "8px",
              "&:hover": { bgcolor: c }
            },
            children: /* @__PURE__ */ t(rr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          nr,
          {
            open: !!m,
            anchorEl: m,
            onClose: () => g(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (h) => Zo(h)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, La = ({ search: e, color: o, railTooltip: r }) => {
  const n = ze().palette.mode === "dark";
  ei(n, Ho(o, n ? 0.3 : 0.35));
  const s = `rgb(${xt()})`, i = cr(n ? "#1e2430" : "#ffffff"), c = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${J}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: s
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${J}px`,
      "&.Mui-focusVisible": { borderColor: s }
    }
  }, a = d.useRef(null), p = d.useRef(null), [l, m] = d.useState(!1), g = d.useRef(!1), h = d.useRef(void 0), f = d.useRef(void 0), x = () => {
    clearTimeout(h.current), clearTimeout(f.current);
  }, I = d.useCallback(() => {
    x(), g.current = !1, m(!1);
  }, []), y = () => {
    clearTimeout(f.current), l || (clearTimeout(h.current), h.current = setTimeout(
      () => m(!0),
      Ta
    ));
  }, v = () => {
    clearTimeout(h.current), clearTimeout(f.current), f.current = setTimeout(() => {
      !g.current && !Aa(p.current) && m(!1);
    }, Oa);
  };
  return d.useEffect(() => x, []), d.useEffect(() => {
    if (!l)
      return;
    const E = setTimeout(() => Zo(p.current)), R = (S) => {
      var _, K;
      const b = S.target;
      !((_ = p.current) != null && _.contains(b)) && !((K = a.current) != null && K.contains(b)) && I();
    }, T = (S) => {
      var b;
      S.key === "Escape" && (I(), (b = a.current) == null || b.focus());
    };
    return document.addEventListener("pointerdown", R), document.addEventListener("keydown", T), () => {
      clearTimeout(E), document.removeEventListener("pointerdown", R), document.removeEventListener("keydown", T);
    };
  }, [l, I]), /* @__PURE__ */ w(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          ye,
          {
            title: l ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              xe,
              {
                ref: a,
                "aria-label": "Search",
                "aria-expanded": l,
                onMouseEnter: y,
                onMouseLeave: v,
                onClick: () => {
                  x(), g.current = !0, m(!0);
                },
                sx: {
                  width: _e,
                  height: _e,
                  color: o,
                  borderRadius: `${J}px`
                },
                children: /* @__PURE__ */ t(
                  rr,
                  {
                    sx: { fontSize: mo }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          er,
          {
            open: l,
            anchorEl: a.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ w(
              C,
              {
                ref: p,
                "data-testid": "sidebar-search-card",
                onMouseEnter: y,
                onMouseLeave: v,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: `${J}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    yt,
                    {
                      isDark: n,
                      solid: i,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${dr} ${On.duration}ms ${On.easing} both`,
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
                        ...c,
                        animation: `${ur} ${An.duration}ms ${An.easing} 60ms both`,
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
}, Da = 100, Na = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = d.useState(!1), [i, c] = d.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const l = (g) => {
      r.current.has(g) || (a(), s(!1));
    }, m = () => {
      a(), s(!1);
    };
    return document.addEventListener("mouseover", l), document.documentElement.addEventListener("mouseleave", m), () => {
      a(), document.removeEventListener("mouseover", l), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), d.useEffect(() => {
    if (!i)
      return;
    const l = (m) => {
      var g;
      (g = e.current) != null && g.contains(m.target) || c(!1);
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
        }, Da));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (l) => {
        const m = l.relatedTarget;
        m && !l.currentTarget.contains(m) && c(!1);
      },
      onKeyDown: (l) => {
        l.key === "Escape" && c(!1);
      }
    }
  };
}, ka = 300, Po = 288, Fa = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Wa = 68, Pa = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Ba = typeof window > "u" ? io : Os, Pc = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: c = "rail",
  sidebarSubmenu: a = "expand",
  mobileNavigation: p = "bottom-bar",
  mobileBottomBarLinks: l,
  logo: m,
  onBrandClick: g,
  searchComponent: h,
  brandColor: f,
  contentPadding: x = zn,
  userMenuItems: I,
  sidebarBackgroundColor: y,
  sidebarHeaderBackgroundColor: v,
  groupAccentColor: E,
  activeSidebarForegroundColor: R,
  enableRefreshToken: T = !1,
  holdSessionSkeleton: S = !1,
  activePath: b,
  onLinkClick: _,
  showProfile: K = !0,
  userName: j,
  userRole: P,
  userAvatar: k,
  userEmail: M,
  onLogout: L,
  showSettings: O = !0,
  onSettingsClick: ee,
  onProfileClick: Se,
  showNotifications: B = !0,
  notificationCount: F = 0,
  NotificationSidebarContent: X,
  whatsNewCount: te = 0,
  onNotificationsClick: ae,
  platforms: A,
  currentPlatformKey: H,
  onPlatformSelect: Z,
  onVerify: z,
  alertProps: D,
  style: de,
  sidebarStyles: oe,
  contentStyles: Te,
  accentColor: fe,
  sidebarAccentColor: ke,
  sidebarForegroundColor: pe,
  contentBackgroundColor: re,
  theme: V = "light",
  darkModeSelector: Oe,
  showThemeToggler: he = !1,
  onThemeToggle: Ae,
  GlobalChatSidebar: Fe,
  useChatSidebar: He,
  chatPanelMode: Ht = "docked",
  chatPanelPosition: lt = "right",
  chatPanelWidth: vt = 420,
  onChatClose: wo,
  showAssistant: qe = !1,
  assistantPlacement: St = "sidebar",
  assistantShortcut: Ut = "j",
  onAssistantClick: nt,
  assistantActive: wt = !1,
  assistantBusy: Xt = !1,
  customNavbar: Rt,
  customNavbarProps: Kt,
  redirectToLogin: dt,
  apiBaseUrl: jt
}) => {
  const Vt = $n(), le = Mn(Vt.breakpoints.down("md")), qt = Ur(
    () => bo(br(V)),
    [V]
  ), u = V === "dark", W = fe ?? "#01584f", G = ke ?? W, N = Kn(
    typeof re == "object" ? re[V] : re,
    u
  ), U = c === "collapsible", ne = c === "panel", we = ne && s && !le, Q = c === "rail-labeled", $e = U || Q, Re = Xn(
    y,
    u
  ), Ro = v ?? Re, We = pe ?? (u ? "#ffffff" : G), Et = E ?? Ft(We), It = v ? zo(Ro) : We, Sr = ($) => /* @__PURE__ */ t(
    q,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: $,
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
  ), Yt = f ?? It, [wr, Eo] = it(
    null
  ), Io = ((A == null ? void 0 : A.length) ?? 0) > 1, as = Xr(() => Eo(null), []), cs = ($) => {
    Eo(null), Z ? Z($) : $.key !== H && $.url && window.location.assign($.url);
  }, Rr = ($) => Io ? /* @__PURE__ */ t(
    _a,
    {
      anchorEl: wr,
      onClose: as,
      platforms: A,
      currentKey: H,
      onSelect: cs,
      accentColor: W,
      glass: a === "flyout" && (U || ne) && !le,
      children: $
    }
  ) : $, Zt = Io ? ($) => Eo($.currentTarget) : g, Qt = Io ? !!wr : void 0, _o = Rr(
    m ?? Sr(Yt)
  ), ls = Rr(
    m ?? Sr(f ?? We)
  ), Co = Na(), Me = pr(a, c), Pe = Me || !Co.expanded, Er = Me ? "popover" : "expand", Ir = Me ? po : $t, _r = Me ? "transparent" : Re, Cr = Me && !v ? "transparent" : Ro, [ds, Tr] = it(!1), us = Xr(() => Tr(!1), []), Ue = Un({
    showSidebar: s,
    isMobile: le,
    sidebarVariant: c,
    sidebarSubmenu: a
  }), [Or, st] = it(!1), [Ar, To] = it(!1), ge = le && p === "bottom-bar", $r = `calc(${ss}px + env(safe-area-inset-bottom, 0px))`, [Oo, Mr] = it({ open: !1, tab: "notifications" }), Lr = () => Mr(($) => ({ ...$, open: !1 })), fs = B && !!X, [hs, ps] = it(!0), [ms, gs] = it(!1), Ao = He == null ? void 0 : He(), Dr = (Ao == null ? void 0 : Ao.isOpen) ?? !1, Nr = Ht === "floating" ? "floating" : "docked", xs = Nr === "docked" && Dr && Fe && !le ? vt : 0, Jt = No(z), kr = No(!1), Fr = Ur(
    () => Qi(jt),
    [jt]
  );
  io(() => {
    Jt.current = z;
  }, [z]);
  const $o = No(nt);
  $o.current = nt;
  const _t = qe && Ut ? Ut.toLowerCase() : null;
  io(() => {
    if (!_t)
      return;
    const $ = (ie) => {
      (ie.metaKey || ie.ctrlKey) && !ie.altKey && !ie.shiftKey && ie.key.toLowerCase() === _t && $o.current && (ie.preventDefault(), $o.current());
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [_t]);
  const Wr = ($) => {
    const ie = L($);
    ie instanceof Promise && ie.catch((Xe) => {
      console.error("Error in logout handler:", Xe);
    });
  };
  if (Ba(() => {
    (() => {
      var ie;
      try {
        const { isAuthenticated: Xe } = Yi();
        if (!Xe) {
          console.log("No session found, redirecting to login"), Gt(), dt();
          return;
        }
        if (!kr.current) {
          const { user: Tt, error: Do } = Zi();
          if (Tt && !Do) {
            const Is = {
              name: Tt.name || "",
              email: Tt.email || "",
              profilePicture: Tt.profilePicture || "",
              role: Tt.role || ""
            };
            kr.current = !0, (ie = Jt.current) == null || ie.call(Jt, Is);
          } else
            Do && console.error("Error getting user data:", Do);
        }
        gs(!0);
      } catch (Xe) {
        console.error("Error checking session:", Xe), Gt(), dt();
      } finally {
        ps(!1);
      }
    })();
  }, [dt]), io(() => {
    T && Ji(Fr, dt);
  }, [T, Fr]), hs || S)
    return /* @__PURE__ */ t(
      Vi,
      {
        theme: V,
        darkModeSelector: Oe,
        sidebarVariant: c,
        sidebarSubmenu: a,
        showSidebar: s,
        contentPadding: x,
        sidebarBackgroundColor: y,
        contentBackgroundColor: re
      }
    );
  if (!ms)
    return null;
  const Ct = h ?? (Rt ? /* @__PURE__ */ t(Rt, { ...Kt }) : null), bs = ($) => {
    st(!1), To(!1), Mr({ open: !0, tab: $ });
  }, Mo = X && (() => bs("notifications")), ys = F + te, Pr = {
    avatarColor: G,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: I == null ? void 0 : I.map(
      ($) => $.onClick || !$.path ? $ : { ...$, onClick: () => _ == null ? void 0 : _($.path) }
    ),
    showNotifications: B,
    notificationCount: F,
    whatsNewCount: te,
    onNotificationsClick: Mo,
    showProfile: K,
    userName: j,
    userRole: P,
    userAvatar: k,
    showSettings: O,
    onSettingsClick: ee,
    showThemeToggler: he,
    theme: V,
    onThemeToggle: Ae,
    onLogout: Wr
  }, Lo = ($) => /* @__PURE__ */ t(
    Ca,
    {
      ...Pr,
      compact: $,
      color: We,
      hoverColor: Et
    }
  ), Br = _t ? [Pa() ? "⌘" : "Ctrl", _t.toUpperCase()] : void 0, vs = ($) => qe && St === "sidebar" ? /* @__PURE__ */ t(
    bn,
    {
      variant: $ ? "sidebar-icon" : "sidebar",
      onClick: nt,
      active: wt,
      busy: Xt,
      shortcutKeys: Br,
      accentColor: We
    }
  ) : null, Ss = ($) => Ct ? /* @__PURE__ */ t(
    Ma,
    {
      search: Ct,
      mode: $,
      onExpand: () => {
        Co.pin(), Tr(!0);
      },
      autoFocus: ds,
      onAutoFocused: us,
      color: We,
      hoverColor: Et
    }
  ) : null, eo = ($) => {
    const ie = vs($ !== "full"), Xe = Ss($);
    return ie || Xe ? /* @__PURE__ */ w(
      Go,
      {
        spacing: Me ? `${hr}px` : 1.5,
        sx: { alignItems: $ === "full" ? "stretch" : "center" },
        children: [
          ie,
          Me && ie && Xe ? /* @__PURE__ */ t(
            q,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Ft(We)}`
              }
            }
          ) : null,
          Xe
        ]
      }
    ) : void 0;
  }, Gr = () => /* @__PURE__ */ t(
    Ko,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: b,
      onLinkClick: _,
      showHeaderBar: U,
      logo: _o,
      title: n,
      onBrandClick: Zt,
      brandMenuOpen: Qt,
      brandColor: Yt,
      headerBackgroundColor: U ? Cr : void 0,
      headerForegroundColor: U ? It : void 0,
      activeAccentColor: G,
      groupAccentColor: E,
      activeForegroundColor: R,
      foregroundColor: pe,
      surfaceBackgroundColor: _r,
      flyoutSurfaceColor: Re,
      collapsed: Q || Pe,
      showLabels: Q,
      expandedWidth: Po,
      collapsedWidth: Q ? Bn : Ir,
      topContent: eo(
        Q ? "popover" : Pe ? Er : "full"
      ),
      footer: Lo(Q || Pe),
      submenuMode: Me ? "flyout" : "inline"
    }
  ), zr = ($) => Me ? ws($) : Rs($), ws = ($) => /* @__PURE__ */ t(
    q,
    {
      component: "aside",
      sx: {
        width: Ue,
        minWidth: Ue,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: N
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
            top: Nt,
            bottom: Nt,
            left: Nt,
            width: po,
            borderRadius: `${Gn}px`,
            display: "flex",
            flexDirection: "column",
            ...oe
          },
          children: [
            /* @__PURE__ */ t(
              yt,
              {
                isDark: u,
                solid: Re,
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
                children: $
              }
            )
          ]
        }
      )
    }
  ), Rs = ($) => /* @__PURE__ */ t(
    q,
    {
      component: "aside",
      sx: {
        width: $t,
        minWidth: $t,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        q,
        {
          ...Me ? {} : Co.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Pe ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Pe ? $t : Po,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Re,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Pe ? "none" : `4px 0 24px rgba(0, 0, 0, ${u ? 0.5 : 0.12})`,
            transition: Fa,
            ...oe
          },
          children: $
        }
      )
    }
  ), Es = Hn(
    x,
    Vt
  );
  return /* @__PURE__ */ t(fo, { theme: qt, children: /* @__PURE__ */ t(Pn.Provider, { value: G, children: /* @__PURE__ */ t(zt.Provider, { value: Re, children: /* @__PURE__ */ w(
    q,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...de
      },
      children: [
        /* @__PURE__ */ t(Bo, {}),
        le && /* @__PURE__ */ t(
          ba,
          {
            height: ao,
            onMenuClick: s && !ge ? () => st(!0) : void 0,
            appName: n,
            logo: _o,
            onBrandClick: Zt,
            brandMenuOpen: Qt,
            background: Ro,
            color: It,
            brandColor: Yt,
            endContent: B ? /* @__PURE__ */ t(
              vr,
              {
                count: ys,
                onClick: Mo,
                color: It,
                hoverColor: Et,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !le && Q && /* @__PURE__ */ t(
          q,
          {
            component: "aside",
            sx: {
              width: Ue,
              minWidth: Ue,
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
              ...oe
            },
            children: Gr()
          }
        ),
        s && !le && U && zr(
          /* @__PURE__ */ w(De, { children: [
            Gr(),
            (D == null ? void 0 : D.show) && !Pe && /* @__PURE__ */ t(so, { ...D })
          ] })
        ),
        we && zr(
          /* @__PURE__ */ w(De, { children: [
            /* @__PURE__ */ t(
              Ra,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: b,
                onLinkClick: _,
                logo: _o,
                title: n,
                onBrandClick: Zt,
                brandMenuOpen: Qt,
                brandColor: Yt,
                headerBackgroundColor: Cr,
                headerForegroundColor: It,
                activeAccentColor: G,
                groupAccentColor: E,
                activeForegroundColor: R,
                foregroundColor: pe,
                surfaceBackgroundColor: _r,
                flyoutSurfaceColor: Re,
                collapsed: Pe,
                expandedWidth: Po,
                collapsedWidth: Ir,
                topContent: eo(
                  Pe ? Er : "full"
                ),
                submenuMode: Me ? "flyout" : "inline",
                color: We,
                hoverColor: Et,
                avatarColor: G,
                showProfile: K,
                userName: j,
                userEmail: M,
                userRole: P,
                userAvatar: k,
                showNotifications: B,
                notificationCount: F,
                onNotificationsClick: fs ? Mo : ae,
                whatsNewCount: te,
                onProfileClick: Se,
                menuItems: I,
                onLogout: Wr,
                theme: V,
                showThemeToggler: he,
                onThemeToggle: Ae
              }
            ),
            (D == null ? void 0 : D.show) && !Pe && /* @__PURE__ */ t(so, { ...D })
          ] })
        ),
        s && !le && !$e && !ne && /* @__PURE__ */ t(
          Kr,
          {
            variant: "permanent",
            sx: {
              width: Ue,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Ue,
                boxSizing: "border-box",
                bgcolor: N,
                borderRight: "none"
              },
              ...oe
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
                        ho,
                        {
                          logo: ls,
                          appName: n,
                          onClick: Zt,
                          menuOpen: Qt,
                          color: f ?? We,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  eo("popover"),
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
                          fa,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: b,
                            onLinkClick: _,
                            accentColor: G,
                            surfaceBackgroundColor: N,
                            railShowTitles: i
                          }
                        ),
                        (D == null ? void 0 : D.show) && /* @__PURE__ */ t(so, { ...D })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(q, { sx: { py: 1.5 }, children: Lo(!0) })
                ]
              }
            )
          }
        ),
        s && le && /* @__PURE__ */ w(
          $s,
          {
            anchor: ge ? "bottom" : "left",
            open: Or,
            onOpen: () => st(!0),
            onClose: () => st(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: ($) => $.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Re,
                  backgroundImage: "none",
                  ...ge ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              ge && // Grab handle: the sheet can be swiped down to close
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
                Ko,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: b,
                  onLinkClick: ($) => {
                    _ == null || _($), st(!1);
                  },
                  onLinkAction: () => st(!1),
                  collapsed: !1,
                  expandedWidth: ge ? "100%" : ka,
                  activeAccentColor: G,
                  groupAccentColor: E,
                  activeForegroundColor: R,
                  foregroundColor: pe,
                  surfaceBackgroundColor: Re,
                  topInsetPx: ge ? 8 : 0,
                  topContent: ge ? void 0 : eo("full"),
                  footer: ge ? void 0 : Lo(!1)
                }
              ),
              (D == null ? void 0 : D.show) && /* @__PURE__ */ t(so, { ...D })
            ]
          }
        ),
        ge && Ct && /* @__PURE__ */ t(
          xa,
          {
            open: Ar,
            onClose: () => To(!1),
            search: Ct
          }
        ),
        ge && /* @__PURE__ */ t(
          ga,
          {
            ...Pr,
            pinnedLinks: l,
            activePath: b,
            onLinkClick: _,
            onMenuClick: s ? () => st(!0) : void 0,
            menuOpen: Or,
            onSearchClick: Ct ? () => To(!0) : void 0,
            searchOpen: Ar,
            showAssistant: qe,
            onAssistantClick: nt,
            assistantActive: wt,
            showProfile: K,
            background: Re,
            color: We,
            activeColor: G,
            activeBackground: Et
          }
        ),
        /* @__PURE__ */ t(
          q,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Es,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": le ? `${ao}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ue ? `calc(100% - ${Ue}px)` : "100%",
              mt: le ? `${ao}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ge && {
                pb: `calc(var(--lumora-content-padding) + ${$r})`
              },
              backgroundColor: N,
              ...Te
            },
            children: e
          }
        ),
        Fe && /* @__PURE__ */ t(
          na,
          {
            open: Dr,
            variant: Nr,
            position: lt,
            width: vt,
            sidebarWidthPx: Ue,
            bottomOffsetPx: qe && St === "floating" ? Wa : 0,
            fullScreen: le,
            fullScreenBottom: ge ? $r : "0px",
            onClose: wo,
            children: /* @__PURE__ */ t(Fe, {})
          }
        ),
        qe && St === "floating" && !ge && /* @__PURE__ */ t(
          bn,
          {
            variant: "floating",
            rightOffsetPx: xs,
            shortcutKeys: Br,
            onClick: nt,
            active: wt,
            busy: Xt
          }
        ),
        B && X && /* @__PURE__ */ t(
          Kr,
          {
            anchor: "right",
            open: Oo.open,
            onClose: Lr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              X,
              {
                onClose: Lr,
                initialTab: Oo.tab
              },
              Oo.tab
            )
          }
        )
      ]
    }
  ) }) }) });
};
export {
  se as AUTH_ERROR_CODES,
  Y as AuthError,
  Ko as CollapsibleSidebar,
  Fc as FullBleedSection,
  Xi as Kbd,
  Vi as LumoraShellSkeleton,
  Pc as LumoraWrapper,
  Gt as clearAuthTokens,
  Pc as default,
  Wc as getAuthErrorMessage,
  Bt as getAuthTokens,
  Zi as getCurrentUser,
  br as getDesignTokens,
  Yi as isAuthenticated,
  qo as logAuthError,
  Jn as storeAuthTokens
};
