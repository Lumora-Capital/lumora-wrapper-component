import { jsx as t, jsxs as w, Fragment as Ae } from "react/jsx-runtime";
import Ss from "@mui/icons-material/KeyboardArrowDownRounded";
import ws from "@mui/icons-material/KeyboardArrowUpRounded";
import Rs from "@mui/icons-material/ChevronRightRounded";
import _ from "@mui/material/Box";
import Br from "@mui/material/Collapse";
import Je from "@mui/material/Divider";
import be from "@mui/material/IconButton";
import Yt from "@mui/material/ListItemButton";
import ye from "@mui/material/ListItemIcon";
import ke from "@mui/material/ListItemText";
import $e from "@mui/material/Stack";
import ve from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as Ne, createTheme as uo, alpha as at, ThemeProvider as so } from "@mui/material/styles";
import * as l from "react";
import { useMemo as Wr, useState as st, useCallback as Pr, useRef as Ao, useEffect as to, useLayoutEffect as Es } from "react";
import tt from "@mui/material/ButtonBase";
import { keyframes as Vo } from "@emotion/react";
import qo from "@mui/material/Fade";
import Yo from "@mui/material/Popper";
import { useTheme as _n, CssBaseline as ko, GlobalStyles as Is, Box as Q, useMediaQuery as Cn, Stack as No, Skeleton as Ue, Drawer as Gr, SwipeableDrawer as _s } from "@mui/material";
import zr from "axios";
import Cs from "@mui/material/Card";
import Ts from "@mui/material/CardContent";
import Tn from "@mui/material/Button";
import Os from "@mui/icons-material/AutoAwesomeRounded";
import As from "@mui/material/Grow";
import Zo from "@mui/material/Paper";
import $s from "@mui/material/Slide";
import Ms from "@mui/material/ListSubheader";
import Qe from "@mui/material/MenuItem";
import Qo from "@mui/material/MenuList";
import On from "@mui/icons-material/MenuRounded";
import Jo from "@mui/icons-material/SearchRounded";
import An from "@mui/icons-material/LogoutRounded";
import $n from "@mui/icons-material/NotificationsNoneOutlined";
import Ds from "@mui/icons-material/SettingsOutlined";
import Ls from "@mui/material/Avatar";
import ks from "@mui/material/Menu";
import Hr from "@mui/material/ToggleButton";
import Ns from "@mui/material/ToggleButtonGroup";
import Fs from "@mui/material/Drawer";
import Bs from "@mui/material/AppBar";
import Ws from "@mui/material/Toolbar";
import Mn from "@mui/material/Badge";
import Ps from "@mui/icons-material/DarkModeOutlined";
import Gs from "@mui/icons-material/LightModeOutlined";
import zs from "@mui/icons-material/SettingsBrightnessOutlined";
import er from "@mui/material/Popover";
import Hs from "@mui/icons-material/CheckRounded";
const io = ({
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
  }, p = /* @__PURE__ */ w(Ae, { children: [
    o ? /* @__PURE__ */ t(
      ae,
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
    tt,
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
      children: p
    }
  ) : /* @__PURE__ */ t($e, { direction: "row", "data-testid": s, sx: a, children: p });
}, Ur = !1, Dn = { stiffness: 320, damping: 24 }, Ln = { stiffness: 320, damping: 28 }, tr = { stiffness: 520, damping: 20 }, kn = { stiffness: 380, damping: 36 }, fo = { stiffness: 260, damping: 28 }, Us = "cubic-bezier(0.32, 1.28, 0.52, 1)", Xs = 420, Xr = 60, Ks = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Kr = /* @__PURE__ */ new Map(), Se = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = Kr.get(n);
  if (i)
    return i;
  if (!Ks)
    return { easing: Us, duration: Xs };
  const s = 1 / 600;
  let c = 0, a = 0, p = 0, m = 1 / Xr;
  const d = [0];
  for (; p < 3; ) {
    const u = (-e * (c - 1) - o * a) / r;
    if (a += u * s, c += a * s, p += s, p >= m && (d.push(c), m += 1 / Xr, Math.abs(c - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  d[d.length - 1] = 1;
  const g = {
    easing: `linear(${d.map((u) => Number(u.toFixed(4))).join(", ")})`,
    duration: Math.round(p * 1e3)
  };
  return Kr.set(n, g), g;
}, et = (e) => !!(e && typeof e.animate == "function"), je = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, At = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, js = (e, o = 1.14) => {
  if (!et(e) || je())
    return;
  const r = Se(tr);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, mt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, pt = (e, o) => e ? `${e}/${o.text}` : o.text, qe = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => qe(n, o))) ?? !1 : !1;
}, Le = (e, o) => !!(o && e.path === o), or = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return mt(r) ? or(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Fo = (e) => {
  const o = ho(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((c) => {
    const a = c / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, ao = (e) => {
  const o = ho(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, Bo = (e, o) => {
  const r = ho(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, ho = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Nn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), rr = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Vs = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", qs = Vo`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, _e = "@media (prefers-reduced-motion: reduce)", J = 6, nr = "9, 193, 174", Fn = l.createContext(
  void 0
), Pt = l.createContext(
  void 0
), sr = (e) => l.useContext(Pt) ?? e, gt = () => {
  const e = l.useContext(Fn), o = e ? ho(e) : null;
  return o ? o.join(", ") : nr;
}, jr = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, Ys = (e, o) => e ? "255, 255, 255" : o, Zs = (e, o, r = nr) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${Vs(e)}, 0 0 0 1px ${rr(e)}`
}), Qs = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", ir = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: rr(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${J}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), ar = Vo`
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
`, cr = Vo`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, lr = (e, o = nr, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Nt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: Bo(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${Bo(e, 0.45)}`
}, Js = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${rr(e)}`;
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
}, Ft = "data-rail-item", ei = `[${Ft}], button, [role="button"]`, po = l.createContext(!1), dr = () => {
  const e = l.useContext(po), o = Ne(), r = l.useContext(Pt);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: ir(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ye = Se(kn), ur = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  lean: s = 3,
  pinSelector: c,
  pinKey: a = null
}) => {
  const p = l.useRef(null), m = gt(), [d, g] = l.useState(null), u = l.useRef(null), f = l.useRef(null), x = (S, O) => {
    f.current = O;
    const L = O.getBoundingClientRect(), M = S.getBoundingClientRect(), W = n ?? L.width, P = n ?? L.height, A = {
      top: Math.round(L.top - M.top + (L.height - P) / 2),
      left: Math.round(L.left - M.left + (L.width - W) / 2),
      width: Math.round(W),
      height: Math.round(P)
    };
    g(
      (N) => N && N.visible && N.top === A.top && N.left === A.left && N.width === A.width && N.height === A.height ? N : { ...A, visible: !0, instant: !(N != null && N.visible) }
    );
  }, E = (S, O) => {
    var M;
    const L = (M = O == null ? void 0 : O.closest) == null ? void 0 : M.call(O, r);
    return L && S.contains(L) ? L : null;
  }, b = (S) => {
    if (!e)
      return;
    const O = E(S.currentTarget, S.target);
    O && x(S.currentTarget, O);
  }, y = (S) => {
    if (!e)
      return;
    const O = E(S.currentTarget, S.target);
    O && S.target.matches(":focus-visible") && x(S.currentTarget, O);
  }, R = (S) => {
    const O = p.current, L = f.current;
    if (!e || !O || !L || !s || je())
      return;
    const M = L.getBoundingClientRect(), W = (P, A) => Math.max(-1, Math.min(1, P / (A / 2))) * s;
    O.style.transform = `translate(${W(S.clientX - (M.left + M.width / 2), M.width)}px, ${W(S.clientY - (M.top + M.height / 2), M.height)}px)`;
  }, v = () => {
    var L;
    const S = (L = p.current) == null ? void 0 : L.parentElement, O = c && (S == null ? void 0 : S.querySelector(c));
    return S && O ? { container: S, item: O } : null;
  }, C = () => {
    p.current && (p.current.style.transform = "");
    const S = v();
    if (S) {
      x(S.container, S.item);
      return;
    }
    f.current = null, g((O) => O != null && O.visible ? { ...O, visible: !1 } : O);
  };
  l.useEffect(() => {
    var O, L;
    if (!e)
      return;
    const S = v();
    S ? x(S.container, S.item) : (L = (O = p.current) == null ? void 0 : O.parentElement) != null && L.matches(":hover") || C();
  }, [e, a]);
  const T = (S) => {
    const O = S.relatedTarget;
    (!O || !S.currentTarget.contains(O)) && (S.currentTarget.matches(":hover") || C());
  };
  return l.useEffect(() => {
    const S = p.current;
    if (!(d != null && d.visible)) {
      u.current = null;
      return;
    }
    const O = u.current;
    if (u.current = d.top, !et(S) || je())
      return;
    if (O === null || d.instant) {
      S.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ye.duration,
        easing: Ye.easing
      });
      return;
    }
    const L = Math.min(Math.abs(d.top - O) / 600, 0.08);
    L && S.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - L / 2} ${1 + L}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ye.duration, easing: "ease-out" }
    );
  }, [d == null ? void 0 : d.top, d == null ? void 0 : d.visible, d == null ? void 0 : d.instant]), {
    lens: e && d ? /* @__PURE__ */ t(
      _,
      {
        ref: p,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": d.visible ? "true" : "false",
        sx: {
          ...lr(o, m),
          borderRadius: `${i}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: d.width,
          height: d.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset. `transform` carries
          // only the lean.
          translate: `${d.left}px ${d.top}px`,
          // Shrinks away as it fades; wells back up on return
          scale: d.visible ? "1" : "0.7",
          opacity: d.visible ? 1 : 0,
          pointerEvents: "none",
          transition: d.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${Ye.duration}ms ${Ye.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [_e]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: b,
      onMouseMove: R,
      onMouseLeave: C,
      onFocus: y,
      onBlur: T,
      onScrollCapture: C
    } : {}
  };
}, ti = (e, o, r = null) => {
  const n = ur({
    enabled: e,
    isDark: o,
    selector: ei,
    size: 46,
    radius: J,
    pinSelector: `[${Ft}][data-open="true"]`,
    pinKey: r
  });
  return {
    ...n,
    lens: n.lens ? l.cloneElement(n.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, oi = (e, o) => {
  let r = 0, n = 0, i = e;
  for (; i && i !== o; ) {
    r += i.offsetTop, n += i.offsetLeft;
    const a = i.offsetParent;
    for (let p = i.parentElement; p && p !== o && (r -= p.scrollTop, n -= p.scrollLeft, p !== a); p = p.parentElement)
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
}, ri = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const i = l.useRef(null), [s, c] = l.useState(null), a = l.useRef(null), p = l.useCallback(
    (d) => {
      const g = n.current;
      if (!e || !g)
        return;
      const u = g.querySelector(
        `[${Ft}][data-active="true"]`
      );
      if (!u) {
        c(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const f = oi(u, g);
      c(
        (x) => x && x.visible && x.top === f.top && x.left === f.left && x.width === f.width && x.height === f.height ? x : {
          ...f,
          visible: !0,
          instant: d || !(x != null && x.visible)
        }
      );
    },
    [e, n]
  );
  return l.useLayoutEffect(() => {
    p(!1);
  }), l.useEffect(() => {
    const d = n.current;
    if (!e || !d)
      return;
    let g = 0;
    const u = () => {
      cancelAnimationFrame(g), g = requestAnimationFrame(() => p(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => p(!0));
    f == null || f.observe(d);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(u);
    return x == null || x.observe(d, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(g), f == null || f.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, p]), l.useEffect(() => {
    const d = i.current;
    if (!(s != null && s.visible)) {
      a.current = null;
      return;
    }
    const g = a.current;
    if (a.current = s.top, g === null || s.instant || !et(d) || je())
      return;
    const u = Math.min(Math.abs(s.top - g) / 600, 0.08);
    u && d.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - u / 2} ${1 + u}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ye.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    _,
    {
      ref: i,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...Nt(r, o),
        borderRadius: `${J}px`,
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
        [_e]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Vr = 14, ni = 18, si = "blur(12px) saturate(180%) brightness(1.04)", ii = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), ai = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, ci = 140, qr = 0.22, li = 0.14, di = (e, o, r) => {
  const n = l.useRef(r);
  n.current = r, l.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let c = 0;
    const a = () => {
      var f;
      const u = e.current;
      u && (u.style.setProperty("--lx", `${s.x.toFixed(1)}px`), u.style.setProperty("--ly", `${s.y.toFixed(1)}px`), u.style.setProperty("--li", s.i.toFixed(3)), (f = n.current) == null || f.call(n, s.x, s.y, s.i));
    }, p = () => {
      s.x += (i.x - s.x) * qr, s.y += (i.y - s.y) * qr, s.i += (i.i - s.i) * li;
      const u = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      u && (s.x = i.x, s.y = i.y, s.i = i.i), a(), c = u ? 0 : requestAnimationFrame(p);
    }, m = () => {
      c || (c = requestAnimationFrame(p));
    }, d = (u) => {
      const f = e.current;
      if (u.pointerType === "touch" || !f)
        return;
      const x = f.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      i.x = (u.clientX - x.left) * f.offsetWidth / x.width, i.y = (u.clientY - x.top) * f.offsetHeight / x.height;
      const E = Math.max(
        x.left - u.clientX,
        0,
        u.clientX - x.right
      ), b = Math.max(
        x.top - u.clientY,
        0,
        u.clientY - x.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(E, b) / ci), s.i < 0.01 && (s.x = i.x, s.y = i.y), m();
    }, g = () => {
      i.i = 0, m();
    };
    return document.addEventListener("pointermove", d, { passive: !0 }), document.documentElement.addEventListener("mouseleave", g), () => {
      cancelAnimationFrame(c), document.removeEventListener("pointermove", d), document.documentElement.removeEventListener("mouseleave", g);
    };
  }, [e, o]);
}, xt = l.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: s = !0,
    onLight: c
  }, a) => {
    const p = l.useRef(null), m = i && Ur;
    di(p, s && Ur, c);
    const d = gt(), g = `lumora-glass-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [u, f] = l.useState(null), x = l.useRef(null), E = l.useCallback(
      (R) => {
        var C;
        if (p.current = R, typeof a == "function" ? a(R) : a && (a.current = R), (C = x.current) == null || C.disconnect(), x.current = null, !R || !m || !ii || typeof ResizeObserver > "u")
          return;
        const v = () => {
          const T = R.offsetWidth, I = R.offsetHeight;
          f(
            (S) => (S == null ? void 0 : S.width) === T && S.height === I ? S : T && I ? { width: T, height: I } : null
          );
        };
        x.current = new ResizeObserver(v), x.current.observe(R), v();
      },
      [a, m]
    ), b = l.useMemo(
      () => u ? ai(u.width, u.height, Vr) : null,
      [u]
    ), y = m && !!(b && u);
    return /* @__PURE__ */ w(Ae, { children: [
      y ? /* @__PURE__ */ t(
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
              width: u.width,
              height: u.height,
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
                    width: u.width,
                    height: u.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ t(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: Vr / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: ni,
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
          ref: E,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": y ? "true" : void 0,
          sx: [
            Zs(e, o, d),
            y ? {
              backdropFilter: `url(#${g}) ${si}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
xt.displayName = "GlassLayer";
const Ze = 44, Yr = 4, ui = J, Zr = 1.12, mo = 6, Qr = mo - 2, $t = J, Wo = 24, co = 10, Jr = 0.12, en = 0.75, fi = co + 32, hi = 90, pi = 22, mi = 1190, gi = 1195, lo = Se(Dn), ge = Se(kn), tn = Se(fo), xi = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const s = Math.min(i, r / 2, n / 2), c = e + r, a = o + n, p = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + s} ${o} H ${c - s} ${p} ${c} ${o + s} V ${a - s} ${p} ${c - s} ${a} H ${e + s} ${p} ${e} ${a - s} V ${o + s} ${p} ${e + s} ${o} Z')`;
}, bi = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: i,
  activePath: s,
  focusFirst: c = !1,
  onNavigate: a,
  onClose: p,
  panelProps: m,
  accentColor: d,
  activeForegroundColor: g,
  solidSurface: u
}) => {
  const f = Ne(), x = f.palette.mode === "dark", E = !!(e && r), b = l.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const y = b.current, R = l.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const D = r.getBoundingClientRect();
      return {
        x: n,
        y: D.top,
        left: n,
        right: n,
        top: D.top,
        bottom: D.bottom,
        width: 0,
        height: D.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), v = l.useRef(R);
  R && (v.current = R), l.useEffect(() => {
    r && js(r);
  }, [r]);
  const [C, T] = l.useState(!1);
  l.useEffect(() => {
    if (!E) {
      T(!1);
      return;
    }
    let D = 0;
    const U = requestAnimationFrame(() => {
      D = requestAnimationFrame(() => T(!0));
    });
    return () => {
      cancelAnimationFrame(U), cancelAnimationFrame(D);
    };
  }, [E]);
  const I = l.useMemo(
    () => y ? or(y.group.subitems, y.group.icon) : [],
    [y]
  ), S = l.useRef(null), O = l.useRef(null), L = l.useRef(0), M = l.useRef(null), W = l.useRef([]), P = I.findIndex(
    ({ sub: D }) => Le(D, s)
  ), [A, N] = l.useState(0);
  l.useEffect(() => {
    N(Math.max(P, 0));
  }, [o]), l.useEffect(() => {
    if (!E || !c)
      return;
    const D = setTimeout(() => {
      var U;
      return (U = W.current[0]) == null ? void 0 : U.focus();
    });
    return () => clearTimeout(D);
  }, [E, c, o]);
  const ee = (D) => {
    var H;
    const U = Math.max(0, Math.min(D, I.length - 1));
    N(U), (H = W.current[U]) == null || H.focus();
  }, we = (D, U) => {
    switch (D.key) {
      case "ArrowRight":
        ee(U + 1);
        break;
      case "ArrowLeft":
        U === 0 ? p(!0) : ee(U - 1);
        break;
      case "Home":
        ee(0);
        break;
      case "End":
        ee(I.length - 1);
        break;
      case "Tab":
        p(!0);
        break;
      default:
        return;
    }
    D.preventDefault();
  }, z = (D) => {
    const U = W.current.slice(0, I.length).filter((V) => !!V);
    if (!U.length)
      return;
    const H = D !== null && D < U.length && !je(), te = `translate ${ge.duration}ms ${ge.easing}, scale ${ge.duration}ms ${ge.easing}`, B = U.map((V) => V.offsetLeft + Ze / 2), Z = U.map(
      (V, oe) => H && oe === D ? Zr : 1
    ), ce = H ? (Zr - 1) * Ze : 0, ue = B[0] - Ze / 2, Fe = B[B.length - 1] + Ze / 2, Ce = H ? Math.min(
      Math.max(
        (B[D] - ue) / (Fe - ue || 1),
        Math.max(0, 1 - Qr / ce)
      ),
      Math.min(1, Qr / ce)
    ) : 0;
    let Re = ue - ce * Ce;
    U.forEach((V, oe) => {
      const Te = Ze * Z[oe], pe = Re + Te / 2;
      Re += Te + Yr, V.style.transition = `${te}, background 160ms ease, box-shadow 160ms ease`, V.style.translate = H ? `${pe - B[oe]}px 0` : "", V.style.scale = H ? String(Z[oe]) : "", H ? V.style.setProperty("--dock-scale", String(Z[oe])) : V.style.removeProperty("--dock-scale");
    });
  }, G = l.useRef(null);
  l.useEffect(() => {
    G.current = null;
  }, [o]);
  const X = (D) => {
    G.current !== D && (G.current = D, cancelAnimationFrame(L.current), L.current = requestAnimationFrame(() => z(D)));
  };
  l.useEffect(() => () => cancelAnimationFrame(L.current), []);
  const re = f.palette.text.primary, se = x ? f.palette.text.primary : d;
  return /* @__PURE__ */ w(Ae, { children: [
    /* @__PURE__ */ t(qo, { in: E, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      _,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => p(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: i ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...i ? { clipPath: xi(i) } : {},
          zIndex: mi,
          bgcolor: Qs(x)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      Yo,
      {
        open: E,
        anchorEl: R ?? v.current,
        placement: "right",
        transition: !0,
        modifiers: [
          // Up by half the title, so the tile row (not the whole
          // panel) is centred on the rail icon
          {
            name: "offset",
            options: { offset: [-Wo / 2, co] }
          },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: gi,
          transition: C ? `transform ${ge.duration}ms ${ge.easing}` : "none",
          [_e]: { transition: "none" }
        },
        children: ({ TransitionProps: D }) => /* @__PURE__ */ t(
          Ii,
          {
            in: (D == null ? void 0 : D.in) ?? E,
            onEnter: D == null ? void 0 : D.onEnter,
            onExited: D == null ? void 0 : D.onExited,
            groupKey: (y == null ? void 0 : y.key) ?? null,
            panelProps: m,
            isDark: x,
            solidSurface: u,
            groupText: y == null ? void 0 : y.group.text,
            glassRef: O,
            shapeRef: M,
            children: y ? /* @__PURE__ */ w(Ae, { children: [
              /* @__PURE__ */ t(
                _,
                {
                  "aria-hidden": !0,
                  "data-testid": "sidebar-flyout-title",
                  sx: {
                    px: `${mo}px`,
                    height: Wo,
                    boxSizing: "border-box",
                    pt: "2px",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "16px",
                    letterSpacing: "0.02em",
                    color: "text.secondary",
                    whiteSpace: "nowrap"
                  },
                  children: y.group.text
                }
              ),
              /* @__PURE__ */ t(
                _,
                {
                  ref: S,
                  role: "menu",
                  "aria-label": y.group.text,
                  onPointerLeave: () => X(null),
                  sx: {
                    position: "relative",
                    display: "flex",
                    gap: `${Yr}px`,
                    // A grown tile fits in the panel's padding
                    // (see DOCK_ROOM_PX)
                    px: 0
                  },
                  children: I.map(({ sub: U, icon: H }, te) => /* @__PURE__ */ t(
                    Bn,
                    {
                      ref: (B) => {
                        W.current[te] = B;
                      },
                      sub: U,
                      icon: H,
                      index: te,
                      active: Le(
                        U,
                        s
                      ),
                      tabIndex: te === A ? 0 : -1,
                      onClick: () => {
                        a(U.path), p();
                      },
                      onKeyDown: (B) => we(B, te),
                      onFocus: (B) => {
                        N(te), B.currentTarget.matches(
                          ":focus-visible"
                        ) && X(te);
                      },
                      onHoverStart: (B) => {
                        B !== "touch" && X(te);
                      },
                      accentColor: d,
                      activeForegroundColor: g,
                      labelColor: re,
                      iconColor: se,
                      isDark: x
                    },
                    U.path
                  ))
                },
                y.key
              )
            ] }) : null
          }
        )
      }
    )
  ] });
}, Lt = 18, yi = 160, Po = 14, vi = 22, Si = 2.5, wi = 1, on = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, Ri = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, Ei = (e, o, r) => {
  const n = mo, i = Lt, s = Lt + o / 2, c = Math.max(e, ...r.map((b) => b.right + n)), a = {
    cx: c / 2,
    cy: s,
    hx: c / 2,
    hy: o / 2,
    r: $t
  }, p = r.filter((b) => b.bottom - b.top > Ze * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + Lt,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: $t
  })), m = (b, y) => p.reduce(
    (R, v) => Ri(R, on(b, y, v), vi),
    on(b, y, a)
  ), d = (b, y) => {
    let R = s, v = s + y * (o / 2 + i);
    if (m(b, R) > 0)
      return null;
    for (let C = 0; C < 12; C += 1) {
      const T = (R + v) / 2;
      m(b, T) <= 0 ? R = T : v = T;
    }
    return R;
  }, g = Math.min(0, ...p.map((b) => b.cx - b.hx)) - 2, u = Math.max(c, ...p.map((b) => b.cx + b.hx)) + 2, f = [], x = [];
  for (let b = g; b <= u; ) {
    const y = d(b, -1), R = d(b, 1);
    if (y !== null && R !== null) {
      const C = +(b + Po).toFixed(1);
      f.push([C, +y.toFixed(1)]), x.push([C, +R.toFixed(1)]);
    }
    const v = b - g < $t + 4 || u - b < $t + 4;
    b += v ? wi : Si;
  }
  return f.length ? `M ${[...f, ...x.reverse()].map(([b, y]) => `${b} ${y}`).join(" L ")} Z` : "";
}, rn = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((s) => {
    et(s) && (At(s), s.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    }));
  });
}, Ii = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: i,
  isDark: s,
  solidSurface: c,
  groupText: a,
  glassRef: p,
  shapeRef: m,
  children: d
}) => {
  const g = l.useRef(null), u = l.useRef(null), f = l.useRef(null), x = l.useRef(null), E = l.useRef(null), b = Ys(s, gt()), y = l.useCallback(
    (z, G, X) => {
      var re, se;
      (re = E.current) == null || re.setAttribute("cx", String(z)), (se = E.current) == null || se.setAttribute("cy", String(G)), x.current && (x.current.style.opacity = String(
        X * (s ? jr.dark.rim : jr.light.rim)
      ));
    },
    [s]
  ), R = l.useRef(null), v = l.useRef(null), C = `lumora-flyout-${l.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, T = l.useRef(0), I = l.useRef(0), S = l.useRef(""), O = () => {
    var D, U, H, te;
    const z = g.current, G = u.current;
    if (!z || !G)
      return !1;
    const X = z.getBoundingClientRect(), re = Array.from(
      z.querySelectorAll('[role="menuitem"]'),
      (B) => {
        if (B.style.scale)
          return null;
        const Z = B.getBoundingClientRect();
        return {
          left: Z.left - X.left,
          right: Z.right - X.left,
          top: Z.top - X.top,
          bottom: Z.bottom - X.top
        };
      }
    ).filter((B) => B !== null), se = Ei(
      z.offsetWidth,
      z.offsetHeight,
      re
    );
    return se === S.current ? !1 : (S.current = se, G.style.clipPath = `path('${se}')`, (D = f.current) == null || D.setAttribute("d", se), (U = x.current) == null || U.setAttribute("d", se), (H = R.current) == null || H.setAttribute("d", se), (te = v.current) == null || te.setAttribute("d", se), !0);
  }, L = () => {
    if (I.current = 0, T.current)
      return;
    const z = () => {
      if (I.current = O() ? 0 : I.current + 1, I.current > 8) {
        T.current = 0;
        return;
      }
      T.current = requestAnimationFrame(z);
    };
    T.current = requestAnimationFrame(z);
  };
  m.current = L, l.useLayoutEffect(() => (O(), L(), () => {
    cancelAnimationFrame(T.current), T.current = 0;
  }), [n]);
  const M = l.useRef(null), W = l.useRef(null), P = l.useRef(!1), A = (z) => {
    g.current = z;
    const { ref: G } = i;
    typeof G == "function" ? G(z) : G && (G.current = z);
  }, N = () => {
    At(p.current), At(M.current), At(g.current);
  }, ee = () => {
    var re;
    const z = g.current, G = p.current, X = M.current;
    if (!(!et(z) || !G || !X)) {
      if (N(), je()) {
        z.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      W.current = null, G.animate(
        [
          { transform: `scale(${Jr}, ${en})` },
          { transform: "none" }
        ],
        { duration: lo.duration, easing: lo.easing }
      ), rn(G, [0, 1], 160, "ease-out");
      try {
        (re = u.current) == null || re.animate(
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
          duration: tn.duration,
          delay: 60,
          easing: tn.easing,
          fill: "backwards"
        }
      );
    }
  }, we = () => {
    const z = g.current, G = p.current, X = M.current;
    if (!et(z) || !G || !X) {
      r == null || r();
      return;
    }
    if (N(), je()) {
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
    }), rn(G, [1, 0], 200, "ease-in"), G.animate(
      [
        { transform: "none" },
        { transform: `scale(${Jr}, ${en})` }
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
      we();
      return;
    }
    o == null || o(), ee();
  }, [e]), l.useLayoutEffect(() => {
    const z = g.current;
    if (!z)
      return;
    const G = z.getBoundingClientRect(), X = W.current;
    if (W.current = { width: G.width, height: G.height }, !P.current) {
      P.current = !0;
      return;
    }
    const re = p.current;
    !e || !X || !et(re) || !G.width || !G.height || je() || (At(re), re.animate(
      [
        {
          transform: `scale(${X.width / G.width}, ${X.height / G.height})`
        },
        { transform: "none" }
      ],
      { duration: ge.duration, easing: ge.easing }
    ));
  }, [n]), /* @__PURE__ */ w(
    _,
    {
      ref: A,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": a,
      sx: {
        position: "relative",
        borderRadius: `${$t}px`,
        p: `${mo}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -co - 2,
          width: co + 2
        }
      },
      children: [
        /* @__PURE__ */ w(
          _,
          {
            ref: p,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Lt,
              bottom: -Lt,
              left: -Po,
              right: -yi,
              pointerEvents: "none",
              // The rail icon's centre: the tile row is level with it
              // (half the title below the panel's middle), one gap
              // plus half the rail's padding to the left
              transformOrigin: `${Po - fi}px calc(50% + ${Wo / 2}px)`,
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
                            /* @__PURE__ */ t("path", { ref: v, fill: "black" })
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
                xt,
                {
                  ref: u,
                  isDark: s,
                  solid: c,
                  refract: !1,
                  onLight: y,
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
                        ref: f,
                        fill: "none",
                        stroke: s ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)",
                        strokeWidth: "1"
                      }
                    ),
                    /* @__PURE__ */ w(
                      "radialGradient",
                      {
                        ref: E,
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
        /* @__PURE__ */ t(_, { ref: M, sx: { position: "relative" }, children: d })
      ]
    }
  );
}, Bn = l.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: i,
    onClick: s,
    onKeyDown: c,
    onFocus: a,
    onHoverStart: p,
    accentColor: m,
    activeForegroundColor: d,
    labelColor: g,
    iconColor: u,
    isDark: f
  }, x) => {
    const E = gt(), b = l.useContext(Pt), y = (T) => {
      const I = T.currentTarget.getBoundingClientRect();
      T.currentTarget.style.setProperty(
        "--mx",
        `${(T.clientX - I.left) / I.width * 100}%`
      ), T.currentTarget.style.setProperty(
        "--my",
        `${(T.clientY - I.top) / I.height * 100}%`
      );
    }, R = (T) => {
      const I = T.currentTarget;
      !et(I) || je() || I.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.04, 0.96)", offset: 0.22 },
          { transform: "scale(0.98, 1.025)", offset: 0.5 },
          { transform: "scale(1.01, 0.995)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, v = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, C = {
      ...lr(f, E),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": v
    };
    return /* @__PURE__ */ w(
      tt,
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
        onPointerMove: y,
        onMouseEnter: R,
        onPointerEnter: (T) => p(T.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Ze,
          height: Ze,
          borderRadius: `${ui}px`,
          color: n ? d : g,
          bgcolor: n ? m : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Nt(m, f) : {},
          transition: `translate ${ge.duration}ms ${ge.easing}, scale ${ge.duration}ms ${ge.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${qs} ${lo.duration}ms ${lo.easing} both`,
          animationDelay: `${hi + r * pi}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: 22,
            color: n ? d : u
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
            "& [data-tile-name]": v
          } : C,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : C,
            "& [data-tile-name]": v,
            outline: "2px solid",
            outlineColor: m,
            outlineOffset: 2
          },
          [_e]: {
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
                ...ir(f, b),
                position: "absolute",
                top: "100%",
                left: "50%",
                translate: "-50% 8px",
                transformOrigin: "top center",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: 0,
                scale: "calc(0.6 / var(--dock-scale, 1))",
                transition: `opacity 140ms ease, scale ${ge.duration}ms ${ge.easing}`,
                zIndex: 1,
                [_e]: { transition: "opacity 140ms ease" }
              },
              children: e.text
            }
          )
        ]
      }
    );
  }
);
Bn.displayName = "FlyoutTile";
const _i = 100, Ci = 250, Ti = (e) => {
  const [o, r] = l.useState(null), n = l.useRef(o);
  n.current = o;
  const i = l.useRef(/* @__PURE__ */ new Map()), s = l.useRef(null), c = l.useRef(void 0), a = l.useRef(void 0), p = () => {
    clearTimeout(c.current), c.current = void 0;
  }, m = () => {
    clearTimeout(a.current), a.current = void 0;
  }, d = (y, R, v = !1) => {
    p(), m(), r({ key: y, pinned: R, focusFirst: v });
  }, g = l.useCallback((y = !1) => {
    var v, C;
    p(), m();
    const R = (v = n.current) == null ? void 0 : v.key;
    r(null), y && R && ((C = i.current.get(R)) == null || C.focus());
  }, []), u = () => {
    p(), !(!n.current || n.current.pinned) && (m(), a.current = setTimeout(() => g(), Ci));
  };
  l.useEffect(() => {
    e || g();
  }, [e, g]), l.useEffect(
    () => () => {
      p(), m();
    },
    []
  );
  const f = o !== null;
  return l.useEffect(() => {
    if (!f)
      return;
    const y = (C) => {
      var I;
      const T = C;
      return T ? (I = s.current) != null && I.contains(T) ? !0 : [...i.current.values()].some((S) => S.contains(T)) : !1;
    }, R = (C) => {
      y(C.target) || g();
    }, v = (C) => {
      var T;
      C.key === "Escape" && g(
        !!((T = s.current) != null && T.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", R), document.addEventListener("keydown", v), () => {
      document.removeEventListener("pointerdown", R), document.removeEventListener("keydown", v);
    };
  }, [f, g]), {
    state: o,
    close: g,
    triggerProps: (y) => ({
      ref: (R) => {
        R ? i.current.set(y, R) : i.current.delete(y);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        m();
        const R = n.current;
        if (R) {
          R.key !== y && d(y, R.pinned);
          return;
        }
        p(), c.current = setTimeout(
          () => d(y, !1),
          _i
        );
      },
      onMouseLeave: u,
      onClick: (R) => {
        if (R.detail === 0) {
          d(y, !0, !0);
          return;
        }
        const v = n.current;
        (v == null ? void 0 : v.key) === y && v.pinned ? g() : d(y, !0);
      },
      onKeyDown: (R) => {
        R.key === "ArrowRight" && (R.preventDefault(), d(y, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: m,
      onMouseLeave: u
    },
    onRailLeafEnter: () => {
      p(), n.current && !n.current.pinned && g();
    },
    getTrigger: (y) => i.current.get(y) ?? null
  };
}, Oi = 264, Ai = 72, nn = 64, Zt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, $i = 16, Mi = 14, Di = 4, Li = 2.5, sn = "0.7rem", an = 22, cn = Se(tr), it = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
  const s = l.useRef(null), [c, a] = l.useState(!1), p = l.useCallback(() => {
    const m = s.current;
    m && a(m.scrollWidth > m.clientWidth + 0.5);
  }, []);
  return l.useLayoutEffect(() => {
    p();
  }, [p, e]), l.useEffect(() => {
    const m = s.current;
    if (!m)
      return;
    const d = new ResizeObserver(() => p());
    return d.observe(m), () => d.disconnect();
  }, [p]), /* @__PURE__ */ t(
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
        ae,
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
}, ki = ({
  open: e,
  size: o = $i
}) => e ? /* @__PURE__ */ t(ws, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Ss, { sx: { fontSize: o, opacity: 0.75 } }), ln = ({ open: e }) => /* @__PURE__ */ t(
  Rs,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), Qt = 600, Jt = 8;
function Ni(e, o, r) {
  l.useEffect(() => {
    const n = e.current;
    if (!n)
      return;
    const i = (p) => {
      const m = Array.from(
        n.querySelectorAll('[data-active="true"]')
      ).filter((f) => f.offsetHeight > 0).pop();
      if (!m)
        return;
      const d = n.getBoundingClientRect(), g = m.getBoundingClientRect();
      let u = 0;
      g.top < d.top + Jt ? u = g.top - d.top - Jt : g.bottom > d.bottom - Jt && (u = g.bottom - d.bottom + Jt), u !== 0 && n.scrollBy({ top: u, behavior: p });
    }, s = requestAnimationFrame(() => i("smooth")), c = window.setTimeout(() => i("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => i("auto"));
    return a == null || a.observe(n), () => {
      cancelAnimationFrame(s), window.clearTimeout(c), a == null || a.disconnect();
    };
  }, [e, o, r]);
}
const Go = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: i,
  logo: s,
  title: c,
  onBrandClick: a,
  brandMenuOpen: p,
  showHeaderBar: m = !1,
  headerBackgroundColor: d,
  headerForegroundColor: g,
  brandColor: u,
  activeAccentColor: f = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: E,
  foregroundColor: b,
  surfaceBackgroundColor: y,
  flyoutSurfaceColor: R,
  collapsed: v = !1,
  expandedWidth: C = Oi,
  collapsedWidth: T = Ai,
  showLabels: I = !1,
  topInsetPx: S = 0,
  topContent: O,
  footer: L,
  submenuMode: M = "inline"
}) => {
  var fe;
  const W = Ne(), P = W.palette.mode === "dark", A = l.useContext(Pt), N = M === "flyout" && v && !I, ee = Ti(N), we = l.useRef(null), z = l.useRef(null), G = l.useRef(null);
  Ni(G, r, v);
  const X = ti(N, P, ((fe = ee.state) == null ? void 0 : fe.key) ?? null), re = ri({
    enabled: N,
    isDark: P,
    color: f,
    containerRef: z
  }), { close: se } = ee;
  l.useEffect(() => {
    se();
  }, [r, se]);
  const [D, U] = l.useState(
    {}
  ), H = E ?? Fo(f), te = {
    bgcolor: f,
    color: H,
    "& .MuiListItemIcon-root": { color: H }
  }, B = {
    bgcolor: f,
    color: H,
    borderRadius: "8px"
  }, Z = x ?? ao(f), ce = y ?? (P ? W.palette.background.paper : "#ffffff"), ue = b ?? (P ? "text.primary" : f), Fe = d ?? ce, Ce = g ?? (d ? Fo(Fe) : b ?? (P ? W.palette.text.primary : f)), Re = ao(Ce), V = (h) => {
    n == null || n(h);
  }, oe = (h, F) => {
    U((j) => ({ ...j, [h]: !F }));
  }, Te = (h, F) => D[F] ?? qe(h, r), pe = (h, F, j) => ({
    color: h ? H : ue,
    bgcolor: h ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: h ? H : ue,
      minWidth: j
    },
    "&:hover": h || I ? te : { bgcolor: F }
  }), Be = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": te
  }, We = (h) => {
    const F = Le(h, r), j = /* @__PURE__ */ w(
      Yt,
      {
        disabled: !h.path,
        selected: F,
        onClick: () => h.path && V(h.path),
        "data-testid": `sidebar-item-${h.text}`,
        "data-active": F ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...h.action && { pr: 6 },
          ...h.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...pe(
            F,
            Z,
            h.subtitle ? 48 : 36
          ),
          ...Be
        },
        children: [
          /* @__PURE__ */ t(ye, { children: h.icon }),
          /* @__PURE__ */ t(
            ke,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                it,
                {
                  text: h.text,
                  fontWeight: Qt
                }
              ),
              secondary: h.subtitle ? /* @__PURE__ */ t(
                _,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    it,
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
      return j;
    const { action: k } = h;
    return /* @__PURE__ */ w(_, { sx: { position: "relative" }, children: [
      j,
      /* @__PURE__ */ t(ve, { title: k.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        be,
        {
          "aria-label": k.label,
          "data-testid": `sidebar-action-${h.text}`,
          onClick: () => {
            k.onClick(), i == null || i();
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
            borderColor: F ? "rgba(255, 255, 255, 0.35)" : Z,
            color: F ? H : ue,
            "&:hover": {
              bgcolor: F ? "rgba(255, 255, 255, 0.15)" : Z
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: F ? H : ue,
              outlineOffset: 1
            }
          },
          children: k.icon
        }
      ) })
    ] }, h.text);
  }, Pe = (h) => {
    const F = qe(h, r), j = Le(h, r), k = pt("", h), K = Te(h, k);
    return /* @__PURE__ */ w(
      _,
      {
        "data-testid": `sidebar-group-${h.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: F ? Z : "transparent"
        },
        children: [
          /* @__PURE__ */ w(
            Yt,
            {
              onClick: () => oe(k, K),
              "data-testid": `sidebar-item-${h.text}`,
              "data-active": j ? "true" : "false",
              "aria-expanded": K,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...pe(j, Z, 36)
              },
              children: [
                /* @__PURE__ */ t(ye, { children: h.icon }),
                /* @__PURE__ */ t(
                  ke,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      it,
                      {
                        text: h.text,
                        fontWeight: Qt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(ln, { open: K })
              ]
            }
          ),
          /* @__PURE__ */ t(Br, { in: K, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            _,
            {
              "data-testid": `sidebar-children-${h.text}`,
              sx: { pb: 0.5 },
              children: h.subitems.map(
                (q) => bt(q, k, 1)
              )
            }
          ) })
        ]
      },
      h.text
    );
  }, bt = (h, F, j) => {
    const k = pt(F, h), K = Di + (j - 1) * Li;
    if (mt(h)) {
      const me = qe(h, r), le = Le(h, r), de = Te(h, k);
      return /* @__PURE__ */ w(_, { "data-testid": `sidebar-group-${h.text}`, children: [
        /* @__PURE__ */ w(
          Yt,
          {
            onClick: () => oe(k, de),
            "data-testid": `sidebar-subitem-${h.text}`,
            "data-active": me ? "true" : "false",
            "aria-expanded": de,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: K,
              ...pe(le, "action.hover", 32)
            },
            children: [
              h.icon ? /* @__PURE__ */ t(ye, { children: h.icon }) : null,
              /* @__PURE__ */ t(
                ke,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    it,
                    {
                      text: h.text,
                      fontWeight: Qt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(ln, { open: de })
            ]
          }
        ),
        /* @__PURE__ */ t(Br, { in: de, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(_, { "data-testid": `sidebar-children-${h.text}`, children: h.subitems.map(
          (xo) => bt(xo, k, j + 1)
        ) }) })
      ] }, k);
    }
    const q = Le(h, r);
    return /* @__PURE__ */ w(
      Yt,
      {
        selected: q,
        disabled: !h.path,
        onClick: () => h.path && V(h.path),
        "data-testid": `sidebar-subitem-${h.text}`,
        "data-active": q ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: K,
          ...pe(q, "action.hover", 32),
          ...Be
        },
        children: [
          h.icon ? /* @__PURE__ */ t(ye, { children: h.icon }) : null,
          /* @__PURE__ */ t(
            ke,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                it,
                {
                  text: h.text,
                  fontWeight: Qt
                }
              )
            }
          )
        ]
      },
      k
    );
  }, ct = (h, F, j, k, K, q) => {
    const me = !K, le = /* @__PURE__ */ w(
      be,
      {
        "aria-label": F,
        disabled: me,
        onClick: K,
        onMouseEnter: N ? ee.onRailLeafEnter : void 0,
        ...N ? { [Ft]: "" } : {},
        "data-testid": (q == null ? void 0 : q.testId) ?? `sidebar-item-${F}`,
        "data-active": k ? "true" : "false",
        sx: I ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: k ? H : ue,
          bgcolor: k ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: an
          },
          "&:hover": B,
          ...Zt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: k ? H : ue,
          bgcolor: k ? f : "transparent",
          borderRadius: k ? "8px" : "50%",
          "&:hover": {
            bgcolor: k ? f : q != null && q.insideGroup ? "action.hover" : Z,
            borderRadius: "8px"
          },
          ...Zt,
          ...N ? zt(k) : {}
        },
        children: [
          j,
          I ? /* @__PURE__ */ t(
            it,
            {
              text: F,
              variant: "caption",
              center: !0,
              fontSize: sn
            }
          ) : null
        ]
      }
    );
    return I ? me ? /* @__PURE__ */ t("span", { children: le }, h) : /* @__PURE__ */ t(l.Fragment, { children: le }, h) : /* @__PURE__ */ t(
      ve,
      {
        title: F,
        placement: "right",
        arrow: !N,
        ...N ? ot : {},
        children: me ? /* @__PURE__ */ t("span", { children: le }) : le
      },
      h
    );
  }, Gt = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, zt = (h) => ({
    borderRadius: `${J}px`,
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...h ? { bgcolor: "transparent" } : {},
    transition: `transform ${cn.duration}ms ${cn.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), ot = {
    slotProps: {
      tooltip: { sx: ir(P, A) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, yt = (h) => {
    var K;
    const F = qe(h, r), j = pt("", h), k = ((K = ee.state) == null ? void 0 : K.key) === j;
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
          be,
          {
            ...ee.triggerProps(j),
            "aria-label": h.text,
            "aria-haspopup": "menu",
            "aria-expanded": k,
            "data-testid": `sidebar-item-${h.text}`,
            "data-active": F ? "true" : "false",
            "data-open": k ? "true" : "false",
            [Ft]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: F ? H : ue,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              bgcolor: F ? f : "transparent",
              ...zt(F),
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
              ...Zt
            },
            children: h.icon
          }
        )
      },
      h.text
    );
  }, Ht = (h) => {
    const F = qe(h, r), j = Le(h, r), k = pt("", h), K = Te(h, k), q = /* @__PURE__ */ w(
      be,
      {
        "aria-label": h.text,
        "aria-expanded": K,
        onClick: () => oe(k, K),
        "data-testid": `sidebar-item-${h.text}`,
        "data-active": j ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: I ? 0.25 : 0,
          width: I ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...I ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: j ? H : ue,
          bgcolor: j ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": I ? { bgcolor: f, color: H } : {
            bgcolor: j ? f : "transparent"
          },
          ...Zt
        },
        children: [
          I ? /* @__PURE__ */ t(
            _,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: an
                }
              },
              children: h.icon
            }
          ) : h.icon,
          I ? /* @__PURE__ */ t(
            it,
            {
              text: h.text,
              variant: "caption",
              center: !0,
              fontSize: sn
            }
          ) : null,
          /* @__PURE__ */ t(ki, { open: K, size: Mi })
        ]
      }
    ), me = I ? q : /* @__PURE__ */ t(ve, { title: h.text, placement: "right", arrow: !0, children: q });
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
          bgcolor: F ? Z : "transparent",
          ...I ? {} : { "&:hover": { bgcolor: Z } }
        },
        children: [
          me,
          K ? or(h.subitems, h.icon).map(
            ({ sub: le, icon: de }) => ct(
              le.path,
              le.text,
              de,
              Le(le, r),
              () => V(le.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${le.text}`
              }
            )
          ) : null
        ]
      },
      h.text
    );
  }, rt = (h) => /* @__PURE__ */ t(
    _,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: ct(
        h.text,
        h.subtitle ? `${h.text} · ${h.subtitle}` : h.text,
        h.icon,
        Le(h, r),
        h.path ? () => V(h.path) : void 0,
        { testId: `sidebar-item-${h.text}` }
      )
    },
    h.text
  ), vt = (h) => mt(h) ? N ? yt(h) : v ? Ht(h) : Pe(h) : v ? rt(h) : We(h), St = (h) => /* @__PURE__ */ t(
    $e,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: v ? "center" : "stretch"
      },
      children: h.map(vt)
    }
  ), wt = v ? T : C, go = () => {
    var me, le;
    const { state: h } = ee, F = h ? [...e, ...o].find(
      (de) => mt(de) && pt("", de) === h.key
    ) ?? null : null, j = F ? ((me = we.current) == null ? void 0 : me.getBoundingClientRect().right) ?? T : T, k = F ? ((le = we.current) == null ? void 0 : le.closest("[data-rail-surface]")) ?? we.current : null, K = k == null ? void 0 : k.getBoundingClientRect(), q = k && K ? {
      left: K.left,
      top: K.top,
      width: K.width,
      height: K.height,
      radius: parseFloat(
        getComputedStyle(k).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      bi,
      {
        group: F,
        groupKey: F ? h.key : null,
        anchor: F ? ee.getTrigger(h.key) : null,
        railEdge: j,
        railShape: q,
        activePath: r,
        focusFirst: h == null ? void 0 : h.focusFirst,
        onNavigate: V,
        onClose: ee.close,
        panelProps: ee.flyoutProps,
        accentColor: f,
        activeForegroundColor: H,
        solidSurface: R ?? ce
      }
    );
  }, lt = m ? /* @__PURE__ */ t(
    _,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: nn,
        minHeight: nn,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: Fe
      },
      children: s || c ? /* @__PURE__ */ t(
        io,
        {
          logo: s,
          title: v ? void 0 : c,
          appName: c || "App",
          onClick: a,
          menuOpen: p,
          color: u ?? Ce,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, Ut = !m && s ? /* @__PURE__ */ t(
    _,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: 1
      },
      children: /* @__PURE__ */ t(
        io,
        {
          logo: s,
          appName: c || "App",
          onClick: a,
          menuOpen: p,
          color: u ?? Ce,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, dt = I ? 0.5 : v ? 1 : 1.5;
  return /* @__PURE__ */ t(po.Provider, { value: N, children: /* @__PURE__ */ w(
    _,
    {
      ref: we,
      ...X.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": v ? "true" : "false",
      "data-labeled": I ? "true" : "false",
      sx: {
        width: wt,
        minWidth: wt,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: ce,
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
        ...N ? Gt : {}
      },
      children: [
        X.lens,
        lt ?? Ut,
        O ? /* @__PURE__ */ t(
          _,
          {
            sx: {
              flexShrink: 0,
              px: dt,
              pt: 1,
              pb: 1
            },
            children: O
          }
        ) : null,
        /* @__PURE__ */ t(
          _,
          {
            ref: G,
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              // Scrollbar shows only while the pointer is inside (or a
              // keyboard user tabs in). Not :focus-within, since a
              // clicked link keeps focus and would pin it on. On the
              // icon rail the gutter is reserved on both edges so the
              // icons never shift and stay centred with the brand and
              // footer.
              ...N ? { scrollbarGutter: "stable both-edges" } : {},
              scrollbarWidth: "thin",
              scrollbarColor: "transparent transparent",
              // Safari only honours the thumb rule once the bar
              // itself is styled.
              "&::-webkit-scrollbar": { width: 8 },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: 4
              },
              "&:hover, &:has(:focus-visible)": {
                scrollbarColor: (h) => `${h.palette.divider} transparent`,
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: (h) => h.palette.divider
                }
              },
              // On the icon rail the two gutters stand in for the
              // padding, leaving room for the 44px items. (The inline
              // collapsed rail keeps it: its open groups tint the
              // full row width.)
              px: N ? 0 : dt,
              pt: S && !m ? `${S}px` : 1,
              pb: 2
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
                  re.glass,
                  St(e),
                  o.length > 0 ? /* @__PURE__ */ w(_, { sx: { mt: "auto", pt: 2 }, children: [
                    L ? null : /* @__PURE__ */ t(
                      Je,
                      {
                        sx: { mb: 1, borderColor: "divider" }
                      }
                    ),
                    St(o)
                  ] }) : null
                ]
              }
            )
          }
        ),
        L ? /* @__PURE__ */ t(_, { sx: { flexShrink: 0, px: dt, pb: 1.5 }, children: /* @__PURE__ */ t(
          _,
          {
            sx: {
              borderTop: `1px solid ${Re}`,
              pt: 1.5
            },
            children: L
          }
        ) }) : null,
        N ? go() : null
      ]
    }
  ) });
}, zo = "var(--lumora-content-padding, 0px)", dn = `calc(${zo} * -1)`, Ac = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: s = !0,
  sx: c
}) => /* @__PURE__ */ t(
  _,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: dn,
        mt: o ? dn : 0,
        // Space below it, like any other block on the page
        mb: zo,
        px: s ? zo : 0,
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
), Fi = ({ keys: e }) => /* @__PURE__ */ t(
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
}, ut = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, ft = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, ht = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Wn = uo(), Oe = Wn.typography.pxToRem, fr = (e) => {
  const o = e === "dark", r = [...Wn.shadows];
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
      warning: o ? { light: ft[400], main: ft[500], dark: ft[700] } : { light: ft[300], main: ft[400], dark: ft[800] },
      error: o ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      success: o ? { light: ut[400], main: ut[500], dark: ut[700] } : { light: ut[300], main: ut[400], dark: ut[800] },
      grey: Ie,
      divider: o ? at(Ie[700], 0.6) : at(Ie[300], 0.4),
      background: o ? { default: Ie[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: Ie[400] } : { primary: Ie[800], secondary: Ie[600] },
      action: o ? {
        hover: at(Ie[600], 0.2),
        selected: at(Ie[600], 0.3)
      } : {
        hover: at(Ie[200], 0.2),
        selected: at(Ie[200], 0.3)
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
}, Bi = 100, Pn = 80, oo = 56, Mt = 72, Ho = 68, kt = 8, Gn = J, zn = { xs: 2, md: "18px" }, Hn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, hr = (e, o) => e === "flyout" && (o === "collapsible" || o === "panel"), Un = ({
  showSidebar: e,
  isMobile: o,
  sidebarVariant: r,
  sidebarSubmenu: n
}) => !e || o ? 0 : r === "rail-labeled" ? Pn : hr(n, r) ? Ho + 2 * kt : r === "collapsible" || r === "panel" ? Mt : Bi, Xn = (e, o) => e ?? (o ? "hsl(220, 30%, 7%)" : "#ffffff"), Kn = (e, o) => e ?? (o ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Wi = 6, un = (e, o) => typeof e == "object" ? e[o] : e, $o = ({
  themeMode: e,
  muiTheme: o,
  hostTheme: r,
  sidebarVariant: n = "rail",
  sidebarSubmenu: i = "expand",
  showSidebar: s = !0,
  contentPadding: c = zn,
  sidebarBackgroundColor: a,
  contentBackgroundColor: p
}) => {
  const m = Cn(r.breakpoints.down("md")), d = e === "dark", g = Un({
    showSidebar: s,
    isMobile: m,
    sidebarVariant: n,
    sidebarSubmenu: i
  }), u = hr(i, n) ? {
    gutterPx: kt,
    radiusPx: Gn
  } : void 0, f = oo, x = Xn(
    un(a, e),
    d
  ), E = Kn(
    un(p, e),
    d
  ), b = Hn(
    c,
    r
  ), y = /* @__PURE__ */ w(No, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(Ue, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(Q, { sx: { height: 8 } }),
    Array.from({ length: Wi }, (R, v) => /* @__PURE__ */ t(Ue, { variant: "rounded", width: 28, height: 28 }, v))
  ] });
  return /* @__PURE__ */ t(so, { theme: o, children: /* @__PURE__ */ w(
    Q,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: E
      },
      children: [
        m && /* @__PURE__ */ w(
          Q,
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
              /* @__PURE__ */ t(Ue, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(Ue, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(Q, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(Ue, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !m && g > 0 && /* @__PURE__ */ t(
          Q,
          {
            sx: {
              position: "relative",
              width: g,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              Q,
              {
                sx: u ? {
                  position: "fixed",
                  top: u.gutterPx,
                  bottom: u.gutterPx,
                  left: u.gutterPx,
                  width: g - 2 * u.gutterPx,
                  borderRadius: `${u.radiusPx}px`,
                  bgcolor: x
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: g,
                  bgcolor: x
                },
                children: y
              }
            )
          }
        ),
        /* @__PURE__ */ w(
          Q,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              p: b,
              mt: m ? `${f}px` : 0
            },
            children: [
              /* @__PURE__ */ t(Ue, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(Ue, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(No, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: m ? 2 : 4 }, (R, v) => /* @__PURE__ */ t(
                Ue,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                v
              )) }),
              /* @__PURE__ */ t(Ue, { variant: "rounded", height: 360 })
            ]
          }
        )
      ]
    }
  ) });
}, Uo = uo(fr("light")), ro = uo(fr("dark")), Pi = (e) => e === "dark" ? ro : Uo, Gi = ({
  theme: e = "light",
  darkModeSelector: o,
  ...r
}) => {
  const n = _n();
  if (!o) {
    const s = Pi(e);
    return /* @__PURE__ */ w(so, { theme: s, children: [
      /* @__PURE__ */ t(ko, {}),
      /* @__PURE__ */ t(
        $o,
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
  return /* @__PURE__ */ w(so, { theme: Uo, children: [
    /* @__PURE__ */ t(ko, {}),
    /* @__PURE__ */ t(
      Is,
      {
        styles: {
          [`${o} body`]: {
            backgroundColor: ro.palette.background.default,
            color: ro.palette.text.primary
          }
        }
      }
    ),
    /* @__PURE__ */ t(Q, { sx: { display: "contents", [i]: { display: "none" } }, children: /* @__PURE__ */ t(
      $o,
      {
        themeMode: "light",
        muiTheme: Uo,
        hostTheme: n,
        ...r
      }
    ) }),
    /* @__PURE__ */ t(Q, { sx: { display: "none", [i]: { display: "contents" } }, children: /* @__PURE__ */ t(
      $o,
      {
        themeMode: "dark",
        muiTheme: ro,
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
}, Ke = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, zi = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ke.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Ke.REFRESH_TOKEN
      ), r = localStorage.getItem(Ke.USER);
      e && !localStorage.getItem(he.ACCESS_TOKEN) && localStorage.setItem(he.ACCESS_TOKEN, e), o && !localStorage.getItem(he.REFRESH_TOKEN) && localStorage.setItem(
        he.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(he.USER) && localStorage.setItem(he.USER, r), (e || o || r) && (localStorage.removeItem(Ke.ACCESS_TOKEN), localStorage.removeItem(Ke.REFRESH_TOKEN), localStorage.removeItem(Ke.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Mo = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        ne.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      ne.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      ne.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Y(
      "Failed to access storage",
      ne.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Do = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        ne.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      ne.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      ne.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Y(
      "Failed to write to storage",
      ne.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, jn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Bt = () => {
  try {
    zi();
    const e = Mo(he.ACCESS_TOKEN), o = Mo(he.REFRESH_TOKEN), r = Mo(he.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), jn(he.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Y ? e : new Y(
      "Failed to retrieve authentication tokens",
      ne.UNKNOWN_ERROR,
      e
    );
  }
}, Hi = () => {
  try {
    const { accessToken: e, refreshToken: o } = Bt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Y(
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
      error: e instanceof Y ? e : new Y(
        "Authentication check failed",
        ne.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Vn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Y(
        "At least one token must be provided",
        ne.TOKEN_INVALID
      );
    return e && Do(he.ACCESS_TOKEN, e), o && Do(he.REFRESH_TOKEN, o), r && Do(he.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Y ? n : new Y(
        "Failed to store tokens",
        ne.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Wt = () => {
  try {
    return [
      he.ACCESS_TOKEN,
      he.REFRESH_TOKEN,
      he.USER,
      // Also clear legacy keys for complete cleanup
      Ke.ACCESS_TOKEN,
      Ke.REFRESH_TOKEN,
      Ke.USER
    ].map((n) => jn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Y ? e : new Y(
        "Failed to clear tokens",
        ne.LOGOUT_FAILED,
        e
      )
    };
  }
}, Ui = () => {
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
        ne.UNKNOWN_ERROR,
        e
      )
    };
  }
}, $c = (e) => {
  if (!(e instanceof Y))
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
}, Xo = (e, o = "Unknown") => {
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
}, Xi = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = zr.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, i = [];
  const s = (c, a) => {
    i.forEach(({ resolve: p, reject: m }) => {
      c ? m(c) : a && p(a);
    }), i = [];
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
      var u;
      const a = c.config, p = (u = c.response) == null ? void 0 : u.status, m = (a == null ? void 0 : a.url) || "", d = m.includes("/auth/refresh");
      if (p !== 401 || a._retry || d)
        return Promise.reject(c);
      a._retry = !0;
      const { refreshToken: g } = Bt();
      if (!g) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return Xo(f, "AxiosClient - Token Refresh"), Wt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(c);
      }
      if (r && n)
        return new Promise((f, x) => {
          i.push({ resolve: f, reject: x });
        }).then((f) => {
          const {
            accessToken: x,
            refreshToken: E
          } = f;
          if (a.headers && (a.headers.Authorization = `Bearer ${x}`), m.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const b = JSON.parse(
                  a.data || "{}"
                );
                b.refresh_token = E, a.data = JSON.stringify(b);
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
        }).catch((f) => Promise.reject(f));
      r = !0, n = zr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: g
        }
      );
      try {
        const f = await n, { accessToken: x, refreshToken: E } = f.data;
        if (Vn(x, E, null), s(null, {
          accessToken: x,
          refreshToken: E
        }), a.headers && (a.headers.Authorization = `Bearer ${x}`), m.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const b = JSON.parse(
                a.data || "{}"
              );
              b.refresh_token = E, a.data = JSON.stringify(b);
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
      } catch (f) {
        return Xo(
          f,
          "AxiosClient - Token Refresh Failed"
        ), s(f), Wt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Ki = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Bt();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return Vn(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      Xo(i, "TokenValidator - Refresh Failed");
    }
  return Wt(), o ? o() : window.location.href = "/login", !1;
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
), fn = Se(tr), Xe = "#09C1AE", no = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Xe} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), ji = (e) => ({
  ...no(J, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${J - 2}px`,
    zIndex: 1,
    background: `${Nt(Xe, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), hn = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: s = "#01584f",
  rightOffsetPx: c = 0
}) => {
  const a = dr(), p = l.useContext(po), m = Ne().palette.mode === "dark", d = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", g = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ w(
    tt,
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
        borderColor: r ? Xe : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Xe}`,
          outlineOffset: 2
        },
        ...n && no(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(Dt, { size: 20 }),
        /* @__PURE__ */ t(
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
        i && /* @__PURE__ */ t(Fi, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && p ? /* @__PURE__ */ t(ve, { title: d, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    be,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: `${J}px`,
        ...Nt(Xe, m, "clear"),
        ...r && {
          boxShadow: `${Nt(Xe, m, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${fn.duration}ms ${fn.easing}, box-shadow 200ms ease`,
        "& svg": {
          filter: "drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))"
        },
        "&:hover": { transform: "scale(1.07)" },
        "&:active": {
          transform: "scale(0.92)",
          transitionDuration: "90ms"
        },
        [_e]: {
          transition: "none",
          "&:hover, &:active": { transform: "none" }
        },
        ...n && ji(m)
      },
      children: /* @__PURE__ */ t(Dt, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(ve, { title: d, placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
    be,
    {
      ...g,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Xe : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && no(8, "background.paper")
      },
      children: /* @__PURE__ */ t(Dt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(ve, { title: d, placement: "left", children: /* @__PURE__ */ t(
    be,
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
        outline: r ? `2px solid ${Xe}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Xe}` },
        ...n && no(16, "background.paper")
      },
      children: /* @__PURE__ */ t(_, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(Dt, { size: 26 }) })
    }
  ) });
}, eo = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(Cs, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ w(Ts, { children: [
  /* @__PURE__ */ t(Os, { fontSize: "small" }),
  /* @__PURE__ */ t(ae, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ae,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    Tn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, Tt = 24, Vi = 720, qi = 1140, Yi = 1250, Zi = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: i,
  sidebarWidthPx: s,
  bottomOffsetPx: c,
  fullScreen: a,
  fullScreenBottom: p = "0px",
  onClose: m
}) => {
  l.useEffect(() => {
    if (!e || !m)
      return;
    const x = (E) => {
      E.key === "Escape" && m();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [e, m]);
  const d = r === "docked", g = Tt + c;
  let u;
  a ? u = {
    top: 0,
    left: 0,
    right: 0,
    bottom: p,
    borderRadius: 0
  } : d ? u = {
    top: 0,
    right: 0,
    bottom: 0,
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : u = {
    bottom: g,
    ...n === "left" ? { left: s + Tt } : { right: Tt },
    width: i,
    maxWidth: `calc(100vw - ${Tt * 2}px)`,
    height: `min(${Vi}px, calc(100vh - ${g + Tt}px))`,
    borderRadius: "12px"
  };
  const f = /* @__PURE__ */ t(
    Zo,
    {
      role: d ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: d ? qi : Yi,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...u
      },
      children: o
    }
  );
  return d ? /* @__PURE__ */ t($s, { direction: "left", in: e, mountOnEnter: !0, children: f }) : /* @__PURE__ */ t(
    As,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: f
    }
  );
}, Qi = 180, pn = 250, Ji = "#01584F", ea = ({
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
        ae,
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
}, qn = (e, o, r, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : o, c = e ? Ji : o;
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
}, Yn = ({ link: e }) => /* @__PURE__ */ w($e, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    ea,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Zn = (e, o, r) => r ? e : /* @__PURE__ */ t(ve, { title: o, placement: "right", arrow: !0, children: e }), ta = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: c
}) => {
  const a = Ne(), [p, m] = l.useState(null), [d, g] = l.useState(!1), u = l.useRef(
    null
  ), f = l.useRef(null), x = l.useRef(null), E = l.useRef(!1), b = l.useRef(!1), y = l.useId(), R = () => {
    u.current && (clearTimeout(u.current), u.current = null);
  }, v = () => {
    R(), u.current = setTimeout(() => {
      g(!1), u.current = null;
    }, Qi);
  }, C = () => {
    R(), g(!0);
  };
  l.useEffect(() => {
    if (!d)
      return;
    const M = (W) => {
      var P;
      W.key === "Escape" && (g(!1), (P = x.current) == null || P.focus());
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [d]), l.useEffect(() => {
    if (!d || !b.current)
      return;
    const M = globalThis.requestAnimationFrame(() => {
      var P;
      const W = (P = f.current) == null ? void 0 : P.querySelector(
        '[role="menuitem"]'
      );
      W == null || W.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame(M);
  }, [d]);
  const T = qe(e, o), { activeBg: I, sx: S } = qn(
    i,
    n,
    T,
    c
  ), O = /* @__PURE__ */ t(
    be,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        E.current || C();
      },
      onBlur: (M) => {
        var P;
        const W = M.relatedTarget;
        W && ((P = f.current) != null && P.contains(W)) || v();
      },
      onKeyDown: (M) => {
        M.key === "ArrowDown" && (M.preventDefault(), b.current = !0, C());
      },
      onClick: (M) => {
        M.preventDefault(), M.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": d,
      "aria-controls": d ? y : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: S,
      children: c ? /* @__PURE__ */ t(Yn, { link: e }) : e.icon
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
            ref: m,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              E.current = !0, C();
            },
            onMouseLeave: () => {
              E.current = !1, v();
            },
            children: Zn(O, e.text, c)
          }
        ),
        /* @__PURE__ */ t(
          Yo,
          {
            open: d && !!p,
            anchorEl: p,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (M) => M.zIndex.modal },
            children: /* @__PURE__ */ t(
              Zo,
              {
                ref: f,
                elevation: 0,
                onMouseEnter: R,
                onMouseLeave: v,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: s,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: pn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Qo,
                  {
                    id: y,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: pn
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
  function L(M, W, P) {
    return M.flatMap((A) => {
      const N = pt(W, A);
      return mt(A) ? [
        /* @__PURE__ */ t(
          Ms,
          {
            disableSticky: !0,
            title: A.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + P * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: A.text
          },
          N
        ),
        ...L(A.subitems, N, P + 1)
      ] : [
        /* @__PURE__ */ w(
          Qe,
          {
            role: "menuitem",
            title: A.text,
            disabled: !A.path,
            selected: Le(A, o),
            onClick: (ee) => {
              ee.preventDefault(), A.path && (r == null || r(A.path)), g(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + P * 1.5,
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
                bgcolor: I,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: I
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              A.icon ? /* @__PURE__ */ t(ye, { children: A.icon }) : null,
              /* @__PURE__ */ t(
                ke,
                {
                  primary: A.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          N
        )
      ];
    });
  }
}, oa = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const c = !!(e.path && o === e.path), { sx: a } = qn(
    i,
    n,
    c,
    s
  );
  return Zn(
    /* @__PURE__ */ t(
      be,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (p) => {
          p.preventDefault(), p.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: a,
        children: s ? /* @__PURE__ */ t(Yn, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, ra = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), na = () => /* @__PURE__ */ t(
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
), mn = (e, o) => e.map((r, n) => /* @__PURE__ */ w(l.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(ra, {}) : null
] }, n)), sa = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: c = !1
}) => {
  const a = (m, d) => mt(m) ? /* @__PURE__ */ t(
    ta,
    {
      link: m,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: d,
      surfaceBackgroundColor: s,
      railShowTitles: c
    }
  ) : /* @__PURE__ */ t(
    oa,
    {
      link: m,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: d,
      railShowTitles: c
    }
  ), p = c ? 1.25 : 1;
  return /* @__PURE__ */ w(
    $e,
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
        mn(e, (m) => a(m, !1)),
        o.length > 0 ? /* @__PURE__ */ w(Ae, { children: [
          /* @__PURE__ */ t(na, {}),
          /* @__PURE__ */ t(_, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t($e, { gap: p, alignItems: "center", children: mn(
            o,
            (m) => a(m, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, ia = (e) => e ? Nn(e) : "USER", aa = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), gn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Ko = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, pr = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  Ls,
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
    children: aa(e)
  }
), Qn = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ w(Ae, { children: [
  /* @__PURE__ */ t(pr, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ w(
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
          ae,
          {
            variant: "body2",
            sx: { ...gn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            variant: "caption",
            sx: { ...gn, opacity: 0.8, color: "inherit" },
            children: ia(o)
          }
        )
      ]
    }
  )
] }), xn = {
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
}, Jn = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: i,
  showNotifications: s,
  notificationCount: c,
  onNotificationsClick: a,
  userName: p = "User",
  userRole: m,
  userAvatar: d,
  menuItems: g = [],
  showSettings: u,
  onSettingsClick: f,
  showThemeToggler: x,
  theme: E,
  onThemeToggle: b,
  onLogout: y
}) => {
  const R = (v) => () => {
    o(), v == null || v();
  };
  return /* @__PURE__ */ w(
    ks,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: xn[r].anchor,
      transformOrigin: xn[r].transform,
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
              Qn,
              {
                name: p,
                role: m,
                avatar: d,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Je, {}),
        s && /* @__PURE__ */ w(Qe, { onClick: R(a), children: [
          /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t($n, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ke, { children: "Notifications" }),
          /* @__PURE__ */ t(Ko, { count: c })
        ] }),
        g.map((v) => /* @__PURE__ */ w(Qe, { onClick: R(v.onClick), children: [
          v.icon && /* @__PURE__ */ t(ye, { children: v.icon }),
          /* @__PURE__ */ t(ke, { inset: !v.icon, children: v.label }),
          /* @__PURE__ */ t(Ko, { count: v.badge })
        ] }, v.key)),
        u && /* @__PURE__ */ w(Qe, { onClick: R(f), children: [
          /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(Ds, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ke, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(Je, {}, "theme-divider"),
          /* @__PURE__ */ w(_, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
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
            /* @__PURE__ */ w(
              Ns,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: E,
                onChange: (v, C) => C && C !== E && (b == null ? void 0 : b()),
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
                  /* @__PURE__ */ t(Hr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Hr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Je, {}),
        /* @__PURE__ */ w(
          Qe,
          {
            onClick: R(y),
            sx: {
              color: E === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ye, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(An, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ke, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, es = 64, ca = 2, Ot = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: i,
  activeColor: s,
  activeBackground: c,
  ariaLabel: a,
  haspopup: p,
  isPage: m = !1,
  testId: d
}) => /* @__PURE__ */ w(
  tt,
  {
    onClick: r,
    "aria-label": a ?? e,
    "aria-haspopup": p,
    "aria-expanded": p ? n : void 0,
    "aria-current": m && n ? "page" : void 0,
    "data-testid": d,
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
), la = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: s,
  assistantActive: c,
  showProfile: a,
  background: p,
  color: m,
  activeColor: d,
  activeBackground: g,
  pinnedLinks: u = [],
  activePath: f,
  onLinkClick: x,
  ...E
}) => {
  const b = u.filter((S) => S.path).slice(0, ca), [y, R] = l.useState(
    null
  ), { userName: v = "User", userAvatar: C, avatarColor: T } = E, I = { color: m, activeColor: d, activeBackground: g };
  return /* @__PURE__ */ w(
    Zo,
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
        height: `calc(${es}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: p,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Ot,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(On, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...I
          }
        ),
        b.map((S) => /* @__PURE__ */ t(
          Ot,
          {
            label: S.text,
            icon: S.icon,
            onClick: () => x == null ? void 0 : x(S.path),
            active: qe(S, f),
            isPage: !0,
            testId: `mobile-nav-link-${S.text}`,
            ...I
          },
          S.path
        )),
        i && /* @__PURE__ */ t(
          Ot,
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
                children: /* @__PURE__ */ t(Dt, { size: 18 })
              }
            ),
            onClick: s,
            active: c,
            testId: "mobile-nav-nexa",
            ...I
          }
        ),
        r && /* @__PURE__ */ t(
          Ot,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Jo, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...I
          }
        ),
        a && /* @__PURE__ */ w(Ae, { children: [
          /* @__PURE__ */ t(
            Ot,
            {
              label: "Account",
              ariaLabel: `Account menu for ${v}`,
              icon: /* @__PURE__ */ t(
                pr,
                {
                  name: v,
                  avatar: C,
                  color: T,
                  size: 26
                }
              ),
              onClick: (S) => R(S.currentTarget),
              active: !!y,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...I
            }
          ),
          /* @__PURE__ */ t(
            Jn,
            {
              anchorEl: y,
              onClose: () => R(null),
              placement: "above-end",
              width: 280,
              ...E
            }
          )
        ] })
      ]
    }
  );
}, da = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Fs,
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
      $e,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(_, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            Tn,
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
), ua = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: i,
  brandMenuOpen: s,
  background: c,
  color: a,
  brandColor: p = a,
  endContent: m
}) => /* @__PURE__ */ t(
  Bs,
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
    children: /* @__PURE__ */ w(Ws, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        be,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ t(On, {})
        }
      ),
      /* @__PURE__ */ t(
        io,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: i,
          menuOpen: s,
          color: p,
          testId: "mobile-brand"
        }
      ),
      m ? /* @__PURE__ */ t(_, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: m }) : null
    ] })
  }
), mr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const c = dr(), a = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    ve,
    {
      title: a,
      placement: i,
      arrow: !0,
      ...c,
      children: /* @__PURE__ */ t(
        be,
        {
          onClick: o,
          "aria-label": a,
          "data-testid": s,
          sx: {
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
            Mn,
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
              children: /* @__PURE__ */ t($n, {})
            }
          )
        }
      )
    }
  );
}, ts = {
  "&:focus, &:focus-visible": { outline: "none" }
}, fa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, bn = Se(Ln), yn = Se(fo), vn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', ha = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = Ne().palette.mode === "dark", c = gt(), a = l.useRef(null), p = l.useRef(null), m = (u) => {
    var f;
    u !== e && (o == null || o()), (f = (u === "light" ? a : p).current) == null || f.focus();
  }, d = (u) => {
    if (!(u.key === "Tab" || u.key === "Escape"))
      switch (u.stopPropagation(), u.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          u.preventDefault(), m(e === "light" ? "dark" : "light");
          break;
        case "Home":
          u.preventDefault(), m("light");
          break;
        case "End":
          u.preventDefault(), m("dark");
          break;
      }
  }, g = (u, f, x, E) => {
    const b = e === u;
    return /* @__PURE__ */ t(
      tt,
      {
        ref: E,
        role: "radio",
        "aria-checked": b,
        "aria-label": f,
        tabIndex: b ? 0 : -1,
        onClick: () => m(u),
        "data-testid": `theme-segment-${u}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: i ? `${J}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? s ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...i && b ? lr(s, c) : {},
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
            boxShadow: `0 0 0 2px ${at(r, 0.6)}`
          },
          ...ts
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ w(
    $e,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: d,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: i ? `${J}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        g("light", "Light", Gs, a),
        g("dark", "Dark", Ps, p)
      ]
    }
  );
}, pa = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: i,
  userName: s,
  userEmail: c,
  roleLabel: a,
  accentColor: p,
  tint: m,
  showThemeToggler: d,
  theme: g,
  onThemeToggle: u,
  onProfileClick: f,
  onLinkClick: x,
  menuItems: E = [],
  onLogout: b,
  glass: y = !1
}) => {
  const R = Ne(), v = R.palette.mode === "dark", C = l.useRef(null), T = sr(R.palette.background.paper), I = ur({
    enabled: y,
    isDark: v,
    selector: vn,
    radius: J
  }), [S, O] = l.useState(null);
  l.useEffect(() => {
    if (!S || typeof ResizeObserver > "u")
      return;
    const A = new ResizeObserver(() => {
      var N;
      (N = C.current) == null || N.updatePosition();
    });
    return A.observe(S), () => A.disconnect();
  }, [S]);
  const L = (A) => {
    r(), A == null || A();
  }, M = (A) => {
    r(), A.onClick ? A.onClick() : A.path && (x == null || x(A.path));
  }, W = {
    borderRadius: y ? `${J}px` : "8px",
    py: 1,
    gap: 0.5
  }, P = /* @__PURE__ */ w($e, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ w(_, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ae, { noWrap: !0, sx: { fontWeight: 600 }, children: s }),
      c ? /* @__PURE__ */ t(
        ae,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: c
        }
      ) : null,
      a ? /* @__PURE__ */ t(
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
          children: a
        }
      ) : null,
      f ? /* @__PURE__ */ t(
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
            color: v ? "#ffffff" : p,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    er,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: C,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...y ? {
        slots: { transition: qo },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: O,
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
          "data-glass": y ? "true" : void 0,
          sx: y ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${J}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${vn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...fa, width: n, minWidth: n },
          children: [
            y ? /* @__PURE__ */ t(
              xt,
              {
                isDark: v,
                solid: T,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${ar} ${bn.duration}ms ${bn.easing} both`,
                  [_e]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ w(
              _,
              {
                ...I.containerProps,
                sx: y ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${cr} ${yn.duration}ms ${yn.easing} 70ms both`,
                  [_e]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  I.lens,
                  f ? /* @__PURE__ */ t(
                    tt,
                    {
                      onClick: () => L(f),
                      "data-testid": "account-menu-header",
                      sx: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        transition: "background-color 150ms ease",
                        "& [data-hint]": { display: "none" },
                        "&:hover, &.Mui-focusVisible": {
                          bgcolor: m,
                          "& [data-hint]": { display: "block" },
                          "& [data-role]": { display: "none" }
                        },
                        ...ts
                      },
                      children: P
                    }
                  ) : /* @__PURE__ */ t(_, { "data-testid": "account-menu-header", children: P }),
                  /* @__PURE__ */ t(Je, {}),
                  d ? /* @__PURE__ */ w(
                    _,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...W,
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
                        /* @__PURE__ */ t(ye, { children: /* @__PURE__ */ t(zs, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          ha,
                          {
                            glass: y,
                            mode: g,
                            onToggle: u,
                            accentColor: p,
                            tint: m
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ w(
                    Qo,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: d ? 0 : 0.5, pb: 0.5 },
                      children: [
                        E.map((A) => /* @__PURE__ */ w(
                          Qe,
                          {
                            onClick: () => M(A),
                            "data-testid": `menu-item-${A.key}`,
                            sx: W,
                            children: [
                              /* @__PURE__ */ t(ye, { children: A.icon }),
                              /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: A.label }),
                              /* @__PURE__ */ t(Ko, { count: A.badge })
                            ]
                          },
                          A.key
                        )),
                        b ? /* @__PURE__ */ t(Je, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ w(
                          Qe,
                          {
                            onClick: () => L(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...W,
                              color: v ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(ye, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(An, { fontSize: "small" }) }),
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
}, ma = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ga = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: i,
  title: s,
  onBrandClick: c,
  brandMenuOpen: a,
  brandColor: p,
  headerBackgroundColor: m,
  headerForegroundColor: d,
  activeAccentColor: g = "#01584f",
  groupAccentColor: u,
  activeForegroundColor: f,
  foregroundColor: x,
  surfaceBackgroundColor: E,
  flyoutSurfaceColor: b,
  collapsed: y,
  expandedWidth: R,
  collapsedWidth: v,
  topContent: C,
  submenuMode: T,
  color: I,
  hoverColor: S,
  avatarColor: O,
  showProfile: L = !0,
  userName: M = "User",
  userEmail: W,
  userRole: P,
  userAvatar: A,
  showNotifications: N = !0,
  notificationCount: ee = 0,
  onNotificationsClick: we,
  whatsNewCount: z = 0,
  onProfileClick: G,
  menuItems: X,
  onLogout: re,
  theme: se = "light",
  showThemeToggler: D = !0,
  onThemeToggle: U
}) => {
  const H = Ne(), te = H.palette.mode === "dark", B = E ?? (te ? H.palette.background.paper : "#ffffff"), Z = I ?? x ?? (te ? H.palette.text.primary : g), ce = S ?? u ?? ao(g), ue = O ?? g, Fe = l.useRef(null), [Ce, Re] = l.useState(!1), V = P ? Nn(P) : void 0, oe = (ct) => /* @__PURE__ */ t(
    pr,
    {
      name: M,
      avatar: A,
      color: ue,
      size: ct
    }
  ), Te = ee + z, pe = y && T === "flyout", Be = N ? /* @__PURE__ */ t(
    mr,
    {
      count: Te,
      onClick: we,
      color: Z,
      hoverColor: ce,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, We = L ? /* @__PURE__ */ w(
    tt,
    {
      ref: Fe,
      onClick: () => Re(!0),
      "aria-haspopup": "menu",
      "aria-expanded": Ce,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: y ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: Ce ? ce : "transparent",
        "&:hover": { bgcolor: ce },
        ...ma
      },
      children: [
        y && !pe && N ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Mn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Te,
              children: oe(36)
            }
          )
        ) : oe(y ? 36 : 40),
        y ? null : /* @__PURE__ */ w(_, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Z, lineHeight: 1.3 },
              children: M
            }
          ),
          V ? /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: Z,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: V
            }
          ) : null
        ] })
      ]
    }
  ) : null, Pe = !!Be && (!y || pe || !We);
  return /* @__PURE__ */ w(
    _,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": y ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          Go,
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
            brandColor: p,
            headerBackgroundColor: m,
            headerForegroundColor: d,
            activeAccentColor: g,
            groupAccentColor: u,
            activeForegroundColor: f,
            foregroundColor: x,
            surfaceBackgroundColor: B,
            flyoutSurfaceColor: b,
            collapsed: y,
            expandedWidth: R,
            collapsedWidth: v,
            topContent: C,
            footer: We || Pe ? /* @__PURE__ */ w(
              $e,
              {
                direction: pe ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  pe && Pe ? Be : null,
                  We,
                  !pe && Pe ? Be : null
                ]
              }
            ) : void 0,
            submenuMode: T
          }
        ),
        L ? /* @__PURE__ */ t(
          pa,
          {
            open: Ce,
            anchorEl: Fe.current,
            onClose: () => Re(!1),
            width: Math.max(R - 16, 240),
            renderAvatar: oe,
            userName: M,
            userEmail: W,
            roleLabel: V,
            accentColor: g,
            tint: ce,
            showThemeToggler: D,
            theme: se,
            onThemeToggle: U,
            onProfileClick: G,
            onLinkClick: n,
            menuItems: X,
            onLogout: re,
            glass: T === "flyout"
          }
        ) : null
      ]
    }
  );
}, Sn = Se(Ln), wn = Se(fo), Rn = 260, xa = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, ba = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: c = !1
}) => {
  const a = Ne(), p = a.palette.mode === "dark", m = !!e, d = sr(a.palette.background.paper), g = ur({
    enabled: c,
    isDark: p,
    selector: ".MuiMenuItem-root",
    radius: J
  }), u = /* @__PURE__ */ t(
    Qo,
    {
      autoFocusItem: m,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((f) => {
        const x = f.key === n, E = f.accentColor ?? s;
        return /* @__PURE__ */ w(
          Qe,
          {
            selected: x,
            onClick: () => i(f),
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
              /* @__PURE__ */ t(ye, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                _,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: E,
                    boxShadow: c ? `0 0 0 3px ${p ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                ke,
                {
                  primary: f.name,
                  secondary: f.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              x ? /* @__PURE__ */ t(
                Hs,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: E }
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
    er,
    {
      open: m,
      anchorEl: e,
      onClose: o,
      onClick: (f) => f.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...c ? {
        slots: { transition: qo },
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
            minWidth: Rn,
            borderRadius: `${J}px`
          } : { ...xa, minWidth: Rn },
          children: c ? /* @__PURE__ */ w(Ae, { children: [
            /* @__PURE__ */ t(
              xt,
              {
                isDark: p,
                solid: d,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${ar} ${Sn.duration}ms ${Sn.easing} both`,
                  [_e]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ w(
              _,
              {
                ...g.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${cr} ${wn.duration}ms ${wn.easing} 70ms both`,
                  [_e]: { animation: "none" }
                },
                children: [
                  g.lens,
                  u
                ]
              }
            )
          ] }) : u
        }
      )
    }
  );
}, ya = ({ children: e, anchorEl: o, ...r }) => {
  const n = l.useRef(null), i = !!(o && n.current && o.contains(n.current));
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
          ba,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, va = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: i = 0,
  ...s
}) => {
  var v;
  const {
    avatarColor: c,
    showNotifications: a,
    notificationCount: p,
    onNotificationsClick: m,
    userName: d = "User",
    userRole: g,
    userAvatar: u
  } = s, f = l.useRef(null), [x, E] = l.useState(
    null
  ), b = !!x, y = l.useRef(e);
  if (l.useEffect(() => {
    e && !y.current && E(null), y.current = e;
  }, [e]), !a && !n)
    return null;
  const R = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ w(Ae, { children: [
    /* @__PURE__ */ w(
      $e,
      {
        ref: f,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            ve,
            {
              title: e ? d : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                tt,
                {
                  onClick: () => E(f.current),
                  "aria-label": `Account menu for ${d}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": b,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: o,
                    bgcolor: b ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...R
                  },
                  children: /* @__PURE__ */ t(
                    Qn,
                    {
                      name: d,
                      role: g,
                      avatar: u,
                      avatarColor: c,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          a && /* @__PURE__ */ t(
            mr,
            {
              count: p + i,
              onClick: m,
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
      Jn,
      {
        anchorEl: x,
        onClose: () => E(null),
        placement: e ? "beside" : "above",
        width: e || (v = f.current) == null ? void 0 : v.clientWidth,
        ...s
      }
    )
  ] });
}, Sa = 120, wa = 300, En = Se(Dn), In = Se(fo), Ra = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Ea = 'input, textarea, [contenteditable="true"]', jo = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Ea)) == null || o.focus();
}, Ia = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: s,
  hoverColor: c
}) => {
  const a = dr(), p = l.useContext(po), m = l.useRef(null), [d, g] = l.useState(null);
  return l.useEffect(() => {
    o === "full" && n && (jo(m.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    _,
    {
      ref: m,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && p ? /* @__PURE__ */ t(
    _a,
    {
      search: e,
      color: s,
      railTooltip: a
    }
  ) : /* @__PURE__ */ w(
    _,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(ve, { title: "Search", placement: "right", arrow: !0, ...a, children: /* @__PURE__ */ t(
          be,
          {
            "aria-label": "Search",
            onClick: (u) => o === "expand" ? r == null ? void 0 : r() : g(u.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: s,
              borderRadius: "8px",
              "&:hover": { bgcolor: c }
            },
            children: /* @__PURE__ */ t(Jo, {})
          }
        ) }),
        /* @__PURE__ */ t(
          er,
          {
            open: !!d,
            anchorEl: d,
            onClose: () => g(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (u) => jo(u)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, _a = ({ search: e, color: o, railTooltip: r }) => {
  const n = Ne().palette.mode === "dark";
  Js(n, Bo(o, n ? 0.3 : 0.35));
  const i = `rgb(${gt()})`, s = sr(n ? "#1e2430" : "#ffffff"), c = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${J}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: i
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${J}px`,
      "&.Mui-focusVisible": { borderColor: i }
    }
  }, a = l.useRef(null), p = l.useRef(null), [m, d] = l.useState(!1), g = l.useRef(!1), u = l.useRef(void 0), f = l.useRef(void 0), x = () => {
    clearTimeout(u.current), clearTimeout(f.current);
  }, E = l.useCallback(() => {
    x(), g.current = !1, d(!1);
  }, []), b = () => {
    clearTimeout(f.current), m || (clearTimeout(u.current), u.current = setTimeout(
      () => d(!0),
      Sa
    ));
  }, y = () => {
    clearTimeout(u.current), clearTimeout(f.current), f.current = setTimeout(() => {
      !g.current && !Ra(p.current) && d(!1);
    }, wa);
  };
  return l.useEffect(() => x, []), l.useEffect(() => {
    if (!m)
      return;
    const R = setTimeout(() => jo(p.current)), v = (T) => {
      var S, O;
      const I = T.target;
      !((S = p.current) != null && S.contains(I)) && !((O = a.current) != null && O.contains(I)) && E();
    }, C = (T) => {
      var I;
      T.key === "Escape" && (E(), (I = a.current) == null || I.focus());
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", C), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", C);
    };
  }, [m, E]), /* @__PURE__ */ w(
    _,
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
            ...r,
            children: /* @__PURE__ */ t(
              be,
              {
                ref: a,
                "aria-label": "Search",
                "aria-expanded": m,
                onMouseEnter: b,
                onMouseLeave: y,
                onClick: () => {
                  x(), g.current = !0, d(!0);
                },
                sx: {
                  width: 44,
                  height: 44,
                  color: o,
                  borderRadius: `${J}px`
                },
                children: /* @__PURE__ */ t(Jo, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Yo,
          {
            open: m,
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
                ref: p,
                "data-testid": "sidebar-search-card",
                onMouseEnter: b,
                onMouseLeave: y,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: `${J}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    xt,
                    {
                      isDark: n,
                      solid: s,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${ar} ${En.duration}ms ${En.easing} both`,
                        [_e]: { animation: "none" }
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
                        animation: `${cr} ${In.duration}ms ${In.easing} 60ms both`,
                        [_e]: { animation: "none" }
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
}, Ca = 100, Ta = () => {
  const e = l.useRef(null), o = l.useRef(void 0), r = l.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = l.useState(!1), [s, c] = l.useState(!1), a = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return l.useEffect(() => {
    const m = (g) => {
      r.current.has(g) || (a(), i(!1));
    }, d = () => {
      a(), i(!1);
    };
    return document.addEventListener("mouseover", m), document.documentElement.addEventListener("mouseleave", d), () => {
      a(), document.removeEventListener("mouseover", m), document.documentElement.removeEventListener(
        "mouseleave",
        d
      );
    };
  }, []), l.useEffect(() => {
    if (!s)
      return;
    const m = (d) => {
      var g;
      (g = e.current) != null && g.contains(d.target) || c(!1);
    };
    return document.addEventListener("pointerdown", m), () => document.removeEventListener("pointerdown", m);
  }, [s]), {
    expanded: n || s,
    pin: () => c(!0),
    rootProps: {
      ref: e,
      onMouseOver: (m) => {
        r.current.add(m.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, i(!0);
        }, Ca));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (m) => {
        const d = m.relatedTarget;
        d && !m.currentTarget.contains(d) && c(!1);
      },
      onKeyDown: (m) => {
        m.key === "Escape" && c(!1);
      }
    }
  };
}, Oa = 300, Lo = 288, Aa = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", $a = 68, Ma = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Da = typeof window > "u" ? to : Es, Mc = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: c = "rail",
  sidebarSubmenu: a = "expand",
  mobileNavigation: p = "bottom-bar",
  mobileBottomBarLinks: m,
  logo: d,
  onBrandClick: g,
  searchComponent: u,
  brandColor: f,
  contentPadding: x = zn,
  userMenuItems: E,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: R,
  activeSidebarForegroundColor: v,
  enableRefreshToken: C = !1,
  holdSessionSkeleton: T = !1,
  activePath: I,
  onLinkClick: S,
  showProfile: O = !0,
  userName: L,
  userRole: M,
  userAvatar: W,
  userEmail: P,
  onLogout: A,
  showSettings: N = !0,
  onSettingsClick: ee,
  onProfileClick: we,
  showNotifications: z = !0,
  notificationCount: G = 0,
  NotificationSidebarContent: X,
  whatsNewCount: re = 0,
  onNotificationsClick: se,
  platforms: D,
  currentPlatformKey: U,
  onPlatformSelect: H,
  onVerify: te,
  alertProps: B,
  style: Z,
  sidebarStyles: ce,
  contentStyles: ue,
  accentColor: Fe,
  sidebarAccentColor: Ce,
  sidebarForegroundColor: Re,
  contentBackgroundColor: V,
  theme: oe = "light",
  darkModeSelector: Te,
  showThemeToggler: pe = !1,
  onThemeToggle: Be,
  GlobalChatSidebar: We,
  useChatSidebar: Pe,
  chatPanelMode: bt = "docked",
  chatPanelPosition: ct = "right",
  chatPanelWidth: Gt = 420,
  onChatClose: zt,
  showAssistant: ot = !1,
  assistantPlacement: yt = "sidebar",
  assistantShortcut: Ht = "j",
  onAssistantClick: rt,
  assistantActive: vt = !1,
  assistantBusy: St = !1,
  customNavbar: wt,
  customNavbarProps: go,
  redirectToLogin: lt,
  apiBaseUrl: Ut
}) => {
  const dt = _n(), fe = Cn(dt.breakpoints.down("md")), h = Wr(
    () => uo(fr(oe)),
    [oe]
  ), F = oe === "dark", j = Fe ?? "#01584f", k = Ce ?? j, K = Kn(
    typeof V == "object" ? V[oe] : V,
    F
  ), q = c === "collapsible", me = c === "panel", le = me && i && !fe, de = c === "rail-labeled", xo = q || de, Me = Xn(
    b,
    F
  ), bo = y ?? Me, Ge = Re ?? (F ? "#ffffff" : k), Rt = R ?? ao(Ge), Et = y ? Fo(bo) : Ge, gr = ($) => /* @__PURE__ */ t(
    Q,
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
  ), Xt = f ?? Et, [xr, yo] = st(
    null
  ), vo = ((D == null ? void 0 : D.length) ?? 0) > 1, os = Pr(() => yo(null), []), rs = ($) => {
    yo(null), H ? H($) : $.key !== U && $.url && window.location.assign($.url);
  }, br = ($) => vo ? /* @__PURE__ */ t(
    ya,
    {
      anchorEl: xr,
      onClose: os,
      platforms: D,
      currentKey: U,
      onSelect: rs,
      accentColor: j,
      glass: a === "flyout" && (q || me) && !fe,
      children: $
    }
  ) : $, Kt = vo ? ($) => yo($.currentTarget) : g, jt = vo ? !!xr : void 0, So = br(
    d ?? gr(Xt)
  ), ns = br(
    d ?? gr(f ?? Ge)
  ), wo = Ta(), ze = hr(a, c), De = ze || !wo.expanded, yr = ze ? "popover" : "expand", vr = ze ? Ho : Mt, Sr = ze ? "transparent" : Me, wr = ze && !y ? "transparent" : bo, [ss, Rr] = st(!1), is = Pr(() => Rr(!1), []), He = Un({
    showSidebar: i,
    isMobile: fe,
    sidebarVariant: c,
    sidebarSubmenu: a
  }), [Er, nt] = st(!1), [Ir, Ro] = st(!1), xe = fe && p === "bottom-bar", _r = `calc(${es}px + env(safe-area-inset-bottom, 0px))`, [Eo, Cr] = st({ open: !1, tab: "notifications" }), Tr = () => Cr(($) => ({ ...$, open: !1 })), as = z && !!X, [cs, ls] = st(!0), [ds, us] = st(!1), Io = Pe == null ? void 0 : Pe(), Or = (Io == null ? void 0 : Io.isOpen) ?? !1, Ar = bt === "floating" ? "floating" : "docked", fs = Ar === "docked" && Or && We && !fe ? Gt : 0, Vt = Ao(te), $r = Ao(!1), Mr = Wr(
    () => Xi(Ut),
    [Ut]
  );
  to(() => {
    Vt.current = te;
  }, [te]);
  const _o = Ao(rt);
  _o.current = rt;
  const It = ot && Ht ? Ht.toLowerCase() : null;
  to(() => {
    if (!It)
      return;
    const $ = (ie) => {
      (ie.metaKey || ie.ctrlKey) && !ie.altKey && !ie.shiftKey && ie.key.toLowerCase() === It && _o.current && (ie.preventDefault(), _o.current());
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [It]);
  const Dr = ($) => {
    const ie = A($);
    ie instanceof Promise && ie.catch((Ve) => {
      console.error("Error in logout handler:", Ve);
    });
  };
  if (Da(() => {
    (() => {
      var ie;
      try {
        const { isAuthenticated: Ve } = Hi();
        if (!Ve) {
          console.log("No session found, redirecting to login"), Wt(), lt();
          return;
        }
        if (!$r.current) {
          const { user: Ct, error: Oo } = Ui();
          if (Ct && !Oo) {
            const vs = {
              name: Ct.name || "",
              email: Ct.email || "",
              profilePicture: Ct.profilePicture || "",
              role: Ct.role || ""
            };
            $r.current = !0, (ie = Vt.current) == null || ie.call(Vt, vs);
          } else
            Oo && console.error("Error getting user data:", Oo);
        }
        us(!0);
      } catch (Ve) {
        console.error("Error checking session:", Ve), Wt(), lt();
      } finally {
        ls(!1);
      }
    })();
  }, [lt]), to(() => {
    C && Ki(Mr, lt);
  }, [C, Mr]), cs || T)
    return /* @__PURE__ */ t(
      Gi,
      {
        theme: oe,
        darkModeSelector: Te,
        sidebarVariant: c,
        sidebarSubmenu: a,
        showSidebar: i,
        contentPadding: x,
        sidebarBackgroundColor: b,
        contentBackgroundColor: V
      }
    );
  if (!ds)
    return null;
  const _t = u ?? (wt ? /* @__PURE__ */ t(wt, { ...go }) : null), hs = ($) => {
    nt(!1), Ro(!1), Cr({ open: !0, tab: $ });
  }, Co = X && (() => hs("notifications")), ps = G + re, Lr = {
    avatarColor: k,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: E == null ? void 0 : E.map(
      ($) => $.onClick || !$.path ? $ : { ...$, onClick: () => S == null ? void 0 : S($.path) }
    ),
    showNotifications: z,
    notificationCount: G,
    whatsNewCount: re,
    onNotificationsClick: Co,
    showProfile: O,
    userName: L,
    userRole: M,
    userAvatar: W,
    showSettings: N,
    onSettingsClick: ee,
    showThemeToggler: pe,
    theme: oe,
    onThemeToggle: Be,
    onLogout: Dr
  }, To = ($) => /* @__PURE__ */ t(
    va,
    {
      ...Lr,
      compact: $,
      color: Ge,
      hoverColor: Rt
    }
  ), kr = It ? [Ma() ? "⌘" : "Ctrl", It.toUpperCase()] : void 0, ms = ($) => ot && yt === "sidebar" ? /* @__PURE__ */ t(
    hn,
    {
      variant: $ ? "sidebar-icon" : "sidebar",
      onClick: rt,
      active: vt,
      busy: St,
      shortcutKeys: kr,
      accentColor: Ge
    }
  ) : null, gs = ($) => _t ? /* @__PURE__ */ t(
    Ia,
    {
      search: _t,
      mode: $,
      onExpand: () => {
        wo.pin(), Rr(!0);
      },
      autoFocus: ss,
      onAutoFocused: is,
      color: Ge,
      hoverColor: Rt
    }
  ) : null, qt = ($) => {
    const ie = ms($ !== "full"), Ve = gs($);
    return ie || Ve ? /* @__PURE__ */ w(
      No,
      {
        spacing: 1.5,
        sx: { alignItems: $ === "full" ? "stretch" : "center" },
        children: [
          ie,
          Ve
        ]
      }
    ) : void 0;
  }, Nr = () => /* @__PURE__ */ t(
    Go,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: I,
      onLinkClick: S,
      showHeaderBar: q,
      logo: So,
      title: n,
      onBrandClick: Kt,
      brandMenuOpen: jt,
      brandColor: Xt,
      headerBackgroundColor: q ? wr : void 0,
      headerForegroundColor: q ? Et : void 0,
      activeAccentColor: k,
      groupAccentColor: R,
      activeForegroundColor: v,
      foregroundColor: Re,
      surfaceBackgroundColor: Sr,
      flyoutSurfaceColor: Me,
      collapsed: de || De,
      showLabels: de,
      expandedWidth: Lo,
      collapsedWidth: de ? Pn : vr,
      topContent: qt(
        de ? "popover" : De ? yr : "full"
      ),
      footer: To(de || De),
      submenuMode: ze ? "flyout" : "inline"
    }
  ), Fr = ($) => ze ? xs($) : bs($), xs = ($) => /* @__PURE__ */ t(
    Q,
    {
      component: "aside",
      sx: {
        width: He,
        minWidth: He,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: K
      },
      children: /* @__PURE__ */ w(
        Q,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: kt,
            bottom: kt,
            left: kt,
            width: Ho,
            borderRadius: `${Gn}px`,
            display: "flex",
            flexDirection: "column",
            ...ce
          },
          children: [
            /* @__PURE__ */ t(
              xt,
              {
                isDark: F,
                solid: Me,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              Q,
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
  ), bs = ($) => /* @__PURE__ */ t(
    Q,
    {
      component: "aside",
      sx: {
        width: Mt,
        minWidth: Mt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ie) => ie.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        Q,
        {
          ...ze ? {} : wo.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": De ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: De ? Mt : Lo,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Me,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: De ? "none" : `4px 0 24px rgba(0, 0, 0, ${F ? 0.5 : 0.12})`,
            transition: Aa,
            ...ce
          },
          children: $
        }
      )
    }
  ), ys = Hn(
    x,
    dt
  );
  return /* @__PURE__ */ t(so, { theme: h, children: /* @__PURE__ */ t(Fn.Provider, { value: k, children: /* @__PURE__ */ t(Pt.Provider, { value: Me, children: /* @__PURE__ */ w(
    Q,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Z
      },
      children: [
        /* @__PURE__ */ t(ko, {}),
        fe && /* @__PURE__ */ t(
          ua,
          {
            height: oo,
            onMenuClick: i && !xe ? () => nt(!0) : void 0,
            appName: n,
            logo: So,
            onBrandClick: Kt,
            brandMenuOpen: jt,
            background: bo,
            color: Et,
            brandColor: Xt,
            endContent: z ? /* @__PURE__ */ t(
              mr,
              {
                count: ps,
                onClick: Co,
                color: Et,
                hoverColor: Rt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !fe && de && /* @__PURE__ */ t(
          Q,
          {
            component: "aside",
            sx: {
              width: He,
              minWidth: He,
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
              ...ce
            },
            children: Nr()
          }
        ),
        i && !fe && q && Fr(
          /* @__PURE__ */ w(Ae, { children: [
            Nr(),
            (B == null ? void 0 : B.show) && !De && /* @__PURE__ */ t(eo, { ...B })
          ] })
        ),
        le && Fr(
          /* @__PURE__ */ w(Ae, { children: [
            /* @__PURE__ */ t(
              ga,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: I,
                onLinkClick: S,
                logo: So,
                title: n,
                onBrandClick: Kt,
                brandMenuOpen: jt,
                brandColor: Xt,
                headerBackgroundColor: wr,
                headerForegroundColor: Et,
                activeAccentColor: k,
                groupAccentColor: R,
                activeForegroundColor: v,
                foregroundColor: Re,
                surfaceBackgroundColor: Sr,
                flyoutSurfaceColor: Me,
                collapsed: De,
                expandedWidth: Lo,
                collapsedWidth: vr,
                topContent: qt(
                  De ? yr : "full"
                ),
                submenuMode: ze ? "flyout" : "inline",
                color: Ge,
                hoverColor: Rt,
                avatarColor: k,
                showProfile: O,
                userName: L,
                userEmail: P,
                userRole: M,
                userAvatar: W,
                showNotifications: z,
                notificationCount: G,
                onNotificationsClick: as ? Co : se,
                whatsNewCount: re,
                onProfileClick: we,
                menuItems: E,
                onLogout: Dr,
                theme: oe,
                showThemeToggler: pe,
                onThemeToggle: Be
              }
            ),
            (B == null ? void 0 : B.show) && !De && /* @__PURE__ */ t(eo, { ...B })
          ] })
        ),
        i && !fe && !xo && !me && /* @__PURE__ */ t(
          Gr,
          {
            variant: "permanent",
            sx: {
              width: He,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: He,
                boxSizing: "border-box",
                bgcolor: K,
                borderRight: "none"
              },
              ...ce
            },
            children: /* @__PURE__ */ w(
              Q,
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
                    Q,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        io,
                        {
                          logo: ns,
                          appName: n,
                          onClick: Kt,
                          menuOpen: jt,
                          color: f ?? Ge,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  qt("popover"),
                  /* @__PURE__ */ w(
                    Q,
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
                          sa,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: I,
                            onLinkClick: S,
                            accentColor: k,
                            surfaceBackgroundColor: K,
                            railShowTitles: s
                          }
                        ),
                        (B == null ? void 0 : B.show) && /* @__PURE__ */ t(eo, { ...B })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(Q, { sx: { py: 1.5 }, children: To(!0) })
                ]
              }
            )
          }
        ),
        i && fe && /* @__PURE__ */ w(
          _s,
          {
            anchor: xe ? "bottom" : "left",
            open: Er,
            onOpen: () => nt(!0),
            onClose: () => nt(!1),
            disableSwipeToOpen: !0,
            sx: {
              zIndex: ($) => $.zIndex.drawer + 1
            },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Me,
                  backgroundImage: "none",
                  ...xe ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              xe && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                Q,
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
                Go,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: I,
                  onLinkClick: ($) => {
                    S == null || S($), nt(!1);
                  },
                  onLinkAction: () => nt(!1),
                  collapsed: !1,
                  expandedWidth: xe ? "100%" : Oa,
                  activeAccentColor: k,
                  groupAccentColor: R,
                  activeForegroundColor: v,
                  foregroundColor: Re,
                  surfaceBackgroundColor: Me,
                  topInsetPx: xe ? 8 : 0,
                  topContent: xe ? void 0 : qt("full"),
                  footer: xe ? void 0 : To(!1)
                }
              ),
              (B == null ? void 0 : B.show) && /* @__PURE__ */ t(eo, { ...B })
            ]
          }
        ),
        xe && _t && /* @__PURE__ */ t(
          da,
          {
            open: Ir,
            onClose: () => Ro(!1),
            search: _t
          }
        ),
        xe && /* @__PURE__ */ t(
          la,
          {
            ...Lr,
            pinnedLinks: m,
            activePath: I,
            onLinkClick: S,
            onMenuClick: i ? () => nt(!0) : void 0,
            menuOpen: Er,
            onSearchClick: _t ? () => Ro(!0) : void 0,
            searchOpen: Ir,
            showAssistant: ot,
            onAssistantClick: rt,
            assistantActive: vt,
            showProfile: O,
            background: Me,
            color: Ge,
            activeColor: k,
            activeBackground: Rt
          }
        ),
        /* @__PURE__ */ t(
          Q,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": ys,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": fe ? `${oo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: He ? `calc(100% - ${He}px)` : "100%",
              mt: fe ? `${oo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...xe && {
                pb: `calc(var(--lumora-content-padding) + ${_r})`
              },
              backgroundColor: K,
              ...ue
            },
            children: e
          }
        ),
        We && /* @__PURE__ */ t(
          Zi,
          {
            open: Or,
            variant: Ar,
            position: ct,
            width: Gt,
            sidebarWidthPx: He,
            bottomOffsetPx: ot && yt === "floating" ? $a : 0,
            fullScreen: fe,
            fullScreenBottom: xe ? _r : "0px",
            onClose: zt,
            children: /* @__PURE__ */ t(We, {})
          }
        ),
        ot && yt === "floating" && !xe && /* @__PURE__ */ t(
          hn,
          {
            variant: "floating",
            rightOffsetPx: fs,
            shortcutKeys: kr,
            onClick: rt,
            active: vt,
            busy: St
          }
        ),
        z && X && /* @__PURE__ */ t(
          Gr,
          {
            anchor: "right",
            open: Eo.open,
            onClose: Tr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              X,
              {
                onClose: Tr,
                initialTab: Eo.tab
              },
              Eo.tab
            )
          }
        )
      ]
    }
  ) }) }) });
};
export {
  ne as AUTH_ERROR_CODES,
  Y as AuthError,
  Go as CollapsibleSidebar,
  Ac as FullBleedSection,
  Fi as Kbd,
  Gi as LumoraShellSkeleton,
  Mc as LumoraWrapper,
  Wt as clearAuthTokens,
  Mc as default,
  $c as getAuthErrorMessage,
  Bt as getAuthTokens,
  Ui as getCurrentUser,
  fr as getDesignTokens,
  Hi as isAuthenticated,
  Xo as logAuthError,
  Vn as storeAuthTokens
};
