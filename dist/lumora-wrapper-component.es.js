import { jsx as o, jsxs as y, Fragment as Me } from "react/jsx-runtime";
import qs from "@mui/icons-material/KeyboardArrowDownRounded";
import Zs from "@mui/icons-material/KeyboardArrowUpRounded";
import Js from "@mui/icons-material/ChevronRightRounded";
import O from "@mui/material/Box";
import ln from "@mui/material/Collapse";
import ot from "@mui/material/Divider";
import Re from "@mui/material/IconButton";
import go from "@mui/material/ListItemButton";
import Ie from "@mui/material/ListItemIcon";
import je from "@mui/material/ListItemText";
import Le from "@mui/material/Stack";
import Te from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as Ye, createTheme as Ao, alpha as ze, ThemeProvider as _o } from "@mui/material/styles";
import * as d from "react";
import { useMemo as dn, useState as st, useCallback as qo, useRef as xo, useEffect as Xt, useLayoutEffect as Qs } from "react";
import Ve from "@mui/material/ButtonBase";
import { keyframes as xr } from "@emotion/react";
import br from "@mui/material/Fade";
import vr from "@mui/material/Popper";
import { useTheme as Xn, CssBaseline as nr, GlobalStyles as ei, Box as Y, useMediaQuery as Kn, Stack as Kt, Skeleton as Pe, Drawer as un, SwipeableDrawer as ti } from "@mui/material";
import fn from "axios";
import oi from "@mui/material/Card";
import ri from "@mui/material/CardContent";
import jn from "@mui/material/Button";
import ni from "@mui/icons-material/AutoAwesomeRounded";
import si from "@mui/material/Grow";
import yr from "@mui/material/Paper";
import ii from "@mui/material/Slide";
import ai from "@mui/material/ListSubheader";
import ct from "@mui/material/MenuItem";
import wr from "@mui/material/MenuList";
import Vn from "@mui/icons-material/MenuRounded";
import Sr from "@mui/icons-material/SearchRounded";
import Yn from "@mui/icons-material/LogoutRounded";
import qn from "@mui/icons-material/NotificationsNoneOutlined";
import ci from "@mui/icons-material/SettingsOutlined";
import li from "@mui/material/Avatar";
import di from "@mui/material/Menu";
import hn from "@mui/material/ToggleButton";
import ui from "@mui/material/ToggleButtonGroup";
import fi from "@mui/material/Drawer";
import hi from "@mui/material/AppBar";
import pi from "@mui/material/Toolbar";
import Zn from "@mui/material/Badge";
import mi from "@mui/icons-material/DarkModeOutlined";
import gi from "@mui/icons-material/LightModeOutlined";
import xi from "@mui/icons-material/SettingsBrightnessOutlined";
import Er from "@mui/material/Popover";
import bi from "@mui/icons-material/CheckRounded";
const To = ({
  logo: e,
  title: t,
  appName: r,
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
  }, u = /* @__PURE__ */ y(Me, { children: [
    t ? /* @__PURE__ */ o(
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
        children: t
      }
    ) : null,
    e
  ] });
  return n ? /* @__PURE__ */ o(
    Ve,
    {
      onClick: n,
      "aria-label": a === void 0 ? `${r} home` : `${r}: switch platform`,
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
      children: u
    }
  ) : /* @__PURE__ */ o(Le, { direction: "row", "data-testid": i, sx: c, children: u });
}, sr = !1, _t = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, Rt = (e) => {
  var t;
  return !!((t = e.subitems) != null && t.length);
}, St = (e, t) => e ? `${e}/${t.text}` : t.text, at = (e, t) => {
  var r;
  return t ? e.path && t === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => at(n, t))) ?? !1 : !1;
}, Ke = (e, t) => !!(t && e.path === t), Rr = (e, t) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? t;
  return Rt(r) ? Rr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), ir = (e) => {
  const t = Oo(e);
  if (!t)
    return "#ffffff";
  const [r, n, s] = t.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Zt = (e) => {
  const t = Oo(e);
  if (!t)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = t;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, ar = (e, t) => {
  const r = Oo(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${t})` : e;
}, Oo = (e) => {
  let t = e.trim().replace(/^#/, "");
  if (t.length === 3 && (t = t.split("").map((n) => n + n).join("")), t.length !== 6 || /[^0-9a-fA-F]/.test(t))
    return null;
  const r = parseInt(t, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Jn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Ir = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", vi = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", yi = xr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, xe = "@media (prefers-reduced-motion: reduce)", ne = 6, _r = "9, 193, 174", Qn = d.createContext(
  void 0
), $o = d.createContext(
  void 0
), Tr = (e) => d.useContext($o) ?? e, Mo = () => {
  const e = d.useContext(Qn), t = e ? Oo(e) : null;
  return t ? t.join(", ") : _r;
}, wi = (e, t, r = _r) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: t,
  boxShadow: `${vi(e)}, 0 0 0 1px ${Ir(e)}`
}), Lo = (e, t) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: t ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: Ir(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${ne}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), Cr = xr`
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
`, Ar = xr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, es = (e, t = _r, r = `rgba(${t}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${t}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Co = (e, t, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: ar(e, t ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${ar(e, 0.45)}`
}, Si = (e, t) => {
  {
    const r = `inset 0 0 0 1px ${Ir(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${ne}px`,
        transition: "box-shadow 180ms ease, background 180ms ease"
      },
      hover: {
        background: e ? "rgba(255, 255, 255, 0.06)" : "#ffffff"
      },
      focus: {
        background: e ? "rgba(255, 255, 255, 0.06)" : "#ffffff",
        boxShadow: `${r}, 0 0 0 3px ${t}`
      }
    };
  }
}, Ei = 100, ts = 80, Eo = 56, jt = 72, Yt = 64, de = 44, Jt = 24, Do = 4, it = 8, os = 1.4, rs = ne, ns = { xs: 2, md: "18px" }, ss = (e, t) => {
  const r = (n) => typeof n == "number" ? t.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, ko = (e, t) => e === "flyout" && (t === "collapsible" || t === "panel"), Ri = (e, t, r) => e && ko(t, r), is = ({
  showSidebar: e,
  isMobile: t,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || t ? 0 : r === "rail-labeled" ? ts : ko(n, r) ? s ? 0 : Yt + 2 * it : r === "collapsible" || r === "panel" ? jt : Ei, as = (e, t) => e ?? (t ? "hsl(220, 30%, 7%)" : "#ffffff"), cs = (e, t) => e ?? (t ? "hsl(220, 35%, 9%)" : "#f2f9fc"), ls = { stiffness: 320, damping: 24 }, ds = { stiffness: 320, damping: 28 }, Or = { stiffness: 520, damping: 20 }, $r = { stiffness: 380, damping: 36 }, No = { stiffness: 260, damping: 28 }, Ii = "cubic-bezier(0.32, 1.28, 0.52, 1)", _i = 420, pn = 60, Ti = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), mn = /* @__PURE__ */ new Map(), be = ({
  stiffness: e,
  damping: t,
  mass: r = 1
}) => {
  const n = `${e}/${t}/${r}`, s = mn.get(n);
  if (s)
    return s;
  if (!Ti)
    return { easing: Ii, duration: _i };
  const i = 1 / 600;
  let a = 0, c = 0, u = 0, l = 1 / pn;
  const p = [0];
  for (; u < 3; ) {
    const g = (-e * (a - 1) - t * c) / r;
    if (c += g * i, a += c * i, u += i, u >= l && (p.push(a), l += 1 / pn, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  p[p.length - 1] = 1;
  const h = {
    easing: `linear(${p.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return mn.set(n, h), h;
}, Qt = (e) => !!(e && typeof e.animate == "function"), Tt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ci = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((t) => t.cancel());
}, Ai = (e, t = 1.14) => {
  if (!Qt(e) || Tt())
    return;
  const r = be(Or);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${t})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, Oi = 1.6, us = 110, lt = 110, bt = be($r), $i = (e, t = us) => e >= t ? 0 : (1 + Math.cos(Math.PI * e / t)) / 2, fs = (e, t) => {
  const { offsetWidth: r, offsetHeight: n } = e;
  if (!(r > 0 && n > 0))
    return 1 / 0;
  const s = t.getBoundingClientRect(), i = s.left + t.clientLeft, a = s.top + t.clientTop, c = e.getBoundingClientRect(), u = c.left + c.width / 2, l = c.top + c.height / 2, p = Math.min(
    u - r / 2 - i,
    i + t.clientWidth - (u + r / 2)
  ), h = Math.min(
    l - n / 2 - a,
    a + t.clientHeight - (l + n / 2)
  );
  return Math.min(1 + 2 * p / r, 1 + 2 * h / n);
}, hs = (e, {
  enabled: t,
  axis: r,
  itemSelector: n,
  glyphSelector: s,
  transition: i,
  maxScale: a = Oi,
  reach: c = us,
  carrierSelector: u,
  boundsRef: l
}) => {
  const p = d.useRef(0), h = d.useRef(
    /* @__PURE__ */ new WeakMap()
  ), g = d.useRef(/* @__PURE__ */ new Set()), m = d.useRef(/* @__PURE__ */ new Set()), x = i ? `, ${i}` : "", S = (L) => u ? L.closest(u) : null, I = (L) => {
    var $;
    const [E = "0", T = "0"] = ((($ = S(L)) == null ? void 0 : $.style.translate) ?? "").split(" ").filter(Boolean);
    return r === "x" ? parseFloat(E) || 0 : parseFloat(T) || 0;
  }, A = (L) => {
    const E = L.getBoundingClientRect();
    return (r === "x" ? E.left + E.width / 2 : E.top + E.height / 2) - I(L);
  }, b = (L) => {
    const E = L.getBoundingClientRect();
    return Array.from(L.querySelectorAll(n)).filter((T) => {
      var G;
      const $ = (G = T.parentElement) == null ? void 0 : G.closest(n);
      if ($ && L.contains($))
        return !1;
      const D = T.getBoundingClientRect(), X = A(T), q = r === "x" ? X : D.left + D.width / 2, w = r === "x" ? D.top + D.height / 2 : X;
      return D.width > 0 && q >= E.left && q <= E.right && w >= E.top && w <= E.bottom;
    }).map((T) => ({
      item: T,
      glyph: s ? T.querySelector(s) : T
    })).filter(
      (T) => T.glyph !== null
    );
  }, _ = (L, E) => {
    if (E === L)
      return a;
    let T = h.current.get(E);
    if (T === void 0) {
      const X = Number(E.style.scale) || 1, q = E.getBoundingClientRect();
      T = { width: q.width / X, height: q.height / X }, h.current.set(E, T);
    }
    if (!(T.width > 0 && T.height > 0))
      return 1;
    const $ = L.getBoundingClientRect(), D = Math.min(
      $.width / T.width,
      $.height / T.height
    );
    return Math.max(1, Math.min(D, a));
  }, M = (L) => {
    const E = l == null ? void 0 : l.current;
    return E != null && E.contains(L) ? fs(L, E) : 1 / 0;
  }, v = () => {
    var L, E, T, $;
    cancelAnimationFrame(p.current), g.current.forEach((D) => {
      D.style.transition = `scale ${bt.duration}ms ${bt.easing}${x}`, D.style.scale = "";
    }), g.current.clear(), m.current.forEach((D) => {
      D.style.transition = `translate ${bt.duration}ms ${bt.easing}`, D.style.translate = "";
    }), m.current.clear(), (L = e.current) == null || L.style.setProperty(
      "--dock-scale-timing",
      `${bt.duration}ms ${bt.easing}`
    ), (E = e.current) == null || E.style.removeProperty("--dock-spread"), (T = e.current) == null || T.style.removeProperty("--dock-max-scale"), ($ = e.current) == null || $.style.removeProperty("--dock-active-scale");
  }, C = (L, E, T) => {
    const $ = r === "x" ? E : T, D = b(L).map(({ item: w, glyph: G }) => {
      const ue = A(w), Q = 1 + (Math.max(1, Math.min(_(w, G), M(G))) - 1) * $i(Math.abs($ - ue), c);
      G.style.transition = `scale ${lt}ms ease-out${x}`, Q > 1.001 ? (G.style.scale = Q.toFixed(3), g.current.add(G)) : g.current.has(G) && (G.style.scale = "", g.current.delete(G));
      const ve = r === "x" ? w.offsetWidth : w.offsetHeight;
      return { item: w, centre: ue, scale: Q, growth: (Q - 1) * ve };
    });
    L.style.setProperty(
      "--dock-scale-timing",
      `${lt}ms ease-out`
    ), L.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...D.map(({ scale: w }) => w)).toFixed(3)
    );
    const X = D.find(({ item: w }) => w.dataset.active === "true");
    if (L.style.setProperty(
      "--dock-active-scale",
      ((X == null ? void 0 : X.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const q = D.reduce((w, { growth: G }) => w + G, 0);
    L.style.setProperty("--dock-spread", `${q.toFixed(1)}px`), D.forEach(({ item: w, centre: G, growth: ue }) => {
      const se = S(w);
      if (!se)
        return;
      const Q = D.reduce(
        (ve, ge) => ge.centre < G ? ve + ge.growth : ve,
        ue / 2
      );
      se.style.transition = `translate ${lt}ms ease-out`, Math.abs(Q) > 0.1 ? (se.style.translate = r === "x" ? `${Q.toFixed(1)}px 0` : `0 ${Q.toFixed(1)}px`, m.current.add(se)) : m.current.has(se) && (se.style.translate = "", m.current.delete(se));
    });
  }, R = (L) => {
    if (L.pointerType && L.pointerType !== "mouse" || Tt())
      return;
    const E = L.currentTarget, { clientX: T, clientY: $ } = L;
    cancelAnimationFrame(p.current), p.current = requestAnimationFrame(() => {
      const D = E.getBoundingClientRect(), X = r === "x" ? $ : T, [q, w] = r === "x" ? [D.top, D.bottom] : [D.left, D.right];
      if (X < q || X > w) {
        v();
        return;
      }
      C(E, T, $);
    });
  }, F = (L) => {
    const E = e.current;
    if (!t || !E || Tt())
      return;
    const T = L.getBoundingClientRect();
    C(E, T.left + T.width / 2, T.top + T.height / 2);
  };
  return d.useEffect(() => {
    t || v();
  }, [t]), d.useEffect(() => () => cancelAnimationFrame(p.current), []), {
    containerProps: t ? { onPointerMove: R, onPointerLeave: v, onScrollCapture: v } : {},
    swellOn: F,
    settle: v
  };
}, eo = "data-rail-item", ps = `[${eo}], button, [role="button"]`, Ct = d.createContext(!1), Mr = () => {
  const e = d.useContext(Ct), t = Ye(), r = d.useContext($o);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: Lo(t.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, It = be($r), Lr = ({
  enabled: e,
  isDark: t,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: a = null
}) => {
  const c = d.useRef(null), u = Mo(), [l, p] = d.useState(null), h = d.useRef(null), g = d.useRef(null), m = (v, C) => {
    g.current = C;
    const R = C.getBoundingClientRect(), F = v.getBoundingClientRect(), L = n ?? R.width, E = n ?? R.height, T = {
      top: Math.round(R.top - F.top + (R.height - E) / 2),
      left: Math.round(R.left - F.left + (R.width - L) / 2),
      width: Math.round(L),
      height: Math.round(E)
    };
    p(
      ($) => $ && $.visible && $.top === T.top && $.left === T.left && $.width === T.width && $.height === T.height ? $ : { ...T, visible: !0, instant: !($ != null && $.visible) }
    );
  }, x = (v, C) => {
    var F;
    const R = (F = C == null ? void 0 : C.closest) == null ? void 0 : F.call(C, r);
    return R && v.contains(R) ? R : null;
  }, S = (v) => {
    if (!e)
      return;
    const C = x(v.currentTarget, v.target);
    C && m(v.currentTarget, C);
  }, I = (v) => {
    if (!e)
      return;
    const C = x(v.currentTarget, v.target);
    C && v.target.matches(":focus-visible") && m(v.currentTarget, C);
  }, A = () => {
    var R;
    const v = (R = c.current) == null ? void 0 : R.parentElement, C = i && (v == null ? void 0 : v.querySelector(i));
    return v && C ? { container: v, item: C } : null;
  }, b = () => {
    const v = A();
    if (v) {
      m(v.container, v.item);
      return;
    }
    g.current = null, p((C) => C != null && C.visible ? { ...C, visible: !1 } : C);
  };
  d.useEffect(() => {
    var C, R;
    if (!e)
      return;
    const v = A();
    v ? m(v.container, v.item) : (R = (C = c.current) == null ? void 0 : C.parentElement) != null && R.matches(":hover") || b();
  }, [e, a]);
  const _ = (v) => {
    const C = v.relatedTarget;
    (!C || !v.currentTarget.contains(C)) && (v.currentTarget.matches(":hover") || b());
  };
  return d.useEffect(() => {
    const v = c.current;
    if (!(l != null && l.visible)) {
      h.current = null;
      return;
    }
    const C = h.current;
    if (h.current = l.top, !Qt(v) || Tt() || C === null || l.instant)
      return;
    const R = Math.min(Math.abs(l.top - C) / 600, 0.08);
    R && v.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - R / 2}, ${1 + R})`,
          offset: 0.35
        },
        { transform: "scale(1, 1)" }
      ],
      { duration: It.duration, easing: "ease-out" }
    );
  }, [l == null ? void 0 : l.top, l == null ? void 0 : l.visible, l == null ? void 0 : l.instant]), {
    lens: e && l ? /* @__PURE__ */ o(
      O,
      {
        ref: c,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...es(t, u),
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
          // Fades in and out at its item's size, never popping from smaller
          scale: "var(--dock-max-scale, 1)",
          opacity: l.visible ? 1 : 0,
          pointerEvents: "none",
          // Its scale on the item's own timing, swelling and settling
          // (useDockMagnify), so the two move as one
          transition: l.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${lt}ms ease-out)` : `translate ${It.duration}ms ${It.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${lt}ms ease-out)`,
          [xe]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: S,
      onMouseLeave: b,
      onFocus: I,
      onBlur: _,
      onScrollCapture: b
    } : {}
  };
}, Mi = (e, t, r = null) => {
  const n = Lr({
    enabled: e,
    isDark: t,
    selector: ps,
    // The rail's buttons exactly, so the hover sits on the item
    size: de,
    radius: ne,
    pinSelector: `[${eo}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Li = (e, t) => {
  let r = 0, n = 0, s = e;
  for (; s && s !== t; ) {
    r += s.offsetTop, n += s.offsetLeft;
    const c = s.offsetParent;
    for (let u = s.parentElement; u && u !== t && (r -= u.scrollTop, n -= u.scrollLeft, u !== c); u = u.parentElement)
      ;
    s = c;
  }
  if (s === t && e.offsetWidth)
    return {
      top: Math.round(r),
      left: Math.round(n),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const i = e.getBoundingClientRect(), a = t.getBoundingClientRect();
  return {
    top: Math.round(i.top - a.top),
    left: Math.round(i.left - a.left),
    width: Math.round(i.width),
    height: Math.round(i.height)
  };
}, Di = ({
  enabled: e,
  isDark: t,
  color: r,
  containerRef: n
}) => {
  const s = d.useRef(null), [i, a] = d.useState(null), c = d.useRef(null), u = d.useCallback(
    (p) => {
      const h = n.current;
      if (!e || !h)
        return;
      const g = h.querySelector(
        `[${eo}][data-active="true"]`
      );
      if (!g) {
        a(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const m = Li(g, h);
      a(
        (x) => x && x.visible && x.top === m.top && x.left === m.left && x.width === m.width && x.height === m.height ? x : {
          ...m,
          visible: !0,
          instant: p || !(x != null && x.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    u(!1);
  }), d.useEffect(() => {
    const p = n.current;
    if (!e || !p)
      return;
    let h = 0;
    const g = () => {
      cancelAnimationFrame(h), h = requestAnimationFrame(() => u(!1));
    }, m = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    m == null || m.observe(p);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return x == null || x.observe(p, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(h), m == null || m.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, u]), d.useEffect(() => {
    const p = s.current;
    if (!(i != null && i.visible)) {
      c.current = null;
      return;
    }
    const h = c.current;
    if (c.current = i.top, h === null || i.instant || !Qt(p) || Tt())
      return;
    const g = Math.min(Math.abs(i.top - h) / 600, 0.08);
    g && p.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - g / 2}, ${1 + g})`,
          offset: 0.35
        },
        { transform: "scale(1, 1)" }
      ],
      { duration: It.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ o(
    O,
    {
      ref: s,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": i.visible ? "true" : "false",
      sx: {
        ...Co(r, t),
        borderRadius: `${ne}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: i.width,
        height: i.height,
        translate: `${i.left}px ${i.top}px`,
        // Swells with its item (useDockMagnify)
        // Fades in and out at its item's size, never popping from smaller
        scale: "var(--dock-active-scale, 1)",
        opacity: i.visible ? 1 : 0,
        pointerEvents: "none",
        // Its scale on the item's own timing, swelling and settling
        // (useDockMagnify), so the two move as one
        transition: i.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${lt}ms ease-out)` : `translate ${It.duration}ms ${It.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${lt}ms ease-out)`,
        [xe]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, _e = 52, Zo = 36, ki = 1.8, Ni = _e / 2, Jo = "[data-flyout-tile]", Dr = 4, kr = 32, cr = kr + Dr, Wi = 104, Ht = 24, ms = "background 160ms ease, color 160ms ease, transform 120ms ease", lr = 10, gs = 10, gn = gs + 2, Fi = 18, xn = 1.08, Pi = (e) => {
  for (let t = e.parentElement; t; t = t.parentElement) {
    const { overflowY: r } = getComputedStyle(t);
    if (r === "auto" || r === "scroll")
      return t;
  }
  return null;
}, Bi = (e) => {
  const t = Pi(e);
  if (!t)
    return xn;
  const r = fs(e, t);
  return Math.min(xn, r / Math.min(r, os));
}, zi = 1190, Hi = 1195, bn = 120, vn = be(ls), Et = be($r), yn = be(No), wn = 8192, Gi = ({ left: e, top: t, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), a = e + r, c = t + n, u = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${wn} V ${wn} H 0 Z M ${e + i} ${t} H ${a - i} ${u} ${a} ${t + i} V ${c - i} ${u} ${a - i} ${c} H ${e + i} ${u} ${e} ${c - i} V ${t + i} ${u} ${e + i} ${t} Z')`;
}, Ui = ({
  group: e,
  groupKey: t,
  anchor: r,
  railEdge: n,
  railShape: s,
  activePath: i,
  focusFirst: a = !1,
  onNavigate: c,
  onClose: u,
  panelProps: l,
  accentColor: p,
  activeBackgroundColor: h,
  activeForegroundColor: g,
  solidSurface: m
}) => {
  const x = Ye(), S = x.palette.mode === "dark", I = !!(e && r), A = d.useRef(null);
  e && t && (A.current = { group: e, key: t });
  const b = A.current, _ = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const k = r.getBoundingClientRect();
      return {
        x: n,
        y: k.top,
        left: n,
        right: n,
        top: k.top,
        bottom: k.bottom,
        width: 0,
        height: k.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), M = d.useRef(_);
  _ && (M.current = _), d.useEffect(() => {
    if (!r)
      return;
    const k = Bi(r);
    k > 1.001 && Ai(r, k);
  }, [r]);
  const [v, C] = d.useState(!1);
  d.useEffect(() => {
    if (!I) {
      C(!1);
      return;
    }
    let k = 0;
    const H = requestAnimationFrame(() => {
      k = requestAnimationFrame(() => C(!0));
    });
    return () => {
      cancelAnimationFrame(H), cancelAnimationFrame(k);
    };
  }, [I]);
  const R = d.useMemo(
    () => b ? Rr(b.group.subitems, b.group.icon) : [],
    [b]
  ), F = d.useRef(null), L = hs(F, {
    enabled: I,
    axis: "x",
    itemSelector: Jo,
    transition: ms,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: ki,
    // The neighbours make room as it grows
    carrierSelector: '[role="menuitem"]'
  }), E = d.useRef(void 0), T = d.useCallback((k) => {
    var V;
    (V = E.current) == null || V.call(E), E.current = void 0;
    const H = k == null ? void 0 : k.parentElement;
    if (!k || !H || typeof MutationObserver > "u")
      return;
    const U = () => {
      const ce = k.offsetLeft - k.offsetWidth / 2, ke = ce + k.offsetWidth;
      let P = 0;
      H.querySelectorAll(Jo).forEach((he) => {
        var ye;
        if (he.dataset.flyoutGrows !== "up")
          return;
        const ie = parseFloat(he.style.scale) || 1, He = parseFloat(
          ((ye = he.closest('[role="menuitem"]')) == null ? void 0 : ye.style.translate) ?? ""
        ) || 0, le = he.offsetLeft + He - (ie - 1) * _e / 2;
        le < ke && le + ie * _e > ce && (P = Math.max(
          P,
          (ie - 1) * _e - he.offsetTop - gn
        ));
      });
      const qe = P > 0 ? `0 ${(-P).toFixed(1)}px` : "";
      k.style.translate !== qe && (k.style.translate = qe);
    }, j = new MutationObserver(U);
    j.observe(H, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), E.current = () => j.disconnect();
  }, []), $ = d.useRef([]), [D, X] = d.useState([]);
  d.useLayoutEffect(() => {
    const k = () => {
      const U = R.map(
        (j, V) => {
          var ce;
          return ((ce = $.current[V]) == null ? void 0 : ce.offsetWidth) ?? 0;
        }
      );
      X(
        (j) => j.length === U.length && j.every((V, ce) => V === U[ce]) ? j : U
      );
    };
    if (k(), typeof ResizeObserver > "u")
      return;
    const H = new ResizeObserver(k);
    return $.current.slice(0, R.length).forEach((U) => U && H.observe(U)), () => H.disconnect();
  }, [R]);
  const q = Ki(D, R.length), w = d.useRef([]), G = R.findIndex(
    ({ sub: k }) => Ke(k, i)
  ), [ue, se] = d.useState(0);
  d.useEffect(() => {
    se(Math.max(G, 0));
  }, [t]), d.useEffect(() => {
    if (!I || !a)
      return;
    const k = setTimeout(() => {
      var H;
      return (H = w.current[0]) == null ? void 0 : H.focus();
    });
    return () => clearTimeout(k);
  }, [I, a, t]);
  const Q = (k) => {
    var U;
    const H = Math.max(0, Math.min(k, R.length - 1));
    se(H), (U = w.current[H]) == null || U.focus();
  }, ve = (k, H) => {
    var U;
    switch (k.key) {
      case "ArrowRight":
        Q(H + 1);
        break;
      case "ArrowLeft":
        H === 0 ? u(!0) : Q(H - 1);
        break;
      case " ":
        (U = w.current[H]) == null || U.click();
        break;
      case "Home":
        Q(0);
        break;
      case "End":
        Q(R.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    k.preventDefault();
  }, ge = x.palette.text.primary, De = S ? x.palette.text.primary : p;
  return /* @__PURE__ */ y(Me, { children: [
    /* @__PURE__ */ o(br, { in: I, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ o(
      O,
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
          ...s ? { clipPath: Gi(s) } : {},
          zIndex: zi,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: S ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)"
        }
      }
    ) }),
    /* @__PURE__ */ o(
      vr,
      {
        open: I,
        anchorEl: _ ?? M.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Both rows centred on the rail icon, a gap from the rail
          {
            name: "offset",
            options: { offset: [0, lr] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Hi,
          transition: v ? `transform ${Et.duration}ms ${Et.easing}` : "none",
          [xe]: { transition: "none" }
        },
        children: ({ TransitionProps: k }) => /* @__PURE__ */ o(
          Xi,
          {
            in: (k == null ? void 0 : k.in) ?? I,
            onEnter: k == null ? void 0 : k.onEnter,
            onExited: k == null ? void 0 : k.onExited,
            panelProps: l,
            groupText: b == null ? void 0 : b.group.text,
            children: b ? /* @__PURE__ */ y(
              O,
              {
                ref: F,
                role: "menu",
                "aria-label": b.group.text,
                ...L.containerProps,
                onBlur: (H) => {
                  H.currentTarget.contains(
                    H.relatedTarget
                  ) || L.settle();
                },
                sx: {
                  position: "relative",
                  width: q.width,
                  height: cr + _e + Dr + kr,
                  // The panel stretches as the dock pushes
                  // the pages along, as the Dock's shelf does
                  mr: "var(--dock-spread, 0px)",
                  transition: `margin-right ${Et.duration}ms ${Et.easing}`,
                  [xe]: { transition: "none" }
                },
                children: [
                  /* @__PURE__ */ o(
                    O,
                    {
                      component: "span",
                      ref: T,
                      "aria-hidden": !0,
                      "data-testid": "sidebar-flyout-heading",
                      sx: {
                        // Above the tiles and centred over them, so
                        // they stay centred on the rail icon; the
                        // row's name already labels it. It rises only
                        // when a swelling tile would reach it (see the
                        // effect on `headingRef`)
                        position: "absolute",
                        bottom: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        mb: `${gn}px`,
                        transition: `translate ${lt}ms ease-out`,
                        [xe]: {
                          transition: "none"
                        },
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        // The pages' own name colour
                        color: Lo(S).color
                      },
                      children: b.group.text
                    }
                  ),
                  R.map(({ sub: H, icon: U }, j) => /* @__PURE__ */ o(
                    bs,
                    {
                      ref: (V) => {
                        w.current[j] = V;
                      },
                      nameRef: (V) => {
                        $.current[j] = V;
                      },
                      tileLeft: q.tiles[j],
                      nameLeft: q.names[j],
                      sub: H,
                      icon: U,
                      index: j,
                      active: Ke(
                        H,
                        i
                      ),
                      tabIndex: j === ue ? 0 : -1,
                      onClick: (V) => {
                        _t(V) && (V.preventDefault(), c(H.path), u());
                      },
                      onKeyDown: (V) => ve(V, j),
                      onFocus: (V) => {
                        se(j);
                        const ce = V.currentTarget.querySelector(
                          Jo
                        );
                        ce && V.currentTarget.matches(
                          ":focus-visible"
                        ) && L.swellOn(ce);
                      },
                      accentColor: p,
                      activeBackgroundColor: h,
                      activeForegroundColor: g,
                      labelColor: ge,
                      iconColor: De,
                      surface: m,
                      isDark: S
                    },
                    H.path
                  ))
                ]
              },
              b.key
            ) : null
          }
        )
      }
    )
  ] });
}, Xi = ({
  in: e,
  onEnter: t,
  onExited: r,
  panelProps: n,
  groupText: s,
  children: i
}) => {
  const a = d.useRef(null), c = (l) => {
    a.current = l;
    const { ref: p } = n;
    typeof p == "function" ? p(l) : p && (p.current = l);
  }, u = d.useRef(e);
  return u.current = e, d.useLayoutEffect(() => {
    const l = a.current;
    if (Ci(l), e) {
      t == null || t(), Qt(l) && !Tt() && l.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: yn.duration, easing: yn.easing }
      );
      return;
    }
    if (!Qt(l)) {
      r == null || r();
      return;
    }
    let p = !1;
    const h = () => {
      !p && !u.current && (p = !0, r == null || r());
    }, g = setTimeout(h, bn + 100);
    return l.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: bn,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(h, h), () => clearTimeout(g);
  }, [e]), /* @__PURE__ */ o(
    O,
    {
      ref: c,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": s,
      sx: {
        position: "relative",
        // No surface of its own: the scrim's gradient sits behind it.
        // A tile the dock grows pops out past it.
        p: `${gs}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -lr - 2,
          width: lr + 2
        }
      },
      children: i
    }
  );
}, xs = (e) => e % 2 === 1, Ki = (e, t) => {
  const r = [], n = [];
  let s = -Ht, i = -Ht, a = -Ht;
  for (let c = 0; c < t; c += 1) {
    const u = e[c] || _e, l = xs(c), p = l ? i : a, h = Math.max(
      s + Ht + _e / 2,
      p + Ht + u / 2
    );
    s = h + _e / 2, l ? i = h + u / 2 : a = h + u / 2, r.push(Math.round(h - _e / 2)), n.push(Math.round(h - u / 2));
  }
  return {
    tiles: r,
    names: n,
    width: Math.round(Math.max(s, i, a, 0))
  };
}, bs = d.forwardRef(
  ({
    nameRef: e,
    tileLeft: t,
    nameLeft: r,
    sub: n,
    icon: s,
    index: i,
    active: a,
    tabIndex: c,
    onClick: u,
    onKeyDown: l,
    onFocus: p,
    accentColor: h,
    activeBackgroundColor: g,
    activeForegroundColor: m,
    labelColor: x,
    iconColor: S,
    surface: I,
    isDark: A
  }, b) => {
    const _ = xs(i), M = Lo(A, I), v = {
      animation: `${yi} ${vn.duration}ms ${vn.easing} both`,
      animationDelay: `${i * Fi}ms`,
      [xe]: { animation: "none" }
    }, C = {
      background: g ?? h,
      color: m,
      "& .MuiSvgIcon-root": { color: m }
    }, R = {
      background: `color-mix(in srgb, ${h} ${A ? 20 : 12}%, ${I})`
    }, F = A ? M.color : h, L = {
      "& [data-flyout-tile]": a ? {} : R,
      "& [data-flyout-name]": { color: F, fontWeight: 600 }
    }, E = {
      ...M,
      border: "none",
      // Lifted a little more than a resting label: they float over
      // the page
      boxShadow: A ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)"
    };
    return /* @__PURE__ */ y(
      Ve,
      {
        ref: b,
        component: "a",
        href: n.path,
        role: "menuitem",
        tabIndex: c,
        "aria-current": a ? "page" : void 0,
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": a ? "true" : "false",
        onClick: u,
        onKeyDown: l,
        onFocus: p,
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
          color: x,
          textDecoration: "none",
          "&:hover": L,
          "&.Mui-focusVisible": {
            ...L,
            "& [data-flyout-tile]": {
              ...a ? {} : R,
              outline: "2px solid",
              outlineColor: h,
              outlineOffset: 2
            }
          },
          "&:active [data-flyout-tile]": { transform: "scale(0.94)" },
          [xe]: {
            "&:active [data-flyout-tile]": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ o(
            O,
            {
              "data-flyout-bridge": "",
              "aria-hidden": !0,
              sx: {
                left: t,
                top: 0,
                width: _e,
                height: "100%"
              }
            }
          ),
          /* @__PURE__ */ o(
            O,
            {
              "data-flyout-tile": "",
              "data-flyout-grows": _ ? "down" : "up",
              sx: {
                ...E,
                left: t,
                top: cr,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: _e,
                height: _e,
                p: 0,
                borderRadius: `${Ni}px`,
                // Grows out of the row, away from its name
                transformOrigin: _ ? "center top" : "center bottom",
                transition: `scale ${Et.duration}ms ${Et.easing}, ${ms}`,
                "& .MuiSvgIcon-root": {
                  fontSize: Zo,
                  color: S,
                  transition: "color 160ms ease"
                },
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                '& [role="img"], & [role="img"] > img': {
                  width: Zo,
                  height: Zo
                },
                ...a ? C : {},
                ...v
              },
              children: s
            }
          ),
          /* @__PURE__ */ o(
            O,
            {
              "data-flyout-slot": "",
              sx: {
                left: r,
                top: _ ? 0 : cr + _e + Dr,
                height: kr,
                display: "flex",
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: _ ? "flex-end" : "flex-start"
              },
              children: /* @__PURE__ */ o(
                O,
                {
                  component: "span",
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": n.text,
                  sx: {
                    // No card of its own: text on the panel
                    color: M.color,
                    px: 1,
                    py: 0,
                    fontSize: "0.75rem",
                    lineHeight: "16px",
                    // A long name wraps, split evenly, so it stays as
                    // compact as its tile; never cut short
                    maxWidth: Wi,
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
                    ...a ? { color: F } : {},
                    transition: "color 160ms ease",
                    ...v
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
bs.displayName = "FlyoutTile";
const ji = 50, Vi = 250, Yi = (e) => {
  const [t, r] = d.useState(null), n = d.useRef(t);
  n.current = t;
  const s = d.useRef(/* @__PURE__ */ new Map()), i = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), u = () => {
    clearTimeout(a.current), a.current = void 0;
  }, l = () => {
    clearTimeout(c.current), c.current = void 0;
  }, p = (A, b, _ = !1) => {
    u(), l(), r({ key: A, pinned: b, focusFirst: _ });
  }, h = d.useCallback((A = !1) => {
    var _, M;
    u(), l();
    const b = (_ = n.current) == null ? void 0 : _.key;
    r(null), A && b && ((M = s.current.get(b)) == null || M.focus());
  }, []), g = () => {
    u(), !(!n.current || n.current.pinned) && (l(), c.current = setTimeout(() => h(), Vi));
  };
  d.useEffect(() => {
    e || h();
  }, [e, h]), d.useEffect(
    () => () => {
      u(), l();
    },
    []
  );
  const m = t !== null;
  return d.useEffect(() => {
    if (!m)
      return;
    const A = (M) => {
      var C;
      const v = M;
      return v ? (C = i.current) != null && C.contains(v) ? !0 : [...s.current.values()].some((R) => R.contains(v)) : !1;
    }, b = (M) => {
      A(M.target) || h();
    }, _ = (M) => {
      var v;
      M.key === "Escape" && h(
        !!((v = i.current) != null && v.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", b), document.addEventListener("keydown", _), () => {
      document.removeEventListener("pointerdown", b), document.removeEventListener("keydown", _);
    };
  }, [m, h]), {
    state: t,
    close: h,
    triggerProps: (A) => ({
      ref: (b) => {
        b ? s.current.set(A, b) : s.current.delete(A);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        l();
        const b = n.current;
        if (b) {
          b.key !== A && p(A, b.pinned);
          return;
        }
        u(), a.current = setTimeout(
          () => p(A, !1),
          ji
        );
      },
      onMouseLeave: g,
      onClick: (b) => {
        var _;
        if (b.detail === 0) {
          p(A, !0, !0);
          return;
        }
        ((_ = n.current) == null ? void 0 : _.key) !== A && p(A, !1);
      },
      onKeyDown: (b) => {
        b.key === "ArrowRight" && (b.preventDefault(), p(A, !0, !0));
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
    getTrigger: (A) => s.current.get(A) ?? null
  };
}, qi = 264, Zi = 72, Sn = 64, bo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ji = 16, Qi = 14, ea = 4, ta = 2.5, En = "0.7rem", Rn = 22, vo = be(Or), ht = ({ text: e, variant: t = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
  const i = d.useRef(null), [a, c] = d.useState(!1), u = d.useCallback(() => {
    const l = i.current;
    l && c(l.scrollWidth > l.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    u();
  }, [u, e]), d.useEffect(() => {
    const l = i.current;
    if (!l)
      return;
    const p = new ResizeObserver(() => u());
    return p.observe(l), () => p.disconnect();
  }, [u]), /* @__PURE__ */ o(
    Te,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ o(
        ae,
        {
          ref: i,
          component: "span",
          variant: t,
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
}, oa = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, ra = 4, na = (e) => Math.max(0, Math.min(ra, qt - e)), sa = ({
  open: e,
  size: t = Ji
}) => e ? /* @__PURE__ */ o(Zs, { sx: { fontSize: t, opacity: 0.75 } }) : /* @__PURE__ */ o(qs, { sx: { fontSize: t, opacity: 0.75 } }), In = ({ open: e }) => /* @__PURE__ */ o(
  Js,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), yo = 600, pt = `${Do}px`, qt = (Yt - de) / 2, ia = (e) => {
  const t = Math.max(0, e - qt);
  return {
    pl: `${Math.max(0, qt - t)}px`,
    pr: `${Math.max(0, qt - e)}px`
  };
};
function aa(e, t) {
  const [r, n] = d.useState(0);
  return d.useLayoutEffect(() => {
    const s = e.current;
    if (!t || !s) {
      n(0);
      return;
    }
    const i = () => {
      const c = getComputedStyle(s), u = parseFloat(c.borderLeftWidth) + parseFloat(c.borderRightWidth);
      n(Math.max(0, s.offsetWidth - s.clientWidth - u));
    };
    if (i(), typeof ResizeObserver > "u")
      return;
    const a = new ResizeObserver(i);
    return a.observe(s), s.firstElementChild && a.observe(s.firstElementChild), () => a.disconnect();
  }, [e, t]), r;
}
function ca(e) {
  const [t, r] = d.useState(!1);
  return d.useLayoutEffect(() => {
    const n = e.current, s = n == null ? void 0 : n.firstElementChild;
    if (!n || !s)
      return;
    const i = () => {
      const c = getComputedStyle(n), u = s.offsetHeight + parseFloat(c.paddingTop) + parseFloat(c.paddingBottom);
      r(u > n.clientHeight + 0.5);
    };
    if (i(), typeof ResizeObserver > "u")
      return;
    const a = new ResizeObserver(i);
    return a.observe(n), a.observe(s), () => a.disconnect();
  }, [e]), t;
}
const wo = 8;
function la(e, t, r) {
  d.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const s = (u) => {
      const l = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((m) => m.offsetHeight > 0).pop();
      if (!l)
        return;
      const p = n.getBoundingClientRect(), h = l.getBoundingClientRect();
      let g = 0;
      h.top < p.top + wo ? g = h.top - p.top - wo : h.bottom > p.bottom - wo && (g = h.bottom - p.bottom + wo), g !== 0 && n.scrollBy({ top: g, behavior: u });
    }, i = requestAnimationFrame(() => s("smooth")), a = window.setTimeout(() => s("smooth"), 350), c = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return c == null || c.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(a), c == null || c.disconnect();
    };
  }, [e, t, r]);
}
const dr = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: s,
  logo: i,
  title: a,
  onBrandClick: c,
  brandMenuOpen: u,
  showHeaderBar: l = !1,
  headerBackgroundColor: p,
  headerForegroundColor: h,
  brandColor: g,
  activeAccentColor: m = "#01584f",
  activeBackgroundColor: x,
  groupArrowColor: S,
  groupAccentColor: I,
  activeForegroundColor: A,
  foregroundColor: b,
  surfaceBackgroundColor: _,
  flyoutSurfaceColor: M,
  collapsed: v = !1,
  expandedWidth: C = qi,
  collapsedWidth: R = Zi,
  showLabels: F = !1,
  topInsetPx: L = 0,
  topContent: E,
  footer: T,
  submenuMode: $ = "inline"
}) => {
  var lo;
  const D = Ye(), X = D.palette.mode === "dark", q = d.useContext($o), w = $ === "flyout" && v && !F, G = Yi(w), ue = d.useRef(null), se = d.useRef(null), Q = d.useRef(null);
  la(Q, r, v);
  const ve = aa(Q, w), ge = ca(Q), De = Mi(w, X, ((lo = G.state) == null ? void 0 : lo.key) ?? null), k = hs(ue, {
    enabled: w,
    axis: "y",
    itemSelector: ps,
    maxScale: os,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: de + Do,
    // Only 4px of padding at the scroller's ends: the first and last
    // buttons swell less, or the last would scroll the rail
    boundsRef: Q,
    transition: `transform ${vo.duration}ms ${vo.easing}, background-color 160ms ease`
  }), H = {
    ...De.containerProps,
    ...k.containerProps,
    ...w ? {
      onScrollCapture: () => {
        var f, W;
        (W = (f = De.containerProps).onScrollCapture) == null || W.call(f), k.settle();
      }
    } : {}
  }, U = x ?? m, j = Di({
    enabled: w,
    isDark: X,
    color: U,
    containerRef: se
  }), { close: V } = G;
  d.useEffect(() => {
    V();
  }, [r, V]);
  const [ce, ke] = d.useState(
    {}
  ), P = A ?? ir(U), qe = {
    bgcolor: U,
    color: P,
    "& .MuiListItemIcon-root": { color: P }
  }, he = {
    bgcolor: U,
    color: P,
    borderRadius: "8px"
  }, ie = I ?? Zt(m), He = _ ?? (X ? D.palette.background.paper : "#ffffff"), le = b ?? (X ? "text.primary" : m), ye = p ?? He, Ge = h ?? (p ? ir(ye) : b ?? (X ? D.palette.text.primary : m)), we = Zt(Ge), Ne = (f) => {
    n == null || n(f);
  }, pe = (f) => f ? {
    component: "a",
    href: f,
    onClick: (W) => {
      _t(W) && (W.preventDefault(), Ne(f));
    }
  } : {}, Ze = (f, W) => {
    ke((z) => ({ ...z, [f]: !W }));
  }, dt = (f, W) => ce[W] ?? at(f, r), Je = (f, W, z) => ({
    color: f ? P : le,
    bgcolor: f ? U : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? P : le,
      minWidth: z
    },
    "&:hover": f || F ? qe : { bgcolor: W }
  }), mt = {
    "&.Mui-selected": {
      bgcolor: U
    },
    "&.Mui-selected:hover": qe
  }, At = (f) => {
    const W = Ke(f, r), z = /* @__PURE__ */ y(
      go,
      {
        disabled: !f.path,
        selected: W,
        ...pe(f.path),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": W ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...f.action && { pr: 6 },
          ...f.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...Je(
            W,
            ie,
            f.subtitle ? 48 : 36
          ),
          ...mt
        },
        children: [
          /* @__PURE__ */ o(Ie, { children: f.icon }),
          /* @__PURE__ */ o(
            je,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ o(
                ht,
                {
                  text: f.text,
                  fontWeight: yo
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ o(
                O,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ o(
                    ht,
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
    const { action: B } = f;
    return /* @__PURE__ */ y(O, { sx: { position: "relative" }, children: [
      z,
      /* @__PURE__ */ o(Te, { title: B.label, placement: "right", arrow: !0, children: /* @__PURE__ */ o(
        Re,
        {
          "aria-label": B.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            B.onClick(), s == null || s();
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
            borderColor: W ? "rgba(255, 255, 255, 0.35)" : ie,
            color: W ? P : le,
            "&:hover": {
              bgcolor: W ? "rgba(255, 255, 255, 0.15)" : ie
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: W ? P : le,
              outlineOffset: 1
            }
          },
          children: B.icon
        }
      ) })
    ] }, f.text);
  }, Wo = (f) => {
    const W = at(f, r), z = Ke(f, r), B = St("", f), K = dt(f, B);
    return /* @__PURE__ */ y(
      O,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: W ? ie : "transparent"
        },
        children: [
          /* @__PURE__ */ y(
            go,
            {
              onClick: () => Ze(B, K),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": z ? "true" : "false",
              "aria-expanded": K,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Je(z, ie, 36)
              },
              children: [
                /* @__PURE__ */ o(Ie, { children: f.icon }),
                /* @__PURE__ */ o(
                  je,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ o(
                      ht,
                      {
                        text: f.text,
                        fontWeight: yo
                      }
                    )
                  }
                ),
                /* @__PURE__ */ o(In, { open: K })
              ]
            }
          ),
          /* @__PURE__ */ o(ln, { in: K, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ o(
            O,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (oe) => no(oe, B, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, no = (f, W, z) => {
    const B = St(W, f), K = ea + (z - 1) * ta;
    if (Rt(f)) {
      const Ce = at(f, r), ee = Ke(f, r), We = dt(f, B);
      return /* @__PURE__ */ y(O, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ y(
          go,
          {
            onClick: () => Ze(B, We),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": Ce ? "true" : "false",
            "aria-expanded": We,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: K,
              ...Je(ee, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ o(Ie, { children: f.icon }) : null,
              /* @__PURE__ */ o(
                je,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ o(
                    ht,
                    {
                      text: f.text,
                      fontWeight: yo
                    }
                  )
                }
              ),
              /* @__PURE__ */ o(In, { open: We })
            ]
          }
        ),
        /* @__PURE__ */ o(ln, { in: We, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ o(O, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (Ae) => no(Ae, B, z + 1)
        ) }) })
      ] }, B);
    }
    const oe = Ke(f, r);
    return /* @__PURE__ */ y(
      go,
      {
        selected: oe,
        disabled: !f.path,
        ...pe(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": oe ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: K,
          ...Je(oe, "action.hover", 32),
          ...mt
        },
        children: [
          f.icon ? /* @__PURE__ */ o(Ie, { children: f.icon }) : null,
          /* @__PURE__ */ o(
            je,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ o(
                ht,
                {
                  text: f.text,
                  fontWeight: yo
                }
              )
            }
          )
        ]
      },
      B
    );
  }, Ot = (f, W, z, B, K, oe) => {
    const Ce = !K, ee = /* @__PURE__ */ y(
      Re,
      {
        "aria-label": W,
        disabled: Ce,
        ...pe(K),
        onMouseEnter: w ? G.onRailLeafEnter : void 0,
        ...w ? { [eo]: "" } : {},
        "data-testid": (oe == null ? void 0 : oe.testId) ?? `sidebar-item-${W}`,
        "data-active": B ? "true" : "false",
        sx: F ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: B ? P : le,
          bgcolor: B ? U : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Rn
          },
          "&:hover": he,
          ...bo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: w ? de : 44,
          height: w ? de : 44,
          color: B ? P : le,
          bgcolor: B ? U : "transparent",
          borderRadius: B ? "8px" : "50%",
          "&:hover": {
            bgcolor: B ? U : oe != null && oe.insideGroup ? "action.hover" : ie,
            borderRadius: "8px"
          },
          ...bo,
          ...w ? rt(B) : {}
        },
        children: [
          z,
          F ? /* @__PURE__ */ o(
            ht,
            {
              text: W,
              variant: "caption",
              center: !0,
              fontSize: En
            }
          ) : null
        ]
      }
    );
    return F ? Ce ? /* @__PURE__ */ o("span", { children: ee }, f) : /* @__PURE__ */ o(d.Fragment, { children: ee }, f) : /* @__PURE__ */ o(
      Te,
      {
        title: W,
        placement: "right",
        arrow: !w,
        ...w ? $t : {},
        children: Ce ? /* @__PURE__ */ o("span", { children: ee }) : ee
      },
      f
    );
  }, Fo = {
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
  }, rt = (f) => ({
    borderRadius: `${ne}px`,
    "& .MuiSvgIcon-root": { fontSize: Jt },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${vo.duration}ms ${vo.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), $t = {
    slotProps: {
      tooltip: { sx: Lo(X, q) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, so = (f) => {
    var K;
    const W = at(f, r), z = St("", f), B = ((K = G.state) == null ? void 0 : K.key) === z;
    return /* @__PURE__ */ o(
      O,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ o(
          Re,
          {
            ...G.triggerProps(z),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": B,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": W ? "true" : "false",
            "data-open": B ? "true" : "false",
            [eo]: "",
            sx: {
              position: "relative",
              width: de,
              height: de,
              color: W ? P : le,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: W ? U : "transparent",
              ...rt(W),
              // The icon stays centred, in line with every other
              // icon down the rail; the arrow sits in the room
              // beside it
              "&::after": {
                content: '""',
                position: "absolute",
                // Just past the button, in the rail's side gutter,
                // clear of the icon (drawn back inside it when
                // the scrollbar takes that gutter)
                right: -na(ve),
                top: "50%",
                transform: "translateY(-50%)",
                width: 5,
                height: 8,
                bgcolor: S ?? "currentColor",
                mask: `${oa} center / contain no-repeat`,
                opacity: S ? 1 : 0.55,
                transition: "opacity 160ms ease"
              },
              // Pointed at, or its pages already out: the arrow has
              // said its piece
              '&:hover::after, &[data-open="true"]::after': {
                opacity: 0
              },
              ...bo
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, ut = (f) => {
    const W = at(f, r), z = Ke(f, r), B = St("", f), K = dt(f, B), oe = /* @__PURE__ */ y(
      Re,
      {
        "aria-label": f.text,
        "aria-expanded": K,
        onClick: () => Ze(B, K),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": z ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: F ? 0.25 : 0,
          width: F ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...F ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: z ? P : le,
          bgcolor: z ? U : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": F ? { bgcolor: U, color: P } : {
            bgcolor: z ? U : "transparent"
          },
          ...bo
        },
        children: [
          F ? /* @__PURE__ */ o(
            O,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Rn
                }
              },
              children: f.icon
            }
          ) : f.icon,
          F ? /* @__PURE__ */ o(
            ht,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: En
            }
          ) : null,
          /* @__PURE__ */ o(sa, { open: K, size: Qi })
        ]
      }
    ), Ce = F ? oe : /* @__PURE__ */ o(Te, { title: f.text, placement: "right", arrow: !0, children: oe });
    return /* @__PURE__ */ y(
      O,
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
          bgcolor: W ? ie : "transparent",
          ...F ? {} : { "&:hover": { bgcolor: ie } }
        },
        children: [
          Ce,
          K ? Rr(f.subitems, f.icon).map(
            ({ sub: ee, icon: We }) => Ot(
              ee.path,
              ee.text,
              We,
              Ke(ee, r),
              ee.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${ee.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, Mt = (f) => /* @__PURE__ */ o(
    O,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Ot(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        Ke(f, r),
        f.path,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), Lt = (f) => Rt(f) ? w ? so(f) : v ? ut(f) : Wo(f) : v ? Mt(f) : At(f), Dt = (f) => /* @__PURE__ */ o(
    Le,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: v ? "center" : "stretch"
      },
      children: f.map(
        (W, z) => W.dividerAfter && z < f.length - 1 ? /* @__PURE__ */ y(d.Fragment, { children: [
          Lt(W),
          /* @__PURE__ */ o(
            ot,
            {
              "data-testid": `sidebar-divider-${W.text}`,
              sx: {
                alignSelf: "stretch",
                my: w ? pt : 1,
                borderColor: "divider"
              }
            }
          )
        ] }, W.text) : Lt(W)
      )
    }
  ), io = v ? R : C, gt = () => {
    var Ce, ee;
    const { state: f } = G, W = f ? [...e, ...t].find(
      (We) => Rt(We) && St("", We) === f.key
    ) ?? null : null, z = W ? ((Ce = ue.current) == null ? void 0 : Ce.getBoundingClientRect().right) ?? R : R, B = W ? ((ee = ue.current) == null ? void 0 : ee.closest("[data-rail-surface]")) ?? ue.current : null, K = B == null ? void 0 : B.getBoundingClientRect(), oe = B && K ? {
      left: K.left,
      top: K.top,
      width: K.width,
      height: K.height,
      radius: parseFloat(
        getComputedStyle(B).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ o(
      Ui,
      {
        group: W,
        groupKey: W ? f.key : null,
        anchor: W ? G.getTrigger(f.key) : null,
        railEdge: z,
        railShape: oe,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: Ne,
        onClose: G.close,
        panelProps: G.flyoutProps,
        accentColor: m,
        activeBackgroundColor: x,
        activeForegroundColor: P,
        solidSurface: M ?? He
      }
    );
  }, ao = l ? /* @__PURE__ */ o(
    O,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...w ? { pt: "12px", pb: "12px" } : {
          height: Sn,
          minHeight: Sn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: ye
      },
      children: i || a ? /* @__PURE__ */ o(
        To,
        {
          logo: i,
          title: v ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: u,
          color: g ?? Ge,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, co = !l && i ? /* @__PURE__ */ o(
    O,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: w ? pt : 1
      },
      children: /* @__PURE__ */ o(
        To,
        {
          logo: i,
          appName: a || "App",
          onClick: c,
          menuOpen: u,
          color: g ?? Ge,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, te = F ? 0.5 : w ? 0.75 : v ? 1 : 1.5;
  return /* @__PURE__ */ o(Ct.Provider, { value: w, children: /* @__PURE__ */ y(
    O,
    {
      ref: ue,
      ...H,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": v ? "true" : "false",
      "data-labeled": F ? "true" : "false",
      sx: {
        width: io,
        minWidth: io,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: He,
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
        ...w ? Fo : {}
      },
      children: [
        De.lens,
        ao ?? co,
        E ? /* @__PURE__ */ o(
          O,
          {
            sx: {
              flexShrink: 0,
              px: te,
              pt: w ? 0 : 1,
              pb: w ? 0 : 1
            },
            children: E
          }
        ) : null,
        /* @__PURE__ */ o(
          O,
          {
            ref: Q,
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: ge ? "auto" : "hidden",
              overflowX: "hidden",
              // Scrollbar shows only while the pointer is inside (or a
              // keyboard user tabs in). Not :focus-within, since a
              // clicked link keeps focus and would pin it on.
              ...w ? {
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
                width: w ? qt : 8
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
              ...w ? ia(ve) : { px: te },
              pt: L && !l ? `${L}px` : w ? pt : 1,
              pb: w ? pt : 2
            },
            children: /* @__PURE__ */ y(
              O,
              {
                ref: se,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  j.glass,
                  Dt(e),
                  t.length > 0 ? /* @__PURE__ */ y(
                    O,
                    {
                      sx: { mt: "auto", pt: w ? pt : 2 },
                      children: [
                        T ? null : /* @__PURE__ */ o(
                          ot,
                          {
                            sx: {
                              mb: w ? pt : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        Dt(t)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        T ? /* @__PURE__ */ o(
          O,
          {
            sx: {
              flexShrink: 0,
              px: te,
              pb: 1.5,
              ...w ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: Jt
                }
              } : {}
            },
            children: /* @__PURE__ */ o(
              O,
              {
                sx: {
                  borderTop: `1px solid ${we}`,
                  pt: w ? pt : 1.5
                },
                children: T
              }
            )
          }
        ) : null,
        w ? gt() : null
      ]
    }
  ) });
}, ur = "var(--lumora-content-padding, 0px)", _n = `calc(${ur} * -1)`, bl = ({
  children: e,
  flushTop: t = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: a
}) => /* @__PURE__ */ o(
  O,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: _n,
        mt: t ? _n : 0,
        // Space below it, like any other block on the page
        mb: ur,
        px: i ? ur : 0,
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
      ...Array.isArray(a) ? a : [a]
    ],
    children: e
  }
), da = ({ keys: e }) => /* @__PURE__ */ o(
  O,
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
    children: e.map((t) => /* @__PURE__ */ o("span", { children: t }, t))
  }
), Oe = {
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
}, $e = {
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
}, vt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, yt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, wt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, vs = Ao(), Be = vs.typography.pxToRem, Nr = (e) => {
  const t = e === "dark", r = [...vs.shadows];
  return r[1] = t ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: t ? Oe[300] : Oe[200],
        main: Oe[400],
        dark: Oe[700],
        contrastText: Oe[50]
      },
      info: t ? {
        light: Oe[500],
        main: Oe[700],
        dark: Oe[900],
        contrastText: Oe[300]
      } : {
        light: Oe[100],
        main: Oe[300],
        dark: Oe[600],
        contrastText: $e[50]
      },
      warning: t ? { light: yt[400], main: yt[500], dark: yt[700] } : { light: yt[300], main: yt[400], dark: yt[800] },
      error: t ? { light: wt[400], main: wt[500], dark: wt[700] } : { light: wt[300], main: wt[400], dark: wt[800] },
      success: t ? { light: vt[400], main: vt[500], dark: vt[700] } : { light: vt[300], main: vt[400], dark: vt[800] },
      grey: $e,
      divider: t ? ze($e[700], 0.6) : ze($e[300], 0.4),
      background: t ? { default: $e[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: t ? { primary: "hsl(0, 0%, 100%)", secondary: $e[400] } : { primary: $e[800], secondary: $e[600] },
      action: t ? {
        hover: ze($e[600], 0.2),
        selected: ze($e[600], 0.3)
      } : {
        hover: ze($e[200], 0.2),
        selected: ze($e[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Be(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Be(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Be(30), lineHeight: 1.2 },
      h4: { fontSize: Be(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Be(20), fontWeight: 600 },
      h6: { fontSize: Be(18), fontWeight: 600 },
      subtitle1: { fontSize: Be(18) },
      subtitle2: { fontSize: Be(14), fontWeight: 500 },
      body1: { fontSize: Be(14) },
      body2: { fontSize: Be(14), fontWeight: 400 },
      caption: { fontSize: Be(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, ua = 6, fa = 8, Tn = (e, t) => typeof e == "object" ? e[t] : e, Qo = ({
  themeMode: e,
  muiTheme: t,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: a = !0,
  contentPadding: c = ns,
  sidebarBackgroundColor: u,
  contentBackgroundColor: l,
  content: p
}) => {
  const h = Kn(r.breakpoints.down("md")), g = e === "dark", m = is({
    showSidebar: a,
    isMobile: h,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), x = ko(s, n) ? {
    gutterPx: it,
    radiusPx: rs
  } : void 0, S = Eo, I = as(
    Tn(u, e),
    g
  ), A = cs(
    Tn(l, e),
    g
  ), b = ss(c, r), _ = x ? /* @__PURE__ */ y(Kt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ o(Pe, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ o(
      Kt,
      {
        alignItems: "center",
        spacing: `${Do}px`,
        sx: { mt: 2 },
        children: Array.from({ length: fa }, (M, v) => /* @__PURE__ */ o(
          Y,
          {
            sx: {
              width: de,
              height: de,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ o(
              Pe,
              {
                variant: "rounded",
                width: Jt,
                height: Jt
              }
            )
          },
          v
        ))
      }
    )
  ] }) : /* @__PURE__ */ y(Kt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ o(Pe, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ o(Y, { sx: { height: 8 } }),
    Array.from({ length: ua }, (M, v) => /* @__PURE__ */ o(Pe, { variant: "rounded", width: 28, height: 28 }, v))
  ] });
  return /* @__PURE__ */ o(_o, { theme: t, children: /* @__PURE__ */ y(
    Y,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: A
      },
      children: [
        h && /* @__PURE__ */ y(
          Y,
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
              bgcolor: I,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ o(Pe, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ o(Pe, { variant: "text", width: 96 }),
              /* @__PURE__ */ o(Y, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ o(Pe, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !h && m > 0 && /* @__PURE__ */ o(
          Y,
          {
            sx: {
              position: "relative",
              width: m,
              flexShrink: 0
            },
            children: /* @__PURE__ */ o(
              Y,
              {
                sx: x ? {
                  position: "fixed",
                  top: x.gutterPx,
                  bottom: x.gutterPx,
                  left: x.gutterPx,
                  width: m - 2 * x.gutterPx,
                  borderRadius: `${x.radiusPx}px`,
                  bgcolor: I
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: m,
                  bgcolor: I
                },
                children: _
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          Y,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              // The variables the wrapper's <main> sets, so a host's `content`
              // that sizes itself from them measures as it will in the app
              "--lumora-content-padding": b,
              "--lumora-sticky-top": h ? `${S}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: h ? `${S}px` : 0
            },
            children: p ?? /* @__PURE__ */ y(Me, { children: [
              /* @__PURE__ */ o(Pe, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ o(
                Pe,
                {
                  variant: "text",
                  width: 320,
                  sx: { mb: 3 }
                }
              ),
              /* @__PURE__ */ o(Kt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from(
                { length: h ? 2 : 4 },
                (M, v) => /* @__PURE__ */ o(
                  Pe,
                  {
                    variant: "rounded",
                    height: 96,
                    sx: { flex: 1 }
                  },
                  v
                )
              ) }),
              /* @__PURE__ */ o(Pe, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, fr = Ao(Nr("light")), Ro = Ao(Nr("dark")), ha = (e) => e === "dark" ? Ro : fr, pa = ({
  theme: e = "light",
  darkModeSelector: t,
  ...r
}) => {
  const n = Xn();
  if (!t) {
    const i = ha(e);
    return /* @__PURE__ */ y(_o, { theme: i, children: [
      /* @__PURE__ */ o(nr, {}),
      /* @__PURE__ */ o(
        Qo,
        {
          themeMode: e,
          muiTheme: i,
          hostTheme: n,
          ...r
        }
      )
    ] });
  }
  const s = `${t} &`;
  return /* @__PURE__ */ y(_o, { theme: fr, children: [
    /* @__PURE__ */ o(nr, {}),
    /* @__PURE__ */ o(
      ei,
      {
        styles: {
          [`${t} body`]: {
            backgroundColor: Ro.palette.background.default,
            color: Ro.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ o(Y, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ o(
      Qo,
      {
        themeMode: "light",
        muiTheme: fr,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ o(Y, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ o(
      Qo,
      {
        themeMode: "dark",
        muiTheme: Ro,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class J extends Error {
  constructor(t, r, n = null) {
    super(t), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const re = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, fe = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, tt = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, ma = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        tt.ACCESS_TOKEN
      ), t = localStorage.getItem(
        tt.REFRESH_TOKEN
      ), r = localStorage.getItem(tt.USER);
      e && !localStorage.getItem(fe.ACCESS_TOKEN) && localStorage.setItem(fe.ACCESS_TOKEN, e), t && !localStorage.getItem(fe.REFRESH_TOKEN) && localStorage.setItem(
        fe.REFRESH_TOKEN,
        t
      ), r && !localStorage.getItem(fe.USER) && localStorage.setItem(fe.USER, r), (e || t || r) && (localStorage.removeItem(tt.ACCESS_TOKEN), localStorage.removeItem(tt.REFRESH_TOKEN), localStorage.removeItem(tt.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, er = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new J(
        "localStorage is not available",
        re.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new J(
      "Storage quota exceeded. Please clear browser data.",
      re.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new J(
      "Access to localStorage is denied. Please check browser settings.",
      re.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      t.name
    ), new J(
      "Failed to access storage",
      re.STORAGE_ACCESS_DENIED,
      t
    ));
  }
}, tr = (e, t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new J(
        "localStorage is not available",
        re.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, t), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new J(
      "Storage quota exceeded. Please clear browser data.",
      re.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new J(
      "Access to localStorage is denied. Please check browser settings.",
      re.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new J(
      "Failed to write to storage",
      re.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, ys = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (t) {
    return t.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, to = () => {
  try {
    ma();
    const e = er(fe.ACCESS_TOKEN), t = er(fe.REFRESH_TOKEN), r = er(fe.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), ys(fe.USER);
      }
    return {
      accessToken: e,
      refreshToken: t,
      user: n
    };
  } catch (e) {
    throw e instanceof J ? e : new J(
      "Failed to retrieve authentication tokens",
      re.UNKNOWN_ERROR,
      e
    );
  }
}, ga = () => {
  try {
    const { accessToken: e, refreshToken: t } = to();
    return !(e || t) ? {
      isAuthenticated: !1,
      error: new J(
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
      error: e instanceof J ? e : new J(
        "Authentication check failed",
        re.UNKNOWN_ERROR,
        e
      )
    };
  }
}, ws = (e, t, r = null) => {
  try {
    if (!e && !t)
      throw new J(
        "At least one token must be provided",
        re.TOKEN_INVALID
      );
    return e && tr(fe.ACCESS_TOKEN, e), t && tr(fe.REFRESH_TOKEN, t), r && tr(fe.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof J ? n : new J(
        "Failed to store tokens",
        re.UNKNOWN_ERROR,
        n
      )
    };
  }
}, oo = () => {
  try {
    return [
      fe.ACCESS_TOKEN,
      fe.REFRESH_TOKEN,
      fe.USER,
      // Also clear legacy keys for complete cleanup
      tt.ACCESS_TOKEN,
      tt.REFRESH_TOKEN,
      tt.USER
    ].map((n) => ys(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof J ? e : new J(
        "Failed to clear tokens",
        re.LOGOUT_FAILED,
        e
      )
    };
  }
}, xa = () => {
  try {
    const { user: e } = to();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof J ? e : new J(
        "Failed to retrieve user data",
        re.UNKNOWN_ERROR,
        e
      )
    };
  }
}, vl = (e) => {
  if (!(e instanceof J))
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
}, hr = (e, t = "Unknown") => {
  const r = {
    context: t,
    message: e.message,
    code: e instanceof J ? e.code : "UNKNOWN",
    timestamp: e instanceof J ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof J && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, ba = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const t = fn.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, s = [];
  const i = (a, c) => {
    s.forEach(({ resolve: u, reject: l }) => {
      a ? l(a) : c && u(c);
    }), s = [];
  };
  return t.interceptors.request.use(
    (a) => {
      const { accessToken: c } = to();
      return c && a.headers && (a.headers.Authorization = `Bearer ${c}`), a;
    },
    (a) => Promise.reject(a)
  ), t.interceptors.response.use(
    (a) => a,
    async (a) => {
      var g;
      const c = a.config, u = (g = a.response) == null ? void 0 : g.status, l = (c == null ? void 0 : c.url) || "", p = l.includes("/auth/refresh");
      if (u !== 401 || c._retry || p)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: h } = to();
      if (!h) {
        const m = new Error(
          "No refresh token available for token refresh"
        );
        return hr(m, "AxiosClient - Token Refresh"), oo(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((m, x) => {
          s.push({ resolve: m, reject: x });
        }).then((m) => {
          const {
            accessToken: x,
            refreshToken: S
          } = m;
          if (c.headers && (c.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const I = JSON.parse(
                  c.data || "{}"
                );
                I.refresh_token = S, c.data = JSON.stringify(I);
              } else
                c.data && typeof c.data == "object" ? c.data.refresh_token = S : c.data = JSON.stringify({
                  refresh_token: S
                });
            } catch {
              c.data = JSON.stringify({
                refresh_token: S
              });
            }
          return t(c);
        }).catch((m) => Promise.reject(m));
      r = !0, n = fn.post(
        `${e}/auth/refresh`,
        {
          refresh_token: h
        }
      );
      try {
        const m = await n, { accessToken: x, refreshToken: S } = m.data;
        if (ws(x, S, null), i(null, {
          accessToken: x,
          refreshToken: S
        }), c.headers && (c.headers.Authorization = `Bearer ${x}`), l.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const I = JSON.parse(
                c.data || "{}"
              );
              I.refresh_token = S, c.data = JSON.stringify(I);
            } else
              c.data && typeof c.data == "object" ? c.data.refresh_token = S : c.data = JSON.stringify({
                refresh_token: S
              });
          } catch {
            c.data = JSON.stringify({
              refresh_token: S
            });
          }
        return t(c);
      } catch (m) {
        return hr(
          m,
          "AxiosClient - Token Refresh Failed"
        ), i(m), oo(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(m);
      } finally {
        r = !1, n = null;
      }
    }
  ), t;
}, va = async (e, t) => {
  const { accessToken: r, refreshToken: n } = to();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return ws(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      hr(s, "TokenValidator - Refresh Failed");
    }
  return oo(), t ? t() : window.location.href = "/login", !1;
}, Vt = ({ size: e = 20 }) => /* @__PURE__ */ y(
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
      /* @__PURE__ */ o(
        "path",
        {
          d: "M21.7931 29.9243V20.5466L11.0774 10.4528V20.5466L21.7931 29.9243Z",
          fill: "#05A393"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M21.7931 20.1102L21.7931 10.0939L11.0774 0V10.0939L21.7931 20.1102Z",
          fill: "#049586"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M2.19027e-05 29.9243V20.5466L10.7157 10.4528V20.5466L2.19027e-05 29.9243Z",
          fill: "#09C1AE"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M22.1555 19.4716V10.0939L32.8712 0V10.0939L22.1555 19.4716Z",
          fill: "#016F63"
        }
      )
    ]
  }
), Cn = be(Or), et = "#09C1AE", Io = (e, t) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${et} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
    animation: "nexa-beam 3s linear infinite",
    zIndex: 0
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${e - 2}px`,
    bgcolor: t,
    zIndex: 1
  },
  "& > *": { position: "relative", zIndex: 2 },
  "@keyframes nexa-beam": { to: { transform: "rotate(360deg)" } },
  "@media (prefers-reduced-motion: reduce)": {
    "&::before": { animation: "none" }
  }
}), ya = (e) => ({
  ...Io(ne, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${ne - 2}px`,
    zIndex: 1,
    background: `${Co(et, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), An = ({
  variant: e,
  onClick: t,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = Mr(), u = d.useContext(Ct), l = Ye().palette.mode === "dark", p = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", h = {
    onClick: t,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ y(
    Ve,
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
        borderColor: r ? et : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: i,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${et}`,
          outlineOffset: 2
        },
        ...n && Io(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ o(Vt, { size: 20 }),
        /* @__PURE__ */ o(
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
        s && /* @__PURE__ */ o(da, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && u && sr ? /* @__PURE__ */ o(Te, { title: p, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ o(
    Re,
    {
      ...h,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: de,
        height: de,
        borderRadius: `${ne}px`,
        ...Co(et, l, "clear"),
        ...r && {
          boxShadow: `${Co(et, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${Cn.duration}ms ${Cn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [xe]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && ya(l)
      },
      children: /* @__PURE__ */ o(Vt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ o(Te, { title: p, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ o(
    Re,
    {
      ...h,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": u || void 0,
      sx: {
        width: u ? de : 44,
        height: u ? de : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? et : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Io(8, "background.paper")
      },
      children: /* @__PURE__ */ o(Vt, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ o(Te, { title: p, placement: "left", children: /* @__PURE__ */ o(
    Re,
    {
      ...h,
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
        outline: r ? `2px solid ${et}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${et}` },
        ...n && Io(16, "background.paper")
      },
      children: /* @__PURE__ */ o(O, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ o(Vt, { size: 26 }) })
    }
  ) });
}, So = ({
  title: e = "",
  message: t = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ o(oi, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ y(ri, { children: [
  /* @__PURE__ */ o(ni, { fontSize: "small" }),
  /* @__PURE__ */ o(ae, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ o(
    ae,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: t
    }
  ),
  /* @__PURE__ */ o(
    jn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Gt = 24, wa = 720, Sa = 1140, Ea = 1250, Ra = ({
  open: e,
  children: t,
  variant: r,
  position: n,
  width: s,
  sidebarWidthPx: i,
  bottomOffsetPx: a,
  fullScreen: c,
  fullScreenBottom: u = "0px",
  onClose: l
}) => {
  const p = d.useRef(!1);
  d.useEffect(() => {
    const S = requestAnimationFrame(() => {
      p.current = !0;
    });
    return () => cancelAnimationFrame(S);
  }, []), d.useEffect(() => {
    if (!e || !l)
      return;
    const S = (I) => {
      I.key === "Escape" && l();
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [e, l]);
  const h = r === "docked", g = Gt + a;
  let m;
  c ? m = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : h ? m = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : m = {
    bottom: g,
    ...n === "left" ? { left: i + Gt } : { right: Gt },
    width: s,
    maxWidth: `calc(100vw - ${Gt * 2}px)`,
    height: `min(${wa}px, calc(100vh - ${g + Gt}px))`,
    borderRadius: "12px"
  };
  const x = /* @__PURE__ */ o(
    yr,
    {
      role: h ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: h ? Sa : Ea,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...m
      },
      children: t
    }
  );
  return h ? /* @__PURE__ */ o(
    ii,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...p.current ? {} : { timeout: { enter: 0 } },
      children: x
    }
  ) : /* @__PURE__ */ o(
    si,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: x
    }
  );
}, Ia = 180, On = 250, _a = "#01584F", Ta = ({
  text: e,
  testId: t
}) => {
  const r = d.useRef(null), [n, s] = d.useState(!1), i = d.useCallback(() => {
    const a = r.current;
    a && s(a.scrollWidth > a.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    i();
  }, [i, e]), d.useEffect(() => {
    const a = r.current;
    if (!a)
      return;
    const c = new ResizeObserver(() => i());
    return c.observe(a), () => c.disconnect();
  }, [i]), /* @__PURE__ */ o(
    Te,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ o(
        ae,
        {
          ref: r,
          variant: "caption",
          component: "span",
          "aria-hidden": !0,
          "data-testid": t,
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
}, Ss = (e, t, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : t, a = e ? _a : t;
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
    color: r ? "#ffffff" : i,
    backgroundColor: r ? a : "transparent",
    "&:hover": {
      backgroundColor: r ? a : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : i
    }
  } : {
    width: s,
    height: s,
    color: r ? "#ffffff" : i,
    backgroundColor: r ? a : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? a : "action.hover",
      borderRadius: "4px"
    }
  } };
}, Es = ({ link: e }) => /* @__PURE__ */ y(Le, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ o(
    O,
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
  /* @__PURE__ */ o(
    Ta,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Rs = (e, t, r) => r ? e : /* @__PURE__ */ o(Te, { title: t, placement: "right", arrow: !0, children: e }), Ca = ({
  link: e,
  activePath: t,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: a
}) => {
  const c = Ye(), [u, l] = d.useState(null), [p, h] = d.useState(!1), g = d.useRef(
    null
  ), m = d.useRef(null), x = d.useRef(null), S = d.useRef(!1), I = d.useRef(!1), A = d.useId(), b = () => {
    g.current && (clearTimeout(g.current), g.current = null);
  }, _ = () => {
    b(), g.current = setTimeout(() => {
      h(!1), g.current = null;
    }, Ia);
  }, M = () => {
    b(), h(!0);
  };
  d.useEffect(() => {
    if (!p)
      return;
    const E = (T) => {
      var $;
      T.key === "Escape" && (h(!1), ($ = x.current) == null || $.focus());
    };
    return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
  }, [p]), d.useEffect(() => {
    if (!p || !I.current)
      return;
    const E = globalThis.requestAnimationFrame(() => {
      var $;
      const T = ($ = m.current) == null ? void 0 : $.querySelector(
        '[role="menuitem"]'
      );
      T == null || T.focus(), I.current = !1;
    });
    return () => cancelAnimationFrame(E);
  }, [p]);
  const v = at(e, t), { activeBg: C, sx: R } = Ss(
    s,
    n,
    v,
    a
  ), F = /* @__PURE__ */ o(
    Re,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        S.current || M();
      },
      onBlur: (E) => {
        var $;
        const T = E.relatedTarget;
        T && (($ = m.current) != null && $.contains(T)) || _();
      },
      onKeyDown: (E) => {
        E.key === "ArrowDown" && (E.preventDefault(), I.current = !0, M());
      },
      onClick: (E) => {
        E.stopPropagation(), !(e.path && !_t(E)) && (E.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": p,
      "aria-controls": p ? A : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: R,
      children: a ? /* @__PURE__ */ o(Es, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ y(
    O,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ o(
          O,
          {
            ref: l,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              S.current = !0, M();
            },
            onMouseLeave: () => {
              S.current = !1, _();
            },
            children: Rs(F, e.text, a)
          }
        ),
        /* @__PURE__ */ o(
          vr,
          {
            open: p && !!u,
            anchorEl: u,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (E) => E.zIndex.modal },
            children: /* @__PURE__ */ o(
              yr,
              {
                ref: m,
                elevation: 0,
                onMouseEnter: b,
                onMouseLeave: _,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: i,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: c.shadows[8],
                  maxWidth: On,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ o(
                  wr,
                  {
                    id: A,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: On
                    },
                    children: L(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function L(E, T, $) {
    return E.flatMap((D) => {
      const X = St(T, D);
      return Rt(D) ? [
        /* @__PURE__ */ o(
          ai,
          {
            disableSticky: !0,
            title: D.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + $ * 1.5,
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
          X
        ),
        ...L(D.subitems, X, $ + 1)
      ] : [
        /* @__PURE__ */ y(
          ct,
          {
            role: "menuitem",
            title: D.text,
            disabled: !D.path,
            selected: Ke(D, t),
            ...D.path && { component: "a", href: D.path },
            onClick: (q) => {
              D.path && !_t(q) || (q.preventDefault(), D.path && (r == null || r(D.path)), h(!1));
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + $ * 1.5,
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
                bgcolor: C,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: C
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              D.icon ? /* @__PURE__ */ o(Ie, { children: D.icon }) : null,
              /* @__PURE__ */ o(
                je,
                {
                  primary: D.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          X
        )
      ];
    });
  }
}, Aa = ({
  link: e,
  activePath: t,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const a = !!(e.path && t === e.path), { sx: c } = Ss(
    s,
    n,
    a,
    i
  );
  return Rs(
    /* @__PURE__ */ o(
      Re,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !_t(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: c,
        children: i ? /* @__PURE__ */ o(Es, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, Oa = () => /* @__PURE__ */ o(
  O,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ o(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), $a = () => /* @__PURE__ */ o(
  O,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ o(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), $n = (e, t) => e.map((r, n) => /* @__PURE__ */ y(d.Fragment, { children: [
  t(r, n),
  n < e.length - 1 ? /* @__PURE__ */ o(Oa, {}) : null
] }, n)), Ma = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: a = !1
}) => {
  const c = (l, p) => Rt(l) ? /* @__PURE__ */ o(
    Ca,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: p,
      surfaceBackgroundColor: i,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ o(
    Aa,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: p,
      railShowTitles: a
    }
  ), u = a ? 1.25 : 1;
  return /* @__PURE__ */ y(
    Le,
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
        $n(e, (l) => c(l, !1)),
        t.length > 0 ? /* @__PURE__ */ y(Me, { children: [
          /* @__PURE__ */ o($a, {}),
          /* @__PURE__ */ o(O, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ o(Le, { gap: u, alignItems: "center", children: $n(
            t,
            (l) => c(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, La = (e) => e ? Jn(e) : "USER", Da = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t.charAt(0).toUpperCase()).join(""), Mn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, pr = ({ count: e }) => e ? /* @__PURE__ */ o(
  O,
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
) : null, Wr = ({ name: e, avatar: t, color: r, size: n = 36 }) => /* @__PURE__ */ o(
  li,
  {
    src: t,
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
    children: Da(e)
  }
), Is = ({ name: e, role: t, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ y(Me, { children: [
  /* @__PURE__ */ o(Wr, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ y(
    O,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: 0,
        flexGrow: 1
      },
      children: [
        /* @__PURE__ */ o(
          ae,
          {
            variant: "body2",
            sx: { ...Mn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ o(
          ae,
          {
            variant: "caption",
            sx: { ...Mn, opacity: 0.8, color: "inherit" },
            children: La(t)
          }
        )
      ]
    }
  )
] }), Ln = {
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
}, _s = ({
  anchorEl: e,
  onClose: t,
  placement: r,
  width: n,
  avatarColor: s,
  showNotifications: i,
  notificationCount: a,
  onNotificationsClick: c,
  userName: u = "User",
  userRole: l,
  userAvatar: p,
  menuItems: h = [],
  showSettings: g,
  onSettingsClick: m,
  showThemeToggler: x,
  theme: S,
  onThemeToggle: I,
  onLogout: A
}) => {
  const b = (_) => () => {
    t(), _ == null || _();
  };
  return /* @__PURE__ */ y(
    di,
    {
      anchorEl: e,
      open: !!e,
      onClose: t,
      anchorOrigin: Ln[r].anchor,
      transformOrigin: Ln[r].transform,
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
        /* @__PURE__ */ o(
          Le,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ o(
              Is,
              {
                name: u,
                role: l,
                avatar: p,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ o(ot, {}),
        i && /* @__PURE__ */ y(ct, { onClick: b(c), children: [
          /* @__PURE__ */ o(Ie, { children: /* @__PURE__ */ o(qn, { fontSize: "small" }) }),
          /* @__PURE__ */ o(je, { children: "Notifications" }),
          /* @__PURE__ */ o(pr, { count: a })
        ] }),
        h.map((_) => /* @__PURE__ */ y(ct, { onClick: b(_.onClick), children: [
          _.icon && /* @__PURE__ */ o(Ie, { children: _.icon }),
          /* @__PURE__ */ o(je, { inset: !_.icon, children: _.label }),
          /* @__PURE__ */ o(pr, { count: _.badge })
        ] }, _.key)),
        g && /* @__PURE__ */ y(ct, { onClick: b(m), children: [
          /* @__PURE__ */ o(Ie, { children: /* @__PURE__ */ o(ci, { fontSize: "small" }) }),
          /* @__PURE__ */ o(je, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ o(ot, {}, "theme-divider"),
          /* @__PURE__ */ y(O, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ o(
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
            /* @__PURE__ */ y(
              ui,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: S,
                onChange: (_, M) => M && M !== S && (I == null ? void 0 : I()),
                disabled: !I,
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
                  /* @__PURE__ */ o(hn, { value: "light", children: "Light" }),
                  /* @__PURE__ */ o(hn, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ o(ot, {}),
        /* @__PURE__ */ y(
          ct,
          {
            onClick: b(A),
            sx: {
              color: S === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ o(Ie, { sx: { color: "inherit" }, children: /* @__PURE__ */ o(Yn, { fontSize: "small" }) }),
              /* @__PURE__ */ o(je, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Ts = 64, ka = 2, Ut = ({
  label: e,
  icon: t,
  onClick: r,
  active: n,
  color: s,
  activeColor: i,
  activeBackground: a,
  ariaLabel: c,
  haspopup: u,
  isPage: l = !1,
  href: p,
  testId: h
}) => /* @__PURE__ */ y(
  Ve,
  {
    ...p && { component: "a", href: p },
    onClick: r,
    "aria-label": c ?? e,
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
      /* @__PURE__ */ o(
        O,
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
          children: t
        }
      ),
      /* @__PURE__ */ o(
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
), Na = ({
  onMenuClick: e,
  menuOpen: t,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: i,
  assistantActive: a,
  showProfile: c,
  background: u,
  color: l,
  activeColor: p,
  activeBackground: h,
  pinnedLinks: g = [],
  activePath: m,
  onLinkClick: x,
  ...S
}) => {
  const I = g.filter((R) => R.path).slice(0, ka), [A, b] = d.useState(
    null
  ), { userName: _ = "User", userAvatar: M, avatarColor: v } = S, C = { color: l, activeColor: p, activeBackground: h };
  return /* @__PURE__ */ y(
    yr,
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
        height: `calc(${Ts}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: u,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ o(
          Ut,
          {
            label: "Menu",
            icon: /* @__PURE__ */ o(Vn, {}),
            onClick: e,
            active: t,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...C
          }
        ),
        I.map((R) => /* @__PURE__ */ o(
          Ut,
          {
            label: R.text,
            icon: R.icon,
            href: R.path,
            onClick: (F) => {
              _t(F) && (F.preventDefault(), x == null || x(R.path));
            },
            active: at(R, m),
            isPage: !0,
            testId: `mobile-nav-link-${R.text}`,
            ...C
          },
          R.path
        )),
        s && /* @__PURE__ */ o(
          Ut,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ o(
              O,
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
                children: /* @__PURE__ */ o(Vt, { size: 18 })
              }
            ),
            onClick: i,
            active: a,
            testId: "mobile-nav-nexa",
            ...C
          }
        ),
        r && /* @__PURE__ */ o(
          Ut,
          {
            label: "Search",
            icon: /* @__PURE__ */ o(Sr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...C
          }
        ),
        c && /* @__PURE__ */ y(Me, { children: [
          /* @__PURE__ */ o(
            Ut,
            {
              label: "Account",
              ariaLabel: `Account menu for ${_}`,
              icon: /* @__PURE__ */ o(
                Wr,
                {
                  name: _,
                  avatar: M,
                  color: v,
                  size: 26
                }
              ),
              onClick: (R) => b(R.currentTarget),
              active: !!A,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...C
            }
          ),
          /* @__PURE__ */ o(
            _s,
            {
              anchorEl: A,
              onClose: () => b(null),
              placement: "above-end",
              width: 280,
              ...S
            }
          )
        ] })
      ]
    }
  );
}, Wa = ({
  open: e,
  onClose: t,
  search: r
}) => /* @__PURE__ */ o(
  fi,
  {
    anchor: "top",
    open: e,
    onClose: t,
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
    children: /* @__PURE__ */ y(
      Le,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ o(O, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ o(
            jn,
            {
              onClick: t,
              sx: { flexShrink: 0, textTransform: "none" },
              children: "Cancel"
            }
          )
        ]
      }
    )
  }
), Fa = ({
  height: e,
  onMenuClick: t,
  appName: r,
  logo: n,
  onBrandClick: s,
  brandMenuOpen: i,
  background: a,
  color: c,
  brandColor: u = c,
  endContent: l
}) => /* @__PURE__ */ o(
  hi,
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
    children: /* @__PURE__ */ y(pi, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      t && /* @__PURE__ */ o(
        Re,
        {
          "aria-label": "Open navigation menu",
          onClick: t,
          sx: { color: c },
          children: /* @__PURE__ */ o(Vn, {})
        }
      ),
      /* @__PURE__ */ o(
        To,
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
      l ? /* @__PURE__ */ o(O, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: l }) : null
    ] })
  }
), Cs = d.createContext(void 0), Fr = ({
  count: e,
  onClick: t,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const a = Mr(), c = d.useContext(Cs), u = d.useContext(Ct), l = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ o(
    Te,
    {
      title: l,
      placement: s,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ o(
        Re,
        {
          onClick: t,
          "aria-label": l,
          "data-testid": i,
          sx: {
            ...u ? {
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
          children: /* @__PURE__ */ o(
            Zn,
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
              children: c ?? /* @__PURE__ */ o(qn, {})
            }
          )
        }
      )
    }
  );
}, Dn = 14, Pa = 18, Ba = "blur(12px) saturate(180%) brightness(1.04)", za = (() => {
  var t;
  if (typeof navigator > "u")
    return !1;
  const e = (t = navigator.userAgentData) == null ? void 0 : t.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Ha = (e, t, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / t), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, Ga = 140, kn = 0.22, Ua = 0.14, Xa = (e, t, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!t || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var m;
      const g = e.current;
      g && (g.style.setProperty("--lx", `${i.x.toFixed(1)}px`), g.style.setProperty("--ly", `${i.y.toFixed(1)}px`), g.style.setProperty("--li", i.i.toFixed(3)), (m = n.current) == null || m.call(n, i.x, i.y, i.i));
    }, u = () => {
      i.x += (s.x - i.x) * kn, i.y += (s.y - i.y) * kn, i.i += (s.i - i.i) * Ua;
      const g = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      g && (i.x = s.x, i.y = s.y, i.i = s.i), c(), a = g ? 0 : requestAnimationFrame(u);
    }, l = () => {
      a || (a = requestAnimationFrame(u));
    }, p = (g) => {
      const m = e.current;
      if (g.pointerType === "touch" || !m)
        return;
      const x = m.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      s.x = (g.clientX - x.left) * m.offsetWidth / x.width, s.y = (g.clientY - x.top) * m.offsetHeight / x.height;
      const S = Math.max(
        x.left - g.clientX,
        0,
        g.clientX - x.right
      ), I = Math.max(
        x.top - g.clientY,
        0,
        g.clientY - x.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(S, I) / Ga), i.i < 0.01 && (i.x = s.x, i.y = s.y), l();
    }, h = () => {
      s.i = 0, l();
    };
    return document.addEventListener("pointermove", p, { passive: !0 }), document.documentElement.addEventListener("mouseleave", h), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", p), document.documentElement.removeEventListener("mouseleave", h);
    };
  }, [e, t]);
}, ro = d.forwardRef(
  ({
    isDark: e,
    solid: t,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: a
  }, c) => {
    const u = d.useRef(null), l = s && sr;
    Xa(u, i && sr, a);
    const p = Mo(), h = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [g, m] = d.useState(null), x = d.useRef(null), S = d.useCallback(
      (b) => {
        var M;
        if (u.current = b, typeof c == "function" ? c(b) : c && (c.current = b), (M = x.current) == null || M.disconnect(), x.current = null, !b || !l || !za || typeof ResizeObserver > "u")
          return;
        const _ = () => {
          const v = b.offsetWidth, C = b.offsetHeight;
          m(
            (R) => (R == null ? void 0 : R.width) === v && R.height === C ? R : v && C ? { width: v, height: C } : null
          );
        };
        x.current = new ResizeObserver(_), x.current.observe(b), _();
      },
      [c, l]
    ), I = d.useMemo(
      () => g ? Ha(g.width, g.height, Dn) : null,
      [g]
    ), A = l && !!(I && g);
    return /* @__PURE__ */ y(Me, { children: [
      A ? /* @__PURE__ */ o(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ y(
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
                /* @__PURE__ */ o(
                  "feImage",
                  {
                    href: I,
                    x: "0",
                    y: "0",
                    width: g.width,
                    height: g.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ o(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: Dn / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ o(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Pa,
                    xChannelSelector: "R",
                    yChannelSelector: "G"
                  }
                )
              ]
            }
          )
        }
      ) : null,
      /* @__PURE__ */ o(
        O,
        {
          ref: S,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": A ? "true" : void 0,
          sx: [
            wi(e, t, p),
            A ? {
              backdropFilter: `url(#${h}) ${Ba}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
ro.displayName = "GlassLayer";
const mr = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ka = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Nn = be(ds), Wn = be(No), Fn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', ja = ({ mode: e, onToggle: t, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = Ye().palette.mode === "dark", a = Mo(), c = d.useRef(null), u = d.useRef(null), l = (g) => {
    var m;
    g !== e && (t == null || t()), (m = (g === "light" ? c : u).current) == null || m.focus();
  }, p = (g) => {
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
  }, h = (g, m, x, S) => {
    const I = e === g;
    return /* @__PURE__ */ o(
      Ve,
      {
        ref: S,
        role: "radio",
        "aria-checked": I,
        "aria-label": m,
        tabIndex: I ? 0 : -1,
        onClick: () => l(g),
        "data-testid": `theme-segment-${g}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${ne}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: I ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: I ? n : "transparent",
          ...s && I ? es(i, a) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": I ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: i ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${ze(r, 0.6)}`
          },
          ...mr
        },
        children: /* @__PURE__ */ o(x, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ y(
    Le,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: p,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${ne}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        h("light", "Light", gi, c),
        h("dark", "Dark", mi, u)
      ]
    }
  );
}, Va = ({
  open: e,
  anchorEl: t,
  onClose: r,
  width: n,
  renderAvatar: s,
  userName: i,
  userEmail: a,
  roleLabel: c,
  accentColor: u,
  tint: l,
  showThemeToggler: p,
  theme: h,
  onThemeToggle: g,
  onProfileClick: m,
  onAiUsageClick: x,
  onLinkClick: S,
  menuItems: I = [],
  onLogout: A,
  glass: b = !1
}) => {
  const _ = Ye(), M = _.palette.mode === "dark", v = d.useRef(null), C = Tr(_.palette.background.paper), R = Lr({
    enabled: b,
    isDark: M,
    selector: Fn,
    radius: ne
  }), [F, L] = d.useState(null);
  d.useEffect(() => {
    if (!F || typeof ResizeObserver > "u")
      return;
    const w = new ResizeObserver(() => {
      var G;
      (G = v.current) == null || G.updatePosition();
    });
    return w.observe(F), () => w.disconnect();
  }, [F]);
  const E = (w) => {
    r(), w == null || w();
  }, T = (w) => {
    r(), w.onClick ? w.onClick() : w.path && (S == null || S(w.path));
  }, $ = {
    borderRadius: b ? `${ne}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, D = {
    fontSize: 12,
    lineHeight: "18px",
    letterSpacing: "0.02em",
    fontWeight: 600,
    // White on dark: the accent is too dim against a dark surface
    color: M ? "#ffffff" : u,
    borderRadius: "4px",
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "2px"
    },
    "&.Mui-focusVisible": {
      boxShadow: `0 0 0 2px ${ze(u, 0.6)}`
    },
    ...mr
  }, X = x ? /* @__PURE__ */ y(
    Le,
    {
      direction: "row",
      "data-testid": "account-menu-links",
      sx: { alignItems: "center", gap: 0.75, mt: 0.25 },
      children: [
        m ? /* @__PURE__ */ y(Me, { children: [
          /* @__PURE__ */ o(
            Ve,
            {
              onClick: () => E(m),
              "data-testid": "account-menu-view-profile",
              sx: D,
              children: "View profile"
            }
          ),
          /* @__PURE__ */ o(
            O,
            {
              component: "span",
              "aria-hidden": !0,
              sx: { color: "text.disabled", fontSize: 12 },
              children: "·"
            }
          )
        ] }) : null,
        /* @__PURE__ */ o(
          Ve,
          {
            onClick: () => E(x),
            "data-testid": "account-menu-ai-usage",
            sx: D,
            children: "My AI usage"
          }
        )
      ]
    }
  ) : null, q = /* @__PURE__ */ y(Le, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ y(O, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ o(ae, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: i }),
      a ? /* @__PURE__ */ o(
        ae,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary", fontSize: 12, lineHeight: "18px" },
          children: a
        }
      ) : null,
      c ? /* @__PURE__ */ o(
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
      X,
      m && !x ? /* @__PURE__ */ o(
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
            color: M ? "#ffffff" : u,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ o(
    Er,
    {
      open: e,
      anchorEl: t,
      onClose: r,
      action: v,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...b ? {
        slots: { transition: br },
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
      children: /* @__PURE__ */ y(
        O,
        {
          "data-testid": "account-menu",
          "data-glass": b ? "true" : void 0,
          sx: b ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${ne}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${Fn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Ka, width: n, minWidth: n },
          children: [
            b ? /* @__PURE__ */ o(
              ro,
              {
                isDark: M,
                solid: C,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Cr} ${Nn.duration}ms ${Nn.easing} both`,
                  [xe]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ y(
              O,
              {
                ...R.containerProps,
                sx: b ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Ar} ${Wn.duration}ms ${Wn.easing} 70ms both`,
                  [xe]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  R.lens,
                  m && !x ? /* @__PURE__ */ o(
                    Ve,
                    {
                      onClick: () => E(m),
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
                        ...mr
                      },
                      children: q
                    }
                  ) : /* @__PURE__ */ o(O, { "data-testid": "account-menu-header", children: q }),
                  /* @__PURE__ */ o(ot, {}),
                  p ? /* @__PURE__ */ y(
                    O,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...$,
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
                        /* @__PURE__ */ o(Ie, { children: /* @__PURE__ */ o(xi, { fontSize: "small" }) }),
                        /* @__PURE__ */ o(ae, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ o(
                          ja,
                          {
                            glass: b,
                            mode: h,
                            onToggle: g,
                            accentColor: u,
                            tint: l
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ y(
                    wr,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: p ? 0 : 0.5, pb: 0.5 },
                      children: [
                        I.map((w) => /* @__PURE__ */ y(
                          ct,
                          {
                            onClick: () => T(w),
                            "data-testid": `menu-item-${w.key}`,
                            sx: $,
                            children: [
                              /* @__PURE__ */ o(Ie, { children: w.icon }),
                              /* @__PURE__ */ o(ae, { sx: { flex: 1 }, children: w.label }),
                              /* @__PURE__ */ o(pr, { count: w.badge })
                            ]
                          },
                          w.key
                        )),
                        A ? /* @__PURE__ */ o(ot, { component: "li", sx: { my: 0.5 } }) : null,
                        A ? /* @__PURE__ */ y(
                          ct,
                          {
                            onClick: () => E(A),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...$,
                              color: M ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ o(Ie, { sx: { color: "inherit" }, children: /* @__PURE__ */ o(Yn, { fontSize: "small" }) }),
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
}, Ya = {
  "&:focus, &:focus-visible": { outline: "none" }
}, qa = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: r,
  onLinkClick: n,
  logo: s,
  title: i,
  onBrandClick: a,
  brandMenuOpen: c,
  brandColor: u,
  headerBackgroundColor: l,
  headerForegroundColor: p,
  activeAccentColor: h = "#01584f",
  activeBackgroundColor: g,
  groupArrowColor: m,
  groupAccentColor: x,
  activeForegroundColor: S,
  foregroundColor: I,
  surfaceBackgroundColor: A,
  flyoutSurfaceColor: b,
  collapsed: _,
  expandedWidth: M,
  collapsedWidth: v,
  topContent: C,
  submenuMode: R,
  color: F,
  hoverColor: L,
  avatarColor: E,
  showProfile: T = !0,
  userName: $ = "User",
  userEmail: D,
  userRole: X,
  userAvatar: q,
  showNotifications: w = !0,
  notificationCount: G = 0,
  onNotificationsClick: ue,
  whatsNewCount: se = 0,
  onProfileClick: Q,
  onAiUsageClick: ve,
  menuItems: ge,
  onLogout: De,
  theme: k = "light",
  showThemeToggler: H = !0,
  onThemeToggle: U
}) => {
  const j = Ye(), V = j.palette.mode === "dark", ce = A ?? (V ? j.palette.background.paper : "#ffffff"), ke = F ?? I ?? (V ? j.palette.text.primary : h), P = L ?? x ?? Zt(h), qe = E ?? h, he = d.useRef(null), [ie, He] = d.useState(!1), le = X ? Jn(X) : void 0, ye = (Je) => /* @__PURE__ */ o(
    Wr,
    {
      name: $,
      avatar: q,
      color: qe,
      size: Je
    }
  ), Ge = G + se, we = _ && R === "flyout", Ne = w ? /* @__PURE__ */ o(
    Fr,
    {
      count: Ge,
      onClick: ue,
      color: ke,
      hoverColor: P,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, pe = T ? /* @__PURE__ */ y(
    Ve,
    {
      ref: he,
      onClick: () => He(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ie,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: _ ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        p: we ? "4px" : 0.75,
        borderRadius: "10px",
        bgcolor: ie ? P : "transparent",
        "&:hover": { bgcolor: P },
        ...Ya
      },
      children: [
        _ && !we && w ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ o(
            Zn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Ge,
              children: ye(36)
            }
          )
        ) : ye(_ ? 36 : 40),
        _ ? null : /* @__PURE__ */ y(O, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ o(
            ae,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: ke, lineHeight: 1.3 },
              children: $
            }
          ),
          le ? /* @__PURE__ */ o(
            ae,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: ke,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: le
            }
          ) : null
        ] })
      ]
    }
  ) : null, Ze = !!Ne && (!_ || we || !pe);
  return /* @__PURE__ */ y(
    O,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": _ ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ o(
          dr,
          {
            mainLinks: e,
            secondaryLinks: t,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: s,
            title: i,
            onBrandClick: a,
            brandMenuOpen: c,
            brandColor: u,
            headerBackgroundColor: l,
            headerForegroundColor: p,
            activeAccentColor: h,
            activeBackgroundColor: g,
            groupArrowColor: m,
            groupAccentColor: x,
            activeForegroundColor: S,
            foregroundColor: I,
            surfaceBackgroundColor: ce,
            flyoutSurfaceColor: b,
            collapsed: _,
            expandedWidth: M,
            collapsedWidth: v,
            topContent: C,
            footer: pe || Ze ? /* @__PURE__ */ y(
              Le,
              {
                direction: we ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  we && Ze ? Ne : null,
                  pe,
                  !we && Ze ? Ne : null
                ]
              }
            ) : void 0,
            submenuMode: R
          }
        ),
        T ? /* @__PURE__ */ o(
          Va,
          {
            open: ie,
            anchorEl: he.current,
            onClose: () => He(!1),
            width: Math.max(M - 16, 240),
            renderAvatar: ye,
            userName: $,
            userEmail: D,
            roleLabel: le,
            accentColor: h,
            tint: P,
            showThemeToggler: H,
            theme: k,
            onThemeToggle: U,
            onProfileClick: Q,
            onAiUsageClick: ve,
            onLinkClick: n,
            menuItems: ge,
            onLogout: De,
            glass: R === "flyout"
          }
        ) : null
      ]
    }
  );
}, Pn = be(ds), Bn = be(No), zn = 240, Za = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Ja = ({
  anchorEl: e,
  onClose: t,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: a = !1
}) => {
  const c = Ye(), u = c.palette.mode === "dark", l = !!e, p = Tr(c.palette.background.paper), h = Lr({
    enabled: a,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: ne
  }), g = /* @__PURE__ */ o(
    wr,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((m) => {
        const x = m.key === n, S = m.accentColor ?? i;
        return /* @__PURE__ */ y(
          ct,
          {
            selected: x,
            onClick: () => s(m),
            "data-testid": `platform-item-${m.key}`,
            sx: {
              borderRadius: a ? `${ne}px` : "8px",
              // Compact: 14px name over a 12px description.
              py: 0.75,
              px: 1.5,
              minHeight: 0,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...a && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ o(Ie, { sx: { minWidth: 24 }, children: /* @__PURE__ */ o(
                O,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: S,
                    boxShadow: a ? `0 0 0 3px ${u ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ o(
                je,
                {
                  primary: m.name,
                  secondary: m.description,
                  sx: { my: 0 },
                  slotProps: {
                    primary: {
                      sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }
                    },
                    secondary: { sx: { fontSize: 12, lineHeight: "18px" } }
                  }
                }
              ),
              x ? /* @__PURE__ */ o(
                bi,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: S }
                }
              ) : null
            ]
          },
          m.key
        );
      })
    }
  );
  return /* @__PURE__ */ o(
    Er,
    {
      open: l,
      anchorEl: e,
      onClose: t,
      onClick: (m) => m.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: br },
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
      children: /* @__PURE__ */ o(
        O,
        {
          "data-testid": "platform-menu",
          "data-glass": a ? "true" : void 0,
          sx: a ? {
            position: "relative",
            minWidth: zn,
            borderRadius: `${ne}px`
          } : { ...Za, minWidth: zn },
          children: a ? /* @__PURE__ */ y(Me, { children: [
            /* @__PURE__ */ o(
              ro,
              {
                isDark: u,
                solid: p,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Cr} ${Pn.duration}ms ${Pn.easing} both`,
                  [xe]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ y(
              O,
              {
                ...h.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Ar} ${Bn.duration}ms ${Bn.easing} 70ms both`,
                  [xe]: { animation: "none" }
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
}, Qa = ({ children: e, anchorEl: t, ...r }) => {
  const n = d.useRef(null), s = !!(t && n.current && t.contains(n.current));
  return /* @__PURE__ */ y(
    O,
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
        /* @__PURE__ */ o(
          Ja,
          {
            ...r,
            anchorEl: s ? t : null
          }
        )
      ]
    }
  );
}, ec = ({
  compact: e,
  color: t,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var M;
  const {
    avatarColor: a,
    showNotifications: c,
    notificationCount: u,
    onNotificationsClick: l,
    userName: p = "User",
    userRole: h,
    userAvatar: g
  } = i, m = d.useRef(null), [x, S] = d.useState(
    null
  ), I = !!x, A = d.useRef(e);
  d.useEffect(() => {
    e && !A.current && S(null), A.current = e;
  }, [e]);
  const b = d.useContext(Ct);
  if (!c && !n)
    return null;
  const _ = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: t }
  };
  return /* @__PURE__ */ y(Me, { children: [
    /* @__PURE__ */ y(
      Le,
      {
        ref: m,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ o(
            Te,
            {
              title: e ? p : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ o(
                Ve,
                {
                  onClick: () => S(m.current),
                  "aria-label": `Account menu for ${p}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": I,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? b ? "4px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: t,
                    bgcolor: I ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ..._
                  },
                  children: /* @__PURE__ */ o(
                    Is,
                    {
                      name: p,
                      role: h,
                      avatar: g,
                      avatarColor: a,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          c && /* @__PURE__ */ o(
            Fr,
            {
              count: u + s,
              onClick: l,
              color: t,
              hoverColor: r,
              tooltipPlacement: "right",
              testId: "sidebar-notifications"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o(
      _s,
      {
        anchorEl: x,
        onClose: () => S(null),
        placement: e ? "beside" : "above",
        width: e || (M = m.current) == null ? void 0 : M.clientWidth,
        ...i
      }
    )
  ] });
}, tc = 120, oc = 300, Hn = be(ls), Gn = be(No), rc = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : t.value) ?? "";
}, nc = 'input, textarea, [contenteditable="true"]', gr = (e) => {
  var t;
  (t = e == null ? void 0 : e.querySelector(nc)) == null || t.focus();
}, sc = ({
  search: e,
  icon: t,
  mode: r,
  onExpand: n,
  autoFocus: s = !1,
  onAutoFocused: i,
  color: a,
  hoverColor: c
}) => {
  const u = Mr(), l = d.useContext(Ct), p = d.useRef(null), [h, g] = d.useState(null);
  return d.useEffect(() => {
    r === "full" && s && (gr(p.current), i == null || i());
  }, [r, s, i]), r === "full" ? /* @__PURE__ */ o(
    O,
    {
      ref: p,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : r === "popover" && l ? /* @__PURE__ */ o(
    ic,
    {
      search: e,
      icon: t,
      color: a,
      railTooltip: u
    }
  ) : /* @__PURE__ */ y(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ o(Te, { title: "Search", placement: "right", arrow: !0, ...u, children: /* @__PURE__ */ o(
          Re,
          {
            "aria-label": "Search",
            onClick: (m) => r === "expand" ? n == null ? void 0 : n() : g(m.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: a,
              borderRadius: "8px",
              "&:hover": { bgcolor: c }
            },
            children: t ?? /* @__PURE__ */ o(Sr, {})
          }
        ) }),
        /* @__PURE__ */ o(
          Er,
          {
            open: !!h,
            anchorEl: h,
            onClose: () => g(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (m) => gr(m)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, ic = ({ search: e, icon: t, color: r, railTooltip: n }) => {
  const s = Ye().palette.mode === "dark";
  Si(s, ar(r, s ? 0.3 : 0.35));
  const i = `rgb(${Mo()})`, a = Tr(s ? "#1e2430" : "#ffffff"), c = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${ne}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: i
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${ne}px`,
      "&.Mui-focusVisible": { borderColor: i }
    }
  }, u = d.useRef(null), l = d.useRef(null), [p, h] = d.useState(!1), g = d.useRef(!1), m = d.useRef(void 0), x = d.useRef(void 0), S = () => {
    clearTimeout(m.current), clearTimeout(x.current);
  }, I = d.useCallback(() => {
    S(), g.current = !1, h(!1);
  }, []), A = () => {
    clearTimeout(x.current), p || (clearTimeout(m.current), m.current = setTimeout(
      () => h(!0),
      tc
    ));
  }, b = () => {
    clearTimeout(m.current), clearTimeout(x.current), x.current = setTimeout(() => {
      !g.current && !rc(l.current) && h(!1);
    }, oc);
  };
  return d.useEffect(() => S, []), d.useEffect(() => {
    if (!p)
      return;
    const _ = setTimeout(() => gr(l.current)), M = (C) => {
      var F, L;
      const R = C.target;
      !((F = l.current) != null && F.contains(R)) && !((L = u.current) != null && L.contains(R)) && I();
    }, v = (C) => {
      var R;
      C.key === "Escape" && (I(), (R = u.current) == null || R.focus());
    };
    return document.addEventListener("pointerdown", M), document.addEventListener("keydown", v), () => {
      clearTimeout(_), document.removeEventListener("pointerdown", M), document.removeEventListener("keydown", v);
    };
  }, [p, I]), /* @__PURE__ */ y(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ o(
          Te,
          {
            title: p ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...n,
            children: /* @__PURE__ */ o(
              Re,
              {
                ref: u,
                "aria-label": "Search",
                "aria-expanded": p,
                onMouseEnter: A,
                onMouseLeave: b,
                onClick: () => {
                  S(), g.current = !0, h(!0);
                },
                sx: {
                  width: de,
                  height: de,
                  color: r,
                  borderRadius: `${ne}px`
                },
                children: t ?? /* @__PURE__ */ o(
                  Sr,
                  {
                    sx: { fontSize: Jt }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          vr,
          {
            open: p,
            anchorEl: u.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ y(
              O,
              {
                ref: l,
                "data-testid": "sidebar-search-card",
                onMouseEnter: A,
                onMouseLeave: b,
                sx: {
                  position: "relative",
                  width: 320,
                  p: 1,
                  borderRadius: `${ne}px`
                },
                children: [
                  /* @__PURE__ */ o(
                    ro,
                    {
                      isDark: s,
                      solid: a,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${Cr} ${Hn.duration}ms ${Hn.easing} both`,
                        [xe]: { animation: "none" }
                      }
                    }
                  ),
                  /* @__PURE__ */ o(
                    O,
                    {
                      sx: {
                        position: "relative",
                        // The host's field, set into the glass: an outlined
                        // input or button becomes a recessed glass well.
                        // Classes repeat to outrank the host's own styles.
                        ...c,
                        animation: `${Ar} ${Gn.duration}ms ${Gn.easing} 60ms both`,
                        [xe]: { animation: "none" }
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
}, ac = 80, cc = 300, lc = 32, dc = (e) => {
  const t = d.useRef(/* @__PURE__ */ new WeakSet()), r = d.useRef(void 0), n = d.useRef(void 0), [s, i] = d.useState(!1), [a, c] = d.useState(!1), [u, l] = d.useState(!1), p = d.useRef(null), h = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  d.useEffect(() => {
    if (!e) {
      h(), i(!1), c(!1), l(!1);
      return;
    }
    const x = (b) => {
      var M;
      if (b.pointerType !== "mouse")
        return;
      const _ = b.clientX <= lc;
      _ && ((M = p.current) == null || M.style.setProperty(
        "--edge-glow-y",
        `${b.clientY}px`
      )), l(_);
    }, S = () => l(!1), I = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), c(!1);
      }, cc));
    }, A = (b) => {
      t.current.has(b) || I();
    };
    return document.addEventListener("mouseover", A), document.addEventListener("pointermove", x, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", I), document.documentElement.addEventListener("mouseleave", S), () => {
      h(), document.removeEventListener("mouseover", A), document.removeEventListener("pointermove", x), document.documentElement.removeEventListener(
        "mouseleave",
        I
      ), document.documentElement.removeEventListener(
        "mouseleave",
        S
      );
    };
  }, [e]);
  const g = {
    onMouseOver: (x) => {
      t.current.add(x.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, ac));
    },
    onFocus: (x) => {
      uc(x.target) && c(!0);
    },
    onBlur: (x) => {
      const S = x.relatedTarget;
      (!S || !x.currentTarget.contains(S)) && c(!1);
    },
    onKeyDown: (x) => {
      x.key === "Escape" && (c(!1), i(!1));
    }
  }, m = e && (s || a);
  return {
    shown: m,
    nearEdge: e && u && !m,
    glowRef: p,
    rootProps: g
  };
}, uc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, fc = 100, hc = () => {
  const e = d.useRef(null), t = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = d.useState(!1), [i, a] = d.useState(!1), c = () => {
    clearTimeout(t.current), t.current = void 0;
  };
  return d.useEffect(() => {
    const l = (h) => {
      r.current.has(h) || (c(), s(!1));
    }, p = () => {
      c(), s(!1);
    };
    return document.addEventListener("mouseover", l), document.documentElement.addEventListener("mouseleave", p), () => {
      c(), document.removeEventListener("mouseover", l), document.documentElement.removeEventListener(
        "mouseleave",
        p
      );
    };
  }, []), d.useEffect(() => {
    if (!i)
      return;
    const l = (p) => {
      var h;
      (h = e.current) != null && h.contains(p.target) || a(!1);
    };
    return document.addEventListener("pointerdown", l), () => document.removeEventListener("pointerdown", l);
  }, [i]), {
    expanded: n || i,
    pin: () => a(!0),
    rootProps: {
      ref: e,
      onMouseOver: (l) => {
        r.current.add(l.nativeEvent), !n && t.current === void 0 && (t.current = setTimeout(() => {
          t.current = void 0, s(!0);
        }, fc));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (l) => {
        const p = l.relatedTarget;
        p && !l.currentTarget.contains(p) && a(!1);
      },
      onKeyDown: (l) => {
        l.key === "Escape" && a(!1);
      }
    }
  };
}, pc = (e) => {
  const t = e == null ? void 0 : e.querySelector(":scope > aside");
  if (!t)
    return null;
  const r = t.querySelector("[data-rail-surface]") ?? t, { right: n, width: s } = t.getBoundingClientRect(), { top: i, height: a } = r.getBoundingClientRect();
  return s <= 0 || a <= 0 ? null : { left: n, top: i, height: a };
}, mc = 300, or = 288, gc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", xc = 18, Un = 72, rr = 90, bc = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", vc = 68, yc = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), wc = typeof window > "u" ? Xt : Qs, yl = ({
  children: e,
  sidebarLinks: t = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: a = "rail",
  sidebarSubmenu: c = "expand",
  sidebarAutoHide: u = !1,
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: p,
  logo: h,
  onBrandClick: g,
  searchComponent: m,
  searchIcon: x,
  notificationsIcon: S,
  brandColor: I,
  contentPadding: A = ns,
  userMenuItems: b,
  sidebarBackgroundColor: _,
  sidebarHeaderBackgroundColor: M,
  groupAccentColor: v,
  activeSidebarForegroundColor: C,
  enableRefreshToken: R = !1,
  holdSessionSkeleton: F = !1,
  sessionSkeletonContent: L,
  activePath: E,
  onLinkClick: T,
  showProfile: $ = !0,
  userName: D,
  userRole: X,
  userAvatar: q,
  userEmail: w,
  onLogout: G,
  showSettings: ue = !0,
  onSettingsClick: se,
  onProfileClick: Q,
  onAiUsageClick: ve,
  showNotifications: ge = !0,
  notificationCount: De = 0,
  NotificationSidebarContent: k,
  whatsNewCount: H = 0,
  onNotificationsClick: U,
  platforms: j,
  currentPlatformKey: V,
  onPlatformSelect: ce,
  onVerify: ke,
  alertProps: P,
  style: qe,
  sidebarStyles: he,
  contentStyles: ie,
  accentColor: He,
  sidebarAccentColor: le,
  sidebarActiveBackgroundColor: ye,
  sidebarGroupArrowColor: Ge,
  sidebarForegroundColor: we,
  contentBackgroundColor: Ne,
  theme: pe = "light",
  darkModeSelector: Ze,
  showThemeToggler: dt = !1,
  onThemeToggle: Je,
  GlobalChatSidebar: mt,
  useChatSidebar: At,
  chatPanelMode: Wo = "docked",
  chatPanelPosition: no = "right",
  chatPanelWidth: Ot = 420,
  onChatClose: Fo,
  showAssistant: rt = !1,
  assistantPlacement: $t = "sidebar",
  assistantShortcut: so = "j",
  onAssistantClick: ut,
  assistantActive: Mt = !1,
  assistantBusy: Lt = !1,
  customNavbar: Dt,
  customNavbarProps: io,
  redirectToLogin: gt,
  apiBaseUrl: ao
}) => {
  const co = Xn(), te = Kn(co.breakpoints.down("md")), lo = dn(
    () => Ao(Nr(pe)),
    [pe]
  ), f = pe === "dark", W = He ?? "#01584f", z = le ?? W, B = cs(
    typeof Ne == "object" ? Ne[pe] : Ne,
    f
  ), K = a === "collapsible", oe = a === "panel", Ce = oe && s && !te, ee = a === "rail-labeled", We = K || ee, Ae = as(
    _,
    f
  ), Po = M ?? Ae, Se = we ?? (f ? "#ffffff" : z), kt = v ?? Zt(Se), Nt = M ? ir(Po) : Se, Pr = (N) => /* @__PURE__ */ o(
    Y,
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
  ), uo = I ?? Nt, [Br, Bo] = st(
    null
  ), zo = ((j == null ? void 0 : j.length) ?? 0) > 1, As = qo(() => Bo(null), []), Os = (N) => {
    Bo(null), ce ? ce(N) : N.key !== V && N.url && window.location.assign(N.url);
  }, zr = (N) => zo ? /* @__PURE__ */ o(
    Qa,
    {
      anchorEl: Br,
      onClose: As,
      platforms: j,
      currentKey: V,
      onSelect: Os,
      accentColor: W,
      glass: c === "flyout" && (K || oe) && !te,
      children: N
    }
  ) : N, fo = zo ? (N) => Bo(N.currentTarget) : g, ho = zo ? !!Br : void 0, Ho = zr(
    h ?? Pr(uo)
  ), $s = zr(
    h ?? Pr(I ?? Se)
  ), Go = hc(), Fe = ko(c, a), Ue = Fe || !Go.expanded, Xe = s && !te && Ri(u, c, a), nt = dc(Xe), Hr = Fe ? "popover" : "expand", Gr = Fe ? Yt : jt, Ur = Fe ? "transparent" : Ae, Xr = Fe && !M ? "transparent" : Po, [Ms, Kr] = st(!1), Ls = qo(() => Kr(!1), []), Qe = is({
    showSidebar: s,
    isMobile: te,
    sidebarVariant: a,
    sidebarSubmenu: c,
    sidebarAutoHide: u
  }), [jr, ft] = st(!1), [Vr, Uo] = st(!1), Ee = te && l === "bottom-bar", Yr = `calc(${Ts}px + env(safe-area-inset-bottom, 0px))`, [Wt, qr] = st({ open: !1, tab: "notifications" }), Zr = () => qr((N) => ({ ...N, open: !1 })), Ds = ge && !!k, Jr = xo(null), [ks, Ns] = st(null), Ft = qo(() => {
    const N = te ? null : pc(Jr.current), Z = N && Xe ? { ...N, left: it } : N;
    Ns(
      (me) => me && Z && me.left === Z.left && me.top === Z.top && me.height === Z.height ? me : Z
    );
  }, [te, Xe]);
  Xt(() => {
    if (Wt.open)
      return Ft(), window.addEventListener("resize", Ft), () => window.removeEventListener("resize", Ft);
  }, [Wt.open, Ft]);
  const [Ws, Fs] = st(!0), [Ps, Bs] = st(!1), Xo = At == null ? void 0 : At(), Qr = (Xo == null ? void 0 : Xo.isOpen) ?? !1, en = Wo === "floating" ? "floating" : "docked", zs = en === "docked" && Qr && mt && !te ? Ot : 0, po = xo(ke), tn = xo(!1), on = dn(
    () => ba(ao),
    [ao]
  );
  Xt(() => {
    po.current = ke;
  }, [ke]);
  const Ko = xo(ut);
  Ko.current = ut;
  const Pt = rt && so ? so.toLowerCase() : null;
  Xt(() => {
    if (!Pt)
      return;
    const N = (Z) => {
      (Z.metaKey || Z.ctrlKey) && !Z.altKey && !Z.shiftKey && Z.key.toLowerCase() === Pt && Ko.current && (Z.preventDefault(), Ko.current());
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [Pt]);
  const rn = (N) => {
    const Z = G(N);
    Z instanceof Promise && Z.catch((me) => {
      console.error("Error in logout handler:", me);
    });
  };
  if (wc(() => {
    (() => {
      var Z;
      try {
        const { isAuthenticated: me } = ga();
        if (!me) {
          console.log("No session found, redirecting to login"), oo(), gt();
          return;
        }
        if (!tn.current) {
          const { user: zt, error: Yo } = xa();
          if (zt && !Yo) {
            const Ys = {
              name: zt.name || "",
              email: zt.email || "",
              profilePicture: zt.profilePicture || "",
              role: zt.role || ""
            };
            tn.current = !0, (Z = po.current) == null || Z.call(po, Ys);
          } else
            Yo && console.error("Error getting user data:", Yo);
        }
        Bs(!0);
      } catch (me) {
        console.error("Error checking session:", me), oo(), gt();
      } finally {
        Fs(!1);
      }
    })();
  }, [gt]), Xt(() => {
    R && va(on, gt);
  }, [R, on]), Ws || F)
    return /* @__PURE__ */ o(
      pa,
      {
        theme: pe,
        darkModeSelector: Ze,
        sidebarVariant: a,
        sidebarSubmenu: c,
        sidebarAutoHide: u,
        showSidebar: s,
        contentPadding: A,
        sidebarBackgroundColor: _,
        contentBackgroundColor: Ne,
        content: L
      }
    );
  if (!Ps)
    return null;
  const Bt = m ?? (Dt ? /* @__PURE__ */ o(Dt, { ...io }) : null), Hs = (N) => {
    ft(!1), Uo(!1), Ft(), qr({ open: !0, tab: N });
  }, jo = k && (() => Hs("notifications")), Gs = De + H, nn = {
    avatarColor: z,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: b == null ? void 0 : b.map(
      (N) => N.onClick || !N.path ? N : { ...N, onClick: () => T == null ? void 0 : T(N.path) }
    ),
    showNotifications: ge,
    notificationCount: De,
    whatsNewCount: H,
    onNotificationsClick: jo,
    showProfile: $,
    userName: D,
    userRole: X,
    userAvatar: q,
    showSettings: ue,
    onSettingsClick: se,
    showThemeToggler: dt,
    theme: pe,
    onThemeToggle: Je,
    onLogout: rn
  }, Vo = (N) => /* @__PURE__ */ o(
    ec,
    {
      ...nn,
      compact: N,
      color: Se,
      hoverColor: kt
    }
  ), sn = Pt ? [yc() ? "⌘" : "Ctrl", Pt.toUpperCase()] : void 0, Us = (N) => rt && $t === "sidebar" ? /* @__PURE__ */ o(
    An,
    {
      variant: N ? "sidebar-icon" : "sidebar",
      onClick: ut,
      active: Mt,
      busy: Lt,
      shortcutKeys: sn,
      accentColor: Se
    }
  ) : null, Xs = (N) => Bt ? /* @__PURE__ */ o(
    sc,
    {
      search: Bt,
      icon: x,
      mode: N,
      onExpand: () => {
        Go.pin(), Kr(!0);
      },
      autoFocus: Ms,
      onAutoFocused: Ls,
      color: Se,
      hoverColor: kt
    }
  ) : null, mo = (N) => {
    const Z = Us(N !== "full"), me = Xs(N);
    return Z || me ? /* @__PURE__ */ y(
      Kt,
      {
        spacing: Fe ? `${Do}px` : 1.5,
        sx: { alignItems: N === "full" ? "stretch" : "center" },
        children: [
          Z,
          Fe && Z && me ? /* @__PURE__ */ o(
            Y,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Zt(Se)}`
              }
            }
          ) : null,
          me
        ]
      }
    ) : void 0;
  }, an = () => /* @__PURE__ */ o(
    dr,
    {
      mainLinks: t,
      secondaryLinks: r,
      activePath: E,
      onLinkClick: T,
      showHeaderBar: K,
      logo: Ho,
      title: n,
      onBrandClick: fo,
      brandMenuOpen: ho,
      brandColor: uo,
      headerBackgroundColor: K ? Xr : void 0,
      headerForegroundColor: K ? Nt : void 0,
      activeAccentColor: z,
      activeBackgroundColor: ye,
      groupArrowColor: Ge,
      groupAccentColor: v,
      activeForegroundColor: C,
      foregroundColor: we,
      surfaceBackgroundColor: Ur,
      flyoutSurfaceColor: Ae,
      collapsed: ee || Ue,
      showLabels: ee,
      expandedWidth: or,
      collapsedWidth: ee ? ts : Gr,
      topContent: mo(
        ee ? "popover" : Ue ? Hr : "full"
      ),
      footer: Vo(ee || Ue),
      submenuMode: Fe ? "flyout" : "inline"
    }
  ), cn = (N) => Fe ? Ks(N) : js(N), Ks = (N) => /* @__PURE__ */ y(
    Y,
    {
      component: "aside",
      ...Xe ? nt.rootProps : {},
      "data-auto-hide": Xe ? "true" : void 0,
      "data-shown": Xe ? String(nt.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (Z) => Z.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...Xe ? {
          position: "fixed",
          left: 0,
          width: Yt + 2 * it,
          pointerEvents: "none"
        } : {
          width: Qe,
          minWidth: Qe,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: B
        }
      },
      children: [
        Xe && /* @__PURE__ */ o(
          Y,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: xc,
              pointerEvents: "auto"
            }
          }
        ),
        Xe && /* @__PURE__ */ o(
          Y,
          {
            ref: nt.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(nt.nearEdge),
            "aria-hidden": "true",
            sx: {
              "--edge-glow-y": "50%",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Un,
              pointerEvents: "none",
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${Un}px ${rr}px at 0 var(--edge-glow-y), ${ze(Se, f ? 0.5 : 0.4)}, ${ze(Se, 0)})`,
              opacity: nt.nearEdge ? 1 : 0,
              transition: "opacity 200ms ease",
              // And a bright line along the edge beside it
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 3,
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${rr}px), ${ze(Se, f ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${rr}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ y(
          Y,
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            sx: {
              position: "absolute",
              top: it,
              bottom: it,
              left: it,
              width: Yt,
              borderRadius: `${rs}px`,
              display: "flex",
              flexDirection: "column",
              ...Xe && {
                pointerEvents: nt.shown ? "auto" : "none",
                opacity: nt.shown ? 1 : 0,
                transform: nt.shown ? "none" : `translateX(calc(-100% - ${2 * it}px))`,
                transition: bc,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...he
            },
            children: [
              /* @__PURE__ */ o(
                ro,
                {
                  isDark: f,
                  solid: Ae,
                  sx: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit"
                  }
                }
              ),
              /* @__PURE__ */ o(
                Y,
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
  ), js = (N) => /* @__PURE__ */ o(
    Y,
    {
      component: "aside",
      sx: {
        width: jt,
        minWidth: jt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (Z) => Z.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ o(
        Y,
        {
          ...Fe ? {} : Go.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ue ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Ue ? jt : or,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Ae,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Ue ? "none" : `4px 0 24px rgba(0, 0, 0, ${f ? 0.5 : 0.12})`,
            transition: gc,
            ...he
          },
          children: N
        }
      )
    }
  ), Vs = ss(
    A,
    co
  ), xt = te ? null : ks;
  return /* @__PURE__ */ o(_o, { theme: lo, children: /* @__PURE__ */ o(Qn.Provider, { value: z, children: /* @__PURE__ */ o($o.Provider, { value: Ae, children: /* @__PURE__ */ o(Cs.Provider, { value: S, children: /* @__PURE__ */ y(
    Y,
    {
      ref: Jr,
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...qe
      },
      children: [
        /* @__PURE__ */ o(nr, {}),
        te && /* @__PURE__ */ o(
          Fa,
          {
            height: Eo,
            onMenuClick: s && !Ee ? () => ft(!0) : void 0,
            appName: n,
            logo: Ho,
            onBrandClick: fo,
            brandMenuOpen: ho,
            background: Po,
            color: Nt,
            brandColor: uo,
            endContent: ge ? /* @__PURE__ */ o(
              Fr,
              {
                count: Gs,
                onClick: jo,
                color: Nt,
                hoverColor: kt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !te && ee && /* @__PURE__ */ o(
          Y,
          {
            component: "aside",
            sx: {
              width: Qe,
              minWidth: Qe,
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
            children: an()
          }
        ),
        s && !te && K && cn(
          /* @__PURE__ */ y(Me, { children: [
            an(),
            (P == null ? void 0 : P.show) && !Ue && /* @__PURE__ */ o(So, { ...P })
          ] })
        ),
        Ce && cn(
          /* @__PURE__ */ y(Me, { children: [
            /* @__PURE__ */ o(
              qa,
              {
                mainLinks: t,
                secondaryLinks: r,
                activePath: E,
                onLinkClick: T,
                logo: Ho,
                title: n,
                onBrandClick: fo,
                brandMenuOpen: ho,
                brandColor: uo,
                headerBackgroundColor: Xr,
                headerForegroundColor: Nt,
                activeAccentColor: z,
                activeBackgroundColor: ye,
                groupArrowColor: Ge,
                groupAccentColor: v,
                activeForegroundColor: C,
                foregroundColor: we,
                surfaceBackgroundColor: Ur,
                flyoutSurfaceColor: Ae,
                collapsed: Ue,
                expandedWidth: or,
                collapsedWidth: Gr,
                topContent: mo(
                  Ue ? Hr : "full"
                ),
                submenuMode: Fe ? "flyout" : "inline",
                color: Se,
                hoverColor: kt,
                avatarColor: z,
                showProfile: $,
                userName: D,
                userEmail: w,
                userRole: X,
                userAvatar: q,
                showNotifications: ge,
                notificationCount: De,
                onNotificationsClick: Ds ? jo : U,
                whatsNewCount: H,
                onProfileClick: Q,
                onAiUsageClick: ve,
                menuItems: b,
                onLogout: rn,
                theme: pe,
                showThemeToggler: dt,
                onThemeToggle: Je
              }
            ),
            (P == null ? void 0 : P.show) && !Ue && /* @__PURE__ */ o(So, { ...P })
          ] })
        ),
        s && !te && !We && !oe && /* @__PURE__ */ o(
          un,
          {
            variant: "permanent",
            sx: {
              width: Qe,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Qe,
                boxSizing: "border-box",
                bgcolor: B,
                borderRight: "none"
              },
              ...he
            },
            children: /* @__PURE__ */ y(
              Y,
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
                  /* @__PURE__ */ o(
                    Y,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ o(
                        To,
                        {
                          logo: $s,
                          appName: n,
                          onClick: fo,
                          menuOpen: ho,
                          color: I ?? Se,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  mo("popover"),
                  /* @__PURE__ */ y(
                    Y,
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
                        /* @__PURE__ */ o(
                          Ma,
                          {
                            mainLinks: t,
                            secondaryLinks: r,
                            activePath: E,
                            onLinkClick: T,
                            accentColor: z,
                            surfaceBackgroundColor: B,
                            railShowTitles: i
                          }
                        ),
                        (P == null ? void 0 : P.show) && /* @__PURE__ */ o(
                          So,
                          {
                            ...P
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ o(Y, { sx: { py: 1.5 }, children: Vo(!0) })
                ]
              }
            )
          }
        ),
        s && te && /* @__PURE__ */ y(
          ti,
          {
            anchor: Ee ? "bottom" : "left",
            open: jr,
            onOpen: () => ft(!0),
            onClose: () => ft(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (N) => N.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Ae,
                  backgroundImage: "none",
                  ...Ee ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              Ee && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ o(
                Y,
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
              /* @__PURE__ */ o(
                dr,
                {
                  mainLinks: t,
                  secondaryLinks: r,
                  activePath: E,
                  onLinkClick: (N) => {
                    T == null || T(N), ft(!1);
                  },
                  onLinkAction: () => ft(!1),
                  collapsed: !1,
                  expandedWidth: Ee ? "100%" : mc,
                  activeAccentColor: z,
                  activeBackgroundColor: ye,
                  groupArrowColor: Ge,
                  groupAccentColor: v,
                  activeForegroundColor: C,
                  foregroundColor: we,
                  surfaceBackgroundColor: Ae,
                  topInsetPx: Ee ? 8 : 0,
                  topContent: Ee ? void 0 : mo("full"),
                  footer: Ee ? void 0 : Vo(!1)
                }
              ),
              (P == null ? void 0 : P.show) && /* @__PURE__ */ o(So, { ...P })
            ]
          }
        ),
        Ee && Bt && /* @__PURE__ */ o(
          Wa,
          {
            open: Vr,
            onClose: () => Uo(!1),
            search: Bt
          }
        ),
        Ee && /* @__PURE__ */ o(
          Na,
          {
            ...nn,
            pinnedLinks: p,
            activePath: E,
            onLinkClick: T,
            onMenuClick: s ? () => ft(!0) : void 0,
            menuOpen: jr,
            onSearchClick: Bt ? () => Uo(!0) : void 0,
            searchOpen: Vr,
            showAssistant: rt,
            onAssistantClick: ut,
            assistantActive: Mt,
            showProfile: $,
            background: Ae,
            color: Se,
            activeColor: z,
            activeBackground: kt
          }
        ),
        /* @__PURE__ */ o(
          Y,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Vs,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": te ? `${Eo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Qe ? `calc(100% - ${Qe}px)` : "100%",
              mt: te ? `${Eo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Ee && {
                pb: `calc(var(--lumora-content-padding) + ${Yr})`
              },
              backgroundColor: B,
              ...ie
            },
            children: e
          }
        ),
        mt && /* @__PURE__ */ o(
          Ra,
          {
            open: Qr,
            variant: en,
            position: no,
            width: Ot,
            sidebarWidthPx: Qe,
            bottomOffsetPx: rt && $t === "floating" ? vc : 0,
            fullScreen: te,
            fullScreenBottom: Ee ? Yr : "0px",
            onClose: Fo,
            children: /* @__PURE__ */ o(mt, {})
          }
        ),
        rt && $t === "floating" && !Ee && /* @__PURE__ */ o(
          An,
          {
            variant: "floating",
            rightOffsetPx: zs,
            shortcutKeys: sn,
            onClick: ut,
            active: Mt,
            busy: Lt
          }
        ),
        ge && k && /* @__PURE__ */ o(
          un,
          {
            anchor: xt ? "left" : "right",
            open: Wt.open,
            onClose: Zr,
            slotProps: {
              paper: {
                sx: xt ? {
                  width: 380,
                  maxWidth: `calc(100vw - ${xt.left}px)`,
                  left: xt.left,
                  top: xt.top,
                  height: xt.height
                } : {
                  width: 380,
                  maxWidth: "100vw"
                }
              }
            },
            children: /* @__PURE__ */ o(
              k,
              {
                onClose: Zr,
                initialTab: Wt.tab
              },
              Wt.tab
            )
          }
        )
      ]
    }
  ) }) }) }) });
};
export {
  re as AUTH_ERROR_CODES,
  J as AuthError,
  dr as CollapsibleSidebar,
  bl as FullBleedSection,
  da as Kbd,
  pa as LumoraShellSkeleton,
  yl as LumoraWrapper,
  oo as clearAuthTokens,
  yl as default,
  vl as getAuthErrorMessage,
  to as getAuthTokens,
  xa as getCurrentUser,
  Nr as getDesignTokens,
  ga as isAuthenticated,
  hr as logAuthError,
  ws as storeAuthTokens
};
