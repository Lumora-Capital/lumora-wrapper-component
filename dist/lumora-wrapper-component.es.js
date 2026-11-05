import { jsx as l, jsxs as x, Fragment as xe } from "react/jsx-runtime";
import { ChevronRightIcon as ys, ChevronUpIcon as Es, ChevronDownIcon as Ns, SparklesIcon as Ss, BellIcon as nr, SettingsIcon as _s, LogOutIcon as lr, MenuIcon as or, SearchIcon as Ll, SunMoonIcon as Rs, SunIcon as Ts, MoonIcon as As, CheckIcon as Cs } from "lucide-react";
import * as c from "react";
import { useState as Xe, useCallback as il, useRef as yn, useEffect as Kt, useMemo as Os, useLayoutEffect as $s } from "react";
import { clsx as Is } from "clsx";
import { extendTailwindMerge as ks } from "tailwind-merge";
import { Tooltip as Nt, Slot as Ls, Popover as Pn, DropdownMenu as Rt, Dialog as jt } from "radix-ui";
import { createPortal as rr } from "react-dom";
import yo from "axios";
import { cva as Ms } from "class-variance-authority";
const Ds = ks({ prefix: "lw" });
function b(...e) {
  return Ds(Is(e));
}
const Eo = "lw:flex lw:flex-row lw:items-center lw:gap-2 lw:min-w-0 lw:shrink-0 lw:[&_svg]:text-inherit lw:[&_svg]:fill-current", Ps = ({
  logo: e,
  title: t,
  appName: n,
  onClick: o,
  color: r,
  testId: s,
  menuOpen: i
}) => {
  const a = /* @__PURE__ */ x(xe, { children: [
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
        Eo,
        "lw:cursor-pointer lw:rounded-lg lw:px-1 lw:-mx-1 lw:outline-none lw:hover:bg-accent lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-offset-2 lw:focus-visible:outline-(--lw-brand-color)"
      ),
      style: { color: r, "--lw-brand-color": r },
      children: a
    }
  ) : /* @__PURE__ */ l("div", { "data-testid": s, className: Eo, style: { color: r }, children: a });
}, Fn = Ps, sr = c.createContext(void 0), Fs = () => typeof document < "u" && document.documentElement.getAttribute("data-color-scheme") === "dark", Bs = (e) => {
  if (typeof MutationObserver > "u" || typeof document > "u")
    return () => {
    };
  const t = new MutationObserver(e);
  return t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["data-color-scheme"]
  }), () => t.disconnect();
}, Ye = () => {
  const e = c.useContext(sr), t = c.useSyncExternalStore(
    Bs,
    Fs,
    () => !1
  );
  return e ? e === "dark" : t;
}, rn = () => ({
  "data-lw-scope": "",
  "data-lw-theme": Ye() ? "dark" : "light"
}), ar = c.forwardRef(({ className: e, sideOffset: t = 4, arrow: n = !1, children: o, ...r }, s) => {
  const i = rn();
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
ar.displayName = "TooltipContent";
function qe({
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
              ar,
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
const cl = (e, t) => (n) => {
  e == null || e(n), t(n);
}, zs = ({
  children: e,
  onOpenChange: t,
  ...n
}) => {
  const [o, r] = c.useState(!1), s = c.useRef(!1), i = c.useRef(!1), a = c.Children.only(e), u = c.cloneElement(a, {
    onPointerEnter: cl(a.props.onPointerEnter, () => {
      s.current = !0;
    }),
    onPointerLeave: cl(a.props.onPointerLeave, () => {
      s.current = !1, i.current = !1;
    }),
    onClickCapture: cl(a.props.onClickCapture, () => {
      i.current = !0, r(!1);
    })
  });
  return /* @__PURE__ */ l(
    qe,
    {
      ...n,
      open: o,
      onOpenChange: (d) => {
        d && (!s.current || i.current) || (r(d), t == null || t(d));
      },
      children: u
    }
  );
}, In = zs, Sl = !1, Tt = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, St = (e) => {
  var t;
  return !!((t = e.subitems) != null && t.length);
}, yt = (e, t) => e ? `${e}/${t.text}` : t.text, ot = (e, t) => {
  var n;
  return t ? e.path && t === e.path ? !0 : ((n = e.subitems) == null ? void 0 : n.some((o) => ot(o, t))) ?? !1 : !1;
}, Ke = (e, t) => !!(t && e.path === t), Ml = (e, t) => (e ?? []).flatMap((n) => {
  const o = n.icon ?? t;
  return St(n) ? Ml(n.subitems, o) : n.path ? [{ sub: n, icon: o }] : [];
}), _l = (e) => {
  const t = Wn(e);
  if (!t)
    return "#ffffff";
  const [n, o, r] = t.map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * n + 0.7152 * o + 0.0722 * r > 0.5 ? "#0b1f1c" : "#ffffff";
}, Jt = (e) => {
  const t = Wn(e);
  if (!t)
    return "rgba(1, 88, 79, 0.12)";
  const [n, o, r] = t;
  return `rgba(${n}, ${o}, ${r}, 0.14)`;
}, rt = (e, t) => {
  const n = Wn(e);
  return n ? `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t})` : e;
}, Wn = (e) => {
  let t = e.trim().replace(/^#/, "");
  if (t.length === 3 && (t = t.split("").map((o) => o + o).join("")), t.length !== 6 || /[^0-9a-fA-F]/.test(t))
    return null;
  const n = parseInt(t, 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}, ir = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Dl = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Gs = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Ws = "lw-tile-in", $e = "lw-motion-none", cr = "lw-motion-fade", dr = "lw-motion-fade-fast", Qe = 6, Pl = "9, 193, 174", ur = c.createContext(
  void 0
), Hn = c.createContext(
  void 0
), Fl = (e) => c.useContext(Hn) ?? e, Un = () => {
  const e = c.useContext(ur), t = e ? Wn(e) : null;
  return t ? t.join(", ") : Pl;
}, Hs = (e, t, n = Pl) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  className: "lw:relative",
  style: {
    backgroundColor: t,
    boxShadow: `${Gs(e)}, 0 0 0 1px ${Dl(e)}`
  }
}), Bl = (e, t) => ({
  className: "lw:rounded-md lw:border lw:border-solid lw:px-2.5 lw:py-1.5 lw:text-[0.8125rem] lw:leading-[1.4] lw:font-semibold",
  style: {
    color: e ? "#ffffff" : "#0b1f1c",
    backgroundColor: t ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
    borderColor: Dl(e),
    boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)"
  }
}), wr = (e) => e ? "#ffffff" : "#0b1f1c", zl = "lw-glass-grow", Gl = "lw-content-in", fr = (e, t = Pl, n = `rgba(${t}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${t}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), mr = (e, t, n = "solid") => n === "solid" ? { background: e, boxShadow: "none" } : {
  background: rt(e, t ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${rt(e, 0.45)}`
}, Us = (e, t) => {
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
    const o = `inset 0 0 0 1px ${Dl(e)}`, r = e ? "rgba(255, 255, 255, 0.06)" : "#ffffff";
    return n({
      bg: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
      shadow: o,
      hoverBg: r,
      focusBg: r,
      focusShadow: `${o}, 0 0 0 3px ${t}`
    });
  }
}, Xs = 100, hr = 80, kn = 56, qt = 72, Zt = 64, Te = 44, Rl = 24, Xn = 4, lt = 8, pr = 1.4, gr = Qe, br = { xs: 2, md: "18px" }, Ks = ["xs", "sm", "md", "lg", "xl"], js = 8, No = (e) => typeof e == "number" ? `${e * js}px` : e, xr = (e) => typeof e == "object" ? Object.fromEntries(
  Ks.filter((t) => e[t] !== void 0).map((t) => [
    `--lw-cp-${t}`,
    No(e[t])
  ])
) : { "--lw-cp-xs": No(e) }, Kn = (e, t) => e === "flyout" && (t === "collapsible" || t === "panel"), qs = (e, t, n) => e && Kn(t, n), vr = ({
  showSidebar: e,
  isMobile: t,
  sidebarVariant: n,
  sidebarSubmenu: o,
  sidebarAutoHide: r = !1
}) => !e || t ? 0 : n === "rail-labeled" ? hr : Kn(o, n) ? r ? 0 : Zt + 2 * lt : n === "collapsible" || n === "panel" ? qt : Xs, jn = (e, t) => e ?? (t ? "hsl(220, 30%, 7%)" : "#ffffff"), yr = (e, t) => e ?? (t ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Er = { stiffness: 320, damping: 24 }, Nr = { stiffness: 320, damping: 28 }, Wl = { stiffness: 520, damping: 20 }, Hl = { stiffness: 380, damping: 36 }, qn = { stiffness: 260, damping: 28 }, Ys = "cubic-bezier(0.32, 1.28, 0.52, 1)", Vs = 420, So = 60, Zs = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), _o = /* @__PURE__ */ new Map(), Ie = ({
  stiffness: e,
  damping: t,
  mass: n = 1
}) => {
  const o = `${e}/${t}/${n}`, r = _o.get(o);
  if (r)
    return r;
  if (!Zs)
    return { easing: Ys, duration: Vs };
  const s = 1 / 600;
  let i = 0, a = 0, u = 0, d = 1 / So;
  const m = [0];
  for (; u < 3; ) {
    const g = (-e * (i - 1) - t * a) / n;
    if (a += g * s, i += a * s, u += s, u >= d && (m.push(i), d += 1 / So, Math.abs(i - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const p = {
    easing: `linear(${m.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return _o.set(o, p), p;
}, Qt = (e) => !!(e && typeof e.animate == "function"), At = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Js = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((t) => t.cancel());
}, Qs = (e, t = 1.14) => {
  if (!Qt(e) || At())
    return;
  const n = Ie(Wl);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${t})`, offset: 0.18, easing: n.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(n.duration / 0.82) }
  );
}, ea = 1.6, Sr = 110, en = 110, ta = 6, tt = Ie(Hl), na = (e, t = Sr) => e >= t ? 0 : (1 + Math.cos(Math.PI * e / t)) / 2, _r = (e, t) => {
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
}, Rr = (e, {
  enabled: t,
  axis: n,
  itemSelector: o,
  glyphSelector: r,
  transition: s,
  maxScale: i = ea,
  reach: a = Sr,
  carrierSelector: u,
  spacing: d = 0,
  hoveredOnly: m = !1,
  boundsRef: p
}) => {
  const g = c.useRef(0), h = c.useRef(
    /* @__PURE__ */ new WeakMap()
  ), f = c.useRef(/* @__PURE__ */ new Set()), N = c.useRef(null), S = (v) => {
    var $;
    N.current !== v && (($ = N.current) == null || $.removeAttribute("data-dock-hovered"), v == null || v.setAttribute("data-dock-hovered", ""), N.current = v);
  }, T = c.useRef(/* @__PURE__ */ new Set()), y = s ? `, ${s}` : "", R = m ? `${tt.duration}ms ${tt.easing}` : `${en}ms ease-out`, C = (v) => u ? v.closest(u) : null, E = (v) => {
    const [$ = "0", P = "0"] = v.split(" ").filter(Boolean);
    return n === "x" ? parseFloat($) || 0 : parseFloat(P) || 0;
  }, A = (v) => {
    const $ = C(v);
    if (!$)
      return 0;
    const P = getComputedStyle($).translate;
    return E(
      P && P !== "none" ? P : $.style.translate
    );
  }, O = (v, $) => {
    var ne;
    const Z = (n === "x" ? v.offsetWidth : v.offsetHeight) * (Number(v.style.scale) || 1) / 2, U = _(v) + E(((ne = C(v)) == null ? void 0 : ne.style.translate) ?? "");
    return Math.max(0, Math.abs($ - U) - Z);
  }, _ = (v) => {
    const $ = v.getBoundingClientRect();
    return (n === "x" ? $.left + $.width / 2 : $.top + $.height / 2) - A(v);
  }, H = (v) => {
    const $ = v.getBoundingClientRect();
    return Array.from(v.querySelectorAll(o)).filter((P) => {
      var Y;
      const Z = (Y = P.parentElement) == null ? void 0 : Y.closest(o);
      if (Z && v.contains(Z))
        return !1;
      const U = P.getBoundingClientRect(), ne = _(P), we = n === "x" ? ne : U.left + U.width / 2, j = n === "x" ? U.top + U.height / 2 : ne;
      return U.width > 0 && we >= $.left && we <= $.right && j >= $.top && j <= $.bottom;
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
      const ne = Number($.style.scale) || 1, we = $.getBoundingClientRect();
      P = { width: we.width / ne, height: we.height / ne }, h.current.set($, P);
    }
    if (!(P.width > 0 && P.height > 0))
      return 1;
    const Z = v.getBoundingClientRect(), U = Math.min(
      Z.width / P.width,
      Z.height / P.height
    );
    return Math.max(1, Math.min(U, i));
  }, B = (v) => {
    const $ = p == null ? void 0 : p.current;
    return $ != null && $.contains(v) ? _r(v, $) : 1 / 0;
  }, M = () => {
    var v, $, P, Z;
    cancelAnimationFrame(g.current), f.current.forEach((U) => {
      U.style.transition = `scale ${tt.duration}ms ${tt.easing}${y}`, U.style.scale = "";
    }), f.current.clear(), S(null), T.current.forEach((U) => {
      U.style.transition = `translate ${tt.duration}ms ${tt.easing}`, U.style.translate = "", U.style.removeProperty("--dock-scale");
    }), T.current.clear(), (v = e.current) == null || v.style.setProperty(
      "--dock-scale-timing",
      `${tt.duration}ms ${tt.easing}`
    ), ($ = e.current) == null || $.style.removeProperty("--dock-spread"), (P = e.current) == null || P.style.removeProperty("--dock-max-scale"), (Z = e.current) == null || Z.style.removeProperty("--dock-active-scale");
  }, W = (v, $, P) => {
    const Z = n === "x" ? $ : P, U = H(v).map(({ item: j, glyph: Y }) => {
      const ue = _(j), J = m ? j === N.current ? 1 : 0 : na(Math.abs(Z - ue), a), ae = 1 + (Math.max(1, Math.min(F(j, Y), B(Y))) - 1) * J;
      Y.style.transition = `scale ${R}${y}`, ae > 1.001 ? (Y.style.scale = ae.toFixed(3), f.current.add(Y)) : f.current.has(Y) && (Y.style.scale = "", f.current.delete(Y));
      const fe = n === "x" ? j.offsetWidth : j.offsetHeight, he = (ae - 1) * fe + 2 * d * J;
      return { item: j, centre: ue, scale: ae, growth: he };
    });
    v.style.setProperty("--dock-scale-timing", R), v.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...U.map(({ scale: j }) => j)).toFixed(3)
    );
    const ne = U.find(({ item: j }) => j.dataset.active === "true");
    if (v.style.setProperty(
      "--dock-active-scale",
      ((ne == null ? void 0 : ne.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const we = U.reduce((j, { growth: Y }) => j + Y, 0);
    v.style.setProperty("--dock-spread", `${we.toFixed(1)}px`), U.forEach(({ item: j, centre: Y, scale: ue, growth: J }) => {
      const ee = C(j);
      if (!ee)
        return;
      const ae = U.reduce(
        (fe, he) => he.centre < Y ? fe + he.growth : fe,
        J / 2
      );
      ee.style.transition = `translate ${R}`, Math.abs(ae) > 0.1 || ue > 1.001 ? (ee.style.translate = n === "x" ? `${ae.toFixed(1)}px 0` : `0 ${ae.toFixed(1)}px`, ee.style.setProperty("--dock-scale", ue.toFixed(3)), T.current.add(ee)) : T.current.has(ee) && (ee.style.translate = "", ee.style.removeProperty("--dock-scale"), T.current.delete(ee));
    });
  }, te = (v) => {
    if (v.pointerType && v.pointerType !== "mouse" || At())
      return;
    const $ = v.currentTarget, { clientX: P, clientY: Z } = v;
    cancelAnimationFrame(g.current), g.current = requestAnimationFrame(() => {
      const U = $.getBoundingClientRect(), ne = n === "x" ? Z : P, [we, j] = n === "x" ? [U.top, U.bottom] : [U.left, U.right];
      if (ne < we || ne > j) {
        M();
        return;
      }
      if (m) {
        const Y = n === "x" ? P : Z, ue = N.current;
        if (!(ue && $.contains(ue) && O(ue, Y) <= ta)) {
          let ee = null, ae = 1 / 0;
          H($).forEach(({ item: fe }) => {
            const he = O(fe, Y);
            he < ae && (ee = fe, ae = he);
          }), ee && S(ee);
        }
      }
      W($, P, Z);
    });
  }, D = (v) => {
    const $ = e.current;
    if (!t || !$ || At())
      return;
    m && S(v);
    const P = v.getBoundingClientRect();
    W($, P.left + P.width / 2, P.top + P.height / 2);
  };
  return c.useEffect(() => {
    t || M();
  }, [t]), c.useEffect(() => () => cancelAnimationFrame(g.current), []), {
    containerProps: t ? { onPointerMove: te, onPointerLeave: M, onScrollCapture: M } : {},
    swellOn: D,
    settle: M
  };
}, tn = "data-rail-item", Tr = `[${tn}], button, [role="button"]`, sn = c.createContext(!1), Ul = () => {
  const e = c.useContext(sn), t = Ye(), n = c.useContext(Hn);
  if (!e)
    return {};
  const o = Bl(t, n);
  return {
    arrow: !1,
    contentClassName: o.className,
    contentStyle: o.style,
    sideOffset: 6
  };
}, _t = Ie(Hl), Xl = ({
  enabled: e,
  isDark: t,
  selector: n,
  size: o,
  radius: r,
  pinSelector: s,
  pinKey: i = null
}) => {
  const a = c.useRef(null), u = Un(), [d, m] = c.useState(null), p = c.useRef(null), g = c.useRef(null), h = (E, A) => {
    g.current = A;
    const O = A.getBoundingClientRect(), _ = E.getBoundingClientRect(), H = o ?? O.width, F = o ?? O.height, B = {
      top: Math.round(O.top - _.top + (O.height - F) / 2),
      left: Math.round(O.left - _.left + (O.width - H) / 2),
      width: Math.round(H),
      height: Math.round(F)
    };
    m(
      (M) => M && M.visible && M.top === B.top && M.left === B.left && M.width === B.width && M.height === B.height ? M : { ...B, visible: !0, instant: !(M != null && M.visible) }
    );
  }, f = (E, A) => {
    var _;
    const O = (_ = A == null ? void 0 : A.closest) == null ? void 0 : _.call(A, n);
    return O && E.contains(O) ? O : null;
  }, N = (E) => {
    if (!e)
      return;
    const A = f(E.currentTarget, E.target);
    A && h(E.currentTarget, A);
  }, S = (E) => {
    if (!e)
      return;
    const A = f(E.currentTarget, E.target);
    A && E.target.matches(":focus-visible") && h(E.currentTarget, A);
  }, T = () => {
    var O;
    const E = (O = a.current) == null ? void 0 : O.parentElement, A = s && (E == null ? void 0 : E.querySelector(s));
    return E && A ? { container: E, item: A } : null;
  }, y = () => {
    const E = T();
    if (E) {
      h(E.container, E.item);
      return;
    }
    g.current = null, m((A) => A != null && A.visible ? { ...A, visible: !1 } : A);
  };
  c.useEffect(() => {
    var A, O;
    if (!e)
      return;
    const E = T();
    E ? h(E.container, E.item) : (O = (A = a.current) == null ? void 0 : A.parentElement) != null && O.matches(":hover") || y();
  }, [e, i]);
  const R = (E) => {
    const A = E.relatedTarget;
    (!A || !E.currentTarget.contains(A)) && (E.currentTarget.matches(":hover") || y());
  };
  return c.useEffect(() => {
    const E = a.current;
    if (!(d != null && d.visible)) {
      p.current = null;
      return;
    }
    const A = p.current;
    if (p.current = d.top, !Qt(E) || At() || A === null || d.instant)
      return;
    const O = Math.min(Math.abs(d.top - A) / 600, 0.08);
    O && E.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - O / 2}, ${1 + O})`,
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
          cr
        ),
        style: {
          ...fr(t, u),
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
          transition: d.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${en}ms ease-out)` : `translate ${_t.duration}ms ${_t.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${en}ms ease-out)`
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: N,
      onMouseLeave: y,
      onFocus: S,
      onBlur: R,
      onScrollCapture: y
    } : {}
  };
}, la = (e, t, n = null) => {
  const o = Xl({
    enabled: e,
    isDark: t,
    selector: Tr,
    // The rail's buttons exactly, so the hover sits on the item
    size: Te,
    radius: Qe,
    pinSelector: `[${tn}][data-open="true"]`,
    pinKey: n
  });
  return {
    ...o,
    lens: o.lens ? c.cloneElement(o.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, oa = (e, t) => {
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
}, Ro = ({
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
        `[${tn}][data-active="true"]`
      );
      if (!g) {
        i(
          (f) => f != null && f.visible ? { ...f, visible: !1 } : f
        );
        return;
      }
      const h = oa(g, p);
      i(
        (f) => f && f.visible && f.top === h.top && f.left === h.left && f.width === h.width && f.height === h.height ? f : {
          ...h,
          visible: !0,
          instant: m || !(f != null && f.visible)
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
    const f = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return f == null || f.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(p), h == null || h.disconnect(), f == null || f.disconnect();
    };
  }, [e, o, u]), c.useEffect(() => {
    const m = r.current;
    if (!(s != null && s.visible)) {
      a.current = null;
      return;
    }
    const p = a.current;
    if (a.current = s.top, p === null || s.instant || !Qt(m) || At())
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
        cr
      ),
      style: {
        ...mr(n, t),
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
        transition: s.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${en}ms ease-out)` : `translate ${_t.duration}ms ${_t.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${en}ms ease-out)`
      }
    }
  ) : null };
}, Oe = 52, ra = 2, sa = 10, aa = Oe / 2, dl = "[data-flyout-tile]", Kl = 4, jl = 32, Tl = jl + Kl, ia = 104, Gt = 24, Ar = "background 160ms ease, color 160ms ease, transform 120ms ease", ca = 10, Cr = 10, To = Cr + 2, da = 18, Ao = 1.08, ua = (e) => {
  for (let t = e.parentElement; t; t = t.parentElement) {
    const { overflowY: n } = getComputedStyle(t);
    if (n === "auto" || n === "scroll")
      return t;
  }
  return null;
}, wa = (e) => {
  const t = ua(e);
  if (!t)
    return Ao;
  const n = _r(e, t);
  return Math.min(Ao, n / Math.min(n, pr));
}, fa = 1190, ma = 1195, Co = 120, ha = 220, Oo = 200, $o = 8, Io = Ie(Er), je = Ie(Hl), ko = Ie(qn), Lo = 8192, pa = ({ left: e, top: t, width: n, height: o, radius: r }) => {
  const s = Math.min(r, n / 2, o / 2), i = e + n, a = t + o, u = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${Lo} V ${Lo} H 0 Z M ${e + s} ${t} H ${i - s} ${u} ${i} ${t + s} V ${a - s} ${u} ${i - s} ${a} H ${e + s} ${u} ${e} ${a - s} V ${t + s} ${u} ${e + s} ${t} Z')`;
}, ga = ({
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
  const f = Ye(), N = rn(), S = !!(e && n), T = c.useRef(null);
  e && t && (T.current = { group: e, key: t });
  const y = T.current, R = c.useRef(null);
  n && (R.current = { anchor: n, railEdge: o });
  const [C, E] = c.useState(S);
  S && !C && E(!0);
  const [A, O] = c.useState(S);
  S && !A && O(!0), c.useEffect(() => {
    if (S)
      return;
    const I = setTimeout(() => O(!1), Oo);
    return () => clearTimeout(I);
  }, [S]);
  const _ = c.useRef(null), [H, F] = c.useState({
    x: 0,
    y: 0
  }), B = c.useCallback(() => {
    const I = R.current, z = _.current;
    if (!I || !z)
      return;
    const q = I.anchor.getBoundingClientRect(), X = z.offsetHeight, ie = Math.round(I.railEdge + ca), le = q.top + q.height / 2 - X / 2, Ee = window.innerHeight - X - $o, se = Math.round(
      Math.max($o, Math.min(le, Ee))
    );
    F((Ne) => Ne.x === ie && Ne.y === se ? Ne : { x: ie, y: se });
  }, []);
  c.useLayoutEffect(() => {
    if (!C)
      return;
    B(), window.addEventListener("resize", B), window.addEventListener("scroll", B, !0);
    const I = typeof ResizeObserver > "u" || !_.current ? null : new ResizeObserver(B);
    return I && _.current && I.observe(_.current), () => {
      window.removeEventListener("resize", B), window.removeEventListener("scroll", B, !0), I == null || I.disconnect();
    };
  }, [C, B, n, o, t]), c.useEffect(() => {
    if (!n)
      return;
    const I = wa(n);
    I > 1.001 && Qs(n, I);
  }, [n]);
  const [M, W] = c.useState(!1);
  c.useEffect(() => {
    if (!S) {
      W(!1);
      return;
    }
    let I = 0;
    const z = requestAnimationFrame(() => {
      I = requestAnimationFrame(() => W(!0));
    });
    return () => {
      cancelAnimationFrame(z), cancelAnimationFrame(I);
    };
  }, [S]);
  const te = c.useMemo(
    () => y ? Ml(y.group.subitems, y.group.icon) : [],
    [y]
  ), D = c.useRef(null), v = Rr(D, {
    enabled: S,
    axis: "x",
    itemSelector: dl,
    transition: Ar,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: ra,
    // The neighbours make room as it grows, and a little more
    carrierSelector: '[role="menuitem"]',
    spacing: sa,
    // Only the tile under the pointer swells; the rest keep their size
    hoveredOnly: !0
  }), $ = c.useRef(void 0), P = c.useCallback((I) => {
    var ie;
    (ie = $.current) == null || ie.call($), $.current = void 0;
    const z = I == null ? void 0 : I.parentElement;
    if (!I || !z || typeof MutationObserver > "u")
      return;
    const q = () => {
      const le = I.offsetLeft - I.offsetWidth / 2, Ee = le + I.offsetWidth;
      let se = 0;
      const Ne = (pe, ke, ve) => {
        pe < Ee && pe + ke > le && (se = Math.max(se, -ve - To));
      };
      z.querySelectorAll(dl).forEach((pe) => {
        const ke = parseFloat(pe.style.scale) || 1, ve = (ke - 1) * Oe / 2, Se = pe.closest('[role="menuitem"]'), Ae = parseFloat((Se == null ? void 0 : Se.style.translate) ?? "") || 0;
        Ne(
          pe.offsetLeft + Ae - ve,
          ke * Oe,
          pe.offsetTop - ve
        );
        const Le = Se == null ? void 0 : Se.querySelector("[data-flyout-name]"), et = Le == null ? void 0 : Le.parentElement;
        Le && et && pe.dataset.flyoutNameSide === "above" && Ne(
          et.offsetLeft + Ae,
          Le.offsetWidth,
          et.offsetTop + Le.offsetTop - ve
        );
      });
      const De = se > 0 ? `0 ${(-se).toFixed(1)}px` : "";
      I.style.translate !== De && (I.style.translate = De);
    }, X = new MutationObserver(q);
    X.observe(z, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), $.current = () => X.disconnect();
  }, []), Z = c.useRef([]), [U, ne] = c.useState([]);
  c.useLayoutEffect(() => {
    const I = () => {
      const q = te.map(
        (X, ie) => {
          var le;
          return ((le = Z.current[ie]) == null ? void 0 : le.offsetWidth) ?? 0;
        }
      );
      ne(
        (X) => X.length === q.length && X.every((ie, le) => ie === q[le]) ? X : q
      );
    };
    if (I(), typeof ResizeObserver > "u")
      return;
    const z = new ResizeObserver(I);
    return Z.current.slice(0, te.length).forEach((q) => q && z.observe(q)), () => z.disconnect();
  }, [te]);
  const we = xa(U, te.length), j = c.useRef([]), Y = te.findIndex(
    ({ sub: I }) => Ke(I, s)
  ), [ue, J] = c.useState(0);
  c.useEffect(() => {
    J(Math.max(Y, 0));
  }, [t]), c.useEffect(() => {
    if (!S || !i)
      return;
    const I = setTimeout(() => {
      var z;
      return (z = j.current[0]) == null ? void 0 : z.focus();
    });
    return () => clearTimeout(I);
  }, [S, i, t]);
  const ee = (I) => {
    var q;
    const z = Math.max(0, Math.min(I, te.length - 1));
    J(z), (q = j.current[z]) == null || q.focus();
  }, ae = (I, z) => {
    var q;
    switch (I.key) {
      case "ArrowRight":
        ee(z + 1);
        break;
      case "ArrowLeft":
        z === 0 ? u(!0) : ee(z - 1);
        break;
      case " ":
        (q = j.current[z]) == null || q.click();
        break;
      case "Home":
        ee(0);
        break;
      case "End":
        ee(te.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    I.preventDefault();
  }, fe = "var(--lw-text-primary)", he = f ? "#ffffff" : m;
  return /* @__PURE__ */ x(xe, { children: [
    A ? /* @__PURE__ */ l(
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
          ...r ? { clipPath: pa(r) } : {},
          zIndex: fa,
          animationDuration: `${S ? ha : Oo}ms`,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: f ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.88) 0%, rgba(236, 239, 243, 0.78) 30%, rgba(236, 239, 243, 0.45) 55%, rgba(236, 239, 243, 0.1) 100%)"
        }
      }
    ) : null,
    C && typeof document < "u" ? rr(
      /* @__PURE__ */ l(
        "div",
        {
          ref: _,
          ...N,
          className: b(
            "lw:fixed lw:top-0 lw:left-0",
            $e
          ),
          style: {
            zIndex: ma,
            transform: `translate(${H.x}px, ${H.y}px)`,
            transition: M ? `transform ${je.duration}ms ${je.easing}` : "none"
          },
          children: /* @__PURE__ */ l(
            ba,
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
                    width: we.width,
                    height: Tl + Oe + Kl + jl,
                    // The panel stretches as the dock pushes
                    // the pages along, as the Dock's shelf does
                    marginRight: "var(--dock-spread, 0px)",
                    // In step with the pages it makes room for
                    transition: `margin-right var(--dock-scale-timing, ${je.duration}ms ${je.easing})`
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
                          marginBottom: To,
                          transition: `translate var(--dock-scale-timing, ${je.duration}ms ${je.easing})`,
                          // The pages' own name colour
                          color: wr(f)
                        },
                        children: y.group.text
                      }
                    ),
                    te.map(({ sub: I, icon: z }, q) => /* @__PURE__ */ l(
                      $r,
                      {
                        ref: (X) => {
                          j.current[q] = X;
                        },
                        nameRef: (X) => {
                          Z.current[q] = X;
                        },
                        tileLeft: we.tiles[q],
                        nameLeft: we.names[q],
                        sub: I,
                        icon: z,
                        index: q,
                        active: Ke(
                          I,
                          s
                        ),
                        tabIndex: q === ue ? 0 : -1,
                        onClick: (X) => {
                          Tt(X) && (X.preventDefault(), a(I.path), u());
                        },
                        onKeyDown: (X) => ae(X, q),
                        onFocus: (X) => {
                          J(q);
                          const ie = X.currentTarget.querySelector(
                            dl
                          );
                          ie && X.currentTarget.matches(
                            ":focus-visible"
                          ) && v.swellOn(ie);
                        },
                        accentColor: m,
                        activeBackgroundColor: p,
                        activeForegroundColor: g,
                        labelColor: fe,
                        iconColor: he,
                        surface: h,
                        isDark: f
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
}, ba = ({
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
    if (Js(u), e) {
      Qt(u) && !At() && u.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: ko.duration, easing: ko.easing }
      );
      return;
    }
    if (!Qt(u)) {
      t == null || t();
      return;
    }
    let d = !1;
    const m = () => {
      !d && !a.current && (d = !0, t == null || t());
    }, p = setTimeout(m, Co + 100);
    return u.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: Co,
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
      style: { padding: Cr },
      children: r
    }
  );
}, Or = (e) => e % 2 === 1, xa = (e, t) => {
  const n = [], o = [];
  let r = -Gt, s = -Gt, i = -Gt;
  for (let a = 0; a < t; a += 1) {
    const u = e[a] || Oe, d = Or(a), m = d ? s : i, p = Math.max(
      r + Gt + Oe / 2,
      m + Gt + u / 2
    );
    r = p + Oe / 2, d ? s = p + u / 2 : i = p + u / 2, n.push(Math.round(p - Oe / 2)), o.push(Math.round(p - u / 2));
  }
  return {
    tiles: n,
    names: o,
    width: Math.round(Math.max(r, s, i, 0))
  };
}, $r = c.forwardRef(
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
    labelColor: f,
    iconColor: N,
    surface: S,
    isDark: T
  }, y) => {
    const R = Or(s), C = Bl(T, S), E = wr(T), A = {
      animation: `${Ws} ${Io.duration}ms ${Io.easing} both`,
      animationDelay: `${s * da}ms`
    }, O = T ? E : p, _ = {
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
        style: { ..._, color: f },
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
              "data-flyout-name-side": R ? "above" : "below",
              className: b(
                C.className,
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
                ...C.style,
                // Cards of their own: a surface and a soft shadow, no
                // edge, lifted a little more than a resting label
                border: "none",
                boxShadow: T ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)",
                left: t,
                top: Tl,
                width: Oe,
                height: Oe,
                borderRadius: aa,
                // Grows about its centre, so the row stays level; its
                // name moves aside to clear it (see the name's slot)
                transformOrigin: "center",
                transition: `scale ${je.duration}ms ${je.easing}, ${Ar}`,
                // The current page: the accent, solid, its icon and text in
                // the accent's foreground — as the current page on the rail
                ...i ? {
                  background: g ?? p,
                  color: h
                } : {},
                ...A
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
                top: R ? 0 : Tl + Oe + Kl,
                height: jl,
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: R ? "flex-end" : "flex-start",
                // Pushed away from its tile by as much as the tile
                // grows towards it (`--dock-scale`, on the page)
                translate: `0 calc((var(--dock-scale, 1) - 1) * ${R ? -Oe / 2 : Oe / 2}px)`,
                transition: `translate var(--dock-scale-timing, ${je.duration}ms ${je.easing})`
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
                    maxWidth: ia,
                    color: i ? O : E,
                    ...A
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
$r.displayName = "FlyoutTile";
const va = ga;
function nn({
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
const ya = 50, Ea = 250, Na = (e) => {
  const [t, n] = c.useState(null), o = c.useRef(t);
  o.current = t;
  const r = c.useRef(/* @__PURE__ */ new Map()), s = c.useRef(null), i = c.useRef(void 0), a = c.useRef(void 0), u = () => {
    clearTimeout(i.current), i.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = (T, y, R = !1) => {
    u(), d(), n({ key: T, pinned: y, focusFirst: R });
  }, p = c.useCallback((T = !1) => {
    var R, C;
    u(), d();
    const y = (R = o.current) == null ? void 0 : R.key;
    n(null), T && y && ((C = r.current.get(y)) == null || C.focus());
  }, []), g = () => {
    u(), !(!o.current || o.current.pinned) && (d(), a.current = setTimeout(() => p(), Ea));
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
    const T = (C) => {
      var A;
      const E = C;
      return E ? (A = s.current) != null && A.contains(E) ? !0 : [...r.current.values()].some((O) => O.contains(E)) : !1;
    }, y = (C) => {
      T(C.target) || p();
    }, R = (C) => {
      var E;
      C.key === "Escape" && p(
        !!((E = s.current) != null && E.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", y), document.addEventListener("keydown", R), () => {
      document.removeEventListener("pointerdown", y), document.removeEventListener("keydown", R);
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
          ya
        );
      },
      onMouseLeave: g,
      onClick: (y) => {
        var R;
        if (y.detail === 0) {
          m(T, !0, !0);
          return;
        }
        ((R = o.current) == null ? void 0 : R.key) !== T && m(T, !1);
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
}, Sa = Na, _a = 264, Ra = 72, Mo = 64, Ta = "lw:outline-none lw:focus:outline-none lw:focus-visible:outline-none", Aa = 16, Ca = 14, Oa = 32, $a = 20, Do = "0.7rem", En = Ie(Wl), ul = "var(--lw-hover-wash)", Ia = "#ffffff", Wt = (e, t) => ({
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
const wl = "lw:relative lw:flex lw:w-full lw:min-w-0 lw:grow lw:items-center lw:justify-start lw:text-left lw:no-underline lw:transition-colors lw:duration-150 lw:outline-none lw:focus-visible:bg-selected lw:disabled:opacity-40", Nn = "lw:inline-flex lw:shrink-0 lw:text-inherit lw:[&_svg]:size-6", Sn = "lw:my-1 lw:min-w-0 lw:flex-auto", fl = b(
  "lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:p-2 lw:transition-[background-color,border-radius,color] lw:duration-150 lw:disabled:opacity-40 lw:[&_svg]:size-6",
  Ta
), at = ({ text: e, variant: t = "body1", center: n = !1, fontSize: o, fontWeight: r }) => {
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
    qe,
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
}, ka = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, La = 4, Ma = (e) => Math.max(0, Math.min(La, Ln - e)), Da = ({
  open: e,
  size: t = Aa
}) => /* @__PURE__ */ l(
  e ? Es : Ns,
  {
    "aria-hidden": !0,
    className: "lw:shrink-0 lw:opacity-75",
    style: { width: t, height: t }
  }
), Po = ({ open: e }) => /* @__PURE__ */ l(
  ys,
  {
    "aria-hidden": !0,
    className: b(
      "lw:size-5! lw:shrink-0 lw:opacity-75 lw:transition-transform lw:duration-150",
      e && "lw:rotate-90"
    )
  }
), _n = 600, nt = `${Xn}px`, Ln = (Zt - Te) / 2, Pa = (e) => {
  const t = Math.max(0, e - Ln);
  return {
    paddingLeft: `${Math.max(0, Ln - t)}px`,
    paddingRight: `${Math.max(0, Ln - e)}px`
  };
};
function Fa(e, t) {
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
function Ba(e) {
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
const Rn = 8;
function za(e, t, n) {
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
      p.top < m.top + Rn ? g = p.top - m.top - Rn : p.bottom > m.bottom - Rn && (g = p.bottom - m.bottom + Rn), g !== 0 && o.scrollBy({ top: g, behavior: u });
    }, s = requestAnimationFrame(() => r("smooth")), i = window.setTimeout(() => r("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => r("auto"));
    return a == null || a.observe(o), () => {
      cancelAnimationFrame(s), window.clearTimeout(i), a == null || a.disconnect();
    };
  }, [e, t, n]);
}
const Ga = ({
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
  activeBackgroundColor: f,
  groupArrowColor: N,
  groupAccentColor: S,
  activeForegroundColor: T,
  foregroundColor: y,
  surfaceBackgroundColor: R,
  flyoutSurfaceColor: C,
  collapsed: E = !1,
  expandedWidth: A = _a,
  collapsedWidth: O = Ra,
  showLabels: _ = !1,
  topInsetPx: H = 0,
  topContent: F,
  footer: B,
  submenuMode: M = "inline"
}) => {
  var kt;
  const W = Ye(), te = c.useContext(Hn), D = M === "flyout" && E && !_, v = Sa(D), $ = c.useRef(null), P = c.useRef(null), Z = c.useRef(null), U = c.useRef(null);
  za(U, n, E);
  const ne = Fa(U, D), we = Ba(U), j = la(D, W, ((kt = v.state) == null ? void 0 : kt.key) ?? null), Y = Rr($, {
    enabled: D,
    axis: "y",
    itemSelector: Tr,
    maxScale: pr,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: Te + Xn,
    // Only 4px of padding at the scroller's ends: the first and last
    // buttons swell less, or the last would scroll the rail
    boundsRef: U,
    transition: `transform ${En.duration}ms ${En.easing}, background-color 160ms ease`
  }), ue = {
    ...j.containerProps,
    ...Y.containerProps,
    ...D ? {
      onScrollCapture: () => {
        var w, k;
        (k = (w = j.containerProps).onScrollCapture) == null || k.call(w), Y.settle();
      }
    } : {}
  }, J = f ?? h, ee = Ro({
    enabled: D,
    isDark: W,
    color: J,
    containerRef: P
  }), ae = Ro({
    enabled: D,
    isDark: W,
    color: J,
    containerRef: Z
  }), fe = c.useMemo(
    () => e.filter((w) => w.aboveSearch),
    [e]
  ), he = c.useMemo(
    () => e.filter((w) => !w.aboveSearch),
    [e]
  ), { close: I } = v;
  c.useEffect(() => {
    I();
  }, [n, I]);
  const [z, q] = c.useState(
    {}
  ), X = T ?? _l(J), ie = { bg: J, fg: X }, le = S ?? Jt(h), Ee = jn(R, W), se = y ?? (W ? "var(--lw-text-primary)" : h), Ne = m ?? Ee, De = p ?? (m ? _l(Ne) : y ?? (W ? Ia : h)), pe = Jt(De), ke = (w) => {
    o == null || o(w);
  }, ve = (w) => w ? {
    href: w,
    onClick: (k) => {
      Tt(k) && (k.preventDefault(), ke(w));
    }
  } : {}, Se = (w, k) => {
    q((Q) => ({ ...Q, [w]: !k }));
  }, Ae = (w, k) => z[k] ?? ot(w, n), Le = (w, k) => Wt(
    {
      fg: w ? X : se,
      bg: w ? J : void 0
    },
    w || _ ? ie : { bg: k }
  ), et = (w) => {
    const k = Ke(w, n), Q = Le(k, le), G = /* @__PURE__ */ x(
      Et,
      {
        disabled: !w.path,
        ...ve(w.path),
        "data-testid": `sidebar-item-${w.text}`,
        "data-active": k ? "true" : "false",
        "data-selected": k ? "true" : void 0,
        className: b(
          wl,
          "lw:rounded-lg lw:px-3",
          w.subtitle ? "lw:py-2" : "lw:py-2.5",
          // Room for the action button laid over the row's end
          w.action && "lw:pr-12",
          Q.className
        ),
        style: Q.style,
        children: [
          /* @__PURE__ */ l(
            "span",
            {
              className: Nn,
              style: { minWidth: w.subtitle ? 48 : 36 },
              children: w.icon
            }
          ),
          /* @__PURE__ */ x(
            "span",
            {
              className: b(Sn, w.subtitle && "lw:my-0"),
              children: [
                /* @__PURE__ */ l(
                  at,
                  {
                    text: w.text,
                    fontWeight: _n
                  }
                ),
                w.subtitle ? /* @__PURE__ */ l("span", { className: "lw:block lw:opacity-85", children: /* @__PURE__ */ l(
                  at,
                  {
                    text: w.subtitle,
                    fontSize: "0.8125rem"
                  }
                ) }) : null
              ]
            }
          )
        ]
      },
      w.text
    );
    if (!w.action)
      return G;
    const { action: K } = w, V = k ? X : se;
    return /* @__PURE__ */ x("div", { className: "lw:relative", children: [
      G,
      /* @__PURE__ */ l(In, { title: K.label, side: "right", arrow: !0, children: /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          "aria-label": K.label,
          "data-testid": `sidebar-action-${w.text}`,
          onClick: () => {
            K.onClick(), r == null || r();
          },
          className: b(
            "lw:absolute lw:top-1/2 lw:right-2 lw:inline-flex lw:size-[30px] lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-md lw:border lw:border-solid lw:transition-colors lw:[&_svg]:size-[18px]",
            "lw:hover:bg-(--lw-action-hover-bg)",
            // No lingering outline after a click; a clear ring for keyboard focus
            "lw:focus:outline-none lw:focus-visible:outline-2 lw:focus-visible:outline-offset-1 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-action-ring)"
          ),
          style: {
            borderColor: k ? "rgba(255, 255, 255, 0.35)" : le,
            color: V,
            "--lw-action-hover-bg": k ? "rgba(255, 255, 255, 0.15)" : le,
            "--lw-action-ring": V
          },
          children: K.icon
        }
      ) })
    ] }, w.text);
  }, dn = (w) => {
    const k = ot(w, n), Q = Ke(w, n), G = yt("", w), K = Ae(w, G), V = Le(Q, le);
    return /* @__PURE__ */ x(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: "lw:rounded-lg",
        style: {
          backgroundColor: k ? le : "transparent"
        },
        children: [
          /* @__PURE__ */ x(
            Et,
            {
              onClick: () => Se(G, K),
              "data-testid": `sidebar-item-${w.text}`,
              "data-active": Q ? "true" : "false",
              "aria-expanded": K,
              className: b(
                wl,
                "lw:rounded-lg lw:px-3 lw:py-2.5",
                V.className
              ),
              style: V.style,
              children: [
                /* @__PURE__ */ l("span", { className: Nn, style: { minWidth: 36 }, children: w.icon }),
                /* @__PURE__ */ l("span", { className: Sn, children: /* @__PURE__ */ l(
                  at,
                  {
                    text: w.text,
                    fontWeight: _n
                  }
                ) }),
                /* @__PURE__ */ l(Po, { open: K })
              ]
            }
          ),
          K ? /* @__PURE__ */ l(
            "div",
            {
              "data-testid": `sidebar-children-${w.text}`,
              className: "lw:pb-1 lw:animate-in lw:fade-in-0",
              children: w.subitems.map(
                (me) => it(me, G, 1)
              )
            }
          ) : null
        ]
      },
      w.text
    );
  }, it = (w, k, Q) => {
    const G = yt(k, w), K = Oa + (Q - 1) * $a, V = b(
      wl,
      "lw:mx-1 lw:w-[calc(100%-8px)] lw:rounded-lg lw:py-1.5 lw:pr-4"
    );
    if (St(w)) {
      const ge = ot(w, n), Ce = Ke(w, n), be = Ae(w, G), ft = Le(Ce, ul);
      return /* @__PURE__ */ x("div", { "data-testid": `sidebar-group-${w.text}`, children: [
        /* @__PURE__ */ x(
          Et,
          {
            onClick: () => Se(G, be),
            "data-testid": `sidebar-subitem-${w.text}`,
            "data-active": ge ? "true" : "false",
            "aria-expanded": be,
            className: b(V, ft.className),
            style: { ...ft.style, paddingLeft: K },
            children: [
              w.icon ? /* @__PURE__ */ l(
                "span",
                {
                  className: Nn,
                  style: { minWidth: 32 },
                  children: w.icon
                }
              ) : null,
              /* @__PURE__ */ l("span", { className: Sn, children: /* @__PURE__ */ l(
                at,
                {
                  text: w.text,
                  fontWeight: _n
                }
              ) }),
              /* @__PURE__ */ l(Po, { open: be })
            ]
          }
        ),
        be ? /* @__PURE__ */ l(
          "div",
          {
            "data-testid": `sidebar-children-${w.text}`,
            className: "lw:animate-in lw:fade-in-0",
            children: w.subitems.map(
              (_e) => it(_e, G, Q + 1)
            )
          }
        ) : null
      ] }, G);
    }
    const me = Ke(w, n), Pe = Le(me, ul);
    return /* @__PURE__ */ x(
      Et,
      {
        disabled: !w.path,
        ...ve(w.path),
        "data-testid": `sidebar-subitem-${w.text}`,
        "data-active": me ? "true" : "false",
        "data-selected": me ? "true" : void 0,
        className: b(V, Pe.className),
        style: { ...Pe.style, paddingLeft: K },
        children: [
          w.icon ? /* @__PURE__ */ l("span", { className: Nn, style: { minWidth: 32 }, children: w.icon }) : null,
          /* @__PURE__ */ l("span", { className: Sn, children: /* @__PURE__ */ l(
            at,
            {
              text: w.text,
              fontWeight: _n
            }
          ) })
        ]
      },
      G
    );
  }, ct = b(
    "lw:rounded-md! lw:[&_svg]:size-6 lw:hover:bg-transparent! lw:active:[transform:scale(0.88)] lw:active:duration-[90ms] lw:motion-reduce:active:[transform:none]",
    $e
  ), un = (w) => ({
    ...w ? { backgroundColor: "transparent" } : {},
    transition: `transform ${En.duration}ms ${En.easing}, background-color 160ms ease`
  }), wn = Bl(W, te), Ot = (w, k, Q, G, K, V) => {
    const me = !K, Pe = _ ? Wt(
      {
        fg: G ? X : se,
        bg: G ? J : void 0
      },
      ie
    ) : (
      // Icon-only collapsed rail (collapsible variant): original
      // hover — accent when active, else a subtle tint; no
      // foreground change. The glass rail has no hover of its own.
      Wt(
        {
          fg: G ? X : se,
          bg: G ? J : void 0
        },
        D ? void 0 : {
          bg: G ? J : V != null && V.insideGroup ? ul : le,
          radius: "8px"
        }
      )
    ), ge = D ? Te : 44, Ce = /* @__PURE__ */ x(
      Et,
      {
        "aria-label": k,
        disabled: me,
        ...ve(K),
        onMouseEnter: D ? v.onRailLeafEnter : void 0,
        ...D ? { [tn]: "" } : {},
        "data-testid": (V == null ? void 0 : V.testId) ?? `sidebar-item-${k}`,
        "data-active": G ? "true" : "false",
        className: b(
          fl,
          Pe.className,
          _ ? (
            // 8px padding on all sides of the item container.
            "lw:flex lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:gap-0.5 lw:rounded-lg lw:p-2 lw:[&_svg]:size-[22px]"
          ) : G ? "lw:rounded-lg" : "lw:rounded-full",
          !_ && D && ct
        ),
        style: {
          ...Pe.style,
          ..._ ? {} : { width: ge, height: ge },
          ...!_ && D ? un(G) : {}
        },
        children: [
          Q,
          _ ? /* @__PURE__ */ l(
            at,
            {
              text: k,
              variant: "caption",
              center: !0,
              fontSize: Do
            }
          ) : null
        ]
      }
    );
    return _ ? me ? /* @__PURE__ */ l("span", { children: Ce }, w) : /* @__PURE__ */ l(c.Fragment, { children: Ce }, w) : /* @__PURE__ */ l(
      In,
      {
        title: k,
        side: "right",
        arrow: !D,
        ...D ? {
          contentClassName: wn.className,
          contentStyle: wn.style,
          sideOffset: 6
        } : {},
        children: me ? /* @__PURE__ */ l("span", { children: Ce }) : Ce
      },
      w
    );
  }, Zn = (w) => {
    var K;
    const k = ot(w, n), Q = yt("", w), G = ((K = v.state) == null ? void 0 : K.key) === Q;
    return /* @__PURE__ */ l(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: "lw:flex lw:w-full lw:justify-center",
        children: /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            ...v.triggerProps(Q),
            "aria-label": w.text,
            "aria-haspopup": "menu",
            "aria-expanded": G,
            "data-testid": `sidebar-item-${w.text}`,
            "data-active": k ? "true" : "false",
            "data-open": G ? "true" : "false",
            [tn]: "",
            className: b(
              fl,
              ct,
              // The icon stays centred, in line with every other icon
              // down the rail; the arrow sits in the room beside it,
              // just past the button, in the rail's side gutter (drawn
              // back inside it when the scrollbar takes that gutter).
              // Pointed at, or its pages already out, it has said its piece
              "lw:after:pointer-events-none lw:after:absolute lw:after:top-1/2 lw:after:h-[8px] lw:after:w-[5px] lw:after:-translate-y-1/2 lw:after:content-[''] lw:after:transition-opacity lw:after:duration-150 lw:after:right-(--lw-arrow-right) lw:after:bg-(--lw-arrow-bg) lw:after:opacity-(--lw-arrow-opacity) lw:after:[mask:var(--lw-arrow-mask)] lw:hover:after:opacity-0 lw:data-[open=true]:after:opacity-0"
            ),
            style: {
              width: Te,
              height: Te,
              color: k ? X : se,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              backgroundColor: k ? J : "transparent",
              ...un(k),
              "--lw-arrow-right": `${-Ma(ne)}px`,
              "--lw-arrow-bg": N ?? "currentColor",
              "--lw-arrow-opacity": N ? 1 : 0.55,
              "--lw-arrow-mask": `${ka} center / contain no-repeat`
            },
            children: w.icon
          }
        )
      },
      w.text
    );
  }, st = (w) => {
    const k = ot(w, n), Q = Ke(w, n), G = yt("", w), K = Ae(w, G), V = Wt(
      {
        fg: Q ? X : se,
        bg: Q ? J : void 0
      },
      _ ? ie : { bg: Q ? J : "transparent" }
    ), me = /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        "aria-label": w.text,
        "aria-expanded": K,
        onClick: () => Se(G, K),
        "data-testid": `sidebar-item-${w.text}`,
        "data-active": Q ? "true" : "false",
        className: b(
          fl,
          V.className,
          "lw:flex lw:max-w-full lw:flex-col lw:rounded-[10px]",
          // 8px padding on all sides of the labeled item container.
          _ ? "lw:w-full lw:gap-0.5 lw:p-2" : "lw:w-11 lw:px-2 lw:py-1.5"
        ),
        style: V.style,
        children: [
          _ ? /* @__PURE__ */ l("span", { className: "lw:flex lw:items-center lw:justify-center lw:[&_svg]:size-[22px]", children: w.icon }) : w.icon,
          _ ? /* @__PURE__ */ l(
            at,
            {
              text: w.text,
              variant: "caption",
              center: !0,
              fontSize: Do
            }
          ) : null,
          /* @__PURE__ */ l(Da, { open: K, size: Ca })
        ]
      }
    ), Pe = _ ? me : /* @__PURE__ */ l(In, { title: w.text, side: "right", arrow: !0, children: me }), ge = Wt(
      { bg: k ? le : void 0 },
      _ ? void 0 : { bg: le }
    );
    return /* @__PURE__ */ x(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: b(
          "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-1 lw:rounded-[10px] lw:py-1",
          ge.className
        ),
        style: ge.style,
        children: [
          Pe,
          K ? Ml(w.subitems, w.icon).map(
            ({ sub: Ce, icon: be }) => Ot(
              Ce.path,
              Ce.text,
              be,
              Ke(Ce, n),
              Ce.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${Ce.text}`
              }
            )
          ) : null
        ]
      },
      w.text
    );
  }, $t = (w) => /* @__PURE__ */ l("div", { className: "lw:flex lw:w-full lw:justify-center", children: Ot(
    w.text,
    w.subtitle ? `${w.text} · ${w.subtitle}` : w.text,
    w.icon,
    Ke(w, n),
    w.path,
    { testId: `sidebar-item-${w.text}` }
  ) }, w.text), It = (w) => St(w) ? D ? Zn(w) : E ? st(w) : dn(w) : E ? $t(w) : et(w), Ve = (w) => /* @__PURE__ */ l(
    "div",
    {
      className: b(
        "lw:flex lw:w-full lw:flex-col lw:gap-1",
        E ? "lw:items-center" : "lw:items-stretch"
      ),
      children: w.map((k, Q) => {
        const G = (V) => /* @__PURE__ */ l(
          nn,
          {
            "data-testid": `sidebar-divider-${V === "before" ? "before-" : ""}${k.text}`,
            className: "lw:self-stretch",
            style: {
              marginBlock: D ? nt : "8px",
              width: "auto"
            }
          }
        ), K = k.dividerAfter && Q < w.length - 1;
        return k.dividerBefore || K ? /* @__PURE__ */ x(c.Fragment, { children: [
          k.dividerBefore ? G("before") : null,
          It(k),
          K ? G("after") : null
        ] }, k.text) : It(k);
      })
    }
  ), dt = E ? O : A, fn = () => {
    var me, Pe;
    const { state: w } = v, k = w ? [...e, ...t].find(
      (ge) => St(ge) && yt("", ge) === w.key
    ) ?? null : null, Q = k ? ((me = $.current) == null ? void 0 : me.getBoundingClientRect().right) ?? O : O, G = k ? ((Pe = $.current) == null ? void 0 : Pe.closest("[data-rail-surface]")) ?? $.current : null, K = G == null ? void 0 : G.getBoundingClientRect(), V = G && K ? {
      left: K.left,
      top: K.top,
      width: K.width,
      height: K.height,
      radius: parseFloat(
        getComputedStyle(G).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ l(
      va,
      {
        group: k,
        groupKey: k ? w.key : null,
        anchor: k ? v.getTrigger(w.key) : null,
        railEdge: Q,
        railShape: V,
        activePath: n,
        focusFirst: w == null ? void 0 : w.focusFirst,
        onNavigate: ke,
        onClose: v.close,
        panelProps: v.flyoutProps,
        accentColor: h,
        activeBackgroundColor: f,
        activeForegroundColor: X,
        solidSurface: C ?? Ee
      }
    );
  }, Jn = d ? /* @__PURE__ */ l(
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
        backgroundColor: Ne,
        ...D ? {} : { height: Mo, minHeight: Mo }
      },
      children: s || i ? /* @__PURE__ */ l(
        Fn,
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
  ) : null, mn = !d && s ? /* @__PURE__ */ l(
    "div",
    {
      className: "lw:flex lw:shrink-0 lw:justify-center lw:pt-4",
      style: { paddingBottom: D ? nt : "8px" },
      children: /* @__PURE__ */ l(
        Fn,
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
  ) : null, ut = _ ? 4 : D ? 6 : E ? 8 : 12, wt = b(
    D ? "lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-width:thin] lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-color:transparent_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-1.5" : "lw:[scrollbar-width:thin] lw:[scrollbar-color:transparent_transparent] lw:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-2",
    "lw:[&::-webkit-scrollbar-thumb]:rounded-[4px] lw:[&::-webkit-scrollbar-thumb]:bg-transparent lw:[&:hover::-webkit-scrollbar-thumb]:bg-border lw:[&:has(:focus-visible)::-webkit-scrollbar-thumb]:bg-border"
  );
  return /* @__PURE__ */ l(sn.Provider, { value: D, children: /* @__PURE__ */ x(
    "nav",
    {
      ref: $,
      ...ue,
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": E ? "true" : "false",
      "data-labeled": _ ? "true" : "false",
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
      style: { width: dt, minWidth: dt, backgroundColor: Ee },
      children: [
        j.lens,
        Jn ?? mn,
        fe.length > 0 ? /* @__PURE__ */ x(
          "div",
          {
            ref: Z,
            className: "lw:relative lw:shrink-0",
            style: {
              marginInline: ut,
              paddingBottom: D ? nt : "8px"
            },
            children: [
              ae.glass,
              Ve(fe)
            ]
          }
        ) : null,
        F ? /* @__PURE__ */ l(
          "div",
          {
            className: "lw:shrink-0",
            style: {
              paddingInline: ut,
              paddingBlock: D ? 0 : 8
            },
            children: F
          }
        ) : null,
        /* @__PURE__ */ l(
          "div",
          {
            ref: U,
            "data-testid": "sidebar-links-scroller",
            className: b(
              "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
              wt
            ),
            style: {
              overflowY: we ? "auto" : "hidden",
              overflowX: "hidden",
              // On the floating rail the bar (when it takes space at all)
              // stands in for the right padding, and the left padding
              // follows it, so the 44px column keeps equal gaps in the
              // capsule whether the bar is classic, overlay or absent.
              // (The inline collapsed rail keeps its padding: its open
              // groups tint the full row width.)
              ...D ? Pa(ne) : { paddingInline: ut },
              paddingTop: H && !d ? `${H}px` : D ? nt : "8px",
              paddingBottom: D ? nt : "16px"
            },
            children: /* @__PURE__ */ x(
              "div",
              {
                ref: P,
                className: "lw:relative lw:flex lw:flex-[1_0_auto] lw:flex-col",
                children: [
                  ee.glass,
                  Ve(he),
                  t.length > 0 ? /* @__PURE__ */ x(
                    "div",
                    {
                      className: "lw:mt-auto",
                      style: {
                        paddingTop: D ? nt : "16px"
                      },
                      children: [
                        B ? null : /* @__PURE__ */ l(
                          nn,
                          {
                            style: {
                              marginBottom: D ? nt : "8px"
                            }
                          }
                        ),
                        Ve(t)
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
            style: { paddingInline: ut },
            children: /* @__PURE__ */ l(
              "div",
              {
                style: {
                  borderTop: `1px solid ${pe}`,
                  paddingTop: D ? nt : "12px"
                },
                children: B
              }
            )
          }
        ) : null,
        D ? fn() : null
      ]
    }
  ) });
}, Al = Ga, Mn = "var(--lumora-content-padding, 0px)", ml = `calc(${Mn} * -1)`, Wa = {
  "background.paper": "var(--lw-bg-surface)",
  "background.default": "var(--lw-bg-page)"
}, Ha = (e) => e && typeof e == "object" && !Array.isArray(e) ? Object.fromEntries(
  Object.entries(e).filter(
    ([t, n]) => !t.includes("&") && !t.startsWith("@") && (typeof n == "string" || typeof n == "number")
  )
) : {}, Ua = ({
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
      marginLeft: ml,
      marginRight: ml,
      marginTop: t ? ml : 0,
      // Space below it, like any other block on the page
      marginBottom: Mn,
      paddingLeft: s ? Mn : 0,
      paddingRight: s ? Mn : 0,
      backgroundColor: Wa[o] ?? o,
      ...n && {
        position: "sticky",
        // Under the mobile top bar on phones, the viewport top on desktop
        top: "var(--lumora-sticky-top, 0px)"
      },
      ...Ha(u),
      ...a
    },
    children: e
  }
), Yc = Ua, Xa = ({ keys: e }) => /* @__PURE__ */ l(
  "kbd",
  {
    "aria-hidden": "true",
    className: "lw:inline-flex lw:h-5 lw:shrink-0 lw:items-center lw:gap-1 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-surface lw:px-1.5 lw:font-[inherit] lw:text-[11px] lw:leading-none lw:text-muted-foreground",
    children: e.map((t) => /* @__PURE__ */ l("span", { children: t }, t))
  }
), Ka = Xa;
function Bn({
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
const ja = "(max-width: 899.95px)", qa = (e) => (t) => {
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
function Ya(e) {
  const t = c.useMemo(() => qa(e), [e]);
  return c.useSyncExternalStore(
    t,
    () => typeof window < "u" && window.matchMedia ? window.matchMedia(e).matches : !1,
    () => !1
  );
}
const Ir = () => Ya(ja), Va = 6, Za = 8, Fo = (e, t) => typeof e == "object" ? e[t] : e, hl = ({ width: e, height: t = 20, className: n }) => /* @__PURE__ */ l(
  Bn,
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
  Bn,
  {
    variant: t,
    className: "lw:shrink-0",
    style: { width: e, height: e }
  }
), pl = ({
  themeMode: e,
  sidebarVariant: t = "rail",
  sidebarSubmenu: n = "expand",
  sidebarAutoHide: o = !1,
  showSidebar: r = !0,
  contentPadding: s = br,
  sidebarBackgroundColor: i,
  contentBackgroundColor: a,
  content: u
}) => {
  const d = Ir(), m = e === "dark", p = vr({
    showSidebar: r,
    isMobile: d,
    sidebarVariant: t,
    sidebarSubmenu: n,
    sidebarAutoHide: o
  }), g = Kn(n, t) ? {
    gutterPx: lt,
    radiusPx: gr
  } : void 0, h = kn, f = jn(
    Fo(i, e),
    m
  ), N = yr(
    Fo(a, e),
    m
  ), S = xr(s), T = g ? /* @__PURE__ */ x("div", { className: "lw:flex lw:flex-col lw:items-center lw:pt-3", children: [
    /* @__PURE__ */ l(pt, { size: 36 }),
    /* @__PURE__ */ l(
      "div",
      {
        className: "lw:mt-4 lw:flex lw:flex-col lw:items-center",
        style: { gap: Xn },
        children: Array.from({ length: Za }, (y, R) => /* @__PURE__ */ l(
          "div",
          {
            className: "lw:flex lw:items-center lw:justify-center",
            style: {
              width: Te,
              height: Te
            },
            children: /* @__PURE__ */ l(pt, { size: Rl })
          },
          R
        ))
      }
    )
  ] }) : /* @__PURE__ */ x("div", { className: "lw:flex lw:flex-col lw:items-center lw:gap-4 lw:pt-4", children: [
    /* @__PURE__ */ l(pt, { size: 32 }),
    /* @__PURE__ */ l("div", { className: "lw:h-2" }),
    Array.from({ length: Va }, (y, R) => /* @__PURE__ */ l(pt, { size: 28 }, R))
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
              backgroundColor: f
            },
            children: [
              /* @__PURE__ */ l(pt, { size: 24 }),
              /* @__PURE__ */ l(hl, { width: 96 }),
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
                  backgroundColor: f
                } : {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: p,
                  backgroundColor: f
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
            children: u ?? /* @__PURE__ */ x(xe, { children: [
              /* @__PURE__ */ l(hl, { width: 220, height: 40 }),
              /* @__PURE__ */ l(hl, { width: 320, className: "lw:mb-6" }),
              /* @__PURE__ */ l("div", { className: "lw:mb-6 lw:flex lw:flex-row lw:gap-4", children: Array.from(
                { length: d ? 2 : 4 },
                (y, R) => /* @__PURE__ */ l(
                  Bn,
                  {
                    className: "lw:h-24 lw:flex-1"
                  },
                  R
                )
              ) }),
              /* @__PURE__ */ l(Bn, { className: "lw:h-[360px]" })
            ] })
          }
        )
      ]
    }
  );
}, Bo = { background: "hsl(220, 35%, 3%)", color: "#ffffff" }, Ja = ({
  theme: e = "light",
  darkModeSelector: t,
  ...n
}) => {
  if (!t)
    return /* @__PURE__ */ l(pl, { themeMode: e, ...n });
  const o = [
    '[data-lw-skeleton-mode="dark"]{display:none}',
    '[data-lw-skeleton-mode="light"]{display:contents}',
    `${t} [data-lw-skeleton-mode="light"]{display:none}`,
    `${t} [data-lw-skeleton-mode="dark"]{display:contents}`,
    `${t} body{background-color:${Bo.background};color:${Bo.color}}`
  ].join(`
`);
  return /* @__PURE__ */ x(xe, { children: [
    /* @__PURE__ */ l("style", { dangerouslySetInnerHTML: { __html: o } }),
    /* @__PURE__ */ l("div", { "data-lw-skeleton-mode": "light", children: /* @__PURE__ */ l(pl, { themeMode: "light", ...n }) }),
    /* @__PURE__ */ l("div", { "data-lw-skeleton-mode": "dark", children: /* @__PURE__ */ l(pl, { themeMode: "dark", ...n }) })
  ] });
}, Qa = Ja;
class re extends Error {
  constructor(t, n, o = null) {
    super(t), this.name = "AuthError", this.code = n, this.originalError = o, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const de = {
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
}, Je = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, ei = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Je.ACCESS_TOKEN
      ), t = localStorage.getItem(
        Je.REFRESH_TOKEN
      ), n = localStorage.getItem(Je.USER);
      e && !localStorage.getItem(ye.ACCESS_TOKEN) && localStorage.setItem(ye.ACCESS_TOKEN, e), t && !localStorage.getItem(ye.REFRESH_TOKEN) && localStorage.setItem(
        ye.REFRESH_TOKEN,
        t
      ), n && !localStorage.getItem(ye.USER) && localStorage.setItem(ye.USER, n), (e || t || n) && (localStorage.removeItem(Je.ACCESS_TOKEN), localStorage.removeItem(Je.REFRESH_TOKEN), localStorage.removeItem(Je.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, gl = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new re(
        "localStorage is not available",
        de.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new re(
      "Storage quota exceeded. Please clear browser data.",
      de.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new re(
      "Access to localStorage is denied. Please check browser settings.",
      de.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      t.name
    ), new re(
      "Failed to access storage",
      de.STORAGE_ACCESS_DENIED,
      t
    ));
  }
}, bl = (e, t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new re(
        "localStorage is not available",
        de.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, t), !0;
  } catch (n) {
    throw n.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new re(
      "Storage quota exceeded. Please clear browser data.",
      de.STORAGE_ACCESS_DENIED,
      n
    )) : n.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new re(
      "Access to localStorage is denied. Please check browser settings.",
      de.STORAGE_ACCESS_DENIED,
      n
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      n.name
    ), new re(
      "Failed to write to storage",
      de.STORAGE_ACCESS_DENIED,
      n
    ));
  }
}, kr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (t) {
    return t.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, ln = () => {
  try {
    ei();
    const e = gl(ye.ACCESS_TOKEN), t = gl(ye.REFRESH_TOKEN), n = gl(ye.USER);
    let o = null;
    if (n)
      try {
        o = JSON.parse(n);
      } catch {
        n && n !== "null" && n !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          n.substring(0, 50)
        ), kr(ye.USER);
      }
    return {
      accessToken: e,
      refreshToken: t,
      user: o
    };
  } catch (e) {
    throw e instanceof re ? e : new re(
      "Failed to retrieve authentication tokens",
      de.UNKNOWN_ERROR,
      e
    );
  }
}, ti = () => {
  try {
    const { accessToken: e, refreshToken: t } = ln();
    return !(e || t) ? {
      isAuthenticated: !1,
      error: new re(
        "No authentication tokens found",
        de.TOKEN_NOT_FOUND
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
        de.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Lr = (e, t, n = null) => {
  try {
    if (!e && !t)
      throw new re(
        "At least one token must be provided",
        de.TOKEN_INVALID
      );
    return e && bl(ye.ACCESS_TOKEN, e), t && bl(ye.REFRESH_TOKEN, t), n && bl(ye.USER, JSON.stringify(n)), {
      success: !0,
      error: null
    };
  } catch (o) {
    return console.error("Failed to store authentication tokens:", o), {
      success: !1,
      error: o instanceof re ? o : new re(
        "Failed to store tokens",
        de.UNKNOWN_ERROR,
        o
      )
    };
  }
}, on = () => {
  try {
    return [
      ye.ACCESS_TOKEN,
      ye.REFRESH_TOKEN,
      ye.USER,
      // Also clear legacy keys for complete cleanup
      Je.ACCESS_TOKEN,
      Je.REFRESH_TOKEN,
      Je.USER
    ].map((o) => kr(o)).every((o) => o) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof re ? e : new re(
        "Failed to clear tokens",
        de.LOGOUT_FAILED,
        e
      )
    };
  }
}, ni = () => {
  try {
    const { user: e } = ln();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof re ? e : new re(
        "Failed to retrieve user data",
        de.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Vc = (e) => {
  if (!(e instanceof re))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case de.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case de.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case de.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case de.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case de.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case de.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Cl = (e, t = "Unknown") => {
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
}, li = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const t = yo.create({
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
      const { accessToken: a } = ln();
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
      const { refreshToken: p } = ln();
      if (!p) {
        const h = new Error(
          "No refresh token available for token refresh"
        );
        return Cl(h, "AxiosClient - Token Refresh"), on(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (n && o)
        return new Promise((h, f) => {
          r.push({ resolve: h, reject: f });
        }).then((h) => {
          const {
            accessToken: f,
            refreshToken: N
          } = h;
          if (a.headers && (a.headers.Authorization = `Bearer ${f}`), d.includes("/auth/logout"))
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
      n = !0, o = yo.post(
        `${e}/auth/refresh`,
        {
          refresh_token: p
        }
      );
      try {
        const h = await o, { accessToken: f, refreshToken: N } = h.data;
        if (Lr(f, N, null), s(null, {
          accessToken: f,
          refreshToken: N
        }), a.headers && (a.headers.Authorization = `Bearer ${f}`), d.includes("/auth/logout"))
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
        return Cl(
          h,
          "AxiosClient - Token Refresh Failed"
        ), s(h), on(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(h);
      } finally {
        n = !1, o = null;
      }
    }
  ), t;
}, oi = async (e, t) => {
  const { accessToken: n, refreshToken: o } = ln();
  if (n)
    return !0;
  if (o)
    try {
      const r = await e.post("/auth/refresh", {
        refresh_token: o
      });
      if (r.data.success && r.data.accessToken)
        return Lr(
          r.data.accessToken,
          r.data.refreshToken || null,
          null
        ), !0;
    } catch (r) {
      Cl(r, "TokenValidator - Refresh Failed");
    }
  return on(), t ? t() : window.location.href = "/login", !1;
}, ri = ({ size: e = 20 }) => /* @__PURE__ */ x(
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
), Yt = ri, zo = Ie(Wl), Mr = "#09C1AE", si = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", ai = "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)", Tn = "lw:relative lw:overflow-hidden lw:[&>*]:relative lw:[&>*]:z-[2]", An = ({
  radiusPx: e,
  cover: t
}) => /* @__PURE__ */ x(xe, { children: [
  /* @__PURE__ */ l(
    "span",
    {
      "aria-hidden": !0,
      className: "lw:pointer-events-none lw:absolute! lw:inset-[-50%] lw:z-0! lw:animate-spin lw:motion-reduce:animate-none",
      style: {
        background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Mr} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
] }), ii = ({
  variant: e,
  onClick: t,
  active: n = !1,
  busy: o = !1,
  shortcutKeys: r,
  accentColor: s = "#01584f",
  rightOffsetPx: i = 0
}) => {
  const a = Ul(), u = c.useContext(sn), d = Ye(), m = r ? `Ask Nexa (${r.join("")})` : "Ask Nexa", p = {
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
          o && Tn
        ),
        style: { color: s },
        children: [
          o && /* @__PURE__ */ l(An, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ l(Yt, { size: 20 }),
          /* @__PURE__ */ l("span", { className: "lw:grow lw:text-left lw:text-sm lw:font-semibold lw:text-inherit", children: "Ask Nexa" }),
          r && /* @__PURE__ */ l(Ka, { keys: r })
        ]
      }
    );
  if (e === "sidebar-icon" && u && Sl) {
    const h = mr(Mr, d, "clear");
    return /* @__PURE__ */ l(qe, { title: m, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ x(
      "button",
      {
        ...p,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": !0,
        className: b(
          "lw:inline-flex lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:hover:[transform:scale(1.07)] lw:active:[transform:scale(0.92)] lw:active:[transition-duration:90ms]! lw:motion-reduce:hover:[transform:none] lw:motion-reduce:active:[transform:none] lw:[&_svg]:[filter:drop-shadow(0_1px_1.5px_rgba(0,0,0,0.25))]",
          $e,
          o && Tn
        ),
        style: {
          width: Te,
          height: Te,
          borderRadius: Qe,
          background: h.background,
          boxShadow: n ? `${h.boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)` : h.boxShadow,
          backdropFilter: "blur(8px) saturate(180%)",
          WebkitBackdropFilter: "blur(8px) saturate(180%)",
          transition: `transform ${zo.duration}ms ${zo.easing}, box-shadow 200ms ease`
        },
        children: [
          o && // The same light over a glass interior (tint over an
          // opaque base, so the beam stays a 2px line)
          /* @__PURE__ */ l(
            An,
            {
              radiusPx: Qe,
              cover: `${h.background}, ${d ? "#16202c" : "#f2fbfa"}`
            }
          ),
          /* @__PURE__ */ l(Yt, { size: 18 })
        ]
      }
    ) });
  }
  if (e === "sidebar-icon") {
    const h = u ? Te : 44;
    return /* @__PURE__ */ l(qe, { title: m, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ x(
      "button",
      {
        ...p,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": u || void 0,
        className: b(
          "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring",
          g,
          o && Tn
        ),
        style: { width: h, height: h },
        children: [
          o && /* @__PURE__ */ l(An, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ l(Yt, { size: u ? 18 : 20 })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ l(qe, { title: m, side: "left", children: /* @__PURE__ */ x(
    "button",
    {
      ...p,
      "data-variant": "floating",
      className: b(
        "lw:fixed lw:bottom-6 lw:z-[1150] lw:inline-flex lw:size-[52px] lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-2xl lw:bg-surface lw:p-0 lw:outline-offset-2 lw:transition-[right,box-shadow] lw:duration-[225ms] lw:ease-in-out lw:[box-shadow:var(--lw-shadow-rest)] lw:hover:[box-shadow:var(--lw-shadow-hover)] lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE]",
        n ? "lw:outline-2 lw:outline-solid lw:outline-[#09C1AE]" : "lw:outline-none",
        o && Tn
      ),
      style: {
        right: 24 + i,
        "--lw-shadow-rest": si,
        "--lw-shadow-hover": ai
      },
      children: [
        o && /* @__PURE__ */ l(An, { radiusPx: 16, cover: "var(--lw-bg-surface)" }),
        /* @__PURE__ */ l("span", { className: "lw:flex lw:items-center", children: /* @__PURE__ */ l(Yt, { size: 26 }) })
      ]
    }
  ) });
}, Go = ii, ci = Ms(
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
), Yn = c.forwardRef(
  ({
    className: e,
    variant: t,
    size: n,
    asChild: o = !1,
    type: r = "button",
    ...s
  }, i) => {
    const a = o ? Ls.Root : "button";
    return /* @__PURE__ */ l(
      a,
      {
        ref: i,
        "data-slot": "button",
        type: o ? void 0 : r,
        className: b(ci({ variant: t, size: n }), e),
        ...s
      }
    );
  }
);
Yn.displayName = "Button";
const di = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: o,
  show: r = !0
}) => r ? /* @__PURE__ */ x("div", { className: "lw:m-3 lw:shrink-0 lw:rounded-lg lw:border lw:border-solid lw:border-border lw:bg-card lw:p-4 lw:text-card-foreground", children: [
  /* @__PURE__ */ l(Ss, { className: "lw:size-5", "aria-hidden": !0 }),
  /* @__PURE__ */ l("p", { className: "lw:mb-[0.35em] lw:text-sm lw:font-semibold", children: e }),
  /* @__PURE__ */ l("p", { className: "lw:mb-4 lw:text-sm lw:text-muted-foreground", children: t }),
  /* @__PURE__ */ l(Yn, { size: "sm", className: "lw:w-full", onClick: o, children: n })
] }) : null, Cn = di, xl = 225, Ht = 195, vl = "cubic-bezier(0, 0, 0.2, 1)", yl = "cubic-bezier(0.4, 0, 0.6, 1)", Ut = 24, ui = 720, wi = 1140, fi = 1250, mi = ({
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
  const [p, g] = c.useState(e), [h, f] = c.useState(e);
  c.useEffect(() => {
    if (!e) {
      f(!1);
      return;
    }
    g(!0);
    const E = requestAnimationFrame(() => f(!0));
    return () => cancelAnimationFrame(E);
  }, [e]), c.useEffect(() => {
    if (!e || !d)
      return;
    const E = (A) => {
      A.key === "Escape" && d();
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [e, d]);
  const N = n === "docked", S = Ut + i;
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
    ...o === "left" ? { left: s + Ut } : { right: Ut },
    width: r,
    maxWidth: `calc(100vw - ${Ut * 2}px)`,
    height: `min(${ui}px, calc(100vh - ${S + Ut}px))`,
    borderRadius: "12px"
  }, !e && !p)
    return null;
  const y = e && h, R = !m.current, C = N ? {
    transform: y ? "none" : "translateX(100%)",
    transition: e ? `transform ${R ? 0 : xl}ms ${vl}` : `transform ${Ht}ms ${yl}, visibility 0ms linear ${Ht}ms`
  } : {
    transform: y ? "none" : "scale(0.75, 0.5625)",
    opacity: y ? 1 : 0,
    transformOrigin: o === "left" ? "bottom left" : "bottom right",
    transition: e ? `opacity ${xl}ms ${vl}, transform ${Math.round(xl * 0.666)}ms ${vl}` : `opacity ${Ht}ms ${yl}, transform ${Ht}ms ${yl}, visibility 0ms linear ${Ht}ms`
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
      className: `lw:fixed lw:flex lw:flex-col lw:overflow-hidden lw:border lw:border-solid lw:border-border lw:bg-surface lw:text-foreground lw:shadow-popover ${dr}`,
      style: {
        zIndex: N ? wi : fi,
        visibility: e ? "visible" : "hidden",
        ...T,
        ...C
      },
      children: t
    }
  );
}, hi = mi, an = Pn.Root, cn = Pn.Anchor, pi = "lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none", Ct = c.forwardRef(
  ({
    className: e,
    align: t = "start",
    sideOffset: n = 4,
    unstyled: o = !1,
    ...r
  }, s) => {
    const i = rn();
    return /* @__PURE__ */ l(Pn.Portal, { children: /* @__PURE__ */ l(
      Pn.Content,
      {
        ref: s,
        ...i,
        "data-slot": "popover-content",
        align: t,
        sideOffset: n,
        className: b(
          "lw:z-[1400] lw:outline-none",
          !o && b(
            pi,
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
const gi = 180, Wo = 250, bi = "#01584F", Dr = "var(--lw-text-muted)", xi = ({
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
    qe,
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
}, vi = "lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:transition-[background-color,border-radius] lw:duration-150 lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50 lw:[&_svg]:size-6", Pr = (e, t, n, o) => {
  const r = e ? 48 : 44, s = e ? Dr : t, i = e ? bi : t, a = b(
    vi,
    o ? "lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:rounded-sm lw:px-2 lw:py-1" : n ? "lw:rounded-sm" : "lw:rounded-full lw:hover:rounded-sm",
    !n && "lw:hover:bg-accent"
  ), u = {
    color: n ? "#ffffff" : s,
    backgroundColor: n ? i : void 0,
    ...o ? { minWidth: r, minHeight: r } : { width: r, height: r }
  };
  return { activeBg: i, className: a, style: u };
}, Fr = ({ link: e }) => /* @__PURE__ */ x("span", { className: "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-2", children: [
  /* @__PURE__ */ l("span", { className: "lw:flex lw:items-center lw:justify-center lw:text-inherit", children: e.icon }),
  /* @__PURE__ */ l(
    xi,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Br = (e, t, n) => n ? e : /* @__PURE__ */ l(In, { title: t, side: "right", arrow: !0, children: e }), yi = (e) => {
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
}, Ei = ({
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
  ), m = c.useRef(null), p = c.useRef(null), g = c.useRef(!1), h = c.useRef(!1), f = c.useId(), N = () => {
    d.current && (clearTimeout(d.current), d.current = null);
  }, S = () => {
    N(), d.current = setTimeout(() => {
      u(!1), d.current = null;
    }, gi);
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
  const y = ot(e, t), {
    activeBg: R,
    className: C,
    style: E
  } = Pr(r, o, y, i), A = {
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
    "aria-controls": a ? f : void 0,
    "data-testid": `rail-submenu-trigger-${e.text}`,
    className: C,
    style: E
  }, O = i ? /* @__PURE__ */ l(Fr, { link: e }) : e.icon, _ = e.path ? /* @__PURE__ */ l(
    "a",
    {
      ref: p,
      href: e.path,
      ...A,
      children: O
    }
  ) : /* @__PURE__ */ l(
    "button",
    {
      ref: p,
      type: "button",
      ...A,
      children: O
    }
  );
  return /* @__PURE__ */ x(an, { open: a, children: [
    /* @__PURE__ */ l("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ l(cn, { asChild: !0, children: /* @__PURE__ */ l(
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
        children: Br(_, e.text, i)
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
          maxWidth: Wo
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            id: f,
            role: "menu",
            onKeyDown: yi,
            style: { maxWidth: Wo },
            children: H(e.subitems, e.text, 0)
          }
        )
      }
    )
  ] });
  function H(F, B, M) {
    return F.flatMap((W) => {
      const te = yt(B, W), D = 16 + M * 12;
      if (St(W))
        return [
          /* @__PURE__ */ l(
            "div",
            {
              role: "presentation",
              title: W.text,
              className: "lw:overflow-hidden lw:pr-4 lw:text-[0.7rem] lw:leading-[28px] lw:font-medium lw:tracking-[0.06em] lw:text-ellipsis lw:whitespace-nowrap lw:uppercase lw:text-muted-foreground",
              style: { paddingLeft: D },
              children: W.text
            },
            te
          ),
          ...H(W.subitems, te, M + 1)
        ];
      const v = Ke(W, t), $ = W.path ? "a" : "div";
      return [
        /* @__PURE__ */ x(
          $,
          {
            role: "menuitem",
            tabIndex: -1,
            title: W.text,
            "aria-disabled": W.path ? void 0 : !0,
            "data-selected": v ? "true" : void 0,
            ...W.path ? { href: W.path } : {},
            onClick: (P) => {
              W.path && Tt(P) && (P.preventDefault(), n == null || n(W.path), u(!1));
            },
            className: b(
              "lw:mx-1 lw:my-[1px] lw:flex lw:min-h-8 lw:max-w-full lw:cursor-pointer lw:items-center lw:overflow-hidden lw:rounded-sm lw:pr-4 lw:text-sm lw:outline-none lw:select-none lw:[&_svg]:size-5",
              !v && "lw:hover:bg-accent lw:focus-visible:bg-selected",
              !W.path && "lw:pointer-events-none lw:opacity-40"
            ),
            style: {
              paddingLeft: D,
              color: v ? "#ffffff" : r ? Dr : o,
              backgroundColor: v ? R : void 0
            },
            children: [
              W.icon ? /* @__PURE__ */ l("span", { className: "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:text-inherit", children: W.icon }) : null,
              /* @__PURE__ */ l("span", { className: "lw:min-w-0 lw:flex-auto lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", children: W.text })
            ]
          },
          te
        )
      ];
    });
  }
}, Ni = ({
  link: e,
  activePath: t,
  onLinkClick: n,
  accentColor: o,
  isSecondary: r,
  railShowTitles: s
}) => {
  const i = !!(e.path && t === e.path), { className: a, style: u } = Pr(
    r,
    o,
    i,
    s
  ), d = (p) => {
    p.stopPropagation(), !(e.path && !Tt(p)) && (p.preventDefault(), e.path && (n == null || n(e.path)));
  }, m = s ? /* @__PURE__ */ l(Fr, { link: e }) : e.icon;
  return Br(
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
}, Si = () => /* @__PURE__ */ l("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ l(nn, { className: "lw:w-[60%]" }) }), _i = () => /* @__PURE__ */ l("div", { className: "lw:my-4 lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ l(nn, { className: "lw:w-[60%]" }) }), Ho = (e, t) => e.map((n, o) => /* @__PURE__ */ x(c.Fragment, { children: [
  t(n, o),
  o < e.length - 1 ? /* @__PURE__ */ l(Si, {}) : null
] }, o)), Ri = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: o,
  accentColor: r = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: i = !1
}) => {
  const a = (d, m) => St(d) ? /* @__PURE__ */ l(
    Ei,
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
    Ni,
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
        Ho(e, (d) => a(d, !1)),
        t.length > 0 ? /* @__PURE__ */ x(xe, { children: [
          /* @__PURE__ */ l(_i, {}),
          /* @__PURE__ */ l("div", { className: "lw:mt-auto lw:pb-4", children: /* @__PURE__ */ l(
            "div",
            {
              className: b(
                "lw:flex lw:flex-col lw:items-center",
                u
              ),
              children: Ho(
                t,
                (d) => a(d, !0)
              )
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Ti = Ri, Ai = Rt.Root, Ci = Rt.Trigger, Oi = "lw:relative lw:flex lw:min-h-8 lw:cursor-pointer lw:items-center lw:gap-2 lw:rounded-sm lw:px-2 lw:py-1 lw:text-sm lw:outline-none lw:select-none lw:focus:bg-accent lw:data-[highlighted]:bg-accent lw:data-[disabled]:pointer-events-none lw:data-[disabled]:opacity-50 lw:data-[variant=destructive]:text-destructive lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4", $i = "lw:z-[1400] lw:max-h-(--radix-dropdown-menu-content-available-height) lw:min-w-40 lw:overflow-x-hidden lw:overflow-y-auto lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:p-1 lw:text-popover-foreground lw:shadow-popover lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95", zr = c.forwardRef(
  ({
    className: e,
    sideOffset: t = 4,
    align: n = "start",
    unstyled: o = !1,
    ...r
  }, s) => {
    const i = rn();
    return /* @__PURE__ */ l(Rt.Portal, { children: /* @__PURE__ */ l(
      Rt.Content,
      {
        ref: s,
        ...i,
        "data-slot": "dropdown-menu-content",
        sideOffset: t,
        align: n,
        className: b(
          o ? "lw:z-[1400] lw:outline-none" : $i,
          e
        ),
        ...r
      }
    ) });
  }
);
zr.displayName = "DropdownMenuContent";
const Vt = c.forwardRef(({ className: e, variant: t = "default", ...n }, o) => /* @__PURE__ */ l(
  Rt.Item,
  {
    ref: o,
    "data-slot": "dropdown-menu-item",
    "data-variant": t,
    className: b(Oi, e),
    ...n
  }
));
Vt.displayName = "DropdownMenuItem";
const Dn = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Rt.Separator,
  {
    ref: n,
    "data-slot": "dropdown-menu-separator",
    className: b("lw:-mx-1 lw:my-1 lw:h-px lw:bg-border", e),
    ...t
  }
));
Dn.displayName = "DropdownMenuSeparator";
const Ii = (e) => e ? ir(e) : "USER", ki = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t.charAt(0).toUpperCase()).join(""), Uo = "lw:max-w-full lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", Ol = ({ count: e }) => e ? /* @__PURE__ */ l("span", { className: "lw:h-5 lw:min-w-[22px] lw:rounded-[10px] lw:bg-destructive-fill lw:px-1.5 lw:text-center lw:text-xs lw:leading-5 lw:font-semibold lw:text-white", children: e > 99 ? "99+" : e }) : null, ql = ({ name: e, avatar: t, color: n, size: o = 36 }) => {
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
      ) : ki(e)
    }
  );
}, Gr = ({ name: e, role: t, avatar: n, avatarColor: o, showText: r }) => /* @__PURE__ */ x(xe, { children: [
  /* @__PURE__ */ l(ql, { name: e, avatar: n, color: o }),
  r && /* @__PURE__ */ x("span", { className: "lw:flex lw:min-w-0 lw:grow lw:flex-col lw:items-start lw:text-left", children: [
    /* @__PURE__ */ l(
      "span",
      {
        className: b(
          Uo,
          "lw:text-sm lw:leading-[1.43] lw:font-semibold"
        ),
        children: e
      }
    ),
    /* @__PURE__ */ l(
      "span",
      {
        className: b(
          Uo,
          "lw:text-xs lw:leading-[1.66] lw:opacity-80"
        ),
        children: Ii(t)
      }
    )
  ] })
] }), Li = {
  above: { side: "top", align: "start", sideOffset: 8 },
  "above-end": { side: "top", align: "end", sideOffset: 8 },
  beside: { side: "right", align: "end", sideOffset: 12 }
}, On = "lw:mx-1 lw:min-h-9 lw:gap-0 lw:rounded-md lw:px-4 lw:text-sm lw:[&_svg:not([class*='size-'])]:size-5", $n = "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:items-center lw:text-muted-foreground", Mi = ({
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
  showThemeToggler: f,
  theme: N,
  onThemeToggle: S,
  onLogout: T
}) => {
  const y = (_) => () => {
    t(), _ == null || _();
  }, R = !!e, C = R ? e.getBoundingClientRect() : null, E = c.useRef(null);
  c.useEffect(() => {
    R && typeof document < "u" && (E.current = document.activeElement);
  }, [R]);
  const A = Li[n], O = (_, H) => {
    const F = N === _;
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
        children: H
      }
    );
  };
  return /* @__PURE__ */ x(xe, { children: [
    R && typeof document < "u" ? rr(
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
      Ai,
      {
        open: R,
        onOpenChange: (_) => !_ && t(),
        modal: !1,
        children: [
          /* @__PURE__ */ l(Ci, { asChild: !0, children: /* @__PURE__ */ l(
            "span",
            {
              "aria-hidden": "true",
              tabIndex: -1,
              className: "lw:pointer-events-none lw:fixed",
              style: {
                left: (C == null ? void 0 : C.left) ?? 0,
                top: (C == null ? void 0 : C.top) ?? 0,
                width: (C == null ? void 0 : C.width) ?? 0,
                height: (C == null ? void 0 : C.height) ?? 0
              }
            }
          ) }),
          /* @__PURE__ */ x(
            zr,
            {
              side: A.side,
              align: A.align,
              sideOffset: A.sideOffset,
              collisionPadding: 8,
              onCloseAutoFocus: (_) => {
                var H, F;
                _.preventDefault(), (F = (H = E.current) == null ? void 0 : H.focus) == null || F.call(H);
              },
              className: "lw:min-w-0 lw:rounded-[10px] lw:px-0 lw:py-1 lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
              style: {
                width: o ?? 240,
                maxWidth: "calc(100vw - 16px)"
              },
              children: [
                /* @__PURE__ */ l("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:px-3 lw:py-2", children: /* @__PURE__ */ l(
                  Gr,
                  {
                    name: u,
                    role: d,
                    avatar: m,
                    avatarColor: r,
                    showText: !0
                  }
                ) }),
                /* @__PURE__ */ l(Dn, { className: "lw:mx-0" }),
                s && /* @__PURE__ */ x(
                  Vt,
                  {
                    className: On,
                    onSelect: y(a),
                    children: [
                      /* @__PURE__ */ l("span", { className: $n, children: /* @__PURE__ */ l(nr, {}) }),
                      /* @__PURE__ */ l("span", { className: "lw:flex-auto", children: "Notifications" }),
                      /* @__PURE__ */ l(Ol, { count: i })
                    ]
                  }
                ),
                p.map((_) => /* @__PURE__ */ x(
                  Vt,
                  {
                    className: On,
                    onSelect: y(_.onClick),
                    children: [
                      /* @__PURE__ */ l("span", { className: $n, children: _.icon }),
                      /* @__PURE__ */ l("span", { className: "lw:flex-auto", children: _.label }),
                      /* @__PURE__ */ l(Ol, { count: _.badge })
                    ]
                  },
                  _.key
                )),
                g && /* @__PURE__ */ x(
                  Vt,
                  {
                    className: On,
                    onSelect: y(h),
                    children: [
                      /* @__PURE__ */ l("span", { className: $n, children: /* @__PURE__ */ l(_s, {}) }),
                      /* @__PURE__ */ l("span", { className: "lw:flex-auto", children: "Settings" })
                    ]
                  }
                ),
                f && /* @__PURE__ */ x(xe, { children: [
                  /* @__PURE__ */ l(Dn, { className: "lw:mx-0" }),
                  /* @__PURE__ */ x("div", { className: "lw:px-3 lw:py-2", children: [
                    /* @__PURE__ */ l("span", { className: "lw:mb-1.5 lw:block lw:text-xs lw:leading-[1.5] lw:font-normal lw:tracking-[0.08em] lw:text-muted-foreground lw:uppercase", children: "— Theme" }),
                    /* @__PURE__ */ x(
                      "div",
                      {
                        role: "group",
                        "aria-label": "Theme",
                        className: "lw:flex lw:gap-1 lw:rounded-lg lw:bg-accent lw:p-1",
                        children: [
                          O("light", "Light"),
                          O("dark", "Dark")
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ l(Dn, { className: "lw:mx-0" }),
                /* @__PURE__ */ x(
                  Vt,
                  {
                    className: b(
                      On,
                      // The dark palette's error colors are too dim on the dark menu
                      N === "dark" ? "lw:text-[hsl(0,90%,65%)]" : "lw:text-destructive"
                    ),
                    onSelect: y(T),
                    children: [
                      /* @__PURE__ */ l("span", { className: b($n, "lw:text-inherit"), children: /* @__PURE__ */ l(lr, { className: "lw:size-5 lw:text-current" }) }),
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
}, Wr = Mi, Hr = 64, Di = 2, Xt = ({
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
  }, f = /* @__PURE__ */ x(xe, { children: [
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
  return m ? /* @__PURE__ */ l("a", { href: m, ...N, children: f }) : /* @__PURE__ */ l("button", { type: "button", ...N, children: f });
}, Pi = ({
  onMenuClick: e,
  menuOpen: t,
  onSearchClick: n,
  searchOpen: o,
  showAssistant: r,
  assistantLabel: s = "Nexa",
  onAssistantClick: i,
  assistantActive: a,
  showProfile: u,
  background: d,
  color: m,
  activeColor: p,
  activeBackground: g,
  pinnedLinks: h = [],
  activePath: f,
  onLinkClick: N,
  ...S
}) => {
  const T = h.filter((_) => _.path).slice(0, Di), [y, R] = c.useState(
    null
  ), { userName: C = "User", userAvatar: E, avatarColor: A } = S, O = { color: m, activeColor: p, activeBackground: g };
  return /* @__PURE__ */ x(
    "nav",
    {
      "aria-label": "Mobile navigation",
      "data-testid": "mobile-bottom-nav",
      className: "lw:fixed lw:right-0 lw:bottom-0 lw:left-0 lw:z-[1199] lw:flex lw:items-stretch lw:border-t lw:border-solid lw:border-border lw:pb-[env(safe-area-inset-bottom,0px)]",
      style: {
        height: `calc(${Hr}px + env(safe-area-inset-bottom, 0px))`,
        backgroundColor: d
      },
      children: [
        e && /* @__PURE__ */ l(
          Xt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ l(or, {}),
            onClick: e,
            active: t,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...O
          }
        ),
        T.map((_) => /* @__PURE__ */ l(
          Xt,
          {
            label: _.text,
            icon: _.icon,
            href: _.path,
            onClick: (H) => {
              Tt(H) && (H.preventDefault(), N == null || N(_.path));
            },
            active: ot(_, f),
            isPage: !0,
            testId: `mobile-nav-link-${_.text}`,
            ...O
          },
          _.path
        )),
        r && /* @__PURE__ */ l(
          Xt,
          {
            label: s,
            ariaLabel: `Ask ${s}`,
            icon: /* @__PURE__ */ l(
              "span",
              {
                className: "lw:flex lw:h-7 lw:w-10 lw:items-center lw:justify-center lw:rounded-lg lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.1)]",
                style: {
                  borderColor: a ? "#09C1AE" : "rgba(9, 193, 174, 0.45)"
                },
                children: /* @__PURE__ */ l(Yt, { size: 18 })
              }
            ),
            onClick: i,
            active: a,
            testId: "mobile-nav-nexa",
            ...O
          }
        ),
        n && /* @__PURE__ */ l(
          Xt,
          {
            label: "Search",
            icon: /* @__PURE__ */ l(Ll, {}),
            onClick: n,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...O
          }
        ),
        u && /* @__PURE__ */ x(xe, { children: [
          /* @__PURE__ */ l(
            Xt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${C}`,
              icon: /* @__PURE__ */ l(
                ql,
                {
                  name: C,
                  avatar: E,
                  color: A,
                  size: 26
                }
              ),
              onClick: (_) => R(_.currentTarget),
              active: !!y,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...O
            }
          ),
          /* @__PURE__ */ l(
            Wr,
            {
              anchorEl: y,
              onClose: () => R(null),
              placement: "above-end",
              width: 280,
              ...S
            }
          )
        ] })
      ]
    }
  );
}, Fi = Pi, $l = jt.Root, Bi = {
  right: "lw:inset-y-0 lw:right-0 lw:h-full lw:border-l lw:data-[state=open]:slide-in-from-right lw:data-[state=closed]:slide-out-to-right",
  left: "lw:inset-y-0 lw:left-0 lw:h-full lw:border-r lw:data-[state=open]:slide-in-from-left lw:data-[state=closed]:slide-out-to-left",
  top: "lw:inset-x-0 lw:top-0 lw:h-auto lw:border-b lw:data-[state=open]:slide-in-from-top lw:data-[state=closed]:slide-out-to-top",
  bottom: "lw:inset-x-0 lw:bottom-0 lw:h-auto lw:border-t lw:data-[state=open]:slide-in-from-bottom lw:data-[state=closed]:slide-out-to-bottom"
}, zn = c.forwardRef(
  ({
    className: e,
    children: t,
    side: n = "right",
    overlay: o = !0,
    overlayClassName: r,
    srTitle: s,
    ...i
  }, a) => {
    const u = rn();
    return /* @__PURE__ */ x(jt.Portal, { children: [
      o ? /* @__PURE__ */ l(
        jt.Overlay,
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
        jt.Content,
        {
          ref: a,
          ...u,
          "data-slot": "sheet-content",
          "data-side": n,
          "aria-describedby": void 0,
          className: b(
            "lw:fixed lw:z-[1200] lw:flex lw:flex-col lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none lw:transition lw:ease-in-out lw:data-[state=open]:animate-in lw:data-[state=open]:duration-200 lw:data-[state=closed]:animate-out lw:data-[state=closed]:duration-150",
            Bi[n],
            e
          ),
          ...i,
          children: [
            s ? /* @__PURE__ */ l(jt.Title, { className: "lw:sr-only", children: s }) : null,
            t
          ]
        }
      )
    ] });
  }
);
zn.displayName = "SheetContent";
const zi = ({
  open: e,
  onClose: t,
  search: n
}) => /* @__PURE__ */ l($l, { open: e, onOpenChange: (o) => !o && t(), children: /* @__PURE__ */ l(
  zn,
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
            Yn,
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
) }), Gi = zi, Wi = ({
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
            Yn,
            {
              variant: "bare",
              size: "none",
              "aria-label": "Open navigation menu",
              onClick: t,
              className: "lw:size-10 lw:rounded-full lw:text-inherit lw:hover:bg-black/5 lw:dark:hover:bg-white/10 lw:[&_svg:not([class*=size-])]:size-6",
              style: { color: a },
              children: /* @__PURE__ */ l(or, {})
            }
          ),
          /* @__PURE__ */ l(
            Fn,
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
), Hi = Wi;
function Ur({
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
const Xr = c.createContext(void 0), Ui = ({
  count: e,
  onClick: t,
  color: n,
  hoverColor: o,
  tooltipPlacement: r,
  testId: s
}) => {
  const i = Ul(), a = c.useContext(Xr), u = c.useContext(sn), d = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ l(qe, { title: d, side: r, arrow: !0, ...i, children: /* @__PURE__ */ l(
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
          width: Te,
          height: Te
        } : {}
      },
      children: /* @__PURE__ */ l(
        Ur,
        {
          count: e,
          max: 99,
          badgeClassName: "lw:h-4 lw:min-w-4 lw:px-1 lw:text-[10px]",
          children: a ?? /* @__PURE__ */ l(nr, {})
        }
      )
    }
  ) });
}, Yl = Ui, Xo = 14, Xi = 18, Ki = "blur(12px) saturate(180%) brightness(1.04)", ji = (() => {
  var t;
  if (typeof navigator > "u")
    return !1;
  const e = (t = navigator.userAgentData) == null ? void 0 : t.brands;
  return !!(e != null && e.some(({ brand: n }) => /Chromium/.test(n)));
})(), qi = (e, t, n) => {
  const o = Math.min(0.45, n / e), r = Math.min(0.45, n / t), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${o}" stop-color="#800000"/><stop offset="${1 - o}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${r}" stop-color="#008000"/><stop offset="${1 - r}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, Yi = 140, Ko = 0.22, Vi = 0.14, Zi = (e, t, n) => {
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
      s.x += (r.x - s.x) * Ko, s.y += (r.y - s.y) * Ko, s.i += (r.i - s.i) * Vi;
      const g = Math.abs(r.x - s.x) < 0.3 && Math.abs(r.y - s.y) < 0.3 && Math.abs(r.i - s.i) < 3e-3;
      g && (s.x = r.x, s.y = r.y, s.i = r.i), a(), i = g ? 0 : requestAnimationFrame(u);
    }, d = () => {
      i || (i = requestAnimationFrame(u));
    }, m = (g) => {
      const h = e.current;
      if (g.pointerType === "touch" || !h)
        return;
      const f = h.getBoundingClientRect();
      if (!f.width || !f.height)
        return;
      r.x = (g.clientX - f.left) * h.offsetWidth / f.width, r.y = (g.clientY - f.top) * h.offsetHeight / f.height;
      const N = Math.max(
        f.left - g.clientX,
        0,
        g.clientX - f.right
      ), S = Math.max(
        f.top - g.clientY,
        0,
        g.clientY - f.bottom
      );
      r.i = Math.max(0, 1 - Math.hypot(N, S) / Yi), s.i < 0.01 && (s.x = r.x, s.y = r.y), d();
    }, p = () => {
      r.i = 0, d();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", p), () => {
      cancelAnimationFrame(i), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", p);
    };
  }, [e, t]);
}, Kr = c.forwardRef(
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
    const d = c.useRef(null), m = s && Sl;
    Zi(d, i && Sl, a);
    const p = Un(), g = `lumora-glass-${c.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [h, f] = c.useState(null), N = c.useRef(null), S = c.useCallback(
      (C) => {
        var A;
        if (d.current = C, typeof u == "function" ? u(C) : u && (u.current = C), (A = N.current) == null || A.disconnect(), N.current = null, !C || !m || !ji || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const O = C.offsetWidth, _ = C.offsetHeight;
          f(
            (H) => (H == null ? void 0 : H.width) === O && H.height === _ ? H : O && _ ? { width: O, height: _ } : null
          );
        };
        N.current = new ResizeObserver(E), N.current.observe(C), E();
      },
      [u, m]
    ), T = c.useMemo(
      () => h ? qi(h.width, h.height, Xo) : null,
      [h]
    ), y = m && !!(T && h), R = Hs(e, t, p);
    return /* @__PURE__ */ x(xe, { children: [
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
                    stdDeviation: Xo / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ l(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Xi,
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
            R.className,
            y && "lw:reduce-transparency:[backdrop-filter:none]! lw:reduce-transparency:[-webkit-backdrop-filter:none]!",
            n
          ),
          style: {
            ...R.style,
            ...y ? {
              backdropFilter: `url(#${g}) ${Ki}`
            } : {},
            ...o
          }
        }
      )
    ] });
  }
);
Kr.displayName = "GlassLayer";
const Vn = Kr, Ji = '[role="menuitem"]:not([aria-disabled="true"])', jr = (e) => Array.from(e.querySelectorAll(Ji)), qr = (e) => {
  if (!e)
    return !1;
  const t = e.querySelector(
    '[role="menuitem"][data-selected="true"]'
  ) ?? jr(e)[0];
  return t == null || t.focus(), !!t;
}, Vl = c.forwardRef(({ className: e, onKeyDown: t, ...n }, o) => /* @__PURE__ */ l(
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
      const s = jr(r.currentTarget);
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
Vl.displayName = "ShellMenuList";
const Gn = c.forwardRef(({ className: e, onKeyDown: t, selected: n, ...o }, r) => /* @__PURE__ */ l(
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
Gn.displayName = "ShellMenuItem";
const Qi = ({
  className: e
}) => /* @__PURE__ */ l(
  "li",
  {
    role: "separator",
    className: b("lw:my-1 lw:h-px lw:list-none lw:bg-border", e)
  }
), Il = "lw:outline-none lw:focus:outline-none", ec = "lw:flex lw:flex-col lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", jo = Ie(Nr), qo = Ie(qn), tc = '[role="menuitem"], button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', nc = ({ mode: e, onToggle: t, accentColor: n, tint: o, glass: r = !1 }) => {
  const s = Ye(), i = Un(), a = c.useRef(null), u = c.useRef(null), d = (g) => {
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
  }, p = (g, h, f, N) => {
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
          Il
        ),
        style: {
          "--lw-seg-ring": rt(n, 0.6),
          // White on dark: the accent is too dim against a dark surface
          ...S ? {
            color: s ? "#ffffff" : n,
            backgroundColor: o,
            ...r ? fr(s, i) : {}
          } : {}
        },
        children: /* @__PURE__ */ l(f, { className: "lw:size-4" })
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
        p("light", "Light", Ts, a),
        p("dark", "Dark", As, u)
      ]
    }
  );
}, lc = ({
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
  onAiUsageClick: f,
  onLinkClick: N,
  menuItems: S = [],
  onLogout: T,
  glass: y = !1
}) => {
  const R = Ye(), C = Fl(R ? "hsl(220, 30%, 7%)" : "#ffffff"), E = c.useRef(null), A = c.useMemo(() => ({ current: t }), [t]), O = Xl({
    enabled: y,
    isDark: R,
    selector: tc,
    radius: Qe
  }), _ = (v) => {
    n(), v == null || v();
  }, H = (v) => {
    n(), v.onClick ? v.onClick() : v.path && (N == null || N(v.path));
  }, F = b(
    "lw:min-h-8 lw:gap-1 lw:px-3 lw:py-1.5 lw:text-sm lw:leading-5",
    y ? "lw:rounded-md" : "lw:rounded-lg lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)"
  ), B = "lw:flex lw:min-w-8 lw:shrink-0 lw:items-center lw:[&_svg]:size-5", M = b(
    "lw:cursor-pointer lw:rounded-sm lw:text-xs lw:leading-[18px] lw:font-semibold lw:tracking-[0.02em] lw:hover:underline lw:hover:underline-offset-2 lw:focus-visible:shadow-[0_0_0_2px_var(--lw-link-ring)]",
    Il
  ), W = R ? "#ffffff" : u, te = f ? /* @__PURE__ */ x(
    "div",
    {
      "data-testid": "account-menu-links",
      className: "lw:mt-0.5 lw:flex lw:flex-row lw:items-center lw:gap-1.5",
      children: [
        h ? /* @__PURE__ */ x(xe, { children: [
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: () => _(h),
              "data-testid": "account-menu-view-profile",
              className: M,
              style: { color: W },
              children: "View profile"
            }
          ),
          /* @__PURE__ */ l("span", { "aria-hidden": !0, className: "lw:text-xs lw:text-faint", children: "·" })
        ] }) : null,
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => _(f),
            "data-testid": "account-menu-ai-usage",
            className: M,
            style: { color: W },
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
      h && !f ? /* @__PURE__ */ l(
        "span",
        {
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          className: "lw:truncate lw:text-xs lw:leading-[1.66] lw:font-semibold lw:tracking-[0.02em] lw:underline lw:underline-offset-2",
          style: { color: W },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ x(
    an,
    {
      open: e && !!t,
      onOpenChange: (v) => {
        v || n();
      },
      modal: !0,
      children: [
        /* @__PURE__ */ l(
          cn,
          {
            virtualRef: A
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
              v.preventDefault(), qr(E.current);
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
                  ) : ec
                ),
                style: {
                  width: o,
                  minWidth: o,
                  "--lw-menu-tint": d,
                  "--lw-link-ring": rt(u, 0.6)
                },
                children: [
                  y ? /* @__PURE__ */ l(
                    Vn,
                    {
                      isDark: R,
                      solid: C,
                      className: b(
                        "lw:absolute lw:inset-0 lw:origin-bottom-left lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${zl} ${jo.duration}ms ${jo.easing} both`
                      }
                    }
                  ) : null,
                  /* @__PURE__ */ x(
                    "div",
                    {
                      ...O.containerProps,
                      className: y ? b(
                        "lw:relative lw:flex lw:flex-col lw:overflow-hidden lw:rounded-[inherit]",
                        $e
                      ) : "lw:contents",
                      style: y ? {
                        animation: `${Gl} ${qo.duration}ms ${qo.easing} 70ms both`
                      } : void 0,
                      children: [
                        O.lens,
                        h && !f ? /* @__PURE__ */ l(
                          "button",
                          {
                            type: "button",
                            onClick: () => _(h),
                            "data-testid": "account-menu-header",
                            className: b(
                              "lw:group lw:relative lw:block lw:w-full lw:cursor-pointer lw:text-left lw:transition-colors lw:duration-150 lw:[&_[data-hint]]:hidden lw:hover:[&_[data-hint]]:block lw:hover:[&_[data-role]]:hidden lw:focus-visible:[&_[data-hint]]:block lw:focus-visible:[&_[data-role]]:hidden",
                              !y && "lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)",
                              Il
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
                        /* @__PURE__ */ l(nn, { className: "lw:relative" }),
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
                                  children: /* @__PURE__ */ l(Rs, {})
                                }
                              ),
                              /* @__PURE__ */ l("span", { className: "lw:flex-1 lw:text-foreground", children: "Theme" }),
                              /* @__PURE__ */ l(
                                nc,
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
                          Vl,
                          {
                            ref: E,
                            className: b(
                              "lw:px-1 lw:pb-1",
                              m ? "lw:pt-0" : "lw:pt-1"
                            ),
                            children: [
                              S.map((v) => /* @__PURE__ */ x(
                                Gn,
                                {
                                  onClick: () => H(v),
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
                                    /* @__PURE__ */ l(Ol, { count: v.badge })
                                  ]
                                },
                                v.key
                              )),
                              T ? /* @__PURE__ */ l(Qi, {}) : null,
                              T ? /* @__PURE__ */ x(
                                Gn,
                                {
                                  onClick: () => _(T),
                                  "data-testid": "menu-item-logout",
                                  className: b(
                                    F,
                                    "lw:text-destructive"
                                  ),
                                  children: [
                                    /* @__PURE__ */ l("span", { className: B, children: /* @__PURE__ */ l(lr, {}) }),
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
}, oc = lc, rc = "lw:outline-none lw:focus:outline-none", sc = ({
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
  groupAccentColor: f,
  activeForegroundColor: N,
  foregroundColor: S,
  surfaceBackgroundColor: T,
  flyoutSurfaceColor: y,
  collapsed: R,
  expandedWidth: C,
  collapsedWidth: E,
  topContent: A,
  submenuMode: O,
  color: _,
  hoverColor: H,
  avatarColor: F,
  showProfile: B = !0,
  userName: M = "User",
  userEmail: W,
  userRole: te,
  userAvatar: D,
  showNotifications: v = !0,
  notificationCount: $ = 0,
  onNotificationsClick: P,
  whatsNewCount: Z = 0,
  onProfileClick: U,
  onAiUsageClick: ne,
  menuItems: we,
  onLogout: j,
  theme: Y = "light",
  showThemeToggler: ue = !0,
  onThemeToggle: J
}) => {
  const ee = Ye(), ae = jn(T, ee), fe = _ ?? S ?? (ee ? "#ffffff" : p), he = H ?? f ?? Jt(p), I = F ?? p, z = c.useRef(null), [q, X] = c.useState(!1), ie = te ? ir(te) : void 0, le = (ve) => /* @__PURE__ */ l(
    ql,
    {
      name: M,
      avatar: D,
      color: I,
      size: ve
    }
  ), Ee = $ + Z, se = R && O === "flyout", Ne = v ? /* @__PURE__ */ l(
    Yl,
    {
      count: Ee,
      onClick: P,
      color: fe,
      hoverColor: he,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, De = B ? /* @__PURE__ */ x(
    "button",
    {
      type: "button",
      ref: z,
      onClick: () => X(!0),
      "aria-haspopup": "menu",
      "aria-expanded": q,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      className: b(
        "lw:flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-[10px] lw:hover:bg-(--lw-footer-tint)",
        R ? "lw:flex-[0_0_auto]" : "lw:flex-1",
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        se ? "lw:p-1" : "lw:p-1.5",
        q ? "lw:bg-(--lw-footer-tint)" : "lw:bg-transparent",
        rc
      ),
      style: { "--lw-footer-tint": he },
      children: [
        R && !se && v ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ l(
            Ur,
            {
              dot: !0,
              count: Ee,
              className: "lw:rounded-full",
              badgeClassName: "lw:top-[14%] lw:right-[14%]",
              children: le(36)
            }
          )
        ) : le(R ? 36 : 40),
        R ? null : /* @__PURE__ */ x("span", { className: "lw:block lw:min-w-0 lw:text-left", children: [
          /* @__PURE__ */ l(
            "span",
            {
              className: "lw:block lw:truncate lw:text-sm lw:leading-[1.3] lw:font-semibold",
              style: { color: fe },
              children: M
            }
          ),
          ie ? /* @__PURE__ */ l(
            "span",
            {
              "data-testid": "panel-user-role",
              className: "lw:block lw:truncate lw:text-xs lw:leading-[1.3] lw:tracking-[0.02em] lw:opacity-85",
              style: { color: fe },
              children: ie
            }
          ) : null
        ] })
      ]
    }
  ) : null, pe = !!Ne && (!R || se || !De), ke = De || pe ? /* @__PURE__ */ x(
    "div",
    {
      className: b(
        "lw:flex lw:items-center lw:justify-center lw:gap-1",
        se ? "lw:flex-col" : "lw:flex-row"
      ),
      children: [
        se && pe ? Ne : null,
        De,
        !se && pe ? Ne : null
      ]
    }
  ) : void 0;
  return /* @__PURE__ */ x(
    "div",
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": R ? "true" : "false",
      className: "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
      children: [
        /* @__PURE__ */ l(
          Al,
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
            groupAccentColor: f,
            activeForegroundColor: N,
            foregroundColor: S,
            surfaceBackgroundColor: ae,
            flyoutSurfaceColor: y,
            collapsed: R,
            expandedWidth: C,
            collapsedWidth: E,
            topContent: A,
            footer: ke,
            submenuMode: O
          }
        ),
        B ? /* @__PURE__ */ l(
          oc,
          {
            open: q,
            anchorEl: z.current,
            onClose: () => X(!1),
            width: Math.max(C - 16, 240),
            renderAvatar: le,
            userName: M,
            userEmail: W,
            roleLabel: ie,
            accentColor: p,
            tint: he,
            showThemeToggler: ue,
            theme: Y,
            onThemeToggle: J,
            onProfileClick: U,
            onAiUsageClick: ne,
            onLinkClick: o,
            menuItems: we,
            onLogout: j,
            glass: O === "flyout"
          }
        ) : null
      ]
    }
  );
}, ac = sc, Yo = Ie(Nr), Vo = Ie(qn), ic = 240, cc = "lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", dc = ({
  anchorEl: e,
  onClose: t,
  platforms: n,
  currentKey: o,
  onSelect: r,
  accentColor: s,
  glass: i = !1
}) => {
  const a = Ye(), u = !!e, d = Fl(a ? "hsl(220, 30%, 7%)" : "#ffffff"), m = c.useRef(null), p = c.useMemo(() => ({ current: e }), [e]), g = Xl({
    enabled: i,
    isDark: a,
    selector: '[role="menuitem"]',
    radius: Qe
  }), h = /* @__PURE__ */ l(
    Vl,
    {
      ref: m,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      className: "lw:p-1",
      children: n.map((f) => {
        const N = f.key === o, S = f.accentColor ?? s;
        return /* @__PURE__ */ x(
          Gn,
          {
            selected: N,
            onClick: () => r(f),
            "data-testid": `platform-item-${f.key}`,
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
                /* @__PURE__ */ l("span", { className: "lw:block lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground", children: f.name }),
                f.description ? /* @__PURE__ */ l("span", { className: "lw:block lw:text-xs lw:leading-[18px] lw:text-muted-foreground", children: f.description }) : null
              ] }),
              N ? /* @__PURE__ */ l(
                Cs,
                {
                  "data-testid": "platform-current",
                  className: "lw:ml-3 lw:size-[18px] lw:shrink-0",
                  style: { color: S }
                }
              ) : null
            ]
          },
          f.key
        );
      })
    }
  );
  return /* @__PURE__ */ x(
    an,
    {
      open: u,
      onOpenChange: (f) => {
        f || t();
      },
      modal: !0,
      children: [
        /* @__PURE__ */ l(
          cn,
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
            onClick: (f) => f.stopPropagation(),
            onOpenAutoFocus: (f) => {
              f.preventDefault(), qr(m.current);
            },
            onCloseAutoFocus: (f) => {
              var N;
              f.preventDefault(), (N = e == null ? void 0 : e.focus) == null || N.call(e);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ l(
              "div",
              {
                "data-testid": "platform-menu",
                "data-glass": i ? "true" : void 0,
                className: i ? "lw:relative lw:rounded-md" : cc,
                style: { minWidth: ic },
                children: i ? /* @__PURE__ */ x(xe, { children: [
                  /* @__PURE__ */ l(
                    Vn,
                    {
                      isDark: a,
                      solid: d,
                      className: b(
                        "lw:absolute lw:inset-0 lw:origin-top-left lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${zl} ${Yo.duration}ms ${Yo.easing} both`
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
                        animation: `${Gl} ${Vo.duration}ms ${Vo.easing} 70ms both`
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
}, uc = ({ children: e, anchorEl: t, ...n }) => {
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
          dc,
          {
            ...n,
            anchorEl: r ? t : null
          }
        )
      ]
    }
  );
}, wc = ({
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
  } = s, h = c.useRef(null), [f, N] = c.useState(
    null
  ), S = !!f, T = c.useRef(e);
  return c.useEffect(() => {
    e && !T.current && N(null), T.current = e;
  }, [e]), !a && !o ? null : /* @__PURE__ */ x(xe, { children: [
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
          o && /* @__PURE__ */ l(qe, { title: e ? m : "", side: "right", arrow: !0, children: /* @__PURE__ */ l(
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
                Gr,
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
            Yl,
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
      Wr,
      {
        anchorEl: f,
        onClose: () => N(null),
        placement: e ? "beside" : "above",
        width: e || (y = h.current) == null ? void 0 : y.clientWidth,
        ...s
      }
    )
  ] });
}, fc = wc, mc = 120, hc = 300, Zo = Ie(Er), Jo = Ie(qn), pc = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : t.value) ?? "";
}, gc = 'input, textarea, [contenteditable="true"]', kl = (e) => {
  var t;
  (t = e == null ? void 0 : e.querySelector(gc)) == null || t.focus();
}, bc = "lw:[&_:is([data-slot=input],[data-slot=button],input:not([data-slot]))]:rounded-[6px] lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:border-(--lw-accent) lw:[&_:is([data-slot=input]):focus-visible]:ring-(--lw-accent)", Qo = (e) => e ? `Search (${e.join("")})` : "Search", xc = ({
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
  const d = Ul(), m = c.useContext(sn), p = c.useRef(null), [g, h] = c.useState(null);
  return c.useEffect(() => {
    n === "full" && r && (kl(p.current), s == null || s());
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
    vc,
    {
      search: e,
      icon: t,
      color: i,
      railTooltip: d,
      tooltip: Qo(u)
    }
  ) : /* @__PURE__ */ l(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ x(
        an,
        {
          open: !!g,
          onOpenChange: (f) => !f && h(null),
          children: [
            /* @__PURE__ */ l(
              qe,
              {
                title: Qo(u),
                side: "right",
                arrow: !0,
                ...d,
                children: /* @__PURE__ */ l(cn, { asChild: !0, children: /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Search",
                    onClick: (f) => n === "expand" ? o == null ? void 0 : o() : h(f.currentTarget),
                    className: "lw:inline-flex lw:size-11 lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:[&_svg]:size-6",
                    style: {
                      color: i,
                      "--lw-hover": a
                    },
                    children: t ?? /* @__PURE__ */ l(Ll, {})
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
                onOpenAutoFocus: (f) => {
                  f.preventDefault(), kl(f.currentTarget);
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
}, vc = ({ search: e, icon: t, color: n, railTooltip: o, tooltip: r }) => {
  const s = Ye();
  Us(s, rt(n, s ? 0.3 : 0.35));
  const i = `rgb(${Un()})`, a = Fl(s ? "#1e2430" : "#ffffff"), u = c.useRef(null), d = c.useRef(null), [m, p] = c.useState(!1), g = c.useRef(!1), h = c.useRef(void 0), f = c.useRef(void 0), N = () => {
    clearTimeout(h.current), clearTimeout(f.current);
  }, S = c.useCallback(() => {
    N(), g.current = !1, p(!1);
  }, []), T = () => {
    clearTimeout(f.current), m || (clearTimeout(h.current), h.current = setTimeout(
      () => p(!0),
      mc
    ));
  }, y = () => {
    clearTimeout(h.current), clearTimeout(f.current), f.current = setTimeout(() => {
      !g.current && !pc(d.current) && p(!1);
    }, hc);
  };
  return c.useEffect(() => N, []), c.useEffect(() => {
    if (!m)
      return;
    const R = setTimeout(() => kl(d.current)), C = (A) => {
      var _, H;
      const O = A.target;
      !((_ = d.current) != null && _.contains(O)) && !((H = u.current) != null && H.contains(O)) && S();
    }, E = (A) => {
      var O;
      A.key === "Escape" && (S(), (O = u.current) == null || O.focus());
    };
    return document.addEventListener("pointerdown", C), document.addEventListener("keydown", E), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", C), document.removeEventListener("keydown", E);
    };
  }, [m, S]), /* @__PURE__ */ l(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ x(
        an,
        {
          open: m,
          onOpenChange: (R) => !R && S(),
          modal: !1,
          children: [
            /* @__PURE__ */ l(
              qe,
              {
                title: m ? "" : r,
                side: "right",
                arrow: !0,
                ...o,
                children: /* @__PURE__ */ l(cn, { asChild: !0, children: /* @__PURE__ */ l(
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
                      width: Te,
                      height: Te,
                      color: n,
                      borderRadius: Qe
                    },
                    children: t ?? /* @__PURE__ */ l(
                      Ll,
                      {
                        style: {
                          width: Rl,
                          height: Rl
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
                onOpenAutoFocus: (R) => R.preventDefault(),
                onCloseAutoFocus: (R) => R.preventDefault(),
                onInteractOutside: (R) => {
                  var C;
                  (C = u.current) != null && C.contains(R.target) && R.preventDefault();
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
                        Vn,
                        {
                          isDark: s,
                          solid: a,
                          className: b(
                            "lw:absolute lw:inset-0 lw:origin-left lw:rounded-[inherit]",
                            $e
                          ),
                          style: {
                            animation: `${zl} ${Zo.duration}ms ${Zo.easing} both`
                          }
                        }
                      ),
                      /* @__PURE__ */ l(
                        "div",
                        {
                          "data-lw-host": "",
                          className: b(
                            "lw:relative",
                            bc,
                            $e
                          ),
                          style: {
                            "--lw-accent": i,
                            animation: `${Gl} ${Jo.duration}ms ${Jo.easing} 60ms both`
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
}, yc = xc, Ec = 80, Nc = 300, Sc = 32, _c = (e) => {
  const t = c.useRef(/* @__PURE__ */ new WeakSet()), n = c.useRef(void 0), o = c.useRef(void 0), [r, s] = c.useState(!1), [i, a] = c.useState(!1), [u, d] = c.useState(!1), m = c.useRef(null), p = () => {
    clearTimeout(n.current), clearTimeout(o.current), n.current = void 0, o.current = void 0;
  };
  c.useEffect(() => {
    if (!e) {
      p(), s(!1), a(!1), d(!1);
      return;
    }
    const f = (y) => {
      var C;
      if (y.pointerType !== "mouse")
        return;
      const R = y.clientX <= Sc;
      R && ((C = m.current) == null || C.style.setProperty(
        "--edge-glow-y",
        `${y.clientY}px`
      )), d(R);
    }, N = () => d(!1), S = () => {
      clearTimeout(n.current), n.current = void 0, o.current === void 0 && (o.current = setTimeout(() => {
        o.current = void 0, s(!1), a(!1);
      }, Nc));
    }, T = (y) => {
      t.current.has(y) || S();
    };
    return document.addEventListener("mouseover", T), document.addEventListener("pointermove", f, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", S), document.documentElement.addEventListener("mouseleave", N), () => {
      p(), document.removeEventListener("mouseover", T), document.removeEventListener("pointermove", f), document.documentElement.removeEventListener(
        "mouseleave",
        S
      ), document.documentElement.removeEventListener(
        "mouseleave",
        N
      );
    };
  }, [e]);
  const g = {
    onMouseOver: (f) => {
      t.current.add(f.nativeEvent), clearTimeout(o.current), o.current = void 0, !r && n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, s(!0);
      }, Ec));
    },
    onFocus: (f) => {
      Rc(f.target) && a(!0);
    },
    onBlur: (f) => {
      const N = f.relatedTarget;
      (!N || !f.currentTarget.contains(N)) && a(!1);
    },
    onKeyDown: (f) => {
      f.key === "Escape" && (a(!1), s(!1));
    }
  }, h = e && (r || i);
  return {
    shown: h,
    nearEdge: e && u && !h,
    glowRef: m,
    rootProps: g
  };
}, Rc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Tc = _c, Ac = 100, Cc = () => {
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
        }, Ac));
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
}, Oc = Cc, $c = (e) => {
  const t = Array.from((e == null ? void 0 : e.children) ?? []).find(
    (a) => a.tagName === "ASIDE"
  );
  if (!t)
    return null;
  const n = t.querySelector("[data-rail-surface]") ?? t, { right: o, width: r } = t.getBoundingClientRect(), { top: s, height: i } = n.getBoundingClientRect();
  return r <= 0 || i <= 0 ? null : { left: o, top: s, height: i };
}, Ic = 300, El = 288, kc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Lc = 18, er = 72, Nl = 90, Mc = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", Dc = 68, tr = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Pc = typeof window > "u" ? Kt : $s, Fc = ({
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
  searchIcon: f,
  notificationsIcon: N,
  searchShortcut: S = !1,
  brandColor: T,
  contentPadding: y = br,
  userMenuItems: R,
  sidebarBackgroundColor: C,
  sidebarHeaderBackgroundColor: E,
  groupAccentColor: A,
  activeSidebarForegroundColor: O,
  enableRefreshToken: _ = !1,
  holdSessionSkeleton: H = !1,
  sessionSkeletonContent: F,
  activePath: B,
  onLinkClick: M,
  showProfile: W = !0,
  userName: te,
  userRole: D,
  userAvatar: v,
  userEmail: $,
  onLogout: P,
  showSettings: Z = !0,
  onSettingsClick: U,
  onProfileClick: ne,
  onAiUsageClick: we,
  showNotifications: j = !0,
  notificationCount: Y = 0,
  NotificationSidebarContent: ue,
  whatsNewCount: J = 0,
  onNotificationsClick: ee,
  platforms: ae,
  currentPlatformKey: fe,
  onPlatformSelect: he,
  onVerify: I,
  alertProps: z,
  style: q,
  sidebarStyles: X,
  contentStyles: ie,
  className: le,
  sidebarClassName: Ee,
  contentClassName: se,
  accentColor: Ne,
  sidebarAccentColor: De,
  sidebarActiveBackgroundColor: pe,
  sidebarGroupArrowColor: ke,
  sidebarForegroundColor: ve,
  contentBackgroundColor: Se,
  theme: Ae = "light",
  darkModeSelector: Le,
  showThemeToggler: et = !1,
  onThemeToggle: dn,
  GlobalChatSidebar: it,
  useChatSidebar: ct,
  chatPanelMode: un = "docked",
  chatPanelPosition: wn = "right",
  chatPanelWidth: Ot = 420,
  onChatClose: Zn,
  showAssistant: st = !1,
  assistantPlacement: $t = "sidebar",
  assistantShortcut: It = "j",
  onAssistantClick: Ve,
  assistantActive: dt = !1,
  assistantBusy: fn = !1,
  assistantLabel: Jn = "Nexa",
  customNavbar: mn,
  customNavbarProps: ut,
  redirectToLogin: wt,
  apiBaseUrl: kt
}) => {
  const w = Ir(), k = Ae === "dark", Q = Ne ?? "#01584f", G = De ?? Q, K = yr(
    typeof Se == "object" ? Se[Ae] : Se,
    k
  ), V = i === "collapsible", me = i === "panel", Pe = me && r && !w, ge = i === "rail-labeled", Ce = V || ge, be = jn(
    C,
    k
  ), ft = E ?? be, _e = ve ?? (k ? "#ffffff" : G), Lt = A ?? Jt(_e), Mt = E ? _l(ft) : _e, Zl = (L) => /* @__PURE__ */ l(
    "div",
    {
      role: "img",
      "aria-label": `${o} logo`,
      className: "lw:size-7 lw:shrink-0",
      style: {
        backgroundColor: L,
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
  ), hn = T ?? Mt, [Jl, pn] = Xe(
    null
  ), Qn = ((ae == null ? void 0 : ae.length) ?? 0) > 1, Yr = il(() => pn(null), []), Vr = (L) => {
    pn(null), he ? he(L) : L.key !== fe && L.url && window.location.assign(L.url);
  }, Ql = (L) => Qn ? /* @__PURE__ */ l(
    uc,
    {
      anchorEl: Jl,
      onClose: Yr,
      platforms: ae,
      currentKey: fe,
      onSelect: Vr,
      accentColor: Q,
      glass: a === "flyout" && (V || me) && !w,
      children: L
    }
  ) : L, gn = Qn ? (L) => pn(L.currentTarget) : g, bn = Qn ? !!Jl : void 0, el = Ql(
    p ?? Zl(hn)
  ), Zr = Ql(
    p ?? Zl(T ?? _e)
  ), tl = Oc(), We = Kn(a, i), Ue = We || !tl.expanded, Fe = r && !w && qs(u, a, i), Be = Tc(Fe), [Jr, Qr] = Xe(0), [es, ts] = Xe(Be.shown);
  es !== Be.shown && (ts(Be.shown), Be.shown || (Qr((L) => L + 1), pn(null)));
  const eo = We ? "popover" : "expand", to = We ? Zt : qt, no = We ? "transparent" : be, lo = We && !E ? "transparent" : ft, [ns, oo] = Xe(!1), ls = il(() => oo(!1), []), Ze = vr({
    showSidebar: r,
    isMobile: w,
    sidebarVariant: i,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [ro, mt] = Xe(!1), [so, nl] = Xe(!1), Me = w && d === "bottom-bar", ao = `calc(${Hr}px + env(safe-area-inset-bottom, 0px))`, [Dt, io] = Xe({ open: !1, tab: "notifications" }), co = () => io((L) => ({ ...L, open: !1 })), os = j && !!ue, uo = yn(null), [rs, ss] = Xe(null), Pt = il(() => {
    const L = w ? null : $c(uo.current), ce = L && Fe ? { ...L, left: lt } : L;
    ss(
      (Re) => Re && ce && Re.left === ce.left && Re.top === ce.top && Re.height === ce.height ? Re : ce
    );
  }, [w, Fe]);
  Kt(() => {
    if (Dt.open)
      return Pt(), window.addEventListener("resize", Pt), () => window.removeEventListener("resize", Pt);
  }, [Dt.open, Pt]);
  const [as, is] = Xe(!0), [cs, ds] = Xe(!1), ll = ct == null ? void 0 : ct(), wo = (ll == null ? void 0 : ll.isOpen) ?? !1, fo = un === "floating" ? "floating" : "docked", us = fo === "docked" && wo && it && !w ? Ot : 0, xn = yn(I), mo = yn(!1), ho = Os(
    () => li(kt),
    [kt]
  );
  Kt(() => {
    xn.current = I;
  }, [I]);
  const ol = yn(Ve);
  ol.current = Ve;
  const Ft = st && It ? It.toLowerCase() : null;
  Kt(() => {
    if (!Ft)
      return;
    const L = (ce) => {
      (ce.metaKey || ce.ctrlKey) && !ce.altKey && !ce.shiftKey && ce.key.toLowerCase() === Ft && ol.current && (ce.preventDefault(), ol.current());
    };
    return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
  }, [Ft]);
  const po = (L) => {
    const ce = P(L);
    ce instanceof Promise && ce.catch((Re) => {
      console.error("Error in logout handler:", Re);
    });
  };
  if (Pc(() => {
    (() => {
      var ce;
      try {
        const { isAuthenticated: Re } = ti();
        if (!Re) {
          console.log("No session found, redirecting to login"), on(), wt();
          return;
        }
        if (!mo.current) {
          const { user: zt, error: al } = ni();
          if (zt && !al) {
            const vs = {
              name: zt.name || "",
              email: zt.email || "",
              profilePicture: zt.profilePicture || "",
              role: zt.role || ""
            };
            mo.current = !0, (ce = xn.current) == null || ce.call(xn, vs);
          } else
            al && console.error("Error getting user data:", al);
        }
        ds(!0);
      } catch (Re) {
        console.error("Error checking session:", Re), on(), wt();
      } finally {
        is(!1);
      }
    })();
  }, [wt]), Kt(() => {
    _ && oi(ho, wt);
  }, [_, ho]), as || H)
    return /* @__PURE__ */ l(
      Qa,
      {
        theme: Ae,
        darkModeSelector: Le,
        sidebarVariant: i,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: r,
        contentPadding: y,
        sidebarBackgroundColor: C,
        contentBackgroundColor: Se,
        content: F
      }
    );
  if (!cs)
    return null;
  const Bt = h ?? (mn ? /* @__PURE__ */ l(mn, { ...ut }) : null), ws = (L) => {
    mt(!1), nl(!1), Pt(), io({ open: !0, tab: L });
  }, rl = ue && (() => ws("notifications")), fs = Y + J, go = {
    avatarColor: G,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: R == null ? void 0 : R.map(
      (L) => L.onClick || !L.path ? L : { ...L, onClick: () => M == null ? void 0 : M(L.path) }
    ),
    showNotifications: j,
    notificationCount: Y,
    whatsNewCount: J,
    onNotificationsClick: rl,
    showProfile: W,
    userName: te,
    userRole: D,
    userAvatar: v,
    showSettings: Z,
    onSettingsClick: U,
    showThemeToggler: et,
    theme: Ae,
    onThemeToggle: dn,
    onLogout: po
  }, sl = (L) => /* @__PURE__ */ l(
    fc,
    {
      ...go,
      compact: L,
      color: _e,
      hoverColor: Lt
    }
  ), bo = Ft ? [tr() ? "⌘" : "Ctrl", Ft.toUpperCase()] : void 0, ms = (L) => st && $t === "sidebar" ? /* @__PURE__ */ l(
    Go,
    {
      variant: L ? "sidebar-icon" : "sidebar",
      onClick: Ve,
      active: dt,
      busy: fn,
      shortcutKeys: bo,
      accentColor: _e
    }
  ) : null, hs = S ? [tr() ? "⌘" : "Ctrl", S.toUpperCase()] : void 0, ps = (L) => Bt ? /* @__PURE__ */ l(
    yc,
    {
      search: Bt,
      icon: f,
      mode: L,
      onExpand: () => {
        tl.pin(), oo(!0);
      },
      autoFocus: ns,
      onAutoFocused: ls,
      color: _e,
      hoverColor: Lt,
      shortcutKeys: hs
    }
  ) : null, vn = (L) => {
    const ce = ms(L !== "full"), Re = ps(L);
    return ce || Re ? /* @__PURE__ */ x(
      "div",
      {
        className: b(
          "lw:flex lw:flex-col",
          L === "full" ? "lw:items-stretch" : "lw:items-center"
        ),
        style: { gap: We ? Xn : 12 },
        children: [
          ce,
          We && ce && Re ? /* @__PURE__ */ l(
            "div",
            {
              role: "separator",
              className: "lw:w-full lw:border-t lw:border-solid",
              style: {
                borderTopColor: Jt(_e)
              }
            }
          ) : null,
          Re
        ]
      }
    ) : void 0;
  }, xo = () => /* @__PURE__ */ l(
    Al,
    {
      mainLinks: t,
      secondaryLinks: n,
      activePath: B,
      onLinkClick: M,
      showHeaderBar: V,
      logo: el,
      title: o,
      onBrandClick: gn,
      brandMenuOpen: bn,
      brandColor: hn,
      headerBackgroundColor: V ? lo : void 0,
      headerForegroundColor: V ? Mt : void 0,
      activeAccentColor: G,
      activeBackgroundColor: pe,
      groupArrowColor: ke,
      groupAccentColor: A,
      activeForegroundColor: O,
      foregroundColor: ve,
      surfaceBackgroundColor: no,
      flyoutSurfaceColor: be,
      collapsed: ge || Ue,
      showLabels: ge,
      expandedWidth: El,
      collapsedWidth: ge ? hr : to,
      topContent: vn(
        ge ? "popover" : Ue ? eo : "full"
      ),
      footer: sl(ge || Ue),
      submenuMode: We ? "flyout" : "inline"
    }
  ), vo = (L) => We ? gs(L) : bs(L), gs = (L) => /* @__PURE__ */ x(
    "aside",
    {
      ...Fe ? Be.rootProps : {},
      "data-auto-hide": Fe ? "true" : void 0,
      "data-shown": Fe ? String(Be.shown) : void 0,
      className: b(
        // Above the page, including its sticky app bars
        "lw:top-0 lw:z-[1101] lw:h-screen",
        Fe ? "lw:pointer-events-none lw:fixed lw:left-0" : "lw:sticky lw:shrink-0 lw:self-start"
      ),
      style: Fe ? {
        width: Zt + 2 * lt
      } : {
        width: Ze,
        minWidth: Ze,
        backgroundColor: K
      },
      children: [
        Fe && /* @__PURE__ */ l(
          "div",
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            className: "lw:pointer-events-auto lw:absolute lw:inset-y-0 lw:left-0",
            style: { width: Lc }
          }
        ),
        Fe && /* @__PURE__ */ l(
          "div",
          {
            ref: Be.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(Be.nearEdge),
            "aria-hidden": "true",
            className: "lw:pointer-events-none lw:absolute lw:inset-y-0 lw:left-0 lw:transition-opacity lw:duration-200 lw:ease-[ease]",
            style: {
              "--edge-glow-y": "50%",
              width: er,
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${er}px ${Nl}px at 0 var(--edge-glow-y), ${rt(_e, k ? 0.5 : 0.4)}, ${rt(_e, 0)})`,
              opacity: Be.nearEdge ? 1 : 0
            },
            children: /* @__PURE__ */ l(
              "span",
              {
                className: "lw:absolute lw:inset-y-0 lw:left-0 lw:w-[3px]",
                style: {
                  background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${Nl}px), ${rt(_e, k ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${Nl}px))`
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
              Fe && dr,
              Ee
            ),
            style: {
              top: lt,
              bottom: lt,
              left: lt,
              width: Zt,
              borderRadius: gr,
              ...Fe && {
                pointerEvents: Be.shown ? "auto" : "none",
                opacity: Be.shown ? 1 : 0,
                transform: Be.shown ? "none" : `translateX(calc(-100% - ${2 * lt}px))`,
                transition: Mc
              },
              ...X
            },
            children: [
              /* @__PURE__ */ l(
                Vn,
                {
                  isDark: k,
                  solid: be,
                  className: "lw:absolute lw:inset-0",
                  style: { borderRadius: "inherit" }
                }
              ),
              /* @__PURE__ */ l(
                "div",
                {
                  className: "lw:relative lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-hidden",
                  style: { borderRadius: "inherit" },
                  children: L
                },
                Jr
              )
            ]
          }
        )
      ]
    }
  ), bs = (L) => /* @__PURE__ */ l(
    "aside",
    {
      className: "lw:sticky lw:top-0 lw:z-[1101] lw:h-screen lw:shrink-0 lw:self-start",
      style: {
        width: qt,
        minWidth: qt
      },
      children: /* @__PURE__ */ l(
        "div",
        {
          ...We ? {} : tl.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ue ? "false" : "true",
          className: b(
            "lw:absolute lw:top-0 lw:left-0 lw:flex lw:h-full lw:flex-col lw:overflow-hidden lw:border-r lw:border-solid lw:border-border",
            Ee
          ),
          style: {
            width: Ue ? qt : El,
            backgroundColor: be,
            boxShadow: Ue ? "none" : `4px 0 24px rgba(0, 0, 0, ${k ? 0.5 : 0.12})`,
            transition: kc,
            ...X
          },
          children: L
        }
      )
    }
  ), xs = xr(y), ht = w ? null : rs;
  return /* @__PURE__ */ l(sr.Provider, { value: Ae, children: /* @__PURE__ */ l(ur.Provider, { value: G, children: /* @__PURE__ */ l(Hn.Provider, { value: be, children: /* @__PURE__ */ l(Xr.Provider, { value: N, children: /* @__PURE__ */ x(
    "div",
    {
      ref: uo,
      "data-lw-scope": "",
      "data-lw-theme": Ae,
      className: b("lw:flex lw:min-h-screen", le),
      style: q,
      children: [
        w && /* @__PURE__ */ l(
          Hi,
          {
            height: kn,
            onMenuClick: r && !Me ? () => mt(!0) : void 0,
            appName: o,
            logo: el,
            onBrandClick: gn,
            brandMenuOpen: bn,
            background: ft,
            color: Mt,
            brandColor: hn,
            endContent: j ? /* @__PURE__ */ l(
              Yl,
              {
                count: fs,
                onClick: rl,
                color: Mt,
                hoverColor: Lt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        r && !w && ge && /* @__PURE__ */ l(
          "aside",
          {
            className: b(
              "lw:sticky lw:top-0 lw:z-[2] lw:flex lw:h-screen lw:shrink-0 lw:flex-col lw:self-start lw:border-r lw:border-solid lw:border-border",
              Ee
            ),
            style: {
              width: Ze,
              minWidth: Ze,
              ...X
            },
            children: xo()
          }
        ),
        r && !w && V && vo(
          /* @__PURE__ */ x(xe, { children: [
            xo(),
            (z == null ? void 0 : z.show) && !Ue && /* @__PURE__ */ l(Cn, { ...z })
          ] })
        ),
        Pe && vo(
          /* @__PURE__ */ x(xe, { children: [
            /* @__PURE__ */ l(
              ac,
              {
                mainLinks: t,
                secondaryLinks: n,
                activePath: B,
                onLinkClick: M,
                logo: el,
                title: o,
                onBrandClick: gn,
                brandMenuOpen: bn,
                brandColor: hn,
                headerBackgroundColor: lo,
                headerForegroundColor: Mt,
                activeAccentColor: G,
                activeBackgroundColor: pe,
                groupArrowColor: ke,
                groupAccentColor: A,
                activeForegroundColor: O,
                foregroundColor: ve,
                surfaceBackgroundColor: no,
                flyoutSurfaceColor: be,
                collapsed: Ue,
                expandedWidth: El,
                collapsedWidth: to,
                topContent: vn(
                  Ue ? eo : "full"
                ),
                submenuMode: We ? "flyout" : "inline",
                color: _e,
                hoverColor: Lt,
                avatarColor: G,
                showProfile: W,
                userName: te,
                userEmail: $,
                userRole: D,
                userAvatar: v,
                showNotifications: j,
                notificationCount: Y,
                onNotificationsClick: os ? rl : ee,
                whatsNewCount: J,
                onProfileClick: ne,
                onAiUsageClick: we,
                menuItems: R,
                onLogout: po,
                theme: Ae,
                showThemeToggler: et,
                onThemeToggle: dn
              }
            ),
            (z == null ? void 0 : z.show) && !Ue && /* @__PURE__ */ l(Cn, { ...z })
          ] })
        ),
        r && !w && !Ce && !me && // The fixed rail: a permanent drawer, its column fixed
        // to the window's left edge
        /* @__PURE__ */ l(
          "div",
          {
            "data-slot": "rail-drawer",
            className: b(
              "lw:z-[2] lw:shrink-0",
              Ee
            ),
            style: {
              width: Ze,
              ...X
            },
            children: /* @__PURE__ */ x(
              "aside",
              {
                "data-slot": "rail-drawer-paper",
                className: "lw:fixed lw:top-0 lw:left-0 lw:z-[1200] lw:flex lw:h-full lw:flex-col lw:overflow-y-auto lw:px-3 lw:pt-4",
                style: {
                  width: Ze,
                  backgroundColor: K
                },
                children: [
                  /* @__PURE__ */ l("div", { className: "lw:mb-3 lw:flex lw:justify-center", children: /* @__PURE__ */ l(
                    Fn,
                    {
                      logo: Zr,
                      appName: o,
                      onClick: gn,
                      menuOpen: bn,
                      color: T ?? _e,
                      testId: "sidebar-header-brand"
                    }
                  ) }),
                  vn("popover"),
                  /* @__PURE__ */ x("div", { className: "lw:mt-2 lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-y-auto", children: [
                    /* @__PURE__ */ l(
                      Ti,
                      {
                        mainLinks: t,
                        secondaryLinks: n,
                        activePath: B,
                        onLinkClick: M,
                        accentColor: G,
                        surfaceBackgroundColor: K,
                        railShowTitles: s
                      }
                    ),
                    (z == null ? void 0 : z.show) && /* @__PURE__ */ l(
                      Cn,
                      {
                        ...z
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l("div", { className: "lw:py-3", children: sl(!0) })
                ]
              }
            )
          }
        ),
        r && w && /* @__PURE__ */ l(
          $l,
          {
            open: ro,
            onOpenChange: mt,
            children: /* @__PURE__ */ x(
              zn,
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
                  backgroundColor: be
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
                    Al,
                    {
                      mainLinks: t,
                      secondaryLinks: n,
                      activePath: B,
                      onLinkClick: (L) => {
                        M == null || M(L), mt(!1);
                      },
                      onLinkAction: () => mt(!1),
                      collapsed: !1,
                      expandedWidth: Me ? "100%" : Ic,
                      activeAccentColor: G,
                      activeBackgroundColor: pe,
                      groupArrowColor: ke,
                      groupAccentColor: A,
                      activeForegroundColor: O,
                      foregroundColor: ve,
                      surfaceBackgroundColor: be,
                      topInsetPx: Me ? 8 : 0,
                      topContent: Me ? void 0 : vn("full"),
                      footer: Me ? void 0 : sl(!1)
                    }
                  ),
                  (z == null ? void 0 : z.show) && /* @__PURE__ */ l(Cn, { ...z })
                ]
              }
            )
          }
        ),
        Me && Bt && /* @__PURE__ */ l(
          Gi,
          {
            open: so,
            onClose: () => nl(!1),
            search: Bt
          }
        ),
        Me && /* @__PURE__ */ l(
          Fi,
          {
            ...go,
            pinnedLinks: m,
            activePath: B,
            onLinkClick: M,
            onMenuClick: r ? () => mt(!0) : void 0,
            menuOpen: ro,
            onSearchClick: Bt ? () => nl(!0) : void 0,
            searchOpen: so,
            showAssistant: st,
            assistantLabel: Jn,
            onAssistantClick: Ve,
            assistantActive: dt,
            showProfile: W,
            background: be,
            color: _e,
            activeColor: G,
            activeBackground: Lt
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
              ...xs,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": w ? `${kn}px` : "0px",
              padding: "var(--lumora-content-padding)",
              width: Ze ? `calc(100% - ${Ze}px)` : "100%",
              marginTop: w ? `${kn}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Me && {
                paddingBottom: `calc(var(--lumora-content-padding) + ${ao})`
              },
              backgroundColor: K,
              ...ie
            },
            children: e
          }
        ),
        it && /* @__PURE__ */ l(
          hi,
          {
            open: wo,
            variant: fo,
            position: wn,
            width: Ot,
            sidebarWidthPx: Ze,
            bottomOffsetPx: st && $t === "floating" ? Dc : 0,
            fullScreen: w,
            fullScreenBottom: Me ? ao : "0px",
            onClose: Zn,
            children: /* @__PURE__ */ l(it, {})
          }
        ),
        st && $t === "floating" && !Me && /* @__PURE__ */ l(
          Go,
          {
            variant: "floating",
            rightOffsetPx: us,
            shortcutKeys: bo,
            onClick: Ve,
            active: dt,
            busy: fn
          }
        ),
        j && ue && /* @__PURE__ */ l(
          $l,
          {
            open: Dt.open,
            onOpenChange: (L) => {
              L || co();
            },
            children: /* @__PURE__ */ l(
              zn,
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
                      ue,
                      {
                        onClose: co,
                        initialTab: Dt.tab
                      },
                      Dt.tab
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
}, Zc = Fc, ze = {
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
}, Ge = {
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
}, He = (e) => `${e / 16}rem`, oe = (...e) => [
  `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
  `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
  `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`
].join(","), Bc = [
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
], Jc = (e) => {
  const t = e === "dark", n = [...Bc];
  return n[1] = t ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: t ? ze[300] : ze[200],
        main: ze[400],
        dark: ze[700],
        contrastText: ze[50]
      },
      info: t ? {
        light: ze[500],
        main: ze[700],
        dark: ze[900],
        contrastText: ze[300]
      } : {
        light: ze[100],
        main: ze[300],
        dark: ze[600],
        contrastText: Ge[50]
      },
      warning: t ? { light: bt[400], main: bt[500], dark: bt[700] } : { light: bt[300], main: bt[400], dark: bt[800] },
      error: t ? { light: xt[400], main: xt[500], dark: xt[700] } : { light: xt[300], main: xt[400], dark: xt[800] },
      success: t ? { light: gt[400], main: gt[500], dark: gt[700] } : { light: gt[300], main: gt[400], dark: gt[800] },
      grey: Ge,
      divider: t ? vt(Ge[700], 0.6) : vt(Ge[300], 0.4),
      background: t ? { default: Ge[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: t ? { primary: "hsl(0, 0%, 100%)", secondary: Ge[400] } : { primary: Ge[800], secondary: Ge[600] },
      action: t ? {
        hover: vt(Ge[600], 0.2),
        selected: vt(Ge[600], 0.3)
      } : {
        hover: vt(Ge[200], 0.2),
        selected: vt(Ge[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: He(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: He(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: He(30), lineHeight: 1.2 },
      h4: { fontSize: He(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: He(20), fontWeight: 600 },
      h6: { fontSize: He(18), fontWeight: 600 },
      subtitle1: { fontSize: He(18) },
      subtitle2: { fontSize: He(14), fontWeight: 500 },
      body1: { fontSize: He(14) },
      body2: { fontSize: He(14), fontWeight: 400 },
      caption: { fontSize: He(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: n
  };
};
export {
  de as AUTH_ERROR_CODES,
  re as AuthError,
  Al as CollapsibleSidebar,
  Yc as FullBleedSection,
  Ka as Kbd,
  Qa as LumoraShellSkeleton,
  Zc as LumoraWrapper,
  on as clearAuthTokens,
  Zc as default,
  Vc as getAuthErrorMessage,
  ln as getAuthTokens,
  ni as getCurrentUser,
  Jc as getDesignTokens,
  ti as isAuthenticated,
  Cl as logAuthError,
  Lr as storeAuthTokens
};
