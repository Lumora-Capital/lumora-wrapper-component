import { jsx as t, jsxs as R, Fragment as Ae } from "react/jsx-runtime";
import Ms from "@mui/icons-material/KeyboardArrowDownRounded";
import Ds from "@mui/icons-material/KeyboardArrowUpRounded";
import Ls from "@mui/icons-material/ChevronRightRounded";
import A from "@mui/material/Box";
import Xr from "@mui/material/Collapse";
import ot from "@mui/material/Divider";
import xe from "@mui/material/IconButton";
import ro from "@mui/material/ListItemButton";
import be from "@mui/material/ListItemIcon";
import Be from "@mui/material/ListItemText";
import $e from "@mui/material/Stack";
import ve from "@mui/material/Tooltip";
import ne from "@mui/material/Typography";
import { useTheme as Pe, createTheme as vo, alpha as We, ThemeProvider as go } from "@mui/material/styles";
import * as d from "react";
import { useMemo as jr, useState as ct, useCallback as Vr, useRef as Fo, useEffect as uo, useLayoutEffect as Ns } from "react";
import rt from "@mui/material/ButtonBase";
import { keyframes as or } from "@emotion/react";
import rr from "@mui/material/Fade";
import nr from "@mui/material/Popper";
import { useTheme as Mn, CssBaseline as Uo, GlobalStyles as ks, Box as U, useMediaQuery as Dn, Stack as Lt, Skeleton as Ce, Drawer as Yr, SwipeableDrawer as Ws } from "@mui/material";
import qr from "axios";
import Fs from "@mui/material/Card";
import Bs from "@mui/material/CardContent";
import Ln from "@mui/material/Button";
import Ps from "@mui/icons-material/AutoAwesomeRounded";
import zs from "@mui/material/Grow";
import sr from "@mui/material/Paper";
import Gs from "@mui/material/Slide";
import Hs from "@mui/material/ListSubheader";
import tt from "@mui/material/MenuItem";
import ir from "@mui/material/MenuList";
import Nn from "@mui/icons-material/MenuRounded";
import ar from "@mui/icons-material/SearchRounded";
import kn from "@mui/icons-material/LogoutRounded";
import Wn from "@mui/icons-material/NotificationsNoneOutlined";
import Us from "@mui/icons-material/SettingsOutlined";
import Ks from "@mui/material/Avatar";
import Xs from "@mui/material/Menu";
import Zr from "@mui/material/ToggleButton";
import js from "@mui/material/ToggleButtonGroup";
import Vs from "@mui/material/Drawer";
import Ys from "@mui/material/AppBar";
import qs from "@mui/material/Toolbar";
import Fn from "@mui/material/Badge";
import Zs from "@mui/icons-material/DarkModeOutlined";
import Js from "@mui/icons-material/LightModeOutlined";
import Qs from "@mui/icons-material/SettingsBrightnessOutlined";
import cr from "@mui/material/Popover";
import ei from "@mui/icons-material/CheckRounded";
const xo = ({
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
  }, u = /* @__PURE__ */ R(Ae, { children: [
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
  ) : /* @__PURE__ */ t($e, { direction: "row", "data-testid": i, sx: a, children: u });
}, Ko = !1, vt = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, bt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, gt = (e, o) => e ? `${e}/${o.text}` : o.text, Qe = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Qe(n, o))) ?? !1 : !1;
}, ke = (e, o) => !!(o && e.path === o), lr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return bt(r) ? lr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
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
}, Bn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), dr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", ti = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", oi = or`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, ye = "@media (prefers-reduced-motion: reduce)", Y = 6, ur = "9, 193, 174", Pn = d.createContext(
  void 0
), So = d.createContext(
  void 0
), fr = (e) => d.useContext(So) ?? e, wo = () => {
  const e = d.useContext(Pn), o = e ? yo(e) : null;
  return o ? o.join(", ") : ur;
}, ri = (e, o, r = ur) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${ti(e)}, 0 0 0 1px ${dr(e)}`
}), pr = (e, o) => ({
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
`, zn = (e, o = ur, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), bo = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: jo(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${jo(e, 0.45)}`
}, ni = (e, o) => {
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
}, si = 100, Gn = 80, fo = 56, Nt = 72, Wt = 60, de = 44, Bt = 20, gr = 4, dt = 8, Hn = Y, Un = { xs: 2, md: "18px" }, Kn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, Eo = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), ii = (e, o, r) => e && Eo(o, r), Xn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || o ? 0 : r === "rail-labeled" ? Gn : Eo(n, r) ? s ? 0 : Wt + 2 * dt : r === "collapsible" || r === "panel" ? Nt : si, jn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Vn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Yn = { stiffness: 320, damping: 24 }, qn = { stiffness: 320, damping: 28 }, xr = { stiffness: 520, damping: 20 }, br = { stiffness: 380, damping: 36 }, Ro = { stiffness: 260, damping: 28 }, ai = "cubic-bezier(0.32, 1.28, 0.52, 1)", ci = 420, Jr = 60, li = (() => {
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
  if (!li)
    return { easing: ai, duration: ci };
  const i = 1 / 600;
  let c = 0, a = 0, u = 0, l = 1 / Jr;
  const m = [0];
  for (; u < 3; ) {
    const g = (-e * (c - 1) - o * a) / r;
    if (a += g * i, c += a * i, u += i, u >= l && (m.push(c), l += 1 / Jr, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const h = {
    easing: `linear(${m.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return Qr.set(n, h), h;
}, Pt = (e) => !!(e && typeof e.animate == "function"), yt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, di = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, ui = (e, o = 1.14) => {
  if (!Pt(e) || yt())
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
}, zt = "data-rail-item", Zn = `[${zt}], button, [role="button"]`, St = d.createContext(!1), vr = () => {
  const e = d.useContext(St), o = Pe(), r = d.useContext(So);
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
  const a = d.useRef(null), u = wo(), [l, m] = d.useState(null), h = d.useRef(null), g = d.useRef(null), p = (E, b) => {
    g.current = b;
    const v = b.getBoundingClientRect(), T = E.getBoundingClientRect(), k = n ?? v.width, L = n ?? v.height, W = {
      top: Math.round(v.top - T.top + (v.height - L) / 2),
      left: Math.round(v.left - T.left + (v.width - k) / 2),
      width: Math.round(k),
      height: Math.round(L)
    };
    m(
      (C) => C && C.visible && C.top === W.top && C.left === W.left && C.width === W.width && C.height === W.height ? C : { ...W, visible: !0, instant: !(C != null && C.visible) }
    );
  }, x = (E, b) => {
    var T;
    const v = (T = b == null ? void 0 : b.closest) == null ? void 0 : T.call(b, r);
    return v && E.contains(v) ? v : null;
  }, S = (E) => {
    if (!e)
      return;
    const b = x(E.currentTarget, E.target);
    b && p(E.currentTarget, b);
  }, _ = (E) => {
    if (!e)
      return;
    const b = x(E.currentTarget, E.target);
    b && E.target.matches(":focus-visible") && p(E.currentTarget, b);
  }, w = () => {
    var v;
    const E = (v = a.current) == null ? void 0 : v.parentElement, b = i && (E == null ? void 0 : E.querySelector(i));
    return E && b ? { container: E, item: b } : null;
  }, y = () => {
    const E = w();
    if (E) {
      p(E.container, E.item);
      return;
    }
    g.current = null, m((b) => b != null && b.visible ? { ...b, visible: !1 } : b);
  };
  d.useEffect(() => {
    var b, v;
    if (!e)
      return;
    const E = w();
    E ? p(E.container, E.item) : (v = (b = a.current) == null ? void 0 : b.parentElement) != null && v.matches(":hover") || y();
  }, [e, c]);
  const I = (E) => {
    const b = E.relatedTarget;
    (!b || !E.currentTarget.contains(b)) && (E.currentTarget.matches(":hover") || y());
  };
  return d.useEffect(() => {
    const E = a.current;
    if (!(l != null && l.visible)) {
      h.current = null;
      return;
    }
    const b = h.current;
    if (h.current = l.top, !Pt(E) || yt())
      return;
    if (b === null || l.instant) {
      E.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: et.duration,
        easing: et.easing
      });
      return;
    }
    const v = Math.min(Math.abs(l.top - b) / 600, 0.08);
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
      A,
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...zn(o, u),
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
          [ye]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: S,
      onMouseLeave: y,
      onFocus: _,
      onBlur: I,
      onScrollCapture: y
    } : {}
  };
}, fi = (e, o, r = null) => {
  const n = yr({
    enabled: e,
    isDark: o,
    selector: Zn,
    // The rail's buttons exactly, so the hover sits on the item
    size: de,
    radius: Y,
    pinSelector: `[${zt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
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
}, hi = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const s = d.useRef(null), [i, c] = d.useState(null), a = d.useRef(null), u = d.useCallback(
    (m) => {
      const h = n.current;
      if (!e || !h)
        return;
      const g = h.querySelector(
        `[${zt}][data-active="true"]`
      );
      if (!g) {
        c(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const p = pi(g, h);
      c(
        (x) => x && x.visible && x.top === p.top && x.left === p.left && x.width === p.width && x.height === p.height ? x : {
          ...p,
          visible: !0,
          instant: m || !(x != null && x.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    u(!1);
  }), d.useEffect(() => {
    const m = n.current;
    if (!e || !m)
      return;
    let h = 0;
    const g = () => {
      cancelAnimationFrame(h), h = requestAnimationFrame(() => u(!1));
    }, p = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    p == null || p.observe(m);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return x == null || x.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(h), p == null || p.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, u]), d.useEffect(() => {
    const m = s.current;
    if (!(i != null && i.visible)) {
      a.current = null;
      return;
    }
    const h = a.current;
    if (a.current = i.top, h === null || i.instant || !Pt(m) || yt())
      return;
    const g = Math.min(Math.abs(i.top - h) / 600, 0.08);
    g && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - g / 2} ${1 + g}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: et.duration, easing: "ease-out" }
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
        ...bo(r, o),
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
        [ye]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, mi = 1.6, en = 110, tn = 110, no = pe(br), gi = (e) => e >= en ? 0 : (1 + Math.cos(Math.PI * e / en)) / 2, Jn = (e, {
  enabled: o,
  axis: r,
  itemSelector: n,
  glyphSelector: s,
  transition: i,
  maxScale: c = mi,
  carrierSelector: a
}) => {
  const u = d.useRef(0), l = d.useRef(
    /* @__PURE__ */ new WeakMap()
  ), m = d.useRef(/* @__PURE__ */ new Set()), h = d.useRef(/* @__PURE__ */ new Set()), g = i ? `, ${i}` : "", p = (b) => a ? b.closest(a) : null, x = (b) => {
    var k;
    const [v = "0", T = "0"] = (((k = p(b)) == null ? void 0 : k.style.translate) ?? "").split(" ").filter(Boolean);
    return r === "x" ? parseFloat(v) || 0 : parseFloat(T) || 0;
  }, S = (b) => {
    const v = b.getBoundingClientRect();
    return (r === "x" ? v.left + v.width / 2 : v.top + v.height / 2) - x(b);
  }, _ = (b) => {
    const v = b.getBoundingClientRect();
    return Array.from(b.querySelectorAll(n)).filter((T) => {
      const k = T.getBoundingClientRect(), L = S(T), W = r === "x" ? L : k.left + k.width / 2, C = r === "x" ? k.top + k.height / 2 : L;
      return k.width > 0 && W >= v.left && W <= v.right && C >= v.top && C <= v.bottom;
    }).map((T) => ({
      item: T,
      glyph: s ? T.querySelector(s) : T
    })).filter(
      (T) => T.glyph !== null
    );
  }, w = (b, v) => {
    if (v === b)
      return c;
    let T = l.current.get(v);
    if (T === void 0) {
      const W = Number(v.style.scale) || 1, C = v.getBoundingClientRect();
      T = { width: C.width / W, height: C.height / W }, l.current.set(v, T);
    }
    if (!(T.width > 0 && T.height > 0))
      return 1;
    const k = b.getBoundingClientRect(), L = Math.min(
      k.width / T.width,
      k.height / T.height
    );
    return Math.max(1, Math.min(L, c));
  }, y = () => {
    var b;
    cancelAnimationFrame(u.current), m.current.forEach((v) => {
      v.style.transition = `scale ${no.duration}ms ${no.easing}${g}`, v.style.scale = "";
    }), m.current.clear(), h.current.forEach((v) => {
      v.style.transition = `translate ${no.duration}ms ${no.easing}`, v.style.translate = "";
    }), h.current.clear(), (b = e.current) == null || b.style.removeProperty("--dock-spread");
  }, I = (b, v, T) => {
    const k = r === "x" ? v : T, L = _(b).map(({ item: C, glyph: O }) => {
      const D = S(C), z = 1 + (w(C, O) - 1) * gi(Math.abs(k - D));
      O.style.transition = `scale ${tn}ms ease-out${g}`, z > 1.001 ? (O.style.scale = z.toFixed(3), m.current.add(O)) : m.current.has(O) && (O.style.scale = "", m.current.delete(O));
      const te = r === "x" ? C.offsetWidth : C.offsetHeight;
      return { item: C, centre: D, growth: (z - 1) * te };
    });
    if (!a)
      return;
    const W = L.reduce((C, { growth: O }) => C + O, 0);
    b.style.setProperty("--dock-spread", `${W.toFixed(1)}px`), L.forEach(({ item: C, centre: O, growth: D }) => {
      const z = p(C);
      if (!z)
        return;
      const te = L.reduce(
        (ue, Se) => Se.centre < O ? ue + Se.growth : ue,
        D / 2
      );
      z.style.transition = `translate ${tn}ms ease-out`, Math.abs(te) > 0.1 ? (z.style.translate = r === "x" ? `${te.toFixed(1)}px 0` : `0 ${te.toFixed(1)}px`, h.current.add(z)) : h.current.has(z) && (z.style.translate = "", h.current.delete(z));
    });
  }, $ = (b) => {
    if (b.pointerType && b.pointerType !== "mouse" || yt())
      return;
    const v = b.currentTarget, { clientX: T, clientY: k } = b;
    cancelAnimationFrame(u.current), u.current = requestAnimationFrame(() => {
      const L = v.getBoundingClientRect(), W = r === "x" ? k : T, [C, O] = r === "x" ? [L.top, L.bottom] : [L.left, L.right];
      if (W < C || W > O) {
        y();
        return;
      }
      I(v, T, k);
    });
  }, E = (b) => {
    const v = e.current;
    if (!o || !v || yt())
      return;
    const T = b.getBoundingClientRect();
    I(v, T.left + T.width / 2, T.top + T.height / 2);
  };
  return d.useEffect(() => {
    o || y();
  }, [o]), d.useEffect(() => () => cancelAnimationFrame(u.current), []), {
    containerProps: o ? { onPointerMove: $, onPointerLeave: y, onScrollCapture: y } : {},
    swellOn: E,
    settle: y
  };
}, Fe = 36, xi = 20, Qn = Y, on = "[data-flyout-tile]", Vo = 4, bi = 104, so = 6, es = "background 160ms ease, color 160ms ease, transform 120ms ease", Yo = 10, rn = 10, vi = 18, yi = 1190, Si = 1195, nn = pe(Yn), xt = pe(br), sn = pe(Ro), an = 8192, wi = ({ left: e, top: o, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), c = e + r, a = o + n, u = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${an} V ${an} H 0 Z M ${e + i} ${o} H ${c - i} ${u} ${c} ${o + i} V ${a - i} ${u} ${c - i} ${a} H ${e + i} ${u} ${e} ${a - i} V ${o + i} ${u} ${e + i} ${o} Z')`;
}, Ei = ({
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
  accentColor: m,
  activeForegroundColor: h,
  solidSurface: g
}) => {
  const p = Pe(), x = p.palette.mode === "dark", S = !!(e && r), _ = d.useRef(null);
  e && o && (_.current = { group: e, key: o });
  const w = _.current, y = d.useMemo(() => r ? {
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
    r && ui(r);
  }, [r]);
  const [$, E] = d.useState(!1);
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
  const b = d.useMemo(
    () => w ? lr(w.group.subitems, w.group.icon) : [],
    [w]
  ), v = d.useRef(null), T = Jn(v, {
    enabled: S,
    axis: "x",
    itemSelector: on,
    transition: es,
    // Grown as far as the rail's icons, so the neighbours make room
    carrierSelector: '[role="menuitem"]'
  }), k = d.useRef([]), [L, W] = d.useState([]);
  d.useLayoutEffect(() => {
    const B = () => {
      const J = b.map(
        (K, V) => {
          var fe;
          return ((fe = k.current[V]) == null ? void 0 : fe.offsetWidth) ?? 0;
        }
      );
      W(
        (K) => K.length === J.length && K.every((V, fe) => V === J[fe]) ? K : J
      );
    };
    if (B(), typeof ResizeObserver > "u")
      return;
    const P = new ResizeObserver(B);
    return k.current.slice(0, b.length).forEach((J) => J && P.observe(J)), () => P.disconnect();
  }, [b]);
  const C = Ii(L, b.length), O = d.useRef([]), D = b.findIndex(
    ({ sub: B }) => ke(B, i)
  ), [z, te] = d.useState(0);
  d.useEffect(() => {
    te(Math.max(D, 0));
  }, [o]), d.useEffect(() => {
    if (!S || !c)
      return;
    const B = setTimeout(() => {
      var P;
      return (P = O.current[0]) == null ? void 0 : P.focus();
    });
    return () => clearTimeout(B);
  }, [S, c, o]);
  const ue = (B) => {
    var J;
    const P = Math.max(0, Math.min(B, b.length - 1));
    te(P), (J = O.current[P]) == null || J.focus();
  }, Se = (B, P) => {
    var J;
    switch (B.key) {
      case "ArrowRight":
        ue(P + 1);
        break;
      case "ArrowLeft":
        P === 0 ? u(!0) : ue(P - 1);
        break;
      case " ":
        (J = O.current[P]) == null || J.click();
        break;
      case "Home":
        ue(0);
        break;
      case "End":
        ue(b.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    B.preventDefault();
  }, Ie = p.palette.text.primary, _e = x ? p.palette.text.primary : m;
  return /* @__PURE__ */ R(Ae, { children: [
    /* @__PURE__ */ t(rr, { in: S, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
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
          ...s ? { clipPath: wi(s) } : {},
          zIndex: yi,
          // Clear: it is only there to close the flyout on a click
          // outside it; the page stays as it is
          bgcolor: "transparent"
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
          zIndex: Si,
          transition: $ ? `transform ${xt.duration}ms ${xt.easing}` : "none",
          [ye]: { transition: "none" }
        },
        children: ({ TransitionProps: B }) => /* @__PURE__ */ t(
          Ri,
          {
            in: (B == null ? void 0 : B.in) ?? S,
            onEnter: B == null ? void 0 : B.onEnter,
            onExited: B == null ? void 0 : B.onExited,
            panelProps: l,
            groupText: w == null ? void 0 : w.group.text,
            isDark: x,
            children: w ? /* @__PURE__ */ t(
              A,
              {
                ref: v,
                role: "menu",
                "aria-label": w.group.text,
                ...T.containerProps,
                onBlur: (P) => {
                  P.currentTarget.contains(
                    P.relatedTarget
                  ) || T.settle();
                },
                sx: {
                  position: "relative",
                  width: C.width,
                  height: Fe * 2 + Vo,
                  // The panel stretches as the dock pushes
                  // the pages along, as the Dock's shelf does
                  mr: "var(--dock-spread, 0px)",
                  transition: `margin-right ${xt.duration}ms ${xt.easing}`,
                  [ye]: { transition: "none" }
                },
                children: b.map(({ sub: P, icon: J }, K) => /* @__PURE__ */ t(
                  os,
                  {
                    ref: (V) => {
                      O.current[K] = V;
                    },
                    nameRef: (V) => {
                      k.current[K] = V;
                    },
                    tileLeft: C.tiles[K],
                    nameLeft: C.names[K],
                    sub: P,
                    icon: J,
                    index: K,
                    active: ke(
                      P,
                      i
                    ),
                    tabIndex: K === z ? 0 : -1,
                    onClick: (V) => {
                      vt(V) && (V.preventDefault(), a(P.path), u());
                    },
                    onKeyDown: (V) => Se(V, K),
                    onFocus: (V) => {
                      te(K);
                      const fe = V.currentTarget.querySelector(
                        on
                      );
                      fe && V.currentTarget.matches(
                        ":focus-visible"
                      ) && T.swellOn(fe);
                    },
                    accentColor: m,
                    activeForegroundColor: h,
                    labelColor: Ie,
                    iconColor: _e,
                    surface: g,
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
}, Ri = ({
  in: e,
  onEnter: o,
  onExited: r,
  panelProps: n,
  groupText: s,
  isDark: i,
  children: c
}) => {
  const a = d.useRef(null), u = (l) => {
    a.current = l;
    const { ref: m } = n;
    typeof m == "function" ? m(l) : m && (m.current = l);
  };
  return d.useLayoutEffect(() => {
    const l = a.current;
    if (di(l), e) {
      o == null || o(), Pt(l) && !yt() && l.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: sn.duration, easing: sn.easing }
      );
      return;
    }
    if (!Pt(l)) {
      r == null || r();
      return;
    }
    l.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 120,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(() => r == null ? void 0 : r()).catch(() => {
    });
  }, [e]), /* @__PURE__ */ t(
    A,
    {
      ref: u,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": s,
      sx: {
        position: "relative",
        // A light, see-through panel behind the tiles alone (not
        // frosted); the rest of the page is left untouched. A tile the
        // dock grows pops out past it.
        p: `${rn}px`,
        borderRadius: `${Qn + rn}px`,
        bgcolor: i ? "rgba(24, 30, 40, 0.65)" : "rgba(236, 239, 243, 0.65)",
        // A deep, soft shadow lifts it off the page
        boxShadow: i ? "0 24px 56px -12px rgba(0, 0, 0, 0.75), 0 4px 12px rgba(0, 0, 0, 0.35)" : "0 24px 56px -12px rgba(15, 23, 42, 0.38), 0 4px 12px rgba(15, 23, 42, 0.08)",
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
      children: c
    }
  );
}, ts = (e) => e % 2 === 1, Ii = (e, o) => {
  const r = [], n = [];
  let s = -so, i = -so;
  for (let c = 0; c < o; c += 1) {
    const a = e[c] || Fe, u = !ts(c), l = u ? Fe : a, m = u ? a : Fe, h = Math.max(
      s + so + l / 2,
      i + so + m / 2
    );
    s = h + l / 2, i = h + m / 2, r.push(Math.round(h - Fe / 2)), n.push(Math.round(h - a / 2));
  }
  return { tiles: r, names: n, width: Math.round(Math.max(s, i, 0)) };
}, os = d.forwardRef(
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
    onFocus: m,
    accentColor: h,
    activeForegroundColor: g,
    labelColor: p,
    iconColor: x,
    surface: S,
    isDark: _
  }, w) => {
    const y = ts(i), I = pr(_, S), $ = {
      animation: `${oi} ${nn.duration}ms ${nn.easing} both`,
      animationDelay: `${i * vi}ms`,
      [ye]: { animation: "none" }
    }, E = {
      background: h,
      color: g,
      "& .MuiSvgIcon-root": { color: g }
    }, b = {
      background: `color-mix(in srgb, ${h} ${_ ? 20 : 12}%, ${S})`
    }, v = {
      "& [data-flyout-tile], & [data-flyout-name]": c ? {} : b
    }, T = {
      ...I,
      border: "none",
      // Lifted a little more than a resting label: they float over
      // the page
      boxShadow: _ ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)"
    };
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
        onFocus: m,
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
              ...c ? {} : b,
              outline: "2px solid",
              outlineColor: h,
              outlineOffset: 2
            }
          },
          "&:active [data-flyout-tile]": { transform: "scale(0.94)" },
          [ye]: {
            "&:active [data-flyout-tile]": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(
            A,
            {
              "data-flyout-tile": "",
              sx: {
                ...T,
                left: o,
                top: y ? Fe + Vo : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: Fe,
                height: Fe,
                p: 0,
                borderRadius: `${Qn}px`,
                // Grows out of the row, away from its name
                transformOrigin: y ? "center top" : "center bottom",
                transition: `scale ${xt.duration}ms ${xt.easing}, ${es}`,
                "& .MuiSvgIcon-root": {
                  fontSize: xi,
                  color: x,
                  transition: "color 160ms ease"
                },
                ...c ? E : {},
                ...$
              },
              children: s
            }
          ),
          /* @__PURE__ */ t(
            A,
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
                A,
                {
                  component: "span",
                  ref: e,
                  "data-flyout-name": "",
                  sx: {
                    ...T,
                    px: 1,
                    py: "3px",
                    fontSize: "0.75rem",
                    lineHeight: "16px",
                    borderRadius: "6px",
                    // A long name wraps onto a second line, split
                    // evenly, so it stays as compact as its tile
                    maxWidth: bi,
                    textAlign: "center",
                    textWrap: "balance",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                    fontWeight: c ? 600 : 500,
                    ...c ? E : {},
                    transition: "background 160ms ease, color 160ms ease",
                    ...$
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
os.displayName = "FlyoutTile";
const _i = 50, Ti = 250, Ci = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const s = d.useRef(/* @__PURE__ */ new Map()), i = d.useRef(null), c = d.useRef(void 0), a = d.useRef(void 0), u = () => {
    clearTimeout(c.current), c.current = void 0;
  }, l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = (w, y, I = !1) => {
    u(), l(), r({ key: w, pinned: y, focusFirst: I });
  }, h = d.useCallback((w = !1) => {
    var I, $;
    u(), l();
    const y = (I = n.current) == null ? void 0 : I.key;
    r(null), w && y && (($ = s.current.get(y)) == null || $.focus());
  }, []), g = () => {
    u(), !(!n.current || n.current.pinned) && (l(), a.current = setTimeout(() => h(), Ti));
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
    const w = ($) => {
      var b;
      const E = $;
      return E ? (b = i.current) != null && b.contains(E) ? !0 : [...s.current.values()].some((v) => v.contains(E)) : !1;
    }, y = ($) => {
      w($.target) || h();
    }, I = ($) => {
      var E;
      $.key === "Escape" && h(
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
          y.key !== w && m(w, y.pinned);
          return;
        }
        u(), c.current = setTimeout(
          () => m(w, !1),
          _i
        );
      },
      onMouseLeave: g,
      onClick: (y) => {
        if (y.detail === 0) {
          m(w, !0, !0);
          return;
        }
        const I = n.current;
        (I == null ? void 0 : I.key) === w && I.pinned ? h() : m(w, !0);
      },
      onKeyDown: (y) => {
        y.key === "ArrowRight" && (y.preventDefault(), m(w, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: l,
      onMouseLeave: g
    },
    onRailLeafEnter: () => {
      u(), n.current && !n.current.pinned && h();
    },
    getTrigger: (w) => s.current.get(w) ?? null
  };
}, Oi = 264, Ai = 72, cn = 64, io = {
  "&:focus, &:focus-visible": { outline: "none" }
}, $i = 16, Mi = 14, Di = 4, Li = 2.5, ln = "0.7rem", dn = 22, un = pe(xr), lt = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
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
    const m = new ResizeObserver(() => u());
    return m.observe(l), () => m.disconnect();
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
}, Ni = ({
  open: e,
  size: o = $i
}) => e ? /* @__PURE__ */ t(Ds, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Ms, { sx: { fontSize: o, opacity: 0.75 } }), fn = ({ open: e }) => /* @__PURE__ */ t(
  Ls,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), ao = 600, ft = `${gr}px`, po = (Wt - de) / 2, ki = (e) => {
  const o = Math.max(0, e - po);
  return {
    pl: `${Math.max(0, po - o)}px`,
    pr: `${Math.max(0, po - e)}px`
  };
};
function Wi(e, o) {
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
const co = 8;
function Fi(e, o, r) {
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
      const m = n.getBoundingClientRect(), h = l.getBoundingClientRect();
      let g = 0;
      h.top < m.top + co ? g = h.top - m.top - co : h.bottom > m.bottom - co && (g = h.bottom - m.bottom + co), g !== 0 && n.scrollBy({ top: g, behavior: u });
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
  headerBackgroundColor: m,
  headerForegroundColor: h,
  brandColor: g,
  activeAccentColor: p = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: S,
  foregroundColor: _,
  surfaceBackgroundColor: w,
  flyoutSurfaceColor: y,
  collapsed: I = !1,
  expandedWidth: $ = Oi,
  collapsedWidth: E = Ai,
  showLabels: b = !1,
  topInsetPx: v = 0,
  topContent: T,
  footer: k,
  submenuMode: L = "inline"
}) => {
  var Le;
  const W = Pe(), C = W.palette.mode === "dark", O = d.useContext(So), D = L === "flyout" && I && !b, z = Ci(D), te = d.useRef(null), ue = d.useRef(null), Se = d.useRef(null);
  Fi(Se, r, I);
  const Ie = Wi(Se, D), _e = fi(D, C, ((Le = z.state) == null ? void 0 : Le.key) ?? null), B = Jn(te, {
    enabled: D,
    axis: "y",
    itemSelector: Zn,
    // The glyph alone, whatever draws it (an icon, an avatar, the brand's
    // logo image, Ask Nexa's own SVG): a count badge keeps its size and
    // place
    glyphSelector: '.MuiAvatar-root, [role="img"], svg'
  }), P = {
    ..._e.containerProps,
    ...B.containerProps,
    ...D ? {
      onScrollCapture: () => {
        var f, M;
        (M = (f = _e.containerProps).onScrollCapture) == null || M.call(f), B.settle();
      }
    } : {}
  }, J = hi({
    enabled: D,
    isDark: C,
    color: p,
    containerRef: ue
  }), { close: K } = z;
  d.useEffect(() => {
    K();
  }, [r, K]);
  const [V, fe] = d.useState(
    {}
  ), q = S ?? Xo(p), X = {
    bgcolor: p,
    color: q,
    "& .MuiListItemIcon-root": { color: q }
  }, wt = {
    bgcolor: p,
    color: q,
    borderRadius: "8px"
  }, ae = x ?? Ft(p), ze = w ?? (C ? W.palette.background.paper : "#ffffff"), he = _ ?? (C ? "text.primary" : p), Ye = m ?? ze, we = h ?? (m ? Xo(Ye) : _ ?? (C ? W.palette.text.primary : p)), Ge = Ft(we), se = (f) => {
    n == null || n(f);
  }, He = (f) => f ? {
    component: "a",
    href: f,
    onClick: (M) => {
      vt(M) && (M.preventDefault(), se(f));
    }
  } : {}, Me = (f, M) => {
    fe((G) => ({ ...G, [f]: !M }));
  }, De = (f, M) => V[M] ?? Qe(f, r), Ue = (f, M, G) => ({
    color: f ? q : he,
    bgcolor: f ? p : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? q : he,
      minWidth: G
    },
    "&:hover": f || b ? X : { bgcolor: M }
  }), qe = {
    "&.Mui-selected": {
      bgcolor: p
    },
    "&.Mui-selected:hover": X
  }, Io = (f) => {
    const M = ke(f, r), G = /* @__PURE__ */ R(
      ro,
      {
        disabled: !f.path,
        selected: M,
        ...He(f.path),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": M ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...f.action && { pr: 6 },
          ...f.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...Ue(
            M,
            ae,
            f.subtitle ? 48 : 36
          ),
          ...qe
        },
        children: [
          /* @__PURE__ */ t(be, { children: f.icon }),
          /* @__PURE__ */ t(
            Be,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                lt,
                {
                  text: f.text,
                  fontWeight: ao
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ t(
                A,
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
      return G;
    const { action: F } = f;
    return /* @__PURE__ */ R(A, { sx: { position: "relative" }, children: [
      G,
      /* @__PURE__ */ t(ve, { title: F.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        xe,
        {
          "aria-label": F.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            F.onClick(), s == null || s();
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
            borderColor: M ? "rgba(255, 255, 255, 0.35)" : ae,
            color: M ? q : he,
            "&:hover": {
              bgcolor: M ? "rgba(255, 255, 255, 0.15)" : ae
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: M ? q : he,
              outlineOffset: 1
            }
          },
          children: F.icon
        }
      ) })
    ] }, f.text);
  }, _o = (f) => {
    const M = Qe(f, r), G = ke(f, r), F = gt("", f), H = De(f, F);
    return /* @__PURE__ */ R(
      A,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: M ? ae : "transparent"
        },
        children: [
          /* @__PURE__ */ R(
            ro,
            {
              onClick: () => Me(F, H),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": G ? "true" : "false",
              "aria-expanded": H,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Ue(G, ae, 36)
              },
              children: [
                /* @__PURE__ */ t(be, { children: f.icon }),
                /* @__PURE__ */ t(
                  Be,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      lt,
                      {
                        text: f.text,
                        fontWeight: ao
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(fn, { open: H })
              ]
            }
          ),
          /* @__PURE__ */ t(Xr, { in: H, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            A,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (oe) => Et(oe, F, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, Et = (f, M, G) => {
    const F = gt(M, f), H = Di + (G - 1) * Li;
    if (bt(f)) {
      const re = Qe(f, r), ie = ke(f, r), Q = De(f, F);
      return /* @__PURE__ */ R(A, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ R(
          ro,
          {
            onClick: () => Me(F, Q),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": re ? "true" : "false",
            "aria-expanded": Q,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: H,
              ...Ue(ie, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(be, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                Be,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    lt,
                    {
                      text: f.text,
                      fontWeight: ao
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(fn, { open: Q })
            ]
          }
        ),
        /* @__PURE__ */ t(Xr, { in: Q, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(A, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (_t) => Et(_t, F, G + 1)
        ) }) })
      ] }, F);
    }
    const oe = ke(f, r);
    return /* @__PURE__ */ R(
      ro,
      {
        selected: oe,
        disabled: !f.path,
        ...He(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": oe ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: H,
          ...Ue(oe, "action.hover", 32),
          ...qe
        },
        children: [
          f.icon ? /* @__PURE__ */ t(be, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            Be,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                lt,
                {
                  text: f.text,
                  fontWeight: ao
                }
              )
            }
          )
        ]
      },
      F
    );
  }, Kt = (f, M, G, F, H, oe) => {
    const re = !H, ie = /* @__PURE__ */ R(
      xe,
      {
        "aria-label": M,
        disabled: re,
        ...He(H),
        onMouseEnter: D ? z.onRailLeafEnter : void 0,
        ...D ? { [zt]: "" } : {},
        "data-testid": (oe == null ? void 0 : oe.testId) ?? `sidebar-item-${M}`,
        "data-active": F ? "true" : "false",
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
          color: F ? q : he,
          bgcolor: F ? p : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: dn
          },
          "&:hover": wt,
          ...io
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: D ? de : 44,
          height: D ? de : 44,
          color: F ? q : he,
          bgcolor: F ? p : "transparent",
          borderRadius: F ? "8px" : "50%",
          "&:hover": {
            bgcolor: F ? p : oe != null && oe.insideGroup ? "action.hover" : ae,
            borderRadius: "8px"
          },
          ...io,
          ...D ? ut(F) : {}
        },
        children: [
          G,
          b ? /* @__PURE__ */ t(
            lt,
            {
              text: M,
              variant: "caption",
              center: !0,
              fontSize: ln
            }
          ) : null
        ]
      }
    );
    return b ? re ? /* @__PURE__ */ t("span", { children: ie }, f) : /* @__PURE__ */ t(d.Fragment, { children: ie }, f) : /* @__PURE__ */ t(
      ve,
      {
        title: M,
        placement: "right",
        arrow: !D,
        ...D ? Xt : {},
        children: re ? /* @__PURE__ */ t("span", { children: ie }) : ie
      },
      f
    );
  }, nt = {
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
  }, ut = (f) => ({
    borderRadius: `${Y}px`,
    "& .MuiSvgIcon-root": { fontSize: Bt },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${un.duration}ms ${un.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), Xt = {
    slotProps: {
      tooltip: { sx: pr(C, O) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, st = (f) => {
    var H;
    const M = Qe(f, r), G = gt("", f), F = ((H = z.state) == null ? void 0 : H.key) === G;
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
          xe,
          {
            ...z.triggerProps(G),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": F,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": M ? "true" : "false",
            "data-open": F ? "true" : "false",
            [zt]: "",
            sx: {
              position: "relative",
              width: de,
              height: de,
              color: M ? q : he,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: M ? p : "transparent",
              ...ut(M),
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
              ...io
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, Rt = (f) => {
    const M = Qe(f, r), G = ke(f, r), F = gt("", f), H = De(f, F), oe = /* @__PURE__ */ R(
      xe,
      {
        "aria-label": f.text,
        "aria-expanded": H,
        onClick: () => Me(F, H),
        "data-testid": `sidebar-item-${f.text}`,
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
          color: G ? q : he,
          bgcolor: G ? p : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": b ? { bgcolor: p, color: q } : {
            bgcolor: G ? p : "transparent"
          },
          ...io
        },
        children: [
          b ? /* @__PURE__ */ t(
            A,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: dn
                }
              },
              children: f.icon
            }
          ) : f.icon,
          b ? /* @__PURE__ */ t(
            lt,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: ln
            }
          ) : null,
          /* @__PURE__ */ t(Ni, { open: H, size: Mi })
        ]
      }
    ), re = b ? oe : /* @__PURE__ */ t(ve, { title: f.text, placement: "right", arrow: !0, children: oe });
    return /* @__PURE__ */ R(
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
          bgcolor: M ? ae : "transparent",
          ...b ? {} : { "&:hover": { bgcolor: ae } }
        },
        children: [
          re,
          H ? lr(f.subitems, f.icon).map(
            ({ sub: ie, icon: Q }) => Kt(
              ie.path,
              ie.text,
              Q,
              ke(ie, r),
              ie.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${ie.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, jt = (f) => /* @__PURE__ */ t(
    A,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Kt(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        ke(f, r),
        f.path,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), Vt = (f) => bt(f) ? D ? st(f) : I ? Rt(f) : _o(f) : I ? jt(f) : Io(f), Yt = (f) => /* @__PURE__ */ t(
    $e,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: I ? "center" : "stretch"
      },
      children: f.map(Vt)
    }
  ), it = I ? E : $, qt = () => {
    var re, ie;
    const { state: f } = z, M = f ? [...e, ...o].find(
      (Q) => bt(Q) && gt("", Q) === f.key
    ) ?? null : null, G = M ? ((re = te.current) == null ? void 0 : re.getBoundingClientRect().right) ?? E : E, F = M ? ((ie = te.current) == null ? void 0 : ie.closest("[data-rail-surface]")) ?? te.current : null, H = F == null ? void 0 : F.getBoundingClientRect(), oe = F && H ? {
      left: H.left,
      top: H.top,
      width: H.width,
      height: H.height,
      radius: parseFloat(
        getComputedStyle(F).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Ei,
      {
        group: M,
        groupKey: M ? f.key : null,
        anchor: M ? z.getTrigger(f.key) : null,
        railEdge: G,
        railShape: oe,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: se,
        onClose: z.close,
        panelProps: z.flyoutProps,
        accentColor: p,
        activeForegroundColor: q,
        solidSurface: y ?? ze
      }
    );
  }, Zt = l ? /* @__PURE__ */ t(
    A,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...D ? { pt: "12px", pb: "12px" } : {
          height: cn,
          minHeight: cn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: Ye
      },
      children: i || c ? /* @__PURE__ */ t(
        xo,
        {
          logo: i,
          title: I ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? we,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, ce = !l && i ? /* @__PURE__ */ t(
    A,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: D ? ft : 1
      },
      children: /* @__PURE__ */ t(
        xo,
        {
          logo: i,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? we,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, It = b ? 0.5 : D ? 0.75 : I ? 1 : 1.5;
  return /* @__PURE__ */ t(St.Provider, { value: D, children: /* @__PURE__ */ R(
    A,
    {
      ref: te,
      ...P,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": I ? "true" : "false",
      "data-labeled": b ? "true" : "false",
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
        ...D ? nt : {}
      },
      children: [
        _e.lens,
        Zt ?? ce,
        T ? /* @__PURE__ */ t(
          A,
          {
            sx: {
              flexShrink: 0,
              px: It,
              pt: D ? 0 : 1,
              pb: D ? 0 : 1
            },
            children: T
          }
        ) : null,
        /* @__PURE__ */ t(
          A,
          {
            ref: Se,
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
              ...D ? {
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
                width: D ? po : 8
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
              ...D ? ki(Ie) : { px: It },
              pt: v && !l ? `${v}px` : D ? ft : 1,
              pb: D ? ft : 2
            },
            children: /* @__PURE__ */ R(
              A,
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
                  Yt(e),
                  o.length > 0 ? /* @__PURE__ */ R(
                    A,
                    {
                      sx: { mt: "auto", pt: D ? ft : 2 },
                      children: [
                        k ? null : /* @__PURE__ */ t(
                          ot,
                          {
                            sx: {
                              mb: D ? ft : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        Yt(o)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        k ? /* @__PURE__ */ t(
          A,
          {
            sx: {
              flexShrink: 0,
              px: It,
              pb: 1.5,
              ...D ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: Bt
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              A,
              {
                sx: {
                  borderTop: `1px solid ${Ge}`,
                  pt: D ? ft : 1.5
                },
                children: k
              }
            )
          }
        ) : null,
        D ? qt() : null
      ]
    }
  ) });
}, Zo = "var(--lumora-content-padding, 0px)", pn = `calc(${Zo} * -1)`, Xc = ({
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
        mx: pn,
        mt: o ? pn : 0,
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
), Bi = ({ keys: e }) => /* @__PURE__ */ t(
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
}, rs = vo(), Oe = rs.typography.pxToRem, Sr = (e) => {
  const o = e === "dark", r = [...rs.shadows];
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
        contrastText: Re[50]
      },
      warning: o ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      error: o ? { light: mt[400], main: mt[500], dark: mt[700] } : { light: mt[300], main: mt[400], dark: mt[800] },
      success: o ? { light: pt[400], main: pt[500], dark: pt[700] } : { light: pt[300], main: pt[400], dark: pt[800] },
      grey: Re,
      divider: o ? We(Re[700], 0.6) : We(Re[300], 0.4),
      background: o ? { default: Re[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Re[400] } : { primary: Re[800], secondary: Re[600] },
      action: o ? {
        hover: We(Re[600], 0.2),
        selected: We(Re[600], 0.3)
      } : {
        hover: We(Re[200], 0.2),
        selected: We(Re[200], 0.3)
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
}, Pi = 6, zi = 8, hn = (e, o) => typeof e == "object" ? e[o] : e, Bo = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: c = !0,
  contentPadding: a = Un,
  sidebarBackgroundColor: u,
  contentBackgroundColor: l,
  content: m
}) => {
  const h = Dn(r.breakpoints.down("md")), g = e === "dark", p = Xn({
    showSidebar: c,
    isMobile: h,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), x = Eo(s, n) ? {
    gutterPx: dt,
    radiusPx: Hn
  } : void 0, S = fo, _ = jn(
    hn(u, e),
    g
  ), w = Vn(
    hn(l, e),
    g
  ), y = Kn(a, r), I = x ? /* @__PURE__ */ R(Lt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t(Ce, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Lt,
      {
        alignItems: "center",
        spacing: `${gr}px`,
        sx: { mt: 2 },
        children: Array.from({ length: zi }, ($, E) => /* @__PURE__ */ t(
          U,
          {
            sx: {
              width: de,
              height: de,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ t(
              Ce,
              {
                variant: "rounded",
                width: Bt,
                height: Bt
              }
            )
          },
          E
        ))
      }
    )
  ] }) : /* @__PURE__ */ R(Lt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(Ce, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(U, { sx: { height: 8 } }),
    Array.from({ length: Pi }, ($, E) => /* @__PURE__ */ t(Ce, { variant: "rounded", width: 28, height: 28 }, E))
  ] });
  return /* @__PURE__ */ t(go, { theme: o, children: /* @__PURE__ */ R(
    U,
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
          U,
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
              bgcolor: _,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(Ce, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(Ce, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(U, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(Ce, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !h && p > 0 && /* @__PURE__ */ t(
          U,
          {
            sx: {
              position: "relative",
              width: p,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              U,
              {
                sx: x ? {
                  position: "fixed",
                  top: x.gutterPx,
                  bottom: x.gutterPx,
                  left: x.gutterPx,
                  width: p - 2 * x.gutterPx,
                  borderRadius: `${x.radiusPx}px`,
                  bgcolor: _
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: p,
                  bgcolor: _
                },
                children: I
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          U,
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
            children: m ?? /* @__PURE__ */ R(Ae, { children: [
              /* @__PURE__ */ t(Ce, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(
                Ce,
                {
                  variant: "text",
                  width: 320,
                  sx: { mb: 3 }
                }
              ),
              /* @__PURE__ */ t(Lt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from(
                { length: h ? 2 : 4 },
                ($, E) => /* @__PURE__ */ t(
                  Ce,
                  {
                    variant: "rounded",
                    height: 96,
                    sx: { flex: 1 }
                  },
                  E
                )
              ) }),
              /* @__PURE__ */ t(Ce, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, Jo = vo(Sr("light")), ho = vo(Sr("dark")), Gi = (e) => e === "dark" ? ho : Jo, Hi = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = Mn();
  if (!o) {
    const i = Gi(e);
    return /* @__PURE__ */ R(go, { theme: i, children: [
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
  return /* @__PURE__ */ R(go, { theme: Jo, children: [
    /* @__PURE__ */ t(Uo, {}),
    /* @__PURE__ */ t(
      ks,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: ho.palette.background.default,
            color: ho.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(U, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ t(
      Bo,
      {
        themeMode: "light",
        muiTheme: Jo,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(U, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Bo,
      {
        themeMode: "dark",
        muiTheme: ho,
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
}, Ui = () => {
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
}, ns = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Gt = () => {
  try {
    Ui();
    const e = Po(le.ACCESS_TOKEN), o = Po(le.REFRESH_TOKEN), r = Po(le.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), ns(le.USER);
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
}, Ki = () => {
  try {
    const { accessToken: e, refreshToken: o } = Gt();
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
}, ss = (e, o, r = null) => {
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
}, Ht = () => {
  try {
    return [
      le.ACCESS_TOKEN,
      le.REFRESH_TOKEN,
      le.USER,
      // Also clear legacy keys for complete cleanup
      Ve.ACCESS_TOKEN,
      Ve.REFRESH_TOKEN,
      Ve.USER
    ].map((n) => ns(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
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
}, Xi = () => {
  try {
    const { user: e } = Gt();
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
}, jc = (e) => {
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
}, ji = (e) => {
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
      const { accessToken: a } = Gt();
      return a && c.headers && (c.headers.Authorization = `Bearer ${a}`), c;
    },
    (c) => Promise.reject(c)
  ), o.interceptors.response.use(
    (c) => c,
    async (c) => {
      var g;
      const a = c.config, u = (g = c.response) == null ? void 0 : g.status, l = (a == null ? void 0 : a.url) || "", m = l.includes("/auth/refresh");
      if (u !== 401 || a._retry || m)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: h } = Gt();
      if (!h) {
        const p = new Error(
          "No refresh token available for token refresh"
        );
        return Qo(p, "AxiosClient - Token Refresh"), Ht(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
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
                const _ = JSON.parse(
                  a.data || "{}"
                );
                _.refresh_token = S, a.data = JSON.stringify(_);
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
        if (ss(x, S, null), i(null, {
          accessToken: x,
          refreshToken: S
        }), a.headers && (a.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const _ = JSON.parse(
                a.data || "{}"
              );
              _.refresh_token = S, a.data = JSON.stringify(_);
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
        ), i(p), Ht(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(p);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Vi = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Gt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return ss(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      Qo(s, "TokenValidator - Refresh Failed");
    }
  return Ht(), o ? o() : window.location.href = "/login", !1;
}, kt = ({ size: e = 20 }) => /* @__PURE__ */ R(
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
), mn = pe(xr), je = "#09C1AE", mo = (e, o) => ({
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
}), Yi = (e) => ({
  ...mo(Y, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${Y - 2}px`,
    zIndex: 1,
    background: `${bo(je, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), gn = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = vr(), u = d.useContext(St), l = Pe().palette.mode === "dark", m = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", h = {
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
        ...n && mo(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(kt, { size: 20 }),
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
        s && /* @__PURE__ */ t(Bi, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && u && Ko ? /* @__PURE__ */ t(ve, { title: m, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    xe,
    {
      ...h,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: de,
        height: de,
        borderRadius: `${Y}px`,
        ...bo(je, l, "clear"),
        ...r && {
          boxShadow: `${bo(je, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${mn.duration}ms ${mn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [ye]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && Yi(l)
      },
      children: /* @__PURE__ */ t(kt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(ve, { title: m, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
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
        ...n && mo(8, "background.paper")
      },
      children: /* @__PURE__ */ t(kt, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ t(ve, { title: m, placement: "left", children: /* @__PURE__ */ t(
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
        ...n && mo(16, "background.paper")
      },
      children: /* @__PURE__ */ t(A, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(kt, { size: 26 }) })
    }
  ) });
}, lo = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ t(Fs, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ R(Bs, { children: [
  /* @__PURE__ */ t(Ps, { fontSize: "small" }),
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
    Ln,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Mt = 24, qi = 720, Zi = 1140, Ji = 1250, Qi = ({
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
  const m = d.useRef(!1);
  d.useEffect(() => {
    const S = requestAnimationFrame(() => {
      m.current = !0;
    });
    return () => cancelAnimationFrame(S);
  }, []), d.useEffect(() => {
    if (!e || !l)
      return;
    const S = (_) => {
      _.key === "Escape" && l();
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [e, l]);
  const h = r === "docked", g = Mt + c;
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
    bottom: g,
    ...n === "left" ? { left: i + Mt } : { right: Mt },
    width: s,
    maxWidth: `calc(100vw - ${Mt * 2}px)`,
    height: `min(${qi}px, calc(100vh - ${g + Mt}px))`,
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
        zIndex: h ? Zi : Ji,
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
    Gs,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...m.current ? {} : { timeout: { enter: 0 } },
      children: x
    }
  ) : /* @__PURE__ */ t(
    zs,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: x
    }
  );
}, ea = 180, xn = 250, ta = "#01584F", oa = ({
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
}, is = (e, o, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : o, c = e ? ta : o;
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
}, as = ({ link: e }) => /* @__PURE__ */ R($e, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    oa,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), cs = (e, o, r) => r ? e : /* @__PURE__ */ t(ve, { title: o, placement: "right", arrow: !0, children: e }), ra = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: c
}) => {
  const a = Pe(), [u, l] = d.useState(null), [m, h] = d.useState(!1), g = d.useRef(
    null
  ), p = d.useRef(null), x = d.useRef(null), S = d.useRef(!1), _ = d.useRef(!1), w = d.useId(), y = () => {
    g.current && (clearTimeout(g.current), g.current = null);
  }, I = () => {
    y(), g.current = setTimeout(() => {
      h(!1), g.current = null;
    }, ea);
  }, $ = () => {
    y(), h(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const L = (W) => {
      var C;
      W.key === "Escape" && (h(!1), (C = x.current) == null || C.focus());
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [m]), d.useEffect(() => {
    if (!m || !_.current)
      return;
    const L = globalThis.requestAnimationFrame(() => {
      var C;
      const W = (C = p.current) == null ? void 0 : C.querySelector(
        '[role="menuitem"]'
      );
      W == null || W.focus(), _.current = !1;
    });
    return () => cancelAnimationFrame(L);
  }, [m]);
  const E = Qe(e, o), { activeBg: b, sx: v } = is(
    s,
    n,
    E,
    c
  ), T = /* @__PURE__ */ t(
    xe,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        S.current || $();
      },
      onBlur: (L) => {
        var C;
        const W = L.relatedTarget;
        W && ((C = p.current) != null && C.contains(W)) || I();
      },
      onKeyDown: (L) => {
        L.key === "ArrowDown" && (L.preventDefault(), _.current = !0, $());
      },
      onClick: (L) => {
        L.stopPropagation(), !(e.path && !vt(L)) && (L.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? w : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: v,
      children: c ? /* @__PURE__ */ t(as, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ R(
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
              S.current = !0, $();
            },
            onMouseLeave: () => {
              S.current = !1, I();
            },
            children: cs(T, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          nr,
          {
            open: m && !!u,
            anchorEl: u,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (L) => L.zIndex.modal },
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
                  maxWidth: xn,
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
                      maxWidth: xn
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
  function k(L, W, C) {
    return L.flatMap((O) => {
      const D = gt(W, O);
      return bt(O) ? [
        /* @__PURE__ */ t(
          Hs,
          {
            disableSticky: !0,
            title: O.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + C * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: O.text
          },
          D
        ),
        ...k(O.subitems, D, C + 1)
      ] : [
        /* @__PURE__ */ R(
          tt,
          {
            role: "menuitem",
            title: O.text,
            disabled: !O.path,
            selected: ke(O, o),
            ...O.path && { component: "a", href: O.path },
            onClick: (z) => {
              O.path && !vt(z) || (z.preventDefault(), O.path && (r == null || r(O.path)), h(!1));
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + C * 1.5,
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
              O.icon ? /* @__PURE__ */ t(be, { children: O.icon }) : null,
              /* @__PURE__ */ t(
                Be,
                {
                  primary: O.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          D
        )
      ];
    });
  }
}, na = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = is(
    s,
    n,
    c,
    i
  );
  return cs(
    /* @__PURE__ */ t(
      xe,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !vt(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: a,
        children: i ? /* @__PURE__ */ t(as, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, sa = () => /* @__PURE__ */ t(
  A,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), ia = () => /* @__PURE__ */ t(
  A,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), bn = (e, o) => e.map((r, n) => /* @__PURE__ */ R(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(sa, {}) : null
] }, n)), aa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: c = !1
}) => {
  const a = (l, m) => bt(l) ? /* @__PURE__ */ t(
    ra,
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
    na,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: m,
      railShowTitles: c
    }
  ), u = c ? 1.25 : 1;
  return /* @__PURE__ */ R(
    $e,
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
        bn(e, (l) => a(l, !1)),
        o.length > 0 ? /* @__PURE__ */ R(Ae, { children: [
          /* @__PURE__ */ t(ia, {}),
          /* @__PURE__ */ t(A, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t($e, { gap: u, alignItems: "center", children: bn(
            o,
            (l) => a(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, ca = (e) => e ? Bn(e) : "USER", la = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), vn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, er = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, wr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
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
    children: la(e)
  }
), ls = ({ name: e, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ R(Ae, { children: [
  /* @__PURE__ */ t(wr, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ R(
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
            sx: { ...vn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ne,
          {
            variant: "caption",
            sx: { ...vn, opacity: 0.8, color: "inherit" },
            children: ca(o)
          }
        )
      ]
    }
  )
] }), yn = {
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
}, ds = ({
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
  userAvatar: m,
  menuItems: h = [],
  showSettings: g,
  onSettingsClick: p,
  showThemeToggler: x,
  theme: S,
  onThemeToggle: _,
  onLogout: w
}) => {
  const y = (I) => () => {
    o(), I == null || I();
  };
  return /* @__PURE__ */ R(
    Xs,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: yn[r].anchor,
      transformOrigin: yn[r].transform,
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
          $e,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              ls,
              {
                name: u,
                role: l,
                avatar: m,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(ot, {}),
        i && /* @__PURE__ */ R(tt, { onClick: y(a), children: [
          /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(Wn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Be, { children: "Notifications" }),
          /* @__PURE__ */ t(er, { count: c })
        ] }),
        h.map((I) => /* @__PURE__ */ R(tt, { onClick: y(I.onClick), children: [
          I.icon && /* @__PURE__ */ t(be, { children: I.icon }),
          /* @__PURE__ */ t(Be, { inset: !I.icon, children: I.label }),
          /* @__PURE__ */ t(er, { count: I.badge })
        ] }, I.key)),
        g && /* @__PURE__ */ R(tt, { onClick: y(p), children: [
          /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(Us, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Be, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(ot, {}, "theme-divider"),
          /* @__PURE__ */ R(A, { sx: { px: 1.5, py: 1 }, children: [
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
            /* @__PURE__ */ R(
              js,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: S,
                onChange: (I, $) => $ && $ !== S && (_ == null ? void 0 : _()),
                disabled: !_,
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
              /* @__PURE__ */ t(be, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(kn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Be, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, us = 64, da = 2, Dt = ({
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
  href: m,
  testId: h
}) => /* @__PURE__ */ R(
  rt,
  {
    ...m && { component: "a", href: m },
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
), ua = ({
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
  activeColor: m,
  activeBackground: h,
  pinnedLinks: g = [],
  activePath: p,
  onLinkClick: x,
  ...S
}) => {
  const _ = g.filter((v) => v.path).slice(0, da), [w, y] = d.useState(
    null
  ), { userName: I = "User", userAvatar: $, avatarColor: E } = S, b = { color: l, activeColor: m, activeBackground: h };
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
        height: `calc(${us}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: u,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Dt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Nn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...b
          }
        ),
        _.map((v) => /* @__PURE__ */ t(
          Dt,
          {
            label: v.text,
            icon: v.icon,
            href: v.path,
            onClick: (T) => {
              vt(T) && (T.preventDefault(), x == null || x(v.path));
            },
            active: Qe(v, p),
            isPage: !0,
            testId: `mobile-nav-link-${v.text}`,
            ...b
          },
          v.path
        )),
        s && /* @__PURE__ */ t(
          Dt,
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
                children: /* @__PURE__ */ t(kt, { size: 18 })
              }
            ),
            onClick: i,
            active: c,
            testId: "mobile-nav-nexa",
            ...b
          }
        ),
        r && /* @__PURE__ */ t(
          Dt,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(ar, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...b
          }
        ),
        a && /* @__PURE__ */ R(Ae, { children: [
          /* @__PURE__ */ t(
            Dt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${I}`,
              icon: /* @__PURE__ */ t(
                wr,
                {
                  name: I,
                  avatar: $,
                  color: E,
                  size: 26
                }
              ),
              onClick: (v) => y(v.currentTarget),
              active: !!w,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...b
            }
          ),
          /* @__PURE__ */ t(
            ds,
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
}, fa = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Vs,
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
      $e,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(A, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
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
), pa = ({
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
  Ys,
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
    children: /* @__PURE__ */ R(qs, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        xe,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(Nn, {})
        }
      ),
      /* @__PURE__ */ t(
        xo,
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
), Er = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const c = vr(), a = d.useContext(St), u = e ? `Notifications, ${e} unread` : "Notifications";
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
              children: /* @__PURE__ */ t(Wn, {})
            }
          )
        }
      )
    }
  );
}, Sn = 14, ha = 18, ma = "blur(12px) saturate(180%) brightness(1.04)", ga = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), xa = (e, o, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / o), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, ba = 140, wn = 0.22, va = 0.14, ya = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var p;
      const g = e.current;
      g && (g.style.setProperty("--lx", `${i.x.toFixed(1)}px`), g.style.setProperty("--ly", `${i.y.toFixed(1)}px`), g.style.setProperty("--li", i.i.toFixed(3)), (p = n.current) == null || p.call(n, i.x, i.y, i.i));
    }, u = () => {
      i.x += (s.x - i.x) * wn, i.y += (s.y - i.y) * wn, i.i += (s.i - i.i) * va;
      const g = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      g && (i.x = s.x, i.y = s.y, i.i = s.i), a(), c = g ? 0 : requestAnimationFrame(u);
    }, l = () => {
      c || (c = requestAnimationFrame(u));
    }, m = (g) => {
      const p = e.current;
      if (g.pointerType === "touch" || !p)
        return;
      const x = p.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      s.x = (g.clientX - x.left) * p.offsetWidth / x.width, s.y = (g.clientY - x.top) * p.offsetHeight / x.height;
      const S = Math.max(
        x.left - g.clientX,
        0,
        g.clientX - x.right
      ), _ = Math.max(
        x.top - g.clientY,
        0,
        g.clientY - x.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(S, _) / ba), i.i < 0.01 && (i.x = s.x, i.y = s.y), l();
    }, h = () => {
      s.i = 0, l();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", h), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", h);
    };
  }, [e, o]);
}, Ut = d.forwardRef(
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
    ya(u, i && Ko, c);
    const m = wo(), h = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [g, p] = d.useState(null), x = d.useRef(null), S = d.useCallback(
      (y) => {
        var $;
        if (u.current = y, typeof a == "function" ? a(y) : a && (a.current = y), ($ = x.current) == null || $.disconnect(), x.current = null, !y || !l || !ga || typeof ResizeObserver > "u")
          return;
        const I = () => {
          const E = y.offsetWidth, b = y.offsetHeight;
          p(
            (v) => (v == null ? void 0 : v.width) === E && v.height === b ? v : E && b ? { width: E, height: b } : null
          );
        };
        x.current = new ResizeObserver(I), x.current.observe(y), I();
      },
      [a, l]
    ), _ = d.useMemo(
      () => g ? xa(g.width, g.height, Sn) : null,
      [g]
    ), w = l && !!(_ && g);
    return /* @__PURE__ */ R(Ae, { children: [
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
                    stdDeviation: Sn / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: ha,
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
          ref: S,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": w ? "true" : void 0,
          sx: [
            ri(e, o, m),
            w ? {
              backdropFilter: `url(#${h}) ${ma}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
Ut.displayName = "GlassLayer";
const fs = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Sa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, En = pe(qn), Rn = pe(Ro), In = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', wa = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = Pe().palette.mode === "dark", c = wo(), a = d.useRef(null), u = d.useRef(null), l = (g) => {
    var p;
    g !== e && (o == null || o()), (p = (g === "light" ? a : u).current) == null || p.focus();
  }, m = (g) => {
    if (!(g.key === "Tab" || g.key === "Escape"))
      switch (g.stopPropagation(), g.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          g.preventDefault(), l(e === "light" ? "dark" : "light");
          break;
        case "Home":
          g.preventDefault(), l("light");
          break;
        case "End":
          g.preventDefault(), l("dark");
          break;
      }
  }, h = (g, p, x, S) => {
    const _ = e === g;
    return /* @__PURE__ */ t(
      rt,
      {
        ref: S,
        role: "radio",
        "aria-checked": _,
        "aria-label": p,
        tabIndex: _ ? 0 : -1,
        onClick: () => l(g),
        "data-testid": `theme-segment-${g}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${Y}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: _ ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: _ ? n : "transparent",
          ...s && _ ? zn(i, c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": _ ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: i ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${We(r, 0.6)}`
          },
          ...fs
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ R(
    $e,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: m,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${Y}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        h("light", "Light", Js, a),
        h("dark", "Dark", Zs, u)
      ]
    }
  );
}, Ea = ({
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
  showThemeToggler: m,
  theme: h,
  onThemeToggle: g,
  onProfileClick: p,
  onLinkClick: x,
  menuItems: S = [],
  onLogout: _,
  glass: w = !1
}) => {
  const y = Pe(), I = y.palette.mode === "dark", $ = d.useRef(null), E = fr(y.palette.background.paper), b = yr({
    enabled: w,
    isDark: I,
    selector: In,
    radius: Y
  }), [v, T] = d.useState(null);
  d.useEffect(() => {
    if (!v || typeof ResizeObserver > "u")
      return;
    const O = new ResizeObserver(() => {
      var D;
      (D = $.current) == null || D.updatePosition();
    });
    return O.observe(v), () => O.disconnect();
  }, [v]);
  const k = (O) => {
    r(), O == null || O();
  }, L = (O) => {
    r(), O.onClick ? O.onClick() : O.path && (x == null || x(O.path));
  }, W = {
    borderRadius: w ? `${Y}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, C = /* @__PURE__ */ R($e, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ R(A, { sx: { minWidth: 0, flex: 1 }, children: [
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
      p ? /* @__PURE__ */ t(
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
      action: $,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...w ? {
        slots: { transition: rr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: T,
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
        A,
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
            [`& :is(${In}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Sa, width: n, minWidth: n },
          children: [
            w ? /* @__PURE__ */ t(
              Ut,
              {
                isDark: I,
                solid: E,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${hr} ${En.duration}ms ${En.easing} both`,
                  [ye]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ R(
              A,
              {
                ...b.containerProps,
                sx: w ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${mr} ${Rn.duration}ms ${Rn.easing} 70ms both`,
                  [ye]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  b.lens,
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
                        ...fs
                      },
                      children: C
                    }
                  ) : /* @__PURE__ */ t(A, { "data-testid": "account-menu-header", children: C }),
                  /* @__PURE__ */ t(ot, {}),
                  m ? /* @__PURE__ */ R(
                    A,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...W,
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
                        /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(Qs, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ne, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          wa,
                          {
                            glass: w,
                            mode: h,
                            onToggle: g,
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
                      sx: { px: 0.5, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        S.map((O) => /* @__PURE__ */ R(
                          tt,
                          {
                            onClick: () => L(O),
                            "data-testid": `menu-item-${O.key}`,
                            sx: W,
                            children: [
                              /* @__PURE__ */ t(be, { children: O.icon }),
                              /* @__PURE__ */ t(ne, { sx: { flex: 1 }, children: O.label }),
                              /* @__PURE__ */ t(er, { count: O.badge })
                            ]
                          },
                          O.key
                        )),
                        _ ? /* @__PURE__ */ t(ot, { component: "li", sx: { my: 0.5 } }) : null,
                        _ ? /* @__PURE__ */ R(
                          tt,
                          {
                            onClick: () => k(_),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...W,
                              color: I ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(be, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(kn, { fontSize: "small" }) }),
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
}, Ra = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ia = ({
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
  headerForegroundColor: m,
  activeAccentColor: h = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: p,
  foregroundColor: x,
  surfaceBackgroundColor: S,
  flyoutSurfaceColor: _,
  collapsed: w,
  expandedWidth: y,
  collapsedWidth: I,
  topContent: $,
  submenuMode: E,
  color: b,
  hoverColor: v,
  avatarColor: T,
  showProfile: k = !0,
  userName: L = "User",
  userEmail: W,
  userRole: C,
  userAvatar: O,
  showNotifications: D = !0,
  notificationCount: z = 0,
  onNotificationsClick: te,
  whatsNewCount: ue = 0,
  onProfileClick: Se,
  menuItems: Ie,
  onLogout: _e,
  theme: B = "light",
  showThemeToggler: P = !0,
  onThemeToggle: J
}) => {
  const K = Pe(), V = K.palette.mode === "dark", fe = S ?? (V ? K.palette.background.paper : "#ffffff"), q = b ?? x ?? (V ? K.palette.text.primary : h), X = v ?? g ?? Ft(h), wt = T ?? h, ae = d.useRef(null), [ze, he] = d.useState(!1), Ye = C ? Bn(C) : void 0, we = (qe) => /* @__PURE__ */ t(
    wr,
    {
      name: L,
      avatar: O,
      color: wt,
      size: qe
    }
  ), Ge = z + ue, se = w && E === "flyout", He = D ? /* @__PURE__ */ t(
    Er,
    {
      count: Ge,
      onClick: te,
      color: q,
      hoverColor: X,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Me = k ? /* @__PURE__ */ R(
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
        p: se ? "4px" : 0.75,
        borderRadius: "10px",
        bgcolor: ze ? X : "transparent",
        "&:hover": { bgcolor: X },
        ...Ra
      },
      children: [
        w && !se && D ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Fn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Ge,
              children: we(36)
            }
          )
        ) : we(w ? 36 : 40),
        w ? null : /* @__PURE__ */ R(A, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ne,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: q, lineHeight: 1.3 },
              children: L
            }
          ),
          Ye ? /* @__PURE__ */ t(
            ne,
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
  ) : null, De = !!He && (!w || se || !Me);
  return /* @__PURE__ */ R(
    A,
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
            headerForegroundColor: m,
            activeAccentColor: h,
            groupAccentColor: g,
            activeForegroundColor: p,
            foregroundColor: x,
            surfaceBackgroundColor: fe,
            flyoutSurfaceColor: _,
            collapsed: w,
            expandedWidth: y,
            collapsedWidth: I,
            topContent: $,
            footer: Me || De ? /* @__PURE__ */ R(
              $e,
              {
                direction: se ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  se && De ? He : null,
                  Me,
                  !se && De ? He : null
                ]
              }
            ) : void 0,
            submenuMode: E
          }
        ),
        k ? /* @__PURE__ */ t(
          Ea,
          {
            open: ze,
            anchorEl: ae.current,
            onClose: () => he(!1),
            width: Math.max(y - 16, 240),
            renderAvatar: we,
            userName: L,
            userEmail: W,
            roleLabel: Ye,
            accentColor: h,
            tint: X,
            showThemeToggler: P,
            theme: B,
            onThemeToggle: J,
            onProfileClick: Se,
            onLinkClick: n,
            menuItems: Ie,
            onLogout: _e,
            glass: E === "flyout"
          }
        ) : null
      ]
    }
  );
}, _n = pe(qn), Tn = pe(Ro), Cn = 240, _a = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Ta = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: c = !1
}) => {
  const a = Pe(), u = a.palette.mode === "dark", l = !!e, m = fr(a.palette.background.paper), h = yr({
    enabled: c,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: Y
  }), g = /* @__PURE__ */ t(
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
                A,
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
                Be,
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
                ei,
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
        A,
        {
          "data-testid": "platform-menu",
          "data-glass": c ? "true" : void 0,
          sx: c ? {
            position: "relative",
            minWidth: Cn,
            borderRadius: `${Y}px`
          } : { ..._a, minWidth: Cn },
          children: c ? /* @__PURE__ */ R(Ae, { children: [
            /* @__PURE__ */ t(
              Ut,
              {
                isDark: u,
                solid: m,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${hr} ${_n.duration}ms ${_n.easing} both`,
                  [ye]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ R(
              A,
              {
                ...h.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${mr} ${Tn.duration}ms ${Tn.easing} 70ms both`,
                  [ye]: { animation: "none" }
                },
                children: [
                  h.lens,
                  g
                ]
              }
            )
          ] }) : g
        }
      )
    }
  );
}, Ca = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), s = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ R(
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
          Ta,
          {
            ...r,
            anchorEl: s ? o : null
          }
        )
      ]
    }
  );
}, Oa = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var $;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: u,
    onNotificationsClick: l,
    userName: m = "User",
    userRole: h,
    userAvatar: g
  } = i, p = d.useRef(null), [x, S] = d.useState(
    null
  ), _ = !!x, w = d.useRef(e);
  d.useEffect(() => {
    e && !w.current && S(null), w.current = e;
  }, [e]);
  const y = d.useContext(St);
  if (!a && !n)
    return null;
  const I = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ R(Ae, { children: [
    /* @__PURE__ */ R(
      $e,
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
              title: e ? m : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                rt,
                {
                  onClick: () => S(p.current),
                  "aria-label": `Account menu for ${m}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": _,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? y ? "4px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: _ ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...I
                  },
                  children: /* @__PURE__ */ t(
                    ls,
                    {
                      name: m,
                      role: h,
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
      ds,
      {
        anchorEl: x,
        onClose: () => S(null),
        placement: e ? "beside" : "above",
        width: e || ($ = p.current) == null ? void 0 : $.clientWidth,
        ...i
      }
    )
  ] });
}, Aa = 120, $a = 300, On = pe(Yn), An = pe(Ro), Ma = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Da = 'input, textarea, [contenteditable="true"]', tr = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Da)) == null || o.focus();
}, La = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: s,
  color: i,
  hoverColor: c
}) => {
  const a = vr(), u = d.useContext(St), l = d.useRef(null), [m, h] = d.useState(null);
  return d.useEffect(() => {
    o === "full" && n && (tr(l.current), s == null || s());
  }, [o, n, s]), o === "full" ? /* @__PURE__ */ t(
    A,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && u ? /* @__PURE__ */ t(
    Na,
    {
      search: e,
      color: i,
      railTooltip: a
    }
  ) : /* @__PURE__ */ R(
    A,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(ve, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          xe,
          {
            "aria-label": "Search",
            onClick: (g) => o === "expand" ? r == null ? void 0 : r() : h(g.currentTarget),
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
            open: !!m,
            anchorEl: m,
            onClose: () => h(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (g) => tr(g)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, Na = ({ search: e, color: o, railTooltip: r }) => {
  const n = Pe().palette.mode === "dark";
  ni(n, jo(o, n ? 0.3 : 0.35));
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
  }, a = d.useRef(null), u = d.useRef(null), [l, m] = d.useState(!1), h = d.useRef(!1), g = d.useRef(void 0), p = d.useRef(void 0), x = () => {
    clearTimeout(g.current), clearTimeout(p.current);
  }, S = d.useCallback(() => {
    x(), h.current = !1, m(!1);
  }, []), _ = () => {
    clearTimeout(p.current), l || (clearTimeout(g.current), g.current = setTimeout(
      () => m(!0),
      Aa
    ));
  }, w = () => {
    clearTimeout(g.current), clearTimeout(p.current), p.current = setTimeout(() => {
      !h.current && !Ma(u.current) && m(!1);
    }, $a);
  };
  return d.useEffect(() => x, []), d.useEffect(() => {
    if (!l)
      return;
    const y = setTimeout(() => tr(u.current)), I = (E) => {
      var v, T;
      const b = E.target;
      !((v = u.current) != null && v.contains(b)) && !((T = a.current) != null && T.contains(b)) && S();
    }, $ = (E) => {
      var b;
      E.key === "Escape" && (S(), (b = a.current) == null || b.focus());
    };
    return document.addEventListener("pointerdown", I), document.addEventListener("keydown", $), () => {
      clearTimeout(y), document.removeEventListener("pointerdown", I), document.removeEventListener("keydown", $);
    };
  }, [l, S]), /* @__PURE__ */ R(
    A,
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
                onMouseEnter: _,
                onMouseLeave: w,
                onClick: () => {
                  x(), h.current = !0, m(!0);
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
                    sx: { fontSize: Bt }
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
              A,
              {
                ref: u,
                "data-testid": "sidebar-search-card",
                onMouseEnter: _,
                onMouseLeave: w,
                sx: {
                  position: "relative",
                  width: 320,
                  p: 1,
                  borderRadius: `${Y}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    Ut,
                    {
                      isDark: n,
                      solid: i,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${hr} ${On.duration}ms ${On.easing} both`,
                        [ye]: { animation: "none" }
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
                        ...c,
                        animation: `${mr} ${An.duration}ms ${An.easing} 60ms both`,
                        [ye]: { animation: "none" }
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
}, ka = 80, Wa = 300, Fa = 32, Ba = (e) => {
  const o = d.useRef(/* @__PURE__ */ new WeakSet()), r = d.useRef(void 0), n = d.useRef(void 0), [s, i] = d.useState(!1), [c, a] = d.useState(!1), [u, l] = d.useState(!1), m = d.useRef(null), h = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  d.useEffect(() => {
    if (!e) {
      h(), i(!1), a(!1), l(!1);
      return;
    }
    const x = (y) => {
      var $;
      if (y.pointerType !== "mouse")
        return;
      const I = y.clientX <= Fa;
      I && (($ = m.current) == null || $.style.setProperty(
        "--edge-glow-y",
        `${y.clientY}px`
      )), l(I);
    }, S = () => l(!1), _ = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), a(!1);
      }, Wa));
    }, w = (y) => {
      o.current.has(y) || _();
    };
    return document.addEventListener("mouseover", w), document.addEventListener("pointermove", x, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", _), document.documentElement.addEventListener("mouseleave", S), () => {
      h(), document.removeEventListener("mouseover", w), document.removeEventListener("pointermove", x), document.documentElement.removeEventListener(
        "mouseleave",
        _
      ), document.documentElement.removeEventListener(
        "mouseleave",
        S
      );
    };
  }, [e]);
  const g = {
    onMouseOver: (x) => {
      o.current.add(x.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, ka));
    },
    onFocus: (x) => {
      Pa(x.target) && a(!0);
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
    glowRef: m,
    rootProps: g
  };
}, Pa = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, za = 100, Ga = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = d.useState(!1), [i, c] = d.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const l = (h) => {
      r.current.has(h) || (a(), s(!1));
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
      var h;
      (h = e.current) != null && h.contains(m.target) || c(!1);
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
        }, za));
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
}, Ha = 300, Go = 288, Ua = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Ka = 6, $n = 72, Ho = 90, Xa = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", ja = 68, Va = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Ya = typeof window > "u" ? uo : Ns, Vc = ({
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
  mobileBottomBarLinks: m,
  logo: h,
  onBrandClick: g,
  searchComponent: p,
  brandColor: x,
  contentPadding: S = Un,
  userMenuItems: _,
  sidebarBackgroundColor: w,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: I,
  activeSidebarForegroundColor: $,
  enableRefreshToken: E = !1,
  holdSessionSkeleton: b = !1,
  sessionSkeletonContent: v,
  activePath: T,
  onLinkClick: k,
  showProfile: L = !0,
  userName: W,
  userRole: C,
  userAvatar: O,
  userEmail: D,
  onLogout: z,
  showSettings: te = !0,
  onSettingsClick: ue,
  onProfileClick: Se,
  showNotifications: Ie = !0,
  notificationCount: _e = 0,
  NotificationSidebarContent: B,
  whatsNewCount: P = 0,
  onNotificationsClick: J,
  platforms: K,
  currentPlatformKey: V,
  onPlatformSelect: fe,
  onVerify: q,
  alertProps: X,
  style: wt,
  sidebarStyles: ae,
  contentStyles: ze,
  accentColor: he,
  sidebarAccentColor: Ye,
  sidebarForegroundColor: we,
  contentBackgroundColor: Ge,
  theme: se = "light",
  darkModeSelector: He,
  showThemeToggler: Me = !1,
  onThemeToggle: De,
  GlobalChatSidebar: Ue,
  useChatSidebar: qe,
  chatPanelMode: Io = "docked",
  chatPanelPosition: _o = "right",
  chatPanelWidth: Et = 420,
  onChatClose: Kt,
  showAssistant: nt = !1,
  assistantPlacement: ut = "sidebar",
  assistantShortcut: Xt = "j",
  onAssistantClick: st,
  assistantActive: Rt = !1,
  assistantBusy: jt = !1,
  customNavbar: Vt,
  customNavbarProps: Yt,
  redirectToLogin: it,
  apiBaseUrl: qt
}) => {
  const Zt = Mn(), ce = Dn(Zt.breakpoints.down("md")), It = jr(
    () => vo(Sr(se)),
    [se]
  ), Le = se === "dark", f = he ?? "#01584f", M = Ye ?? f, G = Vn(
    typeof Ge == "object" ? Ge[se] : Ge,
    Le
  ), F = c === "collapsible", H = c === "panel", oe = H && s && !ce, re = c === "rail-labeled", ie = F || re, Q = jn(
    w,
    Le
  ), _t = y ?? Q, me = we ?? (Le ? "#ffffff" : M), Tt = I ?? Ft(me), Ct = y ? Xo(_t) : me, Rr = (N) => /* @__PURE__ */ t(
    U,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: N,
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
  ), Jt = x ?? Ct, [Ir, To] = ct(
    null
  ), Co = ((K == null ? void 0 : K.length) ?? 0) > 1, ps = Vr(() => To(null), []), hs = (N) => {
    To(null), fe ? fe(N) : N.key !== V && N.url && window.location.assign(N.url);
  }, _r = (N) => Co ? /* @__PURE__ */ t(
    Ca,
    {
      anchorEl: Ir,
      onClose: ps,
      platforms: K,
      currentKey: V,
      onSelect: hs,
      accentColor: f,
      glass: a === "flyout" && (F || H) && !ce,
      children: N
    }
  ) : N, Qt = Co ? (N) => To(N.currentTarget) : g, eo = Co ? !!Ir : void 0, Oo = _r(
    h ?? Rr(Jt)
  ), ms = _r(
    h ?? Rr(x ?? me)
  ), Ao = Ga(), Te = Eo(a, c), Ne = Te || !Ao.expanded, Ze = s && !ce && ii(u, a, c), Je = Ba(Ze), Tr = Te ? "popover" : "expand", Cr = Te ? Wt : Nt, Or = Te ? "transparent" : Q, Ar = Te && !y ? "transparent" : _t, [gs, $r] = ct(!1), xs = Vr(() => $r(!1), []), Ke = Xn({
    showSidebar: s,
    isMobile: ce,
    sidebarVariant: c,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [Mr, at] = ct(!1), [Dr, $o] = ct(!1), ge = ce && l === "bottom-bar", Lr = `calc(${us}px + env(safe-area-inset-bottom, 0px))`, [Mo, Nr] = ct({ open: !1, tab: "notifications" }), kr = () => Nr((N) => ({ ...N, open: !1 })), bs = Ie && !!B, [vs, ys] = ct(!0), [Ss, ws] = ct(!1), Do = qe == null ? void 0 : qe(), Wr = (Do == null ? void 0 : Do.isOpen) ?? !1, Fr = Io === "floating" ? "floating" : "docked", Es = Fr === "docked" && Wr && Ue && !ce ? Et : 0, to = Fo(q), Br = Fo(!1), Pr = jr(
    () => ji(qt),
    [qt]
  );
  uo(() => {
    to.current = q;
  }, [q]);
  const Lo = Fo(st);
  Lo.current = st;
  const Ot = nt && Xt ? Xt.toLowerCase() : null;
  uo(() => {
    if (!Ot)
      return;
    const N = (ee) => {
      (ee.metaKey || ee.ctrlKey) && !ee.altKey && !ee.shiftKey && ee.key.toLowerCase() === Ot && Lo.current && (ee.preventDefault(), Lo.current());
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [Ot]);
  const zr = (N) => {
    const ee = z(N);
    ee instanceof Promise && ee.catch((Xe) => {
      console.error("Error in logout handler:", Xe);
    });
  };
  if (Ya(() => {
    (() => {
      var ee;
      try {
        const { isAuthenticated: Xe } = Ki();
        if (!Xe) {
          console.log("No session found, redirecting to login"), Ht(), it();
          return;
        }
        if (!Br.current) {
          const { user: $t, error: Wo } = Xi();
          if ($t && !Wo) {
            const $s = {
              name: $t.name || "",
              email: $t.email || "",
              profilePicture: $t.profilePicture || "",
              role: $t.role || ""
            };
            Br.current = !0, (ee = to.current) == null || ee.call(to, $s);
          } else
            Wo && console.error("Error getting user data:", Wo);
        }
        ws(!0);
      } catch (Xe) {
        console.error("Error checking session:", Xe), Ht(), it();
      } finally {
        ys(!1);
      }
    })();
  }, [it]), uo(() => {
    E && Vi(Pr, it);
  }, [E, Pr]), vs || b)
    return /* @__PURE__ */ t(
      Hi,
      {
        theme: se,
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
  if (!Ss)
    return null;
  const At = p ?? (Vt ? /* @__PURE__ */ t(Vt, { ...Yt }) : null), Rs = (N) => {
    at(!1), $o(!1), Nr({ open: !0, tab: N });
  }, No = B && (() => Rs("notifications")), Is = _e + P, Gr = {
    avatarColor: M,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: _ == null ? void 0 : _.map(
      (N) => N.onClick || !N.path ? N : { ...N, onClick: () => k == null ? void 0 : k(N.path) }
    ),
    showNotifications: Ie,
    notificationCount: _e,
    whatsNewCount: P,
    onNotificationsClick: No,
    showProfile: L,
    userName: W,
    userRole: C,
    userAvatar: O,
    showSettings: te,
    onSettingsClick: ue,
    showThemeToggler: Me,
    theme: se,
    onThemeToggle: De,
    onLogout: zr
  }, ko = (N) => /* @__PURE__ */ t(
    Oa,
    {
      ...Gr,
      compact: N,
      color: me,
      hoverColor: Tt
    }
  ), Hr = Ot ? [Va() ? "⌘" : "Ctrl", Ot.toUpperCase()] : void 0, _s = (N) => nt && ut === "sidebar" ? /* @__PURE__ */ t(
    gn,
    {
      variant: N ? "sidebar-icon" : "sidebar",
      onClick: st,
      active: Rt,
      busy: jt,
      shortcutKeys: Hr,
      accentColor: me
    }
  ) : null, Ts = (N) => At ? /* @__PURE__ */ t(
    La,
    {
      search: At,
      mode: N,
      onExpand: () => {
        Ao.pin(), $r(!0);
      },
      autoFocus: gs,
      onAutoFocused: xs,
      color: me,
      hoverColor: Tt
    }
  ) : null, oo = (N) => {
    const ee = _s(N !== "full"), Xe = Ts(N);
    return ee || Xe ? /* @__PURE__ */ R(
      Lt,
      {
        spacing: Te ? `${gr}px` : 1.5,
        sx: { alignItems: N === "full" ? "stretch" : "center" },
        children: [
          ee,
          Te && ee && Xe ? /* @__PURE__ */ t(
            U,
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
      activePath: T,
      onLinkClick: k,
      showHeaderBar: F,
      logo: Oo,
      title: n,
      onBrandClick: Qt,
      brandMenuOpen: eo,
      brandColor: Jt,
      headerBackgroundColor: F ? Ar : void 0,
      headerForegroundColor: F ? Ct : void 0,
      activeAccentColor: M,
      groupAccentColor: I,
      activeForegroundColor: $,
      foregroundColor: we,
      surfaceBackgroundColor: Or,
      flyoutSurfaceColor: Q,
      collapsed: re || Ne,
      showLabels: re,
      expandedWidth: Go,
      collapsedWidth: re ? Gn : Cr,
      topContent: oo(
        re ? "popover" : Ne ? Tr : "full"
      ),
      footer: ko(re || Ne),
      submenuMode: Te ? "flyout" : "inline"
    }
  ), Kr = (N) => Te ? Cs(N) : Os(N), Cs = (N) => /* @__PURE__ */ R(
    U,
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
          width: Wt + 2 * dt,
          pointerEvents: "none"
        } : {
          width: Ke,
          minWidth: Ke,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: G
        }
      },
      children: [
        Ze && /* @__PURE__ */ t(
          U,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Ka,
              pointerEvents: "auto"
            }
          }
        ),
        Ze && /* @__PURE__ */ t(
          U,
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
              width: $n,
              pointerEvents: "none",
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${$n}px ${Ho}px at 0 var(--edge-glow-y), ${We(me, Le ? 0.5 : 0.4)}, ${We(me, 0)})`,
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
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${Ho}px), ${We(me, Le ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${Ho}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ R(
          U,
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
              width: Wt,
              borderRadius: `${Hn}px`,
              display: "flex",
              flexDirection: "column",
              ...Ze && {
                pointerEvents: Je.shown ? "auto" : "none",
                opacity: Je.shown ? 1 : 0,
                transform: Je.shown ? "none" : `translateX(calc(-100% - ${2 * dt}px))`,
                transition: Xa,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...ae
            },
            children: [
              /* @__PURE__ */ t(
                Ut,
                {
                  isDark: Le,
                  solid: Q,
                  sx: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit"
                  }
                }
              ),
              /* @__PURE__ */ t(
                U,
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
                  children: N
                }
              )
            ]
          }
        )
      ]
    }
  ), Os = (N) => /* @__PURE__ */ t(
    U,
    {
      component: "aside",
      sx: {
        width: Nt,
        minWidth: Nt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ee) => ee.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        U,
        {
          ...Te ? {} : Ao.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ne ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Ne ? Nt : Go,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Q,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Ne ? "none" : `4px 0 24px rgba(0, 0, 0, ${Le ? 0.5 : 0.12})`,
            transition: Ua,
            ...ae
          },
          children: N
        }
      )
    }
  ), As = Kn(
    S,
    Zt
  );
  return /* @__PURE__ */ t(go, { theme: It, children: /* @__PURE__ */ t(Pn.Provider, { value: M, children: /* @__PURE__ */ t(So.Provider, { value: Q, children: /* @__PURE__ */ R(
    U,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...wt
      },
      children: [
        /* @__PURE__ */ t(Uo, {}),
        ce && /* @__PURE__ */ t(
          pa,
          {
            height: fo,
            onMenuClick: s && !ge ? () => at(!0) : void 0,
            appName: n,
            logo: Oo,
            onBrandClick: Qt,
            brandMenuOpen: eo,
            background: _t,
            color: Ct,
            brandColor: Jt,
            endContent: Ie ? /* @__PURE__ */ t(
              Er,
              {
                count: Is,
                onClick: No,
                color: Ct,
                hoverColor: Tt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !ce && re && /* @__PURE__ */ t(
          U,
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
        s && !ce && F && Kr(
          /* @__PURE__ */ R(Ae, { children: [
            Ur(),
            (X == null ? void 0 : X.show) && !Ne && /* @__PURE__ */ t(lo, { ...X })
          ] })
        ),
        oe && Kr(
          /* @__PURE__ */ R(Ae, { children: [
            /* @__PURE__ */ t(
              Ia,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: T,
                onLinkClick: k,
                logo: Oo,
                title: n,
                onBrandClick: Qt,
                brandMenuOpen: eo,
                brandColor: Jt,
                headerBackgroundColor: Ar,
                headerForegroundColor: Ct,
                activeAccentColor: M,
                groupAccentColor: I,
                activeForegroundColor: $,
                foregroundColor: we,
                surfaceBackgroundColor: Or,
                flyoutSurfaceColor: Q,
                collapsed: Ne,
                expandedWidth: Go,
                collapsedWidth: Cr,
                topContent: oo(
                  Ne ? Tr : "full"
                ),
                submenuMode: Te ? "flyout" : "inline",
                color: me,
                hoverColor: Tt,
                avatarColor: M,
                showProfile: L,
                userName: W,
                userEmail: D,
                userRole: C,
                userAvatar: O,
                showNotifications: Ie,
                notificationCount: _e,
                onNotificationsClick: bs ? No : J,
                whatsNewCount: P,
                onProfileClick: Se,
                menuItems: _,
                onLogout: zr,
                theme: se,
                showThemeToggler: Me,
                onThemeToggle: De
              }
            ),
            (X == null ? void 0 : X.show) && !Ne && /* @__PURE__ */ t(lo, { ...X })
          ] })
        ),
        s && !ce && !ie && !H && /* @__PURE__ */ t(
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
                bgcolor: G,
                borderRight: "none"
              },
              ...ae
            },
            children: /* @__PURE__ */ R(
              U,
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
                    U,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        xo,
                        {
                          logo: ms,
                          appName: n,
                          onClick: Qt,
                          menuOpen: eo,
                          color: x ?? me,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  oo("popover"),
                  /* @__PURE__ */ R(
                    U,
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
                          aa,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: T,
                            onLinkClick: k,
                            accentColor: M,
                            surfaceBackgroundColor: G,
                            railShowTitles: i
                          }
                        ),
                        (X == null ? void 0 : X.show) && /* @__PURE__ */ t(lo, { ...X })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(U, { sx: { py: 1.5 }, children: ko(!0) })
                ]
              }
            )
          }
        ),
        s && ce && /* @__PURE__ */ R(
          Ws,
          {
            anchor: ge ? "bottom" : "left",
            open: Mr,
            onOpen: () => at(!0),
            onClose: () => at(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (N) => N.zIndex.drawer + 1
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
                U,
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
                  activePath: T,
                  onLinkClick: (N) => {
                    k == null || k(N), at(!1);
                  },
                  onLinkAction: () => at(!1),
                  collapsed: !1,
                  expandedWidth: ge ? "100%" : Ha,
                  activeAccentColor: M,
                  groupAccentColor: I,
                  activeForegroundColor: $,
                  foregroundColor: we,
                  surfaceBackgroundColor: Q,
                  topInsetPx: ge ? 8 : 0,
                  topContent: ge ? void 0 : oo("full"),
                  footer: ge ? void 0 : ko(!1)
                }
              ),
              (X == null ? void 0 : X.show) && /* @__PURE__ */ t(lo, { ...X })
            ]
          }
        ),
        ge && At && /* @__PURE__ */ t(
          fa,
          {
            open: Dr,
            onClose: () => $o(!1),
            search: At
          }
        ),
        ge && /* @__PURE__ */ t(
          ua,
          {
            ...Gr,
            pinnedLinks: m,
            activePath: T,
            onLinkClick: k,
            onMenuClick: s ? () => at(!0) : void 0,
            menuOpen: Mr,
            onSearchClick: At ? () => $o(!0) : void 0,
            searchOpen: Dr,
            showAssistant: nt,
            onAssistantClick: st,
            assistantActive: Rt,
            showProfile: L,
            background: Q,
            color: me,
            activeColor: M,
            activeBackground: Tt
          }
        ),
        /* @__PURE__ */ t(
          U,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": As,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": ce ? `${fo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ke ? `calc(100% - ${Ke}px)` : "100%",
              mt: ce ? `${fo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ge && {
                pb: `calc(var(--lumora-content-padding) + ${Lr})`
              },
              backgroundColor: G,
              ...ze
            },
            children: e
          }
        ),
        Ue && /* @__PURE__ */ t(
          Qi,
          {
            open: Wr,
            variant: Fr,
            position: _o,
            width: Et,
            sidebarWidthPx: Ke,
            bottomOffsetPx: nt && ut === "floating" ? ja : 0,
            fullScreen: ce,
            fullScreenBottom: ge ? Lr : "0px",
            onClose: Kt,
            children: /* @__PURE__ */ t(Ue, {})
          }
        ),
        nt && ut === "floating" && !ge && /* @__PURE__ */ t(
          gn,
          {
            variant: "floating",
            rightOffsetPx: Es,
            shortcutKeys: Hr,
            onClick: st,
            active: Rt,
            busy: jt
          }
        ),
        Ie && B && /* @__PURE__ */ t(
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
  Xc as FullBleedSection,
  Bi as Kbd,
  Hi as LumoraShellSkeleton,
  Vc as LumoraWrapper,
  Ht as clearAuthTokens,
  Vc as default,
  jc as getAuthErrorMessage,
  Gt as getAuthTokens,
  Xi as getCurrentUser,
  Sr as getDesignTokens,
  Ki as isAuthenticated,
  Qo as logAuthError,
  ss as storeAuthTokens
};
