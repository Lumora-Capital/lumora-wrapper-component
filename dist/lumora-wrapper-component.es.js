import { jsx as o, jsxs as y, Fragment as Le } from "react/jsx-runtime";
import ei from "@mui/icons-material/KeyboardArrowDownRounded";
import ti from "@mui/icons-material/KeyboardArrowUpRounded";
import oi from "@mui/icons-material/ChevronRightRounded";
import $ from "@mui/material/Box";
import dn from "@mui/material/Collapse";
import ot from "@mui/material/Divider";
import Re from "@mui/material/IconButton";
import xo from "@mui/material/ListItemButton";
import Ie from "@mui/material/ListItemIcon";
import Ye from "@mui/material/ListItemText";
import De from "@mui/material/Stack";
import Te from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as Ze, createTheme as Oo, alpha as Be, ThemeProvider as To } from "@mui/material/styles";
import * as d from "react";
import { useMemo as un, useState as nt, useCallback as Zo, useRef as bo, useEffect as Kt, useLayoutEffect as ri } from "react";
import qe from "@mui/material/ButtonBase";
import { keyframes as br } from "@emotion/react";
import vr from "@mui/material/Fade";
import yr from "@mui/material/Popper";
import { useTheme as Vn, CssBaseline as sr, GlobalStyles as ni, Box as V, useMediaQuery as Yn, Stack as jt, Skeleton as Fe, Drawer as fn, SwipeableDrawer as si } from "@mui/material";
import pn from "axios";
import ii from "@mui/material/Card";
import ai from "@mui/material/CardContent";
import qn from "@mui/material/Button";
import ci from "@mui/icons-material/AutoAwesomeRounded";
import li from "@mui/material/Grow";
import wr from "@mui/material/Paper";
import di from "@mui/material/Slide";
import ui from "@mui/material/ListSubheader";
import at from "@mui/material/MenuItem";
import Sr from "@mui/material/MenuList";
import Zn from "@mui/icons-material/MenuRounded";
import Er from "@mui/icons-material/SearchRounded";
import Jn from "@mui/icons-material/LogoutRounded";
import Qn from "@mui/icons-material/NotificationsNoneOutlined";
import fi from "@mui/icons-material/SettingsOutlined";
import pi from "@mui/material/Avatar";
import hi from "@mui/material/Menu";
import hn from "@mui/material/ToggleButton";
import mi from "@mui/material/ToggleButtonGroup";
import gi from "@mui/material/Drawer";
import xi from "@mui/material/AppBar";
import bi from "@mui/material/Toolbar";
import es from "@mui/material/Badge";
import vi from "@mui/icons-material/DarkModeOutlined";
import yi from "@mui/icons-material/LightModeOutlined";
import wi from "@mui/icons-material/SettingsBrightnessOutlined";
import Rr from "@mui/material/Popover";
import Si from "@mui/icons-material/CheckRounded";
const Co = ({
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
  }, u = /* @__PURE__ */ y(Le, { children: [
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
    qe,
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
  ) : /* @__PURE__ */ o(De, { direction: "row", "data-testid": i, sx: c, children: u });
}, ir = !1, Tt = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, It = (e) => {
  var t;
  return !!((t = e.subitems) != null && t.length);
}, Et = (e, t) => e ? `${e}/${t.text}` : t.text, it = (e, t) => {
  var r;
  return t ? e.path && t === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => it(n, t))) ?? !1 : !1;
}, Ve = (e, t) => !!(t && e.path === t), Ir = (e, t) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? t;
  return It(r) ? Ir(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), ar = (e) => {
  const t = $o(e);
  if (!t)
    return "#ffffff";
  const [r, n, s] = t.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Jt = (e) => {
  const t = $o(e);
  if (!t)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = t;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, cr = (e, t) => {
  const r = $o(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${t})` : e;
}, $o = (e) => {
  let t = e.trim().replace(/^#/, "");
  if (t.length === 3 && (t = t.split("").map((n) => n + n).join("")), t.length !== 6 || /[^0-9a-fA-F]/.test(t))
    return null;
  const r = parseInt(t, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, ts = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), _r = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Ei = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Ri = br`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, be = "@media (prefers-reduced-motion: reduce)", ne = 6, Tr = "9, 193, 174", os = d.createContext(
  void 0
), Mo = d.createContext(
  void 0
), Cr = (e) => d.useContext(Mo) ?? e, Lo = () => {
  const e = d.useContext(os), t = e ? $o(e) : null;
  return t ? t.join(", ") : Tr;
}, Ii = (e, t, r = Tr) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: t,
  boxShadow: `${Ei(e)}, 0 0 0 1px ${_r(e)}`
}), Do = (e, t) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: t ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: _r(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${ne}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), Ar = br`
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
`, Or = br`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, rs = (e, t = Tr, r = `rgba(${t}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${t}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Ao = (e, t, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: cr(e, t ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${cr(e, 0.45)}`
}, _i = (e, t) => {
  {
    const r = `inset 0 0 0 1px ${_r(e)}`;
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
}, Ti = 100, ns = 80, Ro = 56, Vt = 72, qt = 64, fe = 44, Qt = 24, ko = 4, st = 8, ss = 1.4, is = ne, as = { xs: 2, md: "18px" }, cs = (e, t) => {
  const r = (n) => typeof n == "number" ? t.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, No = (e, t) => e === "flyout" && (t === "collapsible" || t === "panel"), Ci = (e, t, r) => e && No(t, r), ls = ({
  showSidebar: e,
  isMobile: t,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || t ? 0 : r === "rail-labeled" ? ns : No(n, r) ? s ? 0 : qt + 2 * st : r === "collapsible" || r === "panel" ? Vt : Ti, ds = (e, t) => e ?? (t ? "hsl(220, 30%, 7%)" : "#ffffff"), us = (e, t) => e ?? (t ? "hsl(220, 35%, 9%)" : "#f2f9fc"), fs = { stiffness: 320, damping: 24 }, ps = { stiffness: 320, damping: 28 }, $r = { stiffness: 520, damping: 20 }, Mr = { stiffness: 380, damping: 36 }, Wo = { stiffness: 260, damping: 28 }, Ai = "cubic-bezier(0.32, 1.28, 0.52, 1)", Oi = 420, mn = 60, $i = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), gn = /* @__PURE__ */ new Map(), ve = ({
  stiffness: e,
  damping: t,
  mass: r = 1
}) => {
  const n = `${e}/${t}/${r}`, s = gn.get(n);
  if (s)
    return s;
  if (!$i)
    return { easing: Ai, duration: Oi };
  const i = 1 / 600;
  let a = 0, c = 0, u = 0, l = 1 / mn;
  const h = [0];
  for (; u < 3; ) {
    const g = (-e * (a - 1) - t * c) / r;
    if (c += g * i, a += c * i, u += i, u >= l && (h.push(a), l += 1 / mn, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  h[h.length - 1] = 1;
  const p = {
    easing: `linear(${h.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return gn.set(n, p), p;
}, eo = (e) => !!(e && typeof e.animate == "function"), Ct = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Mi = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((t) => t.cancel());
}, Li = (e, t = 1.14) => {
  if (!eo(e) || Ct())
    return;
  const r = ve($r);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${t})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, Di = 1.6, hs = 110, ct = 110, vt = ve(Mr), ki = (e, t = hs) => e >= t ? 0 : (1 + Math.cos(Math.PI * e / t)) / 2, ms = (e, t) => {
  const { offsetWidth: r, offsetHeight: n } = e;
  if (!(r > 0 && n > 0))
    return 1 / 0;
  const s = t.getBoundingClientRect(), i = s.left + t.clientLeft, a = s.top + t.clientTop, c = e.getBoundingClientRect(), u = c.left + c.width / 2, l = c.top + c.height / 2, h = Math.min(
    u - r / 2 - i,
    i + t.clientWidth - (u + r / 2)
  ), p = Math.min(
    l - n / 2 - a,
    a + t.clientHeight - (l + n / 2)
  );
  return Math.min(1 + 2 * h / r, 1 + 2 * p / n);
}, gs = (e, {
  enabled: t,
  axis: r,
  itemSelector: n,
  glyphSelector: s,
  transition: i,
  maxScale: a = Di,
  reach: c = hs,
  carrierSelector: u,
  boundsRef: l
}) => {
  const h = d.useRef(0), p = d.useRef(
    /* @__PURE__ */ new WeakMap()
  ), g = d.useRef(/* @__PURE__ */ new Set()), x = d.useRef(/* @__PURE__ */ new Set()), m = i ? `, ${i}` : "", S = (M) => u ? M.closest(u) : null, _ = (M) => {
    var O;
    const [E = "0", A = "0"] = (((O = S(M)) == null ? void 0 : O.style.translate) ?? "").split(" ").filter(Boolean);
    return r === "x" ? parseFloat(E) || 0 : parseFloat(A) || 0;
  }, C = (M) => {
    const E = M.getBoundingClientRect();
    return (r === "x" ? E.left + E.width / 2 : E.top + E.height / 2) - _(M);
  }, b = (M) => {
    const E = M.getBoundingClientRect();
    return Array.from(M.querySelectorAll(n)).filter((A) => {
      var H;
      const O = (H = A.parentElement) == null ? void 0 : H.closest(n);
      if (O && M.contains(O))
        return !1;
      const L = A.getBoundingClientRect(), G = C(A), Y = r === "x" ? G : L.left + L.width / 2, w = r === "x" ? L.top + L.height / 2 : G;
      return L.width > 0 && Y >= E.left && Y <= E.right && w >= E.top && w <= E.bottom;
    }).map((A) => ({
      item: A,
      glyph: s ? A.querySelector(s) : A
    })).filter(
      (A) => A.glyph !== null
    );
  }, R = (M, E) => {
    if (E === M)
      return a;
    let A = p.current.get(E);
    if (A === void 0) {
      const G = Number(E.style.scale) || 1, Y = E.getBoundingClientRect();
      A = { width: Y.width / G, height: Y.height / G }, p.current.set(E, A);
    }
    if (!(A.width > 0 && A.height > 0))
      return 1;
    const O = M.getBoundingClientRect(), L = Math.min(
      O.width / A.width,
      O.height / A.height
    );
    return Math.max(1, Math.min(L, a));
  }, D = (M) => {
    const E = l == null ? void 0 : l.current;
    return E != null && E.contains(M) ? ms(M, E) : 1 / 0;
  }, v = () => {
    var M, E, A, O;
    cancelAnimationFrame(h.current), g.current.forEach((L) => {
      L.style.transition = `scale ${vt.duration}ms ${vt.easing}${m}`, L.style.scale = "";
    }), g.current.clear(), x.current.forEach((L) => {
      L.style.transition = `translate ${vt.duration}ms ${vt.easing}`, L.style.translate = "";
    }), x.current.clear(), (M = e.current) == null || M.style.setProperty(
      "--dock-scale-timing",
      `${vt.duration}ms ${vt.easing}`
    ), (E = e.current) == null || E.style.removeProperty("--dock-spread"), (A = e.current) == null || A.style.removeProperty("--dock-max-scale"), (O = e.current) == null || O.style.removeProperty("--dock-active-scale");
  }, T = (M, E, A) => {
    const O = r === "x" ? E : A, L = b(M).map(({ item: w, glyph: H }) => {
      const pe = C(w), te = 1 + (Math.max(1, Math.min(R(w, H), D(H))) - 1) * ki(Math.abs(O - pe), c);
      H.style.transition = `scale ${ct}ms ease-out${m}`, te > 1.001 ? (H.style.scale = te.toFixed(3), g.current.add(H)) : g.current.has(H) && (H.style.scale = "", g.current.delete(H));
      const ye = r === "x" ? w.offsetWidth : w.offsetHeight;
      return { item: w, centre: pe, scale: te, growth: (te - 1) * ye };
    });
    M.style.setProperty(
      "--dock-scale-timing",
      `${ct}ms ease-out`
    ), M.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...L.map(({ scale: w }) => w)).toFixed(3)
    );
    const G = L.find(({ item: w }) => w.dataset.active === "true");
    if (M.style.setProperty(
      "--dock-active-scale",
      ((G == null ? void 0 : G.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const Y = L.reduce((w, { growth: H }) => w + H, 0);
    M.style.setProperty("--dock-spread", `${Y.toFixed(1)}px`), L.forEach(({ item: w, centre: H, growth: pe }) => {
      const ie = S(w);
      if (!ie)
        return;
      const te = L.reduce(
        (ye, ze) => ze.centre < H ? ye + ze.growth : ye,
        pe / 2
      );
      ie.style.transition = `translate ${ct}ms ease-out`, Math.abs(te) > 0.1 ? (ie.style.translate = r === "x" ? `${te.toFixed(1)}px 0` : `0 ${te.toFixed(1)}px`, x.current.add(ie)) : x.current.has(ie) && (ie.style.translate = "", x.current.delete(ie));
    });
  }, I = (M) => {
    if (M.pointerType && M.pointerType !== "mouse" || Ct())
      return;
    const E = M.currentTarget, { clientX: A, clientY: O } = M;
    cancelAnimationFrame(h.current), h.current = requestAnimationFrame(() => {
      const L = E.getBoundingClientRect(), G = r === "x" ? O : A, [Y, w] = r === "x" ? [L.top, L.bottom] : [L.left, L.right];
      if (G < Y || G > w) {
        v();
        return;
      }
      T(E, A, O);
    });
  }, F = (M) => {
    const E = e.current;
    if (!t || !E || Ct())
      return;
    const A = M.getBoundingClientRect();
    T(E, A.left + A.width / 2, A.top + A.height / 2);
  };
  return d.useEffect(() => {
    t || v();
  }, [t]), d.useEffect(() => () => cancelAnimationFrame(h.current), []), {
    containerProps: t ? { onPointerMove: I, onPointerLeave: v, onScrollCapture: v } : {},
    swellOn: F,
    settle: v
  };
}, to = "data-rail-item", xs = `[${to}], button, [role="button"]`, At = d.createContext(!1), Lr = () => {
  const e = d.useContext(At), t = Ze(), r = d.useContext(Mo);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: Do(t.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, _t = ve(Mr), Dr = ({
  enabled: e,
  isDark: t,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: a = null
}) => {
  const c = d.useRef(null), u = Lo(), [l, h] = d.useState(null), p = d.useRef(null), g = d.useRef(null), x = (v, T) => {
    g.current = T;
    const I = T.getBoundingClientRect(), F = v.getBoundingClientRect(), M = n ?? I.width, E = n ?? I.height, A = {
      top: Math.round(I.top - F.top + (I.height - E) / 2),
      left: Math.round(I.left - F.left + (I.width - M) / 2),
      width: Math.round(M),
      height: Math.round(E)
    };
    h(
      (O) => O && O.visible && O.top === A.top && O.left === A.left && O.width === A.width && O.height === A.height ? O : { ...A, visible: !0, instant: !(O != null && O.visible) }
    );
  }, m = (v, T) => {
    var F;
    const I = (F = T == null ? void 0 : T.closest) == null ? void 0 : F.call(T, r);
    return I && v.contains(I) ? I : null;
  }, S = (v) => {
    if (!e)
      return;
    const T = m(v.currentTarget, v.target);
    T && x(v.currentTarget, T);
  }, _ = (v) => {
    if (!e)
      return;
    const T = m(v.currentTarget, v.target);
    T && v.target.matches(":focus-visible") && x(v.currentTarget, T);
  }, C = () => {
    var I;
    const v = (I = c.current) == null ? void 0 : I.parentElement, T = i && (v == null ? void 0 : v.querySelector(i));
    return v && T ? { container: v, item: T } : null;
  }, b = () => {
    const v = C();
    if (v) {
      x(v.container, v.item);
      return;
    }
    g.current = null, h((T) => T != null && T.visible ? { ...T, visible: !1 } : T);
  };
  d.useEffect(() => {
    var T, I;
    if (!e)
      return;
    const v = C();
    v ? x(v.container, v.item) : (I = (T = c.current) == null ? void 0 : T.parentElement) != null && I.matches(":hover") || b();
  }, [e, a]);
  const R = (v) => {
    const T = v.relatedTarget;
    (!T || !v.currentTarget.contains(T)) && (v.currentTarget.matches(":hover") || b());
  };
  return d.useEffect(() => {
    const v = c.current;
    if (!(l != null && l.visible)) {
      p.current = null;
      return;
    }
    const T = p.current;
    if (p.current = l.top, !eo(v) || Ct() || T === null || l.instant)
      return;
    const I = Math.min(Math.abs(l.top - T) / 600, 0.08);
    I && v.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - I / 2}, ${1 + I})`,
          offset: 0.35
        },
        { transform: "scale(1, 1)" }
      ],
      { duration: _t.duration, easing: "ease-out" }
    );
  }, [l == null ? void 0 : l.top, l == null ? void 0 : l.visible, l == null ? void 0 : l.instant]), {
    lens: e && l ? /* @__PURE__ */ o(
      $,
      {
        ref: c,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...rs(t, u),
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
          transition: l.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${ct}ms ease-out)` : `translate ${_t.duration}ms ${_t.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${ct}ms ease-out)`,
          [be]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: S,
      onMouseLeave: b,
      onFocus: _,
      onBlur: R,
      onScrollCapture: b
    } : {}
  };
}, Ni = (e, t, r = null) => {
  const n = Dr({
    enabled: e,
    isDark: t,
    selector: xs,
    // The rail's buttons exactly, so the hover sits on the item
    size: fe,
    radius: ne,
    pinSelector: `[${to}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Wi = (e, t) => {
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
}, Fi = ({
  enabled: e,
  isDark: t,
  color: r,
  containerRef: n
}) => {
  const s = d.useRef(null), [i, a] = d.useState(null), c = d.useRef(null), u = d.useCallback(
    (h) => {
      const p = n.current;
      if (!e || !p)
        return;
      const g = p.querySelector(
        `[${to}][data-active="true"]`
      );
      if (!g) {
        a(
          (m) => m != null && m.visible ? { ...m, visible: !1 } : m
        );
        return;
      }
      const x = Wi(g, p);
      a(
        (m) => m && m.visible && m.top === x.top && m.left === x.left && m.width === x.width && m.height === x.height ? m : {
          ...x,
          visible: !0,
          instant: h || !(m != null && m.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    u(!1);
  }), d.useEffect(() => {
    const h = n.current;
    if (!e || !h)
      return;
    let p = 0;
    const g = () => {
      cancelAnimationFrame(p), p = requestAnimationFrame(() => u(!1));
    }, x = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    x == null || x.observe(h);
    const m = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return m == null || m.observe(h, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(p), x == null || x.disconnect(), m == null || m.disconnect();
    };
  }, [e, n, u]), d.useEffect(() => {
    const h = s.current;
    if (!(i != null && i.visible)) {
      c.current = null;
      return;
    }
    const p = c.current;
    if (c.current = i.top, p === null || i.instant || !eo(h) || Ct())
      return;
    const g = Math.min(Math.abs(i.top - p) / 600, 0.08);
    g && h.animate(
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
      { duration: _t.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ o(
    $,
    {
      ref: s,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": i.visible ? "true" : "false",
      sx: {
        ...Ao(r, t),
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
        transition: i.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${ct}ms ease-out)` : `translate ${_t.duration}ms ${_t.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${ct}ms ease-out)`,
        [be]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, _e = 52, Jo = 36, Pi = 1.8, Bi = _e / 2, Qo = "[data-flyout-tile]", kr = 4, Nr = 32, lr = Nr + kr, zi = 104, Gt = 24, bs = "background 160ms ease, color 160ms ease, transform 120ms ease", dr = 10, vs = 10, xn = vs + 2, Hi = 18, bn = 1.08, Gi = (e) => {
  for (let t = e.parentElement; t; t = t.parentElement) {
    const { overflowY: r } = getComputedStyle(t);
    if (r === "auto" || r === "scroll")
      return t;
  }
  return null;
}, Ui = (e) => {
  const t = Gi(e);
  if (!t)
    return bn;
  const r = ms(e, t);
  return Math.min(bn, r / Math.min(r, ss));
}, Xi = 1190, Ki = 1195, vn = 120, yn = ve(fs), Rt = ve(Mr), wn = ve(Wo), Sn = 8192, ji = ({ left: e, top: t, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), a = e + r, c = t + n, u = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${Sn} V ${Sn} H 0 Z M ${e + i} ${t} H ${a - i} ${u} ${a} ${t + i} V ${c - i} ${u} ${a - i} ${c} H ${e + i} ${u} ${e} ${c - i} V ${t + i} ${u} ${e + i} ${t} Z')`;
}, Vi = ({
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
  accentColor: h,
  activeBackgroundColor: p,
  activeForegroundColor: g,
  solidSurface: x
}) => {
  const m = Ze(), S = m.palette.mode === "dark", _ = !!(e && r), C = d.useRef(null);
  e && t && (C.current = { group: e, key: t });
  const b = C.current, R = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const W = r.getBoundingClientRect();
      return {
        x: n,
        y: W.top,
        left: n,
        right: n,
        top: W.top,
        bottom: W.bottom,
        width: 0,
        height: W.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), D = d.useRef(R);
  R && (D.current = R), d.useEffect(() => {
    if (!r)
      return;
    const W = Ui(r);
    W > 1.001 && Li(r, W);
  }, [r]);
  const [v, T] = d.useState(!1);
  d.useEffect(() => {
    if (!_) {
      T(!1);
      return;
    }
    let W = 0;
    const B = requestAnimationFrame(() => {
      W = requestAnimationFrame(() => T(!0));
    });
    return () => {
      cancelAnimationFrame(B), cancelAnimationFrame(W);
    };
  }, [_]);
  const I = d.useMemo(
    () => b ? Ir(b.group.subitems, b.group.icon) : [],
    [b]
  ), F = d.useRef(null), M = gs(F, {
    enabled: _,
    axis: "x",
    itemSelector: Qo,
    transition: bs,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: Pi,
    // The neighbours make room as it grows
    carrierSelector: '[role="menuitem"]'
  }), E = d.useRef(void 0), A = d.useCallback((W) => {
    var U;
    (U = E.current) == null || U.call(E), E.current = void 0;
    const B = W == null ? void 0 : W.parentElement;
    if (!W || !B || typeof MutationObserver > "u")
      return;
    const z = () => {
      const ce = W.offsetLeft - W.offsetWidth / 2, He = ce + W.offsetWidth;
      let j = 0;
      B.querySelectorAll(Qo).forEach((Ce) => {
        var ke;
        if (Ce.dataset.flyoutGrows !== "up")
          return;
        const oe = parseFloat(Ce.style.scale) || 1, Ge = parseFloat(
          ((ke = Ce.closest('[role="menuitem"]')) == null ? void 0 : ke.style.translate) ?? ""
        ) || 0, le = Ce.offsetLeft + Ge - (oe - 1) * _e / 2;
        le < He && le + oe * _e > ce && (j = Math.max(
          j,
          (oe - 1) * _e - Ce.offsetTop - xn
        ));
      });
      const J = j > 0 ? `0 ${(-j).toFixed(1)}px` : "";
      W.style.translate !== J && (W.style.translate = J);
    }, Z = new MutationObserver(z);
    Z.observe(B, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), E.current = () => Z.disconnect();
  }, []), O = d.useRef([]), [L, G] = d.useState([]);
  d.useLayoutEffect(() => {
    const W = () => {
      const z = I.map(
        (Z, U) => {
          var ce;
          return ((ce = O.current[U]) == null ? void 0 : ce.offsetWidth) ?? 0;
        }
      );
      G(
        (Z) => Z.length === z.length && Z.every((U, ce) => U === z[ce]) ? Z : z
      );
    };
    if (W(), typeof ResizeObserver > "u")
      return;
    const B = new ResizeObserver(W);
    return O.current.slice(0, I.length).forEach((z) => z && B.observe(z)), () => B.disconnect();
  }, [I]);
  const Y = qi(L, I.length), w = d.useRef([]), H = I.findIndex(
    ({ sub: W }) => Ve(W, i)
  ), [pe, ie] = d.useState(0);
  d.useEffect(() => {
    ie(Math.max(H, 0));
  }, [t]), d.useEffect(() => {
    if (!_ || !a)
      return;
    const W = setTimeout(() => {
      var B;
      return (B = w.current[0]) == null ? void 0 : B.focus();
    });
    return () => clearTimeout(W);
  }, [_, a, t]);
  const te = (W) => {
    var z;
    const B = Math.max(0, Math.min(W, I.length - 1));
    ie(B), (z = w.current[B]) == null || z.focus();
  }, ye = (W, B) => {
    var z;
    switch (W.key) {
      case "ArrowRight":
        te(B + 1);
        break;
      case "ArrowLeft":
        B === 0 ? u(!0) : te(B - 1);
        break;
      case " ":
        (z = w.current[B]) == null || z.click();
        break;
      case "Home":
        te(0);
        break;
      case "End":
        te(I.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    W.preventDefault();
  }, ze = m.palette.text.primary, we = S ? m.palette.text.primary : h;
  return /* @__PURE__ */ y(Le, { children: [
    /* @__PURE__ */ o(vr, { in: _, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ o(
      $,
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
          ...s ? { clipPath: ji(s) } : {},
          zIndex: Xi,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: S ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)"
        }
      }
    ) }),
    /* @__PURE__ */ o(
      yr,
      {
        open: _,
        anchorEl: R ?? D.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Both rows centred on the rail icon, a gap from the rail
          {
            name: "offset",
            options: { offset: [0, dr] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Ki,
          transition: v ? `transform ${Rt.duration}ms ${Rt.easing}` : "none",
          [be]: { transition: "none" }
        },
        children: ({ TransitionProps: W }) => /* @__PURE__ */ o(
          Yi,
          {
            in: (W == null ? void 0 : W.in) ?? _,
            onEnter: W == null ? void 0 : W.onEnter,
            onExited: W == null ? void 0 : W.onExited,
            panelProps: l,
            groupText: b == null ? void 0 : b.group.text,
            children: b ? /* @__PURE__ */ y(
              $,
              {
                ref: F,
                role: "menu",
                "aria-label": b.group.text,
                ...M.containerProps,
                onBlur: (B) => {
                  B.currentTarget.contains(
                    B.relatedTarget
                  ) || M.settle();
                },
                sx: {
                  position: "relative",
                  width: Y.width,
                  height: lr + _e + kr + Nr,
                  // The panel stretches as the dock pushes
                  // the pages along, as the Dock's shelf does
                  mr: "var(--dock-spread, 0px)",
                  transition: `margin-right ${Rt.duration}ms ${Rt.easing}`,
                  [be]: { transition: "none" }
                },
                children: [
                  /* @__PURE__ */ o(
                    $,
                    {
                      component: "span",
                      ref: A,
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
                        mb: `${xn}px`,
                        transition: `translate ${ct}ms ease-out`,
                        [be]: {
                          transition: "none"
                        },
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        // The pages' own name colour
                        color: Do(S).color
                      },
                      children: b.group.text
                    }
                  ),
                  I.map(({ sub: B, icon: z }, Z) => /* @__PURE__ */ o(
                    ws,
                    {
                      ref: (U) => {
                        w.current[Z] = U;
                      },
                      nameRef: (U) => {
                        O.current[Z] = U;
                      },
                      tileLeft: Y.tiles[Z],
                      nameLeft: Y.names[Z],
                      sub: B,
                      icon: z,
                      index: Z,
                      active: Ve(
                        B,
                        i
                      ),
                      tabIndex: Z === pe ? 0 : -1,
                      onClick: (U) => {
                        Tt(U) && (U.preventDefault(), c(B.path), u());
                      },
                      onKeyDown: (U) => ye(U, Z),
                      onFocus: (U) => {
                        ie(Z);
                        const ce = U.currentTarget.querySelector(
                          Qo
                        );
                        ce && U.currentTarget.matches(
                          ":focus-visible"
                        ) && M.swellOn(ce);
                      },
                      accentColor: h,
                      activeBackgroundColor: p,
                      activeForegroundColor: g,
                      labelColor: ze,
                      iconColor: we,
                      surface: x,
                      isDark: S
                    },
                    B.path
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
}, Yi = ({
  in: e,
  onEnter: t,
  onExited: r,
  panelProps: n,
  groupText: s,
  children: i
}) => {
  const a = d.useRef(null), c = (l) => {
    a.current = l;
    const { ref: h } = n;
    typeof h == "function" ? h(l) : h && (h.current = l);
  }, u = d.useRef(e);
  return u.current = e, d.useLayoutEffect(() => {
    const l = a.current;
    if (Mi(l), e) {
      t == null || t(), eo(l) && !Ct() && l.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: wn.duration, easing: wn.easing }
      );
      return;
    }
    if (!eo(l)) {
      r == null || r();
      return;
    }
    let h = !1;
    const p = () => {
      !h && !u.current && (h = !0, r == null || r());
    }, g = setTimeout(p, vn + 100);
    return l.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: vn,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(p, p), () => clearTimeout(g);
  }, [e]), /* @__PURE__ */ o(
    $,
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
        p: `${vs}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -dr - 2,
          width: dr + 2
        }
      },
      children: i
    }
  );
}, ys = (e) => e % 2 === 1, qi = (e, t) => {
  const r = [], n = [];
  let s = -Gt, i = -Gt, a = -Gt;
  for (let c = 0; c < t; c += 1) {
    const u = e[c] || _e, l = ys(c), h = l ? i : a, p = Math.max(
      s + Gt + _e / 2,
      h + Gt + u / 2
    );
    s = p + _e / 2, l ? i = p + u / 2 : a = p + u / 2, r.push(Math.round(p - _e / 2)), n.push(Math.round(p - u / 2));
  }
  return {
    tiles: r,
    names: n,
    width: Math.round(Math.max(s, i, a, 0))
  };
}, ws = d.forwardRef(
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
    onFocus: h,
    accentColor: p,
    activeBackgroundColor: g,
    activeForegroundColor: x,
    labelColor: m,
    iconColor: S,
    surface: _,
    isDark: C
  }, b) => {
    const R = ys(i), D = Do(C, _), v = {
      animation: `${Ri} ${yn.duration}ms ${yn.easing} both`,
      animationDelay: `${i * Hi}ms`,
      [be]: { animation: "none" }
    }, T = {
      background: g ?? p,
      color: x,
      "& .MuiSvgIcon-root": { color: x }
    }, I = {
      background: `color-mix(in srgb, ${p} ${C ? 20 : 12}%, ${_})`
    }, F = C ? D.color : p, M = {
      "& [data-flyout-tile]": a ? {} : I,
      "& [data-flyout-name]": { color: F, fontWeight: 600 }
    }, E = {
      ...D,
      border: "none",
      // Lifted a little more than a resting label: they float over
      // the page
      boxShadow: C ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)"
    };
    return /* @__PURE__ */ y(
      qe,
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
          color: m,
          textDecoration: "none",
          "&:hover": M,
          "&.Mui-focusVisible": {
            ...M,
            "& [data-flyout-tile]": {
              ...a ? {} : I,
              outline: "2px solid",
              outlineColor: p,
              outlineOffset: 2
            }
          },
          "&:active [data-flyout-tile]": { transform: "scale(0.94)" },
          [be]: {
            "&:active [data-flyout-tile]": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ o(
            $,
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
            $,
            {
              "data-flyout-tile": "",
              "data-flyout-grows": R ? "down" : "up",
              sx: {
                ...E,
                left: t,
                top: lr,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: _e,
                height: _e,
                p: 0,
                borderRadius: `${Bi}px`,
                // Grows out of the row, away from its name
                transformOrigin: R ? "center top" : "center bottom",
                transition: `scale ${Rt.duration}ms ${Rt.easing}, ${bs}`,
                "& .MuiSvgIcon-root": {
                  fontSize: Jo,
                  color: S,
                  transition: "color 160ms ease"
                },
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                '& [role="img"], & [role="img"] > img': {
                  width: Jo,
                  height: Jo
                },
                ...a ? T : {},
                ...v
              },
              children: s
            }
          ),
          /* @__PURE__ */ o(
            $,
            {
              "data-flyout-slot": "",
              sx: {
                left: r,
                top: R ? 0 : lr + _e + kr,
                height: Nr,
                display: "flex",
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: R ? "flex-end" : "flex-start"
              },
              children: /* @__PURE__ */ o(
                $,
                {
                  component: "span",
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": n.text,
                  sx: {
                    // No card of its own: text on the panel
                    color: D.color,
                    px: 1,
                    py: 0,
                    fontSize: "0.75rem",
                    lineHeight: "16px",
                    // A long name wraps, split evenly, so it stays as
                    // compact as its tile; never cut short
                    maxWidth: zi,
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
ws.displayName = "FlyoutTile";
const Zi = 50, Ji = 250, Qi = (e) => {
  const [t, r] = d.useState(null), n = d.useRef(t);
  n.current = t;
  const s = d.useRef(/* @__PURE__ */ new Map()), i = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), u = () => {
    clearTimeout(a.current), a.current = void 0;
  }, l = () => {
    clearTimeout(c.current), c.current = void 0;
  }, h = (C, b, R = !1) => {
    u(), l(), r({ key: C, pinned: b, focusFirst: R });
  }, p = d.useCallback((C = !1) => {
    var R, D;
    u(), l();
    const b = (R = n.current) == null ? void 0 : R.key;
    r(null), C && b && ((D = s.current.get(b)) == null || D.focus());
  }, []), g = () => {
    u(), !(!n.current || n.current.pinned) && (l(), c.current = setTimeout(() => p(), Ji));
  };
  d.useEffect(() => {
    e || p();
  }, [e, p]), d.useEffect(
    () => () => {
      u(), l();
    },
    []
  );
  const x = t !== null;
  return d.useEffect(() => {
    if (!x)
      return;
    const C = (D) => {
      var T;
      const v = D;
      return v ? (T = i.current) != null && T.contains(v) ? !0 : [...s.current.values()].some((I) => I.contains(v)) : !1;
    }, b = (D) => {
      C(D.target) || p();
    }, R = (D) => {
      var v;
      D.key === "Escape" && p(
        !!((v = i.current) != null && v.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", b), document.addEventListener("keydown", R), () => {
      document.removeEventListener("pointerdown", b), document.removeEventListener("keydown", R);
    };
  }, [x, p]), {
    state: t,
    close: p,
    triggerProps: (C) => ({
      ref: (b) => {
        b ? s.current.set(C, b) : s.current.delete(C);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        l();
        const b = n.current;
        if (b) {
          b.key !== C && h(C, b.pinned);
          return;
        }
        u(), a.current = setTimeout(
          () => h(C, !1),
          Zi
        );
      },
      onMouseLeave: g,
      onClick: (b) => {
        var R;
        if (b.detail === 0) {
          h(C, !0, !0);
          return;
        }
        ((R = n.current) == null ? void 0 : R.key) !== C && h(C, !1);
      },
      onKeyDown: (b) => {
        b.key === "ArrowRight" && (b.preventDefault(), h(C, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: l,
      onMouseLeave: g
    },
    onRailLeafEnter: () => {
      u(), n.current && !n.current.pinned && p();
    },
    getTrigger: (C) => s.current.get(C) ?? null
  };
}, ea = 264, ta = 72, En = 64, vo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, oa = 16, ra = 14, na = 4, sa = 2.5, Rn = "0.7rem", In = 22, yo = ve($r), ft = ({ text: e, variant: t = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
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
    const h = new ResizeObserver(() => u());
    return h.observe(l), () => h.disconnect();
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
}, ia = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, aa = 4, ca = (e) => Math.max(0, Math.min(aa, Zt - e)), la = ({
  open: e,
  size: t = oa
}) => e ? /* @__PURE__ */ o(ti, { sx: { fontSize: t, opacity: 0.75 } }) : /* @__PURE__ */ o(ei, { sx: { fontSize: t, opacity: 0.75 } }), _n = ({ open: e }) => /* @__PURE__ */ o(
  oi,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), wo = 600, pt = `${ko}px`, Zt = (qt - fe) / 2, da = (e) => {
  const t = Math.max(0, e - Zt);
  return {
    pl: `${Math.max(0, Zt - t)}px`,
    pr: `${Math.max(0, Zt - e)}px`
  };
};
function ua(e, t) {
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
function fa(e) {
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
const So = 8;
function pa(e, t, r) {
  d.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const s = (u) => {
      const l = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((x) => x.offsetHeight > 0).pop();
      if (!l)
        return;
      const h = n.getBoundingClientRect(), p = l.getBoundingClientRect();
      let g = 0;
      p.top < h.top + So ? g = p.top - h.top - So : p.bottom > h.bottom - So && (g = p.bottom - h.bottom + So), g !== 0 && n.scrollBy({ top: g, behavior: u });
    }, i = requestAnimationFrame(() => s("smooth")), a = window.setTimeout(() => s("smooth"), 350), c = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return c == null || c.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(a), c == null || c.disconnect();
    };
  }, [e, t, r]);
}
const ur = ({
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
  headerBackgroundColor: h,
  headerForegroundColor: p,
  brandColor: g,
  activeAccentColor: x = "#01584f",
  activeBackgroundColor: m,
  groupArrowColor: S,
  groupAccentColor: _,
  activeForegroundColor: C,
  foregroundColor: b,
  surfaceBackgroundColor: R,
  flyoutSurfaceColor: D,
  collapsed: v = !1,
  expandedWidth: T = ea,
  collapsedWidth: I = ta,
  showLabels: F = !1,
  topInsetPx: M = 0,
  topContent: E,
  footer: A,
  submenuMode: O = "inline"
}) => {
  var se;
  const L = Ze(), G = L.palette.mode === "dark", Y = d.useContext(Mo), w = O === "flyout" && v && !F, H = Qi(w), pe = d.useRef(null), ie = d.useRef(null), te = d.useRef(null);
  pa(te, r, v);
  const ye = ua(te, w), ze = fa(te), we = Ni(w, G, ((se = H.state) == null ? void 0 : se.key) ?? null), W = gs(pe, {
    enabled: w,
    axis: "y",
    itemSelector: xs,
    maxScale: ss,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: fe + ko,
    // Only 4px of padding at the scroller's ends: the first and last
    // buttons swell less, or the last would scroll the rail
    boundsRef: te,
    transition: `transform ${yo.duration}ms ${yo.easing}, background-color 160ms ease`
  }), B = {
    ...we.containerProps,
    ...W.containerProps,
    ...w ? {
      onScrollCapture: () => {
        var f, k;
        (k = (f = we.containerProps).onScrollCapture) == null || k.call(f), W.settle();
      }
    } : {}
  }, z = m ?? x, Z = Fi({
    enabled: w,
    isDark: G,
    color: z,
    containerRef: ie
  }), { close: U } = H;
  d.useEffect(() => {
    U();
  }, [r, U]);
  const [ce, He] = d.useState(
    {}
  ), j = C ?? ar(z), J = {
    bgcolor: z,
    color: j,
    "& .MuiListItemIcon-root": { color: j }
  }, Ce = {
    bgcolor: z,
    color: j,
    borderRadius: "8px"
  }, oe = _ ?? Jt(x), Ge = R ?? (G ? L.palette.background.paper : "#ffffff"), le = b ?? (G ? "text.primary" : x), ke = h ?? Ge, Ue = p ?? (h ? ar(ke) : b ?? (G ? L.palette.text.primary : x)), Ae = Jt(Ue), Ne = (f) => {
    n == null || n(f);
  }, Oe = (f) => f ? {
    component: "a",
    href: f,
    onClick: (k) => {
      Tt(k) && (k.preventDefault(), Ne(f));
    }
  } : {}, me = (f, k) => {
    He((X) => ({ ...X, [f]: !k }));
  }, ht = (f, k) => ce[k] ?? it(f, r), Je = (f, k, X) => ({
    color: f ? j : le,
    bgcolor: f ? z : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? j : le,
      minWidth: X
    },
    "&:hover": f || F ? J : { bgcolor: k }
  }), Ot = {
    "&.Mui-selected": {
      bgcolor: z
    },
    "&.Mui-selected:hover": J
  }, $t = (f) => {
    const k = Ve(f, r), X = /* @__PURE__ */ y(
      xo,
      {
        disabled: !f.path,
        selected: k,
        ...Oe(f.path),
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
          ...Je(
            k,
            oe,
            f.subtitle ? 48 : 36
          ),
          ...Ot
        },
        children: [
          /* @__PURE__ */ o(Ie, { children: f.icon }),
          /* @__PURE__ */ o(
            Ye,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ o(
                ft,
                {
                  text: f.text,
                  fontWeight: wo
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ o(
                $,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ o(
                    ft,
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
      return X;
    const { action: P } = f;
    return /* @__PURE__ */ y($, { sx: { position: "relative" }, children: [
      X,
      /* @__PURE__ */ o(Te, { title: P.label, placement: "right", arrow: !0, children: /* @__PURE__ */ o(
        Re,
        {
          "aria-label": P.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            P.onClick(), s == null || s();
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
            borderColor: k ? "rgba(255, 255, 255, 0.35)" : oe,
            color: k ? j : le,
            "&:hover": {
              bgcolor: k ? "rgba(255, 255, 255, 0.15)" : oe
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: k ? j : le,
              outlineOffset: 1
            }
          },
          children: P.icon
        }
      ) })
    ] }, f.text);
  }, Mt = (f) => {
    const k = it(f, r), X = Ve(f, r), P = Et("", f), K = ht(f, P);
    return /* @__PURE__ */ y(
      $,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: k ? oe : "transparent"
        },
        children: [
          /* @__PURE__ */ y(
            xo,
            {
              onClick: () => me(P, K),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": X ? "true" : "false",
              "aria-expanded": K,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Je(X, oe, 36)
              },
              children: [
                /* @__PURE__ */ o(Ie, { children: f.icon }),
                /* @__PURE__ */ o(
                  Ye,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ o(
                      ft,
                      {
                        text: f.text,
                        fontWeight: wo
                      }
                    )
                  }
                ),
                /* @__PURE__ */ o(_n, { open: K })
              ]
            }
          ),
          /* @__PURE__ */ o(dn, { in: K, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ o(
            $,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (Q) => so(Q, P, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, so = (f, k, X) => {
    const P = Et(k, f), K = na + (X - 1) * sa;
    if (It(f)) {
      const xe = it(f, r), de = Ve(f, r), ue = ht(f, P);
      return /* @__PURE__ */ y($, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ y(
          xo,
          {
            onClick: () => me(P, ue),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": xe ? "true" : "false",
            "aria-expanded": ue,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: K,
              ...Je(de, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ o(Ie, { children: f.icon }) : null,
              /* @__PURE__ */ o(
                Ye,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ o(
                    ft,
                    {
                      text: f.text,
                      fontWeight: wo
                    }
                  )
                }
              ),
              /* @__PURE__ */ o(_n, { open: ue })
            ]
          }
        ),
        /* @__PURE__ */ o(dn, { in: ue, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ o($, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (Po) => so(Po, P, X + 1)
        ) }) })
      ] }, P);
    }
    const Q = Ve(f, r);
    return /* @__PURE__ */ y(
      xo,
      {
        selected: Q,
        disabled: !f.path,
        ...Oe(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": Q ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: K,
          ...Je(Q, "action.hover", 32),
          ...Ot
        },
        children: [
          f.icon ? /* @__PURE__ */ o(Ie, { children: f.icon }) : null,
          /* @__PURE__ */ o(
            Ye,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ o(
                ft,
                {
                  text: f.text,
                  fontWeight: wo
                }
              )
            }
          )
        ]
      },
      P
    );
  }, io = (f, k, X, P, K, Q) => {
    const xe = !K, de = /* @__PURE__ */ y(
      Re,
      {
        "aria-label": k,
        disabled: xe,
        ...Oe(K),
        onMouseEnter: w ? H.onRailLeafEnter : void 0,
        ...w ? { [to]: "" } : {},
        "data-testid": (Q == null ? void 0 : Q.testId) ?? `sidebar-item-${k}`,
        "data-active": P ? "true" : "false",
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
          color: P ? j : le,
          bgcolor: P ? z : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: In
          },
          "&:hover": Ce,
          ...vo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: w ? fe : 44,
          height: w ? fe : 44,
          color: P ? j : le,
          bgcolor: P ? z : "transparent",
          borderRadius: P ? "8px" : "50%",
          "&:hover": {
            bgcolor: P ? z : Q != null && Q.insideGroup ? "action.hover" : oe,
            borderRadius: "8px"
          },
          ...vo,
          ...w ? co(P) : {}
        },
        children: [
          X,
          F ? /* @__PURE__ */ o(
            ft,
            {
              text: k,
              variant: "caption",
              center: !0,
              fontSize: Rn
            }
          ) : null
        ]
      }
    );
    return F ? xe ? /* @__PURE__ */ o("span", { children: de }, f) : /* @__PURE__ */ o(d.Fragment, { children: de }, f) : /* @__PURE__ */ o(
      Te,
      {
        title: k,
        placement: "right",
        arrow: !w,
        ...w ? lt : {},
        children: xe ? /* @__PURE__ */ o("span", { children: de }) : de
      },
      f
    );
  }, ao = {
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
  }, co = (f) => ({
    borderRadius: `${ne}px`,
    "& .MuiSvgIcon-root": { fontSize: Qt },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${yo.duration}ms ${yo.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), lt = {
    slotProps: {
      tooltip: { sx: Do(G, Y) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, Lt = (f) => {
    var K;
    const k = it(f, r), X = Et("", f), P = ((K = H.state) == null ? void 0 : K.key) === X;
    return /* @__PURE__ */ o(
      $,
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
            ...H.triggerProps(X),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": P,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": k ? "true" : "false",
            "data-open": P ? "true" : "false",
            [to]: "",
            sx: {
              position: "relative",
              width: fe,
              height: fe,
              color: k ? j : le,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: k ? z : "transparent",
              ...co(k),
              // The icon stays centred, in line with every other
              // icon down the rail; the arrow sits in the room
              // beside it
              "&::after": {
                content: '""',
                position: "absolute",
                // Just past the button, in the rail's side gutter,
                // clear of the icon (drawn back inside it when
                // the scrollbar takes that gutter)
                right: -ca(ye),
                top: "50%",
                transform: "translateY(-50%)",
                width: 5,
                height: 8,
                bgcolor: S ?? "currentColor",
                mask: `${ia} center / contain no-repeat`,
                opacity: S ? 1 : 0.55,
                transition: "opacity 160ms ease"
              },
              // Pointed at, or its pages already out: the arrow has
              // said its piece
              '&:hover::after, &[data-open="true"]::after': {
                opacity: 0
              },
              ...vo
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, lo = (f) => {
    const k = it(f, r), X = Ve(f, r), P = Et("", f), K = ht(f, P), Q = /* @__PURE__ */ y(
      Re,
      {
        "aria-label": f.text,
        "aria-expanded": K,
        onClick: () => me(P, K),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": X ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: F ? 0.25 : 0,
          width: F ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...F ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: X ? j : le,
          bgcolor: X ? z : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": F ? { bgcolor: z, color: j } : {
            bgcolor: X ? z : "transparent"
          },
          ...vo
        },
        children: [
          F ? /* @__PURE__ */ o(
            $,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: In
                }
              },
              children: f.icon
            }
          ) : f.icon,
          F ? /* @__PURE__ */ o(
            ft,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: Rn
            }
          ) : null,
          /* @__PURE__ */ o(la, { open: K, size: ra })
        ]
      }
    ), xe = F ? Q : /* @__PURE__ */ o(Te, { title: f.text, placement: "right", arrow: !0, children: Q });
    return /* @__PURE__ */ y(
      $,
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
          bgcolor: k ? oe : "transparent",
          ...F ? {} : { "&:hover": { bgcolor: oe } }
        },
        children: [
          xe,
          K ? Ir(f.subitems, f.icon).map(
            ({ sub: de, icon: ue }) => io(
              de.path,
              de.text,
              ue,
              Ve(de, r),
              de.path,
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
  }, dt = (f) => /* @__PURE__ */ o(
    $,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: io(
        f.text,
        f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
        f.icon,
        Ve(f, r),
        f.path,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), mt = (f) => It(f) ? w ? Lt(f) : v ? lo(f) : Mt(f) : v ? dt(f) : $t(f), Dt = (f) => /* @__PURE__ */ o(
    De,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: v ? "center" : "stretch"
      },
      children: f.map(
        (k, X) => k.dividerAfter && X < f.length - 1 ? /* @__PURE__ */ y(d.Fragment, { children: [
          mt(k),
          /* @__PURE__ */ o(
            ot,
            {
              "data-testid": `sidebar-divider-${k.text}`,
              sx: {
                alignSelf: "stretch",
                my: w ? pt : 1,
                borderColor: "divider"
              }
            }
          )
        ] }, k.text) : mt(k)
      )
    }
  ), kt = v ? I : T, Fo = () => {
    var xe, de;
    const { state: f } = H, k = f ? [...e, ...t].find(
      (ue) => It(ue) && Et("", ue) === f.key
    ) ?? null : null, X = k ? ((xe = pe.current) == null ? void 0 : xe.getBoundingClientRect().right) ?? I : I, P = k ? ((de = pe.current) == null ? void 0 : de.closest("[data-rail-surface]")) ?? pe.current : null, K = P == null ? void 0 : P.getBoundingClientRect(), Q = P && K ? {
      left: K.left,
      top: K.top,
      width: K.width,
      height: K.height,
      radius: parseFloat(
        getComputedStyle(P).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ o(
      Vi,
      {
        group: k,
        groupKey: k ? f.key : null,
        anchor: k ? H.getTrigger(f.key) : null,
        railEdge: X,
        railShape: Q,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: Ne,
        onClose: H.close,
        panelProps: H.flyoutProps,
        accentColor: x,
        activeBackgroundColor: m,
        activeForegroundColor: j,
        solidSurface: D ?? Ge
      }
    );
  }, gt = l ? /* @__PURE__ */ o(
    $,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...w ? { pt: "12px", pb: "12px" } : {
          height: En,
          minHeight: En
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: ke
      },
      children: i || a ? /* @__PURE__ */ o(
        Co,
        {
          logo: i,
          title: v ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: u,
          color: g ?? Ue,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, uo = !l && i ? /* @__PURE__ */ o(
    $,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: w ? pt : 1
      },
      children: /* @__PURE__ */ o(
        Co,
        {
          logo: i,
          appName: a || "App",
          onClick: c,
          menuOpen: u,
          color: g ?? Ue,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, xt = F ? 0.5 : w ? 0.75 : v ? 1 : 1.5;
  return /* @__PURE__ */ o(At.Provider, { value: w, children: /* @__PURE__ */ y(
    $,
    {
      ref: pe,
      ...B,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": v ? "true" : "false",
      "data-labeled": F ? "true" : "false",
      sx: {
        width: kt,
        minWidth: kt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Ge,
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
        ...w ? ao : {}
      },
      children: [
        we.lens,
        gt ?? uo,
        E ? /* @__PURE__ */ o(
          $,
          {
            sx: {
              flexShrink: 0,
              px: xt,
              pt: w ? 0 : 1,
              pb: w ? 0 : 1
            },
            children: E
          }
        ) : null,
        /* @__PURE__ */ o(
          $,
          {
            ref: te,
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: ze ? "auto" : "hidden",
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
                width: w ? Zt : 8
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
              ...w ? da(ye) : { px: xt },
              pt: M && !l ? `${M}px` : w ? pt : 1,
              pb: w ? pt : 2
            },
            children: /* @__PURE__ */ y(
              $,
              {
                ref: ie,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  Z.glass,
                  Dt(e),
                  t.length > 0 ? /* @__PURE__ */ y(
                    $,
                    {
                      sx: { mt: "auto", pt: w ? pt : 2 },
                      children: [
                        A ? null : /* @__PURE__ */ o(
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
        A ? /* @__PURE__ */ o(
          $,
          {
            sx: {
              flexShrink: 0,
              px: xt,
              pb: 1.5,
              ...w ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: Qt
                }
              } : {}
            },
            children: /* @__PURE__ */ o(
              $,
              {
                sx: {
                  borderTop: `1px solid ${Ae}`,
                  pt: w ? pt : 1.5
                },
                children: A
              }
            )
          }
        ) : null,
        w ? Fo() : null
      ]
    }
  ) });
}, fr = "var(--lumora-content-padding, 0px)", Tn = `calc(${fr} * -1)`, wl = ({
  children: e,
  flushTop: t = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: a
}) => /* @__PURE__ */ o(
  $,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Tn,
        mt: t ? Tn : 0,
        // Space below it, like any other block on the page
        mb: fr,
        px: i ? fr : 0,
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
), ha = ({ keys: e }) => /* @__PURE__ */ o(
  $,
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
), $e = {
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
}, Me = {
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
}, yt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, wt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, St = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Ss = Oo(), Pe = Ss.typography.pxToRem, Wr = (e) => {
  const t = e === "dark", r = [...Ss.shadows];
  return r[1] = t ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: t ? $e[300] : $e[200],
        main: $e[400],
        dark: $e[700],
        contrastText: $e[50]
      },
      info: t ? {
        light: $e[500],
        main: $e[700],
        dark: $e[900],
        contrastText: $e[300]
      } : {
        light: $e[100],
        main: $e[300],
        dark: $e[600],
        contrastText: Me[50]
      },
      warning: t ? { light: wt[400], main: wt[500], dark: wt[700] } : { light: wt[300], main: wt[400], dark: wt[800] },
      error: t ? { light: St[400], main: St[500], dark: St[700] } : { light: St[300], main: St[400], dark: St[800] },
      success: t ? { light: yt[400], main: yt[500], dark: yt[700] } : { light: yt[300], main: yt[400], dark: yt[800] },
      grey: Me,
      divider: t ? Be(Me[700], 0.6) : Be(Me[300], 0.4),
      background: t ? { default: Me[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: t ? { primary: "hsl(0, 0%, 100%)", secondary: Me[400] } : { primary: Me[800], secondary: Me[600] },
      action: t ? {
        hover: Be(Me[600], 0.2),
        selected: Be(Me[600], 0.3)
      } : {
        hover: Be(Me[200], 0.2),
        selected: Be(Me[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Pe(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Pe(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Pe(30), lineHeight: 1.2 },
      h4: { fontSize: Pe(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Pe(20), fontWeight: 600 },
      h6: { fontSize: Pe(18), fontWeight: 600 },
      subtitle1: { fontSize: Pe(18) },
      subtitle2: { fontSize: Pe(14), fontWeight: 500 },
      body1: { fontSize: Pe(14) },
      body2: { fontSize: Pe(14), fontWeight: 400 },
      caption: { fontSize: Pe(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, ma = 6, ga = 8, Cn = (e, t) => typeof e == "object" ? e[t] : e, er = ({
  themeMode: e,
  muiTheme: t,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: a = !0,
  contentPadding: c = as,
  sidebarBackgroundColor: u,
  contentBackgroundColor: l,
  content: h
}) => {
  const p = Yn(r.breakpoints.down("md")), g = e === "dark", x = ls({
    showSidebar: a,
    isMobile: p,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), m = No(s, n) ? {
    gutterPx: st,
    radiusPx: is
  } : void 0, S = Ro, _ = ds(
    Cn(u, e),
    g
  ), C = us(
    Cn(l, e),
    g
  ), b = cs(c, r), R = m ? /* @__PURE__ */ y(jt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ o(Fe, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ o(
      jt,
      {
        alignItems: "center",
        spacing: `${ko}px`,
        sx: { mt: 2 },
        children: Array.from({ length: ga }, (D, v) => /* @__PURE__ */ o(
          V,
          {
            sx: {
              width: fe,
              height: fe,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ o(
              Fe,
              {
                variant: "rounded",
                width: Qt,
                height: Qt
              }
            )
          },
          v
        ))
      }
    )
  ] }) : /* @__PURE__ */ y(jt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ o(Fe, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ o(V, { sx: { height: 8 } }),
    Array.from({ length: ma }, (D, v) => /* @__PURE__ */ o(Fe, { variant: "rounded", width: 28, height: 28 }, v))
  ] });
  return /* @__PURE__ */ o(To, { theme: t, children: /* @__PURE__ */ y(
    V,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: C
      },
      children: [
        p && /* @__PURE__ */ y(
          V,
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
              /* @__PURE__ */ o(Fe, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ o(Fe, { variant: "text", width: 96 }),
              /* @__PURE__ */ o(V, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ o(Fe, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !p && x > 0 && /* @__PURE__ */ o(
          V,
          {
            sx: {
              position: "relative",
              width: x,
              flexShrink: 0
            },
            children: /* @__PURE__ */ o(
              V,
              {
                sx: m ? {
                  position: "fixed",
                  top: m.gutterPx,
                  bottom: m.gutterPx,
                  left: m.gutterPx,
                  width: x - 2 * m.gutterPx,
                  borderRadius: `${m.radiusPx}px`,
                  bgcolor: _
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: x,
                  bgcolor: _
                },
                children: R
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          V,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              // The variables the wrapper's <main> sets, so a host's `content`
              // that sizes itself from them measures as it will in the app
              "--lumora-content-padding": b,
              "--lumora-sticky-top": p ? `${S}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: p ? `${S}px` : 0
            },
            children: h ?? /* @__PURE__ */ y(Le, { children: [
              /* @__PURE__ */ o(Fe, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ o(
                Fe,
                {
                  variant: "text",
                  width: 320,
                  sx: { mb: 3 }
                }
              ),
              /* @__PURE__ */ o(jt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from(
                { length: p ? 2 : 4 },
                (D, v) => /* @__PURE__ */ o(
                  Fe,
                  {
                    variant: "rounded",
                    height: 96,
                    sx: { flex: 1 }
                  },
                  v
                )
              ) }),
              /* @__PURE__ */ o(Fe, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, pr = Oo(Wr("light")), Io = Oo(Wr("dark")), xa = (e) => e === "dark" ? Io : pr, ba = ({
  theme: e = "light",
  darkModeSelector: t,
  ...r
}) => {
  const n = Vn();
  if (!t) {
    const i = xa(e);
    return /* @__PURE__ */ y(To, { theme: i, children: [
      /* @__PURE__ */ o(sr, {}),
      /* @__PURE__ */ o(
        er,
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
  return /* @__PURE__ */ y(To, { theme: pr, children: [
    /* @__PURE__ */ o(sr, {}),
    /* @__PURE__ */ o(
      ni,
      {
        styles: {
          [`${t} body`]: {
            backgroundColor: Io.palette.background.default,
            color: Io.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ o(V, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ o(
      er,
      {
        themeMode: "light",
        muiTheme: pr,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ o(V, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ o(
      er,
      {
        themeMode: "dark",
        muiTheme: Io,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class ee extends Error {
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
}, he = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, tt = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, va = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        tt.ACCESS_TOKEN
      ), t = localStorage.getItem(
        tt.REFRESH_TOKEN
      ), r = localStorage.getItem(tt.USER);
      e && !localStorage.getItem(he.ACCESS_TOKEN) && localStorage.setItem(he.ACCESS_TOKEN, e), t && !localStorage.getItem(he.REFRESH_TOKEN) && localStorage.setItem(
        he.REFRESH_TOKEN,
        t
      ), r && !localStorage.getItem(he.USER) && localStorage.setItem(he.USER, r), (e || t || r) && (localStorage.removeItem(tt.ACCESS_TOKEN), localStorage.removeItem(tt.REFRESH_TOKEN), localStorage.removeItem(tt.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, tr = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new ee(
        "localStorage is not available",
        re.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new ee(
      "Storage quota exceeded. Please clear browser data.",
      re.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new ee(
      "Access to localStorage is denied. Please check browser settings.",
      re.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      t.name
    ), new ee(
      "Failed to access storage",
      re.STORAGE_ACCESS_DENIED,
      t
    ));
  }
}, or = (e, t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new ee(
        "localStorage is not available",
        re.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, t), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new ee(
      "Storage quota exceeded. Please clear browser data.",
      re.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new ee(
      "Access to localStorage is denied. Please check browser settings.",
      re.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new ee(
      "Failed to write to storage",
      re.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Es = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (t) {
    return t.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, oo = () => {
  try {
    va();
    const e = tr(he.ACCESS_TOKEN), t = tr(he.REFRESH_TOKEN), r = tr(he.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), Es(he.USER);
      }
    return {
      accessToken: e,
      refreshToken: t,
      user: n
    };
  } catch (e) {
    throw e instanceof ee ? e : new ee(
      "Failed to retrieve authentication tokens",
      re.UNKNOWN_ERROR,
      e
    );
  }
}, ya = () => {
  try {
    const { accessToken: e, refreshToken: t } = oo();
    return !(e || t) ? {
      isAuthenticated: !1,
      error: new ee(
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
      error: e instanceof ee ? e : new ee(
        "Authentication check failed",
        re.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Rs = (e, t, r = null) => {
  try {
    if (!e && !t)
      throw new ee(
        "At least one token must be provided",
        re.TOKEN_INVALID
      );
    return e && or(he.ACCESS_TOKEN, e), t && or(he.REFRESH_TOKEN, t), r && or(he.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof ee ? n : new ee(
        "Failed to store tokens",
        re.UNKNOWN_ERROR,
        n
      )
    };
  }
}, ro = () => {
  try {
    return [
      he.ACCESS_TOKEN,
      he.REFRESH_TOKEN,
      he.USER,
      // Also clear legacy keys for complete cleanup
      tt.ACCESS_TOKEN,
      tt.REFRESH_TOKEN,
      tt.USER
    ].map((n) => Es(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof ee ? e : new ee(
        "Failed to clear tokens",
        re.LOGOUT_FAILED,
        e
      )
    };
  }
}, wa = () => {
  try {
    const { user: e } = oo();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof ee ? e : new ee(
        "Failed to retrieve user data",
        re.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Sl = (e) => {
  if (!(e instanceof ee))
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
    code: e instanceof ee ? e.code : "UNKNOWN",
    timestamp: e instanceof ee ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof ee && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, Sa = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const t = pn.create({
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
      const { accessToken: c } = oo();
      return c && a.headers && (a.headers.Authorization = `Bearer ${c}`), a;
    },
    (a) => Promise.reject(a)
  ), t.interceptors.response.use(
    (a) => a,
    async (a) => {
      var g;
      const c = a.config, u = (g = a.response) == null ? void 0 : g.status, l = (c == null ? void 0 : c.url) || "", h = l.includes("/auth/refresh");
      if (u !== 401 || c._retry || h)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: p } = oo();
      if (!p) {
        const x = new Error(
          "No refresh token available for token refresh"
        );
        return hr(x, "AxiosClient - Token Refresh"), ro(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((x, m) => {
          s.push({ resolve: x, reject: m });
        }).then((x) => {
          const {
            accessToken: m,
            refreshToken: S
          } = x;
          if (c.headers && (c.headers.Authorization = `Bearer ${m}`), l.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const _ = JSON.parse(
                  c.data || "{}"
                );
                _.refresh_token = S, c.data = JSON.stringify(_);
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
        }).catch((x) => Promise.reject(x));
      r = !0, n = pn.post(
        `${e}/auth/refresh`,
        {
          refresh_token: p
        }
      );
      try {
        const x = await n, { accessToken: m, refreshToken: S } = x.data;
        if (Rs(m, S, null), i(null, {
          accessToken: m,
          refreshToken: S
        }), c.headers && (c.headers.Authorization = `Bearer ${m}`), l.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const _ = JSON.parse(
                c.data || "{}"
              );
              _.refresh_token = S, c.data = JSON.stringify(_);
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
      } catch (x) {
        return hr(
          x,
          "AxiosClient - Token Refresh Failed"
        ), i(x), ro(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(x);
      } finally {
        r = !1, n = null;
      }
    }
  ), t;
}, Ea = async (e, t) => {
  const { accessToken: r, refreshToken: n } = oo();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return Rs(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      hr(s, "TokenValidator - Refresh Failed");
    }
  return ro(), t ? t() : window.location.href = "/login", !1;
}, Yt = ({ size: e = 20 }) => /* @__PURE__ */ y(
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
), An = ve($r), et = "#09C1AE", _o = (e, t) => ({
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
}), Ra = (e) => ({
  ..._o(ne, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${ne - 2}px`,
    zIndex: 1,
    background: `${Ao(et, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), On = ({
  variant: e,
  onClick: t,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = Lr(), u = d.useContext(At), l = Ze().palette.mode === "dark", h = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", p = {
    onClick: t,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ y(
    qe,
    {
      ...p,
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
        ...n && _o(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ o(Yt, { size: 20 }),
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
        s && /* @__PURE__ */ o(ha, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && u && ir ? /* @__PURE__ */ o(Te, { title: h, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ o(
    Re,
    {
      ...p,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: fe,
        height: fe,
        borderRadius: `${ne}px`,
        ...Ao(et, l, "clear"),
        ...r && {
          boxShadow: `${Ao(et, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${An.duration}ms ${An.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [be]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && Ra(l)
      },
      children: /* @__PURE__ */ o(Yt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ o(Te, { title: h, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ o(
    Re,
    {
      ...p,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": u || void 0,
      sx: {
        width: u ? fe : 44,
        height: u ? fe : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? et : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && _o(8, "background.paper")
      },
      children: /* @__PURE__ */ o(Yt, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ o(Te, { title: h, placement: "left", children: /* @__PURE__ */ o(
    Re,
    {
      ...p,
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
        ...n && _o(16, "background.paper")
      },
      children: /* @__PURE__ */ o($, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ o(Yt, { size: 26 }) })
    }
  ) });
}, Eo = ({
  title: e = "",
  message: t = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ o(ii, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ y(ai, { children: [
  /* @__PURE__ */ o(ci, { fontSize: "small" }),
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
    qn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Ut = 24, Ia = 720, _a = 1140, Ta = 1250, Ca = ({
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
  const h = d.useRef(!1);
  d.useEffect(() => {
    const S = requestAnimationFrame(() => {
      h.current = !0;
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
  const p = r === "docked", g = Ut + a;
  let x;
  c ? x = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : p ? x = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : x = {
    bottom: g,
    ...n === "left" ? { left: i + Ut } : { right: Ut },
    width: s,
    maxWidth: `calc(100vw - ${Ut * 2}px)`,
    height: `min(${Ia}px, calc(100vh - ${g + Ut}px))`,
    borderRadius: "12px"
  };
  const m = /* @__PURE__ */ o(
    wr,
    {
      role: p ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: p ? _a : Ta,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...x
      },
      children: t
    }
  );
  return p ? /* @__PURE__ */ o(
    di,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...h.current ? {} : { timeout: { enter: 0 } },
      children: m
    }
  ) : /* @__PURE__ */ o(
    li,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: m
    }
  );
}, Aa = 180, $n = 250, Oa = "#01584F", $a = ({
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
}, Is = (e, t, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : t, a = e ? Oa : t;
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
}, _s = ({ link: e }) => /* @__PURE__ */ y(De, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ o(
    $,
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
    $a,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Ts = (e, t, r) => r ? e : /* @__PURE__ */ o(Te, { title: t, placement: "right", arrow: !0, children: e }), Ma = ({
  link: e,
  activePath: t,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: a
}) => {
  const c = Ze(), [u, l] = d.useState(null), [h, p] = d.useState(!1), g = d.useRef(
    null
  ), x = d.useRef(null), m = d.useRef(null), S = d.useRef(!1), _ = d.useRef(!1), C = d.useId(), b = () => {
    g.current && (clearTimeout(g.current), g.current = null);
  }, R = () => {
    b(), g.current = setTimeout(() => {
      p(!1), g.current = null;
    }, Aa);
  }, D = () => {
    b(), p(!0);
  };
  d.useEffect(() => {
    if (!h)
      return;
    const E = (A) => {
      var O;
      A.key === "Escape" && (p(!1), (O = m.current) == null || O.focus());
    };
    return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
  }, [h]), d.useEffect(() => {
    if (!h || !_.current)
      return;
    const E = globalThis.requestAnimationFrame(() => {
      var O;
      const A = (O = x.current) == null ? void 0 : O.querySelector(
        '[role="menuitem"]'
      );
      A == null || A.focus(), _.current = !1;
    });
    return () => cancelAnimationFrame(E);
  }, [h]);
  const v = it(e, t), { activeBg: T, sx: I } = Is(
    s,
    n,
    v,
    a
  ), F = /* @__PURE__ */ o(
    Re,
    {
      ref: m,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        S.current || D();
      },
      onBlur: (E) => {
        var O;
        const A = E.relatedTarget;
        A && ((O = x.current) != null && O.contains(A)) || R();
      },
      onKeyDown: (E) => {
        E.key === "ArrowDown" && (E.preventDefault(), _.current = !0, D());
      },
      onClick: (E) => {
        E.stopPropagation(), !(e.path && !Tt(E)) && (E.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": h,
      "aria-controls": h ? C : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: I,
      children: a ? /* @__PURE__ */ o(_s, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ y(
    $,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ o(
          $,
          {
            ref: l,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              S.current = !0, D();
            },
            onMouseLeave: () => {
              S.current = !1, R();
            },
            children: Ts(F, e.text, a)
          }
        ),
        /* @__PURE__ */ o(
          yr,
          {
            open: h && !!u,
            anchorEl: u,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (E) => E.zIndex.modal },
            children: /* @__PURE__ */ o(
              wr,
              {
                ref: x,
                elevation: 0,
                onMouseEnter: b,
                onMouseLeave: R,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: i,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: c.shadows[8],
                  maxWidth: $n,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ o(
                  Sr,
                  {
                    id: C,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: $n
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
  function M(E, A, O) {
    return E.flatMap((L) => {
      const G = Et(A, L);
      return It(L) ? [
        /* @__PURE__ */ o(
          ui,
          {
            disableSticky: !0,
            title: L.text,
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
            children: L.text
          },
          G
        ),
        ...M(L.subitems, G, O + 1)
      ] : [
        /* @__PURE__ */ y(
          at,
          {
            role: "menuitem",
            title: L.text,
            disabled: !L.path,
            selected: Ve(L, t),
            ...L.path && { component: "a", href: L.path },
            onClick: (Y) => {
              L.path && !Tt(Y) || (Y.preventDefault(), L.path && (r == null || r(L.path)), p(!1));
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
                bgcolor: T,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: T
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              L.icon ? /* @__PURE__ */ o(Ie, { children: L.icon }) : null,
              /* @__PURE__ */ o(
                Ye,
                {
                  primary: L.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          G
        )
      ];
    });
  }
}, La = ({
  link: e,
  activePath: t,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const a = !!(e.path && t === e.path), { sx: c } = Is(
    s,
    n,
    a,
    i
  );
  return Ts(
    /* @__PURE__ */ o(
      Re,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !Tt(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: c,
        children: i ? /* @__PURE__ */ o(_s, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, Da = () => /* @__PURE__ */ o(
  $,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ o(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), ka = () => /* @__PURE__ */ o(
  $,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ o(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), Mn = (e, t) => e.map((r, n) => /* @__PURE__ */ y(d.Fragment, { children: [
  t(r, n),
  n < e.length - 1 ? /* @__PURE__ */ o(Da, {}) : null
] }, n)), Na = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: a = !1
}) => {
  const c = (l, h) => It(l) ? /* @__PURE__ */ o(
    Ma,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: h,
      surfaceBackgroundColor: i,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ o(
    La,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: h,
      railShowTitles: a
    }
  ), u = a ? 1.25 : 1;
  return /* @__PURE__ */ y(
    De,
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
        Mn(e, (l) => c(l, !1)),
        t.length > 0 ? /* @__PURE__ */ y(Le, { children: [
          /* @__PURE__ */ o(ka, {}),
          /* @__PURE__ */ o($, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ o(De, { gap: u, alignItems: "center", children: Mn(
            t,
            (l) => c(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Wa = (e) => e ? ts(e) : "USER", Fa = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t.charAt(0).toUpperCase()).join(""), Ln = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, mr = ({ count: e }) => e ? /* @__PURE__ */ o(
  $,
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
) : null, Fr = ({ name: e, avatar: t, color: r, size: n = 36 }) => /* @__PURE__ */ o(
  pi,
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
    children: Fa(e)
  }
), Cs = ({ name: e, role: t, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ y(Le, { children: [
  /* @__PURE__ */ o(Fr, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ y(
    $,
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
            sx: { ...Ln, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ o(
          ae,
          {
            variant: "caption",
            sx: { ...Ln, opacity: 0.8, color: "inherit" },
            children: Wa(t)
          }
        )
      ]
    }
  )
] }), Dn = {
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
}, As = ({
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
  userAvatar: h,
  menuItems: p = [],
  showSettings: g,
  onSettingsClick: x,
  showThemeToggler: m,
  theme: S,
  onThemeToggle: _,
  onLogout: C
}) => {
  const b = (R) => () => {
    t(), R == null || R();
  };
  return /* @__PURE__ */ y(
    hi,
    {
      anchorEl: e,
      open: !!e,
      onClose: t,
      anchorOrigin: Dn[r].anchor,
      transformOrigin: Dn[r].transform,
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
          De,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ o(
              Cs,
              {
                name: u,
                role: l,
                avatar: h,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ o(ot, {}),
        i && /* @__PURE__ */ y(at, { onClick: b(c), children: [
          /* @__PURE__ */ o(Ie, { children: /* @__PURE__ */ o(Qn, { fontSize: "small" }) }),
          /* @__PURE__ */ o(Ye, { children: "Notifications" }),
          /* @__PURE__ */ o(mr, { count: a })
        ] }),
        p.map((R) => /* @__PURE__ */ y(at, { onClick: b(R.onClick), children: [
          R.icon && /* @__PURE__ */ o(Ie, { children: R.icon }),
          /* @__PURE__ */ o(Ye, { inset: !R.icon, children: R.label }),
          /* @__PURE__ */ o(mr, { count: R.badge })
        ] }, R.key)),
        g && /* @__PURE__ */ y(at, { onClick: b(x), children: [
          /* @__PURE__ */ o(Ie, { children: /* @__PURE__ */ o(fi, { fontSize: "small" }) }),
          /* @__PURE__ */ o(Ye, { children: "Settings" })
        ] }),
        m && [
          /* @__PURE__ */ o(ot, {}, "theme-divider"),
          /* @__PURE__ */ y($, { sx: { px: 1.5, py: 1 }, children: [
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
              mi,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: S,
                onChange: (R, D) => D && D !== S && (_ == null ? void 0 : _()),
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
                  /* @__PURE__ */ o(hn, { value: "light", children: "Light" }),
                  /* @__PURE__ */ o(hn, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ o(ot, {}),
        /* @__PURE__ */ y(
          at,
          {
            onClick: b(C),
            sx: {
              color: S === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ o(Ie, { sx: { color: "inherit" }, children: /* @__PURE__ */ o(Jn, { fontSize: "small" }) }),
              /* @__PURE__ */ o(Ye, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Os = 64, Pa = 2, Xt = ({
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
  href: h,
  testId: p
}) => /* @__PURE__ */ y(
  qe,
  {
    ...h && { component: "a", href: h },
    onClick: r,
    "aria-label": c ?? e,
    "aria-haspopup": u,
    "aria-expanded": u ? n : void 0,
    "aria-current": l && n ? "page" : void 0,
    "data-testid": p,
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
        $,
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
), Ba = ({
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
  activeColor: h,
  activeBackground: p,
  pinnedLinks: g = [],
  activePath: x,
  onLinkClick: m,
  ...S
}) => {
  const _ = g.filter((I) => I.path).slice(0, Pa), [C, b] = d.useState(
    null
  ), { userName: R = "User", userAvatar: D, avatarColor: v } = S, T = { color: l, activeColor: h, activeBackground: p };
  return /* @__PURE__ */ y(
    wr,
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
        height: `calc(${Os}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: u,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ o(
          Xt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ o(Zn, {}),
            onClick: e,
            active: t,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...T
          }
        ),
        _.map((I) => /* @__PURE__ */ o(
          Xt,
          {
            label: I.text,
            icon: I.icon,
            href: I.path,
            onClick: (F) => {
              Tt(F) && (F.preventDefault(), m == null || m(I.path));
            },
            active: it(I, x),
            isPage: !0,
            testId: `mobile-nav-link-${I.text}`,
            ...T
          },
          I.path
        )),
        s && /* @__PURE__ */ o(
          Xt,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ o(
              $,
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
                children: /* @__PURE__ */ o(Yt, { size: 18 })
              }
            ),
            onClick: i,
            active: a,
            testId: "mobile-nav-nexa",
            ...T
          }
        ),
        r && /* @__PURE__ */ o(
          Xt,
          {
            label: "Search",
            icon: /* @__PURE__ */ o(Er, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...T
          }
        ),
        c && /* @__PURE__ */ y(Le, { children: [
          /* @__PURE__ */ o(
            Xt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${R}`,
              icon: /* @__PURE__ */ o(
                Fr,
                {
                  name: R,
                  avatar: D,
                  color: v,
                  size: 26
                }
              ),
              onClick: (I) => b(I.currentTarget),
              active: !!C,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...T
            }
          ),
          /* @__PURE__ */ o(
            As,
            {
              anchorEl: C,
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
}, za = ({
  open: e,
  onClose: t,
  search: r
}) => /* @__PURE__ */ o(
  gi,
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
      De,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ o($, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ o(
            qn,
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
), Ha = ({
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
  xi,
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
    children: /* @__PURE__ */ y(bi, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      t && /* @__PURE__ */ o(
        Re,
        {
          "aria-label": "Open navigation menu",
          onClick: t,
          sx: { color: c },
          children: /* @__PURE__ */ o(Zn, {})
        }
      ),
      /* @__PURE__ */ o(
        Co,
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
      l ? /* @__PURE__ */ o($, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: l }) : null
    ] })
  }
), $s = d.createContext(void 0), Pr = ({
  count: e,
  onClick: t,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const a = Lr(), c = d.useContext($s), u = d.useContext(At), l = e ? `Notifications, ${e} unread` : "Notifications";
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
              width: fe,
              height: fe
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
            es,
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
              children: c ?? /* @__PURE__ */ o(Qn, {})
            }
          )
        }
      )
    }
  );
}, kn = 14, Ga = 18, Ua = "blur(12px) saturate(180%) brightness(1.04)", Xa = (() => {
  var t;
  if (typeof navigator > "u")
    return !1;
  const e = (t = navigator.userAgentData) == null ? void 0 : t.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Ka = (e, t, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / t), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, ja = 140, Nn = 0.22, Va = 0.14, Ya = (e, t, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!t || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, i = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var x;
      const g = e.current;
      g && (g.style.setProperty("--lx", `${i.x.toFixed(1)}px`), g.style.setProperty("--ly", `${i.y.toFixed(1)}px`), g.style.setProperty("--li", i.i.toFixed(3)), (x = n.current) == null || x.call(n, i.x, i.y, i.i));
    }, u = () => {
      i.x += (s.x - i.x) * Nn, i.y += (s.y - i.y) * Nn, i.i += (s.i - i.i) * Va;
      const g = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      g && (i.x = s.x, i.y = s.y, i.i = s.i), c(), a = g ? 0 : requestAnimationFrame(u);
    }, l = () => {
      a || (a = requestAnimationFrame(u));
    }, h = (g) => {
      const x = e.current;
      if (g.pointerType === "touch" || !x)
        return;
      const m = x.getBoundingClientRect();
      if (!m.width || !m.height)
        return;
      s.x = (g.clientX - m.left) * x.offsetWidth / m.width, s.y = (g.clientY - m.top) * x.offsetHeight / m.height;
      const S = Math.max(
        m.left - g.clientX,
        0,
        g.clientX - m.right
      ), _ = Math.max(
        m.top - g.clientY,
        0,
        g.clientY - m.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(S, _) / ja), i.i < 0.01 && (i.x = s.x, i.y = s.y), l();
    }, p = () => {
      s.i = 0, l();
    };
    return document.addEventListener("pointermove", h, { passive: !0 }), document.documentElement.addEventListener("mouseleave", p), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", h), document.documentElement.removeEventListener("mouseleave", p);
    };
  }, [e, t]);
}, no = d.forwardRef(
  ({
    isDark: e,
    solid: t,
    sx: r,
    "data-testid": n,
    refract: s = !0,
    light: i = !0,
    onLight: a
  }, c) => {
    const u = d.useRef(null), l = s && ir;
    Ya(u, i && ir, a);
    const h = Lo(), p = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [g, x] = d.useState(null), m = d.useRef(null), S = d.useCallback(
      (b) => {
        var D;
        if (u.current = b, typeof c == "function" ? c(b) : c && (c.current = b), (D = m.current) == null || D.disconnect(), m.current = null, !b || !l || !Xa || typeof ResizeObserver > "u")
          return;
        const R = () => {
          const v = b.offsetWidth, T = b.offsetHeight;
          x(
            (I) => (I == null ? void 0 : I.width) === v && I.height === T ? I : v && T ? { width: v, height: T } : null
          );
        };
        m.current = new ResizeObserver(R), m.current.observe(b), R();
      },
      [c, l]
    ), _ = d.useMemo(
      () => g ? Ka(g.width, g.height, kn) : null,
      [g]
    ), C = l && !!(_ && g);
    return /* @__PURE__ */ y(Le, { children: [
      C ? /* @__PURE__ */ o(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ y(
            "filter",
            {
              id: p,
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
                    href: _,
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
                    stdDeviation: kn / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ o(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Ga,
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
        $,
        {
          ref: S,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": C ? "true" : void 0,
          sx: [
            Ii(e, t, h),
            C ? {
              backdropFilter: `url(#${p}) ${Ua}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
no.displayName = "GlassLayer";
const gr = {
  "&:focus, &:focus-visible": { outline: "none" }
}, qa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Wn = ve(ps), Fn = ve(Wo), Pn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Za = ({ mode: e, onToggle: t, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = Ze().palette.mode === "dark", a = Lo(), c = d.useRef(null), u = d.useRef(null), l = (g) => {
    var x;
    g !== e && (t == null || t()), (x = (g === "light" ? c : u).current) == null || x.focus();
  }, h = (g) => {
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
  }, p = (g, x, m, S) => {
    const _ = e === g;
    return /* @__PURE__ */ o(
      qe,
      {
        ref: S,
        role: "radio",
        "aria-checked": _,
        "aria-label": x,
        tabIndex: _ ? 0 : -1,
        onClick: () => l(g),
        "data-testid": `theme-segment-${g}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${ne}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: _ ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: _ ? n : "transparent",
          ...s && _ ? rs(i, a) : {},
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
            boxShadow: `0 0 0 2px ${Be(r, 0.6)}`
          },
          ...gr
        },
        children: /* @__PURE__ */ o(m, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ y(
    De,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: h,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: s ? `${ne}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        p("light", "Light", yi, c),
        p("dark", "Dark", vi, u)
      ]
    }
  );
}, Ja = ({
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
  showThemeToggler: h,
  theme: p,
  onThemeToggle: g,
  onProfileClick: x,
  onAiUsageClick: m,
  onLinkClick: S,
  menuItems: _ = [],
  onLogout: C,
  glass: b = !1
}) => {
  const R = Ze(), D = R.palette.mode === "dark", v = d.useRef(null), T = Cr(R.palette.background.paper), I = Dr({
    enabled: b,
    isDark: D,
    selector: Pn,
    radius: ne
  }), [F, M] = d.useState(null);
  d.useEffect(() => {
    if (!F || typeof ResizeObserver > "u")
      return;
    const w = new ResizeObserver(() => {
      var H;
      (H = v.current) == null || H.updatePosition();
    });
    return w.observe(F), () => w.disconnect();
  }, [F]);
  const E = (w) => {
    r(), w == null || w();
  }, A = (w) => {
    r(), w.onClick ? w.onClick() : w.path && (S == null || S(w.path));
  }, O = {
    borderRadius: b ? `${ne}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, L = {
    fontSize: 12,
    lineHeight: "18px",
    letterSpacing: "0.02em",
    fontWeight: 600,
    // White on dark: the accent is too dim against a dark surface
    color: D ? "#ffffff" : u,
    borderRadius: "4px",
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "2px"
    },
    "&.Mui-focusVisible": {
      boxShadow: `0 0 0 2px ${Be(u, 0.6)}`
    },
    ...gr
  }, G = m ? /* @__PURE__ */ y(
    De,
    {
      direction: "row",
      "data-testid": "account-menu-links",
      sx: { alignItems: "center", gap: 0.75, mt: 0.25 },
      children: [
        x ? /* @__PURE__ */ y(Le, { children: [
          /* @__PURE__ */ o(
            qe,
            {
              onClick: () => E(x),
              "data-testid": "account-menu-view-profile",
              sx: L,
              children: "View profile"
            }
          ),
          /* @__PURE__ */ o(
            $,
            {
              component: "span",
              "aria-hidden": !0,
              sx: { color: "text.disabled", fontSize: 12 },
              children: "·"
            }
          )
        ] }) : null,
        /* @__PURE__ */ o(
          qe,
          {
            onClick: () => E(m),
            "data-testid": "account-menu-ai-usage",
            sx: L,
            children: "My AI usage"
          }
        )
      ]
    }
  ) : null, Y = /* @__PURE__ */ y(De, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ y($, { sx: { minWidth: 0, flex: 1 }, children: [
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
      G,
      x && !m ? /* @__PURE__ */ o(
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
            color: D ? "#ffffff" : u,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ o(
    Rr,
    {
      open: e,
      anchorEl: t,
      onClose: r,
      action: v,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...b ? {
        slots: { transition: vr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: M,
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
        $,
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
            [`& :is(${Pn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...qa, width: n, minWidth: n },
          children: [
            b ? /* @__PURE__ */ o(
              no,
              {
                isDark: D,
                solid: T,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Ar} ${Wn.duration}ms ${Wn.easing} both`,
                  [be]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ y(
              $,
              {
                ...I.containerProps,
                sx: b ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Or} ${Fn.duration}ms ${Fn.easing} 70ms both`,
                  [be]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  I.lens,
                  x && !m ? /* @__PURE__ */ o(
                    qe,
                    {
                      onClick: () => E(x),
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
                        ...gr
                      },
                      children: Y
                    }
                  ) : /* @__PURE__ */ o($, { "data-testid": "account-menu-header", children: Y }),
                  /* @__PURE__ */ o(ot, {}),
                  h ? /* @__PURE__ */ y(
                    $,
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
                        /* @__PURE__ */ o(Ie, { children: /* @__PURE__ */ o(wi, { fontSize: "small" }) }),
                        /* @__PURE__ */ o(ae, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ o(
                          Za,
                          {
                            glass: b,
                            mode: p,
                            onToggle: g,
                            accentColor: u,
                            tint: l
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ y(
                    Sr,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: h ? 0 : 0.5, pb: 0.5 },
                      children: [
                        _.map((w) => /* @__PURE__ */ y(
                          at,
                          {
                            onClick: () => A(w),
                            "data-testid": `menu-item-${w.key}`,
                            sx: O,
                            children: [
                              /* @__PURE__ */ o(Ie, { children: w.icon }),
                              /* @__PURE__ */ o(ae, { sx: { flex: 1 }, children: w.label }),
                              /* @__PURE__ */ o(mr, { count: w.badge })
                            ]
                          },
                          w.key
                        )),
                        C ? /* @__PURE__ */ o(ot, { component: "li", sx: { my: 0.5 } }) : null,
                        C ? /* @__PURE__ */ y(
                          at,
                          {
                            onClick: () => E(C),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...O,
                              color: D ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ o(Ie, { sx: { color: "inherit" }, children: /* @__PURE__ */ o(Jn, { fontSize: "small" }) }),
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
}, Qa = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ec = ({
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
  headerForegroundColor: h,
  activeAccentColor: p = "#01584f",
  activeBackgroundColor: g,
  groupArrowColor: x,
  groupAccentColor: m,
  activeForegroundColor: S,
  foregroundColor: _,
  surfaceBackgroundColor: C,
  flyoutSurfaceColor: b,
  collapsed: R,
  expandedWidth: D,
  collapsedWidth: v,
  topContent: T,
  submenuMode: I,
  color: F,
  hoverColor: M,
  avatarColor: E,
  showProfile: A = !0,
  userName: O = "User",
  userEmail: L,
  userRole: G,
  userAvatar: Y,
  showNotifications: w = !0,
  notificationCount: H = 0,
  onNotificationsClick: pe,
  whatsNewCount: ie = 0,
  onProfileClick: te,
  onAiUsageClick: ye,
  menuItems: ze,
  onLogout: we,
  theme: W = "light",
  showThemeToggler: B = !0,
  onThemeToggle: z
}) => {
  const Z = Ze(), U = Z.palette.mode === "dark", ce = C ?? (U ? Z.palette.background.paper : "#ffffff"), He = F ?? _ ?? (U ? Z.palette.text.primary : p), j = M ?? m ?? Jt(p), J = E ?? p, Ce = d.useRef(null), [oe, Ge] = d.useState(!1), le = G ? ts(G) : void 0, ke = (Je) => /* @__PURE__ */ o(
    Fr,
    {
      name: O,
      avatar: Y,
      color: J,
      size: Je
    }
  ), Ue = H + ie, Ae = R && I === "flyout", Ne = w ? /* @__PURE__ */ o(
    Pr,
    {
      count: Ue,
      onClick: pe,
      color: He,
      hoverColor: j,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Oe = A ? /* @__PURE__ */ y(
    qe,
    {
      ref: Ce,
      onClick: () => Ge(!0),
      "aria-haspopup": "menu",
      "aria-expanded": oe,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: R ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        p: Ae ? "4px" : 0.75,
        borderRadius: "10px",
        bgcolor: oe ? j : "transparent",
        "&:hover": { bgcolor: j },
        ...Qa
      },
      children: [
        R && !Ae && w ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ o(
            es,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Ue,
              children: ke(36)
            }
          )
        ) : ke(R ? 36 : 40),
        R ? null : /* @__PURE__ */ y($, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ o(
            ae,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: He, lineHeight: 1.3 },
              children: O
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
                color: He,
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
  ) : null, me = !!Ne && (!R || Ae || !Oe);
  return /* @__PURE__ */ y(
    $,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": R ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ o(
          ur,
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
            headerForegroundColor: h,
            activeAccentColor: p,
            activeBackgroundColor: g,
            groupArrowColor: x,
            groupAccentColor: m,
            activeForegroundColor: S,
            foregroundColor: _,
            surfaceBackgroundColor: ce,
            flyoutSurfaceColor: b,
            collapsed: R,
            expandedWidth: D,
            collapsedWidth: v,
            topContent: T,
            footer: Oe || me ? /* @__PURE__ */ y(
              De,
              {
                direction: Ae ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  Ae && me ? Ne : null,
                  Oe,
                  !Ae && me ? Ne : null
                ]
              }
            ) : void 0,
            submenuMode: I
          }
        ),
        A ? /* @__PURE__ */ o(
          Ja,
          {
            open: oe,
            anchorEl: Ce.current,
            onClose: () => Ge(!1),
            width: Math.max(D - 16, 240),
            renderAvatar: ke,
            userName: O,
            userEmail: L,
            roleLabel: le,
            accentColor: p,
            tint: j,
            showThemeToggler: B,
            theme: W,
            onThemeToggle: z,
            onProfileClick: te,
            onAiUsageClick: ye,
            onLinkClick: n,
            menuItems: ze,
            onLogout: we,
            glass: I === "flyout"
          }
        ) : null
      ]
    }
  );
}, Bn = ve(ps), zn = ve(Wo), Hn = 240, tc = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, oc = ({
  anchorEl: e,
  onClose: t,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: a = !1
}) => {
  const c = Ze(), u = c.palette.mode === "dark", l = !!e, h = Cr(c.palette.background.paper), p = Dr({
    enabled: a,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: ne
  }), g = /* @__PURE__ */ o(
    Sr,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((x) => {
        const m = x.key === n, S = x.accentColor ?? i;
        return /* @__PURE__ */ y(
          at,
          {
            selected: m,
            onClick: () => s(x),
            "data-testid": `platform-item-${x.key}`,
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
                $,
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
                Ye,
                {
                  primary: x.name,
                  secondary: x.description,
                  sx: { my: 0 },
                  slotProps: {
                    primary: {
                      sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }
                    },
                    secondary: { sx: { fontSize: 12, lineHeight: "18px" } }
                  }
                }
              ),
              m ? /* @__PURE__ */ o(
                Si,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: S }
                }
              ) : null
            ]
          },
          x.key
        );
      })
    }
  );
  return /* @__PURE__ */ o(
    Rr,
    {
      open: l,
      anchorEl: e,
      onClose: t,
      onClick: (x) => x.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: vr },
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
        $,
        {
          "data-testid": "platform-menu",
          "data-glass": a ? "true" : void 0,
          sx: a ? {
            position: "relative",
            minWidth: Hn,
            borderRadius: `${ne}px`
          } : { ...tc, minWidth: Hn },
          children: a ? /* @__PURE__ */ y(Le, { children: [
            /* @__PURE__ */ o(
              no,
              {
                isDark: u,
                solid: h,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Ar} ${Bn.duration}ms ${Bn.easing} both`,
                  [be]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ y(
              $,
              {
                ...p.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Or} ${zn.duration}ms ${zn.easing} 70ms both`,
                  [be]: { animation: "none" }
                },
                children: [
                  p.lens,
                  g
                ]
              }
            )
          ] }) : g
        }
      )
    }
  );
}, rc = ({ children: e, anchorEl: t, ...r }) => {
  const n = d.useRef(null), s = !!(t && n.current && t.contains(n.current));
  return /* @__PURE__ */ y(
    $,
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
          oc,
          {
            ...r,
            anchorEl: s ? t : null
          }
        )
      ]
    }
  );
}, nc = ({
  compact: e,
  color: t,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var D;
  const {
    avatarColor: a,
    showNotifications: c,
    notificationCount: u,
    onNotificationsClick: l,
    userName: h = "User",
    userRole: p,
    userAvatar: g
  } = i, x = d.useRef(null), [m, S] = d.useState(
    null
  ), _ = !!m, C = d.useRef(e);
  d.useEffect(() => {
    e && !C.current && S(null), C.current = e;
  }, [e]);
  const b = d.useContext(At);
  if (!c && !n)
    return null;
  const R = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: t }
  };
  return /* @__PURE__ */ y(Le, { children: [
    /* @__PURE__ */ y(
      De,
      {
        ref: x,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ o(
            Te,
            {
              title: e ? h : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ o(
                qe,
                {
                  onClick: () => S(x.current),
                  "aria-label": `Account menu for ${h}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": _,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? b ? "4px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: t,
                    bgcolor: _ ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...R
                  },
                  children: /* @__PURE__ */ o(
                    Cs,
                    {
                      name: h,
                      role: p,
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
            Pr,
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
      As,
      {
        anchorEl: m,
        onClose: () => S(null),
        placement: e ? "beside" : "above",
        width: e || (D = x.current) == null ? void 0 : D.clientWidth,
        ...i
      }
    )
  ] });
}, sc = 120, ic = 300, Gn = ve(fs), Un = ve(Wo), ac = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : t.value) ?? "";
}, cc = 'input, textarea, [contenteditable="true"]', xr = (e) => {
  var t;
  (t = e == null ? void 0 : e.querySelector(cc)) == null || t.focus();
}, Xn = (e) => e ? `Search (${e.join("")})` : "Search", lc = ({
  search: e,
  icon: t,
  mode: r,
  onExpand: n,
  autoFocus: s = !1,
  onAutoFocused: i,
  color: a,
  hoverColor: c,
  shortcutKeys: u
}) => {
  const l = Lr(), h = d.useContext(At), p = d.useRef(null), [g, x] = d.useState(null);
  return d.useEffect(() => {
    r === "full" && s && (xr(p.current), i == null || i());
  }, [r, s, i]), r === "full" ? /* @__PURE__ */ o(
    $,
    {
      ref: p,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : r === "popover" && h ? /* @__PURE__ */ o(
    dc,
    {
      search: e,
      icon: t,
      color: a,
      railTooltip: l,
      tooltip: Xn(u)
    }
  ) : /* @__PURE__ */ y(
    $,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ o(
          Te,
          {
            title: Xn(u),
            placement: "right",
            arrow: !0,
            ...l,
            children: /* @__PURE__ */ o(
              Re,
              {
                "aria-label": "Search",
                onClick: (m) => r === "expand" ? n == null ? void 0 : n() : x(m.currentTarget),
                sx: {
                  width: 44,
                  height: 44,
                  color: a,
                  borderRadius: "8px",
                  "&:hover": { bgcolor: c }
                },
                children: t ?? /* @__PURE__ */ o(Er, {})
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          Rr,
          {
            open: !!g,
            anchorEl: g,
            onClose: () => x(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (m) => xr(m)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, dc = ({ search: e, icon: t, color: r, railTooltip: n, tooltip: s }) => {
  const i = Ze().palette.mode === "dark";
  _i(i, cr(r, i ? 0.3 : 0.35));
  const a = `rgb(${Lo()})`, c = Cr(i ? "#1e2430" : "#ffffff"), u = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${ne}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: a
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${ne}px`,
      "&.Mui-focusVisible": { borderColor: a }
    }
  }, l = d.useRef(null), h = d.useRef(null), [p, g] = d.useState(!1), x = d.useRef(!1), m = d.useRef(void 0), S = d.useRef(void 0), _ = () => {
    clearTimeout(m.current), clearTimeout(S.current);
  }, C = d.useCallback(() => {
    _(), x.current = !1, g(!1);
  }, []), b = () => {
    clearTimeout(S.current), p || (clearTimeout(m.current), m.current = setTimeout(
      () => g(!0),
      sc
    ));
  }, R = () => {
    clearTimeout(m.current), clearTimeout(S.current), S.current = setTimeout(() => {
      !x.current && !ac(h.current) && g(!1);
    }, ic);
  };
  return d.useEffect(() => _, []), d.useEffect(() => {
    if (!p)
      return;
    const D = setTimeout(() => xr(h.current)), v = (I) => {
      var M, E;
      const F = I.target;
      !((M = h.current) != null && M.contains(F)) && !((E = l.current) != null && E.contains(F)) && C();
    }, T = (I) => {
      var F;
      I.key === "Escape" && (C(), (F = l.current) == null || F.focus());
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", T), () => {
      clearTimeout(D), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", T);
    };
  }, [p, C]), /* @__PURE__ */ y(
    $,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ o(
          Te,
          {
            title: p ? "" : s,
            placement: "right",
            arrow: !0,
            ...n,
            children: /* @__PURE__ */ o(
              Re,
              {
                ref: l,
                "aria-label": "Search",
                "aria-expanded": p,
                onMouseEnter: b,
                onMouseLeave: R,
                onClick: () => {
                  _(), x.current = !0, g(!0);
                },
                sx: {
                  width: fe,
                  height: fe,
                  color: r,
                  borderRadius: `${ne}px`
                },
                children: t ?? /* @__PURE__ */ o(
                  Er,
                  {
                    sx: { fontSize: Qt }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          yr,
          {
            open: p,
            anchorEl: l.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ y(
              $,
              {
                ref: h,
                "data-testid": "sidebar-search-card",
                onMouseEnter: b,
                onMouseLeave: R,
                sx: {
                  position: "relative",
                  width: 320,
                  p: 1,
                  borderRadius: `${ne}px`
                },
                children: [
                  /* @__PURE__ */ o(
                    no,
                    {
                      isDark: i,
                      solid: c,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${Ar} ${Gn.duration}ms ${Gn.easing} both`,
                        [be]: { animation: "none" }
                      }
                    }
                  ),
                  /* @__PURE__ */ o(
                    $,
                    {
                      sx: {
                        position: "relative",
                        // The host's field, set into the glass: an outlined
                        // input or button becomes a recessed glass well.
                        // Classes repeat to outrank the host's own styles.
                        ...u,
                        animation: `${Or} ${Un.duration}ms ${Un.easing} 60ms both`,
                        [be]: { animation: "none" }
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
}, uc = 80, fc = 300, pc = 32, hc = (e) => {
  const t = d.useRef(/* @__PURE__ */ new WeakSet()), r = d.useRef(void 0), n = d.useRef(void 0), [s, i] = d.useState(!1), [a, c] = d.useState(!1), [u, l] = d.useState(!1), h = d.useRef(null), p = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  d.useEffect(() => {
    if (!e) {
      p(), i(!1), c(!1), l(!1);
      return;
    }
    const m = (b) => {
      var D;
      if (b.pointerType !== "mouse")
        return;
      const R = b.clientX <= pc;
      R && ((D = h.current) == null || D.style.setProperty(
        "--edge-glow-y",
        `${b.clientY}px`
      )), l(R);
    }, S = () => l(!1), _ = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), c(!1);
      }, fc));
    }, C = (b) => {
      t.current.has(b) || _();
    };
    return document.addEventListener("mouseover", C), document.addEventListener("pointermove", m, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", _), document.documentElement.addEventListener("mouseleave", S), () => {
      p(), document.removeEventListener("mouseover", C), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener(
        "mouseleave",
        _
      ), document.documentElement.removeEventListener(
        "mouseleave",
        S
      );
    };
  }, [e]);
  const g = {
    onMouseOver: (m) => {
      t.current.add(m.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, uc));
    },
    onFocus: (m) => {
      mc(m.target) && c(!0);
    },
    onBlur: (m) => {
      const S = m.relatedTarget;
      (!S || !m.currentTarget.contains(S)) && c(!1);
    },
    onKeyDown: (m) => {
      m.key === "Escape" && (c(!1), i(!1));
    }
  }, x = e && (s || a);
  return {
    shown: x,
    nearEdge: e && u && !x,
    glowRef: h,
    rootProps: g
  };
}, mc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, gc = 100, xc = () => {
  const e = d.useRef(null), t = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = d.useState(!1), [i, a] = d.useState(!1), c = () => {
    clearTimeout(t.current), t.current = void 0;
  };
  return d.useEffect(() => {
    const l = (p) => {
      r.current.has(p) || (c(), s(!1));
    }, h = () => {
      c(), s(!1);
    };
    return document.addEventListener("mouseover", l), document.documentElement.addEventListener("mouseleave", h), () => {
      c(), document.removeEventListener("mouseover", l), document.documentElement.removeEventListener(
        "mouseleave",
        h
      );
    };
  }, []), d.useEffect(() => {
    if (!i)
      return;
    const l = (h) => {
      var p;
      (p = e.current) != null && p.contains(h.target) || a(!1);
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
        }, gc));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (l) => {
        const h = l.relatedTarget;
        h && !l.currentTarget.contains(h) && a(!1);
      },
      onKeyDown: (l) => {
        l.key === "Escape" && a(!1);
      }
    }
  };
}, bc = (e) => {
  const t = e == null ? void 0 : e.querySelector(":scope > aside");
  if (!t)
    return null;
  const r = t.querySelector("[data-rail-surface]") ?? t, { right: n, width: s } = t.getBoundingClientRect(), { top: i, height: a } = r.getBoundingClientRect();
  return s <= 0 || a <= 0 ? null : { left: n, top: i, height: a };
}, vc = 300, rr = 288, yc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", wc = 18, Kn = 72, nr = 90, Sc = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", Ec = 68, jn = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Rc = typeof window > "u" ? Kt : ri, El = ({
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
  mobileBottomBarLinks: h,
  logo: p,
  onBrandClick: g,
  searchComponent: x,
  searchIcon: m,
  notificationsIcon: S,
  searchShortcut: _ = !1,
  brandColor: C,
  contentPadding: b = as,
  userMenuItems: R,
  sidebarBackgroundColor: D,
  sidebarHeaderBackgroundColor: v,
  groupAccentColor: T,
  activeSidebarForegroundColor: I,
  enableRefreshToken: F = !1,
  holdSessionSkeleton: M = !1,
  sessionSkeletonContent: E,
  activePath: A,
  onLinkClick: O,
  showProfile: L = !0,
  userName: G,
  userRole: Y,
  userAvatar: w,
  userEmail: H,
  onLogout: pe,
  showSettings: ie = !0,
  onSettingsClick: te,
  onProfileClick: ye,
  onAiUsageClick: ze,
  showNotifications: we = !0,
  notificationCount: W = 0,
  NotificationSidebarContent: B,
  whatsNewCount: z = 0,
  onNotificationsClick: Z,
  platforms: U,
  currentPlatformKey: ce,
  onPlatformSelect: He,
  onVerify: j,
  alertProps: J,
  style: Ce,
  sidebarStyles: oe,
  contentStyles: Ge,
  accentColor: le,
  sidebarAccentColor: ke,
  sidebarActiveBackgroundColor: Ue,
  sidebarGroupArrowColor: Ae,
  sidebarForegroundColor: Ne,
  contentBackgroundColor: Oe,
  theme: me = "light",
  darkModeSelector: ht,
  showThemeToggler: Je = !1,
  onThemeToggle: Ot,
  GlobalChatSidebar: $t,
  useChatSidebar: Mt,
  chatPanelMode: so = "docked",
  chatPanelPosition: io = "right",
  chatPanelWidth: ao = 420,
  onChatClose: co,
  showAssistant: lt = !1,
  assistantPlacement: Lt = "sidebar",
  assistantShortcut: lo = "j",
  onAssistantClick: dt,
  assistantActive: mt = !1,
  assistantBusy: Dt = !1,
  customNavbar: kt,
  customNavbarProps: Fo,
  redirectToLogin: gt,
  apiBaseUrl: uo
}) => {
  const xt = Vn(), se = Yn(xt.breakpoints.down("md")), f = un(
    () => Oo(Wr(me)),
    [me]
  ), k = me === "dark", X = le ?? "#01584f", P = ke ?? X, K = us(
    typeof Oe == "object" ? Oe[me] : Oe,
    k
  ), Q = a === "collapsible", xe = a === "panel", de = xe && s && !se, ue = a === "rail-labeled", Po = Q || ue, Xe = ds(
    D,
    k
  ), Bo = v ?? Xe, Se = Ne ?? (k ? "#ffffff" : P), Nt = T ?? Jt(Se), Wt = v ? ar(Bo) : Se, Br = (N) => /* @__PURE__ */ o(
    V,
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
  ), fo = C ?? Wt, [zr, zo] = nt(
    null
  ), Ho = ((U == null ? void 0 : U.length) ?? 0) > 1, Ms = Zo(() => zo(null), []), Ls = (N) => {
    zo(null), He ? He(N) : N.key !== ce && N.url && window.location.assign(N.url);
  }, Hr = (N) => Ho ? /* @__PURE__ */ o(
    rc,
    {
      anchorEl: zr,
      onClose: Ms,
      platforms: U,
      currentKey: ce,
      onSelect: Ls,
      accentColor: X,
      glass: c === "flyout" && (Q || xe) && !se,
      children: N
    }
  ) : N, po = Ho ? (N) => zo(N.currentTarget) : g, ho = Ho ? !!zr : void 0, Go = Hr(
    p ?? Br(fo)
  ), Ds = Hr(
    p ?? Br(C ?? Se)
  ), Uo = xc(), We = No(c, a), Ke = We || !Uo.expanded, je = s && !se && Ci(u, c, a), rt = hc(je), Gr = We ? "popover" : "expand", Ur = We ? qt : Vt, Xr = We ? "transparent" : Xe, Kr = We && !v ? "transparent" : Bo, [ks, jr] = nt(!1), Ns = Zo(() => jr(!1), []), Qe = ls({
    showSidebar: s,
    isMobile: se,
    sidebarVariant: a,
    sidebarSubmenu: c,
    sidebarAutoHide: u
  }), [Vr, ut] = nt(!1), [Yr, Xo] = nt(!1), Ee = se && l === "bottom-bar", qr = `calc(${Os}px + env(safe-area-inset-bottom, 0px))`, [Ft, Zr] = nt({ open: !1, tab: "notifications" }), Jr = () => Zr((N) => ({ ...N, open: !1 })), Ws = we && !!B, Qr = bo(null), [Fs, Ps] = nt(null), Pt = Zo(() => {
    const N = se ? null : bc(Qr.current), q = N && je ? { ...N, left: st } : N;
    Ps(
      (ge) => ge && q && ge.left === q.left && ge.top === q.top && ge.height === q.height ? ge : q
    );
  }, [se, je]);
  Kt(() => {
    if (Ft.open)
      return Pt(), window.addEventListener("resize", Pt), () => window.removeEventListener("resize", Pt);
  }, [Ft.open, Pt]);
  const [Bs, zs] = nt(!0), [Hs, Gs] = nt(!1), Ko = Mt == null ? void 0 : Mt(), en = (Ko == null ? void 0 : Ko.isOpen) ?? !1, tn = so === "floating" ? "floating" : "docked", Us = tn === "docked" && en && $t && !se ? ao : 0, mo = bo(j), on = bo(!1), rn = un(
    () => Sa(uo),
    [uo]
  );
  Kt(() => {
    mo.current = j;
  }, [j]);
  const jo = bo(dt);
  jo.current = dt;
  const Bt = lt && lo ? lo.toLowerCase() : null;
  Kt(() => {
    if (!Bt)
      return;
    const N = (q) => {
      (q.metaKey || q.ctrlKey) && !q.altKey && !q.shiftKey && q.key.toLowerCase() === Bt && jo.current && (q.preventDefault(), jo.current());
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [Bt]);
  const nn = (N) => {
    const q = pe(N);
    q instanceof Promise && q.catch((ge) => {
      console.error("Error in logout handler:", ge);
    });
  };
  if (Rc(() => {
    (() => {
      var q;
      try {
        const { isAuthenticated: ge } = ya();
        if (!ge) {
          console.log("No session found, redirecting to login"), ro(), gt();
          return;
        }
        if (!on.current) {
          const { user: Ht, error: qo } = wa();
          if (Ht && !qo) {
            const Qs = {
              name: Ht.name || "",
              email: Ht.email || "",
              profilePicture: Ht.profilePicture || "",
              role: Ht.role || ""
            };
            on.current = !0, (q = mo.current) == null || q.call(mo, Qs);
          } else
            qo && console.error("Error getting user data:", qo);
        }
        Gs(!0);
      } catch (ge) {
        console.error("Error checking session:", ge), ro(), gt();
      } finally {
        zs(!1);
      }
    })();
  }, [gt]), Kt(() => {
    F && Ea(rn, gt);
  }, [F, rn]), Bs || M)
    return /* @__PURE__ */ o(
      ba,
      {
        theme: me,
        darkModeSelector: ht,
        sidebarVariant: a,
        sidebarSubmenu: c,
        sidebarAutoHide: u,
        showSidebar: s,
        contentPadding: b,
        sidebarBackgroundColor: D,
        contentBackgroundColor: Oe,
        content: E
      }
    );
  if (!Hs)
    return null;
  const zt = x ?? (kt ? /* @__PURE__ */ o(kt, { ...Fo }) : null), Xs = (N) => {
    ut(!1), Xo(!1), Pt(), Zr({ open: !0, tab: N });
  }, Vo = B && (() => Xs("notifications")), Ks = W + z, sn = {
    avatarColor: P,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: R == null ? void 0 : R.map(
      (N) => N.onClick || !N.path ? N : { ...N, onClick: () => O == null ? void 0 : O(N.path) }
    ),
    showNotifications: we,
    notificationCount: W,
    whatsNewCount: z,
    onNotificationsClick: Vo,
    showProfile: L,
    userName: G,
    userRole: Y,
    userAvatar: w,
    showSettings: ie,
    onSettingsClick: te,
    showThemeToggler: Je,
    theme: me,
    onThemeToggle: Ot,
    onLogout: nn
  }, Yo = (N) => /* @__PURE__ */ o(
    nc,
    {
      ...sn,
      compact: N,
      color: Se,
      hoverColor: Nt
    }
  ), an = Bt ? [jn() ? "⌘" : "Ctrl", Bt.toUpperCase()] : void 0, js = (N) => lt && Lt === "sidebar" ? /* @__PURE__ */ o(
    On,
    {
      variant: N ? "sidebar-icon" : "sidebar",
      onClick: dt,
      active: mt,
      busy: Dt,
      shortcutKeys: an,
      accentColor: Se
    }
  ) : null, Vs = _ ? [jn() ? "⌘" : "Ctrl", _.toUpperCase()] : void 0, Ys = (N) => zt ? /* @__PURE__ */ o(
    lc,
    {
      search: zt,
      icon: m,
      mode: N,
      onExpand: () => {
        Uo.pin(), jr(!0);
      },
      autoFocus: ks,
      onAutoFocused: Ns,
      color: Se,
      hoverColor: Nt,
      shortcutKeys: Vs
    }
  ) : null, go = (N) => {
    const q = js(N !== "full"), ge = Ys(N);
    return q || ge ? /* @__PURE__ */ y(
      jt,
      {
        spacing: We ? `${ko}px` : 1.5,
        sx: { alignItems: N === "full" ? "stretch" : "center" },
        children: [
          q,
          We && q && ge ? /* @__PURE__ */ o(
            V,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Jt(Se)}`
              }
            }
          ) : null,
          ge
        ]
      }
    ) : void 0;
  }, cn = () => /* @__PURE__ */ o(
    ur,
    {
      mainLinks: t,
      secondaryLinks: r,
      activePath: A,
      onLinkClick: O,
      showHeaderBar: Q,
      logo: Go,
      title: n,
      onBrandClick: po,
      brandMenuOpen: ho,
      brandColor: fo,
      headerBackgroundColor: Q ? Kr : void 0,
      headerForegroundColor: Q ? Wt : void 0,
      activeAccentColor: P,
      activeBackgroundColor: Ue,
      groupArrowColor: Ae,
      groupAccentColor: T,
      activeForegroundColor: I,
      foregroundColor: Ne,
      surfaceBackgroundColor: Xr,
      flyoutSurfaceColor: Xe,
      collapsed: ue || Ke,
      showLabels: ue,
      expandedWidth: rr,
      collapsedWidth: ue ? ns : Ur,
      topContent: go(
        ue ? "popover" : Ke ? Gr : "full"
      ),
      footer: Yo(ue || Ke),
      submenuMode: We ? "flyout" : "inline"
    }
  ), ln = (N) => We ? qs(N) : Zs(N), qs = (N) => /* @__PURE__ */ y(
    V,
    {
      component: "aside",
      ...je ? rt.rootProps : {},
      "data-auto-hide": je ? "true" : void 0,
      "data-shown": je ? String(rt.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (q) => q.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...je ? {
          position: "fixed",
          left: 0,
          width: qt + 2 * st,
          pointerEvents: "none"
        } : {
          width: Qe,
          minWidth: Qe,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: K
        }
      },
      children: [
        je && /* @__PURE__ */ o(
          V,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: wc,
              pointerEvents: "auto"
            }
          }
        ),
        je && /* @__PURE__ */ o(
          V,
          {
            ref: rt.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(rt.nearEdge),
            "aria-hidden": "true",
            sx: {
              "--edge-glow-y": "50%",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Kn,
              pointerEvents: "none",
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${Kn}px ${nr}px at 0 var(--edge-glow-y), ${Be(Se, k ? 0.5 : 0.4)}, ${Be(Se, 0)})`,
              opacity: rt.nearEdge ? 1 : 0,
              transition: "opacity 200ms ease",
              // And a bright line along the edge beside it
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 3,
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${nr}px), ${Be(Se, k ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${nr}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ y(
          V,
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            sx: {
              position: "absolute",
              top: st,
              bottom: st,
              left: st,
              width: qt,
              borderRadius: `${is}px`,
              display: "flex",
              flexDirection: "column",
              ...je && {
                pointerEvents: rt.shown ? "auto" : "none",
                opacity: rt.shown ? 1 : 0,
                transform: rt.shown ? "none" : `translateX(calc(-100% - ${2 * st}px))`,
                transition: Sc,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...oe
            },
            children: [
              /* @__PURE__ */ o(
                no,
                {
                  isDark: k,
                  solid: Xe,
                  sx: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit"
                  }
                }
              ),
              /* @__PURE__ */ o(
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
                  children: N
                }
              )
            ]
          }
        )
      ]
    }
  ), Zs = (N) => /* @__PURE__ */ o(
    V,
    {
      component: "aside",
      sx: {
        width: Vt,
        minWidth: Vt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (q) => q.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ o(
        V,
        {
          ...We ? {} : Uo.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ke ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Ke ? Vt : rr,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Xe,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Ke ? "none" : `4px 0 24px rgba(0, 0, 0, ${k ? 0.5 : 0.12})`,
            transition: yc,
            ...oe
          },
          children: N
        }
      )
    }
  ), Js = cs(
    b,
    xt
  ), bt = se ? null : Fs;
  return /* @__PURE__ */ o(To, { theme: f, children: /* @__PURE__ */ o(os.Provider, { value: P, children: /* @__PURE__ */ o(Mo.Provider, { value: Xe, children: /* @__PURE__ */ o($s.Provider, { value: S, children: /* @__PURE__ */ y(
    V,
    {
      ref: Qr,
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Ce
      },
      children: [
        /* @__PURE__ */ o(sr, {}),
        se && /* @__PURE__ */ o(
          Ha,
          {
            height: Ro,
            onMenuClick: s && !Ee ? () => ut(!0) : void 0,
            appName: n,
            logo: Go,
            onBrandClick: po,
            brandMenuOpen: ho,
            background: Bo,
            color: Wt,
            brandColor: fo,
            endContent: we ? /* @__PURE__ */ o(
              Pr,
              {
                count: Ks,
                onClick: Vo,
                color: Wt,
                hoverColor: Nt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !se && ue && /* @__PURE__ */ o(
          V,
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
              ...oe
            },
            children: cn()
          }
        ),
        s && !se && Q && ln(
          /* @__PURE__ */ y(Le, { children: [
            cn(),
            (J == null ? void 0 : J.show) && !Ke && /* @__PURE__ */ o(Eo, { ...J })
          ] })
        ),
        de && ln(
          /* @__PURE__ */ y(Le, { children: [
            /* @__PURE__ */ o(
              ec,
              {
                mainLinks: t,
                secondaryLinks: r,
                activePath: A,
                onLinkClick: O,
                logo: Go,
                title: n,
                onBrandClick: po,
                brandMenuOpen: ho,
                brandColor: fo,
                headerBackgroundColor: Kr,
                headerForegroundColor: Wt,
                activeAccentColor: P,
                activeBackgroundColor: Ue,
                groupArrowColor: Ae,
                groupAccentColor: T,
                activeForegroundColor: I,
                foregroundColor: Ne,
                surfaceBackgroundColor: Xr,
                flyoutSurfaceColor: Xe,
                collapsed: Ke,
                expandedWidth: rr,
                collapsedWidth: Ur,
                topContent: go(
                  Ke ? Gr : "full"
                ),
                submenuMode: We ? "flyout" : "inline",
                color: Se,
                hoverColor: Nt,
                avatarColor: P,
                showProfile: L,
                userName: G,
                userEmail: H,
                userRole: Y,
                userAvatar: w,
                showNotifications: we,
                notificationCount: W,
                onNotificationsClick: Ws ? Vo : Z,
                whatsNewCount: z,
                onProfileClick: ye,
                onAiUsageClick: ze,
                menuItems: R,
                onLogout: nn,
                theme: me,
                showThemeToggler: Je,
                onThemeToggle: Ot
              }
            ),
            (J == null ? void 0 : J.show) && !Ke && /* @__PURE__ */ o(Eo, { ...J })
          ] })
        ),
        s && !se && !Po && !xe && /* @__PURE__ */ o(
          fn,
          {
            variant: "permanent",
            sx: {
              width: Qe,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Qe,
                boxSizing: "border-box",
                bgcolor: K,
                borderRight: "none"
              },
              ...oe
            },
            children: /* @__PURE__ */ y(
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
                  /* @__PURE__ */ o(
                    V,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ o(
                        Co,
                        {
                          logo: Ds,
                          appName: n,
                          onClick: po,
                          menuOpen: ho,
                          color: C ?? Se,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  go("popover"),
                  /* @__PURE__ */ y(
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
                        /* @__PURE__ */ o(
                          Na,
                          {
                            mainLinks: t,
                            secondaryLinks: r,
                            activePath: A,
                            onLinkClick: O,
                            accentColor: P,
                            surfaceBackgroundColor: K,
                            railShowTitles: i
                          }
                        ),
                        (J == null ? void 0 : J.show) && /* @__PURE__ */ o(
                          Eo,
                          {
                            ...J
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ o(V, { sx: { py: 1.5 }, children: Yo(!0) })
                ]
              }
            )
          }
        ),
        s && se && /* @__PURE__ */ y(
          si,
          {
            anchor: Ee ? "bottom" : "left",
            open: Vr,
            onOpen: () => ut(!0),
            onClose: () => ut(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (N) => N.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Xe,
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
              /* @__PURE__ */ o(
                ur,
                {
                  mainLinks: t,
                  secondaryLinks: r,
                  activePath: A,
                  onLinkClick: (N) => {
                    O == null || O(N), ut(!1);
                  },
                  onLinkAction: () => ut(!1),
                  collapsed: !1,
                  expandedWidth: Ee ? "100%" : vc,
                  activeAccentColor: P,
                  activeBackgroundColor: Ue,
                  groupArrowColor: Ae,
                  groupAccentColor: T,
                  activeForegroundColor: I,
                  foregroundColor: Ne,
                  surfaceBackgroundColor: Xe,
                  topInsetPx: Ee ? 8 : 0,
                  topContent: Ee ? void 0 : go("full"),
                  footer: Ee ? void 0 : Yo(!1)
                }
              ),
              (J == null ? void 0 : J.show) && /* @__PURE__ */ o(Eo, { ...J })
            ]
          }
        ),
        Ee && zt && /* @__PURE__ */ o(
          za,
          {
            open: Yr,
            onClose: () => Xo(!1),
            search: zt
          }
        ),
        Ee && /* @__PURE__ */ o(
          Ba,
          {
            ...sn,
            pinnedLinks: h,
            activePath: A,
            onLinkClick: O,
            onMenuClick: s ? () => ut(!0) : void 0,
            menuOpen: Vr,
            onSearchClick: zt ? () => Xo(!0) : void 0,
            searchOpen: Yr,
            showAssistant: lt,
            onAssistantClick: dt,
            assistantActive: mt,
            showProfile: L,
            background: Xe,
            color: Se,
            activeColor: P,
            activeBackground: Nt
          }
        ),
        /* @__PURE__ */ o(
          V,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Js,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": se ? `${Ro}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Qe ? `calc(100% - ${Qe}px)` : "100%",
              mt: se ? `${Ro}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Ee && {
                pb: `calc(var(--lumora-content-padding) + ${qr})`
              },
              backgroundColor: K,
              ...Ge
            },
            children: e
          }
        ),
        $t && /* @__PURE__ */ o(
          Ca,
          {
            open: en,
            variant: tn,
            position: io,
            width: ao,
            sidebarWidthPx: Qe,
            bottomOffsetPx: lt && Lt === "floating" ? Ec : 0,
            fullScreen: se,
            fullScreenBottom: Ee ? qr : "0px",
            onClose: co,
            children: /* @__PURE__ */ o($t, {})
          }
        ),
        lt && Lt === "floating" && !Ee && /* @__PURE__ */ o(
          On,
          {
            variant: "floating",
            rightOffsetPx: Us,
            shortcutKeys: an,
            onClick: dt,
            active: mt,
            busy: Dt
          }
        ),
        we && B && /* @__PURE__ */ o(
          fn,
          {
            anchor: bt ? "left" : "right",
            open: Ft.open,
            onClose: Jr,
            slotProps: {
              backdrop: { invisible: !0 },
              paper: {
                sx: bt ? {
                  width: 380,
                  maxWidth: `calc(100vw - ${bt.left}px)`,
                  left: bt.left,
                  top: bt.top,
                  height: bt.height
                } : {
                  width: 380,
                  maxWidth: "100vw"
                }
              }
            },
            children: /* @__PURE__ */ o(
              B,
              {
                onClose: Jr,
                initialTab: Ft.tab
              },
              Ft.tab
            )
          }
        )
      ]
    }
  ) }) }) }) });
};
export {
  re as AUTH_ERROR_CODES,
  ee as AuthError,
  ur as CollapsibleSidebar,
  wl as FullBleedSection,
  ha as Kbd,
  ba as LumoraShellSkeleton,
  El as LumoraWrapper,
  ro as clearAuthTokens,
  El as default,
  Sl as getAuthErrorMessage,
  oo as getAuthTokens,
  wa as getCurrentUser,
  Wr as getDesignTokens,
  ya as isAuthenticated,
  hr as logAuthError,
  Rs as storeAuthTokens
};
