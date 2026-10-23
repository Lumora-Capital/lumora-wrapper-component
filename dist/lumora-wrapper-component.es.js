import { jsx as t, jsxs as R, Fragment as Oe } from "react/jsx-runtime";
import Cs from "@mui/icons-material/KeyboardArrowDownRounded";
import Os from "@mui/icons-material/KeyboardArrowUpRounded";
import As from "@mui/icons-material/ChevronRightRounded";
import C from "@mui/material/Box";
import Xr from "@mui/material/Collapse";
import ot from "@mui/material/Divider";
import xe from "@mui/material/IconButton";
import oo from "@mui/material/ListItemButton";
import be from "@mui/material/ListItemIcon";
import We from "@mui/material/ListItemText";
import Ae from "@mui/material/Stack";
import ve from "@mui/material/Tooltip";
import re from "@mui/material/Typography";
import { useTheme as Be, createTheme as vo, alpha as ke, ThemeProvider as mo } from "@mui/material/styles";
import * as d from "react";
import { useMemo as jr, useState as ct, useCallback as Vr, useRef as Wo, useEffect as lo, useLayoutEffect as $s } from "react";
import rt from "@mui/material/ButtonBase";
import { keyframes as or } from "@emotion/react";
import rr from "@mui/material/Fade";
import nr from "@mui/material/Popper";
import { useTheme as An, CssBaseline as Uo, GlobalStyles as Ms, Box as H, useMediaQuery as $n, Stack as Dt, Skeleton as _e, Drawer as Yr, SwipeableDrawer as Ds } from "@mui/material";
import qr from "axios";
import Ls from "@mui/material/Card";
import Ns from "@mui/material/CardContent";
import Mn from "@mui/material/Button";
import ks from "@mui/icons-material/AutoAwesomeRounded";
import Fs from "@mui/material/Grow";
import sr from "@mui/material/Paper";
import Ws from "@mui/material/Slide";
import Bs from "@mui/material/ListSubheader";
import tt from "@mui/material/MenuItem";
import ir from "@mui/material/MenuList";
import Dn from "@mui/icons-material/MenuRounded";
import ar from "@mui/icons-material/SearchRounded";
import Ln from "@mui/icons-material/LogoutRounded";
import Nn from "@mui/icons-material/NotificationsNoneOutlined";
import Ps from "@mui/icons-material/SettingsOutlined";
import zs from "@mui/material/Avatar";
import Gs from "@mui/material/Menu";
import Zr from "@mui/material/ToggleButton";
import Hs from "@mui/material/ToggleButtonGroup";
import Us from "@mui/material/Drawer";
import Ks from "@mui/material/AppBar";
import Xs from "@mui/material/Toolbar";
import kn from "@mui/material/Badge";
import js from "@mui/icons-material/DarkModeOutlined";
import Vs from "@mui/icons-material/LightModeOutlined";
import Ys from "@mui/icons-material/SettingsBrightnessOutlined";
import cr from "@mui/material/Popover";
import qs from "@mui/icons-material/CheckRounded";
const go = ({
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
  }, u = /* @__PURE__ */ R(Oe, { children: [
    o ? /* @__PURE__ */ t(
      re,
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
      children: u
    }
  ) : /* @__PURE__ */ t(Ae, { direction: "row", "data-testid": i, sx: a, children: u });
}, Ko = !1, bt = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, xt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, gt = (e, o) => e ? `${e}/${o.text}` : o.text, Qe = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Qe(n, o))) ?? !1 : !1;
}, Ne = (e, o) => !!(o && e.path === o), lr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return xt(r) ? lr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Xo = (e) => {
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
}, jo = (e, o) => {
  const r = yo(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, yo = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Fn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), dr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Zs = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Js = or`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ee = "@media (prefers-reduced-motion: reduce)", Y = 6, ur = "9, 193, 174", Wn = d.createContext(
  void 0
), So = d.createContext(
  void 0
), fr = (e) => d.useContext(So) ?? e, wo = () => {
  const e = d.useContext(Wn), o = e ? yo(e) : null;
  return o ? o.join(", ") : ur;
}, Qs = (e, o, r = ur) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${Zs(e)}, 0 0 0 1px ${dr(e)}`
}), ei = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", pr = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: dr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${Y}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), hr = or`
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
`, mr = or`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Bn = (e, o = ur, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), xo = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: jo(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${jo(e, 0.45)}`
}, ti = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${dr(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${Y}px`,
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
}, oi = 100, Pn = 80, uo = 56, Lt = 72, kt = 60, de = 44, Wt = 20, gr = 4, dt = 8, zn = Y, Gn = { xs: 2, md: "18px" }, Hn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, Eo = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), ri = (e, o, r) => e && Eo(o, r), Un = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || o ? 0 : r === "rail-labeled" ? Pn : Eo(n, r) ? s ? 0 : kt + 2 * dt : r === "collapsible" || r === "panel" ? Lt : oi, Kn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Xn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), jn = { stiffness: 320, damping: 24 }, Vn = { stiffness: 320, damping: 28 }, xr = { stiffness: 520, damping: 20 }, br = { stiffness: 380, damping: 36 }, Ro = { stiffness: 260, damping: 28 }, ni = "cubic-bezier(0.32, 1.28, 0.52, 1)", si = 420, Jr = 60, ii = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Qr = /* @__PURE__ */ new Map(), pe = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, s = Qr.get(n);
  if (s)
    return s;
  if (!ii)
    return { easing: ni, duration: si };
  const i = 1 / 600;
  let c = 0, a = 0, u = 0, l = 1 / Jr;
  const b = [0];
  for (; u < 3; ) {
    const m = (-e * (c - 1) - o * a) / r;
    if (a += m * i, c += a * i, u += i, u >= l && (b.push(c), l += 1 / Jr, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  b[b.length - 1] = 1;
  const h = {
    easing: `linear(${b.map((m) => Number(m.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return Qr.set(n, h), h;
}, Bt = (e) => !!(e && typeof e.animate == "function"), vt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, ai = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, ci = (e, o = 1.14) => {
  if (!Bt(e) || vt())
    return;
  const r = pe(xr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, Pt = "data-rail-item", Yn = `[${Pt}], button, [role="button"]`, yt = d.createContext(!1), vr = () => {
  const e = d.useContext(yt), o = Be(), r = d.useContext(So);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: pr(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, et = pe(br), yr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: c = null
}) => {
  const a = d.useRef(null), u = wo(), [l, b] = d.useState(null), h = d.useRef(null), m = d.useRef(null), p = (E, g) => {
    m.current = g;
    const v = g.getBoundingClientRect(), _ = E.getBoundingClientRect(), k = n ?? v.width, N = n ?? v.height, F = {
      top: Math.round(v.top - _.top + (v.height - N) / 2),
      left: Math.round(v.left - _.left + (v.width - k) / 2),
      width: Math.round(k),
      height: Math.round(N)
    };
    b(
      (O) => O && O.visible && O.top === F.top && O.left === F.left && O.width === F.width && O.height === F.height ? O : { ...F, visible: !0, instant: !(O != null && O.visible) }
    );
  }, x = (E, g) => {
    var _;
    const v = (_ = g == null ? void 0 : g.closest) == null ? void 0 : _.call(g, r);
    return v && E.contains(v) ? v : null;
  }, S = (E) => {
    if (!e)
      return;
    const g = x(E.currentTarget, E.target);
    g && p(E.currentTarget, g);
  }, T = (E) => {
    if (!e)
      return;
    const g = x(E.currentTarget, E.target);
    g && E.target.matches(":focus-visible") && p(E.currentTarget, g);
  }, w = () => {
    var v;
    const E = (v = a.current) == null ? void 0 : v.parentElement, g = i && (E == null ? void 0 : E.querySelector(i));
    return E && g ? { container: E, item: g } : null;
  }, y = () => {
    const E = w();
    if (E) {
      p(E.container, E.item);
      return;
    }
    m.current = null, b((g) => g != null && g.visible ? { ...g, visible: !1 } : g);
  };
  d.useEffect(() => {
    var g, v;
    if (!e)
      return;
    const E = w();
    E ? p(E.container, E.item) : (v = (g = a.current) == null ? void 0 : g.parentElement) != null && v.matches(":hover") || y();
  }, [e, c]);
  const I = (E) => {
    const g = E.relatedTarget;
    (!g || !E.currentTarget.contains(g)) && (E.currentTarget.matches(":hover") || y());
  };
  return d.useEffect(() => {
    const E = a.current;
    if (!(l != null && l.visible)) {
      h.current = null;
      return;
    }
    const g = h.current;
    if (h.current = l.top, !Bt(E) || vt())
      return;
    if (g === null || l.instant) {
      E.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: et.duration,
        easing: et.easing
      });
      return;
    }
    const v = Math.min(Math.abs(l.top - g) / 600, 0.08);
    v && E.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - v / 2} ${1 + v}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: et.duration, easing: "ease-out" }
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
          ...Bn(o, u),
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
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${et.duration}ms ${et.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
          [Ee]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: S,
      onMouseLeave: y,
      onFocus: T,
      onBlur: I,
      onScrollCapture: y
    } : {}
  };
}, li = (e, o, r = null) => {
  const n = yr({
    enabled: e,
    isDark: o,
    selector: Yn,
    // The rail's buttons exactly, so the hover sits on the item
    size: de,
    radius: Y,
    pinSelector: `[${Pt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, di = (e, o) => {
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
}, ui = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const s = d.useRef(null), [i, c] = d.useState(null), a = d.useRef(null), u = d.useCallback(
    (b) => {
      const h = n.current;
      if (!e || !h)
        return;
      const m = h.querySelector(
        `[${Pt}][data-active="true"]`
      );
      if (!m) {
        c(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const p = di(m, h);
      c(
        (x) => x && x.visible && x.top === p.top && x.left === p.left && x.width === p.width && x.height === p.height ? x : {
          ...p,
          visible: !0,
          instant: b || !(x != null && x.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    u(!1);
  }), d.useEffect(() => {
    const b = n.current;
    if (!e || !b)
      return;
    let h = 0;
    const m = () => {
      cancelAnimationFrame(h), h = requestAnimationFrame(() => u(!1));
    }, p = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    p == null || p.observe(b);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(m);
    return x == null || x.observe(b, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(h), p == null || p.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, u]), d.useEffect(() => {
    const b = s.current;
    if (!(i != null && i.visible)) {
      a.current = null;
      return;
    }
    const h = a.current;
    if (a.current = i.top, h === null || i.instant || !Bt(b) || vt())
      return;
    const m = Math.min(Math.abs(i.top - h) / 600, 0.08);
    m && b.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - m / 2} ${1 + m}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: et.duration, easing: "ease-out" }
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
        ...xo(r, o),
        borderRadius: `${Y}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: i.width,
        height: i.height,
        translate: `${i.left}px ${i.top}px`,
        scale: i.visible ? "1" : "0.7",
        opacity: i.visible ? 1 : 0,
        pointerEvents: "none",
        transition: i.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${et.duration}ms ${et.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Ee]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, fi = 1.6, en = 110, tn = 110, ro = pe(br), pi = (e) => e >= en ? 0 : (1 + Math.cos(Math.PI * e / en)) / 2, qn = (e, {
  enabled: o,
  axis: r,
  itemSelector: n,
  glyphSelector: s,
  transition: i,
  maxScale: c = fi,
  carrierSelector: a
}) => {
  const u = d.useRef(0), l = d.useRef(/* @__PURE__ */ new WeakMap()), b = d.useRef(/* @__PURE__ */ new Set()), h = d.useRef(/* @__PURE__ */ new Set()), m = i ? `, ${i}` : "", p = (g) => a ? g.closest(a) : null, x = (g) => {
    var k;
    const [v = "0", _ = "0"] = (((k = p(g)) == null ? void 0 : k.style.translate) ?? "").split(" ").filter(Boolean);
    return r === "x" ? parseFloat(v) || 0 : parseFloat(_) || 0;
  }, S = (g) => {
    const v = g.getBoundingClientRect();
    return (r === "x" ? v.left + v.width / 2 : v.top + v.height / 2) - x(g);
  }, T = (g) => {
    const v = g.getBoundingClientRect();
    return Array.from(g.querySelectorAll(n)).filter((_) => {
      const k = _.getBoundingClientRect(), N = S(_), F = r === "x" ? N : k.left + k.width / 2, O = r === "x" ? k.top + k.height / 2 : N;
      return k.width > 0 && F >= v.left && F <= v.right && O >= v.top && O <= v.bottom;
    }).map((_) => ({
      item: _,
      glyph: s ? _.querySelector(s) : _
    })).filter(
      (_) => _.glyph !== null
    );
  }, w = (g, v) => {
    if (v === g)
      return c;
    let _ = l.current.get(v);
    if (_ === void 0) {
      const N = Number(v.style.scale) || 1;
      _ = v.getBoundingClientRect().width / N, l.current.set(v, _);
    }
    const k = g.getBoundingClientRect().width;
    return _ > 0 ? Math.max(1, Math.min(k / _, c)) : 1;
  }, y = () => {
    cancelAnimationFrame(u.current), b.current.forEach((g) => {
      g.style.transition = `scale ${ro.duration}ms ${ro.easing}${m}`, g.style.scale = "";
    }), b.current.clear(), h.current.forEach((g) => {
      g.style.transition = `translate ${ro.duration}ms ${ro.easing}`, g.style.translate = "";
    }), h.current.clear();
  }, I = (g, v, _) => {
    const k = r === "x" ? v : _, N = T(g).map(({ item: F, glyph: O }) => {
      const $ = S(F), A = 1 + (w(F, O) - 1) * pi(Math.abs(k - $));
      O.style.transition = `scale ${tn}ms ease-out${m}`, A > 1.001 ? (O.style.scale = A.toFixed(3), b.current.add(O)) : b.current.has(O) && (O.style.scale = "", b.current.delete(O));
      const K = r === "x" ? F.offsetWidth : F.offsetHeight;
      return { item: F, centre: $, growth: (A - 1) * K };
    });
    a && N.forEach(({ item: F, centre: O, growth: $ }) => {
      const A = p(F);
      if (!A)
        return;
      const K = N.reduce(
        (ie, ue) => ue.centre < O ? ie + ue.growth : ie,
        $ / 2
      );
      A.style.transition = `translate ${tn}ms ease-out`, Math.abs(K) > 0.1 ? (A.style.translate = r === "x" ? `${K.toFixed(1)}px 0` : `0 ${K.toFixed(1)}px`, h.current.add(A)) : h.current.has(A) && (A.style.translate = "", h.current.delete(A));
    });
  }, M = (g) => {
    if (g.pointerType && g.pointerType !== "mouse" || vt())
      return;
    const v = g.currentTarget, { clientX: _, clientY: k } = g;
    cancelAnimationFrame(u.current), u.current = requestAnimationFrame(() => {
      const N = v.getBoundingClientRect(), F = r === "x" ? k : _, [O, $] = r === "x" ? [N.top, N.bottom] : [N.left, N.right];
      if (F < O || F > $) {
        y();
        return;
      }
      I(v, _, k);
    });
  }, E = (g) => {
    const v = e.current;
    if (!o || !v || vt())
      return;
    const _ = g.getBoundingClientRect();
    I(v, _.left + _.width / 2, _.top + _.height / 2);
  };
  return d.useEffect(() => {
    o || y();
  }, [o]), d.useEffect(() => () => cancelAnimationFrame(u.current), []), {
    containerProps: o ? { onPointerMove: M, onPointerLeave: y, onScrollCapture: y } : {},
    swellOn: E,
    settle: y
  };
}, Fe = 36, hi = 20, mi = Y, on = "[data-flyout-tile]", Vo = 4, no = 6, Zn = "background 160ms ease, color 160ms ease, transform 120ms ease", Yo = 10, gi = 18, xi = 1190, bi = 1195, rn = pe(jn), bo = pe(br), nn = pe(Ro), vi = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), c = e + r, a = o + n, u = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + i} ${o} H ${c - i} ${u} ${c} ${o + i} V ${a - i} ${u} ${c - i} ${a} H ${e + i} ${u} ${e} ${a - i} V ${o + i} ${u} ${e + i} ${o} Z')`;
}, yi = ({
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
  accentColor: b,
  activeForegroundColor: h,
  solidSurface: m
}) => {
  const p = Be(), x = p.palette.mode === "dark", S = !!(e && r), T = d.useRef(null);
  e && o && (T.current = { group: e, key: o });
  const w = T.current, y = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const B = r.getBoundingClientRect();
      return {
        x: n,
        y: B.top,
        left: n,
        right: n,
        top: B.top,
        bottom: B.bottom,
        width: 0,
        height: B.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), I = d.useRef(y);
  y && (I.current = y), d.useEffect(() => {
    r && ci(r);
  }, [r]);
  const [M, E] = d.useState(!1);
  d.useEffect(() => {
    if (!S) {
      E(!1);
      return;
    }
    let B = 0;
    const P = requestAnimationFrame(() => {
      B = requestAnimationFrame(() => E(!0));
    });
    return () => {
      cancelAnimationFrame(P), cancelAnimationFrame(B);
    };
  }, [S]);
  const g = d.useMemo(
    () => w ? lr(w.group.subitems, w.group.icon) : [],
    [w]
  ), v = d.useRef(null), _ = qn(v, {
    enabled: S,
    axis: "x",
    itemSelector: on,
    transition: Zn,
    // Grown as far as the rail's icons, so the neighbours make room
    carrierSelector: '[role="menuitem"]'
  }), k = d.useRef([]), [N, F] = d.useState([]);
  d.useLayoutEffect(() => {
    const B = () => {
      const J = g.map(
        (U, V) => {
          var fe;
          return ((fe = k.current[V]) == null ? void 0 : fe.offsetWidth) ?? 0;
        }
      );
      F(
        (U) => U.length === J.length && U.every((V, fe) => V === J[fe]) ? U : J
      );
    };
    if (B(), typeof ResizeObserver > "u")
      return;
    const P = new ResizeObserver(B);
    return k.current.slice(0, g.length).forEach((J) => J && P.observe(J)), () => P.disconnect();
  }, [g]);
  const O = wi(N, g.length), $ = d.useRef([]), A = g.findIndex(
    ({ sub: B }) => Ne(B, i)
  ), [K, ie] = d.useState(0);
  d.useEffect(() => {
    ie(Math.max(A, 0));
  }, [o]), d.useEffect(() => {
    if (!S || !c)
      return;
    const B = setTimeout(() => {
      var P;
      return (P = $.current[0]) == null ? void 0 : P.focus();
    });
    return () => clearTimeout(B);
  }, [S, c, o]);
  const ue = (B) => {
    var J;
    const P = Math.max(0, Math.min(B, g.length - 1));
    ie(P), (J = $.current[P]) == null || J.focus();
  }, Pe = (B, P) => {
    var J;
    switch (B.key) {
      case "ArrowRight":
        ue(P + 1);
        break;
      case "ArrowLeft":
        P === 0 ? u(!0) : ue(P - 1);
        break;
      case " ":
        (J = $.current[P]) == null || J.click();
        break;
      case "Home":
        ue(0);
        break;
      case "End":
        ue(g.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    B.preventDefault();
  }, Re = p.palette.text.primary, Ie = x ? p.palette.text.primary : b;
  return /* @__PURE__ */ R(Oe, { children: [
    /* @__PURE__ */ t(rr, { in: S, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      C,
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
          ...s ? { clipPath: vi(s) } : {},
          zIndex: xi,
          bgcolor: ei(x)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      nr,
      {
        open: S,
        anchorEl: y ?? I.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Both rows centred on the rail icon, a gap from the rail
          {
            name: "offset",
            options: { offset: [0, Yo] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: bi,
          transition: M ? `transform ${bo.duration}ms ${bo.easing}` : "none",
          [Ee]: { transition: "none" }
        },
        children: ({ TransitionProps: B }) => /* @__PURE__ */ t(
          Si,
          {
            in: (B == null ? void 0 : B.in) ?? S,
            onEnter: B == null ? void 0 : B.onEnter,
            onExited: B == null ? void 0 : B.onExited,
            panelProps: l,
            groupText: w == null ? void 0 : w.group.text,
            children: w ? /* @__PURE__ */ t(
              C,
              {
                ref: v,
                role: "menu",
                "aria-label": w.group.text,
                ..._.containerProps,
                onBlur: (P) => {
                  P.currentTarget.contains(
                    P.relatedTarget
                  ) || _.settle();
                },
                sx: {
                  position: "relative",
                  width: O.width,
                  height: Fe * 2 + Vo
                },
                children: g.map(({ sub: P, icon: J }, U) => /* @__PURE__ */ t(
                  Jn,
                  {
                    ref: (V) => {
                      $.current[U] = V;
                    },
                    nameRef: (V) => {
                      k.current[U] = V;
                    },
                    tileLeft: O.tiles[U],
                    nameLeft: O.names[U],
                    sub: P,
                    icon: J,
                    index: U,
                    active: Ne(
                      P,
                      i
                    ),
                    tabIndex: U === K ? 0 : -1,
                    onClick: (V) => {
                      bt(V) && (V.preventDefault(), a(P.path), u());
                    },
                    onKeyDown: (V) => Pe(V, U),
                    onFocus: (V) => {
                      ie(U);
                      const fe = V.currentTarget.querySelector(
                        on
                      );
                      fe && V.currentTarget.matches(
                        ":focus-visible"
                      ) && _.swellOn(fe);
                    },
                    accentColor: b,
                    activeForegroundColor: h,
                    labelColor: Re,
                    iconColor: Ie,
                    surface: m,
                    isDark: x
                  },
                  P.path
                ))
              },
              w.key
            ) : null
          }
        )
      }
    )
  ] });
}, Si = ({
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
    if (ai(u), e) {
      o == null || o(), Bt(u) && !vt() && u.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: nn.duration, easing: nn.easing }
      );
      return;
    }
    if (!Bt(u)) {
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
    C,
    {
      ref: a,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": s,
      sx: {
        position: "relative",
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -Yo - 2,
          width: Yo + 2
        }
      },
      children: i
    }
  );
}, wi = (e, o) => {
  const r = [], n = [];
  let s = -no, i = -no;
  for (let c = 0; c < o; c += 1) {
    const a = e[c] || Fe, u = c % 2 === 0, l = u ? Fe : a, b = u ? a : Fe, h = Math.max(
      s + no + l / 2,
      i + no + b / 2
    );
    s = h + l / 2, i = h + b / 2, r.push(Math.round(h - Fe / 2)), n.push(Math.round(h - a / 2));
  }
  return { tiles: r, names: n, width: Math.round(Math.max(s, i, 0)) };
}, Jn = d.forwardRef(
  ({
    nameRef: e,
    tileLeft: o,
    nameLeft: r,
    sub: n,
    icon: s,
    index: i,
    active: c,
    tabIndex: a,
    onClick: u,
    onKeyDown: l,
    onFocus: b,
    accentColor: h,
    activeForegroundColor: m,
    labelColor: p,
    iconColor: x,
    surface: S,
    isDark: T
  }, w) => {
    const y = i % 2 === 1, I = pr(T, S), M = {
      animation: `${Js} ${rn.duration}ms ${rn.easing} both`,
      animationDelay: `${i * gi}ms`,
      [Ee]: { animation: "none" }
    }, E = {
      background: h,
      color: m,
      "& .MuiSvgIcon-root": { color: m }
    }, g = {
      background: `color-mix(in srgb, ${h} ${T ? 20 : 12}%, ${S})`
    }, v = {
      "& [data-flyout-tile], & [data-flyout-name]": c ? {} : g
    }, _ = { ...I, border: "none" };
    return /* @__PURE__ */ R(
      rt,
      {
        ref: w,
        component: "a",
        href: n.path,
        role: "menuitem",
        tabIndex: a,
        "aria-current": c ? "page" : void 0,
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": c ? "true" : "false",
        onClick: u,
        onKeyDown: l,
        onFocus: b,
        disableRipple: !0,
        sx: {
          position: "absolute",
          inset: 0,
          display: "block",
          pointerEvents: "none",
          "& [data-flyout-tile], & [data-flyout-slot]": {
            position: "absolute",
            pointerEvents: "auto"
          },
          color: p,
          textDecoration: "none",
          "&:hover": v,
          "&.Mui-focusVisible": {
            ...v,
            "& [data-flyout-tile]": {
              ...c ? {} : g,
              outline: "2px solid",
              outlineColor: h,
              outlineOffset: 2
            }
          },
          "&:active [data-flyout-tile]": { transform: "scale(0.94)" },
          [Ee]: {
            "&:active [data-flyout-tile]": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(
            C,
            {
              "data-flyout-tile": "",
              sx: {
                ..._,
                left: o,
                top: y ? Fe + Vo : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: Fe,
                height: Fe,
                p: 0,
                borderRadius: `${mi}px`,
                // Grows out of the row, away from its name
                transformOrigin: y ? "center top" : "center bottom",
                transition: `scale ${bo.duration}ms ${bo.easing}, ${Zn}`,
                "& .MuiSvgIcon-root": {
                  fontSize: hi,
                  color: x,
                  transition: "color 160ms ease"
                },
                ...c ? E : {},
                ...M
              },
              children: s
            }
          ),
          /* @__PURE__ */ t(
            C,
            {
              "data-flyout-slot": "",
              sx: {
                left: r,
                top: y ? 0 : Fe + Vo,
                height: Fe,
                display: "flex",
                alignItems: "center"
              },
              children: /* @__PURE__ */ t(
                C,
                {
                  component: "span",
                  ref: e,
                  "data-flyout-name": "",
                  sx: {
                    ..._,
                    px: 1,
                    py: "3px",
                    fontSize: "0.75rem",
                    lineHeight: "18px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                    fontWeight: c ? 600 : 500,
                    ...c ? E : {},
                    transition: "background 160ms ease, color 160ms ease",
                    ...M
                  },
                  children: n.text
                }
              )
            }
          )
        ]
      }
    );
  }
);
Jn.displayName = "FlyoutTile";
const Ei = 50, Ri = 250, Ii = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const s = d.useRef(/* @__PURE__ */ new Map()), i = d.useRef(null), c = d.useRef(void 0), a = d.useRef(void 0), u = () => {
    clearTimeout(c.current), c.current = void 0;
  }, l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, b = (w, y, I = !1) => {
    u(), l(), r({ key: w, pinned: y, focusFirst: I });
  }, h = d.useCallback((w = !1) => {
    var I, M;
    u(), l();
    const y = (I = n.current) == null ? void 0 : I.key;
    r(null), w && y && ((M = s.current.get(y)) == null || M.focus());
  }, []), m = () => {
    u(), !(!n.current || n.current.pinned) && (l(), a.current = setTimeout(() => h(), Ri));
  };
  d.useEffect(() => {
    e || h();
  }, [e, h]), d.useEffect(
    () => () => {
      u(), l();
    },
    []
  );
  const p = o !== null;
  return d.useEffect(() => {
    if (!p)
      return;
    const w = (M) => {
      var g;
      const E = M;
      return E ? (g = i.current) != null && g.contains(E) ? !0 : [...s.current.values()].some((v) => v.contains(E)) : !1;
    }, y = (M) => {
      w(M.target) || h();
    }, I = (M) => {
      var E;
      M.key === "Escape" && h(
        !!((E = i.current) != null && E.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", y), document.addEventListener("keydown", I), () => {
      document.removeEventListener("pointerdown", y), document.removeEventListener("keydown", I);
    };
  }, [p, h]), {
    state: o,
    close: h,
    triggerProps: (w) => ({
      ref: (y) => {
        y ? s.current.set(w, y) : s.current.delete(w);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        l();
        const y = n.current;
        if (y) {
          y.key !== w && b(w, y.pinned);
          return;
        }
        u(), c.current = setTimeout(
          () => b(w, !1),
          Ei
        );
      },
      onMouseLeave: m,
      onClick: (y) => {
        if (y.detail === 0) {
          b(w, !0, !0);
          return;
        }
        const I = n.current;
        (I == null ? void 0 : I.key) === w && I.pinned ? h() : b(w, !0);
      },
      onKeyDown: (y) => {
        y.key === "ArrowRight" && (y.preventDefault(), b(w, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: l,
      onMouseLeave: m
    },
    onRailLeafEnter: () => {
      u(), n.current && !n.current.pinned && h();
    },
    getTrigger: (w) => s.current.get(w) ?? null
  };
}, Ti = 264, _i = 72, sn = 64, so = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ci = 16, Oi = 14, Ai = 4, $i = 2.5, an = "0.7rem", cn = 22, ln = pe(xr), lt = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
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
    const b = new ResizeObserver(() => u());
    return b.observe(l), () => b.disconnect();
  }, [u]), /* @__PURE__ */ t(
    ve,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !c,
      disableFocusListener: !c,
      disableTouchListener: !c,
      children: /* @__PURE__ */ t(
        re,
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
}, Mi = ({
  open: e,
  size: o = Ci
}) => e ? /* @__PURE__ */ t(Os, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Cs, { sx: { fontSize: o, opacity: 0.75 } }), dn = ({ open: e }) => /* @__PURE__ */ t(
  As,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), io = 600, ft = `${gr}px`, fo = (kt - de) / 2, Di = (e) => {
  const o = Math.max(0, e - fo);
  return {
    pl: `${Math.max(0, fo - o)}px`,
    pr: `${Math.max(0, fo - e)}px`
  };
};
function Li(e, o) {
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
const ao = 8;
function Ni(e, o, r) {
  d.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const s = (u) => {
      const l = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((p) => p.offsetHeight > 0).pop();
      if (!l)
        return;
      const b = n.getBoundingClientRect(), h = l.getBoundingClientRect();
      let m = 0;
      h.top < b.top + ao ? m = h.top - b.top - ao : h.bottom > b.bottom - ao && (m = h.bottom - b.bottom + ao), m !== 0 && n.scrollBy({ top: m, behavior: u });
    }, i = requestAnimationFrame(() => s("smooth")), c = window.setTimeout(() => s("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const qo = ({
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
  headerBackgroundColor: b,
  headerForegroundColor: h,
  brandColor: m,
  activeAccentColor: p = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: S,
  foregroundColor: T,
  surfaceBackgroundColor: w,
  flyoutSurfaceColor: y,
  collapsed: I = !1,
  expandedWidth: M = Ti,
  collapsedWidth: E = _i,
  showLabels: g = !1,
  topInsetPx: v = 0,
  topContent: _,
  footer: k,
  submenuMode: N = "inline"
}) => {
  var De;
  const F = Be(), O = F.palette.mode === "dark", $ = d.useContext(So), A = N === "flyout" && I && !g, K = Ii(A), ie = d.useRef(null), ue = d.useRef(null), Pe = d.useRef(null);
  Ni(Pe, r, I);
  const Re = Li(Pe, A), Ie = li(A, O, ((De = K.state) == null ? void 0 : De.key) ?? null), B = qn(ie, {
    enabled: A,
    axis: "y",
    itemSelector: Yn,
    // The glyph alone: a count badge keeps its size and place
    glyphSelector: ".MuiAvatar-root, .MuiSvgIcon-root"
  }), P = {
    ...Ie.containerProps,
    ...B.containerProps,
    ...A ? {
      onScrollCapture: () => {
        var f, D;
        (D = (f = Ie.containerProps).onScrollCapture) == null || D.call(f), B.settle();
      }
    } : {}
  }, J = ui({
    enabled: A,
    isDark: O,
    color: p,
    containerRef: ue
  }), { close: U } = K;
  d.useEffect(() => {
    U();
  }, [r, U]);
  const [V, fe] = d.useState(
    {}
  ), q = S ?? Xo(p), X = {
    bgcolor: p,
    color: q,
    "& .MuiListItemIcon-root": { color: q }
  }, St = {
    bgcolor: p,
    color: q,
    borderRadius: "8px"
  }, ae = x ?? Ft(p), ze = w ?? (O ? F.palette.background.paper : "#ffffff"), he = T ?? (O ? "text.primary" : p), Ye = b ?? ze, ye = h ?? (b ? Xo(Ye) : T ?? (O ? F.palette.text.primary : p)), Ge = Ft(ye), ne = (f) => {
    n == null || n(f);
  }, He = (f) => f ? {
    component: "a",
    href: f,
    onClick: (D) => {
      bt(D) && (D.preventDefault(), ne(f));
    }
  } : {}, $e = (f, D) => {
    fe((z) => ({ ...z, [f]: !D }));
  }, Me = (f, D) => V[D] ?? Qe(f, r), Ue = (f, D, z) => ({
    color: f ? q : he,
    bgcolor: f ? p : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? q : he,
      minWidth: z
    },
    "&:hover": f || g ? X : { bgcolor: D }
  }), qe = {
    "&.Mui-selected": {
      bgcolor: p
    },
    "&.Mui-selected:hover": X
  }, Io = (f) => {
    const D = Ne(f, r), z = /* @__PURE__ */ R(
      oo,
      {
        disabled: !f.path,
        selected: D,
        ...He(f.path),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": D ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...f.action && { pr: 6 },
          ...f.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...Ue(
            D,
            ae,
            f.subtitle ? 48 : 36
          ),
          ...qe
        },
        children: [
          /* @__PURE__ */ t(be, { children: f.icon }),
          /* @__PURE__ */ t(
            We,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                lt,
                {
                  text: f.text,
                  fontWeight: io
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ t(
                C,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    lt,
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
      return z;
    const { action: W } = f;
    return /* @__PURE__ */ R(C, { sx: { position: "relative" }, children: [
      z,
      /* @__PURE__ */ t(ve, { title: W.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        xe,
        {
          "aria-label": W.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            W.onClick(), s == null || s();
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
            borderColor: D ? "rgba(255, 255, 255, 0.35)" : ae,
            color: D ? q : he,
            "&:hover": {
              bgcolor: D ? "rgba(255, 255, 255, 0.15)" : ae
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: D ? q : he,
              outlineOffset: 1
            }
          },
          children: W.icon
        }
      ) })
    ] }, f.text);
  }, To = (f) => {
    const D = Qe(f, r), z = Ne(f, r), W = gt("", f), G = Me(f, W);
    return /* @__PURE__ */ R(
      C,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: D ? ae : "transparent"
        },
        children: [
          /* @__PURE__ */ R(
            oo,
            {
              onClick: () => $e(W, G),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": z ? "true" : "false",
              "aria-expanded": G,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Ue(z, ae, 36)
              },
              children: [
                /* @__PURE__ */ t(be, { children: f.icon }),
                /* @__PURE__ */ t(
                  We,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      lt,
                      {
                        text: f.text,
                        fontWeight: io
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(dn, { open: G })
              ]
            }
          ),
          /* @__PURE__ */ t(Xr, { in: G, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            C,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (te) => wt(te, W, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, wt = (f, D, z) => {
    const W = gt(D, f), G = Ai + (z - 1) * $i;
    if (xt(f)) {
      const oe = Qe(f, r), se = Ne(f, r), Q = Me(f, W);
      return /* @__PURE__ */ R(C, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ R(
          oo,
          {
            onClick: () => $e(W, Q),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": oe ? "true" : "false",
            "aria-expanded": Q,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: G,
              ...Ue(se, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(be, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                We,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    lt,
                    {
                      text: f.text,
                      fontWeight: io
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(dn, { open: Q })
            ]
          }
        ),
        /* @__PURE__ */ t(Xr, { in: Q, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(C, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (It) => wt(It, W, z + 1)
        ) }) })
      ] }, W);
    }
    const te = Ne(f, r);
    return /* @__PURE__ */ R(
      oo,
      {
        selected: te,
        disabled: !f.path,
        ...He(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": te ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: G,
          ...Ue(te, "action.hover", 32),
          ...qe
        },
        children: [
          f.icon ? /* @__PURE__ */ t(be, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            We,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                lt,
                {
                  text: f.text,
                  fontWeight: io
                }
              )
            }
          )
        ]
      },
      W
    );
  }, Ut = (f, D, z, W, G, te) => {
    const oe = !G, se = /* @__PURE__ */ R(
      xe,
      {
        "aria-label": D,
        disabled: oe,
        ...He(G),
        onMouseEnter: A ? K.onRailLeafEnter : void 0,
        ...A ? { [Pt]: "" } : {},
        "data-testid": (te == null ? void 0 : te.testId) ?? `sidebar-item-${D}`,
        "data-active": W ? "true" : "false",
        sx: g ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: W ? q : he,
          bgcolor: W ? p : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: cn
          },
          "&:hover": St,
          ...so
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: A ? de : 44,
          height: A ? de : 44,
          color: W ? q : he,
          bgcolor: W ? p : "transparent",
          borderRadius: W ? "8px" : "50%",
          "&:hover": {
            bgcolor: W ? p : te != null && te.insideGroup ? "action.hover" : ae,
            borderRadius: "8px"
          },
          ...so,
          ...A ? ut(W) : {}
        },
        children: [
          z,
          g ? /* @__PURE__ */ t(
            lt,
            {
              text: D,
              variant: "caption",
              center: !0,
              fontSize: an
            }
          ) : null
        ]
      }
    );
    return g ? oe ? /* @__PURE__ */ t("span", { children: se }, f) : /* @__PURE__ */ t(d.Fragment, { children: se }, f) : /* @__PURE__ */ t(
      ve,
      {
        title: D,
        placement: "right",
        arrow: !A,
        ...A ? Kt : {},
        children: oe ? /* @__PURE__ */ t("span", { children: se }) : se
      },
      f
    );
  }, nt = {
    position: "relative",
    '& :is(button, a, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, ut = (f) => ({
    borderRadius: `${Y}px`,
    "& .MuiSvgIcon-root": { fontSize: Wt },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${ln.duration}ms ${ln.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), Kt = {
    slotProps: {
      tooltip: { sx: pr(O, $) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, st = (f) => {
    var G;
    const D = Qe(f, r), z = gt("", f), W = ((G = K.state) == null ? void 0 : G.key) === z;
    return /* @__PURE__ */ t(
      C,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          xe,
          {
            ...K.triggerProps(z),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": W,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": D ? "true" : "false",
            "data-open": W ? "true" : "false",
            [Pt]: "",
            sx: {
              position: "relative",
              width: de,
              height: de,
              color: D ? q : he,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: D ? p : "transparent",
              ...ut(D),
              // The icon stays centred, in line with every other
              // icon down the rail; the arrow sits in the room
              // beside it
              "&::after": {
                content: '""',
                position: "absolute",
                right: 3,
                top: "50%",
                transform: "translateY(-50%)",
                borderStyle: "solid",
                borderWidth: "4px 0 4px 5px",
                borderColor: "transparent transparent transparent currentColor",
                opacity: 0.55
              },
              ...so
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, Et = (f) => {
    const D = Qe(f, r), z = Ne(f, r), W = gt("", f), G = Me(f, W), te = /* @__PURE__ */ R(
      xe,
      {
        "aria-label": f.text,
        "aria-expanded": G,
        onClick: () => $e(W, G),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": z ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: g ? 0.25 : 0,
          width: g ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...g ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: z ? q : he,
          bgcolor: z ? p : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": g ? { bgcolor: p, color: q } : {
            bgcolor: z ? p : "transparent"
          },
          ...so
        },
        children: [
          g ? /* @__PURE__ */ t(
            C,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: cn
                }
              },
              children: f.icon
            }
          ) : f.icon,
          g ? /* @__PURE__ */ t(
            lt,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: an
            }
          ) : null,
          /* @__PURE__ */ t(Mi, { open: G, size: Oi })
        ]
      }
    ), oe = g ? te : /* @__PURE__ */ t(ve, { title: f.text, placement: "right", arrow: !0, children: te });
    return /* @__PURE__ */ R(
      C,
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
          bgcolor: D ? ae : "transparent",
          ...g ? {} : { "&:hover": { bgcolor: ae } }
        },
        children: [
          oe,
          G ? lr(f.subitems, f.icon).map(
            ({ sub: se, icon: Q }) => Ut(
              se.path,
              se.text,
              Q,
              Ne(se, r),
              se.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${se.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, Xt = (f) => /* @__PURE__ */ t(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Ut(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        Ne(f, r),
        f.path,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), jt = (f) => xt(f) ? A ? st(f) : I ? Et(f) : To(f) : I ? Xt(f) : Io(f), Vt = (f) => /* @__PURE__ */ t(
    Ae,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: I ? "center" : "stretch"
      },
      children: f.map(jt)
    }
  ), it = I ? E : M, Yt = () => {
    var oe, se;
    const { state: f } = K, D = f ? [...e, ...o].find(
      (Q) => xt(Q) && gt("", Q) === f.key
    ) ?? null : null, z = D ? ((oe = ie.current) == null ? void 0 : oe.getBoundingClientRect().right) ?? E : E, W = D ? ((se = ie.current) == null ? void 0 : se.closest("[data-rail-surface]")) ?? ie.current : null, G = W == null ? void 0 : W.getBoundingClientRect(), te = W && G ? {
      left: G.left,
      top: G.top,
      width: G.width,
      height: G.height,
      radius: parseFloat(
        getComputedStyle(W).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      yi,
      {
        group: D,
        groupKey: D ? f.key : null,
        anchor: D ? K.getTrigger(f.key) : null,
        railEdge: z,
        railShape: te,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: ne,
        onClose: K.close,
        panelProps: K.flyoutProps,
        accentColor: p,
        activeForegroundColor: q,
        solidSurface: y ?? ze
      }
    );
  }, qt = l ? /* @__PURE__ */ t(
    C,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...A ? { pt: "12px", pb: "12px" } : {
          height: sn,
          minHeight: sn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: Ye
      },
      children: i || c ? /* @__PURE__ */ t(
        go,
        {
          logo: i,
          title: I ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: m ?? ye,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, ce = !l && i ? /* @__PURE__ */ t(
    C,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: A ? ft : 1
      },
      children: /* @__PURE__ */ t(
        go,
        {
          logo: i,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: m ?? ye,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, Rt = g ? 0.5 : A ? 0.75 : I ? 1 : 1.5;
  return /* @__PURE__ */ t(yt.Provider, { value: A, children: /* @__PURE__ */ R(
    C,
    {
      ref: ie,
      ...P,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": I ? "true" : "false",
      "data-labeled": g ? "true" : "false",
      sx: {
        width: it,
        minWidth: it,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: ze,
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
        ...A ? nt : {}
      },
      children: [
        Ie.lens,
        qt ?? ce,
        _ ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: Rt,
              pt: A ? 0 : 1,
              pb: A ? 0 : 1
            },
            children: _
          }
        ) : null,
        /* @__PURE__ */ t(
          C,
          {
            ref: Pe,
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
                width: A ? fo : 8
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
              ...A ? Di(Re) : { px: Rt },
              pt: v && !l ? `${v}px` : A ? ft : 1,
              pb: A ? ft : 2
            },
            children: /* @__PURE__ */ R(
              C,
              {
                ref: ue,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  J.glass,
                  Vt(e),
                  o.length > 0 ? /* @__PURE__ */ R(
                    C,
                    {
                      sx: { mt: "auto", pt: A ? ft : 2 },
                      children: [
                        k ? null : /* @__PURE__ */ t(
                          ot,
                          {
                            sx: {
                              mb: A ? ft : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        Vt(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        k ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: Rt,
              pb: 1.5,
              ...A ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: Wt
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              C,
              {
                sx: {
                  borderTop: `1px solid ${Ge}`,
                  pt: A ? ft : 1.5
                },
                children: k
              }
            )
          }
        ) : null,
        A ? Yt() : null
      ]
    }
  ) });
}, Zo = "var(--lumora-content-padding, 0px)", un = `calc(${Zo} * -1)`, Hc = ({
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
        mx: un,
        mt: o ? un : 0,
        // Space below it, like any other block on the page
        mb: Zo,
        px: i ? Zo : 0,
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
), ki = ({ keys: e }) => /* @__PURE__ */ t(
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
), Se = {
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
}, pt = {
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
}, mt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Qn = vo(), Ce = Qn.typography.pxToRem, Sr = (e) => {
  const o = e === "dark", r = [...Qn.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: o ? Se[300] : Se[200],
        main: Se[400],
        dark: Se[700],
        contrastText: Se[50]
      },
      info: o ? {
        light: Se[500],
        main: Se[700],
        dark: Se[900],
        contrastText: Se[300]
      } : {
        light: Se[100],
        main: Se[300],
        dark: Se[600],
        contrastText: we[50]
      },
      warning: o ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      error: o ? { light: mt[400], main: mt[500], dark: mt[700] } : { light: mt[300], main: mt[400], dark: mt[800] },
      success: o ? { light: pt[400], main: pt[500], dark: pt[700] } : { light: pt[300], main: pt[400], dark: pt[800] },
      grey: we,
      divider: o ? ke(we[700], 0.6) : ke(we[300], 0.4),
      background: o ? { default: we[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: we[400] } : { primary: we[800], secondary: we[600] },
      action: o ? {
        hover: ke(we[600], 0.2),
        selected: ke(we[600], 0.3)
      } : {
        hover: ke(we[200], 0.2),
        selected: ke(we[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Ce(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Ce(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Ce(30), lineHeight: 1.2 },
      h4: { fontSize: Ce(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Ce(20), fontWeight: 600 },
      h6: { fontSize: Ce(18), fontWeight: 600 },
      subtitle1: { fontSize: Ce(18) },
      subtitle2: { fontSize: Ce(14), fontWeight: 500 },
      body1: { fontSize: Ce(14) },
      body2: { fontSize: Ce(14), fontWeight: 400 },
      caption: { fontSize: Ce(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Fi = 6, Wi = 8, fn = (e, o) => typeof e == "object" ? e[o] : e, Bo = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: c = !0,
  contentPadding: a = Gn,
  sidebarBackgroundColor: u,
  contentBackgroundColor: l,
  content: b
}) => {
  const h = $n(r.breakpoints.down("md")), m = e === "dark", p = Un({
    showSidebar: c,
    isMobile: h,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), x = Eo(s, n) ? {
    gutterPx: dt,
    radiusPx: zn
  } : void 0, S = uo, T = Kn(
    fn(u, e),
    m
  ), w = Xn(
    fn(l, e),
    m
  ), y = Hn(a, r), I = x ? /* @__PURE__ */ R(Dt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t(_e, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Dt,
      {
        alignItems: "center",
        spacing: `${gr}px`,
        sx: { mt: 2 },
        children: Array.from({ length: Wi }, (M, E) => /* @__PURE__ */ t(
          H,
          {
            sx: {
              width: de,
              height: de,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ t(
              _e,
              {
                variant: "rounded",
                width: Wt,
                height: Wt
              }
            )
          },
          E
        ))
      }
    )
  ] }) : /* @__PURE__ */ R(Dt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(_e, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(H, { sx: { height: 8 } }),
    Array.from({ length: Fi }, (M, E) => /* @__PURE__ */ t(_e, { variant: "rounded", width: 28, height: 28 }, E))
  ] });
  return /* @__PURE__ */ t(mo, { theme: o, children: /* @__PURE__ */ R(
    H,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: w
      },
      children: [
        h && /* @__PURE__ */ R(
          H,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: S,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: T,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(_e, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(_e, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(H, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(_e, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !h && p > 0 && /* @__PURE__ */ t(
          H,
          {
            sx: {
              position: "relative",
              width: p,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              H,
              {
                sx: x ? {
                  position: "fixed",
                  top: x.gutterPx,
                  bottom: x.gutterPx,
                  left: x.gutterPx,
                  width: p - 2 * x.gutterPx,
                  borderRadius: `${x.radiusPx}px`,
                  bgcolor: T
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: p,
                  bgcolor: T
                },
                children: I
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          H,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              // The variables the wrapper's <main> sets, so a host's `content`
              // that sizes itself from them measures as it will in the app
              "--lumora-content-padding": y,
              "--lumora-sticky-top": h ? `${S}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: h ? `${S}px` : 0
            },
            children: b ?? /* @__PURE__ */ R(Oe, { children: [
              /* @__PURE__ */ t(_e, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(
                _e,
                {
                  variant: "text",
                  width: 320,
                  sx: { mb: 3 }
                }
              ),
              /* @__PURE__ */ t(Dt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from(
                { length: h ? 2 : 4 },
                (M, E) => /* @__PURE__ */ t(
                  _e,
                  {
                    variant: "rounded",
                    height: 96,
                    sx: { flex: 1 }
                  },
                  E
                )
              ) }),
              /* @__PURE__ */ t(_e, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, Jo = vo(Sr("light")), po = vo(Sr("dark")), Bi = (e) => e === "dark" ? po : Jo, Pi = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = An();
  if (!o) {
    const i = Bi(e);
    return /* @__PURE__ */ R(mo, { theme: i, children: [
      /* @__PURE__ */ t(Uo, {}),
      /* @__PURE__ */ t(
        Bo,
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
  return /* @__PURE__ */ R(mo, { theme: Jo, children: [
    /* @__PURE__ */ t(Uo, {}),
    /* @__PURE__ */ t(
      Ms,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: po.palette.background.default,
            color: po.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(H, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ t(
      Bo,
      {
        themeMode: "light",
        muiTheme: Jo,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(H, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Bo,
      {
        themeMode: "dark",
        muiTheme: po,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class j extends Error {
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const Z = {
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
}, Ve = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, zi = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ve.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Ve.REFRESH_TOKEN
      ), r = localStorage.getItem(Ve.USER);
      e && !localStorage.getItem(le.ACCESS_TOKEN) && localStorage.setItem(le.ACCESS_TOKEN, e), o && !localStorage.getItem(le.REFRESH_TOKEN) && localStorage.setItem(
        le.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(le.USER) && localStorage.setItem(le.USER, r), (e || o || r) && (localStorage.removeItem(Ve.ACCESS_TOKEN), localStorage.removeItem(Ve.REFRESH_TOKEN), localStorage.removeItem(Ve.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Po = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new j(
        "localStorage is not available",
        Z.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new j(
      "Storage quota exceeded. Please clear browser data.",
      Z.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new j(
      "Access to localStorage is denied. Please check browser settings.",
      Z.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new j(
      "Failed to access storage",
      Z.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, zo = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new j(
        "localStorage is not available",
        Z.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new j(
      "Storage quota exceeded. Please clear browser data.",
      Z.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new j(
      "Access to localStorage is denied. Please check browser settings.",
      Z.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new j(
      "Failed to write to storage",
      Z.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, es = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, zt = () => {
  try {
    zi();
    const e = Po(le.ACCESS_TOKEN), o = Po(le.REFRESH_TOKEN), r = Po(le.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), es(le.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof j ? e : new j(
      "Failed to retrieve authentication tokens",
      Z.UNKNOWN_ERROR,
      e
    );
  }
}, Gi = () => {
  try {
    const { accessToken: e, refreshToken: o } = zt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new j(
        "No authentication tokens found",
        Z.TOKEN_NOT_FOUND
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
        Z.UNKNOWN_ERROR,
        e
      )
    };
  }
}, ts = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new j(
        "At least one token must be provided",
        Z.TOKEN_INVALID
      );
    return e && zo(le.ACCESS_TOKEN, e), o && zo(le.REFRESH_TOKEN, o), r && zo(le.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof j ? n : new j(
        "Failed to store tokens",
        Z.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Gt = () => {
  try {
    return [
      le.ACCESS_TOKEN,
      le.REFRESH_TOKEN,
      le.USER,
      // Also clear legacy keys for complete cleanup
      Ve.ACCESS_TOKEN,
      Ve.REFRESH_TOKEN,
      Ve.USER
    ].map((n) => es(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof j ? e : new j(
        "Failed to clear tokens",
        Z.LOGOUT_FAILED,
        e
      )
    };
  }
}, Hi = () => {
  try {
    const { user: e } = zt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof j ? e : new j(
        "Failed to retrieve user data",
        Z.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Uc = (e) => {
  if (!(e instanceof j))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case Z.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case Z.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case Z.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case Z.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case Z.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case Z.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Qo = (e, o = "Unknown") => {
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
}, Ui = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = qr.create({
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
      const { accessToken: a } = zt();
      return a && c.headers && (c.headers.Authorization = `Bearer ${a}`), c;
    },
    (c) => Promise.reject(c)
  ), o.interceptors.response.use(
    (c) => c,
    async (c) => {
      var m;
      const a = c.config, u = (m = c.response) == null ? void 0 : m.status, l = (a == null ? void 0 : a.url) || "", b = l.includes("/auth/refresh");
      if (u !== 401 || a._retry || b)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: h } = zt();
      if (!h) {
        const p = new Error(
          "No refresh token available for token refresh"
        );
        return Qo(p, "AxiosClient - Token Refresh"), Gt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((p, x) => {
          s.push({ resolve: p, reject: x });
        }).then((p) => {
          const {
            accessToken: x,
            refreshToken: S
          } = p;
          if (a.headers && (a.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const T = JSON.parse(
                  a.data || "{}"
                );
                T.refresh_token = S, a.data = JSON.stringify(T);
              } else
                a.data && typeof a.data == "object" ? a.data.refresh_token = S : a.data = JSON.stringify({
                  refresh_token: S
                });
            } catch {
              a.data = JSON.stringify({
                refresh_token: S
              });
            }
          return o(a);
        }).catch((p) => Promise.reject(p));
      r = !0, n = qr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: h
        }
      );
      try {
        const p = await n, { accessToken: x, refreshToken: S } = p.data;
        if (ts(x, S, null), i(null, {
          accessToken: x,
          refreshToken: S
        }), a.headers && (a.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const T = JSON.parse(
                a.data || "{}"
              );
              T.refresh_token = S, a.data = JSON.stringify(T);
            } else
              a.data && typeof a.data == "object" ? a.data.refresh_token = S : a.data = JSON.stringify({
                refresh_token: S
              });
          } catch {
            a.data = JSON.stringify({
              refresh_token: S
            });
          }
        return o(a);
      } catch (p) {
        return Qo(
          p,
          "AxiosClient - Token Refresh Failed"
        ), i(p), Gt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(p);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Ki = async (e, o) => {
  const { accessToken: r, refreshToken: n } = zt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return ts(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      Qo(s, "TokenValidator - Refresh Failed");
    }
  return Gt(), o ? o() : window.location.href = "/login", !1;
}, Nt = ({ size: e = 20 }) => /* @__PURE__ */ R(
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
), pn = pe(xr), je = "#09C1AE", ho = (e, o) => ({
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
}), Xi = (e) => ({
  ...ho(Y, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${Y - 2}px`,
    zIndex: 1,
    background: `${xo(je, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), hn = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = vr(), u = d.useContext(yt), l = Be().palette.mode === "dark", b = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", h = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ R(
    rt,
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
        borderColor: r ? je : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: i,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${je}`,
          outlineOffset: 2
        },
        ...n && ho(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Nt, { size: 20 }),
        /* @__PURE__ */ t(
          re,
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
        s && /* @__PURE__ */ t(ki, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && u && Ko ? /* @__PURE__ */ t(ve, { title: b, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    xe,
    {
      ...h,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: de,
        height: de,
        borderRadius: `${Y}px`,
        ...xo(je, l, "clear"),
        ...r && {
          boxShadow: `${xo(je, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${pn.duration}ms ${pn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [Ee]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && Xi(l)
      },
      children: /* @__PURE__ */ t(Nt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(ve, { title: b, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    xe,
    {
      ...h,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": u || void 0,
      sx: {
        width: u ? de : 44,
        height: u ? de : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? je : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && ho(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Nt, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ t(ve, { title: b, placement: "left", children: /* @__PURE__ */ t(
    xe,
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
        outline: r ? `2px solid ${je}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${je}` },
        ...n && ho(16, "background.paper")
      },
      children: /* @__PURE__ */ t(C, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Nt, { size: 26 }) })
    }
  ) });
}, co = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(Ls, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ R(Ns, { children: [
  /* @__PURE__ */ t(ks, { fontSize: "small" }),
  /* @__PURE__ */ t(re, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    re,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    Mn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, $t = 24, ji = 720, Vi = 1140, Yi = 1250, qi = ({
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
  const b = d.useRef(!1);
  d.useEffect(() => {
    const S = requestAnimationFrame(() => {
      b.current = !0;
    });
    return () => cancelAnimationFrame(S);
  }, []), d.useEffect(() => {
    if (!e || !l)
      return;
    const S = (T) => {
      T.key === "Escape" && l();
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [e, l]);
  const h = r === "docked", m = $t + c;
  let p;
  a ? p = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : h ? p = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : p = {
    bottom: m,
    ...n === "left" ? { left: i + $t } : { right: $t },
    width: s,
    maxWidth: `calc(100vw - ${$t * 2}px)`,
    height: `min(${ji}px, calc(100vh - ${m + $t}px))`,
    borderRadius: "12px"
  };
  const x = /* @__PURE__ */ t(
    sr,
    {
      role: h ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: h ? Vi : Yi,
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
  return h ? /* @__PURE__ */ t(
    Ws,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...b.current ? {} : { timeout: { enter: 0 } },
      children: x
    }
  ) : /* @__PURE__ */ t(
    Fs,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: x
    }
  );
}, Zi = 180, mn = 250, Ji = "#01584F", Qi = ({
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
    ve,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        re,
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
}, os = (e, o, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : o, c = e ? Ji : o;
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
}, rs = ({ link: e }) => /* @__PURE__ */ R(Ae, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Qi,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), ns = (e, o, r) => r ? e : /* @__PURE__ */ t(ve, { title: o, placement: "right", arrow: !0, children: e }), ea = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: c
}) => {
  const a = Be(), [u, l] = d.useState(null), [b, h] = d.useState(!1), m = d.useRef(
    null
  ), p = d.useRef(null), x = d.useRef(null), S = d.useRef(!1), T = d.useRef(!1), w = d.useId(), y = () => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, I = () => {
    y(), m.current = setTimeout(() => {
      h(!1), m.current = null;
    }, Zi);
  }, M = () => {
    y(), h(!0);
  };
  d.useEffect(() => {
    if (!b)
      return;
    const N = (F) => {
      var O;
      F.key === "Escape" && (h(!1), (O = x.current) == null || O.focus());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [b]), d.useEffect(() => {
    if (!b || !T.current)
      return;
    const N = globalThis.requestAnimationFrame(() => {
      var O;
      const F = (O = p.current) == null ? void 0 : O.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), T.current = !1;
    });
    return () => cancelAnimationFrame(N);
  }, [b]);
  const E = Qe(e, o), { activeBg: g, sx: v } = os(
    s,
    n,
    E,
    c
  ), _ = /* @__PURE__ */ t(
    xe,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        S.current || M();
      },
      onBlur: (N) => {
        var O;
        const F = N.relatedTarget;
        F && ((O = p.current) != null && O.contains(F)) || I();
      },
      onKeyDown: (N) => {
        N.key === "ArrowDown" && (N.preventDefault(), T.current = !0, M());
      },
      onClick: (N) => {
        N.stopPropagation(), !(e.path && !bt(N)) && (N.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": b,
      "aria-controls": b ? w : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: v,
      children: c ? /* @__PURE__ */ t(rs, { link: e }) : e.icon
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
            ref: l,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              S.current = !0, M();
            },
            onMouseLeave: () => {
              S.current = !1, I();
            },
            children: ns(_, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          nr,
          {
            open: b && !!u,
            anchorEl: u,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (N) => N.zIndex.modal },
            children: /* @__PURE__ */ t(
              sr,
              {
                ref: p,
                elevation: 0,
                onMouseEnter: y,
                onMouseLeave: I,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: i,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: mn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  ir,
                  {
                    id: w,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: mn
                    },
                    children: k(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function k(N, F, O) {
    return N.flatMap(($) => {
      const A = gt(F, $);
      return xt($) ? [
        /* @__PURE__ */ t(
          Bs,
          {
            disableSticky: !0,
            title: $.text,
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
            children: $.text
          },
          A
        ),
        ...k($.subitems, A, O + 1)
      ] : [
        /* @__PURE__ */ R(
          tt,
          {
            role: "menuitem",
            title: $.text,
            disabled: !$.path,
            selected: Ne($, o),
            ...$.path && { component: "a", href: $.path },
            onClick: (K) => {
              $.path && !bt(K) || (K.preventDefault(), $.path && (r == null || r($.path)), h(!1));
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
                bgcolor: g,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: g
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              $.icon ? /* @__PURE__ */ t(be, { children: $.icon }) : null,
              /* @__PURE__ */ t(
                We,
                {
                  primary: $.text,
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
}, ta = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = os(
    s,
    n,
    c,
    i
  );
  return ns(
    /* @__PURE__ */ t(
      xe,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !bt(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: a,
        children: i ? /* @__PURE__ */ t(rs, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, oa = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), ra = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), gn = (e, o) => e.map((r, n) => /* @__PURE__ */ R(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(oa, {}) : null
] }, n)), na = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: c = !1
}) => {
  const a = (l, b) => xt(l) ? /* @__PURE__ */ t(
    ea,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: b,
      surfaceBackgroundColor: i,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    ta,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: b,
      railShowTitles: c
    }
  ), u = c ? 1.25 : 1;
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
        gap: u
      },
      children: [
        gn(e, (l) => a(l, !1)),
        o.length > 0 ? /* @__PURE__ */ R(Oe, { children: [
          /* @__PURE__ */ t(ra, {}),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Ae, { gap: u, alignItems: "center", children: gn(
            o,
            (l) => a(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, sa = (e) => e ? Fn(e) : "USER", ia = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), xn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, er = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, wr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  zs,
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
    children: ia(e)
  }
), ss = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ R(Oe, { children: [
  /* @__PURE__ */ t(wr, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ R(
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
          re,
          {
            variant: "body2",
            sx: { ...xn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          re,
          {
            variant: "caption",
            sx: { ...xn, opacity: 0.8, color: "inherit" },
            children: sa(o)
          }
        )
      ]
    }
  )
] }), bn = {
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
}, is = ({
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
  userAvatar: b,
  menuItems: h = [],
  showSettings: m,
  onSettingsClick: p,
  showThemeToggler: x,
  theme: S,
  onThemeToggle: T,
  onLogout: w
}) => {
  const y = (I) => () => {
    o(), I == null || I();
  };
  return /* @__PURE__ */ R(
    Gs,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: bn[r].anchor,
      transformOrigin: bn[r].transform,
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
              ss,
              {
                name: u,
                role: l,
                avatar: b,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(ot, {}),
        i && /* @__PURE__ */ R(tt, { onClick: y(a), children: [
          /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(Nn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(We, { children: "Notifications" }),
          /* @__PURE__ */ t(er, { count: c })
        ] }),
        h.map((I) => /* @__PURE__ */ R(tt, { onClick: y(I.onClick), children: [
          I.icon && /* @__PURE__ */ t(be, { children: I.icon }),
          /* @__PURE__ */ t(We, { inset: !I.icon, children: I.label }),
          /* @__PURE__ */ t(er, { count: I.badge })
        ] }, I.key)),
        m && /* @__PURE__ */ R(tt, { onClick: y(p), children: [
          /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(Ps, { fontSize: "small" }) }),
          /* @__PURE__ */ t(We, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(ot, {}, "theme-divider"),
          /* @__PURE__ */ R(C, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              re,
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
              Hs,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: S,
                onChange: (I, M) => M && M !== S && (T == null ? void 0 : T()),
                disabled: !T,
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
                  /* @__PURE__ */ t(Zr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Zr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(ot, {}),
        /* @__PURE__ */ R(
          tt,
          {
            onClick: y(w),
            sx: {
              color: S === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(be, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Ln, { fontSize: "small" }) }),
              /* @__PURE__ */ t(We, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, as = 64, aa = 2, Mt = ({
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
  href: b,
  testId: h
}) => /* @__PURE__ */ R(
  rt,
  {
    ...b && { component: "a", href: b },
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
        re,
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
), ca = ({
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
  activeColor: b,
  activeBackground: h,
  pinnedLinks: m = [],
  activePath: p,
  onLinkClick: x,
  ...S
}) => {
  const T = m.filter((v) => v.path).slice(0, aa), [w, y] = d.useState(
    null
  ), { userName: I = "User", userAvatar: M, avatarColor: E } = S, g = { color: l, activeColor: b, activeBackground: h };
  return /* @__PURE__ */ R(
    sr,
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
        height: `calc(${as}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: u,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Mt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Dn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...g
          }
        ),
        T.map((v) => /* @__PURE__ */ t(
          Mt,
          {
            label: v.text,
            icon: v.icon,
            href: v.path,
            onClick: (_) => {
              bt(_) && (_.preventDefault(), x == null || x(v.path));
            },
            active: Qe(v, p),
            isPage: !0,
            testId: `mobile-nav-link-${v.text}`,
            ...g
          },
          v.path
        )),
        s && /* @__PURE__ */ t(
          Mt,
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
                children: /* @__PURE__ */ t(Nt, { size: 18 })
              }
            ),
            onClick: i,
            active: c,
            testId: "mobile-nav-nexa",
            ...g
          }
        ),
        r && /* @__PURE__ */ t(
          Mt,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(ar, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...g
          }
        ),
        a && /* @__PURE__ */ R(Oe, { children: [
          /* @__PURE__ */ t(
            Mt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${I}`,
              icon: /* @__PURE__ */ t(
                wr,
                {
                  name: I,
                  avatar: M,
                  color: E,
                  size: 26
                }
              ),
              onClick: (v) => y(v.currentTarget),
              active: !!w,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...g
            }
          ),
          /* @__PURE__ */ t(
            is,
            {
              anchorEl: w,
              onClose: () => y(null),
              placement: "above-end",
              width: 280,
              ...S
            }
          )
        ] })
      ]
    }
  );
}, la = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Us,
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
            Mn,
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
), da = ({
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
  Ks,
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
    children: /* @__PURE__ */ R(Xs, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
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
        go,
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
      l ? /* @__PURE__ */ t(C, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: l }) : null
    ] })
  }
), Er = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const c = vr(), a = d.useContext(yt), u = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    ve,
    {
      title: u,
      placement: s,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        xe,
        {
          onClick: o,
          "aria-label": u,
          "data-testid": i,
          sx: {
            ...a ? {
              width: de,
              height: de
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
            kn,
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
              children: /* @__PURE__ */ t(Nn, {})
            }
          )
        }
      )
    }
  );
}, vn = 14, ua = 18, fa = "blur(12px) saturate(180%) brightness(1.04)", pa = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), ha = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, ma = 140, yn = 0.22, ga = 0.14, xa = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var p;
      const m = e.current;
      m && (m.style.setProperty("--lx", `${i.x.toFixed(1)}px`), m.style.setProperty("--ly", `${i.y.toFixed(1)}px`), m.style.setProperty("--li", i.i.toFixed(3)), (p = n.current) == null || p.call(n, i.x, i.y, i.i));
    }, u = () => {
      i.x += (s.x - i.x) * yn, i.y += (s.y - i.y) * yn, i.i += (s.i - i.i) * ga;
      const m = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      m && (i.x = s.x, i.y = s.y, i.i = s.i), a(), c = m ? 0 : requestAnimationFrame(u);
    }, l = () => {
      c || (c = requestAnimationFrame(u));
    }, b = (m) => {
      const p = e.current;
      if (m.pointerType === "touch" || !p)
        return;
      const x = p.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      s.x = (m.clientX - x.left) * p.offsetWidth / x.width, s.y = (m.clientY - x.top) * p.offsetHeight / x.height;
      const S = Math.max(
        x.left - m.clientX,
        0,
        m.clientX - x.right
      ), T = Math.max(
        x.top - m.clientY,
        0,
        m.clientY - x.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(S, T) / ma), i.i < 0.01 && (i.x = s.x, i.y = s.y), l();
    }, h = () => {
      s.i = 0, l();
    };
    return document.addEventListener("pointermove", b, { passive: !0 }), document.documentElement.addEventListener("mouseleave", h), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", b), document.documentElement.removeEventListener("mouseleave", h);
    };
  }, [e, o]);
}, Ht = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: c
  }, a) => {
    const u = d.useRef(null), l = s && Ko;
    xa(u, i && Ko, c);
    const b = wo(), h = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [m, p] = d.useState(null), x = d.useRef(null), S = d.useCallback(
      (y) => {
        var M;
        if (u.current = y, typeof a == "function" ? a(y) : a && (a.current = y), (M = x.current) == null || M.disconnect(), x.current = null, !y || !l || !pa || typeof ResizeObserver > "u")
          return;
        const I = () => {
          const E = y.offsetWidth, g = y.offsetHeight;
          p(
            (v) => (v == null ? void 0 : v.width) === E && v.height === g ? v : E && g ? { width: E, height: g } : null
          );
        };
        x.current = new ResizeObserver(I), x.current.observe(y), I();
      },
      [a, l]
    ), T = d.useMemo(
      () => m ? ha(m.width, m.height, vn) : null,
      [m]
    ), w = l && !!(T && m);
    return /* @__PURE__ */ R(Oe, { children: [
      w ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ R(
            "filter",
            {
              id: h,
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
                    href: T,
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
                    stdDeviation: vn / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: ua,
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
          ref: S,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": w ? "true" : void 0,
          sx: [
            Qs(e, o, b),
            w ? {
              backdropFilter: `url(#${h}) ${fa}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
Ht.displayName = "GlassLayer";
const cs = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ba = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Sn = pe(Vn), wn = pe(Ro), En = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', va = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = Be().palette.mode === "dark", c = wo(), a = d.useRef(null), u = d.useRef(null), l = (m) => {
    var p;
    m !== e && (o == null || o()), (p = (m === "light" ? a : u).current) == null || p.focus();
  }, b = (m) => {
    if (!(m.key === "Tab" || m.key === "Escape"))
      switch (m.stopPropagation(), m.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          m.preventDefault(), l(e === "light" ? "dark" : "light");
          break;
        case "Home":
          m.preventDefault(), l("light");
          break;
        case "End":
          m.preventDefault(), l("dark");
          break;
      }
  }, h = (m, p, x, S) => {
    const T = e === m;
    return /* @__PURE__ */ t(
      rt,
      {
        ref: S,
        role: "radio",
        "aria-checked": T,
        "aria-label": p,
        tabIndex: T ? 0 : -1,
        onClick: () => l(m),
        "data-testid": `theme-segment-${m}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${Y}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: T ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: T ? n : "transparent",
          ...s && T ? Bn(i, c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": T ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: i ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${ke(r, 0.6)}`
          },
          ...cs
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 16 } })
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
        borderRadius: s ? `${Y}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        h("light", "Light", Vs, a),
        h("dark", "Dark", js, u)
      ]
    }
  );
}, ya = ({
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
  showThemeToggler: b,
  theme: h,
  onThemeToggle: m,
  onProfileClick: p,
  onLinkClick: x,
  menuItems: S = [],
  onLogout: T,
  glass: w = !1
}) => {
  const y = Be(), I = y.palette.mode === "dark", M = d.useRef(null), E = fr(y.palette.background.paper), g = yr({
    enabled: w,
    isDark: I,
    selector: En,
    radius: Y
  }), [v, _] = d.useState(null);
  d.useEffect(() => {
    if (!v || typeof ResizeObserver > "u")
      return;
    const $ = new ResizeObserver(() => {
      var A;
      (A = M.current) == null || A.updatePosition();
    });
    return $.observe(v), () => $.disconnect();
  }, [v]);
  const k = ($) => {
    r(), $ == null || $();
  }, N = ($) => {
    r(), $.onClick ? $.onClick() : $.path && (x == null || x($.path));
  }, F = {
    borderRadius: w ? `${Y}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, O = /* @__PURE__ */ R(Ae, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ R(C, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(re, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: i }),
      c ? /* @__PURE__ */ t(
        re,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary", fontSize: 12, lineHeight: "18px" },
          children: c
        }
      ) : null,
      a ? /* @__PURE__ */ t(
        re,
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
      p ? /* @__PURE__ */ t(
        re,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: I ? "#ffffff" : u,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    cr,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: M,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...w ? {
        slots: { transition: rr },
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
      children: /* @__PURE__ */ R(
        C,
        {
          "data-testid": "account-menu",
          "data-glass": w ? "true" : void 0,
          sx: w ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${Y}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${En}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...ba, width: n, minWidth: n },
          children: [
            w ? /* @__PURE__ */ t(
              Ht,
              {
                isDark: I,
                solid: E,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${hr} ${Sn.duration}ms ${Sn.easing} both`,
                  [Ee]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ R(
              C,
              {
                ...g.containerProps,
                sx: w ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${mr} ${wn.duration}ms ${wn.easing} 70ms both`,
                  [Ee]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  g.lens,
                  p ? /* @__PURE__ */ t(
                    rt,
                    {
                      onClick: () => k(p),
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
                        ...cs
                      },
                      children: O
                    }
                  ) : /* @__PURE__ */ t(C, { "data-testid": "account-menu-header", children: O }),
                  /* @__PURE__ */ t(ot, {}),
                  b ? /* @__PURE__ */ R(
                    C,
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
                        /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(Ys, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(re, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          va,
                          {
                            glass: w,
                            mode: h,
                            onToggle: m,
                            accentColor: u,
                            tint: l
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ R(
                    ir,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: b ? 0 : 0.5, pb: 0.5 },
                      children: [
                        S.map(($) => /* @__PURE__ */ R(
                          tt,
                          {
                            onClick: () => N($),
                            "data-testid": `menu-item-${$.key}`,
                            sx: F,
                            children: [
                              /* @__PURE__ */ t(be, { children: $.icon }),
                              /* @__PURE__ */ t(re, { sx: { flex: 1 }, children: $.label }),
                              /* @__PURE__ */ t(er, { count: $.badge })
                            ]
                          },
                          $.key
                        )),
                        T ? /* @__PURE__ */ t(ot, { component: "li", sx: { my: 0.5 } }) : null,
                        T ? /* @__PURE__ */ R(
                          tt,
                          {
                            onClick: () => k(T),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...F,
                              color: I ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(be, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Ln, { fontSize: "small" }) }),
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
}, Sa = {
  "&:focus, &:focus-visible": { outline: "none" }
}, wa = ({
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
  headerForegroundColor: b,
  activeAccentColor: h = "#01584f",
  groupAccentColor: m,
  activeForegroundColor: p,
  foregroundColor: x,
  surfaceBackgroundColor: S,
  flyoutSurfaceColor: T,
  collapsed: w,
  expandedWidth: y,
  collapsedWidth: I,
  topContent: M,
  submenuMode: E,
  color: g,
  hoverColor: v,
  avatarColor: _,
  showProfile: k = !0,
  userName: N = "User",
  userEmail: F,
  userRole: O,
  userAvatar: $,
  showNotifications: A = !0,
  notificationCount: K = 0,
  onNotificationsClick: ie,
  whatsNewCount: ue = 0,
  onProfileClick: Pe,
  menuItems: Re,
  onLogout: Ie,
  theme: B = "light",
  showThemeToggler: P = !0,
  onThemeToggle: J
}) => {
  const U = Be(), V = U.palette.mode === "dark", fe = S ?? (V ? U.palette.background.paper : "#ffffff"), q = g ?? x ?? (V ? U.palette.text.primary : h), X = v ?? m ?? Ft(h), St = _ ?? h, ae = d.useRef(null), [ze, he] = d.useState(!1), Ye = O ? Fn(O) : void 0, ye = (qe) => /* @__PURE__ */ t(
    wr,
    {
      name: N,
      avatar: $,
      color: St,
      size: qe
    }
  ), Ge = K + ue, ne = w && E === "flyout", He = A ? /* @__PURE__ */ t(
    Er,
    {
      count: Ge,
      onClick: ie,
      color: q,
      hoverColor: X,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, $e = k ? /* @__PURE__ */ R(
    rt,
    {
      ref: ae,
      onClick: () => he(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ze,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: w ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        p: ne ? "4px" : 0.75,
        borderRadius: "10px",
        bgcolor: ze ? X : "transparent",
        "&:hover": { bgcolor: X },
        ...Sa
      },
      children: [
        w && !ne && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            kn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Ge,
              children: ye(36)
            }
          )
        ) : ye(w ? 36 : 40),
        w ? null : /* @__PURE__ */ R(C, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            re,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: q, lineHeight: 1.3 },
              children: N
            }
          ),
          Ye ? /* @__PURE__ */ t(
            re,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: q,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: Ye
            }
          ) : null
        ] })
      ]
    }
  ) : null, Me = !!He && (!w || ne || !$e);
  return /* @__PURE__ */ R(
    C,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": w ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          qo,
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
            headerForegroundColor: b,
            activeAccentColor: h,
            groupAccentColor: m,
            activeForegroundColor: p,
            foregroundColor: x,
            surfaceBackgroundColor: fe,
            flyoutSurfaceColor: T,
            collapsed: w,
            expandedWidth: y,
            collapsedWidth: I,
            topContent: M,
            footer: $e || Me ? /* @__PURE__ */ R(
              Ae,
              {
                direction: ne ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  ne && Me ? He : null,
                  $e,
                  !ne && Me ? He : null
                ]
              }
            ) : void 0,
            submenuMode: E
          }
        ),
        k ? /* @__PURE__ */ t(
          ya,
          {
            open: ze,
            anchorEl: ae.current,
            onClose: () => he(!1),
            width: Math.max(y - 16, 240),
            renderAvatar: ye,
            userName: N,
            userEmail: F,
            roleLabel: Ye,
            accentColor: h,
            tint: X,
            showThemeToggler: P,
            theme: B,
            onThemeToggle: J,
            onProfileClick: Pe,
            onLinkClick: n,
            menuItems: Re,
            onLogout: Ie,
            glass: E === "flyout"
          }
        ) : null
      ]
    }
  );
}, Rn = pe(Vn), In = pe(Ro), Tn = 240, Ea = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Ra = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: c = !1
}) => {
  const a = Be(), u = a.palette.mode === "dark", l = !!e, b = fr(a.palette.background.paper), h = yr({
    enabled: c,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: Y
  }), m = /* @__PURE__ */ t(
    ir,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((p) => {
        const x = p.key === n, S = p.accentColor ?? i;
        return /* @__PURE__ */ R(
          tt,
          {
            selected: x,
            onClick: () => s(p),
            "data-testid": `platform-item-${p.key}`,
            sx: {
              borderRadius: c ? `${Y}px` : "8px",
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
              /* @__PURE__ */ t(be, { sx: { minWidth: 24 }, children: /* @__PURE__ */ t(
                C,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: S,
                    boxShadow: c ? `0 0 0 3px ${u ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                We,
                {
                  primary: p.name,
                  secondary: p.description,
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
                qs,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: S }
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
    cr,
    {
      open: l,
      anchorEl: e,
      onClose: o,
      onClick: (p) => p.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: rr },
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
            borderRadius: `${Y}px`
          } : { ...Ea, minWidth: Tn },
          children: c ? /* @__PURE__ */ R(Oe, { children: [
            /* @__PURE__ */ t(
              Ht,
              {
                isDark: u,
                solid: b,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${hr} ${Rn.duration}ms ${Rn.easing} both`,
                  [Ee]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ R(
              C,
              {
                ...h.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${mr} ${In.duration}ms ${In.easing} 70ms both`,
                  [Ee]: { animation: "none" }
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
}, Ia = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), s = !!(o && n.current && o.contains(n.current));
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
          Ra,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, Ta = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var M;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: u,
    onNotificationsClick: l,
    userName: b = "User",
    userRole: h,
    userAvatar: m
  } = i, p = d.useRef(null), [x, S] = d.useState(
    null
  ), T = !!x, w = d.useRef(e);
  d.useEffect(() => {
    e && !w.current && S(null), w.current = e;
  }, [e]);
  const y = d.useContext(yt);
  if (!a && !n)
    return null;
  const I = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ R(Oe, { children: [
    /* @__PURE__ */ R(
      Ae,
      {
        ref: p,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            ve,
            {
              title: e ? b : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                rt,
                {
                  onClick: () => S(p.current),
                  "aria-label": `Account menu for ${b}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": T,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? y ? "4px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: T ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...I
                  },
                  children: /* @__PURE__ */ t(
                    ss,
                    {
                      name: b,
                      role: h,
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
            Er,
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
      is,
      {
        anchorEl: x,
        onClose: () => S(null),
        placement: e ? "beside" : "above",
        width: e || (M = p.current) == null ? void 0 : M.clientWidth,
        ...i
      }
    )
  ] });
}, _a = 120, Ca = 300, _n = pe(jn), Cn = pe(Ro), Oa = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Aa = 'input, textarea, [contenteditable="true"]', tr = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Aa)) == null || o.focus();
}, $a = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: s,
  color: i,
  hoverColor: c
}) => {
  const a = vr(), u = d.useContext(yt), l = d.useRef(null), [b, h] = d.useState(null);
  return d.useEffect(() => {
    o === "full" && n && (tr(l.current), s == null || s());
  }, [o, n, s]), o === "full" ? /* @__PURE__ */ t(
    C,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && u ? /* @__PURE__ */ t(
    Ma,
    {
      search: e,
      color: i,
      railTooltip: a
    }
  ) : /* @__PURE__ */ R(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(ve, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          xe,
          {
            "aria-label": "Search",
            onClick: (m) => o === "expand" ? r == null ? void 0 : r() : h(m.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: i,
              borderRadius: "8px",
              "&:hover": { bgcolor: c }
            },
            children: /* @__PURE__ */ t(ar, {})
          }
        ) }),
        /* @__PURE__ */ t(
          cr,
          {
            open: !!b,
            anchorEl: b,
            onClose: () => h(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (m) => tr(m)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, Ma = ({ search: e, color: o, railTooltip: r }) => {
  const n = Be().palette.mode === "dark";
  ti(n, jo(o, n ? 0.3 : 0.35));
  const s = `rgb(${wo()})`, i = fr(n ? "#1e2430" : "#ffffff"), c = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${Y}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: s
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${Y}px`,
      "&.Mui-focusVisible": { borderColor: s }
    }
  }, a = d.useRef(null), u = d.useRef(null), [l, b] = d.useState(!1), h = d.useRef(!1), m = d.useRef(void 0), p = d.useRef(void 0), x = () => {
    clearTimeout(m.current), clearTimeout(p.current);
  }, S = d.useCallback(() => {
    x(), h.current = !1, b(!1);
  }, []), T = () => {
    clearTimeout(p.current), l || (clearTimeout(m.current), m.current = setTimeout(
      () => b(!0),
      _a
    ));
  }, w = () => {
    clearTimeout(m.current), clearTimeout(p.current), p.current = setTimeout(() => {
      !h.current && !Oa(u.current) && b(!1);
    }, Ca);
  };
  return d.useEffect(() => x, []), d.useEffect(() => {
    if (!l)
      return;
    const y = setTimeout(() => tr(u.current)), I = (E) => {
      var v, _;
      const g = E.target;
      !((v = u.current) != null && v.contains(g)) && !((_ = a.current) != null && _.contains(g)) && S();
    }, M = (E) => {
      var g;
      E.key === "Escape" && (S(), (g = a.current) == null || g.focus());
    };
    return document.addEventListener("pointerdown", I), document.addEventListener("keydown", M), () => {
      clearTimeout(y), document.removeEventListener("pointerdown", I), document.removeEventListener("keydown", M);
    };
  }, [l, S]), /* @__PURE__ */ R(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          ve,
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
                onMouseEnter: T,
                onMouseLeave: w,
                onClick: () => {
                  x(), h.current = !0, b(!0);
                },
                sx: {
                  width: de,
                  height: de,
                  color: o,
                  borderRadius: `${Y}px`
                },
                children: /* @__PURE__ */ t(
                  ar,
                  {
                    sx: { fontSize: Wt }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          nr,
          {
            open: l,
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
                ref: u,
                "data-testid": "sidebar-search-card",
                onMouseEnter: T,
                onMouseLeave: w,
                sx: {
                  position: "relative",
                  width: 320,
                  p: 1,
                  borderRadius: `${Y}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    Ht,
                    {
                      isDark: n,
                      solid: i,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${hr} ${_n.duration}ms ${_n.easing} both`,
                        [Ee]: { animation: "none" }
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
                        animation: `${mr} ${Cn.duration}ms ${Cn.easing} 60ms both`,
                        [Ee]: { animation: "none" }
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
}, Da = 80, La = 300, Na = 32, ka = (e) => {
  const o = d.useRef(/* @__PURE__ */ new WeakSet()), r = d.useRef(void 0), n = d.useRef(void 0), [s, i] = d.useState(!1), [c, a] = d.useState(!1), [u, l] = d.useState(!1), b = d.useRef(null), h = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  d.useEffect(() => {
    if (!e) {
      h(), i(!1), a(!1), l(!1);
      return;
    }
    const x = (y) => {
      var M;
      if (y.pointerType !== "mouse")
        return;
      const I = y.clientX <= Na;
      I && ((M = b.current) == null || M.style.setProperty(
        "--edge-glow-y",
        `${y.clientY}px`
      )), l(I);
    }, S = () => l(!1), T = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), a(!1);
      }, La));
    }, w = (y) => {
      o.current.has(y) || T();
    };
    return document.addEventListener("mouseover", w), document.addEventListener("pointermove", x, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", T), document.documentElement.addEventListener("mouseleave", S), () => {
      h(), document.removeEventListener("mouseover", w), document.removeEventListener("pointermove", x), document.documentElement.removeEventListener(
        "mouseleave",
        T
      ), document.documentElement.removeEventListener(
        "mouseleave",
        S
      );
    };
  }, [e]);
  const m = {
    onMouseOver: (x) => {
      o.current.add(x.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, Da));
    },
    onFocus: (x) => {
      Fa(x.target) && a(!0);
    },
    onBlur: (x) => {
      const S = x.relatedTarget;
      (!S || !x.currentTarget.contains(S)) && a(!1);
    },
    onKeyDown: (x) => {
      x.key === "Escape" && (a(!1), i(!1));
    }
  }, p = e && (s || c);
  return {
    shown: p,
    nearEdge: e && u && !p,
    glowRef: b,
    rootProps: m
  };
}, Fa = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Wa = 100, Ba = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = d.useState(!1), [i, c] = d.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const l = (h) => {
      r.current.has(h) || (a(), s(!1));
    }, b = () => {
      a(), s(!1);
    };
    return document.addEventListener("mouseover", l), document.documentElement.addEventListener("mouseleave", b), () => {
      a(), document.removeEventListener("mouseover", l), document.documentElement.removeEventListener(
        "mouseleave",
        b
      );
    };
  }, []), d.useEffect(() => {
    if (!i)
      return;
    const l = (b) => {
      var h;
      (h = e.current) != null && h.contains(b.target) || c(!1);
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
        }, Wa));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (l) => {
        const b = l.relatedTarget;
        b && !l.currentTarget.contains(b) && c(!1);
      },
      onKeyDown: (l) => {
        l.key === "Escape" && c(!1);
      }
    }
  };
}, Pa = 300, Go = 288, za = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Ga = 6, On = 72, Ho = 90, Ha = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", Ua = 68, Ka = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Xa = typeof window > "u" ? lo : $s, Kc = ({
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
  mobileBottomBarLinks: b,
  logo: h,
  onBrandClick: m,
  searchComponent: p,
  brandColor: x,
  contentPadding: S = Gn,
  userMenuItems: T,
  sidebarBackgroundColor: w,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: I,
  activeSidebarForegroundColor: M,
  enableRefreshToken: E = !1,
  holdSessionSkeleton: g = !1,
  sessionSkeletonContent: v,
  activePath: _,
  onLinkClick: k,
  showProfile: N = !0,
  userName: F,
  userRole: O,
  userAvatar: $,
  userEmail: A,
  onLogout: K,
  showSettings: ie = !0,
  onSettingsClick: ue,
  onProfileClick: Pe,
  showNotifications: Re = !0,
  notificationCount: Ie = 0,
  NotificationSidebarContent: B,
  whatsNewCount: P = 0,
  onNotificationsClick: J,
  platforms: U,
  currentPlatformKey: V,
  onPlatformSelect: fe,
  onVerify: q,
  alertProps: X,
  style: St,
  sidebarStyles: ae,
  contentStyles: ze,
  accentColor: he,
  sidebarAccentColor: Ye,
  sidebarForegroundColor: ye,
  contentBackgroundColor: Ge,
  theme: ne = "light",
  darkModeSelector: He,
  showThemeToggler: $e = !1,
  onThemeToggle: Me,
  GlobalChatSidebar: Ue,
  useChatSidebar: qe,
  chatPanelMode: Io = "docked",
  chatPanelPosition: To = "right",
  chatPanelWidth: wt = 420,
  onChatClose: Ut,
  showAssistant: nt = !1,
  assistantPlacement: ut = "sidebar",
  assistantShortcut: Kt = "j",
  onAssistantClick: st,
  assistantActive: Et = !1,
  assistantBusy: Xt = !1,
  customNavbar: jt,
  customNavbarProps: Vt,
  redirectToLogin: it,
  apiBaseUrl: Yt
}) => {
  const qt = An(), ce = $n(qt.breakpoints.down("md")), Rt = jr(
    () => vo(Sr(ne)),
    [ne]
  ), De = ne === "dark", f = he ?? "#01584f", D = Ye ?? f, z = Xn(
    typeof Ge == "object" ? Ge[ne] : Ge,
    De
  ), W = c === "collapsible", G = c === "panel", te = G && s && !ce, oe = c === "rail-labeled", se = W || oe, Q = Kn(
    w,
    De
  ), It = y ?? Q, me = ye ?? (De ? "#ffffff" : D), Tt = I ?? Ft(me), _t = y ? Xo(It) : me, Rr = (L) => /* @__PURE__ */ t(
    H,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: L,
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
  ), Zt = x ?? _t, [Ir, _o] = ct(
    null
  ), Co = ((U == null ? void 0 : U.length) ?? 0) > 1, ls = Vr(() => _o(null), []), ds = (L) => {
    _o(null), fe ? fe(L) : L.key !== V && L.url && window.location.assign(L.url);
  }, Tr = (L) => Co ? /* @__PURE__ */ t(
    Ia,
    {
      anchorEl: Ir,
      onClose: ls,
      platforms: U,
      currentKey: V,
      onSelect: ds,
      accentColor: f,
      glass: a === "flyout" && (W || G) && !ce,
      children: L
    }
  ) : L, Jt = Co ? (L) => _o(L.currentTarget) : m, Qt = Co ? !!Ir : void 0, Oo = Tr(
    h ?? Rr(Zt)
  ), us = Tr(
    h ?? Rr(x ?? me)
  ), Ao = Ba(), Te = Eo(a, c), Le = Te || !Ao.expanded, Ze = s && !ce && ri(u, a, c), Je = ka(Ze), _r = Te ? "popover" : "expand", Cr = Te ? kt : Lt, Or = Te ? "transparent" : Q, Ar = Te && !y ? "transparent" : It, [fs, $r] = ct(!1), ps = Vr(() => $r(!1), []), Ke = Un({
    showSidebar: s,
    isMobile: ce,
    sidebarVariant: c,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [Mr, at] = ct(!1), [Dr, $o] = ct(!1), ge = ce && l === "bottom-bar", Lr = `calc(${as}px + env(safe-area-inset-bottom, 0px))`, [Mo, Nr] = ct({ open: !1, tab: "notifications" }), kr = () => Nr((L) => ({ ...L, open: !1 })), hs = Re && !!B, [ms, gs] = ct(!0), [xs, bs] = ct(!1), Do = qe == null ? void 0 : qe(), Fr = (Do == null ? void 0 : Do.isOpen) ?? !1, Wr = Io === "floating" ? "floating" : "docked", vs = Wr === "docked" && Fr && Ue && !ce ? wt : 0, eo = Wo(q), Br = Wo(!1), Pr = jr(
    () => Ui(Yt),
    [Yt]
  );
  lo(() => {
    eo.current = q;
  }, [q]);
  const Lo = Wo(st);
  Lo.current = st;
  const Ct = nt && Kt ? Kt.toLowerCase() : null;
  lo(() => {
    if (!Ct)
      return;
    const L = (ee) => {
      (ee.metaKey || ee.ctrlKey) && !ee.altKey && !ee.shiftKey && ee.key.toLowerCase() === Ct && Lo.current && (ee.preventDefault(), Lo.current());
    };
    return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
  }, [Ct]);
  const zr = (L) => {
    const ee = K(L);
    ee instanceof Promise && ee.catch((Xe) => {
      console.error("Error in logout handler:", Xe);
    });
  };
  if (Xa(() => {
    (() => {
      var ee;
      try {
        const { isAuthenticated: Xe } = Gi();
        if (!Xe) {
          console.log("No session found, redirecting to login"), Gt(), it();
          return;
        }
        if (!Br.current) {
          const { user: At, error: Fo } = Hi();
          if (At && !Fo) {
            const _s = {
              name: At.name || "",
              email: At.email || "",
              profilePicture: At.profilePicture || "",
              role: At.role || ""
            };
            Br.current = !0, (ee = eo.current) == null || ee.call(eo, _s);
          } else
            Fo && console.error("Error getting user data:", Fo);
        }
        bs(!0);
      } catch (Xe) {
        console.error("Error checking session:", Xe), Gt(), it();
      } finally {
        gs(!1);
      }
    })();
  }, [it]), lo(() => {
    E && Ki(Pr, it);
  }, [E, Pr]), ms || g)
    return /* @__PURE__ */ t(
      Pi,
      {
        theme: ne,
        darkModeSelector: He,
        sidebarVariant: c,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: s,
        contentPadding: S,
        sidebarBackgroundColor: w,
        contentBackgroundColor: Ge,
        content: v
      }
    );
  if (!xs)
    return null;
  const Ot = p ?? (jt ? /* @__PURE__ */ t(jt, { ...Vt }) : null), ys = (L) => {
    at(!1), $o(!1), Nr({ open: !0, tab: L });
  }, No = B && (() => ys("notifications")), Ss = Ie + P, Gr = {
    avatarColor: D,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: T == null ? void 0 : T.map(
      (L) => L.onClick || !L.path ? L : { ...L, onClick: () => k == null ? void 0 : k(L.path) }
    ),
    showNotifications: Re,
    notificationCount: Ie,
    whatsNewCount: P,
    onNotificationsClick: No,
    showProfile: N,
    userName: F,
    userRole: O,
    userAvatar: $,
    showSettings: ie,
    onSettingsClick: ue,
    showThemeToggler: $e,
    theme: ne,
    onThemeToggle: Me,
    onLogout: zr
  }, ko = (L) => /* @__PURE__ */ t(
    Ta,
    {
      ...Gr,
      compact: L,
      color: me,
      hoverColor: Tt
    }
  ), Hr = Ct ? [Ka() ? "⌘" : "Ctrl", Ct.toUpperCase()] : void 0, ws = (L) => nt && ut === "sidebar" ? /* @__PURE__ */ t(
    hn,
    {
      variant: L ? "sidebar-icon" : "sidebar",
      onClick: st,
      active: Et,
      busy: Xt,
      shortcutKeys: Hr,
      accentColor: me
    }
  ) : null, Es = (L) => Ot ? /* @__PURE__ */ t(
    $a,
    {
      search: Ot,
      mode: L,
      onExpand: () => {
        Ao.pin(), $r(!0);
      },
      autoFocus: fs,
      onAutoFocused: ps,
      color: me,
      hoverColor: Tt
    }
  ) : null, to = (L) => {
    const ee = ws(L !== "full"), Xe = Es(L);
    return ee || Xe ? /* @__PURE__ */ R(
      Dt,
      {
        spacing: Te ? `${gr}px` : 1.5,
        sx: { alignItems: L === "full" ? "stretch" : "center" },
        children: [
          ee,
          Te && ee && Xe ? /* @__PURE__ */ t(
            H,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Ft(me)}`
              }
            }
          ) : null,
          Xe
        ]
      }
    ) : void 0;
  }, Ur = () => /* @__PURE__ */ t(
    qo,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: _,
      onLinkClick: k,
      showHeaderBar: W,
      logo: Oo,
      title: n,
      onBrandClick: Jt,
      brandMenuOpen: Qt,
      brandColor: Zt,
      headerBackgroundColor: W ? Ar : void 0,
      headerForegroundColor: W ? _t : void 0,
      activeAccentColor: D,
      groupAccentColor: I,
      activeForegroundColor: M,
      foregroundColor: ye,
      surfaceBackgroundColor: Or,
      flyoutSurfaceColor: Q,
      collapsed: oe || Le,
      showLabels: oe,
      expandedWidth: Go,
      collapsedWidth: oe ? Pn : Cr,
      topContent: to(
        oe ? "popover" : Le ? _r : "full"
      ),
      footer: ko(oe || Le),
      submenuMode: Te ? "flyout" : "inline"
    }
  ), Kr = (L) => Te ? Rs(L) : Is(L), Rs = (L) => /* @__PURE__ */ R(
    H,
    {
      component: "aside",
      ...Ze ? Je.rootProps : {},
      "data-auto-hide": Ze ? "true" : void 0,
      "data-shown": Ze ? String(Je.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (ee) => ee.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...Ze ? {
          position: "fixed",
          left: 0,
          width: kt + 2 * dt,
          pointerEvents: "none"
        } : {
          width: Ke,
          minWidth: Ke,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: z
        }
      },
      children: [
        Ze && /* @__PURE__ */ t(
          H,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Ga,
              pointerEvents: "auto"
            }
          }
        ),
        Ze && /* @__PURE__ */ t(
          H,
          {
            ref: Je.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(Je.nearEdge),
            "aria-hidden": "true",
            sx: {
              "--edge-glow-y": "50%",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: On,
              pointerEvents: "none",
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${On}px ${Ho}px at 0 var(--edge-glow-y), ${ke(me, De ? 0.5 : 0.4)}, ${ke(me, 0)})`,
              opacity: Je.nearEdge ? 1 : 0,
              transition: "opacity 200ms ease",
              // And a bright line along the edge beside it
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 3,
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${Ho}px), ${ke(me, De ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${Ho}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ R(
          H,
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            sx: {
              position: "absolute",
              top: dt,
              bottom: dt,
              left: dt,
              width: kt,
              borderRadius: `${zn}px`,
              display: "flex",
              flexDirection: "column",
              ...Ze && {
                pointerEvents: Je.shown ? "auto" : "none",
                opacity: Je.shown ? 1 : 0,
                transform: Je.shown ? "none" : `translateX(calc(-100% - ${2 * dt}px))`,
                transition: Ha,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...ae
            },
            children: [
              /* @__PURE__ */ t(
                Ht,
                {
                  isDark: De,
                  solid: Q,
                  sx: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit"
                  }
                }
              ),
              /* @__PURE__ */ t(
                H,
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
                  children: L
                }
              )
            ]
          }
        )
      ]
    }
  ), Is = (L) => /* @__PURE__ */ t(
    H,
    {
      component: "aside",
      sx: {
        width: Lt,
        minWidth: Lt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ee) => ee.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        H,
        {
          ...Te ? {} : Ao.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Le ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Le ? Lt : Go,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Q,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Le ? "none" : `4px 0 24px rgba(0, 0, 0, ${De ? 0.5 : 0.12})`,
            transition: za,
            ...ae
          },
          children: L
        }
      )
    }
  ), Ts = Hn(
    S,
    qt
  );
  return /* @__PURE__ */ t(mo, { theme: Rt, children: /* @__PURE__ */ t(Wn.Provider, { value: D, children: /* @__PURE__ */ t(So.Provider, { value: Q, children: /* @__PURE__ */ R(
    H,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...St
      },
      children: [
        /* @__PURE__ */ t(Uo, {}),
        ce && /* @__PURE__ */ t(
          da,
          {
            height: uo,
            onMenuClick: s && !ge ? () => at(!0) : void 0,
            appName: n,
            logo: Oo,
            onBrandClick: Jt,
            brandMenuOpen: Qt,
            background: It,
            color: _t,
            brandColor: Zt,
            endContent: Re ? /* @__PURE__ */ t(
              Er,
              {
                count: Ss,
                onClick: No,
                color: _t,
                hoverColor: Tt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !ce && oe && /* @__PURE__ */ t(
          H,
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
            children: Ur()
          }
        ),
        s && !ce && W && Kr(
          /* @__PURE__ */ R(Oe, { children: [
            Ur(),
            (X == null ? void 0 : X.show) && !Le && /* @__PURE__ */ t(co, { ...X })
          ] })
        ),
        te && Kr(
          /* @__PURE__ */ R(Oe, { children: [
            /* @__PURE__ */ t(
              wa,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: _,
                onLinkClick: k,
                logo: Oo,
                title: n,
                onBrandClick: Jt,
                brandMenuOpen: Qt,
                brandColor: Zt,
                headerBackgroundColor: Ar,
                headerForegroundColor: _t,
                activeAccentColor: D,
                groupAccentColor: I,
                activeForegroundColor: M,
                foregroundColor: ye,
                surfaceBackgroundColor: Or,
                flyoutSurfaceColor: Q,
                collapsed: Le,
                expandedWidth: Go,
                collapsedWidth: Cr,
                topContent: to(
                  Le ? _r : "full"
                ),
                submenuMode: Te ? "flyout" : "inline",
                color: me,
                hoverColor: Tt,
                avatarColor: D,
                showProfile: N,
                userName: F,
                userEmail: A,
                userRole: O,
                userAvatar: $,
                showNotifications: Re,
                notificationCount: Ie,
                onNotificationsClick: hs ? No : J,
                whatsNewCount: P,
                onProfileClick: Pe,
                menuItems: T,
                onLogout: zr,
                theme: ne,
                showThemeToggler: $e,
                onThemeToggle: Me
              }
            ),
            (X == null ? void 0 : X.show) && !Le && /* @__PURE__ */ t(co, { ...X })
          ] })
        ),
        s && !ce && !se && !G && /* @__PURE__ */ t(
          Yr,
          {
            variant: "permanent",
            sx: {
              width: Ke,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Ke,
                boxSizing: "border-box",
                bgcolor: z,
                borderRight: "none"
              },
              ...ae
            },
            children: /* @__PURE__ */ R(
              H,
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
                    H,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        go,
                        {
                          logo: us,
                          appName: n,
                          onClick: Jt,
                          menuOpen: Qt,
                          color: x ?? me,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  to("popover"),
                  /* @__PURE__ */ R(
                    H,
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
                          na,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: _,
                            onLinkClick: k,
                            accentColor: D,
                            surfaceBackgroundColor: z,
                            railShowTitles: i
                          }
                        ),
                        (X == null ? void 0 : X.show) && /* @__PURE__ */ t(co, { ...X })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(H, { sx: { py: 1.5 }, children: ko(!0) })
                ]
              }
            )
          }
        ),
        s && ce && /* @__PURE__ */ R(
          Ds,
          {
            anchor: ge ? "bottom" : "left",
            open: Mr,
            onOpen: () => at(!0),
            onClose: () => at(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (L) => L.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Q,
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
                H,
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
                qo,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: _,
                  onLinkClick: (L) => {
                    k == null || k(L), at(!1);
                  },
                  onLinkAction: () => at(!1),
                  collapsed: !1,
                  expandedWidth: ge ? "100%" : Pa,
                  activeAccentColor: D,
                  groupAccentColor: I,
                  activeForegroundColor: M,
                  foregroundColor: ye,
                  surfaceBackgroundColor: Q,
                  topInsetPx: ge ? 8 : 0,
                  topContent: ge ? void 0 : to("full"),
                  footer: ge ? void 0 : ko(!1)
                }
              ),
              (X == null ? void 0 : X.show) && /* @__PURE__ */ t(co, { ...X })
            ]
          }
        ),
        ge && Ot && /* @__PURE__ */ t(
          la,
          {
            open: Dr,
            onClose: () => $o(!1),
            search: Ot
          }
        ),
        ge && /* @__PURE__ */ t(
          ca,
          {
            ...Gr,
            pinnedLinks: b,
            activePath: _,
            onLinkClick: k,
            onMenuClick: s ? () => at(!0) : void 0,
            menuOpen: Mr,
            onSearchClick: Ot ? () => $o(!0) : void 0,
            searchOpen: Dr,
            showAssistant: nt,
            onAssistantClick: st,
            assistantActive: Et,
            showProfile: N,
            background: Q,
            color: me,
            activeColor: D,
            activeBackground: Tt
          }
        ),
        /* @__PURE__ */ t(
          H,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Ts,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": ce ? `${uo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ke ? `calc(100% - ${Ke}px)` : "100%",
              mt: ce ? `${uo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ge && {
                pb: `calc(var(--lumora-content-padding) + ${Lr})`
              },
              backgroundColor: z,
              ...ze
            },
            children: e
          }
        ),
        Ue && /* @__PURE__ */ t(
          qi,
          {
            open: Fr,
            variant: Wr,
            position: To,
            width: wt,
            sidebarWidthPx: Ke,
            bottomOffsetPx: nt && ut === "floating" ? Ua : 0,
            fullScreen: ce,
            fullScreenBottom: ge ? Lr : "0px",
            onClose: Ut,
            children: /* @__PURE__ */ t(Ue, {})
          }
        ),
        nt && ut === "floating" && !ge && /* @__PURE__ */ t(
          hn,
          {
            variant: "floating",
            rightOffsetPx: vs,
            shortcutKeys: Hr,
            onClick: st,
            active: Et,
            busy: Xt
          }
        ),
        Re && B && /* @__PURE__ */ t(
          Yr,
          {
            anchor: "right",
            open: Mo.open,
            onClose: kr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              B,
              {
                onClose: kr,
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
  Z as AUTH_ERROR_CODES,
  j as AuthError,
  qo as CollapsibleSidebar,
  Hc as FullBleedSection,
  ki as Kbd,
  Pi as LumoraShellSkeleton,
  Kc as LumoraWrapper,
  Gt as clearAuthTokens,
  Kc as default,
  Uc as getAuthErrorMessage,
  zt as getAuthTokens,
  Hi as getCurrentUser,
  Sr as getDesignTokens,
  Gi as isAuthenticated,
  Qo as logAuthError,
  ts as storeAuthTokens
};
