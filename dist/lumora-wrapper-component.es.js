import { jsx as t, jsxs as E, Fragment as $e } from "react/jsx-runtime";
import qn from "@mui/icons-material/KeyboardArrowDownRounded";
import Zn from "@mui/icons-material/KeyboardArrowUpRounded";
import Qn from "@mui/icons-material/ChevronRightRounded";
import C from "@mui/material/Box";
import vr from "@mui/material/Collapse";
import Ze from "@mui/material/Divider";
import ve from "@mui/material/IconButton";
import zt from "@mui/material/ListItemButton";
import we from "@mui/material/ListItemIcon";
import ke from "@mui/material/ListItemText";
import Me from "@mui/material/Stack";
import Ee from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as Fe, createTheme as ln, alpha as it, ThemeProvider as wr } from "@mui/material/styles";
import * as d from "react";
import { useMemo as Er, useState as nt, useCallback as Rr, useRef as yo, useEffect as Gt } from "react";
import Je from "@mui/material/ButtonBase";
import { keyframes as Lo } from "@emotion/react";
import No from "@mui/material/Fade";
import ko from "@mui/material/Popper";
import { useTheme as Jn, useMediaQuery as es, Box as ce, CircularProgress as ts, CssBaseline as os, Drawer as Ir, SwipeableDrawer as rs, Stack as ns } from "@mui/material";
import _r from "axios";
import ss from "@mui/material/Card";
import is from "@mui/material/CardContent";
import dn from "@mui/material/Button";
import as from "@mui/icons-material/AutoAwesomeRounded";
import cs from "@mui/material/Grow";
import Fo from "@mui/material/Paper";
import ls from "@mui/material/Slide";
import ds from "@mui/material/ListSubheader";
import qe from "@mui/material/MenuItem";
import Bo from "@mui/material/MenuList";
import un from "@mui/icons-material/MenuRounded";
import Wo from "@mui/icons-material/SearchRounded";
import fn from "@mui/icons-material/LogoutRounded";
import hn from "@mui/icons-material/NotificationsNoneOutlined";
import us from "@mui/icons-material/SettingsOutlined";
import fs from "@mui/material/Avatar";
import hs from "@mui/material/Menu";
import Cr from "@mui/material/ToggleButton";
import ps from "@mui/material/ToggleButtonGroup";
import ms from "@mui/material/Drawer";
import gs from "@mui/material/AppBar";
import xs from "@mui/material/Toolbar";
import pn from "@mui/material/Badge";
import bs from "@mui/icons-material/DarkModeOutlined";
import ys from "@mui/icons-material/LightModeOutlined";
import Ss from "@mui/icons-material/SettingsBrightnessOutlined";
import Po from "@mui/material/Popover";
import vs from "@mui/icons-material/CheckRounded";
const Yt = ({
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
  }, l = /* @__PURE__ */ E($e, { children: [
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
    Je,
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
  ) : /* @__PURE__ */ t(Me, { direction: "row", "data-testid": s, sx: c, children: l });
}, Or = !1, eo = { stiffness: 320, damping: 24 }, zo = { stiffness: 520, damping: 20 }, mn = { stiffness: 380, damping: 36 }, to = { stiffness: 260, damping: 28 }, ws = "cubic-bezier(0.32, 1.28, 0.52, 1)", Es = 420, Tr = 60, Rs = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Ar = /* @__PURE__ */ new Map(), Re = ({
  stiffness: e,
  damping: o,
  mass: r = 1
}) => {
  const n = `${e}/${o}/${r}`, i = Ar.get(n);
  if (i)
    return i;
  if (!Rs)
    return { easing: ws, duration: Es };
  const s = 1 / 600;
  let a = 0, c = 0, l = 0, h = 1 / Tr;
  const m = [0];
  for (; l < 3; ) {
    const f = (-e * (a - 1) - o * c) / r;
    if (c += f * s, a += c * s, l += s, l >= h && (m.push(a), h += 1 / Tr, Math.abs(a - 1) < 1e-3 && Math.abs(c) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const g = {
    easing: `linear(${m.map((f) => Number(f.toFixed(4))).join(", ")})`,
    duration: Math.round(l * 1e3)
  };
  return Ar.set(n, g), g;
}, Qe = (e) => !!(e && typeof e.animate == "function"), ze = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ht = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((o) => o.cancel());
}, Is = (e, o = 1.14) => {
  if (!Qe(e) || ze())
    return;
  const r = Re(zo);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${o})`, offset: 0.18, easing: r.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(r.duration / 0.82) }
  );
}, ht = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, ft = (e, o) => e ? `${e}/${o.text}` : o.text, je = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((n) => je(n, o))) ?? !1 : !1;
}, Ne = (e, o) => !!(o && e.path === o), Go = (e, o) => (e ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return ht(r) ? Go(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Io = (e) => {
  const o = oo(e);
  if (!o)
    return "#ffffff";
  const [r, n, i] = o.map((a) => {
    const c = a / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, qt = (e) => {
  const o = oo(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, i] = o;
  return `rgba(${r}, ${n}, ${i}, 0.14)`;
}, _o = (e, o) => {
  const r = oo(e);
  return r ? `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o})` : e;
}, oo = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, gn = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Ho = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", _s = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Cs = Lo`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Ce = "@media (prefers-reduced-motion: reduce)", q = 6, Uo = "9, 193, 174", Co = d.createContext(
  void 0
), pt = () => {
  const e = d.useContext(Co), o = e ? oo(e) : null;
  return o ? o.join(", ") : Uo;
}, $r = {
  dark: { rim: 0.45, sheen: 0.055 },
  light: { rim: 0.55, sheen: 0.09 }
}, Os = (e, o) => e ? "255, 255, 255" : o, Ts = (e, o, r = Uo) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  position: "relative",
  bgcolor: o,
  boxShadow: `${_s(e)}, 0 0 0 1px ${Ho(e)}`
}), As = (e) => e ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)", Xo = (e) => ({
  color: e ? "#ffffff" : "#0b1f1c",
  bgcolor: e ? "rgb(30, 36, 48)" : "#ffffff",
  border: "1px solid",
  borderColor: Ho(e),
  boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)",
  borderRadius: `${q}px`,
  px: 1.25,
  py: 0.75,
  fontSize: "0.8125rem",
  fontWeight: 600
}), Ko = Lo`
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
`, jo = Lo`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`, Vo = (e, o = Uo, r = `rgba(${o}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${o}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Ot = (e, o, r = "solid") => r === "solid" ? { background: e, boxShadow: "none" } : {
  background: _o(e, o ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${_o(e, 0.45)}`
}, $s = (e, o) => {
  {
    const r = `inset 0 0 0 1px ${Ho(e)}`;
    return {
      rest: {
        background: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
        boxShadow: r,
        borderRadius: `${q}px`,
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
}, Zt = "data-rail-item", Ms = `[${Zt}], button, [role="button"]`, ro = d.createContext(!1), Yo = () => {
  const e = d.useContext(ro), o = Fe();
  return e ? {
    arrow: !1,
    slotProps: {
      tooltip: { sx: Xo(o.palette.mode === "dark") },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  } : {};
}, Ve = Re(mn), qo = ({
  enabled: e,
  isDark: o,
  selector: r,
  size: n,
  radius: i,
  lean: s = 3
}) => {
  const a = d.useRef(null), c = pt(), [l, h] = d.useState(null), m = d.useRef(null), g = d.useRef(null), f = (y, S) => {
    g.current = S;
    const I = S.getBoundingClientRect(), T = y.getBoundingClientRect(), X = n ?? I.width, K = n ?? I.height, $ = {
      top: Math.round(I.top - T.top + (I.height - K) / 2),
      left: Math.round(I.left - T.left + (I.width - X) / 2),
      width: Math.round(X),
      height: Math.round(K)
    };
    h(
      (M) => M && M.visible && M.top === $.top && M.left === $.left && M.width === $.width && M.height === $.height ? M : { ...$, visible: !0, instant: !(M != null && M.visible) }
    );
  }, p = (y, S) => {
    var T;
    const I = (T = S == null ? void 0 : S.closest) == null ? void 0 : T.call(S, r);
    return I && y.contains(I) ? I : null;
  }, x = (y) => {
    if (!e)
      return;
    const S = p(y.currentTarget, y.target);
    S && f(y.currentTarget, S);
  }, _ = (y) => {
    if (!e)
      return;
    const S = p(y.currentTarget, y.target);
    S && y.target.matches(":focus-visible") && f(y.currentTarget, S);
  }, b = (y) => {
    const S = a.current, I = g.current;
    if (!e || !S || !I || !s || ze())
      return;
    const T = I.getBoundingClientRect(), X = (K, $) => Math.max(-1, Math.min(1, K / ($ / 2))) * s;
    S.style.transform = `translate(${X(y.clientX - (T.left + T.width / 2), T.width)}px, ${X(y.clientY - (T.top + T.height / 2), T.height)}px)`;
  }, w = () => {
    g.current = null, a.current && (a.current.style.transform = ""), h((y) => y != null && y.visible ? { ...y, visible: !1 } : y);
  }, v = (y) => {
    const S = y.relatedTarget;
    (!S || !y.currentTarget.contains(S)) && (y.currentTarget.matches(":hover") || w());
  };
  return d.useEffect(() => {
    const y = a.current;
    if (!(l != null && l.visible)) {
      m.current = null;
      return;
    }
    const S = m.current;
    if (m.current = l.top, !Qe(y) || ze())
      return;
    if (S === null || l.instant) {
      y.animate([{ scale: "0.85" }, { scale: "1" }], {
        duration: Ve.duration,
        easing: Ve.easing
      });
      return;
    }
    const I = Math.min(Math.abs(l.top - S) / 600, 0.08);
    I && y.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - I / 2} ${1 + I}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ve.duration, easing: "ease-out" }
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
          ...Vo(o, c),
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
          transition: l.instant ? "opacity 160ms ease, scale 220ms ease, transform 260ms ease-out" : `translate ${Ve.duration}ms ${Ve.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
          [Ce]: { transition: "opacity 160ms ease" }
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: x,
      onMouseMove: b,
      onMouseLeave: w,
      onFocus: _,
      onBlur: v,
      onScrollCapture: w
    } : {}
  };
}, Ds = (e, o) => {
  const r = qo({
    enabled: e,
    isDark: o,
    selector: Ms,
    size: 46,
    radius: q
  });
  return {
    ...r,
    lens: r.lens ? d.cloneElement(r.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Ls = (e, o) => {
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
}, Ns = ({
  enabled: e,
  isDark: o,
  color: r,
  containerRef: n
}) => {
  const i = d.useRef(null), [s, a] = d.useState(null), c = d.useRef(null), l = d.useCallback(
    (m) => {
      const g = n.current;
      if (!e || !g)
        return;
      const f = g.querySelector(
        `[${Zt}][data-active="true"]`
      );
      if (!f) {
        a(
          (x) => x != null && x.visible ? { ...x, visible: !1 } : x
        );
        return;
      }
      const p = Ls(f, g);
      a(
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
    l(!1);
  }), d.useEffect(() => {
    const m = n.current;
    if (!e || !m)
      return;
    let g = 0;
    const f = () => {
      cancelAnimationFrame(g), g = requestAnimationFrame(() => l(!1));
    }, p = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => l(!0));
    p == null || p.observe(m);
    const x = typeof MutationObserver > "u" ? null : new MutationObserver(f);
    return x == null || x.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(g), p == null || p.disconnect(), x == null || x.disconnect();
    };
  }, [e, n, l]), d.useEffect(() => {
    const m = i.current;
    if (!(s != null && s.visible)) {
      c.current = null;
      return;
    }
    const g = c.current;
    if (c.current = s.top, g === null || s.instant || !Qe(m) || ze())
      return;
    const f = Math.min(Math.abs(s.top - g) / 600, 0.08);
    f && m.animate(
      [
        { scale: "1 1" },
        { scale: `${1 - f / 2} ${1 + f}`, offset: 0.35 },
        { scale: "1 1" }
      ],
      { duration: Ve.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ t(
    C,
    {
      ref: i,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      sx: {
        ...Ot(r, o),
        borderRadius: `${q}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: s.width,
        height: s.height,
        translate: `${s.left}px ${s.top}px`,
        scale: s.visible ? "1" : "0.7",
        opacity: s.visible ? 1 : 0,
        pointerEvents: "none",
        transition: s.instant ? "opacity 160ms ease, scale 220ms ease" : `translate ${Ve.duration}ms ${Ve.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
        [Ce]: { transition: "opacity 160ms ease" }
      }
    }
  ) : null };
}, Mr = 14, ks = 18, Fs = "blur(12px) saturate(180%) brightness(1.04)", Bs = (() => {
  var o;
  if (typeof navigator > "u")
    return !1;
  const e = (o = navigator.userAgentData) == null ? void 0 : o.brands;
  return !!(e != null && e.some(({ brand: r }) => /Chromium/.test(r)));
})(), Ws = (e, o, r) => {
  const n = Math.min(0.45, r / e), i = Math.min(0.45, r / o), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${o}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${n}" stop-color="#800000"/><stop offset="${1 - n}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${i}" stop-color="#008000"/><stop offset="${1 - i}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, Ps = 140, Dr = 0.22, zs = 0.14, Gs = (e, o, r) => {
  const n = d.useRef(r);
  n.current = r, d.useEffect(() => {
    if (!o || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const i = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let a = 0;
    const c = () => {
      var p;
      const f = e.current;
      f && (f.style.setProperty("--lx", `${s.x.toFixed(1)}px`), f.style.setProperty("--ly", `${s.y.toFixed(1)}px`), f.style.setProperty("--li", s.i.toFixed(3)), (p = n.current) == null || p.call(n, s.x, s.y, s.i));
    }, l = () => {
      s.x += (i.x - s.x) * Dr, s.y += (i.y - s.y) * Dr, s.i += (i.i - s.i) * zs;
      const f = Math.abs(i.x - s.x) < 0.3 && Math.abs(i.y - s.y) < 0.3 && Math.abs(i.i - s.i) < 3e-3;
      f && (s.x = i.x, s.y = i.y, s.i = i.i), c(), a = f ? 0 : requestAnimationFrame(l);
    }, h = () => {
      a || (a = requestAnimationFrame(l));
    }, m = (f) => {
      const p = e.current;
      if (f.pointerType === "touch" || !p)
        return;
      const x = p.getBoundingClientRect();
      if (!x.width || !x.height)
        return;
      i.x = (f.clientX - x.left) * p.offsetWidth / x.width, i.y = (f.clientY - x.top) * p.offsetHeight / x.height;
      const _ = Math.max(
        x.left - f.clientX,
        0,
        f.clientX - x.right
      ), b = Math.max(
        x.top - f.clientY,
        0,
        f.clientY - x.bottom
      );
      i.i = Math.max(0, 1 - Math.hypot(_, b) / Ps), s.i < 0.01 && (s.x = i.x, s.y = i.y), h();
    }, g = () => {
      i.i = 0, h();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", g), () => {
      cancelAnimationFrame(a), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", g);
    };
  }, [e, o]);
}, mt = d.forwardRef(
  ({
    isDark: e,
    solid: o,
    sx: r,
    "data-testid": n,
    refract: i = !0,
    light: s = !0,
    onLight: a
  }, c) => {
    const l = d.useRef(null), h = i && Or;
    Gs(l, s && Or, a);
    const m = pt(), g = `lumora-glass-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [f, p] = d.useState(null), x = d.useRef(null), _ = d.useCallback(
      (v) => {
        var y;
        if (l.current = v, typeof c == "function" ? c(v) : c && (c.current = v), (y = x.current) == null || y.disconnect(), x.current = null, !v || !h || !Bs || typeof ResizeObserver > "u")
          return;
        const R = () => {
          const S = v.offsetWidth, I = v.offsetHeight;
          p(
            (T) => (T == null ? void 0 : T.width) === S && T.height === I ? T : S && I ? { width: S, height: I } : null
          );
        };
        x.current = new ResizeObserver(R), x.current.observe(v), R();
      },
      [c, h]
    ), b = d.useMemo(
      () => f ? Ws(f.width, f.height, Mr) : null,
      [f]
    ), w = h && !!(b && f);
    return /* @__PURE__ */ E($e, { children: [
      w ? /* @__PURE__ */ t(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ E(
            "filter",
            {
              id: g,
              x: "0",
              y: "0",
              width: f.width,
              height: f.height,
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
                    width: f.width,
                    height: f.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ t(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: Mr / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ t(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: ks,
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
          ref: _,
          "aria-hidden": !0,
          "data-testid": n,
          "data-refract": w ? "true" : void 0,
          sx: [
            Ts(e, o, m),
            w ? {
              backdropFilter: `url(#${g}) ${Fs}`,
              "@media (prefers-reduced-transparency: reduce)": { backdropFilter: "none" }
            } : {},
            ...Array.isArray(r) ? r : [r]
          ]
        }
      )
    ] });
  }
);
mt.displayName = "GlassLayer";
const Ye = 44, Lr = 4, Hs = q, Nr = 1.4, Us = 6, xn = 6, It = q, Qt = 10, kr = 0.12, Fr = 0.75, Xs = Qt + 32, Ks = 90, js = 22, Vs = 1190, Ys = 1195, Jt = Re(eo), pe = Re(mn), Br = Re(to), qs = ({ left: e, top: o, width: r, height: n, radius: i }) => {
  const s = Math.min(i, r / 2, n / 2), a = e + r, c = o + n, l = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z M ${e + s} ${o} H ${a - s} ${l} ${a} ${o + s} V ${c - s} ${l} ${a - s} ${c} H ${e + s} ${l} ${e} ${c - s} V ${o + s} ${l} ${e + s} ${o} Z')`;
}, Zs = ({
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
  activeForegroundColor: g,
  solidSurface: f
}) => {
  const p = Fe(), x = p.palette.mode === "dark", _ = !!(e && r), b = d.useRef(null);
  e && o && (b.current = { group: e, key: o });
  const w = b.current, v = d.useMemo(() => r ? {
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
  } : null, [r, n]), R = d.useRef(v);
  v && (R.current = v), d.useEffect(() => {
    r && Is(r);
  }, [r]);
  const [y, S] = d.useState(!1);
  d.useEffect(() => {
    if (!_) {
      S(!1);
      return;
    }
    let D = 0;
    const L = requestAnimationFrame(() => {
      D = requestAnimationFrame(() => S(!0));
    });
    return () => {
      cancelAnimationFrame(L), cancelAnimationFrame(D);
    };
  }, [_]);
  const I = d.useMemo(
    () => w ? Go(w.group.subitems, w.group.icon) : [],
    [w]
  ), T = d.useRef(null), X = d.useRef(null), K = d.useRef(0), $ = d.useRef(null), M = d.useRef([]), O = I.findIndex(
    ({ sub: D }) => Ne(D, s)
  ), [P, oe] = d.useState(0);
  d.useEffect(() => {
    oe(Math.max(O, 0));
  }, [o]), d.useEffect(() => {
    if (!_ || !a)
      return;
    const D = setTimeout(() => {
      var L;
      return (L = M.current[0]) == null ? void 0 : L.focus();
    });
    return () => clearTimeout(D);
  }, [_, a, o]);
  const de = (D) => {
    var j;
    const L = Math.max(0, Math.min(D, I.length - 1));
    oe(L), (j = M.current[L]) == null || j.focus();
  }, me = (D, L) => {
    switch (D.key) {
      case "ArrowRight":
        de(L + 1);
        break;
      case "ArrowLeft":
        L === 0 ? l(!0) : de(L - 1);
        break;
      case "Home":
        de(0);
        break;
      case "End":
        de(I.length - 1);
        break;
      case "Tab":
        l(!0);
        break;
      default:
        return;
    }
    D.preventDefault();
  }, z = (D) => {
    var ue;
    const L = M.current.slice(0, I.length).filter((se) => !!se);
    if (!L.length)
      return;
    const j = D !== null && D < L.length && !ze(), N = `translate ${pe.duration}ms ${pe.easing}, scale ${pe.duration}ms ${pe.easing}`, V = L.map((se) => se.offsetLeft + Ye / 2), Q = L.map(
      (se, he) => j && he === D ? Nr : 1
    ), Ge = j ? (Nr - 1) * Ye : 0, fe = V[0] - Ye / 2, Oe = V[V.length - 1] + Ye / 2, ge = j ? Math.min(
      Math.min(
        1,
        Math.max(
          0,
          (V[D] - fe) / (Oe - fe)
        )
      ),
      Us / Ge
    ) : 0;
    let xe = fe - Ge * ge;
    L.forEach((se, he) => {
      const be = Ye * Q[he], Te = xe + be / 2;
      xe += be + Lr, se.style.transition = `${N}, background 160ms ease, box-shadow 160ms ease`, se.style.translate = j ? `${Te - V[he]}px 0` : "", se.style.scale = j ? String(Q[he]) : "", j ? se.style.setProperty("--dock-scale", String(Q[he])) : se.style.removeProperty("--dock-scale");
    }), (ue = $.current) == null || ue.call($);
  }, W = d.useRef(null);
  d.useEffect(() => {
    W.current = null;
  }, [o]);
  const U = (D) => {
    W.current !== D && (W.current = D, cancelAnimationFrame(K.current), K.current = requestAnimationFrame(() => z(D)));
  };
  d.useEffect(() => () => cancelAnimationFrame(K.current), []);
  const G = p.palette.text.primary, Z = x ? p.palette.text.primary : m;
  return /* @__PURE__ */ E($e, { children: [
    /* @__PURE__ */ t(No, { in: _, timeout: { enter: 220, exit: 200 }, unmountOnExit: !0, children: /* @__PURE__ */ t(
      C,
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
          ...i ? { clipPath: qs(i) } : {},
          zIndex: Vs,
          bgcolor: As(x)
        }
      }
    ) }),
    /* @__PURE__ */ t(
      ko,
      {
        open: _,
        anchorEl: v ?? R.current,
        placement: "right",
        transition: !0,
        modifiers: [
          { name: "offset", options: { offset: [0, Qt] } },
          { name: "flip", enabled: !1 },
          { name: "preventOverflow", options: { padding: 8 } }
        ],
        sx: {
          zIndex: Ys,
          transition: y ? `transform ${pe.duration}ms ${pe.easing}` : "none",
          [Ce]: { transition: "none" }
        },
        children: ({ TransitionProps: D }) => /* @__PURE__ */ t(
          ni,
          {
            in: (D == null ? void 0 : D.in) ?? _,
            onEnter: D == null ? void 0 : D.onEnter,
            onExited: D == null ? void 0 : D.onExited,
            groupKey: (w == null ? void 0 : w.key) ?? null,
            panelProps: h,
            isDark: x,
            solidSurface: f,
            groupText: w == null ? void 0 : w.group.text,
            glassRef: X,
            shapeRef: $,
            children: w ? /* @__PURE__ */ t($e, { children: /* @__PURE__ */ t(
              C,
              {
                ref: T,
                role: "menu",
                "aria-label": w.group.text,
                onPointerLeave: () => U(null),
                sx: {
                  position: "relative",
                  display: "flex",
                  gap: `${Lr}px`,
                  // No room kept for magnification: a grown tile rises out of
                  // the glass, as icons rise out of the Dock
                  px: 0
                },
                children: I.map(({ sub: L, icon: j }, N) => /* @__PURE__ */ t(
                  bn,
                  {
                    ref: (V) => {
                      M.current[N] = V;
                    },
                    sub: L,
                    icon: j,
                    index: N,
                    active: Ne(
                      L,
                      s
                    ),
                    tabIndex: N === P ? 0 : -1,
                    onClick: () => {
                      c(L.path), l();
                    },
                    onKeyDown: (V) => me(V, N),
                    onFocus: (V) => {
                      oe(N), V.currentTarget.matches(
                        ":focus-visible"
                      ) && U(N);
                    },
                    onHoverStart: (V) => {
                      V !== "touch" && U(N);
                    },
                    accentColor: m,
                    activeForegroundColor: g,
                    labelColor: G,
                    iconColor: Z,
                    isDark: x
                  },
                  L.path
                ))
              },
              w.key
            ) }) : null
          }
        )
      }
    )
  ] });
}, Ct = 18, Qs = 160, Oo = 14, Js = 22, ei = 2.5, ti = 1, Wr = (e, o, r) => {
  const n = Math.abs(e - r.cx) - r.hx + r.r, i = Math.abs(o - r.cy) - r.hy + r.r;
  return Math.hypot(Math.max(n, 0), Math.max(i, 0)) + Math.min(Math.max(n, i), 0) - r.r;
}, oi = (e, o, r) => {
  const n = Math.max(r - Math.abs(e - o), 0) / r;
  return Math.min(e, o) - n * n * n * r / 6;
}, ri = (e, o, r) => {
  const n = xn, i = Ct, s = Ct + o / 2, a = Math.max(e, ...r.map((b) => b.right + n)), c = {
    cx: a / 2,
    cy: s,
    hx: a / 2,
    hy: o / 2,
    r: It
  }, l = r.filter((b) => b.bottom - b.top > Ye * 1.02).map((b) => ({
    cx: (b.left + b.right) / 2,
    cy: (b.top + b.bottom) / 2 + Ct,
    hx: (b.right - b.left) / 2 + n,
    hy: (b.bottom - b.top) / 2 + n,
    // Grown or not, the glass keeps its one corner
    r: It
  })), h = (b, w) => l.reduce(
    (v, R) => oi(v, Wr(b, w, R), Js),
    Wr(b, w, c)
  ), m = (b, w) => {
    let v = s, R = s + w * (o / 2 + i);
    if (h(b, v) > 0)
      return null;
    for (let y = 0; y < 12; y += 1) {
      const S = (v + R) / 2;
      h(b, S) <= 0 ? v = S : R = S;
    }
    return v;
  }, g = Math.min(0, ...l.map((b) => b.cx - b.hx)) - 2, f = Math.max(a, ...l.map((b) => b.cx + b.hx)) + 2, p = [], x = [];
  for (let b = g; b <= f; ) {
    const w = m(b, -1), v = m(b, 1);
    if (w !== null && v !== null) {
      const y = +(b + Oo).toFixed(1);
      p.push([y, +w.toFixed(1)]), x.push([y, +v.toFixed(1)]);
    }
    const R = b - g < It + 4 || f - b < It + 4;
    b += R ? ti : ei;
  }
  return p.length ? `M ${[...p, ...x.reverse()].map(([b, w]) => `${b} ${w}`).join(" L ")} Z` : "";
}, Pr = (e, [o, r], n, i) => {
  Array.from(e.children).forEach((s) => {
    Qe(s) && s.animate([{ opacity: o }, { opacity: r }], {
      duration: n,
      easing: i,
      fill: r === 0 ? "forwards" : "none"
    });
  });
}, ni = ({
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
  const g = d.useRef(null), f = d.useRef(null), p = d.useRef(null), x = d.useRef(null), _ = d.useRef(null), b = Os(s, pt()), w = d.useCallback(
    (z, W, U) => {
      var G, Z;
      (G = _.current) == null || G.setAttribute("cx", String(z)), (Z = _.current) == null || Z.setAttribute("cy", String(W)), x.current && (x.current.style.opacity = String(
        U * (s ? $r.dark.rim : $r.light.rim)
      ));
    },
    [s]
  ), v = d.useRef(null), R = d.useRef(null), y = `lumora-flyout-${d.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, S = d.useRef(0), I = d.useRef(0), T = d.useRef(""), X = () => {
    var D, L, j, N;
    const z = g.current, W = f.current;
    if (!z || !W)
      return !1;
    const U = z.getBoundingClientRect(), G = Array.from(
      z.querySelectorAll('[role="menuitem"]'),
      (V) => {
        const Q = V.getBoundingClientRect();
        return {
          left: Q.left - U.left,
          right: Q.right - U.left,
          top: Q.top - U.top,
          bottom: Q.bottom - U.top
        };
      }
    ), Z = ri(
      z.offsetWidth,
      z.offsetHeight,
      G
    );
    return Z === T.current ? !1 : (T.current = Z, W.style.clipPath = `path('${Z}')`, (D = p.current) == null || D.setAttribute("d", Z), (L = x.current) == null || L.setAttribute("d", Z), (j = v.current) == null || j.setAttribute("d", Z), (N = R.current) == null || N.setAttribute("d", Z), !0);
  }, K = () => {
    if (I.current = 0, S.current)
      return;
    const z = () => {
      if (I.current = X() ? 0 : I.current + 1, I.current > 8) {
        S.current = 0;
        return;
      }
      S.current = requestAnimationFrame(z);
    };
    S.current = requestAnimationFrame(z);
  };
  h.current = K, d.useLayoutEffect(() => (X(), K(), () => {
    cancelAnimationFrame(S.current), S.current = 0;
  }), [n]);
  const $ = d.useRef(null), M = d.useRef(null), O = d.useRef(!1), P = (z) => {
    g.current = z;
    const { ref: W } = i;
    typeof W == "function" ? W(z) : W && (W.current = z);
  }, oe = () => {
    Ht(l.current), Ht($.current), Ht(g.current);
  }, de = () => {
    var G;
    const z = g.current, W = l.current, U = $.current;
    if (!(!Qe(z) || !W || !U)) {
      if (oe(), ze()) {
        z.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 160,
          easing: "ease-out"
        });
        return;
      }
      M.current = null, W.animate(
        [
          { transform: `scale(${kr}, ${Fr})` },
          { transform: "none" }
        ],
        { duration: Jt.duration, easing: Jt.easing }
      ), Pr(W, [0, 1], 160, "ease-out");
      try {
        (G = f.current) == null || G.animate(
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
      U.animate(
        [
          { opacity: 0, transform: "translateX(-10px) scale(0.98)" },
          { opacity: 1, transform: "none" }
        ],
        {
          duration: Br.duration,
          delay: 60,
          easing: Br.easing,
          fill: "backwards"
        }
      );
    }
  }, me = () => {
    const z = g.current, W = l.current, U = $.current;
    if (!Qe(z) || !W || !U) {
      r == null || r();
      return;
    }
    if (oe(), ze()) {
      z.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 120,
        fill: "forwards"
      }).finished.then(() => r == null ? void 0 : r()).catch(() => {
      });
      return;
    }
    U.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 90,
      easing: "ease-in",
      fill: "forwards"
    }), Pr(W, [1, 0], 200, "ease-in"), W.animate(
      [
        { transform: "none" },
        { transform: `scale(${kr}, ${Fr})` }
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
      me();
      return;
    }
    o == null || o(), de();
  }, [e]), d.useLayoutEffect(() => {
    const z = g.current;
    if (!z)
      return;
    const W = z.getBoundingClientRect(), U = M.current;
    if (M.current = { width: W.width, height: W.height }, !O.current) {
      O.current = !0;
      return;
    }
    const G = l.current;
    !e || !U || !Qe(G) || !W.width || !W.height || ze() || (Ht(G), G.animate(
      [
        {
          transform: `scale(${U.width / W.width}, ${U.height / W.height})`
        },
        { transform: "none" }
      ],
      { duration: pe.duration, easing: pe.easing }
    ));
  }, [n]), /* @__PURE__ */ E(
    C,
    {
      ref: P,
      onMouseEnter: i.onMouseEnter,
      onMouseLeave: i.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": c,
      sx: {
        position: "relative",
        borderRadius: `${It}px`,
        p: `${xn}px`,
        // Fills the gap to the rail so the pointer can cross it
        // without leaving the flyout
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -Qt - 2,
          width: Qt + 2
        }
      },
      children: [
        /* @__PURE__ */ E(
          C,
          {
            ref: l,
            "aria-hidden": !0,
            sx: {
              position: "absolute",
              top: -Ct,
              bottom: -Ct,
              left: -Oo,
              right: -Qs,
              pointerEvents: "none",
              // The rail icon's centre: the panel is centred on it,
              // one gap plus half the rail's padding to the left
              transformOrigin: `${Oo - Xs}px 50%`,
              willChange: "transform"
            },
            children: [
              /* @__PURE__ */ E(
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
                    /* @__PURE__ */ E("defs", { children: [
                      /* @__PURE__ */ t(
                        "filter",
                        {
                          id: `${y}-shadow`,
                          x: "-20%",
                          y: "-50%",
                          width: "140%",
                          height: "200%",
                          children: /* @__PURE__ */ t("feGaussianBlur", { stdDeviation: "14" })
                        }
                      ),
                      /* @__PURE__ */ E(
                        "mask",
                        {
                          id: `${y}-outside`,
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
                    /* @__PURE__ */ t("g", { mask: `url(#${y}-outside)`, children: /* @__PURE__ */ t(
                      "path",
                      {
                        ref: v,
                        transform: "translate(0 12)",
                        fill: s ? "rgba(0, 0, 0, 0.6)" : "rgba(15, 23, 42, 0.28)",
                        filter: `url(#${y}-shadow)`
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                mt,
                {
                  ref: f,
                  isDark: s,
                  solid: a,
                  refract: !1,
                  onLight: w,
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
              /* @__PURE__ */ E(
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
                    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ E(
                      "linearGradient",
                      {
                        id: `${y}-rim`,
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
                        ref: p,
                        fill: "none",
                        stroke: s ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)",
                        strokeWidth: "1"
                      }
                    ),
                    /* @__PURE__ */ E(
                      "radialGradient",
                      {
                        ref: _,
                        id: `${y}-glint`,
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
                        stroke: `url(#${y}-glint)`,
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
        /* @__PURE__ */ t(C, { ref: $, sx: { position: "relative" }, children: m })
      ]
    }
  );
}, bn = d.forwardRef(
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
    labelColor: g,
    iconColor: f,
    isDark: p
  }, x) => {
    const _ = pt(), b = (y) => {
      const S = y.currentTarget.getBoundingClientRect();
      y.currentTarget.style.setProperty(
        "--mx",
        `${(y.clientX - S.left) / S.width * 100}%`
      ), y.currentTarget.style.setProperty(
        "--my",
        `${(y.clientY - S.top) / S.height * 100}%`
      );
    }, w = (y) => {
      const S = y.currentTarget;
      !Qe(S) || ze() || S.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.1, 0.9)", offset: 0.22 },
          { transform: "scale(0.95, 1.06)", offset: 0.5 },
          { transform: "scale(1.02, 0.99)", offset: 0.75 },
          { transform: "scale(1, 1)" }
        ],
        { duration: 560, easing: "ease-out" }
      );
    }, v = {
      opacity: 1,
      scale: "calc(1 / var(--dock-scale, 1))"
    }, R = {
      ...Vo(p, _),
      "&::before": { opacity: 1 },
      "& [data-tile-name]": v
    };
    return /* @__PURE__ */ E(
      Je,
      {
        ref: x,
        role: "menuitem",
        tabIndex: i,
        "aria-current": n ? "page" : void 0,
        "data-testid": `sidebar-subitem-${e.text}`,
        "data-active": n ? "true" : "false",
        onClick: s,
        onKeyDown: a,
        onFocus: c,
        onPointerMove: b,
        onMouseEnter: w,
        onPointerEnter: (y) => l(y.pointerType),
        disableRipple: !0,
        sx: {
          position: "relative",
          flexShrink: 0,
          width: Ye,
          height: Ye,
          borderRadius: `${Hs}px`,
          color: n ? m : g,
          bgcolor: n ? h : "transparent",
          // The current page is tinted glass, not a flat fill
          ...n ? Ot(h, p) : {},
          transition: `translate ${pe.duration}ms ${pe.easing}, scale ${pe.duration}ms ${pe.easing}, background 160ms ease, box-shadow 160ms ease`,
          // Wells up into place, each after the one before
          animation: `${Cs} ${Jt.duration}ms ${Jt.easing} both`,
          animationDelay: `${Ks + r * js}ms`,
          "& .MuiSvgIcon-root": {
            fontSize: 22,
            color: n ? m : f
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
          } : R,
          "&:active": { transform: "scale(0.9)" },
          "&.Mui-focusVisible": {
            ...n ? {} : R,
            "& [data-tile-name]": v,
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
          /* @__PURE__ */ t(C, { sx: { position: "relative", display: "flex" }, children: o }),
          /* @__PURE__ */ t(
            C,
            {
              component: "span",
              "data-tile-name": !0,
              sx: {
                ...Xo(p),
                position: "absolute",
                top: "100%",
                left: "50%",
                translate: "-50% 8px",
                transformOrigin: "top center",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: 0,
                scale: "calc(0.6 / var(--dock-scale, 1))",
                transition: `opacity 140ms ease, scale ${pe.duration}ms ${pe.easing}`,
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
bn.displayName = "FlyoutTile";
const si = 100, ii = 250, ai = (e) => {
  const [o, r] = d.useState(null), n = d.useRef(o);
  n.current = o;
  const i = d.useRef(/* @__PURE__ */ new Map()), s = d.useRef(null), a = d.useRef(void 0), c = d.useRef(void 0), l = () => {
    clearTimeout(a.current), a.current = void 0;
  }, h = () => {
    clearTimeout(c.current), c.current = void 0;
  }, m = (w, v, R = !1) => {
    l(), h(), r({ key: w, pinned: v, focusFirst: R });
  }, g = d.useCallback((w = !1) => {
    var R, y;
    l(), h();
    const v = (R = n.current) == null ? void 0 : R.key;
    r(null), w && v && ((y = i.current.get(v)) == null || y.focus());
  }, []), f = () => {
    l(), !(!n.current || n.current.pinned) && (h(), c.current = setTimeout(() => g(), ii));
  };
  d.useEffect(() => {
    e || g();
  }, [e, g]), d.useEffect(
    () => () => {
      l(), h();
    },
    []
  );
  const p = o !== null;
  return d.useEffect(() => {
    if (!p)
      return;
    const w = (y) => {
      var I;
      const S = y;
      return S ? (I = s.current) != null && I.contains(S) ? !0 : [...i.current.values()].some((T) => T.contains(S)) : !1;
    }, v = (y) => {
      w(y.target) || g();
    }, R = (y) => {
      var S;
      y.key === "Escape" && g(
        !!((S = s.current) != null && S.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", R), () => {
      document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", R);
    };
  }, [p, g]), {
    state: o,
    close: g,
    triggerProps: (w) => ({
      ref: (v) => {
        v ? i.current.set(w, v) : i.current.delete(w);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        h();
        const v = n.current;
        if (v) {
          v.key !== w && m(w, v.pinned);
          return;
        }
        l(), a.current = setTimeout(
          () => m(w, !1),
          si
        );
      },
      onMouseLeave: f,
      onClick: (v) => {
        if (v.detail === 0) {
          m(w, !0, !0);
          return;
        }
        const R = n.current;
        (R == null ? void 0 : R.key) === w && R.pinned ? g() : m(w, !0);
      },
      onKeyDown: (v) => {
        v.key === "ArrowRight" && (v.preventDefault(), m(w, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: h,
      onMouseLeave: f
    },
    onRailLeafEnter: () => {
      l(), n.current && !n.current.pinned && g();
    },
    getTrigger: (w) => i.current.get(w) ?? null
  };
}, ci = 264, li = 72, zr = 64, Ut = {
  "&:focus, &:focus-visible": { outline: "none" }
}, di = 16, ui = 14, fi = 4, hi = 2.5, Gr = "0.7rem", Hr = 22, Ur = Re(zo), st = ({ text: e, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: i }) => {
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
    Ee,
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
}, pi = ({
  open: e,
  size: o = di
}) => e ? /* @__PURE__ */ t(Zn, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(qn, { sx: { fontSize: o, opacity: 0.75 } }), Xr = ({ open: e }) => /* @__PURE__ */ t(
  Qn,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), Xt = 600, To = ({
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
  headerForegroundColor: g,
  brandColor: f,
  activeAccentColor: p = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: _,
  foregroundColor: b,
  surfaceBackgroundColor: w,
  collapsed: v = !1,
  expandedWidth: R = ci,
  collapsedWidth: y = li,
  showLabels: S = !1,
  topInsetPx: I = 0,
  topContent: T,
  footer: X,
  submenuMode: K = "inline"
}) => {
  const $ = Fe(), M = $.palette.mode === "dark", O = K === "flyout" && v && !S, P = ai(O), oe = d.useRef(null), de = Ds(O, M), me = Ns({
    enabled: O,
    isDark: M,
    color: p,
    containerRef: oe
  }), { close: z } = P;
  d.useEffect(() => {
    z();
  }, [r, z]);
  const [W, U] = d.useState(
    {}
  ), G = _ ?? Io(p), Z = {
    bgcolor: p,
    color: G,
    "& .MuiListItemIcon-root": { color: G }
  }, D = {
    bgcolor: p,
    color: G,
    borderRadius: "8px"
  }, L = x ?? qt(p), j = w ?? (M ? $.palette.background.paper : "#ffffff"), N = b ?? (M ? "text.primary" : p), V = m ?? j, Q = g ?? (m ? Io(V) : b ?? (M ? $.palette.text.primary : p)), Ge = qt(Q), fe = (u) => {
    n == null || n(u);
  }, Oe = (u, F) => {
    U((B) => ({ ...B, [u]: !F }));
  }, ge = (u, F) => W[F] ?? je(u, r), xe = (u, F, B) => ({
    color: u ? G : N,
    bgcolor: u ? p : "transparent",
    "& .MuiListItemIcon-root": {
      color: u ? G : N,
      minWidth: B
    },
    "&:hover": u || S ? Z : { bgcolor: F }
  }), ue = {
    "&.Mui-selected": {
      bgcolor: p
    },
    "&.Mui-selected:hover": Z
  }, se = (u) => {
    const F = Ne(u, r), B = /* @__PURE__ */ E(
      zt,
      {
        disabled: !u.path,
        selected: F,
        onClick: () => u.path && fe(u.path),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": F ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...u.action && { pr: 6 },
          ...u.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...xe(
            F,
            L,
            u.subtitle ? 48 : 36
          ),
          ...ue
        },
        children: [
          /* @__PURE__ */ t(we, { children: u.icon }),
          /* @__PURE__ */ t(
            ke,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                st,
                {
                  text: u.text,
                  fontWeight: Xt
                }
              ),
              secondary: u.subtitle ? /* @__PURE__ */ t(
                C,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    st,
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
      return B;
    const { action: k } = u;
    return /* @__PURE__ */ E(C, { sx: { position: "relative" }, children: [
      B,
      /* @__PURE__ */ t(Ee, { title: k.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        ve,
        {
          "aria-label": k.label,
          "data-testid": `sidebar-action-${u.text}`,
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
            borderColor: F ? "rgba(255, 255, 255, 0.35)" : L,
            color: F ? G : N,
            "&:hover": {
              bgcolor: F ? "rgba(255, 255, 255, 0.15)" : L
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: F ? G : N,
              outlineOffset: 1
            }
          },
          children: k.icon
        }
      ) })
    ] }, u.text);
  }, he = (u) => {
    const F = je(u, r), B = Ne(u, r), k = ft("", u), H = ge(u, k);
    return /* @__PURE__ */ E(
      C,
      {
        "data-testid": `sidebar-group-${u.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: F ? L : "transparent"
        },
        children: [
          /* @__PURE__ */ E(
            zt,
            {
              onClick: () => Oe(k, H),
              "data-testid": `sidebar-item-${u.text}`,
              "data-active": B ? "true" : "false",
              "aria-expanded": H,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...xe(B, L, 36)
              },
              children: [
                /* @__PURE__ */ t(we, { children: u.icon }),
                /* @__PURE__ */ t(
                  ke,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      st,
                      {
                        text: u.text,
                        fontWeight: Xt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(Xr, { open: H })
              ]
            }
          ),
          /* @__PURE__ */ t(vr, { in: H, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            C,
            {
              "data-testid": `sidebar-children-${u.text}`,
              sx: { pb: 0.5 },
              children: u.subitems.map(
                (J) => be(J, k, 1)
              )
            }
          ) })
        ]
      },
      u.text
    );
  }, be = (u, F, B) => {
    const k = ft(F, u), H = fi + (B - 1) * hi;
    if (ht(u)) {
      const ee = je(u, r), re = Ne(u, r), ie = ge(u, k);
      return /* @__PURE__ */ E(C, { "data-testid": `sidebar-group-${u.text}`, children: [
        /* @__PURE__ */ E(
          zt,
          {
            onClick: () => Oe(k, ie),
            "data-testid": `sidebar-subitem-${u.text}`,
            "data-active": ee ? "true" : "false",
            "aria-expanded": ie,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: H,
              ...xe(re, "action.hover", 32)
            },
            children: [
              u.icon ? /* @__PURE__ */ t(we, { children: u.icon }) : null,
              /* @__PURE__ */ t(
                ke,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    st,
                    {
                      text: u.text,
                      fontWeight: Xt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(Xr, { open: ie })
            ]
          }
        ),
        /* @__PURE__ */ t(vr, { in: ie, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(C, { "data-testid": `sidebar-children-${u.text}`, children: u.subitems.map(
          (tt) => be(tt, k, B + 1)
        ) }) })
      ] }, k);
    }
    const J = Ne(u, r);
    return /* @__PURE__ */ E(
      zt,
      {
        selected: J,
        disabled: !u.path,
        onClick: () => u.path && fe(u.path),
        "data-testid": `sidebar-subitem-${u.text}`,
        "data-active": J ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: H,
          ...xe(J, "action.hover", 32),
          ...ue
        },
        children: [
          u.icon ? /* @__PURE__ */ t(we, { children: u.icon }) : null,
          /* @__PURE__ */ t(
            ke,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                st,
                {
                  text: u.text,
                  fontWeight: Xt
                }
              )
            }
          )
        ]
      },
      k
    );
  }, Te = (u, F, B, k, H, J) => {
    const ee = !H, re = /* @__PURE__ */ E(
      ve,
      {
        "aria-label": F,
        disabled: ee,
        onClick: H,
        onMouseEnter: O ? P.onRailLeafEnter : void 0,
        ...O ? { [Zt]: "" } : {},
        "data-testid": (J == null ? void 0 : J.testId) ?? `sidebar-item-${F}`,
        "data-active": k ? "true" : "false",
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
          color: k ? G : N,
          bgcolor: k ? p : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Hr
          },
          "&:hover": D,
          ...Ut
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: k ? G : N,
          bgcolor: k ? p : "transparent",
          borderRadius: k ? "8px" : "50%",
          "&:hover": {
            bgcolor: k ? p : J != null && J.insideGroup ? "action.hover" : L,
            borderRadius: "8px"
          },
          ...Ut,
          ...O ? at(k) : {}
        },
        children: [
          B,
          S ? /* @__PURE__ */ t(
            st,
            {
              text: F,
              variant: "caption",
              center: !0,
              fontSize: Gr
            }
          ) : null
        ]
      }
    );
    return S ? ee ? /* @__PURE__ */ t("span", { children: re }, u) : /* @__PURE__ */ t(d.Fragment, { children: re }, u) : /* @__PURE__ */ t(
      Ee,
      {
        title: F,
        placement: "right",
        arrow: !O,
        ...O ? Mt : {},
        children: ee ? /* @__PURE__ */ t("span", { children: re }) : re
      },
      u
    );
  }, $t = {
    position: "relative",
    '& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover': {
      bgcolor: "transparent"
    },
    // The rail's content paints above the lens, which is its first layer
    "& > :not([data-glass-lens], [data-active-glass])": {
      position: "relative"
    }
  }, at = (u) => ({
    borderRadius: `${q}px`,
    // The active item's glass is one drop that glides between items
    // (useActiveGlass); the item itself stays clear
    ...u ? { bgcolor: "transparent" } : {},
    transition: `transform ${Ur.duration}ms ${Ur.easing}, background-color 160ms ease`,
    "&:hover": { bgcolor: "transparent" },
    "&:active": { transform: "scale(0.88)", transitionDuration: "90ms" },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      "&:active": { transform: "none" }
    }
  }), Mt = {
    slotProps: {
      tooltip: { sx: Xo(M) },
      popper: {
        modifiers: [{ name: "offset", options: { offset: [0, 6] } }]
      }
    }
  }, no = (u) => {
    var H;
    const F = je(u, r), B = ft("", u), k = ((H = P.state) == null ? void 0 : H.key) === B;
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
          ve,
          {
            ...P.triggerProps(B),
            "aria-label": u.text,
            "aria-haspopup": "menu",
            "aria-expanded": k,
            "data-testid": `sidebar-item-${u.text}`,
            "data-active": F ? "true" : "false",
            "data-open": k ? "true" : "false",
            [Zt]: "",
            sx: {
              position: "relative",
              width: 44,
              height: 44,
              color: F ? G : N,
              bgcolor: F ? p : k ? L : "transparent",
              ...at(F),
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
              ...Ut
            },
            children: u.icon
          }
        )
      },
      u.text
    );
  }, et = (u) => {
    const F = je(u, r), B = Ne(u, r), k = ft("", u), H = ge(u, k), J = /* @__PURE__ */ E(
      ve,
      {
        "aria-label": u.text,
        "aria-expanded": H,
        onClick: () => Oe(k, H),
        "data-testid": `sidebar-item-${u.text}`,
        "data-active": B ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: S ? 0.25 : 0,
          width: S ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...S ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: B ? G : N,
          bgcolor: B ? p : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": S ? { bgcolor: p, color: G } : {
            bgcolor: B ? p : "transparent"
          },
          ...Ut
        },
        children: [
          S ? /* @__PURE__ */ t(
            C,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Hr
                }
              },
              children: u.icon
            }
          ) : u.icon,
          S ? /* @__PURE__ */ t(
            st,
            {
              text: u.text,
              variant: "caption",
              center: !0,
              fontSize: Gr
            }
          ) : null,
          /* @__PURE__ */ t(pi, { open: H, size: ui })
        ]
      }
    ), ee = S ? J : /* @__PURE__ */ t(Ee, { title: u.text, placement: "right", arrow: !0, children: J });
    return /* @__PURE__ */ E(
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
          bgcolor: F ? L : "transparent",
          ...S ? {} : { "&:hover": { bgcolor: L } }
        },
        children: [
          ee,
          H ? Go(u.subitems, u.icon).map(
            ({ sub: re, icon: ie }) => Te(
              re.path,
              re.text,
              ie,
              Ne(re, r),
              () => fe(re.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${re.text}`
              }
            )
          ) : null
        ]
      },
      u.text
    );
  }, gt = (u) => /* @__PURE__ */ t(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Te(
        u.text,
        u.subtitle ? `${u.text} · ${u.subtitle}` : u.text,
        u.icon,
        Ne(u, r),
        u.path ? () => fe(u.path) : void 0,
        { testId: `sidebar-item-${u.text}` }
      )
    },
    u.text
  ), Dt = (u) => ht(u) ? O ? no(u) : v ? et(u) : he(u) : v ? gt(u) : se(u), He = (u) => /* @__PURE__ */ t(
    Me,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: v ? "center" : "stretch"
      },
      children: u.map(Dt)
    }
  ), ct = v ? y : R, Lt = () => {
    var ee, re;
    const { state: u } = P, F = u ? [...e, ...o].find(
      (ie) => ht(ie) && ft("", ie) === u.key
    ) ?? null : null, B = F ? ((ee = oe.current) == null ? void 0 : ee.getBoundingClientRect().right) ?? y : y, k = F ? ((re = oe.current) == null ? void 0 : re.closest("[data-rail-surface]")) ?? oe.current : null, H = k == null ? void 0 : k.getBoundingClientRect(), J = k && H ? {
      left: H.left,
      top: H.top,
      width: H.width,
      height: H.height,
      radius: parseFloat(
        getComputedStyle(k).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ t(
      Zs,
      {
        group: F,
        groupKey: F ? u.key : null,
        anchor: F ? P.getTrigger(u.key) : null,
        railEdge: B,
        railShape: J,
        activePath: r,
        focusFirst: u == null ? void 0 : u.focusFirst,
        onNavigate: fe,
        onClose: P.close,
        panelProps: P.flyoutProps,
        accentColor: p,
        activeForegroundColor: G,
        solidSurface: j
      }
    );
  }, Nt = h ? /* @__PURE__ */ t(
    C,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: zr,
        minHeight: zr,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: V
      },
      children: s || a ? /* @__PURE__ */ t(
        Yt,
        {
          logo: s,
          title: v ? void 0 : a,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: f ?? Q,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, so = !h && s ? /* @__PURE__ */ t(
    C,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: 1
      },
      children: /* @__PURE__ */ t(
        Yt,
        {
          logo: s,
          appName: a || "App",
          onClick: c,
          menuOpen: l,
          color: f ?? Q,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, Ue = S ? 0.5 : v ? 1 : 1.5;
  return /* @__PURE__ */ t(ro.Provider, { value: O, children: /* @__PURE__ */ E(
    C,
    {
      ref: oe,
      ...de.containerProps,
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": v ? "true" : "false",
      "data-labeled": S ? "true" : "false",
      sx: {
        width: ct,
        minWidth: ct,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: j,
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
        ...O ? $t : {}
      },
      children: [
        de.lens,
        me.glass,
        Nt ?? so,
        T ? /* @__PURE__ */ t(
          C,
          {
            sx: {
              flexShrink: 0,
              px: Ue,
              pt: 1,
              pb: 1
            },
            children: T
          }
        ) : null,
        /* @__PURE__ */ E(
          C,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: Ue,
              pt: I && !h ? `${I}px` : 1,
              pb: 2
            },
            children: [
              He(e),
              o.length > 0 ? /* @__PURE__ */ E(C, { sx: { mt: "auto", pt: 2 }, children: [
                X ? null : /* @__PURE__ */ t(
                  Ze,
                  {
                    sx: { mb: 1, borderColor: "divider" }
                  }
                ),
                He(o)
              ] }) : null
            ]
          }
        ),
        X ? /* @__PURE__ */ t(C, { sx: { flexShrink: 0, px: Ue, pb: 1.5 }, children: /* @__PURE__ */ t(
          C,
          {
            sx: {
              borderTop: `1px solid ${Ge}`,
              pt: 1.5
            },
            children: X
          }
        ) }) : null,
        O ? Lt() : null
      ]
    }
  ) });
}, Ao = "var(--lumora-content-padding, 0px)", Kr = `calc(${Ao} * -1)`, cc = ({
  children: e,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: s = !0,
  sx: a
}) => /* @__PURE__ */ t(
  C,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Kr,
        mt: o ? Kr : 0,
        // Space below it, like any other block on the page
        mb: Ao,
        px: s ? Ao : 0,
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
), mi = ({ keys: e }) => /* @__PURE__ */ t(
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
);
class Y extends Error {
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const te = {
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
}, Pe = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, gi = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Pe.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Pe.REFRESH_TOKEN
      ), r = localStorage.getItem(Pe.USER);
      e && !localStorage.getItem(le.ACCESS_TOKEN) && localStorage.setItem(le.ACCESS_TOKEN, e), o && !localStorage.getItem(le.REFRESH_TOKEN) && localStorage.setItem(
        le.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(le.USER) && localStorage.setItem(le.USER, r), (e || o || r) && (localStorage.removeItem(Pe.ACCESS_TOKEN), localStorage.removeItem(Pe.REFRESH_TOKEN), localStorage.removeItem(Pe.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, So = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        te.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      te.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      te.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new Y(
      "Failed to access storage",
      te.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, vo = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new Y(
        "localStorage is not available",
        te.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new Y(
      "Storage quota exceeded. Please clear browser data.",
      te.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new Y(
      "Access to localStorage is denied. Please check browser settings.",
      te.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new Y(
      "Failed to write to storage",
      te.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, yn = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Tt = () => {
  try {
    gi();
    const e = So(le.ACCESS_TOKEN), o = So(le.REFRESH_TOKEN), r = So(le.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), yn(le.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: n
    };
  } catch (e) {
    throw e instanceof Y ? e : new Y(
      "Failed to retrieve authentication tokens",
      te.UNKNOWN_ERROR,
      e
    );
  }
}, xi = () => {
  try {
    const { accessToken: e, refreshToken: o } = Tt();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new Y(
        "No authentication tokens found",
        te.TOKEN_NOT_FOUND
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
        te.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Sn = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new Y(
        "At least one token must be provided",
        te.TOKEN_INVALID
      );
    return e && vo(le.ACCESS_TOKEN, e), o && vo(le.REFRESH_TOKEN, o), r && vo(le.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof Y ? n : new Y(
        "Failed to store tokens",
        te.UNKNOWN_ERROR,
        n
      )
    };
  }
}, At = () => {
  try {
    return [
      le.ACCESS_TOKEN,
      le.REFRESH_TOKEN,
      le.USER,
      // Also clear legacy keys for complete cleanup
      Pe.ACCESS_TOKEN,
      Pe.REFRESH_TOKEN,
      Pe.USER
    ].map((n) => yn(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof Y ? e : new Y(
        "Failed to clear tokens",
        te.LOGOUT_FAILED,
        e
      )
    };
  }
}, bi = () => {
  try {
    const { user: e } = Tt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof Y ? e : new Y(
        "Failed to retrieve user data",
        te.UNKNOWN_ERROR,
        e
      )
    };
  }
}, lc = (e) => {
  if (!(e instanceof Y))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case te.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case te.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case te.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case te.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case te.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case te.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, $o = (e, o = "Unknown") => {
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
}, yi = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = _r.create({
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
      const { accessToken: c } = Tt();
      return c && a.headers && (a.headers.Authorization = `Bearer ${c}`), a;
    },
    (a) => Promise.reject(a)
  ), o.interceptors.response.use(
    (a) => a,
    async (a) => {
      var f;
      const c = a.config, l = (f = a.response) == null ? void 0 : f.status, h = (c == null ? void 0 : c.url) || "", m = h.includes("/auth/refresh");
      if (l !== 401 || c._retry || m)
        return Promise.reject(a);
      c._retry = !0;
      const { refreshToken: g } = Tt();
      if (!g) {
        const p = new Error(
          "No refresh token available for token refresh"
        );
        return $o(p, "AxiosClient - Token Refresh"), At(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((p, x) => {
          i.push({ resolve: p, reject: x });
        }).then((p) => {
          const {
            accessToken: x,
            refreshToken: _
          } = p;
          if (c.headers && (c.headers.Authorization = `Bearer ${x}`), h.includes("/auth/logout"))
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
        }).catch((p) => Promise.reject(p));
      r = !0, n = _r.post(
        `${e}/auth/refresh`,
        {
          refresh_token: g
        }
      );
      try {
        const p = await n, { accessToken: x, refreshToken: _ } = p.data;
        if (Sn(x, _, null), s(null, {
          accessToken: x,
          refreshToken: _
        }), c.headers && (c.headers.Authorization = `Bearer ${x}`), h.includes("/auth/logout"))
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
      } catch (p) {
        return $o(
          p,
          "AxiosClient - Token Refresh Failed"
        ), s(p), At(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(p);
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
}, lt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, dt = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, ut = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, vn = ln(), Ae = vn.typography.pxToRem, Si = (e) => {
  const o = e === "dark", r = [...vn.shadows];
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
      warning: o ? { light: dt[400], main: dt[500], dark: dt[700] } : { light: dt[300], main: dt[400], dark: dt[800] },
      error: o ? { light: ut[400], main: ut[500], dark: ut[700] } : { light: ut[300], main: ut[400], dark: ut[800] },
      success: o ? { light: lt[400], main: lt[500], dark: lt[700] } : { light: lt[300], main: lt[400], dark: lt[800] },
      grey: _e,
      divider: o ? it(_e[700], 0.6) : it(_e[300], 0.4),
      background: o ? { default: _e[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: _e[400] } : { primary: _e[800], secondary: _e[600] },
      action: o ? {
        hover: it(_e[600], 0.2),
        selected: it(_e[600], 0.3)
      } : {
        hover: it(_e[200], 0.2),
        selected: it(_e[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Ae(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Ae(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Ae(30), lineHeight: 1.2 },
      h4: { fontSize: Ae(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Ae(20), fontWeight: 600 },
      h6: { fontSize: Ae(18), fontWeight: 600 },
      subtitle1: { fontSize: Ae(18) },
      subtitle2: { fontSize: Ae(14), fontWeight: 500 },
      body1: { fontSize: Ae(14) },
      body2: { fontSize: Ae(14), fontWeight: 400 },
      caption: { fontSize: Ae(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, vi = async (e, o) => {
  const { accessToken: r, refreshToken: n } = Tt();
  if (r)
    return !0;
  if (n)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return Sn(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      $o(i, "TokenValidator - Refresh Failed");
    }
  return At(), o ? o() : window.location.href = "/login", !1;
}, _t = ({ size: e = 20 }) => /* @__PURE__ */ E(
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
), jr = Re(zo), We = "#09C1AE", Vt = (e, o) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${We} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), wi = (e) => ({
  ...Vt(q, "transparent"),
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${q - 2}px`,
    zIndex: 1,
    background: `${Ot(We, e, "clear").background}, ${e ? "#16202c" : "#f2fbfa"}`
  }
}), Vr = ({
  variant: e,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: s = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const c = Yo(), l = d.useContext(ro), h = Fe().palette.mode === "dark", m = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", g = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ E(
    Je,
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
        borderColor: r ? We : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: s,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${We}`,
          outlineOffset: 2
        },
        ...n && Vt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(_t, { size: 20 }),
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
        i && /* @__PURE__ */ t(mi, { keys: i })
      ]
    }
  ) : e === "sidebar-icon" && l ? /* @__PURE__ */ t(Ee, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    ve,
    {
      ...g,
      "data-variant": "sidebar-icon",
      "data-rail-keep-fill": !0,
      sx: {
        width: 44,
        height: 44,
        borderRadius: `${q}px`,
        ...Ot(We, h, "clear"),
        ...r && {
          boxShadow: `${Ot(We, h, "clear").boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
        },
        transition: `transform ${jr.duration}ms ${jr.easing}, box-shadow 200ms ease`,
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
        ...n && wi(h)
      },
      children: /* @__PURE__ */ t(_t, { size: 20 })
    }
  ) }) : e === "sidebar-icon" ? /* @__PURE__ */ t(Ee, { title: m, placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
    ve,
    {
      ...g,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? We : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Vt(8, "background.paper")
      },
      children: /* @__PURE__ */ t(_t, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(Ee, { title: m, placement: "left", children: /* @__PURE__ */ t(
    ve,
    {
      ...g,
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
        outline: r ? `2px solid ${We}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${We}` },
        ...n && Vt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(C, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(_t, { size: 26 }) })
    }
  ) });
}, Kt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ t(ss, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ E(is, { children: [
  /* @__PURE__ */ t(as, { fontSize: "small" }),
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
    dn,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, wt = 24, Ei = 720, Ri = 1140, Ii = 1250, _i = ({
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
    const x = (_) => {
      _.key === "Escape" && h();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [e, h]);
  const m = r === "docked", g = wt + a;
  let f;
  c ? f = {
    top: 0,
    left: 0,
    right: 0,
    bottom: l,
    borderRadius: 0
  } : m ? f = {
    top: 0,
    right: 0,
    bottom: 0,
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : f = {
    bottom: g,
    ...n === "left" ? { left: s + wt } : { right: wt },
    width: i,
    maxWidth: `calc(100vw - ${wt * 2}px)`,
    height: `min(${Ei}px, calc(100vh - ${g + wt}px))`,
    borderRadius: "12px"
  };
  const p = /* @__PURE__ */ t(
    Fo,
    {
      role: m ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: m ? Ri : Ii,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...f
      },
      children: o
    }
  );
  return m ? /* @__PURE__ */ t(ls, { direction: "left", in: e, mountOnEnter: !0, children: p }) : /* @__PURE__ */ t(
    cs,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: p
    }
  );
}, Ci = 180, Yr = 250, Oi = "#01584F", Ti = ({
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
    Ee,
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
}, wn = (e, o, r, n) => {
  const i = e ? 48 : 44, s = e ? "text.secondary" : o, a = e ? Oi : o;
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
}, En = ({ link: e }) => /* @__PURE__ */ E(Me, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Ti,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Rn = (e, o, r) => r ? e : /* @__PURE__ */ t(Ee, { title: o, placement: "right", arrow: !0, children: e }), Ai = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: s,
  railShowTitles: a
}) => {
  const c = Fe(), [l, h] = d.useState(null), [m, g] = d.useState(!1), f = d.useRef(
    null
  ), p = d.useRef(null), x = d.useRef(null), _ = d.useRef(!1), b = d.useRef(!1), w = d.useId(), v = () => {
    f.current && (clearTimeout(f.current), f.current = null);
  }, R = () => {
    v(), f.current = setTimeout(() => {
      g(!1), f.current = null;
    }, Ci);
  }, y = () => {
    v(), g(!0);
  };
  d.useEffect(() => {
    if (!m)
      return;
    const $ = (M) => {
      var O;
      M.key === "Escape" && (g(!1), (O = x.current) == null || O.focus());
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [m]), d.useEffect(() => {
    if (!m || !b.current)
      return;
    const $ = globalThis.requestAnimationFrame(() => {
      var O;
      const M = (O = p.current) == null ? void 0 : O.querySelector(
        '[role="menuitem"]'
      );
      M == null || M.focus(), b.current = !1;
    });
    return () => cancelAnimationFrame($);
  }, [m]);
  const S = je(e, o), { activeBg: I, sx: T } = wn(
    i,
    n,
    S,
    a
  ), X = /* @__PURE__ */ t(
    ve,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        _.current || y();
      },
      onBlur: ($) => {
        var O;
        const M = $.relatedTarget;
        M && ((O = p.current) != null && O.contains(M)) || R();
      },
      onKeyDown: ($) => {
        $.key === "ArrowDown" && ($.preventDefault(), b.current = !0, y());
      },
      onClick: ($) => {
        $.preventDefault(), $.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? w : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: T,
      children: a ? /* @__PURE__ */ t(En, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ E(
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
            ref: h,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              _.current = !0, y();
            },
            onMouseLeave: () => {
              _.current = !1, R();
            },
            children: Rn(X, e.text, a)
          }
        ),
        /* @__PURE__ */ t(
          ko,
          {
            open: m && !!l,
            anchorEl: l,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: ($) => $.zIndex.modal },
            children: /* @__PURE__ */ t(
              Fo,
              {
                ref: p,
                elevation: 0,
                onMouseEnter: v,
                onMouseLeave: R,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: s,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: c.shadows[8],
                  maxWidth: Yr,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Bo,
                  {
                    id: w,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Yr
                    },
                    children: K(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function K($, M, O) {
    return $.flatMap((P) => {
      const oe = ft(M, P);
      return ht(P) ? [
        /* @__PURE__ */ t(
          ds,
          {
            disableSticky: !0,
            title: P.text,
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
            children: P.text
          },
          oe
        ),
        ...K(P.subitems, oe, O + 1)
      ] : [
        /* @__PURE__ */ E(
          qe,
          {
            role: "menuitem",
            title: P.text,
            disabled: !P.path,
            selected: Ne(P, o),
            onClick: (de) => {
              de.preventDefault(), P.path && (r == null || r(P.path)), g(!1);
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
              P.icon ? /* @__PURE__ */ t(we, { children: P.icon }) : null,
              /* @__PURE__ */ t(
                ke,
                {
                  primary: P.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          oe
        )
      ];
    });
  }
}, $i = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: i,
  railShowTitles: s
}) => {
  const a = !!(e.path && o === e.path), { sx: c } = wn(
    i,
    n,
    a,
    s
  );
  return Rn(
    /* @__PURE__ */ t(
      ve,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), e.path && (r == null || r(e.path));
        },
        disabled: !e.path,
        sx: c,
        children: s ? /* @__PURE__ */ t(En, { link: e }) : e.icon
      }
    ),
    e.text,
    s
  );
}, Mi = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), Di = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), qr = (e, o) => e.map((r, n) => /* @__PURE__ */ E(d.Fragment, { children: [
  o(r, n),
  n < e.length - 1 ? /* @__PURE__ */ t(Mi, {}) : null
] }, n)), Li = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: a = !1
}) => {
  const c = (h, m) => ht(h) ? /* @__PURE__ */ t(
    Ai,
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
    $i,
    {
      link: h,
      activePath: r,
      onLinkClick: n,
      accentColor: i,
      isSecondary: m,
      railShowTitles: a
    }
  ), l = a ? 1.25 : 1;
  return /* @__PURE__ */ E(
    Me,
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
        qr(e, (h) => c(h, !1)),
        o.length > 0 ? /* @__PURE__ */ E($e, { children: [
          /* @__PURE__ */ t(Di, {}),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(Me, { gap: l, alignItems: "center", children: qr(
            o,
            (h) => c(h, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Ni = (e) => e ? gn(e) : "USER", ki = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), Zr = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Mo = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, Zo = ({ name: e, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ t(
  fs,
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
    children: ki(e)
  }
), In = ({ name: e, role: o, avatar: r, avatarColor: n, showText: i }) => /* @__PURE__ */ E($e, { children: [
  /* @__PURE__ */ t(Zo, { name: e, avatar: r, color: n }),
  i && /* @__PURE__ */ E(
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
          ae,
          {
            variant: "body2",
            sx: { ...Zr, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            variant: "caption",
            sx: { ...Zr, opacity: 0.8, color: "inherit" },
            children: Ni(o)
          }
        )
      ]
    }
  )
] }), Qr = {
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
}, _n = ({
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
  menuItems: g = [],
  showSettings: f,
  onSettingsClick: p,
  showThemeToggler: x,
  theme: _,
  onThemeToggle: b,
  onLogout: w
}) => {
  const v = (R) => () => {
    o(), R == null || R();
  };
  return /* @__PURE__ */ E(
    hs,
    {
      anchorEl: e,
      open: !!e,
      onClose: o,
      anchorOrigin: Qr[r].anchor,
      transformOrigin: Qr[r].transform,
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
          Me,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              In,
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
        /* @__PURE__ */ t(Ze, {}),
        s && /* @__PURE__ */ E(qe, { onClick: v(c), children: [
          /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(hn, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ke, { children: "Notifications" }),
          /* @__PURE__ */ t(Mo, { count: a })
        ] }),
        g.map((R) => /* @__PURE__ */ E(qe, { onClick: v(R.onClick), children: [
          R.icon && /* @__PURE__ */ t(we, { children: R.icon }),
          /* @__PURE__ */ t(ke, { inset: !R.icon, children: R.label }),
          /* @__PURE__ */ t(Mo, { count: R.badge })
        ] }, R.key)),
        f && /* @__PURE__ */ E(qe, { onClick: v(p), children: [
          /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(us, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ke, { children: "Settings" })
        ] }),
        x && [
          /* @__PURE__ */ t(Ze, {}, "theme-divider"),
          /* @__PURE__ */ E(C, { sx: { px: 1.5, py: 1 }, children: [
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
            /* @__PURE__ */ E(
              ps,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: _,
                onChange: (R, y) => y && y !== _ && (b == null ? void 0 : b()),
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
                  /* @__PURE__ */ t(Cr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Cr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Ze, {}),
        /* @__PURE__ */ E(
          qe,
          {
            onClick: v(w),
            sx: {
              color: _ === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(we, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(fn, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ke, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Cn = 64, Fi = 2, Et = ({
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
}) => /* @__PURE__ */ E(
  Je,
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
        C,
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
), Bi = ({
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
  activeBackground: g,
  pinnedLinks: f = [],
  activePath: p,
  onLinkClick: x,
  ..._
}) => {
  const b = f.filter((T) => T.path).slice(0, Fi), [w, v] = d.useState(
    null
  ), { userName: R = "User", userAvatar: y, avatarColor: S } = _, I = { color: h, activeColor: m, activeBackground: g };
  return /* @__PURE__ */ E(
    Fo,
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
        height: `calc(${Cn}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: l,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Et,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(un, {}),
            onClick: e,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...I
          }
        ),
        b.map((T) => /* @__PURE__ */ t(
          Et,
          {
            label: T.text,
            icon: T.icon,
            onClick: () => x == null ? void 0 : x(T.path),
            active: je(T, p),
            isPage: !0,
            testId: `mobile-nav-link-${T.text}`,
            ...I
          },
          T.path
        )),
        i && /* @__PURE__ */ t(
          Et,
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
                  borderColor: a ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ t(_t, { size: 18 })
              }
            ),
            onClick: s,
            active: a,
            testId: "mobile-nav-nexa",
            ...I
          }
        ),
        r && /* @__PURE__ */ t(
          Et,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Wo, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...I
          }
        ),
        c && /* @__PURE__ */ E($e, { children: [
          /* @__PURE__ */ t(
            Et,
            {
              label: "Account",
              ariaLabel: `Account menu for ${R}`,
              icon: /* @__PURE__ */ t(
                Zo,
                {
                  name: R,
                  avatar: y,
                  color: S,
                  size: 26
                }
              ),
              onClick: (T) => v(T.currentTarget),
              active: !!w,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...I
            }
          ),
          /* @__PURE__ */ t(
            _n,
            {
              anchorEl: w,
              onClose: () => v(null),
              placement: "above-end",
              width: 280,
              ..._
            }
          )
        ] })
      ]
    }
  );
}, Wi = ({
  open: e,
  onClose: o,
  search: r
}) => /* @__PURE__ */ t(
  ms,
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
    children: /* @__PURE__ */ E(
      Me,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(C, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ t(
            dn,
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
), Pi = ({
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
  gs,
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
    children: /* @__PURE__ */ E(xs, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ t(
        ve,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: c },
          children: /* @__PURE__ */ t(un, {})
        }
      ),
      /* @__PURE__ */ t(
        Yt,
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
      h ? /* @__PURE__ */ t(C, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: h }) : null
    ] })
  }
), Qo = ({
  count: e,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: i,
  testId: s
}) => {
  const a = Yo(), c = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(
    Ee,
    {
      title: c,
      placement: i,
      arrow: !0,
      ...a,
      children: /* @__PURE__ */ t(
        ve,
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
            pn,
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
              children: /* @__PURE__ */ t(hn, {})
            }
          )
        }
      )
    }
  );
}, On = {
  "&:focus, &:focus-visible": { outline: "none" }
}, zi = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Jr = Re(eo), en = Re(to), tn = '.MuiMenuItem-root, button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Gi = ({ mode: e, onToggle: o, accentColor: r, tint: n, glass: i = !1 }) => {
  const s = Fe().palette.mode === "dark", a = pt(), c = d.useRef(null), l = d.useRef(null), h = (f) => {
    var p;
    f !== e && (o == null || o()), (p = (f === "light" ? c : l).current) == null || p.focus();
  }, m = (f) => {
    if (!(f.key === "Tab" || f.key === "Escape"))
      switch (f.stopPropagation(), f.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          f.preventDefault(), h(e === "light" ? "dark" : "light");
          break;
        case "Home":
          f.preventDefault(), h("light");
          break;
        case "End":
          f.preventDefault(), h("dark");
          break;
      }
  }, g = (f, p, x, _) => {
    const b = e === f;
    return /* @__PURE__ */ t(
      Je,
      {
        ref: _,
        role: "radio",
        "aria-checked": b,
        "aria-label": p,
        tabIndex: b ? 0 : -1,
        onClick: () => h(f),
        "data-testid": `theme-segment-${f}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: i ? `${q}px` : "999px",
          // White on dark: the accent is too dim against a dark surface
          color: b ? s ? "#ffffff" : r : "text.secondary",
          bgcolor: b ? n : "transparent",
          ...i && b ? Vo(s, a) : {},
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
            boxShadow: `0 0 0 2px ${it(r, 0.6)}`
          },
          ...On
        },
        children: /* @__PURE__ */ t(x, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ E(
    Me,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: m,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: i ? `${q}px` : "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        g("light", "Light", ys, c),
        g("dark", "Dark", bs, l)
      ]
    }
  );
}, Hi = ({
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
  theme: g,
  onThemeToggle: f,
  onProfileClick: p,
  onLinkClick: x,
  menuItems: _ = [],
  onLogout: b,
  glass: w = !1
}) => {
  const v = Fe(), R = v.palette.mode === "dark", y = d.useRef(null), S = qo({
    enabled: w,
    isDark: R,
    selector: tn,
    radius: q
  }), [I, T] = d.useState(null);
  d.useEffect(() => {
    if (!I || typeof ResizeObserver > "u")
      return;
    const O = new ResizeObserver(() => {
      var P;
      (P = y.current) == null || P.updatePosition();
    });
    return O.observe(I), () => O.disconnect();
  }, [I]);
  const X = (O) => {
    r(), O == null || O();
  }, K = (O) => {
    r(), O.onClick ? O.onClick() : O.path && (x == null || x(O.path));
  }, $ = {
    borderRadius: w ? `${q}px` : "8px",
    py: 1,
    gap: 0.5
  }, M = /* @__PURE__ */ E(Me, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ E(C, { sx: { minWidth: 0, flex: 1 }, children: [
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
      p ? /* @__PURE__ */ t(
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
            color: R ? "#ffffff" : l,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    Po,
    {
      open: e,
      anchorEl: o,
      onClose: r,
      action: y,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      ...w ? {
        slots: { transition: No },
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
      children: /* @__PURE__ */ E(
        C,
        {
          "data-testid": "account-menu",
          "data-glass": w ? "true" : void 0,
          sx: w ? {
            position: "relative",
            width: n,
            minWidth: n,
            borderRadius: `${q}px`,
            // The rows give up their own hover fill: one drop of glass
            // (the lens) glides behind whichever is hovered
            [`& :is(${tn}):is(:hover, .Mui-focusVisible)`]: { bgcolor: "transparent" }
          } : { ...zi, width: n, minWidth: n },
          children: [
            w ? /* @__PURE__ */ t(
              mt,
              {
                isDark: R,
                solid: v.palette.background.paper,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "bottom left",
                  animation: `${Ko} ${Jr.duration}ms ${Jr.easing} both`,
                  [Ce]: { animation: "none" }
                }
              }
            ) : null,
            /* @__PURE__ */ E(
              C,
              {
                ...S.containerProps,
                sx: w ? {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${jo} ${en.duration}ms ${en.easing} 70ms both`,
                  [Ce]: { animation: "none" }
                } : { display: "contents" },
                children: [
                  S.lens,
                  p ? /* @__PURE__ */ t(
                    Je,
                    {
                      onClick: () => X(p),
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
                        ...On
                      },
                      children: M
                    }
                  ) : /* @__PURE__ */ t(C, { "data-testid": "account-menu-header", children: M }),
                  /* @__PURE__ */ t(Ze, {}),
                  m ? /* @__PURE__ */ E(
                    C,
                    {
                      "data-testid": "menu-item-theme",
                      sx: {
                        ...$,
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
                        /* @__PURE__ */ t(we, { children: /* @__PURE__ */ t(Ss, { fontSize: "small" }) }),
                        /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: "Theme" }),
                        /* @__PURE__ */ t(
                          Gi,
                          {
                            glass: w,
                            mode: g,
                            onToggle: f,
                            accentColor: l,
                            tint: h
                          }
                        )
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ E(
                    Bo,
                    {
                      autoFocusItem: e,
                      sx: { px: 1, pt: m ? 0 : 0.5, pb: 0.5 },
                      children: [
                        _.map((O) => /* @__PURE__ */ E(
                          qe,
                          {
                            onClick: () => K(O),
                            "data-testid": `menu-item-${O.key}`,
                            sx: $,
                            children: [
                              /* @__PURE__ */ t(we, { children: O.icon }),
                              /* @__PURE__ */ t(ae, { sx: { flex: 1 }, children: O.label }),
                              /* @__PURE__ */ t(Mo, { count: O.badge })
                            ]
                          },
                          O.key
                        )),
                        b ? /* @__PURE__ */ t(Ze, { component: "li", sx: { my: 0.5 } }) : null,
                        b ? /* @__PURE__ */ E(
                          qe,
                          {
                            onClick: () => X(b),
                            "data-testid": "menu-item-logout",
                            sx: {
                              ...$,
                              color: R ? "error.light" : "error.main"
                            },
                            children: [
                              /* @__PURE__ */ t(we, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(fn, { fontSize: "small" }) }),
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
}, Ui = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Xi = ({
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
  activeAccentColor: g = "#01584f",
  groupAccentColor: f,
  activeForegroundColor: p,
  foregroundColor: x,
  surfaceBackgroundColor: _,
  collapsed: b,
  expandedWidth: w,
  collapsedWidth: v,
  topContent: R,
  submenuMode: y,
  color: S,
  hoverColor: I,
  avatarColor: T,
  showProfile: X = !0,
  userName: K = "User",
  userEmail: $,
  userRole: M,
  userAvatar: O,
  showNotifications: P = !0,
  notificationCount: oe = 0,
  onNotificationsClick: de,
  whatsNewCount: me = 0,
  onProfileClick: z,
  menuItems: W,
  onLogout: U,
  theme: G = "light",
  showThemeToggler: Z = !0,
  onThemeToggle: D
}) => {
  const L = Fe(), j = L.palette.mode === "dark", N = _ ?? (j ? L.palette.background.paper : "#ffffff"), V = S ?? x ?? (j ? L.palette.text.primary : g), Q = I ?? f ?? qt(g), Ge = T ?? g, fe = d.useRef(null), [Oe, ge] = d.useState(!1), xe = M ? gn(M) : void 0, ue = (at) => /* @__PURE__ */ t(
    Zo,
    {
      name: K,
      avatar: O,
      color: Ge,
      size: at
    }
  ), se = oe + me, he = P ? /* @__PURE__ */ t(
    Qo,
    {
      count: se,
      onClick: de,
      color: V,
      hoverColor: Q,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, be = X ? /* @__PURE__ */ E(
    Je,
    {
      ref: fe,
      onClick: () => ge(!0),
      "aria-haspopup": "menu",
      "aria-expanded": Oe,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: b ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: Oe ? Q : "transparent",
        "&:hover": { bgcolor: Q },
        ...Ui
      },
      children: [
        b && P ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            pn,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !se,
              children: ue(36)
            }
          )
        ) : ue(b ? 36 : 40),
        b ? null : /* @__PURE__ */ E(C, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: V, lineHeight: 1.3 },
              children: K
            }
          ),
          xe ? /* @__PURE__ */ t(
            ae,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: V,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: xe
            }
          ) : null
        ] })
      ]
    }
  ) : null, Te = !!he && (!b || !be);
  return /* @__PURE__ */ E(
    C,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": b ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          To,
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
            activeAccentColor: g,
            groupAccentColor: f,
            activeForegroundColor: p,
            foregroundColor: x,
            surfaceBackgroundColor: N,
            collapsed: b,
            expandedWidth: w,
            collapsedWidth: v,
            topContent: R,
            footer: be || Te ? /* @__PURE__ */ E(
              Me,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  be,
                  Te ? he : null
                ]
              }
            ) : void 0,
            submenuMode: y
          }
        ),
        X ? /* @__PURE__ */ t(
          Hi,
          {
            open: Oe,
            anchorEl: fe.current,
            onClose: () => ge(!1),
            width: Math.max(w - 16, 240),
            renderAvatar: ue,
            userName: K,
            userEmail: $,
            roleLabel: xe,
            accentColor: g,
            tint: Q,
            showThemeToggler: Z,
            theme: G,
            onThemeToggle: D,
            onProfileClick: z,
            onLinkClick: n,
            menuItems: W,
            onLogout: U,
            glass: y === "flyout"
          }
        ) : null
      ]
    }
  );
}, on = Re(eo), rn = Re(to), nn = 260, Ki = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden"
}, ji = ({
  anchorEl: e,
  onClose: o,
  platforms: r,
  currentKey: n,
  onSelect: i,
  accentColor: s,
  glass: a = !1
}) => {
  const c = Fe(), l = c.palette.mode === "dark", h = !!e, m = qo({
    enabled: a,
    isDark: l,
    selector: ".MuiMenuItem-root",
    radius: q
  }), g = /* @__PURE__ */ t(
    Bo,
    {
      autoFocusItem: h,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      sx: { position: "relative", p: 1, outline: "none" },
      children: r.map((f) => {
        const p = f.key === n, x = f.accentColor ?? s;
        return /* @__PURE__ */ E(
          qe,
          {
            selected: p,
            onClick: () => i(f),
            "data-testid": `platform-item-${f.key}`,
            sx: {
              borderRadius: a ? `${q}px` : "8px",
              py: 1,
              "&:focus, &:focus-visible": { outline: "none" },
              // Glass: the tick marks the current platform and the
              // lens is the only hover fill
              ...a && {
                "&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible": { bgcolor: "transparent" }
              }
            },
            children: [
              /* @__PURE__ */ t(we, { sx: { minWidth: 32 }, children: /* @__PURE__ */ t(
                C,
                {
                  "aria-hidden": !0,
                  sx: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: x,
                    boxShadow: a ? `0 0 0 3px ${l ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
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
              p ? /* @__PURE__ */ t(
                vs,
                {
                  fontSize: "small",
                  "data-testid": "platform-current",
                  sx: { ml: 1.5, color: x }
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
    Po,
    {
      open: h,
      anchorEl: e,
      onClose: o,
      onClick: (f) => f.stopPropagation(),
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...a ? {
        slots: { transition: No },
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
          "data-glass": a ? "true" : void 0,
          sx: a ? {
            position: "relative",
            minWidth: nn,
            borderRadius: `${q}px`
          } : { ...Ki, minWidth: nn },
          children: a ? /* @__PURE__ */ E($e, { children: [
            /* @__PURE__ */ t(
              mt,
              {
                isDark: l,
                solid: c.palette.background.paper,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  transformOrigin: "top left",
                  animation: `${Ko} ${on.duration}ms ${on.easing} both`,
                  [Ce]: { animation: "none" }
                }
              }
            ),
            /* @__PURE__ */ E(
              C,
              {
                ...m.containerProps,
                sx: {
                  position: "relative",
                  borderRadius: "inherit",
                  overflow: "hidden",
                  animation: `${jo} ${rn.duration}ms ${rn.easing} 70ms both`,
                  [Ce]: { animation: "none" }
                },
                children: [
                  m.lens,
                  g
                ]
              }
            )
          ] }) : g
        }
      )
    }
  );
}, Vi = ({ children: e, anchorEl: o, ...r }) => {
  const n = d.useRef(null), i = !!(o && n.current && o.contains(n.current));
  return /* @__PURE__ */ E(
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
          ji,
          {
            ...r,
            anchorEl: i ? o : null
          }
        )
      ]
    }
  );
}, Yi = ({
  compact: e,
  color: o,
  hoverColor: r,
  showProfile: n,
  whatsNewCount: i = 0,
  ...s
}) => {
  var R;
  const {
    avatarColor: a,
    showNotifications: c,
    notificationCount: l,
    onNotificationsClick: h,
    userName: m = "User",
    userRole: g,
    userAvatar: f
  } = s, p = d.useRef(null), [x, _] = d.useState(
    null
  ), b = !!x, w = d.useRef(e);
  if (d.useEffect(() => {
    e && !w.current && _(null), w.current = e;
  }, [e]), !c && !n)
    return null;
  const v = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ E($e, { children: [
    /* @__PURE__ */ E(
      Me,
      {
        ref: p,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Ee,
            {
              title: e ? m : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                Je,
                {
                  onClick: () => _(p.current),
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
                    ...v
                  },
                  children: /* @__PURE__ */ t(
                    In,
                    {
                      name: m,
                      role: g,
                      avatar: f,
                      avatarColor: a,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          c && /* @__PURE__ */ t(
            Qo,
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
      _n,
      {
        anchorEl: x,
        onClose: () => _(null),
        placement: e ? "beside" : "above",
        width: e || (R = p.current) == null ? void 0 : R.clientWidth,
        ...s
      }
    )
  ] });
}, qi = 120, Zi = 300, sn = Re(eo), an = Re(to), Qi = (e) => {
  var o;
  return ((o = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : o.value) ?? "";
}, Ji = 'input, textarea, [contenteditable="true"]', Do = (e) => {
  var o;
  (o = e == null ? void 0 : e.querySelector(Ji)) == null || o.focus();
}, ea = ({
  search: e,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: s,
  hoverColor: a
}) => {
  const c = Yo(), l = d.useContext(ro), h = d.useRef(null), [m, g] = d.useState(null);
  return d.useEffect(() => {
    o === "full" && n && (Do(h.current), i == null || i());
  }, [o, n, i]), o === "full" ? /* @__PURE__ */ t(
    C,
    {
      ref: h,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : o === "popover" && l ? /* @__PURE__ */ t(
    ta,
    {
      search: e,
      color: s,
      railTooltip: c
    }
  ) : /* @__PURE__ */ E(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Ee, { title: "Search", placement: "right", arrow: !0, ...c, children: /* @__PURE__ */ t(
          ve,
          {
            "aria-label": "Search",
            onClick: (f) => o === "expand" ? r == null ? void 0 : r() : g(f.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: s,
              borderRadius: "8px",
              "&:hover": { bgcolor: a }
            },
            children: /* @__PURE__ */ t(Wo, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Po,
          {
            open: !!m,
            anchorEl: m,
            onClose: () => g(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (f) => Do(f)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, ta = ({ search: e, color: o, railTooltip: r }) => {
  const n = Fe().palette.mode === "dark";
  $s(n, _o(o, n ? 0.3 : 0.35));
  const i = `rgb(${pt()})`, s = {
    "& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root": {
      borderRadius: `${q}px`,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: i
      }
    },
    "& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined": {
      borderRadius: `${q}px`,
      "&.Mui-focusVisible": { borderColor: i }
    }
  }, a = d.useRef(null), c = d.useRef(null), [l, h] = d.useState(!1), m = d.useRef(!1), g = d.useRef(void 0), f = d.useRef(void 0), p = () => {
    clearTimeout(g.current), clearTimeout(f.current);
  }, x = d.useCallback(() => {
    p(), m.current = !1, h(!1);
  }, []), _ = () => {
    clearTimeout(f.current), l || (clearTimeout(g.current), g.current = setTimeout(
      () => h(!0),
      qi
    ));
  }, b = () => {
    clearTimeout(g.current), clearTimeout(f.current), f.current = setTimeout(() => {
      !m.current && !Qi(c.current) && h(!1);
    }, Zi);
  };
  return d.useEffect(() => p, []), d.useEffect(() => {
    if (!l)
      return;
    const w = setTimeout(() => Do(c.current)), v = (y) => {
      var I, T;
      const S = y.target;
      !((I = c.current) != null && I.contains(S)) && !((T = a.current) != null && T.contains(S)) && x();
    }, R = (y) => {
      var S;
      y.key === "Escape" && (x(), (S = a.current) == null || S.focus());
    };
    return document.addEventListener("pointerdown", v), document.addEventListener("keydown", R), () => {
      clearTimeout(w), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", R);
    };
  }, [l, x]), /* @__PURE__ */ E(
    C,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(
          Ee,
          {
            title: l ? "" : "Search",
            placement: "right",
            arrow: !0,
            ...r,
            children: /* @__PURE__ */ t(
              ve,
              {
                ref: a,
                "aria-label": "Search",
                "aria-expanded": l,
                onMouseEnter: _,
                onMouseLeave: b,
                onClick: () => {
                  p(), m.current = !0, h(!0);
                },
                sx: {
                  width: 44,
                  height: 44,
                  color: o,
                  borderRadius: `${q}px`
                },
                children: /* @__PURE__ */ t(Wo, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          ko,
          {
            open: l,
            anchorEl: a.current,
            placement: "right",
            modifiers: [
              { name: "offset", options: { offset: [0, 14] } },
              { name: "preventOverflow", options: { padding: 8 } }
            ],
            sx: { zIndex: 1300 },
            children: /* @__PURE__ */ E(
              C,
              {
                ref: c,
                "data-testid": "sidebar-search-card",
                onMouseEnter: _,
                onMouseLeave: b,
                sx: {
                  position: "relative",
                  width: 360,
                  p: 1.25,
                  borderRadius: `${q}px`
                },
                children: [
                  /* @__PURE__ */ t(
                    mt,
                    {
                      isDark: n,
                      solid: n ? "#1e2430" : "#ffffff",
                      sx: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        transformOrigin: "left center",
                        animation: `${Ko} ${sn.duration}ms ${sn.easing} both`,
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
                        ...s,
                        animation: `${jo} ${an.duration}ms ${an.easing} 60ms both`,
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
}, oa = 100, ra = () => {
  const e = d.useRef(null), o = d.useRef(void 0), r = d.useRef(/* @__PURE__ */ new WeakSet()), [n, i] = d.useState(!1), [s, a] = d.useState(!1), c = () => {
    clearTimeout(o.current), o.current = void 0;
  };
  return d.useEffect(() => {
    const h = (g) => {
      r.current.has(g) || (c(), i(!1));
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
      var g;
      (g = e.current) != null && g.contains(m.target) || a(!1);
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
        }, oa));
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
}, na = 100, cn = 80, wo = 56, sa = 300, Eo = 288, Rt = 72, Ro = 68, jt = 8, ia = q, aa = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", ca = 68, la = { xs: 2, md: 5 }, da = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), ua = (e, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, i]) => [n, r(i)])
  ) : r(e);
}, dc = ({
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
  onBrandClick: g,
  searchComponent: f,
  brandColor: p,
  contentPadding: x = la,
  userMenuItems: _,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: w,
  groupAccentColor: v,
  activeSidebarForegroundColor: R,
  enableRefreshToken: y = !1,
  activePath: S,
  onLinkClick: I,
  showProfile: T = !0,
  userName: X,
  userRole: K,
  userAvatar: $,
  userEmail: M,
  onLogout: O,
  showSettings: P = !0,
  onSettingsClick: oe,
  onProfileClick: de,
  showNotifications: me = !0,
  notificationCount: z = 0,
  NotificationSidebarContent: W,
  whatsNewCount: U = 0,
  onNotificationsClick: G,
  platforms: Z,
  currentPlatformKey: D,
  onPlatformSelect: L,
  onVerify: j,
  alertProps: N,
  style: V,
  sidebarStyles: Q,
  contentStyles: Ge,
  accentColor: fe,
  sidebarAccentColor: Oe,
  sidebarForegroundColor: ge,
  contentBackgroundColor: xe,
  theme: ue = "light",
  showThemeToggler: se = !1,
  onThemeToggle: he,
  GlobalChatSidebar: be,
  useChatSidebar: Te,
  chatPanelMode: $t = "docked",
  chatPanelPosition: at = "right",
  chatPanelWidth: Mt = 420,
  onChatClose: no,
  showAssistant: et = !1,
  assistantPlacement: gt = "sidebar",
  assistantShortcut: Dt = "j",
  onAssistantClick: He,
  assistantActive: ct = !1,
  assistantBusy: Lt = !1,
  customNavbar: Nt,
  customNavbarProps: so,
  redirectToLogin: Ue,
  apiBaseUrl: u
}) => {
  const F = Jn(), B = es(F.breakpoints.down("md")), k = Er(
    () => ln(Si(ue)),
    [ue]
  ), H = ue === "dark", J = fe ?? "#01584f", ee = Oe ?? J, re = xe ?? (H ? "hsl(220, 35%, 9%)" : "#f2f9fc"), ie = a === "collapsible", tt = a === "panel", Tn = tt && i && !B, Xe = a === "rail-labeled", An = ie || Xe, ot = b ?? (H ? "hsl(220, 30%, 7%)" : "#ffffff"), io = w ?? ot, Be = ge ?? (H ? "#ffffff" : ee), xt = v ?? qt(Be), bt = w ? Io(io) : Be, Jo = (A) => /* @__PURE__ */ t(
    ce,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: A,
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
  ), kt = p ?? bt, [er, ao] = nt(
    null
  ), co = ((Z == null ? void 0 : Z.length) ?? 0) > 1, $n = Rr(() => ao(null), []), Mn = (A) => {
    ao(null), L ? L(A) : A.key !== D && A.url && window.location.assign(A.url);
  }, tr = (A) => co ? /* @__PURE__ */ t(
    Vi,
    {
      anchorEl: er,
      onClose: $n,
      platforms: Z,
      currentKey: D,
      onSelect: Mn,
      accentColor: J,
      glass: c === "flyout" && (ie || tt) && !B,
      children: A
    }
  ) : A, Ft = co ? (A) => ao(A.currentTarget) : g, Bt = co ? !!er : void 0, lo = tr(
    m ?? Jo(kt)
  ), Dn = tr(
    m ?? Jo(p ?? Be)
  ), uo = ra(), De = c === "flyout" && (ie || tt), Le = De || !uo.expanded, or = De ? "popover" : "expand", rr = De ? Ro : Rt, nr = De ? "transparent" : ot, sr = De && !w ? "transparent" : io, [Ln, ir] = nt(!1), Nn = Rr(() => ir(!1), []);
  let ye = 0;
  i && !B && (Xe ? ye = cn : De ? ye = Ro + 2 * jt : ie || tt ? ye = Rt : ye = na);
  const [ar, rt] = nt(!1), [cr, fo] = nt(!1), Se = B && l === "bottom-bar", lr = `calc(${Cn}px + env(safe-area-inset-bottom, 0px))`, [ho, dr] = nt({ open: !1, tab: "notifications" }), ur = () => dr((A) => ({ ...A, open: !1 })), kn = me && !!W, [Fn, Bn] = nt(!0), [Wn, Pn] = nt(!1), po = Te == null ? void 0 : Te(), fr = (po == null ? void 0 : po.isOpen) ?? !1, hr = $t === "floating" ? "floating" : "docked", zn = hr === "docked" && fr && be && !B ? Mt : 0, Wt = yo(j), pr = yo(!1), mr = Er(
    () => yi(u),
    [u]
  );
  Gt(() => {
    Wt.current = j;
  }, [j]);
  const mo = yo(He);
  mo.current = He;
  const yt = et && Dt ? Dt.toLowerCase() : null;
  Gt(() => {
    if (!yt)
      return;
    const A = (ne) => {
      (ne.metaKey || ne.ctrlKey) && !ne.altKey && !ne.shiftKey && ne.key.toLowerCase() === yt && mo.current && (ne.preventDefault(), mo.current());
    };
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [yt]);
  const gr = (A) => {
    const ne = O(A);
    ne instanceof Promise && ne.catch((Ke) => {
      console.error("Error in logout handler:", Ke);
    });
  };
  if (Gt(() => {
    (() => {
      var ne;
      try {
        const { isAuthenticated: Ke } = xi();
        if (!Ke) {
          console.log("No session found, redirecting to login"), At(), Ue();
          return;
        }
        if (!pr.current) {
          const { user: vt, error: bo } = bi();
          if (vt && !bo) {
            const Yn = {
              name: vt.name || "",
              email: vt.email || "",
              profilePicture: vt.profilePicture || "",
              role: vt.role || ""
            };
            pr.current = !0, (ne = Wt.current) == null || ne.call(Wt, Yn);
          } else
            bo && console.error("Error getting user data:", bo);
        }
        Pn(!0);
      } catch (Ke) {
        console.error("Error checking session:", Ke), At(), Ue();
      } finally {
        Bn(!1);
      }
    })();
  }, [Ue]), Gt(() => {
    y && vi(mr, Ue);
  }, [y, mr]), Fn)
    return /* @__PURE__ */ t(wr, { theme: k, children: /* @__PURE__ */ t(Co.Provider, { value: ee, children: /* @__PURE__ */ E(
      ce,
      {
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "background.default"
        },
        children: [
          /* @__PURE__ */ t(
            ts,
            {
              size: 60,
              thickness: 4,
              sx: { color: J }
            }
          ),
          /* @__PURE__ */ t(ce, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) }) });
  if (!Wn)
    return null;
  const St = f ?? (Nt ? /* @__PURE__ */ t(Nt, { ...so }) : null), Gn = (A) => {
    rt(!1), fo(!1), dr({ open: !0, tab: A });
  }, go = W && (() => Gn("notifications")), Hn = z + U, xr = {
    avatarColor: ee,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: _ == null ? void 0 : _.map(
      (A) => A.onClick || !A.path ? A : { ...A, onClick: () => I == null ? void 0 : I(A.path) }
    ),
    showNotifications: me,
    notificationCount: z,
    whatsNewCount: U,
    onNotificationsClick: go,
    showProfile: T,
    userName: X,
    userRole: K,
    userAvatar: $,
    showSettings: P,
    onSettingsClick: oe,
    showThemeToggler: se,
    theme: ue,
    onThemeToggle: he,
    onLogout: gr
  }, xo = (A) => /* @__PURE__ */ t(
    Yi,
    {
      ...xr,
      compact: A,
      color: Be,
      hoverColor: xt
    }
  ), br = yt ? [da() ? "⌘" : "Ctrl", yt.toUpperCase()] : void 0, Un = (A) => et && gt === "sidebar" ? /* @__PURE__ */ t(
    Vr,
    {
      variant: A ? "sidebar-icon" : "sidebar",
      onClick: He,
      active: ct,
      busy: Lt,
      shortcutKeys: br,
      accentColor: Be
    }
  ) : null, Xn = (A) => St ? /* @__PURE__ */ t(
    ea,
    {
      search: St,
      mode: A,
      onExpand: () => {
        uo.pin(), ir(!0);
      },
      autoFocus: Ln,
      onAutoFocused: Nn,
      color: Be,
      hoverColor: xt
    }
  ) : null, Pt = (A) => {
    const ne = Un(A !== "full"), Ke = Xn(A);
    return ne || Ke ? /* @__PURE__ */ E(
      ns,
      {
        spacing: 1.5,
        sx: { alignItems: A === "full" ? "stretch" : "center" },
        children: [
          ne,
          Ke
        ]
      }
    ) : void 0;
  }, yr = () => /* @__PURE__ */ t(
    To,
    {
      mainLinks: o,
      secondaryLinks: r,
      activePath: S,
      onLinkClick: I,
      showHeaderBar: ie,
      logo: lo,
      title: n,
      onBrandClick: Ft,
      brandMenuOpen: Bt,
      brandColor: kt,
      headerBackgroundColor: ie ? sr : void 0,
      headerForegroundColor: ie ? bt : void 0,
      activeAccentColor: ee,
      groupAccentColor: v,
      activeForegroundColor: R,
      foregroundColor: ge,
      surfaceBackgroundColor: nr,
      collapsed: Xe || Le,
      showLabels: Xe,
      expandedWidth: Eo,
      collapsedWidth: Xe ? cn : rr,
      topContent: Pt(
        Xe ? "popover" : Le ? or : "full"
      ),
      footer: xo(Xe || Le),
      submenuMode: De ? "flyout" : "inline"
    }
  ), Sr = (A) => De ? Kn(A) : jn(A), Kn = (A) => /* @__PURE__ */ t(
    ce,
    {
      component: "aside",
      sx: {
        width: ye,
        minWidth: ye,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ne) => ne.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        bgcolor: re
      },
      children: /* @__PURE__ */ E(
        ce,
        {
          "data-testid": "sidebar-hover-panel",
          "data-expanded": "false",
          "data-glass": "true",
          "data-rail-surface": "",
          sx: {
            position: "absolute",
            top: jt,
            bottom: jt,
            left: jt,
            width: Ro,
            borderRadius: `${ia}px`,
            display: "flex",
            flexDirection: "column",
            ...Q
          },
          children: [
            /* @__PURE__ */ t(
              mt,
              {
                isDark: H,
                solid: ot,
                sx: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit"
                }
              }
            ),
            /* @__PURE__ */ t(
              ce,
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
                children: A
              }
            )
          ]
        }
      )
    }
  ), jn = (A) => /* @__PURE__ */ t(
    ce,
    {
      component: "aside",
      sx: {
        width: Rt,
        minWidth: Rt,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (ne) => ne.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        ce,
        {
          ...De ? {} : uo.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Le ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Le ? Rt : Eo,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: ot,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Le ? "none" : `4px 0 24px rgba(0, 0, 0, ${H ? 0.5 : 0.12})`,
            transition: aa,
            ...Q
          },
          children: A
        }
      )
    }
  ), Vn = ua(
    x,
    F
  );
  return /* @__PURE__ */ t(wr, { theme: k, children: /* @__PURE__ */ t(Co.Provider, { value: ee, children: /* @__PURE__ */ E(
    ce,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...V
      },
      children: [
        /* @__PURE__ */ t(os, {}),
        B && /* @__PURE__ */ t(
          Pi,
          {
            height: wo,
            onMenuClick: i && !Se ? () => rt(!0) : void 0,
            appName: n,
            logo: lo,
            onBrandClick: Ft,
            brandMenuOpen: Bt,
            background: io,
            color: bt,
            brandColor: kt,
            endContent: me ? /* @__PURE__ */ t(
              Qo,
              {
                count: Hn,
                onClick: go,
                color: bt,
                hoverColor: xt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !B && Xe && /* @__PURE__ */ t(
          ce,
          {
            component: "aside",
            sx: {
              width: ye,
              minWidth: ye,
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
              ...Q
            },
            children: yr()
          }
        ),
        i && !B && ie && Sr(
          /* @__PURE__ */ E($e, { children: [
            yr(),
            (N == null ? void 0 : N.show) && !Le && /* @__PURE__ */ t(Kt, { ...N })
          ] })
        ),
        Tn && Sr(
          /* @__PURE__ */ E($e, { children: [
            /* @__PURE__ */ t(
              Xi,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: S,
                onLinkClick: I,
                logo: lo,
                title: n,
                onBrandClick: Ft,
                brandMenuOpen: Bt,
                brandColor: kt,
                headerBackgroundColor: sr,
                headerForegroundColor: bt,
                activeAccentColor: ee,
                groupAccentColor: v,
                activeForegroundColor: R,
                foregroundColor: ge,
                surfaceBackgroundColor: nr,
                collapsed: Le,
                expandedWidth: Eo,
                collapsedWidth: rr,
                topContent: Pt(
                  Le ? or : "full"
                ),
                submenuMode: De ? "flyout" : "inline",
                color: Be,
                hoverColor: xt,
                avatarColor: ee,
                showProfile: T,
                userName: X,
                userEmail: M,
                userRole: K,
                userAvatar: $,
                showNotifications: me,
                notificationCount: z,
                onNotificationsClick: kn ? go : G,
                whatsNewCount: U,
                onProfileClick: de,
                menuItems: _,
                onLogout: gr,
                theme: ue,
                showThemeToggler: se,
                onThemeToggle: he
              }
            ),
            (N == null ? void 0 : N.show) && !Le && /* @__PURE__ */ t(Kt, { ...N })
          ] })
        ),
        i && !B && !An && !tt && /* @__PURE__ */ t(
          Ir,
          {
            variant: "permanent",
            sx: {
              width: ye,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: ye,
                boxSizing: "border-box",
                bgcolor: re,
                borderRight: "none"
              },
              ...Q
            },
            children: /* @__PURE__ */ E(
              ce,
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
                    ce,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        Yt,
                        {
                          logo: Dn,
                          appName: n,
                          onClick: Ft,
                          menuOpen: Bt,
                          color: p ?? Be,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Pt("popover"),
                  /* @__PURE__ */ E(
                    ce,
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
                          Li,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: S,
                            onLinkClick: I,
                            accentColor: ee,
                            surfaceBackgroundColor: re,
                            railShowTitles: s
                          }
                        ),
                        (N == null ? void 0 : N.show) && /* @__PURE__ */ t(Kt, { ...N })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(ce, { sx: { py: 1.5 }, children: xo(!0) })
                ]
              }
            )
          }
        ),
        i && B && /* @__PURE__ */ E(
          rs,
          {
            anchor: Se ? "bottom" : "left",
            open: ar,
            onOpen: () => rt(!0),
            onClose: () => rt(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (A) => A.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: ot,
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
                ce,
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
                To,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: S,
                  onLinkClick: (A) => {
                    I == null || I(A), rt(!1);
                  },
                  onLinkAction: () => rt(!1),
                  collapsed: !1,
                  expandedWidth: Se ? "100%" : sa,
                  activeAccentColor: ee,
                  groupAccentColor: v,
                  activeForegroundColor: R,
                  foregroundColor: ge,
                  surfaceBackgroundColor: ot,
                  topInsetPx: Se ? 8 : 0,
                  topContent: Se ? void 0 : Pt("full"),
                  footer: Se ? void 0 : xo(!1)
                }
              ),
              (N == null ? void 0 : N.show) && /* @__PURE__ */ t(Kt, { ...N })
            ]
          }
        ),
        Se && St && /* @__PURE__ */ t(
          Wi,
          {
            open: cr,
            onClose: () => fo(!1),
            search: St
          }
        ),
        Se && /* @__PURE__ */ t(
          Bi,
          {
            ...xr,
            pinnedLinks: h,
            activePath: S,
            onLinkClick: I,
            onMenuClick: i ? () => rt(!0) : void 0,
            menuOpen: ar,
            onSearchClick: St ? () => fo(!0) : void 0,
            searchOpen: cr,
            showAssistant: et,
            onAssistantClick: He,
            assistantActive: ct,
            showProfile: T,
            background: ot,
            color: Be,
            activeColor: ee,
            activeBackground: xt
          }
        ),
        /* @__PURE__ */ t(
          ce,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Vn,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": B ? `${wo}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: ye ? `calc(100% - ${ye}px)` : "100%",
              mt: B ? `${wo}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Se && {
                pb: `calc(var(--lumora-content-padding) + ${lr})`
              },
              backgroundColor: re,
              ...Ge
            },
            children: e
          }
        ),
        be && /* @__PURE__ */ t(
          _i,
          {
            open: fr,
            variant: hr,
            position: at,
            width: Mt,
            sidebarWidthPx: ye,
            bottomOffsetPx: et && gt === "floating" ? ca : 0,
            fullScreen: B,
            fullScreenBottom: Se ? lr : "0px",
            onClose: no,
            children: /* @__PURE__ */ t(be, {})
          }
        ),
        et && gt === "floating" && !Se && /* @__PURE__ */ t(
          Vr,
          {
            variant: "floating",
            rightOffsetPx: zn,
            shortcutKeys: br,
            onClick: He,
            active: ct,
            busy: Lt
          }
        ),
        me && W && /* @__PURE__ */ t(
          Ir,
          {
            anchor: "right",
            open: ho.open,
            onClose: ur,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              W,
              {
                onClose: ur,
                initialTab: ho.tab
              },
              ho.tab
            )
          }
        )
      ]
    }
  ) }) });
};
export {
  te as AUTH_ERROR_CODES,
  Y as AuthError,
  To as CollapsibleSidebar,
  cc as FullBleedSection,
  mi as Kbd,
  dc as LumoraWrapper,
  At as clearAuthTokens,
  dc as default,
  lc as getAuthErrorMessage,
  Tt as getAuthTokens,
  bi as getCurrentUser,
  Si as getDesignTokens,
  xi as isAuthenticated,
  $o as logAuthError,
  Sn as storeAuthTokens
};
