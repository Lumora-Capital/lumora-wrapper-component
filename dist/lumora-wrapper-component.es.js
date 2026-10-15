import { jsx as t, jsxs as v, Fragment as De } from "react/jsx-runtime";
import ns from "@mui/icons-material/KeyboardArrowDownRounded";
import ss from "@mui/icons-material/KeyboardArrowUpRounded";
import is from "@mui/icons-material/ChevronRightRounded";
import O from "@mui/material/Box";
import _r from "@mui/material/Collapse";
import Je from "@mui/material/Divider";
import Se from "@mui/material/IconButton";
import Xt from "@mui/material/ListItemButton";
import ve from "@mui/material/ListItemIcon";
import Be from "@mui/material/ListItemText";
import Le from "@mui/material/Stack";
import we from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as We, createTheme as xn, alpha as ct, ThemeProvider as Cr } from "@mui/material/styles";
import * as d from "react";
import { useMemo as Or, useState as it, useCallback as Tr, useRef as Ro, useEffect as Kt } from "react";
import tt from "@mui/material/ButtonBase";
import { keyframes as Bo } from "@emotion/react";
import Wo from "@mui/material/Fade";
import Po from "@mui/material/Popper";
import { Stack as To, Skeleton as ze, Box as re, useTheme as as, useMediaQuery as cs, CssBaseline as Ar, Drawer as $r, SwipeableDrawer as ls } from "@mui/material";
import Mr from "axios";
import ds from "@mui/material/Card";
import us from "@mui/material/CardContent";
import bn from "@mui/material/Button";
import fs from "@mui/icons-material/AutoAwesomeRounded";
import hs from "@mui/material/Grow";
import zo from "@mui/material/Paper";
import ps from "@mui/material/Slide";
import ms from "@mui/material/ListSubheader";
import Qe from "@mui/material/MenuItem";
import Go from "@mui/material/MenuList";
import yn from "@mui/icons-material/MenuRounded";
import Ho from "@mui/icons-material/SearchRounded";
import Sn from "@mui/icons-material/LogoutRounded";
import vn from "@mui/icons-material/NotificationsNoneOutlined";
import gs from "@mui/icons-material/SettingsOutlined";
import xs from "@mui/material/Avatar";
import bs from "@mui/material/Menu";
import Dr from "@mui/material/ToggleButton";
import ys from "@mui/material/ToggleButtonGroup";
import Ss from "@mui/material/Drawer";
import vs from "@mui/material/AppBar";
import ws from "@mui/material/Toolbar";
import wn from "@mui/material/Badge";
import Es from "@mui/icons-material/DarkModeOutlined";
import Rs from "@mui/icons-material/LightModeOutlined";
import Is from "@mui/icons-material/SettingsBrightnessOutlined";
import Uo from "@mui/material/Popover";
import _s from "@mui/icons-material/CheckRounded";
const Jt = ({
  logo: e,
  title: o,
  appName: r,
  onClick: n,
  color: i,
  testId: s,
  menuOpen: a
}) => {
  const c = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: i,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, l = /* @__PURE__ */ v(De, { children: [
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
      "aria-label": a === void 0 ? `${r} home` : `${r}: switch platform`,
      ...a !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": a
      },
      "data-testid": s,
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
          outlineColor: i,
          outlineOffset: 2
        }
      },
      children: l
    }
  ) : /* @__PURE__ */ t(Le, { direction: "row", "data-testid": s, sx: c, children: l });
}, Lr = !1, no = { stiffness: 320, damping: 24 }, Xo = { stiffness: 520, damping: 20 }, En = { stiffness: 380, damping: 36 }, so = { stiffness: 260, damping: 28 }, Cs = "cubic-bezier(0.32, 1.28, 0.52, 1)", Os = 420, Nr = 60, Ts = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), kr = /* @__PURE__ */ new Map(), Ee = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = kr.get(n);
  if (i)
    return i;
  if (!Ts)
    return { easing: Cs, duration: Os };
  const s = 1 / 600;
  let a = 0, c = 0, l = 0, h = 1 / Nr;
  const m = [0];
  for (; l < 3; ) {
    const p = (-e * (a - 1) - o * c) / r;
    if (c += p * s, a += c * s, l += s, l >= h && (m.push(a), h += 1 / Nr, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const x = {
    easing: `linear(${m.map((p) => Number(p.toFixed(4))).join(", ")})`,
    duration: Math.round(l * 1e3)
  };
  return kr.set(n, x), x;
}, et = (e) => !!(e && typeof e.animate == "function"), Ue = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, jt = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, As = (e, o = 1.14) => {
  if (!et(e) || Ue())
    return;
  const r = Ee(Xo);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, gt = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, mt = (e, o) => e ? `${e}/${o.text}` : o.text, Ye = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => Ye(n, o))) ?? !1 : !1;
}, Fe = (e, o) => !!(o && e.path === o), Ko = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return gt(r) ? Ko(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Ao = (e) => {
  const o = io(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, eo = (e) => {
  const o = io(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, $o = (e, o) => {
  const r = io(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, io = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Rn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), jo = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", $s = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Ms = Bo`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ce = "@media (prefers-reduced-motion: reduce)", ee = 6, Vo = "9, 193, 174", In = d.createContext(
  void 0
), kt = d.createContext(
  void 0
), Yo = (e) => d.useContext(kt) ?? e, xt = () => {
  const e = d.useContext(In), o = e ? io(e) : null;
  return o ? o.join(", ") : Vo;
}, Fr = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, Ds = (e, o) => e ? "255, 255, 255" : o, Ls = (e, o, r = Vo) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${$s(e)}, 0 0 0 1px ${jo(e)}`
}), Ns = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", qo = (e, o) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: o ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
  border: "1px solid",
  borderColor: jo(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${ee}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), Zo = Bo`
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
`, Qo = Bo`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Jo = (e, o = Vo, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Dt = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: $o(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${$o(e, 0.45)}`
}, ks = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${jo(e)}`;
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
}, to = "data-rail-item", Fs = `[${to}], button, [role="button"]`, ao = d.createContext(!1), er = () => {
  const e = d.useContext(ao), o = We(), r = d.useContext(kt);
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: {
        sx: qo(o.palette.mode === "dark", r)
      },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, qe = Ee(En), tr = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  lean: s = 3
}) => {
  const a = d.useRef(null), c = xt(), [l, h] = d.useState(null), m = d.useRef(null), x = d.useRef(null), p = (w, I) => {
    x.current = I;
    const S = I.getBoundingClientRect(), C = w.getBoundingClientRect(), V = n ?? S.width, U = n ?? S.height, M = {
      top: Math.round(S.top - C.top + (S.height - U) / 2),
      left: Math.round(S.left - C.left + (S.width - V) / 2),
      width: Math.round(V),
      height: Math.round(U)
    };
    h(
      (D) => D && D.visible && D.top === M.top && D.left === M.left && D.width === M.width && D.height === M.height ? D : { ...M, visible: !0, instant: !(D != null && D.visible) }
    );
  }, f = (w, I) => {
    var C;
    const S = (C = I == null ? void 0 : I.closest) == null ? void 0 : C.call(I, r);
    return S && w.contains(S) ? S : null;
  }, g = (w) => {
    if (!e)
      return;
    const I = f(w.currentTarget, w.target);
    I && p(w.currentTarget, I);
  }, _ = (w) => {
    if (!e)
      return;
    const I = f(w.currentTarget, w.target);
    I && w.target.matches(":focus-visible") && p(w.currentTarget, I);
  }, b = (w) => {
    const I = a.current, S = x.current;
    if (!e || !I || !S || !s || Ue())
      return;
    const C = S.getBoundingClientRect(), V = (U, M) => Math.max(-1, Math.min(1, U / (M / 2))) * s;
    I.style.transform = `translate(${V(w.clientX - (C.left + C.width / 2), C.width)}px, ${V(w.clientY - (C.top + C.height / 2), C.height)}px)`;
  }, y = () => {
    x.current = null, a.current && (a.current.style.transform = ""), h((w) => w != null && w.visible ? { ...w, visible: !1 } : w);
  }, R = (w) => {
    const I = w.relatedTarget;
    (!I || !w.currentTarget.contains(I)) && (w.currentTarget.matches(":hover") || y());
  };
  return d.useEffect(() => {
    const w = a.current;
    if (!(l != null && l.visible)) {
      m.current = null;
      return;
    }
    const I = m.current;
    if (m.current = l.top, !et(w) || Ue())
      return;
    if (I === null || l.instant) {
      w.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: qe.duration,
        easing: qe.easing
      });
      return;
    }
    const S = Math.min(Math.abs(l.top - I) / 600, 0.08);
    S && w.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - S / 2} ${1 + S}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: qe.duration, easing: "ease-out" }
    );
  }, [l == null ? void 0 : l.top, l == null ? void 0 : l.visible, l == null ? void 0 : l.instant]), {
    lens: e && l ? /* @__PURE__ */ t(
      O,
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": l.visible ? "true" : "false",
        sx: {
          ...Jo(o, c),
          borderRadius: `${i}px`,
          position: "absolute",
          top: 0,
          left: 0,
          width: l.width,
          height: l.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset. `transform` carries
          // only the lean.
          translate: `${l.left}px ${l.top}px`,
          // Shrinks away as it fades; wells back up on return
          scale: l.visible ? "1" : "0.7",
          opacity: l.visible ? 1 : 0,
          pointerEvents: "none",
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${qe.duration}ms ${qe.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [Ce]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: g,
      onMouseMove: b,
      onMouseLeave: y,
      onFocus: _,
      onBlur: R,
      onScrollCapture: y
    } : {}
  };
}, Bs = (e, o) => {
  const r = tr({
    enabled: e,
    isDark: o,
    selector: Fs,
    size: 46,
    radius: ee
  });
  return {
    ...r,
    lens: r.lens ? d.cloneElement(r.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Ws = (e, o) => {
  let r = 0, n = 0, i = e;
  for (; i && i !== o; ) {
    r += i.offsetTop, n += i.offsetLeft;
    const c = i.offsetParent;
    for (let l = i.parentElement; l && l !== o && (r -= l.scrollTop, n -= l.scrollLeft, l !== c); l = l.parentElement)
      ;
    i = c;
  }
  if (i === o && e.offsetWidth)
    return {
      top: Math.round(r),
      left: Math.round(n),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const s = e.getBoundingClientRect(), a = o.getBoundingClientRect();
  return {
    top: Math.round(s.top - a.top),
    left: Math.round(s.left - a.left),
    width: Math.round(s.width),
    height: Math.round(s.height)
  };
}, Ps = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const i = d.useRef(null), [s, a] = d.useState(null), c = d.useRef(null), l = d.useCallback(
    (m) => {
      const x = n.current;
      if (!e || !x)
        return;
      const p = x.querySelector(
        `[${to}][data-active="true"]`
      );
      if (!p) {
        a(
          (g) => g != null && g.visible ? { ...g, visible: !1 } : g
        );
        return;
      }
      const f = Ws(p, x);
      a(
        (g) => g && g.visible && g.top === f.top && g.left === f.left && g.width === f.width && g.height === f.height ? g : {
          ...f,
          visible: !0,
          instant: m || !(g != null && g.visible)
        }
      );
    },
    [e, n]
  );
  return d.useLayoutEffect(() => {
    l(!1);
  }), d.useEffect(() => {
    const m = n.current;
    if (!e || !m)
      return;
    let x = 0;
    const p = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => l(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => l(!0));
    f == null || f.observe(m);
    const g = typeof MutationObserver > "u" ? null : new MutationObserver(p);
    return g == null || g.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(x), f == null || f.disconnect(), g == null || g.disconnect();
    };
  }, [e, n, l]), d.useEffect(() => {
    const m = i.current;
    if (!(s != null && s.visible)) {
      c.current = null;
      return;
    }
    const x = c.current;
    if (c.current = s.top, x === null || s.instant || !et(m) || Ue())
      return;
    const p = Math.min(Math.abs(s.top - x) / 600, 0.08);
    p && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - p / 2} ${1 + p}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: qe.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    O,
    {
      ref: i,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...Dt(r, o),
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
        transition: s.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${qe.duration}ms ${qe.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Ce]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Br = 14, zs = 18, Gs = "blur(12px) saturate(180%) brightness(1.04)", Hs = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Us = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, Xs = 140, Wr = 0.22, Ks = 0.14, js = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var f;
      const p = e.current;
      p && (p.style.setProperty("--lx", `${s.x.toFixed(1)}px`), p.style.setProperty("--ly", `${s.y.toFixed(1)}px`), p.style.setProperty("--li", s.i.toFixed(3)), (f = n.current) == null || f.call(n, s.x, s.y, s.i));
    }, l = () => {
      s.x += (i.x - s.x) * Wr, s.y += (i.y - s.y) * Wr, s.i += (i.i - s.i) * Ks;
      const p = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      p && (s.x = i.x, s.y = i.y, s.i = i.i), c(), a = p ? 0 : requestAnimationFrame(l);
    }, h = () => {
      a || (a = requestAnimationFrame(l));
    }, m = (p) => {
      const f = e.current;
      if (p.pointerType === "touch" || !f)
        return;
      const g = f.getBoundingClientRect();
      if (!g.width || !g.height)
        return;
      i.x = (p.clientX - g.left) * f.offsetWidth / g.width, i.y = (p.clientY - g.top) * f.offsetHeight / g.height;
      const _ = Math.max(
        g.left - p.clientX,
        0,
        p.clientX - g.right
      ), b = Math.max(
        g.top - p.clientY,
        0,
        p.clientY - g.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(_, b) / Xs), s.i < 0.01 && (s.x = i.x, s.y = i.y), h();
    }, x = () => {
      i.i = 0, h();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", x), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", x);
    };
  }, [e, o]);
}, bt = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: s = !0,
    onLight: a
  }, c) => {
    const l = d.useRef(null), h = i && Lr;
    js(l, s && Lr, a);
    const m = xt(), x = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [p, f] = d.useState(null), g = d.useRef(null), _ = d.useCallback(
      (R) => {
        var w;
        if (l.current = R, typeof c == "function" ? c(R) : c && (c.current = R), (w = g.current) == null || w.disconnect(), g.current = null, !R || !h || !Hs || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const I = R.offsetWidth, S = R.offsetHeight;
          f(
            (C) => (C == null ? void 0 : C.width) === I && C.height === S ? C : I && S ? { width: I, height: S } : null
          );
        };
        g.current = new ResizeObserver(E), g.current.observe(R), E();
      },
      [c, h]
    ), b = d.useMemo(
      () => p ? Us(p.width, p.height, Br) : null,
      [p]
    ), y = h && !!(b && p);
    return /* @__PURE__ */ v(De, { children: [
      y ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ v(
            "filter",
            {
              id: x,
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
                    stdDeviation: Br / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: zs,
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
        O,
        {
          ref: _,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": y ? "true" : void 0,
          sx: [
            Ls(e, o, m),
            y ? {
              backdropFilter: `url(#${x}) ${Gs}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
bt.displayName = "GlassLayer";
const Ze = 44, Pr = 4, Vs = ee, zr = 1.4, Ys = 6, _n = 6, At = ee, oo = 10, Gr = 0.12, Hr = 0.75, qs = oo + 32, Zs = 90, Qs = 22, Js = 1190, ei = 1195, ro = Ee(no), me = Ee(En), Ur = Ee(so), ti = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const s = Math.min(i, r / 2, n / 2), a = e + r, c = o + n, l = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + s} ${o} H ${a - s} ${l} ${a} ${o + s} V ${c - s} ${l} ${a - s} ${c} H ${e + s} ${l} ${e} ${c - s} V ${o + s} ${l} ${e + s} ${o} Z')`;
}, oi = ({
  group: e,
  groupKey: o,
  anchor: r,
  railEdge: n,
  railShape: i,
  activePath: s,
  focusFirst: a = !1,
  onNavigate: c,
  onClose: l,
  panelProps: h,
  accentColor: m,
  activeForegroundColor: x,
  solidSurface: p
}) => {
  const f = We(), g = f.palette.mode === "dark", _ = !!(e && r), b = d.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const y = b.current, R = d.useMemo(() => r ? {
    contextElement: r,
    getBoundingClientRect: () => {
      const T = r.getBoundingClientRect();
      return {
        x: n,
        y: T.top,
        left: n,
        right: n,
        top: T.top,
        bottom: T.bottom,
        width: 0,
        height: T.height,
        toJSON: () => ({})
      };
    }
  } : null, [r, n]), E = d.useRef(R);
  R && (E.current = R), d.useEffect(() => {
    r && As(r);
  }, [r]);
  const [w, I] = d.useState(!1);
  d.useEffect(() => {
    if (!_) {
      I(!1);
      return;
    }
    let T = 0;
    const W = requestAnimationFrame(() => {
      T = requestAnimationFrame(() => I(!0));
    });
    return () => {
      cancelAnimationFrame(W), cancelAnimationFrame(T);
    };
  }, [_]);
  const S = d.useMemo(
    () => y ? Ko(y.group.subitems, y.group.icon) : [],
    [y]
  ), C = d.useRef(null), V = d.useRef(null), U = d.useRef(0), M = d.useRef(null), D = d.useRef([]), P = S.findIndex(
    ({ sub: T }) => Fe(T, s)
  ), [L, z] = d.useState(0);
  d.useEffect(() => {
    z(Math.max(P, 0));
  }, [o]), d.useEffect(() => {
    if (!_ || !a)
      return;
    const T = setTimeout(() => {
      var W;
      return (W = D.current[0]) == null ? void 0 : W.focus();
    });
    return () => clearTimeout(T);
  }, [_, a, o]);
  const te = (T) => {
    var Q;
    const W = Math.max(0, Math.min(T, S.length - 1));
    z(W), (Q = D.current[W]) == null || Q.focus();
  }, ge = (T, W) => {
    switch (T.key) {
      case "ArrowRight":
        te(W + 1);
        break;
      case "ArrowLeft":
        W === 0 ? l(!0) : te(W - 1);
        break;
      case "Home":
        te(0);
        break;
      case "End":
        te(S.length - 1);
        break;
      case "Tab":
        l(!0);
        break;
      default:
        return;
    }
    T.preventDefault();
  }, F = (T) => {
    var Re;
    const W = D.current.slice(0, S.length).filter((Y) => !!Y);
    if (!W.length)
      return;
    const Q = T !== null && T < W.length && !Ue(), H = `translate ${me.duration}ms ${me.easing}, scale ${me.duration}ms ${me.easing}`, k = W.map((Y) => Y.offsetLeft + Ze / 2), J = W.map(
      (Y, ue) => Q && ue === T ? zr : 1
    ), de = Q ? (zr - 1) * Ze : 0, Oe = k[0] - Ze / 2, Xe = k[k.length - 1] + Ze / 2, xe = Q ? Math.min(
      Math.min(
        1,
        Math.max(
          0,
          (k[T] - Oe) / (Xe - Oe)
        )
      ),
      Ys / de
    ) : 0;
    let he = Oe - de * xe;
    W.forEach((Y, ue) => {
      const be = Ze * J[ue], Te = he + be / 2;
      he += be + Pr, Y.style.transition = `${H}, background 160ms ease, box-shadow 160ms ease`, Y.style.translate = Q ? `${Te - k[ue]}px 0` : "", Y.style.scale = Q ? String(J[ue]) : "", Q ? Y.style.setProperty("--dock-scale", String(J[ue])) : Y.style.removeProperty("--dock-scale");
    }), (Re = M.current) == null || Re.call(M);
  }, B = d.useRef(null);
  d.useEffect(() => {
    B.current = null;
  }, [o]);
  const G = (T) => {
    B.current !== T && (B.current = T, cancelAnimationFrame(U.current), U.current = requestAnimationFrame(() => F(T)));
  };
  d.useEffect(() => () => cancelAnimationFrame(U.current), []);
  const oe = f.palette.text.primary, ie = g ? f.palette.text.primary : m;
  return /* @__PURE__ */ v(De, { children: [
    /* @__PURE__ */ t(Wo, { in: _, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      O,
      {
        "data-testid": "sidebar-flyout-scrim",
        "aria-hidden": !0,
        onClick: () => l(),
        sx: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: i ? 0 : `${n}px`,
          // Clicks in the cut-out reach the rail beneath
          ...i ? { clipPath: ti(i) } : {},
          zIndex: Js,
          bgcolor: Ns(g)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      Po,
      {
        open: _,
        anchorEl: R ?? E.current,
        placement: "right",
        transition: !0,
        modifiers: [
          { name: "offset", options: { offset: [0, oo] } },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: ei,
          transition: w ? `transform ${me.duration}ms ${me.easing}` : "none",
          [Ce]: { transition: "none" }
        },
        children: ({ TransitionProps: T }) => /* @__PURE__ */ t(
          li,
          {
            in: (T == null ? void 0 : T.in) ?? _,
            onEnter: T == null ? void 0 : T.onEnter,
            onExited: T == null ? void 0 : T.onExited,
            groupKey: (y == null ? void 0 : y.key) ?? null,
            panelProps: h,
            isDark: g,
            solidSurface: p,
            groupText: y == null ? void 0 : y.group.text,
            glassRef: V,
            shapeRef: M,
            children: y ? /* @__PURE__ */ t(De, { children: /* @__PURE__ */ t(
              O,
              {
                ref: C,
                role: "menu",
                "aria-label": y.group.text,
                onPointerLeave: () => G(null),
                sx: {
                  position: "relative",
                  display: "flex",
                  gap: `${Pr}px`,
                  // No room kept for magnification: a grown tile rises out of
                  // the glass, as icons rise out of the Dock
                  px: 0
                },
                children: S.map(({ sub: W, icon: Q }, H) => /* @__PURE__ */ t(
                  Cn,
                  {
                    ref: (k) => {
                      D.current[H] = k;
                    },
                    sub: W,
                    icon: Q,
                    index: H,
                    active: Fe(
                      W,
                      s
                    ),
                    tabIndex: H === L ? 0 : -1,
                    onClick: () => {
                      c(W.path), l();
                    },
                    onKeyDown: (k) => ge(k, H),
                    onFocus: (k) => {
                      z(H), k.currentTarget.matches(
                        ":focus-visible"
                      ) && G(H);
                    },
                    onHoverStart: (k) => {
                      k !== "touch" && G(H);
                    },
                    accentColor: m,
                    activeForegroundColor: x,
                    labelColor: oe,
                    iconColor: ie,
                    isDark: g
                  },
                  W.path
                ))
              },
              y.key
            ) }) : null
          }
        )
      }
    )
  ] });
}, Mt = 18, ri = 160, Mo = 14, ni = 22, si = 2.5, ii = 1, Xr = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, ai = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, ci = (e, o, r) => {
  const n = _n, i = Mt, s = Mt + o / 2, a = Math.max(e, ...r.map((b) => b.right + n)), c = {
    cx: a / 2,
    cy: s,
    hx: a / 2,
    hy: o / 2,
    r: At
  }, l = r.filter((b) => b.bottom - b.top > Ze * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + Mt,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: At
  })), h = (b, y) => l.reduce(
    (R, E) => ai(R, Xr(b, y, E), ni),
    Xr(b, y, c)
  ), m = (b, y) => {
    let R = s, E = s + y * (o / 2 + i);
    if (h(b, R) > 0)
      return null;
    for (let w = 0; w < 12; w += 1) {
      const I = (R + E) / 2;
      h(b, I) <= 0 ? R = I : E = I;
    }
    return R;
  }, x = Math.min(0, ...l.map((b) => b.cx - b.hx)) - 2, p = Math.max(a, ...l.map((b) => b.cx + b.hx)) + 2, f = [], g = [];
  for (let b = x; b <= p; ) {
    const y = m(b, -1), R = m(b, 1);
    if (y !== null && R !== null) {
      const w = +(b + Mo).toFixed(1);
      f.push([w, +y.toFixed(1)]), g.push([w, +R.toFixed(1)]);
    }
    const E = b - x < At + 4 || p - b < At + 4;
    b += E ? ii : si;
  }
  return f.length ? `M ${[...f, ...g.reverse()].map(([b, y]) => `${b} ${y}`).join(" L ")} Z` : "";
}, Kr = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((s) => {
    et(s) && s.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    });
  });
}, li = ({
  in: e,
  onEnter: o,
  onExited: r,
  groupKey: n,
  panelProps: i,
  isDark: s,
  solidSurface: a,
  groupText: c,
  glassRef: l,
  shapeRef: h,
  children: m
}) => {
  const x = d.useRef(null), p = d.useRef(null), f = d.useRef(null), g = d.useRef(null), _ = d.useRef(null), b = Ds(s, xt()), y = d.useCallback(
    (F, B, G) => {
      var oe, ie;
      (oe = _.current) == null || oe.setAttribute("cx", String(F)), (ie = _.current) == null || ie.setAttribute("cy", String(B)), g.current && (g.current.style.opacity = String(
        G * (s ? Fr.dark.rim : Fr.light.rim)
      ));
    },
    [s]
  ), R = d.useRef(null), E = d.useRef(null), w = `lumora-flyout-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, I = d.useRef(0), S = d.useRef(0), C = d.useRef(""), V = () => {
    var T, W, Q, H;
    const F = x.current, B = p.current;
    if (!F || !B)
      return !1;
    const G = F.getBoundingClientRect(), oe = Array.from(
      F.querySelectorAll('[role="menuitem"]'),
      (k) => {
        const J = k.getBoundingClientRect();
        return {
          left: J.left - G.left,
          right: J.right - G.left,
          top: J.top - G.top,
          bottom: J.bottom - G.top
        };
      }
    ), ie = ci(
      F.offsetWidth,
      F.offsetHeight,
      oe
    );
    return ie === C.current ? !1 : (C.current = ie, B.style.clipPath = `path('${ie}')`, (T = f.current) == null || T.setAttribute("d", ie), (W = g.current) == null || W.setAttribute("d", ie), (Q = R.current) == null || Q.setAttribute("d", ie), (H = E.current) == null || H.setAttribute("d", ie), !0);
  }, U = () => {
    if (S.current = 0, I.current)
      return;
    const F = () => {
      if (S.current = V() ? 0 : S.current + 1, S.current > 8) {
        I.current = 0;
        return;
      }
      I.current = requestAnimationFrame(F);
    };
    I.current = requestAnimationFrame(F);
  };
  h.current = U, d.useLayoutEffect(() => (V(), U(), () => {
    cancelAnimationFrame(I.current), I.current = 0;
  }), [n]);
  const M = d.useRef(null), D = d.useRef(null), P = d.useRef(!1), L = (F) => {
    x.current = F;
    const { ref: B } = i;
    typeof B == "function" ? B(F) : B && (B.current = F);
  }, z = () => {
    jt(l.current), jt(M.current), jt(x.current);
  }, te = () => {
    var oe;
    const F = x.current, B = l.current, G = M.current;
    if (!(!et(F) || !B || !G)) {
      if (z(), Ue()) {
        F.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      D.current = null, B.animate(
        [
          { transform: `scale(${Gr}, ${Hr})` },
          { transform: "none" }
        ],
        { duration: ro.duration, easing: ro.easing }
      ), Kr(B, [0, 1], 160, "ease-out");
      try {
        (oe = p.current) == null || oe.animate(
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
      G.animate(
        [
          { opacity: 0, transform: "translateX(-10px) scale(0.98)" },
          { opacity: 1, transform: "none" }
        ],
        {
          duration: Ur.duration,
          delay: 60,
          easing: Ur.easing,
          fill: "backwards"
        }
      );
    }
  }, ge = () => {
    const F = x.current, B = l.current, G = M.current;
    if (!et(F) || !B || !G) {
      r == null || r();
      return;
    }
    if (z(), Ue()) {
      F.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 120,
        fill: "forwards"
      }).finished.then(() => r == null ? void 0 : r()).catch(() => {
      });
      return;
    }
    G.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 90,
      easing: "ease-in",
      fill: "forwards"
    }), Kr(B, [1, 0], 200, "ease-in"), B.animate(
      [
        { transform: "none" },
        { transform: `scale(${Gr}, ${Hr})` }
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
      ge();
      return;
    }
    o == null || o(), te();
  }, [e]), d.useLayoutEffect(() => {
    const F = x.current;
    if (!F)
      return;
    const B = F.getBoundingClientRect(), G = D.current;
    if (D.current = { width: B.width, height: B.height }, !P.current) {
      P.current = !0;
      return;
    }
    const oe = l.current;
    !e || !G || !et(oe) || !B.width || !B.height || Ue() || (jt(oe), oe.animate(
      [
        {
          transform: `scale(${G.width / B.width}, ${G.height / B.height})`
        },
        { transform: "none" }
      ],
      { duration: me.duration, easing: me.easing }
    ));
  }, [n]), /* @__PURE__ */ v(
    O,
    {
      ref: L,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": c,
      sx: {
        position: "relative",
        borderRadius: `${At}px`,
        p: `${_n}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -oo - 2,
          width: oo + 2
        }
      },
      children: [
        /* @__PURE__ */ v(
          O,
          {
            ref: l,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Mt,
              bottom: -Mt,
              left: -Mo,
              right: -ri,
              pointerEvents: "none",
              // The rail icon's centre: the panel is centred on it,
              // one gap plus half the rail's padding to the left
              transformOrigin: `${Mo - qs}px 50%`,
              willChange: "transform"
            },
            children: [
              /* @__PURE__ */ v(
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
                    /* @__PURE__ */ v("defs", { children: [
                      /* @__PURE__ */ t(
                        "filter",
                        {
                          id: `${w}-shadow`,
                          x: "-20%",
                          y: "-50%",
                          width: "140%",
                          height: "200%",
                          children: /* @__PURE__ */ t("feGaussianBlur", { stdDeviation: "14" })
                        }
                      ),
                      /* @__PURE__ */ v(
                        "mask",
                        {
                          id: `${w}-outside`,
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
                    /* @__PURE__ */ t("g", { mask: `url(#${w}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: R,
                        transform: "translate(0 12)",
                        fill: s ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${w}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                bt,
                {
                  ref: p,
                  isDark: s,
                  solid: a,
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
              /* @__PURE__ */ v(
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
                    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ v(
                      "linearGradient",
                      {
                        id: `${w}-rim`,
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
                    /* @__PURE__ */ v(
                      "radialGradient",
                      {
                        ref: _,
                        id: `${w}-glint`,
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
                        ref: g,
                        fill: "none",
                        stroke: `url(#${w}-glint)`,
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
        /* @__PURE__ */ t(O, { ref: M, sx: { position: "relative" }, children: m })
      ]
    }
  );
}, Cn = d.forwardRef(
  ({
    sub: e,
    icon: o,
    index: r,
    active: n,
    tabIndex: i,
    onClick: s,
    onKeyDown: a,
    onFocus: c,
    onHoverStart: l,
    accentColor: h,
    activeForegroundColor: m,
    labelColor: x,
    iconColor: p,
    isDark: f
  }, g) => {
    const _ = xt(), b = d.useContext(kt), y = (I) => {
      const S = I.currentTarget.getBoundingClientRect();
      I.currentTarget.style.setProperty(
        "--mx",
        `${(I.clientX - S.left) / S.width * 100}%`
      ), I.currentTarget.style.setProperty(
        "--my",
        `${(I.clientY - S.top) / S.height * 100}%`
      );
    }, R = (I) => {
      const S = I.currentTarget;
      !et(S) || Ue() || S.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.1, 0.9)", offset: 0.22 },
          { transform: "scale(0.95, 1.06)", offset: 0.5 },
          { transform: "scale(1.02, 0.99)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, E = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, w = {
      ...Jo(f, _),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": E
    };
    return /* @__PURE__ */ v(
      tt,
      {
        ref: g,
        role: "menuitem",
        tabIndex: i,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: s,
        onKeyDown: a,
        onFocus: c,
        onPointerMove: y,
        onMouseEnter: R,
        onPointerEnter: (I) => l(I.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Ze,
          height: Ze,
          borderRadius: `${Vs}px`,
          color: n ? m : x,
          bgcolor: n ? h : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Dt(h, f) : {},
          transition: `translate ${me.duration}ms ${me.easing}, scale ${me.duration}ms ${me.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${Ms} ${ro.duration}ms ${ro.easing} both`,
          animationDelay: `${Zs + r * Qs}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: 22,
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
          } : w,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : w,
            "& [data-tile-name]": E,
            outline: "2px solid",
            outlineColor: h,
            outlineOffset: 2
          },
          [Ce]: {
            animation: "none",
            transition: "none",
            "&:active": { transform: "none" }
          }
        },
        children: [
          /* @__PURE__ */ t(O, { sx: { position: "relative", display: "flex" }, children: o }),
          /* @__PURE__ */ t(
            O,
            {
              component: "span",
              "data-tile-name": !0,
              sx: {
                ...qo(f, b),
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
Cn.displayName = "FlyoutTile";
const di = 100, ui = 250, fi = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const i = d.useRef(/* @__PURE__ */ new Map()), s = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, h = () => {
    clearTimeout(c.current), c.current = void 0;
  }, m = (y, R, E = !1) => {
    l(), h(), r({ key: y, pinned: R, focusFirst: E });
  }, x = d.useCallback((y = !1) => {
    var E, w;
    l(), h();
    const R = (E = n.current) == null ? void 0 : E.key;
    r(null), y && R && ((w = i.current.get(R)) == null || w.focus());
  }, []), p = () => {
    l(), !(!n.current || n.current.pinned) && (h(), c.current = setTimeout(() => x(), ui));
  };
  d.useEffect(() => {
    e || x();
  }, [e, x]), d.useEffect(
    () => () => {
      l(), h();
    },
    []
  );
  const f = o !== null;
  return d.useEffect(() => {
    if (!f)
      return;
    const y = (w) => {
      var S;
      const I = w;
      return I ? (S = s.current) != null && S.contains(I) ? !0 : [...i.current.values()].some((C) => C.contains(I)) : !1;
    }, R = (w) => {
      y(w.target) || x();
    }, E = (w) => {
      var I;
      w.key === "Escape" && x(
        !!((I = s.current) != null && I.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", R), document.addEventListener("keydown", E), () => {
      document.removeEventListener("pointerdown", R), document.removeEventListener("keydown", E);
    };
  }, [f, x]), {
    state: o,
    close: x,
    triggerProps: (y) => ({
      ref: (R) => {
        R ? i.current.set(y, R) : i.current.delete(y);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        h();
        const R = n.current;
        if (R) {
          R.key !== y && m(y, R.pinned);
          return;
        }
        l(), a.current = setTimeout(
          () => m(y, !1),
          di
        );
      },
      onMouseLeave: p,
      onClick: (R) => {
        if (R.detail === 0) {
          m(y, !0, !0);
          return;
        }
        const E = n.current;
        (E == null ? void 0 : E.key) === y && E.pinned ? x() : m(y, !0);
      },
      onKeyDown: (R) => {
        R.key === "ArrowRight" && (R.preventDefault(), m(y, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: h,
      onMouseLeave: p
    },
    onRailLeafEnter: () => {
      l(), n.current && !n.current.pinned && x();
    },
    getTrigger: (y) => i.current.get(y) ?? null
  };
}, hi = 264, pi = 72, jr = 64, Vt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, mi = 16, gi = 14, xi = 4, bi = 2.5, Vr = "0.7rem", Yr = 22, qr = Ee(Xo), at = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
  const s = d.useRef(null), [a, c] = d.useState(!1), l = d.useCallback(() => {
    const h = s.current;
    h && c(h.scrollWidth > h.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    l();
  }, [l, e]), d.useEffect(() => {
    const h = s.current;
    if (!h)
      return;
    const m = new ResizeObserver(() => l());
    return m.observe(h), () => m.disconnect();
  }, [l]), /* @__PURE__ */ t(
    we,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
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
}, yi = ({
  open: e,
  size: o = mi
}) => e ? /* @__PURE__ */ t(ss, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(ns, { sx: { fontSize: o, opacity: 0.75 } }), Zr = ({ open: e }) => /* @__PURE__ */ t(
  is,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), Yt = 600, Do = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: i,
  logo: s,
  title: a,
  onBrandClick: c,
  brandMenuOpen: l,
  showHeaderBar: h = !1,
  headerBackgroundColor: m,
  headerForegroundColor: x,
  brandColor: p,
  activeAccentColor: f = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: _,
  foregroundColor: b,
  surfaceBackgroundColor: y,
  flyoutSurfaceColor: R,
  collapsed: E = !1,
  expandedWidth: w = hi,
  collapsedWidth: I = pi,
  showLabels: S = !1,
  topInsetPx: C = 0,
  topContent: V,
  footer: U,
  submenuMode: M = "inline"
}) => {
  const D = We(), P = D.palette.mode === "dark", L = d.useContext(kt), z = M === "flyout" && E && !S, te = fi(z), ge = d.useRef(null), F = Bs(z, P), B = Ps({
    enabled: z,
    isDark: P,
    color: f,
    containerRef: ge
  }), { close: G } = te;
  d.useEffect(() => {
    G();
  }, [r, G]);
  const [oe, ie] = d.useState(
    {}
  ), T = _ ?? Ao(f), W = {
    bgcolor: f,
    color: T,
    "& .MuiListItemIcon-root": { color: T }
  }, Q = {
    bgcolor: f,
    color: T,
    borderRadius: "8px"
  }, H = g ?? eo(f), k = y ?? (P ? D.palette.background.paper : "#ffffff"), J = b ?? (P ? "text.primary" : f), de = m ?? k, Oe = x ?? (m ? Ao(de) : b ?? (P ? D.palette.text.primary : f)), Xe = eo(Oe), xe = (u) => {
    n == null || n(u);
  }, he = (u, A) => {
    ie((X) => ({ ...X, [u]: !A }));
  }, Re = (u, A) => oe[A] ?? Ye(u, r), Y = (u, A, X) => ({
    color: u ? T : J,
    bgcolor: u ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: u ? T : J,
      minWidth: X
    },
    "&:hover": u || S ? W : { bgcolor: A }
  }), ue = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": W
  }, be = (u) => {
    const A = Fe(u, r), X = /* @__PURE__ */ v(
      Xt,
      {
        disabled: !u.path,
        selected: A,
        onClick: () => u.path && xe(u.path),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": A ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...u.action && { pr: 6 },
          ...u.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...Y(
            A,
            H,
            u.subtitle ? 48 : 36
          ),
          ...ue
        },
        children: [
          /* @__PURE__ */ t(ve, { children: u.icon }),
          /* @__PURE__ */ t(
            Be,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: u.text,
                  fontWeight: Yt
                }
              ),
              secondary: u.subtitle ? /* @__PURE__ */ t(
                O,
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
      return X;
    const { action: N } = u;
    return /* @__PURE__ */ v(O, { sx: { position: "relative" }, children: [
      X,
      /* @__PURE__ */ t(we, { title: N.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        Se,
        {
          "aria-label": N.label,
          "data-testid": `sidebar-action-${u.text}`,
          onClick: () => {
            N.onClick(), i == null || i();
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
            borderColor: A ? "rgba(255, 255, 255, 0.35)" : H,
            color: A ? T : J,
            "&:hover": {
              bgcolor: A ? "rgba(255, 255, 255, 0.15)" : H
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: A ? T : J,
              outlineOffset: 1
            }
          },
          children: N.icon
        }
      ) })
    ] }, u.text);
  }, Te = (u) => {
    const A = Ye(u, r), X = Fe(u, r), N = mt("", u), K = Re(u, N);
    return /* @__PURE__ */ v(
      O,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: A ? H : "transparent"
        },
        children: [
          /* @__PURE__ */ v(
            Xt,
            {
              onClick: () => he(N, K),
              "data-testid": `sidebar-item-${u.text}`,
              "data-active": X ? "true" : "false",
              "aria-expanded": K,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Y(X, H, 36)
              },
              children: [
                /* @__PURE__ */ t(ve, { children: u.icon }),
                /* @__PURE__ */ t(
                  Be,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      at,
                      {
                        text: u.text,
                        fontWeight: Yt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(Zr, { open: K })
              ]
            }
          ),
          /* @__PURE__ */ t(_r, { in: K, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            O,
            {
              "data-testid": `sidebar-children-${u.text}`,
              sx: { pb: 0.5 },
              children: u.subitems.map(
                (j) => Ne(j, N, 1)
              )
            }
          ) })
        ]
      },
      u.text
    );
  }, Ne = (u, A, X) => {
    const N = mt(A, u), K = xi + (X - 1) * bi;
    if (gt(u)) {
      const ce = Ye(u, r), q = Fe(u, r), fe = Re(u, N);
      return /* @__PURE__ */ v(O, { "data-testid": `sidebar-group-${u.text}`, children: [
        /* @__PURE__ */ v(
          Xt,
          {
            onClick: () => he(N, fe),
            "data-testid": `sidebar-subitem-${u.text}`,
            "data-active": ce ? "true" : "false",
            "aria-expanded": fe,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: K,
              ...Y(q, "action.hover", 32)
            },
            children: [
              u.icon ? /* @__PURE__ */ t(ve, { children: u.icon }) : null,
              /* @__PURE__ */ t(
                Be,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    at,
                    {
                      text: u.text,
                      fontWeight: Yt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(Zr, { open: fe })
            ]
          }
        ),
        /* @__PURE__ */ t(_r, { in: fe, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(O, { "data-testid": `sidebar-children-${u.text}`, children: u.subitems.map(
          (uo) => Ne(uo, N, X + 1)
        ) }) })
      ] }, N);
    }
    const j = Fe(u, r);
    return /* @__PURE__ */ v(
      Xt,
      {
        selected: j,
        disabled: !u.path,
        onClick: () => u.path && xe(u.path),
        "data-testid": `sidebar-subitem-${u.text}`,
        "data-active": j ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: K,
          ...Y(j, "action.hover", 32),
          ...ue
        },
        children: [
          u.icon ? /* @__PURE__ */ t(ve, { children: u.icon }) : null,
          /* @__PURE__ */ t(
            Be,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                at,
                {
                  text: u.text,
                  fontWeight: Yt
                }
              )
            }
          )
        ]
      },
      N
    );
  }, Ke = (u, A, X, N, K, j) => {
    const ce = !K, q = /* @__PURE__ */ v(
      Se,
      {
        "aria-label": A,
        disabled: ce,
        onClick: K,
        onMouseEnter: z ? te.onRailLeafEnter : void 0,
        ...z ? { [to]: "" } : {},
        "data-testid": (j == null ? void 0 : j.testId) ?? `sidebar-item-${A}`,
        "data-active": N ? "true" : "false",
        sx: S ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: N ? T : J,
          bgcolor: N ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Yr
          },
          "&:hover": Q,
          ...Vt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: N ? T : J,
          bgcolor: N ? f : "transparent",
          borderRadius: N ? "8px" : "50%",
          "&:hover": {
            bgcolor: N ? f : j != null && j.insideGroup ? "action.hover" : H,
            borderRadius: "8px"
          },
          ...Vt,
          ...z ? ot(N) : {}
        },
        children: [
          X,
          S ? /* @__PURE__ */ t(
            at,
            {
              text: A,
              variant: "caption",
              center: !0,
              fontSize: Vr
            }
          ) : null
        ]
      }
    );
    return S ? ce ? /* @__PURE__ */ t("span", { children: q }, u) : /* @__PURE__ */ t(d.Fragment, { children: q }, u) : /* @__PURE__ */ t(
      we,
      {
        title: A,
        placement: "right",
        arrow: !z,
        ...z ? co : {},
        children: ce ? /* @__PURE__ */ t("span", { children: q }) : q
      },
      u
    );
  }, Ft = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, ot = (u) => ({
    borderRadius: `${ee}px`,
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...u ? { bgcolor: "transparent" } : {},
    transition: `transform ${qr.duration}ms ${qr.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), co = {
    slotProps: {
      tooltip: { sx: qo(P, L) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, rt = (u) => {
    var K;
    const A = Ye(u, r), X = mt("", u), N = ((K = te.state) == null ? void 0 : K.key) === X;
    return /* @__PURE__ */ t(
      O,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ t(
          Se,
          {
            ...te.triggerProps(X),
            "aria-label": u.text,
            "aria-haspopup": "menu",
            "aria-expanded": N,
            "data-testid": `sidebar-item-${u.text}`,
            "data-active": A ? "true" : "false",
            "data-open": N ? "true" : "false",
            [to]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: A ? T : J,
              bgcolor: A ? f : N ? H : "transparent",
              ...ot(A),
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
              ...Vt
            },
            children: u.icon
          }
        )
      },
      u.text
    );
  }, yt = (u) => {
    const A = Ye(u, r), X = Fe(u, r), N = mt("", u), K = Re(u, N), j = /* @__PURE__ */ v(
      Se,
      {
        "aria-label": u.text,
        "aria-expanded": K,
        onClick: () => he(N, K),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": X ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: S ? 0.25 : 0,
          width: S ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...S ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: X ? T : J,
          bgcolor: X ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": S ? { bgcolor: f, color: T } : {
            bgcolor: X ? f : "transparent"
          },
          ...Vt
        },
        children: [
          S ? /* @__PURE__ */ t(
            O,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Yr
                }
              },
              children: u.icon
            }
          ) : u.icon,
          S ? /* @__PURE__ */ t(
            at,
            {
              text: u.text,
              variant: "caption",
              center: !0,
              fontSize: Vr
            }
          ) : null,
          /* @__PURE__ */ t(yi, { open: K, size: gi })
        ]
      }
    ), ce = S ? j : /* @__PURE__ */ t(we, { title: u.text, placement: "right", arrow: !0, children: j });
    return /* @__PURE__ */ v(
      O,
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
          bgcolor: A ? H : "transparent",
          ...S ? {} : { "&:hover": { bgcolor: H } }
        },
        children: [
          ce,
          K ? Ko(u.subitems, u.icon).map(
            ({ sub: q, icon: fe }) => Ke(
              q.path,
              q.text,
              fe,
              Fe(q, r),
              () => xe(q.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${q.text}`
              }
            )
          ) : null
        ]
      },
      u.text
    );
  }, Bt = (u) => /* @__PURE__ */ t(
    O,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Ke(
        u.text,
        u.subtitle ? `${u.text} · ${u.subtitle}` : u.text,
        u.icon,
        Fe(u, r),
        u.path ? () => xe(u.path) : void 0,
        { testId: `sidebar-item-${u.text}` }
      )
    },
    u.text
  ), nt = (u) => gt(u) ? z ? rt(u) : E ? yt(u) : Te(u) : E ? Bt(u) : be(u), lt = (u) => /* @__PURE__ */ t(
    Le,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: E ? "center" : "stretch"
      },
      children: u.map(nt)
    }
  ), St = E ? I : w, Wt = () => {
    var ce, q;
    const { state: u } = te, A = u ? [...e, ...o].find(
      (fe) => gt(fe) && mt("", fe) === u.key
    ) ?? null : null, X = A ? ((ce = ge.current) == null ? void 0 : ce.getBoundingClientRect().right) ?? I : I, N = A ? ((q = ge.current) == null ? void 0 : q.closest("[data-rail-surface]")) ?? ge.current : null, K = N == null ? void 0 : N.getBoundingClientRect(), j = N && K ? {
      left: K.left,
      top: K.top,
      width: K.width,
      height: K.height,
      radius: parseFloat(
        getComputedStyle(N).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      oi,
      {
        group: A,
        groupKey: A ? u.key : null,
        anchor: A ? te.getTrigger(u.key) : null,
        railEdge: X,
        railShape: j,
        activePath: r,
        focusFirst: u == null ? void 0 : u.focusFirst,
        onNavigate: xe,
        onClose: te.close,
        panelProps: te.flyoutProps,
        accentColor: f,
        activeForegroundColor: T,
        solidSurface: R ?? k
      }
    );
  }, lo = h ? /* @__PURE__ */ t(
    O,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: jr,
        minHeight: jr,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: de
      },
      children: s || a ? /* @__PURE__ */ t(
        Jt,
        {
          logo: s,
          title: E ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: p ?? Oe,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, dt = !h && s ? /* @__PURE__ */ t(
    O,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: 1
      },
      children: /* @__PURE__ */ t(
        Jt,
        {
          logo: s,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: p ?? Oe,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, ut = S ? 0.5 : E ? 1 : 1.5;
  return /* @__PURE__ */ t(ao.Provider, { value: z, children: /* @__PURE__ */ v(
    O,
    {
      ref: ge,
      ...F.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": E ? "true" : "false",
      "data-labeled": S ? "true" : "false",
      sx: {
        width: St,
        minWidth: St,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: k,
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
        ...z ? Ft : {}
      },
      children: [
        F.lens,
        B.glass,
        lo ?? dt,
        V ? /* @__PURE__ */ t(
          O,
          {
            sx: {
              flexShrink: 0,
              px: ut,
              pt: 1,
              pb: 1
            },
            children: V
          }
        ) : null,
        /* @__PURE__ */ v(
          O,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: ut,
              pt: C && !h ? `${C}px` : 1,
              pb: 2
            },
            children: [
              lt(e),
              o.length > 0 ? /* @__PURE__ */ v(O, { sx: { mt: "auto", pt: 2 }, children: [
                U ? null : /* @__PURE__ */ t(
                  Je,
                  {
                    sx: { mb: 1, borderColor: "divider" }
                  }
                ),
                lt(o)
              ] }) : null
            ]
          }
        ),
        U ? /* @__PURE__ */ t(O, { sx: { flexShrink: 0, px: ut, pb: 1.5 }, children: /* @__PURE__ */ t(
          O,
          {
            sx: {
              borderTop: `1px solid ${Xe}`,
              pt: 1.5
            },
            children: U
          }
        ) }) : null,
        z ? Wt() : null
      ]
    }
  ) });
}, Lo = "var(--lumora-content-padding, 0px)", Qr = `calc(${Lo} * -1)`, hc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: s = !0,
  sx: a
}) => /* @__PURE__ */ t(
  O,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Qr,
        mt: o ? Qr : 0,
        // Space below it, like any other block on the page
        mb: Lo,
        px: s ? Lo : 0,
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
      ...Array.isArray(a) ? a : [a]
    ],
    children: e
  }
), Si = ({ keys: e }) => /* @__PURE__ */ t(
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
    children: e.map((o) => /* @__PURE__ */ t("span", { children: o }, o))
  }
);
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
}, le = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, He = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, vi = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        He.ACCESS_TOKEN
      ), o = localStorage.getItem(
        He.REFRESH_TOKEN
      ), r = localStorage.getItem(He.USER);
      e && !localStorage.getItem(le.ACCESS_TOKEN) && localStorage.setItem(le.ACCESS_TOKEN, e), o && !localStorage.getItem(le.REFRESH_TOKEN) && localStorage.setItem(
        le.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(le.USER) && localStorage.setItem(le.USER, r), (e || o || r) && (localStorage.removeItem(He.ACCESS_TOKEN), localStorage.removeItem(He.REFRESH_TOKEN), localStorage.removeItem(He.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Io = (e) => {
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
}, _o = (e, o) => {
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
}, On = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Lt = () => {
  try {
    vi();
    const e = Io(le.ACCESS_TOKEN), o = Io(le.REFRESH_TOKEN), r = Io(le.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), On(le.USER);
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
}, wi = () => {
  try {
    const { accessToken: e, refreshToken: o } = Lt();
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
}, Tn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Z(
        "At least one token must be provided",
        ne.TOKEN_INVALID
      );
    return e && _o(le.ACCESS_TOKEN, e), o && _o(le.REFRESH_TOKEN, o), r && _o(le.USER, JSON.stringify(r)), {
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
}, Nt = () => {
  try {
    return [
      le.ACCESS_TOKEN,
      le.REFRESH_TOKEN,
      le.USER,
      // Also clear legacy keys for complete cleanup
      He.ACCESS_TOKEN,
      He.REFRESH_TOKEN,
      He.USER
    ].map((n) => On(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
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
}, Ei = () => {
  try {
    const { user: e } = Lt();
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
}, pc = (e) => {
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
}, No = (e, o = "Unknown") => {
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
}, Ri = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Mr.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, i = [];
  const s = (a, c) => {
    i.forEach(({ resolve: l, reject: h }) => {
      a ? h(a) : c && l(c);
    }), i = [];
  };
  return o.interceptors.request.use(
    (a) => {
      const { accessToken: c } = Lt();
      return c && a.headers && (a.headers.Authorization = `Bearer ${c}`), a;
    },
    (a) => Promise.reject(a)
  ), o.interceptors.response.use(
    (a) => a,
    async (a) => {
      var p;
      const c = a.config, l = (p = a.response) == null ? void 0 : p.status, h = (c == null ? void 0 : c.url) || "", m = h.includes("/auth/refresh");
      if (l !== 401 || c._retry || m)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: x } = Lt();
      if (!x) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return No(f, "AxiosClient - Token Refresh"), Nt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((f, g) => {
          i.push({ resolve: f, reject: g });
        }).then((f) => {
          const {
            accessToken: g,
            refreshToken: _
          } = f;
          if (c.headers && (c.headers.Authorization = `Bearer ${g}`), h.includes("/auth/logout"))
            try {
              if (typeof c.data == "string") {
                const b = JSON.parse(
                  c.data || "{}"
                );
                b.refresh_token = _, c.data = JSON.stringify(b);
              } else
                c.data && typeof c.data == "object" ? c.data.refresh_token = _ : c.data = JSON.stringify({
                  refresh_token: _
                });
            } catch {
              c.data = JSON.stringify({
                refresh_token: _
              });
            }
          return o(c);
        }).catch((f) => Promise.reject(f));
      r = !0, n = Mr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: x
        }
      );
      try {
        const f = await n, { accessToken: g, refreshToken: _ } = f.data;
        if (Tn(g, _, null), s(null, {
          accessToken: g,
          refreshToken: _
        }), c.headers && (c.headers.Authorization = `Bearer ${g}`), h.includes("/auth/logout"))
          try {
            if (typeof c.data == "string") {
              const b = JSON.parse(
                c.data || "{}"
              );
              b.refresh_token = _, c.data = JSON.stringify(b);
            } else
              c.data && typeof c.data == "object" ? c.data.refresh_token = _ : c.data = JSON.stringify({
                refresh_token: _
              });
          } catch {
            c.data = JSON.stringify({
              refresh_token: _
            });
          }
        return o(c);
      } catch (f) {
        return No(
          f,
          "AxiosClient - Token Refresh Failed"
        ), s(f), Nt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Ie = {
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
}, An = xn(), Me = An.typography.pxToRem, Ii = (e) => {
  const o = e === "dark", r = [...An.shadows];
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
      warning: o ? { light: ht[400], main: ht[500], dark: ht[700] } : { light: ht[300], main: ht[400], dark: ht[800] },
      error: o ? { light: pt[400], main: pt[500], dark: pt[700] } : { light: pt[300], main: pt[400], dark: pt[800] },
      success: o ? { light: ft[400], main: ft[500], dark: ft[700] } : { light: ft[300], main: ft[400], dark: ft[800] },
      grey: _e,
      divider: o ? ct(_e[700], 0.6) : ct(_e[300], 0.4),
      background: o ? { default: _e[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: _e[400] } : { primary: _e[800], secondary: _e[600] },
      action: o ? {
        hover: ct(_e[600], 0.2),
        selected: ct(_e[600], 0.3)
      } : {
        hover: ct(_e[200], 0.2),
        selected: ct(_e[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Me(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Me(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Me(30), lineHeight: 1.2 },
      h4: { fontSize: Me(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Me(20), fontWeight: 600 },
      h6: { fontSize: Me(18), fontWeight: 600 },
      subtitle1: { fontSize: Me(18) },
      subtitle2: { fontSize: Me(14), fontWeight: 500 },
      body1: { fontSize: Me(14) },
      body2: { fontSize: Me(14), fontWeight: 400 },
      caption: { fontSize: Me(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, _i = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Lt();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return Tn(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      No(i, "TokenValidator - Refresh Failed");
    }
  return Nt(), o ? o() : window.location.href = "/login", !1;
}, $t = ({ size: e = 20 }) => /* @__PURE__ */ v(
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
), Jr = Ee(Xo), Ge = "#09C1AE", Qt = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ge} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), Ci = (e) => ({
  ...Qt(ee, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${ee - 2}px`,
    zIndex: 1,
    background: `${Dt(Ge, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), en = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: s = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = er(), l = d.useContext(ao), h = We().palette.mode === "dark", m = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", x = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ v(
    tt,
    {
      ...x,
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
        borderColor: r ? Ge : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Ge}`,
          outlineOffset: 2
        },
        ...n && Qt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t($t, { size: 20 }),
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
        i && /* @__PURE__ */ t(Si, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && l ? /* @__PURE__ */ t(we, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    Se,
    {
      ...x,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: `${ee}px`,
        ...Dt(Ge, h, "clear"),
        ...r && {
          boxShadow: `${Dt(Ge, h, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${Jr.duration}ms ${Jr.easing}, box-shadow 200ms ease`,
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
        ...n && Ci(h)
      },
      children: /* @__PURE__ */ t($t, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(we, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    Se,
    {
      ...x,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? Ge : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Qt(8, "background.paper")
      },
      children: /* @__PURE__ */ t($t, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(we, { title: m, placement: "left", children: /* @__PURE__ */ t(
    Se,
    {
      ...x,
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
        outline: r ? `2px solid ${Ge}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Ge}` },
        ...n && Qt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(O, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t($t, { size: 26 }) })
    }
  ) });
}, qt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(ds, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ v(us, { children: [
  /* @__PURE__ */ t(fs, { fontSize: "small" }),
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
    bn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, _t = 24, Oi = 720, Ti = 1140, Ai = 1250, $i = ({
  open: e,
  children: o,
  variant: r,
  position: n,
  width: i,
  sidebarWidthPx: s,
  bottomOffsetPx: a,
  fullScreen: c,
  fullScreenBottom: l = "0px",
  onClose: h
}) => {
  d.useEffect(() => {
    if (!e || !h)
      return;
    const g = (_) => {
      _.key === "Escape" && h();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [e, h]);
  const m = r === "docked", x = _t + a;
  let p;
  c ? p = {
    top: 0,
    left: 0,
    right: 0,
    bottom: l,
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
    bottom: x,
    ...n === "left" ? { left: s + _t } : { right: _t },
    width: i,
    maxWidth: `calc(100vw - ${_t * 2}px)`,
    height: `min(${Oi}px, calc(100vh - ${x + _t}px))`,
    borderRadius: "12px"
  };
  const f = /* @__PURE__ */ t(
    zo,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? Ti : Ai,
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
  return m ? /* @__PURE__ */ t(ps, { direction: "left", in: e, mountOnEnter: !0, children: f }) : /* @__PURE__ */ t(
    hs,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: f
    }
  );
}, Mi = 180, tn = 250, Di = "#01584F", Li = ({
  text: e,
  testId: o
}) => {
  const r = d.useRef(null), [n, i] = d.useState(!1), s = d.useCallback(() => {
    const a = r.current;
    a && i(a.scrollWidth > a.clientWidth + 0.5);
  }, []);
  return d.useLayoutEffect(() => {
    s();
  }, [s, e]), d.useEffect(() => {
    const a = r.current;
    if (!a)
      return;
    const c = new ResizeObserver(() => s());
    return c.observe(a), () => c.disconnect();
  }, [s]), /* @__PURE__ */ t(
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
}, $n = (e, o, r, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : o, a = e ? Di : o;
  return { activeBg: a, sx: n ? {
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
    backgroundColor: r ? a : "transparent",
    "&:hover": {
      backgroundColor: r ? a : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : s
    }
  } : {
    width: i,
    height: i,
    color: r ? "#ffffff" : s,
    backgroundColor: r ? a : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? a : "action.hover",
      borderRadius: "4px"
    }
  } };
}, Mn = ({ link: e }) => /* @__PURE__ */ v(Le, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ t(
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
  /* @__PURE__ */ t(
    Li,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Dn = (e, o, r) => r ? e : /* @__PURE__ */ t(we, { title: o, placement: "right", arrow: !0, children: e }), Ni = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: a
}) => {
  const c = We(), [l, h] = d.useState(null), [m, x] = d.useState(!1), p = d.useRef(
    null
  ), f = d.useRef(null), g = d.useRef(null), _ = d.useRef(!1), b = d.useRef(!1), y = d.useId(), R = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, E = () => {
    R(), p.current = setTimeout(() => {
      x(!1), p.current = null;
    }, Mi);
  }, w = () => {
    R(), x(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const M = (D) => {
      var P;
      D.key === "Escape" && (x(!1), (P = g.current) == null || P.focus());
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [m]), d.useEffect(() => {
    if (!m || !b.current)
      return;
    const M = globalThis.requestAnimationFrame(() => {
      var P;
      const D = (P = f.current) == null ? void 0 : P.querySelector(
        '[role="menuitem"]'
      );
      D == null || D.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame(M);
  }, [m]);
  const I = Ye(e, o), { activeBg: S, sx: C } = $n(
    i,
    n,
    I,
    a
  ), V = /* @__PURE__ */ t(
    Se,
    {
      ref: g,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        _.current || w();
      },
      onBlur: (M) => {
        var P;
        const D = M.relatedTarget;
        D && ((P = f.current) != null && P.contains(D)) || E();
      },
      onKeyDown: (M) => {
        M.key === "ArrowDown" && (M.preventDefault(), b.current = !0, w());
      },
      onClick: (M) => {
        M.preventDefault(), M.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? y : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: C,
      children: a ? /* @__PURE__ */ t(Mn, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ v(
    O,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          O,
          {
            ref: h,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              _.current = !0, w();
            },
            onMouseLeave: () => {
              _.current = !1, E();
            },
            children: Dn(V, e.text, a)
          }
        ),
        /* @__PURE__ */ t(
          Po,
          {
            open: m && !!l,
            anchorEl: l,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (M) => M.zIndex.modal },
            children: /* @__PURE__ */ t(
              zo,
              {
                ref: f,
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
                  boxShadow: c.shadows[8],
                  maxWidth: tn,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Go,
                  {
                    id: y,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: tn
                    },
                    children: U(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function U(M, D, P) {
    return M.flatMap((L) => {
      const z = mt(D, L);
      return gt(L) ? [
        /* @__PURE__ */ t(
          ms,
          {
            disableSticky: !0,
            title: L.text,
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
            children: L.text
          },
          z
        ),
        ...U(L.subitems, z, P + 1)
      ] : [
        /* @__PURE__ */ v(
          Qe,
          {
            role: "menuitem",
            title: L.text,
            disabled: !L.path,
            selected: Fe(L, o),
            onClick: (te) => {
              te.preventDefault(), L.path && (r == null || r(L.path)), x(!1);
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
                bgcolor: S,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: S
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              L.icon ? /* @__PURE__ */ t(ve, { children: L.icon }) : null,
              /* @__PURE__ */ t(
                Be,
                {
                  primary: L.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          z
        )
      ];
    });
  }
}, ki = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const a = !!(e.path && o === e.path), { sx: c } = $n(
    i,
    n,
    a,
    s
  );
  return Dn(
    /* @__PURE__ */ t(
      Se,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: c,
        children: s ? /* @__PURE__ */ t(Mn, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, Fi = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), Bi = () => /* @__PURE__ */ t(
  O,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Je, { sx: { width: "60%", borderColor: "divider" } })
  }
), on = (e, o) => e.map((r, n) => /* @__PURE__ */ v(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(Fi, {}) : null
] }, n)), Wi = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: a = !1
}) => {
  const c = (h, m) => gt(h) ? /* @__PURE__ */ t(
    Ni,
    {
      link: h,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      surfaceBackgroundColor: s,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ t(
    ki,
    {
      link: h,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      railShowTitles: a
    }
  ), l = a ? 1.25 : 1;
  return /* @__PURE__ */ v(
    Le,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: l
      },
      children: [
        on(e, (h) => c(h, !1)),
        o.length > 0 ? /* @__PURE__ */ v(De, { children: [
          /* @__PURE__ */ t(Bi, {}),
          /* @__PURE__ */ t(O, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Le, { gap: l, alignItems: "center", children: on(
            o,
            (h) => c(h, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Pi = (e) => e ? Rn(e) : "USER", zi = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), rn = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, ko = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, or = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  xs,
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
    children: zi(e)
  }
), Ln = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ v(De, { children: [
  /* @__PURE__ */ t(or, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ v(
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
        /* @__PURE__ */ t(
          ae,
          {
            variant: "body2",
            sx: { ...rn, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            variant: "caption",
            sx: { ...rn, opacity: 0.8, color: "inherit" },
            children: Pi(o)
          }
        )
      ]
    }
  )
] }), nn = {
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
}, Nn = ({
  anchorEl: e,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: i,
  showNotifications: s,
  notificationCount: a,
  onNotificationsClick: c,
  userName: l = "User",
  userRole: h,
  userAvatar: m,
  menuItems: x = [],
  showSettings: p,
  onSettingsClick: f,
  showThemeToggler: g,
  theme: _,
  onThemeToggle: b,
  onLogout: y
}) => {
  const R = (E) => () => {
    o(), E == null || E();
  };
  return /* @__PURE__ */ v(
    bs,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: nn[r].anchor,
      transformOrigin: nn[r].transform,
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
          Le,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              Ln,
              {
                name: l,
                role: h,
                avatar: m,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Je, {}),
        s && /* @__PURE__ */ v(Qe, { onClick: R(c), children: [
          /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(vn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Be, { children: "Notifications" }),
          /* @__PURE__ */ t(ko, { count: a })
        ] }),
        x.map((E) => /* @__PURE__ */ v(Qe, { onClick: R(E.onClick), children: [
          E.icon && /* @__PURE__ */ t(ve, { children: E.icon }),
          /* @__PURE__ */ t(Be, { inset: !E.icon, children: E.label }),
          /* @__PURE__ */ t(ko, { count: E.badge })
        ] }, E.key)),
        p && /* @__PURE__ */ v(Qe, { onClick: R(f), children: [
          /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(gs, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Be, { children: "Settings" })
        ] }),
        g && [
          /* @__PURE__ */ t(Je, {}, "theme-divider"),
          /* @__PURE__ */ v(O, { sx: { px: 1.5, py: 1 }, children: [
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
            /* @__PURE__ */ v(
              ys,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: _,
                onChange: (E, w) => w && w !== _ && (b == null ? void 0 : b()),
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
                  /* @__PURE__ */ t(Dr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Dr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Je, {}),
        /* @__PURE__ */ v(
          Qe,
          {
            onClick: R(y),
            sx: {
              color: _ === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ve, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Sn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Be, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, kn = 64, Gi = 2, Ct = ({
  label: e,
  icon: o,
  onClick: r,
  active: n,
  color: i,
  activeColor: s,
  activeBackground: a,
  ariaLabel: c,
  haspopup: l,
  isPage: h = !1,
  testId: m
}) => /* @__PURE__ */ v(
  tt,
  {
    onClick: r,
    "aria-label": c ?? e,
    "aria-haspopup": l,
    "aria-expanded": l ? n : void 0,
    "aria-current": h && n ? "page" : void 0,
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
), Hi = ({
  onMenuClick: e,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: s,
  assistantActive: a,
  showProfile: c,
  background: l,
  color: h,
  activeColor: m,
  activeBackground: x,
  pinnedLinks: p = [],
  activePath: f,
  onLinkClick: g,
  ..._
}) => {
  const b = p.filter((C) => C.path).slice(0, Gi), [y, R] = d.useState(
    null
  ), { userName: E = "User", userAvatar: w, avatarColor: I } = _, S = { color: h, activeColor: m, activeBackground: x };
  return /* @__PURE__ */ v(
    zo,
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
        height: `calc(${kn}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: l,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Ct,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(yn, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...S
          }
        ),
        b.map((C) => /* @__PURE__ */ t(
          Ct,
          {
            label: C.text,
            icon: C.icon,
            onClick: () => g == null ? void 0 : g(C.path),
            active: Ye(C, f),
            isPage: !0,
            testId: `mobile-nav-link-${C.text}`,
            ...S
          },
          C.path
        )),
        i && /* @__PURE__ */ t(
          Ct,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ t(
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
                children: /* @__PURE__ */ t($t, { size: 18 })
              }
            ),
            onClick: s,
            active: a,
            testId: "mobile-nav-nexa",
            ...S
          }
        ),
        r && /* @__PURE__ */ t(
          Ct,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Ho, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...S
          }
        ),
        c && /* @__PURE__ */ v(De, { children: [
          /* @__PURE__ */ t(
            Ct,
            {
              label: "Account",
              ariaLabel: `Account menu for ${E}`,
              icon: /* @__PURE__ */ t(
                or,
                {
                  name: E,
                  avatar: w,
                  color: I,
                  size: 26
                }
              ),
              onClick: (C) => R(C.currentTarget),
              active: !!y,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...S
            }
          ),
          /* @__PURE__ */ t(
            Nn,
            {
              anchorEl: y,
              onClose: () => R(null),
              placement: "above-end",
              width: 280,
              ..._
            }
          )
        ] })
      ]
    }
  );
}, Ui = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  Ss,
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
    children: /* @__PURE__ */ v(
      Le,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(O, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            bn,
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
), Xi = ({
  height: e,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: i,
  brandMenuOpen: s,
  background: a,
  color: c,
  brandColor: l = c,
  endContent: h
}) => /* @__PURE__ */ t(
  vs,
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
    children: /* @__PURE__ */ v(ws, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        Se,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: c },
          children: /* @__PURE__ */ t(yn, {})
        }
      ),
      /* @__PURE__ */ t(
        Jt,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: i,
          menuOpen: s,
          color: l,
          testId: "mobile-brand"
        }
      ),
      h ? /* @__PURE__ */ t(O, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: h }) : null
    ] })
  }
), rr = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const a = er(), c = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    we,
    {
      title: c,
      placement: i,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ t(
        Se,
        {
          onClick: o,
          "aria-label": c,
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
            wn,
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
              children: /* @__PURE__ */ t(vn, {})
            }
          )
        }
      )
    }
  );
}, Fn = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ki = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, sn = Ee(no), an = Ee(so), cn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', ji = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = We().palette.mode === "dark", a = xt(), c = d.useRef(null), l = d.useRef(null), h = (p) => {
    var f;
    p !== e && (o == null || o()), (f = (p === "light" ? c : l).current) == null || f.focus();
  }, m = (p) => {
    if (!(p.key === "Tab" || p.key === "Escape"))
      switch (p.stopPropagation(), p.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          p.preventDefault(), h(e === "light" ? "dark" : "light");
          break;
        case "Home":
          p.preventDefault(), h("light");
          break;
        case "End":
          p.preventDefault(), h("dark");
          break;
      }
  }, x = (p, f, g, _) => {
    const b = e === p;
    return /* @__PURE__ */ t(
      tt,
      {
        ref: _,
        role: "radio",
        "aria-checked": b,
        "aria-label": f,
        tabIndex: b ? 0 : -1,
        onClick: () => h(p),
        "data-testid": `theme-segment-${p}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: i ? `${ee}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? s ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...i && b ? Jo(s, a) : {},
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
          ...Fn
        },
        children: /* @__PURE__ */ t(g, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ v(
    Le,
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
        x("light", "Light", Rs, c),
        x("dark", "Dark", Es, l)
      ]
    }
  );
}, Vi = ({
  open: e,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: i,
  userName: s,
  userEmail: a,
  roleLabel: c,
  accentColor: l,
  tint: h,
  showThemeToggler: m,
  theme: x,
  onThemeToggle: p,
  onProfileClick: f,
  onLinkClick: g,
  menuItems: _ = [],
  onLogout: b,
  glass: y = !1
}) => {
  const R = We(), E = R.palette.mode === "dark", w = d.useRef(null), I = Yo(R.palette.background.paper), S = tr({
    enabled: y,
    isDark: E,
    selector: cn,
    radius: ee
  }), [C, V] = d.useState(null);
  d.useEffect(() => {
    if (!C || typeof ResizeObserver > "u")
      return;
    const L = new ResizeObserver(() => {
      var z;
      (z = w.current) == null || z.updatePosition();
    });
    return L.observe(C), () => L.disconnect();
  }, [C]);
  const U = (L) => {
    r(), L == null || L();
  }, M = (L) => {
    r(), L.onClick ? L.onClick() : L.path && (g == null || g(L.path));
  }, D = {
    borderRadius: y ? `${ee}px` : "8px",
    py: 1,
    gap: 0.5
  }, P = /* @__PURE__ */ v(Le, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ v(O, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(ae, { noWrap: !0, sx: { fontWeight: 600 }, children: s }),
      a ? /* @__PURE__ */ t(
        ae,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: a
        }
      ) : null,
      c ? /* @__PURE__ */ t(
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
            color: E ? "#ffffff" : l,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    Uo,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: w,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...y ? {
        slots: { transition: Wo },
        transitionDuration: { enter: 0, exit: 160 }
      } : {},
      slotProps: {
        paper: {
          ref: V,
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
      children: /* @__PURE__ */ v(
        O,
        {
          "data-testid": "account-menu",
          "data-glass": y ? "true" : void 0,
          sx: y ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${ee}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${cn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...Ki, width: n, minWidth: n },
          children: [
            y ? /* @__PURE__ */ t(
              bt,
              {
                isDark: E,
                solid: I,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Zo} ${sn.duration}ms ${sn.easing} both`,
                  [Ce]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ v(
              O,
              {
                ...S.containerProps,
                sx: y ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Qo} ${an.duration}ms ${an.easing} 70ms both`,
                  [Ce]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  S.lens,
                  f ? /* @__PURE__ */ t(
                    tt,
                    {
                      onClick: () => U(f),
                      "data-testid": "account-menu-header",
                      sx: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        transition: "background-color 150ms ease",
                        "& [data-hint]": { display: "none" },
                        "&:hover, &.Mui-focusVisible": {
                          bgcolor: h,
                          "& [data-hint]": { display: "block" },
                          "& [data-role]": { display: "none" }
                        },
                        ...Fn
                      },
                      children: P
                    }
                  ) : /* @__PURE__ */ t(O, { "data-testid": "account-menu-header", children: P }),
                  /* @__PURE__ */ t(Je, {}),
                  m ? /* @__PURE__ */ v(
                    O,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...D,
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
                        /* @__PURE__ */ t(ve, { children: /* @__PURE__ */ t(Is, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          ji,
                          {
                            glass: y,
                            mode: x,
                            onToggle: p,
                            accentColor: l,
                            tint: h
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ v(
                    Go,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        _.map((L) => /* @__PURE__ */ v(
                          Qe,
                          {
                            onClick: () => M(L),
                            "data-testid": `menu-item-${L.key}`,
                            sx: D,
                            children: [
                              /* @__PURE__ */ t(ve, { children: L.icon }),
                              /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: L.label }),
                              /* @__PURE__ */ t(ko, { count: L.badge })
                            ]
                          },
                          L.key
                        )),
                        b ? /* @__PURE__ */ t(Je, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ v(
                          Qe,
                          {
                            onClick: () => U(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...D,
                              color: E ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(ve, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Sn, { fontSize: "small" }) }),
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
}, Yi = {
  "&:focus, &:focus-visible": { outline: "none" }
}, qi = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: i,
  title: s,
  onBrandClick: a,
  brandMenuOpen: c,
  brandColor: l,
  headerBackgroundColor: h,
  headerForegroundColor: m,
  activeAccentColor: x = "#01584f",
  groupAccentColor: p,
  activeForegroundColor: f,
  foregroundColor: g,
  surfaceBackgroundColor: _,
  flyoutSurfaceColor: b,
  collapsed: y,
  expandedWidth: R,
  collapsedWidth: E,
  topContent: w,
  submenuMode: I,
  color: S,
  hoverColor: C,
  avatarColor: V,
  showProfile: U = !0,
  userName: M = "User",
  userEmail: D,
  userRole: P,
  userAvatar: L,
  showNotifications: z = !0,
  notificationCount: te = 0,
  onNotificationsClick: ge,
  whatsNewCount: F = 0,
  onProfileClick: B,
  menuItems: G,
  onLogout: oe,
  theme: ie = "light",
  showThemeToggler: T = !0,
  onThemeToggle: W
}) => {
  const Q = We(), H = Q.palette.mode === "dark", k = _ ?? (H ? Q.palette.background.paper : "#ffffff"), J = S ?? g ?? (H ? Q.palette.text.primary : x), de = C ?? p ?? eo(x), Oe = V ?? x, Xe = d.useRef(null), [xe, he] = d.useState(!1), Re = P ? Rn(P) : void 0, Y = (ot) => /* @__PURE__ */ t(
    or,
    {
      name: M,
      avatar: L,
      color: Oe,
      size: ot
    }
  ), ue = te + F, be = y && I === "flyout", Te = z ? /* @__PURE__ */ t(
    rr,
    {
      count: ue,
      onClick: ge,
      color: J,
      hoverColor: de,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Ne = U ? /* @__PURE__ */ v(
    tt,
    {
      ref: Xe,
      onClick: () => he(!0),
      "aria-haspopup": "menu",
      "aria-expanded": xe,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: y ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: xe ? de : "transparent",
        "&:hover": { bgcolor: de },
        ...Yi
      },
      children: [
        y && !be && z ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            wn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !ue,
              children: Y(36)
            }
          )
        ) : Y(y ? 36 : 40),
        y ? null : /* @__PURE__ */ v(O, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: J, lineHeight: 1.3 },
              children: M
            }
          ),
          Re ? /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: J,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: Re
            }
          ) : null
        ] })
      ]
    }
  ) : null, Ke = !!Te && (!y || be || !Ne);
  return /* @__PURE__ */ v(
    O,
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
          Do,
          {
            mainLinks: e,
            secondaryLinks: o,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: i,
            title: s,
            onBrandClick: a,
            brandMenuOpen: c,
            brandColor: l,
            headerBackgroundColor: h,
            headerForegroundColor: m,
            activeAccentColor: x,
            groupAccentColor: p,
            activeForegroundColor: f,
            foregroundColor: g,
            surfaceBackgroundColor: k,
            flyoutSurfaceColor: b,
            collapsed: y,
            expandedWidth: R,
            collapsedWidth: E,
            topContent: w,
            footer: Ne || Ke ? /* @__PURE__ */ v(
              Le,
              {
                direction: be ? "column" : "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  be && Ke ? Te : null,
                  Ne,
                  !be && Ke ? Te : null
                ]
              }
            ) : void 0,
            submenuMode: I
          }
        ),
        U ? /* @__PURE__ */ t(
          Vi,
          {
            open: xe,
            anchorEl: Xe.current,
            onClose: () => he(!1),
            width: Math.max(R - 16, 240),
            renderAvatar: Y,
            userName: M,
            userEmail: D,
            roleLabel: Re,
            accentColor: x,
            tint: de,
            showThemeToggler: T,
            theme: ie,
            onThemeToggle: W,
            onProfileClick: B,
            onLinkClick: n,
            menuItems: G,
            onLogout: oe,
            glass: I === "flyout"
          }
        ) : null
      ]
    }
  );
}, Zi = 6, Qi = ({
  isMobile: e,
  sidebarWidthPx: o,
  floatingRail: r,
  mobileBarHeightPx: n,
  sidebarSurface: i,
  contentBackground: s,
  contentPadding: a
}) => {
  const c = /* @__PURE__ */ v(To, { alignItems: "center", spacing: 2, sx: { pt: 2 }, children: [
    /* @__PURE__ */ t(ze, { variant: "rounded", width: 32, height: 32 }),
    /* @__PURE__ */ t(re, { sx: { height: 8 } }),
    Array.from({ length: Zi }, (l, h) => /* @__PURE__ */ t(ze, { variant: "rounded", width: 28, height: 28 }, h))
  ] });
  return /* @__PURE__ */ v(
    re,
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      sx: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: s
      },
      children: [
        e && /* @__PURE__ */ v(
          re,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: n,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: i,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ t(ze, { variant: "rounded", width: 24, height: 24 }),
              /* @__PURE__ */ t(ze, { variant: "text", width: 96 }),
              /* @__PURE__ */ t(re, { sx: { flexGrow: 1 } }),
              /* @__PURE__ */ t(ze, { variant: "circular", width: 32, height: 32 })
            ]
          }
        ),
        !e && o > 0 && /* @__PURE__ */ t(
          re,
          {
            sx: {
              position: "relative",
              width: o,
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              re,
              {
                sx: r ? {
                  position: "fixed",
                  top: r.gutterPx,
                  bottom: r.gutterPx,
                  left: r.gutterPx,
                  width: o - 2 * r.gutterPx,
                  borderRadius: `${r.radiusPx}px`,
                  bgcolor: i
                } : {
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: o,
                  bgcolor: i
                },
                children: c
              }
            )
          }
        ),
        /* @__PURE__ */ v(
          re,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              p: a,
              mt: e ? `${n}px` : 0
            },
            children: [
              /* @__PURE__ */ t(ze, { variant: "text", width: 220, height: 40 }),
              /* @__PURE__ */ t(ze, { variant: "text", width: 320, sx: { mb: 3 } }),
              /* @__PURE__ */ t(To, { direction: "row", spacing: 2, sx: { mb: 3 }, children: Array.from({ length: e ? 2 : 4 }, (l, h) => /* @__PURE__ */ t(
                ze,
                {
                  variant: "rounded",
                  height: 96,
                  sx: { flex: 1 }
                },
                h
              )) }),
              /* @__PURE__ */ t(ze, { variant: "rounded", height: 360 })
            ]
          }
        )
      ]
    }
  );
}, ln = Ee(no), dn = Ee(so), un = 260, Ji = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, ea = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: a = !1
}) => {
  const c = We(), l = c.palette.mode === "dark", h = !!e, m = Yo(c.palette.background.paper), x = tr({
    enabled: a,
    isDark: l,
    selector: ".MuiMenuItem-root",
    radius: ee
  }), p = /* @__PURE__ */ t(
    Go,
    {
      autoFocusItem: h,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((f) => {
        const g = f.key === n, _ = f.accentColor ?? s;
        return /* @__PURE__ */ v(
          Qe,
          {
            selected: g,
            onClick: () => i(f),
            "data-testid": `platform-item-${f.key}`,
            sx: {
              borderRadius: a ? `${ee}px` : "8px",
              py: 1,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...a && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(ve, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                O,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: _,
                    boxShadow: a ? `0 0 0 3px ${l ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ t(
                Be,
                {
                  primary: f.name,
                  secondary: f.description,
                  slotProps: {
                    primary: { sx: { fontWeight: 600 } }
                  }
                }
              ),
              g ? /* @__PURE__ */ t(
                _s,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: _ }
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
    Uo,
    {
      open: h,
      anchorEl: e,
      onClose: o,
      onClick: (f) => f.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: Wo },
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
        O,
        {
          "data-testid": "platform-menu",
          "data-glass": a ? "true" : void 0,
          sx: a ? {
            position: "relative",
            minWidth: un,
            borderRadius: `${ee}px`
          } : { ...Ji, minWidth: un },
          children: a ? /* @__PURE__ */ v(De, { children: [
            /* @__PURE__ */ t(
              bt,
              {
                isDark: l,
                solid: m,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Zo} ${ln.duration}ms ${ln.easing} both`,
                  [Ce]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ v(
              O,
              {
                ...x.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${Qo} ${dn.duration}ms ${dn.easing} 70ms both`,
                  [Ce]: { animation: "none" }
                },
                children: [
                  x.lens,
                  p
                ]
              }
            )
          ] }) : p
        }
      )
    }
  );
}, ta = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), i = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ v(
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
        /* @__PURE__ */ t(
          ea,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, oa = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: i = 0,
  ...s
}) => {
  var E;
  const {
    avatarColor: a,
    showNotifications: c,
    notificationCount: l,
    onNotificationsClick: h,
    userName: m = "User",
    userRole: x,
    userAvatar: p
  } = s, f = d.useRef(null), [g, _] = d.useState(
    null
  ), b = !!g, y = d.useRef(e);
  if (d.useEffect(() => {
    e && !y.current && _(null), y.current = e;
  }, [e]), !c && !n)
    return null;
  const R = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ v(De, { children: [
    /* @__PURE__ */ v(
      Le,
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
              title: e ? m : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                tt,
                {
                  onClick: () => _(f.current),
                  "aria-label": `Account menu for ${m}`,
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
                    Ln,
                    {
                      name: m,
                      role: x,
                      avatar: p,
                      avatarColor: a,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          c && /* @__PURE__ */ t(
            rr,
            {
              count: l + i,
              onClick: h,
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
      Nn,
      {
        anchorEl: g,
        onClose: () => _(null),
        placement: e ? "beside" : "above",
        width: e || (E = f.current) == null ? void 0 : E.clientWidth,
        ...s
      }
    )
  ] });
}, ra = 120, na = 300, fn = Ee(no), hn = Ee(so), sa = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, ia = 'input, textarea, [contenteditable="true"]', Fo = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(ia)) == null || o.focus();
}, aa = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: s,
  hoverColor: a
}) => {
  const c = er(), l = d.useContext(ao), h = d.useRef(null), [m, x] = d.useState(null);
  return d.useEffect(() => {
    o === "full" && n && (Fo(h.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    O,
    {
      ref: h,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && l ? /* @__PURE__ */ t(
    ca,
    {
      search: e,
      color: s,
      railTooltip: c
    }
  ) : /* @__PURE__ */ v(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(we, { title: "Search", placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
          Se,
          {
            "aria-label": "Search",
            onClick: (p) => o === "expand" ? r == null ? void 0 : r() : x(p.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: s,
              borderRadius: "8px",
              "&:hover": { bgcolor: a }
            },
            children: /* @__PURE__ */ t(Ho, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Uo,
          {
            open: !!m,
            anchorEl: m,
            onClose: () => x(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => Fo(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, ca = ({ search: e, color: o, railTooltip: r }) => {
  const n = We().palette.mode === "dark";
  ks(n, $o(o, n ? 0.3 : 0.35));
  const i = `rgb(${xt()})`, s = Yo(n ? "#1e2430" : "#ffffff"), a = {
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
  }, c = d.useRef(null), l = d.useRef(null), [h, m] = d.useState(!1), x = d.useRef(!1), p = d.useRef(void 0), f = d.useRef(void 0), g = () => {
    clearTimeout(p.current), clearTimeout(f.current);
  }, _ = d.useCallback(() => {
    g(), x.current = !1, m(!1);
  }, []), b = () => {
    clearTimeout(f.current), h || (clearTimeout(p.current), p.current = setTimeout(
      () => m(!0),
      ra
    ));
  }, y = () => {
    clearTimeout(p.current), clearTimeout(f.current), f.current = setTimeout(() => {
      !x.current && !sa(l.current) && m(!1);
    }, na);
  };
  return d.useEffect(() => g, []), d.useEffect(() => {
    if (!h)
      return;
    const R = setTimeout(() => Fo(l.current)), E = (I) => {
      var C, V;
      const S = I.target;
      !((C = l.current) != null && C.contains(S)) && !((V = c.current) != null && V.contains(S)) && _();
    }, w = (I) => {
      var S;
      I.key === "Escape" && (_(), (S = c.current) == null || S.focus());
    };
    return document.addEventListener("pointerdown", E), document.addEventListener("keydown", w), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", E), document.removeEventListener("keydown", w);
    };
  }, [h, _]), /* @__PURE__ */ v(
    O,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          we,
          {
            title: h ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              Se,
              {
                ref: c,
                "aria-label": "Search",
                "aria-expanded": h,
                onMouseEnter: b,
                onMouseLeave: y,
                onClick: () => {
                  g(), x.current = !0, m(!0);
                },
                sx: {
                  width: 44,
                  height: 44,
                  color: o,
                  borderRadius: `${ee}px`
                },
                children: /* @__PURE__ */ t(Ho, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          Po,
          {
            open: h,
            anchorEl: c.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ v(
              O,
              {
                ref: l,
                "data-testid": "sidebar-search-card",
                onMouseEnter: b,
                onMouseLeave: y,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: `${ee}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    bt,
                    {
                      isDark: n,
                      solid: s,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${Zo} ${fn.duration}ms ${fn.easing} both`,
                        [Ce]: { animation: "none" }
                      }
                    }
                  ),
                  /* @__PURE__ */ t(
                    O,
                    {
                      sx: {
                        position: "relative",
                        // The host's field, set into the glass: an outlined
                        // input or button becomes a recessed glass well.
                        // Classes repeat to outrank the host's own styles.
                        ...a,
                        animation: `${Qo} ${hn.duration}ms ${hn.easing} 60ms both`,
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
}, la = 100, da = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = d.useState(!1), [s, a] = d.useState(!1), c = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const h = (x) => {
      r.current.has(x) || (c(), i(!1));
    }, m = () => {
      c(), i(!1);
    };
    return document.addEventListener("mouseover", h), document.documentElement.addEventListener("mouseleave", m), () => {
      c(), document.removeEventListener("mouseover", h), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), d.useEffect(() => {
    if (!s)
      return;
    const h = (m) => {
      var x;
      (x = e.current) != null && x.contains(m.target) || a(!1);
    };
    return document.addEventListener("pointerdown", h), () => document.removeEventListener("pointerdown", h);
  }, [s]), {
    expanded: n || s,
    pin: () => a(!0),
    rootProps: {
      ref: e,
      onMouseOver: (h) => {
        r.current.add(h.nativeEvent), !n && o.current === void 0 && (o.current = setTimeout(() => {
          o.current = void 0, i(!0);
        }, la));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (h) => {
        const m = h.relatedTarget;
        m && !h.currentTarget.contains(m) && a(!1);
      },
      onKeyDown: (h) => {
        h.key === "Escape" && a(!1);
      }
    }
  };
}, ua = 100, pn = 80, Zt = 56, fa = 300, Co = 288, Ot = 72, Oo = 68, Tt = 8, mn = ee, ha = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", pa = 68, ma = { xs: 2, md: "18px" }, ga = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), gn = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, mc = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: a = "rail",
  sidebarSubmenu: c = "expand",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: h,
  logo: m,
  onBrandClick: x,
  searchComponent: p,
  brandColor: f,
  contentPadding: g = ma,
  userMenuItems: _,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: R,
  activeSidebarForegroundColor: E,
  enableRefreshToken: w = !1,
  holdSessionSkeleton: I = !1,
  activePath: S,
  onLinkClick: C,
  showProfile: V = !0,
  userName: U,
  userRole: M,
  userAvatar: D,
  userEmail: P,
  onLogout: L,
  showSettings: z = !0,
  onSettingsClick: te,
  onProfileClick: ge,
  showNotifications: F = !0,
  notificationCount: B = 0,
  NotificationSidebarContent: G,
  whatsNewCount: oe = 0,
  onNotificationsClick: ie,
  platforms: T,
  currentPlatformKey: W,
  onPlatformSelect: Q,
  onVerify: H,
  alertProps: k,
  style: J,
  sidebarStyles: de,
  contentStyles: Oe,
  accentColor: Xe,
  sidebarAccentColor: xe,
  sidebarForegroundColor: he,
  contentBackgroundColor: Re,
  theme: Y = "light",
  showThemeToggler: ue = !1,
  onThemeToggle: be,
  GlobalChatSidebar: Te,
  useChatSidebar: Ne,
  chatPanelMode: Ke = "docked",
  chatPanelPosition: Ft = "right",
  chatPanelWidth: ot = 420,
  onChatClose: co,
  showAssistant: rt = !1,
  assistantPlacement: yt = "sidebar",
  assistantShortcut: Bt = "j",
  onAssistantClick: nt,
  assistantActive: lt = !1,
  assistantBusy: St = !1,
  customNavbar: Wt,
  customNavbarProps: lo,
  redirectToLogin: dt,
  apiBaseUrl: ut
}) => {
  const u = as(), A = cs(u.breakpoints.down("md")), X = Or(
    () => xn(Ii(Y)),
    [Y]
  ), N = Y === "dark", K = Xe ?? "#01584f", j = xe ?? K, ce = Re ?? (N ? "hsl(220, 35%, 9%)" : "#f2f9fc"), q = a === "collapsible", fe = a === "panel", uo = fe && i && !A, je = a === "rail-labeled", Bn = q || je, Ae = b ?? (N ? "hsl(220, 30%, 7%)" : "#ffffff"), fo = y ?? Ae, Pe = he ?? (N ? "#ffffff" : j), vt = R ?? eo(Pe), wt = y ? Ao(fo) : Pe, nr = ($) => /* @__PURE__ */ t(
    re,
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
  ), Pt = f ?? wt, [sr, ho] = it(
    null
  ), po = ((T == null ? void 0 : T.length) ?? 0) > 1, Wn = Tr(() => ho(null), []), Pn = ($) => {
    ho(null), Q ? Q($) : $.key !== W && $.url && window.location.assign($.url);
  }, ir = ($) => po ? /* @__PURE__ */ t(
    ta,
    {
      anchorEl: sr,
      onClose: Wn,
      platforms: T,
      currentKey: W,
      onSelect: Pn,
      accentColor: K,
      glass: c === "flyout" && (q || fe) && !A,
      children: $
    }
  ) : $, zt = po ? ($) => ho($.currentTarget) : x, Gt = po ? !!sr : void 0, mo = ir(
    m ?? nr(Pt)
  ), zn = ir(
    m ?? nr(f ?? Pe)
  ), go = da(), $e = c === "flyout" && (q || fe), ke = $e || !go.expanded, ar = $e ? "popover" : "expand", cr = $e ? Oo : Ot, lr = $e ? "transparent" : Ae, dr = $e && !y ? "transparent" : fo, [Gn, ur] = it(!1), Hn = Tr(() => ur(!1), []);
  let pe = 0;
  i && !A && (je ? pe = pn : $e ? pe = Oo + 2 * Tt : q || fe ? pe = Ot : pe = ua);
  const [fr, st] = it(!1), [hr, xo] = it(!1), ye = A && l === "bottom-bar", pr = `calc(${kn}px + env(safe-area-inset-bottom, 0px))`, [bo, mr] = it({ open: !1, tab: "notifications" }), gr = () => mr(($) => ({ ...$, open: !1 })), Un = F && !!G, [Xn, Kn] = it(!0), [jn, Vn] = it(!1), yo = Ne == null ? void 0 : Ne(), xr = (yo == null ? void 0 : yo.isOpen) ?? !1, br = Ke === "floating" ? "floating" : "docked", Yn = br === "docked" && xr && Te && !A ? ot : 0, Ht = Ro(H), yr = Ro(!1), Sr = Or(
    () => Ri(ut),
    [ut]
  );
  Kt(() => {
    Ht.current = H;
  }, [H]);
  const So = Ro(nt);
  So.current = nt;
  const Et = rt && Bt ? Bt.toLowerCase() : null;
  Kt(() => {
    if (!Et)
      return;
    const $ = (se) => {
      (se.metaKey || se.ctrlKey) && !se.altKey && !se.shiftKey && se.key.toLowerCase() === Et && So.current && (se.preventDefault(), So.current());
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [Et]);
  const vr = ($) => {
    const se = L($);
    se instanceof Promise && se.catch((Ve) => {
      console.error("Error in logout handler:", Ve);
    });
  };
  if (Kt(() => {
    (() => {
      var se;
      try {
        const { isAuthenticated: Ve } = wi();
        if (!Ve) {
          console.log("No session found, redirecting to login"), Nt(), dt();
          return;
        }
        if (!yr.current) {
          const { user: It, error: Eo } = Ei();
          if (It && !Eo) {
            const rs = {
              name: It.name || "",
              email: It.email || "",
              profilePicture: It.profilePicture || "",
              role: It.role || ""
            };
            yr.current = !0, (se = Ht.current) == null || se.call(Ht, rs);
          } else
            Eo && console.error("Error getting user data:", Eo);
        }
        Vn(!0);
      } catch (Ve) {
        console.error("Error checking session:", Ve), Nt(), dt();
      } finally {
        Kn(!1);
      }
    })();
  }, [dt]), Kt(() => {
    w && _i(Sr, dt);
  }, [w, Sr]), Xn || I)
    return /* @__PURE__ */ v(Cr, { theme: X, children: [
      /* @__PURE__ */ t(Ar, {}),
      /* @__PURE__ */ t(
        Qi,
        {
          isMobile: A,
          sidebarWidthPx: pe,
          floatingRail: $e ? {
            gutterPx: Tt,
            radiusPx: mn
          } : void 0,
          mobileBarHeightPx: Zt,
          sidebarSurface: Ae,
          contentBackground: ce,
          contentPadding: gn(
            g,
            u
          )
        }
      )
    ] });
  if (!jn)
    return null;
  const Rt = p ?? (Wt ? /* @__PURE__ */ t(Wt, { ...lo }) : null), qn = ($) => {
    st(!1), xo(!1), mr({ open: !0, tab: $ });
  }, vo = G && (() => qn("notifications")), Zn = B + oe, wr = {
    avatarColor: j,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: _ == null ? void 0 : _.map(
      ($) => $.onClick || !$.path ? $ : { ...$, onClick: () => C == null ? void 0 : C($.path) }
    ),
    showNotifications: F,
    notificationCount: B,
    whatsNewCount: oe,
    onNotificationsClick: vo,
    showProfile: V,
    userName: U,
    userRole: M,
    userAvatar: D,
    showSettings: z,
    onSettingsClick: te,
    showThemeToggler: ue,
    theme: Y,
    onThemeToggle: be,
    onLogout: vr
  }, wo = ($) => /* @__PURE__ */ t(
    oa,
    {
      ...wr,
      compact: $,
      color: Pe,
      hoverColor: vt
    }
  ), Er = Et ? [ga() ? "⌘" : "Ctrl", Et.toUpperCase()] : void 0, Qn = ($) => rt && yt === "sidebar" ? /* @__PURE__ */ t(
    en,
    {
      variant: $ ? "sidebar-icon" : "sidebar",
      onClick: nt,
      active: lt,
      busy: St,
      shortcutKeys: Er,
      accentColor: Pe
    }
  ) : null, Jn = ($) => Rt ? /* @__PURE__ */ t(
    aa,
    {
      search: Rt,
      mode: $,
      onExpand: () => {
        go.pin(), ur(!0);
      },
      autoFocus: Gn,
      onAutoFocused: Hn,
      color: Pe,
      hoverColor: vt
    }
  ) : null, Ut = ($) => {
    const se = Qn($ !== "full"), Ve = Jn($);
    return se || Ve ? /* @__PURE__ */ v(
      To,
      {
        spacing: 1.5,
        sx: { alignItems: $ === "full" ? "stretch" : "center" },
        children: [
          se,
          Ve
        ]
      }
    ) : void 0;
  }, Rr = () => /* @__PURE__ */ t(
    Do,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: S,
      onLinkClick: C,
      showHeaderBar: q,
      logo: mo,
      title: n,
      onBrandClick: zt,
      brandMenuOpen: Gt,
      brandColor: Pt,
      headerBackgroundColor: q ? dr : void 0,
      headerForegroundColor: q ? wt : void 0,
      activeAccentColor: j,
      groupAccentColor: R,
      activeForegroundColor: E,
      foregroundColor: he,
      surfaceBackgroundColor: lr,
      flyoutSurfaceColor: Ae,
      collapsed: je || ke,
      showLabels: je,
      expandedWidth: Co,
      collapsedWidth: je ? pn : cr,
      topContent: Ut(
        je ? "popover" : ke ? ar : "full"
      ),
      footer: wo(je || ke),
      submenuMode: $e ? "flyout" : "inline"
    }
  ), Ir = ($) => $e ? es($) : ts($), es = ($) => /* @__PURE__ */ t(
    re,
    {
      component: "aside",
      sx: {
        width: pe,
        minWidth: pe,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (se) => se.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: ce
      },
      children: /* @__PURE__ */ v(
        re,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: Tt,
            bottom: Tt,
            left: Tt,
            width: Oo,
            borderRadius: `${mn}px`,
            display: "flex",
            flexDirection: "column",
            ...de
          },
          children: [
            /* @__PURE__ */ t(
              bt,
              {
                isDark: N,
                solid: Ae,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              re,
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
  ), ts = ($) => /* @__PURE__ */ t(
    re,
    {
      component: "aside",
      sx: {
        width: Ot,
        minWidth: Ot,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (se) => se.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        re,
        {
          ...$e ? {} : go.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": ke ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: ke ? Ot : Co,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Ae,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: ke ? "none" : `4px 0 24px rgba(0, 0, 0, ${N ? 0.5 : 0.12})`,
            transition: ha,
            ...de
          },
          children: $
        }
      )
    }
  ), os = gn(
    g,
    u
  );
  return /* @__PURE__ */ t(Cr, { theme: X, children: /* @__PURE__ */ t(In.Provider, { value: j, children: /* @__PURE__ */ t(kt.Provider, { value: Ae, children: /* @__PURE__ */ v(
    re,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...J
      },
      children: [
        /* @__PURE__ */ t(Ar, {}),
        A && /* @__PURE__ */ t(
          Xi,
          {
            height: Zt,
            onMenuClick: i && !ye ? () => st(!0) : void 0,
            appName: n,
            logo: mo,
            onBrandClick: zt,
            brandMenuOpen: Gt,
            background: fo,
            color: wt,
            brandColor: Pt,
            endContent: F ? /* @__PURE__ */ t(
              rr,
              {
                count: Zn,
                onClick: vo,
                color: wt,
                hoverColor: vt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !A && je && /* @__PURE__ */ t(
          re,
          {
            component: "aside",
            sx: {
              width: pe,
              minWidth: pe,
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
              ...de
            },
            children: Rr()
          }
        ),
        i && !A && q && Ir(
          /* @__PURE__ */ v(De, { children: [
            Rr(),
            (k == null ? void 0 : k.show) && !ke && /* @__PURE__ */ t(qt, { ...k })
          ] })
        ),
        uo && Ir(
          /* @__PURE__ */ v(De, { children: [
            /* @__PURE__ */ t(
              qi,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: S,
                onLinkClick: C,
                logo: mo,
                title: n,
                onBrandClick: zt,
                brandMenuOpen: Gt,
                brandColor: Pt,
                headerBackgroundColor: dr,
                headerForegroundColor: wt,
                activeAccentColor: j,
                groupAccentColor: R,
                activeForegroundColor: E,
                foregroundColor: he,
                surfaceBackgroundColor: lr,
                flyoutSurfaceColor: Ae,
                collapsed: ke,
                expandedWidth: Co,
                collapsedWidth: cr,
                topContent: Ut(
                  ke ? ar : "full"
                ),
                submenuMode: $e ? "flyout" : "inline",
                color: Pe,
                hoverColor: vt,
                avatarColor: j,
                showProfile: V,
                userName: U,
                userEmail: P,
                userRole: M,
                userAvatar: D,
                showNotifications: F,
                notificationCount: B,
                onNotificationsClick: Un ? vo : ie,
                whatsNewCount: oe,
                onProfileClick: ge,
                menuItems: _,
                onLogout: vr,
                theme: Y,
                showThemeToggler: ue,
                onThemeToggle: be
              }
            ),
            (k == null ? void 0 : k.show) && !ke && /* @__PURE__ */ t(qt, { ...k })
          ] })
        ),
        i && !A && !Bn && !fe && /* @__PURE__ */ t(
          $r,
          {
            variant: "permanent",
            sx: {
              width: pe,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: pe,
                boxSizing: "border-box",
                bgcolor: ce,
                borderRight: "none"
              },
              ...de
            },
            children: /* @__PURE__ */ v(
              re,
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
                    re,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        Jt,
                        {
                          logo: zn,
                          appName: n,
                          onClick: zt,
                          menuOpen: Gt,
                          color: f ?? Pe,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Ut("popover"),
                  /* @__PURE__ */ v(
                    re,
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
                          Wi,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: S,
                            onLinkClick: C,
                            accentColor: j,
                            surfaceBackgroundColor: ce,
                            railShowTitles: s
                          }
                        ),
                        (k == null ? void 0 : k.show) && /* @__PURE__ */ t(qt, { ...k })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(re, { sx: { py: 1.5 }, children: wo(!0) })
                ]
              }
            )
          }
        ),
        i && A && /* @__PURE__ */ v(
          ls,
          {
            anchor: ye ? "bottom" : "left",
            open: fr,
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
                  bgcolor: Ae,
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
                re,
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
                Do,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: S,
                  onLinkClick: ($) => {
                    C == null || C($), st(!1);
                  },
                  onLinkAction: () => st(!1),
                  collapsed: !1,
                  expandedWidth: ye ? "100%" : fa,
                  activeAccentColor: j,
                  groupAccentColor: R,
                  activeForegroundColor: E,
                  foregroundColor: he,
                  surfaceBackgroundColor: Ae,
                  topInsetPx: ye ? 8 : 0,
                  topContent: ye ? void 0 : Ut("full"),
                  footer: ye ? void 0 : wo(!1)
                }
              ),
              (k == null ? void 0 : k.show) && /* @__PURE__ */ t(qt, { ...k })
            ]
          }
        ),
        ye && Rt && /* @__PURE__ */ t(
          Ui,
          {
            open: hr,
            onClose: () => xo(!1),
            search: Rt
          }
        ),
        ye && /* @__PURE__ */ t(
          Hi,
          {
            ...wr,
            pinnedLinks: h,
            activePath: S,
            onLinkClick: C,
            onMenuClick: i ? () => st(!0) : void 0,
            menuOpen: fr,
            onSearchClick: Rt ? () => xo(!0) : void 0,
            searchOpen: hr,
            showAssistant: rt,
            onAssistantClick: nt,
            assistantActive: lt,
            showProfile: V,
            background: Ae,
            color: Pe,
            activeColor: j,
            activeBackground: vt
          }
        ),
        /* @__PURE__ */ t(
          re,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": os,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": A ? `${Zt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: pe ? `calc(100% - ${pe}px)` : "100%",
              mt: A ? `${Zt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ye && {
                pb: `calc(var(--lumora-content-padding) + ${pr})`
              },
              backgroundColor: ce,
              ...Oe
            },
            children: e
          }
        ),
        Te && /* @__PURE__ */ t(
          $i,
          {
            open: xr,
            variant: br,
            position: Ft,
            width: ot,
            sidebarWidthPx: pe,
            bottomOffsetPx: rt && yt === "floating" ? pa : 0,
            fullScreen: A,
            fullScreenBottom: ye ? pr : "0px",
            onClose: co,
            children: /* @__PURE__ */ t(Te, {})
          }
        ),
        rt && yt === "floating" && !ye && /* @__PURE__ */ t(
          en,
          {
            variant: "floating",
            rightOffsetPx: Yn,
            shortcutKeys: Er,
            onClick: nt,
            active: lt,
            busy: St
          }
        ),
        F && G && /* @__PURE__ */ t(
          $r,
          {
            anchor: "right",
            open: bo.open,
            onClose: gr,
            slotProps: {
              paper: {
                sx: { width: 380, maxWidth: "100vw" }
              }
            },
            children: /* @__PURE__ */ t(
              G,
              {
                onClose: gr,
                initialTab: bo.tab
              },
              bo.tab
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
  Do as CollapsibleSidebar,
  hc as FullBleedSection,
  Si as Kbd,
  mc as LumoraWrapper,
  Nt as clearAuthTokens,
  mc as default,
  pc as getAuthErrorMessage,
  Lt as getAuthTokens,
  Ei as getCurrentUser,
  Ii as getDesignTokens,
  wi as isAuthenticated,
  No as logAuthError,
  Tn as storeAuthTokens
};
