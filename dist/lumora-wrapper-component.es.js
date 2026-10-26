import { jsx as t, jsxs as w, Fragment as De } from "react/jsx-runtime";
import Wi from "@mui/icons-material/KeyboardArrowDownRounded";
import Fi from "@mui/icons-material/KeyboardArrowUpRounded";
import Pi from "@mui/icons-material/ChevronRightRounded";
import A from "@mui/material/Box";
import Zr from "@mui/material/Collapse";
import Ze from "@mui/material/Divider";
import xe from "@mui/material/IconButton";
import ao from "@mui/material/ListItemButton";
import be from "@mui/material/ListItemIcon";
import ze from "@mui/material/ListItemText";
import Ne from "@mui/material/Stack";
import ve from "@mui/material/Tooltip";
import ne from "@mui/material/Typography";
import { useTheme as He, createTheme as wo, alpha as Be, ThemeProvider as vo } from "@mui/material/styles";
import * as d from "react";
import { useMemo as Jr, useState as lt, useCallback as Qr, useRef as Go, useEffect as po, useLayoutEffect as Bi } from "react";
import it from "@mui/material/ButtonBase";
import { keyframes as cr } from "@emotion/react";
import lr from "@mui/material/Fade";
import dr from "@mui/material/Popper";
import { useTheme as kn, CssBaseline as qo, GlobalStyles as zi, Box as X, useMediaQuery as Wn, Stack as Pt, Skeleton as Me, Drawer as en, SwipeableDrawer as Hi } from "@mui/material";
import tn from "axios";
import Gi from "@mui/material/Card";
import Ui from "@mui/material/CardContent";
import Fn from "@mui/material/Button";
import Ki from "@mui/icons-material/AutoAwesomeRounded";
import Xi from "@mui/material/Grow";
import ur from "@mui/material/Paper";
import ji from "@mui/material/Slide";
import Vi from "@mui/material/ListSubheader";
import nt from "@mui/material/MenuItem";
import fr from "@mui/material/MenuList";
import Pn from "@mui/icons-material/MenuRounded";
import hr from "@mui/icons-material/SearchRounded";
import Bn from "@mui/icons-material/LogoutRounded";
import zn from "@mui/icons-material/NotificationsNoneOutlined";
import Yi from "@mui/icons-material/SettingsOutlined";
import qi from "@mui/material/Avatar";
import Zi from "@mui/material/Menu";
import on from "@mui/material/ToggleButton";
import Ji from "@mui/material/ToggleButtonGroup";
import Qi from "@mui/material/Drawer";
import es from "@mui/material/AppBar";
import ts from "@mui/material/Toolbar";
import Hn from "@mui/material/Badge";
import os from "@mui/icons-material/DarkModeOutlined";
import rs from "@mui/icons-material/LightModeOutlined";
import ns from "@mui/icons-material/SettingsBrightnessOutlined";
import pr from "@mui/material/Popover";
import is from "@mui/icons-material/CheckRounded";
const yo = ({
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
  }, u = /* @__PURE__ */ w(De, { children: [
    o ? /* @__PURE__ */ t(
      ne,
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
    it,
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
      children: u
    }
  ) : /* @__PURE__ */ t(Ne, { direction: "row", "data-testid": s, sx: a, children: u });
}, Zo = !1, Et = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, wt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, yt = (e, o) => e ? `${e}/${o.text}` : o.text, ot = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => ot(n, o))) ?? !1 : !1;
}, Pe = (e, o) => !!(o && e.path === o), mr = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return wt(r) ? mr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Jo = (e) => {
  const o = Eo(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((c) => {
    const a = c / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, Gt = (e) => {
  const o = Eo(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, Qo = (e, o) => {
  const r = Eo(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, Eo = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Gn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), gr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", ss = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", as = cr`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, ye = "@media (prefers-reduced-motion: reduce)", ee = 6, xr = "9, 193, 174", Un = d.createContext(
  void 0
), Ro = d.createContext(
  void 0
), br = (e) => d.useContext(Ro) ?? e, Io = () => {
  const e = d.useContext(Un), o = e ? Eo(e) : null;
  return o ? o.join(", ") : xr;
}, cs = (e, o, r = xr) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${ss(e)}, 0 0 0 1px ${gr(e)}`
}), _o = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: gr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${ee}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), vr = cr`
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
`, yr = cr`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Kn = (e, o = xr, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), So = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: Qo(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${Qo(e, 0.45)}`
}, ls = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${gr(e)}`;
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
}, ds = 100, Xn = 80, mo = 56, Bt = 72, Ht = 60, ae = 44, Ut = 20, Sr = 4, ft = 8, jn = ee, Vn = { xs: 2, md: "18px" }, Yn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, To = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), us = (e, o, r) => e && To(o, r), qn = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n,
  sidebarAutoHide: i = !1
}) => !e || o ? 0 : r === "rail-labeled" ? Xn : To(n, r) ? i ? 0 : Ht + 2 * ft : r === "collapsible" || r === "panel" ? Bt : ds, Zn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Jn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Qn = { stiffness: 320, damping: 24 }, ei = { stiffness: 320, damping: 28 }, wr = { stiffness: 520, damping: 20 }, Er = { stiffness: 380, damping: 36 }, Co = { stiffness: 260, damping: 28 }, fs = "cubic-bezier(0.32, 1.28, 0.52, 1)", hs = 420, rn = 60, ps = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), nn = /* @__PURE__ */ new Map(), he = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = nn.get(n);
  if (i)
    return i;
  if (!ps)
    return { easing: fs, duration: hs };
  const s = 1 / 600;
  let c = 0, a = 0, u = 0, l = 1 / rn;
  const m = [0];
  for (; u < 3; ) {
    const h = (-e * (c - 1) - o * a) / r;
    if (a += h * s, c += a * s, u += s, u >= l && (m.push(c), l += 1 / rn, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const p = {
    easing: `linear(${m.map((h) => Number(h.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return nn.set(n, p), p;
}, Kt = (e) => !!(e && typeof e.animate == "function"), Rt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, ms = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, gs = (e, o = 1.14) => {
  if (!Kt(e) || Rt())
    return;
  const r = he(wr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, Xt = "data-rail-item", ti = `[${Xt}], button, [role="button"]`, It = d.createContext(!1), Rr = () => {
  const e = d.useContext(It), o = He(), r = d.useContext(Ro);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: _o(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, rt = he(Er), Ir = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  pinSelector: s,
  pinKey: c = null
}) => {
  const a = d.useRef(null), u = Io(), [l, m] = d.useState(null), p = d.useRef(null), h = d.useRef(null), x = (S, y) => {
    h.current = y;
    const b = y.getBoundingClientRect(), _ = S.getBoundingClientRect(), F = n ?? b.width, M = n ?? b.height, L = {
      top: Math.round(b.top - _.top + (b.height - M) / 2),
      left: Math.round(b.left - _.left + (b.width - F) / 2),
      width: Math.round(F),
      height: Math.round(M)
    };
    m(
      (O) => O && O.visible && O.top === L.top && O.left === L.left && O.width === L.width && O.height === L.height ? O : { ...L, visible: !0, instant: !(O != null && O.visible) }
    );
  }, g = (S, y) => {
    var _;
    const b = (_ = y == null ? void 0 : y.closest) == null ? void 0 : _.call(y, r);
    return b && S.contains(b) ? b : null;
  }, E = (S) => {
    if (!e)
      return;
    const y = g(S.currentTarget, S.target);
    y && x(S.currentTarget, y);
  }, R = (S) => {
    if (!e)
      return;
    const y = g(S.currentTarget, S.target);
    y && S.target.matches(":focus-visible") && x(S.currentTarget, y);
  }, T = () => {
    var b;
    const S = (b = a.current) == null ? void 0 : b.parentElement, y = s && (S == null ? void 0 : S.querySelector(s));
    return S && y ? { container: S, item: y } : null;
  }, v = () => {
    const S = T();
    if (S) {
      x(S.container, S.item);
      return;
    }
    h.current = null, m((y) => y != null && y.visible ? { ...y, visible: !1 } : y);
  };
  d.useEffect(() => {
    var y, b;
    if (!e)
      return;
    const S = T();
    S ? x(S.container, S.item) : (b = (y = a.current) == null ? void 0 : y.parentElement) != null && b.matches(":hover") || v();
  }, [e, c]);
  const I = (S) => {
    const y = S.relatedTarget;
    (!y || !S.currentTarget.contains(y)) && (S.currentTarget.matches(":hover") || v());
  };
  return d.useEffect(() => {
    const S = a.current;
    if (!(l != null && l.visible)) {
      p.current = null;
      return;
    }
    const y = p.current;
    if (p.current = l.top, !Kt(S) || Rt())
      return;
    if (y === null || l.instant) {
      S.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: rt.duration,
        easing: rt.easing
      });
      return;
    }
    const b = Math.min(Math.abs(l.top - y) / 600, 0.08);
    b && S.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - b / 2} ${1 + b}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: rt.duration, easing: "ease-out" }
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
          ...Kn(o, u),
          borderRadius: `${i}px`,
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
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${rt.duration}ms ${rt.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
          [ye]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: E,
      onMouseLeave: v,
      onFocus: R,
      onBlur: I,
      onScrollCapture: v
    } : {}
  };
}, xs = (e, o, r = null) => {
  const n = Ir({
    enabled: e,
    isDark: o,
    selector: ti,
    // The rail's buttons exactly, so the hover sits on the item
    size: ae,
    radius: ee,
    pinSelector: `[${Xt}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? d.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, bs = (e, o) => {
  let r = 0, n = 0, i = e;
  for (; i && i !== o; ) {
    r += i.offsetTop, n += i.offsetLeft;
    const a = i.offsetParent;
    for (let u = i.parentElement; u && u !== o && (r -= u.scrollTop, n -= u.scrollLeft, u !== a); u = u.parentElement)
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
}, vs = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const i = d.useRef(null), [s, c] = d.useState(null), a = d.useRef(null), u = d.useCallback(
    (m) => {
      const p = n.current;
      if (!e || !p)
        return;
      const h = p.querySelector(
        `[${Xt}][data-active="true"]`
      );
      if (!h) {
        c(
          (g) => g != null && g.visible ? { ...g, visible: !1 } : g
        );
        return;
      }
      const x = bs(h, p);
      c(
        (g) => g && g.visible && g.top === x.top && g.left === x.left && g.width === x.width && g.height === x.height ? g : {
          ...x,
          visible: !0,
          instant: m || !(g != null && g.visible)
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
    let p = 0;
    const h = () => {
      cancelAnimationFrame(p), p = requestAnimationFrame(() => u(!1));
    }, x = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    x == null || x.observe(m);
    const g = typeof MutationObserver > "u" ? null : new MutationObserver(h);
    return g == null || g.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(p), x == null || x.disconnect(), g == null || g.disconnect();
    };
  }, [e, n, u]), d.useEffect(() => {
    const m = i.current;
    if (!(s != null && s.visible)) {
      a.current = null;
      return;
    }
    const p = a.current;
    if (a.current = s.top, p === null || s.instant || !Kt(m) || Rt())
      return;
    const h = Math.min(Math.abs(s.top - p) / 600, 0.08);
    h && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - h / 2} ${1 + h}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: rt.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    A,
    {
      ref: i,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...So(r, o),
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
        transition: s.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${rt.duration}ms ${rt.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [ye]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, ys = 1.6, sn = 110, an = 110, co = he(Er), Ss = (e) => e >= sn ? 0 : (1 + Math.cos(Math.PI * e / sn)) / 2, oi = (e, {
  enabled: o,
  axis: r,
  itemSelector: n,
  glyphSelector: i,
  transition: s,
  maxScale: c = ys,
  carrierSelector: a
}) => {
  const u = d.useRef(0), l = d.useRef(
    /* @__PURE__ */ new WeakMap()
  ), m = d.useRef(/* @__PURE__ */ new Set()), p = d.useRef(/* @__PURE__ */ new Set()), h = s ? `, ${s}` : "", x = (y) => a ? y.closest(a) : null, g = (y) => {
    var F;
    const [b = "0", _ = "0"] = (((F = x(y)) == null ? void 0 : F.style.translate) ?? "").split(" ").filter(Boolean);
    return r === "x" ? parseFloat(b) || 0 : parseFloat(_) || 0;
  }, E = (y) => {
    const b = y.getBoundingClientRect();
    return (r === "x" ? b.left + b.width / 2 : b.top + b.height / 2) - g(y);
  }, R = (y) => {
    const b = y.getBoundingClientRect();
    return Array.from(y.querySelectorAll(n)).filter((_) => {
      const F = _.getBoundingClientRect(), M = E(_), L = r === "x" ? M : F.left + F.width / 2, O = r === "x" ? F.top + F.height / 2 : M;
      return F.width > 0 && L >= b.left && L <= b.right && O >= b.top && O <= b.bottom;
    }).map((_) => ({
      item: _,
      glyph: i ? _.querySelector(i) : _
    })).filter(
      (_) => _.glyph !== null
    );
  }, T = (y, b) => {
    if (b === y)
      return c;
    let _ = l.current.get(b);
    if (_ === void 0) {
      const L = Number(b.style.scale) || 1, O = b.getBoundingClientRect();
      _ = { width: O.width / L, height: O.height / L }, l.current.set(b, _);
    }
    if (!(_.width > 0 && _.height > 0))
      return 1;
    const F = y.getBoundingClientRect(), M = Math.min(
      F.width / _.width,
      F.height / _.height
    );
    return Math.max(1, Math.min(M, c));
  }, v = () => {
    var y;
    cancelAnimationFrame(u.current), m.current.forEach((b) => {
      b.style.transition = `scale ${co.duration}ms ${co.easing}${h}`, b.style.scale = "";
    }), m.current.clear(), p.current.forEach((b) => {
      b.style.transition = `translate ${co.duration}ms ${co.easing}`, b.style.translate = "";
    }), p.current.clear(), (y = e.current) == null || y.style.removeProperty("--dock-spread");
  }, I = (y, b, _) => {
    const F = r === "x" ? b : _, M = R(y).map(({ item: O, glyph: C }) => {
      const K = E(O), j = 1 + (T(O, C) - 1) * Ss(Math.abs(F - K));
      C.style.transition = `scale ${an}ms ease-out${h}`, j > 1.001 ? (C.style.scale = j.toFixed(3), m.current.add(C)) : m.current.has(C) && (C.style.scale = "", m.current.delete(C));
      const k = r === "x" ? O.offsetWidth : O.offsetHeight;
      return { item: O, centre: K, growth: (j - 1) * k };
    });
    if (!a)
      return;
    const L = M.reduce((O, { growth: C }) => O + C, 0);
    y.style.setProperty("--dock-spread", `${L.toFixed(1)}px`), M.forEach(({ item: O, centre: C, growth: K }) => {
      const j = x(O);
      if (!j)
        return;
      const k = M.reduce(
        (oe, ie) => ie.centre < C ? oe + ie.growth : oe,
        K / 2
      );
      j.style.transition = `translate ${an}ms ease-out`, Math.abs(k) > 0.1 ? (j.style.translate = r === "x" ? `${k.toFixed(1)}px 0` : `0 ${k.toFixed(1)}px`, p.current.add(j)) : p.current.has(j) && (j.style.translate = "", p.current.delete(j));
    });
  }, $ = (y) => {
    if (y.pointerType && y.pointerType !== "mouse" || Rt())
      return;
    const b = y.currentTarget, { clientX: _, clientY: F } = y;
    cancelAnimationFrame(u.current), u.current = requestAnimationFrame(() => {
      const M = b.getBoundingClientRect(), L = r === "x" ? F : _, [O, C] = r === "x" ? [M.top, M.bottom] : [M.left, M.right];
      if (L < O || L > C) {
        v();
        return;
      }
      I(b, _, F);
    });
  }, S = (y) => {
    const b = e.current;
    if (!o || !b || Rt())
      return;
    const _ = y.getBoundingClientRect();
    I(b, _.left + _.width / 2, _.top + _.height / 2);
  };
  return d.useEffect(() => {
    o || v();
  }, [o]), d.useEffect(() => () => cancelAnimationFrame(u.current), []), {
    containerProps: o ? { onPointerMove: $, onPointerLeave: v, onScrollCapture: v } : {},
    swellOn: S,
    settle: v
  };
}, Ie = 52, Uo = 36, ws = Ie / 2, cn = "[data-flyout-tile]", er = 4, Es = 16, Rs = 104, gt = 6, ri = "background 160ms ease, color 160ms ease, transform 120ms ease", tr = 10, ni = 10, Is = 18, _s = 1.08, Ts = 1190, Cs = 1195, ln = he(Qn), St = he(Er), dn = he(Co), un = 8192, As = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const s = Math.min(i, r / 2, n / 2), c = e + r, a = o + n, u = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${un} V ${un} H 0 Z M ${e + s} ${o} H ${c - s} ${u} ${c} ${o + s} V ${a - s} ${u} ${c - s} ${a} H ${e + s} ${u} ${e} ${a - s} V ${o + s} ${u} ${e + s} ${o} Z')`;
}, Os = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: i,
  activePath: s,
  focusFirst: c = !1,
  onNavigate: a,
  onClose: u,
  panelProps: l,
  accentColor: m,
  activeBackgroundColor: p,
  activeForegroundColor: h,
  solidSurface: x
}) => {
  const g = He(), E = g.palette.mode === "dark", R = !!(e && r), T = d.useRef(null);
  e && o && (T.current = { group: e, key: o });
  const v = T.current, I = d.useMemo(() => r ? {
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
  } : null, [r, n]), $ = d.useRef(I);
  I && ($.current = I), d.useEffect(() => {
    r && gs(r, _s);
  }, [r]);
  const [S, y] = d.useState(!1);
  d.useEffect(() => {
    if (!R) {
      y(!1);
      return;
    }
    let W = 0;
    const G = requestAnimationFrame(() => {
      W = requestAnimationFrame(() => y(!0));
    });
    return () => {
      cancelAnimationFrame(G), cancelAnimationFrame(W);
    };
  }, [R]);
  const b = d.useMemo(
    () => v ? mr(v.group.subitems, v.group.icon) : [],
    [v]
  ), _ = d.useRef(null), F = oi(_, {
    enabled: R,
    axis: "x",
    itemSelector: cn,
    transition: ri,
    // Grown as far as the rail's icons, so the neighbours make room
    carrierSelector: '[role="menuitem"]'
  }), M = d.useRef([]), [L, O] = d.useState([]);
  d.useLayoutEffect(() => {
    const W = () => {
      const H = b.map((Y, V) => {
        var de, ce;
        return [
          ((de = M.current[V]) == null ? void 0 : de.offsetWidth) ?? 0,
          ((ce = M.current[V]) == null ? void 0 : ce.offsetHeight) ?? 0
        ];
      });
      O(
        (Y) => Y.length === H.length && Y.every(([V, de], ce) => V === H[ce][0] && de === H[ce][1]) ? Y : H
      );
    };
    if (W(), typeof ResizeObserver > "u")
      return;
    const G = new ResizeObserver(W);
    return M.current.slice(0, b.length).forEach((H) => H && G.observe(H)), () => G.disconnect();
  }, [b]);
  const C = Ms(
    L.map(([W]) => W),
    b.length
  ), K = Math.max(Es, ...L.map(([, W]) => W)), j = d.useRef([]), k = b.findIndex(
    ({ sub: W }) => Pe(W, s)
  ), [oe, ie] = d.useState(0);
  d.useEffect(() => {
    ie(Math.max(k, 0));
  }, [o]), d.useEffect(() => {
    if (!R || !c)
      return;
    const W = setTimeout(() => {
      var G;
      return (G = j.current[0]) == null ? void 0 : G.focus();
    });
    return () => clearTimeout(W);
  }, [R, c, o]);
  const _e = (W) => {
    var H;
    const G = Math.max(0, Math.min(W, b.length - 1));
    ie(G), (H = j.current[G]) == null || H.focus();
  }, Ge = (W, G) => {
    var H;
    switch (W.key) {
      case "ArrowRight":
        _e(G + 1);
        break;
      case "ArrowLeft":
        G === 0 ? u(!0) : _e(G - 1);
        break;
      case " ":
        (H = j.current[G]) == null || H.click();
        break;
      case "Home":
        _e(0);
        break;
      case "End":
        _e(b.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    W.preventDefault();
  }, Te = g.palette.text.primary, Ce = E ? g.palette.text.primary : m;
  return /* @__PURE__ */ w(De, { children: [
    /* @__PURE__ */ t(lr, { in: R, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
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
          left: i ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...i ? { clipPath: As(i) } : {},
          zIndex: Ts,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: E ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)"
        }
      }
    ) }),
    /* @__PURE__ */ t(
      dr,
      {
        open: R,
        anchorEl: I ?? $.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Both rows centred on the rail icon, a gap from the rail
          {
            name: "offset",
            options: { offset: [0, tr] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Cs,
          transition: S ? `transform ${St.duration}ms ${St.easing}` : "none",
          [ye]: { transition: "none" }
        },
        children: ({ TransitionProps: W }) => /* @__PURE__ */ w(
          $s,
          {
            in: (W == null ? void 0 : W.in) ?? R,
            onEnter: W == null ? void 0 : W.onEnter,
            onExited: W == null ? void 0 : W.onExited,
            panelProps: l,
            groupText: v == null ? void 0 : v.group.text,
            children: [
              v ? /* @__PURE__ */ t(
                A,
                {
                  "aria-hidden": !0,
                  "data-testid": "sidebar-flyout-heading",
                  sx: {
                    // Above the tiles, so they stay centred on the
                    // rail icon; the row's name already labels it
                    position: "absolute",
                    bottom: "100%",
                    left: ni,
                    mb: "2px",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    // The pages' own name colour
                    color: _o(E).color
                  },
                  children: v.group.text
                },
                `${v.key}-heading`
              ) : null,
              v ? /* @__PURE__ */ t(
                A,
                {
                  ref: _,
                  role: "menu",
                  "aria-label": v.group.text,
                  ...F.containerProps,
                  onBlur: (G) => {
                    G.currentTarget.contains(
                      G.relatedTarget
                    ) || F.settle();
                  },
                  sx: {
                    position: "relative",
                    width: C.width,
                    height: Ie + er + K,
                    // The panel stretches as the dock pushes
                    // the pages along, as the Dock's shelf does
                    mr: "var(--dock-spread, 0px)",
                    transition: `margin-right ${St.duration}ms ${St.easing}`,
                    [ye]: { transition: "none" }
                  },
                  children: b.map(({ sub: G, icon: H }, Y) => /* @__PURE__ */ t(
                    si,
                    {
                      ref: (V) => {
                        j.current[Y] = V;
                      },
                      nameRef: (V) => {
                        M.current[Y] = V;
                      },
                      tileLeft: C.tiles[Y],
                      nameLeft: C.names[Y],
                      nameRowPx: K,
                      sub: G,
                      icon: H,
                      index: Y,
                      active: Pe(
                        G,
                        s
                      ),
                      tabIndex: Y === oe ? 0 : -1,
                      onClick: (V) => {
                        Et(V) && (V.preventDefault(), a(G.path), u());
                      },
                      onKeyDown: (V) => Ge(V, Y),
                      onFocus: (V) => {
                        ie(Y);
                        const de = V.currentTarget.querySelector(
                          cn
                        );
                        de && V.currentTarget.matches(
                          ":focus-visible"
                        ) && F.swellOn(de);
                      },
                      accentColor: m,
                      activeBackgroundColor: p,
                      activeForegroundColor: h,
                      labelColor: Te,
                      iconColor: Ce,
                      surface: x,
                      isDark: E
                    },
                    G.path
                  ))
                },
                v.key
              ) : null
            ]
          }
        )
      }
    )
  ] });
}, $s = ({
  in: e,
  onEnter: o,
  onExited: r,
  panelProps: n,
  groupText: i,
  children: s
}) => {
  const c = d.useRef(null), a = (u) => {
    c.current = u;
    const { ref: l } = n;
    typeof l == "function" ? l(u) : l && (l.current = u);
  };
  return d.useLayoutEffect(() => {
    const u = c.current;
    if (ms(u), e) {
      o == null || o(), Kt(u) && !Rt() && u.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: dn.duration, easing: dn.easing }
      );
      return;
    }
    if (!Kt(u)) {
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
      "data-group": i,
      sx: {
        position: "relative",
        // No surface of its own: the scrim's gradient sits behind it.
        // A tile the dock grows pops out past it.
        p: `${ni}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -tr - 2,
          width: tr + 2
        }
      },
      children: s
    }
  );
}, ii = (e) => e % 2 === 1, Ms = (e, o) => {
  const r = [], n = [];
  let i = -gt, s = -gt, c = -gt;
  for (let a = 0; a < o; a += 1) {
    const u = e[a] || Ie, l = !ii(a), m = l ? Ie : u, p = l ? u : Ie, h = Math.max(
      i + gt + m / 2,
      s + gt + p / 2,
      c + gt + Ie / 2
    );
    i = h + m / 2, s = h + p / 2, c = h + Ie / 2, r.push(Math.round(h - Ie / 2)), n.push(Math.round(h - u / 2));
  }
  return { tiles: r, names: n, width: Math.round(Math.max(i, s, 0)) };
}, si = d.forwardRef(
  ({
    nameRef: e,
    tileLeft: o,
    nameLeft: r,
    nameRowPx: n,
    sub: i,
    icon: s,
    index: c,
    active: a,
    tabIndex: u,
    onClick: l,
    onKeyDown: m,
    onFocus: p,
    accentColor: h,
    activeBackgroundColor: x,
    activeForegroundColor: g,
    labelColor: E,
    iconColor: R,
    surface: T,
    isDark: v
  }, I) => {
    const $ = ii(c), S = _o(v, T), y = {
      animation: `${as} ${ln.duration}ms ${ln.easing} both`,
      animationDelay: `${c * Is}ms`,
      [ye]: { animation: "none" }
    }, b = {
      background: x ?? h,
      color: g,
      "& .MuiSvgIcon-root": { color: g }
    }, _ = {
      background: `color-mix(in srgb, ${h} ${v ? 20 : 12}%, ${T})`
    }, F = v ? S.color : h, M = {
      "& [data-flyout-tile]": a ? {} : _,
      "& [data-flyout-name]": { color: F, fontWeight: 600 }
    }, L = {
      ...S,
      border: "none",
      // Lifted a little more than a resting label: they float over
      // the page
      boxShadow: v ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)"
    };
    return /* @__PURE__ */ w(
      it,
      {
        ref: I,
        component: "a",
        href: i.path,
        role: "menuitem",
        tabIndex: u,
        "aria-current": a ? "page" : void 0,
        "data-testid": `sidebar-subitem-${i.text}`,
        "data-active": a ? "true" : "false",
        onClick: l,
        onKeyDown: m,
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
          color: E,
          textDecoration: "none",
          "&:hover": M,
          "&.Mui-focusVisible": {
            ...M,
            "& [data-flyout-tile]": {
              ...a ? {} : _,
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
              "data-flyout-bridge": "",
              "aria-hidden": !0,
              sx: {
                left: o,
                top: 0,
                width: Ie,
                height: "100%"
              }
            }
          ),
          /* @__PURE__ */ t(
            A,
            {
              "data-flyout-tile": "",
              sx: {
                ...L,
                left: o,
                top: $ ? n + er : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: Ie,
                height: Ie,
                p: 0,
                borderRadius: `${ws}px`,
                // Grows out of the row, away from its name
                transformOrigin: $ ? "center top" : "center bottom",
                transition: `scale ${St.duration}ms ${St.easing}, ${ri}`,
                "& .MuiSvgIcon-root": {
                  fontSize: Uo,
                  color: R,
                  transition: "color 160ms ease"
                },
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                '& [role="img"], & [role="img"] > img': {
                  width: Uo,
                  height: Uo
                },
                ...a ? b : {},
                ...y
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
                top: $ ? 0 : Ie + er,
                height: n,
                display: "flex",
                // Held against its own tile, not floating mid-row
                alignItems: $ ? "flex-end" : "flex-start"
              },
              children: /* @__PURE__ */ t(
                A,
                {
                  component: "span",
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": i.text,
                  sx: {
                    // No card of its own: text on the panel
                    color: S.color,
                    px: 1,
                    py: 0,
                    fontSize: "0.75rem",
                    lineHeight: "16px",
                    // A long name wraps onto a second line, split
                    // evenly, so it stays as compact as its tile
                    maxWidth: Rs,
                    textAlign: "center",
                    textWrap: "balance",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
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
                    ...y
                  },
                  children: i.text
                }
              )
            }
          )
        ]
      }
    );
  }
);
si.displayName = "FlyoutTile";
const Ls = 50, Ds = 250, Ns = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const i = d.useRef(/* @__PURE__ */ new Map()), s = d.useRef(null), c = d.useRef(void 0), a = d.useRef(void 0), u = () => {
    clearTimeout(c.current), c.current = void 0;
  }, l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = (T, v, I = !1) => {
    u(), l(), r({ key: T, pinned: v, focusFirst: I });
  }, p = d.useCallback((T = !1) => {
    var I, $;
    u(), l();
    const v = (I = n.current) == null ? void 0 : I.key;
    r(null), T && v && (($ = i.current.get(v)) == null || $.focus());
  }, []), h = () => {
    u(), !(!n.current || n.current.pinned) && (l(), a.current = setTimeout(() => p(), Ds));
  };
  d.useEffect(() => {
    e || p();
  }, [e, p]), d.useEffect(
    () => () => {
      u(), l();
    },
    []
  );
  const x = o !== null;
  return d.useEffect(() => {
    if (!x)
      return;
    const T = ($) => {
      var y;
      const S = $;
      return S ? (y = s.current) != null && y.contains(S) ? !0 : [...i.current.values()].some((b) => b.contains(S)) : !1;
    }, v = ($) => {
      T($.target) || p();
    }, I = ($) => {
      var S;
      $.key === "Escape" && p(
        !!((S = s.current) != null && S.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", I), () => {
      document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", I);
    };
  }, [x, p]), {
    state: o,
    close: p,
    triggerProps: (T) => ({
      ref: (v) => {
        v ? i.current.set(T, v) : i.current.delete(T);
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
        u(), c.current = setTimeout(
          () => m(T, !1),
          Ls
        );
      },
      onMouseLeave: h,
      onClick: (v) => {
        if (v.detail === 0) {
          m(T, !0, !0);
          return;
        }
        const I = n.current;
        (I == null ? void 0 : I.key) === T && I.pinned ? p() : m(T, !0);
      },
      onKeyDown: (v) => {
        v.key === "ArrowRight" && (v.preventDefault(), m(T, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: l,
      onMouseLeave: h
    },
    onRailLeafEnter: () => {
      u(), n.current && !n.current.pinned && p();
    },
    getTrigger: (T) => i.current.get(T) ?? null
  };
}, ks = 264, Ws = 72, fn = 64, lo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Fs = 16, Ps = 14, Bs = 4, zs = 2.5, hn = "0.7rem", pn = 22, mn = he(wr), dt = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
  const s = d.useRef(null), [c, a] = d.useState(!1), u = d.useCallback(() => {
    const l = s.current;
    l && a(l.scrollWidth > l.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    u();
  }, [u, e]), d.useEffect(() => {
    const l = s.current;
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
}, Hs = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, Gs = ({
  open: e,
  size: o = Fs
}) => e ? /* @__PURE__ */ t(Fi, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Wi, { sx: { fontSize: o, opacity: 0.75 } }), gn = ({ open: e }) => /* @__PURE__ */ t(
  Pi,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), uo = 600, ut = `${Sr}px`, go = (Ht - ae) / 2, Us = (e) => {
  const o = Math.max(0, e - go);
  return {
    pl: `${Math.max(0, go - o)}px`,
    pr: `${Math.max(0, go - e)}px`
  };
};
function Ks(e, o) {
  const [r, n] = d.useState(0);
  return d.useLayoutEffect(() => {
    const i = e.current;
    if (!o || !i) {
      n(0);
      return;
    }
    const s = () => {
      const a = getComputedStyle(i), u = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth);
      n(Math.max(0, i.offsetWidth - i.clientWidth - u));
    };
    if (s(), typeof ResizeObserver > "u")
      return;
    const c = new ResizeObserver(s);
    return c.observe(i), i.firstElementChild && c.observe(i.firstElementChild), () => c.disconnect();
  }, [e, o]), r;
}
const fo = 8;
function Xs(e, o, r) {
  d.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const i = (u) => {
      const l = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((x) => x.offsetHeight > 0).pop();
      if (!l)
        return;
      const m = n.getBoundingClientRect(), p = l.getBoundingClientRect();
      let h = 0;
      p.top < m.top + fo ? h = p.top - m.top - fo : p.bottom > m.bottom - fo && (h = p.bottom - m.bottom + fo), h !== 0 && n.scrollBy({ top: h, behavior: u });
    }, s = requestAnimationFrame(() => i("smooth")), c = window.setTimeout(() => i("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => i("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(s), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const or = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: i,
  logo: s,
  title: c,
  onBrandClick: a,
  brandMenuOpen: u,
  showHeaderBar: l = !1,
  headerBackgroundColor: m,
  headerForegroundColor: p,
  brandColor: h,
  activeAccentColor: x = "#01584f",
  activeBackgroundColor: g,
  groupArrowColor: E,
  groupAccentColor: R,
  activeForegroundColor: T,
  foregroundColor: v,
  surfaceBackgroundColor: I,
  flyoutSurfaceColor: $,
  collapsed: S = !1,
  expandedWidth: y = ks,
  collapsedWidth: b = Ws,
  showLabels: _ = !1,
  topInsetPx: F = 0,
  topContent: M,
  footer: L,
  submenuMode: O = "inline"
}) => {
  var to;
  const C = He(), K = C.palette.mode === "dark", j = d.useContext(Ro), k = O === "flyout" && S && !_, oe = Ns(k), ie = d.useRef(null), _e = d.useRef(null), Ge = d.useRef(null);
  Xs(Ge, r, S);
  const Te = Ks(Ge, k), Ce = xs(k, K, ((to = oe.state) == null ? void 0 : to.key) ?? null), W = oi(ie, {
    enabled: k,
    axis: "y",
    itemSelector: ti,
    // The glyph alone, whatever draws it (an icon, an avatar, the brand's
    // logo image, Ask Nexa's own SVG): a count badge keeps its size and
    // place
    glyphSelector: '.MuiAvatar-root, [role="img"], svg'
  }), G = {
    ...Ce.containerProps,
    ...W.containerProps,
    ...k ? {
      onScrollCapture: () => {
        var f, D;
        (D = (f = Ce.containerProps).onScrollCapture) == null || D.call(f), W.settle();
      }
    } : {}
  }, H = g ?? x, Y = vs({
    enabled: k,
    isDark: K,
    color: H,
    containerRef: _e
  }), { close: V } = oe;
  d.useEffect(() => {
    V();
  }, [r, V]);
  const [de, ce] = d.useState(
    {}
  ), z = T ?? Jo(H), ht = {
    bgcolor: H,
    color: z,
    "& .MuiListItemIcon-root": { color: z }
  }, Ue = {
    bgcolor: H,
    color: z,
    borderRadius: "8px"
  }, ue = R ?? Gt(x), Je = I ?? (K ? C.palette.background.paper : "#ffffff"), fe = v ?? (K ? "text.primary" : x), ke = m ?? Je, We = p ?? (m ? Jo(ke) : v ?? (K ? C.palette.text.primary : x)), pe = Gt(We), Ae = (f) => {
    n == null || n(f);
  }, le = (f) => f ? {
    component: "a",
    href: f,
    onClick: (D) => {
      Et(D) && (D.preventDefault(), Ae(f));
    }
  } : {}, Ke = (f, D) => {
    ce((B) => ({ ...B, [f]: !D }));
  }, st = (f, D) => de[D] ?? ot(f, r), Xe = (f, D, B) => ({
    color: f ? z : fe,
    bgcolor: f ? H : "transparent",
    "& .MuiListItemIcon-root": {
      color: f ? z : fe,
      minWidth: B
    },
    "&:hover": f || _ ? ht : { bgcolor: D }
  }), pt = {
    "&.Mui-selected": {
      bgcolor: H
    },
    "&.Mui-selected:hover": ht
  }, _t = (f) => {
    const D = Pe(f, r), B = /* @__PURE__ */ w(
      ao,
      {
        disabled: !f.path,
        selected: D,
        ...le(f.path),
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
          ...Xe(
            D,
            ue,
            f.subtitle ? 48 : 36
          ),
          ...pt
        },
        children: [
          /* @__PURE__ */ t(be, { children: f.icon }),
          /* @__PURE__ */ t(
            ze,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                dt,
                {
                  text: f.text,
                  fontWeight: uo
                }
              ),
              secondary: f.subtitle ? /* @__PURE__ */ t(
                A,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    dt,
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
      return B;
    const { action: P } = f;
    return /* @__PURE__ */ w(A, { sx: { position: "relative" }, children: [
      B,
      /* @__PURE__ */ t(ve, { title: P.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        xe,
        {
          "aria-label": P.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            P.onClick(), i == null || i();
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
            borderColor: D ? "rgba(255, 255, 255, 0.35)" : ue,
            color: D ? z : fe,
            "&:hover": {
              bgcolor: D ? "rgba(255, 255, 255, 0.15)" : ue
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: D ? z : fe,
              outlineOffset: 1
            }
          },
          children: P.icon
        }
      ) })
    ] }, f.text);
  }, Ao = (f) => {
    const D = ot(f, r), B = Pe(f, r), P = yt("", f), U = st(f, P);
    return /* @__PURE__ */ w(
      A,
      {
        "data-testid": `sidebar-group-${f.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: D ? ue : "transparent"
        },
        children: [
          /* @__PURE__ */ w(
            ao,
            {
              onClick: () => Ke(P, U),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": B ? "true" : "false",
              "aria-expanded": U,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Xe(B, ue, 36)
              },
              children: [
                /* @__PURE__ */ t(be, { children: f.icon }),
                /* @__PURE__ */ t(
                  ze,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      dt,
                      {
                        text: f.text,
                        fontWeight: uo
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(gn, { open: U })
              ]
            }
          ),
          /* @__PURE__ */ t(Zr, { in: U, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            A,
            {
              "data-testid": `sidebar-children-${f.text}`,
              sx: { pb: 0.5 },
              children: f.subitems.map(
                (J) => qt(J, P, 1)
              )
            }
          ) })
        ]
      },
      f.text
    );
  }, qt = (f, D, B) => {
    const P = yt(D, f), U = Bs + (B - 1) * zs;
    if (wt(f)) {
      const Se = ot(f, r), Z = Pe(f, r), Oe = st(f, P);
      return /* @__PURE__ */ w(A, { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ w(
          ao,
          {
            onClick: () => Ke(P, Oe),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": Se ? "true" : "false",
            "aria-expanded": Oe,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: U,
              ...Xe(Z, "action.hover", 32)
            },
            children: [
              f.icon ? /* @__PURE__ */ t(be, { children: f.icon }) : null,
              /* @__PURE__ */ t(
                ze,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    dt,
                    {
                      text: f.text,
                      fontWeight: uo
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(gn, { open: Oe })
            ]
          }
        ),
        /* @__PURE__ */ t(Zr, { in: Oe, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(A, { "data-testid": `sidebar-children-${f.text}`, children: f.subitems.map(
          (we) => qt(we, P, B + 1)
        ) }) })
      ] }, P);
    }
    const J = Pe(f, r);
    return /* @__PURE__ */ w(
      ao,
      {
        selected: J,
        disabled: !f.path,
        ...le(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": J ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: U,
          ...Xe(J, "action.hover", 32),
          ...pt
        },
        children: [
          f.icon ? /* @__PURE__ */ t(be, { children: f.icon }) : null,
          /* @__PURE__ */ t(
            ze,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                dt,
                {
                  text: f.text,
                  fontWeight: uo
                }
              )
            }
          )
        ]
      },
      P
    );
  }, Tt = (f, D, B, P, U, J) => {
    const Se = !U, Z = /* @__PURE__ */ w(
      xe,
      {
        "aria-label": D,
        disabled: Se,
        ...le(U),
        onMouseEnter: k ? oe.onRailLeafEnter : void 0,
        ...k ? { [Xt]: "" } : {},
        "data-testid": (J == null ? void 0 : J.testId) ?? `sidebar-item-${D}`,
        "data-active": P ? "true" : "false",
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
          color: P ? z : fe,
          bgcolor: P ? H : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: pn
          },
          "&:hover": Ue,
          ...lo
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: k ? ae : 44,
          height: k ? ae : 44,
          color: P ? z : fe,
          bgcolor: P ? H : "transparent",
          borderRadius: P ? "8px" : "50%",
          "&:hover": {
            bgcolor: P ? H : J != null && J.insideGroup ? "action.hover" : ue,
            borderRadius: "8px"
          },
          ...lo,
          ...k ? Qe(P) : {}
        },
        children: [
          B,
          _ ? /* @__PURE__ */ t(
            dt,
            {
              text: D,
              variant: "caption",
              center: !0,
              fontSize: hn
            }
          ) : null
        ]
      }
    );
    return _ ? Se ? /* @__PURE__ */ t("span", { children: Z }, f) : /* @__PURE__ */ t(d.Fragment, { children: Z }, f) : /* @__PURE__ */ t(
      ve,
      {
        title: D,
        placement: "right",
        arrow: !k,
        ...k ? Ct : {},
        children: Se ? /* @__PURE__ */ t("span", { children: Z }) : Z
      },
      f
    );
  }, Oo = {
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
  }, Qe = (f) => ({
    borderRadius: `${ee}px`,
    "& .MuiSvgIcon-root": { fontSize: Ut },
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...f ? { bgcolor: "transparent" } : {},
    transition: `transform ${mn.duration}ms ${mn.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), Ct = {
    slotProps: {
      tooltip: { sx: _o(K, j) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, Zt = (f) => {
    var U;
    const D = ot(f, r), B = yt("", f), P = ((U = oe.state) == null ? void 0 : U.key) === B;
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
            ...oe.triggerProps(B),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": P,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": D ? "true" : "false",
            "data-open": P ? "true" : "false",
            [Xt]: "",
            sx: {
              position: "relative",
              width: ae,
              height: ae,
              color: D ? z : fe,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: D ? H : "transparent",
              ...Qe(D),
              // The icon stays centred, in line with every other
              // icon down the rail; the arrow sits in the room
              // beside it
              "&::after": {
                content: '""',
                position: "absolute",
                right: 3,
                top: "50%",
                transform: "translateY(-50%)",
                width: 5,
                height: 8,
                bgcolor: E ?? "currentColor",
                mask: `${Hs} center / contain no-repeat`,
                opacity: E ? 1 : 0.55
              },
              ...lo
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, at = (f) => {
    const D = ot(f, r), B = Pe(f, r), P = yt("", f), U = st(f, P), J = /* @__PURE__ */ w(
      xe,
      {
        "aria-label": f.text,
        "aria-expanded": U,
        onClick: () => Ke(P, U),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": B ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: _ ? 0.25 : 0,
          width: _ ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ..._ ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: B ? z : fe,
          bgcolor: B ? H : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": _ ? { bgcolor: H, color: z } : {
            bgcolor: B ? H : "transparent"
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
                  fontSize: pn
                }
              },
              children: f.icon
            }
          ) : f.icon,
          _ ? /* @__PURE__ */ t(
            dt,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: hn
            }
          ) : null,
          /* @__PURE__ */ t(Gs, { open: U, size: Ps })
        ]
      }
    ), Se = _ ? J : /* @__PURE__ */ t(ve, { title: f.text, placement: "right", arrow: !0, children: J });
    return /* @__PURE__ */ w(
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
          bgcolor: D ? ue : "transparent",
          ..._ ? {} : { "&:hover": { bgcolor: ue } }
        },
        children: [
          Se,
          U ? mr(f.subitems, f.icon).map(
            ({ sub: Z, icon: Oe }) => Tt(
              Z.path,
              Z.text,
              Oe,
              Pe(Z, r),
              Z.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${Z.text}`
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
        Pe(f, r),
        f.path,
        { testId: `sidebar-item-${f.text}` }
      )
    },
    f.text
  ), Ot = (f) => wt(f) ? k ? Zt(f) : S ? at(f) : Ao(f) : S ? At(f) : _t(f), $t = (f) => /* @__PURE__ */ t(
    Ne,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: S ? "center" : "stretch"
      },
      children: f.map(
        (D, B) => D.dividerAfter && B < f.length - 1 ? /* @__PURE__ */ w(d.Fragment, { children: [
          Ot(D),
          /* @__PURE__ */ t(
            Ze,
            {
              "data-testid": `sidebar-divider-${D.text}`,
              sx: {
                alignSelf: "stretch",
                my: k ? ut : 1,
                borderColor: "divider"
              }
            }
          )
        ] }, D.text) : Ot(D)
      )
    }
  ), Jt = S ? b : y, mt = () => {
    var Se, Z;
    const { state: f } = oe, D = f ? [...e, ...o].find(
      (Oe) => wt(Oe) && yt("", Oe) === f.key
    ) ?? null : null, B = D ? ((Se = ie.current) == null ? void 0 : Se.getBoundingClientRect().right) ?? b : b, P = D ? ((Z = ie.current) == null ? void 0 : Z.closest("[data-rail-surface]")) ?? ie.current : null, U = P == null ? void 0 : P.getBoundingClientRect(), J = P && U ? {
      left: U.left,
      top: U.top,
      width: U.width,
      height: U.height,
      radius: parseFloat(
        getComputedStyle(P).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Os,
      {
        group: D,
        groupKey: D ? f.key : null,
        anchor: D ? oe.getTrigger(f.key) : null,
        railEdge: B,
        railShape: J,
        activePath: r,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: Ae,
        onClose: oe.close,
        panelProps: oe.flyoutProps,
        accentColor: x,
        activeBackgroundColor: g,
        activeForegroundColor: z,
        solidSurface: $ ?? Je
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
        ...k ? { pt: "12px", pb: "12px" } : {
          height: fn,
          minHeight: fn
        },
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: ke
      },
      children: s || c ? /* @__PURE__ */ t(
        yo,
        {
          logo: s,
          title: S ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: h ?? We,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, eo = !l && s ? /* @__PURE__ */ t(
    A,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: k ? ut : 1
      },
      children: /* @__PURE__ */ t(
        yo,
        {
          logo: s,
          appName: c || "App",
          onClick: a,
          menuOpen: u,
          color: h ?? We,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, re = _ ? 0.5 : k ? 0.75 : S ? 1 : 1.5;
  return /* @__PURE__ */ t(It.Provider, { value: k, children: /* @__PURE__ */ w(
    A,
    {
      ref: ie,
      ...G,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": S ? "true" : "false",
      "data-labeled": _ ? "true" : "false",
      sx: {
        width: Jt,
        minWidth: Jt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Je,
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
        ...k ? Oo : {}
      },
      children: [
        Ce.lens,
        Qt ?? eo,
        M ? /* @__PURE__ */ t(
          A,
          {
            sx: {
              flexShrink: 0,
              px: re,
              pt: k ? 0 : 1,
              pb: k ? 0 : 1
            },
            children: M
          }
        ) : null,
        /* @__PURE__ */ t(
          A,
          {
            ref: Ge,
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
              ...k ? {
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
                width: k ? go : 8
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
              ...k ? Us(Te) : { px: re },
              pt: F && !l ? `${F}px` : k ? ut : 1,
              pb: k ? ut : 2
            },
            children: /* @__PURE__ */ w(
              A,
              {
                ref: _e,
                sx: {
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                },
                children: [
                  Y.glass,
                  $t(e),
                  o.length > 0 ? /* @__PURE__ */ w(
                    A,
                    {
                      sx: { mt: "auto", pt: k ? ut : 2 },
                      children: [
                        L ? null : /* @__PURE__ */ t(
                          Ze,
                          {
                            sx: {
                              mb: k ? ut : 1,
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
        L ? /* @__PURE__ */ t(
          A,
          {
            sx: {
              flexShrink: 0,
              px: re,
              pb: 1.5,
              ...k ? {
                "& .MuiIconButton-root .MuiSvgIcon-root": {
                  fontSize: Ut
                }
              } : {}
            },
            children: /* @__PURE__ */ t(
              A,
              {
                sx: {
                  borderTop: `1px solid ${pe}`,
                  pt: k ? ut : 1.5
                },
                children: L
              }
            )
          }
        ) : null,
        k ? mt() : null
      ]
    }
  ) });
}, rr = "var(--lumora-content-padding, 0px)", xn = `calc(${rr} * -1)`, el = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: s = !0,
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
        mb: rr,
        px: s ? rr : 0,
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
), js = ({ keys: e }) => /* @__PURE__ */ t(
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
}, ai = wo(), Le = ai.typography.pxToRem, _r = (e) => {
  const o = e === "dark", r = [...ai.shadows];
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
      warning: o ? { light: bt[400], main: bt[500], dark: bt[700] } : { light: bt[300], main: bt[400], dark: bt[800] },
      error: o ? { light: vt[400], main: vt[500], dark: vt[700] } : { light: vt[300], main: vt[400], dark: vt[800] },
      success: o ? { light: xt[400], main: xt[500], dark: xt[700] } : { light: xt[300], main: xt[400], dark: xt[800] },
      grey: Re,
      divider: o ? Be(Re[700], 0.6) : Be(Re[300], 0.4),
      background: o ? { default: Re[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Re[400] } : { primary: Re[800], secondary: Re[600] },
      action: o ? {
        hover: Be(Re[600], 0.2),
        selected: Be(Re[600], 0.3)
      } : {
        hover: Be(Re[200], 0.2),
        selected: Be(Re[200], 0.3)
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
}, Vs = 6, Ys = 8, bn = (e, o) => typeof e == "object" ? e[o] : e, Ko = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: i = "expand",
  sidebarAutoHide: s = !1,
  showSidebar: c = !0,
  contentPadding: a = Vn,
  sidebarBackgroundColor: u,
  contentBackgroundColor: l,
  content: m
}) => {
  const p = Wn(r.breakpoints.down("md")), h = e === "dark", x = qn({
    showSidebar: c,
    isMobile: p,
    sidebarVariant: n,
    sidebarSubmenu: i,
    sidebarAutoHide: s
  }), g = To(i, n) ? {
    gutterPx: ft,
    radiusPx: jn
  } : void 0, E = mo, R = Zn(
    bn(u, e),
    h
  ), T = Jn(
    bn(l, e),
    h
  ), v = Yn(a, r), I = g ? /* @__PURE__ */ w(Pt, { alignItems: "center", sx: { pt: "12px" }, children: [
    /* @__PURE__ */ t(Me, { variant: "rounded", width: 36, height: 36 }),
    /* @__PURE__ */ t(
      Pt,
      {
        alignItems: "center",
        spacing: `${Sr}px`,
        sx: { mt: 2 },
        children: Array.from({ length: Ys }, ($, S) => /* @__PURE__ */ t(
          X,
          {
            sx: {
              width: ae,
              height: ae,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ t(
              Me,
              {
                variant: "rounded",
                width: Ut,
                height: Ut
              }
            )
          },
          S
        ))
      }
    )
  ] }) : /* @__PURE__ */ w(Pt, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(Me, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(X, { sx: { height: 8 } }),
    Array.from({ length: Vs }, ($, S) => /* @__PURE__ */ t(Me, { variant: "rounded", width: 28, height: 28 }, S))
  ] });
  return /* @__PURE__ */ t(vo, { theme: o, children: /* @__PURE__ */ w(
    X,
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
        p && /* @__PURE__ */ w(
          X,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: E,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: R,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(Me, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(Me, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(X, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(Me, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !p && x > 0 && /* @__PURE__ */ t(
          X,
          {
            sx: {
              position: "relative",
              width: x,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              X,
              {
                sx: g ? {
                  position: "fixed",
                  top: g.gutterPx,
                  bottom: g.gutterPx,
                  left: g.gutterPx,
                  width: x - 2 * g.gutterPx,
                  borderRadius: `${g.radiusPx}px`,
                  bgcolor: R
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: x,
                  bgcolor: R
                },
                children: I
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          X,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              // The variables the wrapper's <main> sets, so a host's `content`
              // that sizes itself from them measures as it will in the app
              "--lumora-content-padding": v,
              "--lumora-sticky-top": p ? `${E}px` : "0px",
              p: "var(--lumora-content-padding)",
              mt: p ? `${E}px` : 0
            },
            children: m ?? /* @__PURE__ */ w(De, { children: [
              /* @__PURE__ */ t(Me, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(
                Me,
                {
                  variant: "text",
                  width: 320,
                  sx: { mb: 3 }
                }
              ),
              /* @__PURE__ */ t(Pt, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from(
                { length: p ? 2 : 4 },
                ($, S) => /* @__PURE__ */ t(
                  Me,
                  {
                    variant: "rounded",
                    height: 96,
                    sx: { flex: 1 }
                  },
                  S
                )
              ) }),
              /* @__PURE__ */ t(Me, { variant: "rounded", height: 360 })
            ] })
          }
        )
      ]
    }
  ) });
}, nr = wo(_r("light")), xo = wo(_r("dark")), qs = (e) => e === "dark" ? xo : nr, Zs = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = kn();
  if (!o) {
    const s = qs(e);
    return /* @__PURE__ */ w(vo, { theme: s, children: [
      /* @__PURE__ */ t(qo, {}),
      /* @__PURE__ */ t(
        Ko,
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
  return /* @__PURE__ */ w(vo, { theme: nr, children: [
    /* @__PURE__ */ t(qo, {}),
    /* @__PURE__ */ t(
      zi,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: xo.palette.background.default,
            color: xo.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(X, { sx: { display: "contents", [i]: { display: "none" } }, children: /* @__PURE__ */ t(
      Ko,
      {
        themeMode: "light",
        muiTheme: nr,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(X, { sx: { display: "none", [i]: { display: "contents" } }, children: /* @__PURE__ */ t(
      Ko,
      {
        themeMode: "dark",
        muiTheme: xo,
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
const Q = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, se = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, qe = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Js = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        qe.ACCESS_TOKEN
      ), o = localStorage.getItem(
        qe.REFRESH_TOKEN
      ), r = localStorage.getItem(qe.USER);
      e && !localStorage.getItem(se.ACCESS_TOKEN) && localStorage.setItem(se.ACCESS_TOKEN, e), o && !localStorage.getItem(se.REFRESH_TOKEN) && localStorage.setItem(
        se.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(se.USER) && localStorage.setItem(se.USER, r), (e || o || r) && (localStorage.removeItem(qe.ACCESS_TOKEN), localStorage.removeItem(qe.REFRESH_TOKEN), localStorage.removeItem(qe.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Xo = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new q(
        "localStorage is not available",
        Q.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new q(
      "Storage quota exceeded. Please clear browser data.",
      Q.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new q(
      "Access to localStorage is denied. Please check browser settings.",
      Q.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new q(
      "Failed to access storage",
      Q.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, jo = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new q(
        "localStorage is not available",
        Q.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new q(
      "Storage quota exceeded. Please clear browser data.",
      Q.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new q(
      "Access to localStorage is denied. Please check browser settings.",
      Q.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new q(
      "Failed to write to storage",
      Q.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, ci = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, jt = () => {
  try {
    Js();
    const e = Xo(se.ACCESS_TOKEN), o = Xo(se.REFRESH_TOKEN), r = Xo(se.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), ci(se.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof q ? e : new q(
      "Failed to retrieve authentication tokens",
      Q.UNKNOWN_ERROR,
      e
    );
  }
}, Qs = () => {
  try {
    const { accessToken: e, refreshToken: o } = jt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new q(
        "No authentication tokens found",
        Q.TOKEN_NOT_FOUND
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
        Q.UNKNOWN_ERROR,
        e
      )
    };
  }
}, li = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new q(
        "At least one token must be provided",
        Q.TOKEN_INVALID
      );
    return e && jo(se.ACCESS_TOKEN, e), o && jo(se.REFRESH_TOKEN, o), r && jo(se.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof q ? n : new q(
        "Failed to store tokens",
        Q.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Vt = () => {
  try {
    return [
      se.ACCESS_TOKEN,
      se.REFRESH_TOKEN,
      se.USER,
      // Also clear legacy keys for complete cleanup
      qe.ACCESS_TOKEN,
      qe.REFRESH_TOKEN,
      qe.USER
    ].map((n) => ci(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof q ? e : new q(
        "Failed to clear tokens",
        Q.LOGOUT_FAILED,
        e
      )
    };
  }
}, ea = () => {
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
        Q.UNKNOWN_ERROR,
        e
      )
    };
  }
}, tl = (e) => {
  if (!(e instanceof q))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case Q.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case Q.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case Q.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case Q.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case Q.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case Q.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, ir = (e, o = "Unknown") => {
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
}, ta = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = tn.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, i = [];
  const s = (c, a) => {
    i.forEach(({ resolve: u, reject: l }) => {
      c ? l(c) : a && u(a);
    }), i = [];
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
      var h;
      const a = c.config, u = (h = c.response) == null ? void 0 : h.status, l = (a == null ? void 0 : a.url) || "", m = l.includes("/auth/refresh");
      if (u !== 401 || a._retry || m)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: p } = jt();
      if (!p) {
        const x = new Error(
          "No refresh token available for token refresh"
        );
        return ir(x, "AxiosClient - Token Refresh"), Vt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((x, g) => {
          i.push({ resolve: x, reject: g });
        }).then((x) => {
          const {
            accessToken: g,
            refreshToken: E
          } = x;
          if (a.headers && (a.headers.Authorization = `Bearer ${g}`), l.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const R = JSON.parse(
                  a.data || "{}"
                );
                R.refresh_token = E, a.data = JSON.stringify(R);
              } else
                a.data && typeof a.data == "object" ? a.data.refresh_token = E : a.data = JSON.stringify({
                  refresh_token: E
                });
            } catch {
              a.data = JSON.stringify({
                refresh_token: E
              });
            }
          return o(a);
        }).catch((x) => Promise.reject(x));
      r = !0, n = tn.post(
        `${e}/auth/refresh`,
        {
          refresh_token: p
        }
      );
      try {
        const x = await n, { accessToken: g, refreshToken: E } = x.data;
        if (li(g, E, null), s(null, {
          accessToken: g,
          refreshToken: E
        }), a.headers && (a.headers.Authorization = `Bearer ${g}`), l.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const R = JSON.parse(
                a.data || "{}"
              );
              R.refresh_token = E, a.data = JSON.stringify(R);
            } else
              a.data && typeof a.data == "object" ? a.data.refresh_token = E : a.data = JSON.stringify({
                refresh_token: E
              });
          } catch {
            a.data = JSON.stringify({
              refresh_token: E
            });
          }
        return o(a);
      } catch (x) {
        return ir(
          x,
          "AxiosClient - Token Refresh Failed"
        ), s(x), Vt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(x);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, oa = async (e, o) => {
  const { accessToken: r, refreshToken: n } = jt();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return li(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      ir(i, "TokenValidator - Refresh Failed");
    }
  return Vt(), o ? o() : window.location.href = "/login", !1;
}, zt = ({ size: e = 20 }) => /* @__PURE__ */ w(
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
), vn = he(wr), Ye = "#09C1AE", bo = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ye} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), ra = (e) => ({
  ...bo(ee, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${ee - 2}px`,
    zIndex: 1,
    background: `${So(Ye, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
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
  const a = Rr(), u = d.useContext(It), l = He().palette.mode === "dark", m = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", p = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ w(
    it,
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
        borderColor: r ? Ye : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Ye}`,
          outlineOffset: 2
        },
        ...n && bo(8, "background.paper")
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
        i && /* @__PURE__ */ t(js, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && u && Zo ? /* @__PURE__ */ t(ve, { title: m, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    xe,
    {
      ...p,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: ae,
        height: ae,
        borderRadius: `${ee}px`,
        ...So(Ye, l, "clear"),
        ...r && {
          boxShadow: `${So(Ye, l, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
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
        [ye]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && ra(l)
      },
      children: /* @__PURE__ */ t(zt, { size: 18 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(ve, { title: m, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    xe,
    {
      ...p,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": u || void 0,
      sx: {
        width: u ? ae : 44,
        height: u ? ae : 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Ye : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && bo(8, "background.paper")
      },
      children: /* @__PURE__ */ t(zt, { size: u ? 18 : 20 })
    }
  ) }) : /* @__PURE__ */ t(ve, { title: m, placement: "left", children: /* @__PURE__ */ t(
    xe,
    {
      ...p,
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
        outline: r ? `2px solid ${Ye}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Ye}` },
        ...n && bo(16, "background.paper")
      },
      children: /* @__PURE__ */ t(A, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(zt, { size: 26 }) })
    }
  ) });
}, ho = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(Gi, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ w(Ui, { children: [
  /* @__PURE__ */ t(Ki, { fontSize: "small" }),
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
    Fn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Wt = 24, na = 720, ia = 1140, sa = 1250, aa = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: i,
  sidebarWidthPx: s,
  bottomOffsetPx: c,
  fullScreen: a,
  fullScreenBottom: u = "0px",
  onClose: l
}) => {
  const m = d.useRef(!1);
  d.useEffect(() => {
    const E = requestAnimationFrame(() => {
      m.current = !0;
    });
    return () => cancelAnimationFrame(E);
  }, []), d.useEffect(() => {
    if (!e || !l)
      return;
    const E = (R) => {
      R.key === "Escape" && l();
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [e, l]);
  const p = r === "docked", h = Wt + c;
  let x;
  a ? x = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : p ? x = {
    top: 0,
    right: 0,
    bottom: 0,
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : x = {
    bottom: h,
    ...n === "left" ? { left: s + Wt } : { right: Wt },
    width: i,
    maxWidth: `calc(100vw - ${Wt * 2}px)`,
    height: `min(${na}px, calc(100vh - ${h + Wt}px))`,
    borderRadius: "12px"
  };
  const g = /* @__PURE__ */ t(
    ur,
    {
      role: p ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: p ? ia : sa,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...x
      },
      children: o
    }
  );
  return p ? /* @__PURE__ */ t(
    ji,
    {
      direction: "left",
      in: e,
      mountOnEnter: !0,
      ...m.current ? {} : { timeout: { enter: 0 } },
      children: g
    }
  ) : /* @__PURE__ */ t(
    Xi,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: g
    }
  );
}, ca = 180, Sn = 250, la = "#01584F", da = ({
  text: e,
  testId: o
}) => {
  const r = d.useRef(null), [n, i] = d.useState(!1), s = d.useCallback(() => {
    const c = r.current;
    c && i(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    s();
  }, [s, e]), d.useEffect(() => {
    const c = r.current;
    if (!c)
      return;
    const a = new ResizeObserver(() => s());
    return a.observe(c), () => a.disconnect();
  }, [s]), /* @__PURE__ */ t(
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
}, di = (e, o, r, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : o, c = e ? la : o;
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
}, ui = ({ link: e }) => /* @__PURE__ */ w(Ne, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    da,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), fi = (e, o, r) => r ? e : /* @__PURE__ */ t(ve, { title: o, placement: "right", arrow: !0, children: e }), ua = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: c
}) => {
  const a = He(), [u, l] = d.useState(null), [m, p] = d.useState(!1), h = d.useRef(
    null
  ), x = d.useRef(null), g = d.useRef(null), E = d.useRef(!1), R = d.useRef(!1), T = d.useId(), v = () => {
    h.current && (clearTimeout(h.current), h.current = null);
  }, I = () => {
    v(), h.current = setTimeout(() => {
      p(!1), h.current = null;
    }, ca);
  }, $ = () => {
    v(), p(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const M = (L) => {
      var O;
      L.key === "Escape" && (p(!1), (O = g.current) == null || O.focus());
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [m]), d.useEffect(() => {
    if (!m || !R.current)
      return;
    const M = globalThis.requestAnimationFrame(() => {
      var O;
      const L = (O = x.current) == null ? void 0 : O.querySelector(
        '[role="menuitem"]'
      );
      L == null || L.focus(), R.current = !1;
    });
    return () => cancelAnimationFrame(M);
  }, [m]);
  const S = ot(e, o), { activeBg: y, sx: b } = di(
    i,
    n,
    S,
    c
  ), _ = /* @__PURE__ */ t(
    xe,
    {
      ref: g,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        E.current || $();
      },
      onBlur: (M) => {
        var O;
        const L = M.relatedTarget;
        L && ((O = x.current) != null && O.contains(L)) || I();
      },
      onKeyDown: (M) => {
        M.key === "ArrowDown" && (M.preventDefault(), R.current = !0, $());
      },
      onClick: (M) => {
        M.stopPropagation(), !(e.path && !Et(M)) && (M.preventDefault(), e.path && (r == null || r(e.path)));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? T : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: b,
      children: c ? /* @__PURE__ */ t(ui, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ w(
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
              E.current = !0, $();
            },
            onMouseLeave: () => {
              E.current = !1, I();
            },
            children: fi(_, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          dr,
          {
            open: m && !!u,
            anchorEl: u,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (M) => M.zIndex.modal },
            children: /* @__PURE__ */ t(
              ur,
              {
                ref: x,
                elevation: 0,
                onMouseEnter: v,
                onMouseLeave: I,
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
                  fr,
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
                    children: F(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function F(M, L, O) {
    return M.flatMap((C) => {
      const K = yt(L, C);
      return wt(C) ? [
        /* @__PURE__ */ t(
          Vi,
          {
            disableSticky: !0,
            title: C.text,
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
            children: C.text
          },
          K
        ),
        ...F(C.subitems, K, O + 1)
      ] : [
        /* @__PURE__ */ w(
          nt,
          {
            role: "menuitem",
            title: C.text,
            disabled: !C.path,
            selected: Pe(C, o),
            ...C.path && { component: "a", href: C.path },
            onClick: (j) => {
              C.path && !Et(j) || (j.preventDefault(), C.path && (r == null || r(C.path)), p(!1));
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + O * 1.5,
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
              C.icon ? /* @__PURE__ */ t(be, { children: C.icon }) : null,
              /* @__PURE__ */ t(
                ze,
                {
                  primary: C.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          K
        )
      ];
    });
  }
}, fa = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = di(
    i,
    n,
    c,
    s
  );
  return fi(
    /* @__PURE__ */ t(
      xe,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (u) => {
          u.stopPropagation(), !(e.path && !Et(u)) && (u.preventDefault(), e.path && (r == null || r(e.path)));
        },
        disabled: !e.path,
        sx: a,
        children: s ? /* @__PURE__ */ t(ui, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, ha = () => /* @__PURE__ */ t(
  A,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), pa = () => /* @__PURE__ */ t(
  A,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), wn = (e, o) => e.map((r, n) => /* @__PURE__ */ w(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(ha, {}) : null
] }, n)), ma = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: c = !1
}) => {
  const a = (l, m) => wt(l) ? /* @__PURE__ */ t(
    ua,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      surfaceBackgroundColor: s,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    fa,
    {
      link: l,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      railShowTitles: c
    }
  ), u = c ? 1.25 : 1;
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
        gap: u
      },
      children: [
        wn(e, (l) => a(l, !1)),
        o.length > 0 ? /* @__PURE__ */ w(De, { children: [
          /* @__PURE__ */ t(pa, {}),
          /* @__PURE__ */ t(A, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Ne, { gap: u, alignItems: "center", children: wn(
            o,
            (l) => a(l, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, ga = (e) => e ? Gn(e) : "USER", xa = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), En = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, sr = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, Tr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  qi,
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
    children: xa(e)
  }
), hi = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ w(De, { children: [
  /* @__PURE__ */ t(Tr, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ w(
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
            sx: { ...En, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ne,
          {
            variant: "caption",
            sx: { ...En, opacity: 0.8, color: "inherit" },
            children: ga(o)
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
}, pi = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: i,
  showNotifications: s,
  notificationCount: c,
  onNotificationsClick: a,
  userName: u = "User",
  userRole: l,
  userAvatar: m,
  menuItems: p = [],
  showSettings: h,
  onSettingsClick: x,
  showThemeToggler: g,
  theme: E,
  onThemeToggle: R,
  onLogout: T
}) => {
  const v = (I) => () => {
    o(), I == null || I();
  };
  return /* @__PURE__ */ w(
    Zi,
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
              hi,
              {
                name: u,
                role: l,
                avatar: m,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Ze, {}),
        s && /* @__PURE__ */ w(nt, { onClick: v(a), children: [
          /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(zn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ze, { children: "Notifications" }),
          /* @__PURE__ */ t(sr, { count: c })
        ] }),
        p.map((I) => /* @__PURE__ */ w(nt, { onClick: v(I.onClick), children: [
          I.icon && /* @__PURE__ */ t(be, { children: I.icon }),
          /* @__PURE__ */ t(ze, { inset: !I.icon, children: I.label }),
          /* @__PURE__ */ t(sr, { count: I.badge })
        ] }, I.key)),
        h && /* @__PURE__ */ w(nt, { onClick: v(x), children: [
          /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(Yi, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ze, { children: "Settings" })
        ] }),
        g && [
          /* @__PURE__ */ t(Ze, {}, "theme-divider"),
          /* @__PURE__ */ w(A, { sx: { px: 1.5, py: 1 }, children: [
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
            /* @__PURE__ */ w(
              Ji,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: E,
                onChange: (I, $) => $ && $ !== E && (R == null ? void 0 : R()),
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
                  /* @__PURE__ */ t(on, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(on, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Ze, {}),
        /* @__PURE__ */ w(
          nt,
          {
            onClick: v(T),
            sx: {
              color: E === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(be, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Bn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ze, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, mi = 64, ba = 2, Ft = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: i,
  activeColor: s,
  activeBackground: c,
  ariaLabel: a,
  haspopup: u,
  isPage: l = !1,
  href: m,
  testId: p
}) => /* @__PURE__ */ w(
  it,
  {
    ...m && { component: "a", href: m },
    onClick: r,
    "aria-label": a ?? e,
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
      color: n ? s : i,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: s,
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
), va = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: s,
  assistantActive: c,
  showProfile: a,
  background: u,
  color: l,
  activeColor: m,
  activeBackground: p,
  pinnedLinks: h = [],
  activePath: x,
  onLinkClick: g,
  ...E
}) => {
  const R = h.filter((b) => b.path).slice(0, ba), [T, v] = d.useState(
    null
  ), { userName: I = "User", userAvatar: $, avatarColor: S } = E, y = { color: l, activeColor: m, activeBackground: p };
  return /* @__PURE__ */ w(
    ur,
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
        height: `calc(${mi}px + env(safe-area-inset-bottom, 0px))`,
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
            icon: /* @__PURE__ */ t(Pn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...y
          }
        ),
        R.map((b) => /* @__PURE__ */ t(
          Ft,
          {
            label: b.text,
            icon: b.icon,
            href: b.path,
            onClick: (_) => {
              Et(_) && (_.preventDefault(), g == null || g(b.path));
            },
            active: ot(b, x),
            isPage: !0,
            testId: `mobile-nav-link-${b.text}`,
            ...y
          },
          b.path
        )),
        i && /* @__PURE__ */ t(
          Ft,
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
            onClick: s,
            active: c,
            testId: "mobile-nav-nexa",
            ...y
          }
        ),
        r && /* @__PURE__ */ t(
          Ft,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(hr, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...y
          }
        ),
        a && /* @__PURE__ */ w(De, { children: [
          /* @__PURE__ */ t(
            Ft,
            {
              label: "Account",
              ariaLabel: `Account menu for ${I}`,
              icon: /* @__PURE__ */ t(
                Tr,
                {
                  name: I,
                  avatar: $,
                  color: S,
                  size: 26
                }
              ),
              onClick: (b) => v(b.currentTarget),
              active: !!T,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...y
            }
          ),
          /* @__PURE__ */ t(
            pi,
            {
              anchorEl: T,
              onClose: () => v(null),
              placement: "above-end",
              width: 280,
              ...E
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
  Qi,
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
          /* @__PURE__ */ t(A, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Fn,
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
  brandColor: u = a,
  endContent: l
}) => /* @__PURE__ */ t(
  es,
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
    children: /* @__PURE__ */ w(ts, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        xe,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(Pn, {})
        }
      ),
      /* @__PURE__ */ t(
        yo,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: i,
          menuOpen: s,
          color: u,
          testId: "mobile-brand"
        }
      ),
      l ? /* @__PURE__ */ t(A, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: l }) : null
    ] })
  }
), gi = d.createContext(void 0), Cr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const c = Rr(), a = d.useContext(gi), u = d.useContext(It), l = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    ve,
    {
      title: l,
      placement: i,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        xe,
        {
          onClick: o,
          "aria-label": l,
          "data-testid": s,
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
            Hn,
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
}, In = 14, wa = 18, Ea = "blur(12px) saturate(180%) brightness(1.04)", Ra = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Ia = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, _a = 140, _n = 0.22, Ta = 0.14, Ca = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var x;
      const h = e.current;
      h && (h.style.setProperty("--lx", `${s.x.toFixed(1)}px`), h.style.setProperty("--ly", `${s.y.toFixed(1)}px`), h.style.setProperty("--li", s.i.toFixed(3)), (x = n.current) == null || x.call(n, s.x, s.y, s.i));
    }, u = () => {
      s.x += (i.x - s.x) * _n, s.y += (i.y - s.y) * _n, s.i += (i.i - s.i) * Ta;
      const h = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      h && (s.x = i.x, s.y = i.y, s.i = i.i), a(), c = h ? 0 : requestAnimationFrame(u);
    }, l = () => {
      c || (c = requestAnimationFrame(u));
    }, m = (h) => {
      const x = e.current;
      if (h.pointerType === "touch" || !x)
        return;
      const g = x.getBoundingClientRect();
      if (!g.width || !g.height)
        return;
      i.x = (h.clientX - g.left) * x.offsetWidth / g.width, i.y = (h.clientY - g.top) * x.offsetHeight / g.height;
      const E = Math.max(
        g.left - h.clientX,
        0,
        h.clientX - g.right
      ), R = Math.max(
        g.top - h.clientY,
        0,
        h.clientY - g.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(E, R) / _a), s.i < 0.01 && (s.x = i.x, s.y = i.y), l();
    }, p = () => {
      i.i = 0, l();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", p), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", p);
    };
  }, [e, o]);
}, Yt = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: s = !0,
    onLight: c
  }, a) => {
    const u = d.useRef(null), l = i && Zo;
    Ca(u, s && Zo, c);
    const m = Io(), p = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [h, x] = d.useState(null), g = d.useRef(null), E = d.useCallback(
      (v) => {
        var $;
        if (u.current = v, typeof a == "function" ? a(v) : a && (a.current = v), ($ = g.current) == null || $.disconnect(), g.current = null, !v || !l || !Ra || typeof ResizeObserver > "u")
          return;
        const I = () => {
          const S = v.offsetWidth, y = v.offsetHeight;
          x(
            (b) => (b == null ? void 0 : b.width) === S && b.height === y ? b : S && y ? { width: S, height: y } : null
          );
        };
        g.current = new ResizeObserver(I), g.current.observe(v), I();
      },
      [a, l]
    ), R = d.useMemo(
      () => h ? Ia(h.width, h.height, In) : null,
      [h]
    ), T = l && !!(R && h);
    return /* @__PURE__ */ w(De, { children: [
      T ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ w(
            "filter",
            {
              id: p,
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
                    href: R,
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
                    stdDeviation: In / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: wa,
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
          ref: E,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": T ? "true" : void 0,
          sx: [
            cs(e, o, m),
            T ? {
              backdropFilter: `url(#${p}) ${Ea}`,
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
const xi = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Aa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Tn = he(ei), Cn = he(Co), An = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Oa = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = He().palette.mode === "dark", c = Io(), a = d.useRef(null), u = d.useRef(null), l = (h) => {
    var x;
    h !== e && (o == null || o()), (x = (h === "light" ? a : u).current) == null || x.focus();
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
  }, p = (h, x, g, E) => {
    const R = e === h;
    return /* @__PURE__ */ t(
      it,
      {
        ref: E,
        role: "radio",
        "aria-checked": R,
        "aria-label": x,
        tabIndex: R ? 0 : -1,
        onClick: () => l(h),
        "data-testid": `theme-segment-${h}`,
        sx: {
          width: 32,
          height: 24,
          borderRadius: i ? `${ee}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: R ? s ? "#ffffff" : r : "text.secondary",
          bgcolor: R ? n : "transparent",
          ...i && R ? Kn(s, c) : {},
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          ...i && {
            transition: "background 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 150ms ease",
            "&:hover": R ? { transform: "scale(1.06)" } : {
              color: "text.primary",
              bgcolor: s ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.75)",
              transform: "scale(1.06)"
            },
            "&:active": { transform: "scale(0.94)" }
          },
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${Be(r, 0.6)}`
          },
          ...xi
        },
        children: /* @__PURE__ */ t(g, { sx: { fontSize: 16 } })
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
        p("light", "Light", rs, a),
        p("dark", "Dark", os, u)
      ]
    }
  );
}, $a = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: i,
  userName: s,
  userEmail: c,
  roleLabel: a,
  accentColor: u,
  tint: l,
  showThemeToggler: m,
  theme: p,
  onThemeToggle: h,
  onProfileClick: x,
  onLinkClick: g,
  menuItems: E = [],
  onLogout: R,
  glass: T = !1
}) => {
  const v = He(), I = v.palette.mode === "dark", $ = d.useRef(null), S = br(v.palette.background.paper), y = Ir({
    enabled: T,
    isDark: I,
    selector: An,
    radius: ee
  }), [b, _] = d.useState(null);
  d.useEffect(() => {
    if (!b || typeof ResizeObserver > "u")
      return;
    const C = new ResizeObserver(() => {
      var K;
      (K = $.current) == null || K.updatePosition();
    });
    return C.observe(b), () => C.disconnect();
  }, [b]);
  const F = (C) => {
    r(), C == null || C();
  }, M = (C) => {
    r(), C.onClick ? C.onClick() : C.path && (g == null || g(C.path));
  }, L = {
    borderRadius: T ? `${ee}px` : "8px",
    py: 0.75,
    px: 1.5,
    minHeight: 32,
    gap: 0.5,
    fontSize: 14,
    lineHeight: "20px",
    "& .MuiListItemIcon-root": { minWidth: 32 },
    "& .MuiTypography-root": { fontSize: 14, lineHeight: "20px" }
  }, O = /* @__PURE__ */ w(Ne, { direction: "row", sx: { alignItems: "center", gap: 1.25, p: 1.5 }, children: [
    i(36),
    /* @__PURE__ */ w(A, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ne, { noWrap: !0, sx: { fontWeight: 600, fontSize: 14, lineHeight: "20px" }, children: s }),
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
      x ? /* @__PURE__ */ t(
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
    pr,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: $,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...T ? {
        slots: { transition: lr },
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
      children: /* @__PURE__ */ w(
        A,
        {
          "data-testid": "account-menu",
          "data-glass": T ? "true" : void 0,
          sx: T ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${ee}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${An}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Aa, width: n, minWidth: n },
          children: [
            T ? /* @__PURE__ */ t(
              Yt,
              {
                isDark: I,
                solid: S,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${vr} ${Tn.duration}ms ${Tn.easing} both`,
                  [ye]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ w(
              A,
              {
                ...y.containerProps,
                sx: T ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${yr} ${Cn.duration}ms ${Cn.easing} 70ms both`,
                  [ye]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  y.lens,
                  x ? /* @__PURE__ */ t(
                    it,
                    {
                      onClick: () => F(x),
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
                        ...xi
                      },
                      children: O
                    }
                  ) : /* @__PURE__ */ t(A, { "data-testid": "account-menu-header", children: O }),
                  /* @__PURE__ */ t(Ze, {}),
                  m ? /* @__PURE__ */ w(
                    A,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...L,
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
                        /* @__PURE__ */ t(be, { children: /* @__PURE__ */ t(ns, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ne, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Oa,
                          {
                            glass: T,
                            mode: p,
                            onToggle: h,
                            accentColor: u,
                            tint: l
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ w(
                    fr,
                    {
                      autoFocusItem: e,
                      sx: { px: 0.5, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        E.map((C) => /* @__PURE__ */ w(
                          nt,
                          {
                            onClick: () => M(C),
                            "data-testid": `menu-item-${C.key}`,
                            sx: L,
                            children: [
                              /* @__PURE__ */ t(be, { children: C.icon }),
                              /* @__PURE__ */ t(ne, { sx: { flex: 1 }, children: C.label }),
                              /* @__PURE__ */ t(sr, { count: C.badge })
                            ]
                          },
                          C.key
                        )),
                        R ? /* @__PURE__ */ t(Ze, { component: "li", sx: { my: 0.5 } }) : null,
                        R ? /* @__PURE__ */ w(
                          nt,
                          {
                            onClick: () => F(R),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...L,
                              color: I ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(be, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Bn, { fontSize: "small" }) }),
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
}, Ma = {
  "&:focus, &:focus-visible": { outline: "none" }
}, La = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: i,
  title: s,
  onBrandClick: c,
  brandMenuOpen: a,
  brandColor: u,
  headerBackgroundColor: l,
  headerForegroundColor: m,
  activeAccentColor: p = "#01584f",
  activeBackgroundColor: h,
  groupArrowColor: x,
  groupAccentColor: g,
  activeForegroundColor: E,
  foregroundColor: R,
  surfaceBackgroundColor: T,
  flyoutSurfaceColor: v,
  collapsed: I,
  expandedWidth: $,
  collapsedWidth: S,
  topContent: y,
  submenuMode: b,
  color: _,
  hoverColor: F,
  avatarColor: M,
  showProfile: L = !0,
  userName: O = "User",
  userEmail: C,
  userRole: K,
  userAvatar: j,
  showNotifications: k = !0,
  notificationCount: oe = 0,
  onNotificationsClick: ie,
  whatsNewCount: _e = 0,
  onProfileClick: Ge,
  menuItems: Te,
  onLogout: Ce,
  theme: W = "light",
  showThemeToggler: G = !0,
  onThemeToggle: H
}) => {
  const Y = He(), V = Y.palette.mode === "dark", de = T ?? (V ? Y.palette.background.paper : "#ffffff"), ce = _ ?? R ?? (V ? Y.palette.text.primary : p), z = F ?? g ?? Gt(p), ht = M ?? p, Ue = d.useRef(null), [ue, Je] = d.useState(!1), fe = K ? Gn(K) : void 0, ke = (Xe) => /* @__PURE__ */ t(
    Tr,
    {
      name: O,
      avatar: j,
      color: ht,
      size: Xe
    }
  ), We = oe + _e, pe = I && b === "flyout", Ae = k ? /* @__PURE__ */ t(
    Cr,
    {
      count: We,
      onClick: ie,
      color: ce,
      hoverColor: z,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, le = L ? /* @__PURE__ */ w(
    it,
    {
      ref: Ue,
      onClick: () => Je(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ue,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: I ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        p: pe ? "4px" : 0.75,
        borderRadius: "10px",
        bgcolor: ue ? z : "transparent",
        "&:hover": { bgcolor: z },
        ...Ma
      },
      children: [
        I && !pe && k ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Hn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !We,
              children: ke(36)
            }
          )
        ) : ke(I ? 36 : 40),
        I ? null : /* @__PURE__ */ w(A, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ne,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: ce, lineHeight: 1.3 },
              children: O
            }
          ),
          fe ? /* @__PURE__ */ t(
            ne,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: ce,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: fe
            }
          ) : null
        ] })
      ]
    }
  ) : null, Ke = !!Ae && (!I || pe || !le);
  return /* @__PURE__ */ w(
    A,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": I ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          or,
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
            brandColor: u,
            headerBackgroundColor: l,
            headerForegroundColor: m,
            activeAccentColor: p,
            activeBackgroundColor: h,
            groupArrowColor: x,
            groupAccentColor: g,
            activeForegroundColor: E,
            foregroundColor: R,
            surfaceBackgroundColor: de,
            flyoutSurfaceColor: v,
            collapsed: I,
            expandedWidth: $,
            collapsedWidth: S,
            topContent: y,
            footer: le || Ke ? /* @__PURE__ */ w(
              Ne,
              {
                direction: pe ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  pe && Ke ? Ae : null,
                  le,
                  !pe && Ke ? Ae : null
                ]
              }
            ) : void 0,
            submenuMode: b
          }
        ),
        L ? /* @__PURE__ */ t(
          $a,
          {
            open: ue,
            anchorEl: Ue.current,
            onClose: () => Je(!1),
            width: Math.max($ - 16, 240),
            renderAvatar: ke,
            userName: O,
            userEmail: C,
            roleLabel: fe,
            accentColor: p,
            tint: z,
            showThemeToggler: G,
            theme: W,
            onThemeToggle: H,
            onProfileClick: Ge,
            onLinkClick: n,
            menuItems: Te,
            onLogout: Ce,
            glass: b === "flyout"
          }
        ) : null
      ]
    }
  );
}, On = he(ei), $n = he(Co), Mn = 240, Da = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, Na = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: c = !1
}) => {
  const a = He(), u = a.palette.mode === "dark", l = !!e, m = br(a.palette.background.paper), p = Ir({
    enabled: c,
    isDark: u,
    selector: ".MuiMenuItem-root",
    radius: ee
  }), h = /* @__PURE__ */ t(
    fr,
    {
      autoFocusItem: l,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 0.5, outline: "none" },
      children: r.map((x) => {
        const g = x.key === n, E = x.accentColor ?? s;
        return /* @__PURE__ */ w(
          nt,
          {
            selected: g,
            onClick: () => i(x),
            "data-testid": `platform-item-${x.key}`,
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
              /* @__PURE__ */ t(be, { sx: { minWidth: 24 }, children: /* @__PURE__ */ t(
                A,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: E,
                    boxShadow: c ? `0 0 0 3px ${u ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                ze,
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
              g ? /* @__PURE__ */ t(
                is,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, fontSize: 18, color: E }
                }
              ) : null
            ]
          },
          x.key
        );
      })
    }
  );
  return /* @__PURE__ */ t(
    pr,
    {
      open: l,
      anchorEl: e,
      onClose: o,
      onClick: (x) => x.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: lr },
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
            borderRadius: `${ee}px`
          } : { ...Da, minWidth: Mn },
          children: c ? /* @__PURE__ */ w(De, { children: [
            /* @__PURE__ */ t(
              Yt,
              {
                isDark: u,
                solid: m,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${vr} ${On.duration}ms ${On.easing} both`,
                  [ye]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ w(
              A,
              {
                ...p.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${yr} ${$n.duration}ms ${$n.easing} 70ms both`,
                  [ye]: { animation: "none" }
                },
                children: [
                  p.lens,
                  h
                ]
              }
            )
          ] }) : h
        }
      )
    }
  );
}, ka = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), i = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ w(
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
          Na,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, Wa = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: i = 0,
  ...s
}) => {
  var $;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: u,
    onNotificationsClick: l,
    userName: m = "User",
    userRole: p,
    userAvatar: h
  } = s, x = d.useRef(null), [g, E] = d.useState(
    null
  ), R = !!g, T = d.useRef(e);
  d.useEffect(() => {
    e && !T.current && E(null), T.current = e;
  }, [e]);
  const v = d.useContext(It);
  if (!a && !n)
    return null;
  const I = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ w(De, { children: [
    /* @__PURE__ */ w(
      Ne,
      {
        ref: x,
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
                it,
                {
                  onClick: () => E(x.current),
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
                    color: o,
                    bgcolor: R ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...I
                  },
                  children: /* @__PURE__ */ t(
                    hi,
                    {
                      name: m,
                      role: p,
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
            Cr,
            {
              count: u + i,
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
      pi,
      {
        anchorEl: g,
        onClose: () => E(null),
        placement: e ? "beside" : "above",
        width: e || ($ = x.current) == null ? void 0 : $.clientWidth,
        ...s
      }
    )
  ] });
}, Fa = 120, Pa = 300, Ln = he(Qn), Dn = he(Co), Ba = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, za = 'input, textarea, [contenteditable="true"]', ar = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(za)) == null || o.focus();
}, Ha = ({
  search: e,
  icon: o,
  mode: r,
  onExpand: n,
  autoFocus: i = !1,
  onAutoFocused: s,
  color: c,
  hoverColor: a
}) => {
  const u = Rr(), l = d.useContext(It), m = d.useRef(null), [p, h] = d.useState(null);
  return d.useEffect(() => {
    r === "full" && i && (ar(m.current), s == null || s());
  }, [r, i, s]), r === "full" ? /* @__PURE__ */ t(
    A,
    {
      ref: m,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : r === "popover" && l ? /* @__PURE__ */ t(
    Ga,
    {
      search: e,
      icon: o,
      color: c,
      railTooltip: u
    }
  ) : /* @__PURE__ */ w(
    A,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(ve, { title: "Search", placement: "right", arrow: !0, ...u, children: /* @__PURE__ */ t(
          xe,
          {
            "aria-label": "Search",
            onClick: (x) => r === "expand" ? n == null ? void 0 : n() : h(x.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: c,
              borderRadius: "8px",
              "&:hover": { bgcolor: a }
            },
            children: o ?? /* @__PURE__ */ t(hr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          pr,
          {
            open: !!p,
            anchorEl: p,
            onClose: () => h(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (x) => ar(x)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1, width: 320 } } },
            children: e
          }
        )
      ]
    }
  );
}, Ga = ({ search: e, icon: o, color: r, railTooltip: n }) => {
  const i = He().palette.mode === "dark";
  ls(i, Qo(r, i ? 0.3 : 0.35));
  const s = `rgb(${Io()})`, c = br(i ? "#1e2430" : "#ffffff"), a = {
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
  }, u = d.useRef(null), l = d.useRef(null), [m, p] = d.useState(!1), h = d.useRef(!1), x = d.useRef(void 0), g = d.useRef(void 0), E = () => {
    clearTimeout(x.current), clearTimeout(g.current);
  }, R = d.useCallback(() => {
    E(), h.current = !1, p(!1);
  }, []), T = () => {
    clearTimeout(g.current), m || (clearTimeout(x.current), x.current = setTimeout(
      () => p(!0),
      Fa
    ));
  }, v = () => {
    clearTimeout(x.current), clearTimeout(g.current), g.current = setTimeout(() => {
      !h.current && !Ba(l.current) && p(!1);
    }, Pa);
  };
  return d.useEffect(() => E, []), d.useEffect(() => {
    if (!m)
      return;
    const I = setTimeout(() => ar(l.current)), $ = (y) => {
      var _, F;
      const b = y.target;
      !((_ = l.current) != null && _.contains(b)) && !((F = u.current) != null && F.contains(b)) && R();
    }, S = (y) => {
      var b;
      y.key === "Escape" && (R(), (b = u.current) == null || b.focus());
    };
    return document.addEventListener("pointerdown", $), document.addEventListener("keydown", S), () => {
      clearTimeout(I), document.removeEventListener("pointerdown", $), document.removeEventListener("keydown", S);
    };
  }, [m, R]), /* @__PURE__ */ w(
    A,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          ve,
          {
            title: m ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...n,
            children: /* @__PURE__ */ t(
              xe,
              {
                ref: u,
                "aria-label": "Search",
                "aria-expanded": m,
                onMouseEnter: T,
                onMouseLeave: v,
                onClick: () => {
                  E(), h.current = !0, p(!0);
                },
                sx: {
                  width: ae,
                  height: ae,
                  color: r,
                  borderRadius: `${ee}px`
                },
                children: o ?? /* @__PURE__ */ t(
                  hr,
                  {
                    sx: { fontSize: Ut }
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          dr,
          {
            open: m,
            anchorEl: u.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ w(
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
                  borderRadius: `${ee}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    Yt,
                    {
                      isDark: i,
                      solid: c,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${vr} ${Ln.duration}ms ${Ln.easing} both`,
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
                        ...a,
                        animation: `${yr} ${Dn.duration}ms ${Dn.easing} 60ms both`,
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
}, Ua = 80, Ka = 300, Xa = 32, ja = (e) => {
  const o = d.useRef(/* @__PURE__ */ new WeakSet()), r = d.useRef(void 0), n = d.useRef(void 0), [i, s] = d.useState(!1), [c, a] = d.useState(!1), [u, l] = d.useState(!1), m = d.useRef(null), p = () => {
    clearTimeout(r.current), clearTimeout(n.current), r.current = void 0, n.current = void 0;
  };
  d.useEffect(() => {
    if (!e) {
      p(), s(!1), a(!1), l(!1);
      return;
    }
    const g = (v) => {
      var $;
      if (v.pointerType !== "mouse")
        return;
      const I = v.clientX <= Xa;
      I && (($ = m.current) == null || $.style.setProperty(
        "--edge-glow-y",
        `${v.clientY}px`
      )), l(I);
    }, E = () => l(!1), R = () => {
      clearTimeout(r.current), r.current = void 0, n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, s(!1), a(!1);
      }, Ka));
    }, T = (v) => {
      o.current.has(v) || R();
    };
    return document.addEventListener("mouseover", T), document.addEventListener("pointermove", g, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", R), document.documentElement.addEventListener("mouseleave", E), () => {
      p(), document.removeEventListener("mouseover", T), document.removeEventListener("pointermove", g), document.documentElement.removeEventListener(
        "mouseleave",
        R
      ), document.documentElement.removeEventListener(
        "mouseleave",
        E
      );
    };
  }, [e]);
  const h = {
    onMouseOver: (g) => {
      o.current.add(g.nativeEvent), clearTimeout(n.current), n.current = void 0, !i && r.current === void 0 && (r.current = setTimeout(() => {
        r.current = void 0, s(!0);
      }, Ua));
    },
    onFocus: (g) => {
      Va(g.target) && a(!0);
    },
    onBlur: (g) => {
      const E = g.relatedTarget;
      (!E || !g.currentTarget.contains(E)) && a(!1);
    },
    onKeyDown: (g) => {
      g.key === "Escape" && (a(!1), s(!1));
    }
  }, x = e && (i || c);
  return {
    shown: x,
    nearEdge: e && u && !x,
    glowRef: m,
    rootProps: h
  };
}, Va = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Ya = 100, qa = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = d.useState(!1), [s, c] = d.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const l = (p) => {
      r.current.has(p) || (a(), i(!1));
    }, m = () => {
      a(), i(!1);
    };
    return document.addEventListener("mouseover", l), document.documentElement.addEventListener("mouseleave", m), () => {
      a(), document.removeEventListener("mouseover", l), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), d.useEffect(() => {
    if (!s)
      return;
    const l = (m) => {
      var p;
      (p = e.current) != null && p.contains(m.target) || c(!1);
    };
    return document.addEventListener("pointerdown", l), () => document.removeEventListener("pointerdown", l);
  }, [s]), {
    expanded: n || s,
    pin: () => c(!0),
    rootProps: {
      ref: e,
      onMouseOver: (l) => {
        r.current.add(l.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, i(!0);
        }, Ya));
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
}, Za = 300, Vo = 288, Ja = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Qa = 18, Nn = 72, Yo = 90, ec = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", tc = 68, oc = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), rc = typeof window > "u" ? po : Bi, ol = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: c = "rail",
  sidebarSubmenu: a = "expand",
  sidebarAutoHide: u = !1,
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: m,
  logo: p,
  onBrandClick: h,
  searchComponent: x,
  searchIcon: g,
  notificationsIcon: E,
  brandColor: R,
  contentPadding: T = Vn,
  userMenuItems: v,
  sidebarBackgroundColor: I,
  sidebarHeaderBackgroundColor: $,
  groupAccentColor: S,
  activeSidebarForegroundColor: y,
  enableRefreshToken: b = !1,
  holdSessionSkeleton: _ = !1,
  sessionSkeletonContent: F,
  activePath: M,
  onLinkClick: L,
  showProfile: O = !0,
  userName: C,
  userRole: K,
  userAvatar: j,
  userEmail: k,
  onLogout: oe,
  showSettings: ie = !0,
  onSettingsClick: _e,
  onProfileClick: Ge,
  showNotifications: Te = !0,
  notificationCount: Ce = 0,
  NotificationSidebarContent: W,
  whatsNewCount: G = 0,
  onNotificationsClick: H,
  platforms: Y,
  currentPlatformKey: V,
  onPlatformSelect: de,
  onVerify: ce,
  alertProps: z,
  style: ht,
  sidebarStyles: Ue,
  contentStyles: ue,
  accentColor: Je,
  sidebarAccentColor: fe,
  sidebarActiveBackgroundColor: ke,
  sidebarGroupArrowColor: We,
  sidebarForegroundColor: pe,
  contentBackgroundColor: Ae,
  theme: le = "light",
  darkModeSelector: Ke,
  showThemeToggler: st = !1,
  onThemeToggle: Xe,
  GlobalChatSidebar: pt,
  useChatSidebar: _t,
  chatPanelMode: Ao = "docked",
  chatPanelPosition: qt = "right",
  chatPanelWidth: Tt = 420,
  onChatClose: Oo,
  showAssistant: Qe = !1,
  assistantPlacement: Ct = "sidebar",
  assistantShortcut: Zt = "j",
  onAssistantClick: at,
  assistantActive: At = !1,
  assistantBusy: Ot = !1,
  customNavbar: $t,
  customNavbarProps: Jt,
  redirectToLogin: mt,
  apiBaseUrl: Qt
}) => {
  const eo = kn(), re = Wn(eo.breakpoints.down("md")), to = Jr(
    () => wo(_r(le)),
    [le]
  ), f = le === "dark", D = Je ?? "#01584f", B = fe ?? D, P = Jn(
    typeof Ae == "object" ? Ae[le] : Ae,
    f
  ), U = c === "collapsible", J = c === "panel", Se = J && i && !re, Z = c === "rail-labeled", Oe = U || Z, we = Zn(
    I,
    f
  ), $o = $ ?? we, me = pe ?? (f ? "#ffffff" : B), Mt = S ?? Gt(me), Lt = $ ? Jo($o) : me, Ar = (N) => /* @__PURE__ */ t(
    X,
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
  ), oo = R ?? Lt, [Or, Mo] = lt(
    null
  ), Lo = ((Y == null ? void 0 : Y.length) ?? 0) > 1, bi = Qr(() => Mo(null), []), vi = (N) => {
    Mo(null), de ? de(N) : N.key !== V && N.url && window.location.assign(N.url);
  }, $r = (N) => Lo ? /* @__PURE__ */ t(
    ka,
    {
      anchorEl: Or,
      onClose: bi,
      platforms: Y,
      currentKey: V,
      onSelect: vi,
      accentColor: D,
      glass: a === "flyout" && (U || J) && !re,
      children: N
    }
  ) : N, ro = Lo ? (N) => Mo(N.currentTarget) : h, no = Lo ? !!Or : void 0, Do = $r(
    p ?? Ar(oo)
  ), yi = $r(
    p ?? Ar(R ?? me)
  ), No = qa(), $e = To(a, c), Fe = $e || !No.expanded, et = i && !re && us(u, a, c), tt = ja(et), Mr = $e ? "popover" : "expand", Lr = $e ? Ht : Bt, Dr = $e ? "transparent" : we, Nr = $e && !$ ? "transparent" : $o, [Si, kr] = lt(!1), wi = Qr(() => kr(!1), []), je = qn({
    showSidebar: i,
    isMobile: re,
    sidebarVariant: c,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [Wr, ct] = lt(!1), [Fr, ko] = lt(!1), ge = re && l === "bottom-bar", Pr = `calc(${mi}px + env(safe-area-inset-bottom, 0px))`, [Wo, Br] = lt({ open: !1, tab: "notifications" }), zr = () => Br((N) => ({ ...N, open: !1 })), Ei = Te && !!W, [Ri, Ii] = lt(!0), [_i, Ti] = lt(!1), Fo = _t == null ? void 0 : _t(), Hr = (Fo == null ? void 0 : Fo.isOpen) ?? !1, Gr = Ao === "floating" ? "floating" : "docked", Ci = Gr === "docked" && Hr && pt && !re ? Tt : 0, io = Go(ce), Ur = Go(!1), Kr = Jr(
    () => ta(Qt),
    [Qt]
  );
  po(() => {
    io.current = ce;
  }, [ce]);
  const Po = Go(at);
  Po.current = at;
  const Dt = Qe && Zt ? Zt.toLowerCase() : null;
  po(() => {
    if (!Dt)
      return;
    const N = (te) => {
      (te.metaKey || te.ctrlKey) && !te.altKey && !te.shiftKey && te.key.toLowerCase() === Dt && Po.current && (te.preventDefault(), Po.current());
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [Dt]);
  const Xr = (N) => {
    const te = oe(N);
    te instanceof Promise && te.catch((Ve) => {
      console.error("Error in logout handler:", Ve);
    });
  };
  if (rc(() => {
    (() => {
      var te;
      try {
        const { isAuthenticated: Ve } = Qs();
        if (!Ve) {
          console.log("No session found, redirecting to login"), Vt(), mt();
          return;
        }
        if (!Ur.current) {
          const { user: kt, error: Ho } = ea();
          if (kt && !Ho) {
            const ki = {
              name: kt.name || "",
              email: kt.email || "",
              profilePicture: kt.profilePicture || "",
              role: kt.role || ""
            };
            Ur.current = !0, (te = io.current) == null || te.call(io, ki);
          } else
            Ho && console.error("Error getting user data:", Ho);
        }
        Ti(!0);
      } catch (Ve) {
        console.error("Error checking session:", Ve), Vt(), mt();
      } finally {
        Ii(!1);
      }
    })();
  }, [mt]), po(() => {
    b && oa(Kr, mt);
  }, [b, Kr]), Ri || _)
    return /* @__PURE__ */ t(
      Zs,
      {
        theme: le,
        darkModeSelector: Ke,
        sidebarVariant: c,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: i,
        contentPadding: T,
        sidebarBackgroundColor: I,
        contentBackgroundColor: Ae,
        content: F
      }
    );
  if (!_i)
    return null;
  const Nt = x ?? ($t ? /* @__PURE__ */ t($t, { ...Jt }) : null), Ai = (N) => {
    ct(!1), ko(!1), Br({ open: !0, tab: N });
  }, Bo = W && (() => Ai("notifications")), Oi = Ce + G, jr = {
    avatarColor: B,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: v == null ? void 0 : v.map(
      (N) => N.onClick || !N.path ? N : { ...N, onClick: () => L == null ? void 0 : L(N.path) }
    ),
    showNotifications: Te,
    notificationCount: Ce,
    whatsNewCount: G,
    onNotificationsClick: Bo,
    showProfile: O,
    userName: C,
    userRole: K,
    userAvatar: j,
    showSettings: ie,
    onSettingsClick: _e,
    showThemeToggler: st,
    theme: le,
    onThemeToggle: Xe,
    onLogout: Xr
  }, zo = (N) => /* @__PURE__ */ t(
    Wa,
    {
      ...jr,
      compact: N,
      color: me,
      hoverColor: Mt
    }
  ), Vr = Dt ? [oc() ? "⌘" : "Ctrl", Dt.toUpperCase()] : void 0, $i = (N) => Qe && Ct === "sidebar" ? /* @__PURE__ */ t(
    yn,
    {
      variant: N ? "sidebar-icon" : "sidebar",
      onClick: at,
      active: At,
      busy: Ot,
      shortcutKeys: Vr,
      accentColor: me
    }
  ) : null, Mi = (N) => Nt ? /* @__PURE__ */ t(
    Ha,
    {
      search: Nt,
      icon: g,
      mode: N,
      onExpand: () => {
        No.pin(), kr(!0);
      },
      autoFocus: Si,
      onAutoFocused: wi,
      color: me,
      hoverColor: Mt
    }
  ) : null, so = (N) => {
    const te = $i(N !== "full"), Ve = Mi(N);
    return te || Ve ? /* @__PURE__ */ w(
      Pt,
      {
        spacing: $e ? `${Sr}px` : 1.5,
        sx: { alignItems: N === "full" ? "stretch" : "center" },
        children: [
          te,
          $e && te && Ve ? /* @__PURE__ */ t(
            X,
            {
              role: "separator",
              sx: {
                width: "100%",
                borderTop: `1px solid ${Gt(me)}`
              }
            }
          ) : null,
          Ve
        ]
      }
    ) : void 0;
  }, Yr = () => /* @__PURE__ */ t(
    or,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: M,
      onLinkClick: L,
      showHeaderBar: U,
      logo: Do,
      title: n,
      onBrandClick: ro,
      brandMenuOpen: no,
      brandColor: oo,
      headerBackgroundColor: U ? Nr : void 0,
      headerForegroundColor: U ? Lt : void 0,
      activeAccentColor: B,
      activeBackgroundColor: ke,
      groupArrowColor: We,
      groupAccentColor: S,
      activeForegroundColor: y,
      foregroundColor: pe,
      surfaceBackgroundColor: Dr,
      flyoutSurfaceColor: we,
      collapsed: Z || Fe,
      showLabels: Z,
      expandedWidth: Vo,
      collapsedWidth: Z ? Xn : Lr,
      topContent: so(
        Z ? "popover" : Fe ? Mr : "full"
      ),
      footer: zo(Z || Fe),
      submenuMode: $e ? "flyout" : "inline"
    }
  ), qr = (N) => $e ? Li(N) : Di(N), Li = (N) => /* @__PURE__ */ w(
    X,
    {
      component: "aside",
      ...et ? tt.rootProps : {},
      "data-auto-hide": et ? "true" : void 0,
      "data-shown": et ? String(tt.shown) : void 0,
      sx: {
        // Above the page, including its sticky app bars
        zIndex: (te) => te.zIndex.appBar + 1,
        top: 0,
        height: "100vh",
        ...et ? {
          position: "fixed",
          left: 0,
          width: Ht + 2 * ft,
          pointerEvents: "none"
        } : {
          width: je,
          minWidth: je,
          flexShrink: 0,
          position: "sticky",
          alignSelf: "flex-start",
          bgcolor: P
        }
      },
      children: [
        et && /* @__PURE__ */ t(
          X,
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
        et && /* @__PURE__ */ t(
          X,
          {
            ref: tt.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(tt.nearEdge),
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
              background: `radial-gradient(${Nn}px ${Yo}px at 0 var(--edge-glow-y), ${Be(me, f ? 0.5 : 0.4)}, ${Be(me, 0)})`,
              opacity: tt.nearEdge ? 1 : 0,
              transition: "opacity 200ms ease",
              // And a bright line along the edge beside it
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 3,
                background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${Yo}px), ${Be(me, f ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${Yo}px))`
              }
            }
          }
        ),
        /* @__PURE__ */ w(
          X,
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
              borderRadius: `${jn}px`,
              display: "flex",
              flexDirection: "column",
              ...et && {
                pointerEvents: tt.shown ? "auto" : "none",
                opacity: tt.shown ? 1 : 0,
                transform: tt.shown ? "none" : `translateX(calc(-100% - ${2 * ft}px))`,
                transition: ec,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "opacity 120ms ease"
                }
              },
              ...Ue
            },
            children: [
              /* @__PURE__ */ t(
                Yt,
                {
                  isDark: f,
                  solid: we,
                  sx: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit"
                  }
                }
              ),
              /* @__PURE__ */ t(
                X,
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
  ), Di = (N) => /* @__PURE__ */ t(
    X,
    {
      component: "aside",
      sx: {
        width: Bt,
        minWidth: Bt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (te) => te.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        X,
        {
          ...$e ? {} : No.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Fe ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Fe ? Bt : Vo,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: we,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Fe ? "none" : `4px 0 24px rgba(0, 0, 0, ${f ? 0.5 : 0.12})`,
            transition: Ja,
            ...Ue
          },
          children: N
        }
      )
    }
  ), Ni = Yn(
    T,
    eo
  );
  return /* @__PURE__ */ t(vo, { theme: to, children: /* @__PURE__ */ t(Un.Provider, { value: B, children: /* @__PURE__ */ t(Ro.Provider, { value: we, children: /* @__PURE__ */ t(gi.Provider, { value: E, children: /* @__PURE__ */ w(
    X,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...ht
      },
      children: [
        /* @__PURE__ */ t(qo, {}),
        re && /* @__PURE__ */ t(
          Sa,
          {
            height: mo,
            onMenuClick: i && !ge ? () => ct(!0) : void 0,
            appName: n,
            logo: Do,
            onBrandClick: ro,
            brandMenuOpen: no,
            background: $o,
            color: Lt,
            brandColor: oo,
            endContent: Te ? /* @__PURE__ */ t(
              Cr,
              {
                count: Oi,
                onClick: Bo,
                color: Lt,
                hoverColor: Mt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !re && Z && /* @__PURE__ */ t(
          X,
          {
            component: "aside",
            sx: {
              width: je,
              minWidth: je,
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
              ...Ue
            },
            children: Yr()
          }
        ),
        i && !re && U && qr(
          /* @__PURE__ */ w(De, { children: [
            Yr(),
            (z == null ? void 0 : z.show) && !Fe && /* @__PURE__ */ t(ho, { ...z })
          ] })
        ),
        Se && qr(
          /* @__PURE__ */ w(De, { children: [
            /* @__PURE__ */ t(
              La,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: M,
                onLinkClick: L,
                logo: Do,
                title: n,
                onBrandClick: ro,
                brandMenuOpen: no,
                brandColor: oo,
                headerBackgroundColor: Nr,
                headerForegroundColor: Lt,
                activeAccentColor: B,
                activeBackgroundColor: ke,
                groupArrowColor: We,
                groupAccentColor: S,
                activeForegroundColor: y,
                foregroundColor: pe,
                surfaceBackgroundColor: Dr,
                flyoutSurfaceColor: we,
                collapsed: Fe,
                expandedWidth: Vo,
                collapsedWidth: Lr,
                topContent: so(
                  Fe ? Mr : "full"
                ),
                submenuMode: $e ? "flyout" : "inline",
                color: me,
                hoverColor: Mt,
                avatarColor: B,
                showProfile: O,
                userName: C,
                userEmail: k,
                userRole: K,
                userAvatar: j,
                showNotifications: Te,
                notificationCount: Ce,
                onNotificationsClick: Ei ? Bo : H,
                whatsNewCount: G,
                onProfileClick: Ge,
                menuItems: v,
                onLogout: Xr,
                theme: le,
                showThemeToggler: st,
                onThemeToggle: Xe
              }
            ),
            (z == null ? void 0 : z.show) && !Fe && /* @__PURE__ */ t(ho, { ...z })
          ] })
        ),
        i && !re && !Oe && !J && /* @__PURE__ */ t(
          en,
          {
            variant: "permanent",
            sx: {
              width: je,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: je,
                boxSizing: "border-box",
                bgcolor: P,
                borderRight: "none"
              },
              ...Ue
            },
            children: /* @__PURE__ */ w(
              X,
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
                    X,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        yo,
                        {
                          logo: yi,
                          appName: n,
                          onClick: ro,
                          menuOpen: no,
                          color: R ?? me,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  so("popover"),
                  /* @__PURE__ */ w(
                    X,
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
                          ma,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: M,
                            onLinkClick: L,
                            accentColor: B,
                            surfaceBackgroundColor: P,
                            railShowTitles: s
                          }
                        ),
                        (z == null ? void 0 : z.show) && /* @__PURE__ */ t(
                          ho,
                          {
                            ...z
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(X, { sx: { py: 1.5 }, children: zo(!0) })
                ]
              }
            )
          }
        ),
        i && re && /* @__PURE__ */ w(
          Hi,
          {
            anchor: ge ? "bottom" : "left",
            open: Wr,
            onOpen: () => ct(!0),
            onClose: () => ct(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: (N) => N.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: we,
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
                X,
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
                or,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: M,
                  onLinkClick: (N) => {
                    L == null || L(N), ct(!1);
                  },
                  onLinkAction: () => ct(!1),
                  collapsed: !1,
                  expandedWidth: ge ? "100%" : Za,
                  activeAccentColor: B,
                  activeBackgroundColor: ke,
                  groupArrowColor: We,
                  groupAccentColor: S,
                  activeForegroundColor: y,
                  foregroundColor: pe,
                  surfaceBackgroundColor: we,
                  topInsetPx: ge ? 8 : 0,
                  topContent: ge ? void 0 : so("full"),
                  footer: ge ? void 0 : zo(!1)
                }
              ),
              (z == null ? void 0 : z.show) && /* @__PURE__ */ t(ho, { ...z })
            ]
          }
        ),
        ge && Nt && /* @__PURE__ */ t(
          ya,
          {
            open: Fr,
            onClose: () => ko(!1),
            search: Nt
          }
        ),
        ge && /* @__PURE__ */ t(
          va,
          {
            ...jr,
            pinnedLinks: m,
            activePath: M,
            onLinkClick: L,
            onMenuClick: i ? () => ct(!0) : void 0,
            menuOpen: Wr,
            onSearchClick: Nt ? () => ko(!0) : void 0,
            searchOpen: Fr,
            showAssistant: Qe,
            onAssistantClick: at,
            assistantActive: At,
            showProfile: O,
            background: we,
            color: me,
            activeColor: B,
            activeBackground: Mt
          }
        ),
        /* @__PURE__ */ t(
          X,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Ni,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": re ? `${mo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: je ? `calc(100% - ${je}px)` : "100%",
              mt: re ? `${mo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ge && {
                pb: `calc(var(--lumora-content-padding) + ${Pr})`
              },
              backgroundColor: P,
              ...ue
            },
            children: e
          }
        ),
        pt && /* @__PURE__ */ t(
          aa,
          {
            open: Hr,
            variant: Gr,
            position: qt,
            width: Tt,
            sidebarWidthPx: je,
            bottomOffsetPx: Qe && Ct === "floating" ? tc : 0,
            fullScreen: re,
            fullScreenBottom: ge ? Pr : "0px",
            onClose: Oo,
            children: /* @__PURE__ */ t(pt, {})
          }
        ),
        Qe && Ct === "floating" && !ge && /* @__PURE__ */ t(
          yn,
          {
            variant: "floating",
            rightOffsetPx: Ci,
            shortcutKeys: Vr,
            onClick: at,
            active: At,
            busy: Ot
          }
        ),
        Te && W && /* @__PURE__ */ t(
          en,
          {
            anchor: "right",
            open: Wo.open,
            onClose: zr,
            slotProps: {
              paper: {
                sx: {
                  width: 380,
                  maxWidth: "100vw"
                }
              }
            },
            children: /* @__PURE__ */ t(
              W,
              {
                onClose: zr,
                initialTab: Wo.tab
              },
              Wo.tab
            )
          }
        )
      ]
    }
  ) }) }) }) });
};
export {
  Q as AUTH_ERROR_CODES,
  q as AuthError,
  or as CollapsibleSidebar,
  el as FullBleedSection,
  js as Kbd,
  Zs as LumoraShellSkeleton,
  ol as LumoraWrapper,
  Vt as clearAuthTokens,
  ol as default,
  tl as getAuthErrorMessage,
  jt as getAuthTokens,
  ea as getCurrentUser,
  _r as getDesignTokens,
  Qs as isAuthenticated,
  ir as logAuthError,
  li as storeAuthTokens
};
