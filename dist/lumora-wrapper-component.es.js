import { jsx as l, jsxs as x, Fragment as ve } from "react/jsx-runtime";
import { ChevronRightIcon as ps, ChevronUpIcon as gs, ChevronDownIcon as bs, SparklesIcon as xs, BellIcon as tr, SettingsIcon as vs, LogOutIcon as nr, MenuIcon as lr, SearchIcon as kl, SunMoonIcon as ys, SunIcon as Es, MoonIcon as Ns, CheckIcon as Ss } from "lucide-react";
import * as c from "react";
import { useState as nt, useCallback as al, useRef as xn, useEffect as Ut, useMemo as _s, useLayoutEffect as Rs } from "react";
import { clsx as Ts } from "clsx";
import { extendTailwindMerge as As } from "tailwind-merge";
import { Tooltip as Nt, Slot as Cs, Popover as Mn, DropdownMenu as Rt, Dialog as Xt } from "radix-ui";
import { createPortal as or } from "react-dom";
import vo from "axios";
import { cva as Os } from "class-variance-authority";
const $s = As({ prefix: "lw" });
function b(...e) {
  return $s(Ts(e));
}
const yo = "lw:flex lw:flex-row lw:items-center lw:gap-2 lw:min-w-0 lw:shrink-0 lw:[&_svg]:text-inherit lw:[&_svg]:fill-current", Is = ({
  logo: e,
  title: t,
  appName: n,
  onClick: o,
  color: r,
  testId: s,
  menuOpen: i
}) => {
  const a = /* @__PURE__ */ x(ve, { children: [
    t ? /* @__PURE__ */ l(
      "h6",
      {
        className: "lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap lw:text-[18px] lw:leading-none lw:font-semibold lw:uppercase",
        style: { color: r },
        children: t
      }
    ) : null,
    e
  ] });
  return o ? /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      onClick: o,
      "aria-label": i === void 0 ? `${n} home` : `${n}: switch platform`,
      ...i !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": i
      },
      "data-testid": s,
      className: b(
        yo,
        "lw:cursor-pointer lw:rounded-lg lw:px-1 lw:-mx-1 lw:outline-none lw:hover:bg-accent lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-offset-2 lw:focus-visible:outline-(--lw-brand-color)"
      ),
      style: { color: r, "--lw-brand-color": r },
      children: a
    }
  ) : /* @__PURE__ */ l("div", { "data-testid": s, className: yo, style: { color: r }, children: a });
}, Dn = Is, rr = c.createContext(void 0), ks = () => typeof document < "u" && document.documentElement.getAttribute("data-color-scheme") === "dark", Ls = (e) => {
  if (typeof MutationObserver > "u" || typeof document > "u")
    return () => {
    };
  const t = new MutationObserver(e);
  return t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["data-color-scheme"]
  }), () => t.disconnect();
}, qe = () => {
  const e = c.useContext(rr), t = c.useSyncExternalStore(
    Ls,
    ks,
    () => !1
  );
  return e ? e === "dark" : t;
}, ln = () => ({
  "data-lw-scope": "",
  "data-lw-theme": qe() ? "dark" : "light"
}), sr = c.forwardRef(({ className: e, sideOffset: t = 4, arrow: n = !1, children: o, ...r }, s) => {
  const i = ln();
  return /* @__PURE__ */ l(Nt.Portal, { children: /* @__PURE__ */ x(
    Nt.Content,
    {
      ref: s,
      ...i,
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: b(
        "lw:z-[1500] lw:max-w-xs lw:rounded-md lw:bg-tooltip lw:px-2 lw:py-1 lw:text-xs lw:font-medium lw:text-tooltip-foreground lw:animate-in lw:fade-in-0 lw:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95",
        e
      ),
      ...r,
      children: [
        o,
        n ? /* @__PURE__ */ l(
          Nt.Arrow,
          {
            className: "lw:fill-tooltip",
            width: 10,
            height: 5
          }
        ) : null
      ]
    }
  ) });
});
sr.displayName = "TooltipContent";
function je({
  title: e,
  children: t,
  side: n = "top",
  align: o,
  sideOffset: r,
  open: s,
  onOpenChange: i,
  delayDuration: a = 300,
  contentClassName: u,
  contentStyle: d,
  disabled: m = !1,
  arrow: p = !1,
  disableHoverableContent: g = !0
}) {
  const h = e == null || e === "" || e === !1;
  return /* @__PURE__ */ l(
    Nt.Provider,
    {
      delayDuration: a,
      disableHoverableContent: g,
      children: /* @__PURE__ */ x(
        Nt.Root,
        {
          open: m || h ? !1 : s,
          onOpenChange: i,
          children: [
            /* @__PURE__ */ l(Nt.Trigger, { asChild: !0, children: t }),
            h ? null : /* @__PURE__ */ l(
              sr,
              {
                side: n,
                align: o,
                sideOffset: r,
                className: u,
                style: d,
                arrow: p,
                children: e
              }
            )
          ]
        }
      )
    }
  );
}
const il = (e, t) => (n) => {
  e == null || e(n), t(n);
}, Ms = ({
  children: e,
  onOpenChange: t,
  ...n
}) => {
  const [o, r] = c.useState(!1), s = c.useRef(!1), i = c.useRef(!1), a = c.Children.only(e), u = c.cloneElement(a, {
    onPointerEnter: il(a.props.onPointerEnter, () => {
      s.current = !0;
    }),
    onPointerLeave: il(a.props.onPointerLeave, () => {
      s.current = !1, i.current = !1;
    }),
    onClickCapture: il(a.props.onClickCapture, () => {
      i.current = !0, r(!1);
    })
  });
  return /* @__PURE__ */ l(
    je,
    {
      ...n,
      open: o,
      onOpenChange: (d) => {
        d && (!s.current || i.current) || (r(d), t == null || t(d));
      },
      children: u
    }
  );
}, On = Ms, Nl = !1, Tt = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, St = (e) => {
  var t;
  return !!((t = e.subitems) != null && t.length);
}, yt = (e, t) => e ? `${e}/${t.text}` : t.text, st = (e, t) => {
  var n;
  return t ? e.path && t === e.path ? !0 : ((n = e.subitems) == null ? void 0 : n.some((o) => st(o, t))) ?? !1 : !1;
}, Xe = (e, t) => !!(t && e.path === t), Ll = (e, t) => (e ?? []).flatMap((n) => {
  const o = n.icon ?? t;
  return St(n) ? Ll(n.subitems, o) : n.path ? [{ sub: n, icon: o }] : [];
}), Sl = (e) => {
  const t = zn(e);
  if (!t)
    return "#ffffff";
  const [n, o, r] = t.map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * n + 0.7152 * o + 0.0722 * r > 0.5 ? "#0b1f1c" : "#ffffff";
}, Vt = (e) => {
  const t = zn(e);
  if (!t)
    return "rgba(1, 88, 79, 0.12)";
  const [n, o, r] = t;
  return `rgba(${n}, ${o}, ${r}, 0.14)`;
}, at = (e, t) => {
  const n = zn(e);
  return n ? `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t})` : e;
}, zn = (e) => {
  let t = e.trim().replace(/^#/, "");
  if (t.length === 3 && (t = t.split("").map((o) => o + o).join("")), t.length !== 6 || /[^0-9a-fA-F]/.test(t))
    return null;
  const n = parseInt(t, 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}, ar = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Ml = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Ds = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Ps = "lw-tile-in", $e = "lw-motion-none", ir = "lw-motion-fade", cr = "lw-motion-fade-fast", Qe = 6, Dl = "9, 193, 174", dr = c.createContext(
  void 0
), Gn = c.createContext(
  void 0
), Pl = (e) => c.useContext(Gn) ?? e, Wn = () => {
  const e = c.useContext(dr), t = e ? zn(e) : null;
  return t ? t.join(", ") : Dl;
}, Fs = (e, t, n = Dl) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  className: "lw:relative",
  style: {
    backgroundColor: t,
    boxShadow: `${Ds(e)}, 0 0 0 1px ${Ml(e)}`
  }
}), Fl = (e, t) => ({
  className: "lw:rounded-md lw:border lw:border-solid lw:px-2.5 lw:py-1.5 lw:text-[0.8125rem] lw:leading-[1.4] lw:font-semibold",
  style: {
    color: e ? "#ffffff" : "#0b1f1c",
    backgroundColor: t ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
    borderColor: Ml(e),
    boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)"
  }
}), ur = (e) => e ? "#ffffff" : "#0b1f1c", Bl = "lw-glass-grow", zl = "lw-content-in", wr = (e, t = Dl, n = `rgba(${t}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${t}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), fr = (e, t, n = "solid") => n === "solid" ? { background: e, boxShadow: "none" } : {
  background: at(e, t ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${at(e, 0.45)}`
}, Bs = (e, t) => {
  const n = (o) => ({
    className: "lw-glass-well",
    style: {
      "--lw-well-bg": o.bg,
      "--lw-well-shadow": o.shadow,
      "--lw-well-hover-bg": o.hoverBg,
      "--lw-well-focus-bg": o.focusBg,
      "--lw-well-focus-shadow": o.focusShadow
    }
  });
  {
    const o = `inset 0 0 0 1px ${Ml(e)}`, r = e ? "rgba(255, 255, 255, 0.06)" : "#ffffff";
    return n({
      bg: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
      shadow: o,
      hoverBg: r,
      focusBg: r,
      focusShadow: `${o}, 0 0 0 3px ${t}`
    });
  }
}, zs = 100, mr = 80, $n = 56, Kt = 72, Yt = 64, Ae = 44, _l = 24, Hn = 4, rt = 8, hr = 1.4, pr = Qe, gr = { xs: 2, md: "18px" }, Gs = ["xs", "sm", "md", "lg", "xl"], Ws = 8, Eo = (e) => typeof e == "number" ? `${e * Ws}px` : e, br = (e) => typeof e == "object" ? Object.fromEntries(
  Gs.filter((t) => e[t] !== void 0).map((t) => [
    `--lw-cp-${t}`,
    Eo(e[t])
  ])
) : { "--lw-cp-xs": Eo(e) }, Un = (e, t) => e === "flyout" && (t === "collapsible" || t === "panel"), Hs = (e, t, n) => e && Un(t, n), xr = ({
  showSidebar: e,
  isMobile: t,
  sidebarVariant: n,
  sidebarSubmenu: o,
  sidebarAutoHide: r = !1
}) => !e || t ? 0 : n === "rail-labeled" ? mr : Un(o, n) ? r ? 0 : Yt + 2 * rt : n === "collapsible" || n === "panel" ? Kt : zs, Xn = (e, t) => e ?? (t ? "hsl(220, 30%, 7%)" : "#ffffff"), vr = (e, t) => e ?? (t ? "hsl(220, 35%, 9%)" : "#f2f9fc"), yr = { stiffness: 320, damping: 24 }, Er = { stiffness: 320, damping: 28 }, Gl = { stiffness: 520, damping: 20 }, Wl = { stiffness: 380, damping: 36 }, Kn = { stiffness: 260, damping: 28 }, Us = "cubic-bezier(0.32, 1.28, 0.52, 1)", Xs = 420, No = 60, Ks = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), So = /* @__PURE__ */ new Map(), Ie = ({
  stiffness: e,
  damping: t,
  mass: n = 1
}) => {
  const o = `${e}/${t}/${n}`, r = So.get(o);
  if (r)
    return r;
  if (!Ks)
    return { easing: Us, duration: Xs };
  const s = 1 / 600;
  let i = 0, a = 0, u = 0, d = 1 / No;
  const m = [0];
  for (; u < 3; ) {
    const g = (-e * (i - 1) - t * a) / n;
    if (a += g * s, i += a * s, u += s, u >= d && (m.push(i), d += 1 / No, Math.abs(i - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const p = {
    easing: `linear(${m.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return So.set(o, p), p;
}, Zt = (e) => !!(e && typeof e.animate == "function"), At = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, js = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((t) => t.cancel());
}, qs = (e, t = 1.14) => {
  if (!Zt(e) || At())
    return;
  const n = Ie(Gl);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${t})`, offset: 0.18, easing: n.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(n.duration / 0.82) }
  );
}, Ys = 1.6, Nr = 110, Jt = 110, Vs = 6, lt = Ie(Wl), Zs = (e, t = Nr) => e >= t ? 0 : (1 + Math.cos(Math.PI * e / t)) / 2, Sr = (e, t) => {
  const { offsetWidth: n, offsetHeight: o } = e;
  if (!(n > 0 && o > 0))
    return 1 / 0;
  const r = t.getBoundingClientRect(), s = r.left + t.clientLeft, i = r.top + t.clientTop, a = e.getBoundingClientRect(), u = a.left + a.width / 2, d = a.top + a.height / 2, m = Math.min(
    u - n / 2 - s,
    s + t.clientWidth - (u + n / 2)
  ), p = Math.min(
    d - o / 2 - i,
    i + t.clientHeight - (d + o / 2)
  );
  return Math.min(1 + 2 * m / n, 1 + 2 * p / o);
}, _r = (e, {
  enabled: t,
  axis: n,
  itemSelector: o,
  glyphSelector: r,
  transition: s,
  maxScale: i = Ys,
  reach: a = Nr,
  carrierSelector: u,
  spacing: d = 0,
  hoveredOnly: m = !1,
  boundsRef: p
}) => {
  const g = c.useRef(0), h = c.useRef(
    /* @__PURE__ */ new WeakMap()
  ), w = c.useRef(/* @__PURE__ */ new Set()), N = c.useRef(null), S = (v) => {
    var $;
    N.current !== v && (($ = N.current) == null || $.removeAttribute("data-dock-hovered"), v == null || v.setAttribute("data-dock-hovered", ""), N.current = v);
  }, T = c.useRef(/* @__PURE__ */ new Set()), y = s ? `, ${s}` : "", _ = m ? `${lt.duration}ms ${lt.easing}` : `${Jt}ms ease-out`, O = (v) => u ? v.closest(u) : null, E = (v) => {
    const [$ = "0", P = "0"] = v.split(" ").filter(Boolean);
    return n === "x" ? parseFloat($) || 0 : parseFloat(P) || 0;
  }, R = (v) => {
    const $ = O(v);
    if (!$)
      return 0;
    const P = getComputedStyle($).translate;
    return E(
      P && P !== "none" ? P : $.style.translate
    );
  }, A = (v, $) => {
    var ne;
    const Z = (n === "x" ? v.offsetWidth : v.offsetHeight) * (Number(v.style.scale) || 1) / 2, H = C(v) + E(((ne = O(v)) == null ? void 0 : ne.style.translate) ?? "");
    return Math.max(0, Math.abs($ - H) - Z);
  }, C = (v) => {
    const $ = v.getBoundingClientRect();
    return (n === "x" ? $.left + $.width / 2 : $.top + $.height / 2) - R(v);
  }, K = (v) => {
    const $ = v.getBoundingClientRect();
    return Array.from(v.querySelectorAll(o)).filter((P) => {
      var V;
      const Z = (V = P.parentElement) == null ? void 0 : V.closest(o);
      if (Z && v.contains(Z))
        return !1;
      const H = P.getBoundingClientRect(), ne = C(P), me = n === "x" ? ne : H.left + H.width / 2, j = n === "x" ? H.top + H.height / 2 : ne;
      return H.width > 0 && me >= $.left && me <= $.right && j >= $.top && j <= $.bottom;
    }).map((P) => ({
      item: P,
      glyph: r ? P.querySelector(r) : P
    })).filter(
      (P) => P.glyph !== null
    );
  }, F = (v, $) => {
    if ($ === v)
      return i;
    let P = h.current.get($);
    if (P === void 0) {
      const ne = Number($.style.scale) || 1, me = $.getBoundingClientRect();
      P = { width: me.width / ne, height: me.height / ne }, h.current.set($, P);
    }
    if (!(P.width > 0 && P.height > 0))
      return 1;
    const Z = v.getBoundingClientRect(), H = Math.min(
      Z.width / P.width,
      Z.height / P.height
    );
    return Math.max(1, Math.min(H, i));
  }, B = (v) => {
    const $ = p == null ? void 0 : p.current;
    return $ != null && $.contains(v) ? Sr(v, $) : 1 / 0;
  }, M = () => {
    var v, $, P, Z;
    cancelAnimationFrame(g.current), w.current.forEach((H) => {
      H.style.transition = `scale ${lt.duration}ms ${lt.easing}${y}`, H.style.scale = "";
    }), w.current.clear(), S(null), T.current.forEach((H) => {
      H.style.transition = `translate ${lt.duration}ms ${lt.easing}`, H.style.translate = "", H.style.removeProperty("--dock-scale");
    }), T.current.clear(), (v = e.current) == null || v.style.setProperty(
      "--dock-scale-timing",
      `${lt.duration}ms ${lt.easing}`
    ), ($ = e.current) == null || $.style.removeProperty("--dock-spread"), (P = e.current) == null || P.style.removeProperty("--dock-max-scale"), (Z = e.current) == null || Z.style.removeProperty("--dock-active-scale");
  }, G = (v, $, P) => {
    const Z = n === "x" ? $ : P, H = K(v).map(({ item: j, glyph: V }) => {
      const we = C(j), J = m ? j === N.current ? 1 : 0 : Zs(Math.abs(Z - we), a), ie = 1 + (Math.max(1, Math.min(F(j, V), B(V))) - 1) * J;
      V.style.transition = `scale ${_}${y}`, ie > 1.001 ? (V.style.scale = ie.toFixed(3), w.current.add(V)) : w.current.has(V) && (V.style.scale = "", w.current.delete(V));
      const he = n === "x" ? j.offsetWidth : j.offsetHeight, pe = (ie - 1) * he + 2 * d * J;
      return { item: j, centre: we, scale: ie, growth: pe };
    });
    v.style.setProperty("--dock-scale-timing", _), v.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...H.map(({ scale: j }) => j)).toFixed(3)
    );
    const ne = H.find(({ item: j }) => j.dataset.active === "true");
    if (v.style.setProperty(
      "--dock-active-scale",
      ((ne == null ? void 0 : ne.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const me = H.reduce((j, { growth: V }) => j + V, 0);
    v.style.setProperty("--dock-spread", `${me.toFixed(1)}px`), H.forEach(({ item: j, centre: V, scale: we, growth: J }) => {
      const Q = O(j);
      if (!Q)
        return;
      const ie = H.reduce(
        (he, pe) => pe.centre < V ? he + pe.growth : he,
        J / 2
      );
      Q.style.transition = `translate ${_}`, Math.abs(ie) > 0.1 || we > 1.001 ? (Q.style.translate = n === "x" ? `${ie.toFixed(1)}px 0` : `0 ${ie.toFixed(1)}px`, Q.style.setProperty("--dock-scale", we.toFixed(3)), T.current.add(Q)) : T.current.has(Q) && (Q.style.translate = "", Q.style.removeProperty("--dock-scale"), T.current.delete(Q));
    });
  }, te = (v) => {
    if (v.pointerType && v.pointerType !== "mouse" || At())
      return;
    const $ = v.currentTarget, { clientX: P, clientY: Z } = v;
    cancelAnimationFrame(g.current), g.current = requestAnimationFrame(() => {
      const H = $.getBoundingClientRect(), ne = n === "x" ? Z : P, [me, j] = n === "x" ? [H.top, H.bottom] : [H.left, H.right];
      if (ne < me || ne > j) {
        M();
        return;
      }
      if (m) {
        const V = n === "x" ? P : Z, we = N.current;
        if (!(we && $.contains(we) && A(we, V) <= Vs)) {
          let Q = null, ie = 1 / 0;
          K($).forEach(({ item: he }) => {
            const pe = A(he, V);
            pe < ie && (Q = he, ie = pe);
          }), Q && S(Q);
        }
      }
      G($, P, Z);
    });
  }, D = (v) => {
    const $ = e.current;
    if (!t || !$ || At())
      return;
    m && S(v);
    const P = v.getBoundingClientRect();
    G($, P.left + P.width / 2, P.top + P.height / 2);
  };
  return c.useEffect(() => {
    t || M();
  }, [t]), c.useEffect(() => () => cancelAnimationFrame(g.current), []), {
    containerProps: t ? { onPointerMove: te, onPointerLeave: M, onScrollCapture: M } : {},
    swellOn: D,
    settle: M
  };
}, Qt = "data-rail-item", Rr = `[${Qt}], button, [role="button"]`, on = c.createContext(!1), Hl = () => {
  const e = c.useContext(on), t = qe(), n = c.useContext(Gn);
  if (!e)
    return {};
  const o = Fl(t, n);
  return {
    arrow: !1,
    contentClassName: o.className,
    contentStyle: o.style,
    sideOffset: 6
  };
}, _t = Ie(Wl), Ul = ({
  enabled: e,
  isDark: t,
  selector: n,
  size: o,
  radius: r,
  pinSelector: s,
  pinKey: i = null
}) => {
  const a = c.useRef(null), u = Wn(), [d, m] = c.useState(null), p = c.useRef(null), g = c.useRef(null), h = (E, R) => {
    g.current = R;
    const A = R.getBoundingClientRect(), C = E.getBoundingClientRect(), K = o ?? A.width, F = o ?? A.height, B = {
      top: Math.round(A.top - C.top + (A.height - F) / 2),
      left: Math.round(A.left - C.left + (A.width - K) / 2),
      width: Math.round(K),
      height: Math.round(F)
    };
    m(
      (M) => M && M.visible && M.top === B.top && M.left === B.left && M.width === B.width && M.height === B.height ? M : { ...B, visible: !0, instant: !(M != null && M.visible) }
    );
  }, w = (E, R) => {
    var C;
    const A = (C = R == null ? void 0 : R.closest) == null ? void 0 : C.call(R, n);
    return A && E.contains(A) ? A : null;
  }, N = (E) => {
    if (!e)
      return;
    const R = w(E.currentTarget, E.target);
    R && h(E.currentTarget, R);
  }, S = (E) => {
    if (!e)
      return;
    const R = w(E.currentTarget, E.target);
    R && E.target.matches(":focus-visible") && h(E.currentTarget, R);
  }, T = () => {
    var A;
    const E = (A = a.current) == null ? void 0 : A.parentElement, R = s && (E == null ? void 0 : E.querySelector(s));
    return E && R ? { container: E, item: R } : null;
  }, y = () => {
    const E = T();
    if (E) {
      h(E.container, E.item);
      return;
    }
    g.current = null, m((R) => R != null && R.visible ? { ...R, visible: !1 } : R);
  };
  c.useEffect(() => {
    var R, A;
    if (!e)
      return;
    const E = T();
    E ? h(E.container, E.item) : (A = (R = a.current) == null ? void 0 : R.parentElement) != null && A.matches(":hover") || y();
  }, [e, i]);
  const _ = (E) => {
    const R = E.relatedTarget;
    (!R || !E.currentTarget.contains(R)) && (E.currentTarget.matches(":hover") || y());
  };
  return c.useEffect(() => {
    const E = a.current;
    if (!(d != null && d.visible)) {
      p.current = null;
      return;
    }
    const R = p.current;
    if (p.current = d.top, !Zt(E) || At() || R === null || d.instant)
      return;
    const A = Math.min(Math.abs(d.top - R) / 600, 0.08);
    A && E.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - A / 2}, ${1 + A})`,
          offset: 0.35
        },
        { transform: "scale(1, 1)" }
      ],
      { duration: _t.duration, easing: "ease-out" }
    );
  }, [d == null ? void 0 : d.top, d == null ? void 0 : d.visible, d == null ? void 0 : d.instant]), {
    lens: e && d ? /* @__PURE__ */ l(
      "div",
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": d.visible ? "true" : "false",
        className: b(
          "lw:pointer-events-none lw:absolute lw:top-0 lw:left-0",
          ir
        ),
        style: {
          ...wr(t, u),
          borderRadius: `${r}px`,
          width: d.width,
          height: d.height,
          // Placed with `translate`, which the browser applies before
          // `scale`: the well-up and stretch then scale the drop in
          // place instead of scaling its offset.
          translate: `${d.left}px ${d.top}px`,
          // Swells with the item under it (useDockMagnify); fades in
          // and out at its item's size, never popping from smaller
          scale: "var(--dock-max-scale, 1)",
          opacity: d.visible ? 1 : 0,
          // Its scale on the item's own timing, swelling and settling
          // (useDockMagnify), so the two move as one
          transition: d.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${Jt}ms ease-out)` : `translate ${_t.duration}ms ${_t.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${Jt}ms ease-out)`
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: N,
      onMouseLeave: y,
      onFocus: S,
      onBlur: _,
      onScrollCapture: y
    } : {}
  };
}, Js = (e, t, n = null) => {
  const o = Ul({
    enabled: e,
    isDark: t,
    selector: Rr,
    // The rail's buttons exactly, so the hover sits on the item
    size: Ae,
    radius: Qe,
    pinSelector: `[${Qt}][data-open="true"]`,
    pinKey: n
  });
  return {
    ...o,
    lens: o.lens ? c.cloneElement(o.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, Qs = (e, t) => {
  let n = 0, o = 0, r = e;
  for (; r && r !== t; ) {
    n += r.offsetTop, o += r.offsetLeft;
    const a = r.offsetParent;
    for (let u = r.parentElement; u && u !== t && (n -= u.scrollTop, o -= u.scrollLeft, u !== a); u = u.parentElement)
      ;
    r = a;
  }
  if (r === t && e.offsetWidth)
    return {
      top: Math.round(n),
      left: Math.round(o),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const s = e.getBoundingClientRect(), i = t.getBoundingClientRect();
  return {
    top: Math.round(s.top - i.top),
    left: Math.round(s.left - i.left),
    width: Math.round(s.width),
    height: Math.round(s.height)
  };
}, _o = ({
  enabled: e,
  isDark: t,
  color: n,
  containerRef: o
}) => {
  const r = c.useRef(null), [s, i] = c.useState(null), a = c.useRef(null), u = c.useCallback(
    (m) => {
      const p = o.current;
      if (!e || !p)
        return;
      const g = p.querySelector(
        `[${Qt}][data-active="true"]`
      );
      if (!g) {
        i(
          (w) => w != null && w.visible ? { ...w, visible: !1 } : w
        );
        return;
      }
      const h = Qs(g, p);
      i(
        (w) => w && w.visible && w.top === h.top && w.left === h.left && w.width === h.width && w.height === h.height ? w : {
          ...h,
          visible: !0,
          instant: m || !(w != null && w.visible)
        }
      );
    },
    [e, o]
  );
  return c.useLayoutEffect(() => {
    u(!1);
  }), c.useEffect(() => {
    const m = o.current;
    if (!e || !m)
      return;
    let p = 0;
    const g = () => {
      cancelAnimationFrame(p), p = requestAnimationFrame(() => u(!1));
    }, h = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    h == null || h.observe(m);
    const w = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return w == null || w.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(p), h == null || h.disconnect(), w == null || w.disconnect();
    };
  }, [e, o, u]), c.useEffect(() => {
    const m = r.current;
    if (!(s != null && s.visible)) {
      a.current = null;
      return;
    }
    const p = a.current;
    if (a.current = s.top, p === null || s.instant || !Zt(m) || At())
      return;
    const g = Math.min(Math.abs(s.top - p) / 600, 0.08);
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
      { duration: _t.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ l(
    "div",
    {
      ref: r,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      className: b(
        "lw:pointer-events-none lw:absolute lw:top-0 lw:left-0",
        ir
      ),
      style: {
        ...fr(n, t),
        borderRadius: `${Qe}px`,
        width: s.width,
        height: s.height,
        translate: `${s.left}px ${s.top}px`,
        // Swells with its item (useDockMagnify); fades in and out at
        // its item's size, never popping from smaller
        scale: "var(--dock-active-scale, 1)",
        opacity: s.visible ? 1 : 0,
        // Its scale on the item's own timing, swelling and settling
        // (useDockMagnify), so the two move as one
        transition: s.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${Jt}ms ease-out)` : `translate ${_t.duration}ms ${_t.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${Jt}ms ease-out)`
      }
    }
  ) : null };
}, Oe = 52, ea = 2, ta = 10, na = Oe / 2, cl = "[data-flyout-tile]", Xl = 4, Kl = 32, Rl = Kl + Xl, la = 104, Bt = 24, Tr = "background 160ms ease, color 160ms ease, transform 120ms ease", oa = 10, Ar = 10, Ro = Ar + 2, ra = 18, To = 1.08, sa = (e) => {
  for (let t = e.parentElement; t; t = t.parentElement) {
    const { overflowY: n } = getComputedStyle(t);
    if (n === "auto" || n === "scroll")
      return t;
  }
  return null;
}, aa = (e) => {
  const t = sa(e);
  if (!t)
    return To;
  const n = Sr(e, t);
  return Math.min(To, n / Math.min(n, hr));
}, ia = 1190, ca = 1195, Ao = 120, da = 220, Co = 200, Oo = 8, $o = Ie(yr), Ke = Ie(Wl), Io = Ie(Kn), ko = 8192, ua = ({ left: e, top: t, width: n, height: o, radius: r }) => {
  const s = Math.min(r, n / 2, o / 2), i = e + n, a = t + o, u = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${ko} V ${ko} H 0 Z M ${e + s} ${t} H ${i - s} ${u} ${i} ${t + s} V ${a - s} ${u} ${i - s} ${a} H ${e + s} ${u} ${e} ${a - s} V ${t + s} ${u} ${e + s} ${t} Z')`;
}, wa = ({
  group: e,
  groupKey: t,
  anchor: n,
  railEdge: o,
  railShape: r,
  activePath: s,
  focusFirst: i = !1,
  onNavigate: a,
  onClose: u,
  panelProps: d,
  accentColor: m,
  activeBackgroundColor: p,
  activeForegroundColor: g,
  solidSurface: h
}) => {
  const w = qe(), N = ln(), S = !!(e && n), T = c.useRef(null);
  e && t && (T.current = { group: e, key: t });
  const y = T.current, _ = c.useRef(null);
  n && (_.current = { anchor: n, railEdge: o });
  const [O, E] = c.useState(S);
  S && !O && E(!0);
  const [R, A] = c.useState(S);
  S && !R && A(!0), c.useEffect(() => {
    if (S)
      return;
    const I = setTimeout(() => A(!1), Co);
    return () => clearTimeout(I);
  }, [S]);
  const C = c.useRef(null), [K, F] = c.useState({
    x: 0,
    y: 0
  }), B = c.useCallback(() => {
    const I = _.current, z = C.current;
    if (!I || !z)
      return;
    const q = I.anchor.getBoundingClientRect(), U = z.offsetHeight, ce = Math.round(I.railEdge + oa), le = q.top + q.height / 2 - U / 2, Se = window.innerHeight - U - Oo, se = Math.round(
      Math.max(Oo, Math.min(le, Se))
    );
    F((_e) => _e.x === ce && _e.y === se ? _e : { x: ce, y: se });
  }, []);
  c.useLayoutEffect(() => {
    if (!O)
      return;
    B(), window.addEventListener("resize", B), window.addEventListener("scroll", B, !0);
    const I = typeof ResizeObserver > "u" || !C.current ? null : new ResizeObserver(B);
    return I && C.current && I.observe(C.current), () => {
      window.removeEventListener("resize", B), window.removeEventListener("scroll", B, !0), I == null || I.disconnect();
    };
  }, [O, B, n, o, t]), c.useEffect(() => {
    if (!n)
      return;
    const I = aa(n);
    I > 1.001 && qs(n, I);
  }, [n]);
  const [M, G] = c.useState(!1);
  c.useEffect(() => {
    if (!S) {
      G(!1);
      return;
    }
    let I = 0;
    const z = requestAnimationFrame(() => {
      I = requestAnimationFrame(() => G(!0));
    });
    return () => {
      cancelAnimationFrame(z), cancelAnimationFrame(I);
    };
  }, [S]);
  const te = c.useMemo(
    () => y ? Ll(y.group.subitems, y.group.icon) : [],
    [y]
  ), D = c.useRef(null), v = _r(D, {
    enabled: S,
    axis: "x",
    itemSelector: cl,
    transition: Tr,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: ea,
    // The neighbours make room as it grows, and a little more
    carrierSelector: '[role="menuitem"]',
    spacing: ta,
    // Only the tile under the pointer swells; the rest keep their size
    hoveredOnly: !0
  }), $ = c.useRef(void 0), P = c.useCallback((I) => {
    var ce;
    (ce = $.current) == null || ce.call($), $.current = void 0;
    const z = I == null ? void 0 : I.parentElement;
    if (!I || !z || typeof MutationObserver > "u")
      return;
    const q = () => {
      const le = I.offsetLeft - I.offsetWidth / 2, Se = le + I.offsetWidth;
      let se = 0;
      const _e = (ge, ke, ye) => {
        ge < Se && ge + ke > le && (se = Math.max(se, -ye - Ro));
      };
      z.querySelectorAll(cl).forEach((ge) => {
        const ke = parseFloat(ge.style.scale) || 1, ye = (ke - 1) * Oe / 2, Re = ge.closest('[role="menuitem"]'), Ce = parseFloat((Re == null ? void 0 : Re.style.translate) ?? "") || 0;
        _e(
          ge.offsetLeft + Ce - ye,
          ke * Oe,
          ge.offsetTop - ye
        );
        const Le = Re == null ? void 0 : Re.querySelector("[data-flyout-name]"), et = Le == null ? void 0 : Le.parentElement;
        Le && et && ge.dataset.flyoutNameSide === "above" && _e(
          et.offsetLeft + Ce,
          Le.offsetWidth,
          et.offsetTop + Le.offsetTop - ye
        );
      });
      const De = se > 0 ? `0 ${(-se).toFixed(1)}px` : "";
      I.style.translate !== De && (I.style.translate = De);
    }, U = new MutationObserver(q);
    U.observe(z, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), $.current = () => U.disconnect();
  }, []), Z = c.useRef([]), [H, ne] = c.useState([]);
  c.useLayoutEffect(() => {
    const I = () => {
      const q = te.map(
        (U, ce) => {
          var le;
          return ((le = Z.current[ce]) == null ? void 0 : le.offsetWidth) ?? 0;
        }
      );
      ne(
        (U) => U.length === q.length && U.every((ce, le) => ce === q[le]) ? U : q
      );
    };
    if (I(), typeof ResizeObserver > "u")
      return;
    const z = new ResizeObserver(I);
    return Z.current.slice(0, te.length).forEach((q) => q && z.observe(q)), () => z.disconnect();
  }, [te]);
  const me = ma(H, te.length), j = c.useRef([]), V = te.findIndex(
    ({ sub: I }) => Xe(I, s)
  ), [we, J] = c.useState(0);
  c.useEffect(() => {
    J(Math.max(V, 0));
  }, [t]), c.useEffect(() => {
    if (!S || !i)
      return;
    const I = setTimeout(() => {
      var z;
      return (z = j.current[0]) == null ? void 0 : z.focus();
    });
    return () => clearTimeout(I);
  }, [S, i, t]);
  const Q = (I) => {
    var q;
    const z = Math.max(0, Math.min(I, te.length - 1));
    J(z), (q = j.current[z]) == null || q.focus();
  }, ie = (I, z) => {
    var q;
    switch (I.key) {
      case "ArrowRight":
        Q(z + 1);
        break;
      case "ArrowLeft":
        z === 0 ? u(!0) : Q(z - 1);
        break;
      case " ":
        (q = j.current[z]) == null || q.click();
        break;
      case "Home":
        Q(0);
        break;
      case "End":
        Q(te.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    I.preventDefault();
  }, he = "var(--lw-text-primary)", pe = w ? "#ffffff" : m;
  return /* @__PURE__ */ x(ve, { children: [
    R ? /* @__PURE__ */ l(
      "div",
      {
        "data-testid": "sidebar-flyout-scrim",
        "data-flyout-scrim": "",
        "data-state": S ? "open" : "closed",
        "aria-hidden": !0,
        onClick: () => u(),
        className: b(
          "lw:fixed lw:inset-y-0 lw:right-0",
          S ? "lw:animate-in lw:fade-in-0" : "lw:animate-out lw:fade-out-0 lw:[animation-fill-mode:forwards]"
        ),
        style: {
          left: r ? 0 : `${o}px`,
          // Clicks in the cut-out reach the rail beneath
          ...r ? { clipPath: ua(r) } : {},
          zIndex: ia,
          animationDuration: `${S ? da : Co}ms`,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: w ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)"
        }
      }
    ) : null,
    O && typeof document < "u" ? or(
      /* @__PURE__ */ l(
        "div",
        {
          ref: C,
          ...N,
          className: b(
            "lw:fixed lw:top-0 lw:left-0",
            $e
          ),
          style: {
            zIndex: ca,
            transform: `translate(${K.x}px, ${K.y}px)`,
            transition: M ? `transform ${Ke.duration}ms ${Ke.easing}` : "none"
          },
          children: /* @__PURE__ */ l(
            fa,
            {
              in: S,
              onExited: () => E(!1),
              panelProps: d,
              groupText: y == null ? void 0 : y.group.text,
              children: y ? /* @__PURE__ */ x(
                "div",
                {
                  ref: D,
                  role: "menu",
                  "aria-label": y.group.text,
                  ...v.containerProps,
                  onBlur: (I) => {
                    I.currentTarget.contains(
                      I.relatedTarget
                    ) || v.settle();
                  },
                  className: b(
                    "lw:relative",
                    $e
                  ),
                  style: {
                    width: me.width,
                    height: Rl + Oe + Xl + Kl,
                    // The panel stretches as the dock pushes
                    // the pages along, as the Dock's shelf does
                    marginRight: "var(--dock-spread, 0px)",
                    // In step with the pages it makes room for
                    transition: `margin-right var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`
                  },
                  children: [
                    /* @__PURE__ */ l(
                      "span",
                      {
                        ref: P,
                        "aria-hidden": !0,
                        "data-testid": "sidebar-flyout-heading",
                        className: b(
                          "lw:pointer-events-none lw:absolute lw:bottom-full lw:left-1/2 lw:-translate-x-1/2 lw:text-[1.125rem] lw:leading-normal lw:font-bold lw:tracking-[0.08em] lw:whitespace-nowrap lw:uppercase",
                          $e
                        ),
                        style: {
                          marginBottom: Ro,
                          transition: `translate var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`,
                          // The pages' own name colour
                          color: ur(w)
                        },
                        children: y.group.text
                      }
                    ),
                    te.map(({ sub: I, icon: z }, q) => /* @__PURE__ */ l(
                      Or,
                      {
                        ref: (U) => {
                          j.current[q] = U;
                        },
                        nameRef: (U) => {
                          Z.current[q] = U;
                        },
                        tileLeft: me.tiles[q],
                        nameLeft: me.names[q],
                        sub: I,
                        icon: z,
                        index: q,
                        active: Xe(
                          I,
                          s
                        ),
                        tabIndex: q === we ? 0 : -1,
                        onClick: (U) => {
                          Tt(U) && (U.preventDefault(), a(I.path), u());
                        },
                        onKeyDown: (U) => ie(U, q),
                        onFocus: (U) => {
                          J(q);
                          const ce = U.currentTarget.querySelector(
                            cl
                          );
                          ce && U.currentTarget.matches(
                            ":focus-visible"
                          ) && v.swellOn(ce);
                        },
                        accentColor: m,
                        activeBackgroundColor: p,
                        activeForegroundColor: g,
                        labelColor: he,
                        iconColor: pe,
                        surface: h,
                        isDark: w
                      },
                      I.path
                    ))
                  ]
                },
                y.key
              ) : null
            }
          )
        }
      ),
      document.body
    ) : null
  ] });
}, fa = ({
  in: e,
  onExited: t,
  panelProps: n,
  groupText: o,
  children: r
}) => {
  const s = c.useRef(null), i = (u) => {
    s.current = u;
    const { ref: d } = n;
    typeof d == "function" ? d(u) : d && (d.current = u);
  }, a = c.useRef(e);
  return a.current = e, c.useLayoutEffect(() => {
    const u = s.current;
    if (js(u), e) {
      Zt(u) && !At() && u.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: Io.duration, easing: Io.easing }
      );
      return;
    }
    if (!Zt(u)) {
      t == null || t();
      return;
    }
    let d = !1;
    const m = () => {
      !d && !a.current && (d = !0, t == null || t());
    }, p = setTimeout(m, Ao + 100);
    return u.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: Ao,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(m, m), () => clearTimeout(p);
  }, [e]), /* @__PURE__ */ l(
    "div",
    {
      ref: i,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": o,
      className: "lw:relative lw:before:absolute lw:before:inset-y-0 lw:before:left-[-12px] lw:before:w-3 lw:before:content-['']",
      style: { padding: Ar },
      children: r
    }
  );
}, Cr = (e) => e % 2 === 1, ma = (e, t) => {
  const n = [], o = [];
  let r = -Bt, s = -Bt, i = -Bt;
  for (let a = 0; a < t; a += 1) {
    const u = e[a] || Oe, d = Cr(a), m = d ? s : i, p = Math.max(
      r + Bt + Oe / 2,
      m + Bt + u / 2
    );
    r = p + Oe / 2, d ? s = p + u / 2 : i = p + u / 2, n.push(Math.round(p - Oe / 2)), o.push(Math.round(p - u / 2));
  }
  return {
    tiles: n,
    names: o,
    width: Math.round(Math.max(r, s, i, 0))
  };
}, Or = c.forwardRef(
  ({
    nameRef: e,
    tileLeft: t,
    nameLeft: n,
    sub: o,
    icon: r,
    index: s,
    active: i,
    tabIndex: a,
    onClick: u,
    onKeyDown: d,
    onFocus: m,
    accentColor: p,
    activeBackgroundColor: g,
    activeForegroundColor: h,
    labelColor: w,
    iconColor: N,
    surface: S,
    isDark: T
  }, y) => {
    const _ = Cr(s), O = Fl(T, S), E = ur(T), R = {
      animation: `${Ps} ${$o.duration}ms ${$o.easing} both`,
      animationDelay: `${s * ra}ms`
    }, A = T ? E : p, C = {
      // Hovered or focused, the tile and its name take the rail's hover
      // colour — a tint of the accent, whatever the accent is — mixed
      // into the surface so it is solid rather than see-through
      "--lw-tile-hover": `color-mix(in srgb, ${p} ${T ? 20 : 12}%, ${S})`,
      "--lw-tile-outline": p,
      // The current page's icon takes the accent's foreground
      "--lw-tile-icon": i ? h : N
    };
    return /* @__PURE__ */ x(
      "a",
      {
        ref: y,
        href: o.path,
        role: "menuitem",
        tabIndex: a,
        "aria-current": i ? "page" : void 0,
        "data-testid": `sidebar-subitem-${o.text}`,
        "data-active": i ? "true" : "false",
        onClick: u,
        onKeyDown: d,
        onFocus: m,
        className: "lw:group/tile lw:pointer-events-none lw:absolute lw:inset-0 lw:block lw:no-underline lw:outline-none",
        style: { ...C, color: w },
        children: [
          /* @__PURE__ */ l(
            "span",
            {
              "data-flyout-bridge": "",
              "aria-hidden": !0,
              className: "lw:pointer-events-auto lw:absolute lw:top-0 lw:block lw:h-full",
              style: { left: t, width: Oe }
            }
          ),
          /* @__PURE__ */ l(
            "span",
            {
              "data-flyout-tile": "",
              "data-flyout-name-side": _ ? "above" : "below",
              className: b(
                O.className,
                "lw:pointer-events-auto lw:absolute lw:box-border lw:flex lw:items-center lw:justify-center lw:rounded-full lw:p-0",
                "lw:[&_svg]:size-9 lw:[&_svg]:text-(--lw-tile-icon) lw:[&_svg]:transition-colors lw:[&_svg]:duration-150",
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                "lw:[&_[role=img]]:size-9 lw:[&_[role=img]>img]:size-9",
                !i && "lw:group-has-[[data-dock-hovered]]/tile:bg-(--lw-tile-hover)! lw:[[role=menu]:not(:has([data-dock-hovered]))_[role=menuitem]:hover_&]:bg-(--lw-tile-hover)! lw:group-focus-visible/tile:bg-(--lw-tile-hover)!",
                "lw:group-focus-visible/tile:outline-2 lw:group-focus-visible/tile:outline-offset-2 lw:group-focus-visible/tile:outline-(--lw-tile-outline) lw:group-focus-visible/tile:outline-solid",
                "lw:group-active/tile:[transform:scale(0.94)] lw:motion-reduce:group-active/tile:[transform:none]",
                $e
              ),
              style: {
                ...O.style,
                // Cards of their own: a surface and a soft shadow, no
                // edge, lifted a little more than a resting label
                border: "none",
                boxShadow: T ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)",
                left: t,
                top: Rl,
                width: Oe,
                height: Oe,
                borderRadius: na,
                // Grows about its centre, so the row stays level; its
                // name moves aside to clear it (see the name's slot)
                transformOrigin: "center",
                transition: `scale ${Ke.duration}ms ${Ke.easing}, ${Tr}`,
                // The current page: the accent, solid, its icon and text in
                // the accent's foreground — as the current page on the rail
                ...i ? {
                  background: g ?? p,
                  color: h
                } : {},
                ...R
              },
              children: r
            }
          ),
          /* @__PURE__ */ l(
            "span",
            {
              "data-flyout-slot": "",
              className: b(
                "lw:pointer-events-auto lw:absolute lw:flex",
                $e
              ),
              style: {
                left: n,
                top: _ ? 0 : Rl + Oe + Xl,
                height: Kl,
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: _ ? "flex-end" : "flex-start",
                // Pushed away from its tile by as much as the tile
                // grows towards it (`--dock-scale`, on the page)
                translate: `0 calc((var(--dock-scale, 1) - 1) * ${_ ? -Oe / 2 : Oe / 2}px)`,
                transition: `translate var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`
              },
              children: /* @__PURE__ */ l(
                "span",
                {
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": o.text,
                  className: b(
                    "lw:block lw:px-2 lw:py-0 lw:text-center lw:text-[0.75rem] lw:leading-4 lw:text-balance lw:transition-colors lw:duration-150",
                    "lw:after:invisible lw:after:block lw:after:h-0 lw:after:overflow-hidden lw:after:font-semibold lw:after:content-[attr(data-text)]",
                    i ? "lw:font-semibold" : "lw:font-medium",
                    "lw:group-has-[[data-dock-hovered]]/tile:font-semibold lw:[[role=menu]:not(:has([data-dock-hovered]))_[role=menuitem]:hover_&]:font-semibold lw:group-focus-visible/tile:font-semibold",
                    $e
                  ),
                  style: {
                    maxWidth: la,
                    color: i ? A : E,
                    ...R
                  },
                  children: o.text
                }
              )
            }
          )
        ]
      }
    );
  }
);
Or.displayName = "FlyoutTile";
const ha = wa;
function en({
  orientation: e = "horizontal",
  className: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      role: "separator",
      "aria-orientation": e,
      "data-slot": "separator",
      className: b(
        "lw:shrink-0 lw:bg-border",
        e === "horizontal" ? "lw:h-px lw:w-full" : "lw:w-px lw:self-stretch",
        t
      ),
      ...n
    }
  );
}
const pa = 50, ga = 250, ba = (e) => {
  const [t, n] = c.useState(null), o = c.useRef(t);
  o.current = t;
  const r = c.useRef(/* @__PURE__ */ new Map()), s = c.useRef(null), i = c.useRef(void 0), a = c.useRef(void 0), u = () => {
    clearTimeout(i.current), i.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = (T, y, _ = !1) => {
    u(), d(), n({ key: T, pinned: y, focusFirst: _ });
  }, p = c.useCallback((T = !1) => {
    var _, O;
    u(), d();
    const y = (_ = o.current) == null ? void 0 : _.key;
    n(null), T && y && ((O = r.current.get(y)) == null || O.focus());
  }, []), g = () => {
    u(), !(!o.current || o.current.pinned) && (d(), a.current = setTimeout(() => p(), ga));
  };
  c.useEffect(() => {
    e || p();
  }, [e, p]), c.useEffect(
    () => () => {
      u(), d();
    },
    []
  );
  const h = t !== null;
  return c.useEffect(() => {
    if (!h)
      return;
    const T = (O) => {
      var R;
      const E = O;
      return E ? (R = s.current) != null && R.contains(E) ? !0 : [...r.current.values()].some((A) => A.contains(E)) : !1;
    }, y = (O) => {
      T(O.target) || p();
    }, _ = (O) => {
      var E;
      O.key === "Escape" && p(
        !!((E = s.current) != null && E.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", y), document.addEventListener("keydown", _), () => {
      document.removeEventListener("pointerdown", y), document.removeEventListener("keydown", _);
    };
  }, [h, p]), {
    state: t,
    close: p,
    triggerProps: (T) => ({
      ref: (y) => {
        y ? r.current.set(T, y) : r.current.delete(T);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        d();
        const y = o.current;
        if (y) {
          y.key !== T && m(T, y.pinned);
          return;
        }
        u(), i.current = setTimeout(
          () => m(T, !1),
          pa
        );
      },
      onMouseLeave: g,
      onClick: (y) => {
        var _;
        if (y.detail === 0) {
          m(T, !0, !0);
          return;
        }
        ((_ = o.current) == null ? void 0 : _.key) !== T && m(T, !1);
      },
      onKeyDown: (y) => {
        y.key === "ArrowRight" && (y.preventDefault(), m(T, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: d,
      onMouseLeave: g
    },
    onRailLeafEnter: () => {
      u(), o.current && !o.current.pinned && p();
    },
    getTrigger: (T) => r.current.get(T) ?? null
  };
}, xa = ba, va = 264, ya = 72, Lo = 64, Ea = "lw:outline-none lw:focus:outline-none lw:focus-visible:outline-none", Na = 16, Sa = 14, _a = 32, Ra = 20, Mo = "0.7rem", vn = Ie(Gl), dl = "var(--lw-hover-wash)", Ta = "#ffffff", zt = (e, t) => ({
  className: b(
    (t == null ? void 0 : t.bg) && "lw:hover:bg-(--lw-row-hover-bg)!",
    (t == null ? void 0 : t.fg) && "lw:hover:text-(--lw-row-hover-fg)!",
    (t == null ? void 0 : t.radius) && "lw:hover:rounded-(--lw-row-hover-radius)!"
  ),
  style: {
    color: e.fg,
    backgroundColor: e.bg ?? "transparent",
    ...t != null && t.bg ? { "--lw-row-hover-bg": t.bg } : {},
    ...t != null && t.fg ? { "--lw-row-hover-fg": t.fg } : {},
    ...t != null && t.radius ? { "--lw-row-hover-radius": t.radius } : {}
  }
}), Et = c.forwardRef(
  ({ href: e, disabled: t, ...n }, o) => e ? /* @__PURE__ */ l(
    "a",
    {
      ref: o,
      href: e,
      ...n
    }
  ) : /* @__PURE__ */ l(
    "button",
    {
      ref: o,
      type: "button",
      disabled: t,
      ...n
    }
  )
);
Et.displayName = "RowControl";
const ul = "lw:relative lw:flex lw:w-full lw:min-w-0 lw:grow lw:items-center lw:justify-start lw:text-left lw:no-underline lw:transition-colors lw:duration-150 lw:outline-none lw:focus-visible:bg-selected lw:disabled:opacity-40", yn = "lw:inline-flex lw:shrink-0 lw:text-inherit lw:[&_svg]:size-6", En = "lw:my-1 lw:min-w-0 lw:flex-auto", wl = b(
  "lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:p-2 lw:transition-[background-color,border-radius,color] lw:duration-150 lw:disabled:opacity-40 lw:[&_svg]:size-6",
  Ea
), dt = ({ text: e, variant: t = "body1", center: n = !1, fontSize: o, fontWeight: r }) => {
  const s = c.useRef(null), [i, a] = c.useState(!1), u = c.useCallback(() => {
    const d = s.current;
    d && a(d.scrollWidth > d.clientWidth + 0.5);
  }, []);
  return c.useLayoutEffect(() => {
    u();
  }, [u, e]), c.useEffect(() => {
    const d = s.current;
    if (!d)
      return;
    const m = new ResizeObserver(() => u());
    return m.observe(d), () => m.disconnect();
  }, [u]), /* @__PURE__ */ l(
    je,
    {
      title: e,
      side: "right",
      arrow: !0,
      delayDuration: 400,
      disabled: !i,
      children: /* @__PURE__ */ l(
        "span",
        {
          ref: s,
          className: b(
            "lw:block lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap lw:text-inherit",
            t === "caption" ? "lw:text-xs lw:leading-[1.66]" : "lw:text-sm lw:leading-normal",
            n && "lw:w-full lw:text-center lw:leading-[1.1]"
          ),
          style: {
            ...o ? { fontSize: o } : {},
            ...r ? { fontWeight: r } : {}
          },
          children: e
        }
      )
    }
  );
}, Aa = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, Ca = 4, Oa = (e) => Math.max(0, Math.min(Ca, In - e)), $a = ({
  open: e,
  size: t = Na
}) => /* @__PURE__ */ l(
  e ? gs : bs,
  {
    "aria-hidden": !0,
    className: "lw:shrink-0 lw:opacity-75",
    style: { width: t, height: t }
  }
), Do = ({ open: e }) => /* @__PURE__ */ l(
  ps,
  {
    "aria-hidden": !0,
    className: b(
      "lw:size-5! lw:shrink-0 lw:opacity-75 lw:transition-transform lw:duration-150",
      e && "lw:rotate-90"
    )
  }
), Nn = 600, ot = `${Hn}px`, In = (Yt - Ae) / 2, Ia = (e) => {
  const t = Math.max(0, e - In);
  return {
    paddingLeft: `${Math.max(0, In - t)}px`,
    paddingRight: `${Math.max(0, In - e)}px`
  };
};
function ka(e, t) {
  const [n, o] = c.useState(0);
  return c.useLayoutEffect(() => {
    const r = e.current;
    if (!t || !r) {
      o(0);
      return;
    }
    const s = () => {
      const a = getComputedStyle(r), u = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth);
      o(Math.max(0, r.offsetWidth - r.clientWidth - u));
    };
    if (s(), typeof ResizeObserver > "u")
      return;
    const i = new ResizeObserver(s);
    return i.observe(r), r.firstElementChild && i.observe(r.firstElementChild), () => i.disconnect();
  }, [e, t]), n;
}
function La(e) {
  const [t, n] = c.useState(!1);
  return c.useLayoutEffect(() => {
    const o = e.current, r = o == null ? void 0 : o.firstElementChild;
    if (!o || !r)
      return;
    const s = () => {
      const a = getComputedStyle(o), u = r.offsetHeight + parseFloat(a.paddingTop) + parseFloat(a.paddingBottom);
      n(u > o.clientHeight + 0.5);
    };
    if (s(), typeof ResizeObserver > "u")
      return;
    const i = new ResizeObserver(s);
    return i.observe(o), i.observe(r), () => i.disconnect();
  }, [e]), t;
}
const Sn = 8;
function Ma(e, t, n) {
  c.useEffect(() => {
    const o = e.current;
    if (!o)
      return;
    const r = (u) => {
      const d = Array.from(
        o.querySelectorAll('[data-active="true"]')
      ).filter((h) => h.offsetHeight > 0).pop();
      if (!d)
        return;
      const m = o.getBoundingClientRect(), p = d.getBoundingClientRect();
      let g = 0;
      p.top < m.top + Sn ? g = p.top - m.top - Sn : p.bottom > m.bottom - Sn && (g = p.bottom - m.bottom + Sn), g !== 0 && o.scrollBy({ top: g, behavior: u });
    }, s = requestAnimationFrame(() => r("smooth")), i = window.setTimeout(() => r("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => r("auto"));
    return a == null || a.observe(o), () => {
      cancelAnimationFrame(s), window.clearTimeout(i), a == null || a.disconnect();
    };
  }, [e, t, n]);
}
const Da = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: o,
  onLinkAction: r,
  logo: s,
  title: i,
  onBrandClick: a,
  brandMenuOpen: u,
  showHeaderBar: d = !1,
  headerBackgroundColor: m,
  headerForegroundColor: p,
  brandColor: g,
  activeAccentColor: h = "#01584f",
  activeBackgroundColor: w,
  groupArrowColor: N,
  groupAccentColor: S,
  activeForegroundColor: T,
  foregroundColor: y,
  surfaceBackgroundColor: _,
  flyoutSurfaceColor: O,
  collapsed: E = !1,
  expandedWidth: R = va,
  collapsedWidth: A = ya,
  showLabels: C = !1,
  topInsetPx: K = 0,
  topContent: F,
  footer: B,
  submenuMode: M = "inline"
}) => {
  var fe;
  const G = qe(), te = c.useContext(Gn), D = M === "flyout" && E && !C, v = xa(D), $ = c.useRef(null), P = c.useRef(null), Z = c.useRef(null), H = c.useRef(null);
  Ma(H, n, E);
  const ne = ka(H, D), me = La(H), j = Js(D, G, ((fe = v.state) == null ? void 0 : fe.key) ?? null), V = _r($, {
    enabled: D,
    axis: "y",
    itemSelector: Rr,
    maxScale: hr,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: Ae + Hn,
    // Only 4px of padding at the scroller's ends: the first and last
    // buttons swell less, or the last would scroll the rail
    boundsRef: H,
    transition: `transform ${vn.duration}ms ${vn.easing}, background-color 160ms ease`
  }), we = {
    ...j.containerProps,
    ...V.containerProps,
    ...D ? {
      onScrollCapture: () => {
        var f, L;
        (L = (f = j.containerProps).onScrollCapture) == null || L.call(f), V.settle();
      }
    } : {}
  }, J = w ?? h, Q = _o({
    enabled: D,
    isDark: G,
    color: J,
    containerRef: P
  }), ie = _o({
    enabled: D,
    isDark: G,
    color: J,
    containerRef: Z
  }), he = c.useMemo(
    () => e.filter((f) => f.aboveSearch),
    [e]
  ), pe = c.useMemo(
    () => e.filter((f) => !f.aboveSearch),
    [e]
  ), { close: I } = v;
  c.useEffect(() => {
    I();
  }, [n, I]);
  const [z, q] = c.useState(
    {}
  ), U = T ?? Sl(J), ce = { bg: J, fg: U }, le = S ?? Vt(h), Se = Xn(_, G), se = y ?? (G ? "var(--lw-text-primary)" : h), _e = m ?? Se, De = p ?? (m ? Sl(_e) : y ?? (G ? Ta : h)), ge = Vt(De), ke = (f) => {
    o == null || o(f);
  }, ye = (f) => f ? {
    href: f,
    onClick: (L) => {
      Tt(L) && (L.preventDefault(), ke(f));
    }
  } : {}, Re = (f, L) => {
    q((Y) => ({ ...Y, [f]: !L }));
  }, Ce = (f, L) => z[L] ?? st(f, n), Le = (f, L) => zt(
    {
      fg: f ? U : se,
      bg: f ? J : void 0
    },
    f || C ? ce : { bg: L }
  ), et = (f) => {
    const L = Xe(f, n), Y = Le(L, le), W = /* @__PURE__ */ x(
      Et,
      {
        disabled: !f.path,
        ...ye(f.path),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": L ? "true" : "false",
        "data-selected": L ? "true" : void 0,
        className: b(
          ul,
          "lw:rounded-lg lw:px-3",
          f.subtitle ? "lw:py-2" : "lw:py-2.5",
          // Room for the action button laid over the row's end
          f.action && "lw:pr-12",
          Y.className
        ),
        style: Y.style,
        children: [
          /* @__PURE__ */ l(
            "span",
            {
              className: yn,
              style: { minWidth: f.subtitle ? 48 : 36 },
              children: f.icon
            }
          ),
          /* @__PURE__ */ x(
            "span",
            {
              className: b(En, f.subtitle && "lw:my-0"),
              children: [
                /* @__PURE__ */ l(
                  dt,
                  {
                    text: f.text,
                    fontWeight: Nn
                  }
                ),
                f.subtitle ? /* @__PURE__ */ l("span", { className: "lw:block lw:opacity-85", children: /* @__PURE__ */ l(
                  dt,
                  {
                    text: f.subtitle,
                    fontSize: "0.8125rem"
                  }
                ) }) : null
              ]
            }
          )
        ]
      },
      f.text
    );
    if (!f.action)
      return W;
    const { action: X } = f, ee = L ? U : se;
    return /* @__PURE__ */ x("div", { className: "lw:relative", children: [
      W,
      /* @__PURE__ */ l(On, { title: X.label, side: "right", arrow: !0, children: /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          "aria-label": X.label,
          "data-testid": `sidebar-action-${f.text}`,
          onClick: () => {
            X.onClick(), r == null || r();
          },
          className: b(
            "lw:absolute lw:top-1/2 lw:right-2 lw:inline-flex lw:size-[30px] lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-md lw:border lw:border-solid lw:transition-colors lw:[&_svg]:size-[18px]",
            "lw:hover:bg-(--lw-action-hover-bg)",
            // No lingering outline after a click; a clear ring for keyboard focus
            "lw:focus:outline-none lw:focus-visible:outline-2 lw:focus-visible:outline-offset-1 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-action-ring)"
          ),
          style: {
            borderColor: L ? "rgba(255, 255, 255, 0.35)" : le,
            color: ee,
            "--lw-action-hover-bg": L ? "rgba(255, 255, 255, 0.15)" : le,
            "--lw-action-ring": ee
          },
          children: X.icon
        }
      ) })
    ] }, f.text);
  }, an = (f) => {
    const L = st(f, n), Y = Xe(f, n), W = yt("", f), X = Ce(f, W), ee = Le(Y, le);
    return /* @__PURE__ */ x(
      "div",
      {
        "data-testid": `sidebar-group-${f.text}`,
        className: "lw:rounded-lg",
        style: {
          backgroundColor: L ? le : "transparent"
        },
        children: [
          /* @__PURE__ */ x(
            Et,
            {
              onClick: () => Re(W, X),
              "data-testid": `sidebar-item-${f.text}`,
              "data-active": Y ? "true" : "false",
              "aria-expanded": X,
              className: b(
                ul,
                "lw:rounded-lg lw:px-3 lw:py-2.5",
                ee.className
              ),
              style: ee.style,
              children: [
                /* @__PURE__ */ l("span", { className: yn, style: { minWidth: 36 }, children: f.icon }),
                /* @__PURE__ */ l("span", { className: En, children: /* @__PURE__ */ l(
                  dt,
                  {
                    text: f.text,
                    fontWeight: Nn
                  }
                ) }),
                /* @__PURE__ */ l(Do, { open: X })
              ]
            }
          ),
          X ? /* @__PURE__ */ l(
            "div",
            {
              "data-testid": `sidebar-children-${f.text}`,
              className: "lw:pb-1 lw:animate-in lw:fade-in-0",
              children: f.subitems.map(
                (xe) => ut(xe, W, 1)
              )
            }
          ) : null
        ]
      },
      f.text
    );
  }, ut = (f, L, Y) => {
    const W = yt(L, f), X = _a + (Y - 1) * Ra, ee = b(
      ul,
      "lw:mx-1 lw:w-[calc(100%-8px)] lw:rounded-lg lw:py-1.5 lw:pr-4"
    );
    if (St(f)) {
      const Pe = st(f, n), ae = Xe(f, n), He = Ce(f, W), Ee = Le(ae, dl);
      return /* @__PURE__ */ x("div", { "data-testid": `sidebar-group-${f.text}`, children: [
        /* @__PURE__ */ x(
          Et,
          {
            onClick: () => Re(W, He),
            "data-testid": `sidebar-subitem-${f.text}`,
            "data-active": Pe ? "true" : "false",
            "aria-expanded": He,
            className: b(ee, Ee.className),
            style: { ...Ee.style, paddingLeft: X },
            children: [
              f.icon ? /* @__PURE__ */ l(
                "span",
                {
                  className: yn,
                  style: { minWidth: 32 },
                  children: f.icon
                }
              ) : null,
              /* @__PURE__ */ l("span", { className: En, children: /* @__PURE__ */ l(
                dt,
                {
                  text: f.text,
                  fontWeight: Nn
                }
              ) }),
              /* @__PURE__ */ l(Do, { open: He })
            ]
          }
        ),
        He ? /* @__PURE__ */ l(
          "div",
          {
            "data-testid": `sidebar-children-${f.text}`,
            className: "lw:animate-in lw:fade-in-0",
            children: f.subitems.map(
              (ct) => ut(ct, W, Y + 1)
            )
          }
        ) : null
      ] }, W);
    }
    const xe = Xe(f, n), be = Le(xe, dl);
    return /* @__PURE__ */ x(
      Et,
      {
        disabled: !f.path,
        ...ye(f.path),
        "data-testid": `sidebar-subitem-${f.text}`,
        "data-active": xe ? "true" : "false",
        "data-selected": xe ? "true" : void 0,
        className: b(ee, be.className),
        style: { ...be.style, paddingLeft: X },
        children: [
          f.icon ? /* @__PURE__ */ l("span", { className: yn, style: { minWidth: 32 }, children: f.icon }) : null,
          /* @__PURE__ */ l("span", { className: En, children: /* @__PURE__ */ l(
            dt,
            {
              text: f.text,
              fontWeight: Nn
            }
          ) })
        ]
      },
      W
    );
  }, wt = b(
    "lw:rounded-md! lw:[&_svg]:size-6 lw:hover:bg-transparent! lw:active:[transform:scale(0.88)] lw:active:duration-[90ms] lw:motion-reduce:active:[transform:none]",
    $e
  ), cn = (f) => ({
    ...f ? { backgroundColor: "transparent" } : {},
    transition: `transform ${vn.duration}ms ${vn.easing}, background-color 160ms ease`
  }), dn = Fl(G, te), Ot = (f, L, Y, W, X, ee) => {
    const xe = !X, be = C ? zt(
      {
        fg: W ? U : se,
        bg: W ? J : void 0
      },
      ce
    ) : (
      // Icon-only collapsed rail (collapsible variant): original
      // hover — accent when active, else a subtle tint; no
      // foreground change. The glass rail has no hover of its own.
      zt(
        {
          fg: W ? U : se,
          bg: W ? J : void 0
        },
        D ? void 0 : {
          bg: W ? J : ee != null && ee.insideGroup ? dl : le,
          radius: "8px"
        }
      )
    ), Pe = D ? Ae : 44, ae = /* @__PURE__ */ x(
      Et,
      {
        "aria-label": L,
        disabled: xe,
        ...ye(X),
        onMouseEnter: D ? v.onRailLeafEnter : void 0,
        ...D ? { [Qt]: "" } : {},
        "data-testid": (ee == null ? void 0 : ee.testId) ?? `sidebar-item-${L}`,
        "data-active": W ? "true" : "false",
        className: b(
          wl,
          be.className,
          C ? (
            // 8px padding on all sides of the item container.
            "lw:flex lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:gap-0.5 lw:rounded-lg lw:p-2 lw:[&_svg]:size-[22px]"
          ) : W ? "lw:rounded-lg" : "lw:rounded-full",
          !C && D && wt
        ),
        style: {
          ...be.style,
          ...C ? {} : { width: Pe, height: Pe },
          ...!C && D ? cn(W) : {}
        },
        children: [
          Y,
          C ? /* @__PURE__ */ l(
            dt,
            {
              text: L,
              variant: "caption",
              center: !0,
              fontSize: Mo
            }
          ) : null
        ]
      }
    );
    return C ? xe ? /* @__PURE__ */ l("span", { children: ae }, f) : /* @__PURE__ */ l(c.Fragment, { children: ae }, f) : /* @__PURE__ */ l(
      On,
      {
        title: L,
        side: "right",
        arrow: !D,
        ...D ? {
          contentClassName: dn.className,
          contentStyle: dn.style,
          sideOffset: 6
        } : {},
        children: xe ? /* @__PURE__ */ l("span", { children: ae }) : ae
      },
      f
    );
  }, Yn = (f) => {
    var X;
    const L = st(f, n), Y = yt("", f), W = ((X = v.state) == null ? void 0 : X.key) === Y;
    return /* @__PURE__ */ l(
      "div",
      {
        "data-testid": `sidebar-group-${f.text}`,
        className: "lw:flex lw:w-full lw:justify-center",
        children: /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            ...v.triggerProps(Y),
            "aria-label": f.text,
            "aria-haspopup": "menu",
            "aria-expanded": W,
            "data-testid": `sidebar-item-${f.text}`,
            "data-active": L ? "true" : "false",
            "data-open": W ? "true" : "false",
            [Qt]: "",
            className: b(
              wl,
              wt,
              // The icon stays centred, in line with every other icon
              // down the rail; the arrow sits in the room beside it,
              // just past the button, in the rail's side gutter (drawn
              // back inside it when the scrollbar takes that gutter).
              // Pointed at, or its pages already out, it has said its piece
              "lw:after:pointer-events-none lw:after:absolute lw:after:top-1/2 lw:after:h-[8px] lw:after:w-[5px] lw:after:-translate-y-1/2 lw:after:content-[''] lw:after:transition-opacity lw:after:duration-150 lw:after:right-(--lw-arrow-right) lw:after:bg-(--lw-arrow-bg) lw:after:opacity-(--lw-arrow-opacity) lw:after:[mask:var(--lw-arrow-mask)] lw:hover:after:opacity-0 lw:data-[open=true]:after:opacity-0"
            ),
            style: {
              width: Ae,
              height: Ae,
              color: L ? U : se,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              backgroundColor: L ? J : "transparent",
              ...cn(L),
              "--lw-arrow-right": `${-Oa(ne)}px`,
              "--lw-arrow-bg": N ?? "currentColor",
              "--lw-arrow-opacity": N ? 1 : 0.55,
              "--lw-arrow-mask": `${Aa} center / contain no-repeat`
            },
            children: f.icon
          }
        )
      },
      f.text
    );
  }, it = (f) => {
    const L = st(f, n), Y = Xe(f, n), W = yt("", f), X = Ce(f, W), ee = zt(
      {
        fg: Y ? U : se,
        bg: Y ? J : void 0
      },
      C ? ce : { bg: Y ? J : "transparent" }
    ), xe = /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        "aria-label": f.text,
        "aria-expanded": X,
        onClick: () => Re(W, X),
        "data-testid": `sidebar-item-${f.text}`,
        "data-active": Y ? "true" : "false",
        className: b(
          wl,
          ee.className,
          "lw:flex lw:max-w-full lw:flex-col lw:rounded-[10px]",
          // 8px padding on all sides of the labeled item container.
          C ? "lw:w-full lw:gap-0.5 lw:p-2" : "lw:w-11 lw:px-2 lw:py-1.5"
        ),
        style: ee.style,
        children: [
          C ? /* @__PURE__ */ l("span", { className: "lw:flex lw:items-center lw:justify-center lw:[&_svg]:size-[22px]", children: f.icon }) : f.icon,
          C ? /* @__PURE__ */ l(
            dt,
            {
              text: f.text,
              variant: "caption",
              center: !0,
              fontSize: Mo
            }
          ) : null,
          /* @__PURE__ */ l($a, { open: X, size: Sa })
        ]
      }
    ), be = C ? xe : /* @__PURE__ */ l(On, { title: f.text, side: "right", arrow: !0, children: xe }), Pe = zt(
      { bg: L ? le : void 0 },
      C ? void 0 : { bg: le }
    );
    return /* @__PURE__ */ x(
      "div",
      {
        "data-testid": `sidebar-group-${f.text}`,
        className: b(
          "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-1 lw:rounded-[10px] lw:py-1",
          Pe.className
        ),
        style: Pe.style,
        children: [
          be,
          X ? Ll(f.subitems, f.icon).map(
            ({ sub: ae, icon: He }) => Ot(
              ae.path,
              ae.text,
              He,
              Xe(ae, n),
              ae.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${ae.text}`
              }
            )
          ) : null
        ]
      },
      f.text
    );
  }, $t = (f) => /* @__PURE__ */ l("div", { className: "lw:flex lw:w-full lw:justify-center", children: Ot(
    f.text,
    f.subtitle ? `${f.text} · ${f.subtitle}` : f.text,
    f.icon,
    Xe(f, n),
    f.path,
    { testId: `sidebar-item-${f.text}` }
  ) }, f.text), It = (f) => St(f) ? D ? Yn(f) : E ? it(f) : an(f) : E ? $t(f) : et(f), Ye = (f) => /* @__PURE__ */ l(
    "div",
    {
      className: b(
        "lw:flex lw:w-full lw:flex-col lw:gap-1",
        E ? "lw:items-center" : "lw:items-stretch"
      ),
      children: f.map((L, Y) => {
        const W = (ee) => /* @__PURE__ */ l(
          en,
          {
            "data-testid": `sidebar-divider-${ee === "before" ? "before-" : ""}${L.text}`,
            className: "lw:self-stretch",
            style: {
              marginBlock: D ? ot : "8px",
              width: "auto"
            }
          }
        ), X = L.dividerAfter && Y < f.length - 1;
        return L.dividerBefore || X ? /* @__PURE__ */ x(c.Fragment, { children: [
          L.dividerBefore ? W("before") : null,
          It(L),
          X ? W("after") : null
        ] }, L.text) : It(L);
      })
    }
  ), ft = E ? A : R, un = () => {
    var xe, be;
    const { state: f } = v, L = f ? [...e, ...t].find(
      (Pe) => St(Pe) && yt("", Pe) === f.key
    ) ?? null : null, Y = L ? ((xe = $.current) == null ? void 0 : xe.getBoundingClientRect().right) ?? A : A, W = L ? ((be = $.current) == null ? void 0 : be.closest("[data-rail-surface]")) ?? $.current : null, X = W == null ? void 0 : W.getBoundingClientRect(), ee = W && X ? {
      left: X.left,
      top: X.top,
      width: X.width,
      height: X.height,
      radius: parseFloat(
        getComputedStyle(W).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ l(
      ha,
      {
        group: L,
        groupKey: L ? f.key : null,
        anchor: L ? v.getTrigger(f.key) : null,
        railEdge: Y,
        railShape: ee,
        activePath: n,
        focusFirst: f == null ? void 0 : f.focusFirst,
        onNavigate: ke,
        onClose: v.close,
        panelProps: v.flyoutProps,
        accentColor: h,
        activeBackgroundColor: w,
        activeForegroundColor: U,
        solidSurface: O ?? Se
      }
    );
  }, wn = d ? /* @__PURE__ */ l(
    "div",
    {
      "data-testid": "sidebar-header",
      className: b(
        "lw:flex lw:shrink-0 lw:items-center lw:justify-center",
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        D && "lw:py-3"
      ),
      style: {
        backgroundColor: _e,
        ...D ? {} : { height: Lo, minHeight: Lo }
      },
      children: s || i ? /* @__PURE__ */ l(
        Dn,
        {
          logo: s,
          title: E ? void 0 : i,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? De,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, Vn = !d && s ? /* @__PURE__ */ l(
    "div",
    {
      className: "lw:flex lw:shrink-0 lw:justify-center lw:pt-4",
      style: { paddingBottom: D ? ot : "8px" },
      children: /* @__PURE__ */ l(
        Dn,
        {
          logo: s,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? De,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, Ve = C ? 4 : D ? 6 : E ? 8 : 12, fn = b(
    D ? "lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-width:thin] lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-color:transparent_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-1.5" : "lw:[scrollbar-width:thin] lw:[scrollbar-color:transparent_transparent] lw:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-2",
    "lw:[&::-webkit-scrollbar-thumb]:rounded-[4px] lw:[&::-webkit-scrollbar-thumb]:bg-transparent lw:[&:hover::-webkit-scrollbar-thumb]:bg-border lw:[&:has(:focus-visible)::-webkit-scrollbar-thumb]:bg-border"
  );
  return /* @__PURE__ */ l(on.Provider, { value: D, children: /* @__PURE__ */ x(
    "nav",
    {
      ref: $,
      ...we,
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": E ? "true" : "false",
      "data-labeled": C ? "true" : "false",
      className: b(
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        // Snaps to its width; an owner that animates the switch (the
        // wrapper's hover panel) clips it from a container, so the
        // rows never reflow mid-animation.
        "lw:box-border lw:flex lw:h-full lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-hidden",
        // The glass rail holds the lens, so every control on it — links,
        // Ask Nexa, search, notifications, the account — hovers the same
        // way: no tint of its own, the lens gliding behind it. An active
        // or highlighted control keeps its fill. The rail's content
        // paints above the lens, which is its first layer; not the
        // flyout's backdrop, which is fixed over the whole window.
        D && "lw:relative lw:[&_:is(button,a,[role=button]):not([data-active=true]):not([data-rail-keep-fill]):hover]:bg-transparent! lw:[&>:not([data-glass-lens],[data-active-glass],[data-flyout-scrim])]:relative"
      ),
      style: { width: ft, minWidth: ft, backgroundColor: Se },
      children: [
        j.lens,
        wn ?? Vn,
        he.length > 0 ? /* @__PURE__ */ x(
          "div",
          {
            ref: Z,
            className: "lw:relative lw:shrink-0",
            style: {
              marginInline: Ve,
              paddingBottom: D ? ot : "8px"
            },
            children: [
              ie.glass,
              Ye(he)
            ]
          }
        ) : null,
        F ? /* @__PURE__ */ l(
          "div",
          {
            className: "lw:shrink-0",
            style: {
              paddingInline: Ve,
              paddingBlock: D ? 0 : 8
            },
            children: F
          }
        ) : null,
        /* @__PURE__ */ l(
          "div",
          {
            ref: H,
            "data-testid": "sidebar-links-scroller",
            className: b(
              "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
              fn
            ),
            style: {
              overflowY: me ? "auto" : "hidden",
              overflowX: "hidden",
              // On the floating rail the bar (when it takes space at all)
              // stands in for the right padding, and the left padding
              // follows it, so the 44px column keeps equal gaps in the
              // capsule whether the bar is classic, overlay or absent.
              // (The inline collapsed rail keeps its padding: its open
              // groups tint the full row width.)
              ...D ? Ia(ne) : { paddingInline: Ve },
              paddingTop: K && !d ? `${K}px` : D ? ot : "8px",
              paddingBottom: D ? ot : "16px"
            },
            children: /* @__PURE__ */ x(
              "div",
              {
                ref: P,
                className: "lw:relative lw:flex lw:flex-[1_0_auto] lw:flex-col",
                children: [
                  Q.glass,
                  Ye(pe),
                  t.length > 0 ? /* @__PURE__ */ x(
                    "div",
                    {
                      className: "lw:mt-auto",
                      style: {
                        paddingTop: D ? ot : "16px"
                      },
                      children: [
                        B ? null : /* @__PURE__ */ l(
                          en,
                          {
                            style: {
                              marginBottom: D ? ot : "8px"
                            }
                          }
                        ),
                        Ye(t)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        B ? /* @__PURE__ */ l(
          "div",
          {
            className: b(
              "lw:shrink-0 lw:pb-3",
              D && "lw:[&_button_svg]:size-6"
            ),
            style: { paddingInline: Ve },
            children: /* @__PURE__ */ l(
              "div",
              {
                style: {
                  borderTop: `1px solid ${ge}`,
                  paddingTop: D ? ot : "12px"
                },
                children: B
              }
            )
          }
        ) : null,
        D ? un() : null
      ]
    }
  ) });
}, Tl = Da, kn = "var(--lumora-content-padding, 0px)", fl = `calc(${kn} * -1)`, Pa = {
  "background.paper": "var(--lw-bg-surface)",
  "background.default": "var(--lw-bg-page)"
}, Fa = (e) => e && typeof e == "object" && !Array.isArray(e) ? Object.fromEntries(
  Object.entries(e).filter(
    ([t, n]) => !t.includes("&") && !t.startsWith("@") && (typeof n == "string" || typeof n == "number")
  )
) : {}, Ba = ({
  children: e,
  flushTop: t = !0,
  sticky: n = !1,
  background: o = "var(--lw-bg-surface)",
  divider: r = !0,
  inset: s = !0,
  className: i,
  style: a,
  sx: u
}) => /* @__PURE__ */ l(
  "div",
  {
    "data-testid": "full-bleed-section",
    className: b(
      r && "lw:border-b lw:border-solid lw:border-border",
      // Above page content, below the sidebar drawer and menus
      n && "lw:sticky lw:z-[3]",
      i
    ),
    style: {
      marginLeft: fl,
      marginRight: fl,
      marginTop: t ? fl : 0,
      // Space below it, like any other block on the page
      marginBottom: kn,
      paddingLeft: s ? kn : 0,
      paddingRight: s ? kn : 0,
      backgroundColor: Pa[o] ?? o,
      ...n && {
        position: "sticky",
        // Under the mobile top bar on phones, the viewport top on desktop
        top: "var(--lumora-sticky-top, 0px)"
      },
      ...Fa(u),
      ...a
    },
    children: e
  }
), Uc = Ba, za = ({ keys: e }) => /* @__PURE__ */ l(
  "kbd",
  {
    "aria-hidden": "true",
    className: "lw:inline-flex lw:h-5 lw:shrink-0 lw:items-center lw:gap-1 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-surface lw:px-1.5 lw:font-[inherit] lw:text-[11px] lw:leading-none lw:text-muted-foreground",
    children: e.map((t) => /* @__PURE__ */ l("span", { children: t }, t))
  }
), Ga = za;
function Pn({
  className: e,
  style: t,
  variant: n = "rounded",
  animate: o = !0,
  ...r
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      "data-slot": "skeleton",
      "aria-hidden": !0,
      className: b(
        "lw:block lw:bg-skeleton",
        n === "circular" && "lw:rounded-full",
        n === "rounded" && "lw:rounded-md",
        n === "text" && "lw:h-[1em] lw:rounded-sm",
        o && "lw:animate-[lw-skeleton-pulse_2s_ease-in-out_0.5s_infinite]",
        e
      ),
      style: t,
      ...r
    }
  );
}
const Wa = "(max-width: 899.95px)", Ha = (e) => (t) => {
  var o;
  if (typeof window > "u" || !window.matchMedia)
    return () => {
    };
  const n = window.matchMedia(e);
  return (o = n.addEventListener) == null || o.call(n, "change", t), () => {
    var r;
    return (r = n.removeEventListener) == null ? void 0 : r.call(n, "change", t);
  };
};
function Ua(e) {
  const t = c.useMemo(() => Ha(e), [e]);
  return c.useSyncExternalStore(
    t,
    () => typeof window < "u" && window.matchMedia ? window.matchMedia(e).matches : !1,
    () => !1
  );
}
const $r = () => Ua(Wa), Xa = 6, Ka = 8, Po = (e, t) => typeof e == "object" ? e[t] : e, ml = ({ width: e, height: t = 20, className: n }) => /* @__PURE__ */ l(
  Pn,
  {
    variant: "text",
    className: n,
    style: {
      width: e,
      height: t * 0.6,
      marginTop: t * 0.2,
      marginBottom: t * 0.2
    }
  }
), pt = ({ size: e, variant: t = "rounded" }) => /* @__PURE__ */ l(
  Pn,
  {
    variant: t,
    className: "lw:shrink-0",
    style: { width: e, height: e }
  }
), hl = ({
  themeMode: e,
  sidebarVariant: t = "rail",
  sidebarSubmenu: n = "expand",
  sidebarAutoHide: o = !1,
  showSidebar: r = !0,
  contentPadding: s = gr,
  sidebarBackgroundColor: i,
  contentBackgroundColor: a,
  content: u
}) => {
  const d = $r(), m = e === "dark", p = xr({
    showSidebar: r,
    isMobile: d,
    sidebarVariant: t,
    sidebarSubmenu: n,
    sidebarAutoHide: o
  }), g = Un(n, t) ? {
    gutterPx: rt,
    radiusPx: pr
  } : void 0, h = $n, w = Xn(
    Po(i, e),
    m
  ), N = vr(
    Po(a, e),
    m
  ), S = br(s), T = g ? /* @__PURE__ */ x("div", { className: "lw:flex lw:flex-col lw:items-center lw:pt-3", children: [
    /* @__PURE__ */ l(pt, { size: 36 }),
    /* @__PURE__ */ l(
      "div",
      {
        className: "lw:mt-4 lw:flex lw:flex-col lw:items-center",
        style: { gap: Hn },
        children: Array.from({ length: Ka }, (y, _) => /* @__PURE__ */ l(
          "div",
          {
            className: "lw:flex lw:items-center lw:justify-center",
            style: {
              width: Ae,
              height: Ae
            },
            children: /* @__PURE__ */ l(pt, { size: _l })
          },
          _
        ))
      }
    )
  ] }) : /* @__PURE__ */ x("div", { className: "lw:flex lw:flex-col lw:items-center lw:gap-4 lw:pt-4", children: [
    /* @__PURE__ */ l(pt, { size: 32 }),
    /* @__PURE__ */ l("div", { className: "lw:h-2" }),
    Array.from({ length: Xa }, (y, _) => /* @__PURE__ */ l(pt, { size: 28 }, _))
  ] });
  return /* @__PURE__ */ x(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      "data-lw-scope": "",
      "data-lw-theme": e,
      className: "lw:flex lw:min-h-screen",
      style: { backgroundColor: N },
      children: [
        d && /* @__PURE__ */ x(
          "div",
          {
            className: "lw:fixed lw:top-0 lw:right-0 lw:left-0 lw:z-[1] lw:flex lw:items-center lw:gap-4 lw:px-4",
            style: {
              height: h,
              backgroundColor: w
            },
            children: [
              /* @__PURE__ */ l(pt, { size: 24 }),
              /* @__PURE__ */ l(ml, { width: 96 }),
              /* @__PURE__ */ l("div", { className: "lw:grow" }),
              /* @__PURE__ */ l(pt, { size: 32, variant: "circular" })
            ]
          }
        ),
        !d && p > 0 && /* @__PURE__ */ l(
          "div",
          {
            className: "lw:relative lw:shrink-0",
            style: { width: p },
            children: /* @__PURE__ */ l(
              "div",
              {
                className: "lw:fixed",
                style: g ? {
                  top: g.gutterPx,
                  bottom: g.gutterPx,
                  left: g.gutterPx,
                  width: p - 2 * g.gutterPx,
                  borderRadius: g.radiusPx,
                  backgroundColor: w
                } : {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: p,
                  backgroundColor: w
                },
                children: T
              }
            )
          }
        ),
        /* @__PURE__ */ l(
          "div",
          {
            className: "lw-content-padding lw:min-w-0 lw:grow",
            "data-lw-host": "",
            style: {
              ...S,
              "--lumora-sticky-top": d ? `${h}px` : "0px",
              padding: "var(--lumora-content-padding)",
              marginTop: d ? h : 0
            },
            children: u ?? /* @__PURE__ */ x(ve, { children: [
              /* @__PURE__ */ l(ml, { width: 220, height: 40 }),
              /* @__PURE__ */ l(ml, { width: 320, className: "lw:mb-6" }),
              /* @__PURE__ */ l("div", { className: "lw:mb-6 lw:flex lw:flex-row lw:gap-4", children: Array.from(
                { length: d ? 2 : 4 },
                (y, _) => /* @__PURE__ */ l(
                  Pn,
                  {
                    className: "lw:h-24 lw:flex-1"
                  },
                  _
                )
              ) }),
              /* @__PURE__ */ l(Pn, { className: "lw:h-[360px]" })
            ] })
          }
        )
      ]
    }
  );
}, Fo = { background: "hsl(220, 35%, 3%)", color: "#ffffff" }, ja = ({
  theme: e = "light",
  darkModeSelector: t,
  ...n
}) => {
  if (!t)
    return /* @__PURE__ */ l(hl, { themeMode: e, ...n });
  const o = [
    '[data-lw-skeleton-mode="dark"]{display:none}',
    '[data-lw-skeleton-mode="light"]{display:contents}',
    `${t} [data-lw-skeleton-mode="light"]{display:none}`,
    `${t} [data-lw-skeleton-mode="dark"]{display:contents}`,
    `${t} body{background-color:${Fo.background};color:${Fo.color}}`
  ].join(`
`);
  return /* @__PURE__ */ x(ve, { children: [
    /* @__PURE__ */ l("style", { dangerouslySetInnerHTML: { __html: o } }),
    /* @__PURE__ */ l("div", { "data-lw-skeleton-mode": "light", children: /* @__PURE__ */ l(hl, { themeMode: "light", ...n }) }),
    /* @__PURE__ */ l("div", { "data-lw-skeleton-mode": "dark", children: /* @__PURE__ */ l(hl, { themeMode: "dark", ...n }) })
  ] });
}, qa = ja;
class re extends Error {
  constructor(t, n, o = null) {
    super(t), this.name = "AuthError", this.code = n, this.originalError = o, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const ue = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, Ne = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Je = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Ya = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Je.ACCESS_TOKEN
      ), t = localStorage.getItem(
        Je.REFRESH_TOKEN
      ), n = localStorage.getItem(Je.USER);
      e && !localStorage.getItem(Ne.ACCESS_TOKEN) && localStorage.setItem(Ne.ACCESS_TOKEN, e), t && !localStorage.getItem(Ne.REFRESH_TOKEN) && localStorage.setItem(
        Ne.REFRESH_TOKEN,
        t
      ), n && !localStorage.getItem(Ne.USER) && localStorage.setItem(Ne.USER, n), (e || t || n) && (localStorage.removeItem(Je.ACCESS_TOKEN), localStorage.removeItem(Je.REFRESH_TOKEN), localStorage.removeItem(Je.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, pl = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new re(
        "localStorage is not available",
        ue.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new re(
      "Storage quota exceeded. Please clear browser data.",
      ue.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new re(
      "Access to localStorage is denied. Please check browser settings.",
      ue.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      t.name
    ), new re(
      "Failed to access storage",
      ue.STORAGE_ACCESS_DENIED,
      t
    ));
  }
}, gl = (e, t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new re(
        "localStorage is not available",
        ue.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, t), !0;
  } catch (n) {
    throw n.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new re(
      "Storage quota exceeded. Please clear browser data.",
      ue.STORAGE_ACCESS_DENIED,
      n
    )) : n.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new re(
      "Access to localStorage is denied. Please check browser settings.",
      ue.STORAGE_ACCESS_DENIED,
      n
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      n.name
    ), new re(
      "Failed to write to storage",
      ue.STORAGE_ACCESS_DENIED,
      n
    ));
  }
}, Ir = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (t) {
    return t.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, tn = () => {
  try {
    Ya();
    const e = pl(Ne.ACCESS_TOKEN), t = pl(Ne.REFRESH_TOKEN), n = pl(Ne.USER);
    let o = null;
    if (n)
      try {
        o = JSON.parse(n);
      } catch {
        n && n !== "null" && n !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          n.substring(0, 50)
        ), Ir(Ne.USER);
      }
    return {
      accessToken: e,
      refreshToken: t,
      user: o
    };
  } catch (e) {
    throw e instanceof re ? e : new re(
      "Failed to retrieve authentication tokens",
      ue.UNKNOWN_ERROR,
      e
    );
  }
}, Va = () => {
  try {
    const { accessToken: e, refreshToken: t } = tn();
    return !(e || t) ? {
      isAuthenticated: !1,
      error: new re(
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
      error: e instanceof re ? e : new re(
        "Authentication check failed",
        ue.UNKNOWN_ERROR,
        e
      )
    };
  }
}, kr = (e, t, n = null) => {
  try {
    if (!e && !t)
      throw new re(
        "At least one token must be provided",
        ue.TOKEN_INVALID
      );
    return e && gl(Ne.ACCESS_TOKEN, e), t && gl(Ne.REFRESH_TOKEN, t), n && gl(Ne.USER, JSON.stringify(n)), {
      success: !0,
      error: null
    };
  } catch (o) {
    return console.error("Failed to store authentication tokens:", o), {
      success: !1,
      error: o instanceof re ? o : new re(
        "Failed to store tokens",
        ue.UNKNOWN_ERROR,
        o
      )
    };
  }
}, nn = () => {
  try {
    return [
      Ne.ACCESS_TOKEN,
      Ne.REFRESH_TOKEN,
      Ne.USER,
      // Also clear legacy keys for complete cleanup
      Je.ACCESS_TOKEN,
      Je.REFRESH_TOKEN,
      Je.USER
    ].map((o) => Ir(o)).every((o) => o) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof re ? e : new re(
        "Failed to clear tokens",
        ue.LOGOUT_FAILED,
        e
      )
    };
  }
}, Za = () => {
  try {
    const { user: e } = tn();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof re ? e : new re(
        "Failed to retrieve user data",
        ue.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Xc = (e) => {
  if (!(e instanceof re))
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
}, Al = (e, t = "Unknown") => {
  const n = {
    context: t,
    message: e.message,
    code: e instanceof re ? e.code : "UNKNOWN",
    timestamp: e instanceof re ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof re && e.originalError && (n.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", n);
}, Ja = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const t = vo.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let n = !1, o = null, r = [];
  const s = (i, a) => {
    r.forEach(({ resolve: u, reject: d }) => {
      i ? d(i) : a && u(a);
    }), r = [];
  };
  return t.interceptors.request.use(
    (i) => {
      const { accessToken: a } = tn();
      return a && i.headers && (i.headers.Authorization = `Bearer ${a}`), i;
    },
    (i) => Promise.reject(i)
  ), t.interceptors.response.use(
    (i) => i,
    async (i) => {
      var g;
      const a = i.config, u = (g = i.response) == null ? void 0 : g.status, d = (a == null ? void 0 : a.url) || "", m = d.includes("/auth/refresh");
      if (u !== 401 || a._retry || m)
        return Promise.reject(i);
      a._retry = !0;
      const { refreshToken: p } = tn();
      if (!p) {
        const h = new Error(
          "No refresh token available for token refresh"
        );
        return Al(h, "AxiosClient - Token Refresh"), nn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (n && o)
        return new Promise((h, w) => {
          r.push({ resolve: h, reject: w });
        }).then((h) => {
          const {
            accessToken: w,
            refreshToken: N
          } = h;
          if (a.headers && (a.headers.Authorization = `Bearer ${w}`), d.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const S = JSON.parse(
                  a.data || "{}"
                );
                S.refresh_token = N, a.data = JSON.stringify(S);
              } else
                a.data && typeof a.data == "object" ? a.data.refresh_token = N : a.data = JSON.stringify({
                  refresh_token: N
                });
            } catch {
              a.data = JSON.stringify({
                refresh_token: N
              });
            }
          return t(a);
        }).catch((h) => Promise.reject(h));
      n = !0, o = vo.post(
        `${e}/auth/refresh`,
        {
          refresh_token: p
        }
      );
      try {
        const h = await o, { accessToken: w, refreshToken: N } = h.data;
        if (kr(w, N, null), s(null, {
          accessToken: w,
          refreshToken: N
        }), a.headers && (a.headers.Authorization = `Bearer ${w}`), d.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const S = JSON.parse(
                a.data || "{}"
              );
              S.refresh_token = N, a.data = JSON.stringify(S);
            } else
              a.data && typeof a.data == "object" ? a.data.refresh_token = N : a.data = JSON.stringify({
                refresh_token: N
              });
          } catch {
            a.data = JSON.stringify({
              refresh_token: N
            });
          }
        return t(a);
      } catch (h) {
        return Al(
          h,
          "AxiosClient - Token Refresh Failed"
        ), s(h), nn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(h);
      } finally {
        n = !1, o = null;
      }
    }
  ), t;
}, Qa = async (e, t) => {
  const { accessToken: n, refreshToken: o } = tn();
  if (n)
    return !0;
  if (o)
    try {
      const r = await e.post("/auth/refresh", {
        refresh_token: o
      });
      if (r.data.success && r.data.accessToken)
        return kr(
          r.data.accessToken,
          r.data.refreshToken || null,
          null
        ), !0;
    } catch (r) {
      Al(r, "TokenValidator - Refresh Failed");
    }
  return nn(), t ? t() : window.location.href = "/login", !1;
}, ei = ({ size: e = 20 }) => /* @__PURE__ */ x(
  "svg",
  {
    width: e,
    height: e * 30 / 33,
    style: { width: e, height: e * 30 / 33, flexShrink: 0 },
    viewBox: "0 0 33 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ l(
        "path",
        {
          d: "M21.7931 29.9243V20.5466L11.0774 10.4528V20.5466L21.7931 29.9243Z",
          fill: "#05A393"
        }
      ),
      /* @__PURE__ */ l(
        "path",
        {
          d: "M21.7931 20.1102L21.7931 10.0939L11.0774 0V10.0939L21.7931 20.1102Z",
          fill: "#049586"
        }
      ),
      /* @__PURE__ */ l(
        "path",
        {
          d: "M2.19027e-05 29.9243V20.5466L10.7157 10.4528V20.5466L2.19027e-05 29.9243Z",
          fill: "#09C1AE"
        }
      ),
      /* @__PURE__ */ l(
        "path",
        {
          d: "M22.1555 19.4716V10.0939L32.8712 0V10.0939L22.1555 19.4716Z",
          fill: "#016F63"
        }
      )
    ]
  }
), jt = ei, Bo = Ie(Gl), Lr = "#09C1AE", ti = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", ni = "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)", _n = "lw:relative lw:overflow-hidden lw:[&>*]:relative lw:[&>*]:z-[2]", Rn = ({
  radiusPx: e,
  cover: t
}) => /* @__PURE__ */ x(ve, { children: [
  /* @__PURE__ */ l(
    "span",
    {
      "aria-hidden": !0,
      className: "lw:pointer-events-none lw:absolute! lw:inset-[-50%] lw:z-0! lw:animate-spin lw:motion-reduce:animate-none",
      style: {
        background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Lr} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
        animationDuration: "3s"
      }
    }
  ),
  /* @__PURE__ */ l(
    "span",
    {
      "aria-hidden": !0,
      className: "lw:pointer-events-none lw:absolute! lw:inset-[2px] lw:z-[1]!",
      style: { borderRadius: e - 2, background: t }
    }
  )
] }), li = ({
  variant: e,
  onClick: t,
  active: n = !1,
  busy: o = !1,
  shortcutKeys: r,
  accentColor: s = "#01584f",
  rightOffsetPx: i = 0
}) => {
  const a = Hl(), u = c.useContext(on), d = qe(), m = r ? `Ask Nexa (${r.join("")})` : "Ask Nexa", p = {
    type: "button",
    onClick: t,
    "aria-label": "Ask Nexa",
    "aria-pressed": n,
    "data-testid": "assistant-button"
  }, g = b(
    "lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.08)] lw:hover:bg-[rgba(9,193,174,0.14)]",
    n ? "lw:border-[#09C1AE]" : "lw:border-[rgba(9,193,174,0.45)]"
  );
  if (e === "sidebar")
    return /* @__PURE__ */ x(
      "button",
      {
        ...p,
        "data-variant": "sidebar",
        className: b(
          "lw:flex lw:h-11 lw:w-full lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:px-3 lw:outline-none lw:transition-[border-color,background-color] lw:duration-150 lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE] lw:focus-visible:outline-offset-2",
          g,
          o && _n
        ),
        style: { color: s },
        children: [
          o && /* @__PURE__ */ l(Rn, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ l(jt, { size: 20 }),
          /* @__PURE__ */ l("span", { className: "lw:grow lw:text-left lw:text-sm lw:font-semibold lw:text-inherit", children: "Ask Nexa" }),
          r && /* @__PURE__ */ l(Ga, { keys: r })
        ]
      }
    );
  if (e === "sidebar-icon" && u && Nl) {
    const h = fr(Lr, d, "clear");
    return /* @__PURE__ */ l(je, { title: m, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ x(
      "button",
      {
        ...p,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": !0,
        className: b(
          "lw:inline-flex lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:hover:[transform:scale(1.07)] lw:active:[transform:scale(0.92)] lw:active:[transition-duration:90ms]! lw:motion-reduce:hover:[transform:none] lw:motion-reduce:active:[transform:none] lw:[&_svg]:[filter:drop-shadow(0_1px_1.5px_rgba(0,0,0,0.25))]",
          $e,
          o && _n
        ),
        style: {
          width: Ae,
          height: Ae,
          borderRadius: Qe,
          background: h.background,
          boxShadow: n ? `${h.boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)` : h.boxShadow,
          backdropFilter: "blur(8px) saturate(180%)",
          WebkitBackdropFilter: "blur(8px) saturate(180%)",
          transition: `transform ${Bo.duration}ms ${Bo.easing}, box-shadow 200ms ease`
        },
        children: [
          o && // The same light over a glass interior (tint over an
          // opaque base, so the beam stays a 2px line)
          /* @__PURE__ */ l(
            Rn,
            {
              radiusPx: Qe,
              cover: `${h.background}, ${d ? "#16202c" : "#f2fbfa"}`
            }
          ),
          /* @__PURE__ */ l(jt, { size: 18 })
        ]
      }
    ) });
  }
  if (e === "sidebar-icon") {
    const h = u ? Ae : 44;
    return /* @__PURE__ */ l(je, { title: m, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ x(
      "button",
      {
        ...p,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": u || void 0,
        className: b(
          "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring",
          g,
          o && _n
        ),
        style: { width: h, height: h },
        children: [
          o && /* @__PURE__ */ l(Rn, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ l(jt, { size: u ? 18 : 20 })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ l(je, { title: m, side: "left", children: /* @__PURE__ */ x(
    "button",
    {
      ...p,
      "data-variant": "floating",
      className: b(
        "lw:fixed lw:bottom-6 lw:z-[1150] lw:inline-flex lw:size-[52px] lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-2xl lw:bg-surface lw:p-0 lw:outline-offset-2 lw:transition-[right,box-shadow] lw:duration-[225ms] lw:ease-in-out lw:[box-shadow:var(--lw-shadow-rest)] lw:hover:[box-shadow:var(--lw-shadow-hover)] lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE]",
        n ? "lw:outline-2 lw:outline-solid lw:outline-[#09C1AE]" : "lw:outline-none",
        o && _n
      ),
      style: {
        right: 24 + i,
        "--lw-shadow-rest": ti,
        "--lw-shadow-hover": ni
      },
      children: [
        o && /* @__PURE__ */ l(Rn, { radiusPx: 16, cover: "var(--lw-bg-surface)" }),
        /* @__PURE__ */ l("span", { className: "lw:flex lw:items-center", children: /* @__PURE__ */ l(jt, { size: 26 }) })
      ]
    }
  ) });
}, zo = li, oi = Os(
  "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:gap-1.5 lw:whitespace-nowrap lw:rounded-md lw:text-sm lw:font-semibold lw:transition-colors lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:focus-visible:ring-offset-1 lw:focus-visible:ring-offset-surface lw:disabled:pointer-events-none lw:disabled:opacity-50 lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "lw:bg-primary lw:text-primary-foreground lw:hover:bg-primary-hover",
        destructive: "lw:bg-destructive-fill lw:text-white lw:hover:bg-destructive-hover",
        outline: "lw:border lw:border-solid lw:border-input lw:bg-surface lw:text-foreground lw:hover:border-input-hover lw:hover:bg-accent",
        "outline-primary": "lw:border lw:border-solid lw:border-primary lw:bg-transparent lw:text-primary lw:hover:border-primary-hover lw:hover:bg-primary/6 lw:hover:text-primary-hover",
        "ghost-primary": "lw:bg-transparent lw:text-primary lw:hover:bg-primary/6 lw:hover:text-primary-hover",
        secondary: "lw:bg-secondary lw:text-secondary-foreground lw:hover:bg-selected",
        ghost: "lw:text-foreground lw:hover:bg-accent",
        link: "lw:h-auto lw:px-0 lw:text-brand-text lw:underline-offset-4 lw:hover:underline",
        /** No look of its own: the shell's coloured controls style it themselves. */
        bare: ""
      },
      size: {
        default: "lw:h-8 lw:px-3",
        sm: "lw:h-7 lw:px-2.5 lw:text-[13px]",
        lg: "lw:h-10 lw:px-4 lw:text-base",
        icon: "lw:size-8",
        "icon-sm": "lw:size-7",
        "icon-xs": "lw:size-6 lw:[&_svg:not([class*='size-'])]:size-3.5",
        none: ""
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
), jn = c.forwardRef(
  ({
    className: e,
    variant: t,
    size: n,
    asChild: o = !1,
    type: r = "button",
    ...s
  }, i) => {
    const a = o ? Cs.Root : "button";
    return /* @__PURE__ */ l(
      a,
      {
        ref: i,
        "data-slot": "button",
        type: o ? void 0 : r,
        className: b(oi({ variant: t, size: n }), e),
        ...s
      }
    );
  }
);
jn.displayName = "Button";
const ri = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: o,
  show: r = !0
}) => r ? /* @__PURE__ */ x("div", { className: "lw:m-3 lw:shrink-0 lw:rounded-lg lw:border lw:border-solid lw:border-border lw:bg-card lw:p-4 lw:text-card-foreground", children: [
  /* @__PURE__ */ l(xs, { className: "lw:size-5", "aria-hidden": !0 }),
  /* @__PURE__ */ l("p", { className: "lw:mb-[0.35em] lw:text-sm lw:font-semibold", children: e }),
  /* @__PURE__ */ l("p", { className: "lw:mb-4 lw:text-sm lw:text-muted-foreground", children: t }),
  /* @__PURE__ */ l(jn, { size: "sm", className: "lw:w-full", onClick: o, children: n })
] }) : null, Tn = ri, bl = 225, Gt = 195, xl = "cubic-bezier(0, 0, 0.2, 1)", vl = "cubic-bezier(0.4, 0, 0.6, 1)", Wt = 24, si = 720, ai = 1140, ii = 1250, ci = ({
  open: e,
  children: t,
  variant: n,
  position: o,
  width: r,
  sidebarWidthPx: s,
  bottomOffsetPx: i,
  fullScreen: a,
  fullScreenBottom: u = "0px",
  onClose: d
}) => {
  const m = c.useRef(!1);
  c.useEffect(() => {
    const E = requestAnimationFrame(() => {
      m.current = !0;
    });
    return () => cancelAnimationFrame(E);
  }, []);
  const [p, g] = c.useState(e), [h, w] = c.useState(e);
  c.useEffect(() => {
    if (!e) {
      w(!1);
      return;
    }
    g(!0);
    const E = requestAnimationFrame(() => w(!0));
    return () => cancelAnimationFrame(E);
  }, [e]), c.useEffect(() => {
    if (!e || !d)
      return;
    const E = (R) => {
      R.key === "Escape" && d();
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [e, d]);
  const N = n === "docked", S = Wt + i;
  let T;
  if (a ? T = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : N ? T = {
    top: 0,
    right: 0,
    bottom: 0,
    width: r,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : T = {
    bottom: S,
    ...o === "left" ? { left: s + Wt } : { right: Wt },
    width: r,
    maxWidth: `calc(100vw - ${Wt * 2}px)`,
    height: `min(${si}px, calc(100vh - ${S + Wt}px))`,
    borderRadius: "12px"
  }, !e && !p)
    return null;
  const y = e && h, _ = !m.current, O = N ? {
    transform: y ? "none" : "translateX(100%)",
    transition: e ? `transform ${_ ? 0 : bl}ms ${xl}` : `transform ${Gt}ms ${vl}, visibility 0ms linear ${Gt}ms`
  } : {
    transform: y ? "none" : "scale(0.75, 0.5625)",
    opacity: y ? 1 : 0,
    transformOrigin: o === "left" ? "bottom left" : "bottom right",
    transition: e ? `opacity ${bl}ms ${xl}, transform ${Math.round(bl * 0.666)}ms ${xl}` : `opacity ${Gt}ms ${vl}, transform ${Gt}ms ${vl}, visibility 0ms linear ${Gt}ms`
  };
  return /* @__PURE__ */ l(
    "div",
    {
      role: N ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "aria-hidden": e ? void 0 : !0,
      "data-testid": "chat-panel",
      "data-variant": n,
      "data-lw-host": "",
      className: `lw:fixed lw:flex lw:flex-col lw:overflow-hidden lw:border lw:border-solid lw:border-border lw:bg-surface lw:text-foreground lw:shadow-popover ${cr}`,
      style: {
        zIndex: N ? ai : ii,
        visibility: e ? "visible" : "hidden",
        ...T,
        ...O
      },
      children: t
    }
  );
}, di = ci, rn = Mn.Root, sn = Mn.Anchor, ui = "lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none", Ct = c.forwardRef(
  ({
    className: e,
    align: t = "start",
    sideOffset: n = 4,
    unstyled: o = !1,
    ...r
  }, s) => {
    const i = ln();
    return /* @__PURE__ */ l(Mn.Portal, { children: /* @__PURE__ */ l(
      Mn.Content,
      {
        ref: s,
        ...i,
        "data-slot": "popover-content",
        align: t,
        sideOffset: n,
        className: b(
          "lw:z-[1400] lw:outline-none",
          !o && b(
            ui,
            "lw:p-3 lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95"
          ),
          e
        ),
        ...r
      }
    ) });
  }
);
Ct.displayName = "PopoverContent";
const wi = 180, Go = 250, fi = "#01584F", Mr = "var(--lw-text-muted)", mi = ({
  text: e,
  testId: t
}) => {
  const n = c.useRef(null), [o, r] = c.useState(!1), s = c.useCallback(() => {
    const i = n.current;
    i && r(i.scrollWidth > i.clientWidth + 0.5);
  }, []);
  return c.useLayoutEffect(() => {
    s();
  }, [s, e]), c.useEffect(() => {
    const i = n.current;
    if (!i)
      return;
    const a = new ResizeObserver(() => s());
    return a.observe(i), () => a.disconnect();
  }, [s]), /* @__PURE__ */ l(
    je,
    {
      title: e,
      side: "right",
      arrow: !0,
      delayDuration: 400,
      disabled: !o,
      children: /* @__PURE__ */ l(
        "span",
        {
          ref: n,
          "aria-hidden": !0,
          "data-testid": t,
          className: "lw:block lw:w-full lw:overflow-hidden lw:text-center lw:text-xs lw:leading-[1.1] lw:text-ellipsis lw:whitespace-nowrap lw:text-inherit",
          children: e
        }
      )
    }
  );
}, hi = "lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:transition-[background-color,border-radius] lw:duration-150 lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50 lw:[&_svg]:size-6", Dr = (e, t, n, o) => {
  const r = e ? 48 : 44, s = e ? Mr : t, i = e ? fi : t, a = b(
    hi,
    o ? "lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:rounded-sm lw:px-2 lw:py-1" : n ? "lw:rounded-sm" : "lw:rounded-full lw:hover:rounded-sm",
    !n && "lw:hover:bg-accent"
  ), u = {
    color: n ? "#ffffff" : s,
    backgroundColor: n ? i : void 0,
    ...o ? { minWidth: r, minHeight: r } : { width: r, height: r }
  };
  return { activeBg: i, className: a, style: u };
}, Pr = ({ link: e }) => /* @__PURE__ */ x("span", { className: "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-2", children: [
  /* @__PURE__ */ l("span", { className: "lw:flex lw:items-center lw:justify-center lw:text-inherit", children: e.icon }),
  /* @__PURE__ */ l(
    mi,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Fr = (e, t, n) => n ? e : /* @__PURE__ */ l(On, { title: t, side: "right", arrow: !0, children: e }), pi = (e) => {
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key))
    return;
  const n = Array.from(
    e.currentTarget.querySelectorAll(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )
  );
  if (!n.length)
    return;
  e.preventDefault();
  const o = n.indexOf(document.activeElement), r = e.key === "Home" ? 0 : e.key === "End" ? n.length - 1 : e.key === "ArrowDown" ? (o + 1) % n.length : (o - 1 + n.length) % n.length;
  n[r].focus();
}, gi = ({
  link: e,
  activePath: t,
  onLinkClick: n,
  accentColor: o,
  isSecondary: r,
  surfaceBackgroundColor: s,
  railShowTitles: i
}) => {
  const [a, u] = c.useState(!1), d = c.useRef(
    null
  ), m = c.useRef(null), p = c.useRef(null), g = c.useRef(!1), h = c.useRef(!1), w = c.useId(), N = () => {
    d.current && (clearTimeout(d.current), d.current = null);
  }, S = () => {
    N(), d.current = setTimeout(() => {
      u(!1), d.current = null;
    }, wi);
  }, T = () => {
    N(), u(!0);
  };
  c.useEffect(() => {
    if (!a)
      return;
    const F = (B) => {
      var M;
      B.key === "Escape" && (u(!1), (M = p.current) == null || M.focus());
    };
    return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
  }, [a]), c.useEffect(() => {
    if (!a || !h.current)
      return;
    const F = globalThis.requestAnimationFrame(() => {
      var M;
      const B = (M = m.current) == null ? void 0 : M.querySelector(
        '[role="menuitem"]'
      );
      B == null || B.focus(), h.current = !1;
    });
    return () => cancelAnimationFrame(F);
  }, [a]);
  const y = st(e, t), {
    activeBg: _,
    className: O,
    style: E
  } = Dr(r, o, y, i), R = {
    "aria-label": e.text,
    onFocus: () => {
      g.current || T();
    },
    onBlur: (F) => {
      var M;
      const B = F.relatedTarget;
      B && ((M = m.current) != null && M.contains(B)) || S();
    },
    onKeyDown: (F) => {
      F.key === "ArrowDown" && (F.preventDefault(), h.current = !0, T());
    },
    onClick: (F) => {
      F.stopPropagation(), !(e.path && !Tt(F)) && (F.preventDefault(), e.path && (n == null || n(e.path)));
    },
    "aria-haspopup": "menu",
    "aria-expanded": a,
    "aria-controls": a ? w : void 0,
    "data-testid": `rail-submenu-trigger-${e.text}`,
    className: O,
    style: E
  }, A = i ? /* @__PURE__ */ l(Pr, { link: e }) : e.icon, C = e.path ? /* @__PURE__ */ l(
    "a",
    {
      ref: p,
      href: e.path,
      ...R,
      children: A
    }
  ) : /* @__PURE__ */ l(
    "button",
    {
      ref: p,
      type: "button",
      ...R,
      children: A
    }
  );
  return /* @__PURE__ */ x(rn, { open: a, children: [
    /* @__PURE__ */ l("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ l(sn, { asChild: !0, children: /* @__PURE__ */ l(
      "div",
      {
        "data-testid": `rail-submenu-anchor-${e.text}`,
        className: "lw:inline-flex lw:max-w-full",
        onMouseEnter: () => {
          g.current = !0, T();
        },
        onMouseLeave: () => {
          g.current = !1, S();
        },
        children: Fr(C, e.text, i)
      }
    ) }) }),
    /* @__PURE__ */ l(
      Ct,
      {
        ref: m,
        unstyled: !0,
        side: "right",
        align: "start",
        sideOffset: 8,
        onOpenAutoFocus: (F) => F.preventDefault(),
        onCloseAutoFocus: (F) => F.preventDefault(),
        onInteractOutside: (F) => {
          var B;
          if ((B = p.current) != null && B.contains(F.target)) {
            F.preventDefault();
            return;
          }
          u(!1);
        },
        onEscapeKeyDown: () => u(!1),
        onMouseEnter: N,
        onMouseLeave: S,
        "data-testid": `rail-submenu-panel-${e.text}`,
        className: "lw:z-[1300] lw:min-w-0 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-popover lw:py-1 lw:text-popover-foreground lw:shadow-popover",
        style: {
          backgroundColor: s,
          maxWidth: Go
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            id: w,
            role: "menu",
            onKeyDown: pi,
            style: { maxWidth: Go },
            children: K(e.subitems, e.text, 0)
          }
        )
      }
    )
  ] });
  function K(F, B, M) {
    return F.flatMap((G) => {
      const te = yt(B, G), D = 16 + M * 12;
      if (St(G))
        return [
          /* @__PURE__ */ l(
            "div",
            {
              role: "presentation",
              title: G.text,
              className: "lw:overflow-hidden lw:pr-4 lw:text-[0.7rem] lw:leading-[28px] lw:font-medium lw:tracking-[0.06em] lw:text-ellipsis lw:whitespace-nowrap lw:uppercase lw:text-muted-foreground",
              style: { paddingLeft: D },
              children: G.text
            },
            te
          ),
          ...K(G.subitems, te, M + 1)
        ];
      const v = Xe(G, t), $ = G.path ? "a" : "div";
      return [
        /* @__PURE__ */ x(
          $,
          {
            role: "menuitem",
            tabIndex: -1,
            title: G.text,
            "aria-disabled": G.path ? void 0 : !0,
            "data-selected": v ? "true" : void 0,
            ...G.path ? { href: G.path } : {},
            onClick: (P) => {
              G.path && Tt(P) && (P.preventDefault(), n == null || n(G.path), u(!1));
            },
            className: b(
              "lw:mx-1 lw:my-[1px] lw:flex lw:min-h-8 lw:max-w-full lw:cursor-pointer lw:items-center lw:overflow-hidden lw:rounded-sm lw:pr-4 lw:text-sm lw:outline-none lw:select-none lw:[&_svg]:size-5",
              !v && "lw:hover:bg-accent lw:focus-visible:bg-selected",
              !G.path && "lw:pointer-events-none lw:opacity-40"
            ),
            style: {
              paddingLeft: D,
              color: v ? "#ffffff" : r ? Mr : o,
              backgroundColor: v ? _ : void 0
            },
            children: [
              G.icon ? /* @__PURE__ */ l("span", { className: "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:text-inherit", children: G.icon }) : null,
              /* @__PURE__ */ l("span", { className: "lw:min-w-0 lw:flex-auto lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", children: G.text })
            ]
          },
          te
        )
      ];
    });
  }
}, bi = ({
  link: e,
  activePath: t,
  onLinkClick: n,
  accentColor: o,
  isSecondary: r,
  railShowTitles: s
}) => {
  const i = !!(e.path && t === e.path), { className: a, style: u } = Dr(
    r,
    o,
    i,
    s
  ), d = (p) => {
    p.stopPropagation(), !(e.path && !Tt(p)) && (p.preventDefault(), e.path && (n == null || n(e.path)));
  }, m = s ? /* @__PURE__ */ l(Pr, { link: e }) : e.icon;
  return Fr(
    e.path ? /* @__PURE__ */ l(
      "a",
      {
        href: e.path,
        "aria-label": e.text,
        onClick: d,
        className: a,
        style: u,
        children: m
      }
    ) : /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        "aria-label": e.text,
        onClick: d,
        disabled: !0,
        className: a,
        style: u,
        children: m
      }
    ),
    e.text,
    s
  );
}, xi = () => /* @__PURE__ */ l("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ l(en, { className: "lw:w-[60%]" }) }), vi = () => /* @__PURE__ */ l("div", { className: "lw:my-4 lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ l(en, { className: "lw:w-[60%]" }) }), Wo = (e, t) => e.map((n, o) => /* @__PURE__ */ x(c.Fragment, { children: [
  t(n, o),
  o < e.length - 1 ? /* @__PURE__ */ l(xi, {}) : null
] }, o)), yi = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: o,
  accentColor: r = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: i = !1
}) => {
  const a = (d, m) => St(d) ? /* @__PURE__ */ l(
    gi,
    {
      link: d,
      activePath: n,
      onLinkClick: o,
      accentColor: r,
      isSecondary: m,
      surfaceBackgroundColor: s,
      railShowTitles: i
    }
  ) : /* @__PURE__ */ l(
    bi,
    {
      link: d,
      activePath: n,
      onLinkClick: o,
      accentColor: r,
      isSecondary: m,
      railShowTitles: i
    }
  ), u = i ? "lw:gap-2.5" : "lw:gap-2";
  return /* @__PURE__ */ x(
    "div",
    {
      className: b(
        "lw:box-border lw:flex lw:w-full lw:grow lw:flex-col lw:items-center lw:justify-start lw:pt-4",
        u
      ),
      children: [
        Wo(e, (d) => a(d, !1)),
        t.length > 0 ? /* @__PURE__ */ x(ve, { children: [
          /* @__PURE__ */ l(vi, {}),
          /* @__PURE__ */ l("div", { className: "lw:mt-auto lw:pb-4", children: /* @__PURE__ */ l(
            "div",
            {
              className: b(
                "lw:flex lw:flex-col lw:items-center",
                u
              ),
              children: Wo(
                t,
                (d) => a(d, !0)
              )
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Ei = yi, Ni = Rt.Root, Si = Rt.Trigger, _i = "lw:relative lw:flex lw:min-h-8 lw:cursor-pointer lw:items-center lw:gap-2 lw:rounded-sm lw:px-2 lw:py-1 lw:text-sm lw:outline-none lw:select-none lw:focus:bg-accent lw:data-[highlighted]:bg-accent lw:data-[disabled]:pointer-events-none lw:data-[disabled]:opacity-50 lw:data-[variant=destructive]:text-destructive lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4", Ri = "lw:z-[1400] lw:max-h-(--radix-dropdown-menu-content-available-height) lw:min-w-40 lw:overflow-x-hidden lw:overflow-y-auto lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:p-1 lw:text-popover-foreground lw:shadow-popover lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95", Br = c.forwardRef(
  ({
    className: e,
    sideOffset: t = 4,
    align: n = "start",
    unstyled: o = !1,
    ...r
  }, s) => {
    const i = ln();
    return /* @__PURE__ */ l(Rt.Portal, { children: /* @__PURE__ */ l(
      Rt.Content,
      {
        ref: s,
        ...i,
        "data-slot": "dropdown-menu-content",
        sideOffset: t,
        align: n,
        className: b(
          o ? "lw:z-[1400] lw:outline-none" : Ri,
          e
        ),
        ...r
      }
    ) });
  }
);
Br.displayName = "DropdownMenuContent";
const qt = c.forwardRef(({ className: e, variant: t = "default", ...n }, o) => /* @__PURE__ */ l(
  Rt.Item,
  {
    ref: o,
    "data-slot": "dropdown-menu-item",
    "data-variant": t,
    className: b(_i, e),
    ...n
  }
));
qt.displayName = "DropdownMenuItem";
const Ln = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Rt.Separator,
  {
    ref: n,
    "data-slot": "dropdown-menu-separator",
    className: b("lw:-mx-1 lw:my-1 lw:h-px lw:bg-border", e),
    ...t
  }
));
Ln.displayName = "DropdownMenuSeparator";
const Ti = (e) => e ? ar(e) : "USER", Ai = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t.charAt(0).toUpperCase()).join(""), Ho = "lw:max-w-full lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", Cl = ({ count: e }) => e ? /* @__PURE__ */ l("span", { className: "lw:h-5 lw:min-w-[22px] lw:rounded-[10px] lw:bg-destructive-fill lw:px-1.5 lw:text-center lw:text-xs lw:leading-5 lw:font-semibold lw:text-white", children: e > 99 ? "99+" : e }) : null, jl = ({ name: e, avatar: t, color: n, size: o = 36 }) => {
  const [r, s] = c.useState(!1);
  c.useEffect(() => s(!1), [t]);
  const i = !!t && !r;
  return /* @__PURE__ */ l(
    "span",
    {
      className: "lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:overflow-hidden lw:rounded-full lw:leading-none lw:font-semibold lw:text-white lw:select-none",
      style: {
        width: o,
        height: o,
        fontSize: o * 0.36,
        backgroundColor: i ? void 0 : n
      },
      children: i ? /* @__PURE__ */ l(
        "img",
        {
          src: t,
          alt: e,
          onError: () => s(!0),
          className: "lw:size-full lw:object-cover"
        }
      ) : Ai(e)
    }
  );
}, zr = ({ name: e, role: t, avatar: n, avatarColor: o, showText: r }) => /* @__PURE__ */ x(ve, { children: [
  /* @__PURE__ */ l(jl, { name: e, avatar: n, color: o }),
  r && /* @__PURE__ */ x("span", { className: "lw:flex lw:min-w-0 lw:grow lw:flex-col lw:items-start lw:text-left", children: [
    /* @__PURE__ */ l(
      "span",
      {
        className: b(
          Ho,
          "lw:text-sm lw:leading-[1.43] lw:font-semibold"
        ),
        children: e
      }
    ),
    /* @__PURE__ */ l(
      "span",
      {
        className: b(
          Ho,
          "lw:text-xs lw:leading-[1.66] lw:opacity-80"
        ),
        children: Ti(t)
      }
    )
  ] })
] }), Ci = {
  above: { side: "top", align: "start", sideOffset: 8 },
  "above-end": { side: "top", align: "end", sideOffset: 8 },
  beside: { side: "right", align: "end", sideOffset: 12 }
}, An = "lw:mx-1 lw:min-h-9 lw:gap-0 lw:rounded-md lw:px-4 lw:text-sm lw:[&_svg:not([class*='size-'])]:size-5", Cn = "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:items-center lw:text-muted-foreground", Oi = ({
  anchorEl: e,
  onClose: t,
  placement: n,
  width: o,
  avatarColor: r,
  showNotifications: s,
  notificationCount: i,
  onNotificationsClick: a,
  userName: u = "User",
  userRole: d,
  userAvatar: m,
  menuItems: p = [],
  showSettings: g,
  onSettingsClick: h,
  showThemeToggler: w,
  theme: N,
  onThemeToggle: S,
  onLogout: T
}) => {
  const y = (C) => () => {
    t(), C == null || C();
  }, _ = !!e, O = _ ? e.getBoundingClientRect() : null, E = c.useRef(null);
  c.useEffect(() => {
    _ && typeof document < "u" && (E.current = document.activeElement);
  }, [_]);
  const R = Ci[n], A = (C, K) => {
    const F = N === C;
    return /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        "aria-pressed": F,
        disabled: !S,
        onClick: () => !F && (S == null ? void 0 : S()),
        className: b(
          "lw:h-8 lw:flex-1 lw:cursor-pointer lw:rounded-md lw:text-sm lw:font-medium lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50",
          F ? "lw:bg-surface lw:text-foreground lw:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.08)]" : "lw:text-muted-foreground lw:hover:text-foreground"
        ),
        children: K
      }
    );
  };
  return /* @__PURE__ */ x(ve, { children: [
    _ && typeof document < "u" ? or(
      /* @__PURE__ */ l(
        "div",
        {
          "aria-hidden": "true",
          "data-slot": "menu-backdrop",
          className: "lw:fixed lw:inset-0 lw:z-[1399]"
        }
      ),
      document.body
    ) : null,
    /* @__PURE__ */ x(
      Ni,
      {
        open: _,
        onOpenChange: (C) => !C && t(),
        modal: !1,
        children: [
          /* @__PURE__ */ l(Si, { asChild: !0, children: /* @__PURE__ */ l(
            "span",
            {
              "aria-hidden": "true",
              tabIndex: -1,
              className: "lw:pointer-events-none lw:fixed",
              style: {
                left: (O == null ? void 0 : O.left) ?? 0,
                top: (O == null ? void 0 : O.top) ?? 0,
                width: (O == null ? void 0 : O.width) ?? 0,
                height: (O == null ? void 0 : O.height) ?? 0
              }
            }
          ) }),
          /* @__PURE__ */ x(
            Br,
            {
              side: R.side,
              align: R.align,
              sideOffset: R.sideOffset,
              collisionPadding: 8,
              onCloseAutoFocus: (C) => {
                var K, F;
                C.preventDefault(), (F = (K = E.current) == null ? void 0 : K.focus) == null || F.call(K);
              },
              className: "lw:min-w-0 lw:rounded-[10px] lw:px-0 lw:py-1 lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
              style: {
                width: o ?? 240,
                maxWidth: "calc(100vw - 16px)"
              },
              children: [
                /* @__PURE__ */ l("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:px-3 lw:py-2", children: /* @__PURE__ */ l(
                  zr,
                  {
                    name: u,
                    role: d,
                    avatar: m,
                    avatarColor: r,
                    showText: !0
                  }
                ) }),
                /* @__PURE__ */ l(Ln, { className: "lw:mx-0" }),
                s && /* @__PURE__ */ x(
                  qt,
                  {
                    className: An,
                    onSelect: y(a),
                    children: [
                      /* @__PURE__ */ l("span", { className: Cn, children: /* @__PURE__ */ l(tr, {}) }),
                      /* @__PURE__ */ l("span", { className: "lw:flex-auto", children: "Notifications" }),
                      /* @__PURE__ */ l(Cl, { count: i })
                    ]
                  }
                ),
                p.map((C) => /* @__PURE__ */ x(
                  qt,
                  {
                    className: An,
                    onSelect: y(C.onClick),
                    children: [
                      /* @__PURE__ */ l("span", { className: Cn, children: C.icon }),
                      /* @__PURE__ */ l("span", { className: "lw:flex-auto", children: C.label }),
                      /* @__PURE__ */ l(Cl, { count: C.badge })
                    ]
                  },
                  C.key
                )),
                g && /* @__PURE__ */ x(
                  qt,
                  {
                    className: An,
                    onSelect: y(h),
                    children: [
                      /* @__PURE__ */ l("span", { className: Cn, children: /* @__PURE__ */ l(vs, {}) }),
                      /* @__PURE__ */ l("span", { className: "lw:flex-auto", children: "Settings" })
                    ]
                  }
                ),
                w && /* @__PURE__ */ x(ve, { children: [
                  /* @__PURE__ */ l(Ln, { className: "lw:mx-0" }),
                  /* @__PURE__ */ x("div", { className: "lw:px-3 lw:py-2", children: [
                    /* @__PURE__ */ l("span", { className: "lw:mb-1.5 lw:block lw:text-xs lw:leading-[1.5] lw:font-normal lw:tracking-[0.08em] lw:text-muted-foreground lw:uppercase", children: "— Theme" }),
                    /* @__PURE__ */ x(
                      "div",
                      {
                        role: "group",
                        "aria-label": "Theme",
                        className: "lw:flex lw:gap-1 lw:rounded-lg lw:bg-accent lw:p-1",
                        children: [
                          A("light", "Light"),
                          A("dark", "Dark")
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ l(Ln, { className: "lw:mx-0" }),
                /* @__PURE__ */ x(
                  qt,
                  {
                    className: b(
                      An,
                      // The dark palette's error colors are too dim on the dark menu
                      N === "dark" ? "lw:text-[hsl(0,90%,65%)]" : "lw:text-destructive"
                    ),
                    onSelect: y(T),
                    children: [
                      /* @__PURE__ */ l("span", { className: b(Cn, "lw:text-inherit"), children: /* @__PURE__ */ l(nr, { className: "lw:size-5 lw:text-current" }) }),
                      /* @__PURE__ */ l("span", { className: "lw:flex-auto", children: "Log out" })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}, Gr = Oi, Wr = 64, $i = 2, Ht = ({
  label: e,
  icon: t,
  onClick: n,
  active: o,
  color: r,
  activeColor: s,
  activeBackground: i,
  ariaLabel: a,
  haspopup: u,
  isPage: d = !1,
  href: m,
  testId: p
}) => {
  const g = b(
    "lw:flex lw:h-full lw:min-w-0 lw:flex-[1_1_0] lw:cursor-pointer lw:flex-col lw:items-center lw:justify-center lw:gap-0.5 lw:border-0 lw:bg-transparent lw:p-0 lw:no-underline lw:outline-none lw:select-none",
    "lw:focus-visible:outline-2 lw:focus-visible:outline-offset-[-4px] lw:focus-visible:outline-(--lw-item-active) lw:focus-visible:outline-solid"
  ), h = {
    color: o ? s : r,
    "--lw-item-active": s
  }, w = /* @__PURE__ */ x(ve, { children: [
    /* @__PURE__ */ l(
      "span",
      {
        className: "lw:flex lw:h-7 lw:min-w-12 lw:items-center lw:justify-center lw:rounded-[14px] lw:transition-colors lw:duration-150 lw:[&>svg]:size-6",
        style: {
          backgroundColor: o ? i : "transparent"
        },
        children: t
      }
    ),
    /* @__PURE__ */ l(
      "span",
      {
        className: b(
          "lw:text-[11px] lw:leading-[1.2] lw:text-inherit",
          o ? "lw:font-semibold" : "lw:font-medium"
        ),
        children: e
      }
    )
  ] }), N = {
    onClick: n,
    "aria-label": a ?? e,
    "aria-haspopup": u,
    "aria-expanded": u ? o : void 0,
    "aria-current": d && o ? "page" : void 0,
    "data-testid": p,
    className: g,
    style: h
  };
  return m ? /* @__PURE__ */ l("a", { href: m, ...N, children: w }) : /* @__PURE__ */ l("button", { type: "button", ...N, children: w });
}, Ii = ({
  onMenuClick: e,
  menuOpen: t,
  onSearchClick: n,
  searchOpen: o,
  showAssistant: r,
  onAssistantClick: s,
  assistantActive: i,
  showProfile: a,
  background: u,
  color: d,
  activeColor: m,
  activeBackground: p,
  pinnedLinks: g = [],
  activePath: h,
  onLinkClick: w,
  ...N
}) => {
  const S = g.filter((A) => A.path).slice(0, $i), [T, y] = c.useState(
    null
  ), { userName: _ = "User", userAvatar: O, avatarColor: E } = N, R = { color: d, activeColor: m, activeBackground: p };
  return /* @__PURE__ */ x(
    "nav",
    {
      "aria-label": "Mobile navigation",
      "data-testid": "mobile-bottom-nav",
      className: "lw:fixed lw:right-0 lw:bottom-0 lw:left-0 lw:z-[1199] lw:flex lw:items-stretch lw:border-t lw:border-solid lw:border-border lw:pb-[env(safe-area-inset-bottom,0px)]",
      style: {
        height: `calc(${Wr}px + env(safe-area-inset-bottom, 0px))`,
        backgroundColor: u
      },
      children: [
        e && /* @__PURE__ */ l(
          Ht,
          {
            label: "Menu",
            icon: /* @__PURE__ */ l(lr, {}),
            onClick: e,
            active: t,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...R
          }
        ),
        S.map((A) => /* @__PURE__ */ l(
          Ht,
          {
            label: A.text,
            icon: A.icon,
            href: A.path,
            onClick: (C) => {
              Tt(C) && (C.preventDefault(), w == null || w(A.path));
            },
            active: st(A, h),
            isPage: !0,
            testId: `mobile-nav-link-${A.text}`,
            ...R
          },
          A.path
        )),
        r && /* @__PURE__ */ l(
          Ht,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ l(
              "span",
              {
                className: "lw:flex lw:h-7 lw:w-10 lw:items-center lw:justify-center lw:rounded-lg lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.1)]",
                style: {
                  borderColor: i ? "#09C1AE" : "rgba(9, 193, 174, 0.45)"
                },
                children: /* @__PURE__ */ l(jt, { size: 18 })
              }
            ),
            onClick: s,
            active: i,
            testId: "mobile-nav-nexa",
            ...R
          }
        ),
        n && /* @__PURE__ */ l(
          Ht,
          {
            label: "Search",
            icon: /* @__PURE__ */ l(kl, {}),
            onClick: n,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...R
          }
        ),
        a && /* @__PURE__ */ x(ve, { children: [
          /* @__PURE__ */ l(
            Ht,
            {
              label: "Account",
              ariaLabel: `Account menu for ${_}`,
              icon: /* @__PURE__ */ l(
                jl,
                {
                  name: _,
                  avatar: O,
                  color: E,
                  size: 26
                }
              ),
              onClick: (A) => y(A.currentTarget),
              active: !!T,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...R
            }
          ),
          /* @__PURE__ */ l(
            Gr,
            {
              anchorEl: T,
              onClose: () => y(null),
              placement: "above-end",
              width: 280,
              ...N
            }
          )
        ] })
      ]
    }
  );
}, ki = Ii, Ol = Xt.Root, Li = {
  right: "lw:inset-y-0 lw:right-0 lw:h-full lw:border-l lw:data-[state=open]:slide-in-from-right lw:data-[state=closed]:slide-out-to-right",
  left: "lw:inset-y-0 lw:left-0 lw:h-full lw:border-r lw:data-[state=open]:slide-in-from-left lw:data-[state=closed]:slide-out-to-left",
  top: "lw:inset-x-0 lw:top-0 lw:h-auto lw:border-b lw:data-[state=open]:slide-in-from-top lw:data-[state=closed]:slide-out-to-top",
  bottom: "lw:inset-x-0 lw:bottom-0 lw:h-auto lw:border-t lw:data-[state=open]:slide-in-from-bottom lw:data-[state=closed]:slide-out-to-bottom"
}, Fn = c.forwardRef(
  ({
    className: e,
    children: t,
    side: n = "right",
    overlay: o = !0,
    overlayClassName: r,
    srTitle: s,
    ...i
  }, a) => {
    const u = ln();
    return /* @__PURE__ */ x(Xt.Portal, { children: [
      o ? /* @__PURE__ */ l(
        Xt.Overlay,
        {
          ...u,
          "data-slot": "sheet-overlay",
          "data-invisible": o === "invisible" ? "true" : void 0,
          className: b(
            "lw:fixed lw:inset-0 lw:z-[1200] lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0",
            o === "invisible" ? "lw:bg-transparent" : "lw:bg-black/35",
            r
          )
        }
      ) : null,
      /* @__PURE__ */ x(
        Xt.Content,
        {
          ref: a,
          ...u,
          "data-slot": "sheet-content",
          "data-side": n,
          "aria-describedby": void 0,
          className: b(
            "lw:fixed lw:z-[1200] lw:flex lw:flex-col lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none lw:transition lw:ease-in-out lw:data-[state=open]:animate-in lw:data-[state=open]:duration-200 lw:data-[state=closed]:animate-out lw:data-[state=closed]:duration-150",
            Li[n],
            e
          ),
          ...i,
          children: [
            s ? /* @__PURE__ */ l(Xt.Title, { className: "lw:sr-only", children: s }) : null,
            t
          ]
        }
      )
    ] });
  }
);
Fn.displayName = "SheetContent";
const Mi = ({
  open: e,
  onClose: t,
  search: n
}) => /* @__PURE__ */ l(Ol, { open: e, onOpenChange: (o) => !o && t(), children: /* @__PURE__ */ l(
  Fn,
  {
    side: "top",
    "aria-label": "Search",
    srTitle: "Search",
    onOpenAutoFocus: (o) => {
      var s;
      const r = (s = o.currentTarget) == null ? void 0 : s.querySelector(
        'input, textarea, [contenteditable="true"]'
      );
      r && (o.preventDefault(), r.focus());
    },
    className: "lw:rounded-b-xl lw:border-b-0 lw:p-4 lw:pt-[calc(16px+env(safe-area-inset-top,0px))]",
    children: /* @__PURE__ */ x(
      "div",
      {
        "data-testid": "mobile-search-sheet",
        className: "lw:flex lw:flex-row lw:items-center lw:gap-2",
        children: [
          /* @__PURE__ */ l("div", { "data-lw-host": "", className: "lw:min-w-0 lw:flex-auto", children: n }),
          /* @__PURE__ */ l(
            jn,
            {
              variant: "ghost-primary",
              onClick: t,
              className: "lw:shrink-0",
              children: "Cancel"
            }
          )
        ]
      }
    )
  }
) }), Di = Mi, Pi = ({
  height: e,
  onMenuClick: t,
  appName: n,
  logo: o,
  onBrandClick: r,
  brandMenuOpen: s,
  background: i,
  color: a,
  brandColor: u = a,
  endContent: d
}) => /* @__PURE__ */ l(
  "header",
  {
    className: "lw:fixed lw:top-0 lw:right-0 lw:left-0 lw:z-[1100] lw:flex lw:flex-col lw:border-b lw:border-solid lw:border-border",
    style: { height: e, background: i, color: a },
    children: /* @__PURE__ */ x(
      "div",
      {
        className: "lw:flex lw:items-center lw:gap-2 lw:px-2",
        style: { minHeight: e },
        children: [
          t && /* @__PURE__ */ l(
            jn,
            {
              variant: "bare",
              size: "none",
              "aria-label": "Open navigation menu",
              onClick: t,
              className: "lw:size-10 lw:rounded-full lw:text-inherit lw:hover:bg-black/5 lw:dark:hover:bg-white/10 lw:[&_svg:not([class*=size-])]:size-6",
              style: { color: a },
              children: /* @__PURE__ */ l(lr, {})
            }
          ),
          /* @__PURE__ */ l(
            Dn,
            {
              title: n,
              appName: n,
              logo: o,
              onClick: r,
              menuOpen: s,
              color: u,
              testId: "mobile-brand"
            }
          ),
          d ? /* @__PURE__ */ l("div", { className: "lw:ml-auto lw:flex lw:items-center", children: d }) : null
        ]
      }
    )
  }
), Fi = Pi;
function Hr({
  count: e = 0,
  max: t = 99,
  dot: n = !1,
  showZero: o = !1,
  invisible: r,
  children: s,
  className: i,
  badgeClassName: a,
  badgeStyle: u,
  label: d
}) {
  const m = r ?? (!o && e <= 0);
  return /* @__PURE__ */ x(
    "span",
    {
      className: b(
        "lw:relative lw:inline-flex lw:shrink-0 lw:align-middle",
        i
      ),
      children: [
        s,
        /* @__PURE__ */ l(
          "span",
          {
            "data-slot": "badge",
            "data-dot": n ? "true" : void 0,
            "data-invisible": m ? "true" : "false",
            "aria-hidden": d ? void 0 : !0,
            "aria-label": d,
            className: b(
              "lw:pointer-events-none lw:absolute lw:top-0 lw:right-0 lw:z-[1] lw:flex lw:translate-x-1/2 lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-full lw:bg-destructive-fill lw:font-semibold lw:text-white lw:transition-transform lw:duration-200",
              n ? "lw:size-2" : "lw:h-5 lw:min-w-5 lw:px-1.5 lw:text-[0.75rem] lw:leading-none",
              m && "lw:scale-0",
              a
            ),
            style: u,
            children: n ? null : e > t ? `${t}+` : e
          }
        )
      ]
    }
  );
}
const Ur = c.createContext(void 0), Bi = ({
  count: e,
  onClick: t,
  color: n,
  hoverColor: o,
  tooltipPlacement: r,
  testId: s
}) => {
  const i = Hl(), a = c.useContext(Ur), u = c.useContext(on), d = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ l(je, { title: d, side: r, arrow: !0, ...i, children: /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      onClick: t,
      "aria-label": d,
      "data-testid": s,
      className: b(
        "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg) lw:[&_svg]:size-6",
        !u && "lw:p-2"
      ),
      style: {
        color: n,
        "--lw-fg": n,
        "--lw-hover": o,
        ...u ? {
          width: Ae,
          height: Ae
        } : {}
      },
      children: /* @__PURE__ */ l(
        Hr,
        {
          count: e,
          max: 99,
          badgeClassName: "lw:h-4 lw:min-w-4 lw:px-1 lw:text-[10px]",
          children: a ?? /* @__PURE__ */ l(tr, {})
        }
      )
    }
  ) });
}, ql = Bi, Uo = 14, zi = 18, Gi = "blur(12px) saturate(180%) brightness(1.04)", Wi = (() => {
  var t;
  if (typeof navigator > "u")
    return !1;
  const e = (t = navigator.userAgentData) == null ? void 0 : t.brands;
  return !!(e != null && e.some(({ brand: n }) => /Chromium/.test(n)));
})(), Hi = (e, t, n) => {
  const o = Math.min(0.45, n / e), r = Math.min(0.45, n / t), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${o}" stop-color="#800000"/><stop offset="${1 - o}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${r}" stop-color="#008000"/><stop offset="${1 - r}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, Ui = 140, Xo = 0.22, Xi = 0.14, Ki = (e, t, n) => {
  const o = c.useRef(n);
  o.current = n, c.useEffect(() => {
    if (!t || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const r = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let i = 0;
    const a = () => {
      var h;
      const g = e.current;
      g && (g.style.setProperty("--lx", `${s.x.toFixed(1)}px`), g.style.setProperty("--ly", `${s.y.toFixed(1)}px`), g.style.setProperty("--li", s.i.toFixed(3)), (h = o.current) == null || h.call(o, s.x, s.y, s.i));
    }, u = () => {
      s.x += (r.x - s.x) * Xo, s.y += (r.y - s.y) * Xo, s.i += (r.i - s.i) * Xi;
      const g = Math.abs(r.x - s.x) < 0.3 && Math.abs(r.y - s.y) < 0.3 && Math.abs(r.i - s.i) < 3e-3;
      g && (s.x = r.x, s.y = r.y, s.i = r.i), a(), i = g ? 0 : requestAnimationFrame(u);
    }, d = () => {
      i || (i = requestAnimationFrame(u));
    }, m = (g) => {
      const h = e.current;
      if (g.pointerType === "touch" || !h)
        return;
      const w = h.getBoundingClientRect();
      if (!w.width || !w.height)
        return;
      r.x = (g.clientX - w.left) * h.offsetWidth / w.width, r.y = (g.clientY - w.top) * h.offsetHeight / w.height;
      const N = Math.max(
        w.left - g.clientX,
        0,
        g.clientX - w.right
      ), S = Math.max(
        w.top - g.clientY,
        0,
        g.clientY - w.bottom
      );
      r.i = Math.max(0, 1 - Math.hypot(N, S) / Ui), s.i < 0.01 && (s.x = r.x, s.y = r.y), d();
    }, p = () => {
      r.i = 0, d();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", p), () => {
      cancelAnimationFrame(i), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", p);
    };
  }, [e, t]);
}, Xr = c.forwardRef(
  ({
    isDark: e,
    solid: t,
    className: n,
    style: o,
    "data-testid": r,
    refract: s = !0,
    light: i = !0,
    onLight: a
  }, u) => {
    const d = c.useRef(null), m = s && Nl;
    Ki(d, i && Nl, a);
    const p = Wn(), g = `lumora-glass-${c.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [h, w] = c.useState(null), N = c.useRef(null), S = c.useCallback(
      (O) => {
        var R;
        if (d.current = O, typeof u == "function" ? u(O) : u && (u.current = O), (R = N.current) == null || R.disconnect(), N.current = null, !O || !m || !Wi || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const A = O.offsetWidth, C = O.offsetHeight;
          w(
            (K) => (K == null ? void 0 : K.width) === A && K.height === C ? K : A && C ? { width: A, height: C } : null
          );
        };
        N.current = new ResizeObserver(E), N.current.observe(O), E();
      },
      [u, m]
    ), T = c.useMemo(
      () => h ? Hi(h.width, h.height, Uo) : null,
      [h]
    ), y = m && !!(T && h), _ = Fs(e, t, p);
    return /* @__PURE__ */ x(ve, { children: [
      y ? /* @__PURE__ */ l(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ x(
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
                /* @__PURE__ */ l(
                  "feImage",
                  {
                    href: T,
                    x: "0",
                    y: "0",
                    width: h.width,
                    height: h.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ l(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: Uo / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ l(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: zi,
                    xChannelSelector: "R",
                    yChannelSelector: "G"
                  }
                )
              ]
            }
          )
        }
      ) : null,
      /* @__PURE__ */ l(
        "div",
        {
          ref: S,
          "aria-hidden": !0,
          "data-testid": r,
          "data-refract": y ? "true" : void 0,
          className: b(
            _.className,
            y && "lw:reduce-transparency:[backdrop-filter:none]! lw:reduce-transparency:[-webkit-backdrop-filter:none]!",
            n
          ),
          style: {
            ..._.style,
            ...y ? {
              backdropFilter: `url(#${g}) ${Gi}`
            } : {},
            ...o
          }
        }
      )
    ] });
  }
);
Xr.displayName = "GlassLayer";
const qn = Xr, ji = '[role="menuitem"]:not([aria-disabled="true"])', Kr = (e) => Array.from(e.querySelectorAll(ji)), jr = (e) => {
  if (!e)
    return !1;
  const t = e.querySelector(
    '[role="menuitem"][data-selected="true"]'
  ) ?? Kr(e)[0];
  return t == null || t.focus(), !!t;
}, Yl = c.forwardRef(({ className: e, onKeyDown: t, ...n }, o) => /* @__PURE__ */ l(
  "ul",
  {
    ref: o,
    role: "menu",
    className: b(
      "lw:relative lw:m-0 lw:list-none lw:outline-none",
      e
    ),
    onKeyDown: (r) => {
      if (t == null || t(r), r.defaultPrevented)
        return;
      const s = Kr(r.currentTarget);
      if (!s.length)
        return;
      const i = s.indexOf(document.activeElement);
      let a = null;
      switch (r.key) {
        case "ArrowDown":
          a = i < 0 ? 0 : (i + 1) % s.length;
          break;
        case "ArrowUp":
          a = i < 0 ? s.length - 1 : (i - 1 + s.length) % s.length;
          break;
        case "Home":
          a = 0;
          break;
        case "End":
          a = s.length - 1;
          break;
        default:
          return;
      }
      r.preventDefault(), s[a].focus();
    },
    ...n
  }
));
Yl.displayName = "ShellMenuList";
const Bn = c.forwardRef(({ className: e, onKeyDown: t, selected: n, ...o }, r) => /* @__PURE__ */ l(
  "li",
  {
    ref: r,
    role: "menuitem",
    tabIndex: -1,
    "data-selected": n ? "true" : void 0,
    className: b(
      "lw:relative lw:flex lw:cursor-pointer lw:items-center lw:outline-none lw:select-none lw:transition-colors",
      e
    ),
    onKeyDown: (s) => {
      t == null || t(s), !s.defaultPrevented && (s.key === "Enter" || s.key === " ") && (s.preventDefault(), s.currentTarget.click());
    },
    ...o
  }
));
Bn.displayName = "ShellMenuItem";
const qi = ({
  className: e
}) => /* @__PURE__ */ l(
  "li",
  {
    role: "separator",
    className: b("lw:my-1 lw:h-px lw:list-none lw:bg-border", e)
  }
), $l = "lw:outline-none lw:focus:outline-none", Yi = "lw:flex lw:flex-col lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", Ko = Ie(Er), jo = Ie(Kn), Vi = '[role="menuitem"], button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', Zi = ({ mode: e, onToggle: t, accentColor: n, tint: o, glass: r = !1 }) => {
  const s = qe(), i = Wn(), a = c.useRef(null), u = c.useRef(null), d = (g) => {
    var h;
    g !== e && (t == null || t()), (h = (g === "light" ? a : u).current) == null || h.focus();
  }, m = (g) => {
    if (!(g.key === "Tab" || g.key === "Escape"))
      switch (g.stopPropagation(), g.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          g.preventDefault(), d(e === "light" ? "dark" : "light");
          break;
        case "Home":
          g.preventDefault(), d("light");
          break;
        case "End":
          g.preventDefault(), d("dark");
          break;
      }
  }, p = (g, h, w, N) => {
    const S = e === g;
    return /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        ref: N,
        role: "radio",
        "aria-checked": S,
        "aria-label": h,
        tabIndex: S ? 0 : -1,
        onClick: () => d(g),
        "data-testid": `theme-segment-${g}`,
        className: b(
          "lw:inline-flex lw:h-6 lw:w-8 lw:cursor-pointer lw:items-center lw:justify-center lw:transition-[background-color,color,box-shadow,transform] lw:duration-150 lw:ease-out lw:focus-visible:shadow-[0_0_0_2px_var(--lw-seg-ring)]",
          r ? "lw:rounded-md" : "lw:rounded-full",
          !S && "lw:text-muted-foreground lw:hover:text-foreground",
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          r && "lw:hover:scale-[1.06] lw:active:scale-[0.94]",
          r && !S && (s ? "lw:hover:bg-white/12" : "lw:hover:bg-white/75"),
          $l
        ),
        style: {
          "--lw-seg-ring": at(n, 0.6),
          // White on dark: the accent is too dim against a dark surface
          ...S ? {
            color: s ? "#ffffff" : n,
            backgroundColor: o,
            ...r ? wr(s, i) : {}
          } : {}
        },
        children: /* @__PURE__ */ l(w, { className: "lw:size-4" })
      }
    );
  };
  return /* @__PURE__ */ x(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: m,
      className: b(
        "lw:flex lw:shrink-0 lw:flex-row lw:gap-0.5 lw:bg-selected lw:p-[3px]",
        r ? "lw:rounded-md" : "lw:rounded-full"
      ),
      children: [
        p("light", "Light", Es, a),
        p("dark", "Dark", Ns, u)
      ]
    }
  );
}, Ji = ({
  open: e,
  anchorEl: t,
  onClose: n,
  width: o,
  renderAvatar: r,
  userName: s,
  userEmail: i,
  roleLabel: a,
  accentColor: u,
  tint: d,
  showThemeToggler: m,
  theme: p,
  onThemeToggle: g,
  onProfileClick: h,
  onAiUsageClick: w,
  onLinkClick: N,
  menuItems: S = [],
  onLogout: T,
  glass: y = !1
}) => {
  const _ = qe(), O = Pl(_ ? "hsl(220, 30%, 7%)" : "#ffffff"), E = c.useRef(null), R = c.useMemo(() => ({ current: t }), [t]), A = Ul({
    enabled: y,
    isDark: _,
    selector: Vi,
    radius: Qe
  }), C = (v) => {
    n(), v == null || v();
  }, K = (v) => {
    n(), v.onClick ? v.onClick() : v.path && (N == null || N(v.path));
  }, F = b(
    "lw:min-h-8 lw:gap-1 lw:px-3 lw:py-1.5 lw:text-sm lw:leading-5",
    y ? "lw:rounded-md" : "lw:rounded-lg lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)"
  ), B = "lw:flex lw:min-w-8 lw:shrink-0 lw:items-center lw:[&_svg]:size-5", M = b(
    "lw:cursor-pointer lw:rounded-sm lw:text-xs lw:leading-[18px] lw:font-semibold lw:tracking-[0.02em] lw:hover:underline lw:hover:underline-offset-2 lw:focus-visible:shadow-[0_0_0_2px_var(--lw-link-ring)]",
    $l
  ), G = _ ? "#ffffff" : u, te = w ? /* @__PURE__ */ x(
    "div",
    {
      "data-testid": "account-menu-links",
      className: "lw:mt-0.5 lw:flex lw:flex-row lw:items-center lw:gap-1.5",
      children: [
        h ? /* @__PURE__ */ x(ve, { children: [
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: () => C(h),
              "data-testid": "account-menu-view-profile",
              className: M,
              style: { color: G },
              children: "View profile"
            }
          ),
          /* @__PURE__ */ l("span", { "aria-hidden": !0, className: "lw:text-xs lw:text-faint", children: "·" })
        ] }) : null,
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => C(w),
            "data-testid": "account-menu-ai-usage",
            className: M,
            style: { color: G },
            children: "My AI usage"
          }
        )
      ]
    }
  ) : null, D = /* @__PURE__ */ x("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:p-3", children: [
    r(36),
    /* @__PURE__ */ x("div", { className: "lw:min-w-0 lw:flex-1", children: [
      /* @__PURE__ */ l("p", { className: "lw:truncate lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground", children: s }),
      i ? /* @__PURE__ */ l(
        "p",
        {
          "data-testid": "account-menu-email",
          className: "lw:truncate lw:text-xs lw:leading-[18px] lw:text-muted-foreground",
          children: i
        }
      ) : null,
      a ? /* @__PURE__ */ l(
        "span",
        {
          "data-role": !0,
          "data-testid": "account-menu-role",
          className: "lw:block lw:truncate lw:text-xs lw:leading-[1.66] lw:tracking-[0.02em] lw:text-muted-foreground",
          children: a
        }
      ) : null,
      te,
      h && !w ? /* @__PURE__ */ l(
        "span",
        {
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          className: "lw:truncate lw:text-xs lw:leading-[1.66] lw:font-semibold lw:tracking-[0.02em] lw:underline lw:underline-offset-2",
          style: { color: G },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ x(
    rn,
    {
      open: e && !!t,
      onOpenChange: (v) => {
        v || n();
      },
      modal: !0,
      children: [
        /* @__PURE__ */ l(
          sn,
          {
            virtualRef: R
          }
        ),
        /* @__PURE__ */ l(
          Ct,
          {
            unstyled: !0,
            side: "top",
            align: "start",
            sideOffset: 8,
            collisionPadding: 16,
            onOpenAutoFocus: (v) => {
              v.preventDefault(), jr(E.current);
            },
            onCloseAutoFocus: (v) => {
              var $;
              v.preventDefault(), ($ = t == null ? void 0 : t.focus) == null || $.call(t);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ x(
              "div",
              {
                "data-testid": "account-menu",
                "data-glass": y ? "true" : void 0,
                className: b(
                  y ? (
                    // The rows give up their own hover fill: one drop of
                    // glass (the lens) glides behind whichever is hovered
                    "lw:relative lw:rounded-md"
                  ) : Yi
                ),
                style: {
                  width: o,
                  minWidth: o,
                  "--lw-menu-tint": d,
                  "--lw-link-ring": at(u, 0.6)
                },
                children: [
                  y ? /* @__PURE__ */ l(
                    qn,
                    {
                      isDark: _,
                      solid: O,
                      className: b(
                        "lw:absolute lw:inset-0 lw:origin-bottom-left lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${Bl} ${Ko.duration}ms ${Ko.easing} both`
                      }
                    }
                  ) : null,
                  /* @__PURE__ */ x(
                    "div",
                    {
                      ...A.containerProps,
                      className: y ? b(
                        "lw:relative lw:flex lw:flex-col lw:overflow-hidden lw:rounded-[inherit]",
                        $e
                      ) : "lw:contents",
                      style: y ? {
                        animation: `${zl} ${jo.duration}ms ${jo.easing} 70ms both`
                      } : void 0,
                      children: [
                        A.lens,
                        h && !w ? /* @__PURE__ */ l(
                          "button",
                          {
                            type: "button",
                            onClick: () => C(h),
                            "data-testid": "account-menu-header",
                            className: b(
                              "lw:group lw:relative lw:block lw:w-full lw:cursor-pointer lw:text-left lw:transition-colors lw:duration-150 lw:[&_[data-hint]]:hidden lw:hover:[&_[data-hint]]:block lw:hover:[&_[data-role]]:hidden lw:focus-visible:[&_[data-hint]]:block lw:focus-visible:[&_[data-role]]:hidden",
                              !y && "lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)",
                              $l
                            ),
                            children: D
                          }
                        ) : /* @__PURE__ */ l(
                          "div",
                          {
                            "data-testid": "account-menu-header",
                            className: "lw:relative",
                            children: D
                          }
                        ),
                        /* @__PURE__ */ l(en, { className: "lw:relative" }),
                        m ? /* @__PURE__ */ x(
                          "div",
                          {
                            "data-testid": "menu-item-theme",
                            className: b(
                              F,
                              "lw:relative lw:mx-1 lw:mt-1 lw:flex lw:items-center lw:py-1 lw:hover:bg-transparent"
                            ),
                            children: [
                              /* @__PURE__ */ l(
                                "span",
                                {
                                  className: b(
                                    B,
                                    "lw:text-muted-foreground"
                                  ),
                                  children: /* @__PURE__ */ l(ys, {})
                                }
                              ),
                              /* @__PURE__ */ l("span", { className: "lw:flex-1 lw:text-foreground", children: "Theme" }),
                              /* @__PURE__ */ l(
                                Zi,
                                {
                                  glass: y,
                                  mode: p,
                                  onToggle: g,
                                  accentColor: u,
                                  tint: d
                                }
                              )
                            ]
                          }
                        ) : null,
                        /* @__PURE__ */ x(
                          Yl,
                          {
                            ref: E,
                            className: b(
                              "lw:px-1 lw:pb-1",
                              m ? "lw:pt-0" : "lw:pt-1"
                            ),
                            children: [
                              S.map((v) => /* @__PURE__ */ x(
                                Bn,
                                {
                                  onClick: () => K(v),
                                  "data-testid": `menu-item-${v.key}`,
                                  className: b(
                                    F,
                                    "lw:text-foreground"
                                  ),
                                  children: [
                                    /* @__PURE__ */ l(
                                      "span",
                                      {
                                        className: b(
                                          B,
                                          "lw:text-muted-foreground"
                                        ),
                                        children: v.icon
                                      }
                                    ),
                                    /* @__PURE__ */ l("span", { className: "lw:flex-1", children: v.label }),
                                    /* @__PURE__ */ l(Cl, { count: v.badge })
                                  ]
                                },
                                v.key
                              )),
                              T ? /* @__PURE__ */ l(qi, {}) : null,
                              T ? /* @__PURE__ */ x(
                                Bn,
                                {
                                  onClick: () => C(T),
                                  "data-testid": "menu-item-logout",
                                  className: b(
                                    F,
                                    "lw:text-destructive"
                                  ),
                                  children: [
                                    /* @__PURE__ */ l("span", { className: B, children: /* @__PURE__ */ l(nr, {}) }),
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
        )
      ]
    }
  );
}, Qi = Ji, ec = "lw:outline-none lw:focus:outline-none", tc = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: o,
  logo: r,
  title: s,
  onBrandClick: i,
  brandMenuOpen: a,
  brandColor: u,
  headerBackgroundColor: d,
  headerForegroundColor: m,
  activeAccentColor: p = "#01584f",
  activeBackgroundColor: g,
  groupArrowColor: h,
  groupAccentColor: w,
  activeForegroundColor: N,
  foregroundColor: S,
  surfaceBackgroundColor: T,
  flyoutSurfaceColor: y,
  collapsed: _,
  expandedWidth: O,
  collapsedWidth: E,
  topContent: R,
  submenuMode: A,
  color: C,
  hoverColor: K,
  avatarColor: F,
  showProfile: B = !0,
  userName: M = "User",
  userEmail: G,
  userRole: te,
  userAvatar: D,
  showNotifications: v = !0,
  notificationCount: $ = 0,
  onNotificationsClick: P,
  whatsNewCount: Z = 0,
  onProfileClick: H,
  onAiUsageClick: ne,
  menuItems: me,
  onLogout: j,
  theme: V = "light",
  showThemeToggler: we = !0,
  onThemeToggle: J
}) => {
  const Q = qe(), ie = Xn(T, Q), he = C ?? S ?? (Q ? "#ffffff" : p), pe = K ?? w ?? Vt(p), I = F ?? p, z = c.useRef(null), [q, U] = c.useState(!1), ce = te ? ar(te) : void 0, le = (ye) => /* @__PURE__ */ l(
    jl,
    {
      name: M,
      avatar: D,
      color: I,
      size: ye
    }
  ), Se = $ + Z, se = _ && A === "flyout", _e = v ? /* @__PURE__ */ l(
    ql,
    {
      count: Se,
      onClick: P,
      color: he,
      hoverColor: pe,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, De = B ? /* @__PURE__ */ x(
    "button",
    {
      type: "button",
      ref: z,
      onClick: () => U(!0),
      "aria-haspopup": "menu",
      "aria-expanded": q,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      className: b(
        "lw:flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-[10px] lw:hover:bg-(--lw-footer-tint)",
        _ ? "lw:flex-[0_0_auto]" : "lw:flex-1",
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        se ? "lw:p-1" : "lw:p-1.5",
        q ? "lw:bg-(--lw-footer-tint)" : "lw:bg-transparent",
        ec
      ),
      style: { "--lw-footer-tint": pe },
      children: [
        _ && !se && v ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ l(
            Hr,
            {
              dot: !0,
              count: Se,
              className: "lw:rounded-full",
              badgeClassName: "lw:top-[14%] lw:right-[14%]",
              children: le(36)
            }
          )
        ) : le(_ ? 36 : 40),
        _ ? null : /* @__PURE__ */ x("span", { className: "lw:block lw:min-w-0 lw:text-left", children: [
          /* @__PURE__ */ l(
            "span",
            {
              className: "lw:block lw:truncate lw:text-sm lw:leading-[1.3] lw:font-semibold",
              style: { color: he },
              children: M
            }
          ),
          ce ? /* @__PURE__ */ l(
            "span",
            {
              "data-testid": "panel-user-role",
              className: "lw:block lw:truncate lw:text-xs lw:leading-[1.3] lw:tracking-[0.02em] lw:opacity-85",
              style: { color: he },
              children: ce
            }
          ) : null
        ] })
      ]
    }
  ) : null, ge = !!_e && (!_ || se || !De), ke = De || ge ? /* @__PURE__ */ x(
    "div",
    {
      className: b(
        "lw:flex lw:items-center lw:justify-center lw:gap-1",
        se ? "lw:flex-col" : "lw:flex-row"
      ),
      children: [
        se && ge ? _e : null,
        De,
        !se && ge ? _e : null
      ]
    }
  ) : void 0;
  return /* @__PURE__ */ x(
    "div",
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": _ ? "true" : "false",
      className: "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
      children: [
        /* @__PURE__ */ l(
          Tl,
          {
            mainLinks: e,
            secondaryLinks: t,
            activePath: n,
            onLinkClick: o,
            showHeaderBar: !0,
            logo: r,
            title: s,
            onBrandClick: i,
            brandMenuOpen: a,
            brandColor: u,
            headerBackgroundColor: d,
            headerForegroundColor: m,
            activeAccentColor: p,
            activeBackgroundColor: g,
            groupArrowColor: h,
            groupAccentColor: w,
            activeForegroundColor: N,
            foregroundColor: S,
            surfaceBackgroundColor: ie,
            flyoutSurfaceColor: y,
            collapsed: _,
            expandedWidth: O,
            collapsedWidth: E,
            topContent: R,
            footer: ke,
            submenuMode: A
          }
        ),
        B ? /* @__PURE__ */ l(
          Qi,
          {
            open: q,
            anchorEl: z.current,
            onClose: () => U(!1),
            width: Math.max(O - 16, 240),
            renderAvatar: le,
            userName: M,
            userEmail: G,
            roleLabel: ce,
            accentColor: p,
            tint: pe,
            showThemeToggler: we,
            theme: V,
            onThemeToggle: J,
            onProfileClick: H,
            onAiUsageClick: ne,
            onLinkClick: o,
            menuItems: me,
            onLogout: j,
            glass: A === "flyout"
          }
        ) : null
      ]
    }
  );
}, nc = tc, qo = Ie(Er), Yo = Ie(Kn), lc = 240, oc = "lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", rc = ({
  anchorEl: e,
  onClose: t,
  platforms: n,
  currentKey: o,
  onSelect: r,
  accentColor: s,
  glass: i = !1
}) => {
  const a = qe(), u = !!e, d = Pl(a ? "hsl(220, 30%, 7%)" : "#ffffff"), m = c.useRef(null), p = c.useMemo(() => ({ current: e }), [e]), g = Ul({
    enabled: i,
    isDark: a,
    selector: '[role="menuitem"]',
    radius: Qe
  }), h = /* @__PURE__ */ l(
    Yl,
    {
      ref: m,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      className: "lw:p-1",
      children: n.map((w) => {
        const N = w.key === o, S = w.accentColor ?? s;
        return /* @__PURE__ */ x(
          Bn,
          {
            selected: N,
            onClick: () => r(w),
            "data-testid": `platform-item-${w.key}`,
            className: b(
              // Compact: 14px name over a 12px description.
              "lw:px-3 lw:py-1.5",
              i ? (
                // Glass: the tick marks the current platform and
                // the lens is the only hover fill
                "lw:rounded-md"
              ) : "lw:rounded-lg lw:hover:bg-accent lw:focus-visible:bg-accent lw:data-[selected=true]:bg-selected"
            ),
            children: [
              /* @__PURE__ */ l("span", { className: "lw:flex lw:min-w-6 lw:shrink-0 lw:items-center", children: /* @__PURE__ */ l(
                "span",
                {
                  "aria-hidden": !0,
                  className: "lw:block lw:size-2.5 lw:rounded-full",
                  style: {
                    backgroundColor: S,
                    boxShadow: i ? `0 0 0 3px ${a ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ x("span", { className: "lw:min-w-0 lw:flex-auto", children: [
                /* @__PURE__ */ l("span", { className: "lw:block lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground", children: w.name }),
                w.description ? /* @__PURE__ */ l("span", { className: "lw:block lw:text-xs lw:leading-[18px] lw:text-muted-foreground", children: w.description }) : null
              ] }),
              N ? /* @__PURE__ */ l(
                Ss,
                {
                  "data-testid": "platform-current",
                  className: "lw:ml-3 lw:size-[18px] lw:shrink-0",
                  style: { color: S }
                }
              ) : null
            ]
          },
          w.key
        );
      })
    }
  );
  return /* @__PURE__ */ x(
    rn,
    {
      open: u,
      onOpenChange: (w) => {
        w || t();
      },
      modal: !0,
      children: [
        /* @__PURE__ */ l(
          sn,
          {
            virtualRef: p
          }
        ),
        /* @__PURE__ */ l(
          Ct,
          {
            unstyled: !0,
            side: "bottom",
            align: "start",
            sideOffset: 8,
            collisionPadding: 16,
            onClick: (w) => w.stopPropagation(),
            onOpenAutoFocus: (w) => {
              w.preventDefault(), jr(m.current);
            },
            onCloseAutoFocus: (w) => {
              var N;
              w.preventDefault(), (N = e == null ? void 0 : e.focus) == null || N.call(e);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ l(
              "div",
              {
                "data-testid": "platform-menu",
                "data-glass": i ? "true" : void 0,
                className: i ? "lw:relative lw:rounded-md" : oc,
                style: { minWidth: lc },
                children: i ? /* @__PURE__ */ x(ve, { children: [
                  /* @__PURE__ */ l(
                    qn,
                    {
                      isDark: a,
                      solid: d,
                      className: b(
                        "lw:absolute lw:inset-0 lw:origin-top-left lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${Bl} ${qo.duration}ms ${qo.easing} both`
                      }
                    }
                  ),
                  /* @__PURE__ */ x(
                    "div",
                    {
                      ...g.containerProps,
                      className: b(
                        "lw:relative lw:overflow-hidden lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${zl} ${Yo.duration}ms ${Yo.easing} 70ms both`
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
        )
      ]
    }
  );
}, sc = ({ children: e, anchorEl: t, ...n }) => {
  const o = c.useRef(null), r = !!(t && o.current && t.contains(o.current));
  return /* @__PURE__ */ x(
    "span",
    {
      ref: o,
      "data-testid": "platform-switcher-logo",
      className: "lw:relative lw:inline-flex lw:items-center lw:justify-center lw:p-1.5 lw:after:absolute lw:after:right-px lw:after:bottom-px lw:after:border-solid lw:after:[border-width:0_0_5px_5px] lw:after:[border-color:transparent_transparent_currentColor_transparent] lw:after:opacity-55 lw:after:content-['']",
      children: [
        e,
        /* @__PURE__ */ l(
          rc,
          {
            ...n,
            anchorEl: r ? t : null
          }
        )
      ]
    }
  );
}, ac = ({
  compact: e,
  color: t,
  hoverColor: n,
  showProfile: o,
  whatsNewCount: r = 0,
  ...s
}) => {
  var y;
  const {
    avatarColor: i,
    showNotifications: a,
    notificationCount: u,
    onNotificationsClick: d,
    userName: m = "User",
    userRole: p,
    userAvatar: g
  } = s, h = c.useRef(null), [w, N] = c.useState(
    null
  ), S = !!w, T = c.useRef(e);
  return c.useEffect(() => {
    e && !T.current && N(null), T.current = e;
  }, [e]), !a && !o ? null : /* @__PURE__ */ x(ve, { children: [
    /* @__PURE__ */ x(
      "div",
      {
        ref: h,
        "data-testid": "sidebar-footer",
        className: b(
          "lw:flex lw:w-full lw:items-center lw:gap-1",
          e ? "lw:flex-col" : "lw:flex-row"
        ),
        children: [
          o && /* @__PURE__ */ l(je, { title: e ? m : "", side: "right", arrow: !0, children: /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: () => N(h.current),
              "aria-label": `Account menu for ${m}`,
              "aria-haspopup": "menu",
              "aria-expanded": S,
              "data-testid": "sidebar-user",
              className: b(
                "lw:inline-flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:text-left lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg)",
                // 4px around the avatar, on the glass rail too
                e ? "lw:flex-none lw:p-1" : "lw:flex-auto lw:px-2 lw:py-1.5"
              ),
              style: {
                color: t,
                "--lw-fg": t,
                "--lw-hover": n,
                ...S ? { backgroundColor: n } : {}
              },
              children: /* @__PURE__ */ l(
                zr,
                {
                  name: m,
                  role: p,
                  avatar: g,
                  avatarColor: i,
                  showText: !e
                }
              )
            }
          ) }),
          a && /* @__PURE__ */ l(
            ql,
            {
              count: u + r,
              onClick: d,
              color: t,
              hoverColor: n,
              tooltipPlacement: "right",
              testId: "sidebar-notifications"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l(
      Gr,
      {
        anchorEl: w,
        onClose: () => N(null),
        placement: e ? "beside" : "above",
        width: e || (y = h.current) == null ? void 0 : y.clientWidth,
        ...s
      }
    )
  ] });
}, ic = ac, cc = 120, dc = 300, Vo = Ie(yr), Zo = Ie(Kn), uc = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : t.value) ?? "";
}, wc = 'input, textarea, [contenteditable="true"]', Il = (e) => {
  var t;
  (t = e == null ? void 0 : e.querySelector(wc)) == null || t.focus();
}, fc = "lw:[&_:is([data-slot=input],[data-slot=button],input:not([data-slot]))]:rounded-[6px] lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:border-(--lw-accent) lw:[&_:is([data-slot=input]):focus-visible]:ring-(--lw-accent)", Jo = (e) => e ? `Search (${e.join("")})` : "Search", mc = ({
  search: e,
  icon: t,
  mode: n,
  onExpand: o,
  autoFocus: r = !1,
  onAutoFocused: s,
  color: i,
  hoverColor: a,
  shortcutKeys: u
}) => {
  const d = Hl(), m = c.useContext(on), p = c.useRef(null), [g, h] = c.useState(null);
  return c.useEffect(() => {
    n === "full" && r && (Il(p.current), s == null || s());
  }, [n, r, s]), n === "full" ? /* @__PURE__ */ l(
    "div",
    {
      ref: p,
      "data-testid": "sidebar-search",
      "data-lw-host": "",
      className: "lw:w-full",
      children: e
    }
  ) : n === "popover" && m ? /* @__PURE__ */ l(
    hc,
    {
      search: e,
      icon: t,
      color: i,
      railTooltip: d,
      tooltip: Jo(u)
    }
  ) : /* @__PURE__ */ l(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ x(
        rn,
        {
          open: !!g,
          onOpenChange: (w) => !w && h(null),
          children: [
            /* @__PURE__ */ l(
              je,
              {
                title: Jo(u),
                side: "right",
                arrow: !0,
                ...d,
                children: /* @__PURE__ */ l(sn, { asChild: !0, children: /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Search",
                    onClick: (w) => n === "expand" ? o == null ? void 0 : o() : h(w.currentTarget),
                    className: "lw:inline-flex lw:size-11 lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:[&_svg]:size-6",
                    style: {
                      color: i,
                      "--lw-hover": a
                    },
                    children: t ?? /* @__PURE__ */ l(kl, {})
                  }
                ) })
              }
            ),
            /* @__PURE__ */ l(
              Ct,
              {
                side: "right",
                align: "start",
                sideOffset: 8,
                collisionPadding: 8,
                onOpenAutoFocus: (w) => {
                  w.preventDefault(), Il(w.currentTarget);
                },
                className: "lw:w-80 lw:p-2",
                children: /* @__PURE__ */ l("div", { "data-lw-host": "", children: e })
              }
            )
          ]
        }
      )
    }
  );
}, hc = ({ search: e, icon: t, color: n, railTooltip: o, tooltip: r }) => {
  const s = qe();
  Bs(s, at(n, s ? 0.3 : 0.35));
  const i = `rgb(${Wn()})`, a = Pl(s ? "#1e2430" : "#ffffff"), u = c.useRef(null), d = c.useRef(null), [m, p] = c.useState(!1), g = c.useRef(!1), h = c.useRef(void 0), w = c.useRef(void 0), N = () => {
    clearTimeout(h.current), clearTimeout(w.current);
  }, S = c.useCallback(() => {
    N(), g.current = !1, p(!1);
  }, []), T = () => {
    clearTimeout(w.current), m || (clearTimeout(h.current), h.current = setTimeout(
      () => p(!0),
      cc
    ));
  }, y = () => {
    clearTimeout(h.current), clearTimeout(w.current), w.current = setTimeout(() => {
      !g.current && !uc(d.current) && p(!1);
    }, dc);
  };
  return c.useEffect(() => N, []), c.useEffect(() => {
    if (!m)
      return;
    const _ = setTimeout(() => Il(d.current)), O = (R) => {
      var C, K;
      const A = R.target;
      !((C = d.current) != null && C.contains(A)) && !((K = u.current) != null && K.contains(A)) && S();
    }, E = (R) => {
      var A;
      R.key === "Escape" && (S(), (A = u.current) == null || A.focus());
    };
    return document.addEventListener("pointerdown", O), document.addEventListener("keydown", E), () => {
      clearTimeout(_), document.removeEventListener("pointerdown", O), document.removeEventListener("keydown", E);
    };
  }, [m, S]), /* @__PURE__ */ l(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ x(
        rn,
        {
          open: m,
          onOpenChange: (_) => !_ && S(),
          modal: !1,
          children: [
            /* @__PURE__ */ l(
              je,
              {
                title: m ? "" : r,
                side: "right",
                arrow: !0,
                ...o,
                children: /* @__PURE__ */ l(sn, { asChild: !0, children: /* @__PURE__ */ l(
                  "button",
                  {
                    ref: u,
                    type: "button",
                    "aria-label": "Search",
                    "aria-expanded": m,
                    onMouseEnter: T,
                    onMouseLeave: y,
                    onClick: () => {
                      N(), g.current = !0, p(!0);
                    },
                    className: "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring",
                    style: {
                      width: Ae,
                      height: Ae,
                      color: n,
                      borderRadius: Qe
                    },
                    children: t ?? /* @__PURE__ */ l(
                      kl,
                      {
                        style: {
                          width: _l,
                          height: _l
                        }
                      }
                    )
                  }
                ) })
              }
            ),
            /* @__PURE__ */ l(
              Ct,
              {
                unstyled: !0,
                side: "right",
                align: "center",
                sideOffset: 14,
                collisionPadding: 8,
                onOpenAutoFocus: (_) => _.preventDefault(),
                onCloseAutoFocus: (_) => _.preventDefault(),
                onInteractOutside: (_) => {
                  var O;
                  (O = u.current) != null && O.contains(_.target) && _.preventDefault();
                },
                className: "lw:z-[1300]",
                children: /* @__PURE__ */ x(
                  "div",
                  {
                    ref: d,
                    "data-testid": "sidebar-search-card",
                    onMouseEnter: T,
                    onMouseLeave: y,
                    className: "lw:relative lw:w-80 lw:p-2",
                    style: { borderRadius: Qe },
                    children: [
                      /* @__PURE__ */ l(
                        qn,
                        {
                          isDark: s,
                          solid: a,
                          className: b(
                            "lw:absolute lw:inset-0 lw:origin-left lw:rounded-[inherit]",
                            $e
                          ),
                          style: {
                            animation: `${Bl} ${Vo.duration}ms ${Vo.easing} both`
                          }
                        }
                      ),
                      /* @__PURE__ */ l(
                        "div",
                        {
                          "data-lw-host": "",
                          className: b(
                            "lw:relative",
                            fc,
                            $e
                          ),
                          style: {
                            "--lw-accent": i,
                            animation: `${zl} ${Zo.duration}ms ${Zo.easing} 60ms both`
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
      )
    }
  );
}, pc = mc, gc = 80, bc = 300, xc = 32, vc = (e) => {
  const t = c.useRef(/* @__PURE__ */ new WeakSet()), n = c.useRef(void 0), o = c.useRef(void 0), [r, s] = c.useState(!1), [i, a] = c.useState(!1), [u, d] = c.useState(!1), m = c.useRef(null), p = () => {
    clearTimeout(n.current), clearTimeout(o.current), n.current = void 0, o.current = void 0;
  };
  c.useEffect(() => {
    if (!e) {
      p(), s(!1), a(!1), d(!1);
      return;
    }
    const w = (y) => {
      var O;
      if (y.pointerType !== "mouse")
        return;
      const _ = y.clientX <= xc;
      _ && ((O = m.current) == null || O.style.setProperty(
        "--edge-glow-y",
        `${y.clientY}px`
      )), d(_);
    }, N = () => d(!1), S = () => {
      clearTimeout(n.current), n.current = void 0, o.current === void 0 && (o.current = setTimeout(() => {
        o.current = void 0, s(!1), a(!1);
      }, bc));
    }, T = (y) => {
      t.current.has(y) || S();
    };
    return document.addEventListener("mouseover", T), document.addEventListener("pointermove", w, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", S), document.documentElement.addEventListener("mouseleave", N), () => {
      p(), document.removeEventListener("mouseover", T), document.removeEventListener("pointermove", w), document.documentElement.removeEventListener(
        "mouseleave",
        S
      ), document.documentElement.removeEventListener(
        "mouseleave",
        N
      );
    };
  }, [e]);
  const g = {
    onMouseOver: (w) => {
      t.current.add(w.nativeEvent), clearTimeout(o.current), o.current = void 0, !r && n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, s(!0);
      }, gc));
    },
    onFocus: (w) => {
      yc(w.target) && a(!0);
    },
    onBlur: (w) => {
      const N = w.relatedTarget;
      (!N || !w.currentTarget.contains(N)) && a(!1);
    },
    onKeyDown: (w) => {
      w.key === "Escape" && (a(!1), s(!1));
    }
  }, h = e && (r || i);
  return {
    shown: h,
    nearEdge: e && u && !h,
    glowRef: m,
    rootProps: g
  };
}, yc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Ec = vc, Nc = 100, Sc = () => {
  const e = c.useRef(null), t = c.useRef(void 0), n = c.useRef(/* @__PURE__ */ new WeakSet()), [o, r] = c.useState(!1), [s, i] = c.useState(!1), a = () => {
    clearTimeout(t.current), t.current = void 0;
  };
  return c.useEffect(() => {
    const d = (p) => {
      n.current.has(p) || (a(), r(!1));
    }, m = () => {
      a(), r(!1);
    };
    return document.addEventListener("mouseover", d), document.documentElement.addEventListener("mouseleave", m), () => {
      a(), document.removeEventListener("mouseover", d), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), c.useEffect(() => {
    if (!s)
      return;
    const d = (m) => {
      var p;
      (p = e.current) != null && p.contains(m.target) || i(!1);
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [s]), {
    expanded: o || s,
    pin: () => i(!0),
    rootProps: {
      ref: e,
      onMouseOver: (d) => {
        n.current.add(d.nativeEvent), !o && t.current === void 0 && (t.current = setTimeout(() => {
          t.current = void 0, r(!0);
        }, Nc));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (d) => {
        const m = d.relatedTarget;
        m && !d.currentTarget.contains(m) && i(!1);
      },
      onKeyDown: (d) => {
        d.key === "Escape" && i(!1);
      }
    }
  };
}, _c = Sc, Rc = (e) => {
  const t = Array.from((e == null ? void 0 : e.children) ?? []).find(
    (a) => a.tagName === "ASIDE"
  );
  if (!t)
    return null;
  const n = t.querySelector("[data-rail-surface]") ?? t, { right: o, width: r } = t.getBoundingClientRect(), { top: s, height: i } = n.getBoundingClientRect();
  return r <= 0 || i <= 0 ? null : { left: o, top: s, height: i };
}, Tc = 300, yl = 288, Ac = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Cc = 18, Qo = 72, El = 90, Oc = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", $c = 68, er = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Ic = typeof window > "u" ? Ut : Rs, kc = ({
  children: e,
  sidebarLinks: t = [],
  secondarySidebarLinks: n = [],
  appName: o = "Dashboard",
  showSidebar: r = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: i = "rail",
  sidebarSubmenu: a = "expand",
  sidebarAutoHide: u = !1,
  mobileNavigation: d = "bottom-bar",
  mobileBottomBarLinks: m,
  logo: p,
  onBrandClick: g,
  searchComponent: h,
  searchIcon: w,
  notificationsIcon: N,
  searchShortcut: S = !1,
  brandColor: T,
  contentPadding: y = gr,
  userMenuItems: _,
  sidebarBackgroundColor: O,
  sidebarHeaderBackgroundColor: E,
  groupAccentColor: R,
  activeSidebarForegroundColor: A,
  enableRefreshToken: C = !1,
  holdSessionSkeleton: K = !1,
  sessionSkeletonContent: F,
  activePath: B,
  onLinkClick: M,
  showProfile: G = !0,
  userName: te,
  userRole: D,
  userAvatar: v,
  userEmail: $,
  onLogout: P,
  showSettings: Z = !0,
  onSettingsClick: H,
  onProfileClick: ne,
  onAiUsageClick: me,
  showNotifications: j = !0,
  notificationCount: V = 0,
  NotificationSidebarContent: we,
  whatsNewCount: J = 0,
  onNotificationsClick: Q,
  platforms: ie,
  currentPlatformKey: he,
  onPlatformSelect: pe,
  onVerify: I,
  alertProps: z,
  style: q,
  sidebarStyles: U,
  contentStyles: ce,
  className: le,
  sidebarClassName: Se,
  contentClassName: se,
  accentColor: _e,
  sidebarAccentColor: De,
  sidebarActiveBackgroundColor: ge,
  sidebarGroupArrowColor: ke,
  sidebarForegroundColor: ye,
  contentBackgroundColor: Re,
  theme: Ce = "light",
  darkModeSelector: Le,
  showThemeToggler: et = !1,
  onThemeToggle: an,
  GlobalChatSidebar: ut,
  useChatSidebar: wt,
  chatPanelMode: cn = "docked",
  chatPanelPosition: dn = "right",
  chatPanelWidth: Ot = 420,
  onChatClose: Yn,
  showAssistant: it = !1,
  assistantPlacement: $t = "sidebar",
  assistantShortcut: It = "j",
  onAssistantClick: Ye,
  assistantActive: ft = !1,
  assistantBusy: un = !1,
  customNavbar: wn,
  customNavbarProps: Vn,
  redirectToLogin: Ve,
  apiBaseUrl: fn
}) => {
  const fe = $r(), f = Ce === "dark", L = _e ?? "#01584f", Y = De ?? L, W = vr(
    typeof Re == "object" ? Re[Ce] : Re,
    f
  ), X = i === "collapsible", ee = i === "panel", xe = ee && r && !fe, be = i === "rail-labeled", Pe = X || be, ae = Xn(
    O,
    f
  ), He = E ?? ae, Ee = ye ?? (f ? "#ffffff" : Y), ct = R ?? Vt(Ee), kt = E ? Sl(He) : Ee, Vl = (k) => /* @__PURE__ */ l(
    "div",
    {
      role: "img",
      "aria-label": `${o} logo`,
      className: "lw:size-7 lw:shrink-0",
      style: {
        backgroundColor: k,
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
  ), mn = T ?? kt, [Zl, Zn] = nt(
    null
  ), Jn = ((ie == null ? void 0 : ie.length) ?? 0) > 1, qr = al(() => Zn(null), []), Yr = (k) => {
    Zn(null), pe ? pe(k) : k.key !== he && k.url && window.location.assign(k.url);
  }, Jl = (k) => Jn ? /* @__PURE__ */ l(
    sc,
    {
      anchorEl: Zl,
      onClose: qr,
      platforms: ie,
      currentKey: he,
      onSelect: Yr,
      accentColor: L,
      glass: a === "flyout" && (X || ee) && !fe,
      children: k
    }
  ) : k, hn = Jn ? (k) => Zn(k.currentTarget) : g, pn = Jn ? !!Zl : void 0, Qn = Jl(
    p ?? Vl(mn)
  ), Vr = Jl(
    p ?? Vl(T ?? Ee)
  ), el = _c(), Ge = Un(a, i), Ue = Ge || !el.expanded, Fe = r && !fe && Hs(u, a, i), tt = Ec(Fe), Ql = Ge ? "popover" : "expand", eo = Ge ? Yt : Kt, to = Ge ? "transparent" : ae, no = Ge && !E ? "transparent" : He, [Zr, lo] = nt(!1), Jr = al(() => lo(!1), []), Ze = xr({
    showSidebar: r,
    isMobile: fe,
    sidebarVariant: i,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [oo, mt] = nt(!1), [ro, tl] = nt(!1), Me = fe && d === "bottom-bar", so = `calc(${Wr}px + env(safe-area-inset-bottom, 0px))`, [Lt, ao] = nt({ open: !1, tab: "notifications" }), io = () => ao((k) => ({ ...k, open: !1 })), Qr = j && !!we, co = xn(null), [es, ts] = nt(null), Mt = al(() => {
    const k = fe ? null : Rc(co.current), de = k && Fe ? { ...k, left: rt } : k;
    ts(
      (Te) => Te && de && Te.left === de.left && Te.top === de.top && Te.height === de.height ? Te : de
    );
  }, [fe, Fe]);
  Ut(() => {
    if (Lt.open)
      return Mt(), window.addEventListener("resize", Mt), () => window.removeEventListener("resize", Mt);
  }, [Lt.open, Mt]);
  const [ns, ls] = nt(!0), [os, rs] = nt(!1), nl = wt == null ? void 0 : wt(), uo = (nl == null ? void 0 : nl.isOpen) ?? !1, wo = cn === "floating" ? "floating" : "docked", ss = wo === "docked" && uo && ut && !fe ? Ot : 0, gn = xn(I), fo = xn(!1), mo = _s(
    () => Ja(fn),
    [fn]
  );
  Ut(() => {
    gn.current = I;
  }, [I]);
  const ll = xn(Ye);
  ll.current = Ye;
  const Dt = it && It ? It.toLowerCase() : null;
  Ut(() => {
    if (!Dt)
      return;
    const k = (de) => {
      (de.metaKey || de.ctrlKey) && !de.altKey && !de.shiftKey && de.key.toLowerCase() === Dt && ll.current && (de.preventDefault(), ll.current());
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [Dt]);
  const ho = (k) => {
    const de = P(k);
    de instanceof Promise && de.catch((Te) => {
      console.error("Error in logout handler:", Te);
    });
  };
  if (Ic(() => {
    (() => {
      var de;
      try {
        const { isAuthenticated: Te } = Va();
        if (!Te) {
          console.log("No session found, redirecting to login"), nn(), Ve();
          return;
        }
        if (!fo.current) {
          const { user: Ft, error: sl } = Za();
          if (Ft && !sl) {
            const hs = {
              name: Ft.name || "",
              email: Ft.email || "",
              profilePicture: Ft.profilePicture || "",
              role: Ft.role || ""
            };
            fo.current = !0, (de = gn.current) == null || de.call(gn, hs);
          } else
            sl && console.error("Error getting user data:", sl);
        }
        rs(!0);
      } catch (Te) {
        console.error("Error checking session:", Te), nn(), Ve();
      } finally {
        ls(!1);
      }
    })();
  }, [Ve]), Ut(() => {
    C && Qa(mo, Ve);
  }, [C, mo]), ns || K)
    return /* @__PURE__ */ l(
      qa,
      {
        theme: Ce,
        darkModeSelector: Le,
        sidebarVariant: i,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: r,
        contentPadding: y,
        sidebarBackgroundColor: O,
        contentBackgroundColor: Re,
        content: F
      }
    );
  if (!os)
    return null;
  const Pt = h ?? (wn ? /* @__PURE__ */ l(wn, { ...Vn }) : null), as = (k) => {
    mt(!1), tl(!1), Mt(), ao({ open: !0, tab: k });
  }, ol = we && (() => as("notifications")), is = V + J, po = {
    avatarColor: Y,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: _ == null ? void 0 : _.map(
      (k) => k.onClick || !k.path ? k : { ...k, onClick: () => M == null ? void 0 : M(k.path) }
    ),
    showNotifications: j,
    notificationCount: V,
    whatsNewCount: J,
    onNotificationsClick: ol,
    showProfile: G,
    userName: te,
    userRole: D,
    userAvatar: v,
    showSettings: Z,
    onSettingsClick: H,
    showThemeToggler: et,
    theme: Ce,
    onThemeToggle: an,
    onLogout: ho
  }, rl = (k) => /* @__PURE__ */ l(
    ic,
    {
      ...po,
      compact: k,
      color: Ee,
      hoverColor: ct
    }
  ), go = Dt ? [er() ? "⌘" : "Ctrl", Dt.toUpperCase()] : void 0, cs = (k) => it && $t === "sidebar" ? /* @__PURE__ */ l(
    zo,
    {
      variant: k ? "sidebar-icon" : "sidebar",
      onClick: Ye,
      active: ft,
      busy: un,
      shortcutKeys: go,
      accentColor: Ee
    }
  ) : null, ds = S ? [er() ? "⌘" : "Ctrl", S.toUpperCase()] : void 0, us = (k) => Pt ? /* @__PURE__ */ l(
    pc,
    {
      search: Pt,
      icon: w,
      mode: k,
      onExpand: () => {
        el.pin(), lo(!0);
      },
      autoFocus: Zr,
      onAutoFocused: Jr,
      color: Ee,
      hoverColor: ct,
      shortcutKeys: ds
    }
  ) : null, bn = (k) => {
    const de = cs(k !== "full"), Te = us(k);
    return de || Te ? /* @__PURE__ */ x(
      "div",
      {
        className: b(
          "lw:flex lw:flex-col",
          k === "full" ? "lw:items-stretch" : "lw:items-center"
        ),
        style: { gap: Ge ? Hn : 12 },
        children: [
          de,
          Ge && de && Te ? /* @__PURE__ */ l(
            "div",
            {
              role: "separator",
              className: "lw:w-full lw:border-t lw:border-solid",
              style: {
                borderTopColor: Vt(Ee)
              }
            }
          ) : null,
          Te
        ]
      }
    ) : void 0;
  }, bo = () => /* @__PURE__ */ l(
    Tl,
    {
      mainLinks: t,
      secondaryLinks: n,
      activePath: B,
      onLinkClick: M,
      showHeaderBar: X,
      logo: Qn,
      title: o,
      onBrandClick: hn,
      brandMenuOpen: pn,
      brandColor: mn,
      headerBackgroundColor: X ? no : void 0,
      headerForegroundColor: X ? kt : void 0,
      activeAccentColor: Y,
      activeBackgroundColor: ge,
      groupArrowColor: ke,
      groupAccentColor: R,
      activeForegroundColor: A,
      foregroundColor: ye,
      surfaceBackgroundColor: to,
      flyoutSurfaceColor: ae,
      collapsed: be || Ue,
      showLabels: be,
      expandedWidth: yl,
      collapsedWidth: be ? mr : eo,
      topContent: bn(
        be ? "popover" : Ue ? Ql : "full"
      ),
      footer: rl(be || Ue),
      submenuMode: Ge ? "flyout" : "inline"
    }
  ), xo = (k) => Ge ? ws(k) : fs(k), ws = (k) => /* @__PURE__ */ x(
    "aside",
    {
      ...Fe ? tt.rootProps : {},
      "data-auto-hide": Fe ? "true" : void 0,
      "data-shown": Fe ? String(tt.shown) : void 0,
      className: b(
        // Above the page, including its sticky app bars
        "lw:top-0 lw:z-[1101] lw:h-screen",
        Fe ? "lw:pointer-events-none lw:fixed lw:left-0" : "lw:sticky lw:shrink-0 lw:self-start"
      ),
      style: Fe ? {
        width: Yt + 2 * rt
      } : {
        width: Ze,
        minWidth: Ze,
        backgroundColor: W
      },
      children: [
        Fe && /* @__PURE__ */ l(
          "div",
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            className: "lw:pointer-events-auto lw:absolute lw:inset-y-0 lw:left-0",
            style: { width: Cc }
          }
        ),
        Fe && /* @__PURE__ */ l(
          "div",
          {
            ref: tt.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(tt.nearEdge),
            "aria-hidden": "true",
            className: "lw:pointer-events-none lw:absolute lw:inset-y-0 lw:left-0 lw:transition-opacity lw:duration-200 lw:ease-[ease]",
            style: {
              "--edge-glow-y": "50%",
              width: Qo,
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${Qo}px ${El}px at 0 var(--edge-glow-y), ${at(Ee, f ? 0.5 : 0.4)}, ${at(Ee, 0)})`,
              opacity: tt.nearEdge ? 1 : 0
            },
            children: /* @__PURE__ */ l(
              "span",
              {
                className: "lw:absolute lw:inset-y-0 lw:left-0 lw:w-[3px]",
                style: {
                  background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${El}px), ${at(Ee, f ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${El}px))`
                }
              }
            )
          }
        ),
        /* @__PURE__ */ x(
          "div",
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            className: b(
              "lw:absolute lw:flex lw:flex-col",
              Fe && cr,
              Se
            ),
            style: {
              top: rt,
              bottom: rt,
              left: rt,
              width: Yt,
              borderRadius: pr,
              ...Fe && {
                pointerEvents: tt.shown ? "auto" : "none",
                opacity: tt.shown ? 1 : 0,
                transform: tt.shown ? "none" : `translateX(calc(-100% - ${2 * rt}px))`,
                transition: Oc
              },
              ...U
            },
            children: [
              /* @__PURE__ */ l(
                qn,
                {
                  isDark: f,
                  solid: ae,
                  className: "lw:absolute lw:inset-0",
                  style: { borderRadius: "inherit" }
                }
              ),
              /* @__PURE__ */ l(
                "div",
                {
                  className: "lw:relative lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-hidden",
                  style: { borderRadius: "inherit" },
                  children: k
                }
              )
            ]
          }
        )
      ]
    }
  ), fs = (k) => /* @__PURE__ */ l(
    "aside",
    {
      className: "lw:sticky lw:top-0 lw:z-[1101] lw:h-screen lw:shrink-0 lw:self-start",
      style: {
        width: Kt,
        minWidth: Kt
      },
      children: /* @__PURE__ */ l(
        "div",
        {
          ...Ge ? {} : el.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ue ? "false" : "true",
          className: b(
            "lw:absolute lw:top-0 lw:left-0 lw:flex lw:h-full lw:flex-col lw:overflow-hidden lw:border-r lw:border-solid lw:border-border",
            Se
          ),
          style: {
            width: Ue ? Kt : yl,
            backgroundColor: ae,
            boxShadow: Ue ? "none" : `4px 0 24px rgba(0, 0, 0, ${f ? 0.5 : 0.12})`,
            transition: Ac,
            ...U
          },
          children: k
        }
      )
    }
  ), ms = br(y), ht = fe ? null : es;
  return /* @__PURE__ */ l(rr.Provider, { value: Ce, children: /* @__PURE__ */ l(dr.Provider, { value: Y, children: /* @__PURE__ */ l(Gn.Provider, { value: ae, children: /* @__PURE__ */ l(Ur.Provider, { value: N, children: /* @__PURE__ */ x(
    "div",
    {
      ref: co,
      "data-lw-scope": "",
      "data-lw-theme": Ce,
      className: b("lw:flex lw:min-h-screen", le),
      style: q,
      children: [
        fe && /* @__PURE__ */ l(
          Fi,
          {
            height: $n,
            onMenuClick: r && !Me ? () => mt(!0) : void 0,
            appName: o,
            logo: Qn,
            onBrandClick: hn,
            brandMenuOpen: pn,
            background: He,
            color: kt,
            brandColor: mn,
            endContent: j ? /* @__PURE__ */ l(
              ql,
              {
                count: is,
                onClick: ol,
                color: kt,
                hoverColor: ct,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        r && !fe && be && /* @__PURE__ */ l(
          "aside",
          {
            className: b(
              "lw:sticky lw:top-0 lw:z-[2] lw:flex lw:h-screen lw:shrink-0 lw:flex-col lw:self-start lw:border-r lw:border-solid lw:border-border",
              Se
            ),
            style: {
              width: Ze,
              minWidth: Ze,
              ...U
            },
            children: bo()
          }
        ),
        r && !fe && X && xo(
          /* @__PURE__ */ x(ve, { children: [
            bo(),
            (z == null ? void 0 : z.show) && !Ue && /* @__PURE__ */ l(Tn, { ...z })
          ] })
        ),
        xe && xo(
          /* @__PURE__ */ x(ve, { children: [
            /* @__PURE__ */ l(
              nc,
              {
                mainLinks: t,
                secondaryLinks: n,
                activePath: B,
                onLinkClick: M,
                logo: Qn,
                title: o,
                onBrandClick: hn,
                brandMenuOpen: pn,
                brandColor: mn,
                headerBackgroundColor: no,
                headerForegroundColor: kt,
                activeAccentColor: Y,
                activeBackgroundColor: ge,
                groupArrowColor: ke,
                groupAccentColor: R,
                activeForegroundColor: A,
                foregroundColor: ye,
                surfaceBackgroundColor: to,
                flyoutSurfaceColor: ae,
                collapsed: Ue,
                expandedWidth: yl,
                collapsedWidth: eo,
                topContent: bn(
                  Ue ? Ql : "full"
                ),
                submenuMode: Ge ? "flyout" : "inline",
                color: Ee,
                hoverColor: ct,
                avatarColor: Y,
                showProfile: G,
                userName: te,
                userEmail: $,
                userRole: D,
                userAvatar: v,
                showNotifications: j,
                notificationCount: V,
                onNotificationsClick: Qr ? ol : Q,
                whatsNewCount: J,
                onProfileClick: ne,
                onAiUsageClick: me,
                menuItems: _,
                onLogout: ho,
                theme: Ce,
                showThemeToggler: et,
                onThemeToggle: an
              }
            ),
            (z == null ? void 0 : z.show) && !Ue && /* @__PURE__ */ l(Tn, { ...z })
          ] })
        ),
        r && !fe && !Pe && !ee && // The fixed rail: a permanent drawer, its column fixed
        // to the window's left edge
        /* @__PURE__ */ l(
          "div",
          {
            "data-slot": "rail-drawer",
            className: b(
              "lw:z-[2] lw:shrink-0",
              Se
            ),
            style: {
              width: Ze,
              ...U
            },
            children: /* @__PURE__ */ x(
              "aside",
              {
                "data-slot": "rail-drawer-paper",
                className: "lw:fixed lw:top-0 lw:left-0 lw:z-[1200] lw:flex lw:h-full lw:flex-col lw:overflow-y-auto lw:px-3 lw:pt-4",
                style: {
                  width: Ze,
                  backgroundColor: W
                },
                children: [
                  /* @__PURE__ */ l("div", { className: "lw:mb-3 lw:flex lw:justify-center", children: /* @__PURE__ */ l(
                    Dn,
                    {
                      logo: Vr,
                      appName: o,
                      onClick: hn,
                      menuOpen: pn,
                      color: T ?? Ee,
                      testId: "sidebar-header-brand"
                    }
                  ) }),
                  bn("popover"),
                  /* @__PURE__ */ x("div", { className: "lw:mt-2 lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-y-auto", children: [
                    /* @__PURE__ */ l(
                      Ei,
                      {
                        mainLinks: t,
                        secondaryLinks: n,
                        activePath: B,
                        onLinkClick: M,
                        accentColor: Y,
                        surfaceBackgroundColor: W,
                        railShowTitles: s
                      }
                    ),
                    (z == null ? void 0 : z.show) && /* @__PURE__ */ l(
                      Tn,
                      {
                        ...z
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l("div", { className: "lw:py-3", children: rl(!0) })
                ]
              }
            )
          }
        ),
        r && fe && /* @__PURE__ */ l(
          Ol,
          {
            open: oo,
            onOpenChange: mt,
            children: /* @__PURE__ */ x(
              Fn,
              {
                side: Me ? "bottom" : "left",
                "aria-label": "Navigation",
                srTitle: "Navigation",
                overlayClassName: "lw:z-[1201]",
                className: b(
                  "lw:z-[1201] lw:overflow-y-auto lw:border-0",
                  Me ? "lw:max-h-[min(80vh,640px)] lw:rounded-t-2xl lw:pb-[env(safe-area-inset-bottom,0px)]" : "lw:max-w-[85vw]"
                ),
                style: {
                  backgroundColor: ae
                },
                children: [
                  Me && // Grab handle, marking the sheet as one that closes downwards
                  /* @__PURE__ */ l(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "lw:mx-auto lw:mt-2 lw:mb-1 lw:h-1 lw:w-9 lw:shrink-0 lw:rounded-[2px] lw:bg-border"
                    }
                  ),
                  /* @__PURE__ */ l(
                    Tl,
                    {
                      mainLinks: t,
                      secondaryLinks: n,
                      activePath: B,
                      onLinkClick: (k) => {
                        M == null || M(k), mt(!1);
                      },
                      onLinkAction: () => mt(!1),
                      collapsed: !1,
                      expandedWidth: Me ? "100%" : Tc,
                      activeAccentColor: Y,
                      activeBackgroundColor: ge,
                      groupArrowColor: ke,
                      groupAccentColor: R,
                      activeForegroundColor: A,
                      foregroundColor: ye,
                      surfaceBackgroundColor: ae,
                      topInsetPx: Me ? 8 : 0,
                      topContent: Me ? void 0 : bn("full"),
                      footer: Me ? void 0 : rl(!1)
                    }
                  ),
                  (z == null ? void 0 : z.show) && /* @__PURE__ */ l(Tn, { ...z })
                ]
              }
            )
          }
        ),
        Me && Pt && /* @__PURE__ */ l(
          Di,
          {
            open: ro,
            onClose: () => tl(!1),
            search: Pt
          }
        ),
        Me && /* @__PURE__ */ l(
          ki,
          {
            ...po,
            pinnedLinks: m,
            activePath: B,
            onLinkClick: M,
            onMenuClick: r ? () => mt(!0) : void 0,
            menuOpen: oo,
            onSearchClick: Pt ? () => tl(!0) : void 0,
            searchOpen: ro,
            showAssistant: it,
            onAssistantClick: Ye,
            assistantActive: ft,
            showProfile: G,
            background: ae,
            color: Ee,
            activeColor: Y,
            activeBackground: ct
          }
        ),
        /* @__PURE__ */ l(
          "main",
          {
            "data-lw-host": "",
            className: b(
              "lw-content-padding lw:grow",
              se
            ),
            style: {
              ...ms,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": fe ? `${$n}px` : "0px",
              padding: "var(--lumora-content-padding)",
              width: Ze ? `calc(100% - ${Ze}px)` : "100%",
              marginTop: fe ? `${$n}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Me && {
                paddingBottom: `calc(var(--lumora-content-padding) + ${so})`
              },
              backgroundColor: W,
              ...ce
            },
            children: e
          }
        ),
        ut && /* @__PURE__ */ l(
          di,
          {
            open: uo,
            variant: wo,
            position: dn,
            width: Ot,
            sidebarWidthPx: Ze,
            bottomOffsetPx: it && $t === "floating" ? $c : 0,
            fullScreen: fe,
            fullScreenBottom: Me ? so : "0px",
            onClose: Yn,
            children: /* @__PURE__ */ l(ut, {})
          }
        ),
        it && $t === "floating" && !Me && /* @__PURE__ */ l(
          zo,
          {
            variant: "floating",
            rightOffsetPx: ss,
            shortcutKeys: go,
            onClick: Ye,
            active: ft,
            busy: un
          }
        ),
        j && we && /* @__PURE__ */ l(
          Ol,
          {
            open: Lt.open,
            onOpenChange: (k) => {
              k || io();
            },
            children: /* @__PURE__ */ l(
              Fn,
              {
                side: ht ? "left" : "right",
                srTitle: "Updates",
                className: "lw:border-0",
                style: ht ? {
                  width: 380,
                  maxWidth: `calc(100vw - ${ht.left}px)`,
                  left: ht.left,
                  top: ht.top,
                  height: ht.height
                } : {
                  width: 380,
                  maxWidth: "100vw"
                },
                children: /* @__PURE__ */ l(
                  "div",
                  {
                    "data-lw-host": "",
                    className: "lw:flex lw:min-h-0 lw:flex-1 lw:flex-col",
                    children: /* @__PURE__ */ l(
                      we,
                      {
                        onClose: io,
                        initialTab: Lt.tab
                      },
                      Lt.tab
                    )
                  }
                )
              }
            )
          }
        )
      ]
    }
  ) }) }) }) });
}, Kc = kc, Be = {
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
}, ze = {
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
}, gt = {
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
}, xt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, vt = (e, t) => {
  const n = /^hsl\((.+)\)$/.exec(e);
  if (n)
    return `hsla(${n[1]}, ${t})`;
  const o = /^#([0-9a-f]{6})$/i.exec(e);
  if (o) {
    const r = parseInt(o[1], 16);
    return `rgba(${r >> 16 & 255}, ${r >> 8 & 255}, ${r & 255}, ${t})`;
  }
  return e;
}, We = (e) => `${e / 16}rem`, oe = (...e) => [
  `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
  `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
  `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`
].join(","), Lc = [
  "none",
  oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
  oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
  oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
  oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
], jc = (e) => {
  const t = e === "dark", n = [...Lc];
  return n[1] = t ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: t ? Be[300] : Be[200],
        main: Be[400],
        dark: Be[700],
        contrastText: Be[50]
      },
      info: t ? {
        light: Be[500],
        main: Be[700],
        dark: Be[900],
        contrastText: Be[300]
      } : {
        light: Be[100],
        main: Be[300],
        dark: Be[600],
        contrastText: ze[50]
      },
      warning: t ? { light: bt[400], main: bt[500], dark: bt[700] } : { light: bt[300], main: bt[400], dark: bt[800] },
      error: t ? { light: xt[400], main: xt[500], dark: xt[700] } : { light: xt[300], main: xt[400], dark: xt[800] },
      success: t ? { light: gt[400], main: gt[500], dark: gt[700] } : { light: gt[300], main: gt[400], dark: gt[800] },
      grey: ze,
      divider: t ? vt(ze[700], 0.6) : vt(ze[300], 0.4),
      background: t ? { default: ze[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: t ? { primary: "hsl(0, 0%, 100%)", secondary: ze[400] } : { primary: ze[800], secondary: ze[600] },
      action: t ? {
        hover: vt(ze[600], 0.2),
        selected: vt(ze[600], 0.3)
      } : {
        hover: vt(ze[200], 0.2),
        selected: vt(ze[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: We(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: We(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: We(30), lineHeight: 1.2 },
      h4: { fontSize: We(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: We(20), fontWeight: 600 },
      h6: { fontSize: We(18), fontWeight: 600 },
      subtitle1: { fontSize: We(18) },
      subtitle2: { fontSize: We(14), fontWeight: 500 },
      body1: { fontSize: We(14) },
      body2: { fontSize: We(14), fontWeight: 400 },
      caption: { fontSize: We(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: n
  };
};
export {
  ue as AUTH_ERROR_CODES,
  re as AuthError,
  Tl as CollapsibleSidebar,
  Uc as FullBleedSection,
  Ga as Kbd,
  qa as LumoraShellSkeleton,
  Kc as LumoraWrapper,
  nn as clearAuthTokens,
  Kc as default,
  Xc as getAuthErrorMessage,
  tn as getAuthTokens,
  Za as getCurrentUser,
  jc as getDesignTokens,
  Va as isAuthenticated,
  Al as logAuthError,
  kr as storeAuthTokens
};
