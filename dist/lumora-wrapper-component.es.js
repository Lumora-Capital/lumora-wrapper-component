import { jsx as o, jsxs as y, Fragment as De } from "react/jsx-runtime";
import oi from "@mui/icons-material/KeyboardArrowDownRounded";
import ri from "@mui/icons-material/KeyboardArrowUpRounded";
import ni from "@mui/icons-material/ChevronRightRounded";
import A from "@mui/material/Box";
import un from "@mui/material/Collapse";
import ot from "@mui/material/Divider";
import Oe from "@mui/material/IconButton";
import xo from "@mui/material/ListItemButton";
import $e from "@mui/material/ListItemIcon";
import je from "@mui/material/ListItemText";
import Ne from "@mui/material/Stack";
import Ve from "@mui/material/Tooltip";
import xe from "@mui/material/Typography";
import { useTheme as qe, createTheme as $o, alpha as He, ThemeProvider as Co } from "@mui/material/styles";
import * as d from "react";
import { useMemo as fn, useState as it, useCallback as Jo, useRef as bo, useEffect as Xt, useLayoutEffect as si } from "react";
import Ye from "@mui/material/ButtonBase";
import { keyframes as vr } from "@emotion/react";
import yr from "@mui/material/Fade";
import wr from "@mui/material/Popper";
import { useTheme as qn, CssBaseline as ir, GlobalStyles as ii, Box as Z, useMediaQuery as Zn, Stack as Kt, Skeleton as Be, Drawer as hn, SwipeableDrawer as ai } from "@mui/material";
import pn from "axios";
import ci from "@mui/material/Card";
import li from "@mui/material/CardContent";
import Jn from "@mui/material/Button";
import di from "@mui/icons-material/AutoAwesomeRounded";
import ui from "@mui/material/Grow";
import Sr from "@mui/material/Paper";
import fi from "@mui/material/Slide";
import hi from "@mui/material/ListSubheader";
import ut from "@mui/material/MenuItem";
import Er from "@mui/material/MenuList";
import Qn from "@mui/icons-material/MenuRounded";
import Rr from "@mui/icons-material/SearchRounded";
import es from "@mui/icons-material/LogoutRounded";
import ts from "@mui/icons-material/NotificationsNoneOutlined";
import pi from "@mui/icons-material/SettingsOutlined";
import mi from "@mui/material/Avatar";
import gi from "@mui/material/Menu";
import mn from "@mui/material/ToggleButton";
import xi from "@mui/material/ToggleButtonGroup";
import bi from "@mui/material/Drawer";
import vi from "@mui/material/AppBar";
import yi from "@mui/material/Toolbar";
import os from "@mui/material/Badge";
import wi from "@mui/icons-material/DarkModeOutlined";
import Si from "@mui/icons-material/LightModeOutlined";
import Ei from "@mui/icons-material/SettingsBrightnessOutlined";
import Ir from "@mui/material/Popover";
import Ri from "@mui/icons-material/CheckRounded";
const Ao = ({
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
  }, f = /* @__PURE__ */ y(De, { children: [
    t ? /* @__PURE__ */ o(
      xe,
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
    Ye,
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
      children: f
    }
  ) : /* @__PURE__ */ o(Ne, { direction: "row", "data-testid": i, sx: c, children: f });
}, Ro = ({ children: e, ...t }) => {
  const [r, n] = d.useState(!1), s = d.useRef(!1);
  return /* @__PURE__ */ o(
    Ve,
    {
      ...t,
      open: r,
      disableFocusListener: !0,
      onOpen: () => {
        s.current || n(!0);
      },
      onClose: () => n(!1),
      onClickCapture: () => {
        s.current = !0, n(!1);
      },
      onPointerLeave: () => {
        s.current = !1;
      },
      children: e
    }
  );
}, ar = !1, $t = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, At = (e) => {
  var t;
  return !!((t = e.subitems) != null && t.length);
}, Ct = (e, t) => e ? `${e}/${t.text}` : t.text, dt = (e, t) => {
  var r;
  return t ? e.path && t === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => dt(n, t))) ?? !1 : !1;
}, Xe = (e, t) => !!(t && e.path === t), _r = (e, t) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? t;
  return At(r) ? _r(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), cr = (e) => {
  const t = Mo(e);
  if (!t)
    return "#ffffff";
  const [r, n, s] = t.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Zt = (e) => {
  const t = Mo(e);
  if (!t)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = t;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, lr = (e, t) => {
  const r = Mo(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${t})` : e;
}, Mo = (e) => {
  let t = e.trim().replace(/^#/, "");
  if (t.length === 3 && (t = t.split("").map((n) => n + n).join("")), t.length !== 6 || /[^0-9a-fA-F]/.test(t))
    return null;
  const r = parseInt(t, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, rs = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Tr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Ii = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", _i = vr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Re = "@media (prefers-reduced-motion: reduce)", fe = 6, Cr = "9, 193, 174", ns = d.createContext(
  void 0
), Lo = d.createContext(
  void 0
), Ar = (e) => d.useContext(Lo) ?? e, ko = () => {
  const e = d.useContext(ns), t = e ? Mo(e) : null;
  return t ? t.join(", ") : Cr;
}, Ti = (e, t, r = Cr) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: t,
  boxShadow: `${Ii(e)}, 0 0 0 1px ${Tr(e)}`
}), Do = (e, t) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: t ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: Tr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${fe}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), Or = vr`
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
`, $r = vr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, ss = (e, t = Cr, r = `rgba(${t}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${t}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Oo = (e, t, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: lr(e, t ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${lr(e, 0.45)}`
}, Ci = (e, t) => {
  {
    const r = `inset 0 0 0 1px ${Tr(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${fe}px`,
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
}, Ai = 100, is = 80, Io = 56, jt = 72, Yt = 64, ve = 44, Jt = 24, No = 4, lt = 8, as = 1.4, cs = fe, ls = { xs: 2, md: "18px" }, ds = (e, t) => {
  const r = (n) => typeof n == "number" ? t.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, s]) => [n, r(s)])
  ) : r(e);
}, Fo = (e, t) => e === "flyout" && (t === "collapsible" || t === "panel"), Oi = (e, t, r) => e && Fo(t, r), us = ({
  showSidebar: e,
  isMobile: t,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: s = !1
}) => !e || t ? 0 : r === "rail-labeled" ? is : Fo(n, r) ? s ? 0 : Yt + 2 * lt : r === "collapsible" || r === "panel" ? jt : Ai, fs = (e, t) => e ?? (t ? "hsl(220, 30%, 7%)" : "#ffffff"), hs = (e, t) => e ?? (t ? "hsl(220, 35%, 9%)" : "#f2f9fc"), ps = { stiffness: 320, damping: 24 }, ms = { stiffness: 320, damping: 28 }, Mr = { stiffness: 520, damping: 20 }, Lr = { stiffness: 380, damping: 36 }, Wo = { stiffness: 260, damping: 28 }, $i = "cubic-bezier(0.32, 1.28, 0.52, 1)", Mi = 420, gn = 60, Li = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), xn = /* @__PURE__ */ new Map(), Ce = ({
  stiffness: e,
  damping: t,
  mass: r = 1
}) => {
  const n = `${e}/${t}/${r}`, s = xn.get(n);
  if (s)
    return s;
  if (!Li)
    return { easing: $i, duration: Mi };
  const i = 1 / 600;
  let a = 0, c = 0, f = 0, l = 1 / gn;
  const m = [0];
  for (; f < 3; ) {
    const g = (-e * (a - 1) - t * c) / r;
    if (c += g * i, a += c * i, f += i, f >= l && (m.push(a), l += 1 / gn, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const h = {
    easing: `linear(${m.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(f * 1e3)
  };
  return xn.set(n, h), h;
}, Qt = (e) => !!(e && typeof e.animate == "function"), Mt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, ki = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((t) => t.cancel());
}, Di = (e, t = 1.14) => {
  if (!Qt(e) || Mt())
    return;
  const r = Ce(Mr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${t})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, Ni = 1.6, gs = 110, eo = 110, Fi = 6, at = Ce(Lr), Wi = (e, t = gs) => e >= t ? 0 : (1 + Math.cos(Math.PI * e / t)) / 2, xs = (e, t) => {
  const { offsetWidth: r, offsetHeight: n } = e;
  if (!(r > 0 && n > 0))
    return 1 / 0;
  const s = t.getBoundingClientRect(), i = s.left + t.clientLeft, a = s.top + t.clientTop, c = e.getBoundingClientRect(), f = c.left + c.width / 2, l = c.top + c.height / 2, m = Math.min(
    f - r / 2 - i,
    i + t.clientWidth - (f + r / 2)
  ), h = Math.min(
    l - n / 2 - a,
    a + t.clientHeight - (l + n / 2)
  );
  return Math.min(1 + 2 * m / r, 1 + 2 * h / n);
}, bs = (e, {
  enabled: t,
  axis: r,
  itemSelector: n,
  glyphSelector: s,
  transition: i,
  maxScale: a = Ni,
  reach: c = gs,
  carrierSelector: f,
  spacing: l = 0,
  hoveredOnly: m = !1,
  boundsRef: h
}) => {
  const g = d.useRef(0), x = d.useRef(
    /* @__PURE__ */ new WeakMap()
  ), p = d.useRef(/* @__PURE__ */ new Set()), S = d.useRef(null), R = (O) => {
    var L;
    S.current !== O && ((L = S.current) == null || L.removeAttribute("data-dock-hovered"), O == null || O.setAttribute("data-dock-hovered", ""), S.current = O);
  }, T = d.useRef(/* @__PURE__ */ new Set()), v = i ? `, ${i}` : "", E = m ? `${at.duration}ms ${at.easing}` : `${eo}ms ease-out`, $ = (O) => f ? O.closest(f) : null, w = (O) => {
    var U;
    const [L = "0", b = "0"] = (((U = $(O)) == null ? void 0 : U.style.translate) ?? "").split(" ").filter(Boolean);
    return r === "x" ? parseFloat(L) || 0 : parseFloat(b) || 0;
  }, _ = (O) => {
    const L = O.getBoundingClientRect();
    return (r === "x" ? L.left + L.width / 2 : L.top + L.height / 2) - w(O);
  }, I = (O) => {
    const L = O.getBoundingClientRect();
    return Array.from(O.querySelectorAll(n)).filter((b) => {
      var J;
      const U = (J = b.parentElement) == null ? void 0 : J.closest(n);
      if (U && O.contains(U))
        return !1;
      const H = b.getBoundingClientRect(), oe = _(b), ie = r === "x" ? oe : H.left + H.width / 2, V = r === "x" ? H.top + H.height / 2 : oe;
      return H.width > 0 && ie >= L.left && ie <= L.right && V >= L.top && V <= L.bottom;
    }).map((b) => ({
      item: b,
      glyph: s ? b.querySelector(s) : b
    })).filter(
      (b) => b.glyph !== null
    );
  }, F = (O, L) => {
    if (L === O)
      return a;
    let b = x.current.get(L);
    if (b === void 0) {
      const oe = Number(L.style.scale) || 1, ie = L.getBoundingClientRect();
      b = { width: ie.width / oe, height: ie.height / oe }, x.current.set(L, b);
    }
    if (!(b.width > 0 && b.height > 0))
      return 1;
    const U = O.getBoundingClientRect(), H = Math.min(
      U.width / b.width,
      U.height / b.height
    );
    return Math.max(1, Math.min(H, a));
  }, q = (O) => {
    const L = h == null ? void 0 : h.current;
    return L != null && L.contains(O) ? xs(O, L) : 1 / 0;
  }, W = () => {
    var O, L, b, U;
    cancelAnimationFrame(g.current), p.current.forEach((H) => {
      H.style.transition = `scale ${at.duration}ms ${at.easing}${v}`, H.style.scale = "";
    }), p.current.clear(), R(null), T.current.forEach((H) => {
      H.style.transition = `translate ${at.duration}ms ${at.easing}`, H.style.translate = "", H.style.removeProperty("--dock-scale");
    }), T.current.clear(), (O = e.current) == null || O.style.setProperty(
      "--dock-scale-timing",
      `${at.duration}ms ${at.easing}`
    ), (L = e.current) == null || L.style.removeProperty("--dock-spread"), (b = e.current) == null || b.style.removeProperty("--dock-max-scale"), (U = e.current) == null || U.style.removeProperty("--dock-active-scale");
  }, G = (O, L, b) => {
    const U = r === "x" ? L : b, H = I(O).map(({ item: V, glyph: J }) => {
      const se = _(V), C = m ? V === S.current ? 1 : 0 : Wi(Math.abs(U - se), c), z = 1 + (Math.max(1, Math.min(F(V, J), q(J))) - 1) * C;
      J.style.transition = `scale ${E}${v}`, z > 1.001 ? (J.style.scale = z.toFixed(3), p.current.add(J)) : p.current.has(J) && (J.style.scale = "", p.current.delete(J));
      const P = r === "x" ? V.offsetWidth : V.offsetHeight, j = (z - 1) * P + 2 * l * C;
      return { item: V, centre: se, scale: z, growth: j };
    });
    O.style.setProperty("--dock-scale-timing", E), O.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...H.map(({ scale: V }) => V)).toFixed(3)
    );
    const oe = H.find(({ item: V }) => V.dataset.active === "true");
    if (O.style.setProperty(
      "--dock-active-scale",
      ((oe == null ? void 0 : oe.scale) ?? 1).toFixed(3)
    ), !f)
      return;
    const ie = H.reduce((V, { growth: J }) => V + J, 0);
    O.style.setProperty("--dock-spread", `${ie.toFixed(1)}px`), H.forEach(({ item: V, centre: J, scale: se, growth: C }) => {
      const k = $(V);
      if (!k)
        return;
      const z = H.reduce(
        (P, j) => j.centre < J ? P + j.growth : P,
        C / 2
      );
      k.style.transition = `translate ${E}`, Math.abs(z) > 0.1 || se > 1.001 ? (k.style.translate = r === "x" ? `${z.toFixed(1)}px 0` : `0 ${z.toFixed(1)}px`, k.style.setProperty("--dock-scale", se.toFixed(3)), T.current.add(k)) : T.current.has(k) && (k.style.translate = "", k.style.removeProperty("--dock-scale"), T.current.delete(k));
    });
  }, N = (O) => {
    if (O.pointerType && O.pointerType !== "mouse" || Mt())
      return;
    const L = O.currentTarget, { clientX: b, clientY: U } = O;
    cancelAnimationFrame(g.current), g.current = requestAnimationFrame(() => {
      const H = L.getBoundingClientRect(), oe = r === "x" ? U : b, [ie, V] = r === "x" ? [H.top, H.bottom] : [H.left, H.right];
      if (oe < ie || oe > V) {
        W();
        return;
      }
      if (m) {
        const J = r === "x" ? b : U, se = (z) => Math.abs(J - _(z));
        let C = null;
        I(L).forEach(({ item: z }) => {
          (!C || se(z) < se(C)) && (C = z);
        });
        const k = S.current;
        C && (!k || !L.contains(k) || se(C) + Fi < se(k)) && R(C);
      }
      G(L, b, U);
    });
  }, K = (O) => {
    const L = e.current;
    if (!t || !L || Mt())
      return;
    m && R(O);
    const b = O.getBoundingClientRect();
    G(L, b.left + b.width / 2, b.top + b.height / 2);
  };
  return d.useEffect(() => {
    t || W();
  }, [t]), d.useEffect(() => () => cancelAnimationFrame(g.current), []), {
    containerProps: t ? { onPointerMove: N, onPointerLeave: W, onScrollCapture: W } : {},
    swellOn: K,
    settle: W
  };
}, to = "data-rail-item", vs = `[${to}], button, [role="button"]`, Lt = d.createContext(!1), kr = () => {
  const e = d.useContext(Lt), t = qe(), r = d.useContext(Lo);
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
}, Ot = Ce(Lr), Dr = ({
  enabled: e,
  isDark: t,
  selector: r,
  size: n,
  radius: s,
  pinSelector: i,
  pinKey: a = null
}) => {
  const c = d.useRef(null), f = ko(), [l, m] = d.useState(null), h = d.useRef(null), g = d.useRef(null), x = (w, _) => {
    g.current = _;
    const I = _.getBoundingClientRect(), F = w.getBoundingClientRect(), q = n ?? I.width, W = n ?? I.height, G = {
      top: Math.round(I.top - F.top + (I.height - W) / 2),
      left: Math.round(I.left - F.left + (I.width - q) / 2),
      width: Math.round(q),
      height: Math.round(W)
    };
    m(
      (N) => N && N.visible && N.top === G.top && N.left === G.left && N.width === G.width && N.height === G.height ? N : { ...G, visible: !0, instant: !(N != null && N.visible) }
    );
  }, p = (w, _) => {
    var F;
    const I = (F = _ == null ? void 0 : _.closest) == null ? void 0 : F.call(_, r);
    return I && w.contains(I) ? I : null;
  }, S = (w) => {
    if (!e)
      return;
    const _ = p(w.currentTarget, w.target);
    _ && x(w.currentTarget, _);
  }, R = (w) => {
    if (!e)
      return;
    const _ = p(w.currentTarget, w.target);
    _ && w.target.matches(":focus-visible") && x(w.currentTarget, _);
  }, T = () => {
    var I;
    const w = (I = c.current) == null ? void 0 : I.parentElement, _ = i && (w == null ? void 0 : w.querySelector(i));
    return w && _ ? { container: w, item: _ } : null;
  }, v = () => {
    const w = T();
    if (w) {
      x(w.container, w.item);
      return;
    }
    g.current = null, m((_) => _ != null && _.visible ? { ..._, visible: !1 } : _);
  };
  d.useEffect(() => {
    var _, I;
    if (!e)
      return;
    const w = T();
    w ? x(w.container, w.item) : (I = (_ = c.current) == null ? void 0 : _.parentElement) != null && I.matches(":hover") || v();
  }, [e, a]);
  const E = (w) => {
    const _ = w.relatedTarget;
    (!_ || !w.currentTarget.contains(_)) && (w.currentTarget.matches(":hover") || v());
  };
  return d.useEffect(() => {
    const w = c.current;
    if (!(l != null && l.visible)) {
      h.current = null;
      return;
    }
    const _ = h.current;
    if (h.current = l.top, !Qt(w) || Mt() || _ === null || l.instant)
      return;
    const I = Math.min(Math.abs(l.top - _) / 600, 0.08);
    I && w.animate(
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
      { duration: Ot.duration, easing: "ease-out" }
    );
  }, [l == null ? void 0 : l.top, l == null ? void 0 : l.visible, l == null ? void 0 : l.instant]), {
    lens: e && l ? /* @__PURE__ */ o(
      A,
      {
        ref: c,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...ss(t, f),
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
          transition: l.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${eo}ms ease-out)` : `translate ${Ot.duration}ms ${Ot.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${eo}ms ease-out)`,
          [Re]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: S,
      onMouseLeave: v,
      onFocus: R,
      onBlur: E,
      onScrollCapture: v
    } : {}
  };
}, Pi = (e, t, r = null) => {
  const n = Dr({
    enabled: e,
    isDark: t,
    selector: vs,
    // The rail's buttons exactly, so the hover sits on the item
    size: ve,
    radius: fe,
    pinSelector: `[${to}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Bi = (e, t) => {
  let r = 0, n = 0, s = e;
  for (; s && s !== t; ) {
    r += s.offsetTop, n += s.offsetLeft;
    const c = s.offsetParent;
    for (let f = s.parentElement; f && f !== t && (r -= f.scrollTop, n -= f.scrollLeft, f !== c); f = f.parentElement)
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
}, bn = ({
  enabled: e,
  isDark: t,
  color: r,
  containerRef: n
}) => {
  const s = d.useRef(null), [i, a] = d.useState(null), c = d.useRef(null), f = d.useCallback(
    (m) => {
      const h = n.current;
      if (!e || !h)
        return;
      const g = h.querySelector(
        `[${to}][data-active="true"]`
      );
      if (!g) {
        a(
          (p) => p != null && p.visible ? { ...p, visible: !1 } : p
        );
        return;
      }
      const x = Bi(g, h);
      a(
        (p) => p && p.visible && p.top === x.top && p.left === x.left && p.width === x.width && p.height === x.height ? p : {
          ...x,
          visible: !0,
          instant: m || !(p != null && p.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    f(!1);
  }), d.useEffect(() => {
    const m = n.current;
    if (!e || !m)
      return;
    let h = 0;
    const g = () => {
      cancelAnimationFrame(h), h = requestAnimationFrame(() => f(!1));
    }, x = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => f(!0));
    x == null || x.observe(m);
    const p = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return p == null || p.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(h), x == null || x.disconnect(), p == null || p.disconnect();
    };
  }, [e, n, f]), d.useEffect(() => {
    const m = s.current;
    if (!(i != null && i.visible)) {
      c.current = null;
      return;
    }
    const h = c.current;
    if (c.current = i.top, h === null || i.instant || !Qt(m) || Mt())
      return;
    const g = Math.min(Math.abs(i.top - h) / 600, 0.08);
    g && m.animate(
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
      { duration: Ot.duration, easing: "ease-out" }
    );
  }, [i == null ? void 0 : i.top, i == null ? void 0 : i.visible, i == null ? void 0 : i.instant]), { glass: e && i ? /* @__PURE__ */ o(
    A,
    {
      ref: s,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": i.visible ? "true" : "false",
      sx: {
        ...Oo(r, t),
        borderRadius: `${fe}px`,
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
        transition: i.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${eo}ms ease-out)` : `translate ${Ot.duration}ms ${Ot.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${eo}ms ease-out)`,
        [Re]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Te = 52, Qo = 36, zi = 2, Hi = 10, Gi = Te / 2, er = "[data-flyout-tile]", Nr = 4, Fr = 32, dr = Fr + Nr, Ui = 104, Ht = 24, ys = "background 160ms ease, color 160ms ease, transform 120ms ease", ur = 10, ws = 10, vn = ws + 2, Xi = 18, yn = 1.08, Ki = (e) => {
  for (let t = e.parentElement; t; t = t.parentElement) {
    const { overflowY: r } = getComputedStyle(t);
    if (r === "auto" || r === "scroll")
      return t;
  }
  return null;
}, ji = (e) => {
  const t = Ki(e);
  if (!t)
    return yn;
  const r = xs(e, t);
  return Math.min(yn, r / Math.min(r, as));
}, Vi = 1190, Yi = 1195, wn = 120, Sn = Ce(ps), Ke = Ce(Lr), En = Ce(Wo), Rn = 8192, qi = ({ left: e, top: t, width: r, height: n, radius: s }) => {
  const i = Math.min(s, r / 2, n / 2), a = e + r, c = t + n, f = `A ${i} ${i} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${Rn} V ${Rn} H 0 Z M ${e + i} ${t} H ${a - i} ${f} ${a} ${t + i} V ${c - i} ${f} ${a - i} ${c} H ${e + i} ${f} ${e} ${c - i} V ${t + i} ${f} ${e + i} ${t} Z')`;
}, Zi = ({
  group: e,
  groupKey: t,
  anchor: r,
  railEdge: n,
  railShape: s,
  activePath: i,
  focusFirst: a = !1,
  onNavigate: c,
  onClose: f,
  panelProps: l,
  accentColor: m,
  activeBackgroundColor: h,
  activeForegroundColor: g,
  solidSurface: x
}) => {
  const p = qe(), S = p.palette.mode === "dark", R = !!(e && r), T = d.useRef(null);
  e && t && (T.current = { group: e, key: t });
  const v = T.current, E = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const C = r.getBoundingClientRect();
      return {
        x: n,
        y: C.top,
        left: n,
        right: n,
        top: C.top,
        bottom: C.bottom,
        width: 0,
        height: C.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), $ = d.useRef(E);
  E && ($.current = E), d.useEffect(() => {
    if (!r)
      return;
    const C = ji(r);
    C > 1.001 && Di(r, C);
  }, [r]);
  const [w, _] = d.useState(!1);
  d.useEffect(() => {
    if (!R) {
      _(!1);
      return;
    }
    let C = 0;
    const k = requestAnimationFrame(() => {
      C = requestAnimationFrame(() => _(!0));
    });
    return () => {
      cancelAnimationFrame(k), cancelAnimationFrame(C);
    };
  }, [R]);
  const I = d.useMemo(
    () => v ? _r(v.group.subitems, v.group.icon) : [],
    [v]
  ), F = d.useRef(null), q = bs(F, {
    enabled: R,
    axis: "x",
    itemSelector: er,
    transition: ys,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: zi,
    // The neighbours make room as it grows, and a little more
    carrierSelector: '[role="menuitem"]',
    spacing: Hi,
    // Only the tile under the pointer swells; the rest keep their size
    hoveredOnly: !0
  }), W = d.useRef(void 0), G = d.useCallback((C) => {
    var j;
    (j = W.current) == null || j.call(W), W.current = void 0;
    const k = C == null ? void 0 : C.parentElement;
    if (!C || !k || typeof MutationObserver > "u")
      return;
    const z = () => {
      const be = C.offsetLeft - C.offsetWidth / 2, Fe = be + C.offsetWidth;
      let we = 0;
      const ee = (he, re, Ie) => {
        he < Fe && he + re > be && (we = Math.max(we, -Ie - vn));
      };
      k.querySelectorAll(er).forEach((he) => {
        const re = parseFloat(he.style.scale) || 1, Ie = (re - 1) * Te / 2, _e = he.closest('[role="menuitem"]'), ge = parseFloat((_e == null ? void 0 : _e.style.translate) ?? "") || 0;
        ee(
          he.offsetLeft + ge - Ie,
          re * Te,
          he.offsetTop - Ie
        );
        const ae = _e == null ? void 0 : _e.querySelector("[data-flyout-name]"), ce = ae == null ? void 0 : ae.parentElement;
        ae && ce && he.dataset.flyoutNameSide === "above" && ee(
          ce.offsetLeft + ge,
          ae.offsetWidth,
          ce.offsetTop + ae.offsetTop - Ie
        );
      });
      const Ze = we > 0 ? `0 ${(-we).toFixed(1)}px` : "";
      C.style.translate !== Ze && (C.style.translate = Ze);
    }, P = new MutationObserver(z);
    P.observe(k, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), W.current = () => P.disconnect();
  }, []), N = d.useRef([]), [K, O] = d.useState([]);
  d.useLayoutEffect(() => {
    const C = () => {
      const z = I.map(
        (P, j) => {
          var be;
          return ((be = N.current[j]) == null ? void 0 : be.offsetWidth) ?? 0;
        }
      );
      O(
        (P) => P.length === z.length && P.every((j, be) => j === z[be]) ? P : z
      );
    };
    if (C(), typeof ResizeObserver > "u")
      return;
    const k = new ResizeObserver(C);
    return N.current.slice(0, I.length).forEach((z) => z && k.observe(z)), () => k.disconnect();
  }, [I]);
  const L = Qi(K, I.length), b = d.useRef([]), U = I.findIndex(
    ({ sub: C }) => Xe(C, i)
  ), [H, oe] = d.useState(0);
  d.useEffect(() => {
    oe(Math.max(U, 0));
  }, [t]), d.useEffect(() => {
    if (!R || !a)
      return;
    const C = setTimeout(() => {
      var k;
      return (k = b.current[0]) == null ? void 0 : k.focus();
    });
    return () => clearTimeout(C);
  }, [R, a, t]);
  const ie = (C) => {
    var z;
    const k = Math.max(0, Math.min(C, I.length - 1));
    oe(k), (z = b.current[k]) == null || z.focus();
  }, V = (C, k) => {
    var z;
    switch (C.key) {
      case "ArrowRight":
        ie(k + 1);
        break;
      case "ArrowLeft":
        k === 0 ? f(!0) : ie(k - 1);
        break;
      case " ":
        (z = b.current[k]) == null || z.click();
        break;
      case "Home":
        ie(0);
        break;
      case "End":
        ie(I.length - 1);
        break;
      case "Tab":
        f(!0);
        break;
      default:
        return;
    }
    C.preventDefault();
  }, J = p.palette.text.primary, se = S ? p.palette.text.primary : m;
  return /* @__PURE__ */ y(De, { children: [
    /* @__PURE__ */ o(yr, { in: R, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ o(
      A,
      {
        "data-testid": "sidebar-flyout-scrim",
        "data-flyout-scrim": "",
        "aria-hidden": !0,
        onClick: () => f(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: s ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...s ? { clipPath: qi(s) } : {},
          zIndex: Vi,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: S ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)"
        }
      }
    ) }),
    /* @__PURE__ */ o(
      wr,
      {
        open: R,
        anchorEl: E ?? $.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Both rows centred on the rail icon, a gap from the rail
          {
            name: "offset",
            options: { offset: [0, ur] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Yi,
          transition: w ? `transform ${Ke.duration}ms ${Ke.easing}` : "none",
          [Re]: { transition: "none" }
        },
        children: ({ TransitionProps: C }) => /* @__PURE__ */ o(
          Ji,
          {
            in: (C == null ? void 0 : C.in) ?? R,
            onEnter: C == null ? void 0 : C.onEnter,
            onExited: C == null ? void 0 : C.onExited,
            panelProps: l,
            groupText: v == null ? void 0 : v.group.text,
            children: v ? /* @__PURE__ */ y(
              A,
              {
                ref: F,
                role: "menu",
                "aria-label": v.group.text,
                ...q.containerProps,
                onBlur: (k) => {
                  k.currentTarget.contains(
                    k.relatedTarget
                  ) || q.settle();
                },
                sx: {
                  position: "relative",
                  width: L.width,
                  height: dr + Te + Nr + Fr,
                  // The panel stretches as the dock pushes
                  // the pages along, as the Dock's shelf does
                  mr: "var(--dock-spread, 0px)",
                  // In step with the pages it makes room for
                  transition: `margin-right var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`,
                  [Re]: { transition: "none" }
                },
                children: [
                  /* @__PURE__ */ o(
                    A,
                    {
                      component: "span",
                      ref: G,
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
                        mb: `${vn}px`,
                        transition: `translate var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`,
                        [Re]: {
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
                      children: v.group.text
                    }
                  ),
                  I.map(({ sub: k, icon: z }, P) => /* @__PURE__ */ o(
                    Es,
                    {
                      ref: (j) => {
                        b.current[P] = j;
                      },
                      nameRef: (j) => {
                        N.current[P] = j;
                      },
                      tileLeft: L.tiles[P],
                      nameLeft: L.names[P],
                      sub: k,
                      icon: z,
                      index: P,
                      active: Xe(
                        k,
                        i
                      ),
                      tabIndex: P === H ? 0 : -1,
                      onClick: (j) => {
                        $t(j) && (j.preventDefault(), c(k.path), f());
                      },
                      onKeyDown: (j) => V(j, P),
                      onFocus: (j) => {
                        oe(P);
                        const be = j.currentTarget.querySelector(
                          er
                        );
                        be && j.currentTarget.matches(
                          ":focus-visible"
                        ) && q.swellOn(be);
                      },
                      accentColor: m,
                      activeBackgroundColor: h,
                      activeForegroundColor: g,
                      labelColor: J,
                      iconColor: se,
                      surface: x,
                      isDark: S
                    },
                    k.path
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
}, Ji = ({
  in: e,
  onEnter: t,
  onExited: r,
  panelProps: n,
  groupText: s,
  children: i
}) => {
  const a = d.useRef(null), c = (l) => {
    a.current = l;
    const { ref: m } = n;
    typeof m == "function" ? m(l) : m && (m.current = l);
  }, f = d.useRef(e);
  return f.current = e, d.useLayoutEffect(() => {
    const l = a.current;
    if (ki(l), e) {
      t == null || t(), Qt(l) && !Mt() && l.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: En.duration, easing: En.easing }
      );
      return;
    }
    if (!Qt(l)) {
      r == null || r();
      return;
    }
    let m = !1;
    const h = () => {
      !m && !f.current && (m = !0, r == null || r());
    }, g = setTimeout(h, wn + 100);
    return l.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: wn,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(h, h), () => clearTimeout(g);
  }, [e]), /* @__PURE__ */ o(
    A,
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
        p: `${ws}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -ur - 2,
          width: ur + 2
        }
      },
      children: i
    }
  );
}, Ss = (e) => e % 2 === 1, Qi = (e, t) => {
  const r = [], n = [];
  let s = -Ht, i = -Ht, a = -Ht;
  for (let c = 0; c < t; c += 1) {
    const f = e[c] || Te, l = Ss(c), m = l ? i : a, h = Math.max(
      s + Ht + Te / 2,
      m + Ht + f / 2
    );
    s = h + Te / 2, l ? i = h + f / 2 : a = h + f / 2, r.push(Math.round(h - Te / 2)), n.push(Math.round(h - f / 2));
  }
  return {
    tiles: r,
    names: n,
    width: Math.round(Math.max(s, i, a, 0))
  };
}, Es = d.forwardRef(
  ({
    nameRef: e,
    tileLeft: t,
    nameLeft: r,
    sub: n,
    icon: s,
    index: i,
    active: a,
    tabIndex: c,
    onClick: f,
    onKeyDown: l,
    onFocus: m,
    accentColor: h,
    activeBackgroundColor: g,
    activeForegroundColor: x,
    labelColor: p,
    iconColor: S,
    surface: R,
    isDark: T
  }, v) => {
    const E = Ss(i), $ = Do(T, R), w = {
      animation: `${_i} ${Sn.duration}ms ${Sn.easing} both`,
      animationDelay: `${i * Xi}ms`,
      [Re]: { animation: "none" }
    }, _ = {
      background: g ?? h,
      color: x,
      "& .MuiSvgIcon-root": { color: x }
    }, I = {
      background: `color-mix(in srgb, ${h} ${T ? 20 : 12}%, ${R})`
    }, F = T ? $.color : h, q = {
      "& [data-flyout-tile]": a ? {} : I,
      "& [data-flyout-name]": { color: F, fontWeight: 600 }
    }, W = {
      ...$,
      border: "none",
      // Lifted a little more than a resting label: they float over
      // the page
      boxShadow: T ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)"
    };
    return /* @__PURE__ */ y(
      Ye,
      {
        ref: v,
        component: "a",
        href: n.path,
        role: "menuitem",
        tabIndex: c,
        "aria-current": a ? "page" : void 0,
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": a ? "true" : "false",
        onClick: f,
        onKeyDown: l,
        onFocus: m,
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
          color: p,
          textDecoration: "none",
          // Lit with the swell (the tile nearest the pointer, which
          // may not be the one under it as the last shrinks away);
          // by a plain hover only while nothing swells (reduced motion)
          "&:has([data-dock-hovered])": q,
          '[role="menu"]:not(:has([data-dock-hovered])) &:hover': q,
          "&.Mui-focusVisible": {
            ...q,
            "& [data-flyout-tile]": {
              ...a ? {} : I,
              outline: "2px solid",
              outlineColor: h,
              outlineOffset: 2
            }
          },
          "&:active [data-flyout-tile]": { transform: "scale(0.94)" },
          [Re]: {
            "&:active [data-flyout-tile]": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ o(
            A,
            {
              "data-flyout-bridge": "",
              "aria-hidden": !0,
              sx: {
                left: t,
                top: 0,
                width: Te,
                height: "100%"
              }
            }
          ),
          /* @__PURE__ */ o(
            A,
            {
              "data-flyout-tile": "",
              "data-flyout-name-side": E ? "above" : "below",
              sx: {
                ...W,
                left: t,
                top: dr,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: Te,
                height: Te,
                p: 0,
                borderRadius: `${Gi}px`,
                // Grows about its centre, so the row stays level; its
                // name moves aside to clear it (see the name's slot)
                transformOrigin: "center",
                transition: `scale ${Ke.duration}ms ${Ke.easing}, ${ys}`,
                "& .MuiSvgIcon-root": {
                  fontSize: Qo,
                  color: S,
                  transition: "color 160ms ease"
                },
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                '& [role="img"], & [role="img"] > img': {
                  width: Qo,
                  height: Qo
                },
                ...a ? _ : {},
                ...w
              },
              children: s
            }
          ),
          /* @__PURE__ */ o(
            A,
            {
              "data-flyout-slot": "",
              sx: {
                left: r,
                top: E ? 0 : dr + Te + Nr,
                height: Fr,
                display: "flex",
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: E ? "flex-end" : "flex-start",
                // Pushed away from its tile by as much as the tile
                // grows towards it (`--dock-scale`, on the page)
                translate: `0 calc((var(--dock-scale, 1) - 1) * ${E ? -Te / 2 : Te / 2}px)`,
                transition: `translate var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`,
                [Re]: { transition: "none" }
              },
              children: /* @__PURE__ */ o(
                A,
                {
                  component: "span",
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": n.text,
                  sx: {
                    // No card of its own: text on the panel
                    color: $.color,
                    px: 1,
                    py: 0,
                    fontSize: "0.75rem",
                    lineHeight: "16px",
                    // A long name wraps, split evenly, so it stays as
                    // compact as its tile; never cut short
                    maxWidth: Ui,
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
                    ...w
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
Es.displayName = "FlyoutTile";
const ea = 50, ta = 250, oa = (e) => {
  const [t, r] = d.useState(null), n = d.useRef(t);
  n.current = t;
  const s = d.useRef(/* @__PURE__ */ new Map()), i = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), f = () => {
    clearTimeout(a.current), a.current = void 0;
  }, l = () => {
    clearTimeout(c.current), c.current = void 0;
  }, m = (T, v, E = !1) => {
    f(), l(), r({ key: T, pinned: v, focusFirst: E });
  }, h = d.useCallback((T = !1) => {
    var E, $;
    f(), l();
    const v = (E = n.current) == null ? void 0 : E.key;
    r(null), T && v && (($ = s.current.get(v)) == null || $.focus());
  }, []), g = () => {
    f(), !(!n.current || n.current.pinned) && (l(), c.current = setTimeout(() => h(), ta));
  };
  d.useEffect(() => {
    e || h();
  }, [e, h]), d.useEffect(
    () => () => {
      f(), l();
    },
    []
  );
  const x = t !== null;
  return d.useEffect(() => {
    if (!x)
      return;
    const T = ($) => {
      var _;
      const w = $;
      return w ? (_ = i.current) != null && _.contains(w) ? !0 : [...s.current.values()].some((I) => I.contains(w)) : !1;
    }, v = ($) => {
      T($.target) || h();
    }, E = ($) => {
      var w;
      $.key === "Escape" && h(
        !!((w = i.current) != null && w.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", E), () => {
      document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", E);
    };
  }, [x, h]), {
    state: t,
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
          v.key !== T && m(T, v.pinned);
          return;
        }
        f(), a.current = setTimeout(
          () => m(T, !1),
          ea
        );
      },
      onMouseLeave: g,
      onClick: (v) => {
        var E;
        if (v.detail === 0) {
          m(T, !0, !0);
          return;
        }
        ((E = n.current) == null ? void 0 : E.key) !== T && m(T, !1);
      },
      onKeyDown: (v) => {
        v.key === "ArrowRight" && (v.preventDefault(), m(T, !0, !0));
      }
    }),
    flyoutProps: {
      ref: i,
      onMouseEnter: l,
      onMouseLeave: g
    },
    onRailLeafEnter: () => {
      f(), n.current && !n.current.pinned && h();
    },
    getTrigger: (T) => s.current.get(T) ?? null
  };
}, ra = 264, na = 72, In = 64, vo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, sa = 16, ia = 14, aa = 4, ca = 2.5, _n = "0.7rem", Tn = 22, yo = Ce(Mr), vt = ({ text: e, variant: t = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
  const i = d.useRef(null), [a, c] = d.useState(!1), f = d.useCallback(() => {
    const l = i.current;
    l && c(l.scrollWidth > l.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    f();
  }, [f, e]), d.useEffect(() => {
    const l = i.current;
    if (!l)
      return;
    const m = new ResizeObserver(() => f());
    return m.observe(l), () => m.disconnect();
  }, [f]), /* @__PURE__ */ o(
    Ve,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ o(
        xe,
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
}, la = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, da = 4, ua = (e) => Math.max(0, Math.min(da, qt - e)), fa = ({
  open: e,
  size: t = sa
}) => e ? /* @__PURE__ */ o(ri, { sx: { fontSize: t, opacity: 0.75 } }) : /* @__PURE__ */ o(oi, { sx: { fontSize: t, opacity: 0.75 } }), Cn = ({ open: e }) => /* @__PURE__ */ o(
  ni,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), wo = 600, ct = `${No}px`, qt = (Yt - ve) / 2, ha = (e) => {
  const t = Math.max(0, e - qt);
  return {
    pl: `${Math.max(0, qt - t)}px`,
    pr: `${Math.max(0, qt - e)}px`
  };
};
function pa(e, t) {
  const [r, n] = d.useState(0);
  return d.useLayoutEffect(() => {
    const s = e.current;
    if (!t || !s) {
      n(0);
      return;
    }
    const i = () => {
      const c = getComputedStyle(s), f = parseFloat(c.borderLeftWidth) + parseFloat(c.borderRightWidth);
      n(Math.max(0, s.offsetWidth - s.clientWidth - f));
    };
    if (i(), typeof ResizeObserver > "u")
      return;
    const a = new ResizeObserver(i);
    return a.observe(s), s.firstElementChild && a.observe(s.firstElementChild), () => a.disconnect();
  }, [e, t]), r;
}
function ma(e) {
  const [t, r] = d.useState(!1);
  return d.useLayoutEffect(() => {
    const n = e.current, s = n == null ? void 0 : n.firstElementChild;
    if (!n || !s)
      return;
    const i = () => {
      const c = getComputedStyle(n), f = s.offsetHeight + parseFloat(c.paddingTop) + parseFloat(c.paddingBottom);
      r(f > n.clientHeight + 0.5);
    };
    if (i(), typeof ResizeObserver > "u")
      return;
    const a = new ResizeObserver(i);
    return a.observe(n), a.observe(s), () => a.disconnect();
  }, [e]), t;
}
const So = 8;
function ga(e, t, r) {
  d.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const s = (f) => {
      const l = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((x) => x.offsetHeight > 0).pop();
      if (!l)
        return;
      const m = n.getBoundingClientRect(), h = l.getBoundingClientRect();
      let g = 0;
      h.top < m.top + So ? g = h.top - m.top - So : h.bottom > m.bottom - So && (g = h.bottom - m.bottom + So), g !== 0 && n.scrollBy({ top: g, behavior: f });
    }, i = requestAnimationFrame(() => s("smooth")), a = window.setTimeout(() => s("smooth"), 350), c = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return c == null || c.observe(n), () => {
      cancelAnimationFrame(i), window.clearTimeout(a), c == null || c.disconnect();
    };
  }, [e, t, r]);
}
const fr = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: s,
  logo: i,
  title: a,
  onBrandClick: c,
  brandMenuOpen: f,
  showHeaderBar: l = !1,
  headerBackgroundColor: m,
  headerForegroundColor: h,
  brandColor: g,
  activeAccentColor: x = "#01584f",
  activeBackgroundColor: p,
  groupArrowColor: S,
  groupAccentColor: R,
  activeForegroundColor: T,
  foregroundColor: v,
  surfaceBackgroundColor: E,
  flyoutSurfaceColor: $,
  collapsed: w = !1,
  expandedWidth: _ = ra,
  collapsedWidth: I = na,
  showLabels: F = !1,
  topInsetPx: q = 0,
  topContent: W,
  footer: G,
  submenuMode: N = "inline"
}) => {
  var Me;
  const K = qe(), O = K.palette.mode === "dark", L = d.useContext(Lo), b = N === "flyout" && w && !F, U = oa(b), H = d.useRef(null), oe = d.useRef(null), ie = d.useRef(null), V = d.useRef(null);
  ga(V, r, w);
  const J = pa(V, b), se = ma(V), C = Pi(b, O, ((Me = U.state) == null ? void 0 : Me.key) ?? null), k = bs(H, {
    enabled: b,
    axis: "y",
    itemSelector: vs,
    maxScale: as,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: ve + No,
    // Only 4px of padding at the scroller's ends: the first and last
    // buttons swell less, or the last would scroll the rail
    boundsRef: V,
    transition: `transform ${yo.duration}ms ${yo.easing}, background-color 160ms ease`
  }), z = {
    ...C.containerProps,
    ...k.containerProps,
    ...b ? {
      onScrollCapture: () => {
        var u, M;
        (M = (u = C.containerProps).onScrollCapture) == null || M.call(u), k.settle();
      }
    } : {}
  }, P = p ?? x, j = bn({
    enabled: b,
    isDark: O,
    color: P,
    containerRef: oe
  }), be = bn({
    enabled: b,
    isDark: O,
    color: P,
    containerRef: ie
  }), Fe = d.useMemo(
    () => e.filter((u) => u.aboveSearch),
    [e]
  ), we = d.useMemo(
    () => e.filter((u) => !u.aboveSearch),
    [e]
  ), { close: ee } = U;
  d.useEffect(() => {
    ee();
  }, [r, ee]);
  const [Ze, he] = d.useState(
    {}
  ), re = T ?? cr(P), Ie = {
    bgcolor: P,
    color: re,
    "& .MuiListItemIcon-root": { color: re }
  }, _e = {
    bgcolor: P,
    color: re,
    borderRadius: "8px"
  }, ge = R ?? Zt(x), ae = E ?? (O ? K.palette.background.paper : "#ffffff"), ce = v ?? (O ? "text.primary" : x), We = m ?? ae, Se = h ?? (m ? cr(We) : v ?? (O ? K.palette.text.primary : x)), so = Zt(Se), ft = (u) => {
    n == null || n(u);
  }, yt = (u) => u ? {
    component: "a",
    href: u,
    onClick: (M) => {
      $t(M) && (M.preventDefault(), ft(u));
    }
  } : {}, ht = (u, M) => {
    he((Y) => ({ ...Y, [u]: !M }));
  }, pt = (u, M) => Ze[M] ?? dt(u, r), wt = (u, M, Y) => ({
    color: u ? re : ce,
    bgcolor: u ? P : "transparent",
    "& .MuiListItemIcon-root": {
      color: u ? re : ce,
      minWidth: Y
    },
    "&:hover": u || F ? Ie : { bgcolor: M }
  }), io = {
    "&.Mui-selected": {
      bgcolor: P
    },
    "&.Mui-selected:hover": Ie
  }, ao = (u) => {
    const M = Xe(u, r), Y = /* @__PURE__ */ y(
      xo,
      {
        disabled: !u.path,
        selected: M,
        ...yt(u.path),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": M ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...u.action && { pr: 6 },
          ...u.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...wt(
            M,
            ge,
            u.subtitle ? 48 : 36
          ),
          ...io
        },
        children: [
          /* @__PURE__ */ o($e, { children: u.icon }),
          /* @__PURE__ */ o(
            je,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ o(
                vt,
                {
                  text: u.text,
                  fontWeight: wo
                }
              ),
              secondary: u.subtitle ? /* @__PURE__ */ o(
                A,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ o(
                    vt,
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
      return Y;
    const { action: B } = u;
    return /* @__PURE__ */ y(A, { sx: { position: "relative" }, children: [
      Y,
      /* @__PURE__ */ o(Ro, { title: B.label, placement: "right", arrow: !0, children: /* @__PURE__ */ o(
        Oe,
        {
          "aria-label": B.label,
          "data-testid": `sidebar-action-${u.text}`,
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
            borderColor: M ? "rgba(255, 255, 255, 0.35)" : ge,
            color: M ? re : ce,
            "&:hover": {
              bgcolor: M ? "rgba(255, 255, 255, 0.15)" : ge
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: M ? re : ce,
              outlineOffset: 1
            }
          },
          children: B.icon
        }
      ) })
    ] }, u.text);
  }, Po = (u) => {
    const M = dt(u, r), Y = Xe(u, r), B = Ct("", u), X = pt(u, B);
    return /* @__PURE__ */ y(
      A,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: M ? ge : "transparent"
        },
        children: [
          /* @__PURE__ */ y(
            xo,
            {
              onClick: () => ht(B, X),
              "data-testid": `sidebar-item-${u.text}`,
              "data-active": Y ? "true" : "false",
              "aria-expanded": X,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...wt(Y, ge, 36)
              },
              children: [
                /* @__PURE__ */ o($e, { children: u.icon }),
                /* @__PURE__ */ o(
                  je,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ o(
                      vt,
                      {
                        text: u.text,
                        fontWeight: wo
                      }
                    )
                  }
                ),
                /* @__PURE__ */ o(Cn, { open: X })
              ]
            }
          ),
          /* @__PURE__ */ o(un, { in: X, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ o(
            A,
            {
              "data-testid": `sidebar-children-${u.text}`,
              sx: { pb: 0.5 },
              children: u.subitems.map(
                (le) => rt(le, B, 1)
              )
            }
          ) })
        ]
      },
      u.text
    );
  }, rt = (u, M, Y) => {
    const B = Ct(M, u), X = aa + (Y - 1) * ca;
    if (At(u)) {
      const de = dt(u, r), me = Xe(u, r), ne = pt(u, B);
      return /* @__PURE__ */ y(A, { "data-testid": `sidebar-group-${u.text}`, children: [
        /* @__PURE__ */ y(
          xo,
          {
            onClick: () => ht(B, ne),
            "data-testid": `sidebar-subitem-${u.text}`,
            "data-active": de ? "true" : "false",
            "aria-expanded": ne,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: X,
              ...wt(me, "action.hover", 32)
            },
            children: [
              u.icon ? /* @__PURE__ */ o($e, { children: u.icon }) : null,
              /* @__PURE__ */ o(
                je,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ o(
                    vt,
                    {
                      text: u.text,
                      fontWeight: wo
                    }
                  )
                }
              ),
              /* @__PURE__ */ o(Cn, { open: ne })
            ]
          }
        ),
        /* @__PURE__ */ o(un, { in: ne, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ o(A, { "data-testid": `sidebar-children-${u.text}`, children: u.subitems.map(
          (xt) => rt(xt, B, Y + 1)
        ) }) })
      ] }, B);
    }
    const le = Xe(u, r);
    return /* @__PURE__ */ y(
      xo,
      {
        selected: le,
        disabled: !u.path,
        ...yt(u.path),
        "data-testid": `sidebar-subitem-${u.text}`,
        "data-active": le ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: X,
          ...wt(le, "action.hover", 32),
          ...io
        },
        children: [
          u.icon ? /* @__PURE__ */ o($e, { children: u.icon }) : null,
          /* @__PURE__ */ o(
            je,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ o(
                vt,
                {
                  text: u.text,
                  fontWeight: wo
                }
              )
            }
          )
        ]
      },
      B
    );
  }, St = (u, M, Y, B, X, le) => {
    const de = !X, me = /* @__PURE__ */ y(
      Oe,
      {
        "aria-label": M,
        disabled: de,
        ...yt(X),
        onMouseEnter: b ? U.onRailLeafEnter : void 0,
        ...b ? { [to]: "" } : {},
        "data-testid": (le == null ? void 0 : le.testId) ?? `sidebar-item-${M}`,
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
          color: B ? re : ce,
          bgcolor: B ? P : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Tn
          },
          "&:hover": _e,
          ...vo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: b ? ve : 44,
          height: b ? ve : 44,
          color: B ? re : ce,
          bgcolor: B ? P : "transparent",
          borderRadius: B ? "8px" : "50%",
          "&:hover": {
            bgcolor: B ? P : le != null && le.insideGroup ? "action.hover" : ge,
            borderRadius: "8px"
          },
          ...vo,
          ...b ? nt(B) : {}
        },
        children: [
          Y,
          F ? /* @__PURE__ */ o(
            vt,
            {
              text: M,
              variant: "caption",
              center: !0,
              fontSize: _n
            }
          ) : null
        ]
      }
    );
    return F ? de ? /* @__PURE__ */ o("span", { children: me }, u) : /* @__PURE__ */ o(d.Fragment, { children: me }, u) : /* @__PURE__ */ o(
      Ro,
      {
        title: M,
        placement: "right",
        arrow: !b,
        ...b ? kt : {},
        children: de ? /* @__PURE__ */ o("span", { children: me }) : me
      },
      u
    );
  }, co = {
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
  }, nt = (u) => ({
    borderRadius: `${fe}px`,
    "& .MuiSvgIcon-root": { fontSize: Jt },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...u ? { bgcolor: "transparent" } : {},
    transition: `transform ${yo.duration}ms ${yo.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), kt = {
    slotProps: {
      tooltip: { sx: Do(O, L) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, lo = (u) => {
    var X;
    const M = dt(u, r), Y = Ct("", u), B = ((X = U.state) == null ? void 0 : X.key) === Y;
    return /* @__PURE__ */ o(
      A,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ o(
          Oe,
          {
            ...U.triggerProps(Y),
            "aria-label": u.text,
            "aria-haspopup": "menu",
            "aria-expanded": B,
            "data-testid": `sidebar-item-${u.text}`,
            "data-active": M ? "true" : "false",
            "data-open": B ? "true" : "false",
            [to]: "",
            sx: {
              position: "relative",
              width: ve,
              height: ve,
              color: M ? re : ce,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: M ? P : "transparent",
              ...nt(M),
              // The icon stays centred, in line with every other
              // icon down the rail; the arrow sits in the room
              // beside it
              "&::after": {
                content: '""',
                position: "absolute",
                // Just past the button, in the rail's side gutter,
                // clear of the icon (drawn back inside it when
                // the scrollbar takes that gutter)
                right: -ua(J),
                top: "50%",
                transform: "translateY(-50%)",
                width: 5,
                height: 8,
                bgcolor: S ?? "currentColor",
                mask: `${la} center / contain no-repeat`,
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
            children: u.icon
          }
        )
      },
      u.text
    );
  }, uo = (u) => {
    const M = dt(u, r), Y = Xe(u, r), B = Ct("", u), X = pt(u, B), le = /* @__PURE__ */ y(
      Oe,
      {
        "aria-label": u.text,
        "aria-expanded": X,
        onClick: () => ht(B, X),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": Y ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: F ? 0.25 : 0,
          width: F ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...F ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: Y ? re : ce,
          bgcolor: Y ? P : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": F ? { bgcolor: P, color: re } : {
            bgcolor: Y ? P : "transparent"
          },
          ...vo
        },
        children: [
          F ? /* @__PURE__ */ o(
            A,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Tn
                }
              },
              children: u.icon
            }
          ) : u.icon,
          F ? /* @__PURE__ */ o(
            vt,
            {
              text: u.text,
              variant: "caption",
              center: !0,
              fontSize: _n
            }
          ) : null,
          /* @__PURE__ */ o(fa, { open: X, size: ia })
        ]
      }
    ), de = F ? le : /* @__PURE__ */ o(Ro, { title: u.text, placement: "right", arrow: !0, children: le });
    return /* @__PURE__ */ y(
      A,
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
          bgcolor: M ? ge : "transparent",
          ...F ? {} : { "&:hover": { bgcolor: ge } }
        },
        children: [
          de,
          X ? _r(u.subitems, u.icon).map(
            ({ sub: me, icon: ne }) => St(
              me.path,
              me.text,
              ne,
              Xe(me, r),
              me.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${me.text}`
              }
            )
          ) : null
        ]
      },
      u.text
    );
  }, Bo = (u) => /* @__PURE__ */ o(
    A,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: St(
        u.text,
        u.subtitle ? `${u.text} · ${u.subtitle}` : u.text,
        u.icon,
        Xe(u, r),
        u.path,
        { testId: `sidebar-item-${u.text}` }
      )
    },
    u.text
  ), mt = (u) => At(u) ? b ? lo(u) : w ? uo(u) : Po(u) : w ? Bo(u) : ao(u), Et = (u) => /* @__PURE__ */ o(
    Ne,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: w ? "center" : "stretch"
      },
      children: u.map((M, Y) => {
        const B = (le) => /* @__PURE__ */ o(
          ot,
          {
            "data-testid": `sidebar-divider-${le === "before" ? "before-" : ""}${M.text}`,
            sx: {
              alignSelf: "stretch",
              my: b ? ct : 1,
              borderColor: "divider"
            }
          }
        ), X = M.dividerAfter && Y < u.length - 1;
        return M.dividerBefore || X ? /* @__PURE__ */ y(d.Fragment, { children: [
          M.dividerBefore ? B("before") : null,
          mt(M),
          X ? B("after") : null
        ] }, M.text) : mt(M);
      })
    }
  ), Dt = w ? I : _, pe = () => {
    var de, me;
    const { state: u } = U, M = u ? [...e, ...t].find(
      (ne) => At(ne) && Ct("", ne) === u.key
    ) ?? null : null, Y = M ? ((de = H.current) == null ? void 0 : de.getBoundingClientRect().right) ?? I : I, B = M ? ((me = H.current) == null ? void 0 : me.closest("[data-rail-surface]")) ?? H.current : null, X = B == null ? void 0 : B.getBoundingClientRect(), le = B && X ? {
      left: X.left,
      top: X.top,
      width: X.width,
      height: X.height,
      radius: parseFloat(
        getComputedStyle(B).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ o(
      Zi,
      {
        group: M,
        groupKey: M ? u.key : null,
        anchor: M ? U.getTrigger(u.key) : null,
        railEdge: Y,
        railShape: le,
        activePath: r,
        focusFirst: u == null ? void 0 : u.focusFirst,
        onNavigate: ft,
        onClose: U.close,
        panelProps: U.flyoutProps,
        accentColor: x,
        activeBackgroundColor: p,
        activeForegroundColor: re,
        solidSurface: $ ?? ae
      }
    );
  }, zo = l ? /* @__PURE__ */ o(
    A,
    {
      "data-testid": "sidebar-header",
      sx: {
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        ...b ? { pt: "12px", pb: "12px" } : {
          height: In,
          minHeight: In
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: We
      },
      children: i || a ? /* @__PURE__ */ o(
        Ao,
        {
          logo: i,
          title: w ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: f,
          color: g ?? Se,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, Je = !l && i ? /* @__PURE__ */ o(
    A,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: b ? ct : 1
      },
      children: /* @__PURE__ */ o(
        Ao,
        {
          logo: i,
          appName: a || "App",
          onClick: c,
          menuOpen: f,
          color: g ?? Se,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, gt = F ? 0.5 : b ? 0.75 : w ? 1 : 1.5;
  return /* @__PURE__ */ o(Lt.Provider, { value: b, children: /* @__PURE__ */ y(
    A,
    {
      ref: H,
      ...z,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": w ? "true" : "false",
      "data-labeled": F ? "true" : "false",
      sx: {
        width: Dt,
        minWidth: Dt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: ae,
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
        ...b ? co : {}
      },
      children: [
        C.lens,
        zo ?? Je,
        Fe.length > 0 ? /* @__PURE__ */ y(
          A,
          {
            ref: ie,
            sx: {
              flexShrink: 0,
              position: "relative",
              mx: gt,
              pb: b ? ct : 1
            },
            children: [
              be.glass,
              Et(Fe)
            ]
          }
        ) : null,
        W ? /* @__PURE__ */ o(
          A,
          {
            sx: {
              flexShrink: 0,
              px: gt,
              pt: b ? 0 : 1,
              pb: b ? 0 : 1
            },
            children: W
          }
        ) : null,
        /* @__PURE__ */ o(
          A,
          {
            ref: V,
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: se ? "auto" : "hidden",
              overflowX: "hidden",
              // Scrollbar shows only while the pointer is inside (or a
              // keyboard user tabs in). Not :focus-within, since a
              // clicked link keeps focus and would pin it on.
              ...b ? {
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
                width: b ? qt : 8
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
              // padding follows it, so the 44px column keeps equal
              // gaps in the capsule whether the bar is classic,
              // overlay or absent. (The inline collapsed rail keeps
              // its padding: its open groups tint the full row width.)
              ...b ? ha(J) : { px: gt },
              pt: q && !l ? `${q}px` : b ? ct : 1,
              pb: b ? ct : 2
            },
            children: /* @__PURE__ */ y(
              A,
              {
                ref: oe,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  j.glass,
                  Et(we),
                  t.length > 0 ? /* @__PURE__ */ y(
                    A,
                    {
                      sx: { mt: "auto", pt: b ? ct : 2 },
                      children: [
                        G ? null : /* @__PURE__ */ o(
                          ot,
                          {
                            sx: {
                              mb: b ? ct : 1,
                              borderColor: "divider"
                            }
                          }
                        ),
                        Et(t)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        G ? /* @__PURE__ */ o(
          A,
          {
            sx: {
              flexShrink: 0,
              px: gt,
              pb: 1.5,
              ...b ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: Jt
                }
              } : {}
            },
            children: /* @__PURE__ */ o(
              A,
              {
                sx: {
                  borderTop: `1px solid ${so}`,
                  pt: b ? ct : 1.5
                },
                children: G
              }
            )
          }
        ) : null,
        b ? pe() : null
      ]
    }
  ) });
}, hr = "var(--lumora-content-padding, 0px)", An = `calc(${hr} * -1)`, Rl = ({
  children: e,
  flushTop: t = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: i = !0,
  sx: a
}) => /* @__PURE__ */ o(
  A,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: An,
        mt: t ? An : 0,
        // Space below it, like any other block on the page
        mb: hr,
        px: i ? hr : 0,
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
), xa = ({ keys: e }) => /* @__PURE__ */ o(
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
    children: e.map((t) => /* @__PURE__ */ o("span", { children: t }, t))
  }
), Le = {
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
}, ke = {
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
}, It = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, _t = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, Tt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Rs = $o(), ze = Rs.typography.pxToRem, Wr = (e) => {
  const t = e === "dark", r = [...Rs.shadows];
  return r[1] = t ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: t ? Le[300] : Le[200],
        main: Le[400],
        dark: Le[700],
        contrastText: Le[50]
      },
      info: t ? {
        light: Le[500],
        main: Le[700],
        dark: Le[900],
        contrastText: Le[300]
      } : {
        light: Le[100],
        main: Le[300],
        dark: Le[600],
        contrastText: ke[50]
      },
      warning: t ? { light: _t[400], main: _t[500], dark: _t[700] } : { light: _t[300], main: _t[400], dark: _t[800] },
      error: t ? { light: Tt[400], main: Tt[500], dark: Tt[700] } : { light: Tt[300], main: Tt[400], dark: Tt[800] },
      success: t ? { light: It[400], main: It[500], dark: It[700] } : { light: It[300], main: It[400], dark: It[800] },
      grey: ke,
      divider: t ? He(ke[700], 0.6) : He(ke[300], 0.4),
      background: t ? { default: ke[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: t ? { primary: "hsl(0, 0%, 100%)", secondary: ke[400] } : { primary: ke[800], secondary: ke[600] },
      action: t ? {
        hover: He(ke[600], 0.2),
        selected: He(ke[600], 0.3)
      } : {
        hover: He(ke[200], 0.2),
        selected: He(ke[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: ze(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: ze(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: ze(30), lineHeight: 1.2 },
      h4: { fontSize: ze(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: ze(20), fontWeight: 600 },
      h6: { fontSize: ze(18), fontWeight: 600 },
      subtitle1: { fontSize: ze(18) },
      subtitle2: { fontSize: ze(14), fontWeight: 500 },
      body1: { fontSize: ze(14) },
      body2: { fontSize: ze(14), fontWeight: 400 },
      caption: { fontSize: ze(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, ba = 6, va = 8, On = (e, t) => typeof e == "object" ? e[t] : e, tr = ({
  themeMode: e,
  muiTheme: t,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: s = "expand",
  sidebarAutoHide: i = !1,
  showSidebar: a = !0,
  contentPadding: c = ls,
  sidebarBackgroundColor: f,
  contentBackgroundColor: l,
  content: m
}) => {
  const h = Zn(r.breakpoints.down("md")), g = e === "dark", x = us({
    showSidebar: a,
    isMobile: h,
    sidebarVariant: n,
    sidebarSubmenu: s,
    sidebarAutoHide: i
  }), p = Fo(s, n) ? {
    gutterPx: lt,
    radiusPx: cs
  } : void 0, S = Io, R = fs(
    On(f, e),
    g
  ), T = hs(
    On(l, e),
    g
  ), v = ds(c, r), E = p ? /* @__PURE__ */ y(Kt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ o(Be, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ o(
      Kt,
      {
        alignItems: "center",
        spacing: `${No}px`,
        sx: { mt: 2 },
        children: Array.from({ length: va }, ($, w) => /* @__PURE__ */ o(
          Z,
          {
            sx: {
              width: ve,
              height: ve,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ o(
              Be,
              {
                variant: "rounded",
                width: Jt,
                height: Jt
              }
            )
          },
          w
        ))
      }
    )
  ] }) : /* @__PURE__ */ y(Kt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ o(Be, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ o(Z, { sx: { height: 8 } }),
    Array.from({ length: ba }, ($, w) => /* @__PURE__ */ o(Be, { variant: "rounded", width: 28, height: 28 }, w))
  ] });
  return /* @__PURE__ */ o(Co, { theme: t, children: /* @__PURE__ */ y(
    Z,
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
        h && /* @__PURE__ */ y(
          Z,
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
              bgcolor: R,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ o(Be, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ o(Be, { variant: "text", width: 96 }),
              /* @__PURE__ */ o(Z, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ o(Be, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !h && x > 0 && /* @__PURE__ */ o(
          Z,
          {
            sx: {
              position: "relative",
              width: x,
              flexShrink: 0
            },
            children: /* @__PURE__ */ o(
              Z,
              {
                sx: p ? {
                  position: "fixed",
                  top: p.gutterPx,
                  bottom: p.gutterPx,
                  left: p.gutterPx,
                  width: x - 2 * p.gutterPx,
                  borderRadius: `${p.radiusPx}px`,
                  bgcolor: R
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: x,
                  bgcolor: R
                },
                children: E
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          Z,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              // The variables the wrapper's <main> sets, so a host's `content`
              // that sizes itself from them measures as it will in the app
              "--lumora-content-padding": v,
              "--lumora-sticky-top": h ? `${S}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: h ? `${S}px` : 0
            },
            children: m ?? /* @__PURE__ */ y(De, { children: [
              /* @__PURE__ */ o(Be, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ o(
                Be,
                {
                  variant: "text",
                  width: 320,
                  sx: { mb: 3 }
                }
              ),
              /* @__PURE__ */ o(Kt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from(
                { length: h ? 2 : 4 },
                ($, w) => /* @__PURE__ */ o(
                  Be,
                  {
                    variant: "rounded",
                    height: 96,
                    sx: { flex: 1 }
                  },
                  w
                )
              ) }),
              /* @__PURE__ */ o(Be, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, pr = $o(Wr("light")), _o = $o(Wr("dark")), ya = (e) => e === "dark" ? _o : pr, wa = ({
  theme: e = "light",
  darkModeSelector: t,
  ...r
}) => {
  const n = qn();
  if (!t) {
    const i = ya(e);
    return /* @__PURE__ */ y(Co, { theme: i, children: [
      /* @__PURE__ */ o(ir, {}),
      /* @__PURE__ */ o(
        tr,
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
  return /* @__PURE__ */ y(Co, { theme: pr, children: [
    /* @__PURE__ */ o(ir, {}),
    /* @__PURE__ */ o(
      ii,
      {
        styles: {
          [`${t} body`]: {
            backgroundColor: _o.palette.background.default,
            color: _o.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ o(Z, { sx: { display: "contents", [s]: { display: "none" } }, children: /* @__PURE__ */ o(
      tr,
      {
        themeMode: "light",
        muiTheme: pr,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ o(Z, { sx: { display: "none", [s]: { display: "contents" } }, children: /* @__PURE__ */ o(
      tr,
      {
        themeMode: "dark",
        muiTheme: _o,
        hostTheme: n,
        ...r
      }
    ) })
  ] });
};
class te extends Error {
  constructor(t, r, n = null) {
    super(t), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const ue = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, ye = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, tt = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Sa = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        tt.ACCESS_TOKEN
      ), t = localStorage.getItem(
        tt.REFRESH_TOKEN
      ), r = localStorage.getItem(tt.USER);
      e && !localStorage.getItem(ye.ACCESS_TOKEN) && localStorage.setItem(ye.ACCESS_TOKEN, e), t && !localStorage.getItem(ye.REFRESH_TOKEN) && localStorage.setItem(
        ye.REFRESH_TOKEN,
        t
      ), r && !localStorage.getItem(ye.USER) && localStorage.setItem(ye.USER, r), (e || t || r) && (localStorage.removeItem(tt.ACCESS_TOKEN), localStorage.removeItem(tt.REFRESH_TOKEN), localStorage.removeItem(tt.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, or = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new te(
        "localStorage is not available",
        ue.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new te(
      "Storage quota exceeded. Please clear browser data.",
      ue.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new te(
      "Access to localStorage is denied. Please check browser settings.",
      ue.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      t.name
    ), new te(
      "Failed to access storage",
      ue.STORAGE_ACCESS_DENIED,
      t
    ));
  }
}, rr = (e, t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new te(
        "localStorage is not available",
        ue.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, t), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new te(
      "Storage quota exceeded. Please clear browser data.",
      ue.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new te(
      "Access to localStorage is denied. Please check browser settings.",
      ue.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new te(
      "Failed to write to storage",
      ue.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Is = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (t) {
    return t.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, oo = () => {
  try {
    Sa();
    const e = or(ye.ACCESS_TOKEN), t = or(ye.REFRESH_TOKEN), r = or(ye.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), Is(ye.USER);
      }
    return {
      accessToken: e,
      refreshToken: t,
      user: n
    };
  } catch (e) {
    throw e instanceof te ? e : new te(
      "Failed to retrieve authentication tokens",
      ue.UNKNOWN_ERROR,
      e
    );
  }
}, Ea = () => {
  try {
    const { accessToken: e, refreshToken: t } = oo();
    return !(e || t) ? {
      isAuthenticated: !1,
      error: new te(
        "No authentication tokens found",
        ue.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof te ? e : new te(
        "Authentication check failed",
        ue.UNKNOWN_ERROR,
        e
      )
    };
  }
}, _s = (e, t, r = null) => {
  try {
    if (!e && !t)
      throw new te(
        "At least one token must be provided",
        ue.TOKEN_INVALID
      );
    return e && rr(ye.ACCESS_TOKEN, e), t && rr(ye.REFRESH_TOKEN, t), r && rr(ye.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof te ? n : new te(
        "Failed to store tokens",
        ue.UNKNOWN_ERROR,
        n
      )
    };
  }
}, ro = () => {
  try {
    return [
      ye.ACCESS_TOKEN,
      ye.REFRESH_TOKEN,
      ye.USER,
      // Also clear legacy keys for complete cleanup
      tt.ACCESS_TOKEN,
      tt.REFRESH_TOKEN,
      tt.USER
    ].map((n) => Is(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof te ? e : new te(
        "Failed to clear tokens",
        ue.LOGOUT_FAILED,
        e
      )
    };
  }
}, Ra = () => {
  try {
    const { user: e } = oo();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof te ? e : new te(
        "Failed to retrieve user data",
        ue.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Il = (e) => {
  if (!(e instanceof te))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case ue.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case ue.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case ue.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case ue.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case ue.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case ue.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, mr = (e, t = "Unknown") => {
  const r = {
    context: t,
    message: e.message,
    code: e instanceof te ? e.code : "UNKNOWN",
    timestamp: e instanceof te ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof te && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, Ia = (e) => {
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
    s.forEach(({ resolve: f, reject: l }) => {
      a ? l(a) : c && f(c);
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
      const c = a.config, f = (g = a.response) == null ? void 0 : g.status, l = (c == null ? void 0 : c.url) || "", m = l.includes("/auth/refresh");
      if (f !== 401 || c._retry || m)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: h } = oo();
      if (!h) {
        const x = new Error(
          "No refresh token available for token refresh"
        );
        return mr(x, "AxiosClient - Token Refresh"), ro(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((x, p) => {
          s.push({ resolve: x, reject: p });
        }).then((x) => {
          const {
            accessToken: p,
            refreshToken: S
          } = x;
          if (c.headers && (c.headers.Authorization = `Bearer ${p}`), l.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const R = JSON.parse(
                  c.data || "{}"
                );
                R.refresh_token = S, c.data = JSON.stringify(R);
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
          refresh_token: h
        }
      );
      try {
        const x = await n, { accessToken: p, refreshToken: S } = x.data;
        if (_s(p, S, null), i(null, {
          accessToken: p,
          refreshToken: S
        }), c.headers && (c.headers.Authorization = `Bearer ${p}`), l.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const R = JSON.parse(
                c.data || "{}"
              );
              R.refresh_token = S, c.data = JSON.stringify(R);
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
        return mr(
          x,
          "AxiosClient - Token Refresh Failed"
        ), i(x), ro(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(x);
      } finally {
        r = !1, n = null;
      }
    }
  ), t;
}, _a = async (e, t) => {
  const { accessToken: r, refreshToken: n } = oo();
  if (r)
    return !0;
  if (n)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return _s(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      mr(s, "TokenValidator - Refresh Failed");
    }
  return ro(), t ? t() : window.location.href = "/login", !1;
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
), $n = Ce(Mr), et = "#09C1AE", To = (e, t) => ({
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
}), Ta = (e) => ({
  ...To(fe, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${fe - 2}px`,
    zIndex: 1,
    background: `${Oo(et, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), Mn = ({
  variant: e,
  onClick: t,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: i = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = kr(), f = d.useContext(Lt), l = qe().palette.mode === "dark", m = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", h = {
    onClick: t,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ y(
    Ye,
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
        ...n && To(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ o(Vt, { size: 20 }),
        /* @__PURE__ */ o(
          xe,
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
        s && /* @__PURE__ */ o(xa, { keys: s })
      ]
    }
  ) : e === "sidebar-icon" && f && ar ? /* @__PURE__ */ o(Ve, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ o(
    Oe,
    {
      ...h,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: ve,
        height: ve,
        borderRadius: `${fe}px`,
        ...Oo(et, l, "clear"),
        ...r && {
          boxShadow: `${Oo(et, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${$n.duration}ms ${$n.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [Re]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && Ta(l)
      },
      children: /* @__PURE__ */ o(Vt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ o(Ve, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ o(
    Oe,
    {
      ...h,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": f || void 0,
      sx: {
        width: f ? ve : 44,
        height: f ? ve : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? et : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && To(8, "background.paper")
      },
      children: /* @__PURE__ */ o(Vt, { size: f ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ o(Ve, { title: m, placement: "left", children: /* @__PURE__ */ o(
    Oe,
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
        ...n && To(16, "background.paper")
      },
      children: /* @__PURE__ */ o(A, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ o(Vt, { size: 26 }) })
    }
  ) });
}, Eo = ({
  title: e = "",
  message: t = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ o(ci, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ y(li, { children: [
  /* @__PURE__ */ o(di, { fontSize: "small" }),
  /* @__PURE__ */ o(xe, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ o(
    xe,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: t
    }
  ),
  /* @__PURE__ */ o(
    Jn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Gt = 24, Ca = 720, Aa = 1140, Oa = 1250, $a = ({
  open: e,
  children: t,
  variant: r,
  position: n,
  width: s,
  sidebarWidthPx: i,
  bottomOffsetPx: a,
  fullScreen: c,
  fullScreenBottom: f = "0px",
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
    const S = (R) => {
      R.key === "Escape" && l();
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [e, l]);
  const h = r === "docked", g = Gt + a;
  let x;
  c ? x = {
    top: 0,
    left: 0,
    right: 0,
    bottom: f,
    borderRadius: 0
  } : h ? x = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : x = {
    bottom: g,
    ...n === "left" ? { left: i + Gt } : { right: Gt },
    width: s,
    maxWidth: `calc(100vw - ${Gt * 2}px)`,
    height: `min(${Ca}px, calc(100vh - ${g + Gt}px))`,
    borderRadius: "12px"
  };
  const p = /* @__PURE__ */ o(
    Sr,
    {
      role: h ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: h ? Aa : Oa,
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
  return h ? /* @__PURE__ */ o(
    fi,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...m.current ? {} : { timeout: { enter: 0 } },
      children: p
    }
  ) : /* @__PURE__ */ o(
    ui,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: p
    }
  );
}, Ma = 180, Ln = 250, La = "#01584F", ka = ({
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
    Ve,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ o(
        xe,
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
}, Ts = (e, t, r, n) => {
  const s = e ? 48 : 44, i = e ? "text.secondary" : t, a = e ? La : t;
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
}, Cs = ({ link: e }) => /* @__PURE__ */ y(Ne, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ o(
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
  /* @__PURE__ */ o(
    ka,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), As = (e, t, r) => r ? e : /* @__PURE__ */ o(Ro, { title: t, placement: "right", arrow: !0, children: e }), Da = ({
  link: e,
  activePath: t,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: i,
  railShowTitles: a
}) => {
  const c = qe(), [f, l] = d.useState(null), [m, h] = d.useState(!1), g = d.useRef(
    null
  ), x = d.useRef(null), p = d.useRef(null), S = d.useRef(!1), R = d.useRef(!1), T = d.useId(), v = () => {
    g.current && (clearTimeout(g.current), g.current = null);
  }, E = () => {
    v(), g.current = setTimeout(() => {
      h(!1), g.current = null;
    }, Ma);
  }, $ = () => {
    v(), h(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const W = (G) => {
      var N;
      G.key === "Escape" && (h(!1), (N = p.current) == null || N.focus());
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [m]), d.useEffect(() => {
    if (!m || !R.current)
      return;
    const W = globalThis.requestAnimationFrame(() => {
      var N;
      const G = (N = x.current) == null ? void 0 : N.querySelector(
        '[role="menuitem"]'
      );
      G == null || G.focus(), R.current = !1;
    });
    return () => cancelAnimationFrame(W);
  }, [m]);
  const w = dt(e, t), { activeBg: _, sx: I } = Ts(
    s,
    n,
    w,
    a
  ), F = /* @__PURE__ */ o(
    Oe,
    {
      ref: p,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        S.current || $();
      },
      onBlur: (W) => {
        var N;
        const G = W.relatedTarget;
        G && ((N = x.current) != null && N.contains(G)) || E();
      },
      onKeyDown: (W) => {
        W.key === "ArrowDown" && (W.preventDefault(), R.current = !0, $());
      },
      onClick: (W) => {
        W.stopPropagation(), !(e.path && !$t(W)) && (W.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? T : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: I,
      children: a ? /* @__PURE__ */ o(Cs, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ y(
    A,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ o(
          A,
          {
            ref: l,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              S.current = !0, $();
            },
            onMouseLeave: () => {
              S.current = !1, E();
            },
            children: As(F, e.text, a)
          }
        ),
        /* @__PURE__ */ o(
          wr,
          {
            open: m && !!f,
            anchorEl: f,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (W) => W.zIndex.modal },
            children: /* @__PURE__ */ o(
              Sr,
              {
                ref: x,
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
                  boxShadow: c.shadows[8],
                  maxWidth: Ln,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ o(
                  Er,
                  {
                    id: T,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Ln
                    },
                    children: q(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function q(W, G, N) {
    return W.flatMap((K) => {
      const O = Ct(G, K);
      return At(K) ? [
        /* @__PURE__ */ o(
          hi,
          {
            disableSticky: !0,
            title: K.text,
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
            children: K.text
          },
          O
        ),
        ...q(K.subitems, O, N + 1)
      ] : [
        /* @__PURE__ */ y(
          ut,
          {
            role: "menuitem",
            title: K.text,
            disabled: !K.path,
            selected: Xe(K, t),
            ...K.path && { component: "a", href: K.path },
            onClick: (L) => {
              K.path && !$t(L) || (L.preventDefault(), K.path && (r == null || r(K.path)), h(!1));
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
                bgcolor: _,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: _
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              K.icon ? /* @__PURE__ */ o($e, { children: K.icon }) : null,
              /* @__PURE__ */ o(
                je,
                {
                  primary: K.text,
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
}, Na = ({
  link: e,
  activePath: t,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: i
}) => {
  const a = !!(e.path && t === e.path), { sx: c } = Ts(
    s,
    n,
    a,
    i
  );
  return As(
    /* @__PURE__ */ o(
      Oe,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (f) => {
          f.stopPropagation(), !(e.path && !$t(f)) && (f.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: c,
        children: i ? /* @__PURE__ */ o(Cs, { link: e }) : e.icon
      }
    ),
    e.text,
    i
  );
}, Fa = () => /* @__PURE__ */ o(
  A,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ o(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), Wa = () => /* @__PURE__ */ o(
  A,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ o(ot, { sx: { width: "60%", borderColor: "divider" } })
  }
), kn = (e, t) => e.map((r, n) => /* @__PURE__ */ y(d.Fragment, { children: [
  t(r, n),
  n < e.length - 1 ? /* @__PURE__ */ o(Fa, {}) : null
] }, n)), Pa = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: a = !1
}) => {
  const c = (l, m) => At(l) ? /* @__PURE__ */ o(
    Da,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: m,
      surfaceBackgroundColor: i,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ o(
    Na,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: m,
      railShowTitles: a
    }
  ), f = a ? 1.25 : 1;
  return /* @__PURE__ */ y(
    Ne,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: f
      },
      children: [
        kn(e, (l) => c(l, !1)),
        t.length > 0 ? /* @__PURE__ */ y(De, { children: [
          /* @__PURE__ */ o(Wa, {}),
          /* @__PURE__ */ o(A, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ o(Ne, { gap: f, alignItems: "center", children: kn(
            t,
            (l) => c(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Ba = (e) => e ? rs(e) : "USER", za = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t.charAt(0).toUpperCase()).join(""), Dn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, gr = ({ count: e }) => e ? /* @__PURE__ */ o(
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
) : null, Pr = ({ name: e, avatar: t, color: r, size: n = 36 }) => /* @__PURE__ */ o(
  mi,
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
    children: za(e)
  }
), Os = ({ name: e, role: t, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ y(De, { children: [
  /* @__PURE__ */ o(Pr, { name: e, avatar: r, color: n }),
  s && /* @__PURE__ */ y(
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
        /* @__PURE__ */ o(
          xe,
          {
            variant: "body2",
            sx: { ...Dn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ o(
          xe,
          {
            variant: "caption",
            sx: { ...Dn, opacity: 0.8, color: "inherit" },
            children: Ba(t)
          }
        )
      ]
    }
  )
] }), Nn = {
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
}, $s = ({
  anchorEl: e,
  onClose: t,
  placement: r,
  width: n,
  avatarColor: s,
  showNotifications: i,
  notificationCount: a,
  onNotificationsClick: c,
  userName: f = "User",
  userRole: l,
  userAvatar: m,
  menuItems: h = [],
  showSettings: g,
  onSettingsClick: x,
  showThemeToggler: p,
  theme: S,
  onThemeToggle: R,
  onLogout: T
}) => {
  const v = (E) => () => {
    t(), E == null || E();
  };
  return /* @__PURE__ */ y(
    gi,
    {
      anchorEl: e,
      open: !!e,
      onClose: t,
      anchorOrigin: Nn[r].anchor,
      transformOrigin: Nn[r].transform,
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
          Ne,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ o(
              Os,
              {
                name: f,
                role: l,
                avatar: m,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ o(ot, {}),
        i && /* @__PURE__ */ y(ut, { onClick: v(c), children: [
          /* @__PURE__ */ o($e, { children: /* @__PURE__ */ o(ts, { fontSize: "small" }) }),
          /* @__PURE__ */ o(je, { children: "Notifications" }),
          /* @__PURE__ */ o(gr, { count: a })
        ] }),
        h.map((E) => /* @__PURE__ */ y(ut, { onClick: v(E.onClick), children: [
          E.icon && /* @__PURE__ */ o($e, { children: E.icon }),
          /* @__PURE__ */ o(je, { inset: !E.icon, children: E.label }),
          /* @__PURE__ */ o(gr, { count: E.badge })
        ] }, E.key)),
        g && /* @__PURE__ */ y(ut, { onClick: v(x), children: [
          /* @__PURE__ */ o($e, { children: /* @__PURE__ */ o(pi, { fontSize: "small" }) }),
          /* @__PURE__ */ o(je, { children: "Settings" })
        ] }),
        p && [
          /* @__PURE__ */ o(ot, {}, "theme-divider"),
          /* @__PURE__ */ y(A, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ o(
              xe,
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
              xi,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: S,
                onChange: (E, $) => $ && $ !== S && (R == null ? void 0 : R()),
                disabled: !R,
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
                  /* @__PURE__ */ o(mn, { value: "light", children: "Light" }),
                  /* @__PURE__ */ o(mn, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ o(ot, {}),
        /* @__PURE__ */ y(
          ut,
          {
            onClick: v(T),
            sx: {
              color: S === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ o($e, { sx: { color: "inherit" }, children: /* @__PURE__ */ o(es, { fontSize: "small" }) }),
              /* @__PURE__ */ o(je, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Ms = 64, Ha = 2, Ut = ({
  label: e,
  icon: t,
  onClick: r,
  active: n,
  color: s,
  activeColor: i,
  activeBackground: a,
  ariaLabel: c,
  haspopup: f,
  isPage: l = !1,
  href: m,
  testId: h
}) => /* @__PURE__ */ y(
  Ye,
  {
    ...m && { component: "a", href: m },
    onClick: r,
    "aria-label": c ?? e,
    "aria-haspopup": f,
    "aria-expanded": f ? n : void 0,
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
        A,
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
        xe,
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
), Ga = ({
  onMenuClick: e,
  menuOpen: t,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: i,
  assistantActive: a,
  showProfile: c,
  background: f,
  color: l,
  activeColor: m,
  activeBackground: h,
  pinnedLinks: g = [],
  activePath: x,
  onLinkClick: p,
  ...S
}) => {
  const R = g.filter((I) => I.path).slice(0, Ha), [T, v] = d.useState(
    null
  ), { userName: E = "User", userAvatar: $, avatarColor: w } = S, _ = { color: l, activeColor: m, activeBackground: h };
  return /* @__PURE__ */ y(
    Sr,
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
        height: `calc(${Ms}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: f,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ o(
          Ut,
          {
            label: "Menu",
            icon: /* @__PURE__ */ o(Qn, {}),
            onClick: e,
            active: t,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ..._
          }
        ),
        R.map((I) => /* @__PURE__ */ o(
          Ut,
          {
            label: I.text,
            icon: I.icon,
            href: I.path,
            onClick: (F) => {
              $t(F) && (F.preventDefault(), p == null || p(I.path));
            },
            active: dt(I, x),
            isPage: !0,
            testId: `mobile-nav-link-${I.text}`,
            ..._
          },
          I.path
        )),
        s && /* @__PURE__ */ o(
          Ut,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ o(
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
                  borderColor: a ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ o(Vt, { size: 18 })
              }
            ),
            onClick: i,
            active: a,
            testId: "mobile-nav-nexa",
            ..._
          }
        ),
        r && /* @__PURE__ */ o(
          Ut,
          {
            label: "Search",
            icon: /* @__PURE__ */ o(Rr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ..._
          }
        ),
        c && /* @__PURE__ */ y(De, { children: [
          /* @__PURE__ */ o(
            Ut,
            {
              label: "Account",
              ariaLabel: `Account menu for ${E}`,
              icon: /* @__PURE__ */ o(
                Pr,
                {
                  name: E,
                  avatar: $,
                  color: w,
                  size: 26
                }
              ),
              onClick: (I) => v(I.currentTarget),
              active: !!T,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ..._
            }
          ),
          /* @__PURE__ */ o(
            $s,
            {
              anchorEl: T,
              onClose: () => v(null),
              placement: "above-end",
              width: 280,
              ...S
            }
          )
        ] })
      ]
    }
  );
}, Ua = ({
  open: e,
  onClose: t,
  search: r
}) => /* @__PURE__ */ o(
  bi,
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
      Ne,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ o(A, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ o(
            Jn,
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
), Xa = ({
  height: e,
  onMenuClick: t,
  appName: r,
  logo: n,
  onBrandClick: s,
  brandMenuOpen: i,
  background: a,
  color: c,
  brandColor: f = c,
  endContent: l
}) => /* @__PURE__ */ o(
  vi,
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
    children: /* @__PURE__ */ y(yi, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      t && /* @__PURE__ */ o(
        Oe,
        {
          "aria-label": "Open navigation menu",
          onClick: t,
          sx: { color: c },
          children: /* @__PURE__ */ o(Qn, {})
        }
      ),
      /* @__PURE__ */ o(
        Ao,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: s,
          menuOpen: i,
          color: f,
          testId: "mobile-brand"
        }
      ),
      l ? /* @__PURE__ */ o(A, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: l }) : null
    ] })
  }
), Ls = d.createContext(void 0), Br = ({
  count: e,
  onClick: t,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: i
}) => {
  const a = kr(), c = d.useContext(Ls), f = d.useContext(Lt), l = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ o(
    Ve,
    {
      title: l,
      placement: s,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ o(
        Oe,
        {
          onClick: t,
          "aria-label": l,
          "data-testid": i,
          sx: {
            ...f ? {
              width: ve,
              height: ve
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
            os,
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
              children: c ?? /* @__PURE__ */ o(ts, {})
            }
          )
        }
      )
    }
  );
}, Fn = 14, Ka = 18, ja = "blur(12px) saturate(180%) brightness(1.04)", Va = (() => {
  var t;
  if (typeof navigator > "u")
    return !1;
  const e = (t = navigator.userAgentData) == null ? void 0 : t.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Ya = (e, t, r) => {
  const n = Math.min(0.45, r / e), s = Math.min(0.45, r / t), i = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`;
}, qa = 140, Wn = 0.22, Za = 0.14, Ja = (e, t, r) => {
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
    }, f = () => {
      i.x += (s.x - i.x) * Wn, i.y += (s.y - i.y) * Wn, i.i += (s.i - i.i) * Za;
      const g = Math.abs(s.x - i.x) < 0.3 && Math.abs(s.y - i.y) < 0.3 && Math.abs(s.i - i.i) < 3e-3;
      g && (i.x = s.x, i.y = s.y, i.i = s.i), c(), a = g ? 0 : requestAnimationFrame(f);
    }, l = () => {
      a || (a = requestAnimationFrame(f));
    }, m = (g) => {
      const x = e.current;
      if (g.pointerType === "touch" || !x)
        return;
      const p = x.getBoundingClientRect();
      if (!p.width || !p.height)
        return;
      s.x = (g.clientX - p.left) * x.offsetWidth / p.width, s.y = (g.clientY - p.top) * x.offsetHeight / p.height;
      const S = Math.max(
        p.left - g.clientX,
        0,
        g.clientX - p.right
      ), R = Math.max(
        p.top - g.clientY,
        0,
        g.clientY - p.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(S, R) / qa), i.i < 0.01 && (i.x = s.x, i.y = s.y), l();
    }, h = () => {
      s.i = 0, l();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", h), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", h);
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
    const f = d.useRef(null), l = s && ar;
    Ja(f, i && ar, a);
    const m = ko(), h = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [g, x] = d.useState(null), p = d.useRef(null), S = d.useCallback(
      (v) => {
        var $;
        if (f.current = v, typeof c == "function" ? c(v) : c && (c.current = v), ($ = p.current) == null || $.disconnect(), p.current = null, !v || !l || !Va || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const w = v.offsetWidth, _ = v.offsetHeight;
          x(
            (I) => (I == null ? void 0 : I.width) === w && I.height === _ ? I : w && _ ? { width: w, height: _ } : null
          );
        };
        p.current = new ResizeObserver(E), p.current.observe(v), E();
      },
      [c, l]
    ), R = d.useMemo(
      () => g ? Ya(g.width, g.height, Fn) : null,
      [g]
    ), T = l && !!(R && g);
    return /* @__PURE__ */ y(De, { children: [
      T ? /* @__PURE__ */ o(
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
                    href: R,
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
                    stdDeviation: Fn / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ o(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Ka,
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
        A,
        {
          ref: S,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": T ? "true" : void 0,
          sx: [
            Ti(e, t, m),
            T ? {
              backdropFilter: `url(#${h}) ${ja}`,
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
const xr = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Qa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Pn = Ce(ms), Bn = Ce(Wo), zn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', ec = ({ mode: e, onToggle: t, accentColor: r, tint: n, glass: s = !1 }) => {
  const i = qe().palette.mode === "dark", a = ko(), c = d.useRef(null), f = d.useRef(null), l = (g) => {
    var x;
    g !== e && (t == null || t()), (x = (g === "light" ? c : f).current) == null || x.focus();
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
  }, h = (g, x, p, S) => {
    const R = e === g;
    return /* @__PURE__ */ o(
      Ye,
      {
        ref: S,
        role: "radio",
        "aria-checked": R,
        "aria-label": x,
        tabIndex: R ? 0 : -1,
        onClick: () => l(g),
        "data-testid": `theme-segment-${g}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: s ? `${fe}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: R ? i ? "#ffffff" : r : "text.secondary",
          bgcolor: R ? n : "transparent",
          ...s && R ? ss(i, a) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...s && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": R ? { transform: "scale(1.06)" } : {
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
          ...xr
        },
        children: /* @__PURE__ */ o(p, { sx: { fontSize: 16 } })
      }
    );
  };
  return /* @__PURE__ */ y(
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
        borderRadius: s ? `${fe}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        h("light", "Light", Si, c),
        h("dark", "Dark", wi, f)
      ]
    }
  );
}, tc = ({
  open: e,
  anchorEl: t,
  onClose: r,
  width: n,
  renderAvatar: s,
  userName: i,
  userEmail: a,
  roleLabel: c,
  accentColor: f,
  tint: l,
  showThemeToggler: m,
  theme: h,
  onThemeToggle: g,
  onProfileClick: x,
  onAiUsageClick: p,
  onLinkClick: S,
  menuItems: R = [],
  onLogout: T,
  glass: v = !1
}) => {
  const E = qe(), $ = E.palette.mode === "dark", w = d.useRef(null), _ = Ar(E.palette.background.paper), I = Dr({
    enabled: v,
    isDark: $,
    selector: zn,
    radius: fe
  }), [F, q] = d.useState(null);
  d.useEffect(() => {
    if (!F || typeof ResizeObserver > "u")
      return;
    const b = new ResizeObserver(() => {
      var U;
      (U = w.current) == null || U.updatePosition();
    });
    return b.observe(F), () => b.disconnect();
  }, [F]);
  const W = (b) => {
    r(), b == null || b();
  }, G = (b) => {
    r(), b.onClick ? b.onClick() : b.path && (S == null || S(b.path));
  }, N = {
    borderRadius: v ? `${fe}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, K = {
    fontSize: 12,
    lineHeight: "18px",
    letterSpacing: "0.02em",
    fontWeight: 600,
    // White on dark: the accent is too dim against a dark surface
    color: $ ? "#ffffff" : f,
    borderRadius: "4px",
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "2px"
    },
    "&.Mui-focusVisible": {
      boxShadow: `0 0 0 2px ${He(f, 0.6)}`
    },
    ...xr
  }, O = p ? /* @__PURE__ */ y(
    Ne,
    {
      direction: "row",
      "data-testid": "account-menu-links",
      sx: { alignItems: "center", gap: 0.75, mt: 0.25 },
      children: [
        x ? /* @__PURE__ */ y(De, { children: [
          /* @__PURE__ */ o(
            Ye,
            {
              onClick: () => W(x),
              "data-testid": "account-menu-view-profile",
              sx: K,
              children: "View profile"
            }
          ),
          /* @__PURE__ */ o(
            A,
            {
              component: "span",
              "aria-hidden": !0,
              sx: { color: "text.disabled", fontSize: 12 },
              children: "·"
            }
          )
        ] }) : null,
        /* @__PURE__ */ o(
          Ye,
          {
            onClick: () => W(p),
            "data-testid": "account-menu-ai-usage",
            sx: K,
            children: "My AI usage"
          }
        )
      ]
    }
  ) : null, L = /* @__PURE__ */ y(Ne, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    s(36),
    /* @__PURE__ */ y(A, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ o(xe, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: i }),
      a ? /* @__PURE__ */ o(
        xe,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary", fontSize: 12, lineHeight: "18px" },
          children: a
        }
      ) : null,
      c ? /* @__PURE__ */ o(
        xe,
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
      O,
      x && !p ? /* @__PURE__ */ o(
        xe,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            // White on dark: the accent is too dim against a dark surface
            color: $ ? "#ffffff" : f,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ o(
    Ir,
    {
      open: e,
      anchorEl: t,
      onClose: r,
      action: w,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...v ? {
        slots: { transition: yr },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: q,
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
        A,
        {
          "data-testid": "account-menu",
          "data-glass": v ? "true" : void 0,
          sx: v ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${fe}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${zn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Qa, width: n, minWidth: n },
          children: [
            v ? /* @__PURE__ */ o(
              no,
              {
                isDark: $,
                solid: _,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Or} ${Pn.duration}ms ${Pn.easing} both`,
                  [Re]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ y(
              A,
              {
                ...I.containerProps,
                sx: v ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${$r} ${Bn.duration}ms ${Bn.easing} 70ms both`,
                  [Re]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  I.lens,
                  x && !p ? /* @__PURE__ */ o(
                    Ye,
                    {
                      onClick: () => W(x),
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
                        ...xr
                      },
                      children: L
                    }
                  ) : /* @__PURE__ */ o(A, { "data-testid": "account-menu-header", children: L }),
                  /* @__PURE__ */ o(ot, {}),
                  m ? /* @__PURE__ */ y(
                    A,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...N,
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
                        /* @__PURE__ */ o($e, { children: /* @__PURE__ */ o(Ei, { fontSize: "small" }) }),
                        /* @__PURE__ */ o(xe, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ o(
                          ec,
                          {
                            glass: v,
                            mode: h,
                            onToggle: g,
                            accentColor: f,
                            tint: l
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ y(
                    Er,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        R.map((b) => /* @__PURE__ */ y(
                          ut,
                          {
                            onClick: () => G(b),
                            "data-testid": `menu-item-${b.key}`,
                            sx: N,
                            children: [
                              /* @__PURE__ */ o($e, { children: b.icon }),
                              /* @__PURE__ */ o(xe, { sx: { flex: 1 }, children: b.label }),
                              /* @__PURE__ */ o(gr, { count: b.badge })
                            ]
                          },
                          b.key
                        )),
                        T ? /* @__PURE__ */ o(ot, { component: "li", sx: { my: 0.5 } }) : null,
                        T ? /* @__PURE__ */ y(
                          ut,
                          {
                            onClick: () => W(T),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...N,
                              color: $ ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ o($e, { sx: { color: "inherit" }, children: /* @__PURE__ */ o(es, { fontSize: "small" }) }),
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
}, oc = {
  "&:focus, &:focus-visible": { outline: "none" }
}, rc = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: r,
  onLinkClick: n,
  logo: s,
  title: i,
  onBrandClick: a,
  brandMenuOpen: c,
  brandColor: f,
  headerBackgroundColor: l,
  headerForegroundColor: m,
  activeAccentColor: h = "#01584f",
  activeBackgroundColor: g,
  groupArrowColor: x,
  groupAccentColor: p,
  activeForegroundColor: S,
  foregroundColor: R,
  surfaceBackgroundColor: T,
  flyoutSurfaceColor: v,
  collapsed: E,
  expandedWidth: $,
  collapsedWidth: w,
  topContent: _,
  submenuMode: I,
  color: F,
  hoverColor: q,
  avatarColor: W,
  showProfile: G = !0,
  userName: N = "User",
  userEmail: K,
  userRole: O,
  userAvatar: L,
  showNotifications: b = !0,
  notificationCount: U = 0,
  onNotificationsClick: H,
  whatsNewCount: oe = 0,
  onProfileClick: ie,
  onAiUsageClick: V,
  menuItems: J,
  onLogout: se,
  theme: C = "light",
  showThemeToggler: k = !0,
  onThemeToggle: z
}) => {
  const P = qe(), j = P.palette.mode === "dark", be = T ?? (j ? P.palette.background.paper : "#ffffff"), Fe = F ?? R ?? (j ? P.palette.text.primary : h), we = q ?? p ?? Zt(h), ee = W ?? h, Ze = d.useRef(null), [he, re] = d.useState(!1), Ie = O ? rs(O) : void 0, _e = (ft) => /* @__PURE__ */ o(
    Pr,
    {
      name: N,
      avatar: L,
      color: ee,
      size: ft
    }
  ), ge = U + oe, ae = E && I === "flyout", ce = b ? /* @__PURE__ */ o(
    Br,
    {
      count: ge,
      onClick: H,
      color: Fe,
      hoverColor: we,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, We = G ? /* @__PURE__ */ y(
    Ye,
    {
      ref: Ze,
      onClick: () => re(!0),
      "aria-haspopup": "menu",
      "aria-expanded": he,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: E ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        p: ae ? "4px" : 0.75,
        borderRadius: "10px",
        bgcolor: he ? we : "transparent",
        "&:hover": { bgcolor: we },
        ...oc
      },
      children: [
        E && !ae && b ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ o(
            os,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !ge,
              children: _e(36)
            }
          )
        ) : _e(E ? 36 : 40),
        E ? null : /* @__PURE__ */ y(A, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ o(
            xe,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Fe, lineHeight: 1.3 },
              children: N
            }
          ),
          Ie ? /* @__PURE__ */ o(
            xe,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: Fe,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: Ie
            }
          ) : null
        ] })
      ]
    }
  ) : null, Se = !!ce && (!E || ae || !We);
  return /* @__PURE__ */ y(
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
        /* @__PURE__ */ o(
          fr,
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
            brandColor: f,
            headerBackgroundColor: l,
            headerForegroundColor: m,
            activeAccentColor: h,
            activeBackgroundColor: g,
            groupArrowColor: x,
            groupAccentColor: p,
            activeForegroundColor: S,
            foregroundColor: R,
            surfaceBackgroundColor: be,
            flyoutSurfaceColor: v,
            collapsed: E,
            expandedWidth: $,
            collapsedWidth: w,
            topContent: _,
            footer: We || Se ? /* @__PURE__ */ y(
              Ne,
              {
                direction: ae ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  ae && Se ? ce : null,
                  We,
                  !ae && Se ? ce : null
                ]
              }
            ) : void 0,
            submenuMode: I
          }
        ),
        G ? /* @__PURE__ */ o(
          tc,
          {
            open: he,
            anchorEl: Ze.current,
            onClose: () => re(!1),
            width: Math.max($ - 16, 240),
            renderAvatar: _e,
            userName: N,
            userEmail: K,
            roleLabel: Ie,
            accentColor: h,
            tint: we,
            showThemeToggler: k,
            theme: C,
            onThemeToggle: z,
            onProfileClick: ie,
            onAiUsageClick: V,
            onLinkClick: n,
            menuItems: J,
            onLogout: se,
            glass: I === "flyout"
          }
        ) : null
      ]
    }
  );
}, Hn = Ce(ms), Gn = Ce(Wo), Un = 240, nc = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, sc = ({
  anchorEl: e,
  onClose: t,
  platforms: r,
  currentKey: n,
  onSelect: s,
  accentColor: i,
  glass: a = !1
}) => {
  const c = qe(), f = c.palette.mode === "dark", l = !!e, m = Ar(c.palette.background.paper), h = Dr({
    enabled: a,
    isDark: f,
    selector: ".MuiMenuItem-root",
    radius: fe
  }), g = /* @__PURE__ */ o(
    Er,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((x) => {
        const p = x.key === n, S = x.accentColor ?? i;
        return /* @__PURE__ */ y(
          ut,
          {
            selected: p,
            onClick: () => s(x),
            "data-testid": `platform-item-${x.key}`,
            sx: {
              borderRadius: a ? `${fe}px` : "8px",
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
              /* @__PURE__ */ o($e, { sx: { minWidth: 24 }, children: /* @__PURE__ */ o(
                A,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: S,
                    boxShadow: a ? `0 0 0 3px ${f ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ o(
                je,
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
              p ? /* @__PURE__ */ o(
                Ri,
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
    Ir,
    {
      open: l,
      anchorEl: e,
      onClose: t,
      onClick: (x) => x.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: yr },
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
        A,
        {
          "data-testid": "platform-menu",
          "data-glass": a ? "true" : void 0,
          sx: a ? {
            position: "relative",
            minWidth: Un,
            borderRadius: `${fe}px`
          } : { ...nc, minWidth: Un },
          children: a ? /* @__PURE__ */ y(De, { children: [
            /* @__PURE__ */ o(
              no,
              {
                isDark: f,
                solid: m,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Or} ${Hn.duration}ms ${Hn.easing} both`,
                  [Re]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ y(
              A,
              {
                ...h.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${$r} ${Gn.duration}ms ${Gn.easing} 70ms both`,
                  [Re]: { animation: "none" }
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
}, ic = ({ children: e, anchorEl: t, ...r }) => {
  const n = d.useRef(null), s = !!(t && n.current && t.contains(n.current));
  return /* @__PURE__ */ y(
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
        /* @__PURE__ */ o(
          sc,
          {
            ...r,
            anchorEl: s ? t : null
          }
        )
      ]
    }
  );
}, ac = ({
  compact: e,
  color: t,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: s = 0,
  ...i
}) => {
  var $;
  const {
    avatarColor: a,
    showNotifications: c,
    notificationCount: f,
    onNotificationsClick: l,
    userName: m = "User",
    userRole: h,
    userAvatar: g
  } = i, x = d.useRef(null), [p, S] = d.useState(
    null
  ), R = !!p, T = d.useRef(e);
  d.useEffect(() => {
    e && !T.current && S(null), T.current = e;
  }, [e]);
  const v = d.useContext(Lt);
  if (!c && !n)
    return null;
  const E = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: t }
  };
  return /* @__PURE__ */ y(De, { children: [
    /* @__PURE__ */ y(
      Ne,
      {
        ref: x,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ o(
            Ve,
            {
              title: e ? m : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ o(
                Ye,
                {
                  onClick: () => S(x.current),
                  "aria-label": `Account menu for ${m}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": R,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? v ? "4px" : 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: t,
                    bgcolor: R ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...E
                  },
                  children: /* @__PURE__ */ o(
                    Os,
                    {
                      name: m,
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
            Br,
            {
              count: f + s,
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
      $s,
      {
        anchorEl: p,
        onClose: () => S(null),
        placement: e ? "beside" : "above",
        width: e || ($ = x.current) == null ? void 0 : $.clientWidth,
        ...i
      }
    )
  ] });
}, cc = 120, lc = 300, Xn = Ce(ps), Kn = Ce(Wo), dc = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : t.value) ?? "";
}, uc = 'input, textarea, [contenteditable="true"]', br = (e) => {
  var t;
  (t = e == null ? void 0 : e.querySelector(uc)) == null || t.focus();
}, jn = (e) => e ? `Search (${e.join("")})` : "Search", fc = ({
  search: e,
  icon: t,
  mode: r,
  onExpand: n,
  autoFocus: s = !1,
  onAutoFocused: i,
  color: a,
  hoverColor: c,
  shortcutKeys: f
}) => {
  const l = kr(), m = d.useContext(Lt), h = d.useRef(null), [g, x] = d.useState(null);
  return d.useEffect(() => {
    r === "full" && s && (br(h.current), i == null || i());
  }, [r, s, i]), r === "full" ? /* @__PURE__ */ o(
    A,
    {
      ref: h,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : r === "popover" && m ? /* @__PURE__ */ o(
    hc,
    {
      search: e,
      icon: t,
      color: a,
      railTooltip: l,
      tooltip: jn(f)
    }
  ) : /* @__PURE__ */ y(
    A,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ o(
          Ve,
          {
            title: jn(f),
            placement: "right",
            arrow: !0,
            ...l,
            children: /* @__PURE__ */ o(
              Oe,
              {
                "aria-label": "Search",
                onClick: (p) => r === "expand" ? n == null ? void 0 : n() : x(p.currentTarget),
                sx: {
                  width: 44,
                  height: 44,
                  color: a,
                  borderRadius: "8px",
                  "&:hover": { bgcolor: c }
                },
                children: t ?? /* @__PURE__ */ o(Rr, {})
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          Ir,
          {
            open: !!g,
            anchorEl: g,
            onClose: () => x(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => br(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, hc = ({ search: e, icon: t, color: r, railTooltip: n, tooltip: s }) => {
  const i = qe().palette.mode === "dark";
  Ci(i, lr(r, i ? 0.3 : 0.35));
  const a = `rgb(${ko()})`, c = Ar(i ? "#1e2430" : "#ffffff"), f = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${fe}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: a
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${fe}px`,
      "&.Mui-focusVisible": { borderColor: a }
    }
  }, l = d.useRef(null), m = d.useRef(null), [h, g] = d.useState(!1), x = d.useRef(!1), p = d.useRef(void 0), S = d.useRef(void 0), R = () => {
    clearTimeout(p.current), clearTimeout(S.current);
  }, T = d.useCallback(() => {
    R(), x.current = !1, g(!1);
  }, []), v = () => {
    clearTimeout(S.current), h || (clearTimeout(p.current), p.current = setTimeout(
      () => g(!0),
      cc
    ));
  }, E = () => {
    clearTimeout(p.current), clearTimeout(S.current), S.current = setTimeout(() => {
      !x.current && !dc(m.current) && g(!1);
    }, lc);
  };
  return d.useEffect(() => R, []), d.useEffect(() => {
    if (!h)
      return;
    const $ = setTimeout(() => br(m.current)), w = (I) => {
      var q, W;
      const F = I.target;
      !((q = m.current) != null && q.contains(F)) && !((W = l.current) != null && W.contains(F)) && T();
    }, _ = (I) => {
      var F;
      I.key === "Escape" && (T(), (F = l.current) == null || F.focus());
    };
    return document.addEventListener("pointerdown", w), document.addEventListener("keydown", _), () => {
      clearTimeout($), document.removeEventListener("pointerdown", w), document.removeEventListener("keydown", _);
    };
  }, [h, T]), /* @__PURE__ */ y(
    A,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ o(
          Ve,
          {
            title: h ? "" : s,
            placement: "right",
            arrow: !0,
            ...n,
            children: /* @__PURE__ */ o(
              Oe,
              {
                ref: l,
                "aria-label": "Search",
                "aria-expanded": h,
                onMouseEnter: v,
                onMouseLeave: E,
                onClick: () => {
                  R(), x.current = !0, g(!0);
                },
                sx: {
                  width: ve,
                  height: ve,
                  color: r,
                  borderRadius: `${fe}px`
                },
                children: t ?? /* @__PURE__ */ o(
                  Rr,
                  {
                    sx: { fontSize: Jt }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          wr,
          {
            open: h,
            anchorEl: l.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ y(
              A,
              {
                ref: m,
                "data-testid": "sidebar-search-card",
                onMouseEnter: v,
                onMouseLeave: E,
                sx: {
                  position: "relative",
                  width: 320,
                  p: 1,
                  borderRadius: `${fe}px`
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
                        animation: `${Or} ${Xn.duration}ms ${Xn.easing} both`,
                        [Re]: { animation: "none" }
                      }
                    }
                  ),
                  /* @__PURE__ */ o(
                    A,
                    {
                      sx: {
                        position: "relative",
                        // The host's field, set into the glass: an outlined
                        // input or button becomes a recessed glass well.
                        // Classes repeat to outrank the host's own styles.
                        ...f,
                        animation: `${$r} ${Kn.duration}ms ${Kn.easing} 60ms both`,
                        [Re]: { animation: "none" }
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
}, pc = 80, mc = 300, gc = 32, xc = (e) => {
  const t = d.useRef(/* @__PURE__ */ new WeakSet()), r = d.useRef(void 0), n = d.useRef(void 0), [s, i] = d.useState(!1), [a, c] = d.useState(!1), [f, l] = d.useState(!1), m = d.useRef(null), h = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  d.useEffect(() => {
    if (!e) {
      h(), i(!1), c(!1), l(!1);
      return;
    }
    const p = (v) => {
      var $;
      if (v.pointerType !== "mouse")
        return;
      const E = v.clientX <= gc;
      E && (($ = m.current) == null || $.style.setProperty(
        "--edge-glow-y",
        `${v.clientY}px`
      )), l(E);
    }, S = () => l(!1), R = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, i(!1), c(!1);
      }, mc));
    }, T = (v) => {
      t.current.has(v) || R();
    };
    return document.addEventListener("mouseover", T), document.addEventListener("pointermove", p, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", R), document.documentElement.addEventListener("mouseleave", S), () => {
      h(), document.removeEventListener("mouseover", T), document.removeEventListener("pointermove", p), document.documentElement.removeEventListener(
        "mouseleave",
        R
      ), document.documentElement.removeEventListener(
        "mouseleave",
        S
      );
    };
  }, [e]);
  const g = {
    onMouseOver: (p) => {
      t.current.add(p.nativeEvent), clearTimeout(n.current), n.current = void 0, !s && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, i(!0);
      }, pc));
    },
    onFocus: (p) => {
      bc(p.target) && c(!0);
    },
    onBlur: (p) => {
      const S = p.relatedTarget;
      (!S || !p.currentTarget.contains(S)) && c(!1);
    },
    onKeyDown: (p) => {
      p.key === "Escape" && (c(!1), i(!1));
    }
  }, x = e && (s || a);
  return {
    shown: x,
    nearEdge: e && f && !x,
    glowRef: m,
    rootProps: g
  };
}, bc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, vc = 100, yc = () => {
  const e = d.useRef(null), t = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, s] = d.useState(!1), [i, a] = d.useState(!1), c = () => {
    clearTimeout(t.current), t.current = void 0;
  };
  return d.useEffect(() => {
    const l = (h) => {
      r.current.has(h) || (c(), s(!1));
    }, m = () => {
      c(), s(!1);
    };
    return document.addEventListener("mouseover", l), document.documentElement.addEventListener("mouseleave", m), () => {
      c(), document.removeEventListener("mouseover", l), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), d.useEffect(() => {
    if (!i)
      return;
    const l = (m) => {
      var h;
      (h = e.current) != null && h.contains(m.target) || a(!1);
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
        }, vc));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (l) => {
        const m = l.relatedTarget;
        m && !l.currentTarget.contains(m) && a(!1);
      },
      onKeyDown: (l) => {
        l.key === "Escape" && a(!1);
      }
    }
  };
}, wc = (e) => {
  const t = e == null ? void 0 : e.querySelector(":scope > aside");
  if (!t)
    return null;
  const r = t.querySelector("[data-rail-surface]") ?? t, { right: n, width: s } = t.getBoundingClientRect(), { top: i, height: a } = r.getBoundingClientRect();
  return s <= 0 || a <= 0 ? null : { left: n, top: i, height: a };
}, Sc = 300, nr = 288, Ec = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Rc = 18, Vn = 72, sr = 90, Ic = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", _c = 68, Yn = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Tc = typeof window > "u" ? Xt : si, _l = ({
  children: e,
  sidebarLinks: t = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: a = "rail",
  sidebarSubmenu: c = "expand",
  sidebarAutoHide: f = !1,
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: m,
  logo: h,
  onBrandClick: g,
  searchComponent: x,
  searchIcon: p,
  notificationsIcon: S,
  searchShortcut: R = !1,
  brandColor: T,
  contentPadding: v = ls,
  userMenuItems: E,
  sidebarBackgroundColor: $,
  sidebarHeaderBackgroundColor: w,
  groupAccentColor: _,
  activeSidebarForegroundColor: I,
  enableRefreshToken: F = !1,
  holdSessionSkeleton: q = !1,
  sessionSkeletonContent: W,
  activePath: G,
  onLinkClick: N,
  showProfile: K = !0,
  userName: O,
  userRole: L,
  userAvatar: b,
  userEmail: U,
  onLogout: H,
  showSettings: oe = !0,
  onSettingsClick: ie,
  onProfileClick: V,
  onAiUsageClick: J,
  showNotifications: se = !0,
  notificationCount: C = 0,
  NotificationSidebarContent: k,
  whatsNewCount: z = 0,
  onNotificationsClick: P,
  platforms: j,
  currentPlatformKey: be,
  onPlatformSelect: Fe,
  onVerify: we,
  alertProps: ee,
  style: Ze,
  sidebarStyles: he,
  contentStyles: re,
  accentColor: Ie,
  sidebarAccentColor: _e,
  sidebarActiveBackgroundColor: ge,
  sidebarGroupArrowColor: ae,
  sidebarForegroundColor: ce,
  contentBackgroundColor: We,
  theme: Se = "light",
  darkModeSelector: so,
  showThemeToggler: ft = !1,
  onThemeToggle: yt,
  GlobalChatSidebar: ht,
  useChatSidebar: pt,
  chatPanelMode: wt = "docked",
  chatPanelPosition: io = "right",
  chatPanelWidth: ao = 420,
  onChatClose: Po,
  showAssistant: rt = !1,
  assistantPlacement: St = "sidebar",
  assistantShortcut: co = "j",
  onAssistantClick: nt,
  assistantActive: kt = !1,
  assistantBusy: lo = !1,
  customNavbar: uo,
  customNavbarProps: Bo,
  redirectToLogin: mt,
  apiBaseUrl: Et
}) => {
  const Dt = qn(), pe = Zn(Dt.breakpoints.down("md")), zo = fn(
    () => $o(Wr(Se)),
    [Se]
  ), Je = Se === "dark", gt = Ie ?? "#01584f", Me = _e ?? gt, u = hs(
    typeof We == "object" ? We[Se] : We,
    Je
  ), M = a === "collapsible", Y = a === "panel", B = Y && s && !pe, X = a === "rail-labeled", le = M || X, de = fs(
    $,
    Je
  ), me = w ?? de, ne = ce ?? (Je ? "#ffffff" : Me), xt = _ ?? Zt(ne), Nt = w ? cr(me) : ne, zr = (D) => /* @__PURE__ */ o(
    Z,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: D,
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
  ), fo = T ?? Nt, [Hr, Ho] = it(
    null
  ), Go = ((j == null ? void 0 : j.length) ?? 0) > 1, ks = Jo(() => Ho(null), []), Ds = (D) => {
    Ho(null), Fe ? Fe(D) : D.key !== be && D.url && window.location.assign(D.url);
  }, Gr = (D) => Go ? /* @__PURE__ */ o(
    ic,
    {
      anchorEl: Hr,
      onClose: ks,
      platforms: j,
      currentKey: be,
      onSelect: Ds,
      accentColor: gt,
      glass: c === "flyout" && (M || Y) && !pe,
      children: D
    }
  ) : D, ho = Go ? (D) => Ho(D.currentTarget) : g, po = Go ? !!Hr : void 0, Uo = Gr(
    h ?? zr(fo)
  ), Ns = Gr(
    h ?? zr(T ?? ne)
  ), Xo = yc(), Pe = Fo(c, a), Ge = Pe || !Xo.expanded, Ue = s && !pe && Oi(f, c, a), st = xc(Ue), Ur = Pe ? "popover" : "expand", Xr = Pe ? Yt : jt, Kr = Pe ? "transparent" : de, jr = Pe && !w ? "transparent" : me, [Fs, Vr] = it(!1), Ws = Jo(() => Vr(!1), []), Qe = us({
    showSidebar: s,
    isMobile: pe,
    sidebarVariant: a,
    sidebarSubmenu: c,
    sidebarAutoHide: f
  }), [Yr, bt] = it(!1), [qr, Ko] = it(!1), Ae = pe && l === "bottom-bar", Zr = `calc(${Ms}px + env(safe-area-inset-bottom, 0px))`, [Ft, Jr] = it({ open: !1, tab: "notifications" }), Qr = () => Jr((D) => ({ ...D, open: !1 })), Ps = se && !!k, en = bo(null), [Bs, zs] = it(null), Wt = Jo(() => {
    const D = pe ? null : wc(en.current), Q = D && Ue ? { ...D, left: lt } : D;
    zs(
      (Ee) => Ee && Q && Ee.left === Q.left && Ee.top === Q.top && Ee.height === Q.height ? Ee : Q
    );
  }, [pe, Ue]);
  Xt(() => {
    if (Ft.open)
      return Wt(), window.addEventListener("resize", Wt), () => window.removeEventListener("resize", Wt);
  }, [Ft.open, Wt]);
  const [Hs, Gs] = it(!0), [Us, Xs] = it(!1), jo = pt == null ? void 0 : pt(), tn = (jo == null ? void 0 : jo.isOpen) ?? !1, on = wt === "floating" ? "floating" : "docked", Ks = on === "docked" && tn && ht && !pe ? ao : 0, mo = bo(we), rn = bo(!1), nn = fn(
    () => Ia(Et),
    [Et]
  );
  Xt(() => {
    mo.current = we;
  }, [we]);
  const Vo = bo(nt);
  Vo.current = nt;
  const Pt = rt && co ? co.toLowerCase() : null;
  Xt(() => {
    if (!Pt)
      return;
    const D = (Q) => {
      (Q.metaKey || Q.ctrlKey) && !Q.altKey && !Q.shiftKey && Q.key.toLowerCase() === Pt && Vo.current && (Q.preventDefault(), Vo.current());
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [Pt]);
  const sn = (D) => {
    const Q = H(D);
    Q instanceof Promise && Q.catch((Ee) => {
      console.error("Error in logout handler:", Ee);
    });
  };
  if (Tc(() => {
    (() => {
      var Q;
      try {
        const { isAuthenticated: Ee } = Ea();
        if (!Ee) {
          console.log("No session found, redirecting to login"), ro(), mt();
          return;
        }
        if (!rn.current) {
          const { user: zt, error: Zo } = Ra();
          if (zt && !Zo) {
            const ti = {
              name: zt.name || "",
              email: zt.email || "",
              profilePicture: zt.profilePicture || "",
              role: zt.role || ""
            };
            rn.current = !0, (Q = mo.current) == null || Q.call(mo, ti);
          } else
            Zo && console.error("Error getting user data:", Zo);
        }
        Xs(!0);
      } catch (Ee) {
        console.error("Error checking session:", Ee), ro(), mt();
      } finally {
        Gs(!1);
      }
    })();
  }, [mt]), Xt(() => {
    F && _a(nn, mt);
  }, [F, nn]), Hs || q)
    return /* @__PURE__ */ o(
      wa,
      {
        theme: Se,
        darkModeSelector: so,
        sidebarVariant: a,
        sidebarSubmenu: c,
        sidebarAutoHide: f,
        showSidebar: s,
        contentPadding: v,
        sidebarBackgroundColor: $,
        contentBackgroundColor: We,
        content: W
      }
    );
  if (!Us)
    return null;
  const Bt = x ?? (uo ? /* @__PURE__ */ o(uo, { ...Bo }) : null), js = (D) => {
    bt(!1), Ko(!1), Wt(), Jr({ open: !0, tab: D });
  }, Yo = k && (() => js("notifications")), Vs = C + z, an = {
    avatarColor: Me,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: E == null ? void 0 : E.map(
      (D) => D.onClick || !D.path ? D : { ...D, onClick: () => N == null ? void 0 : N(D.path) }
    ),
    showNotifications: se,
    notificationCount: C,
    whatsNewCount: z,
    onNotificationsClick: Yo,
    showProfile: K,
    userName: O,
    userRole: L,
    userAvatar: b,
    showSettings: oe,
    onSettingsClick: ie,
    showThemeToggler: ft,
    theme: Se,
    onThemeToggle: yt,
    onLogout: sn
  }, qo = (D) => /* @__PURE__ */ o(
    ac,
    {
      ...an,
      compact: D,
      color: ne,
      hoverColor: xt
    }
  ), cn = Pt ? [Yn() ? "⌘" : "Ctrl", Pt.toUpperCase()] : void 0, Ys = (D) => rt && St === "sidebar" ? /* @__PURE__ */ o(
    Mn,
    {
      variant: D ? "sidebar-icon" : "sidebar",
      onClick: nt,
      active: kt,
      busy: lo,
      shortcutKeys: cn,
      accentColor: ne
    }
  ) : null, qs = R ? [Yn() ? "⌘" : "Ctrl", R.toUpperCase()] : void 0, Zs = (D) => Bt ? /* @__PURE__ */ o(
    fc,
    {
      search: Bt,
      icon: p,
      mode: D,
      onExpand: () => {
        Xo.pin(), Vr(!0);
      },
      autoFocus: Fs,
      onAutoFocused: Ws,
      color: ne,
      hoverColor: xt,
      shortcutKeys: qs
    }
  ) : null, go = (D) => {
    const Q = Ys(D !== "full"), Ee = Zs(D);
    return Q || Ee ? /* @__PURE__ */ y(
      Kt,
      {
        spacing: Pe ? `${No}px` : 1.5,
        sx: { alignItems: D === "full" ? "stretch" : "center" },
        children: [
          Q,
          Pe && Q && Ee ? /* @__PURE__ */ o(
            Z,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Zt(ne)}`
              }
            }
          ) : null,
          Ee
        ]
      }
    ) : void 0;
  }, ln = () => /* @__PURE__ */ o(
    fr,
    {
      mainLinks: t,
      secondaryLinks: r,
      activePath: G,
      onLinkClick: N,
      showHeaderBar: M,
      logo: Uo,
      title: n,
      onBrandClick: ho,
      brandMenuOpen: po,
      brandColor: fo,
      headerBackgroundColor: M ? jr : void 0,
      headerForegroundColor: M ? Nt : void 0,
      activeAccentColor: Me,
      activeBackgroundColor: ge,
      groupArrowColor: ae,
      groupAccentColor: _,
      activeForegroundColor: I,
      foregroundColor: ce,
      surfaceBackgroundColor: Kr,
      flyoutSurfaceColor: de,
      collapsed: X || Ge,
      showLabels: X,
      expandedWidth: nr,
      collapsedWidth: X ? is : Xr,
      topContent: go(
        X ? "popover" : Ge ? Ur : "full"
      ),
      footer: qo(X || Ge),
      submenuMode: Pe ? "flyout" : "inline"
    }
  ), dn = (D) => Pe ? Js(D) : Qs(D), Js = (D) => /* @__PURE__ */ y(
    Z,
    {
      component: "aside",
      ...Ue ? st.rootProps : {},
      "data-auto-hide": Ue ? "true" : void 0,
      "data-shown": Ue ? String(st.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (Q) => Q.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...Ue ? {
          position: "fixed",
          left: 0,
          width: Yt + 2 * lt,
          pointerEvents: "none"
        } : {
          width: Qe,
          minWidth: Qe,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: u
        }
      },
      children: [
        Ue && /* @__PURE__ */ o(
          Z,
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Rc,
              pointerEvents: "auto"
            }
          }
        ),
        Ue && /* @__PURE__ */ o(
          Z,
          {
            ref: st.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(st.nearEdge),
            "aria-hidden": "true",
            sx: {
              "--edge-glow-y": "50%",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: Vn,
              pointerEvents: "none",
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${Vn}px ${sr}px at 0 var(--edge-glow-y), ${He(ne, Je ? 0.5 : 0.4)}, ${He(ne, 0)})`,
              opacity: st.nearEdge ? 1 : 0,
              transition: "opacity 200ms ease",
              // And a bright line along the edge beside it
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 3,
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${sr}px), ${He(ne, Je ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${sr}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ y(
          Z,
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            sx: {
              position: "absolute",
              top: lt,
              bottom: lt,
              left: lt,
              width: Yt,
              borderRadius: `${cs}px`,
              display: "flex",
              flexDirection: "column",
              ...Ue && {
                pointerEvents: st.shown ? "auto" : "none",
                opacity: st.shown ? 1 : 0,
                transform: st.shown ? "none" : `translateX(calc(-100% - ${2 * lt}px))`,
                transition: Ic,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...he
            },
            children: [
              /* @__PURE__ */ o(
                no,
                {
                  isDark: Je,
                  solid: de,
                  sx: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit"
                  }
                }
              ),
              /* @__PURE__ */ o(
                Z,
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
                  children: D
                }
              )
            ]
          }
        )
      ]
    }
  ), Qs = (D) => /* @__PURE__ */ o(
    Z,
    {
      component: "aside",
      sx: {
        width: jt,
        minWidth: jt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (Q) => Q.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ o(
        Z,
        {
          ...Pe ? {} : Xo.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ge ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Ge ? jt : nr,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: de,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Ge ? "none" : `4px 0 24px rgba(0, 0, 0, ${Je ? 0.5 : 0.12})`,
            transition: Ec,
            ...he
          },
          children: D
        }
      )
    }
  ), ei = ds(
    v,
    Dt
  ), Rt = pe ? null : Bs;
  return /* @__PURE__ */ o(Co, { theme: zo, children: /* @__PURE__ */ o(ns.Provider, { value: Me, children: /* @__PURE__ */ o(Lo.Provider, { value: de, children: /* @__PURE__ */ o(Ls.Provider, { value: S, children: /* @__PURE__ */ y(
    Z,
    {
      ref: en,
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Ze
      },
      children: [
        /* @__PURE__ */ o(ir, {}),
        pe && /* @__PURE__ */ o(
          Xa,
          {
            height: Io,
            onMenuClick: s && !Ae ? () => bt(!0) : void 0,
            appName: n,
            logo: Uo,
            onBrandClick: ho,
            brandMenuOpen: po,
            background: me,
            color: Nt,
            brandColor: fo,
            endContent: se ? /* @__PURE__ */ o(
              Br,
              {
                count: Vs,
                onClick: Yo,
                color: Nt,
                hoverColor: xt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !pe && X && /* @__PURE__ */ o(
          Z,
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
            children: ln()
          }
        ),
        s && !pe && M && dn(
          /* @__PURE__ */ y(De, { children: [
            ln(),
            (ee == null ? void 0 : ee.show) && !Ge && /* @__PURE__ */ o(Eo, { ...ee })
          ] })
        ),
        B && dn(
          /* @__PURE__ */ y(De, { children: [
            /* @__PURE__ */ o(
              rc,
              {
                mainLinks: t,
                secondaryLinks: r,
                activePath: G,
                onLinkClick: N,
                logo: Uo,
                title: n,
                onBrandClick: ho,
                brandMenuOpen: po,
                brandColor: fo,
                headerBackgroundColor: jr,
                headerForegroundColor: Nt,
                activeAccentColor: Me,
                activeBackgroundColor: ge,
                groupArrowColor: ae,
                groupAccentColor: _,
                activeForegroundColor: I,
                foregroundColor: ce,
                surfaceBackgroundColor: Kr,
                flyoutSurfaceColor: de,
                collapsed: Ge,
                expandedWidth: nr,
                collapsedWidth: Xr,
                topContent: go(
                  Ge ? Ur : "full"
                ),
                submenuMode: Pe ? "flyout" : "inline",
                color: ne,
                hoverColor: xt,
                avatarColor: Me,
                showProfile: K,
                userName: O,
                userEmail: U,
                userRole: L,
                userAvatar: b,
                showNotifications: se,
                notificationCount: C,
                onNotificationsClick: Ps ? Yo : P,
                whatsNewCount: z,
                onProfileClick: V,
                onAiUsageClick: J,
                menuItems: E,
                onLogout: sn,
                theme: Se,
                showThemeToggler: ft,
                onThemeToggle: yt
              }
            ),
            (ee == null ? void 0 : ee.show) && !Ge && /* @__PURE__ */ o(Eo, { ...ee })
          ] })
        ),
        s && !pe && !le && !Y && /* @__PURE__ */ o(
          hn,
          {
            variant: "permanent",
            sx: {
              width: Qe,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Qe,
                boxSizing: "border-box",
                bgcolor: u,
                borderRight: "none"
              },
              ...he
            },
            children: /* @__PURE__ */ y(
              Z,
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
                    Z,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ o(
                        Ao,
                        {
                          logo: Ns,
                          appName: n,
                          onClick: ho,
                          menuOpen: po,
                          color: T ?? ne,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  go("popover"),
                  /* @__PURE__ */ y(
                    Z,
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
                          Pa,
                          {
                            mainLinks: t,
                            secondaryLinks: r,
                            activePath: G,
                            onLinkClick: N,
                            accentColor: Me,
                            surfaceBackgroundColor: u,
                            railShowTitles: i
                          }
                        ),
                        (ee == null ? void 0 : ee.show) && /* @__PURE__ */ o(
                          Eo,
                          {
                            ...ee
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ o(Z, { sx: { py: 1.5 }, children: qo(!0) })
                ]
              }
            )
          }
        ),
        s && pe && /* @__PURE__ */ y(
          ai,
          {
            anchor: Ae ? "bottom" : "left",
            open: Yr,
            onOpen: () => bt(!0),
            onClose: () => bt(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (D) => D.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: de,
                  backgroundImage: "none",
                  ...Ae ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              Ae && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ o(
                Z,
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
                fr,
                {
                  mainLinks: t,
                  secondaryLinks: r,
                  activePath: G,
                  onLinkClick: (D) => {
                    N == null || N(D), bt(!1);
                  },
                  onLinkAction: () => bt(!1),
                  collapsed: !1,
                  expandedWidth: Ae ? "100%" : Sc,
                  activeAccentColor: Me,
                  activeBackgroundColor: ge,
                  groupArrowColor: ae,
                  groupAccentColor: _,
                  activeForegroundColor: I,
                  foregroundColor: ce,
                  surfaceBackgroundColor: de,
                  topInsetPx: Ae ? 8 : 0,
                  topContent: Ae ? void 0 : go("full"),
                  footer: Ae ? void 0 : qo(!1)
                }
              ),
              (ee == null ? void 0 : ee.show) && /* @__PURE__ */ o(Eo, { ...ee })
            ]
          }
        ),
        Ae && Bt && /* @__PURE__ */ o(
          Ua,
          {
            open: qr,
            onClose: () => Ko(!1),
            search: Bt
          }
        ),
        Ae && /* @__PURE__ */ o(
          Ga,
          {
            ...an,
            pinnedLinks: m,
            activePath: G,
            onLinkClick: N,
            onMenuClick: s ? () => bt(!0) : void 0,
            menuOpen: Yr,
            onSearchClick: Bt ? () => Ko(!0) : void 0,
            searchOpen: qr,
            showAssistant: rt,
            onAssistantClick: nt,
            assistantActive: kt,
            showProfile: K,
            background: de,
            color: ne,
            activeColor: Me,
            activeBackground: xt
          }
        ),
        /* @__PURE__ */ o(
          Z,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": ei,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": pe ? `${Io}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Qe ? `calc(100% - ${Qe}px)` : "100%",
              mt: pe ? `${Io}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Ae && {
                pb: `calc(var(--lumora-content-padding) + ${Zr})`
              },
              backgroundColor: u,
              ...re
            },
            children: e
          }
        ),
        ht && /* @__PURE__ */ o(
          $a,
          {
            open: tn,
            variant: on,
            position: io,
            width: ao,
            sidebarWidthPx: Qe,
            bottomOffsetPx: rt && St === "floating" ? _c : 0,
            fullScreen: pe,
            fullScreenBottom: Ae ? Zr : "0px",
            onClose: Po,
            children: /* @__PURE__ */ o(ht, {})
          }
        ),
        rt && St === "floating" && !Ae && /* @__PURE__ */ o(
          Mn,
          {
            variant: "floating",
            rightOffsetPx: Ks,
            shortcutKeys: cn,
            onClick: nt,
            active: kt,
            busy: lo
          }
        ),
        se && k && /* @__PURE__ */ o(
          hn,
          {
            anchor: Rt ? "left" : "right",
            open: Ft.open,
            onClose: Qr,
            slotProps: {
              paper: {
                sx: Rt ? {
                  width: 380,
                  maxWidth: `calc(100vw - ${Rt.left}px)`,
                  left: Rt.left,
                  top: Rt.top,
                  height: Rt.height
                } : {
                  width: 380,
                  maxWidth: "100vw"
                }
              }
            },
            children: /* @__PURE__ */ o(
              k,
              {
                onClose: Qr,
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
  ue as AUTH_ERROR_CODES,
  te as AuthError,
  fr as CollapsibleSidebar,
  Rl as FullBleedSection,
  xa as Kbd,
  wa as LumoraShellSkeleton,
  _l as LumoraWrapper,
  ro as clearAuthTokens,
  _l as default,
  Il as getAuthErrorMessage,
  oo as getAuthTokens,
  Ra as getCurrentUser,
  Wr as getDesignTokens,
  Ea as isAuthenticated,
  mr as logAuthError,
  _s as storeAuthTokens
};
